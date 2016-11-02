import gitReducer from './gitReducer'
import nameReducer from './nameReducer'
import catboxr from './catboxr'
import mqttR from './mqttR'


function combineReducers(reducersObject) {
  const keys = Object.keys(reducersObject);
	console.log(keys)
  return (state = {}, action) => keys.reduce((currState, key) => {
    const reducer = reducersObject[key];
    return {
      ...currState,
      [key]: reducer(currState[key], action)
    };
  }, state);
}
var reducersObj={gitReducer, nameReducer, catboxr, mqttR}
console.log(reducersObj["gitReducer"])

export const rootReducer = combineReducers(reducersObj)





