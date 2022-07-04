(this["webpackJsonptokyo-free-white-react-admin-dashboard"]=this["webpackJsonptokyo-free-white-react-admin-dashboard"]||[]).push([[20],{663:function(t,e,a){"use strict";var n=a(2),i=a(3),r=a(0),s=(a(7),a(9)),o=a(300),c=a(6),d=a(12),u=a(643),l=a(188),b=a(301);function h(t){return Object(l.a)("MuiCard",t)}Object(b.a)("MuiCard",["root"]);var j=a(1),x=["className","raised"],m=Object(c.a)(u.a,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),f=r.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiCard"}),r=a.className,c=a.raised,u=void 0!==c&&c,l=Object(i.a)(a,x),b=Object(n.a)({},a,{raised:u}),f=function(t){var e=t.classes;return Object(o.a)({root:["root"]},h,e)}(b);return Object(j.jsx)(m,Object(n.a)({className:Object(s.a)(f.root,r),elevation:u?8:void 0,ref:e,styleProps:b},l))}));e.a=f},665:function(t,e,a){"use strict";var n=a(5),i=a(3),r=a(2),s=a(0),o=(a(7),a(9)),c=a(300),d=a(12),u=a(6),l=a(188),b=a(301);function h(t){return Object(l.a)("MuiContainer",t)}Object(b.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var j=a(10),x=a(1),m=["className","component","disableGutters","fixed","maxWidth"],f=Object(u.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return[e.root,e["maxWidth".concat(Object(j.a)(String(a.maxWidth)))],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,a=t.styleProps;return Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&Object(n.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.styleProps.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:"".concat(n).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,a=t.styleProps;return Object(r.a)({},"xs"===a.maxWidth&&Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&Object(n.a)({},e.breakpoints.up(a.maxWidth),{maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)}))})),p=s.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiContainer"}),n=a.className,s=a.component,u=void 0===s?"div":s,l=a.disableGutters,b=void 0!==l&&l,p=a.fixed,O=void 0!==p&&p,v=a.maxWidth,g=void 0===v?"lg":v,W=Object(i.a)(a,m),k=Object(r.a)({},a,{component:u,disableGutters:b,fixed:O,maxWidth:g}),y=function(t){var e=t.classes,a=t.fixed,n=t.disableGutters,i=t.maxWidth,r={root:["root",i&&"maxWidth".concat(Object(j.a)(String(i))),a&&"fixed",n&&"disableGutters"]};return Object(c.a)(r,h,e)}(k);return Object(x.jsx)(f,Object(r.a)({as:u,styleProps:k,className:Object(o.a)(y.root,n),ref:e},W))}));e.a=p},745:function(t,e,a){"use strict";a.r(e);var n=a(641),i=a(634),r=a(637),s=a(665),o=a(142),c=a(663),d=a(645),u=a(649),l=a(618),b=a(190),h=a(182),j=a.n(h),x=a(6),m=a(1),f=Object(x.a)(n.a)((function(t){t.theme;return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),p=Object(x.a)(i.a)((function(t){var e=t.theme;return"\n    background-color: ".concat(e.colors.alpha.white[100],";\n")})),O=Object(x.a)(r.a)((function(t){var e=t.theme;return"\n    margin-right: -".concat(e.spacing(1),";\n")}));e.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b.a,{children:Object(m.jsx)("title",{children:"Status - 404"})}),Object(m.jsx)(f,{children:Object(m.jsxs)(s.a,{maxWidth:"md",children:[Object(m.jsxs)(n.a,{textAlign:"center",children:[Object(m.jsx)("img",{alt:"404",height:180,src:"/static/images/status/404.svg"}),Object(m.jsx)(o.a,{variant:"h2",sx:{my:2},children:"The page you were looking for doesn't exist."}),Object(m.jsx)(o.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"It's on us, we moved the content to a different page. The search below should help!"})]}),Object(m.jsx)(s.a,{maxWidth:"sm",children:Object(m.jsxs)(c.a,{sx:{textAlign:"center",mt:3,p:4},children:[Object(m.jsx)(d.a,{variant:"outlined",fullWidth:!0,children:Object(m.jsx)(p,{type:"text",placeholder:"Search terms here...",endAdornment:Object(m.jsx)(u.a,{position:"end",children:Object(m.jsx)(O,{variant:"contained",size:"small",children:"Search"})}),startAdornment:Object(m.jsx)(u.a,{position:"start",children:Object(m.jsx)(j.a,{})})})}),Object(m.jsx)(l.a,{sx:{my:4},children:"OR"}),Object(m.jsx)(r.a,{href:"/overview",variant:"outlined",children:"Go to homepage"})]})})]})})]})}}}]);
//# sourceMappingURL=20.ca78d862.chunk.js.map