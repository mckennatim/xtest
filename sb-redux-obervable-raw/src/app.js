// import Rx from 'rxjs/Rx'
import {delay, mapTo} from 'rxjs/Rx'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers/index'
import {pingEpic} from  './reducers/ping'

const ping = () => ({ type: 'PING' });
const increase = () => ({ type: 'INCREMENT' });
const decrease = () => ({ type: 'DECREMENT' });

const epicMiddleware = createEpicMiddleware(pingEpic);
const store = createStore(reducer, applyMiddleware(epicMiddleware));

store.dispatch(increase())
console.log(store.getState())
store.dispatch(increase())
console.log(store.getState())
store.dispatch(ping())
console.log(store.getState())
store.dispatch(increase())
console.log(store.getState())

const dodog = ()=>{
  console.log('in dodog ok')
}

console.log(typeof window)
//Object.assign(window, store, dodog, increase, decrease, ping)
window.store = store
window.dodog =dodog
window.increase =increase
window.decrease =decrease
window.ping =ping

const renderApp = () => {
  const { ping, count } = store.getState();
  console.log(store.getState())
  document.querySelector('#content').innerHTML = `
    <div>
      <h1>is what pinging: ${ping.isPinging}</h1>
      <button
        onclick="(${() => {store.dispatch(ping());}})();">
        Start PING
      </button>
      <button 
        id="dog" onclick="dodog()">dog
      </button><br />
      <button 
        id="increase"
        onclick="(${() => {store.dispatch(increase());}})();"
      >increase</button>
      <button 
        id="decrease"
        onclick="(${() => {store.dispatch(decrease());}})();"
      >decrease</button>
      <span id="cnt">${count}</span>
    </div>
  `;
};
store.subscribe(renderApp);
renderApp();

// const PING = 'PING';
// const PONG = 'PONG';
// const INCREASE = 'INCREASE';
// const DECREASE = 'DECREASE';

// const pingReducer = (state = {isPinging: false }, action) => {
//   switch (action.type) {
//     case PING:
//       return {...state, isPinging: true };
//     case PONG:
//       return {...state, isPinging: false };
//     default:
//       return state;
//   }
// };
// const countReducer = (state = {count: 0 }, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return {...state, count: state.count + 1 };
//     case DECREASE:
//       return {...state, count: state.count -1 };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({countReducer, pingReducer})
// window.store = createStore(rootReducer,
//   applyMiddleware(epicMiddleware)
// );
// const store = createStore(reducer);
