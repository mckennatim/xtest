import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';

const Wel = (props) =>(
	<h5>inner {props.name}</h5>
)

const Va = (props)=>{
	var lo = "dlo"
	function log(x){
		lo = lo+x
		return lo
	}
	var alog = log('dog fuel')	
	alog = log(' a newone ')	
	var subjBypass = new Rx.Subject()

	subjBypass.subscribe({next: (v)=>console.log(v)})

	function setBypass(){
		subjBypass.next(true)
	}
	function unsetBypass(){
		subjBypass.next(false)
	}
	return (
		<div>		
			<h5>observe var {props.name}</h5>
			<button onClick={setBypass}>set bypass</button>
			<button onClick={unsetBypass}>un-set bypass</button>
			<div>{alog}</div>
		</div>
	)
}

const We = (props) => {
	var clicks = Rx.Observable.fromEvent(document, 'click');
	// Each click event is mapped to an Observable that ticks every second
	var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	var switched = higherOrder.switch();
	// The outcome is that `switched` is essentially a timer that restarts
	// on every click. The interval Observables from older clicks do not merge
	// with the current interval Observable.
	switched.subscribe(x => console.log(x));	
	return(
		<h5>Rx inner {props.name}</h5>
	)
}

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
	<Va name='duck'/>
	{/* <We name='eweber'/> */}
	<Wel name='fred'/>
	<Welc name='dirt'/>
	<Welco name='funcy'/>
	<div id="test1"></div>
	</div>
)

const container = document.getElementById('app');

ReactDOM.render(<App />, container)

