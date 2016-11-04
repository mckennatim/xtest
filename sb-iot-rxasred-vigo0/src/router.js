var Navigo = require('navigo');
import { changePage, changeDevInfo} from './actions';

import App from './components/App';
import Devices from './components/Devices';
import Cat from './components/Cat';
import Harry from './components/Harry';
import DevInfo from './components/DevInfo';

var router;
var routing = function(mode){
  router = new Navigo(null, true);
  router
    .on({
      'devices': ()=>{
        console.log('in devices')
        return changePage(Devices)
      },
      'cat': ()=>changePage(Cat),
      'harry': ()=>changePage(Harry),
      'dev/:id': (params)=>{
      	var pro ={}
      	pro.ht = DevInfo;
      	pro.par = params;
      	console.log('in dev id')
      	console.log(pro)
      	return changeDevInfo(pro)
      },
      '/': ()=>changePage(Cat)
    })
    .resolve();
}
routing()

export {router}