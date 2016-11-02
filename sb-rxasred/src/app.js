import { createStore } from './rxflux';
import { log } from './util/utils';
import { changeName, loadGithubFollowers, toggleCatbox, mqttTimrIn} from './actions';
import {rootReducer} from './reducers/index'
var mqtt = require('mqtt');
import Rx from 'rxjs'

console.log('in about prod dev changed')
var deviceId = 'CYURD002'
//publish to device
var prg = deviceId+'/prg'
var cmd = deviceId +'/cmd'
var req = deviceId +'/req'
//publish to server
var trigtime = deviceId +'/time'
//subscribe
var devtime = deviceId +'/devtime'
var srstate = deviceId+'/srstate'
var sched = deviceId +'/sched'
var flags = deviceId+'/flags'
//deprecate
var timr = deviceId+'/timr'
var subject = new Rx.Subject();
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
var timro;
var timroable = Rx.Observable.create(function subscribe(timro) {
    timro.next('plo.tIMElEFT')
});
// progs = deviceId+'/progs'
var client = mqtt.connect('ws://162.217.250.109:3333')              
client.on('connect', function(){
  console.log('maybe connected')
  client.subscribe(devtime)//device time
  client.subscribe(srstate) 
  client.subscribe(timr) 
  client.subscribe(sched)
  client.subscribe(flags)
  client.on('message', function(topic, payload) {
    var pls = payload.toString()
    var plo = JSON.parse(pls)
    //console.log(plo)
    // console.log('['+topic+'] '+payload.toString())
    var sp = topic.split("/")
    var job = sp[1];  
    switch(job){
      case "srstate": 
        break;
      case "timr":
        var otimr = plo;
        //console.log(JSON.stringify(otimr));
        subject.next(plo.tIMElEFT);
        mqttTimrIn(plo)
        break;
    }
  });
}); 

console.log(rootReducer)

createStore({})
  .do(log)
  .subscribe((state) =>
    console.log(state)
  );

changeName('Fred') 
loadGithubFollowers('ryardley')
toggleCatbox(false)

