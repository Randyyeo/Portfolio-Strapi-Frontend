(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{313:function(t,r,n){"use strict";n(22),n(21),n(70),n(40),n(297),n(301),n(91),n(93);var e=n(0);var o,c=n(298);r.a=(o="container",e.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var n=r.props,data=r.data,e=r.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,e=r.props,data=r.data,o=r.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var r=l[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),o)}})},390:function(t,r,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("5a724922",content,!0,{sourceMap:!1})},432:function(t,r,n){"use strict";n(390)},433:function(t,r,n){var e=n(58)(!1);e.push([t.i,".text[data-v-7d16c7a6]{margin-top:4cm}",""]),t.exports=e},451:function(t,r,n){"use strict";n.r(r);var e={methods:{goTo:function(){this.$router.push("/")}}},o=(n(432),n(71)),c=n(92),l=n.n(c),d=n(291),f=n(453),v=n(313),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-app",[n("v-container",{staticClass:"text-center"},[n("h2",{staticClass:"text-center text"},[t._v("Thank you for your email. I will reply to you as soon as possible 😊")]),t._v(" "),n("v-btn",{staticClass:"mt-5",on:{click:t.goTo}},[t._v("Back to Homepage")])],1)],1)}),[],!1,null,"7d16c7a6",null);r.default=component.exports;l()(component,{VApp:d.a,VBtn:f.a,VContainer:v.a})}}]);