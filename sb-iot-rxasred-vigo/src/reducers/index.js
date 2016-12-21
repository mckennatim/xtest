import harrysally from './harrysally'
import route from './route'
import catboxr from './catboxr'
import brow from './brow'

function combineReducers(reducersObject) {
  const keys = Object.keys(reducersObject);
	//console.log(keys)
  return (state = {}, action) => keys.reduce((currState, key) => {
    const reducer = reducersObject[key];
    return {
      ...currState,
      [key]: reducer(currState[key], action)
    };
  }, state);
}
var reducersObj={route, harrysally, catboxr, brow}

const rootReducer = combineReducers(reducersObj)



export {rootReducer}