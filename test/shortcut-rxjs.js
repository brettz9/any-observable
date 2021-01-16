import '../register/rxjs.js';
import test from 'ava';
import {
	Observable as RxJsObservable,
	of as RxJsOf,
	from as RxJsFrom
} from 'rxjs';
import implementation from '../implementation.js';
import AnyObservable from '../index.js';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsOf, 'function');
	t.is(typeof RxJsFrom, 'function');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
