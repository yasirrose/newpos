webpackJsonp([46],{1371:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(39);a.n(n);a(1372),e.default={name:"ContactUs",mounted:function(){this.fill_word()},data:function(){return{lorem:"Lorem ipsum dolor sit amet consectetur adipiscing elit Duis vestibulum tincidunt turpis Etiam eget eleifend elit In et vestibulum ipsum Donec eu convallis urna Pellentesque sit amet accumsan leo Aliquam elementum justo turpis mollis maximus libero faucibus non Vivamus et eros libero",words:[],items:["Sakura","Sunflower","Rose"],input:"Hello",effect:"bounceDown"}},methods:{fill_word:function(){this.words=this.lorem.split(" ")},addItem:function(){this.input&&(this.items.splice(0,0,this.input),this.input=this.words.shift(),this.words.length||(this.words=this.lorem.split(" ")))},reset:function(){this.items=[]}},destroyed:function(){}}},1372:function(t,e,a){var n=a(1373);"string"==typeof n&&(n=[[t.i,n,""]]);var o={transform:void 0};a(74)(n,o);n.locals&&(t.exports=n.locals)},1373:function(t,e,a){(t.exports=a(38)(!1)).push([t.i,"/*!\n * vue2-animate v1.0.4\n * (c) 2016 Simon Asika\n * Released under the MIT License.\n * Documentation: https://github.com/asika32764/vue2-animate\n */.bounce-enter-active,.bounce-leave-active,.bounceDown-enter-active,.bounceDown-leave-active,.bounceIn,.bounceInDown,.bounceInLeft,.bounceInRight,.bounceInUp,.bounceLeft-enter-active,.bounceLeft-leave-active,.bounceOut,.bounceOutDown,.bounceOutLeft,.bounceOutRight,.bounceOutUp,.bounceRight-enter-active,.bounceRight-leave-active,.bounceUp-enter-active,.bounceUp-leave-active,.fade-enter-active,.fade-leave-active,.fadeDown-enter-active,.fadeDown-leave-active,.fadeDownBig-enter-active,.fadeDownBig-leave-active,.fadeIn,.fadeInDown,.fadeInDownBig,.fadeInLeft,.fadeInLeftBig,.fadeInRight,.fadeInRightBig,.fadeInUp,.fadeInUpBig,.fadeLeft-enter-active,.fadeLeft-leave-active,.fadeLeftBig-enter-active,.fadeLeftBig-leave-active,.fadeOut,.fadeOutDown,.fadeOutDownBig,.fadeOutLeft,.fadeOutLeftBig,.fadeOutRight,.fadeOutRightBig,.fadeOutUp,.fadeOutUpBig,.fadeRight-enter-active,.fadeRight-leave-active,.fadeRightBig-enter-active,.fadeRightBig-leave-active,.fadeUp-enter-active,.fadeUp-leave-active,.fadeUpBig-enter-active,.fadeUpBig-leave-active,.rotateDownLeft-enter-active,.rotateDownLeft-leave-active,.rotateDownRight-enter-active,.rotateDownRight-leave-active,.rotateInDownLeft,.rotateInDownRight,.rotateInUpLeft,.rotateInUpRight,.rotateOutDownLeft,.rotateOutDownRight,.rotateOutUpLeft,.rotateOutUpRight,.rotateUpLeft-enter-active,.rotateUpLeft-leave-active,.rotateUpRight-enter-active,.rotateUpRight-leave-active,.slide-enter-active,.slide-leave-active,.slideDown-enter-active,.slideDown-leave-active,.slideIn,.slideInDown,.slideInLeft,.slideInRight,.slideInUp,.slideLeft-enter-active,.slideLeft-leave-active,.slideOut,.slideOutDown,.slideOutLeft,.slideOutRight,.slideOutUp,.slideRight-enter-active,.slideRight-leave-active,.slideUp-enter-active,.slideUp-leave-active,.zoom-enter-active,.zoom-leave-active,.zoomDown-enter-active,.zoomDown-leave-active,.zoomIn,.zoomInDown,.zoomInLeft,.zoomInRight,.zoomInUp,.zoomLeft-enter-active,.zoomLeft-leave-active,.zoomOut,.zoomOutDown,.zoomOutLeft,.zoomOutRight,.zoomOutUp,.zoomRight-enter-active,.zoomRight-leave-active,.zoomUp-enter-active,.zoomUp-leave-active{animation-duration:1s;animation-fill-mode:both}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounce-enter-active,.bounceIn{animation-name:bounceIn}.bounce-leave-active,.bounceOut{animation-name:bounceOut}.bounceInUp,.bounceUp-enter-active{animation-name:bounceInUp}.bounceOutUp,.bounceUp-leave-active{animation-name:bounceOutUp}.bounceInRight,.bounceRight-enter-active{animation-name:bounceInRight}.bounceOutRight,.bounceRight-leave-active{animation-name:bounceOutRight}.bounceInLeft,.bounceLeft-enter-active{animation-name:bounceInLeft}.bounceLeft-leave-active,.bounceOutLeft{animation-name:bounceOutLeft}.bounceDown-enter-active,.bounceInDown{animation-name:bounceInDown}.bounceDown-leave-active,.bounceOutDown{animation-name:bounceOutDown}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:none}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:none}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:none}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fade-enter-active,.fadeIn{animation-name:fadeIn}.fade-leave-active,.fadeOut{animation-name:fadeOut}.fadeInUpBig,.fadeUpBig-enter-active{animation-name:fadeInUpBig}.fadeOutUpBig,.fadeUpBig-leave-active{animation-name:fadeOutUpBig}.fadeInUp,.fadeUp-enter-active{animation-name:fadeInUp}.fadeOutUp,.fadeUp-leave-active{animation-name:fadeOutUp}.fadeInRightBig,.fadeRightBig-enter-active{animation-name:fadeInRightBig}.fadeOutRightBig,.fadeRightBig-leave-active{animation-name:fadeOutRightBig}.fadeInRight,.fadeRight-enter-active{animation-name:fadeInRight}.fadeOutRight,.fadeRight-leave-active{animation-name:fadeOutRight}.fadeInLeftBig,.fadeLeftBig-enter-active{animation-name:fadeInLeftBig}.fadeLeftBig-leave-active,.fadeOutLeftBig{animation-name:fadeOutLeftBig}.fadeInLeft,.fadeLeft-enter-active{animation-name:fadeInLeft}.fadeLeft-leave-active,.fadeOutLeft{animation-name:fadeOutLeft}.fadeDownBig-enter-active,.fadeInDownBig{animation-name:fadeInDownBig}.fadeDownBig-leave-active,.fadeOutDownBig{animation-name:fadeOutDownBig}.fadeDown-enter-active,.fadeInDown{animation-name:fadeInDown}.fadeDown-leave-active,.fadeOutDown{animation-name:fadeOutDown}@keyframes rotateIn{0%{transform-origin:center;transform:rotate(-200deg);opacity:0}to{transform-origin:center;transform:none;opacity:1}}@keyframes rotateOut{0%{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate(200deg);opacity:0}}@keyframes rotateInDownLeft{0%{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}@keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(45deg);opacity:0}}@keyframes rotateInDownRight{0%{transform-origin:right bottom;transform:rotate(45deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}@keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(-45deg);opacity:0}}@keyframes rotateInUpLeft{0%{transform-origin:left bottom;transform:rotate(45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}@keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}}@keyframes rotateInUpRight{0%{transform-origin:right bottom;transform:rotate(-90deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}@keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(90deg);opacity:0}}.rotate-enter-active,.rotate-leave-active,.rotateIn,.rotateOut{animation-duration:1s;animation-fill-mode:both}.rotate-enter-active,.rotateIn{animation-name:rotateIn}.rotate-leave-active,.rotateOut{animation-name:rotateOut}.rotateInUpRight,.rotateUpRight-enter-active{animation-name:rotateInUpRight}.rotateOutUpRight,.rotateUpRight-leave-active{animation-name:rotateOutUpRight}.rotateInUpLeft,.rotateUpLeft-enter-active{animation-name:rotateInUpLeft}.rotateOutUpLeft,.rotateUpLeft-leave-active{animation-name:rotateOutUpLeft}.rotateDownRight-enter-active,.rotateInDownRight{animation-name:rotateInDownRight}.rotateDownRight-leave-active,.rotateOutDownRight{animation-name:rotateOutDownRight}.rotateDownLeft-enter-active,.rotateInDownLeft{animation-name:rotateInDownLeft}.rotateDownLeft-leave-active,.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slide-enter-active,.slideIn{animation-name:slideIn}.slide-leave-active,.slideOut{animation-name:slideOut}.slideInUp,.slideUp-enter-active{animation-name:slideInUp}.slideOutUp,.slideUp-leave-active{animation-name:slideOutUp}.slideInRight,.slideRight-enter-active{animation-name:slideInRight}.slideOutRight,.slideRight-leave-active{animation-name:slideOutRight}.slideInLeft,.slideLeft-enter-active{animation-name:slideInLeft}.slideLeft-leave-active,.slideOutLeft{animation-name:slideOutLeft}.slideDown-enter-active,.slideInDown{animation-name:slideInDown}.slideDown-leave-active,.slideOutDown{animation-name:slideOutDown}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoom-enter-active,.zoomIn{animation-name:zoomIn}.zoom-leave-active,.zoomOut{animation-name:zoomOut}.zoomInUp,.zoomUp-enter-active{animation-name:zoomInUp}.zoomOutUp,.zoomUp-leave-active{animation-name:zoomOutUp}.zoomInRight,.zoomRight-enter-active{animation-name:zoomInRight}.zoomOutRight,.zoomRight-leave-active{animation-name:zoomOutRight}.zoomInLeft,.zoomLeft-enter-active{animation-name:zoomInLeft}.zoomLeft-leave-active,.zoomOutLeft{animation-name:zoomOutLeft}.zoomDown-enter-active,.zoomInDown{animation-name:zoomInDown}.zoomDown-leave-active,.zoomOutDown{animation-name:zoomOutDown}",""])},1374:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-card",{staticClass:"bg-primary-card",attrs:{header:"Select an effect","header-tag":"h4"}},[a("div",{staticClass:"row",attrs:{id:"demo"}},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.effect,expression:"effect"}],staticClass:"form-control",attrs:{name:"effect"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.effect=e.target.multiple?a:a[0]}}},[a("optgroup",{attrs:{label:"Bounce"}},[a("option",{attrs:{value:"bounce"}},[t._v("bounce")]),t._v(" "),a("option",{attrs:{value:"bounceDown"}},[t._v("bounceDown")]),t._v(" "),a("option",{attrs:{value:"bounceLeft"}},[t._v("bounceLeft")]),t._v(" "),a("option",{attrs:{value:"bounceRight"}},[t._v("bounceRight")]),t._v(" "),a("option",{attrs:{value:"bounceUp"}},[t._v("bounceUp")])]),t._v(" "),a("optgroup",{attrs:{label:"Fade"}},[a("option",{attrs:{value:"fade"}},[t._v("fade")]),t._v(" "),a("option",{attrs:{value:"fadeDown"}},[t._v("fadeDown")]),t._v(" "),a("option",{attrs:{value:"fadeDownBig"}},[t._v("fadeDownBig")]),t._v(" "),a("option",{attrs:{value:"fadeLeft"}},[t._v("fadeLeft")]),t._v(" "),a("option",{attrs:{value:"fadeLeftBig"}},[t._v("fadeLeftBig")]),t._v(" "),a("option",{attrs:{value:"fadeRight"}},[t._v("fadeRight")]),t._v(" "),a("option",{attrs:{value:"fadeRightBig"}},[t._v("fadeRightBig")]),t._v(" "),a("option",{attrs:{value:"fadeUp"}},[t._v("fadeUp")]),t._v(" "),a("option",{attrs:{value:"fadeUpBig"}},[t._v("fadeUpBig")])]),t._v(" "),a("optgroup",{attrs:{label:"Rotate"}},[a("option",{attrs:{value:"rotate"}},[t._v("rotate")]),t._v(" "),a("option",{attrs:{value:"rotateDownLeft"}},[t._v("rotateDownLeft")]),t._v(" "),a("option",{attrs:{value:"rotateDownRight"}},[t._v("rotateDownRight")]),t._v(" "),a("option",{attrs:{value:"rotateUpLeft"}},[t._v("rotateUpLeft")]),t._v(" "),a("option",{attrs:{value:"rotateUpRight"}},[t._v("rotateUpRight")])]),t._v(" "),a("optgroup",{attrs:{label:"Slide"}},[a("option",{attrs:{value:"slideDown"}},[t._v("slideDown")]),t._v(" "),a("option",{attrs:{value:"slideLeft"}},[t._v("slideLeft")]),t._v(" "),a("option",{attrs:{value:"slideRight"}},[t._v("slideRight")]),t._v(" "),a("option",{attrs:{value:"slideUp"}},[t._v("slideUp")])]),t._v(" "),a("optgroup",{attrs:{label:"Zoom"}},[a("option",{attrs:{value:"zoom"}},[t._v("zoom")]),t._v(" "),a("option",{attrs:{value:"zoomDown"}},[t._v("zoomDown")]),t._v(" "),a("option",{attrs:{value:"zoomLeft"}},[t._v("zoomLeft")]),t._v(" "),a("option",{attrs:{value:"zoomRight"}},[t._v("zoomRight")]),t._v(" "),a("option",{attrs:{value:"zoomUp"}},[t._v("zoomUp")])])])]),t._v(" "),a("div",{staticClass:"code-sample"},[a("pre",[a("code",[t._v('<transition-group name="'+t._s(t.effect)+'" tag="ul" class="list-group">\n    <li v-for="(item, i) in items" class="list-group-item" v-bind:key="i">'),a("span",{pre:!0},[t._v("{{ item }}")]),t._v("</li>\n</transition-group>")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-5",attrs:{id:"demo-component"}},[a("h4",[t._v("Add some input")]),t._v(" "),a("div",{staticClass:"text-toolbar"},[a("b-input-group",[a("b-form-input",{attrs:{type:"text",min:"0.00"}}),t._v(" "),a("b-input-group-append",[a("b-btn",{attrs:{variant:"success"},on:{click:t.addItem}},[t._v("Add")]),t._v(" "),a("b-btn",{staticClass:"text-white",attrs:{variant:"danger"},on:{click:t.reset}},[t._v("Reset")])],1)],1)],1),t._v(" "),a("div",{staticClass:"list-box mt-5"},[a("transition-group",{staticClass:"list-group",attrs:{name:t.effect,tag:"ul"}},t._l(t.items,function(e,n){return a("li",{key:e,staticClass:"list-group-item"},[t._v(t._s(e))])}))],1)])])])],1)])])},staticRenderFns:[]}},1520:function(t,e,a){var n=a(182)(a(1371),a(1374),!1,null,null,null);t.exports=n.exports}});