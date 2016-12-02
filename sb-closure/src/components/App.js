import React from 'react';

import {Cat} from './Cat'

const Wel = (props) =>(
	<h5>inner {props.name}</h5>
)

class Welc extends React.Component{
	render(){
		return(
				<h5>welc {this.props.name}</h5>				
			)
	}
}

const Welco = React.createClass({
	componentDidMount: function() {
		console.log('yard mounted')
	},
	componentWillUnmount: function(){
		console.log('yard unmountd')
	},	
	render: function(){
		return(
				<h5>welco {this.props.name}</h5>				
			)
	}	
})

const props = {
	route: {currentDevice: 'CYURD001', arr: ['dog', 'cat']},
	harrysally: {name: 'Fred'},
	catboxr: {catbox: 'meow'}
}

function limitPropsOf(afn){
	return (props)=>{
		const ob = {
			fn: afn,
			pr: {
				catbox: props.catboxr.catbox,
				name: props.harrysally.name
			}
		}
		return ob	
	}
}

const CatO = limitPropsOf(Cat)
console.log(CatO(props))

function crne(ob){
	return React.createElement(ob.fn, ob.pr)
}

const App = (props) =>{
	console.log(props)
	const newcat = crne(CatO(props))
	return(
		<div>
			<h4>hello blank es6 rect</h4>
			<Wel name='fred'/>
			<Welc name='dirt'/>
			<Welco name='funcy'/>
			<Cat/>
			{newcat}
		</div>
)}

export {App}