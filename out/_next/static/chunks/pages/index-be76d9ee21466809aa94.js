_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return G}));var r=n("nKUr"),c=n("/MKj"),a=n("apO0"),i=n("35Tz"),o=n("q1tI"),s=n.n(o),l=n("2J0/"),d=n("Pt+s"),m=n("h4VS"),u=n("vOnD"),j=function(e){var t=e.event,n=t.date,c=t.href,a=t.img,i=t.name;return Object(r.jsxs)("div",{className:"event",onClick:function(){window.open("https://lostark.game.onstove.com/".concat(c))},children:[Object(r.jsx)("div",{className:"eventImg",children:Object(r.jsx)("img",{className:"imgWidth",src:a,alt:i})}),Object(r.jsxs)("div",{className:"eventContent",children:[Object(r.jsx)("div",{className:"eventName rem09 textCenter overflowDot",children:i}),Object(r.jsx)("div",{className:"eventDate rem08 textCenter overflowDot",children:n})]})]})},b=n("KQm4"),O=n("ODXe"),f=n("rePB");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(e.includes(":")){var n=e.split(":"),r=Object(O.a)(n,2),c=r[0],a=r[1];return"".concat(x(Number(c)),":").concat(x(Number(a)-(t||3)))}return e}function x(e){return e<10?"0"+e:e}var g=function(e){var t=Object(o.useState)({timeOut:null,targetState:"NORMAL"}),n=Object(O.a)(t,2),c=n[0],a=n[1],i=c.timeOut,s=c.targetState,l=e.name,d=e.src,m=e.time,u=e.lv,j=e.position,b=e.endTime,f=e.contType,v=e.waiting,g=null,N=null;switch(function(e,t,n){var r=[],c=new Date,a=e.time,i=e.setTime,s=e.contType,l=e.waiting;function d(e,t){t();var n=setInterval(t,1e3*e);return r.push(n),n}function m(e,r,c){var a=r.getTime()-(new Date).getTime(),o="NORMAL";if(a<=6e5&&"FIELD_BOSS"!==s&&"CO_OCEAN"!==s&&(o="APPEAR"),(0===a||0>a)&&(o="OPEN",a=e.getTime()-(new Date).getTime()),0===a||0>a)return i(c);var l=1e3,d=60*l,m=60*d,u=Math.floor(a/m),j=Math.floor(a%m/d),b=Math.floor(a%d/l);n(h(h({},t),{},{targetState:o,timeOut:"".concat(x(u),":").concat(x(j),":").concat(x(b))}))}Object(o.useEffect)((function(){if(e.time){var i=e.time.split(":"),o=Object(O.a)(i,2),s=o[0],u=o[1],j=c.getFullYear(),b=c.getMonth(),f=c.getDate(),v=new Date(j,b,f,s,u),p=new Date(j,b,f,s,u-(l||3));d(1,m.bind(null,v,p,a))}else n(h(h({},t),{},{targetState:"NORMAL"}));return function(){r.forEach((function(e){return clearInterval(e)}))}}),[e.time])}(e,c,a),s){case"APPEAR":g="#CC99FF",m="\uc77c\ub801\uc774\ub294\uc911";break;case"OPEN":g="#FF6666",m="FIELD_BOSS"!==f&&"CO_OCEAN"!==f?"\ucd9c\ud604\uc911":"\ub300\uae30\uc911";break;case"NORMAL":g=null}return m||(m=b,N="block",i="\uc885\ub8cc"),Object(r.jsxs)("div",{className:"timer",style:{borderColor:g},children:[Object(r.jsx)("div",{style:{display:N},className:"endTimeBg"}),Object(r.jsx)("div",{className:"timerName rem09 textCenter overflowDot",children:l}),Object(r.jsxs)("div",{className:"timerContent",children:[Object(r.jsxs)("div",{className:"timerImg",children:[Object(r.jsx)("img",{className:"imgWidth",src:"https://github.com/sangmin802/loa-hands/blob/master/public/".concat(d,"?raw=true"),alt:l}),Object(r.jsx)("div",{className:"timerLv rem07",children:u})]}),Object(r.jsxs)("div",{className:"timerTime",children:[Object(r.jsx)("div",{className:"startTime rem08",children:p(m,v)}),Object(r.jsx)("div",{className:"timeOut rem08",children:i})]})]}),Object(r.jsx)("div",{className:"timerName rem09 textCenter overflowDot",children:j})]})};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.data,n=(e.today,Object(o.useCallback)((function(e){s(y(y({},i),{},{time:e}))}),[])),c=Object(o.useState)({time:null}),a=Object(O.a)(c,2),i=a[0],s=a[1],l=Object(b.a)(t).map((function(e){return y({},e)})),d=function(e){var t=new Date;return e.map((function(e){return e.time})).map((function(e){return e.filter((function(e){var n=e.replace(":",""),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),c=String(t.getHours())+String(r);return Number(n)>Number(c)?e:null}))}))}(l);return l.forEach((function(e,t){if(e.time=d[t],"string"!==typeof e.position)return 0!==d[t].length?e.position=e.position.slice(-d[t].length):e.position=[]})),l.sort((function(e,t){var n=e.time[0],r=t.time[0];return r?n>r?1:n<r?-1:0:-1})),0===l.length?Object(r.jsx)("div",{className:"noTimerContent textCenter rem08",children:"\ub2e4\uc74c\uc5d0 \ub9cc\ub098\uc694"}):Object(r.jsx)("div",{className:"timerWrap",children:l.map((function(e,t){var c=e.name,a=e.src,i=e.time,o=e.position,s=e.endPosition,l=e.lv,d=e.endTime,m=e.waiting,u=e.contType;return"string"!==typeof o&&(o=o[0]||s),Object(r.jsx)(g,{setTime:n,name:c,src:a,time:i[0],endTime:d,position:o,lv:l,contType:u,waiting:m},"timer".concat(t))}))})};var D=s.a.memo(w,(function(e,t){return e.today===t.today}));function S(){var e=Object(m.a)(["\n  padding-bottom : 15%;\n  background : #222;\n"]);return S=function(){return e},e}function C(){var e=Object(m.a)(["\n  padding-bottom : 50%;\n  background : #444;\n"]);return C=function(){return e},e}function T(){var e=Object(m.a)(["\n  width : 49%;\n  border-radius : 3px;\n  margin-bottom : 2%;\n  margin-top : 2%;\n  overflow : hidden;\n  box-sizing : border-box;\n"]);return T=function(){return e},e}function P(){var e=Object(m.a)(["\n  border-radius : 3px;\n  background : #222;\n  padding-bottom : 6%;\n  background : #222;\n"]);return P=function(){return e},e}function E(){var e=Object(m.a)(["\n  display : flex;\n  flex-wrap : wrap;\n  justify-content : space-between;\n"]);return E=function(){return e},e}var _=u.a.div(E()),k=u.a.div(P()),M=u.a.div(T()),I=u.a.div(C()),L=u.a.div(S()),A=function(e){var t=e.index,n=e.today,c=e.cal,a=0===t?"14:00":"21:00";return Object(r.jsxs)("div",{className:"calendar".concat(t," calendar"),children:[Object(r.jsx)("div",{className:"calendarTitle textCenter",children:a}),0!==c.length?Object(r.jsx)(D,{data:c,today:n}):Object(r.jsx)("div",{className:"noTimerContent textCenter rem08",children:"\ub2e4\uc74c\uc5d0 \ub9cc\ub098\uc694"})]},"calendar".concat(t))},F=function(e){var t=e.homeData,n=e.dailyIsland,c=e.fieldBoss,a=e.chaosGate,i=e.oceanCont;if(!t)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsx)(_,{children:n.map((function(e,t){return Object(r.jsxs)(M,{children:[Object(r.jsx)(I,{}),Object(r.jsx)(L,{})]},t)}))})]});var o=(new Date).getSeconds(),s=(new Date).getDay();return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)("div",{className:"events homeSection",children:[Object(r.jsx)("div",{className:"homeSectionTitle rem1 textCenter",children:"\uc9c4\ud589\uc911\uc778 \uc774\ubca4\ud2b8"}),Object(r.jsx)("div",{className:"eventsWrap",children:t.events.map((function(e,t){return Object(r.jsx)(j,{event:e},"event".concat(t))}))})]}),Object(r.jsxs)("div",{className:"dailyCalendar homeSection",children:[Object(r.jsx)("div",{className:"homeSectionTitle rem1 textCenter",children:"\uc624\ub298\uc758 \uce98\ub9b0\ub354\uc12c"}),0===s||6===s?t.calendar.map((function(e,t){return Object(r.jsx)(A,{cal:e,index:t,today:o})})):Object(r.jsx)(A,{cal:t.calendar[1],index:1,today:o})]}),Object(r.jsxs)("div",{className:"dailyIsland homeSection",children:[Object(r.jsx)("div",{className:"homeSectionTitle rem1 textCenter",children:"\uc624\ub298\uc758 \ubaa8\ud5d8\uc12c"}),Object(r.jsx)(D,{data:n,today:o})]}),Object(r.jsxs)("div",{className:"dailyFieldBoss homeSection",children:[Object(r.jsx)("div",{className:"homeSectionTitle rem1 textCenter",children:"\uc624\ub298\uc758 \ud544\ub4dc\ubcf4\uc2a4"}),Object(r.jsx)(D,{data:c[s],today:o})]}),Object(r.jsxs)("div",{className:"dailyChaosGate homeSection",children:[Object(r.jsx)("div",{className:"homeSectionTitle rem1 textCenter",children:"\uc624\ub298\uc758 \uce74\uc624\uc2a4 \uac8c\uc774\ud2b8"}),Object(r.jsx)(D,{data:a[s],today:o})]}),Object(r.jsxs)("div",{className:"dailyOcean homeSection",children:[Object(r.jsx)("div",{className:"homeSectionTitle rem1 textCenter",children:"\uc624\ub298\uc758 \ud56d\ud574"}),Object(r.jsx)(D,{data:i[s],today:o}),Object(r.jsx)("div",{className:"alert rem08",children:"\ud56d\ud574 \uad00\ubb38\uc758 \uc720\uc9c0\uc2dc\uac04\uc740 1\ubd84 \uc785\ub2c8\ub2e4."})]})]})},R=function(e){var t=e.homeData;return function(){var e=Object(c.b)();Object(o.useEffect)((function(){var t=setInterval((function(){var t=(new Date).getHours(),n=(new Date).getMinutes(),r=(new Date).getSeconds();0===t&&0===n&&0===r&&e(l.f(!0))}),1e3);return function(){clearInterval(t)}}),[])}(),Object(r.jsx)(F,{homeData:t,dailyIsland:d.c,fieldBoss:d.d,chaosGate:d.b,oceanCont:d.e})};var B=s.a.memo(R,(function(){return!0})),G=!0;t.default=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return{homeData:e.homeData,isLoading:e.isLoading}}),(function(e,t){return!!i.a.compareObj(e,t)})),n=t.homeData,s=t.isLoading;return Object(o.useEffect)((function(){e(l.e(!1))}),[]),Object(r.jsx)(a.a,{title:"Loa Hands",isLoading:s,children:n&&Object(r.jsx)(B,{homeData:n})})}}},[["/EDR",1,2,6,7,8,4,0,3,5]]]);