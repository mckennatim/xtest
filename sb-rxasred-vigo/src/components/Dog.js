export default function Dog(props){
  console.log('in do dog')
  const { isLoading, name, users, rtpg } = props;
  return(
    <div><h4>in doDog {name}</h4></div>
    )
}