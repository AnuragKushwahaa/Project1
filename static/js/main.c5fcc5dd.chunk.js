(this.webpackJsonpanime=this.webpackJsonpanime||[]).push([[0],{102:function(e,t){},118:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(34),a=n.n(s),r=(n(90),n(13)),i=(n(91),n(22)),j=n.n(i),o=n(30),l=n(8),d=(n(93),n(25)),b=n(1);var h=function(){var e=Object(r.f)(),t=Object(c.useState)({username:""}),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)({password:""}),h=Object(l.a)(i,2),u=h[0],O=h[1],m=function(){var t=Object(o.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/SignIn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:u})});case 2:c=t.sent,400!==(a=c.json()).status&&a?(window.alert("success"),e.push("/Welcome")):(window.alert("invalid reg"),console.log("dfdfd"));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"body",children:Object(b.jsx)("body",{children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("div",{className:"signin",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{src:"../Images/Project.jpg",alt:"AnimeWorld"})}),Object(b.jsxs)("form",{method:"POST",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Email or Username"}),Object(b.jsx)("input",{type:"text",className:"text-input",name:"Email",required:!0,value:s,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"text-input",required:!0,value:u,onChange:function(e){return O(e.target.value)}})]}),Object(b.jsx)("button",{type:"submit",className:"primary-btn",onClick:m,children:"Sign In"})]}),Object(b.jsx)("div",{className:"links",children:Object(b.jsx)(d.c,{to:"#",children:"Forgot Password"})}),Object(b.jsxs)("div",{className:"or",children:[Object(b.jsx)("hr",{className:"bar"}),Object(b.jsx)("span",{children:"OR"}),Object(b.jsx)("hr",{className:"bar"})]}),Object(b.jsx)(d.c,{to:"/SignUp",children:"Create Account"})]}),Object(b.jsxs)("footer",{className:"main-footer",children:[Object(b.jsx)("p",{children:"Copyright \xa9 2021, Anime World All Right Reserved"}),Object(b.jsx)("div",{children:Object(b.jsx)(d.c,{to:!0,children:"terms of use"})})]})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("div",{className:"showcase",children:Object(b.jsxs)("div",{className:"showcase-content",children:[Object(b.jsx)(d.c,{to:"/NavBar",className:"showcase-text",children:"Anime is Life, Feel it"}),Object(b.jsx)(d.c,{to:"NavBar",className:"secondary-btn",children:"Start your 10 day trail"})]})})})]})})})})},u=n(14),O=n(3);var m=function(){var e,t,n=Object(c.useState)({name:"",username:"",password:""}),s=Object(l.a)(n,2),a=s[0],r=s[1],i=function(n){e=n.target.name,t=n.target.value,r(Object(O.a)(Object(O.a)({},a),{},Object(u.a)({},e,t)))},d=function(){var e=Object(o.a)(j.a.mark((function e(t){var n,c,s,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.name,c=a.username,s=a.password,console.log(a),e.next=5,fetch("/Register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,username:c,password:s})});case 5:return r=e.sent,e.next=8,r.json();case 8:402!==(i=e.sent).status&&i?(window.alert("success"),console.log("success")):(window.alert("invalid reg"),console.log("dfdfd"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"Form",method:"POST",children:[Object(b.jsx)("h1",{children:"Form"}),Object(b.jsx)("label",{children:" Name : "}),Object(b.jsx)("input",{type:"text",name:"name",required:!0,value:a.name,onChange:i}),Object(b.jsx)("label",{children:" Username or Email : "}),Object(b.jsx)("input",{type:"text",name:"username",required:!0,value:a.username,onChange:i}),Object(b.jsx)("label",{children:" password : "}),Object(b.jsx)("input",{type:"password",name:"password",required:!0,value:a.password,onChange:i}),Object(b.jsx)("input",{type:"submit",className:"submit",onClick:d})]})})},x=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],s=t[1],a=function(){var e=Object(o.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/About",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),s(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"aaa",children:Object(b.jsx)("form",{method:"GET",children:Object(b.jsxs)("p",{children:["Welcome ",n.name]})})})})},p=n(129),v=(n(99),n(132)),g=function(){var e=Object(c.useContext)(k),t=Object(c.useState)("grid"),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)("grid"),i=Object(l.a)(r,2),j=i[0],o=i[1],h=Object(c.useRef)(null),u=function(e){h.current.scrollLeft+=e};function O(){h.current.scrollLeft+h.current.clientWidth===h.current.scrollWidth?a("none"):a("grid"),0===h.current.scrollLeft?o("none"):o("grid")}return Object(c.useEffect)((function(){O()}),[]),Object(b.jsx)(b.Fragment,{children:e.item5.Name.map((function(t){return Object(b.jsxs)("div",{className:"Main2",ref:h,onScroll:O,children:[Object(b.jsx)("div",{className:"Title",children:Object(b.jsxs)("h1",{children:["Popular ",t]})}),Object(b.jsxs)("div",{className:"dd",children:[Object(b.jsx)("div",{className:"Left",onClick:function(){return u(-200)},style:{display:"".concat(j)},children:Object(b.jsx)("h5",{children:"\u2039"})}),Object(b.jsx)("div",{className:"PopularAnime",children:e.item5.contents.map((function(e,n){return Object(b.jsxs)(v.a,{className:"aj",children:[Object(b.jsx)(v.a.Image,{width:200,height:300,alt:"171x180",src:"./Images/AnimeImages/".concat(t,"/").concat(e,".jpg")}),Object(b.jsx)(v.a.Caption,{style:{textAlign:"center"},children:Object(b.jsx)(d.b,{to:"".concat(t,"/").concat(e),children:e})})]},n)}))}),Object(b.jsx)("div",{className:"Right",onClick:function(){return u(200)},style:{display:"".concat(s)},children:Object(b.jsx)("h5",{children:"\u203a"})})]})]})}))})},f=n(130),N=n(131),y=n(128),w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"bg-dark",children:Object(b.jsxs)(f.a,{bg:"dark",expand:"lg",variant:"dark",children:[Object(b.jsx)(f.a.Brand,{href:"#home",children:Object(b.jsx)("img",{src:"./Images/Project.jpg",width:"100",height:"100",className:"d-inline-block align-top",alt:"Anime World logo"})}),Object(b.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(f.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsx)(N.a,{className:"me-auto"}),Object(b.jsx)(N.a,{children:Object(b.jsx)(y.a,{title:"Hey",id:"collasible-nav-dropdown",children:Object(b.jsx)(y.a.Item,{href:"#"})})})]})]})})})},k=Object(c.createContext)(),S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"Main",children:[Object(b.jsx)(p.a,{children:Object(b.jsxs)(p.a.Item,{children:[Object(b.jsx)("img",{className:"d-block w-100",src:"./Images/1.jpg",alt:"First slide",width:"100px",height:"400px"}),Object(b.jsxs)(p.a.Caption,{children:[Object(b.jsx)("h3",{children:"First slide label"}),Object(b.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]})}),[{Name:["Anime"],contents:["Demon-Slayer","Fruits_Basket","Kaguya","OnePiece","TokyoRevengers","More","Kaguya","OnePiece","TokyoRevengers","More"]},{Name:["Manga"],contents:["SpyxFamily","Nana","MaisonIkkokku","LoveHina","Nisekoi","TokyoGhoul","KimiNoTodke","BoysOverFlowers","TokyoRevengers","AOT"]},{Name:["LightNovel"],contents:["SilentVoice","EatYourPancreas"]},{Name:["VisualNovel"],contents:["SteinGate"]}].map((function(e){return Object(b.jsx)(k.Provider,{value:{item5:e},children:Object(b.jsx)(g,{})})}))]})]})};function F(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];function a(){return(a=Object(o.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){(function(){return a.apply(this,arguments)})().then((function(e){s(e)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:n.map((function(e,t){return Object(b.jsxs)("div",{children:[" ",e.name.first]},t)}))})})}var T=n(124),C=n(125),P=n(126),A=n(133),I=n(134),E=n(127),R=(n(117),function(){var e=Object(c.useContext)(W),t=Object(r.g)().anime,n=[1,2,3,4,5];return Object(b.jsx)(b.Fragment,{children:e.mData[0].contents.map((function(e){return t===e?Object(b.jsxs)("div",{children:[Object(b.jsx)("head",{children:Object(b.jsx)("link",{href:"https://vjs.zencdn.net/7.15.4/video-js.css",rel:"stylesheet"})}),Object(b.jsx)(T.a,{fluid:!0,children:Object(b.jsxs)(C.a,{children:[Object(b.jsxs)(P.a,{className:"Vmain",lg:8,md:12,children:[Object(b.jsxs)("div",{className:"Vmain2",children:[Object(b.jsx)("video",{id:"Main",className:"video-js vjs-fluid",controls:!0,preload:"auto",width:"1200",height:"600",poster:"","data-setup":"{}",children:Object(b.jsx)("source",{src:"../Videos/Sep2.mp4",type:"video/mp4"})}),Object(b.jsx)("h3",{children:t})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"Info"}),Object(b.jsx)("hr",{}),Object(b.jsxs)(A.a,{children:[Object(b.jsx)(A.a.Text,{children:"With textarea"}),Object(b.jsx)(I.a,{as:"textarea","aria-label":"With textarea"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"Comments"}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(P.a,{className:"Vsidebar",xs:3,children:Object(b.jsxs)(E.a,{bordered:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:Object(b.jsx)("th",{style:{background:"#f6f6a9"},children:Object(b.jsx)("h1",{children:"Name"})})})}),Object(b.jsx)("tbody",{children:Object(b.jsx)("tr",{children:Object(b.jsx)("td",{children:n.map((function(e){return Object(b.jsxs)("div",{className:"xx",children:[Object(b.jsx)(v.a,{children:Object(b.jsx)(v.a.Image,{width:171,height:180,alt:"171x180",src:"../Images/Project.jpg"})}),Object(b.jsx)("h2",{children:"Name:"})]})}))})})})]})})]})})]}):console.log("sdsdsd")}))})}),M=[{Name:["Anime"],contents:["Demon-Slayer","Fruits_Basket","Kaguya","OnePiece","TokyoRevengers","More"]},{Name:["Manga"],contents:["SpyxFamily","Nana","MaisonIkkokku","LoveHina","Nisekoi","TokyoGhoul","KimiNoTodke","BoysOverFlowers","TokyoRevengers","AOT"]},{Name:["LightNovel"],contents:["SilentVoice","EatYourPancreas"]},{Name:["VisualNovel"],contents:["SteinGate"]}],W=Object(c.createContext)(null);var B=function e(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,component:h}),Object(b.jsx)(r.a,{path:"/SignUp",exact:!0,component:m}),Object(b.jsx)(r.a,{path:"/Welcome",exact:!0,component:x}),Object(b.jsx)(r.a,{path:"/NavBar",exact:!0,component:S}),Object(b.jsx)(r.a,{path:"/Fetch",exact:!0,component:F}),Object(b.jsx)(W.Provider,{value:{mData:M},children:Object(b.jsx)(r.a,{path:"/Anime/:anime",component:R})}),Object(b.jsx)(r.a,{path:"/App",exact:!0,component:e})]})})};n(116);a.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.a,{basename:"/Project1",children:Object(b.jsx)(B,{})})}),document.getElementById("root"))},90:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},99:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.c5fcc5dd.chunk.js.map