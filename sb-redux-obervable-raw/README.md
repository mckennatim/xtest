# sb-redux-observable-raw
## tags
### 01-initial commit
from [redux-observable Using Raw HTML ](https://github.com/redux-observable/redux-observable/blob/master/docs/recipes/UsageWithUIFrameworks.md)
## questions
### combineReducers not working on a little mod to example
#### answer
mimicking sb-redux. put reducers in separate files, combine in index.js then createStore
ping.js

    export default function (state = {isPinging: false }, action) {
      switch (action.type) {
        case 'PING':
          return {...state, isPinging: true };
        case 'PONG':
          return {...state, isPinging: false };
        default:
          return state;
      }
    };
index.js

    import { combineReducers } from 'redux'
    import todos from './todos'
    import count from './counter'
    import ping from './ping'
    export default combineReducers({
      todos,
      count,
      ping
    })
app.js ...

    import Rx from 'rxjs/Rx'
    import { createStore, applyMiddleware, combineReducers } from 'redux';
    import { createEpicMiddleware } from 'redux-observable';
    import reducer from './reducers/index'
    const epicMiddleware = createEpicMiddleware(pingEpic);
    const store = createStore(reducer, applyMiddleware(epicMiddleware));
### question
I wanted to extend the [Raw HTML](http://jsbin.com/birogu/edit?js,output) example, put it in webpack and add another reducer. 

    window.store = createStore(countReducer,
      applyMiddleware(epicMiddleware)
    );
or

    window.store = createStore(pongReducer,
      applyMiddleware(epicMiddleware)
    ); 
works fine
But when I try to combine them like this

    const rootReducer = combineReducers({countReducer, pingReducer}))
    window.store = createStore(rootReducer,
      applyMiddleware(epicMiddleware)
    );
it doesn't work.
I'm using redux 3.6.0 and redux-observable 0.12.0

Here is the full app.js

    import Rx from 'rxjs/Rx'
    import { createStore, applyMiddleware, combineReducers } from 'redux';
    import { createEpicMiddleware } from 'redux-observable';
    const PING = 'PING';
    const PONG = 'PONG';
    const INCREASE = 'INCREASE';
    const DECREASE = 'DECREASE';

    window.ping = () => ({ type: PING });
    window.increase = () => ({ type: INCREASE });
    window.decrease = () => ({ type: DECREASE });

    const pingEpic = action$ =>
      action$.ofType(PING)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: PONG });

    const pingReducer = (state = {isPinging: false }, action) => {
      switch (action.type) {
        case PING:
          return {...state, isPinging: true };
        case PONG:
          return {...state, isPinging: false };
        default:
          return state;
      }
    };
    const countReducer = (state = {count: 0 }, action) => {
      switch (action.type) {
        case INCREASE:
          return {...state, count: state.count + 1 };
        case DECREASE:
          return {...state, count: state.count -1 };
        default:
          return state;
      }
    };

    const epicMiddleware = createEpicMiddleware(pingEpic);
    const rootReducer = combineReducers({countReducer, pingReducer})
    window.store = createStore(rootReducer,
      applyMiddleware(epicMiddleware)
    );
    window.dodog = ()=>{
      console.log('in dodog')
    }
    const renderApp = () => {
      const { isPinging, count } = store.getState();
      console.log(isPinging)
      console.log(store)
      document.querySelector('#content').innerHTML = `
        <div>
          <h1>is what pinging: ${isPinging}</h1>
          <button
            onclick="(${() => {store.dispatch(ping());}})();">
            Start PING
          </button>
          <button 
            id="dog" onclick="dodog()">dog
          </button><br />
          <button 
            id="increase"
            onclick="(${() => {store.dispatch(increase());}})();"
          >increase</button>
          <button 
            id="decrease"
            onclick="(${() => {store.dispatch(decrease());}})();"
          >decrease</button>
          <span id="cnt">${count}</span>
        </div>
      `;
    };
    store.subscribe(renderApp);
    renderApp();
and the webpack.config.js

    var path = require('path');
    module.exports={
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.js$/, 
            exclude: /node_modules/,
            loader: 'babel-loader' ,
            include: __dirname,
            query:
            {
              presets:['es2015', 'react', 'stage-2']
            }
          },
          { test: /\.css$/, loader: "style!css?modules" },
          { test: /\.html$/, loader: "html-loader" }
        ],
      }
    }


