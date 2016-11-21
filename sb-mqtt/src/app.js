import {fromMqtt$} from './fromMqtt'

const devId = 'CYURD001'
const devId2 = 'CYURD002'
var mqttCon= fromMqtt$(devId)

mqttCon.subscribe(
  function (e) {
  	console.log('happening in subsription to 1')
    console.log(e);
  });

// Observer.next(`{\"id\":2,\"req\":\"flags\"}`)
mqttCon.next(`{\"id\":2,\"req\":\"flags\"}`)
setTimeout(function(){
	mqttCon.next('end')
	mqttCon= fromMqtt$(devId2)
	mqttCon.subscribe(
	  function (e) {
	  	console.log('happening in subsription to 2')
	    console.log(e);
	  });
	mqttCon.next(`{\"id\":0,\"req\":\"srstates\"}`)
	setTimeout(function(){mqttCon.next('end')},3000);
}, 3000);

document.getElementById('app').innerHTML = '<h4>hello mqtt</h4>'

