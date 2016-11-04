import React from 'react';
import ReactDOM from 'react-dom';

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

const App = (props) =>(
	<div>
	<h4>hello blank es6 react</h4>
	<Wel name='fred'/>
	<Welc name='dirt'/>
	<Welco name='funcy'/>
	</div>
)

const container = document.getElementById('app');

ReactDOM.render(<App />, container)

