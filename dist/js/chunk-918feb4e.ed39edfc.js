(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-918feb4e"],{"24fd":function(t,e,r){"use strict";r("3782")},3782:function(t,e,r){},"3e2f":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"travelmap"},[r("el-card",{staticClass:"card"},[r("div",{attrs:{id:"main"}})])],1)},n=[],a=r("1725"),c=r("4ec3"),i={name:"TravelMap",created:function(){var t=this;Object(c["i"])().then((function(e){if(200===e.data.status){console.log(e);var r=e.data.data,o=r.points,n=r.linesData;t.draw(o,n)}})).catch((function(t){throw t}))},methods:{draw:function(t,e){var r=this.$echarts.init(document.getElementById("main"));this.$echarts.registerMap("china",a);var o={backgroundColor:"rgb(121,145,209)",geo:{map:"china",aspectScale:.75,zoom:1.1,itemStyle:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#09132c"},{offset:1,color:"#274d68"}],globalCoord:!0},shadowColor:"rgb(58,115,192)",shadowOffsetX:10,shadowOffsetY:11},regions:[{name:"南海诸岛",itemStyle:{opacity:.5}}]},series:[{type:"map",label:{show:!0,color:"#1DE9B6",emphasis:{color:"rgb(183,185,14)"}},zoom:1.1,map:"china",itemStyle:{backgroundColor:"rgb(147,235,248)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgb(31,54,150)"},{offset:1,color:"rgb(89,128,142)"}],globalCoord:!0},emphasis:{areaColor:"rgb(46,229,206)",borderWidth:.1}}},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",SymbolSize:10,zlevel:1,data:t,rippleEffect:{period:15,scale:4,brushType:"fill"}},{type:"lines",zlevel:2,effect:{show:!0,period:4,Symbol:"arrow",SymbolSize:7,trailLength:.4},lineStyle:{normal:{color:"#1DE9B6",width:1,opacity:.1,curveness:Math.random()}},data:e}]};r.setOption(o)}}},l=i,u=(r("24fd"),r("2877")),d=Object(u["a"])(l,o,n,!1,null,"6fec4818",null);e["default"]=d.exports},"4ec3":function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"h",(function(){return i})),r.d(e,"g",(function(){return l})),r.d(e,"e",(function(){return u})),r.d(e,"d",(function(){return d})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return f})),r.d(e,"a",(function(){return h})),r.d(e,"i",(function(){return m}));var o=r("ba5f"),n=r("4328"),a=r.n(n);function c(t){return Object(o["a"])({method:"post",url:"/login",data:t})}function i(t){return Object(o["a"])({method:"get",url:"/students",params:t})}function l(t){return Object(o["a"])({method:"delete",url:"/students/".concat(t)})}function u(){return Object(o["a"])({method:"get",url:"/info"})}function d(t){return t=a.a.stringify(t),Object(o["a"])({method:"post",url:"/info",data:t})}function s(t){return Object(o["a"])({method:"delete",url:"/info/".concat(t)})}function f(t){return t=a.a.stringify(t),Object(o["a"])({method:"put",url:"/info",data:t})}function h(t){return Object(o["a"])({method:"get",url:"/dataview",data:t})}function m(){return Object(o["a"])({method:"get",url:"/travel"})}}}]);
//# sourceMappingURL=chunk-918feb4e.ed39edfc.js.map