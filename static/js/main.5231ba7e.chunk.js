(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(16),a(8)),s=(a(17),a(1)),u=a.n(s),l=a(2),m=a(5),p=a(6),h=a(9),d=a(7),f=a(10),v="https://ipinfo.io";function w(){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"?token=").concat("fe84a098e992c7"));case 2:if(!(t=e.sent).ok){e.next=7;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:throw new Error(t.status);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E="https://api.openweathermap.org/data/2.5/weather";function _(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"?q=").concat(t,"&units=metric&appid=").concat("03841ff6d4590b30d3867c307c212066"));case 2:if(!(a=e.sent).ok){e.next=7;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:throw new Error(a.status);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",main:{humidity:0,pressure:0,temp:0,temp_max:0,temp_min:0},weather:[{}],days:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:return t=e.sent,a=t.city,n=t.country,this.props.onLocationChange({city:a,country:n}),e.next=9,_(a);case 9:r=e.sent,c=r.main,o=r.weather,this.setState({city:a,weather:o,main:c}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.weather[0];return r.a.createElement("div",{className:"today-container"},r.a.createElement("div",{className:"today"},r.a.createElement("span",{className:"today__title"},"Today"),r.a.createElement("div",{className:"today__tempicon"},r.a.createElement("span",{className:"today__icon"},r.a.createElement("i",{className:"owi owi-".concat(e.icon)})),r.a.createElement("span",{className:"today__temperature"},this.state.main.temp," \u2103")),r.a.createElement("span",{className:"today__status"},e.main)))}}]),t}(n.Component),k=function(e){return r.a.createElement("div",{className:"header__location"},e.location?e.location.city:"",e.location?", ".concat(e.location.country):"")},x=function(){var e=new Date,t=new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(e);return r.a.createElement("div",{className:"header__date"},t)},g=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement(k,{location:e.location}),r.a.createElement(x,null))},j=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"navigation__item active"},"Today"),r.a.createElement("div",{className:"navigation__item"},"Tomorrow"),r.a.createElement("div",{className:"navigation__item"},"Next 7 days ->")))},O=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(g,{location:a}),r.a.createElement(N,{onLocationChange:function(e){return c(e)}}),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.5231ba7e.chunk.js.map