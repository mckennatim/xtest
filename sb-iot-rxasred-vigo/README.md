# sb-rxasred-vigo

##log
### sb-iot_DevInf-onmessage
What happens or should happen when user refreshes a devInf page or goes back to it from somewhere else. 

- send token to see if authorized
- get flags
- respond to messages

If any of that causes a state change then re-render. Re-rendering reruns `makeTimrMap` uses flag info to decide what timrs to display and formats the array of numbers into an array of objects 
### sb-iot-rxasred-vigo-2
todo - unpack state data as entries if table

## puzlles to solve
calling a react render function like `changePage(Harry)` changes the state by modifying rtpg changing it to the `Harry` react render function. The `Harry` has `props` that seem to be passed in by magic.

    export default function Harry(props) {
      const { isLoading, name, users, rtpg } = props;
      return (
        <div style={styles.outer}>
          { isLoading ?
            <p>Loading...</p> :
            <h1>{ name }</h1> }
          { renderUsers(users) }
          <button onClick={handleChangeName('Harry')} >Harry</button>
          <button onClick={handleChangeName('Sally')} >Sally</button>
          <br />
          <button className="button primary" onClick={handleLoadFollowers('ryardley')} > Load Followers</button>
        </div>
      );
    }
###solution
have the reducer handle it keeping a currentDev in state then just pass the props you need from state like this

    export default function Devinfo({name, currentDev}){
      console.log('in Devinfo')
      return(
        <div style={styles.outer}>
            <h4>in doDevinfo {name}</h4>
            {currentDev.name} <br/>
            {currentDev.id} <br/>
            {currentDev.desc}
        </div>
        )
    }



without params brings in props


sb rxjs as redux with routing by navigo

## based on rxjs as redux 

A simple effective Redux style framework using Rx https://github.com/ryardley/rxjs-as-redux

*This is an example of how you might create a simple Flux/Redux style framework using nothing other than [RxJS](http://reactivex.io/rxjs)*

http://rudiyardley.com/redux-single-line-of-code-rxjs/

#### on combining reducers
Ok so at the heart of things:

    action$.scan(reducer).subscribe(renderer) 

is cool. How might one combine reducers? I've been thinking I would need to do some kind of merge ala:    

from http://reactivex.io/rxjs/manual/tutorial.html#state-stores I see:

    var state = Rx.Observable.merge(
      increase,
      decrease,
      input
    ).scan((state, changeFn) => changeFn(state), {
      count: 0,
      inputValue: ''
    });

but I can't quite wrap my head around it

