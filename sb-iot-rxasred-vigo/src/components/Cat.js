import {router} from '../router'
import { toggleCatbox} from '../actions';
import Harry from './Harry';
import Devices from './Devices';
import DevInf from './DevInf';

export default function Cat(props){
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
    background:'#ccb7b7',
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
  },
  ckbox: {
    display: 'inline'
  }
}