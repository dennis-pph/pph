(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ae987":"3799ffcf","chunk-2d0f005f":"d0bfe341","chunk-2d20fcf9":"5823fc11","chunk-b372d344":"fd231371"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-b372d344":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ae987":"31d6cfe0","chunk-2d0f005f":"31d6cfe0","chunk-2d20fcf9":"31d6cfe0","chunk-b372d344":"b8d346d0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="pph/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"30c1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("top"),n("article",[n("sidebar"),n("index")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"top"}},[e._v(" top "),n("span",{staticClass:"loginButton",on:{click:e.showLoginWindow}},[e._v("登录")]),n("transition",{attrs:{name:"loginWindow"}},[e.loginWindowFlag?n("div",{staticClass:"loginWindow"},[n("span",{staticClass:"closeLoginWindowBtn",on:{click:e.closeLoginWindow}},[n("img",{attrs:{src:"img/icons/关闭.svg",alt:""}})]),n("div",[n("label",{attrs:{for:"userName"}},[e._v("用户名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",id:"userName"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"password"}},[e._v("密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"footer"},[n("span",{on:{click:e.login}},[e._v("登录")])])]):e._e()])],1)},u=[],c={name:"top",data:function(){return{loginWindowFlag:!1,userName:"",password:""}},mounted:function(){},methods:{showLoginWindow:function(){this.loginWindowFlag=!0},closeLoginWindow:function(){this.loginWindowFlag=!1},login:function(){}}},s=c,d=(n("bdce"),n("2877")),l=Object(d["a"])(s,i,u,!1,null,"03bc78dc",null),f=l.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sidebar"}},[n("router-link",{attrs:{to:"/home"}},[e._v("首页")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/about/index"}},[e._v("guanyu")]),n("router-link",{attrs:{to:"/about/test1"}},[e._v("guanyu1")]),n("router-link",{attrs:{to:"/about/test2"}},[e._v("guanyu2")])],1)])],1)},m=[],h={name:"sidebar",data:function(){return{}}},b=h,v=(n("cc1e"),Object(d["a"])(b,p,m,!1,null,"4dd884d8",null)),g=v.exports,w=n("726d"),y={name:"app",components:{top:f,sidebar:g,index:w["default"]},data:function(){return{}}},k=y,_=(n("7c55"),Object(d["a"])(k,o,a,!1,null,null,null)),x=_.exports,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(O["a"]);var j=[{path:"/",redirect:"home",component:function(){return Promise.resolve().then(n.bind(null,"726d"))},children:[{path:"home",name:"Home",component:function(){return n.e("chunk-b372d344").then(n.bind(null,"bb51"))}}]},{path:"/about",name:"/About",redirect:"/about/index",component:function(){return Promise.resolve().then(n.bind(null,"726d"))},children:[{path:"/about/index",name:"about主页",component:function(){return n.e("chunk-2d20fcf9").then(n.bind(null,"b4e6"))}},{path:"/about/test1",name:"test1",component:function(){return n.e("chunk-2d0ae987").then(n.bind(null,"0b76"))}},{path:"/about/test2",name:"test2",component:function(){return n.e("chunk-2d0f005f").then(n.bind(null,"9b33"))}}]}],N=new O["a"]({mode:"history",base:"pph/",routes:j}),P=N,E=n("2f62");r["a"].use(E["a"]);var C=new E["a"].Store({modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:P,store:C,render:function(e){return e(x)}}).$mount("#app")},"726d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"index"}},[n("router-view")],1)},o=[],a={name:"index",data:function(){return{}}},i=a,u=(n("9fb7"),n("e082"),n("2877")),c=Object(u["a"])(i,r,o,!1,null,"77c2cc9a",null);t["default"]=c.exports},"761b":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("2395")},"9fb7":function(e,t,n){"use strict";n("30c1")},b2a8:function(e,t,n){},bdce:function(e,t,n){"use strict";n("761b")},cc1e:function(e,t,n){"use strict";n("b2a8")},e082:function(e,t,n){"use strict";n("ffdb")},ffdb:function(e,t,n){}});
//# sourceMappingURL=app.d2d761b7.js.map