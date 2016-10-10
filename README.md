# xtest small test code in sbdev0
Each directory represents a code exploration and has its own README.md. All share sbdev0/node_modules.

## tags
### 04-sb-rxasred-vigo
handles parameters by

- in routes.js - instead of just passing the the react render function to `return changeDevInfo(pro)` create an object containing the params and render function and put that in payload. Now the reducer can parse it
- in reducer.js - return a state that now has `currentDevId` and `currentDev` which is the devices record that matches the id.
- in DevInfo.js, the render function - instead of passing it all the props, just pass it a destructured list `{name, currentDev}` of the parts of state that it needs.


### 03-sb-rxasred-vigo
An interesting almost clean rendition where react renders from simple functions, state is managed by an rxjs implementation of redux and navigation works with navigo.
### 02-xtest-react-router

## xtest apps

- `sb_rxjs-as-redux` intriguing project using composed higher order functions, plain react render functions with props as parameters
- `sbnavigo` uses Vue but inrement/decrement doesn't work
- `sb-redux-observable-raw` works but no routing
- cherrytree works on examples vanilla but gets stuck on helo-world-react
- rxjs as redux - too much gulp needed
- sb-react-router - breaks win react router@next (4), for 2.8 hash works for -w and dist2, not for webpack-dev-server. Navigation by `this.context.router.push('about')`
- sb-react-router4 - works on dist2 with hash routes,
- sbasic react-router 2.8 button doesn't work for navigation. otherwise hash