(this["webpackJsonptokyo-free-white-react-admin-dashboard"]=this["webpackJsonptokyo-free-white-react-admin-dashboard"]||[]).push([[14],{658:function(t,e,n){"use strict";var r=n(665),a=n(6),c=n(641),s=n(1),i=Object(a.a)(c.a)((function(t){var e=t.theme;return"\n        padding: ".concat(e.spacing(4,0),";\n")}));e.a=function(t){var e=t.children;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i,{children:Object(s.jsx)(r.a,{maxWidth:"lg",children:e})})})}},662:function(t,e,n){"use strict";var r=n(55),a=n(191),c=n(664),s=n(142),i=n(1),u=["heading","subHeading","docs"];e.a=function(t){var e=t.heading,n=void 0===e?"":e,o=t.subHeading,p=void 0===o?"":o,d=(t.docs,Object(a.a)(t,u));return Object(i.jsx)(c.a,Object(r.a)(Object(r.a)({container:!0,justifyContent:"space-between",alignItems:"center"},d),{},{children:Object(i.jsxs)(c.a,{item:!0,children:[Object(i.jsx)(s.a,{variant:"h3",component:"h3",gutterBottom:!0,children:n}),Object(i.jsx)(s.a,{variant:"subtitle2",children:p})]})}))}},683:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(61),a=n.n(r),c=n(95),s=n(143),i=n.n(s),u=n(145),o=n(305),p=n.n(o);n(306).config();var d="https://webapi.dynasis.web.id/api",l="TRNThtHufSm67rSA7iG1gCSV0wbfHWTDScSjJ9JknHtQr1u7QtJAGgAmnWgiYP6W3mjHDBgALui2gFq9";function b(t,e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p()().unix(),c={headers:{securitycode:Object(u.a)(l+n.sessionId+r),timestamp:p()().unix().toString()}},t.prev=2,""!==n.id){t.next=10;break}return t.next=6,i.a.post("".concat(d,"/").concat(e),n,c);case 6:return s=t.sent,t.abrupt("return",s.data);case 10:return t.next=12,i.a.put("".concat(d,"/").concat(e),n,c);case 12:return o=t.sent,t.abrupt("return",o.data);case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",t.t0.response.data);case 20:case"end":return t.stop()}}),t,null,[[2,16]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=Object(c.a)(a.a.mark((function t(){var e,n,r,c,s,o=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1?o[1]:void 0,t.prev=2,r=p()().unix().toString(),c={headers:{session:n.sessionId,securityCode:Object(u.a)("TRNThtHufSm67rSA7iG1gCSV0wbfHWTDScSjJ9JknHtQr1u7QtJAGgAmnWgiYP6W3mjHDBgALui2gFq9"+n.sessionId+r),timestamp:r}},t.next=7,i.a.get("".concat(d,"/").concat(e),c);case 7:return s=t.sent,t.abrupt("return",s.data);case 11:return t.prev=11,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",t.t0.response.data);case 15:case"end":return t.stop()}}),t,null,[[2,11]])}))),h.apply(this,arguments)}function m(t,e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function t(e,n){var r,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=p()().unix().toString(),c={headers:{session:n.sessionId,securityCode:Object(u.a)(l+n.sessionId+r),timestamp:r}},t.next=5,i.a.get("".concat(d,"/").concat(e,"/details/").concat(n.id),c);case 5:return s=t.sent,t.abrupt("return",s.data);case 9:return t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",t.t0.response.data);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}},755:function(t,e,n){"use strict";n.r(e);var r=n(55),a=n(61),c=n.n(a),s=n(95),i=n(14),u=n(0),o=n(190),p=n(629),d=n(667),l=n.n(d),b=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.name,n=e.size,r=e.type,-1!==["image/png","image/jpg","image/jpeg"].indexOf(r)){t.next=7;break}return l.a.fire({icon:"warning",title:"Files must be type png!"}),t.abrupt("return");case 7:if(!(n>2048e3)){t.next=10;break}return l.a.fire({icon:"warning",title:"Files must be belo 2Mb"}),t.abrupt("return");case 10:return t.abrupt("return",!0);case 13:return a=t.sent,t.abrupt("return",a);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=n(658),f=n(662),h=n(6),m=n(665),g=n(641),x=n(663),O=n(686),v=n(666),y=n(696),w=n(625),k=n(637),S=n(669),I=n(683),C=n(716),F=n(717),H=n.n(F),T=n(20),A=n(1),D=Object(h.a)(k.a)((function(t){var e=t.theme;return"\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: ".concat(e.palette.grey[200],";\n        min-height: 200px;\n        width: 100%;\n        transition: all .2s;\n        :hover{\n            background-color: ").concat(e.palette.grey[400],";\n            cursor: pointer;\n        }\n    ")}));e.default=function(){var t=Object(T.i)().id,e=Object(S.a)(),n=e.register,a=e.handleSubmit,d=e.setValue,h=e.getValues,F=e.formState.errors,J=Object(u.useState)(""),W=Object(i.a)(J,2),P=W[0],B=W[1],V=Object(u.useState)(0),G=Object(i.a)(V,2),Q=G[0],E=G[1],_=Object(p.a)(["user"]),q=Object(i.a)(_,2),L=q[0],M=(q[1],Object(T.h)()),N=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e,sessionId:L.user.sessionID,type:"posts"},t.next=3,Object(I.a)("posts",n);case 3:(r=t.sent).results&&(d("id",r.results.id),d("title",r.results.title),d("content",r.results.content),B(r.results.image));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(u.useEffect)((function(){"undefined"!==typeof t&&N(t)}),[]);var R=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.image=P,n=Object(r.a)(Object(r.a)({},e),{},{status:Q,userId:L.user.userdata.id,sessionId:L.user.sessionID}),t.next=4,Object(I.b)("posts",n);case 4:"success"===(a=t.sent).status&&l.a.fire({icon:"success",title:a.message}).then((function(){M("/management/post")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(s.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=new FormData).append("file",e),n.append("upload_preset","blogs-preset"),fetch("https://api.cloudinary.com/v1_1/ayo-belajar-company/image/upload",{method:"POST",body:n}).then((function(t){return t.json()})).then((function(t){B(t.secure_url)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e.target.files[0]);case 2:n=t.sent,r=e.target.files[0],n&&U(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(o.a,{children:Object(A.jsx)("title",{children:" Post Form | Blog "})}),Object(A.jsx)(j.a,{children:Object(A.jsx)(f.a,{heading:"Post Form"})}),Object(A.jsx)(m.a,{maxWidth:"lg",children:Object(A.jsx)(x.a,{children:Object(A.jsxs)(g.a,{component:"form",sx:{"& .MuiTextField-root":{mt:2,width:1}},noValidate:!0,autoComplete:"off",onSubmit:a(R),children:[Object(A.jsxs)(v.a,{children:[Object(A.jsx)("input",Object(r.a)({type:"hidden"},n("id"))),Object(A.jsx)(w.a,Object(r.a)(Object(r.a)({margin:"dense",type:"text",label:"Title"},n("title")),{},{helperText:F.title?F.title.message:""})),""!==P?Object(A.jsx)(O.a,{component:"img",image:P,alt:"Posts Image",sx:{mt:2}}):Object(A.jsxs)(D,{onClick:function(){return document.getElementById("btnUpload").click()},sx:{my:2},children:["Add yout post photo",Object(A.jsxs)(k.a,{id:"btnUpload",component:"label",sx:{display:"none"},children:[Object(A.jsx)("input",{type:"file",hidden:!0,onChange:Y}),Object(A.jsx)("input",Object(r.a)({type:"file",hidden:!0},n("image")))]})]}),Object(A.jsx)(C.CKEditor,{editor:H.a,data:h("content"),onChange:function(t,e){var n=e.getData();d("content",n)}})]}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(k.a,{type:"submit",sx:{ml:"auto"},onClick:function(){return E(0)},children:"Save as draft"}),Object(A.jsx)(k.a,{color:"primary",variant:"contained",type:"submit",sx:{ml:"auto"},onClick:function(){return E(1)},children:"Save"})]})]})})})]})}}}]);
//# sourceMappingURL=14.2f7ce445.chunk.js.map