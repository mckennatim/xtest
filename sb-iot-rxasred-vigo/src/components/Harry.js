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
  const { isLoading, name, users, rtpg } = props;
  return (
    <div style={styles.outer}>
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
const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#d2ef8f',
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

Harry.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool
};