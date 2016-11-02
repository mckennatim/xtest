import DeviceList from './DeviceList'

export default function Devices({route}){
  // console.log('in do devices')
  // console.log(deviceTypes)
  // console.log(browser)
  // let devNum =deviceTypes.indexOf(browser)
  // var more
  // console.log(window.innerWidth)
  // if (devNum==2) {
  //   console.log('bigger than 600')
  //   more = <div style={{flexGrow:1}}> dog </div>
  // }else{
  //   console.log('smaller than 600')
  //   more = <br/>
  // }  
  const {devices, rtpg, name} = route
  // const { isLoading, name, users, rtpg, devices } = props;
  console.log(devices)
  return(
    <div style={styles.outer} >
      <h4>in Devices {name}</h4>
      <DeviceList name={name} devices={devices} />
    </div>
    )
}
const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#C4A265',
    height: 400,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFF28E',
    height: 340,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  }
}