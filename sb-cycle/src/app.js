import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
// import {makeDOMDriver, div, input, p} from '@cycle/dom';
import {html} from 'snabbdom-jsx';
import React from 'react'

const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#ccb7b7',
    height: 600,
    textAlign: 'left'    
  }
 }

console.log('is running')

function main(sources) {
  const sinks = {
    DOM: sources.DOM.select('input').events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        <div style = {styles.outer}>
        	<h1>hello world</h1>
          <input type="checkbox" /> <label>Toggle me</label>
          <p>{toggled ? 'ON' : 'off'}</p>
        </div>
      )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);

