"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[919],{6425:function(t,n,r){r.d(n,{C:function(){return u}});var e=r(184),u=function(t){var n=t.children;return(0,e.jsx)("h1",{children:n})}},8579:function(t,n,r){r.d(n,{Av:function(){return d},Ui:function(){return s},jS:function(){return p},yt:function(){return h}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),o=r.n(c);function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/authors");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/authors/".concat(n,"?_embed=books"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/books");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/books/".concat(n,"?_expand=author"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o().defaults.baseURL="http://localhost:4040"},2919:function(t,n,r){r.r(n),r.d(n,{BooksView:function(){return i}});var e=r(8152),u=r(2791),a=r(3504),c=r(8579),o=r(6425),s=r(184),i=function(){var t=(0,u.useState)(null),n=(0,e.Z)(t,2),r=n[0],i=n[1];return(0,u.useEffect)((function(){c.yt().then(i)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.C,{children:"\u041a\u043d\u0438\u0433\u0438"}),r&&(0,s.jsx)("ul",{children:r.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"".concat(t.id),children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=919.0851fbf0.chunk.js.map