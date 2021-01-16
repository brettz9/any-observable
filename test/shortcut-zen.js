import '../register/zen.js';
import test from 'ava';
import ZenObservable from 'zen-observable';
import implementation from '../implementation.js';
import AnyObservable from '../index.js';

test('main', t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
