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


// //my take at deconstucting actionCreator
// export const createAction = (initState) =>
//   action$
//     .flatMap((action) => isObservable(action) ? action : Observable.from([action]))
//     .startWith(initState)


const stat = { 
	harrysally: {
	  name: 'Harry', 
	  users: [],
    isLoading: false
	},
	route: {
		currentDevId: '00002zzz',
		currentDev: {},
	  rtpg: '<p>Cat</p>'
	},
  devices: [
    {
      id: 'CYURD001',
      name: 'geniot',
      desc: '2temp, 3timer demo board',
      location: {
        lat: 222,
        lon: 333,
        zip: '02130',
        street: '12 Parley Vale',
        city: 'Jamaica Plain',
        state: 'MA'
      }
    },
    {
      id: 'CYURD002',
      name: 'cascada',
      desc: '3timer for waterfall and garden',
      location: {
        lat: 222,
        lon: 333,
        zip: '02130',
        street: '12 Parley Vale',
        city: 'Jamaica Plain',
        state: 'MA'
      }
    }
  ],
};


// var nst$ = action$.flatMap((action)=>{
// 	console.log('action')
// 	var newst = harrysally(stat,action)
// 	var newst2=catboxr(route(newst,action),action)
// 	var str = Observable.of(newst2)
// 	console.log(newst2)
// 	return str
// })

//nst$.subscribe(x=>console.log(x))

// function combineReducers(reducersObject) {
//   const keys = Object.keys(reducersObject);
//   console.log(keys)
//   return (state = {}, action) => keys.reduce((currState, key) => {
//   	console.log(currState)
//     const reducer = reducersObject[key];
//     return {
//       ...currState,
//       [key]: reducer(currState[key], action)
//     };
//   }, state);
// }

// var redobj = {harrysally, catboxr}
// console.log(redobj["harrysally"]) //the reducer function

// var cr = combineReducers(redobj)

// action$.subscribe((action)=>{
// 	console.log(action)
// 	console.log('what the fuck '+action.type)
// 	console.log(action.payload)
// 	var newst = cr(stat,action)
// 	console.log(newst)
// })

//action$.scan(cr).subscribe((x)=>console.log(x))

// action$.subscribe(function(x){
// 	console.log(x)
// 	var newst = harrysally(stat,x)
// 	var newst2=catboxr(route(newst,x),x)
// 	console.log(newst2)
// 	return newst2
// })    
// action$.subscribe(function(x){
// 	console.log(x)
// 	var newst = harrysally(stat,x)
// 	var newst2=catboxr(route(newst,x),x)
// 	console.log(newst2)
// 	return newst2
// })    


// console.log(createAction(initState))
// createAction(initState).subscribe(function(x){
// 	console.log(x)
// 	//xx.scan(reducer)
// })  

