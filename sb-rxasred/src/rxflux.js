import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import { isObservable } from './util/utils';
import {rootReducer} from './reducers/index'; //uses combineReducers
import reducer from './reducers/reducer' //original reducer

console.log(reducer)
console.log(rootReducer)

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

