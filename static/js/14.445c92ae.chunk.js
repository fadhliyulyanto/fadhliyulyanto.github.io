(this["webpackJsonptokyo-free-white-react-admin-dashboard"]=this["webpackJsonptokyo-free-white-react-admin-dashboard"]||[]).push([[14],{658:function(t,e,n){"use strict";var r=n(665),a=n(6),c=n(641),s=n(1),i=Object(a.a)(c.a)((function(t){var e=t.theme;return"\n        padding: ".concat(e.spacing(4,0),";\n")}));e.a=function(t){var e=t.children;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i,{children:Object(s.jsx)(r.a,{maxWidth:"lg",children:e})})})}},662:function(t,e,n){"use strict";var r=n(55),a=n(191),c=n(664),s=n(142),i=n(1),o=["heading","subHeading","docs"];e.a=function(t){var e=t.heading,n=void 0===e?"":e,u=t.subHeading,d=void 0===u?"":u,p=(t.docs,Object(a.a)(t,o));return Object(i.jsx)(c.a,Object(r.a)(Object(r.a)({container:!0,justifyContent:"space-between",alignItems:"center"},p),{},{children:Object(i.jsxs)(c.a,{item:!0,children:[Object(i.jsx)(s.a,{variant:"h3",component:"h3",gutterBottom:!0,children:n}),Object(i.jsx)(s.a,{variant:"subtitle2",children:d})]})}))}},683:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return O}));var r=n(61),a=n.n(r),c=n(95),s=n(143),i=n.n(s),o=n(145),u=n(305),d=n.n(u);n(306).config();var p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY;function b(t,e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=d()().unix(),c={headers:{securitycode:Object(o.a)(l+n.sessionId+r),timestamp:d()().unix().toString()}},t.prev=2,""!==n.id){t.next=10;break}return t.next=6,i.a.post("".concat(p,"/").concat(e),n,c);case 6:return s=t.sent,t.abrupt("return",s.data);case 10:return t.next=12,i.a.put("".concat(p,"/").concat(e),n,c);case 12:return u=t.sent,t.abrupt("return",u.data);case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",t.t0.response.data);case 20:case"end":return t.stop()}}),t,null,[[2,16]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=Object(c.a)(a.a.mark((function t(){var e,n,r,c,s,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"",n=u.length>1?u[1]:void 0,t.prev=2,r=d()().unix().toString(),c={headers:{session:n.sessionId,securityCode:Object(o.a)(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY+n.sessionId+r),timestamp:r}},t.next=7,i.a.get("".concat(p,"/").concat(e),c);case 7:return s=t.sent,t.abrupt("return",s.data);case 11:return t.prev=11,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",t.t0.response.data);case 15:case"end":return t.stop()}}),t,null,[[2,11]])}))),h.apply(this,arguments)}function O(t,e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function t(e,n){var r,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=d()().unix().toString(),c={headers:{session:n.sessionId,securityCode:Object(o.a)(l+n.sessionId+r),timestamp:r}},t.next=5,i.a.get("".concat(p,"/").concat(e,"/details/").concat(n.id),c);case 5:return s=t.sent,t.abrupt("return",s.data);case 9:return t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",t.t0.response.data);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}},755:function(t,e,n){"use strict";n.r(e);var r=n(55),a=n(61),c=n.n(a),s=n(95),i=n(14),o=n(0),u=n(190),d=n(629),p=n(667),l=n.n(p),b=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.name,n=e.size,r=e.type,-1!==["image/png","image/jpg","image/jpeg"].indexOf(r)){t.next=7;break}return l.a.fire({icon:"warning",title:"Files must be type png!"}),t.abrupt("return");case 7:if(!(n>2048e3)){t.next=10;break}return l.a.fire({icon:"warning",title:"Files must be belo 2Mb"}),t.abrupt("return");case 10:return t.abrupt("return",!0);case 13:return a=t.sent,t.abrupt("return",a);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=n(658),f=n(662),h=n(6),O=n(665),m=n(641),x=n(663),v=n(686),g=n(666),y=n(696),_=n(625),S=n(637),E=n(669),T=n(683),w=n(716),C=n(717),k=n.n(C),P=n(20),I=n(1),A=Object(h.a)(S.a)((function(t){var e=t.theme;return"\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: ".concat(e.palette.grey[200],";\n        min-height: 200px;\n        width: 100%;\n        transition: all .2s;\n        :hover{\n            background-color: ").concat(e.palette.grey[400],";\n            cursor: pointer;\n        }\n    ")}));e.default=function(){var t=Object(P.i)().id,e=Object(E.a)(),n=e.register,a=e.handleSubmit,p=e.setValue,h=e.getValues,C=e.formState.errors,D=Object(o.useState)(""),R=Object(i.a)(D,2),F=R[0],K=R[1],H=Object(o.useState)(0),W=Object(i.a)(H,2),U=W[0],L=W[1],B=Object(d.a)(["user"]),N=Object(i.a)(B,2),V=N[0],J=(N[1],Object(P.h)()),M=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={id:e,sessionId:V.user.sessionID,type:"posts"},t.next=3,Object(T.a)("posts",n);case 3:(r=t.sent).results&&(p("id",r.results.id),p("title",r.results.title),p("content",r.results.content),K(r.results.image));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){"undefined"!==typeof t&&M(t)}),[]);var Y=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.image=F,n=Object(r.a)(Object(r.a)({},e),{},{status:U,userId:V.user.userdata.id,sessionId:V.user.sessionID}),t.next=4,Object(T.b)("posts",n);case 4:"success"===(a=t.sent).status&&l.a.fire({icon:"success",title:a.message}).then((function(){J("/management/post")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(s.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=new FormData).append("file",e),n.append("upload_preset","blogs-preset"),fetch("https://api.cloudinary.com/v1_1/ayo-belajar-company/image/upload",{method:"POST",body:n}).then((function(t){return t.json()})).then((function(t){K(t.secure_url)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=Object(s.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e.target.files[0]);case 2:n=t.sent,r=e.target.files[0],n&&z(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(u.a,{children:Object(I.jsx)("title",{children:" Post Form | Blog "})}),Object(I.jsx)(j.a,{children:Object(I.jsx)(f.a,{heading:"Post Form"})}),Object(I.jsx)(O.a,{maxWidth:"lg",children:Object(I.jsx)(x.a,{children:Object(I.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{mt:2,width:1}},noValidate:!0,autoComplete:"off",onSubmit:a(Y),children:[Object(I.jsxs)(g.a,{children:[Object(I.jsx)("input",Object(r.a)({type:"hidden"},n("id"))),Object(I.jsx)(_.a,Object(r.a)(Object(r.a)({margin:"dense",type:"text",label:"Title"},n("title")),{},{helperText:C.title?C.title.message:""})),""!==F?Object(I.jsx)(v.a,{component:"img",image:F,alt:"Posts Image",sx:{mt:2}}):Object(I.jsxs)(A,{onClick:function(){return document.getElementById("btnUpload").click()},sx:{my:2},children:["Add yout post photo",Object(I.jsxs)(S.a,{id:"btnUpload",component:"label",sx:{display:"none"},children:[Object(I.jsx)("input",{type:"file",hidden:!0,onChange:q}),Object(I.jsx)("input",Object(r.a)({type:"file",hidden:!0},n("image")))]})]}),Object(I.jsx)(w.CKEditor,{editor:k.a,data:h("content"),onChange:function(t,e){var n=e.getData();p("content",n)}})]}),Object(I.jsxs)(y.a,{children:[Object(I.jsx)(S.a,{type:"submit",sx:{ml:"auto"},onClick:function(){return L(0)},children:"Save as draft"}),Object(I.jsx)(S.a,{color:"primary",variant:"contained",type:"submit",sx:{ml:"auto"},onClick:function(){return L(1)},children:"Save"})]})]})})})]})}}}]);
//# sourceMappingURL=14.445c92ae.chunk.js.map