!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o,r,i,c,l,m,u=document.querySelector(".main-wrapper"),s=document.querySelector(".interactive-block"),f=document.querySelector(".student"),v=document.querySelector(".student-hand"),d=document.querySelector(".interactive-block"),h=document.querySelector(".determinate"),a=document.querySelector(".logo"),y=document.querySelector(".content-wrapeer"),p=document.querySelector(".money-in-hand1"),b=document.querySelector(".money-in-hand2"),L=document.querySelector(".money-in-hand3"),g=document.querySelector(".title"),S=document.querySelector(".subtitle"),q=(document.querySelector(".drag-btn"),document.querySelector(".tips")),w=document.querySelector(".negative-btn"),E=document.querySelector(".positive-btn"),C=!1,M=0,O=0,x=0,j=d.getBoundingClientRect(),T=j.width,I=j.left,P=f.getBoundingClientRect().width;function _(e){c="touchstart"===e.type?(i=e.touches[0].clientX-M,e.touches[0].clientY-O):(i=e.clientX-M,e.clientY-O),e.target===f&&(C=!0)}function B(e){i=o,c=r,C=!1}function k(e){var t;C&&(e.preventDefault(),r="touchmove"===e.type?(o=e.touches[0].clientX-i,e.touches[0].clientY-c):(o=e.clientX-i,e.clientY-c),O=r,(M=o)<0-P/2||T-I+P/2<o||(t=o,f.style.transform="translate3d("+t+"px, 0px, 0)"))}s.addEventListener("touchstart",_,!1),s.addEventListener("touchend",B,!1),u.addEventListener("touchmove",k,!1),s.addEventListener("mousedown",_,!1),s.addEventListener("mouseup",B,!1),u.addEventListener("mousemove",k,!1);var R=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"addMoney",function(){var e=document.createElement("div");e.style.left="".concat(Math.floor(45*Math.random()+25),"%"),u.append(e),e.classList.add("money"),t.moneyCash.push(e)}),n(this,"deleteFirstMoneyEl",function(){t.moneyCash[0].remove(),t.moneyCash.shift()}),n(this,"checker",function(){t.moneyCash.forEach(function(e){var t=e.getBoundingClientRect(),n=t.left,o=t.top,r=t.width,i=t.height,c=v.getBoundingClientRect(),u=c.left,s=c.top,d=c.width,a=c.height;s<=o+i&&o<=s+a&&u<=n+r&&n<=u+d&&(console.log("BINGO"),e.remove(),x+=33.3,h.setAttribute("style","width: ".concat(x,"%")),30<x&&p.classList.remove("hidden"),60<x&&b.classList.remove("hidden"),99<=x&&(clearInterval(l),clearInterval(m),clearInterval(void 0),f.classList.add("happy"),L.classList.remove("hidden"),g.innerText="Запишись на курс",S.innerText="Кращі студенти стануть тім-лідерами!",g.classList.remove("visibile"),S.classList.remove("visibile"),q.classList.add("hidden"),E.classList.remove("hidden"),w.classList.remove("hidden")))})}),this.moneyCash=[]};function X(){y.removeEventListener("mousedown",X,!1),l=setInterval(function(){R.addMoney()},2e3)}m=setInterval(function(){R.checker()},16),addEventListener("DOMContentLoaded",function(){a.classList.remove("hidden"),setTimeout(function(){a.classList.add("logo-to-top")},3e3),setTimeout(function(){y.classList.remove("hidden"),y.addEventListener("mousedown",X,!1)},5500),setTimeout(function(){g.classList.add("visibile"),S.classList.add("visibile")},6500)})}]);
//# sourceMappingURL=main.js.map