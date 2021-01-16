/* eslint-env node, browser */
import loader from './loader.js';

const shim = loader(window, loadImplementation);

export default shim;

/**
Browser specific `loadImplementation`. Always uses `window.Observable`.

To register a custom implementation, use the `Observable` option.
*/
function loadImplementation() {
	if (typeof window.Observable === 'undefined') {
		throw new TypeError(
			'any-observable browser requires a polyfill or explicit registration, for example:\n(await import("any-observable/register"))("rxjs", {Observable: (await import("rxjs")).Observable})'
		);
	}

	return {
		Observable: window.Observable,
		implementation: 'window.Observable'
	};
}
