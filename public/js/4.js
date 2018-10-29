webpackJsonp([4],{

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1077);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("5d713039", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cb898a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cb898a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-4cb898a4]:before,\n.wrapper[data-v-4cb898a4]:after {\n  display: table;\n  content: \" \";\n}\n.wrapper[data-v-4cb898a4]:after {\n  clear: both;\n}\n.wrapper[data-v-4cb898a4] {\n  display: table;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n}\n.right-aside[data-v-4cb898a4],\n.left-aside[data-v-4cb898a4] {\n  padding: 0;\n  display: table-cell;\n  vertical-align: top;\n}\n.right-aside[data-v-4cb898a4] {\n  background-color: #ebf2f6 !important;\n}\n@media (max-width: 992px) {\n.wrapper > .right-aside[data-v-4cb898a4] {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side__ = __webpack_require__(1088);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_layouts_css_fixed_menu_scss__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_layouts_css_fixed_menu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_layouts_css_fixed_menu_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_animejs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * These are the files that enable you to change layouts and other options
 */

/**
 * import preloader
 * choose from preloader and bounce
 */


/**
 * The right side content
 */


/**
 * import left-side from default or horizontal-menu or mini-menu
 * eg: import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
 */


/**
 * import from header or fixed-header or no-header
 */


/**
 * Styles
 */

/**
 * Main stylesheet for the layout
 */


/**
 * Style required for a boxed layout
 */
// import 'components/layouts/css/boxed.scss'

/**
 * Style required for a fixed-menu layout
 */


/**
 * Style required for a compact-menu layout
 */
//     import 'components/layouts/css/compact-menu.scss'

/**
 * Style required for a centered-logo layout
 */
// import 'components/layouts/css/centered-logo.scss'

/**
 * Style required for a content-menu layout
 */
// import 'components/layouts/css/content_menu.scss'


/**
 * import animejs for the menu transition effects
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout',
  components: {
    preloader: __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader___default.a,
    vueadmin_header: __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header___default.a,
    left_side: __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side___default.a,
    right_side: __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side___default.a
  },
  data: function data() {
    return {
      showtopbtn: false
    };
  },
  mounted: function mounted() {
    if (window.innerWidth <= 992) {
      this.$store.commit('left_menu', 'close');
    }
  }
});

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1080)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1082)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-91a80ebc"
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
Component.options.__file = "resources/assets/components/layouts/preloader/preloader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-91a80ebc", Component.options)
  } else {
    hotAPI.reload("data-v-91a80ebc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1081);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("3c95c60e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-91a80ebc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preloader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-91a80ebc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preloader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.cssload-aim[data-v-91a80ebc] {\n  position: fixed;\n  z-index: 1500;\n  left: calc(100% - 42px);\n  top: 60px;\n  border-radius: 20px;\n  background-color: transparent;\n  border-width: 15px;\n  border-style: double;\n  border-color: transparent #428bca;\n  -webkit-animation: cssload-anim-data-v-91a80ebc 0.7s linear infinite;\n          animation: cssload-anim-data-v-91a80ebc 0.7s linear infinite;\n}\n@media screen and (max-width: 560px) {\n.cssload-aim[data-v-91a80ebc] {\n      top: 106px;\n}\n}\n@-webkit-keyframes cssload-anim-data-v-91a80ebc {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes cssload-anim-data-v-91a80ebc {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cssload-aim" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-91a80ebc", module.exports)
  }
}

/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1084)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1086)
/* template */
var __vue_template__ = __webpack_require__(1087)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24e353f3"
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
Component.options.__file = "resources/assets/components/layouts/right-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24e353f3", Component.options)
  } else {
    hotAPI.reload("data-v-24e353f3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1085);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("71b6b6e0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24e353f3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./right-side.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24e353f3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./right-side.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.right-aside[data-v-24e353f3] {\n  padding: 0 20px 10px 20px;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100vh;\n}\n.right-aside .content-header > h1[data-v-24e353f3] {\n    margin: 2px;\n    padding-left: 13px;\n    padding-top: 12px;\n    font-size: 20px;\n    line-height: 1.5;\n}\n.right-aside .content-header[data-v-24e353f3] {\n    margin: -2px -20px 25px -20px;\n    height: 55px;\n    background: #f9fafb;\n    -webkit-box-shadow: 3px 1px 5px #ccc;\n            box-shadow: 3px 1px 5px #ccc;\n}\n", ""]);

// exports


/***/ }),

/***/ 1086:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "right-side",
    methods: {},
    mounted: function mounted() {}
});

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", {}, [
    _c("section", { staticClass: "content-header " }),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24e353f3", module.exports)
  }
}

