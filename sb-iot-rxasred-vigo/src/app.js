import React from 'react';
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Observable';
// var Navigo = require('navigo');

import {App} from './components/App';
// import Devices from './components/Devices';
// import Cat from './components/Cat';
// import Harry from './components/Harry';
// import DevInf from './components/DevInf';

import { createStore } from './rxflux';
import { log } from './util/utils';
import { changePage, setDeviceType} from './actions';
import {router} from './router'
import {initState} from './data/initState'

window.React = React;

const container = document.getElementById('app');

const theStore =createStore(initState)

Observable.fromEvent(window, 'resize')
  .debounceTime(300)
  .subscribe((e)=>setDeviceType(window.innerWidth));

const domRenderer = theStore.subscribe((state)=>
    ReactDOM.render(<App {...state} />, container)
  )

var storeCopy ={}
const store = theStore.subscribe((state)=>{
	//console.log(state)
})

var path = "/"+window.location.hash.substring(1)
router.navigate(path)

///export {router, storeCopy}