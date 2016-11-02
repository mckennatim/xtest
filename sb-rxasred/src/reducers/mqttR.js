export default function mqttR(state, action) {
  switch (action.type) {
    case 'TIMR_UPDATE':
      return {
        ...state,
        timr: action.payload
      };
    default:
      return state;
  }
}
