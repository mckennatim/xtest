import { reqSchedData, changeDevInfo } from '../actions';

function SenRel(props){
  const {name, devId, sched, srId, timeLeft} = props
  // console.log(props)
  // console.log(timeLeft)
  function extractProg(){
    if(sched && sched.length>0){
      // return console.log(sched)
    }
  }
  function getTime(){
    if (timeLeft){
      return timeLeft[srId]
    }
  }
  function generateRows(){
    if(sched && sched.length>0){
      const arow = sched.map((asch, idx)=>{
        // console.log(asch)
        const cells = asch.map((as,i)=>{
          return <td key={i}>{as}</td>
        })
        return <tr key={idx}>{cells}</tr>
      })
      return arow
    }
  }
  function generateHeaders(){
    if(sched && sched.length>0){
      if (sched.length==3){
        return <tr><th>hour</th><th>minute</th><th>state</th></tr>
      } else {
        return <tr><th>hour</th><th>minute</th>
                <th>hilimit</th><th>lolimit</th></tr>
      }
    } 
  }
  const headerComponents = generateHeaders()
  const rowComponents = generateRows()
  const tleft = getTime()
  // const progData = extractProg()
  // console.log(props.timr.tIMElEFT)
  return(
    <div>
      <div style={styles.outer} >
        <h4>in SenRel {name} device: {devId} senrel: {srId} </h4>
        {tleft}
        <div style={styles.tablediv}>
          <table style={styles.table}>
            <thead></thead>
            <tbody>
              {headerComponents}
              {rowComponents}
            </tbody>                      
          </table>
        </div>        
      </div>
    </div>
    )    
}

function mapStoreToProps(anElement){
  return (store)=>{
    function wait4sched(srId){
      if (store.route.currentDev.sched && store.route.currentDev.sched.length>srId){
        return store.route.currentDev.sched[srId].pro
      }
    }
    const srId = store.route.currentSenRel
    //console.log(store)
    const props= {
      name: store.harrysally.name,
      devId: store.route.currentDevId,
      srId: srId,
      sched: wait4sched(srId),
      timr: store.route.timr,
      timeLeft: store.route.timr.tIMElEFT
    }
    //console.log(props)
    return React.createElement(anElement, props)
  }
}

SenRel = mapStoreToProps(SenRel)
export {SenRel} 

const styles= {
  outer: {
    background:'#9338f4',
    height: 400,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    background: '#FFF28E',
    height: 340,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  },
  tablediv: {
    margin: '0 auto',
    background: '#8fd3ba',
    color: 'blue',
    textAlign: 'left',
    fontSize: '100%'
  },
  span: {
    float: 'right',
    paddingLeft: 15
  },
  ul: {
    margin: '0 auto',
    listStyleType: 'none',
    width: 160,
    padding: 35
  },
  table:{
    borderCollapse: 'collapse'
  }  
}