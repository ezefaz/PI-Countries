(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{150:function(e,t,n){},182:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(31),r=n.n(i),s=(n(150),n(27)),o=n(18),l=n(11),u=n(16),j=n(261),d=n(260),b=n(265),p=n(257),h=n(28),O=n(46),x=n(42),m=n.n(x),f="GET_COUNTRIES",v="SEARCH_COUNTRIES",y="GET_ACTIVITIES",g="POST_ACTIVITIES",C="DETAIL",N="DELETE",S="ORDER_BY_NAME",A="ASCENDENT",E="FILTER_BY_CONTINENT",w="FILTER_BY_ACTIVITIES",T="POPULATION",k="HIGHER_POPULATION",I="RESET";function D(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/countries");case 3:return n=e.sent,e.abrupt("return",t({type:f,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function P(e){return function(){var t=Object(O.a)(Object(h.a)().mark((function t(n){var a;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m()("/countries?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:v,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),alert("Country does not exist"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function R(){return function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("/activity");case 3:return n=e.sent,e.abrupt("return",t({type:y,payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}var _,W=n(14),L=n(266),z=n(267),U=n(269),B=n(270),M=n(271),F=n(268),G=n(263),H=n(272),K=n(258),V=n(23),Y=n(33),Z=Y.a.div(_||(_=Object(V.a)(["\n    height: fit-content;\n    text-align: center;\n"]))),J=n(1),X={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3};function $(e){var t=e.name,n=e.continent,c=e.flag,i=e.capital,r=e.subregion,o=e.area,u=e.population,j=(e.activities,a.useState(!1)),d=Object(l.a)(j,2),b=d[0],p=d[1],h=function(){p(!1)};return Object(J.jsx)(Z,{children:Object(J.jsxs)(L.a,{sx:{maxWidth:320},style:{margin:"2rem",flexDirection:"row",justifyContent:"space-between"},children:[Object(J.jsx)(z.a,{title:t,subheader:i.replace(/[{}, "", -]/g," ")}),Object(J.jsx)(U.a,{style:{width:"90%",margin:"auto"},component:"img",height:"170",image:c,alt:"Country Flag"}),Object(J.jsx)(B.a,{children:Object(J.jsx)(F.a,{variant:"body2",color:"text.secondary",children:n})}),Object(J.jsxs)(M.a,{children:[Object(J.jsx)(G.a,{size:"small",onClick:function(){p(!0)},children:"More Details"}),Object(J.jsx)(K.a,{hideBackdrop:!0,open:b,onClose:h,"aria-labelledby":"chield-modal-title","aria-describedby":"chield-modal-description",children:Object(J.jsxs)(H.a,{sx:Object(W.a)(Object(W.a)({},X),{},{width:200}),children:[Object(J.jsxs)("h2",{id:"child-modal-title",children:["More info on ",t]}),Object(J.jsxs)("p",{id:"child-modal-description",style:{textAlign:"start",display:"flex",flexDirection:"column"},children:["Area: ",o+" m2 "]}),Object(J.jsxs)("p",{id:"child-modal-description",style:{textAlign:"start",display:"flex",flexDirection:"column"},children:["Population: ",u+" millions"]}),Object(J.jsxs)("p",{id:"child-modal-description",style:{textAlign:"start",display:"flex",flexDirection:"column"},children:["Subregion: ",r]}),Object(J.jsx)(s.b,{to:"/activities",style:{textDecoration:"none"},children:Object(J.jsx)(G.a,{children:" Check Activities"})}),Object(J.jsx)(G.a,{onClick:h,children:"Close"})]})})]})]})})}n(182);function q(e){for(var t=e.countriesPerPage,n=e.countries,a=e.paginate,c=[],i=1;i<=Math.ceil(n/t);i++)c.push(i);return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("nav",{className:"pag-container",children:Object(J.jsx)("ul",{className:"ul",children:c&&c.map((function(e){return Object(J.jsx)("li",{children:Object(J.jsx)("a",{className:"number-paginate",onClick:function(){return a(e)},children:e})},e)}))})})})}var Q,ee,te,ne,ae,ce,ie=n(273),re=n(274),se=n(275),oe=n(120),le=n.n(oe),ue=n(121),je=n.n(ue),de=n(127),be=n(92),pe=n.n(be),he=n(256),Oe=n(264),xe=n(4),me=n(5),fe=n(248),ve=n(26),ye=Object(me.a)("div")((function(e){var t=e.theme;return Object(xe.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(fe.a)(t.palette.common.black,.15),width:"100%",display:"flex",flexDirection:"wrap","&:hover":{backgroundColor:Object(fe.a)(t.palette.common.white,.25)},marginLeft:0},"width","100%")})),ge=Object(me.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}})),Ce=Object(me.a)(ve.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"}}}));function Ne(){var e=["home","activity","activities"],t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],r=Object(u.b)(),o=Object(a.useState)(null),j=Object(l.a)(o,2),b=j[0],p=j[1],h=Object(a.useState)(null),O=Object(l.a)(h,2),x=(O[0],O[1]),m=function(){p(null)};return Object(J.jsx)(ie.a,{position:"static",children:Object(J.jsx)(Oe.a,{maxWidth:"xl",children:Object(J.jsxs)(re.a,{disableGutters:!0,children:[Object(J.jsx)(pe.a,{sx:{display:{xs:"none",md:"flex"},mr:1}}),Object(J.jsx)(F.a,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"COUNTRIES"}),Object(J.jsxs)(H.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(J.jsx)(se.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",children:Object(J.jsx)(le.a,{})}),Object(J.jsx)(de.a,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(b),onClose:m,sx:{display:{xs:"block",md:"none"}},children:e.map((function(e){return Object(J.jsx)(d.a,{onClick:m,children:Object(J.jsx)(F.a,{textAlign:"center",children:e})},e)}))})]}),Object(J.jsx)(pe.a,{sx:{display:{xs:"flex",md:"none"},mr:1}}),Object(J.jsx)(F.a,{variant:"h5",noWrap:!0,component:"a",href:"/home",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",width:"100%",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"COUNTRIES"}),Object(J.jsx)(H.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:e.map((function(e){return Object(J.jsx)(s.b,{to:"/".concat(e),children:Object(J.jsx)(G.a,{onClick:m,sx:{my:2,color:"white",display:"block",textDecoration:"none"},children:e},e)})}))}),Object(J.jsxs)(H.a,{sx:{flexGrow:0},children:[Object(J.jsx)(he.a,{title:"Open settings",children:Object(J.jsx)(se.a,{onClick:function(e){x(e.currentTarget)},sx:{p:0}})}),Object(J.jsxs)(ye,{children:[Object(J.jsx)(ge,{children:Object(J.jsx)(je.a,{cursor:"pointer"})}),Object(J.jsx)(Ce,{placeholder:"Find Country\u2026",inputProps:{"aria-label":"search"},onChange:function(e){e.preventDefault(),i(e.target.value)},value:c,onKeyPress:function(e){if("Enter"===e.key){if(0===c.length)return alert("Insert a country");r(P(c)),i("")}}}),Object(J.jsx)(G.a,{onClick:function(e){if(e.preventDefault(),0===c.length)return alert("Insert a country");r(P(c)),i("")},color:"primary",variant:"outlined",value:"",children:"Search"})]})]})]})})})}var Se=Y.a.div(Q||(Q=Object(V.a)([" \n    width: 100%;\n    height: 100vh;\n    background: white;\n"]))),Ae=(Y.a.div(ee||(ee=Object(V.a)([" \n    width: 100%;\n    margin-left: auto;\n"]))),Y.a.div(te||(te=Object(V.a)([" \n    display: inline-flex;\n    width: 100%;\n    justify-content: center;\n    gap: 1rem;\n"])))),Ee=Y.a.div(ne||(ne=Object(V.a)([" \n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 1rem;\n    \n\n"])));Y.a.select(ae||(ae=Object(V.a)(["\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    width: fit-content;\n    margin: 0 2rem;\n    border-radius: 10px;\n    border:none;\n    border: solid black;\n    font-size: large;\n    cursor: pointer;\n"]))),Y.a.button(ce||(ce=Object(V.a)(["\n    display: flex;\n    height: 3rem;\n    justify-content: center;\n    padding: 0.7rem;\n    width: 80%;\n    margin: 0 1rem;\n    border-radius: 10px;\n    border: solid black;\n    font-size: large;\n    cursor: pointer;\n"])));function we(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(1)),i=Object(l.a)(c,2),r=(i[0],i[1]),s=Object(u.b)(),o=Object(a.useState)(""),x=(Object(l.a)(o,2)[1],Object(u.c)((function(e){return e.activities})));Object(u.c)((function(e){return e.countries}));return Object(a.useEffect)((function(){s(D()),s(R())}),[s]),Object(J.jsxs)(H.a,{sx:{minWidth:120},style:{display:"flex",justifyContent:"center",padding:"1rem"},children:[Object(J.jsxs)(b.a,{sx:{m:1,minWidth:120},children:[Object(J.jsx)(j.a,{id:"activities",children:"Activities"}),Object(J.jsxs)(p.a,{labelId:"activities",id:"activities",value:"",label:"Activities",onChange:function(e){var t;s((t=e.target.value,{type:w,payload:t})),r(1)},children:[Object(J.jsx)(d.a,{value:"All",children:" All "}),(null===x||void 0===x?void 0:x.length)&&x.map((function(e,t){return Object(J.jsx)(d.a,{value:e.name,children:e.name},t)}))]})]}),Object(J.jsxs)(b.a,{sx:{m:1,minWidth:120},children:[Object(J.jsx)(j.a,{id:"continents",children:"Continents"}),Object(J.jsxs)(p.a,{labelId:"continents",id:"continents",value:n,label:"Continents",onChange:function(e){var t;s((t=e.target.value,function(){var e=Object(O.a)(Object(h.a)().mark((function e(n){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",n({type:E,payload:t}));case 4:e.prev=4,e.t0=e.catch(0),console.log(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}())),r(1)},children:[Object(J.jsx)(d.a,{value:"All",children:Object(J.jsx)("em",{children:"All"})}),Object(J.jsx)(d.a,{value:"Africa",children:"Africa"}),Object(J.jsx)(d.a,{value:"Europe",children:"Europe"}),Object(J.jsx)(d.a,{value:"Asia",children:"Asia"}),Object(J.jsx)(d.a,{value:"South America",children:"South America"}),Object(J.jsx)(d.a,{value:"North America",children:"North America"}),Object(J.jsx)(d.a,{value:"Oceania",children:"Ocenia"}),Object(J.jsx)(d.a,{value:"Antarctica",children:"Antarctica"})]})]})]})}var Te=n(122),ke=n.n(Te),Ie=n(255);function De(){var e,t=Object(u.b)();return Object(a.useEffect)((function(){t(D()),t(R())}),[t]),Object(J.jsx)(Ie.a,{direction:"row",spacing:2,children:Object(J.jsx)(G.a,{variant:"outlined",startIcon:Object(J.jsx)(ke.a,{}),onClick:function(e){return function(e){e.preventDefault(),t(D())}(e)},style:(e={marginTop:"2rem",justifyContent:"center",gap:"1rem",width:"auto",marginLeft:"45%"},Object(xe.a)(e,"marginTop","0.5rem"),Object(xe.a)(e,"marginBottom","1rem"),e),children:"Refresh"})})}function Pe(){var e=Object(u.b)(),t=(Object(u.c)((function(e){return e.activities})),Object(u.c)((function(e){return e.countries}))),n=Object(a.useState)(1),c=Object(l.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(8),o=Object(l.a)(s,1)[0],h=i*o,O=h-o,x=t.slice(O,h),m=Object(a.useState)(""),f=Object(l.a)(m,2)[1];function v(t){var n;t.preventDefault(),e((n=t.target.value,{type:S,payload:n})),r(1),f("Ordenado ".concat(t.target.value))}function y(t){var n;t.preventDefault(),e((n=t.target.value,{type:T,payload:n})),r(1),f("Ordenado ".concat(t.target.value))}return Object(a.useEffect)((function(){e(D()),e(R())}),[e]),Object(J.jsxs)(Se,{children:[Object(J.jsx)(Ne,{paginate:r}),Object(J.jsx)(we,{}),Object(J.jsx)(De,{}),Object(J.jsxs)(Ae,{children:[Object(J.jsxs)(b.a,{sx:{m:1,minWidth:120},children:[Object(J.jsx)(j.a,{id:"alphabetic",children:"Alphabetic"}),Object(J.jsxs)(p.a,{labelId:"alphabetic",id:"alphabetic",label:"Alphabetic",onChange:function(e){return v(e)},children:[Object(J.jsx)(d.a,{value:A,children:" A-Z "}),Object(J.jsx)(d.a,{value:"DESCENDENT",children:" Z-A "})]})]}),Object(J.jsxs)(b.a,{sx:{m:1,minWidth:120},children:[Object(J.jsx)(j.a,{id:"population",children:"Population"}),Object(J.jsxs)(p.a,{labelId:"population",id:"population",label:"Population",onChange:function(e){return y(e)},children:[Object(J.jsx)(d.a,{value:k,children:"Higher"}),Object(J.jsx)(d.a,{value:"LOWER_POPULATION",children:"Lower"})]})]})]}),Object(J.jsx)(q,{countriesPerPage:o,countries:t.length,paginate:function(e){return r(e)}}),Object(J.jsx)(Ee,{children:null===x||void 0===x?void 0:x.map((function(e){return Object(J.jsx)("div",{children:Object(J.jsx)($,{name:e.name,flag:e.flag,continent:e.continent,capital:e.capital,population:e.population,subregion:e.subregion,area:e.area,id:e.id,activities:e.activities})},e.id)}))})]})}n(184);var Re,_e,We=["btn--primary","btn--outline"],Le=["btn--medium","btn--large"],ze=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,i=e.buttonSize,r=We.includes(c)?c:We[0],o=Le.includes(i)?i:Le[0];return Object(J.jsx)(s.b,{to:"/home",className:"btn-mobile",children:Object(J.jsx)("button",{className:"btn ".concat(r," ").concat(o),onClick:a,type:n,children:t})})};function Ue(){return Object(J.jsxs)(Be,{children:[Object(J.jsx)("video",{src:"/videos/video-2.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(J.jsx)("h1",{children:"COUNTRIES APP"}),Object(J.jsx)("p",{children:"What are you waiting for?"}),Object(J.jsx)(Me,{children:Object(J.jsx)(ze,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"START EXPERIENCE"})})]})}var Be=Y.a.div(Re||(Re=Object(V.a)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);\n  object-fit: contain;\n  video {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n  }\n  h1 {\n  color: #fff;\n  font-size: 100px;\n  margin-top: -100px;\n  }\n  p { \n  margin-top: 8px;\n  color: #fff;\n  font-size: 32px;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n    'Lucida Sans', Arial, sans-serif;\n}  \n@media screen and (max-width: 960px) {\n   h1 {\n    font-size: 70px;\n    margin-top: -150px;\n  }\n}\n@media screen and (max-width: 768px) {\n   h1 {\n    font-size: 50px;\n    margin-top: -100px;\n  }\n}\n"]))),Me=Y.a.div(_e||(_e=Object(V.a)(["\n  margin-top: 32px;\n  .btn {\n    margin: 6px;\n  }\n   p {\n    font-size: 30px;\n  }\n\n  .btn-mobile {\n    display: block;\n    text-decoration: none;\n  }\n\n  .btn {\n    width: 100%;\n  }\n"])));n(185);function Fe(e){var t,n=Object(u.b)(),c=Object(u.c)((function(e){return e.detail}));return Object(a.useEffect)((function(){var t;n((t=e.match.params.id,function(){var e=Object(O.a)(Object(h.a)().mark((function e(n){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("/countries/".concat(t));case 3:return a=e.sent,e.abrupt("return",n({type:C,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Wrong ID");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),n((function(e){e({type:I})}))}),[n,e.match.params.id]),Object(J.jsxs)("div",{className:"detailE",children:[Object(J.jsx)(Ne,{}),Object(J.jsx)("div",{className:"detail-container",children:c.length?Object(J.jsxs)("div",{className:"detail-content",children:[Object(J.jsx)("img",{className:"obj-image",src:c[0].flag,alt:""}),Object(J.jsx)("h1",{className:"obj-detail",children:c[0].name}),Object(J.jsxs)("div",{className:"detail-obj",children:[Object(J.jsxs)("h2",{children:["ID: ",c[0].id]}),Object(J.jsxs)("h2",{children:["Capital: ",c[0].capital]}),Object(J.jsxs)("h2",{children:["Continent: ",c[0].continent]}),Object(J.jsxs)("h2",{children:["Subregion: ",c[0].subregion]}),Object(J.jsxs)("h2",{children:["Area: ",c[0].area," km2"]}),Object(J.jsxs)("h2",{children:["Poblation: ",c[0].population]})]}),Object(J.jsxs)("div",{className:"act-detail",children:["  ",null===(t=c[0].activities)||void 0===t?void 0:t.map((function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)(s.b,{className:"link-detail",to:"/activities",children:Object(J.jsx)("h2",{children:"Activity"})}),Object(J.jsxs)("div",{className:"obj3Detail",children:[Object(J.jsx)("h3",{children:e.name}),Object(J.jsxs)("h3",{children:["Dificulty: ",e.difficulty]}),Object(J.jsxs)("h3",{children:["Duration: ",e.duration]}),Object(J.jsxs)("h3",{children:["Season: ",e.season]})]})]})}))]}),Object(J.jsx)("div",{className:"btn2",children:Object(J.jsx)(s.b,{className:"link",to:"/home",children:Object(J.jsx)("button",{className:"btn2-back",children:"Back"})})})]}):Object(J.jsx)("div",{children:Object(J.jsx)("p",{className:"loading",children:"Loading..."})})})]},c.id)}function Ge(e){var t=e.name,n=e.duration,a=e.season,c=e.difficulty;e.idCountry;return Object(J.jsx)(L.a,{sx:{minWidth:275},children:Object(J.jsxs)(B.a,{children:[Object(J.jsx)(F.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Activity"}),Object(J.jsx)(F.a,{variant:"h5",component:"div",children:t}),Object(J.jsx)(F.a,{sx:{mb:1.5},color:"text.secondary",children:a}),Object(J.jsxs)(F.a,{variant:"body2",children:["Duration: ",n," mins."]}),Object(J.jsxs)(F.a,{variant:"body2",children:["Difficulty: ",c," / 5"]})]})})}n(186);function He(){var e=Object(u.c)((function(e){return e.activities}));return Object(J.jsxs)("div",{className:"act-container",children:[Object(J.jsx)("div",{children:Object(J.jsx)(Ne,{})}),Object(J.jsx)("div",{className:"act-cards",children:e.length?e.map((function(e){return Object(J.jsx)("div",{className:"act-card-list",children:Object(J.jsx)(Ge,{name:e.name,duration:e.duration,season:e.season,difficulty:e.difficulty})})})):Object(J.jsxs)("div",{className:"activities-empty",children:[Object(J.jsx)("h3",{children:"No activities been created"}),Object(J.jsx)("p",{children:"Do you want to create one?"}),Object(J.jsx)(s.b,{to:"/activity",children:Object(J.jsx)("button",{className:"noact-btn",children:"Create New Activity"})})]})})]})}var Ke=n(19);n(187);function Ve(){var e=Object(u.b)(),t=Object(o.f)(),n=Object(u.c)((function(e){return e.countries})),c=Object(a.useState)({}),i=Object(l.a)(c,2),r=i[0],s=i[1],j=Object(a.useState)({name:"",duration:"",season:"",difficulty:"",idCountry:[]}),d=Object(l.a)(j,2),b=d[0],p=d[1];function x(e){p(Object(W.a)(Object(W.a)({},b),{},Object(xe.a)({},e.target.name,e.target.value))),s(function(e){var t={};return e.name?/^[a-zA-Z\xc0-\xff\s]{4,40}$/.test(e.name)&&(e.duration?e.season?e.difficulty?e.idCountry===[]&&(t.idCountry="Must select a country"):t.difficulty="Select a difficulty":t.season="Select a season":t.duration="Complete this field"):t.name="Complete this field",t}(Object(W.a)(Object(W.a)({},b),{},Object(xe.a)({},e.target.name,e.target.value))))}return Object(a.useEffect)((function(){e(D()),e(R())}),[e]),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:Object(J.jsx)(Ne,{})}),Object(J.jsx)("div",{className:"act-card-container",children:Object(J.jsxs)("div",{className:"act-card",children:[Object(J.jsx)("div",{className:"act-title"}),Object(J.jsxs)("form",{className:"form-act",onSubmit:function(n){if(n.preventDefault(),""===b.name||""===b.duration||""===b.season||""===b.difficulty||0===b.idCountry.length)return alert("Must complete the fields");var a;e((a=b,function(){var e=Object(O.a)(Object(h.a)().mark((function e(t){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.post("/activity",a),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Activity created"),p({name:"",duration:"",season:"",difficulty:"",idCountry:[]}),t.push("/activities")},children:[Object(J.jsx)("span",{className:"title-create-act",children:" Create an activity"}),Object(J.jsxs)("div",{className:"input-act",children:[Object(J.jsx)("label",{className:"label-act"}),Object(J.jsx)("input",{className:"i",type:"text",placeholder:"Enter the activity name...",value:b.name,name:"name",onChange:x}),r.name&&Object(J.jsx)("p",{className:"e",children:r.name})]}),Object(J.jsxs)("div",{className:"input-act",children:[Object(J.jsx)("label",{}),Object(J.jsx)("input",{className:"i",type:"text",value:b.duration,name:"duration",placeholder:"Enter the duration...",onChange:x}),r.duration&&Object(J.jsx)("p",{className:"e",children:r.duration})]}),Object(J.jsxs)("div",{className:"input-act",children:[Object(J.jsx)("label",{children:"Difficulty"}),Object(J.jsx)("input",{className:"i",type:"range",name:"difficulty",min:"1",max:"5",value:b.difficulty,onChange:function(e){return x(e)}}),r.difficulty&&Object(J.jsxs)("p",{className:"e",children:[" ",r.difficulty]})]}),Object(J.jsxs)("div",{className:"seasonInput",children:[Object(J.jsxs)("select",{className:"i",name:"season",value:b.season,onChange:function(e){return x(e)},children:[Object(J.jsx)("option",{className:"op",children:" Season "}),Object(J.jsx)("option",{className:"op",value:"Winter",children:"Winter"}),Object(J.jsx)("option",{className:"op",value:"Summer",children:"Summer"}),Object(J.jsx)("option",{className:"op",value:"Autumn",children:"Autumn"}),Object(J.jsx)("option",{className:"op",value:"Spring",children:"Spring"})]}),r.season&&Object(J.jsx)("p",{className:"e",children:r.season})]}),r.idCountry&&Object(J.jsx)("p",{className:"e",children:r.idCountry}),Object(J.jsx)("div",{children:Object(J.jsxs)("select",{className:"i",onChange:function(e){return function(e){Object.values(b.idCountry).includes(e.target.value)?alert("Country already selected"):p(Object(W.a)(Object(W.a)({},b),{},{idCountry:[].concat(Object(Ke.a)(b.idCountry),[e.target.value])}))}(e)},children:["Countries",n&&n.map((function(e){return Object(J.jsx)("option",{value:e.id,name:"countries",children:e.name},e.id)}))]})}),Object(J.jsx)("div",{className:"text-area",children:b.idCountry.map((function(e){return Object(J.jsxs)("div",{className:"country-btn",children:[Object(J.jsx)("input",{className:"btn-del",type:"button",value:"X",onClick:function(){return t=e,void p(Object(W.a)(Object(W.a)({},b),{},{idCountry:b.idCountry.filter((function(e){return e!==t}))}));var t}}),Object(J.jsx)("p",{className:"p-country",children:e})]})}))}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{className:"btn-act",type:"submit",children:"Create Activity"})})]})]})})]})}var Ye=function(){return Object(J.jsx)(s.a,{children:Object(J.jsx)("div",{className:"App",children:Object(J.jsxs)(o.c,{children:[Object(J.jsx)(o.a,{exact:!0,path:"/",component:Ue}),Object(J.jsx)(o.a,{path:"/home",exact:!0,component:Pe}),Object(J.jsx)(o.a,{path:"/activity",component:Ve}),Object(J.jsx)(o.a,{path:"/activities",component:He}),Object(J.jsx)(o.a,{path:"/detail/:id",component:Fe})]})})})},Ze={countries:[],allCountries:[],activities:[],detail:[]};var Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(W.a)(Object(W.a)({},e),{},{countries:t.payload,allCountries:t.payload});case E:var n=e.allCountries,a="All"===t.payload?n:n.filter((function(e){return e.continent===t.payload}));return Object(W.a)(Object(W.a)({},e),{},{countries:a});case w:var c=e.allCountries,i="All"===t.payload?c.filter((function(e){return e.activities.length>0})):c.filter((function(e){return e.activities&&e.activities.map((function(e){return e.name})).includes(t.payload)}));return Object(W.a)(Object(W.a)({},e),{},{countries:i});case g:return Object(W.a)({},e);case y:return Object(W.a)(Object(W.a)({},e),{},{activities:t.payload});case N:var r=e.activities,s=r.filter((function(e){return e.id!==t.payload}));return Object(W.a)(Object(W.a)({},e),{},{activities:s});case C:return Object(W.a)(Object(W.a)({},e),{},{detail:t.payload});case I:return Object(W.a)(Object(W.a)({},e),{},{detail:[]});case v:return Object(W.a)(Object(W.a)({},e),{},{countries:t.payload});case S:var o=t.payload===A?e.countries.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})):e.countries.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0}));return Object(W.a)(Object(W.a)({},e),{},{countries:o});case T:var l=t.payload===k?e.countries.sort((function(e,t){return e.population<t.population?1:e.population>t.population?-1:void 0})):e.countries.sort((function(e,t){return e.population<t.population?-1:e.population>t.population?1:0}));return Object(W.a)(Object(W.a)({},e),{},{countries:l});default:return e}},Xe=n(76),$e=n(124),qe=n(123),Qe=Object(Xe.createStore)(Je,Object(qe.composeWithDevTools)(Object(Xe.applyMiddleware)($e.a))),et=n(125);n.n(et).a.config(),m.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",r.a.render(Object(J.jsx)(u.a,{store:Qe,children:Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(Ye,{})})}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.99e21841.chunk.js.map