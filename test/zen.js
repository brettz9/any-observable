import register from '../register.js';
import test from 'ava';
import ZenObservable from 'zen-observable';

register('zen-observable');

const implementation = import('../implementation.js');
const AnyObservable = import('../index.js');

test('main', t => {
	t.is(AnyObservable, ZenObservable);
	t.is(implementation, 'zen-observable');
});
