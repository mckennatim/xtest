## tags
### sb-mqtt

test wrapper `mqttCon` to turn mqtt into an Subject, ie observer+observable. 

OK, so you've got 2x2 different things going on here. mqtt subscribes to the data coming out of the iot device and publishes commands from the frontend client to the iot device. fromMqtt makes the iot device data observable by the frontend app and acts as observer of the frontend app to see if it wants to send anything to the iotDevice. The frontend app subscribes to that observable to find out whats happening on the iot device and sends the subject data that it is observing via the `mqttCon.next()` callback

Most succinctly described by Łukasz Wojciechowski in [websockets-with-angular2-and-rxjs](https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac#.ugs8kga01)

    function fromMqtt(connectObserver, url, devId){
      ...
      const observable = Observable.create (function (obs) {
        if (connectObserver) {
          client.on('connect', function () {
            ...
            connectObserver.next();
            connectObserver.complete();
      ...      

    const connectObserver = {
      next(value) {},
      error(err) {throw err;},
      complete() {}
    }          

This part of the `fromMqtt` function somehow works at making the observable wait for a mqtt connection before allowing the observer of `fromMqtt` to accept data from the frontend app. I don't know how it works.

The observable gets loaded with data whenever the mqqt client gets some

      client.on('message', function (topic, payload) {
        var pls = payload.toString()
        var plo = JSON.parse(pls)
        console.log(plo)
        obs.next({
          topic: topic,
          payload: plo
        })

since the frontend app subscribes to this Subject it gets the data whenever it arrives 

    mqttCon.subscribe(
      function (e) {
        console.log(e);//the data coming in from the observable 
      });

and when you put something in Subject.next it gets observed by fromMqtt and sent to be published by the mqtt client.

    mqttCon.next(`{\"id\":2,\"req\":\"flags\"}`)

    let observer = {
      next: (data)=>{
        ...          
        client.publish(req, data)
      }    

     mqtt                fromMqtt                 frontend app  
     .on('message') -> data made observable -> mqttCon.subscribe      
     client.publish <- observer.next(data) <- mqttCon.next(data)  