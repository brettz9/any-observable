import '../register/rxjs-all.js';
import test from 'ava';
import {Observable as RxJsObservable} from 'rxjs';
import {map} from 'rxjs/operators';
import implementation from '../implementation.js';
import AnyObservable from '../index.js';

test('main', t => {
	t.is(AnyObservable, RxJsObservable);
	t.is(implementation, 'rxjs');
	t.is(typeof map, 'function');
});
