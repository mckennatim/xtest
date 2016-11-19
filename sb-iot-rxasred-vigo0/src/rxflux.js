import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import harrysally from './reducers/harrysally'
import route from './reducers/route'
import catboxr from './reducers/catboxr'
import reducer from './reducer';
import {rootReducer} from './reducers/index'; //uses combineReducers
import { isObservable } from './util/utils';
//import Cat from './components/Cat';

const action$ = new Subject();

export const createStore = (initState) =>
  action$
    .flatMap((action) => isObservable(action) ? action : Observable.from([action]))
    .startWith(initState)
    .scan(rootReducer);

export const actionCreator = (func) => (...args) => {
  const action = func.call(null, ...args);
  action$.next(action);
  if (isObservable(action.payload))
    action$.next(action.payload);
  return action;
};




