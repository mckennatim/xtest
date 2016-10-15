function getIndex(d,c){
  return d.map((dev)=>dev.id).indexOf(c)
}

export default function route(state, action) {
  switch (action.type) {
    case 'PAGE_CHANGED':
      return {
        ...state,
        rtpg: action.payload
      };
    case 'DEVINFO_CHANGED':
      return {
        ...state,
        rtpg: action.payload.ht, 
        currentDevId: action.payload.par.id,
        currentDev: state.devices[getIndex(state.devices, action.payload.par.id )]
      };
    default:
      return state;
  }
}
