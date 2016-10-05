// export default function (state = {isPinging: false }, action) {
//   switch (action.type) {
//     case 'PING':
//       return {...state, isPinging: true };
//     case 'PONG':
//       return {...state, isPinging: false };
//     default:
//       return state;
//   }
// };

const ping =  function (state = {isPinging: false }, action) {
  switch (action.type) {
    case 'PING':
      return {...state, isPinging: true };
    case 'PONG':
      return {...state, isPinging: false };
    default:
      return state;
  }
};

const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });

export {ping, pingEpic}