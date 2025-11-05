var Zn=Object.defineProperty;var Xn=(e,t,o)=>t in e?Zn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var R=(e,t,o)=>Xn(e,typeof t!="symbol"?t+"":t,o);import{r as d,a as Jn,e as G,c as Kn}from"./vendor-C_1HgqiI.js";import{m as B,d as h,G as O,l as Oo}from"./ui-DJvbdRdB.js";import{u as U,i as ei,a as ti}from"./i18n-yS3FBAcD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();var Sr={exports:{}},Xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi=d,ri=Symbol.for("react.element"),ni=Symbol.for("react.fragment"),ii=Object.prototype.hasOwnProperty,ai=oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,si={key:!0,ref:!0,__self:!0,__source:!0};function kr(e,t,o){var n,a={},s=null,l=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)ii.call(t,n)&&!si.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:ri,type:e,key:s,ref:l,props:a,_owner:ai.current}}Xe.Fragment=ni;Xe.jsx=kr;Xe.jsxs=kr;Sr.exports=Xe;var r=Sr.exports,Tr,Po=Jn;Tr=Po.createRoot,Po.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ho="popstate";function li(e={}){function t(n,a){let{pathname:s,search:l,hash:u}=n.location;return Mt("",{pathname:s,search:l,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(n,a){return typeof a=="string"?a:Ee(a)}return di(t,o,null,e)}function F(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Q(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ci(){return Math.random().toString(36).substring(2,10)}function $o(e,t){return{usr:e.state,key:e.key,idx:t}}function Mt(e,t,o=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?me(t):t,state:o,key:t&&t.key||n||ci()}}function Ee({pathname:e="/",search:t="",hash:o=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function me(e){let t={};if(e){let o=e.indexOf("#");o>=0&&(t.hash=e.substring(o),e=e.substring(0,o));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function di(e,t,o,n={}){let{window:a=document.defaultView,v5Compat:s=!1}=n,l=a.history,u="POP",c=null,p=m();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function m(){return(l.state||{idx:null}).idx}function v(){u="POP";let y=m(),w=y==null?null:y-p;p=y,c&&c({action:u,location:b.location,delta:w})}function S(y,w){u="PUSH";let C=Mt(b.location,y,w);p=m()+1;let x=$o(C,p),T=b.createHref(C);try{l.pushState(x,"",T)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(T)}s&&c&&c({action:u,location:b.location,delta:1})}function g(y,w){u="REPLACE";let C=Mt(b.location,y,w);p=m();let x=$o(C,p),T=b.createHref(C);l.replaceState(x,"",T),s&&c&&c({action:u,location:b.location,delta:0})}function f(y){return ui(y)}let b={get action(){return u},get location(){return e(a,l)},listen(y){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Ho,v),c=y,()=>{a.removeEventListener(Ho,v),c=null}},createHref(y){return t(a,y)},createURL:f,encodeLocation(y){let w=f(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:g,go(y){return l.go(y)}};return b}function ui(e,t=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),F(o,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Ee(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=o+n),new URL(n,o)}function jr(e,t,o="/"){return hi(e,t,o,!1)}function hi(e,t,o,n){let a=typeof t=="string"?me(t):t,s=ne(a.pathname||"/",o);if(s==null)return null;let l=Ir(e);pi(l);let u=null;for(let c=0;u==null&&c<l.length;++c){let p=ki(s);u=Ci(l[c],p,n)}return u}function Ir(e,t=[],o=[],n="",a=!1){let s=(l,u,c=a,p)=>{let m={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&c)return;F(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let v=oe([n,m.relativePath]),S=o.concat(m);l.children&&l.children.length>0&&(F(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ir(l.children,t,S,v,c)),!(l.path==null&&!l.index)&&t.push({path:v,score:yi(v,l.index),routesMeta:S})};return e.forEach((l,u)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,u);else for(let p of Er(l.path))s(l,u,!0,p)}),t}function Er(e){let t=e.split("/");if(t.length===0)return[];let[o,...n]=t,a=o.endsWith("?"),s=o.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let l=Er(n.join("/")),u=[];return u.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&u.push(...l),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function pi(e){e.sort((t,o)=>t.score!==o.score?o.score-t.score:wi(t.routesMeta.map(n=>n.childrenIndex),o.routesMeta.map(n=>n.childrenIndex)))}var fi=/^:[\w-]+$/,mi=3,gi=2,xi=1,vi=10,bi=-2,Do=e=>e==="*";function yi(e,t){let o=e.split("/"),n=o.length;return o.some(Do)&&(n+=bi),t&&(n+=gi),o.filter(a=>!Do(a)).reduce((a,s)=>a+(fi.test(s)?mi:s===""?xi:vi),n)}function wi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Ci(e,t,o=!1){let{routesMeta:n}=e,a={},s="/",l=[];for(let u=0;u<n.length;++u){let c=n[u],p=u===n.length-1,m=s==="/"?t:t.slice(s.length)||"/",v=Ye({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},m),S=c.route;if(!v&&p&&o&&!n[n.length-1].route.index&&(v=Ye({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!v)return null;Object.assign(a,v.params),l.push({params:a,pathname:oe([s,v.pathname]),pathnameBase:Ei(oe([s,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(s=oe([s,v.pathnameBase]))}return l}function Ye(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,n]=Si(e.path,e.caseSensitive,e.end),a=t.match(o);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((p,{paramName:m,isOptional:v},S)=>{if(m==="*"){let f=u[S]||"";l=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}const g=u[S];return v&&!g?p[m]=void 0:p[m]=(g||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:l,pattern:e}}function Si(e,t=!1,o=!0){Q(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,c)=>(n.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function ki(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Q(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ne(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let o=t.endsWith("/")?t.length-1:t.length,n=e.charAt(o);return n&&n!=="/"?null:e.slice(o)||"/"}function Ti(e,t="/"){let{pathname:o,search:n="",hash:a=""}=typeof e=="string"?me(e):e;return{pathname:o?o.startsWith("/")?o:ji(o,t):t,search:_i(n),hash:Ri(a)}}function ji(e,t){let o=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function kt(e,t,o,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ii(e){return e.filter((t,o)=>o===0||t.route.path&&t.route.path.length>0)}function _r(e){let t=Ii(e);return t.map((o,n)=>n===t.length-1?o.pathname:o.pathnameBase)}function Rr(e,t,o,n=!1){let a;typeof e=="string"?a=me(e):(a={...e},F(!a.pathname||!a.pathname.includes("?"),kt("?","pathname","search",a)),F(!a.pathname||!a.pathname.includes("#"),kt("#","pathname","hash",a)),F(!a.search||!a.search.includes("#"),kt("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,u;if(l==null)u=o;else{let v=t.length-1;if(!n&&l.startsWith("..")){let S=l.split("/");for(;S[0]==="..";)S.shift(),v-=1;a.pathname=S.join("/")}u=v>=0?t[v]:"/"}let c=Ti(a,u),p=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(p||m)&&(c.pathname+="/"),c}var oe=e=>e.join("/").replace(/\/\/+/g,"/"),Ei=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_i=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ri=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zi(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var zr=["POST","PUT","PATCH","DELETE"];new Set(zr);var Mi=["GET",...zr];new Set(Mi);var ge=d.createContext(null);ge.displayName="DataRouter";var Je=d.createContext(null);Je.displayName="DataRouterState";d.createContext(!1);var Mr=d.createContext({isTransitioning:!1});Mr.displayName="ViewTransition";var Ai=d.createContext(new Map);Ai.displayName="Fetchers";var Li=d.createContext(null);Li.displayName="Await";var K=d.createContext(null);K.displayName="Navigation";var Re=d.createContext(null);Re.displayName="Location";var ee=d.createContext({outlet:null,matches:[],isDataRoute:!1});ee.displayName="Route";var Dt=d.createContext(null);Dt.displayName="RouteError";function Oi(e,{relative:t}={}){F(ze(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:n}=d.useContext(K),{hash:a,pathname:s,search:l}=Me(e,{relative:t}),u=s;return o!=="/"&&(u=s==="/"?o:oe([o,s])),n.createHref({pathname:u,search:l,hash:a})}function ze(){return d.useContext(Re)!=null}function ie(){return F(ze(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Re).location}var Ar="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lr(e){d.useContext(K).static||d.useLayoutEffect(e)}function ue(){let{isDataRoute:e}=d.useContext(ee);return e?Zi():Pi()}function Pi(){F(ze(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(ge),{basename:t,navigator:o}=d.useContext(K),{matches:n}=d.useContext(ee),{pathname:a}=ie(),s=JSON.stringify(_r(n)),l=d.useRef(!1);return Lr(()=>{l.current=!0}),d.useCallback((c,p={})=>{if(Q(l.current,Ar),!l.current)return;if(typeof c=="number"){o.go(c);return}let m=Rr(c,JSON.parse(s),a,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:oe([t,m.pathname])),(p.replace?o.replace:o.push)(m,p.state,p)},[t,o,s,a,e])}var Hi=d.createContext(null);function $i(e){let t=d.useContext(ee).outlet;return t&&d.createElement(Hi.Provider,{value:e},t)}function Me(e,{relative:t}={}){let{matches:o}=d.useContext(ee),{pathname:n}=ie(),a=JSON.stringify(_r(o));return d.useMemo(()=>Rr(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function Di(e,t){return Or(e,t)}function Or(e,t,o,n,a){var C;F(ze(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=d.useContext(K),{matches:l}=d.useContext(ee),u=l[l.length-1],c=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",v=u&&u.route;{let x=v&&v.path||"";Pr(p,!v||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let S=ie(),g;if(t){let x=typeof t=="string"?me(t):t;F(m==="/"||((C=x.pathname)==null?void 0:C.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),g=x}else g=S;let f=g.pathname||"/",b=f;if(m!=="/"){let x=m.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=jr(e,{pathname:b});Q(v||y!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Q(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=Vi(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:oe([m,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:oe([m,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,o,n,a);return t&&w?d.createElement(Re.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},w):w}function Fi(){let e=Qi(),t=zi(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:s},"ErrorBoundary")," or"," ",d.createElement("code",{style:s},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),o?d.createElement("pre",{style:a},o):null,l)}var Bi=d.createElement(Fi,null),Ni=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?d.createElement(ee.Provider,{value:this.props.routeContext},d.createElement(Dt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ui({routeContext:e,match:t,children:o}){let n=d.useContext(ge);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(ee.Provider,{value:e},o)}function Vi(e,t=[],o=null,n=null,a=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(t.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,l=o==null?void 0:o.errors;if(l!=null){let p=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);F(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,c=-1;if(o)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:v,errors:S}=o,g=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!S||S[m.route.id]===void 0);if(m.route.lazy||g){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,m,v)=>{let S,g=!1,f=null,b=null;o&&(S=l&&m.route.id?l[m.route.id]:void 0,f=m.route.errorElement||Bi,u&&(c<0&&v===0?(Pr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,b=null):c===v&&(g=!0,b=m.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,v+1)),w=()=>{let C;return S?C=f:g?C=b:m.route.Component?C=d.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=p,d.createElement(Ui,{match:m,routeContext:{outlet:p,matches:y,isDataRoute:o!=null},children:C})};return o&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?d.createElement(Ni,{location:o.location,revalidation:o.revalidation,component:f,error:S,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:n}):w()},null)}function Ft(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wi(e){let t=d.useContext(ge);return F(t,Ft(e)),t}function qi(e){let t=d.useContext(Je);return F(t,Ft(e)),t}function Gi(e){let t=d.useContext(ee);return F(t,Ft(e)),t}function Bt(e){let t=Gi(e),o=t.matches[t.matches.length-1];return F(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function Yi(){return Bt("useRouteId")}function Qi(){var n;let e=d.useContext(Dt),t=qi("useRouteError"),o=Bt("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[o]}function Zi(){let{router:e}=Wi("useNavigate"),t=Bt("useNavigate"),o=d.useRef(!1);return Lr(()=>{o.current=!0}),d.useCallback(async(a,s={})=>{Q(o.current,Ar),o.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...s}))},[e,t])}var Fo={};function Pr(e,t,o){!t&&!Fo[e]&&(Fo[e]=!0,Q(!1,o))}d.memo(Xi);function Xi({routes:e,future:t,state:o,unstable_onError:n}){return Or(e,void 0,o,n,t)}function Ji(e){return $i(e.context)}function le(e){F(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ki({basename:e="/",children:t=null,location:o,navigationType:n="POP",navigator:a,static:s=!1}){F(!ze(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),u=d.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);typeof o=="string"&&(o=me(o));let{pathname:c="/",search:p="",hash:m="",state:v=null,key:S="default"}=o,g=d.useMemo(()=>{let f=ne(c,l);return f==null?null:{location:{pathname:f,search:p,hash:m,state:v,key:S},navigationType:n}},[l,c,p,m,v,S,n]);return Q(g!=null,`<Router basename="${l}"> is not able to match the URL "${c}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:d.createElement(K.Provider,{value:u},d.createElement(Re.Provider,{children:t,value:g}))}function ea({children:e,location:t}){return Di(At(e),t)}function At(e,t=[]){let o=[];return d.Children.forEach(e,(n,a)=>{if(!d.isValidElement(n))return;let s=[...t,a];if(n.type===d.Fragment){o.push.apply(o,At(n.props.children,s));return}F(n.type===le,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),F(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=At(n.props.children,s)),o.push(l)}),o}var qe="get",Ge="application/x-www-form-urlencoded";function Ke(e){return e!=null&&typeof e.tagName=="string"}function ta(e){return Ke(e)&&e.tagName.toLowerCase()==="button"}function oa(e){return Ke(e)&&e.tagName.toLowerCase()==="form"}function ra(e){return Ke(e)&&e.tagName.toLowerCase()==="input"}function na(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ia(e,t){return e.button===0&&(!t||t==="_self")&&!na(e)}function Lt(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,o)=>{let n=e[o];return t.concat(Array.isArray(n)?n.map(a=>[o,a]):[[o,n]])},[]))}function aa(e,t){let o=Lt(e);return t&&t.forEach((n,a)=>{o.has(a)||t.getAll(a).forEach(s=>{o.append(a,s)})}),o}var De=null;function sa(){if(De===null)try{new FormData(document.createElement("form"),0),De=!1}catch{De=!0}return De}var la=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tt(e){return e!=null&&!la.has(e)?(Q(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ge}"`),null):e}function ca(e,t){let o,n,a,s,l;if(oa(e)){let u=e.getAttribute("action");n=u?ne(u,t):null,o=e.getAttribute("method")||qe,a=Tt(e.getAttribute("enctype"))||Ge,s=new FormData(e)}else if(ta(e)||ra(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||u.getAttribute("action");if(n=c?ne(c,t):null,o=e.getAttribute("formmethod")||u.getAttribute("method")||qe,a=Tt(e.getAttribute("formenctype"))||Tt(u.getAttribute("enctype"))||Ge,s=new FormData(u,e),!sa()){let{name:p,type:m,value:v}=e;if(m==="image"){let S=p?`${p}.`:"";s.append(`${S}x`,"0"),s.append(`${S}y`,"0")}else p&&s.append(p,v)}}else{if(Ke(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=qe,n=null,a=Ge,l=e}return s&&a==="text/plain"&&(l=s,s=void 0),{action:n,method:o.toLowerCase(),encType:a,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function da(e,t,o){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${o}`:t&&ne(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${o}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${o}`,n}async function ua(e,t){if(e.id in t)return t[e.id];try{let o=await import(e.module);return t[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ha(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function pa(e,t,o){let n=await Promise.all(e.map(async a=>{let s=t.routes[a.route.id];if(s){let l=await ua(s,o);return l.links?l.links():[]}return[]}));return xa(n.flat(1).filter(ha).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Bo(e,t,o,n,a,s){let l=(c,p)=>o[p]?c.route.id!==o[p].route.id:!0,u=(c,p)=>{var m;return o[p].pathname!==c.pathname||((m=o[p].route.path)==null?void 0:m.endsWith("*"))&&o[p].params["*"]!==c.params["*"]};return s==="assets"?t.filter((c,p)=>l(c,p)||u(c,p)):s==="data"?t.filter((c,p)=>{var v;let m=n.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,p)||u(c,p))return!0;if(c.route.shouldRevalidate){let S=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=o[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function fa(e,t,{includeHydrateFallback:o}={}){return ma(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),o&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function ma(e){return[...new Set(e)]}function ga(e){let t={},o=Object.keys(e).sort();for(let n of o)t[n]=e[n];return t}function xa(e,t){let o=new Set;return new Set(t),e.reduce((n,a)=>{let s=JSON.stringify(ga(a));return o.has(s)||(o.add(s),n.push({key:s,link:a})),n},[])}function Hr(){let e=d.useContext(ge);return Nt(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function va(){let e=d.useContext(Je);return Nt(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ut=d.createContext(void 0);Ut.displayName="FrameworkContext";function $r(){let e=d.useContext(Ut);return Nt(e,"You must render this element inside a <HydratedRouter> element"),e}function ba(e,t){let o=d.useContext(Ut),[n,a]=d.useState(!1),[s,l]=d.useState(!1),{onFocus:u,onBlur:c,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=t,S=d.useRef(null);d.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let b=w=>{w.forEach(C=>{l(C.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return S.current&&y.observe(S.current),()=>{y.disconnect()}}},[e]),d.useEffect(()=>{if(n){let b=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(b)}}},[n]);let g=()=>{a(!0)},f=()=>{a(!1),l(!1)};return o?e!=="intent"?[s,S,{}]:[s,S,{onFocus:Se(u,g),onBlur:Se(c,f),onMouseEnter:Se(p,g),onMouseLeave:Se(m,f),onTouchStart:Se(v,g)}]:[!1,S,{}]}function Se(e,t){return o=>{e&&e(o),o.defaultPrevented||t(o)}}function ya({page:e,...t}){let{router:o}=Hr(),n=d.useMemo(()=>jr(o.routes,e,o.basename),[o.routes,e,o.basename]);return n?d.createElement(Ca,{page:e,matches:n,...t}):null}function wa(e){let{manifest:t,routeModules:o}=$r(),[n,a]=d.useState([]);return d.useEffect(()=>{let s=!1;return pa(e,t,o).then(l=>{s||a(l)}),()=>{s=!0}},[e,t,o]),n}function Ca({page:e,matches:t,...o}){let n=ie(),{manifest:a,routeModules:s}=$r(),{basename:l}=Hr(),{loaderData:u,matches:c}=va(),p=d.useMemo(()=>Bo(e,t,c,a,n,"data"),[e,t,c,a,n]),m=d.useMemo(()=>Bo(e,t,c,a,n,"assets"),[e,t,c,a,n]),v=d.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let f=new Set,b=!1;if(t.forEach(w=>{var x;let C=a.routes[w.route.id];!C||!C.hasLoader||(!p.some(T=>T.route.id===w.route.id)&&w.route.id in u&&((x=s[w.route.id])!=null&&x.shouldRevalidate)||C.hasClientLoader?b=!0:f.add(w.route.id))}),f.size===0)return[];let y=da(e,l,"data");return b&&f.size>0&&y.searchParams.set("_routes",t.filter(w=>f.has(w.route.id)).map(w=>w.route.id).join(",")),[y.pathname+y.search]},[l,u,n,a,p,t,e,s]),S=d.useMemo(()=>fa(m,a),[m,a]),g=wa(m);return d.createElement(d.Fragment,null,v.map(f=>d.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})),S.map(f=>d.createElement("link",{key:f,rel:"modulepreload",href:f,...o})),g.map(({key:f,link:b})=>d.createElement("link",{key:f,nonce:o.nonce,...b})))}function Sa(...e){return t=>{e.forEach(o=>{typeof o=="function"?o(t):o!=null&&(o.current=t)})}}var Dr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dr&&(window.__reactRouterVersion="7.8.2")}catch{}function ka({basename:e,children:t,window:o}){let n=d.useRef();n.current==null&&(n.current=li({window:o,v5Compat:!0}));let a=n.current,[s,l]=d.useState({action:a.action,location:a.location}),u=d.useCallback(c=>{d.startTransition(()=>l(c))},[l]);return d.useLayoutEffect(()=>a.listen(u),[a,u]),d.createElement(Ki,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:a})}var Fr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Br=d.forwardRef(function({onClick:t,discover:o="render",prefetch:n="none",relative:a,reloadDocument:s,replace:l,state:u,target:c,to:p,preventScrollReset:m,viewTransition:v,...S},g){let{basename:f}=d.useContext(K),b=typeof p=="string"&&Fr.test(p),y,w=!1;if(typeof p=="string"&&b&&(y=p,Dr))try{let M=new URL(window.location.href),z=p.startsWith("//")?new URL(M.protocol+p):new URL(p),A=ne(z.pathname,f);z.origin===M.origin&&A!=null?p=A+z.search+z.hash:w=!0}catch{Q(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Oi(p,{relative:a}),[x,T,I]=ba(n,S),j=Ea(p,{replace:l,state:u,target:c,preventScrollReset:m,relative:a,viewTransition:v});function E(M){t&&t(M),M.defaultPrevented||j(M)}let _=d.createElement("a",{...S,...I,href:y||C,onClick:w||s?t:E,ref:Sa(g,T),target:c,"data-discover":!b&&o==="render"?"true":void 0});return x&&!b?d.createElement(d.Fragment,null,_,d.createElement(ya,{page:C})):_});Br.displayName="Link";var Ta=d.forwardRef(function({"aria-current":t="page",caseSensitive:o=!1,className:n="",end:a=!1,style:s,to:l,viewTransition:u,children:c,...p},m){let v=Me(l,{relative:p.relative}),S=ie(),g=d.useContext(Je),{navigator:f,basename:b}=d.useContext(K),y=g!=null&&La(v)&&u===!0,w=f.encodeLocation?f.encodeLocation(v).pathname:v.pathname,C=S.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(C=C.toLowerCase(),x=x?x.toLowerCase():null,w=w.toLowerCase()),x&&b&&(x=ne(x,b)||x);const T=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let I=C===w||!a&&C.startsWith(w)&&C.charAt(T)==="/",j=x!=null&&(x===w||!a&&x.startsWith(w)&&x.charAt(w.length)==="/"),E={isActive:I,isPending:j,isTransitioning:y},_=I?t:void 0,M;typeof n=="function"?M=n(E):M=[n,I?"active":null,j?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let z=typeof s=="function"?s(E):s;return d.createElement(Br,{...p,"aria-current":_,className:M,ref:m,style:z,to:l,viewTransition:u},typeof c=="function"?c(E):c)});Ta.displayName="NavLink";var ja=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:o,reloadDocument:n,replace:a,state:s,method:l=qe,action:u,onSubmit:c,relative:p,preventScrollReset:m,viewTransition:v,...S},g)=>{let f=Ma(),b=Aa(u,{relative:p}),y=l.toLowerCase()==="get"?"get":"post",w=typeof u=="string"&&Fr.test(u),C=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let T=x.nativeEvent.submitter,I=(T==null?void 0:T.getAttribute("formmethod"))||l;f(T||x.currentTarget,{fetcherKey:t,method:I,navigate:o,replace:a,state:s,relative:p,preventScrollReset:m,viewTransition:v})};return d.createElement("form",{ref:g,method:y,action:b,onSubmit:n?c:C,...S,"data-discover":!w&&e==="render"?"true":void 0})});ja.displayName="Form";function Ia(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nr(e){let t=d.useContext(ge);return F(t,Ia(e)),t}function Ea(e,{target:t,replace:o,state:n,preventScrollReset:a,relative:s,viewTransition:l}={}){let u=ue(),c=ie(),p=Me(e,{relative:s});return d.useCallback(m=>{if(ia(m,t)){m.preventDefault();let v=o!==void 0?o:Ee(c)===Ee(p);u(e,{replace:v,state:n,preventScrollReset:a,relative:s,viewTransition:l})}},[c,u,p,o,n,t,e,a,s,l])}function _a(e){Q(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(Lt(e)),o=d.useRef(!1),n=ie(),a=d.useMemo(()=>aa(n.search,o.current?null:t.current),[n.search]),s=ue(),l=d.useCallback((u,c)=>{const p=Lt(typeof u=="function"?u(new URLSearchParams(a)):u);o.current=!0,s("?"+p,c)},[s,a]);return[a,l]}var Ra=0,za=()=>`__${String(++Ra)}__`;function Ma(){let{router:e}=Nr("useSubmit"),{basename:t}=d.useContext(K),o=Yi();return d.useCallback(async(n,a={})=>{let{action:s,method:l,encType:u,formData:c,body:p}=ca(n,t);if(a.navigate===!1){let m=a.fetcherKey||za();await e.fetch(m,o,a.action||s,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await e.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,o])}function Aa(e,{relative:t}={}){let{basename:o}=d.useContext(K),n=d.useContext(ee);F(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),s={...Me(e||".",{relative:t})},l=ie();if(e==null){s.search=l.search;let u=new URLSearchParams(s.search),c=u.getAll("index");if(c.some(m=>m==="")){u.delete("index"),c.filter(v=>v).forEach(v=>u.append("index",v));let m=u.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(s.pathname=s.pathname==="/"?o:oe([o,s.pathname])),Ee(s)}function La(e,{relative:t}={}){let o=d.useContext(Mr);F(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Nr("useViewTransitionState"),a=Me(e,{relative:t});if(!o.isTransitioning)return!1;let s=ne(o.currentLocation.pathname,n)||o.currentLocation.pathname,l=ne(o.nextLocation.pathname,n)||o.nextLocation.pathname;return Ye(a.pathname,l)!=null||Ye(a.pathname,s)!=null}function re({width:e,height:t,fill:o}){return r.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:o,xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Oa=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},Pa=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Ha=()=>{let e=[25,50,75,90],t=[];const o=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(n/a*100);e.forEach(l=>{s>=l&&!t.includes(l)&&(t.push(l),Pa(l))})};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}},Ur=d.createContext(),et=()=>{const e=d.useContext(Ur);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},$a=({children:e})=>{const[t,o]=d.useState(()=>localStorage.getItem("theme")||"light");d.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Oa(t)},[t]);const s={theme:t,toggleTheme:()=>{o(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{o(l)},isLight:t==="light",isDark:t==="dark"};return r.jsx(Ur.Provider,{value:s,children:e})},Da=B`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,Fa=B`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,Ba=B`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,Na=h.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--backgroundColor);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: ${e=>e.fadeOutContainer?0:1};
    pointer-events: ${e=>e.isVisible?"auto":"none"};
    transition: opacity 0.5s ease-out;
    animation: ${e=>e.initialFade?Ba:"none"} 0.5s ease-in;
