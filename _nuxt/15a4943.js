(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{397:function(t,e,r){"use strict";r.r(e);var n=r(346),o=r.n(n),c={head:function(){return{title:"Home"}},computed:{totalCost:function(){var t=o.a.reduce((function(t,e){return e.actualPrice&&(t+=e.actualPrice),e.subParts&&(t+=e.subParts.reduce((function(t,e){return e.actualPrice&&(t+=e.actualPrice),t}),0)),t}),0);return"$".concat(Math.round(100*t)/100)},predictedCost:function(){var t=o.a.reduce((function(t,e){return e.predictedPrice&&(t+=e.predictedPrice),e.subParts&&(t+=e.subParts.reduce((function(t,e){return e.predictedPrice&&(t+=e.predictedPrice),t}),0)),t}),0);return"$".concat(Math.round(100*t)/100)}}},l=r(79),d=r(105),h=r.n(d),m=r(134),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-img",{staticClass:"mx-auto mb-5",attrs:{src:"6.0lorado.png","max-width":"450"}}),t._v(" "),r("div",{staticClass:"mb-5 mx-auto",staticStyle:{"max-width":"750px"}},[t._v("\n        Welcome! This site is meant to document the build of my 2006 Chevy Colorado. Check out the part breakdown\n        and gallery pages on the left, and feel free to reach out to me on Instagram if you have any questions.\n        I'm certainly not the Colorado LS swap expert, so if you notice anything incorrect or have any other\n        suggestions for the site, I'd be glad to hear it. Hopefully this helps anyone looking to do a similar\n        swap though, it was definitely a learning experience!\n    ")]),t._v(" "),r("div",{staticClass:"text-h5"},[t._v("Predicted total project cost: "+t._s(t.predictedCost)+" ")]),t._v(" "),r("div",{staticClass:"text-h5"},[t._v("Current project cost: "+t._s(t.totalCost))]),t._v(" "),r("a",{staticClass:"text-h5",attrs:{href:"https://www.instagram.com/6.0lorado/",target:"_blank"}},[t._v("\n        Follow me on Instagram!\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VImg:m.a})}}]);