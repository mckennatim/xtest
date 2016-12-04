// const { connect } = require('react-redux');
import {router} from '../router'
import { toggleCatbox} from '../actions';
import Harry from './Harry';
import Devices from './Devices';
import DevInf from './DevInf';

function Cat(props){
  console.log('cat rerouting')
  const {types, sizes, browser, size} = props.brow
  const {catbox}=props.catboxr
  const {name}=props.harrysally
  // const {catbox, name} = props
  var toggled = false;
	const handleNavigate = (data) => () =>{
	  router.navigate(data);
	}
  const handleToggled= (e)=>{
    toggleCatbox(e.target.checked)
  }
  return(
    <div>
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

// function mapStoreToProps(anElement){
//   //returns a function called later with store as its arg and anElement from here
//   return (store)=>{  
//     const props= {
//         catbox: store.catboxr.catbox,
//         name: store.harrysally.name
//       }
//     return React.createElement(anElement, props)
//   }
// }

// Cat = mapStoreToProps(Cat)

export {Cat}

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