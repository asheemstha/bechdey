(this["webpackJsonpbechdey."]=this["webpackJsonpbechdey."]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/bechdey-logo-dark.7e3eae03.png"},27:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(21),l=t.n(r),s=(t(32),t(8)),i=t(9),m=t(11),o=t(10),u=(t(33),t(22)),h=t.n(u),v=t(4);var d=function(){return c.a.createElement("div",{className:"brand-logo-cont flex align-center justify-center"},c.a.createElement(v.b,{to:"/",className:"brand-home-link"},c.a.createElement("img",{className:"brand-logo-img",src:h.a,alt:"Bechdey"})))};var b=function(){return c.a.createElement("div",{className:"search-bar-cont flex aling-center justify-center"},c.a.createElement("input",{type:"text",className:"search-bar-input",placeholder:"Search"}))},E=t(18),g=t(25),p=t(24),f=t(0);var N=function(){return c.a.createElement(f.b.Provider,{value:{className:"right-menu-icons"}},c.a.createElement("div",{className:"header-right-menu flex"},c.a.createElement("div",{className:"burger-menu right-menus mobile-show-desktop-hide"},c.a.createElement("div",{className:"right-menu-links",onClick:function(){document.querySelector(".navbar").classList.toggle("active-navbar")}},c.a.createElement("div",{className:"right-menu-links-content"},c.a.createElement(p.a,null),c.a.createElement("p",{className:"right-menu-texts"},"Menu")))),c.a.createElement("div",{className:"compare-menu right-menus desktop-show-mobile-hide"},c.a.createElement(v.b,{to:"#",className:"right-menu-links"},c.a.createElement("div",{className:"right-menu-links-content"},c.a.createElement(g.a,null),c.a.createElement("p",{className:"right-menu-texts"},"Compare")))),c.a.createElement("div",{className:"signin-up-menu right-menus"},c.a.createElement(v.b,{to:"#",className:"right-menu-links"},c.a.createElement("div",{className:"right-menu-links-content"},c.a.createElement(E.a,null),c.a.createElement("p",{className:"right-menu-texts"},"Sign Up/In")))),c.a.createElement("div",{className:"cart-menu right-menus"},c.a.createElement(v.b,{to:"#",className:"right-menu-links"},c.a.createElement("div",{className:"right-menu-links-content"},c.a.createElement(E.b,null),c.a.createElement("p",{className:"right-menu-texts"},"Cart"))))))},k=t(26),y=t(14),j=t.n(y),O=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).hideNavbar=function(){document.querySelector(".navbar").classList.toggle("active-navbar")},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){j()(".nav-link").on("click",(function(){j()(".navbar").hasClass("active-navbar")&&j()(".navbar").removeClass("active-navbar")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("nav",{className:"navbar-content"},c.a.createElement("div",{className:"category-selector close-btn flex align-center justify-center "},c.a.createElement("p",{className:"category-text desktop-show-mobile-hide"},"Category"),c.a.createElement("div",{className:"close-btn mobile-show-desktop-hide ",onClick:this.hideNavbar},c.a.createElement("div",{className:"close-icon-cont flex align-center justify-center"},c.a.createElement(k.a,null)))),c.a.createElement("ul",{className:"nav-links flex align-center"},c.a.createElement("li",null,c.a.createElement(v.b,{to:"/about",className:"nav-link"},"Fashion")),c.a.createElement("li",null,c.a.createElement(v.b,{to:"#",className:"nav-link"},"Electronics")),c.a.createElement("li",null,c.a.createElement(v.b,{to:"#",className:"nav-link"},"Auto Mechanics")),c.a.createElement("li",null,c.a.createElement(v.b,{to:"#",className:"nav-link"},"Real Estate")))))}}]),t}(n.Component),x=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",{className:"header-content"},c.a.createElement("div",{className:"header-left flex align-center justify-center"},c.a.createElement(d,null)),c.a.createElement("div",{className:"header-center flex align-center justify-center"},c.a.createElement(b,null)),c.a.createElement("div",{className:"header-right"},c.a.createElement(N,null))),c.a.createElement(O,null))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"homepage"},"homepage")}}]),t}(n.Component),C=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"about-page"},"about")}}]),t}(n.Component),S=t(2),M=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.a,{basename:"/bechdey"},c.a.createElement("div",{className:"App"},c.a.createElement(x,null),c.a.createElement(S.c,null,c.a.createElement(S.a,{path:"/",exact:!0,component:w}),c.a.createElement(S.a,{path:"/about",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.6c0a4777.chunk.js.map