import React from 'react';
import mqttCon from '../actions/mqttCon'

const DevInf = React.createClass({

  componentDidMount: function() {
    console.log('Devinf mounted')
    console.log(this.currentDev.id)
    this.client = mqttCon(this.currentDev.id)
  },
  componentWillUnmount: function(){
    console.log('Devinf unmountd')
    this.client.publish('presence', 'Help, wants to close! ');
    this.client.end();    
  },
  render: function(){
    this.currentDev = this.props.route.currentDev
    const timr = this.props.route.timr
    const srstate = this.props.route.srstate
    const {name}= this.props.harrysally  
    console.log(this.props)  
    return(
      <div style={styles.outer}>
        <h4>in doDevinfo {name}</h4>
        {this.currentDev.name} <br/>
        {this.currentDev.id} <br/>
        {this.currentDev.desc}<br/>
        <ul style={styles.ul}>
        {timr.map((tmr, idx)=>
          <li key={idx+2} style={styles.inner}>Timer {idx+2}:  
          <span style={styles.span}>{tmr}</span>
          </li>
        )}
        </ul>
        {srstate.id} {srstate.darr}
      </div>
    )    
  }
})

export default DevInf 


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
    background: '#FFF28E',
    color: 'red',
    textAlign: 'left',
    fontSize: '100%'
  },
  span: {
    display: 'table',
    color: 'blue',
    float: 'right',
    textAlign: 'right',
    fontSize: '120%'    
  },
  ul: {
    listStyleType: 'none'
  }
}