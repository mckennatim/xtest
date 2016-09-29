import { combineReducers } from 'redux'
import todos from './todos'
import count from './counter'
import { ping } from './ping'

export default combineReducers({
  todos,
  count,
  ping
})