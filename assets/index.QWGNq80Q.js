const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.eLSDR91f.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var _5=Object.defineProperty;var C5=(e,t,r)=>t in e?_5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Te=(e,t,r)=>C5(e,typeof t!="symbol"?t+"":t,r);import{r as k,a as zd,e as qr,c as S5,R as i2}from"./vendor.BGNHhJSV.js";import{m as It,d as _,G as et,l as Cs}from"./ui.C5ldsGQa.js";import{u as Lt,i as A5,a as k5}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var Bd={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M5=k,N5=Symbol.for("react.element"),j5=Symbol.for("react.fragment"),I5=Object.prototype.hasOwnProperty,L5=M5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P5={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,r){var n,o={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)I5.call(t,n)&&!P5.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:N5,type:e,key:s,ref:l,props:o,_owner:L5.current}}Jl.Fragment=j5;Jl.jsx=Ud;Jl.jsxs=Ud;Bd.exports=Jl;var a=Bd.exports,Hd,o2=zd;Hd=o2.createRoot,o2.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var a2="popstate";function T5(e={}){function t(n,o){let{pathname:s,search:l,hash:c}=n.location;return yc("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Ss(o)}return D5(t,r,null,e)}function tr(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E5(){return Math.random().toString(36).substring(2,10)}function s2(e,t){return{usr:e.state,key:e.key,idx:t}}function yc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ra(t):t,state:r,key:t&&t.key||n||E5()}}function Ss({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ra(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function D5(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:s=!1}=n,l=o.history,c="POP",d=null,f=p();f==null&&(f=0,l.replaceState({...l.state,idx:f},""));function p(){return(l.state||{idx:null}).idx}function v(){c="POP";let N=p(),C=N==null?null:N-f;f=N,d&&d({action:c,location:y.location,delta:C})}function A(N,C){c="PUSH";let L=yc(y.location,N,C);f=p()+1;let P=s2(L,f),D=y.createHref(L);try{l.pushState(P,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;o.location.assign(D)}s&&d&&d({action:c,location:y.location,delta:1})}function m(N,C){c="REPLACE";let L=yc(y.location,N,C);f=p();let P=s2(L,f),D=y.createHref(L);l.replaceState(P,"",D),s&&d&&d({action:c,location:y.location,delta:0})}function b(N){return R5(N)}let y={get action(){return c},get location(){return e(o,l)},listen(N){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(a2,v),d=N,()=>{o.removeEventListener(a2,v),d=null}},createHref(N){return t(o,N)},createURL:b,encodeLocation(N){let C=b(N);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:A,replace:m,go(N){return l.go(N)}};return y}function R5(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),tr(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Ss(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function $d(e,t,r="/"){return O5(e,t,r,!1)}function O5(e,t,r,n){let o=typeof t=="string"?Ra(t):t,s=Ui(o.pathname||"/",r);if(s==null)return null;let l=qd(e);F5(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let f=X5(s);c=G5(l[d],f,n)}return c}function qd(e,t=[],r=[],n="",o=!1){let s=(l,c,d=o,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&d)return;tr(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let v=zi([n,p.relativePath]),A=r.concat(p);l.children&&l.children.length>0&&(tr(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),qd(l.children,t,A,v,d)),!(l.path==null&&!l.index)&&t.push({path:v,score:V5(v,l.index),routesMeta:A})};return e.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let f of Vd(l.path))s(l,c,!0,f)}),t}function Vd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return o?[s,""]:[s];let l=Vd(n.join("/")),c=[];return c.push(...l.map(d=>d===""?s:[s,d].join("/"))),o&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function F5(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Y5(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var z5=/^:[\w-]+$/,B5=3,U5=2,H5=1,$5=10,q5=-2,l2=e=>e==="*";function V5(e,t){let r=e.split("/"),n=r.length;return r.some(l2)&&(n+=q5),t&&(n+=U5),r.filter(o=>!l2(o)).reduce((o,s)=>o+(z5.test(s)?B5:s===""?H5:$5),n)}function Y5(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function G5(e,t,r=!1){let{routesMeta:n}=e,o={},s="/",l=[];for(let c=0;c<n.length;++c){let d=n[c],f=c===n.length-1,p=s==="/"?t:t.slice(s.length)||"/",v=$l({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),A=d.route;if(!v&&f&&r&&!n[n.length-1].route.index&&(v=$l({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!v)return null;Object.assign(o,v.params),l.push({params:o,pathname:zi([s,v.pathname]),pathnameBase:Q5(zi([s,v.pathnameBase])),route:A}),v.pathnameBase!=="/"&&(s=zi([s,v.pathnameBase]))}return l}function $l(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=W5(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let s=o[0],l=s.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:v},A)=>{if(p==="*"){let b=c[A]||"";l=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const m=c[A];return v&&!m?f[p]=void 0:f[p]=(m||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:l,pattern:e}}function W5(e,t=!1,r=!0){Gn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function X5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ui(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Z5(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ra(e):e;return{pathname:r?r.startsWith("/")?r:J5(r,t):t,search:ep(n),hash:tp(o)}}function J5(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function I1(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function K5(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Yd(e){let t=K5(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Gd(e,t,r,n=!1){let o;typeof e=="string"?o=Ra(e):(o={...e},tr(!o.pathname||!o.pathname.includes("?"),I1("?","pathname","search",o)),tr(!o.pathname||!o.pathname.includes("#"),I1("#","pathname","hash",o)),tr(!o.search||!o.search.includes("#"),I1("#","search","hash",o)));let s=e===""||o.pathname==="",l=s?"/":o.pathname,c;if(l==null)c=r;else{let v=t.length-1;if(!n&&l.startsWith("..")){let A=l.split("/");for(;A[0]==="..";)A.shift(),v-=1;o.pathname=A.join("/")}c=v>=0?t[v]:"/"}let d=Z5(o,c),f=l&&l!=="/"&&l.endsWith("/"),p=(s||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var zi=e=>e.join("/").replace(/\/\/+/g,"/"),Q5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ep=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Wd=["POST","PUT","PATCH","DELETE"];new Set(Wd);var np=["GET",...Wd];new Set(np);var Oa=k.createContext(null);Oa.displayName="DataRouter";var Kl=k.createContext(null);Kl.displayName="DataRouterState";k.createContext(!1);var Xd=k.createContext({isTransitioning:!1});Xd.displayName="ViewTransition";var ip=k.createContext(new Map);ip.displayName="Fetchers";var op=k.createContext(null);op.displayName="Await";var xi=k.createContext(null);xi.displayName="Navigation";var Ls=k.createContext(null);Ls.displayName="Location";var Xn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Xn.displayName="Route";var qc=k.createContext(null);qc.displayName="RouteError";function ap(e,{relative:t}={}){tr(Ps(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=k.useContext(xi),{hash:o,pathname:s,search:l}=Ts(e,{relative:t}),c=s;return r!=="/"&&(c=s==="/"?r:zi([r,s])),n.createHref({pathname:c,search:l,hash:o})}function Ps(){return k.useContext(Ls)!=null}function vi(){return tr(Ps(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Ls).location}var Zd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Jd(e){k.useContext(xi).static||k.useLayoutEffect(e)}function Cn(){let{isDataRoute:e}=k.useContext(Xn);return e?yp():sp()}function sp(){tr(Ps(),"useNavigate() may be used only in the context of a <Router> component.");let e=k.useContext(Oa),{basename:t,navigator:r}=k.useContext(xi),{matches:n}=k.useContext(Xn),{pathname:o}=vi(),s=JSON.stringify(Yd(n)),l=k.useRef(!1);return Jd(()=>{l.current=!0}),k.useCallback((d,f={})=>{if(Gn(l.current,Zd),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=Gd(d,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:zi([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,s,o,e])}var lp=k.createContext(null);function cp(e){let t=k.useContext(Xn).outlet;return t&&k.createElement(lp.Provider,{value:e},t)}function Kd(){let{matches:e}=k.useContext(Xn),t=e[e.length-1];return t?t.params:{}}function Ts(e,{relative:t}={}){let{matches:r}=k.useContext(Xn),{pathname:n}=vi(),o=JSON.stringify(Yd(r));return k.useMemo(()=>Gd(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function up(e,t){return Qd(e,t)}function Qd(e,t,r,n,o){var L;tr(Ps(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=k.useContext(xi),{matches:l}=k.useContext(Xn),c=l[l.length-1],d=c?c.params:{},f=c?c.pathname:"/",p=c?c.pathnameBase:"/",v=c&&c.route;{let P=v&&v.path||"";eh(f,!v||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let A=vi(),m;if(t){let P=typeof t=="string"?Ra(t):t;tr(p==="/"||((L=P.pathname)==null?void 0:L.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${P.pathname}" was given in the \`location\` prop.`),m=P}else m=A;let b=m.pathname||"/",y=b;if(p!=="/"){let P=p.replace(/^\//,"").split("/");y="/"+b.replace(/^\//,"").split("/").slice(P.length).join("/")}let N=$d(e,{pathname:y});Gn(v||N!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Gn(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=mp(N&&N.map(P=>Object.assign({},P,{params:Object.assign({},d,P.params),pathname:zi([p,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?p:zi([p,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,r,n,o);return t&&C?k.createElement(Ls.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},C):C}function dp(){let e=wp(),t=rp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:s},"ErrorBoundary")," or"," ",k.createElement("code",{style:s},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.createElement("pre",{style:o},r):null,l)}var hp=k.createElement(dp,null),fp=class extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?k.createElement(Xn.Provider,{value:this.props.routeContext},k.createElement(qc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pp({routeContext:e,match:t,children:r}){let n=k.useContext(Oa);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(Xn.Provider,{value:e},r)}function mp(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=r==null?void 0:r.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);tr(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,d=-1;if(r)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:v,errors:A}=r,m=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!A||A[p.route.id]===void 0);if(p.route.lazy||m){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,p,v)=>{let A,m=!1,b=null,y=null;r&&(A=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||hp,c&&(d<0&&v===0?(eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,y=null):d===v&&(m=!0,y=p.route.hydrateFallbackElement||null)));let N=t.concat(s.slice(0,v+1)),C=()=>{let L;return A?L=b:m?L=y:p.route.Component?L=k.createElement(p.route.Component,null):p.route.element?L=p.route.element:L=f,k.createElement(pp,{match:p,routeContext:{outlet:f,matches:N,isDataRoute:r!=null},children:L})};return r&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?k.createElement(fp,{location:r.location,revalidation:r.revalidation,component:b,error:A,children:C(),routeContext:{outlet:null,matches:N,isDataRoute:!0},unstable_onError:n}):C()},null)}function Vc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gp(e){let t=k.useContext(Oa);return tr(t,Vc(e)),t}function xp(e){let t=k.useContext(Kl);return tr(t,Vc(e)),t}function vp(e){let t=k.useContext(Xn);return tr(t,Vc(e)),t}function Yc(e){let t=vp(e),r=t.matches[t.matches.length-1];return tr(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function bp(){return Yc("useRouteId")}function wp(){var n;let e=k.useContext(qc),t=xp("useRouteError"),r=Yc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function yp(){let{router:e}=gp("useNavigate"),t=Yc("useNavigate"),r=k.useRef(!1);return Jd(()=>{r.current=!0}),k.useCallback(async(o,s={})=>{Gn(r.current,Zd),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...s}))},[e,t])}var c2={};function eh(e,t,r){!t&&!c2[e]&&(c2[e]=!0,Gn(!1,r))}k.memo(_p);function _p({routes:e,future:t,state:r,unstable_onError:n}){return Qd(e,void 0,r,n,t)}function Cp(e){return cp(e.context)}function wn(e){tr(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Sp({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:s=!1}){tr(!Ps(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:o,static:s,future:{}}),[l,o,s]);typeof r=="string"&&(r=Ra(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:A="default"}=r,m=k.useMemo(()=>{let b=Ui(d,l);return b==null?null:{location:{pathname:b,search:f,hash:p,state:v,key:A},navigationType:n}},[l,d,f,p,v,A,n]);return Gn(m!=null,`<Router basename="${l}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:k.createElement(xi.Provider,{value:c},k.createElement(Ls.Provider,{children:t,value:m}))}function Ap({children:e,location:t}){return up(_c(e),t)}function _c(e,t=[]){let r=[];return k.Children.forEach(e,(n,o)=>{if(!k.isValidElement(n))return;let s=[...t,o];if(n.type===k.Fragment){r.push.apply(r,_c(n.props.children,s));return}tr(n.type===wn,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tr(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=_c(n.props.children,s)),r.push(l)}),r}var Pl="get",Tl="application/x-www-form-urlencoded";function Ql(e){return e!=null&&typeof e.tagName=="string"}function kp(e){return Ql(e)&&e.tagName.toLowerCase()==="button"}function Mp(e){return Ql(e)&&e.tagName.toLowerCase()==="form"}function Np(e){return Ql(e)&&e.tagName.toLowerCase()==="input"}function jp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ip(e,t){return e.button===0&&(!t||t==="_self")&&!jp(e)}function Cc(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function Lp(e,t){let r=Cc(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(s=>{r.append(o,s)})}),r}var nl=null;function Pp(){if(nl===null)try{new FormData(document.createElement("form"),0),nl=!1}catch{nl=!0}return nl}var Tp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function L1(e){return e!=null&&!Tp.has(e)?(Gn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tl}"`),null):e}function Ep(e,t){let r,n,o,s,l;if(Mp(e)){let c=e.getAttribute("action");n=c?Ui(c,t):null,r=e.getAttribute("method")||Pl,o=L1(e.getAttribute("enctype"))||Tl,s=new FormData(e)}else if(kp(e)||Np(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(n=d?Ui(d,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||Pl,o=L1(e.getAttribute("formenctype"))||L1(c.getAttribute("enctype"))||Tl,s=new FormData(c,e),!Pp()){let{name:f,type:p,value:v}=e;if(p==="image"){let A=f?`${f}.`:"";s.append(`${A}x`,"0"),s.append(`${A}y`,"0")}else f&&s.append(f,v)}}else{if(Ql(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Pl,n=null,o=Tl,l=e}return s&&o==="text/plain"&&(l=s,s=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dp(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Ui(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function Rp(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Op(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Fp(e,t,r){let n=await Promise.all(e.map(async o=>{let s=t.routes[o.route.id];if(s){let l=await Rp(s,r);return l.links?l.links():[]}return[]}));return Hp(n.flat(1).filter(Op).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function u2(e,t,r,n,o,s){let l=(d,f)=>r[f]?d.route.id!==r[f].route.id:!0,c=(d,f)=>{var p;return r[f].pathname!==d.pathname||((p=r[f].route.path)==null?void 0:p.endsWith("*"))&&r[f].params["*"]!==d.params["*"]};return s==="assets"?t.filter((d,f)=>l(d,f)||c(d,f)):s==="data"?t.filter((d,f)=>{var v;let p=n.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(l(d,f)||c(d,f))return!0;if(d.route.shouldRevalidate){let A=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=r[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function zp(e,t,{includeHydrateFallback:r}={}){return Bp(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function Bp(e){return[...new Set(e)]}function Up(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Hp(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let s=JSON.stringify(Up(o));return r.has(s)||(r.add(s),n.push({key:s,link:o})),n},[])}function th(){let e=k.useContext(Oa);return Gc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function $p(){let e=k.useContext(Kl);return Gc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Wc=k.createContext(void 0);Wc.displayName="FrameworkContext";function rh(){let e=k.useContext(Wc);return Gc(e,"You must render this element inside a <HydratedRouter> element"),e}function qp(e,t){let r=k.useContext(Wc),[n,o]=k.useState(!1),[s,l]=k.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:v}=t,A=k.useRef(null);k.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let y=C=>{C.forEach(L=>{l(L.isIntersecting)})},N=new IntersectionObserver(y,{threshold:.5});return A.current&&N.observe(A.current),()=>{N.disconnect()}}},[e]),k.useEffect(()=>{if(n){let y=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(y)}}},[n]);let m=()=>{o(!0)},b=()=>{o(!1),l(!1)};return r?e!=="intent"?[s,A,{}]:[s,A,{onFocus:ss(c,m),onBlur:ss(d,b),onMouseEnter:ss(f,m),onMouseLeave:ss(p,b),onTouchStart:ss(v,m)}]:[!1,A,{}]}function ss(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Vp({page:e,...t}){let{router:r}=th(),n=k.useMemo(()=>$d(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?k.createElement(Gp,{page:e,matches:n,...t}):null}function Yp(e){let{manifest:t,routeModules:r}=rh(),[n,o]=k.useState([]);return k.useEffect(()=>{let s=!1;return Fp(e,t,r).then(l=>{s||o(l)}),()=>{s=!0}},[e,t,r]),n}function Gp({page:e,matches:t,...r}){let n=vi(),{manifest:o,routeModules:s}=rh(),{basename:l}=th(),{loaderData:c,matches:d}=$p(),f=k.useMemo(()=>u2(e,t,d,o,n,"data"),[e,t,d,o,n]),p=k.useMemo(()=>u2(e,t,d,o,n,"assets"),[e,t,d,o,n]),v=k.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let b=new Set,y=!1;if(t.forEach(C=>{var P;let L=o.routes[C.route.id];!L||!L.hasLoader||(!f.some(D=>D.route.id===C.route.id)&&C.route.id in c&&((P=s[C.route.id])!=null&&P.shouldRevalidate)||L.hasClientLoader?y=!0:b.add(C.route.id))}),b.size===0)return[];let N=Dp(e,l,"data");return y&&b.size>0&&N.searchParams.set("_routes",t.filter(C=>b.has(C.route.id)).map(C=>C.route.id).join(",")),[N.pathname+N.search]},[l,c,n,o,f,t,e,s]),A=k.useMemo(()=>zp(p,o),[p,o]),m=Yp(p);return k.createElement(k.Fragment,null,v.map(b=>k.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})),A.map(b=>k.createElement("link",{key:b,rel:"modulepreload",href:b,...r})),m.map(({key:b,link:y})=>k.createElement("link",{key:b,nonce:r.nonce,...y})))}function Wp(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nh&&(window.__reactRouterVersion="7.8.2")}catch{}function Xp({basename:e,children:t,window:r}){let n=k.useRef();n.current==null&&(n.current=T5({window:r,v5Compat:!0}));let o=n.current,[s,l]=k.useState({action:o.action,location:o.location}),c=k.useCallback(d=>{k.startTransition(()=>l(d))},[l]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(Sp,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o})}var ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oh=k.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:s,replace:l,state:c,target:d,to:f,preventScrollReset:p,viewTransition:v,...A},m){let{basename:b}=k.useContext(xi),y=typeof f=="string"&&ih.test(f),N,C=!1;if(typeof f=="string"&&y&&(N=f,nh))try{let E=new URL(window.location.href),J=f.startsWith("//")?new URL(E.protocol+f):new URL(f),S=Ui(J.pathname,b);J.origin===E.origin&&S!=null?f=S+J.search+J.hash:C=!0}catch{Gn(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=ap(f,{relative:o}),[P,D,U]=qp(n,A),H=Qp(f,{replace:l,state:c,target:d,preventScrollReset:p,relative:o,viewTransition:v});function K(E){t&&t(E),E.defaultPrevented||H(E)}let W=k.createElement("a",{...A,...U,href:N||L,onClick:C||s?t:K,ref:Wp(m,D),target:d,"data-discover":!y&&r==="render"?"true":void 0});return P&&!y?k.createElement(k.Fragment,null,W,k.createElement(Vp,{page:L})):W});oh.displayName="Link";var Zp=k.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:s,to:l,viewTransition:c,children:d,...f},p){let v=Ts(l,{relative:f.relative}),A=vi(),m=k.useContext(Kl),{navigator:b,basename:y}=k.useContext(xi),N=m!=null&&o3(v)&&c===!0,C=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,L=A.pathname,P=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(L=L.toLowerCase(),P=P?P.toLowerCase():null,C=C.toLowerCase()),P&&y&&(P=Ui(P,y)||P);const D=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let U=L===C||!o&&L.startsWith(C)&&L.charAt(D)==="/",H=P!=null&&(P===C||!o&&P.startsWith(C)&&P.charAt(C.length)==="/"),K={isActive:U,isPending:H,isTransitioning:N},W=U?t:void 0,E;typeof n=="function"?E=n(K):E=[n,U?"active":null,H?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let J=typeof s=="function"?s(K):s;return k.createElement(oh,{...f,"aria-current":W,className:E,ref:p,style:J,to:l,viewTransition:c},typeof d=="function"?d(K):d)});Zp.displayName="NavLink";var Jp=k.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:s,method:l=Pl,action:c,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:v,...A},m)=>{let b=n3(),y=i3(c,{relative:f}),N=l.toLowerCase()==="get"?"get":"post",C=typeof c=="string"&&ih.test(c),L=P=>{if(d&&d(P),P.defaultPrevented)return;P.preventDefault();let D=P.nativeEvent.submitter,U=(D==null?void 0:D.getAttribute("formmethod"))||l;b(D||P.currentTarget,{fetcherKey:t,method:U,navigate:r,replace:o,state:s,relative:f,preventScrollReset:p,viewTransition:v})};return k.createElement("form",{ref:m,method:N,action:y,onSubmit:n?d:L,...A,"data-discover":!C&&e==="render"?"true":void 0})});Jp.displayName="Form";function Kp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ah(e){let t=k.useContext(Oa);return tr(t,Kp(e)),t}function Qp(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:s,viewTransition:l}={}){let c=Cn(),d=vi(),f=Ts(e,{relative:s});return k.useCallback(p=>{if(Ip(p,t)){p.preventDefault();let v=r!==void 0?r:Ss(d)===Ss(f);c(e,{replace:v,state:n,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,f,r,n,t,e,o,s,l])}function e3(e){Gn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=k.useRef(Cc(e)),r=k.useRef(!1),n=vi(),o=k.useMemo(()=>Lp(n.search,r.current?null:t.current),[n.search]),s=Cn(),l=k.useCallback((c,d)=>{const f=Cc(typeof c=="function"?c(new URLSearchParams(o)):c);r.current=!0,s("?"+f,d)},[s,o]);return[o,l]}var t3=0,r3=()=>`__${String(++t3)}__`;function n3(){let{router:e}=ah("useSubmit"),{basename:t}=k.useContext(xi),r=bp();return k.useCallback(async(n,o={})=>{let{action:s,method:l,encType:c,formData:d,body:f}=Ep(n,t);if(o.navigate===!1){let p=o.fetcherKey||r3();await e.fetch(p,r,o.action||s,{preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||l,formEncType:o.encType||c,flushSync:o.flushSync})}else await e.navigate(o.action||s,{preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||l,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function i3(e,{relative:t}={}){let{basename:r}=k.useContext(xi),n=k.useContext(Xn);tr(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),s={...Ts(e||".",{relative:t})},l=vi();if(e==null){s.search=l.search;let c=new URLSearchParams(s.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(v=>v).forEach(v=>c.append("index",v));let p=c.toString();s.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:zi([r,s.pathname])),Ss(s)}function o3(e,{relative:t}={}){let r=k.useContext(Xd);tr(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=ah("useViewTransitionState"),o=Ts(e,{relative:t});if(!r.isTransitioning)return!1;let s=Ui(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Ui(r.nextLocation.pathname,n)||r.nextLocation.pathname;return $l(o.pathname,l)!=null||$l(o.pathname,s)!=null}function Bi({width:e,height:t,fill:r}){return a.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const a3=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},s3=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},l3=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(n/o*100);e.forEach(l=>{s>=l&&!t.includes(l)&&(t.push(l),s3(l))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},sh=k.createContext(),e1=()=>{const e=k.useContext(sh);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},c3=({children:e})=>{const[t,r]=k.useState(()=>localStorage.getItem("theme")||"light");k.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),a3(t)},[t]);const s={theme:t,toggleTheme:()=>{r(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{r(l)},isLight:t==="light",isDark:t==="dark"};return a.jsx(sh.Provider,{value:s,children:e})},u3=It`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,d3=It`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,h3=It`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,f3=_.div`
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
    animation: ${e=>e.initialFade?h3:"none"} 0.5s ease-in;
`,p3=_.div`
    animation: ${e=>e.isExiting?d3:u3} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Xc({isVisible:e,initialFade:t=!1}){const{theme:r}=e1(),[n,o]=k.useState(!1),[s,l]=k.useState(!1);return k.useEffect(()=>{!e&&!n&&(o(!0),setTimeout(()=>{l(!0)},800))},[e,n]),a.jsx(f3,{isVisible:e,fadeOutContainer:s,initialFade:t,children:a.jsx(p3,{isExiting:n,children:a.jsx(Bi,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const m3=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},g3=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},d2=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},P1=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},x3=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},h2=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},v3=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},b3=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},w3=(e,t="",r="",n="album_collection")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t,album_id:r,source:n})},y3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_view",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r})},_3=(e,t="",r="public")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_publish",{event_category:"Community",event_label:t?`${t} - ${e}`:e,album_name:e,artist_name:t,visibility:r})},f2=(e,t,r="",n="png")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_download",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r,file_type:n})},C3=e=>{typeof window.gtag<"u"&&window.gtag("event","community_search",{event_category:"Community",event_label:e,search_term:e})},S3=e=>{typeof window.gtag<"u"&&window.gtag("event","community_filter_change",{event_category:"Community",event_label:e,filter_key:e})},p2=(e,t=!1)=>{typeof window.gtag<"u"&&window.gtag("event","profile_view",{event_category:"Profile",event_label:e,username:e,is_owner:t})},A3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_search",{event_category:"Profile",event_label:e,search_term:e})},k3=(e,t=null)=>{typeof window.gtag<"u"&&window.gtag("event","profile_card_click",{event_category:"Profile",event_label:e,username:e,rank:t||void 0})},M3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_edit",{event_category:"Profile",event_label:e,username:e})},N3=(e,t=[])=>{typeof window.gtag<"u"&&window.gtag("event","profile_edit_save",{event_category:"Profile",event_label:e,username:e,fields_changed:t.join(",")})},j3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_spotify_connect",{event_category:"Profile",event_label:e,username:e})},I3=(e,t)=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_pin",{event_category:"Profile",event_label:e,username:e,poster_id:t})},L3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_delete",{event_category:"Profile",event_label:r||t,username:e,poster_id:t})},P3=(e,t,r)=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_visibility",{event_category:"Profile",event_label:`${r}`,username:e,poster_id:t,visibility:r})},T3=()=>{k.useEffect(()=>{d2(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&d2(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function lh(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function E3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z"},child:[]},{tag:"path",attr:{d:"M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z"},child:[]}]})(e)}function D3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48z"},child:[]}]})(e)}function R3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41 122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z"},child:[]}]})(e)}function ch(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368 144 144m224 0L144 368"},child:[]}]})(e)}function uh(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function m2(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 0 1 412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 0 0-41.95 52.83A16.05 16.05 0 0 1 108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 0 0-22.6 22.65l64 63.89a16 16 0 0 0 22.6 0l64-63.89a16 16 0 0 0-22.6-22.65L272 425.42V352h-32z"},child:[]}]})(e)}function g2(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"336",height:"336",x:"128",y:"128",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"57",ry:"57"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"},child:[]}]})(e)}function O3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32z"},child:[]},{tag:"path",attr:{d:"M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z"},child:[]}]})(e)}function F3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56zM272 48a16 16 0 0 0-32 0v112h32z"},child:[]}]})(e)}function El(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208z"},child:[]},{tag:"path",attr:{d:"M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96zM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62zm-69.6-275.53c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22zm171.94 56.18c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22zm-6.78 42.97c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51z"},child:[]}]})(e)}function ql(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"64"},child:[]},{tag:"path",attr:{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},child:[]}]})(e)}function z3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 152a56 56 0 0 0-56-56H220.11a23.89 23.89 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8zM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8z"},child:[]}]})(e)}function B3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",d:"M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8z"},child:[]},{tag:"rect",attr:{width:"192",height:"192",x:"160",y:"160",rx:"8",ry:"8"},child:[]},{tag:"path",attr:{d:"M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32z"},child:[]}]})(e)}function Sc(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"},child:[]}]})(e)}function So(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z"},child:[]}]})(e)}function dh(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64zm-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48zM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84z"},child:[]}]})(e)}function U3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z"},child:[]},{tag:"path",attr:{d:"M441.36 226.81 426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z"},child:[]},{tag:"path",attr:{d:"m441.36 330.8-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z"},child:[]}]})(e)}function Dl(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 208v-95a80 80 0 0 0-160 0v95"},child:[]},{tag:"rect",attr:{width:"320",height:"272",x:"96",y:"208",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"48",ry:"48"},child:[]}]})(e)}function x2(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288 440 72"},child:[]}]})(e)}function hh(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zm65.83 264H204.18a27.71 27.71 0 0 1-22-10.67 30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z"},child:[]}]})(e)}function H3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"},child:[]},{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"},child:[]}]})(e)}function $3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}function q3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 0 0-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z"},child:[]},{tag:"path",attr:{d:"M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 0 0-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z"},child:[]},{tag:"path",attr:{d:"M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 0 0-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z"},child:[]}]})(e)}function Rl(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 112h352"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224"},child:[]}]})(e)}function V3(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 144h112v112"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m48 368 121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"},child:[]}]})(e)}const Y3=It`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,G3=It`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,W3=It`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,X3=It`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Z3=_.div`
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
    animation: ${e=>e.isClosing?X3:W3} 0.3s ease-in-out forwards;
`,J3=_.div`
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
    animation: ${e=>e.isClosing?G3:Y3} 0.3s ease-in-out forwards;

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
`,K3=_.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Q3=_.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 1px;
`,fh=_(uh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,e4=_.div`
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

        ${fh} {
            fill: var(--backgroundColor);
        }
    }
`,Zc=_.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,t4=_.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,r4=_.button`
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
`,il=_.button`
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
`,n4=_.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,i4=_(Zc)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,o4=_(Zc)`
    opacity: 0.4;
    font-size: 0.75em;
    margin-top: 6px;
    width: 93%;
    text-align: justify;
    font-style: italic;
`,a4=_.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,s4=_.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function t1({title:e,paragraph:t,imageURL:r,postImageText:n,disclaimerText:o,canClose:s,confirmText:l,onConfirm:c,cancelText:d,onCancel:f,isClosing:p,customButton:v}){return k.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),a.jsx(Z3,{isClosing:p,children:a.jsxs(J3,{isClosing:p,children:[a.jsxs(K3,{children:[a.jsx(a4,{children:a.jsx(Bi,{width:25,height:25,fill:"var(--AccentColor)"})}),e&&a.jsx(Q3,{children:e}),s&&a.jsx(e4,{onClick:f,children:a.jsx(fh,{})})]}),a.jsx(s4,{}),t&&a.jsx(Zc,{children:t}),r&&a.jsx(t4,{src:r}),n&&a.jsx(i4,{children:n}),o&&a.jsx(o4,{children:o}),a.jsxs(n4,{style:{justifyContent:"center"},children:[v&&a.jsx(il,{onClick:()=>window.open(v.url,"_blank"),children:v.text}),d&&l?a.jsxs(a.Fragment,{children:[a.jsx(r4,{onClick:f,children:d}),a.jsx(il,{onClick:c,children:l})]}):a.jsx(a.Fragment,{children:d?a.jsx(il,{onClick:f,children:d}):l&&a.jsx(il,{onClick:c,children:l})})]})]})})}const l4="/assets/profile.ozFTMeG8.png",c4=k.createContext(),u4=({children:e})=>{const{t,i18n:r}=Lt(),[n,o]=k.useState(null),[s,l]=k.useState(!1),[c,d]=k.useState(()=>{const H=localStorage.getItem("shownAlerts");return H?JSON.parse(H):{}}),f=()=>{const H={en:{title:"The Community is live! 🎉",paragraph:"You can now explore posters created by other users, like your favorites, and show off your own collection. Create a free account to save your posters and be part of the Posterfy community!",confirmText:"Join the community!",postImageText:"Join thousands of music fans creating stunning posters.",disclaimerText:"This is an experimental version, errors may happen."},pt:{title:"A Comunidade está no ar! 🎉",paragraph:"Agora você pode explorar posters criados por outros usuários, curtir seus favoritos e exibir sua própria coleção. Crie sua conta gratuita para salvar seus posters e fazer parte da comunidade Posterfy!",confirmText:"Fazer parte da comunidade!",postImageText:"Junte-se a milhares de fãs de música criando posters incríveis.",disclaimerText:"Essa é uma versão experimental, erros podem acontecer."},es:{title:"¡La Comunidad ya está aquí! 🎉",paragraph:"Ahora puedes explorar pósters creados por otros usuarios, dar like a tus favoritos y mostrar tu propia colección. ¡Crea una cuenta gratuita para guardar tus pósters y ser parte de la comunidad Posterfy!",confirmText:"¡Unirme a la comunidad!",postImageText:"Únete a miles de fans de la música creando pósters increíbles.",disclaimerText:"Esta es una versión experimental, pueden ocurrir errores."},zh:{title:"社区正式上线！🎉",paragraph:"现在您可以探索其他用户创作的海报、为您喜欢的海报点赞，并展示您自己的收藏。创建免费账号，保存您的海报，加入 Posterfy 社区！",confirmText:"加入社区！",postImageText:"加入数千名音乐爱好者，一起创作精彩海报。",disclaimerText:"这是一个实验版本，可能会出现错误。"}},K=r.language||"en",W=H[K]||H.en;return{id:"community-feature",persistentId:"community-feature-announcement",title:W.title,paragraph:W.paragraph,postImageText:W.postImageText,disclaimerText:W.disclaimerText,confirmText:W.confirmText,canClose:!0,type:"alert",imageURL:l4,limitDate:"2026-03-20T23:59:59.999Z"}},p=H=>c[H]===!0,v=H=>{if(!p(H)){const K={...c,[H]:!0};d(K),localStorage.setItem("shownAlerts",JSON.stringify(K))}};k.useEffect(()=>{if(n)return;const H=f();!p(H.persistentId)&&y(H)&&o(H)},[r.language,c]);const A=H=>{y(H)&&(o(H),l(!1))},m=H=>{y(H)&&A({...H,type:"alert"})},b=H=>{A({...H,type:"confirmation"})},y=H=>{if(!H.limitDate)return!0;const K=new Date(H.limitDate);return new Date<=K},N=H=>{if(!H.persistentId){y(H)&&m(H);return}!p(H.persistentId)&&y(H)&&A({...H,type:"alert"})},C=()=>{(n==null?void 0:n.type)==="alert"&&D(),!(!n||s)&&(l(!0),setTimeout(()=>{o(null),l(!1),document.body.style.overflow="unset"},300))},L=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&D(),C()},P=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&D(),C()},D=()=>{n!=null&&n.persistentId&&v(n.persistentId)},U={modal:n,showModal:A,showAlert:m,showConfirmation:b,showConditionalAlert:N,closeModal:C,isModalVisible:!!n,hasAlertBeenShown:p,markSpecificAlertAsShown:v};return a.jsxs(c4.Provider,{value:U,children:[e,n&&a.jsx(t1,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,disclaimerText:n.disclaimerText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?L:null,cancelText:n.cancelText||null,onCancel:n.cancelText?P:n.canClose?C:null,isClosing:s,customButton:n.customButton})]})},d4={BASE_URL:"https://api.posterfy.space"},h4=d4.BASE_URL;class f4{constructor(t=h4){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,o={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`);const s=await fetch(n,o);if(!s.ok){const l=await s.json().catch(()=>({})),c=new Error(l.error||`HTTP error ${s.status}`);throw c.status=s.status,c.code=l.code||null,c}return s.json()}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){const t=encodeURIComponent(`${window.location.origin}/login`);return`${this.baseURL}/auth/google?redirect=${t}`}getSpotifyAuthUrl(){const t=encodeURIComponent(`${window.location.origin}/login`);return`${this.baseURL}/auth/spotify?redirect=${t}`}async publishPoster({spotifyAlbumId:t,albumName:r,artistsName:n,releaseDate:o,posterJson:s,visibility:l="public",albumNameOriginal:c,artistsNameOriginal:d}){return this.request("/api/posters",{method:"POST",body:JSON.stringify({spotifyAlbumId:t,albumName:r,artistsName:n,releaseDate:o,posterJson:s,visibility:l,albumNameOriginal:c,artistsNameOriginal:d})})}async getPoster(t){return this.request(`/api/posters/${t}`)}async updatePosterVisibility(t,r){return this.request(`/api/posters/${t}/visibility`,{method:"PUT",body:JSON.stringify({visibility:r})})}async updatePosterJson(t,r,n,o){return this.request(`/api/posters/${t}`,{method:"PATCH",body:JSON.stringify({posterJson:r,albumName:n,artistsName:o})})}async deletePoster(t){return this.request(`/api/posters/${t}`,{method:"DELETE"})}async registerView(t){return this.request(`/api/posters/${t}/view`,{method:"POST"})}async registerDownload(t){return this.request(`/api/posters/${t}/download`,{method:"POST"})}async registerEdit(t){return this.request(`/api/posters/${t}/edit`,{method:"POST"})}async toggleFavorite(t){return this.request(`/api/posters/${t}/favorite`,{method:"POST"})}async setPinnedPoster(t){return t?this.request("/api/user/pinned",{method:"PUT",body:JSON.stringify({posterId:t})}):this.request("/api/user/pinned",{method:"DELETE"})}async getUserPosters({page:t=1,limit:r=20}={}){return this.request(`/api/user/posters?page=${t}&limit=${r}`)}async getUserFavorites({page:t=1,limit:r=20}={}){return this.request(`/api/user/favorites?page=${t}&limit=${r}`)}async getUserStats(){return this.request("/api/user/stats")}async getCommunityPosters({sort:t="popular",page:r=1,limit:n=20,period:o}={}){const s=new URLSearchParams({sort:t,page:r,limit:n});return o&&s.set("period",o),this.request(`/api/community?${s}`)}async searchCommunity({q:t,page:r=1,limit:n=20}={}){const o=new URLSearchParams({q:t,page:r,limit:n});return this.request(`/api/community/search?${o}`)}async getTrendingAlbums(t=10){return this.request(`/api/community/trending-albums?limit=${t}`)}async getTopUsers({sort:t="posters",limit:r=10}={}){return this.request(`/api/community/top-users?sort=${t}&limit=${r}`)}async searchUsers({q:t="",page:r=1,limit:n=12}={}){const o=new URLSearchParams({q:t,page:r,limit:n});return this.request(`/api/community/search-users?${o}`)}async getAlbumPosters(t,{page:r=1,limit:n=20}={}){return this.request(`/api/community/albums/${t}?page=${r}&limit=${n}`)}async getUserPublicProfile(t,{page:r=1,limit:n=20}={}){return this.request(`/api/community/users/${t}?page=${r}&limit=${n}`)}async getUserPublicStats(t){return this.request(`/api/community/users/${t}/stats`)}}const Ze=new f4,ph=k.createContext(),Zn=()=>{const e=k.useContext(ph);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},p4=({children:e})=>{const[t,r]=k.useState(null),[n,o]=k.useState(!0),[s,l]=k.useState(!1);k.useEffect(()=>{(async()=>{const y=new URLSearchParams(window.location.search).get("token");y&&(localStorage.setItem("authToken",y),Ze.setAuthToken(y),window.history.replaceState({},document.title,window.location.pathname)),await c()})()},[]);const c=async()=>{const m=localStorage.getItem("authToken");if(!m){r(null),l(!1),o(!1);return}Ze.setAuthToken(m);try{const b=await Ze.getCurrentUser();r(b.user),l(!0),o(!1)}catch{localStorage.removeItem("authToken"),Ze.setAuthToken(null),r(null),l(!1),o(!1)}},A={user:t,loading:n,isAuthenticated:s,loginWithGoogle:()=>{window.location.href=Ze.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=Ze.getSpotifyAuthUrl()},logout:async()=>{try{await Ze.logout(),localStorage.removeItem("authToken"),Ze.setAuthToken(null),r(null),l(!1)}catch(m){console.error("Logout failed:",m),localStorage.removeItem("authToken"),Ze.setAuthToken(null),r(null),l(!1)}},checkAuthStatus:c,updateUser:m=>{r(m)}};return a.jsx(ph.Provider,{value:A,children:e})};function Vl(){return Vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vl.apply(this,arguments)}function m4(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var g4=["cdnSuffix","cdnUrl","countryCode","style","svg"],x4="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",v4="svg",b4=127397,mh=function(t){var r=t.cdnSuffix,n=r===void 0?v4:r,o=t.cdnUrl,s=o===void 0?x4:o,l=t.countryCode,c=t.style,d=t.svg,f=d===void 0?!1:d,p=m4(t,g4);if(typeof l!="string")return null;if(f){var v=""+s+l.toLowerCase()+"."+n;return k.createElement("img",Object.assign({},p,{src:v,style:Vl({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},c)}))}var A=l.toUpperCase().replace(/./g,function(m){return String.fromCodePoint(m.charCodeAt(0)+b4)});return k.createElement("span",Object.assign({role:"img"},p,{style:Vl({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},c)}),A)};const w4=_.div`
  position: relative;
`,y4=_.button`
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
`,_4=_.div`
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
`,C4=_.div`
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
`,S4=_.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,A4=_.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,ol=_.button`
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
`,al=_.span`
  margin-left: 8px;
`,sl=_(mh)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function k4(){const[e,t]=k.useState(!1),[r,n]=k.useState(!1),{i18n:o}=Lt();k.useEffect(()=>{const f=localStorage.getItem("language");f&&o.changeLanguage(f);const p=v=>{v.target.closest(".language-selector")||s()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[o]);const s=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},l=f=>{f.stopPropagation(),e?s():t(!0)},c=f=>{o.changeLanguage(f),localStorage.setItem("language",f),s(),b3(f)},d=()=>{switch(o.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return a.jsxs(w4,{className:"language-selector",children:[a.jsx(y4,{onClick:l,"aria-label":"Select language",children:a.jsx(_4,{children:a.jsx(mh,{countryCode:d(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&a.jsxs(C4,{className:r?"closing":"",children:[a.jsx(S4,{}),a.jsxs(A4,{children:[a.jsxs(ol,{onClick:()=>c("pt"),children:[a.jsx(sl,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),a.jsx(al,{children:"Português"})]}),a.jsxs(ol,{onClick:()=>c("en"),children:[a.jsx(sl,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),a.jsx(al,{children:"English"})]}),a.jsxs(ol,{onClick:()=>c("es"),children:[a.jsx(sl,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),a.jsx(al,{children:"Español"})]}),a.jsxs(ol,{onClick:()=>c("zh"),children:[a.jsx(sl,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),a.jsx(al,{children:"中文"})]})]})]})]})}function M4(e){return et({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function gh(e){return et({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function xh(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function N4(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function j4(e){return et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function I4(e){return et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function vh(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function L4(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function P4(e){return et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function T4(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Jc(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function E4(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const D4=_.div`
  position: relative;
`,R4=_.button`
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
`,O4=_.div`
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
`,F4=_.div`
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
`,z4=_.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,B4=_.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,U4=_.button`
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
`,H4=_.div`
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
`,$4=_.span`
  margin-left: 4px;
  font-weight: 500;
`;function q4(){const[e,t]=k.useState(!1),[r,n]=k.useState(!1),{theme:o,setSpecificTheme:s}=e1(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:a.jsx(E4,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:a.jsx(L4,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:a.jsx(j4,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:a.jsx(I4,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:a.jsx(P4,{}),isLight:!1}],c=l.find(v=>v.id===o)||l[0];k.useEffect(()=>{const v=A=>{A.target.closest(".theme-selector")||d()};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[]);const d=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=v=>{v.stopPropagation(),e?d():t(!0)},p=v=>{s(v),d()};return a.jsxs(D4,{className:"theme-selector",children:[a.jsx(R4,{onClick:f,"aria-label":"Select theme",children:a.jsx(O4,{themeColor:c.color,isLight:c.isLight,children:c.icon})}),e&&a.jsxs(F4,{className:r?"closing":"",children:[a.jsx(z4,{}),a.jsx(B4,{children:l.map(v=>a.jsxs(U4,{onClick:()=>p(v.id),children:[a.jsx(H4,{className:"theme-preview",color:v.color,isLight:v.isLight,children:v.icon}),a.jsx($4,{children:v.name})]},v.id))})]})]})}function V4(e){return et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"},child:[]}]})(e)}function bh(e){return et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function Y4(e){return et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 7C10.8954 7 10 7.89543 10 9C10 9.74025 10.4022 10.3866 10.9999 10.7324L11 15H13L13.0011 10.7318C13.5983 10.3858 14 9.73984 14 9C14 7.89543 13.1046 7 12 7Z"},child:[]}]})(e)}function G4(e){return et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const W4=_.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: var(--backgroundColor);
  padding: ${({scrolled:e})=>"13px 0"};
  box-shadow: ${({scrolled:e,$isAdmin:t})=>e&&!t?"0 2px 15px var(--shadowColor)":"none"};
  transform: ${({visible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,X4=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Z4=_.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,J4=_.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,K4=_.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,Q4=_.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,e6=_.div`
  /* animation: spin 10s linear infinite; */
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
`,t6=_.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,r6=_.button`
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
`,n6=_.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,i6=_(G4)`
  font-size: 1.5em;
  color: var(--textColor);
`,o6=_.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,a6=_.button`
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
`,s6=_.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`,l6=_(Y4)`
  font-size: 1.2em;
  color: var(--AccentColor);
`;function Ac({hideLogo:e=!1,hideAccount:t=!1}){var C;const[r,n]=k.useState(!1),[o,s]=k.useState(!0),[l,c]=k.useState(0),[d,f]=k.useState(!1),p=".space",{user:v,isAuthenticated:A}=Zn(),m=Cn(),y=vi().pathname.startsWith("/admin");k.useEffect(()=>{const L=()=>{const P=window.scrollY;P<=10?(s(!0),n(!1)):y?(s(!0),n(!0)):(P<l?s(!0):s(!1),n(!0)),c(P)};return window.addEventListener("scroll",L),()=>window.removeEventListener("scroll",L)},[l,y]);const N=()=>{m(A&&v?`/u/${v.username}`:"/login")};return a.jsxs(W4,{scrolled:r,visible:o,$isAdmin:y,children:[a.jsxs(X4,{children:[!e&&a.jsxs(Z4,{onClick:()=>m("/"),children:[a.jsx(e6,{children:a.jsx(Bi,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),a.jsxs(J4,{children:["Posterfy",a.jsx(K4,{children:p})]})]}),a.jsxs(t6,{children:[((C=v==null?void 0:v.permissions)==null?void 0:C.includes("admin"))&&!y&&a.jsx(a6,{onClick:()=>m("/admin"),title:"Admin",children:a.jsx(s6,{children:a.jsx(l6,{})})}),a.jsx(k4,{}),a.jsx(q4,{}),!t&&a.jsx(r6,{onClick:N,children:a.jsx(n6,{children:v!=null&&v.avatar?a.jsx(o6,{src:v.avatar}):a.jsx(i6,{})})})]})]}),a.jsx(Q4,{scrolled:r})]})}const wh=It`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;It`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const c6=It`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,u6=_.footer`
  width: 100%;
  position: relative;
  margin-top: 120px;
  background: var(--backgroundColor);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--borderColor);
  }
  
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`,d6=_.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,h6=_.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${wh} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,f6=_.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,p6=_.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`,m6=_.div`
  animation: spin 10s linear infinite;
  width: 48px;
  height: 42.2px;
  margin-right: 5px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,g6=_.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`,x6=_.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`,v6=_.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,b6=_.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--textColor);
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--borderColor);
  transition: all 0.2s ease;
  font-size: 0.9em;
  letter-spacing: 0.01em;
  
  svg {
    font-size: 1.1em;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    border-color: var(--textColor);
    transform: scale(1.05);
    
    svg {
      transform: scale(1.05);
    }
  }
`;_.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--textColor);
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--borderColor);
  transition: all 0.2s ease;
  font-size: 0.9em;
  letter-spacing: 0.01em;
  
  svg {
    font-size: 1.1em;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    border-color: var(--textColor);
    transform: scale(1.05);
    
    svg {
      transform: scale(1.05);
    }
  }
`;const w6=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${wh} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,y6=_.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,_6=_.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,v2=_.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${c6} 1.5s ease-in-out infinite;
  }
  
  a {
    color: var(--AccentColor);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--AccentColor), var(--AccentColor));
      transition: width 0.3s ease;
    }
    
    &:hover {
      opacity: 0.8;
      
      &::after {
        width: 100%;
      }
    }
  }
`;_.div`
  display: flex;
  gap: 24px;
  font-size: 0.85em;
  
  a {
    color: var(--textSecondary);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding: 4px 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--AccentColor);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover {
      color: var(--AccentColor);
      
      &::after {
        width: 100%;
      }
    }
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;_.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;_.h3`
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--textColor);
  opacity: 0.95;
`;_.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: var(--glassBackground);
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--borderColor);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;_.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 2px solid ${e=>e.active?"var(--AccentColor)":"transparent"};
  background: ${e=>e.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  svg {
    font-size: 1.2em;
    color: ${e=>e.themeId==="light"?"#000000":"#ffffff"};
    opacity: 0.9;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '${e=>e.themeName}';
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    font-size: 0.75em;
    color: var(--textSecondary);
    opacity: 0;
    transition: all 0.3s ease;
    white-space: nowrap;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px var(--shadowColor);
    
    &::after {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
    
    svg {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;function C6(){const{t:e}=Lt(),{theme:t,setSpecificTheme:r}=e1(),n=new Date().getFullYear();return a.jsxs(u6,{children:[a.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:a.jsxs("div",{children:[a.jsx("h4",{children:"Album Poster Generator Links"}),a.jsxs("nav",{children:[a.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),a.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),a.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),a.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),a.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),a.jsxs(d6,{children:[a.jsxs(h6,{children:[a.jsxs(f6,{children:[a.jsxs(p6,{children:[a.jsx(m6,{children:a.jsx(Bi,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"})}),a.jsx(g6,{children:"Posterfy"})]}),a.jsx(x6,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),a.jsx(v6,{children:a.jsxs(b6,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[a.jsx(M4,{})," ",e("ViewGitHub","View on GitHub")]})})]}),a.jsxs(w6,{children:[a.jsx(y6,{children:a.jsxs(v2,{children:[a.jsx(vh,{}),e("MadeBy","Made with love by")," ",a.jsx("a",{href:"https://avictormorais.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),a.jsx(_6,{children:a.jsxs(v2,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function ls({showNavbar:e=!0,showFooter:t=!0}){return a.jsxs(a.Fragment,{children:[e&&a.jsx(Ac,{}),a.jsx(Cp,{}),t&&a.jsx(C6,{})]})}function S6(e){return et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"},child:[]}]})(e)}function yh(e){return et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"},child:[]}]})(e)}function A6(e){return et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"},child:[]}]})(e)}function k6(e){return et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function M6(e){return et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const N6="/assets/Posterfy%20-%20Graduation.JszPNno1.png",j6="/assets/Posterfy%20-%20Blonde.CgecpDDh.png",I6="/assets/Posterfy%20-%20SOS.CNKHszjL.png",L6="/assets/Posterfy%20-%20Don't%20Be%20Dumb.QHClWo6O.png",P6="/assets/Posterfy%20-%20Flower%20Boy.Dq6UXJvZ.png",T6=[{id:1,coverImage:N6,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c126f7f19c7f0381e56156c94a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg",useUncompressed:!1,albumName:"Graduation",artistsName:"Kanye West",titleSize:200,artistsSize:"110",tracksSize:50,marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2007-09-11",titleRuntime:"Runtime",runtime:"54min 29s",backgroundColor:"#c49578",textColor:"#3d2834",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Good Morning
2. Champion
3. Stronger
4. I Wonder
5. Good Life
6. Can't Tell Me Nothing
7. Barry Bonds
8. Drunk and Hot Girls
9. Flashing Lights
10. Everything I Am
11. The Glory
12. Homecoming
13. Big Brother
14. Good Night`,color1:"#26383f",color2:"#815532",color3:"#849acd",albumID:"4SZko61aMnmgvNhfhgTuD3",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:j6,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1c5649add07ed3720be9d5526",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music124/v4/68/f9/fe/68f9fec8-81b6-38b1-7e27-796c431436fa/814908025306.jpg",useUncompressed:!1,albumName:"Blonde",artistsName:"Frank Ocean",titleSize:200,artistsSize:"110",tracksSize:"47",marginTop:"170",marginSide:160,marginCover:-50,marginBackground:0,titleRelease:"Release date",releaseDate:"2016-08-20",titleRuntime:"Runtime",runtime:"1h 0min 17s",backgroundColor:"#e2e2e3",textColor:"#010101",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Nikes
2. Ivy
3. Pink + White
4. Be Yourself
5. Solo
6. Skyline To
7. Self Control
8. Good Guy
9. Nights
10. Solo (Reprise)
11. Pretty Sweet
12. Facebook Story
13. Close To You
14. White Ferrari
15. Seigfried
16. Godspeed
17. Futura Free`,color1:"#90533b",color2:"#b47d5a",color3:"#648c5c",albumID:"3mH6qwIy9crq0I9YQbOuDf",coverZoom:5,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:I6,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:L6,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
2. HELICOPTER
3. INTERROGATION (SKIT)
4. STOLE YA FLOW
5. STAY HERE 4 LIFE
6. PLAYA
7. NO TRESPASSING
8. STOP SNITCHING
9. STFU
10. PUNK ROCKY
11. AIR FORCE (BLACK DEMARCO)
12. WHISKEY (RELEASE ME)
13. ROBBERY
14. DON'T BE DUMB / TRIP BABY
15. THE END
16. SWAT TEAM
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:P6,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c18940ac99f49e44f59e6f7fb3",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/22/fd/10/22fd10a3-881d-2560-64e7-a9df650b9e47/17UM1IM42651.rgb.jpg",useUncompressed:!1,albumName:"Flower Boy",artistsName:"Tyler, The Creator",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2017-07-21",titleRuntime:"Runtime",runtime:"46min 39s",backgroundColor:"#ce9621",textColor:"#140b06",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Foreword
2. Where This Flower Blooms
3. Sometimes...
4. See You Again
5. Who Dat Boy
6. Pothole
7. Garden Shed
8. Boredom
9. I Ain't Got Time!
10. 911 / Mr. Lonely
11. Droppin' Seeds
12. November
13. Glitter
14. Enjoy Right Now, Today`,color1:"#e2c999",color2:"#c03319",color3:"#f4d16a",albumID:"2nkto6YNI4rUYTLqEwWJ3o",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],Oi=(e={})=>{const[t,r]=k.useState(!1),n=k.useRef(null);return k.useEffect(()=>{const o=n.current,s=new IntersectionObserver(([l])=>{l.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return o&&s.observe(o),()=>{o&&s.unobserve(o)}},[e]),[n,t]},E6=_.div`
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
`,D6=_.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"247px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"350px"};
  margin: 0 -30px;
  
  opacity: ${e=>e.$hasAppeared?1:0};
  transform: ${e=>{const{isHovered:t,index:r,hoveredIndex:n,isMobile:o,$hasAppeared:s}=e;if(!s)return"scale(0.8) translateY(30px)";if(o)return"scale(1)";let l="scale(0.95)";if(t)l="scale(1.08) translateY(-8px)";else if(n!==null){let c=0;switch(n){case 0:r>0&&(c=70);break;case 1:r>=2&&(c=70);break;case 2:c=0;break;case 3:r<=2&&(c=-70);break;case 4:r<4&&(c=-70);break}c!==0&&(l=`scale(0.95) translateX(${c}px)`)}return l}};
  
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};
  
  box-shadow: ${e=>e.isHovered?"0 25px 50px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)":"0 8px 16px rgba(0,0,0,0.15)"};
  display: ${e=>e.isMobile&&e.index!==2||e.isTablet&&(e.index<1||e.index>3)?"none":"block"};

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
`,R6=_.div`
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
`,O6=_.div`
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
`,F6=_.div`
  position: absolute;
  top: 0px;
  right: -60px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 100;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 10px;
  }
`,z6=_.button`
  background: var(--backgroundColor);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: none;
  color: var(--textColor);
  font-size: 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(12px);
  font-weight: 300;

  &:hover {
    transform: scale(1.05);
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2em;
  }
`,B6=_.button`
  background: var(--backgroundColor);
  border: none;
  border-radius: 22px;
  padding: 0 16px;
  height: 44px;
  color: var(--textColor);
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
    transform: scale(1.05);
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
  }

  &:active {
    transform: translateY(0);
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
`,U6=({onRecreate:e})=>{const{t}=Lt(),[r,n]=k.useState(null),[o,s]=k.useState(!1),[l,c]=k.useState(!1),[d,f]=k.useState(null),[p,v]=k.useState(null),[A,m]=Oi(),[b,y]=k.useState([]),N=[2,3,1,4,0];k.useEffect(()=>{m&&b.length===0&&N.forEach((D,U)=>{setTimeout(()=>{y(H=>[...H,D])},U*177)})},[m]),k.useEffect(()=>{const D=()=>{s(window.innerWidth<=770),c(window.innerWidth>480&&window.innerWidth<=1200)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const C=(D,U)=>{f(D),v(U),document.body.style.overflow="hidden"},L=()=>{f(null),document.body.style.overflow="auto"},P=()=>{f(null),e(p),document.body.style.overflow="auto"};return a.jsxs(a.Fragment,{children:[a.jsx(E6,{ref:A,children:T6.map((D,U)=>a.jsx(D6,{index:U,isHovered:r===U,hoveredIndex:r,otherIsHovered:r!==null,isMobile:o,isTablet:l,$hasAppeared:b.includes(U),onMouseEnter:()=>n(U),onMouseLeave:()=>n(null),onClick:()=>C(D.coverImage||"/placeholder.svg",D.JSONConfig),children:a.jsx("img",{src:D.coverImage||"/placeholder.svg",alt:`${D.artist} - ${D.title}`})},D.id))}),d&&a.jsx(R6,{onClick:L,children:a.jsxs(O6,{onClick:D=>D.stopPropagation(),children:[a.jsxs(F6,{children:[a.jsx(z6,{onClick:L,children:"×"}),a.jsx(B6,{onClick:P,children:t("RecreatePoster")})]}),a.jsx("img",{src:d,alt:"Album cover"})]})})]})},H6=_.div`
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
`,$6=({onRecreate:e})=>a.jsx(H6,{children:a.jsx(U6,{onRecreate:e})}),q6=_.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
`,V6=_.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    z-index: 1;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding-top: 80px;
        gap: 40px;
    }
`,Y6=_.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`,G6=_.h1`
    font-size: 5.5em;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 200ms;
    color: var(--textColor);
    letter-spacing: -2px;

    @media (max-width: 1200px) {
        font-size: 4.5em;
    }

    @media (max-width: 600px) {
        font-size: 3.5em;
    }
`,W6=_.p`
    font-size: 1.25em;
    line-height: 1.6;
    opacity: ${e=>e.visible?.7:0};
    max-width: 550px;
    margin-bottom: 12px;
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: ${e=>e.delay||400}ms;
    color: var(--textColor);
    font-weight: 500;
`,X6=_.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    opacity: ${e=>e.visible?1:0};
    transition: opacity 1s ease;
    transition-delay: 600ms;

    @media (max-width: 900px) {
        width: 100%;
    }
`,Z6=_.div`
    position: relative;
    z-index: 2;
    width: 320px;
    height: 352px;

    @media (max-width: 1200px) {
        width: 280px;
        height: 308px;
    }

    @media (max-width: 900px) {
        width: 240px;
        height: 264px;
    }

    @media (max-width: 600px) {
        width: 180px;
        height: 198px;
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }

`,J6=_(k6)`
    font-size: 2.5em;
    color: var(--textColor);
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${e=>e.visible?.4:0};
    transition: opacity 1s ease;
    transition-delay: 1200ms;
    animation: bounce 2s infinite;
    cursor: pointer;

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
        40% { transform: translateX(-50%) translateY(-10px); }
        60% { transform: translateX(-50%) translateY(-5px); }
    }
`;function K6({showAnimation:e=!1,onRecreate:t}){const{t:r}=Lt(),{theme:n}=e1(),[o,s]=k.useState(!1);k.useEffect(()=>{if(e){const c=setTimeout(()=>{s(!0)},100);return()=>clearTimeout(c)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return a.jsxs(a.Fragment,{children:[a.jsxs(q6,{children:[a.jsxs(V6,{children:[a.jsxs(Y6,{children:[a.jsx(G6,{visible:o,children:"Posterfy"}),a.jsx(W6,{visible:o,delay:400,children:r("heroDescription")}),a.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[a.jsx("h2",{children:"Free Album Poster Generator"}),a.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),a.jsx("h3",{children:"Features:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Free album poster maker"}),a.jsx("li",{children:"Spotify integration"}),a.jsx("li",{children:"Custom poster design"}),a.jsx("li",{children:"High-quality downloads"}),a.jsx("li",{children:"Multiple format options"}),a.jsx("li",{children:"Professional templates"})]})]})]}),a.jsx(X6,{visible:o,children:a.jsx(Z6,{children:a.jsx(Bi,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),a.jsx(J6,{visible:o,onClick:l})]}),a.jsx($6,{onRecreate:t})]})}const Q6=_.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,em=_.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Fa({text:e,type:t}){return a.jsx(a.Fragment,{children:t==1?a.jsx(Q6,{children:e}):a.jsx(em,{children:e})})}const tm=_.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,rm=_.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,nm=_.p`
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
`,b2=_.div`
    display: flex;
`;function r1({title:e,paragraph:t}){return a.jsxs(tm,{children:[a.jsx(b2,{children:a.jsx(rm,{children:e})}),a.jsx(b2,{children:a.jsx(nm,{children:t})})]})}function im(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function om(e){return et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const am=_.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,sm=_(im)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,lm=_.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,cm=_.hr`
    opacity: 0.15;
    margin: 5px;
`,um=_.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,dm=_.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function va({q:e,a:t}){const[r,n]=k.useState(!1);function o(){n(!r)}return a.jsxs(a.Fragment,{children:[a.jsxs(am,{onClick:o,children:[a.jsx(sm,{showA:r}),a.jsx(lm,{children:e})]}),a.jsx(cm,{}),a.jsx(um,{showA:r,children:a.jsx(dm,{showA:r,children:t})})]})}const hm=_.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,fm=_.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function pm(){const{t:e}=Lt();return a.jsxs(hm,{id:"faq",children:[a.jsx(Fa,{text:"FAQ",type:1}),a.jsxs(fm,{children:[a.jsx(va,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),a.jsx(va,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),a.jsx(va,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),a.jsx(va,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),a.jsx(va,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),a.jsx(va,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const Kc=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>a.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),a.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),a.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),a.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),a.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),a.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),a.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),a.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),a.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),a.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),a.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),a.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),a.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),a.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),a.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),a.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),a.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),a.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:o}),a.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:o}),a.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:o}),a.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:o}),a.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:o}),a.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),mm=_.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,gm=_.div`
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
`,xm=_.p`
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
`,vm=_.button`
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
`;function bm(){const{t:e}=Lt();return a.jsxs(mm,{id:"share",children:[a.jsx(Fa,{text:e("Share"),type:1}),a.jsx(r1,{title:e("ShareTitle")}),a.jsx(gm,{children:a.jsx(Kc,{width:"100%"})}),a.jsx(xm,{children:e("ShareDescription")}),a.jsx(vm,{children:e("ComingSoon")})]})}function n1(e){return et({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const wm=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,_h="https://query.wikidata.org/sparql",kc="https://commons.wikimedia.org/w/api.php",Qc="Posterfy/1.0 (posterfy.space)";async function w2(e){let t=e;t.includes("/")&&(t=t.split("/").pop()),t=decodeURIComponent(t),t.startsWith("File:")||(t="File:"+t);const r=new URLSearchParams({action:"query",titles:t,prop:"imageinfo",iiprop:"url",format:"json",origin:"*"});try{const s=(await(await fetch(`${kc}?${r.toString()}`)).json()).query.pages,l=Object.keys(s)[0];return l==="-1"?null:s[l].imageinfo[0].url}catch{return null}}async function ym(e){const t=`${kc}?action=query&list=search&srsearch=${encodeURIComponent(e+" signature")}&srnamespace=6&format=json&origin=*`;try{const o=(await(await fetch(t,{headers:{"User-Agent":Qc}})).json()).query.search;if(!o||o.length===0)return{svg:null,png:null};const s=o.find(d=>d.title.toLowerCase().endsWith(".svg")),l=o.find(d=>d.title.toLowerCase().endsWith(".png")),c=async d=>{if(!d)return null;const f=`${kc}?action=query&titles=${encodeURIComponent(d)}&prop=imageinfo&iiprop=url&format=json&origin=*`;try{const v=await(await fetch(f)).json(),A=Object.keys(v.query.pages)[0];return v.query.pages[A].imageinfo[0].url}catch{return null}};return{svg:await c(s==null?void 0:s.title),png:await c(l==null?void 0:l.title)}}catch{return{svg:null,png:null}}}async function _m(e){const t=`
    SELECT ?artist ?spotifyId WHERE {
      ?artist ?label "${e}"@en .
      ?artist wdt:P1902 ?spotifyId .
    }`;try{const n=await(await fetch(`${_h}?query=${encodeURIComponent(t)}&format=json`,{headers:{"User-Agent":Qc,Accept:"application/sparql-results+json"}})).json();if(n.results.bindings.length>0)return n.results.bindings[0].spotifyId.value}catch{}return null}async function Cm(e,t=null){let r=e,n=null;if(!e&&t&&(r=await _m(t)),!r){if(t){const s=await ym(t);if(s.svg)return{url:s.svg,spotifyId:null};if(s.png)return{url:s.png,spotifyId:null}}return null}const o=`
    SELECT ?artistLabel ?signature WHERE {
      ?artist wdt:P1902 "${r}" .
      OPTIONAL { ?artist wdt:P109 ?signature . }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`;try{const l=await(await fetch(`${_h}?query=${encodeURIComponent(o)}&format=json`,{headers:{"User-Agent":Qc,Accept:"application/sparql-results+json"}})).json();let c=null;if(l.results.bindings.length>0){const d=l.results.bindings[0];c=d.signature?d.signature.value.replace("http://","https://"):null,c&&c.toLowerCase().endsWith(".svg")?n=await w2(c)||c:c&&c.toLowerCase().endsWith(".png")&&(n=await w2(c)||c)}}catch{}return n?{url:n,spotifyId:r}:null}const Yl=k.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:o,customFont:s,scale:l=1,isThumbnail:c=!1,onArtistIdDiscovered:d},f)=>{const p=k.useRef(null);k.useImperativeHandle(f,()=>({getCanvas:()=>p.current})),k.useEffect(()=>{(async()=>{if(!r)return;const b=p.current,y=b.getContext("2d"),N=2480,C=3508,L=Math.round(N*l),P=Math.round(C*l),D=Math.round((parseInt(t.marginSide)||0)*l),U=Math.round((parseInt(t.marginTop)||0)*l),H=Math.round((parseInt(t.marginCover)||0)*l),K=Math.round((parseInt(t.marginBackground)||0)*l),W=Math.round((parseInt(t.coverHorizontalPosition)||0)*l),E=Math.round((parseInt(t.coverVerticalPosition)||0)*l),J=Math.round((parseInt(t.coverBlur)||0)*l*(c?.5:2)),S=async we=>{const re=new Image;return re.crossOrigin="anonymous",re.src=we,new Promise(M=>{re.onload=()=>{const z=L-H*2,X=z/L*11,Q=H+W*X,ee=H+E*X;if(J>0&&(y.filter=`blur(${J}px)`),y.drawImage(re,Q,ee,z,z),y.filter="none",t.useFade){let se=y.createLinearGradient(0,0,0,Math.round((3e3-(parseInt(t.marginBackground)||0))*l));const fe=ne(t.backgroundColor);se.addColorStop(.5,`rgba(${fe.r}, ${fe.g}, ${fe.b}, 0)`),se.addColorStop(.8,t.backgroundColor),y.fillStyle=se,y.fillRect(0,0,b.width,Math.round((2500-(parseInt(t.marginBackground)||0))*l))}M()}})},T=async()=>{const we=Math.round(500*l),re=Math.round(134*l),M=wm(t.textColor,we,re),z=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),X=URL.createObjectURL(z),Q=new Image;return Q.src=X,new Promise(ee=>{Q.onload=()=>{y.globalAlpha="0.5",y.drawImage(Q,L-Math.round(70*l)-we,Math.round(50*l),we,re),y.globalAlpha="1",URL.revokeObjectURL(X),ee()}})},q=async()=>{let we=t.titleSize?parseInt(t.titleSize):230,re=Math.round(we*l);const M=s||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){y.font=`bold ${re}px ${M}`;let Je=y.measureText(t.albumName).width;for(;Je>L-D*2;)we-=1,re=Math.round(we*l),y.font=`bold ${re}px ${M}`,Je=y.measureText(t.albumName).width;n&&!c&&n(we,!0)}else y.font=`bold ${re}px ${M}`;y.fillStyle=t.textColor;const z=Math.round(2500*l),X=Math.round(2790*l);t.showTracklist?y.fillText(t.albumName,D,z+U):y.fillText(t.albumName,D,X+U);let Q=t.artistsSize?Math.round(parseInt(t.artistsSize)*l):Math.round(110*l);y.font=`bold ${Q}px ${s||"Montserrat"}`,t.showTracklist?y.fillText(t.artistsName,D,z+U+Q*1.3):y.fillText(t.artistsName,D,Math.round(2820*l)+U+Q);const ee=Math.round(70*l),se=Math.round(60*l),fe=Math.round(3310*l),ie=Math.round(3390*l);y.font=`bold ${ee}px ${s||"Montserrat"}`,y.fillText(t.titleRelease,D,fe);const xe=y.measureText(t.titleRelease).width;y.font=`bold ${se}px ${s||"Montserrat"}`;const _e=y.measureText(t.releaseDate).width,Pe=Math.max(xe,_e)+D+Math.round(100*l);y.font=`bold ${ee}px ${s||"Montserrat"}`,y.fillText(t.titleRuntime,Pe,fe),y.globalAlpha=.7,y.font=`bold ${se}px ${s||"Montserrat"}`,y.fillText(t.runtime,Pe,ie),y.fillText(t.releaseDate,D,ie),y.globalAlpha=1;const be=Math.round(3368*l),Z=Math.round(145*l),rt=Math.round(30*l);y.fillStyle=t.color1,y.fillRect(Math.round((2045-(parseInt(t.marginSide)||0))*l),be,Z,rt),y.fillStyle=t.color2,y.fillRect(Math.round((2190-(parseInt(t.marginSide)||0))*l),be,Z,rt),y.fillStyle=t.color3,y.fillRect(Math.round((2335-(parseInt(t.marginSide)||0))*l),be,Z,rt)},$=async()=>{y.fillStyle=t.textColor;let we=t.tracksSize?parseInt(t.tracksSize):50,re=we*l;const M=parseInt(t.marginTop||0),z=parseInt(t.artistsSize)||110,X=Math.round((2500+M+z*1.3+130)*l),ee=Math.round(3310*l)-Math.round(50*l),se=L-D,fe=t.tracklist.split(`
`).filter(be=>be.trim()!=="");if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const be=rt=>{const Je=rt*l;y.font=`bold ${Je}px ${s||"Montserrat"}`;const je=rt*1.3*l;let Fe=D+Math.round(10*l),Ee=0,nt=X,Be=0;return fe.forEach(yt=>{nt+je>=ee&&(nt=X,Fe=Fe+Ee+Je,Ee=0);const it=y.measureText(`${yt}`).width,ot=Fe+it;it>Ee&&(Ee=it),Be=Math.max(Be,ot),nt+=je}),Be};let Z=be(we);for(;Z>se&&we>1;)we-=1,Z=be(we);re=we*l,o&&!c&&o(we,!0)}y.font=`bold ${re}px ${s||"Montserrat"}`;const xe=we*1.3*l;let _e=D+Math.round(7*l),Le=0,Pe=X;fe.forEach(be=>{Pe+xe>=ee&&(Pe=X,_e=_e+Le+re,Le=0);const Z=y.measureText(`${be}`).width;Z>Le&&(Le=Z),y.fillText(`${be}`,_e,Pe),Pe+=xe})},ne=we=>{const re=parseInt(we.replace("#",""),16);return{r:re>>16&255,g:re>>8&255,b:re&255}},ce=we=>{const re=z=>{const X=z/255;return X<=.03928?X/12.92:Math.pow((X+.055)/1.055,2.4)};return .2126*re(we.r)+.7152*re(we.g)+.0722*re(we.b)>.179?"black":"white"},pe=async()=>{const we=ne(t.backgroundColor),re=ce(we),M=t.textColor,z=c?320:640,X=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${re}/${z}/spotify:album:${t.albumID}`;let ee=await(await fetch(X)).text();re=="black"?ee=ee.replace(/fill="#000000"/g,`fill="${M}"`):ee=ee.replace(/fill="#ffffff"/g,`fill="${M}"`),ee=ee.replace(t.backgroundColor,"transparent");const se=new Blob([ee],{type:"image/svg+xml"}),fe=URL.createObjectURL(se);return new Promise(ie=>{const xe=new Image;xe.src=fe,xe.onload=function(){const _e=Math.round(480*l),Le=Math.round(120*l),Pe=Math.round((2020-(parseInt(t.marginSide)||0))*l),be=Math.round(3235*l);y.drawImage(xe,Pe,be,_e,Le);const Z=c?"image/jpeg":"image/png",rt=c?.7:1,Je=b.toDataURL(Z,rt);e(Je),URL.revokeObjectURL(fe),ie()}})},ae=async()=>{if(!(!t.spotifyArtistId&&!t.artistsName))try{const we=await Cm(t.spotifyArtistId,t.artistsName);if(!we)return;const{url:re,spotifyId:M}=we;!t.spotifyArtistId&&M&&d&&d(M);const z=Math.round(480*l),X=Math.round((2020-(parseInt(t.marginSide)||0))*l),Q=Math.round(30*l),ee=Math.round(3235*l),se=t.textColor;let fe=re;if(re.toLowerCase().endsWith(".svg"))try{let _e=await(await fetch(re,{mode:"cors"})).text();_e=_e.replace(/#000000/gi,se),_e=_e.replace(/<svg([^>]*)/,`<svg fill="${se}"$1`),fe=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(_e)))}`}catch{}const ie=new Image;ie.crossOrigin="anonymous",ie.onload=()=>{const xe=ie.width/ie.height,_e=Math.round(z/xe),Le=ee-Q-_e;y.drawImage(ie,X,Le,z,_e)},ie.onerror=()=>{},ie.src=fe}catch{}},ve=async()=>{y.fillStyle=t.backgroundColor;const we=Math.round(2480*l)-K,re=P-we;y.fillRect(0,we,L,re)};y.clearRect(0,0,L,P),y.fillStyle=t.backgroundColor,y.fillRect(0,0,L,P),t.useUncompressed?await S(await t.uncompressedAlbumCover):await S(t.albumCover),await ve(),await q(),t.showTracklist&&await $(),t.useWatermark&&await T(),t.showArtistSignature&&await ae(),await pe()})()},[r,t,e,s,l,c,n,o,d]);const v=Math.round(2480*l),A=Math.round(3508*l);return a.jsx("canvas",{ref:p,width:v,height:A,style:{display:"none"}})});Yl.displayName="CanvasPoster";const dr={getOverview:()=>Ze.request("/api/admin/overview"),getHealth:()=>Ze.request("/api/admin/health"),getUsers:(e={})=>{const t=new URLSearchParams(e).toString();return Ze.request(`/api/admin/users?${t}`)},getUser:e=>Ze.request(`/api/admin/users/${e}`),editUser:(e,t)=>Ze.request(`/api/admin/users/${e}/edit`,{method:"PUT",body:JSON.stringify(t)}),banUser:e=>Ze.request(`/api/admin/users/${e}/ban`,{method:"PUT"}),unbanUser:e=>Ze.request(`/api/admin/users/${e}/unban`,{method:"PUT"}),promoteUser:e=>Ze.request(`/api/admin/users/${e}/promote`,{method:"PUT"}),demoteUser:e=>Ze.request(`/api/admin/users/${e}/demote`,{method:"PUT"}),forceLogout:e=>Ze.request(`/api/admin/users/${e}/force-logout`,{method:"POST"}),purgeUser:e=>Ze.request(`/api/admin/users/${e}/purge`,{method:"DELETE"}),bulkUsers:e=>Ze.request("/api/admin/users/bulk",{method:"PUT",body:JSON.stringify(e)}),getPosters:(e={})=>{const t=new URLSearchParams(e).toString();return Ze.request(`/api/admin/posters?${t}`)},getPoster:e=>Ze.request(`/api/admin/posters/${e}`),deletePoster:e=>Ze.request(`/api/admin/posters/${e}`,{method:"DELETE"}),restorePoster:e=>Ze.request(`/api/admin/posters/${e}/restore`,{method:"PUT"}),purgePoster:e=>Ze.request(`/api/admin/posters/${e}/purge`,{method:"DELETE"}),changeVisibility:(e,t)=>Ze.request(`/api/admin/posters/${e}/visibility`,{method:"PUT",body:JSON.stringify({visibility:t})}),editPoster:(e,t)=>Ze.request(`/api/admin/posters/${e}/edit`,{method:"PUT",body:JSON.stringify(t)}),getLogs:(e={})=>{const t=new URLSearchParams(e).toString();return Ze.request(`/api/admin/logs?${t}`)}},Sm=It`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,Am=It`
    from { opacity: 0; }
    to   { opacity: 1; }
`,km=It`
    from { opacity: 0; transform: scale(0.96) translateY(-4px); }
    to   { opacity: 1; transform: scale(1)    translateY(0);    }
`,i1=_.div`
    border-radius: 15px;
    background-color: ${({$bg:e})=>e||"transparent"};
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    user-select: none;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0px 15px ${({$bg:e})=>e?e+"99":"rgba(0,0,0,0.2)"};
    }
`,Mm=_.div`
    position: relative;
    width: 100%;
    /* A4 portrait aspect ratio */
    aspect-ratio: 2480 / 3508;
    background: ${({$bg:e})=>e||"#1a1a1a"};
    overflow: hidden;
    flex-shrink: 0;
`,Nm=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: ${Am} 0.4s ease;
`,jm=_.div`
    position: absolute;
    inset: 0;
    background: ${({$bg:e})=>e||"#1a1a1a"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    padding: 16px;
    text-align: center;
`,Im=_.p`
    font-size: 1.1em;
    font-weight: 700;
    color: ${({$color:e})=>e||"#fff"};
    opacity: 0.85;
    margin: 0;
    word-break: break-word;
`,Lm=_.p`
    font-size: 0.85em;
    color: ${({$color:e})=>e||"#fff"};
    opacity: 0.5;
    margin: 0;
`;_.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;_.div`
    width: 22px;
    height: 22px;
    border: 2.5px solid transparent;
    border-top-color: ${({$color:e})=>e||"rgba(255,255,255,0.6)"};
    border-radius: 50%;
    animation: ${Sm} 0.7s linear infinite;
`;_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 55%);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.2s ease;

    ${i1}:hover & {
        opacity: 1;
    }
`;const Pm=_.button`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: ${({$txtColor:e})=>e?e+"cc":"rgba(255,255,255,0.1)"};
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: ${({$active:e})=>e?1:0};
    transition: opacity 0.2s ease, transform 0.15s ease;
    color: ${({$bg:e})=>e||"#1a1a1a"};
    font-size: 1.1em;
    z-index: 2;

    ${i1}:hover & {
        opacity: 1;
    }

    &:hover {
        transform: scale(1.15);
    }

    &:active { transform: scale(0.95); }
`,Tm=_.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: ${({$txtColor:e})=>e?e+"cc":"rgba(255,255,255,0.1)"};
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: ${({$active:e})=>e?1:0};
    transition: opacity 0.2s ease, transform 0.15s ease;
    color: ${({$bg:e})=>e||"#1a1a1a"};
    font-size: 1.1em;
    z-index: 2;

    ${i1}:hover & {
        opacity: 1;
    }

    &:hover { transform: scale(1.15); }
    &:active { transform: scale(0.95); }
`;_.button`
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    color: #fff;
    font-size: 0.78em;
    font-weight: 600;
    padding: 7px 11px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
        background: rgba(255, 255, 255, 0.26);
    }
`;const Em=_.div`
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`,Dm=_.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,Rm=_.p`
    font-size: 0.85em;
    opacity: 0.55;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,y2=_.hr`
    border: none;
    border-top: 1px solid ${({$color:e})=>e?e+"33":"var(--borderColor)"};
    margin: 5px 0;
`,_2=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,C2=_.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.68em;
    font-weight: 700;
    color: var(--backgroundColor);
`,S2=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,A2=_.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
`,k2=_.span`
    font-size: 0.85em;
    font-weight: 600;
    opacity: 0.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,M2=_.span`
    font-size: 0.65em;
    font-weight: 600;
    color: ${({$color:e})=>e||"#999"};
    text-transform: capitalize;
    line-height: 1.2;
`;_.div`
    display: flex;
    gap: 12px;
    margin-top: 5px;
`;_.span`
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.8em;
    opacity: 0.45;
    color: ${({$color:e})=>e||"var(--textColor)"};
`;const N2=_.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 14px 14px;
    flex-wrap: wrap;
`,T1=_.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 20px;
    border: none;
    background: transparent;
    color: var(--textColor);
    font-size: 0.78em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    flex: 1;
    justify-content: center;
    background-color: ${({$accentColor:e})=>e||"#fff"};
    color: ${({$backgroundColor:e})=>e||"#fff"};
    transition: all 0.18s ease;

    &:hover {
        transform: scale(1.025);
        background-color: ${({$accentColor:e})=>e||"#fff"};;
    }
`,Om=_.span`
    font-size: 0.72em;
    font-weight: 700;
    padding: 3px 10px;
    margin-top: 4px;
    border-radius: 20px;
    background-color: ${({$color:e})=>e||"#fff"};
    color: ${({$backgroundColor:e})=>e||"#fff"};
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 4px;
`,Fm=_.div`
    position: fixed;
    inset: 0;
    z-index: 9998;
`,zm=_.div`
    position: fixed;
    z-index: 9999;
    min-width: 222px;
    background: var(--backgroundColor);
    border: 1px solid color-mix(in srgb, var(--textColor) 11%, transparent);
    border-radius: 14px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.22), 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;
    animation: ${km} 0.13s cubic-bezier(0.22, 1, 0.36, 1) both;
`,Ei=_.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 12px;
    background: none;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    color: var(--textColor);
    font-size: 0.875em;
    font-weight: 500;
    text-align: left;
    transition: background 0.12s;

    &:hover {
        background: color-mix(in srgb, var(--textColor) 8%, transparent);
    }

    &[data-danger='true'] {
        color: var(--AccentColor);
        &:hover { background: rgba(224, 82, 82, 0.09); }
    }

    svg { font-size: 1.1em; flex-shrink: 0; opacity: 0.7; }
`,Bm=_.div`
    height: 1px;
    background: color-mix(in srgb, var(--textColor) 10%, transparent);
    margin: 4px 0;
`,Um=_.div`
    font-size: 0.68em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.35;
    padding: 6px 12px 2px;
    color: var(--textColor);
    user-select: none;
`,Hm={bronze:"#cd7f32",silver:"#a8a9ad",gold:"#ffc107",diamond:"#5bc4f5"},$m=e=>{if(!e)return null;const[t,r]=e.split("_");return{type:t,tier:r,color:Hm[r]||"#999"}};function Mc({poster:e,variant:t="community",onDelete:r,onVisibilityChange:n,onUnfavorite:o,onPin:s,pinned:l=!1}){var fe;const{t:c}=Lt(),d=Cn(),{isAuthenticated:f,user:p}=Zn(),v=(fe=p==null?void 0:p.permissions)==null?void 0:fe.includes("admin"),A=k.useRef(null),[m,b]=k.useState(!1),[y,N]=k.useState(null),[C,L]=k.useState(e.favorited||!1),[P,D]=k.useState(!1),[U,H]=k.useState(null),[K,W]=k.useState(""),[E,J]=k.useState(!1),[S,T]=k.useState(e.visibility);k.useEffect(()=>{const ie=A.current;if(!ie||y)return;const xe=new IntersectionObserver(([_e])=>{_e.isIntersecting&&b(!0)},{threshold:.05});return xe.observe(ie),()=>xe.disconnect()},[y]);const q=k.useCallback(ie=>{N(ie)},[]),$=()=>d(`/p/${e._id}`),ne=async ie=>{if(ie.stopPropagation(),!f||P)return;D(!0);const xe=C;L(!xe);try{await Ze.toggleFavorite(e._id)}catch{L(xe)}finally{D(!1)}};k.useEffect(()=>{if(!U)return;const ie=_e=>_e.preventDefault(),xe=_e=>{[" ","ArrowUp","ArrowDown","PageUp","PageDown","Home","End"].includes(_e.key)&&_e.preventDefault()};return document.addEventListener("wheel",ie,{passive:!1}),document.addEventListener("touchmove",ie,{passive:!1}),document.addEventListener("keydown",xe),()=>{document.removeEventListener("wheel",ie),document.removeEventListener("touchmove",ie),document.removeEventListener("keydown",xe)}},[U]);const ce=ie=>{ie.preventDefault(),ie.stopPropagation();const xe=240,_e=v?340:220,Le=ie.clientX+xe>window.innerWidth?ie.clientX-xe:ie.clientX,Pe=ie.clientY+_e>window.innerHeight?ie.clientY-_e:ie.clientY;H({x:Le,y:Pe})},pe=async()=>{if(H(null),!f||P)return;D(!0);const ie=C;L(!ie);try{await Ze.toggleFavorite(e._id)}catch{L(ie)}finally{D(!1)}},ae=(ie,xe)=>{navigator.clipboard.writeText(ie).catch(()=>{}),W(xe),setTimeout(()=>{W(""),H(null)},1200)},ve=async()=>{H(null);try{await dr.deletePoster(e._id),J(!0)}catch{}},we=async()=>{H(null);const ie=S==="public"?"private":"public";try{await dr.changeVisibility(e._id,ie),T(ie)}catch{}},re=e.authorId,M=e.posterJson||{},z=re?$m(re.badge):null,X={...M,albumID:e.spotifyAlbumId,albumCover:M.albumCover||"",useUncompressed:!1,useWatermark:!0},Q=!!M.albumCover,ee=M.backgroundColor||"#1a1a1a",se=M.textColor||"#ffffff";return E?null:a.jsxs(a.Fragment,{children:[a.jsxs(i1,{ref:A,onClick:$,$bg:ee,onContextMenu:ce,children:[a.jsxs(Mm,{$bg:ee,children:[m&&Q&&!y&&a.jsx(Yl,{posterData:X,generatePoster:!0,scale:.3,isThumbnail:!0,onImageReady:q}),y?a.jsx(Nm,{src:y,alt:e.albumName}):a.jsxs(jm,{$bg:ee,children:[a.jsx(Im,{$color:se,children:e.albumName}),a.jsx(Lm,{$color:se,children:e.artistsName})]}),f&&t!=="favorites"&&a.jsx(Pm,{$active:C,$bg:ee,$txtColor:se,onClick:ne,children:C?a.jsx(So,{style:{color:ee,fill:ee}}):a.jsx(Sc,{style:{color:ee,stroke:ee}})}),t==="myposters"&&s&&a.jsx(Tm,{$active:l,$bg:ee,$txtColor:se,onClick:ie=>{ie.stopPropagation(),s(e._id)},title:l?"Remover destaque":"Fixar no destaque",children:l?a.jsx(R3,{style:{color:ee,fill:ee}}):a.jsx(D3,{style:{color:ee,stroke:ee}})})]}),a.jsxs(Em,{children:[a.jsx(Dm,{$color:se,children:e.albumName}),a.jsx(Rm,{$color:se,children:e.artistsName}),t==="community"&&(re==null?void 0:re.username)&&a.jsxs(a.Fragment,{children:[a.jsx(y2,{$color:se}),a.jsxs(_2,{style:{cursor:"pointer"},onClick:ie=>{ie.stopPropagation(),d(`/u/${re.username}`)},children:[a.jsx(C2,{$color:se,children:re!=null&&re.avatar?a.jsx(S2,{src:re.avatar,alt:re.name}):((re==null?void 0:re.name)||"?").charAt(0).toUpperCase()}),a.jsxs(A2,{children:[a.jsx(k2,{$color:se,children:(re==null?void 0:re.name)||(re==null?void 0:re.username)||"Unknown"}),z&&a.jsxs(M2,{$color:se,children:[c(`BADGE_TYPE_${z.type}`)," ",c(`BADGE_TIER_${z.tier}`)]})]})]})]}),t==="myposters"&&a.jsx(Om,{$backgroundColor:ee,$color:se,$public:e.visibility==="public",children:e.visibility==="public"?c("DASH_Public"):c("DASH_Private")}),t==="favorites"&&a.jsxs(a.Fragment,{children:[a.jsx(y2,{$color:se}),a.jsxs(_2,{style:{cursor:re!=null&&re.username?"pointer":"default"},onClick:ie=>{re!=null&&re.username&&(ie.stopPropagation(),d(`/u/${re.username}`))},children:[a.jsx(C2,{children:re!=null&&re.avatar?a.jsx(S2,{src:re.avatar,alt:re.name}):((re==null?void 0:re.name)||"?").charAt(0).toUpperCase()}),a.jsxs(A2,{children:[a.jsx(k2,{$color:se,children:(re==null?void 0:re.name)||(re==null?void 0:re.username)||"Unknown"}),z&&a.jsxs(M2,{$color:se,children:[c(`BADGE_TYPE_${z.type}`)," ",c(`BADGE_TIER_${z.tier}`)]})]})]})]})]}),t==="myposters"&&a.jsxs(N2,{children:[a.jsx(T1,{$accentColor:se,$backgroundColor:ee,onClick:ie=>{ie.stopPropagation(),n(e._id,e.visibility==="public"?"private":"public")},children:e.visibility==="public"?c("DASH_MakePrivate"):c("DASH_MakePublic")}),a.jsx(T1,{$danger:!0,$accentColor:se,$backgroundColor:ee,onClick:ie=>{ie.stopPropagation(),r(e)},children:c("DASH_Delete")})]}),t==="favorites"&&a.jsx(N2,{children:a.jsx(T1,{$danger:!0,$accentColor:se,$backgroundColor:ee,onClick:ie=>{ie.stopPropagation(),o(e._id)},children:c("DASH_Unfavorite")})})]}),U&&zd.createPortal(a.jsxs(a.Fragment,{children:[a.jsx(Fm,{onClick:()=>H(null),onContextMenu:ie=>{ie.preventDefault(),H(null)}}),a.jsxs(zm,{style:{left:U.x,top:U.y},children:[f&&t!=="favorites"&&a.jsxs(Ei,{onClick:pe,children:[C?a.jsx(So,{}):a.jsx(Sc,{}),c(C?"CARD_CTX_Unlike":"CARD_CTX_Like")]}),a.jsxs(Ei,{onClick:()=>{H(null),d(`/p/${e._id}`)},children:[a.jsx(ql,{}),c("CARD_CTX_Open")]}),a.jsxs(Ei,{onClick:()=>{H(null),window.open(`/p/${e._id}`,"_blank")},children:[a.jsx(x2,{}),c("CARD_CTX_OpenNewTab")]}),(re==null?void 0:re.username)&&a.jsxs(Ei,{onClick:()=>{H(null),d(`/u/${re.username}`)},children:[a.jsx(H3,{}),c("CARD_CTX_UserProfile")]}),(re==null?void 0:re.username)&&a.jsxs(Ei,{onClick:()=>{H(null),window.open(`/u/${re.username}`,"_blank")},children:[a.jsx(x2,{}),c("CARD_CTX_UserProfileNewTab")]}),v&&a.jsxs(a.Fragment,{children:[a.jsx(Bm,{}),a.jsx(Um,{children:c("CARD_CTX_Admin")}),(re==null?void 0:re._id)&&a.jsxs(Ei,{onClick:()=>ae(String(re._id),"user"),children:[a.jsx(g2,{}),c(K==="user"?"CARD_CTX_Copied":"CARD_CTX_CopyUserId")]}),a.jsxs(Ei,{onClick:()=>ae(String(e._id),"poster"),children:[a.jsx(g2,{}),c(K==="poster"?"CARD_CTX_Copied":"CARD_CTX_CopyPosterId")]}),a.jsxs(Ei,{onClick:we,children:[S==="public"?a.jsx(Dl,{}):a.jsx(El,{}),c(S==="public"?"DASH_MakePrivate":"DASH_MakePublic")]}),a.jsxs(Ei,{"data-danger":"true",onClick:ve,children:[a.jsx(Rl,{}),c("CARD_CTX_Delete")]})]})]})]}),document.body)]})}const qm=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:o="var(--PosterShare-logoColor)"})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[a.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),a.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),a.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),a.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),a.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),a.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),a.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),a.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),a.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),a.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),a.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),a.jsx("g",{fill:r,opacity:"0.3",children:a.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),a.jsxs("g",{fill:t,opacity:"0.2",children:[a.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),a.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),a.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),a.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),a.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),a.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),a.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),a.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),a.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),a.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),a.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),a.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),a.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),a.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),a.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),a.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),a.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),a.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),a.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),a.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),a.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),a.jsx("path",{fill:o,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),a.jsx("path",{fill:o,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),a.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),a.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),a.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),a.jsx("g",{clipPath:"url(#clip0_1_72)",children:a.jsx("path",{fill:o,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_1_72",children:a.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Da=({width:e=186})=>{const t=e>186?e:186,r=e*417/300;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,fill:"none",viewBox:"0 0 300 417",children:[a.jsx("path",{fill:"#FFBE9D",d:"m53.23 69.01-2.91 35.67a10.66 10.66 0 0 0 6.113 10.513 10.7 10.7 0 0 0 4.167.997 10.663 10.663 0 0 0 11-9.79c.22-2.69.4-4.93.44-5.2 0 0 9.15-.12 10.54-9 .67-4.32 1.33-13.32 1.83-21.48a16.83 16.83 0 0 0-14.43-17.69l-.87-.13c-9.44-.83-15.35 6.7-15.88 16.11"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M72.06 101.07a21 21 0 0 1-11.19-5s1.84 6.83 10.88 7.3z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M81.06 75.24a1.28 1.28 0 0 1-1.41 1.11 1.24 1.24 0 0 1-1.16-1.34 1.29 1.29 0 0 1 1.42-1.11 1.22 1.22 0 0 1 1.15 1.34"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M82.06 74.27c-.19.15-1-.71-2.43-.9s-2.48.35-2.6.16.14-.36.62-.62a3.5 3.5 0 0 1 2.12-.33 3.36 3.36 0 0 1 1.9.92c.39.39.49.71.39.77M67.72 74a1.3 1.3 0 0 1-1.42 1.12 1.24 1.24 0 0 1-1.15-1.34 1.29 1.29 0 0 1 1.41-1.12A1.24 1.24 0 0 1 67.72 74M68.34 72.78c-.19.14-1.05-.71-2.43-.9s-2.48.35-2.61.16.14-.36.63-.62a3.57 3.57 0 0 1 2.12-.34 3.46 3.46 0 0 1 1.9.93c.37.4.47.77.39.77M71.79 84.03a9 9 0 0 1 2.29-.09c.36 0 .7 0 .79-.23a1.8 1.8 0 0 0-.08-1.08l-.66-2.82c-.9-4-1.5-7.3-1.33-7.33a47 47 0 0 1 1.92 7.2c.21 1 .41 1.93.61 2.84a2 2 0 0 1 0 1.4.87.87 0 0 1-.65.43 2.5 2.5 0 0 1-.61 0 8.7 8.7 0 0 1-2.28-.32M69.14 69.97c-.19.36-1.54 0-3.18 0s-3 .21-3.18-.15c-.07-.18.21-.5.78-.78a5.58 5.58 0 0 1 4.85.15c.55.28.81.59.73.78M81.5 68.78c-.28.28-1.18-.18-2.32-.36s-2.14-.09-2.31-.45c-.08-.17.12-.46.58-.7a3.28 3.28 0 0 1 2-.24 3.3 3.3 0 0 1 1.77.89c.33.34.41.68.28.86"}),a.jsx("path",{fill:"#FFBE9D",d:"M53.06 75.78c-.14-.09-5.89-2.7-6.57 3.45s5.63 5.56 5.66 5.39.91-8.84.91-8.84"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M50.49 82.04s-.11.06-.3.13c-.27.079-.56.05-.81-.08a2.67 2.67 0 0 1-1-2.51 3.6 3.6 0 0 1 .47-1.5 1.23 1.23 0 0 1 .9-.73.55.55 0 0 1 .6.36c.06.18 0 .3 0 .32s.14-.09.12-.35a.66.66 0 0 0-.2-.41.78.78 0 0 0-.57-.23 1.52 1.52 0 0 0-1.23.83 3.64 3.64 0 0 0-.56 1.68 2.78 2.78 0 0 0 1.27 2.82 1.18 1.18 0 0 0 1-.05c.28-.13.33-.27.31-.28"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M49.64 75.05a3.24 3.24 0 0 1 2.73 1.93c.28.93.22 1.93.49 2.86s1.06 1.85 2 1.76a1.89 1.89 0 0 0 1.47-1.21c.229-.64.33-1.32.3-2 .05-2.91-.15-5.83.15-8.72a14.83 14.83 0 0 1 3-8.07 8.15 8.15 0 0 1 7.74-3c1.88.43 3.48 1.67 5.33 2.2a7.56 7.56 0 0 0 6.51-1.18q.15-.11.32-.19a1.68 1.68 0 0 0 .86-1.83 1.6 1.6 0 0 0-.28-.64c-3.25-4-9.87-5.93-15-5.39a18.06 18.06 0 0 0-13.06 7.71c-2.79 4.33-3.08 10.88-2.58 15.74M74.73 88.03a4.9 4.9 0 0 1-1.95-.4 5.1 5.1 0 0 1-1.84-.79 4.9 4.9 0 0 1 2 .4 4.85 4.85 0 0 1 1.79.79"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M81.69 94.55a3.74 3.74 0 0 1-.68 1.68 9 9 0 0 1-3.17 3 15.7 15.7 0 0 1-4.06 1.61 7 7 0 0 1-1.78.32 9 9 0 0 1 1.69-.6c1.37-.416 2.691-.98 3.94-1.68a10.2 10.2 0 0 0 3.14-2.83c.63-.87.85-1.53.92-1.5"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M53.87 57.18c1.22.76 2.505 1.41 3.84 1.94 1.39.36 2.809.599 4.24.71a8.34 8.34 0 0 1-8.08-2.65"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M73.61 60.78c-.07.07-.85-.78-2.43-1.65a11.66 11.66 0 0 0-6.77-1.4c-1.36.13-2.67.42-3.88.58a12 12 0 0 1-3.26.06 6.1 6.1 0 0 1-2.11-.64c-.46-.25-.67-.45-.66-.48a9.2 9.2 0 0 0 2.81.76c1.053.072 2.112.012 3.15-.18 1.19-.18 2.49-.48 3.91-.62a11.26 11.26 0 0 1 7 1.6c.62.383 1.187.844 1.69 1.37.4.36.57.6.55.6"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M54.38 57.58a15.8 15.8 0 0 0 0-3.82 5.9 5.9 0 0 0-1.66-3.37 4.92 4.92 0 0 0-4.5-1 6.2 6.2 0 0 0-3.69 2.89 5.93 5.93 0 0 0-.11 6 4.39 4.39 0 0 0 5.51 1.69c.67-.35 1.22-.9 1.89-1.26a2 2 0 0 1 2.14 0"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M54.8 55.86c.12.09-.38.94-1.15 1.89s-1.53 1.61-1.65 1.47a7.4 7.4 0 0 1 1.25-1.8c.81-.94 1.44-1.64 1.55-1.56"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M47.29 49.78a6.1 6.1 0 0 0-1.16 1.39 3.05 3.05 0 0 0-.36 1.82 3.8 3.8 0 0 0 1.13 2 8.05 8.05 0 0 0 3.89 1.88c.62.087 1.228.248 1.81.48-.63.06-1.264.019-1.88-.12a7.55 7.55 0 0 1-4.19-1.86 4.1 4.1 0 0 1-1.23-2.3 3.3 3.3 0 0 1 .51-2.07c.68-1.02 1.48-1.22 1.48-1.22"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M50.61 49.33a4.1 4.1 0 0 0-1 1 3 3 0 0 0-.45 1.45 4.1 4.1 0 0 0 .49 1.81 7.1 7.1 0 0 0 2.4 2.56c.77.51 1.32.71 1.29.79a2.84 2.84 0 0 1-1.48-.47 6.4 6.4 0 0 1-2.68-2.64 4.35 4.35 0 0 1-.5-2.07 3.1 3.1 0 0 1 .63-1.64c.6-.8 1.31-.86 1.3-.79"}),a.jsx("path",{fill:"#FFBE9D",d:"m73.6 361.67-8.35 38.03 14.26.13 10.34-33.31z"}),a.jsx("path",{fill:"var(--AccentColor)",d:"m86.13 384.78-5.21 17.3s15.83 11.1 15.18 14.39l-33.9-8.89 7-27.29z"}),a.jsx("path",{fill:"var(--textColor)",d:"M70.82 397.78a1.44 1.44 0 0 0-1.37 1.33 1.38 1.38 0 0 0 1.3 1.37 1.518 1.518 0 0 0 1.45-1.42 1.42 1.42 0 0 0-1.52-1.27"}),a.jsx("path",{fill:"var(--textColor)",d:"m62.2 407.53.86-2.75 32.2 9.54s1.34 1.05.89 2.07z",opacity:"0.4"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M81.51 402c0 .16-.89 0-1.85.34s-1.57.9-1.7.8.36-1 1.52-1.37 2.11.09 2.03.23M84.68 404.4c0 .17-.79.27-1.54.82s-1.1 1.25-1.26 1.2 0-1 .91-1.68 1.93-.49 1.89-.34M85.59 409.19c-.16 0-.18-.89.49-1.69s1.53-1 1.56-.79-.57.51-1.11 1.17-.78 1.34-.94 1.31M82.26 397.93c-.11.13-.81-.3-1.76-.48s-1.76-.08-1.81-.24.81-.57 1.93-.34 1.76.91 1.64 1.06M83.25 394.42a3.26 3.26 0 0 1-1.7-.46 7.6 7.6 0 0 1-1.63-1 9 9 0 0 1-.84-.77 2 2 0 0 1-.41-.54.74.74 0 0 1 .16-.9 1 1 0 0 1 .82-.19c.214.059.42.146.61.26q.53.272 1 .64c.505.407.94.893 1.29 1.44.376.468.6 1.041.64 1.64-.09 0-.34-.59-1-1.4a7.3 7.3 0 0 0-1.29-1.25 5.7 5.7 0 0 0-.9-.55c-.33-.19-.64-.27-.77-.14s-.06.08 0 .2q.12.219.3.39.358.397.76.75c.457.401.953.756 1.48 1.06q.77.354 1.48.82"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M82.97 394.6a2.76 2.76 0 0 1 0-1.76c.137-.636.38-1.245.72-1.8q.309-.491.7-.92a1.48 1.48 0 0 1 1.31-.57.84.84 0 0 1 .59.66c.03.222.03.448 0 .67-.04.393-.14.778-.3 1.14a4 4 0 0 1-1.19 1.57c-.89.7-1.63.72-1.63.66s.63-.27 1.36-1c.415-.411.739-.905.95-1.45q.187-.483.23-1c0-.38 0-.7-.16-.7s-.53.15-.74.4a5.5 5.5 0 0 0-.67.81 6.3 6.3 0 0 0-.77 1.61c-.31 1.01-.31 1.68-.4 1.68"}),a.jsx("path",{fill:"#FFBE9D",d:"m36.22 368.18.87 38.92 13.88-3.24 2.18-34.81z"}),a.jsx("path",{fill:"var(--AccentColor)",d:"m53.83 387.63-1 18s18 7.05 18.15 10.4l-35-.64.36-28.17z"}),a.jsx("path",{fill:"var(--textColor)",d:"M42.06 403.95a1.44 1.44 0 0 0-1 1.62 1.377 1.377 0 0 0 1.59 1 1.51 1.51 0 0 0 1.07-1.72 1.43 1.43 0 0 0-1.77-.88"}),a.jsx("path",{fill:"var(--textColor)",d:"m35.97 415.43.14-2.84 33.55 1.67s1.55.71 1.35 1.81z",opacity:"0.4"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M53.43 405.5c0 .17-.87.23-1.72.77s-1.31 1.24-1.47 1.17.12-1.05 1.16-1.68 2.07-.42 2.03-.26M57.06 407.08c0 .17-.71.45-1.31 1.16s-.77 1.48-.94 1.47-.26-1 .49-1.86 1.76-.93 1.76-.77M59.06 411.52c-.16 0-.38-.82.07-1.75s1.27-1.29 1.34-1.15-.44.64-.8 1.41-.41 1.48-.61 1.49M53.2 401.36c-.08.16-.86-.09-1.83-.05s-1.73.34-1.81.2.65-.75 1.79-.79 1.93.51 1.85.64M53.33 397.72a3.4 3.4 0 0 1-1.76 0 8 8 0 0 1-1.82-.6 8 8 0 0 1-1-.55 2.4 2.4 0 0 1-.53-.43.76.76 0 0 1-.06-.91 1 1 0 0 1 .76-.37c.224-.002.447.032.66.1q.556.15 1.08.39c.586.28 1.125.647 1.6 1.09.8.77 1.07 1.42 1 1.45s-.47-.49-1.28-1.13a7.6 7.6 0 0 0-1.55-.91 7.5 7.5 0 0 0-1-.33c-.37-.1-.68-.11-.78.06s0 .08 0 .19q.166.184.38.31.444.303.92.55.808.417 1.68.68.864.15 1.7.41"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M53.06 397.96a2.8 2.8 0 0 1-.43-1.7c-.019-.651.073-1.3.27-1.92a6 6 0 0 1 .47-1.06 1.44 1.44 0 0 1 1.13-.86.81.81 0 0 1 .73.5q.126.309.17.64c.055.395.055.795 0 1.19a4 4 0 0 1-.79 1.8c-.7.89-1.42 1.08-1.43 1s.55-.41 1.09-1.27c.306-.5.504-1.059.58-1.64a4 4 0 0 0 0-1c-.05-.37-.18-.67-.32-.64s-.48.27-.63.56a7 7 0 0 0-.45.95 6.2 6.2 0 0 0-.37 1.74c-.02 1.04.11 1.69-.02 1.71M81.54 218.13s27.74 71.59 25.45 91.68-16.93 84.97-16.93 84.97l-23.5-8.3 9.41-80-18.14-55.06 5.66-31.23z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M28.27 212.21s0 14.12 1.57 19.86l1.43 8.35c-1 46-.73 154.39-.73 154.39l31.4.38 9.83-179.41z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M72.58 232.55q.024.21 0 .42c0 .3 0 .71-.08 1.23-.08 1.11-.2 2.7-.36 4.74-.32 4.13-.78 10.08-1.34 17.41-1.13 14.7-2.56 35-4 57.48s-2.53 42.79-3.41 57.53c-.43 7.35-.79 13.3-1 17.44-.13 2-.24 3.63-.31 4.74q-.06.78-.09 1.23a2 2 0 0 1-.05.42 2.3 2.3 0 0 1 0-.42v-1.24l.21-4.74c.2-4.15.5-10.1.87-17.45.76-14.72 1.85-35.07 3.25-57.54s2.89-42.78 4.11-57.48c.61-7.35 1.12-13.3 1.51-17.4.2-2 .35-3.62.46-4.73 0-.52.1-.93.13-1.23q.03-.21.1-.41M47.54 236.86c0-.09 1.2-.39 3.1-1.05a19 19 0 0 0 3.19-1.45 9.05 9.05 0 0 0 3.07-2.86 9.6 9.6 0 0 0 1.39-4c.14-1.164.18-2.339.12-3.51-.1-2-.24-3.26-.16-3.27.116.273.187.564.21.86.1.56.23 1.37.32 2.39.12 1.194.12 2.396 0 3.59a9.55 9.55 0 0 1-1.42 4.19 9.24 9.24 0 0 1-3.27 3 16.7 16.7 0 0 1-3.31 1.39c-1 .29-1.78.47-2.34.58-.292.09-.595.137-.9.14M80.46 318.91c-.25-.4-.459-.826-.62-1.27-.37-.83-.87-2.05-1.47-3.56-1.2-3-2.75-7.25-4.26-12s-2.7-9.08-3.47-12.24c-.39-1.58-.68-2.86-.86-3.75a8 8 0 0 1-.24-1.4c.193.433.34.886.44 1.35.26 1 .61 2.22 1 3.71.86 3.13 2.1 7.45 3.6 12.17s3 8.95 4.11 12c.53 1.45 1 2.67 1.32 3.61q.29.669.45 1.38"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M67.65 113.7s43.14 41 42.87 50.62-9.35 12.1-12.37 11.87-26.81-24.28-26.81-24.28z"}),a.jsx("path",{fill:"var(--textColor)",d:"M67.65 113.7s43.14 41 42.87 50.62-9.35 12.1-12.37 11.87-26.81-24.28-26.81-24.28z",opacity:"0.4"}),a.jsx("path",{fill:"var(--AccentColor)",d:"m47.86 104.48 2.68-9.68 21.18 8.59-.47 10.13-10.18 3.43-10.44-5.72z"}),a.jsx("path",{fill:"var(--AccentColor)",d:"m81.54 218.13-3.55-82c-.48-9.81-3.65-21.36-10.05-28.81l-.06-1.32-17.61-3.44s-20.9 4.82-22.09 22.91c-1 14.36-2.17 71.59-2.17 92.66z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M54.16 102.6a19.7 19.7 0 0 1 1.42-5.49 10 10 0 0 1-.51 2.8 9.9 9.9 0 0 1-.91 2.69M62.11 99.51a9.1 9.1 0 0 1-.28 2.77 9 9 0 0 1-.7 2.69 19 19 0 0 1 1-5.46zM68.28 102.22c.054.838.02 1.679-.1 2.51a11 11 0 0 1-.24 2.51 9.46 9.46 0 0 1 .34-5z"}),a.jsx("path",{fill:"var(--textColor)",d:"M37.06 137.78a215.5 215.5 0 0 0 25 37.32c2.48 3 5.12 6.08 8.57 7.93s5.65 1.18 8.9-1a20.9 20.9 0 0 1-8.1-3.5 37.6 37.6 0 0 1-8.41-8.15c-8.47-10.52-16.74-21.38-25.2-31.91",opacity:"0.2"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M45.53 165.97a14.6 14.6 0 0 1-3.37 2.67 14.3 14.3 0 0 1-3.8 2 24 24 0 0 1 3.52-2.45 23.4 23.4 0 0 1 3.65-2.22M35.97 156.47a11.8 11.8 0 0 1-.19-3.4 11.4 11.4 0 0 1 .33-3.39c.24 1.117.303 2.264.19 3.4.07 1.14-.042 2.285-.33 3.39M36.24 192.43a10.7 10.7 0 0 1-2.77-3.32 10.9 10.9 0 0 1-1.7-4c.15-.06.91 1.7 2.15 3.7s2.44 3.52 2.32 3.62M57.27 186.78a41 41 0 0 1-4.21 2.61 42 42 0 0 1-4.24 2.54 16.6 16.6 0 0 1 4-3 17.1 17.1 0 0 1 4.45-2.15M53.48 178.68a13.2 13.2 0 0 1-3.26-1.64 12.4 12.4 0 0 1-3-2.09c1.157.393 2.255.945 3.26 1.64a13 13 0 0 1 3 2.09M54.13 169.72a8.2 8.2 0 0 1 1.46-2.55 8.6 8.6 0 0 1 1.88-2.24 8.2 8.2 0 0 1-1.46 2.54 8.5 8.5 0 0 1-1.88 2.25M37.85 216.68a12.8 12.8 0 0 1-2.92-2.19 13.1 13.1 0 0 1-2.57-2.59 12.6 12.6 0 0 1 2.92 2.2 13.6 13.6 0 0 1 2.57 2.58M51.54 210.69a12.45 12.45 0 0 1-4.7 4.92c.691-.9 1.465-1.733 2.31-2.49a17.8 17.8 0 0 1 2.39-2.43M30.4 161.6a30.6 30.6 0 0 1-.22 8 15.2 15.2 0 0 1-.15-4 15.7 15.7 0 0 1 .37-4M33.06 139.4c0 .15-.9.23-2 .18s-2-.2-2-.34a7.75 7.75 0 0 1 4 .16M36.42 115.38a11.6 11.6 0 0 1-2 2.74 11.4 11.4 0 0 1-2.43 2.4 22.5 22.5 0 0 1 4.47-5.14zM49.34 112.89a13 13 0 0 1-.85-3 12.8 12.8 0 0 1-.64-3 7.3 7.3 0 0 1 1.15 2.88 7.4 7.4 0 0 1 .34 3.12"}),a.jsx("path",{fill:"#FFBE9D",d:"M82.88 107.66c-3 .15-3.31 0-6.66.36a5.2 5.2 0 0 0-1.47.31 1.64 1.64 0 0 0-1 1.08c-.19.93.78 1.72 1.71 1.89s1.91-.05 2.84.12a6.24 6.24 0 0 1 3.82 2c2.06 2.65 4 1.24 5.39 2.15l3.36-2.35-1.47-5.05-6.56-.51"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M87.86 115.56a3.9 3.9 0 0 0-1-.25 8.5 8.5 0 0 1-2.77-.35 4.4 4.4 0 0 1-1.53-1.18 5 5 0 0 0-1.59-1.38 7.3 7.3 0 0 0-2.22-.77 18 18 0 0 0-2.57-.1 2.482 2.482 0 0 1-2.24-1.47 1.44 1.44 0 0 1 .26-1.35 2.26 2.26 0 0 1 1.08-.69 13.4 13.4 0 0 1 2.21-.29c.68-.05 1.33-.09 1.91-.11h2.76a5.4 5.4 0 0 1 1 0 4.3 4.3 0 0 1-1 .13c-.65 0-1.6.08-2.76.15l-1.89.16q-1.071.076-2.12.31c-.68.19-1.33.85-1.08 1.55a2.1 2.1 0 0 0 1.9 1.19q1.31-.05 2.61.11a8 8 0 0 1 2.32.83 5.4 5.4 0 0 1 1.67 1.49c.387.478.876.864 1.43 1.13a9.7 9.7 0 0 0 2.67.46c.253.033.498.115.72.24.16.12.23.17.23.19"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m79.76 104.78 17-9.13a1.07 1.07 0 0 1 1.4.34 1.082 1.082 0 0 1-.39 1.57l-15.53 8.14z"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M26.4 203.2a3.5 3.5 0 0 1-.55.16q-.804.198-1.63.29a21.1 21.1 0 0 1-6-.11 28.1 28.1 0 0 1-8.53-2.83 29 29 0 0 1-4.51-2.84 14 14 0 0 1-2.12-1.92 3.3 3.3 0 0 1-.7-1.37 2.2 2.2 0 0 1 .27-1.58 3.31 3.31 0 0 1 2.63-1.46 15 15 0 0 1 2.85.13 28.27 28.27 0 0 1 13.23 5.18 15.5 15.5 0 0 1 4.28 4.28c.293.469.525.973.69 1.5q.111.274.13.57a12.3 12.3 0 0 0-1-2 16 16 0 0 0-4.33-4.09 28.25 28.25 0 0 0-13.07-5 14 14 0 0 0-2.74-.12 2.8 2.8 0 0 0-2.24 1.2 2 2 0 0 0 .39 2.37 15 15 0 0 0 2 1.84 30.6 30.6 0 0 0 4.42 2.82 28.6 28.6 0 0 0 8.37 2.88c1.979.36 3.996.454 6 .28 1.38-.05 2.15-.25 2.16-.18"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M24.17 199.41a2 2 0 0 1-.31-.37l-.81-1.1a46 46 0 0 1-2.7-4.27 20.1 20.1 0 0 1-2.43-7.1 13 13 0 0 1 .19-4.47q.119-.581.32-1.14c.11-.405.29-.787.53-1.13a1.44 1.44 0 0 1 1.2-.69 1.51 1.51 0 0 1 1.16.77 36.2 36.2 0 0 1 5.1 15.79 33 33 0 0 1 0 5.05c0 .59-.11 1.05-.14 1.36a1.4 1.4 0 0 1-.09.47 13 13 0 0 1 0-1.84 39 39 0 0 0-.2-5 37.4 37.4 0 0 0-5.16-15.53 1 1 0 0 0-.75-.54.94.94 0 0 0-.76.48 6.4 6.4 0 0 0-.78 2.07 13.1 13.1 0 0 0-.2 4.3 20.3 20.3 0 0 0 2.28 7c1 1.87 1.91 3.32 2.54 4.32l.73 1.16c.22.25.3.4.28.41M0 222.78a14.07 14.07 0 0 0 10.85-.12 18.5 18.5 0 0 0 5.83-4 35.9 35.9 0 0 0 7.07-10.77c.66-1.45 1.2-2.66 1.62-3.6q.258-.68.64-1.3a7.4 7.4 0 0 1-.45 1.38c-.33.87-.81 2.14-1.47 3.67a34.15 34.15 0 0 1-7 11 18.4 18.4 0 0 1-6 4 14.7 14.7 0 0 1-5.81 1.08 11.9 11.9 0 0 1-3.91-.75 7 7 0 0 1-1-.45 1.1 1.1 0 0 1-.37-.14M22.06 238.31a7 7 0 0 1-.33-1.39l-.15-.75c0-.29-.05-.59-.09-.91 0-.65-.16-1.39-.15-2.21a73.4 73.4 0 0 1 1-12.78c.74-5 1.72-9.38 2.49-12.57.38-1.59.72-2.87 1-3.76q.155-.699.43-1.36c-.03.477-.11.95-.24 1.41l-.8 3.79c-.68 3.2-1.59 7.63-2.33 12.57a87 87 0 0 0-1.13 12.69c-.02 3.26.43 5.25.3 5.27"}),a.jsx("path",{fill:"var(--textColor)",d:"M44.26 104.78s.1-.09.33-.23a5.6 5.6 0 0 1 1-.49 9 9 0 0 1 4.24-.29c2.1.336 4.101 1.121 5.87 2.3a37.4 37.4 0 0 1 5.91 4.94 32.8 32.8 0 0 1 7.47 11.74c.33.84.53 1.62.74 2.3s.32 1.29.41 1.78q.169.762.22 1.54c-.12 0-.4-2.19-1.71-5.49a34.5 34.5 0 0 0-7.51-11.51 40 40 0 0 0-5.8-4.91 14.9 14.9 0 0 0-5.66-2.32 9.4 9.4 0 0 0-4.12.11c-.89.23-1.36.53-1.39.53"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M69.06 174.34s.15 23.48-3.75 24.79c-4.92 1.65-39.26 0-39.26 0v8.43s34.19-2.2 37 2.2c2.65 4.16 27.14 80.54 32.07 103.48h15.45s-8.2-39.4-11.1-49.45c-1.55-5.35-6.69-22.36-11.34-35.63a109.5 109.5 0 0 1-6.14-38.48l.37-17.46-2.68-45H69.8z"}),a.jsx("path",{fill:"var(--textColor)",d:"M69.06 174.34s.15 23.48-3.75 24.79c-4.92 1.65-39.26 0-39.26 0v8.43s34.19-2.2 37 2.2c2.65 4.16 27.14 80.54 32.07 103.48h15.45s-8.2-39.4-11.1-49.45c-1.55-5.35-6.69-22.36-11.34-35.63a109.5 109.5 0 0 1-6.14-38.48l.37-17.46-2.68-45H69.8z",opacity:"0.7"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M100.26 229.21a3.44 3.44 0 0 0 1.89-2 3.4 3.4 0 0 0-.27-2.77c-.58-1-1.72-1.78-1.95-2.94a1.88 1.88 0 0 0-.67 1.26c-.67-.66.07-2-.66-2.63a1.26 1.26 0 0 0-1.42.11 3.92 3.92 0 0 0-1.64 3 5.42 5.42 0 0 0 2.12 4.75q1.175.7 2.27 1.52"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m98.74 229.64-1.12 14.41a1 1 0 0 0 1.8.78c.148-.171.24-.384.26-.61l1.1-14.4z"}),a.jsx("path",{fill:"var(--textColor)",d:"m98.74 229.64-.34-1.13 2.88.11-.48 1.17z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M93.49 239.88c-.11-.44-2-14.37-2.58-19.13a1.4 1.4 0 0 1 2.77-.41l3.26 20.07z"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M86.3 235.65h16.22s5 21.1-3.1 28.14l-5-.89z"}),a.jsx("path",{fill:"var(--textColor)",d:"M86.3 235.65h16.22s5 21.1-3.1 28.14l-5-.89z",opacity:"0.7"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M100.06 262.78c-.351.116-.724.15-1.09.1a6 6 0 0 1-2.83-1 10.24 10.24 0 0 1-3.09-3.18 49 49 0 0 1-2.61-4.72 67.5 67.5 0 0 1-3.67-9.06c-.38-1.19-.64-2.17-.82-2.85a4.8 4.8 0 0 1-.2-1.07c.174.315.309.651.4 1l1 2.79a88 88 0 0 0 3.79 9c.85 1.69 1.67 3.31 2.54 4.69a10.4 10.4 0 0 0 2.88 3.13c.796.55 1.705.915 2.66 1.07.69.1 1.04.02 1.04.1"}),a.jsx("path",{fill:"#FFBE9D",d:"M103.92 154.24a7.8 7.8 0 0 1 .61-2.67 2.62 2.62 0 0 1 2.12-1.56 1.62 1.62 0 0 1 1.225.48 1.63 1.63 0 0 1 .465 1.23 4.1 4.1 0 0 1-.82 1.4c-.94 1.42-.76 3.28-.66 5s0 3.66-1.36 4.75"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M39.06 117.46a14.43 14.43 0 0 0-5.515 9.86 14.42 14.42 0 0 0 3.285 10.81l30.81 36.75a21.74 21.74 0 0 0 27 5 21.73 21.73 0 0 0 11.13-21.25l-7.51-33-15.1 2.38 1.9 25.11-25.76-33.11a14.42 14.42 0 0 0-20.2-2.55z"}),a.jsx("path",{fill:"#FFBE9D",d:"M104.22 170.1c-3.88-.71-4.56-1.34-8.43-2-1.16-.21-2.66-.88-2.21-2.11a1.635 1.635 0 0 1 1.58-1c1.51.05 4 .82 5.4.89.36 0 .33-.34.16-.58a45.5 45.5 0 0 0-7.24-1.19 1.76 1.76 0 0 1-1.496-1.204 1.76 1.76 0 0 1 .496-1.856 2.5 2.5 0 0 1 1-.35c1.55.15 1.55.15 3.2.36 4.63.57 4-.31 4-.31 0-.35-5.27-.6-8-.8a2.28 2.28 0 0 1-1.6-.53 1.53 1.53 0 0 1 .09-1.92 2.66 2.66 0 0 1 1.8-1c3-.2 12.85.42 12.85.42s1.37 1.69 1.15 5.27a20.3 20.3 0 0 1-2.75 7.91"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m90.86 181.48-.42.08-1.21.18c-1.07.15-2.65.38-4.7.5a23 23 0 0 1-7.44-.66 20.9 20.9 0 0 1-8.42-5.13 110 110 0 0 1-8.1-8.86c-2.77-3.31-5.67-6.88-8.7-10.67q-4.545-5.685-9.39-12l-4.89-6.39c-.42-.54-.83-1.09-1.24-1.63l-.59-.86a7 7 0 0 1-.55-.9 14 14 0 0 1-1.49-3.94 13.8 13.8 0 0 1-.29-4.2q.083-1.045.3-2.07a15 15 0 0 1 .62-2q.363-.967.85-1.88.512-.888 1.14-1.7a14 14 0 0 1 2.86-2.84 15.1 15.1 0 0 1 3.47-1.93 14.7 14.7 0 0 1 11.14.34 14.8 14.8 0 0 1 5.55 4.44l4.06 5.3 7.29 9.52 10.54 13.8c1.23 1.62 2.18 2.89 2.84 3.77l.74 1q.126.168.23.35l-.27-.32-.76-1-2.91-3.72-10.64-13.73-7.33-9.49-4.09-5.2a14.4 14.4 0 0 0-5.42-4.31 14.1 14.1 0 0 0-7.16-1.17c-1.26.119-2.498.408-3.68.86a15 15 0 0 0-3.37 1.87 13.7 13.7 0 0 0-2.78 2.76 17 17 0 0 0-1.1 1.66 16.007 16.007 0 0 0-1.43 3.75q-.204.991-.29 2a13.8 13.8 0 0 0 .28 4.09 13.6 13.6 0 0 0 1.45 3.82 28 28 0 0 0 2.34 3.34l4.89 6.39c3.22 4.17 6.35 8.18 9.37 12s5.91 7.38 8.67 10.69a110 110 0 0 0 8 8.86 20.6 20.6 0 0 0 8.29 5.12c2.397.643 4.883.89 7.36.73 2-.09 3.63-.3 4.7-.42l1.22-.14q.228-.047.46-.06"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M87.3 165.03a20.4 20.4 0 0 0-.08-6.48 20.6 20.6 0 0 0-2.52-6c.481.441.887.958 1.2 1.53a13.88 13.88 0 0 1 1.88 9 5.8 5.8 0 0 1-.48 1.95M48.16 132.31a18.5 18.5 0 0 1-3.93-1.85 18 18 0 0 1-3.69-2.31 18.7 18.7 0 0 1 3.94 1.85c1.315.62 2.55 1.395 3.68 2.31M58.62 138.57a15 15 0 0 1 0-4.69 15.2 15.2 0 0 1 1-4.59 35 35 0 0 1-.45 4.65 36 36 0 0 1-.55 4.63M59.78 151.15a15.5 15.5 0 0 1-7.14-2.44c1.229.279 2.43.668 3.59 1.16 1.215.332 2.403.76 3.55 1.28M71.87 157.96a18.5 18.5 0 0 1 .16-4.33c.057-1.452.285-2.892.68-4.29a18.6 18.6 0 0 1-.16 4.34 17.7 17.7 0 0 1-.68 4.28M74.16 170.42a18.8 18.8 0 0 1-3-3.14 18.5 18.5 0 0 1-2.63-3.47 18.4 18.4 0 0 1 3 3.13 18.3 18.3 0 0 1 2.63 3.48M90.61 171.71a34 34 0 0 1-3.83.69 30 30 0 0 1-3.82.74 9.9 9.9 0 0 1 3.72-1.25 9.6 9.6 0 0 1 3.93-.18M92.59 148.85c.342-1.186.85-2.317 1.51-3.36a13.4 13.4 0 0 1 2-3.11 25.9 25.9 0 0 1-3.48 6.47zM92.73 135.96a7.9 7.9 0 0 1-2.61-1.18 8.2 8.2 0 0 1-2.36-1.65c.936.24 1.823.643 2.62 1.19.874.403 1.67.959 2.35 1.64"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M76.55 99.98c-2.09 1.18-3.53 4.17-4.81 6.13a4.9 4.9 0 0 0-.87 1.94c-.026.76.143 1.514.49 2.19.45 1 .94 2 1.43 3.07.14.29.32.61.64.67s.72-.34.86-.72c.255-.979.376-1.988.36-3a3.09 3.09 0 0 1 1.35-2.58"}),a.jsx("path",{fill:"#FFBE9D",d:"m80.33 107.78-2.17-1.46a.633.633 0 0 0-.87.12l-1 1.33.74 3.21c.88 4.13-2.24 3.63-2.24 3.63l-.28-.79-1.6-5c-.39-2.41-.21-2.71.88-4.52l2.41-3.82a2.09 2.09 0 0 1 2.41-.91c3.78 1.19 11.9 3.29 13 6.39 1.92 5.64 3.91 19.83 3.95 20.09l-11.2 1.73-.52-9.57a5.1 5.1 0 0 1-2.25-2.57 73 73 0 0 1-1.26-7.89"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M88.24 109.27s-.11.2-.4.47a3.7 3.7 0 0 1-1.5.86c-.402.102-.82.119-1.23.05a2.2 2.2 0 0 1-1.25-.7c-.7-.76-.85-1.88-1.48-2.67a4.9 4.9 0 0 0-1.2-.9 13 13 0 0 0-1.3-.65 2.5 2.5 0 0 0-1.18-.27 2.4 2.4 0 0 0-.89.59c-1 1-1.51 1.74-1.57 1.68s.09-.21.32-.54a9.6 9.6 0 0 1 1-1.34 2.6 2.6 0 0 1 1-.72q.19-.03.38 0l.35.07q.346.09.68.22.703.28 1.36.65c.49.26.936.598 1.32 1 .72.93.85 2 1.45 2.68a2.17 2.17 0 0 0 2.12.61 3.9 3.9 0 0 0 1.46-.69c.38-.28.54-.43.56-.4M87.16 112.78a9.5 9.5 0 0 1-3.22-.39 9.4 9.4 0 0 1-3-1.09c1.064.143 2.114.374 3.14.69a21.5 21.5 0 0 1 3.08.79"}),a.jsx("path",{fill:"var(--AccentColor)",d:"M82.44 105.36c0-.05.21-.11.52 0a1.34 1.34 0 0 1 .809.989 1.35 1.35 0 0 1-.379 1.221c-.25.24-.46.26-.48.22s.11-.17.25-.4c.19-.297.26-.653.2-1a1.36 1.36 0 0 0-.54-.81c-.21-.1-.39-.16-.38-.22"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M65.24 112.78a3.39 3.39 0 0 0-4.053-.011c-.39.288-.712.657-.947 1.081-.58 1-.64 2.39-1.53 3.18.466.166.98.145 1.43-.06-.22.91-1.78 1-1.91 1.91a1.24 1.24 0 0 0 .82 1.16 4 4 0 0 0 3.39-.11 5.45 5.45 0 0 0 3-4.26q-.006-1.369.14-2.73"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m66.38 113.89 13-6.42a1.001 1.001 0 0 0-.26-1.94 1 1 0 0 0-.66.09l-12.93 6.42z"}),a.jsx("path",{fill:"var(--textColor)",d:"m66.38 113.89-.79.87-1.38-2.52 1.25-.2z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m174.54 272.86-32.69 143.21h7.76l31.91-143.21z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m170.66 272.86-32.68 143.21h7.75l31.91-143.21z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M258.93 264.25c0 1.28 28.44 151.45 28.44 151.45h8.33l-29-151.45z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M255.44 264.25c0 1.28 28.44 151.45 28.44 151.45h8.87l-29.53-151.45z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m236.66 272.86-1.9 143.21h10.48l1.53-143.21z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m160.58 264.25-.67 9.49 88.09 3.01.94-11.31z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M248 276.75h4.91l.9-11.25-4.87-.06z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m166.53 309.78 67.18 3.14v11.43l-69.12-3.42z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m233.71 272.86-1.9 143.21h10.48l1.52-143.21zM189.14 272.86a68 68 0 0 0 0 7.69l36.24 2.08v-8.32zM220.69 0c.43 1 6.07 38.88 6.07 38.88l6.75-.46L228.06 0z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M231.32 2.89 228.06 0l5.45 38.42 2.8-.2zM240.24 17.78c0 .73-.52 20.31-.52 20.31l7.24-.49V17.78z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M238.4 17.78c0 .73-.52 20.31-.52 20.31l7.24-.49V17.78z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m216.35 18.38-5.36 21.58 6.4-.44 4.87-21.14z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m213.59 18.38-5.36 21.58 6.4-.44 4.87-21.14z"}),a.jsx("path",{fill:"var(--textColor)",d:"m295.3 32.51 4.33 3.83-5.51 229.61h-6.36z"}),a.jsx("path",{fill:"var(--textColor)",d:"m150.98 44.73-18.86 218.65 155.64 2.57 7.54-233.44z"}),a.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m150.98 44.78 2.56-.24 7.53-.66 28.89-2.5 105.32-9h.23v.23c-2 63-4.62 143.89-7.44 231.78 0 .56 0 1.11-.05 1.66v.25h-.26l-155.64-2.6h-.25v-.25c5.63-64.67 10.38-119.35 13.73-157.87 1.69-19.24 3-34.43 3.94-44.83.46-5.18.81-9.17 1-11.87.12-1.33.22-2.35.28-3s.1-1 .1-1 0 .36-.07 1-.14 1.72-.25 3.07c-.23 2.7-.57 6.71-1 11.91-.89 10.41-2.18 25.63-3.81 44.89-3.29 38.49-8 93.13-13.5 157.75l-.23-.26 155.64 2.55-.26.25c0-.54 0-1.1.05-1.65 2.86-87.9 5.5-168.76 7.55-231.79l.22.21-105.2 8.71-28.9 2.39-7.58.62z"})]})},Vm=It`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,Ym=_.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`,Gm=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;


    @media (max-width: 768px) { padding-inline: 5%; }
`,Wm=_.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: start;
    align-items: start;
`,Xm=_.button`
    padding: 8px 20px;
    border-radius: 30px;
    border: 2px solid ${({$active:e})=>e?"var(--AccentColor)":"var(--borderColor)"};
    background: ${({$active:e})=>e?"var(--AccentColor)":"transparent"};
    color: ${({$active:e})=>e?"var(--backgroundColor)":"var(--textColor)"};
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: var(--AccentColor);
        color: ${({$active:e})=>e?"var(--backgroundColor)":"var(--AccentColor)"};
    }
`,Zm=_.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,Jm=_(Jc)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`,Km=_.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`,Qm=_.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
    color: var(--textColor);
    min-width: 0;
`,eg=_.button`
    background: none;
    border: none;
    cursor: pointer;
    color: var(--textColor);
    font-size: 1.35em;
    opacity: 0.25;
    display: flex;
    align-items: center;
    padding: 0;
    margin-inline: 15px;
    flex-shrink: 0;
    transition: opacity 0.5s;

    &:hover { opacity: 1; }
`,tg=_.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); padding-inline: 5%; }
    @media (max-width: 500px)  { grid-template-columns: 1fr; padding-inline: 5%; }
`,rg=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`,ng=_(n1)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${Vm} 0.8s linear infinite;
`,ig=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,og=_.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    margin-top: 20px;
    padding: 10px 20px;
`,ag=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
`,sg=_.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
`;_.p`
    font-size: 0.85em;
    opacity: 0.5;
    text-align: center;
    margin-top: 24px;
`;const lg=_.button`
    display: block;
    width: 81%;
    margin: 20px auto;
    padding: 8px 17px;
    border-radius: 25px;
    border: none;
    background-color: var(--textColor);
    color: var(--backgroundColor);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    max-width: 380px;

    &:hover:not(:disabled) {
        background-color: var(--AccentColor);
    }

    &:disabled { background-color: #666; cursor: not-allowed; }
`,j2=[{key:"popular",labelKey:"COMMUNITY_Popular",sort:"popular",period:null,requiresAuth:!1},{key:"recent",labelKey:"COMMUNITY_Recent",sort:"recent",period:null,requiresAuth:!1},{key:"week",labelKey:"COMMUNITY_ThisWeek",sort:"popular",period:"week",requiresAuth:!1},{key:"myfavorites",labelKey:"COMMUNITY_MyFavorites",sort:null,period:null,requiresAuth:!0}];function cg(){const{t:e}=Lt(),{isAuthenticated:t}=Zn(),[r,n]=k.useState("popular"),[o,s]=k.useState(""),[l,c]=k.useState(""),[d,f]=k.useState([]),[p,v]=k.useState(1),[A,m]=k.useState(!1),[b,y]=k.useState(!0),[N,C]=k.useState(!1),[L,P]=k.useState(!1),D=k.useRef(null),U=k.useCallback(async(S,T,q)=>{const $=j2.find(ne=>ne.key===S);T===1?y(!0):C(!0),P(!1);try{let ne;S==="myfavorites"?ne=await Ze.getUserFavorites({page:T,limit:8}):ne=await Ze.getCommunityPosters({sort:$.sort,page:T,limit:8,period:$.period}),f(ce=>q?[...ce,...ne.posters]:ne.posters),v(T),m(ne.hasMore)}catch(ne){console.error("Community fetch error:",ne),P(!0)}finally{y(!1),C(!1)}},[]),H=k.useCallback(async(S,T,q)=>{T===1?y(!0):C(!0),P(!1);try{const $=await Ze.searchCommunity({q:S,page:T,limit:8});f(ne=>q?[...ne,...$.posters]:$.posters),v(T),m($.hasMore)}catch($){console.error("Community search error:",$),P(!0)}finally{y(!1),C(!1)}},[]);k.useEffect(()=>{U("popular",1,!1)},[]),k.useEffect(()=>{!t&&r==="myfavorites"&&(n("popular"),U("popular",1,!1))},[t]);const K=S=>{S===r&&!l||(clearTimeout(D.current),s(""),c(""),n(S),U(S,1,!1),S3(S))},W=S=>{const T=S.target.value;if(s(T),clearTimeout(D.current),!T.trim()){c(""),U(r,1,!1);return}D.current=setTimeout(()=>{c(T.trim()),H(T.trim(),1,!1),C3(T.trim())},450)},E=()=>{clearTimeout(D.current),s(""),c(""),U(r,1,!1)},J=()=>{const S=p+1;l?H(l,S,!0):U(r,S,!0)};return a.jsxs(Ym,{id:"share",children:[a.jsx(Fa,{text:e("Community"),type:1}),a.jsx(r1,{title:e("CommunityTitle")}),a.jsxs(Gm,{children:[r!=="myfavorites"&&a.jsxs(Zm,{role:"search",children:[a.jsx(Jm,{"aria-hidden":"true"}),a.jsx(Km,{}),a.jsx(Qm,{type:"text",value:o,onChange:W,placeholder:e("COMMUNITY_SearchPlaceholder"),autoComplete:"off"}),o&&a.jsx(eg,{onClick:E,type:"button","aria-label":"Clear search",children:a.jsx(ch,{})})]}),a.jsx(Wm,{children:j2.filter(S=>!S.requiresAuth||t).map(S=>a.jsx(Xm,{$active:r===S.key&&!l,onClick:()=>K(S.key),children:e(S.labelKey)},S.key))})]}),b?a.jsx(rg,{children:a.jsx(ng,{})}):L?a.jsxs(ag,{children:[a.jsx(qm,{width:"30%"}),a.jsx(sg,{children:e("COMMUNITY_FetchError")})]}):d.length===0?a.jsxs(ig,{children:[a.jsx(Da,{width:"25%"}),a.jsx(og,{children:e("COMMUNITY_NoPosters")})]}):a.jsx(tg,{children:d.map(S=>a.jsx(Mc,{poster:S},S._id))}),A&&!b&&a.jsx(lg,{onClick:J,disabled:N,children:e(N?"LoadingMore":"COMMUNITY_LoadMore")})]})}var ll=function(e,t){return e<t?-1:e>t?1:0},I2=function(e){return e.reduce(function(t,r){return t+r},0)},ug=function(){function e(r){this.colors=r}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(r){return r},e}(),dg=function(){function e(s,l,c){return(s<<10)+(l<<5)+c}function t(s){var l=[],c=!1;function d(){l.sort(s),c=!0}return{push:function(f){l.push(f),c=!1},peek:function(f){return c||d(),f===void 0&&(f=l.length-1),l[f]},pop:function(){return c||d(),l.pop()},size:function(){return l.length},map:function(f){return l.map(f)},debug:function(){return c||d(),l}}}function r(s,l,c,d,f,p,v){var A=this;A.r1=s,A.r2=l,A.g1=c,A.g2=d,A.b1=f,A.b2=p,A.histo=v}function n(){this.vboxes=new t(function(s,l){return ll(s.vbox.count()*s.vbox.volume(),l.vbox.count()*l.vbox.volume())})}function o(s,l){if(l.count()){var c=l.r2-l.r1+1,d=l.g2-l.g1+1,f=Math.max.apply(null,[c,d,l.b2-l.b1+1]);if(l.count()==1)return[l.copy()];var p,v,A,m,b=0,y=[],N=[];if(f==c)for(p=l.r1;p<=l.r2;p++){for(m=0,v=l.g1;v<=l.g2;v++)for(A=l.b1;A<=l.b2;A++)m+=s[e(p,v,A)]||0;y[p]=b+=m}else if(f==d)for(p=l.g1;p<=l.g2;p++){for(m=0,v=l.r1;v<=l.r2;v++)for(A=l.b1;A<=l.b2;A++)m+=s[e(v,p,A)]||0;y[p]=b+=m}else for(p=l.b1;p<=l.b2;p++){for(m=0,v=l.r1;v<=l.r2;v++)for(A=l.g1;A<=l.g2;A++)m+=s[e(v,A,p)]||0;y[p]=b+=m}return y.forEach(function(C,L){N[L]=b-C}),function(C){var L,P,D,U,H,K=C+"1",W=C+"2",E=0;for(p=l[K];p<=l[W];p++)if(y[p]>b/2){for(D=l.copy(),U=l.copy(),H=(L=p-l[K])<=(P=l[W]-p)?Math.min(l[W]-1,~~(p+P/2)):Math.max(l[K],~~(p-1-L/2));!y[H];)H++;for(E=N[H];!E&&y[H-1];)E=N[--H];return D[W]=H,U[K]=D[W]+1,[D,U]}}(f==c?"r":f==d?"g":"b")}}return r.prototype={volume:function(s){var l=this;return l._volume&&!s||(l._volume=(l.r2-l.r1+1)*(l.g2-l.g1+1)*(l.b2-l.b1+1)),l._volume},count:function(s){var l=this,c=l.histo;if(!l._count_set||s){var d,f,p,v=0;for(d=l.r1;d<=l.r2;d++)for(f=l.g1;f<=l.g2;f++)for(p=l.b1;p<=l.b2;p++)v+=c[e(d,f,p)]||0;l._count=v,l._count_set=!0}return l._count},copy:function(){var s=this;return new r(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)},avg:function(s){var l=this,c=l.histo;if(!l._avg||s){var d,f,p,v,A=0,m=0,b=0,y=0;if(l.r1===l.r2&&l.g1===l.g2&&l.b1===l.b2)l._avg=[l.r1<<3,l.g1<<3,l.b1<<3];else{for(f=l.r1;f<=l.r2;f++)for(p=l.g1;p<=l.g2;p++)for(v=l.b1;v<=l.b2;v++)A+=d=c[e(f,p,v)]||0,m+=d*(f+.5)*8,b+=d*(p+.5)*8,y+=d*(v+.5)*8;l._avg=A?[~~(m/A),~~(b/A),~~(y/A)]:[~~(8*(l.r1+l.r2+1)/2),~~(8*(l.g1+l.g2+1)/2),~~(8*(l.b1+l.b2+1)/2)]}}return l._avg},contains:function(s){var l=this,c=s[0]>>3;return gval=s[1]>>3,bval=s[2]>>3,c>=l.r1&&c<=l.r2&&gval>=l.g1&&gval<=l.g2&&bval>=l.b1&&bval<=l.b2}},n.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){for(var l=this.vboxes,c=0;c<l.size();c++)if(l.peek(c).vbox.contains(s))return l.peek(c).color;return this.nearest(s)},nearest:function(s){for(var l,c,d,f=this.vboxes,p=0;p<f.size();p++)((c=Math.sqrt(Math.pow(s[0]-f.peek(p).color[0],2)+Math.pow(s[1]-f.peek(p).color[1],2)+Math.pow(s[2]-f.peek(p).color[2],2)))<l||l===void 0)&&(l=c,d=f.peek(p).color);return d},forcebw:function(){var s=this.vboxes;s.sort(function(f,p){return ll(I2(f.color),I2(p.color))});var l=s[0].color;l[0]<5&&l[1]<5&&l[2]<5&&(s[0].color=[0,0,0]);var c=s.length-1,d=s[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(s[c].color=[255,255,255])}},{quantize:function(s,l){if(!Number.isInteger(l)||l<1||l>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!s.length||l<2||l>256||!s.length||l<2||l>256)return!1;for(var c=[],d=new Set,f=0;f<s.length;f++){var p=s[f],v=p.join(",");d.has(v)||(d.add(v),c.push(p))}if(c.length<=l)return new ug(c);var A=function(L){var P,D=new Array(32768);return L.forEach(function(U){P=e(U[0]>>3,U[1]>>3,U[2]>>3),D[P]=(D[P]||0)+1}),D}(s);A.forEach(function(){});var m=function(L,P){var D,U,H,K=1e6,W=0,E=1e6,J=0,S=1e6,T=0;return L.forEach(function(q){(D=q[0]>>3)<K?K=D:D>W&&(W=D),(U=q[1]>>3)<E?E=U:U>J&&(J=U),(H=q[2]>>3)<S?S=H:H>T&&(T=H)}),new r(K,W,E,J,S,T,P)}(s,A),b=new t(function(L,P){return ll(L.count(),P.count())});function y(L,P){for(var D,U=L.size(),H=0;H<1e3;){if(U>=P||H++>1e3)return;if((D=L.pop()).count()){var K=o(A,D),W=K[0],E=K[1];if(!W)return;L.push(W),E&&(L.push(E),U++)}else L.push(D),H++}}b.push(m),y(b,.75*l);for(var N=new t(function(L,P){return ll(L.count()*L.volume(),P.count()*P.volume())});b.size();)N.push(b.pop());y(N,l);for(var C=new n;N.size();)C.push(N.pop());return C}}}().quantize,Ch=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};Ch.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var Aa=function(){};Aa.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},Aa.prototype.getPalette=function(e,t,r){var n=function(c){var d=c.colorCount,f=c.quality;if(d!==void 0&&Number.isInteger(d)){if(d===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");d=Math.max(d,2),d=Math.min(d,20)}else d=10;return(f===void 0||!Number.isInteger(f)||f<1)&&(f=10),{colorCount:d,quality:f}}({colorCount:t,quality:r}),o=new Ch(e),s=function(c,d,f){for(var p,v,A,m,b,y=c,N=[],C=0;C<d;C+=f)v=y[0+(p=4*C)],A=y[p+1],m=y[p+2],((b=y[p+3])===void 0||b>=125)&&(v>250&&A>250&&m>250||N.push([v,A,m]));return N}(o.getImageData().data,o.width*o.height,n.quality),l=dg(s,n.colorCount);return l?l.palette():null},Aa.prototype.getColorFromUrl=function(e,t,r){var n=this,o=document.createElement("img");o.addEventListener("load",function(){var s=n.getPalette(o,5,r);t(s[0],e)}),o.src=e},Aa.prototype.getImageData=function(e,t){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){if(this.status==200){var n=new Uint8Array(this.response);i=n.length;for(var o=new Array(i),s=0;s<n.length;s++)o[s]=String.fromCharCode(n[s]);var l=o.join(""),c=window.btoa(l);t("data:image/png;base64,"+c)}},r.send()},Aa.prototype.getColorAsync=function(e,t,r){var n=this;this.getImageData(e,function(o){var s=document.createElement("img");s.addEventListener("load",function(){var l=n.getPalette(s,5,r);t(l[0],this)}),s.src=o})};It`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;It`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5px);
  }
`;_.div`
  display: none;
`;const Sh=_.div`
  position: fixed;
  background-color: var(--textColor);
  color: var(--backgroundColor);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.5em;
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
    right: 97%;
    top: 50%;
    transform: translateY(-50%) scale(1.2);
    border: 12px solid transparent;
    border-right-color: var(--textColor);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 6px 10px;
  }
`,hg=_.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

  &:hover ${Sh} {
    opacity: 0.9;
  }
`;function fg({text:e,children:t,delay:r=0}){const[n,o]=k.useState(!1),[s,l]=k.useState({top:0,left:0}),c=f=>{const p=f.currentTarget.getBoundingClientRect();l({top:p.top+p.height/2-17,left:p.right+15}),o(!0)},d=()=>{o(!1)};return a.jsxs(hg,{onMouseEnter:c,onMouseLeave:d,children:[a.jsx(Sh,{isVisible:n,style:{top:s.top,left:s.left},children:e}),t]})}const pg=({width:e=667,fillColor:t="#CD7F32"})=>{const r=e*667/667;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:a.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.133 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.6 1.167 17.367 0 79.3-71.434 142.766-150.7 132.166-23.1 41.1-67.1 67.834-115.967 67.834s-92.867-26.734-115.967-67.834c-79.433 10.6-150.699-52.866-150.699-132.166.008-5.808.397-11.61 1.166-17.367C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0M233.292 377a66.2 66.2 0 0 0-46.758 19.331A65.94 65.94 0 0 0 167.167 443c0 28.82-25.569 44-44.084 44 20.278 26.84 55.105 44 88.167 44a88.25 88.25 0 0 0 62.343-25.774A87.92 87.92 0 0 0 299.417 443a65.94 65.94 0 0 0-19.368-46.669A66.2 66.2 0 0 0 233.292 377m272.655-235.62c-8.155-8.58-22.483-8.58-31.079 0L277.375 338.5l60.614 60.5 197.493-197.12c8.597-8.58 8.597-22.88 0-31.02z"})})},mg=({width:e=667,fillColor:t="#868686"})=>{const r=e*667/667;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:[a.jsx("path",{fill:t,d:"M183.279 334.043a35.63 35.63 0 0 1 36.671 14.965 35.39 35.39 0 0 1-9.5 49.4 35.623 35.623 0 0 1-55.009-36.192 35.627 35.627 0 0 1 27.838-28.173M211.8 215.525a35.627 35.627 0 0 1 33.325 52.496 35.626 35.626 0 1 1-33.325-52.496M423.498 167.612a35.63 35.63 0 0 1 35.377 18.471 35.624 35.624 0 0 1-52.91 45.284 35.63 35.63 0 0 1-12.787-37.805 35.63 35.63 0 0 1 11.185-17.619 35.64 35.64 0 0 1 19.135-8.331M302.3 144.018a35.625 35.625 0 1 1 13.9 69.88 35.625 35.625 0 0 1-13.9-69.88"}),a.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.134 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.599 1.167 17.366 0 79.3-71.434 142.767-150.7 132.167-23.1 41.1-67.1 67.833-115.967 67.833s-92.867-26.733-115.967-67.833c-79.433 10.6-150.699-52.867-150.699-132.167.008-5.808.397-11.609 1.166-17.366C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0m95.523 114.107a251.8 251.8 0 0 0-97.994-18.274 237.5 237.5 0 0 0-168.111 69.143 237.499 237.499 0 0 0 166.924 405.857 61.27 61.27 0 0 0 60.088-44.888 59.85 59.85 0 0 0-13.538-54.149 11.88 11.88 0 0 1 2.4-17.763 11.9 11.9 0 0 1 6.388-1.95H424.2a146.06 146.06 0 0 0 146.3-134.662 201.4 201.4 0 0 0-13.89-80.25 201.4 201.4 0 0 0-44.535-68.188 251.8 251.8 0 0 0-83.219-54.876"})]})},gg=({width:e=667,fillColor:t="#E7B214"})=>{const r=e*667/667;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:[a.jsx("path",{fill:t,d:"M229 365c13.3 0 24 10.7 24 24 0 48.6 39.4 88 88 88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-75.1 0-136-60.9-136-136 0-13.3 10.7-24 24-24"}),a.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.133 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.6 1.167 17.367 0 79.3-71.434 142.766-150.7 132.166-23.1 41.1-67.1 67.834-115.967 67.834s-92.867-26.734-115.967-67.834c-79.433 10.6-150.699-52.866-150.699-132.166.008-5.808.397-11.61 1.166-17.367C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0m-.533 61c-10 0-19.3 4.5-25.2 12.5C271.199 122.9 141 305.8 141 397c0 106 86 192 192 192s192-86 192-192c0-91.2-130.199-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5z"})]})},xg=({width:e=667,fillColor:t="#29A2DA"})=>{const r=e*667/667;return a.jsxs("svg",{width:e,height:r,viewBox:"0 0 667 667",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M398.439 350.221L332.525 521.031L266.576 350.221H398.439Z",fill:t}),a.jsx("path",{d:"M217.057 350.221L276.097 503.15L130.473 350.221H217.057Z",fill:t}),a.jsx("path",{d:"M534.509 350.221L389 503.035L447.971 350.221H534.509Z",fill:t}),a.jsx("path",{d:"M215.531 304.019H115.222L172.574 198.608C173.45 196.982 174.749 195.621 176.333 194.67C177.917 193.719 179.728 193.212 181.575 193.202H242.371L215.531 304.019Z",fill:t}),a.jsx("path",{d:"M401.929 304.019H263.087L289.927 193.202H375.101L401.929 304.019Z",fill:t}),a.jsx("path",{d:"M483.418 193.202C487.092 193.202 490.558 195.224 492.406 198.608L549.76 304.019H449.484L422.645 193.202H483.418Z",fill:t}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.7332 449.3 67.833C528.566 57.0663 600 120.7 600 200C600 205.767 599.6 211.566 598.833 217.366C639.933 240.499 666.667 284.5 666.667 333.333C666.667 382.166 639.933 426.166 598.833 449.3C599.6 455.1 600 460.9 600 466.667C600 545.967 528.566 609.433 449.3 598.833C426.2 639.933 382.2 666.667 333.333 666.667C284.466 666.667 240.466 639.933 217.366 598.833C137.933 609.433 66.6672 545.967 66.667 466.667C66.6749 460.859 67.064 455.057 67.833 449.3C26.7332 426.166 0 382.166 0 333.333C0.000111393 284.5 26.7331 240.5 67.833 217.366C67.0664 211.566 66.667 205.767 66.667 200C66.667 120.7 137.933 57.0667 217.366 67.833C240.466 26.7331 284.466 0.000111302 333.333 0ZM181.575 147C171.415 147.01 161.446 149.758 152.717 154.956C143.988 160.154 136.822 167.608 131.975 176.535L67.9092 294.305C62.1661 304.874 59.9172 316.989 61.4863 328.914C63.0555 340.839 68.3617 351.961 76.6436 360.686L299.678 594.932C303.908 599.377 308.998 602.917 314.639 605.335C320.279 607.753 326.353 609 332.49 609C338.628 609 344.701 607.753 350.342 605.335C355.982 602.917 361.073 599.377 365.304 594.932L588.35 360.686C596.633 351.962 601.94 340.841 603.512 328.916C605.083 316.991 602.837 304.875 597.096 294.305L533.007 176.535C528.16 167.608 520.994 160.154 512.265 154.956C503.536 149.758 493.566 147.01 483.406 147H181.575Z",fill:t})]})},vg=({width:e=667,fillColor:t="var(--AccentColor)"})=>{const r=e*667/667;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 667 667",fill:"none",children:a.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.134 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.599 1.167 17.366 0 79.3-71.434 142.767-150.7 132.167-23.1 41.1-67.1 67.833-115.967 67.833s-92.867-26.733-115.967-67.833c-79.433 10.6-150.699-52.867-150.699-132.167.008-5.808.397-11.609 1.166-17.366C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0M156.832 151.333v43.025H111V377.93h41.536v43.026h47.268v45.893h40.099v44.459h45.832v43.025h94.533v-43.025H426.1v-44.459h40.099v-45.894h47.265V377.93H555V194.358h-45.833v-43.025H370.239v44.46h-74.478v-44.46z"})})},bg={creator_bronze:{key:"bronze",color:"#cd7f32",Component:pg},creator_silver:{key:"silver",color:"#868686",Component:mg},creator_gold:{key:"gold",color:"#e7b214",Component:gg},creator_diamond:{key:"diamond",color:"#29a2da",Component:xg},admin:{key:"admin",color:"var(--AccentColor)",Component:vg}},wg=It`
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(1.15) drop-shadow(0 0 2px #5bc4f5aa); }
`,yg=_.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  cursor: pointer;
  flex-shrink: 0;
  animation: ${e=>e.$tier==="diamond"?wg:"none"} 2.8s ease-in-out infinite;
`;function As({badge:e,badgeProgress:t,isOwner:r=!1,size:n=20}){const{t:o}=Lt(),s=bg[e];if(!s)return null;const{key:l,color:c,Component:d}=s;let f=o(l==="admin"?"BADGE_Admin":`BADGE_TIER_${l}`);if(l!=="admin"&&r&&t)if(t.nextTier){const p=o(`BADGE_TIER_${t.nextTier}`);f+=` — ${o("BADGE_Progress",{score:t.score,next:t.nextThreshold,tier:p})}`}else f+=` — ${o("BADGE_MaxTier")}`;return a.jsx(fg,{text:f,delay:200,children:a.jsx(yg,{$tier:l,$size:n,children:a.jsx(d,{width:n,fillColor:c})})})}const _g=It`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,Cg=It`
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
`,Sg=It`
    from { background-position: 100% 0; }
    to   { background-position: -100% 0; }
`,Ag=_.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`,kg=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;

    @media (max-width: 768px) { width: 90%; padding-inline: 0; }
`,Mg=_.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) { height: 44px; }
`,Ng=_(Jc)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`,jg=_.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`,Ig=_.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
    color: var(--textColor);
    min-width: 0;

    @media (max-width: 600px) { font-size: 1em; margin-left: 10px; }
`,Lg=_.button`
    background: none;
    border: none;
    cursor: pointer;
    color: var(--textColor);
    font-size: 1.35em;
    opacity: 0.25;
    display: flex;
    align-items: center;
    padding: 0;
    margin-inline: 15px;
    flex-shrink: 0;
    transition: opacity 0.5s;

    &:hover { opacity: 1; }
`,Pg=_.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px)  { grid-template-columns: 1fr; padding-inline: 5%; gap: 10px; }
`,Tg=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`,Eg=_(n1)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${_g} 0.8s linear infinite;
`,Dg=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,Rg=_.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    padding: 10px 20px;
`,Og=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
    padding-inline: 20px;
`,Fg=_.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
`,zg=_.button`
    display: block;
    width: 81%;
    margin: 20px auto;
    padding: 8px 17px;
    border-radius: 25px;
    border: none;
    background-color: var(--textColor);
    color: var(--backgroundColor);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    max-width: 380px;

    &:hover:not(:disabled) { background-color: var(--AccentColor); }
    &:disabled { background-color: #666; cursor: not-allowed; }
`,Ah=_.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    animation: ${Cg} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: ${({$i:e})=>(e||0)*70}ms;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 14px;
        padding: 1.5px;
        background: ${({$color:e})=>`linear-gradient(90deg, transparent, ${e||"var(--AccentColor)"} 50%, transparent)`};
        background-size: 200% 100%;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);

        &::before {
            opacity: 1;
            animation: ${Sg} 0.8s ease-out forwards;
        }
    }
`,Bg=_.div`
    width: 43px;
    height: 43px;
    border-radius: 50%;
    padding: 1px;
    border: 2px ${({$ringColor:e})=>e||"var(--borderColor, rgba(128,128,128,0.2))"} solid;
    flex-shrink: 0;
    transition: transform 0.3s ease;

    ${Ah}:hover & {
        transform: scale(1.08);
    }

    @media (max-width: 600px) { width: 40px; height: 40px; }
`,Ug=_.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColor);
`,Hg=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,$g=_.span`
    font-size: 1.05em;
    font-weight: 800;
    color: var(--textColor);
    opacity: 0.35;
    user-select: none;
`,qg=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    flex: 1;
`,Vg=_.div`
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex-wrap: wrap;
`,Yg=_.p`
    font-size: 0.9em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.01em;

    @media (max-width: 600px) { font-size: 0.82em; }
`,Gg=_.p`
    font-size: 0.78em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    letter-spacing: 0.01em;

    @media (max-width: 600px) { font-size: 0.72em; }
`,Wg=_.span`
    font-size: 1.1em;
    font-weight: 800;
    color: var(--textColor);
    opacity: ${({$rank:e})=>e<=3?.5:.2};
    flex-shrink: 0;
    min-width: 28px;
    text-align: right;
    letter-spacing: -0.02em;
    user-select: none;

    @media (max-width: 600px) { font-size: 0.95em; min-width: 24px; }
`,Xg=new Aa;function Zg({user:e,index:t,showRank:r}){var l;const n=Cn(),[o,s]=k.useState(null);return k.useEffect(()=>{if(!e.avatar)return;const c=new Image;c.crossOrigin="anonymous",c.referrerPolicy="no-referrer",c.onload=()=>{try{if(c.naturalWidth>0){const[d,f,p]=Xg.getColor(c,10);s(`rgb(${d},${f},${p})`)}}catch{}},c.src=e.avatar},[e.avatar]),a.jsxs(Ah,{$i:t,$color:o,onClick:()=>{k3(e.username,e.rank),n(`/u/${e.username}`)},children:[a.jsx(Bg,{$ringColor:o,children:a.jsx(Ug,{children:e.avatar?a.jsx(Hg,{src:e.avatar,alt:e.name,loading:"lazy",referrerPolicy:"no-referrer"}):a.jsx($g,{children:(e.name||"?").charAt(0).toUpperCase()})})}),a.jsxs(qg,{children:[a.jsxs(Vg,{children:[a.jsx(Yg,{children:e.name}),e.badge&&a.jsx(As,{badge:e.badge,size:20}),((l=e.permissions)==null?void 0:l.includes("admin"))&&a.jsx(As,{badge:"admin",size:20})]}),a.jsxs(Gg,{children:["@",e.username]})]}),r&&e.rank&&a.jsxs(Wg,{$rank:e.rank,children:["#",e.rank]})]})}function Jg(){const{t:e}=Lt(),[t,r]=k.useState([]),[n,o]=k.useState(""),[s,l]=k.useState(""),[c,d]=k.useState(1),[f,p]=k.useState(!1),[v,A]=k.useState(!0),[m,b]=k.useState(!1),[y,N]=k.useState(!0),[C,L]=k.useState(!1),P=k.useRef(null),D=k.useCallback(async(W,E,J)=>{E===1?A(!0):b(!0),L(!1);try{const S=await Ze.searchUsers({q:W,page:E,limit:8});r(T=>J?[...T,...S.users]:S.users),d(E),p(S.hasMore),N(S.isRanking??!W)}catch(S){console.error("Profiles fetch error:",S),J||r([]),L(!0)}finally{A(!1),b(!1)}},[]);k.useEffect(()=>{D("",1,!1)},[]);const U=W=>{const E=W.target.value;if(o(E),clearTimeout(P.current),!E.trim()){l(""),D("",1,!1);return}P.current=setTimeout(()=>{l(E.trim()),A3(E.trim()),D(E.trim(),1,!1)},400)},H=()=>{clearTimeout(P.current),o(""),l(""),D("",1,!1)},K=()=>{D(s,c+1,!0)};return a.jsxs(Ag,{children:[a.jsx(Fa,{text:e("PROFILES_Anchor"),type:1}),a.jsx(r1,{title:e("PROFILES_Title")}),a.jsx(kg,{children:a.jsxs(Mg,{role:"search",children:[a.jsx(Ng,{"aria-hidden":"true"}),a.jsx(jg,{}),a.jsx(Ig,{type:"text",value:n,onChange:U,placeholder:e("PROFILES_SearchPlaceholder"),autoComplete:"off"}),n&&a.jsx(Lg,{onClick:H,type:"button","aria-label":"Clear search",children:a.jsx(ch,{})})]})}),v?a.jsx(Tg,{children:a.jsx(Eg,{})}):C?a.jsxs(Og,{children:[a.jsx(Kc,{width:"25%"}),a.jsx(Fg,{children:e("PROFILES_FetchError")})]}):t.length===0?a.jsxs(Dg,{children:[a.jsx(Da,{width:"25%"}),a.jsx(Rg,{children:e("PROFILES_NoResults")})]}):a.jsx(Pg,{children:t.map((W,E)=>a.jsx(Zg,{user:W,index:E,showRank:y},W._id||W.username))}),f&&!v&&a.jsx(zg,{onClick:K,disabled:m,children:e(m?"LoadingMore":"PROFILES_LoadMore")})]})}const L2=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Help improve the project!",pt:"Ajude a melhorar o projeto!",es:"¡Ayuda a mejorar el proyecto!",zh:"帮助改进项目！"},text:{en:"This project is open source and evolves with the community! Contribute with code, suggestions, or reporting bugs.",pt:"Esse projeto é open source e evolui com a comunidade! Contribua com código, sugestões ou reportando bugs.",es:"¡Este proyecto es open source y evoluciona con la comunidad! Contribuye con código, sugerencias o reportando errores.",zh:"这个项目是开源的，随着社区的发展而发展！贡献代码、建议或报告错误。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Contribute on Github",pt:"Contribua no Github",es:"Contribuye en Github",zh:"在 Github 上贡献"}}],Kg=_.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Qg=_.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,e8=_.div`
    display: flex;
    align-items: center;
    position: relative;
`,t8=_.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,r8=_(vh)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,n8=_.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,i8=_.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,o8=_.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`,a8=_.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,s8=_.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,l8=_.a`
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
`;function c8(){var s,l,c;const{i18n:e}=Lt(),{t}=Lt(),r=((s=e.language)==null?void 0:s.split("-")[0])||"en",n=L2.filter(d=>d.key!=="contribute_area"),o=L2.find(d=>d.key==="contribute_area");return a.jsxs(Kg,{id:"thanks",children:[a.jsx(Fa,{text:t("Thanks"),type:1}),n.map((d,f)=>a.jsxs(Qg,{children:[a.jsxs(e8,{children:[a.jsx(t8,{className:"circle"}),a.jsx(r8,{className:"heart"}),a.jsx(n8,{tabIndex:0,role:"button",onClick:()=>window.open(d.url,"_blank","noopener,noreferrer"),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&window.open(d.url,"_blank","noopener,noreferrer")},onMouseEnter:p=>{const v=p.target.parentNode;v.querySelector(".circle").style.opacity=0,v.querySelector(".heart").style.opacity=1},onMouseLeave:p=>{const v=p.target.parentNode;v.querySelector(".circle").style.opacity=.8,v.querySelector(".heart").style.opacity=0},children:d.title[r]||d.title.en})]}),a.jsx(i8,{children:d.text[r]||d.text.en})]},d.key)),o&&a.jsxs(o8,{children:[a.jsx(a8,{children:o.title[r]||o.title.en}),a.jsx(s8,{children:o.text[r]||o.text.en}),a.jsx(l8,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:((l=o.button)==null?void 0:l[r])||((c=o.button)==null?void 0:c.en)||"Github"})]})]})}const u8=_.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,d8=_.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,h8=_.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function xo({title:e,value:t,onChange:r}){return a.jsxs(u8,{children:[a.jsx(d8,{children:e}),a.jsx(h8,{placeholder:e,value:t,onChange:r})]})}const f8=_.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,p8=_.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,m8=_.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function P2({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return a.jsxs(f8,{children:[a.jsx(p8,{placeholder:e,value:e,onChange:r}),a.jsx(m8,{placeholder:e,value:t,onChange:n})]})}const g8=_.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,x8=_.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,v8=_.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,b8=_.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,w8=_.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function cs({title:e,value:t,onClick:r}){const n=k.useRef(null);return a.jsxs(g8,{"data-color-input":!0,children:[a.jsx(x8,{children:e}),a.jsxs(v8,{ref:n,onClick:()=>{const o=n.current.getBoundingClientRect();r({top:o.bottom+1+window.scrollY,left:o.left+window.scrollX})},children:[a.jsx(b8,{style:{backgroundColor:t}}),a.jsx(w8,{children:t})]})]})}function o1(){return(o1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function kh(e,t){if(e==null)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(o[r]=e[r]);return o}function Nc(e){var t=k.useRef(e),r=k.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var ks=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},ps=function(e){return"touches"in e},jc=function(e){return e&&e.ownerDocument.defaultView||self},T2=function(e,t,r){var n=e.getBoundingClientRect(),o=ps(t)?function(s,l){for(var c=0;c<s.length;c++)if(s[c].identifier===l)return s[c];return s[0]}(t.touches,r):t;return{left:ks((o.pageX-(n.left+jc(e).pageXOffset))/n.width),top:ks((o.pageY-(n.top+jc(e).pageYOffset))/n.height)}},E2=function(e){!ps(e)&&e.preventDefault()},Mh=qr.memo(function(e){var t=e.onMove,r=e.onKey,n=kh(e,["onMove","onKey"]),o=k.useRef(null),s=Nc(t),l=Nc(r),c=k.useRef(null),d=k.useRef(!1),f=k.useMemo(function(){var m=function(N){E2(N),(ps(N)?N.touches.length>0:N.buttons>0)&&o.current?s(T2(o.current,N,c.current)):y(!1)},b=function(){return y(!1)};function y(N){var C=d.current,L=jc(o.current),P=N?L.addEventListener:L.removeEventListener;P(C?"touchmove":"mousemove",m),P(C?"touchend":"mouseup",b)}return[function(N){var C=N.nativeEvent,L=o.current;if(L&&(E2(C),!function(D,U){return U&&!ps(D)}(C,d.current)&&L)){if(ps(C)){d.current=!0;var P=C.changedTouches||[];P.length&&(c.current=P[0].identifier)}L.focus(),s(T2(L,C,c.current)),y(!0)}},function(N){var C=N.which||N.keyCode;C<37||C>40||(N.preventDefault(),l({left:C===39?.05:C===37?-.05:0,top:C===40?.05:C===38?-.05:0}))},y]},[l,s]),p=f[0],v=f[1],A=f[2];return k.useEffect(function(){return A},[A]),qr.createElement("div",o1({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:o,onKeyDown:v,tabIndex:0,role:"slider"}))}),e0=function(e){return e.filter(Boolean).join(" ")},Nh=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,s=e0(["react-colorful__pointer",e.className]);return qr.createElement("div",{className:s,style:{top:100*o+"%",left:100*r+"%"}},qr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},Er=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},y8=function(e){return k8(Ic(e))},Ic=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Er(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Er(parseInt(e.substring(6,8),16)/255,2):1}},_8=function(e){return A8(S8(e))},C8=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:Er(e.h),s:Er(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:Er(o/2),a:Er(n,2)}},Lc=function(e){var t=C8(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},S8=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),l=n*(1-r),c=n*(1-(t-s)*r),d=n*(1-(1-t+s)*r),f=s%6;return{r:Er(255*[n,c,l,l,d,n][f]),g:Er(255*[d,n,n,c,l,l][f]),b:Er(255*[l,l,d,n,n,c][f]),a:Er(o,2)}},cl=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},A8=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=o<1?cl(Er(255*o)):"";return"#"+cl(t)+cl(r)+cl(n)+s},k8=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=Math.max(t,r,n),l=s-Math.min(t,r,n),c=l?s===t?(r-n)/l:s===r?2+(n-t)/l:4+(t-r)/l:0;return{h:Er(60*(c<0?c+6:c)),s:Er(s?l/s*100:0),v:Er(s/255*100),a:o}},M8=qr.memo(function(e){var t=e.hue,r=e.onChange,n=e0(["react-colorful__hue",e.className]);return qr.createElement("div",{className:n},qr.createElement(Mh,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:ks(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":Er(t),"aria-valuemax":"360","aria-valuemin":"0"},qr.createElement(Nh,{className:"react-colorful__hue-pointer",left:t/360,color:Lc({h:t,s:100,v:100,a:1})})))}),N8=qr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:Lc({h:t.h,s:100,v:100,a:1})};return qr.createElement("div",{className:"react-colorful__saturation",style:n},qr.createElement(Mh,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:ks(t.s+100*o.left,0,100),v:ks(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Er(t.s)+"%, Brightness "+Er(t.v)+"%"},qr.createElement(Nh,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:Lc(t)})))}),jh=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},j8=function(e,t){return e.toLowerCase()===t.toLowerCase()||jh(Ic(e),Ic(t))};function I8(e,t,r){var n=Nc(r),o=k.useState(function(){return e.toHsva(t)}),s=o[0],l=o[1],c=k.useRef({color:t,hsva:s});k.useEffect(function(){if(!e.equal(t,c.current.color)){var f=e.toHsva(t);c.current={hsva:f,color:t},l(f)}},[t,e]),k.useEffect(function(){var f;jh(s,c.current.hsva)||e.equal(f=e.fromHsva(s),c.current.color)||(c.current={hsva:s,color:f},n(f))},[s,e,n]);var d=k.useCallback(function(f){l(function(p){return Object.assign({},p,f)})},[]);return[s,d]}var L8=typeof window<"u"?k.useLayoutEffect:k.useEffect,P8=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},D2=new Map,T8=function(e){L8(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!D2.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,D2.set(t,r);var n=P8();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},E8=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,s=e.onChange,l=kh(e,["className","colorModel","color","onChange"]),c=k.useRef(null);T8(c);var d=I8(r,o,s),f=d[0],p=d[1],v=e0(["react-colorful",t]);return qr.createElement("div",o1({},l,{ref:c,className:v}),qr.createElement(N8,{hsva:f,onChange:p}),qr.createElement(M8,{hue:f.h,onChange:p,className:"react-colorful__last-control"}))},D8={defaultColor:"000",toHsva:y8,fromHsva:function(e){return _8({h:e.h,s:e.s,v:e.v,a:1})},equal:j8},R8=function(e){return qr.createElement(E8,o1({},e,{colorModel:D8}))};const O8=_.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,F8=_(R8)`
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
`,E1=_.div`
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
`,z8=_.div`
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
`,B8=_.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,U8=_.input`
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
`,H8=_(N4)`
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
`,$8=_(T4)`
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
`,q8=_(bh)`
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
`,V8=_(xh)`
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
`,Y8=_.img`
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
`;function G8({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:o,onClose:s}){const[l,c]=k.useState(e),[d,f]=k.useState(!1),[p,v]=k.useState(null),A=k.useRef(null),m=k.useRef(null);function b(){f(!d)}function y(P){c(P.target.value===""?"#":P.target.value)}function N(P){const D=A.current,H=m.current.getBoundingClientRect(),K=D.getContext("2d"),W=Math.floor(P.clientX-H.left),E=Math.floor(P.clientY-H.top),S=`#${[...K.getImageData(W,E,1,1).data].slice(0,3).map(T=>T.toString(16).padStart(2,"0")).join("")}`;c(S),b()}function C(P){const D=A.current,H=m.current.getBoundingClientRect(),K=Math.floor(P.clientX-H.left),W=Math.floor(P.clientY-H.top);if(D){const E=D.getContext("2d");try{const S=`#${[...E.getImageData(K,W,1,1).data].slice(0,3).map(T=>T.toString(16).padStart(2,"0")).join("")}`;v(S)}catch{v(null)}}}function L(){v(null)}return a.jsxs(O8,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[a.jsx("canvas",{ref:A,style:{display:"none"}}),d?a.jsx(Y8,{ref:m,crossOrigin:"anonymous",draggable:"false",src:t,onClick:N,onMouseMove:C,onMouseLeave:L,onLoad:()=>{const P=A.current,D=P.getContext("2d"),U=m.current;P.width=U.width,P.height=U.height,D.drawImage(U,0,0,U.width,U.height)},style:p?{borderColor:p}:{}}):a.jsx(F8,{color:l,onChange:c}),a.jsx(E1,{children:r.map(P=>a.jsx(z8,{style:{backgroundColor:P},onClick:()=>c(P)},P))}),a.jsxs(E1,{children:[a.jsx(B8,{children:"Hex"}),a.jsx(U8,{value:l,onChange:y})]}),a.jsxs(E1,{children:[d?a.jsx($8,{onClick:b}):a.jsx(H8,{onClick:b}),a.jsx(q8,{onClick:s}),a.jsx(V8,{onClick:()=>{o(l),v3(l)}})]})]})}const W8=_.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,X8=_.canvas`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: 2px solid var(--borderColor);
    background-color: var(--glassBackground);
    cursor: grab;
    
    &:active {
        cursor: grabbing;
    }
    
    animation: canvasFadeIn 0.3s ease-out forwards;
    opacity: 0;
    transform: scale(0.9);
    
    @keyframes canvasFadeIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`,ul=_.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    animation: sliderSlideIn 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
    
    @keyframes sliderSlideIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:nth-of-type(2) { animation-delay: 0.1s; }
    &:nth-of-type(3) { animation-delay: 0.2s; }
    &:nth-of-type(4) { animation-delay: 0.3s; }
`,dl=_.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,hl=_.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,fl=_.input`
    width: 50px;
    padding: 4px 6px;
    padding-right: 4px;
    font-size: 0.85em;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--textColor);
    text-align: center;
    outline: none;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: var(--glassBackground);
        border-color: var(--borderColor);
    }
    
    &:focus {
        background-color: var(--glassBackground);
        border-color: var(--AccentColor);
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`,pl=_.input`
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: var(--glassBackground);
    outline: none;
    border: 1px solid var(--borderColor);
    -webkit-appearance: none;
    appearance: none;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--textColor);
        cursor: pointer;
        transition: all 0.2s ease;
        border: 2px solid var(--backgroundColor);
        
        &:hover {
            transform: scale(1.2);
            background: var(--AccentColor);
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
    
    &::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--textColor);
        cursor: pointer;
        transition: all 0.2s ease;
        border: 2px solid var(--backgroundColor);
        
        &:hover {
            transform: scale(1.2);
            background: var(--AccentColor);
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
`,Z8=_.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;
    
    animation: buttonsSlideIn 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(10px);
    animation-delay: 0.4s;
    
    @keyframes buttonsSlideIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,J8=_(bh)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
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
`,K8=_(xh)`
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
`;function Q8({position:e,albumCoverUrl:t,initialZoom:r=0,initialHorizontalPosition:n=0,initialVerticalPosition:o=0,initialBlur:s=0,onDone:l,onClose:c}){const{t:d}=Lt(),[f,p]=k.useState(r),[v,A]=k.useState(n),[m,b]=k.useState(o),[y,N]=k.useState(s),C=k.useRef(null),L=k.useRef(null),P=k.useRef(!1),D=k.useRef({x:0,y:0});k.useEffect(()=>{if(t){const E=new Image;E.crossOrigin="anonymous",E.src=t,E.onload=()=>{L.current=E,W()}}},[t]),k.useEffect(()=>{W()},[f,v,m,y]);const U=E=>{const J=C.current;if(!J)return;const S=J.getBoundingClientRect(),T=E.clientX-S.left,q=E.clientY-S.top,$=J.width,ne=J.height,ce=Math.min($,ne),pe=1+f/100,ae=ce*pe,ve=$/2,we=ne/2,re=$/2*(v/50),M=ne/2*(m/50),z=ve-ae/2+re,X=we-ae/2+M;T>=z&&T<=z+ae&&q>=X&&q<=X+ae&&(P.current=!0,D.current={x:T,y:q},J.style.cursor="grabbing")},H=E=>{if(!P.current)return;const J=C.current;if(!J)return;const S=J.getBoundingClientRect(),T=E.clientX-S.left,q=E.clientY-S.top,$=T-D.current.x,ne=q-D.current.y;D.current={x:T,y:q};const ce=J.width,pe=J.height,ae=v+$/(ce/2)*50,ve=m+ne/(pe/2)*50;A(Math.max(-50,Math.min(50,ae))),b(Math.max(-50,Math.min(50,ve)))},K=()=>{P.current=!1;const E=C.current;E&&(E.style.cursor="grab")};k.useEffect(()=>{const E=C.current;if(E)return E.addEventListener("mousedown",U),window.addEventListener("mousemove",H),window.addEventListener("mouseup",K),()=>{E.removeEventListener("mousedown",U),window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",K)}},[f,v,m,y]);const W=()=>{const E=C.current;if(!E)return;const J=E.getContext("2d"),S=E.width,T=E.height;J.clearRect(0,0,S,T);const q=Math.min(S,T),$=1+f/100,ne=q*$,ce=S/2,pe=T/2,ae=S/2*(v/50),ve=T/2*(m/50),we=ce-ne/2+ae,re=pe-ne/2+ve;L.current&&(J.filter=`blur(${y/5}px)`,J.drawImage(L.current,we,re,ne,ne),J.filter="none")};return a.jsxs(W8,{style:{position:"absolute",top:e.top,left:e.left,zIndex:2147483647},children:[a.jsx(X8,{ref:C,width:200,height:200}),a.jsxs(ul,{children:[a.jsxs(dl,{children:[a.jsx(hl,{children:d("COVER_EDITOR_Size")}),a.jsx(fl,{type:"number",value:f,onChange:E=>p(parseInt(E.target.value)||0)})]}),a.jsx(pl,{type:"range",min:"-100",max:"100",step:"1",value:f,onChange:E=>p(Number(E.target.value))})]}),a.jsxs(ul,{children:[a.jsxs(dl,{children:[a.jsx(hl,{children:d("COVER_EDITOR_Blur")}),a.jsx(fl,{type:"number",value:y,onChange:E=>N(parseInt(E.target.value)||0)})]}),a.jsx(pl,{type:"range",min:"0",max:"20",step:"1",value:y,onChange:E=>N(Number(E.target.value))})]}),a.jsxs(ul,{children:[a.jsxs(dl,{children:[a.jsx(hl,{children:d("COVER_EDITOR_HorizontalPosition")}),a.jsx(fl,{type:"number",value:v,onChange:E=>A(parseInt(E.target.value)||0)})]}),a.jsx(pl,{type:"range",min:"-50",max:"50",step:"1",value:v,onChange:E=>A(Number(E.target.value))})]}),a.jsxs(ul,{children:[a.jsxs(dl,{children:[a.jsx(hl,{children:d("COVER_EDITOR_VerticalPosition")}),a.jsx(fl,{type:"number",value:m,onChange:E=>b(parseInt(E.target.value)||0)})]}),a.jsx(pl,{type:"range",min:"-50",max:"50",step:"1",value:m,onChange:E=>b(Number(E.target.value))})]}),a.jsxs(Z8,{children:[a.jsx(J8,{onClick:c}),a.jsx(K8,{onClick:()=>l({zoom:f,horizontalPosition:v,verticalPosition:m,blur:y})})]})]})}const e7=_.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,t7=_.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,r7=_.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,n7=_.input`
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
`,i7=_.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function us({title:e,text:t,value:r,onChange:n}){const o=()=>n(!r);return a.jsxs(e7,{children:[a.jsx(t7,{children:e}),a.jsxs(r7,{onClick:o,children:[a.jsx(n7,{checked:r,readOnly:!0,type:"checkbox"}),a.jsx(i7,{active:r,children:t})]})]})}const o7=_.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,a7=_.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,s7=_.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,l7=_.input`
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
`,c7=_.p`
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
`;function R2({title:e,text:t,onChange:r,accept:n="image/png, image/jpg, image/jpeg",icon:o}){const s=k.useRef(),l=()=>{s.current.click()},c=d=>{const f=d.target.files[0];t=f.name,f&&r(f)};return a.jsxs(o7,{onClick:l,children:[a.jsx(a7,{children:e}),a.jsxs(s7,{children:[o&&a.jsx(o,{style:{width:"16px",height:"16px",marginLeft:"10px"}}),a.jsx(l7,{ref:s,type:"file",accept:n,onChange:c}),a.jsx(c7,{active:!0,children:t})]})]})}const u7=_.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,d7=_.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,h7=_.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s;
    
    &:hover {
        opacity: 0.8;
    }
`,f7=_.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,p7=_.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function m7({title:e,text:t,onClick:r,icon:n}){const o=k.useRef(null);return a.jsxs(u7,{children:[a.jsx(d7,{children:e}),a.jsxs(h7,{ref:o,onClick:()=>{const s=o.current.getBoundingClientRect();r({top:s.bottom+1+window.scrollY,left:s.left+window.scrollX})},children:[n&&a.jsx(f7,{children:a.jsx(n,{})}),a.jsx(p7,{children:t})]})]})}function g7(e){return et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function x7(e){return et({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}function v7(e){return et({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},child:[]}]})(e)}const b7=_.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,w7=_.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,y7=_.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,_7=_(n1)`
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
`;function Ih(){const{t:e}=Lt();return a.jsxs(b7,{children:[a.jsx(_7,{}),a.jsx(w7,{children:e("Loading")}),a.jsx(y7,{children:e("LoadingText")})]})}var Lh={},a1={},Ph={exports:{}},C7="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S7=C7,A7=S7;function Th(){}function Eh(){}Eh.resetWarningCache=Th;var k7=function(){function e(n,o,s,l,c,d){if(d!==A7){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Eh,resetWarningCache:Th};return r.PropTypes=r,r};Ph.exports=k7();var Dh=Ph.exports,t0={},s1={},Rh={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(S5,function(){var r=function(d,f){return d<f?-1:d>f?1:0},n=function(d){return d.reduce(function(f,p){return f+p},0)},o=function(){function d(p){this.colors=p}var f=d.prototype;return f.palette=function(){return this.colors},f.map=function(p){return p},d}(),s=function(){function d(m,b,y){return(m<<10)+(b<<5)+y}function f(m){var b=[],y=!1;function N(){b.sort(m),y=!0}return{push:function(C){b.push(C),y=!1},peek:function(C){return y||N(),C===void 0&&(C=b.length-1),b[C]},pop:function(){return y||N(),b.pop()},size:function(){return b.length},map:function(C){return b.map(C)},debug:function(){return y||N(),b}}}function p(m,b,y,N,C,L,P){var D=this;D.r1=m,D.r2=b,D.g1=y,D.g2=N,D.b1=C,D.b2=L,D.histo=P}function v(){this.vboxes=new f(function(m,b){return r(m.vbox.count()*m.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function A(m,b){if(b.count()){var y=b.r2-b.r1+1,N=b.g2-b.g1+1,C=Math.max.apply(null,[y,N,b.b2-b.b1+1]);if(b.count()==1)return[b.copy()];var L,P,D,U,H=0,K=[],W=[];if(C==y)for(L=b.r1;L<=b.r2;L++){for(U=0,P=b.g1;P<=b.g2;P++)for(D=b.b1;D<=b.b2;D++)U+=m[d(L,P,D)]||0;K[L]=H+=U}else if(C==N)for(L=b.g1;L<=b.g2;L++){for(U=0,P=b.r1;P<=b.r2;P++)for(D=b.b1;D<=b.b2;D++)U+=m[d(P,L,D)]||0;K[L]=H+=U}else for(L=b.b1;L<=b.b2;L++){for(U=0,P=b.r1;P<=b.r2;P++)for(D=b.g1;D<=b.g2;D++)U+=m[d(P,D,L)]||0;K[L]=H+=U}return K.forEach(function(E,J){W[J]=H-E}),function(E){var J,S,T,q,$,ne=E+"1",ce=E+"2",pe=0;for(L=b[ne];L<=b[ce];L++)if(K[L]>H/2){for(T=b.copy(),q=b.copy(),$=(J=L-b[ne])<=(S=b[ce]-L)?Math.min(b[ce]-1,~~(L+S/2)):Math.max(b[ne],~~(L-1-J/2));!K[$];)$++;for(pe=W[$];!pe&&K[$-1];)pe=W[--$];return T[ce]=$,q[ne]=T[ce]+1,[T,q]}}(C==y?"r":C==N?"g":"b")}}return p.prototype={volume:function(m){var b=this;return b._volume&&!m||(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(m){var b=this,y=b.histo;if(!b._count_set||m){var N,C,L,P=0;for(N=b.r1;N<=b.r2;N++)for(C=b.g1;C<=b.g2;C++)for(L=b.b1;L<=b.b2;L++)P+=y[d(N,C,L)]||0;b._count=P,b._count_set=!0}return b._count},copy:function(){var m=this;return new p(m.r1,m.r2,m.g1,m.g2,m.b1,m.b2,m.histo)},avg:function(m){var b=this,y=b.histo;if(!b._avg||m){var N,C,L,P,D=0,U=0,H=0,K=0;if(b.r1===b.r2&&b.g1===b.g2&&b.b1===b.b2)b._avg=[b.r1<<3,b.g1<<3,b.b1<<3];else{for(C=b.r1;C<=b.r2;C++)for(L=b.g1;L<=b.g2;L++)for(P=b.b1;P<=b.b2;P++)D+=N=y[d(C,L,P)]||0,U+=N*(C+.5)*8,H+=N*(L+.5)*8,K+=N*(P+.5)*8;b._avg=D?[~~(U/D),~~(H/D),~~(K/D)]:[~~(8*(b.r1+b.r2+1)/2),~~(8*(b.g1+b.g2+1)/2),~~(8*(b.b1+b.b2+1)/2)]}}return b._avg},contains:function(m){var b=this,y=m[0]>>3;return gval=m[1]>>3,bval=m[2]>>3,y>=b.r1&&y<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},v.prototype={push:function(m){this.vboxes.push({vbox:m,color:m.avg()})},palette:function(){return this.vboxes.map(function(m){return m.color})},size:function(){return this.vboxes.size()},map:function(m){for(var b=this.vboxes,y=0;y<b.size();y++)if(b.peek(y).vbox.contains(m))return b.peek(y).color;return this.nearest(m)},nearest:function(m){for(var b,y,N,C=this.vboxes,L=0;L<C.size();L++)((y=Math.sqrt(Math.pow(m[0]-C.peek(L).color[0],2)+Math.pow(m[1]-C.peek(L).color[1],2)+Math.pow(m[2]-C.peek(L).color[2],2)))<b||b===void 0)&&(b=y,N=C.peek(L).color);return N},forcebw:function(){var m=this.vboxes;m.sort(function(C,L){return r(n(C.color),n(L.color))});var b=m[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(m[0].color=[0,0,0]);var y=m.length-1,N=m[y].color;N[0]>251&&N[1]>251&&N[2]>251&&(m[y].color=[255,255,255])}},{quantize:function(m,b){if(!Number.isInteger(b)||b<1||b>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!m.length||b<2||b>256||!m.length||b<2||b>256)return!1;for(var y=[],N=new Set,C=0;C<m.length;C++){var L=m[C],P=L.join(",");N.has(P)||(N.add(P),y.push(L))}if(y.length<=b)return new o(y);var D=function(J){var S,T=new Array(32768);return J.forEach(function(q){S=d(q[0]>>3,q[1]>>3,q[2]>>3),T[S]=(T[S]||0)+1}),T}(m);D.forEach(function(){});var U=function(J,S){var T,q,$,ne=1e6,ce=0,pe=1e6,ae=0,ve=1e6,we=0;return J.forEach(function(re){(T=re[0]>>3)<ne?ne=T:T>ce&&(ce=T),(q=re[1]>>3)<pe?pe=q:q>ae&&(ae=q),($=re[2]>>3)<ve?ve=$:$>we&&(we=$)}),new p(ne,ce,pe,ae,ve,we,S)}(m,D),H=new f(function(J,S){return r(J.count(),S.count())});function K(J,S){for(var T,q=J.size(),$=0;$<1e3;){if(q>=S||$++>1e3)return;if((T=J.pop()).count()){var ne=A(D,T),ce=ne[0],pe=ne[1];if(!ce)return;J.push(ce),pe&&(J.push(pe),q++)}else J.push(T),$++}}H.push(U),K(H,.75*b);for(var W=new f(function(J,S){return r(J.count()*J.volume(),S.count()*S.volume())});H.size();)W.push(H.pop());K(W,b);for(var E=new v;W.size();)E.push(W.pop());return E}}}().quantize,l=function(d){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=d.naturalWidth,this.height=this.canvas.height=d.naturalHeight,this.context.drawImage(d,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var c=function(){};return c.prototype.getColor=function(d,f){return f===void 0&&(f=10),this.getPalette(d,5,f)[0]},c.prototype.getPalette=function(d,f,p){var v=function(y){var N=y.colorCount,C=y.quality;if(N!==void 0&&Number.isInteger(N)){if(N===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");N=Math.max(N,2),N=Math.min(N,20)}else N=10;return(C===void 0||!Number.isInteger(C)||C<1)&&(C=10),{colorCount:N,quality:C}}({colorCount:f,quality:p}),A=new l(d),m=function(y,N,C){for(var L,P,D,U,H,K=y,W=[],E=0;E<N;E+=C)P=K[0+(L=4*E)],D=K[L+1],U=K[L+2],((H=K[L+3])===void 0||H>=125)&&(P>250&&D>250&&U>250||W.push([P,D,U]));return W}(A.getImageData().data,A.width*A.height,v.quality),b=s(m,v.colorCount);return b?b.palette():null},c.prototype.getColorFromUrl=function(d,f,p){var v=this,A=document.createElement("img");A.addEventListener("load",function(){var m=v.getPalette(A,5,p);f(m[0],d)}),A.src=d},c.prototype.getImageData=function(d,f){var p=new XMLHttpRequest;p.open("GET",d,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var v=new Uint8Array(this.response);i=v.length;for(var A=new Array(i),m=0;m<v.length;m++)A[m]=String.fromCharCode(v[m]);var b=A.join(""),y=window.btoa(b);f("data:image/png;base64,"+y)}},p.send()},c.prototype.getColorAsync=function(d,f,p){var v=this;this.getImageData(d,function(A){var m=document.createElement("img");m.addEventListener("load",function(){var b=v.getPalette(m,5,p);f(b[0],this)}),m.src=A})},c})})(Rh);var Oh=Rh.exports,l1={},r0={};Object.defineProperty(r0,"__esModule",{value:!0});r0.default=M7;function M7(e,t,r){return`rgb(${e}, ${t}, ${r})`}var n0={};Object.defineProperty(n0,"__esModule",{value:!0});n0.default=N7;function N7(e,t,r){return`#${[e,t,r].map(n=>{const o=n.toString(16);return o.length===1?`0${o}`:o}).join("")}`}Object.defineProperty(l1,"__esModule",{value:!0});l1.default=L7;var j7=Fh(r0),I7=Fh(n0);function Fh(e){return e&&e.__esModule?e:{default:e}}function L7(e,t){switch(t){case"rgbString":return(0,j7.default)(e[0],e[1],e[2]);case"hex":return(0,I7.default)(e[0],e[1],e[2]);default:return e}}var c1={};Object.defineProperty(c1,"__esModule",{value:!0});c1.default=P7;function P7(e,t=void 0){return new Promise((r,n)=>{const o=new Image;o.addEventListener("load",()=>{r(o)}),o.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),o.crossOrigin=t,o.src=e})}Object.defineProperty(s1,"__esModule",{value:!0});s1.default=R7;var T7=i0(Oh),E7=i0(l1),D7=i0(c1);function i0(e){return e&&e.__esModule?e:{default:e}}async function R7(e,t="rgbString",r=null,n=10){const o=await(0,D7.default)(e,r),l=new T7.default().getColor(o,n);return(0,E7.default)(l,t)}Object.defineProperty(t0,"__esModule",{value:!0});t0.default=B7;var O2=k,O7=F7(s1);function F7(e){return e&&e.__esModule?e:{default:e}}const zh={loading:!0,data:null,error:void 0};function z7(e,t){switch(t.type){case"getColor":return zh;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function B7(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:o=10}=r,[s,l]=(0,O2.useReducer)(z7,zh);return(0,O2.useEffect)(()=>{l({type:"getColor"}),(0,O7.default)(e,t,n,o).then(c=>{l({type:"resolveColor",payload:c})}).catch(c=>{l({type:"rejectColor",payload:c})})},[e]),s}Object.defineProperty(a1,"__esModule",{value:!0});a1.default=void 0;var F2=o0(k),ds=o0(Dh),U7=o0(t0);function o0(e){return e&&e.__esModule?e:{default:e}}const a0=({src:e,format:t,crossOrigin:r,quality:n,children:o})=>{const s=(0,U7.default)(e,t,{crossOrigin:r,quality:n});return F2.default.createElement(F2.default.Fragment,null,o(s))};a0.defaultProps={format:"rgbString",crossOrigin:null,quality:10};a0.propTypes={children:ds.default.any.isRequired,src:ds.default.string.isRequired,format:ds.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:ds.default.string,quality:ds.default.number};var H7=a0;a1.default=H7;var u1={},s0={},d1={};Object.defineProperty(d1,"__esModule",{value:!0});d1.default=Y7;var $7=l0(Oh),q7=l0(l1),V7=l0(c1);function l0(e){return e&&e.__esModule?e:{default:e}}async function Y7(e,t=2,r="rgbString",n=null,o=10){const s=await(0,V7.default)(e,n);return new $7.default().getPalette(s,t,o).map(d=>(0,q7.default)(d,r))}Object.defineProperty(s0,"__esModule",{value:!0});s0.default=Z7;var z2=k,G7=W7(d1);function W7(e){return e&&e.__esModule?e:{default:e}}const Bh={loading:!0,data:[],error:void 0};function X7(e,t){switch(t.type){case"getPalette":return Bh;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function Z7(e,t=2,r="rgbString",n={}){const{crossOrigin:o=null,quality:s=10}=n,[l,c]=(0,z2.useReducer)(X7,Bh);return(0,z2.useEffect)(()=>{c({type:"getPalette"}),(0,G7.default)(e,t,r,o,s).then(d=>{c({type:"resolvePalette",payload:d})}).catch(d=>{c({type:"rejectPalette",payload:d})})},[e]),l}Object.defineProperty(u1,"__esModule",{value:!0});u1.default=void 0;var B2=c0(k),ba=c0(Dh),J7=c0(s0);function c0(e){return e&&e.__esModule?e:{default:e}}const u0=({src:e,colorCount:t,format:r,crossOrigin:n,quality:o,children:s})=>{const l=(0,J7.default)(e,t,r,{crossOrigin:n,quality:o});return B2.default.createElement(B2.default.Fragment,null,s(l))};u0.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};u0.propTypes={children:ba.default.any.isRequired,src:ba.default.string.isRequired,format:ba.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:ba.default.number,crossOrigin:ba.default.string,quality:ba.default.number};var K7=u0;u1.default=K7;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return o.default}}),e.default=void 0;var t=s(a1),r=s(u1),n=s(s1),o=s(d1);function s(c){return c&&c.__esModule?c:{default:c}}var l=t.default;e.default=l})(Lh);const Q7=_.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Jt({children:e,animationDelay:t=0,...r}){const[n,o]=k.useState(!1);return k.useEffect(()=>{const s=setTimeout(()=>{o(!0)},t);return()=>clearTimeout(s)},[t]),a.jsx(Q7,{visible:n,animationDelay:t,...r,children:e})}const ex="modulepreload",tx=function(e){return"/"+e},U2={},D1=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(r.map(d=>{if(d=tx(d),d in U2)return;U2[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":ex,f||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),f)return new Promise((A,m)=>{v.addEventListener("load",A),v.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};function zt(e){"@babel/helpers - typeof";return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zt(e)}var Wn=Uint8Array,_n=Uint16Array,d0=Int32Array,h0=new Wn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),f0=new Wn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),H2=new Wn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Uh=function(e,t){for(var r=new _n(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new d0(r[30]),n=1;n<30;++n)for(var s=r[n];s<r[n+1];++s)o[s]=s-r[n]<<5|n;return{b:r,r:o}},Hh=Uh(h0,2),rx=Hh.b,Pc=Hh.r;rx[28]=258,Pc[258]=28;var nx=Uh(f0,0),$2=nx.r,Tc=new _n(32768);for(var Zt=0;Zt<32768;++Zt){var vo=(Zt&43690)>>1|(Zt&21845)<<1;vo=(vo&52428)>>2|(vo&13107)<<2,vo=(vo&61680)>>4|(vo&3855)<<4,Tc[Zt]=((vo&65280)>>8|(vo&255)<<8)>>1}var ms=function(e,t,r){for(var n=e.length,o=0,s=new _n(t);o<n;++o)e[o]&&++s[e[o]-1];var l=new _n(t);for(o=1;o<t;++o)l[o]=l[o-1]+s[o-1]<<1;var c;if(r){c=new _n(1<<t);var d=15-t;for(o=0;o<n;++o)if(e[o])for(var f=o<<4|e[o],p=t-e[o],v=l[e[o]-1]++<<p,A=v|(1<<p)-1;v<=A;++v)c[Tc[v]>>d]=f}else for(c=new _n(n),o=0;o<n;++o)e[o]&&(c[o]=Tc[l[e[o]-1]++]>>15-e[o]);return c},ea=new Wn(288);for(var Zt=0;Zt<144;++Zt)ea[Zt]=8;for(var Zt=144;Zt<256;++Zt)ea[Zt]=9;for(var Zt=256;Zt<280;++Zt)ea[Zt]=7;for(var Zt=280;Zt<288;++Zt)ea[Zt]=8;var Gl=new Wn(32);for(var Zt=0;Zt<32;++Zt)Gl[Zt]=5;var ix=ms(ea,9,0),ox=ms(Gl,5,0),$h=function(e){return(e+7)/8|0},ax=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Wn(e.subarray(t,r))},Di=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},hs=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},R1=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,s=r.slice();if(!o)return{t:Vh,l:0};if(o==1){var l=new Wn(r[0].s+1);return l[r[0].s]=1,{t:l,l:1}}r.sort(function(U,H){return U.f-H.f}),r.push({s:-1,f:25001});var c=r[0],d=r[1],f=0,p=1,v=2;for(r[0]={s:-1,f:c.f+d.f,l:c,r:d};p!=o-1;)c=r[r[f].f<r[v].f?f++:v++],d=r[f!=p&&r[f].f<r[v].f?f++:v++],r[p++]={s:-1,f:c.f+d.f,l:c,r:d};for(var A=s[0].s,n=1;n<o;++n)s[n].s>A&&(A=s[n].s);var m=new _n(A+1),b=Ec(r[p-1],m,0);if(b>t){var n=0,y=0,N=b-t,C=1<<N;for(s.sort(function(H,K){return m[K.s]-m[H.s]||H.f-K.f});n<o;++n){var L=s[n].s;if(m[L]>t)y+=C-(1<<b-m[L]),m[L]=t;else break}for(y>>=N;y>0;){var P=s[n].s;m[P]<t?y-=1<<t-m[P]++-1:++n}for(;n>=0&&y;--n){var D=s[n].s;m[D]==t&&(--m[D],++y)}b=t}return{t:new Wn(m),l:b}},Ec=function(e,t,r){return e.s==-1?Math.max(Ec(e.l,t,r+1),Ec(e.r,t,r+1)):t[e.s]=r},q2=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new _n(++t),n=0,o=e[0],s=1,l=function(d){r[n++]=d},c=1;c<=t;++c)if(e[c]==o&&c!=t)++s;else{if(!o&&s>2){for(;s>138;s-=138)l(32754);s>2&&(l(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(l(o),--s;s>6;s-=6)l(8304);s>2&&(l(s-3<<5|8208),s=0)}for(;s--;)l(o);s=1,o=e[c]}return{c:r.subarray(0,n),n:t}},fs=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},qh=function(e,t,r){var n=r.length,o=$h(t+2);e[o]=n&255,e[o+1]=n>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var s=0;s<n;++s)e[o+s+4]=r[s];return(o+4+n)*8},V2=function(e,t,r,n,o,s,l,c,d,f,p){Di(t,p++,r),++o[256];for(var v=R1(o,15),A=v.t,m=v.l,b=R1(s,15),y=b.t,N=b.l,C=q2(A),L=C.c,P=C.n,D=q2(y),U=D.c,H=D.n,K=new _n(19),W=0;W<L.length;++W)++K[L[W]&31];for(var W=0;W<U.length;++W)++K[U[W]&31];for(var E=R1(K,7),J=E.t,S=E.l,T=19;T>4&&!J[H2[T-1]];--T);var q=f+5<<3,$=fs(o,ea)+fs(s,Gl)+l,ne=fs(o,A)+fs(s,y)+l+14+3*T+fs(K,J)+2*K[16]+3*K[17]+7*K[18];if(d>=0&&q<=$&&q<=ne)return qh(t,p,e.subarray(d,d+f));var ce,pe,ae,ve;if(Di(t,p,1+(ne<$)),p+=2,ne<$){ce=ms(A,m,0),pe=A,ae=ms(y,N,0),ve=y;var we=ms(J,S,0);Di(t,p,P-257),Di(t,p+5,H-1),Di(t,p+10,T-4),p+=14;for(var W=0;W<T;++W)Di(t,p+3*W,J[H2[W]]);p+=3*T;for(var re=[L,U],M=0;M<2;++M)for(var z=re[M],W=0;W<z.length;++W){var X=z[W]&31;Di(t,p,we[X]),p+=J[X],X>15&&(Di(t,p,z[W]>>5&127),p+=z[W]>>12)}}else ce=ix,pe=ea,ae=ox,ve=Gl;for(var W=0;W<c;++W){var Q=n[W];if(Q>255){var X=Q>>18&31;hs(t,p,ce[X+257]),p+=pe[X+257],X>7&&(Di(t,p,Q>>23&31),p+=h0[X]);var ee=Q&31;hs(t,p,ae[ee]),p+=ve[ee],ee>3&&(hs(t,p,Q>>5&8191),p+=f0[ee])}else hs(t,p,ce[Q]),p+=pe[Q]}return hs(t,p,ce[256]),p+pe[256]},sx=new d0([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Vh=new Wn(0),lx=function(e,t,r,n,o,s){var l=s.z||e.length,c=new Wn(n+l+5*(1+Math.ceil(l/7e3))+o),d=c.subarray(n,c.length-o),f=s.l,p=(s.r||0)&7;if(t){p&&(d[0]=s.r>>3);for(var v=sx[t-1],A=v>>13,m=v&8191,b=(1<<r)-1,y=s.p||new _n(32768),N=s.h||new _n(b+1),C=Math.ceil(r/3),L=2*C,P=function(be){return(e[be]^e[be+1]<<C^e[be+2]<<L)&b},D=new d0(25e3),U=new _n(288),H=new _n(32),K=0,W=0,E=s.i||0,J=0,S=s.w||0,T=0;E+2<l;++E){var q=P(E),$=E&32767,ne=N[q];if(y[$]=ne,N[q]=$,S<=E){var ce=l-E;if((K>7e3||J>24576)&&(ce>423||!f)){p=V2(e,d,0,D,U,H,W,J,T,E-T,p),J=K=W=0,T=E;for(var pe=0;pe<286;++pe)U[pe]=0;for(var pe=0;pe<30;++pe)H[pe]=0}var ae=2,ve=0,we=m,re=$-ne&32767;if(ce>2&&q==P(E-re))for(var M=Math.min(A,ce)-1,z=Math.min(32767,E),X=Math.min(258,ce);re<=z&&--we&&$!=ne;){if(e[E+ae]==e[E+ae-re]){for(var Q=0;Q<X&&e[E+Q]==e[E+Q-re];++Q);if(Q>ae){if(ae=Q,ve=re,Q>M)break;for(var ee=Math.min(re,Q-2),se=0,pe=0;pe<ee;++pe){var fe=E-re+pe&32767,ie=y[fe],xe=fe-ie&32767;xe>se&&(se=xe,ne=fe)}}}$=ne,ne=y[$],re+=$-ne&32767}if(ve){D[J++]=268435456|Pc[ae]<<18|$2[ve];var _e=Pc[ae]&31,Le=$2[ve]&31;W+=h0[_e]+f0[Le],++U[257+_e],++H[Le],S=E+ae,++K}else D[J++]=e[E],++U[e[E]]}}for(E=Math.max(E,S);E<l;++E)D[J++]=e[E],++U[e[E]];p=V2(e,d,f,D,U,H,W,J,T,E-T,p),f||(s.r=p&7|d[p/8|0]<<3,p-=7,s.h=N,s.p=y,s.i=E,s.w=S)}else{for(var E=s.w||0;E<l+f;E+=65535){var Pe=E+65535;Pe>=l&&(d[p/8|0]=f,Pe=l),p=qh(d,p+1,e.subarray(E,Pe))}s.i=l}return ax(c,0,n+$h(p)+o)},Yh=function(){var e=1,t=0;return{p:function(r){for(var n=e,o=t,s=r.length|0,l=0;l!=s;){for(var c=Math.min(l+2655,s);l<c;++l)o+=n+=r[l];n=(n&65535)+15*(n>>16),o=(o&65535)+15*(o>>16)}e=n,t=o},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},cx=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),l=new Wn(s.length+e.length);l.set(s),l.set(e,s.length),e=l,o.w=s.length}return lx(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,o)},Gh=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},ux=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var o=Yh();o.p(t.dictionary),Gh(e,2,o.d())}};function Dc(e,t){t||(t={});var r=Yh();r.p(e);var n=cx(e,t,t.dictionary?6:2,4);return ux(n,t),Gh(n,n.length-4,r.d()),n}var dx=typeof TextDecoder<"u"&&new TextDecoder,hx=0;try{dx.decode(Vh,{stream:!0}),hx=1}catch{}function fx(e){if(Array.isArray(e))return e}function px(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,s,l,c=[],d=!0,f=!1;try{if(s=(r=r.call(e)).next,t!==0)for(;!(d=(n=s.call(r)).done)&&(c.push(n.value),c.length!==t);d=!0);}catch(p){f=!0,o=p}finally{try{if(!d&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(f)throw o}}return c}}function Y2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function mx(e,t){if(e){if(typeof e=="string")return Y2(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y2(e,t):void 0}}function gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G2(e,t){return fx(e)||px(e,t)||mx(e,t)||gx()}function W2(e,t="utf8"){return new TextDecoder(t).decode(e)}const xx=new TextEncoder;function vx(e){return xx.encode(e)}const bx=1024*8,wx=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),O1={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class p0{constructor(t=bx,r={}){Te(this,"buffer");Te(this,"byteLength");Te(this,"byteOffset");Te(this,"length");Te(this,"offset");Te(this,"lastWrittenByte");Te(this,"littleEndian");Te(this,"_data");Te(this,"_mark");Te(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const o=r.offset?r.offset>>>0:0,s=t.byteLength-o;let l=o;(ArrayBuffer.isView(t)||t instanceof p0)&&(t.byteLength!==t.buffer.byteLength&&(l=t.byteOffset+o),t=t.buffer),n?this.lastWrittenByte=s:this.lastWrittenByte=0,this.buffer=t,this.length=s,this.byteLength=s,this.byteOffset=l,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,l,s),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,o=new Uint8Array(n);o.set(new Uint8Array(this.buffer)),this.buffer=o.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=O1[r].BYTES_PER_ELEMENT*t,o=this.byteOffset+this.offset,s=this.buffer.slice(o,o+n);if(this.littleEndian===wx&&r!=="uint8"&&r!=="int8"){const c=new Uint8Array(this.buffer.slice(o,o+n));c.reverse();const d=new O1[r](c.buffer);return this.offset+=n,d.reverse(),d}const l=new O1[r](s);return this.offset+=n,l}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return W2(this.readBytes(t))}decodeText(t=1,r="utf8"){return W2(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(vx(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function za(e){let t=e.length;for(;--t>=0;)e[t]=0}const yx=3,_x=258,Wh=29,Cx=256,Sx=Cx+1+Wh,Xh=30,Ax=512,kx=new Array((Sx+2)*2);za(kx);const Mx=new Array(Xh*2);za(Mx);const Nx=new Array(Ax);za(Nx);const jx=new Array(_x-yx+1);za(jx);const Ix=new Array(Wh);za(Ix);const Lx=new Array(Xh);za(Lx);const Px=(e,t,r,n)=>{let o=e&65535|0,s=e>>>16&65535|0,l=0;for(;r!==0;){l=r>2e3?2e3:r,r-=l;do o=o+t[n++]|0,s=s+o|0;while(--l);o%=65521,s%=65521}return o|s<<16|0};var Rc=Px;const Tx=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},Ex=new Uint32Array(Tx()),Dx=(e,t,r,n)=>{const o=Ex,s=n+r;e^=-1;for(let l=n;l<s;l++)e=e>>>8^o[(e^t[l])&255];return e^-1};var hi=Dx,Oc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Zh={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const Rx=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Ox=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)Rx(r,n)&&(e[n]=r[n])}}return e},Fx=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,o=0,s=e.length;n<s;n++){let l=e[n];r.set(l,o),o+=l.length}return r},Jh={assign:Ox,flattenChunks:Fx};let Kh=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Kh=!1}const Ms=new Uint8Array(256);for(let e=0;e<256;e++)Ms[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ms[254]=Ms[254]=1;var zx=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,o,s,l=e.length,c=0;for(o=0;o<l;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<l&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(c),s=0,o=0;s<c;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<l&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),r<128?t[s++]=r:r<2048?(t[s++]=192|r>>>6,t[s++]=128|r&63):r<65536?(t[s++]=224|r>>>12,t[s++]=128|r>>>6&63,t[s++]=128|r&63):(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63,t[s++]=128|r>>>6&63,t[s++]=128|r&63);return t};const Bx=(e,t)=>{if(t<65534&&e.subarray&&Kh)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var Ux=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,o;const s=new Array(r*2);for(o=0,n=0;n<r;){let l=e[n++];if(l<128){s[o++]=l;continue}let c=Ms[l];if(c>4){s[o++]=65533,n+=c-1;continue}for(l&=c===2?31:c===3?15:7;c>1&&n<r;)l=l<<6|e[n++]&63,c--;if(c>1){s[o++]=65533;continue}l<65536?s[o++]=l:(l-=65536,s[o++]=55296|l>>10&1023,s[o++]=56320|l&1023)}return Bx(s,o)},Hx=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ms[e[r]]>t?r:t},Fc={string2buf:zx,buf2string:Ux,utf8border:Hx};function $x(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var qx=$x;const ml=16209,Vx=16191;var Yx=function(t,r){let n,o,s,l,c,d,f,p,v,A,m,b,y,N,C,L,P,D,U,H,K,W,E,J;const S=t.state;n=t.next_in,E=t.input,o=n+(t.avail_in-5),s=t.next_out,J=t.output,l=s-(r-t.avail_out),c=s+(t.avail_out-257),d=S.dmax,f=S.wsize,p=S.whave,v=S.wnext,A=S.window,m=S.hold,b=S.bits,y=S.lencode,N=S.distcode,C=(1<<S.lenbits)-1,L=(1<<S.distbits)-1;e:do{b<15&&(m+=E[n++]<<b,b+=8,m+=E[n++]<<b,b+=8),P=y[m&C];t:for(;;){if(D=P>>>24,m>>>=D,b-=D,D=P>>>16&255,D===0)J[s++]=P&65535;else if(D&16){U=P&65535,D&=15,D&&(b<D&&(m+=E[n++]<<b,b+=8),U+=m&(1<<D)-1,m>>>=D,b-=D),b<15&&(m+=E[n++]<<b,b+=8,m+=E[n++]<<b,b+=8),P=N[m&L];r:for(;;){if(D=P>>>24,m>>>=D,b-=D,D=P>>>16&255,D&16){if(H=P&65535,D&=15,b<D&&(m+=E[n++]<<b,b+=8,b<D&&(m+=E[n++]<<b,b+=8)),H+=m&(1<<D)-1,H>d){t.msg="invalid distance too far back",S.mode=ml;break e}if(m>>>=D,b-=D,D=s-l,H>D){if(D=H-D,D>p&&S.sane){t.msg="invalid distance too far back",S.mode=ml;break e}if(K=0,W=A,v===0){if(K+=f-D,D<U){U-=D;do J[s++]=A[K++];while(--D);K=s-H,W=J}}else if(v<D){if(K+=f+v-D,D-=v,D<U){U-=D;do J[s++]=A[K++];while(--D);if(K=0,v<U){D=v,U-=D;do J[s++]=A[K++];while(--D);K=s-H,W=J}}}else if(K+=v-D,D<U){U-=D;do J[s++]=A[K++];while(--D);K=s-H,W=J}for(;U>2;)J[s++]=W[K++],J[s++]=W[K++],J[s++]=W[K++],U-=3;U&&(J[s++]=W[K++],U>1&&(J[s++]=W[K++]))}else{K=s-H;do J[s++]=J[K++],J[s++]=J[K++],J[s++]=J[K++],U-=3;while(U>2);U&&(J[s++]=J[K++],U>1&&(J[s++]=J[K++]))}}else if(D&64){t.msg="invalid distance code",S.mode=ml;break e}else{P=N[(P&65535)+(m&(1<<D)-1)];continue r}break}}else if(D&64)if(D&32){S.mode=Vx;break e}else{t.msg="invalid literal/length code",S.mode=ml;break e}else{P=y[(P&65535)+(m&(1<<D)-1)];continue t}break}}while(n<o&&s<c);U=b>>3,n-=U,b-=U<<3,m&=(1<<b)-1,t.next_in=n,t.next_out=s,t.avail_in=n<o?5+(o-n):5-(n-o),t.avail_out=s<c?257+(c-s):257-(s-c),S.hold=m,S.bits=b};const wa=15,X2=852,Z2=592,J2=0,F1=1,K2=2,Gx=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Wx=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Xx=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Zx=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Jx=(e,t,r,n,o,s,l,c)=>{const d=c.bits;let f=0,p=0,v=0,A=0,m=0,b=0,y=0,N=0,C=0,L=0,P,D,U,H,K,W=null,E;const J=new Uint16Array(wa+1),S=new Uint16Array(wa+1);let T=null,q,$,ne;for(f=0;f<=wa;f++)J[f]=0;for(p=0;p<n;p++)J[t[r+p]]++;for(m=d,A=wa;A>=1&&J[A]===0;A--);if(m>A&&(m=A),A===0)return o[s++]=1<<24|64<<16|0,o[s++]=1<<24|64<<16|0,c.bits=1,0;for(v=1;v<A&&J[v]===0;v++);for(m<v&&(m=v),N=1,f=1;f<=wa;f++)if(N<<=1,N-=J[f],N<0)return-1;if(N>0&&(e===J2||A!==1))return-1;for(S[1]=0,f=1;f<wa;f++)S[f+1]=S[f]+J[f];for(p=0;p<n;p++)t[r+p]!==0&&(l[S[t[r+p]]++]=p);if(e===J2?(W=T=l,E=20):e===F1?(W=Gx,T=Wx,E=257):(W=Xx,T=Zx,E=0),L=0,p=0,f=v,K=s,b=m,y=0,U=-1,C=1<<m,H=C-1,e===F1&&C>X2||e===K2&&C>Z2)return 1;for(;;){q=f-y,l[p]+1<E?($=0,ne=l[p]):l[p]>=E?($=T[l[p]-E],ne=W[l[p]-E]):($=96,ne=0),P=1<<f-y,D=1<<b,v=D;do D-=P,o[K+(L>>y)+D]=q<<24|$<<16|ne|0;while(D!==0);for(P=1<<f-1;L&P;)P>>=1;if(P!==0?(L&=P-1,L+=P):L=0,p++,--J[f]===0){if(f===A)break;f=t[r+l[p]]}if(f>m&&(L&H)!==U){for(y===0&&(y=m),K+=v,b=f-y,N=1<<b;b+y<A&&(N-=J[b+y],!(N<=0));)b++,N<<=1;if(C+=1<<b,e===F1&&C>X2||e===K2&&C>Z2)return 1;U=L&H,o[U]=m<<24|b<<16|K-s|0}}return L!==0&&(o[K+L]=f-y<<24|64<<16|0),c.bits=m,0};var gs=Jx;const Kx=0,Qh=1,ef=2,{Z_FINISH:Q2,Z_BLOCK:Qx,Z_TREES:gl,Z_OK:ta,Z_STREAM_END:ev,Z_NEED_DICT:tv,Z_STREAM_ERROR:Fn,Z_DATA_ERROR:tf,Z_MEM_ERROR:rf,Z_BUF_ERROR:rv,Z_DEFLATED:eu}=Zh,h1=16180,tu=16181,ru=16182,nu=16183,iu=16184,ou=16185,au=16186,su=16187,lu=16188,cu=16189,Wl=16190,Ri=16191,z1=16192,uu=16193,B1=16194,du=16195,hu=16196,fu=16197,pu=16198,xl=16199,vl=16200,mu=16201,gu=16202,xu=16203,vu=16204,bu=16205,U1=16206,wu=16207,yu=16208,Kt=16209,nf=16210,of=16211,nv=852,iv=592,ov=15,av=ov,_u=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function sv(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const na=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<h1||t.mode>of?1:0},af=e=>{if(na(e))return Fn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=h1,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(nv),t.distcode=t.distdyn=new Int32Array(iv),t.sane=1,t.back=-1,ta},sf=e=>{if(na(e))return Fn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,af(e)},lf=(e,t)=>{let r;if(na(e))return Fn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?Fn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,sf(e))},cf=(e,t)=>{if(!e)return Fn;const r=new sv;e.state=r,r.strm=e,r.window=null,r.mode=h1;const n=lf(e,t);return n!==ta&&(e.state=null),n},lv=e=>cf(e,av);let Cu=!0,H1,$1;const cv=e=>{if(Cu){H1=new Int32Array(512),$1=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(gs(Qh,e.lens,0,288,H1,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;gs(ef,e.lens,0,32,$1,0,e.work,{bits:5}),Cu=!1}e.lencode=H1,e.lenbits=9,e.distcode=$1,e.distbits=5},uf=(e,t,r,n)=>{let o;const s=e.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),n>=s.wsize?(s.window.set(t.subarray(r-s.wsize,r),0),s.wnext=0,s.whave=s.wsize):(o=s.wsize-s.wnext,o>n&&(o=n),s.window.set(t.subarray(r-n,r-n+o),s.wnext),n-=o,n?(s.window.set(t.subarray(r-n,r),0),s.wnext=n,s.whave=s.wsize):(s.wnext+=o,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=o))),0},uv=(e,t)=>{let r,n,o,s,l,c,d,f,p,v,A,m,b,y,N=0,C,L,P,D,U,H,K,W;const E=new Uint8Array(4);let J,S;const T=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(na(e)||!e.output||!e.input&&e.avail_in!==0)return Fn;r=e.state,r.mode===Ri&&(r.mode=z1),l=e.next_out,o=e.output,d=e.avail_out,s=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,v=c,A=d,W=ta;e:for(;;)switch(r.mode){case h1:if(r.wrap===0){r.mode=z1;break}for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,E[0]=f&255,E[1]=f>>>8&255,r.check=hi(r.check,E,2,0),f=0,p=0,r.mode=tu;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=Kt;break}if((f&15)!==eu){e.msg="unknown compression method",r.mode=Kt;break}if(f>>>=4,p-=4,K=(f&15)+8,r.wbits===0&&(r.wbits=K),K>15||K>r.wbits){e.msg="invalid window size",r.mode=Kt;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?cu:Ri,f=0,p=0;break;case tu:for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.flags=f,(r.flags&255)!==eu){e.msg="unknown compression method",r.mode=Kt;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=Kt;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(E[0]=f&255,E[1]=f>>>8&255,r.check=hi(r.check,E,2,0)),f=0,p=0,r.mode=ru;case ru:for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(E[0]=f&255,E[1]=f>>>8&255,E[2]=f>>>16&255,E[3]=f>>>24&255,r.check=hi(r.check,E,4,0)),f=0,p=0,r.mode=nu;case nu:for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(E[0]=f&255,E[1]=f>>>8&255,r.check=hi(r.check,E,2,0)),f=0,p=0,r.mode=iu;case iu:if(r.flags&1024){for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(E[0]=f&255,E[1]=f>>>8&255,r.check=hi(r.check,E,2,0)),f=0,p=0}else r.head&&(r.head.extra=null);r.mode=ou;case ou:if(r.flags&1024&&(m=r.length,m>c&&(m=c),m&&(r.head&&(K=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(s,s+m),K)),r.flags&512&&r.wrap&4&&(r.check=hi(r.check,n,m,s)),c-=m,s+=m,r.length-=m),r.length))break e;r.length=0,r.mode=au;case au:if(r.flags&2048){if(c===0)break e;m=0;do K=n[s+m++],r.head&&K&&r.length<65536&&(r.head.name+=String.fromCharCode(K));while(K&&m<c);if(r.flags&512&&r.wrap&4&&(r.check=hi(r.check,n,m,s)),c-=m,s+=m,K)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=su;case su:if(r.flags&4096){if(c===0)break e;m=0;do K=n[s+m++],r.head&&K&&r.length<65536&&(r.head.comment+=String.fromCharCode(K));while(K&&m<c);if(r.flags&512&&r.wrap&4&&(r.check=hi(r.check,n,m,s)),c-=m,s+=m,K)break e}else r.head&&(r.head.comment=null);r.mode=lu;case lu:if(r.flags&512){for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=Kt;break}f=0,p=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=Ri;break;case cu:for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}e.adler=r.check=_u(f),f=0,p=0,r.mode=Wl;case Wl:if(r.havedict===0)return e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,tv;e.adler=r.check=1,r.mode=Ri;case Ri:if(t===Qx||t===gl)break e;case z1:if(r.last){f>>>=p&7,p-=p&7,r.mode=U1;break}for(;p<3;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}switch(r.last=f&1,f>>>=1,p-=1,f&3){case 0:r.mode=uu;break;case 1:if(cv(r),r.mode=xl,t===gl){f>>>=2,p-=2;break e}break;case 2:r.mode=hu;break;case 3:e.msg="invalid block type",r.mode=Kt}f>>>=2,p-=2;break;case uu:for(f>>>=p&7,p-=p&7;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Kt;break}if(r.length=f&65535,f=0,p=0,r.mode=B1,t===gl)break e;case B1:r.mode=du;case du:if(m=r.length,m){if(m>c&&(m=c),m>d&&(m=d),m===0)break e;o.set(n.subarray(s,s+m),l),c-=m,s+=m,d-=m,l+=m,r.length-=m;break}r.mode=Ri;break;case hu:for(;p<14;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.nlen=(f&31)+257,f>>>=5,p-=5,r.ndist=(f&31)+1,f>>>=5,p-=5,r.ncode=(f&15)+4,f>>>=4,p-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Kt;break}r.have=0,r.mode=fu;case fu:for(;r.have<r.ncode;){for(;p<3;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.lens[T[r.have++]]=f&7,f>>>=3,p-=3}for(;r.have<19;)r.lens[T[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,J={bits:r.lenbits},W=gs(Kx,r.lens,0,19,r.lencode,0,r.work,J),r.lenbits=J.bits,W){e.msg="invalid code lengths set",r.mode=Kt;break}r.have=0,r.mode=pu;case pu:for(;r.have<r.nlen+r.ndist;){for(;N=r.lencode[f&(1<<r.lenbits)-1],C=N>>>24,L=N>>>16&255,P=N&65535,!(C<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(P<16)f>>>=C,p-=C,r.lens[r.have++]=P;else{if(P===16){for(S=C+2;p<S;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(f>>>=C,p-=C,r.have===0){e.msg="invalid bit length repeat",r.mode=Kt;break}K=r.lens[r.have-1],m=3+(f&3),f>>>=2,p-=2}else if(P===17){for(S=C+3;p<S;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=C,p-=C,K=0,m=3+(f&7),f>>>=3,p-=3}else{for(S=C+7;p<S;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=C,p-=C,K=0,m=11+(f&127),f>>>=7,p-=7}if(r.have+m>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Kt;break}for(;m--;)r.lens[r.have++]=K}}if(r.mode===Kt)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=Kt;break}if(r.lenbits=9,J={bits:r.lenbits},W=gs(Qh,r.lens,0,r.nlen,r.lencode,0,r.work,J),r.lenbits=J.bits,W){e.msg="invalid literal/lengths set",r.mode=Kt;break}if(r.distbits=6,r.distcode=r.distdyn,J={bits:r.distbits},W=gs(ef,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,J),r.distbits=J.bits,W){e.msg="invalid distances set",r.mode=Kt;break}if(r.mode=xl,t===gl)break e;case xl:r.mode=vl;case vl:if(c>=6&&d>=258){e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,Yx(e,A),l=e.next_out,o=e.output,d=e.avail_out,s=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,r.mode===Ri&&(r.back=-1);break}for(r.back=0;N=r.lencode[f&(1<<r.lenbits)-1],C=N>>>24,L=N>>>16&255,P=N&65535,!(C<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(L&&!(L&240)){for(D=C,U=L,H=P;N=r.lencode[H+((f&(1<<D+U)-1)>>D)],C=N>>>24,L=N>>>16&255,P=N&65535,!(D+C<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=D,p-=D,r.back+=D}if(f>>>=C,p-=C,r.back+=C,r.length=P,L===0){r.mode=bu;break}if(L&32){r.back=-1,r.mode=Ri;break}if(L&64){e.msg="invalid literal/length code",r.mode=Kt;break}r.extra=L&15,r.mode=mu;case mu:if(r.extra){for(S=r.extra;p<S;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=gu;case gu:for(;N=r.distcode[f&(1<<r.distbits)-1],C=N>>>24,L=N>>>16&255,P=N&65535,!(C<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(!(L&240)){for(D=C,U=L,H=P;N=r.distcode[H+((f&(1<<D+U)-1)>>D)],C=N>>>24,L=N>>>16&255,P=N&65535,!(D+C<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=D,p-=D,r.back+=D}if(f>>>=C,p-=C,r.back+=C,L&64){e.msg="invalid distance code",r.mode=Kt;break}r.offset=P,r.extra=L&15,r.mode=xu;case xu:if(r.extra){for(S=r.extra;p<S;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Kt;break}r.mode=vu;case vu:if(d===0)break e;if(m=A-d,r.offset>m){if(m=r.offset-m,m>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Kt;break}m>r.wnext?(m-=r.wnext,b=r.wsize-m):b=r.wnext-m,m>r.length&&(m=r.length),y=r.window}else y=o,b=l-r.offset,m=r.length;m>d&&(m=d),d-=m,r.length-=m;do o[l++]=y[b++];while(--m);r.length===0&&(r.mode=vl);break;case bu:if(d===0)break e;o[l++]=r.length,d--,r.mode=vl;break;case U1:if(r.wrap){for(;p<32;){if(c===0)break e;c--,f|=n[s++]<<p,p+=8}if(A-=d,e.total_out+=A,r.total+=A,r.wrap&4&&A&&(e.adler=r.check=r.flags?hi(r.check,o,A,l-A):Rc(r.check,o,A,l-A)),A=d,r.wrap&4&&(r.flags?f:_u(f))!==r.check){e.msg="incorrect data check",r.mode=Kt;break}f=0,p=0}r.mode=wu;case wu:if(r.wrap&&r.flags){for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=Kt;break}f=0,p=0}r.mode=yu;case yu:W=ev;break e;case Kt:W=tf;break e;case nf:return rf;case of:default:return Fn}return e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,(r.wsize||A!==e.avail_out&&r.mode<Kt&&(r.mode<U1||t!==Q2))&&uf(e,e.output,e.next_out,A-e.avail_out),v-=e.avail_in,A-=e.avail_out,e.total_in+=v,e.total_out+=A,r.total+=A,r.wrap&4&&A&&(e.adler=r.check=r.flags?hi(r.check,o,A,e.next_out-A):Rc(r.check,o,A,e.next_out-A)),e.data_type=r.bits+(r.last?64:0)+(r.mode===Ri?128:0)+(r.mode===xl||r.mode===B1?256:0),(v===0&&A===0||t===Q2)&&W===ta&&(W=rv),W},dv=e=>{if(na(e))return Fn;let t=e.state;return t.window&&(t.window=null),e.state=null,ta},hv=(e,t)=>{if(na(e))return Fn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,ta):Fn},fv=(e,t)=>{const r=t.length;let n,o,s;return na(e)||(n=e.state,n.wrap!==0&&n.mode!==Wl)?Fn:n.mode===Wl&&(o=1,o=Rc(o,t,r,0),o!==n.check)?tf:(s=uf(e,t,r,r),s?(n.mode=nf,rf):(n.havedict=1,ta))};var pv=sf,mv=lf,gv=af,xv=lv,vv=cf,bv=uv,wv=dv,yv=hv,_v=fv,Cv="pako inflate (from Nodeca project)",Fi={inflateReset:pv,inflateReset2:mv,inflateResetKeep:gv,inflateInit:xv,inflateInit2:vv,inflate:bv,inflateEnd:wv,inflateGetHeader:yv,inflateSetDictionary:_v,inflateInfo:Cv};function Sv(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Av=Sv;const df=Object.prototype.toString,{Z_NO_FLUSH:kv,Z_FINISH:Mv,Z_OK:Ns,Z_STREAM_END:q1,Z_NEED_DICT:V1,Z_STREAM_ERROR:Nv,Z_DATA_ERROR:Su,Z_MEM_ERROR:jv}=Zh;function Es(e){this.options=Jh.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qx,this.strm.avail_out=0;let r=Fi.inflateInit2(this.strm,t.windowBits);if(r!==Ns)throw new Error(Oc[r]);if(this.header=new Av,Fi.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Fc.string2buf(t.dictionary):df.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=Fi.inflateSetDictionary(this.strm,t.dictionary),r!==Ns)))throw new Error(Oc[r])}Es.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,o=this.options.dictionary;let s,l,c;if(this.ended)return!1;for(t===~~t?l=t:l=t===!0?Mv:kv,df.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),s=Fi.inflate(r,l),s===V1&&o&&(s=Fi.inflateSetDictionary(r,o),s===Ns?s=Fi.inflate(r,l):s===Su&&(s=V1));r.avail_in>0&&s===q1&&r.state.wrap>0&&e[r.next_in]!==0;)Fi.inflateReset(r),s=Fi.inflate(r,l);switch(s){case Nv:case Su:case V1:case jv:return this.onEnd(s),this.ended=!0,!1}if(c=r.avail_out,r.next_out&&(r.avail_out===0||s===q1))if(this.options.to==="string"){let d=Fc.utf8border(r.output,r.next_out),f=r.next_out-d,p=Fc.buf2string(r.output,d);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(d,d+f),0),this.onData(p)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(s===Ns&&c===0)){if(s===q1)return s=Fi.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Es.prototype.onData=function(e){this.chunks.push(e)};Es.prototype.onEnd=function(e){e===Ns&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Jh.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Iv(e,t){const r=new Es(t);if(r.push(e),r.err)throw r.msg||Oc[r.err];return r.result}var Lv=Es,Pv=Iv,Tv={Inflate:Lv,inflate:Pv};const{Inflate:Ev,inflate:Dv}=Tv;var Au=Ev,Rv=Dv;const hf=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;hf[e]=t}const ku=4294967295;function Ov(e,t,r){let n=e;for(let o=0;o<r;o++)n=hf[(n^t[o])&255]^n>>>8;return n}function Fv(e,t){return(Ov(ku,e,t)^ku)>>>0}function Mu(e,t,r){const n=e.readUint32(),o=Fv(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(o!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${o}`)}function ff(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function pf(e,t,r,n){let o=0;for(;o<n;o++)t[o]=e[o];for(;o<r;o++)t[o]=e[o]+t[o-n]&255}function mf(e,t,r,n){let o=0;if(r.length===0)for(;o<n;o++)t[o]=e[o];else for(;o<n;o++)t[o]=e[o]+r[o]&255}function gf(e,t,r,n,o){let s=0;if(r.length===0){for(;s<o;s++)t[s]=e[s];for(;s<n;s++)t[s]=e[s]+(t[s-o]>>1)&255}else{for(;s<o;s++)t[s]=e[s]+(r[s]>>1)&255;for(;s<n;s++)t[s]=e[s]+(t[s-o]+r[s]>>1)&255}}function xf(e,t,r,n,o){let s=0;if(r.length===0){for(;s<o;s++)t[s]=e[s];for(;s<n;s++)t[s]=e[s]+t[s-o]&255}else{for(;s<o;s++)t[s]=e[s]+r[s]&255;for(;s<n;s++)t[s]=e[s]+zv(t[s-o],r[s],r[s-o])&255}}function zv(e,t,r){const n=e+t-r,o=Math.abs(n-e),s=Math.abs(n-t),l=Math.abs(n-r);return o<=s&&o<=l?e:s<=l?t:r}function Bv(e,t,r,n,o,s){switch(e){case 0:ff(t,r,o);break;case 1:pf(t,r,o,s);break;case 2:mf(t,r,n,o);break;case 3:gf(t,r,n,o,s);break;case 4:xf(t,r,n,o,s);break;default:throw new Error(`Unsupported filter: ${e}`)}}const Uv=new Uint16Array([255]),Hv=new Uint8Array(Uv.buffer),$v=Hv[0]===255;function qv(e){const{data:t,width:r,height:n,channels:o,depth:s}=e,l=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],c=Math.ceil(s/8)*o,d=new Uint8Array(n*r*c);let f=0;for(let p=0;p<7;p++){const v=l[p],A=Math.ceil((r-v.x)/v.xStep),m=Math.ceil((n-v.y)/v.yStep);if(A<=0||m<=0)continue;const b=A*c,y=new Uint8Array(b);for(let N=0;N<m;N++){const C=t[f++],L=t.subarray(f,f+b);f+=b;const P=new Uint8Array(b);Bv(C,L,P,y,b,c),y.set(P);for(let D=0;D<A;D++){const U=v.x+D*v.xStep,H=v.y+N*v.yStep;if(!(U>=r||H>=n))for(let K=0;K<c;K++)d[(H*r+U)*c+K]=P[D*c+K]}}}if(s===16){const p=new Uint16Array(d.buffer);if($v)for(let v=0;v<p.length;v++)p[v]=Vv(p[v]);return p}else return d}function Vv(e){return(e&255)<<8|e>>8&255}const Yv=new Uint16Array([255]),Gv=new Uint8Array(Yv.buffer),Wv=Gv[0]===255,Xv=new Uint8Array(0);function Nu(e){const{data:t,width:r,height:n,channels:o,depth:s}=e,l=Math.ceil(s/8)*o,c=Math.ceil(s/8*o*r),d=new Uint8Array(n*c);let f=Xv,p=0,v,A;for(let m=0;m<n;m++){switch(v=t.subarray(p+1,p+1+c),A=d.subarray(m*c,(m+1)*c),t[p]){case 0:ff(v,A,c);break;case 1:pf(v,A,c,l);break;case 2:mf(v,A,f,c);break;case 3:gf(v,A,f,c,l);break;case 4:xf(v,A,f,c,l);break;default:throw new Error(`Unsupported filter: ${t[p]}`)}f=A,p+=c+1}if(s===16){const m=new Uint16Array(d.buffer);if(Wv)for(let b=0;b<m.length;b++)m[b]=Zv(m[b]);return m}else return d}function Zv(e){return(e&255)<<8|e>>8&255}const Ol=Uint8Array.of(137,80,78,71,13,10,26,10);function ju(e){if(!Jv(e.readBytes(Ol.length)))throw new Error("wrong PNG signature")}function Jv(e){if(e.length<Ol.length)return!1;for(let t=0;t<Ol.length;t++)if(e[t]!==Ol[t])return!1;return!0}const Kv="tEXt",Qv=0,vf=new TextDecoder("latin1");function e9(e){if(r9(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const t9=/^[\u0000-\u00FF]*$/;function r9(e){if(!t9.test(e))throw new Error("invalid latin1 text")}function n9(e,t,r){const n=bf(t);e[n]=i9(t,r-n.length-1)}function bf(e){for(e.mark();e.readByte()!==Qv;);const t=e.offset;e.reset();const r=vf.decode(e.readBytes(t-e.offset-1));return e.skip(1),e9(r),r}function i9(e,t){return vf.decode(e.readBytes(t))}const bn={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Y1={UNKNOWN:-1,DEFLATE:0},Iu={UNKNOWN:-1,ADAPTIVE:0},G1={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},bl={NONE:0,BACKGROUND:1,PREVIOUS:2},W1={SOURCE:0,OVER:1};class o9 extends p0{constructor(r,n={}){super(r);Te(this,"_checkCrc");Te(this,"_inflator");Te(this,"_png");Te(this,"_apng");Te(this,"_end");Te(this,"_hasPalette");Te(this,"_palette");Te(this,"_hasTransparency");Te(this,"_transparency");Te(this,"_compressionMethod");Te(this,"_filterMethod");Te(this,"_interlaceMethod");Te(this,"_colorType");Te(this,"_isAnimated");Te(this,"_numberOfFrames");Te(this,"_numberOfPlays");Te(this,"_frames");Te(this,"_writingDataChunks");const{checkCrc:o=!1}=n;this._checkCrc=o,this._inflator=new Au,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Y1.UNKNOWN,this._filterMethod=Iu.UNKNOWN,this._interlaceMethod=G1.UNKNOWN,this._colorType=bn.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(ju(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(ju(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const o=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case Kv:n9(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?Mu(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const o=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=o+r;break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?Mu(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=a9(this.readUint8());const n=this.readUint8();this._colorType=n;let o;switch(n){case bn.GREYSCALE:o=1;break;case bn.TRUECOLOUR:o=3;break;case bn.INDEXED_COLOUR:o=1;break;case bn.GREYSCALE_ALPHA:o=2;break;case bn.TRUECOLOUR_ALPHA:o=4;break;case bn.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=o,this._compressionMethod=this.readUint8(),this._compressionMethod!==Y1.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const o=[];this._palette=o;for(let s=0;s<n;s++)o.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,o=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,o=this.offset+this.byteOffset;if(o+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case bn.GREYSCALE:case bn.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case bn.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const o=this.readByte();this._palette[n].push(o)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case bn.UNKNOWN:case bn.GREYSCALE_ALPHA:case bn.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=bf(this),o=this.readUint8();if(o!==Y1.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${o}`);const s=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:Rv(s)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),o=this.readByte();this._png.resolution={x:r,y:n,unit:o}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},o=this._frames.at(r);if(o){if(o.data=Nu({data:o.data,width:o.width,height:o.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||o.xOffset===0&&o.yOffset===0&&o.width===this._png.width&&o.height===this._png.height)n.data=o.data;else{const s=this._apng.frames.at(r-1);this.disposeFrame(o,s,n),this.addFrameDataToCanvas(n,o)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,o){switch(r.disposeOp){case bl.NONE:break;case bl.BACKGROUND:for(let s=0;s<this._png.height;s++)for(let l=0;l<this._png.width;l++){const c=(s*r.width+l)*this._png.channels;for(let d=0;d<this._png.channels;d++)o.data[c+d]=0}break;case bl.PREVIOUS:o.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const o=1<<this._png.depth,s=(l,c)=>{const d=((l+n.yOffset)*this._png.width+n.xOffset+c)*this._png.channels,f=(l*n.width+c)*this._png.channels;return{index:d,frameIndex:f}};switch(n.blendOp){case W1.SOURCE:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:d,frameIndex:f}=s(l,c);for(let p=0;p<this._png.channels;p++)r.data[d+p]=n.data[f+p]}break;case W1.OVER:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:d,frameIndex:f}=s(l,c);for(let p=0;p<this._png.channels;p++){const v=n.data[f+this._png.channels-1]/o,A=p%(this._png.channels-1)===0?1:n.data[f+p],m=Math.floor(v*A+(1-v)*r.data[d+p]);r.data[d+p]+=m}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==Iu.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===G1.NO_INTERLACE)this._png.data=Nu({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===G1.ADAM7)this._png.data=qv({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:bl.NONE,blendOp:W1.SOURCE,data:r}),this._inflator=new Au,this._writingDataChunks=!1}}function a9(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var Lu;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(Lu||(Lu={}));function s9(e,t){return new o9(e,t).decode()}var ht=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function X1(){ht.console&&typeof ht.console.log=="function"&&ht.console.log.apply(ht.console,arguments)}var $t={log:X1,warn:function(e){ht.console&&(typeof ht.console.warn=="function"?ht.console.warn.apply(ht.console,arguments):X1.call(null,arguments))},error:function(e){ht.console&&(typeof ht.console.error=="function"?ht.console.error.apply(ht.console,arguments):X1(e))}};function Z1(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){Zo(n.response,t,r)},n.onerror=function(){$t.error("could not download file")},n.send()}function Pu(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function wl(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var Zo=ht.saveAs||((typeof window>"u"?"undefined":zt(window))!=="object"||window!==ht?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=ht.URL||ht.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?Pu(o.href)?Z1(e,t,r):wl(o,o.target="_blank"):wl(o)):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){wl(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(Pu(e))Z1(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){wl(n)})}else navigator.msSaveOrOpenBlob(function(o,s){return s===void 0?s={autoBom:!1}:zt(s)!=="object"&&($t.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return Z1(e,t,r);var o=e.type==="application/octet-stream",s=/constructor/i.test(ht.HTMLElement)||ht.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&s)&&(typeof FileReader>"u"?"undefined":zt(FileReader))==="object"){var c=new FileReader;c.onloadend=function(){var p=c.result;p=l?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=p:location=p,n=null},c.readAsDataURL(e)}else{var d=ht.URL||ht.webkitURL,f=d.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function wf(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(c){return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(c){return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(c){return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]}}],n=0;n<r.length;n++){var o=r[n].re,s=r[n].process,l=o.exec(e);l&&(t=s(l),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var c=this.r.toString(16),d=this.g.toString(16),f=this.b.toString(16);return c.length==1&&(c="0"+c),d.length==1&&(d="0"+d),f.length==1&&(f="0"+f),"#"+c+d+f}}var Fl=ht.atob.bind(ht),Tu=ht.btoa.bind(ht);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function J1(e,t){var r=e[0],n=e[1],o=e[2],s=e[3];r=Br(r,n,o,s,t[0],7,-680876936),s=Br(s,r,n,o,t[1],12,-389564586),o=Br(o,s,r,n,t[2],17,606105819),n=Br(n,o,s,r,t[3],22,-1044525330),r=Br(r,n,o,s,t[4],7,-176418897),s=Br(s,r,n,o,t[5],12,1200080426),o=Br(o,s,r,n,t[6],17,-1473231341),n=Br(n,o,s,r,t[7],22,-45705983),r=Br(r,n,o,s,t[8],7,1770035416),s=Br(s,r,n,o,t[9],12,-1958414417),o=Br(o,s,r,n,t[10],17,-42063),n=Br(n,o,s,r,t[11],22,-1990404162),r=Br(r,n,o,s,t[12],7,1804603682),s=Br(s,r,n,o,t[13],12,-40341101),o=Br(o,s,r,n,t[14],17,-1502002290),r=Ur(r,n=Br(n,o,s,r,t[15],22,1236535329),o,s,t[1],5,-165796510),s=Ur(s,r,n,o,t[6],9,-1069501632),o=Ur(o,s,r,n,t[11],14,643717713),n=Ur(n,o,s,r,t[0],20,-373897302),r=Ur(r,n,o,s,t[5],5,-701558691),s=Ur(s,r,n,o,t[10],9,38016083),o=Ur(o,s,r,n,t[15],14,-660478335),n=Ur(n,o,s,r,t[4],20,-405537848),r=Ur(r,n,o,s,t[9],5,568446438),s=Ur(s,r,n,o,t[14],9,-1019803690),o=Ur(o,s,r,n,t[3],14,-187363961),n=Ur(n,o,s,r,t[8],20,1163531501),r=Ur(r,n,o,s,t[13],5,-1444681467),s=Ur(s,r,n,o,t[2],9,-51403784),o=Ur(o,s,r,n,t[7],14,1735328473),r=Hr(r,n=Ur(n,o,s,r,t[12],20,-1926607734),o,s,t[5],4,-378558),s=Hr(s,r,n,o,t[8],11,-2022574463),o=Hr(o,s,r,n,t[11],16,1839030562),n=Hr(n,o,s,r,t[14],23,-35309556),r=Hr(r,n,o,s,t[1],4,-1530992060),s=Hr(s,r,n,o,t[4],11,1272893353),o=Hr(o,s,r,n,t[7],16,-155497632),n=Hr(n,o,s,r,t[10],23,-1094730640),r=Hr(r,n,o,s,t[13],4,681279174),s=Hr(s,r,n,o,t[0],11,-358537222),o=Hr(o,s,r,n,t[3],16,-722521979),n=Hr(n,o,s,r,t[6],23,76029189),r=Hr(r,n,o,s,t[9],4,-640364487),s=Hr(s,r,n,o,t[12],11,-421815835),o=Hr(o,s,r,n,t[15],16,530742520),r=$r(r,n=Hr(n,o,s,r,t[2],23,-995338651),o,s,t[0],6,-198630844),s=$r(s,r,n,o,t[7],10,1126891415),o=$r(o,s,r,n,t[14],15,-1416354905),n=$r(n,o,s,r,t[5],21,-57434055),r=$r(r,n,o,s,t[12],6,1700485571),s=$r(s,r,n,o,t[3],10,-1894986606),o=$r(o,s,r,n,t[10],15,-1051523),n=$r(n,o,s,r,t[1],21,-2054922799),r=$r(r,n,o,s,t[8],6,1873313359),s=$r(s,r,n,o,t[15],10,-30611744),o=$r(o,s,r,n,t[6],15,-1560198380),n=$r(n,o,s,r,t[13],21,1309151649),r=$r(r,n,o,s,t[4],6,-145523070),s=$r(s,r,n,o,t[11],10,-1120210379),o=$r(o,s,r,n,t[2],15,718787259),n=$r(n,o,s,r,t[9],21,-343485551),e[0]=_o(r,e[0]),e[1]=_o(n,e[1]),e[2]=_o(o,e[2]),e[3]=_o(s,e[3])}function f1(e,t,r,n,o,s){return t=_o(_o(t,e),_o(n,s)),_o(t<<o|t>>>32-o,r)}function Br(e,t,r,n,o,s,l){return f1(t&r|~t&n,e,t,o,s,l)}function Ur(e,t,r,n,o,s,l){return f1(t&n|r&~n,e,t,o,s,l)}function Hr(e,t,r,n,o,s,l){return f1(t^r^n,e,t,o,s,l)}function $r(e,t,r,n,o,s,l){return f1(r^(t|~n),e,t,o,s,l)}function yf(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)J1(n,l9(e.substring(t-64,t)));e=e.substring(t-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(J1(n,o),t=0;t<16;t++)o[t]=0;return o[14]=8*r,J1(n,o),n}function l9(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var Eu="0123456789abcdef".split("");function c9(e){for(var t="",r=0;r<4;r++)t+=Eu[e>>8*r+4&15]+Eu[e>>8*r&15];return t}function u9(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function zc(e){return yf(e).map(u9).join("")}var d9=function(e){for(var t=0;t<e.length;t++)e[t]=c9(e[t]);return e.join("")}(yf("hello"))!="5d41402abc4b2a76b9719d911017c592";function _o(e,t){if(d9){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Bc(e,t){var r,n,o,s;if(e!==r){for(var l=(o=e,s=1+(256/e.length|0),new Array(s+1).join(o)),c=[],d=0;d<256;d++)c[d]=d;var f=0;for(d=0;d<256;d++){var p=c[d];f=(f+p+l.charCodeAt(d))%256,c[d]=c[f],c[f]=p}r=e,n=c}else c=n;var v=t.length,A=0,m=0,b="";for(d=0;d<v;d++)m=(m+(p=c[A=(A+1)%256]))%256,c[A]=c[m],c[m]=p,l=c[(c[A]+c[m])%256],b+=String.fromCharCode(t.charCodeAt(d)^l);return b}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var Du={print:4,modify:8,copy:16,"annot-forms":32};function ka(e,t,r,n){this.v=1,this.r=2;var o=192;e.forEach(function(c){if(Du.perm!==void 0)throw new Error("Invalid permission: "+c);o+=Du[c]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var s=(t+this.padding).substr(0,32),l=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(s,l),this.P=-(1+(255^o)),this.encryptionKey=zc(s+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=Bc(this.encryptionKey,this.padding)}function Ma(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);t+=o<33||o===35||o===37||o===40||o===41||o===47||o===60||o===62||o===91||o===93||o===123||o===125||o>126?"#"+("0"+o.toString(16)).slice(-2):e[n]}return t}function Ru(e){if(zt(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,o){if(o=o||!1,typeof r!="string"||typeof n!="function"||typeof o!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var s=Math.random().toString(35);return t[r][s]=[n,!!o],s},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),o=[];for(var s in t[r]){var l=t[r][s];try{l[0].apply(e,n)}catch(c){ht.console&&$t.error("jsPDF PubSub Error",c.message,c)}l[1]&&o.push(s)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Xl(e){if(!(this instanceof Xl))return new Xl(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function _f(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function Jo(e,t,r,n,o){if(!(this instanceof Jo))return new Jo(e,t,r,n,o);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,_f.call(this,n,o)}function Ia(e,t,r,n,o){if(!(this instanceof Ia))return new Ia(e,t,r,n,o);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,_f.call(this,n,o)}function Qe(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],o=arguments[2],s=arguments[3],l=[],c=1,d=16,f="S",p=null;zt(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,o=e.format||o,s=e.compress||e.compressPdf||s,(p=e.encryption||null)!==null&&(p.userPassword=p.userPassword||"",p.ownerPassword=p.ownerPassword||"",p.userPermissions=p.userPermissions||[]),c=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(d=e.floatPrecision),f=e.defaultPathOperation||"S"),l=e.filters||(s===!0?["FlateEncode"]:l),n=n||"mm",r=(""+(r||"P")).toLowerCase();var v=e.putOnlyUsedFonts||!1,A={},m={internal:{},__private__:{}};m.__private__.PubSub=Ru;var b="1.3",y=m.__private__.getPdfVersion=function(){return b};m.__private__.setPdfVersion=function(g){b=g};var N={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};m.__private__.getPageFormats=function(){return N};var C=m.__private__.getPageFormat=function(g){return N[g]};o=o||"a4";var L="compat",P="advanced",D=L;function U(){this.saveGraphicsState(),Z(new tt(at,0,0,-at,0,li()*at).toString()+" cm"),this.setFontSize(this.getFontSize()/at),f="n",D=P}function H(){this.restoreGraphicsState(),f="S",D=L}var K=m.__private__.combineFontStyleAndFontWeight=function(g,j){if(g=="bold"&&j=="normal"||g=="bold"&&j==400||g=="normal"&&j=="italic"||g=="bold"&&j=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return j&&(g=j==400||j==="normal"?g==="italic"?"italic":"normal":j!=700&&j!=="bold"||g!=="normal"?(j==700?"bold":j)+""+g:"bold"),g};m.advancedAPI=function(g){var j=D===L;return j&&U.call(this),typeof g!="function"||(g(this),j&&H.call(this)),this},m.compatAPI=function(g){var j=D===P;return j&&H.call(this),typeof g!="function"||(g(this),j&&U.call(this)),this},m.isAdvancedAPI=function(){return D===P};var W,E=function(g){if(D!==P)throw new Error(g+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},J=m.roundToPrecision=m.__private__.roundToPrecision=function(g,j){var V=t||j;if(isNaN(g)||isNaN(V))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return g.toFixed(V).replace(/0+$/,"")};W=m.hpf=m.__private__.hpf=typeof d=="number"?function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return J(g,d)}:d==="smart"?function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return J(g,g>-1&&g<1?16:5)}:function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return J(g,16)};var S=m.f2=m.__private__.f2=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.f2");return J(g,2)},T=m.__private__.f3=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.f3");return J(g,3)},q=m.scale=m.__private__.scale=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.scale");return D===L?g*at:D===P?g:void 0},$=function(g){return q(function(j){return D===L?li()-j:D===P?j:void 0}(g))};m.__private__.setPrecision=m.setPrecision=function(g){typeof parseInt(g,10)=="number"&&(t=parseInt(g,10))};var ne,ce="00000000000000000000000000000000",pe=m.__private__.getFileId=function(){return ce},ae=m.__private__.setFileId=function(g){return ce=g!==void 0&&/^[a-fA-F0-9]{32}$/.test(g)?g.toUpperCase():ce.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),p!==null&&(Qt=new ka(p.userPermissions,p.userPassword,p.ownerPassword,ce)),ce};m.setFileId=function(g){return ae(g),this},m.getFileId=function(){return pe()};var ve=m.__private__.convertDateToPDFDate=function(g){var j=g.getTimezoneOffset(),V=j<0?"+":"-",te=Math.floor(Math.abs(j/60)),de=Math.abs(j%60),Se=[V,X(te),"'",X(de),"'"].join("");return["D:",g.getFullYear(),X(g.getMonth()+1),X(g.getDate()),X(g.getHours()),X(g.getMinutes()),X(g.getSeconds()),Se].join("")},we=m.__private__.convertPDFDateToDate=function(g){var j=parseInt(g.substr(2,4),10),V=parseInt(g.substr(6,2),10)-1,te=parseInt(g.substr(8,2),10),de=parseInt(g.substr(10,2),10),Se=parseInt(g.substr(12,2),10),Me=parseInt(g.substr(14,2),10);return new Date(j,V,te,de,Se,Me,0)},re=m.__private__.setCreationDate=function(g){var j;if(g===void 0&&(g=new Date),g instanceof Date)j=ve(g);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(g))throw new Error("Invalid argument passed to jsPDF.setCreationDate");j=g}return ne=j},M=m.__private__.getCreationDate=function(g){var j=ne;return g==="jsDate"&&(j=we(ne)),j};m.setCreationDate=function(g){return re(g),this},m.getCreationDate=function(g){return M(g)};var z,X=m.__private__.padd2=function(g){return("0"+parseInt(g)).slice(-2)},Q=m.__private__.padd2Hex=function(g){return("00"+(g=g.toString())).substr(g.length)},ee=0,se=[],fe=[],ie=0,xe=[],_e=[],Le=!1,Pe=fe;m.__private__.setCustomOutputDestination=function(g){Le=!0,Pe=g};var be=function(g){Le||(Pe=g)};m.__private__.resetCustomOutputDestination=function(){Le=!1,Pe=fe};var Z=m.__private__.out=function(g){return g=g.toString(),ie+=g.length+1,Pe.push(g),Pe},rt=m.__private__.write=function(g){return Z(arguments.length===1?g.toString():Array.prototype.join.call(arguments," "))},Je=m.__private__.getArrayBuffer=function(g){for(var j=g.length,V=new ArrayBuffer(j),te=new Uint8Array(V);j--;)te[j]=g.charCodeAt(j);return V},Ge=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];m.__private__.getStandardFonts=function(){return Ge};var je=e.fontSize||16;m.__private__.setFontSize=m.setFontSize=function(g){return je=D===P?g/at:g,this};var Fe,Ee=m.__private__.getFontSize=m.getFontSize=function(){return D===L?je:je*at},nt=e.R2L||!1;m.__private__.setR2L=m.setR2L=function(g){return nt=g,this},m.__private__.getR2L=m.getR2L=function(){return nt};var Be,yt=m.__private__.setZoomMode=function(g){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(g))Fe=g;else if(isNaN(g)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(g)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+g+'" is not recognized.');Fe=g}else Fe=parseInt(g,10)};m.__private__.getZoomMode=function(){return Fe};var it,ot=m.__private__.setPageMode=function(g){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(g)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+g+'" is not recognized.');Be=g};m.__private__.getPageMode=function(){return Be};var At=m.__private__.setLayoutMode=function(g){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(g)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+g+'" is not recognized.');it=g};m.__private__.getLayoutMode=function(){return it},m.__private__.setDisplayMode=m.setDisplayMode=function(g,j,V){return yt(g),At(j),ot(V),this};var ut={title:"",subject:"",author:"",keywords:"",creator:""};m.__private__.getDocumentProperty=function(g){if(Object.keys(ut).indexOf(g)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return ut[g]},m.__private__.getDocumentProperties=function(){return ut},m.__private__.setDocumentProperties=m.setProperties=m.setDocumentProperties=function(g){for(var j in ut)ut.hasOwnProperty(j)&&g[j]&&(ut[j]=g[j]);return this},m.__private__.setDocumentProperty=function(g,j){if(Object.keys(ut).indexOf(g)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return ut[g]=j};var qe,at,ze,Ct,vt,Ve={},ct={},Mt=[],ye={},Oe={},Re={},ft={},Tt=null,jt=0,lt=[],_t=new Ru(m),nn=e.hotfixes||[],mr={},Jr={},Vr=[],tt=function g(j,V,te,de,Se,Me){if(!(this instanceof g))return new g(j,V,te,de,Se,Me);isNaN(j)&&(j=1),isNaN(V)&&(V=0),isNaN(te)&&(te=0),isNaN(de)&&(de=1),isNaN(Se)&&(Se=0),isNaN(Me)&&(Me=0),this._matrix=[j,V,te,de,Se,Me]};Object.defineProperty(tt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(g){this._matrix[0]=g}}),Object.defineProperty(tt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(g){this._matrix[1]=g}}),Object.defineProperty(tt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(g){this._matrix[2]=g}}),Object.defineProperty(tt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(g){this._matrix[3]=g}}),Object.defineProperty(tt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(g){this._matrix[4]=g}}),Object.defineProperty(tt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(g){this._matrix[5]=g}}),Object.defineProperty(tt.prototype,"a",{get:function(){return this._matrix[0]},set:function(g){this._matrix[0]=g}}),Object.defineProperty(tt.prototype,"b",{get:function(){return this._matrix[1]},set:function(g){this._matrix[1]=g}}),Object.defineProperty(tt.prototype,"c",{get:function(){return this._matrix[2]},set:function(g){this._matrix[2]=g}}),Object.defineProperty(tt.prototype,"d",{get:function(){return this._matrix[3]},set:function(g){this._matrix[3]=g}}),Object.defineProperty(tt.prototype,"e",{get:function(){return this._matrix[4]},set:function(g){this._matrix[4]=g}}),Object.defineProperty(tt.prototype,"f",{get:function(){return this._matrix[5]},set:function(g){this._matrix[5]=g}}),Object.defineProperty(tt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(tt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(tt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(tt.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),tt.prototype.join=function(g){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(W).join(g)},tt.prototype.multiply=function(g){var j=g.sx*this.sx+g.shy*this.shx,V=g.sx*this.shy+g.shy*this.sy,te=g.shx*this.sx+g.sy*this.shx,de=g.shx*this.shy+g.sy*this.sy,Se=g.tx*this.sx+g.ty*this.shx+this.tx,Me=g.tx*this.shy+g.ty*this.sy+this.ty;return new tt(j,V,te,de,Se,Me)},tt.prototype.decompose=function(){var g=this.sx,j=this.shy,V=this.shx,te=this.sy,de=this.tx,Se=this.ty,Me=Math.sqrt(g*g+j*j),Ue=(g/=Me)*V+(j/=Me)*te;V-=g*Ue,te-=j*Ue;var He=Math.sqrt(V*V+te*te);return Ue/=He,g*(te/=He)<j*(V/=He)&&(g=-g,j=-j,Ue=-Ue,Me=-Me),{scale:new tt(Me,0,0,He,0,0),translate:new tt(1,0,0,1,de,Se),rotate:new tt(g,j,-j,g,0,0),skew:new tt(1,0,Ue,1,0,0)}},tt.prototype.toString=function(g){return this.join(" ")},tt.prototype.inversed=function(){var g=this.sx,j=this.shy,V=this.shx,te=this.sy,de=this.tx,Se=this.ty,Me=1/(g*te-j*V),Ue=te*Me,He=-j*Me,st=-V*Me,mt=g*Me;return new tt(Ue,He,st,mt,-Ue*de-st*Se,-He*de-mt*Se)},tt.prototype.applyToPoint=function(g){var j=g.x*this.sx+g.y*this.shx+this.tx,V=g.x*this.shy+g.y*this.sy+this.ty;return new ue(j,V)},tt.prototype.applyToRectangle=function(g){var j=this.applyToPoint(g),V=this.applyToPoint(new ue(g.x+g.w,g.y+g.h));return new pt(j.x,j.y,V.x-j.x,V.y-j.y)},tt.prototype.clone=function(){var g=this.sx,j=this.shy,V=this.shx,te=this.sy,de=this.tx,Se=this.ty;return new tt(g,j,V,te,de,Se)},m.Matrix=tt;var Mr=m.matrixMult=function(g,j){return j.multiply(g)},on=new tt(1,0,0,1,0,0);m.unitMatrix=m.identityMatrix=on;var Nr=function(g,j){if(!Oe[g]){var V=(j instanceof Jo?"Sh":"P")+(Object.keys(ye).length+1).toString(10);j.id=V,Oe[g]=V,ye[V]=j,_t.publish("addPattern",j)}};m.ShadingPattern=Jo,m.TilingPattern=Ia,m.addShadingPattern=function(g,j){return E("addShadingPattern()"),Nr(g,j),this},m.beginTilingPattern=function(g){E("beginTilingPattern()"),Or(g.boundingBox[0],g.boundingBox[1],g.boundingBox[2]-g.boundingBox[0],g.boundingBox[3]-g.boundingBox[1],g.matrix)},m.endTilingPattern=function(g,j){E("endTilingPattern()"),j.stream=_e[z].join(`
`),Nr(g,j),_t.publish("endTilingPattern",j),Vr.pop().restore()};var Dr,qt=m.__private__.newObject=function(){var g=gr();return xr(g,!0),g},gr=m.__private__.newObjectDeferred=function(){return ee++,se[ee]=function(){return ie},ee},xr=function(g,j){return j=typeof j=="boolean"&&j,se[g]=ie,j&&Z(g+" 0 obj"),g},Qn=m.__private__.newAdditionalObject=function(){var g={objId:gr(),content:""};return xe.push(g),g},ei=gr(),Ar=gr(),Sn=m.__private__.decodeColorString=function(g){var j=g.split(" ");if(j.length!==2||j[1]!=="g"&&j[1]!=="G")j.length!==5||j[4]!=="k"&&j[4]!=="K"||(j=[(1-j[0])*(1-j[3]),(1-j[1])*(1-j[3]),(1-j[2])*(1-j[3]),"r"]);else{var V=parseFloat(j[0]);j=[V,V,V,"r"]}for(var te="#",de=0;de<3;de++)te+=("0"+Math.floor(255*parseFloat(j[de])).toString(16)).slice(-2);return te},an=m.__private__.encodeColorString=function(g){var j;typeof g=="string"&&(g={ch1:g});var V=g.ch1,te=g.ch2,de=g.ch3,Se=g.ch4,Me=g.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof V=="string"&&V.charAt(0)!=="#"){var Ue=new wf(V);if(Ue.ok)V=Ue.toHex();else if(!/^\d*\.?\d*$/.test(V))throw new Error('Invalid color "'+V+'" passed to jsPDF.encodeColorString.')}if(typeof V=="string"&&/^#[0-9A-Fa-f]{3}$/.test(V)&&(V="#"+V[1]+V[1]+V[2]+V[2]+V[3]+V[3]),typeof V=="string"&&/^#[0-9A-Fa-f]{6}$/.test(V)){var He=parseInt(V.substr(1),16);V=He>>16&255,te=He>>8&255,de=255&He}if(te===void 0||Se===void 0&&V===te&&te===de)j=typeof V=="string"?V+" "+Me[0]:g.precision===2?S(V/255)+" "+Me[0]:T(V/255)+" "+Me[0];else if(Se===void 0||zt(Se)==="object"){if(Se&&!isNaN(Se.a)&&Se.a===0)return["1.","1.","1.",Me[1]].join(" ");j=typeof V=="string"?[V,te,de,Me[1]].join(" "):g.precision===2?[S(V/255),S(te/255),S(de/255),Me[1]].join(" "):[T(V/255),T(te/255),T(de/255),Me[1]].join(" ")}else j=typeof V=="string"?[V,te,de,Se,Me[2]].join(" "):g.precision===2?[S(V),S(te),S(de),S(Se),Me[2]].join(" "):[T(V),T(te),T(de),T(Se),Me[2]].join(" ");return j},Kr=m.__private__.getFilters=function(){return l},Yr=m.__private__.putStream=function(g){var j=(g=g||{}).data||"",V=g.filters||Kr(),te=g.alreadyAppliedFilters||[],de=g.addLength1||!1,Se=j.length,Me=g.objectId,Ue=function(wr){return wr};if(p!==null&&Me===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");p!==null&&(Ue=Qt.encryptor(Me,0));var He={};V===!0&&(V=["FlateEncode"]);var st=g.additionalKeyValues||[],mt=(He=Qe.API.processDataByFilters!==void 0?Qe.API.processDataByFilters(j,V):{data:j,reverseChain:[]}).reverseChain+(Array.isArray(te)?te.join(" "):te.toString());if(He.data.length!==0&&(st.push({key:"Length",value:He.data.length}),de===!0&&st.push({key:"Length1",value:Se})),mt.length!=0)if(mt.split("/").length-1==1)st.push({key:"Filter",value:mt});else{st.push({key:"Filter",value:"["+mt+"]"});for(var Pt=0;Pt<st.length;Pt+=1)if(st[Pt].key==="DecodeParms"){for(var er=[],vr=0;vr<He.reverseChain.split("/").length-1;vr+=1)er.push("null");er.push(st[Pt].value),st[Pt].value="["+er.join(" ")+"]"}}Z("<<");for(var Vt=0;Vt<st.length;Vt++)Z("/"+st[Vt].key+" "+st[Vt].value);Z(">>"),He.data.length!==0&&(Z("stream"),Z(Ue(He.data)),Z("endstream"))},wi=m.__private__.putPage=function(g){var j=g.number,V=g.data,te=g.objId,de=g.contentsObjId;xr(te,!0),Z("<</Type /Page"),Z("/Parent "+g.rootDictionaryObjId+" 0 R"),Z("/Resources "+g.resourceDictionaryObjId+" 0 R"),Z("/MediaBox ["+parseFloat(W(g.mediaBox.bottomLeftX))+" "+parseFloat(W(g.mediaBox.bottomLeftY))+" "+W(g.mediaBox.topRightX)+" "+W(g.mediaBox.topRightY)+"]"),g.cropBox!==null&&Z("/CropBox ["+W(g.cropBox.bottomLeftX)+" "+W(g.cropBox.bottomLeftY)+" "+W(g.cropBox.topRightX)+" "+W(g.cropBox.topRightY)+"]"),g.bleedBox!==null&&Z("/BleedBox ["+W(g.bleedBox.bottomLeftX)+" "+W(g.bleedBox.bottomLeftY)+" "+W(g.bleedBox.topRightX)+" "+W(g.bleedBox.topRightY)+"]"),g.trimBox!==null&&Z("/TrimBox ["+W(g.trimBox.bottomLeftX)+" "+W(g.trimBox.bottomLeftY)+" "+W(g.trimBox.topRightX)+" "+W(g.trimBox.topRightY)+"]"),g.artBox!==null&&Z("/ArtBox ["+W(g.artBox.bottomLeftX)+" "+W(g.artBox.bottomLeftY)+" "+W(g.artBox.topRightX)+" "+W(g.artBox.topRightY)+"]"),typeof g.userUnit=="number"&&g.userUnit!==1&&Z("/UserUnit "+g.userUnit),_t.publish("putPage",{objId:te,pageContext:lt[j],pageNumber:j,page:V}),Z("/Contents "+de+" 0 R"),Z(">>"),Z("endobj");var Se=V.join(`
`);return D===P&&(Se+=`
Q`),xr(de,!0),Yr({data:Se,filters:Kr(),objectId:de}),Z("endobj"),te},Rr=m.__private__.putPages=function(){var g,j,V=[];for(g=1;g<=jt;g++)lt[g].objId=gr(),lt[g].contentsObjId=gr();for(g=1;g<=jt;g++)V.push(wi({number:g,data:_e[g],objId:lt[g].objId,contentsObjId:lt[g].contentsObjId,mediaBox:lt[g].mediaBox,cropBox:lt[g].cropBox,bleedBox:lt[g].bleedBox,trimBox:lt[g].trimBox,artBox:lt[g].artBox,userUnit:lt[g].userUnit,rootDictionaryObjId:ei,resourceDictionaryObjId:Ar}));xr(ei,!0),Z("<</Type /Pages");var te="/Kids [";for(j=0;j<jt;j++)te+=V[j]+" 0 R ";Z(te+"]"),Z("/Count "+jt),Z(">>"),Z("endobj"),_t.publish("postPutPages")},An=function(g){_t.publish("putFont",{font:g,out:Z,newObject:qt,putStream:Yr}),g.isAlreadyPutted!==!0&&(g.objectNumber=qt(),Z("<<"),Z("/Type /Font"),Z("/BaseFont /"+Ma(g.postScriptName)),Z("/Subtype /Type1"),typeof g.encoding=="string"&&Z("/Encoding /"+g.encoding),Z("/FirstChar 32"),Z("/LastChar 255"),Z(">>"),Z("endobj"))},ti=function(g){g.objectNumber=qt();var j=[];j.push({key:"Type",value:"/XObject"}),j.push({key:"Subtype",value:"/Form"}),j.push({key:"BBox",value:"["+[W(g.x),W(g.y),W(g.x+g.width),W(g.y+g.height)].join(" ")+"]"}),j.push({key:"Matrix",value:"["+g.matrix.toString()+"]"});var V=g.pages[1].join(`
`);Yr({data:V,additionalKeyValues:j,objectId:g.objectNumber}),Z("endobj")},yi=function(g,j){j||(j=21);var V=qt(),te=function(Me,Ue){var He,st=[],mt=1/(Ue-1);for(He=0;He<1;He+=mt)st.push(He);if(st.push(1),Me[0].offset!=0){var Pt={offset:0,color:Me[0].color};Me.unshift(Pt)}if(Me[Me.length-1].offset!=1){var er={offset:1,color:Me[Me.length-1].color};Me.push(er)}for(var vr="",Vt=0,wr=0;wr<st.length;wr++){for(He=st[wr];He>Me[Vt+1].offset;)Vt++;var br=Me[Vt].offset,Ir=(He-br)/(Me[Vt+1].offset-br),Mn=Me[Vt].color,Qr=Me[Vt+1].color;vr+=Q(Math.round((1-Ir)*Mn[0]+Ir*Qr[0]).toString(16))+Q(Math.round((1-Ir)*Mn[1]+Ir*Qr[1]).toString(16))+Q(Math.round((1-Ir)*Mn[2]+Ir*Qr[2]).toString(16))}return vr.trim()}(g.colors,j),de=[];de.push({key:"FunctionType",value:"0"}),de.push({key:"Domain",value:"[0.0 1.0]"}),de.push({key:"Size",value:"["+j+"]"}),de.push({key:"BitsPerSample",value:"8"}),de.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),de.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Yr({data:te,additionalKeyValues:de,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:V}),Z("endobj"),g.objectNumber=qt(),Z("<< /ShadingType "+g.type),Z("/ColorSpace /DeviceRGB");var Se="/Coords ["+W(parseFloat(g.coords[0]))+" "+W(parseFloat(g.coords[1]))+" ";g.type===2?Se+=W(parseFloat(g.coords[2]))+" "+W(parseFloat(g.coords[3])):Se+=W(parseFloat(g.coords[2]))+" "+W(parseFloat(g.coords[3]))+" "+W(parseFloat(g.coords[4]))+" "+W(parseFloat(g.coords[5])),Z(Se+="]"),g.matrix&&Z("/Matrix ["+g.matrix.toString()+"]"),Z("/Function "+V+" 0 R"),Z("/Extend [true true]"),Z(">>"),Z("endobj")},ri=function(g,j){var V=gr(),te=qt();j.push({resourcesOid:V,objectOid:te}),g.objectNumber=te;var de=[];de.push({key:"Type",value:"/Pattern"}),de.push({key:"PatternType",value:"1"}),de.push({key:"PaintType",value:"1"}),de.push({key:"TilingType",value:"1"}),de.push({key:"BBox",value:"["+g.boundingBox.map(W).join(" ")+"]"}),de.push({key:"XStep",value:W(g.xStep)}),de.push({key:"YStep",value:W(g.yStep)}),de.push({key:"Resources",value:V+" 0 R"}),g.matrix&&de.push({key:"Matrix",value:"["+g.matrix.toString()+"]"}),Yr({data:g.stream,additionalKeyValues:de,objectId:g.objectNumber}),Z("endobj")},oa=function(g){for(var j in g.objectNumber=qt(),Z("<<"),g)switch(j){case"opacity":Z("/ca "+S(g[j]));break;case"stroke-opacity":Z("/CA "+S(g[j]))}Z(">>"),Z("endobj")},_i=function(g){xr(g.resourcesOid,!0),Z("<<"),Z("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var j in Z("/Font <<"),Ve)Ve.hasOwnProperty(j)&&(v===!1||v===!0&&A.hasOwnProperty(j))&&Z("/"+j+" "+Ve[j].objectNumber+" 0 R");Z(">>")}(),function(){if(Object.keys(ye).length>0){for(var j in Z("/Shading <<"),ye)ye.hasOwnProperty(j)&&ye[j]instanceof Jo&&ye[j].objectNumber>=0&&Z("/"+j+" "+ye[j].objectNumber+" 0 R");_t.publish("putShadingPatternDict"),Z(">>")}}(),function(j){if(Object.keys(ye).length>0){for(var V in Z("/Pattern <<"),ye)ye.hasOwnProperty(V)&&ye[V]instanceof m.TilingPattern&&ye[V].objectNumber>=0&&ye[V].objectNumber<j&&Z("/"+V+" "+ye[V].objectNumber+" 0 R");_t.publish("putTilingPatternDict"),Z(">>")}}(g.objectOid),function(){if(Object.keys(Re).length>0){var j;for(j in Z("/ExtGState <<"),Re)Re.hasOwnProperty(j)&&Re[j].objectNumber>=0&&Z("/"+j+" "+Re[j].objectNumber+" 0 R");_t.publish("putGStateDict"),Z(">>")}}(),function(){for(var j in Z("/XObject <<"),mr)mr.hasOwnProperty(j)&&mr[j].objectNumber>=0&&Z("/"+j+" "+mr[j].objectNumber+" 0 R");_t.publish("putXobjectDict"),Z(">>")}(),Z(">>"),Z("endobj")},ko=function(g){ct[g.fontName]=ct[g.fontName]||{},ct[g.fontName][g.fontStyle]=g.id},Mo=function(g,j,V,te,de){var Se={id:"F"+(Object.keys(Ve).length+1).toString(10),postScriptName:g,fontName:j,fontStyle:V,encoding:te,isStandardFont:de||!1,metadata:{}};return _t.publish("addFont",{font:Se,instance:this}),Ve[Se.id]=Se,ko(Se),Se.id},Gr=m.__private__.pdfEscape=m.pdfEscape=function(g,j){return function(V,te){var de,Se,Me,Ue,He,st,mt,Pt,er;if(Me=(te=te||{}).sourceEncoding||"Unicode",He=te.outputEncoding,(te.autoencode||He)&&Ve[qe].metadata&&Ve[qe].metadata[Me]&&Ve[qe].metadata[Me].encoding&&(Ue=Ve[qe].metadata[Me].encoding,!He&&Ve[qe].encoding&&(He=Ve[qe].encoding),!He&&Ue.codePages&&(He=Ue.codePages[0]),typeof He=="string"&&(He=Ue[He]),He)){for(mt=!1,st=[],de=0,Se=V.length;de<Se;de++)(Pt=He[V.charCodeAt(de)])?st.push(String.fromCharCode(Pt)):st.push(V[de]),st[de].charCodeAt(0)>>8&&(mt=!0);V=st.join("")}for(de=V.length;mt===void 0&&de!==0;)V.charCodeAt(de-1)>>8&&(mt=!0),de--;if(!mt)return V;for(st=te.noBOM?[]:[254,255],de=0,Se=V.length;de<Se;de++){if((er=(Pt=V.charCodeAt(de))>>8)>>8)throw new Error("Character at position "+de+" of string '"+V+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");st.push(er),st.push(Pt-(er<<8))}return String.fromCharCode.apply(void 0,st)}(g,j).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Hi=m.__private__.beginPage=function(g){_e[++jt]=[],lt[jt]={objId:0,contentsObjId:0,userUnit:Number(c),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(g[0]),topRightY:Number(g[1])}},No(jt),be(_e[z])},aa=function(g,j){var V,te,de;switch(r=j||r,typeof g=="string"&&(V=C(g.toLowerCase()),Array.isArray(V)&&(te=V[0],de=V[1])),Array.isArray(g)&&(te=g[0]*at,de=g[1]*at),isNaN(te)&&(te=o[0],de=o[1]),(te>14400||de>14400)&&($t.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),te=Math.min(14400,te),de=Math.min(14400,de)),o=[te,de],r.substr(0,1)){case"l":de>te&&(o=[de,te]);break;case"p":te>de&&(o=[de,te])}Hi(o),Po(Ji),Z(Qi),To!==0&&Z(To+" J"),Eo!==0&&Z(Eo+" j"),_t.publish("addPage",{pageNumber:jt})},$i=function(g){g>0&&g<=jt&&(_e.splice(g,1),lt.splice(g,1),jt--,z>jt&&(z=jt),this.setPage(z))},No=function(g){g>0&&g<=jt&&(z=g)},jo=m.__private__.getNumberOfPages=m.getNumberOfPages=function(){return _e.length-1},sa=function(g,j,V){var te,de=void 0;return V=V||{},g=g!==void 0?g:Ve[qe].fontName,j=j!==void 0?j:Ve[qe].fontStyle,te=g.toLowerCase(),ct[te]!==void 0&&ct[te][j]!==void 0?de=ct[te][j]:ct[g]!==void 0&&ct[g][j]!==void 0?de=ct[g][j]:V.disableWarning===!1&&$t.warn("Unable to look up font label for font '"+g+"', '"+j+"'. Refer to getFontList() for available fonts."),de||V.noFallback||(de=ct.times[j])==null&&(de=ct.times.normal),de},ni=m.__private__.putInfo=function(){var g=qt(),j=function(te){return te};for(var V in p!==null&&(j=Qt.encryptor(g,0)),Z("<<"),Z("/Producer ("+Gr(j("jsPDF "+Qe.version))+")"),ut)ut.hasOwnProperty(V)&&ut[V]&&Z("/"+V.substr(0,1).toUpperCase()+V.substr(1)+" ("+Gr(j(ut[V]))+")");Z("/CreationDate ("+Gr(j(ne))+")"),Z(">>"),Z("endobj")},qi=m.__private__.putCatalog=function(g){var j=(g=g||{}).rootDictionaryObjId||ei;switch(qt(),Z("<<"),Z("/Type /Catalog"),Z("/Pages "+j+" 0 R"),Fe||(Fe="fullwidth"),Fe){case"fullwidth":Z("/OpenAction [3 0 R /FitH null]");break;case"fullheight":Z("/OpenAction [3 0 R /FitV null]");break;case"fullpage":Z("/OpenAction [3 0 R /Fit]");break;case"original":Z("/OpenAction [3 0 R /XYZ null null 1]");break;default:var V=""+Fe;V.substr(V.length-1)==="%"&&(Fe=parseInt(Fe)/100),typeof Fe=="number"&&Z("/OpenAction [3 0 R /XYZ null null "+S(Fe)+"]")}switch(it||(it="continuous"),it){case"continuous":Z("/PageLayout /OneColumn");break;case"single":Z("/PageLayout /SinglePage");break;case"two":case"twoleft":Z("/PageLayout /TwoColumnLeft");break;case"tworight":Z("/PageLayout /TwoColumnRight")}Be&&Z("/PageMode /"+Be),_t.publish("putCatalog"),Z(">>"),Z("endobj")},Bt=m.__private__.putTrailer=function(){Z("trailer"),Z("<<"),Z("/Size "+(ee+1)),Z("/Root "+ee+" 0 R"),Z("/Info "+(ee-1)+" 0 R"),p!==null&&Z("/Encrypt "+Qt.oid+" 0 R"),Z("/ID [ <"+ce+"> <"+ce+"> ]"),Z(">>")},Vi=m.__private__.putHeader=function(){Z("%PDF-"+b),Z("%ºß¬à")},ii=m.__private__.putXRef=function(){var g="0000000000";Z("xref"),Z("0 "+(ee+1)),Z("0000000000 65535 f ");for(var j=1;j<=ee;j++)typeof se[j]=="function"?Z((g+se[j]()).slice(-10)+" 00000 n "):se[j]!==void 0?Z((g+se[j]).slice(-10)+" 00000 n "):Z("0000000000 00000 n ")},sn=m.__private__.buildDocument=function(){var g;ee=0,ie=0,fe=[],se=[],xe=[],ei=gr(),Ar=gr(),be(fe),_t.publish("buildDocument"),Vi(),Rr(),function(){_t.publish("putAdditionalObjects");for(var V=0;V<xe.length;V++){var te=xe[V];xr(te.objId,!0),Z(te.content),Z("endobj")}_t.publish("postPutAdditionalObjects")}(),g=[],function(){for(var V in Ve)Ve.hasOwnProperty(V)&&(v===!1||v===!0&&A.hasOwnProperty(V))&&An(Ve[V])}(),function(){var V;for(V in Re)Re.hasOwnProperty(V)&&oa(Re[V])}(),function(){for(var V in mr)mr.hasOwnProperty(V)&&ti(mr[V])}(),function(V){var te;for(te in ye)ye.hasOwnProperty(te)&&(ye[te]instanceof Jo?yi(ye[te]):ye[te]instanceof Ia&&ri(ye[te],V))}(g),_t.publish("putResources"),g.forEach(_i),_i({resourcesOid:Ar,objectOid:Number.MAX_SAFE_INTEGER}),_t.publish("postPutResources"),p!==null&&(Qt.oid=qt(),Z("<<"),Z("/Filter /Standard"),Z("/V "+Qt.v),Z("/R "+Qt.r),Z("/U <"+Qt.toHexString(Qt.U)+">"),Z("/O <"+Qt.toHexString(Qt.O)+">"),Z("/P "+Qt.P),Z(">>"),Z("endobj")),ni(),qi();var j=ie;return ii(),Bt(),Z("startxref"),Z(""+j),Z("%%EOF"),be(_e[z]),fe.join(`
`)},Ci=m.__private__.getBlob=function(g){return new Blob([Je(g)],{type:"application/pdf"})},ln=m.output=m.__private__.output=(Dr=function(g,j){switch(typeof(j=j||{})=="string"?j={filename:j}:j.filename=j.filename||"generated.pdf",g){case void 0:return sn();case"save":m.save(j.filename);break;case"arraybuffer":return Je(sn());case"blob":return Ci(sn());case"bloburi":case"bloburl":if(ht.URL!==void 0&&typeof ht.URL.createObjectURL=="function")return ht.URL&&ht.URL.createObjectURL(Ci(sn()))||void 0;$t.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var V="",te=sn();try{V=Tu(te)}catch{V=Tu(unescape(encodeURIComponent(te)))}return"data:application/pdf;filename="+j.filename+";base64,"+V;case"pdfobjectnewwindow":if(Object.prototype.toString.call(ht)==="[object Window]"){var de="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",Se=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';j.pdfObjectUrl&&(de=j.pdfObjectUrl,Se="");var Me='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+de+'"'+Se+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(j)+");<\/script></body></html>",Ue=ht.open();return Ue!==null&&Ue.document.write(Me),Ue}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(ht)==="[object Window]"){var He='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(j.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+j.filename+'" width="500px" height="400px" /></body></html>',st=ht.open();if(st!==null){st.document.write(He);var mt=this;st.document.documentElement.querySelector("#pdfViewer").onload=function(){st.document.title=j.filename,st.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(mt.output("bloburl"))}}return st}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(ht)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var Pt='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",j)+'"></iframe></body></html>',er=ht.open();if(er!==null&&(er.document.write(Pt),er.document.title=j.filename),er||typeof safari>"u")return er;break;case"datauri":case"dataurl":return ht.document.location.href=this.output("datauristring",j);default:return null}},Dr.foo=function(){try{return Dr.apply(this,arguments)}catch(V){var g=V.stack||"";~g.indexOf(" at ")&&(g=g.split(" at ")[1]);var j="Error in function "+g.split(`
`)[0].split("<")[0]+": "+V.message;if(!ht.console)throw new Error(j);ht.console.error(j,V),ht.alert&&alert(j)}},Dr.foo.bar=Dr,Dr.foo),Si=function(g){return Array.isArray(nn)===!0&&nn.indexOf(g)>-1};switch(n){case"pt":at=1;break;case"mm":at=72/25.4;break;case"cm":at=72/2.54;break;case"in":at=72;break;case"px":at=Si("px_scaling")==1?.75:96/72;break;case"pc":case"em":at=12;break;case"ex":at=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);at=n}var Qt=null;re(),ae();var Yi=m.__private__.getPageInfo=m.getPageInfo=function(g){if(isNaN(g)||g%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:lt[g].objId,pageNumber:g,pageContext:lt[g]}},Io=m.__private__.getPageInfoByObjId=function(g){if(isNaN(g)||g%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var j in lt)if(lt[j].objId===g)break;return Yi(j)},Lo=m.__private__.getCurrentPageInfo=m.getCurrentPageInfo=function(){return{objId:lt[z].objId,pageNumber:z,pageContext:lt[z]}};m.addPage=function(){return aa.apply(this,arguments),this},m.setPage=function(){return No.apply(this,arguments),be.call(this,_e[z]),this},m.insertPage=function(g){return this.addPage(),this.movePage(z,g),this},m.movePage=function(g,j){var V,te;if(g>j){V=_e[g],te=lt[g];for(var de=g;de>j;de--)_e[de]=_e[de-1],lt[de]=lt[de-1];_e[j]=V,lt[j]=te,this.setPage(j)}else if(g<j){V=_e[g],te=lt[g];for(var Se=g;Se<j;Se++)_e[Se]=_e[Se+1],lt[Se]=lt[Se+1];_e[j]=V,lt[j]=te,this.setPage(j)}return this},m.deletePage=function(){return $i.apply(this,arguments),this},m.__private__.text=m.text=function(g,j,V,te,de){var Se,Me,Ue,He,st,mt,Pt,er,vr,Vt=(te=te||{}).scope||this;if(typeof g=="number"&&typeof j=="number"&&(typeof V=="string"||Array.isArray(V))){var wr=V;V=j,j=g,g=wr}if(arguments[3]instanceof tt==0?(Ue=arguments[4],He=arguments[5],zt(Pt=arguments[3])==="object"&&Pt!==null||(typeof Ue=="string"&&(He=Ue,Ue=null),typeof Pt=="string"&&(He=Pt,Pt=null),typeof Pt=="number"&&(Ue=Pt,Pt=null),te={flags:Pt,angle:Ue,align:He})):(E("The transform parameter of text() with a Matrix value"),vr=de),isNaN(j)||isNaN(V)||g==null)throw new Error("Invalid arguments passed to jsPDF.text");if(g.length===0)return Vt;var br,Ir="",Mn=typeof te.lineHeightFactor=="number"?te.lineHeightFactor:Zi,Qr=Vt.internal.scaleFactor;function Os(Et){return Et=Et.split("	").join(Array(te.TabLen||9).join(" ")),Gr(Et,Pt)}function fa(Et){for(var Ut,lr=Et.concat(),yr=[],Ii=lr.length;Ii--;)typeof(Ut=lr.shift())=="string"?yr.push(Ut):Array.isArray(Et)&&(Ut.length===1||Ut[1]===void 0&&Ut[2]===void 0)?yr.push(Ut[0]):yr.push([Ut[0],Ut[1],Ut[2]]);return yr}function Oo(Et,Ut){var lr;if(typeof Et=="string")lr=Ut(Et)[0];else if(Array.isArray(Et)){for(var yr,Ii,es=Et.concat(),ga=[],Bs=es.length;Bs--;)typeof(yr=es.shift())=="string"?ga.push(Ut(yr)[0]):Array.isArray(yr)&&typeof yr[0]=="string"&&(Ii=Ut(yr[0],yr[1],yr[2]),ga.push([Ii[0],Ii[1],Ii[2]]));lr=ga}return lr}var ro=!1,Fo=!0;if(typeof g=="string")ro=!0;else if(Array.isArray(g)){var zo=g.concat();Me=[];for(var Bo,Fr=zo.length;Fr--;)(typeof(Bo=zo.shift())!="string"||Array.isArray(Bo)&&typeof Bo[0]!="string")&&(Fo=!1);ro=Fo}if(ro===!1)throw new Error('Type of text must be string or Array. "'+g+'" is not recognized.');typeof g=="string"&&(g=g.match(/[\r?\n]/)?g.split(/\r\n|\r|\n/g):[g]);var Uo=je/Vt.internal.scaleFactor,Ho=Uo*(Mn-1);switch(te.baseline){case"bottom":V-=Ho;break;case"top":V+=Uo-Ho;break;case"hanging":V+=Uo-2*Ho;break;case"middle":V+=Uo/2-Ho}if((mt=te.maxWidth||0)>0&&(typeof g=="string"?g=Vt.splitTextToSize(g,mt):Object.prototype.toString.call(g)==="[object Array]"&&(g=g.reduce(function(Et,Ut){return Et.concat(Vt.splitTextToSize(Ut,mt))},[]))),Se={text:g,x:j,y:V,options:te,mutex:{pdfEscape:Gr,activeFontKey:qe,fonts:Ve,activeFontSize:je}},_t.publish("preProcessText",Se),g=Se.text,Ue=(te=Se.options).angle,vr instanceof tt==0&&Ue&&typeof Ue=="number"){Ue*=Math.PI/180,te.rotationDirection===0&&(Ue=-Ue),D===P&&(Ue=-Ue);var Va=Math.cos(Ue),Ya=Math.sin(Ue);vr=new tt(Va,Ya,-Ya,Va,0,0)}else Ue&&Ue instanceof tt&&(vr=Ue);D!==P||vr||(vr=on),(st=te.charSpace||ki)!==void 0&&(Ir+=W(q(st))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(er=te.horizontalScale)!==void 0&&(Ir+=W(100*er)+` Tz
`),te.lang;var rr=-1,Ni=te.renderingMode!==void 0?te.renderingMode:te.stroke,pa=Vt.internal.getCurrentPageInfo().pageContext;switch(Ni){case 0:case!1:case"fill":rr=0;break;case 1:case!0:case"stroke":rr=1;break;case 2:case"fillThenStroke":rr=2;break;case 3:case"invisible":rr=3;break;case 4:case"fillAndAddForClipping":rr=4;break;case 5:case"strokeAndAddPathForClipping":rr=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":rr=6;break;case 7:case"addToPathForClipping":rr=7}var Fs=pa.usedRenderingMode!==void 0?pa.usedRenderingMode:-1;rr!==-1?Ir+=rr+` Tr
`:Fs!==-1&&(Ir+=`0 Tr
`),rr!==-1&&(pa.usedRenderingMode=rr),He=te.align||"left";var Nn,$o=je*Mn,Ga=Vt.internal.pageSize.getWidth(),Wa=Ve[qe];st=te.charSpace||ki,mt=te.maxWidth||0,Pt=Object.assign({autoencode:!0,noBOM:!0},te.flags);var no=[],qo=function(Et){return Vt.getStringUnitWidth(Et,{font:Wa,charSpace:st,fontSize:je,doKerning:!1})*je/Qr};if(Object.prototype.toString.call(g)==="[object Array]"){var dn;Me=fa(g),He!=="left"&&(Nn=Me.map(qo));var hn,io=0;if(He==="right"){j-=Nn[0],g=[],Fr=Me.length;for(var ji=0;ji<Fr;ji++)ji===0?(hn=Bn(j),dn=un(V)):(hn=q(io-Nn[ji]),dn=-$o),g.push([Me[ji],hn,dn]),io=Nn[ji]}else if(He==="center"){j-=Nn[0]/2,g=[],Fr=Me.length;for(var oo=0;oo<Fr;oo++)oo===0?(hn=Bn(j),dn=un(V)):(hn=q((io-Nn[oo])/2),dn=-$o),g.push([Me[oo],hn,dn]),io=Nn[oo]}else if(He==="left"){g=[],Fr=Me.length;for(var Xa=0;Xa<Fr;Xa++)g.push(Me[Xa])}else if(He==="justify"&&Wa.encoding==="Identity-H"){g=[],Fr=Me.length,mt=mt!==0?mt:Ga;for(var ma=0,sr=0;sr<Fr;sr++)if(dn=sr===0?un(V):-$o,hn=sr===0?Bn(j):ma,sr<Fr-1){var zs=q((mt-Nn[sr])/(Me[sr].split(" ").length-1)),ci=Me[sr].split(" ");g.push([ci[0]+" ",hn,dn]),ma=0;for(var ui=1;ui<ci.length;ui++){var Za=(qo(ci[ui-1]+" "+ci[ui])-qo(ci[ui]))*Qr+zs;ui==ci.length-1?g.push([ci[ui],Za,0]):g.push([ci[ui]+" ",Za,0]),ma-=Za}}else g.push([Me[sr],hn,dn]);g.push(["",ma,0])}else{if(He!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(g=[],Fr=Me.length,mt=mt!==0?mt:Ga,sr=0;sr<Fr;sr++){dn=sr===0?un(V):-$o,hn=sr===0?Bn(j):0;var Ja=Me[sr].split(" ").length-1,Ka=Ja>0?(mt-Nn[sr])/Ja:0;sr<Fr-1?no.push(W(q(Ka))):no.push(0),g.push([Me[sr],hn,dn])}}}(typeof te.R2L=="boolean"?te.R2L:nt)===!0&&(g=Oo(g,function(Et,Ut,lr){return[Et.split("").reverse().join(""),Ut,lr]})),Se={text:g,x:j,y:V,options:te,mutex:{pdfEscape:Gr,activeFontKey:qe,fonts:Ve,activeFontSize:je}},_t.publish("postProcessText",Se),g=Se.text,br=Se.mutex.isHex||!1;var Qa=Ve[qe].encoding;Qa!=="WinAnsiEncoding"&&Qa!=="StandardEncoding"||(g=Oo(g,function(Et,Ut,lr){return[Os(Et),Ut,lr]})),Me=fa(g),g=[];for(var ao,so,lo,Vo=Array.isArray(Me[0])?1:0,co="",Yo=function(Et,Ut,lr){var yr="";return lr instanceof tt?(lr=typeof te.angle=="number"?Mr(lr,new tt(1,0,0,1,Et,Ut)):Mr(new tt(1,0,0,1,Et,Ut),lr),D===P&&(lr=Mr(new tt(1,0,0,-1,0,0),lr)),yr=lr.join(" ")+` Tm
`):yr=W(Et)+" "+W(Ut)+` Td
`,yr},jn=0;jn<Me.length;jn++){switch(co="",Vo){case 1:lo=(br?"<":"(")+Me[jn][0]+(br?">":")"),ao=parseFloat(Me[jn][1]),so=parseFloat(Me[jn][2]);break;case 0:lo=(br?"<":"(")+Me[jn]+(br?">":")"),ao=Bn(j),so=un(V)}no!==void 0&&no[jn]!==void 0&&(co=no[jn]+` Tw
`),jn===0?g.push(co+Yo(ao,so,vr)+lo):Vo===0?g.push(co+lo):Vo===1&&g.push(co+Yo(ao,so,vr)+lo)}g=Vo===0?g.join(` Tj
T* `):g.join(` Tj
`),g+=` Tj
`;var di=`BT
/`;return di+=qe+" "+je+` Tf
`,di+=W(je*Mn)+` TL
`,di+=ai+`
`,di+=Ir,di+=g,Z(di+="ET"),A[qe]=!0,Vt};var Ba=m.__private__.clip=m.clip=function(g){return Z(g==="evenodd"?"W*":"W"),this};m.clipEvenOdd=function(){return Ba("evenodd")},m.__private__.discardPath=m.discardPath=function(){return Z("n"),this};var jr=m.__private__.isValidStyle=function(g){var j=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(g)!==-1&&(j=!0),j};m.__private__.setDefaultPathOperation=m.setDefaultPathOperation=function(g){return jr(g)&&(f=g),this};var Gi=m.__private__.getStyle=m.getStyle=function(g){var j=f;switch(g){case"D":case"S":j="S";break;case"F":j="f";break;case"FD":case"DF":j="B";break;case"f":case"f*":case"B":case"B*":j=g}return j},oi=m.close=function(){return Z("h"),this};m.stroke=function(){return Z("S"),this},m.fill=function(g){return cn("f",g),this},m.fillEvenOdd=function(g){return cn("f*",g),this},m.fillStroke=function(g){return cn("B",g),this},m.fillStrokeEvenOdd=function(g){return cn("B*",g),this};var cn=function(g,j){zt(j)==="object"?ca(j,g):Z(g)},Ai=function(g){g===null||D===P&&g===void 0||(g=Gi(g),Z(g))};function la(g,j,V,te,de){var Se=new Ia(j||this.boundingBox,V||this.xStep,te||this.yStep,this.gState,de||this.matrix);Se.stream=this.stream;var Me=g+"$$"+this.cloneIndex+++"$$";return Nr(Me,Se),Se}var ca=function(g,j){var V=Oe[g.key],te=ye[V];if(te instanceof Jo)Z("q"),Z(Wi(j)),te.gState&&m.setGState(te.gState),Z(g.matrix.toString()+" cm"),Z("/"+V+" sh"),Z("Q");else if(te instanceof Ia){var de=new tt(1,0,0,-1,0,li());g.matrix&&(de=de.multiply(g.matrix||on),V=la.call(te,g.key,g.boundingBox,g.xStep,g.yStep,de).id),Z("q"),Z("/Pattern cs"),Z("/"+V+" scn"),te.gState&&m.setGState(te.gState),Z(j),Z("Q")}},Wi=function(g){switch(g){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},Xi=m.moveTo=function(g,j){return Z(W(q(g))+" "+W($(j))+" m"),this},zn=m.lineTo=function(g,j){return Z(W(q(g))+" "+W($(j))+" l"),this},kn=m.curveTo=function(g,j,V,te,de,Se){return Z([W(q(g)),W($(j)),W(q(V)),W($(te)),W(q(de)),W($(Se)),"c"].join(" ")),this};m.__private__.line=m.line=function(g,j,V,te,de){if(isNaN(g)||isNaN(j)||isNaN(V)||isNaN(te)||!jr(de))throw new Error("Invalid arguments passed to jsPDF.line");return D===L?this.lines([[V-g,te-j]],g,j,[1,1],de||"S"):this.lines([[V-g,te-j]],g,j,[1,1]).stroke()},m.__private__.lines=m.lines=function(g,j,V,te,de,Se){var Me,Ue,He,st,mt,Pt,er,vr,Vt,wr,br,Ir;if(typeof g=="number"&&(Ir=V,V=j,j=g,g=Ir),te=te||[1,1],Se=Se||!1,isNaN(j)||isNaN(V)||!Array.isArray(g)||!Array.isArray(te)||!jr(de)||typeof Se!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(Xi(j,V),Me=te[0],Ue=te[1],st=g.length,wr=j,br=V,He=0;He<st;He++)(mt=g[He]).length===2?(wr=mt[0]*Me+wr,br=mt[1]*Ue+br,zn(wr,br)):(Pt=mt[0]*Me+wr,er=mt[1]*Ue+br,vr=mt[2]*Me+wr,Vt=mt[3]*Ue+br,wr=mt[4]*Me+wr,br=mt[5]*Ue+br,kn(Pt,er,vr,Vt,wr,br));return Se&&oi(),Ai(de),this},m.path=function(g){for(var j=0;j<g.length;j++){var V=g[j],te=V.c;switch(V.op){case"m":Xi(te[0],te[1]);break;case"l":zn(te[0],te[1]);break;case"c":kn.apply(this,te);break;case"h":oi()}}return this},m.__private__.rect=m.rect=function(g,j,V,te,de){if(isNaN(g)||isNaN(j)||isNaN(V)||isNaN(te)||!jr(de))throw new Error("Invalid arguments passed to jsPDF.rect");return D===L&&(te=-te),Z([W(q(g)),W($(j)),W(q(V)),W(q(te)),"re"].join(" ")),Ai(de),this},m.__private__.triangle=m.triangle=function(g,j,V,te,de,Se,Me){if(isNaN(g)||isNaN(j)||isNaN(V)||isNaN(te)||isNaN(de)||isNaN(Se)||!jr(Me))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[V-g,te-j],[de-V,Se-te],[g-de,j-Se]],g,j,[1,1],Me,!0),this},m.__private__.roundedRect=m.roundedRect=function(g,j,V,te,de,Se,Me){if(isNaN(g)||isNaN(j)||isNaN(V)||isNaN(te)||isNaN(de)||isNaN(Se)||!jr(Me))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Ue=4/3*(Math.SQRT2-1);return de=Math.min(de,.5*V),Se=Math.min(Se,.5*te),this.lines([[V-2*de,0],[de*Ue,0,de,Se-Se*Ue,de,Se],[0,te-2*Se],[0,Se*Ue,-de*Ue,Se,-de,Se],[2*de-V,0],[-de*Ue,0,-de,-Se*Ue,-de,-Se],[0,2*Se-te],[0,-Se*Ue,de*Ue,-Se,de,-Se]],g+de,j,[1,1],Me,!0),this},m.__private__.ellipse=m.ellipse=function(g,j,V,te,de){if(isNaN(g)||isNaN(j)||isNaN(V)||isNaN(te)||!jr(de))throw new Error("Invalid arguments passed to jsPDF.ellipse");var Se=4/3*(Math.SQRT2-1)*V,Me=4/3*(Math.SQRT2-1)*te;return Xi(g+V,j),kn(g+V,j-Me,g+Se,j-te,g,j-te),kn(g-Se,j-te,g-V,j-Me,g-V,j),kn(g-V,j+Me,g-Se,j+te,g,j+te),kn(g+Se,j+te,g+V,j+Me,g+V,j),Ai(de),this},m.__private__.circle=m.circle=function(g,j,V,te){if(isNaN(g)||isNaN(j)||isNaN(V)||!jr(te))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(g,j,V,V,te)},m.setFont=function(g,j,V){return V&&(j=K(j,V)),qe=sa(g,j,{disableWarning:!1}),this};var ua=m.__private__.getFont=m.getFont=function(){return Ve[sa.apply(m,arguments)]};m.__private__.getFontList=m.getFontList=function(){var g,j,V={};for(g in ct)if(ct.hasOwnProperty(g))for(j in V[g]=[],ct[g])ct[g].hasOwnProperty(j)&&V[g].push(j);return V},m.addFont=function(g,j,V,te,de){var Se=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&Se.indexOf(arguments[3])!==-1?de=arguments[3]:arguments[3]&&Se.indexOf(arguments[3])==-1&&(V=K(V,te)),Mo.call(this,g,j,V,de=de||"Identity-H")};var Zi,Ji=e.lineWidth||.200025,dt=m.__private__.getLineWidth=m.getLineWidth=function(){return Ji},Po=m.__private__.setLineWidth=m.setLineWidth=function(g){return Ji=g,Z(W(q(g))+" w"),this};m.__private__.setLineDash=Qe.API.setLineDash=Qe.API.setLineDashPattern=function(g,j){if(g=g||[],j=j||0,isNaN(j)||!Array.isArray(g))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return g=g.map(function(V){return W(q(V))}).join(" "),j=W(q(j)),Z("["+g+"] "+j+" d"),this};var Ua=m.__private__.getLineHeight=m.getLineHeight=function(){return je*Zi};m.__private__.getLineHeight=m.getLineHeight=function(){return je*Zi};var Ha=m.__private__.setLineHeightFactor=m.setLineHeightFactor=function(g){return typeof(g=g||1.15)=="number"&&(Zi=g),this},Ki=m.__private__.getLineHeightFactor=m.getLineHeightFactor=function(){return Zi};Ha(e.lineHeight);var Bn=m.__private__.getHorizontalCoordinate=function(g){return q(g)},un=m.__private__.getVerticalCoordinate=function(g){return D===P?g:lt[z].mediaBox.topRightY-lt[z].mediaBox.bottomLeftY-q(g)},$a=m.__private__.getHorizontalCoordinateString=m.getHorizontalCoordinateString=function(g){return W(Bn(g))},da=m.__private__.getVerticalCoordinateString=m.getVerticalCoordinateString=function(g){return W(un(g))},Qi=e.strokeColor||"0 G";m.__private__.getStrokeColor=m.getDrawColor=function(){return Sn(Qi)},m.__private__.setStrokeColor=m.setDrawColor=function(g,j,V,te){return Qi=an({ch1:g,ch2:j,ch3:V,ch4:te,pdfColorType:"draw",precision:2}),Z(Qi),this};var Un=e.fillColor||"0 g";m.__private__.getFillColor=m.getFillColor=function(){return Sn(Un)},m.__private__.setFillColor=m.setFillColor=function(g,j,V,te){return Un=an({ch1:g,ch2:j,ch3:V,ch4:te,pdfColorType:"fill",precision:2}),Z(Un),this};var ai=e.textColor||"0 g",eo=m.__private__.getTextColor=m.getTextColor=function(){return Sn(ai)};m.__private__.setTextColor=m.setTextColor=function(g,j,V,te){return ai=an({ch1:g,ch2:j,ch3:V,ch4:te,pdfColorType:"text",precision:3}),this};var ki=e.charSpace,qa=m.__private__.getCharSpace=m.getCharSpace=function(){return parseFloat(ki||0)};m.__private__.setCharSpace=m.setCharSpace=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return ki=g,this};var To=0;m.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},m.__private__.setLineCap=m.setLineCap=function(g){var j=m.CapJoinStyles[g];if(j===void 0)throw new Error("Line cap style of '"+g+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return To=j,Z(j+" J"),this};var Eo=0;m.__private__.setLineJoin=m.setLineJoin=function(g){var j=m.CapJoinStyles[g];if(j===void 0)throw new Error("Line join style of '"+g+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Eo=j,Z(j+" j"),this},m.__private__.setLineMiterLimit=m.__private__.setMiterLimit=m.setLineMiterLimit=m.setMiterLimit=function(g){if(g=g||0,isNaN(g))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return Z(W(q(g))+" M"),this},m.GState=Xl,m.setGState=function(g){(g=typeof g=="string"?Re[ft[g]]:si(null,g)).equals(Tt)||(Z("/"+g.id+" gs"),Tt=g)};var si=function(g,j){if(!g||!ft[g]){var V=!1;for(var te in Re)if(Re.hasOwnProperty(te)&&Re[te].equals(j)){V=!0;break}if(V)j=Re[te];else{var de="GS"+(Object.keys(Re).length+1).toString(10);Re[de]=j,j.id=de}return g&&(ft[g]=j.id),_t.publish("addGState",j),j}};m.addGState=function(g,j){return si(g,j),this},m.saveGraphicsState=function(){return Z("q"),Mt.push({key:qe,size:je,color:ai}),this},m.restoreGraphicsState=function(){Z("Q");var g=Mt.pop();return qe=g.key,je=g.size,ai=g.color,Tt=null,this},m.setCurrentTransformationMatrix=function(g){return Z(g.toString()+" cm"),this},m.comment=function(g){return Z("#"+g),this};var ue=function(g,j){var V=g||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return V},set:function(Se){isNaN(Se)||(V=parseFloat(Se))}});var te=j||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return te},set:function(Se){isNaN(Se)||(te=parseFloat(Se))}});var de="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return de},set:function(Se){de=Se.toString()}}),this},pt=function(g,j,V,te){ue.call(this,g,j),this.type="rect";var de=V||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return de},set:function(Me){isNaN(Me)||(de=parseFloat(Me))}});var Se=te||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return Se},set:function(Me){isNaN(Me)||(Se=parseFloat(Me))}}),this},Gt=function(){this.page=jt,this.currentPage=z,this.pages=_e.slice(0),this.pagesContext=lt.slice(0),this.x=ze,this.y=Ct,this.matrix=vt,this.width=to(z),this.height=Hn(z),this.outputDestination=Pe,this.id="",this.objectNumber=-1};Gt.prototype.restore=function(){jt=this.page,z=this.currentPage,lt=this.pagesContext,_e=this.pages,ze=this.x,Ct=this.y,vt=this.matrix,Do(z,this.width),Wt(z,this.height),Pe=this.outputDestination};var Or=function(g,j,V,te,de){Vr.push(new Gt),jt=z=0,_e=[],ze=g,Ct=j,vt=de,Hi([V,te])};for(var ar in m.beginFormObject=function(g,j,V,te,de){return Or(g,j,V,te,de),this},m.endFormObject=function(g){return function(j){if(Jr[j])Vr.pop().restore();else{var V=new Gt,te="Xo"+(Object.keys(mr).length+1).toString(10);V.id=te,Jr[j]=te,mr[te]=V,_t.publish("addFormObject",V),Vr.pop().restore()}}(g),this},m.doFormObject=function(g,j){var V=mr[Jr[g]];return Z("q"),Z(j.toString()+" cm"),Z("/"+V.id+" Do"),Z("Q"),this},m.getFormObject=function(g){var j=mr[Jr[g]];return{x:j.x,y:j.y,width:j.width,height:j.height,matrix:j.matrix}},m.save=function(g,j){return g=g||"generated.pdf",(j=j||{}).returnPromise=j.returnPromise||!1,j.returnPromise===!1?(Zo(Ci(sn()),g),typeof Zo.unload=="function"&&ht.setTimeout&&setTimeout(Zo.unload,911),this):new Promise(function(V,te){try{var de=Zo(Ci(sn()),g);typeof Zo.unload=="function"&&ht.setTimeout&&setTimeout(Zo.unload,911),V(de)}catch(Se){te(Se.message)}})},Qe.API)Qe.API.hasOwnProperty(ar)&&(ar==="events"&&Qe.API.events.length?function(g,j){var V,te,de;for(de=j.length-1;de!==-1;de--)V=j[de][0],te=j[de][1],g.subscribe.apply(g,[V].concat(typeof te=="function"?[te]:te))}(_t,Qe.API.events):m[ar]=Qe.API[ar]);function to(g){return lt[g].mediaBox.topRightX-lt[g].mediaBox.bottomLeftX}function Do(g,j){lt[g].mediaBox.topRightX=j+lt[g].mediaBox.bottomLeftX}function Hn(g){return lt[g].mediaBox.topRightY-lt[g].mediaBox.bottomLeftY}function Wt(g,j){lt[g].mediaBox.topRightY=j+lt[g].mediaBox.bottomLeftY}var Mi=m.getPageWidth=function(g){return to(g=g||z)/at},ha=m.setPageWidth=function(g,j){Do(g,j*at)},li=m.getPageHeight=function(g){return Hn(g=g||z)/at},Ro=m.setPageHeight=function(g,j){Wt(g,j*at)};return m.internal={pdfEscape:Gr,getStyle:Gi,getFont:ua,getFontSize:Ee,getCharSpace:qa,getTextColor:eo,getLineHeight:Ua,getLineHeightFactor:Ki,getLineWidth:dt,write:rt,getHorizontalCoordinate:Bn,getVerticalCoordinate:un,getCoordinateString:$a,getVerticalCoordinateString:da,collections:{},newObject:qt,newAdditionalObject:Qn,newObjectDeferred:gr,newObjectDeferredBegin:xr,getFilters:Kr,putStream:Yr,events:_t,scaleFactor:at,pageSize:{getWidth:function(){return Mi(z)},setWidth:function(g){ha(z,g)},getHeight:function(){return li(z)},setHeight:function(g){Ro(z,g)}},encryptionOptions:p,encryption:Qt,getEncryptor:function(g){return p!==null?Qt.encryptor(g,0):function(j){return j}},output:ln,getNumberOfPages:jo,pages:_e,out:Z,f2:S,f3:T,getPageInfo:Yi,getPageInfoByObjId:Io,getCurrentPageInfo:Lo,getPDFVersion:y,Point:ue,Rectangle:pt,Matrix:tt,hasHotfix:Si},Object.defineProperty(m.internal.pageSize,"width",{get:function(){return Mi(z)},set:function(g){ha(z,g)},enumerable:!0,configurable:!0}),Object.defineProperty(m.internal.pageSize,"height",{get:function(){return li(z)},set:function(g){Ro(z,g)},enumerable:!0,configurable:!0}),(function(g){for(var j=0,V=Ge.length;j<V;j++){var te=Mo.call(this,g[j][0],g[j][1],g[j][2],Ge[j][3],!0);v===!1&&(A[te]=!0);var de=g[j][0].split("-");ko({id:te,fontName:de[0],fontStyle:de[1]||""})}_t.publish("addFonts",{fonts:Ve,dictionary:ct})}).call(m,Ge),qe="F1",aa(o,r),_t.publish("initialized"),m}ka.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},ka.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},ka.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},ka.prototype.processOwnerPassword=function(e,t){return Bc(zc(t).substr(0,5),e)},ka.prototype.encryptor=function(e,t){var r=zc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return Bc(r,n)}},Xl.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||zt(e)!==zt(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},Qe.API={events:[]},Qe.version="3.0.3";var or=Qe.API,m0=1,ia=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},ya=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},gt=function(e){return e.toFixed(2)},bo=function(e){return e.toFixed(5)};or.__acroform__={};var rn=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},Ou=function(e){return e*m0},fi=function(e){var t=new Sf,r=Ye.internal.getHeight(e)||0,n=Ye.internal.getWidth(e)||0;return t.BBox=[0,0,Number(gt(n)),Number(gt(r))],t},h9=or.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},f9=or.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},p9=or.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},hr=or.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return p9(e,t-1)},fr=or.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return h9(e,t-1)},pr=or.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return f9(e,t-1)},m9=or.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,o=e[0],s=e[1],l=e[2],c=e[3],d={};return d.lowerLeft_X=r(o)||0,d.lowerLeft_Y=n(s+c)||0,d.upperRight_X=r(o+l)||0,d.upperRight_Y=n(s)||0,[Number(gt(d.lowerLeft_X)),Number(gt(d.lowerLeft_Y)),Number(gt(d.upperRight_X)),Number(gt(d.upperRight_Y))]},g9=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=Uc(e,r),o=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+o+" "+gt(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var s=fi(e);return s.scope=e.scope,s.stream=t.join(`
`),s}},Uc=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},o=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");o=e.multiline?o.map(function(S){return S.split(`
`)}):o.map(function(S){return[S]});var s=r,l=Ye.internal.getHeight(e)||0;l=l<0?-l:l;var c=Ye.internal.getWidth(e)||0;c=c<0?-c:c;var d=function(S,T,q){if(S+1<o.length){var $=T+" "+o[S+1][0];return yl($,e,q).width<=c-4}return!1};s++;e:for(;s>0;){t="",s--;var f,p,v=yl("3",e,s).height,A=e.multiline?l-s:(l-v)/2,m=A+=2,b=0,y=0,N=0;if(s<=0){t=`(...) Tj
`,t+="% Width of Text: "+yl(t,e,s=12).width+", FieldWidth:"+c+`
`;break}for(var C="",L=0,P=0;P<o.length;P++)if(o.hasOwnProperty(P)){var D=!1;if(o[P].length!==1&&N!==o[P].length-1){if((v+2)*(L+2)+2>l)continue e;C+=o[P][N],D=!0,y=P,P--}else{C=(C+=o[P][N]+" ").substr(C.length-1)==" "?C.substr(0,C.length-1):C;var U=parseInt(P),H=d(U,C,s),K=P>=o.length-1;if(H&&!K){C+=" ",N=0;continue}if(H||K){if(K)y=U;else if(e.multiline&&(v+2)*(L+2)+2>l)continue e}else{if(!e.multiline||(v+2)*(L+2)+2>l)continue e;y=U}}for(var W="",E=b;E<=y;E++){var J=o[E];if(e.multiline){if(E===y){W+=J[N]+" ",N=(N+1)%J.length;continue}if(E===b){W+=J[J.length-1]+" ";continue}}W+=J[0]+" "}switch(W=W.substr(W.length-1)==" "?W.substr(0,W.length-1):W,p=yl(W,e,s).width,e.textAlign){case"right":f=c-p-2;break;case"center":f=(c-p)/2;break;default:f=2}t+=gt(f)+" "+gt(m)+` Td
`,t+="("+ia(W)+`) Tj
`,t+=-gt(f)+` 0 Td
`,m=-(s+2),p=0,b=D?y:y+1,L++,C=""}break}return n.text=t,n.fontSize=s,n},yl=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),o=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:o}},x9={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},v9=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},b9=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(Jn.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(x9)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");m0=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new Af,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var o in n)if(n.hasOwnProperty(o)){var s=n[o];s.objId=void 0,s.hasAnnotation&&v9(s,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,o){var s=!n;for(var l in n||(o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(l)){var c=n[l],d=[],f=c.Rect;if(c.Rect&&(c.Rect=m9(c.Rect,o)),o.internal.newObjectDeferredBegin(c.objId,!0),c.DA=Ye.createDefaultAppearanceStream(c),zt(c)==="object"&&typeof c.getKeyValueListForStream=="function"&&(d=c.getKeyValueListForStream()),c.Rect=f,c.hasAppearanceStream&&!c.appearanceStreamContent){var p=g9(c);d.push({key:"AP",value:"<</N "+p+">>"}),o.internal.acroformPlugin.xForms.push(p)}if(c.appearanceStreamContent){var v="";for(var A in c.appearanceStreamContent)if(c.appearanceStreamContent.hasOwnProperty(A)){var m=c.appearanceStreamContent[A];if(v+="/"+A+" ",v+="<<",Object.keys(m).length>=1||Array.isArray(m)){for(var l in m)if(m.hasOwnProperty(l)){var b=m[l];typeof b=="function"&&(b=b.call(o,c)),v+="/"+l+" "+b+" ",o.internal.acroformPlugin.xForms.indexOf(b)>=0||o.internal.acroformPlugin.xForms.push(b)}}else typeof(b=m)=="function"&&(b=b.call(o,c)),v+="/"+l+" "+b,o.internal.acroformPlugin.xForms.indexOf(b)>=0||o.internal.acroformPlugin.xForms.push(b);v+=">>"}d.push({key:"AP",value:`<<
`+v+">>"})}o.internal.putStream({additionalKeyValues:d,objectId:c.objId}),o.internal.out("endobj")}s&&function(y,N){for(var C in y)if(y.hasOwnProperty(C)){var L=C,P=y[C];N.internal.newObjectDeferredBegin(P.objId,!0),zt(P)==="object"&&typeof P.putStream=="function"&&P.putStream(),delete y[L]}}(o.internal.acroformPlugin.xForms,o)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},Cf=or.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(l){return l};if(Array.isArray(e)){for(var o="[",s=0;s<e.length;s++)switch(s!==0&&(o+=" "),zt(e[s])){case"boolean":case"number":case"object":o+=e[s].toString();break;case"string":e[s].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),o+="("+ia(n(e[s].toString()))+")"):o+=e[s].toString()}return o+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},K1=function(e,t,r){var n=function(o){return o};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+ia(n(e))+")"},mi=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};mi.prototype.toString=function(){return this.objId+" 0 R"},mi.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},mi.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(s){return s!="content"&&s!="appearanceStreamContent"&&s!="scope"&&s!="objId"&&s.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],o=this[n];o&&(Array.isArray(o)?e.push({key:n,value:Cf(o,this.objId,this.scope)}):o instanceof mi?(o.scope=this.scope,e.push({key:n,value:o.objId+" 0 R"})):typeof o!="function"&&e.push({key:n,value:o}))}return e};var Sf=function(){mi.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};rn(Sf,mi);var Af=function(){mi.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+ia(r(e))+")"}},set:function(r){e=r}})};rn(Af,mi);var Jn=function e(){mi.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(C){if(isNaN(C))throw new Error('Invalid value "'+C+'" for attribute F supplied.');t=C}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!hr(t,3)},set:function(C){C?this.F=fr(t,3):this.F=pr(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(C){if(isNaN(C))throw new Error('Invalid value "'+C+'" for attribute Ff supplied.');r=C}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(C){n=C!==void 0?C:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(C){n[0]=C}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(C){n[1]=C}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(C){n[2]=C}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(C){n[3]=C}});var o="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return o},set:function(C){switch(C){case"/Btn":case"/Tx":case"/Ch":case"/Sig":o=C;break;default:throw new Error('Invalid value "'+C+'" for attribute FT supplied.')}}});var s=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!s||s.length<1){if(this instanceof Zl)return;s="FieldObject"+e.FieldNum++}var C=function(L){return L};return this.scope&&(C=this.scope.internal.getEncryptor(this.objId)),"("+ia(C(s))+")"},set:function(C){s=C.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return s},set:function(C){s=C}});var l="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return l},set:function(C){l=C}});var c="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return c},set:function(C){c=C}});var d=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return d},set:function(C){d=C}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/m0:f},set:function(C){f=C}});var p="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return p},set:function(C){p=C}});var v="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!v||this instanceof Zl||this instanceof Ko))return K1(v,this.objId,this.scope)},set:function(C){C=C.toString(),v=C}});var A=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(A)return this instanceof kr==0?K1(A,this.objId,this.scope):A},set:function(C){C=C.toString(),A=this instanceof kr==0?C.substr(0,1)==="("?ya(C.substr(1,C.length-2)):ya(C):C}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof kr==1?ya(A.substr(1,A.length-1)):A},set:function(C){C=C.toString(),A=this instanceof kr==1?"/"+C:C}});var m=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(m)return m},set:function(C){this.V=C}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(m)return this instanceof kr==0?K1(m,this.objId,this.scope):m},set:function(C){C=C.toString(),m=this instanceof kr==0?C.substr(0,1)==="("?ya(C.substr(1,C.length-2)):ya(C):C}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof kr==1?ya(m.substr(1,m.length-1)):m},set:function(C){C=C.toString(),m=this instanceof kr==1?"/"+C:C}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var b,y=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return y},set:function(C){C=!!C,y=C}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(b)return b},set:function(C){b=C}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,1)},set:function(C){C?this.Ff=fr(this.Ff,1):this.Ff=pr(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,2)},set:function(C){C?this.Ff=fr(this.Ff,2):this.Ff=pr(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,3)},set:function(C){C?this.Ff=fr(this.Ff,3):this.Ff=pr(this.Ff,3)}});var N=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(N!==null)return N},set:function(C){if([0,1,2].indexOf(C)===-1)throw new Error('Invalid value "'+C+'" for attribute Q supplied.');N=C}}),Object.defineProperty(this,"textAlign",{get:function(){var C;switch(N){case 0:default:C="left";break;case 1:C="center";break;case 2:C="right"}return C},configurable:!0,enumerable:!0,set:function(C){switch(C){case"right":case 2:N=2;break;case"center":case 1:N=1;break;default:N=0}}})};rn(Jn,mi);var La=function(){Jn.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return Cf(t,this.objId,this.scope)},set:function(r){var n,o;o=[],typeof(n=r)=="string"&&(o=function(s,l,c){c||(c=1);for(var d,f=[];d=l.exec(s);)f.push(d[c]);return f}(n,/\((.*?)\)/g)),t=o}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,18)},set:function(r){r?this.Ff=fr(this.Ff,18):this.Ff=pr(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=fr(this.Ff,19):this.Ff=pr(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,20)},set:function(r){r?(this.Ff=fr(this.Ff,20),t.sort()):this.Ff=pr(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,22)},set:function(r){r?this.Ff=fr(this.Ff,22):this.Ff=pr(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,23)},set:function(r){r?this.Ff=fr(this.Ff,23):this.Ff=pr(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,27)},set:function(r){r?this.Ff=fr(this.Ff,27):this.Ff=pr(this.Ff,27)}}),this.hasAppearanceStream=!1};rn(La,Jn);var Pa=function(){La.call(this),this.fontName="helvetica",this.combo=!1};rn(Pa,La);var Ta=function(){Pa.call(this),this.combo=!0};rn(Ta,Pa);var zl=function(){Ta.call(this),this.edit=!0};rn(zl,Ta);var kr=function(){Jn.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,15)},set:function(r){r?this.Ff=fr(this.Ff,15):this.Ff=pr(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,16)},set:function(r){r?this.Ff=fr(this.Ff,16):this.Ff=pr(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,17)},set:function(r){r?this.Ff=fr(this.Ff,17):this.Ff=pr(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,26)},set:function(r){r?this.Ff=fr(this.Ff,26):this.Ff=pr(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(s){return s};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,o=[];for(n in o.push("<<"),t)o.push("/"+n+" ("+ia(r(t[n]))+")");return o.push(">>"),o.join(`
`)}},set:function(r){zt(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};rn(kr,Jn);var Bl=function(){kr.call(this),this.pushButton=!0};rn(Bl,kr);var Ea=function(){kr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};rn(Ea,kr);var Zl=function(){var e,t;Jn.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(o){e=o}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(o){t=o}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var o=function(c){return c};this.scope&&(o=this.scope.internal.getEncryptor(this.objId));var s,l=[];for(s in l.push("<<"),n)l.push("/"+s+" ("+ia(o(n[s]))+")");return l.push(">>"),l.join(`
`)},set:function(o){zt(o)==="object"&&(n=o)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(o){typeof o=="string"&&(n.CA=o)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(o){r=o}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(o){r="/"+o}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Ye.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};rn(Zl,Jn),Ea.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},Ea.prototype.createOption=function(e){var t=new Zl;return t.Parent=this,t.optionName=e,this.Kids.push(t),w9.call(this.scope,t),t};var Ul=function(){kr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Ye.CheckBox.createAppearanceStream()};rn(Ul,kr);var Ko=function(){Jn.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,13)},set:function(t){t?this.Ff=fr(this.Ff,13):this.Ff=pr(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,21)},set:function(t){t?this.Ff=fr(this.Ff,21):this.Ff=pr(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,23)},set:function(t){t?this.Ff=fr(this.Ff,23):this.Ff=pr(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,24)},set:function(t){t?this.Ff=fr(this.Ff,24):this.Ff=pr(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,25)},set:function(t){t?this.Ff=fr(this.Ff,25):this.Ff=pr(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,26)},set:function(t){t?this.Ff=fr(this.Ff,26):this.Ff=pr(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};rn(Ko,Jn);var Hl=function(){Ko.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!hr(this.Ff,14)},set:function(e){e?this.Ff=fr(this.Ff,14):this.Ff=pr(this.Ff,14)}}),this.password=!0};rn(Hl,Ko);var Ye={CheckBox:{createAppearanceStream:function(){return{N:{On:Ye.CheckBox.YesNormal},D:{On:Ye.CheckBox.YesPushDown,Off:Ye.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=fi(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,o=e.scope.__private__.encodeColorString(e.color),s=Uc(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+gt(Ye.internal.getWidth(e))+" "+gt(Ye.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+gt(s.fontSize)+" Tf "+o),r.push("BT"),r.push(s.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=fi(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),o=[],s=Ye.internal.getHeight(e),l=Ye.internal.getWidth(e),c=Uc(e,e.caption);return o.push("1 g"),o.push("0 0 "+gt(l)+" "+gt(s)+" re"),o.push("f"),o.push("q"),o.push("0 0 1 rg"),o.push("0 0 "+gt(l-1)+" "+gt(s-1)+" re"),o.push("W"),o.push("n"),o.push("0 g"),o.push("BT"),o.push("/"+r+" "+gt(c.fontSize)+" Tf "+n),o.push(c.text),o.push("ET"),o.push("Q"),t.stream=o.join(`
`),t},OffPushDown:function(e){var t=fi(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+gt(Ye.internal.getWidth(e))+" "+gt(Ye.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Ye.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Ye.RadioButton.Circle.YesNormal,t.D[e]=Ye.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=fi(e);t.scope=e.scope;var r=[],n=Ye.internal.getWidth(e)<=Ye.internal.getHeight(e)?Ye.internal.getWidth(e)/4:Ye.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Ye.internal.Bezier_C,s=Number((n*o).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+bo(Ye.internal.getWidth(e)/2)+" "+bo(Ye.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+s+" "+s+" "+n+" 0 "+n+" c"),r.push("-"+s+" "+n+" -"+n+" "+s+" -"+n+" 0 c"),r.push("-"+n+" -"+s+" -"+s+" -"+n+" 0 -"+n+" c"),r.push(s+" -"+n+" "+n+" -"+s+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=fi(e);t.scope=e.scope;var r=[],n=Ye.internal.getWidth(e)<=Ye.internal.getHeight(e)?Ye.internal.getWidth(e)/4:Ye.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),s=Number((o*Ye.internal.Bezier_C).toFixed(5)),l=Number((n*Ye.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+bo(Ye.internal.getWidth(e)/2)+" "+bo(Ye.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+s+" "+s+" "+o+" 0 "+o+" c"),r.push("-"+s+" "+o+" -"+o+" "+s+" -"+o+" 0 c"),r.push("-"+o+" -"+s+" -"+s+" -"+o+" 0 -"+o+" c"),r.push(s+" -"+o+" "+o+" -"+s+" "+o+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+bo(Ye.internal.getWidth(e)/2)+" "+bo(Ye.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+l+" "+l+" "+n+" 0 "+n+" c"),r.push("-"+l+" "+n+" -"+n+" "+l+" -"+n+" 0 c"),r.push("-"+n+" -"+l+" -"+l+" -"+n+" 0 -"+n+" c"),r.push(l+" -"+n+" "+n+" -"+l+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=fi(e);t.scope=e.scope;var r=[],n=Ye.internal.getWidth(e)<=Ye.internal.getHeight(e)?Ye.internal.getWidth(e)/4:Ye.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),s=Number((o*Ye.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+bo(Ye.internal.getWidth(e)/2)+" "+bo(Ye.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+s+" "+s+" "+o+" 0 "+o+" c"),r.push("-"+s+" "+o+" -"+o+" "+s+" -"+o+" 0 c"),r.push("-"+o+" -"+s+" -"+s+" -"+o+" 0 -"+o+" c"),r.push(s+" -"+o+" "+o+" -"+s+" "+o+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Ye.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Ye.RadioButton.Cross.YesNormal,t.D[e]=Ye.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=fi(e);t.scope=e.scope;var r=[],n=Ye.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+gt(Ye.internal.getWidth(e)-2)+" "+gt(Ye.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(gt(n.x1.x)+" "+gt(n.x1.y)+" m"),r.push(gt(n.x2.x)+" "+gt(n.x2.y)+" l"),r.push(gt(n.x4.x)+" "+gt(n.x4.y)+" m"),r.push(gt(n.x3.x)+" "+gt(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=fi(e);t.scope=e.scope;var r=Ye.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+gt(Ye.internal.getWidth(e))+" "+gt(Ye.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+gt(Ye.internal.getWidth(e)-2)+" "+gt(Ye.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(gt(r.x1.x)+" "+gt(r.x1.y)+" m"),n.push(gt(r.x2.x)+" "+gt(r.x2.y)+" l"),n.push(gt(r.x4.x)+" "+gt(r.x4.y)+" m"),n.push(gt(r.x3.x)+" "+gt(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=fi(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+gt(Ye.internal.getWidth(e))+" "+gt(Ye.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Ye.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Ye.internal.getWidth(e),r=Ye.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Ye.internal.getWidth=function(e){var t=0;return zt(e)==="object"&&(t=Ou(e.Rect[2])),t},Ye.internal.getHeight=function(e){var t=0;return zt(e)==="object"&&(t=Ou(e.Rect[3])),t};var w9=or.addField=function(e){if(b9(this,e),!(e instanceof Jn))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};or.AcroFormChoiceField=La,or.AcroFormListBox=Pa,or.AcroFormComboBox=Ta,or.AcroFormEditBox=zl,or.AcroFormButton=kr,or.AcroFormPushButton=Bl,or.AcroFormRadioButton=Ea,or.AcroFormCheckBox=Ul,or.AcroFormTextField=Ko,or.AcroFormPasswordField=Hl,or.AcroFormAppearance=Ye,or.AcroForm={ChoiceField:La,ListBox:Pa,ComboBox:Ta,EditBox:zl,Button:kr,PushButton:Bl,RadioButton:Ea,CheckBox:Ul,TextField:Ko,PasswordField:Hl,Appearance:Ye},Qe.AcroForm={ChoiceField:La,ListBox:Pa,ComboBox:Ta,EditBox:zl,Button:kr,PushButton:Bl,RadioButton:Ea,CheckBox:Ul,TextField:Ko,PasswordField:Hl,Appearance:Ye};Qe.AcroForm;function kf(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},o=e.__addimage__.getImageFileTypeByImageData=function(S,T){var q,$,ne,ce,pe,ae=r;if((T=T||r)==="RGBA"||S.data!==void 0&&S.data instanceof Uint8ClampedArray&&"height"in S&&"width"in S)return"RGBA";if(H(S))for(pe in n)for(ne=n[pe],q=0;q<ne.length;q+=1){for(ce=!0,$=0;$<ne[q].length;$+=1)if(ne[q][$]!==void 0&&ne[q][$]!==S[$]){ce=!1;break}if(ce===!0){ae=pe;break}}else for(pe in n)for(ne=n[pe],q=0;q<ne.length;q+=1){for(ce=!0,$=0;$<ne[q].length;$+=1)if(ne[q][$]!==void 0&&ne[q][$]!==S.charCodeAt($)){ce=!1;break}if(ce===!0){ae=pe;break}}return ae===r&&T!==r&&(ae=T),ae},s=function S(T){for(var q=this.internal.write,$=this.internal.putStream,ne=(0,this.internal.getFilters)();ne.indexOf("FlateEncode")!==-1;)ne.splice(ne.indexOf("FlateEncode"),1);T.objectId=this.internal.newObject();var ce=[];if(ce.push({key:"Type",value:"/XObject"}),ce.push({key:"Subtype",value:"/Image"}),ce.push({key:"Width",value:T.width}),ce.push({key:"Height",value:T.height}),T.colorSpace===C.INDEXED?ce.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(T.palette.length/3-1)+" "+("sMask"in T&&T.sMask!==void 0?T.objectId+2:T.objectId+1)+" 0 R]"}):(ce.push({key:"ColorSpace",value:"/"+T.colorSpace}),T.colorSpace===C.DEVICE_CMYK&&ce.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),ce.push({key:"BitsPerComponent",value:T.bitsPerComponent}),"decodeParameters"in T&&T.decodeParameters!==void 0&&ce.push({key:"DecodeParms",value:"<<"+T.decodeParameters+">>"}),"transparency"in T&&Array.isArray(T.transparency)&&T.transparency.length>0){for(var pe="",ae=0,ve=T.transparency.length;ae<ve;ae++)pe+=T.transparency[ae]+" "+T.transparency[ae]+" ";ce.push({key:"Mask",value:"["+pe+"]"})}T.sMask!==void 0&&ce.push({key:"SMask",value:T.objectId+1+" 0 R"});var we=T.filter!==void 0?["/"+T.filter]:void 0;if($({data:T.data,additionalKeyValues:ce,alreadyAppliedFilters:we,objectId:T.objectId}),q("endobj"),"sMask"in T&&T.sMask!==void 0){var re,M=(re=T.sMaskBitsPerComponent)!==null&&re!==void 0?re:T.bitsPerComponent,z={width:T.width,height:T.height,colorSpace:"DeviceGray",bitsPerComponent:M,data:T.sMask};"filter"in T&&(z.decodeParameters="/Predictor ".concat(T.predictor," /Colors 1 /BitsPerComponent ").concat(M," /Columns ").concat(T.width),z.filter=T.filter),S.call(this,z)}if(T.colorSpace===C.INDEXED){var X=this.internal.newObject();$({data:W(new Uint8Array(T.palette)),objectId:X}),q("endobj")}},l=function(){var S=this.internal.collections[t+"images"];for(var T in S)s.call(this,S[T])},c=function(){var S,T=this.internal.collections[t+"images"],q=this.internal.write;for(var $ in T)q("/I"+(S=T[$]).index,S.objectId,"0","R")},d=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",l),this.internal.events.subscribe("putXobjectDict",c))},f=function(){var S=this.internal.collections[t+"images"];return d.call(this),S},p=function(){return Object.keys(this.internal.collections[t+"images"]).length},v=function(S){return typeof e["process"+S.toUpperCase()]=="function"},A=function(S){return zt(S)==="object"&&S.nodeType===1},m=function(S,T){if(S.nodeName==="IMG"&&S.hasAttribute("src")){var q=""+S.getAttribute("src");if(q.indexOf("data:image/")===0)return Fl(unescape(q).split("base64,").pop());var $=e.loadFile(q,!0);if($!==void 0)return $}if(S.nodeName==="CANVAS"){if(S.width===0||S.height===0)throw new Error("Given canvas must have data. Canvas width: "+S.width+", height: "+S.height);var ne;switch(T){case"PNG":ne="image/png";break;case"WEBP":ne="image/webp";break;default:ne="image/jpeg"}return Fl(S.toDataURL(ne,1).split("base64,").pop())}},b=function(S){var T=this.internal.collections[t+"images"];if(T){for(var q in T)if(S===T[q].alias)return T[q]}},y=function(S,T,q){return S||T||(S=-96,T=-96),S<0&&(S=-1*q.width*72/S/this.internal.scaleFactor),T<0&&(T=-1*q.height*72/T/this.internal.scaleFactor),S===0&&(S=T*q.width/q.height),T===0&&(T=S*q.height/q.width),[S,T]},N=function(S,T,q,$,ne,ce){var pe=y.call(this,q,$,ne),ae=this.internal.getCoordinateString,ve=this.internal.getVerticalCoordinateString,we=f.call(this);if(q=pe[0],$=pe[1],we[ne.index]=ne,ce){ce*=Math.PI/180;var re=Math.cos(ce),M=Math.sin(ce),z=function(Q){return Q.toFixed(4)},X=[z(re),z(M),z(-1*M),z(re),0,0,"cm"]}this.internal.write("q"),ce?(this.internal.write([1,"0","0",1,ae(S),ve(T+$),"cm"].join(" ")),this.internal.write(X.join(" ")),this.internal.write([ae(q),"0","0",ae($),"0","0","cm"].join(" "))):this.internal.write([ae(q),"0","0",ae($),ae(S),ve(T+$),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+ne.index+" Do"),this.internal.write("Q")},C=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var L=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},P=e.__addimage__.sHashCode=function(S){var T,q,$=0;if(typeof S=="string")for(q=S.length,T=0;T<q;T++)$=($<<5)-$+S.charCodeAt(T),$|=0;else if(H(S))for(q=S.byteLength/2,T=0;T<q;T++)$=($<<5)-$+S[T],$|=0;return $},D=e.__addimage__.validateStringAsBase64=function(S){(S=S||"").toString().trim();var T=!0;return S.length===0&&(T=!1),S.length%4!=0&&(T=!1),/^[A-Za-z0-9+/]+$/.test(S.substr(0,S.length-2))===!1&&(T=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(S.substr(-2))===!1&&(T=!1),T},U=e.__addimage__.extractImageFromDataUrl=function(S){if(S==null||!(S=S.trim()).startsWith("data:"))return null;var T=S.indexOf(",");return T<0?null:S.substring(0,T).trim().endsWith("base64")?S.substring(T+1):null};e.__addimage__.isArrayBuffer=function(S){return S instanceof ArrayBuffer};var H=e.__addimage__.isArrayBufferView=function(S){return S instanceof Int8Array||S instanceof Uint8Array||S instanceof Uint8ClampedArray||S instanceof Int16Array||S instanceof Uint16Array||S instanceof Int32Array||S instanceof Uint32Array||S instanceof Float32Array||S instanceof Float64Array},K=e.__addimage__.binaryStringToUint8Array=function(S){for(var T=S.length,q=new Uint8Array(T),$=0;$<T;$++)q[$]=S.charCodeAt($);return q},W=e.__addimage__.arrayBufferToBinaryString=function(S){for(var T="",q=H(S)?S:new Uint8Array(S),$=0;$<q.length;$+=8192)T+=String.fromCharCode.apply(null,q.subarray($,$+8192));return T};e.addImage=function(){var S,T,q,$,ne,ce,pe,ae,ve;if(typeof arguments[1]=="number"?(T=r,q=arguments[1],$=arguments[2],ne=arguments[3],ce=arguments[4],pe=arguments[5],ae=arguments[6],ve=arguments[7]):(T=arguments[1],q=arguments[2],$=arguments[3],ne=arguments[4],ce=arguments[5],pe=arguments[6],ae=arguments[7],ve=arguments[8]),zt(S=arguments[0])==="object"&&!A(S)&&"imageData"in S){var we=S;S=we.imageData,T=we.format||T||r,q=we.x||q||0,$=we.y||$||0,ne=we.w||we.width||ne,ce=we.h||we.height||ce,pe=we.alias||pe,ae=we.compression||ae,ve=we.rotation||we.angle||ve}var re=this.internal.getFilters();if(ae===void 0&&re.indexOf("FlateEncode")!==-1&&(ae="SLOW"),isNaN(q)||isNaN($))throw new Error("Invalid coordinates passed to jsPDF.addImage");d.call(this);var M=E.call(this,S,T,pe,ae);return N.call(this,q,$,ne,ce,M,ve),this};var E=function(S,T,q,$){var ne,ce,pe;if(typeof S=="string"&&o(S)===r){S=unescape(S);var ae=J(S,!1);(ae!==""||(ae=e.loadFile(S,!0))!==void 0)&&(S=ae)}if(A(S)&&(S=m(S,T)),T=o(S,T),!v(T))throw new Error("addImage does not support files of type '"+T+"', please ensure that a plugin for '"+T+"' support is added.");if(((pe=q)==null||pe.length===0)&&(q=function(ve){return typeof ve=="string"||H(ve)?P(ve):H(ve.data)?P(ve.data):null}(S)),(ne=b.call(this,q))||(S instanceof Uint8Array||T==="RGBA"||(ce=S,S=K(S)),ne=this["process"+T.toUpperCase()](S,p.call(this),q,function(ve){return ve&&typeof ve=="string"&&(ve=ve.toUpperCase()),ve in e.image_compression?ve:L.NONE}($),ce)),!ne)throw new Error("An unknown error occurred whilst processing the image.");return ne},J=e.__addimage__.convertBase64ToBinaryString=function(S,T){T=typeof T!="boolean"||T;var q,$="";if(typeof S=="string"){var ne;q=(ne=U(S))!==null&&ne!==void 0?ne:S;try{$=Fl(q)}catch(ce){if(T)throw D(q)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+ce.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return $};e.getImageProperties=function(S){var T,q,$="";if(A(S)&&(S=m(S)),typeof S=="string"&&o(S)===r&&(($=J(S,!1))===""&&($=e.loadFile(S)||""),S=$),q=o(S),!v(q))throw new Error("addImage does not support files of type '"+q+"', please ensure that a plugin for '"+q+"' support is added.");if(S instanceof Uint8Array||(S=K(S)),!(T=this["process"+q.toUpperCase()](S)))throw new Error("An unknown error occurred whilst processing the image");return T.fileType=q,T}})(Qe.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};Qe.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,o,s,l=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,d=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,p=!1,v=0;v<f.length&&!p;v++)switch((n=f[v]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(p=!0);break;case"reference":case"text":case"freetext":p=!0}if(p!=0){this.internal.write("/Annots [");for(var A=0;A<f.length;A++){n=f[A];var m=this.internal.pdfEscape,b=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var y=this.internal.newAdditionalObject(),N=this.internal.newAdditionalObject(),C=this.internal.getEncryptor(y.objId),L=n.title||"Note";s="<</Type /Annot /Subtype /Text "+(o="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y)+"] ")+"/Contents ("+m(C(n.contents))+")",s+=" /Popup "+N.objId+" 0 R",s+=" /P "+d.objId+" 0 R",s+=" /T ("+m(C(L))+") >>",y.content=s;var P=y.objId+" 0 R";s="<</Type /Annot /Subtype /Popup "+(o="/Rect ["+l(n.bounds.x+30)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w+30)+" "+c(n.bounds.y)+"] ")+" /Parent "+P,n.open&&(s+=" /Open true"),s+=" >>",N.content=s,this.internal.write(y.objId,"0 R",N.objId,"0 R");break;case"freetext":o="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y+n.bounds.h)+"] ";var D=n.color||"#000000";s="<</Type /Annot /Subtype /FreeText "+o+"/Contents ("+m(b(n.contents))+")",s+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+D+")",s+=" /Border [0 0 0]",s+=" >>",this.internal.write(s);break;case"link":if(n.options.name){var U=this.annotations._nameMap[n.options.name];n.options.pageNumber=U.page,n.options.top=U.y}else n.options.top||(n.options.top=0);if(o="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",s="",n.options.url)s="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /A <</S /URI /URI ("+m(b(n.options.url))+") >>";else if(n.options.pageNumber)switch(s="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":s+=" /Fit]";break;case"FitH":s+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,s+=" /FitV "+n.options.left+"]";break;default:var H=c(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),s+=" /XYZ "+n.options.left+" "+H+" "+n.options.zoom+"]"}s!=""&&(s+=" >>",this.internal.write(s))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,o,s,l){var c=this.internal.getCurrentPageInfo(),d=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;c.pageContext.annotations.push({finalBounds:{x:d(r),y:f(n),w:d(r+o),h:f(n+s)},options:l,type:"link"})},e.textWithLink=function(r,n,o,s){var l,c,d=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(s.maxWidth!==void 0){c=s.maxWidth;var p=this.splitTextToSize(r,c).length;l=Math.ceil(f*p)}else c=d,l=f;return this.text(r,n,o,s),o+=.2*f,s.align==="center"&&(n-=d/2),s.align==="right"&&(n-=d),this.link(n,o-f,c,l,s),d},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(Qe.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},o=[1570,1571,1573,1575];e.__arabicParser__={};var s=e.__arabicParser__.isInArabicSubstitutionA=function(y){return t[y.charCodeAt(0)]!==void 0},l=e.__arabicParser__.isArabicLetter=function(y){return typeof y=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(y)},c=e.__arabicParser__.isArabicEndLetter=function(y){return l(y)&&s(y)&&t[y.charCodeAt(0)].length<=2},d=e.__arabicParser__.isArabicAlfLetter=function(y){return l(y)&&o.indexOf(y.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(y){return l(y)&&s(y)&&t[y.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(y){return l(y)&&s(y)&&t[y.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(y){return l(y)&&s(y)&&t[y.charCodeAt(0)].length>=3};var p=e.__arabicParser__.arabicLetterHasMedialForm=function(y){return l(y)&&s(y)&&t[y.charCodeAt(0)].length==4},v=e.__arabicParser__.resolveLigatures=function(y){var N=0,C=r,L="",P=0;for(N=0;N<y.length;N+=1)C[y.charCodeAt(N)]!==void 0?(P++,typeof(C=C[y.charCodeAt(N)])=="number"&&(L+=String.fromCharCode(C),C=r,P=0),N===y.length-1&&(C=r,L+=y.charAt(N-(P-1)),N-=P-1,P=0)):(C=r,L+=y.charAt(N-P),N-=P,P=0);return L};e.__arabicParser__.isArabicDiacritic=function(y){return y!==void 0&&n[y.charCodeAt(0)]!==void 0};var A=e.__arabicParser__.getCorrectForm=function(y,N,C){return l(y)?s(y)===!1?-1:!f(y)||!l(N)&&!l(C)||!l(C)&&c(N)||c(y)&&!l(N)||c(y)&&d(N)||c(y)&&c(N)?0:p(y)&&l(N)&&!c(N)&&l(C)&&f(C)?3:c(y)||!l(C)?1:2:-1},m=function(y){var N=0,C=0,L=0,P="",D="",U="",H=(y=y||"").split("\\s+"),K=[];for(N=0;N<H.length;N+=1){for(K.push(""),C=0;C<H[N].length;C+=1)P=H[N][C],D=H[N][C-1],U=H[N][C+1],l(P)?(L=A(P,D,U),K[N]+=L!==-1?String.fromCharCode(t[P.charCodeAt(0)][L]):P):K[N]+=P;K[N]=v(K[N])}return K.join(" ")},b=e.__arabicParser__.processArabic=e.processArabic=function(){var y,N=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,C=[];if(Array.isArray(N)){var L=0;for(C=[],L=0;L<N.length;L+=1)Array.isArray(N[L])?C.push([m(N[L][0]),N[L][1],N[L][2]]):C.push([m(N[L])]);y=C}else y=m(N);return typeof arguments[0]=="string"?y:(arguments[0].text=y,arguments[0])};e.events.push(["preProcessText",b])}(Qe.API),Qe.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(c){r=c}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(c){n=isNaN(c)||Number.isInteger(c)===!1||c<0?150:c,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var o=300;Object.defineProperty(this,"height",{get:function(){return o},set:function(c){o=isNaN(c)||Number.isInteger(c)===!1||c<0?300:c,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=o+1)}});var s=[];Object.defineProperty(this,"childNodes",{get:function(){return s},set:function(c){s=c}});var l={};Object.defineProperty(this,"style",{get:function(){return l},set:function(c){l=c}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var o;if((r=r||"2d")!=="2d")return null;for(o in n)this.pdf.context2d.hasOwnProperty(o)&&(this.pdf.context2d[o]=n[o]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Qe.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),o.call(this))},o=function(){this.internal.__cell__.lastCell=new s,this.internal.__cell__.pages=1},s=function(){var d=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return d},set:function(y){d=y}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(y){f=y}});var p=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return p},set:function(y){p=y}});var v=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return v},set:function(y){v=y}});var A=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return A},set:function(y){A=y}});var m=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return m},set:function(y){m=y}});var b=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return b},set:function(y){b=y}}),this};s.prototype.clone=function(){return new s(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},s.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(d){return n.call(this),this.internal.__cell__.headerFunction=typeof d=="function"?d:void 0,this},e.getTextDimensions=function(d,f){n.call(this);var p=(f=f||{}).fontSize||this.getFontSize(),v=f.font||this.getFont(),A=f.scaleFactor||this.internal.scaleFactor,m=0,b=0,y=0,N=this;if(!Array.isArray(d)&&typeof d!="string"){if(typeof d!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");d=String(d)}var C=f.maxWidth;C>0?typeof d=="string"?d=this.splitTextToSize(d,C):Object.prototype.toString.call(d)==="[object Array]"&&(d=d.reduce(function(P,D){return P.concat(N.splitTextToSize(D,C))},[])):d=Array.isArray(d)?d:[d];for(var L=0;L<d.length;L++)m<(y=this.getStringUnitWidth(d[L],{font:v})*p)&&(m=y);return m!==0&&(b=d.length),{w:m/=A,h:Math.max((b*p*this.getLineHeightFactor()-p*(this.getLineHeightFactor()-1))/A,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var d=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new s(d.left,d.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var l=e.cell=function(){var d;d=arguments[0]instanceof s?arguments[0]:new s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,p=this.internal.__cell__.padding,v=this.internal.__cell__.margins||t,A=this.internal.__cell__.tableHeaderRow,m=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===d.lineNumber?(d.x=(f.x||0)+(f.width||0),d.y=f.y||0):f.y+f.height+d.height+v.bottom>this.getPageHeight()?(this.cellAddPage(),d.y=v.top,m&&A&&(this.printHeaderRow(d.lineNumber,!0),d.y+=A[0].height)):d.y=f.y+f.height||d.y),d.text[0]!==void 0&&(this.rect(d.x,d.y,d.width,d.height,r===!0?"FD":void 0),d.align==="right"?this.text(d.text,d.x+d.width-p,d.y+p,{align:"right",baseline:"top"}):d.align==="center"?this.text(d.text,d.x+d.width/2,d.y+p,{align:"center",baseline:"top",maxWidth:d.width-p-p}):this.text(d.text,d.x+p,d.y+p,{align:"left",baseline:"top",maxWidth:d.width-p-p})),this.internal.__cell__.lastCell=d,this};e.table=function(d,f,p,v,A){if(n.call(this),!p)throw new Error("No data for PDF table.");var m,b,y,N,C=[],L=[],P=[],D={},U={},H=[],K=[],W=(A=A||{}).autoSize||!1,E=A.printHeaders!==!1,J=A.css&&A.css["font-size"]!==void 0?16*A.css["font-size"]:A.fontSize||12,S=A.margins||Object.assign({width:this.getPageWidth()},t),T=typeof A.padding=="number"?A.padding:3,q=A.headerBackgroundColor||"#c8c8c8",$=A.headerTextColor||"#000";if(o.call(this),this.internal.__cell__.printHeaders=E,this.internal.__cell__.margins=S,this.internal.__cell__.table_font_size=J,this.internal.__cell__.padding=T,this.internal.__cell__.headerBackgroundColor=q,this.internal.__cell__.headerTextColor=$,this.setFontSize(J),v==null)L=C=Object.keys(p[0]),P=C.map(function(){return"left"});else if(Array.isArray(v)&&zt(v[0])==="object")for(C=v.map(function(we){return we.name}),L=v.map(function(we){return we.prompt||we.name||""}),P=v.map(function(we){return we.align||"left"}),m=0;m<v.length;m+=1)U[v[m].name]=.7499990551181103*v[m].width;else Array.isArray(v)&&typeof v[0]=="string"&&(L=C=v,P=C.map(function(){return"left"}));if(W||Array.isArray(v)&&typeof v[0]=="string")for(m=0;m<C.length;m+=1){for(D[N=C[m]]=p.map(function(we){return we[N]}),this.setFont(void 0,"bold"),H.push(this.getTextDimensions(L[m],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),b=D[N],this.setFont(void 0,"normal"),y=0;y<b.length;y+=1)H.push(this.getTextDimensions(b[y],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);U[N]=Math.max.apply(null,H)+T+T,H=[]}if(E){var ne={};for(m=0;m<C.length;m+=1)ne[C[m]]={},ne[C[m]].text=L[m],ne[C[m]].align=P[m];var ce=c.call(this,ne,U);K=C.map(function(we){return new s(d,f,U[we],ce,ne[we].text,void 0,ne[we].align)}),this.setTableHeaderRow(K),this.printHeaderRow(1,!1)}var pe=v.reduce(function(we,re){return we[re.name]=re.align,we},{});for(m=0;m<p.length;m+=1){"rowStart"in A&&A.rowStart instanceof Function&&A.rowStart({row:m,data:p[m]},this);var ae=c.call(this,p[m],U);for(y=0;y<C.length;y+=1){var ve=p[m][C[y]];"cellStart"in A&&A.cellStart instanceof Function&&A.cellStart({row:m,col:y,data:ve},this),l.call(this,new s(d,f,U[C[y]],ae,ve,m+2,pe[C[y]]))}}return this.internal.__cell__.table_x=d,this.internal.__cell__.table_y=f,this};var c=function(d,f){var p=this.internal.__cell__.padding,v=this.internal.__cell__.table_font_size,A=this.internal.scaleFactor;return Object.keys(d).map(function(m){var b=d[m];return this.splitTextToSize(b.hasOwnProperty("text")?b.text:b,f[m]-p-p)},this).map(function(m){return this.getLineHeightFactor()*m.length*v/A+p+p},this).reduce(function(m,b){return Math.max(m,b)},0)};e.setTableHeaderRow=function(d){n.call(this),this.internal.__cell__.tableHeaderRow=d},e.printHeaderRow=function(d,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var p;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var v=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new s(v[0],v[1],v[2],v[3],void 0,-1)}this.setFont(void 0,"bold");for(var A=[],m=0;m<this.internal.__cell__.tableHeaderRow.length;m+=1){p=this.internal.__cell__.tableHeaderRow[m].clone(),f&&(p.y=this.internal.__cell__.margins.top||0,A.push(p)),p.lineNumber=d;var b=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),l.call(this,p),this.setTextColor(b)}A.length>0&&this.setTableHeaderRow(A),this.setFont(void 0,"normal"),r=!1}}(Qe.API);var Mf={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},Nf=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],Hc=kf(Nf),jf=[100,200,300,400,500,600,700,800,900],y9=kf(jf);function Q1(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(s){return Mf[s=s||"normal"]?s:"normal"}(e.style),n=function(s){return s?typeof s=="number"?s>=100&&s<=900&&s%100==0?s:400:/^\d00$/.test(s)?parseInt(s):s==="bold"?700:400:400}(e.weight),o=function(s){return typeof Hc[s=s||"normal"]=="number"?s:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:o,src:e.src||[],ref:e.ref||{name:t,style:[o,r,n].join(" ")}}}function Fu(e,t,r,n){var o;for(o=r;o>=0&&o<t.length;o+=n)if(e[t[o]])return e[t[o]];for(o=r;o>=0&&o<t.length;o-=n)if(e[t[o]])return e[t[o]]}var _9={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},zu={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Bu(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function Uu(e){return e.trimLeft()}function C9(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function S9(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var _l,Hu,$u,_a,Cl,qu,Vu,Yu,ec=["times"];function Gu(e,t,r,n,o){var s=4,l=Xu;switch(o){case Qe.API.image_compression.FAST:s=1,l=Wu;break;case Qe.API.image_compression.MEDIUM:s=6,l=Zu;break;case Qe.API.image_compression.SLOW:s=9,l=Ju}e=function(d,f,p,v){for(var A,m=d.length/f,b=new Uint8Array(d.length+m),y=[A9,Wu,Xu,Zu,Ju],N=0;N<m;N+=1){var C=N*f,L=d.subarray(C,C+f);if(v)b.set(v(L,p,A),C+N);else{for(var P=y.length,D=[],U=0;U<P;U+=1)D[U]=y[U](L,p,A);var H=M9(D.concat());b.set(D[H],C+N)}A=L}return b}(e,t,Math.ceil(r*n/8),l);var c=Dc(e,{level:s});return Qe.API.__addimage__.arrayBufferToBinaryString(c)}function A9(e){var t=Array.apply([],e);return t.unshift(0),t}function Wu(e,t){var r=e.length,n=[];n[0]=1;for(var o=0;o<r;o+=1){var s=e[o-t]||0;n[o+1]=e[o]-s+256&255}return n}function Xu(e,t,r){var n=e.length,o=[];o[0]=2;for(var s=0;s<n;s+=1){var l=r&&r[s]||0;o[s+1]=e[s]-l+256&255}return o}function Zu(e,t,r){var n=e.length,o=[];o[0]=3;for(var s=0;s<n;s+=1){var l=e[s-t]||0,c=r&&r[s]||0;o[s+1]=e[s]+256-(l+c>>>1)&255}return o}function Ju(e,t,r){var n=e.length,o=[];o[0]=4;for(var s=0;s<n;s+=1){var l=k9(e[s-t]||0,r&&r[s]||0,r&&r[s-t]||0);o[s+1]=e[s]-l+256&255}return o}function k9(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),o=Math.abs(e-r),s=Math.abs(e+t-r-r);return n<=o&&n<=s?e:o<=s?t:r}function M9(e){var t=e.map(function(r){return r.reduce(function(n,o){return n+Math.abs(o)},0)});return t.indexOf(Math.min.apply(null,t))}function tc(e,t,r){var n=t*r,o=Math.floor(n/8),s=16-(n-8*o+r),l=(1<<r)-1;return If(e,o)>>s&l}function Ku(e,t,r,n){var o=r*n,s=Math.floor(o/8),l=16-(o-8*s+n),c=(1<<n)-1,d=(t&c)<<l;(function(f,p,v){if(p+1<f.byteLength)f.setUint16(p,v,!1);else{var A=v>>8&255;f.setUint8(p,A)}})(e,s,If(e,s)&~(c<<l)&65535|d)}function If(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function N9(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,o=e[t++],s=o>>7,l=1<<1+(7&o);e[t++],e[t++];var c=null,d=null;s&&(c=t,d=l,t+=3*l);var f=!0,p=[],v=0,A=null,m=0,b=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,b=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((S=e[t++])>=0))throw Error("Invalid block size");if(S===0)break;t+=S}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var y=e[t++];v=e[t++]|e[t++]<<8,A=e[t++],1&y||(A=null),m=y>>2&7,t++;break;case 254:for(;;){if(!((S=e[t++])>=0))throw Error("Invalid block size");if(S===0)break;t+=S}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var N=e[t++]|e[t++]<<8,C=e[t++]|e[t++]<<8,L=e[t++]|e[t++]<<8,P=e[t++]|e[t++]<<8,D=e[t++],U=D>>6&1,H=1<<1+(7&D),K=c,W=d,E=!1;D>>7&&(E=!0,K=t,W=H,t+=3*H);var J=t;for(t++;;){var S;if(!((S=e[t++])>=0))throw Error("Invalid block size");if(S===0)break;t+=S}p.push({x:N,y:C,width:L,height:P,has_local_palette:E,palette_offset:K,palette_size:W,data_offset:J,data_length:t-J,transparent_index:A,interlaced:!!U,delay:v,disposal:m});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return p.length},this.loopCount=function(){return b},this.frameInfo=function(T){if(T<0||T>=p.length)throw new Error("Frame index out of range.");return p[T]},this.decodeAndBlitFrameBGRA=function(T,q){var $=this.frameInfo(T),ne=$.width*$.height,ce=new Uint8Array(ne);Qu(e,$.data_offset,ce,ne);var pe=$.palette_offset,ae=$.transparent_index;ae===null&&(ae=256);var ve=$.width,we=r-ve,re=ve,M=4*($.y*r+$.x),z=4*(($.y+$.height)*r+$.x),X=M,Q=4*we;$.interlaced===!0&&(Q+=4*r*7);for(var ee=8,se=0,fe=ce.length;se<fe;++se){var ie=ce[se];if(re===0&&(re=ve,(X+=Q)>=z&&(Q=4*we+4*r*(ee-1),X=M+(ve+we)*(ee<<1),ee>>=1)),ie===ae)X+=4;else{var xe=e[pe+3*ie],_e=e[pe+3*ie+1],Le=e[pe+3*ie+2];q[X++]=Le,q[X++]=_e,q[X++]=xe,q[X++]=255}--re}},this.decodeAndBlitFrameRGBA=function(T,q){var $=this.frameInfo(T),ne=$.width*$.height,ce=new Uint8Array(ne);Qu(e,$.data_offset,ce,ne);var pe=$.palette_offset,ae=$.transparent_index;ae===null&&(ae=256);var ve=$.width,we=r-ve,re=ve,M=4*($.y*r+$.x),z=4*(($.y+$.height)*r+$.x),X=M,Q=4*we;$.interlaced===!0&&(Q+=4*r*7);for(var ee=8,se=0,fe=ce.length;se<fe;++se){var ie=ce[se];if(re===0&&(re=ve,(X+=Q)>=z&&(Q=4*we+4*r*(ee-1),X=M+(ve+we)*(ee<<1),ee>>=1)),ie===ae)X+=4;else{var xe=e[pe+3*ie],_e=e[pe+3*ie+1],Le=e[pe+3*ie+2];q[X++]=xe,q[X++]=_e,q[X++]=Le,q[X++]=255}--re}}}function Qu(e,t,r,n){for(var o=e[t++],s=1<<o,l=s+1,c=l+1,d=o+1,f=(1<<d)-1,p=0,v=0,A=0,m=e[t++],b=new Int32Array(4096),y=null;;){for(;p<16&&m!==0;)v|=e[t++]<<p,p+=8,m===1?m=e[t++]:--m;if(p<d)break;var N=v&f;if(v>>=d,p-=d,N!==s){if(N===l)break;for(var C=N<c?N:y,L=0,P=C;P>s;)P=b[P]>>8,++L;var D=P;if(A+L+(C!==N?1:0)>n)return void $t.log("Warning, gif stream longer than expected.");r[A++]=D;var U=A+=L;for(C!==N&&(r[A++]=D),P=C;L--;)P=b[P],r[--U]=255&P,P>>=8;y!==null&&c<4096&&(b[c++]=y<<8|D,c>=f+1&&d<12&&(++d,f=f<<1|1)),y=N}else c=l+1,f=(1<<(d=o+1))-1,y=null}return A!==n&&$t.log("Warning, gif stream shorter than expected."),r}/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function rc(e){var t,r,n,o,s,l=Math.floor,c=new Array(64),d=new Array(64),f=new Array(64),p=new Array(64),v=new Array(65535),A=new Array(65535),m=new Array(64),b=new Array(64),y=[],N=0,C=7,L=new Array(64),P=new Array(64),D=new Array(64),U=new Array(256),H=new Array(2048),K=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],E=[0,1,2,3,4,5,6,7,8,9,10,11],J=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],S=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],T=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],q=[0,1,2,3,4,5,6,7,8,9,10,11],$=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],ne=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function ce(M,z){for(var X=0,Q=0,ee=new Array,se=1;se<=16;se++){for(var fe=1;fe<=M[se];fe++)ee[z[Q]]=[],ee[z[Q]][0]=X,ee[z[Q]][1]=se,Q++,X++;X*=2}return ee}function pe(M){for(var z=M[0],X=M[1]-1;X>=0;)z&1<<X&&(N|=1<<C),X--,--C<0&&(N==255?(ae(255),ae(0)):ae(N),C=7,N=0)}function ae(M){y.push(M)}function ve(M){ae(M>>8&255),ae(255&M)}function we(M,z,X,Q,ee){for(var se,fe=ee[0],ie=ee[240],xe=function(je,Fe){var Ee,nt,Be,yt,it,ot,At,ut,qe,at,ze=0;for(qe=0;qe<8;++qe){Ee=je[ze],nt=je[ze+1],Be=je[ze+2],yt=je[ze+3],it=je[ze+4],ot=je[ze+5],At=je[ze+6];var Ct=Ee+(ut=je[ze+7]),vt=Ee-ut,Ve=nt+At,ct=nt-At,Mt=Be+ot,ye=Be-ot,Oe=yt+it,Re=yt-it,ft=Ct+Oe,Tt=Ct-Oe,jt=Ve+Mt,lt=Ve-Mt;je[ze]=ft+jt,je[ze+4]=ft-jt;var _t=.707106781*(lt+Tt);je[ze+2]=Tt+_t,je[ze+6]=Tt-_t;var nn=.382683433*((ft=Re+ye)-(lt=ct+vt)),mr=.5411961*ft+nn,Jr=1.306562965*lt+nn,Vr=.707106781*(jt=ye+ct),tt=vt+Vr,Mr=vt-Vr;je[ze+5]=Mr+mr,je[ze+3]=Mr-mr,je[ze+1]=tt+Jr,je[ze+7]=tt-Jr,ze+=8}for(ze=0,qe=0;qe<8;++qe){Ee=je[ze],nt=je[ze+8],Be=je[ze+16],yt=je[ze+24],it=je[ze+32],ot=je[ze+40],At=je[ze+48];var on=Ee+(ut=je[ze+56]),Nr=Ee-ut,Dr=nt+At,qt=nt-At,gr=Be+ot,xr=Be-ot,Qn=yt+it,ei=yt-it,Ar=on+Qn,Sn=on-Qn,an=Dr+gr,Kr=Dr-gr;je[ze]=Ar+an,je[ze+32]=Ar-an;var Yr=.707106781*(Kr+Sn);je[ze+16]=Sn+Yr,je[ze+48]=Sn-Yr;var wi=.382683433*((Ar=ei+xr)-(Kr=qt+Nr)),Rr=.5411961*Ar+wi,An=1.306562965*Kr+wi,ti=.707106781*(an=xr+qt),yi=Nr+ti,ri=Nr-ti;je[ze+40]=ri+Rr,je[ze+24]=ri-Rr,je[ze+8]=yi+An,je[ze+56]=yi-An,ze++}for(qe=0;qe<64;++qe)at=je[qe]*Fe[qe],m[qe]=at>0?at+.5|0:at-.5|0;return m}(M,z),_e=0;_e<64;++_e)b[K[_e]]=xe[_e];var Le=b[0]-X;X=b[0],Le==0?pe(Q[0]):(pe(Q[A[se=32767+Le]]),pe(v[se]));for(var Pe=63;Pe>0&&b[Pe]==0;)Pe--;if(Pe==0)return pe(fe),X;for(var be,Z=1;Z<=Pe;){for(var rt=Z;b[Z]==0&&Z<=Pe;)++Z;var Je=Z-rt;if(Je>=16){be=Je>>4;for(var Ge=1;Ge<=be;++Ge)pe(ie);Je&=15}se=32767+b[Z],pe(ee[(Je<<4)+A[se]]),pe(v[se]),Z++}return Pe!=63&&pe(fe),X}function re(M){M=Math.min(Math.max(M,1),100),s!=M&&(function(z){for(var X=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],Q=0;Q<64;Q++){var ee=l((X[Q]*z+50)/100);ee=Math.min(Math.max(ee,1),255),c[K[Q]]=ee}for(var se=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],fe=0;fe<64;fe++){var ie=l((se[fe]*z+50)/100);ie=Math.min(Math.max(ie,1),255),d[K[fe]]=ie}for(var xe=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],_e=0,Le=0;Le<8;Le++)for(var Pe=0;Pe<8;Pe++)f[_e]=1/(c[K[_e]]*xe[Le]*xe[Pe]*8),p[_e]=1/(d[K[_e]]*xe[Le]*xe[Pe]*8),_e++}(M<50?Math.floor(5e3/M):Math.floor(200-2*M)),s=M)}this.encode=function(M,z){z&&re(z),y=new Array,N=0,C=7,ve(65496),ve(65504),ve(16),ae(74),ae(70),ae(73),ae(70),ae(0),ae(1),ae(1),ae(0),ve(1),ve(1),ae(0),ae(0),function(){ve(65499),ve(132),ae(0);for(var nt=0;nt<64;nt++)ae(c[nt]);ae(1);for(var Be=0;Be<64;Be++)ae(d[Be])}(),function(nt,Be){ve(65472),ve(17),ae(8),ve(Be),ve(nt),ae(3),ae(1),ae(17),ae(0),ae(2),ae(17),ae(1),ae(3),ae(17),ae(1)}(M.width,M.height),function(){ve(65476),ve(418),ae(0);for(var nt=0;nt<16;nt++)ae(W[nt+1]);for(var Be=0;Be<=11;Be++)ae(E[Be]);ae(16);for(var yt=0;yt<16;yt++)ae(J[yt+1]);for(var it=0;it<=161;it++)ae(S[it]);ae(1);for(var ot=0;ot<16;ot++)ae(T[ot+1]);for(var At=0;At<=11;At++)ae(q[At]);ae(17);for(var ut=0;ut<16;ut++)ae($[ut+1]);for(var qe=0;qe<=161;qe++)ae(ne[qe])}(),ve(65498),ve(12),ae(3),ae(1),ae(0),ae(2),ae(17),ae(3),ae(17),ae(0),ae(63),ae(0);var X=0,Q=0,ee=0;N=0,C=7,this.encode.displayName="_encode_";for(var se,fe,ie,xe,_e,Le,Pe,be,Z,rt=M.data,Je=M.width,Ge=M.height,je=4*Je,Fe=0;Fe<Ge;){for(se=0;se<je;){for(_e=je*Fe+se,Pe=-1,be=0,Z=0;Z<64;Z++)Le=_e+(be=Z>>3)*je+(Pe=4*(7&Z)),Fe+be>=Ge&&(Le-=je*(Fe+1+be-Ge)),se+Pe>=je&&(Le-=se+Pe-je+4),fe=rt[Le++],ie=rt[Le++],xe=rt[Le++],L[Z]=(H[fe]+H[ie+256|0]+H[xe+512|0]>>16)-128,P[Z]=(H[fe+768|0]+H[ie+1024|0]+H[xe+1280|0]>>16)-128,D[Z]=(H[fe+1280|0]+H[ie+1536|0]+H[xe+1792|0]>>16)-128;X=we(L,f,X,t,n),Q=we(P,p,Q,r,o),ee=we(D,p,ee,r,o),se+=32}Fe+=8}if(C>=0){var Ee=[];Ee[1]=C+1,Ee[0]=(1<<C+1)-1,pe(Ee)}return ve(65497),new Uint8Array(y)},e=e||50,function(){for(var M=String.fromCharCode,z=0;z<256;z++)U[z]=M(z)}(),t=ce(W,E),r=ce(T,q),n=ce(J,S),o=ce($,ne),function(){for(var M=1,z=2,X=1;X<=15;X++){for(var Q=M;Q<z;Q++)A[32767+Q]=X,v[32767+Q]=[],v[32767+Q][1]=X,v[32767+Q][0]=Q;for(var ee=-(z-1);ee<=-M;ee++)A[32767+ee]=X,v[32767+ee]=[],v[32767+ee][1]=X,v[32767+ee][0]=z-1+ee;M<<=1,z<<=1}}(),function(){for(var M=0;M<256;M++)H[M]=19595*M,H[M+256|0]=38470*M,H[M+512|0]=7471*M+32768,H[M+768|0]=-11059*M,H[M+1024|0]=-21709*M,H[M+1280|0]=32768*M+8421375,H[M+1536|0]=-27439*M,H[M+1792|0]=-5329*M}(),re(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function Yn(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function ed(e){function t(E){if(!E)throw Error("assert :P")}function r(E,J,S){for(var T=0;4>T;T++)if(E[J+T]!=S.charCodeAt(T))return!0;return!1}function n(E,J,S,T,q){for(var $=0;$<q;$++)E[J+$]=S[T+$]}function o(E,J,S,T){for(var q=0;q<T;q++)E[J+q]=S}function s(E){return new Int32Array(E)}function l(E,J){for(var S=[],T=0;T<E;T++)S.push(new J);return S}function c(E,J){var S=[];return function T(q,$,ne){for(var ce=ne[$],pe=0;pe<ce&&(q.push(ne.length>$+1?[]:new J),!(ne.length<$+1));pe++)T(q[pe],$+1,ne)}(S,0,E),S}var d=function(){var E=this;function J(u,h){for(var x=1<<h-1>>>0;u&x;)x>>>=1;return x?(u&x-1)+x:u}function S(u,h,x,w,I){t(!(w%x));do u[h+(w-=x)]=I;while(0<w)}function T(u,h,x,w,I){if(t(2328>=I),512>=I)var R=s(512);else if((R=s(I))==null)return 0;return function(O,F,B,Y,oe,ge){var G,le,he=F,Ce=1<<B,me=s(16),Ae=s(16);for(t(oe!=0),t(Y!=null),t(O!=null),t(0<B),le=0;le<oe;++le){if(15<Y[le])return 0;++me[Y[le]]}if(me[0]==oe)return 0;for(Ae[1]=0,G=1;15>G;++G){if(me[G]>1<<G)return 0;Ae[G+1]=Ae[G]+me[G]}for(le=0;le<oe;++le)G=Y[le],0<Y[le]&&(ge[Ae[G]++]=le);if(Ae[15]==1)return(Y=new q).g=0,Y.value=ge[0],S(O,he,1,Ce,Y),Ce;var ke,Ie=-1,Ne=Ce-1,Ke=0,$e=1,bt=1,We=1<<B;for(le=0,G=1,oe=2;G<=B;++G,oe<<=1){if($e+=bt<<=1,0>(bt-=me[G]))return 0;for(;0<me[G];--me[G])(Y=new q).g=G,Y.value=ge[le++],S(O,he+Ke,oe,We,Y),Ke=J(Ke,G)}for(G=B+1,oe=2;15>=G;++G,oe<<=1){if($e+=bt<<=1,0>(bt-=me[G]))return 0;for(;0<me[G];--me[G]){if(Y=new q,(Ke&Ne)!=Ie){for(he+=We,ke=1<<(Ie=G)-B;15>Ie&&!(0>=(ke-=me[Ie]));)++Ie,ke<<=1;Ce+=We=1<<(ke=Ie-B),O[F+(Ie=Ke&Ne)].g=ke+B,O[F+Ie].value=he-F-Ie}Y.g=G-B,Y.value=ge[le++],S(O,he+(Ke>>B),oe,We,Y),Ke=J(Ke,G)}}return $e!=2*Ae[15]-1?0:Ce}(u,h,x,w,I,R)}function q(){this.value=this.g=0}function $(){this.value=this.g=0}function ne(){this.G=l(5,q),this.H=s(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=l(qo,$)}function ce(u,h,x,w){t(u!=null),t(h!=null),t(2147483648>w),u.Ca=254,u.I=0,u.b=-8,u.Ka=0,u.oa=h,u.pa=x,u.Jd=h,u.Yc=x+w,u.Zc=4<=w?x+w-4+1:x,fe(u)}function pe(u,h){for(var x=0;0<h--;)x|=xe(u,128)<<h;return x}function ae(u,h){var x=pe(u,h);return ie(u)?-x:x}function ve(u,h,x,w){var I,R=0;for(t(u!=null),t(h!=null),t(4294967288>w),u.Sb=w,u.Ra=0,u.u=0,u.h=0,4<w&&(w=4),I=0;I<w;++I)R+=h[x+I]<<8*I;u.Ra=R,u.bb=w,u.oa=h,u.pa=x}function we(u){for(;8<=u.u&&u.bb<u.Sb;)u.Ra>>>=8,u.Ra+=u.oa[u.pa+u.bb]<<io-8>>>0,++u.bb,u.u-=8;Q(u)&&(u.h=1,u.u=0)}function re(u,h){if(t(0<=h),!u.h&&h<=hn){var x=X(u)&dn[h];return u.u+=h,we(u),x}return u.h=1,u.u=0}function M(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function z(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function X(u){return u.Ra>>>(u.u&io-1)>>>0}function Q(u){return t(u.bb<=u.Sb),u.h||u.bb==u.Sb&&u.u>io}function ee(u,h){u.u=h,u.h=Q(u)}function se(u){u.u>=ji&&(t(u.u>=ji),we(u))}function fe(u){t(u!=null&&u.oa!=null),u.pa<u.Zc?(u.I=(u.oa[u.pa++]|u.I<<8)>>>0,u.b+=8):(t(u!=null&&u.oa!=null),u.pa<u.Yc?(u.b+=8,u.I=u.oa[u.pa++]|u.I<<8):u.Ka?u.b=0:(u.I<<=8,u.b+=8,u.Ka=1))}function ie(u){return pe(u,1)}function xe(u,h){var x=u.Ca;0>u.b&&fe(u);var w=u.b,I=x*h>>>8,R=(u.I>>>w>I)+0;for(R?(x-=I,u.I-=I+1<<w>>>0):x=I+1,w=x,I=0;256<=w;)I+=8,w>>=8;return w=7^I+oo[w],u.b-=w,u.Ca=(x<<w)-1,R}function _e(u,h,x){u[h+0]=x>>24&255,u[h+1]=x>>16&255,u[h+2]=x>>8&255,u[h+3]=255&x}function Le(u,h){return u[h+0]|u[h+1]<<8}function Pe(u,h){return Le(u,h)|u[h+2]<<16}function be(u,h){return Le(u,h)|Le(u,h+2)<<16}function Z(u,h){var x=1<<h;return t(u!=null),t(0<h),u.X=s(x),u.X==null?0:(u.Mb=32-h,u.Xa=h,1)}function rt(u,h){t(u!=null),t(h!=null),t(u.Xa==h.Xa),n(h.X,0,u.X,0,1<<h.Xa)}function Je(){this.X=[],this.Xa=this.Mb=0}function Ge(u,h,x,w){t(x!=null),t(w!=null);var I=x[0],R=w[0];return I==0&&(I=(u*R+h/2)/h),R==0&&(R=(h*I+u/2)/u),0>=I||0>=R?0:(x[0]=I,w[0]=R,1)}function je(u,h){return u+(1<<h)-1>>>h}function Fe(u,h){return((4278255360&u)+(4278255360&h)>>>0&4278255360)+((16711935&u)+(16711935&h)>>>0&16711935)>>>0}function Ee(u,h){E[h]=function(x,w,I,R,O,F,B){var Y;for(Y=0;Y<O;++Y){var oe=E[u](F[B+Y-1],I,R+Y);F[B+Y]=Fe(x[w+Y],oe)}}}function nt(){this.ud=this.hd=this.jd=0}function Be(u,h){return((4278124286&(u^h))>>>1)+(u&h)>>>0}function yt(u){return 0<=u&&256>u?u:0>u?0:255<u?255:void 0}function it(u,h){return yt(u+(u-h+.5>>1))}function ot(u,h,x){return Math.abs(h-x)-Math.abs(u-x)}function At(u,h,x,w,I,R,O){for(w=R[O-1],x=0;x<I;++x)R[O+x]=w=Fe(u[h+x],w)}function ut(u,h,x,w,I){var R;for(R=0;R<x;++R){var O=u[h+R],F=O>>8&255,B=16711935&(B=(B=16711935&O)+((F<<16)+F));w[I+R]=(4278255360&O)+B>>>0}}function qe(u,h){h.jd=255&u,h.hd=u>>8&255,h.ud=u>>16&255}function at(u,h,x,w,I,R){var O;for(O=0;O<w;++O){var F=h[x+O],B=F>>>8,Y=F,oe=255&(oe=(oe=F>>>16)+((u.jd<<24>>24)*(B<<24>>24)>>>5));Y=255&(Y=(Y+=(u.hd<<24>>24)*(B<<24>>24)>>>5)+((u.ud<<24>>24)*(oe<<24>>24)>>>5)),I[R+O]=(4278255360&F)+(oe<<16)+Y}}function ze(u,h,x,w,I){E[h]=function(R,O,F,B,Y,oe,ge,G,le){for(B=ge;B<G;++B)for(ge=0;ge<le;++ge)Y[oe++]=I(F[w(R[O++])])},E[u]=function(R,O,F,B,Y,oe,ge){var G=8>>R.b,le=R.Ea,he=R.K[0],Ce=R.w;if(8>G)for(R=(1<<R.b)-1,Ce=(1<<G)-1;O<F;++O){var me,Ae=0;for(me=0;me<le;++me)me&R||(Ae=w(B[Y++])),oe[ge++]=I(he[Ae&Ce]),Ae>>=G}else E["VP8LMapColor"+x](B,Y,he,Ce,oe,ge,O,F,le)}}function Ct(u,h,x,w,I){for(x=h+x;h<x;){var R=u[h++];w[I++]=R>>16&255,w[I++]=R>>8&255,w[I++]=255&R}}function vt(u,h,x,w,I){for(x=h+x;h<x;){var R=u[h++];w[I++]=R>>16&255,w[I++]=R>>8&255,w[I++]=255&R,w[I++]=R>>24&255}}function Ve(u,h,x,w,I){for(x=h+x;h<x;){var R=(O=u[h++])>>16&240|O>>12&15,O=240&O|O>>28&15;w[I++]=R,w[I++]=O}}function ct(u,h,x,w,I){for(x=h+x;h<x;){var R=(O=u[h++])>>16&248|O>>13&7,O=O>>5&224|O>>3&31;w[I++]=R,w[I++]=O}}function Mt(u,h,x,w,I){for(x=h+x;h<x;){var R=u[h++];w[I++]=255&R,w[I++]=R>>8&255,w[I++]=R>>16&255}}function ye(u,h,x,w,I,R){if(R==0)for(x=h+x;h<x;)_e(w,((R=u[h++])[0]>>24|R[1]>>8&65280|R[2]<<8&16711680|R[3]<<24)>>>0),I+=32;else n(w,I,u,h,x)}function Oe(u,h){E[h][0]=E[u+"0"],E[h][1]=E[u+"1"],E[h][2]=E[u+"2"],E[h][3]=E[u+"3"],E[h][4]=E[u+"4"],E[h][5]=E[u+"5"],E[h][6]=E[u+"6"],E[h][7]=E[u+"7"],E[h][8]=E[u+"8"],E[h][9]=E[u+"9"],E[h][10]=E[u+"10"],E[h][11]=E[u+"11"],E[h][12]=E[u+"12"],E[h][13]=E[u+"13"],E[h][14]=E[u+"0"],E[h][15]=E[u+"0"]}function Re(u){return u==g1||u==x1||u==Ys||u==v1}function ft(){this.eb=[],this.size=this.A=this.fb=0}function Tt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function jt(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new ft,this.f.kb=new Tt,this.sd=null}function lt(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function _t(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function nn(u){return alert("todo:WebPSamplerProcessPlane"),u.T}function mr(u,h){var x=u.T,w=h.ba.f.RGBA,I=w.eb,R=w.fb+u.ka*w.A,O=Ln[h.ba.S],F=u.y,B=u.O,Y=u.f,oe=u.N,ge=u.ea,G=u.W,le=h.cc,he=h.dc,Ce=h.Mc,me=h.Nc,Ae=u.ka,ke=u.ka+u.T,Ie=u.U,Ne=Ie+1>>1;for(Ae==0?O(F,B,null,null,Y,oe,ge,G,Y,oe,ge,G,I,R,null,null,Ie):(O(h.ec,h.fc,F,B,le,he,Ce,me,Y,oe,ge,G,I,R-w.A,I,R,Ie),++x);Ae+2<ke;Ae+=2)le=Y,he=oe,Ce=ge,me=G,oe+=u.Rc,G+=u.Rc,R+=2*w.A,O(F,(B+=2*u.fa)-u.fa,F,B,le,he,Ce,me,Y,oe,ge,G,I,R-w.A,I,R,Ie);return B+=u.fa,u.j+ke<u.o?(n(h.ec,h.fc,F,B,Ie),n(h.cc,h.dc,Y,oe,Ne),n(h.Mc,h.Nc,ge,G,Ne),x--):1&ke||O(F,B,null,null,Y,oe,ge,G,Y,oe,ge,G,I,R+w.A,null,null,Ie),x}function Jr(u,h,x){var w=u.F,I=[u.J];if(w!=null){var R=u.U,O=h.ba.S,F=O==Vs||O==Ys;h=h.ba.f.RGBA;var B=[0],Y=u.ka;B[0]=u.T,u.Kb&&(Y==0?--B[0]:(--Y,I[0]-=u.width),u.j+u.ka+u.T==u.o&&(B[0]=u.o-u.j-Y));var oe=h.eb;Y=h.fb+Y*h.A,u=N0(w,I[0],u.width,R,B,oe,Y+(F?0:3),h.A),t(x==B),u&&Re(O)&&ts(oe,Y,F,R,B,h.A)}return 0}function Vr(u){var h=u.ma,x=h.ba.S,w=11>x,I=x==$s||x==qs||x==Vs||x==m1||x==12||Re(x);if(h.memory=null,h.Ib=null,h.Jb=null,h.Nd=null,!Ga(h.Oa,u,I?11:12))return 0;if(I&&Re(x)&&Os(),u.da)alert("todo:use_scaling");else{if(w){if(h.Ib=nn,u.Kb){if(x=u.U+1>>1,h.memory=s(u.U+2*x),h.memory==null)return 0;h.ec=h.memory,h.fc=0,h.cc=h.ec,h.dc=h.fc+u.U,h.Mc=h.cc,h.Nc=h.dc+x,h.Ib=mr,Os()}}else alert("todo:EmitYUV");I&&(h.Jb=Jr,w&&Mn())}if(w&&!q0){for(u=0;256>u;++u)n5[u]=89858*(u-128)+Ws>>Gs,a5[u]=-22014*(u-128)+Ws,o5[u]=-45773*(u-128),i5[u]=113618*(u-128)+Ws>>Gs;for(u=ns;u<y1;++u)h=76283*(u-16)+Ws>>Gs,s5[u-ns]=rr(h,255),l5[u-ns]=rr(h+8>>4,15);q0=1}return 1}function tt(u){var h=u.ma,x=u.U,w=u.T;return t(!(1&u.ka)),0>=x||0>=w?0:(x=h.Ib(u,h),h.Jb!=null&&h.Jb(u,h,x),h.Dc+=x,1)}function Mr(u){u.ma.memory=null}function on(u,h,x,w){return re(u,8)!=47?0:(h[0]=re(u,14)+1,x[0]=re(u,14)+1,w[0]=re(u,1),re(u,3)!=0?0:!u.h)}function Nr(u,h){if(4>u)return u+1;var x=u-2>>1;return(2+(1&u)<<x)+re(h,x)+1}function Dr(u,h){return 120<h?h-120:1<=(x=((x=$f[h-1])>>4)*u+(8-(15&x)))?x:1;var x}function qt(u,h,x){var w=X(x),I=u[h+=255&w].g-8;return 0<I&&(ee(x,x.u+8),w=X(x),h+=u[h].value,h+=w&(1<<I)-1),ee(x,x.u+u[h].g),u[h].value}function gr(u,h,x){return x.g+=u.g,x.value+=u.value<<h>>>0,t(8>=x.g),u.g}function xr(u,h,x){var w=u.xc;return t((h=w==0?0:u.vc[u.md*(x>>w)+(h>>w)])<u.Wb),u.Ya[h]}function Qn(u,h,x,w){var I=u.ab,R=u.c*h,O=u.C;h=O+h;var F=x,B=w;for(w=u.Ta,x=u.Ua;0<I--;){var Y=u.gc[I],oe=O,ge=h,G=F,le=B,he=(B=w,F=x,Y.Ea);switch(t(oe<ge),t(ge<=Y.nc),Y.hc){case 2:sr(G,le,(ge-oe)*he,B,F);break;case 0:var Ce=oe,me=ge,Ae=B,ke=F,Ie=(We=Y).Ea;Ce==0&&(Xa(G,le,null,null,1,Ae,ke),At(G,le+1,0,0,Ie-1,Ae,ke+1),le+=Ie,ke+=Ie,++Ce);for(var Ne=1<<We.b,Ke=Ne-1,$e=je(Ie,We.b),bt=We.K,We=We.w+(Ce>>We.b)*$e;Ce<me;){var St=bt,_r=We,wt=1;for(ma(G,le,Ae,ke-Ie,1,Ae,ke);wt<Ie;){var Xe=(wt&~Ke)+Ne;Xe>Ie&&(Xe=Ie),(0,Ja[St[_r++]>>8&15])(G,le+ +wt,Ae,ke+wt-Ie,Xe-wt,Ae,ke+wt),wt=Xe}le+=Ie,ke+=Ie,++Ce&Ke||(We+=$e)}ge!=Y.nc&&n(B,F-he,B,F+(ge-oe-1)*he,he);break;case 1:for(he=G,me=le,Ie=(G=Y.Ea)-(ke=G&~(Ae=(le=1<<Y.b)-1)),Ce=je(G,Y.b),Ne=Y.K,Y=Y.w+(oe>>Y.b)*Ce;oe<ge;){for(Ke=Ne,$e=Y,bt=new nt,We=me+ke,St=me+G;me<We;)qe(Ke[$e++],bt),Ka(bt,he,me,le,B,F),me+=le,F+=le;me<St&&(qe(Ke[$e++],bt),Ka(bt,he,me,Ie,B,F),me+=Ie,F+=Ie),++oe&Ae||(Y+=Ce)}break;case 3:if(G==B&&le==F&&0<Y.b){for(me=B,G=he=F+(ge-oe)*he-(ke=(ge-oe)*je(Y.Ea,Y.b)),le=B,Ae=F,Ce=[],ke=(Ie=ke)-1;0<=ke;--ke)Ce[ke]=le[Ae+ke];for(ke=Ie-1;0<=ke;--ke)me[G+ke]=Ce[ke];zs(Y,oe,ge,B,he,B,F)}else zs(Y,oe,ge,G,le,B,F)}F=w,B=x}B!=x&&n(w,x,F,B,R)}function ei(u,h){var x=u.V,w=u.Ba+u.c*u.C,I=h-u.C;if(t(h<=u.l.o),t(16>=I),0<I){var R=u.l,O=u.Ta,F=u.Ua,B=R.width;if(Qn(u,I,x,w),I=F=[F],t((x=u.C)<(w=h)),t(R.v<R.va),w>R.o&&(w=R.o),x<R.j){var Y=R.j-x;x=R.j,I[0]+=Y*B}if(x>=w?x=0:(I[0]+=4*R.v,R.ka=x-R.j,R.U=R.va-R.v,R.T=w-x,x=1),x){if(F=F[0],11>(x=u.ca).S){var oe=x.f.RGBA,ge=(w=x.S,I=R.U,R=R.T,Y=oe.eb,oe.A),G=R;for(oe=oe.fb+u.Ma*oe.A;0<G--;){var le=O,he=F,Ce=I,me=Y,Ae=oe;switch(w){case Hs:Qa(le,he,Ce,me,Ae);break;case $s:ao(le,he,Ce,me,Ae);break;case g1:ao(le,he,Ce,me,Ae),ts(me,Ae,0,Ce,1,0);break;case D0:Vo(le,he,Ce,me,Ae);break;case qs:ye(le,he,Ce,me,Ae,1);break;case x1:ye(le,he,Ce,me,Ae,1),ts(me,Ae,0,Ce,1,0);break;case Vs:ye(le,he,Ce,me,Ae,0);break;case Ys:ye(le,he,Ce,me,Ae,0),ts(me,Ae,1,Ce,1,0);break;case m1:so(le,he,Ce,me,Ae);break;case v1:so(le,he,Ce,me,Ae),M0(me,Ae,Ce,1,0);break;case R0:lo(le,he,Ce,me,Ae);break;default:t(0)}F+=B,oe+=ge}u.Ma+=R}else alert("todo:EmitRescaledRowsYUVA");t(u.Ma<=x.height)}}u.C=h,t(u.C<=u.i)}function Ar(u){var h;if(0<u.ua)return 0;for(h=0;h<u.Wb;++h){var x=u.Ya[h].G,w=u.Ya[h].H;if(0<x[1][w[1]+0].g||0<x[2][w[2]+0].g||0<x[3][w[3]+0].g)return 0}return 1}function Sn(u,h,x,w,I,R){if(u.Z!=0){var O=u.qd,F=u.rd;for(t(ho[u.Z]!=null);h<x;++h)ho[u.Z](O,F,w,I,w,I,R),O=w,F=I,I+=R;u.qd=O,u.rd=F}}function an(u,h){var x=u.l.ma,w=x.Z==0||x.Z==1?u.l.j:u.C;if(w=u.C<w?w:u.C,t(h<=u.l.o),h>w){var I=u.l.width,R=x.ca,O=x.tb+I*w,F=u.V,B=u.Ba+u.c*w,Y=u.gc;t(u.ab==1),t(Y[0].hc==3),ui(Y[0],w,h,F,B,R,O),Sn(x,w,h,R,O,I)}u.C=u.Ma=h}function Kr(u,h,x,w,I,R,O){var F=u.$/w,B=u.$%w,Y=u.m,oe=u.s,ge=x+u.$,G=ge;I=x+w*I;var le=x+w*R,he=280+oe.ua,Ce=u.Pb?F:16777216,me=0<oe.ua?oe.Wa:null,Ae=oe.wc,ke=ge<le?xr(oe,B,F):null;t(u.C<R),t(le<=I);var Ie=!1;e:for(;;){for(;Ie||ge<le;){var Ne=0;if(F>=Ce){var Ke=ge-x;t((Ce=u).Pb),Ce.wd=Ce.m,Ce.xd=Ke,0<Ce.s.ua&&rt(Ce.s.Wa,Ce.s.vb),Ce=F+Vf}if(B&Ae||(ke=xr(oe,B,F)),t(ke!=null),ke.Qb&&(h[ge]=ke.qb,Ie=!0),!Ie)if(se(Y),ke.jc){Ne=Y,Ke=h;var $e=ge,bt=ke.pd[X(Ne)&qo-1];t(ke.jc),256>bt.g?(ee(Ne,Ne.u+bt.g),Ke[$e]=bt.value,Ne=0):(ee(Ne,Ne.u+bt.g-256),t(256<=bt.value),Ne=bt.value),Ne==0&&(Ie=!0)}else Ne=qt(ke.G[0],ke.H[0],Y);if(Y.h)break;if(Ie||256>Ne){if(!Ie)if(ke.nd)h[ge]=(ke.qb|Ne<<8)>>>0;else{if(se(Y),Ie=qt(ke.G[1],ke.H[1],Y),se(Y),Ke=qt(ke.G[2],ke.H[2],Y),$e=qt(ke.G[3],ke.H[3],Y),Y.h)break;h[ge]=($e<<24|Ie<<16|Ne<<8|Ke)>>>0}if(Ie=!1,++ge,++B>=w&&(B=0,++F,O!=null&&F<=R&&!(F%16)&&O(u,F),me!=null))for(;G<ge;)Ne=h[G++],me.X[(506832829*Ne&4294967295)>>>me.Mb]=Ne}else if(280>Ne){if(Ne=Nr(Ne-256,Y),Ke=qt(ke.G[4],ke.H[4],Y),se(Y),Ke=Dr(w,Ke=Nr(Ke,Y)),Y.h)break;if(ge-x<Ke||I-ge<Ne)break e;for($e=0;$e<Ne;++$e)h[ge+$e]=h[ge+$e-Ke];for(ge+=Ne,B+=Ne;B>=w;)B-=w,++F,O!=null&&F<=R&&!(F%16)&&O(u,F);if(t(ge<=I),B&Ae&&(ke=xr(oe,B,F)),me!=null)for(;G<ge;)Ne=h[G++],me.X[(506832829*Ne&4294967295)>>>me.Mb]=Ne}else{if(!(Ne<he))break e;for(Ie=Ne-280,t(me!=null);G<ge;)Ne=h[G++],me.X[(506832829*Ne&4294967295)>>>me.Mb]=Ne;Ne=ge,t(!(Ie>>>(Ke=me).Xa)),h[Ne]=Ke.X[Ie],Ie=!0}Ie||t(Y.h==Q(Y))}if(u.Pb&&Y.h&&ge<I)t(u.m.h),u.a=5,u.m=u.wd,u.$=u.xd,0<u.s.ua&&rt(u.s.vb,u.s.Wa);else{if(Y.h)break e;O!=null&&O(u,F>R?R:F),u.a=0,u.$=ge-x}return 1}return u.a=3,0}function Yr(u){t(u!=null),u.vc=null,u.yc=null,u.Ya=null;var h=u.Wa;h!=null&&(h.X=null),u.vb=null,t(u!=null)}function wi(){var u=new He;return u==null?null:(u.a=0,u.xb=z0,Oe("Predictor","VP8LPredictors"),Oe("Predictor","VP8LPredictors_C"),Oe("PredictorAdd","VP8LPredictorsAdd"),Oe("PredictorAdd","VP8LPredictorsAdd_C"),sr=ut,Ka=at,Qa=Ct,ao=vt,so=Ve,lo=ct,Vo=Mt,E.VP8LMapColor32b=ci,E.VP8LMapColor8b=Za,u)}function Rr(u,h,x,w,I){var R=1,O=[u],F=[h],B=w.m,Y=w.s,oe=null,ge=0;e:for(;;){if(x)for(;R&&re(B,1);){var G=O,le=F,he=w,Ce=1,me=he.m,Ae=he.gc[he.ab],ke=re(me,2);if(he.Oc&1<<ke)R=0;else{switch(he.Oc|=1<<ke,Ae.hc=ke,Ae.Ea=G[0],Ae.nc=le[0],Ae.K=[null],++he.ab,t(4>=he.ab),ke){case 0:case 1:Ae.b=re(me,3)+2,Ce=Rr(je(Ae.Ea,Ae.b),je(Ae.nc,Ae.b),0,he,Ae.K),Ae.K=Ae.K[0];break;case 3:var Ie,Ne=re(me,8)+1,Ke=16<Ne?0:4<Ne?1:2<Ne?2:3;if(G[0]=je(Ae.Ea,Ke),Ae.b=Ke,Ie=Ce=Rr(Ne,1,0,he,Ae.K)){var $e,bt=Ne,We=Ae,St=1<<(8>>We.b),_r=s(St);if(_r==null)Ie=0;else{var wt=We.K[0],Xe=We.w;for(_r[0]=We.K[0][0],$e=1;$e<1*bt;++$e)_r[$e]=Fe(wt[Xe+$e],_r[$e-1]);for(;$e<4*St;++$e)_r[$e]=0;We.K[0]=null,We.K[0]=_r,Ie=1}}Ce=Ie;break;case 2:break;default:t(0)}R=Ce}}if(O=O[0],F=F[0],R&&re(B,1)&&!(R=1<=(ge=re(B,4))&&11>=ge)){w.a=3;break e}var De;if(De=R)t:{var cr,xt,kt,Xt=w,Lr=O,Wr=F,nr=ge,zr=x,Xr=Xt.m,Cr=Xt.s,Nt=[null],Ot=1,ir=0,Ft=qf[nr];r:for(;;){if(zr&&re(Xr,1)){var Pr=re(Xr,3)+2,qn=je(Lr,Pr),ur=je(Wr,Pr),en=qn*ur;if(!Rr(qn,ur,0,Xt,Nt))break r;for(Nt=Nt[0],Cr.xc=Pr,cr=0;cr<en;++cr){var Ht=Nt[cr]>>8&65535;Nt[cr]=Ht,Ht>=Ot&&(Ot=Ht+1)}}if(Xr.h)break r;for(xt=0;5>xt;++xt){var Sr=O0[xt];!xt&&0<nr&&(Sr+=1<<nr),ir<Sr&&(ir=Sr)}var pn=l(Ot*Ft,q),Zr=Ot,mn=l(Zr,ne);if(mn==null)var gn=null;else t(65536>=Zr),gn=mn;var tn=s(ir);if(gn==null||tn==null||pn==null){Xt.a=1;break r}var xn=pn;for(cr=kt=0;cr<Ot;++cr){var Yt=gn[cr],vn=Yt.G,Vn=Yt.H,Go=0,Pi=1,Tr=0;for(xt=0;5>xt;++xt){Sr=O0[xt],vn[xt]=xn,Vn[xt]=kt,!xt&&0<nr&&(Sr+=1<<nr);i:{var Zs,_1=Sr,Js=Xt,is=tn,d5=xn,h5=kt,C1=0,fo=Js.m,f5=re(fo,1);if(o(is,0,0,_1),f5){var p5=re(fo,1)+1,m5=re(fo,1),G0=re(fo,m5==0?1:8);is[G0]=1,p5==2&&(is[G0=re(fo,8)]=1);var Ks=1}else{var W0=s(19),X0=re(fo,4)+4;if(19<X0){Js.a=3;var Qs=0;break i}for(Zs=0;Zs<X0;++Zs)W0[Hf[Zs]]=re(fo,3);var S1=void 0,os=void 0,Z0=Js,g5=W0,el=_1,J0=is,A1=0,po=Z0.m,K0=8,Q0=l(128,q);n:for(;T(Q0,0,7,g5,19);){if(re(po,1)){var x5=2+2*re(po,3);if((S1=2+re(po,x5))>el)break n}else S1=el;for(os=0;os<el&&S1--;){se(po);var e2=Q0[0+(127&X(po))];ee(po,po.u+e2.g);var xa=e2.value;if(16>xa)J0[os++]=xa,xa!=0&&(K0=xa);else{var v5=xa==16,t2=xa-16,b5=Bf[t2],r2=re(po,zf[t2])+b5;if(os+r2>el)break n;for(var w5=v5?K0:0;0<r2--;)J0[os++]=w5}}A1=1;break n}A1||(Z0.a=3),Ks=A1}(Ks=Ks&&!fo.h)&&(C1=T(d5,h5,8,is,_1)),Ks&&C1!=0?Qs=C1:(Js.a=3,Qs=0)}if(Qs==0)break r;if(Pi&&Uf[xt]==1&&(Pi=xn[kt].g==0),Go+=xn[kt].g,kt+=Qs,3>=xt){var as,k1=tn[0];for(as=1;as<Sr;++as)tn[as]>k1&&(k1=tn[as]);Tr+=k1}}if(Yt.nd=Pi,Yt.Qb=0,Pi&&(Yt.qb=(vn[3][Vn[3]+0].value<<24|vn[1][Vn[1]+0].value<<16|vn[2][Vn[2]+0].value)>>>0,Go==0&&256>vn[0][Vn[0]+0].value&&(Yt.Qb=1,Yt.qb+=vn[0][Vn[0]+0].value<<8)),Yt.jc=!Yt.Qb&&6>Tr,Yt.jc){var tl,Ti=Yt;for(tl=0;tl<qo;++tl){var mo=tl,go=Ti.pd[mo],rl=Ti.G[0][Ti.H[0]+mo];256<=rl.value?(go.g=rl.g+256,go.value=rl.value):(go.g=0,go.value=0,mo>>=gr(rl,8,go),mo>>=gr(Ti.G[1][Ti.H[1]+mo],16,go),mo>>=gr(Ti.G[2][Ti.H[2]+mo],0,go),gr(Ti.G[3][Ti.H[3]+mo],24,go))}}}Cr.vc=Nt,Cr.Wb=Ot,Cr.Ya=gn,Cr.yc=pn,De=1;break t}De=0}if(!(R=De)){w.a=3;break e}if(0<ge){if(Y.ua=1<<ge,!Z(Y.Wa,ge)){w.a=1,R=0;break e}}else Y.ua=0;var M1=w,n2=O,y5=F,N1=M1.s,j1=N1.xc;if(M1.c=n2,M1.i=y5,N1.md=je(n2,j1),N1.wc=j1==0?-1:(1<<j1)-1,x){w.xb=Kf;break e}if((oe=s(O*F))==null){w.a=1,R=0;break e}R=(R=Kr(w,oe,0,O,F,F,null))&&!B.h;break e}return R?(I!=null?I[0]=oe:(t(oe==null),t(x)),w.$=0,x||Yr(Y)):Yr(Y),R}function An(u,h){var x=u.c*u.i,w=x+h+16*h;return t(u.c<=h),u.V=s(w),u.V==null?(u.Ta=null,u.Ua=0,u.a=1,0):(u.Ta=u.V,u.Ua=u.Ba+x+h,1)}function ti(u,h){var x=u.C,w=h-x,I=u.V,R=u.Ba+u.c*x;for(t(h<=u.l.o);0<w;){var O=16<w?16:w,F=u.l.ma,B=u.l.width,Y=B*O,oe=F.ca,ge=F.tb+B*x,G=u.Ta,le=u.Ua;Qn(u,O,I,R),j0(G,le,oe,ge,Y),Sn(F,x,x+O,oe,ge,B),w-=O,I+=O*u.c,x+=O}t(x==h),u.C=u.Ma=h}function yi(){this.ub=this.yd=this.td=this.Rb=0}function ri(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function oa(){this.Fb=this.Bb=this.Cb=0,this.Zb=s(4),this.Lb=s(4)}function _i(){this.Yb=function(){var u=[];return function h(x,w,I){for(var R=I[w],O=0;O<R&&(x.push(I.length>w+1?[]:0),!(I.length<w+1));O++)h(x[O],w+1,I)}(u,0,[3,11]),u}()}function ko(){this.jb=s(3),this.Wc=c([4,8],_i),this.Xc=c([4,17],_i)}function Mo(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new s(4),this.od=new s(4)}function Gr(){this.ld=this.La=this.dd=this.tc=0}function Hi(){this.Na=this.la=0}function aa(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function $i(){this.ad=s(384),this.Za=0,this.Ob=s(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function No(){this.uc=this.M=this.Nb=0,this.wa=Array(new Gr),this.Y=0,this.ya=Array(new $i),this.aa=0,this.l=new ni}function jo(){this.y=s(16),this.f=s(8),this.ea=s(8)}function sa(){this.cb=this.a=0,this.sc="",this.m=new M,this.Od=new yi,this.Kc=new ri,this.ed=new Mo,this.Qa=new oa,this.Ic=this.$c=this.Aa=0,this.D=new No,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=l(8,M),this.ia=0,this.pb=l(4,aa),this.Pa=new ko,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new jo),this.Hd=0,this.rb=Array(new Hi),this.sb=0,this.wa=Array(new Gr),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new $i),this.L=this.aa=0,this.gd=c([4,2],Gr),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function ni(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function qi(){var u=new sa;return u!=null&&(u.a=0,u.sc="OK",u.cb=0,u.Xb=0,rs||(rs=sn)),u}function Bt(u,h,x){return u.a==0&&(u.a=h,u.sc=x,u.cb=0),0}function Vi(u,h,x){return 3<=x&&u[h+0]==157&&u[h+1]==1&&u[h+2]==42}function ii(u,h){if(u==null)return 0;if(u.a=0,u.sc="OK",h==null)return Bt(u,2,"null VP8Io passed to VP8GetHeaders()");var x=h.data,w=h.w,I=h.ha;if(4>I)return Bt(u,7,"Truncated header.");var R=x[w+0]|x[w+1]<<8|x[w+2]<<16,O=u.Od;if(O.Rb=!(1&R),O.td=R>>1&7,O.yd=R>>4&1,O.ub=R>>5,3<O.td)return Bt(u,3,"Incorrect keyframe parameters.");if(!O.yd)return Bt(u,4,"Frame not displayable.");w+=3,I-=3;var F=u.Kc;if(O.Rb){if(7>I)return Bt(u,7,"cannot parse picture header");if(!Vi(x,w,I))return Bt(u,3,"Bad code word");F.c=16383&(x[w+4]<<8|x[w+3]),F.Td=x[w+4]>>6,F.i=16383&(x[w+6]<<8|x[w+5]),F.Ud=x[w+6]>>6,w+=7,I-=7,u.za=F.c+15>>4,u.Ub=F.i+15>>4,h.width=F.c,h.height=F.i,h.Da=0,h.j=0,h.v=0,h.va=h.width,h.o=h.height,h.da=0,h.ib=h.width,h.hb=h.height,h.U=h.width,h.T=h.height,o((R=u.Pa).jb,0,255,R.jb.length),t((R=u.Qa)!=null),R.Cb=0,R.Bb=0,R.Fb=1,o(R.Zb,0,0,R.Zb.length),o(R.Lb,0,0,R.Lb)}if(O.ub>I)return Bt(u,7,"bad partition length");ce(R=u.m,x,w,O.ub),w+=O.ub,I-=O.ub,O.Rb&&(F.Ld=ie(R),F.Kd=ie(R)),F=u.Qa;var B,Y=u.Pa;if(t(R!=null),t(F!=null),F.Cb=ie(R),F.Cb){if(F.Bb=ie(R),ie(R)){for(F.Fb=ie(R),B=0;4>B;++B)F.Zb[B]=ie(R)?ae(R,7):0;for(B=0;4>B;++B)F.Lb[B]=ie(R)?ae(R,6):0}if(F.Bb)for(B=0;3>B;++B)Y.jb[B]=ie(R)?pe(R,8):255}else F.Bb=0;if(R.Ka)return Bt(u,3,"cannot parse segment header");if((F=u.ed).zd=ie(R),F.Tb=pe(R,6),F.wb=pe(R,3),F.Pc=ie(R),F.Pc&&ie(R)){for(Y=0;4>Y;++Y)ie(R)&&(F.vd[Y]=ae(R,6));for(Y=0;4>Y;++Y)ie(R)&&(F.od[Y]=ae(R,6))}if(u.L=F.Tb==0?0:F.zd?1:2,R.Ka)return Bt(u,3,"cannot parse filter header");var oe=I;if(I=B=w,w=B+oe,F=oe,u.Xb=(1<<pe(u.m,2))-1,oe<3*(Y=u.Xb))x=7;else{for(B+=3*Y,F-=3*Y,oe=0;oe<Y;++oe){var ge=x[I+0]|x[I+1]<<8|x[I+2]<<16;ge>F&&(ge=F),ce(u.Jc[+oe],x,B,ge),B+=ge,F-=ge,I+=3}ce(u.Jc[+Y],x,B,F),x=B<w?0:5}if(x!=0)return Bt(u,x,"cannot parse partitions");for(x=pe(B=u.m,7),I=ie(B)?ae(B,4):0,w=ie(B)?ae(B,4):0,F=ie(B)?ae(B,4):0,Y=ie(B)?ae(B,4):0,B=ie(B)?ae(B,4):0,oe=u.Qa,ge=0;4>ge;++ge){if(oe.Cb){var G=oe.Zb[ge];oe.Fb||(G+=x)}else{if(0<ge){u.pb[ge]=u.pb[0];continue}G=x}var le=u.pb[ge];le.Sc[0]=b1[rr(G+I,127)],le.Sc[1]=w1[rr(G+0,127)],le.Eb[0]=2*b1[rr(G+w,127)],le.Eb[1]=101581*w1[rr(G+F,127)]>>16,8>le.Eb[1]&&(le.Eb[1]=8),le.Qc[0]=b1[rr(G+Y,117)],le.Qc[1]=w1[rr(G+B,127)],le.lc=G+B}if(!O.Rb)return Bt(u,4,"Not a key frame.");for(ie(R),O=u.Pa,x=0;4>x;++x){for(I=0;8>I;++I)for(w=0;3>w;++w)for(F=0;11>F;++F)Y=xe(R,Zf[x][I][w][F])?pe(R,8):Wf[x][I][w][F],O.Wc[x][I].Yb[w][F]=Y;for(I=0;17>I;++I)O.Xc[x][I]=O.Wc[x][Jf[I]]}return u.kc=ie(R),u.kc&&(u.Bd=pe(R,8)),u.cb=1}function sn(u,h,x,w,I,R,O){var F=h[I].Yb[x];for(x=0;16>I;++I){if(!xe(u,F[x+0]))return I;for(;!xe(u,F[x+1]);)if(F=h[++I].Yb[0],x=0,I==16)return 16;var B=h[I+1].Yb;if(xe(u,F[x+2])){var Y=u,oe=0;if(xe(Y,(G=F)[(ge=x)+3]))if(xe(Y,G[ge+6])){for(F=0,ge=2*(oe=xe(Y,G[ge+8]))+(G=xe(Y,G[ge+9+oe])),oe=0,G=Yf[ge];G[F];++F)oe+=oe+xe(Y,G[F]);oe+=3+(8<<ge)}else xe(Y,G[ge+7])?(oe=7+2*xe(Y,165),oe+=xe(Y,145)):oe=5+xe(Y,159);else oe=xe(Y,G[ge+4])?3+xe(Y,G[ge+5]):2;F=B[2]}else oe=1,F=B[1];B=O+Gf[I],0>(Y=u).b&&fe(Y);var ge,G=Y.b,le=(ge=Y.Ca>>1)-(Y.I>>G)>>31;--Y.b,Y.Ca+=le,Y.Ca|=1,Y.I-=(ge+1&le)<<G,R[B]=((oe^le)-le)*w[(0<I)+0]}return 16}function Ci(u){var h=u.rb[u.sb-1];h.la=0,h.Na=0,o(u.zc,0,0,u.zc.length),u.ja=0}function ln(u,h,x,w,I){I=u[h+x+32*w]+(I>>3),u[h+x+32*w]=-256&I?0>I?0:255:I}function Si(u,h,x,w,I,R){ln(u,h,0,x,w+I),ln(u,h,1,x,w+R),ln(u,h,2,x,w-R),ln(u,h,3,x,w-I)}function Qt(u){return(20091*u>>16)+u}function Yi(u,h,x,w){var I,R=0,O=s(16);for(I=0;4>I;++I){var F=u[h+0]+u[h+8],B=u[h+0]-u[h+8],Y=(35468*u[h+4]>>16)-Qt(u[h+12]),oe=Qt(u[h+4])+(35468*u[h+12]>>16);O[R+0]=F+oe,O[R+1]=B+Y,O[R+2]=B-Y,O[R+3]=F-oe,R+=4,h++}for(I=R=0;4>I;++I)F=(u=O[R+0]+4)+O[R+8],B=u-O[R+8],Y=(35468*O[R+4]>>16)-Qt(O[R+12]),ln(x,w,0,0,F+(oe=Qt(O[R+4])+(35468*O[R+12]>>16))),ln(x,w,1,0,B+Y),ln(x,w,2,0,B-Y),ln(x,w,3,0,F-oe),R++,w+=32}function Io(u,h,x,w){var I=u[h+0]+4,R=35468*u[h+4]>>16,O=Qt(u[h+4]),F=35468*u[h+1]>>16;Si(x,w,0,I+O,u=Qt(u[h+1]),F),Si(x,w,1,I+R,u,F),Si(x,w,2,I-R,u,F),Si(x,w,3,I-O,u,F)}function Lo(u,h,x,w,I){Yi(u,h,x,w),I&&Yi(u,h+16,x,w+4)}function Ba(u,h,x,w){Yo(u,h+0,x,w,1),Yo(u,h+32,x,w+128,1)}function jr(u,h,x,w){var I;for(u=u[h+0]+4,I=0;4>I;++I)for(h=0;4>h;++h)ln(x,w,h,I,u)}function Gi(u,h,x,w){u[h+0]&&Et(u,h+0,x,w),u[h+16]&&Et(u,h+16,x,w+4),u[h+32]&&Et(u,h+32,x,w+128),u[h+48]&&Et(u,h+48,x,w+128+4)}function oi(u,h,x,w){var I,R=s(16);for(I=0;4>I;++I){var O=u[h+0+I]+u[h+12+I],F=u[h+4+I]+u[h+8+I],B=u[h+4+I]-u[h+8+I],Y=u[h+0+I]-u[h+12+I];R[0+I]=O+F,R[8+I]=O-F,R[4+I]=Y+B,R[12+I]=Y-B}for(I=0;4>I;++I)O=(u=R[0+4*I]+3)+R[3+4*I],F=R[1+4*I]+R[2+4*I],B=R[1+4*I]-R[2+4*I],Y=u-R[3+4*I],x[w+0]=O+F>>3,x[w+16]=Y+B>>3,x[w+32]=O-F>>3,x[w+48]=Y-B>>3,w+=64}function cn(u,h,x){var w,I=h-32,R=fn,O=255-u[I-1];for(w=0;w<x;++w){var F,B=R,Y=O+u[h-1];for(F=0;F<x;++F)u[h+F]=B[Y+u[I+F]];h+=32}}function Ai(u,h){cn(u,h,4)}function la(u,h){cn(u,h,8)}function ca(u,h){cn(u,h,16)}function Wi(u,h){var x;for(x=0;16>x;++x)n(u,h+32*x,u,h-32,16)}function Xi(u,h){var x;for(x=16;0<x;--x)o(u,h,u[h-1],16),h+=32}function zn(u,h,x){var w;for(w=0;16>w;++w)o(h,x+32*w,u,16)}function kn(u,h){var x,w=16;for(x=0;16>x;++x)w+=u[h-1+32*x]+u[h+x-32];zn(w>>5,u,h)}function ua(u,h){var x,w=8;for(x=0;16>x;++x)w+=u[h-1+32*x];zn(w>>4,u,h)}function Zi(u,h){var x,w=8;for(x=0;16>x;++x)w+=u[h+x-32];zn(w>>4,u,h)}function Ji(u,h){zn(128,u,h)}function dt(u,h,x){return u+2*h+x+2>>2}function Po(u,h){var x,w=h-32;for(w=new Uint8Array([dt(u[w-1],u[w+0],u[w+1]),dt(u[w+0],u[w+1],u[w+2]),dt(u[w+1],u[w+2],u[w+3]),dt(u[w+2],u[w+3],u[w+4])]),x=0;4>x;++x)n(u,h+32*x,w,0,w.length)}function Ua(u,h){var x=u[h-1],w=u[h-1+32],I=u[h-1+64],R=u[h-1+96];_e(u,h+0,16843009*dt(u[h-1-32],x,w)),_e(u,h+32,16843009*dt(x,w,I)),_e(u,h+64,16843009*dt(w,I,R)),_e(u,h+96,16843009*dt(I,R,R))}function Ha(u,h){var x,w=4;for(x=0;4>x;++x)w+=u[h+x-32]+u[h-1+32*x];for(w>>=3,x=0;4>x;++x)o(u,h+32*x,w,4)}function Ki(u,h){var x=u[h-1+0],w=u[h-1+32],I=u[h-1+64],R=u[h-1-32],O=u[h+0-32],F=u[h+1-32],B=u[h+2-32],Y=u[h+3-32];u[h+0+96]=dt(w,I,u[h-1+96]),u[h+1+96]=u[h+0+64]=dt(x,w,I),u[h+2+96]=u[h+1+64]=u[h+0+32]=dt(R,x,w),u[h+3+96]=u[h+2+64]=u[h+1+32]=u[h+0+0]=dt(O,R,x),u[h+3+64]=u[h+2+32]=u[h+1+0]=dt(F,O,R),u[h+3+32]=u[h+2+0]=dt(B,F,O),u[h+3+0]=dt(Y,B,F)}function Bn(u,h){var x=u[h+1-32],w=u[h+2-32],I=u[h+3-32],R=u[h+4-32],O=u[h+5-32],F=u[h+6-32],B=u[h+7-32];u[h+0+0]=dt(u[h+0-32],x,w),u[h+1+0]=u[h+0+32]=dt(x,w,I),u[h+2+0]=u[h+1+32]=u[h+0+64]=dt(w,I,R),u[h+3+0]=u[h+2+32]=u[h+1+64]=u[h+0+96]=dt(I,R,O),u[h+3+32]=u[h+2+64]=u[h+1+96]=dt(R,O,F),u[h+3+64]=u[h+2+96]=dt(O,F,B),u[h+3+96]=dt(F,B,B)}function un(u,h){var x=u[h-1+0],w=u[h-1+32],I=u[h-1+64],R=u[h-1-32],O=u[h+0-32],F=u[h+1-32],B=u[h+2-32],Y=u[h+3-32];u[h+0+0]=u[h+1+64]=R+O+1>>1,u[h+1+0]=u[h+2+64]=O+F+1>>1,u[h+2+0]=u[h+3+64]=F+B+1>>1,u[h+3+0]=B+Y+1>>1,u[h+0+96]=dt(I,w,x),u[h+0+64]=dt(w,x,R),u[h+0+32]=u[h+1+96]=dt(x,R,O),u[h+1+32]=u[h+2+96]=dt(R,O,F),u[h+2+32]=u[h+3+96]=dt(O,F,B),u[h+3+32]=dt(F,B,Y)}function $a(u,h){var x=u[h+0-32],w=u[h+1-32],I=u[h+2-32],R=u[h+3-32],O=u[h+4-32],F=u[h+5-32],B=u[h+6-32],Y=u[h+7-32];u[h+0+0]=x+w+1>>1,u[h+1+0]=u[h+0+64]=w+I+1>>1,u[h+2+0]=u[h+1+64]=I+R+1>>1,u[h+3+0]=u[h+2+64]=R+O+1>>1,u[h+0+32]=dt(x,w,I),u[h+1+32]=u[h+0+96]=dt(w,I,R),u[h+2+32]=u[h+1+96]=dt(I,R,O),u[h+3+32]=u[h+2+96]=dt(R,O,F),u[h+3+64]=dt(O,F,B),u[h+3+96]=dt(F,B,Y)}function da(u,h){var x=u[h-1+0],w=u[h-1+32],I=u[h-1+64],R=u[h-1+96];u[h+0+0]=x+w+1>>1,u[h+2+0]=u[h+0+32]=w+I+1>>1,u[h+2+32]=u[h+0+64]=I+R+1>>1,u[h+1+0]=dt(x,w,I),u[h+3+0]=u[h+1+32]=dt(w,I,R),u[h+3+32]=u[h+1+64]=dt(I,R,R),u[h+3+64]=u[h+2+64]=u[h+0+96]=u[h+1+96]=u[h+2+96]=u[h+3+96]=R}function Qi(u,h){var x=u[h-1+0],w=u[h-1+32],I=u[h-1+64],R=u[h-1+96],O=u[h-1-32],F=u[h+0-32],B=u[h+1-32],Y=u[h+2-32];u[h+0+0]=u[h+2+32]=x+O+1>>1,u[h+0+32]=u[h+2+64]=w+x+1>>1,u[h+0+64]=u[h+2+96]=I+w+1>>1,u[h+0+96]=R+I+1>>1,u[h+3+0]=dt(F,B,Y),u[h+2+0]=dt(O,F,B),u[h+1+0]=u[h+3+32]=dt(x,O,F),u[h+1+32]=u[h+3+64]=dt(w,x,O),u[h+1+64]=u[h+3+96]=dt(I,w,x),u[h+1+96]=dt(R,I,w)}function Un(u,h){var x;for(x=0;8>x;++x)n(u,h+32*x,u,h-32,8)}function ai(u,h){var x;for(x=0;8>x;++x)o(u,h,u[h-1],8),h+=32}function eo(u,h,x){var w;for(w=0;8>w;++w)o(h,x+32*w,u,8)}function ki(u,h){var x,w=8;for(x=0;8>x;++x)w+=u[h+x-32]+u[h-1+32*x];eo(w>>4,u,h)}function qa(u,h){var x,w=4;for(x=0;8>x;++x)w+=u[h+x-32];eo(w>>3,u,h)}function To(u,h){var x,w=4;for(x=0;8>x;++x)w+=u[h-1+32*x];eo(w>>3,u,h)}function Eo(u,h){eo(128,u,h)}function si(u,h,x){var w=u[h-x],I=u[h+0],R=3*(I-w)+p1[1020+u[h-2*x]-u[h+x]],O=Us[112+(R+4>>3)];u[h-x]=fn[255+w+Us[112+(R+3>>3)]],u[h+0]=fn[255+I-O]}function ue(u,h,x,w){var I=u[h+0],R=u[h+x];return In[255+u[h-2*x]-u[h-x]]>w||In[255+R-I]>w}function pt(u,h,x,w){return 4*In[255+u[h-x]-u[h+0]]+In[255+u[h-2*x]-u[h+x]]<=w}function Gt(u,h,x,w,I){var R=u[h-3*x],O=u[h-2*x],F=u[h-x],B=u[h+0],Y=u[h+x],oe=u[h+2*x],ge=u[h+3*x];return 4*In[255+F-B]+In[255+O-Y]>w?0:In[255+u[h-4*x]-R]<=I&&In[255+R-O]<=I&&In[255+O-F]<=I&&In[255+ge-oe]<=I&&In[255+oe-Y]<=I&&In[255+Y-B]<=I}function Or(u,h,x,w){var I=2*w+1;for(w=0;16>w;++w)pt(u,h+w,x,I)&&si(u,h+w,x)}function ar(u,h,x,w){var I=2*w+1;for(w=0;16>w;++w)pt(u,h+w*x,1,I)&&si(u,h+w*x,1)}function to(u,h,x,w){var I;for(I=3;0<I;--I)Or(u,h+=4*x,x,w)}function Do(u,h,x,w){var I;for(I=3;0<I;--I)ar(u,h+=4,x,w)}function Hn(u,h,x,w,I,R,O,F){for(R=2*R+1;0<I--;){if(Gt(u,h,x,R,O))if(ue(u,h,x,F))si(u,h,x);else{var B=u,Y=h,oe=x,ge=B[Y-2*oe],G=B[Y-oe],le=B[Y+0],he=B[Y+oe],Ce=B[Y+2*oe],me=27*(ke=p1[1020+3*(le-G)+p1[1020+ge-he]])+63>>7,Ae=18*ke+63>>7,ke=9*ke+63>>7;B[Y-3*oe]=fn[255+B[Y-3*oe]+ke],B[Y-2*oe]=fn[255+ge+Ae],B[Y-oe]=fn[255+G+me],B[Y+0]=fn[255+le-me],B[Y+oe]=fn[255+he-Ae],B[Y+2*oe]=fn[255+Ce-ke]}h+=w}}function Wt(u,h,x,w,I,R,O,F){for(R=2*R+1;0<I--;){if(Gt(u,h,x,R,O))if(ue(u,h,x,F))si(u,h,x);else{var B=u,Y=h,oe=x,ge=B[Y-oe],G=B[Y+0],le=B[Y+oe],he=Us[112+(4+(Ce=3*(G-ge))>>3)],Ce=Us[112+(Ce+3>>3)],me=he+1>>1;B[Y-2*oe]=fn[255+B[Y-2*oe]+me],B[Y-oe]=fn[255+ge+Ce],B[Y+0]=fn[255+G-he],B[Y+oe]=fn[255+le-me]}h+=w}}function Mi(u,h,x,w,I,R){Hn(u,h,x,1,16,w,I,R)}function ha(u,h,x,w,I,R){Hn(u,h,1,x,16,w,I,R)}function li(u,h,x,w,I,R){var O;for(O=3;0<O;--O)Wt(u,h+=4*x,x,1,16,w,I,R)}function Ro(u,h,x,w,I,R){var O;for(O=3;0<O;--O)Wt(u,h+=4,1,x,16,w,I,R)}function g(u,h,x,w,I,R,O,F){Hn(u,h,I,1,8,R,O,F),Hn(x,w,I,1,8,R,O,F)}function j(u,h,x,w,I,R,O,F){Hn(u,h,1,I,8,R,O,F),Hn(x,w,1,I,8,R,O,F)}function V(u,h,x,w,I,R,O,F){Wt(u,h+4*I,I,1,8,R,O,F),Wt(x,w+4*I,I,1,8,R,O,F)}function te(u,h,x,w,I,R,O,F){Wt(u,h+4,1,I,8,R,O,F),Wt(x,w+4,1,I,8,R,O,F)}function de(){this.ba=new jt,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new _t,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function Se(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Me(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Ue(){this.ua=0,this.Wa=new Je,this.vb=new Je,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new ne,this.yc=new q}function He(){this.xb=this.a=0,this.l=new ni,this.ca=new jt,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new z,this.Pb=0,this.wd=new z,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Ue,this.ab=0,this.gc=l(4,Me),this.Oc=0}function st(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new ni,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function mt(u,h,x,w,I,R,O){for(u=u==null?0:u[h+0],h=0;h<O;++h)I[R+h]=u+x[w+h]&255,u=I[R+h]}function Pt(u,h,x,w,I,R,O){var F;if(u==null)mt(null,null,x,w,I,R,O);else for(F=0;F<O;++F)I[R+F]=u[h+F]+x[w+F]&255}function er(u,h,x,w,I,R,O){if(u==null)mt(null,null,x,w,I,R,O);else{var F,B=u[h+0],Y=B,oe=B;for(F=0;F<O;++F)Y=oe+(B=u[h+F])-Y,oe=x[w+F]+(-256&Y?0>Y?0:255:Y)&255,Y=B,I[R+F]=oe}}function vr(u,h,x,w){var I=h.width,R=h.o;if(t(u!=null&&h!=null),0>x||0>=w||x+w>R)return null;if(!u.Cc){if(u.ga==null){var O;if(u.ga=new st,(O=u.ga==null)||(O=h.width*h.o,t(u.Gb.length==0),u.Gb=s(O),u.Uc=0,u.Gb==null?O=0:(u.mb=u.Gb,u.nb=u.Uc,u.rc=null,O=1),O=!O),!O){O=u.ga;var F=u.Fa,B=u.P,Y=u.qc,oe=u.mb,ge=u.nb,G=B+1,le=Y-1,he=O.l;if(t(F!=null&&oe!=null&&h!=null),ho[0]=null,ho[1]=mt,ho[2]=Pt,ho[3]=er,O.ca=oe,O.tb=ge,O.c=h.width,O.i=h.height,t(0<O.c&&0<O.i),1>=Y)h=0;else if(O.$a=3&F[B+0],O.Z=F[B+0]>>2&3,O.Lc=F[B+0]>>4&3,B=F[B+0]>>6&3,0>O.$a||1<O.$a||4<=O.Z||1<O.Lc||B)h=0;else if(he.put=tt,he.ac=Vr,he.bc=Mr,he.ma=O,he.width=h.width,he.height=h.height,he.Da=h.Da,he.v=h.v,he.va=h.va,he.j=h.j,he.o=h.o,O.$a)e:{t(O.$a==1),h=wi();t:for(;;){if(h==null){h=0;break e}if(t(O!=null),O.mc=h,h.c=O.c,h.i=O.i,h.l=O.l,h.l.ma=O,h.l.width=O.c,h.l.height=O.i,h.a=0,ve(h.m,F,G,le),!Rr(O.c,O.i,1,h,null)||(h.ab==1&&h.gc[0].hc==3&&Ar(h.s)?(O.ic=1,F=h.c*h.i,h.Ta=null,h.Ua=0,h.V=s(F),h.Ba=0,h.V==null?(h.a=1,h=0):h=1):(O.ic=0,h=An(h,O.c)),!h))break t;h=1;break e}O.mc=null,h=0}else h=le>=O.c*O.i;O=!h}if(O)return null;u.ga.Lc!=1?u.Ga=0:w=R-x}t(u.ga!=null),t(x+w<=R);e:{if(h=(F=u.ga).c,R=F.l.o,F.$a==0){if(G=u.rc,le=u.Vc,he=u.Fa,B=u.P+1+x*h,Y=u.mb,oe=u.nb+x*h,t(B<=u.P+u.qc),F.Z!=0)for(t(ho[F.Z]!=null),O=0;O<w;++O)ho[F.Z](G,le,he,B,Y,oe,h),G=Y,le=oe,oe+=h,B+=h;else for(O=0;O<w;++O)n(Y,oe,he,B,h),G=Y,le=oe,oe+=h,B+=h;u.rc=G,u.Vc=le}else{if(t(F.mc!=null),h=x+w,t((O=F.mc)!=null),t(h<=O.i),O.C>=h)h=1;else if(F.ic||Mn(),F.ic){F=O.V,G=O.Ba,le=O.c;var Ce=O.i,me=(he=1,B=O.$/le,Y=O.$%le,oe=O.m,ge=O.s,O.$),Ae=le*Ce,ke=le*h,Ie=ge.wc,Ne=me<ke?xr(ge,Y,B):null;t(me<=Ae),t(h<=Ce),t(Ar(ge));t:for(;;){for(;!oe.h&&me<ke;){if(Y&Ie||(Ne=xr(ge,Y,B)),t(Ne!=null),se(oe),256>(Ce=qt(Ne.G[0],Ne.H[0],oe)))F[G+me]=Ce,++me,++Y>=le&&(Y=0,++B<=h&&!(B%16)&&an(O,B));else{if(!(280>Ce)){he=0;break t}Ce=Nr(Ce-256,oe);var Ke,$e=qt(Ne.G[4],Ne.H[4],oe);if(se(oe),!(me>=($e=Dr(le,$e=Nr($e,oe)))&&Ae-me>=Ce)){he=0;break t}for(Ke=0;Ke<Ce;++Ke)F[G+me+Ke]=F[G+me+Ke-$e];for(me+=Ce,Y+=Ce;Y>=le;)Y-=le,++B<=h&&!(B%16)&&an(O,B);me<ke&&Y&Ie&&(Ne=xr(ge,Y,B))}t(oe.h==Q(oe))}an(O,B>h?h:B);break t}!he||oe.h&&me<Ae?(he=0,O.a=oe.h?5:3):O.$=me,h=he}else h=Kr(O,O.V,O.Ba,O.c,O.i,h,ti);if(!h){w=0;break e}}x+w>=R&&(u.Cc=1),w=1}if(!w)return null;if(u.Cc&&((w=u.ga)!=null&&(w.mc=null),u.ga=null,0<u.Ga))return alert("todo:WebPDequantizeLevels"),null}return u.nb+x*I}function Vt(u,h,x,w,I,R){for(;0<I--;){var O,F=u,B=h+(x?1:0),Y=u,oe=h+(x?0:3);for(O=0;O<w;++O){var ge=Y[oe+4*O];ge!=255&&(ge*=32897,F[B+4*O+0]=F[B+4*O+0]*ge>>23,F[B+4*O+1]=F[B+4*O+1]*ge>>23,F[B+4*O+2]=F[B+4*O+2]*ge>>23)}h+=R}}function wr(u,h,x,w,I){for(;0<w--;){var R;for(R=0;R<x;++R){var O=u[h+2*R+0],F=15&(Y=u[h+2*R+1]),B=4369*F,Y=(240&Y|Y>>4)*B>>16;u[h+2*R+0]=(240&O|O>>4)*B>>16&240|(15&O|O<<4)*B>>16>>4&15,u[h+2*R+1]=240&Y|F}h+=I}}function br(u,h,x,w,I,R,O,F){var B,Y,oe=255;for(Y=0;Y<I;++Y){for(B=0;B<w;++B){var ge=u[h+B];R[O+4*B]=ge,oe&=ge}h+=x,O+=F}return oe!=255}function Ir(u,h,x,w,I){var R;for(R=0;R<I;++R)x[w+R]=u[h+R]>>8}function Mn(){ts=Vt,M0=wr,N0=br,j0=Ir}function Qr(u,h,x){E[u]=function(w,I,R,O,F,B,Y,oe,ge,G,le,he,Ce,me,Ae,ke,Ie){var Ne,Ke=Ie-1>>1,$e=F[B+0]|Y[oe+0]<<16,bt=ge[G+0]|le[he+0]<<16;t(w!=null);var We=3*$e+bt+131074>>2;for(h(w[I+0],255&We,We>>16,Ce,me),R!=null&&(We=3*bt+$e+131074>>2,h(R[O+0],255&We,We>>16,Ae,ke)),Ne=1;Ne<=Ke;++Ne){var St=F[B+Ne]|Y[oe+Ne]<<16,_r=ge[G+Ne]|le[he+Ne]<<16,wt=$e+St+bt+_r+524296,Xe=wt+2*(St+bt)>>3;We=Xe+$e>>1,$e=(wt=wt+2*($e+_r)>>3)+St>>1,h(w[I+2*Ne-1],255&We,We>>16,Ce,me+(2*Ne-1)*x),h(w[I+2*Ne-0],255&$e,$e>>16,Ce,me+(2*Ne-0)*x),R!=null&&(We=wt+bt>>1,$e=Xe+_r>>1,h(R[O+2*Ne-1],255&We,We>>16,Ae,ke+(2*Ne-1)*x),h(R[O+2*Ne+0],255&$e,$e>>16,Ae,ke+(2*Ne+0)*x)),$e=St,bt=_r}1&Ie||(We=3*$e+bt+131074>>2,h(w[I+Ie-1],255&We,We>>16,Ce,me+(Ie-1)*x),R!=null&&(We=3*bt+$e+131074>>2,h(R[O+Ie-1],255&We,We>>16,Ae,ke+(Ie-1)*x)))}}function Os(){Ln[Hs]=Qf,Ln[$s]=B0,Ln[D0]=e5,Ln[qs]=U0,Ln[Vs]=H0,Ln[m1]=$0,Ln[R0]=t5,Ln[g1]=B0,Ln[x1]=U0,Ln[Ys]=H0,Ln[v1]=$0}function fa(u){return u&-16384?0>u?0:255:u>>r5}function Oo(u,h){return fa((19077*u>>8)+(26149*h>>8)-14234)}function ro(u,h,x){return fa((19077*u>>8)-(6419*h>>8)-(13320*x>>8)+8708)}function Fo(u,h){return fa((19077*u>>8)+(33050*h>>8)-17685)}function zo(u,h,x,w,I){w[I+0]=Oo(u,x),w[I+1]=ro(u,h,x),w[I+2]=Fo(u,h)}function Bo(u,h,x,w,I){w[I+0]=Fo(u,h),w[I+1]=ro(u,h,x),w[I+2]=Oo(u,x)}function Fr(u,h,x,w,I){var R=ro(u,h,x);h=R<<3&224|Fo(u,h)>>3,w[I+0]=248&Oo(u,x)|R>>5,w[I+1]=h}function Uo(u,h,x,w,I){var R=240&Fo(u,h)|15;w[I+0]=240&Oo(u,x)|ro(u,h,x)>>4,w[I+1]=R}function Ho(u,h,x,w,I){w[I+0]=255,zo(u,h,x,w,I+1)}function Va(u,h,x,w,I){Bo(u,h,x,w,I),w[I+3]=255}function Ya(u,h,x,w,I){zo(u,h,x,w,I),w[I+3]=255}function rr(u,h){return 0>u?0:u>h?h:u}function Ni(u,h,x){E[u]=function(w,I,R,O,F,B,Y,oe,ge){for(var G=oe+(-2&ge)*x;oe!=G;)h(w[I+0],R[O+0],F[B+0],Y,oe),h(w[I+1],R[O+0],F[B+0],Y,oe+x),I+=2,++O,++B,oe+=2*x;1&ge&&h(w[I+0],R[O+0],F[B+0],Y,oe)}}function pa(u,h,x){return x==0?u==0?h==0?6:5:h==0?4:0:x}function Fs(u,h,x,w,I){switch(u>>>30){case 3:Yo(h,x,w,I,0);break;case 2:jn(h,x,w,I);break;case 1:Et(h,x,w,I)}}function Nn(u,h){var x,w,I=h.M,R=h.Nb,O=u.oc,F=u.pc+40,B=u.oc,Y=u.pc+584,oe=u.oc,ge=u.pc+600;for(x=0;16>x;++x)O[F+32*x-1]=129;for(x=0;8>x;++x)B[Y+32*x-1]=129,oe[ge+32*x-1]=129;for(0<I?O[F-1-32]=B[Y-1-32]=oe[ge-1-32]=129:(o(O,F-32-1,127,21),o(B,Y-32-1,127,9),o(oe,ge-32-1,127,9)),w=0;w<u.za;++w){var G=h.ya[h.aa+w];if(0<w){for(x=-1;16>x;++x)n(O,F+32*x-4,O,F+32*x+12,4);for(x=-1;8>x;++x)n(B,Y+32*x-4,B,Y+32*x+4,4),n(oe,ge+32*x-4,oe,ge+32*x+4,4)}var le=u.Gd,he=u.Hd+w,Ce=G.ad,me=G.Hc;if(0<I&&(n(O,F-32,le[he].y,0,16),n(B,Y-32,le[he].f,0,8),n(oe,ge-32,le[he].ea,0,8)),G.Za){var Ae=O,ke=F-32+16;for(0<I&&(w>=u.za-1?o(Ae,ke,le[he].y[15],4):n(Ae,ke,le[he+1].y,0,4)),x=0;4>x;x++)Ae[ke+128+x]=Ae[ke+256+x]=Ae[ke+384+x]=Ae[ke+0+x];for(x=0;16>x;++x,me<<=2)Ae=O,ke=F+V0[x],$n[G.Ob[x]](Ae,ke),Fs(me,Ce,16*+x,Ae,ke)}else if(Ae=pa(w,I,G.Ob[0]),uo[Ae](O,F),me!=0)for(x=0;16>x;++x,me<<=2)Fs(me,Ce,16*+x,O,F+V0[x]);for(x=G.Gc,Ae=pa(w,I,G.Dd),Li[Ae](B,Y),Li[Ae](oe,ge),me=Ce,Ae=B,ke=Y,255&(G=0|x)&&(170&G?di(me,256,Ae,ke):Ut(me,256,Ae,ke)),G=oe,me=ge,255&(x>>=8)&&(170&x?di(Ce,320,G,me):Ut(Ce,320,G,me)),I<u.Ub-1&&(n(le[he].y,0,O,F+480,16),n(le[he].f,0,B,Y+224,8),n(le[he].ea,0,oe,ge+224,8)),x=8*R*u.B,le=u.sa,he=u.ta+16*w+16*R*u.R,Ce=u.qa,G=u.ra+8*w+x,me=u.Ha,Ae=u.Ia+8*w+x,x=0;16>x;++x)n(le,he+x*u.R,O,F+32*x,16);for(x=0;8>x;++x)n(Ce,G+x*u.B,B,Y+32*x,8),n(me,Ae+x*u.B,oe,ge+32*x,8)}}function $o(u,h,x,w,I,R,O,F,B){var Y=[0],oe=[0],ge=0,G=B!=null?B.kd:0,le=B??new Se;if(u==null||12>x)return 7;le.data=u,le.w=h,le.ha=x,h=[h],x=[x],le.gb=[le.gb];e:{var he=h,Ce=x,me=le.gb;if(t(u!=null),t(Ce!=null),t(me!=null),me[0]=0,12<=Ce[0]&&!r(u,he[0],"RIFF")){if(r(u,he[0]+8,"WEBP")){me=3;break e}var Ae=be(u,he[0]+4);if(12>Ae||4294967286<Ae){me=3;break e}if(G&&Ae>Ce[0]-8){me=7;break e}me[0]=Ae,he[0]+=12,Ce[0]-=12}me=0}if(me!=0)return me;for(Ae=0<le.gb[0],x=x[0];;){e:{var ke=u;Ce=h,me=x;var Ie=Y,Ne=oe,Ke=he=[0];if((We=ge=[ge])[0]=0,8>me[0])me=7;else{if(!r(ke,Ce[0],"VP8X")){if(be(ke,Ce[0]+4)!=10){me=3;break e}if(18>me[0]){me=7;break e}var $e=be(ke,Ce[0]+8),bt=1+Pe(ke,Ce[0]+12);if(2147483648<=bt*(ke=1+Pe(ke,Ce[0]+15))){me=3;break e}Ke!=null&&(Ke[0]=$e),Ie!=null&&(Ie[0]=bt),Ne!=null&&(Ne[0]=ke),Ce[0]+=18,me[0]-=18,We[0]=1}me=0}}if(ge=ge[0],he=he[0],me!=0)return me;if(Ce=!!(2&he),!Ae&&ge)return 3;if(R!=null&&(R[0]=!!(16&he)),O!=null&&(O[0]=Ce),F!=null&&(F[0]=0),O=Y[0],he=oe[0],ge&&Ce&&B==null){me=0;break}if(4>x){me=7;break}if(Ae&&ge||!Ae&&!ge&&!r(u,h[0],"ALPH")){x=[x],le.na=[le.na],le.P=[le.P],le.Sa=[le.Sa];e:{$e=u,me=h,Ae=x;var We=le.gb;Ie=le.na,Ne=le.P,Ke=le.Sa,bt=22,t($e!=null),t(Ae!=null),ke=me[0];var St=Ae[0];for(t(Ie!=null),t(Ke!=null),Ie[0]=null,Ne[0]=null,Ke[0]=0;;){if(me[0]=ke,Ae[0]=St,8>St){me=7;break e}var _r=be($e,ke+4);if(4294967286<_r){me=3;break e}var wt=8+_r+1&-2;if(bt+=wt,0<We&&bt>We){me=3;break e}if(!r($e,ke,"VP8 ")||!r($e,ke,"VP8L")){me=0;break e}if(St[0]<wt){me=7;break e}r($e,ke,"ALPH")||(Ie[0]=$e,Ne[0]=ke+8,Ke[0]=_r),ke+=wt,St-=wt}}if(x=x[0],le.na=le.na[0],le.P=le.P[0],le.Sa=le.Sa[0],me!=0)break}x=[x],le.Ja=[le.Ja],le.xa=[le.xa];e:if(We=u,me=h,Ae=x,Ie=le.gb[0],Ne=le.Ja,Ke=le.xa,$e=me[0],ke=!r(We,$e,"VP8 "),bt=!r(We,$e,"VP8L"),t(We!=null),t(Ae!=null),t(Ne!=null),t(Ke!=null),8>Ae[0])me=7;else{if(ke||bt){if(We=be(We,$e+4),12<=Ie&&We>Ie-12){me=3;break e}if(G&&We>Ae[0]-8){me=7;break e}Ne[0]=We,me[0]+=8,Ae[0]-=8,Ke[0]=bt}else Ke[0]=5<=Ae[0]&&We[$e+0]==47&&!(We[$e+4]>>5),Ne[0]=Ae[0];me=0}if(x=x[0],le.Ja=le.Ja[0],le.xa=le.xa[0],h=h[0],me!=0)break;if(4294967286<le.Ja)return 3;if(F==null||Ce||(F[0]=le.xa?2:1),O=[O],he=[he],le.xa){if(5>x){me=7;break}F=O,G=he,Ce=R,u==null||5>x?u=0:5<=x&&u[h+0]==47&&!(u[h+4]>>5)?(Ae=[0],We=[0],Ie=[0],ve(Ne=new z,u,h,x),on(Ne,Ae,We,Ie)?(F!=null&&(F[0]=Ae[0]),G!=null&&(G[0]=We[0]),Ce!=null&&(Ce[0]=Ie[0]),u=1):u=0):u=0}else{if(10>x){me=7;break}F=he,u==null||10>x||!Vi(u,h+3,x-3)?u=0:(G=u[h+0]|u[h+1]<<8|u[h+2]<<16,Ce=16383&(u[h+7]<<8|u[h+6]),u=16383&(u[h+9]<<8|u[h+8]),1&G||3<(G>>1&7)||!(G>>4&1)||G>>5>=le.Ja||!Ce||!u?u=0:(O&&(O[0]=Ce),F&&(F[0]=u),u=1))}if(!u||(O=O[0],he=he[0],ge&&(Y[0]!=O||oe[0]!=he)))return 3;B!=null&&(B[0]=le,B.offset=h-B.w,t(4294967286>h-B.w),t(B.offset==B.ha-x));break}return me==0||me==7&&ge&&B==null?(R!=null&&(R[0]|=le.na!=null&&0<le.na.length),w!=null&&(w[0]=O),I!=null&&(I[0]=he),0):me}function Ga(u,h,x){var w=h.width,I=h.height,R=0,O=0,F=w,B=I;if(h.Da=u!=null&&0<u.Da,h.Da&&(F=u.cd,B=u.bd,R=u.v,O=u.j,11>x||(R&=-2,O&=-2),0>R||0>O||0>=F||0>=B||R+F>w||O+B>I))return 0;if(h.v=R,h.j=O,h.va=R+F,h.o=O+B,h.U=F,h.T=B,h.da=u!=null&&0<u.da,h.da){if(!Ge(F,B,x=[u.ib],R=[u.hb]))return 0;h.ib=x[0],h.hb=R[0]}return h.ob=u!=null&&u.ob,h.Kb=u==null||!u.Sd,h.da&&(h.ob=h.ib<3*w/4&&h.hb<3*I/4,h.Kb=0),1}function Wa(u){if(u==null)return 2;if(11>u.S){var h=u.f.RGBA;h.fb+=(u.height-1)*h.A,h.A=-h.A}else h=u.f.kb,u=u.height,h.O+=(u-1)*h.fa,h.fa=-h.fa,h.N+=(u-1>>1)*h.Ab,h.Ab=-h.Ab,h.W+=(u-1>>1)*h.Db,h.Db=-h.Db,h.F!=null&&(h.J+=(u-1)*h.lb,h.lb=-h.lb);return 0}function no(u,h,x,w){if(w==null||0>=u||0>=h)return 2;if(x!=null){if(x.Da){var I=x.cd,R=x.bd,O=-2&x.v,F=-2&x.j;if(0>O||0>F||0>=I||0>=R||O+I>u||F+R>h)return 2;u=I,h=R}if(x.da){if(!Ge(u,h,I=[x.ib],R=[x.hb]))return 2;u=I[0],h=R[0]}}w.width=u,w.height=h;e:{var B=w.width,Y=w.height;if(u=w.S,0>=B||0>=Y||!(u>=Hs&&13>u))u=2;else{if(0>=w.Rd&&w.sd==null){O=R=I=h=0;var oe=(F=B*Y0[u])*Y;if(11>u||(R=(Y+1)/2*(h=(B+1)/2),u==12&&(O=(I=B)*Y)),(Y=s(oe+2*R+O))==null){u=1;break e}w.sd=Y,11>u?((B=w.f.RGBA).eb=Y,B.fb=0,B.A=F,B.size=oe):((B=w.f.kb).y=Y,B.O=0,B.fa=F,B.Fd=oe,B.f=Y,B.N=0+oe,B.Ab=h,B.Cd=R,B.ea=Y,B.W=0+oe+R,B.Db=h,B.Ed=R,u==12&&(B.F=Y,B.J=0+oe+2*R),B.Tc=O,B.lb=I)}if(h=1,I=w.S,R=w.width,O=w.height,I>=Hs&&13>I)if(11>I)u=w.f.RGBA,h&=(F=Math.abs(u.A))*(O-1)+R<=u.size,h&=F>=R*Y0[I],h&=u.eb!=null;else{u=w.f.kb,F=(R+1)/2,oe=(O+1)/2,B=Math.abs(u.fa),Y=Math.abs(u.Ab);var ge=Math.abs(u.Db),G=Math.abs(u.lb),le=G*(O-1)+R;h&=B*(O-1)+R<=u.Fd,h&=Y*(oe-1)+F<=u.Cd,h=(h&=ge*(oe-1)+F<=u.Ed)&B>=R&Y>=F&ge>=F,h&=u.y!=null,h&=u.f!=null,h&=u.ea!=null,I==12&&(h&=G>=R,h&=le<=u.Tc,h&=u.F!=null)}else h=0;u=h?0:2}}return u!=0||x!=null&&x.fd&&(u=Wa(w)),u}var qo=64,dn=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],hn=24,io=32,ji=8,oo=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Ee("Predictor0","PredictorAdd0"),E.Predictor0=function(){return 4278190080},E.Predictor1=function(u){return u},E.Predictor2=function(u,h,x){return h[x+0]},E.Predictor3=function(u,h,x){return h[x+1]},E.Predictor4=function(u,h,x){return h[x-1]},E.Predictor5=function(u,h,x){return Be(Be(u,h[x+1]),h[x+0])},E.Predictor6=function(u,h,x){return Be(u,h[x-1])},E.Predictor7=function(u,h,x){return Be(u,h[x+0])},E.Predictor8=function(u,h,x){return Be(h[x-1],h[x+0])},E.Predictor9=function(u,h,x){return Be(h[x+0],h[x+1])},E.Predictor10=function(u,h,x){return Be(Be(u,h[x-1]),Be(h[x+0],h[x+1]))},E.Predictor11=function(u,h,x){var w=h[x+0];return 0>=ot(w>>24&255,u>>24&255,(h=h[x-1])>>24&255)+ot(w>>16&255,u>>16&255,h>>16&255)+ot(w>>8&255,u>>8&255,h>>8&255)+ot(255&w,255&u,255&h)?w:u},E.Predictor12=function(u,h,x){var w=h[x+0];return(yt((u>>24&255)+(w>>24&255)-((h=h[x-1])>>24&255))<<24|yt((u>>16&255)+(w>>16&255)-(h>>16&255))<<16|yt((u>>8&255)+(w>>8&255)-(h>>8&255))<<8|yt((255&u)+(255&w)-(255&h)))>>>0},E.Predictor13=function(u,h,x){var w=h[x-1];return(it((u=Be(u,h[x+0]))>>24&255,w>>24&255)<<24|it(u>>16&255,w>>16&255)<<16|it(u>>8&255,w>>8&255)<<8|it(255&u,255&w))>>>0};var Xa=E.PredictorAdd0;E.PredictorAdd1=At,Ee("Predictor2","PredictorAdd2"),Ee("Predictor3","PredictorAdd3"),Ee("Predictor4","PredictorAdd4"),Ee("Predictor5","PredictorAdd5"),Ee("Predictor6","PredictorAdd6"),Ee("Predictor7","PredictorAdd7"),Ee("Predictor8","PredictorAdd8"),Ee("Predictor9","PredictorAdd9"),Ee("Predictor10","PredictorAdd10"),Ee("Predictor11","PredictorAdd11"),Ee("Predictor12","PredictorAdd12"),Ee("Predictor13","PredictorAdd13");var ma=E.PredictorAdd2;ze("ColorIndexInverseTransform","MapARGB","32b",function(u){return u>>8&255},function(u){return u}),ze("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(u){return u},function(u){return u>>8&255});var sr,zs=E.ColorIndexInverseTransform,ci=E.MapARGB,ui=E.VP8LColorIndexInverseTransformAlpha,Za=E.MapAlpha,Ja=E.VP8LPredictorsAdd=[];Ja.length=16,(E.VP8LPredictors=[]).length=16,(E.VP8LPredictorsAdd_C=[]).length=16,(E.VP8LPredictors_C=[]).length=16;var Ka,Qa,ao,so,lo,Vo,co,Yo,jn,di,Et,Ut,lr,yr,Ii,es,ga,Bs,y0,_0,C0,S0,A0,k0,ts,M0,N0,j0,I0=s(511),L0=s(2041),P0=s(225),T0=s(767),E0=0,p1=L0,Us=P0,fn=T0,In=I0,Hs=0,$s=1,D0=2,qs=3,Vs=4,m1=5,R0=6,g1=7,x1=8,Ys=9,v1=10,zf=[2,3,7],Bf=[3,3,11],O0=[280,256,256,256,40],Uf=[0,1,1,1,0],Hf=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],$f=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],qf=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],Vf=8,b1=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],w1=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],rs=null,Yf=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],Gf=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],F0=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],Wf=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],Xf=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],Zf=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],Jf=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],uo=[],$n=[],Li=[],Kf=1,z0=2,ho=[],Ln=[];Qr("UpsampleRgbLinePair",zo,3),Qr("UpsampleBgrLinePair",Bo,3),Qr("UpsampleRgbaLinePair",Ya,4),Qr("UpsampleBgraLinePair",Va,4),Qr("UpsampleArgbLinePair",Ho,4),Qr("UpsampleRgba4444LinePair",Uo,2),Qr("UpsampleRgb565LinePair",Fr,2);var Qf=E.UpsampleRgbLinePair,e5=E.UpsampleBgrLinePair,B0=E.UpsampleRgbaLinePair,U0=E.UpsampleBgraLinePair,H0=E.UpsampleArgbLinePair,$0=E.UpsampleRgba4444LinePair,t5=E.UpsampleRgb565LinePair,Gs=16,Ws=1<<Gs-1,ns=-227,y1=482,r5=6,q0=0,n5=s(256),i5=s(256),o5=s(256),a5=s(256),s5=s(y1-ns),l5=s(y1-ns);Ni("YuvToRgbRow",zo,3),Ni("YuvToBgrRow",Bo,3),Ni("YuvToRgbaRow",Ya,4),Ni("YuvToBgraRow",Va,4),Ni("YuvToArgbRow",Ho,4),Ni("YuvToRgba4444Row",Uo,2),Ni("YuvToRgb565Row",Fr,2);var V0=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Xs=[0,2,8],c5=[8,7,6,4,4,2,2,2,1,1,1,1],u5=1;this.WebPDecodeRGBA=function(u,h,x,w,I){var R=$s,O=new de,F=new jt;O.ba=F,F.S=R,F.width=[F.width],F.height=[F.height];var B=F.width,Y=F.height,oe=new lt;if(oe==null||u==null)var ge=2;else t(oe!=null),ge=$o(u,h,x,oe.width,oe.height,oe.Pd,oe.Qd,oe.format,null);if(ge!=0?B=0:(B!=null&&(B[0]=oe.width[0]),Y!=null&&(Y[0]=oe.height[0]),B=1),B){F.width=F.width[0],F.height=F.height[0],w!=null&&(w[0]=F.width),I!=null&&(I[0]=F.height);e:{if(w=new ni,(I=new Se).data=u,I.w=h,I.ha=x,I.kd=1,h=[0],t(I!=null),((u=$o(I.data,I.w,I.ha,null,null,null,h,null,I))==0||u==7)&&h[0]&&(u=4),(h=u)==0){if(t(O!=null),w.data=I.data,w.w=I.w+I.offset,w.ha=I.ha-I.offset,w.put=tt,w.ac=Vr,w.bc=Mr,w.ma=O,I.xa){if((u=wi())==null){O=1;break e}if(function(G,le){var he=[0],Ce=[0],me=[0];t:for(;;){if(G==null)return 0;if(le==null)return G.a=2,0;if(G.l=le,G.a=0,ve(G.m,le.data,le.w,le.ha),!on(G.m,he,Ce,me)){G.a=3;break t}if(G.xb=z0,le.width=he[0],le.height=Ce[0],!Rr(he[0],Ce[0],1,G,null))break t;return 1}return t(G.a!=0),0}(u,w)){if(w=(h=no(w.width,w.height,O.Oa,O.ba))==0){t:{w=u;r:for(;;){if(w==null){w=0;break t}if(t(w.s.yc!=null),t(w.s.Ya!=null),t(0<w.s.Wb),t((x=w.l)!=null),t((I=x.ma)!=null),w.xb!=0){if(w.ca=I.ba,w.tb=I.tb,t(w.ca!=null),!Ga(I.Oa,x,qs)){w.a=2;break r}if(!An(w,x.width)||x.da)break r;if((x.da||Re(w.ca.S))&&Mn(),11>w.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),w.ca.f.kb.F!=null&&Mn()),w.Pb&&0<w.s.ua&&w.s.vb.X==null&&!Z(w.s.vb,w.s.Wa.Xa)){w.a=1;break r}w.xb=0}if(!Kr(w,w.V,w.Ba,w.c,w.i,x.o,ei))break r;I.Dc=w.Ma,w=1;break t}t(w.a!=0),w=0}w=!w}w&&(h=u.a)}else h=u.a}else{if((u=new qi)==null){O=1;break e}if(u.Fa=I.na,u.P=I.P,u.qc=I.Sa,ii(u,w)){if((h=no(w.width,w.height,O.Oa,O.ba))==0){if(u.Aa=0,x=O.Oa,t((I=u)!=null),x!=null){if(0<(B=0>(B=x.Md)?0:100<B?255:255*B/100)){for(Y=oe=0;4>Y;++Y)12>(ge=I.pb[Y]).lc&&(ge.ia=B*c5[0>ge.lc?0:ge.lc]>>3),oe|=ge.ia;oe&&(alert("todo:VP8InitRandom"),I.ia=1)}I.Ga=x.Id,100<I.Ga?I.Ga=100:0>I.Ga&&(I.Ga=0)}(function(G,le){if(G==null)return 0;if(le==null)return Bt(G,2,"NULL VP8Io parameter in VP8Decode().");if(!G.cb&&!ii(G,le))return 0;if(t(G.cb),le.ac==null||le.ac(le)){le.ob&&(G.L=0);var he=Xs[G.L];if(G.L==2?(G.yb=0,G.zb=0):(G.yb=le.v-he>>4,G.zb=le.j-he>>4,0>G.yb&&(G.yb=0),0>G.zb&&(G.zb=0)),G.Va=le.o+15+he>>4,G.Hb=le.va+15+he>>4,G.Hb>G.za&&(G.Hb=G.za),G.Va>G.Ub&&(G.Va=G.Ub),0<G.L){var Ce=G.ed;for(he=0;4>he;++he){var me;if(G.Qa.Cb){var Ae=G.Qa.Lb[he];G.Qa.Fb||(Ae+=Ce.Tb)}else Ae=Ce.Tb;for(me=0;1>=me;++me){var ke=G.gd[he][me],Ie=Ae;if(Ce.Pc&&(Ie+=Ce.vd[0],me&&(Ie+=Ce.od[0])),0<(Ie=0>Ie?0:63<Ie?63:Ie)){var Ne=Ie;0<Ce.wb&&(Ne=4<Ce.wb?Ne>>2:Ne>>1)>9-Ce.wb&&(Ne=9-Ce.wb),1>Ne&&(Ne=1),ke.dd=Ne,ke.tc=2*Ie+Ne,ke.ld=40<=Ie?2:15<=Ie?1:0}else ke.tc=0;ke.La=me}}}he=0}else Bt(G,6,"Frame setup failed"),he=G.a;if(he=he==0){if(he){G.$c=0,0<G.Aa||(G.Ic=u5);t:{he=G.Ic,Ce=4*(Ne=G.za);var Ke=32*Ne,$e=Ne+1,bt=0<G.L?Ne*(0<G.Aa?2:1):0,We=(G.Aa==2?2:1)*Ne;if((ke=Ce+832+(me=3*(16*he+Xs[G.L])/2*Ke)+(Ae=G.Fa!=null&&0<G.Fa.length?G.Kc.c*G.Kc.i:0))!=ke)he=0;else{if(ke>G.Vb){if(G.Vb=0,G.Ec=s(ke),G.Fc=0,G.Ec==null){he=Bt(G,1,"no memory during frame initialization.");break t}G.Vb=ke}ke=G.Ec,Ie=G.Fc,G.Ac=ke,G.Bc=Ie,Ie+=Ce,G.Gd=l(Ke,jo),G.Hd=0,G.rb=l($e+1,Hi),G.sb=1,G.wa=bt?l(bt,Gr):null,G.Y=0,G.D.Nb=0,G.D.wa=G.wa,G.D.Y=G.Y,0<G.Aa&&(G.D.Y+=Ne),t(!0),G.oc=ke,G.pc=Ie,Ie+=832,G.ya=l(We,$i),G.aa=0,G.D.ya=G.ya,G.D.aa=G.aa,G.Aa==2&&(G.D.aa+=Ne),G.R=16*Ne,G.B=8*Ne,Ne=(Ke=Xs[G.L])*G.R,Ke=Ke/2*G.B,G.sa=ke,G.ta=Ie+Ne,G.qa=G.sa,G.ra=G.ta+16*he*G.R+Ke,G.Ha=G.qa,G.Ia=G.ra+8*he*G.B+Ke,G.$c=0,Ie+=me,G.mb=Ae?ke:null,G.nb=Ae?Ie:null,t(Ie+Ae<=G.Fc+G.Vb),Ci(G),o(G.Ac,G.Bc,0,Ce),he=1}}if(he){if(le.ka=0,le.y=G.sa,le.O=G.ta,le.f=G.qa,le.N=G.ra,le.ea=G.Ha,le.Vd=G.Ia,le.fa=G.R,le.Rc=G.B,le.F=null,le.J=0,!E0){for(he=-255;255>=he;++he)I0[255+he]=0>he?-he:he;for(he=-1020;1020>=he;++he)L0[1020+he]=-128>he?-128:127<he?127:he;for(he=-112;112>=he;++he)P0[112+he]=-16>he?-16:15<he?15:he;for(he=-255;510>=he;++he)T0[255+he]=0>he?0:255<he?255:he;E0=1}co=oi,Yo=Lo,di=Ba,Et=jr,Ut=Gi,jn=Io,lr=Mi,yr=ha,Ii=g,es=j,ga=li,Bs=Ro,y0=V,_0=te,C0=Or,S0=ar,A0=to,k0=Do,$n[0]=Ha,$n[1]=Ai,$n[2]=Po,$n[3]=Ua,$n[4]=Ki,$n[5]=un,$n[6]=Bn,$n[7]=$a,$n[8]=Qi,$n[9]=da,uo[0]=kn,uo[1]=ca,uo[2]=Wi,uo[3]=Xi,uo[4]=ua,uo[5]=Zi,uo[6]=Ji,Li[0]=ki,Li[1]=la,Li[2]=Un,Li[3]=ai,Li[4]=To,Li[5]=qa,Li[6]=Eo,he=1}else he=0}he&&(he=function(St,_r){for(St.M=0;St.M<St.Va;++St.M){var wt,Xe=St.Jc[St.M&St.Xb],De=St.m,cr=St;for(wt=0;wt<cr.za;++wt){var xt=De,kt=cr,Xt=kt.Ac,Lr=kt.Bc+4*wt,Wr=kt.zc,nr=kt.ya[kt.aa+wt];if(kt.Qa.Bb?nr.$b=xe(xt,kt.Pa.jb[0])?2+xe(xt,kt.Pa.jb[2]):xe(xt,kt.Pa.jb[1]):nr.$b=0,kt.kc&&(nr.Ad=xe(xt,kt.Bd)),nr.Za=!xe(xt,145)+0,nr.Za){var zr=nr.Ob,Xr=0;for(kt=0;4>kt;++kt){var Cr,Nt=Wr[0+kt];for(Cr=0;4>Cr;++Cr){Nt=Xf[Xt[Lr+Cr]][Nt];for(var Ot=F0[xe(xt,Nt[0])];0<Ot;)Ot=F0[2*Ot+xe(xt,Nt[Ot])];Nt=-Ot,Xt[Lr+Cr]=Nt}n(zr,Xr,Xt,Lr,4),Xr+=4,Wr[0+kt]=Nt}}else Nt=xe(xt,156)?xe(xt,128)?1:3:xe(xt,163)?2:0,nr.Ob[0]=Nt,o(Xt,Lr,Nt,4),o(Wr,0,Nt,4);nr.Dd=xe(xt,142)?xe(xt,114)?xe(xt,183)?1:3:2:0}if(cr.m.Ka)return Bt(St,7,"Premature end-of-partition0 encountered.");for(;St.ja<St.za;++St.ja){if(cr=Xe,xt=(De=St).rb[De.sb-1],Xt=De.rb[De.sb+De.ja],wt=De.ya[De.aa+De.ja],Lr=De.kc?wt.Ad:0)xt.la=Xt.la=0,wt.Za||(xt.Na=Xt.Na=0),wt.Hc=0,wt.Gc=0,wt.ia=0;else{var ir,Ft;if(xt=Xt,Xt=cr,Lr=De.Pa.Xc,Wr=De.ya[De.aa+De.ja],nr=De.pb[Wr.$b],kt=Wr.ad,zr=0,Xr=De.rb[De.sb-1],Nt=Cr=0,o(kt,zr,0,384),Wr.Za)var Pr=0,qn=Lr[3];else{Ot=s(16);var ur=xt.Na+Xr.Na;if(ur=rs(Xt,Lr[1],ur,nr.Eb,0,Ot,0),xt.Na=Xr.Na=(0<ur)+0,1<ur)co(Ot,0,kt,zr);else{var en=Ot[0]+3>>3;for(Ot=0;256>Ot;Ot+=16)kt[zr+Ot]=en}Pr=1,qn=Lr[0]}var Ht=15&xt.la,Sr=15&Xr.la;for(Ot=0;4>Ot;++Ot){var pn=1&Sr;for(en=Ft=0;4>en;++en)Ht=Ht>>1|(pn=(ur=rs(Xt,qn,ur=pn+(1&Ht),nr.Sc,Pr,kt,zr))>Pr)<<7,Ft=Ft<<2|(3<ur?3:1<ur?2:kt[zr+0]!=0),zr+=16;Ht>>=4,Sr=Sr>>1|pn<<7,Cr=(Cr<<8|Ft)>>>0}for(qn=Ht,Pr=Sr>>4,ir=0;4>ir;ir+=2){for(Ft=0,Ht=xt.la>>4+ir,Sr=Xr.la>>4+ir,Ot=0;2>Ot;++Ot){for(pn=1&Sr,en=0;2>en;++en)ur=pn+(1&Ht),Ht=Ht>>1|(pn=0<(ur=rs(Xt,Lr[2],ur,nr.Qc,0,kt,zr)))<<3,Ft=Ft<<2|(3<ur?3:1<ur?2:kt[zr+0]!=0),zr+=16;Ht>>=2,Sr=Sr>>1|pn<<5}Nt|=Ft<<4*ir,qn|=Ht<<4<<ir,Pr|=(240&Sr)<<ir}xt.la=qn,Xr.la=Pr,Wr.Hc=Cr,Wr.Gc=Nt,Wr.ia=43690&Nt?0:nr.ia,Lr=!(Cr|Nt)}if(0<De.L&&(De.wa[De.Y+De.ja]=De.gd[wt.$b][wt.Za],De.wa[De.Y+De.ja].La|=!Lr),cr.Ka)return Bt(St,7,"Premature end-of-file encountered.")}if(Ci(St),De=_r,cr=1,wt=(Xe=St).D,xt=0<Xe.L&&Xe.M>=Xe.zb&&Xe.M<=Xe.Va,Xe.Aa==0)t:{if(wt.M=Xe.M,wt.uc=xt,Nn(Xe,wt),cr=1,wt=(Ft=Xe.D).Nb,xt=(Nt=Xs[Xe.L])*Xe.R,Xt=Nt/2*Xe.B,Ot=16*wt*Xe.R,en=8*wt*Xe.B,Lr=Xe.sa,Wr=Xe.ta-xt+Ot,nr=Xe.qa,kt=Xe.ra-Xt+en,zr=Xe.Ha,Xr=Xe.Ia-Xt+en,Sr=(Ht=Ft.M)==0,Cr=Ht>=Xe.Va-1,Xe.Aa==2&&Nn(Xe,Ft),Ft.uc)for(pn=(ur=Xe).D.M,t(ur.D.uc),Ft=ur.yb;Ft<ur.Hb;++Ft){Pr=Ft,qn=pn;var Zr=(mn=(Tr=ur).D).Nb;ir=Tr.R;var mn=mn.wa[mn.Y+Pr],gn=Tr.sa,tn=Tr.ta+16*Zr*ir+16*Pr,xn=mn.dd,Yt=mn.tc;if(Yt!=0)if(t(3<=Yt),Tr.L==1)0<Pr&&S0(gn,tn,ir,Yt+4),mn.La&&k0(gn,tn,ir,Yt),0<qn&&C0(gn,tn,ir,Yt+4),mn.La&&A0(gn,tn,ir,Yt);else{var vn=Tr.B,Vn=Tr.qa,Go=Tr.ra+8*Zr*vn+8*Pr,Pi=Tr.Ha,Tr=Tr.Ia+8*Zr*vn+8*Pr;Zr=mn.ld,0<Pr&&(yr(gn,tn,ir,Yt+4,xn,Zr),es(Vn,Go,Pi,Tr,vn,Yt+4,xn,Zr)),mn.La&&(Bs(gn,tn,ir,Yt,xn,Zr),_0(Vn,Go,Pi,Tr,vn,Yt,xn,Zr)),0<qn&&(lr(gn,tn,ir,Yt+4,xn,Zr),Ii(Vn,Go,Pi,Tr,vn,Yt+4,xn,Zr)),mn.La&&(ga(gn,tn,ir,Yt,xn,Zr),y0(Vn,Go,Pi,Tr,vn,Yt,xn,Zr))}}if(Xe.ia&&alert("todo:DitherRow"),De.put!=null){if(Ft=16*Ht,Ht=16*(Ht+1),Sr?(De.y=Xe.sa,De.O=Xe.ta+Ot,De.f=Xe.qa,De.N=Xe.ra+en,De.ea=Xe.Ha,De.W=Xe.Ia+en):(Ft-=Nt,De.y=Lr,De.O=Wr,De.f=nr,De.N=kt,De.ea=zr,De.W=Xr),Cr||(Ht-=Nt),Ht>De.o&&(Ht=De.o),De.F=null,De.J=null,Xe.Fa!=null&&0<Xe.Fa.length&&Ft<Ht&&(De.J=vr(Xe,De,Ft,Ht-Ft),De.F=Xe.mb,De.F==null&&De.F.length==0)){cr=Bt(Xe,3,"Could not decode alpha data.");break t}Ft<De.j&&(Nt=De.j-Ft,Ft=De.j,t(!(1&Nt)),De.O+=Xe.R*Nt,De.N+=Xe.B*(Nt>>1),De.W+=Xe.B*(Nt>>1),De.F!=null&&(De.J+=De.width*Nt)),Ft<Ht&&(De.O+=De.v,De.N+=De.v>>1,De.W+=De.v>>1,De.F!=null&&(De.J+=De.v),De.ka=Ft-De.j,De.U=De.va-De.v,De.T=Ht-Ft,cr=De.put(De))}wt+1!=Xe.Ic||Cr||(n(Xe.sa,Xe.ta-xt,Lr,Wr+16*Xe.R,xt),n(Xe.qa,Xe.ra-Xt,nr,kt+8*Xe.B,Xt),n(Xe.Ha,Xe.Ia-Xt,zr,Xr+8*Xe.B,Xt))}if(!cr)return Bt(St,6,"Output aborted.")}return 1}(G,le)),le.bc!=null&&le.bc(le),he&=1}return he?(G.cb=0,he):0})(u,w)||(h=u.a)}}else h=u.a}h==0&&O.Oa!=null&&O.Oa.fd&&(h=Wa(O.ba))}O=h}R=O!=0?null:11>R?F.f.RGBA.eb:F.f.kb.y}else R=null;return R};var Y0=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(E,J){for(var S="",T=0;T<4;T++)S+=String.fromCharCode(E[J++]);return S}function p(E,J){return E[J+0]|E[J+1]<<8}function v(E,J){return(E[J+0]|E[J+1]<<8|E[J+2]<<16)>>>0}function A(E,J){return(E[J+0]|E[J+1]<<8|E[J+2]<<16|E[J+3]<<24)>>>0}new d;var m=[0],b=[0],y=[],N=new d,C=e,L=function(E,J){var S={},T=0,q=!1,$=0,ne=0;if(S.frames=[],!function(M,z){for(var X=0;X<4;X++)if(M[z+X]!="RIFF".charCodeAt(X))return!0;return!1}(E,J)){for(A(E,J+=4),J+=8;J<E.length;){var ce=f(E,J),pe=A(E,J+=4);J+=4;var ae=pe+(1&pe);switch(ce){case"VP8 ":case"VP8L":S.frames[T]===void 0&&(S.frames[T]={}),(re=S.frames[T]).src_off=q?ne:J-8,re.src_size=$+pe+8,T++,q&&(q=!1,$=0,ne=0);break;case"VP8X":(re=S.header={}).feature_flags=E[J];var ve=J+4;re.canvas_width=1+v(E,ve),ve+=3,re.canvas_height=1+v(E,ve),ve+=3;break;case"ALPH":q=!0,$=ae+8,ne=J-8;break;case"ANIM":(re=S.header).bgcolor=A(E,J),ve=J+4,re.loop_count=p(E,ve),ve+=2;break;case"ANMF":var we,re;(re=S.frames[T]={}).offset_x=2*v(E,J),J+=3,re.offset_y=2*v(E,J),J+=3,re.width=1+v(E,J),J+=3,re.height=1+v(E,J),J+=3,re.duration=v(E,J),J+=3,we=E[J++],re.dispose=1&we,re.blend=we>>1&1}ce!="ANMF"&&(J+=ae)}return S}}(C,0);L.response=C,L.rgbaoutput=!0,L.dataurl=!1;var P=L.header?L.header:null,D=L.frames?L.frames:null;if(P){P.loop_counter=P.loop_count,m=[P.canvas_height],b=[P.canvas_width];for(var U=0;U<D.length&&D[U].blend!=0;U++);}var H=D[0],K=N.WebPDecodeRGBA(C,H.src_off,H.src_size,b,m);H.rgba=K,H.imgwidth=b[0],H.imgheight=m[0];for(var W=0;W<b[0]*m[0]*4;W++)y[W]=K[W];return this.width=b,this.height=m,this.data=y,this}(function(e){var t,r,n,o,s,l,c,d,f,p=function(M){return M=M||{},this.isStrokeTransparent=M.isStrokeTransparent||!1,this.strokeOpacity=M.strokeOpacity||1,this.strokeStyle=M.strokeStyle||"#000000",this.fillStyle=M.fillStyle||"#000000",this.isFillTransparent=M.isFillTransparent||!1,this.fillOpacity=M.fillOpacity||1,this.font=M.font||"10px sans-serif",this.textBaseline=M.textBaseline||"alphabetic",this.textAlign=M.textAlign||"left",this.lineWidth=M.lineWidth||1,this.lineJoin=M.lineJoin||"miter",this.lineCap=M.lineCap||"butt",this.path=M.path||[],this.transform=M.transform!==void 0?M.transform.clone():new d,this.globalCompositeOperation=M.globalCompositeOperation||"normal",this.globalAlpha=M.globalAlpha||1,this.clip_path=M.clip_path||[],this.currentPoint=M.currentPoint||new l,this.miterLimit=M.miterLimit||10,this.lastPoint=M.lastPoint||new l,this.lineDashOffset=M.lineDashOffset||0,this.lineDash=M.lineDash||[],this.margin=M.margin||[0,0,0,0],this.prevPageLastElemOffset=M.prevPageLastElemOffset||0,this.ignoreClearRect=typeof M.ignoreClearRect!="boolean"||M.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new v(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,s=this.internal.getVerticalCoordinate,l=this.internal.Point,c=this.internal.Rectangle,d=this.internal.Matrix,f=new p}]);var v=function(M){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var z=M;Object.defineProperty(this,"pdf",{get:function(){return z}});var X=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return X},set:function(be){X=!!be}});var Q=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return Q},set:function(be){Q=!!be}});var ee=0;Object.defineProperty(this,"posX",{get:function(){return ee},set:function(be){isNaN(be)||(ee=be)}});var se=0;Object.defineProperty(this,"posY",{get:function(){return se},set:function(be){isNaN(be)||(se=be)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(be){var Z;typeof be=="number"?Z=[be,be,be,be]:((Z=new Array(4))[0]=be[0],Z[1]=be.length>=2?be[1]:Z[0],Z[2]=be.length>=3?be[2]:Z[0],Z[3]=be.length>=4?be[3]:Z[1]),f.margin=Z}});var fe=!1;Object.defineProperty(this,"autoPaging",{get:function(){return fe},set:function(be){fe=be}});var ie=0;Object.defineProperty(this,"lastBreak",{get:function(){return ie},set:function(be){ie=be}});var xe=[];Object.defineProperty(this,"pageBreaks",{get:function(){return xe},set:function(be){xe=be}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(be){be instanceof p&&(f=be)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(be){f.path=be}});var _e=[];Object.defineProperty(this,"ctxStack",{get:function(){return _e},set:function(be){_e=be}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(be){var Z;Z=A(be),this.ctx.fillStyle=Z.style,this.ctx.isFillTransparent=Z.a===0,this.ctx.fillOpacity=Z.a,this.pdf.setFillColor(Z.r,Z.g,Z.b,{a:Z.a}),this.pdf.setTextColor(Z.r,Z.g,Z.b,{a:Z.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(be){var Z=A(be);this.ctx.strokeStyle=Z.style,this.ctx.isStrokeTransparent=Z.a===0,this.ctx.strokeOpacity=Z.a,Z.a===0?this.pdf.setDrawColor(255,255,255):(Z.a,this.pdf.setDrawColor(Z.r,Z.g,Z.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(be){["butt","round","square"].indexOf(be)!==-1&&(this.ctx.lineCap=be,this.pdf.setLineCap(be))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(be){isNaN(be)||(this.ctx.lineWidth=be,this.pdf.setLineWidth(be))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(be){["bevel","round","miter"].indexOf(be)!==-1&&(this.ctx.lineJoin=be,this.pdf.setLineJoin(be))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(be){isNaN(be)||(this.ctx.miterLimit=be,this.pdf.setMiterLimit(be))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(be){this.ctx.textBaseline=be}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(be){["right","end","center","left","start"].indexOf(be)!==-1&&(this.ctx.textAlign=be)}});var Le=null,Pe=null;Object.defineProperty(this,"fontFaces",{get:function(){return Pe},set:function(be){Le=null,Pe=be}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(be){var Z;if(this.ctx.font=be,(Z=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(be))!==null){var rt=Z[1];Z[2];var Je=Z[3],Ge=Z[4];Z[5];var je=Z[6],Fe=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ge)[2];Ge=Math.floor(Fe==="px"?parseFloat(Ge)*this.pdf.internal.scaleFactor:Fe==="em"?parseFloat(Ge)*this.pdf.getFontSize():parseFloat(Ge)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Ge);var Ee=function(at){var ze,Ct,vt=[],Ve=at.trim();if(Ve==="")return ec;if(Ve in zu)return[zu[Ve]];for(;Ve!=="";){switch(Ct=null,ze=(Ve=Uu(Ve)).charAt(0)){case'"':case"'":Ct=C9(Ve.substring(1),ze);break;default:Ct=S9(Ve)}if(Ct===null||(vt.push(Ct[0]),(Ve=Uu(Ct[1]))!==""&&Ve.charAt(0)!==","))return ec;Ve=Ve.replace(/^,/,"")}return vt}(je);if(this.fontFaces){var nt=function(at,ze){if(Le===null){var Ct=function(vt){var Ve=[];return Object.keys(vt).forEach(function(ct){vt[ct].forEach(function(Mt){var ye=null;switch(Mt){case"bold":ye={family:ct,weight:"bold"};break;case"italic":ye={family:ct,style:"italic"};break;case"bolditalic":ye={family:ct,weight:"bold",style:"italic"};break;case"":case"normal":ye={family:ct}}ye!==null&&(ye.ref={name:ct,style:Mt},Ve.push(ye))})}),Ve}(at.getFontList());Le=function(vt){for(var Ve={},ct=0;ct<vt.length;++ct){var Mt=Q1(vt[ct]),ye=Mt.family,Oe=Mt.stretch,Re=Mt.style,ft=Mt.weight;Ve[ye]=Ve[ye]||{},Ve[ye][Oe]=Ve[ye][Oe]||{},Ve[ye][Oe][Re]=Ve[ye][Oe][Re]||{},Ve[ye][Oe][Re][ft]=Mt}return Ve}(Ct.concat(ze))}return Le}(this.pdf,this.fontFaces),Be=Ee.map(function(at){return{family:at,stretch:"normal",weight:Je,style:rt}}),yt=function(at,ze,Ct){for(var vt=(Ct=Ct||{}).defaultFontFamily||"times",Ve=Object.assign({},_9,Ct.genericFontFamilies||{}),ct=null,Mt=null,ye=0;ye<ze.length;++ye)if(Ve[(ct=Q1(ze[ye])).family]&&(ct.family=Ve[ct.family]),at.hasOwnProperty(ct.family)){Mt=at[ct.family];break}if(!(Mt=Mt||at[vt]))throw new Error("Could not find a font-family for the rule '"+Bu(ct)+"' and default family '"+vt+"'.");if(Mt=function(Oe,Re){if(Re[Oe])return Re[Oe];var ft=Hc[Oe],Tt=ft<=Hc.normal?-1:1,jt=Fu(Re,Nf,ft,Tt);if(!jt)throw new Error("Could not find a matching font-stretch value for "+Oe);return jt}(ct.stretch,Mt),Mt=function(Oe,Re){if(Re[Oe])return Re[Oe];for(var ft=Mf[Oe],Tt=0;Tt<ft.length;++Tt)if(Re[ft[Tt]])return Re[ft[Tt]];throw new Error("Could not find a matching font-style for "+Oe)}(ct.style,Mt),!(Mt=function(Oe,Re){if(Re[Oe])return Re[Oe];if(Oe===400&&Re[500])return Re[500];if(Oe===500&&Re[400])return Re[400];var ft=y9[Oe],Tt=Fu(Re,jf,ft,Oe<400?-1:1);if(!Tt)throw new Error("Could not find a matching font-weight for value "+Oe);return Tt}(ct.weight,Mt)))throw new Error("Failed to resolve a font for the rule '"+Bu(ct)+"'.");return Mt}(nt,Be);this.pdf.setFont(yt.ref.name,yt.ref.style)}else{var it="";(Je==="bold"||parseInt(Je,10)>=700||rt==="bold")&&(it="bold"),rt==="italic"&&(it+="italic"),it.length===0&&(it="normal");for(var ot="",At={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},ut=0;ut<Ee.length;ut++){if(this.pdf.internal.getFont(Ee[ut],it,{noFallback:!0,disableWarning:!0})!==void 0){ot=Ee[ut];break}if(it==="bolditalic"&&this.pdf.internal.getFont(Ee[ut],"bold",{noFallback:!0,disableWarning:!0})!==void 0)ot=Ee[ut],it="bold";else if(this.pdf.internal.getFont(Ee[ut],"normal",{noFallback:!0,disableWarning:!0})!==void 0){ot=Ee[ut],it="normal";break}}if(ot===""){for(var qe=0;qe<Ee.length;qe++)if(At[Ee[qe]]){ot=At[Ee[qe]];break}}ot=ot===""?"Times":ot,this.pdf.setFont(ot,it)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(be){this.ctx.globalCompositeOperation=be}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(be){this.ctx.globalAlpha=be}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(be){this.ctx.lineDashOffset=be,re.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(be){this.ctx.lineDash=be,re.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(be){this.ctx.ignoreClearRect=!!be}})};v.prototype.setLineDash=function(M){this.lineDash=M},v.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},v.prototype.fill=function(){D.call(this,"fill",!1)},v.prototype.stroke=function(){D.call(this,"stroke",!1)},v.prototype.beginPath=function(){this.path=[{type:"begin"}]},v.prototype.moveTo=function(M,z){if(isNaN(M)||isNaN(z))throw $t.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var X=this.ctx.transform.applyToPoint(new l(M,z));this.path.push({type:"mt",x:X.x,y:X.y}),this.ctx.lastPoint=new l(M,z)},v.prototype.closePath=function(){var M=new l(0,0),z=0;for(z=this.path.length-1;z!==-1;z--)if(this.path[z].type==="begin"&&zt(this.path[z+1])==="object"&&typeof this.path[z+1].x=="number"){M=new l(this.path[z+1].x,this.path[z+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new l(M.x,M.y)},v.prototype.lineTo=function(M,z){if(isNaN(M)||isNaN(z))throw $t.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var X=this.ctx.transform.applyToPoint(new l(M,z));this.path.push({type:"lt",x:X.x,y:X.y}),this.ctx.lastPoint=new l(X.x,X.y)},v.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),D.call(this,null,!0)},v.prototype.quadraticCurveTo=function(M,z,X,Q){if(isNaN(X)||isNaN(Q)||isNaN(M)||isNaN(z))throw $t.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var ee=this.ctx.transform.applyToPoint(new l(X,Q)),se=this.ctx.transform.applyToPoint(new l(M,z));this.path.push({type:"qct",x1:se.x,y1:se.y,x:ee.x,y:ee.y}),this.ctx.lastPoint=new l(ee.x,ee.y)},v.prototype.bezierCurveTo=function(M,z,X,Q,ee,se){if(isNaN(ee)||isNaN(se)||isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q))throw $t.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var fe=this.ctx.transform.applyToPoint(new l(ee,se)),ie=this.ctx.transform.applyToPoint(new l(M,z)),xe=this.ctx.transform.applyToPoint(new l(X,Q));this.path.push({type:"bct",x1:ie.x,y1:ie.y,x2:xe.x,y2:xe.y,x:fe.x,y:fe.y}),this.ctx.lastPoint=new l(fe.x,fe.y)},v.prototype.arc=function(M,z,X,Q,ee,se){if(isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q)||isNaN(ee))throw $t.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(se=!!se,!this.ctx.transform.isIdentity){var fe=this.ctx.transform.applyToPoint(new l(M,z));M=fe.x,z=fe.y;var ie=this.ctx.transform.applyToPoint(new l(0,X)),xe=this.ctx.transform.applyToPoint(new l(0,0));X=Math.sqrt(Math.pow(ie.x-xe.x,2)+Math.pow(ie.y-xe.y,2))}Math.abs(ee-Q)>=2*Math.PI&&(Q=0,ee=2*Math.PI),this.path.push({type:"arc",x:M,y:z,radius:X,startAngle:Q,endAngle:ee,counterclockwise:se})},v.prototype.arcTo=function(M,z,X,Q,ee){throw new Error("arcTo not implemented.")},v.prototype.rect=function(M,z,X,Q){if(isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q))throw $t.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(M,z),this.lineTo(M+X,z),this.lineTo(M+X,z+Q),this.lineTo(M,z+Q),this.lineTo(M,z),this.lineTo(M+X,z),this.lineTo(M,z)},v.prototype.fillRect=function(M,z,X,Q){if(isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q))throw $t.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var ee={};this.lineCap!=="butt"&&(ee.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(ee.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(M,z,X,Q),this.fill(),ee.hasOwnProperty("lineCap")&&(this.lineCap=ee.lineCap),ee.hasOwnProperty("lineJoin")&&(this.lineJoin=ee.lineJoin)}},v.prototype.strokeRect=function(M,z,X,Q){if(isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q))throw $t.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");b.call(this)||(this.beginPath(),this.rect(M,z,X,Q),this.stroke())},v.prototype.clearRect=function(M,z,X,Q){if(isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q))throw $t.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(M,z,X,Q))},v.prototype.save=function(M){M=typeof M!="boolean"||M;for(var z=this.pdf.internal.getCurrentPageInfo().pageNumber,X=0;X<this.pdf.internal.getNumberOfPages();X++)this.pdf.setPage(X+1),this.pdf.internal.out("q");if(this.pdf.setPage(z),M){this.ctx.fontSize=this.pdf.internal.getFontSize();var Q=new p(this.ctx);this.ctxStack.push(this.ctx),this.ctx=Q}},v.prototype.restore=function(M){M=typeof M!="boolean"||M;for(var z=this.pdf.internal.getCurrentPageInfo().pageNumber,X=0;X<this.pdf.internal.getNumberOfPages();X++)this.pdf.setPage(X+1),this.pdf.internal.out("Q");this.pdf.setPage(z),M&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},v.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var A=function(M){var z,X,Q,ee;if(M.isCanvasGradient===!0&&(M=M.getColor()),!M)return{r:0,g:0,b:0,a:0,style:M};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(M))z=0,X=0,Q=0,ee=0;else{var se=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(M);if(se!==null)z=parseInt(se[1]),X=parseInt(se[2]),Q=parseInt(se[3]),ee=1;else if((se=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(M))!==null)z=parseInt(se[1]),X=parseInt(se[2]),Q=parseInt(se[3]),ee=parseFloat(se[4]);else{if(ee=1,typeof M=="string"&&M.charAt(0)!=="#"){var fe=new wf(M);M=fe.ok?fe.toHex():"#000000"}M.length===4?(z=M.substring(1,2),z+=z,X=M.substring(2,3),X+=X,Q=M.substring(3,4),Q+=Q):(z=M.substring(1,3),X=M.substring(3,5),Q=M.substring(5,7)),z=parseInt(z,16),X=parseInt(X,16),Q=parseInt(Q,16)}}return{r:z,g:X,b:Q,a:ee,style:M}},m=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},b=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};v.prototype.fillText=function(M,z,X,Q){if(isNaN(z)||isNaN(X)||typeof M!="string")throw $t.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(Q=isNaN(Q)?void 0:Q,!m.call(this)){var ee=ae(this.ctx.transform.rotation),se=this.ctx.transform.scaleX;T.call(this,{text:M,x:z,y:X,scale:se,angle:ee,align:this.textAlign,maxWidth:Q})}},v.prototype.strokeText=function(M,z,X,Q){if(isNaN(z)||isNaN(X)||typeof M!="string")throw $t.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!b.call(this)){Q=isNaN(Q)?void 0:Q;var ee=ae(this.ctx.transform.rotation),se=this.ctx.transform.scaleX;T.call(this,{text:M,x:z,y:X,scale:se,renderingMode:"stroke",angle:ee,align:this.textAlign,maxWidth:Q})}},v.prototype.measureText=function(M){if(typeof M!="string")throw $t.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var z=this.pdf,X=this.pdf.internal.scaleFactor,Q=z.internal.getFontSize(),ee=z.getStringUnitWidth(M)*Q/z.internal.scaleFactor;return new function(se){var fe=(se=se||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return fe}}),this}({width:ee*=Math.round(96*X/72*1e4)/1e4})},v.prototype.scale=function(M,z){if(isNaN(M)||isNaN(z))throw $t.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var X=new d(M,0,0,z,0,0);this.ctx.transform=this.ctx.transform.multiply(X)},v.prototype.rotate=function(M){if(isNaN(M))throw $t.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var z=new d(Math.cos(M),Math.sin(M),-Math.sin(M),Math.cos(M),0,0);this.ctx.transform=this.ctx.transform.multiply(z)},v.prototype.translate=function(M,z){if(isNaN(M)||isNaN(z))throw $t.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var X=new d(1,0,0,1,M,z);this.ctx.transform=this.ctx.transform.multiply(X)},v.prototype.transform=function(M,z,X,Q,ee,se){if(isNaN(M)||isNaN(z)||isNaN(X)||isNaN(Q)||isNaN(ee)||isNaN(se))throw $t.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var fe=new d(M,z,X,Q,ee,se);this.ctx.transform=this.ctx.transform.multiply(fe)},v.prototype.setTransform=function(M,z,X,Q,ee,se){M=isNaN(M)?1:M,z=isNaN(z)?0:z,X=isNaN(X)?0:X,Q=isNaN(Q)?1:Q,ee=isNaN(ee)?0:ee,se=isNaN(se)?0:se,this.ctx.transform=new d(M,z,X,Q,ee,se)};var y=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};v.prototype.drawImage=function(M,z,X,Q,ee,se,fe,ie,xe){var _e=this.pdf.getImageProperties(M),Le=1,Pe=1,be=1,Z=1;Q!==void 0&&ie!==void 0&&(be=ie/Q,Z=xe/ee,Le=_e.width/Q*ie/Q,Pe=_e.height/ee*xe/ee),se===void 0&&(se=z,fe=X,z=0,X=0),Q!==void 0&&ie===void 0&&(ie=Q,xe=ee),Q===void 0&&ie===void 0&&(ie=_e.width,xe=_e.height);for(var rt,Je=this.ctx.transform.decompose(),Ge=ae(Je.rotate.shx),je=new d,Fe=(je=(je=(je=je.multiply(Je.translate)).multiply(Je.skew)).multiply(Je.scale)).applyToRectangle(new c(se-z*be,fe-X*Z,Q*Le,ee*Pe)),Ee=N.call(this,Fe),nt=[],Be=0;Be<Ee.length;Be+=1)nt.indexOf(Ee[Be])===-1&&nt.push(Ee[Be]);if(P(nt),this.autoPaging)for(var yt=nt[0],it=nt[nt.length-1],ot=yt;ot<it+1;ot++){this.pdf.setPage(ot);var At=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],ut=ot===1?this.posY+this.margin[0]:this.margin[0],qe=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],at=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],ze=ot===1?0:qe+(ot-2)*at;if(this.ctx.clip_path.length!==0){var Ct=this.path;rt=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=L(rt,this.posX+this.margin[3],-ze+ut+this.ctx.prevPageLastElemOffset),U.call(this,"fill",!0),this.path=Ct}var vt=JSON.parse(JSON.stringify(Fe));vt=L([vt],this.posX+this.margin[3],-ze+ut+this.ctx.prevPageLastElemOffset)[0];var Ve=(ot>yt||ot<it)&&y.call(this);Ve&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],At,at,null).clip().discardPath()),this.pdf.addImage(M,"JPEG",vt.x,vt.y,vt.w,vt.h,null,null,Ge),Ve&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(M,"JPEG",Fe.x,Fe.y,Fe.w,Fe.h,null,null,Ge)};var N=function(M,z,X){var Q=[];z=z||this.pdf.internal.pageSize.width,X=X||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var ee=this.posY+this.ctx.prevPageLastElemOffset;switch(M.type){default:case"mt":case"lt":Q.push(Math.floor((M.y+ee)/X)+1);break;case"arc":Q.push(Math.floor((M.y+ee-M.radius)/X)+1),Q.push(Math.floor((M.y+ee+M.radius)/X)+1);break;case"qct":var se=ve(this.ctx.lastPoint.x,this.ctx.lastPoint.y,M.x1,M.y1,M.x,M.y);Q.push(Math.floor((se.y+ee)/X)+1),Q.push(Math.floor((se.y+se.h+ee)/X)+1);break;case"bct":var fe=we(this.ctx.lastPoint.x,this.ctx.lastPoint.y,M.x1,M.y1,M.x2,M.y2,M.x,M.y);Q.push(Math.floor((fe.y+ee)/X)+1),Q.push(Math.floor((fe.y+fe.h+ee)/X)+1);break;case"rect":Q.push(Math.floor((M.y+ee)/X)+1),Q.push(Math.floor((M.y+M.h+ee)/X)+1)}for(var ie=0;ie<Q.length;ie+=1)for(;this.pdf.internal.getNumberOfPages()<Q[ie];)C.call(this);return Q},C=function(){var M=this.fillStyle,z=this.strokeStyle,X=this.font,Q=this.lineCap,ee=this.lineWidth,se=this.lineJoin;this.pdf.addPage(),this.fillStyle=M,this.strokeStyle=z,this.font=X,this.lineCap=Q,this.lineWidth=ee,this.lineJoin=se},L=function(M,z,X){for(var Q=0;Q<M.length;Q++)switch(M[Q].type){case"bct":M[Q].x2+=z,M[Q].y2+=X;case"qct":M[Q].x1+=z,M[Q].y1+=X;default:M[Q].x+=z,M[Q].y+=X}return M},P=function(M){return M.sort(function(z,X){return z-X})},D=function(M,z){for(var X,Q,ee=this.fillStyle,se=this.strokeStyle,fe=this.lineCap,ie=this.lineWidth,xe=Math.abs(ie*this.ctx.transform.scaleX),_e=this.lineJoin,Le=JSON.parse(JSON.stringify(this.path)),Pe=JSON.parse(JSON.stringify(this.path)),be=[],Z=0;Z<Pe.length;Z++)if(Pe[Z].x!==void 0)for(var rt=N.call(this,Pe[Z]),Je=0;Je<rt.length;Je+=1)be.indexOf(rt[Je])===-1&&be.push(rt[Je]);for(var Ge=0;Ge<be.length;Ge++)for(;this.pdf.internal.getNumberOfPages()<be[Ge];)C.call(this);if(P(be),this.autoPaging)for(var je=be[0],Fe=be[be.length-1],Ee=je;Ee<Fe+1;Ee++){this.pdf.setPage(Ee),this.fillStyle=ee,this.strokeStyle=se,this.lineCap=fe,this.lineWidth=xe,this.lineJoin=_e;var nt=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Be=Ee===1?this.posY+this.margin[0]:this.margin[0],yt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],it=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],ot=Ee===1?0:yt+(Ee-2)*it;if(this.ctx.clip_path.length!==0){var At=this.path;X=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=L(X,this.posX+this.margin[3],-ot+Be+this.ctx.prevPageLastElemOffset),U.call(this,M,!0),this.path=At}if(Q=JSON.parse(JSON.stringify(Le)),this.path=L(Q,this.posX+this.margin[3],-ot+Be+this.ctx.prevPageLastElemOffset),z===!1||Ee===0){var ut=(Ee>je||Ee<Fe)&&y.call(this);ut&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],nt,it,null).clip().discardPath()),U.call(this,M,z),ut&&this.pdf.restoreGraphicsState()}this.lineWidth=ie}else this.lineWidth=xe,U.call(this,M,z),this.lineWidth=ie;this.path=Le},U=function(M,z){if((M!=="stroke"||z||!b.call(this))&&(M==="stroke"||z||!m.call(this))){for(var X,Q,ee=[],se=this.path,fe=0;fe<se.length;fe++){var ie=se[fe];switch(ie.type){case"begin":ee.push({begin:!0});break;case"close":ee.push({close:!0});break;case"mt":ee.push({start:ie,deltas:[],abs:[]});break;case"lt":var xe=ee.length;if(se[fe-1]&&!isNaN(se[fe-1].x)&&(X=[ie.x-se[fe-1].x,ie.y-se[fe-1].y],xe>0)){for(;xe>=0;xe--)if(ee[xe-1].close!==!0&&ee[xe-1].begin!==!0){ee[xe-1].deltas.push(X),ee[xe-1].abs.push(ie);break}}break;case"bct":X=[ie.x1-se[fe-1].x,ie.y1-se[fe-1].y,ie.x2-se[fe-1].x,ie.y2-se[fe-1].y,ie.x-se[fe-1].x,ie.y-se[fe-1].y],ee[ee.length-1].deltas.push(X);break;case"qct":var _e=se[fe-1].x+2/3*(ie.x1-se[fe-1].x),Le=se[fe-1].y+2/3*(ie.y1-se[fe-1].y),Pe=ie.x+2/3*(ie.x1-ie.x),be=ie.y+2/3*(ie.y1-ie.y),Z=ie.x,rt=ie.y;X=[_e-se[fe-1].x,Le-se[fe-1].y,Pe-se[fe-1].x,be-se[fe-1].y,Z-se[fe-1].x,rt-se[fe-1].y],ee[ee.length-1].deltas.push(X);break;case"arc":ee.push({deltas:[],abs:[],arc:!0}),Array.isArray(ee[ee.length-1].abs)&&ee[ee.length-1].abs.push(ie)}}Q=z?null:M==="stroke"?"stroke":"fill";for(var Je=!1,Ge=0;Ge<ee.length;Ge++)if(ee[Ge].arc)for(var je=ee[Ge].abs,Fe=0;Fe<je.length;Fe++){var Ee=je[Fe];Ee.type==="arc"?W.call(this,Ee.x,Ee.y,Ee.radius,Ee.startAngle,Ee.endAngle,Ee.counterclockwise,void 0,z,!Je):q.call(this,Ee.x,Ee.y),Je=!0}else if(ee[Ge].close===!0)this.pdf.internal.out("h"),Je=!1;else if(ee[Ge].begin!==!0){var nt=ee[Ge].start.x,Be=ee[Ge].start.y;$.call(this,ee[Ge].deltas,nt,Be),Je=!0}Q&&E.call(this,Q),z&&J.call(this)}},H=function(M){var z=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,X=z*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return M-X;case"top":return M+z-X;case"hanging":return M+z-2*X;case"middle":return M+z/2-X;default:return M}},K=function(M){return M+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};v.prototype.createLinearGradient=function(){var M=function(){};return M.colorStops=[],M.addColorStop=function(z,X){this.colorStops.push([z,X])},M.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},M.isCanvasGradient=!0,M},v.prototype.createPattern=function(){return this.createLinearGradient()},v.prototype.createRadialGradient=function(){return this.createLinearGradient()};var W=function(M,z,X,Q,ee,se,fe,ie,xe){for(var _e=ce.call(this,X,Q,ee,se),Le=0;Le<_e.length;Le++){var Pe=_e[Le];Le===0&&(xe?S.call(this,Pe.x1+M,Pe.y1+z):q.call(this,Pe.x1+M,Pe.y1+z)),ne.call(this,M,z,Pe.x2,Pe.y2,Pe.x3,Pe.y3,Pe.x4,Pe.y4)}ie?J.call(this):E.call(this,fe)},E=function(M){switch(M){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},J=function(){this.pdf.clip(),this.pdf.discardPath()},S=function(M,z){this.pdf.internal.out(r(M)+" "+n(z)+" m")},T=function(M){var z;switch(M.align){case"right":case"end":z="right";break;case"center":z="center";break;default:z="left"}var X=this.pdf.getTextDimensions(M.text),Q=H.call(this,M.y),ee=K.call(this,Q)-X.h,se=this.ctx.transform.applyToPoint(new l(M.x,Q)),fe=this.ctx.transform.decompose(),ie=new d;ie=(ie=(ie=ie.multiply(fe.translate)).multiply(fe.skew)).multiply(fe.scale);for(var xe,_e,Le,Pe=this.ctx.transform.applyToRectangle(new c(M.x,Q,X.w,X.h)),be=ie.applyToRectangle(new c(M.x,ee,X.w,X.h)),Z=N.call(this,be),rt=[],Je=0;Je<Z.length;Je+=1)rt.indexOf(Z[Je])===-1&&rt.push(Z[Je]);if(P(rt),this.autoPaging)for(var Ge=rt[0],je=rt[rt.length-1],Fe=Ge;Fe<je+1;Fe++){this.pdf.setPage(Fe);var Ee=Fe===1?this.posY+this.margin[0]:this.margin[0],nt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Be=this.pdf.internal.pageSize.height-this.margin[2],yt=Be-this.margin[0],it=this.pdf.internal.pageSize.width-this.margin[1],ot=it-this.margin[3],At=Fe===1?0:nt+(Fe-2)*yt;if(this.ctx.clip_path.length!==0){var ut=this.path;xe=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=L(xe,this.posX+this.margin[3],-1*At+Ee),U.call(this,"fill",!0),this.path=ut}var qe=L([JSON.parse(JSON.stringify(be))],this.posX+this.margin[3],-At+Ee+this.ctx.prevPageLastElemOffset)[0];M.scale>=.01&&(_e=this.pdf.internal.getFontSize(),this.pdf.setFontSize(_e*M.scale),Le=this.lineWidth,this.lineWidth=Le*M.scale);var at=this.autoPaging!=="text";if(at||qe.y+qe.h<=Be){if(at||qe.y>=Ee&&qe.x<=it){var ze=at?M.text:this.pdf.splitTextToSize(M.text,M.maxWidth||it-qe.x)[0],Ct=L([JSON.parse(JSON.stringify(Pe))],this.posX+this.margin[3],-At+Ee+this.ctx.prevPageLastElemOffset)[0],vt=at&&(Fe>Ge||Fe<je)&&y.call(this);vt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],ot,yt,null).clip().discardPath()),this.pdf.text(ze,Ct.x,Ct.y,{angle:M.angle,align:z,renderingMode:M.renderingMode}),vt&&this.pdf.restoreGraphicsState()}}else qe.y<Be&&(this.ctx.prevPageLastElemOffset+=Be-qe.y);M.scale>=.01&&(this.pdf.setFontSize(_e),this.lineWidth=Le)}else M.scale>=.01&&(_e=this.pdf.internal.getFontSize(),this.pdf.setFontSize(_e*M.scale),Le=this.lineWidth,this.lineWidth=Le*M.scale),this.pdf.text(M.text,se.x+this.posX,se.y+this.posY,{angle:M.angle,align:z,renderingMode:M.renderingMode,maxWidth:M.maxWidth}),M.scale>=.01&&(this.pdf.setFontSize(_e),this.lineWidth=Le)},q=function(M,z,X,Q){X=X||0,Q=Q||0,this.pdf.internal.out(r(M+X)+" "+n(z+Q)+" l")},$=function(M,z,X){return this.pdf.lines(M,z,X,null,null)},ne=function(M,z,X,Q,ee,se,fe,ie){this.pdf.internal.out([t(o(X+M)),t(s(Q+z)),t(o(ee+M)),t(s(se+z)),t(o(fe+M)),t(s(ie+z)),"c"].join(" "))},ce=function(M,z,X,Q){for(var ee=2*Math.PI,se=Math.PI/2;z>X;)z-=ee;var fe=Math.abs(X-z);fe<ee&&Q&&(fe=ee-fe);for(var ie=[],xe=Q?-1:1,_e=z;fe>1e-5;){var Le=_e+xe*Math.min(fe,se);ie.push(pe.call(this,M,_e,Le)),fe-=Math.abs(Le-_e),_e=Le}return ie},pe=function(M,z,X){var Q=(X-z)/2,ee=M*Math.cos(Q),se=M*Math.sin(Q),fe=ee,ie=-se,xe=fe*fe+ie*ie,_e=xe+fe*ee+ie*se,Le=4/3*(Math.sqrt(2*xe*_e)-_e)/(fe*se-ie*ee),Pe=fe-Le*ie,be=ie+Le*fe,Z=Pe,rt=-be,Je=Q+z,Ge=Math.cos(Je),je=Math.sin(Je);return{x1:M*Math.cos(z),y1:M*Math.sin(z),x2:Pe*Ge-be*je,y2:Pe*je+be*Ge,x3:Z*Ge-rt*je,y3:Z*je+rt*Ge,x4:M*Math.cos(X),y4:M*Math.sin(X)}},ae=function(M){return 180*M/Math.PI},ve=function(M,z,X,Q,ee,se){var fe=M+.5*(X-M),ie=z+.5*(Q-z),xe=ee+.5*(X-ee),_e=se+.5*(Q-se),Le=Math.min(M,ee,fe,xe),Pe=Math.max(M,ee,fe,xe),be=Math.min(z,se,ie,_e),Z=Math.max(z,se,ie,_e);return new c(Le,be,Pe-Le,Z-be)},we=function(M,z,X,Q,ee,se,fe,ie){var xe,_e,Le,Pe,be,Z,rt,Je,Ge,je,Fe,Ee,nt,Be,yt=X-M,it=Q-z,ot=ee-X,At=se-Q,ut=fe-ee,qe=ie-se;for(_e=0;_e<41;_e++)Ge=(rt=(Le=M+(xe=_e/40)*yt)+xe*((be=X+xe*ot)-Le))+xe*(be+xe*(ee+xe*ut-be)-rt),je=(Je=(Pe=z+xe*it)+xe*((Z=Q+xe*At)-Pe))+xe*(Z+xe*(se+xe*qe-Z)-Je),_e==0?(Fe=Ge,Ee=je,nt=Ge,Be=je):(Fe=Math.min(Fe,Ge),Ee=Math.min(Ee,je),nt=Math.max(nt,Ge),Be=Math.max(Be,je));return new c(Math.round(Fe),Math.round(Ee),Math.round(nt-Fe),Math.round(Be-Ee))},re=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var M,z,X=(M=this.ctx.lineDash,z=this.ctx.lineDashOffset,JSON.stringify({lineDash:M,lineDashOffset:z}));this.prevLineDash!==X&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=X)}}})(Qe.API),function(e){var t=function(l){var c,d,f,p,v,A,m,b,y,N;for(d=[],f=0,p=(l+=c="\0\0\0\0".slice(l.length%4||4)).length;p>f;f+=4)(v=(l.charCodeAt(f)<<24)+(l.charCodeAt(f+1)<<16)+(l.charCodeAt(f+2)<<8)+l.charCodeAt(f+3))!==0?(A=(v=((v=((v=((v=(v-(N=v%85))/85)-(y=v%85))/85)-(b=v%85))/85)-(m=v%85))/85)%85,d.push(A+33,m+33,b+33,y+33,N+33)):d.push(122);return function(C,L){for(var P=L;P>0;P--)C.pop()}(d,c.length),String.fromCharCode.apply(String,d)+"~>"},r=function(l){var c,d,f,p,v,A=String,m="length",b=255,y="charCodeAt",N="slice",C="replace";for(l[N](-2),l=l[N](0,-2)[C](/\s/g,"")[C]("z","!!!!!"),f=[],p=0,v=(l+=c="uuuuu"[N](l[m]%5||5))[m];v>p;p+=5)d=52200625*(l[y](p)-33)+614125*(l[y](p+1)-33)+7225*(l[y](p+2)-33)+85*(l[y](p+3)-33)+(l[y](p+4)-33),f.push(b&d>>24,b&d>>16,b&d>>8,b&d);return function(L,P){for(var D=P;D>0;D--)L.pop()}(f,c[m]),A.fromCharCode.apply(A,f)},n=function(l){return l.split("").map(function(c){return("0"+c.charCodeAt().toString(16)).slice(-2)}).join("")+">"},o=function(l){var c=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((l=l.replace(/\s/g,"")).indexOf(">")!==-1&&(l=l.substr(0,l.indexOf(">"))),l.length%2&&(l+="0"),c.test(l)===!1)return"";for(var d="",f=0;f<l.length;f+=2)d+=String.fromCharCode("0x"+(l[f]+l[f+1]));return d},s=function(l){for(var c=new Uint8Array(l.length),d=l.length;d--;)c[d]=l.charCodeAt(d);return(c=Dc(c)).reduce(function(f,p){return f+String.fromCharCode(p)},"")};e.processDataByFilters=function(l,c){var d=0,f=l||"",p=[];for(typeof(c=c||[])=="string"&&(c=[c]),d=0;d<c.length;d+=1)switch(c[d]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),p.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),p.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=o(f),p.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),p.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=s(f),p.push("/FlateDecode");break;default:throw new Error('The filter: "'+c[d]+'" is not implemented')}return{data:f,reverseChain:p.reverse().join(" ")}}}(Qe.API),function(e){e.loadFile=function(t,r,n){return function(o,s,l){s=s!==!1,l=typeof l=="function"?l:function(){};var c=void 0;try{c=function(d,f,p){var v=new XMLHttpRequest,A=0,m=function(b){var y=b.length,N=[],C=String.fromCharCode;for(A=0;A<y;A+=1)N.push(C(255&b.charCodeAt(A)));return N.join("")};if(v.open("GET",d,!f),v.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(v.onload=function(){v.status===200?p(m(this.responseText)):p(void 0)}),v.send(null),f&&v.status===200)return m(v.responseText)}(o,s,l)}catch{}return c}(t,r,n)},e.loadImageFile=e.loadFile}(Qe.API),function(e){function t(){return(ht.html2canvas?Promise.resolve(ht.html2canvas):D1(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load html2canvas: "+c))}).then(function(c){return c.default?c.default:c})}function r(){return(ht.DOMPurify?Promise.resolve(ht.DOMPurify):D1(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load dompurify: "+c))}).then(function(c){return c.default?c.default:c})}var n=function(c){var d=zt(c);return d==="undefined"?"undefined":d==="string"||c instanceof String?"string":d==="number"||c instanceof Number?"number":d==="function"||c instanceof Function?"function":c&&c.constructor===Array?"array":c&&c.nodeType===1?"element":d==="object"?"object":"unknown"},o=function(c,d){var f=document.createElement(c);for(var p in d.className&&(f.className=d.className),d.innerHTML&&d.dompurify&&(f.innerHTML=d.dompurify.sanitize(d.innerHTML)),d.style)f.style[p]=d.style[p];return f},s=function c(d,f){for(var p=d.nodeType===3?document.createTextNode(d.nodeValue):d.cloneNode(!1),v=d.firstChild;v;v=v.nextSibling)f!==!0&&v.nodeType===1&&v.nodeName==="SCRIPT"||p.appendChild(c(v,f));return d.nodeType===1&&(d.nodeName==="CANVAS"?(p.width=d.width,p.height=d.height,p.getContext("2d").drawImage(d,0,0)):d.nodeName!=="TEXTAREA"&&d.nodeName!=="SELECT"||(p.value=d.value),p.addEventListener("load",function(){p.scrollTop=d.scrollTop,p.scrollLeft=d.scrollLeft},!0)),p},l=function c(d){var f=Object.assign(c.convert(Promise.resolve()),JSON.parse(JSON.stringify(c.template))),p=c.convert(Promise.resolve(),f);return(p=p.setProgress(1,c,1,[c])).set(d)};(l.prototype=Object.create(Promise.prototype)).constructor=l,l.convert=function(c,d){return c.__proto__=d||l.prototype,c},l.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},l.prototype.from=function(c,d){return this.then(function(){switch(d=d||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(c),d){case"string":return this.then(r).then(function(f){return this.set({src:o("div",{innerHTML:c,dompurify:f})})});case"element":return this.set({src:c});case"canvas":return this.set({canvas:c});case"img":return this.set({img:c});default:return this.error("Unknown source type.")}})},l.prototype.to=function(c){switch(c){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},l.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var c={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},d=s(this.prop.src,this.opt.html2canvas.javascriptEnabled);d.tagName==="BODY"&&(c.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:c}),this.prop.container.appendChild(d),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},l.prototype.toCanvas=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(d){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,d(this.prop.container,f)}).then(function(d){(this.opt.html2canvas.onrendered||function(){})(d),this.prop.canvas=d,document.body.removeChild(this.prop.overlay)})},l.prototype.toContext2d=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(d){var f=this.opt.jsPDF,p=this.opt.fontFaces,v=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,A=Object.assign({async:!0,allowTaint:!0,scale:v,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete A.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=p,p)for(var m=0;m<p.length;++m){var b=p[m],y=b.src.find(function(N){return N.format==="truetype"});y&&f.addFont(y.url,b.ref.name,b.ref.style)}return A.windowHeight=A.windowHeight||0,A.windowHeight=A.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):A.windowHeight,f.context2d.save(!0),d(this.prop.container,A)}).then(function(d){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(d),this.prop.canvas=d,document.body.removeChild(this.prop.overlay)})},l.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var c=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=c})},l.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},l.prototype.output=function(c,d,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(c,d):this.outputPdf(c,d)},l.prototype.outputPdf=function(c,d){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(c,d)})},l.prototype.outputImg=function(c){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(c){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+c+'" is not supported.'}})},l.prototype.save=function(c){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(c?{filename:c}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},l.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},l.prototype.set=function(c){if(n(c)!=="object")return this;var d=Object.keys(c||{}).map(function(f){if(f in l.template.prop)return function(){this.prop[f]=c[f]};switch(f){case"margin":return this.setMargin.bind(this,c.margin);case"jsPDF":return function(){return this.opt.jsPDF=c.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,c.pageSize);default:return function(){this.opt[f]=c[f]}}},this);return this.then(function(){return this.thenList(d)})},l.prototype.get=function(c,d){return this.then(function(){var f=c in l.template.prop?this.prop[c]:this.opt[c];return d?d(f):f})},l.prototype.setMargin=function(c){return this.then(function(){switch(n(c)){case"number":c=[c,c,c,c];case"array":if(c.length===2&&(c=[c[0],c[1],c[0],c[1]]),c.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=c}).then(this.setPageSize)},l.prototype.setPageSize=function(c){function d(f,p){return Math.floor(f*p/72*96)}return this.then(function(){(c=c||Qe.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(c.inner={width:c.width-this.opt.margin[1]-this.opt.margin[3],height:c.height-this.opt.margin[0]-this.opt.margin[2]},c.inner.px={width:d(c.inner.width,c.k),height:d(c.inner.height,c.k)},c.inner.ratio=c.inner.height/c.inner.width),this.prop.pageSize=c})},l.prototype.setProgress=function(c,d,f,p){return c!=null&&(this.progress.val=c),d!=null&&(this.progress.state=d),f!=null&&(this.progress.n=f),p!=null&&(this.progress.stack=p),this.progress.ratio=this.progress.val/this.progress.state,this},l.prototype.updateProgress=function(c,d,f,p){return this.setProgress(c?this.progress.val+c:null,d||null,f?this.progress.n+f:null,p?this.progress.stack.concat(p):null)},l.prototype.then=function(c,d){var f=this;return this.thenCore(c,d,function(p,v){return f.updateProgress(null,null,1,[p]),Promise.prototype.then.call(this,function(A){return f.updateProgress(null,p),A}).then(p,v).then(function(A){return f.updateProgress(1),A})})},l.prototype.thenCore=function(c,d,f){f=f||Promise.prototype.then;var p=this;c&&(c=c.bind(p)),d&&(d=d.bind(p));var v=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?p:l.convert(Object.assign({},p),Promise.prototype),A=f.call(v,c,d);return l.convert(A,p.__proto__)},l.prototype.thenExternal=function(c,d){return Promise.prototype.then.call(this,c,d)},l.prototype.thenList=function(c){var d=this;return c.forEach(function(f){d=d.thenCore(f)}),d},l.prototype.catch=function(c){c&&(c=c.bind(this));var d=Promise.prototype.catch.call(this,c);return l.convert(d,this)},l.prototype.catchExternal=function(c){return Promise.prototype.catch.call(this,c)},l.prototype.error=function(c){return this.then(function(){throw new Error(c)})},l.prototype.using=l.prototype.set,l.prototype.saveAs=l.prototype.save,l.prototype.export=l.prototype.output,l.prototype.run=l.prototype.then,Qe.getPageSize=function(c,d,f){if(zt(c)==="object"){var p=c;c=p.orientation,d=p.unit||d,f=p.format||f}d=d||"mm",f=f||"a4",c=(""+(c||"P")).toLowerCase();var v,A=(""+f).toLowerCase(),m={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(d){case"pt":v=1;break;case"mm":v=72/25.4;break;case"cm":v=72/2.54;break;case"in":v=72;break;case"px":v=.75;break;case"pc":case"em":v=12;break;case"ex":v=6;break;default:throw"Invalid unit: "+d}var b,y=0,N=0;if(m.hasOwnProperty(A))y=m[A][1]/v,N=m[A][0]/v;else try{y=f[1],N=f[0]}catch{throw new Error("Invalid format: "+f)}if(c==="p"||c==="portrait")c="p",N>y&&(b=N,N=y,y=b);else{if(c!=="l"&&c!=="landscape")throw"Invalid orientation: "+c;c="l",y>N&&(b=N,N=y,y=b)}return{width:N,height:y,unit:d,k:v,orientation:c}},e.html=function(c,d){(d=d||{}).callback=d.callback||function(){},d.html2canvas=d.html2canvas||{},d.html2canvas.canvas=d.html2canvas.canvas||this.canvas,d.jsPDF=d.jsPDF||this,d.fontFaces=d.fontFaces?d.fontFaces.map(Q1):null;var f=new l(d);return d.worker?f:f.from(c).doCallback()}}(Qe.API),Qe.API.addJS=function(e){return $u=e,this.internal.events.subscribe("postPutResources",function(){_l=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(_l+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),Hu=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+$u+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){_l!==void 0&&Hu!==void 0&&this.internal.out("/Names <</JavaScript "+_l+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var o=r.outline.render().split(/\r\n/),s=0;s<o.length;s++){var l=o[s],c=n.exec(l);if(c!=null){var d=c[1];r.internal.newObjectDeferredBegin(d,!1)}r.internal.write(l)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,p=[];for(s=0;s<f;s++){var v=r.internal.newObject();p.push(v);var A=r.internal.getPageInfo(s+1);r.internal.write("<< /D["+A.objId+" 0 R /XYZ null null null]>> endobj")}var m=r.internal.newObject();for(r.internal.write("<< /Names [ "),s=0;s<p.length;s++)r.internal.write("(page_"+(s+1)+")"+p[s]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+m+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,o,s){var l={title:o,options:s,children:[]};return n==null&&(n=this.root),n.children.push(l),l},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var o=0;o<n.children.length;o++)this.genIds_r(n.children[o])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var o=this.ctx.pdf.internal.getVerticalCoordinateString,s=0;s<n.children.length;s++){var l=n.children[s];this.objStart(l),this.line("/Title "+this.makeString(l.title)),this.line("/Parent "+this.makeRef(n)),s>0&&this.line("/Prev "+this.makeRef(n.children[s-1])),s<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[s+1])),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1])));var c=this.count=this.count_r({count:0},l);if(c>0&&this.line("/Count "+c),l.options&&l.options.pageNumber){var d=r.internal.getPageInfo(l.options.pageNumber);this.line("/Dest ["+d.objId+" 0 R /XYZ 0 "+o(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,o){for(var s=0;s<o.children.length;s++)n.count++,this.count_r(n,o.children[s]);return n.count}}])}(Qe.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,o,s,l,c){var d,f=this.decode.DCT_DECODE,p=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=l||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,d=function(v){for(var A,m=256*v.charCodeAt(4)+v.charCodeAt(5),b=v.length,y={width:0,height:0,numcomponents:1},N=4;N<b;N+=2){if(N+=m,t.indexOf(v.charCodeAt(N+1))!==-1){A=256*v.charCodeAt(N+5)+v.charCodeAt(N+6),y={width:256*v.charCodeAt(N+7)+v.charCodeAt(N+8),height:A,numcomponents:v.charCodeAt(N+9)};break}m=256*v.charCodeAt(N+2)+v.charCodeAt(N+3)}return y}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),d.numcomponents){case 1:c=this.color_spaces.DEVICE_GRAY;break;case 4:c=this.color_spaces.DEVICE_CMYK;break;case 3:c=this.color_spaces.DEVICE_RGB}p={data:r,width:d.width,height:d.height,colorSpace:c,bitsPerComponent:8,filter:f,index:n,alias:o}}return p}}(Qe.API),Qe.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var o,s=s9(e,{checkCrc:!0}),l=s.width,c=s.height,d=s.channels,f=s.palette,p=s.depth;o=f&&d===1?function(W){for(var E=W.width,J=W.height,S=W.data,T=W.palette,q=W.depth,$=!1,ne=[],ce=[],pe=void 0,ae=!1,ve=0,we=0;we<T.length;we++){var re=G2(T[we],4),M=re[0],z=re[1],X=re[2],Q=re[3];ne.push(M,z,X),Q!=null&&(Q===0?(ve++,ce.length<1&&ce.push(we)):Q<255&&(ae=!0))}if(ae||ve>1){$=!0,ce=void 0;var ee=E*J;pe=new Uint8Array(ee);for(var se=new DataView(S.buffer),fe=0;fe<ee;fe++){var ie=tc(se,fe,q),xe=G2(T[ie],4)[3];pe[fe]=xe}}else ve===0&&(ce=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:$?8:void 0,colorBytes:S,alphaBytes:pe,needSMask:$,palette:ne,mask:ce}}(s):d===2||d===4?function(W){for(var E=W.data,J=W.width,S=W.height,T=W.channels,q=W.depth,$=T===2?"DeviceGray":"DeviceRGB",ne=T-1,ce=J*S,pe=ne,ae=ce*pe,ve=1*ce,we=Math.ceil(ae*q/8),re=Math.ceil(ve*q/8),M=new Uint8Array(we),z=new Uint8Array(re),X=new DataView(E.buffer),Q=new DataView(M.buffer),ee=new DataView(z.buffer),se=!1,fe=0;fe<ce;fe++){for(var ie=fe*T,xe=0;xe<pe;xe++)Ku(Q,tc(X,ie+xe,q),fe*pe+xe,q);var _e=tc(X,ie+pe,q);_e<(1<<q)-1&&(se=!0),Ku(ee,_e,1*fe,q)}return{colorSpace:$,colorsPerPixel:ne,sMaskBitsPerComponent:se?q:void 0,colorBytes:M,alphaBytes:z,needSMask:se}}(s):function(W){var E=W.data,J=W.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:J,colorsPerPixel:J==="DeviceGray"?1:3,colorBytes:E instanceof Uint16Array?function(S){for(var T=S.length,q=new Uint8Array(2*T),$=new DataView(q.buffer,q.byteOffset,q.byteLength),ne=0;ne<T;ne++)$.setUint16(2*ne,S[ne],!1);return q}(E):E,needSMask:!1}}(s);var v,A,m,b=o,y=b.colorSpace,N=b.colorsPerPixel,C=b.sMaskBitsPerComponent,L=b.colorBytes,P=b.alphaBytes,D=b.needSMask,U=b.palette,H=b.mask,K=null;return n!==Qe.API.image_compression.NONE&&typeof Dc=="function"?(K=function(W){var E;switch(W){case Qe.API.image_compression.FAST:E=11;break;case Qe.API.image_compression.MEDIUM:E=13;break;case Qe.API.image_compression.SLOW:E=14;break;default:E=12}return E}(n),v=this.decode.FLATE_DECODE,A="/Predictor ".concat(K," /Colors ").concat(N," /BitsPerComponent ").concat(p," /Columns ").concat(l),e=Gu(L,Math.ceil(l*N*p/8),N,p,n),D&&(m=Gu(P,Math.ceil(l*C/8),1,C,n))):(v=void 0,A=void 0,e=L,D&&(m=P)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(m&&this.__addimage__.isArrayBuffer(m)||this.__addimage__.isArrayBufferView(m))&&(m=this.__addimage__.arrayBufferToBinaryString(m)),{alias:r,data:e,index:t,filter:v,decodeParameters:A,transparency:H,palette:U,sMask:m,predictor:K,width:l,height:c,bitsPerComponent:p,sMaskBitsPerComponent:C,colorSpace:y}}},function(e){e.processGIF89A=function(t,r,n,o){var s=new N9(t),l=s.width,c=s.height,d=[];s.decodeAndBlitFrameRGBA(0,d);var f={data:d,width:l,height:c},p=new rc(100).encode(f,100);return e.processJPEG.call(this,p,r,n,o)},e.processGIF87A=e.processGIF89A}(Qe.API),Yn.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:o,green:n,blue:r,quad:s}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Yn.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){$t.log("bit decode error:"+r)}},Yn.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,o=0;o<t;o++)for(var s=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+8*o*4,c=0;c<8&&8*o+c<this.width;c++){var d=this.palette[s>>7-c&1];this.data[l+4*c]=d.blue,this.data[l+4*c+1]=d.green,this.data[l+4*c+2]=d.red,this.data[l+4*c+3]=255}r!==0&&(this.pos+=4-r)}},Yn.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<e;o++){var s=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+2*o*4,c=s>>4,d=15&s,f=this.palette[c];if(this.data[l]=f.blue,this.data[l+1]=f.green,this.data[l+2]=f.red,this.data[l+3]=255,2*o+1>=this.width)break;f=this.palette[d],this.data[l+4]=f.blue,this.data[l+4+1]=f.green,this.data[l+4+2]=f.red,this.data[l+4+3]=255}t!==0&&(this.pos+=4-t)}},Yn.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var o=this.datav.getUint8(this.pos++,!0),s=r*this.width*4+4*n;if(o<this.palette.length){var l=this.palette[o];this.data[s]=l.red,this.data[s+1]=l.green,this.data[s+2]=l.blue,this.data[s+3]=255}else this.data[s]=255,this.data[s+1]=255,this.data[s+2]=255,this.data[s+3]=255}e!==0&&(this.pos+=4-e)}},Yn.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var s=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(s&t)/t*255|0,c=(s>>5&t)/t*255|0,d=(s>>10&t)/t*255|0,f=s>>15?255:0,p=n*this.width*4+4*o;this.data[p]=d,this.data[p+1]=c,this.data[p+2]=l,this.data[p+3]=f}this.pos+=e}},Yn.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var o=this.bottom_up?n:this.height-1-n,s=0;s<this.width;s++){var l=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(l&t)/t*255|0,d=(l>>5&r)/r*255|0,f=(l>>11)/t*255|0,p=o*this.width*4+4*s;this.data[p]=f,this.data[p+1]=d,this.data[p+2]=c,this.data[p+3]=255}this.pos+=e}},Yn.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=s,this.data[l+1]=o,this.data[l+2]=n,this.data[l+3]=255}this.pos+=this.width%4}},Yn.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=s,this.data[c+1]=o,this.data[c+2]=n,this.data[c+3]=l}},Yn.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,o){var s=new Yn(t,!1),l=s.width,c=s.height,d={data:s.getData(),width:l,height:c},f=new rc(100).encode(d,100);return e.processJPEG.call(this,f,r,n,o)}}(Qe.API),ed.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,o){var s=new ed(t),l=s.width,c=s.height,d={data:s.getData(),width:l,height:c},f=new rc(100).encode(d,100);return e.processJPEG.call(this,f,r,n,o)}}(Qe.API),Qe.API.processRGBA=function(e,t,r){for(var n=e.data,o=n.length,s=new Uint8Array(o/4*3),l=new Uint8Array(o/4),c=0,d=0,f=0;f<o;f+=4){var p=n[f],v=n[f+1],A=n[f+2],m=n[f+3];s[c++]=p,s[c++]=v,s[c++]=A,l[d++]=m}var b=this.__addimage__.arrayBufferToBinaryString(s);return{alpha:this.__addimage__.arrayBufferToBinaryString(l),data:b,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},Qe.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},_a=Qe.API,Cl=_a.getCharWidthsArray=function(e,t){var r,n,o=(t=t||{}).font||this.internal.getFont(),s=t.fontSize||this.internal.getFontSize(),l=t.charSpace||this.internal.getCharSpace(),c=t.widths?t.widths:o.metadata.Unicode.widths,d=c.fof?c.fof:1,f=t.kerning?t.kerning:o.metadata.Unicode.kerning,p=f.fof?f.fof:1,v=t.doKerning!==!1,A=0,m=e.length,b=0,y=c[0]||d,N=[];for(r=0;r<m;r++)n=e.charCodeAt(r),typeof o.metadata.widthOfString=="function"?N.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(n))+l*(1e3/s)||0)/1e3):(A=v&&zt(f[n])==="object"&&!isNaN(parseInt(f[n][b],10))?f[n][b]/p:0,N.push((c[n]||y)/d+A)),b=n;return N},qu=_a.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),o=t.charSpace||this.internal.getCharSpace();return _a.processArabic&&(e=_a.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,o)/r:Cl.apply(this,arguments).reduce(function(s,l){return s+l},0)},Vu=function(e,t,r,n){for(var o=[],s=0,l=e.length,c=0;s!==l&&c+t[s]<r;)c+=t[s],s++;o.push(e.slice(0,s));var d=s;for(c=0;s!==l;)c+t[s]>n&&(o.push(e.slice(d,s)),c=0,d=s),c+=t[s],s++;return d!==s&&o.push(e.slice(d,s)),o},Yu=function(e,t,r){r||(r={});var n,o,s,l,c,d,f,p=[],v=[p],A=r.textIndent||0,m=0,b=0,y=e.split(" "),N=Cl.apply(this,[" ",r])[0];if(d=r.lineIndent===-1?y[0].length+2:r.lineIndent||0){var C=Array(d).join(" "),L=[];y.map(function(D){(D=D.split(/\s*\n/)).length>1?L=L.concat(D.map(function(U,H){return(H&&U.length?`
`:"")+U})):L.push(D[0])}),y=L,d=qu.apply(this,[C,r])}for(s=0,l=y.length;s<l;s++){var P=0;if(n=y[s],d&&n[0]==`
`&&(n=n.substr(1),P=1),A+m+(b=(o=Cl.apply(this,[n,r])).reduce(function(D,U){return D+U},0))>t||P){if(b>t){for(c=Vu.apply(this,[n,o,t-(A+m),t]),p.push(c.shift()),p=[c.pop()];c.length;)v.push([c.shift()]);b=o.slice(n.length-(p[0]?p[0].length:0)).reduce(function(D,U){return D+U},0)}else p=[n];v.push(p),A=b+d,m=N}else p.push(n),A+=m+b,m=N}return f=d?function(D,U){return(U?C:"")+D.join(" ")}:function(D){return D.join(" ")},v.map(f)},_a.splitTextToSize=function(e,t,r){var n,o=(r=r||{}).fontSize||this.internal.getFontSize(),s=(function(p){if(p.widths&&p.kerning)return{widths:p.widths,kerning:p.kerning};var v=this.internal.getFont(p.fontName,p.fontStyle),A="Unicode";return v.metadata[A]?{widths:v.metadata[A].widths||{0:1},kerning:v.metadata[A].kerning||{}}:{font:v.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var l=1*this.internal.scaleFactor*t/o;s.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0,s.lineIndent=r.lineIndent;var c,d,f=[];for(c=0,d=n.length;c<d;c++)f=f.concat(Yu.apply(this,[n[c],l,s]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},o={},s=0;s<16;s++)n[r[s]]=t[s],o[t[s]]=r[s];var l=function(A){return"0x"+parseInt(A,10).toString(16)},c=e.__fontmetrics__.compress=function(A){var m,b,y,N,C=["{"];for(var L in A){if(m=A[L],isNaN(parseInt(L,10))?b="'"+L+"'":(L=parseInt(L,10),b=(b=l(L).slice(2)).slice(0,-1)+o[b.slice(-1)]),typeof m=="number")m<0?(y=l(m).slice(3),N="-"):(y=l(m).slice(2),N=""),y=N+y.slice(0,-1)+o[y.slice(-1)];else{if(zt(m)!=="object")throw new Error("Don't know what to do with value type "+zt(m)+".");y=c(m)}C.push(b+y)}return C.push("}"),C.join("")},d=e.__fontmetrics__.uncompress=function(A){if(typeof A!="string")throw new Error("Invalid argument passed to uncompress.");for(var m,b,y,N,C={},L=1,P=C,D=[],U="",H="",K=A.length-1,W=1;W<K;W+=1)(N=A[W])=="'"?m?(y=m.join(""),m=void 0):m=[]:m?m.push(N):N=="{"?(D.push([P,y]),P={},y=void 0):N=="}"?((b=D.pop())[0][b[1]]=P,y=void 0,P=b[0]):N=="-"?L=-1:y===void 0?n.hasOwnProperty(N)?(U+=n[N],y=parseInt(U,16)*L,L=1,U=""):U+=N:n.hasOwnProperty(N)?(H+=n[N],P[y]=parseInt(H,16)*L,L=1,y=void 0,H=""):H+=N;return C},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:d("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},p={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},v={Unicode:{"Courier-Oblique":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":d("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":d("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":d("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:d("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:d("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":d("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:d("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":d("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":d("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":d("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(A){var m=A.font,b=v.Unicode[m.postScriptName];b&&(m.metadata.Unicode={},m.metadata.Unicode.widths=b.widths,m.metadata.Unicode.kerning=b.kerning);var y=p.Unicode[m.postScriptName];y&&(m.metadata.Unicode.encoding=y,m.encoding=y.codePages[0])}])}(Qe.API),function(e){var t=function(r){for(var n=r.length,o=new Uint8Array(n),s=0;s<n;s++)o[s]=r.charCodeAt(s);return o};e.API.events.push(["addFont",function(r){var n=void 0,o=r.font,s=r.instance;if(!o.isStandardFont){if(s===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");if(typeof(n=s.existsFileInVFS(o.postScriptName)===!1?s.loadFile(o.postScriptName):s.getFileFromVFS(o.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");(function(l,c){c=/^\x00\x01\x00\x00/.test(c)?t(c):t(Fl(c)),l.metadata=e.API.TTFFont.open(c),l.metadata.Unicode=l.metadata.Unicode||{encoding:{},kerning:{},widths:[]},l.metadata.glyIdsUsed=[0]})(o,n)}}])}(Qe),Qe.API.addSvgAsImage=function(e,t,r,n,o,s,l,c){if(isNaN(t)||isNaN(r))throw $t.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw $t.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var d=document.createElement("canvas");d.width=n,d.height=o;var f=d.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,d.width,d.height);var p={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},v=this;return(ht.canvg?Promise.resolve(ht.canvg):D1(()=>import("./index.es.eLSDR91f.js"),__vite__mapDeps([0,1,2,3]))).catch(function(A){return Promise.reject(new Error("Could not load canvg: "+A))}).then(function(A){return A.default?A.default:A}).then(function(A){return A.fromString(f,e,p)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(A){return A.render(p)}).then(function(){v.addImage(d.toDataURL("image/jpeg",1),t,r,n,o,l,c)})},Qe.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var o=0;o<this.internal.pages[n].length;o++)this.internal.pages[n][o]=this.internal.pages[n][o].replace(t,r);return this},Qe.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,o,s,l={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(l),d=[],f=0,p=0,v=0;function A(b,y){var N,C=!1;for(N=0;N<b.length;N+=1)b[N]===y&&(C=!0);return C}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(l)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var m=c.length;for(v=0;v<m;v+=1)r[c[v]].value=r[c[v]].defaultValue,r[c[v]].explicitSet=!1}if(zt(e)==="object"){for(o in e)if(s=e[o],A(c,o)&&s!==void 0){if(r[o].type==="boolean"&&typeof s=="boolean")r[o].value=s;else if(r[o].type==="name"&&A(r[o].valueSet,s))r[o].value=s;else if(r[o].type==="integer"&&Number.isInteger(s))r[o].value=s;else if(r[o].type==="array"){for(f=0;f<s.length;f+=1)if(n=!0,s[f].length===1&&typeof s[f][0]=="number")d.push(String(s[f]-1));else if(s[f].length>1){for(p=0;p<s[f].length;p+=1)typeof s[f][p]!="number"&&(n=!1);n===!0&&d.push([s[f][0]-1,s[f][1]-1].join(" "))}r[o].value="["+d.join(" ")+"]"}else r[o].value=r[o].defaultValue;r[o].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var b,y=[];for(b in r)r[b].explicitSet===!0&&(r[b].type==="name"?y.push("/"+b+" /"+r[b].value):y.push("/"+b+" "+r[b].value));y.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+y.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',o=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),s=unescape(encodeURIComponent(n)),l=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),c=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),d=unescape(encodeURIComponent("</x:xmpmeta>")),f=s.length+l.length+c.length+o.length+d.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(o+s+l+c+d),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,o){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:o||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(Qe.API),function(e){var t=e.API,r=t.pdfEscape16=function(s,l){for(var c,d=l.metadata.Unicode.widths,f=["","0","00","000","0000"],p=[""],v=0,A=s.length;v<A;++v){if(c=l.metadata.characterToGlyph(s.charCodeAt(v)),l.metadata.glyIdsUsed.push(c),l.metadata.toUnicode[c]=s.charCodeAt(v),d.indexOf(c)==-1&&(d.push(c),d.push([parseInt(l.metadata.widthOfGlyph(c),10)])),c=="0")return p.join("");c=c.toString(16),p.push(f[4-c.length],c)}return p.join("")},n=function(s){var l,c,d,f,p,v,A;for(p=`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,d=[],v=0,A=(c=Object.keys(s).sort(function(m,b){return m-b})).length;v<A;v++)l=c[v],d.length>=100&&(p+=`
`+d.length+` beginbfchar
`+d.join(`
`)+`
endbfchar`,d=[]),s[l]!==void 0&&s[l]!==null&&typeof s[l].toString=="function"&&(f=("0000"+s[l].toString(16)).slice(-4),l=("0000"+(+l).toString(16)).slice(-4),d.push("<"+l+"><"+f+">"));return d.length&&(p+=`
`+d.length+` beginbfchar
`+d.join(`
`)+`
endbfchar
`),p+`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};t.events.push(["putFont",function(s){(function(l){var c=l.font,d=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="Identity-H"){for(var v=c.metadata.Unicode.widths,A=c.metadata.subset.encode(c.metadata.glyIdsUsed,1),m="",b=0;b<A.length;b++)m+=String.fromCharCode(A[b]);var y=f();p({data:m,addLength1:!0,objectId:y}),d("endobj");var N=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:N}),d("endobj");var C=f();d("<<"),d("/Type /FontDescriptor"),d("/FontName /"+Ma(c.fontName)),d("/FontFile2 "+y+" 0 R"),d("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),d("/Flags "+c.metadata.flags),d("/StemV "+c.metadata.stemV),d("/ItalicAngle "+c.metadata.italicAngle),d("/Ascent "+c.metadata.ascender),d("/Descent "+c.metadata.decender),d("/CapHeight "+c.metadata.capHeight),d(">>"),d("endobj");var L=f();d("<<"),d("/Type /Font"),d("/BaseFont /"+Ma(c.fontName)),d("/FontDescriptor "+C+" 0 R"),d("/W "+e.API.PDFObject.convert(v)),d("/CIDToGIDMap /Identity"),d("/DW 1000"),d("/Subtype /CIDFontType2"),d("/CIDSystemInfo"),d("<<"),d("/Supplement 0"),d("/Registry (Adobe)"),d("/Ordering ("+c.encoding+")"),d(">>"),d(">>"),d("endobj"),c.objectNumber=f(),d("<<"),d("/Type /Font"),d("/Subtype /Type0"),d("/ToUnicode "+N+" 0 R"),d("/BaseFont /"+Ma(c.fontName)),d("/Encoding /"+c.encoding),d("/DescendantFonts ["+L+" 0 R]"),d(">>"),d("endobj"),c.isAlreadyPutted=!0}})(s)}]),t.events.push(["putFont",function(s){(function(l){var c=l.font,d=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="WinAnsiEncoding"){for(var v=c.metadata.rawData,A="",m=0;m<v.length;m++)A+=String.fromCharCode(v[m]);var b=f();p({data:A,addLength1:!0,objectId:b}),d("endobj");var y=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:y}),d("endobj");var N=f();d("<<"),d("/Descent "+c.metadata.decender),d("/CapHeight "+c.metadata.capHeight),d("/StemV "+c.metadata.stemV),d("/Type /FontDescriptor"),d("/FontFile2 "+b+" 0 R"),d("/Flags 96"),d("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),d("/FontName /"+Ma(c.fontName)),d("/ItalicAngle "+c.metadata.italicAngle),d("/Ascent "+c.metadata.ascender),d(">>"),d("endobj"),c.objectNumber=f();for(var C=0;C<c.metadata.hmtx.widths.length;C++)c.metadata.hmtx.widths[C]=parseInt(c.metadata.hmtx.widths[C]*(1e3/c.metadata.head.unitsPerEm));d("<</Subtype/TrueType/Type/Font/ToUnicode "+y+" 0 R/BaseFont/"+Ma(c.fontName)+"/FontDescriptor "+N+" 0 R/Encoding/"+c.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(c.metadata.hmtx.widths)+">>"),d("endobj"),c.isAlreadyPutted=!0}})(s)}]);var o=function(s){var l,c=s.text||"",d=s.x,f=s.y,p=s.options||{},v=s.mutex||{},A=v.pdfEscape,m=v.activeFontKey,b=v.fonts,y=m,N="",C=0,L="",P=b[y].encoding;if(b[y].encoding!=="Identity-H")return{text:c,x:d,y:f,options:p,mutex:v};for(L=c,y=m,Array.isArray(c)&&(L=c[0]),C=0;C<L.length;C+=1)b[y].metadata.hasOwnProperty("cmap")&&(l=b[y].metadata.cmap.unicode.codeMap[L[C].charCodeAt(0)]),l||L[C].charCodeAt(0)<256&&b[y].metadata.hasOwnProperty("Unicode")?N+=L[C]:N+="";var D="";return parseInt(y.slice(1))<14||P==="WinAnsiEncoding"?D=A(N,y).split("").map(function(U){return U.charCodeAt(0).toString(16)}).join(""):P==="Identity-H"&&(D=r(N,b[y])),v.isHex=!0,{text:D,x:d,y:f,options:p,mutex:v}};t.events.push(["postProcessText",function(s){var l=s.text||"",c=[],d={text:l,x:s.x,y:s.y,options:s.options,mutex:s.mutex};if(Array.isArray(l)){var f=0;for(f=0;f<l.length;f+=1)Array.isArray(l[f])&&l[f].length===3?c.push([o(Object.assign({},d,{text:l[f][0]})).text,l[f][1],l[f][2]]):c.push(o(Object.assign({},d,{text:l[f]})).text);s.text=c}else s.text=o(Object.assign({},d,{text:l})).text}])}(Qe),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Qe.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var o,s,l,c,d,f,p,v=t,A=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],m=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],b={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},y={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},N=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],C=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),L=!1,P=0;this.__bidiEngine__={};var D=function(S){var T=S.charCodeAt(),q=T>>8,$=y[q];return $!==void 0?v[256*$+(255&T)]:q===252||q===253?"AL":C.test(q)?"L":q===8?"R":"N"},U=function(S){for(var T,q=0;q<S.length;q++){if((T=D(S.charAt(q)))==="L")return!1;if(T==="R")return!0}return!1},H=function(S,T,q,$){var ne,ce,pe,ae,ve=T[$];switch(ve){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":L=!1;break;case"N":case"AN":break;case"EN":L&&(ve="AN");break;case"AL":L=!0,ve="R";break;case"WS":case"BN":ve="N";break;case"CS":$<1||$+1>=T.length||(ne=q[$-1])!=="EN"&&ne!=="AN"||(ce=T[$+1])!=="EN"&&ce!=="AN"?ve="N":L&&(ce="AN"),ve=ce===ne?ce:"N";break;case"ES":ve=(ne=$>0?q[$-1]:"B")==="EN"&&$+1<T.length&&T[$+1]==="EN"?"EN":"N";break;case"ET":if($>0&&q[$-1]==="EN"){ve="EN";break}if(L){ve="N";break}for(pe=$+1,ae=T.length;pe<ae&&T[pe]==="ET";)pe++;ve=pe<ae&&T[pe]==="EN"?"EN":"N";break;case"NSM":if(l&&!c){for(ae=T.length,pe=$+1;pe<ae&&T[pe]==="NSM";)pe++;if(pe<ae){var we=S[$],re=we>=1425&&we<=2303||we===64286;if(ne=T[pe],re&&(ne==="R"||ne==="AL")){ve="R";break}}}ve=$<1||(ne=T[$-1])==="B"?"N":q[$-1];break;case"B":L=!1,o=!0,ve=P;break;case"S":s=!0,ve="N"}return ve},K=function(S,T,q){var $=S.split("");return q&&W($,q,{hiLevel:P}),$.reverse(),T&&T.reverse(),$.join("")},W=function(S,T,q){var $,ne,ce,pe,ae,ve=-1,we=S.length,re=0,M=[],z=P?m:A,X=[];for(L=!1,o=!1,s=!1,ne=0;ne<we;ne++)X[ne]=D(S[ne]);for(ce=0;ce<we;ce++){if(ae=re,M[ce]=H(S,X,M,ce),$=240&(re=z[ae][b[M[ce]]]),re&=15,T[ce]=pe=z[re][5],$>0)if($===16){for(ne=ve;ne<ce;ne++)T[ne]=1;ve=-1}else ve=-1;if(z[re][6])ve===-1&&(ve=ce);else if(ve>-1){for(ne=ve;ne<ce;ne++)T[ne]=pe;ve=-1}X[ce]==="B"&&(T[ce]=0),q.hiLevel|=pe}s&&function(Q,ee,se){for(var fe=0;fe<se;fe++)if(Q[fe]==="S"){ee[fe]=P;for(var ie=fe-1;ie>=0&&Q[ie]==="WS";ie--)ee[ie]=P}}(X,T,we)},E=function(S,T,q,$,ne){if(!(ne.hiLevel<S)){if(S===1&&P===1&&!o)return T.reverse(),void(q&&q.reverse());for(var ce,pe,ae,ve,we=T.length,re=0;re<we;){if($[re]>=S){for(ae=re+1;ae<we&&$[ae]>=S;)ae++;for(ve=re,pe=ae-1;ve<pe;ve++,pe--)ce=T[ve],T[ve]=T[pe],T[pe]=ce,q&&(ce=q[ve],q[ve]=q[pe],q[pe]=ce);re=ae}re++}}},J=function(S,T,q){var $=S.split(""),ne={hiLevel:P};return q||(q=[]),W($,q,ne),function(ce,pe,ae){if(ae.hiLevel!==0&&p)for(var ve,we=0;we<ce.length;we++)pe[we]===1&&(ve=N.indexOf(ce[we]))>=0&&(ce[we]=N[ve+1])}($,q,ne),E(2,$,T,q,ne),E(1,$,T,q,ne),$.join("")};return this.__bidiEngine__.doBidiReorder=function(S,T,q){if(function(ne,ce){if(ce)for(var pe=0;pe<ne.length;pe++)ce[pe]=pe;c===void 0&&(c=U(ne)),f===void 0&&(f=U(ne))}(S,T),l||!d||f)if(l&&d&&c^f)P=c?1:0,S=K(S,T,q);else if(!l&&d&&f)P=c?1:0,S=J(S,T,q),S=K(S,T);else if(!l||c||d||f){if(l&&!d&&c^f)S=K(S,T),c?(P=0,S=J(S,T,q)):(P=1,S=J(S,T,q),S=K(S,T));else if(l&&c&&!d&&f)P=1,S=J(S,T,q),S=K(S,T);else if(!l&&!d&&c^f){var $=p;c?(P=1,S=J(S,T,q),P=0,p=!1,S=J(S,T,q),p=$):(P=0,S=J(S,T,q),S=K(S,T),P=1,p=!1,S=J(S,T,q),p=$,S=K(S,T))}}else P=0,S=J(S,T,q);else P=c?1:0,S=J(S,T,q);return S},this.__bidiEngine__.setOptions=function(S){S&&(l=S.isInputVisual,d=S.isOutputVisual,c=S.isInputRtl,f=S.isOutputRtl,p=S.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var o=n.text;n.x,n.y;var s=n.options||{};n.mutex,s.lang;var l=[];if(s.isInputVisual=typeof s.isInputVisual!="boolean"||s.isInputVisual,r.setOptions(s),Object.prototype.toString.call(o)==="[object Array]"){var c=0;for(l=[],c=0;c<o.length;c+=1)Object.prototype.toString.call(o[c])==="[object Array]"?l.push([r.doBidiReorder(o[c][0]),o[c][1],o[c][2]]):l.push([r.doBidiReorder(o[c])]);n.text=l}else n.text=r.doBidiReorder(o);r.setOptions({isInputVisual:!0})}])}(Qe),Qe.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new Ao(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new $9(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new j9(this.contents),this.head=new L9(this),this.name=new R9(this),this.cmap=new Lf(this),this.toUnicode={},this.hhea=new P9(this),this.maxp=new O9(this),this.hmtx=new F9(this),this.post=new E9(this),this.os2=new T9(this),this.loca=new H9(this),this.glyf=new z9(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,o,s;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var l,c,d,f;for(f=[],l=0,c=(d=this.bbox).length;l<c;l++)t=d[l],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(o=this.post.italic_angle),32768&(r=o>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(s=this.familyClass)===1||s===2||s===3||s===4||s===5||s===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var o,s,l,c;for(l=0,s=0,c=(t=""+t).length;0<=c?s<c:s>c;s=0<=c?++s:--s)o=t.charCodeAt(s),l+=this.widthOfGlyph(this.characterToGlyph(o))+n*(1e3/r)||0;return l*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var Kn,Ao=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,o;for(o=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)o.push(this.writeByte(t.charCodeAt(r)));return o},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,o,s,l,c,d;return t=this.readByte(),r=this.readByte(),n=this.readByte(),o=this.readByte(),s=this.readByte(),l=this.readByte(),c=this.readByte(),d=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^o)+16777216*(255^s)+65536*(255^l)+256*(255^c)+(255^d)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*o+16777216*s+65536*l+256*c+d},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,o,s;for(s=[],n=0,o=t.length;n<o;n++)r=t[n],s.push(this.writeByte(r));return s},e}(),j9=function(){var e;function t(r){var n,o,s;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},o=0,s=this.tableCount;0<=s?o<s:o>s;o=0<=s?++o:--o)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,o,s,l,c,d,f,p,v,A,m,b,y;for(y in m=Object.keys(r).length,d=Math.log(2),v=16*Math.floor(Math.log(m)/d),l=Math.floor(v/d),p=16*m-v,(o=new Ao).writeInt(this.scalarType),o.writeShort(m),o.writeShort(v),o.writeShort(l),o.writeShort(p),s=16*m,f=o.pos+s,c=null,b=[],r)for(A=r[y],o.writeString(y),o.writeInt(e(A)),o.writeInt(f),o.writeInt(A.length),b=b.concat(A),y==="head"&&(c=f),f+=A.length;f%4;)b.push(0),f++;return o.write(b),n=2981146554-e(o.data),o.pos=c+8,o.writeUInt32(n),o.data},e=function(r){var n,o,s,l;for(r=Pf.call(r);r.length%4;)r.push(0);for(s=new Ao(r),o=0,n=0,l=r.length;n<l;n=n+=4)o+=s.readUInt32();return 4294967295&o},t}(),I9={}.hasOwnProperty,bi=function(e,t){for(var r in t)I9.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};Kn=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var L9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new Ao).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),td=function(){function e(t,r){var n,o,s,l,c,d,f,p,v,A,m,b,y,N,C,L,P;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),v=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(d=0;d<256;++d)this.codeMap[d]=t.readByte();break;case 4:for(m=t.readUInt16(),A=m/2,t.pos+=6,s=function(){var D,U;for(U=[],d=D=0;0<=A?D<A:D>A;d=0<=A?++D:--D)U.push(t.readUInt16());return U}(),t.pos+=2,y=function(){var D,U;for(U=[],d=D=0;0<=A?D<A:D>A;d=0<=A?++D:--D)U.push(t.readUInt16());return U}(),f=function(){var D,U;for(U=[],d=D=0;0<=A?D<A:D>A;d=0<=A?++D:--D)U.push(t.readUInt16());return U}(),p=function(){var D,U;for(U=[],d=D=0;0<=A?D<A:D>A;d=0<=A?++D:--D)U.push(t.readUInt16());return U}(),o=(this.length-t.pos+this.offset)/2,c=function(){var D,U;for(U=[],d=D=0;0<=o?D<o:D>o;d=0<=o?++D:--D)U.push(t.readUInt16());return U}(),d=C=0,P=s.length;C<P;d=++C)for(N=s[d],n=L=b=y[d];b<=N?L<=N:L>=N;n=b<=N?++L:--L)p[d]===0?l=n+f[d]:(l=c[p[d]/2+(n-b)-(A-d)]||0)!==0&&(l+=f[d]),this.codeMap[n]=65535&l}t.pos=v}return e.encode=function(t,r){var n,o,s,l,c,d,f,p,v,A,m,b,y,N,C,L,P,D,U,H,K,W,E,J,S,T,q,$,ne,ce,pe,ae,ve,we,re,M,z,X,Q,ee,se,fe,ie,xe,_e,Le;switch($=new Ao,l=Object.keys(t).sort(function(Pe,be){return Pe-be}),r){case"macroman":for(y=0,N=function(){var Pe=[];for(b=0;b<256;++b)Pe.push(0);return Pe}(),L={0:0},s={},ne=0,ve=l.length;ne<ve;ne++)L[ie=t[o=l[ne]]]==null&&(L[ie]=++y),s[o]={old:t[o],new:L[t[o]]},N[o]=L[t[o]];return $.writeUInt16(1),$.writeUInt16(0),$.writeUInt32(12),$.writeUInt16(0),$.writeUInt16(262),$.writeUInt16(0),$.write(N),{charMap:s,subtable:$.data,maxGlyphID:y+1};case"unicode":for(T=[],v=[],P=0,L={},n={},C=f=null,ce=0,we=l.length;ce<we;ce++)L[U=t[o=l[ce]]]==null&&(L[U]=++P),n[o]={old:U,new:L[U]},c=L[U]-o,C!=null&&c===f||(C&&v.push(C),T.push(o),f=c),C=o;for(C&&v.push(C),v.push(65535),T.push(65535),J=2*(E=T.length),W=2*Math.pow(Math.log(E)/Math.LN2,2),A=Math.log(W/2)/Math.LN2,K=2*E-W,d=[],H=[],m=[],b=pe=0,re=T.length;pe<re;b=++pe){if(S=T[b],p=v[b],S===65535){d.push(0),H.push(0);break}if(S-(q=n[S].new)>=32768)for(d.push(0),H.push(2*(m.length+E-b)),o=ae=S;S<=p?ae<=p:ae>=p;o=S<=p?++ae:--ae)m.push(n[o].new);else d.push(q-S),H.push(0)}for($.writeUInt16(3),$.writeUInt16(1),$.writeUInt32(12),$.writeUInt16(4),$.writeUInt16(16+8*E+2*m.length),$.writeUInt16(0),$.writeUInt16(J),$.writeUInt16(W),$.writeUInt16(A),$.writeUInt16(K),se=0,M=v.length;se<M;se++)o=v[se],$.writeUInt16(o);for($.writeUInt16(0),fe=0,z=T.length;fe<z;fe++)o=T[fe],$.writeUInt16(o);for(xe=0,X=d.length;xe<X;xe++)c=d[xe],$.writeUInt16(c);for(_e=0,Q=H.length;_e<Q;_e++)D=H[_e],$.writeUInt16(D);for(Le=0,ee=m.length;Le<ee;Le++)y=m[Le],$.writeUInt16(y);return{charMap:n,subtable:$.data,maxGlyphID:P+1}}},e}(),Lf=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,o;for(t.pos=this.offset,this.version=t.readUInt16(),o=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=o?n<o:n>o;n=0<=o?++n:--n)r=new td(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,o;return r==null&&(r="macroman"),n=td.encode(t,r),(o=new Ao).writeUInt16(0),o.writeUInt16(1),n.table=o.data.concat(n.subtable),n},e}(),P9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),T9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),E9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var s;for(n=t.readUInt16(),this.glyphNameIndex=[],s=0;0<=n?s<n:s>n;s=0<=n?++s:--s)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)r=t.readByte(),o.push(this.names.push(t.readString(r)));return o;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var l,c,d;for(d=[],s=l=0,c=this.file.maxp.numGlyphs;0<=c?l<c:l>c;s=0<=c?++l:--l)d.push(t.readUInt32());return d}).call(this)}},e}(),D9=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},R9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,o,s,l,c,d,f,p,v,A;for(t.pos=this.offset,t.readShort(),r=t.readShort(),c=t.readShort(),n=[],s=0;0<=r?s<r:s>r;s=0<=r?++s:--s)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+c+t.readShort()});for(d={},s=p=0,v=n.length;p<v;s=++p)o=n[s],t.pos=o.offset,f=t.readString(o.length),l=new D9(f,o),d[A=o.nameID]==null&&(d[A]=[]),d[o.nameID].push(l);this.strings=d,this.copyright=d[0],this.fontFamily=d[1],this.fontSubfamily=d[2],this.uniqueSubfamily=d[3],this.fontName=d[4],this.version=d[5];try{this.postscriptName=d[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=d[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=d[7],this.manufacturer=d[8],this.designer=d[9],this.description=d[10],this.vendorUrl=d[11],this.designerUrl=d[12],this.license=d[13],this.licenseUrl=d[14],this.preferredFamily=d[15],this.preferredSubfamily=d[17],this.compatibleFull=d[18],this.sampleText=d[19]},e}(),O9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),F9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,o,s,l,c,d;for(t.pos=this.offset,this.metrics=[],r=0,c=this.file.hhea.numberOfMetrics;0<=c?r<c:r>c;r=0<=c?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(o=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,p;for(p=[],r=f=0;0<=o?f<o:f>o;r=0<=o?++f:--f)p.push(t.readInt16());return p}(),this.widths=(function(){var f,p,v,A;for(A=[],f=0,p=(v=this.metrics).length;f<p;f++)s=v[f],A.push(s.advance);return A}).call(this),n=this.widths[this.widths.length-1],d=[],r=l=0;0<=o?l<o:l>o;r=0<=o?++l:--l)d.push(this.widths.push(n));return d},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),Pf=[].slice,z9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,o,s,l,c,d,f,p,v;return t in this.cache?this.cache[t]:(s=this.file.loca,r=this.file.contents,n=s.indexOf(t),(o=s.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,l=(c=new Ao(r.read(o))).readShort(),f=c.readShort(),v=c.readShort(),d=c.readShort(),p=c.readShort(),this.cache[t]=l===-1?new U9(c,f,v,d,p):new B9(c,l,f,v,d,p),this.cache[t]))},e.prototype.encode=function(t,r,n){var o,s,l,c,d;for(l=[],s=[],c=0,d=r.length;c<d;c++)o=t[r[c]],s.push(l.length),o&&(l=l.concat(o.encode(n)));return s.push(l.length),{table:l,offsets:s}},e}(),B9=function(){function e(t,r,n,o,s,l){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=o,this.xMax=s,this.yMax=l,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),U9=function(){function e(t,r,n,o,s){var l,c;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=o,this.yMax=s,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],l=this.raw;c=l.readShort(),this.glyphOffsets.push(l.pos),this.glyphIDs.push(l.readUInt16()),32&c;)l.pos+=1&c?4:2,128&c?l.pos+=8:64&c?l.pos+=4:8&c&&(l.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new Ao(Pf.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),H9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return bi(e,Kn),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var o,s;for(s=[],n=0,o=this.length;n<o;n+=2)s.push(2*t.readUInt16());return s}).call(this):(function(){var o,s;for(s=[],n=0,o=this.length;n<o;n+=4)s.push(t.readUInt32());return s}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),o=0,s=0,l=0;l<n.length;++l)if(n[l]=o,s<r.length&&r[s]==l){++s,n[l]=o;var c=this.offsets[l],d=this.offsets[l+1]-c;d>0&&(o+=d)}for(var f=new Array(4*n.length),p=0;p<n.length;++p)f[4*p+3]=255&n[p],f[4*p+2]=(65280&n[p])>>8,f[4*p+1]=(16711680&n[p])>>16,f[4*p]=(4278190080&n[p])>>24;return f},e}(),$9=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,o,s;for(r in o=this.font.cmap.tables[0].codeMap,t={},s=this.subset)n=s[r],t[r]=o[n];return t},e.prototype.glyphsFor=function(t){var r,n,o,s,l,c,d;for(o={},l=0,c=t.length;l<c;l++)o[s=t[l]]=this.font.glyf.glyphFor(s);for(s in r=[],o)(n=o[s])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(s in d=this.glyphsFor(r))n=d[s],o[s]=n;return o},e.prototype.encode=function(t,r){var n,o,s,l,c,d,f,p,v,A,m,b,y,N,C;for(o in n=Lf.encode(this.generateCmap(),"unicode"),l=this.glyphsFor(t),m={0:0},C=n.charMap)m[(d=C[o]).old]=d.new;for(b in A=n.maxGlyphID,l)b in m||(m[b]=A++);return p=function(L){var P,D;for(P in D={},L)D[L[P]]=P;return D}(m),v=Object.keys(p).sort(function(L,P){return L-P}),y=function(){var L,P,D;for(D=[],L=0,P=v.length;L<P;L++)c=v[L],D.push(p[c]);return D}(),s=this.font.glyf.encode(l,y,m),f=this.font.loca.encode(s.offsets,y),N={cmap:this.font.cmap.raw(),glyf:s.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(N["OS/2"]=this.font.os2.raw()),this.font.directory.encode(N)},e}();Qe.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,o,s,l;if(Array.isArray(r))return"["+function(){var c,d,f;for(f=[],c=0,d=r.length;c<d;c++)n=r[c],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(o in s=["<<"],r)l=r[o],s.push("/"+o+" "+t.convert(l));return s.push(">>"),s.join(`
`)}return""+r},t}();const q9=["ab67616d000082c1","ab67616d0000b273"];async function V9(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function Y9(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function G9(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=Y9(e);if(!t)return e;for(const r of q9){const n=`https://i.scdn.co/image/${r}${t}`;if(await V9(n))return n}return e}function W9(e){return et({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function X9(e){return et({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const Z9=({width:e})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:e,height:e,children:[a.jsxs("g",{id:"freepik--Padlock--inject-81",children:[a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72"}),a.jsx("path",{d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72",opacity:"0.3"}),a.jsx("rect",{width:"97.29",height:"62.42",x:"65.15",y:"136.1",fill:"var(--LoginSVG-fill)",rx:"5.81",transform:"rotate(-22.27 113.786 167.288)"}),a.jsx("path",{d:"M118.23 156.7a8.13 8.13 0 1 0-6.62 11.13l4.6 11.25 4.11-1.68-4.61-11.25a8.1 8.1 0 0 0 2.52-9.45",opacity:"0.5"}),a.jsx("path",{fill:"#fafafa",d:"M83.16 207.18c-.21.09-4.32-9.48-9.18-21.36s-8.65-21.58-8.44-21.67 4.32 9.48 9.18 21.37 8.64 21.58 8.44 21.66M108.76 171.85a2.8 2.8 0 0 1-1.08-.14 10.1 10.1 0 0 1-2.75-1.19 11.38 11.38 0 0 1-2.73-17.36 9.5 9.5 0 0 1 2.25-2c.6-.37 1-.51 1-.47a26 26 0 0 0-2.8 2.79 11.28 11.28 0 0 0 2.6 16.53 26.4 26.4 0 0 0 3.51 1.84"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m44.94 181.71.49-1.42.93 1.18a6.2 6.2 0 0 0 2.88 2l1.42.49-1.18.93a6.34 6.34 0 0 0-2 2.88l-.48 1.45-1-1.17a6.3 6.3 0 0 0-2.89-2l-1.41-.49 1.17-.93a6.34 6.34 0 0 0 2.07-2.92M92.4 125.92l.28-.82.54.68A3.7 3.7 0 0 0 94.9 127l.82.28-.68.55a3.63 3.63 0 0 0-1.19 1.67l-.28.82-.57-.72a3.54 3.54 0 0 0-1.67-1.18l-.83-.29.69-.54a3.7 3.7 0 0 0 1.21-1.67M35.33 132.87l.82-2.39 1.57 2a10.5 10.5 0 0 0 4.84 3.42l2.38.82-2 1.57a10.57 10.57 0 0 0-3.43 4.84l-.82 2.38-1.56-2a10.5 10.5 0 0 0-4.84-3.43l-2.38-.82 2-1.56a10.6 10.6 0 0 0 3.42-4.83"})]}),a.jsxs("g",{id:"freepik--Device--inject-81",children:[a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m311.06 479.9-147.61-.09a32.16 32.16 0 0 1-32.14-32.16l.07-370.07a32.16 32.16 0 0 1 32.18-32.15l147.61.08a32.16 32.16 0 0 1 32.14 32.16l-.07 370.08a32.16 32.16 0 0 1-32.18 32.15"}),a.jsx("path",{fill:"#fff",d:"M311 58.6h-28.6a7.1 7.1 0 0 0-6.95 7.26V71a7.11 7.11 0 0 1-6.95 7.26h-55.78a7.12 7.12 0 0 1-7-7.27v-5.18a7.11 7.11 0 0 0-6.95-7.27H163.7A22.53 22.53 0 0 0 141.16 81l-.07 361.22a22.52 22.52 0 0 0 22.51 22.52l147.32.09a22.51 22.51 0 0 0 22.53-22.52l.07-361.21A22.52 22.52 0 0 0 311 58.6"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M223.63 437.25a2.83 2.83 0 1 1-2.86-2.8 2.84 2.84 0 0 1 2.86 2.8M239.47 437.12a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M255.32 437a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M311.88 95.08c0 .08-3.73.18-8.32.22s-8.31 0-8.31-.09S299 95 303.56 95s8.31 0 8.32.08M311.91 99.33c0 .09-3.72.19-8.31.23s-8.32 0-8.32-.09 3.72-.19 8.32-.23 8.31 0 8.31.09M312 103.58c0 .09-3.73.19-8.32.23s-8.31 0-8.31-.09 3.72-.18 8.31-.22 8.26 0 8.32.08M160.65 108.44h1.34l3.56-.08-.09.09v-2.57a15 15 0 0 1 0-1.48 1.33 1.33 0 0 1 1.17-1.08h1.7a1.35 1.35 0 0 1 1.15 1.35v3.76l-.15-.15h4.48l-.15.15v-7a1.17 1.17 0 0 0-.18-.58 4 4 0 0 0-.46-.49c-.66-.65-1.31-1.3-2-1.93l-1.89-1.86c-.3-.31-.61-.61-.91-.91s-.56-.62-.94-.69a1.21 1.21 0 0 0-1 .2c-.27.23-.56.55-.83.82l-1.61 1.62c-1 1-2.06 2-2.83 2.92a3.2 3.2 0 0 0-.22 1.68v6.33-2.14c0-.6 0-1.58-.05-2.56v-2.49a1.83 1.83 0 0 1 .25-.93c.83-1 1.82-1.91 2.84-3l1.59-1.63c.29-.28.53-.57.86-.86a1.51 1.51 0 0 1 1.29-.25 2.4 2.4 0 0 1 1.06.76l.92.9 1.9 1.86 2 1.93a3.8 3.8 0 0 1 .5.54 1.5 1.5 0 0 1 .23.74v7.16h-4.78v-3.9a1.11 1.11 0 0 0-.92-1.11h-1.63a1.11 1.11 0 0 0-1 .88v4.1H161a1.6 1.6 0 0 1-.35-.1M198.47 194.2c0 3.47-2.6 5.63-6.76 5.63h-3.13v4.28H185v-15.55h6.73c4.14 0 6.74 2.16 6.74 5.64m-3.65 0c0-1.71-1.11-2.71-3.31-2.71h-2.93v5.4h2.93c2.2 0 3.31-1 3.31-2.69M211.24 197.29v6.82H208v-1.49a3.93 3.93 0 0 1-3.64 1.67c-2.8 0-4.47-1.55-4.47-3.62s1.49-3.58 5.13-3.58h2.76c0-1.49-.89-2.35-2.76-2.35a5.73 5.73 0 0 0-3.44 1.11l-1.25-2.42a9.2 9.2 0 0 1 5.16-1.45c3.64.02 5.75 1.69 5.75 5.31m-3.46 3.05v-1.22h-2.38c-1.62 0-2.13.59-2.13 1.39s.73 1.49 1.95 1.49a2.55 2.55 0 0 0 2.56-1.66M213.22 203l1.16-2.49a8.1 8.1 0 0 0 4.15 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.76 9.76 0 0 1 4.6 1.05l-1.15 2.46a7 7 0 0 0-3.45-.89c-1.55 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8a10.2 10.2 0 0 1-5.18-1.29M225 203l1.15-2.49a8.2 8.2 0 0 0 4.16 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.8 9.8 0 0 1 4.6 1.05l-1.16 2.46a6.9 6.9 0 0 0-3.44-.89c-1.56 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8A10.2 10.2 0 0 1 225 203M256.94 192.16l-4.33 12h-3.33l-2.69-7.42-2.78 7.42h-3.33l-4.31-12h3.27l2.82 8.09 2.93-8.09h2.93l2.85 8.09 2.91-8.09ZM257.35 198.14c0-3.6 2.77-6.16 6.57-6.16s6.56 2.56 6.56 6.16-2.76 6.15-6.56 6.15-6.57-2.55-6.57-6.15m9.62 0a3.06 3.06 0 1 0-3.05 3.31 3 3 0 0 0 3.08-3.31ZM280.21 192v3.2h-.78c-1.91 0-3.18 1-3.18 3.33v5.64h-3.46v-12h3.31v1.58a4.8 4.8 0 0 1 4.11-1.75M294.34 187.63v16.48H291v-1.37a4.61 4.61 0 0 1-3.73 1.55 6.16 6.16 0 0 1 0-12.31 4.57 4.57 0 0 1 3.57 1.45v-5.8Zm-3.4 10.51a3.06 3.06 0 1 0-3 3.31 3 3 0 0 0 3-3.31"}),a.jsx("path",{fill:"#e0e0e0",d:"M321 217c0 .14-37 .26-82.69.26s-82.71-.12-82.71-.26 37-.26 82.71-.26 82.69.09 82.69.26M317.15 369.23c0 .15-37 .26-82.7.26s-82.7-.11-82.7-.26 37-.26 82.7-.26 82.7.12 82.7.26M279.74 380.67c0 .14-20.57.26-45.94.26s-45.94-.12-45.94-.26 20.56-.26 45.94-.26 45.94.11 45.94.26"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m170.5 261.3 3.13 1.69-1.41 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.17 1.9-1.35-2.35 3.1-1.7-3.14-1.73 1.38-2.35 3.17 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM206.42 261.3l3.13 1.69-1.41 2.36-3.14-1.87V267h-2.71v-3.51l-3.16 1.9-1.31-2.39 3.18-1.7-3.13-1.73 1.38-2.35 3.16 1.89v-3.5H205l-.06 3.5 3.16-1.89 1.41 2.35ZM241.38 261.3l3.13 1.69-1.41 2.36-3.16-1.87.06 3.52h-2.7v-3.51l-3.17 1.9-1.35-2.39 3.14-1.69-3.14-1.73 1.38-2.35 3.17 1.89v-3.5H240l-.06 3.5 3.16-1.89 1.41 2.35ZM275.25 261.3l3.13 1.69-1.38 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.16 1.9-1.39-2.35 3.14-1.69-3.14-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM308.85 261.3 312 263l-1.41 2.36-3.16-1.87.05 3.48h-2.7v-3.51l-3.16 1.9-1.36-2.36 3.13-1.69-3.13-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.05 3.5 3.16-1.89 1.41 2.35Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M176.07 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM211.26 283.08h-15.15A7.08 7.08 0 0 1 189 276v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.03 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM245.49 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM280.1 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM313.7 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.57 6.57 0 0 0 6.57 6.57h15.15a6.58 6.58 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56Z"}),a.jsx("rect",{width:"169.79",height:"29.74",x:"154.09",y:"315.56",fill:"var(--LoginSVG-fill)",rx:"11.29"}),a.jsx("path",{fill:"#fff",d:"M217.55 324.45h4.57c3.29 0 5.55 2 5.55 5s-2.26 5-5.55 5h-4.57Zm4.45 8.15a3.12 3.12 0 1 0 0-6.24h-2.13v6.24ZM228.69 330.65a4.26 4.26 0 1 1 4.26 4 4 4 0 0 1-4.26-4m6.23 0a2 2 0 1 0-4 0 2 2 0 1 0 4 0M246.59 330.09v4.42h-2.24v-4.08c0-1.25-.58-1.82-1.57-1.82s-1.85.66-1.85 2.08v3.82h-2.24v-7.73h2.14v.91a3.4 3.4 0 0 1 2.56-1c1.82-.02 3.2 1.04 3.2 3.4M256.24 331.28h-5.85a2.07 2.07 0 0 0 2.21 1.55 2.6 2.6 0 0 0 1.94-.75l1.2 1.3a4.05 4.05 0 0 1-3.19 1.25c-2.68 0-4.42-1.68-4.42-4a3.93 3.93 0 0 1 4.13-4 3.82 3.82 0 0 1 4 4c.02.22-.01.46-.02.65m-5.88-1.28h3.81a1.93 1.93 0 0 0-3.81 0"}),a.jsx("circle",{cx:"237.31",cy:"143.52",r:"30.05",fill:"var(--LoginSVG-fill)"}),a.jsx("path",{fill:"#fff",d:"M232 138.05h-.5v-2.8a5.86 5.86 0 0 1 11.72 0v2.28h-.5v-2.28a5.36 5.36 0 0 0-10.72 0Z"}),a.jsx("path",{fill:"#fff",d:"M244.76 157.65h-14.9a2.48 2.48 0 0 1-2.47-2.47v-14.91a2.48 2.48 0 0 1 2.47-2.47h14.9a2.48 2.48 0 0 1 2.47 2.47v14.91a2.48 2.48 0 0 1-2.47 2.47m-14.9-19.35a2 2 0 0 0-2 2v14.91a2 2 0 0 0 2 2h14.9a2 2 0 0 0 2-2v-14.94a2 2 0 0 0-2-2Z"}),a.jsx("path",{fill:"#fff",d:"M237.38 148.21a2.34 2.34 0 1 1 2.34-2.34 2.34 2.34 0 0 1-2.34 2.34m0-4.17a1.84 1.84 0 1 0 1.84 1.83 1.84 1.84 0 0 0-1.84-1.87Z"}),a.jsx("path",{fill:"#fff",d:"M237.06 147.86h.5v4.22h-.5z"})]}),a.jsxs("g",{id:"freepik--Character--inject-81",children:[a.jsx("path",{fill:"#ffbe9d",d:"m446.31 458.77-18.87-43.53-21.65 13.9 22.96 39.79 11.51-5.16z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m445.89 456.34.62 1.24s25.15-2.15 27.38 1.71L432.25 480l-6.33-14.14c7.62-.2 14.26-3.1 19.97-9.52"}),a.jsx("path",{fill:"#fff",d:"M432.34 468.21a1.89 1.89 0 0 0-.21 2.52 1.82 1.82 0 0 0 2.5.23 2 2 0 0 0 .21-2.67 1.9 1.9 0 0 0-2.63 0M432.25 480l-1.52-3.4 40.46-18.6s2.26-.11 2.7 1.3Z",opacity:"0.6"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M446.72 457.62c.09.21-.88.8-1.55 2s-.79 2.27-1 2.28-.51-1.31.33-2.69 2.17-1.8 2.22-1.59M452 457.25c.15.18-.56 1-.82 2.16s0 2.22-.22 2.31-.91-1-.55-2.49 1.47-2.17 1.59-1.98M457.07 461.24c-.17.14-1-.74-1-2.11s.7-2.29.87-2.16-.12 1-.08 2.14.4 2.01.21 2.13"}),a.jsx("path",{fill:"#ffbe9d",d:"m410.82 466.33.72-47.45-25.45 3.76 4.54 45.72 12.62.03z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m411.43 463.94.07 1.38s23.8 8.4 24.24 12.83l-46.48 1.74.05-15.49c7.03 2.94 14.28 3.03 22.12-.46"}),a.jsx("path",{fill:"#fff",d:"M394.2 469.17a1.91 1.91 0 0 0-1.23 2.22 1.83 1.83 0 0 0 2.19 1.24 2 2 0 0 0 1.29-2.36 1.89 1.89 0 0 0-2.42-1M389.26 479.89v-3.72l44.54-.31s2.11.82 1.93 2.29Z",opacity:"0.6"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M411.66 465.44c0 .23-1.13.38-2.22 1.15s-1.64 1.74-1.86 1.66.08-1.4 1.41-2.31 2.71-.71 2.67-.5M416.61 467.28c.06.21-.9.64-1.64 1.63s-.92 2-1.15 2-.41-1.28.52-2.5 2.26-1.35 2.27-1.13M419.6 473c-.2.05-.56-1.07 0-2.33s1.58-1.8 1.69-1.62-.53.88-1 1.92-.46 2.03-.69 2.03M392.51 272.89l-.95-37.36-36.36 1.91-1.2 4.42a200 200 0 0 0-4.76 20.8c-2.44 15.65-2.15 29.89 4 46.62S369 357.82 369 357.82l36.07 99.63 42-13.81Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m414.5 234.32 3.17 10.35c4.66 3 12.19 17.7 12.88 23.72s2 26.63.63 50.79c-1.17 19.87-11 136.17-11 136.17l-39.74 2.1 4.14-188.06 1.75-33.58Z"}),a.jsx("path",{fill:"#455a64",d:"M346.4 266.1a6.4 6.4 0 0 0 1.38.41 23 23 0 0 0 3.87.52 25.25 25.25 0 0 0 22.23-11 21.7 21.7 0 0 0 1.93-3.4 6 6 0 0 0 .51-1.34c-.1-.05-.85 1.87-2.76 4.52a26.07 26.07 0 0 1-21.89 10.85 52 52 0 0 1-5.27-.56M413 246.12a2.7 2.7 0 0 0 .23.87 19 19 0 0 0 .92 2.24 29 29 0 0 0 10.48 11.9 20 20 0 0 0 2.11 1.19 3 3 0 0 0 .83.34c.05-.09-1.06-.69-2.72-1.86a33.1 33.1 0 0 1-10.35-11.74c-.97-1.79-1.43-2.97-1.5-2.94M394.27 277.88s.1.25.27.77l.73 2.29c.64 2 1.57 5 2.76 8.81 2.38 7.68 5.82 18.76 10.07 32.45 8.62 27.36 19.57 65.47 34.25 106.72q2.52 7.41 5 14.63l.08.26-.25.08-42 13.79-.23.08-.08-.23-24.15-67-6.87-19.19c-.79-2.22-1.39-3.94-1.81-5.11q-.3-.86-.45-1.32l-.15-.45s.07.14.18.44.28.74.5 1.3l1.88 5.08c1.63 4.47 4 11 7 19.15l24.32 66.9-.3-.15 42-13.82-.17.33q-2.46-7.22-5-14.63c-14.68-41.26-25.57-79.38-34.1-106.77-4.18-13.72-7.56-24.82-9.91-32.5-1.15-3.84-2.05-6.81-2.66-8.85-.3-1-.53-1.77-.68-2.3s-.23-.76-.23-.76M430 169.45s-1.9-10.63-7.35-15.72-28.16-10.85-28.16-10.85.27 7.89-4.81 10c-5.38 2.25-10.76 1.49-15-3a21.74 21.74 0 0 1-5.17-9.89s-26.92 3.93-30.75 11.23-7.84 35-7.84 35l24.39 3.85-.79 47.38 64.1-3.37-3.62-44.21 17.58 1.57Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.17 191.4a5 5 0 0 0 0-1.06c0-.69-.06-1.68-.13-2.91-.13-2.44-.34-5.82-.62-9.55s-.55-7.11-.78-9.55c-.12-1.22-.22-2.21-.3-2.89a4 4 0 0 0-.19-1.05 3.7 3.7 0 0 0 0 1.06c0 .69.06 1.68.13 2.9.13 2.45.34 5.83.62 9.56s.55 7.11.78 9.55c.11 1.22.22 2.21.3 2.89a3.5 3.5 0 0 0 .19 1.05M419.86 168.77c-.15 0-1.4 4.83-2.8 10.87a112 112 0 0 0-2.26 11 111 111 0 0 0 2.8-10.87 112 112 0 0 0 2.26-11M341.34 149.42c0 .1 1.16.25 3 .83a21.3 21.3 0 0 1 6.46 3.42 21.6 21.6 0 0 1 4.89 5.44c1 1.61 1.42 2.71 1.52 2.67a2.7 2.7 0 0 0-.23-.8 14 14 0 0 0-.95-2.07 19.2 19.2 0 0 0-11.58-9 13 13 0 0 0-2.23-.43 2.4 2.4 0 0 0-.88-.06M423.16 155.87a11.2 11.2 0 0 0-1 3.39 11.2 11.2 0 0 0-.41 3.49 11.4 11.4 0 0 0 .95-3.38 11.3 11.3 0 0 0 .46-3.5"}),a.jsx("path",{fill:"#ffbe9d",d:"M335.24 186.93s9.16 36.31 10.15 39.41 2.77 11.48 11.61 12.76c11.94 1.74 58.24-2.35 58.24-2.35l-9.33-10.62-41.19-9.24-7-26.4Z"}),a.jsx("path",{fill:"#eb996e",d:"M406.35 219.9a2.3 2.3 0 0 0-.3.87 11.6 11.6 0 0 0-.34 2.47 14.1 14.1 0 0 0 2.08 7.9 16.2 16.2 0 0 0 2.85 3.54 9 9 0 0 0 3.2 1.9 8.8 8.8 0 0 0 2.47.42 2.3 2.3 0 0 0 .91-.08 18 18 0 0 1-3.24-.71 9 9 0 0 1-3-1.91 17.4 17.4 0 0 1-2.72-3.45 14.86 14.86 0 0 1-2.16-7.61c-.01-2.06.35-3.32.25-3.34"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M359.88 182.57a5.2 5.2 0 0 1-1.1-.11l-3-.43c-2.5-.36-6-.77-9.79-1.27a98 98 0 0 1-9.75-1.69c-1.23-.3-2.22-.57-2.89-.79a4.7 4.7 0 0 1-1-.38c0-.09 1.54.31 4 .8s5.92 1 9.74 1.53 7.29 1 9.78 1.42c1.25.23 2.25.44 2.94.61a3.9 3.9 0 0 1 1.07.31M358 170.48a3.7 3.7 0 0 1-.94.05c-.61 0-1.49 0-2.58-.08-2.17-.11-5.17-.35-8.47-.76s-6.27-.92-8.4-1.35a61 61 0 0 1-2.52-.56 2.8 2.8 0 0 1-.9-.28 25 25 0 0 1 3.49.47c2.14.33 5.11.78 8.39 1.19s6.27.71 8.44.91a24 24 0 0 1 3.49.41M355.91 161.28a12.5 12.5 0 0 1-2.85 0 58.8 58.8 0 0 1-13.49-2.53 13.3 13.3 0 0 1-2.67-1 17 17 0 0 1 2.77.65c1.69.44 4.05 1 6.67 1.5s5 .81 6.76 1a18 18 0 0 1 2.81.38M373 148.17a20 20 0 0 1-3.22 1c-2 .52-4.79 1.16-7.88 1.78s-5.92 1.09-8 1.39a19 19 0 0 1-3.34.35 23 23 0 0 1 3.27-.72l7.92-1.54 7.91-1.63a21.7 21.7 0 0 1 3.34-.63M422.69 159a5.6 5.6 0 0 1-1.14-.4l-3.06-1.26c-2.57-1.06-6.13-2.53-10.09-4.08s-7.57-2.88-10.19-3.84l-3.09-1.14a5 5 0 0 1-1.12-.49 5.6 5.6 0 0 1 1.18.29c.76.21 1.83.55 3.16 1 2.65.87 6.29 2.15 10.26 3.7s7.51 3.07 10 4.23c1.27.58 2.29 1.06 3 1.41a5.3 5.3 0 0 1 1.09.58M419.86 168.32a3 3 0 0 1-.62-.07l-1.78-.28-6.5-1.14c-5.49-1-13.08-2.29-21.52-3.31-4.22-.49-8.25-.84-11.93-1.06s-7-.27-9.77-.22c-1.39 0-2.65.06-3.76.09s-2.05.07-2.83.13l-1.79.09a2.8 2.8 0 0 1-.63 0 2.8 2.8 0 0 1 .62-.1l1.78-.19c.78-.09 1.73-.17 2.84-.22s2.37-.16 3.76-.17c2.79-.09 6.12-.05 9.81.11s7.73.53 12 1c8.45 1 16 2.41 21.52 3.47 2.73.53 5 1 6.47 1.3l1.76.39a2.4 2.4 0 0 1 .57.18M394 184.66a7.5 7.5 0 0 1-1.37 0c-.89-.05-2.16-.16-3.74-.32-3.14-.33-7.48-.9-12.23-1.77s-9-1.86-12.07-2.66c-1.53-.41-2.76-.75-3.6-1a7.6 7.6 0 0 1-1.3-.45 6 6 0 0 1 1.35.25l3.64.85c3.08.71 7.34 1.64 12.08 2.51s9.05 1.49 12.18 1.91l3.71.5a6.4 6.4 0 0 1 1.35.18M415.75 185a99 99 0 0 1-10.17.36 101 101 0 0 1-10.16-.17 95 95 0 0 1 10.16-.36 94 94 0 0 1 10.17.17M387.18 199.36a4 4 0 0 1-1.11-.05c-.7-.06-1.73-.19-3-.37-2.52-.36-6-1-9.77-1.85s-7.16-1.88-9.57-2.67c-1.21-.4-2.18-.74-2.85-1a4.8 4.8 0 0 1-1-.44 4 4 0 0 1 1.08.24l2.89.84c2.43.7 5.81 1.62 9.58 2.51s7.21 1.55 9.71 2l3 .54a4.4 4.4 0 0 1 1.04.25M410.73 200.4a16 16 0 0 1-3.22 0c-2-.07-4.73-.27-7.74-.66s-5.72-.9-7.66-1.33a16.2 16.2 0 0 1-3.1-.86 21 21 0 0 1 3.18.49c1.95.34 4.65.78 7.65 1.17s5.72.65 7.69.82a23 23 0 0 1 3.2.37M405.82 213.46a1.3 1.3 0 0 1-.41.17c-.27.08-.67.22-1.2.36a39 39 0 0 1-4.5.93 58.5 58.5 0 0 1-15.13.13 117 117 0 0 1-14.89-2.79c-1.88-.46-3.39-.86-4.44-1.15a9 9 0 0 1-1.61-.5 12 12 0 0 1 1.66.3l4.48 1a144 144 0 0 0 14.85 2.63 64 64 0 0 0 15 0c1.91-.24 3.45-.53 4.51-.76a12 12 0 0 1 1.68-.32M428.93 175.93a32 32 0 0 1-5.07.41 19.8 19.8 0 0 1-5.1-.12 32 32 0 0 1 5.07-.41 19.8 19.8 0 0 1 5.1.12M427.58 163.75a14.3 14.3 0 0 1-5.53-.36 14.9 14.9 0 0 1 5.53.36"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M385.24 200.23c-.05-.09 1.05-.64 2.55-1.88a18.3 18.3 0 0 0 2.38-2.42 18.3 18.3 0 0 0 3.59-7.43 18 18 0 0 0 .41-3.38c.05-1.94-.21-3.14-.11-3.16a2.7 2.7 0 0 1 .24.83 7 7 0 0 1 .16 1 13 13 0 0 1 .09 1.33 16 16 0 0 1-.31 3.48 17.3 17.3 0 0 1-3.69 7.64 16 16 0 0 1-2.53 2.41 11 11 0 0 1-1.1.76 7 7 0 0 1-.88.49 2.6 2.6 0 0 1-.8.33"}),a.jsx("path",{d:"m393.81 190.49-3.89 5.78a18.45 18.45 0 0 1-10.42 6.49 10.89 10.89 0 0 0 14.31-12.27",opacity:"0.3"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M405.34 130.24a19.3 19.3 0 0 0 10.73-2.18c-4.84-3-7.89-8.26-9.37-13.75s-3.38-14.85-3.43-20.53l-8.86 39.37a23.77 23.77 0 0 0 14-1.09 3.86 3.86 0 0 1-3.07-1.82M380.06 135a27.7 27.7 0 0 1-2.14-14.07l-17.86-6.77a31.44 31.44 0 0 1-5.7 13.42c-1.09 1.48-2.39 3.2-1.88 5a3.76 3.76 0 0 0 2.77 2.37 11.3 11.3 0 0 0 3.8 0l-2.28 2.49a137 137 0 0 1 23.29-2.44"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M381.57 76.16c-5.63-.58-10.39 1.89-14.88 5.33a28 28 0 0 0-9.42 13.82 27.75 27.75 0 0 0 .12 17.58 22.13 22.13 0 0 0 11.77 12.82c7.48 3.2 16.67 1.31 22.83-4s9.33-13.67 9.11-21.82a26.87 26.87 0 0 0-5.29-15.68 20.5 20.5 0 0 0-14.24-8"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M367 96.14c.67-2.18.2-4.54.37-6.82.39-5 4.14-9.27 8.64-11.51 4.2-2.09 9.49-2 14.79-.7a19.8 19.8 0 0 1 9.68 5.44 15.62 15.62 0 0 1 3.79 13.84l-25.69-2a28.3 28.3 0 0 1-7.38 5.58 5.25 5.25 0 0 1-2.62.6 2.39 2.39 0 0 1-2.12-1.57c-.3-.92.21-1.91.54-2.86"}),a.jsx("path",{fill:"#ffbe9d",d:"m391.78 84.1-21.91 6.16a4.16 4.16 0 0 0-3.61 4.31l3.42 48.07a15 15 0 0 0 3.72 8.86l2.3 2.59c5.24 5.92 15 4.65 18.22-2.56a5.3 5.3 0 0 0 .42-1.29 8 8 0 0 0 .14-1.1 35 35 0 0 0-.09-7.31c-.06-4.29-.11-6.05-.11-6s9-1.75 10.58-13.61c.78-5.91.23-15.53-.48-23.4-.63-7.08-5.56-15.66-12.6-14.72"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M400.17 106.38a1.53 1.53 0 0 1-1.43 1.57 1.44 1.44 0 0 1-1.59-1.32 1.51 1.51 0 0 1 1.41-1.57 1.45 1.45 0 0 1 1.61 1.32M402.43 103.88c-.19.2-1.36-.62-3-.57s-2.8.9-3 .7.09-.45.6-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.39.7c.54.37.72.72.63.81M384.73 107.19a1.52 1.52 0 0 1-1.42 1.57 1.45 1.45 0 0 1-1.6-1.32 1.52 1.52 0 0 1 1.42-1.57 1.45 1.45 0 0 1 1.6 1.32M386.4 104.61c-.18.2-1.35-.61-3-.57s-2.8.9-3 .7.09-.44.61-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.38.7c.54.37.72.72.63.81M392.64 116.55a10.7 10.7 0 0 1 2.64-.55c.42 0 .81-.15.87-.43a2.16 2.16 0 0 0-.31-1.23l-1.32-3.14c-1.83-4.47-3.16-8.15-3-8.22s1.81 3.49 3.64 8l1.26 3.16a2.4 2.4 0 0 1 .26 1.63 1 1 0 0 1-.67.63 2.7 2.7 0 0 1-.7.11 10.6 10.6 0 0 1-2.67.04"}),a.jsx("path",{fill:"#eb996e",d:"M394.28 135.82a30.1 30.1 0 0 1-15.93-3.8s4.19 8.07 16 6.65ZM392.06 120.5a2.93 2.93 0 0 0-2.66-1 2.64 2.64 0 0 0-1.83 1 1.72 1.72 0 0 0-.08 2 2 2 0 0 0 2.15.48 6.1 6.1 0 0 0 2.06-1.3 2.1 2.1 0 0 0 .45-.49.56.56 0 0 0 0-.61"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M387.88 117.8c.26 0 .31 1.75 1.86 3s3.43 1 3.45 1.22-.41.35-1.21.39a4.42 4.42 0 0 1-2.88-.91 3.82 3.82 0 0 1-1.44-2.49c-.09-.77.09-1.21.22-1.21M386.55 99.67c-.15.45-1.79.28-3.69.57s-3.44.84-3.71.45c-.12-.19.14-.61.75-1.06a6.34 6.34 0 0 1 2.73-1 6.2 6.2 0 0 1 2.91.27c.71.22 1.07.56 1.01.77M401.76 96.76c-.27.38-1.41 0-2.76 0s-2.49.32-2.76-.06c-.12-.19.05-.56.54-.93a4 4 0 0 1 4.45 0c.49.43.66.81.53.99"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M362.67 93c1.86-6.92 11.31-16.79 18.47-16.62l11.71 6.32a11 11 0 0 1-7.08 8.75c-2 .71-4.4 1-5.52 2.77s-.31 4.37-1.37 6.25c-1.46 2.6-5.78 2.68-6.84 5.47-.47 1.21-.13 2.63-.62 3.84-.64 1.61-4.55 3.8-6.23 3.35s-1.81-3.27-2.42-4.72a7.82 7.82 0 0 1-.48-5.23c.57-3.38-.51-6.9.38-10.18"}),a.jsx("path",{fill:"#ffbe9d",d:"M370.14 114.28c0-.88-1.1-2.93-2-3-2.33-.3-6.5 0-6.39 5.89.17 8.06 8.22 6.24 8.23 6s.24-5.85.16-8.89"}),a.jsx("path",{fill:"#eb996e",d:"M367.48 120.13s-.14.1-.37.22a1.4 1.4 0 0 1-1.05 0c-.86-.29-1.6-1.63-1.67-3.08a4.5 4.5 0 0 1 .35-2 1.6 1.6 0 0 1 1-1.1.71.71 0 0 1 .84.37c.11.22.07.38.11.4s.17-.14.1-.47a.93.93 0 0 0-.33-.5 1 1 0 0 0-.78-.19 2 2 0 0 0-1.44 1.28 4.7 4.7 0 0 0-.44 2.25c.08 1.63.94 3.13 2.11 3.44a1.48 1.48 0 0 0 1.28-.24c.28-.18.32-.36.29-.38"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.81 91c-.14-2.52-3.38-4-5.87-4.37a10.5 10.5 0 0 0-7.15 1.86c-1.24.79-2.48 1.88-2.67 3.34s1.31 3.09 2.65 2.48a4.78 4.78 0 1 0 5.15 7.85 10.68 10.68 0 0 1-3.81 6A12 12 0 0 0 360.81 91M346.78 125.52c0-.38 1.05-.56 2.48-1a15 15 0 0 0 5.05-2.5 14.9 14.9 0 0 0 3.65-4.3c.77-1.29 1.18-2.22 1.56-2.16s.6 1.13.2 2.85a10.73 10.73 0 0 1-10.21 8c-1.77-.03-2.77-.54-2.73-.89"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M356.07 104.15a7.2 7.2 0 0 1-.46-2.39 17.8 17.8 0 0 1 3-11.22 7.2 7.2 0 0 1 1.59-1.85 26.7 26.7 0 0 0-3.53 7.31 27 27 0 0 0-.6 8.15M390.36 80.4c.95 3.22 6.2 7.09 8.55 9.5 4.48 4.58 5.41 6.14 6.08 17 1.72-3.88 3-7.66 2.55-11.88a17.62 17.62 0 0 0-5.4-11.22 13.71 13.71 0 0 0-11.78-3.41"}),a.jsx("path",{fill:"#ffbe9d",d:"M442.9 174.43s-5.38 22.36-7.59 32C433 216.7 427.86 240 414.22 236.6c-10.38-2.56-8.07-16-8.07-16l8.85-30.73 8.2.93 7.53-18.54 8.12-8.55Z"}),a.jsx("path",{fill:"#eb996e",d:"M409.77 221.4a11.5 11.5 0 0 1-.27-5 15.7 15.7 0 0 1 1.92-5.06 44 44 0 0 1 4-5.42 43 43 0 0 0 4-5.51 33.5 33.5 0 0 0 2.42-5 31 31 0 0 0 1.12-3.57 6 6 0 0 0 .25-1.35 8.6 8.6 0 0 0-.46 1.29c-.27.83-.67 2-1.28 3.48a37 37 0 0 1-2.49 4.89 47 47 0 0 1-4 5.42 41 41 0 0 0-4 5.52 15.3 15.3 0 0 0-1.87 5.25 9.7 9.7 0 0 0 .16 3.76 6.6 6.6 0 0 0 .33 1c.09.2.15.31.17.3"}),a.jsx("path",{fill:"#ffbe9d",d:"M430.1 174c0-.4.2-6.91.33-8.61a8.8 8.8 0 0 1 .89-3.09 2.62 2.62 0 0 1 4.08-.72l.15.13a11.5 11.5 0 0 1 3.21-3.87c1.91-1.25 3.48-2.1 5.12-1.12a2.85 2.85 0 0 1 1.58 2.37s2.43-.33 3.48.65 0 3.94 0 3.94 2.16-.66 2.69.92a4.4 4.4 0 0 1-.46 3.22s1.7.52 1.9 1.77-1.7 2.62-1.7 2.62l-5.93 4.72a11.3 11.3 0 0 1-4.57 6c-4.12 1.58-10.77-8.93-10.77-8.93"}),a.jsx("path",{fill:"#eb996e",d:"M434.62 166.91c.06 0 .05.25-.13.55a2 2 0 0 1-1 .88 2.14 2.14 0 0 1-1.36 0c-.33-.11-.49-.27-.46-.34s.81.11 1.63-.21 1.18-.95 1.32-.88M439.32 161.09c-.09.12-.66-.28-.76-1.06s.33-1.31.45-1.22 0 .57.08 1.15.34 1.04.23 1.13M449.23 163.62s-.42.61-1.31 1.38a39 39 0 0 1-3.69 2.7 5.7 5.7 0 0 1-2.36 1.1 2.13 2.13 0 0 1-2-.75 1.48 1.48 0 0 1-.16-1.46c.16-.32.36-.4.38-.37s-.11.16-.19.45a1.36 1.36 0 0 0 .27 1.16 1.8 1.8 0 0 0 1.67.48 5.6 5.6 0 0 0 2.13-1.05c1.49-1 2.82-1.87 3.75-2.56a9.6 9.6 0 0 1 1.51-1.08M451.13 167.79a38 38 0 0 1-5.65 2.88 5.8 5.8 0 0 1-2.45.72 1.93 1.93 0 0 1-1.84-1.1 1.12 1.12 0 0 1 0-.88 1.05 1.05 0 0 1 .43-.49c.33-.18.54-.08.53-.06s-.19 0-.41.23a.85.85 0 0 0-.19 1 1.54 1.54 0 0 0 1.49.75 5.75 5.75 0 0 0 2.23-.71 39 39 0 0 1 5.86-2.34M448.25 173.12c0 .06-.32.31-1 .47a4.6 4.6 0 0 1-1.18.12 3.16 3.16 0 0 1-1.47-.33.9.9 0 0 1-.43-.85 1.4 1.4 0 0 1 .32-.73 5 5 0 0 1 .85-.83c.54-.4.94-.53 1-.47s-.28.31-.72.76a6 6 0 0 0-.7.83c-.23.33-.31.67 0 .84a3.2 3.2 0 0 0 1.21.29 5.6 5.6 0 0 0 1.09 0c.62-.06 1-.17 1.03-.1"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),a.jsx("path",{fill:"none",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.91 170.39s-.12 0-.33.06a1.4 1.4 0 0 0-.76.48 1.34 1.34 0 1 0 2.18.07 1.4 1.4 0 0 0-.72-.54c-.2-.06-.33-.06-.33-.08h.05a1 1 0 0 1 .26 0 1.38 1.38 0 0 1 .77.53 1.43 1.43 0 0 1 .17 1.37 1.4 1.4 0 0 1-.53.65 1.43 1.43 0 0 1-.86.25 1.47 1.47 0 0 1-.85-.31 1.5 1.5 0 0 1-.48-.7 1.47 1.47 0 0 1 .27-1.35 1.43 1.43 0 0 1 .82-.47 1.3 1.3 0 0 1 .25 0Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11v.39a5 5 0 0 1-.24 1.08 4.8 4.8 0 0 1-.9 1.54 4.8 4.8 0 0 1-2 1.38c-.1 2.59-.22 6-.36 10l-2 1.2-1-1.14v-.85l.84-.47v.1l-.81-.61c0-.45 0-1 .05-1.45l1.39-.77v.1l-1.32-1V183c0-.42 0-.83.05-1.24l1.39-.78v.1l-1.32-1c0-.46 0-.91.05-1.35v.06a5 5 0 0 1-2-1.12 4.5 4.5 0 0 1-.73-.85 4.85 4.85 0 0 1-.29-5 4.86 4.86 0 0 1 8.05-.89 4.7 4.7 0 0 1 .93 1.71l.06.18v.18c0 .12.05.22.06.33s.05.37.05.51v.16a.4.4 0 0 1 0 .1v-.42c0-.14 0-.31-.06-.51a2 2 0 0 0-.07-.32v-.18l-.06-.18a4.6 4.6 0 0 0-.93-1.68 4.9 4.9 0 0 0-2.11-1.44 4.8 4.8 0 0 0-6 6.29 4.6 4.6 0 0 0 .5 1 4.4 4.4 0 0 0 .72.83 4.76 4.76 0 0 0 1.95 1.09h.05c0 .45 0 .9-.05 1.35l1.33 1h.07l-.08.05-1.39.77v-.05 1.69l1.32 1 .07.06h-.08l-1.39.78c0 .5 0 1-.05 1.45l.81.6.07.06h-.08l-.84.48v.84l1 1.14h-.07l2-1.19v.05c.16-4 .29-7.44.39-10a4.8 4.8 0 0 0 1.94-1.34 5 5 0 0 0 .9-1.52 5.2 5.2 0 0 0 .26-1.08v-.28a.7.7 0 0 0-.07-.33"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),a.jsx("path",{fill:"none",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.41 170.12a3 3 0 0 0-.34 0 1.37 1.37 0 0 0-.75.48 1.33 1.33 0 0 0-.23 1.26 1.35 1.35 0 0 0 1.22.93 1.37 1.37 0 0 0 1.28-.83 1.35 1.35 0 0 0-.85-1.81 3 3 0 0 0-.33-.08h.09a1 1 0 0 1 .25 0 1.36 1.36 0 0 1 .78.53 1.44 1.44 0 0 1-.36 2 1.44 1.44 0 0 1-.87.25 1.47 1.47 0 0 1-.84-.32 1.36 1.36 0 0 1-.46-.53 1.43 1.43 0 0 1 1.08-1.83.8.8 0 0 1 .26 0Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84v.38a5 5 0 0 1-.24 1.09 5.2 5.2 0 0 1-.9 1.54 5 5 0 0 1-2 1.38l-.35 10-2 1.19-1-1.14v-.84l.84-.48v.1l-.8-.6c0-.46 0-.95.05-1.45l1.39-.78v.1l-1.32-1v-.45c0-.41 0-.83.05-1.24l1.39-.77v.1l-1.32-1c0-.45 0-.9.05-1.35v.06a4.76 4.76 0 0 1-2-1.12 4.6 4.6 0 0 1-.74-.85 4.7 4.7 0 0 1-.51-1 4.9 4.9 0 0 1 3-6.41 5 5 0 0 1 3.16 0 4.94 4.94 0 0 1 2.13 1.2 4.9 4.9 0 0 1 .93 1.71l.06.19v.18c0 .11.05.22.06.32s.05.38.05.51v.43a1 1 0 0 0 0-.11v-.31c0-.14 0-.31-.05-.52s-.05-.2-.07-.32v-.17l-.06-.19a4.8 4.8 0 0 0-.94-1.68 4.73 4.73 0 0 0-2.11-1.43 4.83 4.83 0 0 0-3.1 0 4.9 4.9 0 0 0-2.7 2.33 4.83 4.83 0 0 0-.22 3.95 5.2 5.2 0 0 0 .51 1 4.3 4.3 0 0 0 .72.83 4.8 4.8 0 0 0 1.95 1.09H436v1.4-.05c.44.32.88.66 1.32 1l.08.06h-.08l-1.39.78v-.05c0 .41 0 .82-.05 1.24v.44l1.32 1h.08l-.08.05-1.39.77c0 .5 0 1-.06 1.45l.81.61.07.05h-.08l-.85.47v.84l1 1.15h-.07l2-1.19v.05c.15-4 .29-7.44.39-10a5 5 0 0 0 1.95-1.35 5.2 5.2 0 0 0 .9-1.52 5 5 0 0 0 .26-1.07v-.29a.31.31 0 0 1-.01-.31"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M441.54 173.88a6.6 6.6 0 0 0-.12-1 3.9 3.9 0 0 0-.43-1.14 4.2 4.2 0 0 0-1-1.24 4.17 4.17 0 0 0-4-.74 4 4 0 0 0-1.09.53 4.4 4.4 0 0 0-.49.39 5 5 0 0 0-.43.47 4.2 4.2 0 0 0-.19 5 6 6 0 0 0 .4.51 5 5 0 0 0 .46.42 3.8 3.8 0 0 0 1 .61 4.27 4.27 0 0 0 2.21.27 4.1 4.1 0 0 0 1.8-.71 4.4 4.4 0 0 0 1.13-1.16 4.3 4.3 0 0 0 .51-1.11 6.6 6.6 0 0 0 .2-1v.61c0 .13-.05.27-.1.44a3.9 3.9 0 0 1-.51 1.13 4.3 4.3 0 0 1-1.13 1.19 4.2 4.2 0 0 1-1.84.74 4.36 4.36 0 0 1-2.26-.26 4 4 0 0 1-1.07-.63 6 6 0 0 1-.48-.43 4 4 0 0 1-.4-.52 4.29 4.29 0 0 1 .19-5.11 5 5 0 0 1 .44-.49 5 5 0 0 1 .51-.39 4.22 4.22 0 0 1 3.39-.64 4.14 4.14 0 0 1 1.78.88 4.3 4.3 0 0 1 1 1.27 4.4 4.4 0 0 1 .42 1.16 3 3 0 0 1 .06.45 2 2 0 0 1 0 .33v.27Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M439 171.58a4 4 0 0 0-.06-.39 1.52 1.52 0 0 0-.56-.89 1.6 1.6 0 0 0-.66-.32 1.6 1.6 0 0 0-.83.05 1.47 1.47 0 0 0-.75.52 1.53 1.53 0 0 0-.33.91 1.56 1.56 0 0 0 1 1.52 1.63 1.63 0 0 0 1.51-.16 1.6 1.6 0 0 0 .62-.85 3 3 0 0 0 .09-.39s0 0 0 .11a1.5 1.5 0 0 1-.05.3 1.63 1.63 0 0 1-.62.9 1.66 1.66 0 0 1-.72.29 1.67 1.67 0 0 1-1.64-.71 1.67 1.67 0 0 1-.3-1 1.72 1.72 0 0 1 .37-1 1.64 1.64 0 0 1 .81-.55 1.6 1.6 0 0 1 .89 0 1.7 1.7 0 0 1 .69.34 1.6 1.6 0 0 1 .55 1 1.1 1.1 0 0 1 0 .3c-.01-.01-.01.02-.01.02M438 188.45s0-2.29.13-5.1.22-5.1.25-5.1 0 2.28-.13 5.1-.25 5.1-.25 5.1"}),a.jsx("path",{fill:"#e0e0e0",d:"M437.83 170.6a.74.74 0 0 1-.65 0v-6.15l.65.05Z"}),a.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.5 170.7a.8.8 0 0 1-.33-.08v-6.19l.7.05v6.14a.8.8 0 0 1-.37.08m-.29-.12a.68.68 0 0 0 .59 0v-6.06h-.6Z"}),a.jsx("path",{fill:"#ffbe9d",d:"M435 161.43a14.5 14.5 0 0 0 1.73 1.27 2.34 2.34 0 0 1 1.06 1.79 2.19 2.19 0 0 1-1.28 1.69 4 4 0 0 1-5.42-1.63"}),a.jsx("path",{fill:"#eb996e",d:"M431.13 164.55a11 11 0 0 0 1.36 1.22 3.9 3.9 0 0 0 1.8.6 4 4 0 0 0 2.24-.49 1.71 1.71 0 0 0 1-1.74 2.83 2.83 0 0 0-1.11-1.45c-.95-.64-1.48-1.2-1.4-1.26s.59.37 1.61.95A3 3 0 0 1 438 164a1.82 1.82 0 0 1-.21 1.34 2.9 2.9 0 0 1-1 1 4.27 4.27 0 0 1-2.56.52 4.07 4.07 0 0 1-2-.78c-.93-.75-1.15-1.52-1.1-1.53"}),a.jsx("path",{fill:"#ffbe9d",d:"M441.16 158.88a23.7 23.7 0 0 0-3 4.4 3.64 3.64 0 0 0-.45 1.57 1.58 1.58 0 0 0 .73 1.4 1.6 1.6 0 0 0 1.37 0 4.3 4.3 0 0 0 1.14-.81 28 28 0 0 0 3.72-4.14 3.9 3.9 0 0 0 .66-1.17 1.6 1.6 0 0 0-.08-1.31"}),a.jsx("path",{fill:"#eb996e",d:"M445.26 158.81s.25.2.28.74a3.2 3.2 0 0 1-.82 2 22 22 0 0 1-2 2.46c-.4.44-.84.89-1.31 1.33a5 5 0 0 1-1.7 1.22 1.9 1.9 0 0 1-1.15 0 1.53 1.53 0 0 1-.88-.75 2.45 2.45 0 0 1 0-2 12.8 12.8 0 0 1 1.6-2.77 11.5 11.5 0 0 1 1.9-2.19 23 23 0 0 1-1.59 2.41 13.7 13.7 0 0 0-1.44 2.71 1.92 1.92 0 0 0 0 1.59 1.11 1.11 0 0 0 1.41.46 4.7 4.7 0 0 0 1.5-1.09c.47-.43.91-.86 1.31-1.28.81-.85 1.49-1.65 2-2.35a3.4 3.4 0 0 0 .92-1.78 4 4 0 0 0-.03-.71"})]}),a.jsx("path",{id:"freepik--Floor--inject-81",fill:"var(--LoginSVG-fill)",d:"M461 480.17c0 .15-97.17.26-217 .26s-217-.11-217-.26 97.15-.26 217-.26 217 .09 217 .26"})]}),J9=(e=0)=>e>=1e6?(e/1e6).toFixed(1).replace(".0","")+"M":e>=1e3?(e/1e3).toFixed(1).replace(".0","")+"k":String(e),K9=_.div`
    width: 100%;
    margin-top: 28px;
    padding-top: 10px;
`,Q9=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 14px;
`,eb=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.15s;
    &:hover { opacity: 0.75; }
`,tb=_.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--textColor);
    color: var(--backgroundColor);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: 700;
`,rb=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,nb=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,ib=_.span`
    font-size: 1em;
    font-weight: 700;
    color: var(--textColor);
    display: flex;
    align-items: center;
    gap: 6px;
`,ob=_.span`
    font-size: 0.78em;
    color: var(--textColor);
    opacity: 0.45;
`,ab=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`,sb=_.span`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.78em;
    font-weight: 600;
    padding: 5px 11px;
    border-radius: 20px;
    background: rgba(128, 128, 128, 0.12);
    color: var(--textColor);
    opacity: 0.65;
`,lb=_.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 15px;
    border-radius: 20px;
    border: 1.5px solid ${({$active:e})=>e?"var(--textColor)":"rgba(128,128,128,0.3)"};
    background: ${({$active:e})=>e?"var(--textColor)":"transparent"};
    color: ${({$active:e})=>e?"var(--backgroundColor)":"var(--textColor)"};
    font-size: 0.88em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        border-color: var(--textColor);
        transform: scale(1.04);
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;_.div`
    display: flex;
    gap: 20px;
    margin-top: 16px;
    flex-wrap: wrap;
`;_.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.88em;
    color: var(--textColor);
    opacity: 0.45;
`;const cb=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
`,ub=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1.5px solid rgba(231, 76, 60, 0.3);
    background: rgba(231, 76, 60, 0.05);
`,db=_.p`
    font-size: 0.7em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #e74c3c;
    margin: 0 0 6px 0;
    display: flex;
    align-items: center;
    gap: 6px;
`,rd=_.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`,nd=_.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 10px;
    border: 1.5px solid rgba(128, 128, 128, 0.22);
    background: rgba(128, 128, 128, 0.07);
    color: var(--textColor);
    font-size: 0.86em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    flex: 1;
    min-width: 130px;
    justify-content: center;

    &:hover:not(:disabled) {
        background: rgba(128, 128, 128, 0.14);
        border-color: rgba(128, 128, 128, 0.45);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`,id=_.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 10px;
    border: 1.5px solid rgba(231, 76, 60, 0.35);
    background: rgba(231, 76, 60, 0.07);
    color: #e74c3c;
    font-size: 0.86em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    flex: 1;
    min-width: 100px;
    justify-content: center;

    &:hover:not(:disabled) {
        background: rgba(231, 76, 60, 0.16);
        border-color: rgba(231, 76, 60, 0.65);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`,hb=_(So)`
    fill: var(--backgroundColor);
`,fb=_(Sc)`
    stroke: var(--textColor);
`;function pb({poster:e,onDeleted:t,onVisibilityChanged:r}){var q,$;const{t:n,i18n:o}=Lt(),s=Cn(),{user:l,isAuthenticated:c}=Zn(),[d,f]=k.useState(e.favorited||!1),[p,v]=k.useState(e.favoritesCount||0),[A,m]=k.useState(!1),[b,y]=k.useState(e.visibility||"public"),[N,C]=k.useState(!1),[L,P]=k.useState(!1),[D,U]=k.useState(!1),H=e.authorId,K=c&&(l==null?void 0:l.id)===((q=H==null?void 0:H._id)==null?void 0:q.toString()),W=c&&(($=l==null?void 0:l.permissions)==null?void 0:$.includes("admin")),E=async()=>{if(!c||A)return;m(!0);const ne=d,ce=p;f(!ne),v(ne?ce-1:ce+1);try{await Ze.toggleFavorite(e._id)}catch{f(ne),v(ce)}finally{m(!1)}},J=async()=>{if(N)return;C(!0);const ne=b==="public"?"private":"public";try{await Ze.updatePosterVisibility(e._id,ne),y(ne),r==null||r(e._id,ne)}catch(ce){console.error("Failed to update visibility",ce)}finally{C(!1)}},S=async()=>{if(!D){U(!0);try{await Ze.deletePoster(e._id),P(!1),t==null||t(e._id)}catch(ne){console.error("Failed to delete poster",ne)}finally{U(!1)}}},T=e.createdAt?new Date(e.createdAt).toLocaleDateString(o.language,{year:"numeric",month:"short",day:"numeric"}):null;return a.jsxs(a.Fragment,{children:[L&&a.jsx(t1,{title:n("DASH_ConfirmDeleteTitle"),paragraph:n("DASH_ConfirmDelete"),confirmText:n("DASH_Delete"),cancelText:n("GoBack"),onConfirm:S,onCancel:()=>P(!1),canClose:!0,isClosing:!1}),a.jsxs(K9,{children:[a.jsxs(Q9,{children:[a.jsxs(eb,{onClick:()=>(H==null?void 0:H.username)&&s(`/u/${H.username}`),children:[a.jsx(tb,{children:H!=null&&H.avatar?a.jsx(rb,{src:H.avatar,alt:H.name}):((H==null?void 0:H.name)||"?").charAt(0).toUpperCase()}),a.jsxs(nb,{children:[a.jsxs(ib,{children:[(H==null?void 0:H.name)||(H==null?void 0:H.username)||"Unknown",(H==null?void 0:H.badge)&&a.jsx(As,{badge:H.badge,size:18})]}),T&&a.jsxs(ob,{children:[n("POSTER_INFO_PublishedAt")," ",T]})]})]}),a.jsxs(ab,{children:[a.jsx(sb,{children:b==="public"?a.jsxs(a.Fragment,{children:[a.jsx(El,{})," ",n("DASH_Public")]}):a.jsxs(a.Fragment,{children:[a.jsx(Dl,{})," ",n("DASH_Private")]})}),a.jsxs(lb,{$active:d,onClick:E,disabled:!c||A,children:[d?a.jsx(hb,{}):a.jsx(fb,{}),J9(p)]})]})]}),K&&a.jsx(cb,{children:a.jsxs(rd,{children:[a.jsx(nd,{onClick:J,disabled:N,children:b==="public"?a.jsxs(a.Fragment,{children:[a.jsx(Dl,{})," ",n("DASH_MakePrivate")]}):a.jsxs(a.Fragment,{children:[a.jsx(El,{})," ",n("DASH_MakePublic")]})}),a.jsxs(id,{onClick:()=>P(!0),children:[a.jsx(Rl,{})," ",n("DASH_Delete")]})]})}),W&&!K&&a.jsxs(ub,{children:[a.jsxs(db,{children:[a.jsx(Rl,{})," ",n("POSTER_INFO_AdminControls")]}),a.jsxs(rd,{children:[a.jsx(nd,{onClick:J,disabled:N,children:b==="public"?a.jsxs(a.Fragment,{children:[a.jsx(Dl,{})," ",n("DASH_MakePrivate")]}):a.jsxs(a.Fragment,{children:[a.jsx(El,{})," ",n("DASH_MakePublic")]})}),a.jsxs(id,{onClick:()=>P(!0),children:[a.jsx(Rl,{})," ",n("DASH_Delete")]})]})]})]})]})}const od=new Set(["Release date","Lançamento","Fecha de lanzamiento","发布日期"]),ad=new Set(["Runtime","Duração","Duración","时长"]),mb={en:"en-US",pt:"pt-BR",es:"es-ES",zh:"zh-CN"},gb={day:"numeric",month:"short",year:"numeric"};function Tf(e){if(!e)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(e)){const[r,n,o]=e.split("-").map(Number);return new Date(r,n-1,o)}const t=new Date(e);return!isNaN(t.getTime())&&t.getFullYear()>=1900&&t.getFullYear()<=2100?t:null}function nc(e,t){const r=Tf(e);if(!r)return e;const n=mb[t]||"en-US";return new Intl.DateTimeFormat(n,gb).format(r)}const xb=_.div`
    width: 80%;
    margin-inline: auto;
`,vb=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,bb=_(lh)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,wb=_.h3`
    font-size: 1.3em;
    font-weight: bold;
`,yb=_.div`
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
`,_b=It`
    0% {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,Cb=It`
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
`,Sb=_.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    animation: ${e=>e.visible?Cs`${_b} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`:Cs`${Cb} 0.3s cubic-bezier(0.4, 0, 1, 1) forwards`};
    transform-origin: center center;
    will-change: opacity, transform;

    @media (max-width: 1292px) {
        margin: 0;
    }

    @media (max-width: 450px) {
        width: 288px;
        height: 448px;
        margin: 0;
    }
`,Ab=_.div`
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
`,kb=It`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.08;
    }
    100% {
        opacity: 0;
    }
`,Mb=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.6) 0%, 
        rgba(255, 255, 255, 0.3) 50%, 
        rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
    z-index: 5;
    animation: ${e=>e.visible?Cs`${kb} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"};
    opacity: 0;
`,Nb=_(n1)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?It`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,jb=_.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Ib=_.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,Sl=_.div`
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
`,Lb=_.div`
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
`,Pb=_.div`
    padding: 15px 40px;
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
`,Tb=_.div`
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
`,sd=_.button`
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
`,Eb=_.textarea`
    width: 100%;
    flex: 1;
    background: var(--glassBackground);
    color: var(--textColor);
    border: none;
    padding: 15px;
    font-size: 14px;
    resize: none;
    border-radius: 8px;
    overflow-y: scroll;
    max-height: 400px;
    line-height: 1.5em;

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
`;_.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    margin-top: 15px;
    margin-left: 22px;
    justify-content: flex-end;

    @media (max-width: 700px) {
        justify-content: center;
        margin-left: 0px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 22px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: var(--AccentColor);
        
        svg {
            stroke: var(--backgroundColor) !important;
            fill: ${e=>e.apply?"var(--backgroundColor) !important":"none"} ;
        }

        span {
            color: var(--backgroundColor) !important;
        }
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;_.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`;_(om)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;_(W9)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;_(X9)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;_(M6)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Cs`
                  animation: ${It`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Cs`
                  animation: ${It`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`;const Db=_.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`;_.p`
    font-size: 0.8em;
    color: var(--textSecondary);
    margin-top: 12px;
    text-align: right;
    line-height: 1.6;
    margin-left: 20px;
    width: 100%;

    @media (max-width: 700px) {
        text-align: center;
        margin-left: 0px;
    }
`;const Rb=_(V4)`
    font-size: 3em;
`,ld=_.div`
    padding: 40px;
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 1300px) {
        width: 90%;
    }

    @media (max-width: 530px) {
        padding: 20px;
    }
`,ic=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,oc=_.h3`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,cd=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
`,Ca=_.div`
    padding: 10px;
    border-radius: 12px;
    background: var(--glassBackground);
    border: 2px solid ${e=>e.$selected?"var(--AccentColor)":"var(--borderColor)"};
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    &:hover {
        border-color: var(--AccentColor);
        transform: translateY(-2px);
    }
`,Sa=_.div`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
`,ac=_.div`
    font-size: 0.75em;
    color: var(--textSecondary);
`,Ob=_.div`
    padding: 10px 10px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    gap: 12px;
`,Fb=_.p`
    font-size: 0.9em;
    color: var(--textColor);
    margin: 0;
    line-height: 1.5;
`,ud=_.button`
    padding: 10px 15px;
    border-radius: 12px;
    background: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 20px var(--borderColor);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`,zb=_.div`
    background: rgba(231, 76, 60, 0.12);
    border: 1px solid rgba(231, 76, 60, 0.35);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.88em;
    color: #e74c3c;
    line-height: 1.5;
`,Bb=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,dd=_.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 2px solid ${({$selected:e})=>e?"var(--AccentColor)":"var(--borderColor)"};
    background: ${({$selected:e})=>e?"var(--AccentColor)20":"transparent"};
    cursor: pointer;
    transition: all 0.18s;
    text-align: left;

    &:hover {
        border-color: var(--AccentColor);
        background: var(--AccentColor)14;
    }
`,hd=_.div`
    font-size: 1.5em;
    color: ${({$selected:e})=>e?"var(--AccentColor)":"var(--textColor)"};
    display: flex;
    align-items: center;
    flex-shrink: 0;
`,fd=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,pd=_.span`
    font-size: 1.4em;
    font-weight: 700;
    color: var(--textColor);
`,md=_.span`
    font-size: 1.1em;
    opacity: 0.65;
    color: var(--textColor);
`,Ub=_(A6)`
    font-size: 2em;
`,Hb=_(S6)`
    font-size: 2em;
`,$b=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    padding: 1rem;
`,qb=_.p`
    font-size: 1em;
    color: var(--textColor);
    margin-top: 15px;
    font-weight: bolder;
`,Vb=_.button`
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    background: var(--AccentColor);
    color: var(--backgroundColor);
    border: none;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
`,g0=k.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:o,source:s,posterId:l,posterFullData:c,onPublishSuccess:d},f)=>{const{t:p,i18n:v}=Lt(),A=Cn(),{isAuthenticated:m}=Zn(),b=k.useRef(null),y=k.useRef(null),N=k.useRef(null),[C,L]=k.useState(""),[P,D]=k.useState(""),[U,H]=k.useState(""),[K,W]=k.useState(""),[E,J]=k.useState(""),[S,T]=k.useState("200"),[q,$]=k.useState("110"),[ne,ce]=k.useState("50"),[pe,ae]=k.useState((n==null?void 0:n.marginTop)??""),[ve,we]=k.useState(160),[re,M]=k.useState((n==null?void 0:n.marginCover)??0),[z,X]=k.useState((n==null?void 0:n.marginBackground)??0),[Q,ee]=k.useState("#5900ff"),[se,fe]=k.useState("#ff9100"),[ie,xe]=k.useState("#ff0000"),[_e,Le]=k.useState("#00ff40"),[Pe,be]=k.useState("#2600ff"),[Z,rt]=k.useState(!0),[Je,Ge]=k.useState((n==null?void 0:n.useFade)??!0),[je,Fe]=k.useState((n==null?void 0:n.showTracklist)??!1),[Ee,nt]=k.useState((n==null?void 0:n.showArtistSignature)??!1),[Be,yt]=k.useState(""),[it,ot]=k.useState(""),[At,ut]=k.useState(""),[qe,at]=k.useState(null),[ze,Ct]=k.useState("information"),[vt,Ve]=k.useState("public"),[ct,Mt]=k.useState(!1),[ye,Oe]=k.useState("");function Re(ue){qi(!0),L(ue.albumName||""),D(ue.albumNameOriginal||ue.albumName||""),H(ue.artistsName||""),W(ue.artistsNameOriginal||ue.artistsName||""),J(ue.spotifyArtistId||""),T(ue.titleSize||"200"),$(ue.artistsSize||"110"),ce(ue.tracksSize||"50"),ae(ue.marginTop||""),we(ue.marginSide||160),M(ue.marginCover||0),X(ue.marginBackground||0),ee(ue.backgroundColor||"#5900ff"),fe(ue.textColor||"#ff9100"),xe(ue.color1||"#ff0000"),Le(ue.color2||"#00ff40"),be(ue.color3||"#2600ff"),ue.coverZoom!==void 0?An(ue.coverZoom):ue.marginCover!==void 0?An(-ue.marginCover/11):An(0),yi(ue.coverHorizontalPosition||0),oa(ue.coverVerticalPosition||0),ko(ue.coverBlur||0),rt(ue.useWatermark!==void 0?ue.useWatermark:!0),Ge(ue.useFade!==void 0?ue.useFade:!0),Fe(ue.showTracklist!==void 0?ue.showTracklist:!1),nt(ue.showArtistSignature!==void 0?ue.showArtistSignature:!1),Tt(ue.useUncompressed!==void 0?ue.useUncompressed:!1),yt(ue.albumCover||""),ot(ue.uncompressedAlbumCover||""),ut(ue.customFont||""),nn(ue.tracklist||""),Jr(od.has(ue.titleRelease)?p("EDITOR_ReleaseTitle"):ue.titleRelease??""),Mr.current=ue.releaseDate||"",tt(nc(ue.releaseDate||"",v.language)),Nr(ad.has(ue.titleRuntime)?p("EDITOR_RuntimeTitle"):ue.titleRuntime??""),qt(ue.runtime||""),Ki()}k.useEffect(()=>{if(qe){const ue=new FileReader;ue.onload=async pt=>{const Gt="CustomFont",Or=new FontFace(Gt,pt.target.result);try{const ar=await Or.load();document.fonts.add(ar),ut(Gt)}catch(ar){console.error("Erro ao carregar fonte:",ar)}},ue.readAsArrayBuffer(qe)}},[qe]),k.useEffect(()=>{o&&Re(o)},[o]);const[ft,Tt]=k.useState(!1),[jt,lt]=k.useState("Original"),[_t,nn]=k.useState(""),[mr,Jr]=k.useState(""),[Vr,tt]=k.useState(""),Mr=k.useRef(""),[on,Nr]=k.useState(""),[Dr,qt]=k.useState("");k.useEffect(()=>{if(Jr(ue=>od.has(ue)?p("EDITOR_ReleaseTitle"):ue),Nr(ue=>ad.has(ue)?p("EDITOR_RuntimeTitle"):ue),Mr.current){const ue=nc(Mr.current,v.language);(ue!==Mr.current||Tf(Mr.current))&&tt(ue)}},[v.language]);const[gr,xr]=k.useState(!1),[Qn,ei]=k.useState(null),[Ar,Sn]=k.useState(null),[an,Kr]=k.useState(!1),[Yr,wi]=k.useState(null),[Rr,An]=k.useState((n==null?void 0:n.coverZoom)??0),[ti,yi]=k.useState(0),[ri,oa]=k.useState(0),[_i,ko]=k.useState(0),[Mo,Gr]=k.useState(!1),[Hi,aa]=k.useState(!1),[$i,No]=k.useState(!1),[jo,sa]=k.useState(!1),[ni,qi]=k.useState(!1),[Bt,Vi]=k.useState("png"),[ii,sn]=k.useState(1);k.useEffect(()=>{if(!ni){const ue=-Rr*10;M(ue)}},[Rr,ni]);const Ci=ue=>{T(ue.target.value),Gr(!0)},ln=(ue,pt)=>{pt&&!Hi?(T(ue),aa(!0)):Mo||T(ue)},Si=ue=>{ce(ue.target.value),No(!0)},Qt=(ue,pt)=>{pt&&!jo?(ce(ue),sa(!0)):$i||ce(ue)},Yi=ue=>{E||J(ue)},Io={albumCover:Be,uncompressedAlbumCover:it,useUncompressed:ft,albumName:C,artistsName:U,spotifyArtistId:E,titleSize:S,artistsSize:q,tracksSize:ne,marginTop:pe,marginSide:ve,marginCover:re,marginBackground:z,titleRelease:mr,releaseDate:Vr,titleRuntime:on,runtime:Dr,backgroundColor:Q,textColor:se,useWatermark:Z,useFade:Je,showTracklist:je,showArtistSignature:Ee,tracklist:_t,color1:ie,color2:_e,color3:Pe,albumID:e,coverZoom:Rr,coverHorizontalPosition:ti,coverVerticalPosition:ri,coverBlur:_i,userAdjustedTitleSize:Mo,initialTitleSizeSet:Hi,userAdjustedTracksSize:$i,initialTracksSizeSet:jo},[Lo,Ba]=k.useState(null),[jr,Gi]=k.useState(null),[oi,cn]=k.useState(null),[Ai,la]=k.useState(!1),[ca,Wi]=k.useState(!1),[Xi,zn]=k.useState(!1),[kn,ua]=k.useState(!1),[Zi,Ji]=k.useState(!1),[dt,Po]=k.useState(!1);k.useEffect(()=>{if(Ai){zn(!1);const ue=setTimeout(()=>{Po(!0)},100);return()=>clearTimeout(ue)}else Po(!1)},[Ai]);const Ua=ue=>{la(!1),Ji(!1),x3(C,U),setTimeout(()=>{Ba(ue),Po(!1),setTimeout(()=>{zn(!0)},50)},300)},Ha=ue=>{Gi(ue),Wi(!1)};k.useEffect(()=>{if(jr&&oi){if(oi==="png"){const ue=document.createElement("a");ue.href=jr,ue.download=`Posterfy - ${C}.png`,ue.click(),P1(C,"poster",U),l&&(Ze.registerDownload(l).catch(()=>{}),f2(l,C,U,"png"))}else if(oi==="pdf"){const ue=new Image;ue.onload=()=>{const pt=new Qe({orientation:"portrait",unit:"mm",format:"a4",compress:!1});pt.addImage(jr,"JPEG",0,0,210,297,void 0,"FAST"),pt.save(`Posterfy - ${C}.pdf`),P1(C,"poster_pdf",U),l&&(Ze.registerDownload(l).catch(()=>{}),f2(l,C,U,"pdf"))},ue.src=jr}else if(oi==="jpg"){const ue=new Image;ue.onload=()=>{const pt=document.createElement("canvas");pt.width=ue.width,pt.height=ue.height;const Gt=pt.getContext("2d");Gt.fillStyle="#FFFFFF",Gt.fillRect(0,0,pt.width,pt.height),Gt.drawImage(ue,0,0),pt.toBlob(Or=>{const ar=document.createElement("a");ar.href=URL.createObjectURL(Or),ar.download=`Posterfy - ${C}.jpg`,ar.click(),URL.revokeObjectURL(ar.href),P1(C,"poster_jpg",U),l&&Ze.registerDownload(l).catch(()=>{})},"image/jpeg",.95)},ue.src=jr}Gi(null),cn(null)}},[jr,oi,C,U]),k.useEffect(()=>{Gi(null)},[ii]);const Ki=()=>{Gr(!1),No(!1),zn(!1),requestAnimationFrame(()=>{Ji(!0),la(!0)})},Bn=ue=>{yt(URL.createObjectURL(ue)),Tt(!1),ot(""),lt(ue.name),qi(!1)},un=()=>{cn("png"),Wi(!0)},$a=async()=>{Mt(!0),Oe("");try{const ue=Io;if(l){const Or=await Ze.updatePosterJson(l,ue,C,U);d==null||d(Or.poster._id),t();return}const pt={spotifyAlbumId:e,albumName:C,albumNameOriginal:P||C,artistsName:U,artistsNameOriginal:K||U,releaseDate:Vr,visibility:vt,posterJson:ue},Gt=await Ze.publishPoster(pt);_3(C,U,vt),d==null||d(Gt.poster._id),t()}catch(ue){Oe(ue.message||p("COMMUNITY_PublishError"))}finally{Mt(!1)}},da=()=>{cn("pdf"),Wi(!0)},Qi=()=>{cn("jpg"),Wi(!0)};function Un(ue,pt){ei(ue),Sn(pt),xr(!0)}function ai(){xr(!1)}function eo(ue){wi(ue),Kr(!0)}function ki(){Kr(!1)}const qa=()=>{const pt=_t.split(`
`).map(Gt=>Gt.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());nn(pt.join(`
`))},To=()=>{const pt=_t.split(`
`).map(Gt=>Gt.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());nn(pt.join(`
`))};async function Eo(ue,pt="us"){var Gt;try{let Or=`https://itunes.apple.com/search?term=${encodeURIComponent(ue)}&country=${pt}&entity=album&limit=1`,ar=await fetch(Or);if(!ar.ok)throw new Error(`HTTP Error: ${ar.status}`);let to=await ar.json();if(!((Gt=to.results)!=null&&Gt.length))return console.warn("No album data found."),Tt(!1),!1;let Wt=to.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Wt.length===2?`https://a5.mzstatic.com/us/r1000/0/${Wt[1].split("/").slice(0,-1).join("/")}`:""}catch(Or){return console.error("Error fetching album cover:",Or.message),""}}k.useEffect(()=>{Jr(p("EDITOR_ReleaseTitle")),Nr(p("EDITOR_RuntimeTitle"))},[p]),k.useEffect(()=>{const ue=async()=>{var pt;try{const Do=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Wt=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Do}`}})).json(),Mi=Wt.artists.map(He=>He.name).join(", ");L(Wt.name),D(Wt.name),H(Mi),W(Mi),Wt.artists.length>0&&(console.debug("Setting Spotify artist ID:",Wt.artists[0].id),J(Wt.artists[0].id));const ha=(pt=Wt.images[0])==null?void 0:pt.url,li=await G9(ha);yt(li),Mr.current=Wt.release_date,tt(nc(Wt.release_date,v.language));const Ro=await Eo(Wt.name+" "+Mi);ot(Ro||li);const g=Wt.tracks.items.reduce((He,st)=>He+st.duration_ms,0),j=Math.floor(g/1e3),V=Math.floor(j/60),te=Math.floor(V/60),de=j%60,Se=V%60,Me=te>0?`${te}h ${Se}min ${de}s`:`${Se}min ${de}s`;qt(Me);const Ue=Wt.tracks.items.map((He,st)=>(st===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&Fe(!0),`${st+1}. ${He.name}`));nn(Ue.join(`
`)),ua(!0)}catch(Gt){console.error("Error trying to fetch album data:",Gt)}};o?(Re(o),ua(!0)):(qi(!1),ue())},[e]),k.useEffect(()=>{const ue=pt=>{pt.ctrlKey&&pt.key==="s"?(pt.preventDefault(),Ki()):pt.ctrlKey&&pt.shiftKey&&pt.key==="D"?(pt.preventDefault(),da()):pt.ctrlKey&&pt.key==="d"&&(pt.preventDefault(),un())};return window.addEventListener("keydown",ue),()=>{window.removeEventListener("keydown",ue)}},[Lo,C,un]);const si=k.useRef(!0);return k.useEffect(()=>{if(si.current){si.current=!1;return}if(!kn)return;const ue=setTimeout(()=>{Ki()},1e3);return()=>{clearTimeout(ue)}},[C,U,S,q,ne,pe,ve,re,z,Q,se,ie,_e,Pe,Z,Je,je,Ee,_t,ft,mr,Vr,on,Dr,Rr,ti,ri,_i,At,kn]),a.jsx(a.Fragment,{children:kn?a.jsxs(xb,{ref:f,children:[a.jsx(Lh.Palette,{src:Be,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:ue})=>(k.useEffect(()=>{ue&&ue.length>0&&!ni&&(ee(ue[0]),fe(ue[1]),xe(ue[2]),Le(ue[3]),be(ue[4]),Ki())},[ue]),null)}),a.jsxs(vb,{onClick:t,children:[a.jsx(bb,{}),a.jsx(wb,{children:p("GoBack")})]}),a.jsxs(yb,{children:[a.jsx(Yl,{ref:y,onImageReady:Ua,posterData:Io,generatePoster:Ai,onTitleSizeAdjust:ln,onTracksSizeAdjust:Qt,onArtistIdDiscovered:Yi,customFont:At,scale:.3}),ca&&a.jsx("div",{style:{position:"absolute",left:"-9999px",top:"-9999px"},children:a.jsx(Yl,{ref:N,onImageReady:Ha,posterData:Io,generatePoster:ca,onArtistIdDiscovered:Yi,customFont:At,scale:ii})}),a.jsxs(Ab,{children:[a.jsx(Mb,{visible:Xi}),Lo?a.jsx(Sb,{src:Lo,ref:b,visible:Xi}):a.jsx(Db,{ref:b}),a.jsx(Nb,{visible:dt})]}),a.jsxs(jb,{children:[a.jsx(Jt,{animationDelay:50,children:a.jsxs(Ib,{children:[a.jsx(Sl,{$active:ze==="information",onClick:()=>Ct("information"),children:p("EDITOR_InformationTab")}),a.jsx(Sl,{$active:ze==="tracklist",onClick:()=>Ct("tracklist"),children:p("EDITOR_TracklistTab")}),a.jsx(Sl,{$active:ze==="export",onClick:()=>Ct("export"),children:p("EDITOR_ExportTab")}),s==="search_creation"&&a.jsx(Sl,{$active:ze==="publish",onClick:()=>Ct("publish"),children:p("EDITOR_PublishTab")})]})}),ze==="information"?a.jsxs(Lb,{children:[a.jsx(Jt,{animationDelay:0,children:a.jsx(xo,{title:p("EDITOR_AlbumName"),value:C,onChange:ue=>L(ue.target.value)})}),a.jsx(Jt,{animationDelay:50,children:a.jsx(xo,{title:p("EDITOR_ArtistName"),value:U,onChange:ue=>H(ue.target.value)})}),a.jsx(Jt,{animationDelay:100,children:a.jsx(xo,{title:p("EDITOR_TitleSize"),value:S,onChange:Ci})}),a.jsx(Jt,{animationDelay:150,children:a.jsx(xo,{title:p("EDITOR_ArtistSize"),value:q,onChange:ue=>$(ue.target.value)})}),a.jsx(Jt,{animationDelay:200,children:a.jsx(xo,{title:p("EDITOR_TracksSize"),value:ne,onChange:Si})}),a.jsx(Jt,{animationDelay:250,children:a.jsx(xo,{title:p("EDITOR_MarginTop"),value:pe,onChange:ue=>ae(ue.target.value)})}),a.jsx(Jt,{animationDelay:300,children:a.jsx(xo,{title:p("EDITOR_MarginSide"),value:ve,onChange:ue=>we(ue.target.value)})}),a.jsx(Jt,{animationDelay:350,children:a.jsx(m7,{title:p("EDITOR_CoverEditor"),text:p("EDITOR_EditCover"),onClick:eo,icon:Rb})}),a.jsx(Jt,{animationDelay:375,children:a.jsx(xo,{title:p("EDITOR_MarginBackground"),value:z,onChange:ue=>X(ue.target.value)})}),a.jsx(Jt,{animationDelay:400,children:a.jsx(P2,{title:mr,value:Vr,onChangeTitle:ue=>Jr(ue.target.value),onChangeDate:ue=>{Mr.current=ue.target.value,tt(ue.target.value)}})}),a.jsx(Jt,{animationDelay:450,children:a.jsx(P2,{title:on,value:Dr,onChangeTitle:ue=>Nr(ue.target.value),onChangeDate:ue=>qt(ue.target.value)})}),a.jsx(Jt,{animationDelay:500,children:a.jsx(cs,{title:p("EDITOR_BackgroundColor"),value:Q,onClick:ue=>Un(ue,"backgroundColor")})}),a.jsx(Jt,{animationDelay:550,children:a.jsx(cs,{title:p("EDITOR_TextColor"),value:se,onClick:ue=>Un(ue,"textColor")})}),a.jsx(Jt,{animationDelay:600,children:a.jsx(cs,{title:`${p("EDITOR_Color")} 1`,value:ie,onClick:ue=>Un(ue,"color1")})}),a.jsx(Jt,{animationDelay:650,children:a.jsx(cs,{title:`${p("EDITOR_Color")} 2`,value:_e,onClick:ue=>Un(ue,"color2")})}),a.jsx(Jt,{animationDelay:700,children:a.jsx(cs,{title:`${p("EDITOR_Color")} 3`,value:Pe,onClick:ue=>Un(ue,"color3")})}),a.jsx(Jt,{animationDelay:750,children:a.jsx(us,{title:p("EDITOR_Watermark"),value:Z,onChange:ue=>rt(ue),text:p("EDITOR_WatermarkText")})}),a.jsx(Jt,{animationDelay:800,children:a.jsx(us,{title:p("EDITOR_Fade"),value:Je,onChange:ue=>Ge(ue),text:p("EDITOR_FadeText")})}),a.jsx(Jt,{animationDelay:850,children:a.jsx(us,{title:p("EDITOR_Uncompressed"),value:ft,onChange:ue=>Tt(ue),text:p("EDITOR_UncompressedText")})}),a.jsx(Jt,{animationDelay:900,children:a.jsx(us,{title:p("EDITOR_Tracklist"),value:je,onChange:ue=>Fe(ue),text:p("EDITOR_TracklistText")})}),a.jsx(Jt,{animationDelay:950,children:a.jsx(us,{title:p("EDITOR_Signature"),value:Ee,onChange:ue=>nt(ue),text:p("EDITOR_SignatureText")})}),a.jsx(Jt,{animationDelay:1e3,children:a.jsx(R2,{title:p("EDITOR_Cover"),onChange:Bn,text:jt,accept:"image/png, image/jpg, image/jpeg",icon:g7})}),a.jsx(Jt,{animationDelay:1e3,children:a.jsx(R2,{title:p("EDITOR_Font"),text:(qe==null?void 0:qe.name)||p("EDITOR_DefaultFont"),onChange:at,accept:".ttf,.otf",icon:x7})})]}):ze==="tracklist"?a.jsxs(Pb,{children:[a.jsx(Eb,{value:_t,onChange:ue=>nn(ue.target.value),placeholder:p("EDITOR_TracklistPlaceholder"),"data-lenis-prevent":!0}),a.jsxs(Tb,{children:[a.jsx(sd,{onClick:qa,children:p("EDITOR_RemoveParentheses")}),a.jsx(sd,{onClick:To,children:p("EDITOR_RemoveBrackets")})]})]}):ze==="export"?a.jsxs(ld,{children:[a.jsxs(ic,{children:[a.jsx(oc,{children:p("EXPORT_Format")}),a.jsxs(cd,{children:[a.jsx(Ca,{$selected:Bt==="png",onClick:()=>Vi("png"),children:a.jsx(Sa,{children:"PNG"})}),a.jsx(Ca,{$selected:Bt==="pdf",onClick:()=>Vi("pdf"),children:a.jsx(Sa,{children:"PDF"})}),a.jsx(Ca,{$selected:Bt==="jpg",onClick:()=>Vi("jpg"),children:a.jsx(Sa,{children:"JPG"})})]})]}),a.jsxs(ic,{children:[a.jsx(oc,{children:p("EXPORT_Size")}),a.jsxs(cd,{children:[a.jsxs(Ca,{$selected:ii===.3,onClick:()=>sn(.3),children:[a.jsx(Sa,{children:p("EXPORT_SizeThumbnail")}),a.jsx(ac,{children:p("EXPORT_SizeDescription_Thumbnail")})]}),a.jsxs(Ca,{$selected:ii===.6,onClick:()=>sn(.6),children:[a.jsx(Sa,{children:p("EXPORT_SizeMedium")}),a.jsx(ac,{children:p("EXPORT_SizeDescription_Medium")})]}),a.jsxs(Ca,{$selected:ii===1,onClick:()=>sn(1),children:[a.jsx(Sa,{children:p("EXPORT_SizeNormal")}),a.jsx(ac,{children:p("EXPORT_SizeDescription_Normal")})]})]})]}),a.jsxs(Ob,{children:[a.jsx(v7,{size:24,style:{color:"var(--AccentColor)",flexShrink:0}}),a.jsx(Fb,{children:p("EXPORT_PrintTip")})]}),a.jsx(ud,{onClick:()=>{Bt==="png"?un():Bt==="pdf"?da():Bt==="jpg"&&Qi()},children:p("EXPORT_DownloadButton")})]}):ze==="publish"&&s==="search_creation"?a.jsx(ld,{children:m?a.jsxs(a.Fragment,{children:[a.jsxs(ic,{children:[a.jsx(oc,{children:p("COMMUNITY_VisibilityLabel")}),a.jsxs(Bb,{children:[a.jsxs(dd,{$selected:vt==="public",onClick:()=>Ve("public"),children:[a.jsx(hd,{$selected:vt==="public",children:a.jsx(Ub,{})}),a.jsxs(fd,{children:[a.jsx(pd,{children:p("COMMUNITY_Public")}),a.jsx(md,{children:p("COMMUNITY_PublicDesc")})]})]}),a.jsxs(dd,{$selected:vt==="private",onClick:()=>Ve("private"),children:[a.jsx(hd,{$selected:vt==="private",children:a.jsx(Hb,{})}),a.jsxs(fd,{children:[a.jsx(pd,{children:p("COMMUNITY_Private")}),a.jsx(md,{children:p("COMMUNITY_PrivateDesc")})]})]})]})]}),ye&&a.jsx(zb,{children:ye}),a.jsx(ud,{onClick:$a,disabled:ct,children:p(ct?"COMMUNITY_Publishing":"COMMUNITY_Publish")})]}):a.jsxs($b,{children:[a.jsx(Z9,{width:"62%",height:120}),a.jsx(qb,{children:p("COMMUNITY_LoginToPublish")}),a.jsx(Vb,{onClick:()=>A("/login"),children:p("Login")})]})}):null]})]}),c&&a.jsx(pb,{poster:c,onDeleted:t,onVisibilityChanged:()=>{}}),gr&&Qn&&Ar&&i2.createPortal(a.jsx(G8,{DefaultColor:Ar==="backgroundColor"?Q:Ar==="textColor"?se:Ar==="color1"?ie:Ar==="color2"?_e:Pe,image:Be,predefinedColors:[ie,_e,Pe,Q,se],onDone:ue=>{switch(Ar){case"backgroundColor":ee(ue);break;case"textColor":fe(ue);break;case"color1":xe(ue);break;case"color2":Le(ue);break;case"color3":be(ue);break}ai()},position:Qn,onClose:ai}),document.body),an&&Yr&&i2.createPortal(a.jsx(Q8,{position:Yr,albumCoverUrl:ft?it:Be,initialZoom:Rr,initialHorizontalPosition:ti,initialVerticalPosition:ri,initialBlur:_i,onDone:ue=>{qi(!1),An(ue.zoom),yi(ue.horizontalPosition),oa(ue.verticalPosition),ko(ue.blur),ki()},onClose:ki}),document.body)]}):a.jsx(Ih,{})})});g0.displayName="PosterEditor";const Yb=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[a.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),a.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Gb=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[a.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),a.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},Wb=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const o=e*264/186;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[a.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),a.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),a.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},Xb=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[a.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),a.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Zb=_.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,Jb=_(lh)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,Kb=_.h3`
  font-size: 1.3em;
  font-weight: bold;
`,x0=It`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Qb=_.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${x0} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 40px;

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
`,Al=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${x0} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,kl=_.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${x0} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,ew=_.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,tw=_.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function rw({onSelectModel:e,onBack:t}){const{t:r}=Lt(),n={coverZoom:50,marginBackground:-700,showTracklist:!1,marginTop:200},o={coverZoom:-16,useFade:!1,marginTop:20},s={coverZoom:110,marginBackground:-1200,useFade:!1},l={coverZoom:0,marginBackground:0,showTracklist:!0,useFade:!0};function c(f,p){g3("select_model","ModelSelector",f),e&&e(f,p)}const d=[0,.08,.16,.24];return a.jsxs(a.Fragment,{children:[a.jsxs(Zb,{onClick:t,children:[a.jsx(Jb,{}),a.jsx(Kb,{children:r("GoBack")})]}),a.jsx(ew,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),a.jsx(tw,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),a.jsxs(Qb,{children:[a.jsxs(Al,{delay:d[0],onClick:()=>c("standart",l),children:[a.jsx(Yb,{width:200}),a.jsx(kl,{delay:d[0],children:"Standard"})]}),a.jsxs(Al,{delay:d[1],onClick:()=>c("frame",o),children:[a.jsx(Xb,{width:200}),a.jsx(kl,{delay:d[1],children:"Frame"})]}),a.jsxs(Al,{delay:d[2],onClick:()=>c("basic",n),children:[a.jsx(Gb,{width:200}),a.jsx(kl,{delay:d[2],children:"Basic"})]}),a.jsxs(Al,{delay:d[3],onClick:()=>c("fullcover",s),children:[a.jsx(Wb,{width:200}),a.jsx(kl,{delay:d[3],children:"Full Cover"})]})]})]})}const nw=_.div`
    width: 100%;
`,iw=_.div`
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
`,ow=_(Jc)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,aw=_($3)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,sw=_.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,lw=_.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function cw({onSearch:e,value:t=""}){const{t:r}=Lt(),[n,o]=k.useState(t);k.useEffect(()=>{o(t)},[t]);const s=d=>{d.key==="Enter"&&(e(n),n.trim()&&h2(n.trim()))},l=d=>{o(d.target.value)},c=()=>{e(n),n.trim()&&h2(n.trim())};return a.jsx(nw,{children:a.jsxs(iw,{role:"search","aria-label":"Album search for poster creation",children:[a.jsx(ow,{"aria-hidden":"true"}),a.jsx(sw,{}),a.jsx(lw,{placeholder:r("SearchPlaceholder"),value:n,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),a.jsx(aw,{onClick:c,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const uw=_.div`
    width: min-content;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    min-width: 200px;
    max-width: 220px;
    opacity: ${e=>e.$visible?1:0};
    transform: translateY(${e=>e.$visible?"0":"20px"});
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;

    &:hover{
        transform: translateY(0) scale(1.03);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
        transition: all 0.3s;
        background-color: var(--glassBackground);
        z-index: 1;
        border: 1px solid transparent;
    }

    :hover::before {
        border: 2px solid var(--PosterShare-light);
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

`,dw=_.img`
    width: 100%;
    min-height: 200px;
    background-color: var(--glassBackground);
    height: auto;
    border-radius: 10px;
    z-index: 10;
    opacity: ${e=>e.$loaded?1:0};
    transition: opacity 0.3s ease;

    @media (max-width: 650px) {
        width: 100px;
        height: 100px;
        min-height: unset;
    }
`,hw=_.h3`
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
`,fw=_.p`
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
`,pw=_.div`
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
`;function mw({title:e,artist:t,cover:r,id:n,onClick:o,animationDelay:s=0}){const[l,c]=k.useState(!1),[d,f]=k.useState(!1),[p,v]=k.useState(!1);k.useEffect(()=>{if(p)c(!0);else{const m=setTimeout(()=>{c(!0),v(!0)},s);return()=>clearTimeout(m)}},[s,p]);const A=()=>{f(!0)};return a.jsxs(uw,{onClick:()=>o(n),$visible:l,children:[a.jsx(dw,{src:r,$loaded:d,onLoad:A,loading:"lazy"}),a.jsxs(pw,{children:[a.jsx(hw,{children:e}),a.jsx(fw,{children:t})]})]})}const gw=_.div`
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
`,xw=_.button`
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
`,vw=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,bw=_.p`
    font-size: 1em;
    font-weight: 600;
    opacity: 0.5;
    color: var(--textColor);
    margin: 0;
    margin-top: 20px;
`,ww=_.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
    opacity: ${e=>e.$visible?1:0};
    transform: translateY(${e=>e.$visible?"0":"10px"});
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;function gd({query:e,onclick:t}){const{t:r}=Lt(),[n,o]=k.useState([]),[s,l]=k.useState(""),[c,d]=k.useState(0),[f,p]=k.useState(!0),[v,A]=k.useState(!1),[m,b]=k.useState(!1),[y,N]=k.useState(0),[C,L]=k.useState(!1),P=10;k.useEffect(()=>{(async()=>{const E=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(E.access_token)})()},[]),k.useEffect(()=>{o([]),d(0),p(!0),N(0),L(!1)},[e]),k.useEffect(()=>{const U=async(H=!1)=>{var K,W;if(s){H?b(!0):A(!0);try{let E;const J=H?c:0;if(e)E=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${J}`,{headers:{Authorization:`Bearer ${s}`}});else{const ae=new Date().getFullYear();E=await fetch(`https://api.spotify.com/v1/search?q=tag%3Anew+year%3A${ae}&type=album&limit=${P}&offset=${J}`,{headers:{Authorization:`Bearer ${s}`}})}if(!E.ok){const ae=await E.text();throw new Error(`Erro na API: ${ae}`)}const S=await E.json(),q=(((K=S.albums)==null?void 0:K.items)||[]).filter(ae=>ae!=null).map(ae=>{var ve,we;return{id:ae.id,title:ae.name,artist:(ve=ae.artists)==null?void 0:ve.map(re=>re.name).join(", "),cover:(we=ae.images[0])==null?void 0:we.url}});H?(L(!1),N(n.length),o(ae=>[...ae,...q])):(L(!1),N(0),o(q));const $=(q.length-1)*80;setTimeout(()=>{L(!0)},$+800);const ce=((W=S.albums)==null?void 0:W.total)||0,pe=H?n.length+q.length:q.length;p(pe<ce&&q.length===P)}catch(E){console.error(E)}finally{A(!1),b(!1)}}};s&&(n.length===0||c===0)&&U(!1)},[e,s]);const D=async()=>{var H,K;if(!s||!f||m)return;const U=c+P;d(U);try{b(!0);let W;if(e)W=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${U}`,{headers:{Authorization:`Bearer ${s}`}});else{const ce=new Date().getFullYear();W=await fetch(`https://api.spotify.com/v1/search?q=tag%3Anew+year%3A${ce}&type=album&limit=${P}&offset=${U}`,{headers:{Authorization:`Bearer ${s}`}})}if(!W.ok){const ce=await W.text();throw new Error(`Erro na API: ${ce}`)}const E=await W.json(),S=(((H=E.albums)==null?void 0:H.items)||[]).filter(ce=>ce!=null).map(ce=>{var pe,ae;return{id:ce.id,title:ce.name,artist:(pe=ce.artists)==null?void 0:pe.map(ve=>ve.name).join(", "),cover:(ae=ce.images[0])==null?void 0:ae.url}});L(!1),N(n.length),o(ce=>[...ce,...S]);const T=(S.length-1)*80;setTimeout(()=>{L(!0)},T+800);const $=((K=E.albums)==null?void 0:K.total)||0,ne=n.length+S.length;p(ne<$&&S.length===P)}catch(W){console.error(W)}finally{b(!1)}};return a.jsx(a.Fragment,{children:v&&n.length===0?a.jsx(Ih,{}):!v&&n.length===0?a.jsxs(vw,{children:[a.jsx(Da,{width:220}),a.jsx(bw,{children:r("NoResults")})]}):a.jsxs(a.Fragment,{children:[a.jsx(gw,{children:n.map((U,H)=>{const K=H>=y?H-y:H;return a.jsx(mw,{onClick:()=>t(U.id),cover:U.cover,title:U.title,artist:U.artist,id:U.id,animationDelay:K*80},U.id)})}),f&&a.jsx(ww,{$visible:C,children:a.jsx(xw,{onClick:D,disabled:m,children:r(m?"LoadingMore":"LoadMore")})})]})})}const yw=({onBack:e,onPublishSuccess:t})=>{const[r,n]=k.useState(""),[o,s]=k.useState(null),[l,c]=k.useState(!1),[d,f]=k.useState(null),[p,v]=k.useState(null),A=k.useRef(null);k.useEffect(()=>{l&&o&&A.current&&setTimeout(()=>{A.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[l,o]);function m(N){s(N),c(!0),f(null),v(null)}function b(){s(null),c(!1),f(null),v(null),e&&e()}const y=N=>{n(N)};return o&&d&&p?a.jsx(g0,{albumID:o,handleClickBack:b,model:d,modelParams:p,source:"search_creation",onPublishSuccess:t}):o&&l?a.jsx("div",{ref:A,children:a.jsx(rw,{onSelectModel:(N,C)=>{f(N),v(C),c(!1)},onBack:b})}):a.jsxs(a.Fragment,{children:[a.jsx(cw,{onSearch:y,value:r}),r.trim()?a.jsx(gd,{query:r,onclick:m}):a.jsx("div",{children:a.jsx(gd,{onclick:m})})]})},wo=_.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function xd({loadingComplete:e}){const{t}=Lt(),{posterId:r}=Kd(),[n,o]=k.useState(null),[s,l]=k.useState(null),[c,d]=k.useState(null),f=k.useRef(null);k.useEffect(()=>{if(!r)return;let T=!1;return(async()=>{try{const $=await Ze.getPoster(r);if(T)return;Ze.registerView(r).catch(()=>{}),y3(r,$.poster.albumName,$.poster.artistsName);const ne={...$.poster.posterJson||{},albumID:$.poster.spotifyAlbumId};o(ne),l($.poster),setTimeout(()=>{if(f.current){const ce=f.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:ce,behavior:"smooth"})}},200)}catch($){console.error("Failed to load community poster:",$)}})(),()=>{T=!0}},[r]);const[p,v]=Oi(),[A,m]=Oi(),[b,y]=Oi(),[N,C]=Oi(),[L,P]=Oi(),[D,U]=Oi(),[H,K]=Oi(),[W,E]=Oi(),J=T=>{w3(T.albumName||"Unknown Album",T.artistsName||"Unknown Artist",T.albumID||"","album_collection"),o(T),setTimeout(()=>{if(f.current){const q=f.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:q,behavior:"smooth"})}},100)},S=()=>{o(null),l(null)};return a.jsxs(a.Fragment,{children:[c&&a.jsx(t1,{title:t("COMMUNITY_PublishSuccess"),paragraph:t("COMMUNITY_PublishedModalBody"),confirmText:t("GotIt"),onConfirm:()=>d(null),canClose:!0,onCancel:()=>d(null),isClosing:!1}),a.jsx(K6,{showAnimation:e,onRecreate:J}),a.jsx(wo,{ref:p,$isVisible:v,children:a.jsx(Fa,{text:t("anchorArt"),type:1})}),a.jsx(wo,{ref:A,$isVisible:m,children:a.jsx(r1,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),a.jsx(wo,{ref:b,$isVisible:y,children:n?a.jsx(g0,{ref:f,albumID:n.albumID,initialPosterJson:n,handleClickBack:S,posterId:r||null,posterFullData:s,onPublishSuccess:T=>d({posterId:T})}):a.jsx(yw,{onPublishSuccess:T=>d({posterId:T})})}),a.jsx(wo,{ref:N,$isVisible:C,children:a.jsx(cg,{})}),a.jsx(wo,{ref:L,$isVisible:P,children:a.jsx(Jg,{})}),a.jsx(wo,{ref:D,$isVisible:U,children:a.jsx(bm,{})}),a.jsx(wo,{ref:H,$isVisible:K,children:a.jsx(pm,{})}),a.jsx(wo,{ref:W,$isVisible:E,children:a.jsx(c8,{})})]})}function Ds(e){return et({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const vd=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,bd=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,wd=_.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,_w=_.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,Cw=_.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,yd=_.button`
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
`,_d=_.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,Sw=_(gh)`
    width: 20px;
    height: 20px;
`,Aw=_(Ds)`
    width: 20px;
    height: 20px;
`,kw=_.div`
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
`,Cd=_.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,Mw=_.p`
    color: var(--textColor);
`;_.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;const Nw=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,jw=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Iw=_.div`
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
`,Lw=_.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function Pw(){const{t:e}=Lt(),t=Cn(),[r]=e3(),{user:n,loading:o,loginWithGoogle:s,loginWithSpotify:l}=Zn();if(k.useEffect(()=>{if(!o){if(n){t(`/u/${n.username}`);return}r.get("login")==="success"&&n&&t(`/u/${n.username}`)}},[n,o,t,r]),o)return a.jsxs(vd,{children:[a.jsx(Ac,{iconColor:"var(--AccentColor)"}),a.jsxs(bd,{children:[a.jsx(Bi,{fill:"var(--textColor)",width:"100px"}),a.jsx(wd,{children:e("Loading")})]})]});const c=()=>{t("/")};return a.jsxs(vd,{children:[a.jsx(Ac,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),a.jsx(bd,{children:a.jsxs(Nw,{children:[a.jsx(Iw,{onClick:c,children:a.jsx(Bi,{fill:"var(--textColor)",width:"25vw"})}),a.jsxs(jw,{children:[a.jsx(Lw,{children:a.jsx(Bi,{fill:"var(--textColor)",width:"90px"})}),a.jsx(wd,{children:e("LOGIN_Welcome")}),a.jsx(_w,{children:e("LOGIN_JoinCommunity")}),a.jsxs(Cw,{children:[a.jsxs(yd,{onClick:s,children:[a.jsx(Sw,{}),a.jsx(_d,{children:e("LOGIN_GoogleSignIn")})]}),a.jsxs(kw,{children:[a.jsx(Cd,{}),a.jsx(Mw,{children:e("LOGIN_Or")}),a.jsx(Cd,{})]}),a.jsxs(yd,{onClick:l,children:[a.jsx(Aw,{}),a.jsx(_d,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}const Tw=It`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,Ew=It`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,Dw=It`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Rw=It`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Ow=_.div`
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
    animation: ${e=>e.isClosing?Rw:Dw} 0.3s ease-in-out forwards;
`,Fw=_.div`
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
    animation: ${e=>e.isClosing?Ew:Tw} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,zw=_.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Bw=_.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Uw=_(uh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Hw=_.div`
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
`,$w=_.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,qw=_.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,Vw=_.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,sc=_.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,lc=_.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,Sd=_.input`
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
`,Yw=_.textarea`
    padding: 12px 15px;
    border: 2px solid var(--textColor);
    border-radius: 8px;
    background-color: var(--backgroundColor);
    color: var(--textColor);
    font-size: 1em;
    font-family: inherit;
    line-height: 1.5;
    resize: none;
    height: 88px;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--AccentColor);
    }

    &::placeholder {
        color: var(--textColor);
        opacity: 0.5;
    }
`,Gw=_.span`
    font-size: 0.75em;
    opacity: 0.38;
    text-align: right;
    font-weight: 600;
    margin-top: -2px;
`,Ml=_.span`
    color: var(--textColor);
    font-size: 0.8em;
    font-weight: bolder;
    opacity: 0.8;
`,Ww=_.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,Xw=_.button`
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
`,Zw=_.button`
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
`,Jw=_.div`
    color: var(--textColor);
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`,Kw=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0;
`,Qw=_.span`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 6px;
`,ey=_.button`
    position: relative;
    width: 44px;
    height: 24px;
    border-radius: 12px;
    border: 2px solid var(--textColor);
    background: ${e=>e.$active?"var(--textColor)":"transparent"};
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    padding: 0;

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: ${e=>e.$active?"20px":"2px"};
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${e=>e.$active?"var(--backgroundColor)":"var(--textColor)"};
        transition: all 0.3s ease;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;function ty({isOpen:e,onClose:t,onProfileUpdate:r,initialBio:n=""}){var U;const{user:o,updateUser:s}=Zn(),{t:l}=Lt(),[c,d]=k.useState({name:"",username:"",bio:"",showSpotifyProfile:!1}),[f,p]=k.useState({}),[v,A]=k.useState(!1),[m,b]=k.useState(""),[y,N]=k.useState(!1);k.useEffect(()=>{o&&d({name:o.name||"",username:o.username||"",bio:n,showSpotifyProfile:o.showSpotifyProfile||!1})},[o,n]);const C=()=>{const H={};return c.name.trim()||(H.name=l("NameIsRequired")),c.username.trim()?c.username.length<3?H.username=l("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(H.username=l("UsernameFormat")):H.username=l("UsernameIsRequired"),c.bio.trim()&&c.bio.split(`
`).filter((E,J)=>J<4).some(E=>E.trim()==="")&&(H.bio=l("DASH_BioNoEmptyLines")),p(H),Object.keys(H).length===0},L=H=>{const{name:K,value:W}=H.target;if(K==="bio"){const E=W.split(`
`);if(E.length>4||E.length>=2&&E[E.length-1]===""&&E[E.length-2]==="")return}d(E=>({...E,[K]:W})),f[K]&&p(E=>({...E,[K]:""})),m&&b("")},P=async H=>{var K,W,E,J;if(H.preventDefault(),!!C()){A(!0),b("");try{await Ze.updateUserProfile({name:c.name.trim(),username:c.username.trim(),bio:c.bio.trim(),showSpotifyProfile:c.showSpotifyProfile}),s({...o,name:c.name.trim(),username:c.username.trim(),bio:c.bio.trim(),showSpotifyProfile:c.showSpotifyProfile}),b(l("ProfileUpdatedSuccessfully"));const S=[];c.name.trim()!==o.name&&S.push("name"),c.username.trim()!==o.username&&S.push("username"),c.bio.trim()!==(o.bio||"")&&S.push("bio"),c.showSpotifyProfile!==o.showSpotifyProfile&&S.push("showSpotifyProfile"),S.length&&N3(c.username.trim(),S),r&&r(),setTimeout(()=>{D()},1500)}catch(S){console.error("Profile update failed:",S),(K=S.message)!=null&&K.includes("409")||(W=S.message)!=null&&W.includes("taken")?p({username:l("UsernameTaken")}):(E=S.message)!=null&&E.includes("400")||(J=S.message)!=null&&J.includes("invalid")?p({username:l("InvalidUsernameFormat")}):p({general:l("FailedToUpdateProfile")})}finally{A(!1)}}},D=()=>{N(!0),setTimeout(()=>{N(!1),t(),p({}),b("")},300)};return k.useEffect(()=>{if(e)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[e]),e?a.jsx(Ow,{isClosing:y,children:a.jsxs(Fw,{isClosing:y,children:[a.jsxs(zw,{children:[a.jsx($w,{children:a.jsx(Bi,{width:25,height:25,fill:"var(--textColor)"})}),a.jsx(Bw,{children:l("EditProfile")}),a.jsx(Hw,{onClick:D,children:a.jsx(Uw,{})})]}),a.jsx(qw,{}),a.jsxs(Vw,{onSubmit:P,children:[a.jsxs(sc,{children:[a.jsx(lc,{htmlFor:"name",children:l("Name")}),a.jsx(Sd,{type:"text",id:"name",name:"name",value:c.name,onChange:L,placeholder:l("EnterYourName"),disabled:v}),f.name&&a.jsx(Ml,{children:f.name})]}),a.jsxs(sc,{children:[a.jsx(lc,{htmlFor:"username",children:l("Username")}),a.jsx(Sd,{type:"text",id:"username",name:"username",value:c.username,onChange:L,placeholder:l("EnterYourUsername"),disabled:v}),f.username&&a.jsx(Ml,{children:f.username})]}),a.jsxs(sc,{children:[a.jsx(lc,{htmlFor:"bio",children:l("DASH_Bio")}),a.jsx(Yw,{id:"bio",name:"bio",value:c.bio,onChange:L,placeholder:l("DASH_BioPlaceholder"),maxLength:160,disabled:v}),a.jsxs(Gw,{children:[160-(((U=c.bio)==null?void 0:U.length)||0)," ",l("DASH_BioChars")]}),f.bio&&a.jsx(Ml,{children:f.bio})]}),(o==null?void 0:o.hasSpotify)&&a.jsxs(Kw,{children:[a.jsxs(Qw,{children:[a.jsx(Ds,{size:14}),l("DASH_ShowSpotify")]}),a.jsx(ey,{type:"button",$active:c.showSpotifyProfile,disabled:v,onClick:()=>d(H=>({...H,showSpotifyProfile:!H.showSpotifyProfile}))})]}),f.general&&a.jsx(Ml,{children:f.general}),m&&a.jsx(Jw,{children:m}),a.jsxs(Ww,{children:[a.jsx(Xw,{type:"button",onClick:D,disabled:v,children:l("Cancel")}),a.jsx(Zw,{type:"submit",disabled:v,children:l(v?"Saving":"SaveChanges")})]})]})]})}):null}const ry=It`
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
`,Ad=_.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
    padding-bottom: 20px;
`,ny=_.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 100px;

    @media (max-width: 600px) {
        width: 90%;
        margin-top: 80px;
    }
`,iy=_.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-inline: 10px;

    @media (max-width: 600px) { width: 90%; }
`,oy=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) { flex-wrap: wrap; }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;_.div`
    padding-left: 110px;
    margin-top: 10px;

    @media (max-width: 900px) { padding-left: 0; margin-top: 12px; }
`;const ay=_.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 600px) { width: 72px; height: 72px; }
`,sy=_.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: var(--textColor);
    color: var(--backgroundColor);
    font-size: 2em;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 600px) { width: 72px; height: 72px; font-size: 1.6em; }
`,ly=_.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    flex: 1;
    min-width: 0;

    @media (max-width: 600px) {
        margin-left: 0;
        margin-top: 12px;
        align-items: center;
    }
`,cy=_.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        font-size: 1.25em;
        justify-content: center;
    }
`;_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;const uy=_.p`
    color: var(--textColor);
    font-size: 0.95em;
    font-weight: 600;
    opacity: 0.6;
    margin: 4px 0 0;
`;_.div`
    background-color: var(--textColor);
    border-radius: 50%;
    padding: 3px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
`;_(gh)`  width:14px; height:14px; fill:var(--backgroundColor); `;_(Ds)` width:14px; height:14px; fill:var(--backgroundColor); `;const dy=_.p`
    font-size: 0.9em;
    color: var(--textColor);
    opacity: 0.72;
    margin: 8px 0 0;
    line-height: 1.55;
    max-width: 460px;
    white-space: pre-wrap;
    word-break: break-word;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 0.85em;
        max-width: 100%;
        text-align: center;
    }
`,kd=_.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 12px;

    @media (max-width: 600px) { justify-content: center; }
`,hy=_.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 20px;
    background: #1DB954;
    color: #fff;
    font-size: 0.78em;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s;
    flex-shrink: 0;

    &:hover {
        background: #17a34a;
        transform: translateY(-1px);
    }
`,fy=_(Ds)`
    width:14px;
    height:14px;
    fill:#fff; 
`,py=_.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 20px;
    background: transparent;
    color: var(--textColor);
    font-size: 0.78em;
    font-weight: 700;
    border: 1.5px dashed rgba(128,128,128,0.35);
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;

    &:hover {
        border-color: #1DB954;
        color: #1DB954;
        border-style: solid;
    }
`,my=_.div`
    display: flex;
    gap: 10px;
    margin-left: auto;

    @media (max-width: 900px) { margin-left: 0; margin-top: 16px; }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
        margin-top: 16px;
    }
`,Md=_.button`
    padding: 8px 20px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.85em;
    transition: all 0.2s;
    background: ${({$variant:e})=>e==="outline"?"transparent":e==="danger"?"var(--AccentColor)":"var(--textColor)"};
    color: ${({$variant:e})=>e==="outline"?"var(--textColor)":"var(--backgroundColor)"};
    border: 2px solid ${({$variant:e})=>e==="outline"?"var(--textColor)":"transparent"};

    &:hover {
        background: ${({$variant:e})=>e==="outline"?"var(--textColor)":"var(--AccentColor)"};
        color: var(--backgroundColor);
        border-color: transparent;
    }
`,gy=_.div`
    display: flex;
    gap: 0;
    margin-top: 28px;
    width: 80%;
    border-bottom: 2px solid var(--borderColor, rgba(128,128,128,0.2));

    @media (max-width: 600px) {
        width: 90%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        &::-webkit-scrollbar { display: none; }
    }
`,cc=_.button`
    padding: 12px 24px;
    background: transparent;
    border: none;
    border-bottom: 3px solid ${({$active:e})=>e?"var(--AccentColor)":"transparent"};
    margin-bottom: -2px;
    color: ${({$active:e})=>e?"var(--AccentColor)":"var(--textColor)"};
    font-weight: 700;
    font-size: 0.95em;
    cursor: pointer;
    transition: all 0.18s;
    display: flex;
    align-items: center;
    gap: 7px;

    &:hover { color: var(--AccentColor); }

    @media (max-width: 600px) {
        padding: 10px 16px;
        font-size: 0.85em;
        white-space: nowrap;
        flex-shrink: 0;
    }
`,xy=_.div`
    width: 80%;
    margin-top: 16px;
    animation: ${ry} 0.25s ease;

    @media (max-width: 600px) { width: 90%; }
`,vy=_.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; }
`,by=_.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`,wy=_.div`
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--AccentColor) 15%, transparent);
    color: var(--AccentColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,yy=_.p`
    font-size: 1.8em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
`,_y=_.p`
    font-size: 0.8em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    font-weight: 600;
`,Cy=_.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
`,Sy=_.p`
    font-size: 0.8em;
    font-weight: 700;
    opacity: 0.45;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin: 28px 0 0 0;
    color: var(--textColor);
`,Ay=_.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 14px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover { transform: translateY(-3px); }
`,ky=_.div`
    width: 62px;
    height: 62px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background: color-mix(in srgb, var(--AccentColor) 20%, transparent);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,My=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
`,Ny=_.p`
    font-size: 0.75em;
    font-weight: 700;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
    color: var(--textColor);
`,jy=_.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Iy=_.p`
    font-size: 0.82em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Ly=_.p`
    font-size: 0.85em;
    font-weight: 700;
    margin: 0;
    color: var(--AccentColor);
`,Nd=_.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; gap: 12px; }
`,jd=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`,Py=_.div`
    display: flex;
    gap: 6px;
`,uc=_.button`
    padding: 6px 14px;
    border-radius: 20px;
    border: 1.5px solid ${({$active:e})=>e?"var(--AccentColor)":"rgba(128,128,128,0.25)"};
    background: ${({$active:e})=>e?"var(--AccentColor)":"transparent"};
    color: ${({$active:e})=>e?"var(--backgroundColor)":"var(--textColor)"};
    font-size: 0.82em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;

    &:hover {
        border-color: var(--AccentColor);
        color: ${({$active:e})=>e?"var(--backgroundColor)":"var(--AccentColor)"};
    }
`,Ty=_.input`
    flex: 1;
    min-width: 0;
    padding: 10px 14px;
    border-radius: 20px;
    border: 1.5px solid rgba(128,128,128,0.25);
    background: transparent;
    color: var(--textColor);
    font-size: 0.85em;
    outline: none;
    font-weight: bolder;

    &::placeholder { opacity: 1; }
    &:focus { border-color: var(--AccentColor); }
`,Ey=_.div`
    display: flex;
    width: 80%;

    @media (max-width: 600px) { width: 90%; }
`,Dy=_.div`
    width: fit-content;
    max-width: 80%;
    margin-top: 28px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    padding: 20px 80px 20px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: linear-gradient(
        to right,
        var(--glassBackground) 0%,
        var(--glassBackground) calc(100% - 80px),
        transparent 100%
    );
    margin-right: auto;

    /* color accent: left border strip */
    &::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 4px;
        background: ${({$bg:e})=>e||"var(--AccentColor)"};
    }

    &:hover { transform: translateY(-2px); }

    @media (max-width: 600px) { padding: 16px 64px 16px 18px; gap: 14px; max-width: 95%; }
`,Ry=_.div`
    position: relative;
    flex-shrink: 0;

    &::before {
        content: '';
        position: absolute;
        inset: -18px;
        border-radius: 50%;
        background: radial-gradient(circle, ${({$bg:e})=>e?`${e}88`:"transparent"} 0%, transparent 60%);
        pointer-events: none;
        z-index: 0;
    }
`,Oy=_.img`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);

    @media (max-width: 600px) { width: 58px; height: 58px; }
`,Fy=_.div`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    background: ${({$bg:e})=>e||"rgba(128,128,128,0.2)"};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) { width: 58px; height: 58px; }
`,zy=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,By=_.span`
    font-size: 0.63em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--AccentColor);
    margin-bottom: 3px;
`,Uy=_.p`
    font-size: 1.1em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 600px) { font-size: 0.95em; }
`,Hy=_.p`
    font-size: 0.83em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Na=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    opacity: 0.45;
    gap: 12px;
    text-align: center;
`,$c=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,ja=_.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,$y=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60dvh;
    gap: 20px;
    opacity: 0.45;
    padding: 40px 20px;
    text-align: center;
`,qy=_.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    max-width: 340px;
    margin: 0;
`,Vy=_.div`
    width: 80%;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    color: var(--textColor);
    font-size: 0.85em;
    text-align: center;
    opacity: 0.7;
    margin-bottom: 10px;

    @media (max-width: 600px) { width: 90%; font-size: 0.8em; }
`,Id=_.button`
    display: block;
    width: 81%;
    margin: 30px auto 0;
    padding: 8px 17px;
    border-radius: 25px;
    border: none;
    background-color: var(--textColor);
    color: var(--backgroundColor);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    max-width: 380px;

    &:hover:not(:disabled) { background-color: var(--AccentColor); }
    &:disabled { background-color: #666; cursor: not-allowed; }
`,Nl=(e=0)=>e>=1e6?(e/1e6).toFixed(1).replace(".0","")+"M":e>=1e3?(e/1e3).toFixed(1).replace(".0","")+"k":String(e);function Yy({stats:e,isOwner:t}){var c,d,f;const{t:r}=Lt(),n=Cn();if(!e)return null;if(e.totalPosters===0)return a.jsxs($c,{children:[a.jsx(Da,{width:"20%"}),a.jsx(Na,{children:a.jsx(ja,{children:r(t?"DASH_StatsEmpty":"DASH_StatsEmptyPublic")})})]});const o=[{label:r("DASH_TotalPosters"),value:e.totalPosters,icon:a.jsx(yh,{size:22})},{label:r("DASH_TotalDownloads"),value:e.totalDownloads,icon:a.jsx(m2,{size:22})},{label:r("DASH_TotalViews"),value:e.totalViews,icon:a.jsx(ql,{size:22})},{label:r("DASH_TotalFavorites"),value:e.totalFavorites,icon:a.jsx(So,{size:22})}],l=[{label:r("DASH_MostFavorited"),poster:e.mostFavorited,stat:Nl((c=e.mostFavorited)==null?void 0:c.favoritesCount),icon:a.jsx(So,{size:13})},{label:r("DASH_MostDownloaded"),poster:e.mostDownloaded,stat:Nl((d=e.mostDownloaded)==null?void 0:d.downloads),icon:a.jsx(m2,{size:13})},{label:r("DASH_MostViewed"),poster:e.mostViewed,stat:Nl((f=e.mostViewed)==null?void 0:f.views),icon:a.jsx(ql,{size:13})}].filter(p=>p.poster);return a.jsxs(a.Fragment,{children:[a.jsx(vy,{children:o.map(p=>a.jsxs(by,{children:[a.jsx(wy,{children:p.icon}),a.jsxs("div",{children:[a.jsx(yy,{children:Nl(p.value)}),a.jsx(_y,{children:p.label})]})]},p.label))}),l.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Sy,{children:r("DASH_TopHighlights")}),a.jsx(Cy,{children:l.map(p=>{var v;return a.jsxs(Ay,{onClick:()=>n(`/p/${p.poster._id}`),children:[a.jsx(ky,{children:(v=p.poster.posterJson)!=null&&v.albumCover?a.jsx("img",{src:p.poster.posterJson.albumCover,alt:""}):null}),a.jsxs(My,{children:[a.jsx(Ny,{children:p.label}),a.jsx(jy,{children:p.poster.albumName}),a.jsx(Iy,{children:p.poster.artistsName}),a.jsxs(Ly,{style:{display:"flex",alignItems:"center",gap:4},children:[p.icon," ",p.stat]})]})]},p.label)})})]})]})}function Gy(){var ct,Mt;const e=Cn(),{username:t}=Kd(),{user:r,loading:n,logout:o,isAuthenticated:s}=Zn(),{t:l}=Lt(),c=s&&((ct=r==null?void 0:r.username)==null?void 0:ct.toLowerCase())===(t==null?void 0:t.toLowerCase()),[d,f]=k.useState(null),[p,v]=k.useState(!1),[A,m]=k.useState(!1),[b,y]=k.useState(!1),[N,C]=k.useState("myposters"),[L,P]=k.useState([]),[D,U]=k.useState(1),[H,K]=k.useState(!1),[W,E]=k.useState(!1),[J,S]=k.useState(!1),[T,q]=k.useState([]),[$,ne]=k.useState(1),[ce,pe]=k.useState(!1),[ae,ve]=k.useState(!1),[we,re]=k.useState(!1),[M,z]=k.useState(null),[X,Q]=k.useState(!1),[ee,se]=k.useState(!1),[fe,ie]=k.useState(null),[xe,_e]=k.useState(null),[Le,Pe]=k.useState(null),[be,Z]=k.useState(!1),[rt,Je]=k.useState("all"),[Ge,je]=k.useState("");k.useEffect(()=>{window.scrollTo(0,0)},[]),k.useEffect(()=>{n||window.scrollTo({top:0,left:0,behavior:"instant"})},[n]),k.useEffect(()=>{t&&(m(!1),c?(p2(t,!0),Ze.getUserProfile().then(ye=>{var Oe;f(ye.user),(Oe=ye.user)!=null&&Oe.pinnedPosterId&&ie(ye.user.pinnedPosterId)}).catch(()=>{var ye;m(!0),r&&f({name:r.name,username:r.username,avatar:r.avatar,bio:"",badge:r.badge||null,badgeProgress:null,isAdmin:((ye=r.permissions)==null?void 0:ye.includes("admin"))||!1,hasSpotify:!1,hasGoogle:!1})})):Ze.getUserPublicProfile(t,{page:1,limit:12}).then(ye=>{p2(t,!1),f({name:ye.user.name,username:ye.user.username,avatar:ye.user.avatar,bio:ye.user.bio||"",badge:ye.user.badge,badgeProgress:ye.user.badgeProgress||null,isAdmin:ye.user.isAdmin||!1,hasSpotify:ye.user.hasSpotify,spotifyId:ye.user.spotifyId||null,hasGoogle:!1,pinnedPosterId:ye.user.pinnedPosterId||null,posterCount:ye.user.posterCount,totalDownloads:ye.user.totalDownloads,totalFavorites:ye.user.totalFavorites}),ye.user.pinnedPosterId&&ie(ye.user.pinnedPosterId),ye.pinnedPoster&&_e(ye.pinnedPoster),P(ye.posters||[]),U(ye.page||1),K(ye.hasMore??!1),S(!0),v(!1)}).catch(ye=>{ye.status===404?v(!0):m(!0)}))},[s,n,r,t]),k.useEffect(()=>{c&&(!s||!fe||Ze.getUserPosters({page:1,limit:20}).then(ye=>{const Re=(ye.posters||[]).filter(ft=>{var Tt;return(Tt=ft.posterJson)==null?void 0:Tt.albumCover}).find(ft=>ft._id===fe);Re&&_e(Re)}).catch(()=>{}))},[s,fe,c]),k.useEffect(()=>{c?(N==="myposters"&&!J&&Fe(1,!1),N==="favorites"&&!we&&nt(1,!1),N==="stats"&&!ee&&Be()):N==="stats"&&!ee&&yt()},[N,c]);const Fe=k.useCallback(async(ye,Oe)=>{E(!0);try{const Re=await Ze.getUserPosters({page:ye,limit:12});P(ft=>Oe?[...ft,...Re.posters]:Re.posters),U(ye),K(Re.hasMore??!1),S(!0)}catch{}finally{E(!1)}},[]),Ee=k.useCallback(async(ye,Oe)=>{if(t){E(!0);try{const Re=await Ze.getUserPublicProfile(t,{page:ye,limit:12});P(ft=>Oe?[...ft,...Re.posters||[]]:Re.posters||[]),U(ye),K(Re.hasMore??!1),S(!0)}catch{}finally{E(!1)}}},[t]),nt=k.useCallback(async(ye,Oe)=>{ve(!0);try{const Re=await Ze.getUserFavorites({page:ye,limit:12});q(ft=>Oe?[...ft,...Re.posters]:Re.posters),ne(ye),pe(Re.hasMore??!1),re(!0)}catch{}finally{ve(!1)}},[]),Be=k.useCallback(async()=>{Q(!0);try{const ye=await Ze.getUserStats();z(ye.stats),se(!0)}catch{}finally{Q(!1)}},[]),yt=k.useCallback(async()=>{if(t){Q(!0);try{const ye=await Ze.getUserPublicStats(t);z(ye.stats),se(!0)}catch{}finally{Q(!1)}}},[t]),it=k.useCallback(async ye=>{const Oe=fe===ye?null:ye;if(ie(Oe),Oe){I3(t,ye);const Re=L.find(ft=>ft._id===Oe);Re&&_e(Re)}else _e(null);try{await Ze.setPinnedPoster(Oe)}catch{ie(fe)}},[fe,L]),ot=async(ye,Oe)=>{try{await Ze.updatePosterVisibility(ye,Oe),P3(t,ye,Oe),P(Re=>Re.map(ft=>ft._id===ye?{...ft,visibility:Oe}:ft))}catch{}},At=ye=>{Pe(ye),Z(!1)},ut=()=>{Z(!0),setTimeout(()=>{Pe(null),Z(!1)},300)},qe=async()=>{if(Le)try{await Ze.deletePoster(Le._id),L3(t,Le._id,Le.albumName),P(ye=>ye.filter(Oe=>Oe._id!==Le._id)),M&&z(ye=>({...ye,totalPosters:Math.max(0,ye.totalPosters-1)}))}catch{}finally{ut()}},at=async ye=>{try{await Ze.toggleFavorite(ye),q(Oe=>Oe.filter(Re=>Re._id!==ye)),M&&z(Oe=>({...Oe,totalFavorites:Math.max(0,Oe.totalFavorites-1)}))}catch{}},ze=async()=>{await o(),e("/login")};if(k.useEffect(()=>{p&&e("/error")},[p,e]),n||p)return a.jsx(Xc,{isVisible:!0,initialFade:!0});if(A&&!d)return a.jsx(Ad,{children:a.jsxs($y,{children:[a.jsx(Kc,{width:"25%"}),a.jsx(qy,{children:l("PROFILE_FetchError")})]})});const Ct=(d==null?void 0:d.name)||(r==null?void 0:r.name)||"",vt=c&&rt!=="all"?L.filter(ye=>ye.visibility===rt):L,Ve=Ge.trim()?T.filter(ye=>{var Re,ft,Tt,jt,lt,_t;const Oe=Ge.toLowerCase();return((Re=ye.albumName)==null?void 0:Re.toLowerCase().includes(Oe))||((ft=ye.artistsName)==null?void 0:ft.toLowerCase().includes(Oe))||((jt=(Tt=ye.authorId)==null?void 0:Tt.name)==null?void 0:jt.toLowerCase().includes(Oe))||((_t=(lt=ye.authorId)==null?void 0:lt.username)==null?void 0:_t.toLowerCase().includes(Oe))}):T;return a.jsxs(Ad,{children:[a.jsx(ny,{children:a.jsxs(oy,{children:[d!=null&&d.avatar?a.jsx(ay,{src:d.avatar,alt:Ct}):a.jsx(sy,{children:Ct.charAt(0).toUpperCase()}),a.jsxs(ly,{children:[a.jsxs(cy,{children:[Ct,a.jsxs(a.Fragment,{children:[(d==null?void 0:d.badge)&&a.jsx(As,{badge:d.badge,badgeProgress:d.badgeProgress,isOwner:c,size:25}),((d==null?void 0:d.isAdmin)||c&&((Mt=r==null?void 0:r.permissions)==null?void 0:Mt.includes("admin")))&&a.jsx(As,{badge:"admin",size:25})]})]}),a.jsxs(uy,{children:["@",(d==null?void 0:d.username)||(r==null?void 0:r.username)]})]}),c&&a.jsxs(my,{children:[a.jsx(Md,{$variant:"outline",onClick:()=>{M3(t),y(!0)},children:l("EditProfile")}),a.jsx(Md,{onClick:ze,children:l("Logout")})]})]})}),a.jsxs(iy,{children:[(d==null?void 0:d.bio)&&a.jsx(dy,{children:d.bio}),d!==null&&c&&!(d!=null&&d.hasSpotify)&&a.jsx(kd,{children:a.jsxs(py,{onClick:()=>{j3(t),window.location.href=Ze.getSpotifyAuthUrl()},children:[a.jsx(Ds,{size:13}),l("DASH_ConnectSpotify")]})}),d!==null&&(d==null?void 0:d.hasSpotify)&&(c?d==null?void 0:d.showSpotifyProfile:!0)&&a.jsx(kd,{children:a.jsxs(hy,{href:`https://open.spotify.com/user/${d.spotifyId}`,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(fy,{size:13}),l("DASH_OpenSpotify")]})})]}),xe&&(()=>{const ye=xe.posterJson||{},Oe=ye.albumCover,Re=ye.backgroundColor;return a.jsx(Ey,{children:a.jsxs(Dy,{$bg:Re,onClick:()=>e(`/p/${xe._id}`),children:[a.jsx(Ry,{$bg:Re,children:Oe?a.jsx(Oy,{src:Oe,alt:xe.albumName}):a.jsx(Fy,{$bg:Re})}),a.jsxs(zy,{children:[a.jsx(By,{children:l("DASH_FeaturedPoster")}),a.jsx(Uy,{children:xe.albumName}),a.jsx(Hy,{children:xe.artistsName})]})]})})})(),A&&d&&a.jsx(Vy,{children:l("PROFILE_PartialError")}),a.jsxs(gy,{children:[a.jsx(cc,{$active:N==="myposters",onClick:()=>C("myposters"),children:l(c?"DASH_MyPosters":"DASH_Posters")}),c&&a.jsxs(cc,{$active:N==="favorites",onClick:()=>C("favorites"),children:[a.jsx(So,{size:18}),l("DASH_Favorites")]}),a.jsxs(cc,{$active:N==="stats",onClick:()=>C("stats"),children:[a.jsx(yh,{size:20}),l("DASH_Stats")]})]}),a.jsxs(xy,{children:[N==="myposters"&&(W&&!J?a.jsx(Na,{children:a.jsx(ja,{children:"…"})}):a.jsxs(a.Fragment,{children:[c&&a.jsx(jd,{children:a.jsxs(Py,{children:[a.jsx(uc,{$active:rt==="all",onClick:()=>Je("all"),children:l("DASH_All")}),a.jsx(uc,{$active:rt==="public",onClick:()=>Je("public"),children:l("DASH_Public")}),a.jsx(uc,{$active:rt==="private",onClick:()=>Je("private"),children:l("DASH_Private")})]})}),vt.length===0?a.jsxs($c,{children:[a.jsx(Da,{width:"20%"}),a.jsx(Na,{children:a.jsx(ja,{children:l(c?"DASH_NoPosters":"DASH_NoPublicPosters")})})]}):a.jsx(Nd,{children:vt.map(ye=>a.jsx(Mc,{poster:ye,variant:c?"myposters":"community",onDelete:c?At:void 0,onVisibilityChange:c?ot:void 0,onPin:c?it:void 0,pinned:ye._id===fe},ye._id))}),H&&a.jsx(Id,{onClick:()=>(c?Fe:Ee)(D+1,!0),disabled:W,children:W?"…":l("COMMUNITY_LoadMore")})]})),N==="favorites"&&(ae&&!we?a.jsx(Na,{children:a.jsx(ja,{children:"…"})}):a.jsxs(a.Fragment,{children:[a.jsx(jd,{children:a.jsx(Ty,{value:Ge,onChange:ye=>je(ye.target.value),placeholder:l("COMMUNITY_SearchPlaceholder")||"Buscar..."})}),Ve.length===0?a.jsxs($c,{children:[a.jsx(Da,{width:"20%"}),a.jsx(Na,{children:a.jsx(ja,{children:l("DASH_NoFavorites")})})]}):a.jsx(Nd,{children:Ve.map(ye=>a.jsx(Mc,{poster:ye,variant:"favorites",onUnfavorite:at},ye._id))}),ce&&!Ge&&a.jsx(Id,{onClick:()=>nt($+1,!0),disabled:ae,children:ae?"…":l("COMMUNITY_LoadMore")})]})),N==="stats"&&(X?a.jsx(Na,{children:a.jsx(ja,{children:"…"})}):a.jsx(Yy,{stats:M,isOwner:c}))]},N),c&&Le&&a.jsx(t1,{title:l("DASH_ConfirmDeleteTitle"),paragraph:l("DASH_ConfirmDelete"),confirmText:l("DASH_Delete"),onConfirm:qe,cancelText:l("Cancel"),onCancel:ut,canClose:!0,isClosing:be}),c&&a.jsx(ty,{isOpen:b,onClose:()=>y(!1),onProfileUpdate:()=>Ze.getUserProfile().then(ye=>f(ye.user)).catch(()=>{}),initialBio:(d==null?void 0:d.bio)||""})]})}const Wy=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:o=!1,onClick:s})=>a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[a.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),a.jsx("path",{fill:n,style:{animation:o?"pulse 2s infinite":"none",cursor:o?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),Ef=document.createElement("style");Ef.textContent=`
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
`;document.head.appendChild(Ef);const Xy="/assets/kanye.BMPu-Gq3.png",Zy="/assets/runaway.DjODmQSR.mp3",Ld=()=>{const e=Cn(),{t}=Lt(),[r,n]=k.useState(0),o=k.useRef(null),[s,l]=k.useState(!1),c=()=>{n(r+1),console.log(r)},d=()=>{o.current&&(o.current.loop=!0,o.current.paused?(o.current.play(),l(!0)):(o.current.pause(),l(!1)))};return a.jsxs(Jy,{playing:s,children:[a.jsx(Wy,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!s,onClick:c}),a.jsxs(r_,{children:[a.jsx(dc,{playing:s,active:r>=1}),a.jsx(dc,{playing:s,active:r>=2}),a.jsx(dc,{playing:s,active:r>=3})]}),a.jsx(Ky,{children:t("errorTitle")}),a.jsx(Qy,{children:t("errorMessage")}),a.jsx(e_,{playing:s,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&a.jsxs(a.Fragment,{children:[a.jsx(t_,{src:Xy,alt:"Kanye",onClick:d}),a.jsx("audio",{ref:o,src:Zy})]})]})},Jy=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,Ky=_.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,Qy=_.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,e_=_.button`
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
`,t_=_.img`
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
`,r_=_.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,dc=_.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Rs=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`,Qo=_.h2`
  font-size: 1.4em;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.15em;
  }
`,Df=_.input`
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.85em;
  outline: none;
  width: 240px;
  max-width: 100%;

  &::placeholder { color: var(--textSecondary); }
  &:focus { border-color: var(--AccentColor); }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 0.82em;
  }
`,v0=_.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`,xs=_.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid ${({$active:e})=>e?"var(--AccentColor)":"var(--borderColor)"};
  background: ${({$active:e})=>e?"var(--AccentColor)":"transparent"};
  color: ${({$active:e})=>e?"#fff":"var(--textColor)"};
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;

  &:hover { opacity: 0.8; }

  @media (max-width: 640px) {
    padding: 5px 10px;
    font-size: 0.72em;
  }
`,js=_.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85em;

  @media (max-width: 640px) {
    font-size: 0.78em;
  }
`,Dt=_.th`
  text-align: left;
  padding: 10px 12px;
  border-bottom: 2px solid var(--borderColor);
  font-weight: 700;
  white-space: nowrap;
  color: var(--textSecondary);
  font-size: 0.85em;
`,Rt=_.td`
  padding: 10px 12px;
  border-bottom: 1px solid var(--borderColor);
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`,gi=_.tr`
  ${({$selected:e})=>e&&"background: color-mix(in srgb, var(--AccentColor) 8%, transparent);"}
  &:hover { background: var(--glassBackground); }
`,yn=_.button`
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--borderColor);
  background: ${({$danger:e})=>e?"rgba(220, 53, 69, 0.15)":"transparent"};
  color: ${({$danger:e})=>e?"#dc3545":"var(--textColor)"};
  font-size: 0.78em;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover { opacity: 0.7; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`,Co=_.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: 700;
  background: ${({$variant:e})=>e==="active"?"rgba(40, 167, 69, 0.15)":e==="suspended"?"rgba(220, 53, 69, 0.15)":e==="admin"?"rgba(223, 109, 64, 0.15)":e==="public"?"rgba(40, 167, 69, 0.15)":e==="private"?"rgba(255, 193, 7, 0.15)":e==="deleted"?"rgba(220, 53, 69, 0.15)":"var(--glassBackground)"};
  color: ${({$variant:e})=>e==="active"?"#28a745":e==="suspended"?"#dc3545":e==="admin"?"#df6d40":e==="public"?"#28a745":e==="private"?"#ffc107":e==="deleted"?"#dc3545":"var(--textColor)"};
`;_.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 20px;
  background: var(--glassBackground);
`;_.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }
`;_.p`
  font-size: 0.78em;
  color: var(--textSecondary);
  margin: 0 0 4px;
  font-weight: 600;
`;_.p`
  font-size: 1.6em;
  font-weight: 800;
  margin: 0;
`;const b0=_.button`
  display: block;
  margin: 20px auto 0;
  padding: 8px 24px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: transparent;
  color: var(--textColor);
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;

  &:hover { background: var(--glassBackground); }
`,ra=_.p`
  text-align: center;
  color: var(--textSecondary);
  padding: 40px 0;
  font-size: 0.9em;
`,Rf=_.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,Is=_.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
  border: 1px solid var(--borderColor);
`,vs=_.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,bs=_.div`
  background: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90vw;
`,ws=_.h3`
  margin: 0 0 16px;
  font-weight: 700;
  font-size: 1.1em;
`,ys=_.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  margin-bottom: 12px;
  box-sizing: border-box;

  &:focus { border-color: var(--AccentColor); }
`,n_=_.textarea`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  margin-bottom: 12px;
  resize: vertical;
  min-height: 60px;
  box-sizing: border-box;
  font-family: inherit;

  &:focus { border-color: var(--AccentColor); }
`,i_=_.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  margin-bottom: 12px;
  box-sizing: border-box;
  cursor: pointer;

  &:focus { border-color: var(--AccentColor); }
`,_s=_.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`,pi=_.button`
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid ${({$primary:e})=>e?"var(--AccentColor)":"var(--borderColor)"};
  background: ${({$primary:e})=>e?"var(--AccentColor)":"transparent"};
  color: ${({$primary:e})=>e?"#fff":"var(--textColor)"};
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;

  &:hover { opacity: 0.8; }
`;_.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid var(--AccentColor);
  background: color-mix(in srgb, var(--AccentColor) 10%, transparent);
  font-size: 0.82em;
  flex-wrap: wrap;
`;_.span`
  font-weight: 700;
  color: var(--AccentColor);
  flex: 1;
  min-width: 100px;
`;_.select`
  padding: 5px 8px;
  border-radius: 7px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  cursor: pointer;
  &:focus { border-color: var(--AccentColor); }
`;const hc=_.section`
  margin-bottom: 28px;
`,fc=_.h3`
  font-size: 0.75em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--textSecondary);
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg { font-size: 1.2em; }
`,pc=_.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||4}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`,Pn=_.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--glassBackground);
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  overflow: hidden;

  ${({$accent:e})=>e&&`
    border-left: 3px solid var(--AccentColor);
  `}
`,Tn=_.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`,En=_.span`
  font-size: 1.7em;
  font-weight: 800;
  line-height: 1.2;
`,o_=_.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`,mc=_.div`
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({$bg:e})=>e||"var(--glassBackground)"};
  border: 1px solid var(--borderColor);
`,gc=_.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--AccentColor);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 1.3em;
    color: #fff;
    fill: var(--backgroundColor);
  }
`,xc=_.div`
  display: flex;
  flex-direction: column;
`,vc=_.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`,bc=_.span`
  font-size: 0.78em;
  color: var(--textSecondary);
  font-weight: 600;
`;function a_(){var s,l;const{t:e}=Lt(),[t,r]=k.useState(null),[n,o]=k.useState(!0);return k.useEffect(()=>{dr.getOverview().then(r).catch(()=>{}).finally(()=>o(!1))},[]),n?a.jsx(ra,{children:e("Loading")}):t?a.jsxs(a.Fragment,{children:[a.jsx(Rs,{children:a.jsx(Qo,{children:e("ADMIN_Overview")})}),a.jsxs(o_,{children:[a.jsxs(mc,{children:[a.jsx(gc,{children:a.jsx(ql,{})}),a.jsxs(xc,{children:[a.jsx(vc,{children:t.engagement.totalViews.toLocaleString()}),a.jsx(bc,{children:e("ADMIN_Views")})]})]}),a.jsxs(mc,{children:[a.jsx(gc,{children:a.jsx(F3,{})}),a.jsxs(xc,{children:[a.jsx(vc,{children:t.engagement.totalDownloads.toLocaleString()}),a.jsx(bc,{children:e("ADMIN_Downloads")})]})]}),a.jsxs(mc,{children:[a.jsx(gc,{children:a.jsx(So,{})}),a.jsxs(xc,{children:[a.jsx(vc,{children:t.engagement.totalFavorites.toLocaleString()}),a.jsx(bc,{children:e("ADMIN_Favorites")})]})]})]}),a.jsxs(hc,{children:[a.jsxs(fc,{children:[a.jsx(hh,{})," ",e("ADMIN_Users")]}),a.jsxs(pc,{$cols:4,children:[a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_TotalUsers")}),a.jsx(En,{children:t.users.total})]}),a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_ActiveUsers")}),a.jsx(En,{children:t.users.active})]}),a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_SuspendedUsers")}),a.jsx(En,{children:t.users.suspended})]}),a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_Admins")}),a.jsx(En,{children:t.users.admins})]})]})]}),a.jsxs(hc,{children:[a.jsxs(fc,{children:[a.jsx(dh,{})," ",e("ADMIN_Posters")]}),a.jsxs(pc,{$cols:4,children:[a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_TotalPosters")}),a.jsx(En,{children:t.posters.total})]}),a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_PublicPosters")}),a.jsx(En,{children:t.posters.public})]}),a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_PrivatePosters")}),a.jsx(En,{children:t.posters.private})]}),a.jsxs(Pn,{children:[a.jsx(Tn,{children:e("ADMIN_DeletedPosters")}),a.jsx(En,{children:t.posters.deleted})]})]})]}),a.jsxs(hc,{children:[a.jsxs(fc,{children:[a.jsx(V3,{})," ",e("ADMIN_Last30d")]}),a.jsxs(pc,{$cols:4,children:[a.jsxs(Pn,{children:[a.jsxs(Tn,{children:[e("ADMIN_Last7d")," — ",e("ADMIN_Users")]}),a.jsx(En,{children:t.users.last7d})]}),a.jsxs(Pn,{children:[a.jsxs(Tn,{children:[e("ADMIN_Last30d")," — ",e("ADMIN_Users")]}),a.jsx(En,{children:t.users.last30d})]}),a.jsxs(Pn,{children:[a.jsxs(Tn,{children:[e("ADMIN_Last7d")," — ",e("ADMIN_Posters")]}),a.jsx(En,{children:t.posters.last7d})]}),a.jsxs(Pn,{children:[a.jsxs(Tn,{children:[e("ADMIN_Last30d")," — ",e("ADMIN_Posters")]}),a.jsx(En,{children:t.posters.last30d})]})]})]}),((s=t.top5Posters)==null?void 0:s.length)>0&&a.jsxs(a.Fragment,{children:[a.jsx(Qo,{style:{fontSize:"1.1em",marginBottom:12,marginTop:8},children:e("ADMIN_TopPosters")}),a.jsx(Is,{children:a.jsxs(js,{children:[a.jsx("thead",{children:a.jsxs(gi,{children:[a.jsx(Dt,{children:e("ADMIN_Album")}),a.jsx(Dt,{children:e("ADMIN_Artist")}),a.jsx(Dt,{children:e("ADMIN_Score")}),a.jsx(Dt,{children:e("ADMIN_Views")}),a.jsx(Dt,{children:e("ADMIN_Downloads")})]})}),a.jsx("tbody",{children:t.top5Posters.map(c=>a.jsxs(gi,{children:[a.jsx(Rt,{children:c.albumName}),a.jsx(Rt,{children:c.artistsName}),a.jsx(Rt,{children:c.popularityScore}),a.jsx(Rt,{children:c.views}),a.jsx(Rt,{children:c.downloads})]},c._id))})]})})]}),((l=t.top5Users)==null?void 0:l.length)>0&&a.jsxs(a.Fragment,{children:[a.jsx(Qo,{style:{fontSize:"1.1em",marginBottom:12,marginTop:24},children:e("ADMIN_TopUsers")}),a.jsx(Is,{children:a.jsxs(js,{children:[a.jsx("thead",{children:a.jsxs(gi,{children:[a.jsx(Dt,{children:e("ADMIN_Name")}),a.jsx(Dt,{children:e("ADMIN_Username")}),a.jsx(Dt,{children:e("ADMIN_Badge")}),a.jsx(Dt,{children:e("ADMIN_Score")})]})}),a.jsx("tbody",{children:t.top5Users.map(c=>a.jsxs(gi,{children:[a.jsx(Rt,{children:c.name}),a.jsx(Rt,{children:c.username}),a.jsx(Rt,{children:c.badge||"—"}),a.jsx(Rt,{children:c.badgeScore})]},c._id))})]})})]})]}):a.jsx(ra,{children:e("ADMIN_NoResults")})}const s_=["","active","suspended"];function l_(){const{t:e}=Lt(),{user:t}=Zn(),[r,n]=k.useState([]),[o,s]=k.useState(0),[l,c]=k.useState(1),[d,f]=k.useState(!1),[p,v]=k.useState(""),[A,m]=k.useState(""),[b,y]=k.useState(!0),[N,C]=k.useState(null),[L,P]=k.useState({name:"",username:"",bio:"",badge:""}),[D,U]=k.useState(null),H=k.useCallback(async(S=1,T=!1)=>{y(!0);try{const q={page:S,limit:30};p.trim()&&(q.search=p.trim()),A&&(q.status=A);const $=await dr.getUsers(q);n(ne=>T?[...ne,...$.users]:$.users),s($.total),f($.hasMore),c(S)}catch{}y(!1)},[p,A]);k.useEffect(()=>{H(1)},[H]);const K=async(S,T)=>{try{S==="ban"?await dr.banUser(T):S==="unban"?await dr.unbanUser(T):S==="promote"?await dr.promoteUser(T):S==="demote"?await dr.demoteUser(T):S==="forceLogout"?await dr.forceLogout(T):S==="purge"&&await dr.purgeUser(T),U(null),H(1)}catch{}},W=S=>{P({name:S.name||"",username:S.username||"",bio:S.bio||"",badge:S.badge||""}),C(S)},E=async()=>{if(N)try{await dr.editUser(N._id,L),C(null),H(1)}catch{}},J=S=>S==="active"?e("ADMIN_Active"):S==="suspended"?e("ADMIN_Suspended"):S;return a.jsxs(a.Fragment,{children:[a.jsxs(Rs,{children:[a.jsxs(Qo,{children:[e("ADMIN_Users")," (",o,")"]}),a.jsx(Df,{placeholder:e("ADMIN_Search"),value:p,onChange:S=>v(S.target.value)})]}),a.jsx(v0,{children:s_.map(S=>a.jsx(xs,{$active:A===S,onClick:()=>m(S),children:S?J(S):e("ADMIN_All")},S||"all"))}),r.length===0&&!b?a.jsx(ra,{children:e("ADMIN_NoResults")}):a.jsx(a.Fragment,{children:a.jsx(Is,{children:a.jsxs(js,{children:[a.jsx("thead",{children:a.jsxs(gi,{children:[a.jsx(Dt,{children:e("ADMIN_Name")}),a.jsx(Dt,{children:e("ADMIN_Username")}),a.jsx(Dt,{children:e("ADMIN_Email")}),a.jsx(Dt,{children:e("ADMIN_Status")}),a.jsx(Dt,{children:e("ADMIN_Role")}),a.jsx(Dt,{children:e("ADMIN_Badge")}),a.jsx(Dt,{children:e("ADMIN_Actions")})]})}),a.jsx("tbody",{children:r.map(S=>{var $;const T=($=S.permissions)==null?void 0:$.includes("admin"),q=S._id===(t==null?void 0:t._id);return a.jsxs(gi,{children:[a.jsx(Rt,{children:S.name}),a.jsx(Rt,{children:a.jsxs("span",{style:{cursor:"pointer",fontWeight:600},onClick:()=>window.open(`/u/${S.username}`,"_blank"),title:e("ADMIN_ViewProfile"),children:[S.username," ↗"]})}),a.jsx(Rt,{children:S.email}),a.jsx(Rt,{children:a.jsx(Co,{$variant:S.status,children:J(S.status)})}),a.jsx(Rt,{children:T&&a.jsx(Co,{$variant:"admin",children:"Admin"})}),a.jsx(Rt,{children:S.badge||"—"}),a.jsx(Rt,{children:a.jsxs(Rf,{children:[a.jsx(yn,{onClick:()=>W(S),children:e("ADMIN_Edit")}),S.status==="active"&&!q&&a.jsx(yn,{$danger:!0,onClick:()=>U({action:"ban",id:S._id,label:e("ADMIN_Ban")}),children:e("ADMIN_Ban")}),S.status==="suspended"&&a.jsx(yn,{onClick:()=>U({action:"unban",id:S._id,label:e("ADMIN_Unban")}),children:e("ADMIN_Unban")}),S.status==="suspended"&&a.jsx(yn,{$danger:!0,onClick:()=>U({action:"purge",id:S._id,label:e("ADMIN_ConfirmPurgeUser")}),children:e("ADMIN_PurgeUser")}),!T&&S.status==="active"&&a.jsx(yn,{onClick:()=>U({action:"promote",id:S._id,label:e("ADMIN_Promote")}),children:e("ADMIN_Promote")}),T&&!q&&a.jsx(yn,{onClick:()=>U({action:"demote",id:S._id,label:e("ADMIN_Demote")}),children:e("ADMIN_Demote")}),!q&&a.jsx(yn,{onClick:()=>U({action:"forceLogout",id:S._id,label:e("ADMIN_ForceLogout")}),children:e("ADMIN_ForceLogout")})]})})]},S._id)})})]})})}),d&&a.jsx(b0,{onClick:()=>H(l+1,!0),children:e("ADMIN_LoadMore")}),D&&a.jsx(vs,{onClick:()=>U(null),children:a.jsxs(bs,{onClick:S=>S.stopPropagation(),children:[a.jsx(ws,{children:e("ADMIN_Confirm")}),a.jsx("p",{style:{marginBottom:16,fontSize:"0.9em"},children:D.label}),a.jsxs(_s,{children:[a.jsx(pi,{onClick:()=>U(null),children:e("ADMIN_No")}),a.jsx(pi,{$primary:!0,onClick:()=>K(D.action,D.id),children:e("ADMIN_Yes")})]})]})}),N&&a.jsx(vs,{onClick:()=>C(null),children:a.jsxs(bs,{onClick:S=>S.stopPropagation(),children:[a.jsxs(ws,{children:[e("ADMIN_Edit")," — ",N.username]}),a.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Name")}),a.jsx(ys,{value:L.name,onChange:S=>P(T=>({...T,name:S.target.value}))}),a.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Username")}),a.jsx(ys,{value:L.username,onChange:S=>P(T=>({...T,username:S.target.value}))}),a.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Bio")}),a.jsx(n_,{value:L.bio,onChange:S=>P(T=>({...T,bio:S.target.value})),rows:3}),a.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Badge")}),a.jsxs(i_,{value:L.badge,onChange:S=>P(T=>({...T,badge:S.target.value})),children:[a.jsxs("option",{value:"",children:["— ",e("ADMIN_NoBadge")," —"]}),a.jsx("option",{value:"creator_bronze",children:e("BADGE_TIER_bronze")}),a.jsx("option",{value:"creator_silver",children:e("BADGE_TIER_silver")}),a.jsx("option",{value:"creator_gold",children:e("BADGE_TIER_gold")}),a.jsx("option",{value:"creator_diamond",children:e("BADGE_TIER_diamond")})]}),a.jsxs(_s,{children:[a.jsx(pi,{onClick:()=>C(null),children:e("Cancel")}),a.jsx(pi,{$primary:!0,onClick:E,children:e("ADMIN_Save")})]})]})})]})}const wc=_.label`
  font-size: 0.8em;
  font-weight: 600;
  color: var(--textSecondary);
  margin-bottom: 2px;
  display: block;
`,c_=_.span`
  cursor: pointer;
  font-weight: 600;
  &:hover { text-decoration: underline; opacity: 0.8; }
`,u_=_.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  align-items: flex-start;
`,d_=_.div`
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: var(--borderColor);
  width: 124px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 124px;
    height: 175px;
    object-fit: cover;
    border-radius: 8px;
  }
`,h_=_.div`
  width: 124px;
  height: 175px;
  border-radius: 8px;
  background: var(--borderColor);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: 0.3;
`,f_=_.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 12px;
  font-size: 0.82em;
  flex: 1;
  align-content: start;
`,Wo=_.span`
  color: var(--textSecondary);
  font-weight: 700;
  white-space: nowrap;
`,Xo=_.span`
  color: var(--textColor);
  word-break: break-word;
`,p_=["","public","private"],m_=["false","true","all"],g_=["recent","popular","views","downloads"];function x_(){var we,re;const{t:e}=Lt(),[t,r]=k.useState([]),[n,o]=k.useState(0),[s,l]=k.useState(1),[c,d]=k.useState(!1),[f,p]=k.useState(""),[v,A]=k.useState(""),[m,b]=k.useState("false"),[y,N]=k.useState("recent"),[C,L]=k.useState(!0),[P,D]=k.useState(null),[U,H]=k.useState(null),[K,W]=k.useState(null),[E,J]=k.useState(null),S=k.useCallback(async(M=1,z=!1)=>{L(!0);try{const X={page:M,limit:30,isDeleted:m,sort:y};f.trim()&&(X.search=f.trim()),v&&(X.visibility=v);const Q=await dr.getPosters(X);r(ee=>z?[...ee,...Q.posters]:Q.posters),o(Q.total),d(Q.hasMore),l(M)}catch{}L(!1)},[f,v,m,y]);k.useEffect(()=>{S(1)},[S]);const T=async(M,z)=>{try{M==="delete"?await dr.deletePoster(z):M==="restore"?await dr.restorePoster(z):M==="purge"?await dr.purgePoster(z):M==="makePublic"?await dr.changeVisibility(z,"public"):M==="makePrivate"&&await dr.changeVisibility(z,"private"),D(null),S(1)}catch{}},q=M=>{H({id:M._id,views:M.views??0,downloads:M.downloads??0,favoritesCount:M.favoritesCount??0})},$=async()=>{if(U)try{await dr.editPoster(U.id,{views:Number(U.views),downloads:Number(U.downloads),favoritesCount:Number(U.favoritesCount)}),H(null),S(1)}catch{}},ne=async M=>{W(M),J(null);try{const z=await dr.getPoster(M._id);J(z.poster)}catch{}},ce=()=>{W(null),J(null)},pe=M=>M==="public"?e("ADMIN_Public"):M==="private"?e("ADMIN_Private"):M,ae=M=>e(M==="false"?"ADMIN_Active":M==="true"?"ADMIN_Deleted":"ADMIN_All"),ve=M=>M?new Date(M).toLocaleDateString():"—";return a.jsxs(a.Fragment,{children:[a.jsxs(Rs,{children:[a.jsxs(Qo,{children:[e("ADMIN_Posters")," (",n,")"]}),a.jsx(Df,{placeholder:e("ADMIN_Search"),value:f,onChange:M=>p(M.target.value)})]}),a.jsxs(v0,{children:[m_.map(M=>a.jsx(xs,{$active:m===M,onClick:()=>b(M),children:ae(M)},M)),a.jsx("span",{style:{width:1,background:"var(--borderColor)",margin:"0 4px"}}),p_.map(M=>a.jsx(xs,{$active:v===M,onClick:()=>A(M),children:M?pe(M):e("ADMIN_All")},M||"allvis")),a.jsx("span",{style:{width:1,background:"var(--borderColor)",margin:"0 4px"}}),g_.map(M=>a.jsx(xs,{$active:y===M,onClick:()=>N(M),children:e(M==="recent"?"ADMIN_Date":M==="popular"?"ADMIN_Score":M==="views"?"ADMIN_Views":"ADMIN_Downloads")},M))]}),t.length===0&&!C?a.jsx(ra,{children:e("ADMIN_NoResults")}):a.jsx(Is,{children:a.jsxs(js,{children:[a.jsx("thead",{children:a.jsxs(gi,{children:[a.jsx(Dt,{children:e("ADMIN_Album")}),a.jsx(Dt,{children:e("ADMIN_Artist")}),a.jsx(Dt,{children:e("ADMIN_Author")}),a.jsx(Dt,{children:e("ADMIN_Visibility")}),a.jsx(Dt,{children:e("ADMIN_Views")}),a.jsx(Dt,{children:e("ADMIN_Downloads")}),a.jsx(Dt,{children:e("ADMIN_Favorites")}),a.jsx(Dt,{children:e("ADMIN_Created")}),a.jsx(Dt,{children:e("ADMIN_Actions")})]})}),a.jsx("tbody",{children:t.map(M=>{var z;return a.jsxs(gi,{children:[a.jsx(Rt,{children:a.jsx(c_,{onClick:()=>ne(M),children:M.albumName})}),a.jsx(Rt,{children:M.artistsName}),a.jsx(Rt,{children:((z=M.authorId)==null?void 0:z.username)||"—"}),a.jsx(Rt,{children:M.isDeleted?a.jsx(Co,{$variant:"deleted",children:e("ADMIN_Deleted")}):a.jsx(Co,{$variant:M.visibility,children:pe(M.visibility)})}),a.jsx(Rt,{children:M.views}),a.jsx(Rt,{children:M.downloads}),a.jsx(Rt,{children:M.favoritesCount}),a.jsx(Rt,{children:ve(M.createdAt)}),a.jsx(Rt,{children:a.jsxs(Rf,{children:[!M.isDeleted&&a.jsxs(a.Fragment,{children:[a.jsx(yn,{onClick:()=>q(M),children:e("ADMIN_EditMetrics")}),a.jsx(yn,{$danger:!0,onClick:()=>D({action:"delete",id:M._id,label:e("ADMIN_Delete")}),children:e("ADMIN_Delete")}),M.visibility==="public"?a.jsx(yn,{onClick:()=>T("makePrivate",M._id),children:e("ADMIN_MakePrivate")}):a.jsx(yn,{onClick:()=>T("makePublic",M._id),children:e("ADMIN_MakePublic")})]}),M.isDeleted&&a.jsxs(a.Fragment,{children:[a.jsx(yn,{onClick:()=>D({action:"restore",id:M._id,label:e("ADMIN_Restore")}),children:e("ADMIN_Restore")}),a.jsx(yn,{$danger:!0,onClick:()=>D({action:"purge",id:M._id,label:e("ADMIN_PurgeConfirm")}),children:e("ADMIN_Purge")})]})]})})]},M._id)})})]})}),c&&a.jsx(b0,{onClick:()=>S(s+1,!0),children:e("ADMIN_LoadMore")}),P&&a.jsx(vs,{onClick:()=>D(null),children:a.jsxs(bs,{onClick:M=>M.stopPropagation(),children:[a.jsx(ws,{children:e("ADMIN_Confirm")}),a.jsx("p",{style:{marginBottom:16,fontSize:"0.9em"},children:P.label}),a.jsxs(_s,{children:[a.jsx(pi,{onClick:()=>D(null),children:e("ADMIN_No")}),a.jsx(pi,{$primary:!0,onClick:()=>T(P.action,P.id),children:e("ADMIN_Yes")})]})]})}),U&&a.jsx(vs,{onClick:()=>H(null),children:a.jsxs(bs,{onClick:M=>M.stopPropagation(),children:[a.jsx(ws,{children:e("ADMIN_EditMetrics")}),a.jsx(wc,{children:e("ADMIN_Views")}),a.jsx(ys,{type:"number",min:"0",value:U.views,onChange:M=>H(z=>({...z,views:M.target.value}))}),a.jsx(wc,{children:e("ADMIN_Downloads")}),a.jsx(ys,{type:"number",min:"0",value:U.downloads,onChange:M=>H(z=>({...z,downloads:M.target.value}))}),a.jsx(wc,{children:e("ADMIN_Favorites")}),a.jsx(ys,{type:"number",min:"0",value:U.favoritesCount,onChange:M=>H(z=>({...z,favoritesCount:M.target.value}))}),a.jsxs(_s,{children:[a.jsx(pi,{onClick:()=>H(null),children:e("ADMIN_Cancel")}),a.jsx(pi,{$primary:!0,onClick:$,children:e("ADMIN_Save")})]})]})}),K&&a.jsx(vs,{onClick:ce,children:a.jsxs(bs,{onClick:M=>M.stopPropagation(),style:{maxWidth:560},children:[a.jsxs(ws,{style:{marginBottom:14},children:[K.albumName,a.jsx("span",{style:{fontWeight:400,fontSize:"0.8em",marginLeft:8,opacity:.6},children:K.artistsName})]}),a.jsxs(u_,{children:[a.jsx(d_,{children:(we=E==null?void 0:E.posterJson)!=null&&we.albumCover?a.jsx("img",{src:E.posterJson.albumCover,alt:K.albumName}):a.jsx(h_,{children:"🎵"})}),a.jsxs(f_,{children:[a.jsx(Wo,{children:e("ADMIN_Author")}),a.jsx(Xo,{children:((re=K.authorId)==null?void 0:re.username)||"—"}),a.jsx(Wo,{children:e("ADMIN_Status")}),a.jsx(Xo,{children:K.isDeleted?a.jsx(Co,{$variant:"deleted",children:e("ADMIN_Deleted")}):a.jsx(Co,{$variant:K.visibility,children:pe(K.visibility)})}),a.jsx(Wo,{children:e("ADMIN_Views")}),a.jsx(Xo,{children:K.views.toLocaleString()}),a.jsx(Wo,{children:e("ADMIN_Downloads")}),a.jsx(Xo,{children:K.downloads.toLocaleString()}),a.jsx(Wo,{children:e("ADMIN_Favorites")}),a.jsx(Xo,{children:K.favoritesCount.toLocaleString()}),a.jsx(Wo,{children:e("ADMIN_Created")}),a.jsx(Xo,{children:ve(K.createdAt)}),a.jsx(Wo,{children:"ID"}),a.jsx(Xo,{style:{fontSize:"0.85em",opacity:.6,fontFamily:"monospace"},children:K._id})]})]}),a.jsxs(_s,{children:[a.jsxs(pi,{onClick:()=>window.open(`/p/${K._id}`,"_blank"),children:[e("ADMIN_OpenPoster")," ↗"]}),a.jsx(pi,{$primary:!0,onClick:ce,children:e("ADMIN_Close")})]})]})})]})}const v_=["","ban_user","unban_user","delete_poster","restore_poster","change_visibility","edit_poster","promote_admin","demote_admin","force_logout","edit_user"];function b_(){const{t:e}=Lt(),[t,r]=k.useState([]),[n,o]=k.useState(0),[s,l]=k.useState(1),[c,d]=k.useState(!1),[f,p]=k.useState(""),[v,A]=k.useState(!0),m=k.useCallback(async(y=1,N=!1)=>{A(!0);try{const C={page:y,limit:30};f&&(C.action=f);const L=await dr.getLogs(C);r(P=>N?[...P,...L.logs]:L.logs),o(L.total),d(L.hasMore),l(y)}catch{}A(!1)},[f]);k.useEffect(()=>{m(1)},[m]);const b=y=>y?new Date(y).toLocaleString():"—";return a.jsxs(a.Fragment,{children:[a.jsx(Rs,{children:a.jsxs(Qo,{children:[e("ADMIN_Logs")," (",n,")"]})}),a.jsx(v0,{children:v_.map(y=>a.jsx(xs,{$active:f===y,onClick:()=>p(y),children:y||e("ADMIN_All")},y||"all"))}),t.length===0&&!v?a.jsx(ra,{children:e("ADMIN_NoResults")}):a.jsx(Is,{children:a.jsxs(js,{children:[a.jsx("thead",{children:a.jsxs(gi,{children:[a.jsx(Dt,{children:e("ADMIN_Date")}),a.jsx(Dt,{children:e("ADMIN_Action")}),a.jsx(Dt,{children:e("ADMIN_Admin")}),a.jsx(Dt,{children:e("ADMIN_Target")}),a.jsx(Dt,{children:"IP"})]})}),a.jsx("tbody",{children:t.map(y=>{var N,C;return a.jsxs(gi,{children:[a.jsx(Rt,{children:b(y.createdAt)}),a.jsx(Rt,{children:a.jsx(Co,{children:y.action})}),a.jsx(Rt,{children:((N=y.adminId)==null?void 0:N.username)||((C=y.adminId)==null?void 0:C._id)||"—"}),a.jsx(Rt,{style:{fontSize:"0.8em",opacity:.7},children:y.targetId}),a.jsx(Rt,{style:{fontSize:"0.8em",opacity:.7},children:y.ip||"—"})]},y._id)})})]})}),c&&a.jsx(b0,{onClick:()=>m(s+1,!0),children:e("ADMIN_LoadMore")})]})}const jl=_.section`
  margin-bottom: 28px;
`,Il=_.h3`
  font-size: 0.75em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--textSecondary);
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg { font-size: 1.2em; }
`,Ll=_.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e||4}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`,Dn=_.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--glassBackground);
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Rn=_.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`,On=_.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`,Pd=_.div`
  margin-top: 8px;
`,Td=_.div`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--borderColor);
  overflow: hidden;
`,Ed=_.div`
  height: 100%;
  border-radius: 3px;
  background: var(--AccentColor);
  width: ${({$pct:e})=>Math.min(e,100)}%;
  transition: width 0.4s ease;
`,Dd=_.span`
  font-size: 0.68em;
  color: var(--textSecondary);
  margin-top: 4px;
  display: block;
`,w_=512*1024*1024;function y_(){const{t:e}=Lt(),[t,r]=k.useState(null),[n,o]=k.useState(!0);if(k.useEffect(()=>{dr.getHealth().then(r).catch(()=>{}).finally(()=>o(!1))},[]),n)return a.jsx(ra,{children:e("Loading")});if(!t)return a.jsx(ra,{children:e("ADMIN_NoResults")});const s=f=>{const p=Math.floor(f/86400),v=Math.floor(f%86400/3600),A=Math.floor(f%3600/60);return p>0?`${p}d ${v}h ${A}m`:`${v}h ${A}m`},l=f=>{if(f===0||f==null)return"0 B";const p=["B","KB","MB","GB"],v=Math.floor(Math.log(f)/Math.log(1024));return`${(f/Math.pow(1024,v)).toFixed(v>1?2:0)} ${p[v]}`},c=t.storage?t.storage.totalSize/w_*100:0,d=t.memory?t.memory.heapUsed/t.memory.heapTotal*100:0;return a.jsxs(a.Fragment,{children:[a.jsxs(Rs,{children:[a.jsx(Qo,{children:e("ADMIN_Health")}),a.jsx(Co,{$variant:t.status==="healthy"?"active":"suspended",children:t.status==="healthy"?e("ADMIN_Healthy"):e("ADMIN_Degraded")})]}),a.jsxs(jl,{children:[a.jsxs(Il,{children:[a.jsx(q3,{})," ",e("ADMIN_ServerInfo")]}),a.jsxs(Ll,{$cols:4,children:[a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_Uptime")}),a.jsx(On,{style:{fontSize:"1.2em"},children:s(t.api.uptimeSeconds)})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_Version")}),a.jsxs(On,{style:{fontSize:"1.2em"},children:["v",t.api.version]})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_NodeVersion")}),a.jsx(On,{style:{fontSize:"1.2em"},children:t.api.nodeVersion||"—"})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_Ping")}),a.jsxs(On,{children:[t.mongo.pingMs,"ms"]})]})]})]}),a.jsxs(jl,{children:[a.jsxs(Il,{children:[a.jsx(z3,{})," ",e("ADMIN_Database")]}),a.jsxs(Ll,{$cols:4,children:[a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_MongoStatus")}),a.jsx(On,{style:{fontSize:"1.2em"},children:t.mongo.connected?"✓ Online":"✗ Offline"})]}),Object.entries(t.collections).map(([f,p])=>a.jsxs(Dn,{children:[a.jsx(Rn,{children:f}),a.jsx(On,{children:p.toLocaleString()})]},f))]})]}),t.storage&&a.jsxs(jl,{children:[a.jsxs(Il,{children:[a.jsx(U3,{})," ",e("ADMIN_Storage")]}),a.jsxs(Ll,{$cols:3,children:[a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_DataSize")}),a.jsx(On,{style:{fontSize:"1.2em"},children:l(t.storage.dataSize)})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_IndexSize")}),a.jsx(On,{style:{fontSize:"1.2em"},children:l(t.storage.indexSize)})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_TotalSize")}),a.jsx(On,{style:{fontSize:"1.2em"},children:l(t.storage.totalSize)}),a.jsxs(Pd,{children:[a.jsx(Td,{children:a.jsx(Ed,{$pct:c})}),a.jsxs(Dd,{children:[c.toFixed(1),"% de 512 MB"]})]})]})]})]}),t.memory&&a.jsxs(jl,{children:[a.jsxs(Il,{children:[a.jsx(B3,{})," ",e("ADMIN_Memory")]}),a.jsxs(Ll,{$cols:3,children:[a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_RSS")}),a.jsx(On,{style:{fontSize:"1.2em"},children:l(t.memory.rss)})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:e("ADMIN_HeapUsed")}),a.jsx(On,{style:{fontSize:"1.2em"},children:l(t.memory.heapUsed)}),a.jsxs(Pd,{children:[a.jsx(Td,{children:a.jsx(Ed,{$pct:d})}),a.jsxs(Dd,{children:[d.toFixed(1),"% do heap"]})]})]}),a.jsxs(Dn,{children:[a.jsx(Rn,{children:"Heap Total"}),a.jsx(On,{style:{fontSize:"1.2em"},children:l(t.memory.heapTotal)})]})]})]})]})}const __=["Overview","Users","Posters","Logs","Health"],C_={Overview:E3,Users:hh,Posters:dh,Logs:O3,Health:So},S_=_.div`
  display: flex;
  min-height: calc(100dvh - 70px);
  margin-top: 70px;
  background: var(--backgroundColor);
  color: var(--textColor);

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 60px;
    min-height: calc(100dvh - 60px);
  }
`,A_=_.nav`
  width: 220px;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100dvh - 70px);
  z-index: 10;
  background: var(--backgroundColor);
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 60px;
  }

  @media (max-width: 640px) {
    position: sticky;
    top: 60px;
    width: 100%;
    height: auto;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid var(--borderColor);
    overflow-x: auto;
  }
`,k_=_.div`
  padding: 24px 20px 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    padding: 16px 0 12px;
    justify-content: center;
  }

  @media (max-width: 640px) {
    display: none;
  }
`,M_=_.h2`
  font-size: 0.82em;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--textSecondary);

  @media (max-width: 900px) {
    font-size: 0.6em;
    letter-spacing: 0.5px;
  }
`,N_=_.div`
  height: 1px;
  background: var(--borderColor);
  margin: 0 16px 8px;

  @media (max-width: 900px) {
    margin: 0 8px 6px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`,j_=_.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 10px;
  flex: 1;

  @media (max-width: 900px) {
    padding: 0 6px;
    gap: 2px;
  }

  @media (max-width: 640px) {
    flex-direction: row;
    padding: 0;
    gap: 0;
    width: 100%;
  }
`,I_=_.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px;
  border: none;
  border-radius: 10px;
  background: ${({$active:e})=>e?"var(--glassBackground)":"transparent"};
  color: ${({$active:e})=>e?"var(--AccentColor)":"var(--textColor)"};
  font-weight: ${({$active:e})=>e?"700":"500"};
  font-size: 0.88em;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  transition: all 0.15s ease;
  position: relative;

  ${({$active:e})=>e&&`
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 60%;
      border-radius: 0 3px 3px 0;
      background: var(--AccentColor);
    }
  `}

  &:hover {
    background: var(--glassBackground);
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 12px 8px;
    border-radius: 8px;

    &::before {
      display: none;
    }

    ${({$active:e})=>e&&`
      border-bottom: 2px solid var(--AccentColor);
      border-radius: 8px 8px 0 0;
    `}
  }

  @media (max-width: 640px) {
    flex: 1;
    justify-content: center;
    padding: 14px 8px;
    border-radius: 0;
    font-size: 0.8em;
    gap: 6px;

    &::before {
      display: none;
    }

    ${({$active:e})=>e&&`
      border-bottom: 2px solid var(--AccentColor);
    `}
  }
`,L_=_.span`
  @media (max-width: 900px) {
    display: none;
  }
`,P_=_.span`
  font-size: 1.15em;
  display: flex;
  align-items: center;
  opacity: ${({$active:e})=>e?1:.6};
  transition: opacity 0.15s ease;
`,T_=_.div`
  padding: 16px 20px;
  border-top: 1px solid var(--borderColor);
  font-size: 0.68em;
  color: var(--textSecondary);
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    padding: 12px 4px;
    font-size: 0.58em;
  }

  @media (max-width: 640px) {
    display: none;
  }
`,E_=_.main`
  flex: 1;
  margin-left: 220px;
  padding: 28px 36px;
  min-height: calc(100dvh - 70px);

  @media (max-width: 900px) {
    margin-left: 60px;
    padding: 20px 16px;
  }

  @media (max-width: 640px) {
    margin-left: 0;
    padding: 16px 12px;
    min-height: auto;
  }
`;function D_(){const{t:e}=Lt(),t=Cn(),{user:r}=Zn(),[n,o]=k.useState("Overview");return k.useEffect(()=>{var s;r&&!((s=r.permissions)!=null&&s.includes("admin"))&&t("/")},[r,t]),a.jsxs(S_,{children:[a.jsxs(A_,{children:[a.jsx(k_,{children:a.jsx(M_,{children:e("ADMIN_Panel")})}),a.jsx(N_,{}),a.jsx(j_,{children:__.map(s=>{const l=C_[s],c=n===s;return a.jsxs(I_,{$active:c,onClick:()=>o(s),children:[a.jsx(P_,{$active:c,children:a.jsx(l,{})}),a.jsx(L_,{children:e(`ADMIN_${s}`)})]},s)})}),a.jsx(T_,{children:"Posterfy Admin"})]}),a.jsxs(E_,{children:[n==="Overview"&&a.jsx(a_,{}),n==="Users"&&a.jsx(l_,{}),n==="Posters"&&a.jsx(x_,{}),n==="Logs"&&a.jsx(b_,{}),n==="Health"&&a.jsx(y_,{})]})]})}const R_=({children:e})=>{var l;const t=Cn(),{user:r,isAuthenticated:n,loading:o}=Zn(),s=(l=r==null?void 0:r.permissions)==null?void 0:l.includes("admin");return k.useEffect(()=>{!o&&(!n||!s)&&t("/")},[n,s,o,t]),o?null:n&&s?e:null},O_=()=>(k.useEffect(()=>{m3()},[]),null),Rd=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},w0=()=>"https://posterfy.space"+"/",F_=e=>{const t=w0(),r=Rd(e),n=Rd(t),o=e.includes("://www."),s=e.startsWith("http://");return o||s||r!==n},z_=()=>{const e=window.location.href,t=w0(),r=[];return F_(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},B_=()=>(k.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const o=document.querySelector('meta[name="description"]');(!o||o.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const s=z_();s.isValid||s.issues.forEach(d=>{r.push(`${d.type}: ${d.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),U_=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(k.useEffect(()=>{const o="https://posterfy.space",s=w0(),l=o+"/albuns.png";document.title=e;const c=document.querySelector('meta[name="description"]');c&&c.setAttribute("content",t);const d=document.querySelector('meta[name="keywords"]');d&&d.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",s):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",s),document.head.appendChild(f));const p=document.querySelector('meta[property="og:title"]');p&&p.setAttribute("content",e);const v=document.querySelector('meta[property="og:description"]');v&&v.setAttribute("content",t);const A=document.querySelector('meta[property="og:image"]');A&&A.setAttribute("content",l);const m=document.querySelector('meta[property="og:url"]');m&&m.setAttribute("content",s);const b=document.querySelector('meta[name="twitter:title"]');b&&b.setAttribute("content",e);const y=document.querySelector('meta[name="twitter:description"]');y&&y.setAttribute("content",t);const N=document.querySelector('meta[name="twitter:image"]');N&&N.setAttribute("content",l);const C={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:o+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},L=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');L&&L.remove();const P=document.createElement("script");P.type="application/ld+json",P.id="dynamic-structured-data",P.innerHTML=JSON.stringify(C),document.head.appendChild(P)},[e,t,r]),null);var H_="1.3.14";function Of(e,t,r){return Math.max(e,Math.min(t,r))}function $_(e,t,r){return(1-r)*e+r*t}function q_(e,t,r,n){return $_(e,t,1-Math.exp(-r*n))}function V_(e,t){return(e%t+t)%t}var Y_=class{constructor(){Te(this,"isRunning",!1);Te(this,"value",0);Te(this,"from",0);Te(this,"to",0);Te(this,"currentTime",0);Te(this,"lerp");Te(this,"duration");Te(this,"easing");Te(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=Of(0,this.currentTime/this.duration,1);t=n>=1;const o=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=q_(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:o,onStart:s,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=l}};function G_(e,t){let r;return function(...n){let o=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(o,n)},t)}}var W_=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Te(this,"width",0);Te(this,"height",0);Te(this,"scrollHeight",0);Te(this,"scrollWidth",0);Te(this,"debouncedResize");Te(this,"wrapperResizeObserver");Te(this,"contentResizeObserver");Te(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Te(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Te(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=G_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ff=class{constructor(){Te(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let o=0,s=r.length;o<s;o++)(n=r[o])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(o=>t!==o)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Od=100/6,yo={passive:!1},X_=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Te(this,"touchStart",{x:0,y:0});Te(this,"lastDelta",{x:0,y:0});Te(this,"window",{width:0,height:0});Te(this,"emitter",new Ff);Te(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Te(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});Te(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Te(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const o=n===1?Od:n===2?this.window.width:1,s=n===1?Od:n===2?this.window.height:1;t*=o,r*=s,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Te(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yo),this.element.addEventListener("touchstart",this.onTouchStart,yo),this.element.addEventListener("touchmove",this.onTouchMove,yo),this.element.addEventListener("touchend",this.onTouchEnd,yo)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,yo),this.element.removeEventListener("touchstart",this.onTouchStart,yo),this.element.removeEventListener("touchmove",this.onTouchMove,yo),this.element.removeEventListener("touchend",this.onTouchEnd,yo)}},Fd=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Z_=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:s=.075,touchInertiaExponent:l=1.7,duration:c,easing:d,lerp:f=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:A=v==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:b=1,autoResize:y=!0,prevent:N,virtualScroll:C,overscroll:L=!0,autoRaf:P=!1,anchors:D=!1,autoToggle:U=!1,allowNestedScroll:H=!1,__experimental__naiveDimensions:K=!1}={}){Te(this,"_isScrolling",!1);Te(this,"_isStopped",!1);Te(this,"_isLocked",!1);Te(this,"_preventNextNativeScrollEvent",!1);Te(this,"_resetVelocityTimeout",null);Te(this,"__rafID",null);Te(this,"isTouching");Te(this,"time",0);Te(this,"userData",{});Te(this,"lastVelocity",0);Te(this,"velocity",0);Te(this,"direction",0);Te(this,"options");Te(this,"targetScroll");Te(this,"animatedScroll");Te(this,"animate",new Y_);Te(this,"emitter",new Ff);Te(this,"dimensions");Te(this,"virtualScroll");Te(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Te(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Te(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Te(this,"onClick",e=>{const r=e.composedPath().find(n=>{var o;return n instanceof HTMLAnchorElement&&((o=n.getAttribute("href"))==null?void 0:o.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,o)}}});Te(this,"onPointerDown",e=>{e.button===1&&this.reset()});Te(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const o=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=t===0&&r===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(l||d)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const p=this.options.prevent;if(f.find(N=>{var C,L,P;return N instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(N))||((C=N.hasAttribute)==null?void 0:C.call(N,"data-lenis-prevent"))||o&&((L=N.hasAttribute)==null?void 0:L.call(N,"data-lenis-prevent-touch"))||s&&((P=N.hasAttribute)==null?void 0:P.call(N,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(N,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let A=r;this.options.gestureOrientation==="both"?A=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(A=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=o&&this.options.syncTouch,y=o&&n.type==="touchend";y&&(A=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+A,{programmatic:!1,...m?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Te(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Te(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=H_,(!e||e===document.documentElement)&&(e=window),typeof c=="number"&&typeof d!="function"?d=Fd:typeof d=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:o,syncTouchLerp:s,touchInertiaExponent:l,duration:c,easing:d,lerp:f,infinite:p,gestureOrientation:A,orientation:v,touchMultiplier:m,wheelMultiplier:b,autoResize:y,prevent:N,virtualScroll:C,overscroll:L,autoRaf:P,anchors:D,autoToggle:U,allowNestedScroll:H,__experimental__naiveDimensions:K},this.dimensions=new W_(e,t,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new X_(r,{touchMultiplier:m,wheelMultiplier:b}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:o=this.options.duration,easing:s=this.options.easing,lerp:l=this.options.lerp,onStart:c,onComplete:d,force:f=!1,programmatic:p=!0,userData:v}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let A;if(typeof e=="string"?(A=document.querySelector(e),A||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(A=e),A){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?b.left:b.top}const m=A.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(p){this.targetScroll=this.animatedScroll=this.scroll;const A=e-this.animatedScroll;A>this.limit/2?e=e-this.limit:A<-this.limit/2&&(e=e+this.limit)}}else e=Of(0,e,this.limit);if(e===this.targetScroll){c==null||c(this),d==null||d(this);return}if(this.userData=v??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}p||(this.targetScroll=e),typeof o=="number"&&typeof s!="function"?s=Fd:typeof s=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:s,lerp:l,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(A,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=A-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=A,this.setScroll(this.scroll),p&&(this.targetScroll=A),m||this.emit(),m&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),o=e._lenis??(e._lenis={});let s,l,c,d,f,p,v,A;const m=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();const U=window.getComputedStyle(e);o.computedStyle=U;const H=U.overflowX,K=U.overflowY;if(s=["auto","overlay","scroll"].includes(H),l=["auto","overlay","scroll"].includes(K),o.hasOverflowX=s,o.hasOverflowY=l,!s&&!l||m==="vertical"&&!l||m==="horizontal"&&!s)return!1;f=e.scrollWidth,p=e.scrollHeight,v=e.clientWidth,A=e.clientHeight,c=f>v,d=p>A,o.isScrollableX=c,o.isScrollableY=d,o.scrollWidth=f,o.scrollHeight=p,o.clientWidth=v,o.clientHeight=A}else c=o.isScrollableX,d=o.isScrollableY,s=o.hasOverflowX,l=o.hasOverflowY,f=o.scrollWidth,p=o.scrollHeight,v=o.clientWidth,A=o.clientHeight;if(!s&&!l||!c&&!d||m==="vertical"&&(!l||!d)||m==="horizontal"&&(!s||!c))return!1;let b;if(m==="horizontal")b="x";else if(m==="vertical")b="y";else{const U=t!==0,H=r!==0;U&&s&&c&&(b="x"),H&&l&&d&&(b="y")}if(!b)return!1;let y,N,C,L,P;if(b==="x")y=e.scrollLeft,N=f-v,C=t,L=s,P=c;else if(b==="y")y=e.scrollTop,N=p-A,C=r,L=l,P=d;else return!1;return(C>0?y<N:y>0)&&L&&P}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?V_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function J_(){const{pathname:e}=vi(),[t,r]=k.useState(!1),[n,o]=k.useState(!1);return k.useEffect(()=>{r(!0),o(!0),window.scrollTo(0,0);const s=setTimeout(()=>{r(!1),setTimeout(()=>{o(!1)},300)},2e3);return()=>clearTimeout(s)},[e]),n?a.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:a.jsx(Xc,{isVisible:!0})}):null}function K_(){const[e,t]=k.useState(!0),[r,n]=k.useState(!1);return T3(),k.useEffect(()=>{const o=new Z_({duration:1.2,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function s(l){o.raf(l),requestAnimationFrame(s)}return requestAnimationFrame(s),()=>{o.destroy()}},[]),k.useEffect(()=>l3(),[]),k.useEffect(()=>{const o=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(o)},[]),k.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),a.jsx(c3,{children:a.jsx(u4,{children:a.jsxs(p4,{children:[a.jsx(U_,{}),a.jsx(B_,{}),a.jsx(O_,{}),a.jsxs(Xp,{children:[a.jsx(J_,{}),a.jsxs(Ap,{children:[a.jsx(wn,{path:"/",element:a.jsx(ls,{showNavbar:!0,showFooter:!0}),children:a.jsx(wn,{index:!0,element:a.jsx(xd,{loadingComplete:r})})}),a.jsx(wn,{path:"/p/:posterId",element:a.jsx(ls,{showNavbar:!0,showFooter:!0}),children:a.jsx(wn,{index:!0,element:a.jsx(xd,{loadingComplete:r})})}),a.jsx(wn,{path:"/login",element:a.jsx(ls,{showNavbar:!1,showFooter:!1}),children:a.jsx(wn,{index:!0,element:a.jsx(Pw,{})})}),a.jsx(wn,{path:"/u/:username",element:a.jsx(ls,{showNavbar:!0,showFooter:!0}),children:a.jsx(wn,{index:!0,element:a.jsx(Gy,{})})}),a.jsx(wn,{path:"/admin",element:a.jsx(R_,{children:a.jsx(ls,{showNavbar:!0,showFooter:!1})}),children:a.jsx(wn,{index:!0,element:a.jsx(D_,{})})}),a.jsx(wn,{path:"/error",element:a.jsx(Ld,{})}),a.jsx(wn,{path:"*",element:a.jsx(Ld,{})})]})]}),a.jsx(Xc,{isVisible:e})]})})})}A5.use(k5).init({resources:{en:{translation:{heroDescription:"Transform your music passion into visual art by creating custom posters for your favorite albums.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with love by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"It depends, you can create your poster and download it, all locally. But if you create an account and publish it, everyone can access your created poster!",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",FAQ_ExportHighRes_Question:"How can I export the poster in high resolution?",FAQ_ExportHighRes_Answer:"After customizing, you can export the poster in high resolution as PNG or PDF by clicking on the 'Export' tab.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Signature:"Artist Signature",EDITOR_SignatureText:"Show artist signature",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_ExportTab:"Export",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EXPORT_Format:"Format",EXPORT_Size:"Size",EXPORT_SizeThumbnail:"Thumbnail",EXPORT_SizeMedium:"Medium",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"For best print quality, use Normal size (A4)",EXPORT_DownloadButton:"Download",EDITOR_PublishTab:"Publish",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",COVER_EDITOR_Size:"Size",COVER_EDITOR_Blur:"Blur",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Cover editor",EDITOR_EditCover:"Edit cover",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:"Explore the community.",CommunityDescription:"Share and search posters on the community!",COMMUNITY_Publish:"Publish to Community",COMMUNITY_PublishTitle:"Publish your poster",COMMUNITY_VisibilityLabel:"Visibility",COMMUNITY_Public:"Public",COMMUNITY_Private:"Private",COMMUNITY_PublicDesc:"Share with the entire community",COMMUNITY_PrivateDesc:"Save only for you",COMMUNITY_Publishing:"Publishing...",COMMUNITY_Published:"Published!",COMMUNITY_PublishSuccess:"Your poster is now live!",COMMUNITY_PublishedModalBody:"Your poster is live in the community. You can change its visibility or delete it from your profile.",COMMUNITY_GotoProfile:"Go to Profile",COMMUNITY_PublishError:"Failed to publish. Try again.",COMMUNITY_ViewPoster:"View poster",COMMUNITY_Views:"views",COMMUNITY_Downloads:"downloads",COMMUNITY_Favorites:"favorites",COMMUNITY_OpenInEditor:"Open in Editor",COMMUNITY_Popular:"Popular",COMMUNITY_Recent:"Recent",COMMUNITY_ThisWeek:"This Week",COMMUNITY_MyFavorites:"My Favorites",COMMUNITY_SearchPlaceholder:"Search by album, artist or user...",COMMUNITY_NoPosters:"No posters yet. Be the first to publish!",COMMUNITY_FetchError:"Could not load posters. Please try again later.",COMMUNITY_LoadMore:"Load more...",COMMUNITY_AlbumVersions_one:"{{count}} community version",COMMUNITY_AlbumVersions_other:"{{count}} community versions",COMMUNITY_DeletePoster:"Delete poster",COMMUNITY_ConfirmDelete:"Are you sure you want to delete this poster? This action cannot be undone.",COMMUNITY_MakePublic:"Make public",COMMUNITY_MakePrivate:"Make private",COMMUNITY_LoginToPublish:"Log in to publish",COMMUNITY_CantPublishRemix:"Posters opened from the community cannot be published.",COMMUNITY_FilterBy:"Filter by",COMMUNITY_By:"by",COMMUNITY_Poster:"poster",USER_TotalDownloads:"Total downloads",USER_TotalFavorites:"Favorites received",USER_PublishedPosters:"Published posters",USER_Badge:"Badge",USER_PublicProfile:"Public profile",BADGE_TYPE_creator:"Creator",BADGE_TYPE_popular:"Popular",BADGE_TYPE_loved:"Loved",BADGE_TIER_bronze:"Bronze",BADGE_TIER_silver:"Silver",BADGE_TIER_gold:"Gold",BADGE_TIER_diamond:"Diamond",BADGE_Progress:"{{score}}/{{next}} for {{tier}}",BADGE_MaxTier:"Max tier reached!",BADGE_NoTier:"Score: {{score}}/{{next}}",BADGE_Admin:"Administrator",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",PROFILES_Anchor:"Creators.",PROFILES_Title:"Discover who creates.",PROFILES_SearchPlaceholder:"Search by name or username...",PROFILES_NoResults:"No creators found.",NoResults:"No results found.",PROFILES_LoadMore:"Load more creators",PROFILES_Posters:"posters",PROFILES_Likes:"likes",PROFILES_Downloads:"downloads",PROFILES_FetchError:"Could not load creators. The server may be offline.",PROFILE_FetchError:"Could not load this profile. The server may be offline.",PROFILE_PartialError:"Some data could not be loaded. The server may be offline.",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Login:"Login",GotIt:"Got it",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",DASH_Bio:"Bio",DASH_BioPlaceholder:"Tell the community a bit about yourself...",DASH_BioChars:"characters remaining",DASH_BioNoEmptyLines:"No line can be left empty.",DASH_OpenSpotify:"View on Spotify",DASH_ConnectSpotify:"Connect Spotify",DASH_ShowSpotify:"Show Spotify on profile",DASH_FeaturedPoster:"Featured Poster",NoActivityYet:"No activity yet",DASH_MyPosters:"My Posters",DASH_Posters:"Posters",DASH_Favorites:"Favorites",DASH_Stats:"Stats",DASH_TotalPosters:"Posters published",DASH_TotalDownloads:"Total downloads",DASH_TotalViews:"Total views",DASH_TotalFavorites:"Total favorites",DASH_MostFavorited:"Most favorited",DASH_MostDownloaded:"Most downloaded",DASH_MostViewed:"Most viewed",DASH_StatsEmpty:"Publish your first poster to see your stats here.",DASH_StatsEmptyPublic:"This user has no public posters yet.",DASH_TopHighlights:"Top Highlights",DASH_NoPosters:"You haven't published any posters yet.",DASH_NoPublicPosters:"This user hasn't published any posters yet.",DASH_NoFavorites:"You haven't favorited any posters yet.",DASH_Public:"Public",DASH_Private:"Private",DASH_MakePublic:"Make public",DASH_MakePrivate:"Make private",DASH_Delete:"Delete",DASH_ConfirmDelete:"Are you sure you want to delete this poster? This action cannot be undone.",DASH_ConfirmDeleteTitle:"Delete poster",DASH_Unfavorite:"Unfavorite",DASH_All:"All",CARD_CTX_Like:"Like",CARD_CTX_Unlike:"Unlike",CARD_CTX_Open:"Open poster",CARD_CTX_OpenNewTab:"Open in new tab",CARD_CTX_UserProfile:"View profile",CARD_CTX_Admin:"Admin",CARD_CTX_CopyUserId:"Copy user ID",CARD_CTX_CopyPosterId:"Copy poster ID",CARD_CTX_Delete:"Delete poster",CARD_CTX_UserProfileNewTab:"Open profile in new tab",CARD_CTX_Copied:"Copied!",POSTER_INFO_PublishedAt:"Published on",POSTER_INFO_AdminControls:"Admin controls",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving...",FooterDescription:"Create stunning album posters from your favorite music. Free, fast, and beautiful.",ViewGitHub:"View on GitHub",JoinDiscord:"Join Discord",SwitchTo:"Switch to",FooterPrivacy:"Privacy Policy",FooterTerms:"Terms of Service",FooterCookies:"Cookies",ADMIN_Panel:"Admin Panel",ADMIN_Overview:"Overview",ADMIN_Users:"Users",ADMIN_Posters:"Posters",ADMIN_Logs:"Logs",ADMIN_Health:"Health",ADMIN_TotalUsers:"Total Users",ADMIN_ActiveUsers:"Active",ADMIN_SuspendedUsers:"Suspended",ADMIN_Admins:"Admins",ADMIN_TotalPosters:"Total Posters",ADMIN_PublicPosters:"Public",ADMIN_PrivatePosters:"Private",ADMIN_DeletedPosters:"Deleted",ADMIN_Last7d:"Last 7 days",ADMIN_Last30d:"Last 30 days",ADMIN_Engagement:"Engagement",ADMIN_TopPosters:"Top Posters",ADMIN_TopUsers:"Top Users",ADMIN_Search:"Search...",ADMIN_Ban:"Ban",ADMIN_Unban:"Unban",ADMIN_Promote:"Promote",ADMIN_Demote:"Demote",ADMIN_ForceLogout:"Force Logout",ADMIN_Edit:"Edit",ADMIN_Delete:"Delete",ADMIN_Restore:"Restore",ADMIN_Purge:"Delete Permanently",ADMIN_PurgeConfirm:"This will permanently delete the poster and all associated data. This cannot be undone.",ADMIN_PurgeUser:"Delete User Permanently",ADMIN_ConfirmPurgeUser:"This will permanently delete this user, all their posters, and all related data. This cannot be undone.",ADMIN_MakePublic:"Make Public",ADMIN_MakePrivate:"Make Private",ADMIN_Name:"Name",ADMIN_Bio:"Bio",ADMIN_Username:"Username",ADMIN_Email:"Email",ADMIN_Status:"Status",ADMIN_Role:"Role",ADMIN_Actions:"Actions",ADMIN_Visibility:"Visibility",ADMIN_Views:"Views",ADMIN_Downloads:"Downloads",ADMIN_Favorites:"Favorites",ADMIN_Score:"Score",ADMIN_Date:"Date",ADMIN_Action:"Action",ADMIN_Admin:"Admin",ADMIN_Target:"Target",ADMIN_Details:"Details",ADMIN_NoResults:"No results found",ADMIN_LoadMore:"Load More",ADMIN_Confirm:"Are you sure?",ADMIN_Yes:"Yes",ADMIN_No:"No",ADMIN_Save:"Save",ADMIN_EditMetrics:"Edit Metrics",ADMIN_Cancel:"Cancel",ADMIN_Close:"Close",ADMIN_OpenPoster:"Open Poster",ADMIN_ViewProfile:"View profile",ADMIN_Healthy:"Healthy",ADMIN_Degraded:"Degraded",ADMIN_MongoStatus:"MongoDB",ADMIN_Ping:"Ping",ADMIN_Uptime:"Uptime",ADMIN_Version:"Version",ADMIN_Collections:"Collections",ADMIN_Storage:"Storage",ADMIN_DataSize:"Data Size",ADMIN_IndexSize:"Index Size",ADMIN_TotalSize:"Total Size",ADMIN_Memory:"Memory",ADMIN_HeapUsed:"Heap Used",ADMIN_RSS:"RSS",ADMIN_NodeVersion:"Node.js",ADMIN_ServerInfo:"Server",ADMIN_Database:"Database",ADMIN_Album:"Album",ADMIN_Artist:"Artist",ADMIN_Author:"Author",ADMIN_Created:"Created",ADMIN_Badge:"Badge",ADMIN_NoBadge:"No badge",ADMIN_SetBadge:"Set badge",ADMIN_Selected:"selected",ADMIN_ClearSelection:"Clear",ADMIN_All:"All",ADMIN_Active:"Active",ADMIN_Suspended:"Suspended",ADMIN_Public:"Public",ADMIN_Private:"Private",ADMIN_Deleted:"Deleted",ADMIN_FilterByAction:"Filter by action",ADMIN_BackToPanel:"Back to Panel"}},pt:{translation:{heroDescription:"Transforme sua paixão por música em arte visual criando pôsteres personalizados dos seus álbuns favoritos.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com amor por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Depende, você pode criar seu poster e baixá-lo, tudo localmente. Mas caso crie uma conta e publicar, todos podem acessar seu poster criado!",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",FAQ_ExportHighRes_Question:"Como posso exportar o pôster em alta resolução?",FAQ_ExportHighRes_Answer:"Após personalizar, é possível exportar o pôster em alta resolução em PNG ou em PDF, clicando na aba 'Exportar'.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Signature:"Autógrafo",EDITOR_SignatureText:"Mostrar autógrafo",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_ExportTab:"Exportação",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EXPORT_Format:"Formato",EXPORT_Size:"Tamanho",EXPORT_SizeThumbnail:"Miniatura",EXPORT_SizeMedium:"Médio",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"Para melhor qualidade de impressão, use tamanho Normal (A4)",EXPORT_DownloadButton:"Baixar",EDITOR_PublishTab:"Publicar",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",COVER_EDITOR_Size:"Tamanho",COVER_EDITOR_Blur:"Desfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de capa",EDITOR_EditCover:"Editar capa",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:"Explore a comunidade.",CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",COMMUNITY_Publish:"Publicar na Comunidade",COMMUNITY_PublishTitle:"Publicar seu pôster",COMMUNITY_VisibilityLabel:"Visibilidade",COMMUNITY_Public:"Público",COMMUNITY_Private:"Privado",COMMUNITY_PublicDesc:"Compartilhe com toda a comunidade",COMMUNITY_PrivateDesc:"Salve apenas para você",COMMUNITY_Publishing:"Publicando...",COMMUNITY_Published:"Publicado!",COMMUNITY_PublishSuccess:"Seu pôster está no ar!",COMMUNITY_PublishedModalBody:"Seu pôster está na comunidade. Você pode alterar a visibilidade ou excluí-lo no seu perfil.",COMMUNITY_GotoProfile:"Ir ao Perfil",COMMUNITY_PublishError:"Falha ao publicar. Tente novamente.",COMMUNITY_ViewPoster:"Ver pôster",COMMUNITY_Views:"visualizações",COMMUNITY_Downloads:"downloads",COMMUNITY_Favorites:"favoritos",COMMUNITY_OpenInEditor:"Abrir no Editor",COMMUNITY_Popular:"Popular",COMMUNITY_Recent:"Recente",COMMUNITY_ThisWeek:"Esta Semana",COMMUNITY_MyFavorites:"Meus Favoritos",COMMUNITY_SearchPlaceholder:"Pesquisar por álbum, artista ou usuário...",COMMUNITY_NoPosters:"Nenhum pôster ainda. Seja o primeiro a publicar!",COMMUNITY_FetchError:"Não foi possível carregar os pôsteres. Tente novamente mais tarde.",COMMUNITY_LoadMore:"Carregar mais...",COMMUNITY_AlbumVersions_one:"{{count}} versão da comunidade",COMMUNITY_AlbumVersions_other:"{{count}} versões da comunidade",COMMUNITY_DeletePoster:"Excluir pôster",COMMUNITY_ConfirmDelete:"Tem certeza que deseja excluir este pôster? Essa ação não pode ser desfeita.",COMMUNITY_MakePublic:"Tornar público",COMMUNITY_MakePrivate:"Tornar privado",COMMUNITY_LoginToPublish:"Entre para publicar",COMMUNITY_CantPublishRemix:"Pôsteres abertos da comunidade não podem ser publicados.",COMMUNITY_FilterBy:"Filtrar por",COMMUNITY_By:"por",COMMUNITY_Poster:"pôster",USER_TotalDownloads:"Total de downloads",USER_TotalFavorites:"Favoritos recebidos",USER_PublishedPosters:"Pôsteres publicados",USER_Badge:"Distintivo",USER_PublicProfile:"Perfil público",BADGE_TYPE_creator:"Criador",BADGE_TYPE_popular:"Popular",BADGE_TYPE_loved:"Amado",BADGE_TIER_bronze:"Bronze",BADGE_TIER_silver:"Prata",BADGE_TIER_gold:"Ouro",BADGE_TIER_diamond:"Diamante",BADGE_Progress:"{{score}}/{{next}} para {{tier}}",BADGE_MaxTier:"Tier máximo alcançado!",BADGE_NoTier:"Pontuação: {{score}}/{{next}}",BADGE_Admin:"Administrador",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",PROFILES_Anchor:"Criadores.",PROFILES_Title:"Descubra quem cria.",PROFILES_SearchPlaceholder:"Buscar por nome ou usuário...",PROFILES_NoResults:"Nenhum criador encontrado.",NoResults:"Nenhum resultado encontrado.",PROFILES_LoadMore:"Carregar mais criadores",PROFILES_Posters:"pôsteres",PROFILES_Likes:"curtidas",PROFILES_Downloads:"downloads",PROFILES_FetchError:"Não foi possível carregar os criadores. O servidor pode estar offline.",PROFILE_FetchError:"Não foi possível carregar este perfil. O servidor pode estar offline.",PROFILE_PartialError:"Alguns dados não puderam ser carregados. O servidor pode estar offline.",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Login:"Entrar",GotIt:"Entendido",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",DASH_Bio:"Bio",DASH_BioPlaceholder:"Conte um pouco sobre você para a comunidade...",DASH_BioChars:"caracteres restantes",DASH_BioNoEmptyLines:"Nenhuma linha pode ficar vazia.",DASH_OpenSpotify:"Ver no Spotify",DASH_ConnectSpotify:"Conectar Spotify",DASH_ShowSpotify:"Mostrar Spotify no perfil",DASH_FeaturedPoster:"Poster em Destaque",NoActivityYet:"Nenhuma atividade ainda",DASH_MyPosters:"Meus Pôsteres",DASH_Posters:"Pôsteres",DASH_Favorites:"Favoritos",DASH_Stats:"Estatísticas",DASH_TotalPosters:"Pôsteres publicados",DASH_TotalDownloads:"Total de downloads",DASH_TotalViews:"Total de visualizações",DASH_TotalFavorites:"Total de favoritos",DASH_MostFavorited:"Mais favoritado",DASH_MostDownloaded:"Mais baixado",DASH_MostViewed:"Mais visualizado",DASH_StatsEmpty:"Publique seu primeiro pôster para ver suas estatísticas aqui.",DASH_StatsEmptyPublic:"Este usuário ainda não tem pôsteres públicos.",DASH_TopHighlights:"Destaques",DASH_NoPosters:"Você ainda não publicou nenhum pôster.",DASH_NoPublicPosters:"Este usuário ainda não publicou nenhum pôster.",DASH_NoFavorites:"Você ainda não favoritou nenhum pôster.",DASH_Public:"Público",DASH_Private:"Privado",DASH_MakePublic:"Tornar público",DASH_MakePrivate:"Tornar privado",DASH_Delete:"Excluir",DASH_ConfirmDelete:"Tem certeza que deseja excluir este pôster? Esta ação não pode ser desfeita.",DASH_ConfirmDeleteTitle:"Excluir pôster",DASH_Unfavorite:"Desfavoritar",DASH_All:"Todos",CARD_CTX_Like:"Curtir",CARD_CTX_Unlike:"Descurtir",CARD_CTX_Open:"Abrir poster",CARD_CTX_OpenNewTab:"Abrir em nova aba",CARD_CTX_UserProfile:"Ver perfil",CARD_CTX_Admin:"Admin",CARD_CTX_CopyUserId:"Copiar ID do usuário",CARD_CTX_CopyPosterId:"Copiar ID do poster",CARD_CTX_Delete:"Apagar poster",CARD_CTX_UserProfileNewTab:"Abrir perfil em nova aba",CARD_CTX_Copied:"Copiado!",POSTER_INFO_PublishedAt:"Publicado em",POSTER_INFO_AdminControls:"Controles de admin",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando...",FooterDescription:"Crie pôsteres incríveis de álbuns da sua música favorita. Grátis, rápido e bonito.",ViewGitHub:"Ver no GitHub",JoinDiscord:"Entrar no Discord",SwitchTo:"Mudar para",FooterPrivacy:"Política de Privacidade",FooterTerms:"Termos de Serviço",FooterCookies:"Cookies",ADMIN_Panel:"Painel Admin",ADMIN_Overview:"Visão Geral",ADMIN_Users:"Usuários",ADMIN_Posters:"Pôsteres",ADMIN_Logs:"Registros",ADMIN_Health:"Saúde",ADMIN_TotalUsers:"Total de Usuários",ADMIN_ActiveUsers:"Ativos",ADMIN_SuspendedUsers:"Suspensos",ADMIN_Admins:"Admins",ADMIN_TotalPosters:"Total de Pôsteres",ADMIN_PublicPosters:"Públicos",ADMIN_PrivatePosters:"Privados",ADMIN_DeletedPosters:"Excluídos",ADMIN_Last7d:"Últimos 7 dias",ADMIN_Last30d:"Últimos 30 dias",ADMIN_Engagement:"Engajamento",ADMIN_TopPosters:"Top Pôsteres",ADMIN_TopUsers:"Top Usuários",ADMIN_Search:"Buscar...",ADMIN_Ban:"Banir",ADMIN_Unban:"Desbanir",ADMIN_Promote:"Promover",ADMIN_Demote:"Rebaixar",ADMIN_ForceLogout:"Forçar Logout",ADMIN_Edit:"Editar",ADMIN_Delete:"Excluir",ADMIN_Restore:"Restaurar",ADMIN_Purge:"Excluir Permanentemente",ADMIN_PurgeConfirm:"Isso excluirá permanentemente o pôster e todos os dados associados. Esta ação não pode ser desfeita.",ADMIN_PurgeUser:"Excluir Usuário Permanentemente",ADMIN_ConfirmPurgeUser:"Isso excluirá permanentemente este usuário, todos os seus pôsteres e dados relacionados. Esta ação não pode ser desfeita.",ADMIN_MakePublic:"Tornar Público",ADMIN_MakePrivate:"Tornar Privado",ADMIN_Name:"Nome",ADMIN_Bio:"Bio",ADMIN_Username:"Usuário",ADMIN_Email:"Email",ADMIN_Status:"Status",ADMIN_Role:"Papel",ADMIN_Actions:"Ações",ADMIN_Visibility:"Visibilidade",ADMIN_Views:"Visualizações",ADMIN_Downloads:"Downloads",ADMIN_Favorites:"Favoritos",ADMIN_Score:"Pontuação",ADMIN_Date:"Data",ADMIN_Action:"Ação",ADMIN_Admin:"Admin",ADMIN_Target:"Alvo",ADMIN_Details:"Detalhes",ADMIN_NoResults:"Nenhum resultado encontrado",ADMIN_LoadMore:"Carregar Mais",ADMIN_Confirm:"Tem certeza?",ADMIN_Yes:"Sim",ADMIN_No:"Não",ADMIN_Save:"Salvar",ADMIN_EditMetrics:"Editar Métricas",ADMIN_Cancel:"Cancelar",ADMIN_Close:"Fechar",ADMIN_OpenPoster:"Abrir Poster",ADMIN_ViewProfile:"Ver perfil",ADMIN_Healthy:"Saudável",ADMIN_Degraded:"Degradado",ADMIN_MongoStatus:"MongoDB",ADMIN_Ping:"Ping",ADMIN_Uptime:"Tempo Ativo",ADMIN_Version:"Versão",ADMIN_Collections:"Coleções",ADMIN_Storage:"Armazenamento",ADMIN_DataSize:"Dados",ADMIN_IndexSize:"Índices",ADMIN_TotalSize:"Total",ADMIN_Memory:"Memória",ADMIN_HeapUsed:"Heap Usado",ADMIN_RSS:"RSS",ADMIN_NodeVersion:"Node.js",ADMIN_ServerInfo:"Servidor",ADMIN_Database:"Banco de Dados",ADMIN_Album:"Álbum",ADMIN_Artist:"Artista",ADMIN_Author:"Autor",ADMIN_Created:"Criado em",ADMIN_Badge:"Badge",ADMIN_NoBadge:"Sem badge",ADMIN_SetBadge:"Aplicar badge",ADMIN_Selected:"selecionados",ADMIN_ClearSelection:"Limpar",ADMIN_All:"Todos",ADMIN_Active:"Ativo",ADMIN_Suspended:"Suspenso",ADMIN_Public:"Público",ADMIN_Private:"Privado",ADMIN_Deleted:"Excluído",ADMIN_FilterByAction:"Filtrar por ação",ADMIN_BackToPanel:"Voltar ao Painel"}},es:{translation:{heroDescription:"Transforma tu pasión por la música en arte visual creando pósters personalizados de tus álbumes favoritos.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con amor por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"Depende, puedes crear tu póster y descargarlo, todo localmente. ¡Pero si creas una cuenta y lo publicas, todos pueden acceder a tu póster creado!",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",FAQ_ExportHighRes_Question:"¿Cómo puedo exportar el póster en alta resolución?",FAQ_ExportHighRes_Answer:"Después de personalizar, puedes exportar el póster en alta resolución en PNG o PDF haciendo clic en la pestaña 'Exportar'.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Signature:"Firma del Artista",EDITOR_SignatureText:"Mostrar firma del artista",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_ExportTab:"Exportación",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EXPORT_Format:"Formato",EXPORT_Size:"Tamaño",EXPORT_SizeThumbnail:"Miniatura",EXPORT_SizeMedium:"Mediano",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"Para mejor calidad de impresión, use tamaño Normal (A4)",EXPORT_DownloadButton:"Descargar",EDITOR_PublishTab:"Publicar",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",COVER_EDITOR_Size:"Tamaño",COVER_EDITOR_Blur:"Desenfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de portada",EDITOR_EditCover:"Editar portada",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:"Explora la comunidad.",CommunityDescription:"¡Comparte y busca pósters en la comunidad!",COMMUNITY_Publish:"Publicar en la Comunidad",COMMUNITY_PublishTitle:"Publicar tu póster",COMMUNITY_VisibilityLabel:"Visibilidad",COMMUNITY_Public:"Público",COMMUNITY_Private:"Privado",COMMUNITY_PublicDesc:"Comparte con toda la comunidad",COMMUNITY_PrivateDesc:"Guarda solo para ti",COMMUNITY_Publishing:"Publicando...",COMMUNITY_Published:"¡Publicado!",COMMUNITY_PublishSuccess:"¡Tu póster está en vivo!",COMMUNITY_PublishedModalBody:"Tu póster está en la comunidad. Puedes cambiar su visibilidad o eliminarlo desde tu perfil.",COMMUNITY_GotoProfile:"Ir al Perfil",COMMUNITY_PublishError:"Error al publicar. Inténtalo de nuevo.",COMMUNITY_ViewPoster:"Ver póster",COMMUNITY_Views:"vistas",COMMUNITY_Downloads:"descargas",COMMUNITY_Favorites:"favoritos",COMMUNITY_OpenInEditor:"Abrir en Editor",COMMUNITY_Popular:"Popular",COMMUNITY_Recent:"Reciente",COMMUNITY_ThisWeek:"Esta Semana",COMMUNITY_MyFavorites:"Mis Favoritos",COMMUNITY_SearchPlaceholder:"Buscar por álbum, artista o usuario...",COMMUNITY_NoPosters:"Aún no hay pósters. ¡Sé el primero en publicar!",COMMUNITY_FetchError:"No se pudieron cargar los pósters. Inténtalo más tarde.",COMMUNITY_LoadMore:"Cargar más...",COMMUNITY_AlbumVersions_one:"{{count}} versión de la comunidad",COMMUNITY_AlbumVersions_other:"{{count}} versiones de la comunidad",COMMUNITY_DeletePoster:"Eliminar póster",COMMUNITY_ConfirmDelete:"¿Estás seguro de que deseas eliminar este póster? Esta acción no se puede deshacer.",COMMUNITY_MakePublic:"Hacer público",COMMUNITY_MakePrivate:"Hacer privado",COMMUNITY_LoginToPublish:"Inicia sesión para publicar",COMMUNITY_CantPublishRemix:"Los pósters abiertos desde la comunidad no se pueden publicar.",COMMUNITY_FilterBy:"Filtrar por",COMMUNITY_By:"por",COMMUNITY_Poster:"póster",USER_TotalDownloads:"Total de descargas",USER_TotalFavorites:"Favoritos recibidos",USER_PublishedPosters:"Pósters publicados",USER_Badge:"Insignia",USER_PublicProfile:"Perfil público",BADGE_TYPE_creator:"Creador",BADGE_TYPE_popular:"Popular",BADGE_TYPE_loved:"Amado",BADGE_TIER_bronze:"Bronce",BADGE_TIER_silver:"Plata",BADGE_TIER_gold:"Oro",BADGE_TIER_diamond:"Diamante",BADGE_Progress:"{{score}}/{{next}} para {{tier}}",BADGE_MaxTier:"¡Tier máximo alcanzado!",BADGE_NoTier:"Puntuación: {{score}}/{{next}}",BADGE_Admin:"Administrador",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",PROFILES_Anchor:"Creadores.",PROFILES_Title:"Descubre quién crea.",PROFILES_SearchPlaceholder:"Buscar por nombre o usuario...",PROFILES_NoResults:"Ningún creador encontrado.",NoResults:"No se encontraron resultados.",PROFILES_LoadMore:"Cargar más creadores",PROFILES_Posters:"pósters",PROFILES_Likes:"me gusta",PROFILES_Downloads:"descargas",PROFILES_FetchError:"No se pudieron cargar los creadores. El servidor puede estar fuera de línea.",PROFILE_FetchError:"No se pudo cargar este perfil. El servidor puede estar fuera de línea.",PROFILE_PartialError:"Algunos datos no se pudieron cargar. El servidor puede estar fuera de línea.",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Login:"Iniciar sesión",GotIt:"Entendido",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",DASH_Bio:"Bio",DASH_BioPlaceholder:"Cuéntale a la comunidad un poco sobre ti...",DASH_BioChars:"caracteres restantes",DASH_BioNoEmptyLines:"Ninguna línea puede estar vacía.",DASH_OpenSpotify:"Ver en Spotify",DASH_ConnectSpotify:"Conectar Spotify",DASH_ShowSpotify:"Mostrar Spotify en el perfil",DASH_FeaturedPoster:"Póster Destacado",NoActivityYet:"Sin actividad aún",DASH_MyPosters:"Mis Pósters",DASH_Posters:"Pósters",DASH_Favorites:"Favoritos",DASH_Stats:"Estadísticas",DASH_TotalPosters:"Pósters publicados",DASH_TotalDownloads:"Total de descargas",DASH_TotalViews:"Total de vistas",DASH_TotalFavorites:"Total de favoritos",DASH_MostFavorited:"Más favoriteado",DASH_MostDownloaded:"Más descargado",DASH_MostViewed:"Más visto",DASH_StatsEmpty:"Publica tu primer póster para ver tus estadísticas aquí.",DASH_StatsEmptyPublic:"Este usuario aún no tiene pósters públicos.",DASH_TopHighlights:"Destacados",DASH_NoPosters:"Aún no has publicado ningún póster.",DASH_NoPublicPosters:"Este usuario aún no ha publicado ningún póster.",DASH_NoFavorites:"Aún no has marcado ningún póster como favorito.",DASH_Public:"Público",DASH_Private:"Privado",DASH_MakePublic:"Hacer público",DASH_MakePrivate:"Hacer privado",DASH_Delete:"Eliminar",DASH_ConfirmDelete:"¿Estás seguro de que quieres eliminar este póster? Esta acción no se puede deshacer.",DASH_ConfirmDeleteTitle:"Eliminar póster",DASH_Unfavorite:"Quitar de favoritos",DASH_All:"Todos",CARD_CTX_Like:"Me gusta",CARD_CTX_Unlike:"Ya no me gusta",CARD_CTX_Open:"Abrir póster",CARD_CTX_OpenNewTab:"Abrir en nueva pestaña",CARD_CTX_UserProfile:"Ver perfil",CARD_CTX_Admin:"Admin",CARD_CTX_CopyUserId:"Copiar ID de usuario",CARD_CTX_CopyPosterId:"Copiar ID del póster",CARD_CTX_Delete:"Eliminar póster",CARD_CTX_UserProfileNewTab:"Abrir perfil en nueva pestaña",CARD_CTX_Copied:"¡Copiado!",POSTER_INFO_PublishedAt:"Publicado el",POSTER_INFO_AdminControls:"Controles del administrador",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando...",FooterDescription:"Crea increíbles pósters de álbumes de tu música favorita. Gratis, rápido y hermoso.",ViewGitHub:"Ver en GitHub",JoinDiscord:"Unirse a Discord",SwitchTo:"Cambiar a",FooterPrivacy:"Política de Privacidad",FooterTerms:"Términos de Servicio",FooterCookies:"Cookies"}},zh:{translation:{heroDescription:"将您的音乐热情转化为视觉艺术，为您最喜爱的专辑制作定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用爱制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"这取决于情况，您可以创建并下载海报，所有操作都在本地进行。但如果您创建账户并发布，每个人都可以访问您创建的海报！",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",FAQ_ExportHighRes_Question:"如何导出高分辨率海报？",FAQ_ExportHighRes_Answer:"自定义后，您可以通过点击'导出'选项卡以PNG或PDF格式导出高分辨率海报。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_ExportTab:"导出",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EXPORT_Format:"格式",EXPORT_Size:"尺寸",EXPORT_SizeThumbnail:"缩略图",EXPORT_SizeMedium:"中等",EXPORT_SizeNormal:"正常",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"为获得最佳打印质量，请使用正常尺寸 (A4)",EXPORT_DownloadButton:"下载",EDITOR_PublishTab:"发布",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",COVER_EDITOR_Size:"大小",COVER_EDITOR_Blur:"模糊",COVER_EDITOR_HorizontalPosition:"水平",COVER_EDITOR_VerticalPosition:"垂直",EDITOR_CoverEditor:"封面编辑器",EDITOR_EditCover:"编辑封面",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:"探索社区",CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",COMMUNITY_Publish:"发布到社区",COMMUNITY_PublishTitle:"发布你的海报",COMMUNITY_VisibilityLabel:"可见性",COMMUNITY_Public:"公开",COMMUNITY_Private:"私密",COMMUNITY_PublicDesc:"与整个社区分享",COMMUNITY_PrivateDesc:"仅为自己保存",COMMUNITY_Publishing:"发布中...",COMMUNITY_Published:"已发布！",COMMUNITY_PublishSuccess:"你的海报已上线！",COMMUNITY_PublishedModalBody:"你的海报已在社区发布。你可以在个人资料中更改可见性或删除它。",COMMUNITY_GotoProfile:"前往个人资料",COMMUNITY_PublishError:"发布失败，请重试。",COMMUNITY_ViewPoster:"查看海报",COMMUNITY_Views:"浏览",COMMUNITY_Downloads:"下载",COMMUNITY_Favorites:"收藏",COMMUNITY_OpenInEditor:"在编辑器中打开",COMMUNITY_Popular:"热门",COMMUNITY_Recent:"最新",COMMUNITY_ThisWeek:"本周",COMMUNITY_MyFavorites:"我的收藏",COMMUNITY_SearchPlaceholder:"按专辑、艺术家或用户搜索...",COMMUNITY_NoPosters:"还没有海报。成为第一个发布者！",COMMUNITY_FetchError:"无法加载海报，请稍后再试。",COMMUNITY_LoadMore:"加载更多...",COMMUNITY_AlbumVersions_one:"{{count}} 个社区版本",COMMUNITY_AlbumVersions_other:"{{count}} 个社区版本",COMMUNITY_DeletePoster:"删除海报",COMMUNITY_ConfirmDelete:"确定要删除这张海报吗？此操作无法撤销。",COMMUNITY_MakePublic:"设为公开",COMMUNITY_MakePrivate:"设为私密",COMMUNITY_LoginToPublish:"登录后发布",COMMUNITY_CantPublishRemix:"从社区打开的海报无法发布。",COMMUNITY_FilterBy:"筛选",COMMUNITY_By:"作者",COMMUNITY_Poster:"海报",USER_TotalDownloads:"总下载量",USER_TotalFavorites:"收到的收藏",USER_PublishedPosters:"已发布海报",USER_Badge:"徽章",USER_PublicProfile:"公开资料",BADGE_TYPE_creator:"创作者",BADGE_TYPE_popular:"热门",BADGE_TYPE_loved:"心意",BADGE_TIER_bronze:"青铜",BADGE_TIER_silver:"白銀",BADGE_TIER_gold:"黄金",BADGE_TIER_diamond:"钓石",BADGE_Progress:"{{score}}/{{next}} 到 {{tier}}",BADGE_MaxTier:"已达最高等级！",BADGE_NoTier:"分数：{{score}}/{{next}}",BADGE_Admin:"管理员",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",PROFILES_Anchor:"创作者。",PROFILES_Title:"发现创作者。",PROFILES_SearchPlaceholder:"按名称或用户名搜索...",PROFILES_NoResults:"未找到创作者。",NoResults:"未找到结果。",PROFILES_LoadMore:"加载更多创作者",PROFILES_Posters:"海报",PROFILES_Likes:"喜欢",PROFILES_Downloads:"下载",PROFILES_FetchError:"无法加载创作者。服务器可能离线。",PROFILE_FetchError:"无法加载此个人资料。服务器可能离线。",PROFILE_PartialError:"部分数据无法加载。服务器可能离线。",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Login:"登录",GotIt:"知道了",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",DASH_Bio:"简介",DASH_BioPlaceholder:"向社区介绍一下你自己...",DASH_BioChars:"字符剩余",DASH_BioNoEmptyLines:"不能有空行。",DASH_OpenSpotify:"在 Spotify 查看",DASH_ConnectSpotify:"连接 Spotify",DASH_ShowSpotify:"在个人资料上显示 Spotify",DASH_FeaturedPoster:"精选海报",NoActivityYet:"暂无活动",DASH_MyPosters:"我的海报",DASH_Posters:"海报",DASH_Favorites:"收藏",DASH_Stats:"统计",DASH_TotalPosters:"已发布海报",DASH_TotalDownloads:"总下载次数",DASH_TotalViews:"总浏览次数",DASH_TotalFavorites:"总收藏数",DASH_MostFavorited:"最多收藏",DASH_MostDownloaded:"最多下载",DASH_MostViewed:"最多浏览",DASH_StatsEmpty:"发布您的第一张海报以在此查看统计信息。",DASH_StatsEmptyPublic:"该用户还没有公开的海报。",DASH_TopHighlights:"热门海报",DASH_NoPosters:"你还没有发布任何海报。",DASH_NoPublicPosters:"该用户还没有发布任何海报。",DASH_NoFavorites:"你还没有收藏任何海报。",DASH_Public:"公开",DASH_Private:"私密",DASH_MakePublic:"设为公开",DASH_MakePrivate:"设为私密",DASH_Delete:"删除",DASH_ConfirmDelete:"确定要删除这张海报吗？此操作无法撤销。",DASH_ConfirmDeleteTitle:"删除海报",DASH_Unfavorite:"取消收藏",DASH_All:"全部",CARD_CTX_Like:"喜欢",CARD_CTX_Unlike:"取消喜欢",CARD_CTX_Open:"打开海报",CARD_CTX_OpenNewTab:"在新标签页中打开",CARD_CTX_UserProfile:"查看资料",CARD_CTX_Admin:"管理员",CARD_CTX_CopyUserId:"复制用户 ID",CARD_CTX_CopyPosterId:"复制海报 ID",CARD_CTX_Delete:"删除海报",CARD_CTX_UserProfileNewTab:"在新标签页打开资料",CARD_CTX_Copied:"已复制!",POSTER_INFO_PublishedAt:"发布于",POSTER_INFO_AdminControls:"管理员控制",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Hd(document.getElementById("root")).render(a.jsx(k.StrictMode,{children:a.jsx(K_,{})}));export{zt as _};
