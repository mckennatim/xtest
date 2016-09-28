import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import { App, Home, Foo, Bar, Animal, Dog } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)
//const history = syncHistoryWithStore(hashHistory, store) mmmm

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
          <Route path="animal" component={Animal}>
            <Route path="dog" component={Dog}/>
          </Route>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('mount')
)
