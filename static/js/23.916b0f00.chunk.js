(this["webpackJsonptokyo-free-white-react-admin-dashboard"]=this["webpackJsonptokyo-free-white-react-admin-dashboard"]||[]).push([[23],{750:function(e,t,a){"use strict";a.r(t);var s=a(55),n=a(61),r=a.n(n),c=a(95),i=a(14),o=a(190),l=a(665),u=a(664),h=a(663),d=a(757),f=a(666),m=a(641),v=a(625),b=a(637),j=a(3),p=a(2),O=a(0),g=a(39);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseClasses,a=e.newClasses;e.Component;if(!a)return t;var s=Object(p.a)({},t);return Object.keys(a).forEach((function(e){a[e]&&(s[e]="".concat(t[e]," ").concat(a[e]))})),s}var S={set:function(e,t,a,s){var n=e.get(t);n||(n=new Map,e.set(t,n)),n.set(a,s)},get:function(e,t,a){var s=e.get(t);return s?s.get(a):void 0},delete:function(e,t,a){e.get(t).delete(a)}},x=a(556),C=a(626),w=-1e9;function k(){return w+=1}var E=a(303),M=a(302),P=["variant"];function J(e){return 0===e.length}function N(e){var t="function"===typeof e;return{create:function(a,s){var n;try{n=t?e(a):e}catch(o){throw o}if(!s||!a.components||!a.components[s]||!a.components[s].styleOverrides&&!a.components[s].variants)return n;var r=a.components[s].styleOverrides||{},c=a.components[s].variants||[],i=Object(p.a)({},n);return Object.keys(r).forEach((function(e){i[e]=Object(E.a)(i[e]||{},r[e])})),c.forEach((function(e){var t=function(e){var t=e.variant,a=Object(j.a)(e,P),s=t||"";return Object.keys(a).sort().forEach((function(t){s+="color"===t?J(s)?e[t]:Object(M.a)(e[t]):"".concat(J(s)?t:Object(M.a)(t)).concat(Object(M.a)(e[t].toString()))})),s}(e.props);i[t]=Object(E.a)(i[t]||{},e.style)})),i},options:{}}}var A={},R=["name","classNamePrefix","Component","defaultTheme"];function T(e,t,a){var s=e.state;if(e.stylesOptions.disableGeneration)return t||{};s.cacheClasses||(s.cacheClasses={value:null,lastProp:null,lastJSS:{}});var n=!1;return s.classes!==s.cacheClasses.lastJSS&&(s.cacheClasses.lastJSS=s.classes,n=!0),t!==s.cacheClasses.lastProp&&(s.cacheClasses.lastProp=t,n=!0),n&&(s.cacheClasses.value=y({baseClasses:s.cacheClasses.lastJSS,newClasses:t,Component:a})),s.cacheClasses.value}function q(e,t){var a=e.state,s=e.theme,n=e.stylesOptions,r=e.stylesCreator,c=e.name;if(!n.disableGeneration){var i=S.get(n.sheetsManager,r,s);i||(i={refs:0,staticSheet:null,dynamicStyles:null},S.set(n.sheetsManager,r,s,i));var o=Object(p.a)({},r.options,n,{theme:s,flip:"boolean"===typeof n.flip?n.flip:"rtl"===s.direction});o.generateId=o.serverGenerateClassName||o.generateClassName;var l=n.sheetsRegistry;if(0===i.refs){var u;n.sheetsCache&&(u=S.get(n.sheetsCache,r,s));var h=r.create(s,c);u||((u=n.jss.createStyleSheet(h,Object(p.a)({link:!1},o))).attach(),n.sheetsCache&&S.set(n.sheetsCache,r,s,u)),l&&l.add(u),i.staticSheet=u,i.dynamicStyles=Object(g.d)(h)}if(i.dynamicStyles){var d=n.jss.createStyleSheet(i.dynamicStyles,Object(p.a)({link:!0},o));d.update(t),d.attach(),a.dynamicSheet=d,a.classes=y({baseClasses:i.staticSheet.classes,newClasses:d.classes}),l&&l.add(d)}else a.classes=i.staticSheet.classes;i.refs+=1}}function G(e,t){var a=e.state;a.dynamicSheet&&a.dynamicSheet.update(t)}function W(e){var t=e.state,a=e.theme,s=e.stylesOptions,n=e.stylesCreator;if(!s.disableGeneration){var r=S.get(s.sheetsManager,n,a);r.refs-=1;var c=s.sheetsRegistry;0===r.refs&&(S.delete(s.sheetsManager,n,a),s.jss.removeStyleSheet(r.staticSheet),c&&c.remove(r.staticSheet)),t.dynamicSheet&&(s.jss.removeStyleSheet(t.dynamicSheet),c&&c.remove(t.dynamicSheet))}}function I(e,t){var a,s=O.useRef([]),n=O.useMemo((function(){return{}}),t);s.current!==n&&(s.current=n,a=e()),O.useEffect((function(){return function(){a&&a()}}),[n])}var L=a(669),Z=a(20),B=a(199),F=a(667),D=a.n(F),V=a(629),$=a(1),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.name,s=t.classNamePrefix,n=t.Component,r=t.defaultTheme,c=void 0===r?A:r,i=Object(j.a)(t,R),o=N(e),l=a||s||"makeStyles";o.options={index:k(),name:a,meta:l,classNamePrefix:l};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(x.a)()||c,s=Object(p.a)({},O.useContext(C.a),i),r=O.useRef(),l=O.useRef();I((function(){var n={name:a,state:{},stylesCreator:o,stylesOptions:s,theme:t};return q(n,e),l.current=!1,r.current=n,function(){W(n)}}),[t,o]),O.useEffect((function(){l.current&&G(r.current,e),l.current=!0}));var u=T(r.current,e.classes,n);return u};return u}({containerStyle:{margin:"1rem",height:"100vh"}});t.default=function(){var e=Object(V.a)(["user"]),t=Object(i.a)(e,2),a=t[0],n=t[1],j=_(),p=Object(Z.h)();Object(O.useEffect)((function(){Object.keys(a).length>0&&p("/dashboards")}),[]);var g=Object(L.a)(),y=g.register,S=g.handleSubmit,x=g.formState.errors,C=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)(t.email,t.password);case 2:"success"===(a=e.sent).status?(n("user",JSON.stringify(a.session),{path:null===(s=a.session)||void 0===s?void 0:s.cookie.path,maxAge:null===(c=a.session)||void 0===c?void 0:c.cookie.originalMaxAge,sameSite:!0}),p("/dashboards")):D.a.fire({icon:"warning",title:a.message});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(o.a,{children:Object($.jsx)("title",{children:"Login - Blog"})}),Object($.jsx)(l.a,{maxWidth:"lg",children:Object($.jsx)(u.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,className:j.containerStyle,children:Object($.jsx)(u.a,{item:!0,xs:12,md:9,lg:6,children:Object($.jsxs)(h.a,{children:[Object($.jsx)(d.a,{title:"Blog Login form"}),Object($.jsx)(f.a,{children:Object($.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{mt:2,width:1}},noValidate:!0,autoComplete:"off",onSubmit:S(C),children:[Object($.jsx)(v.a,Object(s.a)(Object(s.a)({fullWidth:!0,id:"fullWidth",label:"Email"},y("email",{required:{value:!0,message:"Email is required!"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address!"}})),{},{helperText:x.email?x.email.message:""})),Object($.jsx)(v.a,Object(s.a)(Object(s.a)({fullWidth:!0,label:"Password",type:"password"},y("password",{required:{value:!0,message:"Password is required!"}})),{},{helperText:x.password?x.password.message:""})),Object($.jsx)(b.a,{type:"submit",variant:"contained",sx:{mt:2},children:" Login "}),Object($.jsx)(b.a,{type:"button",variant:"text",sx:{mt:2,float:"right"},onClick:function(){return p("/register")},children:" Daftar "})]})})]})})})})]})}}}]);
//# sourceMappingURL=23.916b0f00.chunk.js.map