import register from '../register.js';
import test from 'ava';
import ZenObservable from 'zen-observable';

(async () => {
	await register('zen-observable');
	const implementation = await import('../implementation.js');
	const AnyObservable = await import('../index.js');

	test('main', t => {
		t.is(AnyObservable, ZenObservable);
		t.is(implementation, 'zen-observable');
	});
})();
