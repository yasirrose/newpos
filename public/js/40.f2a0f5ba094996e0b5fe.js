webpackJsonp([40],{1190:function(t,e,a){var s=a(1191);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(73)("2cff3216",s,!0,{})},1191:function(t,e,a){(t.exports=a(38)(!1)).push([t.i,".form-control{-webkit-transition:initial;transition:initial}",""])},1192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(39),i=a.n(s),o=a(556),n=a.n(o),r=a(557);i.a.use(n.a,r.a),e.default={name:"formfeatures",data:function(){return{username:"",mail:"",password:"",repeatPassword:"",confirm_field:"",address:"",terms:!1,formstate:{},model:{username:"",email:"",password:"",repeatPassword:"",gender:0,address:"",terms:!1}}},methods:{onSubmit:function(){this.formstate.$invalid||this.$router.push("/form_validations")}},mounted:function(){},destroyed:function(){}}},1193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("b-card",{staticClass:"bg-default-card",attrs:{header:"vue-form Validation","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email"}},[t._v(" User Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.username,expression:"model.username"}],staticClass:"form-control",attrs:{name:"username",type:"text",required:"",autofocus:"",placeholder:"User Name",id:"email"},domProps:{value:t.model.username},on:{input:function(e){e.target.composing||t.$set(t.model,"username",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"username",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Username is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email_input"}},[t._v(" E-mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{name:"email",type:"email",required:"",placeholder:"E-mail",id:"email_input"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email_password"}},[t._v(" Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{name:"password",type:"password",required:"",placeholder:"Password",minlength:"4",maxlength:"10",id:"email_password"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password is required")]),t._v(" "),a("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("Password should be atleast 4 characters long")]),t._v(" "),a("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("Password should be atmost 10 characters long")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email_confirm"}},[t._v(" Confirm Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.repeatPassword,expression:"model.repeatPassword"}],staticClass:"form-control",attrs:{name:"repeatpassword",type:"password",required:"",placeholder:"Confirm Password",sameas:t.model.password,id:"email_confirm"},domProps:{value:t.model.repeatPassword},on:{input:function(e){e.target.composing||t.$set(t.model,"repeatPassword",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"repeatpassword",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password confirmatoin is required")]),t._v(" "),a("div",{attrs:{slot:"sameas"},slot:"sameas"},[t._v("Password and Confirm password should match")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"name_gen"}},[t._v("Gender")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.gender,expression:"model.gender"}],staticClass:"form-control",attrs:{id:"name_gen",name:"gender",size:"1",required:"",checkbox:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("\n                                                Please select\n                                            ")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Male")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Female")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Other")])]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"gender",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"checkbox"},slot:"checkbox"},[t._v("Gender is required")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.address,expression:"model.address"}],staticClass:"form-control resize_vertical",attrs:{rows:"5",name:"address",id:"address",placeholder:"Enter your Address",required:""},domProps:{value:t.model.address},on:{input:function(e){e.target.composing||t.$set(t.model,"address",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"address",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Address is required")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("validate",{attrs:{tag:"label"}},[a("b-form-checkbox",[t._v("I agree the\n                            "),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("terms & conditions")])],1)]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"terms",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"checkbox"},slot:"checkbox"},[t._v("Terms must be accepted")])])],1)],1),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group float-right"},[a("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"Sign Up"}})])])])])],1)])])],1)])},staticRenderFns:[]}},1486:function(t,e,a){var s=a(182)(a(1192),a(1193),!1,function(t){a(1190)},null,null);t.exports=s.exports},556:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,s=function(e,a,s){return t.test(e)};s._allowNulls=!0;var i=function(t,e,a){return!isNaN(t)};i._allowNulls=!0;var o=function(t,e,s){return a.test(t)};o._allowNulls=!0;var n={validators:{email:s,number:i,url:o,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"vueForm",formTag:"form",messagesComponent:"fieldMessages",messagesTag:"div",showMessages:"",validateComponent:"validate",validateTag:"div",fieldComponent:"field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),d=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var a;return d(a={},t.dirty,e.$dirty),d(a,t.pristine,e.$pristine),d(a,t.valid,e.$valid),d(a,t.invalid,e.$invalid),d(a,t.touched,e.$touched),d(a,t.untouched,e.$untouched),d(a,t.focused,e.$focused),d(a,t.pending,e.$pending),d(a,t.submitted,e.$submitted),a}function f(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function m(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(s){for(var i=0;i<s.length;i++){var o=s[i];o.componentOptions&&o.componentOptions.tag===h(e.messagesComponent)&&(a.messages=o),"label"!==o.tag||a.label||(a.label=o),o.data&&(o.data.model?a.vModel.push(o):o.data.directives&&o.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(o)),o.children?t(o.children):o.componentOptions&&o.componentOptions.children&&t(o.componentOptions.children)}}(t),a}function v(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function g(){return Math.random().toString(36).substr(2,10)}var _="VueFormProviderConfig"+g(),b="VueFormProviderState"+g(),$="VueFormProviderParentForm"+g(),y=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=Object.defineProperty,O=Object.getOwnPropertyDescriptor,F=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},P=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,a=y.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&y.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!s)return!1;for(e in t);return void 0===e||y.call(t,e)},x=function(t,e){C&&"__proto__"===e.name?C(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},j=function(t,e){if("__proto__"===e){if(!y.call(t,e))return;if(O)return O(t,e).value}return t[e]},N=function t(){var e,a,s,i,o,n,r=arguments[0],l=1,d=arguments.length,u=!1;for("boolean"==typeof r&&(u=r,r=arguments[1]||{},l=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});l<d;++l)if(null!=(e=arguments[l]))for(a in e)s=j(r,a),r!==(i=j(e,a))&&(u&&i&&(P(i)||(o=F(i)))?(o?(o=!1,n=s&&F(s)?s:[]):n=s&&P(s)?s:{},x(r,{name:a,newValue:t(u,n,i)})):void 0!==i&&x(r,{name:a,newValue:i}));return r},S={render:function(t){var e=this,a={};return"undefined"!=typeof window&&(a.novalidate=""),t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:a},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:_},provide:function(){var t;return d(t={},b,this.state),d(t,$,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,s={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(s){e[s.$name]=s,t.$set(a,s.$name,s)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(s).forEach(function(e){t.$set(t.state,e,s[e])}),this.$watch("state",function(){var s=!1,i=!0,o=!1,n=!1,r=!1;Object.keys(e).forEach(function(l){var d=e[l];d.$submitted=a.$submitted,d.$dirty&&(s=!0),d.$touched&&(o=!0),d.$focused&&(n=!0),d.$pending&&(r=!0),d.$valid?t.$delete(a.$error,d.$name):(i=!1,t.$set(a.$error,d.$name,d))}),a.$dirty=s,a.$pristine=!s,a.$touched=o,a.$untouched=!o,a.$focused=n,a.$valid=i,a.$invalid=!i,a.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},E="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var k,V=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,s){var i,o,n,r;for(i in o=[],r=[],s)e.call(s,i)&&(n=s[i],"this"!==i&&(o.push(i),r.push(n)));return Function.apply(null,a.call(o).concat(["return eval("+JSON.stringify(t)+")"])).apply(s.this,r)}}).call(E)}(k={exports:{}},k.exports),k.exports);function q(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return q(t[e].children)}}var D={inject:{vueFormConfig:_,vueFormState:b,vueFormParentForm:$},render:function(t){var e=this,a=[],s=this.formstate[this.fieldname];if(s&&s.$error&&this.isShown&&(Object.keys(s.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var i=e.$slots[t]||e.$scopedSlots[t](s);if(e.autoLabel){var o=q(i);o&&(o.data=o.data||{},o.data.attrs=o.data.attrs||{},o.data.attrs.for=s._id)}a.push(i)}}),!a.length&&s.$valid&&(this.$slots.default||this.$scopedSlots.default))){var i=this.$slots.default||this.$scopedSlots.default(s);if(this.autoLabel){var o=q(i);o&&(o.data=o.data||{},o.data.attrs=o.data.attrs||{},o.data.attrs.for=s._id)}a.push(i)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||V(e,t)}}},L={render:function(t){var e=this,a=m(this.$slots.default,this.vueFormConfig),s=a.vModel,i={for:null};if(s.length){if(this.name=v(s[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var o=s[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=o,s[0].data.attrs.id=o,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=o):"label"===this.tag&&(i.for=o)}s.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:i},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:_,vueFormState:b,vueFormParentForm:$},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,s){for(var i,o=void 0,n=function(t,e){s&&Object.keys(s).filter(function(t){return s[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),o=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){o.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;i=e[r++];)n(0,i);t.fieldstate._className=o},{deep:!0,immediate:!0}),this.$watch("name",function(e,a){t.formstate._removeControl(t.fieldstate),t.fieldstate.$name=e,t.formstate._addControl(t.fieldstate)})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],s=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},$attrs:{},_className:null,_id:"vf"+g(),_setValidatorValidity:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var i=this;t?s=t:t=s,this.$pending=!0;var o=!0,n=f(t.data);n;var r={promises:[],names:[]};a.push(r);var l=t.data.attrs||{},d=t.componentInstance;d&&d._vfValidationData_&&(l=N({},l,d._vfValidationData_));var u=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===n||void 0===n||null===n)&&"required"!==a)return i._setValidatorValidity(a,!0),void!0;var s=void 0!==l[a]?l[a]:u[a],d="function"==typeof i._validators[a];if(!d||null!==s&&void 0!==s||i._validators[a]._allowNulls){s&&(i.$attrs[a]=s);var c=d?i._validators[a](n,s,t):e.custom[a];"boolean"==typeof c?c?i._setValidatorValidity(a,!0):(o=!1,i._setValidatorValidity(a,!1)):(r.promises.push(c),r.names.push(a),e.vueFormParentForm.promises.push(c))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=r.names[e];t?i._setValidatorValidity(a,!0):(o=!1,i._setValidatorValidity(a,!1))}),i._setValidity(o),i.$pending=!1)}):(this._setValidity(o),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var s,i,o,n;a&&(s=e,i=a,o="",n="",Object.keys(s).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return o+=s[t]}),Object.keys(i).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return n+=i[t]}),o!==n&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},T={inject:{vueFormConfig:_},render:function(t){var e=m(this.$slots.default,this.vueFormConfig),a=e.vModel,s={for:null};if(a.length&&this.autoLabel){var i=a[0].data.attrs&&a[0].data.attrs.id||"vf"+g();a[0].data.attrs.id=i,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=i):"label"===this.tag&&(s.for=i)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:s},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},M={};function A(t,e,a){Object.keys(t).forEach(function(s){var i="type"===s?t[s].toLowerCase():s.toLowerCase();e[i]&&!a[i]&&(a[i]=e[i])})}var z={name:"vue-form-validator",bind:function(t,e,a){var s=e.value.fieldstate,i=e.value.config.validators,o=a.data.attrs||{};if(v(a)){var n,r,l,d;o.debounce&&(M[s._id]=(n=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=o.debounce,function(){var t=this,e=arguments,a=l&&!d;clearTimeout(d),d=setTimeout(function(){d=null,l||n.apply(t,e)},r),a&&n.apply(t,e)})),A(o,i,s._validators),a.componentOptions&&a.componentOptions.propsData&&A(a.componentOptions.propsData,i,s._validators),s._validate(a),t.addEventListener("blur",function(){s._setFocused(!1)},!1),t.addEventListener("focus",function(){s._setFocused(!0)},!1);var u=a.componentInstance;u&&(u.$on("blur",function(){s._setFocused(!1)}),u.$on("focus",function(){s._setFocused(!0)}),u.$once("vf:addFocusListeners",function(){t.addEventListener("focusout",function(){s._setFocused(!1)},!1),t.addEventListener("focusin",function(){s._setFocused(!0)},!1)}),u.$on("vf:validate",function(t){u._vfValidationData_||A(t,i,s._validators),u._vfValidationData_=t,s._validate(u.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,s){var i=function(t,e,a){var s=!1,i=t.data.attrs||{},o=e.data.attrs||{},n={};if(f(t.data)!==f(e.data)&&(n.vModel=!0,s=!0),Object.keys(a).forEach(function(t){i[t]!==o[t]&&(n[t]=!0,s=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,l=e.componentOptions.propsData;Object.keys(a).forEach(function(t){r[t]!==l[t]&&(n[t]=!0,s=!0)})}if(s)return n}(a,s,e.value.config.validators),o=e.value.fieldstate,n=a.data.attrs||{},r=a.componentInstance;r&&r._vfValidationData_&&(n=N({},n,r[r._vfValidationData_])),-1===a.elm.className.indexOf(o._className[0])&&(a.elm.className=a.elm.className+" "+o._className.join(" ")),i&&(i.vModel?n.debounce?(o.$pending=!0,M[o._id](o,a)):(o._hasFocused&&o._setDirty(),o._validate(a)):o._validate(a))}};function U(t){var e,a=N(!0,{},n,t);this.provide=function(){return d({},_,a)},this.components=(d(e={},a.formComponent,S),d(e,a.messagesComponent,D),d(e,a.validateComponent,L),d(e,a.fieldComponent,T),e),this.directives={vueFormValidator:z}}var I=function(t){function e(){return r(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,U),l(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return U.call(I),I.options=new I,I},t.exports=a()}).call(e,a(21))},557:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}}});