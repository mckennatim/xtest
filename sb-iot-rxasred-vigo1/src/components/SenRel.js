import { reqSchedData, changeDevInfo } from '../actions';



export default function SenRel(props){
  const {types, sizes, browser, size} = props.brow
  const {devices, rtpg, currentSenRel, currentDevId} = props.route
  // if (currentDevId=='00002zzz'){
  //   console.log(devices[0].id)
  //   changeDevInfo(devices[0].id)
  // }
  const {name}=props.harrysally
  // console.log(devices[0].id)
  // console.log(currentDevId)
  const device = devices.filter((dev)=>dev.id==currentDevId)
  //console.log(device[0])
  // if(device[0].sched!='undefined'){
  //   console.log(device[0].sched[currentSenRel].pro)
  // }else{
  //   console.log(devices[0])
  // var sch
  function extractProg(){
    // console.log(device[0].sched)
    if(device[0].sched){
      // console.log('there is a sched')
      // console.log(device[0].sched.length)
      const scheds = device[0].sched     
      const sch = scheds.filter((sch)=>sch.id==currentSenRel)
      if(sch[0]==0 || sch[0]== undefined){
        return <p>hi dog</p>
      }else {
        return console.log(sch[0])
      }
    }
  }
  const progData = extractProg()

  // }
  return(
    <div>
      <div style={styles.outer} >
        <h4>in SenRel {name} device: {currentDevId} senrel:{currentSenRel}</h4>
        {progData}
      </div>
    </div>
    )    
}
const styles= {
  outer: {
    background:'#9338f4',
    height: 400,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    background: '#FFF28E',
    height: 340,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  }
}