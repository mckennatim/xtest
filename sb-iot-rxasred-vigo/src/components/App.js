import React, { PropTypes } from 'react';
import { changeName, loadGithubFollowers} from '../actions';
var Navigo = require('navigo');
import * as cf from './index'

var fnstr= 'Devices'
var fn = cf[fnstr]
if (typeof fn === "function") console.log(fn);
console.log(fn.name)

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
  let elArr=[]
  const {harrysally, route, catboxr, brow} = props
  const {types, sizes, browser, size} = props.brow
  const rtPage = props.route.rtpg
  const browserTypeIdx = types.indexOf(browser)
  const panesPerType = cf.panes[browserTypeIdx]
  const pageList = cf.multi.filter((amul,i)=>(amul.pri==rtPage))
  if(pageList.length==0){
    console.log('no pageList for this rtPage -> 1 screen ')
    const singleElement = React.createElement(cf[rtPage], props)
    elArr.push(singleElement)    
  }else{
    const multiList= pageList[0].mul.filter((mu)=>(mu.length==panesPerType))
    // console.log(multiList.length)
    if (multiList.length==0){
      console.log('no multiList for this screensize -> 1 screen')
      const singleElement = React.createElement(cf[rtPage], props)
      elArr.push(singleElement)    
    }else{
      // console.log(multiList[0])
      const elList = multiList[0].map((pgStr, i)=>{
        const pg = React.createElement(cf[pgStr], props)
        return pg
      })
      elArr = elList
    }
  }
return elArr

}

export default function App(props) {
  const { isLoading, name, users, rtpg, route, brow } = props;
  // console.log(props)

  return (
    <div className="container">
      <div className="header item-default">
        { renderNav() }    
        <div id="menu">
          <a href="#/devices" data-navigo>devices </a>        
          <a href="#/cat" data-navigo>cat </a>        
          <a href="#/harry" data-navigo>harry </a>        
        </div>      
        <br />
      </div>
      {showRt(props).map((el,i)=>{
        return <div className="content item-default" key={i}>{el}</div>
      })}
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool
};
