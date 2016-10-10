import {router} from '../router'

export default function Cat(props){
  console.log('in do cat')
  const { isLoading, name, users, rtpg } = props;

	const handleNavigate = (data) => () =>{
		console.log(data)
	  router.navigate(data);
	}

  return(
    <div style = {styles.outer}>
    	<h4>in doCat {name}</h4>
    	<button onClick={handleNavigate('dev/CYURD002')}>goto cat</button>
    </div>
    )
}
const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#ccb7b7',
    height: 400,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFF28E',
    height: 340,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  }
}