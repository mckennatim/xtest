export default function reducer(state, action) {
  switch (action.type) {
    case 'NAME_CHANGED':
      return {
        ...state,
        isLoading: false,
        name: action.payload
      };
    default:
      return state;
  }
}