/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1089)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1091)
/* template */
var __vue_template__ = __webpack_require__(1111)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-104a573c"
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
Component.options.__file = "resources/assets/components/layouts/left-side/default/left-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-104a573c", Component.options)
  } else {
    hotAPI.reload("data-v-104a573c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1090);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("05ac365b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-104a573c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./left-side.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-104a573c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./left-side.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.left-aside[data-v-104a573c] {\n  width: 250px;\n  background: #fff;\n  background-repeat: repeat-y;\n}\n.navigation[data-v-104a573c] {\n  padding: 0;\n}\n.divider[data-v-104a573c] {\n  margin-top: 10px;\n  list-style-type: none;\n  border-bottom: 1px solid #ececec;\n  padding-bottom: 6px;\n}\n.divider span[data-v-104a573c] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin: 20px 20px -15px 20px;\n}\n.sidebar[data-v-104a573c] {\n  display: block;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.content[data-v-104a573c] {\n  display: block;\n  width: auto;\n  overflow-x: hidden;\n  padding: 0 15px;\n}\n.badge-success[data-v-104a573c] {\n  background-color: #22d69d;\n}\n.badge[data-v-104a573c] {\n  padding: 0.60em 0.7em;\n  border-radius: 0.75rem;\n}\n.nav_profile[data-v-104a573c] {\n  border-bottom: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_js__ = __webpack_require__(1110);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "left-side",
    components: {
        vmenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenu"],
        vsubMenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vsubMenu"],
        vmenuItem: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenuItem"],
        profile: __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue___default.a
    },
    data: function data() {
        return {
            menuitems: __WEBPACK_IMPORTED_MODULE_2__menu_js__["a" /* default */]
        };
    }
});

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

exports.vmenu = __webpack_require__(1093);
exports.vsubMenu = __webpack_require__(1096);
exports.vmenuItem = __webpack_require__(1101);

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1094)
/* template */
var __vue_template__ = __webpack_require__(1095)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/components/layouts/left-side/default/menu/vueMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69d81360", Component.options)
  } else {
    hotAPI.reload("data-v-69d81360", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        $collapseItems: function $collapseItems() {
            return this.$children.filter(function (child) {
                return child._isCollapseItem;
            });
        }
    },
    methods: {
        openByIndex: function openByIndex(index) {
            this.$collapseItems.forEach(function (item, i) {
                if (i !== index) {
                    item.isActived = false;
                }
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on("closeall", function (index) {
            _this.openByIndex(index);
        });
    }
});

/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vuemenu navigation" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69d81360", module.exports)
  }
}

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1097)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1099)
/* template */
var __vue_template__ = __webpack_require__(1100)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2346a3cc"
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
Component.options.__file = "resources/assets/components/layouts/left-side/default/menu/subMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2346a3cc", Component.options)
  } else {
    hotAPI.reload("data-v-2346a3cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1098);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("0816f196", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2346a3cc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2346a3cc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.collapse-item .submenu-header[data-v-2346a3cc] {\n  cursor: pointer;\n  color: #3e6174;\n  padding: 11px 10px 11px 30px;\n}\n.collapse-item .submenu-header[data-v-2346a3cc]:hover {\n    color: #5e7b85;\n}\n.collapse-item .submenu-header .submenu-header-title[data-v-2346a3cc] {\n    vertical-align: text-bottom;\n}\n.collapse-item .submenu-header .active .submenu-header-title[data-v-2346a3cc] {\n    font-weight: 600;\n}\n.collapse-item .submenu-content[data-v-2346a3cc] {\n  background-color: #F8F7F6;\n  overflow-y: hidden;\n  position: relative;\n}\n.collapse-item .submenu-content-box[data-v-2346a3cc]:active {\n  color: #000;\n}\n.collapse-item .submenu_icon[data-v-2346a3cc] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: 16px;\n  margin-top: -2px;\n  color: #3e6174;\n}\n.collapse-item.active > .submenu-header[data-v-2346a3cc] {\n  background-color: #e6e6e6;\n  color: #3e6174;\n  font-weight: 500;\n}\n.collapse-item.active > .submenu-header > .submenu_icon[data-v-2346a3cc] {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.collapse-item.active > .submenu-header i[data-v-2346a3cc] {\n    color: #3e6174 !important;\n}\n.leftmenu_icon[data-v-2346a3cc] {\n  margin-right: 6px;\n  line-height: 20px;\n  height: 22px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #3e6174;\n}\n.leftmenu_icon:hover .submenu-header-title[data-v-2346a3cc], .leftmenu_icon:hover .submenu_icon[data-v-2346a3cc] {\n  padding-left: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
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
    props: {
        selected: Boolean,
        icon: String,
        title: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            isActived: this.selected
        };
    },

    computed: {
        index: function index() {
            return this.$parent.$collapseItems.indexOf(this);
        }
    },
    created: function created() {
        this._isCollapseItem = true;
    },
    mounted: function mounted() {
        var _this = this;

        function activate(self) {
            if (self.$refs.box) {
                self.isActived = self.$refs.box.querySelectorAll("a.active").length >= 1 ? true : false;
            }
        }
        //change when route changes
        this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "routeChange" && mutation.payload == "end") {
                setTimeout(function () {
                    activate(_this);
                }, 0);
            }
        });
        activate(this);
    },

    methods: {
        toggle: function toggle() {
            this.$parent.$emit('closeall', this.index);
            this.isActived = !this.isActived;
        },
        cancel: function cancel() {
            this.anime.pause();
        },
        before: function before(targets) {
            targets.removeAttribute('style');
        },
        enter: function enter(targets, done) {
            var height = targets.scrollHeight;
            targets.style.height = 0;
            targets.style.opacity = 0;
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [0, 1],
                height: height,
                complete: function complete() {
                    targets.removeAttribute('style');
                    done();
                }
            });
        },
        leave: function leave(targets, complete) {
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [1, 0],
                height: 0
            });
        }
    }
});

