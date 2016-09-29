// import Rx from 'rxjs/Rx'
import { Provider, connect } from 'react-redux'
const ReactDOM = require('react-dom');
const React = require('react');
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router'

import {delay, mapTo} from 'rxjs/Rx'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers/index'
import {pingEpic} from  './reducers/ping'

const ping = () => ({ type: 'PING' });
const increase = () => ({ type: 'INCREMENT' });
const decrease = () => ({ type: 'DECREMENT' });

const epicMiddleware = createEpicMiddleware(pingEpic);
const store = createStore(reducer, applyMiddleware(epicMiddleware));

store.dispatch(increase())
console.log(store.getState())
store.dispatch(increase())
console.log(store.getState())
store.dispatch(ping())
console.log(store.getState())
store.dispatch(increase())
console.log(store.getState())

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render(){
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
})



const Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  onClick() {
    console.log('clicked on click')
    this.context.router.push('about')
  },
  render(){
    return (
      <div>
        <h1>Home</h1>
        <button onClick={()=>this.onClick()}>path->About</button>
      </div>
    )
  }
})
const NoMatch = React.createClass({
  render(){
    return (
      <div>
        <h1>NoMatch</h1>
      </div>
    )
  }
})
const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})

const Message = React.createClass({
  componentDidMount() {
    const id = this.props.params.id
    console.log(id)
  },
  render() {
    return (<div>
      <h3>Message {this.props.params.id}</h3>
      {this.props.params.id}
      </div>)
  }
})
const InboxStats = React.createClass({
  render() {
    return <h3>InboxStats</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {/* Render the child route component */}
        {this.props.children}
      </div>
    )
  }
})


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <IndexRoute component={Home}/>
      <Route path="inbox" component={Inbox}>
        <IndexRoute component={InboxStats}/>
        <Route path="messages/:id" component={Message} />
      </Route>  
    </Route>
  </Router>
), document.getElementById('content'))