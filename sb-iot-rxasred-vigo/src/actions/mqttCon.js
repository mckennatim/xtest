var mqtt = require('mqtt')
import {grabTimrData, grabSrstateData } from './index'

export default function mqttCon(id){
  const client = mqtt.connect('ws://162.217.250.109:3333')
  var deviceId = id
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
      console.log('['+topic+'] '+payload.toString())
      var sp = topic.split("/")
      var job = sp[1];  
      switch(job){
        case "srstate":
          grabSrstateData(plo) 
          break;
        case "timr":
          var otimr = plo;
          grabTimrData(plo)
          break;
      }
    });

  });    
  return client
}