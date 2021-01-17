import assert from 'assert';
import ZenObservable from 'zen-observable';
import register from '../../register.js';

(async () => {
	await register('zen-observable', {Observable: ZenObservable});

	const AnyObservable = await import('../../index.js');

	it('zen', () => {
		assert.strictEqual(AnyObservable, ZenObservable);
	});
})();
