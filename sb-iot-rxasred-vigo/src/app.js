import React from 'react';
import ReactDOM from 'react-dom';
// var Navigo = require('navigo');

import App from './components/App';
import Devices from './components/Devices';
import Cat from './components/Cat';
import Harry from './components/Harry';
import DevInf from './components/DevInf';

import { createStore } from './rxflux';
import { log } from './util/utils';
import { changePage} from './actions';
import {router} from './router'

// console.log(router)

window.React = React;

const initState = { 
  harrysally: {
    name: 'Harry', 
    users: [],
    isLoading: false
  },
  route: {
    currentDevId: '00002zzz',
    currentDev: {},
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
        },
        specs: {
          HAStIMER: 28,
          notTimerTags: ["temp", "onoff", "hilimit", "lolimit"]
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
        },
        specs: {
          HAStIMER: 28,
          notTimerTags: ["temp", "onoff", "hilimit", "lolimit"]
        }
      }
    ],    
    rtpg: Cat,
    timr: [0,0,0],
    flags: {HAStIMR: 28},
    srstate: []
  }, 
  catboxr: {catbox: true}, 
};
const container = document.getElementById('app');

const theStore =createStore(initState)

const domRenderer = theStore.subscribe((state)=>
    ReactDOM.render(<App {...state} />, container)
  )

// function stateListener(state){
//   console.log('state is being listened to')
// }

// theStore.subscribe((state)=>stateListener(state))

// theStore
//   .do(log)
//   .subscribe((state) =>
//     ReactDOM.render(<App {...state} />, container)
//   );

//var path = ("/"+window.location.hash.substring(1)).replace(/(\/)\1+/,"/")
var path = "/"+window.location.hash.substring(1)
// var path = window.location.hash.substring(1)
console.log(path)
router.navigate(path)

export {router}