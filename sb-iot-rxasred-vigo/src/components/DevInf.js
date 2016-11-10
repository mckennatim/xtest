import React from 'react';
import mqttCon from '../actions/mqttCon'

const DevInf = React.createClass({

  componentDidMount: function() {
    console.log('Devinf mounted')
    this.client = mqttCon(this.currentDev.id, this.props)
  },
  componentWillUnmount: function(){
    console.log('Devinf unmountd')
    this.client.publish('presence', 'Help, wants to close! ');
    this.client.end();    
  },
  makeTimrMap: function(HAStIMR, timrRaw){
    const timr = timrRaw.map((x,i)=>{
      if((Math.pow(2,i) & HAStIMR)>0){
        return {id: i, sec:x}
      }else {
        return
      }
    }).filter(function(x,i){
      return typeof x === 'object'
    })
    return timr
  },
  render: function(){
    this.currentDev = this.props.route.currentDev
    const HAStIMR = this.props.route.flags.HAStIMR
    const timrRaw = this.props.route.timr
    const timr = this.makeTimrMap(HAStIMR, timrRaw)
    const srstate = this.props.route.srstate
    const {name}= this.props.harrysally  
    return(
      <div style={styles.outer}>
        <h4>in doDevinfo {name}</h4>
        {this.currentDev.name} <br/>
        {this.currentDev.id} <br/>
        {this.currentDev.desc}<br/>
        <ul style={styles.ul}>
        {timr.map((tmr, idx)=>
          <li key={idx} style={styles.inner}>Timer {tmr.id}:  
          <span style={styles.span}>{tmr.sec}</span>
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