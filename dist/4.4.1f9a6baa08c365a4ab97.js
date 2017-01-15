webpackJsonp([4],{

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(560)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/routes/User/routes/List/components/ListView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(561)
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
	  var id = "_v-3bd0b233/ListView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 560:
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
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['userList'])),
	  methods: (0, _vuex.mapActions)(['list']),
	  mounted: function mounted() {
	    this.list();
	  }
	};

/***/ },

/***/ 561:
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <h3>我是列表</h3>\n  <ul>\n    <li v-for='li in userList'>{{li.id}} - {{li.name}}</li>\n  </ul>\n</div>\n";

/***/ }

});
//# sourceMappingURL=4.4.1f9a6baa08c365a4ab97.js.map