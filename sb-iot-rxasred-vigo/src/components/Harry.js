import React, { PropTypes } from 'react';
import { changeName, loadGithubFollowers} from '../actions';
var Navigo = require('navigo');

const handleChangeName = (data) => () =>
  changeName(data);

const handleLoadFollowers = (data) => () =>
  loadGithubFollowers(data);

function renderUsers(users) {  
  if (!users) return;
  return (
    <ul>{ users.map((user, index) => <li key={index}>{user}</li>) }</ul>
  );
}

export default function Harry(props) {
  // console.log(props.harrysally)
  const { isLoading, name, users} = props.harrysally;
  
  return (
    <div style={styles.outer}>
        <h1>{ name }</h1>

      <button onClick={handleChangeName('Harry')} >Harry</button>
      <button onClick={handleChangeName('Sally')} >Sally</button>
      <br />
      <button className="button primary" onClick={handleLoadFollowers('ryardley')} > Load Followers</button>
      { isLoading ?
        <p>Loading...</p> :
        "dog" }
      { renderUsers(users) } 
    </div>
  );
}
const styles= {
  outer: {
    background:'#d2ef8f',
    height: 450,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    background: '#FFF28E',
    height: 280,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  }
}

Harry.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool
};

  // outer: {
  //   float: 'left',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   background:'#d2ef8f',
  //   height: 800,
  //   textAlign: 'center'    
  // 
// function Cat(pops){
//   var newprops = {
//     cat: pops.cat,
//     school: pops.class.school,
//     course: pops.class.course
//   }  
//   return Cat(newprops)
// }




// var fops = {
//   dog: 'uli',
//   cat: 'mabobi',
//   class: {school: 'westie', grade: 12, course:{name: 'humanities', history: 'world'}}
// }

// Cat(fops)
// console.log(Newcat)

// function connect(fn, pops){
//   var newprops = {
//     cat: pops.cat,
//     school: pops.class.school,
//     course: pops.class.course
//   }
//   return fn(newprops)
//   // return fn()
// }

// const acat = connect(Cat,fops)

// console.log(acat)

// const bcat = (Cat)=>Cat()
// console.log(bcat)