import {router} from '../router'


const handleNavigate = (data) => () =>
	//console.log(params)
  router.navigate(data);

export default function DevicesList(props){
  console.log('in do devices')
  const { devices, name } = props;

  console.log(devices)
  devices.map((dev)=>{
  	console.log(dev)
  })

  return(
    <div>
    	<h5>in DeviceList for {name}</h5>
    	<ul style={styles.ul}>
        {devices.map(function(dev){
          return <li key={dev.id} style={styles.li}>
          		<a onClick={handleNavigate('/dev/'+dev.id)}>{dev.name}</a>
          	</li>;
        })}
    	</ul>
    	<button onClick={handleNavigate('/cat')}>goto cat</button>
    </div> 
    )
}

const styles = {
	ul: {
	  listStyleType: 'none',
	  margin: 0,
	  padding: 0
	},
	li: {
		height: 34,
		background:'#d2ef8f',
		borderBottom: '1px solid black',
		paddiing: '5 5 5 5'
	}
}