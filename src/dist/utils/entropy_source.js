var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { awaitIfAsync, forEachWithBreaks, wait } from './async';
import { excludes } from './data';
function ensureErrorWithMessage(error) {
    return error && typeof error === 'object' && 'message' in error ? error : { message: error };
}
/**
 * Loads the given entropy source. Returns a function that gets an entropy component from the source.
 *
 * The result is returned synchronously to prevent `loadSources` from
 * waiting for one source to load before getting the components from the other sources.
 */
export function loadSource(source, sourceOptions) {
    const isFinalResultLoaded = (loadResult) => {
        return typeof loadResult !== 'function';
    };
    const sourceLoadPromise = new Promise((resolveLoad) => {
        const loadStartTime = Date.now();
        // `awaitIfAsync` is used instead of just `await` in order to measure the duration of synchronous sources
        // correctly (other microtasks won't affect the duration).
        awaitIfAsync(source.bind(null, sourceOptions), (...loadArgs) => {
            const loadDuration = Date.now() - loadStartTime;
            // Source loading failed
            if (!loadArgs[0]) {
                return resolveLoad(() => ({ error: ensureErrorWithMessage(loadArgs[1]), duration: loadDuration }));
            }
            const loadResult = loadArgs[1];
            // Source loaded with the final result
            if (isFinalResultLoaded(loadResult)) {
                return resolveLoad(() => ({ value: loadResult, duration: loadDuration }));
            }
            // Source loaded with "get" stage
            resolveLoad(() => new Promise((resolveGet) => {
                const getStartTime = Date.now();
                awaitIfAsync(loadResult, (...getArgs) => {
                    const duration = loadDuration + Date.now() - getStartTime;
                    // Source getting failed
                    if (!getArgs[0]) {
                        return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration });
                    }
                    // Source getting succeeded
                    resolveGet({ value: getArgs[1], duration });
                });
            }));
        });
    });
    return function getComponent() {
        return sourceLoadPromise.then((finalizeSource) => finalizeSource());
    };
}
/**
 * Loads the given entropy sources. Returns a function that collects the entropy components.
 *
 * The result is returned synchronously in order to allow start getting the components
 * before the sources are loaded completely.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
export function loadSources(sources, sourceOptions, excludeSources) {
    const includedSources = Object.keys(sources).filter((sourceKey) => excludes(excludeSources, sourceKey));
    const sourceGetters = Array(includedSources.length);
    // Using `forEachWithBreaks` allows asynchronous sources to complete between synchronous sources
    // and measure the duration correctly
    forEachWithBreaks(includedSources, (sourceKey, index) => {
        sourceGetters[index] = loadSource(sources[sourceKey], sourceOptions);
    });
    return function getComponents() {
        return __awaiter(this, void 0, void 0, function* () {
            // Add the keys immediately to keep the component keys order the same as the source keys order
            const components = {};
            for (const sourceKey of includedSources) {
                components[sourceKey] = undefined;
            }
            const componentPromises = Array(includedSources.length);
            for (;;) {
                let hasAllComponentPromises = true;
                yield forEachWithBreaks(includedSources, (sourceKey, index) => {
                    if (!componentPromises[index]) {
                        // `sourceGetters` may be incomplete at this point of execution because `forEachWithBreaks` is asynchronous
                        if (sourceGetters[index]) {
                            componentPromises[index] = sourceGetters[index]().then((component) => (components[sourceKey] = component));
                        }
                        else {
                            hasAllComponentPromises = false;
                        }
                    }
                });
                if (hasAllComponentPromises) {
                    break;
                }
                yield wait(1); // Lets the source load loop continue
            }
            yield Promise.all(componentPromises);
            return components;
        });
    };
}
