webpackJsonp([2],{

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(549)
	__vue_script__ = __webpack_require__(551)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/routes/Counter/components/CounterView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(552)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (true) {(function () {  module.hot.accept()
	  var hotAPI = __webpack_require__(538)
	  hotAPI.install(__webpack_require__(299), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3817f9bc/CounterView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(550);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(306)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(550, function() {
				var newContent = __webpack_require__(550);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(304)();
	// imports
	
	
	// module
	exports.push([module.id, ".counter {\n  font-weight: bold;\n}\n\n.counter-green {\n  color: rgb(25, 200, 25);\n}\n\n.counterContainer {\n  margin: 1em auto;\n}\n\n.btn {\n  border: 1px solid #ccc\n}\n", "", {"version":3,"sources":["/./src/routes/Counter/components/styles.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;CACnB;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,sBAAsB;CACvB","file":"styles.css","sourcesContent":[".counter {\n  font-weight: bold;\n}\n\n.counter-green {\n  color: rgb(25, 200, 25);\n}\n\n.counterContainer {\n  margin: 1em auto;\n}\n\n.btn {\n  border: 1px solid #ccc\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(387);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(309);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['counter', 'fetching'])),
	  methods: (0, _vuex.mapActions)(['increment', 'doubleAsync'])
	};

/***/ },

/***/ 552:
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <h2 class=\"counterContainer\">\n    Counter:\n    <span class=\"counter-green\">\n        {{counter}} {{fetching}}\n      </span>\n  </h2>\n  <button class='btn btn-default' @click=\"increment\">\n      Increment\n    </button>\n  <button class='btn btn-default' @click=\"doubleAsync\">\n      Double (Async)\n    </button>\n</div>\n";

/***/ }

});
//# sourceMappingURL=2.2.f9c3f490264500686594.js.map