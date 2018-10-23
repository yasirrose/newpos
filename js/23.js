webpackJsonp([23],{

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("7cee056b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-172b6303\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contacts.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-172b6303\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contacts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.search[data-v-172b6303]{\n    border: 1px solid #bdb3b3;\n}\n.contact-profile[data-v-172b6303]{\n    width:50px;\n    height: 50px;\n}\n.box-shadow[data-v-172b6303]{\n    -webkit-box-shadow: 0px 0px 1px 1px #cfcfcf;\n            box-shadow: 0px 0px 1px 1px #cfcfcf;\n}\n.contact-pic[data-v-172b6303]{\n    width: 50px;\n    height: 50px;\n}\n.table td[data-v-172b6303]{\n    padding: 16px;\n    vertical-align: middle;\n}\n.contacts-box .custom-control-inline[data-v-172b6303]{\n    margin-right: 0;\n}\n.custom-control-label[data-v-172b6303]::before{\n    width: 100px;\n    height: 100px;\n}\n.contact-page[data-v-172b6303]{\n    font-size: 14px;\n}\n.options a[data-v-172b6303]:hover,.options2 a[data-v-172b6303]:hover{\n    background-color: #eee;\n}\n.bg-title[data-v-172b6303]{\n    background-color: #f5f5f5;\n}\n.options .active[data-v-172b6303]{\n    background-color: #eee;\n    color: #3e6174 !important;\n}\n.custom-control-inline[data-v-172b6303]{\n    margin-right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1623:
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'blank',
    data: function data() {
        return {
            modalShow: false,
            newname: '',
            newemail: '',
            newnumber: '',
            newlocation: '',
            newrole: '',
            contacts: [{
                name: 'Jon',
                img: __webpack_require__(780),
                email: 'jon@gmail.com',
                contact_num: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Doe',
                img: __webpack_require__(774),
                email: 'doe@gmail.com',
                contact_num: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Addison',
                img: __webpack_require__(771),
                email: 'addison@gmail.com',
                contact_num: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Jon',
                img: __webpack_require__(777),
                email: 'jon@gmail.com',
                contact_num: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Doe',
                img: __webpack_require__(780),
                email: 'jon@gmail.com',
                contact_num: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }, {
                name: 'Jon',
                img: __webpack_require__(791),
                email: 'jon@gmail.com',
                contact_num: '0123456789',
                role: 'Web developer',
                location: 'Hyderabad'
            }],
            editname: '',
            editemail: '',
            editnumber: '',
            editlocation: '',
            editrole: '',
            contactid: '',
            search: '',
            userImage: ''
        };
    },

    components: {},
    mounted: function mounted() {},
    methods: {
        addContact: function addContact() {
            this.contacts.push({
                name: this.newname,
                email: this.newemail,
                contact_num: this.newnumber,
                location: this.newlocation,
                role: this.newrole,
                img: this.userImage
            }), this.newname = '', this.newemail = '', this.newnumber = '', this.newlocation = '', this.newrole = '', this.modalShow = false;
        },
        deletecontact: function deletecontact(index) {
            //                this.$refs.deletemodal.show()
            this.contacts.splice(index, 1);
        },
        editcontact: function editcontact(index) {
            this.editname = this.contacts[index].name;
            this.editemail = this.contacts[index].email;
            this.editnumber = this.contacts[index].contact_num;
            this.editlocation = this.contacts[index].location;
            this.editrole = this.contacts[index].role;
            this.contactid = index;
            this.$refs.editcontact.show();
        },
        updateContact: function updateContact(contactid) {
            this.contacts[contactid].name = this.editname;
            this.contacts[contactid].email = this.editemail;
            this.contacts[contactid].contact_num = this.editnumber;
            this.contacts[contactid].location = this.editlocation;
            this.contacts[contactid].role = this.editrole;
            this.$refs.editcontact.hide();
            //                console.log(this.tasks[index].tasktitle);
            this.modalTask = false;
        },
        cancel: function cancel() {
            this.modalTask = false;
        },
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.createImage(files[0]);
        },
        createImage: function createImage(file) {
            var reader = new FileReader();
            var vm = this;

            reader.onload = function (e) {
                vm.userImage = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    },
    computed: {
        allContacts: function allContacts() {
            var self = this;
            return this.contacts.filter(function (newcontact) {
                return newcontact.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
            //return this.customers;
        }
    }
});

/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "contact-page" }, [
        _c("div", { staticClass: "container-fluid bg-white" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "p-5 box-shadow mt-3 mb-3" }, [
                _c("h4", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("span", { staticClass: "float-right" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "search form-control pl-2 pr-2",
                      attrs: { type: "search", placeholder: "Search here" },
                      domProps: { value: _vm.search },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container-fluid bg-white mt-4" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "row pb-4" }, [
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 col-lg-3" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary mt-3",
                        on: {
                          click: function($event) {
                            _vm.modalShow = !_vm.modalShow
                          }
                        }
                      },
                      [_vm._v("Add New Contact")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          "hide-footer": true,
                          title: "Add your contact here"
                        },
                        model: {
                          value: _vm.modalShow,
                          callback: function($$v) {
                            _vm.modalShow = $$v
                          },
                          expression: "modalShow"
                        }
                      },
                      [
                        _c("b-container", { attrs: { fluid: "" } }, [
                          _c(
                            "form",
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newname,
                                    expression: "newname"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter name"
                                },
                                domProps: { value: _vm.newname },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newname = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "btn btn-primary mt-3",
                                attrs: { type: "file" },
                                on: { change: _vm.onFileChange }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newnumber,
                                    expression: "newnumber"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "number",
                                  placeholder: "Enter phone number"
                                },
                                domProps: { value: _vm.newnumber },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newnumber = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newemail,
                                    expression: "newemail"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "email",
                                  placeholder: "Enter email"
                                },
                                domProps: { value: _vm.newemail },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newemail = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newrole,
                                    expression: "newrole"
                                  }
                                ],
                                staticClass: "form-control mt-3",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter role"
                                },
                                domProps: { value: _vm.newrole },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newrole = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newlocation,
                                    expression: "newlocation"
                                  }
                                ],
                                staticClass: "form-control mt-3 mb-3",
                                attrs: {
                                  type: "text",
                                  placeholder: "Location"
                                },
                                domProps: { value: _vm.newlocation },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.newlocation = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-btn",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "primary" },
                                  on: { click: _vm.addContact }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Submit\n                                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-sm-8 col-lg-9" }, [
                  _c("div", { staticClass: "box-shadow mt-4" }, [
                    _c("div", { staticClass: "contacts-box" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          { staticClass: "table" },
                          _vm._l(_vm.allContacts, function(contact, index) {
                            return _c("tr", [
                              _c("td", [_c("b-form-checkbox")], 1),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("img", {
                                  staticClass: "contact-pic rounded-circle",
                                  attrs: { src: contact.img, alt: "profile" }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.contact_num))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.role))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(contact.location))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {
                                  staticClass: "fa fa-edit",
                                  on: {
                                    click: function($event) {
                                      _vm.editcontact(index)
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {
                                  staticClass: "fa fa-trash-o",
                                  on: {
                                    click: function($event) {
                                      _vm.deletecontact(index)
                                    }
                                  }
                                })
                              ])
                            ])
                          })
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editcontact",
          attrs: { "hide-footer": "", title: "Using Component Methods" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c("form", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editname,
                    expression: "editname"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "text", placeholder: "Enter name" },
                domProps: { value: _vm.editname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editname = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editemail,
                    expression: "editemail"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "email", placeholder: "Enter email" },
                domProps: { value: _vm.editemail },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editemail = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editnumber,
                    expression: "editnumber"
                  }
                ],
                staticClass: "form-control mt-3",
                attrs: { type: "number", placeholder: "Enter number" },
                domProps: { value: _vm.editnumber },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editnumber = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editrole,
                    expression: "editrole"
                  }
                ],
                staticClass: "form-control mt-3 mb-3",
                attrs: { type: "text", placeholder: "role" },
                domProps: { value: _vm.editrole },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editrole = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.editlocation,
                    expression: "editlocation"
                  }
                ],
                staticClass: "form-control mt-3 mb-3",
                attrs: { type: "text", placeholder: "role" },
                domProps: { value: _vm.editlocation },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.editlocation = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-white",
              attrs: { variant: "success", block: "" },
              on: {
                click: function($event) {
                  _vm.updateContact(_vm.contactid)
                }
              }
            },
            [_vm._v("Update")]
          ),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-white",
              attrs: { variant: "danger", block: "" },
              on: { click: _vm.cancel }
            },
            [_vm._v("Cancel")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "deletecontact",
          attrs: { "hide-footer": "", title: "Using Component Methods" }
        },
        [
          _c("div", { staticClass: "d-block text-center" }, [
            _c("h3", [_vm._v("Are you sure you want to delete modal")])
          ]),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-danger",
              attrs: { variant: "outline-danger", block: "" }
            },
            [_vm._v("Yes")]
          ),
          _vm._v(" "),
          _c(
            "b-btn",
            {
              staticClass: "mt-3 text-primary",
              attrs: { variant: "outline-primary", block: "" }
            },
            [_vm._v("No")]
          )
        ],
        1
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
    return _c("span", [
      _c("i", { staticClass: "fa fa-address-book-o" }),
      _vm._v(" Contacts\n                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-shadow mt-4" }, [
      _c("div", { staticClass: "border-bottom border-secondary p-3" }, [
        _c("img", {
          staticClass: "contact-profile d-inline-block rounded-circle",
          attrs: {
            src: __webpack_require__(780),
            alt: "user profile"
          }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "d-inline-block" }, [_vm._v("  Jon Doe")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "options border-bottom border-secondary" }, [
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark active",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("All Contacts")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Frequently contacted ")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Starred Contacts")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "options2" }, [
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Groups")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Friends")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Clients")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("Recent Workers")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "p-3 d-block text-dark",
            attrs: { href: "#/contacts" }
          },
          [_vm._v("New Group")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "total-contacts p-5 " }, [
      _c("span", [_vm._v("All Contacts(25)")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-172b6303", module.exports)
  }
}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1621)
}
var normalizeComponent = __webpack_require__(243)
/* script */
var __vue_script__ = __webpack_require__(1623)
/* template */
var __vue_template__ = __webpack_require__(1624)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-172b6303"
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
Component.options.__file = "resources/assets/components/pages/contacts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-172b6303", Component.options)
  } else {
    hotAPI.reload("data-v-172b6303", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "/cheerspos/images/avatar3.jpg?3291ff41f25c98ba4aff1a1f74e42d1f";

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "/cheerspos/images/avatar2.jpg?a1fb77af62c07cfcb18883dda43816c3";

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "/cheerspos/images/avatar4.jpg?2bb4ec334d9b5a47d6369df5a4b7cd11";

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "/cheerspos/images/avatar1.jpg?2b0314ed7a43445517ca523400549d2d";

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "/cheerspos/images/avatar.jpg?cd23a4a129679a15e2583c823c594af2";

/***/ })

});