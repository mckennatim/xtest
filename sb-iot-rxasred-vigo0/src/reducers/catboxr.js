export default function catboxr (state, action) {
  switch (action.type) {
    case 'CATBOX_CHANGED':
      return {
        ...state,
        catbox: action.payload
      };
    default:
      return state;
  }
}
