(this.webpackJsonpvirginApp=this.webpackJsonpvirginApp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/whatsapp.2cc4c3e7.svg"},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),i=a.n(c),o=(a(33),a(11)),l=a(8),s=a(2),p=function(){var e=Object(s.d)(),t=Object(s.b)(),a=Object(s.c)((function(e){return e.app.currentApp})),r=Object(s.c)((function(e){return e.searchbar.opened}))?"search search-open":"search",c=Object(s.c)((function(e){return e.app.appsList[a].color})),i="".concat(c," darken-3 search-bar");return n.a.createElement("div",{className:r},n.a.createElement("div",{className:i},n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(r){r.preventDefault();var n=r.target.children[0].value;0!==n.length&&""!==n&&"undefined"!==n&&(r.target.children[0].value="",t({type:"CLOSE_SEARCHBAR"}),"Hacker News"===a&&t("tags=front_page"===n?{type:"SET_SEARCH_TERM",payload:"?".concat(n)}:"tags=story"===n?{type:"SET_SEARCH_TERM",payload:"_by_date?tags=story"}:{type:"SET_SEARCH_TERM",payload:"?query=".concat(n)}),"reddit"===a&&t({type:"SET_SEARCH_TERM",payload:"".concat(n,".json")}),console.log("STORE:",e.getState(),a))}},n.a.createElement("input",{className:"searchbar-input",type:"text",name:"input-search",placeholder:"Enter search term"}),n.a.createElement("button",null,"  ",n.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"search"))))))},u=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app})),a=t.currentApp,c=t.appsList[a].navItems,i=function(){e(u())},l=function(){return{type:"TOGGLE_CARTOPEN"}},u=function(){return{type:"TOGGLE_SEARCHBAR"}};Object(r.useEffect)((function(){var e=t.appsList[t.currentApp].scrollPos,a=e||0;document.querySelector("#Display").style.top="0",window.scrollTo(0,a),document.title=t.currentApp}),[t]);var d=function(a,r){e({type:"SAVE_SCROLL_POS",payload:{scrollPos:window.scrollY,currentApp:t.currentApp}});var n=t.apps;"reddit"!==n[n.indexOf(r)+1]?e({type:"CLOSE_SEARCHBAR"}):e({type:null}),e({type:"CHANGE_APP_STATE",payload:null})},m=c&&c.map((function(e,t){if("object"===typeof e){var a,r=e.icon;switch(r){case"menu":a=d;break;case"shopping_cart":a=l;break;case"search":a=i;break;default:a=null}return function(e,t,a){return n.a.createElement("span",{key:a,className:"right white-text",onClick:e},n.a.createElement("i",{className:"material-icons waves-effect  waves-light"},t))}(a,r,t)}return n.a.createElement("li",{key:t},n.a.createElement(o.c,{to:"/"},e))})),E=t.appsList[a].color,h="nav-wrapper ".concat(E," darken-3");return n.a.createElement("section",{id:"Navbar"},n.a.createElement("nav",{className:h},n.a.createElement("div",{className:"container"},n.a.createElement(o.b,{className:"brand-logo",to:"/"},a),n.a.createElement("ul",{className:"right"},n.a.createElement("span",{className:"right white-text",onClick:function(){e({type:"CHANGE_APP_STATE",payload:"Chilli Hot"})}},n.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"arrow_back")),m))),n.a.createElement(p,null))},d=function(){var e=Object(s.b)(),t=[n.a.createElement("div",{key:0,link:"Hacker News",className:"gallery-box hckr"},"Hacker News"),n.a.createElement("div",{key:1,link:"reddit",className:"gallery-box rddt"},"Reddit")];return n.a.createElement("div",{id:"chilli",className:"container-center",onClick:function(t){console.log(t.target.getAttribute("link")),e({type:"CHANGE_APP_STATE",payload:t.target.getAttribute("link")}),"reddit"===t.target.getAttribute("link")&&e({type:"SEARCH_TERM_SELECTED_1",payload:"All.json"}),"Hacker News"===t.target.getAttribute("link")&&e({type:"SEARCH_TERM_SELECTED_1",payload:"_by_date?tags=story"})}},t)},m=a(14),E=a.n(m),h=a(21),v=function(){var e=Object(h.a)(E.a.mark((function e(){var t,a,r,n,c=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.length>0&&void 0!==c[0]?c[0]:null,a=c.length>1?c[1]:void 0,r=c.length>2&&void 0!==c[2]?c[2]:null,t=t||"/itemsData.json",n=function(){var e=Object(h.a)(E.a.mark((function e(){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{});case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,a({type:"APP_GOT_DATA",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"APP_GOT_DATA",payload:"Error"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),r?setTimeout((function(){n()}),r):n();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app.currentApp})),a=Object(s.c)((function(e){return e.app.appsList[t].hasData})),r=Object(s.c)((function(e){return e.app.appsList[t].baseURL})),c=Object(s.c)((function(e){return e.app.appsList[t].searchTerm})),i=!!navigator.onLine;if(!i)return n.a.createElement("div",{id:"hackerApi",className:""},"No internet connection.");if(!a)return v("".concat(r).concat(c),e),n.a.createElement("div",{id:"hackerApi"},"Loading...");if("Error"===a)return n.a.createElement("div",{id:"hackerApi"},"Error loading content.");if("Error"!==a){var o=a.hits.sort((function(e,t){return parseInt(t.created_at)-parseInt(e.created_at)})).map((function(e,t){var a=new Date(e.created_at),r=a.toUTCString().substring(0,a.toUTCString().length-4);return n.a.createElement("div",{key:t,className:"hackerApi-box"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"title"},e.title),n.a.createElement("div",{className:"date"},r),n.a.createElement("div",{className:"author"},"Author: ",e.author),n.a.createElement("div",{className:"url"},e.url)))}));return n.a.createElement("div",{id:"hackerApi"},o)}},b=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app.currentApp})),a=Object(s.c)((function(e){return e.app.appsList[t].hasData})),r=Object(s.c)((function(e){return e.app.appsList[t].baseURL})),c=Object(s.c)((function(e){return e.app.appsList[t].searchTerm})),i=!!navigator.onLine;if(!i)return n.a.createElement("div",{id:"hackerApi",className:""},"No internet connection.");if(!a){var o="".concat(r).concat(c);return v(o,e),n.a.createElement("div",{id:"hackerApi"},"Loading...")}if("Error"===a)return console.log("".concat(r).concat(c)),n.a.createElement("div",{id:"hackerApi"},"Error loading content.");if("Error"!==a){var l=a.data.children.sort((function(e,t){return parseInt(t.data.created)-parseInt(e.data.created)})).map((function(e,t){var a=new Date(1e3*e.data.created),r=a.toUTCString().substring(0,a.toUTCString().length-4);return n.a.createElement("div",{key:t,className:"hackerApi-box"},n.a.createElement("a",{href:e.data.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"title"},e.data.title),n.a.createElement("div",{className:"date"},r),n.a.createElement("div",{className:"author"},"Author: ",e.data.author),n.a.createElement("div",{className:"url"},e.data.url)))}));return n.a.createElement("div",{id:"hackerApi"},l)}},g=function(){var e=Object(s.c)((function(e){return e.app.currentApp}));if("reddit"===e)return n.a.createElement("div",{id:"Display",className:"container"},n.a.createElement(b,null));if("Hacker News"===e)return n.a.createElement("div",{id:"Display",className:"container"},n.a.createElement(f,null));if("Chilli Hot"===e)return n.a.createElement("div",{id:"Display",className:"container"},n.a.createElement(d,null));if("Tester"===e){var t=function(e){console.log(e.target.innerHTML,window.innerWidth,window.innerHeight);var t=e.target.innerHTML,a=window.innerWidth,r=window.innerHeight,n=parseInt(window.getComputedStyle(document.querySelector(".brand-logo")).fontSize),c=parseInt(window.getComputedStyle(document.querySelector("nav i")).fontSize);n=parseInt(n),n="increase font size"===t?parseInt(n+2):parseInt(n-2),c="increase font size"===t?parseInt(c+1):parseInt(c-1),document.querySelector(".brand-logo").style.fontSize=n+"px",document.querySelector("nav i").style.fontSize=c+"px",document.querySelector(".readout").innerHTML="Screen Width(px): ".concat(a,"<br /> Screen Height(px): ").concat(r,"<br /> Logo font(px): ").concat(n,"<br /> Icon font(px): ").concat(c,"<br />")};return n.a.createElement("div",{id:"Display",className:"container"},n.a.createElement("div",{id:"tester"},n.a.createElement("button",{onClick:t},"increase font size"),n.a.createElement("br",null),n.a.createElement("button",{onClick:t},"decrease font size"),n.a.createElement("br",null),n.a.createElement("div",{className:"readout"})))}return n.a.createElement("div",{id:"Display",className:"container"},"   ")},A=a(26),y=a.n(A),S=function(){return n.a.createElement("section",{id:"Footer",className:"page-footer  black darken-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",null,"\xa9 2020 Carefree-Coding Pendik/Istanbul"),n.a.createElement("div",null,n.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"})," + 90 (0)532 123 4567")))};var T=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:g})),n.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(9),O=a(12),w=a(5);function k(e,t){return Object(w.a)({},e,{appsList:Object(w.a)({},e.appsList,Object(O.a)({},t.payload.currentApp,Object(w.a)({},e.appsList[t.payload.currentApp],{scrollPos:t.payload.scrollPos})))})}function N(e,t,a){return Object(w.a)({},e,{appsList:Object(w.a)({},e.appsList,Object(O.a)({},a,Object(w.a)({},e.appsList[a],{hasData:t.payload})))})}var L=function(e,t,a){return Object(w.a)({},e,{appsList:Object(w.a)({},e.appsList,Object(O.a)({},a,Object(w.a)({},e.appsList[a],{searchTerm:t.payload,hasData:!1})))})},C={currentApp:"Chilli Hot",apps:["Chilli Hot","reddit","Hacker News","Tester","Contact","Shopping"],current:0,appsList:{"Chilli Hot":{color:"red",navItems:["n1","n2",{icon:"menu"},{icon:"shopping_cart"},{icon:"search"}],hasData:!1,baseURL:!1,searchTerm:null},reddit:{color:"blue",navItems:[{icon:"menu"},{icon:"search"}],hasData:!1,baseURL:"https://www.reddit.com/r/",searchTerm:null},"Hacker News":{color:"green",navItems:[{icon:"menu"},{icon:"search"}],hasData:!1,baseURL:"http://hn.algolia.com/api/v1/search",searchTerm:null},Shopping:{color:"yellow",navItems:[{icon:"menu"},{icon:"shopping_cart"}],hasData:!1,baseURL:!1,searchTerm:null},Contact:{color:"grey",navItems:[{icon:"menu"},{icon:"email"},{icon:"phone"}],hasData:!1,baseURL:!1,searchTerm:null},Tester:{color:"black",navItems:[{icon:"menu"}],hasData:!1,baseURL:!1,searchTerm:null}}},j={opened:!1,currentSearchTerm:""},R=Object(_.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_TERM_SELECTED_1":return L(e,t,e.currentApp);case"CHANGE_APP_STATE":var a=e.current===e.apps.length-1?0:e.current+1,r=t.payload?t.payload:e.apps[a];return Object(w.a)({},e,{currentApp:r,current:a});case"SAVE_SCROLL_POS":return k(e,t);case"APP_GOT_DATA":return N(e,t,e.currentApp);case"SET_SEARCH_TERM":return L(e,t,e.currentApp);default:return e}},searchbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SEARCHBAR":var a=!e.opened;return{opened:a,currentSearchTerm:e.currentSearchTerm};case"CLOSE_SEARCHBAR":return Object(w.a)({},e,{opened:!1});case"OPEN_SEARCHBAR":return Object(w.a)({},e,{opened:!0});case"SEARCH_TERM_SELECTED":return{opened:e.opened,currentSearchTerm:t.payload};default:return e}}}),H=a(27),D=Object(_.d)(R,Object(_.a)(H.a));i.a.render(n.a.createElement(s.a,{store:D},n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a200b75e.chunk.js.map