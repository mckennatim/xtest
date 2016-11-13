import React, { PropTypes } from 'react';
import { changeName, loadGithubFollowers} from '../actions';
var Navigo = require('navigo');
import DevInf from './DevInf'

const handleChangeName = (data) => () =>
  changeName(data);

const handleLoadFollowers = (data) => () =>
  loadGithubFollowers(data);

function renderNav(){
  return(
    <div><h4>Sitebuilt IOT app</h4></div>
    )
}

function showRt(props){
  const {harrysally, route, catboxr} = props
  return React.createElement(props.route.rtpg, props)
}

export default function App(props) {
  const { isLoading, name, users, rtpg, route, brow } = props;
  console.log(props)

  return (
    <div>
      { renderNav() }    
      <div id="menu">
        <a href="#/devices" data-navigo>devices </a>        
        <a href="#/cat" data-navigo>cat </a>        
        <a href="#/harry" data-navigo>harry </a>        
      </div>      
      <br />
      {showRt(props)}
      <div id="devi"></div>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool
};
