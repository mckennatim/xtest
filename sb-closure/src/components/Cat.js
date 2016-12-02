import React from 'react';

let Cat = (props)=>{
	console.log(props)
	const {catbox, name} = props
	return(
		<div>in catsd {props.catbox} {name} </div>)
}

function mapStateToProps(anElement){
	//returns a function called later with store as its arg and el from here
	return (store)=>{  
		const	props= {
				catbox: store.catboxr.catbox,
				name: store.harrysally.name
			}
		return React.createElement(anElement, props)
	}
}

Cat = mapStateToProps(Cat)


export {Cat}