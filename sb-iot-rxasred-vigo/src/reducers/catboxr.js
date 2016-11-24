export default function catboxr (state, action) {
	//console.log(`in catboxr ${action.type}`)
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
