import React from 'react';
import {Cat} from './Cat'

const Wel = (props) =>(
	<h5>inner {props.name}</h5>
)

class Welc extends React.Component{
	render(){
		return(<h5>welc {this.props.name}</h5>)
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

const App = (props) =>{
	// const newcat = createElementWithProps(CatO(props))
	const newcat = Cat(props)
	return(
		<div>
			<h4>hello blank es6 rect</h4>
			<Wel name='freed'/>
			<Welc name='dirt'/>
			<Welco name='funcy'/>
			{newcat}
		</div>
)}

export {App}