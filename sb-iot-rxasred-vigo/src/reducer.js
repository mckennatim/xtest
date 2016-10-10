function getIndex(d,c){
  return d.map((dev)=>dev.id).indexOf(c)
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'GITHUB_FOLLOWERS_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GITHUB_FOLLOWERS_LOADED':
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case 'NAME_CHANGED':
      return {
        ...state,
        isLoading: false,
        name: action.payload
      };
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
