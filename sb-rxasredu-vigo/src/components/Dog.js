export default function Dog(props){
  console.log('in do dog')
  const { isLoading, name, users, rtpg } = props;
  return(
    <div style={styles.outer} ><h4>in doDog {name}</h4></div>
    )
}
const styles= {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    background:'#C4A265',
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