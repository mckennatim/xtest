import { createStore } from 'redux'
import reducer from './reducers/index'

let store = createStore(reducer)
console.log(store.getState())
store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())
store.dispatch({type:'INCREMENT'})
console.log(store.getState())
store.dispatch({type:'INCREMENT'})
console.log(store.getState())
