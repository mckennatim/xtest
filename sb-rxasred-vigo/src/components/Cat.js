export default function Cat(props){
  console.log('in do cat')
  const { isLoading, name, users, rtpg } = props;
  return(
    <div><h4>in doCat {name}</h4></div>
    )
}