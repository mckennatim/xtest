import DeviceList from './DeviceList'
import Harry from './Harry';
import DevInf from './DevInf';

export default function Devices(props){
  const {types, sizes, browser, size} = props.brow
  const {devices, rtpg, name} = props.route
  // console.log(browser)
  let more
  if(browser == "phone"){
    console.log('its a phone')
  }
  return(
    <div>
      <div style={styles.outer} >
        <h4>in Devices {name}</h4>
        <DeviceList name={name} devices={devices} />
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