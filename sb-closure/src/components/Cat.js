import React from 'react';

function Cat(props){
	console.log(props)
	const {catbox, name} = props
	return(
		<div>in catsd {props.catbox} {name} </div>)
}

function mapStoreToProps(anElement){
	//returns a function called later with store as its arg and anElement from here
	return (store)=>{  
		const	props= {
				catbox: store.catboxr.catbox,
				name: store.harrysally.name
			}
		return React.createElement(anElement, props)
	}
}

Cat = mapStoreToProps(Cat)


export {Cat}