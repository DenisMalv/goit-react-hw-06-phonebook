"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(885),a=n(2791),c=n(6871),u=n(4390),o=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(null),n=(0,r.Z)(t,2),i=n[0],s=n[1];return(0,a.useEffect)((function(){(0,u.Y5)(e,"reviews").then((function(e){var t=e.results;console.log(t),s(t)}))}),[e]),console.log(e),console.log(i),(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:i.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:n}),(0,o.jsx)("p",{children:r})]},t)}))})}),i&&(0,o.jsx)("p",{children:"No review! :("})]})}},4390:function(e,t,n){n.d(t,{DC:function(){return i},Ny:function(){return p},Y5:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("https://api.themoviedb.org/3/trending/movie/day?api_key=6dae1a863e182d2e5c972909bcd1e575&&page=1");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie?",n={params:{api_key:"6dae1a863e182d2e5c972909bcd1e575",language:"en-US",query:t,page:1}},e.next=4,o().get("https://api.themoviedb.org/3/search/movie?",n);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function e(t){var n,r,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",e.prev=1,e.next=4,o().get("https://api.themoviedb.org/3/movie/".concat(t).concat(n?"/"+n:"","?api_key=6dae1a863e182d2e5c972909bcd1e575&language=en-US"));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),d.apply(this,arguments)}}}]);
//# sourceMappingURL=186.3ac5bd0b.chunk.js.map