/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "submenu collapse-item", class: { active: _vm.isActived } },
    [
      _c(
        "div",
        {
          staticClass: "submenu-header touchable",
          attrs: {
            role: "tab",
            "aria-expanded": _vm.selected ? "true" : "fase"
          },
          on: { click: _vm.toggle }
        },
        [
          _c("i", { staticClass: "leftmenu_icon\n", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "submenu-header-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: { name: "collapsed-fade", css: false },
          on: {
            "before-appear": _vm.before,
            appear: _vm.enter,
            "appear-cancel": _vm.cancel,
            "before-enter": _vm.before,
            enter: _vm.enter,
            "enter-cancel": _vm.cancel,
            leave: _vm.leave,
            "leave-cancel": _vm.cancel
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isActived,
                  expression: "isActived"
                }
              ],
              staticClass: "submenu-content"
            },
            [
              _c(
                "div",
                { ref: "box", staticClass: "submenu-content-box" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "submenu_icon float-right" }, [
      _c("i", { staticClass: "fa fa-angle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2346a3cc", module.exports)
  }
}

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1102)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1104)
/* template */
var __vue_template__ = __webpack_require__(1105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5cfff032"
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
Component.options.__file = "resources/assets/components/layouts/left-side/default/menu/MenuItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cfff032", Component.options)
  } else {
    hotAPI.reload("data-v-5cfff032", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("0d3133c2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5cfff032\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuItem.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5cfff032\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\na[data-v-5cfff032] {\n  color: #3e6174;\n  position: relative;\n  display: block;\n  line-height: 21px;\n  padding: 10px 30px;\n}\na[data-v-5cfff032]:hover {\n    color: #5e7b85;\n}\na.active[data-v-5cfff032] {\n    color: #3e6174;\n    background-color: #e6e6e6;\n}\na.active i[data-v-5cfff032] {\n      color: #3e6174 !important;\n}\n\n/*.submenu-content-box .listbrdr::after{\r\n      content: \"\";\r\n     display: block;\r\n     position: absolute;\r\n     width: 11px;\r\n     left: 25px;\r\n     margin-top: -21px;\r\n     border-top: 2px solid #888585;\r\n     }*/\n.submenu-content-box .listbrdr[data-v-5cfff032]:active {\n  color: #000;\n}\n.submenu-content a[data-v-5cfff032] {\n  padding: 11px 20px 10px 45px;\n  position: relative;\n}\n.submenu-content .leftmenu_icon[data-v-5cfff032] {\n  font-size: 14px;\n  color: inherit;\n}\n.name[data-v-5cfff032] {\n  vertical-align: text-bottom;\n}\n.collapse-item .card-content .card-content-box div a[data-v-5cfff032] {\n  padding-left: 43px;\n}\n.leftmenu_icon[data-v-5cfff032] {\n  margin-right: 1px;\n  line-height: 22px;\n  height: 23px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #3e6174;\n}\n", ""]);

// exports


/***/ }),

/***/ 1104:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["link", "icon"]
});

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "listbrdr" },
    [
      _c(
        "router-link",
        { staticClass: "menu-item", attrs: { to: _vm.link, exact: "" } },
        [
          _c("i", { staticClass: "leftmenu_icon", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "name" }, [_vm._t("default")], 2)
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5cfff032", module.exports)
  }
}

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1107)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1109)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-260542ae"
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
Component.options.__file = "resources/assets/components/layouts/left-side/left-profile/user_profile2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-260542ae", Component.options)
  } else {
    hotAPI.reload("data-v-260542ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("f0e968f0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-260542ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile2.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-260542ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "/*user section*/\n.user_section[data-v-260542ae] {\n  height: 188px;\n  padding: 15px 20px;\n}\n.user_section .img-wrapper[data-v-260542ae] {\n    width: 100px;\n    border-radius: 50%;\n    padding: 7px;\n    margin: auto;\n}\n.user_section img[data-v-260542ae] {\n    width: 84px;\n    border: 2px solid #ccc;\n}\n.user_section p[data-v-260542ae] {\n    font-size: 15px;\n}\n.user_section .leftuser_icons .logout_padd[data-v-260542ae] {\n    padding: 1px !important;\n}\n.user_name_max[data-v-260542ae] {\n  text-transform: uppercase;\n  font-weight: 700;\n  max-width: 210px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n  padding-top: 2px;\n  padding-bottom: 5px;\n}\n.leftuser_icons div[data-v-260542ae] {\n  cursor: pointer;\n  padding: 1px 12px;\n  font-size: 18px;\n  background-color: transparent;\n  margin-right: 3px;\n  border-radius: 50px;\n  margin: auto;\n  width: 100%;\n  display: inline;\n}\n.user_name_max[data-v-260542ae],\n.leftuser_icons i[data-v-260542ae] {\n  color: #3e6174;\n}\n", ""]);

