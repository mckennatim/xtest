import harrysally from './harrysally'
import route from './route'
import catboxr from './catboxr'

function combineReducers(reducersObject) {
  const keys = Object.keys(reducersObject);
	// console.log(keys)
  return (state = {}, action) => keys.reduce((currState, key) => {
    const reducer = reducersObject[key];
    return {
      ...currState,
      [key]: reducer(currState[key], action)
    };
  }, state);
}
var reducersObj={route, harrysally, catboxr}

export const rootReducer = combineReducers(reducersObj)



