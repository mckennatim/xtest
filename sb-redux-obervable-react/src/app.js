// import Rx from 'rxjs/Rx'
import { Provider, connect } from 'react-redux'
const ReactDOM = require('react-dom');
const React = require('react');
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
  console.log('in dodogok')
}

let App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
