import {router} from '../router'
import { toggleCatbox} from '../actions';
import Harry from './Harry';



export default function Cat(props){
  const {catbox}=props.catboxr
  const {name}=props.harrysally
  const {types, sizes, browser, size} = props.brow
  console.log(browser)
  const domore = ()=>{
    if(browser == "phone"){
      console.log('its a phone')
      return React.createElement(Harry, props)  
    } else {
      return <p>a duck is a duck</p>
    }
  }
  const more = domore()

  //const { isLoading, name, users, rtpg, catboxr} = props;
  var toggled = false;
	const handleNavigate = (data) => () =>{
	  router.navigate(data);
	}
  const handleToggled= (e)=>{
    toggleCatbox(e.target.checked)
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
      {more}     
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