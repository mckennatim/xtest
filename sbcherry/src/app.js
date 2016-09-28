var cherrytree = require('cherrytree')

// create the router
var router = cherrytree()
var getHandler = require('./handlers')
console.log(getHandler('status'))

// provide your route map
router.map(function (route) {
  route('application', {path: '/', abstract: true}, function () {
    route('feed', {path: ''})
    route('messages')
    route('status', {path: ':user/status/:id'})
    route('profile', {path: ':user'}, function () {
      route('profile.lists')
      route('profile.edit')
    })
  })
})

router.use(function render (transition) {
  transition.routes.forEach(function (route, i) {
    var handler = getHandler(route.name)
    handler.name = route.name
    handler.router = router
    var parentRoute = transition.routes[i - 1]
    if (parentRoute) {
      handler.parent = parentRoute.handler
    }
    route.handler = handler
    console.log(getHandler(route.name))
  })
})

router.use(function errorHandler (transition) {
  transition.catch(function (err) {
    if (err.type !== 'TransitionCancelled' && err.type !== 'TransitionRedirected') {
      console.error(err.stack)
    }
  })
})

// start listening to URL changes
router.listen()