(this["webpackJsonptokyo-free-white-react-admin-dashboard"]=this["webpackJsonptokyo-free-white-react-admin-dashboard"]||[]).push([[16],{663:function(t,n,e){"use strict";var r=e(2),a=e(3),c=e(0),o=(e(7),e(9)),i=e(300),s=e(6),d=e(12),u=e(643),l=e(188),p=e(301);function m(t){return Object(l.a)("MuiCard",t)}Object(p.a)("MuiCard",["root"]);var g=e(1),b=["className","raised"],f=Object(s.a)(u.a,{name:"MuiCard",slot:"Root",overridesResolver:function(t,n){return n.root}})((function(){return{overflow:"hidden"}})),v=c.forwardRef((function(t,n){var e=Object(d.a)({props:t,name:"MuiCard"}),c=e.className,s=e.raised,u=void 0!==s&&s,l=Object(a.a)(e,b),p=Object(r.a)({},e,{raised:u}),v=function(t){var n=t.classes;return Object(i.a)({root:["root"]},m,n)}(p);return Object(g.jsx)(f,Object(r.a)({className:Object(o.a)(v.root,c),elevation:u?8:void 0,ref:n,styleProps:p},l))}));n.a=v},664:function(t,n,e){"use strict";var r=e(5),a=e(3),c=e(2),o=e(0),i=(e(7),e(9)),s=e(34),d=e(612),u=e(300),l=e(6),p=e(12);var m=o.createContext(),g=e(27),b=e(188),f=e(301);function v(t){return Object(b.a)("MuiGrid",t)}var j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=Object(f.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(g.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),Object(g.a)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),Object(g.a)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),Object(g.a)(j.map((function(t){return"grid-xs-".concat(t)}))),Object(g.a)(j.map((function(t){return"grid-sm-".concat(t)}))),Object(g.a)(j.map((function(t){return"grid-md-".concat(t)}))),Object(g.a)(j.map((function(t){return"grid-lg-".concat(t)}))),Object(g.a)(j.map((function(t){return"grid-xl-".concat(t)}))))),O=e(1),h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(t){var n=parseFloat(t);return"".concat(n).concat(String(t).replace(String(n),"")||"px")}function S(t,n,e,r){var a=r[e];if(a){var o={};if(!0===a)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===a)o={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else{var i=function(t){var n,e=t.values,r=t.base,a=Object.keys(r);return 0===a.length?e:a.reduce((function(t,r){return t[r]="object"===typeof e?null!=e[r]?e[r]:e[n]:e,n=r,t}),{})}({values:r.columns,base:n.breakpoints.values}),s="".concat(Math.round(a/i[e]*1e8)/1e6,"%"),d={};if(r.container&&r.item&&0!==r.columnSpacing){var u=n.spacing(r.columnSpacing);if("0px"!==u){var l="calc(".concat(s," + ").concat(w(u),")");d={flexBasis:l,maxWidth:l}}}o=Object(c.a)({flexBasis:s,flexGrow:0,maxWidth:s},d)}0===n.breakpoints.values[e]?Object.assign(t,o):t[n.breakpoints.up(e)]=o}}var y=Object(l.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,n){var e=t.styleProps,r=e.container,a=e.direction,c=e.item,o=e.lg,i=e.md,s=e.sm,d=e.spacing,u=e.wrap,l=e.xl,p=e.xs,m=e.zeroMinWidth;return[n.root,r&&n.container,c&&n.item,m&&n.zeroMinWidth,r&&0!==d&&n["spacing-xs-".concat(String(d))],"row"!==a&&n["direction-xs-".concat(String(a))],"wrap"!==u&&n["wrap-xs-".concat(String(u))],!1!==p&&n["grid-xs-".concat(String(p))],!1!==s&&n["grid-sm-".concat(String(s))],!1!==i&&n["grid-md-".concat(String(i))],!1!==o&&n["grid-lg-".concat(String(o))],!1!==l&&n["grid-xl-".concat(String(l))]]}})((function(t){var n=t.styleProps;return Object(c.a)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"nowrap"===n.wrap&&{flexWrap:"nowrap"},"reverse"===n.wrap&&{flexWrap:"wrap-reverse"})}),(function(t){var n=t.theme,e=t.styleProps;return Object(s.b)({theme:n},e.direction,(function(t){var n={flexDirection:t};return 0===t.indexOf("column")&&(n["& > .".concat(x.item)]={maxWidth:"none"}),n}))}),(function(t){var n=t.theme,e=t.styleProps,a=e.container,c=e.rowSpacing,o={};return a&&0!==c&&(o=Object(s.b)({theme:n},c,(function(t){var e=n.spacing(t);return"0px"!==e?Object(r.a)({marginTop:"-".concat(w(e))},"& > .".concat(x.item),{paddingTop:w(e)}):{}}))),o}),(function(t){var n=t.theme,e=t.styleProps,a=e.container,c=e.columnSpacing,o={};return a&&0!==c&&(o=Object(s.b)({theme:n},c,(function(t){var e=n.spacing(t);return"0px"!==e?Object(r.a)({width:"calc(100% + ".concat(w(e),")"),marginLeft:"-".concat(w(e))},"& > .".concat(x.item),{paddingLeft:w(e)}):{}}))),o}),(function(t){var n=t.theme,e=t.styleProps;return n.breakpoints.keys.reduce((function(t,r){return S(t,n,r,e),t}),{})})),M=o.forwardRef((function(t,n){var e,r=Object(p.a)({props:t,name:"MuiGrid"}),s=Object(d.a)(r),l=s.className,g=s.columns,b=void 0===g?12:g,f=s.columnSpacing,j=s.component,x=void 0===j?"div":j,w=s.container,S=void 0!==w&&w,M=s.direction,C=void 0===M?"row":M,W=s.item,k=void 0!==W&&W,z=s.lg,P=void 0!==z&&z,R=s.md,N=void 0!==R&&R,B=s.rowSpacing,G=s.sm,D=void 0!==G&&G,F=s.spacing,I=void 0===F?0:F,J=s.wrap,L=void 0===J?"wrap":J,T=s.xl,Y=void 0!==T&&T,q=s.xs,A=void 0!==q&&q,E=s.zeroMinWidth,H=void 0!==E&&E,K=Object(a.a)(s,h),Q=B||I,U=f||I,V=o.useContext(m)||b,X=Object(c.a)({},s,{columns:V,container:S,direction:C,item:k,lg:P,md:N,sm:D,rowSpacing:Q,columnSpacing:U,wrap:L,xl:Y,xs:A,zeroMinWidth:H}),Z=function(t){var n=t.classes,e=t.container,r=t.direction,a=t.item,c=t.lg,o=t.md,i=t.sm,s=t.spacing,d=t.wrap,l=t.xl,p=t.xs,m={root:["root",e&&"container",a&&"item",t.zeroMinWidth&&"zeroMinWidth",e&&0!==s&&"spacing-xs-".concat(String(s)),"row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==p&&"grid-xs-".concat(String(p)),!1!==i&&"grid-sm-".concat(String(i)),!1!==o&&"grid-md-".concat(String(o)),!1!==c&&"grid-lg-".concat(String(c)),!1!==l&&"grid-xl-".concat(String(l))]};return Object(u.a)(m,v,n)}(X);return e=Object(O.jsx)(y,Object(c.a)({styleProps:X,className:Object(i.a)(Z.root,l),as:x,ref:n},K)),12!==V?Object(O.jsx)(m.Provider,{value:V,children:e}):e}));n.a=M},666:function(t,n,e){"use strict";var r=e(2),a=e(3),c=e(0),o=(e(7),e(9)),i=e(300),s=e(6),d=e(12),u=e(188),l=e(301);function p(t){return Object(u.a)("MuiCardContent",t)}Object(l.a)("MuiCardContent",["root"]);var m=e(1),g=["className","component"],b=Object(s.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=c.forwardRef((function(t,n){var e=Object(d.a)({props:t,name:"MuiCardContent"}),c=e.className,s=e.component,u=void 0===s?"div":s,l=Object(a.a)(e,g),f=Object(r.a)({},e,{component:u}),v=function(t){var n=t.classes;return Object(i.a)({root:["root"]},p,n)}(f);return Object(m.jsx)(b,Object(r.a)({as:u,className:Object(o.a)(v.root,c),styleProps:f,ref:n},l))}));n.a=f},742:function(t,n,e){"use strict";e.r(n);var r=e(190),a=e(664),c=e(663),o=e(666),i=e(641),s=e(142),d=e(637),u=e(1),l={paperContainer:{height:"100vh",backgroundImage:"url(".concat("/background.jpg",")"),backgroundSize:"cover",borderRadius:"0 !important"},overlay:{background:"rgba(0, 0, 0, .5)",height:"100vh"}};n.default=function(){return console.log(l.overlay),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{children:Object(u.jsx)("title",{children:" Dynasis | Blogs "})}),Object(u.jsx)(a.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:Object(u.jsx)(a.a,{item:!0,xs:12,children:Object(u.jsx)(c.a,{sx:l.paperContainer,children:Object(u.jsx)(o.a,{sx:l.overlay,children:Object(u.jsxs)(i.a,{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#fff",children:[Object(u.jsx)(s.a,{variant:"h1",pb:4,align:"center",children:"Welcome to Fadhli Yulyanto Blogs"}),Object(u.jsx)(d.a,{color:"primary",variant:"contained",children:"Click Me"})]})})})})})]})}}}]);
//# sourceMappingURL=16.a303b66a.chunk.js.map