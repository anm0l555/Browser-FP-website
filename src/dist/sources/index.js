// import { IFingerprint } from '../types'
import getAudioFingerprint from './audio';
import getCanvasFingerprint from './canvas';
import { loadSources } from '../utils/entropy_source';
import getPlatform from './platform';
export const sources = {
    canvas: getCanvasFingerprint,
    audio: getAudioFingerprint,
    platform: getPlatform
};
/**
 * Loads the built-in entropy sources.
 * Returns a function that collects the entropy components to make the visitor identifier.
 */
export default function loadBuiltinSources(options) {
    return loadSources(sources, options, []);
}
