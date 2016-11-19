var Navigo = require('navigo');
var React = require('react');
import { changePage, changeDevInfo} from './actions';
import App from './components/App';
import Devices from './components/Devices';
import Cat from './components/Cat';
import Harry from './components/Harry';
import DevInf from './components/DevInf';

function insertElement(pro){
  console.log(pro)
  return (<h4>duck</h4>)
}

var router;
var routing = function(mode){
  router = new Navigo(null, true);
  router
    .on({
      'devices': ()=>{
        return changePage('Devices')
      },
      'cat': ()=>changePage('Cat'),
      'harry': ()=>changePage('Harry'),
      'dev/:id': (params)=>{
      	var pro ={}
      	pro.ht = 'DevInf';
      	pro.par = params;
      	// console.log('in dev id')
      	// console.log(pro)
      	return changeDevInfo(pro)
      },
      '/': ()=>changePage('Cat')
    })
    .resolve();  
}
routing()

export {router}