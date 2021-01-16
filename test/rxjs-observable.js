import register from '../register.js';
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import implementation from '../implementation.js';
import AnyObservable from '../index.js';

register('rxjs');

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
});
