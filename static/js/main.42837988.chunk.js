(this.webpackJsonpvirginApp=this.webpackJsonpvirginApp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/whatsapp.2cc4c3e7.svg"},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),i=(a(33),a(13)),o=a(10),l=a(2),u=a.n(l),p=a(5),d=a(14),m=a(4),f=a(1),v="ln4N7UPRHV88qB9CISKcXd-D5VQ4_Sx-iWkauQKUxJo",h="CFPAT-rgWOwtITlzs4ht6ee0WrPPx_XhOxJohfsgqrbQpu4_Q",E=window.contentful,b=window.contentfulManagement,g=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.createClient({accessToken:v,space:"ji9dy7eny2j0"}),e.next=3,t.getEntries();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.createClient({accessToken:h}),e.next=3,a.getSpace("ji9dy7eny2j0");case 3:return n=e.sent,e.next=6,n.getEnvironment("MASTER");case 6:return r=e.sent,e.next=9,r.createEntry("strText",{fields:{strText:{"en-US":t.textStr},dateCreated:{"en-US":t.date},createdBy:{"en-US":t.user}}});case 9:return c=e.sent,e.next=12,c.publish();case 12:if(!(s=e.sent).sys.id){e.next=17;break}return e.abrupt("return",s);case 17:return e.abrupt("return",s);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.createClient({accessToken:v,environment:"master",space:"ji9dy7eny2j0"}),e.next=3,t.getAssets();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.createClient({accessToken:h}),e.next=3,a.getSpace("ji9dy7eny2j0");case 3:return n=e.sent,e.next=6,n.getEnvironment("MASTER");case 6:return r=e.sent,e.next=9,r.createAssetFromFiles({fields:{file:{"en-US":{contentType:t.type,fileName:t.name,file:t}},title:{"en-US":t.name},description:{"en-US":"A nice picture"}}});case 9:return c=e.sent,e.next=12,c.processForAllLocales();case 12:return s=e.sent,e.next=15,s.publish();case 15:if(!(i=e.sent).sys.id){e.next=18;break}return e.abrupt("return",i);case 18:return e.abrupt("return");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e,t=Object(f.b)(),a=Object(f.c)((function(e){return e.app.currentApp})),n=Object(f.c)((function(e){return e.app.appsList[a].hasData})),c=function(){document.querySelector(".upload > div > div:nth-child(1)").innerHTML=null,document.querySelector("#assets input").value=null,t({type:"CLOSE_SEARCHBAR"})},s=function(){var e=Object(m.a)(u.a.mark((function e(){var a,r,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.querySelector("#assets  input").files[0],e.next=3,w(a);case 3:(r=e.sent).sys.id?(s={sys:r.sys,fields:{file:{fileName:r.fields.file["en-US"].fileName,url:r.fields.file["en-US"].url}}},i=[].concat(Object(d.a)(n.items),[s]),o=Object(p.a)({},n,{items:i}),t({type:"APP_GOT_DATA",payload:o}),c()):(console.log(r),alert("upload failed"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(a){case"Assets":e=r.a.createElement("div",{className:"container upload"},r.a.createElement("div",{className:"waves-effect waves-light white-text",style:{textAlign:"center",marginRight:"0",padding:"0"},onClick:s},r.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"file_upload")),r.a.createElement("div",{className:"waves-effect white-text",style:{padding:"0"}},r.a.createElement("div",null)),r.a.createElement("div",{style:{position:"absolute",top:"0",marginRight:"0",right:"0"}},r.a.createElement("div",{className:"waves-effect waves-light white-text",onClick:c},"Cancel"),r.a.createElement("div",{className:"waves-effect waves-light white-text",onClick:s},"OK")));break;default:e=r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=e.target.children[0].value;0!==n.length&&""!==n&&"undefined"!==n&&(e.target.children[0].value="",t({type:"CLOSE_SEARCHBAR"}),"Hacker News"===a&&t("tags=front_page"===n?{type:"SET_SEARCH_TERM",payload:"?".concat(n)}:"tags=story"===n?{type:"SET_SEARCH_TERM",payload:"_by_date?tags=story"}:{type:"SET_SEARCH_TERM",payload:"?query=".concat(n)}),"reddit"===a&&t({type:"SET_SEARCH_TERM",payload:"".concat(n,".json")}))}},r.a.createElement("input",{className:"searchbar-input",type:"text",name:"input-search",placeholder:"Enter search term"}),r.a.createElement("button",null,"  ",r.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"search"))))}var i=Object(f.c)((function(e){return e.searchbar.opened}))?"search search-open":"search",o=Object(f.c)((function(e){return e.app.appsList[a].color})),l="".concat(o," darken-3 search-bar");return r.a.createElement("div",{className:i},r.a.createElement("div",{className:l},e))},O=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.app})),a=t.currentApp,c=t.appsList[a].navItems,s=function(){e(l())},o=function(){return{type:"TOGGLE_CARTOPEN"}},l=function(){return{type:"TOGGLE_SEARCHBAR"}},u=function(e){return{type:"SAVE_SCROLL_POS",payload:{scrollPos:e,currentApp:t.currentApp}}},p=function(){document.querySelector("#assets input").click()};Object(n.useEffect)((function(){var e=t.appsList[t.currentApp].scrollPos,a=e||0;window.scrollTo(0,a),document.querySelector("#Display").style.top="0",document.title=t.currentApp}),[t]);var d=function(a,n){e(u(window.scrollY));var r=t.apps;"reddit"!==r[r.indexOf(n)+1]?e({type:"CLOSE_SEARCHBAR"}):e({type:null}),e({type:"CHANGE_APP_STATE",payload:null})},m=c&&c.map((function(e,t){if("object"===typeof e){var a,n=e.icon;switch(n){case"menu":a=d;break;case"shopping_cart":a=o;break;case"search":a=s;break;case"file_upload":a=p;break;default:a=null}return function(e,t,a){return r.a.createElement("span",{key:a,className:"right white-text",onClick:e},r.a.createElement("i",{className:"material-icons waves-effect  waves-light"},t))}(a,n,t)}return r.a.createElement("li",{key:t},r.a.createElement(i.c,{to:"/"},e))})),v=t.appsList[a].color,h="nav-wrapper ".concat(v," darken-3");return r.a.createElement("section",{id:"Navbar"},r.a.createElement("nav",{className:h},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{className:"brand-logo",to:"/"},a),r.a.createElement("ul",{className:"right"},r.a.createElement("span",{className:"right white-text",onClick:function(){e(u(window.scrollY)),e({type:"CLOSE_SEARCHBAR"}),e({type:"CHANGE_APP_STATE",payload:"Chilli Hot"})}},r.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"arrow_back")),m))),r.a.createElement(S,null))},k=function(){var e=Object(f.c)((function(e){return e.app})),t=Object(f.b)();Object(n.useEffect)((function(){var t=e.appsList[e.currentApp].scrollPos,a=t||0;window.scrollTo(0,a)}),[e]);var a=[{link:"Hacker News",clas:"hckr",content:"Hacker News"},{link:"reddit",clas:"rddt",content:"Reddit"},{link:"Shopping",clas:"shpg",content:"Shopping"},{link:"Comments",clas:"msgg",content:"Contentful"},{link:"RestDBComments",clas:"rdbio",content:"RestDBio"},{link:"Assets",clas:"asst",content:"Assets"}].map((function(e,t){var a="gallery-box logo "+e.clas;return r.a.createElement("div",{key:t,link:e.link},r.a.createElement("div",{className:a}),r.a.createElement("div",null,e.content))}));return r.a.createElement("div",{id:"chilli",className:"container-center",onClick:function(a){t({type:"SAVE_SCROLL_POS",payload:{scrollPos:window.scrollY,currentApp:e.currentApp}});var n=a.target.hasAttribute("link")?a.target.getAttribute("link"):a.target.parentNode.getAttribute("link");t({type:"CHANGE_APP_STATE",payload:n})}},a)},T=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.length>0&&void 0!==c[0]?c[0]:null,a=c.length>1?c[1]:void 0,n=c.length>2&&void 0!==c[2]?c[2]:null,t=t||"/itemsData.json",r=function(){var e=Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,a({type:"APP_GOT_DATA",payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"APP_GOT_DATA",payload:"Error"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),n?setTimeout((function(){r()}),n):r();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.app.currentApp})),a=Object(f.c)((function(e){return e.app.appsList[t].hasData})),n=Object(f.c)((function(e){return e.app.appsList[t].baseURL})),c=Object(f.c)((function(e){return e.app.appsList[t].searchTerm})),s=c?"".concat(n).concat(c):"".concat(n,"_by_date?tags=story&hitsPerPage=50");if(!!!navigator.onLine)return r.a.createElement("div",{id:"hackerApi",className:""},"No internet connection.");if(!a)return T(s,e),r.a.createElement("div",{id:"hackerApi"},"Loading...");if("Error"===a)return r.a.createElement("div",{id:"hackerApi"},"Error loading content.");if("Error"!==a){var i=a.hits.sort((function(e,t){return parseInt(t.created_at)-parseInt(e.created_at)})).map((function(e,t){var a=new Date(e.created_at),n=a.toUTCString().substring(0,a.toUTCString().length-4);return r.a.createElement("div",{key:t,className:"hackerApi-box"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"title"},e.title),r.a.createElement("div",{className:"date"},n),r.a.createElement("div",{className:"author"},"Author: ",e.author),r.a.createElement("div",{className:"url"},e.url)))}));return r.a.createElement("div",{id:"hackerApi"},i)}},C=function(){var e,t=Object(f.b)(),a=Object(f.c)((function(e){return e.app.currentApp})),n=Object(f.c)((function(e){return e.app.appsList[a].hasData})),c=Object(f.c)((function(e){return e.app.appsList[a].baseURL})),s=Object(f.c)((function(e){return e.app.appsList[a].searchTerm}));e=s?"".concat(c).concat(s):"".concat(c,"All.json");var i=!!navigator.onLine;if(!i)return r.a.createElement("div",{id:"hackerApi",className:""},"No internet connection.");if(!n)return T(e,t),r.a.createElement("div",{id:"hackerApi"},"Loading...");if("Error"===n)return console.log("".concat(c).concat(s)),r.a.createElement("div",{id:"hackerApi"},"Error loading content.");if("Error"!==n){var o=n.data.children.sort((function(e,t){return parseInt(t.data.created)-parseInt(e.data.created)})).map((function(e,t){var a=new Date(1e3*e.data.created),n=a.toUTCString().substring(0,a.toUTCString().length-4);return r.a.createElement("div",{key:t,className:"hackerApi-box"},r.a.createElement("a",{href:e.data.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"title"},e.data.title),r.a.createElement("div",{className:"date"},n),r.a.createElement("div",{className:"author"},"Author: ",e.data.author),r.a.createElement("div",{className:"url"},e.data.url)))}));return r.a.createElement("div",{id:"hackerApi"},o)}},j=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.app.currentApp})),a=Object(f.c)((function(e){return e.app.appsList[t].hasData})),n=function(){var t=Object(m.a)(u.a.mark((function t(n){var r,c,s,i,o,l,m,f;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.previousElementSibling?n.target.previousElementSibling:n.target.parentNode.previousElementSibling,""!==(c=r.value)){t.next=4;break}return t.abrupt("return");case 4:return s=new Date,i="anon",t.next=8,y({textStr:c,date:s,user:i});case 8:(o=t.sent).sys.id?(l={sys:o.sys,fields:{strText:c,dateCreated:s.toString().substring(0,24),createdBy:i}},m=[].concat(Object(d.a)(a.items),[l]),f=Object(p.a)({},a,{items:m}),e({type:"APP_GOT_DATA",payload:f}),r.value=""):(console.log(o),alert("upload failed"));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if(!a)return Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e({type:"APP_GOT_DATA",payload:a});case 4:case"end":return t.stop()}}),t)})))(),r.a.createElement("div",{id:"comments"},"Loading...");if("Error"===a)return r.a.createElement("div",{id:"comments"},"Error loading content.");if("Error"!==a){var c=a.items.sort((function(e,t){return Date.parse(new Date(t.fields.dateCreated))-Date.parse(new Date(e.fields.dateCreated))})).map((function(e,t){var a=new Date(e.fields.dateCreated),n=a.toUTCString().substring(0,a.toUTCString().length-4);return r.a.createElement("div",{key:t,className:"commentBox"},r.a.createElement("span",{style:{fontWeight:"bold"}},e.fields.createdBy," : "),r.a.createElement("span",{style:{color:"dodgerblue"}}," ",n),r.a.createElement("br",null),r.a.createElement("div",{style:{paddingLeft:"0px",paddingTop:"2px"}},e.fields.strText))}));return r.a.createElement("div",{id:"comments"},r.a.createElement("div",{id:"newComments"},r.a.createElement("textarea",{id:"addCommentTextArea",style:{height:"100px"},placeholder:"Add a comment ..."}),r.a.createElement("span",{className:"right green-text text-darken-2",id:"postComment",onClick:n},r.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"send"))),c)}},_=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.app.currentApp})),a=Object(f.c)((function(e){return e.app.appsList[t].hasData})),n="https://dbase-a3a5.restdb.io/rest/miscellaneous-first-items-collection",c="5e7b60baf96f9f072a0b094d",s=function(){var t=Object(m.a)(u.a.mark((function t(r){var s,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==(s=r.target.previousElementSibling?r.target.previousElementSibling:r.target.parentNode.previousElementSibling).value){t.next=3;break}return t.abrupt("return");case 3:i=s.value,o=(new Date).toString().substring(0,24),"anon",Object(m.a)(u.a.mark((function t(){var r,l,p,f,v;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n,t={method:"POST",headers:{"content-type":"application/json","x-apikey":c,"cache-control":"no-cache",Accept:"application/json"},body:JSON.stringify({description:i,title:o,createdBy:"anon"})},e.next=4,fetch("https://dbase-a3a5.restdb.io/rest/miscellaneous-first-items-collection",t);case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},r=function(){return l.apply(this,arguments)},t.next=4,r();case 4:(p=t.sent).description===i?(f={_id:p._id,id:p.id,description:i,title:o,createdBy:"anon"},v=[].concat(Object(d.a)(a),[f]),e({type:"APP_GOT_DATA",payload:v}),s.value=""):alert("Not Saved !!");case 6:case"end":return t.stop()}}),t)})))();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();if(!a)return Object(m.a)(u.a.mark((function t(){var a,r,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){return(r=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n,t={method:"GET",headers:{"content-type":"application/json","x-apikey":c,"cache-control":"no-cache",Accept:"application/json"}},e.next=4,fetch("https://dbase-a3a5.restdb.io/rest/miscellaneous-first-items-collection",t);case 4:return a=e.sent,e.next=7,a.text();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(){return r.apply(this,arguments)},t.next=4,a();case 4:return s=t.sent,t.next=7,JSON.parse(s);case 7:i=t.sent,e({type:"APP_GOT_DATA",payload:i});case 9:case"end":return t.stop()}}),t)})))(),r.a.createElement("div",{id:"comments"},"Loading...");if("Error"===a)return r.a.createElement("div",{id:"comments"},"Error loading content.");var i=a.sort((function(e,t){return t.id-e.id})).map((function(e,t){var a=new Date(e.date);"Invalid Date"===String(a)&&(a=new Date(e.title)),"Invalid Date"===String(a)&&(a=new Date("2020-03-04 15:36"));var n=a.toUTCString().substring(0,a.toUTCString().length-4),c=e.createdBy;return c&&""!==c&&"undefined"!==c||(c="(no name)"),r.a.createElement("div",{key:t,className:"commentBox"},r.a.createElement("span",{style:{fontWeight:"bold"}},c," : "),r.a.createElement("span",{style:{color:"dodgerblue"}}," ",n),r.a.createElement("br",null),r.a.createElement("div",{className:"desc"},e.description))}));return r.a.createElement("div",{id:"comments"},r.a.createElement("div",{id:"newComments"},r.a.createElement("textarea",{id:"addCommentTextArea",style:{height:"100px"},placeholder:"Add a comment ..."}),r.a.createElement("span",{className:"right green-text text-darken-2",id:"postComment",onClick:s},r.a.createElement("i",{className:"material-icons waves-effect  waves-light"},"send"))),i)},N=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.app.currentApp})),a=Object(f.c)((function(e){return e.app.appsList[t].hasData}));if(!a)return Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:a=t.sent,e({type:"APP_GOT_DATA",payload:a});case 4:case"end":return t.stop()}}),t)})))(),r.a.createElement("div",{id:"assets"},"Loading Assets...");if("Error"===a)return r.a.createElement("div",{id:"assets"},"Error loading content.");var n=a.items.sort((function(e,t){return Date.parse(new Date(t.sys.createdAt))-Date.parse(new Date(e.sys.createdAt))})).map((function(e,t){var a="https:"+e.fields.file.url;return r.a.createElement("a",{key:t,href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"assetBox"}," ",e.fields.file.fileName," "))}));return r.a.createElement("div",{id:"assets",className:"container-center"},r.a.createElement("input",{type:"file",style:{display:"none"},onChange:function(t){if(!t.target.files[0])return console.log("file selection cancelled"),void e({type:"CLOSE_SEARCHBAR"});e({type:"OPEN_SEARCHBAR"}),document.querySelector(".upload > div > div:nth-child(1)").innerHTML=t.target.files[0].name},onClick:function(e){e.target.value=null}}),n)},L=function(){var e="";switch(Object(f.c)((function(e){return e.app.currentApp}))){case"reddit":e=r.a.createElement(C,null);break;case"Hacker News":e=r.a.createElement(x,null);break;case"Chilli Hot":e=r.a.createElement(k,null);break;case"Tester":var t=function(e){console.log(e.target.innerHTML,window.innerWidth,window.innerHeight);var t=e.target.innerHTML,a=window.innerWidth,n=window.innerHeight,r=parseInt(window.getComputedStyle(document.querySelector(".brand-logo")).fontSize),c=parseInt(window.getComputedStyle(document.querySelector("nav i")).fontSize);r=parseInt(r),r="increase font size"===t?parseInt(r+2):parseInt(r-2),c="increase font size"===t?parseInt(c+1):parseInt(c-1),document.querySelector(".brand-logo").style.fontSize=r+"px",document.querySelector("nav i").style.fontSize=c+"px",document.querySelector(".readout").innerHTML="Screen Width(px): ".concat(a,"<br /> Screen Height(px): ").concat(n,"<br /> Logo font(px): ").concat(r,"<br /> Icon font(px): ").concat(c,"<br />")};return r.a.createElement("div",{id:"Display",className:"container"},r.a.createElement("div",{id:"tester"},r.a.createElement("button",{onClick:t},"increase font size"),r.a.createElement("br",null),r.a.createElement("button",{onClick:t},"decrease font size"),r.a.createElement("br",null),r.a.createElement("div",{className:"readout"})));case"Comments":e=r.a.createElement(j,null);break;case"RestDBComments":e=r.a.createElement(_,null);break;case"Assets":e=r.a.createElement(N,null)}return r.a.createElement("div",{id:"Display",className:"container"}," ",e,"  ")},R=a(27),D=a.n(R),P=function(){return r.a.createElement("section",{id:"Footer",className:"page-footer  black darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"\xa9 2020 Carefree-Coding Pendik/Istanbul"),r.a.createElement("div",null,r.a.createElement("img",{src:D.a,className:"App-logo",alt:"logo"})," + 90 (0)532 123 4567")))};var H=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:L})),r.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(12),I=a(15);function B(e,t){return Object(p.a)({},e,{appsList:Object(p.a)({},e.appsList,Object(I.a)({},t.payload.currentApp,Object(p.a)({},e.appsList[t.payload.currentApp],{scrollPos:t.payload.scrollPos})))})}function G(e,t,a){return Object(p.a)({},e,{appsList:Object(p.a)({},e.appsList,Object(I.a)({},a,Object(p.a)({},e.appsList[a],{hasData:t.payload})))})}var M=function(e,t,a){return Object(p.a)({},e,{appsList:Object(p.a)({},e.appsList,Object(I.a)({},a,Object(p.a)({},e.appsList[a],{searchTerm:t.payload,hasData:!1})))})},q={currentApp:"Chilli Hot",apps:["Chilli Hot","reddit","Hacker News","Tester","Contact","Assets","Shopping","Comments","RestDBComments"],current:0,appsList:{"Chilli Hot":{color:"cyan",navItems:[{icon:"menu"},{icon:"search"}],hasData:!1,baseURL:!1,searchTerm:null},reddit:{color:"blue",navItems:[{icon:"menu"},{icon:"search"}],hasData:!1,baseURL:"https://www.reddit.com/r/",searchTerm:null},"Hacker News":{color:"green",navItems:[{icon:"menu"},{icon:"search"}],hasData:!1,baseURL:"https://hn.algolia.com/api/v1/search",searchTerm:null},Shopping:{color:"yellow",navItems:[{icon:"menu"},{icon:"shopping_cart"}],hasData:!1,baseURL:!1,searchTerm:null},Comments:{color:"cyan",navItems:[{icon:"menu"}],hasData:!1,baseURL:!1,searchTerm:null},RestDBComments:{color:"pink",navItems:[{icon:"menu"}],hasData:!1,baseURL:!1,searchTerm:null},Assets:{color:"pink",navItems:[{icon:"menu"},{icon:"file_upload"}],hasData:!1,baseURL:!1,searchTerm:null},Contact:{color:"grey",navItems:[{icon:"menu"},{icon:"email"},{icon:"phone"}],hasData:!1,baseURL:!1,searchTerm:null},Tester:{color:"black",navItems:[{icon:"menu"}],hasData:!1,baseURL:!1,searchTerm:null}}},W={opened:!1,currentSearchTerm:"",currentUploadFile:null},z=Object(U.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_TERM_SELECTED_1":return M(e,t,e.currentApp);case"CHANGE_APP_STATE":var a,n;return a=t.payload?e.apps.indexOf(t.payload):e.current===e.apps.length-1?0:e.current+1,n=e.apps[a],Object(p.a)({},e,{currentApp:n,current:a});case"SAVE_SCROLL_POS":return B(e,t);case"APP_GOT_DATA":return G(e,t,e.currentApp);case"SET_SEARCH_TERM":return M(e,t,e.currentApp);default:return e}},searchbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_SEARCHBAR":var a=!e.opened;return Object(p.a)({},e,{opened:a});case"CLOSE_SEARCHBAR":return Object(p.a)({},e,{opened:!1});case"OPEN_SEARCHBAR":return Object(p.a)({},e,{opened:!0});case"SEARCH_TERM_SELECTED":return Object(p.a)({},e,{currentSearchTerm:t.payload});default:return e}}}),F=Object(U.c)(z);s.a.render(r.a.createElement(f.a,{store:F},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.42837988.chunk.js.map