(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{380:function(t,e,r){"use strict";r(12),r(11),r(78),r(29),r(237),r(236),r(84),r(85);var n=r(0);var o,c=r(109);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},382:function(t,e,r){"use strict";r(7),r(12),r(18),r(19);var n=r(2),o=(r(28),r(11),r(30),r(55),r(239),r(13),r(35),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(37),r(51),r(9),r(78),r(236),r(0)),c=r(109),l=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(y)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),o)}})},384:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("556b8102",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";r(384)},390:function(t,e,r){var n=r(23)(!1);n.push([t.i,"img[data-v-2c542911]{height:300px;width:auto}.title-row[data-v-2c542911]{height:auto;width:auto}.container[data-v-2c542911]{height:100px}.desc[data-v-2c542911]{margin-top:200px;margin-bottom:50px}",""]),t.exports=n},397:function(t,e,r){"use strict";r.r(e);r(169);var n={data:function(){return{details:this.$store.state.experience}},computed:{detail:function(){var t=this;return this.details.find((function(e){return e.id==t.$route.params.id}))}}},o=(r(389),r(83)),c=r(110),l=r.n(c),d=r(377),f=r(382),v=r(380),m=r(374),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"display-3 text-center mt-6"},[t._v(t._s(t.detail.role))]),t._v(" "),r("div",{staticClass:"text-center"},[r("h3",{staticClass:"mt-5"},[t._v(t._s(t.detail.start)+" - "+t._s(t.detail.end))]),t._v(" "),r("v-row",{staticClass:"title-row "},[r("v-col",{staticClass:"my-12 img"},[r("v-container",{staticClass:"container"},[r("img",{attrs:{src:""+t.detail.logo[0].url}})])],1)],1),t._v(" "),r("v-row",{staticClass:"desc"},[r("v-col",[t._v(t._s(t.detail.description))])],1),t._v(" "),r("v-row",[r("v-col",[r("v-btn",{attrs:{to:"/experience"}},[t._v("\n                    Let's explore further\n                ")])],1)],1)],1)])}),[],!1,null,"2c542911",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:f.a,VContainer:v.a,VRow:m.a})},444:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{}}},o=r(83),c=r(110),l=r.n(c),d=r(380),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",{staticClass:"my-14"},[e("ExperienceDesc")],1)],1)}),[],!1,null,"4b541aa8",null);e.default=component.exports;l()(component,{ExperienceDesc:r(397).default}),l()(component,{VContainer:d.a})}}]);