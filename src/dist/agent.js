var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { version } from '../package.json';
import { requestIdleCallbackIfAvailable } from './utils/async';
import { x64hash128 } from './utils/hashing';
import { errorToObject } from './utils/misc';
import loadBuiltinSources from './sources';
import getConfidence from './confidence';
function componentsToCanonicalString(components) {
    let result = '';
    for (const componentKey of Object.keys(components).sort()) {
        const component = components[componentKey];
        const value = component.error ? 'error' : JSON.stringify(component.value);
        result += `${result ? '|' : ''}${componentKey.replace(/([:|\\])/g, '\\$1')}:${value}`;
    }
    return result;
}
export function componentsToDebugString(components) {
    return JSON.stringify(components, (_key, value) => {
        if (value instanceof Error) {
            return errorToObject(value);
        }
        return value;
    }, 2);
}
export function hashComponents(components) {
    return x64hash128(componentsToCanonicalString(components));
}
/**
 * Makes a GetResult implementation that calculates the visitor id hash on demand.
 * Designed for optimisation.
 */
function makeLazyGetResult(components) {
    let visitorIdCache;
    // This function runs very fast, so there is no need to make it lazy
    const confidence = getConfidence(components);
    // A plain class isn't used because its getters and setters aren't enumerable.
    return {
        get visitorId() {
            if (visitorIdCache === undefined) {
                visitorIdCache = hashComponents(this.components);
            }
            return visitorIdCache;
        },
        set visitorId(visitorId) {
            visitorIdCache = visitorId;
        },
        confidence,
        components,
        version,
    };
}
/**
 * A delay is required to ensure consistent entropy components.
 * See https://github.com/fingerprintjs/fingerprintjs/issues/254
 * and https://github.com/fingerprintjs/fingerprintjs/issues/307
 * and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
 */
export function prepareForSources(delayFallback = 50) {
    // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
    return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
}
/**
 * The function isn't exported from the index file to not allow to call it without `load()`.
 * The hiding gives more freedom for future non-breaking updates.
 *
 * A factory function is used instead of a class to shorten the attribute names in the minified code.
 * Native private class fields could've been used, but TypeScript doesn't allow them with `"target": "es5"`.
 */
function makeAgent(getComponents, debug) {
    const creationTime = Date.now();
    return {
        get(options) {
            return __awaiter(this, void 0, void 0, function* () {
                const startTime = Date.now();
                const components = yield getComponents();
                const result = makeLazyGetResult(components);
                if (debug || (options === null || options === void 0 ? void 0 : options.debug)) {
                    // console.log is ok here because it's under a debug clause
                    // eslint-disable-next-line no-console
                    console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${result.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${startTime - creationTime}
visitorId: ${result.visitorId}
components: ${componentsToDebugString(components)}
\`\`\``);
                }
                return result;
            });
        },
    };
}
/**
 * Sends an unpersonalized AJAX request to collect installation statistics
 */
function monitor() {
    // The FingerprintJS CDN (https://github.com/fingerprintjs/cdn) replaces `window.__fpjs_d_m` with `true`
    if (window.__fpjs_d_m || Math.random() >= 0.001) {
        return;
    }
    try {
        const request = new XMLHttpRequest();
        request.open('get', `https://m1.openfpcdn.io/fingerprintjs/v${version}/npm-monitoring`, true);
        request.send();
    }
    catch (error) {
        // console.error is ok here because it's an unexpected error handler
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
/**
 * Builds an instance of Agent and waits a delay required for a proper operation.
 */
export function load({ delayFallback, debug, monitoring = true } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (monitoring) {
            monitor();
        }
        yield prepareForSources(delayFallback);
        const getComponents = loadBuiltinSources({ debug });
        return makeAgent(getComponents, debug);
    });
}
