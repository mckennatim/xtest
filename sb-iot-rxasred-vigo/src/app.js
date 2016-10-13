import React from 'react';
import ReactDOM from 'react-dom';
// var Navigo = require('navigo');

import App from './components/App';
import Devices from './components/Devices';
import Cat from './components/Cat';
import Harry from './components/Harry';

import { createStore } from './rxflux';
import { log } from './util/utils';
import { changePage} from './actions';
import {router} from './router'

window.React = React;
var path = ("/"+window.location.hash.substring(1)).replace(/(\/)\1+/,"/")
console.log(path)
router.navigate(path)

const initState = { 
  name: 'Harry', 
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
  rtpg: Devices 
};
const container = document.getElementById('app');

createStore(initState)
  .do(log)
  .subscribe((state) =>
    ReactDOM.render(<App {...state} />, container)
  );

export {router}