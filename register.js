import loader from './loader.js';

const register = loader(globalThis, loadImplementation);

export default register;

function loadImplementation(implementation) {
	let finalImplementation;

	if (implementation === 'globalThis.Observable') {
		// If no implementation or env specified use globalThis.Observable
		finalImplementation = {
			Observable: globalThis.Observable,
			implementation: 'globalThis.Observable'
		};
	} else if (implementation) {
		// If implementation specified, require it
		const package_ = import(implementation);

		finalImplementation = {
			Observable: package_.Observable || package_.default || package_,
			implementation
		};
	} else {
		// Try to auto detect implementation. This is non-deterministic
		// and should prefer other branches, but this is our last chance
		// to load something without throwing error.
		finalImplementation = tryAutoDetect();
	}

	if (!finalImplementation) {
		throw new Error('Cannot find any-observable implementation nor `globalThis.Observable`. You must install polyfill or call `import(\'any-observable/register\') with your preferred implementation, for example, `(await import(\'any-observable/register\'))(\'rxjs\')` on app load prior to any `import(\'any-observable\').');
	}

	return finalImplementation;
}

function tryAutoDetect() {
	const packages = [
		'rxjs',
		'zen-observable'
	];

	for (const package_ of packages) {
		try {
			return loadImplementation(package_);
		} catch {}
	}
}
