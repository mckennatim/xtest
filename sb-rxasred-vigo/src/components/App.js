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

function renderNav(){
  return(
    <div><h4>in render Nav</h4></div>
    )
}

function showRt(props){
  return props.rtpg(props)
}

export default function App(props) {
  const { isLoading, name, users, rtpg } = props;
  return (
    <div>
      <div id="menu">
        <a href="#dog" data-navigo>dog </a>        
        <a href="#cat" data-navigo>cat </a>        
      </div>      
      <br />
      { renderNav() } {showRt(props)}
      { isLoading ?
        <p>Loading...</p> :
        <h1>{ name }</h1> }
      { renderUsers(users) }
      <button onClick={handleChangeName('Harry')} >Harry</button>
      <button onClick={handleChangeName('Sally')} >Sally</button>
      <br />
      <button className="button primary" onClick={handleLoadFollowers('ryardley')} > Load Followers</button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool
};
