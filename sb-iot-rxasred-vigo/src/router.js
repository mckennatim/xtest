var Navigo = require('navigo');
var React = require('react');
import { changePage, changeDevInfo, changeSenRel} from './actions';
//import {App} from './components/App';
import {Devices} from './components/Devices';
import {Cat} from './components/Cat';
import Harry from './components/Harry';
import {DevInf} from './components/DevInf';
import {SenRel} from './components/SenRel';
import {Blank} from './components/Blank';
import {CachArray} from './components/CachArray';

function insertElement(pro){
  console.log(pro)
  return (<h4>duck</h4>)
}

var router;
var routing = function(mode){
  // console.log('started routing')
  router = new Navigo(null, true);
  router
    .on({
      'devices': ()=>{
        return changePage('Devices')
      },
      'cat': ()=>changePage('Cat'),
      'blank': ()=>changePage('Blank'),
      'cach0': ()=>changePage('CachArray'),
      'harry': ()=>changePage('Harry'),
      'dev/:id': (params)=>{
      	var pro ={}
      	pro.ht = 'DevInf';
      	pro.par = params;
      	return changeDevInfo(pro)
      },
      'dev/:id/:tmr': (params)=>{
        // console.log(`${params.id}/${params.tmr}`)
        var pro ={}
        pro.ht = 'SenRel';
        pro.par = params;
        return changeSenRel(pro)
      },
      '/': ()=>changePage('Cat')
    })
    .resolve();  
}
routing()

export {router}