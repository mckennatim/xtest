import Cat from '../components/Cat';


const initState = { 
  harrysally: {
    name: 'Harry', 
    users: [],
    isLoading: false
  },
  route: {
    currentDevId: '00002zzz',
    currentDev: {},
    devices: [
      {
        id: 'CYURD001',
        name: 'geniot',
        desc: '2 temps, 3 timers 1 relay demo board',
        location: {
          lat: 222,
          lon: 333,
          zip: '02130',
          street: '12 Parley Vale',
          city: 'Jamaica Plain',
          state: 'MA'
        },
        specs: {
          HAStIMER: 28,
          notTimerTags: ["temp", "onoff", "hilimit", "lolimit"]
        }
      },
      {
        id: 'CYURD002',
        name: 'cascada',
        desc: '3 timers 2 relays for waterfall and garden',
        location: {
          lat: 222,
          lon: 333,
          zip: '02130',
          street: '12 Parley Vale',
          city: 'Jamaica Plain',
          state: 'MA'
        },
        specs: {
          HAStIMER: 28,
          notTimerTags: ["temp", "onoff", "hilimit", "lolimit"]
        }
      }
    ],    
    rtpg: Cat,
    timr: {tIMElEFT:[0,0,0]},
    flags: {HAStIMR: 28},
    srstate: []
  }, 
  catboxr: {catbox: true}, 
};
const initialBrowser = () => {
  let ws = window.innerWidth
  let devInfo ={
    types: ['watch', 'phone', 'tablet', 'laptop'],
    sizes: [300, 638, 980, 1456],
    browser: '',
    size: ws
  }
  var thei
  devInfo.sizes.reduce((t, n, i)=>{ 
    if(t<ws&&ws<=n){thei = i}
    return n 
  },0);
  devInfo.browser = devInfo.types[thei]
  return devInfo
} 

initState.brow = initialBrowser()

export {initState}