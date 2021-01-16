import assert from 'assert';
import ZenObservable from 'zen-observable';
import register from '../../register.js';

register('zen-observable', {Observable: ZenObservable});

const AnyObservable = import('../../index.js');

it('zen', () => {
	assert.strictEqual(AnyObservable, ZenObservable);
});
