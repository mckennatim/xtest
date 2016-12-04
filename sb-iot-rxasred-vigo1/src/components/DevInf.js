import React from 'react';
import mqttCon from '../actions/mqttCon'

const DevInf = React.createClass({

  componentDidMount: function() {
    console.log('Devinf mounted')
    // this.client = mqttCon(this.currentDev.id, this.props)
  },
  componentWillUnmount: function(){
    console.log('Devinf unmountd')
    // this.client.publish('presence', 'Help, wants to close! ');
    // this.client.end();    
  },
  makeTimrMap: function(){
    const dev = this.props.route.currentDev
    const timrRaw = this.props.route.timr.tIMElEFT
    const ISrELAYoN = this.props.route.timr.ISrELAYoN
    const timr = timrRaw.map((t,i)=>{
      const relon = (Math.pow(2,i) & ISrELAYoN)>0 ? "on" : "off"
      return {id:i, sec:t, ison:relon}
    }).filter((t,i)=>{
      return (Math.pow(2,i) & this.HAStIMR)>0
    })
    return timr
  },
  generateHeaders: function() {
    const tags = this.props.route.currentDev.specs.notTimerTags
    return tags.map(function(h,i) {
        return <th key={i}> {h} </th>;
    });
  },    
  generateRows: function(){
    const dev = this.props.route.currentDev.id
    const rawState = this.props.route.srstate
    const notTimer = 31 - this.HAStIMR
    const srstate = rawState.filter((sens)=>{
      return (Math.pow(2,sens.id) & notTimer)>0
    }).map((sens)=>{
      const cells = sens.darr.map((d,i)=>{
        return <td key={i}> {d} </td>;
      })
      return <tr key={sens.id}><td>temp{sens.id}</td>{cells}</tr>
    })
    return srstate
  },    
  render: function(){
    this.currentDev = this.props.route.currentDev
    this.HAStIMR = this.props.route.flags.HAStIMR
    const timr = this.makeTimrMap()
    const {name}= this.props.harrysally 
    const headerComponents = this.generateHeaders()  
    const rowComponents = this.generateRows() 
      
    return(
      <div style={styles.outer}>
        <h4>in doDevinfo {name}</h4>
        {this.currentDev.name} <br/>
        {this.currentDev.id} <br/>
        {this.currentDev.desc}<br/>
        <ul style={styles.ul}>
        {timr.map((tmr, idx)=>{
          const art = `#/dev/${this.currentDev.id}/${tmr.id}`
          return(
            <li key={idx} style={styles.inner}>
            <a href={art}>relay{tmr.id}:</a> 
            <span style={styles.span}> {tmr.ison}</span>
            <span style={styles.span}> {tmr.sec}</span>
            </li>
          )}
        )}
        </ul>
        <div style={styles.tablediv}>
          <table style={styles.table}>
            <thead></thead>
            <tbody>
              <tr><th>sensor</th>{headerComponents}</tr>
              {rowComponents}
            </tbody>                      
          </table>
        </div>
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
    color: 'green',
    textAlign: 'left',
    fontSize: '100%',
    padding: 3,
    border: '1px solid #dddddd'
  },
  tablediv: {
    margin: '0 auto',
    background: '#8fd3ba',
    color: 'blue',
    textAlign: 'left',
    fontSize: '100%'
  },
  span: {
    float: 'right',
    paddingLeft: 15
  },
  ul: {
    margin: '0 auto',
    listStyleType: 'none',
    width: 160,
    padding: 35
  },
  table:{
    borderCollapse: 'collapse'
  }
}