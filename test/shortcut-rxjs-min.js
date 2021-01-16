import '../register/rxjs-min.js';
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import implementation from '../implementation.js';
import AnyObservable from '../index.js';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof RxJsObservable.of, 'undefined');
	t.is(typeof RxJsObservable.from, 'undefined');
	t.is(typeof RxJsObservable.prototype.map, 'undefined');
});
