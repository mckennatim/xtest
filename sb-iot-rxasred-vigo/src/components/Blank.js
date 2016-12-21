function Blank(props){
  const {catbox, name} = props
  return(
    <div>
      <div style = {styles.outer}>
      	<h4>in doBlank {name}</h4>
      </div>  
    </div>
    )
}

function mapStoreToProps(anElement){
  return (store)=>{  
    const props= {
        catbox: store.catboxr.catbox,
        name: store.harrysally.name
      }
    return React.createElement(anElement, props)
  }
}

Blank = mapStoreToProps(Blank)  

export {Blank}    	

const styles= {
  outer: {
    background:'#ccb7b7',
    height: 400,
    textAlign: 'center'    
  }
}