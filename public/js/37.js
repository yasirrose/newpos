webpackJsonp([37],{

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(989)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(991)
/* template */
var __vue_template__ = __webpack_require__(992)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7277c258"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/admin/add_distributor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7277c258", Component.options)
  } else {
    hotAPI.reload("data-v-7277c258", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(962);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(94)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./radiobox.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./radiobox.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "/*\n * radiobox.css\n * v1.0.1\n * \n * Tiny set of CSS3 animations for your radio inputs.\n * https://github.com/720kb/\n * \n * MIT license\n * Thu Sep 15 2016\n */\n@-webkit-keyframes focus{0%{opacity:.4;-webkit-transform:scale(3);transform:scale(3)}10%{-webkit-transform:scale(2.5);transform:scale(2.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}@keyframes focus{0%{opacity:.4;-webkit-transform:scale(3);transform:scale(3)}10%{-webkit-transform:scale(2.5);transform:scale(2.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}.radiobox-focus:checked{-webkit-animation:focus .25s ease-out;animation:focus .25s ease-out}@-webkit-keyframes tremolo{0%{-webkit-transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg)}50%{-webkit-transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0);transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0)}90%{-webkit-transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg)}100%{-webkit-transform:none;transform:none}}@keyframes tremolo{0%{-webkit-transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg)}50%{-webkit-transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0);transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0)}90%{-webkit-transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg)}100%{-webkit-transform:none;transform:none}}.radiobox-tremolo:checked{-webkit-animation:tremolo 65ms linear;animation:tremolo 65ms linear;-webkit-animation-iteration-count:7;animation-iteration-count:7}@-webkit-keyframes boing{0%{-webkit-transform:translateY(3px) scaleY(.8);transform:translateY(3px) scaleY(.8)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}90%{opacity:.5;-webkit-transform:translateY(2px) scaleY(1) scaleX(1.5);transform:translateY(2px) scaleY(1) scaleX(1.5)}100%{-webkit-transform:none;transform:none}}@keyframes boing{0%{-webkit-transform:translateY(3px) scaleY(.8);transform:translateY(3px) scaleY(.8)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}90%{opacity:.5;-webkit-transform:translateY(2px) scaleY(1) scaleX(1.5);transform:translateY(2px) scaleY(1) scaleX(1.5)}100%{-webkit-transform:none;transform:none}}.radiobox-boing:checked{-webkit-animation:boing .2s ease-in-out;animation:boing .2s ease-in-out;-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes scatman{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}20%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}40%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}60%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:none;transform:none}}@keyframes scatman{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}20%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}40%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}60%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:none;transform:none}}.radiobox-scatman:checked{-webkit-animation:scatman .3s ease-in-out;animation:scatman .3s ease-in-out;-webkit-animation-iteration-count:2;animation-iteration-count:2}@-webkit-keyframes ufo{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}60%{-webkit-transform:scaleY(1) scaleX(1.43) rotate(270deg);transform:scaleY(1) scaleX(1.43) rotate(270deg)}100%{-webkit-transform:none;transform:none}}@keyframes ufo{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}60%{-webkit-transform:scaleY(1) scaleX(1.43) rotate(270deg);transform:scaleY(1) scaleX(1.43) rotate(270deg)}100%{-webkit-transform:none;transform:none}}.radiobox-ufo:checked{-webkit-animation:ufo .2s linear;animation:ufo .2s linear;-webkit-animation-iteration-count:4;animation-iteration-count:4}@-webkit-keyframes flash{0%,60%{-webkit-transform:scale(0);transform:scale(0)}30%{-webkit-transform:scale(.5);transform:scale(.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}@keyframes flash{0%,60%{-webkit-transform:scale(0);transform:scale(0)}30%{-webkit-transform:scale(.5);transform:scale(.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}.radiobox-flash:checked{-webkit-animation:flash .2s cubic-bezier(.03,.61,.17,.97);animation:flash .2s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes return{0%{-webkit-transform:scale(.3) translateX(7px);transform:scale(.3) translateX(7px)}50%{-webkit-transform:scale(.8) rotate(270deg) translateY(-10px);transform:scale(.8) rotate(270deg) translateY(-10px)}90%{-webkit-transform:skewX(15deg) rotate(270deg);transform:skewX(15deg) rotate(270deg)}}@keyframes return{0%{-webkit-transform:scale(.3) translateX(7px);transform:scale(.3) translateX(7px)}50%{-webkit-transform:scale(.8) rotate(270deg) translateY(-10px);transform:scale(.8) rotate(270deg) translateY(-10px)}90%{-webkit-transform:skewX(15deg) rotate(270deg);transform:skewX(15deg) rotate(270deg)}}.radiobox-return:checked{-webkit-animation:return .25s cubic-bezier(.03,.61,.17,.97);animation:return .25s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes boom{0%{opacity:.2;-webkit-transform:scale(2);transform:scale(2)}90%{opacity:.01;-webkit-transform:scale(6);transform:scale(6)}100%{-webkit-transform:none;transform:none}}@keyframes boom{0%{opacity:.2;-webkit-transform:scale(2);transform:scale(2)}90%{opacity:.01;-webkit-transform:scale(6);transform:scale(6)}100%{-webkit-transform:none;transform:none}}.radiobox-boom:checked{-webkit-animation:boom .2s ease-in;animation:boom .2s ease-in;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes vertigo{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px);transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px)}60%{-webkit-transform:scale(1.2) skewY(5deg) rotate(0);transform:scale(1.2) skewY(5deg) rotate(0)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}@keyframes vertigo{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px);transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px)}60%{-webkit-transform:scale(1.2) skewY(5deg) rotate(0);transform:scale(1.2) skewY(5deg) rotate(0)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}.radiobox-vertigo:checked{-webkit-animation:vertigo .2s ease-in;animation:vertigo .2s ease-in;-webkit-animation-iteration-count:5;animation-iteration-count:5}@-webkit-keyframes pump{0%,100%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-20deg);transform:rotate(15deg) skewX(10deg) skewY(-20deg)}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-40deg);transform:rotate(15deg) skewX(10deg) skewY(-40deg)}}@keyframes pump{0%,100%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-20deg);transform:rotate(15deg) skewX(10deg) skewY(-20deg)}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-40deg);transform:rotate(15deg) skewX(10deg) skewY(-40deg)}}@-webkit-keyframes pumpit{0%{-webkit-transform:none;transform:none}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(40deg);transform:rotate(-15deg) skewX(-10deg) skewY(40deg)}100%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(20deg);transform:rotate(-15deg) skewX(-10deg) skewY(20deg)}}@keyframes pumpit{0%{-webkit-transform:none;transform:none}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(40deg);transform:rotate(-15deg) skewX(-10deg) skewY(40deg)}100%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(20deg);transform:rotate(-15deg) skewX(-10deg) skewY(20deg)}}.radiobox-pump:checked{-webkit-animation:pump .4s cubic-bezier(.03,.61,.17,.97),pumpit .4s .4s linear;animation:pump .4s cubic-bezier(.03,.61,.17,.97),pumpit .4s .4s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hooray{0%{opacity:.1;-webkit-transform:scale(5);transform:scale(5)}60%{-webkit-transform:none;transform:none}}@keyframes hooray{0%{opacity:.1;-webkit-transform:scale(5);transform:scale(5)}60%{-webkit-transform:none;transform:none}}.radiobox-hooray:checked{-webkit-animation:hooray .2s ease-in;animation:hooray .2s ease-in;-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes wheel{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.9) skewX(9deg);transform:scale(.9) skewX(9deg)}60%{-webkit-transform:scale(1.1) skewY(9deg) rotate(270deg);transform:scale(1.1) skewY(9deg) rotate(270deg)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}@keyframes wheel{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.9) skewX(9deg);transform:scale(.9) skewX(9deg)}60%{-webkit-transform:scale(1.1) skewY(9deg) rotate(270deg);transform:scale(1.1) skewY(9deg) rotate(270deg)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}.radiobox-wheel:checked{-webkit-animation:wheel .1s cubic-bezier(.03,.61,.17,.97);animation:wheel .1s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:5;animation-iteration-count:5}.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}", ""]);

