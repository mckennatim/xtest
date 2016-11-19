import DeviceList from './DeviceList'
import Harry from './Harry';
import DevInf from './DevInf';

export default function Devices(props){
  const browserProfile = {2:{2:DevInf},3:{2:DevInf}, 4:{2:DevInf}}
  //['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop']
  const typesProfiles= [1,1,2,2,3,4]
  const {types, sizes, browser, size} = props.brow
  const addPg = (ba)=>{
    const ix = types.indexOf(browser)
    const tf = typesProfiles[ix]
    const bf = browserProfile[tf]
    if (typeof bf=="object"){
      if(typeof bf[ba] =="function"){
        return React.createElement(bf[ba], props)
      }
    }
  }
  const beforeA = addPg(0)
  const beforeB = addPg(1)
  const afterA = addPg(2)
  const afterB = addPg(3)

  const {devices, rtpg, name} = props.route
  console.log(browser)
  let more
  if(browser == "phone"){
    console.log('its a phone')
  }
  return(
    <div>
      {beforeA}
      {beforeB}    
      <div style={styles.outer} >
        <h4>in Devices {name}</h4>
        <DeviceList name={name} devices={devices} />
      </div>
      {afterA} 
      {afterB}      
    </div>
    )    
}
const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#9338f4',
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