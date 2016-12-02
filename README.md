# xtest small test code in sbdev0
Each directory represents a code exploration and has its own README.md. All share sbdev0/node_modules.

## tags
### sb-closure_wrap-element_modify-its-props
Use closure to create a element with reduced props. We know from `Cat.js` what `Cat` needs from the `store`. But here it doesn't have access to the store. To access the store the function returned from  `mapStateToProps`  in `Cat.js`

    function mapStateToProps(anElement){
        //returns a function called later with store as its arg and el from here
        return (store)=>{  
            const   props= {
                    catbox: store.catboxr.catbox,
                    name: store.harrysally.name
                }
            return React.createElement(anElement, props)
        }
    }
    Cat = mapStateToProps(Cat)

first grabs the element from its parameter and holds it in closure. It returns a function that returns and element but it doesn't do that until the wrapped `Cat` is called from `App` as `Cat(props)`. The store is passed down to `App` in `app.js`  


    ReactDOM.render(<App {...store}/>, container)

In `App.js` you make the call `Cat(props)` completing the closure and returning the element whose props have been culled from store

    const App = (props) =>{
        const newcat = Cat(props)
        return(
            <div>
                <h4>hello blank es6 rect</h4>
                {newcat}
            </div>
    )}

### sb-closure_01
closure on a single page of code

### sb-mqtt

A wrapper `mqttCon` to turn mqtt into an Subject, ie observer+observable. 

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

### sb-iot_flexbox+condrender
Flexbox does not depend on media queries. Combining it with javascript code for conditional rendering allows for the best of both worlds. 

#### conditional rendering

The devices and sizes are setup in `data/initstate initialBrowser`

    types: ['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop'],
    sizes: [300, 500, 600, 800, 900, 1800],

A window Observer 

    Observable.fromEvent(window, 'resize')
      .debounceTime(300)
      .subscribe((e)=>setDeviceType(window.innerWidth));

fires a `setDeviceType` action$ to update `props.brow` in the `brow reducer`  The payload is the current device width which looks through and finds its place in the list of sizes and modifies state.brow with values for size and browser

    case 'SET_DEVICE':
      const ws = action.payload
      var idx
      var sum = state.sizes.reduce((prev, curr, i)=>{ 
        if(prev < ws && ws <= curr){idx = i}
        return curr 
      }, 0);  
      const bro = state.types[idx]   
      return {
        ...state, 
        size: action.payload,
        browser: bro
      }

`App` re-renders on change of browser by firing `showrts` which, given no conditional rendering data, returns an array of one element, the render function of the page string that gets placed in `state.route.rtpg`, 

    if(pageList.length==0){
      console.log('no pageList for this rtPage -> 1 screen ')
      const singleElement = React.createElement(cf[rtPage], props)
      elArr.push(singleElement)  

`cf[rtPage]` is `import * as cf from './index'` which is `export {Devices, Cat, Harry, DevInf, App, DeviceList, multi, panes}` from the index.js of the components directory. 

Here is where conditional rendering comes in. `components/idex.js` has two objects that you set up for conditional rendering. `panes` is an array aligned with `state.brow.types` that determines how many panes get displayed `[1,1,2,2,3,3]` for each browser type. `['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop']`. `multi` tells you which pages todisplay and in what order depending on the device and `panes`. If there is no entry, then just the cf[rtpg] is rendered.

    const multi =[{pri:'Cat', mul:[
                    ['Cat', 'Harry'],
                    ['Harry', 'Cat', 'Devices']]
                   },
                  {pri:'Harry', mul:[
                    ['Harry', 'Cat'],
                    ['Cat', 'Harry', 'Devices']]
                   },
                  {pri:'DevInf', mul:[
                    ['Devices', 'Devinf'],
                    ['Devices', 'Devinf', 'Cat']]
                   }
                  ]

We previously know that if there is no `pageList` entry foe `rtpage` then it just renders `cf[rtpag]` . But if there is, then, given the number of panes you've allowed for a type, it checks if there is an `mul` entry whose for that number of panes. If not, again it just renders `cf[rtpag]`.

But if there is a a `mul` entry whose for that number of panes, then an element is creates for each of them and those elements are pushed into `elArr`

It seems you've got to be in the render function to be able to render each element of `elArr` which is the object returned by `showRt` and that's what 

      {showRt(props).map((el,i)=>{
        return <div className="content item-default" key={i}>{el}</div>
      })}

does.

#### flexbox

Flexbox needs a container with items in it. 

    .container {
      display: flex;
      flex-direction: row; /* generally better */
      flex-wrap: wrap;
      justify-content: center;
      align-content: stretch;
      align-items: stretch;
    }

    .item-default {
      margin: 10px;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: 0;
    }  

When the panes squeeze or expand depends on `flex-basis` and `flex-grow` and `flex-shrink`

    .content {
      min-height:200px;
      background-color: green;
      flex-grow: 1;
      flex-shrink: 1; /*can shrink from 300px*/
      flex-basis: 225px;  
    }

A  menu header might stretch over the whole display

    .header{
      height: 100px;
      background-color: green;
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 98%; 
    }

Here the classes are assigned to elements

    <div className="container">
      <div className="header item-default">
        { renderNav() }    
        <div id="menu">
          <a href="#/devices" data-navigo>devices </a>        
          <a href="#/cat" data-navigo>cat </a>        
          <a href="#/harry" data-navigo>harry </a>        
        </div>      
        <br />
      </div>
      {showRt(props).map((el,i)=>{
        return <div className="content item-default" key={i}>{el}</div>
      })}
    </div>
### 04-sb-rxasred-vigo
handles parameters by

- in routes.js - instead of just passing the the react render function to `return changeDevInfo(pro)` create an object containing the params and render function and put that in payload. Now the reducer can parse it
- in reducer.js - return a state that now has `currentDevId` and `currentDev` which is the devices record that matches the id.
- in DevInfo.js, the render function - instead of passing it all the props, just pass it a destructured list `{name, currentDev}` of the parts of state that it needs.


### 03-sb-rxasred-vigo
An interesting almost clean rendition where react renders from simple functions, state is managed by an rxjs implementation of redux and navigation works with navigo.
### 02-xtest-react-router

## xtest apps

- `sb_rxjs-as-redux` intriguing project using composed higher order functions, plain react render functions with props as parameters
- `sbnavigo` uses Vue but inrement/decrement doesn't work
- `sb-redux-observable-raw` works but no routing
- cherrytree works on examples vanilla but gets stuck on helo-world-react
- rxjs as redux - too much gulp needed
- sb-react-router - breaks win react router@next (4), for 2.8 hash works for -w and dist2, not for webpack-dev-server. Navigation by `this.context.router.push('about')`
- sb-react-router4 - works on dist2 with hash routes,
- sbasic react-router 2.8 button doesn't work for navigation. otherwise hash