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

// const renderApp = () => {
//   const { isPinging, count } = store.getState();
//   console.log(isPinging)
//   console.log(store)
//   document.querySelector('#content').innerHTML = `
//     <div>
//       <h1>is what pinging: ${isPinging}</h1>
//       <button
//         onclick="(${() => {store.dispatch(ping());}})();">
//         Start PING
//       </button>
//       <button 
//         id="dog" onclick="dodog()">dog
//       </button><br />
//       <button 
//         id="increase"
//         onclick="(${() => {store.dispatch(increase());}})();"
//       >increase</button>
//       <button 
//         id="decrease"
//         onclick="(${() => {store.dispatch(decrease());}})();"
//       >decrease</button>
//       <span id="cnt">${count}</span>
//     </div>
//   `;
// };