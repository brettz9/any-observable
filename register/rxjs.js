import * as rxjs from 'rxjs';
import {Observable} from 'rxjs';
import register from '../register.js';

register('rxjs', {Observable});

rxjs.of; // eslint-disable-line no-unused-expressions
rxjs.from; // eslint-disable-line no-unused-expressions
