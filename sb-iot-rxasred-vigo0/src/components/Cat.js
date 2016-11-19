import {router} from '../router'
import { toggleCatbox} from '../actions';
import Harry from './Harry';
import Devices from './Devices';
import DevInf from './DevInf';

export default function Cat(props){
  console.log(props)
  const browserProfile = {2:{0:Harry},3:{2:Harry, 3:Devices}, 4:{0:Harry, 2:Devices, 3:DevInf}}
  //['watch', 'phone', 'phoneL', 'tablet', 'tabletL', 'laptop']
  const typesProfiles= [1,1,2,2,3,4]
  const {types, sizes, browser, size} = props.brow

  const {catbox}=props.catboxr
  const {name}=props.harrysally
  var toggled = false;
	const handleNavigate = (data) => () =>{
	  router.navigate(data);
	}
  const handleToggled= (e)=>{
    toggleCatbox(e.target.checked)
  }
  return(
    <div>
      {browser}
      <div style = {styles.outer}>
      	<h4>in doCat {name}</h4>
      	<button onClick={handleNavigate('dev/CYURD002')}>goto CYURD002</button>
        <input type="checkbox" onChange={(e)=>handleToggled(e)}
          style = {styles.ckbox}
          id="c1" name="cc"
          checked={catbox}/> 
          <label htmlFor="c1" style = {styles.ckbox}>Toggle me</label>
        <p>{catbox? 'ON' : 'off'}</p>
      </div>  
    </div>
    )
}
const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#ccb7b7',
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
  },
  ckbox: {
    display: 'inline'
  }
}