import {router} from '../router'
import { toggleCatbox} from '../actions';


export default function Cat(props){
  console.log('in do cat 12')
  const {catbox}=props.catboxr
  const { isLoading, name, users, rtpg, catboxr} = props;
  var toggled = false;
	const handleNavigate = (data) => () =>{
		console.log(data)
	  router.navigate(data);
	}
  const handleToggled= (e)=>{
    toggleCatbox(e.target.checked)
    console.log(e.target.checked)
    console.log(catbox)
  }

  return(
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