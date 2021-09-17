(()=>{"use strict";var t={97:(t,e,n)=>{t.exports=n.p+"659413b35a6c8cf1d9bb.jpeg"},433:(t,e,n)=>{t.exports=n.p+"da062511ed48aa11161f.png"},148:(t,e,n)=>{t.exports=n.p+"c876c4c2c16607581e00.jpg"},481:(t,e,n)=>{t.exports=n.p+"7166639d3c56379f9a2f.png"},246:(t,e,n)=>{t.exports=n.p+"54d5238d1d23c437373e.png"},524:(t,e,n)=>{t.exports=n.p+"41dae751ceb9ba8010f1.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{const t=function(t,e,n){const r=document.createElement(t);return r.textContent=e,void 0===n||0===Object.keys(n).length||(n.id&&function(t,e){t.id=e}(r,n.id),n.class&&function(t,e){"string"==typeof e?t.classList.add(e):e.forEach((e=>{t.classList.add(e)}))}(r,n.class),void 0!==n.attributes&&0!==Object.keys(n.attributes).length&&function(t,e){for(let n in e)t.setAttribute(n,e[n])}(r,n.attributes)),r},e=function(t,e){return e.forEach((e=>{t.appendChild(e)})),t},r=function(t){return t.textContent="",t},o={body:document.body,contentDiv:document.querySelector("#content"),tabs:document.querySelectorAll(".tab")};var s=n(433);function a(n,r){const o=t("div","",{class:"quote-container"}),s=[t("p",`"${n}"`,{class:"quote"}),t("p",`- ${r}`,{class:"author"})];return e(o,s),o}function c(){const n=t("div","",{class:"hours-container"}),r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((n=>function(n){let r;r="Saturday"===n?"07:00AM - 11:00AM":"Sunday"===n?"08:00AM - 12:00PM":"Closed*";const o=t("div","",{class:"day"}),s=[t("p",`${n}: `,{class:"bold"}),t("p",r)];return e(o,s),o}(n)));return e(n,r),n}function i(){const n=t("div","",{class:["home","card"]}),r=t("h2","Location"),o=t("p","Located at the prestigious Cul-de-Sac"),a=function(){const n=t("figure","",{id:"cul-de-sac-fig"}),r=[t("img","",{attributes:{src:s,alt:"Photo of The Cul-de-Sac"}}),t("figcaption","Breakfast bar located at the pink house with the light-brown roof. You can't miss it.")];return e(n,r),n}();return e(n,[r,o,a]),n}function u(){const n=t("div","",{id:"content-wrapper"}),r=function(){const n=t("div","",{class:["home","card"]}),r=[t("h2","About"),t("p","The finest breakfast establishment in the Cul-de-Sac. From gravy to buttered toast, we have foods that will satisfy most.")];return e(n,r),n}(),o=function(){const n=t("div","",{class:["home","card"]}),r=[t("h2","Testimonials"),a("Very impressive, Ed Boy...","Ralph"),a("Through the teeth and under the gums! Watch out, tummy! Here it comes!","Jimmy")];return e(n,r),n}(),s=function(){const n=t("div","",{class:["home","card"]}),r=[t("h2","Hours"),c(),t("p","*Note: Closed Monday - Friday due to school conflicts",{class:"aside"})];return e(n,r),n}(),u=[r,o,s,i()];return e(n,u),n}function d(){const n=t("div","",{class:"content-wrapper"}),r=[t("h1","Ed, Edd, n Eddy's Breakfast Bar"),u()];return e(n,r),n}var l=n(481),h=n(246),p=n(97),f=n(148),b=n(524);function m(n,r,o,s,a){const c=t("div","",{class:["menu","card"]}),i=[t("h3",n),t("p",r,{class:"description"}),t("p",`$${o}`,{class:"price"}),t("img","",{attributes:{src:s,alt:a}})];return e(c,i),c}function g(){const n=t("div","",{id:"menu-container"}),r=t("h2","Drinks"),o=function(){const n=t("div","",{class:"items-container"}),r=[m("Gravy","Ed's delicious homemade gravy straight from the tub. Yum!",3,l,"A tub of gravy"),m("Armenian Secret Hot Sauce","A real, grade-A gut burner. (Tacos not included)",10,h,"Eddy holding a jug of hot sauce")];return e(n,r),n}(),s=t("hr",""),a=t("h2","Toasts"),c=function(){const n=t("div","",{class:"items-container"}),r=[m("Buttered Toast","Buttered toast! The cornerstone of the breakfast bar menu.",5,p,"Buttered toast"),m("French Toast","Buttered toast for those who are feeling extra fancy.",7,f,"French toast")];return e(n,r),n}(),i=t("hr",""),u=t("h2","Dessert"),d=function(){const n=t("div","",{class:"items-container"}),r=[m("Jawbreaker","The Cul-de-Sac's treasured hard candy. Don't bite down!",1,b,"Ed eating a jawbreaker while also holding one")];return e(n,r),n}();return e(n,[r,o,s,a,c,i,u,d]),n}function y(){const n=t("div","",{class:"content-wrapper"}),r=[t("h1","Menu"),g()];return e(n,r),n}function v(){}function w(t){let e;const n=t.target.id;"home-btn"===n?e=d:"menu-btn"===n?e=y:"contact-btn"===n&&(e=v);const s=o.contentDiv;r(s);const a=e();s.appendChild(a)}o.tabs.forEach((t=>{t.addEventListener("click",w)}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E2RSxFQUFxQjVCLEVBQ1AsYUFBUGpELEVBQ1A2RSxFQUFxQkosRUFDUCxnQkFBUHpFLElBQ1A2RSxFQUFxQkYsR0FJekIsTUFBTXhELEVBQWFGLEVBQVNFLFdBQzVCNUIsRUFBc0I0QixHQUd0QixNQUFNNEQsRUFBVUYsSUFDaEIxRCxFQUFXSCxZQUFZK0QsR0FLVjlELEVBQVNJLEtBQ2pCZixTQUFRMEUsSUFDVEEsRUFBSUMsaUJBQWlCLFFBQVNMLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBkb21VdGlsIG1vZHVsZSAtIGNvbnRhaW5zIGZ1bmN0aW9ucyB0byBzaW1wbGlmeSBET00gbm9kZSBtYW5pcHVsYXRpb24gYW5kIGNyZWF0aW9uXG5jb25zdCBkb21VdGlsID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIF9hZGRJZCBmdW5jdGlvbiAtIGFkZHMgaWQgdG8gYSBzcGVjaWZpZWQgZWxlbWVudFxuICAgIGZ1bmN0aW9uIF9hZGRJZChlbGVtLCBpZCkge1xuICAgICAgICBlbGVtLmlkID0gaWQ7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICBcbiAgICAvLyBfYWRkQ2xhc3MgLSBhZGRzIHNwZWNpZmllZCBjbGFzc2VzIHRvIGFuIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBfYWRkQ2xhc3MoZWxlbSwgY2xhc3Nlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNsYXNzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGFzc2VzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIC8vIF9hZGRBdHRyaWJ1dGUgLSBhZGRzIHNwZWNpZmllZCBhdHRyaWJ1dGVzIHRvIGFuIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBfYWRkQXR0cmlidXRlKGVsZW0sIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgXG4gICAgLyogY3JlYXRlIG1ldGhvZCAtIGNyZWF0ZXMgYW4gZWxlbWVudCB3aXRoIHNwZWNpZmllZCB0YWcsIGdpdmVuIHRleHQsIGFuZCBzdXBwbGllZCBvcHRpb25zXG4gICAgb3B0aW9ucyBwYXJlbXRlciBpcyBvZiB0aGUgZm9ybTogXG4gICAge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICBjbGFzczogU3RyaW5nIHwgW1N0cmluZ11cbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgYXR0cmlidXRlMTogU3RyaW5nLFxuICAgICAgICAgICAgYXR0cmlidXRlMjogU3RyaW5nXG4gICAgICAgIH1cbiAgICB9XG4gICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGUodGFnLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIC8vIHJldHVybiB0aGUgZWxlbWVudCBpZiBubyBvcHRpb25zIHdlcmUgc3BlY2lmaWVkXG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBzcGVjaWZpZWQgaWRcbiAgICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgICAgIF9hZGRJZChlbGVtLCBvcHRpb25zLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBzcGVjaWZpZWQgY2xhc3NcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xhc3MpIHtcbiAgICAgICAgICAgIF9hZGRDbGFzcyhlbGVtLCBvcHRpb25zLmNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBzcGVjaWZpZWQgYXR0cmlidXRlc1xuICAgICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQgJiYgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIF9hZGRBdHRyaWJ1dGUoZWxlbSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIC8vIGFwcGVuZENoaWxkcmVuIG1ldGhvZCAtIGFwcGVuZHMgYW4gYXJyYXkgb2YgY2hpbGRyZW4gdG8gdGhlIHBhcmVudCBub2RlIGluIHRoZSBwcm92aWRlZCBvcmRlclxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVDb250ZW50IG1ldGhvZCAtIGVtcHRpZXMgdGhlIGNvbnRlbnQgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICBmdW5jdGlvbiByZW1vdmVDb250ZW50KGVsZW0pIHtcbiAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGFwcGVuZENoaWxkcmVuLFxuICAgICAgICByZW1vdmVDb250ZW50XG4gICAgfTtcbn0pKCk7XG5cbi8vIGRvbUNhY2hlIC0gY29udGFpbnMgY29tbW9ubHkgdXNlZCBET00gbm9kZXMgdG8gcmVkdWNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgY2FsbHNcbmNvbnN0IGRvbUNhY2hlID0ge1xuICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXG4gICAgY29udGVudERpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSxcbiAgICB0YWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJylcbn07XG5cbmV4cG9ydCB7IGRvbVV0aWwsIGRvbUNhY2hlIH07IiwiaW1wb3J0IHsgZG9tVXRpbCB9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCBjdWxEZVNhY0ltYWdlIGZyb20gXCIuL2ltYWdlcy9jdWwtZGUtc2FjLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVRdW90ZShxdW90ZSwgYXV0aG9yKSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgcXVvdGVDb250YWluZXIgPSBkb21VdGlsLmNyZWF0ZSgnZGl2JywgJycsIHsgY2xhc3M6ICdxdW90ZS1jb250YWluZXInIH0pO1xuXG4gICAgLy8gY2hpbGRyZW5cbiAgICBjb25zdCBxdW90ZVAgPSBkb21VdGlsLmNyZWF0ZSgncCcsIGBcIiR7cXVvdGV9XCJgLCB7IGNsYXNzOiAncXVvdGUnIH0pO1xuICAgIGNvbnN0IHF1b3RlQXV0aG9yUCA9IGRvbVV0aWwuY3JlYXRlKCdwJywgYC0gJHthdXRob3J9YCwgeyBjbGFzczogJ2F1dGhvcicgfSk7XG5cbiAgICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbIHF1b3RlUCwgcXVvdGVBdXRob3JQIF1cbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKHF1b3RlQ29udGFpbmVyLCBjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gcXVvdGVDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURheShkYXkpIHtcbiAgICAvLyBIb3VycyBmb3IgZWFjaCBkYXk6XG4gICAgbGV0IGhvdXJzO1xuICAgIGlmIChkYXkgPT09ICdTYXR1cmRheScpIHtcbiAgICAgICAgaG91cnMgPSAnMDc6MDBBTSAtIDExOjAwQU0nO1xuICAgIH0gZWxzZSBpZiAoZGF5ID09PSAnU3VuZGF5Jykge1xuICAgICAgICBob3VycyA9ICcwODowMEFNIC0gMTI6MDBQTSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG91cnMgPSAnQ2xvc2VkKic7XG4gICAgfVxuXG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9tVXRpbC5jcmVhdGUoJ2RpdicsICcnLCB7IGNsYXNzOiAnZGF5JyB9KTtcblxuICAgIC8vIGNoaWxkcmVuXG4gICAgY29uc3QgZGF5UCA9IGRvbVV0aWwuY3JlYXRlKCdwJywgYCR7ZGF5fTogYCwgeyBjbGFzczogJ2JvbGQnIH0pO1xuICAgIGNvbnN0IGhvdXJzUCA9IGRvbVV0aWwuY3JlYXRlKCdwJywgaG91cnMpO1xuXG4gICAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudFxuICAgIGNvbnN0IGNoaWxkcmVuID0gWyBkYXlQLCBob3Vyc1AgXTtcbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKGRheUNvbnRhaW5lciwgY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGRheUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNDb250YWluZXIoKSB7XG4gICAgY29uc3QgZGF5cyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcbiAgICBcbiAgICAvLyBwYXJlbnRcbiAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnJywgeyBjbGFzczogJ2hvdXJzLWNvbnRhaW5lcicgfSk7XG5cbiAgICAvLyBjaGlsZHJlblxuICAgIGNvbnN0IGRheUVsZW1zID0gZGF5cy5tYXAoZGF5ID0+IHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURheShkYXkpO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudFxuICAgIGRvbVV0aWwuYXBwZW5kQ2hpbGRyZW4oaG91cnNDb250YWluZXIsIGRheUVsZW1zKTtcbiAgICBcbiAgICByZXR1cm4gaG91cnNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpZ3VyZSgpIHtcbiAgICAvLyBwYXJlbnRcbiAgICBjb25zdCBmaWd1cmUgPSBkb21VdGlsLmNyZWF0ZSgnZmlndXJlJywgJycsIHsgaWQ6ICdjdWwtZGUtc2FjLWZpZycgfSk7XG5cbiAgICAvLyBjaGlsZHJlblxuICAgIGNvbnN0IGltZyA9IGRvbVV0aWwuY3JlYXRlKCdpbWcnLCAnJywgeyBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHNyYzogY3VsRGVTYWNJbWFnZSxcbiAgICAgICAgYWx0OiBcIlBob3RvIG9mIFRoZSBDdWwtZGUtU2FjXCJcbiAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZmlnQ2FwdGlvbiA9IGRvbVV0aWwuY3JlYXRlKCdmaWdjYXB0aW9uJyxcbiAgICAgICAgXCJCcmVha2Zhc3QgYmFyIGxvY2F0ZWQgYXQgdGhlIHBpbmsgaG91c2Ugd2l0aCB0aGUgbGlnaHQtYnJvd24gcm9vZi4gWW91IGNhbid0IG1pc3MgaXQuXCIpXG5cbiAgICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbIGltZywgZmlnQ2FwdGlvbiBdO1xuICAgIGRvbVV0aWwuYXBwZW5kQ2hpbGRyZW4oZmlndXJlLCBjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlndXJlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBYm91dENhcmQoKSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgY2FyZCA9IGRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnJywgeyBjbGFzczogWyAnaG9tZScsICdjYXJkJyBdfSk7XG5cbiAgICAvLyBjaGlsZHJlblxuICAgIGNvbnN0IGgyID0gZG9tVXRpbC5jcmVhdGUoJ2gyJywgJ0Fib3V0Jyk7XG4gICAgY29uc3QgcCA9IGRvbVV0aWwuY3JlYXRlKCdwJywgXCJUaGUgZmluZXN0IGJyZWFrZmFzdCBlc3RhYmxpc2htZW50IGluIHRoZSBDdWwtZGUtU2FjLiBGcm9tIGdyYXZ5IHRvIGJ1dHRlcmVkIHRvYXN0LCB3ZSBoYXZlIGZvb2RzIHRoYXQgd2lsbCBzYXRpc2Z5IG1vc3QuXCIpO1xuXG4gICAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudFxuICAgIGNvbnN0IGNoaWxkcmVuID0gWyBoMiwgcCBdO1xuICAgIGRvbVV0aWwuYXBwZW5kQ2hpbGRyZW4oY2FyZCwgY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlc3RpbW9uaWFsc0NhcmQoKSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgY2FyZCA9IGRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnJywgeyBjbGFzczogWyAnaG9tZScsICdjYXJkJyBdfSk7XG5cbiAgICAvLyBjaGlsZHJlblxuICAgIGNvbnN0IGgyID0gZG9tVXRpbC5jcmVhdGUoJ2gyJywgJ1Rlc3RpbW9uaWFscycpO1xuICAgIGNvbnN0IHF1b3RlMSA9IGNyZWF0ZVF1b3RlKCdWZXJ5IGltcHJlc3NpdmUsIEVkIEJveS4uLicsICdSYWxwaCcpO1xuICAgIGNvbnN0IHF1b3RlMiA9IGNyZWF0ZVF1b3RlKCdUaHJvdWdoIHRoZSB0ZWV0aCBhbmQgdW5kZXIgdGhlIGd1bXMhIFdhdGNoIG91dCwgdHVtbXkhIEhlcmUgaXQgY29tZXMhJywgJ0ppbW15Jyk7XG5cbiAgICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbIGgyLCBxdW90ZTEsIHF1b3RlMiBdO1xuICAgIGRvbVV0aWwuYXBwZW5kQ2hpbGRyZW4oY2FyZCwgY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzQ2FyZCgpIHtcbiAgICAvLyBwYXJlbnRcbiAgICBjb25zdCBjYXJkID0gZG9tVXRpbC5jcmVhdGUoJ2RpdicsICcnLCB7IGNsYXNzOiBbICdob21lJywgJ2NhcmQnIF19KTtcblxuICAgIC8vIGNoaWxkcmVuXG4gICAgY29uc3QgaDIgPSBkb21VdGlsLmNyZWF0ZSgnaDInLCAnSG91cnMnKTtcbiAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGNyZWF0ZUhvdXJzQ29udGFpbmVyKCk7XG4gICAgY29uc3QgcCA9IGRvbVV0aWwuY3JlYXRlKCdwJywgJypOb3RlOiBDbG9zZWQgTW9uZGF5IC0gRnJpZGF5IGR1ZSB0byBzY2hvb2wgY29uZmxpY3RzJywge1xuICAgICAgICBjbGFzczogJ2FzaWRlJ1xuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudFxuICAgIGNvbnN0IGNoaWxkcmVuID0gWyBoMiwgaG91cnNDb250YWluZXIsIHAgXTtcbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKGNhcmQsIGNoaWxkcmVuKTtcbiAgICBcbiAgICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25DYXJkKCkge1xuICAgIC8vIHBhcmVudFxuICAgIGNvbnN0IGNhcmQgPSBkb21VdGlsLmNyZWF0ZSgnZGl2JywgJycsIHsgY2xhc3M6IFsgJ2hvbWUnLCAnY2FyZCcgXX0pO1xuXG4gICAgLy8gY2hpbGRyZW5cbiAgICBjb25zdCBoMiA9IGRvbVV0aWwuY3JlYXRlKCdoMicsICdMb2NhdGlvbicpO1xuICAgIGNvbnN0IHAgPSBkb21VdGlsLmNyZWF0ZSgncCcsICdMb2NhdGVkIGF0IHRoZSBwcmVzdGlnaW91cyBDdWwtZGUtU2FjJyk7XG4gICAgY29uc3QgZmlndXJlID0gY3JlYXRlRmlndXJlKCk7XG5cbiAgICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbIGgyLCBwLCBmaWd1cmUgXTtcbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKGNhcmQsIGNoaWxkcmVuKTtcblxuICAgIHJldHVybiBjYXJkOyAgICBcbn1cblxuLy8gQ3JlYXRlcyBkaXYgdGhhdCBob3VzZXMgQWJvdXQsIFRlc3RpbW9uaWFscywgSG91cnMsIGFuZCBMb2NhdGlvbiBjYXJkc1xuZnVuY3Rpb24gY3JlYXRlSG9tZUNvbnRhaW5lcigpIHtcbiAgICAvLyBwYXJlbnRcbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9tVXRpbC5jcmVhdGUoJ2RpdicsICcnLCB7IGlkOiAnY29udGVudC13cmFwcGVyJyB9KVxuXG4gICAgLy8gY2hpbGRyZW5cbiAgICBjb25zdCBhYm91dENhcmQgPSBjcmVhdGVBYm91dENhcmQoKTtcbiAgICBjb25zdCB0ZXN0aW1vbmlhbHNDYXJkID0gY3JlYXRlVGVzdGltb25pYWxzQ2FyZCgpO1xuICAgIGNvbnN0IGhvdXJzQ2FyZCA9IGNyZWF0ZUhvdXJzQ2FyZCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ2FyZCA9IGNyZWF0ZUxvY2F0aW9uQ2FyZCgpO1xuXG4gICAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudFxuICAgIGNvbnN0IGNoaWxkcmVuID0gWyBhYm91dENhcmQsIHRlc3RpbW9uaWFsc0NhcmQsIGhvdXJzQ2FyZCwgbG9jYXRpb25DYXJkIF07XG4gICAgZG9tVXRpbC5hcHBlbmRDaGlsZHJlbihob21lQ29udGFpbmVyLCBjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlcyBob21lcGFnZSBjb250ZW50IHdyYXBwZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBwYWdlIGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVwYWdlQ29udGVudCgpIHtcbiAgICAvLyBDcmVhdGUgY29udGVudCB3cmFwcGVyIGRpdlxuICAgIGNvbnN0IGhvbWVwYWdlQ29udGVudCA9IGRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnJywgeyBjbGFzczogJ2NvbnRlbnQtd3JhcHBlcicgfSk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGhvbWVwYWdlIGgxXG4gICAgY29uc3QgaDEgPSBkb21VdGlsLmNyZWF0ZSgnaDEnLCBcIkVkLCBFZGQsIG4gRWRkeSdzIEJyZWFrZmFzdCBCYXJcIik7XG5cbiAgICAvLyBDcmVhdGUgaG9tZSBjb250YWluZXIgZGl2XG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGNyZWF0ZUhvbWVDb250YWluZXIoKTtcblxuICAgIC8vIEFwcGVuZCBob21lcGFnZUNvbnRlbnQgY2hpbGRyZW5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFsgaDEsIGhvbWVDb250YWluZXIgXTtcbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKGhvbWVwYWdlQ29udGVudCwgY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGhvbWVwYWdlQ29udGVudDtcbn0gXG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVwYWdlQ29udGVudCB9OyIsImltcG9ydCB7IGRvbVV0aWwgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgZ3JhdnlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvZ3JhdnkucG5nXCI7XG5pbXBvcnQgaG90U2F1Y2VJbWFnZSBmcm9tIFwiLi9pbWFnZXMvaG90LXNhdWNlLnBuZ1wiO1xuaW1wb3J0IGJ1dHRlcmVkVG9hc3RJbWFnZSBmcm9tIFwiLi9pbWFnZXMvYnV0dGVyZWQtdG9hc3QuanBlZ1wiO1xuaW1wb3J0IGZyZW5jaFRvYXN0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2ZyZW5jaC10b2FzdC5qcGdcIjtcbmltcG9ydCBqYXdicmVha2VySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2phd2JyZWFrZXIucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKGl0ZW1OYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltZ1NyYywgaW1nQWx0KSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgbWVudUNhcmQgPSBkb21VdGlsLmNyZWF0ZSgnZGl2JywgJycsIHsgY2xhc3M6IFsgJ21lbnUnLCAnY2FyZCddfSk7XG5cbiAgICAvLyBjaGlsZHJlblxuICAgIGNvbnN0IGgzID0gZG9tVXRpbC5jcmVhdGUoJ2gzJywgaXRlbU5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvbVV0aWwuY3JlYXRlKCdwJywgZGVzY3JpcHRpb24sIHsgY2xhc3M6ICdkZXNjcmlwdGlvbicgfSk7XG4gICAgY29uc3QgcHJpY2VQID0gZG9tVXRpbC5jcmVhdGUoJ3AnLCBgJCR7cHJpY2V9YCwgeyBjbGFzczogJ3ByaWNlJyB9KTtcbiAgICBjb25zdCBpbWcgPSBkb21VdGlsLmNyZWF0ZSgnaW1nJywgJycsIHtcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgc3JjOiBpbWdTcmMsXG4gICAgICAgICAgICBhbHQ6IGltZ0FsdFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhcHBlbmQgY2hpbGRyZW4gdG8gcGFyZW50XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbIGgzLCBkZXNjcmlwdGlvblAsIHByaWNlUCwgaW1nIF07XG4gICAgZG9tVXRpbC5hcHBlbmRDaGlsZHJlbihtZW51Q2FyZCwgY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIG1lbnVDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcmlua3NDb250YWluZXIoKSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgZHJpbmtzQ29udGFpbmVyID0gZG9tVXRpbC5jcmVhdGUoJ2RpdicsICcnLCB7IGNsYXNzOiAnaXRlbXMtY29udGFpbmVyJyB9KTtcblxuICAgIC8vIGNoaWxkcmVuXG4gICAgY29uc3QgZ3JhdnlDYXJkID0gY3JlYXRlTWVudUNhcmQoXG4gICAgICAgICdHcmF2eScsXG4gICAgICAgIFwiRWQncyBkZWxpY2lvdXMgaG9tZW1hZGUgZ3Jhdnkgc3RyYWlnaHQgZnJvbSB0aGUgdHViLiBZdW0hXCIsXG4gICAgICAgIDMsXG4gICAgICAgIGdyYXZ5SW1hZ2UsXG4gICAgICAgICdBIHR1YiBvZiBncmF2eSdcbiAgICApO1xuXG4gICAgY29uc3QgaG90U2F1Y2VDYXJkID0gY3JlYXRlTWVudUNhcmQoXG4gICAgICAgICdBcm1lbmlhbiBTZWNyZXQgSG90IFNhdWNlJyxcbiAgICAgICAgJ0EgcmVhbCwgZ3JhZGUtQSBndXQgYnVybmVyLiAoVGFjb3Mgbm90IGluY2x1ZGVkKScsXG4gICAgICAgIDEwLFxuICAgICAgICBob3RTYXVjZUltYWdlLFxuICAgICAgICAnRWRkeSBob2xkaW5nIGEganVnIG9mIGhvdCBzYXVjZSdcbiAgICApO1xuXG4gICAgLy8gYXBwZW5kIGNoaWxkcmVuIHRvIHBhcmVudFxuICAgIGNvbnN0IGNoaWxkcmVuID0gWyBncmF2eUNhcmQsIGhvdFNhdWNlQ2FyZCBdO1xuICAgIGRvbVV0aWwuYXBwZW5kQ2hpbGRyZW4oZHJpbmtzQ29udGFpbmVyLCBjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZHJpbmtzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2FzdHNDb250YWluZXIoKSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgdG9hc3RzQ29udGFpbmVyID0gZG9tVXRpbC5jcmVhdGUoJ2RpdicsICcnLCB7IGNsYXNzOiAnaXRlbXMtY29udGFpbmVyJyB9KTtcblxuICAgIC8vIGNoaWxkcmVuXG4gICAgY29uc3QgYnV0dGVyZWRUb2FzdENhcmQgPSBjcmVhdGVNZW51Q2FyZChcbiAgICAgICAgJ0J1dHRlcmVkIFRvYXN0JyxcbiAgICAgICAgJ0J1dHRlcmVkIHRvYXN0ISBUaGUgY29ybmVyc3RvbmUgb2YgdGhlIGJyZWFrZmFzdCBiYXIgbWVudS4nLFxuICAgICAgICA1LFxuICAgICAgICBidXR0ZXJlZFRvYXN0SW1hZ2UsXG4gICAgICAgIFwiQnV0dGVyZWQgdG9hc3RcIlxuICAgICk7XG5cbiAgICBjb25zdCBmcmVuY2hUb2FzdENhcmQgPSBjcmVhdGVNZW51Q2FyZChcbiAgICAgICAgJ0ZyZW5jaCBUb2FzdCcsXG4gICAgICAgICdCdXR0ZXJlZCB0b2FzdCBmb3IgdGhvc2Ugd2hvIGFyZSBmZWVsaW5nIGV4dHJhIGZhbmN5LicsXG4gICAgICAgIDcsXG4gICAgICAgIGZyZW5jaFRvYXN0SW1hZ2UsXG4gICAgICAgICdGcmVuY2ggdG9hc3QnXG4gICAgKTtcblxuICAgIC8vIGFwcGVuZCBjaGlsZHJlbiB0byBwYXJlbnRcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsgYnV0dGVyZWRUb2FzdENhcmQsIGZyZW5jaFRvYXN0Q2FyZCBdO1xuICAgIGRvbVV0aWwuYXBwZW5kQ2hpbGRyZW4odG9hc3RzQ29udGFpbmVyLCBjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gdG9hc3RzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0Q29udGFpbmVyKCkge1xuICAgIC8vIHBhcmVudFxuICAgIGNvbnN0IGRlc3NlcnRDb250YWluZXIgPSBkb21VdGlsLmNyZWF0ZSgnZGl2JywgJycsIHsgY2xhc3M6ICdpdGVtcy1jb250YWluZXInIH0pO1xuXG4gICAgLy8gY2hpbGRyZW5cbiAgICBjb25zdCBqYXdicmVha2VyQ2FyZCA9IGNyZWF0ZU1lbnVDYXJkKFxuICAgICAgICAnSmF3YnJlYWtlcicsXG4gICAgICAgIFwiVGhlIEN1bC1kZS1TYWMncyB0cmVhc3VyZWQgaGFyZCBjYW5keS4gRG9uJ3QgYml0ZSBkb3duIVwiLFxuICAgICAgICAxLFxuICAgICAgICBqYXdicmVha2VySW1hZ2UsXG4gICAgICAgICdFZCBlYXRpbmcgYSBqYXdicmVha2VyIHdoaWxlIGFsc28gaG9sZGluZyBvbmUnXG4gICAgKTtcblxuICAgIC8vIGFwcGVuZCBjaGlsZHJlbiB0byBwYXJlbnRcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsgamF3YnJlYWtlckNhcmQgXTtcbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKGRlc3NlcnRDb250YWluZXIsIGNoaWxkcmVuKTtcblxuICAgIHJldHVybiBkZXNzZXJ0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q29udGFpbmVyKCkge1xuICAgIC8vIHBhcmVudFxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb21VdGlsLmNyZWF0ZSgnZGl2JywgJycsIHsgaWQ6ICdtZW51LWNvbnRhaW5lcicgfSk7XG5cbiAgICAvLyBjaGlsZHJlblxuICAgIGNvbnN0IGRyaW5rc0gyID0gZG9tVXRpbC5jcmVhdGUoJ2gyJywgJ0RyaW5rcycpO1xuICAgIGNvbnN0IGRyaW5rc0NvbnRhaW5lciA9IGNyZWF0ZURyaW5rc0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IGhyMSA9IGRvbVV0aWwuY3JlYXRlKCdocicsICcnKTtcblxuICAgIGNvbnN0IHRvYXN0c0gyID0gZG9tVXRpbC5jcmVhdGUoJ2gyJywgJ1RvYXN0cycpO1xuICAgIGNvbnN0IHRvYXN0c0NvbnRhaW5lciA9IGNyZWF0ZVRvYXN0c0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IGhyMiA9IGRvbVV0aWwuY3JlYXRlKCdocicsICcnKTtcblxuICAgIGNvbnN0IGRlc3NlcnRIMiA9IGRvbVV0aWwuY3JlYXRlKCdoMicsICdEZXNzZXJ0Jyk7XG4gICAgY29uc3QgZGVzc2VydENvbnRhaW5lciA9IGNyZWF0ZURlc3NlcnRDb250YWluZXIoKTtcblxuICAgIC8vIGFwcGVuZCBjaGlsZHJlbiB0byBwYXJlbnRcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsgXG4gICAgICAgIGRyaW5rc0gyLCBcbiAgICAgICAgZHJpbmtzQ29udGFpbmVyLCBcbiAgICAgICAgaHIxLCBcbiAgICAgICAgdG9hc3RzSDIsIFxuICAgICAgICB0b2FzdHNDb250YWluZXIsIFxuICAgICAgICBocjIsIFxuICAgICAgICBkZXNzZXJ0SDIsIFxuICAgICAgICBkZXNzZXJ0Q29udGFpbmVyICAgIFxuICAgIF07XG4gICAgZG9tVXRpbC5hcHBlbmRDaGlsZHJlbihtZW51Q29udGFpbmVyLCBjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRlbnQoKSB7XG4gICAgLy8gcGFyZW50XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb21VdGlsLmNyZWF0ZSgnZGl2JywgJycsIHsgY2xhc3M6ICdjb250ZW50LXdyYXBwZXInIH0pO1xuXG4gICAgLy8gY2hpbGRyZW5cbiAgICBjb25zdCBoMSA9IGRvbVV0aWwuY3JlYXRlKCdoMScsICdNZW51Jyk7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZU1lbnVDb250YWluZXIoKTtcblxuICAgIC8vIGFwcGVuZCBjaGlsZHJlbiB0byBwYXJlbnRcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsgaDEsIG1lbnVDb250YWluZXIgXTtcbiAgICBkb21VdGlsLmFwcGVuZENoaWxkcmVuKG1lbnVDb250ZW50LCBjaGlsZHJlbik7XG4gICAgXG4gICAgcmV0dXJuIG1lbnVDb250ZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVNZW51Q29udGVudCB9OyIsImltcG9ydCB7IGRvbVV0aWwgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RDb250ZW50KCkge1xuICAgIFxufVxuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0Q29udGVudCB9OyIsImltcG9ydCB7IGRvbVV0aWwsIGRvbUNhY2hlIH0gZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVwYWdlQ29udGVudCB9IGZyb20gJy4vaG9tZXBhZ2UuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudUNvbnRlbnQgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdENvbnRlbnQgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG4vLyBvbkJ1dHRvbkNsaWNrIC0gaGFuZGxlcyBwYWdlIHRhYiBidXR0b24gY2xpY2sgbG9naWNcbmZ1bmN0aW9uIG9uQnV0dG9uQ2xpY2soZSkge1xuICAgIC8vIHRhYkNvbnRlbnRGdW5jdGlvbiB3aWxsIGhvbGQgdGhlIGFwcHJvcHJpYXRlIGNvbnRlbnQgZ2VuZXJhdGlvbiBmdW5jdGlvblxuICAgIGxldCB0YWJDb250ZW50RnVuY3Rpb247XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5pZDtcblxuICAgIGlmIChpZCA9PT0gJ2hvbWUtYnRuJykge1xuICAgICAgICB0YWJDb250ZW50RnVuY3Rpb24gPSBjcmVhdGVIb21lcGFnZUNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmIChpZCA9PT0gJ21lbnUtYnRuJykge1xuICAgICAgICB0YWJDb250ZW50RnVuY3Rpb24gPSBjcmVhdGVNZW51Q29udGVudDtcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnY29udGFjdC1idG4nKSB7XG4gICAgICAgIHRhYkNvbnRlbnRGdW5jdGlvbiA9IGNyZWF0ZUNvbnRhY3RDb250ZW50O1xuICAgIH1cblxuICAgIC8vIENsZWFyICNjb250ZW50IGRpdlxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb21DYWNoZS5jb250ZW50RGl2O1xuICAgIGRvbVV0aWwucmVtb3ZlQ29udGVudChjb250ZW50RGl2KTtcblxuICAgIC8vIENyZWF0ZSBuZXcgY29udGVudCBhbmQgYXBwZW5kIHRvIGNvbnRlbnREaXZcbiAgICBjb25zdCBjb250ZW50ID0gdGFiQ29udGVudEZ1bmN0aW9uKCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuLy8gYXNzaWduVGFiRXZlbnRzIC0gYXNzaWducyBldmVudCBsaXN0ZW5lcnMgdG8gcGFnZSB0YWJzXG5mdW5jdGlvbiBhc3NpZ25UYWJFdmVudHMoKSB7XG4gICAgY29uc3QgdGFicyA9IGRvbUNhY2hlLnRhYnM7XG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQnV0dG9uQ2xpY2spO1xuICAgIH0pO1xufVxuXG4vLyBBc3NpZ24gZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnMgYW5kIGxvYWQgdGhlIGhvbWVwYWdlXG5hc3NpZ25UYWJFdmVudHMoKTtcbi8vZG9tQ2FjaGUuY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVIb21lcGFnZUNvbnRlbnQoKSk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImRvbVV0aWwiLCJ0YWciLCJ0ZXh0Iiwib3B0aW9ucyIsImVsZW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJfYWRkSWQiLCJjbGFzcyIsImNsYXNzZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JFYWNoIiwiY2xhc3NOYW1lIiwiX2FkZENsYXNzIiwiYXR0cmlidXRlcyIsImtleSIsInNldEF0dHJpYnV0ZSIsIl9hZGRBdHRyaWJ1dGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkb21DYWNoZSIsImJvZHkiLCJjb250ZW50RGl2IiwicXVlcnlTZWxlY3RvciIsInRhYnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlUXVvdGUiLCJxdW90ZSIsImF1dGhvciIsInF1b3RlQ29udGFpbmVyIiwiY3JlYXRlSG91cnNDb250YWluZXIiLCJob3Vyc0NvbnRhaW5lciIsImRheUVsZW1zIiwibWFwIiwiZGF5IiwiaG91cnMiLCJkYXlDb250YWluZXIiLCJjcmVhdGVEYXkiLCJjcmVhdGVMb2NhdGlvbkNhcmQiLCJjYXJkIiwiaDIiLCJmaWd1cmUiLCJhbHQiLCJjcmVhdGVGaWd1cmUiLCJjcmVhdGVIb21lQ29udGFpbmVyIiwiaG9tZUNvbnRhaW5lciIsImFib3V0Q2FyZCIsImNyZWF0ZUFib3V0Q2FyZCIsInRlc3RpbW9uaWFsc0NhcmQiLCJjcmVhdGVUZXN0aW1vbmlhbHNDYXJkIiwiaG91cnNDYXJkIiwiY3JlYXRlSG91cnNDYXJkIiwiY3JlYXRlSG9tZXBhZ2VDb250ZW50IiwiaG9tZXBhZ2VDb250ZW50IiwiY3JlYXRlTWVudUNhcmQiLCJpdGVtTmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWdTcmMiLCJpbWdBbHQiLCJtZW51Q2FyZCIsImNyZWF0ZU1lbnVDb250YWluZXIiLCJtZW51Q29udGFpbmVyIiwiZHJpbmtzSDIiLCJkcmlua3NDb250YWluZXIiLCJncmF2eSIsImNyZWF0ZURyaW5rc0NvbnRhaW5lciIsImhyMSIsInRvYXN0c0gyIiwidG9hc3RzQ29udGFpbmVyIiwiY3JlYXRlVG9hc3RzQ29udGFpbmVyIiwiaHIyIiwiZGVzc2VydEgyIiwiZGVzc2VydENvbnRhaW5lciIsImphd2JyZWFrZXIiLCJjcmVhdGVEZXNzZXJ0Q29udGFpbmVyIiwiY3JlYXRlTWVudUNvbnRlbnQiLCJtZW51Q29udGVudCIsImNyZWF0ZUNvbnRhY3RDb250ZW50Iiwib25CdXR0b25DbGljayIsInRhYkNvbnRlbnRGdW5jdGlvbiIsInRhcmdldCIsImNvbnRlbnQiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==