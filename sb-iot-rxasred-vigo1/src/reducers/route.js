function getIndex(d,c){
  return d.map((dev)=>dev.id).indexOf(c)
}

export default function route(state, action) {
  // console.log(action.type)
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
    case 'SENREL_CHANGED':
      // console.log(action.payload)
      return {
        ...state,
        rtpg: action.payload.ht,
        currentSenRel: action.payload.par.tmr,
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
      const ridx = action.payload.id;
      const newsr = state.srstate.slice()
      newsr[ridx]=action.payload        
      return {
        ...state, srstate: newsr
      }
    case 'SCHED_CHANGED':
      let devlist = state.devices.slice()
      const devicesCopy = devlist.map((dev, i)=>{
        if(dev.id == action.payload.devId){
          if(!dev.sched){
            let sched = []
            dev.sched = sched
          }
          dev.sched[action.payload.sched.id] = action.payload.sched
        }
        return dev
      })
      return {
        ...state, devices: devicesCopy
      }
    default:
      return state;
  }
}
