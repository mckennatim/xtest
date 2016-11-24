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
  console.log(currentDevId)
  const device = devices.filter((dev)=>dev.id==currentDevId)
  // console.log(device)
  // if(device[0].sched!='undefined'){
  //   console.log(device[0].sched[currentSenRel].pro)
  // }else{
  //   console.log(devices[0])
  // }
  return(
    <div>
      <div style={styles.outer} >
        <h4>in SenRel {name} senrel:{currentSenRel}</h4>

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