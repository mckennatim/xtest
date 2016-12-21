import { nrGetDevData } from '../actions';

function CachArray(props){
  const {catbox, name, sched} = props
  function getSched(){
    if (sched == undefined){
      console.log('sched is undefined')
      //nrGetDevData('CYURD001')
    }
    console.log(sched)
  }
  const thesched = getSched()
  return(
    <div>
      <div style = {styles.outer}>
      	<h4>in doCachArray {name}</h4>
      </div>  
    </div>
    )
}

function mapStoreToProps(anElement){
  console.log(anElement.name)
  return (store)=>{  
    function wait4sched(srId){
      if (store.route.currentDev.sched && store.route.currentDev.sched.length>srId){
        return store.route.currentDev.sched[srId].pro
      }
    }  
    const props= {
      catbox: store.catboxr.catbox,
      sched: wait4sched(0),
      name: store.harrysally.name
    }
  return React.createElement(anElement, props)
  }
}

CachArray = mapStoreToProps(CachArray)

export {CachArray}

const styles= {
  outer: {
    background:'#ccb7b7',
    height: 400,
    textAlign: 'center'    
  }
}