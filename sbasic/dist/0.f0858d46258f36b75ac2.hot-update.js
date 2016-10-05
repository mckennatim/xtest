webpackHotUpdate(0,{

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reduxDevtools = __webpack_require__(98);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(250);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(421);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(458);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(238);
	
	var _reactRedux = __webpack_require__(231);
	
	var _reactRouter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRouterRedux = __webpack_require__(585);
	
	var _reducers = __webpack_require__(590);
	
	var reducers = _interopRequireWildcard(_reducers);
	
	var _components = __webpack_require__(596);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducer = (0, _redux.combineReducers)(_extends({}, reducers, {
	  routing: _reactRouterRedux.routerReducer
	}));
	
	var store = (0, _redux.createStore)(reducer);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store);
	//const history = syncHistoryWithStore(hashHistory, store) mmmm
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactRouter.Router,
	      { history: history },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _components.App },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _components.Home }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'foo', component: _components.Foo }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'bar', component: _components.Bar }),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: 'animal', component: _components.Animal },
	          _react2.default.createElement(_reactRouter.Route, { path: 'dog', component: _components.Dog })
	        )
	      )
	    )
	  )
	), document.getElementById('mount'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(593); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function App(_ref) {
	  var children = _ref.children;
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'header',
	      null,
	      'Links:',
	      ' ',
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/' },
	        'Home'
	      ),
	      ' ',
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/foo' },
	        'Foo'
	      ),
	      ' ',
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/bar' },
	        'Bar'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: function onClick() {
	            return _reactRouter.browserHistory.push('/foo');
	          } },
	        'Go to /foo'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: { marginTop: '1.5em' } },
	      children
	    )
	  );
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(593); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})
//# sourceMappingURL=0.f0858d46258f36b75ac2.hot-update.js.map