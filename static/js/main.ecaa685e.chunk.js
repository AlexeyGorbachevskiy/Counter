(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,a,t){e.exports={screen:"Screen_screen__3QktY",extra_container:"Screen_extra_container__2y4ko",min_input:"Screen_min_input__1OBlr",max_input:"Screen_max_input__3NiCN",flex_container:"Screen_flex_container__BEHd6",main_screen_value:"Screen_main_screen_value__QkT23",screenMessage:"Screen_screenMessage__7cxAt"}},,function(e,a,t){e.exports={inc:"Buttons_inc__21XJN",reset:"Buttons_reset__1UBWp",set:"Buttons_set__2m7KF",clear:"Buttons_clear__3SPO3"}},,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(5),c=t.n(s),l=(t(11),t(2)),u=(t(12),t(1)),o=t.n(u);var i=function(e){return r.a.createElement("div",{className:o.a.screen},""!==e.screenMessage?r.a.createElement("span",{className:o.a.screenMessage,style:"Incorrect value!"===e.screenMessage?{color:"red"}:{}},e.screenMessage):r.a.createElement("span",{className:o.a.main_screen_value,style:e.value===e.maxValue?{color:"red"}:{}},e.value))};var m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{disabled:e.flag,onClick:function(){return e.onClick&&e.onClick()},className:e.class},e.children))},g=t(3),_=t.n(g);var p=function(e){return r.a.createElement("div",{className:o.a.screen},r.a.createElement("div",{className:o.a.extra_container},r.a.createElement("div",{className:o.a.flex_container},r.a.createElement("p",null,"max value:"),r.a.createElement("input",{value:e.maxValue,onChange:function(a){parseInt(a.currentTarget.value)>e.minValue&&e.minValue>=0?(e.setMaxValue(parseInt(a.currentTarget.value)),e.setScreenMessage("enter values and press 'set' "),e.setIncBtnFlag(!0),e.setSetBtnFlag(!1),e.setClearBtn(!1)):(e.setMaxValue(parseInt(a.currentTarget.value)),e.setScreenMessage("Incorrect value!"),e.setIncBtnFlag(!0),e.setSetBtnFlag(!0),e.setResBtnFlag(!0))},className:o.a.max_input,style:e.maxValue<=e.minValue?{backgroundColor:"plum",border:"3px solid red"}:{},type:"number"})),r.a.createElement("div",{className:o.a.flex_container},r.a.createElement("p",null,"start value:"),r.a.createElement("input",{value:e.minValue,onChange:function(a){parseInt(a.currentTarget.value)>=0&&parseInt(a.currentTarget.value)<e.maxValue?(e.setMinValue(parseInt(a.currentTarget.value)),e.setScreenMessage("enter values and press 'set' "),e.setIncBtnFlag(!0),e.setSetBtnFlag(!1),e.setClearBtn(!1)):(e.setMinValue(parseInt(a.currentTarget.value)),e.setScreenMessage("Incorrect value!"),e.setIncBtnFlag(!0),e.setSetBtnFlag(!0),e.setResBtnFlag(!0))},className:o.a.min_input,style:e.minValue>=e.maxValue||e.minValue<0?{backgroundColor:"plum",border:"3px solid red"}:{},type:"number"}))))};var v=function(){var e=localStorage.getItem("minValue"),a=localStorage.getItem("maxValue"),t=Object(n.useState)(e?+e:0),s=Object(l.a)(t,2),c=s[0],u=s[1],o=Object(n.useState)(e?+e:0),g=Object(l.a)(o,2),v=g[0],S=g[1],d=Object(n.useState)(a?+a:5),x=Object(l.a)(d,2),b=x[0],f=x[1],E=Object(n.useState)(""),B=Object(l.a)(E,2),V=B[0],I=B[1],M=Object(n.useState)(!1),N=Object(l.a)(M,2),O=N[0],j=N[1],k=Object(n.useState)(!0),C=Object(l.a)(k,2),F=C[0],h=C[1],y=Object(n.useState)(!0),w=Object(l.a)(y,2),T=w[0],R=w[1],J=Object(n.useState)(!1),W=Object(l.a)(J,2),Q=W[0],A=W[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"setter_wrapper"},r.a.createElement(p,{maxValue:b,setMaxValue:f,minValue:v,setMinValue:S,setIncBtnFlag:j,setResBtnFlag:h,setSetBtnFlag:R,screenMessage:V,setScreenMessage:I,setClearBtn:A}),r.a.createElement("div",{className:"buttons"},r.a.createElement(m,{onClick:function(){localStorage.clear(),A(!0)},flag:Q,class:_.a.clear},"Clear LS"),r.a.createElement(m,{flag:T,onClick:function(){R(!0),j(!1),I(""),u(v),localStorage.setItem("minValue",v.toString()),localStorage.setItem("maxValue",b.toString())},class:_.a.set},"Set"))),r.a.createElement("div",{className:"counter_wrapper"},r.a.createElement(i,{maxValue:b,screenMessage:V,value:c}),r.a.createElement("div",{className:"buttons"},r.a.createElement(m,{flag:O,onClick:function(){c<b&&(c===b-1&&j(!0),h(!1),c++,u(c))},class:_.a.inc},"Inc"),r.a.createElement(m,{flag:F,onClick:function(){j(!1),h(!0),u(v)},class:_.a.reset},"Reset"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.ecaa685e.chunk.js.map