webpackJsonp([18],{

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1092)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1094)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34452bec"
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
Component.options.__file = "resources/assets/components/widgets/portfolio/portfolio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34452bec", Component.options)
  } else {
    hotAPI.reload("data-v-34452bec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1093);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("c5e15cf6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34452bec\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./portfolio.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34452bec\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./portfolio.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*social-widget*/\n.social-widget .user-pic[data-v-34452bec] {\n    border-radius: 50%;\n    width: 106px;\n}\n.social-widget .social-icons[data-v-34452bec] {\n    font-size: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n.border_bottom[data-v-34452bec]{\n    border-bottom:1px solid #ccc;\n}\n.post-fllow[data-v-34452bec] {\n    background-color: #fff !important;\n}\n.social-widget .post-fllow[data-v-34452bec] {\n    background-color: #e5e5e5;\n    padding-bottom: 4px;\n    padding-top: 18px;\n    border-top: 1px solid #ccc;\n}\n.social-widget .post-fllow[data-v-34452bec]:not(:last-child) {\n    border-right: 1px solid #CCC;\n}\n", ""]);

// exports


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card social-widget" }, [
      _c("div", { staticClass: "card-block" }, [
        _c("div", { staticClass: "row text-center" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("img", {
              staticClass: "user-pic mt-3 mb-2",
              attrs: {
                src: __webpack_require__(791),
                alt: "profile image"
              }
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "text_color" }, [_vm._v("Arthur Riley")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mt-2 text_color mt-2" }, [
            _c("p", { staticClass: "pb-3 border_bottom" }, [
              _vm._v(
                "Morbi nisi elit, blandit sit amet tincidunt eget, ullamcorper at diam. Nunc ultullamcorper at diam. Nunc ultricies semper porta."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 " }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 social-icons" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", {
                    staticClass: "fa fa-google-plus text-danger",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 social-icons" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", {
                    staticClass: "fa fa-facebook text-primary",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 social-icons" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", {
                    staticClass: "fa fa-twitter text-info",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row m-0 text-center" }, [
        _c("div", { staticClass: "col-4  pb-0 post-fllow" }, [
          _c("span", { staticClass: "mt-3" }, [_c("strong", [_vm._v("39")])]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2" }, [_vm._v("Posts")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 pb-0 post-fllow" }, [
          _c("span", [_c("strong", [_vm._v("210")])]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2" }, [_vm._v("Following")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 pb-0 post-fllow" }, [
          _c("span", [_c("strong", [_vm._v("1,650")])]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2" }, [_vm._v("Followers")])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34452bec", module.exports)
  }
}

/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1530);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("28311c3b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3b125a2\",\"scoped\":true,\"hasInlineConfig\":true}!./widgets.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3b125a2\",\"scoped\":true,\"hasInlineConfig\":true}!./widgets.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(244);
exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "/*tabs styles*/\n.tab-pane .card[data-v-f3b125a2] {\n    margin: 0;\n    border: none;\n}\n.name_center[data-v-f3b125a2]{\n    margin-left: 12px;\n    margin-top: 5px;\n}\n.name_font[data-v-f3b125a2]{\n    font-size: 16px;\n    color: #7B7B7B;\n}\n.number_font[data-v-f3b125a2]{\n    font-size: 15px;\n}\n.text_color[data-v-f3b125a2]{\n    color: #ccc;\n}\n/*panel style*/\n.panel[data-v-f3b125a2] {\n    border: 1px solid #e5e5e5;\n    border-radius: 0;\n    -webkit-box-shadow: 0 1px 30px rgba(0, 0, 0, .1);\n            box-shadow: 0 1px 30px rgba(0, 0, 0, .1);\n}\n\n\n/*user-profile*/\n.user-profile[data-v-f3b125a2] {\n    color: #777;\n}\n.user-profile .profile-img[data-v-f3b125a2] {\n    width: 110px;\n    margin-right: 25px;\n}\n.user-profile .profile-details[data-v-f3b125a2] {\n    padding: 10px 0;\n}\n.user-profile .table.account-details > tbody > tr > td[data-v-f3b125a2] {\n    padding: 17px 16px;\n}\n.account-details tbody tr[data-v-f3b125a2]:hover {\n    background-color: #EEE;\n}\n\n\n/*twitter profile*/\n.tweet-profile .card-header[data-v-f3b125a2] {\n    padding-bottom: 45px;\n    background-color: #4cb6e5;\n    color: #FFF;\n}\n.tweet-profile .profile-img img[data-v-f3b125a2] {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    margin-top: -50px;\n}\n.tweet-profile .tweet-details[data-v-f3b125a2] {\n    font-size: 14px;\n    color: #555;\n    margin-bottom: 15px;\n}\n.tweet-profile .tweet-details .count[data-v-f3b125a2] {\n    margin: 0;\n    font-size: 22px;\n}\n.tweet-profile .tweet-details .row div[data-v-f3b125a2]:not(:last-child) {\n    border-right: 1px solid #ccc;\n}\n.tweet-profile .events[data-v-f3b125a2] {\n    border: 1px solid #bbb;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    margin-top: 15px;\n    margin-right: -20px;\n    font-size: 18px;\n    color: #555;\n}\n.tweet-profile .btn-tweet[data-v-f3b125a2] {\n    padding: 5px;\n    margin-top: 14px;\n}\n\n\n/*user page*/\n.m-0[data-v-f3b125a2] {\n    margin: 0;\n}\n.user-page .cover-image[data-v-f3b125a2] {\n    height: 220px;\n    width: 100%;\n}\n.user-page .user-pic[data-v-f3b125a2] {\n    width: 90px;\n    padding: 10px;\n}\n.user-page .post-details[data-v-f3b125a2] {\n    display: block;\n    padding-top: 25px;\n    font-size: 14px;\n    color: #777;\n}\n.user-page .views[data-v-f3b125a2] {\n    background-color: #e5e5e5;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #555;\n}\n.user-page .views[data-v-f3b125a2]:not(:last-child) {\n    border-right: 1px solid #FFF;\n}\n\n\n/*top tabbed panel*/\n.tabbbed-bg[data-v-f3b125a2] {\n    padding: 0;\n    background-color: #418AC9;\n    border-bottom: 0;\n}\n.tabbbed-bg a[data-v-f3b125a2] {\n    color: #FFF;\n}\n.tabbbed-bg + .panel-body[data-v-f3b125a2] {\n    min-height: 313px;\n}\n.desc-img img[data-v-f3b125a2] {\n    width: 50px;\n    height: 50px;\n    border-radius: 22px;\n    margin-right: 13px;\n}\n.nav-tabs.nav-justified > li > a[data-v-f3b125a2] {\n    border-bottom: 0;\n}\n.panel-heading .nav > li.active > a[data-v-f3b125a2],\n.panel-heading .nav > li > a[data-v-f3b125a2]:hover {\n    color: #777;\n    background: #fff;\n    border-bottom: 1px solid #fff;\n}\n.tab-pane .d-head[data-v-f3b125a2] {\n    font-size: 14px;\n    color: #337ab7;\n    font-weight: bold;\n}\n.tab-pane .c-head[data-v-f3b125a2] {\n    font-size: 14px;\n}\n.tab-content .media[data-v-f3b125a2] {\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n\n/*weekly data line chart*/\n.stats-chart[data-v-f3b125a2] {\n    height: 244px;\n    background-color: #3399ff;\n    font-size: 22px;\n}\n\n\n/*echart*/\n.echarts[data-v-f3b125a2] {\n    width: 100%;\n    height: 100%;\n}\n.weekly-stats .shots-likes[data-v-f3b125a2] {\n    font-weight: bold;\n    font-size: 24px;\n    padding-top: 15px;\n}\n.weekly-stats .weekly-shots[data-v-f3b125a2]:after {\n    content: '';\n    width: 1px;\n    height: 75px;\n    position: absolute;\n    right: 0;\n    top: 10px;\n    border-right: 2px solid #ddd;\n}\n.email-tabs[data-v-f3b125a2] {\n    background-color: #efefef;\n    border-bottom: 0;\n}\ntextarea[data-v-f3b125a2] {\n    resize: vertical;\n}\nul.mail-list[data-v-f3b125a2] {\n    padding: 0;\n}\n.table.mail-list[data-v-f3b125a2] {\n    margin: 0;\n    table-layout: fixed;\n    width: 100%;\n}\n.mail-list tbody tr[data-v-f3b125a2] {\n    height: 45px\n}\n.mail-list tbody tr[data-v-f3b125a2]:hover {\n    background-color: #EEE;\n}\n.mail-list td[data-v-f3b125a2]:nth-child(1),\n.mail-list td[data-v-f3b125a2]:nth-child(2) {\n    width: 10%;\n}\n.mail-list td[data-v-f3b125a2]:nth-child(4) {\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.mail-list .custom-checkbox[data-v-f3b125a2]{\n    margin-bottom: 0;\n    margin-top: 7px;\n}\n\n\n/*contact widget*/\n.contact-cover[data-v-f3b125a2] {\n    height: 175px;\n    width: 100%;\n    background-image: url(" + escape(__webpack_require__(846)) + ");\n    background-size: cover;\n    color: #FFF;\n}\n.contact-widget i[data-v-f3b125a2] {\n    cursor: pointer;\n}\n.contact-cover .profile-img[data-v-f3b125a2] {\n    width: 60%;\n    height: 100%;\n    padding-top: 37px;\n    padding-left: 6%;\n}\n.contact-cover .profile-img .follow[data-v-f3b125a2] {\n    position: absolute;\n    top: 110px;\n    left: 35%;\n    font-size: 16px;\n}\n.contact-cover .profile-img img[data-v-f3b125a2] {\n    width: 90px;\n    border-radius: 50px;\n    border: 3px solid white;\n}\n.contact-cover .group-icon[data-v-f3b125a2] {\n    width: 20%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.19);\n    font-size: 24px;\n    line-height: 180px;\n}\n.contact-cover .search-icon[data-v-f3b125a2] {\n    width: 20%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.31);\n    font-size: 24px;\n    line-height: 180px;\n}\n.contact-widget .contact-details[data-v-f3b125a2] {\n    font-size: 18px;\n}\n.contact-widget .contact-details h4[data-v-f3b125a2] {\n    font-size: 16px;\n    color: #777;\n}\n\n\n/*weather widget*/\n.weather-widget .card-header[data-v-f3b125a2] {\n    background-color: #3AAB88;\n    color: #FFF;\n}\n.weather-widget .location i[data-v-f3b125a2] {\n    font-size: 60px;\n}\n.weather-widget .location span[data-v-f3b125a2] {\n    font-size: 16px;\n}\n.weather-widget .temperature[data-v-f3b125a2] {\n    font-size: 54px;\n}\n.weather-widget .details[data-v-f3b125a2] {\n    color: #666;\n    font-size: 14px;\n}\n.weather-widget .details[data-v-f3b125a2]:not(:last-child) {\n    border-right: 1px solid #CCC;\n}\n\n\n/*profile 2*/\n.profile-2[data-v-f3b125a2] {\n    background-color: #7D5BAA;\n    border-color: #ccc;\n}\n.profile-2 .head[data-v-f3b125a2] {\n    padding-top: 14px;\n    padding-bottom: 5px;\n    font-size: 18px;\n    background-color: #FFF;\n}\n.profile-2 .data[data-v-f3b125a2] {\n    font-size: 15px;\n    padding-top: 7px;\n    padding-bottom: 6px;\n    color: #FFF;\n}\n.border-right[data-v-f3b125a2]:after {\n    content: '';\n    width: 1px;\n    height: 64px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-right: 1px solid #FFF;\n}\n.profile-2 .border-bottom[data-v-f3b125a2]:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    border-bottom: 1px solid #FFF;\n}\n.card-body .form-control[data-v-f3b125a2]{\n    -webkit-transition: initial;\n    transition: initial;\n}", ""]);

// exports


/***/ }),

/***/ 1531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue__);
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





// ====

var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "widgets",
    components: {
        IEcharts: __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__["default"],
        portfolio: __WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue___default.a
    },
    data: function data() {
        return {
            loading: false,
            instances: [],
            line: {
                title: {
                    text: 'Weekly Stats',
                    textStyle: {
                        color: '#FFF',
                        fontStyle: 'normal',
                        fontWeight: 'bolder',
                        fontSize: 18
                    },
                    subtextStyle: {
                        color: '#FFF'
                    },
                    padding: 15
                },
                legend: {
                    show: true
                },
                tooltip: {},
                color: '#FFFFFF',
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: false,
                        interval: 'auto',
                        inside: false,
                        length: 5,
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                series: [{
                    name: 'shots',
                    type: 'line',
                    symbolSize: 7,
                    data: [10, 20, 15, 10, 36, 20, 45]
                }]
            }
        };
    },

    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        }
    },
    mounted: function mounted() {
        var _this = this;

        unsub = this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "left_menu") {
                _this.instances.forEach(function (item, index) {
                    setTimeout(function () {
                        item.resize();
                    });
                });
            }
        });
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        unsub();
        next();
    }
});

/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix  visible-xs-block" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-4 col-lg-6 col-md-6" },
          [_c("portfolio")],
          1
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "clearfix visible-sm-block visible-md-block"
        }),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-4 col-lg-6 col-md-6" },
          [
            _c(
              "b-card",
              { attrs: { "no-block": "" } },
              [
                _c(
                  "b-tabs",
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "Details", active: "" } },
                      [
                        _c("b-card", [
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(1533) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "d-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Hot in Market")]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Lorem Ipsum has been the industry's standard dummy text ever."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(1534) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "d-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Key Gadgets")]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "a search for 'lorem ipsum' will sites still in their infancy."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(1535) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "d-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Trending Design")]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "All the Lorem Ipsum generators on the Internet tend to repeat ."
                                )
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Comments" } },
                      [
                        _c("b-card", [
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__(780)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _vm._v(
                                    "Discovered the undoubtable source comes from\n                                            sections."
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(" Yesterday")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left  desc-img" }, [
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__(774)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _vm._v(
                                    "Combined with a handful of model sentence\n                                            structures"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(" 15 mins ago")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left  desc-img" }, [
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__(771)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _vm._v(
                                    "Classical Latin literature from making it over. "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(" Just now")
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Activity" } },
                      [
                        _c("b-card", [
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(
                                    "Discovered the undoubtable from sections."
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" 5 Days ago")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { "aria-hiden": "true" }
                                  }),
                                  _vm._v(
                                    "Combined with a sentence structures."
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" 2 Days ago")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { en: "true" }
                                  }),
                                  _vm._v(
                                    "\n                                            Classical from making it over.\n                                        "
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" 2 Hours ago")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { "aria-hiden": "true" }
                                  }),
                                  _vm._v(
                                    "I am the last updated activity list here."
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" Just now")
                                  ])
                                ]
                              )
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
          _c("div", { staticClass: "card weekly-stats" }, [
            _c("div", { staticClass: "stats-chart text-center" }, [
              _c(
                "div",
                { staticClass: "echarts" },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.line, loading: _vm.loading },
                    on: { ready: _vm.onReady }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-4 col-lg-6 col-md-6" },
          [
            _c(
              "b-card",
              { attrs: { "no-block": "" } },
              [
                _c(
                  "b-tabs",
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "Compose", active: "" } },
                      [
                        _c("b-card", [
                          _c("form", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "email",
                                    type: "text",
                                    id: "input_Email",
                                    placeholder: "Email"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "subject",
                                    type: "text",
                                    id: "subject",
                                    placeholder: "Subject"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", [
                                _c("textarea", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "address",
                                    id: "message",
                                    rows: "4",
                                    placeholder: "Enter address"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group form-actions" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-danger text-white btn-md float-right control-form",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Send")]
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Inbox" } },
                      [
                        _c("b-card", [
                          _c("ul", { staticClass: "mail-list" }, [
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa  fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Trash" } },
                      [
                        _c("b-card", [
                          _c("ul", { staticClass: "mail-list" }, [
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "card user-profile" }, [
        _c("div", { staticClass: "card-block" }, [
          _c("span", { staticClass: "float-left profile-img" }, [
            _c("img", {
              staticClass: "img-fluid ml-3 mt-3 mb-3",
              attrs: {
                src: __webpack_require__(777),
                alt: "profile image"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile-details" }, [
            _c("h4", { staticClass: "text-primary" }, [_vm._v("Jerry Roy")]),
            _vm._v(" "),
            _c("p", { staticClass: "ml-3" }, [_vm._v("Project Architect")])
          ])
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "table account-details" }, [
          _c("tbody", [
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-list" })]),
              _vm._v(" "),
              _c("td", [_vm._v("New Tasks")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 4")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-pencil" })]),
              _vm._v(" "),
              _c("td", [_vm._v("Pending Task")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 6")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-envelope-o" })]),
              _vm._v(" "),
              _c("td", [_vm._v("Inbox")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 28")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-bell-o" })]),
              _vm._v(" "),
              _c("td", [_vm._v("Notification")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 5")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "card user-page" }, [
        _c("div", [
          _c("img", {
            staticClass: "cover-image img-fluid",
            attrs: {
              src: __webpack_require__(878),
              alt: "cover-image"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-4" }, [
            _c("img", {
              staticClass: "user-pic",
              attrs: {
                src: __webpack_require__(777),
                alt: "profile image"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-8" }, [
            _c("span", { staticClass: "post-details" }, [
              _c("i", {
                staticClass: "fa fa-map-marker",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v("\n                              Pilatus, "),
              _c("strong", [_vm._v("SWITZERLAND ")]),
              _c("br"),
              _vm._v(" by "),
              _c("strong", [_vm._v("Antonio Hansen")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row text-center m-0" }, [
          _c("div", { staticClass: "col-4 views" }, [
            _c("i", {
              staticClass: "fa fa-eye",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" 1,243\n                        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 views" }, [
            _c("i", {
              staticClass: "fa fa-comment-o",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" 65\n                        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 views" }, [
            _c("i", {
              staticClass: "fa fa-heart-o",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" 680\n                        ")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row m-0 text-center" }, [
      _c("div", { staticClass: "col-6 weekly-shots" }, [
        _c("div", { staticClass: "shots-likes" }, [
          _c("h4", [_vm._v("Shots")]),
          _vm._v(" "),
          _c("p", [_vm._v("360")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "shots-likes" }, [
          _c("h4", [_vm._v("Likes")]),
          _vm._v(" "),
          _c("p", [_vm._v("21,080")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
        _c("div", { staticClass: "card contact-widget" }, [
          _c("div", { staticClass: "contact-cover" }, [
            _c("div", { staticClass: "profile-img float-left" }, [
              _c("img", {
                attrs: { src: __webpack_require__(774), alt: "" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "follow" }, [
                _c("button", { staticClass: "btn btn-info text-white" }, [
                  _vm._v("Follow")
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h5", { staticClass: "name_center" }, [_vm._v("Kerry Jay")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "group-icon float-left text-center" }, [
              _c("i", {
                staticClass: "fa fa-user",
                attrs: { "aria-hidden": "true" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search-icon float-left text-center" }, [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-block contact-details" }, [
            _c("div", { staticClass: "ml-3 mt-2" }, [
              _c("h5", { staticClass: "name_font" }, [
                _vm._v("Home "),
                _c("i", {
                  staticClass: "fa fa-pencil float-right mr-4",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "number_font",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("(680)-159-1300")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ml-3 mt-2" }, [
              _c("h5", { staticClass: "name_font" }, [
                _vm._v("Work "),
                _c("i", {
                  staticClass: "fa fa-pencil float-right mr-4",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "number_font",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("(942)-748-9794")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-3 ml-3 mb-4" }, [
              _c("h5", { staticClass: "name_font" }, [
                _vm._v("Email "),
                _c("i", {
                  staticClass: "fa fa-pencil float-right mr-4",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "number_font",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("example@emailid.com")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card weather-widget" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "location text-center" }, [
                      _c("i", {
                        staticClass: "fa fa-cloud",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _c("span", [_vm._v("Los Angeles")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "temperature text-center" }, [
                      _vm._v("14°c")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-block" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-4 text-center details" }, [
                    _c("h4", { staticClass: "name_font" }, [_vm._v("Precip.")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0.01%")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 text-center details" }, [
                    _c("h4", { staticClass: "name_font" }, [
                      _vm._v("Humidity")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("89%")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 text-center details" }, [
                    _c("h4", { staticClass: "name_font" }, [_vm._v("Wind")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0.1km/h")])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card profile-2 text-center" }, [
              _c("div", { staticClass: "row m-0" }, [
                _c("div", { staticClass: "col-12 p-0" }, [
                  _c("div", { staticClass: "head bg_color" }, [
                    _c("p", [_vm._v("Christine Fox")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data border-right" }, [
                  _c("span", [_c("strong", [_vm._v("1,028")])]),
                  _vm._v(" "),
                  _c("p", { staticClass: "border-bottom" }, [_vm._v("Friends")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data arrow" }, [
                  _c("span", [_c("strong", [_vm._v("6k")])]),
                  _vm._v(" "),
                  _c("p", { staticClass: "border-bottom" }, [
                    _vm._v("Followers")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data border-right" }, [
                  _c("span", [_c("strong", [_vm._v("16")])]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Messages")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data" }, [
                  _c("span", [_c("strong", [_vm._v("27")])]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Notifications")])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
        _c("div", { staticClass: "card tweet-profile" }, [
          _c("div", { staticClass: "card-header text-center" }, [
            _c("h4", [_vm._v("Jerry Roy")]),
            _vm._v(" "),
            _c("p", [_vm._v("jerry.roy9@example.com")])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "profile-img text-center" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: __webpack_require__(777),
                alt: "profile image"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-block" }, [
            _c("div", { staticClass: "tweet-details" }, [
              _c("div", { staticClass: "row text-center" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("p", { staticClass: "count" }, [_vm._v("670")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Tweets")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("p", { staticClass: "count" }, [_vm._v("240")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Following")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("p", { staticClass: "count" }, [_vm._v("6,870")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Followers")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row pl-3 pr-3" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("textarea", {
                  staticClass: "form-control",
                  attrs: { rows: "3", placeholder: "What's in your mind" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row pl-3 pr-3 pb-3" }, [
              _c("div", { staticClass: "col-3" }, [
                _c("div", { staticClass: "events text-center" }, [
                  _c("i", {
                    staticClass: "fa fa-map-marker",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c("div", { staticClass: "events text-center" }, [
                  _c("i", {
                    staticClass: "fa fa-camera",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-info btn-block btn-tweet text-white m-t-10",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [_vm._v("Tweet")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3b125a2", module.exports)
  }
}

/***/ }),

/***/ 1533:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/item1.jpg?a070b3eac2f293237851573900872285";

/***/ }),

/***/ 1534:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/item2.jpg?d8a38c6621c8b7003e3f90b5e7dab24e";

/***/ }),

/***/ 1535:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/item3.jpg?2af48f89052facfbca22df11efaa95f9";

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1529)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1531)
/* template */
var __vue_template__ = __webpack_require__(1532)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f3b125a2"
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
Component.options.__file = "resources/assets/components/pages/widgets.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3b125a2", Component.options)
  } else {
    hotAPI.reload("data-v-f3b125a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/avatar3.jpg?3291ff41f25c98ba4aff1a1f74e42d1f";

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/avatar2.jpg?a1fb77af62c07cfcb18883dda43816c3";

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/avatar4.jpg?2bb4ec334d9b5a47d6369df5a4b7cd11";

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/avatar1.jpg?2b0314ed7a43445517ca523400549d2d";

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/avatar.jpg?cd23a4a129679a15e2583c823c594af2";

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/profile-coverbg.jpeg?f9d529b73b0abf32afba166473c78231";

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "/cheerspos/public/images/timeline.jpeg?e0be5e2ba70609c6a4127e4753f5e9fa";

/***/ })

});