`,Ua=h.div`
    animation: ${e=>e.isExiting?Fa:Da} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Vt({isVisible:e,initialFade:t=!1}){const{theme:o}=et(),[n,a]=d.useState(!1),[s,l]=d.useState(!1);return d.useEffect(()=>{!e&&!n&&(a(!0),setTimeout(()=>{l(!0)},800))},[e,n]),r.jsx(Na,{isVisible:e,fadeOutContainer:s,initialFade:t,children:r.jsx(Ua,{isExiting:n,children:r.jsx(re,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const Va=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},Wa=(e,t="General",o="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:o,value:n})},No=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},qa=(e,t="image",o="")=>{const n=o?`${o} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:o})},Ga=(e,t="")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t})},Uo=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},Ya=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},Qa=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},Za=(e,t="",o="",n="album_collection")=>{const a=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:a,album_name:e,artist_name:t,album_id:o,source:n})},Xa=()=>{d.useEffect(()=>{No(document.title,window.location.href);const e=new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&No(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function Vr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function Wr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Ja(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const Ka=B`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,es=B`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,ts=B`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,os=B`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,rs=h.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 1000;
    animation: ${e=>e.isClosing?os:ts} 0.3s ease-in-out forwards;
`,ns=h.div`
    background-color: var(--backgroundColor);
    width: 30%;
    min-width: 250px;
    border-radius: 15px;
    padding: 20px;
    padding-inline: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${e=>e.isClosing?es:Ka} 0.3s ease-in-out forwards;

    @media (max-width: 1400px) {
        width: 40%;
    }

    @media (max-width: 1050px) {
        width: 50%;
    }

    @media (max-width: 800px) {
        width: 70%;
    }

    @media (max-width: 450px) {
        width: 80%;
    }
`,is=h.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,as=h.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,ss=h(Wr)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,ls=h.div`
    background-color: var(--glassBackground);
    width: 30px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    &:hover {
        background-color: var(--AccentColor);
    }
`,qr=h.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,cs=h.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,ds=h.button`
    background: transparent;
    border: 2px solid var(--textColor);
    color: var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    padding-inline: 15px;
    font-size: 0.9em;

    &:hover {
        background: var(--textColor);
        color: var(--backgroundColor);
    }
`,jt=h.button`
    background: var(--textColor);
    border: none;
    color: var(--backgroundColor);
    border: 2px solid var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    padding-inline: 15px;
    font-size: 0.9em;

    &:hover {
        background-color: var(--AccentColor);
        border: 2px solid var(--AccentColor);
    }
`,Vo=h.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,us=h(qr)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,hs=h.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,ps=h.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function fs({title:e,paragraph:t,imageURL:o,postImageText:n,canClose:a,confirmText:s,onConfirm:l,cancelText:u,onCancel:c,isClosing:p}){return document.body.style.overflow="hidden",r.jsx(rs,{isClosing:p,children:r.jsxs(ns,{isClosing:p,children:[r.jsxs(is,{children:[r.jsx(hs,{children:r.jsx(re,{width:25,height:25,fill:"var(--textColor)"})}),e&&r.jsx(as,{children:e}),a&&r.jsx(ls,{onClick:c,children:r.jsx(ss,{})})]}),r.jsx(ps,{}),t&&r.jsx(qr,{children:t}),o&&r.jsx(cs,{src:o}),n&&r.jsx(us,{children:n}),u&&s?r.jsxs(Vo,{children:[r.jsx(ds,{onClick:c,children:u}),r.jsx(jt,{onClick:l,children:s})]}):r.jsx(Vo,{style:{justifyContent:"center"},children:u?r.jsx(jt,{onClick:c,children:u}):r.jsx(jt,{onClick:l,children:s})})]})})}const ms="/assets/models-4pKGew8b.png",gs=d.createContext(),xs=({children:e})=>{const{t,i18n:o}=U(),[n,a]=d.useState(null),[s,l]=d.useState(!1),[u,c]=d.useState(()=>{const j=localStorage.getItem("shownAlerts");return j?JSON.parse(j):{}}),p=()=>{const j={en:{title:"🚀 Pre-made models",paragraph:"Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.",confirmText:"Ok, I'll try!",postImageText:"The models can be chosen after selecting a album."},pt:{title:"🚀 Modelos pré-definidos",paragraph:"Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.",confirmText:"Ok, vou tentar!",postImageText:"Os modelos podem ser escolhidos após selecionar um álbum."},es:{title:"🚀 Modelos predefinidos",paragraph:"Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.",confirmText:"¡Ok, lo intentaré!",postImageText:"Los modelos se pueden elegir después de seleccionar un álbum."},zh:{title:"🚀 预制模型",paragraph:"预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。",confirmText:"好的，我试试！",postImageText:"可以在选择专辑后选择模型。"}},E=o.language||"en",_=j[E]||j.en;return{id:"default-premade-models",persistentId:"premade-models-intro",title:_.title,paragraph:_.paragraph,imageURL:ms,postImageText:_.postImageText,confirmText:_.confirmText,canClose:!0,type:"alert",limitDate:"2025-11-11T23:59:59.999Z"}},m=j=>u[j]===!0,v=j=>{if(!m(j)){const E={...u,[j]:!0};c(E),localStorage.setItem("shownAlerts",JSON.stringify(E))}};d.useEffect(()=>{const j=p();!m(j.persistentId)&&!n&&b(j)&&a(j)},[o.language,u,n]);const S=j=>{b(j)&&(a(j),l(!1))},g=j=>{b(j)&&S({...j,type:"alert"})},f=j=>{S({...j,type:"confirmation"})},b=j=>{if(!j.limitDate)return!0;const E=new Date(j.limitDate);return new Date<=E},y=j=>{if(!j.persistentId){b(j)&&g(j);return}!m(j.persistentId)&&b(j)&&S({...j,type:"alert"})},w=()=>{(n==null?void 0:n.type)==="alert"&&T(),!(!n||s)&&(l(!0),setTimeout(()=>{a(null),l(!1),document.body.style.overflow="unset"},300))},C=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&T(),w()},x=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&T(),w()},T=()=>{n!=null&&n.persistentId&&v(n.persistentId)},I={modal:n,showModal:S,showAlert:g,showConfirmation:f,showConditionalAlert:y,closeModal:w,isModalVisible:!!n,hasAlertBeenShown:m,markSpecificAlertAsShown:v};return r.jsxs(gs.Provider,{value:I,children:[e,n&&r.jsx(fs,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?C:null,cancelText:n.cancelText||null,onCancel:n.cancelText?x:n.canClose?w:null,isClosing:s})]})},vs={BASE_URL:"https://api.posterfy.space"},bs=vs.BASE_URL;class ys{constructor(t=bs){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,o={}){const n=`${this.baseURL}${t}`,a={credentials:"include",headers:{"Content-Type":"application/json",...o.headers},...o};this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`);try{const s=await fetch(n,a);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(s){throw console.error("API request failed:",s),s}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const J=new ys,Gr=d.createContext(),Ae=()=>{const e=d.useContext(Gr);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},ws=({children:e})=>{const[t,o]=d.useState(null),[n,a]=d.useState(!0),[s,l]=d.useState(!1);d.useEffect(()=>{(async()=>{const b=new URLSearchParams(window.location.search).get("token");b&&(localStorage.setItem("authToken",b),J.setAuthToken(b),window.history.replaceState({},document.title,window.location.pathname)),await u()})()},[]);const u=async()=>{if(!localStorage.getItem("authToken")){o(null),l(!1),a(!1);return}try{const f=await J.getCurrentUser();o(f.user),l(!0),a(!1)}catch{localStorage.removeItem("authToken"),J.setAuthToken(null),o(null),l(!1),a(!1)}},S={user:t,loading:n,isAuthenticated:s,loginWithGoogle:()=>{window.location.href=J.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=J.getSpotifyAuthUrl()},logout:async()=>{try{await J.logout(),localStorage.removeItem("authToken"),J.setAuthToken(null),o(null),l(!1)}catch(g){console.error("Logout failed:",g),localStorage.removeItem("authToken"),J.setAuthToken(null),o(null),l(!1)}},checkAuthStatus:u,updateUser:g=>{o(g)}};return r.jsx(Gr.Provider,{value:S,children:e})};function Qe(){return Qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},Qe.apply(this,arguments)}function Cs(e,t){if(e==null)return{};var o={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(o[a]=e[a]);return o}var Ss=["cdnSuffix","cdnUrl","countryCode","style","svg"],ks="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Ts="svg",js=127397,Yr=function(t){var o=t.cdnSuffix,n=o===void 0?Ts:o,a=t.cdnUrl,s=a===void 0?ks:a,l=t.countryCode,u=t.style,c=t.svg,p=c===void 0?!1:c,m=Cs(t,Ss);if(typeof l!="string")return null;if(p){var v=""+s+l.toLowerCase()+"."+n;return d.createElement("img",Object.assign({},m,{src:v,style:Qe({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},u)}))}var S=l.toUpperCase().replace(/./g,function(g){return String.fromCodePoint(g.charCodeAt(0)+js)});return d.createElement("span",Object.assign({role:"img"},m,{style:Qe({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},u)}),S)};const Is=h.div`
  position: relative;
`,Es=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--borderColor);
  
  &:hover {
    background-color: var(--glassBackground);
    transform: scale(1.05);
    border-color: var(--textColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,_s=h.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  
  & * {
    border-radius: 50% !important;
    width: 2.6em !important;
    height: 2.6em !important;
    object-fit: cover !important;
    display: block !important;
  }
`,Rs=h.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(220, 220, 220, 0.05);
  z-index: 50;
  border: 1px solid var(--borderColor);
  top: 60px;
  
  animation: dropdownSlideIn 0.2s ease-out forwards;
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
  
  @keyframes dropdownSlideIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  &.closing {
    animation: dropdownSlideOut 0.15s ease-in forwards;
  }
  
  @keyframes dropdownSlideOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }
`,zs=h.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Ms=h.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,Fe=h.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 10px;
  background: transparent;
  border: none;
  color: var(--textColor);
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateX(0);

  &:hover {
    background-color: var(--glassBackground);
    transform: translateX(4px);
  }

  &:hover svg {
    transform: scale(1.2);
  }
  
  animation: slideInFromLeft 0.3s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
  
  @keyframes slideInFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
`,Be=h.span`
  margin-left: 8px;
`,Ne=h(Yr)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function As(){const[e,t]=d.useState(!1),[o,n]=d.useState(!1),{i18n:a}=U();d.useEffect(()=>{const p=localStorage.getItem("language");p&&a.changeLanguage(p);const m=v=>{v.target.closest(".language-selector")||s()};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[a]);const s=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},l=p=>{p.stopPropagation(),e?s():t(!0)},u=p=>{a.changeLanguage(p),localStorage.setItem("language",p),s(),Qa(p)},c=()=>{switch(a.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return r.jsxs(Is,{className:"language-selector",children:[r.jsx(Es,{onClick:l,"aria-label":"Select language",children:r.jsx(_s,{children:r.jsx(Yr,{countryCode:c(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&r.jsxs(Rs,{className:o?"closing":"",children:[r.jsx(zs,{}),r.jsxs(Ms,{children:[r.jsxs(Fe,{onClick:()=>u("pt"),children:[r.jsx(Ne,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(Be,{children:"Português"})]}),r.jsxs(Fe,{onClick:()=>u("en"),children:[r.jsx(Ne,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(Be,{children:"English"})]}),r.jsxs(Fe,{onClick:()=>u("es"),children:[r.jsx(Ne,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(Be,{children:"Español"})]}),r.jsxs(Fe,{onClick:()=>u("zh"),children:[r.jsx(Ne,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),r.jsx(Be,{children:"中文"})]})]})]})]})}function Ls(e){return O({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Qr(e){return O({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function Os(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Ps(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Zr(e){return O({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Xr(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Jr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Hs(e){return O({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Kr(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function en(e){return O({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function $s(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Ds(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function tn(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const Fs=h.div`
  position: relative;
`,Bs=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--borderColor);
  
  &:hover {
    background-color: var(--glassBackground);
    transform: scale(1.05);
    border-color: var(--textColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Ns=h.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 1.2em;
    fill: ${e=>e.isLight?"#000000":"#ffffff"};
  }
`,Us=h.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(220, 220, 220, 0.05);
  z-index: 50;
  border: 1px solid var(--borderColor);
  top: 60px;
  min-width: 180px;
  
  animation: dropdownSlideIn 0.2s ease-out forwards;
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
  
  @keyframes dropdownSlideIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  &.closing {
    animation: dropdownSlideOut 0.15s ease-in forwards;
  }
  
  @keyframes dropdownSlideOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
  }
`,Vs=h.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Ws=h.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,qs=h.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 5px;
  background: transparent;
  border: none;
  color: var(--textColor);
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateX(0);

  &:hover {
    background-color: var(--glassBackground);
    transform: translateX(4px);
  }

  &:hover .theme-preview {
    transform: scale(1.1);
  }
  
  animation: slideInFromLeft 0.3s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
  
  @keyframes slideInFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }
`,Gs=h.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    font-size: 0.8em;
    fill: ${e=>e.isLight?"#000000":"#ffffff"};
    transition: all 0.2s ease;
  }
`,Ys=h.span`
  margin-left: 4px;
  font-weight: 500;
`;function Qs(){const[e,t]=d.useState(!1),[o,n]=d.useState(!1),{theme:a,setSpecificTheme:s}=et(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:r.jsx(tn,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:r.jsx(Kr,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:r.jsx(Zr,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:r.jsx(Xr,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:r.jsx(en,{}),isLight:!1}],u=l.find(v=>v.id===a)||l[0];d.useEffect(()=>{const v=S=>{S.target.closest(".theme-selector")||c()};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[]);const c=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},p=v=>{v.stopPropagation(),e?c():t(!0)},m=v=>{s(v),c()};return r.jsxs(Fs,{className:"theme-selector",children:[r.jsx(Bs,{onClick:p,"aria-label":"Select theme",children:r.jsx(Ns,{themeColor:u.color,isLight:u.isLight,children:u.icon})}),e&&r.jsxs(Us,{className:o?"closing":"",children:[r.jsx(Vs,{}),r.jsx(Ws,{children:l.map(v=>r.jsxs(qs,{onClick:()=>m(v.id),children:[r.jsx(Gs,{className:"theme-preview",color:v.color,isLight:v.isLight,children:v.icon}),r.jsx(Ys,{children:v.name})]},v.id))})]})]})}function Zs(e){return O({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function Xs(e){return O({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const Js=h.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: var(--backgroundColor);
  padding: ${({scrolled:e})=>e?"10px 0":"20px 0"};
  box-shadow: ${({scrolled:e})=>e?"0 2px 15px var(--shadowColor)":"none"};
  transform: ${({visible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,Ks=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,el=h.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,tl=h.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,ol=h.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,rl=h.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,nl=h.div`
  animation: spin 10s linear infinite;
  width: 40px;
  height: 44.05px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,il=h.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,al=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--borderColor);
  overflow: hidden;
  
  &:hover {
    background-color: var(--glassBackground);
    transform: scale(1.05);
    border-color: var(--textColor);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,sl=h.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,ll=h(Xs)`
  font-size: 1.5em;
  color: var(--textColor);
`,cl=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Ze({hideLogo:e=!1,hideAccount:t=!1}){const[o,n]=d.useState(!1),[a,s]=d.useState(!0),[l,u]=d.useState(0),[c,p]=d.useState(!1),m=".space",{user:v,isAuthenticated:S}=Ae(),g=ue();d.useEffect(()=>{const b=()=>{const y=window.scrollY;y<=10?(s(!0),n(!1)):(y<l?s(!0):s(!1),n(!0)),u(y)};return window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[l]);const f=()=>{g(S?"/dashboard":"/login")};return r.jsxs(Js,{scrolled:o,visible:a,children:[r.jsxs(Ks,{children:[!e&&r.jsxs(el,{onClick:()=>g("/"),children:[r.jsx(nl,{children:r.jsx(re,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),r.jsxs(tl,{children:["Posterfy",r.jsx(ol,{children:m})]})]}),r.jsxs(il,{children:[r.jsx(As,{}),r.jsx(Qs,{}),!t&&r.jsx(al,{onClick:f,children:r.jsx(sl,{children:v!=null&&v.avatar?r.jsx(cl,{src:v.avatar}):r.jsx(ll,{})})})]})]}),r.jsx(rl,{scrolled:o})]})}const dl=B`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,ul=B`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,Wt=B`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,hl=B`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,pl=h.div`
  width: 100%;
  background: linear-gradient(180deg, transparent 0%, var(--shadowColor) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--borderColor);
  padding: 40px 0;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0px;
    background: linear-gradient(190deg, transparent, var(--AccentColor), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    padding: 25px 0;
  }
`,fl=h.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,ml=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${Wt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,gl=h.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${dl} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${ul} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,xl=h.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,vl=h.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,bl=h.div`
  font-size: 1.1em;
  line-height: 1.6;
  color: var(--textSecondary);
  max-width: 400px;
  position: relative;
  
  .credit-content {
    display: inline-block;
    background: var(--textColor);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${hl} 6s linear infinite;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  
  .emoji {
    display: inline-block;
    margin: 0 4px;
    transition: transform 0.3s ease;
  }
  
  &:hover .emoji {
    transform: scale(1.2) rotate(10deg);
  }
  
  a {
    color: var(--AccentColor);
    text-decoration: none;
    font-weight: 700;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--AccentColor);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`,yl=h.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85em;
  color: var(--textSecondary);
  
  svg {
    color: var(--textSecondary);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,wl=h.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${Wt} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;h.h3`
  font-size: 1.1em;
  font-weight: 600;
  color: var(--textColor);
  margin-bottom: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;const Cl=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: right;
  margin-right: auto;

  @media (max-width: 770px) {
    justify-content: center;
    margin-top: 20px;
  }
`,Sl=h.button`
  background-color: ${e=>e.color};
  border: none;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px var(--shadowColor);
  border-radius: 100%;
  border: ${e=>e.active?"1px solid var(--AccentColor)":"1px solid var(--borderColor)"};
  
  &:hover {
    box-shadow: 0 6px 12px var(--shadowColor);
    transform: scale(1.02);
  }
  
  svg {
    font-size: 1.5em;
    fill: ${e=>e.themeId==="light"?"#000000":"#ffffff"} !important;
    opacity: 0.9;
  }
  
  span {
    font-size: 0.7em;
    fill: ${e=>e.themeId==="light"?"#000000":"#ffffff"} !important;
    opacity: 0.9;
    font-weight: 500;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`,kl=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,Tl=h.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,jl=h.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${Wt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,Il=h.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--textSecondary);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  background: var(--glassBackground);
  transition: all 0.3s ease;
  margin-top: 25px;
  
  svg {
    font-size: 1.3em;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: var(--glassBackground);
    opacity: 0.8;
    box-shadow: 0 6px 12px var(--shadowColor);
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 6px 12px;
  }
`;function El(){const{t:e}=U(),{theme:t,setSpecificTheme:o}=et(),n=l=>{o(l)},a=[{id:"light",name:"Light",color:"#f0efeb",icon:r.jsx(tn,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:r.jsx(Kr,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:r.jsx(Hs,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:r.jsx(Zr,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:r.jsx(Xr,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:r.jsx(en,{}),isLight:!1}],s=new Date().getFullYear();return r.jsxs(pl,{children:[r.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:r.jsxs("footer",{children:[r.jsx("h4",{children:"Album Poster Generator Links"}),r.jsxs("nav",{children:[r.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),r.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),r.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),r.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),r.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),r.jsxs(fl,{children:[r.jsxs(ml,{children:[r.jsxs(gl,{children:[r.jsx(vl,{className:"icon-shadow"}),r.jsx(xl,{className:"icon-main",children:r.jsx(re,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),r.jsx(bl,{children:r.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",r.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),r.jsxs(yl,{children:[r.jsx(Jr,{})," © ",s," Posterfy. ",e("AllRights","All rights reserved.")]})]}),r.jsx(wl,{children:r.jsx(Cl,{children:a.map(l=>r.jsxs(kl,{children:[r.jsx(Sl,{color:l.color,active:t===l.id,themeId:l.id,onClick:()=>n(l.id),"aria-label":`${e("SwitchTo","Switch to")} ${l.name} ${e("Theme").toLowerCase()}`,children:l.icon},l.id),r.jsx(Tl,{active:t===l.id,children:l.name})]},l.id))})}),r.jsx(jl,{children:r.jsxs(Il,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[r.jsx(Ls,{})," ",e("ViewGitHub","GitHub")]})})]})]})}function It({showNavbar:e=!0,showFooter:t=!0}){return r.jsxs(r.Fragment,{children:[e&&r.jsx(Ze,{}),r.jsx(Ji,{}),t&&r.jsx(El,{})]})}function _l(e){return O({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Rl(e){return O({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const zl="/assets/Posterfy%20-%20KTT%20ZOO-EGMOdvc1.png",Ml="/assets/Posterfy%20-%20JACKBOYS%202-5mh4sLb1.png",Al="/assets/Posterfy%20-%20SOS-BR7qvD22.png",Ll="/assets/Posterfy%20-%20F-1%20Trillion-D1gH0Ecz.png",Ol="/assets/Posterfy%20-%20Nevermind-DmVmVnus.png",Pl=[{id:1,coverImage:zl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b2732715c405b0b118516627add4",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/15/e0/31/15e031a3-d975-91a7-5dc4-31dda64d1f52/8445162931182.jpg",useUncompressed:!0,albumName:"KTT ZOO",artistsName:"Sain",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"200",marginSide:160,marginCover:0,marginBackground:"5",titleRelease:"Release date",releaseDate:"2023-07-07",titleRuntime:"Runtime",runtime:"23min 33s",backgroundColor:"#638f98",textColor:"#0c191d",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Aquelas Coisas Mais Pra Frente
2. Demanda
3. Relíquia Do Boom Bap
4. Lucro
5. Skit Visão
6. Ebi no Tempura
7. Iori Incorporado
8. Noturno KGL
9. Ignorante
10. Momentos`,color1:"#0c191d",color2:"#3381ae",color3:"#aab8b4",albumID:"7lJibQ9XRhBDUIWgkP4wZm",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:2,coverImage:Ml,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273b547c9858fee61547e6b0fd8",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music221/v4/bb/00/09/bb0009b4-37e3-b924-b703-eb3d3a7f362d/196873402772.jpg",useUncompressed:!0,albumName:"JACKBOYS 2",artistsName:"JACKBOYS, Travis Scott",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"50",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2025-07-13",titleRuntime:"Runtime",runtime:"55min 50s",backgroundColor:"#b4aba6",textColor:"#79736e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. JB2 RADIO
2. CHAMPAIN & VACAY
3. 2000 EXCURSION
4. KICK OUT
5. DUMBO
6. MM3
7. VELOUR
8. CONTEST
9. ILMB
10. WHERE WAS YOU
11. NO COMMENTS
12. BEEP BEEP
13. PBT
14. SHYNE
15. OUTSIDE
16. CANT STOP
17. FLORIDA FLOW`,color1:"#7a736f",color2:"#938c8c",color3:"#94948c",albumID:"32lGAqeVkdJxEj2iv2Q01B",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:3,coverImage:Al,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
2. Kill Bill
3. Seek & Destroy
4. Low
5. Love Language
6. Blind
7. Used
8. Snooze
9. Notice Me
10. Gone Girl
11. Smoking on my Ex Pack
12. Ghost in the Machine
13. F2F
14. Nobody Gets Me
15. Conceited
16. Special
17. Too Late
18. Far
19. Shirt
20. Open Arms
21. I Hate U
22. Good Days
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Ll,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27388208159b1b3c69eefdeb2e0",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg",useUncompressed:!1,albumName:"F-1 Trillion",artistsName:"Post Malone",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:200,marginSide:160,marginCover:-500,marginBackground:-700,titleRelease:"Release date",releaseDate:"2024-08-15",titleRuntime:"Runtime",runtime:"57min 58s",backgroundColor:"#cdd1d6",textColor:"#3c484c",useWatermark:!0,useFade:!0,showTracklist:!1,tracklist:`1. Wrong Ones (Feat. Tim McGraw)
2. Finer Things (Feat. Hank Williams Jr.)
3. I Had Some Help (Feat. Morgan Wallen)
4. Pour Me A Drink (Feat. Blake Shelton)
5. Have The Heart (Feat. Dolly Parton)
6. What Don't Belong To Me
7. Goes Without Saying (Feat. Brad Paisley)
8. Guy For That (Feat. Luke Combs)
9. Nosedive (Feat. Lainey Wilson)
10. Losers (Feat. Jelly Roll)
11. Devil I've Been (Feat. ERNEST)
12. Never Love You Again (Feat. Sierra Ferrell)
13. Missin’ You Like This (Feat. Luke Combs)
14. California Sober (Feat. Chris Stapleton)
15. Hide My Gun (Feat. HARDY)
16. Right About You
17. M-E-X-I-C-O (Feat. Billy Strings)
18. Yours`,color1:"#86939b",color2:"#6a5f59",color3:"#81735d",albumID:"4BbsHmXEghoPPevQjPnHXx",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:5,coverImage:Ol,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",uncompressedAlbumCover:"",useUncompressed:!1,albumName:"",artistsName:"",titleSize:"200",artistsSize:"110",tracksSize:"70",marginTop:"-200",marginSide:"115",marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"1991-09-26",titleRuntime:"Runtime",runtime:"49min 15s",backgroundColor:"#0064b0",textColor:"#01010e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Smells Like Teen Spirit
2. In Bloom
3. Come As You Are
4. Breed
5. Lithium
6. Polly
7. Territorial Pissings
8. Drain You
9. Lounge Act
10. Stay Away
11. On A Plain
12. Something In The Way
13. Endless, Nameless`,color1:"#a6b6ba",color2:"#43bdd1",color3:"#052a5e",albumID:"2UJcKiJxNryhL050F5Z1Fk",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}}],Hl=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  perspective: 1000px;
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: 800px) {
    display: none;
  }
`,$l=h.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:o,hoveredIndex:n,isMobile:a}=e;if(a)return"scale(1)";let s="scale(0.95)";if(t)s="scale(1.08) translateY(-8px)";else if(n!==null){let l=0;switch(n){case 0:o>0&&(l=70);break;case 1:o>=2&&(l=70);break;case 2:l=0;break;case 3:o<=2&&(l=-70);break;case 4:o<4&&(l=-70);break}l!==0&&(s=`scale(0.95) translateX(${l}px)`)}return s}};
  box-shadow: ${e=>e.isHovered?"0 25px 50px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)":"0 8px 16px rgba(0,0,0,0.15)"};
  display: ${e=>e.isMobile&&e.index!==2||e.isTablet&&(e.index<1||e.index>3)?"none":"block"};

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${e=>e.isHovered?"filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s":"filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"};
    filter: ${e=>e.isHovered?"brightness(1.15) contrast(1.1) saturate(1.1)":e.otherIsHovered&&!e.isHovered?"brightness(0.7) contrast(0.9) saturate(0.8)":"brightness(1) contrast(1) saturate(1)"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
    opacity: ${e=>e.otherIsHovered&&!e.isHovered?1:0};
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), backdrop-filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    backdrop-filter: ${e=>e.otherIsHovered&&!e.isHovered?"blur(1px)":"blur(0px)"};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.1) 0%,
      rgba(255,255,255,0.05) 50%,
      rgba(0,0,0,0.05) 100%
    );
    opacity: ${e=>e.isHovered?1:0};
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${e=>e.isHovered?"0.3s":"0s"};
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin: 0 -20px;
  }

  @media (max-width: 480px) {
    width: ${e=>e.index===2?"260px":e.index===1||e.index===3?"220px":"180px"};
    height: ${e=>e.index===2?"390px":e.index===1||e.index===3?"330px":"270px"};
    margin: 0;
  }
`,Dl=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  animation: fadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(12px);
    }
  }
`,Fl=h.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
    border-radius: 0px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }

  @media (max-width: 950px) {
    img {
      max-width: 60%;
    }
  }
`,Bl=h.div`
  position: absolute;
  top: 0px;
  right: -80px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 100;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 10px;
  }
`,Nl=h.button`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  color: white;
  font-size: 1.4em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(12px);
  font-weight: 300;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2em;
  }
`,Ul=h.button`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 22px;
  padding: 0 16px;
  height: 44px;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(12px);
  white-space: nowrap;
  min-width: 120px;

  &:hover {
    background: var(--AccentColor);
    border-color: var(--AccentColor);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(223, 109, 64, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: "↻";
    font-size: 1.1em;
    margin-right: 4px;
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 0.85em;
    padding: 0 14px;
    min-width: 110px;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 0 12px;
    min-width: 100px;
    height: 36px;
    
    &::before {
      font-size: 1em;
    }
  }
`,Vl=({onRecreate:e})=>{const{t}=U(),[o,n]=d.useState(null),[a,s]=d.useState(!1),[l,u]=d.useState(!1),[c,p]=d.useState(null),[m,v]=d.useState(null);d.useEffect(()=>{const b=()=>{s(window.innerWidth<=770),u(window.innerWidth>480&&window.innerWidth<=1200)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const S=(b,y)=>{p(b),v(y),document.body.style.overflow="hidden"},g=()=>{p(null),document.body.style.overflow="auto"},f=()=>{p(null),e(m),document.body.style.overflow="auto"};return r.jsxs(r.Fragment,{children:[r.jsx(Hl,{children:Pl.map((b,y)=>r.jsx($l,{index:y,isHovered:o===y,hoveredIndex:o,otherIsHovered:o!==null,isMobile:a,isTablet:l,onMouseEnter:()=>n(y),onMouseLeave:()=>n(null),onClick:()=>S(b.coverImage||"/placeholder.svg",b.JSONConfig),children:r.jsx("img",{src:b.coverImage||"/placeholder.svg",alt:`${b.artist} - ${b.title}`})},b.id))}),c&&r.jsx(Dl,{onClick:g,children:r.jsxs(Fl,{onClick:b=>b.stopPropagation(),children:[r.jsxs(Bl,{children:[r.jsx(Nl,{onClick:g,children:"×"}),r.jsx(Ul,{onClick:f,children:t("RecreatePoster")})]}),r.jsx("img",{src:c,alt:"Album cover"})]})})]})},Wl=h.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  overflow: hidden;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`,ql=({onRecreate:e})=>r.jsx(Wl,{children:r.jsx(Vl,{onRecreate:e})}),Gl=h.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-inline: auto;
    position: relative;
    text-align: center;
    height: 100vh;
    align-items: center;
`,Yl=h.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin-block: auto;

    @media (max-width: 550px) {
        padding: 0;
    }
`,Ql=h.h1`
    font-size: 6.5em;
    margin-bottom: 20px;
    margin-top: 20px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;

    @media (max-width: 900px) {
        font-size: 4.5em;
    }

    @media (max-width: 600px) {
        font-size: 4em;
    }

    @media (max-width: 340px) {
      font-size: 3.5em;
    }
`,Wo=h.p`
    font-size: 1em;
    opacity: ${e=>e.visible?.5:0};
    width: 80%;
    font-weight: 500;
    margin: 2px 0;
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;

    @media (max-width: 900px) {
        width: 90%;
    }
`,Zl=h.div`
    max-width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    animation: ${e=>e.visible?"heartbeat 2s infinite":"none"};
    margin-top: 100px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"50px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;

    &:before {
        content: '';
        position: absolute;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: var(--textColor);
        filter: blur(20px);
        z-index: -10;
        margin-top: -50px;
        opacity: 0.05;
    }

    @keyframes heartbeat {
        0%, 50%, 90%, 100% { opacity: 0.1; transform: scale(1); }
        30%, 70% { opacity: 0.25; transform: scale(1.05); }
    }
`,Xl=`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-4px);
    }
    50% {
      transform: translateY(4px);
    }
  }
`,Jl=h(_l)`
    font-size: 2em;
    color: var(--textColor);
    margin: 10px;
    opacity: ${e=>e.visible?.2:0};
    position: absolute;
    bottom: 7%;
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
    animation: bounce 2s infinite ease-in-out;
    cursor: pointer;
    ${Xl}
`;function Kl({showAnimation:e=!1,onRecreate:t}){const{t:o}=U(),{theme:n}=et(),[a,s]=d.useState(!1);d.useEffect(()=>{if(e){const u=setTimeout(()=>{s(!0)},50);return()=>clearTimeout(u)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx(Gl,{children:r.jsxs(Yl,{children:[r.jsx(Ql,{visible:a,animationDelay:200,children:"Posterfy"}),r.jsx(Wo,{visible:a,animationDelay:400,children:o("paragraphHero1")}),r.jsx(Wo,{visible:a,animationDelay:600,children:o("paragraphHero2")}),r.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[r.jsx("h2",{children:"Free Album Poster Generator"}),r.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),r.jsx("h3",{children:"Features:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Free album poster maker"}),r.jsx("li",{children:"Spotify integration"}),r.jsx("li",{children:"Custom poster design"}),r.jsx("li",{children:"High-quality downloads"}),r.jsx("li",{children:"Multiple format options"}),r.jsx("li",{children:"Professional templates"})]})]}),r.jsx(Zl,{visible:a,animationDelay:800,children:r.jsx(re,{fill:n==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),r.jsx(Jl,{visible:a,animationDelay:1e3,onClick:l})]})}),r.jsx(ql,{onRecreate:t})]})}const ec=h.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,tc=h.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Le({text:e,type:t}){return r.jsx(r.Fragment,{children:t==1?r.jsx(ec,{children:e}):r.jsx(tc,{children:e})})}const oc=h.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,rc=h.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,nc=h.p`
    color: var(--textColor);
    font-size: 1.2em;
    font-weight: 600;
    opacity: .5;
    white-space: pre-line;
    padding-left: auto;
    width: 60%;
    height: min-content;
    padding-top: auto;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
        display: none;
    }
`,qo=h.div`
    display: flex;
`;function qt({title:e,paragraph:t}){return r.jsxs(oc,{children:[r.jsx(qo,{children:r.jsx(rc,{children:e})}),r.jsx(qo,{children:r.jsx(nc,{children:t})})]})}function ic(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function ac(e){return O({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const sc=h.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,lc=h(ic)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,cc=h.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,dc=h.hr`
    opacity: 0.15;
    margin: 5px;
`,uc=h.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,hc=h.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function ke({q:e,a:t}){const[o,n]=d.useState(!1);function a(){n(!o)}return r.jsxs(r.Fragment,{children:[r.jsxs(sc,{onClick:a,children:[r.jsx(lc,{showA:o}),r.jsx(cc,{children:e})]}),r.jsx(dc,{}),r.jsx(uc,{showA:o,children:r.jsx(hc,{showA:o,children:t})})]})}const pc=h.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,fc=h.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function mc(){const{t:e}=U();return r.jsxs(pc,{id:"faq",children:[r.jsx(Le,{text:"FAQ",type:1}),r.jsxs(fc,{children:[r.jsx(ke,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),r.jsx(ke,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),r.jsx(ke,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),r.jsx(ke,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),r.jsx(ke,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const gc=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:o="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:a="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>r.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),r.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:o}),r.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),r.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:o}),r.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),r.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:o}),r.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:o}),r.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:o}),r.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),r.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:o}),r.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:o}),r.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:o}),r.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:o}),r.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:o}),r.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),r.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:o}),r.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:o}),r.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:a}),r.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:a}),r.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:a}),r.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:a}),r.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:a}),r.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),xc=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,vc=h.div`
    margin-inline: auto;
    width: min-content;
    margin-top: 50px;
    width: 40%;

    @media (max-width: 1200px) {
        width: 55%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`,bc=h.p`
    font-size: 1.2rem;
    width: 30%;
    margin-inline: auto;
    text-align: center;
    font-weight: bolder;
    opacity: 0.7;
    margin-block: 40px;

    @media (max-width: 1350px) {
        width: 40%;
    }

    @media (max-width: 1050px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`,yc=h.button`
    background-color: var(--AccentColor);
    color: var(--PosterfyWhite);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    width: 200px;
    margin-inline: auto;
    display: block;
    padding-block: 10px;
    font-weight: bolder;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.025);
    }
`;function wc(){const{t:e}=U();return r.jsxs(xc,{id:"share",children:[r.jsx(Le,{text:e("Share"),type:1}),r.jsx(qt,{title:e("ShareTitle")}),r.jsx(vc,{children:r.jsx(gc,{width:"100%"})}),r.jsx(bc,{children:e("ShareDescription")}),r.jsx(yc,{children:e("ComingSoon")})]})}const Cc=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:o="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[r.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),r.jsx("path",{fill:o,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),r.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),r.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),r.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),r.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),r.jsx("path",{fill:o,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),r.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),r.jsx("path",{fill:o,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),r.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),r.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),r.jsx("g",{fill:o,opacity:"0.3",children:r.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),r.jsxs("g",{fill:t,opacity:"0.2",children:[r.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),r.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),r.jsx("path",{fill:o,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),r.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),r.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),r.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),r.jsx("path",{fill:o,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),r.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),r.jsx("path",{fill:o,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),r.jsx("path",{fill:o,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),r.jsx("path",{fill:o,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),r.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),r.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),r.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),r.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),r.jsx("path",{fill:o,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),r.jsx("path",{fill:o,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),r.jsx("path",{fill:o,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),r.jsx("path",{fill:a,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),r.jsx("path",{fill:a,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),r.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),r.jsx("path",{fill:o,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),r.jsx("g",{clipPath:"url(#clip0_1_72)",children:r.jsx("path",{fill:a,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_1_72",children:r.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Sc=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,kc=h.div`
    margin-inline: auto;
    width: min-content;
    margin-top: 50px;
    width: 40%;

    @media (max-width: 1200px) {
        width: 55%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`,Tc=h.p`
    font-size: 1.2rem;
    width: 30%;
    margin-inline: auto;
    text-align: center;
    font-weight: bolder;
    opacity: 0.7;
    margin-block: 40px;

    @media (max-width: 1350px) {
        width: 40%;
    }

    @media (max-width: 1050px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`,jc=h.button`
    background-color: var(--AccentColor);
    color: var(--PosterfyWhite);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    width: 200px;
    margin-inline: auto;
    display: block;
    padding-block: 10px;
    font-weight: bolder;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.025);
    }
`;function Ic(){const{t:e}=U();return r.jsxs(Sc,{id:"share",children:[r.jsx(Le,{text:e("Community"),type:1}),r.jsx(qt,{title:e("CommunityTitle")}),r.jsx(kc,{children:r.jsx(Cc,{width:"100%"})}),r.jsx(Tc,{children:e("CommunityDescription")}),r.jsx(jc,{children:e("ComingSoon")})]})}const Go=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],Ec=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,_c=h.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Rc=h.div`
    display: flex;
    align-items: center;
    position: relative;
`,zc=h.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Mc=h(Jr)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Ac=h.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,Lc=h.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,Oc=h.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,Pc=h.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Hc=h.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,$c=h.a`
    color: var(--textColor);
    background: var(--AccentColor);
    padding: 7px 18px;
    border-radius: 6px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    display: inline-block;
    margin-top: 5px;
    &:hover {
        background: #1a1a1a;
        color: #fff;
    }
`;function Dc(){var s,l,u;const{i18n:e}=U(),{t}=U(),o=((s=e.language)==null?void 0:s.split("-")[0])||"en",n=Go.filter(c=>c.key!=="contribute_area"),a=Go.find(c=>c.key==="contribute_area");return r.jsxs(Ec,{id:"thanks",children:[r.jsx(Le,{text:t("Thanks"),type:1}),n.map((c,p)=>r.jsxs(_c,{children:[r.jsxs(Rc,{children:[r.jsx(zc,{className:"circle"}),r.jsx(Mc,{className:"heart"}),r.jsx(Ac,{tabIndex:0,role:"button",onClick:()=>window.open(c.url,"_blank","noopener,noreferrer"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&window.open(c.url,"_blank","noopener,noreferrer")},onMouseEnter:m=>{const v=m.target.parentNode;v.querySelector(".circle").style.opacity=0,v.querySelector(".heart").style.opacity=1},onMouseLeave:m=>{const v=m.target.parentNode;v.querySelector(".circle").style.opacity=.8,v.querySelector(".heart").style.opacity=0},children:c.title[o]||c.title.en})]}),r.jsx(Lc,{children:c.text[o]||c.text.en})]},c.key)),a&&r.jsxs(Oc,{children:[r.jsx(Pc,{children:a.title[o]||a.title.en}),r.jsx(Hc,{children:a.text[o]||a.text.en}),r.jsx($c,{href:a.url,target:"_blank",rel:"noopener noreferrer",children:((l=a.button)==null?void 0:l[o])||((u=a.button)==null?void 0:u.en)||"Github"})]})]})}const Fc=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Bc=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Nc=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function te({title:e,value:t,onChange:o}){return r.jsxs(Fc,{children:[r.jsx(Bc,{children:e}),r.jsx(Nc,{placeholder:e,value:t,onChange:o})]})}const Uc=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Vc=h.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,Wc=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Yo({title:e,value:t,onChangeTitle:o,onChangeDate:n}){return r.jsxs(Uc,{children:[r.jsx(Vc,{placeholder:e,value:e,onChange:o}),r.jsx(Wc,{placeholder:e,value:t,onChange:n})]})}const qc=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Gc=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Yc=h.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,Qc=h.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,Zc=h.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function Te({title:e,value:t,onClick:o}){return r.jsxs(qc,{children:[r.jsx(Gc,{children:e}),r.jsxs(Yc,{onClick:o,children:[r.jsx(Qc,{style:{backgroundColor:t}}),r.jsx(Zc,{children:t})]})]})}function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function on(e,t){if(e==null)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(o=s[n])>=0||(a[o]=e[o]);return a}function Ot(e){var t=d.useRef(e),o=d.useRef(function(n){t.current&&t.current(n)});return t.current=e,o.current}var _e=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=1),e>o?o:e<t?t:e},Ie=function(e){return"touches"in e},Pt=function(e){return e&&e.ownerDocument.defaultView||self},Qo=function(e,t,o){var n=e.getBoundingClientRect(),a=Ie(t)?function(s,l){for(var u=0;u<s.length;u++)if(s[u].identifier===l)return s[u];return s[0]}(t.touches,o):t;return{left:_e((a.pageX-(n.left+Pt(e).pageXOffset))/n.width),top:_e((a.pageY-(n.top+Pt(e).pageYOffset))/n.height)}},Zo=function(e){!Ie(e)&&e.preventDefault()},rn=G.memo(function(e){var t=e.onMove,o=e.onKey,n=on(e,["onMove","onKey"]),a=d.useRef(null),s=Ot(t),l=Ot(o),u=d.useRef(null),c=d.useRef(!1),p=d.useMemo(function(){var g=function(y){Zo(y),(Ie(y)?y.touches.length>0:y.buttons>0)&&a.current?s(Qo(a.current,y,u.current)):b(!1)},f=function(){return b(!1)};function b(y){var w=c.current,C=Pt(a.current),x=y?C.addEventListener:C.removeEventListener;x(w?"touchmove":"mousemove",g),x(w?"touchend":"mouseup",f)}return[function(y){var w=y.nativeEvent,C=a.current;if(C&&(Zo(w),!function(T,I){return I&&!Ie(T)}(w,c.current)&&C)){if(Ie(w)){c.current=!0;var x=w.changedTouches||[];x.length&&(u.current=x[0].identifier)}C.focus(),s(Qo(C,w,u.current)),b(!0)}},function(y){var w=y.which||y.keyCode;w<37||w>40||(y.preventDefault(),l({left:w===39?.05:w===37?-.05:0,top:w===40?.05:w===38?-.05:0}))},b]},[l,s]),m=p[0],v=p[1],S=p[2];return d.useEffect(function(){return S},[S]),G.createElement("div",tt({},n,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:a,onKeyDown:v,tabIndex:0,role:"slider"}))}),Gt=function(e){return e.filter(Boolean).join(" ")},nn=function(e){var t=e.color,o=e.left,n=e.top,a=n===void 0?.5:n,s=Gt(["react-colorful__pointer",e.className]);return G.createElement("div",{className:s,style:{top:100*a+"%",left:100*o+"%"}},G.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},q=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=Math.pow(10,t)),Math.round(o*e)/o},Xc=function(e){return o1(Ht(e))},Ht=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?q(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?q(parseInt(e.substring(6,8),16)/255,2):1}},Jc=function(e){return t1(e1(e))},Kc=function(e){var t=e.s,o=e.v,n=e.a,a=(200-t)*o/100;return{h:q(e.h),s:q(a>0&&a<200?t*o/100/(a<=100?a:200-a)*100:0),l:q(a/2),a:q(n,2)}},$t=function(e){var t=Kc(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},e1=function(e){var t=e.h,o=e.s,n=e.v,a=e.a;t=t/360*6,o/=100,n/=100;var s=Math.floor(t),l=n*(1-o),u=n*(1-(t-s)*o),c=n*(1-(1-t+s)*o),p=s%6;return{r:q(255*[n,u,l,l,c,n][p]),g:q(255*[c,n,n,u,l,l][p]),b:q(255*[l,l,c,n,n,u][p]),a:q(a,2)}},Ue=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},t1=function(e){var t=e.r,o=e.g,n=e.b,a=e.a,s=a<1?Ue(q(255*a)):"";return"#"+Ue(t)+Ue(o)+Ue(n)+s},o1=function(e){var t=e.r,o=e.g,n=e.b,a=e.a,s=Math.max(t,o,n),l=s-Math.min(t,o,n),u=l?s===t?(o-n)/l:s===o?2+(n-t)/l:4+(t-o)/l:0;return{h:q(60*(u<0?u+6:u)),s:q(s?l/s*100:0),v:q(s/255*100),a}},r1=G.memo(function(e){var t=e.hue,o=e.onChange,n=Gt(["react-colorful__hue",e.className]);return G.createElement("div",{className:n},G.createElement(rn,{onMove:function(a){o({h:360*a.left})},onKey:function(a){o({h:_e(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":q(t),"aria-valuemax":"360","aria-valuemin":"0"},G.createElement(nn,{className:"react-colorful__hue-pointer",left:t/360,color:$t({h:t,s:100,v:100,a:1})})))}),n1=G.memo(function(e){var t=e.hsva,o=e.onChange,n={backgroundColor:$t({h:t.h,s:100,v:100,a:1})};return G.createElement("div",{className:"react-colorful__saturation",style:n},G.createElement(rn,{onMove:function(a){o({s:100*a.left,v:100-100*a.top})},onKey:function(a){o({s:_e(t.s+100*a.left,0,100),v:_e(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+q(t.s)+"%, Brightness "+q(t.v)+"%"},G.createElement(nn,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:$t(t)})))}),an=function(e,t){if(e===t)return!0;for(var o in e)if(e[o]!==t[o])return!1;return!0},i1=function(e,t){return e.toLowerCase()===t.toLowerCase()||an(Ht(e),Ht(t))};function a1(e,t,o){var n=Ot(o),a=d.useState(function(){return e.toHsva(t)}),s=a[0],l=a[1],u=d.useRef({color:t,hsva:s});d.useEffect(function(){if(!e.equal(t,u.current.color)){var p=e.toHsva(t);u.current={hsva:p,color:t},l(p)}},[t,e]),d.useEffect(function(){var p;an(s,u.current.hsva)||e.equal(p=e.fromHsva(s),u.current.color)||(u.current={hsva:s,color:p},n(p))},[s,e,n]);var c=d.useCallback(function(p){l(function(m){return Object.assign({},m,p)})},[]);return[s,c]}var s1=typeof window<"u"?d.useLayoutEffect:d.useEffect,l1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Xo=new Map,c1=function(e){s1(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Xo.has(t)){var o=t.createElement("style");o.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Xo.set(t,o);var n=l1();n&&o.setAttribute("nonce",n),t.head.appendChild(o)}},[])},d1=function(e){var t=e.className,o=e.colorModel,n=e.color,a=n===void 0?o.defaultColor:n,s=e.onChange,l=on(e,["className","colorModel","color","onChange"]),u=d.useRef(null);c1(u);var c=a1(o,a,s),p=c[0],m=c[1],v=Gt(["react-colorful",t]);return G.createElement("div",tt({},l,{ref:u,className:v}),G.createElement(n1,{hsva:p,onChange:m}),G.createElement(r1,{hue:p.h,onChange:m,className:"react-colorful__last-control"}))},u1={defaultColor:"000",toHsva:Xc,fromHsva:function(e){return Jc({h:e.h,s:e.s,v:e.v,a:1})},equal:i1},h1=function(e){return G.createElement(d1,tt({},e,{colorModel:u1}))};const p1=h.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    
    /* Animação de entrada suave */
    animation: slideInScale 0.3s ease-out forwards;
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
    
    @keyframes slideInScale {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(-10px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    &.closing {
        animation: slideOutScale 0.2s ease-in forwards;
    }
    
    @keyframes slideOutScale {
        from {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        to {
            opacity: 0;
            transform: scale(0.9) translateY(-10px);
        }
    }
`,f1=h(h1)`
    .react-colorful__hue {
        height: 8px;
        border-radius: 0 0 5px 5px;
        margin-inline: 0.5px;
    }

    .react-colorful__saturation {
        border-radius: 5px 5px 0 0;
    }

    .react-colorful__hue-pointer {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border-width: 1px;
        transition: all 0.2s ease;
    }

    .react-colorful__pointer{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border-width: 1px;
        transition: all 0.2s ease;
    }
    
    animation: pickerFadeIn 0.3s ease-out forwards;
    opacity: 0;
    transform: translateY(-10px);
    
    @keyframes pickerFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,Et=h.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    
    animation: divSlideUp 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
    
    @keyframes divSlideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:nth-of-type(2) { animation-delay: 0.1s; }
    &:nth-of-type(3) { animation-delay: 0.2s; }
    &:nth-of-type(4) { animation-delay: 0.3s; }
`,m1=h.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-inline: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 2px var(--textColor);
    }
    
    &:active {
        transform: scale(1.1);
    }
    
    animation: colorSlideIn 0.4s ease-out forwards;
    opacity: 0;
    transform: scale(0.5);
    
    @keyframes colorSlideIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.25s; }
    &:nth-child(5) { animation-delay: 0.3s; }
    &:nth-child(6) { animation-delay: 0.35s; }
    &:nth-child(7) { animation-delay: 0.4s; }
    &:nth-child(8) { animation-delay: 0.45s; }
`,g1=h.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,x1=h.input`
    background-color: var(--glassBackground);
    border: 1px solid var(--borderColor);
    outline: none;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    width: 100%;
    max-width: 150px;
    margin-right: auto;
    margin-left: 10px;
    font-size: 1em;
    padding: 3px;
    border-radius: 5px;
    
    &::placeholder {
        color: var(--textSecondary);
    }
`,v1=h(Ps)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1) rotate(5deg);
        color: var(--backgroundColor);
    }
    
    &:active {
        transform: scale(0.95) rotate(5deg);
    }
`,b1=h($s)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1) rotate(-5deg);
        color: var(--backgroundColor);
    }
    
    &:active {
        transform: scale(0.95) rotate(-5deg);
    }
`,y1=h(Zs)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-inline: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1) rotate(90deg);
        color: #ff4444;
        background-color: rgba(255, 68, 68, 0.1);
    }
    
    &:active {
        transform: scale(0.95) rotate(90deg);
    }
`,w1=h(Os)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.1);
        color: var(--AccentColor);
        background-color: rgba(76, 175, 80, 0.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`,C1=h.img`
    border-radius: 5px;
    max-width: 200px;
    height: auto;
    height: 200px;
    background-color: var(--glassBackground);
    border: 5px solid var(--borderColor);
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    cursor: crosshair;
    transition: all 0.3s ease;
    
    animation: imageZoomIn 0.3s ease-out forwards;
    opacity: 0;
    transform: scale(0.8);
    
    @keyframes imageZoomIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    &:hover {
        transform: scale(1.02);
        border-color: var(--textColor);
    }
`;function S1({DefaultColor:e,image:t,predefinedColors:o,position:n,onDone:a,onClose:s}){const[l,u]=d.useState(e),[c,p]=d.useState(!1),[m,v]=d.useState(null),S=d.useRef(null),g=d.useRef(null);function f(){p(!c)}function b(x){u(x.target.value===""?"#":x.target.value)}function y(x){const T=S.current,j=g.current.getBoundingClientRect(),E=T.getContext("2d"),_=Math.floor(x.clientX-j.left),M=Math.floor(x.clientY-j.top),A=`#${[...E.getImageData(_,M,1,1).data].slice(0,3).map(L=>L.toString(16).padStart(2,"0")).join("")}`;u(A),f()}function w(x){const T=S.current,j=g.current.getBoundingClientRect(),E=Math.floor(x.clientX-j.left),_=Math.floor(x.clientY-j.top);if(T){const M=T.getContext("2d");try{const A=`#${[...M.getImageData(E,_,1,1).data].slice(0,3).map(L=>L.toString(16).padStart(2,"0")).join("")}`;v(A)}catch{v(null)}}}function C(){v(null)}return r.jsxs(p1,{style:{position:"absolute",top:n.top,left:n.left,zIndex:1e3},children:[r.jsx("canvas",{ref:S,style:{display:"none"}}),c?r.jsx(C1,{ref:g,crossOrigin:"anonymous",draggable:"false",src:t,onClick:y,onMouseMove:w,onMouseLeave:C,onLoad:()=>{const x=S.current,T=x.getContext("2d"),I=g.current;x.width=I.width,x.height=I.height,T.drawImage(I,0,0,I.width,I.height)},style:m?{borderColor:m}:{}}):r.jsx(f1,{color:l,onChange:u}),r.jsx(Et,{children:o.map(x=>r.jsx(m1,{style:{backgroundColor:x},onClick:()=>u(x)},x))}),r.jsxs(Et,{children:[r.jsx(g1,{children:"Hex"}),r.jsx(x1,{value:l,onChange:b})]}),r.jsxs(Et,{children:[c?r.jsx(b1,{onClick:f}):r.jsx(v1,{onClick:f}),r.jsx(y1,{onClick:s}),r.jsx(w1,{onClick:()=>{a(l),Ya(l)}})]})]})}const k1=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,T1=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,j1=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,I1=h.input`
    appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: var(--glassBackground);
    border: 2px solid var(--borderColor);
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:checked {
        background-color: var(--AccentColor);
        border-color: var(--AccentColor);
    }

    &:checked::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 10px;
        font-weight: bold;
    }

    &:hover {
        border-color: var(--AccentColor);
        opacity: 0.8;
    }
`,E1=h.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function _t({title:e,text:t,value:o,onChange:n}){const a=()=>n(!o);return r.jsxs(k1,{children:[r.jsx(T1,{children:e}),r.jsxs(j1,{onClick:a,children:[r.jsx(I1,{checked:o,readOnly:!0,type:"checkbox"}),r.jsx(E1,{active:o,children:t})]})]})}function _1(e){return O({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function R1(e){return O({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const z1=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,M1=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,A1=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,L1=h.input`
    appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: var(--glassBackground);
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;
    display: none;

    &:checked {
        background-color: var(--AccentColor);
    }
`,O1=h.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    opacity: ${({active:e})=>e?1:.5};
    transition: opacity 0.3s;
    width: 100%;
    margin-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,P1=h(_1)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function H1({title:e,text:t,onChange:o}){const n=d.useRef(),a=()=>{n.current.click()},s=l=>{const u=l.target.files[0];t=u.name,u&&o(u)};return r.jsxs(z1,{onClick:a,children:[r.jsx(M1,{children:e}),r.jsxs(A1,{children:[r.jsx(P1,{}),r.jsx(L1,{ref:n,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:s}),r.jsx(O1,{active:!0,children:t})]})]})}const $1=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,D1=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,F1=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,B1=h.input`
    appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: var(--glassBackground);
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;
    display: none;

    &:checked {
        background-color: var(--AccentColor);
    }
`,N1=h.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    opacity: ${({active:e})=>e?1:.5};
    transition: opacity 0.3s;
    width: 100%;
    margin-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,U1=h(R1)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function V1({title:e,text:t,onChange:o}){const n=d.useRef(),a=()=>{n.current.click()},s=l=>{const u=l.target.files[0];t=u.name,u&&o(u)};return r.jsxs($1,{onClick:a,children:[r.jsx(D1,{children:e}),r.jsxs(F1,{children:[r.jsx(U1,{}),r.jsx(B1,{ref:n,type:"file",accept:".ttf,.otf",onChange:s}),r.jsx(N1,{active:!0,children:t})]})]})}function sn(e){return O({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const W1=h.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,q1=h.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,G1=h.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,Y1=h(sn)`
    font-size: 5em;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;function ln(){const{t:e}=U();return r.jsxs(W1,{children:[r.jsx(Y1,{}),r.jsx(q1,{children:e("Loading")}),r.jsx(G1,{children:e("LoadingText")})]})}var cn={},ot={},dn={exports:{}},Q1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z1=Q1,X1=Z1;function un(){}function hn(){}hn.resetWarningCache=un;var J1=function(){function e(n,a,s,l,u,c){if(c!==X1){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:hn,resetWarningCache:un};return o.PropTypes=o,o};dn.exports=J1();var pn=dn.exports,Yt={},rt={},fn={exports:{}};(function(e,t){(function(o,n){e.exports=n()})(Kn,function(){var o=function(c,p){return c<p?-1:c>p?1:0},n=function(c){return c.reduce(function(p,m){return p+m},0)},a=function(){function c(m){this.colors=m}var p=c.prototype;return p.palette=function(){return this.colors},p.map=function(m){return m},c}(),s=function(){function c(g,f,b){return(g<<10)+(f<<5)+b}function p(g){var f=[],b=!1;function y(){f.sort(g),b=!0}return{push:function(w){f.push(w),b=!1},peek:function(w){return b||y(),w===void 0&&(w=f.length-1),f[w]},pop:function(){return b||y(),f.pop()},size:function(){return f.length},map:function(w){return f.map(w)},debug:function(){return b||y(),f}}}function m(g,f,b,y,w,C,x){var T=this;T.r1=g,T.r2=f,T.g1=b,T.g2=y,T.b1=w,T.b2=C,T.histo=x}function v(){this.vboxes=new p(function(g,f){return o(g.vbox.count()*g.vbox.volume(),f.vbox.count()*f.vbox.volume())})}function S(g,f){if(f.count()){var b=f.r2-f.r1+1,y=f.g2-f.g1+1,w=Math.max.apply(null,[b,y,f.b2-f.b1+1]);if(f.count()==1)return[f.copy()];var C,x,T,I,j=0,E=[],_=[];if(w==b)for(C=f.r1;C<=f.r2;C++){for(I=0,x=f.g1;x<=f.g2;x++)for(T=f.b1;T<=f.b2;T++)I+=g[c(C,x,T)]||0;E[C]=j+=I}else if(w==y)for(C=f.g1;C<=f.g2;C++){for(I=0,x=f.r1;x<=f.r2;x++)for(T=f.b1;T<=f.b2;T++)I+=g[c(x,C,T)]||0;E[C]=j+=I}else for(C=f.b1;C<=f.b2;C++){for(I=0,x=f.r1;x<=f.r2;x++)for(T=f.g1;T<=f.g2;T++)I+=g[c(x,T,C)]||0;E[C]=j+=I}return E.forEach(function(M,z){_[z]=j-M}),function(M){var z,A,L,H,P,V=M+"1",N=M+"2",Y=0;for(C=f[V];C<=f[N];C++)if(E[C]>j/2){for(L=f.copy(),H=f.copy(),P=(z=C-f[V])<=(A=f[N]-C)?Math.min(f[N]-1,~~(C+A/2)):Math.max(f[V],~~(C-1-z/2));!E[P];)P++;for(Y=_[P];!Y&&E[P-1];)Y=_[--P];return L[N]=P,H[V]=L[N]+1,[L,H]}}(w==b?"r":w==y?"g":"b")}}return m.prototype={volume:function(g){var f=this;return f._volume&&!g||(f._volume=(f.r2-f.r1+1)*(f.g2-f.g1+1)*(f.b2-f.b1+1)),f._volume},count:function(g){var f=this,b=f.histo;if(!f._count_set||g){var y,w,C,x=0;for(y=f.r1;y<=f.r2;y++)for(w=f.g1;w<=f.g2;w++)for(C=f.b1;C<=f.b2;C++)x+=b[c(y,w,C)]||0;f._count=x,f._count_set=!0}return f._count},copy:function(){var g=this;return new m(g.r1,g.r2,g.g1,g.g2,g.b1,g.b2,g.histo)},avg:function(g){var f=this,b=f.histo;if(!f._avg||g){var y,w,C,x,T=0,I=0,j=0,E=0;if(f.r1===f.r2&&f.g1===f.g2&&f.b1===f.b2)f._avg=[f.r1<<3,f.g1<<3,f.b1<<3];else{for(w=f.r1;w<=f.r2;w++)for(C=f.g1;C<=f.g2;C++)for(x=f.b1;x<=f.b2;x++)T+=y=b[c(w,C,x)]||0,I+=y*(w+.5)*8,j+=y*(C+.5)*8,E+=y*(x+.5)*8;f._avg=T?[~~(I/T),~~(j/T),~~(E/T)]:[~~(8*(f.r1+f.r2+1)/2),~~(8*(f.g1+f.g2+1)/2),~~(8*(f.b1+f.b2+1)/2)]}}return f._avg},contains:function(g){var f=this,b=g[0]>>3;return gval=g[1]>>3,bval=g[2]>>3,b>=f.r1&&b<=f.r2&&gval>=f.g1&&gval<=f.g2&&bval>=f.b1&&bval<=f.b2}},v.prototype={push:function(g){this.vboxes.push({vbox:g,color:g.avg()})},palette:function(){return this.vboxes.map(function(g){return g.color})},size:function(){return this.vboxes.size()},map:function(g){for(var f=this.vboxes,b=0;b<f.size();b++)if(f.peek(b).vbox.contains(g))return f.peek(b).color;return this.nearest(g)},nearest:function(g){for(var f,b,y,w=this.vboxes,C=0;C<w.size();C++)((b=Math.sqrt(Math.pow(g[0]-w.peek(C).color[0],2)+Math.pow(g[1]-w.peek(C).color[1],2)+Math.pow(g[2]-w.peek(C).color[2],2)))<f||f===void 0)&&(f=b,y=w.peek(C).color);return y},forcebw:function(){var g=this.vboxes;g.sort(function(w,C){return o(n(w.color),n(C.color))});var f=g[0].color;f[0]<5&&f[1]<5&&f[2]<5&&(g[0].color=[0,0,0]);var b=g.length-1,y=g[b].color;y[0]>251&&y[1]>251&&y[2]>251&&(g[b].color=[255,255,255])}},{quantize:function(g,f){if(!Number.isInteger(f)||f<1||f>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!g.length||f<2||f>256||!g.length||f<2||f>256)return!1;for(var b=[],y=new Set,w=0;w<g.length;w++){var C=g[w],x=C.join(",");y.has(x)||(y.add(x),b.push(C))}if(b.length<=f)return new a(b);var T=function(z){var A,L=new Array(32768);return z.forEach(function(H){A=c(H[0]>>3,H[1]>>3,H[2]>>3),L[A]=(L[A]||0)+1}),L}(g);T.forEach(function(){});var I=function(z,A){var L,H,P,V=1e6,N=0,Y=1e6,ae=0,ce=1e6,xe=0;return z.forEach(function(ve){(L=ve[0]>>3)<V?V=L:L>N&&(N=L),(H=ve[1]>>3)<Y?Y=H:H>ae&&(ae=H),(P=ve[2]>>3)<ce?ce=P:P>xe&&(xe=P)}),new m(V,N,Y,ae,ce,xe,A)}(g,T),j=new p(function(z,A){return o(z.count(),A.count())});function E(z,A){for(var L,H=z.size(),P=0;P<1e3;){if(H>=A||P++>1e3)return;if((L=z.pop()).count()){var V=S(T,L),N=V[0],Y=V[1];if(!N)return;z.push(N),Y&&(z.push(Y),H++)}else z.push(L),P++}}j.push(I),E(j,.75*f);for(var _=new p(function(z,A){return o(z.count()*z.volume(),A.count()*A.volume())});j.size();)_.push(j.pop());E(_,f);for(var M=new v;_.size();)M.push(_.pop());return M}}}().quantize,l=function(c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=c.naturalWidth,this.height=this.canvas.height=c.naturalHeight,this.context.drawImage(c,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var u=function(){};return u.prototype.getColor=function(c,p){return p===void 0&&(p=10),this.getPalette(c,5,p)[0]},u.prototype.getPalette=function(c,p,m){var v=function(b){var y=b.colorCount,w=b.quality;if(y!==void 0&&Number.isInteger(y)){if(y===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");y=Math.max(y,2),y=Math.min(y,20)}else y=10;return(w===void 0||!Number.isInteger(w)||w<1)&&(w=10),{colorCount:y,quality:w}}({colorCount:p,quality:m}),S=new l(c),g=function(b,y,w){for(var C,x,T,I,j,E=b,_=[],M=0;M<y;M+=w)x=E[0+(C=4*M)],T=E[C+1],I=E[C+2],((j=E[C+3])===void 0||j>=125)&&(x>250&&T>250&&I>250||_.push([x,T,I]));return _}(S.getImageData().data,S.width*S.height,v.quality),f=s(g,v.colorCount);return f?f.palette():null},u.prototype.getColorFromUrl=function(c,p,m){var v=this,S=document.createElement("img");S.addEventListener("load",function(){var g=v.getPalette(S,5,m);p(g[0],c)}),S.src=c},u.prototype.getImageData=function(c,p){var m=new XMLHttpRequest;m.open("GET",c,!0),m.responseType="arraybuffer",m.onload=function(){if(this.status==200){var v=new Uint8Array(this.response);i=v.length;for(var S=new Array(i),g=0;g<v.length;g++)S[g]=String.fromCharCode(v[g]);var f=S.join(""),b=window.btoa(f);p("data:image/png;base64,"+b)}},m.send()},u.prototype.getColorAsync=function(c,p,m){var v=this;this.getImageData(c,function(S){var g=document.createElement("img");g.addEventListener("load",function(){var f=v.getPalette(g,5,m);p(f[0],this)}),g.src=S})},u})})(fn);var mn=fn.exports,nt={},Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.default=K1;function K1(e,t,o){return`rgb(${e}, ${t}, ${o})`}var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.default=e0;function e0(e,t,o){return`#${[e,t,o].map(n=>{const a=n.toString(16);return a.length===1?`0${a}`:a}).join("")}`}Object.defineProperty(nt,"__esModule",{value:!0});nt.default=r0;var t0=gn(Qt),o0=gn(Zt);function gn(e){return e&&e.__esModule?e:{default:e}}function r0(e,t){switch(t){case"rgbString":return(0,t0.default)(e[0],e[1],e[2]);case"hex":return(0,o0.default)(e[0],e[1],e[2]);default:return e}}var it={};Object.defineProperty(it,"__esModule",{value:!0});it.default=n0;function n0(e,t=void 0){return new Promise((o,n)=>{const a=new Image;a.addEventListener("load",()=>{o(a)}),a.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),a.crossOrigin=t,a.src=e})}Object.defineProperty(rt,"__esModule",{value:!0});rt.default=l0;var i0=Xt(mn),a0=Xt(nt),s0=Xt(it);function Xt(e){return e&&e.__esModule?e:{default:e}}async function l0(e,t="rgbString",o=null,n=10){const a=await(0,s0.default)(e,o),l=new i0.default().getColor(a,n);return(0,a0.default)(l,t)}Object.defineProperty(Yt,"__esModule",{value:!0});Yt.default=h0;var Jo=d,c0=d0(rt);function d0(e){return e&&e.__esModule?e:{default:e}}const xn={loading:!0,data:null,error:void 0};function u0(e,t){switch(t.type){case"getColor":return xn;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function h0(e,t="rgbString",o={}){const{crossOrigin:n=null,quality:a=10}=o,[s,l]=(0,Jo.useReducer)(u0,xn);return(0,Jo.useEffect)(()=>{l({type:"getColor"}),(0,c0.default)(e,t,n,a).then(u=>{l({type:"resolveColor",payload:u})}).catch(u=>{l({type:"rejectColor",payload:u})})},[e]),s}Object.defineProperty(ot,"__esModule",{value:!0});ot.default=void 0;var Ko=Jt(d),je=Jt(pn),p0=Jt(Yt);function Jt(e){return e&&e.__esModule?e:{default:e}}const Kt=({src:e,format:t,crossOrigin:o,quality:n,children:a})=>{const s=(0,p0.default)(e,t,{crossOrigin:o,quality:n});return Ko.default.createElement(Ko.default.Fragment,null,a(s))};Kt.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Kt.propTypes={children:je.default.any.isRequired,src:je.default.string.isRequired,format:je.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:je.default.string,quality:je.default.number};var f0=Kt;ot.default=f0;var at={},eo={},st={};Object.defineProperty(st,"__esModule",{value:!0});st.default=v0;var m0=to(mn),g0=to(nt),x0=to(it);function to(e){return e&&e.__esModule?e:{default:e}}async function v0(e,t=2,o="rgbString",n=null,a=10){const s=await(0,x0.default)(e,n);return new m0.default().getPalette(s,t,a).map(c=>(0,g0.default)(c,o))}Object.defineProperty(eo,"__esModule",{value:!0});eo.default=C0;var er=d,b0=y0(st);function y0(e){return e&&e.__esModule?e:{default:e}}const vn={loading:!0,data:[],error:void 0};function w0(e,t){switch(t.type){case"getPalette":return vn;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function C0(e,t=2,o="rgbString",n={}){const{crossOrigin:a=null,quality:s=10}=n,[l,u]=(0,er.useReducer)(w0,vn);return(0,er.useEffect)(()=>{u({type:"getPalette"}),(0,b0.default)(e,t,o,a,s).then(c=>{u({type:"resolvePalette",payload:c})}).catch(c=>{u({type:"rejectPalette",payload:c})})},[e]),l}Object.defineProperty(at,"__esModule",{value:!0});at.default=void 0;var tr=oo(d),fe=oo(pn),S0=oo(eo);function oo(e){return e&&e.__esModule?e:{default:e}}const ro=({src:e,colorCount:t,format:o,crossOrigin:n,quality:a,children:s})=>{const l=(0,S0.default)(e,t,o,{crossOrigin:n,quality:a});return tr.default.createElement(tr.default.Fragment,null,s(l))};ro.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};ro.propTypes={children:fe.default.any.isRequired,src:fe.default.string.isRequired,format:fe.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:fe.default.number,crossOrigin:fe.default.string,quality:fe.default.number};var k0=ro;at.default=k0;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return a.default}}),e.default=void 0;var t=s(ot),o=s(at),n=s(rt),a=s(st);function s(u){return u&&u.__esModule?u:{default:u}}var l=t.default;e.default=l})(cn);const T0=(e,t=500,o=134)=>`
        <svg width="${t}" height="${o}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,j0=({onImageReady:e,posterData:t,generatePoster:o,onTitleSizeAdjust:n,customFont:a})=>{const s=d.useRef(null);return d.useEffect(()=>{(async()=>{if(!o)return;const u=s.current,c=u.getContext("2d"),p=2480,m=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0;const v=async x=>{const T=new Image;return T.crossOrigin="anonymous",T.src=x,new Promise(I=>{T.onload=()=>{if(c.drawImage(T,t.marginCover,t.marginCover,p-t.marginCover*2,p-t.marginCover*2),t.useFade){let j=c.createLinearGradient(0,0,0,3e3-t.marginBackground);const E=b(t.backgroundColor);j.addColorStop(.5,`rgba(${E.r}, ${E.g}, ${E.b}, 0)`),j.addColorStop(.8,t.backgroundColor),c.fillStyle=j,c.fillRect(0,0,u.width,2500-t.marginBackground)}I()}})},S=async()=>{const x=T0(t.textColor,500,134),T=new Blob([x],{type:"image/svg+xml;charset=utf-8"}),I=URL.createObjectURL(T),j=new Image;return j.src=I,new Promise(E=>{j.onload=()=>{c.globalAlpha="0.5",c.drawImage(j,p-70-500,50,500,134),c.globalAlpha="1",URL.revokeObjectURL(I),E()}})},g=async()=>{let x=t.titleSize?parseInt(t.titleSize):230;const T=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){c.font=`bold ${x}px ${T}`;let E=c.measureText(t.albumName).width;for(;E>2480-t.marginSide*2;)x-=1,c.font=`bold ${x}px ${T}`,E=c.measureText(t.albumName).width;n(x,!0)}else c.font=`bold ${x}px ${T}`;c.fillStyle=t.textColor,t.showTracklist?c.fillText(t.albumName,t.marginSide,2500+t.marginTop):c.fillText(t.albumName,t.marginSide,2790+t.marginTop);let I=t.artistsSize?parseInt(t.artistsSize):110;c.font=`bold ${I}px ${a||"Montserrat"}`,t.showTracklist?c.fillText(t.artistsName,t.marginSide,2500+t.marginTop+I*1.3):c.fillText(t.artistsName,t.marginSide,2820+t.marginTop+I),c.font=`bold 70px ${a||"Montserrat"}`,c.fillText(t.titleRelease,t.marginSide,3310);let j=c.measureText(t.titleRelease).width;c.fillText(t.titleRuntime,j+t.marginSide+100,3310),c.globalAlpha=.7,c.font=`bold 60px ${a||"Montserrat"}`,c.fillText(t.runtime,j+t.marginSide+100,3390),c.fillText(t.releaseDate,t.marginSide,3390),c.globalAlpha=1,c.fillStyle=t.color1,c.fillRect(2045-t.marginSide,3368,145,30),c.fillStyle=t.color2,c.fillRect(2190-t.marginSide,3368,145,30),c.fillStyle=t.color3,c.fillRect(2335-t.marginSide,3368,145,30)},f=async()=>{c.fillStyle=t.textColor;let x=t.marginSide+10,T=0,I=0;const j=t.tracksSize?parseInt(t.tracksSize):50;c.font=`bold ${j}px ${a||"Montserrat"}`;const E=j,_=parseInt(t.marginTop||0),M=parseInt(t.artistsSize)?2500+_+parseInt(t.artistsSize)*1.3+130:2500+_+110*1.2+130,z=500,A=p-t.marginSide*2,L=parseInt(t.marginSide),H=M+z-10-parseInt(t.marginTop);let P=M;t.tracklist.split(`
`).forEach(V=>{if(P+E*1.3>=H){if(P=M,x=T+E*2.5+I,x>=L+A)return;I=x-E*2.5,T=0}const N=c.measureText(`${V}`).width+t.marginSide;N>T&&(T=N),c.fillText(`${V}`,x,P),P+=E*1.3})},b=x=>{const T=parseInt(x.replace("#",""),16);return{r:T>>16&255,g:T>>8&255,b:T&255}},y=x=>{const T=j=>{const E=j/255;return E<=.03928?E/12.92:Math.pow((E+.055)/1.055,2.4)};return .2126*T(x.r)+.7152*T(x.g)+.0722*T(x.b)>.179?"black":"white"},w=async()=>{const x=b(t.backgroundColor),T=y(x),I=t.textColor,j=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${T}/640/spotify:album:${t.albumID}`;let _=await(await fetch(j)).text();T=="black"?_=_.replace(/fill="#000000"/g,`fill="${I}"`):_=_.replace(/fill="#ffffff"/g,`fill="${I}"`),_=_.replace(t.backgroundColor,"transparent");const M=new Blob([_],{type:"image/svg+xml"}),z=URL.createObjectURL(M);return new Promise(A=>{const L=new Image;L.src=z,L.onload=function(){c.drawImage(L,2020-t.marginSide,3235,480,120);const H=u.toDataURL("image/png");e(H),A()}})},C=async()=>{c.fillStyle=t.backgroundColor,c.fillRect(0,2480-t.marginBackground,p,m-2480+t.marginBackground)};c.clearRect(0,0,p,m),c.fillStyle=t.backgroundColor,c.fillRect(0,0,p,m),t.useUncompressed?await v(await t.uncompressedAlbumCover):await v(t.albumCover),await C(),await g(),t.showTracklist&&await f(),t.useWatermark&&await S(),await w()})()},[o,t,e]),r.jsx("canvas",{ref:s,width:2480,height:3508,style:{display:"none"}})},I0=h.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function $({children:e,animationDelay:t=0,...o}){const[n,a]=d.useState(!1);return d.useEffect(()=>{const s=setTimeout(()=>{a(!0)},t);return()=>clearTimeout(s)},[t]),r.jsx(I0,{visible:n,animationDelay:t,...o,children:e})}const E0=h.div`
    width: 80%;
    margin-inline: auto;
`,_0=h.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,R0=h(Vr)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,z0=h.h3`
    font-size: 1.3em;
    font-weight: bold;
`,M0=h.div`
    width: 100%;
    height: auto;
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,A0=h.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    opacity: ${e=>e.visible?1:0};
    transform: scale(${e=>e.visible?1:.95}) translateY(${e=>e.visible?"0":"10px"});
    transition: opacity 0.8s ease, transform 0.8s ease;

    @media (max-width: 1292px) {
        margin: 0;
    }

    @media (max-width: 450px) {
        width: 288px;
        height: 448px;
        margin: 0;
    }
`,L0=h.div`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 1292px) {
        margin: 0;
    }

    @media (max-width: 450px) {
        width: 288px;
        height: 448px;
        margin: 0;
        margin-bottom: 30px;
        margin-top: 20px;
    }
`,O0=h(sn)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?B`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,P0=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,H0=h.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,or=h.div`
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    color: ${({$active:e})=>e?"var(--textColor)":"var(--textSecondary)"};
    cursor: pointer;
    border-bottom: ${({$active:e})=>e?"2px solid var(--AccentColor)":"none"};
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
        color: var(--textColor);
    }
`,$0=h.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 7px;
    padding-inline: 30px;
    width: 100%;

    @media (max-width: 1300px) {
        margin-top: 15px;
    }

    @media (max-width: 530px) {
        padding: 0;
    }
`,D0=h.div`
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1300px) {
        width: 90%;
        min-height: 250px;
    }

    @media (max-width: 850px) {
        width: 85%;
    }

    @media (max-width: 600px) {
        padding: 0px;
    }
`,F0=h.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 700px) {
        justify-content: space-between;
        gap: 0;
        width: 106%;
    }
`,rr=h.button`
    background: var(--glassBackground);
    color: var(--textColor);
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
        background: var(--borderColor);
    }
    
    &:active {
        transform: scale(0.95);
    }
`,B0=h.textarea`
    width: 100%;
    flex: 1;
    background: var(--glassBackground);
    color: var(--textColor);
    border: none;
    padding: 15px;
    font-size: 14px;
    resize: none;
    border-radius: 8px;
    overflow-y: auto;
    max-height: 300px;
    line-height: 1.5em;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &:focus {
        outline: none;
        background: var(--glassBackground);
    }

    @media (max-width: 530px) {
        padding: 10px;
    }
`,N0=h.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-inline: -20px;
    justify-content: end;

    @media (max-width: 450px) {
        justify-content: center;
    }

    @media (max-width: 350px) {
        flex-direction: column;
    }
`,nr=h.div`
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background-color: var(--glassBackground);
    padding: 7px 15px;
    width: min-content;
    margin-left: 15px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    z-index: 1;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: transparent;
        transition: background-color 0.5s;
        z-index: -1;
    }

    :hover::before {
        background-color: var(--glassBackground);
    }

    @media (max-width: 350px) {
        margin-inline: auto;
        margin-bottom: 20px;
        padding-inline: 50px;
    }
`,ir=h.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,U0=h(ac)`
    font-size: 1.15em;
`,V0=h(Rl)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Oo`
                  animation: ${B`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Oo`
                  animation: ${B`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,W0=h.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,q0=h.p`
    font-size: 0.75em;
    color: var(--textSecondary);
    margin-top: 10px;
    margin-right: 20px;
    text-align: right;
    width: 100%;
    margin-left: 20px;

    @media (max-width: 450px) {
        text-align: center;
    }

    @media (max-width: 350px) {
        margin-bottom: 10px;
    }
`,no=d.forwardRef(({albumID:e,handleClickBack:t,model:o,modelParams:n,initialPosterJson:a},s)=>{const{t:l}=U(),u=d.useRef(null),[c,p]=d.useState(""),[m,v]=d.useState(""),[S,g]=d.useState("200"),[f,b]=d.useState("110"),[y,w]=d.useState("50"),[C,x]=d.useState((n==null?void 0:n.marginTop)??""),[T,I]=d.useState(160),[j,E]=d.useState((n==null?void 0:n.marginCover)??0),[_,M]=d.useState((n==null?void 0:n.marginBackground)??0),[z,A]=d.useState("#5900ff"),[L,H]=d.useState("#ff9100"),[P,V]=d.useState("#ff0000"),[N,Y]=d.useState("#00ff40"),[ae,ce]=d.useState("#2600ff"),[xe,ve]=d.useState(!0),[so,lo]=d.useState((n==null?void 0:n.useFade)??!0),[co,lt]=d.useState((n==null?void 0:n.showTracklist)??!1),[ct,dt]=d.useState(""),[kn,ut]=d.useState(""),[Tn,uo]=d.useState(""),[he,jn]=d.useState(null),[ht,ho]=d.useState("information");function po(k){xt(!0),p(k.albumName||""),v(k.artistsName||""),g(k.titleSize||"200"),b(k.artistsSize||"110"),w(k.tracksSize||"50"),x(k.marginTop||""),I(k.marginSide||160),E(k.marginCover||0),M(k.marginBackground||0),A(k.backgroundColor||"#5900ff"),H(k.textColor||"#ff9100"),V(k.color1||"#ff0000"),Y(k.color2||"#00ff40"),ce(k.color3||"#2600ff"),ve(k.useWatermark!==void 0?k.useWatermark:!0),lo(k.useFade!==void 0?k.useFade:!0),lt(k.showTracklist!==void 0?k.showTracklist:!1),Oe(k.useUncompressed!==void 0?k.useUncompressed:!1),dt(k.albumCover||""),ut(k.uncompressedAlbumCover||""),uo(k.customFont||""),be(k.tracklist||""),pt(k.titleRelease||""),ft(k.releaseDate||""),mt(k.titleRuntime||""),gt(k.runtime||""),He()}d.useEffect(()=>{if(he){const k=new FileReader;k.onload=async D=>{const W="CustomFont",de=new FontFace(W,D.target.result);try{const Z=await de.load();document.fonts.add(Z),uo(W)}catch(Z){console.error("Erro ao carregar fonte:",Z)}},k.readAsArrayBuffer(he)}},[he]),d.useEffect(()=>{a&&po(a)},[a]);const[fo,Oe]=d.useState(!1),[In,En]=d.useState("Original"),[Pe,be]=d.useState(""),[mo,pt]=d.useState(""),[go,ft]=d.useState(""),[xo,mt]=d.useState(""),[vo,gt]=d.useState(""),[_n,bo]=d.useState(!1),[yo,wo]=d.useState(null),[pe,Rn]=d.useState(null),[Co,So]=d.useState(!1),[ko,zn]=d.useState(!1),[To,xt]=d.useState(!1),Mn=k=>{g(k.target.value),So(!0)},An=(k,D)=>{D&&!ko?(g(k),zn(!0)):Co||g(k)},Ln={albumCover:ct,uncompressedAlbumCover:kn,useUncompressed:fo,albumName:c,artistsName:m,titleSize:S,artistsSize:f,tracksSize:y,marginTop:C,marginSide:T,marginCover:j,marginBackground:_,titleRelease:mo,releaseDate:go,titleRuntime:xo,runtime:vo,backgroundColor:z,textColor:L,useWatermark:xe,useFade:so,showTracklist:co,tracklist:Pe,color1:P,color2:N,color3:ae,albumID:e,userAdjustedTitleSize:Co,initialTitleSizeSet:ko},[ye,On]=d.useState(null),[vt,jo]=d.useState(!1),[Pn,bt]=d.useState(!1),[Hn,Io]=d.useState(!1),[$n,Eo]=d.useState(!1),[Dn,yt]=d.useState(!1);d.useEffect(()=>{if(vt){bt(!1);const k=setTimeout(()=>{yt(!0)},100);return()=>clearTimeout(k)}else yt(!1)},[vt]);const Fn=k=>{On(k),jo(!1),Eo(!1),Ga(c,m),setTimeout(()=>{yt(!1),setTimeout(()=>{bt(!0)},300)},100)},He=()=>{So(!1),bt(!1),requestAnimationFrame(()=>{if(Eo(!0),jo(!0),u.current){const k=u.current.getBoundingClientRect(),D=k.top+window.scrollY,W=k.height,Z=(window.innerHeight-W)/2;window.scrollTo({top:D-Z,behavior:"smooth"})}})},Bn=k=>{dt(URL.createObjectURL(k)),Oe(!1),ut(""),En(k.name),xt(!1)},wt=()=>{if(!ye)return;const k=document.createElement("a");k.href=ye,k.download=`Posterfy - ${c}.png`,k.click(),qa(c,"poster",m)};function we(k,D){const W=k.target.getBoundingClientRect();wo({top:W.top+window.scrollY,left:W.left+window.scrollX}),Rn(D),bo(!0)}function Nn(){bo(!1)}const Un=()=>{const D=Pe.split(`
`).map(W=>W.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());be(D.join(`
`))},Vn=()=>{const D=Pe.split(`
`).map(W=>W.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());be(D.join(`
`))};async function Wn(k,D="us"){var W;try{let de=`https://itunes.apple.com/search?term=${encodeURIComponent(k)}&country=${D}&entity=album&limit=1`,Z=await fetch(de);if(!Z.ok)throw new Error(`HTTP Error: ${Z.status}`);let Ct=await Z.json();if(!((W=Ct.results)!=null&&W.length))return console.warn("No album data found."),To||Oe(!1),"";let X=Ct.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return X.length===2?`https://a5.mzstatic.com/us/r1000/0/${X[1].split("/").slice(0,-1).join("/")}`:""}catch(de){return console.error("Error fetching album cover:",de.message),""}}return d.useEffect(()=>{pt(l("EDITOR_ReleaseTitle")),mt(l("EDITOR_RuntimeTitle"))},[l]),d.useEffect(()=>{const k=async()=>{var D;try{const _o=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,X=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${_o}`}})).json(),St=X.artists.map(Ce=>Ce.name).join(", ");p(X.name),v(St),dt((D=X.images[0])==null?void 0:D.url),ft(X.release_date),ut(await Wn(X.name+" "+St));const Gn=X.tracks.items.reduce((Ce,$e)=>Ce+$e.duration_ms,0),Ro=Math.floor(Gn/1e3),zo=Math.floor(Ro/60),Mo=Math.floor(zo/60),Ao=Ro%60,Lo=zo%60,Yn=Mo>0?`${Mo}h ${Lo}min ${Ao}s`:`${Lo}min ${Ao}s`;gt(Yn);const Qn=X.tracks.items.map((Ce,$e)=>($e===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&lt(!0),`${$e+1}. ${Ce.name}`));be(Qn.join(`
`)),Io(!0)}catch(W){console.error("Error trying to fetch album data:",W)}};a?(po(a),Io(!0)):(xt(!1),k())},[e]),d.useEffect(()=>{const k=D=>{D.ctrlKey&&D.key==="s"?(D.preventDefault(),He()):D.ctrlKey&&D.key==="d"&&(D.preventDefault(),wt())};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[ye,c,wt]),r.jsx(r.Fragment,{children:Hn?r.jsxs(E0,{ref:s,children:[r.jsx(cn.Palette,{src:ct,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:k})=>(d.useEffect(()=>{k&&k.length>0&&!To&&(A(k[0]),H(k[1]),V(k[2]),Y(k[3]),ce(k[4]),He())},[k]),null)}),r.jsxs(_0,{onClick:t,children:[r.jsx(R0,{}),r.jsx(z0,{children:l("GoBack")})]}),r.jsxs(M0,{children:[r.jsx(j0,{onImageReady:Fn,posterData:Ln,generatePoster:vt,onTitleSizeAdjust:An,customFont:Tn}),r.jsxs(L0,{children:[ye?r.jsx(A0,{src:ye,ref:u,visible:Pn}):r.jsx(W0,{ref:u}),r.jsx(O0,{visible:Dn})]}),r.jsxs(P0,{children:[r.jsx($,{animationDelay:50,children:r.jsxs(H0,{children:[r.jsx(or,{$active:ht==="information",onClick:()=>ho("information"),children:l("EDITOR_InformationTab")}),r.jsx(or,{$active:ht==="tracklist",onClick:()=>ho("tracklist"),children:l("EDITOR_TracklistTab")})]})}),ht==="information"?r.jsxs($0,{children:[r.jsx($,{animationDelay:0,children:r.jsx(te,{title:l("EDITOR_AlbumName"),value:c,onChange:k=>p(k.target.value)})}),r.jsx($,{animationDelay:50,children:r.jsx(te,{title:l("EDITOR_ArtistName"),value:m,onChange:k=>v(k.target.value)})}),r.jsx($,{animationDelay:100,children:r.jsx(te,{title:l("EDITOR_TitleSize"),value:S,onChange:Mn})}),r.jsx($,{animationDelay:150,children:r.jsx(te,{title:l("EDITOR_ArtistSize"),value:f,onChange:k=>b(k.target.value)})}),r.jsx($,{animationDelay:200,children:r.jsx(te,{title:l("EDITOR_TracksSize"),value:y,onChange:k=>w(k.target.value)})}),r.jsx($,{animationDelay:250,children:r.jsx(te,{title:l("EDITOR_MarginTop"),value:C,onChange:k=>x(k.target.value)})}),r.jsx($,{animationDelay:300,children:r.jsx(te,{title:l("EDITOR_MarginSide"),value:T,onChange:k=>I(k.target.value)})}),r.jsx($,{animationDelay:350,children:r.jsx(te,{title:l("EDITOR_MarginCover"),value:j,onChange:k=>E(k.target.value)})}),r.jsx($,{animationDelay:375,children:r.jsx(te,{title:l("EDITOR_MarginBackground"),value:_,onChange:k=>M(k.target.value)})}),r.jsx($,{animationDelay:400,children:r.jsx(Yo,{title:mo,value:go,onChangeTitle:k=>pt(k.target.value),onChangeDate:k=>ft(k.target.value)})}),r.jsx($,{animationDelay:450,children:r.jsx(Yo,{title:xo,value:vo,onChangeTitle:k=>mt(k.target.value),onChangeDate:k=>gt(k.target.value)})}),r.jsx($,{animationDelay:500,children:r.jsx(Te,{title:l("EDITOR_BackgroundColor"),value:z,onClick:k=>we(k,"backgroundColor")})}),r.jsx($,{animationDelay:550,children:r.jsx(Te,{title:l("EDITOR_TextColor"),value:L,onClick:k=>we(k,"textColor")})}),r.jsx($,{animationDelay:600,children:r.jsx(Te,{title:`${l("EDITOR_Color")} 1`,value:P,onClick:k=>we(k,"color1")})}),r.jsx($,{animationDelay:650,children:r.jsx(Te,{title:`${l("EDITOR_Color")} 2`,value:N,onClick:k=>we(k,"color2")})}),r.jsx($,{animationDelay:700,children:r.jsx(Te,{title:`${l("EDITOR_Color")} 3`,value:ae,onClick:k=>we(k,"color3")})}),r.jsx($,{animationDelay:800,children:r.jsx(_t,{title:l("EDITOR_Fade"),value:so,onChange:k=>lo(k),text:l("EDITOR_FadeText")})}),r.jsx($,{animationDelay:850,children:r.jsx(_t,{title:l("EDITOR_Uncompressed"),value:fo,onChange:k=>Oe(k),text:l("EDITOR_UncompressedText")})}),r.jsx($,{animationDelay:900,children:r.jsx(_t,{title:l("EDITOR_Tracklist"),value:co,onChange:k=>lt(k),text:l("EDITOR_TracklistText")})}),r.jsx($,{animationDelay:950,children:r.jsx(H1,{title:l("EDITOR_Cover"),onChange:Bn,text:In})}),r.jsx($,{animationDelay:1e3,children:r.jsx(V1,{title:l("EDITOR_Font"),text:(he==null?void 0:he.name)||l("EDITOR_DefaultFont"),onChange:jn})}),_n&&yo&&pe&&r.jsx(S1,{DefaultColor:pe==="backgroundColor"?z:pe==="textColor"?L:pe==="color1"?P:pe==="color2"?N:ae,image:ct,predefinedColors:[P,N,ae,z,L],onDone:k=>{switch(pe){case"backgroundColor":A(k);break;case"textColor":H(k);break;case"color1":V(k);break;case"color2":Y(k);break;case"color3":ce(k);break}wo(null)},position:yo,onClose:Nn})]}):r.jsxs(D0,{children:[r.jsx(B0,{value:Pe,onChange:k=>be(k.target.value),placeholder:l("EDITOR_TracklistPlaceholder")}),r.jsxs(F0,{children:[r.jsx(rr,{onClick:Un,children:l("EDITOR_RemoveParentheses")}),r.jsx(rr,{onClick:Vn,children:l("EDITOR_RemoveBrackets")})]})]}),r.jsx($,{animationDelay:1050,children:r.jsxs(N0,{children:[r.jsxs(nr,{onClick:wt,children:[r.jsx(U0,{}),r.jsx(ir,{children:l("EDITOR_Download")})]}),r.jsxs(nr,{onClick:He,children:[r.jsx(V0,{$spinning:$n}),r.jsx(ir,{children:l("EDITOR_Apply")})]})]})}),r.jsx($,{animationDelay:1100,children:r.jsxs(q0,{children:[l("EDITOR_Shortcuts"),": Ctrl+S (",l("EDITOR_Apply"),"), Ctrl+D (",l("EDITOR_Download"),")"]})})]})]})]}):r.jsx(ln,{})})});no.displayName="PosterEditor";const G0=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Y0=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},Q0=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const a=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),r.jsx("path",{fill:o,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},Z0=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},X0=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,J0=h(Vr)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,K0=h.h3`
  font-size: 1.3em;
  font-weight: bold;
`,io=B`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ed=h.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${io} 0.7s cubic-bezier(0.23, 1, 0.32, 1);

  svg {
    transition: transform 0.2s ease-in-out;
    width: 200px;
    height: auto;
  }

  @media (max-width: 500px) {
    svg {
      width: 120px;
      min-width: 0;
    }
  }

  :hover {
    cursor: pointer;
  }

  :hover > svg {
    transform: scale(1.05);
  }

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px 0;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }
`,Ve=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${io} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${e=>e.delay||0}s;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 18px;
  }

  @media (max-width: 500px) {
    svg {
      width: 120px;
      margin-inline: auto;
    }
  }
`,We=h.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${io} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${e=>(e.delay||0)+.15}s;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`,td=h.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,od=h.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function rd({onSelectModel:e,onBack:t}){const{t:o}=U(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},a={marginCover:160,useFade:!1,marginTop:20},s={marginCover:-1100,marginBackground:-1200,useFade:!1},l={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function u(p,m){Wa("select_model","ModelSelector",p),e&&e(p,m)}const c=[0,.08,.16,.24];return r.jsxs(r.Fragment,{children:[r.jsxs(X0,{onClick:t,children:[r.jsx(J0,{}),r.jsx(K0,{children:o("GoBack")})]}),r.jsx(td,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelTitle")}),r.jsx(od,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelText")}),r.jsxs(ed,{children:[r.jsxs(Ve,{delay:c[0],onClick:()=>u("standart",l),children:[r.jsx(G0,{width:200}),r.jsx(We,{delay:c[0],children:"Standard"})]}),r.jsxs(Ve,{delay:c[1],onClick:()=>u("frame",a),children:[r.jsx(Z0,{width:200}),r.jsx(We,{delay:c[1],children:"Frame"})]}),r.jsxs(Ve,{delay:c[2],onClick:()=>u("basic",n),children:[r.jsx(Y0,{width:200}),r.jsx(We,{delay:c[2],children:"Basic"})]}),r.jsxs(Ve,{delay:c[3],onClick:()=>u("fullcover",s),children:[r.jsx(Q0,{width:200}),r.jsx(We,{delay:c[3],children:"Full Cover"})]})]})]})}const nd=h.div`
    width: 100%;
`,id=h.div`
    background-color: var(--glassBackground);
    width: 80%;
    margin-inline: auto;
    height: 50px;
    margin-block: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) {
        width: 90%;
    }
`,ad=h(Ds)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,sd=h(Ja)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,ld=h.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,cd=h.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function dd({onSearch:e,value:t=""}){const{t:o}=U(),[n,a]=d.useState(t);d.useEffect(()=>{a(t)},[t]);const s=c=>{c.key==="Enter"&&(e(n),n.trim()&&Uo(n.trim()))},l=c=>{a(c.target.value)},u=()=>{e(n),n.trim()&&Uo(n.trim())};return r.jsx(nd,{children:r.jsxs(id,{role:"search","aria-label":"Album search for poster creation",children:[r.jsx(ad,{"aria-hidden":"true"}),r.jsx(ld,{}),r.jsx(cd,{placeholder:o("SearchPlaceholder"),value:n,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),r.jsx(sd,{onClick:u,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const ud=h.div`
    width: min-content;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    min-width: 200px;
    max-width: 220px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: all 0.6s ease, transform 0.6s ease;

    &:hover{
        transform: scale(1.02);
    }

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background-color: transparent;
        transition: background-color 0.3s;
        background-color: var(--glassBackground);
        z-index: 1;
        border: 1px solid transparent;
    }

    :hover::before {
        border: 3px solid var(--PosterShare-light);
    }

    @media (max-width: 650px) {
        width: 93%;
        min-width: unset;
        max-width: unset;
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 600px) {
        width: 96%;
        min-width: unset;
    }

    @media (max-width: 480px) {
        width: 94%;
    }

`,hd=h.img`
    width: 100%;
    min-height: 200px;
    background-color: var(--glassBackground);
    height: auto;
    border-radius: 10px;
    z-index: 10;

    @media (max-width: 650px) {
        width: 100px;
        height: 100px;
        min-height: unset;
    }
`,pd=h.h3`
    font-weight: 600;
    color: var(--textColor);
    font-size: 0.8em;
    margin-top: 10px;
    padding-right: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    max-width: 180px;
    white-space: nowrap;
    margin-left: 5px;
    z-index: 10;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media (max-width: 650px) {
        max-width: unset;
        font-size: 0.9em;
    }
`,fd=h.p`
    font-weight: 500;
    color: var(--textColor);
    font-size: 0.8em;
    margin-top: 5px;
    opacity: 0.5;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    max-width: 180px;
    white-space: nowrap;
    margin-left: 5px;
    z-index: 10;

    @media (max-width: 650px) {
        max-width: unset;
        font-size: 0.9em;
    }
`,md=h.div`
    display: flex;
    flex-direction: column;
    z-index: 10;

    @media (max-width: 650px) {
        width: 100%;
        height: 100px;
        min-height: unset;
        margin-left: 10px;
        justify-content: center;
    }
`;function gd({title:e,artist:t,cover:o,id:n,onClick:a,animationDelay:s=0}){const[l,u]=d.useState(!1);return d.useEffect(()=>{const c=setTimeout(()=>{u(!0)},s);return()=>clearTimeout(c)},[s]),r.jsxs(ud,{onClick:()=>a(n),visible:l,children:[r.jsx(hd,{src:o}),r.jsxs(md,{children:[r.jsx(pd,{children:e}),r.jsx(fd,{children:t})]})]})}const xd=h.div`
    width: 81%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    gap: 20px;
    justify-content: center;
    justify-items: center;

    @media (max-width: 650px) {
        display: flex;
        overflow-x: scroll;
        gap: 15px;
        flex-direction: column;
        width: 89%;
    }
`,vd=h.button`
    width: 81%;
    margin: 20px auto;
    padding: 8px 17px;
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    background-color: var(--textColor);

    &:hover {
        background-color: var(--AccentColor);
    }

    &:disabled {
        background-color: #666;
        cursor: not-allowed;
    }

    @media (max-width: 650px) {
        width: 89%;
    }
`,bd=h.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;function ar({query:e,onclick:t}){const{t:o}=U(),[n,a]=d.useState([]),[s,l]=d.useState(""),[u,c]=d.useState(0),[p,m]=d.useState(!0),[v,S]=d.useState(!1),[g,f]=d.useState(!1),b=20;d.useEffect(()=>{(async()=>{const I=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(I.access_token)})()},[]),d.useEffect(()=>{a([]),c(0),m(!0)},[e]),d.useEffect(()=>{const w=async(C=!1)=>{if(s){C?f(!0):S(!0);try{let x;const T=C?u:0;if(e?x=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${b}&offset=${T}`,{headers:{Authorization:`Bearer ${s}`}}):x=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${T}&limit=${b}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!x.ok){const z=await x.text();throw new Error(`Erro na API: ${z}`)}const I=await x.json(),E=I.albums.items.filter(z=>z!=null).map(z=>{var A,L;return{id:z.id,title:z.name,artist:(A=z.artists)==null?void 0:A.map(H=>H.name).join(", "),cover:(L=z.images[0])==null?void 0:L.url}});a(C?z=>[...z,...E]:E);const _=I.albums.total,M=C?n.length+E.length:E.length;m(M<_&&E.length===b)}catch(x){console.error(x)}finally{S(!1),f(!1)}}};s&&(n.length===0||u===0)&&w(!1)},[e,s]);const y=async()=>{if(!s||!p||g)return;const w=u+b;c(w);try{f(!0);let C;if(e?C=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${b}&offset=${w}`,{headers:{Authorization:`Bearer ${s}`}}):C=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${w}&limit=${b}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!C.ok){const _=await C.text();throw new Error(`Erro na API: ${_}`)}const x=await C.json(),I=x.albums.items.filter(_=>_!=null).map(_=>{var M,z;return{id:_.id,title:_.name,artist:(M=_.artists)==null?void 0:M.map(A=>A.name).join(", "),cover:(z=_.images[0])==null?void 0:z.url}});a(_=>[..._,...I]);const j=x.albums.total,E=n.length+I.length;m(E<j&&I.length===b)}catch(C){console.error(C)}finally{f(!1)}};return r.jsx(r.Fragment,{children:v&&n.length===0?r.jsx(ln,{}):r.jsxs(r.Fragment,{children:[r.jsx(xd,{children:n.map((w,C)=>r.jsx(gd,{onClick:()=>t(w.id),cover:w.cover,title:w.title,artist:w.artist,id:w.id,animationDelay:C-u*100},w.id))}),p&&r.jsx(bd,{children:r.jsx(vd,{onClick:y,disabled:g,children:o(g?"LoadingMore":"LoadMore")})})]})})}const yd=({onBack:e})=>{const[t,o]=d.useState(""),[n,a]=d.useState(null),[s,l]=d.useState(!1),[u,c]=d.useState(null),[p,m]=d.useState(null),v=d.useRef(null);d.useEffect(()=>{s&&n&&v.current&&setTimeout(()=>{v.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[s,n]);function S(b){a(b),l(!0),c(null),m(null)}function g(){a(null),l(!1),c(null),m(null),e&&e()}const f=b=>{o(b)};return n&&u&&p?r.jsx(no,{albumID:n,handleClickBack:g,model:u,modelParams:p,source:"search_creation"}):n&&s?r.jsx("div",{ref:v,children:r.jsx(rd,{onSelectModel:(b,y)=>{c(b),m(y),l(!1)},onBack:g})}):r.jsxs(r.Fragment,{children:[r.jsx(dd,{onSearch:f,value:t}),t.trim()?r.jsx(ar,{query:t,onclick:S}):r.jsx("div",{children:r.jsx(ar,{onclick:S})})]})};function wd({loadingComplete:e}){const{t}=U(),[o,n]=d.useState(null),a=d.useRef(null),s=u=>{Za(u.albumName||"Unknown Album",u.artistsName||"Unknown Artist",u.albumID||"","album_collection"),n(u),setTimeout(()=>{if(a.current){const c=a.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:c,behavior:"smooth"})}},100)},l=()=>{n(null)};return r.jsxs(r.Fragment,{children:[r.jsx(Kl,{showAnimation:e,onRecreate:s}),r.jsx(Le,{text:t("anchorArt"),type:1}),r.jsx(qt,{title:t("ArtTitle"),paragraph:t("ArtParagraph")}),o?r.jsx(no,{ref:a,albumID:o.albumID,initialPosterJson:o,handleClickBack:l}):r.jsx(yd,{}),r.jsx(Ic,{}),r.jsx(wc,{}),r.jsx(mc,{}),r.jsx(Dc,{})]})}function bn(e){return O({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const sr=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,lr=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,cr=h.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,Cd=h.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,Sd=h.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,dr=h.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    color: var(--textColor);
    border: 1px solid var(--textColor);
    border-radius: 10px;
    padding: 8px 20px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.95em;
    transition: all 0.3s ease;
    min-width: 450px;
    margin-bottom: 0;

    &:hover {
        background-color: var(--AccentColor);
        border-color: var(--AccentColor);
    }

    @media (max-width: 500px) {
        min-width: 0px;
        width: 90%;
    }
`,ur=h.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,kd=h(Qr)`
    width: 20px;
    height: 20px;
`,Td=h(bn)`
    width: 20px;
    height: 20px;
`,jd=h.div`
    display: flex;
    gap: 15px;
    width: 100%;
    margin-block: 2px;
    justify-content: center;
    align-items: center;
    min-width: 450px;
    max-width: 450px;

    @media (max-width: 500px) {
        min-width: 0px;
        width: 90%;
    }
`,hr=h.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,Id=h.p`
    color: var(--textColor);
`;h.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;const Ed=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,_d=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Rd=h.div`
    display: flex;
    margin-right: 200px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.025);
    }

    @media (max-width: 1125px) {
        margin-right: 150px;
    }

    @media (max-width: 900px) {
        margin-right: 70px;
    }

    @media (max-width: 750px) {
        display: none;
    }
`,zd=h.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function Md(){const{t:e}=U(),t=ue(),[o]=_a(),{user:n,loading:a,loginWithGoogle:s,loginWithSpotify:l}=Ae();if(d.useEffect(()=>{if(!a){if(n){t("/dashboard");return}o.get("login")==="success"&&t("/dashboard")}},[n,a,t,o]),a)return r.jsxs(sr,{children:[r.jsx(Ze,{iconColor:"var(--AccentColor)"}),r.jsxs(lr,{children:[r.jsx(re,{fill:"var(--textColor)",width:"100px"}),r.jsx(cr,{children:e("Loading")})]})]});const u=()=>{t("/")};return r.jsxs(sr,{children:[r.jsx(Ze,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),r.jsx(lr,{children:r.jsxs(Ed,{children:[r.jsx(Rd,{onClick:u,children:r.jsx(re,{fill:"var(--textColor)",width:"25vw"})}),r.jsxs(_d,{children:[r.jsx(zd,{children:r.jsx(re,{fill:"var(--textColor)",width:"90px"})}),r.jsx(cr,{children:e("LOGIN_Welcome")}),r.jsx(Cd,{children:e("LOGIN_JoinCommunity")}),r.jsxs(Sd,{children:[r.jsxs(dr,{onClick:s,children:[r.jsx(kd,{}),r.jsx(ur,{children:e("LOGIN_GoogleSignIn")})]}),r.jsxs(jd,{children:[r.jsx(hr,{}),r.jsx(Id,{children:e("LOGIN_Or")}),r.jsx(hr,{})]}),r.jsxs(dr,{onClick:l,children:[r.jsx(Td,{}),r.jsx(ur,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function Ad(e){return O({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const Ld=B`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,Od=B`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,Pd=B`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Hd=B`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,$d=h.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    z-index: 1000;
    animation: ${e=>e.isClosing?Hd:Pd} 0.3s ease-in-out forwards;
`,Dd=h.div`
    background-color: var(--backgroundColor);
    width: 35%;
    min-width: 300px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${e=>e.isClosing?Od:Ld} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,Fd=h.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Bd=h.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Nd=h(Wr)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Ud=h.div`
    background-color: var(--glassBackground);
    width: 30px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    &:hover {
        background-color: var(--AccentColor);
    }
`,Vd=h.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,Wd=h.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,qd=h.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,pr=h.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,fr=h.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,mr=h.input`
    padding: 12px 15px;
    border: 2px solid var(--textColor);
    border-radius: 8px;
    background-color: var(--backgroundColor);
    color: var(--textColor);
    font-size: 1em;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--AccentColor);
    }

    &::placeholder {
        color: var(--textColor);
        opacity: 0.5;
    }
`,Rt=h.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`,Gd=h.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,Yd=h.button`
    background: transparent;
    border: 2px solid var(--textColor);
    color: var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.9em;
    transition: all 0.3s ease;

    &:hover {
        background: var(--textColor);
        color: var(--backgroundColor);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,Qd=h.button`
    background: var(--textColor);
    border: none;
    color: var(--backgroundColor);
    border: 2px solid var(--textColor);
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.9em;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--AccentColor);
        border: 2px solid var(--AccentColor);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,Zd=h.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function Xd({isOpen:e,onClose:t,onProfileUpdate:o}){const{user:n,updateUser:a}=Ae(),{t:s}=U(),[l,u]=d.useState({name:"",username:""}),[c,p]=d.useState({}),[m,v]=d.useState(!1),[S,g]=d.useState(""),[f,b]=d.useState(!1);d.useEffect(()=>{n&&u({name:n.name||"",username:n.username||""})},[n]);const y=()=>{const T={};return l.name.trim()||(T.name=s("NameIsRequired")),l.username.trim()?l.username.length<3?T.username=s("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(l.username)||(T.username=s("UsernameFormat")):T.username=s("UsernameIsRequired"),p(T),Object.keys(T).length===0},w=T=>{const{name:I,value:j}=T.target;u(E=>({...E,[I]:j})),c[I]&&p(E=>({...E,[I]:""})),S&&g("")},C=async T=>{var I,j,E,_;if(T.preventDefault(),!!y()){v(!0),g("");try{await J.updateUserProfile({name:l.name.trim(),username:l.username.trim()}),a({...n,name:l.name.trim(),username:l.username.trim()}),g(s("ProfileUpdatedSuccessfully")),o&&o(),setTimeout(()=>{x()},1500)}catch(M){console.error("Profile update failed:",M),(I=M.message)!=null&&I.includes("409")||(j=M.message)!=null&&j.includes("taken")?p({username:s("UsernameTaken")}):(E=M.message)!=null&&E.includes("400")||(_=M.message)!=null&&_.includes("invalid")?p({username:s("InvalidUsernameFormat")}):p({general:s("FailedToUpdateProfile")})}finally{v(!1)}}},x=()=>{b(!0),setTimeout(()=>{b(!1),t(),p({}),g("")},300)};return e?(document.body.style.overflow="hidden",r.jsx($d,{isClosing:f,children:r.jsxs(Dd,{isClosing:f,children:[r.jsxs(Fd,{children:[r.jsx(Vd,{children:r.jsx(re,{width:25,height:25,fill:"var(--textColor)"})}),r.jsx(Bd,{children:s("EditProfile")}),r.jsx(Ud,{onClick:x,children:r.jsx(Nd,{})})]}),r.jsx(Wd,{}),r.jsxs(qd,{onSubmit:C,children:[r.jsxs(pr,{children:[r.jsx(fr,{htmlFor:"name",children:s("Name")}),r.jsx(mr,{type:"text",id:"name",name:"name",value:l.name,onChange:w,placeholder:s("EnterYourName"),disabled:m}),c.name&&r.jsx(Rt,{children:c.name})]}),r.jsxs(pr,{children:[r.jsx(fr,{htmlFor:"username",children:s("Username")}),r.jsx(mr,{type:"text",id:"username",name:"username",value:l.username,onChange:w,placeholder:s("EnterYourUsername"),disabled:m}),c.username&&r.jsx(Rt,{children:c.username})]}),c.general&&r.jsx(Rt,{children:c.general}),S&&r.jsx(Zd,{children:S}),r.jsxs(Gd,{children:[r.jsx(Yd,{type:"button",onClick:x,disabled:m,children:s("Cancel")}),r.jsx(Qd,{type:"submit",disabled:m,children:s(m?"Saving":"SaveChanges")})]})]})]})})):null}B`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;B`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5px);
  }
`;h.div`
  display: none;
`;const yn=h.div`
  position: fixed;
  background-color: var(--textColor);
  color: var(--backgroundColor);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.85em;
  font-weight: 600;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${e=>e.isVisible&&`
    opacity: 1;
  `}

  &::before {
    content: '';
    position: absolute;
    right: 99%;
    top: 50%;
    transform: translateY(-50%);
    border: 12px solid transparent;
    border-right-color: var(--textColor);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 6px 10px;
  }
`,Jd=h.div`
  position: relative;
  display: inline-block;
  &:hover ${yn} {
    opacity: 0.9;
  }
`;function gr({text:e,children:t,delay:o=0}){const[n,a]=d.useState(!1),[s,l]=d.useState({top:0,left:0}),u=p=>{const m=p.currentTarget.getBoundingClientRect();l({top:m.top+m.height/2-17,left:m.right+15}),a(!0)},c=()=>{a(!1)};return r.jsxs(Jd,{onMouseEnter:u,onMouseLeave:c,children:[r.jsx(yn,{isVisible:n,style:{top:s.top,left:s.left},children:e}),t]})}const Kd=h.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,eu=h.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,tu=h.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,ou=h.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,ru=h.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,nu=h.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`,xr=h.button`
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.85em;
    transition: all 0.3s ease;
    width: 120px;
    height: 30px;
    margin-left: 10px;

    &:hover {
        background-color: var(--textColor);
    }
`,vr=h.button`
    background-color: var(--textColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 0.85em;
    transition: all 0.3s ease;
    width: 120px;
    height: 30px;
    margin-left: auto;

    &:hover {
        background-color: var(--AccentColor);
    }
`;h.p`
    color: var(--textColor);
    font-size: 1.2em;
`;const iu=h(Qr)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,au=h(bn)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,br=h.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,su=h.div`
    display: flex;
    align-items: center;
    width: 100%;
`,lu=h(Ad)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,cu=h.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,du=h.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,uu=h.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function hu(){const e=ue(),{user:t,loading:o,logout:n,isAuthenticated:a}=Ae(),[s,l]=d.useState(null),[u,c]=d.useState(!1),{t:p}=U();d.useEffect(()=>{if(!o&&!a){e("/login");return}a&&t&&m()},[a,o,e,t]);const m=async()=>{try{const b=await J.getUserProfile();l(b.user)}catch(b){console.error("Failed to fetch user profile:",b)}},v=async()=>{await n(),e("/login")},S=()=>{c(!0)},g=()=>{c(!1)},f=()=>{m()};return o?r.jsx(Vt,{isVisible:!0,initialFade:!0}):t?r.jsxs(Kd,{children:[r.jsx(Ze,{iconColor:"var(--AccentColor)"}),r.jsxs(eu,{children:[(s==null?void 0:s.avatar)&&r.jsx(ou,{src:s.avatar,alt:s.name}),r.jsxs(tu,{children:[r.jsxs(su,{children:[r.jsx(ru,{children:(s==null?void 0:s.name)||t.name}),(s==null?void 0:s.hasGoogle)&&r.jsx(gr,{text:p("ConnectedToGoogle"),delay:200,children:r.jsx(br,{children:r.jsx(iu,{})})}),(s==null?void 0:s.hasSpotify)&&r.jsx(gr,{text:p("ConnectedToSpotify"),delay:200,children:r.jsx(br,{children:r.jsx(au,{})})}),r.jsxs(du,{children:[r.jsx(vr,{onClick:S,children:p("EditProfile")}),r.jsx(xr,{onClick:v,children:p("Logout")})]})]}),r.jsxs(nu,{children:["@",(s==null?void 0:s.username)||t.username]})]})]}),r.jsxs(uu,{children:[r.jsx(vr,{onClick:S,children:p("EditProfile")}),r.jsx(xr,{onClick:v,children:p("Logout")})]}),r.jsx(lu,{}),r.jsx(cu,{children:p("NoActivityYet")}),r.jsx(Xd,{isOpen:u,onClose:g,onProfileUpdate:f})]}):null}const pu=({width:e,height:t,fillHeart:o,fillQuestion:n,pulse:a=!1,onClick:s})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[r.jsx("path",{fill:o,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),r.jsx("path",{fill:n,style:{animation:a?"pulse 2s infinite":"none",cursor:a?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),wn=document.createElement("style");wn.textContent=`
    @keyframes pulse {
        0% {
            transform: scale(1);
            fill: var(--textColor);
        }
        50% {
            transform: scale(1.1) translateY(-14px) translateX(-14px);
            fill: var(--AccentColor);
        }
        100% {
            transform: scale(1);
            fill: var(--textColor);
        }
    }
`;document.head.appendChild(wn);const fu="/assets/kanye-BMPu-Gq3.png",mu="/assets/runaway-DjODmQSR.mp3",gu=()=>{const e=ue(),{t}=U(),[o,n]=d.useState(0),a=d.useRef(null),[s,l]=d.useState(!1),u=()=>{n(o+1),console.log(o)},c=()=>{a.current&&(a.current.loop=!0,a.current.paused?(a.current.play(),l(!0)):(a.current.pause(),l(!1)))};return r.jsxs(xu,{playing:s,children:[r.jsx(pu,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!0,onClick:u}),r.jsxs(Cu,{children:[r.jsx(zt,{playing:s,active:o>=1}),r.jsx(zt,{playing:s,active:o>=2}),r.jsx(zt,{playing:s,active:o>=3})]}),r.jsx(vu,{children:t("errorTitle")}),r.jsx(bu,{children:t("errorMessage")}),r.jsx(yu,{playing:s,onClick:()=>e("/"),children:t("errorBackToHome")}),o>=3&&r.jsxs(r.Fragment,{children:[r.jsx(wu,{src:fu,alt:"Kanye",onClick:c}),r.jsx("audio",{ref:a,src:mu})]})]})},xu=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,vu=h.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,bu=h.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,yu=h.button`
  padding: 10px 20px;
  font-size: 1em;
  color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  background-color: ${e=>e.playing?"#edcd6b":"var(--textColor)"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  font-weight: bolder;
  border-radius: 50px;

  &:hover {
    background-color: var(--AccentColor);
  }
`,wu=h.img`
  width: 200px;
  height: auto;
  margin-top: 20px;
  position: fixed;
  transform: rotate(-25deg) translate(200%, 200%);
  bottom: -50px;
  right: -50px;
  cursor: pointer;
  animation: slideIn 1s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: rotate(-25deg) translate(200%, 200%);
    }
    to {
      transform: rotate(-25deg) translate(0, 0);
    }
  }
`,Cu=h.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,zt=h.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Su=({children:e})=>{const t=ue(),{isAuthenticated:o,loading:n}=Ae();return d.useEffect(()=>{!n&&!o&&t("/login")},[o,n,t]),n?r.jsx("div",{children:"Loading..."}):o?e:null},ku=()=>(d.useEffect(()=>{Va()},[]),null),yr=e=>{if(!e)return"";const o=(e.replace(/\/$/,"")||"/").split("/");return o.length>2&&(o[2]=o[2].toLowerCase()),o.join("/")},ao=()=>"https://posterfy.space"+"/",Tu=e=>{const t=ao(),o=yr(e),n=yr(t),a=e.includes("://www."),s=e.startsWith("http://");return a||s||o!==n},ju=()=>{const e=window.location.href,t=ao(),o=[];return Tu(e)&&o.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:o.length===0,issues:o,currentUrl:e,canonicalUrl:t}},Iu=()=>(d.useEffect(()=>{setTimeout(()=>{const o=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&o.push("Missing canonical URL");const a=document.querySelector('meta[name="description"]');(!a||a.content.length<120)&&o.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&o.push("Title too short or missing");const s=ju();s.isValid||s.issues.forEach(c=>{o.push(`${c.type}: ${c.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&o.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||o.push("Missing structured data"),o},1e3),(()=>{const o=window.location.href;o.includes("www.")||o.startsWith("http://")})()},[]),null),Eu=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:o="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(d.useEffect(()=>{const a="https://posterfy.space",s=ao(),l=a+"/albuns.png";document.title=e;const u=document.querySelector('meta[name="description"]');u&&u.setAttribute("content",t);const c=document.querySelector('meta[name="keywords"]');c&&c.setAttribute("content",o);let p=document.querySelector('link[rel="canonical"]');p?p.setAttribute("href",s):(p=document.createElement("link"),p.setAttribute("rel","canonical"),p.setAttribute("href",s),document.head.appendChild(p));const m=document.querySelector('meta[property="og:title"]');m&&m.setAttribute("content",e);const v=document.querySelector('meta[property="og:description"]');v&&v.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",l);const g=document.querySelector('meta[property="og:url"]');g&&g.setAttribute("content",s);const f=document.querySelector('meta[name="twitter:title"]');f&&f.setAttribute("content",e);const b=document.querySelector('meta[name="twitter:description"]');b&&b.setAttribute("content",t);const y=document.querySelector('meta[name="twitter:image"]');y&&y.setAttribute("content",l);const w={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:a+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},C=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');C&&C.remove();const x=document.createElement("script");x.type="application/ld+json",x.id="dynamic-structured-data",x.innerHTML=JSON.stringify(w),document.head.appendChild(x)},[e,t,o]),null);var _u="1.3.14";function Cn(e,t,o){return Math.max(e,Math.min(t,o))}function Ru(e,t,o){return(1-o)*e+o*t}function zu(e,t,o,n){return Ru(e,t,1-Math.exp(-o*n))}function Mu(e,t){return(e%t+t)%t}var Au=class{constructor(){R(this,"isRunning",!1);R(this,"value",0);R(this,"from",0);R(this,"to",0);R(this,"currentTime",0);R(this,"lerp");R(this,"duration");R(this,"easing");R(this,"onUpdate")}advance(e){var o;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=Cn(0,this.currentTime/this.duration,1);t=n>=1;const a=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=zu(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(o=this.onUpdate)==null||o.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:o,duration:n,easing:a,onStart:s,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=o,this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=l}};function Lu(e,t){let o;return function(...n){let a=this;clearTimeout(o),o=setTimeout(()=>{o=void 0,e.apply(a,n)},t)}}var Ou=class{constructor(e,t,{autoResize:o=!0,debounce:n=250}={}){R(this,"width",0);R(this,"height",0);R(this,"scrollHeight",0);R(this,"scrollWidth",0);R(this,"debouncedResize");R(this,"wrapperResizeObserver");R(this,"contentResizeObserver");R(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});R(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});R(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,o&&(this.debouncedResize=Lu(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Sn=class{constructor(){R(this,"events",{})}emit(e,...t){var n;let o=this.events[e]||[];for(let a=0,s=o.length;a<s;a++)(n=o[a])==null||n.call(o,...t)}on(e,t){var o;return(o=this.events[e])!=null&&o.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(a=>t!==a)}}off(e,t){var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(n=>t!==n)}destroy(){this.events={}}},wr=100/6,se={passive:!1},Pu=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){R(this,"touchStart",{x:0,y:0});R(this,"lastDelta",{x:0,y:0});R(this,"window",{width:0,height:0});R(this,"emitter",new Sn);R(this,"onTouchStart",e=>{const{clientX:t,clientY:o}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=o,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});R(this,"onTouchMove",e=>{const{clientX:t,clientY:o}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,a=-(o-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=o,this.lastDelta={x:n,y:a},this.emitter.emit("scroll",{deltaX:n,deltaY:a,event:e})});R(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});R(this,"onWheel",e=>{let{deltaX:t,deltaY:o,deltaMode:n}=e;const a=n===1?wr:n===2?this.window.width:1,s=n===1?wr:n===2?this.window.height:1;t*=a,o*=s,t*=this.options.wheelMultiplier,o*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:o,event:e})});R(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,se),this.element.addEventListener("touchstart",this.onTouchStart,se),this.element.addEventListener("touchmove",this.onTouchMove,se),this.element.addEventListener("touchend",this.onTouchEnd,se)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,se),this.element.removeEventListener("touchstart",this.onTouchStart,se),this.element.removeEventListener("touchmove",this.onTouchMove,se),this.element.removeEventListener("touchend",this.onTouchEnd,se)}},Cr=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Hu=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:o=e,smoothWheel:n=!0,syncTouch:a=!1,syncTouchLerp:s=.075,touchInertiaExponent:l=1.7,duration:u,easing:c,lerp:p=.1,infinite:m=!1,orientation:v="vertical",gestureOrientation:S=v==="horizontal"?"both":"vertical",touchMultiplier:g=1,wheelMultiplier:f=1,autoResize:b=!0,prevent:y,virtualScroll:w,overscroll:C=!0,autoRaf:x=!1,anchors:T=!1,autoToggle:I=!1,allowNestedScroll:j=!1,__experimental__naiveDimensions:E=!1}={}){R(this,"_isScrolling",!1);R(this,"_isStopped",!1);R(this,"_isLocked",!1);R(this,"_preventNextNativeScrollEvent",!1);R(this,"_resetVelocityTimeout",null);R(this,"__rafID",null);R(this,"isTouching");R(this,"time",0);R(this,"userData",{});R(this,"lastVelocity",0);R(this,"velocity",0);R(this,"direction",0);R(this,"options");R(this,"targetScroll");R(this,"animatedScroll");R(this,"animate",new Au);R(this,"emitter",new Sn);R(this,"dimensions");R(this,"virtualScroll");R(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});R(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});R(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",o=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(o)?this.internalStop():this.internalStart()}});R(this,"onClick",e=>{const o=e.composedPath().find(n=>{var a;return n instanceof HTMLAnchorElement&&((a=n.getAttribute("href"))==null?void 0:a.includes("#"))});if(o){const n=o.getAttribute("href");if(n){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,a)}}});R(this,"onPointerDown",e=>{e.button===1&&this.reset()});R(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:o,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:o,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const a=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=t===0&&o===0;if(this.options.syncTouch&&a&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&o===0||this.options.gestureOrientation==="horizontal"&&t===0;if(l||c)return;let p=n.composedPath();p=p.slice(0,p.indexOf(this.rootElement));const m=this.options.prevent;if(p.find(y=>{var w,C,x;return y instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(y))||((w=y.hasAttribute)==null?void 0:w.call(y,"data-lenis-prevent"))||a&&((C=y.hasAttribute)==null?void 0:C.call(y,"data-lenis-prevent-touch"))||s&&((x=y.hasAttribute)==null?void 0:x.call(y,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(y,{deltaX:t,deltaY:o}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=o;this.options.gestureOrientation==="both"?S=Math.abs(o)>Math.abs(t)?o:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&o>0||this.animatedScroll===this.limit&&o<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const g=a&&this.options.syncTouch,b=a&&n.type==="touchend";b&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...g?{lerp:b?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});R(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});R(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=_u,(!e||e===document.documentElement)&&(e=window),typeof u=="number"&&typeof c!="function"?c=Cr:typeof c=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:e,content:t,eventsTarget:o,smoothWheel:n,syncTouch:a,syncTouchLerp:s,touchInertiaExponent:l,duration:u,easing:c,lerp:p,infinite:m,gestureOrientation:S,orientation:v,touchMultiplier:g,wheelMultiplier:f,autoResize:b,prevent:y,virtualScroll:w,overscroll:C,autoRaf:x,anchors:T,autoToggle:I,allowNestedScroll:j,__experimental__naiveDimensions:E},this.dimensions=new Ou(e,t,{autoResize:b}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Pu(o,{touchMultiplier:g,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:o=!1,lock:n=!1,duration:a=this.options.duration,easing:s=this.options.easing,lerp:l=this.options.lerp,onStart:u,onComplete:c,force:p=!1,programmatic:m=!0,userData:v}={}){if(!((this.isStopped||this.isLocked)&&!p)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const f=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?f.left:f.top}const g=S.getBoundingClientRect();e=(this.isHorizontal?g.left:g.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(m){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=Cn(0,e,this.limit);if(e===this.targetScroll){u==null||u(this),c==null||c(this);return}if(this.userData=v??{},o){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}m||(this.targetScroll=e),typeof a=="number"&&typeof s!="function"?s=Cr:typeof s=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,e,{duration:a,easing:s,lerp:l,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",u==null||u(this)},onUpdate:(S,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),m&&(this.targetScroll=S),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:o}){const n=Date.now(),a=e._lenis??(e._lenis={});let s,l,u,c,p,m,v,S;const g=this.options.gestureOrientation;if(n-(a.time??0)>2e3){a.time=Date.now();const I=window.getComputedStyle(e);a.computedStyle=I;const j=I.overflowX,E=I.overflowY;if(s=["auto","overlay","scroll"].includes(j),l=["auto","overlay","scroll"].includes(E),a.hasOverflowX=s,a.hasOverflowY=l,!s&&!l||g==="vertical"&&!l||g==="horizontal"&&!s)return!1;p=e.scrollWidth,m=e.scrollHeight,v=e.clientWidth,S=e.clientHeight,u=p>v,c=m>S,a.isScrollableX=u,a.isScrollableY=c,a.scrollWidth=p,a.scrollHeight=m,a.clientWidth=v,a.clientHeight=S}else u=a.isScrollableX,c=a.isScrollableY,s=a.hasOverflowX,l=a.hasOverflowY,p=a.scrollWidth,m=a.scrollHeight,v=a.clientWidth,S=a.clientHeight;if(!s&&!l||!u&&!c||g==="vertical"&&(!l||!c)||g==="horizontal"&&(!s||!u))return!1;let f;if(g==="horizontal")f="x";else if(g==="vertical")f="y";else{const I=t!==0,j=o!==0;I&&s&&u&&(f="x"),j&&l&&c&&(f="y")}if(!f)return!1;let b,y,w,C,x;if(f==="x")b=e.scrollLeft,y=p-v,w=t,C=s,x=u;else if(f==="y")b=e.scrollTop,y=m-S,w=o,C=l,x=c;else return!1;return(w>0?b<y:b>0)&&C&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Mu(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function $u(){const{pathname:e}=ie(),[t,o]=d.useState(!1),[n,a]=d.useState(!1);return d.useEffect(()=>{o(!0),a(!0),window.scrollTo(0,0);const s=setTimeout(()=>{o(!1),setTimeout(()=>{a(!1)},300)},2e3);return()=>clearTimeout(s)},[e]),n?r.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:r.jsx(Vt,{isVisible:!0})}):null}function Du(){const[e,t]=d.useState(!0),[o,n]=d.useState(!1);return Xa(),d.useEffect(()=>{const a=new Hu({duration:1.2,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function s(l){a.raf(l),requestAnimationFrame(s)}return requestAnimationFrame(s),()=>{a.destroy()}},[]),d.useEffect(()=>Ha(),[]),d.useEffect(()=>{const a=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(a)},[]),d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),r.jsx($a,{children:r.jsx(xs,{children:r.jsxs(ws,{children:[r.jsx(Eu,{}),r.jsx(Iu,{}),r.jsx(ku,{}),r.jsxs(ka,{children:[r.jsx($u,{}),r.jsxs(ea,{children:["              ",r.jsx(le,{path:"/",element:r.jsx(It,{showNavbar:!0,showFooter:!0}),children:r.jsx(le,{index:!0,element:r.jsx(wd,{loadingComplete:o})})}),r.jsx(le,{path:"/login",element:r.jsx(It,{showNavbar:!1,showFooter:!1}),children:r.jsx(le,{index:!0,element:r.jsx(Md,{})})}),r.jsx(le,{path:"/dashboard",element:r.jsx(It,{showNavbar:!0,showFooter:!0}),children:r.jsx(le,{index:!0,element:r.jsx(Su,{children:r.jsx(hu,{})})})}),r.jsx(le,{path:"*",element:r.jsx(gu,{})})]})]}),r.jsx(Vt,{isVisible:e})]})})})}ei.use(ti).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",NoActivityYet:"No activity yet",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving..."}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando..."}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando..."}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中..."}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const o=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(o)?o:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Tr(document.getElementById("root")).render(r.jsx(d.StrictMode,{children:r.jsx(Du,{})}));
