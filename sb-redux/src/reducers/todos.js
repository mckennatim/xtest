// export default function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([ action.text ])
//     default:
//       return state
//   }
// }

export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}