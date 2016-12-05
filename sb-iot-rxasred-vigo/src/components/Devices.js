import DeviceList from './DeviceList'
import Harry from './Harry';
import DevInf from './DevInf';

function Devices(props){
  // const {types, sizes, browser, size} = props.brow
  // const {devices, rtpg, name} = props.route
  const {devices, name} = props
  // console.log(browser)
  // let more
  // if(browser == "phone"){
  //   console.log('its a phone')
  // }
  return(
    <div>
      <div style={styles.outer} >
        <h4>in Devices {name}</h4>
        <DeviceList name={name} devices={devices} />
      </div>
    </div>
    )    
}
function mapStoreToProps(anElement){
  //returns a function called later with store as its arg and anElement from here
  return (store)=>{  
    const props= {
        devices: store.route.devices,
        name: store.harrysally.name
      }
    return React.createElement(anElement, props)
  }
}

Devices = mapStoreToProps(Devices)

export {Devices}
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