// exports


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(990);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("02e8b113", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7277c258\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add_distributor.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7277c258\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add_distributor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n#color[data-v-7277c258] {\r\n    height: 35px;\n}\n[data-v-7277c258] .form-control:disabled{\r\n        cursor: not-allowed;\n}\n.disabled[data-v-7277c258]{\r\n        cursor:not-allowed;\n}\n.form-control[data-v-7277c258]:active, .input-group .form-control[data-v-7277c258]:hover{\r\n    z-index: 1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _name$name$data$mount;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

__webpack_require__(961);
/* harmony default export */ __webpack_exports__["default"] = (_name$name$data$mount = {
    name: "formelements"
}, _defineProperty(_name$name$data$mount, "name", "radios_checkboxes"), _defineProperty(_name$name$data$mount, "data", function data() {
    return {

        radiooptions: [{ text: 'Active', value: '1' }, { text: 'Deactive', value: '0' }],
        model: {
            plugin_name: '',
            plugin_price: '',
            plugin_status: ''

        },
        data2: {
            d: ""
        }
    };
}), _defineProperty(_name$name$data$mount, "mounted", function mounted() {}), _defineProperty(_name$name$data$mount, "methods", {}), _name$name$data$mount);

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "mb-2 bg-success-card",
              attrs: {
                header: "Distributors / New Distributor",
                "header-tag": "h4"
              }
            },
            [
              _c("div", [
                _c(
                  "form",
                  { staticClass: "form-horizontal", attrs: { method: "" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "mb-2 mt-2 bg-default-card",
                              attrs: {
                                header: "Distributor Information",
                                "header-tag": "h4",
                                align: "left"
                              }
                            },
                            [
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "text" }
                                  },
                                  [
                                    _vm._v(
                                      "Frist:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Some value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "text" }
                                  },
                                  [
                                    _vm._v(
                                      "Last:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Some value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "text" }
                                  },
                                  [
                                    _vm._v(
                                      "Company Name:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Some value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "text" }
                                  },
                                  [
                                    _vm._v(
                                      "Address:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Some value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "number" }
                                  },
                                  [
                                    _vm._v(
                                      "City:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Enter value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "number" }
                                  },
                                  [
                                    _vm._v(
                                      "Zip:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Enter value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "number" }
                                  },
                                  [
                                    _vm._v(
                                      "State:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Enter value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "number" }
                                  },
                                  [
                                    _vm._v(
                                      "Phone:\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Enter value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group p-10" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label col-md-4",
                                    attrs: { for: "number" }
                                  },
                                  [_vm._v("Email:")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-9" }, [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "text",
                                      placeholder: "Enter value"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group p-10" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "control-label col-md-4",
                                      attrs: { for: "number" }
                                    },
                                    [_vm._v("Status:")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-radio-group", {
                                    attrs: { options: _vm.radiooptions }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "form-group p-10 form-actions"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-md-offset-4 col-md-8"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-success",
                                            attrs: { type: "button" }
                                          },
                                          [_vm._v("Save")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7277c258", module.exports)
  }
}

/***/ })

});