// exports


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "user_section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "img-wrapper" }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: {
                src: this.$store.state.user.picture,
                alt: "user not found"
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 mb-1 user_name_max text-center" }, [
            _vm._v(_vm._s(this.$store.state.user.name))
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "leftuser_icons col-12 compact_data" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "a",
            { attrs: { href: "#/user_profile", title: "User Profile" } },
            [_c("i", { staticClass: "fa fa-user-o" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("a", { attrs: { href: "#/lockscreen", title: "Lock screen" } }, [
            _c("i", {
              staticClass: "fa fa-lock",
              attrs: { "aria-hidden": "true" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("a", { attrs: { href: "#/edit_user", title: "E-mail" } }, [
            _c("i", { staticClass: "fa fa-cog" })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 logout_padd" }, [
          _c("a", { attrs: { href: "#/login", title: "Logout" } }, [
            _c("i", { staticClass: "fa fa-sign-out" })
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
    require("vue-hot-reload-api")      .rerender("data-v-260542ae", module.exports)
  }
}

/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var menu_items = [{
    name: 'Dashboard',
    link: '/',
    icon: ' fa fa-home'
},

// 19-Oct-2018
{
    name: 'Account',
    link: '/accounts',
    icon: ' fa fa-home'
}, {
    name: 'Account',
    link: '/add_accounts',
    icon: ' fa fa-home'
}, {
    name: 'Distributors',
    icon: 'fa fa-users',
    child: [{
        name: 'View',
        link: '/distributors',
        icon: 'fa fa-eye'
    }, {
        name: 'Add',
        link: '/add',
        icon: 'fa fa-plus'
    }, {
        name: 'Upload',
        link: '/upload',
        icon: 'fa fa-upload'
    }, {
        name: 'Items ',
        link: '/items',
        icon: 'fa fa-angle-double-right'
    }]
}, {
    name: 'Library',
    icon: 'fa fa-files-o',
    child: [{
        name: 'Item Library',
        link: '/item_library',
        icon: 'fa fa-eye'
    }, {
        name: 'Import',
        link: '/add',
        icon: 'fa fa-upload'
    }, {
        name: 'Export',
        link: '/upload',
        icon: 'fa fa-angle-double-right'
    }]
}, {
    name: 'Support',
    icon: 'fa fa-life-ring',
    child: [{
        name: 'Feedback',
        link: '/feedback',
        icon: 'fa fa-eye'
    }, {
        name: 'Videos',
        link: '/videos',
        icon: 'fa fa-plus'
    }, {
        name: 'Facebook',
        link: '/facebook',
        icon: 'fa fa-angle-double-right'
    }]
}, {
    name: 'Reports',
    link: '/reports',
    icon: ' fa fa-home'
}, {
    name: 'Ads',
    link: '/ads',
    icon: ' fa fa-home'
}, {
    name: 'Settings',
    icon: 'fa fa-cog',
    child: [{
        name: 'Plans',
        link: '/plans',
        icon: 'fa fa-eye'
    }, {
        name: 'Gateways',
        link: '/gateways',
        icon: 'fa fa-plus'
    }]
}, {
    name: 'Modals',
    link: '/modals',
    icon: 'fa fa-angle-double-right'
}];
/* harmony default export */ __webpack_exports__["a"] = (menu_items);

/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "left-aside sidebar-offcanvas" }, [
    _c("section", { staticClass: "sidebar" }, [
      _c(
        "div",
        { attrs: { id: "menu", role: "navigation" } },
        [
          _c("div", { staticClass: "nav_profile" }, [_c("profile")], 1),
          _vm._v(" "),
          _c(
            "vmenu",
            [
              _vm._l(_vm.menuitems, function(item) {
                return [
                  item.title
                    ? _c("li", { staticClass: "divider mt-3 " }, [
                        _c("span", [_vm._v(_vm._s(item.name))])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.child
                    ? _c(
                        "vsub-menu",
                        { attrs: { title: item.name, icon: item.icon } },
                        _vm._l(item.child, function(child) {
                          return _c(
                            "vmenu-item",
                            {
                              key: child.name,
                              attrs: { link: child.link, icon: child.icon }
                            },
                            [_vm._v(_vm._s(child.name))]
                          )
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.link
                    ? _c(
                        "vmenu-item",
                        { attrs: { link: item.link, icon: item.icon } },
                        [_vm._v(_vm._s(item.name) + "\n                    ")]
                      )
                    : _vm._e()
                ]
              })
            ],
            2
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
    require("vue-hot-reload-api")      .rerender("data-v-104a573c", module.exports)
  }
}

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1113)
  __webpack_require__(1115)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1117)
/* template */
var __vue_template__ = __webpack_require__(1119)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-89b0ff66"
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
Component.options.__file = "resources/assets/components/layouts/header/fixed-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89b0ff66", Component.options)
  } else {
    hotAPI.reload("data-v-89b0ff66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("69b45dcb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-89b0ff66\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-89b0ff66\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-89b0ff66] {\n  z-index: 1030;\n}\n.header nav[data-v-89b0ff66] {\n    margin-bottom: 0;\n    height: 50px;\n    background: #fff;\n    background-size: 100% 100%;\n    -webkit-box-shadow: 0px 0px 10px #CCC;\n            box-shadow: 0px 0px 10px #CCC;\n}\n.header .nav_bg_c[data-v-89b0ff66] {\n    background: #000;\n    color: #FFF;\n}\n.header .bttn_bg[data-v-89b0ff66] {\n    background: #000;\n}\n.header .name_mrgn[data-v-89b0ff66] {\n    margin-top: 8px;\n    color: #FFF;\n}\n.header .inner_bttn_a[data-v-89b0ff66] {\n    color: #FFF;\n}\n.header .navbar-right[data-v-89b0ff66] {\n    float: right;\n    margin-right: 15px;\n}\n.header .logo[data-v-89b0ff66] {\n    display: block;\n    float: left;\n    height: 50px;\n    line-height: 41px;\n    padding: 3px 10px;\n    text-align: center;\n    width: 250px;\n    background: #fff;\n}\n.header .logo img[data-v-89b0ff66] {\n      width: 125px;\n}\n.header .navbar-right .dropdown-item[data-v-89b0ff66] {\n    padding: 0;\n    width: 100%;\n    outline: none;\n}\n.header .navbar-right div.dropdown > a[data-v-89b0ff66] {\n    color: #000;\n}\n.header .navbar-right div.dropdown .dropdown-menu > button[data-v-89b0ff66] {\n    padding: 10px 15px;\n}\n.header .navbar-right div.dropdown.notifications-menu[data-v-89b0ff66] {\n    height: 50px;\n}\n.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-89b0ff66] {\n      font-size: 18px;\n}\n.header .navbar-right div.dropdown > a > i[data-v-89b0ff66] {\n    font-size: 23px;\n}\n.header .navbar-right div.dropdown > a[data-v-89b0ff66] {\n    display: block;\n    padding: 12px;\n}\n.header .navbar-right div.dropdown:hover > a[data-v-89b0ff66] {\n    background-color: #EDEDED;\n    color: #000;\n}\n.header .navbar-right div.dropdown > a.padding-user[data-v-89b0ff66] {\n    padding-top: 8px;\n    padding-bottom: 6px;\n}\n.header nav .sidebar-toggle[data-v-89b0ff66] {\n    float: left;\n    color: #000;\n    font-size: 19px;\n    padding-top: 10px;\n}\n.user_name_max[data-v-89b0ff66] {\n  display: inline-block;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n}\n.noti_msg[data-v-89b0ff66] {\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #4F90C1;\n  border-radius: 50px;\n  margin-top: 10px;\n}\n.user.user-menu > button img[data-v-89b0ff66] {\n  width: 35px;\n  height: 35px;\n}\n\n/**** END HEADER RIGHT SIDE DROPDOWNS ****/\n@media screen and (max-width: 767px) {\n.dropdown.open .dropdown-menu[data-v-89b0ff66] {\n    position: absolute;\n}\n.navbar-right > li > a[data-v-89b0ff66] {\n    padding: 10px 12px;\n}\n}\n\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media (max-width: 560px) {\nbody .header .logo[data-v-89b0ff66],\n  body .header nav[data-v-89b0ff66] {\n    width: 100%;\n}\nbody .header nav .sidebar-toggle[data-v-89b0ff66] {\n    padding-left: 15px;\n}\nnav[data-v-89b0ff66] {\n    height: 100px !important;\n}\n}\n.notifications_badge_top[data-v-89b0ff66] {\n  margin-top: -28px;\n  margin-left: 10px;\n  position: absolute;\n}\n.notifications_badge_top span[data-v-89b0ff66] {\n    top: 1px;\n    left: 2px;\n    border-radius: 50%;\n    font-size: 9px;\n    padding: 0.23em 0.45em;\n}\n.notifications-menu .dropdown-item[data-v-89b0ff66] {\n  width: 100%;\n  display: block;\n}\n.dropdown-footer[data-v-89b0ff66] {\n  padding: 10px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(71)("3b2393cb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-89b0ff66\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-89b0ff66\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.wrapper {\n  margin-top: 50px;\n}\n@media screen and (max-width: 560px) {\n.wrapper {\n      margin-top: 100px;\n}\n}\n.sidebar-toggle {\n  margin-left: 10px;\n}\n.bell_bg button.btn-secondary {\n  background-color: #fff;\n  border: none;\n  border-radius: 0;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.bell_bg button.btn-secondary:hover {\n    background-color: #EDEDED !important;\n}\n.bell_bg button.btn-secondary:active {\n    color: #000 !important;\n}\n.bell_bg.show button {\n  background-color: #edede !important;\n}\n.bell_bg.user_btn .dropdown-toggle {\n  padding: 7px 9px;\n  background-color: #000;\n}\n.tabs_cont,\n.event_date {\n  background-color: #FFF !important;\n}\nbody.left-hidden aside.right-aside {\n  margin-left: 0;\n}\nbody.left-hidden .header.fixed-top {\n  padding-right: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_screenfull__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "vueadmin_header",

    methods: {
        toggle_menu: function toggle_menu() {
            this.$store.commit('left_menu', "toggle");
        },
        fullscreen: function fullscreen() {
            if (__WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.enabled) {
                __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.toggle();
            }
        },
        logout: function logout() {
            var _this = this;

            var timeout = 1500;
            setTimeout(function () {
                // Logout
                _this.$auth.destroyToken();
                // Redirect to Login
                _this.$router.replace('/login');
            }, timeout);
        }
    }
});

/***/ }),

/***/ 1118:
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header fixed-top" }, [
    _c(
      "nav",
      [
        _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
          _c("img", { attrs: { src: __webpack_require__(964), alt: "logo" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-left" }, [
          _c(
            "a",
            {
              staticClass: "sidebar-toggle",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.toggle_menu }
            },
            [_c("i", { staticClass: "fa fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar float-left" }, [
          _c(
            "div",
            [
              _c(
                "div",
                { staticClass: "dropdown hidden-xs-down btn-group" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "user_name_max drpodowtext",
                      attrs: { to: "/admin/accounts", exact: "" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-user-o" }),
                      _vm._v(" Accounts\n                    ")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "text" }, slot: "text" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "user_name_max drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Distributors\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/distributors", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Accounts\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: {
                            to: "/admin/distributor_import_pricefile",
                            exact: ""
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Import Pricefile\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/distributor_item", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Items\n                        ")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "text" }, slot: "text" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "user_name_max drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Library\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/item_library", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Item Library\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/import_wizard", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cog" }),
                          _vm._v(" Import Wizard\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/export_item_library", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-lock" }),
                          _vm._v(" Export\n                        ")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "text" }, slot: "text" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "user_name_max drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Support\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Feedback\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cog" }),
                          _vm._v(" Videos\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-lock" }),
                          _vm._v(" Facebook\n                        ")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "text" }, slot: "text" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "user_name_max drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Reports\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/reports_basic", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Basic\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cog" }),
                          _vm._v(" Advance\n                        ")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "dropdown btn-group" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "user_name_max drpodowtext",
                      attrs: { to: "/admin/ads", exact: "" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-user-o" }),
                      _vm._v(" Ads\n                    ")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "dropdown btn-group" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "user_name_max drpodowtext",
                      attrs: { to: "/admin/plugins", exact: "" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-user-o" }),
                      _vm._v(" Add Plugins\n                    ")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c(
                    "span",
                    { attrs: { slot: "text" }, slot: "text" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "user_name_max drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Settings\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Plans\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cog" }),
                          _vm._v(" Gateways\n                        ")
                        ]
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
        _c("div", { staticClass: "navbar-right" }, [
          _c(
            "div",
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c("span", { attrs: { slot: "text" }, slot: "text" }, [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: this.$store.state.user.picture,
                        alt: "User Image"
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "user_name_max" }, [
                      _vm._v(_vm._s(this.$store.state.user.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/admin/user_profile", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Profile\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "", exact: "" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "drpodowtext",
                              on: { click: _vm.logout }
                            },
                            [
                              _c("i", { staticClass: "fa fa-sign-out" }),
                              _vm._v(" Logout")
                            ]
                          )
                        ]
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
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-89b0ff66", module.exports)
  }
}

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1121);
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./custom.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./custom.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "/*\r\nCreated by: Jyostna Designs\r\n\r\n[TABLE OF CONTENTS]\r\n\r\n1.  RESET STYLES\r\n2.  HEADER STYLES\r\n    2.1 HEADER LEFT\r\n    2.2 HEADER RIGHT SIDE DROPDOWNS\r\n3. LEFT SIDEBAR\r\n4. MAIN WRAPPER STYLES\r\n5. LEFT MENU COLLAPSE STYLES\r\n6. CUSTOM STYLES\r\n7. MEDIA QUERIES\r\n\r\n*/\n/*===import bootstrap variables===*/\n/*****  1.RESET STYLES  *****/\nhtml {\n  background: none repeat scroll 0 0 #fff;\n  overflow-x: hidden;\n  transition: all .25s ease-out;\n  font-size: small; }\n\nhtml,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\nbody {\n  background: none repeat scroll 0 0 #fff;\n  overflow-x: hidden;\n  transition: all .25s ease-out;\n  font-size: small;\n  letter-spacing: 0.5px;\n  width: 100%;\n  margin: 0 auto; }\n\nbody,\n#app,\n#app > div,\n#app div.wrapper {\n  min-height: calc(100vh - 102px); }\n\nbody.modal-open, body.modal-open .header {\n  padding-right: 0 !important; }\n\nul {\n  list-style: none; }\n\nlabel {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px; }\n\na:hover,\na {\n  text-decoration: none !important; }\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  vertical-align: middle; }\n\n/**Dropdown menus**/\n.dropdown-menu {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  z-index: 2300;\n  margin-top: 0;\n  border: none;\n  outline: none; }\n\n/*********6. CUSTOM STYLES *********/\n.submenu-content .name {\n  vertical-align: text-top !important; }\n\n/*text-area resize*/\n.resize_vertical {\n  resize: vertical; }\n\nh4.card-header {\n  font-size: 16px; }\n\n.card {\n  margin-bottom: 25px; }\n\n/**************card bg colors*******************/\n.bg-primary-card {\n  border: 1px solid #337ab7; }\n  .bg-primary-card > .card-header {\n    background-color: #337ab7;\n    color: #fff; }\n\n.bg-info-card {\n  border: 1px solid #4fc1e9; }\n  .bg-info-card > .card-header {\n    background-color: #4fc1e9;\n    color: #fff; }\n\n.bg-warning-card {\n  border: 1px solid #fea115; }\n  .bg-warning-card > .card-header {\n    background-color: #fea115;\n    color: #fff; }\n\n.bg-danger-card {\n  border: 1px solid #fd7570; }\n  .bg-danger-card > .card-header {\n    background-color: #fd7570;\n    color: #fff; }\n\n.bg-success-card {\n  border: 1px solid #16af81; }\n  .bg-success-card > .card-header {\n    background-color: #16af81;\n    color: #fff; }\n\n.bg-primary-card:hover,\n.bg-info-card:hover,\n.bg-danger-card:hover,\n.bg-warning-card:hover,\n.bg-success-card:hover,\n.card:hover {\n  box-shadow: 1px 1px 38px -8px #8e8c8e; }\n\n.btn-link,\n.btn {\n  cursor: pointer; }\n\n/*=======hide unwanted content in print======*/\n@media print {\n  header.header,\n  aside.left-aside,\n  section.content-header,\n  #scroll {\n    display: none !important; }\n  .table-responsive {\n    display: inline-table;\n    width: 100%; } }\n\n/*=======hide unwanted content in print======*/\n/*============header styles=======*/\nheader .navbar-right .dropdown-menu {\n  padding: 0; }\n\nheader .navbar-right .dropdownheader .nav.nav-tabs,\nheader .navbar-right .dropdown-footer,\nheader .navbar-right .dropdownheader:hover .nav.nav-tabs,\nheader .navbar-right .dropdown-footer:hover {\n  background: #fff;\n  color: #000;\n  border: 1px solid #ccc; }\n\nheader .navbar-right .show > .btn-secondary.dropdown-toggle {\n  background-color: #EEEEEE;\n  color: #000;\n  border-color: #EEEEEE; }\n\nheader .navbar-right .btn-link:focus,\nheader .navbar-right .btn-link:hover,\nheader .navbar-right .btn-link:active {\n  text-decoration: none; }\n\nheader .navbar-right .btn .btn:active {\n  border: none; }\n\nheader .navbar-right .btn-group > button {\n  vertical-align: top;\n  color: #000; }\n  header .navbar-right .btn-group > button:hover {\n    background-color: #ededed;\n    color: #000; }\n\n@media (max-width: 560px) {\n  .notifications-menu .dropdown-menu.dropdown-menu-right {\n    right: -123px; } }\n\n.notifications-menu .dropdown-menu {\n  width: 300px; }\n\n.dropdownheader .nav-tabs .nav-link {\n  color: #000; }\n\n.dropdown-menu .nav-tabs .nav-link:focus,\n.dropdown-menu .nav-tabs .nav-link:hover {\n  border-color: transparent; }\n\n.dropdown-menu .nav-tabs .nav-link.active,\n.dropdown-menu .nav-tabs .nav-item.show .nav-link {\n  color: #000;\n  background-color: #eee; }\n\n.nav-tabs > li > a {\n  color: #000; }\n\n.drpodowtext {\n  color: #333;\n  transition: 300ms; }\n\n.drpodowtext:hover {\n  margin-left: 12px;\n  transition: 300ms; }\n\n.dropdown_content a {\n  width: 100%;\n  display: block;\n  padding: 10px 15px; }\n\n.dropdown-item img {\n  height: 50px;\n  width: 50px; }\n\n.dropdown-item.active,\n.dropdown-item:active {\n  color: #111;\n  text-decoration: none;\n  background-color: transparent; }\n\n.btn-secondary:focus,\n.btn-secondary.focus {\n  box-shadow: none; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n/*============header styles=======*/\n/*====================form editors Start============*/\n.ql-container .ql-editor {\n  min-height: 20em;\n  padding-bottom: 1em;\n  max-height: 25em; }\n\n.nav-tabs:focus {\n  outline: none; }\n\n/*====================form editors end============*/\n/*=========calendar========*/\n.full-calendar-body .dates .dates-events .events-week .events-day {\n  min-height: 100px !important; }\n\n.full-calendar-header > div.header-center {\n  font-size: 18px; }\n\n/*=========calendar========*/\n/*======chartist=====*/\n.ct-series-a .ct-line,\n.ct-series-a .ct-point {\n  stroke: #8dcee4 !important; }\n\n.ct-series-b .ct-line,\n.ct-series-b .ct-point {\n  stroke: #4fc1e9 !important; }\n\n.ct-series-c .ct-line,\n.ct-series-c .ct-point {\n  stroke: #16AF81 !important; }\n\n.ct-series-d .ct-line,\n.ct-series-d .ct-point {\n  stroke: #8dcee4 !important; }\n\n/*======chartist bars=====*/\n.ct-series-a .ct-bar {\n  /* Colour of your bars */\n  stroke: #97d9ef !important; }\n\n.ct-series-b .ct-bar {\n  /* Colour of your bars */\n  stroke: #4fc1e9 !important; }\n\n.ct-label {\n  font-size: 10px;\n  color: #000; }\n\n/*======pie chart=====*/\n.ct-series-a .ct-slice-pie {\n  fill: #7faff7 !important; }\n\n.ct-series-b .ct-slice-pie {\n  fill: #6f8dd5 !important; }\n\n.ct-series-c .ct-slice-pie {\n  fill: #11bca9 !important; }\n\n.v-chartist-container {\n  height: 300px; }\n\n/*====== donut chart=====*/\n.ct-series-a .ct-slice-donut {\n  stroke: #11bca9 !important; }\n\n.ct-series-a .ct-slice-donut {\n  stroke: #6f8dd5 !important; }\n\n.ct-series-a .ct-slice-donut {\n  stroke: #7faff7 !important; }\n\n.ct-series-c .ct-slice-donut {\n  stroke: #11bca9 !important; }\n\n.ct-series-b .ct-slice-donut {\n  stroke: #6f8dd5 !important; }\n\n/*=======form-elements======*/\n.drp_align .dropdown-menu {\n  left: -100%; }\n\n.form_elemntsdropdown .dropdown-item {\n  padding: 10px 15px; }\n\n/*=======form-elements======*/\n/*========breadcrumbs====*/\n.breadcrumb1 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\BB\"; }\n\n.breadcrumb2 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\203A\" !important; }\n\n.breadcrumb3 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\2013   \"; }\n\n/*========breadcrumbs====*/\n/*==========datepickers=========*/\n.vdp-datepicker input,\n.vdp-datepicker select {\n  padding: .75em .5em;\n  font-size: 100%;\n  border: 1px solid #dcdccc;\n  width: 100%; }\n\n@media (max-width: 768px) {\n  .vdp-datepicker__calendar {\n    width: 100% !important; } }\n\n/*==========datepickers=========*/\n.pull-right {\n  float: right; }\n\n.car-header:first-child {\n  border: none !important; }\n\n.form-control {\n  transition: initial; }\n", ""]);

// exports


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1123);
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
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./fixed-menu.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./fixed-menu.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "aside.left-aside {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  max-height: 100%;\n  height: calc(100% - 50px);\n  overflow-y: auto; }\n  @media screen and (max-width: 560px) {\n    aside.left-aside {\n      top: 100px;\n      height: calc(100% - 100px); } }\n\naside.right-aside {\n  display: block !important;\n  width: auto !important;\n  margin-left: 250px; }\n\nbody.left-hidden aside.right-aside {\n  margin-left: 0; }\n", ""]);

// exports


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("preloader", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.$store.state.preloader,
            expression: "this.$store.state.preloader"
          }
        ]
      }),
      _vm._v(" "),
      _c("vueadmin_header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "wrapper row-offcanvas" },
        [_c("right_side", [_c("router-view")], 1)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cb898a4", module.exports)
  }
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1076)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1078)
/* template */
var __vue_template__ = __webpack_require__(1124)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4cb898a4"
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
Component.options.__file = "resources/assets/layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cb898a4", Component.options)
  } else {
    hotAPI.reload("data-v-4cb898a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "/newpos/public/images/logo.png?290f72edefd125c9c36d962815c219d9";

/***/ })

});