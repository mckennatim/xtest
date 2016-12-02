import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App'

const store = {
	route: {currentDevice: 'CYURD001', arr: ['dog', 'cat']},
	harrysally: {name: 'Fred'},
	catboxr: {catbox: 'meow'}
}

const container = document.getElementById('app');

ReactDOM.render(<App {...store}/>, container) //is same as
// ReactDOM.render(React.createElement(App, store), container)

