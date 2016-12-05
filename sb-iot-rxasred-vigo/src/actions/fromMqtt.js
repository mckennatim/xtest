var mqtt = require('mqtt')
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';

const url = 'ws://162.217.250.109:3333'
const devId = 'CYURD001'

function fromMqtt(connectObserver, url, devId){
	const client = mqtt.connect(url)
  var deviceId = devId
  // console.log('device id = '+ deviceId)
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
  const observable = Observable.create (function (obs) {
	  if (connectObserver) {
	    client.on('connect', function () {
		    client.subscribe(devtime)//device time
		    client.subscribe(srstate) 
		    client.subscribe(timr) 
		    client.subscribe(sched)
		    client.subscribe(flags)
	      connectObserver.next();
	      connectObserver.complete();
	      // console.log('maybe connected')		    
	    });
      client.on('message', function (topic, payload) {
	      var pls = payload.toString()
	      var plo = JSON.parse(pls)
	      obs.next({
	      	topic: topic,
	      	payload: plo
	      })
	      // console.log('['+topic+'] '+payload.toString())
      });	    
	  }
	})
  let observer = {
  	next: (data)=>{
  		if (data=='end'){
	  		client.end()
  		}else{
	  		client.publish(req, data)
  		}
  	}
  }
	return Subject.create(observer, observable);  
}

const Observer = {
	next(value) {},
	error(err) {throw err;},
	complete() {}
}
const fromMqtt$ = (devId)=>fromMqtt(Observer, url, devId)

export {fromMqtt$}