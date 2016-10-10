import React from 'react';

export default function Devinfo({name, currentDev}){
  console.log('in Devinfo')
  return(
    <div style={styles.outer}>
    	<h4>in doDevinfo {name}</h4>
    	{currentDev.name} <br/>
    	{currentDev.id} <br/>
    	{currentDev.desc}
    </div>
    )
}

const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#C4A265',
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