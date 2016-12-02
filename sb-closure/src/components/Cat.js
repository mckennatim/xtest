const Cat = (props)=>{
	console.log(props)
	const {catbox, name} = props
	return(
		<div>in cats {props.catbox} {name} </div>)
}