var mqtt = require('mqtt')
import {grabTimrData, grabSrstateData, grabFlagData } from './index'

function stateListener(state){
  console.log('state is being listened tog')

}

export default function mqttCon(id, props){
  const client = mqtt.connect('ws://162.217.250.109:3333')
  var deviceId = id
  console.log('device id = '+ deviceId)
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
          grabTimrData(plo.tIMElEFT)
          break;
        case "flags":
          grabFlagData(plo)
          break;
      }
    });
    var thecmd =  `{\"id\":2,\"req\":\"flags\"}`
    client.publish(req, thecmd);
  });    
  return client
}