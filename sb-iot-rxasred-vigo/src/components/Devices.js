import DeviceList from './DeviceList'

export default function Devices({route, brow}){
  const {devices, rtpg, name} = route
  const {types, sizes, browser, size} = brow
  console.log(browser)
  let more
  if(browser == "phone"){
    console.log('its a phone')
  }
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