import React from 'react';
import ReactDOM from 'react-dom';
import { Observable } from 'rxjs/Observable';

import {App} from './components/App';
import { createStore } from './rxflux';
import { log } from './util/utils';
import { changePage, setDeviceType, copyStore} from './actions';
import {router} from './router'
import {initState} from './data/initState'

window.React = React;

const container = document.getElementById('app');

const theStore =createStore(initState)

Observable.fromEvent(window, 'resize')
  .debounceTime(300)
  .subscribe((e)=>setDeviceType(window.innerWidth));

const domRenderer = theStore.subscribe((state)=>{
	copyStore(state)
	return ReactDOM.render(<App {...state} />, container)
})

var path = "/"+window.location.hash.substring(1)
router.navigate(path)

