import React from 'react';
import ReactDOM from 'react-dom';
var Navigo = require('navigo');

import App from './components/App';
import Dog from './components/Dog';
import Cat from './components/Cat';

import { createStore } from './rxflux';
import { log } from './utils';
import { changePage} from './actions';

window.React = React;

var router;
var routing = function(mode){
  router = new Navigo(null, true);
  router
    .on({
      'dog': ()=>changePage(Dog),
      'cat': ()=>changePage(Cat)
    })
    .resolve();
}
routing()
router.navigate("/"+window.location.hash.substring(1))

const initState = { name: 'Harry', rtpg: Dog};
const container = document.getElementById('app');

createStore(initState)
  .do(log)
  .subscribe((state) =>
    ReactDOM.render(<App {...state} />, container)
  );

