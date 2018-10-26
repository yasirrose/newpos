webpackJsonp([14],{

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1123)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1116)
/* template */
var __vue_template__ = __webpack_require__(1117)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-758b2a8c"
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
Component.options.__file = "resources/assets/components/admin/user_profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-758b2a8c", Component.options)
  } else {
    hotAPI.reload("data-v-758b2a8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "formelements",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1117:
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
              staticClass: "bg-deafult-card",
              attrs: { header: "Admin/Profile", "header-tag": "h4" }
            },
            [
              _c("div", {}, [
                _c("ul", [
                  _c("li", [
                    _c("b", [_vm._v("Support Emails:")]),
                    _vm._v(
                      " Add any Support Email #1 or  # 2 and this will allow for us to get emails sent from users within POS in case of a questions."
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Allow IP:")]),
                    _vm._v(
                      "  Only these IP address can sign into the the Admin Panel"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Security PIN: ")]),
                    _vm._v(
                      " Simply add a six digit numberical PIN which will be used when you sign in"
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Support Phones:")]),
                    _vm._v(
                      " Simply add a cell phones you would like to get text messages from users when they click on Call Me button "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("NOTE:")]),
                  _vm._v(
                    " If you would like to change any of the field information simply update and Save. "
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "mb-2",
              attrs: { header: "Information", "header-tag": "h4" }
            },
            [
              _c("div", [
                _c(
                  "form",
                  { staticClass: "form-horizontal", attrs: { method: "" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "First:\n                                    "
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
                                "Last:\n                                    "
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
                              attrs: { for: "input_Email" }
                            },
                            [_vm._v("Support Email # 1:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "email",
                                id: "input_Email",
                                placeholder: "Email"
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
                              attrs: { for: "input_Email" }
                            },
                            [_vm._v("Support Email # 2:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "email",
                                id: "input_Email",
                                placeholder: "Email"
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
                                "Allow IP:\n                                    "
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
                              attrs: { for: "input_Password" }
                            },
                            [_vm._v("Security PIN:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "input_Password",
                                placeholder: "Password"
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
                              attrs: { for: "input_Password" }
                            },
                            [_vm._v("Password:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "input_Password",
                                placeholder: "Password"
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
                              attrs: { for: "input_Password" }
                            },
                            [_vm._v("Confirm Password:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "input_Password",
                                placeholder: "Password"
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
                                "Support Phone  # 1:\n                                    "
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
                                "Support Phone  # 2:\n                                    "
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
                                "Support Phone  # 3:\n                                    "
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
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" }
                            },
                            [_vm._v("Save")]
                          )
                        ])
                      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-758b2a8c", module.exports)
  }
}

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("b2940868", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-758b2a8c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-758b2a8c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n#color[data-v-758b2a8c] {\r\n    height: 35px;\n}\n[data-v-758b2a8c] .form-control:disabled{\r\n        cursor: not-allowed;\n}\n.disabled[data-v-758b2a8c]{\r\n        cursor:not-allowed;\n}\n.form-control[data-v-758b2a8c]:active, .input-group .form-control[data-v-758b2a8c]:hover{\r\n    z-index: 1;\n}\r\n", ""]);

// exports


/***/ })

});