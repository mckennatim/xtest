var handlers = {
	'application': 'application',
	'feed': 'feed',
	'messages': 'messages',
	'status': 'status dog',
	'profile': 'profile',
	'profile.lists': 'profile.lists',
	'profile.edit': 'profile.edit'
}

module.exports = function getHandler(routeName){
	return handlers[routeName]
}