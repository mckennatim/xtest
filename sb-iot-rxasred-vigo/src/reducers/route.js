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
      // console.log(action.payload)
      return {
        ...state,
        rtpg: action.payload.ht, 
        currentDevId: action.payload.par.id,
        currentDev: state.devices[getIndex(state.devices, action.payload.par.id )]
      };
    case 'TIMR_CHANGED':
      return {
        ...state,
        timr: action.payload
      }
    case 'FLAGS_CHANGED':
      return {
        ...state,
        flags: action.payload
      }
    case 'SRSTATE_CHANGED':
      const ridx = 4;
      const newdat = {id:23, temp:149}
      const newsr = state.srstate.slice()
      newsr[ridx]=newdat
      return {
        ...state,
        srstate: newsr
      }
    default:
      return state;
  }
}
