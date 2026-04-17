const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.CaKCz5Ah.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var L5=Object.defineProperty;var P5=(e,t,r)=>t in e?L5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ee=(e,t,r)=>P5(e,typeof t!="symbol"?t+"":t,r);import{r as C,a as Xd,e as Zr,c as E5,R as al}from"./vendor.BGNHhJSV.js";import{m as Rt,d as b,G as nt,l as Ja}from"./ui.C5ldsGQa.js";import{u as Pt,i as D5,a as R5}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();var Zd={exports:{}},Ql={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O5=C,F5=Symbol.for("react.element"),z5=Symbol.for("react.fragment"),B5=Object.prototype.hasOwnProperty,U5=O5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H5={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,r){var n,a={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)B5.call(t,n)&&!H5.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:F5,type:e,key:s,ref:l,props:a,_owner:U5.current}}Ql.Fragment=z5;Ql.jsx=Jd;Ql.jsxs=Jd;Zd.exports=Ql;var o=Zd.exports,Qd,f2=Xd;Qd=f2.createRoot,f2.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var p2="popstate";function $5(e={}){function t(n,a){let{pathname:s,search:l,hash:c}=n.location;return kc("",{pathname:s,search:l,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:js(a)}return V5(t,r,null,e)}function cr(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q5(){return Math.random().toString(36).substring(2,10)}function m2(e,t){return{usr:e.state,key:e.key,idx:t}}function kc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ka(t):t,state:r,key:t&&t.key||n||q5()}}function js({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ka(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function V5(e,t,r,n={}){let{window:a=document.defaultView,v5Compat:s=!1}=n,l=a.history,c="POP",d=null,f=p();f==null&&(f=0,l.replaceState({...l.state,idx:f},""));function p(){return(l.state||{idx:null}).idx}function v(){c="POP";let j=p(),A=j==null?null:j-f;f=j,d&&d({action:c,location:M.location,delta:A})}function S(j,A){c="PUSH";let L=kc(M.location,j,A);f=p()+1;let E=m2(L,f),D=M.createHref(L);try{l.pushState(E,"",D)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;a.location.assign(D)}s&&d&&d({action:c,location:M.location,delta:1})}function m(j,A){c="REPLACE";let L=kc(M.location,j,A);f=p();let E=m2(L,f),D=M.createHref(L);l.replaceState(E,"",D),s&&d&&d({action:c,location:M.location,delta:0})}function w(j){return Y5(j)}let M={get action(){return c},get location(){return e(a,l)},listen(j){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(p2,v),d=j,()=>{a.removeEventListener(p2,v),d=null}},createHref(j){return t(a,j)},createURL:w,encodeLocation(j){let A=w(j);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:S,replace:m,go(j){return l.go(j)}};return M}function Y5(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),cr(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:js(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Kd(e,t,r="/"){return G5(e,t,r,!1)}function G5(e,t,r,n){let a=typeof t=="string"?Ka(t):t,s=mo(a.pathname||"/",r);if(s==null)return null;let l=eh(e);W5(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let f=op(s);c=np(l[d],f,n)}return c}function eh(e,t=[],r=[],n="",a=!1){let s=(l,c,d=a,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&d)return;cr(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let v=fo([n,p.relativePath]),S=r.concat(p);l.children&&l.children.length>0&&(cr(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),eh(l.children,t,S,v,d)),!(l.path==null&&!l.index)&&t.push({path:v,score:tp(v,l.index),routesMeta:S})};return e.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let f of th(l.path))s(l,c,!0,f)}),t}function th(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let l=th(n.join("/")),c=[];return c.push(...l.map(d=>d===""?s:[s,d].join("/"))),a&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function W5(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:rp(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var X5=/^:[\w-]+$/,Z5=3,J5=2,Q5=1,K5=10,ep=-2,g2=e=>e==="*";function tp(e,t){let r=e.split("/"),n=r.length;return r.some(g2)&&(n+=ep),t&&(n+=J5),r.filter(a=>!g2(a)).reduce((a,s)=>a+(X5.test(s)?Z5:s===""?Q5:K5),n)}function rp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function np(e,t,r=!1){let{routesMeta:n}=e,a={},s="/",l=[];for(let c=0;c<n.length;++c){let d=n[c],f=c===n.length-1,p=s==="/"?t:t.slice(s.length)||"/",v=Vl({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),S=d.route;if(!v&&f&&r&&!n[n.length-1].route.index&&(v=Vl({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!v)return null;Object.assign(a,v.params),l.push({params:a,pathname:fo([s,v.pathname]),pathnameBase:cp(fo([s,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(s=fo([s,v.pathnameBase]))}return l}function Vl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=ip(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:v},S)=>{if(p==="*"){let w=c[S]||"";l=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const m=c[S];return v&&!m?f[p]=void 0:f[p]=(m||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:l,pattern:e}}function ip(e,t=!1,r=!0){hi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function op(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hi(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function mo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function ap(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Ka(e):e;return{pathname:r?r.startsWith("/")?r:sp(r,t):t,search:up(n),hash:dp(a)}}function sp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function I1(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function rh(e){let t=lp(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function nh(e,t,r,n=!1){let a;typeof e=="string"?a=Ka(e):(a={...e},cr(!a.pathname||!a.pathname.includes("?"),I1("?","pathname","search",a)),cr(!a.pathname||!a.pathname.includes("#"),I1("#","pathname","hash",a)),cr(!a.search||!a.search.includes("#"),I1("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,c;if(l==null)c=r;else{let v=t.length-1;if(!n&&l.startsWith("..")){let S=l.split("/");for(;S[0]==="..";)S.shift(),v-=1;a.pathname=S.join("/")}c=v>=0?t[v]:"/"}let d=ap(a,c),f=l&&l!=="/"&&l.endsWith("/"),p=(s||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var fo=e=>e.join("/").replace(/\/\/+/g,"/"),cp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),up=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ih=["POST","PUT","PATCH","DELETE"];new Set(ih);var fp=["GET",...ih];new Set(fp);var es=C.createContext(null);es.displayName="DataRouter";var Kl=C.createContext(null);Kl.displayName="DataRouterState";C.createContext(!1);var oh=C.createContext({isTransitioning:!1});oh.displayName="ViewTransition";var pp=C.createContext(new Map);pp.displayName="Fetchers";var mp=C.createContext(null);mp.displayName="Await";var Oi=C.createContext(null);Oi.displayName="Navigation";var Rs=C.createContext(null);Rs.displayName="Location";var pi=C.createContext({outlet:null,matches:[],isDataRoute:!1});pi.displayName="Route";var Jc=C.createContext(null);Jc.displayName="RouteError";function gp(e,{relative:t}={}){cr(Os(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=C.useContext(Oi),{hash:a,pathname:s,search:l}=Fs(e,{relative:t}),c=s;return r!=="/"&&(c=s==="/"?r:fo([r,s])),n.createHref({pathname:c,search:l,hash:a})}function Os(){return C.useContext(Rs)!=null}function Fi(){return cr(Os(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Rs).location}var ah="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sh(e){C.useContext(Oi).static||C.useLayoutEffect(e)}function ln(){let{isDataRoute:e}=C.useContext(pi);return e?Tp():xp()}function xp(){cr(Os(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(es),{basename:t,navigator:r}=C.useContext(Oi),{matches:n}=C.useContext(pi),{pathname:a}=Fi(),s=JSON.stringify(rh(n)),l=C.useRef(!1);return sh(()=>{l.current=!0}),C.useCallback((d,f={})=>{if(hi(l.current,ah),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=nh(d,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:fo([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,s,a,e])}var vp=C.createContext(null);function bp(e){let t=C.useContext(pi).outlet;return t&&C.createElement(vp.Provider,{value:e},t)}function lh(){let{matches:e}=C.useContext(pi),t=e[e.length-1];return t?t.params:{}}function Fs(e,{relative:t}={}){let{matches:r}=C.useContext(pi),{pathname:n}=Fi(),a=JSON.stringify(rh(r));return C.useMemo(()=>nh(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function wp(e,t){return ch(e,t)}function ch(e,t,r,n,a){var L;cr(Os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=C.useContext(Oi),{matches:l}=C.useContext(pi),c=l[l.length-1],d=c?c.params:{},f=c?c.pathname:"/",p=c?c.pathnameBase:"/",v=c&&c.route;{let E=v&&v.path||"";uh(f,!v||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let S=Fi(),m;if(t){let E=typeof t=="string"?Ka(t):t;cr(p==="/"||((L=E.pathname)==null?void 0:L.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${E.pathname}" was given in the \`location\` prop.`),m=E}else m=S;let w=m.pathname||"/",M=w;if(p!=="/"){let E=p.replace(/^\//,"").split("/");M="/"+w.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=Kd(e,{pathname:M});hi(v||j!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),hi(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=Ap(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},d,E.params),pathname:fo([p,s.encodeLocation?s.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?p:fo([p,s.encodeLocation?s.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,r,n,a);return t&&A?C.createElement(Rs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},A):A}function yp(){let e=Ip(),t=hp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:s},"ErrorBoundary")," or"," ",C.createElement("code",{style:s},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),r?C.createElement("pre",{style:a},r):null,l)}var _p=C.createElement(yp,null),Cp=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?C.createElement(pi.Provider,{value:this.props.routeContext},C.createElement(Jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sp({routeContext:e,match:t,children:r}){let n=C.useContext(es);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(pi.Provider,{value:e},r)}function Ap(e,t=[],r=null,n=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=r==null?void 0:r.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);cr(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,d=-1;if(r)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:v,errors:S}=r,m=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||m){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,p,v)=>{let S,m=!1,w=null,M=null;r&&(S=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||_p,c&&(d<0&&v===0?(uh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,M=null):d===v&&(m=!0,M=p.route.hydrateFallbackElement||null)));let j=t.concat(s.slice(0,v+1)),A=()=>{let L;return S?L=w:m?L=M:p.route.Component?L=C.createElement(p.route.Component,null):p.route.element?L=p.route.element:L=f,C.createElement(Sp,{match:p,routeContext:{outlet:f,matches:j,isDataRoute:r!=null},children:L})};return r&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?C.createElement(Cp,{location:r.location,revalidation:r.revalidation,component:w,error:S,children:A(),routeContext:{outlet:null,matches:j,isDataRoute:!0},unstable_onError:n}):A()},null)}function Qc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kp(e){let t=C.useContext(es);return cr(t,Qc(e)),t}function Mp(e){let t=C.useContext(Kl);return cr(t,Qc(e)),t}function jp(e){let t=C.useContext(pi);return cr(t,Qc(e)),t}function Kc(e){let t=jp(e),r=t.matches[t.matches.length-1];return cr(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Np(){return Kc("useRouteId")}function Ip(){var n;let e=C.useContext(Jc),t=Mp("useRouteError"),r=Kc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Tp(){let{router:e}=kp("useNavigate"),t=Kc("useNavigate"),r=C.useRef(!1);return sh(()=>{r.current=!0}),C.useCallback(async(a,s={})=>{hi(r.current,ah),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...s}))},[e,t])}var x2={};function uh(e,t,r){!t&&!x2[e]&&(x2[e]=!0,hi(!1,r))}C.memo(Lp);function Lp({routes:e,future:t,state:r,unstable_onError:n}){return ch(e,void 0,r,n,t)}function Pp(e){return bp(e.context)}function Pn(e){cr(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ep({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:s=!1}){cr(!Os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);typeof r=="string"&&(r=Ka(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:S="default"}=r,m=C.useMemo(()=>{let w=mo(d,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:v,key:S},navigationType:n}},[l,d,f,p,v,S,n]);return hi(m!=null,`<Router basename="${l}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:C.createElement(Oi.Provider,{value:c},C.createElement(Rs.Provider,{children:t,value:m}))}function Dp({children:e,location:t}){return wp(Mc(e),t)}function Mc(e,t=[]){let r=[];return C.Children.forEach(e,(n,a)=>{if(!C.isValidElement(n))return;let s=[...t,a];if(n.type===C.Fragment){r.push.apply(r,Mc(n.props.children,s));return}cr(n.type===Pn,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),cr(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Mc(n.props.children,s)),r.push(l)}),r}var Ol="get",Fl="application/x-www-form-urlencoded";function e1(e){return e!=null&&typeof e.tagName=="string"}function Rp(e){return e1(e)&&e.tagName.toLowerCase()==="button"}function Op(e){return e1(e)&&e.tagName.toLowerCase()==="form"}function Fp(e){return e1(e)&&e.tagName.toLowerCase()==="input"}function zp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bp(e,t){return e.button===0&&(!t||t==="_self")&&!zp(e)}function jc(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function Up(e,t){let r=jc(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(s=>{r.append(a,s)})}),r}var sl=null;function Hp(){if(sl===null)try{new FormData(document.createElement("form"),0),sl=!1}catch{sl=!0}return sl}var $p=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function T1(e){return e!=null&&!$p.has(e)?(hi(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fl}"`),null):e}function qp(e,t){let r,n,a,s,l;if(Op(e)){let c=e.getAttribute("action");n=c?mo(c,t):null,r=e.getAttribute("method")||Ol,a=T1(e.getAttribute("enctype"))||Fl,s=new FormData(e)}else if(Rp(e)||Fp(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(n=d?mo(d,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||Ol,a=T1(e.getAttribute("formenctype"))||T1(c.getAttribute("enctype"))||Fl,s=new FormData(c,e),!Hp()){let{name:f,type:p,value:v}=e;if(p==="image"){let S=f?`${f}.`:"";s.append(`${S}x`,"0"),s.append(`${S}y`,"0")}else f&&s.append(f,v)}}else{if(e1(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ol,n=null,a=Fl,l=e}return s&&a==="text/plain"&&(l=s,s=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function e0(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vp(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&mo(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function Yp(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gp(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Wp(e,t,r){let n=await Promise.all(e.map(async a=>{let s=t.routes[a.route.id];if(s){let l=await Yp(s,r);return l.links?l.links():[]}return[]}));return Qp(n.flat(1).filter(Gp).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function v2(e,t,r,n,a,s){let l=(d,f)=>r[f]?d.route.id!==r[f].route.id:!0,c=(d,f)=>{var p;return r[f].pathname!==d.pathname||((p=r[f].route.path)==null?void 0:p.endsWith("*"))&&r[f].params["*"]!==d.params["*"]};return s==="assets"?t.filter((d,f)=>l(d,f)||c(d,f)):s==="data"?t.filter((d,f)=>{var v;let p=n.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(l(d,f)||c(d,f))return!0;if(d.route.shouldRevalidate){let S=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=r[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Xp(e,t,{includeHydrateFallback:r}={}){return Zp(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function Zp(e){return[...new Set(e)]}function Jp(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Qp(e,t){let r=new Set;return new Set(t),e.reduce((n,a)=>{let s=JSON.stringify(Jp(a));return r.has(s)||(r.add(s),n.push({key:s,link:a})),n},[])}function dh(){let e=C.useContext(es);return e0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Kp(){let e=C.useContext(Kl);return e0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var t0=C.createContext(void 0);t0.displayName="FrameworkContext";function hh(){let e=C.useContext(t0);return e0(e,"You must render this element inside a <HydratedRouter> element"),e}function e3(e,t){let r=C.useContext(t0),[n,a]=C.useState(!1),[s,l]=C.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:v}=t,S=C.useRef(null);C.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let M=A=>{A.forEach(L=>{l(L.isIntersecting)})},j=new IntersectionObserver(M,{threshold:.5});return S.current&&j.observe(S.current),()=>{j.disconnect()}}},[e]),C.useEffect(()=>{if(n){let M=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(M)}}},[n]);let m=()=>{a(!0)},w=()=>{a(!1),l(!1)};return r?e!=="intent"?[s,S,{}]:[s,S,{onFocus:fs(c,m),onBlur:fs(d,w),onMouseEnter:fs(f,m),onMouseLeave:fs(p,w),onTouchStart:fs(v,m)}]:[!1,S,{}]}function fs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function t3({page:e,...t}){let{router:r}=dh(),n=C.useMemo(()=>Kd(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?C.createElement(n3,{page:e,matches:n,...t}):null}function r3(e){let{manifest:t,routeModules:r}=hh(),[n,a]=C.useState([]);return C.useEffect(()=>{let s=!1;return Wp(e,t,r).then(l=>{s||a(l)}),()=>{s=!0}},[e,t,r]),n}function n3({page:e,matches:t,...r}){let n=Fi(),{manifest:a,routeModules:s}=hh(),{basename:l}=dh(),{loaderData:c,matches:d}=Kp(),f=C.useMemo(()=>v2(e,t,d,a,n,"data"),[e,t,d,a,n]),p=C.useMemo(()=>v2(e,t,d,a,n,"assets"),[e,t,d,a,n]),v=C.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,M=!1;if(t.forEach(A=>{var E;let L=a.routes[A.route.id];!L||!L.hasLoader||(!f.some(D=>D.route.id===A.route.id)&&A.route.id in c&&((E=s[A.route.id])!=null&&E.shouldRevalidate)||L.hasClientLoader?M=!0:w.add(A.route.id))}),w.size===0)return[];let j=Vp(e,l,"data");return M&&w.size>0&&j.searchParams.set("_routes",t.filter(A=>w.has(A.route.id)).map(A=>A.route.id).join(",")),[j.pathname+j.search]},[l,c,n,a,f,t,e,s]),S=C.useMemo(()=>Xp(p,a),[p,a]),m=r3(p);return C.createElement(C.Fragment,null,v.map(w=>C.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),S.map(w=>C.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),m.map(({key:w,link:M})=>C.createElement("link",{key:w,nonce:r.nonce,...M})))}function i3(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fh&&(window.__reactRouterVersion="7.8.2")}catch{}function o3({basename:e,children:t,window:r}){let n=C.useRef();n.current==null&&(n.current=$5({window:r,v5Compat:!0}));let a=n.current,[s,l]=C.useState({action:a.action,location:a.location}),c=C.useCallback(d=>{C.startTransition(()=>l(d))},[l]);return C.useLayoutEffect(()=>a.listen(c),[a,c]),C.createElement(Ep,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:a})}var ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mh=C.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:s,replace:l,state:c,target:d,to:f,preventScrollReset:p,viewTransition:v,...S},m){let{basename:w}=C.useContext(Oi),M=typeof f=="string"&&ph.test(f),j,A=!1;if(typeof f=="string"&&M&&(j=f,fh))try{let I=new URL(window.location.href),Z=f.startsWith("//")?new URL(I.protocol+f):new URL(f),_=mo(Z.pathname,w);Z.origin===I.origin&&_!=null?f=_+Z.search+Z.hash:A=!0}catch{hi(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=gp(f,{relative:a}),[E,D,q]=e3(n,S),V=c3(f,{replace:l,state:c,target:d,preventScrollReset:p,relative:a,viewTransition:v});function K(I){t&&t(I),I.defaultPrevented||V(I)}let X=C.createElement("a",{...S,...q,href:j||L,onClick:A||s?t:K,ref:i3(m,D),target:d,"data-discover":!M&&r==="render"?"true":void 0});return E&&!M?C.createElement(C.Fragment,null,X,C.createElement(t3,{page:L})):X});mh.displayName="Link";var a3=C.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:s,to:l,viewTransition:c,children:d,...f},p){let v=Fs(l,{relative:f.relative}),S=Fi(),m=C.useContext(Kl),{navigator:w,basename:M}=C.useContext(Oi),j=m!=null&&m3(v)&&c===!0,A=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,L=S.pathname,E=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(L=L.toLowerCase(),E=E?E.toLowerCase():null,A=A.toLowerCase()),E&&M&&(E=mo(E,M)||E);const D=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let q=L===A||!a&&L.startsWith(A)&&L.charAt(D)==="/",V=E!=null&&(E===A||!a&&E.startsWith(A)&&E.charAt(A.length)==="/"),K={isActive:q,isPending:V,isTransitioning:j},X=q?t:void 0,I;typeof n=="function"?I=n(K):I=[n,q?"active":null,V?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Z=typeof s=="function"?s(K):s;return C.createElement(mh,{...f,"aria-current":X,className:I,ref:p,style:Z,to:l,viewTransition:c},typeof d=="function"?d(K):d)});a3.displayName="NavLink";var s3=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:s,method:l=Ol,action:c,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:v,...S},m)=>{let w=f3(),M=p3(c,{relative:f}),j=l.toLowerCase()==="get"?"get":"post",A=typeof c=="string"&&ph.test(c),L=E=>{if(d&&d(E),E.defaultPrevented)return;E.preventDefault();let D=E.nativeEvent.submitter,q=(D==null?void 0:D.getAttribute("formmethod"))||l;w(D||E.currentTarget,{fetcherKey:t,method:q,navigate:r,replace:a,state:s,relative:f,preventScrollReset:p,viewTransition:v})};return C.createElement("form",{ref:m,method:j,action:M,onSubmit:n?d:L,...S,"data-discover":!A&&e==="render"?"true":void 0})});s3.displayName="Form";function l3(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gh(e){let t=C.useContext(es);return cr(t,l3(e)),t}function c3(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:s,viewTransition:l}={}){let c=ln(),d=Fi(),f=Fs(e,{relative:s});return C.useCallback(p=>{if(Bp(p,t)){p.preventDefault();let v=r!==void 0?r:js(d)===js(f);c(e,{replace:v,state:n,preventScrollReset:a,relative:s,viewTransition:l})}},[d,c,f,r,n,t,e,a,s,l])}function u3(e){hi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=C.useRef(jc(e)),r=C.useRef(!1),n=Fi(),a=C.useMemo(()=>Up(n.search,r.current?null:t.current),[n.search]),s=ln(),l=C.useCallback((c,d)=>{const f=jc(typeof c=="function"?c(new URLSearchParams(a)):c);r.current=!0,s("?"+f,d)},[s,a]);return[a,l]}var d3=0,h3=()=>`__${String(++d3)}__`;function f3(){let{router:e}=gh("useSubmit"),{basename:t}=C.useContext(Oi),r=Np();return C.useCallback(async(n,a={})=>{let{action:s,method:l,encType:c,formData:d,body:f}=qp(n,t);if(a.navigate===!1){let p=a.fetcherKey||h3();await e.fetch(p,r,a.action||s,{preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||c,flushSync:a.flushSync})}else await e.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function p3(e,{relative:t}={}){let{basename:r}=C.useContext(Oi),n=C.useContext(pi);cr(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),s={...Fs(e||".",{relative:t})},l=Fi();if(e==null){s.search=l.search;let c=new URLSearchParams(s.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(v=>v).forEach(v=>c.append("index",v));let p=c.toString();s.search=p?`?${p}`:""}}return(!e||e===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:fo([r,s.pathname])),js(s)}function m3(e,{relative:t}={}){let r=C.useContext(oh);cr(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=gh("useViewTransitionState"),a=Fs(e,{relative:t});if(!r.isTransitioning)return!1;let s=mo(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=mo(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Vl(a.pathname,l)!=null||Vl(a.pathname,s)!=null}function po({width:e,height:t,fill:r}){return o.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const g3=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},x3=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},v3=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(n/a*100);e.forEach(l=>{s>=l&&!t.includes(l)&&(t.push(l),x3(l))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},xh=C.createContext(),t1=()=>{const e=C.useContext(xh);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},b3=({children:e})=>{const[t,r]=C.useState(()=>localStorage.getItem("theme")||"light");C.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),g3(t)},[t]);const s={theme:t,toggleTheme:()=>{r(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{r(l)},isLight:t==="light",isDark:t==="dark"};return o.jsx(xh.Provider,{value:s,children:e})},w3=Rt`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,y3=Rt`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,_3=Rt`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,C3=b.div`
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
    animation: ${e=>e.initialFade?_3:"none"} 0.5s ease-in;
`,S3=b.div`
    animation: ${e=>e.isExiting?y3:w3} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function r0({isVisible:e,initialFade:t=!1}){const{theme:r}=t1(),[n,a]=C.useState(!1),[s,l]=C.useState(!1);return C.useEffect(()=>{!e&&!n&&(a(!0),setTimeout(()=>{l(!0)},800))},[e,n]),o.jsx(C3,{isVisible:e,fadeOutContainer:s,initialFade:t,children:o.jsx(S3,{isExiting:n,children:o.jsx(po,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const A3=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},k3=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},b2=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},L1=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},M3=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},w2=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},j3=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},N3=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},I3=(e,t="",r="",n="album_collection")=>{const a=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:a,album_name:e,artist_name:t,album_id:r,source:n})},T3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_view",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r})},L3=(e,t="",r="public")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_publish",{event_category:"Community",event_label:t?`${t} - ${e}`:e,album_name:e,artist_name:t,visibility:r})},P3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_save",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r})},y2=(e,t,r="",n="png")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_download",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r,file_type:n})},E3=e=>{typeof window.gtag<"u"&&window.gtag("event","community_search",{event_category:"Community",event_label:e,search_term:e})},D3=e=>{typeof window.gtag<"u"&&window.gtag("event","community_filter_change",{event_category:"Community",event_label:e,filter_key:e})},_2=(e,t=!1)=>{typeof window.gtag<"u"&&window.gtag("event","profile_view",{event_category:"Profile",event_label:e,username:e,is_owner:t})},R3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_search",{event_category:"Profile",event_label:e,search_term:e})},O3=(e,t=null)=>{typeof window.gtag<"u"&&window.gtag("event","profile_card_click",{event_category:"Profile",event_label:e,username:e,rank:t||void 0})},F3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_edit",{event_category:"Profile",event_label:e,username:e})},z3=(e,t=[])=>{typeof window.gtag<"u"&&window.gtag("event","profile_edit_save",{event_category:"Profile",event_label:e,username:e,fields_changed:t.join(",")})},B3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_spotify_connect",{event_category:"Profile",event_label:e,username:e})},U3=(e,t)=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_pin",{event_category:"Profile",event_label:e,username:e,poster_id:t})},H3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_delete",{event_category:"Profile",event_label:r||t,username:e,poster_id:t})},$3=(e,t,r)=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_visibility",{event_category:"Profile",event_label:`${r}`,username:e,poster_id:t,visibility:r})},q3=()=>{C.useEffect(()=>{b2(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&b2(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function vh(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function V3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z"},child:[]},{tag:"path",attr:{d:"M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z"},child:[]}]})(e)}function Y3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48z"},child:[]}]})(e)}function G3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41 122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z"},child:[]}]})(e)}function W3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 128 192 384l-96-96"},child:[]}]})(e)}function bh(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368 144 144m224 0L144 368"},child:[]}]})(e)}function wh(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function C2(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 0 1 412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 0 0-41.95 52.83A16.05 16.05 0 0 1 108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 0 0-22.6 22.65l64 63.89a16 16 0 0 0 22.6 0l64-63.89a16 16 0 0 0-22.6-22.65L272 425.42V352h-32z"},child:[]}]})(e)}function S2(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"336",height:"336",x:"128",y:"128",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"57",ry:"57"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"},child:[]}]})(e)}function X3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32z"},child:[]},{tag:"path",attr:{d:"M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z"},child:[]}]})(e)}function Z3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56zM272 48a16 16 0 0 0-32 0v112h32z"},child:[]}]})(e)}function yh(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208z"},child:[]},{tag:"path",attr:{d:"M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96zM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62zm-69.6-275.53c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22zm171.94 56.18c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22zm-6.78 42.97c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51z"},child:[]}]})(e)}function Yl(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"64"},child:[]},{tag:"path",attr:{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},child:[]}]})(e)}function J3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 152a56 56 0 0 0-56-56H220.11a23.89 23.89 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8zM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8z"},child:[]}]})(e)}function Q3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",d:"M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8z"},child:[]},{tag:"rect",attr:{width:"192",height:"192",x:"160",y:"160",rx:"8",ry:"8"},child:[]},{tag:"path",attr:{d:"M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32z"},child:[]}]})(e)}function Nc(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"},child:[]}]})(e)}function Vo(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z"},child:[]}]})(e)}function _h(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64zm-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48zM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84z"},child:[]}]})(e)}function K3(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z"},child:[]},{tag:"path",attr:{d:"M441.36 226.81 426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z"},child:[]},{tag:"path",attr:{d:"m441.36 330.8-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z"},child:[]}]})(e)}function Ic(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 208v-95a80 80 0 0 0-160 0v95"},child:[]},{tag:"rect",attr:{width:"320",height:"272",x:"96",y:"208",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"48",ry:"48"},child:[]}]})(e)}function A2(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288 440 72"},child:[]}]})(e)}function Ch(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zm65.83 264H204.18a27.71 27.71 0 0 1-22-10.67 30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z"},child:[]}]})(e)}function e4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"},child:[]},{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"},child:[]}]})(e)}function t4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}function r4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 0 0-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z"},child:[]},{tag:"path",attr:{d:"M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 0 0-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z"},child:[]},{tag:"path",attr:{d:"M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 0 0-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z"},child:[]}]})(e)}function n4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 112h352"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224"},child:[]}]})(e)}function i4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 144h112v112"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m48 368 121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"},child:[]}]})(e)}const o4=Rt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,a4=Rt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,s4=Rt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,l4=Rt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,c4=b.div`
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
    animation: ${e=>e.isClosing?l4:s4} 0.3s ease-in-out forwards;
`,u4=b.div`
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
    animation: ${e=>e.isClosing?a4:o4} 0.3s ease-in-out forwards;

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
`,d4=b.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,h4=b.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 1px;
`,Sh=b(wh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,f4=b.div`
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

        ${Sh} {
            fill: var(--backgroundColor);
        }
    }
`,n0=b.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,p4=b.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,m4=b.button`
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
`,ll=b.button`
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
`,g4=b.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,x4=b(n0)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,v4=b(n0)`
    opacity: 0.4;
    font-size: 0.75em;
    margin-top: 6px;
    width: 93%;
    text-align: justify;
    font-style: italic;
`,b4=b.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,w4=b.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,y4=b.p`
    font-size: 0.85em;
    margin-inline: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 68, 68, 0.1);
    border-left: 3px solid #ff4444;
    color: #ff4444;
    font-weight: 500;
`;function zs({title:e,paragraph:t,imageURL:r,postImageText:n,disclaimerText:a,canClose:s,confirmText:l,onConfirm:c,cancelText:d,onCancel:f,isClosing:p,customButton:v,errorMessage:S}){return C.useEffect(()=>(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow="",document.documentElement.style.overflow=""}),[]),o.jsx(c4,{isClosing:p,children:o.jsxs(u4,{isClosing:p,children:[o.jsxs(d4,{children:[o.jsx(b4,{children:o.jsx(po,{width:25,height:25,fill:"var(--AccentColor)"})}),e&&o.jsx(h4,{children:e}),s&&o.jsx(f4,{onClick:f,children:o.jsx(Sh,{})})]}),o.jsx(w4,{}),S&&o.jsx(y4,{children:S}),t&&o.jsx(n0,{children:t}),r&&o.jsx(p4,{src:r}),n&&o.jsx(x4,{children:n}),a&&o.jsx(v4,{children:a}),o.jsxs(g4,{style:{justifyContent:"center"},children:[v&&o.jsx(ll,{onClick:()=>window.open(v.url,"_blank"),children:v.text}),d&&l?o.jsxs(o.Fragment,{children:[o.jsx(m4,{onClick:f,children:d}),o.jsx(ll,{onClick:c,children:l})]}):o.jsx(o.Fragment,{children:d?o.jsx(ll,{onClick:f,children:d}):l&&o.jsx(ll,{onClick:c,children:l})})]})]})})}const _4=C.createContext(),C4=({children:e})=>{const{t,i18n:r}=Pt(),[n,a]=C.useState(null),[s,l]=C.useState(!1),[c,d]=C.useState(()=>{const V=localStorage.getItem("shownAlerts");return V?JSON.parse(V):{}}),f=()=>{const V={en:{title:"Top Albums This Week",paragraph:"Discover what's trending! The most popular albums of the week will be highlighted at the top of the site. Don't miss what everyone is creating posters for!"},pt:{title:"Top Álbuns da Semana",paragraph:"Descubra as tendências! Os álbuns mais populares da semana aparecerão em destaque no topo do site. Não perca o que todos estão criando posters!"},es:{title:"Álbumes Destacados de la Semana",paragraph:"Descubre las tendencias. Los álbumes más populares de la semana se destacarán en la parte superior del sitio. No te pierdas lo que todos están creando!"},zh:{title:"本周热门专辑",paragraph:"发现趋势！本周最受欢迎的专辑将在网站顶部突出显示。不要错过每个人都在为之创建海报的内容！"}},K=r.language||"en",X=V[K]||V.en;return{id:"top-albums-feature",persistentId:"top-albums-announcement",title:X.title,paragraph:X.paragraph,canClose:!0,type:"alert",limitDate:"2026-04-20T23:59:59.999Z"}},p=V=>c[V]===!0,v=V=>{if(!p(V)){const K={...c,[V]:!0};d(K),localStorage.setItem("shownAlerts",JSON.stringify(K))}};C.useEffect(()=>{if(n)return;const V=f();!p(V.persistentId)&&M(V)&&a(V)},[r.language,c]);const S=V=>{M(V)&&(a(V),l(!1))},m=V=>{M(V)&&S({...V,type:"alert"})},w=V=>{S({...V,type:"confirmation"})},M=V=>{if(!V.limitDate)return!0;const K=new Date(V.limitDate);return new Date<=K},j=V=>{if(!V.persistentId){M(V)&&m(V);return}!p(V.persistentId)&&M(V)&&S({...V,type:"alert"})},A=()=>{(n==null?void 0:n.type)==="alert"&&D(),!(!n||s)&&(l(!0),setTimeout(()=>{a(null),l(!1),document.body.style.overflow="unset"},300))},L=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&D(),A()},E=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&D(),A()},D=()=>{n!=null&&n.persistentId&&v(n.persistentId)},q={modal:n,showModal:S,showAlert:m,showConfirmation:w,showConditionalAlert:j,closeModal:A,isModalVisible:!!n,hasAlertBeenShown:p,markSpecificAlertAsShown:v};return o.jsxs(_4.Provider,{value:q,children:[e,n&&o.jsx(zs,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,disclaimerText:n.disclaimerText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?L:null,cancelText:n.cancelText||null,onCancel:n.cancelText?E:n.canClose?A:null,isClosing:s,customButton:n.customButton})]})},S4={BASE_URL:"https://api.posterfy.space"},A4=S4.BASE_URL;class k4{constructor(t=A4){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,a={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`);const s=await fetch(n,a);if(!s.ok){const l=await s.json().catch(()=>({})),c=new Error(l.error||`HTTP error ${s.status}`);throw c.status=s.status,c.code=l.code||null,c}return s.json()}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){const t=encodeURIComponent(`${window.location.origin}/login`);return`${this.baseURL}/auth/google?redirect=${t}`}getSpotifyAuthUrl(){const t=encodeURIComponent(`${window.location.origin}/login`);return`${this.baseURL}/auth/spotify?redirect=${t}`}async publishPoster({spotifyAlbumId:t,albumName:r,artistsName:n,releaseDate:a,posterJson:s,visibility:l="public",albumNameOriginal:c,artistsNameOriginal:d}){return this.request("/api/posters",{method:"POST",body:JSON.stringify({spotifyAlbumId:t,albumName:r,artistsName:n,releaseDate:a,posterJson:s,visibility:l,albumNameOriginal:c,artistsNameOriginal:d})})}async getPoster(t){return this.request(`/api/posters/${t}`)}async updatePosterVisibility(t,r){return this.request(`/api/posters/${t}/visibility`,{method:"PUT",body:JSON.stringify({visibility:r})})}async updatePosterJson(t,r,n,a){return this.request(`/api/posters/${t}`,{method:"PATCH",body:JSON.stringify({posterJson:r,albumName:n,artistsName:a})})}async deletePoster(t){return this.request(`/api/posters/${t}`,{method:"DELETE"})}async registerView(t){return this.request(`/api/posters/${t}/view`,{method:"POST"})}async registerDownload(t){return this.request(`/api/posters/${t}/download`,{method:"POST"})}async registerEdit(t){return this.request(`/api/posters/${t}/edit`,{method:"POST"})}async toggleFavorite(t){return this.request(`/api/posters/${t}/favorite`,{method:"POST"})}async setPinnedPoster(t){return t?this.request("/api/user/pinned",{method:"PUT",body:JSON.stringify({posterId:t})}):this.request("/api/user/pinned",{method:"DELETE"})}async getUserPosters({page:t=1,limit:r=20}={}){return this.request(`/api/user/posters?page=${t}&limit=${r}`)}async getUserFavorites({page:t=1,limit:r=20}={}){return this.request(`/api/user/favorites?page=${t}&limit=${r}`)}async getUserStats(){return this.request("/api/user/stats")}async getCommunityPosters({sort:t="popular",page:r=1,limit:n=20,period:a}={}){const s=new URLSearchParams({sort:t,page:r,limit:n});return a&&s.set("period",a),this.request(`/api/community?${s}`)}async searchCommunity({q:t,page:r=1,limit:n=20}={}){const a=new URLSearchParams({q:t,page:r,limit:n});return this.request(`/api/community/search?${a}`)}async getTrendingAlbums(t=10){return this.request(`/api/community/trending-albums?limit=${t}`)}async getTopUsers({sort:t="posters",limit:r=10}={}){return this.request(`/api/community/top-users?sort=${t}&limit=${r}`)}async getTopPosters(t=5){return this.request(`/api/community?sort=popular&period=week&limit=${t}`)}async searchUsers({q:t="",page:r=1,limit:n=12}={}){const a=new URLSearchParams({q:t,page:r,limit:n});return this.request(`/api/community/search-users?${a}`)}async getAlbumPosters(t,{page:r=1,limit:n=20}={}){return this.request(`/api/community/albums/${t}?page=${r}&limit=${n}`)}async getUserPublicProfile(t,{page:r=1,limit:n=20}={}){return this.request(`/api/community/users/${t}?page=${r}&limit=${n}`)}async getUserPublicStats(t){return this.request(`/api/community/users/${t}/stats`)}}const rt=new k4,Ah=C.createContext(),mi=()=>{const e=C.useContext(Ah);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},M4=({children:e})=>{const[t,r]=C.useState(null),[n,a]=C.useState(!0),[s,l]=C.useState(!1);C.useEffect(()=>{(async()=>{const M=new URLSearchParams(window.location.search).get("token");M&&(localStorage.setItem("authToken",M),rt.setAuthToken(M),window.history.replaceState({},document.title,window.location.pathname)),await c()})()},[]);const c=async()=>{const m=localStorage.getItem("authToken");if(!m){r(null),l(!1),a(!1);return}rt.setAuthToken(m);try{const w=await rt.getCurrentUser();r(w.user),l(!0),a(!1)}catch{localStorage.removeItem("authToken"),rt.setAuthToken(null),r(null),l(!1),a(!1)}},S={user:t,loading:n,isAuthenticated:s,loginWithGoogle:()=>{window.location.href=rt.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=rt.getSpotifyAuthUrl()},logout:async()=>{try{await rt.logout(),localStorage.removeItem("authToken"),rt.setAuthToken(null),r(null),l(!1)}catch(m){console.error("Logout failed:",m),localStorage.removeItem("authToken"),rt.setAuthToken(null),r(null),l(!1)}},checkAuthStatus:c,updateUser:m=>{r(m)}};return o.jsx(Ah.Provider,{value:S,children:e})};function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Gl.apply(this,arguments)}function j4(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var N4=["cdnSuffix","cdnUrl","countryCode","style","svg"],I4="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",T4="svg",L4=127397,kh=function(t){var r=t.cdnSuffix,n=r===void 0?T4:r,a=t.cdnUrl,s=a===void 0?I4:a,l=t.countryCode,c=t.style,d=t.svg,f=d===void 0?!1:d,p=j4(t,N4);if(typeof l!="string")return null;if(f){var v=""+s+l.toLowerCase()+"."+n;return C.createElement("img",Object.assign({},p,{src:v,style:Gl({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},c)}))}var S=l.toUpperCase().replace(/./g,function(m){return String.fromCodePoint(m.charCodeAt(0)+L4)});return C.createElement("span",Object.assign({role:"img"},p,{style:Gl({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},c)}),S)};const P4=b.div`
  position: relative;
`,E4=b.button`
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
`,D4=b.div`
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
`,R4=b.div`
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
`,O4=b.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,F4=b.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,cl=b.button`
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
`,ul=b.span`
  margin-left: 8px;
`,dl=b(kh)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function z4(){const[e,t]=C.useState(!1),[r,n]=C.useState(!1),{i18n:a}=Pt();C.useEffect(()=>{const f=localStorage.getItem("language");f&&a.changeLanguage(f);const p=v=>{v.target.closest(".language-selector")||s()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[a]);const s=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},l=f=>{f.stopPropagation(),e?s():t(!0)},c=f=>{a.changeLanguage(f),localStorage.setItem("language",f),s(),N3(f)},d=()=>{switch(a.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return o.jsxs(P4,{className:"language-selector",children:[o.jsx(E4,{onClick:l,"aria-label":"Select language",children:o.jsx(D4,{children:o.jsx(kh,{countryCode:d(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&o.jsxs(R4,{className:r?"closing":"",children:[o.jsx(O4,{}),o.jsxs(F4,{children:[o.jsxs(cl,{onClick:()=>c("pt"),children:[o.jsx(dl,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(ul,{children:"Português"})]}),o.jsxs(cl,{onClick:()=>c("en"),children:[o.jsx(dl,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(ul,{children:"English"})]}),o.jsxs(cl,{onClick:()=>c("es"),children:[o.jsx(dl,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(ul,{children:"Español"})]}),o.jsxs(cl,{onClick:()=>c("zh"),children:[o.jsx(dl,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),o.jsx(ul,{children:"中文"})]})]})]})]})}function B4(e){return nt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Mh(e){return nt({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function i0(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function U4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function H4(e){return nt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function $4(e){return nt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function jh(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function q4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function V4(e){return nt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Y4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function o0(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function G4(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const W4=b.div`
  position: relative;
`,X4=b.button`
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
`,Z4=b.div`
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
`,J4=b.div`
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
`,Q4=b.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,K4=b.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,e6=b.button`
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
`,t6=b.div`
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
`,r6=b.span`
  margin-left: 4px;
  font-weight: 500;
`;function n6(){const[e,t]=C.useState(!1),[r,n]=C.useState(!1),{theme:a,setSpecificTheme:s}=t1(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:o.jsx(G4,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:o.jsx(q4,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:o.jsx(H4,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:o.jsx($4,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:o.jsx(V4,{}),isLight:!1}],c=l.find(v=>v.id===a)||l[0];C.useEffect(()=>{const v=S=>{S.target.closest(".theme-selector")||d()};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[]);const d=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=v=>{v.stopPropagation(),e?d():t(!0)},p=v=>{s(v),d()};return o.jsxs(W4,{className:"theme-selector",children:[o.jsx(X4,{onClick:f,"aria-label":"Select theme",children:o.jsx(Z4,{themeColor:c.color,isLight:c.isLight,children:c.icon})}),e&&o.jsxs(J4,{className:r?"closing":"",children:[o.jsx(Q4,{}),o.jsx(K4,{children:l.map(v=>o.jsxs(e6,{onClick:()=>p(v.id),children:[o.jsx(t6,{className:"theme-preview",color:v.color,isLight:v.isLight,children:v.icon}),o.jsx(r6,{children:v.name})]},v.id))})]})]})}function i6(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"},child:[]}]})(e)}function Nh(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"},child:[]}]})(e)}function a0(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function o6(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"},child:[]}]})(e)}function a6(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 20.9811C3.64378 20.7257 1 17.9216 1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811V21H7V20.9811ZM13 12V8H11V12H8L12 17L16 12H13Z"},child:[]}]})(e)}function s6(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 7C10.8954 7 10 7.89543 10 9C10 9.74025 10.4022 10.3866 10.9999 10.7324L11 15H13L13.0011 10.7318C13.5983 10.3858 14 9.73984 14 9C14 7.89543 13.1046 7 12 7Z"},child:[]}]})(e)}function l6(e){return nt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const c6=b.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: var(--backgroundColor);
  padding: ${({scrolled:e})=>"13px 0"};
  transform: ${({visible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,u6=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,d6=b.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,h6=b.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,f6=b.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,p6=b.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,m6=b.div`
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
`,g6=b.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,x6=b.button`
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
`,v6=b.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,b6=b(l6)`
  font-size: 1.5em;
  color: var(--textColor);
`,w6=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,y6=b.button`
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
`,_6=b.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`,C6=b(s6)`
  font-size: 1.2em;
  color: var(--AccentColor);
`;function Tc({hideLogo:e=!1,hideAccount:t=!1}){var A;const[r,n]=C.useState(!1),[a,s]=C.useState(!0),[l,c]=C.useState(0),[d,f]=C.useState(!1),p=".space",{user:v,isAuthenticated:S}=mi(),m=ln(),M=Fi().pathname.startsWith("/admin");C.useEffect(()=>{const L=()=>{const E=window.scrollY;E<=10?(s(!0),n(!1)):M?(s(!0),n(!0)):(E<l?s(!0):s(!1),n(!0)),c(E)};return window.addEventListener("scroll",L),()=>window.removeEventListener("scroll",L)},[l,M]);const j=()=>{m(S&&v?`/u/${v.username}`:"/login")};return o.jsxs(c6,{scrolled:r,visible:a,$isAdmin:M,children:[o.jsxs(u6,{children:[!e&&o.jsxs(d6,{onClick:()=>m("/"),children:[o.jsx(m6,{children:o.jsx(po,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),o.jsxs(h6,{children:["Posterfy",o.jsx(f6,{children:p})]})]}),o.jsxs(g6,{children:[((A=v==null?void 0:v.permissions)==null?void 0:A.includes("admin"))&&!M&&o.jsx(y6,{onClick:()=>m("/admin"),title:"Admin",children:o.jsx(_6,{children:o.jsx(C6,{})})}),o.jsx(z4,{}),o.jsx(n6,{}),!t&&o.jsx(x6,{onClick:j,children:o.jsx(v6,{children:v!=null&&v.avatar?o.jsx(w6,{src:v.avatar}):o.jsx(b6,{})})})]})]}),o.jsx(p6,{scrolled:r})]})}const Ih=Rt`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;Rt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const S6=Rt`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,A6=b.footer`
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
`,k6=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,M6=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${Ih} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,j6=b.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,N6=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`,I6=b.div`
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
`,T6=b.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`,L6=b.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`,P6=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,E6=b.a`
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
    background-color: rgba(0, 0, 0, 0.15);
    padding: 6px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover {
    border-color: var(--textColor);
    transform: scale(1.05);
    
    svg {
      transform: scale(1.05);
    }
  }
`;b.a`
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
    background-color: rgba(0, 0, 0, 0.15);
    padding: 6px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover {
    border-color: var(--textColor);
    transform: scale(1.05);
    
    svg {
      transform: scale(1.05);
    }
  }
`;const D6=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${Ih} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,R6=b.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,O6=b.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,k2=b.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${S6} 1.5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 4px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
`;b.div`
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
`;b.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;b.h3`
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--textColor);
  opacity: 0.95;
`;b.div`
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
`;b.button`
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
    background-color: rgba(0, 0, 0, 0.15);
    padding: 8px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
`;function F6(){const{t:e}=Pt(),{theme:t,setSpecificTheme:r}=t1(),n=new Date().getFullYear();return o.jsxs(A6,{children:[o.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:o.jsxs("div",{children:[o.jsx("h4",{children:"Album Poster Generator Links"}),o.jsxs("nav",{children:[o.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),o.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),o.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),o.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),o.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),o.jsxs(k6,{children:[o.jsxs(M6,{children:[o.jsxs(j6,{children:[o.jsxs(N6,{children:[o.jsx(I6,{children:o.jsx(po,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"})}),o.jsx(T6,{children:"Posterfy"})]}),o.jsx(L6,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),o.jsx(P6,{children:o.jsxs(E6,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[o.jsx(B4,{})," ",e("ViewGitHub","View on GitHub")]})})]}),o.jsxs(D6,{children:[o.jsx(R6,{children:o.jsxs(k2,{children:[o.jsx(jh,{}),e("MadeBy","Made with love by")," ",o.jsx("a",{href:"https://avictormorais.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),o.jsx(O6,{children:o.jsxs(k2,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function ps({showNavbar:e=!0,showFooter:t=!0}){return o.jsxs(o.Fragment,{children:[e&&o.jsx(Tc,{}),o.jsx(Pp,{}),t&&o.jsx(F6,{})]})}function z6(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"},child:[]}]})(e)}function Th(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"},child:[]}]})(e)}function B6(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"},child:[]}]})(e)}function U6(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function H6(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}function $6(e){return nt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}const Pi=(e={})=>{const[t,r]=C.useState(!1),n=C.useRef(null);return C.useEffect(()=>{const a=n.current,s=new IntersectionObserver(([l])=>{l.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return a&&s.observe(a),()=>{a&&s.unobserve(a)}},[e]),[n,t]},q6=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,Lh="https://query.wikidata.org/sparql",Lc="https://commons.wikimedia.org/w/api.php",s0="Posterfy/1.0 (posterfy.space)";async function M2(e){let t=e;t.includes("/")&&(t=t.split("/").pop()),t=decodeURIComponent(t),t.startsWith("File:")||(t="File:"+t);const r=new URLSearchParams({action:"query",titles:t,prop:"imageinfo",iiprop:"url",format:"json",origin:"*"});try{const s=(await(await fetch(`${Lc}?${r.toString()}`)).json()).query.pages,l=Object.keys(s)[0];return l==="-1"?null:s[l].imageinfo[0].url}catch{return null}}async function V6(e){const t=`${Lc}?action=query&list=search&srsearch=${encodeURIComponent(e+" signature")}&srnamespace=6&format=json&origin=*`;try{const a=(await(await fetch(t,{headers:{"User-Agent":s0}})).json()).query.search;if(!a||a.length===0)return{svg:null,png:null};const s=a.find(d=>d.title.toLowerCase().endsWith(".svg")),l=a.find(d=>d.title.toLowerCase().endsWith(".png")),c=async d=>{if(!d)return null;const f=`${Lc}?action=query&titles=${encodeURIComponent(d)}&prop=imageinfo&iiprop=url&format=json&origin=*`;try{const v=await(await fetch(f)).json(),S=Object.keys(v.query.pages)[0];return v.query.pages[S].imageinfo[0].url}catch{return null}};return{svg:await c(s==null?void 0:s.title),png:await c(l==null?void 0:l.title)}}catch{return{svg:null,png:null}}}async function Y6(e){const t=`
    SELECT ?artist ?spotifyId WHERE {
      ?artist ?label "${e}"@en .
      ?artist wdt:P1902 ?spotifyId .
    }`;try{const n=await(await fetch(`${Lh}?query=${encodeURIComponent(t)}&format=json`,{headers:{"User-Agent":s0,Accept:"application/sparql-results+json"}})).json();if(n.results.bindings.length>0)return n.results.bindings[0].spotifyId.value}catch{}return null}async function Pc(e,t=null){let r=e,n=null;if(!e&&t&&(r=await Y6(t)),!r){if(t){const s=await V6(t);if(s.svg)return{url:s.svg,spotifyId:null};if(s.png)return{url:s.png,spotifyId:null}}return null}const a=`
    SELECT ?artistLabel ?signature WHERE {
      ?artist wdt:P1902 "${r}" .
      OPTIONAL { ?artist wdt:P109 ?signature . }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`;try{const l=await(await fetch(`${Lh}?query=${encodeURIComponent(a)}&format=json`,{headers:{"User-Agent":s0,Accept:"application/sparql-results+json"}})).json();let c=null;if(l.results.bindings.length>0){const d=l.results.bindings[0];c=d.signature?d.signature.value.replace("http://","https://"):null,c&&c.toLowerCase().endsWith(".svg")?n=await M2(c)||c:c&&c.toLowerCase().endsWith(".png")&&(n=await M2(c)||c)}}catch{}return n?{url:n,spotifyId:r}:null}const Tr=(e,t=0)=>{const r=parseInt(e,10);return Number.isFinite(r)?r:t},Ns=C.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:a,customFont:s,scale:l=1,isThumbnail:c=!1,onArtistIdDiscovered:d},f)=>{const p=C.useRef(null),v=C.useRef(e),S=C.useRef(n),m=C.useRef(a),w=C.useRef(d),M=C.useRef(0);C.useEffect(()=>{v.current=e},[e]),C.useEffect(()=>{S.current=n},[n]),C.useEffect(()=>{m.current=a},[a]),C.useEffect(()=>{w.current=d},[d]),C.useImperativeHandle(f,()=>({getCanvas:()=>p.current})),C.useEffect(()=>{const L=M.current+1;M.current=L;let E=!1;const D=()=>!E&&M.current===L,q=K=>{if(!D()||!v.current||!K)return;const X=c?"image/jpeg":"image/png",I=c?.7:1;try{const Z=K.toDataURL(X,I);v.current(Z)}catch{}};return(async()=>{var Re;if(!r||!t)return;const K=p.current;if(!K)return;const X=2480,I=3508,Z=Math.round(X*l),_=Math.round(I*l),P=document.createElement("canvas");P.width=Z,P.height=_;const F=P.getContext("2d");if(!F)return;if((Re=document.fonts)!=null&&Re.ready)try{await document.fonts.ready}catch{}if(!D())return;const $=Math.round(Tr(t.marginSide)*l),re=Math.round(Tr(t.marginTop)*l),se=Math.round(Tr(t.marginCover)*l),fe=Math.round(Tr(t.marginBackground)*l),ne=Math.round(Tr(t.coverHorizontalPosition)*l),ge=Math.round(Tr(t.coverVerticalPosition)*l),Me=Math.round(Tr(t.coverBlur)*l*(c?.5:2)),we=de=>typeof de=="string"?de:"",k=async de=>{if(!de)return!1;const U=new Image;return U.crossOrigin="anonymous",U.decoding="async",U.src=de,new Promise(qe=>{const Ye=De=>{U.onload=null,U.onerror=null,U.onabort=null,qe(De)};U.onload=()=>{if(!D())return Ye(!1);const De=Z-se*2,_e=De/Z*11,Ue=se+ne*_e,Pe=se+ge*_e;if(Me>0&&(F.filter=`blur(${Me}px)`),F.drawImage(U,Ue,Pe,De,De),F.filter="none",t.useFade){const Ge=F.createLinearGradient(0,0,0,Math.round((3e3-Tr(t.marginBackground))*l)),Fe=oe(t.backgroundColor||"#000000");Ge.addColorStop(.5,`rgba(${Fe.r}, ${Fe.g}, ${Fe.b}, 0)`),Ge.addColorStop(.8,t.backgroundColor||"#000000"),F.fillStyle=Ge,F.fillRect(0,0,P.width,Math.round((2500-Tr(t.marginBackground))*l))}Ye(!0)},U.onerror=()=>Ye(!1),U.onabort=()=>Ye(!1)})},H=async()=>{const de=Math.round(450*l),U=Math.round(85*l),qe=q6(t.textColor||"#ffffff",de,U),Ye=new Blob([qe],{type:"image/svg+xml;charset=utf-8"}),De=URL.createObjectURL(Ye),_e=new Image;return _e.src=De,new Promise(Ue=>{const Pe=()=>{_e.onload=null,_e.onerror=null,_e.onabort=null,URL.revokeObjectURL(De),Ue()};_e.onload=()=>{D()&&(F.globalAlpha=.5,F.drawImage(_e,Z-Math.round(105*l)-de,Math.round(37*l),de,U),F.globalAlpha=1),Pe()},_e.onerror=Pe,_e.onabort=Pe})},J=async()=>{let de=t.titleSize?Tr(t.titleSize,230):230,U=Math.round(de*l);const qe=s||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){F.font=`bold ${U}px ${qe}`;let We=F.measureText(we(t.albumName)).width;for(;We>Z-$*2;)de-=1,U=Math.round(de*l),F.font=`bold ${U}px ${qe}`,We=F.measureText(we(t.albumName)).width;S.current&&!c&&S.current(de,!0)}else F.font=`bold ${U}px ${qe}`;F.fillStyle=t.textColor||"#ffffff";const Ye=Math.round(2500*l),De=Math.round(2790*l);t.showTracklist?F.fillText(we(t.albumName),$,Ye+re):F.fillText(we(t.albumName),$,De+re);const _e=t.artistsSize?Math.round(Tr(t.artistsSize,110)*l):Math.round(110*l);F.font=`bold ${_e}px ${s||"Montserrat"}`,t.showTracklist?F.fillText(we(t.artistsName),$,Ye+re+_e*1.3):F.fillText(we(t.artistsName),$,Math.round(2820*l)+re+_e);const Ue=Math.round(70*l),Pe=Math.round(60*l),Ge=Math.round(3310*l),Fe=Math.round(3390*l);F.font=`bold ${Ue}px ${s||"Montserrat"}`,F.fillText(we(t.titleRelease),$,Ge);const wt=F.measureText(we(t.titleRelease)).width;F.font=`bold ${Pe}px ${s||"Montserrat"}`;const lt=F.measureText(we(t.releaseDate)).width,mt=Math.max(wt,lt)+$+Math.round(100*l);F.font=`bold ${Ue}px ${s||"Montserrat"}`,F.fillText(we(t.titleRuntime),mt,Ge),F.globalAlpha=.7,F.font=`bold ${Pe}px ${s||"Montserrat"}`,F.fillText(we(t.runtime),mt,Fe),F.fillText(we(t.releaseDate),$,Fe),F.globalAlpha=1;const et=Math.round(3368*l),ze=Math.round(145*l),$e=Math.round(30*l);F.fillStyle=t.color1||"#000000",F.fillRect(Math.round((2045-Tr(t.marginSide))*l),et,ze,$e),F.fillStyle=t.color2||"#000000",F.fillRect(Math.round((2190-Tr(t.marginSide))*l),et,ze,$e),F.fillStyle=t.color3||"#000000",F.fillRect(Math.round((2335-Tr(t.marginSide))*l),et,ze,$e)},te=async()=>{const de=we(t.tracklist);if(!de)return;F.fillStyle=t.textColor||"#ffffff";let U=t.tracksSize?Tr(t.tracksSize,50):50,qe=U*l;const Ye=Tr(t.marginTop),De=Tr(t.artistsSize,110),_e=Math.round((2500+Ye+De*1.3+130)*l),Pe=Math.round(3310*l)-Math.round(50*l),Ge=Z-$,Fe=de.split(`
`).filter(ze=>ze.trim()!=="");if(!Fe.length)return;if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const ze=We=>{const ct=We*l;F.font=`bold ${ct}px ${s||"Montserrat"}`;const Ve=We*1.3*l;let ut=$+Math.round(10*l),Mt=0,be=_e,He=0;return Fe.forEach(Be=>{be+Ve>=Pe&&(be=_e,ut=ut+Mt+ct,Mt=0);const gt=F.measureText(`${Be}`).width,Ot=ut+gt;gt>Mt&&(Mt=gt),He=Math.max(He,Ot),be+=Ve}),He};let $e=ze(U);for(;$e>Ge&&U>1;)U-=1,$e=ze(U);qe=U*l,m.current&&!c&&m.current(U,!0)}F.font=`bold ${qe}px ${s||"Montserrat"}`;const lt=U*1.3*l;let Qe=$+Math.round(7*l),mt=0,et=_e;Fe.forEach(ze=>{et+lt>=Pe&&(et=_e,Qe=Qe+mt+qe,mt=0);const $e=F.measureText(`${ze}`).width;$e>mt&&(mt=$e),F.fillText(`${ze}`,Qe,et),et+=lt})},oe=de=>{const U=(de||"#000000").replace("#",""),qe=parseInt(U,16);return{r:qe>>16&255,g:qe>>8&255,b:qe&255}},le=de=>{const U=Ye=>{const De=Ye/255;return De<=.03928?De/12.92:Math.pow((De+.055)/1.055,2.4)};return .2126*U(de.r)+.7152*U(de.g)+.0722*U(de.b)>.179?"black":"white"},pe=async()=>{const de=we(t.albumID);if(!de)return;const U=oe(t.backgroundColor||"#000000"),qe=le(U),Ye=t.textColor||"#ffffff",De=c?320:640,Ue=`https://scannables.scdn.co/uri/plain/svg/${(t.backgroundColor||"#000000").replace("#","")}/${qe}/${De}/spotify:album:${de}`;try{const Pe=await fetch(Ue);if(!Pe.ok)return;let Ge=await Pe.text();if(!Ge||!Ge.includes("<svg"))return;qe==="black"?Ge=Ge.replace(/fill="#000000"/g,`fill="${Ye}"`):Ge=Ge.replace(/fill="#ffffff"/g,`fill="${Ye}"`),Ge=Ge.replace(t.backgroundColor||"#000000","transparent");const Fe=new Blob([Ge],{type:"image/svg+xml"}),wt=URL.createObjectURL(Fe);await new Promise(lt=>{const Qe=new Image,mt=()=>{Qe.onload=null,Qe.onerror=null,Qe.onabort=null,URL.revokeObjectURL(wt),lt()};Qe.onload=()=>{if(D()){const et=Math.round(480*l),ze=Math.round(120*l),$e=Math.round((2020-Tr(t.marginSide))*l),We=Math.round(3235*l);F.drawImage(Qe,$e,We,et,ze)}mt()},Qe.onerror=mt,Qe.onabort=mt,Qe.src=wt})}catch{}},ve=async()=>!t.spotifyArtistId&&!t.artistsName?Promise.resolve():new Promise(async de=>{let U=!1;const qe=()=>{U||(U=!0,de())},Ye=setTimeout(qe,5e3);try{const De=await Pc(t.spotifyArtistId,t.artistsName);if(!De)return clearTimeout(Ye),qe();const{url:_e,spotifyId:Ue}=De;!t.spotifyArtistId&&Ue&&w.current&&w.current(Ue);const Pe=480*l,Ge=t.signatureScale||1,Fe=Math.round(Pe*Ge),lt=Math.round((2020-Tr(t.marginSide))*l)+Math.round(Fe/100*(t.signatureHorizontalPosition||0)),Qe=Math.round(30*l),mt=Math.round(3235*l),et=t.textColor;let ze=_e;if(_e.toLowerCase().endsWith(".svg"))try{let ct=await(await fetch(_e,{mode:"cors"})).text();ct=ct.replace(/#000000/gi,et),ct=ct.replace(/<svg([^>]*)/,`<svg fill="${et}"$1`),ze=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(ct)))}`}catch{}const $e=new Image;$e.crossOrigin="anonymous",$e.onload=()=>{clearTimeout(Ye);const We=$e.width/$e.height,ct=Math.round(Fe/We),Ve=mt-Qe-ct+Math.round(ct/100*(t.signatureVerticalPosition||0));D()&&F.drawImage($e,lt,Ve,Fe,ct),qe()},$e.onerror=()=>{clearTimeout(Ye),qe()},$e.onabort=()=>{clearTimeout(Ye),qe()},$e.src=ze}catch{clearTimeout(Ye),qe()}}),ue=async()=>{F.fillStyle=t.backgroundColor;const de=Math.round(2480*l)-fe,U=_-de;F.fillRect(0,de,Z,U)};F.clearRect(0,0,Z,_),F.fillStyle=t.backgroundColor||"#000000",F.fillRect(0,0,Z,_);const ke=t.useUncompressed&&t.uncompressedAlbumCover||t.albumCover;if(await k(ke),!D()||(await ue(),!D())||(await J(),!D())||(t.showTracklist&&await te(),!D())||(t.useWatermark&&await H(),!D())||(t.showArtistSignature&&await ve(),!D())||(await pe(),!D())||(await new Promise(de=>requestAnimationFrame(()=>{requestAnimationFrame(de)})),!D()))return;const Te=K.getContext("2d");Te&&(Te.clearRect(0,0,K.width,K.height),Te.drawImage(P,0,0)),q(P)})().catch(()=>{D()&&q(p.current)}),()=>{E=!0}},[r,t,s,l,c]);const j=Math.round(2480*l),A=Math.round(3508*l);return o.jsx("canvas",{ref:p,width:j,height:A,style:{display:"none"}})});Ns.displayName="CanvasPoster";const G6=({poster:e,onImageReady:t})=>{const r=C.useRef(!1),n=C.useRef(t);C.useEffect(()=>{n.current=t},[t]);const a=C.useMemo(()=>{const l=(e==null?void 0:e.posterJson)||{};return{...l,albumID:l.albumID||(e==null?void 0:e.spotifyAlbumId)||"",albumName:l.albumName||(e==null?void 0:e.albumName)||"",artistsName:l.artistsName||(e==null?void 0:e.artistsName)||"",tracklist:typeof l.tracklist=="string"?l.tracklist:"",useUncompressed:!!l.useUncompressed,showTracklist:!!l.showTracklist,showArtistSignature:!!l.showArtistSignature}},[e]);C.useEffect(()=>{r.current=!1},[a]);const s=C.useCallback(l=>{!l||r.current||n.current&&(r.current=!0,n.current(l))},[]);return o.jsx("div",{style:{display:"none"},children:o.jsx(Ns,{posterData:a,generatePoster:!0,isThumbnail:!0,scale:.3,onImageReady:s})})},W6=Rt`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`,X6=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.3) 0%,
    rgba(150, 150, 150, 0.5) 50%,
    rgba(100, 100, 100, 0.3) 100%
  );
  background-size: 1000px 100%;
  animation: ${W6} 2s infinite;
  z-index: 10;
`,Z6=({isLoading:e=!0,children:t})=>e?o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[t,o.jsx(X6,{})]}):t,J6="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",Q6=b.div`
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
`,K6=b.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"247px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"350px"};
  margin: 0 -30px;
  
  opacity: ${e=>e.$hasAppeared?1:0};
  transform: ${e=>{const{isHovered:t,index:r,hoveredIndex:n,isMobile:a,$hasAppeared:s}=e;if(!s)return"scale(0.8) translateY(30px)";if(a)return"scale(1)";let l="scale(0.95)";if(t)l="scale(1.08) translateY(-8px)";else if(n!==null){let c=0;switch(n){case 0:r>0&&(c=70);break;case 1:r>=2&&(c=70);break;case 2:c=0;break;case 3:r<=2&&(c=-70);break;case 4:r<4&&(c=-70);break}c!==0&&(l=`scale(0.95) translateX(${c}px)`)}return l}};
  
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
`,em=b.div`
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
`,tm=b.div`
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
`,rm=b.button`
  position: absolute;
  top: 15px;
  right: 15px;
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
`,nm=b.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  z-index: 100;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    gap: 10px;
  }
`,im=b.button`
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
  margin-top: 70px;
  margin-right: -60px;

  &:hover {
    transform: scale(1.05);
    background-color: var(--AccentColor);
    color: var(--backgroundColor);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 0 12px;
    font-size: 0.85em;
    min-width: auto;
  }
`,om=({posters:e=[],onPosterClick:t=null})=>{const r=ln(),{t:n}=Pt(),[a,s]=C.useState(null),[l,c]=C.useState(!1),[d,f]=C.useState(!1),[p,v]=C.useState(null),[S,m]=C.useState(null),[w,M]=Pi(),[j,A]=C.useState([]),[L,E]=C.useState({}),D=C.useMemo(()=>e.length===5?[e[4],e[2],e[0],e[1],e[3]]:e.slice(0,5),[e]),q=D.length>0&&D.every(_=>!!L[_==null?void 0:_._id]);C.useEffect(()=>{E({}),A([])},[D]),C.useEffect(()=>{M&&q&&j.length===0&&D.length>0&&[2,1,3,0,4].forEach((P,F)=>{P<D.length&&setTimeout(()=>{A($=>[...$,P])},F*177)})},[M,q,D.length,j.length]),C.useEffect(()=>{const _=()=>{c(window.innerWidth<=770),f(window.innerWidth>480&&window.innerWidth<=1200)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const V=(_,P)=>{v(_),m(P),document.body.style.overflow="hidden"},K=()=>{v(null),m(null),document.body.style.overflow="auto"},X=(_,P)=>{t?t(_):V(P,_)},I=()=>{S!=null&&S._id&&(K(),r(`/p/${S._id}`))},Z=C.useCallback((_,P)=>{!_||!P||E(F=>({...F,[_]:P}))},[]);return o.jsxs(o.Fragment,{children:[D.map(_=>o.jsx(G6,{poster:_,onImageReady:P=>Z(_._id,P)},`${_._id}-thumbnail`)),o.jsx(Q6,{ref:w,children:D.map((_,P)=>{var re;const F=L[_._id],$=q&&!!F;return o.jsx(K6,{index:P,isHovered:a===P,hoveredIndex:a,otherIsHovered:a!==null,isMobile:l,isTablet:d,$hasAppeared:q&&j.includes(P),onMouseEnter:()=>{q&&s(P)},onMouseLeave:()=>{q&&s(null)},onClick:()=>{q&&$&&X(_,F)},children:o.jsx(Z6,{isLoading:!q,children:o.jsx("img",{src:F||((re=_==null?void 0:_.posterJson)==null?void 0:re.albumCover)||J6,alt:`${_.artistsName} - ${_.albumName}`,style:{opacity:$?1:0}})})},_._id||P)})}),p&&!t&&S&&o.jsx(em,{onClick:K,children:o.jsxs(tm,{onClick:_=>_.stopPropagation(),children:[o.jsxs(nm,{children:[o.jsx(rm,{onClick:K,children:"×"}),o.jsx(im,{onClick:I,children:n("COMMUNITY_ViewPoster")})]}),o.jsx("img",{src:p,alt:"Poster"})]})})]})},am=()=>{const[e,t]=C.useState([]),[r,n]=C.useState(!0),[a,s]=C.useState(null);return C.useEffect(()=>{(async()=>{try{n(!0);const c=await rt.getTopPosters(5);t(Array.isArray(c.posters)?c.posters.slice(0,5):[]),s(null)}catch(c){console.error("Error fetching top posters:",c),s(c.message),t([])}finally{n(!1)}})()},[]),{posters:e,loading:r,error:a}},sm="/assets/Posterfy%20-%20Graduation.JszPNno1.png",lm="/assets/Posterfy%20-%20Blonde.CgecpDDh.png",cm="/assets/Posterfy%20-%20SOS.CNKHszjL.png",um="/assets/Posterfy%20-%20Don't%20Be%20Dumb.QHClWo6O.png",dm="/assets/Posterfy%20-%20Flower%20Boy.Dq6UXJvZ.png",hm=[{id:1,coverImage:sm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c126f7f19c7f0381e56156c94a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg",useUncompressed:!1,albumName:"Graduation",artistsName:"Kanye West",titleSize:200,artistsSize:"110",tracksSize:50,marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2007-09-11",titleRuntime:"Runtime",runtime:"54min 29s",backgroundColor:"#c49578",textColor:"#3d2834",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Good Morning
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
14. Good Night`,color1:"#26383f",color2:"#815532",color3:"#849acd",albumID:"4SZko61aMnmgvNhfhgTuD3",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:lm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1c5649add07ed3720be9d5526",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music124/v4/68/f9/fe/68f9fec8-81b6-38b1-7e27-796c431436fa/814908025306.jpg",useUncompressed:!1,albumName:"Blonde",artistsName:"Frank Ocean",titleSize:200,artistsSize:"110",tracksSize:"47",marginTop:"170",marginSide:160,marginCover:-50,marginBackground:0,titleRelease:"Release date",releaseDate:"2016-08-20",titleRuntime:"Runtime",runtime:"1h 0min 17s",backgroundColor:"#e2e2e3",textColor:"#010101",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Nikes
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
17. Futura Free`,color1:"#90533b",color2:"#b47d5a",color3:"#648c5c",albumID:"3mH6qwIy9crq0I9YQbOuDf",coverZoom:5,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:cm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:um,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
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
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:dm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c18940ac99f49e44f59e6f7fb3",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/22/fd/10/22fd10a3-881d-2560-64e7-a9df650b9e47/17UM1IM42651.rgb.jpg",useUncompressed:!1,albumName:"Flower Boy",artistsName:"Tyler, The Creator",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2017-07-21",titleRuntime:"Runtime",runtime:"46min 39s",backgroundColor:"#ce9621",textColor:"#140b06",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Foreword
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
14. Enjoy Right Now, Today`,color1:"#e2c999",color2:"#c03319",color3:"#f4d16a",albumID:"2nkto6YNI4rUYTLqEwWJ3o",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],fm=b.div`
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
`,pm=b.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"247px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"350px"};
  margin: 0 -30px;
  
  opacity: ${e=>e.$hasAppeared?1:0};
  transform: ${e=>{const{isHovered:t,index:r,hoveredIndex:n,isMobile:a,$hasAppeared:s}=e;if(!s)return"scale(0.8) translateY(30px)";if(a)return"scale(1)";let l="scale(0.95)";if(t)l="scale(1.08) translateY(-8px)";else if(n!==null){let c=0;switch(n){case 0:r>0&&(c=70);break;case 1:r>=2&&(c=70);break;case 2:c=0;break;case 3:r<=2&&(c=-70);break;case 4:r<4&&(c=-70);break}c!==0&&(l=`scale(0.95) translateX(${c}px)`)}return l}};
  
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
`,mm=b.div`
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
`,gm=b.div`
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
`,xm=b.div`
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
`,vm=b.button`
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
`,bm=b.button`
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
`,wm=({onRecreate:e})=>{const{t}=Pt(),[r,n]=C.useState(null),[a,s]=C.useState(!1),[l,c]=C.useState(!1),[d,f]=C.useState(null),[p,v]=C.useState(null),[S,m]=Pi(),[w,M]=C.useState([]),j=[2,3,1,4,0];C.useEffect(()=>{m&&w.length===0&&j.forEach((D,q)=>{setTimeout(()=>{M(V=>[...V,D])},q*177)})},[m]),C.useEffect(()=>{const D=()=>{s(window.innerWidth<=770),c(window.innerWidth>480&&window.innerWidth<=1200)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const A=(D,q)=>{f(D),v(q),document.body.style.overflow="hidden"},L=()=>{f(null),document.body.style.overflow="auto"},E=()=>{f(null),e(p),document.body.style.overflow="auto"};return o.jsxs(o.Fragment,{children:[o.jsx(fm,{ref:S,children:hm.map((D,q)=>o.jsx(pm,{index:q,isHovered:r===q,hoveredIndex:r,otherIsHovered:r!==null,isMobile:a,isTablet:l,$hasAppeared:w.includes(q),onMouseEnter:()=>n(q),onMouseLeave:()=>n(null),onClick:()=>A(D.coverImage||"/placeholder.svg",D.JSONConfig),children:o.jsx("img",{src:D.coverImage||"/placeholder.svg",alt:`${D.artist} - ${D.title}`})},D.id))}),d&&o.jsx(mm,{onClick:L,children:o.jsxs(gm,{onClick:D=>D.stopPropagation(),children:[o.jsxs(xm,{children:[o.jsx(vm,{onClick:L,children:"×"}),o.jsx(bm,{onClick:E,children:t("RecreatePoster")})]}),o.jsx("img",{src:d,alt:"Album cover"})]})})]})},ym=b.div`
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
`,_m=({onRecreate:e})=>{const{posters:t}=am(),r=t&&t.length>=3;return o.jsx(ym,{children:r?o.jsx(om,{posters:t,onPosterClick:null}):o.jsx(wm,{onRecreate:e})})},Cm=b.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 100px 20px 60px;
    box-sizing: border-box;
    background-color: var(--backgroundColor);
`,Sm=b.div`
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 100px;
    z-index: 1;
    padding: 0 40px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        gap: 60px;
        padding: 0 30px;
    }

    @media (max-width: 768px) {
        gap: 40px;
        padding: 0 20px;
    }
`,Am=b.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    @media (max-width: 1100px) {
        align-items: center;
        text-align: center;
    }
`,km=b.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"40px"});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 100ms;
`,Mm=b.h1`
    font-size: 4.5em;
    font-weight: 900;
    line-height: 1.2;
    margin: 0;
    color: var(--textColor);
    letter-spacing: -0.5px;
    word-spacing: 0.1em;

    @media (max-width: 1200px) {
        font-size: 4em;
    }

    @media (max-width: 768px) {
        font-size: 2.8em;
    }

    @media (max-width: 480px) {
        font-size: 2.2em;
    }
`,jm=b.p`
    font-size: 1.15em;
    line-height: 1.8;
    color: var(--textColor);
    opacity: 0.75;
    max-width: 500px;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.3px;
`,Nm=b.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"40px"});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 400ms;
    align-items: flex-start;

    @media (max-width: 1100px) {
        align-items: center;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`,Im=b.button`
    padding: 12px 32px;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.3px;
    border: none;
    border-radius: 50px;
    background-color: var(--AccentColor);
    color: var(--textColor);
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(223, 109, 64, 0.2);

    svg {
        transition: all 0.4s ease;
        stroke: var(--textColor);
        fill: var(--textColor);
    }

    &:hover {
        transform: translateY(-2px);
        background-color: var(--textColor);
        color: var(--AccentColor);
        box-shadow: 0 8px 24px rgba(223, 109, 64, 0.3);

        svg {
            stroke: var(--AccentColor);
            fill: var(--AccentColor);
            transform: translateX(4px);
        }
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 11px 28px;
        font-size: 0.95em;
    }

    @media (max-width: 480px) {
        padding: 11px 28px;
        font-size: 0.95em;
    }
`,Tm=b.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
`,Lm=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: ${e=>e.visible?1:0};
    transform: scale(${e=>e.visible?1:.92});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 500ms;

    @media (max-width: 1100px) {
        order: -1;
    }
`,Pm=b.div`
    position: relative;
    width: 380px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: gentleFloat 4s ease-in-out infinite;

    @keyframes gentleFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }

    @media (max-width: 1200px) {
        width: 320px;
        height: 360px;
    }

    @media (max-width: 900px) {
        width: 280px;
        height: 320px;
    }

    @media (max-width: 600px) {
        width: 220px;
        height: 250px;
    }
`,Em=b(U6)`
    font-size: 2.5em;
    color: var(--textColor);
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${e=>e.visible?.35:0};
    transition: opacity 1s ease;
    transition-delay: 1000ms;
    animation: bounce 2.5s ease-in-out infinite;
    cursor: pointer;

    @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(-12px); }
    }
`;function Dm({showAnimation:e=!1,onRecreate:t}){const{t:r}=Pt(),{theme:n}=t1(),[a,s]=C.useState(!1);C.useEffect(()=>{if(e){const d=setTimeout(()=>{s(!0)},100);return()=>clearTimeout(d)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},c=()=>{const d=document.querySelector('[data-section="album-search"]');d&&d.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsxs(o.Fragment,{children:[o.jsxs(Cm,{children:[o.jsxs(Sm,{children:[o.jsxs(Am,{children:[o.jsxs(km,{visible:a,children:[o.jsx(Mm,{children:r("heroTitle")||`Your vision,
our design`}),o.jsx(jm,{children:r("heroDescription")})]}),o.jsx(Nm,{visible:a,children:o.jsxs(Im,{onClick:c,children:[r("startCreating")||"Start Creating",o.jsx(Tm,{children:o.jsx($6,{})})]})}),o.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[o.jsx("h2",{children:"Free Album Poster Generator"}),o.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),o.jsx("h3",{children:"Features:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Free album poster maker"}),o.jsx("li",{children:"Spotify integration"}),o.jsx("li",{children:"Custom poster design"}),o.jsx("li",{children:"High-quality downloads"}),o.jsx("li",{children:"Multiple format options"}),o.jsx("li",{children:"Professional templates"})]})]})]}),o.jsx(Lm,{visible:a,children:o.jsx(Pm,{children:o.jsx(po,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),o.jsx(Em,{visible:a,onClick:l})]}),o.jsx("div",{"data-section":"album-search",children:o.jsx(_m,{onRecreate:t})})]})}const Rm=b.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,Om=b.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function ts({text:e,type:t}){return o.jsx(o.Fragment,{children:t==1?o.jsx(Rm,{children:e}):o.jsx(Om,{children:e})})}const Fm=b.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,zm=b.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Bm=b.p`
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
`,j2=b.div`
    display: flex;
`;function r1({title:e,paragraph:t}){return o.jsxs(Fm,{children:[o.jsx(j2,{children:o.jsx(zm,{children:e})}),o.jsx(j2,{children:o.jsx(Bm,{children:t})})]})}function Um(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Hm(e){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const $m=b.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,qm=b(Um)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Vm=b.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,Ym=b.hr`
    opacity: 0.15;
    margin: 5px;
`,Gm=b.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,Wm=b.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Pa({q:e,a:t}){const[r,n]=C.useState(!1);function a(){n(!r)}return o.jsxs(o.Fragment,{children:[o.jsxs($m,{onClick:a,children:[o.jsx(qm,{showA:r}),o.jsx(Vm,{children:e})]}),o.jsx(Ym,{}),o.jsx(Gm,{showA:r,children:o.jsx(Wm,{showA:r,children:t})})]})}const Xm=b.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Zm=b.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Jm(){const{t:e}=Pt();return o.jsxs(Xm,{id:"faq",children:[o.jsx(ts,{text:"FAQ",type:1}),o.jsxs(Zm,{children:[o.jsx(Pa,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),o.jsx(Pa,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),o.jsx(Pa,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),o.jsx(Pa,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),o.jsx(Pa,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),o.jsx(Pa,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const l0=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:a="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>o.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),o.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),o.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),o.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),o.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),o.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),o.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),o.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),o.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),o.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),o.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),o.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),o.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),o.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),o.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),o.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),o.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),o.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:a}),o.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:a}),o.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:a}),o.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:a}),o.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:a}),o.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),Qm=b.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Km=b.div`
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
`,eg=b.p`
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
`,tg=b.button`
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
`;function rg(){const{t:e}=Pt();return o.jsxs(Qm,{id:"share",children:[o.jsx(ts,{text:e("Share"),type:1}),o.jsx(r1,{title:e("ShareTitle")}),o.jsx(Km,{children:o.jsx(l0,{width:"100%"})}),o.jsx(eg,{children:e("ShareDescription")}),o.jsx(tg,{children:e("ComingSoon")})]})}function n1(e){return nt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const wr={getOverview:()=>rt.request("/api/admin/overview"),getHealth:()=>rt.request("/api/admin/health"),getUsers:(e={})=>{const t=new URLSearchParams(e).toString();return rt.request(`/api/admin/users?${t}`)},getUser:e=>rt.request(`/api/admin/users/${e}`),editUser:(e,t)=>rt.request(`/api/admin/users/${e}/edit`,{method:"PUT",body:JSON.stringify(t)}),banUser:e=>rt.request(`/api/admin/users/${e}/ban`,{method:"PUT"}),unbanUser:e=>rt.request(`/api/admin/users/${e}/unban`,{method:"PUT"}),promoteUser:e=>rt.request(`/api/admin/users/${e}/promote`,{method:"PUT"}),demoteUser:e=>rt.request(`/api/admin/users/${e}/demote`,{method:"PUT"}),forceLogout:e=>rt.request(`/api/admin/users/${e}/force-logout`,{method:"POST"}),purgeUser:e=>rt.request(`/api/admin/users/${e}/purge`,{method:"DELETE"}),bulkUsers:e=>rt.request("/api/admin/users/bulk",{method:"PUT",body:JSON.stringify(e)}),getPosters:(e={})=>{const t=new URLSearchParams(e).toString();return rt.request(`/api/admin/posters?${t}`)},getPoster:e=>rt.request(`/api/admin/posters/${e}`),deletePoster:e=>rt.request(`/api/admin/posters/${e}`,{method:"DELETE"}),restorePoster:e=>rt.request(`/api/admin/posters/${e}/restore`,{method:"PUT"}),purgePoster:e=>rt.request(`/api/admin/posters/${e}/purge`,{method:"DELETE"}),changeVisibility:(e,t)=>rt.request(`/api/admin/posters/${e}/visibility`,{method:"PUT",body:JSON.stringify({visibility:t})}),editPoster:(e,t)=>rt.request(`/api/admin/posters/${e}/edit`,{method:"PUT",body:JSON.stringify(t)}),getLogs:(e={})=>{const t=new URLSearchParams(e).toString();return rt.request(`/api/admin/logs?${t}`)}},ng=Rt`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,ig=Rt`
    from { opacity: 0; }
    to   { opacity: 1; }
`,og=Rt`
    from { opacity: 0; transform: scale(0.96) translateY(-4px); }
    to   { opacity: 1; transform: scale(1)    translateY(0);    }
`,i1=b.div`
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
`,ag=b.div`
    position: relative;
    width: 100%;
    /* A4 portrait aspect ratio */
    aspect-ratio: 2480 / 3508;
    background: ${({$bg:e})=>e||"#1a1a1a"};
    overflow: hidden;
    flex-shrink: 0;
`,sg=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: ${ig} 0.4s ease;
`,lg=b.div`
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
`,cg=b.p`
    font-size: 1.1em;
    font-weight: 700;
    color: ${({$color:e})=>e||"#fff"};
    opacity: 0.85;
    margin: 0;
    word-break: break-word;
`,ug=b.p`
    font-size: 0.85em;
    color: ${({$color:e})=>e||"#fff"};
    opacity: 0.5;
    margin: 0;
`;b.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;b.div`
    width: 22px;
    height: 22px;
    border: 2.5px solid transparent;
    border-top-color: ${({$color:e})=>e||"rgba(255,255,255,0.6)"};
    border-radius: 50%;
    animation: ${ng} 0.7s linear infinite;
`;b.div`
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
`;const dg=b.button`
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
`,hg=b.button`
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
`;b.button`
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
`;const fg=b.div`
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`,pg=b.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,mg=b.p`
    font-size: 0.85em;
    opacity: 0.55;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,N2=b.hr`
    border: none;
    border-top: 1px solid ${({$color:e})=>e?e+"33":"var(--borderColor)"};
    margin: 5px 0;
`,I2=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,T2=b.div`
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
`,L2=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,P2=b.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
`,E2=b.span`
    font-size: 0.85em;
    font-weight: 600;
    opacity: 0.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,D2=b.span`
    font-size: 0.65em;
    font-weight: 600;
    color: ${({$color:e})=>e||"#999"};
    text-transform: capitalize;
    line-height: 1.2;
`;b.div`
    display: flex;
    gap: 12px;
    margin-top: 5px;
`;b.span`
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.8em;
    opacity: 0.45;
    color: ${({$color:e})=>e||"var(--textColor)"};
`;const R2=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 14px 14px;
    flex-wrap: wrap;
`,P1=b.button`
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
`,O2=b.span`
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
`,gg=b.div`
    position: fixed;
    inset: 0;
    z-index: 9998;
`,xg=b.div`
    position: fixed;
    z-index: 9999;
    min-width: 222px;
    background: var(--backgroundColor);
    border: 1px solid color-mix(in srgb, var(--textColor) 11%, transparent);
    border-radius: 14px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.22), 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;
    animation: ${og} 0.13s cubic-bezier(0.22, 1, 0.36, 1) both;
`,lo=b.button`
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
`,vg=b.div`
    height: 1px;
    background: color-mix(in srgb, var(--textColor) 10%, transparent);
    margin: 4px 0;
`,bg=b.div`
    font-size: 0.68em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.35;
    padding: 6px 12px 2px;
    color: var(--textColor);
    user-select: none;
`,wg={bronze:"#cd7f32",silver:"#a8a9ad",gold:"#ffc107",diamond:"#5bc4f5"},yg=e=>{if(!e)return null;const[t,r]=e.split("_");return{type:t,tier:r,color:wg[r]||"#999"}};function Ec({poster:e,variant:t="community",onDelete:r,onVisibilityChange:n,onUnfavorite:a,onPin:s,pinned:l=!1,isOwner:c=!1}){var ve;const{t:d}=Pt(),f=ln(),{isAuthenticated:p,user:v}=mi(),S=(ve=v==null?void 0:v.permissions)==null?void 0:ve.includes("admin"),m=C.useRef(null),[w,M]=C.useState(!1),[j,A]=C.useState(null),[L,E]=C.useState(e.favorited||!1),[D,q]=C.useState(!1),[V,K]=C.useState(null),[X,I]=C.useState(""),[Z,_]=C.useState(!1),[P,F]=C.useState(e.visibility);C.useEffect(()=>{const ue=m.current;if(!ue||j)return;const ke=new IntersectionObserver(([Te])=>{Te.isIntersecting&&M(!0)},{threshold:.05});return ke.observe(ue),()=>ke.disconnect()},[j]);const $=C.useCallback(ue=>{A(ue)},[]),re=()=>f(`/p/${e._id}`),se=async ue=>{if(ue.stopPropagation(),!p||D)return;q(!0);const ke=L;E(!ke);try{await rt.toggleFavorite(e._id)}catch{E(ke)}finally{q(!1)}};C.useEffect(()=>{if(!V)return;const ue=Te=>Te.preventDefault(),ke=Te=>{[" ","ArrowUp","ArrowDown","PageUp","PageDown","Home","End"].includes(Te.key)&&Te.preventDefault()};return document.addEventListener("wheel",ue,{passive:!1}),document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("keydown",ke),()=>{document.removeEventListener("wheel",ue),document.removeEventListener("touchmove",ue),document.removeEventListener("keydown",ke)}},[V]);const fe=ue=>{ue.preventDefault(),ue.stopPropagation();const ke=240,Te=S?340:220,Re=ue.clientX+ke>window.innerWidth?ue.clientX-ke:ue.clientX,de=ue.clientY+Te>window.innerHeight?ue.clientY-Te:ue.clientY;K({x:Re,y:de})},ne=async()=>{if(K(null),!p||D)return;q(!0);const ue=L;E(!ue);try{await rt.toggleFavorite(e._id)}catch{E(ue)}finally{q(!1)}},ge=(ue,ke)=>{navigator.clipboard.writeText(ue).catch(()=>{}),I(ke),setTimeout(()=>{I(""),K(null)},1200)},Me=async()=>{K(null);try{await wr.deletePoster(e._id),_(!0)}catch{}},we=async()=>{K(null);const ue=P==="public"?"private":"public";try{await wr.changeVisibility(e._id,ue),F(ue)}catch{}},k=e.authorId,H=e.posterJson||{},J=k?yg(k.badge):null,te={...H,albumID:e.spotifyAlbumId,albumCover:H.albumCover||"",useUncompressed:!1,useWatermark:!0},oe=!!H.albumCover,le=H.backgroundColor||"#1a1a1a",pe=H.textColor||"#ffffff";return Z?null:o.jsxs(o.Fragment,{children:[o.jsxs(i1,{ref:m,onClick:re,$bg:le,onContextMenu:fe,children:[o.jsxs(ag,{$bg:le,children:[w&&oe&&!j&&o.jsx(Ns,{posterData:te,generatePoster:!0,scale:.3,isThumbnail:!0,onImageReady:$}),j?o.jsx(sg,{src:j,alt:e.albumName}):o.jsxs(lg,{$bg:le,children:[o.jsx(cg,{$color:pe,children:e.albumName}),o.jsx(ug,{$color:pe,children:e.artistsName})]}),p&&t!=="favorites"&&o.jsx(dg,{$active:L,$bg:le,$txtColor:pe,onClick:se,children:L?o.jsx(Vo,{style:{color:le,fill:le}}):o.jsx(Nc,{style:{color:le,stroke:le}})}),t==="myposters"&&s&&o.jsx(hg,{$active:l,$bg:le,$txtColor:pe,onClick:ue=>{ue.stopPropagation(),s(e._id)},title:l?"Remover destaque":"Fixar no destaque",children:l?o.jsx(G3,{style:{color:le,fill:le}}):o.jsx(Y3,{style:{color:le,stroke:le}})})]}),o.jsxs(fg,{children:[o.jsx(pg,{$color:pe,children:e.albumName}),o.jsx(mg,{$color:pe,children:e.artistsName}),t==="community"&&(k==null?void 0:k.username)&&o.jsxs(o.Fragment,{children:[o.jsx(N2,{$color:pe}),o.jsxs(I2,{style:{cursor:"pointer"},onClick:ue=>{ue.stopPropagation(),f(`/u/${k.username}`)},children:[o.jsx(T2,{$color:pe,children:k!=null&&k.avatar?o.jsx(L2,{src:k.avatar,alt:k.name}):((k==null?void 0:k.name)||"?").charAt(0).toUpperCase()}),o.jsxs(P2,{children:[o.jsx(E2,{$color:pe,children:(k==null?void 0:k.name)||(k==null?void 0:k.username)||"Unknown"}),J&&o.jsxs(D2,{$color:pe,children:[d(`BADGE_TYPE_${J.type}`)," ",d(`BADGE_TIER_${J.tier}`)]})]})]})]}),t==="myposters"&&o.jsx(O2,{$backgroundColor:le,$color:pe,$public:e.visibility==="public",children:e.visibility==="public"?d("DASH_Public"):d("DASH_Private")}),t==="community"&&S&&!c&&e.visibility==="private"&&o.jsxs(O2,{$backgroundColor:le,$color:pe,$public:!1,children:[d("DASH_Private")," ",o.jsx(Ic,{size:12,style:{marginLeft:4}})]}),t==="favorites"&&o.jsxs(o.Fragment,{children:[o.jsx(N2,{$color:pe}),o.jsxs(I2,{style:{cursor:k!=null&&k.username?"pointer":"default"},onClick:ue=>{k!=null&&k.username&&(ue.stopPropagation(),f(`/u/${k.username}`))},children:[o.jsx(T2,{children:k!=null&&k.avatar?o.jsx(L2,{src:k.avatar,alt:k.name}):((k==null?void 0:k.name)||"?").charAt(0).toUpperCase()}),o.jsxs(P2,{children:[o.jsx(E2,{$color:pe,children:(k==null?void 0:k.name)||(k==null?void 0:k.username)||"Unknown"}),J&&o.jsxs(D2,{$color:pe,children:[d(`BADGE_TYPE_${J.type}`)," ",d(`BADGE_TIER_${J.tier}`)]})]})]})]})]}),t==="myposters"&&o.jsxs(R2,{children:[o.jsx(P1,{$accentColor:pe,$backgroundColor:le,onClick:ue=>{ue.stopPropagation(),n(e._id,e.visibility==="public"?"private":"public")},children:e.visibility==="public"?d("DASH_MakePrivate"):d("DASH_MakePublic")}),o.jsx(P1,{$danger:!0,$accentColor:pe,$backgroundColor:le,onClick:ue=>{ue.stopPropagation(),r(e)},children:d("DASH_Delete")})]}),t==="favorites"&&o.jsx(R2,{children:o.jsx(P1,{$danger:!0,$accentColor:pe,$backgroundColor:le,onClick:ue=>{ue.stopPropagation(),a(e._id)},children:d("DASH_Unfavorite")})})]}),V&&Xd.createPortal(o.jsxs(o.Fragment,{children:[o.jsx(gg,{onClick:()=>K(null),onContextMenu:ue=>{ue.preventDefault(),K(null)}}),o.jsxs(xg,{style:{left:V.x,top:V.y},children:[p&&t!=="favorites"&&o.jsxs(lo,{onClick:ne,children:[L?o.jsx(Vo,{}):o.jsx(Nc,{}),d(L?"CARD_CTX_Unlike":"CARD_CTX_Like")]}),o.jsxs(lo,{onClick:()=>{K(null),f(`/p/${e._id}`)},children:[o.jsx(Yl,{}),d("CARD_CTX_Open")]}),o.jsxs(lo,{onClick:()=>{K(null),window.open(`/p/${e._id}`,"_blank")},children:[o.jsx(A2,{}),d("CARD_CTX_OpenNewTab")]}),(k==null?void 0:k.username)&&o.jsxs(lo,{onClick:()=>{K(null),f(`/u/${k.username}`)},children:[o.jsx(e4,{}),d("CARD_CTX_UserProfile")]}),(k==null?void 0:k.username)&&o.jsxs(lo,{onClick:()=>{K(null),window.open(`/u/${k.username}`,"_blank")},children:[o.jsx(A2,{}),d("CARD_CTX_UserProfileNewTab")]}),S&&o.jsxs(o.Fragment,{children:[o.jsx(vg,{}),o.jsx(bg,{children:d("CARD_CTX_Admin")}),(k==null?void 0:k._id)&&o.jsxs(lo,{onClick:()=>ge(String(k._id),"user"),children:[o.jsx(S2,{}),d(X==="user"?"CARD_CTX_Copied":"CARD_CTX_CopyUserId")]}),o.jsxs(lo,{onClick:()=>ge(String(e._id),"poster"),children:[o.jsx(S2,{}),d(X==="poster"?"CARD_CTX_Copied":"CARD_CTX_CopyPosterId")]}),o.jsxs(lo,{onClick:we,children:[P==="public"?o.jsx(Ic,{}):o.jsx(yh,{}),d(P==="public"?"DASH_MakePrivate":"DASH_MakePublic")]}),o.jsxs(lo,{"data-danger":"true",onClick:Me,children:[o.jsx(n4,{}),d("CARD_CTX_Delete")]})]})]})]}),document.body)]})}const _g=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[o.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),o.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),o.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),o.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),o.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),o.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),o.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),o.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),o.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),o.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),o.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),o.jsx("g",{fill:r,opacity:"0.3",children:o.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),o.jsxs("g",{fill:t,opacity:"0.2",children:[o.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),o.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),o.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),o.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),o.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),o.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),o.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),o.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),o.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),o.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),o.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),o.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),o.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),o.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),o.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),o.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),o.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),o.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),o.jsx("path",{fill:a,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),o.jsx("path",{fill:a,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),o.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),o.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),o.jsx("g",{clipPath:"url(#clip0_1_72)",children:o.jsx("path",{fill:a,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_1_72",children:o.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Qa=({width:e=186})=>{const t=e>186?e:186,r=e*417/300;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,fill:"none",viewBox:"0 0 300 417",children:[o.jsx("path",{fill:"#FFBE9D",d:"m53.23 69.01-2.91 35.67a10.66 10.66 0 0 0 6.113 10.513 10.7 10.7 0 0 0 4.167.997 10.663 10.663 0 0 0 11-9.79c.22-2.69.4-4.93.44-5.2 0 0 9.15-.12 10.54-9 .67-4.32 1.33-13.32 1.83-21.48a16.83 16.83 0 0 0-14.43-17.69l-.87-.13c-9.44-.83-15.35 6.7-15.88 16.11"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M72.06 101.07a21 21 0 0 1-11.19-5s1.84 6.83 10.88 7.3z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M81.06 75.24a1.28 1.28 0 0 1-1.41 1.11 1.24 1.24 0 0 1-1.16-1.34 1.29 1.29 0 0 1 1.42-1.11 1.22 1.22 0 0 1 1.15 1.34"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M82.06 74.27c-.19.15-1-.71-2.43-.9s-2.48.35-2.6.16.14-.36.62-.62a3.5 3.5 0 0 1 2.12-.33 3.36 3.36 0 0 1 1.9.92c.39.39.49.71.39.77M67.72 74a1.3 1.3 0 0 1-1.42 1.12 1.24 1.24 0 0 1-1.15-1.34 1.29 1.29 0 0 1 1.41-1.12A1.24 1.24 0 0 1 67.72 74M68.34 72.78c-.19.14-1.05-.71-2.43-.9s-2.48.35-2.61.16.14-.36.63-.62a3.57 3.57 0 0 1 2.12-.34 3.46 3.46 0 0 1 1.9.93c.37.4.47.77.39.77M71.79 84.03a9 9 0 0 1 2.29-.09c.36 0 .7 0 .79-.23a1.8 1.8 0 0 0-.08-1.08l-.66-2.82c-.9-4-1.5-7.3-1.33-7.33a47 47 0 0 1 1.92 7.2c.21 1 .41 1.93.61 2.84a2 2 0 0 1 0 1.4.87.87 0 0 1-.65.43 2.5 2.5 0 0 1-.61 0 8.7 8.7 0 0 1-2.28-.32M69.14 69.97c-.19.36-1.54 0-3.18 0s-3 .21-3.18-.15c-.07-.18.21-.5.78-.78a5.58 5.58 0 0 1 4.85.15c.55.28.81.59.73.78M81.5 68.78c-.28.28-1.18-.18-2.32-.36s-2.14-.09-2.31-.45c-.08-.17.12-.46.58-.7a3.28 3.28 0 0 1 2-.24 3.3 3.3 0 0 1 1.77.89c.33.34.41.68.28.86"}),o.jsx("path",{fill:"#FFBE9D",d:"M53.06 75.78c-.14-.09-5.89-2.7-6.57 3.45s5.63 5.56 5.66 5.39.91-8.84.91-8.84"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M50.49 82.04s-.11.06-.3.13c-.27.079-.56.05-.81-.08a2.67 2.67 0 0 1-1-2.51 3.6 3.6 0 0 1 .47-1.5 1.23 1.23 0 0 1 .9-.73.55.55 0 0 1 .6.36c.06.18 0 .3 0 .32s.14-.09.12-.35a.66.66 0 0 0-.2-.41.78.78 0 0 0-.57-.23 1.52 1.52 0 0 0-1.23.83 3.64 3.64 0 0 0-.56 1.68 2.78 2.78 0 0 0 1.27 2.82 1.18 1.18 0 0 0 1-.05c.28-.13.33-.27.31-.28"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M49.64 75.05a3.24 3.24 0 0 1 2.73 1.93c.28.93.22 1.93.49 2.86s1.06 1.85 2 1.76a1.89 1.89 0 0 0 1.47-1.21c.229-.64.33-1.32.3-2 .05-2.91-.15-5.83.15-8.72a14.83 14.83 0 0 1 3-8.07 8.15 8.15 0 0 1 7.74-3c1.88.43 3.48 1.67 5.33 2.2a7.56 7.56 0 0 0 6.51-1.18q.15-.11.32-.19a1.68 1.68 0 0 0 .86-1.83 1.6 1.6 0 0 0-.28-.64c-3.25-4-9.87-5.93-15-5.39a18.06 18.06 0 0 0-13.06 7.71c-2.79 4.33-3.08 10.88-2.58 15.74M74.73 88.03a4.9 4.9 0 0 1-1.95-.4 5.1 5.1 0 0 1-1.84-.79 4.9 4.9 0 0 1 2 .4 4.85 4.85 0 0 1 1.79.79"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M81.69 94.55a3.74 3.74 0 0 1-.68 1.68 9 9 0 0 1-3.17 3 15.7 15.7 0 0 1-4.06 1.61 7 7 0 0 1-1.78.32 9 9 0 0 1 1.69-.6c1.37-.416 2.691-.98 3.94-1.68a10.2 10.2 0 0 0 3.14-2.83c.63-.87.85-1.53.92-1.5"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M53.87 57.18c1.22.76 2.505 1.41 3.84 1.94 1.39.36 2.809.599 4.24.71a8.34 8.34 0 0 1-8.08-2.65"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M73.61 60.78c-.07.07-.85-.78-2.43-1.65a11.66 11.66 0 0 0-6.77-1.4c-1.36.13-2.67.42-3.88.58a12 12 0 0 1-3.26.06 6.1 6.1 0 0 1-2.11-.64c-.46-.25-.67-.45-.66-.48a9.2 9.2 0 0 0 2.81.76c1.053.072 2.112.012 3.15-.18 1.19-.18 2.49-.48 3.91-.62a11.26 11.26 0 0 1 7 1.6c.62.383 1.187.844 1.69 1.37.4.36.57.6.55.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M54.38 57.58a15.8 15.8 0 0 0 0-3.82 5.9 5.9 0 0 0-1.66-3.37 4.92 4.92 0 0 0-4.5-1 6.2 6.2 0 0 0-3.69 2.89 5.93 5.93 0 0 0-.11 6 4.39 4.39 0 0 0 5.51 1.69c.67-.35 1.22-.9 1.89-1.26a2 2 0 0 1 2.14 0"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M54.8 55.86c.12.09-.38.94-1.15 1.89s-1.53 1.61-1.65 1.47a7.4 7.4 0 0 1 1.25-1.8c.81-.94 1.44-1.64 1.55-1.56"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M47.29 49.78a6.1 6.1 0 0 0-1.16 1.39 3.05 3.05 0 0 0-.36 1.82 3.8 3.8 0 0 0 1.13 2 8.05 8.05 0 0 0 3.89 1.88c.62.087 1.228.248 1.81.48-.63.06-1.264.019-1.88-.12a7.55 7.55 0 0 1-4.19-1.86 4.1 4.1 0 0 1-1.23-2.3 3.3 3.3 0 0 1 .51-2.07c.68-1.02 1.48-1.22 1.48-1.22"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M50.61 49.33a4.1 4.1 0 0 0-1 1 3 3 0 0 0-.45 1.45 4.1 4.1 0 0 0 .49 1.81 7.1 7.1 0 0 0 2.4 2.56c.77.51 1.32.71 1.29.79a2.84 2.84 0 0 1-1.48-.47 6.4 6.4 0 0 1-2.68-2.64 4.35 4.35 0 0 1-.5-2.07 3.1 3.1 0 0 1 .63-1.64c.6-.8 1.31-.86 1.3-.79"}),o.jsx("path",{fill:"#FFBE9D",d:"m73.6 361.67-8.35 38.03 14.26.13 10.34-33.31z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m86.13 384.78-5.21 17.3s15.83 11.1 15.18 14.39l-33.9-8.89 7-27.29z"}),o.jsx("path",{fill:"var(--textColor)",d:"M70.82 397.78a1.44 1.44 0 0 0-1.37 1.33 1.38 1.38 0 0 0 1.3 1.37 1.518 1.518 0 0 0 1.45-1.42 1.42 1.42 0 0 0-1.52-1.27"}),o.jsx("path",{fill:"var(--textColor)",d:"m62.2 407.53.86-2.75 32.2 9.54s1.34 1.05.89 2.07z",opacity:"0.4"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M81.51 402c0 .16-.89 0-1.85.34s-1.57.9-1.7.8.36-1 1.52-1.37 2.11.09 2.03.23M84.68 404.4c0 .17-.79.27-1.54.82s-1.1 1.25-1.26 1.2 0-1 .91-1.68 1.93-.49 1.89-.34M85.59 409.19c-.16 0-.18-.89.49-1.69s1.53-1 1.56-.79-.57.51-1.11 1.17-.78 1.34-.94 1.31M82.26 397.93c-.11.13-.81-.3-1.76-.48s-1.76-.08-1.81-.24.81-.57 1.93-.34 1.76.91 1.64 1.06M83.25 394.42a3.26 3.26 0 0 1-1.7-.46 7.6 7.6 0 0 1-1.63-1 9 9 0 0 1-.84-.77 2 2 0 0 1-.41-.54.74.74 0 0 1 .16-.9 1 1 0 0 1 .82-.19c.214.059.42.146.61.26q.53.272 1 .64c.505.407.94.893 1.29 1.44.376.468.6 1.041.64 1.64-.09 0-.34-.59-1-1.4a7.3 7.3 0 0 0-1.29-1.25 5.7 5.7 0 0 0-.9-.55c-.33-.19-.64-.27-.77-.14s-.06.08 0 .2q.12.219.3.39.358.397.76.75c.457.401.953.756 1.48 1.06q.77.354 1.48.82"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M82.97 394.6a2.76 2.76 0 0 1 0-1.76c.137-.636.38-1.245.72-1.8q.309-.491.7-.92a1.48 1.48 0 0 1 1.31-.57.84.84 0 0 1 .59.66c.03.222.03.448 0 .67-.04.393-.14.778-.3 1.14a4 4 0 0 1-1.19 1.57c-.89.7-1.63.72-1.63.66s.63-.27 1.36-1c.415-.411.739-.905.95-1.45q.187-.483.23-1c0-.38 0-.7-.16-.7s-.53.15-.74.4a5.5 5.5 0 0 0-.67.81 6.3 6.3 0 0 0-.77 1.61c-.31 1.01-.31 1.68-.4 1.68"}),o.jsx("path",{fill:"#FFBE9D",d:"m36.22 368.18.87 38.92 13.88-3.24 2.18-34.81z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m53.83 387.63-1 18s18 7.05 18.15 10.4l-35-.64.36-28.17z"}),o.jsx("path",{fill:"var(--textColor)",d:"M42.06 403.95a1.44 1.44 0 0 0-1 1.62 1.377 1.377 0 0 0 1.59 1 1.51 1.51 0 0 0 1.07-1.72 1.43 1.43 0 0 0-1.77-.88"}),o.jsx("path",{fill:"var(--textColor)",d:"m35.97 415.43.14-2.84 33.55 1.67s1.55.71 1.35 1.81z",opacity:"0.4"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M53.43 405.5c0 .17-.87.23-1.72.77s-1.31 1.24-1.47 1.17.12-1.05 1.16-1.68 2.07-.42 2.03-.26M57.06 407.08c0 .17-.71.45-1.31 1.16s-.77 1.48-.94 1.47-.26-1 .49-1.86 1.76-.93 1.76-.77M59.06 411.52c-.16 0-.38-.82.07-1.75s1.27-1.29 1.34-1.15-.44.64-.8 1.41-.41 1.48-.61 1.49M53.2 401.36c-.08.16-.86-.09-1.83-.05s-1.73.34-1.81.2.65-.75 1.79-.79 1.93.51 1.85.64M53.33 397.72a3.4 3.4 0 0 1-1.76 0 8 8 0 0 1-1.82-.6 8 8 0 0 1-1-.55 2.4 2.4 0 0 1-.53-.43.76.76 0 0 1-.06-.91 1 1 0 0 1 .76-.37c.224-.002.447.032.66.1q.556.15 1.08.39c.586.28 1.125.647 1.6 1.09.8.77 1.07 1.42 1 1.45s-.47-.49-1.28-1.13a7.6 7.6 0 0 0-1.55-.91 7.5 7.5 0 0 0-1-.33c-.37-.1-.68-.11-.78.06s0 .08 0 .19q.166.184.38.31.444.303.92.55.808.417 1.68.68.864.15 1.7.41"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M53.06 397.96a2.8 2.8 0 0 1-.43-1.7c-.019-.651.073-1.3.27-1.92a6 6 0 0 1 .47-1.06 1.44 1.44 0 0 1 1.13-.86.81.81 0 0 1 .73.5q.126.309.17.64c.055.395.055.795 0 1.19a4 4 0 0 1-.79 1.8c-.7.89-1.42 1.08-1.43 1s.55-.41 1.09-1.27c.306-.5.504-1.059.58-1.64a4 4 0 0 0 0-1c-.05-.37-.18-.67-.32-.64s-.48.27-.63.56a7 7 0 0 0-.45.95 6.2 6.2 0 0 0-.37 1.74c-.02 1.04.11 1.69-.02 1.71M81.54 218.13s27.74 71.59 25.45 91.68-16.93 84.97-16.93 84.97l-23.5-8.3 9.41-80-18.14-55.06 5.66-31.23z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M28.27 212.21s0 14.12 1.57 19.86l1.43 8.35c-1 46-.73 154.39-.73 154.39l31.4.38 9.83-179.41z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M72.58 232.55q.024.21 0 .42c0 .3 0 .71-.08 1.23-.08 1.11-.2 2.7-.36 4.74-.32 4.13-.78 10.08-1.34 17.41-1.13 14.7-2.56 35-4 57.48s-2.53 42.79-3.41 57.53c-.43 7.35-.79 13.3-1 17.44-.13 2-.24 3.63-.31 4.74q-.06.78-.09 1.23a2 2 0 0 1-.05.42 2.3 2.3 0 0 1 0-.42v-1.24l.21-4.74c.2-4.15.5-10.1.87-17.45.76-14.72 1.85-35.07 3.25-57.54s2.89-42.78 4.11-57.48c.61-7.35 1.12-13.3 1.51-17.4.2-2 .35-3.62.46-4.73 0-.52.1-.93.13-1.23q.03-.21.1-.41M47.54 236.86c0-.09 1.2-.39 3.1-1.05a19 19 0 0 0 3.19-1.45 9.05 9.05 0 0 0 3.07-2.86 9.6 9.6 0 0 0 1.39-4c.14-1.164.18-2.339.12-3.51-.1-2-.24-3.26-.16-3.27.116.273.187.564.21.86.1.56.23 1.37.32 2.39.12 1.194.12 2.396 0 3.59a9.55 9.55 0 0 1-1.42 4.19 9.24 9.24 0 0 1-3.27 3 16.7 16.7 0 0 1-3.31 1.39c-1 .29-1.78.47-2.34.58-.292.09-.595.137-.9.14M80.46 318.91c-.25-.4-.459-.826-.62-1.27-.37-.83-.87-2.05-1.47-3.56-1.2-3-2.75-7.25-4.26-12s-2.7-9.08-3.47-12.24c-.39-1.58-.68-2.86-.86-3.75a8 8 0 0 1-.24-1.4c.193.433.34.886.44 1.35.26 1 .61 2.22 1 3.71.86 3.13 2.1 7.45 3.6 12.17s3 8.95 4.11 12c.53 1.45 1 2.67 1.32 3.61q.29.669.45 1.38"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M67.65 113.7s43.14 41 42.87 50.62-9.35 12.1-12.37 11.87-26.81-24.28-26.81-24.28z"}),o.jsx("path",{fill:"var(--textColor)",d:"M67.65 113.7s43.14 41 42.87 50.62-9.35 12.1-12.37 11.87-26.81-24.28-26.81-24.28z",opacity:"0.4"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m47.86 104.48 2.68-9.68 21.18 8.59-.47 10.13-10.18 3.43-10.44-5.72z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m81.54 218.13-3.55-82c-.48-9.81-3.65-21.36-10.05-28.81l-.06-1.32-17.61-3.44s-20.9 4.82-22.09 22.91c-1 14.36-2.17 71.59-2.17 92.66z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M54.16 102.6a19.7 19.7 0 0 1 1.42-5.49 10 10 0 0 1-.51 2.8 9.9 9.9 0 0 1-.91 2.69M62.11 99.51a9.1 9.1 0 0 1-.28 2.77 9 9 0 0 1-.7 2.69 19 19 0 0 1 1-5.46zM68.28 102.22c.054.838.02 1.679-.1 2.51a11 11 0 0 1-.24 2.51 9.46 9.46 0 0 1 .34-5z"}),o.jsx("path",{fill:"var(--textColor)",d:"M37.06 137.78a215.5 215.5 0 0 0 25 37.32c2.48 3 5.12 6.08 8.57 7.93s5.65 1.18 8.9-1a20.9 20.9 0 0 1-8.1-3.5 37.6 37.6 0 0 1-8.41-8.15c-8.47-10.52-16.74-21.38-25.2-31.91",opacity:"0.2"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M45.53 165.97a14.6 14.6 0 0 1-3.37 2.67 14.3 14.3 0 0 1-3.8 2 24 24 0 0 1 3.52-2.45 23.4 23.4 0 0 1 3.65-2.22M35.97 156.47a11.8 11.8 0 0 1-.19-3.4 11.4 11.4 0 0 1 .33-3.39c.24 1.117.303 2.264.19 3.4.07 1.14-.042 2.285-.33 3.39M36.24 192.43a10.7 10.7 0 0 1-2.77-3.32 10.9 10.9 0 0 1-1.7-4c.15-.06.91 1.7 2.15 3.7s2.44 3.52 2.32 3.62M57.27 186.78a41 41 0 0 1-4.21 2.61 42 42 0 0 1-4.24 2.54 16.6 16.6 0 0 1 4-3 17.1 17.1 0 0 1 4.45-2.15M53.48 178.68a13.2 13.2 0 0 1-3.26-1.64 12.4 12.4 0 0 1-3-2.09c1.157.393 2.255.945 3.26 1.64a13 13 0 0 1 3 2.09M54.13 169.72a8.2 8.2 0 0 1 1.46-2.55 8.6 8.6 0 0 1 1.88-2.24 8.2 8.2 0 0 1-1.46 2.54 8.5 8.5 0 0 1-1.88 2.25M37.85 216.68a12.8 12.8 0 0 1-2.92-2.19 13.1 13.1 0 0 1-2.57-2.59 12.6 12.6 0 0 1 2.92 2.2 13.6 13.6 0 0 1 2.57 2.58M51.54 210.69a12.45 12.45 0 0 1-4.7 4.92c.691-.9 1.465-1.733 2.31-2.49a17.8 17.8 0 0 1 2.39-2.43M30.4 161.6a30.6 30.6 0 0 1-.22 8 15.2 15.2 0 0 1-.15-4 15.7 15.7 0 0 1 .37-4M33.06 139.4c0 .15-.9.23-2 .18s-2-.2-2-.34a7.75 7.75 0 0 1 4 .16M36.42 115.38a11.6 11.6 0 0 1-2 2.74 11.4 11.4 0 0 1-2.43 2.4 22.5 22.5 0 0 1 4.47-5.14zM49.34 112.89a13 13 0 0 1-.85-3 12.8 12.8 0 0 1-.64-3 7.3 7.3 0 0 1 1.15 2.88 7.4 7.4 0 0 1 .34 3.12"}),o.jsx("path",{fill:"#FFBE9D",d:"M82.88 107.66c-3 .15-3.31 0-6.66.36a5.2 5.2 0 0 0-1.47.31 1.64 1.64 0 0 0-1 1.08c-.19.93.78 1.72 1.71 1.89s1.91-.05 2.84.12a6.24 6.24 0 0 1 3.82 2c2.06 2.65 4 1.24 5.39 2.15l3.36-2.35-1.47-5.05-6.56-.51"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M87.86 115.56a3.9 3.9 0 0 0-1-.25 8.5 8.5 0 0 1-2.77-.35 4.4 4.4 0 0 1-1.53-1.18 5 5 0 0 0-1.59-1.38 7.3 7.3 0 0 0-2.22-.77 18 18 0 0 0-2.57-.1 2.482 2.482 0 0 1-2.24-1.47 1.44 1.44 0 0 1 .26-1.35 2.26 2.26 0 0 1 1.08-.69 13.4 13.4 0 0 1 2.21-.29c.68-.05 1.33-.09 1.91-.11h2.76a5.4 5.4 0 0 1 1 0 4.3 4.3 0 0 1-1 .13c-.65 0-1.6.08-2.76.15l-1.89.16q-1.071.076-2.12.31c-.68.19-1.33.85-1.08 1.55a2.1 2.1 0 0 0 1.9 1.19q1.31-.05 2.61.11a8 8 0 0 1 2.32.83 5.4 5.4 0 0 1 1.67 1.49c.387.478.876.864 1.43 1.13a9.7 9.7 0 0 0 2.67.46c.253.033.498.115.72.24.16.12.23.17.23.19"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m79.76 104.78 17-9.13a1.07 1.07 0 0 1 1.4.34 1.082 1.082 0 0 1-.39 1.57l-15.53 8.14z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M26.4 203.2a3.5 3.5 0 0 1-.55.16q-.804.198-1.63.29a21.1 21.1 0 0 1-6-.11 28.1 28.1 0 0 1-8.53-2.83 29 29 0 0 1-4.51-2.84 14 14 0 0 1-2.12-1.92 3.3 3.3 0 0 1-.7-1.37 2.2 2.2 0 0 1 .27-1.58 3.31 3.31 0 0 1 2.63-1.46 15 15 0 0 1 2.85.13 28.27 28.27 0 0 1 13.23 5.18 15.5 15.5 0 0 1 4.28 4.28c.293.469.525.973.69 1.5q.111.274.13.57a12.3 12.3 0 0 0-1-2 16 16 0 0 0-4.33-4.09 28.25 28.25 0 0 0-13.07-5 14 14 0 0 0-2.74-.12 2.8 2.8 0 0 0-2.24 1.2 2 2 0 0 0 .39 2.37 15 15 0 0 0 2 1.84 30.6 30.6 0 0 0 4.42 2.82 28.6 28.6 0 0 0 8.37 2.88c1.979.36 3.996.454 6 .28 1.38-.05 2.15-.25 2.16-.18"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M24.17 199.41a2 2 0 0 1-.31-.37l-.81-1.1a46 46 0 0 1-2.7-4.27 20.1 20.1 0 0 1-2.43-7.1 13 13 0 0 1 .19-4.47q.119-.581.32-1.14c.11-.405.29-.787.53-1.13a1.44 1.44 0 0 1 1.2-.69 1.51 1.51 0 0 1 1.16.77 36.2 36.2 0 0 1 5.1 15.79 33 33 0 0 1 0 5.05c0 .59-.11 1.05-.14 1.36a1.4 1.4 0 0 1-.09.47 13 13 0 0 1 0-1.84 39 39 0 0 0-.2-5 37.4 37.4 0 0 0-5.16-15.53 1 1 0 0 0-.75-.54.94.94 0 0 0-.76.48 6.4 6.4 0 0 0-.78 2.07 13.1 13.1 0 0 0-.2 4.3 20.3 20.3 0 0 0 2.28 7c1 1.87 1.91 3.32 2.54 4.32l.73 1.16c.22.25.3.4.28.41M0 222.78a14.07 14.07 0 0 0 10.85-.12 18.5 18.5 0 0 0 5.83-4 35.9 35.9 0 0 0 7.07-10.77c.66-1.45 1.2-2.66 1.62-3.6q.258-.68.64-1.3a7.4 7.4 0 0 1-.45 1.38c-.33.87-.81 2.14-1.47 3.67a34.15 34.15 0 0 1-7 11 18.4 18.4 0 0 1-6 4 14.7 14.7 0 0 1-5.81 1.08 11.9 11.9 0 0 1-3.91-.75 7 7 0 0 1-1-.45 1.1 1.1 0 0 1-.37-.14M22.06 238.31a7 7 0 0 1-.33-1.39l-.15-.75c0-.29-.05-.59-.09-.91 0-.65-.16-1.39-.15-2.21a73.4 73.4 0 0 1 1-12.78c.74-5 1.72-9.38 2.49-12.57.38-1.59.72-2.87 1-3.76q.155-.699.43-1.36c-.03.477-.11.95-.24 1.41l-.8 3.79c-.68 3.2-1.59 7.63-2.33 12.57a87 87 0 0 0-1.13 12.69c-.02 3.26.43 5.25.3 5.27"}),o.jsx("path",{fill:"var(--textColor)",d:"M44.26 104.78s.1-.09.33-.23a5.6 5.6 0 0 1 1-.49 9 9 0 0 1 4.24-.29c2.1.336 4.101 1.121 5.87 2.3a37.4 37.4 0 0 1 5.91 4.94 32.8 32.8 0 0 1 7.47 11.74c.33.84.53 1.62.74 2.3s.32 1.29.41 1.78q.169.762.22 1.54c-.12 0-.4-2.19-1.71-5.49a34.5 34.5 0 0 0-7.51-11.51 40 40 0 0 0-5.8-4.91 14.9 14.9 0 0 0-5.66-2.32 9.4 9.4 0 0 0-4.12.11c-.89.23-1.36.53-1.39.53"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M69.06 174.34s.15 23.48-3.75 24.79c-4.92 1.65-39.26 0-39.26 0v8.43s34.19-2.2 37 2.2c2.65 4.16 27.14 80.54 32.07 103.48h15.45s-8.2-39.4-11.1-49.45c-1.55-5.35-6.69-22.36-11.34-35.63a109.5 109.5 0 0 1-6.14-38.48l.37-17.46-2.68-45H69.8z"}),o.jsx("path",{fill:"var(--textColor)",d:"M69.06 174.34s.15 23.48-3.75 24.79c-4.92 1.65-39.26 0-39.26 0v8.43s34.19-2.2 37 2.2c2.65 4.16 27.14 80.54 32.07 103.48h15.45s-8.2-39.4-11.1-49.45c-1.55-5.35-6.69-22.36-11.34-35.63a109.5 109.5 0 0 1-6.14-38.48l.37-17.46-2.68-45H69.8z",opacity:"0.7"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M100.26 229.21a3.44 3.44 0 0 0 1.89-2 3.4 3.4 0 0 0-.27-2.77c-.58-1-1.72-1.78-1.95-2.94a1.88 1.88 0 0 0-.67 1.26c-.67-.66.07-2-.66-2.63a1.26 1.26 0 0 0-1.42.11 3.92 3.92 0 0 0-1.64 3 5.42 5.42 0 0 0 2.12 4.75q1.175.7 2.27 1.52"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m98.74 229.64-1.12 14.41a1 1 0 0 0 1.8.78c.148-.171.24-.384.26-.61l1.1-14.4z"}),o.jsx("path",{fill:"var(--textColor)",d:"m98.74 229.64-.34-1.13 2.88.11-.48 1.17z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M93.49 239.88c-.11-.44-2-14.37-2.58-19.13a1.4 1.4 0 0 1 2.77-.41l3.26 20.07z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M86.3 235.65h16.22s5 21.1-3.1 28.14l-5-.89z"}),o.jsx("path",{fill:"var(--textColor)",d:"M86.3 235.65h16.22s5 21.1-3.1 28.14l-5-.89z",opacity:"0.7"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M100.06 262.78c-.351.116-.724.15-1.09.1a6 6 0 0 1-2.83-1 10.24 10.24 0 0 1-3.09-3.18 49 49 0 0 1-2.61-4.72 67.5 67.5 0 0 1-3.67-9.06c-.38-1.19-.64-2.17-.82-2.85a4.8 4.8 0 0 1-.2-1.07c.174.315.309.651.4 1l1 2.79a88 88 0 0 0 3.79 9c.85 1.69 1.67 3.31 2.54 4.69a10.4 10.4 0 0 0 2.88 3.13c.796.55 1.705.915 2.66 1.07.69.1 1.04.02 1.04.1"}),o.jsx("path",{fill:"#FFBE9D",d:"M103.92 154.24a7.8 7.8 0 0 1 .61-2.67 2.62 2.62 0 0 1 2.12-1.56 1.62 1.62 0 0 1 1.225.48 1.63 1.63 0 0 1 .465 1.23 4.1 4.1 0 0 1-.82 1.4c-.94 1.42-.76 3.28-.66 5s0 3.66-1.36 4.75"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M39.06 117.46a14.43 14.43 0 0 0-5.515 9.86 14.42 14.42 0 0 0 3.285 10.81l30.81 36.75a21.74 21.74 0 0 0 27 5 21.73 21.73 0 0 0 11.13-21.25l-7.51-33-15.1 2.38 1.9 25.11-25.76-33.11a14.42 14.42 0 0 0-20.2-2.55z"}),o.jsx("path",{fill:"#FFBE9D",d:"M104.22 170.1c-3.88-.71-4.56-1.34-8.43-2-1.16-.21-2.66-.88-2.21-2.11a1.635 1.635 0 0 1 1.58-1c1.51.05 4 .82 5.4.89.36 0 .33-.34.16-.58a45.5 45.5 0 0 0-7.24-1.19 1.76 1.76 0 0 1-1.496-1.204 1.76 1.76 0 0 1 .496-1.856 2.5 2.5 0 0 1 1-.35c1.55.15 1.55.15 3.2.36 4.63.57 4-.31 4-.31 0-.35-5.27-.6-8-.8a2.28 2.28 0 0 1-1.6-.53 1.53 1.53 0 0 1 .09-1.92 2.66 2.66 0 0 1 1.8-1c3-.2 12.85.42 12.85.42s1.37 1.69 1.15 5.27a20.3 20.3 0 0 1-2.75 7.91"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m90.86 181.48-.42.08-1.21.18c-1.07.15-2.65.38-4.7.5a23 23 0 0 1-7.44-.66 20.9 20.9 0 0 1-8.42-5.13 110 110 0 0 1-8.1-8.86c-2.77-3.31-5.67-6.88-8.7-10.67q-4.545-5.685-9.39-12l-4.89-6.39c-.42-.54-.83-1.09-1.24-1.63l-.59-.86a7 7 0 0 1-.55-.9 14 14 0 0 1-1.49-3.94 13.8 13.8 0 0 1-.29-4.2q.083-1.045.3-2.07a15 15 0 0 1 .62-2q.363-.967.85-1.88.512-.888 1.14-1.7a14 14 0 0 1 2.86-2.84 15.1 15.1 0 0 1 3.47-1.93 14.7 14.7 0 0 1 11.14.34 14.8 14.8 0 0 1 5.55 4.44l4.06 5.3 7.29 9.52 10.54 13.8c1.23 1.62 2.18 2.89 2.84 3.77l.74 1q.126.168.23.35l-.27-.32-.76-1-2.91-3.72-10.64-13.73-7.33-9.49-4.09-5.2a14.4 14.4 0 0 0-5.42-4.31 14.1 14.1 0 0 0-7.16-1.17c-1.26.119-2.498.408-3.68.86a15 15 0 0 0-3.37 1.87 13.7 13.7 0 0 0-2.78 2.76 17 17 0 0 0-1.1 1.66 16.007 16.007 0 0 0-1.43 3.75q-.204.991-.29 2a13.8 13.8 0 0 0 .28 4.09 13.6 13.6 0 0 0 1.45 3.82 28 28 0 0 0 2.34 3.34l4.89 6.39c3.22 4.17 6.35 8.18 9.37 12s5.91 7.38 8.67 10.69a110 110 0 0 0 8 8.86 20.6 20.6 0 0 0 8.29 5.12c2.397.643 4.883.89 7.36.73 2-.09 3.63-.3 4.7-.42l1.22-.14q.228-.047.46-.06"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M87.3 165.03a20.4 20.4 0 0 0-.08-6.48 20.6 20.6 0 0 0-2.52-6c.481.441.887.958 1.2 1.53a13.88 13.88 0 0 1 1.88 9 5.8 5.8 0 0 1-.48 1.95M48.16 132.31a18.5 18.5 0 0 1-3.93-1.85 18 18 0 0 1-3.69-2.31 18.7 18.7 0 0 1 3.94 1.85c1.315.62 2.55 1.395 3.68 2.31M58.62 138.57a15 15 0 0 1 0-4.69 15.2 15.2 0 0 1 1-4.59 35 35 0 0 1-.45 4.65 36 36 0 0 1-.55 4.63M59.78 151.15a15.5 15.5 0 0 1-7.14-2.44c1.229.279 2.43.668 3.59 1.16 1.215.332 2.403.76 3.55 1.28M71.87 157.96a18.5 18.5 0 0 1 .16-4.33c.057-1.452.285-2.892.68-4.29a18.6 18.6 0 0 1-.16 4.34 17.7 17.7 0 0 1-.68 4.28M74.16 170.42a18.8 18.8 0 0 1-3-3.14 18.5 18.5 0 0 1-2.63-3.47 18.4 18.4 0 0 1 3 3.13 18.3 18.3 0 0 1 2.63 3.48M90.61 171.71a34 34 0 0 1-3.83.69 30 30 0 0 1-3.82.74 9.9 9.9 0 0 1 3.72-1.25 9.6 9.6 0 0 1 3.93-.18M92.59 148.85c.342-1.186.85-2.317 1.51-3.36a13.4 13.4 0 0 1 2-3.11 25.9 25.9 0 0 1-3.48 6.47zM92.73 135.96a7.9 7.9 0 0 1-2.61-1.18 8.2 8.2 0 0 1-2.36-1.65c.936.24 1.823.643 2.62 1.19.874.403 1.67.959 2.35 1.64"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M76.55 99.98c-2.09 1.18-3.53 4.17-4.81 6.13a4.9 4.9 0 0 0-.87 1.94c-.026.76.143 1.514.49 2.19.45 1 .94 2 1.43 3.07.14.29.32.61.64.67s.72-.34.86-.72c.255-.979.376-1.988.36-3a3.09 3.09 0 0 1 1.35-2.58"}),o.jsx("path",{fill:"#FFBE9D",d:"m80.33 107.78-2.17-1.46a.633.633 0 0 0-.87.12l-1 1.33.74 3.21c.88 4.13-2.24 3.63-2.24 3.63l-.28-.79-1.6-5c-.39-2.41-.21-2.71.88-4.52l2.41-3.82a2.09 2.09 0 0 1 2.41-.91c3.78 1.19 11.9 3.29 13 6.39 1.92 5.64 3.91 19.83 3.95 20.09l-11.2 1.73-.52-9.57a5.1 5.1 0 0 1-2.25-2.57 73 73 0 0 1-1.26-7.89"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M88.24 109.27s-.11.2-.4.47a3.7 3.7 0 0 1-1.5.86c-.402.102-.82.119-1.23.05a2.2 2.2 0 0 1-1.25-.7c-.7-.76-.85-1.88-1.48-2.67a4.9 4.9 0 0 0-1.2-.9 13 13 0 0 0-1.3-.65 2.5 2.5 0 0 0-1.18-.27 2.4 2.4 0 0 0-.89.59c-1 1-1.51 1.74-1.57 1.68s.09-.21.32-.54a9.6 9.6 0 0 1 1-1.34 2.6 2.6 0 0 1 1-.72q.19-.03.38 0l.35.07q.346.09.68.22.703.28 1.36.65c.49.26.936.598 1.32 1 .72.93.85 2 1.45 2.68a2.17 2.17 0 0 0 2.12.61 3.9 3.9 0 0 0 1.46-.69c.38-.28.54-.43.56-.4M87.16 112.78a9.5 9.5 0 0 1-3.22-.39 9.4 9.4 0 0 1-3-1.09c1.064.143 2.114.374 3.14.69a21.5 21.5 0 0 1 3.08.79"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M82.44 105.36c0-.05.21-.11.52 0a1.34 1.34 0 0 1 .809.989 1.35 1.35 0 0 1-.379 1.221c-.25.24-.46.26-.48.22s.11-.17.25-.4c.19-.297.26-.653.2-1a1.36 1.36 0 0 0-.54-.81c-.21-.1-.39-.16-.38-.22"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M65.24 112.78a3.39 3.39 0 0 0-4.053-.011c-.39.288-.712.657-.947 1.081-.58 1-.64 2.39-1.53 3.18.466.166.98.145 1.43-.06-.22.91-1.78 1-1.91 1.91a1.24 1.24 0 0 0 .82 1.16 4 4 0 0 0 3.39-.11 5.45 5.45 0 0 0 3-4.26q-.006-1.369.14-2.73"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m66.38 113.89 13-6.42a1.001 1.001 0 0 0-.26-1.94 1 1 0 0 0-.66.09l-12.93 6.42z"}),o.jsx("path",{fill:"var(--textColor)",d:"m66.38 113.89-.79.87-1.38-2.52 1.25-.2z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m174.54 272.86-32.69 143.21h7.76l31.91-143.21z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m170.66 272.86-32.68 143.21h7.75l31.91-143.21z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M258.93 264.25c0 1.28 28.44 151.45 28.44 151.45h8.33l-29-151.45z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M255.44 264.25c0 1.28 28.44 151.45 28.44 151.45h8.87l-29.53-151.45z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m236.66 272.86-1.9 143.21h10.48l1.53-143.21z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m160.58 264.25-.67 9.49 88.09 3.01.94-11.31z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M248 276.75h4.91l.9-11.25-4.87-.06z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m166.53 309.78 67.18 3.14v11.43l-69.12-3.42z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m233.71 272.86-1.9 143.21h10.48l1.52-143.21zM189.14 272.86a68 68 0 0 0 0 7.69l36.24 2.08v-8.32zM220.69 0c.43 1 6.07 38.88 6.07 38.88l6.75-.46L228.06 0z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M231.32 2.89 228.06 0l5.45 38.42 2.8-.2zM240.24 17.78c0 .73-.52 20.31-.52 20.31l7.24-.49V17.78z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M238.4 17.78c0 .73-.52 20.31-.52 20.31l7.24-.49V17.78z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m216.35 18.38-5.36 21.58 6.4-.44 4.87-21.14z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m213.59 18.38-5.36 21.58 6.4-.44 4.87-21.14z"}),o.jsx("path",{fill:"var(--textColor)",d:"m295.3 32.51 4.33 3.83-5.51 229.61h-6.36z"}),o.jsx("path",{fill:"var(--textColor)",d:"m150.98 44.73-18.86 218.65 155.64 2.57 7.54-233.44z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m150.98 44.78 2.56-.24 7.53-.66 28.89-2.5 105.32-9h.23v.23c-2 63-4.62 143.89-7.44 231.78 0 .56 0 1.11-.05 1.66v.25h-.26l-155.64-2.6h-.25v-.25c5.63-64.67 10.38-119.35 13.73-157.87 1.69-19.24 3-34.43 3.94-44.83.46-5.18.81-9.17 1-11.87.12-1.33.22-2.35.28-3s.1-1 .1-1 0 .36-.07 1-.14 1.72-.25 3.07c-.23 2.7-.57 6.71-1 11.91-.89 10.41-2.18 25.63-3.81 44.89-3.29 38.49-8 93.13-13.5 157.75l-.23-.26 155.64 2.55-.26.25c0-.54 0-1.1.05-1.65 2.86-87.9 5.5-168.76 7.55-231.79l.22.21-105.2 8.71-28.9 2.39-7.58.62z"})]})},Cg=Rt`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,Sg=b.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`,Ag=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;


    @media (max-width: 768px) { padding-inline: 5%; }
`,kg=b.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: start;
    align-items: start;
`,Mg=b.button`
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
`,jg=b.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,Ng=b(o0)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`,Ig=b.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`,Tg=b.input`
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
`,Lg=b.button`
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
`,Pg=b.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); padding-inline: 5%; }
    @media (max-width: 500px)  { grid-template-columns: 1fr; padding-inline: 5%; }
`,Eg=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`,Dg=b(n1)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${Cg} 0.8s linear infinite;
`,Rg=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,Og=b.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    margin-top: 20px;
    padding: 10px 20px;
`,Fg=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
`,zg=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
`;b.p`
    font-size: 0.85em;
    opacity: 0.5;
    text-align: center;
    margin-top: 24px;
`;const Bg=b.button`
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
`,F2=[{key:"popular",labelKey:"COMMUNITY_Popular",sort:"popular",period:null,requiresAuth:!1},{key:"recent",labelKey:"COMMUNITY_Recent",sort:"recent",period:null,requiresAuth:!1},{key:"week",labelKey:"COMMUNITY_ThisWeek",sort:"popular",period:"week",requiresAuth:!1},{key:"myfavorites",labelKey:"COMMUNITY_MyFavorites",sort:null,period:null,requiresAuth:!0}];function Ug(){const{t:e}=Pt(),{isAuthenticated:t}=mi(),[r,n]=C.useState("popular"),[a,s]=C.useState(""),[l,c]=C.useState(""),[d,f]=C.useState([]),[p,v]=C.useState(1),[S,m]=C.useState(!1),[w,M]=C.useState(!0),[j,A]=C.useState(!1),[L,E]=C.useState(!1),D=C.useRef(null),q=C.useCallback(async(_,P,F)=>{const $=F2.find(re=>re.key===_);P===1?M(!0):A(!0),E(!1);try{let re;_==="myfavorites"?re=await rt.getUserFavorites({page:P,limit:8}):re=await rt.getCommunityPosters({sort:$.sort,page:P,limit:8,period:$.period}),f(se=>F?[...se,...re.posters]:re.posters),v(P),m(re.hasMore)}catch(re){console.error("Community fetch error:",re),E(!0)}finally{M(!1),A(!1)}},[]),V=C.useCallback(async(_,P,F)=>{P===1?M(!0):A(!0),E(!1);try{const $=await rt.searchCommunity({q:_,page:P,limit:8});f(re=>F?[...re,...$.posters]:$.posters),v(P),m($.hasMore)}catch($){console.error("Community search error:",$),E(!0)}finally{M(!1),A(!1)}},[]);C.useEffect(()=>{q("popular",1,!1)},[]),C.useEffect(()=>{!t&&r==="myfavorites"&&(n("popular"),q("popular",1,!1))},[t]);const K=_=>{_===r&&!l||(clearTimeout(D.current),s(""),c(""),n(_),q(_,1,!1),D3(_))},X=_=>{const P=_.target.value;if(s(P),clearTimeout(D.current),!P.trim()){c(""),q(r,1,!1);return}D.current=setTimeout(()=>{c(P.trim()),V(P.trim(),1,!1),E3(P.trim())},450)},I=()=>{clearTimeout(D.current),s(""),c(""),q(r,1,!1)},Z=()=>{const _=p+1;l?V(l,_,!0):q(r,_,!0)};return o.jsxs(Sg,{id:"share",children:[o.jsx(ts,{text:e("Community"),type:1}),o.jsx(r1,{title:e("CommunityTitle")}),o.jsxs(Ag,{children:[r!=="myfavorites"&&o.jsxs(jg,{role:"search",children:[o.jsx(Ng,{"aria-hidden":"true"}),o.jsx(Ig,{}),o.jsx(Tg,{type:"text",value:a,onChange:X,placeholder:e("COMMUNITY_SearchPlaceholder"),autoComplete:"off"}),a&&o.jsx(Lg,{onClick:I,type:"button","aria-label":"Clear search",children:o.jsx(bh,{})})]}),o.jsx(kg,{children:F2.filter(_=>!_.requiresAuth||t).map(_=>o.jsx(Mg,{$active:r===_.key&&!l,onClick:()=>K(_.key),children:e(_.labelKey)},_.key))})]}),w?o.jsx(Eg,{children:o.jsx(Dg,{})}):L?o.jsxs(Fg,{children:[o.jsx(_g,{width:"30%"}),o.jsx(zg,{children:e("COMMUNITY_FetchError")})]}):d.length===0?o.jsxs(Rg,{children:[o.jsx(Qa,{width:"25%"}),o.jsx(Og,{children:e("COMMUNITY_NoPosters")})]}):o.jsx(Pg,{children:d.map(_=>o.jsx(Ec,{poster:_},_._id))}),S&&!w&&o.jsx(Bg,{onClick:Z,disabled:j,children:e(j?"LoadingMore":"COMMUNITY_LoadMore")})]})}var hl=function(e,t){return e<t?-1:e>t?1:0},z2=function(e){return e.reduce(function(t,r){return t+r},0)},Hg=function(){function e(r){this.colors=r}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(r){return r},e}(),$g=function(){function e(s,l,c){return(s<<10)+(l<<5)+c}function t(s){var l=[],c=!1;function d(){l.sort(s),c=!0}return{push:function(f){l.push(f),c=!1},peek:function(f){return c||d(),f===void 0&&(f=l.length-1),l[f]},pop:function(){return c||d(),l.pop()},size:function(){return l.length},map:function(f){return l.map(f)},debug:function(){return c||d(),l}}}function r(s,l,c,d,f,p,v){var S=this;S.r1=s,S.r2=l,S.g1=c,S.g2=d,S.b1=f,S.b2=p,S.histo=v}function n(){this.vboxes=new t(function(s,l){return hl(s.vbox.count()*s.vbox.volume(),l.vbox.count()*l.vbox.volume())})}function a(s,l){if(l.count()){var c=l.r2-l.r1+1,d=l.g2-l.g1+1,f=Math.max.apply(null,[c,d,l.b2-l.b1+1]);if(l.count()==1)return[l.copy()];var p,v,S,m,w=0,M=[],j=[];if(f==c)for(p=l.r1;p<=l.r2;p++){for(m=0,v=l.g1;v<=l.g2;v++)for(S=l.b1;S<=l.b2;S++)m+=s[e(p,v,S)]||0;M[p]=w+=m}else if(f==d)for(p=l.g1;p<=l.g2;p++){for(m=0,v=l.r1;v<=l.r2;v++)for(S=l.b1;S<=l.b2;S++)m+=s[e(v,p,S)]||0;M[p]=w+=m}else for(p=l.b1;p<=l.b2;p++){for(m=0,v=l.r1;v<=l.r2;v++)for(S=l.g1;S<=l.g2;S++)m+=s[e(v,S,p)]||0;M[p]=w+=m}return M.forEach(function(A,L){j[L]=w-A}),function(A){var L,E,D,q,V,K=A+"1",X=A+"2",I=0;for(p=l[K];p<=l[X];p++)if(M[p]>w/2){for(D=l.copy(),q=l.copy(),V=(L=p-l[K])<=(E=l[X]-p)?Math.min(l[X]-1,~~(p+E/2)):Math.max(l[K],~~(p-1-L/2));!M[V];)V++;for(I=j[V];!I&&M[V-1];)I=j[--V];return D[X]=V,q[K]=D[X]+1,[D,q]}}(f==c?"r":f==d?"g":"b")}}return r.prototype={volume:function(s){var l=this;return l._volume&&!s||(l._volume=(l.r2-l.r1+1)*(l.g2-l.g1+1)*(l.b2-l.b1+1)),l._volume},count:function(s){var l=this,c=l.histo;if(!l._count_set||s){var d,f,p,v=0;for(d=l.r1;d<=l.r2;d++)for(f=l.g1;f<=l.g2;f++)for(p=l.b1;p<=l.b2;p++)v+=c[e(d,f,p)]||0;l._count=v,l._count_set=!0}return l._count},copy:function(){var s=this;return new r(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)},avg:function(s){var l=this,c=l.histo;if(!l._avg||s){var d,f,p,v,S=0,m=0,w=0,M=0;if(l.r1===l.r2&&l.g1===l.g2&&l.b1===l.b2)l._avg=[l.r1<<3,l.g1<<3,l.b1<<3];else{for(f=l.r1;f<=l.r2;f++)for(p=l.g1;p<=l.g2;p++)for(v=l.b1;v<=l.b2;v++)S+=d=c[e(f,p,v)]||0,m+=d*(f+.5)*8,w+=d*(p+.5)*8,M+=d*(v+.5)*8;l._avg=S?[~~(m/S),~~(w/S),~~(M/S)]:[~~(8*(l.r1+l.r2+1)/2),~~(8*(l.g1+l.g2+1)/2),~~(8*(l.b1+l.b2+1)/2)]}}return l._avg},contains:function(s){var l=this,c=s[0]>>3;return gval=s[1]>>3,bval=s[2]>>3,c>=l.r1&&c<=l.r2&&gval>=l.g1&&gval<=l.g2&&bval>=l.b1&&bval<=l.b2}},n.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){for(var l=this.vboxes,c=0;c<l.size();c++)if(l.peek(c).vbox.contains(s))return l.peek(c).color;return this.nearest(s)},nearest:function(s){for(var l,c,d,f=this.vboxes,p=0;p<f.size();p++)((c=Math.sqrt(Math.pow(s[0]-f.peek(p).color[0],2)+Math.pow(s[1]-f.peek(p).color[1],2)+Math.pow(s[2]-f.peek(p).color[2],2)))<l||l===void 0)&&(l=c,d=f.peek(p).color);return d},forcebw:function(){var s=this.vboxes;s.sort(function(f,p){return hl(z2(f.color),z2(p.color))});var l=s[0].color;l[0]<5&&l[1]<5&&l[2]<5&&(s[0].color=[0,0,0]);var c=s.length-1,d=s[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(s[c].color=[255,255,255])}},{quantize:function(s,l){if(!Number.isInteger(l)||l<1||l>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!s.length||l<2||l>256||!s.length||l<2||l>256)return!1;for(var c=[],d=new Set,f=0;f<s.length;f++){var p=s[f],v=p.join(",");d.has(v)||(d.add(v),c.push(p))}if(c.length<=l)return new Hg(c);var S=function(L){var E,D=new Array(32768);return L.forEach(function(q){E=e(q[0]>>3,q[1]>>3,q[2]>>3),D[E]=(D[E]||0)+1}),D}(s);S.forEach(function(){});var m=function(L,E){var D,q,V,K=1e6,X=0,I=1e6,Z=0,_=1e6,P=0;return L.forEach(function(F){(D=F[0]>>3)<K?K=D:D>X&&(X=D),(q=F[1]>>3)<I?I=q:q>Z&&(Z=q),(V=F[2]>>3)<_?_=V:V>P&&(P=V)}),new r(K,X,I,Z,_,P,E)}(s,S),w=new t(function(L,E){return hl(L.count(),E.count())});function M(L,E){for(var D,q=L.size(),V=0;V<1e3;){if(q>=E||V++>1e3)return;if((D=L.pop()).count()){var K=a(S,D),X=K[0],I=K[1];if(!X)return;L.push(X),I&&(L.push(I),q++)}else L.push(D),V++}}w.push(m),M(w,.75*l);for(var j=new t(function(L,E){return hl(L.count()*L.volume(),E.count()*E.volume())});w.size();)j.push(w.pop());M(j,l);for(var A=new n;j.size();)A.push(j.pop());return A}}}().quantize,Ph=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};Ph.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var Ua=function(){};Ua.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},Ua.prototype.getPalette=function(e,t,r){var n=function(c){var d=c.colorCount,f=c.quality;if(d!==void 0&&Number.isInteger(d)){if(d===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");d=Math.max(d,2),d=Math.min(d,20)}else d=10;return(f===void 0||!Number.isInteger(f)||f<1)&&(f=10),{colorCount:d,quality:f}}({colorCount:t,quality:r}),a=new Ph(e),s=function(c,d,f){for(var p,v,S,m,w,M=c,j=[],A=0;A<d;A+=f)v=M[0+(p=4*A)],S=M[p+1],m=M[p+2],((w=M[p+3])===void 0||w>=125)&&(v>250&&S>250&&m>250||j.push([v,S,m]));return j}(a.getImageData().data,a.width*a.height,n.quality),l=$g(s,n.colorCount);return l?l.palette():null},Ua.prototype.getColorFromUrl=function(e,t,r){var n=this,a=document.createElement("img");a.addEventListener("load",function(){var s=n.getPalette(a,5,r);t(s[0],e)}),a.src=e},Ua.prototype.getImageData=function(e,t){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){if(this.status==200){var n=new Uint8Array(this.response);i=n.length;for(var a=new Array(i),s=0;s<n.length;s++)a[s]=String.fromCharCode(n[s]);var l=a.join(""),c=window.btoa(l);t("data:image/png;base64,"+c)}},r.send()},Ua.prototype.getColorAsync=function(e,t,r){var n=this;this.getImageData(e,function(a){var s=document.createElement("img");s.addEventListener("load",function(){var l=n.getPalette(s,5,r);t(l[0],this)}),s.src=a})};Rt`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;Rt`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5px);
  }
`;b.div`
  display: none;
`;const Eh=b.div`
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
`,qg=b.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

  &:hover ${Eh} {
    opacity: 0.9;
  }
`;function Vg({text:e,children:t,delay:r=0}){const[n,a]=C.useState(!1),[s,l]=C.useState({top:0,left:0}),c=f=>{const p=f.currentTarget.getBoundingClientRect();l({top:p.top+p.height/2-17,left:p.right+15}),a(!0)},d=()=>{a(!1)};return o.jsxs(qg,{onMouseEnter:c,onMouseLeave:d,children:[o.jsx(Eh,{isVisible:n,style:{top:s.top,left:s.left},children:e}),t]})}const Yg=({width:e=667,fillColor:t="#CD7F32"})=>{const r=e*667/667;return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.133 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.6 1.167 17.367 0 79.3-71.434 142.766-150.7 132.166-23.1 41.1-67.1 67.834-115.967 67.834s-92.867-26.734-115.967-67.834c-79.433 10.6-150.699-52.866-150.699-132.166.008-5.808.397-11.61 1.166-17.367C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0M233.292 377a66.2 66.2 0 0 0-46.758 19.331A65.94 65.94 0 0 0 167.167 443c0 28.82-25.569 44-44.084 44 20.278 26.84 55.105 44 88.167 44a88.25 88.25 0 0 0 62.343-25.774A87.92 87.92 0 0 0 299.417 443a65.94 65.94 0 0 0-19.368-46.669A66.2 66.2 0 0 0 233.292 377m272.655-235.62c-8.155-8.58-22.483-8.58-31.079 0L277.375 338.5l60.614 60.5 197.493-197.12c8.597-8.58 8.597-22.88 0-31.02z"})})},Gg=({width:e=667,fillColor:t="#868686"})=>{const r=e*667/667;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:[o.jsx("path",{fill:t,d:"M183.279 334.043a35.63 35.63 0 0 1 36.671 14.965 35.39 35.39 0 0 1-9.5 49.4 35.623 35.623 0 0 1-55.009-36.192 35.627 35.627 0 0 1 27.838-28.173M211.8 215.525a35.627 35.627 0 0 1 33.325 52.496 35.626 35.626 0 1 1-33.325-52.496M423.498 167.612a35.63 35.63 0 0 1 35.377 18.471 35.624 35.624 0 0 1-52.91 45.284 35.63 35.63 0 0 1-12.787-37.805 35.63 35.63 0 0 1 11.185-17.619 35.64 35.64 0 0 1 19.135-8.331M302.3 144.018a35.625 35.625 0 1 1 13.9 69.88 35.625 35.625 0 0 1-13.9-69.88"}),o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.134 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.599 1.167 17.366 0 79.3-71.434 142.767-150.7 132.167-23.1 41.1-67.1 67.833-115.967 67.833s-92.867-26.733-115.967-67.833c-79.433 10.6-150.699-52.867-150.699-132.167.008-5.808.397-11.609 1.166-17.366C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0m95.523 114.107a251.8 251.8 0 0 0-97.994-18.274 237.5 237.5 0 0 0-168.111 69.143 237.499 237.499 0 0 0 166.924 405.857 61.27 61.27 0 0 0 60.088-44.888 59.85 59.85 0 0 0-13.538-54.149 11.88 11.88 0 0 1 2.4-17.763 11.9 11.9 0 0 1 6.388-1.95H424.2a146.06 146.06 0 0 0 146.3-134.662 201.4 201.4 0 0 0-13.89-80.25 201.4 201.4 0 0 0-44.535-68.188 251.8 251.8 0 0 0-83.219-54.876"})]})},Wg=({width:e=667,fillColor:t="#E7B214"})=>{const r=e*667/667;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:[o.jsx("path",{fill:t,d:"M229 365c13.3 0 24 10.7 24 24 0 48.6 39.4 88 88 88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-75.1 0-136-60.9-136-136 0-13.3 10.7-24 24-24"}),o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.133 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.6 1.167 17.367 0 79.3-71.434 142.766-150.7 132.166-23.1 41.1-67.1 67.834-115.967 67.834s-92.867-26.734-115.967-67.834c-79.433 10.6-150.699-52.866-150.699-132.166.008-5.808.397-11.61 1.166-17.367C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0m-.533 61c-10 0-19.3 4.5-25.2 12.5C271.199 122.9 141 305.8 141 397c0 106 86 192 192 192s192-86 192-192c0-91.2-130.199-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5z"})]})},Xg=({width:e=667,fillColor:t="#29A2DA"})=>{const r=e*667/667;return o.jsxs("svg",{width:e,height:r,viewBox:"0 0 667 667",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M398.439 350.221L332.525 521.031L266.576 350.221H398.439Z",fill:t}),o.jsx("path",{d:"M217.057 350.221L276.097 503.15L130.473 350.221H217.057Z",fill:t}),o.jsx("path",{d:"M534.509 350.221L389 503.035L447.971 350.221H534.509Z",fill:t}),o.jsx("path",{d:"M215.531 304.019H115.222L172.574 198.608C173.45 196.982 174.749 195.621 176.333 194.67C177.917 193.719 179.728 193.212 181.575 193.202H242.371L215.531 304.019Z",fill:t}),o.jsx("path",{d:"M401.929 304.019H263.087L289.927 193.202H375.101L401.929 304.019Z",fill:t}),o.jsx("path",{d:"M483.418 193.202C487.092 193.202 490.558 195.224 492.406 198.608L549.76 304.019H449.484L422.645 193.202H483.418Z",fill:t}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.7332 449.3 67.833C528.566 57.0663 600 120.7 600 200C600 205.767 599.6 211.566 598.833 217.366C639.933 240.499 666.667 284.5 666.667 333.333C666.667 382.166 639.933 426.166 598.833 449.3C599.6 455.1 600 460.9 600 466.667C600 545.967 528.566 609.433 449.3 598.833C426.2 639.933 382.2 666.667 333.333 666.667C284.466 666.667 240.466 639.933 217.366 598.833C137.933 609.433 66.6672 545.967 66.667 466.667C66.6749 460.859 67.064 455.057 67.833 449.3C26.7332 426.166 0 382.166 0 333.333C0.000111393 284.5 26.7331 240.5 67.833 217.366C67.0664 211.566 66.667 205.767 66.667 200C66.667 120.7 137.933 57.0667 217.366 67.833C240.466 26.7331 284.466 0.000111302 333.333 0ZM181.575 147C171.415 147.01 161.446 149.758 152.717 154.956C143.988 160.154 136.822 167.608 131.975 176.535L67.9092 294.305C62.1661 304.874 59.9172 316.989 61.4863 328.914C63.0555 340.839 68.3617 351.961 76.6436 360.686L299.678 594.932C303.908 599.377 308.998 602.917 314.639 605.335C320.279 607.753 326.353 609 332.49 609C338.628 609 344.701 607.753 350.342 605.335C355.982 602.917 361.073 599.377 365.304 594.932L588.35 360.686C596.633 351.962 601.94 340.841 603.512 328.916C605.083 316.991 602.837 304.875 597.096 294.305L533.007 176.535C528.16 167.608 520.994 160.154 512.265 154.956C503.536 149.758 493.566 147.01 483.406 147H181.575Z",fill:t})]})},Zg=({width:e=667,fillColor:t="var(--AccentColor)"})=>{const r=e*667/667;return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 667 667",fill:"none",children:o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.134 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.599 1.167 17.366 0 79.3-71.434 142.767-150.7 132.167-23.1 41.1-67.1 67.833-115.967 67.833s-92.867-26.733-115.967-67.833c-79.433 10.6-150.699-52.867-150.699-132.167.008-5.808.397-11.609 1.166-17.366C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0M156.832 151.333v43.025H111V377.93h41.536v43.026h47.268v45.893h40.099v44.459h45.832v43.025h94.533v-43.025H426.1v-44.459h40.099v-45.894h47.265V377.93H555V194.358h-45.833v-43.025H370.239v44.46h-74.478v-44.46z"})})},Jg={creator_bronze:{key:"bronze",color:"#cd7f32",Component:Yg},creator_silver:{key:"silver",color:"#868686",Component:Gg},creator_gold:{key:"gold",color:"#e7b214",Component:Wg},creator_diamond:{key:"diamond",color:"#29a2da",Component:Xg},admin:{key:"admin",color:"var(--AccentColor)",Component:Zg}},Qg=Rt`
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(1.15) drop-shadow(0 0 2px #5bc4f5aa); }
`,Kg=b.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  cursor: pointer;
  flex-shrink: 0;
  animation: ${e=>e.$tier==="diamond"?Qg:"none"} 2.8s ease-in-out infinite;
`;function Is({badge:e,badgeProgress:t,isOwner:r=!1,size:n=20}){const{t:a}=Pt(),s=Jg[e];if(!s)return null;const{key:l,color:c,Component:d}=s;let f=a(l==="admin"?"BADGE_Admin":`BADGE_TIER_${l}`);if(l!=="admin"&&r&&t)if(t.nextTier){const p=a(`BADGE_TIER_${t.nextTier}`);f+=` — ${a("BADGE_Progress",{score:t.score,next:t.nextThreshold,tier:p})}`}else f+=` — ${a("BADGE_MaxTier")}`;return o.jsx(Vg,{text:f,delay:200,children:o.jsx(Kg,{$tier:l,$size:n,children:o.jsx(d,{width:n,fillColor:c})})})}const e8=Rt`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,t8=Rt`
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
`,r8=Rt`
    from { background-position: 100% 0; }
    to   { background-position: -100% 0; }
`,n8=b.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`,i8=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;

    @media (max-width: 768px) { width: 90%; padding-inline: 0; }
`,o8=b.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) { height: 44px; }
`,a8=b(o0)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`,s8=b.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`,l8=b.input`
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
`,c8=b.button`
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
`,u8=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px)  { grid-template-columns: 1fr; padding-inline: 5%; gap: 10px; }
`,d8=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`,h8=b(n1)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${e8} 0.8s linear infinite;
`,f8=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,p8=b.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    padding: 10px 20px;
`,m8=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
    padding-inline: 20px;
`,g8=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
`,x8=b.button`
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
`,Dh=b.div`
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
    animation: ${t8} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
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
            animation: ${r8} 0.8s ease-out forwards;
        }
    }
`,v8=b.div`
    width: 43px;
    height: 43px;
    border-radius: 50%;
    padding: 1px;
    border: 2px ${({$ringColor:e})=>e||"var(--borderColor, rgba(128,128,128,0.2))"} solid;
    flex-shrink: 0;
    transition: transform 0.3s ease;

    ${Dh}:hover & {
        transform: scale(1.08);
    }

    @media (max-width: 600px) { width: 40px; height: 40px; }
`,b8=b.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColor);
`,w8=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,y8=b.span`
    font-size: 1.05em;
    font-weight: 800;
    color: var(--textColor);
    opacity: 0.35;
    user-select: none;
`,_8=b.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    flex: 1;
`,C8=b.div`
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex-wrap: wrap;
`,S8=b.p`
    font-size: 0.9em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.01em;

    @media (max-width: 600px) { font-size: 0.82em; }
`,A8=b.p`
    font-size: 0.78em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    letter-spacing: 0.01em;

    @media (max-width: 600px) { font-size: 0.72em; }
`,k8=b.span`
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
`,M8=new Ua;function j8({user:e,index:t,showRank:r}){var l;const n=ln(),[a,s]=C.useState(null);return C.useEffect(()=>{if(!e.avatar)return;const c=new Image;c.crossOrigin="anonymous",c.referrerPolicy="no-referrer",c.onload=()=>{try{if(c.naturalWidth>0){const[d,f,p]=M8.getColor(c,10);s(`rgb(${d},${f},${p})`)}}catch{}},c.src=e.avatar},[e.avatar]),o.jsxs(Dh,{$i:t,$color:a,onClick:()=>{O3(e.username,e.rank),n(`/u/${e.username}`)},children:[o.jsx(v8,{$ringColor:a,children:o.jsx(b8,{children:e.avatar?o.jsx(w8,{src:e.avatar,alt:e.name,loading:"lazy",referrerPolicy:"no-referrer"}):o.jsx(y8,{children:(e.name||"?").charAt(0).toUpperCase()})})}),o.jsxs(_8,{children:[o.jsxs(C8,{children:[o.jsx(S8,{children:e.name}),e.badge&&o.jsx(Is,{badge:e.badge,size:20}),((l=e.permissions)==null?void 0:l.includes("admin"))&&o.jsx(Is,{badge:"admin",size:20})]}),o.jsxs(A8,{children:["@",e.username]})]}),r&&e.rank&&o.jsxs(k8,{$rank:e.rank,children:["#",e.rank]})]})}function N8(){const{t:e}=Pt(),[t,r]=C.useState([]),[n,a]=C.useState(""),[s,l]=C.useState(""),[c,d]=C.useState(1),[f,p]=C.useState(!1),[v,S]=C.useState(!0),[m,w]=C.useState(!1),[M,j]=C.useState(!0),[A,L]=C.useState(!1),E=C.useRef(null),D=C.useCallback(async(X,I,Z)=>{I===1?S(!0):w(!0),L(!1);try{const _=await rt.searchUsers({q:X,page:I,limit:8});r(P=>Z?[...P,..._.users]:_.users),d(I),p(_.hasMore),j(_.isRanking??!X)}catch(_){console.error("Profiles fetch error:",_),Z||r([]),L(!0)}finally{S(!1),w(!1)}},[]);C.useEffect(()=>{D("",1,!1)},[]);const q=X=>{const I=X.target.value;if(a(I),clearTimeout(E.current),!I.trim()){l(""),D("",1,!1);return}E.current=setTimeout(()=>{l(I.trim()),R3(I.trim()),D(I.trim(),1,!1)},400)},V=()=>{clearTimeout(E.current),a(""),l(""),D("",1,!1)},K=()=>{D(s,c+1,!0)};return o.jsxs(n8,{children:[o.jsx(ts,{text:e("PROFILES_Anchor"),type:1}),o.jsx(r1,{title:e("PROFILES_Title")}),o.jsx(i8,{children:o.jsxs(o8,{role:"search",children:[o.jsx(a8,{"aria-hidden":"true"}),o.jsx(s8,{}),o.jsx(l8,{type:"text",value:n,onChange:q,placeholder:e("PROFILES_SearchPlaceholder"),autoComplete:"off"}),n&&o.jsx(c8,{onClick:V,type:"button","aria-label":"Clear search",children:o.jsx(bh,{})})]})}),v?o.jsx(d8,{children:o.jsx(h8,{})}):A?o.jsxs(m8,{children:[o.jsx(l0,{width:"25%"}),o.jsx(g8,{children:e("PROFILES_FetchError")})]}):t.length===0?o.jsxs(f8,{children:[o.jsx(Qa,{width:"25%"}),o.jsx(p8,{children:e("PROFILES_NoResults")})]}):o.jsx(u8,{children:t.map((X,I)=>o.jsx(j8,{user:X,index:I,showRank:M},X._id||X.username))}),f&&!v&&o.jsx(x8,{onClick:K,disabled:m,children:e(m?"LoadingMore":"PROFILES_LoadMore")})]})}const B2=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Help improve the project!",pt:"Ajude a melhorar o projeto!",es:"¡Ayuda a mejorar el proyecto!",zh:"帮助改进项目！"},text:{en:"This project is open source and evolves with the community! Contribute with code, suggestions, or reporting bugs.",pt:"Esse projeto é open source e evolui com a comunidade! Contribua com código, sugestões ou reportando bugs.",es:"¡Este proyecto es open source y evoluciona con la comunidad! Contribuye con código, sugerencias o reportando errores.",zh:"这个项目是开源的，随着社区的发展而发展！贡献代码、建议或报告错误。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Contribute on Github",pt:"Contribua no Github",es:"Contribuye en Github",zh:"在 Github 上贡献"}}],I8=b.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,T8=b.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,L8=b.div`
    display: flex;
    align-items: center;
    position: relative;
`,P8=b.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,E8=b(jh)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,D8=b.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,R8=b.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,O8=b.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`,F8=b.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,z8=b.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,B8=b.a`
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
`;function U8(){var s,l,c;const{i18n:e}=Pt(),{t}=Pt(),r=((s=e.language)==null?void 0:s.split("-")[0])||"en",n=B2.filter(d=>d.key!=="contribute_area"),a=B2.find(d=>d.key==="contribute_area");return o.jsxs(I8,{id:"thanks",children:[o.jsx(ts,{text:t("Thanks"),type:1}),n.map((d,f)=>o.jsxs(T8,{children:[o.jsxs(L8,{children:[o.jsx(P8,{className:"circle"}),o.jsx(E8,{className:"heart"}),o.jsx(D8,{tabIndex:0,role:"button",onClick:()=>window.open(d.url,"_blank","noopener,noreferrer"),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&window.open(d.url,"_blank","noopener,noreferrer")},onMouseEnter:p=>{const v=p.target.parentNode;v.querySelector(".circle").style.opacity=0,v.querySelector(".heart").style.opacity=1},onMouseLeave:p=>{const v=p.target.parentNode;v.querySelector(".circle").style.opacity=.8,v.querySelector(".heart").style.opacity=0},children:d.title[r]||d.title.en})]}),o.jsx(R8,{children:d.text[r]||d.text.en})]},d.key)),a&&o.jsxs(O8,{children:[o.jsx(F8,{children:a.title[r]||a.title.en}),o.jsx(z8,{children:a.text[r]||a.text.en}),o.jsx(B8,{href:a.url,target:"_blank",rel:"noopener noreferrer",children:((l=a.button)==null?void 0:l[r])||((c=a.button)==null?void 0:c.en)||"Github"})]})]})}function H8(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-4.607 8.055A4.956 4.956 0 0 0 7 12H5a6.978 6.978 0 0 1 2.051-4.95 6.978 6.978 0 0 1 2.225-1.5l.779 1.842c-.596.252-1.13.612-1.59 1.072s-.82.995-1.072 1.591zm4.6 3.945a2.007 2.007 0 1 1 0-4.014 2.007 2.007 0 0 1 0 4.014z"},child:[]}]})(e)}function $8(e){return nt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"},child:[]}]})(e)}function q8(e){return nt({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"},child:[]}]})(e)}const V8=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Y8=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,G8=b.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Fo({title:e,value:t,onChange:r}){return o.jsxs(V8,{children:[o.jsx(Y8,{children:e}),o.jsx(G8,{placeholder:e,value:t,onChange:r})]})}const W8=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,X8=b.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,Z8=b.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function U2({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return o.jsxs(W8,{children:[o.jsx(X8,{placeholder:e,value:e,onChange:r}),o.jsx(Z8,{placeholder:e,value:t,onChange:n})]})}const J8=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Q8=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,K8=b.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,e7=b.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,t7=b.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function ms({title:e,value:t,onClick:r}){const n=C.useRef(null);return o.jsxs(J8,{"data-color-input":!0,children:[o.jsx(Q8,{children:e}),o.jsxs(K8,{ref:n,onClick:()=>{const a=n.current.getBoundingClientRect();r({top:a.bottom+1+window.scrollY,left:a.left+window.scrollX})},children:[o.jsx(e7,{style:{backgroundColor:t}}),o.jsx(t7,{children:t})]})]})}function o1(){return(o1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Rh(e,t){if(e==null)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(a[r]=e[r]);return a}function Dc(e){var t=C.useRef(e),r=C.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var Ts=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},bs=function(e){return"touches"in e},Rc=function(e){return e&&e.ownerDocument.defaultView||self},H2=function(e,t,r){var n=e.getBoundingClientRect(),a=bs(t)?function(s,l){for(var c=0;c<s.length;c++)if(s[c].identifier===l)return s[c];return s[0]}(t.touches,r):t;return{left:Ts((a.pageX-(n.left+Rc(e).pageXOffset))/n.width),top:Ts((a.pageY-(n.top+Rc(e).pageYOffset))/n.height)}},$2=function(e){!bs(e)&&e.preventDefault()},Oh=Zr.memo(function(e){var t=e.onMove,r=e.onKey,n=Rh(e,["onMove","onKey"]),a=C.useRef(null),s=Dc(t),l=Dc(r),c=C.useRef(null),d=C.useRef(!1),f=C.useMemo(function(){var m=function(j){$2(j),(bs(j)?j.touches.length>0:j.buttons>0)&&a.current?s(H2(a.current,j,c.current)):M(!1)},w=function(){return M(!1)};function M(j){var A=d.current,L=Rc(a.current),E=j?L.addEventListener:L.removeEventListener;E(A?"touchmove":"mousemove",m),E(A?"touchend":"mouseup",w)}return[function(j){var A=j.nativeEvent,L=a.current;if(L&&($2(A),!function(D,q){return q&&!bs(D)}(A,d.current)&&L)){if(bs(A)){d.current=!0;var E=A.changedTouches||[];E.length&&(c.current=E[0].identifier)}L.focus(),s(H2(L,A,c.current)),M(!0)}},function(j){var A=j.which||j.keyCode;A<37||A>40||(j.preventDefault(),l({left:A===39?.05:A===37?-.05:0,top:A===40?.05:A===38?-.05:0}))},M]},[l,s]),p=f[0],v=f[1],S=f[2];return C.useEffect(function(){return S},[S]),Zr.createElement("div",o1({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:a,onKeyDown:v,tabIndex:0,role:"slider"}))}),c0=function(e){return e.filter(Boolean).join(" ")},Fh=function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,s=c0(["react-colorful__pointer",e.className]);return Zr.createElement("div",{className:s,style:{top:100*a+"%",left:100*r+"%"}},Zr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},Br=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},r7=function(e){return s7(Oc(e))},Oc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Br(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Br(parseInt(e.substring(6,8),16)/255,2):1}},n7=function(e){return a7(o7(e))},i7=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:Br(e.h),s:Br(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:Br(a/2),a:Br(n,2)}},Fc=function(e){var t=i7(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},o7=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),l=n*(1-r),c=n*(1-(t-s)*r),d=n*(1-(1-t+s)*r),f=s%6;return{r:Br(255*[n,c,l,l,d,n][f]),g:Br(255*[d,n,n,c,l,l][f]),b:Br(255*[l,l,d,n,n,c][f]),a:Br(a,2)}},fl=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},a7=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,s=a<1?fl(Br(255*a)):"";return"#"+fl(t)+fl(r)+fl(n)+s},s7=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,s=Math.max(t,r,n),l=s-Math.min(t,r,n),c=l?s===t?(r-n)/l:s===r?2+(n-t)/l:4+(t-r)/l:0;return{h:Br(60*(c<0?c+6:c)),s:Br(s?l/s*100:0),v:Br(s/255*100),a}},l7=Zr.memo(function(e){var t=e.hue,r=e.onChange,n=c0(["react-colorful__hue",e.className]);return Zr.createElement("div",{className:n},Zr.createElement(Oh,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:Ts(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":Br(t),"aria-valuemax":"360","aria-valuemin":"0"},Zr.createElement(Fh,{className:"react-colorful__hue-pointer",left:t/360,color:Fc({h:t,s:100,v:100,a:1})})))}),c7=Zr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:Fc({h:t.h,s:100,v:100,a:1})};return Zr.createElement("div",{className:"react-colorful__saturation",style:n},Zr.createElement(Oh,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:Ts(t.s+100*a.left,0,100),v:Ts(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Br(t.s)+"%, Brightness "+Br(t.v)+"%"},Zr.createElement(Fh,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:Fc(t)})))}),zh=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},u7=function(e,t){return e.toLowerCase()===t.toLowerCase()||zh(Oc(e),Oc(t))};function d7(e,t,r){var n=Dc(r),a=C.useState(function(){return e.toHsva(t)}),s=a[0],l=a[1],c=C.useRef({color:t,hsva:s});C.useEffect(function(){if(!e.equal(t,c.current.color)){var f=e.toHsva(t);c.current={hsva:f,color:t},l(f)}},[t,e]),C.useEffect(function(){var f;zh(s,c.current.hsva)||e.equal(f=e.fromHsva(s),c.current.color)||(c.current={hsva:s,color:f},n(f))},[s,e,n]);var d=C.useCallback(function(f){l(function(p){return Object.assign({},p,f)})},[]);return[s,d]}var h7=typeof window<"u"?C.useLayoutEffect:C.useEffect,f7=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},q2=new Map,p7=function(e){h7(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!q2.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,q2.set(t,r);var n=f7();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},m7=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,s=e.onChange,l=Rh(e,["className","colorModel","color","onChange"]),c=C.useRef(null);p7(c);var d=d7(r,a,s),f=d[0],p=d[1],v=c0(["react-colorful",t]);return Zr.createElement("div",o1({},l,{ref:c,className:v}),Zr.createElement(c7,{hsva:f,onChange:p}),Zr.createElement(l7,{hue:f.h,onChange:p,className:"react-colorful__last-control"}))},g7={defaultColor:"000",toHsva:r7,fromHsva:function(e){return n7({h:e.h,s:e.s,v:e.v,a:1})},equal:u7},x7=function(e){return Zr.createElement(m7,o1({},e,{colorModel:g7}))};const v7=b.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,b7=b(x7)`
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
`,E1=b.div`
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
`,w7=b.div`
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
`,y7=b.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,_7=b.input`
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
`,C7=b(U4)`
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
`,S7=b(Y4)`
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
`,A7=b(a0)`
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
`,k7=b(i0)`
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
`,M7=b.img`
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
`;function j7({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:a,onClose:s}){const[l,c]=C.useState(e),[d,f]=C.useState(!1),[p,v]=C.useState(null),S=C.useRef(null),m=C.useRef(null);function w(){f(!d)}function M(E){c(E.target.value===""?"#":E.target.value)}function j(E){const D=S.current,V=m.current.getBoundingClientRect(),K=D.getContext("2d"),X=Math.floor(E.clientX-V.left),I=Math.floor(E.clientY-V.top),_=`#${[...K.getImageData(X,I,1,1).data].slice(0,3).map(P=>P.toString(16).padStart(2,"0")).join("")}`;c(_),w()}function A(E){const D=S.current,V=m.current.getBoundingClientRect(),K=Math.floor(E.clientX-V.left),X=Math.floor(E.clientY-V.top);if(D){const I=D.getContext("2d");try{const _=`#${[...I.getImageData(K,X,1,1).data].slice(0,3).map(P=>P.toString(16).padStart(2,"0")).join("")}`;v(_)}catch{v(null)}}}function L(){v(null)}return o.jsxs(v7,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[o.jsx("canvas",{ref:S,style:{display:"none"}}),d?o.jsx(M7,{ref:m,crossOrigin:"anonymous",draggable:"false",src:t,onClick:j,onMouseMove:A,onMouseLeave:L,onLoad:()=>{const E=S.current,D=E.getContext("2d"),q=m.current;E.width=q.width,E.height=q.height,D.drawImage(q,0,0,q.width,q.height)},style:p?{borderColor:p}:{}}):o.jsx(b7,{color:l,onChange:c}),o.jsx(E1,{children:r.map(E=>o.jsx(w7,{style:{backgroundColor:E},onClick:()=>c(E)},E))}),o.jsxs(E1,{children:[o.jsx(y7,{children:"Hex"}),o.jsx(_7,{value:l,onChange:M})]}),o.jsxs(E1,{children:[d?o.jsx(S7,{onClick:w}):o.jsx(C7,{onClick:w}),o.jsx(A7,{onClick:s}),o.jsx(k7,{onClick:()=>{a(l),j3(l)}})]})]})}const N7=b.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,I7=b.canvas`
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
`,pl=b.div`
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
`,ml=b.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,gl=b.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,xl=b.input`
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
`,vl=b.input`
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
`,T7=b.div`
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
`,L7=b(a0)`
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
`,P7=b(i0)`
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
`;function E7({position:e,albumCoverUrl:t,initialZoom:r=0,initialHorizontalPosition:n=0,initialVerticalPosition:a=0,initialBlur:s=0,onDone:l,onClose:c}){const{t:d}=Pt(),[f,p]=C.useState(r),[v,S]=C.useState(n),[m,w]=C.useState(a),[M,j]=C.useState(s),A=C.useRef(null),L=C.useRef(null),E=C.useRef(!1),D=C.useRef({x:0,y:0});C.useEffect(()=>{if(t){const I=new Image;I.crossOrigin="anonymous",I.src=t,I.onload=()=>{L.current=I,X()}}},[t]),C.useEffect(()=>{X()},[f,v,m,M]);const q=I=>{const Z=A.current;if(!Z)return;const _=Z.getBoundingClientRect(),P=I.clientX-_.left,F=I.clientY-_.top,$=Z.width,re=Z.height,se=Math.min($,re),fe=1+f/100,ne=se*fe,ge=$/2,Me=re/2,we=$/2*(v/50),k=re/2*(m/50),H=ge-ne/2+we,J=Me-ne/2+k;P>=H&&P<=H+ne&&F>=J&&F<=J+ne&&(E.current=!0,D.current={x:P,y:F},Z.style.cursor="grabbing")},V=I=>{if(!E.current)return;const Z=A.current;if(!Z)return;const _=Z.getBoundingClientRect(),P=I.clientX-_.left,F=I.clientY-_.top,$=P-D.current.x,re=F-D.current.y;D.current={x:P,y:F};const se=Z.width,fe=Z.height,ne=v+$/(se/2)*50,ge=m+re/(fe/2)*50;S(Math.max(-50,Math.min(50,ne))),w(Math.max(-50,Math.min(50,ge)))},K=()=>{E.current=!1;const I=A.current;I&&(I.style.cursor="grab")};C.useEffect(()=>{const I=A.current;if(I)return I.addEventListener("mousedown",q),window.addEventListener("mousemove",V),window.addEventListener("mouseup",K),()=>{I.removeEventListener("mousedown",q),window.removeEventListener("mousemove",V),window.removeEventListener("mouseup",K)}},[f,v,m,M]);const X=()=>{const I=A.current;if(!I)return;const Z=I.getContext("2d"),_=I.width,P=I.height;Z.clearRect(0,0,_,P);const F=Math.min(_,P),$=1+f/100,re=F*$,se=_/2,fe=P/2,ne=_/2*(v/50),ge=P/2*(m/50),Me=se-re/2+ne,we=fe-re/2+ge;L.current&&(Z.filter=`blur(${M/5}px)`,Z.drawImage(L.current,Me,we,re,re),Z.filter="none")};return o.jsxs(N7,{style:{position:"absolute",top:e.top,left:e.left,zIndex:2147483647},children:[o.jsx(I7,{ref:A,width:200,height:200}),o.jsxs(pl,{children:[o.jsxs(ml,{children:[o.jsx(gl,{children:d("COVER_EDITOR_Size")}),o.jsx(xl,{type:"number",value:f,onChange:I=>p(parseInt(I.target.value)||0)})]}),o.jsx(vl,{type:"range",min:"-100",max:"100",step:"1",value:f,onChange:I=>p(Number(I.target.value))})]}),o.jsxs(pl,{children:[o.jsxs(ml,{children:[o.jsx(gl,{children:d("COVER_EDITOR_Blur")}),o.jsx(xl,{type:"number",value:M,onChange:I=>j(parseInt(I.target.value)||0)})]}),o.jsx(vl,{type:"range",min:"0",max:"20",step:"1",value:M,onChange:I=>j(Number(I.target.value))})]}),o.jsxs(pl,{children:[o.jsxs(ml,{children:[o.jsx(gl,{children:d("COVER_EDITOR_HorizontalPosition")}),o.jsx(xl,{type:"number",value:v,onChange:I=>S(parseInt(I.target.value)||0)})]}),o.jsx(vl,{type:"range",min:"-50",max:"50",step:"1",value:v,onChange:I=>S(Number(I.target.value))})]}),o.jsxs(pl,{children:[o.jsxs(ml,{children:[o.jsx(gl,{children:d("COVER_EDITOR_VerticalPosition")}),o.jsx(xl,{type:"number",value:m,onChange:I=>w(parseInt(I.target.value)||0)})]}),o.jsx(vl,{type:"range",min:"-50",max:"50",step:"1",value:m,onChange:I=>w(Number(I.target.value))})]}),o.jsxs(T7,{children:[o.jsx(L7,{onClick:c}),o.jsx(P7,{onClick:()=>l({zoom:f,horizontalPosition:v,verticalPosition:m,blur:M})})]})]})}const D7=b.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,D1=b.div`
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
    
    &:nth-of-type(1) { animation-delay: 0.1s; }
    &:nth-of-type(2) { animation-delay: 0.2s; }
    &:nth-of-type(3) { animation-delay: 0.3s; }
`,R1=b.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,O1=b.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,F1=b.input`
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
`,z1=b.input`
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
`,R7=b.div`
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
`,O7=b(a0)`
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
`,F7=b(i0)`
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
`,z7=b(o6)`
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
        color: #ff4444;
        background-color: rgba(255, 68, 68, 0.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`,B7=b.div`
    padding: 10px;
    background-color: rgba(255, 68, 68, 0.1);
    border: 1px solid #ff4444;
    border-radius: 5px;
    color: #ff4444;
    font-size: 0.85em;
    text-align: center;
`;function U7({position:e,signatureUrl:t,initialHorizontalPosition:r,initialVerticalPosition:n,initialScale:a,onDone:s,onClose:l}){const{t:c}=Pt(),[d,f]=C.useState(r||0),[p,v]=C.useState(n||0),[S,m]=C.useState(a||1),w=()=>{s({horizontalPosition:d,verticalPosition:p,scale:S})},M=()=>{s({disabled:!0})};return o.jsx(D7,{style:{position:"absolute",top:e==null?void 0:e.top,left:e==null?void 0:e.left,zIndex:1e3},children:t?o.jsxs(o.Fragment,{children:[o.jsxs(D1,{children:[o.jsxs(R1,{children:[o.jsx(O1,{children:c("EDITOR_HorizontalPosition")}),o.jsx(F1,{type:"number",value:d,onChange:j=>f(parseInt(j.target.value)||0)})]}),o.jsx(z1,{type:"range",min:"-100",max:"100",step:"1",value:d,onChange:j=>f(Number(j.target.value))})]}),o.jsxs(D1,{children:[o.jsxs(R1,{children:[o.jsx(O1,{children:c("EDITOR_VerticalPosition")}),o.jsx(F1,{type:"number",value:p,onChange:j=>v(parseInt(j.target.value)||0)})]}),o.jsx(z1,{type:"range",min:"-100",max:"100",step:"1",value:p,onChange:j=>v(Number(j.target.value))})]}),o.jsxs(D1,{children:[o.jsxs(R1,{children:[o.jsx(O1,{children:c("EDITOR_Scale")}),o.jsx(F1,{type:"number",min:"0.1",max:"3",step:"0.1",value:parseFloat(S).toFixed(1),onChange:j=>m(Number(j.target.value))})]}),o.jsx(z1,{type:"range",min:"0.1",max:"3",step:"0.1",value:S,onChange:j=>m(Number(j.target.value))})]}),o.jsxs(R7,{children:[o.jsx(O7,{onClick:l}),o.jsx(z7,{onClick:M}),o.jsx(F7,{onClick:w})]})]}):o.jsx(B7,{children:c("EDITOR_SignatureNotFound")})})}const H7=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,$7=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,q7=b.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,V7=b.input`
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
`,Y7=b.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function bl({title:e,text:t,value:r,onChange:n}){const a=()=>n(!r);return o.jsxs(H7,{children:[o.jsx($7,{children:e}),o.jsxs(q7,{onClick:a,children:[o.jsx(V7,{checked:r,readOnly:!0,type:"checkbox"}),o.jsx(Y7,{active:r,children:t})]})]})}b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`;b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`;b.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`;b.input`
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
`;b.p`
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
`;const G7=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,W7=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,X7=b.div`
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
`,Z7=b.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,J7=b.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function V2({title:e,text:t,onClick:r,icon:n}){const a=C.useRef(null);return o.jsxs(G7,{children:[o.jsx(W7,{children:e}),o.jsxs(X7,{ref:a,onClick:()=>{const s=a.current.getBoundingClientRect();r({top:s.bottom+1+window.scrollY,left:s.left+window.scrollX})},children:[n&&o.jsx(Z7,{children:o.jsx(n,{})}),o.jsx(J7,{children:t})]})]})}function Q7(e){return nt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},child:[]}]})(e)}const K7=b.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,ex=b.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,tx=b.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,rx=b(n1)`
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
`;function Bh(){const{t:e}=Pt();return o.jsxs(K7,{children:[o.jsx(rx,{}),o.jsx(ex,{children:e("Loading")}),o.jsx(tx,{children:e("LoadingText")})]})}var Uh={},a1={},Hh={exports:{}},nx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ix=nx,ox=ix;function $h(){}function qh(){}qh.resetWarningCache=$h;var ax=function(){function e(n,a,s,l,c,d){if(d!==ox){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qh,resetWarningCache:$h};return r.PropTypes=r,r};Hh.exports=ax();var Vh=Hh.exports,u0={},s1={},Yh={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(E5,function(){var r=function(d,f){return d<f?-1:d>f?1:0},n=function(d){return d.reduce(function(f,p){return f+p},0)},a=function(){function d(p){this.colors=p}var f=d.prototype;return f.palette=function(){return this.colors},f.map=function(p){return p},d}(),s=function(){function d(m,w,M){return(m<<10)+(w<<5)+M}function f(m){var w=[],M=!1;function j(){w.sort(m),M=!0}return{push:function(A){w.push(A),M=!1},peek:function(A){return M||j(),A===void 0&&(A=w.length-1),w[A]},pop:function(){return M||j(),w.pop()},size:function(){return w.length},map:function(A){return w.map(A)},debug:function(){return M||j(),w}}}function p(m,w,M,j,A,L,E){var D=this;D.r1=m,D.r2=w,D.g1=M,D.g2=j,D.b1=A,D.b2=L,D.histo=E}function v(){this.vboxes=new f(function(m,w){return r(m.vbox.count()*m.vbox.volume(),w.vbox.count()*w.vbox.volume())})}function S(m,w){if(w.count()){var M=w.r2-w.r1+1,j=w.g2-w.g1+1,A=Math.max.apply(null,[M,j,w.b2-w.b1+1]);if(w.count()==1)return[w.copy()];var L,E,D,q,V=0,K=[],X=[];if(A==M)for(L=w.r1;L<=w.r2;L++){for(q=0,E=w.g1;E<=w.g2;E++)for(D=w.b1;D<=w.b2;D++)q+=m[d(L,E,D)]||0;K[L]=V+=q}else if(A==j)for(L=w.g1;L<=w.g2;L++){for(q=0,E=w.r1;E<=w.r2;E++)for(D=w.b1;D<=w.b2;D++)q+=m[d(E,L,D)]||0;K[L]=V+=q}else for(L=w.b1;L<=w.b2;L++){for(q=0,E=w.r1;E<=w.r2;E++)for(D=w.g1;D<=w.g2;D++)q+=m[d(E,D,L)]||0;K[L]=V+=q}return K.forEach(function(I,Z){X[Z]=V-I}),function(I){var Z,_,P,F,$,re=I+"1",se=I+"2",fe=0;for(L=w[re];L<=w[se];L++)if(K[L]>V/2){for(P=w.copy(),F=w.copy(),$=(Z=L-w[re])<=(_=w[se]-L)?Math.min(w[se]-1,~~(L+_/2)):Math.max(w[re],~~(L-1-Z/2));!K[$];)$++;for(fe=X[$];!fe&&K[$-1];)fe=X[--$];return P[se]=$,F[re]=P[se]+1,[P,F]}}(A==M?"r":A==j?"g":"b")}}return p.prototype={volume:function(m){var w=this;return w._volume&&!m||(w._volume=(w.r2-w.r1+1)*(w.g2-w.g1+1)*(w.b2-w.b1+1)),w._volume},count:function(m){var w=this,M=w.histo;if(!w._count_set||m){var j,A,L,E=0;for(j=w.r1;j<=w.r2;j++)for(A=w.g1;A<=w.g2;A++)for(L=w.b1;L<=w.b2;L++)E+=M[d(j,A,L)]||0;w._count=E,w._count_set=!0}return w._count},copy:function(){var m=this;return new p(m.r1,m.r2,m.g1,m.g2,m.b1,m.b2,m.histo)},avg:function(m){var w=this,M=w.histo;if(!w._avg||m){var j,A,L,E,D=0,q=0,V=0,K=0;if(w.r1===w.r2&&w.g1===w.g2&&w.b1===w.b2)w._avg=[w.r1<<3,w.g1<<3,w.b1<<3];else{for(A=w.r1;A<=w.r2;A++)for(L=w.g1;L<=w.g2;L++)for(E=w.b1;E<=w.b2;E++)D+=j=M[d(A,L,E)]||0,q+=j*(A+.5)*8,V+=j*(L+.5)*8,K+=j*(E+.5)*8;w._avg=D?[~~(q/D),~~(V/D),~~(K/D)]:[~~(8*(w.r1+w.r2+1)/2),~~(8*(w.g1+w.g2+1)/2),~~(8*(w.b1+w.b2+1)/2)]}}return w._avg},contains:function(m){var w=this,M=m[0]>>3;return gval=m[1]>>3,bval=m[2]>>3,M>=w.r1&&M<=w.r2&&gval>=w.g1&&gval<=w.g2&&bval>=w.b1&&bval<=w.b2}},v.prototype={push:function(m){this.vboxes.push({vbox:m,color:m.avg()})},palette:function(){return this.vboxes.map(function(m){return m.color})},size:function(){return this.vboxes.size()},map:function(m){for(var w=this.vboxes,M=0;M<w.size();M++)if(w.peek(M).vbox.contains(m))return w.peek(M).color;return this.nearest(m)},nearest:function(m){for(var w,M,j,A=this.vboxes,L=0;L<A.size();L++)((M=Math.sqrt(Math.pow(m[0]-A.peek(L).color[0],2)+Math.pow(m[1]-A.peek(L).color[1],2)+Math.pow(m[2]-A.peek(L).color[2],2)))<w||w===void 0)&&(w=M,j=A.peek(L).color);return j},forcebw:function(){var m=this.vboxes;m.sort(function(A,L){return r(n(A.color),n(L.color))});var w=m[0].color;w[0]<5&&w[1]<5&&w[2]<5&&(m[0].color=[0,0,0]);var M=m.length-1,j=m[M].color;j[0]>251&&j[1]>251&&j[2]>251&&(m[M].color=[255,255,255])}},{quantize:function(m,w){if(!Number.isInteger(w)||w<1||w>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!m.length||w<2||w>256||!m.length||w<2||w>256)return!1;for(var M=[],j=new Set,A=0;A<m.length;A++){var L=m[A],E=L.join(",");j.has(E)||(j.add(E),M.push(L))}if(M.length<=w)return new a(M);var D=function(Z){var _,P=new Array(32768);return Z.forEach(function(F){_=d(F[0]>>3,F[1]>>3,F[2]>>3),P[_]=(P[_]||0)+1}),P}(m);D.forEach(function(){});var q=function(Z,_){var P,F,$,re=1e6,se=0,fe=1e6,ne=0,ge=1e6,Me=0;return Z.forEach(function(we){(P=we[0]>>3)<re?re=P:P>se&&(se=P),(F=we[1]>>3)<fe?fe=F:F>ne&&(ne=F),($=we[2]>>3)<ge?ge=$:$>Me&&(Me=$)}),new p(re,se,fe,ne,ge,Me,_)}(m,D),V=new f(function(Z,_){return r(Z.count(),_.count())});function K(Z,_){for(var P,F=Z.size(),$=0;$<1e3;){if(F>=_||$++>1e3)return;if((P=Z.pop()).count()){var re=S(D,P),se=re[0],fe=re[1];if(!se)return;Z.push(se),fe&&(Z.push(fe),F++)}else Z.push(P),$++}}V.push(q),K(V,.75*w);for(var X=new f(function(Z,_){return r(Z.count()*Z.volume(),_.count()*_.volume())});V.size();)X.push(V.pop());K(X,w);for(var I=new v;X.size();)I.push(X.pop());return I}}}().quantize,l=function(d){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=d.naturalWidth,this.height=this.canvas.height=d.naturalHeight,this.context.drawImage(d,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var c=function(){};return c.prototype.getColor=function(d,f){return f===void 0&&(f=10),this.getPalette(d,5,f)[0]},c.prototype.getPalette=function(d,f,p){var v=function(M){var j=M.colorCount,A=M.quality;if(j!==void 0&&Number.isInteger(j)){if(j===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");j=Math.max(j,2),j=Math.min(j,20)}else j=10;return(A===void 0||!Number.isInteger(A)||A<1)&&(A=10),{colorCount:j,quality:A}}({colorCount:f,quality:p}),S=new l(d),m=function(M,j,A){for(var L,E,D,q,V,K=M,X=[],I=0;I<j;I+=A)E=K[0+(L=4*I)],D=K[L+1],q=K[L+2],((V=K[L+3])===void 0||V>=125)&&(E>250&&D>250&&q>250||X.push([E,D,q]));return X}(S.getImageData().data,S.width*S.height,v.quality),w=s(m,v.colorCount);return w?w.palette():null},c.prototype.getColorFromUrl=function(d,f,p){var v=this,S=document.createElement("img");S.addEventListener("load",function(){var m=v.getPalette(S,5,p);f(m[0],d)}),S.src=d},c.prototype.getImageData=function(d,f){var p=new XMLHttpRequest;p.open("GET",d,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var v=new Uint8Array(this.response);i=v.length;for(var S=new Array(i),m=0;m<v.length;m++)S[m]=String.fromCharCode(v[m]);var w=S.join(""),M=window.btoa(w);f("data:image/png;base64,"+M)}},p.send()},c.prototype.getColorAsync=function(d,f,p){var v=this;this.getImageData(d,function(S){var m=document.createElement("img");m.addEventListener("load",function(){var w=v.getPalette(m,5,p);f(w[0],this)}),m.src=S})},c})})(Yh);var Gh=Yh.exports,l1={},d0={};Object.defineProperty(d0,"__esModule",{value:!0});d0.default=sx;function sx(e,t,r){return`rgb(${e}, ${t}, ${r})`}var h0={};Object.defineProperty(h0,"__esModule",{value:!0});h0.default=lx;function lx(e,t,r){return`#${[e,t,r].map(n=>{const a=n.toString(16);return a.length===1?`0${a}`:a}).join("")}`}Object.defineProperty(l1,"__esModule",{value:!0});l1.default=dx;var cx=Wh(d0),ux=Wh(h0);function Wh(e){return e&&e.__esModule?e:{default:e}}function dx(e,t){switch(t){case"rgbString":return(0,cx.default)(e[0],e[1],e[2]);case"hex":return(0,ux.default)(e[0],e[1],e[2]);default:return e}}var c1={};Object.defineProperty(c1,"__esModule",{value:!0});c1.default=hx;function hx(e,t=void 0){return new Promise((r,n)=>{const a=new Image;a.addEventListener("load",()=>{r(a)}),a.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),a.crossOrigin=t,a.src=e})}Object.defineProperty(s1,"__esModule",{value:!0});s1.default=gx;var fx=f0(Gh),px=f0(l1),mx=f0(c1);function f0(e){return e&&e.__esModule?e:{default:e}}async function gx(e,t="rgbString",r=null,n=10){const a=await(0,mx.default)(e,r),l=new fx.default().getColor(a,n);return(0,px.default)(l,t)}Object.defineProperty(u0,"__esModule",{value:!0});u0.default=wx;var Y2=C,xx=vx(s1);function vx(e){return e&&e.__esModule?e:{default:e}}const Xh={loading:!0,data:null,error:void 0};function bx(e,t){switch(t.type){case"getColor":return Xh;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function wx(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:a=10}=r,[s,l]=(0,Y2.useReducer)(bx,Xh);return(0,Y2.useEffect)(()=>{l({type:"getColor"}),(0,xx.default)(e,t,n,a).then(c=>{l({type:"resolveColor",payload:c})}).catch(c=>{l({type:"rejectColor",payload:c})})},[e]),s}Object.defineProperty(a1,"__esModule",{value:!0});a1.default=void 0;var G2=p0(C),gs=p0(Vh),yx=p0(u0);function p0(e){return e&&e.__esModule?e:{default:e}}const m0=({src:e,format:t,crossOrigin:r,quality:n,children:a})=>{const s=(0,yx.default)(e,t,{crossOrigin:r,quality:n});return G2.default.createElement(G2.default.Fragment,null,a(s))};m0.defaultProps={format:"rgbString",crossOrigin:null,quality:10};m0.propTypes={children:gs.default.any.isRequired,src:gs.default.string.isRequired,format:gs.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:gs.default.string,quality:gs.default.number};var _x=m0;a1.default=_x;var u1={},g0={},d1={};Object.defineProperty(d1,"__esModule",{value:!0});d1.default=kx;var Cx=x0(Gh),Sx=x0(l1),Ax=x0(c1);function x0(e){return e&&e.__esModule?e:{default:e}}async function kx(e,t=2,r="rgbString",n=null,a=10){const s=await(0,Ax.default)(e,n);return new Cx.default().getPalette(s,t,a).map(d=>(0,Sx.default)(d,r))}Object.defineProperty(g0,"__esModule",{value:!0});g0.default=Ix;var W2=C,Mx=jx(d1);function jx(e){return e&&e.__esModule?e:{default:e}}const Zh={loading:!0,data:[],error:void 0};function Nx(e,t){switch(t.type){case"getPalette":return Zh;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function Ix(e,t=2,r="rgbString",n={}){const{crossOrigin:a=null,quality:s=10}=n,[l,c]=(0,W2.useReducer)(Nx,Zh);return(0,W2.useEffect)(()=>{c({type:"getPalette"}),(0,Mx.default)(e,t,r,a,s).then(d=>{c({type:"resolvePalette",payload:d})}).catch(d=>{c({type:"rejectPalette",payload:d})})},[e]),l}Object.defineProperty(u1,"__esModule",{value:!0});u1.default=void 0;var X2=v0(C),Ea=v0(Vh),Tx=v0(g0);function v0(e){return e&&e.__esModule?e:{default:e}}const b0=({src:e,colorCount:t,format:r,crossOrigin:n,quality:a,children:s})=>{const l=(0,Tx.default)(e,t,r,{crossOrigin:n,quality:a});return X2.default.createElement(X2.default.Fragment,null,s(l))};b0.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};b0.propTypes={children:Ea.default.any.isRequired,src:Ea.default.string.isRequired,format:Ea.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:Ea.default.number,crossOrigin:Ea.default.string,quality:Ea.default.number};var Lx=b0;u1.default=Lx;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return a.default}}),e.default=void 0;var t=s(a1),r=s(u1),n=s(s1),a=s(d1);function s(c){return c&&c.__esModule?c:{default:c}}var l=t.default;e.default=l})(Uh);const Px=b.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function mr({children:e,animationDelay:t=0,...r}){const[n,a]=C.useState(!1);return C.useEffect(()=>{const s=setTimeout(()=>{a(!0)},t);return()=>clearTimeout(s)},[t]),o.jsx(Px,{visible:n,animationDelay:t,...r,children:e})}const Ex="modulepreload",Dx=function(e){return"/"+e},Z2={},B1=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.allSettled(r.map(d=>{if(d=Dx(d),d in Z2)return;Z2[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":Ex,f||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),f)return new Promise((S,m)=>{v.addEventListener("load",S),v.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};function qt(e){"@babel/helpers - typeof";return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qt(e)}var fi=Uint8Array,Dn=Uint16Array,w0=Int32Array,y0=new fi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_0=new fi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),J2=new fi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jh=function(e,t){for(var r=new Dn(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var a=new w0(r[30]),n=1;n<30;++n)for(var s=r[n];s<r[n+1];++s)a[s]=s-r[n]<<5|n;return{b:r,r:a}},Qh=Jh(y0,2),Rx=Qh.b,zc=Qh.r;Rx[28]=258,zc[258]=28;var Ox=Jh(_0,0),Q2=Ox.r,Bc=new Dn(32768);for(var tr=0;tr<32768;++tr){var zo=(tr&43690)>>1|(tr&21845)<<1;zo=(zo&52428)>>2|(zo&13107)<<2,zo=(zo&61680)>>4|(zo&3855)<<4,Bc[tr]=((zo&65280)>>8|(zo&255)<<8)>>1}var ws=function(e,t,r){for(var n=e.length,a=0,s=new Dn(t);a<n;++a)e[a]&&++s[e[a]-1];var l=new Dn(t);for(a=1;a<t;++a)l[a]=l[a-1]+s[a-1]<<1;var c;if(r){c=new Dn(1<<t);var d=15-t;for(a=0;a<n;++a)if(e[a])for(var f=a<<4|e[a],p=t-e[a],v=l[e[a]-1]++<<p,S=v|(1<<p)-1;v<=S;++v)c[Bc[v]>>d]=f}else for(c=new Dn(n),a=0;a<n;++a)e[a]&&(c[a]=Bc[l[e[a]-1]++]>>15-e[a]);return c},ha=new fi(288);for(var tr=0;tr<144;++tr)ha[tr]=8;for(var tr=144;tr<256;++tr)ha[tr]=9;for(var tr=256;tr<280;++tr)ha[tr]=7;for(var tr=280;tr<288;++tr)ha[tr]=8;var Wl=new fi(32);for(var tr=0;tr<32;++tr)Wl[tr]=5;var Fx=ws(ha,9,0),zx=ws(Wl,5,0),Kh=function(e){return(e+7)/8|0},Bx=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new fi(e.subarray(t,r))},co=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},xs=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},U1=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var a=r.length,s=r.slice();if(!a)return{t:tf,l:0};if(a==1){var l=new fi(r[0].s+1);return l[r[0].s]=1,{t:l,l:1}}r.sort(function(q,V){return q.f-V.f}),r.push({s:-1,f:25001});var c=r[0],d=r[1],f=0,p=1,v=2;for(r[0]={s:-1,f:c.f+d.f,l:c,r:d};p!=a-1;)c=r[r[f].f<r[v].f?f++:v++],d=r[f!=p&&r[f].f<r[v].f?f++:v++],r[p++]={s:-1,f:c.f+d.f,l:c,r:d};for(var S=s[0].s,n=1;n<a;++n)s[n].s>S&&(S=s[n].s);var m=new Dn(S+1),w=Uc(r[p-1],m,0);if(w>t){var n=0,M=0,j=w-t,A=1<<j;for(s.sort(function(V,K){return m[K.s]-m[V.s]||V.f-K.f});n<a;++n){var L=s[n].s;if(m[L]>t)M+=A-(1<<w-m[L]),m[L]=t;else break}for(M>>=j;M>0;){var E=s[n].s;m[E]<t?M-=1<<t-m[E]++-1:++n}for(;n>=0&&M;--n){var D=s[n].s;m[D]==t&&(--m[D],++M)}w=t}return{t:new fi(m),l:w}},Uc=function(e,t,r){return e.s==-1?Math.max(Uc(e.l,t,r+1),Uc(e.r,t,r+1)):t[e.s]=r},K2=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new Dn(++t),n=0,a=e[0],s=1,l=function(d){r[n++]=d},c=1;c<=t;++c)if(e[c]==a&&c!=t)++s;else{if(!a&&s>2){for(;s>138;s-=138)l(32754);s>2&&(l(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(l(a),--s;s>6;s-=6)l(8304);s>2&&(l(s-3<<5|8208),s=0)}for(;s--;)l(a);s=1,a=e[c]}return{c:r.subarray(0,n),n:t}},vs=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},ef=function(e,t,r){var n=r.length,a=Kh(t+2);e[a]=n&255,e[a+1]=n>>8,e[a+2]=e[a]^255,e[a+3]=e[a+1]^255;for(var s=0;s<n;++s)e[a+s+4]=r[s];return(a+4+n)*8},eu=function(e,t,r,n,a,s,l,c,d,f,p){co(t,p++,r),++a[256];for(var v=U1(a,15),S=v.t,m=v.l,w=U1(s,15),M=w.t,j=w.l,A=K2(S),L=A.c,E=A.n,D=K2(M),q=D.c,V=D.n,K=new Dn(19),X=0;X<L.length;++X)++K[L[X]&31];for(var X=0;X<q.length;++X)++K[q[X]&31];for(var I=U1(K,7),Z=I.t,_=I.l,P=19;P>4&&!Z[J2[P-1]];--P);var F=f+5<<3,$=vs(a,ha)+vs(s,Wl)+l,re=vs(a,S)+vs(s,M)+l+14+3*P+vs(K,Z)+2*K[16]+3*K[17]+7*K[18];if(d>=0&&F<=$&&F<=re)return ef(t,p,e.subarray(d,d+f));var se,fe,ne,ge;if(co(t,p,1+(re<$)),p+=2,re<$){se=ws(S,m,0),fe=S,ne=ws(M,j,0),ge=M;var Me=ws(Z,_,0);co(t,p,E-257),co(t,p+5,V-1),co(t,p+10,P-4),p+=14;for(var X=0;X<P;++X)co(t,p+3*X,Z[J2[X]]);p+=3*P;for(var we=[L,q],k=0;k<2;++k)for(var H=we[k],X=0;X<H.length;++X){var J=H[X]&31;co(t,p,Me[J]),p+=Z[J],J>15&&(co(t,p,H[X]>>5&127),p+=H[X]>>12)}}else se=Fx,fe=ha,ne=zx,ge=Wl;for(var X=0;X<c;++X){var te=n[X];if(te>255){var J=te>>18&31;xs(t,p,se[J+257]),p+=fe[J+257],J>7&&(co(t,p,te>>23&31),p+=y0[J]);var oe=te&31;xs(t,p,ne[oe]),p+=ge[oe],oe>3&&(xs(t,p,te>>5&8191),p+=_0[oe])}else xs(t,p,se[te]),p+=fe[te]}return xs(t,p,se[256]),p+fe[256]},Ux=new w0([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),tf=new fi(0),Hx=function(e,t,r,n,a,s){var l=s.z||e.length,c=new fi(n+l+5*(1+Math.ceil(l/7e3))+a),d=c.subarray(n,c.length-a),f=s.l,p=(s.r||0)&7;if(t){p&&(d[0]=s.r>>3);for(var v=Ux[t-1],S=v>>13,m=v&8191,w=(1<<r)-1,M=s.p||new Dn(32768),j=s.h||new Dn(w+1),A=Math.ceil(r/3),L=2*A,E=function(de){return(e[de]^e[de+1]<<A^e[de+2]<<L)&w},D=new w0(25e3),q=new Dn(288),V=new Dn(32),K=0,X=0,I=s.i||0,Z=0,_=s.w||0,P=0;I+2<l;++I){var F=E(I),$=I&32767,re=j[F];if(M[$]=re,j[F]=$,_<=I){var se=l-I;if((K>7e3||Z>24576)&&(se>423||!f)){p=eu(e,d,0,D,q,V,X,Z,P,I-P,p),Z=K=X=0,P=I;for(var fe=0;fe<286;++fe)q[fe]=0;for(var fe=0;fe<30;++fe)V[fe]=0}var ne=2,ge=0,Me=m,we=$-re&32767;if(se>2&&F==E(I-we))for(var k=Math.min(S,se)-1,H=Math.min(32767,I),J=Math.min(258,se);we<=H&&--Me&&$!=re;){if(e[I+ne]==e[I+ne-we]){for(var te=0;te<J&&e[I+te]==e[I+te-we];++te);if(te>ne){if(ne=te,ge=we,te>k)break;for(var oe=Math.min(we,te-2),le=0,fe=0;fe<oe;++fe){var pe=I-we+fe&32767,ve=M[pe],ue=pe-ve&32767;ue>le&&(le=ue,re=pe)}}}$=re,re=M[$],we+=$-re&32767}if(ge){D[Z++]=268435456|zc[ne]<<18|Q2[ge];var ke=zc[ne]&31,Te=Q2[ge]&31;X+=y0[ke]+_0[Te],++q[257+ke],++V[Te],_=I+ne,++K}else D[Z++]=e[I],++q[e[I]]}}for(I=Math.max(I,_);I<l;++I)D[Z++]=e[I],++q[e[I]];p=eu(e,d,f,D,q,V,X,Z,P,I-P,p),f||(s.r=p&7|d[p/8|0]<<3,p-=7,s.h=j,s.p=M,s.i=I,s.w=_)}else{for(var I=s.w||0;I<l+f;I+=65535){var Re=I+65535;Re>=l&&(d[p/8|0]=f,Re=l),p=ef(d,p+1,e.subarray(I,Re))}s.i=l}return Bx(c,0,n+Kh(p)+a)},rf=function(){var e=1,t=0;return{p:function(r){for(var n=e,a=t,s=r.length|0,l=0;l!=s;){for(var c=Math.min(l+2655,s);l<c;++l)a+=n+=r[l];n=(n&65535)+15*(n>>16),a=(a&65535)+15*(a>>16)}e=n,t=a},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},$x=function(e,t,r,n,a){if(!a&&(a={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),l=new fi(s.length+e.length);l.set(s),l.set(e,s.length),e=l,a.w=s.length}return Hx(e,t.level==null?6:t.level,t.mem==null?a.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,a)},nf=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},qx=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var a=rf();a.p(t.dictionary),nf(e,2,a.d())}};function Hc(e,t){t||(t={});var r=rf();r.p(e);var n=$x(e,t,t.dictionary?6:2,4);return qx(n,t),nf(n,n.length-4,r.d()),n}var Vx=typeof TextDecoder<"u"&&new TextDecoder,Yx=0;try{Vx.decode(tf,{stream:!0}),Yx=1}catch{}function Gx(e){if(Array.isArray(e))return e}function Wx(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,s,l,c=[],d=!0,f=!1;try{if(s=(r=r.call(e)).next,t!==0)for(;!(d=(n=s.call(r)).done)&&(c.push(n.value),c.length!==t);d=!0);}catch(p){f=!0,a=p}finally{try{if(!d&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(f)throw a}}return c}}function tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Xx(e,t){if(e){if(typeof e=="string")return tu(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tu(e,t):void 0}}function Zx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ru(e,t){return Gx(e)||Wx(e,t)||Xx(e,t)||Zx()}function nu(e,t="utf8"){return new TextDecoder(t).decode(e)}const Jx=new TextEncoder;function Qx(e){return Jx.encode(e)}const Kx=1024*8,ev=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),H1={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class C0{constructor(t=Kx,r={}){Ee(this,"buffer");Ee(this,"byteLength");Ee(this,"byteOffset");Ee(this,"length");Ee(this,"offset");Ee(this,"lastWrittenByte");Ee(this,"littleEndian");Ee(this,"_data");Ee(this,"_mark");Ee(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const a=r.offset?r.offset>>>0:0,s=t.byteLength-a;let l=a;(ArrayBuffer.isView(t)||t instanceof C0)&&(t.byteLength!==t.buffer.byteLength&&(l=t.byteOffset+a),t=t.buffer),n?this.lastWrittenByte=s:this.lastWrittenByte=0,this.buffer=t,this.length=s,this.byteLength=s,this.byteOffset=l,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,l,s),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,a=new Uint8Array(n);a.set(new Uint8Array(this.buffer)),this.buffer=a.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=H1[r].BYTES_PER_ELEMENT*t,a=this.byteOffset+this.offset,s=this.buffer.slice(a,a+n);if(this.littleEndian===ev&&r!=="uint8"&&r!=="int8"){const c=new Uint8Array(this.buffer.slice(a,a+n));c.reverse();const d=new H1[r](c.buffer);return this.offset+=n,d.reverse(),d}const l=new H1[r](s);return this.offset+=n,l}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return nu(this.readBytes(t))}decodeText(t=1,r="utf8"){return nu(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(Qx(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function rs(e){let t=e.length;for(;--t>=0;)e[t]=0}const tv=3,rv=258,of=29,nv=256,iv=nv+1+of,af=30,ov=512,av=new Array((iv+2)*2);rs(av);const sv=new Array(af*2);rs(sv);const lv=new Array(ov);rs(lv);const cv=new Array(rv-tv+1);rs(cv);const uv=new Array(of);rs(uv);const dv=new Array(af);rs(dv);const hv=(e,t,r,n)=>{let a=e&65535|0,s=e>>>16&65535|0,l=0;for(;r!==0;){l=r>2e3?2e3:r,r-=l;do a=a+t[n++]|0,s=s+a|0;while(--l);a%=65521,s%=65521}return a|s<<16|0};var $c=hv;const fv=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},pv=new Uint32Array(fv()),mv=(e,t,r,n)=>{const a=pv,s=n+r;e^=-1;for(let l=n;l<s;l++)e=e>>>8^a[(e^t[l])&255];return e^-1};var Ti=mv,qc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},sf={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const gv=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var xv=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)gv(r,n)&&(e[n]=r[n])}}return e},vv=e=>{let t=0;for(let n=0,a=e.length;n<a;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,a=0,s=e.length;n<s;n++){let l=e[n];r.set(l,a),a+=l.length}return r},lf={assign:xv,flattenChunks:vv};let cf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{cf=!1}const Ls=new Uint8Array(256);for(let e=0;e<256;e++)Ls[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ls[254]=Ls[254]=1;var bv=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,a,s,l=e.length,c=0;for(a=0;a<l;a++)r=e.charCodeAt(a),(r&64512)===55296&&a+1<l&&(n=e.charCodeAt(a+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),a++)),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(c),s=0,a=0;s<c;a++)r=e.charCodeAt(a),(r&64512)===55296&&a+1<l&&(n=e.charCodeAt(a+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),a++)),r<128?t[s++]=r:r<2048?(t[s++]=192|r>>>6,t[s++]=128|r&63):r<65536?(t[s++]=224|r>>>12,t[s++]=128|r>>>6&63,t[s++]=128|r&63):(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63,t[s++]=128|r>>>6&63,t[s++]=128|r&63);return t};const wv=(e,t)=>{if(t<65534&&e.subarray&&cf)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var yv=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,a;const s=new Array(r*2);for(a=0,n=0;n<r;){let l=e[n++];if(l<128){s[a++]=l;continue}let c=Ls[l];if(c>4){s[a++]=65533,n+=c-1;continue}for(l&=c===2?31:c===3?15:7;c>1&&n<r;)l=l<<6|e[n++]&63,c--;if(c>1){s[a++]=65533;continue}l<65536?s[a++]=l:(l-=65536,s[a++]=55296|l>>10&1023,s[a++]=56320|l&1023)}return wv(s,a)},_v=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ls[e[r]]>t?r:t},Vc={string2buf:bv,buf2string:yv,utf8border:_v};function Cv(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Sv=Cv;const wl=16209,Av=16191;var kv=function(t,r){let n,a,s,l,c,d,f,p,v,S,m,w,M,j,A,L,E,D,q,V,K,X,I,Z;const _=t.state;n=t.next_in,I=t.input,a=n+(t.avail_in-5),s=t.next_out,Z=t.output,l=s-(r-t.avail_out),c=s+(t.avail_out-257),d=_.dmax,f=_.wsize,p=_.whave,v=_.wnext,S=_.window,m=_.hold,w=_.bits,M=_.lencode,j=_.distcode,A=(1<<_.lenbits)-1,L=(1<<_.distbits)-1;e:do{w<15&&(m+=I[n++]<<w,w+=8,m+=I[n++]<<w,w+=8),E=M[m&A];t:for(;;){if(D=E>>>24,m>>>=D,w-=D,D=E>>>16&255,D===0)Z[s++]=E&65535;else if(D&16){q=E&65535,D&=15,D&&(w<D&&(m+=I[n++]<<w,w+=8),q+=m&(1<<D)-1,m>>>=D,w-=D),w<15&&(m+=I[n++]<<w,w+=8,m+=I[n++]<<w,w+=8),E=j[m&L];r:for(;;){if(D=E>>>24,m>>>=D,w-=D,D=E>>>16&255,D&16){if(V=E&65535,D&=15,w<D&&(m+=I[n++]<<w,w+=8,w<D&&(m+=I[n++]<<w,w+=8)),V+=m&(1<<D)-1,V>d){t.msg="invalid distance too far back",_.mode=wl;break e}if(m>>>=D,w-=D,D=s-l,V>D){if(D=V-D,D>p&&_.sane){t.msg="invalid distance too far back",_.mode=wl;break e}if(K=0,X=S,v===0){if(K+=f-D,D<q){q-=D;do Z[s++]=S[K++];while(--D);K=s-V,X=Z}}else if(v<D){if(K+=f+v-D,D-=v,D<q){q-=D;do Z[s++]=S[K++];while(--D);if(K=0,v<q){D=v,q-=D;do Z[s++]=S[K++];while(--D);K=s-V,X=Z}}}else if(K+=v-D,D<q){q-=D;do Z[s++]=S[K++];while(--D);K=s-V,X=Z}for(;q>2;)Z[s++]=X[K++],Z[s++]=X[K++],Z[s++]=X[K++],q-=3;q&&(Z[s++]=X[K++],q>1&&(Z[s++]=X[K++]))}else{K=s-V;do Z[s++]=Z[K++],Z[s++]=Z[K++],Z[s++]=Z[K++],q-=3;while(q>2);q&&(Z[s++]=Z[K++],q>1&&(Z[s++]=Z[K++]))}}else if(D&64){t.msg="invalid distance code",_.mode=wl;break e}else{E=j[(E&65535)+(m&(1<<D)-1)];continue r}break}}else if(D&64)if(D&32){_.mode=Av;break e}else{t.msg="invalid literal/length code",_.mode=wl;break e}else{E=M[(E&65535)+(m&(1<<D)-1)];continue t}break}}while(n<a&&s<c);q=w>>3,n-=q,w-=q<<3,m&=(1<<w)-1,t.next_in=n,t.next_out=s,t.avail_in=n<a?5+(a-n):5-(n-a),t.avail_out=s<c?257+(c-s):257-(s-c),_.hold=m,_.bits=w};const Da=15,iu=852,ou=592,au=0,$1=1,su=2,Mv=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),jv=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Nv=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Iv=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Tv=(e,t,r,n,a,s,l,c)=>{const d=c.bits;let f=0,p=0,v=0,S=0,m=0,w=0,M=0,j=0,A=0,L=0,E,D,q,V,K,X=null,I;const Z=new Uint16Array(Da+1),_=new Uint16Array(Da+1);let P=null,F,$,re;for(f=0;f<=Da;f++)Z[f]=0;for(p=0;p<n;p++)Z[t[r+p]]++;for(m=d,S=Da;S>=1&&Z[S]===0;S--);if(m>S&&(m=S),S===0)return a[s++]=1<<24|64<<16|0,a[s++]=1<<24|64<<16|0,c.bits=1,0;for(v=1;v<S&&Z[v]===0;v++);for(m<v&&(m=v),j=1,f=1;f<=Da;f++)if(j<<=1,j-=Z[f],j<0)return-1;if(j>0&&(e===au||S!==1))return-1;for(_[1]=0,f=1;f<Da;f++)_[f+1]=_[f]+Z[f];for(p=0;p<n;p++)t[r+p]!==0&&(l[_[t[r+p]]++]=p);if(e===au?(X=P=l,I=20):e===$1?(X=Mv,P=jv,I=257):(X=Nv,P=Iv,I=0),L=0,p=0,f=v,K=s,w=m,M=0,q=-1,A=1<<m,V=A-1,e===$1&&A>iu||e===su&&A>ou)return 1;for(;;){F=f-M,l[p]+1<I?($=0,re=l[p]):l[p]>=I?($=P[l[p]-I],re=X[l[p]-I]):($=96,re=0),E=1<<f-M,D=1<<w,v=D;do D-=E,a[K+(L>>M)+D]=F<<24|$<<16|re|0;while(D!==0);for(E=1<<f-1;L&E;)E>>=1;if(E!==0?(L&=E-1,L+=E):L=0,p++,--Z[f]===0){if(f===S)break;f=t[r+l[p]]}if(f>m&&(L&V)!==q){for(M===0&&(M=m),K+=v,w=f-M,j=1<<w;w+M<S&&(j-=Z[w+M],!(j<=0));)w++,j<<=1;if(A+=1<<w,e===$1&&A>iu||e===su&&A>ou)return 1;q=L&V,a[q]=m<<24|w<<16|K-s|0}}return L!==0&&(a[K+L]=f-M<<24|64<<16|0),c.bits=m,0};var ys=Tv;const Lv=0,uf=1,df=2,{Z_FINISH:lu,Z_BLOCK:Pv,Z_TREES:yl,Z_OK:fa,Z_STREAM_END:Ev,Z_NEED_DICT:Dv,Z_STREAM_ERROR:Zn,Z_DATA_ERROR:hf,Z_MEM_ERROR:ff,Z_BUF_ERROR:Rv,Z_DEFLATED:cu}=sf,h1=16180,uu=16181,du=16182,hu=16183,fu=16184,pu=16185,mu=16186,gu=16187,xu=16188,vu=16189,Xl=16190,uo=16191,q1=16192,bu=16193,V1=16194,wu=16195,yu=16196,_u=16197,Cu=16198,_l=16199,Cl=16200,Su=16201,Au=16202,ku=16203,Mu=16204,ju=16205,Y1=16206,Nu=16207,Iu=16208,ir=16209,pf=16210,mf=16211,Ov=852,Fv=592,zv=15,Bv=zv,Tu=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function Uv(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const ma=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<h1||t.mode>mf?1:0},gf=e=>{if(ma(e))return Zn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=h1,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Ov),t.distcode=t.distdyn=new Int32Array(Fv),t.sane=1,t.back=-1,fa},xf=e=>{if(ma(e))return Zn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,gf(e)},vf=(e,t)=>{let r;if(ma(e))return Zn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?Zn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,xf(e))},bf=(e,t)=>{if(!e)return Zn;const r=new Uv;e.state=r,r.strm=e,r.window=null,r.mode=h1;const n=vf(e,t);return n!==fa&&(e.state=null),n},Hv=e=>bf(e,Bv);let Lu=!0,G1,W1;const $v=e=>{if(Lu){G1=new Int32Array(512),W1=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(ys(uf,e.lens,0,288,G1,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;ys(df,e.lens,0,32,W1,0,e.work,{bits:5}),Lu=!1}e.lencode=G1,e.lenbits=9,e.distcode=W1,e.distbits=5},wf=(e,t,r,n)=>{let a;const s=e.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),n>=s.wsize?(s.window.set(t.subarray(r-s.wsize,r),0),s.wnext=0,s.whave=s.wsize):(a=s.wsize-s.wnext,a>n&&(a=n),s.window.set(t.subarray(r-n,r-n+a),s.wnext),n-=a,n?(s.window.set(t.subarray(r-n,r),0),s.wnext=n,s.whave=s.wsize):(s.wnext+=a,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=a))),0},qv=(e,t)=>{let r,n,a,s,l,c,d,f,p,v,S,m,w,M,j=0,A,L,E,D,q,V,K,X;const I=new Uint8Array(4);let Z,_;const P=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(ma(e)||!e.output||!e.input&&e.avail_in!==0)return Zn;r=e.state,r.mode===uo&&(r.mode=q1),l=e.next_out,a=e.output,d=e.avail_out,s=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,v=c,S=d,X=fa;e:for(;;)switch(r.mode){case h1:if(r.wrap===0){r.mode=q1;break}for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,I[0]=f&255,I[1]=f>>>8&255,r.check=Ti(r.check,I,2,0),f=0,p=0,r.mode=uu;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=ir;break}if((f&15)!==cu){e.msg="unknown compression method",r.mode=ir;break}if(f>>>=4,p-=4,K=(f&15)+8,r.wbits===0&&(r.wbits=K),K>15||K>r.wbits){e.msg="invalid window size",r.mode=ir;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?vu:uo,f=0,p=0;break;case uu:for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.flags=f,(r.flags&255)!==cu){e.msg="unknown compression method",r.mode=ir;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=ir;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(I[0]=f&255,I[1]=f>>>8&255,r.check=Ti(r.check,I,2,0)),f=0,p=0,r.mode=du;case du:for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(I[0]=f&255,I[1]=f>>>8&255,I[2]=f>>>16&255,I[3]=f>>>24&255,r.check=Ti(r.check,I,4,0)),f=0,p=0,r.mode=hu;case hu:for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(I[0]=f&255,I[1]=f>>>8&255,r.check=Ti(r.check,I,2,0)),f=0,p=0,r.mode=fu;case fu:if(r.flags&1024){for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(I[0]=f&255,I[1]=f>>>8&255,r.check=Ti(r.check,I,2,0)),f=0,p=0}else r.head&&(r.head.extra=null);r.mode=pu;case pu:if(r.flags&1024&&(m=r.length,m>c&&(m=c),m&&(r.head&&(K=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(s,s+m),K)),r.flags&512&&r.wrap&4&&(r.check=Ti(r.check,n,m,s)),c-=m,s+=m,r.length-=m),r.length))break e;r.length=0,r.mode=mu;case mu:if(r.flags&2048){if(c===0)break e;m=0;do K=n[s+m++],r.head&&K&&r.length<65536&&(r.head.name+=String.fromCharCode(K));while(K&&m<c);if(r.flags&512&&r.wrap&4&&(r.check=Ti(r.check,n,m,s)),c-=m,s+=m,K)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=gu;case gu:if(r.flags&4096){if(c===0)break e;m=0;do K=n[s+m++],r.head&&K&&r.length<65536&&(r.head.comment+=String.fromCharCode(K));while(K&&m<c);if(r.flags&512&&r.wrap&4&&(r.check=Ti(r.check,n,m,s)),c-=m,s+=m,K)break e}else r.head&&(r.head.comment=null);r.mode=xu;case xu:if(r.flags&512){for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=ir;break}f=0,p=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=uo;break;case vu:for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}e.adler=r.check=Tu(f),f=0,p=0,r.mode=Xl;case Xl:if(r.havedict===0)return e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,Dv;e.adler=r.check=1,r.mode=uo;case uo:if(t===Pv||t===yl)break e;case q1:if(r.last){f>>>=p&7,p-=p&7,r.mode=Y1;break}for(;p<3;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}switch(r.last=f&1,f>>>=1,p-=1,f&3){case 0:r.mode=bu;break;case 1:if($v(r),r.mode=_l,t===yl){f>>>=2,p-=2;break e}break;case 2:r.mode=yu;break;case 3:e.msg="invalid block type",r.mode=ir}f>>>=2,p-=2;break;case bu:for(f>>>=p&7,p-=p&7;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=ir;break}if(r.length=f&65535,f=0,p=0,r.mode=V1,t===yl)break e;case V1:r.mode=wu;case wu:if(m=r.length,m){if(m>c&&(m=c),m>d&&(m=d),m===0)break e;a.set(n.subarray(s,s+m),l),c-=m,s+=m,d-=m,l+=m,r.length-=m;break}r.mode=uo;break;case yu:for(;p<14;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.nlen=(f&31)+257,f>>>=5,p-=5,r.ndist=(f&31)+1,f>>>=5,p-=5,r.ncode=(f&15)+4,f>>>=4,p-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=ir;break}r.have=0,r.mode=_u;case _u:for(;r.have<r.ncode;){for(;p<3;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.lens[P[r.have++]]=f&7,f>>>=3,p-=3}for(;r.have<19;)r.lens[P[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,Z={bits:r.lenbits},X=ys(Lv,r.lens,0,19,r.lencode,0,r.work,Z),r.lenbits=Z.bits,X){e.msg="invalid code lengths set",r.mode=ir;break}r.have=0,r.mode=Cu;case Cu:for(;r.have<r.nlen+r.ndist;){for(;j=r.lencode[f&(1<<r.lenbits)-1],A=j>>>24,L=j>>>16&255,E=j&65535,!(A<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(E<16)f>>>=A,p-=A,r.lens[r.have++]=E;else{if(E===16){for(_=A+2;p<_;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(f>>>=A,p-=A,r.have===0){e.msg="invalid bit length repeat",r.mode=ir;break}K=r.lens[r.have-1],m=3+(f&3),f>>>=2,p-=2}else if(E===17){for(_=A+3;p<_;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=A,p-=A,K=0,m=3+(f&7),f>>>=3,p-=3}else{for(_=A+7;p<_;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=A,p-=A,K=0,m=11+(f&127),f>>>=7,p-=7}if(r.have+m>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=ir;break}for(;m--;)r.lens[r.have++]=K}}if(r.mode===ir)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=ir;break}if(r.lenbits=9,Z={bits:r.lenbits},X=ys(uf,r.lens,0,r.nlen,r.lencode,0,r.work,Z),r.lenbits=Z.bits,X){e.msg="invalid literal/lengths set",r.mode=ir;break}if(r.distbits=6,r.distcode=r.distdyn,Z={bits:r.distbits},X=ys(df,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,Z),r.distbits=Z.bits,X){e.msg="invalid distances set",r.mode=ir;break}if(r.mode=_l,t===yl)break e;case _l:r.mode=Cl;case Cl:if(c>=6&&d>=258){e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,kv(e,S),l=e.next_out,a=e.output,d=e.avail_out,s=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,r.mode===uo&&(r.back=-1);break}for(r.back=0;j=r.lencode[f&(1<<r.lenbits)-1],A=j>>>24,L=j>>>16&255,E=j&65535,!(A<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(L&&!(L&240)){for(D=A,q=L,V=E;j=r.lencode[V+((f&(1<<D+q)-1)>>D)],A=j>>>24,L=j>>>16&255,E=j&65535,!(D+A<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=D,p-=D,r.back+=D}if(f>>>=A,p-=A,r.back+=A,r.length=E,L===0){r.mode=ju;break}if(L&32){r.back=-1,r.mode=uo;break}if(L&64){e.msg="invalid literal/length code",r.mode=ir;break}r.extra=L&15,r.mode=Su;case Su:if(r.extra){for(_=r.extra;p<_;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=Au;case Au:for(;j=r.distcode[f&(1<<r.distbits)-1],A=j>>>24,L=j>>>16&255,E=j&65535,!(A<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(!(L&240)){for(D=A,q=L,V=E;j=r.distcode[V+((f&(1<<D+q)-1)>>D)],A=j>>>24,L=j>>>16&255,E=j&65535,!(D+A<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=D,p-=D,r.back+=D}if(f>>>=A,p-=A,r.back+=A,L&64){e.msg="invalid distance code",r.mode=ir;break}r.offset=E,r.extra=L&15,r.mode=ku;case ku:if(r.extra){for(_=r.extra;p<_;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=ir;break}r.mode=Mu;case Mu:if(d===0)break e;if(m=S-d,r.offset>m){if(m=r.offset-m,m>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=ir;break}m>r.wnext?(m-=r.wnext,w=r.wsize-m):w=r.wnext-m,m>r.length&&(m=r.length),M=r.window}else M=a,w=l-r.offset,m=r.length;m>d&&(m=d),d-=m,r.length-=m;do a[l++]=M[w++];while(--m);r.length===0&&(r.mode=Cl);break;case ju:if(d===0)break e;a[l++]=r.length,d--,r.mode=Cl;break;case Y1:if(r.wrap){for(;p<32;){if(c===0)break e;c--,f|=n[s++]<<p,p+=8}if(S-=d,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Ti(r.check,a,S,l-S):$c(r.check,a,S,l-S)),S=d,r.wrap&4&&(r.flags?f:Tu(f))!==r.check){e.msg="incorrect data check",r.mode=ir;break}f=0,p=0}r.mode=Nu;case Nu:if(r.wrap&&r.flags){for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=ir;break}f=0,p=0}r.mode=Iu;case Iu:X=Ev;break e;case ir:X=hf;break e;case pf:return ff;case mf:default:return Zn}return e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,(r.wsize||S!==e.avail_out&&r.mode<ir&&(r.mode<Y1||t!==lu))&&wf(e,e.output,e.next_out,S-e.avail_out),v-=e.avail_in,S-=e.avail_out,e.total_in+=v,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Ti(r.check,a,S,e.next_out-S):$c(r.check,a,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===uo?128:0)+(r.mode===_l||r.mode===V1?256:0),(v===0&&S===0||t===lu)&&X===fa&&(X=Rv),X},Vv=e=>{if(ma(e))return Zn;let t=e.state;return t.window&&(t.window=null),e.state=null,fa},Yv=(e,t)=>{if(ma(e))return Zn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,fa):Zn},Gv=(e,t)=>{const r=t.length;let n,a,s;return ma(e)||(n=e.state,n.wrap!==0&&n.mode!==Xl)?Zn:n.mode===Xl&&(a=1,a=$c(a,t,r,0),a!==n.check)?hf:(s=wf(e,t,r,r),s?(n.mode=pf,ff):(n.havedict=1,fa))};var Wv=xf,Xv=vf,Zv=gf,Jv=Hv,Qv=bf,Kv=qv,eb=Vv,tb=Yv,rb=Gv,nb="pako inflate (from Nodeca project)",ho={inflateReset:Wv,inflateReset2:Xv,inflateResetKeep:Zv,inflateInit:Jv,inflateInit2:Qv,inflate:Kv,inflateEnd:eb,inflateGetHeader:tb,inflateSetDictionary:rb,inflateInfo:nb};function ib(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var ob=ib;const yf=Object.prototype.toString,{Z_NO_FLUSH:ab,Z_FINISH:sb,Z_OK:Ps,Z_STREAM_END:X1,Z_NEED_DICT:Z1,Z_STREAM_ERROR:lb,Z_DATA_ERROR:Pu,Z_MEM_ERROR:cb}=sf;function Bs(e){this.options=lf.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Sv,this.strm.avail_out=0;let r=ho.inflateInit2(this.strm,t.windowBits);if(r!==Ps)throw new Error(qc[r]);if(this.header=new ob,ho.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Vc.string2buf(t.dictionary):yf.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=ho.inflateSetDictionary(this.strm,t.dictionary),r!==Ps)))throw new Error(qc[r])}Bs.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,a=this.options.dictionary;let s,l,c;if(this.ended)return!1;for(t===~~t?l=t:l=t===!0?sb:ab,yf.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),s=ho.inflate(r,l),s===Z1&&a&&(s=ho.inflateSetDictionary(r,a),s===Ps?s=ho.inflate(r,l):s===Pu&&(s=Z1));r.avail_in>0&&s===X1&&r.state.wrap>0&&e[r.next_in]!==0;)ho.inflateReset(r),s=ho.inflate(r,l);switch(s){case lb:case Pu:case Z1:case cb:return this.onEnd(s),this.ended=!0,!1}if(c=r.avail_out,r.next_out&&(r.avail_out===0||s===X1))if(this.options.to==="string"){let d=Vc.utf8border(r.output,r.next_out),f=r.next_out-d,p=Vc.buf2string(r.output,d);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(d,d+f),0),this.onData(p)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(s===Ps&&c===0)){if(s===X1)return s=ho.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Bs.prototype.onData=function(e){this.chunks.push(e)};Bs.prototype.onEnd=function(e){e===Ps&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=lf.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function ub(e,t){const r=new Bs(t);if(r.push(e),r.err)throw r.msg||qc[r.err];return r.result}var db=Bs,hb=ub,fb={Inflate:db,inflate:hb};const{Inflate:pb,inflate:mb}=fb;var Eu=pb,gb=mb;const _f=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;_f[e]=t}const Du=4294967295;function xb(e,t,r){let n=e;for(let a=0;a<r;a++)n=_f[(n^t[a])&255]^n>>>8;return n}function vb(e,t){return(xb(Du,e,t)^Du)>>>0}function Ru(e,t,r){const n=e.readUint32(),a=vb(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(a!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${a}`)}function Cf(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function Sf(e,t,r,n){let a=0;for(;a<n;a++)t[a]=e[a];for(;a<r;a++)t[a]=e[a]+t[a-n]&255}function Af(e,t,r,n){let a=0;if(r.length===0)for(;a<n;a++)t[a]=e[a];else for(;a<n;a++)t[a]=e[a]+r[a]&255}function kf(e,t,r,n,a){let s=0;if(r.length===0){for(;s<a;s++)t[s]=e[s];for(;s<n;s++)t[s]=e[s]+(t[s-a]>>1)&255}else{for(;s<a;s++)t[s]=e[s]+(r[s]>>1)&255;for(;s<n;s++)t[s]=e[s]+(t[s-a]+r[s]>>1)&255}}function Mf(e,t,r,n,a){let s=0;if(r.length===0){for(;s<a;s++)t[s]=e[s];for(;s<n;s++)t[s]=e[s]+t[s-a]&255}else{for(;s<a;s++)t[s]=e[s]+r[s]&255;for(;s<n;s++)t[s]=e[s]+bb(t[s-a],r[s],r[s-a])&255}}function bb(e,t,r){const n=e+t-r,a=Math.abs(n-e),s=Math.abs(n-t),l=Math.abs(n-r);return a<=s&&a<=l?e:s<=l?t:r}function wb(e,t,r,n,a,s){switch(e){case 0:Cf(t,r,a);break;case 1:Sf(t,r,a,s);break;case 2:Af(t,r,n,a);break;case 3:kf(t,r,n,a,s);break;case 4:Mf(t,r,n,a,s);break;default:throw new Error(`Unsupported filter: ${e}`)}}const yb=new Uint16Array([255]),_b=new Uint8Array(yb.buffer),Cb=_b[0]===255;function Sb(e){const{data:t,width:r,height:n,channels:a,depth:s}=e,l=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],c=Math.ceil(s/8)*a,d=new Uint8Array(n*r*c);let f=0;for(let p=0;p<7;p++){const v=l[p],S=Math.ceil((r-v.x)/v.xStep),m=Math.ceil((n-v.y)/v.yStep);if(S<=0||m<=0)continue;const w=S*c,M=new Uint8Array(w);for(let j=0;j<m;j++){const A=t[f++],L=t.subarray(f,f+w);f+=w;const E=new Uint8Array(w);wb(A,L,E,M,w,c),M.set(E);for(let D=0;D<S;D++){const q=v.x+D*v.xStep,V=v.y+j*v.yStep;if(!(q>=r||V>=n))for(let K=0;K<c;K++)d[(V*r+q)*c+K]=E[D*c+K]}}}if(s===16){const p=new Uint16Array(d.buffer);if(Cb)for(let v=0;v<p.length;v++)p[v]=Ab(p[v]);return p}else return d}function Ab(e){return(e&255)<<8|e>>8&255}const kb=new Uint16Array([255]),Mb=new Uint8Array(kb.buffer),jb=Mb[0]===255,Nb=new Uint8Array(0);function Ou(e){const{data:t,width:r,height:n,channels:a,depth:s}=e,l=Math.ceil(s/8)*a,c=Math.ceil(s/8*a*r),d=new Uint8Array(n*c);let f=Nb,p=0,v,S;for(let m=0;m<n;m++){switch(v=t.subarray(p+1,p+1+c),S=d.subarray(m*c,(m+1)*c),t[p]){case 0:Cf(v,S,c);break;case 1:Sf(v,S,c,l);break;case 2:Af(v,S,f,c);break;case 3:kf(v,S,f,c,l);break;case 4:Mf(v,S,f,c,l);break;default:throw new Error(`Unsupported filter: ${t[p]}`)}f=S,p+=c+1}if(s===16){const m=new Uint16Array(d.buffer);if(jb)for(let w=0;w<m.length;w++)m[w]=Ib(m[w]);return m}else return d}function Ib(e){return(e&255)<<8|e>>8&255}const zl=Uint8Array.of(137,80,78,71,13,10,26,10);function Fu(e){if(!Tb(e.readBytes(zl.length)))throw new Error("wrong PNG signature")}function Tb(e){if(e.length<zl.length)return!1;for(let t=0;t<zl.length;t++)if(e[t]!==zl[t])return!1;return!0}const Lb="tEXt",Pb=0,jf=new TextDecoder("latin1");function Eb(e){if(Rb(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const Db=/^[\u0000-\u00FF]*$/;function Rb(e){if(!Db.test(e))throw new Error("invalid latin1 text")}function Ob(e,t,r){const n=Nf(t);e[n]=Fb(t,r-n.length-1)}function Nf(e){for(e.mark();e.readByte()!==Pb;);const t=e.offset;e.reset();const r=jf.decode(e.readBytes(t-e.offset-1));return e.skip(1),Eb(r),r}function Fb(e,t){return jf.decode(e.readBytes(t))}const Ln={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},J1={UNKNOWN:-1,DEFLATE:0},zu={UNKNOWN:-1,ADAPTIVE:0},Q1={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Sl={NONE:0,BACKGROUND:1,PREVIOUS:2},K1={SOURCE:0,OVER:1};class zb extends C0{constructor(r,n={}){super(r);Ee(this,"_checkCrc");Ee(this,"_inflator");Ee(this,"_png");Ee(this,"_apng");Ee(this,"_end");Ee(this,"_hasPalette");Ee(this,"_palette");Ee(this,"_hasTransparency");Ee(this,"_transparency");Ee(this,"_compressionMethod");Ee(this,"_filterMethod");Ee(this,"_interlaceMethod");Ee(this,"_colorType");Ee(this,"_isAnimated");Ee(this,"_numberOfFrames");Ee(this,"_numberOfPlays");Ee(this,"_frames");Ee(this,"_writingDataChunks");const{checkCrc:a=!1}=n;this._checkCrc=a,this._inflator=new Eu,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=J1.UNKNOWN,this._filterMethod=zu.UNKNOWN,this._interlaceMethod=Q1.UNKNOWN,this._colorType=Ln.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(Fu(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(Fu(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const a=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case Lb:Ob(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-a!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?Ru(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const a=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=a+r;break}if(this.offset-a!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?Ru(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=Bb(this.readUint8());const n=this.readUint8();this._colorType=n;let a;switch(n){case Ln.GREYSCALE:a=1;break;case Ln.TRUECOLOUR:a=3;break;case Ln.INDEXED_COLOUR:a=1;break;case Ln.GREYSCALE_ALPHA:a=2;break;case Ln.TRUECOLOUR_ALPHA:a=4;break;case Ln.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=a,this._compressionMethod=this.readUint8(),this._compressionMethod!==J1.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const a=[];this._palette=a;for(let s=0;s<n;s++)a.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,a=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,a,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,a=this.offset+this.byteOffset;if(a+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,a,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case Ln.GREYSCALE:case Ln.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case Ln.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const a=this.readByte();this._palette[n].push(a)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case Ln.UNKNOWN:case Ln.GREYSCALE_ALPHA:case Ln.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=Nf(this),a=this.readUint8();if(a!==J1.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${a}`);const s=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:gb(s)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),a=this.readByte();this._png.resolution={x:r,y:n,unit:a}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},a=this._frames.at(r);if(a){if(a.data=Ou({data:a.data,width:a.width,height:a.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||a.xOffset===0&&a.yOffset===0&&a.width===this._png.width&&a.height===this._png.height)n.data=a.data;else{const s=this._apng.frames.at(r-1);this.disposeFrame(a,s,n),this.addFrameDataToCanvas(n,a)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,a){switch(r.disposeOp){case Sl.NONE:break;case Sl.BACKGROUND:for(let s=0;s<this._png.height;s++)for(let l=0;l<this._png.width;l++){const c=(s*r.width+l)*this._png.channels;for(let d=0;d<this._png.channels;d++)a.data[c+d]=0}break;case Sl.PREVIOUS:a.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const a=1<<this._png.depth,s=(l,c)=>{const d=((l+n.yOffset)*this._png.width+n.xOffset+c)*this._png.channels,f=(l*n.width+c)*this._png.channels;return{index:d,frameIndex:f}};switch(n.blendOp){case K1.SOURCE:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:d,frameIndex:f}=s(l,c);for(let p=0;p<this._png.channels;p++)r.data[d+p]=n.data[f+p]}break;case K1.OVER:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:d,frameIndex:f}=s(l,c);for(let p=0;p<this._png.channels;p++){const v=n.data[f+this._png.channels-1]/a,S=p%(this._png.channels-1)===0?1:n.data[f+p],m=Math.floor(v*S+(1-v)*r.data[d+p]);r.data[d+p]+=m}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==zu.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===Q1.NO_INTERLACE)this._png.data=Ou({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===Q1.ADAM7)this._png.data=Sb({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Sl.NONE,blendOp:K1.SOURCE,data:r}),this._inflator=new Eu,this._writingDataChunks=!1}}function Bb(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var Bu;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(Bu||(Bu={}));function Ub(e,t){return new zb(e,t).decode()}var vt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function ec(){vt.console&&typeof vt.console.log=="function"&&vt.console.log.apply(vt.console,arguments)}var Zt={log:ec,warn:function(e){vt.console&&(typeof vt.console.warn=="function"?vt.console.warn.apply(vt.console,arguments):ec.call(null,arguments))},error:function(e){vt.console&&(typeof vt.console.error=="function"?vt.console.error.apply(vt.console,arguments):ec(e))}};function tc(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){la(n.response,t,r)},n.onerror=function(){Zt.error("could not download file")},n.send()}function Uu(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Al(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var la=vt.saveAs||((typeof window>"u"?"undefined":qt(window))!=="object"||window!==vt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=vt.URL||vt.webkitURL,a=document.createElement("a");t=t||e.name||"download",a.download=t,a.rel="noopener",typeof e=="string"?(a.href=e,a.origin!==location.origin?Uu(a.href)?tc(e,t,r):Al(a,a.target="_blank"):Al(a)):(a.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(a.href)},4e4),setTimeout(function(){Al(a)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(Uu(e))tc(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){Al(n)})}else navigator.msSaveOrOpenBlob(function(a,s){return s===void 0?s={autoBom:!1}:qt(s)!=="object"&&(Zt.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return tc(e,t,r);var a=e.type==="application/octet-stream",s=/constructor/i.test(vt.HTMLElement)||vt.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&s)&&(typeof FileReader>"u"?"undefined":qt(FileReader))==="object"){var c=new FileReader;c.onloadend=function(){var p=c.result;p=l?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=p:location=p,n=null},c.readAsDataURL(e)}else{var d=vt.URL||vt.webkitURL,f=d.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function If(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(c){return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(c){return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(c){return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]}}],n=0;n<r.length;n++){var a=r[n].re,s=r[n].process,l=a.exec(e);l&&(t=s(l),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var c=this.r.toString(16),d=this.g.toString(16),f=this.b.toString(16);return c.length==1&&(c="0"+c),d.length==1&&(d="0"+d),f.length==1&&(f="0"+f),"#"+c+d+f}}var Bl=vt.atob.bind(vt),Hu=vt.btoa.bind(vt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function rc(e,t){var r=e[0],n=e[1],a=e[2],s=e[3];r=Yr(r,n,a,s,t[0],7,-680876936),s=Yr(s,r,n,a,t[1],12,-389564586),a=Yr(a,s,r,n,t[2],17,606105819),n=Yr(n,a,s,r,t[3],22,-1044525330),r=Yr(r,n,a,s,t[4],7,-176418897),s=Yr(s,r,n,a,t[5],12,1200080426),a=Yr(a,s,r,n,t[6],17,-1473231341),n=Yr(n,a,s,r,t[7],22,-45705983),r=Yr(r,n,a,s,t[8],7,1770035416),s=Yr(s,r,n,a,t[9],12,-1958414417),a=Yr(a,s,r,n,t[10],17,-42063),n=Yr(n,a,s,r,t[11],22,-1990404162),r=Yr(r,n,a,s,t[12],7,1804603682),s=Yr(s,r,n,a,t[13],12,-40341101),a=Yr(a,s,r,n,t[14],17,-1502002290),r=Gr(r,n=Yr(n,a,s,r,t[15],22,1236535329),a,s,t[1],5,-165796510),s=Gr(s,r,n,a,t[6],9,-1069501632),a=Gr(a,s,r,n,t[11],14,643717713),n=Gr(n,a,s,r,t[0],20,-373897302),r=Gr(r,n,a,s,t[5],5,-701558691),s=Gr(s,r,n,a,t[10],9,38016083),a=Gr(a,s,r,n,t[15],14,-660478335),n=Gr(n,a,s,r,t[4],20,-405537848),r=Gr(r,n,a,s,t[9],5,568446438),s=Gr(s,r,n,a,t[14],9,-1019803690),a=Gr(a,s,r,n,t[3],14,-187363961),n=Gr(n,a,s,r,t[8],20,1163531501),r=Gr(r,n,a,s,t[13],5,-1444681467),s=Gr(s,r,n,a,t[2],9,-51403784),a=Gr(a,s,r,n,t[7],14,1735328473),r=Wr(r,n=Gr(n,a,s,r,t[12],20,-1926607734),a,s,t[5],4,-378558),s=Wr(s,r,n,a,t[8],11,-2022574463),a=Wr(a,s,r,n,t[11],16,1839030562),n=Wr(n,a,s,r,t[14],23,-35309556),r=Wr(r,n,a,s,t[1],4,-1530992060),s=Wr(s,r,n,a,t[4],11,1272893353),a=Wr(a,s,r,n,t[7],16,-155497632),n=Wr(n,a,s,r,t[10],23,-1094730640),r=Wr(r,n,a,s,t[13],4,681279174),s=Wr(s,r,n,a,t[0],11,-358537222),a=Wr(a,s,r,n,t[3],16,-722521979),n=Wr(n,a,s,r,t[6],23,76029189),r=Wr(r,n,a,s,t[9],4,-640364487),s=Wr(s,r,n,a,t[12],11,-421815835),a=Wr(a,s,r,n,t[15],16,530742520),r=Xr(r,n=Wr(n,a,s,r,t[2],23,-995338651),a,s,t[0],6,-198630844),s=Xr(s,r,n,a,t[7],10,1126891415),a=Xr(a,s,r,n,t[14],15,-1416354905),n=Xr(n,a,s,r,t[5],21,-57434055),r=Xr(r,n,a,s,t[12],6,1700485571),s=Xr(s,r,n,a,t[3],10,-1894986606),a=Xr(a,s,r,n,t[10],15,-1051523),n=Xr(n,a,s,r,t[1],21,-2054922799),r=Xr(r,n,a,s,t[8],6,1873313359),s=Xr(s,r,n,a,t[15],10,-30611744),a=Xr(a,s,r,n,t[6],15,-1560198380),n=Xr(n,a,s,r,t[13],21,1309151649),r=Xr(r,n,a,s,t[4],6,-145523070),s=Xr(s,r,n,a,t[11],10,-1120210379),a=Xr(a,s,r,n,t[2],15,718787259),n=Xr(n,a,s,r,t[9],21,-343485551),e[0]=$o(r,e[0]),e[1]=$o(n,e[1]),e[2]=$o(a,e[2]),e[3]=$o(s,e[3])}function f1(e,t,r,n,a,s){return t=$o($o(t,e),$o(n,s)),$o(t<<a|t>>>32-a,r)}function Yr(e,t,r,n,a,s,l){return f1(t&r|~t&n,e,t,a,s,l)}function Gr(e,t,r,n,a,s,l){return f1(t&n|r&~n,e,t,a,s,l)}function Wr(e,t,r,n,a,s,l){return f1(t^r^n,e,t,a,s,l)}function Xr(e,t,r,n,a,s,l){return f1(r^(t|~n),e,t,a,s,l)}function Tf(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)rc(n,Hb(e.substring(t-64,t)));e=e.substring(t-64);var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)a[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(a[t>>2]|=128<<(t%4<<3),t>55)for(rc(n,a),t=0;t<16;t++)a[t]=0;return a[14]=8*r,rc(n,a),n}function Hb(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var $u="0123456789abcdef".split("");function $b(e){for(var t="",r=0;r<4;r++)t+=$u[e>>8*r+4&15]+$u[e>>8*r&15];return t}function qb(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function Yc(e){return Tf(e).map(qb).join("")}var Vb=function(e){for(var t=0;t<e.length;t++)e[t]=$b(e[t]);return e.join("")}(Tf("hello"))!="5d41402abc4b2a76b9719d911017c592";function $o(e,t){if(Vb){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Gc(e,t){var r,n,a,s;if(e!==r){for(var l=(a=e,s=1+(256/e.length|0),new Array(s+1).join(a)),c=[],d=0;d<256;d++)c[d]=d;var f=0;for(d=0;d<256;d++){var p=c[d];f=(f+p+l.charCodeAt(d))%256,c[d]=c[f],c[f]=p}r=e,n=c}else c=n;var v=t.length,S=0,m=0,w="";for(d=0;d<v;d++)m=(m+(p=c[S=(S+1)%256]))%256,c[S]=c[m],c[m]=p,l=c[(c[S]+c[m])%256],w+=String.fromCharCode(t.charCodeAt(d)^l);return w}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var qu={print:4,modify:8,copy:16,"annot-forms":32};function Ha(e,t,r,n){this.v=1,this.r=2;var a=192;e.forEach(function(c){if(qu.perm!==void 0)throw new Error("Invalid permission: "+c);a+=qu[c]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var s=(t+this.padding).substr(0,32),l=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(s,l),this.P=-(1+(255^a)),this.encryptionKey=Yc(s+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=Gc(this.encryptionKey,this.padding)}function $a(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var a=e.charCodeAt(n);t+=a<33||a===35||a===37||a===40||a===41||a===47||a===60||a===62||a===91||a===93||a===123||a===125||a>126?"#"+("0"+a.toString(16)).slice(-2):e[n]}return t}function Vu(e){if(qt(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,a){if(a=a||!1,typeof r!="string"||typeof n!="function"||typeof a!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var s=Math.random().toString(35);return t[r][s]=[n,!!a],s},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),a=[];for(var s in t[r]){var l=t[r][s];try{l[0].apply(e,n)}catch(c){vt.console&&Zt.error("jsPDF PubSub Error",c.message,c)}l[1]&&a.push(s)}a.length&&a.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Zl(e){if(!(this instanceof Zl))return new Zl(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function Lf(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function ca(e,t,r,n,a){if(!(this instanceof ca))return new ca(e,t,r,n,a);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,Lf.call(this,n,a)}function Ya(e,t,r,n,a){if(!(this instanceof Ya))return new Ya(e,t,r,n,a);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,Lf.call(this,n,a)}function st(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],a=arguments[2],s=arguments[3],l=[],c=1,d=16,f="S",p=null;qt(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,a=e.format||a,s=e.compress||e.compressPdf||s,(p=e.encryption||null)!==null&&(p.userPassword=p.userPassword||"",p.ownerPassword=p.ownerPassword||"",p.userPermissions=p.userPermissions||[]),c=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(d=e.floatPrecision),f=e.defaultPathOperation||"S"),l=e.filters||(s===!0?["FlateEncode"]:l),n=n||"mm",r=(""+(r||"P")).toLowerCase();var v=e.putOnlyUsedFonts||!1,S={},m={internal:{},__private__:{}};m.__private__.PubSub=Vu;var w="1.3",M=m.__private__.getPdfVersion=function(){return w};m.__private__.setPdfVersion=function(g){w=g};var j={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};m.__private__.getPageFormats=function(){return j};var A=m.__private__.getPageFormat=function(g){return j[g]};a=a||"a4";var L="compat",E="advanced",D=L;function q(){this.saveGraphicsState(),U(new dt($e,0,0,-$e,0,Sn()*$e).toString()+" cm"),this.setFontSize(this.getFontSize()/$e),f="n",D=E}function V(){this.restoreGraphicsState(),f="S",D=L}var K=m.__private__.combineFontStyleAndFontWeight=function(g,N){if(g=="bold"&&N=="normal"||g=="bold"&&N==400||g=="normal"&&N=="italic"||g=="bold"&&N=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return N&&(g=N==400||N==="normal"?g==="italic"?"italic":"normal":N!=700&&N!=="bold"||g!=="normal"?(N==700?"bold":N)+""+g:"bold"),g};m.advancedAPI=function(g){var N=D===L;return N&&q.call(this),typeof g!="function"||(g(this),N&&V.call(this)),this},m.compatAPI=function(g){var N=D===E;return N&&V.call(this),typeof g!="function"||(g(this),N&&q.call(this)),this},m.isAdvancedAPI=function(){return D===E};var X,I=function(g){if(D!==E)throw new Error(g+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},Z=m.roundToPrecision=m.__private__.roundToPrecision=function(g,N){var Y=t||N;if(isNaN(g)||isNaN(Y))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return g.toFixed(Y).replace(/0+$/,"")};X=m.hpf=m.__private__.hpf=typeof d=="number"?function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return Z(g,d)}:d==="smart"?function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return Z(g,g>-1&&g<1?16:5)}:function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return Z(g,16)};var _=m.f2=m.__private__.f2=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.f2");return Z(g,2)},P=m.__private__.f3=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.f3");return Z(g,3)},F=m.scale=m.__private__.scale=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.scale");return D===L?g*$e:D===E?g:void 0},$=function(g){return F(function(N){return D===L?Sn()-N:D===E?N:void 0}(g))};m.__private__.setPrecision=m.setPrecision=function(g){typeof parseInt(g,10)=="number"&&(t=parseInt(g,10))};var re,se="00000000000000000000000000000000",fe=m.__private__.getFileId=function(){return se},ne=m.__private__.setFileId=function(g){return se=g!==void 0&&/^[a-fA-F0-9]{32}$/.test(g)?g.toUpperCase():se.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),p!==null&&(Qt=new Ha(p.userPermissions,p.userPassword,p.ownerPassword,se)),se};m.setFileId=function(g){return ne(g),this},m.getFileId=function(){return fe()};var ge=m.__private__.convertDateToPDFDate=function(g){var N=g.getTimezoneOffset(),Y=N<0?"+":"-",ee=Math.floor(Math.abs(N/60)),ce=Math.abs(N%60),Se=[Y,J(ee),"'",J(ce),"'"].join("");return["D:",g.getFullYear(),J(g.getMonth()+1),J(g.getDate()),J(g.getHours()),J(g.getMinutes()),J(g.getSeconds()),Se].join("")},Me=m.__private__.convertPDFDateToDate=function(g){var N=parseInt(g.substr(2,4),10),Y=parseInt(g.substr(6,2),10)-1,ee=parseInt(g.substr(8,2),10),ce=parseInt(g.substr(10,2),10),Se=parseInt(g.substr(12,2),10),je=parseInt(g.substr(14,2),10);return new Date(N,Y,ee,ce,Se,je,0)},we=m.__private__.setCreationDate=function(g){var N;if(g===void 0&&(g=new Date),g instanceof Date)N=ge(g);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(g))throw new Error("Invalid argument passed to jsPDF.setCreationDate");N=g}return re=N},k=m.__private__.getCreationDate=function(g){var N=re;return g==="jsDate"&&(N=Me(re)),N};m.setCreationDate=function(g){return we(g),this},m.getCreationDate=function(g){return k(g)};var H,J=m.__private__.padd2=function(g){return("0"+parseInt(g)).slice(-2)},te=m.__private__.padd2Hex=function(g){return("00"+(g=g.toString())).substr(g.length)},oe=0,le=[],pe=[],ve=0,ue=[],ke=[],Te=!1,Re=pe;m.__private__.setCustomOutputDestination=function(g){Te=!0,Re=g};var de=function(g){Te||(Re=g)};m.__private__.resetCustomOutputDestination=function(){Te=!1,Re=pe};var U=m.__private__.out=function(g){return g=g.toString(),ve+=g.length+1,Re.push(g),Re},qe=m.__private__.write=function(g){return U(arguments.length===1?g.toString():Array.prototype.join.call(arguments," "))},Ye=m.__private__.getArrayBuffer=function(g){for(var N=g.length,Y=new ArrayBuffer(N),ee=new Uint8Array(Y);N--;)ee[N]=g.charCodeAt(N);return Y},De=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];m.__private__.getStandardFonts=function(){return De};var _e=e.fontSize||16;m.__private__.setFontSize=m.setFontSize=function(g){return _e=D===E?g/$e:g,this};var Ue,Pe=m.__private__.getFontSize=m.getFontSize=function(){return D===L?_e:_e*$e},Ge=e.R2L||!1;m.__private__.setR2L=m.setR2L=function(g){return Ge=g,this},m.__private__.getR2L=m.getR2L=function(){return Ge};var Fe,wt=m.__private__.setZoomMode=function(g){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(g))Ue=g;else if(isNaN(g)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(g)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+g+'" is not recognized.');Ue=g}else Ue=parseInt(g,10)};m.__private__.getZoomMode=function(){return Ue};var lt,Qe=m.__private__.setPageMode=function(g){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(g)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+g+'" is not recognized.');Fe=g};m.__private__.getPageMode=function(){return Fe};var mt=m.__private__.setLayoutMode=function(g){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(g)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+g+'" is not recognized.');lt=g};m.__private__.getLayoutMode=function(){return lt},m.__private__.setDisplayMode=m.setDisplayMode=function(g,N,Y){return wt(g),mt(N),Qe(Y),this};var et={title:"",subject:"",author:"",keywords:"",creator:""};m.__private__.getDocumentProperty=function(g){if(Object.keys(et).indexOf(g)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return et[g]},m.__private__.getDocumentProperties=function(){return et},m.__private__.setDocumentProperties=m.setProperties=m.setDocumentProperties=function(g){for(var N in et)et.hasOwnProperty(N)&&g[N]&&(et[N]=g[N]);return this},m.__private__.setDocumentProperty=function(g,N){if(Object.keys(et).indexOf(g)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return et[g]=N};var ze,$e,We,ct,St,Ve={},ut={},Mt=[],be={},He={},Be={},gt={},Ot=null,Et=0,ht=[],jt=new Vu(m),Bi=e.hotfixes||[],Sr={},Jn={},Jr=[],dt=function g(N,Y,ee,ce,Se,je){if(!(this instanceof g))return new g(N,Y,ee,ce,Se,je);isNaN(N)&&(N=1),isNaN(Y)&&(Y=0),isNaN(ee)&&(ee=0),isNaN(ce)&&(ce=1),isNaN(Se)&&(Se=0),isNaN(je)&&(je=0),this._matrix=[N,Y,ee,ce,Se,je]};Object.defineProperty(dt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(g){this._matrix[0]=g}}),Object.defineProperty(dt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(g){this._matrix[1]=g}}),Object.defineProperty(dt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(g){this._matrix[2]=g}}),Object.defineProperty(dt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(g){this._matrix[3]=g}}),Object.defineProperty(dt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(g){this._matrix[4]=g}}),Object.defineProperty(dt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(g){this._matrix[5]=g}}),Object.defineProperty(dt.prototype,"a",{get:function(){return this._matrix[0]},set:function(g){this._matrix[0]=g}}),Object.defineProperty(dt.prototype,"b",{get:function(){return this._matrix[1]},set:function(g){this._matrix[1]=g}}),Object.defineProperty(dt.prototype,"c",{get:function(){return this._matrix[2]},set:function(g){this._matrix[2]=g}}),Object.defineProperty(dt.prototype,"d",{get:function(){return this._matrix[3]},set:function(g){this._matrix[3]=g}}),Object.defineProperty(dt.prototype,"e",{get:function(){return this._matrix[4]},set:function(g){this._matrix[4]=g}}),Object.defineProperty(dt.prototype,"f",{get:function(){return this._matrix[5]},set:function(g){this._matrix[5]=g}}),Object.defineProperty(dt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(dt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(dt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(dt.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),dt.prototype.join=function(g){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(X).join(g)},dt.prototype.multiply=function(g){var N=g.sx*this.sx+g.shy*this.shx,Y=g.sx*this.shy+g.shy*this.sy,ee=g.shx*this.sx+g.sy*this.shx,ce=g.shx*this.shy+g.sy*this.sy,Se=g.tx*this.sx+g.ty*this.shx+this.tx,je=g.tx*this.shy+g.ty*this.sy+this.ty;return new dt(N,Y,ee,ce,Se,je)},dt.prototype.decompose=function(){var g=this.sx,N=this.shy,Y=this.shx,ee=this.sy,ce=this.tx,Se=this.ty,je=Math.sqrt(g*g+N*N),Ze=(g/=je)*Y+(N/=je)*ee;Y-=g*Ze,ee-=N*Ze;var tt=Math.sqrt(Y*Y+ee*ee);return Ze/=tt,g*(ee/=tt)<N*(Y/=tt)&&(g=-g,N=-N,Ze=-Ze,je=-je),{scale:new dt(je,0,0,tt,0,0),translate:new dt(1,0,0,1,ce,Se),rotate:new dt(g,N,-N,g,0,0),skew:new dt(1,0,Ze,1,0,0)}},dt.prototype.toString=function(g){return this.join(" ")},dt.prototype.inversed=function(){var g=this.sx,N=this.shy,Y=this.shx,ee=this.sy,ce=this.tx,Se=this.ty,je=1/(g*ee-N*Y),Ze=ee*je,tt=-N*je,pt=-Y*je,bt=g*je;return new dt(Ze,tt,pt,bt,-Ze*ce-pt*Se,-tt*ce-bt*Se)},dt.prototype.applyToPoint=function(g){var N=g.x*this.sx+g.y*this.shx+this.tx,Y=g.x*this.shy+g.y*this.sy+this.ty;return new Wi(N,Y)},dt.prototype.applyToRectangle=function(g){var N=this.applyToPoint(g),Y=this.applyToPoint(new Wi(g.x+g.w,g.y+g.h));return new Ko(N.x,N.y,Y.x-N.x,Y.y-N.y)},dt.prototype.clone=function(){var g=this.sx,N=this.shy,Y=this.shx,ee=this.sy,ce=this.tx,Se=this.ty;return new dt(g,N,Y,ee,ce,Se)},m.Matrix=dt;var cn=m.matrixMult=function(g,N){return N.multiply(g)},xn=new dt(1,0,0,1,0,0);m.unitMatrix=m.identityMatrix=xn;var vn=function(g,N){if(!He[g]){var Y=(N instanceof ca?"Sh":"P")+(Object.keys(be).length+1).toString(10);N.id=Y,He[g]=Y,be[Y]=N,jt.publish("addPattern",N)}};m.ShadingPattern=ca,m.TilingPattern=Ya,m.addShadingPattern=function(g,N){return I("addShadingPattern()"),vn(g,N),this},m.beginTilingPattern=function(g){I("beginTilingPattern()"),Ai(g.boundingBox[0],g.boundingBox[1],g.boundingBox[2]-g.boundingBox[0],g.boundingBox[3]-g.boundingBox[1],g.matrix)},m.endTilingPattern=function(g,N){I("endTilingPattern()"),N.stream=ke[H].join(`
`),vn(g,N),jt.publish("endTilingPattern",N),Jr.pop().restore()};var bn,Tt=m.__private__.newObject=function(){var g=Yt();return Ft(g,!0),g},Yt=m.__private__.newObjectDeferred=function(){return oe++,le[oe]=function(){return ve},oe},Ft=function(g,N){return N=typeof N=="boolean"&&N,le[g]=ve,N&&U(g+" 0 obj"),g},Qr=m.__private__.newAdditionalObject=function(){var g={objId:Yt(),content:""};return ue.push(g),g},Rn=Yt(),Er=Yt(),un=m.__private__.decodeColorString=function(g){var N=g.split(" ");if(N.length!==2||N[1]!=="g"&&N[1]!=="G")N.length!==5||N[4]!=="k"&&N[4]!=="K"||(N=[(1-N[0])*(1-N[3]),(1-N[1])*(1-N[3]),(1-N[2])*(1-N[3]),"r"]);else{var Y=parseFloat(N[0]);N=[Y,Y,Y,"r"]}for(var ee="#",ce=0;ce<3;ce++)ee+=("0"+Math.floor(255*parseFloat(N[ce])).toString(16)).slice(-2);return ee},Dr=m.__private__.encodeColorString=function(g){var N;typeof g=="string"&&(g={ch1:g});var Y=g.ch1,ee=g.ch2,ce=g.ch3,Se=g.ch4,je=g.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof Y=="string"&&Y.charAt(0)!=="#"){var Ze=new If(Y);if(Ze.ok)Y=Ze.toHex();else if(!/^\d*\.?\d*$/.test(Y))throw new Error('Invalid color "'+Y+'" passed to jsPDF.encodeColorString.')}if(typeof Y=="string"&&/^#[0-9A-Fa-f]{3}$/.test(Y)&&(Y="#"+Y[1]+Y[1]+Y[2]+Y[2]+Y[3]+Y[3]),typeof Y=="string"&&/^#[0-9A-Fa-f]{6}$/.test(Y)){var tt=parseInt(Y.substr(1),16);Y=tt>>16&255,ee=tt>>8&255,ce=255&tt}if(ee===void 0||Se===void 0&&Y===ee&&ee===ce)N=typeof Y=="string"?Y+" "+je[0]:g.precision===2?_(Y/255)+" "+je[0]:P(Y/255)+" "+je[0];else if(Se===void 0||qt(Se)==="object"){if(Se&&!isNaN(Se.a)&&Se.a===0)return["1.","1.","1.",je[1]].join(" ");N=typeof Y=="string"?[Y,ee,ce,je[1]].join(" "):g.precision===2?[_(Y/255),_(ee/255),_(ce/255),je[1]].join(" "):[P(Y/255),P(ee/255),P(ce/255),je[1]].join(" ")}else N=typeof Y=="string"?[Y,ee,ce,Se,je[2]].join(" "):g.precision===2?[_(Y),_(ee),_(ce),_(Se),je[2]].join(" "):[P(Y),P(ee),P(ce),P(Se),je[2]].join(" ");return N},Ar=m.__private__.getFilters=function(){return l},Rr=m.__private__.putStream=function(g){var N=(g=g||{}).data||"",Y=g.filters||Ar(),ee=g.alreadyAppliedFilters||[],ce=g.addLength1||!1,Se=N.length,je=g.objectId,Ze=function(dr){return dr};if(p!==null&&je===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");p!==null&&(Ze=Qt.encryptor(je,0));var tt={};Y===!0&&(Y=["FlateEncode"]);var pt=g.additionalKeyValues||[],bt=(tt=st.API.processDataByFilters!==void 0?st.API.processDataByFilters(N,Y):{data:N,reverseChain:[]}).reverseChain+(Array.isArray(ee)?ee.join(" "):ee.toString());if(tt.data.length!==0&&(pt.push({key:"Length",value:tt.data.length}),ce===!0&&pt.push({key:"Length1",value:Se})),bt.length!=0)if(bt.split("/").length-1==1)pt.push({key:"Filter",value:bt});else{pt.push({key:"Filter",value:"["+bt+"]"});for(var Nt=0;Nt<pt.length;Nt+=1)if(pt[Nt].key==="DecodeParms"){for(var Gt=[],ur=0;ur<tt.reverseChain.split("/").length-1;ur+=1)Gt.push("null");Gt.push(pt[Nt].value),pt[Nt].value="["+Gt.join(" ")+"]"}}U("<<");for(var Vt=0;Vt<pt.length;Vt++)U("/"+pt[Vt].key+" "+pt[Vt].value);U(">>"),tt.data.length!==0&&(U("stream"),U(Ze(tt.data)),U("endstream"))},Ui=m.__private__.putPage=function(g){var N=g.number,Y=g.data,ee=g.objId,ce=g.contentsObjId;Ft(ee,!0),U("<</Type /Page"),U("/Parent "+g.rootDictionaryObjId+" 0 R"),U("/Resources "+g.resourceDictionaryObjId+" 0 R"),U("/MediaBox ["+parseFloat(X(g.mediaBox.bottomLeftX))+" "+parseFloat(X(g.mediaBox.bottomLeftY))+" "+X(g.mediaBox.topRightX)+" "+X(g.mediaBox.topRightY)+"]"),g.cropBox!==null&&U("/CropBox ["+X(g.cropBox.bottomLeftX)+" "+X(g.cropBox.bottomLeftY)+" "+X(g.cropBox.topRightX)+" "+X(g.cropBox.topRightY)+"]"),g.bleedBox!==null&&U("/BleedBox ["+X(g.bleedBox.bottomLeftX)+" "+X(g.bleedBox.bottomLeftY)+" "+X(g.bleedBox.topRightX)+" "+X(g.bleedBox.topRightY)+"]"),g.trimBox!==null&&U("/TrimBox ["+X(g.trimBox.bottomLeftX)+" "+X(g.trimBox.bottomLeftY)+" "+X(g.trimBox.topRightX)+" "+X(g.trimBox.topRightY)+"]"),g.artBox!==null&&U("/ArtBox ["+X(g.artBox.bottomLeftX)+" "+X(g.artBox.bottomLeftY)+" "+X(g.artBox.topRightX)+" "+X(g.artBox.topRightY)+"]"),typeof g.userUnit=="number"&&g.userUnit!==1&&U("/UserUnit "+g.userUnit),jt.publish("putPage",{objId:ee,pageContext:ht[N],pageNumber:N,page:Y}),U("/Contents "+ce+" 0 R"),U(">>"),U("endobj");var Se=Y.join(`
`);return D===E&&(Se+=`
Q`),Ft(ce,!0),Rr({data:Se,filters:Ar(),objectId:ce}),U("endobj"),ee},Kr=m.__private__.putPages=function(){var g,N,Y=[];for(g=1;g<=Et;g++)ht[g].objId=Yt(),ht[g].contentsObjId=Yt();for(g=1;g<=Et;g++)Y.push(Ui({number:g,data:ke[g],objId:ht[g].objId,contentsObjId:ht[g].contentsObjId,mediaBox:ht[g].mediaBox,cropBox:ht[g].cropBox,bleedBox:ht[g].bleedBox,trimBox:ht[g].trimBox,artBox:ht[g].artBox,userUnit:ht[g].userUnit,rootDictionaryObjId:Rn,resourceDictionaryObjId:Er}));Ft(Rn,!0),U("<</Type /Pages");var ee="/Kids [";for(N=0;N<Et;N++)ee+=Y[N]+" 0 R ";U(ee+"]"),U("/Count "+Et),U(">>"),U("endobj"),jt.publish("postPutPages")},vi=function(g){jt.publish("putFont",{font:g,out:U,newObject:Tt,putStream:Rr}),g.isAlreadyPutted!==!0&&(g.objectNumber=Tt(),U("<<"),U("/Type /Font"),U("/BaseFont /"+$a(g.postScriptName)),U("/Subtype /Type1"),typeof g.encoding=="string"&&U("/Encoding /"+g.encoding),U("/FirstChar 32"),U("/LastChar 255"),U(">>"),U("endobj"))},bi=function(g){g.objectNumber=Tt();var N=[];N.push({key:"Type",value:"/XObject"}),N.push({key:"Subtype",value:"/Form"}),N.push({key:"BBox",value:"["+[X(g.x),X(g.y),X(g.x+g.width),X(g.y+g.height)].join(" ")+"]"}),N.push({key:"Matrix",value:"["+g.matrix.toString()+"]"});var Y=g.pages[1].join(`
`);Rr({data:Y,additionalKeyValues:N,objectId:g.objectNumber}),U("endobj")},Qn=function(g,N){N||(N=21);var Y=Tt(),ee=function(je,Ze){var tt,pt=[],bt=1/(Ze-1);for(tt=0;tt<1;tt+=bt)pt.push(tt);if(pt.push(1),je[0].offset!=0){var Nt={offset:0,color:je[0].color};je.unshift(Nt)}if(je[je.length-1].offset!=1){var Gt={offset:1,color:je[je.length-1].color};je.push(Gt)}for(var ur="",Vt=0,dr=0;dr<pt.length;dr++){for(tt=pt[dr];tt>je[Vt+1].offset;)Vt++;var hr=je[Vt].offset,ar=(tt-hr)/(je[Vt+1].offset-hr),nn=je[Vt].color,$r=je[Vt+1].color;ur+=te(Math.round((1-ar)*nn[0]+ar*$r[0]).toString(16))+te(Math.round((1-ar)*nn[1]+ar*$r[1]).toString(16))+te(Math.round((1-ar)*nn[2]+ar*$r[2]).toString(16))}return ur.trim()}(g.colors,N),ce=[];ce.push({key:"FunctionType",value:"0"}),ce.push({key:"Domain",value:"[0.0 1.0]"}),ce.push({key:"Size",value:"["+N+"]"}),ce.push({key:"BitsPerSample",value:"8"}),ce.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ce.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Rr({data:ee,additionalKeyValues:ce,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:Y}),U("endobj"),g.objectNumber=Tt(),U("<< /ShadingType "+g.type),U("/ColorSpace /DeviceRGB");var Se="/Coords ["+X(parseFloat(g.coords[0]))+" "+X(parseFloat(g.coords[1]))+" ";g.type===2?Se+=X(parseFloat(g.coords[2]))+" "+X(parseFloat(g.coords[3])):Se+=X(parseFloat(g.coords[2]))+" "+X(parseFloat(g.coords[3]))+" "+X(parseFloat(g.coords[4]))+" "+X(parseFloat(g.coords[5])),U(Se+="]"),g.matrix&&U("/Matrix ["+g.matrix.toString()+"]"),U("/Function "+Y+" 0 R"),U("/Extend [true true]"),U(">>"),U("endobj")},Kn=function(g,N){var Y=Yt(),ee=Tt();N.push({resourcesOid:Y,objectOid:ee}),g.objectNumber=ee;var ce=[];ce.push({key:"Type",value:"/Pattern"}),ce.push({key:"PatternType",value:"1"}),ce.push({key:"PaintType",value:"1"}),ce.push({key:"TilingType",value:"1"}),ce.push({key:"BBox",value:"["+g.boundingBox.map(X).join(" ")+"]"}),ce.push({key:"XStep",value:X(g.xStep)}),ce.push({key:"YStep",value:X(g.yStep)}),ce.push({key:"Resources",value:Y+" 0 R"}),g.matrix&&ce.push({key:"Matrix",value:"["+g.matrix.toString()+"]"}),Rr({data:g.stream,additionalKeyValues:ce,objectId:g.objectNumber}),U("endobj")},go=function(g){for(var N in g.objectNumber=Tt(),U("<<"),g)switch(N){case"opacity":U("/ca "+_(g[N]));break;case"stroke-opacity":U("/CA "+_(g[N]))}U(">>"),U("endobj")},wn=function(g){Ft(g.resourcesOid,!0),U("<<"),U("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var N in U("/Font <<"),Ve)Ve.hasOwnProperty(N)&&(v===!1||v===!0&&S.hasOwnProperty(N))&&U("/"+N+" "+Ve[N].objectNumber+" 0 R");U(">>")}(),function(){if(Object.keys(be).length>0){for(var N in U("/Shading <<"),be)be.hasOwnProperty(N)&&be[N]instanceof ca&&be[N].objectNumber>=0&&U("/"+N+" "+be[N].objectNumber+" 0 R");jt.publish("putShadingPatternDict"),U(">>")}}(),function(N){if(Object.keys(be).length>0){for(var Y in U("/Pattern <<"),be)be.hasOwnProperty(Y)&&be[Y]instanceof m.TilingPattern&&be[Y].objectNumber>=0&&be[Y].objectNumber<N&&U("/"+Y+" "+be[Y].objectNumber+" 0 R");jt.publish("putTilingPatternDict"),U(">>")}}(g.objectOid),function(){if(Object.keys(Be).length>0){var N;for(N in U("/ExtGState <<"),Be)Be.hasOwnProperty(N)&&Be[N].objectNumber>=0&&U("/"+N+" "+Be[N].objectNumber+" 0 R");jt.publish("putGStateDict"),U(">>")}}(),function(){for(var N in U("/XObject <<"),Sr)Sr.hasOwnProperty(N)&&Sr[N].objectNumber>=0&&U("/"+N+" "+Sr[N].objectNumber+" 0 R");jt.publish("putXobjectDict"),U(">>")}(),U(">>"),U("endobj")},xo=function(g){ut[g.fontName]=ut[g.fontName]||{},ut[g.fontName][g.fontStyle]=g.id},Hi=function(g,N,Y,ee,ce){var Se={id:"F"+(Object.keys(Ve).length+1).toString(10),postScriptName:g,fontName:N,fontStyle:Y,encoding:ee,isStandardFont:ce||!1,metadata:{}};return jt.publish("addFont",{font:Se,instance:this}),Ve[Se.id]=Se,xo(Se),Se.id},Ur=m.__private__.pdfEscape=m.pdfEscape=function(g,N){return function(Y,ee){var ce,Se,je,Ze,tt,pt,bt,Nt,Gt;if(je=(ee=ee||{}).sourceEncoding||"Unicode",tt=ee.outputEncoding,(ee.autoencode||tt)&&Ve[ze].metadata&&Ve[ze].metadata[je]&&Ve[ze].metadata[je].encoding&&(Ze=Ve[ze].metadata[je].encoding,!tt&&Ve[ze].encoding&&(tt=Ve[ze].encoding),!tt&&Ze.codePages&&(tt=Ze.codePages[0]),typeof tt=="string"&&(tt=Ze[tt]),tt)){for(bt=!1,pt=[],ce=0,Se=Y.length;ce<Se;ce++)(Nt=tt[Y.charCodeAt(ce)])?pt.push(String.fromCharCode(Nt)):pt.push(Y[ce]),pt[ce].charCodeAt(0)>>8&&(bt=!0);Y=pt.join("")}for(ce=Y.length;bt===void 0&&ce!==0;)Y.charCodeAt(ce-1)>>8&&(bt=!0),ce--;if(!bt)return Y;for(pt=ee.noBOM?[]:[254,255],ce=0,Se=Y.length;ce<Se;ce++){if((Gt=(Nt=Y.charCodeAt(ce))>>8)>>8)throw new Error("Character at position "+ce+" of string '"+Y+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");pt.push(Gt),pt.push(Nt-(Gt<<8))}return String.fromCharCode.apply(void 0,pt)}(g,N).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},wi=m.__private__.beginPage=function(g){ke[++Et]=[],ht[Et]={objId:0,contentsObjId:0,userUnit:Number(c),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(g[0]),topRightY:Number(g[1])}},Go(Et),de(ke[H])},xa=function(g,N){var Y,ee,ce;switch(r=N||r,typeof g=="string"&&(Y=A(g.toLowerCase()),Array.isArray(Y)&&(ee=Y[0],ce=Y[1])),Array.isArray(g)&&(ee=g[0]*$e,ce=g[1]*$e),isNaN(ee)&&(ee=a[0],ce=a[1]),(ee>14400||ce>14400)&&(Zt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),ee=Math.min(14400,ee),ce=Math.min(14400,ce)),a=[ee,ce],r.substr(0,1)){case"l":ce>ee&&(a=[ce,ee]);break;case"p":ee>ce&&(a=[ce,ee])}wi(a),Aa(Co),U(Fn),So!==0&&U(So+" J"),Qo!==0&&U(Qo+" j"),jt.publish("addPage",{pageNumber:Et})},vo=function(g){g>0&&g<=Et&&(ke.splice(g,1),ht.splice(g,1),Et--,H>Et&&(H=Et),this.setPage(H))},Go=function(g){g>0&&g<=Et&&(H=g)},va=m.__private__.getNumberOfPages=m.getNumberOfPages=function(){return ke.length-1},ei=function(g,N,Y){var ee,ce=void 0;return Y=Y||{},g=g!==void 0?g:Ve[ze].fontName,N=N!==void 0?N:Ve[ze].fontStyle,ee=g.toLowerCase(),ut[ee]!==void 0&&ut[ee][N]!==void 0?ce=ut[ee][N]:ut[g]!==void 0&&ut[g][N]!==void 0?ce=ut[g][N]:Y.disableWarning===!1&&Zt.warn("Unable to look up font label for font '"+g+"', '"+N+"'. Refer to getFontList() for available fonts."),ce||Y.noFallback||(ce=ut.times[N])==null&&(ce=ut.times.normal),ce},bo=m.__private__.putInfo=function(){var g=Tt(),N=function(ee){return ee};for(var Y in p!==null&&(N=Qt.encryptor(g,0)),U("<<"),U("/Producer ("+Ur(N("jsPDF "+st.version))+")"),et)et.hasOwnProperty(Y)&&et[Y]&&U("/"+Y.substr(0,1).toUpperCase()+Y.substr(1)+" ("+Ur(N(et[Y]))+")");U("/CreationDate ("+Ur(N(re))+")"),U(">>"),U("endobj")},ns=m.__private__.putCatalog=function(g){var N=(g=g||{}).rootDictionaryObjId||Rn;switch(Tt(),U("<<"),U("/Type /Catalog"),U("/Pages "+N+" 0 R"),Ue||(Ue="fullwidth"),Ue){case"fullwidth":U("/OpenAction [3 0 R /FitH null]");break;case"fullheight":U("/OpenAction [3 0 R /FitV null]");break;case"fullpage":U("/OpenAction [3 0 R /Fit]");break;case"original":U("/OpenAction [3 0 R /XYZ null null 1]");break;default:var Y=""+Ue;Y.substr(Y.length-1)==="%"&&(Ue=parseInt(Ue)/100),typeof Ue=="number"&&U("/OpenAction [3 0 R /XYZ null null "+_(Ue)+"]")}switch(lt||(lt="continuous"),lt){case"continuous":U("/PageLayout /OneColumn");break;case"single":U("/PageLayout /SinglePage");break;case"two":case"twoleft":U("/PageLayout /TwoColumnLeft");break;case"tworight":U("/PageLayout /TwoColumnRight")}Fe&&U("/PageMode /"+Fe),jt.publish("putCatalog"),U(">>"),U("endobj")},or=m.__private__.putTrailer=function(){U("trailer"),U("<<"),U("/Size "+(oe+1)),U("/Root "+oe+" 0 R"),U("/Info "+(oe-1)+" 0 R"),p!==null&&U("/Encrypt "+Qt.oid+" 0 R"),U("/ID [ <"+se+"> <"+se+"> ]"),U(">>")},Wo=m.__private__.putHeader=function(){U("%PDF-"+w),U("%ºß¬à")},ba=m.__private__.putXRef=function(){var g="0000000000";U("xref"),U("0 "+(oe+1)),U("0000000000 65535 f ");for(var N=1;N<=oe;N++)typeof le[N]=="function"?U((g+le[N]()).slice(-10)+" 00000 n "):le[N]!==void 0?U((g+le[N]).slice(-10)+" 00000 n "):U("0000000000 00000 n ")},en=m.__private__.buildDocument=function(){var g;oe=0,ve=0,pe=[],le=[],ue=[],Rn=Yt(),Er=Yt(),de(pe),jt.publish("buildDocument"),Wo(),Kr(),function(){jt.publish("putAdditionalObjects");for(var Y=0;Y<ue.length;Y++){var ee=ue[Y];Ft(ee.objId,!0),U(ee.content),U("endobj")}jt.publish("postPutAdditionalObjects")}(),g=[],function(){for(var Y in Ve)Ve.hasOwnProperty(Y)&&(v===!1||v===!0&&S.hasOwnProperty(Y))&&vi(Ve[Y])}(),function(){var Y;for(Y in Be)Be.hasOwnProperty(Y)&&go(Be[Y])}(),function(){for(var Y in Sr)Sr.hasOwnProperty(Y)&&bi(Sr[Y])}(),function(Y){var ee;for(ee in be)be.hasOwnProperty(ee)&&(be[ee]instanceof ca?Qn(be[ee]):be[ee]instanceof Ya&&Kn(be[ee],Y))}(g),jt.publish("putResources"),g.forEach(wn),wn({resourcesOid:Er,objectOid:Number.MAX_SAFE_INTEGER}),jt.publish("postPutResources"),p!==null&&(Qt.oid=Tt(),U("<<"),U("/Filter /Standard"),U("/V "+Qt.v),U("/R "+Qt.r),U("/U <"+Qt.toHexString(Qt.U)+">"),U("/O <"+Qt.toHexString(Qt.O)+">"),U("/P "+Qt.P),U(">>"),U("endobj")),bo(),ns();var N=ve;return ba(),or(),U("startxref"),U(""+N),U("%%EOF"),de(ke[H]),pe.join(`
`)},On=m.__private__.getBlob=function(g){return new Blob([Ye(g)],{type:"application/pdf"})},tn=m.output=m.__private__.output=(bn=function(g,N){switch(typeof(N=N||{})=="string"?N={filename:N}:N.filename=N.filename||"generated.pdf",g){case void 0:return en();case"save":m.save(N.filename);break;case"arraybuffer":return Ye(en());case"blob":return On(en());case"bloburi":case"bloburl":if(vt.URL!==void 0&&typeof vt.URL.createObjectURL=="function")return vt.URL&&vt.URL.createObjectURL(On(en()))||void 0;Zt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var Y="",ee=en();try{Y=Hu(ee)}catch{Y=Hu(unescape(encodeURIComponent(ee)))}return"data:application/pdf;filename="+N.filename+";base64,"+Y;case"pdfobjectnewwindow":if(Object.prototype.toString.call(vt)==="[object Window]"){var ce="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",Se=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';N.pdfObjectUrl&&(ce=N.pdfObjectUrl,Se="");var je='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ce+'"'+Se+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(N)+");<\/script></body></html>",Ze=vt.open();return Ze!==null&&Ze.document.write(je),Ze}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(vt)==="[object Window]"){var tt='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(N.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+N.filename+'" width="500px" height="400px" /></body></html>',pt=vt.open();if(pt!==null){pt.document.write(tt);var bt=this;pt.document.documentElement.querySelector("#pdfViewer").onload=function(){pt.document.title=N.filename,pt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(bt.output("bloburl"))}}return pt}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(vt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var Nt='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",N)+'"></iframe></body></html>',Gt=vt.open();if(Gt!==null&&(Gt.document.write(Nt),Gt.document.title=N.filename),Gt||typeof safari>"u")return Gt;break;case"datauri":case"dataurl":return vt.document.location.href=this.output("datauristring",N);default:return null}},bn.foo=function(){try{return bn.apply(this,arguments)}catch(Y){var g=Y.stack||"";~g.indexOf(" at ")&&(g=g.split(" at ")[1]);var N="Error in function "+g.split(`
`)[0].split("<")[0]+": "+Y.message;if(!vt.console)throw new Error(N);vt.console.error(N,Y),vt.alert&&alert(N)}},bn.foo.bar=bn,bn.foo),yi=function(g){return Array.isArray(Bi)===!0&&Bi.indexOf(g)>-1};switch(n){case"pt":$e=1;break;case"mm":$e=72/25.4;break;case"cm":$e=72/2.54;break;case"in":$e=72;break;case"px":$e=yi("px_scaling")==1?.75:96/72;break;case"pc":case"em":$e=12;break;case"ex":$e=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);$e=n}var Qt=null;we(),ne();var wo=m.__private__.getPageInfo=m.getPageInfo=function(g){if(isNaN(g)||g%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:ht[g].objId,pageNumber:g,pageContext:ht[g]}},Xo=m.__private__.getPageInfoByObjId=function(g){if(isNaN(g)||g%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var N in ht)if(ht[N].objId===g)break;return wo(N)},wa=m.__private__.getCurrentPageInfo=m.getCurrentPageInfo=function(){return{objId:ht[H].objId,pageNumber:H,pageContext:ht[H]}};m.addPage=function(){return xa.apply(this,arguments),this},m.setPage=function(){return Go.apply(this,arguments),de.call(this,ke[H]),this},m.insertPage=function(g){return this.addPage(),this.movePage(H,g),this},m.movePage=function(g,N){var Y,ee;if(g>N){Y=ke[g],ee=ht[g];for(var ce=g;ce>N;ce--)ke[ce]=ke[ce-1],ht[ce]=ht[ce-1];ke[N]=Y,ht[N]=ee,this.setPage(N)}else if(g<N){Y=ke[g],ee=ht[g];for(var Se=g;Se<N;Se++)ke[Se]=ke[Se+1],ht[Se]=ht[Se+1];ke[N]=Y,ht[N]=ee,this.setPage(N)}return this},m.deletePage=function(){return vo.apply(this,arguments),this},m.__private__.text=m.text=function(g,N,Y,ee,ce){var Se,je,Ze,tt,pt,bt,Nt,Gt,ur,Vt=(ee=ee||{}).scope||this;if(typeof g=="number"&&typeof N=="number"&&(typeof Y=="string"||Array.isArray(Y))){var dr=Y;Y=N,N=g,g=dr}if(arguments[3]instanceof dt==0?(Ze=arguments[4],tt=arguments[5],qt(Nt=arguments[3])==="object"&&Nt!==null||(typeof Ze=="string"&&(tt=Ze,Ze=null),typeof Nt=="string"&&(tt=Nt,Nt=null),typeof Nt=="number"&&(Ze=Nt,Nt=null),ee={flags:Nt,angle:Ze,align:tt})):(I("The transform parameter of text() with a Matrix value"),ur=ce),isNaN(N)||isNaN(Y)||g==null)throw new Error("Invalid arguments passed to jsPDF.text");if(g.length===0)return Vt;var hr,ar="",nn=typeof ee.lineHeightFactor=="number"?ee.lineHeightFactor:_i,$r=Vt.internal.scaleFactor;function ta(zt){return zt=zt.split("	").join(Array(ee.TabLen||9).join(" ")),Ur(zt,Nt)}function Ji(zt){for(var Wt,xr=zt.concat(),Mr=[],io=xr.length;io--;)typeof(Wt=xr.shift())=="string"?Mr.push(Wt):Array.isArray(zt)&&(Wt.length===1||Wt[1]===void 0&&Wt[2]===void 0)?Mr.push(Wt[0]):Mr.push([Wt[0],Wt[1],Wt[2]]);return Mr}function Qi(zt,Wt){var xr;if(typeof zt=="string")xr=Wt(zt)[0];else if(Array.isArray(zt)){for(var Mr,io,as=zt.concat(),Ta=[],$s=as.length;$s--;)typeof(Mr=as.shift())=="string"?Ta.push(Wt(Mr)[0]):Array.isArray(Mr)&&typeof Mr[0]=="string"&&(io=Wt(Mr[0],Mr[1],Mr[2]),Ta.push([io[0],io[1],io[2]]));xr=Ta}return xr}var ki=!1,Ki=!0;if(typeof g=="string")ki=!0;else if(Array.isArray(g)){var eo=g.concat();je=[];for(var Mi,Lr=eo.length;Lr--;)(typeof(Mi=eo.shift())!="string"||Array.isArray(Mi)&&typeof Mi[0]!="string")&&(Ki=!1);ki=Ki}if(ki===!1)throw new Error('Type of text must be string or Array. "'+g+'" is not recognized.');typeof g=="string"&&(g=g.match(/[\r?\n]/)?g.split(/\r\n|\r|\n/g):[g]);var to=_e/Vt.internal.scaleFactor,ro=to*(nn-1);switch(ee.baseline){case"bottom":Y-=ro;break;case"top":Y+=to-ro;break;case"hanging":Y+=to-2*ro;break;case"middle":Y+=to/2-ro}if((bt=ee.maxWidth||0)>0&&(typeof g=="string"?g=Vt.splitTextToSize(g,bt):Object.prototype.toString.call(g)==="[object Array]"&&(g=g.reduce(function(zt,Wt){return zt.concat(Vt.splitTextToSize(Wt,bt))},[]))),Se={text:g,x:N,y:Y,options:ee,mutex:{pdfEscape:Ur,activeFontKey:ze,fonts:Ve,activeFontSize:_e}},jt.publish("preProcessText",Se),g=Se.text,Ze=(ee=Se.options).angle,ur instanceof dt==0&&Ze&&typeof Ze=="number"){Ze*=Math.PI/180,ee.rotationDirection===0&&(Ze=-Ze),D===E&&(Ze=-Ze);var ra=Math.cos(Ze),na=Math.sin(Ze);ur=new dt(ra,na,-na,ra,0,0)}else Ze&&Ze instanceof dt&&(ur=Ze);D!==E||ur||(ur=xn),(pt=ee.charSpace||Yi)!==void 0&&(ar+=X(F(pt))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Gt=ee.horizontalScale)!==void 0&&(ar+=X(100*Gt)+` Tz
`),ee.lang;var rr=-1,oi=ee.renderingMode!==void 0?ee.renderingMode:ee.stroke,ko=Vt.internal.getCurrentPageInfo().pageContext;switch(oi){case 0:case!1:case"fill":rr=0;break;case 1:case!0:case"stroke":rr=1;break;case 2:case"fillThenStroke":rr=2;break;case 3:case"invisible":rr=3;break;case 4:case"fillAndAddForClipping":rr=4;break;case 5:case"strokeAndAddPathForClipping":rr=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":rr=6;break;case 7:case"addToPathForClipping":rr=7}var Ia=ko.usedRenderingMode!==void 0?ko.usedRenderingMode:-1;rr!==-1?ar+=rr+` Tr
`:Ia!==-1&&(ar+=`0 Tr
`),rr!==-1&&(ko.usedRenderingMode=rr),tt=ee.align||"left";var hn,ji=_e*nn,Mo=Vt.internal.pageSize.getWidth(),Q=Ve[ze];pt=ee.charSpace||Yi,bt=ee.maxWidth||0,Nt=Object.assign({autoencode:!0,noBOM:!0},ee.flags);var Ne=[],Xe=function(zt){return Vt.getStringUnitWidth(zt,{font:Q,charSpace:pt,fontSize:_e,doKerning:!1})*_e/$r};if(Object.prototype.toString.call(g)==="[object Array]"){var ft;je=Ji(g),tt!=="left"&&(hn=je.map(Xe));var _t,sr=0;if(tt==="right"){N-=hn[0],g=[],Lr=je.length;for(var kr=0;kr<Lr;kr++)kr===0?(_t=dn(N),ft=_n(Y)):(_t=F(sr-hn[kr]),ft=-ji),g.push([je[kr],_t,ft]),sr=hn[kr]}else if(tt==="center"){N-=hn[0]/2,g=[],Lr=je.length;for(var lr=0;lr<Lr;lr++)lr===0?(_t=dn(N),ft=_n(Y)):(_t=F((sr-hn[lr])/2),ft=-ji),g.push([je[lr],_t,ft]),sr=hn[lr]}else if(tt==="left"){g=[],Lr=je.length;for(var nr=0;nr<Lr;nr++)g.push(je[nr])}else if(tt==="justify"&&Q.encoding==="Identity-H"){g=[],Lr=je.length,bt=bt!==0?bt:Mo;for(var fn=0,Kt=0;Kt<Lr;Kt++)if(ft=Kt===0?_n(Y):-ji,_t=Kt===0?dn(N):fn,Kt<Lr-1){var ia=F((bt-hn[Kt])/(je[Kt].split(" ").length-1)),An=je[Kt].split(" ");g.push([An[0]+" ",_t,ft]),fn=0;for(var zn=1;zn<An.length;zn++){var jo=(Xe(An[zn-1]+" "+An[zn])-Xe(An[zn]))*$r+ia;zn==An.length-1?g.push([An[zn],jo,0]):g.push([An[zn]+" ",jo,0]),fn-=jo}}else g.push([je[Kt],_t,ft]);g.push(["",fn,0])}else{if(tt!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(g=[],Lr=je.length,bt=bt!==0?bt:Mo,Kt=0;Kt<Lr;Kt++){ft=Kt===0?_n(Y):-ji,_t=Kt===0?dn(N):0;var No=je[Kt].split(" ").length-1,Io=No>0?(bt-hn[Kt])/No:0;Kt<Lr-1?Ne.push(X(F(Io))):Ne.push(0),g.push([je[Kt],_t,ft])}}}(typeof ee.R2L=="boolean"?ee.R2L:Ge)===!0&&(g=Qi(g,function(zt,Wt,xr){return[zt.split("").reverse().join(""),Wt,xr]})),Se={text:g,x:N,y:Y,options:ee,mutex:{pdfEscape:Ur,activeFontKey:ze,fonts:Ve,activeFontSize:_e}},jt.publish("postProcessText",Se),g=Se.text,hr=Se.mutex.isHex||!1;var To=Ve[ze].encoding;To!=="WinAnsiEncoding"&&To!=="StandardEncoding"||(g=Qi(g,function(zt,Wt,xr){return[ta(zt),Wt,xr]})),je=Ji(g),g=[];for(var ai,Ni,si,no=Array.isArray(je[0])?1:0,qr="",Bn=function(zt,Wt,xr){var Mr="";return xr instanceof dt?(xr=typeof ee.angle=="number"?cn(xr,new dt(1,0,0,1,zt,Wt)):cn(new dt(1,0,0,1,zt,Wt),xr),D===E&&(xr=cn(new dt(1,0,0,-1,0,0),xr)),Mr=xr.join(" ")+` Tm
`):Mr=X(zt)+" "+X(Wt)+` Td
`,Mr},Un=0;Un<je.length;Un++){switch(qr="",no){case 1:si=(hr?"<":"(")+je[Un][0]+(hr?">":")"),ai=parseFloat(je[Un][1]),Ni=parseFloat(je[Un][2]);break;case 0:si=(hr?"<":"(")+je[Un]+(hr?">":")"),ai=dn(N),Ni=_n(Y)}Ne!==void 0&&Ne[Un]!==void 0&&(qr=Ne[Un]+` Tw
`),Un===0?g.push(qr+Bn(ai,Ni,ur)+si):no===0?g.push(qr+si):no===1&&g.push(qr+Bn(ai,Ni,ur)+si)}g=no===0?g.join(` Tj
T* `):g.join(` Tj
`),g+=` Tj
`;var Ii=`BT
/`;return Ii+=ze+" "+_e+` Tf
`,Ii+=X(_e*nn)+` TL
`,Ii+=Si+`
`,Ii+=ar,Ii+=g,U(Ii+="ET"),S[ze]=!0,Vt};var is=m.__private__.clip=m.clip=function(g){return U(g==="evenodd"?"W*":"W"),this};m.clipEvenOdd=function(){return is("evenodd")},m.__private__.discardPath=m.discardPath=function(){return U("n"),this};var Hr=m.__private__.isValidStyle=function(g){var N=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(g)!==-1&&(N=!0),N};m.__private__.setDefaultPathOperation=m.setDefaultPathOperation=function(g){return Hr(g)&&(f=g),this};var Zo=m.__private__.getStyle=m.getStyle=function(g){var N=f;switch(g){case"D":case"S":N="S";break;case"F":N="f";break;case"FD":case"DF":N="B";break;case"f":case"f*":case"B":case"B*":N=g}return N},$i=m.close=function(){return U("h"),this};m.stroke=function(){return U("S"),this},m.fill=function(g){return ti("f",g),this},m.fillEvenOdd=function(g){return ti("f*",g),this},m.fillStroke=function(g){return ti("B",g),this},m.fillStrokeEvenOdd=function(g){return ti("B*",g),this};var ti=function(g,N){qt(N)==="object"?_a(N,g):U(g)},yo=function(g){g===null||D===E&&g===void 0||(g=Zo(g),U(g))};function ya(g,N,Y,ee,ce){var Se=new Ya(N||this.boundingBox,Y||this.xStep,ee||this.yStep,this.gState,ce||this.matrix);Se.stream=this.stream;var je=g+"$$"+this.cloneIndex+++"$$";return vn(je,Se),Se}var _a=function(g,N){var Y=He[g.key],ee=be[Y];if(ee instanceof ca)U("q"),U(Ca(N)),ee.gState&&m.setGState(ee.gState),U(g.matrix.toString()+" cm"),U("/"+Y+" sh"),U("Q");else if(ee instanceof Ya){var ce=new dt(1,0,0,-1,0,Sn());g.matrix&&(ce=ce.multiply(g.matrix||xn),Y=ya.call(ee,g.key,g.boundingBox,g.xStep,g.yStep,ce).id),U("q"),U("/Pattern cs"),U("/"+Y+" scn"),ee.gState&&m.setGState(ee.gState),U(N),U("Q")}},Ca=function(g){switch(g){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},_o=m.moveTo=function(g,N){return U(X(F(g))+" "+X($(N))+" m"),this},yn=m.lineTo=function(g,N){return U(X(F(g))+" "+X($(N))+" l"),this},ri=m.curveTo=function(g,N,Y,ee,ce,Se){return U([X(F(g)),X($(N)),X(F(Y)),X($(ee)),X(F(ce)),X($(Se)),"c"].join(" ")),this};m.__private__.line=m.line=function(g,N,Y,ee,ce){if(isNaN(g)||isNaN(N)||isNaN(Y)||isNaN(ee)||!Hr(ce))throw new Error("Invalid arguments passed to jsPDF.line");return D===L?this.lines([[Y-g,ee-N]],g,N,[1,1],ce||"S"):this.lines([[Y-g,ee-N]],g,N,[1,1]).stroke()},m.__private__.lines=m.lines=function(g,N,Y,ee,ce,Se){var je,Ze,tt,pt,bt,Nt,Gt,ur,Vt,dr,hr,ar;if(typeof g=="number"&&(ar=Y,Y=N,N=g,g=ar),ee=ee||[1,1],Se=Se||!1,isNaN(N)||isNaN(Y)||!Array.isArray(g)||!Array.isArray(ee)||!Hr(ce)||typeof Se!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(_o(N,Y),je=ee[0],Ze=ee[1],pt=g.length,dr=N,hr=Y,tt=0;tt<pt;tt++)(bt=g[tt]).length===2?(dr=bt[0]*je+dr,hr=bt[1]*Ze+hr,yn(dr,hr)):(Nt=bt[0]*je+dr,Gt=bt[1]*Ze+hr,ur=bt[2]*je+dr,Vt=bt[3]*Ze+hr,dr=bt[4]*je+dr,hr=bt[5]*Ze+hr,ri(Nt,Gt,ur,Vt,dr,hr));return Se&&$i(),yo(ce),this},m.path=function(g){for(var N=0;N<g.length;N++){var Y=g[N],ee=Y.c;switch(Y.op){case"m":_o(ee[0],ee[1]);break;case"l":yn(ee[0],ee[1]);break;case"c":ri.apply(this,ee);break;case"h":$i()}}return this},m.__private__.rect=m.rect=function(g,N,Y,ee,ce){if(isNaN(g)||isNaN(N)||isNaN(Y)||isNaN(ee)||!Hr(ce))throw new Error("Invalid arguments passed to jsPDF.rect");return D===L&&(ee=-ee),U([X(F(g)),X($(N)),X(F(Y)),X(F(ee)),"re"].join(" ")),yo(ce),this},m.__private__.triangle=m.triangle=function(g,N,Y,ee,ce,Se,je){if(isNaN(g)||isNaN(N)||isNaN(Y)||isNaN(ee)||isNaN(ce)||isNaN(Se)||!Hr(je))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[Y-g,ee-N],[ce-Y,Se-ee],[g-ce,N-Se]],g,N,[1,1],je,!0),this},m.__private__.roundedRect=m.roundedRect=function(g,N,Y,ee,ce,Se,je){if(isNaN(g)||isNaN(N)||isNaN(Y)||isNaN(ee)||isNaN(ce)||isNaN(Se)||!Hr(je))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Ze=4/3*(Math.SQRT2-1);return ce=Math.min(ce,.5*Y),Se=Math.min(Se,.5*ee),this.lines([[Y-2*ce,0],[ce*Ze,0,ce,Se-Se*Ze,ce,Se],[0,ee-2*Se],[0,Se*Ze,-ce*Ze,Se,-ce,Se],[2*ce-Y,0],[-ce*Ze,0,-ce,-Se*Ze,-ce,-Se],[0,2*Se-ee],[0,-Se*Ze,ce*Ze,-Se,ce,-Se]],g+ce,N,[1,1],je,!0),this},m.__private__.ellipse=m.ellipse=function(g,N,Y,ee,ce){if(isNaN(g)||isNaN(N)||isNaN(Y)||isNaN(ee)||!Hr(ce))throw new Error("Invalid arguments passed to jsPDF.ellipse");var Se=4/3*(Math.SQRT2-1)*Y,je=4/3*(Math.SQRT2-1)*ee;return _o(g+Y,N),ri(g+Y,N-je,g+Se,N-ee,g,N-ee),ri(g-Se,N-ee,g-Y,N-je,g-Y,N),ri(g-Y,N+je,g-Se,N+ee,g,N+ee),ri(g+Se,N+ee,g+Y,N+je,g+Y,N),yo(ce),this},m.__private__.circle=m.circle=function(g,N,Y,ee){if(isNaN(g)||isNaN(N)||isNaN(Y)||!Hr(ee))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(g,N,Y,Y,ee)},m.setFont=function(g,N,Y){return Y&&(N=K(N,Y)),ze=ei(g,N,{disableWarning:!1}),this};var Sa=m.__private__.getFont=m.getFont=function(){return Ve[ei.apply(m,arguments)]};m.__private__.getFontList=m.getFontList=function(){var g,N,Y={};for(g in ut)if(ut.hasOwnProperty(g))for(N in Y[g]=[],ut[g])ut[g].hasOwnProperty(N)&&Y[g].push(N);return Y},m.addFont=function(g,N,Y,ee,ce){var Se=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&Se.indexOf(arguments[3])!==-1?ce=arguments[3]:arguments[3]&&Se.indexOf(arguments[3])==-1&&(Y=K(Y,ee)),Hi.call(this,g,N,Y,ce=ce||"Identity-H")};var _i,Co=e.lineWidth||.200025,xt=m.__private__.getLineWidth=m.getLineWidth=function(){return Co},Aa=m.__private__.setLineWidth=m.setLineWidth=function(g){return Co=g,U(X(F(g))+" w"),this};m.__private__.setLineDash=st.API.setLineDash=st.API.setLineDashPattern=function(g,N){if(g=g||[],N=N||0,isNaN(N)||!Array.isArray(g))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return g=g.map(function(Y){return X(F(Y))}).join(" "),N=X(F(N)),U("["+g+"] "+N+" d"),this};var ka=m.__private__.getLineHeight=m.getLineHeight=function(){return _e*_i};m.__private__.getLineHeight=m.getLineHeight=function(){return _e*_i};var Ma=m.__private__.setLineHeightFactor=m.setLineHeightFactor=function(g){return typeof(g=g||1.15)=="number"&&(_i=g),this},os=m.__private__.getLineHeightFactor=m.getLineHeightFactor=function(){return _i};Ma(e.lineHeight);var dn=m.__private__.getHorizontalCoordinate=function(g){return F(g)},_n=m.__private__.getVerticalCoordinate=function(g){return D===E?g:ht[H].mediaBox.topRightY-ht[H].mediaBox.bottomLeftY-F(g)},Ci=m.__private__.getHorizontalCoordinateString=m.getHorizontalCoordinateString=function(g){return X(dn(g))},Jo=m.__private__.getVerticalCoordinateString=m.getVerticalCoordinateString=function(g){return X(_n(g))},Fn=e.strokeColor||"0 G";m.__private__.getStrokeColor=m.getDrawColor=function(){return un(Fn)},m.__private__.setStrokeColor=m.setDrawColor=function(g,N,Y,ee){return Fn=Dr({ch1:g,ch2:N,ch3:Y,ch4:ee,pdfColorType:"draw",precision:2}),U(Fn),this};var qi=e.fillColor||"0 g";m.__private__.getFillColor=m.getFillColor=function(){return un(qi)},m.__private__.setFillColor=m.setFillColor=function(g,N,Y,ee){return qi=Dr({ch1:g,ch2:N,ch3:Y,ch4:ee,pdfColorType:"fill",precision:2}),U(qi),this};var Si=e.textColor||"0 g",Vi=m.__private__.getTextColor=m.getTextColor=function(){return un(Si)};m.__private__.setTextColor=m.setTextColor=function(g,N,Y,ee){return Si=Dr({ch1:g,ch2:N,ch3:Y,ch4:ee,pdfColorType:"text",precision:3}),this};var Yi=e.charSpace,ja=m.__private__.getCharSpace=m.getCharSpace=function(){return parseFloat(Yi||0)};m.__private__.setCharSpace=m.setCharSpace=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Yi=g,this};var So=0;m.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},m.__private__.setLineCap=m.setLineCap=function(g){var N=m.CapJoinStyles[g];if(N===void 0)throw new Error("Line cap style of '"+g+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return So=N,U(N+" J"),this};var Qo=0;m.__private__.setLineJoin=m.setLineJoin=function(g){var N=m.CapJoinStyles[g];if(N===void 0)throw new Error("Line join style of '"+g+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Qo=N,U(N+" j"),this},m.__private__.setLineMiterLimit=m.__private__.setMiterLimit=m.setLineMiterLimit=m.setMiterLimit=function(g){if(g=g||0,isNaN(g))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return U(X(F(g))+" M"),this},m.GState=Zl,m.setGState=function(g){(g=typeof g=="string"?Be[gt[g]]:Gi(null,g)).equals(Ot)||(U("/"+g.id+" gs"),Ot=g)};var Gi=function(g,N){if(!g||!gt[g]){var Y=!1;for(var ee in Be)if(Be.hasOwnProperty(ee)&&Be[ee].equals(N)){Y=!0;break}if(Y)N=Be[ee];else{var ce="GS"+(Object.keys(Be).length+1).toString(10);Be[ce]=N,N.id=ce}return g&&(gt[g]=N.id),jt.publish("addGState",N),N}};m.addGState=function(g,N){return Gi(g,N),this},m.saveGraphicsState=function(){return U("q"),Mt.push({key:ze,size:_e,color:Si}),this},m.restoreGraphicsState=function(){U("Q");var g=Mt.pop();return ze=g.key,_e=g.size,Si=g.color,Ot=null,this},m.setCurrentTransformationMatrix=function(g){return U(g.toString()+" cm"),this},m.comment=function(g){return U("#"+g),this};var Wi=function(g,N){var Y=g||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return Y},set:function(Se){isNaN(Se)||(Y=parseFloat(Se))}});var ee=N||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return ee},set:function(Se){isNaN(Se)||(ee=parseFloat(Se))}});var ce="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ce},set:function(Se){ce=Se.toString()}}),this},Ko=function(g,N,Y,ee){Wi.call(this,g,N),this.type="rect";var ce=Y||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ce},set:function(je){isNaN(je)||(ce=parseFloat(je))}});var Se=ee||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return Se},set:function(je){isNaN(je)||(Se=parseFloat(je))}}),this},Xi=function(){this.page=Et,this.currentPage=H,this.pages=ke.slice(0),this.pagesContext=ht.slice(0),this.x=We,this.y=ct,this.matrix=St,this.width=Na(H),this.height=Cn(H),this.outputDestination=Re,this.id="",this.objectNumber=-1};Xi.prototype.restore=function(){Et=this.page,H=this.currentPage,ht=this.pagesContext,ke=this.pages,We=this.x,ct=this.y,St=this.matrix,ii(H,this.width),rn(H,this.height),Re=this.outputDestination};var Ai=function(g,N,Y,ee,ce){Jr.push(new Xi),Et=H=0,ke=[],We=g,ct=N,St=ce,wi([Y,ee])};for(var ni in m.beginFormObject=function(g,N,Y,ee,ce){return Ai(g,N,Y,ee,ce),this},m.endFormObject=function(g){return function(N){if(Jn[N])Jr.pop().restore();else{var Y=new Xi,ee="Xo"+(Object.keys(Sr).length+1).toString(10);Y.id=ee,Jn[N]=ee,Sr[ee]=Y,jt.publish("addFormObject",Y),Jr.pop().restore()}}(g),this},m.doFormObject=function(g,N){var Y=Sr[Jn[g]];return U("q"),U(N.toString()+" cm"),U("/"+Y.id+" Do"),U("Q"),this},m.getFormObject=function(g){var N=Sr[Jn[g]];return{x:N.x,y:N.y,width:N.width,height:N.height,matrix:N.matrix}},m.save=function(g,N){return g=g||"generated.pdf",(N=N||{}).returnPromise=N.returnPromise||!1,N.returnPromise===!1?(la(On(en()),g),typeof la.unload=="function"&&vt.setTimeout&&setTimeout(la.unload,911),this):new Promise(function(Y,ee){try{var ce=la(On(en()),g);typeof la.unload=="function"&&vt.setTimeout&&setTimeout(la.unload,911),Y(ce)}catch(Se){ee(Se.message)}})},st.API)st.API.hasOwnProperty(ni)&&(ni==="events"&&st.API.events.length?function(g,N){var Y,ee,ce;for(ce=N.length-1;ce!==-1;ce--)Y=N[ce][0],ee=N[ce][1],g.subscribe.apply(g,[Y].concat(typeof ee=="function"?[ee]:ee))}(jt,st.API.events):m[ni]=st.API[ni]);function Na(g){return ht[g].mediaBox.topRightX-ht[g].mediaBox.bottomLeftX}function ii(g,N){ht[g].mediaBox.topRightX=N+ht[g].mediaBox.bottomLeftX}function Cn(g){return ht[g].mediaBox.topRightY-ht[g].mediaBox.bottomLeftY}function rn(g,N){ht[g].mediaBox.topRightY=N+ht[g].mediaBox.bottomLeftY}var Zi=m.getPageWidth=function(g){return Na(g=g||H)/$e},Ao=m.setPageWidth=function(g,N){ii(g,N*$e)},Sn=m.getPageHeight=function(g){return Cn(g=g||H)/$e},ea=m.setPageHeight=function(g,N){rn(g,N*$e)};return m.internal={pdfEscape:Ur,getStyle:Zo,getFont:Sa,getFontSize:Pe,getCharSpace:ja,getTextColor:Vi,getLineHeight:ka,getLineHeightFactor:os,getLineWidth:xt,write:qe,getHorizontalCoordinate:dn,getVerticalCoordinate:_n,getCoordinateString:Ci,getVerticalCoordinateString:Jo,collections:{},newObject:Tt,newAdditionalObject:Qr,newObjectDeferred:Yt,newObjectDeferredBegin:Ft,getFilters:Ar,putStream:Rr,events:jt,scaleFactor:$e,pageSize:{getWidth:function(){return Zi(H)},setWidth:function(g){Ao(H,g)},getHeight:function(){return Sn(H)},setHeight:function(g){ea(H,g)}},encryptionOptions:p,encryption:Qt,getEncryptor:function(g){return p!==null?Qt.encryptor(g,0):function(N){return N}},output:tn,getNumberOfPages:va,pages:ke,out:U,f2:_,f3:P,getPageInfo:wo,getPageInfoByObjId:Xo,getCurrentPageInfo:wa,getPDFVersion:M,Point:Wi,Rectangle:Ko,Matrix:dt,hasHotfix:yi},Object.defineProperty(m.internal.pageSize,"width",{get:function(){return Zi(H)},set:function(g){Ao(H,g)},enumerable:!0,configurable:!0}),Object.defineProperty(m.internal.pageSize,"height",{get:function(){return Sn(H)},set:function(g){ea(H,g)},enumerable:!0,configurable:!0}),(function(g){for(var N=0,Y=De.length;N<Y;N++){var ee=Hi.call(this,g[N][0],g[N][1],g[N][2],De[N][3],!0);v===!1&&(S[ee]=!0);var ce=g[N][0].split("-");xo({id:ee,fontName:ce[0],fontStyle:ce[1]||""})}jt.publish("addFonts",{fonts:Ve,dictionary:ut})}).call(m,De),ze="F1",xa(a,r),jt.publish("initialized"),m}Ha.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},Ha.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Ha.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},Ha.prototype.processOwnerPassword=function(e,t){return Gc(Yc(t).substr(0,5),e)},Ha.prototype.encryptor=function(e,t){var r=Yc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return Gc(r,n)}},Zl.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||qt(e)!==qt(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},st.API={events:[]},st.version="3.0.3";var gr=st.API,S0=1,ga=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Ra=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},yt=function(e){return e.toFixed(2)},Bo=function(e){return e.toFixed(5)};gr.__acroform__={};var gn=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},Yu=function(e){return e*S0},Li=function(e){var t=new Ef,r=Ke.internal.getHeight(e)||0,n=Ke.internal.getWidth(e)||0;return t.BBox=[0,0,Number(yt(n)),Number(yt(r))],t},Yb=gr.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},Gb=gr.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},Wb=gr.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},yr=gr.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return Wb(e,t-1)},_r=gr.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return Yb(e,t-1)},Cr=gr.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return Gb(e,t-1)},Xb=gr.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,a=e[0],s=e[1],l=e[2],c=e[3],d={};return d.lowerLeft_X=r(a)||0,d.lowerLeft_Y=n(s+c)||0,d.upperRight_X=r(a+l)||0,d.upperRight_Y=n(s)||0,[Number(yt(d.lowerLeft_X)),Number(yt(d.lowerLeft_Y)),Number(yt(d.upperRight_X)),Number(yt(d.upperRight_Y))]},Zb=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=Wc(e,r),a=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+a+" "+yt(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var s=Li(e);return s.scope=e.scope,s.stream=t.join(`
`),s}},Wc=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},a=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");a=e.multiline?a.map(function(_){return _.split(`
`)}):a.map(function(_){return[_]});var s=r,l=Ke.internal.getHeight(e)||0;l=l<0?-l:l;var c=Ke.internal.getWidth(e)||0;c=c<0?-c:c;var d=function(_,P,F){if(_+1<a.length){var $=P+" "+a[_+1][0];return kl($,e,F).width<=c-4}return!1};s++;e:for(;s>0;){t="",s--;var f,p,v=kl("3",e,s).height,S=e.multiline?l-s:(l-v)/2,m=S+=2,w=0,M=0,j=0;if(s<=0){t=`(...) Tj
`,t+="% Width of Text: "+kl(t,e,s=12).width+", FieldWidth:"+c+`
`;break}for(var A="",L=0,E=0;E<a.length;E++)if(a.hasOwnProperty(E)){var D=!1;if(a[E].length!==1&&j!==a[E].length-1){if((v+2)*(L+2)+2>l)continue e;A+=a[E][j],D=!0,M=E,E--}else{A=(A+=a[E][j]+" ").substr(A.length-1)==" "?A.substr(0,A.length-1):A;var q=parseInt(E),V=d(q,A,s),K=E>=a.length-1;if(V&&!K){A+=" ",j=0;continue}if(V||K){if(K)M=q;else if(e.multiline&&(v+2)*(L+2)+2>l)continue e}else{if(!e.multiline||(v+2)*(L+2)+2>l)continue e;M=q}}for(var X="",I=w;I<=M;I++){var Z=a[I];if(e.multiline){if(I===M){X+=Z[j]+" ",j=(j+1)%Z.length;continue}if(I===w){X+=Z[Z.length-1]+" ";continue}}X+=Z[0]+" "}switch(X=X.substr(X.length-1)==" "?X.substr(0,X.length-1):X,p=kl(X,e,s).width,e.textAlign){case"right":f=c-p-2;break;case"center":f=(c-p)/2;break;default:f=2}t+=yt(f)+" "+yt(m)+` Td
`,t+="("+ga(X)+`) Tj
`,t+=-yt(f)+` 0 Td
`,m=-(s+2),p=0,w=D?M:M+1,L++,A=""}break}return n.text=t,n.fontSize=s,n},kl=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),a=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:a}},Jb={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},Qb=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},Kb=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(gi.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(Jb)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");S0=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new Df,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var a in n)if(n.hasOwnProperty(a)){var s=n[a];s.objId=void 0,s.hasAnnotation&&Qb(s,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,a){var s=!n;for(var l in n||(a.internal.newObjectDeferredBegin(a.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),a.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||a.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(l)){var c=n[l],d=[],f=c.Rect;if(c.Rect&&(c.Rect=Xb(c.Rect,a)),a.internal.newObjectDeferredBegin(c.objId,!0),c.DA=Ke.createDefaultAppearanceStream(c),qt(c)==="object"&&typeof c.getKeyValueListForStream=="function"&&(d=c.getKeyValueListForStream()),c.Rect=f,c.hasAppearanceStream&&!c.appearanceStreamContent){var p=Zb(c);d.push({key:"AP",value:"<</N "+p+">>"}),a.internal.acroformPlugin.xForms.push(p)}if(c.appearanceStreamContent){var v="";for(var S in c.appearanceStreamContent)if(c.appearanceStreamContent.hasOwnProperty(S)){var m=c.appearanceStreamContent[S];if(v+="/"+S+" ",v+="<<",Object.keys(m).length>=1||Array.isArray(m)){for(var l in m)if(m.hasOwnProperty(l)){var w=m[l];typeof w=="function"&&(w=w.call(a,c)),v+="/"+l+" "+w+" ",a.internal.acroformPlugin.xForms.indexOf(w)>=0||a.internal.acroformPlugin.xForms.push(w)}}else typeof(w=m)=="function"&&(w=w.call(a,c)),v+="/"+l+" "+w,a.internal.acroformPlugin.xForms.indexOf(w)>=0||a.internal.acroformPlugin.xForms.push(w);v+=">>"}d.push({key:"AP",value:`<<
`+v+">>"})}a.internal.putStream({additionalKeyValues:d,objectId:c.objId}),a.internal.out("endobj")}s&&function(M,j){for(var A in M)if(M.hasOwnProperty(A)){var L=A,E=M[A];j.internal.newObjectDeferredBegin(E.objId,!0),qt(E)==="object"&&typeof E.putStream=="function"&&E.putStream(),delete M[L]}}(a.internal.acroformPlugin.xForms,a)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},Pf=gr.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(l){return l};if(Array.isArray(e)){for(var a="[",s=0;s<e.length;s++)switch(s!==0&&(a+=" "),qt(e[s])){case"boolean":case"number":case"object":a+=e[s].toString();break;case"string":e[s].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),a+="("+ga(n(e[s].toString()))+")"):a+=e[s].toString()}return a+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},nc=function(e,t,r){var n=function(a){return a};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+ga(n(e))+")"},Di=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Di.prototype.toString=function(){return this.objId+" 0 R"},Di.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Di.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(s){return s!="content"&&s!="appearanceStreamContent"&&s!="scope"&&s!="objId"&&s.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],a=this[n];a&&(Array.isArray(a)?e.push({key:n,value:Pf(a,this.objId,this.scope)}):a instanceof Di?(a.scope=this.scope,e.push({key:n,value:a.objId+" 0 R"})):typeof a!="function"&&e.push({key:n,value:a}))}return e};var Ef=function(){Di.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};gn(Ef,Di);var Df=function(){Di.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+ga(r(e))+")"}},set:function(r){e=r}})};gn(Df,Di);var gi=function e(){Di.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(A){if(isNaN(A))throw new Error('Invalid value "'+A+'" for attribute F supplied.');t=A}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!yr(t,3)},set:function(A){A?this.F=_r(t,3):this.F=Cr(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(A){if(isNaN(A))throw new Error('Invalid value "'+A+'" for attribute Ff supplied.');r=A}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(A){n=A!==void 0?A:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(A){n[0]=A}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(A){n[1]=A}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(A){n[2]=A}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(A){n[3]=A}});var a="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return a},set:function(A){switch(A){case"/Btn":case"/Tx":case"/Ch":case"/Sig":a=A;break;default:throw new Error('Invalid value "'+A+'" for attribute FT supplied.')}}});var s=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!s||s.length<1){if(this instanceof Jl)return;s="FieldObject"+e.FieldNum++}var A=function(L){return L};return this.scope&&(A=this.scope.internal.getEncryptor(this.objId)),"("+ga(A(s))+")"},set:function(A){s=A.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return s},set:function(A){s=A}});var l="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return l},set:function(A){l=A}});var c="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return c},set:function(A){c=A}});var d=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return d},set:function(A){d=A}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/S0:f},set:function(A){f=A}});var p="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return p},set:function(A){p=A}});var v="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!v||this instanceof Jl||this instanceof ua))return nc(v,this.objId,this.scope)},set:function(A){A=A.toString(),v=A}});var S=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(S)return this instanceof Pr==0?nc(S,this.objId,this.scope):S},set:function(A){A=A.toString(),S=this instanceof Pr==0?A.substr(0,1)==="("?Ra(A.substr(1,A.length-2)):Ra(A):A}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof Pr==1?Ra(S.substr(1,S.length-1)):S},set:function(A){A=A.toString(),S=this instanceof Pr==1?"/"+A:A}});var m=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(m)return m},set:function(A){this.V=A}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(m)return this instanceof Pr==0?nc(m,this.objId,this.scope):m},set:function(A){A=A.toString(),m=this instanceof Pr==0?A.substr(0,1)==="("?Ra(A.substr(1,A.length-2)):Ra(A):A}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof Pr==1?Ra(m.substr(1,m.length-1)):m},set:function(A){A=A.toString(),m=this instanceof Pr==1?"/"+A:A}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var w,M=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return M},set:function(A){A=!!A,M=A}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(w)return w},set:function(A){w=A}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,1)},set:function(A){A?this.Ff=_r(this.Ff,1):this.Ff=Cr(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,2)},set:function(A){A?this.Ff=_r(this.Ff,2):this.Ff=Cr(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,3)},set:function(A){A?this.Ff=_r(this.Ff,3):this.Ff=Cr(this.Ff,3)}});var j=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(j!==null)return j},set:function(A){if([0,1,2].indexOf(A)===-1)throw new Error('Invalid value "'+A+'" for attribute Q supplied.');j=A}}),Object.defineProperty(this,"textAlign",{get:function(){var A;switch(j){case 0:default:A="left";break;case 1:A="center";break;case 2:A="right"}return A},configurable:!0,enumerable:!0,set:function(A){switch(A){case"right":case 2:j=2;break;case"center":case 1:j=1;break;default:j=0}}})};gn(gi,Di);var Ga=function(){gi.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return Pf(t,this.objId,this.scope)},set:function(r){var n,a;a=[],typeof(n=r)=="string"&&(a=function(s,l,c){c||(c=1);for(var d,f=[];d=l.exec(s);)f.push(d[c]);return f}(n,/\((.*?)\)/g)),t=a}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,18)},set:function(r){r?this.Ff=_r(this.Ff,18):this.Ff=Cr(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=_r(this.Ff,19):this.Ff=Cr(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,20)},set:function(r){r?(this.Ff=_r(this.Ff,20),t.sort()):this.Ff=Cr(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,22)},set:function(r){r?this.Ff=_r(this.Ff,22):this.Ff=Cr(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,23)},set:function(r){r?this.Ff=_r(this.Ff,23):this.Ff=Cr(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,27)},set:function(r){r?this.Ff=_r(this.Ff,27):this.Ff=Cr(this.Ff,27)}}),this.hasAppearanceStream=!1};gn(Ga,gi);var Wa=function(){Ga.call(this),this.fontName="helvetica",this.combo=!1};gn(Wa,Ga);var Xa=function(){Wa.call(this),this.combo=!0};gn(Xa,Wa);var Ul=function(){Xa.call(this),this.edit=!0};gn(Ul,Xa);var Pr=function(){gi.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,15)},set:function(r){r?this.Ff=_r(this.Ff,15):this.Ff=Cr(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,16)},set:function(r){r?this.Ff=_r(this.Ff,16):this.Ff=Cr(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,17)},set:function(r){r?this.Ff=_r(this.Ff,17):this.Ff=Cr(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,26)},set:function(r){r?this.Ff=_r(this.Ff,26):this.Ff=Cr(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(s){return s};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,a=[];for(n in a.push("<<"),t)a.push("/"+n+" ("+ga(r(t[n]))+")");return a.push(">>"),a.join(`
`)}},set:function(r){qt(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};gn(Pr,gi);var Hl=function(){Pr.call(this),this.pushButton=!0};gn(Hl,Pr);var Za=function(){Pr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};gn(Za,Pr);var Jl=function(){var e,t;gi.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(a){e=a}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(a){t=a}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var a=function(c){return c};this.scope&&(a=this.scope.internal.getEncryptor(this.objId));var s,l=[];for(s in l.push("<<"),n)l.push("/"+s+" ("+ga(a(n[s]))+")");return l.push(">>"),l.join(`
`)},set:function(a){qt(a)==="object"&&(n=a)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(a){typeof a=="string"&&(n.CA=a)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(a){r=a}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(a){r="/"+a}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Ke.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};gn(Jl,gi),Za.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},Za.prototype.createOption=function(e){var t=new Jl;return t.Parent=this,t.optionName=e,this.Kids.push(t),e9.call(this.scope,t),t};var $l=function(){Pr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Ke.CheckBox.createAppearanceStream()};gn($l,Pr);var ua=function(){gi.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,13)},set:function(t){t?this.Ff=_r(this.Ff,13):this.Ff=Cr(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,21)},set:function(t){t?this.Ff=_r(this.Ff,21):this.Ff=Cr(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,23)},set:function(t){t?this.Ff=_r(this.Ff,23):this.Ff=Cr(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,24)},set:function(t){t?this.Ff=_r(this.Ff,24):this.Ff=Cr(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,25)},set:function(t){t?this.Ff=_r(this.Ff,25):this.Ff=Cr(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,26)},set:function(t){t?this.Ff=_r(this.Ff,26):this.Ff=Cr(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};gn(ua,gi);var ql=function(){ua.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,14)},set:function(e){e?this.Ff=_r(this.Ff,14):this.Ff=Cr(this.Ff,14)}}),this.password=!0};gn(ql,ua);var Ke={CheckBox:{createAppearanceStream:function(){return{N:{On:Ke.CheckBox.YesNormal},D:{On:Ke.CheckBox.YesPushDown,Off:Ke.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=Li(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,a=e.scope.__private__.encodeColorString(e.color),s=Wc(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+yt(Ke.internal.getWidth(e))+" "+yt(Ke.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+yt(s.fontSize)+" Tf "+a),r.push("BT"),r.push(s.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=Li(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),a=[],s=Ke.internal.getHeight(e),l=Ke.internal.getWidth(e),c=Wc(e,e.caption);return a.push("1 g"),a.push("0 0 "+yt(l)+" "+yt(s)+" re"),a.push("f"),a.push("q"),a.push("0 0 1 rg"),a.push("0 0 "+yt(l-1)+" "+yt(s-1)+" re"),a.push("W"),a.push("n"),a.push("0 g"),a.push("BT"),a.push("/"+r+" "+yt(c.fontSize)+" Tf "+n),a.push(c.text),a.push("ET"),a.push("Q"),t.stream=a.join(`
`),t},OffPushDown:function(e){var t=Li(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+yt(Ke.internal.getWidth(e))+" "+yt(Ke.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Ke.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Ke.RadioButton.Circle.YesNormal,t.D[e]=Ke.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=Li(e);t.scope=e.scope;var r=[],n=Ke.internal.getWidth(e)<=Ke.internal.getHeight(e)?Ke.internal.getWidth(e)/4:Ke.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var a=Ke.internal.Bezier_C,s=Number((n*a).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+Bo(Ke.internal.getWidth(e)/2)+" "+Bo(Ke.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+s+" "+s+" "+n+" 0 "+n+" c"),r.push("-"+s+" "+n+" -"+n+" "+s+" -"+n+" 0 c"),r.push("-"+n+" -"+s+" -"+s+" -"+n+" 0 -"+n+" c"),r.push(s+" -"+n+" "+n+" -"+s+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Li(e);t.scope=e.scope;var r=[],n=Ke.internal.getWidth(e)<=Ke.internal.getHeight(e)?Ke.internal.getWidth(e)/4:Ke.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var a=Number((2*n).toFixed(5)),s=Number((a*Ke.internal.Bezier_C).toFixed(5)),l=Number((n*Ke.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Bo(Ke.internal.getWidth(e)/2)+" "+Bo(Ke.internal.getHeight(e)/2)+" cm"),r.push(a+" 0 m"),r.push(a+" "+s+" "+s+" "+a+" 0 "+a+" c"),r.push("-"+s+" "+a+" -"+a+" "+s+" -"+a+" 0 c"),r.push("-"+a+" -"+s+" -"+s+" -"+a+" 0 -"+a+" c"),r.push(s+" -"+a+" "+a+" -"+s+" "+a+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+Bo(Ke.internal.getWidth(e)/2)+" "+Bo(Ke.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+l+" "+l+" "+n+" 0 "+n+" c"),r.push("-"+l+" "+n+" -"+n+" "+l+" -"+n+" 0 c"),r.push("-"+n+" -"+l+" -"+l+" -"+n+" 0 -"+n+" c"),r.push(l+" -"+n+" "+n+" -"+l+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=Li(e);t.scope=e.scope;var r=[],n=Ke.internal.getWidth(e)<=Ke.internal.getHeight(e)?Ke.internal.getWidth(e)/4:Ke.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var a=Number((2*n).toFixed(5)),s=Number((a*Ke.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Bo(Ke.internal.getWidth(e)/2)+" "+Bo(Ke.internal.getHeight(e)/2)+" cm"),r.push(a+" 0 m"),r.push(a+" "+s+" "+s+" "+a+" 0 "+a+" c"),r.push("-"+s+" "+a+" -"+a+" "+s+" -"+a+" 0 c"),r.push("-"+a+" -"+s+" -"+s+" -"+a+" 0 -"+a+" c"),r.push(s+" -"+a+" "+a+" -"+s+" "+a+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Ke.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Ke.RadioButton.Cross.YesNormal,t.D[e]=Ke.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=Li(e);t.scope=e.scope;var r=[],n=Ke.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+yt(Ke.internal.getWidth(e)-2)+" "+yt(Ke.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(yt(n.x1.x)+" "+yt(n.x1.y)+" m"),r.push(yt(n.x2.x)+" "+yt(n.x2.y)+" l"),r.push(yt(n.x4.x)+" "+yt(n.x4.y)+" m"),r.push(yt(n.x3.x)+" "+yt(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Li(e);t.scope=e.scope;var r=Ke.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+yt(Ke.internal.getWidth(e))+" "+yt(Ke.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+yt(Ke.internal.getWidth(e)-2)+" "+yt(Ke.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(yt(r.x1.x)+" "+yt(r.x1.y)+" m"),n.push(yt(r.x2.x)+" "+yt(r.x2.y)+" l"),n.push(yt(r.x4.x)+" "+yt(r.x4.y)+" m"),n.push(yt(r.x3.x)+" "+yt(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=Li(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+yt(Ke.internal.getWidth(e))+" "+yt(Ke.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Ke.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Ke.internal.getWidth(e),r=Ke.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Ke.internal.getWidth=function(e){var t=0;return qt(e)==="object"&&(t=Yu(e.Rect[2])),t},Ke.internal.getHeight=function(e){var t=0;return qt(e)==="object"&&(t=Yu(e.Rect[3])),t};var e9=gr.addField=function(e){if(Kb(this,e),!(e instanceof gi))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};gr.AcroFormChoiceField=Ga,gr.AcroFormListBox=Wa,gr.AcroFormComboBox=Xa,gr.AcroFormEditBox=Ul,gr.AcroFormButton=Pr,gr.AcroFormPushButton=Hl,gr.AcroFormRadioButton=Za,gr.AcroFormCheckBox=$l,gr.AcroFormTextField=ua,gr.AcroFormPasswordField=ql,gr.AcroFormAppearance=Ke,gr.AcroForm={ChoiceField:Ga,ListBox:Wa,ComboBox:Xa,EditBox:Ul,Button:Pr,PushButton:Hl,RadioButton:Za,CheckBox:$l,TextField:ua,PasswordField:ql,Appearance:Ke},st.AcroForm={ChoiceField:Ga,ListBox:Wa,ComboBox:Xa,EditBox:Ul,Button:Pr,PushButton:Hl,RadioButton:Za,CheckBox:$l,TextField:ua,PasswordField:ql,Appearance:Ke};st.AcroForm;function Rf(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},a=e.__addimage__.getImageFileTypeByImageData=function(_,P){var F,$,re,se,fe,ne=r;if((P=P||r)==="RGBA"||_.data!==void 0&&_.data instanceof Uint8ClampedArray&&"height"in _&&"width"in _)return"RGBA";if(V(_))for(fe in n)for(re=n[fe],F=0;F<re.length;F+=1){for(se=!0,$=0;$<re[F].length;$+=1)if(re[F][$]!==void 0&&re[F][$]!==_[$]){se=!1;break}if(se===!0){ne=fe;break}}else for(fe in n)for(re=n[fe],F=0;F<re.length;F+=1){for(se=!0,$=0;$<re[F].length;$+=1)if(re[F][$]!==void 0&&re[F][$]!==_.charCodeAt($)){se=!1;break}if(se===!0){ne=fe;break}}return ne===r&&P!==r&&(ne=P),ne},s=function _(P){for(var F=this.internal.write,$=this.internal.putStream,re=(0,this.internal.getFilters)();re.indexOf("FlateEncode")!==-1;)re.splice(re.indexOf("FlateEncode"),1);P.objectId=this.internal.newObject();var se=[];if(se.push({key:"Type",value:"/XObject"}),se.push({key:"Subtype",value:"/Image"}),se.push({key:"Width",value:P.width}),se.push({key:"Height",value:P.height}),P.colorSpace===A.INDEXED?se.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(P.palette.length/3-1)+" "+("sMask"in P&&P.sMask!==void 0?P.objectId+2:P.objectId+1)+" 0 R]"}):(se.push({key:"ColorSpace",value:"/"+P.colorSpace}),P.colorSpace===A.DEVICE_CMYK&&se.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),se.push({key:"BitsPerComponent",value:P.bitsPerComponent}),"decodeParameters"in P&&P.decodeParameters!==void 0&&se.push({key:"DecodeParms",value:"<<"+P.decodeParameters+">>"}),"transparency"in P&&Array.isArray(P.transparency)&&P.transparency.length>0){for(var fe="",ne=0,ge=P.transparency.length;ne<ge;ne++)fe+=P.transparency[ne]+" "+P.transparency[ne]+" ";se.push({key:"Mask",value:"["+fe+"]"})}P.sMask!==void 0&&se.push({key:"SMask",value:P.objectId+1+" 0 R"});var Me=P.filter!==void 0?["/"+P.filter]:void 0;if($({data:P.data,additionalKeyValues:se,alreadyAppliedFilters:Me,objectId:P.objectId}),F("endobj"),"sMask"in P&&P.sMask!==void 0){var we,k=(we=P.sMaskBitsPerComponent)!==null&&we!==void 0?we:P.bitsPerComponent,H={width:P.width,height:P.height,colorSpace:"DeviceGray",bitsPerComponent:k,data:P.sMask};"filter"in P&&(H.decodeParameters="/Predictor ".concat(P.predictor," /Colors 1 /BitsPerComponent ").concat(k," /Columns ").concat(P.width),H.filter=P.filter),_.call(this,H)}if(P.colorSpace===A.INDEXED){var J=this.internal.newObject();$({data:X(new Uint8Array(P.palette)),objectId:J}),F("endobj")}},l=function(){var _=this.internal.collections[t+"images"];for(var P in _)s.call(this,_[P])},c=function(){var _,P=this.internal.collections[t+"images"],F=this.internal.write;for(var $ in P)F("/I"+(_=P[$]).index,_.objectId,"0","R")},d=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",l),this.internal.events.subscribe("putXobjectDict",c))},f=function(){var _=this.internal.collections[t+"images"];return d.call(this),_},p=function(){return Object.keys(this.internal.collections[t+"images"]).length},v=function(_){return typeof e["process"+_.toUpperCase()]=="function"},S=function(_){return qt(_)==="object"&&_.nodeType===1},m=function(_,P){if(_.nodeName==="IMG"&&_.hasAttribute("src")){var F=""+_.getAttribute("src");if(F.indexOf("data:image/")===0)return Bl(unescape(F).split("base64,").pop());var $=e.loadFile(F,!0);if($!==void 0)return $}if(_.nodeName==="CANVAS"){if(_.width===0||_.height===0)throw new Error("Given canvas must have data. Canvas width: "+_.width+", height: "+_.height);var re;switch(P){case"PNG":re="image/png";break;case"WEBP":re="image/webp";break;default:re="image/jpeg"}return Bl(_.toDataURL(re,1).split("base64,").pop())}},w=function(_){var P=this.internal.collections[t+"images"];if(P){for(var F in P)if(_===P[F].alias)return P[F]}},M=function(_,P,F){return _||P||(_=-96,P=-96),_<0&&(_=-1*F.width*72/_/this.internal.scaleFactor),P<0&&(P=-1*F.height*72/P/this.internal.scaleFactor),_===0&&(_=P*F.width/F.height),P===0&&(P=_*F.height/F.width),[_,P]},j=function(_,P,F,$,re,se){var fe=M.call(this,F,$,re),ne=this.internal.getCoordinateString,ge=this.internal.getVerticalCoordinateString,Me=f.call(this);if(F=fe[0],$=fe[1],Me[re.index]=re,se){se*=Math.PI/180;var we=Math.cos(se),k=Math.sin(se),H=function(te){return te.toFixed(4)},J=[H(we),H(k),H(-1*k),H(we),0,0,"cm"]}this.internal.write("q"),se?(this.internal.write([1,"0","0",1,ne(_),ge(P+$),"cm"].join(" ")),this.internal.write(J.join(" ")),this.internal.write([ne(F),"0","0",ne($),"0","0","cm"].join(" "))):this.internal.write([ne(F),"0","0",ne($),ne(_),ge(P+$),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+re.index+" Do"),this.internal.write("Q")},A=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var L=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},E=e.__addimage__.sHashCode=function(_){var P,F,$=0;if(typeof _=="string")for(F=_.length,P=0;P<F;P++)$=($<<5)-$+_.charCodeAt(P),$|=0;else if(V(_))for(F=_.byteLength/2,P=0;P<F;P++)$=($<<5)-$+_[P],$|=0;return $},D=e.__addimage__.validateStringAsBase64=function(_){(_=_||"").toString().trim();var P=!0;return _.length===0&&(P=!1),_.length%4!=0&&(P=!1),/^[A-Za-z0-9+/]+$/.test(_.substr(0,_.length-2))===!1&&(P=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(_.substr(-2))===!1&&(P=!1),P},q=e.__addimage__.extractImageFromDataUrl=function(_){if(_==null||!(_=_.trim()).startsWith("data:"))return null;var P=_.indexOf(",");return P<0?null:_.substring(0,P).trim().endsWith("base64")?_.substring(P+1):null};e.__addimage__.isArrayBuffer=function(_){return _ instanceof ArrayBuffer};var V=e.__addimage__.isArrayBufferView=function(_){return _ instanceof Int8Array||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int16Array||_ instanceof Uint16Array||_ instanceof Int32Array||_ instanceof Uint32Array||_ instanceof Float32Array||_ instanceof Float64Array},K=e.__addimage__.binaryStringToUint8Array=function(_){for(var P=_.length,F=new Uint8Array(P),$=0;$<P;$++)F[$]=_.charCodeAt($);return F},X=e.__addimage__.arrayBufferToBinaryString=function(_){for(var P="",F=V(_)?_:new Uint8Array(_),$=0;$<F.length;$+=8192)P+=String.fromCharCode.apply(null,F.subarray($,$+8192));return P};e.addImage=function(){var _,P,F,$,re,se,fe,ne,ge;if(typeof arguments[1]=="number"?(P=r,F=arguments[1],$=arguments[2],re=arguments[3],se=arguments[4],fe=arguments[5],ne=arguments[6],ge=arguments[7]):(P=arguments[1],F=arguments[2],$=arguments[3],re=arguments[4],se=arguments[5],fe=arguments[6],ne=arguments[7],ge=arguments[8]),qt(_=arguments[0])==="object"&&!S(_)&&"imageData"in _){var Me=_;_=Me.imageData,P=Me.format||P||r,F=Me.x||F||0,$=Me.y||$||0,re=Me.w||Me.width||re,se=Me.h||Me.height||se,fe=Me.alias||fe,ne=Me.compression||ne,ge=Me.rotation||Me.angle||ge}var we=this.internal.getFilters();if(ne===void 0&&we.indexOf("FlateEncode")!==-1&&(ne="SLOW"),isNaN(F)||isNaN($))throw new Error("Invalid coordinates passed to jsPDF.addImage");d.call(this);var k=I.call(this,_,P,fe,ne);return j.call(this,F,$,re,se,k,ge),this};var I=function(_,P,F,$){var re,se,fe;if(typeof _=="string"&&a(_)===r){_=unescape(_);var ne=Z(_,!1);(ne!==""||(ne=e.loadFile(_,!0))!==void 0)&&(_=ne)}if(S(_)&&(_=m(_,P)),P=a(_,P),!v(P))throw new Error("addImage does not support files of type '"+P+"', please ensure that a plugin for '"+P+"' support is added.");if(((fe=F)==null||fe.length===0)&&(F=function(ge){return typeof ge=="string"||V(ge)?E(ge):V(ge.data)?E(ge.data):null}(_)),(re=w.call(this,F))||(_ instanceof Uint8Array||P==="RGBA"||(se=_,_=K(_)),re=this["process"+P.toUpperCase()](_,p.call(this),F,function(ge){return ge&&typeof ge=="string"&&(ge=ge.toUpperCase()),ge in e.image_compression?ge:L.NONE}($),se)),!re)throw new Error("An unknown error occurred whilst processing the image.");return re},Z=e.__addimage__.convertBase64ToBinaryString=function(_,P){P=typeof P!="boolean"||P;var F,$="";if(typeof _=="string"){var re;F=(re=q(_))!==null&&re!==void 0?re:_;try{$=Bl(F)}catch(se){if(P)throw D(F)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+se.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return $};e.getImageProperties=function(_){var P,F,$="";if(S(_)&&(_=m(_)),typeof _=="string"&&a(_)===r&&(($=Z(_,!1))===""&&($=e.loadFile(_)||""),_=$),F=a(_),!v(F))throw new Error("addImage does not support files of type '"+F+"', please ensure that a plugin for '"+F+"' support is added.");if(_ instanceof Uint8Array||(_=K(_)),!(P=this["process"+F.toUpperCase()](_)))throw new Error("An unknown error occurred whilst processing the image");return P.fileType=F,P}})(st.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};st.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,a,s,l=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,d=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,p=!1,v=0;v<f.length&&!p;v++)switch((n=f[v]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(p=!0);break;case"reference":case"text":case"freetext":p=!0}if(p!=0){this.internal.write("/Annots [");for(var S=0;S<f.length;S++){n=f[S];var m=this.internal.pdfEscape,w=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var M=this.internal.newAdditionalObject(),j=this.internal.newAdditionalObject(),A=this.internal.getEncryptor(M.objId),L=n.title||"Note";s="<</Type /Annot /Subtype /Text "+(a="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y)+"] ")+"/Contents ("+m(A(n.contents))+")",s+=" /Popup "+j.objId+" 0 R",s+=" /P "+d.objId+" 0 R",s+=" /T ("+m(A(L))+") >>",M.content=s;var E=M.objId+" 0 R";s="<</Type /Annot /Subtype /Popup "+(a="/Rect ["+l(n.bounds.x+30)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w+30)+" "+c(n.bounds.y)+"] ")+" /Parent "+E,n.open&&(s+=" /Open true"),s+=" >>",j.content=s,this.internal.write(M.objId,"0 R",j.objId,"0 R");break;case"freetext":a="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y+n.bounds.h)+"] ";var D=n.color||"#000000";s="<</Type /Annot /Subtype /FreeText "+a+"/Contents ("+m(w(n.contents))+")",s+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+D+")",s+=" /Border [0 0 0]",s+=" >>",this.internal.write(s);break;case"link":if(n.options.name){var q=this.annotations._nameMap[n.options.name];n.options.pageNumber=q.page,n.options.top=q.y}else n.options.top||(n.options.top=0);if(a="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",s="",n.options.url)s="<</Type /Annot /Subtype /Link "+a+"/Border [0 0 0] /A <</S /URI /URI ("+m(w(n.options.url))+") >>";else if(n.options.pageNumber)switch(s="<</Type /Annot /Subtype /Link "+a+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":s+=" /Fit]";break;case"FitH":s+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,s+=" /FitV "+n.options.left+"]";break;default:var V=c(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),s+=" /XYZ "+n.options.left+" "+V+" "+n.options.zoom+"]"}s!=""&&(s+=" >>",this.internal.write(s))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,a,s,l){var c=this.internal.getCurrentPageInfo(),d=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;c.pageContext.annotations.push({finalBounds:{x:d(r),y:f(n),w:d(r+a),h:f(n+s)},options:l,type:"link"})},e.textWithLink=function(r,n,a,s){var l,c,d=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(s.maxWidth!==void 0){c=s.maxWidth;var p=this.splitTextToSize(r,c).length;l=Math.ceil(f*p)}else c=d,l=f;return this.text(r,n,a,s),a+=.2*f,s.align==="center"&&(n-=d/2),s.align==="right"&&(n-=d),this.link(n,a-f,c,l,s),d},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(st.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},a=[1570,1571,1573,1575];e.__arabicParser__={};var s=e.__arabicParser__.isInArabicSubstitutionA=function(M){return t[M.charCodeAt(0)]!==void 0},l=e.__arabicParser__.isArabicLetter=function(M){return typeof M=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(M)},c=e.__arabicParser__.isArabicEndLetter=function(M){return l(M)&&s(M)&&t[M.charCodeAt(0)].length<=2},d=e.__arabicParser__.isArabicAlfLetter=function(M){return l(M)&&a.indexOf(M.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(M){return l(M)&&s(M)&&t[M.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(M){return l(M)&&s(M)&&t[M.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(M){return l(M)&&s(M)&&t[M.charCodeAt(0)].length>=3};var p=e.__arabicParser__.arabicLetterHasMedialForm=function(M){return l(M)&&s(M)&&t[M.charCodeAt(0)].length==4},v=e.__arabicParser__.resolveLigatures=function(M){var j=0,A=r,L="",E=0;for(j=0;j<M.length;j+=1)A[M.charCodeAt(j)]!==void 0?(E++,typeof(A=A[M.charCodeAt(j)])=="number"&&(L+=String.fromCharCode(A),A=r,E=0),j===M.length-1&&(A=r,L+=M.charAt(j-(E-1)),j-=E-1,E=0)):(A=r,L+=M.charAt(j-E),j-=E,E=0);return L};e.__arabicParser__.isArabicDiacritic=function(M){return M!==void 0&&n[M.charCodeAt(0)]!==void 0};var S=e.__arabicParser__.getCorrectForm=function(M,j,A){return l(M)?s(M)===!1?-1:!f(M)||!l(j)&&!l(A)||!l(A)&&c(j)||c(M)&&!l(j)||c(M)&&d(j)||c(M)&&c(j)?0:p(M)&&l(j)&&!c(j)&&l(A)&&f(A)?3:c(M)||!l(A)?1:2:-1},m=function(M){var j=0,A=0,L=0,E="",D="",q="",V=(M=M||"").split("\\s+"),K=[];for(j=0;j<V.length;j+=1){for(K.push(""),A=0;A<V[j].length;A+=1)E=V[j][A],D=V[j][A-1],q=V[j][A+1],l(E)?(L=S(E,D,q),K[j]+=L!==-1?String.fromCharCode(t[E.charCodeAt(0)][L]):E):K[j]+=E;K[j]=v(K[j])}return K.join(" ")},w=e.__arabicParser__.processArabic=e.processArabic=function(){var M,j=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,A=[];if(Array.isArray(j)){var L=0;for(A=[],L=0;L<j.length;L+=1)Array.isArray(j[L])?A.push([m(j[L][0]),j[L][1],j[L][2]]):A.push([m(j[L])]);M=A}else M=m(j);return typeof arguments[0]=="string"?M:(arguments[0].text=M,arguments[0])};e.events.push(["preProcessText",w])}(st.API),st.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(c){r=c}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(c){n=isNaN(c)||Number.isInteger(c)===!1||c<0?150:c,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var a=300;Object.defineProperty(this,"height",{get:function(){return a},set:function(c){a=isNaN(c)||Number.isInteger(c)===!1||c<0?300:c,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=a+1)}});var s=[];Object.defineProperty(this,"childNodes",{get:function(){return s},set:function(c){s=c}});var l={};Object.defineProperty(this,"style",{get:function(){return l},set:function(c){l=c}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var a;if((r=r||"2d")!=="2d")return null;for(a in n)this.pdf.context2d.hasOwnProperty(a)&&(this.pdf.context2d[a]=n[a]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(st.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),a.call(this))},a=function(){this.internal.__cell__.lastCell=new s,this.internal.__cell__.pages=1},s=function(){var d=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return d},set:function(M){d=M}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(M){f=M}});var p=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return p},set:function(M){p=M}});var v=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return v},set:function(M){v=M}});var S=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return S},set:function(M){S=M}});var m=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return m},set:function(M){m=M}});var w=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return w},set:function(M){w=M}}),this};s.prototype.clone=function(){return new s(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},s.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(d){return n.call(this),this.internal.__cell__.headerFunction=typeof d=="function"?d:void 0,this},e.getTextDimensions=function(d,f){n.call(this);var p=(f=f||{}).fontSize||this.getFontSize(),v=f.font||this.getFont(),S=f.scaleFactor||this.internal.scaleFactor,m=0,w=0,M=0,j=this;if(!Array.isArray(d)&&typeof d!="string"){if(typeof d!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");d=String(d)}var A=f.maxWidth;A>0?typeof d=="string"?d=this.splitTextToSize(d,A):Object.prototype.toString.call(d)==="[object Array]"&&(d=d.reduce(function(E,D){return E.concat(j.splitTextToSize(D,A))},[])):d=Array.isArray(d)?d:[d];for(var L=0;L<d.length;L++)m<(M=this.getStringUnitWidth(d[L],{font:v})*p)&&(m=M);return m!==0&&(w=d.length),{w:m/=S,h:Math.max((w*p*this.getLineHeightFactor()-p*(this.getLineHeightFactor()-1))/S,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var d=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new s(d.left,d.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var l=e.cell=function(){var d;d=arguments[0]instanceof s?arguments[0]:new s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,p=this.internal.__cell__.padding,v=this.internal.__cell__.margins||t,S=this.internal.__cell__.tableHeaderRow,m=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===d.lineNumber?(d.x=(f.x||0)+(f.width||0),d.y=f.y||0):f.y+f.height+d.height+v.bottom>this.getPageHeight()?(this.cellAddPage(),d.y=v.top,m&&S&&(this.printHeaderRow(d.lineNumber,!0),d.y+=S[0].height)):d.y=f.y+f.height||d.y),d.text[0]!==void 0&&(this.rect(d.x,d.y,d.width,d.height,r===!0?"FD":void 0),d.align==="right"?this.text(d.text,d.x+d.width-p,d.y+p,{align:"right",baseline:"top"}):d.align==="center"?this.text(d.text,d.x+d.width/2,d.y+p,{align:"center",baseline:"top",maxWidth:d.width-p-p}):this.text(d.text,d.x+p,d.y+p,{align:"left",baseline:"top",maxWidth:d.width-p-p})),this.internal.__cell__.lastCell=d,this};e.table=function(d,f,p,v,S){if(n.call(this),!p)throw new Error("No data for PDF table.");var m,w,M,j,A=[],L=[],E=[],D={},q={},V=[],K=[],X=(S=S||{}).autoSize||!1,I=S.printHeaders!==!1,Z=S.css&&S.css["font-size"]!==void 0?16*S.css["font-size"]:S.fontSize||12,_=S.margins||Object.assign({width:this.getPageWidth()},t),P=typeof S.padding=="number"?S.padding:3,F=S.headerBackgroundColor||"#c8c8c8",$=S.headerTextColor||"#000";if(a.call(this),this.internal.__cell__.printHeaders=I,this.internal.__cell__.margins=_,this.internal.__cell__.table_font_size=Z,this.internal.__cell__.padding=P,this.internal.__cell__.headerBackgroundColor=F,this.internal.__cell__.headerTextColor=$,this.setFontSize(Z),v==null)L=A=Object.keys(p[0]),E=A.map(function(){return"left"});else if(Array.isArray(v)&&qt(v[0])==="object")for(A=v.map(function(Me){return Me.name}),L=v.map(function(Me){return Me.prompt||Me.name||""}),E=v.map(function(Me){return Me.align||"left"}),m=0;m<v.length;m+=1)q[v[m].name]=.7499990551181103*v[m].width;else Array.isArray(v)&&typeof v[0]=="string"&&(L=A=v,E=A.map(function(){return"left"}));if(X||Array.isArray(v)&&typeof v[0]=="string")for(m=0;m<A.length;m+=1){for(D[j=A[m]]=p.map(function(Me){return Me[j]}),this.setFont(void 0,"bold"),V.push(this.getTextDimensions(L[m],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),w=D[j],this.setFont(void 0,"normal"),M=0;M<w.length;M+=1)V.push(this.getTextDimensions(w[M],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);q[j]=Math.max.apply(null,V)+P+P,V=[]}if(I){var re={};for(m=0;m<A.length;m+=1)re[A[m]]={},re[A[m]].text=L[m],re[A[m]].align=E[m];var se=c.call(this,re,q);K=A.map(function(Me){return new s(d,f,q[Me],se,re[Me].text,void 0,re[Me].align)}),this.setTableHeaderRow(K),this.printHeaderRow(1,!1)}var fe=v.reduce(function(Me,we){return Me[we.name]=we.align,Me},{});for(m=0;m<p.length;m+=1){"rowStart"in S&&S.rowStart instanceof Function&&S.rowStart({row:m,data:p[m]},this);var ne=c.call(this,p[m],q);for(M=0;M<A.length;M+=1){var ge=p[m][A[M]];"cellStart"in S&&S.cellStart instanceof Function&&S.cellStart({row:m,col:M,data:ge},this),l.call(this,new s(d,f,q[A[M]],ne,ge,m+2,fe[A[M]]))}}return this.internal.__cell__.table_x=d,this.internal.__cell__.table_y=f,this};var c=function(d,f){var p=this.internal.__cell__.padding,v=this.internal.__cell__.table_font_size,S=this.internal.scaleFactor;return Object.keys(d).map(function(m){var w=d[m];return this.splitTextToSize(w.hasOwnProperty("text")?w.text:w,f[m]-p-p)},this).map(function(m){return this.getLineHeightFactor()*m.length*v/S+p+p},this).reduce(function(m,w){return Math.max(m,w)},0)};e.setTableHeaderRow=function(d){n.call(this),this.internal.__cell__.tableHeaderRow=d},e.printHeaderRow=function(d,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var p;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var v=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new s(v[0],v[1],v[2],v[3],void 0,-1)}this.setFont(void 0,"bold");for(var S=[],m=0;m<this.internal.__cell__.tableHeaderRow.length;m+=1){p=this.internal.__cell__.tableHeaderRow[m].clone(),f&&(p.y=this.internal.__cell__.margins.top||0,S.push(p)),p.lineNumber=d;var w=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),l.call(this,p),this.setTextColor(w)}S.length>0&&this.setTableHeaderRow(S),this.setFont(void 0,"normal"),r=!1}}(st.API);var Of={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},Ff=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],Xc=Rf(Ff),zf=[100,200,300,400,500,600,700,800,900],t9=Rf(zf);function ic(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(s){return Of[s=s||"normal"]?s:"normal"}(e.style),n=function(s){return s?typeof s=="number"?s>=100&&s<=900&&s%100==0?s:400:/^\d00$/.test(s)?parseInt(s):s==="bold"?700:400:400}(e.weight),a=function(s){return typeof Xc[s=s||"normal"]=="number"?s:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:a,src:e.src||[],ref:e.ref||{name:t,style:[a,r,n].join(" ")}}}function Gu(e,t,r,n){var a;for(a=r;a>=0&&a<t.length;a+=n)if(e[t[a]])return e[t[a]];for(a=r;a>=0&&a<t.length;a-=n)if(e[t[a]])return e[t[a]]}var r9={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Wu={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Xu(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function Zu(e){return e.trimLeft()}function n9(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function i9(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var Ml,Ju,Qu,Oa,jl,Ku,ed,td,oc=["times"];function rd(e,t,r,n,a){var s=4,l=id;switch(a){case st.API.image_compression.FAST:s=1,l=nd;break;case st.API.image_compression.MEDIUM:s=6,l=od;break;case st.API.image_compression.SLOW:s=9,l=ad}e=function(d,f,p,v){for(var S,m=d.length/f,w=new Uint8Array(d.length+m),M=[o9,nd,id,od,ad],j=0;j<m;j+=1){var A=j*f,L=d.subarray(A,A+f);if(v)w.set(v(L,p,S),A+j);else{for(var E=M.length,D=[],q=0;q<E;q+=1)D[q]=M[q](L,p,S);var V=s9(D.concat());w.set(D[V],A+j)}S=L}return w}(e,t,Math.ceil(r*n/8),l);var c=Hc(e,{level:s});return st.API.__addimage__.arrayBufferToBinaryString(c)}function o9(e){var t=Array.apply([],e);return t.unshift(0),t}function nd(e,t){var r=e.length,n=[];n[0]=1;for(var a=0;a<r;a+=1){var s=e[a-t]||0;n[a+1]=e[a]-s+256&255}return n}function id(e,t,r){var n=e.length,a=[];a[0]=2;for(var s=0;s<n;s+=1){var l=r&&r[s]||0;a[s+1]=e[s]-l+256&255}return a}function od(e,t,r){var n=e.length,a=[];a[0]=3;for(var s=0;s<n;s+=1){var l=e[s-t]||0,c=r&&r[s]||0;a[s+1]=e[s]+256-(l+c>>>1)&255}return a}function ad(e,t,r){var n=e.length,a=[];a[0]=4;for(var s=0;s<n;s+=1){var l=a9(e[s-t]||0,r&&r[s]||0,r&&r[s-t]||0);a[s+1]=e[s]-l+256&255}return a}function a9(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),a=Math.abs(e-r),s=Math.abs(e+t-r-r);return n<=a&&n<=s?e:a<=s?t:r}function s9(e){var t=e.map(function(r){return r.reduce(function(n,a){return n+Math.abs(a)},0)});return t.indexOf(Math.min.apply(null,t))}function ac(e,t,r){var n=t*r,a=Math.floor(n/8),s=16-(n-8*a+r),l=(1<<r)-1;return Bf(e,a)>>s&l}function sd(e,t,r,n){var a=r*n,s=Math.floor(a/8),l=16-(a-8*s+n),c=(1<<n)-1,d=(t&c)<<l;(function(f,p,v){if(p+1<f.byteLength)f.setUint16(p,v,!1);else{var S=v>>8&255;f.setUint8(p,S)}})(e,s,Bf(e,s)&~(c<<l)&65535|d)}function Bf(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function l9(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,a=e[t++],s=a>>7,l=1<<1+(7&a);e[t++],e[t++];var c=null,d=null;s&&(c=t,d=l,t+=3*l);var f=!0,p=[],v=0,S=null,m=0,w=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,w=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((_=e[t++])>=0))throw Error("Invalid block size");if(_===0)break;t+=_}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var M=e[t++];v=e[t++]|e[t++]<<8,S=e[t++],1&M||(S=null),m=M>>2&7,t++;break;case 254:for(;;){if(!((_=e[t++])>=0))throw Error("Invalid block size");if(_===0)break;t+=_}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var j=e[t++]|e[t++]<<8,A=e[t++]|e[t++]<<8,L=e[t++]|e[t++]<<8,E=e[t++]|e[t++]<<8,D=e[t++],q=D>>6&1,V=1<<1+(7&D),K=c,X=d,I=!1;D>>7&&(I=!0,K=t,X=V,t+=3*V);var Z=t;for(t++;;){var _;if(!((_=e[t++])>=0))throw Error("Invalid block size");if(_===0)break;t+=_}p.push({x:j,y:A,width:L,height:E,has_local_palette:I,palette_offset:K,palette_size:X,data_offset:Z,data_length:t-Z,transparent_index:S,interlaced:!!q,delay:v,disposal:m});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return p.length},this.loopCount=function(){return w},this.frameInfo=function(P){if(P<0||P>=p.length)throw new Error("Frame index out of range.");return p[P]},this.decodeAndBlitFrameBGRA=function(P,F){var $=this.frameInfo(P),re=$.width*$.height,se=new Uint8Array(re);ld(e,$.data_offset,se,re);var fe=$.palette_offset,ne=$.transparent_index;ne===null&&(ne=256);var ge=$.width,Me=r-ge,we=ge,k=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),J=k,te=4*Me;$.interlaced===!0&&(te+=4*r*7);for(var oe=8,le=0,pe=se.length;le<pe;++le){var ve=se[le];if(we===0&&(we=ge,(J+=te)>=H&&(te=4*Me+4*r*(oe-1),J=k+(ge+Me)*(oe<<1),oe>>=1)),ve===ne)J+=4;else{var ue=e[fe+3*ve],ke=e[fe+3*ve+1],Te=e[fe+3*ve+2];F[J++]=Te,F[J++]=ke,F[J++]=ue,F[J++]=255}--we}},this.decodeAndBlitFrameRGBA=function(P,F){var $=this.frameInfo(P),re=$.width*$.height,se=new Uint8Array(re);ld(e,$.data_offset,se,re);var fe=$.palette_offset,ne=$.transparent_index;ne===null&&(ne=256);var ge=$.width,Me=r-ge,we=ge,k=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),J=k,te=4*Me;$.interlaced===!0&&(te+=4*r*7);for(var oe=8,le=0,pe=se.length;le<pe;++le){var ve=se[le];if(we===0&&(we=ge,(J+=te)>=H&&(te=4*Me+4*r*(oe-1),J=k+(ge+Me)*(oe<<1),oe>>=1)),ve===ne)J+=4;else{var ue=e[fe+3*ve],ke=e[fe+3*ve+1],Te=e[fe+3*ve+2];F[J++]=ue,F[J++]=ke,F[J++]=Te,F[J++]=255}--we}}}function ld(e,t,r,n){for(var a=e[t++],s=1<<a,l=s+1,c=l+1,d=a+1,f=(1<<d)-1,p=0,v=0,S=0,m=e[t++],w=new Int32Array(4096),M=null;;){for(;p<16&&m!==0;)v|=e[t++]<<p,p+=8,m===1?m=e[t++]:--m;if(p<d)break;var j=v&f;if(v>>=d,p-=d,j!==s){if(j===l)break;for(var A=j<c?j:M,L=0,E=A;E>s;)E=w[E]>>8,++L;var D=E;if(S+L+(A!==j?1:0)>n)return void Zt.log("Warning, gif stream longer than expected.");r[S++]=D;var q=S+=L;for(A!==j&&(r[S++]=D),E=A;L--;)E=w[E],r[--q]=255&E,E>>=8;M!==null&&c<4096&&(w[c++]=M<<8|D,c>=f+1&&d<12&&(++d,f=f<<1|1)),M=j}else c=l+1,f=(1<<(d=a+1))-1,M=null}return S!==n&&Zt.log("Warning, gif stream shorter than expected."),r}/**
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
*/function sc(e){var t,r,n,a,s,l=Math.floor,c=new Array(64),d=new Array(64),f=new Array(64),p=new Array(64),v=new Array(65535),S=new Array(65535),m=new Array(64),w=new Array(64),M=[],j=0,A=7,L=new Array(64),E=new Array(64),D=new Array(64),q=new Array(256),V=new Array(2048),K=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],X=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],I=[0,1,2,3,4,5,6,7,8,9,10,11],Z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],_=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],P=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],F=[0,1,2,3,4,5,6,7,8,9,10,11],$=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],re=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function se(k,H){for(var J=0,te=0,oe=new Array,le=1;le<=16;le++){for(var pe=1;pe<=k[le];pe++)oe[H[te]]=[],oe[H[te]][0]=J,oe[H[te]][1]=le,te++,J++;J*=2}return oe}function fe(k){for(var H=k[0],J=k[1]-1;J>=0;)H&1<<J&&(j|=1<<A),J--,--A<0&&(j==255?(ne(255),ne(0)):ne(j),A=7,j=0)}function ne(k){M.push(k)}function ge(k){ne(k>>8&255),ne(255&k)}function Me(k,H,J,te,oe){for(var le,pe=oe[0],ve=oe[240],ue=function(_e,Ue){var Pe,Ge,Fe,wt,lt,Qe,mt,et,ze,$e,We=0;for(ze=0;ze<8;++ze){Pe=_e[We],Ge=_e[We+1],Fe=_e[We+2],wt=_e[We+3],lt=_e[We+4],Qe=_e[We+5],mt=_e[We+6];var ct=Pe+(et=_e[We+7]),St=Pe-et,Ve=Ge+mt,ut=Ge-mt,Mt=Fe+Qe,be=Fe-Qe,He=wt+lt,Be=wt-lt,gt=ct+He,Ot=ct-He,Et=Ve+Mt,ht=Ve-Mt;_e[We]=gt+Et,_e[We+4]=gt-Et;var jt=.707106781*(ht+Ot);_e[We+2]=Ot+jt,_e[We+6]=Ot-jt;var Bi=.382683433*((gt=Be+be)-(ht=ut+St)),Sr=.5411961*gt+Bi,Jn=1.306562965*ht+Bi,Jr=.707106781*(Et=be+ut),dt=St+Jr,cn=St-Jr;_e[We+5]=cn+Sr,_e[We+3]=cn-Sr,_e[We+1]=dt+Jn,_e[We+7]=dt-Jn,We+=8}for(We=0,ze=0;ze<8;++ze){Pe=_e[We],Ge=_e[We+8],Fe=_e[We+16],wt=_e[We+24],lt=_e[We+32],Qe=_e[We+40],mt=_e[We+48];var xn=Pe+(et=_e[We+56]),vn=Pe-et,bn=Ge+mt,Tt=Ge-mt,Yt=Fe+Qe,Ft=Fe-Qe,Qr=wt+lt,Rn=wt-lt,Er=xn+Qr,un=xn-Qr,Dr=bn+Yt,Ar=bn-Yt;_e[We]=Er+Dr,_e[We+32]=Er-Dr;var Rr=.707106781*(Ar+un);_e[We+16]=un+Rr,_e[We+48]=un-Rr;var Ui=.382683433*((Er=Rn+Ft)-(Ar=Tt+vn)),Kr=.5411961*Er+Ui,vi=1.306562965*Ar+Ui,bi=.707106781*(Dr=Ft+Tt),Qn=vn+bi,Kn=vn-bi;_e[We+40]=Kn+Kr,_e[We+24]=Kn-Kr,_e[We+8]=Qn+vi,_e[We+56]=Qn-vi,We++}for(ze=0;ze<64;++ze)$e=_e[ze]*Ue[ze],m[ze]=$e>0?$e+.5|0:$e-.5|0;return m}(k,H),ke=0;ke<64;++ke)w[K[ke]]=ue[ke];var Te=w[0]-J;J=w[0],Te==0?fe(te[0]):(fe(te[S[le=32767+Te]]),fe(v[le]));for(var Re=63;Re>0&&w[Re]==0;)Re--;if(Re==0)return fe(pe),J;for(var de,U=1;U<=Re;){for(var qe=U;w[U]==0&&U<=Re;)++U;var Ye=U-qe;if(Ye>=16){de=Ye>>4;for(var De=1;De<=de;++De)fe(ve);Ye&=15}le=32767+w[U],fe(oe[(Ye<<4)+S[le]]),fe(v[le]),U++}return Re!=63&&fe(pe),J}function we(k){k=Math.min(Math.max(k,1),100),s!=k&&(function(H){for(var J=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],te=0;te<64;te++){var oe=l((J[te]*H+50)/100);oe=Math.min(Math.max(oe,1),255),c[K[te]]=oe}for(var le=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],pe=0;pe<64;pe++){var ve=l((le[pe]*H+50)/100);ve=Math.min(Math.max(ve,1),255),d[K[pe]]=ve}for(var ue=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],ke=0,Te=0;Te<8;Te++)for(var Re=0;Re<8;Re++)f[ke]=1/(c[K[ke]]*ue[Te]*ue[Re]*8),p[ke]=1/(d[K[ke]]*ue[Te]*ue[Re]*8),ke++}(k<50?Math.floor(5e3/k):Math.floor(200-2*k)),s=k)}this.encode=function(k,H){H&&we(H),M=new Array,j=0,A=7,ge(65496),ge(65504),ge(16),ne(74),ne(70),ne(73),ne(70),ne(0),ne(1),ne(1),ne(0),ge(1),ge(1),ne(0),ne(0),function(){ge(65499),ge(132),ne(0);for(var Ge=0;Ge<64;Ge++)ne(c[Ge]);ne(1);for(var Fe=0;Fe<64;Fe++)ne(d[Fe])}(),function(Ge,Fe){ge(65472),ge(17),ne(8),ge(Fe),ge(Ge),ne(3),ne(1),ne(17),ne(0),ne(2),ne(17),ne(1),ne(3),ne(17),ne(1)}(k.width,k.height),function(){ge(65476),ge(418),ne(0);for(var Ge=0;Ge<16;Ge++)ne(X[Ge+1]);for(var Fe=0;Fe<=11;Fe++)ne(I[Fe]);ne(16);for(var wt=0;wt<16;wt++)ne(Z[wt+1]);for(var lt=0;lt<=161;lt++)ne(_[lt]);ne(1);for(var Qe=0;Qe<16;Qe++)ne(P[Qe+1]);for(var mt=0;mt<=11;mt++)ne(F[mt]);ne(17);for(var et=0;et<16;et++)ne($[et+1]);for(var ze=0;ze<=161;ze++)ne(re[ze])}(),ge(65498),ge(12),ne(3),ne(1),ne(0),ne(2),ne(17),ne(3),ne(17),ne(0),ne(63),ne(0);var J=0,te=0,oe=0;j=0,A=7,this.encode.displayName="_encode_";for(var le,pe,ve,ue,ke,Te,Re,de,U,qe=k.data,Ye=k.width,De=k.height,_e=4*Ye,Ue=0;Ue<De;){for(le=0;le<_e;){for(ke=_e*Ue+le,Re=-1,de=0,U=0;U<64;U++)Te=ke+(de=U>>3)*_e+(Re=4*(7&U)),Ue+de>=De&&(Te-=_e*(Ue+1+de-De)),le+Re>=_e&&(Te-=le+Re-_e+4),pe=qe[Te++],ve=qe[Te++],ue=qe[Te++],L[U]=(V[pe]+V[ve+256|0]+V[ue+512|0]>>16)-128,E[U]=(V[pe+768|0]+V[ve+1024|0]+V[ue+1280|0]>>16)-128,D[U]=(V[pe+1280|0]+V[ve+1536|0]+V[ue+1792|0]>>16)-128;J=Me(L,f,J,t,n),te=Me(E,p,te,r,a),oe=Me(D,p,oe,r,a),le+=32}Ue+=8}if(A>=0){var Pe=[];Pe[1]=A+1,Pe[0]=(1<<A+1)-1,fe(Pe)}return ge(65497),new Uint8Array(M)},e=e||50,function(){for(var k=String.fromCharCode,H=0;H<256;H++)q[H]=k(H)}(),t=se(X,I),r=se(P,F),n=se(Z,_),a=se($,re),function(){for(var k=1,H=2,J=1;J<=15;J++){for(var te=k;te<H;te++)S[32767+te]=J,v[32767+te]=[],v[32767+te][1]=J,v[32767+te][0]=te;for(var oe=-(H-1);oe<=-k;oe++)S[32767+oe]=J,v[32767+oe]=[],v[32767+oe][1]=J,v[32767+oe][0]=H-1+oe;k<<=1,H<<=1}}(),function(){for(var k=0;k<256;k++)V[k]=19595*k,V[k+256|0]=38470*k,V[k+512|0]=7471*k+32768,V[k+768|0]=-11059*k,V[k+1024|0]=-21709*k,V[k+1280|0]=32768*k+8421375,V[k+1536|0]=-27439*k,V[k+1792|0]=-5329*k}(),we(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function di(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function cd(e){function t(I){if(!I)throw Error("assert :P")}function r(I,Z,_){for(var P=0;4>P;P++)if(I[Z+P]!=_.charCodeAt(P))return!0;return!1}function n(I,Z,_,P,F){for(var $=0;$<F;$++)I[Z+$]=_[P+$]}function a(I,Z,_,P){for(var F=0;F<P;F++)I[Z+F]=_}function s(I){return new Int32Array(I)}function l(I,Z){for(var _=[],P=0;P<I;P++)_.push(new Z);return _}function c(I,Z){var _=[];return function P(F,$,re){for(var se=re[$],fe=0;fe<se&&(F.push(re.length>$+1?[]:new Z),!(re.length<$+1));fe++)P(F[fe],$+1,re)}(_,0,I),_}var d=function(){var I=this;function Z(u,h){for(var x=1<<h-1>>>0;u&x;)x>>>=1;return x?(u&x-1)+x:u}function _(u,h,x,y,T){t(!(y%x));do u[h+(y-=x)]=T;while(0<y)}function P(u,h,x,y,T){if(t(2328>=T),512>=T)var R=s(512);else if((R=s(T))==null)return 0;return function(O,z,B,G,ie,xe){var W,ae,he=z,ye=1<<B,me=s(16),Ce=s(16);for(t(ie!=0),t(G!=null),t(O!=null),t(0<B),ae=0;ae<ie;++ae){if(15<G[ae])return 0;++me[G[ae]]}if(me[0]==ie)return 0;for(Ce[1]=0,W=1;15>W;++W){if(me[W]>1<<W)return 0;Ce[W+1]=Ce[W]+me[W]}for(ae=0;ae<ie;++ae)W=G[ae],0<G[ae]&&(xe[Ce[W]++]=ae);if(Ce[15]==1)return(G=new F).g=0,G.value=xe[0],_(O,he,1,ye,G),ye;var Ae,Le=-1,Ie=ye-1,at=0,Je=1,At=1,it=1<<B;for(ae=0,W=1,ie=2;W<=B;++W,ie<<=1){if(Je+=At<<=1,0>(At-=me[W]))return 0;for(;0<me[W];--me[W])(G=new F).g=W,G.value=xe[ae++],_(O,he+at,ie,it,G),at=Z(at,W)}for(W=B+1,ie=2;15>=W;++W,ie<<=1){if(Je+=At<<=1,0>(At-=me[W]))return 0;for(;0<me[W];--me[W]){if(G=new F,(at&Ie)!=Le){for(he+=it,Ae=1<<(Le=W)-B;15>Le&&!(0>=(Ae-=me[Le]));)++Le,Ae<<=1;ye+=it=1<<(Ae=Le-B),O[z+(Le=at&Ie)].g=Ae+B,O[z+Le].value=he-z-Le}G.g=W-B,G.value=xe[ae++],_(O,he+(at>>B),ie,it,G),at=Z(at,W)}}return Je!=2*Ce[15]-1?0:ye}(u,h,x,y,T,R)}function F(){this.value=this.g=0}function $(){this.value=this.g=0}function re(){this.G=l(5,F),this.H=s(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=l(Xe,$)}function se(u,h,x,y){t(u!=null),t(h!=null),t(2147483648>y),u.Ca=254,u.I=0,u.b=-8,u.Ka=0,u.oa=h,u.pa=x,u.Jd=h,u.Yc=x+y,u.Zc=4<=y?x+y-4+1:x,pe(u)}function fe(u,h){for(var x=0;0<h--;)x|=ue(u,128)<<h;return x}function ne(u,h){var x=fe(u,h);return ve(u)?-x:x}function ge(u,h,x,y){var T,R=0;for(t(u!=null),t(h!=null),t(4294967288>y),u.Sb=y,u.Ra=0,u.u=0,u.h=0,4<y&&(y=4),T=0;T<y;++T)R+=h[x+T]<<8*T;u.Ra=R,u.bb=y,u.oa=h,u.pa=x}function Me(u){for(;8<=u.u&&u.bb<u.Sb;)u.Ra>>>=8,u.Ra+=u.oa[u.pa+u.bb]<<sr-8>>>0,++u.bb,u.u-=8;te(u)&&(u.h=1,u.u=0)}function we(u,h){if(t(0<=h),!u.h&&h<=_t){var x=J(u)&ft[h];return u.u+=h,Me(u),x}return u.h=1,u.u=0}function k(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function H(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function J(u){return u.Ra>>>(u.u&sr-1)>>>0}function te(u){return t(u.bb<=u.Sb),u.h||u.bb==u.Sb&&u.u>sr}function oe(u,h){u.u=h,u.h=te(u)}function le(u){u.u>=kr&&(t(u.u>=kr),Me(u))}function pe(u){t(u!=null&&u.oa!=null),u.pa<u.Zc?(u.I=(u.oa[u.pa++]|u.I<<8)>>>0,u.b+=8):(t(u!=null&&u.oa!=null),u.pa<u.Yc?(u.b+=8,u.I=u.oa[u.pa++]|u.I<<8):u.Ka?u.b=0:(u.I<<=8,u.b+=8,u.Ka=1))}function ve(u){return fe(u,1)}function ue(u,h){var x=u.Ca;0>u.b&&pe(u);var y=u.b,T=x*h>>>8,R=(u.I>>>y>T)+0;for(R?(x-=T,u.I-=T+1<<y>>>0):x=T+1,y=x,T=0;256<=y;)T+=8,y>>=8;return y=7^T+lr[y],u.b-=y,u.Ca=(x<<y)-1,R}function ke(u,h,x){u[h+0]=x>>24&255,u[h+1]=x>>16&255,u[h+2]=x>>8&255,u[h+3]=255&x}function Te(u,h){return u[h+0]|u[h+1]<<8}function Re(u,h){return Te(u,h)|u[h+2]<<16}function de(u,h){return Te(u,h)|Te(u,h+2)<<16}function U(u,h){var x=1<<h;return t(u!=null),t(0<h),u.X=s(x),u.X==null?0:(u.Mb=32-h,u.Xa=h,1)}function qe(u,h){t(u!=null),t(h!=null),t(u.Xa==h.Xa),n(h.X,0,u.X,0,1<<h.Xa)}function Ye(){this.X=[],this.Xa=this.Mb=0}function De(u,h,x,y){t(x!=null),t(y!=null);var T=x[0],R=y[0];return T==0&&(T=(u*R+h/2)/h),R==0&&(R=(h*T+u/2)/u),0>=T||0>=R?0:(x[0]=T,y[0]=R,1)}function _e(u,h){return u+(1<<h)-1>>>h}function Ue(u,h){return((4278255360&u)+(4278255360&h)>>>0&4278255360)+((16711935&u)+(16711935&h)>>>0&16711935)>>>0}function Pe(u,h){I[h]=function(x,y,T,R,O,z,B){var G;for(G=0;G<O;++G){var ie=I[u](z[B+G-1],T,R+G);z[B+G]=Ue(x[y+G],ie)}}}function Ge(){this.ud=this.hd=this.jd=0}function Fe(u,h){return((4278124286&(u^h))>>>1)+(u&h)>>>0}function wt(u){return 0<=u&&256>u?u:0>u?0:255<u?255:void 0}function lt(u,h){return wt(u+(u-h+.5>>1))}function Qe(u,h,x){return Math.abs(h-x)-Math.abs(u-x)}function mt(u,h,x,y,T,R,O){for(y=R[O-1],x=0;x<T;++x)R[O+x]=y=Ue(u[h+x],y)}function et(u,h,x,y,T){var R;for(R=0;R<x;++R){var O=u[h+R],z=O>>8&255,B=16711935&(B=(B=16711935&O)+((z<<16)+z));y[T+R]=(4278255360&O)+B>>>0}}function ze(u,h){h.jd=255&u,h.hd=u>>8&255,h.ud=u>>16&255}function $e(u,h,x,y,T,R){var O;for(O=0;O<y;++O){var z=h[x+O],B=z>>>8,G=z,ie=255&(ie=(ie=z>>>16)+((u.jd<<24>>24)*(B<<24>>24)>>>5));G=255&(G=(G+=(u.hd<<24>>24)*(B<<24>>24)>>>5)+((u.ud<<24>>24)*(ie<<24>>24)>>>5)),T[R+O]=(4278255360&z)+(ie<<16)+G}}function We(u,h,x,y,T){I[h]=function(R,O,z,B,G,ie,xe,W,ae){for(B=xe;B<W;++B)for(xe=0;xe<ae;++xe)G[ie++]=T(z[y(R[O++])])},I[u]=function(R,O,z,B,G,ie,xe){var W=8>>R.b,ae=R.Ea,he=R.K[0],ye=R.w;if(8>W)for(R=(1<<R.b)-1,ye=(1<<W)-1;O<z;++O){var me,Ce=0;for(me=0;me<ae;++me)me&R||(Ce=y(B[G++])),ie[xe++]=T(he[Ce&ye]),Ce>>=W}else I["VP8LMapColor"+x](B,G,he,ye,ie,xe,O,z,ae)}}function ct(u,h,x,y,T){for(x=h+x;h<x;){var R=u[h++];y[T++]=R>>16&255,y[T++]=R>>8&255,y[T++]=255&R}}function St(u,h,x,y,T){for(x=h+x;h<x;){var R=u[h++];y[T++]=R>>16&255,y[T++]=R>>8&255,y[T++]=255&R,y[T++]=R>>24&255}}function Ve(u,h,x,y,T){for(x=h+x;h<x;){var R=(O=u[h++])>>16&240|O>>12&15,O=240&O|O>>28&15;y[T++]=R,y[T++]=O}}function ut(u,h,x,y,T){for(x=h+x;h<x;){var R=(O=u[h++])>>16&248|O>>13&7,O=O>>5&224|O>>3&31;y[T++]=R,y[T++]=O}}function Mt(u,h,x,y,T){for(x=h+x;h<x;){var R=u[h++];y[T++]=255&R,y[T++]=R>>8&255,y[T++]=R>>16&255}}function be(u,h,x,y,T,R){if(R==0)for(x=h+x;h<x;)ke(y,((R=u[h++])[0]>>24|R[1]>>8&65280|R[2]<<8&16711680|R[3]<<24)>>>0),T+=32;else n(y,T,u,h,x)}function He(u,h){I[h][0]=I[u+"0"],I[h][1]=I[u+"1"],I[h][2]=I[u+"2"],I[h][3]=I[u+"3"],I[h][4]=I[u+"4"],I[h][5]=I[u+"5"],I[h][6]=I[u+"6"],I[h][7]=I[u+"7"],I[h][8]=I[u+"8"],I[h][9]=I[u+"9"],I[h][10]=I[u+"10"],I[h][11]=I[u+"11"],I[h][12]=I[u+"12"],I[h][13]=I[u+"13"],I[h][14]=I[u+"0"],I[h][15]=I[u+"0"]}function Be(u){return u==g1||u==x1||u==Xs||u==v1}function gt(){this.eb=[],this.size=this.A=this.fb=0}function Ot(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Et(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new gt,this.f.kb=new Ot,this.sd=null}function ht(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function jt(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Bi(u){return alert("todo:WebPSamplerProcessPlane"),u.T}function Sr(u,h){var x=u.T,y=h.ba.f.RGBA,T=y.eb,R=y.fb+u.ka*y.A,O=$n[h.ba.S],z=u.y,B=u.O,G=u.f,ie=u.N,xe=u.ea,W=u.W,ae=h.cc,he=h.dc,ye=h.Mc,me=h.Nc,Ce=u.ka,Ae=u.ka+u.T,Le=u.U,Ie=Le+1>>1;for(Ce==0?O(z,B,null,null,G,ie,xe,W,G,ie,xe,W,T,R,null,null,Le):(O(h.ec,h.fc,z,B,ae,he,ye,me,G,ie,xe,W,T,R-y.A,T,R,Le),++x);Ce+2<Ae;Ce+=2)ae=G,he=ie,ye=xe,me=W,ie+=u.Rc,W+=u.Rc,R+=2*y.A,O(z,(B+=2*u.fa)-u.fa,z,B,ae,he,ye,me,G,ie,xe,W,T,R-y.A,T,R,Le);return B+=u.fa,u.j+Ae<u.o?(n(h.ec,h.fc,z,B,Le),n(h.cc,h.dc,G,ie,Ie),n(h.Mc,h.Nc,xe,W,Ie),x--):1&Ae||O(z,B,null,null,G,ie,xe,W,G,ie,xe,W,T,R+y.A,null,null,Le),x}function Jn(u,h,x){var y=u.F,T=[u.J];if(y!=null){var R=u.U,O=h.ba.S,z=O==Ws||O==Xs;h=h.ba.f.RGBA;var B=[0],G=u.ka;B[0]=u.T,u.Kb&&(G==0?--B[0]:(--G,T[0]-=u.width),u.j+u.ka+u.T==u.o&&(B[0]=u.o-u.j-G));var ie=h.eb;G=h.fb+G*h.A,u=O0(y,T[0],u.width,R,B,ie,G+(z?0:3),h.A),t(x==B),u&&Be(O)&&ss(ie,G,z,R,B,h.A)}return 0}function Jr(u){var h=u.ma,x=h.ba.S,y=11>x,T=x==Ys||x==Gs||x==Ws||x==m1||x==12||Be(x);if(h.memory=null,h.Ib=null,h.Jb=null,h.Nd=null,!Mo(h.Oa,u,T?11:12))return 0;if(T&&Be(x)&&ta(),u.da)alert("todo:use_scaling");else{if(y){if(h.Ib=Bi,u.Kb){if(x=u.U+1>>1,h.memory=s(u.U+2*x),h.memory==null)return 0;h.ec=h.memory,h.fc=0,h.cc=h.ec,h.dc=h.fc+u.U,h.Mc=h.cc,h.Nc=h.dc+x,h.Ib=Sr,ta()}}else alert("todo:EmitYUV");T&&(h.Jb=Jn,y&&nn())}if(y&&!K0){for(u=0;256>u;++u)f5[u]=89858*(u-128)+Js>>Zs,g5[u]=-22014*(u-128)+Js,m5[u]=-45773*(u-128),p5[u]=113618*(u-128)+Js>>Zs;for(u=cs;u<y1;++u)h=76283*(u-16)+Js>>Zs,x5[u-cs]=rr(h,255),v5[u-cs]=rr(h+8>>4,15);K0=1}return 1}function dt(u){var h=u.ma,x=u.U,y=u.T;return t(!(1&u.ka)),0>=x||0>=y?0:(x=h.Ib(u,h),h.Jb!=null&&h.Jb(u,h,x),h.Dc+=x,1)}function cn(u){u.ma.memory=null}function xn(u,h,x,y){return we(u,8)!=47?0:(h[0]=we(u,14)+1,x[0]=we(u,14)+1,y[0]=we(u,1),we(u,3)!=0?0:!u.h)}function vn(u,h){if(4>u)return u+1;var x=u-2>>1;return(2+(1&u)<<x)+we(h,x)+1}function bn(u,h){return 120<h?h-120:1<=(x=((x=Kf[h-1])>>4)*u+(8-(15&x)))?x:1;var x}function Tt(u,h,x){var y=J(x),T=u[h+=255&y].g-8;return 0<T&&(oe(x,x.u+8),y=J(x),h+=u[h].value,h+=y&(1<<T)-1),oe(x,x.u+u[h].g),u[h].value}function Yt(u,h,x){return x.g+=u.g,x.value+=u.value<<h>>>0,t(8>=x.g),u.g}function Ft(u,h,x){var y=u.xc;return t((h=y==0?0:u.vc[u.md*(x>>y)+(h>>y)])<u.Wb),u.Ya[h]}function Qr(u,h,x,y){var T=u.ab,R=u.c*h,O=u.C;h=O+h;var z=x,B=y;for(y=u.Ta,x=u.Ua;0<T--;){var G=u.gc[T],ie=O,xe=h,W=z,ae=B,he=(B=y,z=x,G.Ea);switch(t(ie<xe),t(xe<=G.nc),G.hc){case 2:Kt(W,ae,(xe-ie)*he,B,z);break;case 0:var ye=ie,me=xe,Ce=B,Ae=z,Le=(it=G).Ea;ye==0&&(nr(W,ae,null,null,1,Ce,Ae),mt(W,ae+1,0,0,Le-1,Ce,Ae+1),ae+=Le,Ae+=Le,++ye);for(var Ie=1<<it.b,at=Ie-1,Je=_e(Le,it.b),At=it.K,it=it.w+(ye>>it.b)*Je;ye<me;){var It=At,jr=it,kt=1;for(fn(W,ae,Ce,Ae-Le,1,Ce,Ae);kt<Le;){var ot=(kt&~at)+Ie;ot>Le&&(ot=Le),(0,No[It[jr++]>>8&15])(W,ae+ +kt,Ce,Ae+kt-Le,ot-kt,Ce,Ae+kt),kt=ot}ae+=Le,Ae+=Le,++ye&at||(it+=Je)}xe!=G.nc&&n(B,z-he,B,z+(xe-ie-1)*he,he);break;case 1:for(he=W,me=ae,Le=(W=G.Ea)-(Ae=W&~(Ce=(ae=1<<G.b)-1)),ye=_e(W,G.b),Ie=G.K,G=G.w+(ie>>G.b)*ye;ie<xe;){for(at=Ie,Je=G,At=new Ge,it=me+Ae,It=me+W;me<it;)ze(at[Je++],At),Io(At,he,me,ae,B,z),me+=ae,z+=ae;me<It&&(ze(at[Je++],At),Io(At,he,me,Le,B,z),me+=Le,z+=Le),++ie&Ce||(G+=ye)}break;case 3:if(W==B&&ae==z&&0<G.b){for(me=B,W=he=z+(xe-ie)*he-(Ae=(xe-ie)*_e(G.Ea,G.b)),ae=B,Ce=z,ye=[],Ae=(Le=Ae)-1;0<=Ae;--Ae)ye[Ae]=ae[Ce+Ae];for(Ae=Le-1;0<=Ae;--Ae)me[W+Ae]=ye[Ae];ia(G,ie,xe,B,he,B,z)}else ia(G,ie,xe,W,ae,B,z)}z=y,B=x}B!=x&&n(y,x,z,B,R)}function Rn(u,h){var x=u.V,y=u.Ba+u.c*u.C,T=h-u.C;if(t(h<=u.l.o),t(16>=T),0<T){var R=u.l,O=u.Ta,z=u.Ua,B=R.width;if(Qr(u,T,x,y),T=z=[z],t((x=u.C)<(y=h)),t(R.v<R.va),y>R.o&&(y=R.o),x<R.j){var G=R.j-x;x=R.j,T[0]+=G*B}if(x>=y?x=0:(T[0]+=4*R.v,R.ka=x-R.j,R.U=R.va-R.v,R.T=y-x,x=1),x){if(z=z[0],11>(x=u.ca).S){var ie=x.f.RGBA,xe=(y=x.S,T=R.U,R=R.T,G=ie.eb,ie.A),W=R;for(ie=ie.fb+u.Ma*ie.A;0<W--;){var ae=O,he=z,ye=T,me=G,Ce=ie;switch(y){case Vs:To(ae,he,ye,me,Ce);break;case Ys:ai(ae,he,ye,me,Ce);break;case g1:ai(ae,he,ye,me,Ce),ss(me,Ce,0,ye,1,0);break;case q0:no(ae,he,ye,me,Ce);break;case Gs:be(ae,he,ye,me,Ce,1);break;case x1:be(ae,he,ye,me,Ce,1),ss(me,Ce,0,ye,1,0);break;case Ws:be(ae,he,ye,me,Ce,0);break;case Xs:be(ae,he,ye,me,Ce,0),ss(me,Ce,1,ye,1,0);break;case m1:Ni(ae,he,ye,me,Ce);break;case v1:Ni(ae,he,ye,me,Ce),R0(me,Ce,ye,1,0);break;case V0:si(ae,he,ye,me,Ce);break;default:t(0)}z+=B,ie+=xe}u.Ma+=R}else alert("todo:EmitRescaledRowsYUVA");t(u.Ma<=x.height)}}u.C=h,t(u.C<=u.i)}function Er(u){var h;if(0<u.ua)return 0;for(h=0;h<u.Wb;++h){var x=u.Ya[h].G,y=u.Ya[h].H;if(0<x[1][y[1]+0].g||0<x[2][y[2]+0].g||0<x[3][y[3]+0].g)return 0}return 1}function un(u,h,x,y,T,R){if(u.Z!=0){var O=u.qd,z=u.rd;for(t(Po[u.Z]!=null);h<x;++h)Po[u.Z](O,z,y,T,y,T,R),O=y,z=T,T+=R;u.qd=O,u.rd=z}}function Dr(u,h){var x=u.l.ma,y=x.Z==0||x.Z==1?u.l.j:u.C;if(y=u.C<y?y:u.C,t(h<=u.l.o),h>y){var T=u.l.width,R=x.ca,O=x.tb+T*y,z=u.V,B=u.Ba+u.c*y,G=u.gc;t(u.ab==1),t(G[0].hc==3),zn(G[0],y,h,z,B,R,O),un(x,y,h,R,O,T)}u.C=u.Ma=h}function Ar(u,h,x,y,T,R,O){var z=u.$/y,B=u.$%y,G=u.m,ie=u.s,xe=x+u.$,W=xe;T=x+y*T;var ae=x+y*R,he=280+ie.ua,ye=u.Pb?z:16777216,me=0<ie.ua?ie.Wa:null,Ce=ie.wc,Ae=xe<ae?Ft(ie,B,z):null;t(u.C<R),t(ae<=T);var Le=!1;e:for(;;){for(;Le||xe<ae;){var Ie=0;if(z>=ye){var at=xe-x;t((ye=u).Pb),ye.wd=ye.m,ye.xd=at,0<ye.s.ua&&qe(ye.s.Wa,ye.s.vb),ye=z+t5}if(B&Ce||(Ae=Ft(ie,B,z)),t(Ae!=null),Ae.Qb&&(h[xe]=Ae.qb,Le=!0),!Le)if(le(G),Ae.jc){Ie=G,at=h;var Je=xe,At=Ae.pd[J(Ie)&Xe-1];t(Ae.jc),256>At.g?(oe(Ie,Ie.u+At.g),at[Je]=At.value,Ie=0):(oe(Ie,Ie.u+At.g-256),t(256<=At.value),Ie=At.value),Ie==0&&(Le=!0)}else Ie=Tt(Ae.G[0],Ae.H[0],G);if(G.h)break;if(Le||256>Ie){if(!Le)if(Ae.nd)h[xe]=(Ae.qb|Ie<<8)>>>0;else{if(le(G),Le=Tt(Ae.G[1],Ae.H[1],G),le(G),at=Tt(Ae.G[2],Ae.H[2],G),Je=Tt(Ae.G[3],Ae.H[3],G),G.h)break;h[xe]=(Je<<24|Le<<16|Ie<<8|at)>>>0}if(Le=!1,++xe,++B>=y&&(B=0,++z,O!=null&&z<=R&&!(z%16)&&O(u,z),me!=null))for(;W<xe;)Ie=h[W++],me.X[(506832829*Ie&4294967295)>>>me.Mb]=Ie}else if(280>Ie){if(Ie=vn(Ie-256,G),at=Tt(Ae.G[4],Ae.H[4],G),le(G),at=bn(y,at=vn(at,G)),G.h)break;if(xe-x<at||T-xe<Ie)break e;for(Je=0;Je<Ie;++Je)h[xe+Je]=h[xe+Je-at];for(xe+=Ie,B+=Ie;B>=y;)B-=y,++z,O!=null&&z<=R&&!(z%16)&&O(u,z);if(t(xe<=T),B&Ce&&(Ae=Ft(ie,B,z)),me!=null)for(;W<xe;)Ie=h[W++],me.X[(506832829*Ie&4294967295)>>>me.Mb]=Ie}else{if(!(Ie<he))break e;for(Le=Ie-280,t(me!=null);W<xe;)Ie=h[W++],me.X[(506832829*Ie&4294967295)>>>me.Mb]=Ie;Ie=xe,t(!(Le>>>(at=me).Xa)),h[Ie]=at.X[Le],Le=!0}Le||t(G.h==te(G))}if(u.Pb&&G.h&&xe<T)t(u.m.h),u.a=5,u.m=u.wd,u.$=u.xd,0<u.s.ua&&qe(u.s.vb,u.s.Wa);else{if(G.h)break e;O!=null&&O(u,z>R?R:z),u.a=0,u.$=xe-x}return 1}return u.a=3,0}function Rr(u){t(u!=null),u.vc=null,u.yc=null,u.Ya=null;var h=u.Wa;h!=null&&(h.X=null),u.vb=null,t(u!=null)}function Ui(){var u=new tt;return u==null?null:(u.a=0,u.xb=W0,He("Predictor","VP8LPredictors"),He("Predictor","VP8LPredictors_C"),He("PredictorAdd","VP8LPredictorsAdd"),He("PredictorAdd","VP8LPredictorsAdd_C"),Kt=et,Io=$e,To=ct,ai=St,Ni=Ve,si=ut,no=Mt,I.VP8LMapColor32b=An,I.VP8LMapColor8b=jo,u)}function Kr(u,h,x,y,T){var R=1,O=[u],z=[h],B=y.m,G=y.s,ie=null,xe=0;e:for(;;){if(x)for(;R&&we(B,1);){var W=O,ae=z,he=y,ye=1,me=he.m,Ce=he.gc[he.ab],Ae=we(me,2);if(he.Oc&1<<Ae)R=0;else{switch(he.Oc|=1<<Ae,Ce.hc=Ae,Ce.Ea=W[0],Ce.nc=ae[0],Ce.K=[null],++he.ab,t(4>=he.ab),Ae){case 0:case 1:Ce.b=we(me,3)+2,ye=Kr(_e(Ce.Ea,Ce.b),_e(Ce.nc,Ce.b),0,he,Ce.K),Ce.K=Ce.K[0];break;case 3:var Le,Ie=we(me,8)+1,at=16<Ie?0:4<Ie?1:2<Ie?2:3;if(W[0]=_e(Ce.Ea,at),Ce.b=at,Le=ye=Kr(Ie,1,0,he,Ce.K)){var Je,At=Ie,it=Ce,It=1<<(8>>it.b),jr=s(It);if(jr==null)Le=0;else{var kt=it.K[0],ot=it.w;for(jr[0]=it.K[0][0],Je=1;Je<1*At;++Je)jr[Je]=Ue(kt[ot+Je],jr[Je-1]);for(;Je<4*It;++Je)jr[Je]=0;it.K[0]=null,it.K[0]=jr,Le=1}}ye=Le;break;case 2:break;default:t(0)}R=ye}}if(O=O[0],z=z[0],R&&we(B,1)&&!(R=1<=(xe=we(B,4))&&11>=xe)){y.a=3;break e}var Oe;if(Oe=R)t:{var vr,Ct,Lt,er=y,Or=O,on=z,fr=xe,Vr=x,an=er.m,Nr=er.s,Dt=[null],Ht=1,pr=0,$t=e5[fr];r:for(;;){if(Vr&&we(an,1)){var Fr=we(an,3)+2,ci=_e(Or,Fr),br=_e(on,Fr),pn=ci*br;if(!Kr(ci,br,0,er,Dt))break r;for(Dt=Dt[0],Nr.xc=Fr,vr=0;vr<pn;++vr){var Xt=Dt[vr]>>8&65535;Dt[vr]=Xt,Xt>=Ht&&(Ht=Xt+1)}}if(an.h)break r;for(Ct=0;5>Ct;++Ct){var Ir=Y0[Ct];!Ct&&0<fr&&(Ir+=1<<fr),pr<Ir&&(pr=Ir)}var Mn=l(Ht*$t,F),sn=Ht,jn=l(sn,re);if(jn==null)var Nn=null;else t(65536>=sn),Nn=jn;var mn=s(pr);if(Nn==null||mn==null||Mn==null){er.a=1;break r}var In=Mn;for(vr=Lt=0;vr<Ht;++vr){var Jt=Nn[vr],Tn=Jt.G,ui=Jt.H,oa=0,ao=1,zr=0;for(Ct=0;5>Ct;++Ct){Ir=Y0[Ct],Tn[Ct]=In,ui[Ct]=Lt,!Ct&&0<fr&&(Ir+=1<<fr);i:{var Ks,_1=Ir,el=er,us=mn,y5=In,_5=Lt,C1=0,Eo=el.m,C5=we(Eo,1);if(a(us,0,0,_1),C5){var S5=we(Eo,1)+1,A5=we(Eo,1),r2=we(Eo,A5==0?1:8);us[r2]=1,S5==2&&(us[r2=we(Eo,8)]=1);var tl=1}else{var n2=s(19),i2=we(Eo,4)+4;if(19<i2){el.a=3;var rl=0;break i}for(Ks=0;Ks<i2;++Ks)n2[Qf[Ks]]=we(Eo,3);var S1=void 0,ds=void 0,o2=el,k5=n2,nl=_1,a2=us,A1=0,Do=o2.m,s2=8,l2=l(128,F);n:for(;P(l2,0,7,k5,19);){if(we(Do,1)){var M5=2+2*we(Do,3);if((S1=2+we(Do,M5))>nl)break n}else S1=nl;for(ds=0;ds<nl&&S1--;){le(Do);var c2=l2[0+(127&J(Do))];oe(Do,Do.u+c2.g);var La=c2.value;if(16>La)a2[ds++]=La,La!=0&&(s2=La);else{var j5=La==16,u2=La-16,N5=Zf[u2],d2=we(Do,Xf[u2])+N5;if(ds+d2>nl)break n;for(var I5=j5?s2:0;0<d2--;)a2[ds++]=I5}}A1=1;break n}A1||(o2.a=3),tl=A1}(tl=tl&&!Eo.h)&&(C1=P(y5,_5,8,us,_1)),tl&&C1!=0?rl=C1:(el.a=3,rl=0)}if(rl==0)break r;if(ao&&Jf[Ct]==1&&(ao=In[Lt].g==0),oa+=In[Lt].g,Lt+=rl,3>=Ct){var hs,k1=mn[0];for(hs=1;hs<Ir;++hs)mn[hs]>k1&&(k1=mn[hs]);zr+=k1}}if(Jt.nd=ao,Jt.Qb=0,ao&&(Jt.qb=(Tn[3][ui[3]+0].value<<24|Tn[1][ui[1]+0].value<<16|Tn[2][ui[2]+0].value)>>>0,oa==0&&256>Tn[0][ui[0]+0].value&&(Jt.Qb=1,Jt.qb+=Tn[0][ui[0]+0].value<<8)),Jt.jc=!Jt.Qb&&6>zr,Jt.jc){var il,so=Jt;for(il=0;il<Xe;++il){var Ro=il,Oo=so.pd[Ro],ol=so.G[0][so.H[0]+Ro];256<=ol.value?(Oo.g=ol.g+256,Oo.value=ol.value):(Oo.g=0,Oo.value=0,Ro>>=Yt(ol,8,Oo),Ro>>=Yt(so.G[1][so.H[1]+Ro],16,Oo),Ro>>=Yt(so.G[2][so.H[2]+Ro],0,Oo),Yt(so.G[3][so.H[3]+Ro],24,Oo))}}}Nr.vc=Dt,Nr.Wb=Ht,Nr.Ya=Nn,Nr.yc=Mn,Oe=1;break t}Oe=0}if(!(R=Oe)){y.a=3;break e}if(0<xe){if(G.ua=1<<xe,!U(G.Wa,xe)){y.a=1,R=0;break e}}else G.ua=0;var M1=y,h2=O,T5=z,j1=M1.s,N1=j1.xc;if(M1.c=h2,M1.i=T5,j1.md=_e(h2,N1),j1.wc=N1==0?-1:(1<<N1)-1,x){y.xb=l5;break e}if((ie=s(O*z))==null){y.a=1,R=0;break e}R=(R=Ar(y,ie,0,O,z,z,null))&&!B.h;break e}return R?(T!=null?T[0]=ie:(t(ie==null),t(x)),y.$=0,x||Rr(G)):Rr(G),R}function vi(u,h){var x=u.c*u.i,y=x+h+16*h;return t(u.c<=h),u.V=s(y),u.V==null?(u.Ta=null,u.Ua=0,u.a=1,0):(u.Ta=u.V,u.Ua=u.Ba+x+h,1)}function bi(u,h){var x=u.C,y=h-x,T=u.V,R=u.Ba+u.c*x;for(t(h<=u.l.o);0<y;){var O=16<y?16:y,z=u.l.ma,B=u.l.width,G=B*O,ie=z.ca,xe=z.tb+B*x,W=u.Ta,ae=u.Ua;Qr(u,O,T,R),F0(W,ae,ie,xe,G),un(z,x,x+O,ie,xe,B),y-=O,T+=O*u.c,x+=O}t(x==h),u.C=u.Ma=h}function Qn(){this.ub=this.yd=this.td=this.Rb=0}function Kn(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function go(){this.Fb=this.Bb=this.Cb=0,this.Zb=s(4),this.Lb=s(4)}function wn(){this.Yb=function(){var u=[];return function h(x,y,T){for(var R=T[y],O=0;O<R&&(x.push(T.length>y+1?[]:0),!(T.length<y+1));O++)h(x[O],y+1,T)}(u,0,[3,11]),u}()}function xo(){this.jb=s(3),this.Wc=c([4,8],wn),this.Xc=c([4,17],wn)}function Hi(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new s(4),this.od=new s(4)}function Ur(){this.ld=this.La=this.dd=this.tc=0}function wi(){this.Na=this.la=0}function xa(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function vo(){this.ad=s(384),this.Za=0,this.Ob=s(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function Go(){this.uc=this.M=this.Nb=0,this.wa=Array(new Ur),this.Y=0,this.ya=Array(new vo),this.aa=0,this.l=new bo}function va(){this.y=s(16),this.f=s(8),this.ea=s(8)}function ei(){this.cb=this.a=0,this.sc="",this.m=new k,this.Od=new Qn,this.Kc=new Kn,this.ed=new Hi,this.Qa=new go,this.Ic=this.$c=this.Aa=0,this.D=new Go,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=l(8,k),this.ia=0,this.pb=l(4,xa),this.Pa=new xo,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new va),this.Hd=0,this.rb=Array(new wi),this.sb=0,this.wa=Array(new Ur),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new vo),this.L=this.aa=0,this.gd=c([4,2],Ur),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function bo(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function ns(){var u=new ei;return u!=null&&(u.a=0,u.sc="OK",u.cb=0,u.Xb=0,ls||(ls=en)),u}function or(u,h,x){return u.a==0&&(u.a=h,u.sc=x,u.cb=0),0}function Wo(u,h,x){return 3<=x&&u[h+0]==157&&u[h+1]==1&&u[h+2]==42}function ba(u,h){if(u==null)return 0;if(u.a=0,u.sc="OK",h==null)return or(u,2,"null VP8Io passed to VP8GetHeaders()");var x=h.data,y=h.w,T=h.ha;if(4>T)return or(u,7,"Truncated header.");var R=x[y+0]|x[y+1]<<8|x[y+2]<<16,O=u.Od;if(O.Rb=!(1&R),O.td=R>>1&7,O.yd=R>>4&1,O.ub=R>>5,3<O.td)return or(u,3,"Incorrect keyframe parameters.");if(!O.yd)return or(u,4,"Frame not displayable.");y+=3,T-=3;var z=u.Kc;if(O.Rb){if(7>T)return or(u,7,"cannot parse picture header");if(!Wo(x,y,T))return or(u,3,"Bad code word");z.c=16383&(x[y+4]<<8|x[y+3]),z.Td=x[y+4]>>6,z.i=16383&(x[y+6]<<8|x[y+5]),z.Ud=x[y+6]>>6,y+=7,T-=7,u.za=z.c+15>>4,u.Ub=z.i+15>>4,h.width=z.c,h.height=z.i,h.Da=0,h.j=0,h.v=0,h.va=h.width,h.o=h.height,h.da=0,h.ib=h.width,h.hb=h.height,h.U=h.width,h.T=h.height,a((R=u.Pa).jb,0,255,R.jb.length),t((R=u.Qa)!=null),R.Cb=0,R.Bb=0,R.Fb=1,a(R.Zb,0,0,R.Zb.length),a(R.Lb,0,0,R.Lb)}if(O.ub>T)return or(u,7,"bad partition length");se(R=u.m,x,y,O.ub),y+=O.ub,T-=O.ub,O.Rb&&(z.Ld=ve(R),z.Kd=ve(R)),z=u.Qa;var B,G=u.Pa;if(t(R!=null),t(z!=null),z.Cb=ve(R),z.Cb){if(z.Bb=ve(R),ve(R)){for(z.Fb=ve(R),B=0;4>B;++B)z.Zb[B]=ve(R)?ne(R,7):0;for(B=0;4>B;++B)z.Lb[B]=ve(R)?ne(R,6):0}if(z.Bb)for(B=0;3>B;++B)G.jb[B]=ve(R)?fe(R,8):255}else z.Bb=0;if(R.Ka)return or(u,3,"cannot parse segment header");if((z=u.ed).zd=ve(R),z.Tb=fe(R,6),z.wb=fe(R,3),z.Pc=ve(R),z.Pc&&ve(R)){for(G=0;4>G;++G)ve(R)&&(z.vd[G]=ne(R,6));for(G=0;4>G;++G)ve(R)&&(z.od[G]=ne(R,6))}if(u.L=z.Tb==0?0:z.zd?1:2,R.Ka)return or(u,3,"cannot parse filter header");var ie=T;if(T=B=y,y=B+ie,z=ie,u.Xb=(1<<fe(u.m,2))-1,ie<3*(G=u.Xb))x=7;else{for(B+=3*G,z-=3*G,ie=0;ie<G;++ie){var xe=x[T+0]|x[T+1]<<8|x[T+2]<<16;xe>z&&(xe=z),se(u.Jc[+ie],x,B,xe),B+=xe,z-=xe,T+=3}se(u.Jc[+G],x,B,z),x=B<y?0:5}if(x!=0)return or(u,x,"cannot parse partitions");for(x=fe(B=u.m,7),T=ve(B)?ne(B,4):0,y=ve(B)?ne(B,4):0,z=ve(B)?ne(B,4):0,G=ve(B)?ne(B,4):0,B=ve(B)?ne(B,4):0,ie=u.Qa,xe=0;4>xe;++xe){if(ie.Cb){var W=ie.Zb[xe];ie.Fb||(W+=x)}else{if(0<xe){u.pb[xe]=u.pb[0];continue}W=x}var ae=u.pb[xe];ae.Sc[0]=b1[rr(W+T,127)],ae.Sc[1]=w1[rr(W+0,127)],ae.Eb[0]=2*b1[rr(W+y,127)],ae.Eb[1]=101581*w1[rr(W+z,127)]>>16,8>ae.Eb[1]&&(ae.Eb[1]=8),ae.Qc[0]=b1[rr(W+G,117)],ae.Qc[1]=w1[rr(W+B,127)],ae.lc=W+B}if(!O.Rb)return or(u,4,"Not a key frame.");for(ve(R),O=u.Pa,x=0;4>x;++x){for(T=0;8>T;++T)for(y=0;3>y;++y)for(z=0;11>z;++z)G=ue(R,a5[x][T][y][z])?fe(R,8):i5[x][T][y][z],O.Wc[x][T].Yb[y][z]=G;for(T=0;17>T;++T)O.Xc[x][T]=O.Wc[x][s5[T]]}return u.kc=ve(R),u.kc&&(u.Bd=fe(R,8)),u.cb=1}function en(u,h,x,y,T,R,O){var z=h[T].Yb[x];for(x=0;16>T;++T){if(!ue(u,z[x+0]))return T;for(;!ue(u,z[x+1]);)if(z=h[++T].Yb[0],x=0,T==16)return 16;var B=h[T+1].Yb;if(ue(u,z[x+2])){var G=u,ie=0;if(ue(G,(W=z)[(xe=x)+3]))if(ue(G,W[xe+6])){for(z=0,xe=2*(ie=ue(G,W[xe+8]))+(W=ue(G,W[xe+9+ie])),ie=0,W=r5[xe];W[z];++z)ie+=ie+ue(G,W[z]);ie+=3+(8<<xe)}else ue(G,W[xe+7])?(ie=7+2*ue(G,165),ie+=ue(G,145)):ie=5+ue(G,159);else ie=ue(G,W[xe+4])?3+ue(G,W[xe+5]):2;z=B[2]}else ie=1,z=B[1];B=O+n5[T],0>(G=u).b&&pe(G);var xe,W=G.b,ae=(xe=G.Ca>>1)-(G.I>>W)>>31;--G.b,G.Ca+=ae,G.Ca|=1,G.I-=(xe+1&ae)<<W,R[B]=((ie^ae)-ae)*y[(0<T)+0]}return 16}function On(u){var h=u.rb[u.sb-1];h.la=0,h.Na=0,a(u.zc,0,0,u.zc.length),u.ja=0}function tn(u,h,x,y,T){T=u[h+x+32*y]+(T>>3),u[h+x+32*y]=-256&T?0>T?0:255:T}function yi(u,h,x,y,T,R){tn(u,h,0,x,y+T),tn(u,h,1,x,y+R),tn(u,h,2,x,y-R),tn(u,h,3,x,y-T)}function Qt(u){return(20091*u>>16)+u}function wo(u,h,x,y){var T,R=0,O=s(16);for(T=0;4>T;++T){var z=u[h+0]+u[h+8],B=u[h+0]-u[h+8],G=(35468*u[h+4]>>16)-Qt(u[h+12]),ie=Qt(u[h+4])+(35468*u[h+12]>>16);O[R+0]=z+ie,O[R+1]=B+G,O[R+2]=B-G,O[R+3]=z-ie,R+=4,h++}for(T=R=0;4>T;++T)z=(u=O[R+0]+4)+O[R+8],B=u-O[R+8],G=(35468*O[R+4]>>16)-Qt(O[R+12]),tn(x,y,0,0,z+(ie=Qt(O[R+4])+(35468*O[R+12]>>16))),tn(x,y,1,0,B+G),tn(x,y,2,0,B-G),tn(x,y,3,0,z-ie),R++,y+=32}function Xo(u,h,x,y){var T=u[h+0]+4,R=35468*u[h+4]>>16,O=Qt(u[h+4]),z=35468*u[h+1]>>16;yi(x,y,0,T+O,u=Qt(u[h+1]),z),yi(x,y,1,T+R,u,z),yi(x,y,2,T-R,u,z),yi(x,y,3,T-O,u,z)}function wa(u,h,x,y,T){wo(u,h,x,y),T&&wo(u,h+16,x,y+4)}function is(u,h,x,y){Bn(u,h+0,x,y,1),Bn(u,h+32,x,y+128,1)}function Hr(u,h,x,y){var T;for(u=u[h+0]+4,T=0;4>T;++T)for(h=0;4>h;++h)tn(x,y,h,T,u)}function Zo(u,h,x,y){u[h+0]&&zt(u,h+0,x,y),u[h+16]&&zt(u,h+16,x,y+4),u[h+32]&&zt(u,h+32,x,y+128),u[h+48]&&zt(u,h+48,x,y+128+4)}function $i(u,h,x,y){var T,R=s(16);for(T=0;4>T;++T){var O=u[h+0+T]+u[h+12+T],z=u[h+4+T]+u[h+8+T],B=u[h+4+T]-u[h+8+T],G=u[h+0+T]-u[h+12+T];R[0+T]=O+z,R[8+T]=O-z,R[4+T]=G+B,R[12+T]=G-B}for(T=0;4>T;++T)O=(u=R[0+4*T]+3)+R[3+4*T],z=R[1+4*T]+R[2+4*T],B=R[1+4*T]-R[2+4*T],G=u-R[3+4*T],x[y+0]=O+z>>3,x[y+16]=G+B>>3,x[y+32]=O-z>>3,x[y+48]=G-B>>3,y+=64}function ti(u,h,x){var y,T=h-32,R=kn,O=255-u[T-1];for(y=0;y<x;++y){var z,B=R,G=O+u[h-1];for(z=0;z<x;++z)u[h+z]=B[G+u[T+z]];h+=32}}function yo(u,h){ti(u,h,4)}function ya(u,h){ti(u,h,8)}function _a(u,h){ti(u,h,16)}function Ca(u,h){var x;for(x=0;16>x;++x)n(u,h+32*x,u,h-32,16)}function _o(u,h){var x;for(x=16;0<x;--x)a(u,h,u[h-1],16),h+=32}function yn(u,h,x){var y;for(y=0;16>y;++y)a(h,x+32*y,u,16)}function ri(u,h){var x,y=16;for(x=0;16>x;++x)y+=u[h-1+32*x]+u[h+x-32];yn(y>>5,u,h)}function Sa(u,h){var x,y=8;for(x=0;16>x;++x)y+=u[h-1+32*x];yn(y>>4,u,h)}function _i(u,h){var x,y=8;for(x=0;16>x;++x)y+=u[h+x-32];yn(y>>4,u,h)}function Co(u,h){yn(128,u,h)}function xt(u,h,x){return u+2*h+x+2>>2}function Aa(u,h){var x,y=h-32;for(y=new Uint8Array([xt(u[y-1],u[y+0],u[y+1]),xt(u[y+0],u[y+1],u[y+2]),xt(u[y+1],u[y+2],u[y+3]),xt(u[y+2],u[y+3],u[y+4])]),x=0;4>x;++x)n(u,h+32*x,y,0,y.length)}function ka(u,h){var x=u[h-1],y=u[h-1+32],T=u[h-1+64],R=u[h-1+96];ke(u,h+0,16843009*xt(u[h-1-32],x,y)),ke(u,h+32,16843009*xt(x,y,T)),ke(u,h+64,16843009*xt(y,T,R)),ke(u,h+96,16843009*xt(T,R,R))}function Ma(u,h){var x,y=4;for(x=0;4>x;++x)y+=u[h+x-32]+u[h-1+32*x];for(y>>=3,x=0;4>x;++x)a(u,h+32*x,y,4)}function os(u,h){var x=u[h-1+0],y=u[h-1+32],T=u[h-1+64],R=u[h-1-32],O=u[h+0-32],z=u[h+1-32],B=u[h+2-32],G=u[h+3-32];u[h+0+96]=xt(y,T,u[h-1+96]),u[h+1+96]=u[h+0+64]=xt(x,y,T),u[h+2+96]=u[h+1+64]=u[h+0+32]=xt(R,x,y),u[h+3+96]=u[h+2+64]=u[h+1+32]=u[h+0+0]=xt(O,R,x),u[h+3+64]=u[h+2+32]=u[h+1+0]=xt(z,O,R),u[h+3+32]=u[h+2+0]=xt(B,z,O),u[h+3+0]=xt(G,B,z)}function dn(u,h){var x=u[h+1-32],y=u[h+2-32],T=u[h+3-32],R=u[h+4-32],O=u[h+5-32],z=u[h+6-32],B=u[h+7-32];u[h+0+0]=xt(u[h+0-32],x,y),u[h+1+0]=u[h+0+32]=xt(x,y,T),u[h+2+0]=u[h+1+32]=u[h+0+64]=xt(y,T,R),u[h+3+0]=u[h+2+32]=u[h+1+64]=u[h+0+96]=xt(T,R,O),u[h+3+32]=u[h+2+64]=u[h+1+96]=xt(R,O,z),u[h+3+64]=u[h+2+96]=xt(O,z,B),u[h+3+96]=xt(z,B,B)}function _n(u,h){var x=u[h-1+0],y=u[h-1+32],T=u[h-1+64],R=u[h-1-32],O=u[h+0-32],z=u[h+1-32],B=u[h+2-32],G=u[h+3-32];u[h+0+0]=u[h+1+64]=R+O+1>>1,u[h+1+0]=u[h+2+64]=O+z+1>>1,u[h+2+0]=u[h+3+64]=z+B+1>>1,u[h+3+0]=B+G+1>>1,u[h+0+96]=xt(T,y,x),u[h+0+64]=xt(y,x,R),u[h+0+32]=u[h+1+96]=xt(x,R,O),u[h+1+32]=u[h+2+96]=xt(R,O,z),u[h+2+32]=u[h+3+96]=xt(O,z,B),u[h+3+32]=xt(z,B,G)}function Ci(u,h){var x=u[h+0-32],y=u[h+1-32],T=u[h+2-32],R=u[h+3-32],O=u[h+4-32],z=u[h+5-32],B=u[h+6-32],G=u[h+7-32];u[h+0+0]=x+y+1>>1,u[h+1+0]=u[h+0+64]=y+T+1>>1,u[h+2+0]=u[h+1+64]=T+R+1>>1,u[h+3+0]=u[h+2+64]=R+O+1>>1,u[h+0+32]=xt(x,y,T),u[h+1+32]=u[h+0+96]=xt(y,T,R),u[h+2+32]=u[h+1+96]=xt(T,R,O),u[h+3+32]=u[h+2+96]=xt(R,O,z),u[h+3+64]=xt(O,z,B),u[h+3+96]=xt(z,B,G)}function Jo(u,h){var x=u[h-1+0],y=u[h-1+32],T=u[h-1+64],R=u[h-1+96];u[h+0+0]=x+y+1>>1,u[h+2+0]=u[h+0+32]=y+T+1>>1,u[h+2+32]=u[h+0+64]=T+R+1>>1,u[h+1+0]=xt(x,y,T),u[h+3+0]=u[h+1+32]=xt(y,T,R),u[h+3+32]=u[h+1+64]=xt(T,R,R),u[h+3+64]=u[h+2+64]=u[h+0+96]=u[h+1+96]=u[h+2+96]=u[h+3+96]=R}function Fn(u,h){var x=u[h-1+0],y=u[h-1+32],T=u[h-1+64],R=u[h-1+96],O=u[h-1-32],z=u[h+0-32],B=u[h+1-32],G=u[h+2-32];u[h+0+0]=u[h+2+32]=x+O+1>>1,u[h+0+32]=u[h+2+64]=y+x+1>>1,u[h+0+64]=u[h+2+96]=T+y+1>>1,u[h+0+96]=R+T+1>>1,u[h+3+0]=xt(z,B,G),u[h+2+0]=xt(O,z,B),u[h+1+0]=u[h+3+32]=xt(x,O,z),u[h+1+32]=u[h+3+64]=xt(y,x,O),u[h+1+64]=u[h+3+96]=xt(T,y,x),u[h+1+96]=xt(R,T,y)}function qi(u,h){var x;for(x=0;8>x;++x)n(u,h+32*x,u,h-32,8)}function Si(u,h){var x;for(x=0;8>x;++x)a(u,h,u[h-1],8),h+=32}function Vi(u,h,x){var y;for(y=0;8>y;++y)a(h,x+32*y,u,8)}function Yi(u,h){var x,y=8;for(x=0;8>x;++x)y+=u[h+x-32]+u[h-1+32*x];Vi(y>>4,u,h)}function ja(u,h){var x,y=4;for(x=0;8>x;++x)y+=u[h+x-32];Vi(y>>3,u,h)}function So(u,h){var x,y=4;for(x=0;8>x;++x)y+=u[h-1+32*x];Vi(y>>3,u,h)}function Qo(u,h){Vi(128,u,h)}function Gi(u,h,x){var y=u[h-x],T=u[h+0],R=3*(T-y)+p1[1020+u[h-2*x]-u[h+x]],O=qs[112+(R+4>>3)];u[h-x]=kn[255+y+qs[112+(R+3>>3)]],u[h+0]=kn[255+T-O]}function Wi(u,h,x,y){var T=u[h+0],R=u[h+x];return Hn[255+u[h-2*x]-u[h-x]]>y||Hn[255+R-T]>y}function Ko(u,h,x,y){return 4*Hn[255+u[h-x]-u[h+0]]+Hn[255+u[h-2*x]-u[h+x]]<=y}function Xi(u,h,x,y,T){var R=u[h-3*x],O=u[h-2*x],z=u[h-x],B=u[h+0],G=u[h+x],ie=u[h+2*x],xe=u[h+3*x];return 4*Hn[255+z-B]+Hn[255+O-G]>y?0:Hn[255+u[h-4*x]-R]<=T&&Hn[255+R-O]<=T&&Hn[255+O-z]<=T&&Hn[255+xe-ie]<=T&&Hn[255+ie-G]<=T&&Hn[255+G-B]<=T}function Ai(u,h,x,y){var T=2*y+1;for(y=0;16>y;++y)Ko(u,h+y,x,T)&&Gi(u,h+y,x)}function ni(u,h,x,y){var T=2*y+1;for(y=0;16>y;++y)Ko(u,h+y*x,1,T)&&Gi(u,h+y*x,1)}function Na(u,h,x,y){var T;for(T=3;0<T;--T)Ai(u,h+=4*x,x,y)}function ii(u,h,x,y){var T;for(T=3;0<T;--T)ni(u,h+=4,x,y)}function Cn(u,h,x,y,T,R,O,z){for(R=2*R+1;0<T--;){if(Xi(u,h,x,R,O))if(Wi(u,h,x,z))Gi(u,h,x);else{var B=u,G=h,ie=x,xe=B[G-2*ie],W=B[G-ie],ae=B[G+0],he=B[G+ie],ye=B[G+2*ie],me=27*(Ae=p1[1020+3*(ae-W)+p1[1020+xe-he]])+63>>7,Ce=18*Ae+63>>7,Ae=9*Ae+63>>7;B[G-3*ie]=kn[255+B[G-3*ie]+Ae],B[G-2*ie]=kn[255+xe+Ce],B[G-ie]=kn[255+W+me],B[G+0]=kn[255+ae-me],B[G+ie]=kn[255+he-Ce],B[G+2*ie]=kn[255+ye-Ae]}h+=y}}function rn(u,h,x,y,T,R,O,z){for(R=2*R+1;0<T--;){if(Xi(u,h,x,R,O))if(Wi(u,h,x,z))Gi(u,h,x);else{var B=u,G=h,ie=x,xe=B[G-ie],W=B[G+0],ae=B[G+ie],he=qs[112+(4+(ye=3*(W-xe))>>3)],ye=qs[112+(ye+3>>3)],me=he+1>>1;B[G-2*ie]=kn[255+B[G-2*ie]+me],B[G-ie]=kn[255+xe+ye],B[G+0]=kn[255+W-he],B[G+ie]=kn[255+ae-me]}h+=y}}function Zi(u,h,x,y,T,R){Cn(u,h,x,1,16,y,T,R)}function Ao(u,h,x,y,T,R){Cn(u,h,1,x,16,y,T,R)}function Sn(u,h,x,y,T,R){var O;for(O=3;0<O;--O)rn(u,h+=4*x,x,1,16,y,T,R)}function ea(u,h,x,y,T,R){var O;for(O=3;0<O;--O)rn(u,h+=4,1,x,16,y,T,R)}function g(u,h,x,y,T,R,O,z){Cn(u,h,T,1,8,R,O,z),Cn(x,y,T,1,8,R,O,z)}function N(u,h,x,y,T,R,O,z){Cn(u,h,1,T,8,R,O,z),Cn(x,y,1,T,8,R,O,z)}function Y(u,h,x,y,T,R,O,z){rn(u,h+4*T,T,1,8,R,O,z),rn(x,y+4*T,T,1,8,R,O,z)}function ee(u,h,x,y,T,R,O,z){rn(u,h+4,1,T,8,R,O,z),rn(x,y+4,1,T,8,R,O,z)}function ce(){this.ba=new Et,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new jt,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function Se(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function je(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Ze(){this.ua=0,this.Wa=new Ye,this.vb=new Ye,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new re,this.yc=new F}function tt(){this.xb=this.a=0,this.l=new bo,this.ca=new Et,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new H,this.Pb=0,this.wd=new H,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Ze,this.ab=0,this.gc=l(4,je),this.Oc=0}function pt(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new bo,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function bt(u,h,x,y,T,R,O){for(u=u==null?0:u[h+0],h=0;h<O;++h)T[R+h]=u+x[y+h]&255,u=T[R+h]}function Nt(u,h,x,y,T,R,O){var z;if(u==null)bt(null,null,x,y,T,R,O);else for(z=0;z<O;++z)T[R+z]=u[h+z]+x[y+z]&255}function Gt(u,h,x,y,T,R,O){if(u==null)bt(null,null,x,y,T,R,O);else{var z,B=u[h+0],G=B,ie=B;for(z=0;z<O;++z)G=ie+(B=u[h+z])-G,ie=x[y+z]+(-256&G?0>G?0:255:G)&255,G=B,T[R+z]=ie}}function ur(u,h,x,y){var T=h.width,R=h.o;if(t(u!=null&&h!=null),0>x||0>=y||x+y>R)return null;if(!u.Cc){if(u.ga==null){var O;if(u.ga=new pt,(O=u.ga==null)||(O=h.width*h.o,t(u.Gb.length==0),u.Gb=s(O),u.Uc=0,u.Gb==null?O=0:(u.mb=u.Gb,u.nb=u.Uc,u.rc=null,O=1),O=!O),!O){O=u.ga;var z=u.Fa,B=u.P,G=u.qc,ie=u.mb,xe=u.nb,W=B+1,ae=G-1,he=O.l;if(t(z!=null&&ie!=null&&h!=null),Po[0]=null,Po[1]=bt,Po[2]=Nt,Po[3]=Gt,O.ca=ie,O.tb=xe,O.c=h.width,O.i=h.height,t(0<O.c&&0<O.i),1>=G)h=0;else if(O.$a=3&z[B+0],O.Z=z[B+0]>>2&3,O.Lc=z[B+0]>>4&3,B=z[B+0]>>6&3,0>O.$a||1<O.$a||4<=O.Z||1<O.Lc||B)h=0;else if(he.put=dt,he.ac=Jr,he.bc=cn,he.ma=O,he.width=h.width,he.height=h.height,he.Da=h.Da,he.v=h.v,he.va=h.va,he.j=h.j,he.o=h.o,O.$a)e:{t(O.$a==1),h=Ui();t:for(;;){if(h==null){h=0;break e}if(t(O!=null),O.mc=h,h.c=O.c,h.i=O.i,h.l=O.l,h.l.ma=O,h.l.width=O.c,h.l.height=O.i,h.a=0,ge(h.m,z,W,ae),!Kr(O.c,O.i,1,h,null)||(h.ab==1&&h.gc[0].hc==3&&Er(h.s)?(O.ic=1,z=h.c*h.i,h.Ta=null,h.Ua=0,h.V=s(z),h.Ba=0,h.V==null?(h.a=1,h=0):h=1):(O.ic=0,h=vi(h,O.c)),!h))break t;h=1;break e}O.mc=null,h=0}else h=ae>=O.c*O.i;O=!h}if(O)return null;u.ga.Lc!=1?u.Ga=0:y=R-x}t(u.ga!=null),t(x+y<=R);e:{if(h=(z=u.ga).c,R=z.l.o,z.$a==0){if(W=u.rc,ae=u.Vc,he=u.Fa,B=u.P+1+x*h,G=u.mb,ie=u.nb+x*h,t(B<=u.P+u.qc),z.Z!=0)for(t(Po[z.Z]!=null),O=0;O<y;++O)Po[z.Z](W,ae,he,B,G,ie,h),W=G,ae=ie,ie+=h,B+=h;else for(O=0;O<y;++O)n(G,ie,he,B,h),W=G,ae=ie,ie+=h,B+=h;u.rc=W,u.Vc=ae}else{if(t(z.mc!=null),h=x+y,t((O=z.mc)!=null),t(h<=O.i),O.C>=h)h=1;else if(z.ic||nn(),z.ic){z=O.V,W=O.Ba,ae=O.c;var ye=O.i,me=(he=1,B=O.$/ae,G=O.$%ae,ie=O.m,xe=O.s,O.$),Ce=ae*ye,Ae=ae*h,Le=xe.wc,Ie=me<Ae?Ft(xe,G,B):null;t(me<=Ce),t(h<=ye),t(Er(xe));t:for(;;){for(;!ie.h&&me<Ae;){if(G&Le||(Ie=Ft(xe,G,B)),t(Ie!=null),le(ie),256>(ye=Tt(Ie.G[0],Ie.H[0],ie)))z[W+me]=ye,++me,++G>=ae&&(G=0,++B<=h&&!(B%16)&&Dr(O,B));else{if(!(280>ye)){he=0;break t}ye=vn(ye-256,ie);var at,Je=Tt(Ie.G[4],Ie.H[4],ie);if(le(ie),!(me>=(Je=bn(ae,Je=vn(Je,ie)))&&Ce-me>=ye)){he=0;break t}for(at=0;at<ye;++at)z[W+me+at]=z[W+me+at-Je];for(me+=ye,G+=ye;G>=ae;)G-=ae,++B<=h&&!(B%16)&&Dr(O,B);me<Ae&&G&Le&&(Ie=Ft(xe,G,B))}t(ie.h==te(ie))}Dr(O,B>h?h:B);break t}!he||ie.h&&me<Ce?(he=0,O.a=ie.h?5:3):O.$=me,h=he}else h=Ar(O,O.V,O.Ba,O.c,O.i,h,bi);if(!h){y=0;break e}}x+y>=R&&(u.Cc=1),y=1}if(!y)return null;if(u.Cc&&((y=u.ga)!=null&&(y.mc=null),u.ga=null,0<u.Ga))return alert("todo:WebPDequantizeLevels"),null}return u.nb+x*T}function Vt(u,h,x,y,T,R){for(;0<T--;){var O,z=u,B=h+(x?1:0),G=u,ie=h+(x?0:3);for(O=0;O<y;++O){var xe=G[ie+4*O];xe!=255&&(xe*=32897,z[B+4*O+0]=z[B+4*O+0]*xe>>23,z[B+4*O+1]=z[B+4*O+1]*xe>>23,z[B+4*O+2]=z[B+4*O+2]*xe>>23)}h+=R}}function dr(u,h,x,y,T){for(;0<y--;){var R;for(R=0;R<x;++R){var O=u[h+2*R+0],z=15&(G=u[h+2*R+1]),B=4369*z,G=(240&G|G>>4)*B>>16;u[h+2*R+0]=(240&O|O>>4)*B>>16&240|(15&O|O<<4)*B>>16>>4&15,u[h+2*R+1]=240&G|z}h+=T}}function hr(u,h,x,y,T,R,O,z){var B,G,ie=255;for(G=0;G<T;++G){for(B=0;B<y;++B){var xe=u[h+B];R[O+4*B]=xe,ie&=xe}h+=x,O+=z}return ie!=255}function ar(u,h,x,y,T){var R;for(R=0;R<T;++R)x[y+R]=u[h+R]>>8}function nn(){ss=Vt,R0=dr,O0=hr,F0=ar}function $r(u,h,x){I[u]=function(y,T,R,O,z,B,G,ie,xe,W,ae,he,ye,me,Ce,Ae,Le){var Ie,at=Le-1>>1,Je=z[B+0]|G[ie+0]<<16,At=xe[W+0]|ae[he+0]<<16;t(y!=null);var it=3*Je+At+131074>>2;for(h(y[T+0],255&it,it>>16,ye,me),R!=null&&(it=3*At+Je+131074>>2,h(R[O+0],255&it,it>>16,Ce,Ae)),Ie=1;Ie<=at;++Ie){var It=z[B+Ie]|G[ie+Ie]<<16,jr=xe[W+Ie]|ae[he+Ie]<<16,kt=Je+It+At+jr+524296,ot=kt+2*(It+At)>>3;it=ot+Je>>1,Je=(kt=kt+2*(Je+jr)>>3)+It>>1,h(y[T+2*Ie-1],255&it,it>>16,ye,me+(2*Ie-1)*x),h(y[T+2*Ie-0],255&Je,Je>>16,ye,me+(2*Ie-0)*x),R!=null&&(it=kt+At>>1,Je=ot+jr>>1,h(R[O+2*Ie-1],255&it,it>>16,Ce,Ae+(2*Ie-1)*x),h(R[O+2*Ie+0],255&Je,Je>>16,Ce,Ae+(2*Ie+0)*x)),Je=It,At=jr}1&Le||(it=3*Je+At+131074>>2,h(y[T+Le-1],255&it,it>>16,ye,me+(Le-1)*x),R!=null&&(it=3*At+Je+131074>>2,h(R[O+Le-1],255&it,it>>16,Ce,Ae+(Le-1)*x)))}}function ta(){$n[Vs]=c5,$n[Ys]=X0,$n[q0]=u5,$n[Gs]=Z0,$n[Ws]=J0,$n[m1]=Q0,$n[V0]=d5,$n[g1]=X0,$n[x1]=Z0,$n[Xs]=J0,$n[v1]=Q0}function Ji(u){return u&-16384?0>u?0:255:u>>h5}function Qi(u,h){return Ji((19077*u>>8)+(26149*h>>8)-14234)}function ki(u,h,x){return Ji((19077*u>>8)-(6419*h>>8)-(13320*x>>8)+8708)}function Ki(u,h){return Ji((19077*u>>8)+(33050*h>>8)-17685)}function eo(u,h,x,y,T){y[T+0]=Qi(u,x),y[T+1]=ki(u,h,x),y[T+2]=Ki(u,h)}function Mi(u,h,x,y,T){y[T+0]=Ki(u,h),y[T+1]=ki(u,h,x),y[T+2]=Qi(u,x)}function Lr(u,h,x,y,T){var R=ki(u,h,x);h=R<<3&224|Ki(u,h)>>3,y[T+0]=248&Qi(u,x)|R>>5,y[T+1]=h}function to(u,h,x,y,T){var R=240&Ki(u,h)|15;y[T+0]=240&Qi(u,x)|ki(u,h,x)>>4,y[T+1]=R}function ro(u,h,x,y,T){y[T+0]=255,eo(u,h,x,y,T+1)}function ra(u,h,x,y,T){Mi(u,h,x,y,T),y[T+3]=255}function na(u,h,x,y,T){eo(u,h,x,y,T),y[T+3]=255}function rr(u,h){return 0>u?0:u>h?h:u}function oi(u,h,x){I[u]=function(y,T,R,O,z,B,G,ie,xe){for(var W=ie+(-2&xe)*x;ie!=W;)h(y[T+0],R[O+0],z[B+0],G,ie),h(y[T+1],R[O+0],z[B+0],G,ie+x),T+=2,++O,++B,ie+=2*x;1&xe&&h(y[T+0],R[O+0],z[B+0],G,ie)}}function ko(u,h,x){return x==0?u==0?h==0?6:5:h==0?4:0:x}function Ia(u,h,x,y,T){switch(u>>>30){case 3:Bn(h,x,y,T,0);break;case 2:Un(h,x,y,T);break;case 1:zt(h,x,y,T)}}function hn(u,h){var x,y,T=h.M,R=h.Nb,O=u.oc,z=u.pc+40,B=u.oc,G=u.pc+584,ie=u.oc,xe=u.pc+600;for(x=0;16>x;++x)O[z+32*x-1]=129;for(x=0;8>x;++x)B[G+32*x-1]=129,ie[xe+32*x-1]=129;for(0<T?O[z-1-32]=B[G-1-32]=ie[xe-1-32]=129:(a(O,z-32-1,127,21),a(B,G-32-1,127,9),a(ie,xe-32-1,127,9)),y=0;y<u.za;++y){var W=h.ya[h.aa+y];if(0<y){for(x=-1;16>x;++x)n(O,z+32*x-4,O,z+32*x+12,4);for(x=-1;8>x;++x)n(B,G+32*x-4,B,G+32*x+4,4),n(ie,xe+32*x-4,ie,xe+32*x+4,4)}var ae=u.Gd,he=u.Hd+y,ye=W.ad,me=W.Hc;if(0<T&&(n(O,z-32,ae[he].y,0,16),n(B,G-32,ae[he].f,0,8),n(ie,xe-32,ae[he].ea,0,8)),W.Za){var Ce=O,Ae=z-32+16;for(0<T&&(y>=u.za-1?a(Ce,Ae,ae[he].y[15],4):n(Ce,Ae,ae[he+1].y,0,4)),x=0;4>x;x++)Ce[Ae+128+x]=Ce[Ae+256+x]=Ce[Ae+384+x]=Ce[Ae+0+x];for(x=0;16>x;++x,me<<=2)Ce=O,Ae=z+e2[x],li[W.Ob[x]](Ce,Ae),Ia(me,ye,16*+x,Ce,Ae)}else if(Ce=ko(y,T,W.Ob[0]),Lo[Ce](O,z),me!=0)for(x=0;16>x;++x,me<<=2)Ia(me,ye,16*+x,O,z+e2[x]);for(x=W.Gc,Ce=ko(y,T,W.Dd),oo[Ce](B,G),oo[Ce](ie,xe),me=ye,Ce=B,Ae=G,255&(W=0|x)&&(170&W?Ii(me,256,Ce,Ae):Wt(me,256,Ce,Ae)),W=ie,me=xe,255&(x>>=8)&&(170&x?Ii(ye,320,W,me):Wt(ye,320,W,me)),T<u.Ub-1&&(n(ae[he].y,0,O,z+480,16),n(ae[he].f,0,B,G+224,8),n(ae[he].ea,0,ie,xe+224,8)),x=8*R*u.B,ae=u.sa,he=u.ta+16*y+16*R*u.R,ye=u.qa,W=u.ra+8*y+x,me=u.Ha,Ce=u.Ia+8*y+x,x=0;16>x;++x)n(ae,he+x*u.R,O,z+32*x,16);for(x=0;8>x;++x)n(ye,W+x*u.B,B,G+32*x,8),n(me,Ce+x*u.B,ie,xe+32*x,8)}}function ji(u,h,x,y,T,R,O,z,B){var G=[0],ie=[0],xe=0,W=B!=null?B.kd:0,ae=B??new Se;if(u==null||12>x)return 7;ae.data=u,ae.w=h,ae.ha=x,h=[h],x=[x],ae.gb=[ae.gb];e:{var he=h,ye=x,me=ae.gb;if(t(u!=null),t(ye!=null),t(me!=null),me[0]=0,12<=ye[0]&&!r(u,he[0],"RIFF")){if(r(u,he[0]+8,"WEBP")){me=3;break e}var Ce=de(u,he[0]+4);if(12>Ce||4294967286<Ce){me=3;break e}if(W&&Ce>ye[0]-8){me=7;break e}me[0]=Ce,he[0]+=12,ye[0]-=12}me=0}if(me!=0)return me;for(Ce=0<ae.gb[0],x=x[0];;){e:{var Ae=u;ye=h,me=x;var Le=G,Ie=ie,at=he=[0];if((it=xe=[xe])[0]=0,8>me[0])me=7;else{if(!r(Ae,ye[0],"VP8X")){if(de(Ae,ye[0]+4)!=10){me=3;break e}if(18>me[0]){me=7;break e}var Je=de(Ae,ye[0]+8),At=1+Re(Ae,ye[0]+12);if(2147483648<=At*(Ae=1+Re(Ae,ye[0]+15))){me=3;break e}at!=null&&(at[0]=Je),Le!=null&&(Le[0]=At),Ie!=null&&(Ie[0]=Ae),ye[0]+=18,me[0]-=18,it[0]=1}me=0}}if(xe=xe[0],he=he[0],me!=0)return me;if(ye=!!(2&he),!Ce&&xe)return 3;if(R!=null&&(R[0]=!!(16&he)),O!=null&&(O[0]=ye),z!=null&&(z[0]=0),O=G[0],he=ie[0],xe&&ye&&B==null){me=0;break}if(4>x){me=7;break}if(Ce&&xe||!Ce&&!xe&&!r(u,h[0],"ALPH")){x=[x],ae.na=[ae.na],ae.P=[ae.P],ae.Sa=[ae.Sa];e:{Je=u,me=h,Ce=x;var it=ae.gb;Le=ae.na,Ie=ae.P,at=ae.Sa,At=22,t(Je!=null),t(Ce!=null),Ae=me[0];var It=Ce[0];for(t(Le!=null),t(at!=null),Le[0]=null,Ie[0]=null,at[0]=0;;){if(me[0]=Ae,Ce[0]=It,8>It){me=7;break e}var jr=de(Je,Ae+4);if(4294967286<jr){me=3;break e}var kt=8+jr+1&-2;if(At+=kt,0<it&&At>it){me=3;break e}if(!r(Je,Ae,"VP8 ")||!r(Je,Ae,"VP8L")){me=0;break e}if(It[0]<kt){me=7;break e}r(Je,Ae,"ALPH")||(Le[0]=Je,Ie[0]=Ae+8,at[0]=jr),Ae+=kt,It-=kt}}if(x=x[0],ae.na=ae.na[0],ae.P=ae.P[0],ae.Sa=ae.Sa[0],me!=0)break}x=[x],ae.Ja=[ae.Ja],ae.xa=[ae.xa];e:if(it=u,me=h,Ce=x,Le=ae.gb[0],Ie=ae.Ja,at=ae.xa,Je=me[0],Ae=!r(it,Je,"VP8 "),At=!r(it,Je,"VP8L"),t(it!=null),t(Ce!=null),t(Ie!=null),t(at!=null),8>Ce[0])me=7;else{if(Ae||At){if(it=de(it,Je+4),12<=Le&&it>Le-12){me=3;break e}if(W&&it>Ce[0]-8){me=7;break e}Ie[0]=it,me[0]+=8,Ce[0]-=8,at[0]=At}else at[0]=5<=Ce[0]&&it[Je+0]==47&&!(it[Je+4]>>5),Ie[0]=Ce[0];me=0}if(x=x[0],ae.Ja=ae.Ja[0],ae.xa=ae.xa[0],h=h[0],me!=0)break;if(4294967286<ae.Ja)return 3;if(z==null||ye||(z[0]=ae.xa?2:1),O=[O],he=[he],ae.xa){if(5>x){me=7;break}z=O,W=he,ye=R,u==null||5>x?u=0:5<=x&&u[h+0]==47&&!(u[h+4]>>5)?(Ce=[0],it=[0],Le=[0],ge(Ie=new H,u,h,x),xn(Ie,Ce,it,Le)?(z!=null&&(z[0]=Ce[0]),W!=null&&(W[0]=it[0]),ye!=null&&(ye[0]=Le[0]),u=1):u=0):u=0}else{if(10>x){me=7;break}z=he,u==null||10>x||!Wo(u,h+3,x-3)?u=0:(W=u[h+0]|u[h+1]<<8|u[h+2]<<16,ye=16383&(u[h+7]<<8|u[h+6]),u=16383&(u[h+9]<<8|u[h+8]),1&W||3<(W>>1&7)||!(W>>4&1)||W>>5>=ae.Ja||!ye||!u?u=0:(O&&(O[0]=ye),z&&(z[0]=u),u=1))}if(!u||(O=O[0],he=he[0],xe&&(G[0]!=O||ie[0]!=he)))return 3;B!=null&&(B[0]=ae,B.offset=h-B.w,t(4294967286>h-B.w),t(B.offset==B.ha-x));break}return me==0||me==7&&xe&&B==null?(R!=null&&(R[0]|=ae.na!=null&&0<ae.na.length),y!=null&&(y[0]=O),T!=null&&(T[0]=he),0):me}function Mo(u,h,x){var y=h.width,T=h.height,R=0,O=0,z=y,B=T;if(h.Da=u!=null&&0<u.Da,h.Da&&(z=u.cd,B=u.bd,R=u.v,O=u.j,11>x||(R&=-2,O&=-2),0>R||0>O||0>=z||0>=B||R+z>y||O+B>T))return 0;if(h.v=R,h.j=O,h.va=R+z,h.o=O+B,h.U=z,h.T=B,h.da=u!=null&&0<u.da,h.da){if(!De(z,B,x=[u.ib],R=[u.hb]))return 0;h.ib=x[0],h.hb=R[0]}return h.ob=u!=null&&u.ob,h.Kb=u==null||!u.Sd,h.da&&(h.ob=h.ib<3*y/4&&h.hb<3*T/4,h.Kb=0),1}function Q(u){if(u==null)return 2;if(11>u.S){var h=u.f.RGBA;h.fb+=(u.height-1)*h.A,h.A=-h.A}else h=u.f.kb,u=u.height,h.O+=(u-1)*h.fa,h.fa=-h.fa,h.N+=(u-1>>1)*h.Ab,h.Ab=-h.Ab,h.W+=(u-1>>1)*h.Db,h.Db=-h.Db,h.F!=null&&(h.J+=(u-1)*h.lb,h.lb=-h.lb);return 0}function Ne(u,h,x,y){if(y==null||0>=u||0>=h)return 2;if(x!=null){if(x.Da){var T=x.cd,R=x.bd,O=-2&x.v,z=-2&x.j;if(0>O||0>z||0>=T||0>=R||O+T>u||z+R>h)return 2;u=T,h=R}if(x.da){if(!De(u,h,T=[x.ib],R=[x.hb]))return 2;u=T[0],h=R[0]}}y.width=u,y.height=h;e:{var B=y.width,G=y.height;if(u=y.S,0>=B||0>=G||!(u>=Vs&&13>u))u=2;else{if(0>=y.Rd&&y.sd==null){O=R=T=h=0;var ie=(z=B*t2[u])*G;if(11>u||(R=(G+1)/2*(h=(B+1)/2),u==12&&(O=(T=B)*G)),(G=s(ie+2*R+O))==null){u=1;break e}y.sd=G,11>u?((B=y.f.RGBA).eb=G,B.fb=0,B.A=z,B.size=ie):((B=y.f.kb).y=G,B.O=0,B.fa=z,B.Fd=ie,B.f=G,B.N=0+ie,B.Ab=h,B.Cd=R,B.ea=G,B.W=0+ie+R,B.Db=h,B.Ed=R,u==12&&(B.F=G,B.J=0+ie+2*R),B.Tc=O,B.lb=T)}if(h=1,T=y.S,R=y.width,O=y.height,T>=Vs&&13>T)if(11>T)u=y.f.RGBA,h&=(z=Math.abs(u.A))*(O-1)+R<=u.size,h&=z>=R*t2[T],h&=u.eb!=null;else{u=y.f.kb,z=(R+1)/2,ie=(O+1)/2,B=Math.abs(u.fa),G=Math.abs(u.Ab);var xe=Math.abs(u.Db),W=Math.abs(u.lb),ae=W*(O-1)+R;h&=B*(O-1)+R<=u.Fd,h&=G*(ie-1)+z<=u.Cd,h=(h&=xe*(ie-1)+z<=u.Ed)&B>=R&G>=z&xe>=z,h&=u.y!=null,h&=u.f!=null,h&=u.ea!=null,T==12&&(h&=W>=R,h&=ae<=u.Tc,h&=u.F!=null)}else h=0;u=h?0:2}}return u!=0||x!=null&&x.fd&&(u=Q(y)),u}var Xe=64,ft=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],_t=24,sr=32,kr=8,lr=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Pe("Predictor0","PredictorAdd0"),I.Predictor0=function(){return 4278190080},I.Predictor1=function(u){return u},I.Predictor2=function(u,h,x){return h[x+0]},I.Predictor3=function(u,h,x){return h[x+1]},I.Predictor4=function(u,h,x){return h[x-1]},I.Predictor5=function(u,h,x){return Fe(Fe(u,h[x+1]),h[x+0])},I.Predictor6=function(u,h,x){return Fe(u,h[x-1])},I.Predictor7=function(u,h,x){return Fe(u,h[x+0])},I.Predictor8=function(u,h,x){return Fe(h[x-1],h[x+0])},I.Predictor9=function(u,h,x){return Fe(h[x+0],h[x+1])},I.Predictor10=function(u,h,x){return Fe(Fe(u,h[x-1]),Fe(h[x+0],h[x+1]))},I.Predictor11=function(u,h,x){var y=h[x+0];return 0>=Qe(y>>24&255,u>>24&255,(h=h[x-1])>>24&255)+Qe(y>>16&255,u>>16&255,h>>16&255)+Qe(y>>8&255,u>>8&255,h>>8&255)+Qe(255&y,255&u,255&h)?y:u},I.Predictor12=function(u,h,x){var y=h[x+0];return(wt((u>>24&255)+(y>>24&255)-((h=h[x-1])>>24&255))<<24|wt((u>>16&255)+(y>>16&255)-(h>>16&255))<<16|wt((u>>8&255)+(y>>8&255)-(h>>8&255))<<8|wt((255&u)+(255&y)-(255&h)))>>>0},I.Predictor13=function(u,h,x){var y=h[x-1];return(lt((u=Fe(u,h[x+0]))>>24&255,y>>24&255)<<24|lt(u>>16&255,y>>16&255)<<16|lt(u>>8&255,y>>8&255)<<8|lt(255&u,255&y))>>>0};var nr=I.PredictorAdd0;I.PredictorAdd1=mt,Pe("Predictor2","PredictorAdd2"),Pe("Predictor3","PredictorAdd3"),Pe("Predictor4","PredictorAdd4"),Pe("Predictor5","PredictorAdd5"),Pe("Predictor6","PredictorAdd6"),Pe("Predictor7","PredictorAdd7"),Pe("Predictor8","PredictorAdd8"),Pe("Predictor9","PredictorAdd9"),Pe("Predictor10","PredictorAdd10"),Pe("Predictor11","PredictorAdd11"),Pe("Predictor12","PredictorAdd12"),Pe("Predictor13","PredictorAdd13");var fn=I.PredictorAdd2;We("ColorIndexInverseTransform","MapARGB","32b",function(u){return u>>8&255},function(u){return u}),We("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(u){return u},function(u){return u>>8&255});var Kt,ia=I.ColorIndexInverseTransform,An=I.MapARGB,zn=I.VP8LColorIndexInverseTransformAlpha,jo=I.MapAlpha,No=I.VP8LPredictorsAdd=[];No.length=16,(I.VP8LPredictors=[]).length=16,(I.VP8LPredictorsAdd_C=[]).length=16,(I.VP8LPredictors_C=[]).length=16;var Io,To,ai,Ni,si,no,qr,Bn,Un,Ii,zt,Wt,xr,Mr,io,as,Ta,$s,I0,T0,L0,P0,E0,D0,ss,R0,O0,F0,z0=s(511),B0=s(2041),U0=s(225),H0=s(767),$0=0,p1=B0,qs=U0,kn=H0,Hn=z0,Vs=0,Ys=1,q0=2,Gs=3,Ws=4,m1=5,V0=6,g1=7,x1=8,Xs=9,v1=10,Xf=[2,3,7],Zf=[3,3,11],Y0=[280,256,256,256,40],Jf=[0,1,1,1,0],Qf=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],Kf=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],e5=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],t5=8,b1=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],w1=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ls=null,r5=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],n5=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],G0=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],i5=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],o5=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],a5=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],s5=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],Lo=[],li=[],oo=[],l5=1,W0=2,Po=[],$n=[];$r("UpsampleRgbLinePair",eo,3),$r("UpsampleBgrLinePair",Mi,3),$r("UpsampleRgbaLinePair",na,4),$r("UpsampleBgraLinePair",ra,4),$r("UpsampleArgbLinePair",ro,4),$r("UpsampleRgba4444LinePair",to,2),$r("UpsampleRgb565LinePair",Lr,2);var c5=I.UpsampleRgbLinePair,u5=I.UpsampleBgrLinePair,X0=I.UpsampleRgbaLinePair,Z0=I.UpsampleBgraLinePair,J0=I.UpsampleArgbLinePair,Q0=I.UpsampleRgba4444LinePair,d5=I.UpsampleRgb565LinePair,Zs=16,Js=1<<Zs-1,cs=-227,y1=482,h5=6,K0=0,f5=s(256),p5=s(256),m5=s(256),g5=s(256),x5=s(y1-cs),v5=s(y1-cs);oi("YuvToRgbRow",eo,3),oi("YuvToBgrRow",Mi,3),oi("YuvToRgbaRow",na,4),oi("YuvToBgraRow",ra,4),oi("YuvToArgbRow",ro,4),oi("YuvToRgba4444Row",to,2),oi("YuvToRgb565Row",Lr,2);var e2=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Qs=[0,2,8],b5=[8,7,6,4,4,2,2,2,1,1,1,1],w5=1;this.WebPDecodeRGBA=function(u,h,x,y,T){var R=Ys,O=new ce,z=new Et;O.ba=z,z.S=R,z.width=[z.width],z.height=[z.height];var B=z.width,G=z.height,ie=new ht;if(ie==null||u==null)var xe=2;else t(ie!=null),xe=ji(u,h,x,ie.width,ie.height,ie.Pd,ie.Qd,ie.format,null);if(xe!=0?B=0:(B!=null&&(B[0]=ie.width[0]),G!=null&&(G[0]=ie.height[0]),B=1),B){z.width=z.width[0],z.height=z.height[0],y!=null&&(y[0]=z.width),T!=null&&(T[0]=z.height);e:{if(y=new bo,(T=new Se).data=u,T.w=h,T.ha=x,T.kd=1,h=[0],t(T!=null),((u=ji(T.data,T.w,T.ha,null,null,null,h,null,T))==0||u==7)&&h[0]&&(u=4),(h=u)==0){if(t(O!=null),y.data=T.data,y.w=T.w+T.offset,y.ha=T.ha-T.offset,y.put=dt,y.ac=Jr,y.bc=cn,y.ma=O,T.xa){if((u=Ui())==null){O=1;break e}if(function(W,ae){var he=[0],ye=[0],me=[0];t:for(;;){if(W==null)return 0;if(ae==null)return W.a=2,0;if(W.l=ae,W.a=0,ge(W.m,ae.data,ae.w,ae.ha),!xn(W.m,he,ye,me)){W.a=3;break t}if(W.xb=W0,ae.width=he[0],ae.height=ye[0],!Kr(he[0],ye[0],1,W,null))break t;return 1}return t(W.a!=0),0}(u,y)){if(y=(h=Ne(y.width,y.height,O.Oa,O.ba))==0){t:{y=u;r:for(;;){if(y==null){y=0;break t}if(t(y.s.yc!=null),t(y.s.Ya!=null),t(0<y.s.Wb),t((x=y.l)!=null),t((T=x.ma)!=null),y.xb!=0){if(y.ca=T.ba,y.tb=T.tb,t(y.ca!=null),!Mo(T.Oa,x,Gs)){y.a=2;break r}if(!vi(y,x.width)||x.da)break r;if((x.da||Be(y.ca.S))&&nn(),11>y.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),y.ca.f.kb.F!=null&&nn()),y.Pb&&0<y.s.ua&&y.s.vb.X==null&&!U(y.s.vb,y.s.Wa.Xa)){y.a=1;break r}y.xb=0}if(!Ar(y,y.V,y.Ba,y.c,y.i,x.o,Rn))break r;T.Dc=y.Ma,y=1;break t}t(y.a!=0),y=0}y=!y}y&&(h=u.a)}else h=u.a}else{if((u=new ns)==null){O=1;break e}if(u.Fa=T.na,u.P=T.P,u.qc=T.Sa,ba(u,y)){if((h=Ne(y.width,y.height,O.Oa,O.ba))==0){if(u.Aa=0,x=O.Oa,t((T=u)!=null),x!=null){if(0<(B=0>(B=x.Md)?0:100<B?255:255*B/100)){for(G=ie=0;4>G;++G)12>(xe=T.pb[G]).lc&&(xe.ia=B*b5[0>xe.lc?0:xe.lc]>>3),ie|=xe.ia;ie&&(alert("todo:VP8InitRandom"),T.ia=1)}T.Ga=x.Id,100<T.Ga?T.Ga=100:0>T.Ga&&(T.Ga=0)}(function(W,ae){if(W==null)return 0;if(ae==null)return or(W,2,"NULL VP8Io parameter in VP8Decode().");if(!W.cb&&!ba(W,ae))return 0;if(t(W.cb),ae.ac==null||ae.ac(ae)){ae.ob&&(W.L=0);var he=Qs[W.L];if(W.L==2?(W.yb=0,W.zb=0):(W.yb=ae.v-he>>4,W.zb=ae.j-he>>4,0>W.yb&&(W.yb=0),0>W.zb&&(W.zb=0)),W.Va=ae.o+15+he>>4,W.Hb=ae.va+15+he>>4,W.Hb>W.za&&(W.Hb=W.za),W.Va>W.Ub&&(W.Va=W.Ub),0<W.L){var ye=W.ed;for(he=0;4>he;++he){var me;if(W.Qa.Cb){var Ce=W.Qa.Lb[he];W.Qa.Fb||(Ce+=ye.Tb)}else Ce=ye.Tb;for(me=0;1>=me;++me){var Ae=W.gd[he][me],Le=Ce;if(ye.Pc&&(Le+=ye.vd[0],me&&(Le+=ye.od[0])),0<(Le=0>Le?0:63<Le?63:Le)){var Ie=Le;0<ye.wb&&(Ie=4<ye.wb?Ie>>2:Ie>>1)>9-ye.wb&&(Ie=9-ye.wb),1>Ie&&(Ie=1),Ae.dd=Ie,Ae.tc=2*Le+Ie,Ae.ld=40<=Le?2:15<=Le?1:0}else Ae.tc=0;Ae.La=me}}}he=0}else or(W,6,"Frame setup failed"),he=W.a;if(he=he==0){if(he){W.$c=0,0<W.Aa||(W.Ic=w5);t:{he=W.Ic,ye=4*(Ie=W.za);var at=32*Ie,Je=Ie+1,At=0<W.L?Ie*(0<W.Aa?2:1):0,it=(W.Aa==2?2:1)*Ie;if((Ae=ye+832+(me=3*(16*he+Qs[W.L])/2*at)+(Ce=W.Fa!=null&&0<W.Fa.length?W.Kc.c*W.Kc.i:0))!=Ae)he=0;else{if(Ae>W.Vb){if(W.Vb=0,W.Ec=s(Ae),W.Fc=0,W.Ec==null){he=or(W,1,"no memory during frame initialization.");break t}W.Vb=Ae}Ae=W.Ec,Le=W.Fc,W.Ac=Ae,W.Bc=Le,Le+=ye,W.Gd=l(at,va),W.Hd=0,W.rb=l(Je+1,wi),W.sb=1,W.wa=At?l(At,Ur):null,W.Y=0,W.D.Nb=0,W.D.wa=W.wa,W.D.Y=W.Y,0<W.Aa&&(W.D.Y+=Ie),t(!0),W.oc=Ae,W.pc=Le,Le+=832,W.ya=l(it,vo),W.aa=0,W.D.ya=W.ya,W.D.aa=W.aa,W.Aa==2&&(W.D.aa+=Ie),W.R=16*Ie,W.B=8*Ie,Ie=(at=Qs[W.L])*W.R,at=at/2*W.B,W.sa=Ae,W.ta=Le+Ie,W.qa=W.sa,W.ra=W.ta+16*he*W.R+at,W.Ha=W.qa,W.Ia=W.ra+8*he*W.B+at,W.$c=0,Le+=me,W.mb=Ce?Ae:null,W.nb=Ce?Le:null,t(Le+Ce<=W.Fc+W.Vb),On(W),a(W.Ac,W.Bc,0,ye),he=1}}if(he){if(ae.ka=0,ae.y=W.sa,ae.O=W.ta,ae.f=W.qa,ae.N=W.ra,ae.ea=W.Ha,ae.Vd=W.Ia,ae.fa=W.R,ae.Rc=W.B,ae.F=null,ae.J=0,!$0){for(he=-255;255>=he;++he)z0[255+he]=0>he?-he:he;for(he=-1020;1020>=he;++he)B0[1020+he]=-128>he?-128:127<he?127:he;for(he=-112;112>=he;++he)U0[112+he]=-16>he?-16:15<he?15:he;for(he=-255;510>=he;++he)H0[255+he]=0>he?0:255<he?255:he;$0=1}qr=$i,Bn=wa,Ii=is,zt=Hr,Wt=Zo,Un=Xo,xr=Zi,Mr=Ao,io=g,as=N,Ta=Sn,$s=ea,I0=Y,T0=ee,L0=Ai,P0=ni,E0=Na,D0=ii,li[0]=Ma,li[1]=yo,li[2]=Aa,li[3]=ka,li[4]=os,li[5]=_n,li[6]=dn,li[7]=Ci,li[8]=Fn,li[9]=Jo,Lo[0]=ri,Lo[1]=_a,Lo[2]=Ca,Lo[3]=_o,Lo[4]=Sa,Lo[5]=_i,Lo[6]=Co,oo[0]=Yi,oo[1]=ya,oo[2]=qi,oo[3]=Si,oo[4]=So,oo[5]=ja,oo[6]=Qo,he=1}else he=0}he&&(he=function(It,jr){for(It.M=0;It.M<It.Va;++It.M){var kt,ot=It.Jc[It.M&It.Xb],Oe=It.m,vr=It;for(kt=0;kt<vr.za;++kt){var Ct=Oe,Lt=vr,er=Lt.Ac,Or=Lt.Bc+4*kt,on=Lt.zc,fr=Lt.ya[Lt.aa+kt];if(Lt.Qa.Bb?fr.$b=ue(Ct,Lt.Pa.jb[0])?2+ue(Ct,Lt.Pa.jb[2]):ue(Ct,Lt.Pa.jb[1]):fr.$b=0,Lt.kc&&(fr.Ad=ue(Ct,Lt.Bd)),fr.Za=!ue(Ct,145)+0,fr.Za){var Vr=fr.Ob,an=0;for(Lt=0;4>Lt;++Lt){var Nr,Dt=on[0+Lt];for(Nr=0;4>Nr;++Nr){Dt=o5[er[Or+Nr]][Dt];for(var Ht=G0[ue(Ct,Dt[0])];0<Ht;)Ht=G0[2*Ht+ue(Ct,Dt[Ht])];Dt=-Ht,er[Or+Nr]=Dt}n(Vr,an,er,Or,4),an+=4,on[0+Lt]=Dt}}else Dt=ue(Ct,156)?ue(Ct,128)?1:3:ue(Ct,163)?2:0,fr.Ob[0]=Dt,a(er,Or,Dt,4),a(on,0,Dt,4);fr.Dd=ue(Ct,142)?ue(Ct,114)?ue(Ct,183)?1:3:2:0}if(vr.m.Ka)return or(It,7,"Premature end-of-partition0 encountered.");for(;It.ja<It.za;++It.ja){if(vr=ot,Ct=(Oe=It).rb[Oe.sb-1],er=Oe.rb[Oe.sb+Oe.ja],kt=Oe.ya[Oe.aa+Oe.ja],Or=Oe.kc?kt.Ad:0)Ct.la=er.la=0,kt.Za||(Ct.Na=er.Na=0),kt.Hc=0,kt.Gc=0,kt.ia=0;else{var pr,$t;if(Ct=er,er=vr,Or=Oe.Pa.Xc,on=Oe.ya[Oe.aa+Oe.ja],fr=Oe.pb[on.$b],Lt=on.ad,Vr=0,an=Oe.rb[Oe.sb-1],Dt=Nr=0,a(Lt,Vr,0,384),on.Za)var Fr=0,ci=Or[3];else{Ht=s(16);var br=Ct.Na+an.Na;if(br=ls(er,Or[1],br,fr.Eb,0,Ht,0),Ct.Na=an.Na=(0<br)+0,1<br)qr(Ht,0,Lt,Vr);else{var pn=Ht[0]+3>>3;for(Ht=0;256>Ht;Ht+=16)Lt[Vr+Ht]=pn}Fr=1,ci=Or[0]}var Xt=15&Ct.la,Ir=15&an.la;for(Ht=0;4>Ht;++Ht){var Mn=1&Ir;for(pn=$t=0;4>pn;++pn)Xt=Xt>>1|(Mn=(br=ls(er,ci,br=Mn+(1&Xt),fr.Sc,Fr,Lt,Vr))>Fr)<<7,$t=$t<<2|(3<br?3:1<br?2:Lt[Vr+0]!=0),Vr+=16;Xt>>=4,Ir=Ir>>1|Mn<<7,Nr=(Nr<<8|$t)>>>0}for(ci=Xt,Fr=Ir>>4,pr=0;4>pr;pr+=2){for($t=0,Xt=Ct.la>>4+pr,Ir=an.la>>4+pr,Ht=0;2>Ht;++Ht){for(Mn=1&Ir,pn=0;2>pn;++pn)br=Mn+(1&Xt),Xt=Xt>>1|(Mn=0<(br=ls(er,Or[2],br,fr.Qc,0,Lt,Vr)))<<3,$t=$t<<2|(3<br?3:1<br?2:Lt[Vr+0]!=0),Vr+=16;Xt>>=2,Ir=Ir>>1|Mn<<5}Dt|=$t<<4*pr,ci|=Xt<<4<<pr,Fr|=(240&Ir)<<pr}Ct.la=ci,an.la=Fr,on.Hc=Nr,on.Gc=Dt,on.ia=43690&Dt?0:fr.ia,Or=!(Nr|Dt)}if(0<Oe.L&&(Oe.wa[Oe.Y+Oe.ja]=Oe.gd[kt.$b][kt.Za],Oe.wa[Oe.Y+Oe.ja].La|=!Or),vr.Ka)return or(It,7,"Premature end-of-file encountered.")}if(On(It),Oe=jr,vr=1,kt=(ot=It).D,Ct=0<ot.L&&ot.M>=ot.zb&&ot.M<=ot.Va,ot.Aa==0)t:{if(kt.M=ot.M,kt.uc=Ct,hn(ot,kt),vr=1,kt=($t=ot.D).Nb,Ct=(Dt=Qs[ot.L])*ot.R,er=Dt/2*ot.B,Ht=16*kt*ot.R,pn=8*kt*ot.B,Or=ot.sa,on=ot.ta-Ct+Ht,fr=ot.qa,Lt=ot.ra-er+pn,Vr=ot.Ha,an=ot.Ia-er+pn,Ir=(Xt=$t.M)==0,Nr=Xt>=ot.Va-1,ot.Aa==2&&hn(ot,$t),$t.uc)for(Mn=(br=ot).D.M,t(br.D.uc),$t=br.yb;$t<br.Hb;++$t){Fr=$t,ci=Mn;var sn=(jn=(zr=br).D).Nb;pr=zr.R;var jn=jn.wa[jn.Y+Fr],Nn=zr.sa,mn=zr.ta+16*sn*pr+16*Fr,In=jn.dd,Jt=jn.tc;if(Jt!=0)if(t(3<=Jt),zr.L==1)0<Fr&&P0(Nn,mn,pr,Jt+4),jn.La&&D0(Nn,mn,pr,Jt),0<ci&&L0(Nn,mn,pr,Jt+4),jn.La&&E0(Nn,mn,pr,Jt);else{var Tn=zr.B,ui=zr.qa,oa=zr.ra+8*sn*Tn+8*Fr,ao=zr.Ha,zr=zr.Ia+8*sn*Tn+8*Fr;sn=jn.ld,0<Fr&&(Mr(Nn,mn,pr,Jt+4,In,sn),as(ui,oa,ao,zr,Tn,Jt+4,In,sn)),jn.La&&($s(Nn,mn,pr,Jt,In,sn),T0(ui,oa,ao,zr,Tn,Jt,In,sn)),0<ci&&(xr(Nn,mn,pr,Jt+4,In,sn),io(ui,oa,ao,zr,Tn,Jt+4,In,sn)),jn.La&&(Ta(Nn,mn,pr,Jt,In,sn),I0(ui,oa,ao,zr,Tn,Jt,In,sn))}}if(ot.ia&&alert("todo:DitherRow"),Oe.put!=null){if($t=16*Xt,Xt=16*(Xt+1),Ir?(Oe.y=ot.sa,Oe.O=ot.ta+Ht,Oe.f=ot.qa,Oe.N=ot.ra+pn,Oe.ea=ot.Ha,Oe.W=ot.Ia+pn):($t-=Dt,Oe.y=Or,Oe.O=on,Oe.f=fr,Oe.N=Lt,Oe.ea=Vr,Oe.W=an),Nr||(Xt-=Dt),Xt>Oe.o&&(Xt=Oe.o),Oe.F=null,Oe.J=null,ot.Fa!=null&&0<ot.Fa.length&&$t<Xt&&(Oe.J=ur(ot,Oe,$t,Xt-$t),Oe.F=ot.mb,Oe.F==null&&Oe.F.length==0)){vr=or(ot,3,"Could not decode alpha data.");break t}$t<Oe.j&&(Dt=Oe.j-$t,$t=Oe.j,t(!(1&Dt)),Oe.O+=ot.R*Dt,Oe.N+=ot.B*(Dt>>1),Oe.W+=ot.B*(Dt>>1),Oe.F!=null&&(Oe.J+=Oe.width*Dt)),$t<Xt&&(Oe.O+=Oe.v,Oe.N+=Oe.v>>1,Oe.W+=Oe.v>>1,Oe.F!=null&&(Oe.J+=Oe.v),Oe.ka=$t-Oe.j,Oe.U=Oe.va-Oe.v,Oe.T=Xt-$t,vr=Oe.put(Oe))}kt+1!=ot.Ic||Nr||(n(ot.sa,ot.ta-Ct,Or,on+16*ot.R,Ct),n(ot.qa,ot.ra-er,fr,Lt+8*ot.B,er),n(ot.Ha,ot.Ia-er,Vr,an+8*ot.B,er))}if(!vr)return or(It,6,"Output aborted.")}return 1}(W,ae)),ae.bc!=null&&ae.bc(ae),he&=1}return he?(W.cb=0,he):0})(u,y)||(h=u.a)}}else h=u.a}h==0&&O.Oa!=null&&O.Oa.fd&&(h=Q(O.ba))}O=h}R=O!=0?null:11>R?z.f.RGBA.eb:z.f.kb.y}else R=null;return R};var t2=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(I,Z){for(var _="",P=0;P<4;P++)_+=String.fromCharCode(I[Z++]);return _}function p(I,Z){return I[Z+0]|I[Z+1]<<8}function v(I,Z){return(I[Z+0]|I[Z+1]<<8|I[Z+2]<<16)>>>0}function S(I,Z){return(I[Z+0]|I[Z+1]<<8|I[Z+2]<<16|I[Z+3]<<24)>>>0}new d;var m=[0],w=[0],M=[],j=new d,A=e,L=function(I,Z){var _={},P=0,F=!1,$=0,re=0;if(_.frames=[],!function(k,H){for(var J=0;J<4;J++)if(k[H+J]!="RIFF".charCodeAt(J))return!0;return!1}(I,Z)){for(S(I,Z+=4),Z+=8;Z<I.length;){var se=f(I,Z),fe=S(I,Z+=4);Z+=4;var ne=fe+(1&fe);switch(se){case"VP8 ":case"VP8L":_.frames[P]===void 0&&(_.frames[P]={}),(we=_.frames[P]).src_off=F?re:Z-8,we.src_size=$+fe+8,P++,F&&(F=!1,$=0,re=0);break;case"VP8X":(we=_.header={}).feature_flags=I[Z];var ge=Z+4;we.canvas_width=1+v(I,ge),ge+=3,we.canvas_height=1+v(I,ge),ge+=3;break;case"ALPH":F=!0,$=ne+8,re=Z-8;break;case"ANIM":(we=_.header).bgcolor=S(I,Z),ge=Z+4,we.loop_count=p(I,ge),ge+=2;break;case"ANMF":var Me,we;(we=_.frames[P]={}).offset_x=2*v(I,Z),Z+=3,we.offset_y=2*v(I,Z),Z+=3,we.width=1+v(I,Z),Z+=3,we.height=1+v(I,Z),Z+=3,we.duration=v(I,Z),Z+=3,Me=I[Z++],we.dispose=1&Me,we.blend=Me>>1&1}se!="ANMF"&&(Z+=ne)}return _}}(A,0);L.response=A,L.rgbaoutput=!0,L.dataurl=!1;var E=L.header?L.header:null,D=L.frames?L.frames:null;if(E){E.loop_counter=E.loop_count,m=[E.canvas_height],w=[E.canvas_width];for(var q=0;q<D.length&&D[q].blend!=0;q++);}var V=D[0],K=j.WebPDecodeRGBA(A,V.src_off,V.src_size,w,m);V.rgba=K,V.imgwidth=w[0],V.imgheight=m[0];for(var X=0;X<w[0]*m[0]*4;X++)M[X]=K[X];return this.width=w,this.height=m,this.data=M,this}(function(e){var t,r,n,a,s,l,c,d,f,p=function(k){return k=k||{},this.isStrokeTransparent=k.isStrokeTransparent||!1,this.strokeOpacity=k.strokeOpacity||1,this.strokeStyle=k.strokeStyle||"#000000",this.fillStyle=k.fillStyle||"#000000",this.isFillTransparent=k.isFillTransparent||!1,this.fillOpacity=k.fillOpacity||1,this.font=k.font||"10px sans-serif",this.textBaseline=k.textBaseline||"alphabetic",this.textAlign=k.textAlign||"left",this.lineWidth=k.lineWidth||1,this.lineJoin=k.lineJoin||"miter",this.lineCap=k.lineCap||"butt",this.path=k.path||[],this.transform=k.transform!==void 0?k.transform.clone():new d,this.globalCompositeOperation=k.globalCompositeOperation||"normal",this.globalAlpha=k.globalAlpha||1,this.clip_path=k.clip_path||[],this.currentPoint=k.currentPoint||new l,this.miterLimit=k.miterLimit||10,this.lastPoint=k.lastPoint||new l,this.lineDashOffset=k.lineDashOffset||0,this.lineDash=k.lineDash||[],this.margin=k.margin||[0,0,0,0],this.prevPageLastElemOffset=k.prevPageLastElemOffset||0,this.ignoreClearRect=typeof k.ignoreClearRect!="boolean"||k.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new v(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,a=this.internal.getHorizontalCoordinate,s=this.internal.getVerticalCoordinate,l=this.internal.Point,c=this.internal.Rectangle,d=this.internal.Matrix,f=new p}]);var v=function(k){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var H=k;Object.defineProperty(this,"pdf",{get:function(){return H}});var J=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return J},set:function(de){J=!!de}});var te=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return te},set:function(de){te=!!de}});var oe=0;Object.defineProperty(this,"posX",{get:function(){return oe},set:function(de){isNaN(de)||(oe=de)}});var le=0;Object.defineProperty(this,"posY",{get:function(){return le},set:function(de){isNaN(de)||(le=de)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(de){var U;typeof de=="number"?U=[de,de,de,de]:((U=new Array(4))[0]=de[0],U[1]=de.length>=2?de[1]:U[0],U[2]=de.length>=3?de[2]:U[0],U[3]=de.length>=4?de[3]:U[1]),f.margin=U}});var pe=!1;Object.defineProperty(this,"autoPaging",{get:function(){return pe},set:function(de){pe=de}});var ve=0;Object.defineProperty(this,"lastBreak",{get:function(){return ve},set:function(de){ve=de}});var ue=[];Object.defineProperty(this,"pageBreaks",{get:function(){return ue},set:function(de){ue=de}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(de){de instanceof p&&(f=de)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(de){f.path=de}});var ke=[];Object.defineProperty(this,"ctxStack",{get:function(){return ke},set:function(de){ke=de}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(de){var U;U=S(de),this.ctx.fillStyle=U.style,this.ctx.isFillTransparent=U.a===0,this.ctx.fillOpacity=U.a,this.pdf.setFillColor(U.r,U.g,U.b,{a:U.a}),this.pdf.setTextColor(U.r,U.g,U.b,{a:U.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(de){var U=S(de);this.ctx.strokeStyle=U.style,this.ctx.isStrokeTransparent=U.a===0,this.ctx.strokeOpacity=U.a,U.a===0?this.pdf.setDrawColor(255,255,255):(U.a,this.pdf.setDrawColor(U.r,U.g,U.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(de){["butt","round","square"].indexOf(de)!==-1&&(this.ctx.lineCap=de,this.pdf.setLineCap(de))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(de){isNaN(de)||(this.ctx.lineWidth=de,this.pdf.setLineWidth(de))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(de){["bevel","round","miter"].indexOf(de)!==-1&&(this.ctx.lineJoin=de,this.pdf.setLineJoin(de))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(de){isNaN(de)||(this.ctx.miterLimit=de,this.pdf.setMiterLimit(de))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(de){this.ctx.textBaseline=de}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(de){["right","end","center","left","start"].indexOf(de)!==-1&&(this.ctx.textAlign=de)}});var Te=null,Re=null;Object.defineProperty(this,"fontFaces",{get:function(){return Re},set:function(de){Te=null,Re=de}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(de){var U;if(this.ctx.font=de,(U=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(de))!==null){var qe=U[1];U[2];var Ye=U[3],De=U[4];U[5];var _e=U[6],Ue=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(De)[2];De=Math.floor(Ue==="px"?parseFloat(De)*this.pdf.internal.scaleFactor:Ue==="em"?parseFloat(De)*this.pdf.getFontSize():parseFloat(De)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(De);var Pe=function($e){var We,ct,St=[],Ve=$e.trim();if(Ve==="")return oc;if(Ve in Wu)return[Wu[Ve]];for(;Ve!=="";){switch(ct=null,We=(Ve=Zu(Ve)).charAt(0)){case'"':case"'":ct=n9(Ve.substring(1),We);break;default:ct=i9(Ve)}if(ct===null||(St.push(ct[0]),(Ve=Zu(ct[1]))!==""&&Ve.charAt(0)!==","))return oc;Ve=Ve.replace(/^,/,"")}return St}(_e);if(this.fontFaces){var Ge=function($e,We){if(Te===null){var ct=function(St){var Ve=[];return Object.keys(St).forEach(function(ut){St[ut].forEach(function(Mt){var be=null;switch(Mt){case"bold":be={family:ut,weight:"bold"};break;case"italic":be={family:ut,style:"italic"};break;case"bolditalic":be={family:ut,weight:"bold",style:"italic"};break;case"":case"normal":be={family:ut}}be!==null&&(be.ref={name:ut,style:Mt},Ve.push(be))})}),Ve}($e.getFontList());Te=function(St){for(var Ve={},ut=0;ut<St.length;++ut){var Mt=ic(St[ut]),be=Mt.family,He=Mt.stretch,Be=Mt.style,gt=Mt.weight;Ve[be]=Ve[be]||{},Ve[be][He]=Ve[be][He]||{},Ve[be][He][Be]=Ve[be][He][Be]||{},Ve[be][He][Be][gt]=Mt}return Ve}(ct.concat(We))}return Te}(this.pdf,this.fontFaces),Fe=Pe.map(function($e){return{family:$e,stretch:"normal",weight:Ye,style:qe}}),wt=function($e,We,ct){for(var St=(ct=ct||{}).defaultFontFamily||"times",Ve=Object.assign({},r9,ct.genericFontFamilies||{}),ut=null,Mt=null,be=0;be<We.length;++be)if(Ve[(ut=ic(We[be])).family]&&(ut.family=Ve[ut.family]),$e.hasOwnProperty(ut.family)){Mt=$e[ut.family];break}if(!(Mt=Mt||$e[St]))throw new Error("Could not find a font-family for the rule '"+Xu(ut)+"' and default family '"+St+"'.");if(Mt=function(He,Be){if(Be[He])return Be[He];var gt=Xc[He],Ot=gt<=Xc.normal?-1:1,Et=Gu(Be,Ff,gt,Ot);if(!Et)throw new Error("Could not find a matching font-stretch value for "+He);return Et}(ut.stretch,Mt),Mt=function(He,Be){if(Be[He])return Be[He];for(var gt=Of[He],Ot=0;Ot<gt.length;++Ot)if(Be[gt[Ot]])return Be[gt[Ot]];throw new Error("Could not find a matching font-style for "+He)}(ut.style,Mt),!(Mt=function(He,Be){if(Be[He])return Be[He];if(He===400&&Be[500])return Be[500];if(He===500&&Be[400])return Be[400];var gt=t9[He],Ot=Gu(Be,zf,gt,He<400?-1:1);if(!Ot)throw new Error("Could not find a matching font-weight for value "+He);return Ot}(ut.weight,Mt)))throw new Error("Failed to resolve a font for the rule '"+Xu(ut)+"'.");return Mt}(Ge,Fe);this.pdf.setFont(wt.ref.name,wt.ref.style)}else{var lt="";(Ye==="bold"||parseInt(Ye,10)>=700||qe==="bold")&&(lt="bold"),qe==="italic"&&(lt+="italic"),lt.length===0&&(lt="normal");for(var Qe="",mt={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},et=0;et<Pe.length;et++){if(this.pdf.internal.getFont(Pe[et],lt,{noFallback:!0,disableWarning:!0})!==void 0){Qe=Pe[et];break}if(lt==="bolditalic"&&this.pdf.internal.getFont(Pe[et],"bold",{noFallback:!0,disableWarning:!0})!==void 0)Qe=Pe[et],lt="bold";else if(this.pdf.internal.getFont(Pe[et],"normal",{noFallback:!0,disableWarning:!0})!==void 0){Qe=Pe[et],lt="normal";break}}if(Qe===""){for(var ze=0;ze<Pe.length;ze++)if(mt[Pe[ze]]){Qe=mt[Pe[ze]];break}}Qe=Qe===""?"Times":Qe,this.pdf.setFont(Qe,lt)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(de){this.ctx.globalCompositeOperation=de}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(de){this.ctx.globalAlpha=de}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(de){this.ctx.lineDashOffset=de,we.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(de){this.ctx.lineDash=de,we.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(de){this.ctx.ignoreClearRect=!!de}})};v.prototype.setLineDash=function(k){this.lineDash=k},v.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},v.prototype.fill=function(){D.call(this,"fill",!1)},v.prototype.stroke=function(){D.call(this,"stroke",!1)},v.prototype.beginPath=function(){this.path=[{type:"begin"}]},v.prototype.moveTo=function(k,H){if(isNaN(k)||isNaN(H))throw Zt.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var J=this.ctx.transform.applyToPoint(new l(k,H));this.path.push({type:"mt",x:J.x,y:J.y}),this.ctx.lastPoint=new l(k,H)},v.prototype.closePath=function(){var k=new l(0,0),H=0;for(H=this.path.length-1;H!==-1;H--)if(this.path[H].type==="begin"&&qt(this.path[H+1])==="object"&&typeof this.path[H+1].x=="number"){k=new l(this.path[H+1].x,this.path[H+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new l(k.x,k.y)},v.prototype.lineTo=function(k,H){if(isNaN(k)||isNaN(H))throw Zt.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var J=this.ctx.transform.applyToPoint(new l(k,H));this.path.push({type:"lt",x:J.x,y:J.y}),this.ctx.lastPoint=new l(J.x,J.y)},v.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),D.call(this,null,!0)},v.prototype.quadraticCurveTo=function(k,H,J,te){if(isNaN(J)||isNaN(te)||isNaN(k)||isNaN(H))throw Zt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var oe=this.ctx.transform.applyToPoint(new l(J,te)),le=this.ctx.transform.applyToPoint(new l(k,H));this.path.push({type:"qct",x1:le.x,y1:le.y,x:oe.x,y:oe.y}),this.ctx.lastPoint=new l(oe.x,oe.y)},v.prototype.bezierCurveTo=function(k,H,J,te,oe,le){if(isNaN(oe)||isNaN(le)||isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te))throw Zt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var pe=this.ctx.transform.applyToPoint(new l(oe,le)),ve=this.ctx.transform.applyToPoint(new l(k,H)),ue=this.ctx.transform.applyToPoint(new l(J,te));this.path.push({type:"bct",x1:ve.x,y1:ve.y,x2:ue.x,y2:ue.y,x:pe.x,y:pe.y}),this.ctx.lastPoint=new l(pe.x,pe.y)},v.prototype.arc=function(k,H,J,te,oe,le){if(isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te)||isNaN(oe))throw Zt.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(le=!!le,!this.ctx.transform.isIdentity){var pe=this.ctx.transform.applyToPoint(new l(k,H));k=pe.x,H=pe.y;var ve=this.ctx.transform.applyToPoint(new l(0,J)),ue=this.ctx.transform.applyToPoint(new l(0,0));J=Math.sqrt(Math.pow(ve.x-ue.x,2)+Math.pow(ve.y-ue.y,2))}Math.abs(oe-te)>=2*Math.PI&&(te=0,oe=2*Math.PI),this.path.push({type:"arc",x:k,y:H,radius:J,startAngle:te,endAngle:oe,counterclockwise:le})},v.prototype.arcTo=function(k,H,J,te,oe){throw new Error("arcTo not implemented.")},v.prototype.rect=function(k,H,J,te){if(isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te))throw Zt.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(k,H),this.lineTo(k+J,H),this.lineTo(k+J,H+te),this.lineTo(k,H+te),this.lineTo(k,H),this.lineTo(k+J,H),this.lineTo(k,H)},v.prototype.fillRect=function(k,H,J,te){if(isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te))throw Zt.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var oe={};this.lineCap!=="butt"&&(oe.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(oe.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(k,H,J,te),this.fill(),oe.hasOwnProperty("lineCap")&&(this.lineCap=oe.lineCap),oe.hasOwnProperty("lineJoin")&&(this.lineJoin=oe.lineJoin)}},v.prototype.strokeRect=function(k,H,J,te){if(isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te))throw Zt.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");w.call(this)||(this.beginPath(),this.rect(k,H,J,te),this.stroke())},v.prototype.clearRect=function(k,H,J,te){if(isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te))throw Zt.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(k,H,J,te))},v.prototype.save=function(k){k=typeof k!="boolean"||k;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,J=0;J<this.pdf.internal.getNumberOfPages();J++)this.pdf.setPage(J+1),this.pdf.internal.out("q");if(this.pdf.setPage(H),k){this.ctx.fontSize=this.pdf.internal.getFontSize();var te=new p(this.ctx);this.ctxStack.push(this.ctx),this.ctx=te}},v.prototype.restore=function(k){k=typeof k!="boolean"||k;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,J=0;J<this.pdf.internal.getNumberOfPages();J++)this.pdf.setPage(J+1),this.pdf.internal.out("Q");this.pdf.setPage(H),k&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},v.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var S=function(k){var H,J,te,oe;if(k.isCanvasGradient===!0&&(k=k.getColor()),!k)return{r:0,g:0,b:0,a:0,style:k};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(k))H=0,J=0,te=0,oe=0;else{var le=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(k);if(le!==null)H=parseInt(le[1]),J=parseInt(le[2]),te=parseInt(le[3]),oe=1;else if((le=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(k))!==null)H=parseInt(le[1]),J=parseInt(le[2]),te=parseInt(le[3]),oe=parseFloat(le[4]);else{if(oe=1,typeof k=="string"&&k.charAt(0)!=="#"){var pe=new If(k);k=pe.ok?pe.toHex():"#000000"}k.length===4?(H=k.substring(1,2),H+=H,J=k.substring(2,3),J+=J,te=k.substring(3,4),te+=te):(H=k.substring(1,3),J=k.substring(3,5),te=k.substring(5,7)),H=parseInt(H,16),J=parseInt(J,16),te=parseInt(te,16)}}return{r:H,g:J,b:te,a:oe,style:k}},m=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},w=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};v.prototype.fillText=function(k,H,J,te){if(isNaN(H)||isNaN(J)||typeof k!="string")throw Zt.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(te=isNaN(te)?void 0:te,!m.call(this)){var oe=ne(this.ctx.transform.rotation),le=this.ctx.transform.scaleX;P.call(this,{text:k,x:H,y:J,scale:le,angle:oe,align:this.textAlign,maxWidth:te})}},v.prototype.strokeText=function(k,H,J,te){if(isNaN(H)||isNaN(J)||typeof k!="string")throw Zt.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!w.call(this)){te=isNaN(te)?void 0:te;var oe=ne(this.ctx.transform.rotation),le=this.ctx.transform.scaleX;P.call(this,{text:k,x:H,y:J,scale:le,renderingMode:"stroke",angle:oe,align:this.textAlign,maxWidth:te})}},v.prototype.measureText=function(k){if(typeof k!="string")throw Zt.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var H=this.pdf,J=this.pdf.internal.scaleFactor,te=H.internal.getFontSize(),oe=H.getStringUnitWidth(k)*te/H.internal.scaleFactor;return new function(le){var pe=(le=le||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return pe}}),this}({width:oe*=Math.round(96*J/72*1e4)/1e4})},v.prototype.scale=function(k,H){if(isNaN(k)||isNaN(H))throw Zt.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var J=new d(k,0,0,H,0,0);this.ctx.transform=this.ctx.transform.multiply(J)},v.prototype.rotate=function(k){if(isNaN(k))throw Zt.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var H=new d(Math.cos(k),Math.sin(k),-Math.sin(k),Math.cos(k),0,0);this.ctx.transform=this.ctx.transform.multiply(H)},v.prototype.translate=function(k,H){if(isNaN(k)||isNaN(H))throw Zt.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var J=new d(1,0,0,1,k,H);this.ctx.transform=this.ctx.transform.multiply(J)},v.prototype.transform=function(k,H,J,te,oe,le){if(isNaN(k)||isNaN(H)||isNaN(J)||isNaN(te)||isNaN(oe)||isNaN(le))throw Zt.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var pe=new d(k,H,J,te,oe,le);this.ctx.transform=this.ctx.transform.multiply(pe)},v.prototype.setTransform=function(k,H,J,te,oe,le){k=isNaN(k)?1:k,H=isNaN(H)?0:H,J=isNaN(J)?0:J,te=isNaN(te)?1:te,oe=isNaN(oe)?0:oe,le=isNaN(le)?0:le,this.ctx.transform=new d(k,H,J,te,oe,le)};var M=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};v.prototype.drawImage=function(k,H,J,te,oe,le,pe,ve,ue){var ke=this.pdf.getImageProperties(k),Te=1,Re=1,de=1,U=1;te!==void 0&&ve!==void 0&&(de=ve/te,U=ue/oe,Te=ke.width/te*ve/te,Re=ke.height/oe*ue/oe),le===void 0&&(le=H,pe=J,H=0,J=0),te!==void 0&&ve===void 0&&(ve=te,ue=oe),te===void 0&&ve===void 0&&(ve=ke.width,ue=ke.height);for(var qe,Ye=this.ctx.transform.decompose(),De=ne(Ye.rotate.shx),_e=new d,Ue=(_e=(_e=(_e=_e.multiply(Ye.translate)).multiply(Ye.skew)).multiply(Ye.scale)).applyToRectangle(new c(le-H*de,pe-J*U,te*Te,oe*Re)),Pe=j.call(this,Ue),Ge=[],Fe=0;Fe<Pe.length;Fe+=1)Ge.indexOf(Pe[Fe])===-1&&Ge.push(Pe[Fe]);if(E(Ge),this.autoPaging)for(var wt=Ge[0],lt=Ge[Ge.length-1],Qe=wt;Qe<lt+1;Qe++){this.pdf.setPage(Qe);var mt=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],et=Qe===1?this.posY+this.margin[0]:this.margin[0],ze=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],$e=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],We=Qe===1?0:ze+(Qe-2)*$e;if(this.ctx.clip_path.length!==0){var ct=this.path;qe=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=L(qe,this.posX+this.margin[3],-We+et+this.ctx.prevPageLastElemOffset),q.call(this,"fill",!0),this.path=ct}var St=JSON.parse(JSON.stringify(Ue));St=L([St],this.posX+this.margin[3],-We+et+this.ctx.prevPageLastElemOffset)[0];var Ve=(Qe>wt||Qe<lt)&&M.call(this);Ve&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],mt,$e,null).clip().discardPath()),this.pdf.addImage(k,"JPEG",St.x,St.y,St.w,St.h,null,null,De),Ve&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(k,"JPEG",Ue.x,Ue.y,Ue.w,Ue.h,null,null,De)};var j=function(k,H,J){var te=[];H=H||this.pdf.internal.pageSize.width,J=J||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var oe=this.posY+this.ctx.prevPageLastElemOffset;switch(k.type){default:case"mt":case"lt":te.push(Math.floor((k.y+oe)/J)+1);break;case"arc":te.push(Math.floor((k.y+oe-k.radius)/J)+1),te.push(Math.floor((k.y+oe+k.radius)/J)+1);break;case"qct":var le=ge(this.ctx.lastPoint.x,this.ctx.lastPoint.y,k.x1,k.y1,k.x,k.y);te.push(Math.floor((le.y+oe)/J)+1),te.push(Math.floor((le.y+le.h+oe)/J)+1);break;case"bct":var pe=Me(this.ctx.lastPoint.x,this.ctx.lastPoint.y,k.x1,k.y1,k.x2,k.y2,k.x,k.y);te.push(Math.floor((pe.y+oe)/J)+1),te.push(Math.floor((pe.y+pe.h+oe)/J)+1);break;case"rect":te.push(Math.floor((k.y+oe)/J)+1),te.push(Math.floor((k.y+k.h+oe)/J)+1)}for(var ve=0;ve<te.length;ve+=1)for(;this.pdf.internal.getNumberOfPages()<te[ve];)A.call(this);return te},A=function(){var k=this.fillStyle,H=this.strokeStyle,J=this.font,te=this.lineCap,oe=this.lineWidth,le=this.lineJoin;this.pdf.addPage(),this.fillStyle=k,this.strokeStyle=H,this.font=J,this.lineCap=te,this.lineWidth=oe,this.lineJoin=le},L=function(k,H,J){for(var te=0;te<k.length;te++)switch(k[te].type){case"bct":k[te].x2+=H,k[te].y2+=J;case"qct":k[te].x1+=H,k[te].y1+=J;default:k[te].x+=H,k[te].y+=J}return k},E=function(k){return k.sort(function(H,J){return H-J})},D=function(k,H){for(var J,te,oe=this.fillStyle,le=this.strokeStyle,pe=this.lineCap,ve=this.lineWidth,ue=Math.abs(ve*this.ctx.transform.scaleX),ke=this.lineJoin,Te=JSON.parse(JSON.stringify(this.path)),Re=JSON.parse(JSON.stringify(this.path)),de=[],U=0;U<Re.length;U++)if(Re[U].x!==void 0)for(var qe=j.call(this,Re[U]),Ye=0;Ye<qe.length;Ye+=1)de.indexOf(qe[Ye])===-1&&de.push(qe[Ye]);for(var De=0;De<de.length;De++)for(;this.pdf.internal.getNumberOfPages()<de[De];)A.call(this);if(E(de),this.autoPaging)for(var _e=de[0],Ue=de[de.length-1],Pe=_e;Pe<Ue+1;Pe++){this.pdf.setPage(Pe),this.fillStyle=oe,this.strokeStyle=le,this.lineCap=pe,this.lineWidth=ue,this.lineJoin=ke;var Ge=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Fe=Pe===1?this.posY+this.margin[0]:this.margin[0],wt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],lt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],Qe=Pe===1?0:wt+(Pe-2)*lt;if(this.ctx.clip_path.length!==0){var mt=this.path;J=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=L(J,this.posX+this.margin[3],-Qe+Fe+this.ctx.prevPageLastElemOffset),q.call(this,k,!0),this.path=mt}if(te=JSON.parse(JSON.stringify(Te)),this.path=L(te,this.posX+this.margin[3],-Qe+Fe+this.ctx.prevPageLastElemOffset),H===!1||Pe===0){var et=(Pe>_e||Pe<Ue)&&M.call(this);et&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Ge,lt,null).clip().discardPath()),q.call(this,k,H),et&&this.pdf.restoreGraphicsState()}this.lineWidth=ve}else this.lineWidth=ue,q.call(this,k,H),this.lineWidth=ve;this.path=Te},q=function(k,H){if((k!=="stroke"||H||!w.call(this))&&(k==="stroke"||H||!m.call(this))){for(var J,te,oe=[],le=this.path,pe=0;pe<le.length;pe++){var ve=le[pe];switch(ve.type){case"begin":oe.push({begin:!0});break;case"close":oe.push({close:!0});break;case"mt":oe.push({start:ve,deltas:[],abs:[]});break;case"lt":var ue=oe.length;if(le[pe-1]&&!isNaN(le[pe-1].x)&&(J=[ve.x-le[pe-1].x,ve.y-le[pe-1].y],ue>0)){for(;ue>=0;ue--)if(oe[ue-1].close!==!0&&oe[ue-1].begin!==!0){oe[ue-1].deltas.push(J),oe[ue-1].abs.push(ve);break}}break;case"bct":J=[ve.x1-le[pe-1].x,ve.y1-le[pe-1].y,ve.x2-le[pe-1].x,ve.y2-le[pe-1].y,ve.x-le[pe-1].x,ve.y-le[pe-1].y],oe[oe.length-1].deltas.push(J);break;case"qct":var ke=le[pe-1].x+2/3*(ve.x1-le[pe-1].x),Te=le[pe-1].y+2/3*(ve.y1-le[pe-1].y),Re=ve.x+2/3*(ve.x1-ve.x),de=ve.y+2/3*(ve.y1-ve.y),U=ve.x,qe=ve.y;J=[ke-le[pe-1].x,Te-le[pe-1].y,Re-le[pe-1].x,de-le[pe-1].y,U-le[pe-1].x,qe-le[pe-1].y],oe[oe.length-1].deltas.push(J);break;case"arc":oe.push({deltas:[],abs:[],arc:!0}),Array.isArray(oe[oe.length-1].abs)&&oe[oe.length-1].abs.push(ve)}}te=H?null:k==="stroke"?"stroke":"fill";for(var Ye=!1,De=0;De<oe.length;De++)if(oe[De].arc)for(var _e=oe[De].abs,Ue=0;Ue<_e.length;Ue++){var Pe=_e[Ue];Pe.type==="arc"?X.call(this,Pe.x,Pe.y,Pe.radius,Pe.startAngle,Pe.endAngle,Pe.counterclockwise,void 0,H,!Ye):F.call(this,Pe.x,Pe.y),Ye=!0}else if(oe[De].close===!0)this.pdf.internal.out("h"),Ye=!1;else if(oe[De].begin!==!0){var Ge=oe[De].start.x,Fe=oe[De].start.y;$.call(this,oe[De].deltas,Ge,Fe),Ye=!0}te&&I.call(this,te),H&&Z.call(this)}},V=function(k){var H=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,J=H*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return k-J;case"top":return k+H-J;case"hanging":return k+H-2*J;case"middle":return k+H/2-J;default:return k}},K=function(k){return k+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};v.prototype.createLinearGradient=function(){var k=function(){};return k.colorStops=[],k.addColorStop=function(H,J){this.colorStops.push([H,J])},k.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},k.isCanvasGradient=!0,k},v.prototype.createPattern=function(){return this.createLinearGradient()},v.prototype.createRadialGradient=function(){return this.createLinearGradient()};var X=function(k,H,J,te,oe,le,pe,ve,ue){for(var ke=se.call(this,J,te,oe,le),Te=0;Te<ke.length;Te++){var Re=ke[Te];Te===0&&(ue?_.call(this,Re.x1+k,Re.y1+H):F.call(this,Re.x1+k,Re.y1+H)),re.call(this,k,H,Re.x2,Re.y2,Re.x3,Re.y3,Re.x4,Re.y4)}ve?Z.call(this):I.call(this,pe)},I=function(k){switch(k){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},Z=function(){this.pdf.clip(),this.pdf.discardPath()},_=function(k,H){this.pdf.internal.out(r(k)+" "+n(H)+" m")},P=function(k){var H;switch(k.align){case"right":case"end":H="right";break;case"center":H="center";break;default:H="left"}var J=this.pdf.getTextDimensions(k.text),te=V.call(this,k.y),oe=K.call(this,te)-J.h,le=this.ctx.transform.applyToPoint(new l(k.x,te)),pe=this.ctx.transform.decompose(),ve=new d;ve=(ve=(ve=ve.multiply(pe.translate)).multiply(pe.skew)).multiply(pe.scale);for(var ue,ke,Te,Re=this.ctx.transform.applyToRectangle(new c(k.x,te,J.w,J.h)),de=ve.applyToRectangle(new c(k.x,oe,J.w,J.h)),U=j.call(this,de),qe=[],Ye=0;Ye<U.length;Ye+=1)qe.indexOf(U[Ye])===-1&&qe.push(U[Ye]);if(E(qe),this.autoPaging)for(var De=qe[0],_e=qe[qe.length-1],Ue=De;Ue<_e+1;Ue++){this.pdf.setPage(Ue);var Pe=Ue===1?this.posY+this.margin[0]:this.margin[0],Ge=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Fe=this.pdf.internal.pageSize.height-this.margin[2],wt=Fe-this.margin[0],lt=this.pdf.internal.pageSize.width-this.margin[1],Qe=lt-this.margin[3],mt=Ue===1?0:Ge+(Ue-2)*wt;if(this.ctx.clip_path.length!==0){var et=this.path;ue=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=L(ue,this.posX+this.margin[3],-1*mt+Pe),q.call(this,"fill",!0),this.path=et}var ze=L([JSON.parse(JSON.stringify(de))],this.posX+this.margin[3],-mt+Pe+this.ctx.prevPageLastElemOffset)[0];k.scale>=.01&&(ke=this.pdf.internal.getFontSize(),this.pdf.setFontSize(ke*k.scale),Te=this.lineWidth,this.lineWidth=Te*k.scale);var $e=this.autoPaging!=="text";if($e||ze.y+ze.h<=Fe){if($e||ze.y>=Pe&&ze.x<=lt){var We=$e?k.text:this.pdf.splitTextToSize(k.text,k.maxWidth||lt-ze.x)[0],ct=L([JSON.parse(JSON.stringify(Re))],this.posX+this.margin[3],-mt+Pe+this.ctx.prevPageLastElemOffset)[0],St=$e&&(Ue>De||Ue<_e)&&M.call(this);St&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Qe,wt,null).clip().discardPath()),this.pdf.text(We,ct.x,ct.y,{angle:k.angle,align:H,renderingMode:k.renderingMode}),St&&this.pdf.restoreGraphicsState()}}else ze.y<Fe&&(this.ctx.prevPageLastElemOffset+=Fe-ze.y);k.scale>=.01&&(this.pdf.setFontSize(ke),this.lineWidth=Te)}else k.scale>=.01&&(ke=this.pdf.internal.getFontSize(),this.pdf.setFontSize(ke*k.scale),Te=this.lineWidth,this.lineWidth=Te*k.scale),this.pdf.text(k.text,le.x+this.posX,le.y+this.posY,{angle:k.angle,align:H,renderingMode:k.renderingMode,maxWidth:k.maxWidth}),k.scale>=.01&&(this.pdf.setFontSize(ke),this.lineWidth=Te)},F=function(k,H,J,te){J=J||0,te=te||0,this.pdf.internal.out(r(k+J)+" "+n(H+te)+" l")},$=function(k,H,J){return this.pdf.lines(k,H,J,null,null)},re=function(k,H,J,te,oe,le,pe,ve){this.pdf.internal.out([t(a(J+k)),t(s(te+H)),t(a(oe+k)),t(s(le+H)),t(a(pe+k)),t(s(ve+H)),"c"].join(" "))},se=function(k,H,J,te){for(var oe=2*Math.PI,le=Math.PI/2;H>J;)H-=oe;var pe=Math.abs(J-H);pe<oe&&te&&(pe=oe-pe);for(var ve=[],ue=te?-1:1,ke=H;pe>1e-5;){var Te=ke+ue*Math.min(pe,le);ve.push(fe.call(this,k,ke,Te)),pe-=Math.abs(Te-ke),ke=Te}return ve},fe=function(k,H,J){var te=(J-H)/2,oe=k*Math.cos(te),le=k*Math.sin(te),pe=oe,ve=-le,ue=pe*pe+ve*ve,ke=ue+pe*oe+ve*le,Te=4/3*(Math.sqrt(2*ue*ke)-ke)/(pe*le-ve*oe),Re=pe-Te*ve,de=ve+Te*pe,U=Re,qe=-de,Ye=te+H,De=Math.cos(Ye),_e=Math.sin(Ye);return{x1:k*Math.cos(H),y1:k*Math.sin(H),x2:Re*De-de*_e,y2:Re*_e+de*De,x3:U*De-qe*_e,y3:U*_e+qe*De,x4:k*Math.cos(J),y4:k*Math.sin(J)}},ne=function(k){return 180*k/Math.PI},ge=function(k,H,J,te,oe,le){var pe=k+.5*(J-k),ve=H+.5*(te-H),ue=oe+.5*(J-oe),ke=le+.5*(te-le),Te=Math.min(k,oe,pe,ue),Re=Math.max(k,oe,pe,ue),de=Math.min(H,le,ve,ke),U=Math.max(H,le,ve,ke);return new c(Te,de,Re-Te,U-de)},Me=function(k,H,J,te,oe,le,pe,ve){var ue,ke,Te,Re,de,U,qe,Ye,De,_e,Ue,Pe,Ge,Fe,wt=J-k,lt=te-H,Qe=oe-J,mt=le-te,et=pe-oe,ze=ve-le;for(ke=0;ke<41;ke++)De=(qe=(Te=k+(ue=ke/40)*wt)+ue*((de=J+ue*Qe)-Te))+ue*(de+ue*(oe+ue*et-de)-qe),_e=(Ye=(Re=H+ue*lt)+ue*((U=te+ue*mt)-Re))+ue*(U+ue*(le+ue*ze-U)-Ye),ke==0?(Ue=De,Pe=_e,Ge=De,Fe=_e):(Ue=Math.min(Ue,De),Pe=Math.min(Pe,_e),Ge=Math.max(Ge,De),Fe=Math.max(Fe,_e));return new c(Math.round(Ue),Math.round(Pe),Math.round(Ge-Ue),Math.round(Fe-Pe))},we=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var k,H,J=(k=this.ctx.lineDash,H=this.ctx.lineDashOffset,JSON.stringify({lineDash:k,lineDashOffset:H}));this.prevLineDash!==J&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=J)}}})(st.API),function(e){var t=function(l){var c,d,f,p,v,S,m,w,M,j;for(d=[],f=0,p=(l+=c="\0\0\0\0".slice(l.length%4||4)).length;p>f;f+=4)(v=(l.charCodeAt(f)<<24)+(l.charCodeAt(f+1)<<16)+(l.charCodeAt(f+2)<<8)+l.charCodeAt(f+3))!==0?(S=(v=((v=((v=((v=(v-(j=v%85))/85)-(M=v%85))/85)-(w=v%85))/85)-(m=v%85))/85)%85,d.push(S+33,m+33,w+33,M+33,j+33)):d.push(122);return function(A,L){for(var E=L;E>0;E--)A.pop()}(d,c.length),String.fromCharCode.apply(String,d)+"~>"},r=function(l){var c,d,f,p,v,S=String,m="length",w=255,M="charCodeAt",j="slice",A="replace";for(l[j](-2),l=l[j](0,-2)[A](/\s/g,"")[A]("z","!!!!!"),f=[],p=0,v=(l+=c="uuuuu"[j](l[m]%5||5))[m];v>p;p+=5)d=52200625*(l[M](p)-33)+614125*(l[M](p+1)-33)+7225*(l[M](p+2)-33)+85*(l[M](p+3)-33)+(l[M](p+4)-33),f.push(w&d>>24,w&d>>16,w&d>>8,w&d);return function(L,E){for(var D=E;D>0;D--)L.pop()}(f,c[m]),S.fromCharCode.apply(S,f)},n=function(l){return l.split("").map(function(c){return("0"+c.charCodeAt().toString(16)).slice(-2)}).join("")+">"},a=function(l){var c=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((l=l.replace(/\s/g,"")).indexOf(">")!==-1&&(l=l.substr(0,l.indexOf(">"))),l.length%2&&(l+="0"),c.test(l)===!1)return"";for(var d="",f=0;f<l.length;f+=2)d+=String.fromCharCode("0x"+(l[f]+l[f+1]));return d},s=function(l){for(var c=new Uint8Array(l.length),d=l.length;d--;)c[d]=l.charCodeAt(d);return(c=Hc(c)).reduce(function(f,p){return f+String.fromCharCode(p)},"")};e.processDataByFilters=function(l,c){var d=0,f=l||"",p=[];for(typeof(c=c||[])=="string"&&(c=[c]),d=0;d<c.length;d+=1)switch(c[d]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),p.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),p.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=a(f),p.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),p.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=s(f),p.push("/FlateDecode");break;default:throw new Error('The filter: "'+c[d]+'" is not implemented')}return{data:f,reverseChain:p.reverse().join(" ")}}}(st.API),function(e){e.loadFile=function(t,r,n){return function(a,s,l){s=s!==!1,l=typeof l=="function"?l:function(){};var c=void 0;try{c=function(d,f,p){var v=new XMLHttpRequest,S=0,m=function(w){var M=w.length,j=[],A=String.fromCharCode;for(S=0;S<M;S+=1)j.push(A(255&w.charCodeAt(S)));return j.join("")};if(v.open("GET",d,!f),v.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(v.onload=function(){v.status===200?p(m(this.responseText)):p(void 0)}),v.send(null),f&&v.status===200)return m(v.responseText)}(a,s,l)}catch{}return c}(t,r,n)},e.loadImageFile=e.loadFile}(st.API),function(e){function t(){return(vt.html2canvas?Promise.resolve(vt.html2canvas):B1(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load html2canvas: "+c))}).then(function(c){return c.default?c.default:c})}function r(){return(vt.DOMPurify?Promise.resolve(vt.DOMPurify):B1(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load dompurify: "+c))}).then(function(c){return c.default?c.default:c})}var n=function(c){var d=qt(c);return d==="undefined"?"undefined":d==="string"||c instanceof String?"string":d==="number"||c instanceof Number?"number":d==="function"||c instanceof Function?"function":c&&c.constructor===Array?"array":c&&c.nodeType===1?"element":d==="object"?"object":"unknown"},a=function(c,d){var f=document.createElement(c);for(var p in d.className&&(f.className=d.className),d.innerHTML&&d.dompurify&&(f.innerHTML=d.dompurify.sanitize(d.innerHTML)),d.style)f.style[p]=d.style[p];return f},s=function c(d,f){for(var p=d.nodeType===3?document.createTextNode(d.nodeValue):d.cloneNode(!1),v=d.firstChild;v;v=v.nextSibling)f!==!0&&v.nodeType===1&&v.nodeName==="SCRIPT"||p.appendChild(c(v,f));return d.nodeType===1&&(d.nodeName==="CANVAS"?(p.width=d.width,p.height=d.height,p.getContext("2d").drawImage(d,0,0)):d.nodeName!=="TEXTAREA"&&d.nodeName!=="SELECT"||(p.value=d.value),p.addEventListener("load",function(){p.scrollTop=d.scrollTop,p.scrollLeft=d.scrollLeft},!0)),p},l=function c(d){var f=Object.assign(c.convert(Promise.resolve()),JSON.parse(JSON.stringify(c.template))),p=c.convert(Promise.resolve(),f);return(p=p.setProgress(1,c,1,[c])).set(d)};(l.prototype=Object.create(Promise.prototype)).constructor=l,l.convert=function(c,d){return c.__proto__=d||l.prototype,c},l.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},l.prototype.from=function(c,d){return this.then(function(){switch(d=d||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(c),d){case"string":return this.then(r).then(function(f){return this.set({src:a("div",{innerHTML:c,dompurify:f})})});case"element":return this.set({src:c});case"canvas":return this.set({canvas:c});case"img":return this.set({img:c});default:return this.error("Unknown source type.")}})},l.prototype.to=function(c){switch(c){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},l.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var c={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},d=s(this.prop.src,this.opt.html2canvas.javascriptEnabled);d.tagName==="BODY"&&(c.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=a("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=a("div",{className:"html2pdf__container",style:c}),this.prop.container.appendChild(d),this.prop.container.firstChild.appendChild(a("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},l.prototype.toCanvas=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(d){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,d(this.prop.container,f)}).then(function(d){(this.opt.html2canvas.onrendered||function(){})(d),this.prop.canvas=d,document.body.removeChild(this.prop.overlay)})},l.prototype.toContext2d=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(d){var f=this.opt.jsPDF,p=this.opt.fontFaces,v=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,S=Object.assign({async:!0,allowTaint:!0,scale:v,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete S.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=p,p)for(var m=0;m<p.length;++m){var w=p[m],M=w.src.find(function(j){return j.format==="truetype"});M&&f.addFont(M.url,w.ref.name,w.ref.style)}return S.windowHeight=S.windowHeight||0,S.windowHeight=S.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):S.windowHeight,f.context2d.save(!0),d(this.prop.container,S)}).then(function(d){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(d),this.prop.canvas=d,document.body.removeChild(this.prop.overlay)})},l.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var c=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=c})},l.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},l.prototype.output=function(c,d,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(c,d):this.outputPdf(c,d)},l.prototype.outputPdf=function(c,d){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(c,d)})},l.prototype.outputImg=function(c){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(c){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+c+'" is not supported.'}})},l.prototype.save=function(c){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(c?{filename:c}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},l.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},l.prototype.set=function(c){if(n(c)!=="object")return this;var d=Object.keys(c||{}).map(function(f){if(f in l.template.prop)return function(){this.prop[f]=c[f]};switch(f){case"margin":return this.setMargin.bind(this,c.margin);case"jsPDF":return function(){return this.opt.jsPDF=c.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,c.pageSize);default:return function(){this.opt[f]=c[f]}}},this);return this.then(function(){return this.thenList(d)})},l.prototype.get=function(c,d){return this.then(function(){var f=c in l.template.prop?this.prop[c]:this.opt[c];return d?d(f):f})},l.prototype.setMargin=function(c){return this.then(function(){switch(n(c)){case"number":c=[c,c,c,c];case"array":if(c.length===2&&(c=[c[0],c[1],c[0],c[1]]),c.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=c}).then(this.setPageSize)},l.prototype.setPageSize=function(c){function d(f,p){return Math.floor(f*p/72*96)}return this.then(function(){(c=c||st.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(c.inner={width:c.width-this.opt.margin[1]-this.opt.margin[3],height:c.height-this.opt.margin[0]-this.opt.margin[2]},c.inner.px={width:d(c.inner.width,c.k),height:d(c.inner.height,c.k)},c.inner.ratio=c.inner.height/c.inner.width),this.prop.pageSize=c})},l.prototype.setProgress=function(c,d,f,p){return c!=null&&(this.progress.val=c),d!=null&&(this.progress.state=d),f!=null&&(this.progress.n=f),p!=null&&(this.progress.stack=p),this.progress.ratio=this.progress.val/this.progress.state,this},l.prototype.updateProgress=function(c,d,f,p){return this.setProgress(c?this.progress.val+c:null,d||null,f?this.progress.n+f:null,p?this.progress.stack.concat(p):null)},l.prototype.then=function(c,d){var f=this;return this.thenCore(c,d,function(p,v){return f.updateProgress(null,null,1,[p]),Promise.prototype.then.call(this,function(S){return f.updateProgress(null,p),S}).then(p,v).then(function(S){return f.updateProgress(1),S})})},l.prototype.thenCore=function(c,d,f){f=f||Promise.prototype.then;var p=this;c&&(c=c.bind(p)),d&&(d=d.bind(p));var v=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?p:l.convert(Object.assign({},p),Promise.prototype),S=f.call(v,c,d);return l.convert(S,p.__proto__)},l.prototype.thenExternal=function(c,d){return Promise.prototype.then.call(this,c,d)},l.prototype.thenList=function(c){var d=this;return c.forEach(function(f){d=d.thenCore(f)}),d},l.prototype.catch=function(c){c&&(c=c.bind(this));var d=Promise.prototype.catch.call(this,c);return l.convert(d,this)},l.prototype.catchExternal=function(c){return Promise.prototype.catch.call(this,c)},l.prototype.error=function(c){return this.then(function(){throw new Error(c)})},l.prototype.using=l.prototype.set,l.prototype.saveAs=l.prototype.save,l.prototype.export=l.prototype.output,l.prototype.run=l.prototype.then,st.getPageSize=function(c,d,f){if(qt(c)==="object"){var p=c;c=p.orientation,d=p.unit||d,f=p.format||f}d=d||"mm",f=f||"a4",c=(""+(c||"P")).toLowerCase();var v,S=(""+f).toLowerCase(),m={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(d){case"pt":v=1;break;case"mm":v=72/25.4;break;case"cm":v=72/2.54;break;case"in":v=72;break;case"px":v=.75;break;case"pc":case"em":v=12;break;case"ex":v=6;break;default:throw"Invalid unit: "+d}var w,M=0,j=0;if(m.hasOwnProperty(S))M=m[S][1]/v,j=m[S][0]/v;else try{M=f[1],j=f[0]}catch{throw new Error("Invalid format: "+f)}if(c==="p"||c==="portrait")c="p",j>M&&(w=j,j=M,M=w);else{if(c!=="l"&&c!=="landscape")throw"Invalid orientation: "+c;c="l",M>j&&(w=j,j=M,M=w)}return{width:j,height:M,unit:d,k:v,orientation:c}},e.html=function(c,d){(d=d||{}).callback=d.callback||function(){},d.html2canvas=d.html2canvas||{},d.html2canvas.canvas=d.html2canvas.canvas||this.canvas,d.jsPDF=d.jsPDF||this,d.fontFaces=d.fontFaces?d.fontFaces.map(ic):null;var f=new l(d);return d.worker?f:f.from(c).doCallback()}}(st.API),st.API.addJS=function(e){return Qu=e,this.internal.events.subscribe("postPutResources",function(){Ml=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(Ml+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),Ju=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+Qu+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){Ml!==void 0&&Ju!==void 0&&this.internal.out("/Names <</JavaScript "+Ml+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var a=r.outline.render().split(/\r\n/),s=0;s<a.length;s++){var l=a[s],c=n.exec(l);if(c!=null){var d=c[1];r.internal.newObjectDeferredBegin(d,!1)}r.internal.write(l)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,p=[];for(s=0;s<f;s++){var v=r.internal.newObject();p.push(v);var S=r.internal.getPageInfo(s+1);r.internal.write("<< /D["+S.objId+" 0 R /XYZ null null null]>> endobj")}var m=r.internal.newObject();for(r.internal.write("<< /Names [ "),s=0;s<p.length;s++)r.internal.write("(page_"+(s+1)+")"+p[s]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+m+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,a,s){var l={title:a,options:s,children:[]};return n==null&&(n=this.root),n.children.push(l),l},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var a=0;a<n.children.length;a++)this.genIds_r(n.children[a])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var a=this.ctx.pdf.internal.getVerticalCoordinateString,s=0;s<n.children.length;s++){var l=n.children[s];this.objStart(l),this.line("/Title "+this.makeString(l.title)),this.line("/Parent "+this.makeRef(n)),s>0&&this.line("/Prev "+this.makeRef(n.children[s-1])),s<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[s+1])),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1])));var c=this.count=this.count_r({count:0},l);if(c>0&&this.line("/Count "+c),l.options&&l.options.pageNumber){var d=r.internal.getPageInfo(l.options.pageNumber);this.line("/Dest ["+d.objId+" 0 R /XYZ 0 "+a(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,a){for(var s=0;s<a.children.length;s++)n.count++,this.count_r(n,a.children[s]);return n.count}}])}(st.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,a,s,l,c){var d,f=this.decode.DCT_DECODE,p=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=l||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,d=function(v){for(var S,m=256*v.charCodeAt(4)+v.charCodeAt(5),w=v.length,M={width:0,height:0,numcomponents:1},j=4;j<w;j+=2){if(j+=m,t.indexOf(v.charCodeAt(j+1))!==-1){S=256*v.charCodeAt(j+5)+v.charCodeAt(j+6),M={width:256*v.charCodeAt(j+7)+v.charCodeAt(j+8),height:S,numcomponents:v.charCodeAt(j+9)};break}m=256*v.charCodeAt(j+2)+v.charCodeAt(j+3)}return M}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),d.numcomponents){case 1:c=this.color_spaces.DEVICE_GRAY;break;case 4:c=this.color_spaces.DEVICE_CMYK;break;case 3:c=this.color_spaces.DEVICE_RGB}p={data:r,width:d.width,height:d.height,colorSpace:c,bitsPerComponent:8,filter:f,index:n,alias:a}}return p}}(st.API),st.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var a,s=Ub(e,{checkCrc:!0}),l=s.width,c=s.height,d=s.channels,f=s.palette,p=s.depth;a=f&&d===1?function(X){for(var I=X.width,Z=X.height,_=X.data,P=X.palette,F=X.depth,$=!1,re=[],se=[],fe=void 0,ne=!1,ge=0,Me=0;Me<P.length;Me++){var we=ru(P[Me],4),k=we[0],H=we[1],J=we[2],te=we[3];re.push(k,H,J),te!=null&&(te===0?(ge++,se.length<1&&se.push(Me)):te<255&&(ne=!0))}if(ne||ge>1){$=!0,se=void 0;var oe=I*Z;fe=new Uint8Array(oe);for(var le=new DataView(_.buffer),pe=0;pe<oe;pe++){var ve=ac(le,pe,F),ue=ru(P[ve],4)[3];fe[pe]=ue}}else ge===0&&(se=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:$?8:void 0,colorBytes:_,alphaBytes:fe,needSMask:$,palette:re,mask:se}}(s):d===2||d===4?function(X){for(var I=X.data,Z=X.width,_=X.height,P=X.channels,F=X.depth,$=P===2?"DeviceGray":"DeviceRGB",re=P-1,se=Z*_,fe=re,ne=se*fe,ge=1*se,Me=Math.ceil(ne*F/8),we=Math.ceil(ge*F/8),k=new Uint8Array(Me),H=new Uint8Array(we),J=new DataView(I.buffer),te=new DataView(k.buffer),oe=new DataView(H.buffer),le=!1,pe=0;pe<se;pe++){for(var ve=pe*P,ue=0;ue<fe;ue++)sd(te,ac(J,ve+ue,F),pe*fe+ue,F);var ke=ac(J,ve+fe,F);ke<(1<<F)-1&&(le=!0),sd(oe,ke,1*pe,F)}return{colorSpace:$,colorsPerPixel:re,sMaskBitsPerComponent:le?F:void 0,colorBytes:k,alphaBytes:H,needSMask:le}}(s):function(X){var I=X.data,Z=X.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:Z,colorsPerPixel:Z==="DeviceGray"?1:3,colorBytes:I instanceof Uint16Array?function(_){for(var P=_.length,F=new Uint8Array(2*P),$=new DataView(F.buffer,F.byteOffset,F.byteLength),re=0;re<P;re++)$.setUint16(2*re,_[re],!1);return F}(I):I,needSMask:!1}}(s);var v,S,m,w=a,M=w.colorSpace,j=w.colorsPerPixel,A=w.sMaskBitsPerComponent,L=w.colorBytes,E=w.alphaBytes,D=w.needSMask,q=w.palette,V=w.mask,K=null;return n!==st.API.image_compression.NONE&&typeof Hc=="function"?(K=function(X){var I;switch(X){case st.API.image_compression.FAST:I=11;break;case st.API.image_compression.MEDIUM:I=13;break;case st.API.image_compression.SLOW:I=14;break;default:I=12}return I}(n),v=this.decode.FLATE_DECODE,S="/Predictor ".concat(K," /Colors ").concat(j," /BitsPerComponent ").concat(p," /Columns ").concat(l),e=rd(L,Math.ceil(l*j*p/8),j,p,n),D&&(m=rd(E,Math.ceil(l*A/8),1,A,n))):(v=void 0,S=void 0,e=L,D&&(m=E)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(m&&this.__addimage__.isArrayBuffer(m)||this.__addimage__.isArrayBufferView(m))&&(m=this.__addimage__.arrayBufferToBinaryString(m)),{alias:r,data:e,index:t,filter:v,decodeParameters:S,transparency:V,palette:q,sMask:m,predictor:K,width:l,height:c,bitsPerComponent:p,sMaskBitsPerComponent:A,colorSpace:M}}},function(e){e.processGIF89A=function(t,r,n,a){var s=new l9(t),l=s.width,c=s.height,d=[];s.decodeAndBlitFrameRGBA(0,d);var f={data:d,width:l,height:c},p=new sc(100).encode(f,100);return e.processJPEG.call(this,p,r,n,a)},e.processGIF87A=e.processGIF89A}(st.API),di.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:a,green:n,blue:r,quad:s}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},di.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Zt.log("bit decode error:"+r)}},di.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,a=0;a<t;a++)for(var s=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+8*a*4,c=0;c<8&&8*a+c<this.width;c++){var d=this.palette[s>>7-c&1];this.data[l+4*c]=d.blue,this.data[l+4*c+1]=d.green,this.data[l+4*c+2]=d.red,this.data[l+4*c+3]=255}r!==0&&(this.pos+=4-r)}},di.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,a=0;a<e;a++){var s=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+2*a*4,c=s>>4,d=15&s,f=this.palette[c];if(this.data[l]=f.blue,this.data[l+1]=f.green,this.data[l+2]=f.red,this.data[l+3]=255,2*a+1>=this.width)break;f=this.palette[d],this.data[l+4]=f.blue,this.data[l+4+1]=f.green,this.data[l+4+2]=f.red,this.data[l+4+3]=255}t!==0&&(this.pos+=4-t)}},di.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var a=this.datav.getUint8(this.pos++,!0),s=r*this.width*4+4*n;if(a<this.palette.length){var l=this.palette[a];this.data[s]=l.red,this.data[s+1]=l.green,this.data[s+2]=l.blue,this.data[s+3]=255}else this.data[s]=255,this.data[s+1]=255,this.data[s+2]=255,this.data[s+3]=255}e!==0&&(this.pos+=4-e)}},di.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,a=0;a<this.width;a++){var s=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(s&t)/t*255|0,c=(s>>5&t)/t*255|0,d=(s>>10&t)/t*255|0,f=s>>15?255:0,p=n*this.width*4+4*a;this.data[p]=d,this.data[p+1]=c,this.data[p+2]=l,this.data[p+3]=f}this.pos+=e}},di.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var a=this.bottom_up?n:this.height-1-n,s=0;s<this.width;s++){var l=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(l&t)/t*255|0,d=(l>>5&r)/r*255|0,f=(l>>11)/t*255|0,p=a*this.width*4+4*s;this.data[p]=f,this.data[p+1]=d,this.data[p+2]=c,this.data[p+3]=255}this.pos+=e}},di.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=s,this.data[l+1]=a,this.data[l+2]=n,this.data[l+3]=255}this.pos+=this.width%4}},di.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=s,this.data[c+1]=a,this.data[c+2]=n,this.data[c+3]=l}},di.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,a){var s=new di(t,!1),l=s.width,c=s.height,d={data:s.getData(),width:l,height:c},f=new sc(100).encode(d,100);return e.processJPEG.call(this,f,r,n,a)}}(st.API),cd.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,a){var s=new cd(t),l=s.width,c=s.height,d={data:s.getData(),width:l,height:c},f=new sc(100).encode(d,100);return e.processJPEG.call(this,f,r,n,a)}}(st.API),st.API.processRGBA=function(e,t,r){for(var n=e.data,a=n.length,s=new Uint8Array(a/4*3),l=new Uint8Array(a/4),c=0,d=0,f=0;f<a;f+=4){var p=n[f],v=n[f+1],S=n[f+2],m=n[f+3];s[c++]=p,s[c++]=v,s[c++]=S,l[d++]=m}var w=this.__addimage__.arrayBufferToBinaryString(s);return{alpha:this.__addimage__.arrayBufferToBinaryString(l),data:w,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},st.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Oa=st.API,jl=Oa.getCharWidthsArray=function(e,t){var r,n,a=(t=t||{}).font||this.internal.getFont(),s=t.fontSize||this.internal.getFontSize(),l=t.charSpace||this.internal.getCharSpace(),c=t.widths?t.widths:a.metadata.Unicode.widths,d=c.fof?c.fof:1,f=t.kerning?t.kerning:a.metadata.Unicode.kerning,p=f.fof?f.fof:1,v=t.doKerning!==!1,S=0,m=e.length,w=0,M=c[0]||d,j=[];for(r=0;r<m;r++)n=e.charCodeAt(r),typeof a.metadata.widthOfString=="function"?j.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(n))+l*(1e3/s)||0)/1e3):(S=v&&qt(f[n])==="object"&&!isNaN(parseInt(f[n][w],10))?f[n][w]/p:0,j.push((c[n]||M)/d+S)),w=n;return j},Ku=Oa.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),a=t.charSpace||this.internal.getCharSpace();return Oa.processArabic&&(e=Oa.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,a)/r:jl.apply(this,arguments).reduce(function(s,l){return s+l},0)},ed=function(e,t,r,n){for(var a=[],s=0,l=e.length,c=0;s!==l&&c+t[s]<r;)c+=t[s],s++;a.push(e.slice(0,s));var d=s;for(c=0;s!==l;)c+t[s]>n&&(a.push(e.slice(d,s)),c=0,d=s),c+=t[s],s++;return d!==s&&a.push(e.slice(d,s)),a},td=function(e,t,r){r||(r={});var n,a,s,l,c,d,f,p=[],v=[p],S=r.textIndent||0,m=0,w=0,M=e.split(" "),j=jl.apply(this,[" ",r])[0];if(d=r.lineIndent===-1?M[0].length+2:r.lineIndent||0){var A=Array(d).join(" "),L=[];M.map(function(D){(D=D.split(/\s*\n/)).length>1?L=L.concat(D.map(function(q,V){return(V&&q.length?`
`:"")+q})):L.push(D[0])}),M=L,d=Ku.apply(this,[A,r])}for(s=0,l=M.length;s<l;s++){var E=0;if(n=M[s],d&&n[0]==`
`&&(n=n.substr(1),E=1),S+m+(w=(a=jl.apply(this,[n,r])).reduce(function(D,q){return D+q},0))>t||E){if(w>t){for(c=ed.apply(this,[n,a,t-(S+m),t]),p.push(c.shift()),p=[c.pop()];c.length;)v.push([c.shift()]);w=a.slice(n.length-(p[0]?p[0].length:0)).reduce(function(D,q){return D+q},0)}else p=[n];v.push(p),S=w+d,m=j}else p.push(n),S+=m+w,m=j}return f=d?function(D,q){return(q?A:"")+D.join(" ")}:function(D){return D.join(" ")},v.map(f)},Oa.splitTextToSize=function(e,t,r){var n,a=(r=r||{}).fontSize||this.internal.getFontSize(),s=(function(p){if(p.widths&&p.kerning)return{widths:p.widths,kerning:p.kerning};var v=this.internal.getFont(p.fontName,p.fontStyle),S="Unicode";return v.metadata[S]?{widths:v.metadata[S].widths||{0:1},kerning:v.metadata[S].kerning||{}}:{font:v.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var l=1*this.internal.scaleFactor*t/a;s.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/a:0,s.lineIndent=r.lineIndent;var c,d,f=[];for(c=0,d=n.length;c<d;c++)f=f.concat(td.apply(this,[n[c],l,s]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},a={},s=0;s<16;s++)n[r[s]]=t[s],a[t[s]]=r[s];var l=function(S){return"0x"+parseInt(S,10).toString(16)},c=e.__fontmetrics__.compress=function(S){var m,w,M,j,A=["{"];for(var L in S){if(m=S[L],isNaN(parseInt(L,10))?w="'"+L+"'":(L=parseInt(L,10),w=(w=l(L).slice(2)).slice(0,-1)+a[w.slice(-1)]),typeof m=="number")m<0?(M=l(m).slice(3),j="-"):(M=l(m).slice(2),j=""),M=j+M.slice(0,-1)+a[M.slice(-1)];else{if(qt(m)!=="object")throw new Error("Don't know what to do with value type "+qt(m)+".");M=c(m)}A.push(w+M)}return A.push("}"),A.join("")},d=e.__fontmetrics__.uncompress=function(S){if(typeof S!="string")throw new Error("Invalid argument passed to uncompress.");for(var m,w,M,j,A={},L=1,E=A,D=[],q="",V="",K=S.length-1,X=1;X<K;X+=1)(j=S[X])=="'"?m?(M=m.join(""),m=void 0):m=[]:m?m.push(j):j=="{"?(D.push([E,M]),E={},M=void 0):j=="}"?((w=D.pop())[0][w[1]]=E,M=void 0,E=w[0]):j=="-"?L=-1:M===void 0?n.hasOwnProperty(j)?(q+=n[j],M=parseInt(q,16)*L,L=1,q=""):q+=j:n.hasOwnProperty(j)?(V+=n[j],E[M]=parseInt(V,16)*L,L=1,M=void 0,V=""):V+=j;return A},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:d("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},p={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},v={Unicode:{"Courier-Oblique":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":d("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":d("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":d("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:d("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:d("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":d("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:d("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":d("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":d("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":d("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(S){var m=S.font,w=v.Unicode[m.postScriptName];w&&(m.metadata.Unicode={},m.metadata.Unicode.widths=w.widths,m.metadata.Unicode.kerning=w.kerning);var M=p.Unicode[m.postScriptName];M&&(m.metadata.Unicode.encoding=M,m.encoding=M.codePages[0])}])}(st.API),function(e){var t=function(r){for(var n=r.length,a=new Uint8Array(n),s=0;s<n;s++)a[s]=r.charCodeAt(s);return a};e.API.events.push(["addFont",function(r){var n=void 0,a=r.font,s=r.instance;if(!a.isStandardFont){if(s===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+a.postScriptName+"').");if(typeof(n=s.existsFileInVFS(a.postScriptName)===!1?s.loadFile(a.postScriptName):s.getFileFromVFS(a.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+a.postScriptName+"').");(function(l,c){c=/^\x00\x01\x00\x00/.test(c)?t(c):t(Bl(c)),l.metadata=e.API.TTFFont.open(c),l.metadata.Unicode=l.metadata.Unicode||{encoding:{},kerning:{},widths:[]},l.metadata.glyIdsUsed=[0]})(a,n)}}])}(st),st.API.addSvgAsImage=function(e,t,r,n,a,s,l,c){if(isNaN(t)||isNaN(r))throw Zt.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(a))throw Zt.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var d=document.createElement("canvas");d.width=n,d.height=a;var f=d.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,d.width,d.height);var p={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},v=this;return(vt.canvg?Promise.resolve(vt.canvg):B1(()=>import("./index.es.CaKCz5Ah.js"),__vite__mapDeps([0,1,2,3]))).catch(function(S){return Promise.reject(new Error("Could not load canvg: "+S))}).then(function(S){return S.default?S.default:S}).then(function(S){return S.fromString(f,e,p)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(S){return S.render(p)}).then(function(){v.addImage(d.toDataURL("image/jpeg",1),t,r,n,a,l,c)})},st.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var a=0;a<this.internal.pages[n].length;a++)this.internal.pages[n][a]=this.internal.pages[n][a].replace(t,r);return this},st.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,a,s,l={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(l),d=[],f=0,p=0,v=0;function S(w,M){var j,A=!1;for(j=0;j<w.length;j+=1)w[j]===M&&(A=!0);return A}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(l)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var m=c.length;for(v=0;v<m;v+=1)r[c[v]].value=r[c[v]].defaultValue,r[c[v]].explicitSet=!1}if(qt(e)==="object"){for(a in e)if(s=e[a],S(c,a)&&s!==void 0){if(r[a].type==="boolean"&&typeof s=="boolean")r[a].value=s;else if(r[a].type==="name"&&S(r[a].valueSet,s))r[a].value=s;else if(r[a].type==="integer"&&Number.isInteger(s))r[a].value=s;else if(r[a].type==="array"){for(f=0;f<s.length;f+=1)if(n=!0,s[f].length===1&&typeof s[f][0]=="number")d.push(String(s[f]-1));else if(s[f].length>1){for(p=0;p<s[f].length;p+=1)typeof s[f][p]!="number"&&(n=!1);n===!0&&d.push([s[f][0]-1,s[f][1]-1].join(" "))}r[a].value="["+d.join(" ")+"]"}else r[a].value=r[a].defaultValue;r[a].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var w,M=[];for(w in r)r[w].explicitSet===!0&&(r[w].type==="name"?M.push("/"+w+" /"+r[w].value):M.push("/"+w+" "+r[w].value));M.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+M.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',a=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),s=unescape(encodeURIComponent(n)),l=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),c=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),d=unescape(encodeURIComponent("</x:xmpmeta>")),f=s.length+l.length+c.length+a.length+d.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(a+s+l+c+d),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,a){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:a||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(st.API),function(e){var t=e.API,r=t.pdfEscape16=function(s,l){for(var c,d=l.metadata.Unicode.widths,f=["","0","00","000","0000"],p=[""],v=0,S=s.length;v<S;++v){if(c=l.metadata.characterToGlyph(s.charCodeAt(v)),l.metadata.glyIdsUsed.push(c),l.metadata.toUnicode[c]=s.charCodeAt(v),d.indexOf(c)==-1&&(d.push(c),d.push([parseInt(l.metadata.widthOfGlyph(c),10)])),c=="0")return p.join("");c=c.toString(16),p.push(f[4-c.length],c)}return p.join("")},n=function(s){var l,c,d,f,p,v,S;for(p=`/CIDInit /ProcSet findresource begin
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
endcodespacerange`,d=[],v=0,S=(c=Object.keys(s).sort(function(m,w){return m-w})).length;v<S;v++)l=c[v],d.length>=100&&(p+=`
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
end`};t.events.push(["putFont",function(s){(function(l){var c=l.font,d=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="Identity-H"){for(var v=c.metadata.Unicode.widths,S=c.metadata.subset.encode(c.metadata.glyIdsUsed,1),m="",w=0;w<S.length;w++)m+=String.fromCharCode(S[w]);var M=f();p({data:m,addLength1:!0,objectId:M}),d("endobj");var j=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:j}),d("endobj");var A=f();d("<<"),d("/Type /FontDescriptor"),d("/FontName /"+$a(c.fontName)),d("/FontFile2 "+M+" 0 R"),d("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),d("/Flags "+c.metadata.flags),d("/StemV "+c.metadata.stemV),d("/ItalicAngle "+c.metadata.italicAngle),d("/Ascent "+c.metadata.ascender),d("/Descent "+c.metadata.decender),d("/CapHeight "+c.metadata.capHeight),d(">>"),d("endobj");var L=f();d("<<"),d("/Type /Font"),d("/BaseFont /"+$a(c.fontName)),d("/FontDescriptor "+A+" 0 R"),d("/W "+e.API.PDFObject.convert(v)),d("/CIDToGIDMap /Identity"),d("/DW 1000"),d("/Subtype /CIDFontType2"),d("/CIDSystemInfo"),d("<<"),d("/Supplement 0"),d("/Registry (Adobe)"),d("/Ordering ("+c.encoding+")"),d(">>"),d(">>"),d("endobj"),c.objectNumber=f(),d("<<"),d("/Type /Font"),d("/Subtype /Type0"),d("/ToUnicode "+j+" 0 R"),d("/BaseFont /"+$a(c.fontName)),d("/Encoding /"+c.encoding),d("/DescendantFonts ["+L+" 0 R]"),d(">>"),d("endobj"),c.isAlreadyPutted=!0}})(s)}]),t.events.push(["putFont",function(s){(function(l){var c=l.font,d=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="WinAnsiEncoding"){for(var v=c.metadata.rawData,S="",m=0;m<v.length;m++)S+=String.fromCharCode(v[m]);var w=f();p({data:S,addLength1:!0,objectId:w}),d("endobj");var M=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:M}),d("endobj");var j=f();d("<<"),d("/Descent "+c.metadata.decender),d("/CapHeight "+c.metadata.capHeight),d("/StemV "+c.metadata.stemV),d("/Type /FontDescriptor"),d("/FontFile2 "+w+" 0 R"),d("/Flags 96"),d("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),d("/FontName /"+$a(c.fontName)),d("/ItalicAngle "+c.metadata.italicAngle),d("/Ascent "+c.metadata.ascender),d(">>"),d("endobj"),c.objectNumber=f();for(var A=0;A<c.metadata.hmtx.widths.length;A++)c.metadata.hmtx.widths[A]=parseInt(c.metadata.hmtx.widths[A]*(1e3/c.metadata.head.unitsPerEm));d("<</Subtype/TrueType/Type/Font/ToUnicode "+M+" 0 R/BaseFont/"+$a(c.fontName)+"/FontDescriptor "+j+" 0 R/Encoding/"+c.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(c.metadata.hmtx.widths)+">>"),d("endobj"),c.isAlreadyPutted=!0}})(s)}]);var a=function(s){var l,c=s.text||"",d=s.x,f=s.y,p=s.options||{},v=s.mutex||{},S=v.pdfEscape,m=v.activeFontKey,w=v.fonts,M=m,j="",A=0,L="",E=w[M].encoding;if(w[M].encoding!=="Identity-H")return{text:c,x:d,y:f,options:p,mutex:v};for(L=c,M=m,Array.isArray(c)&&(L=c[0]),A=0;A<L.length;A+=1)w[M].metadata.hasOwnProperty("cmap")&&(l=w[M].metadata.cmap.unicode.codeMap[L[A].charCodeAt(0)]),l||L[A].charCodeAt(0)<256&&w[M].metadata.hasOwnProperty("Unicode")?j+=L[A]:j+="";var D="";return parseInt(M.slice(1))<14||E==="WinAnsiEncoding"?D=S(j,M).split("").map(function(q){return q.charCodeAt(0).toString(16)}).join(""):E==="Identity-H"&&(D=r(j,w[M])),v.isHex=!0,{text:D,x:d,y:f,options:p,mutex:v}};t.events.push(["postProcessText",function(s){var l=s.text||"",c=[],d={text:l,x:s.x,y:s.y,options:s.options,mutex:s.mutex};if(Array.isArray(l)){var f=0;for(f=0;f<l.length;f+=1)Array.isArray(l[f])&&l[f].length===3?c.push([a(Object.assign({},d,{text:l[f][0]})).text,l[f][1],l[f][2]]):c.push(a(Object.assign({},d,{text:l[f]})).text);s.text=c}else s.text=a(Object.assign({},d,{text:l})).text}])}(st),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(st.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var a,s,l,c,d,f,p,v=t,S=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],m=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],w={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},M={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},j=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],A=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),L=!1,E=0;this.__bidiEngine__={};var D=function(_){var P=_.charCodeAt(),F=P>>8,$=M[F];return $!==void 0?v[256*$+(255&P)]:F===252||F===253?"AL":A.test(F)?"L":F===8?"R":"N"},q=function(_){for(var P,F=0;F<_.length;F++){if((P=D(_.charAt(F)))==="L")return!1;if(P==="R")return!0}return!1},V=function(_,P,F,$){var re,se,fe,ne,ge=P[$];switch(ge){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":L=!1;break;case"N":case"AN":break;case"EN":L&&(ge="AN");break;case"AL":L=!0,ge="R";break;case"WS":case"BN":ge="N";break;case"CS":$<1||$+1>=P.length||(re=F[$-1])!=="EN"&&re!=="AN"||(se=P[$+1])!=="EN"&&se!=="AN"?ge="N":L&&(se="AN"),ge=se===re?se:"N";break;case"ES":ge=(re=$>0?F[$-1]:"B")==="EN"&&$+1<P.length&&P[$+1]==="EN"?"EN":"N";break;case"ET":if($>0&&F[$-1]==="EN"){ge="EN";break}if(L){ge="N";break}for(fe=$+1,ne=P.length;fe<ne&&P[fe]==="ET";)fe++;ge=fe<ne&&P[fe]==="EN"?"EN":"N";break;case"NSM":if(l&&!c){for(ne=P.length,fe=$+1;fe<ne&&P[fe]==="NSM";)fe++;if(fe<ne){var Me=_[$],we=Me>=1425&&Me<=2303||Me===64286;if(re=P[fe],we&&(re==="R"||re==="AL")){ge="R";break}}}ge=$<1||(re=P[$-1])==="B"?"N":F[$-1];break;case"B":L=!1,a=!0,ge=E;break;case"S":s=!0,ge="N"}return ge},K=function(_,P,F){var $=_.split("");return F&&X($,F,{hiLevel:E}),$.reverse(),P&&P.reverse(),$.join("")},X=function(_,P,F){var $,re,se,fe,ne,ge=-1,Me=_.length,we=0,k=[],H=E?m:S,J=[];for(L=!1,a=!1,s=!1,re=0;re<Me;re++)J[re]=D(_[re]);for(se=0;se<Me;se++){if(ne=we,k[se]=V(_,J,k,se),$=240&(we=H[ne][w[k[se]]]),we&=15,P[se]=fe=H[we][5],$>0)if($===16){for(re=ge;re<se;re++)P[re]=1;ge=-1}else ge=-1;if(H[we][6])ge===-1&&(ge=se);else if(ge>-1){for(re=ge;re<se;re++)P[re]=fe;ge=-1}J[se]==="B"&&(P[se]=0),F.hiLevel|=fe}s&&function(te,oe,le){for(var pe=0;pe<le;pe++)if(te[pe]==="S"){oe[pe]=E;for(var ve=pe-1;ve>=0&&te[ve]==="WS";ve--)oe[ve]=E}}(J,P,Me)},I=function(_,P,F,$,re){if(!(re.hiLevel<_)){if(_===1&&E===1&&!a)return P.reverse(),void(F&&F.reverse());for(var se,fe,ne,ge,Me=P.length,we=0;we<Me;){if($[we]>=_){for(ne=we+1;ne<Me&&$[ne]>=_;)ne++;for(ge=we,fe=ne-1;ge<fe;ge++,fe--)se=P[ge],P[ge]=P[fe],P[fe]=se,F&&(se=F[ge],F[ge]=F[fe],F[fe]=se);we=ne}we++}}},Z=function(_,P,F){var $=_.split(""),re={hiLevel:E};return F||(F=[]),X($,F,re),function(se,fe,ne){if(ne.hiLevel!==0&&p)for(var ge,Me=0;Me<se.length;Me++)fe[Me]===1&&(ge=j.indexOf(se[Me]))>=0&&(se[Me]=j[ge+1])}($,F,re),I(2,$,P,F,re),I(1,$,P,F,re),$.join("")};return this.__bidiEngine__.doBidiReorder=function(_,P,F){if(function(re,se){if(se)for(var fe=0;fe<re.length;fe++)se[fe]=fe;c===void 0&&(c=q(re)),f===void 0&&(f=q(re))}(_,P),l||!d||f)if(l&&d&&c^f)E=c?1:0,_=K(_,P,F);else if(!l&&d&&f)E=c?1:0,_=Z(_,P,F),_=K(_,P);else if(!l||c||d||f){if(l&&!d&&c^f)_=K(_,P),c?(E=0,_=Z(_,P,F)):(E=1,_=Z(_,P,F),_=K(_,P));else if(l&&c&&!d&&f)E=1,_=Z(_,P,F),_=K(_,P);else if(!l&&!d&&c^f){var $=p;c?(E=1,_=Z(_,P,F),E=0,p=!1,_=Z(_,P,F),p=$):(E=0,_=Z(_,P,F),_=K(_,P),E=1,p=!1,_=Z(_,P,F),p=$,_=K(_,P))}}else E=0,_=Z(_,P,F);else E=c?1:0,_=Z(_,P,F);return _},this.__bidiEngine__.setOptions=function(_){_&&(l=_.isInputVisual,d=_.isOutputVisual,c=_.isInputRtl,f=_.isOutputRtl,p=_.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var a=n.text;n.x,n.y;var s=n.options||{};n.mutex,s.lang;var l=[];if(s.isInputVisual=typeof s.isInputVisual!="boolean"||s.isInputVisual,r.setOptions(s),Object.prototype.toString.call(a)==="[object Array]"){var c=0;for(l=[],c=0;c<a.length;c+=1)Object.prototype.toString.call(a[c])==="[object Array]"?l.push([r.doBidiReorder(a[c][0]),a[c][1],a[c][2]]):l.push([r.doBidiReorder(a[c])]);n.text=l}else n.text=r.doBidiReorder(a);r.setOptions({isInputVisual:!0})}])}(st),st.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new Yo(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new C9(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new c9(this.contents),this.head=new d9(this),this.name=new g9(this),this.cmap=new Uf(this),this.toUnicode={},this.hhea=new h9(this),this.maxp=new x9(this),this.hmtx=new v9(this),this.post=new p9(this),this.os2=new f9(this),this.loca=new _9(this),this.glyf=new b9(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,a,s;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var l,c,d,f;for(f=[],l=0,c=(d=this.bbox).length;l<c;l++)t=d[l],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(a=this.post.italic_angle),32768&(r=a>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(s=this.familyClass)===1||s===2||s===3||s===4||s===5||s===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var a,s,l,c;for(l=0,s=0,c=(t=""+t).length;0<=c?s<c:s>c;s=0<=c?++s:--s)a=t.charCodeAt(s),l+=this.widthOfGlyph(this.characterToGlyph(a))+n*(1e3/r)||0;return l*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var xi,Yo=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,a;for(a=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)a.push(this.writeByte(t.charCodeAt(r)));return a},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,a,s,l,c,d;return t=this.readByte(),r=this.readByte(),n=this.readByte(),a=this.readByte(),s=this.readByte(),l=this.readByte(),c=this.readByte(),d=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^a)+16777216*(255^s)+65536*(255^l)+256*(255^c)+(255^d)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*a+16777216*s+65536*l+256*c+d},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,a,s;for(s=[],n=0,a=t.length;n<a;n++)r=t[n],s.push(this.writeByte(r));return s},e}(),c9=function(){var e;function t(r){var n,a,s;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},a=0,s=this.tableCount;0<=s?a<s:a>s;a=0<=s?++a:--a)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,a,s,l,c,d,f,p,v,S,m,w,M;for(M in m=Object.keys(r).length,d=Math.log(2),v=16*Math.floor(Math.log(m)/d),l=Math.floor(v/d),p=16*m-v,(a=new Yo).writeInt(this.scalarType),a.writeShort(m),a.writeShort(v),a.writeShort(l),a.writeShort(p),s=16*m,f=a.pos+s,c=null,w=[],r)for(S=r[M],a.writeString(M),a.writeInt(e(S)),a.writeInt(f),a.writeInt(S.length),w=w.concat(S),M==="head"&&(c=f),f+=S.length;f%4;)w.push(0),f++;return a.write(w),n=2981146554-e(a.data),a.pos=c+8,a.writeUInt32(n),a.data},e=function(r){var n,a,s,l;for(r=Hf.call(r);r.length%4;)r.push(0);for(s=new Yo(r),a=0,n=0,l=r.length;n<l;n=n+=4)a+=s.readUInt32();return 4294967295&a},t}(),u9={}.hasOwnProperty,zi=function(e,t){for(var r in t)u9.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};xi=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var d9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new Yo).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),ud=function(){function e(t,r){var n,a,s,l,c,d,f,p,v,S,m,w,M,j,A,L,E;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),v=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(d=0;d<256;++d)this.codeMap[d]=t.readByte();break;case 4:for(m=t.readUInt16(),S=m/2,t.pos+=6,s=function(){var D,q;for(q=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)q.push(t.readUInt16());return q}(),t.pos+=2,M=function(){var D,q;for(q=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)q.push(t.readUInt16());return q}(),f=function(){var D,q;for(q=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)q.push(t.readUInt16());return q}(),p=function(){var D,q;for(q=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)q.push(t.readUInt16());return q}(),a=(this.length-t.pos+this.offset)/2,c=function(){var D,q;for(q=[],d=D=0;0<=a?D<a:D>a;d=0<=a?++D:--D)q.push(t.readUInt16());return q}(),d=A=0,E=s.length;A<E;d=++A)for(j=s[d],n=L=w=M[d];w<=j?L<=j:L>=j;n=w<=j?++L:--L)p[d]===0?l=n+f[d]:(l=c[p[d]/2+(n-w)-(S-d)]||0)!==0&&(l+=f[d]),this.codeMap[n]=65535&l}t.pos=v}return e.encode=function(t,r){var n,a,s,l,c,d,f,p,v,S,m,w,M,j,A,L,E,D,q,V,K,X,I,Z,_,P,F,$,re,se,fe,ne,ge,Me,we,k,H,J,te,oe,le,pe,ve,ue,ke,Te;switch($=new Yo,l=Object.keys(t).sort(function(Re,de){return Re-de}),r){case"macroman":for(M=0,j=function(){var Re=[];for(w=0;w<256;++w)Re.push(0);return Re}(),L={0:0},s={},re=0,ge=l.length;re<ge;re++)L[ve=t[a=l[re]]]==null&&(L[ve]=++M),s[a]={old:t[a],new:L[t[a]]},j[a]=L[t[a]];return $.writeUInt16(1),$.writeUInt16(0),$.writeUInt32(12),$.writeUInt16(0),$.writeUInt16(262),$.writeUInt16(0),$.write(j),{charMap:s,subtable:$.data,maxGlyphID:M+1};case"unicode":for(P=[],v=[],E=0,L={},n={},A=f=null,se=0,Me=l.length;se<Me;se++)L[q=t[a=l[se]]]==null&&(L[q]=++E),n[a]={old:q,new:L[q]},c=L[q]-a,A!=null&&c===f||(A&&v.push(A),P.push(a),f=c),A=a;for(A&&v.push(A),v.push(65535),P.push(65535),Z=2*(I=P.length),X=2*Math.pow(Math.log(I)/Math.LN2,2),S=Math.log(X/2)/Math.LN2,K=2*I-X,d=[],V=[],m=[],w=fe=0,we=P.length;fe<we;w=++fe){if(_=P[w],p=v[w],_===65535){d.push(0),V.push(0);break}if(_-(F=n[_].new)>=32768)for(d.push(0),V.push(2*(m.length+I-w)),a=ne=_;_<=p?ne<=p:ne>=p;a=_<=p?++ne:--ne)m.push(n[a].new);else d.push(F-_),V.push(0)}for($.writeUInt16(3),$.writeUInt16(1),$.writeUInt32(12),$.writeUInt16(4),$.writeUInt16(16+8*I+2*m.length),$.writeUInt16(0),$.writeUInt16(Z),$.writeUInt16(X),$.writeUInt16(S),$.writeUInt16(K),le=0,k=v.length;le<k;le++)a=v[le],$.writeUInt16(a);for($.writeUInt16(0),pe=0,H=P.length;pe<H;pe++)a=P[pe],$.writeUInt16(a);for(ue=0,J=d.length;ue<J;ue++)c=d[ue],$.writeUInt16(c);for(ke=0,te=V.length;ke<te;ke++)D=V[ke],$.writeUInt16(D);for(Te=0,oe=m.length;Te<oe;Te++)M=m[Te],$.writeUInt16(M);return{charMap:n,subtable:$.data,maxGlyphID:E+1}}},e}(),Uf=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,a;for(t.pos=this.offset,this.version=t.readUInt16(),a=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=a?n<a:n>a;n=0<=a?++n:--n)r=new ud(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,a;return r==null&&(r="macroman"),n=ud.encode(t,r),(a=new Yo).writeUInt16(0),a.writeUInt16(1),n.table=a.data.concat(n.subtable),n},e}(),h9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),f9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),p9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,a;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var s;for(n=t.readUInt16(),this.glyphNameIndex=[],s=0;0<=n?s<n:s>n;s=0<=n?++s:--s)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],a=[];t.pos<this.offset+this.length;)r=t.readByte(),a.push(this.names.push(t.readString(r)));return a;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var l,c,d;for(d=[],s=l=0,c=this.file.maxp.numGlyphs;0<=c?l<c:l>c;s=0<=c?++l:--l)d.push(t.readUInt32());return d}).call(this)}},e}(),m9=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},g9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,a,s,l,c,d,f,p,v,S;for(t.pos=this.offset,t.readShort(),r=t.readShort(),c=t.readShort(),n=[],s=0;0<=r?s<r:s>r;s=0<=r?++s:--s)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+c+t.readShort()});for(d={},s=p=0,v=n.length;p<v;s=++p)a=n[s],t.pos=a.offset,f=t.readString(a.length),l=new m9(f,a),d[S=a.nameID]==null&&(d[S]=[]),d[a.nameID].push(l);this.strings=d,this.copyright=d[0],this.fontFamily=d[1],this.fontSubfamily=d[2],this.uniqueSubfamily=d[3],this.fontName=d[4],this.version=d[5];try{this.postscriptName=d[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=d[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=d[7],this.manufacturer=d[8],this.designer=d[9],this.description=d[10],this.vendorUrl=d[11],this.designerUrl=d[12],this.license=d[13],this.licenseUrl=d[14],this.preferredFamily=d[15],this.preferredSubfamily=d[17],this.compatibleFull=d[18],this.sampleText=d[19]},e}(),x9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),v9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,a,s,l,c,d;for(t.pos=this.offset,this.metrics=[],r=0,c=this.file.hhea.numberOfMetrics;0<=c?r<c:r>c;r=0<=c?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(a=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,p;for(p=[],r=f=0;0<=a?f<a:f>a;r=0<=a?++f:--f)p.push(t.readInt16());return p}(),this.widths=(function(){var f,p,v,S;for(S=[],f=0,p=(v=this.metrics).length;f<p;f++)s=v[f],S.push(s.advance);return S}).call(this),n=this.widths[this.widths.length-1],d=[],r=l=0;0<=a?l<a:l>a;r=0<=a?++l:--l)d.push(this.widths.push(n));return d},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),Hf=[].slice,b9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,a,s,l,c,d,f,p,v;return t in this.cache?this.cache[t]:(s=this.file.loca,r=this.file.contents,n=s.indexOf(t),(a=s.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,l=(c=new Yo(r.read(a))).readShort(),f=c.readShort(),v=c.readShort(),d=c.readShort(),p=c.readShort(),this.cache[t]=l===-1?new y9(c,f,v,d,p):new w9(c,l,f,v,d,p),this.cache[t]))},e.prototype.encode=function(t,r,n){var a,s,l,c,d;for(l=[],s=[],c=0,d=r.length;c<d;c++)a=t[r[c]],s.push(l.length),a&&(l=l.concat(a.encode(n)));return s.push(l.length),{table:l,offsets:s}},e}(),w9=function(){function e(t,r,n,a,s,l){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=a,this.xMax=s,this.yMax=l,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),y9=function(){function e(t,r,n,a,s){var l,c;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=a,this.yMax=s,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],l=this.raw;c=l.readShort(),this.glyphOffsets.push(l.pos),this.glyphIDs.push(l.readUInt16()),32&c;)l.pos+=1&c?4:2,128&c?l.pos+=8:64&c?l.pos+=4:8&c&&(l.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new Yo(Hf.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),_9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return zi(e,xi),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var a,s;for(s=[],n=0,a=this.length;n<a;n+=2)s.push(2*t.readUInt16());return s}).call(this):(function(){var a,s;for(s=[],n=0,a=this.length;n<a;n+=4)s.push(t.readUInt32());return s}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),a=0,s=0,l=0;l<n.length;++l)if(n[l]=a,s<r.length&&r[s]==l){++s,n[l]=a;var c=this.offsets[l],d=this.offsets[l+1]-c;d>0&&(a+=d)}for(var f=new Array(4*n.length),p=0;p<n.length;++p)f[4*p+3]=255&n[p],f[4*p+2]=(65280&n[p])>>8,f[4*p+1]=(16711680&n[p])>>16,f[4*p]=(4278190080&n[p])>>24;return f},e}(),C9=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,a,s;for(r in a=this.font.cmap.tables[0].codeMap,t={},s=this.subset)n=s[r],t[r]=a[n];return t},e.prototype.glyphsFor=function(t){var r,n,a,s,l,c,d;for(a={},l=0,c=t.length;l<c;l++)a[s=t[l]]=this.font.glyf.glyphFor(s);for(s in r=[],a)(n=a[s])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(s in d=this.glyphsFor(r))n=d[s],a[s]=n;return a},e.prototype.encode=function(t,r){var n,a,s,l,c,d,f,p,v,S,m,w,M,j,A;for(a in n=Uf.encode(this.generateCmap(),"unicode"),l=this.glyphsFor(t),m={0:0},A=n.charMap)m[(d=A[a]).old]=d.new;for(w in S=n.maxGlyphID,l)w in m||(m[w]=S++);return p=function(L){var E,D;for(E in D={},L)D[L[E]]=E;return D}(m),v=Object.keys(p).sort(function(L,E){return L-E}),M=function(){var L,E,D;for(D=[],L=0,E=v.length;L<E;L++)c=v[L],D.push(p[c]);return D}(),s=this.font.glyf.encode(l,M,m),f=this.font.loca.encode(s.offsets,M),j={cmap:this.font.cmap.raw(),glyf:s.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(j["OS/2"]=this.font.os2.raw()),this.font.directory.encode(j)},e}();st.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,a,s,l;if(Array.isArray(r))return"["+function(){var c,d,f;for(f=[],c=0,d=r.length;c<d;c++)n=r[c],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(a in s=["<<"],r)l=r[a],s.push("/"+a+" "+t.convert(l));return s.push(">>"),s.join(`
`)}return""+r},t}();const S9=["ab67616d000082c1","ab67616d0000b273"];async function A9(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function k9(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function M9(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=k9(e);if(!t)return e;for(const r of S9){const n=`https://i.scdn.co/image/${r}${t}`;if(await A9(n))return n}return e}function j9(e){return nt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function N9(e){return nt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const I9=({width:e})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:e,height:e,children:[o.jsxs("g",{id:"freepik--Padlock--inject-81",children:[o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72"}),o.jsx("path",{d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72",opacity:"0.3"}),o.jsx("rect",{width:"97.29",height:"62.42",x:"65.15",y:"136.1",fill:"var(--LoginSVG-fill)",rx:"5.81",transform:"rotate(-22.27 113.786 167.288)"}),o.jsx("path",{d:"M118.23 156.7a8.13 8.13 0 1 0-6.62 11.13l4.6 11.25 4.11-1.68-4.61-11.25a8.1 8.1 0 0 0 2.52-9.45",opacity:"0.5"}),o.jsx("path",{fill:"#fafafa",d:"M83.16 207.18c-.21.09-4.32-9.48-9.18-21.36s-8.65-21.58-8.44-21.67 4.32 9.48 9.18 21.37 8.64 21.58 8.44 21.66M108.76 171.85a2.8 2.8 0 0 1-1.08-.14 10.1 10.1 0 0 1-2.75-1.19 11.38 11.38 0 0 1-2.73-17.36 9.5 9.5 0 0 1 2.25-2c.6-.37 1-.51 1-.47a26 26 0 0 0-2.8 2.79 11.28 11.28 0 0 0 2.6 16.53 26.4 26.4 0 0 0 3.51 1.84"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m44.94 181.71.49-1.42.93 1.18a6.2 6.2 0 0 0 2.88 2l1.42.49-1.18.93a6.34 6.34 0 0 0-2 2.88l-.48 1.45-1-1.17a6.3 6.3 0 0 0-2.89-2l-1.41-.49 1.17-.93a6.34 6.34 0 0 0 2.07-2.92M92.4 125.92l.28-.82.54.68A3.7 3.7 0 0 0 94.9 127l.82.28-.68.55a3.63 3.63 0 0 0-1.19 1.67l-.28.82-.57-.72a3.54 3.54 0 0 0-1.67-1.18l-.83-.29.69-.54a3.7 3.7 0 0 0 1.21-1.67M35.33 132.87l.82-2.39 1.57 2a10.5 10.5 0 0 0 4.84 3.42l2.38.82-2 1.57a10.57 10.57 0 0 0-3.43 4.84l-.82 2.38-1.56-2a10.5 10.5 0 0 0-4.84-3.43l-2.38-.82 2-1.56a10.6 10.6 0 0 0 3.42-4.83"})]}),o.jsxs("g",{id:"freepik--Device--inject-81",children:[o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m311.06 479.9-147.61-.09a32.16 32.16 0 0 1-32.14-32.16l.07-370.07a32.16 32.16 0 0 1 32.18-32.15l147.61.08a32.16 32.16 0 0 1 32.14 32.16l-.07 370.08a32.16 32.16 0 0 1-32.18 32.15"}),o.jsx("path",{fill:"#fff",d:"M311 58.6h-28.6a7.1 7.1 0 0 0-6.95 7.26V71a7.11 7.11 0 0 1-6.95 7.26h-55.78a7.12 7.12 0 0 1-7-7.27v-5.18a7.11 7.11 0 0 0-6.95-7.27H163.7A22.53 22.53 0 0 0 141.16 81l-.07 361.22a22.52 22.52 0 0 0 22.51 22.52l147.32.09a22.51 22.51 0 0 0 22.53-22.52l.07-361.21A22.52 22.52 0 0 0 311 58.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M223.63 437.25a2.83 2.83 0 1 1-2.86-2.8 2.84 2.84 0 0 1 2.86 2.8M239.47 437.12a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M255.32 437a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M311.88 95.08c0 .08-3.73.18-8.32.22s-8.31 0-8.31-.09S299 95 303.56 95s8.31 0 8.32.08M311.91 99.33c0 .09-3.72.19-8.31.23s-8.32 0-8.32-.09 3.72-.19 8.32-.23 8.31 0 8.31.09M312 103.58c0 .09-3.73.19-8.32.23s-8.31 0-8.31-.09 3.72-.18 8.31-.22 8.26 0 8.32.08M160.65 108.44h1.34l3.56-.08-.09.09v-2.57a15 15 0 0 1 0-1.48 1.33 1.33 0 0 1 1.17-1.08h1.7a1.35 1.35 0 0 1 1.15 1.35v3.76l-.15-.15h4.48l-.15.15v-7a1.17 1.17 0 0 0-.18-.58 4 4 0 0 0-.46-.49c-.66-.65-1.31-1.3-2-1.93l-1.89-1.86c-.3-.31-.61-.61-.91-.91s-.56-.62-.94-.69a1.21 1.21 0 0 0-1 .2c-.27.23-.56.55-.83.82l-1.61 1.62c-1 1-2.06 2-2.83 2.92a3.2 3.2 0 0 0-.22 1.68v6.33-2.14c0-.6 0-1.58-.05-2.56v-2.49a1.83 1.83 0 0 1 .25-.93c.83-1 1.82-1.91 2.84-3l1.59-1.63c.29-.28.53-.57.86-.86a1.51 1.51 0 0 1 1.29-.25 2.4 2.4 0 0 1 1.06.76l.92.9 1.9 1.86 2 1.93a3.8 3.8 0 0 1 .5.54 1.5 1.5 0 0 1 .23.74v7.16h-4.78v-3.9a1.11 1.11 0 0 0-.92-1.11h-1.63a1.11 1.11 0 0 0-1 .88v4.1H161a1.6 1.6 0 0 1-.35-.1M198.47 194.2c0 3.47-2.6 5.63-6.76 5.63h-3.13v4.28H185v-15.55h6.73c4.14 0 6.74 2.16 6.74 5.64m-3.65 0c0-1.71-1.11-2.71-3.31-2.71h-2.93v5.4h2.93c2.2 0 3.31-1 3.31-2.69M211.24 197.29v6.82H208v-1.49a3.93 3.93 0 0 1-3.64 1.67c-2.8 0-4.47-1.55-4.47-3.62s1.49-3.58 5.13-3.58h2.76c0-1.49-.89-2.35-2.76-2.35a5.73 5.73 0 0 0-3.44 1.11l-1.25-2.42a9.2 9.2 0 0 1 5.16-1.45c3.64.02 5.75 1.69 5.75 5.31m-3.46 3.05v-1.22h-2.38c-1.62 0-2.13.59-2.13 1.39s.73 1.49 1.95 1.49a2.55 2.55 0 0 0 2.56-1.66M213.22 203l1.16-2.49a8.1 8.1 0 0 0 4.15 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.76 9.76 0 0 1 4.6 1.05l-1.15 2.46a7 7 0 0 0-3.45-.89c-1.55 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8a10.2 10.2 0 0 1-5.18-1.29M225 203l1.15-2.49a8.2 8.2 0 0 0 4.16 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.8 9.8 0 0 1 4.6 1.05l-1.16 2.46a6.9 6.9 0 0 0-3.44-.89c-1.56 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8A10.2 10.2 0 0 1 225 203M256.94 192.16l-4.33 12h-3.33l-2.69-7.42-2.78 7.42h-3.33l-4.31-12h3.27l2.82 8.09 2.93-8.09h2.93l2.85 8.09 2.91-8.09ZM257.35 198.14c0-3.6 2.77-6.16 6.57-6.16s6.56 2.56 6.56 6.16-2.76 6.15-6.56 6.15-6.57-2.55-6.57-6.15m9.62 0a3.06 3.06 0 1 0-3.05 3.31 3 3 0 0 0 3.08-3.31ZM280.21 192v3.2h-.78c-1.91 0-3.18 1-3.18 3.33v5.64h-3.46v-12h3.31v1.58a4.8 4.8 0 0 1 4.11-1.75M294.34 187.63v16.48H291v-1.37a4.61 4.61 0 0 1-3.73 1.55 6.16 6.16 0 0 1 0-12.31 4.57 4.57 0 0 1 3.57 1.45v-5.8Zm-3.4 10.51a3.06 3.06 0 1 0-3 3.31 3 3 0 0 0 3-3.31"}),o.jsx("path",{fill:"#e0e0e0",d:"M321 217c0 .14-37 .26-82.69.26s-82.71-.12-82.71-.26 37-.26 82.71-.26 82.69.09 82.69.26M317.15 369.23c0 .15-37 .26-82.7.26s-82.7-.11-82.7-.26 37-.26 82.7-.26 82.7.12 82.7.26M279.74 380.67c0 .14-20.57.26-45.94.26s-45.94-.12-45.94-.26 20.56-.26 45.94-.26 45.94.11 45.94.26"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m170.5 261.3 3.13 1.69-1.41 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.17 1.9-1.35-2.35 3.1-1.7-3.14-1.73 1.38-2.35 3.17 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM206.42 261.3l3.13 1.69-1.41 2.36-3.14-1.87V267h-2.71v-3.51l-3.16 1.9-1.31-2.39 3.18-1.7-3.13-1.73 1.38-2.35 3.16 1.89v-3.5H205l-.06 3.5 3.16-1.89 1.41 2.35ZM241.38 261.3l3.13 1.69-1.41 2.36-3.16-1.87.06 3.52h-2.7v-3.51l-3.17 1.9-1.35-2.39 3.14-1.69-3.14-1.73 1.38-2.35 3.17 1.89v-3.5H240l-.06 3.5 3.16-1.89 1.41 2.35ZM275.25 261.3l3.13 1.69-1.38 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.16 1.9-1.39-2.35 3.14-1.69-3.14-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM308.85 261.3 312 263l-1.41 2.36-3.16-1.87.05 3.48h-2.7v-3.51l-3.16 1.9-1.36-2.36 3.13-1.69-3.13-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.05 3.5 3.16-1.89 1.41 2.35Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M176.07 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM211.26 283.08h-15.15A7.08 7.08 0 0 1 189 276v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.03 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM245.49 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM280.1 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM313.7 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.57 6.57 0 0 0 6.57 6.57h15.15a6.58 6.58 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56Z"}),o.jsx("rect",{width:"169.79",height:"29.74",x:"154.09",y:"315.56",fill:"var(--LoginSVG-fill)",rx:"11.29"}),o.jsx("path",{fill:"#fff",d:"M217.55 324.45h4.57c3.29 0 5.55 2 5.55 5s-2.26 5-5.55 5h-4.57Zm4.45 8.15a3.12 3.12 0 1 0 0-6.24h-2.13v6.24ZM228.69 330.65a4.26 4.26 0 1 1 4.26 4 4 4 0 0 1-4.26-4m6.23 0a2 2 0 1 0-4 0 2 2 0 1 0 4 0M246.59 330.09v4.42h-2.24v-4.08c0-1.25-.58-1.82-1.57-1.82s-1.85.66-1.85 2.08v3.82h-2.24v-7.73h2.14v.91a3.4 3.4 0 0 1 2.56-1c1.82-.02 3.2 1.04 3.2 3.4M256.24 331.28h-5.85a2.07 2.07 0 0 0 2.21 1.55 2.6 2.6 0 0 0 1.94-.75l1.2 1.3a4.05 4.05 0 0 1-3.19 1.25c-2.68 0-4.42-1.68-4.42-4a3.93 3.93 0 0 1 4.13-4 3.82 3.82 0 0 1 4 4c.02.22-.01.46-.02.65m-5.88-1.28h3.81a1.93 1.93 0 0 0-3.81 0"}),o.jsx("circle",{cx:"237.31",cy:"143.52",r:"30.05",fill:"var(--LoginSVG-fill)"}),o.jsx("path",{fill:"#fff",d:"M232 138.05h-.5v-2.8a5.86 5.86 0 0 1 11.72 0v2.28h-.5v-2.28a5.36 5.36 0 0 0-10.72 0Z"}),o.jsx("path",{fill:"#fff",d:"M244.76 157.65h-14.9a2.48 2.48 0 0 1-2.47-2.47v-14.91a2.48 2.48 0 0 1 2.47-2.47h14.9a2.48 2.48 0 0 1 2.47 2.47v14.91a2.48 2.48 0 0 1-2.47 2.47m-14.9-19.35a2 2 0 0 0-2 2v14.91a2 2 0 0 0 2 2h14.9a2 2 0 0 0 2-2v-14.94a2 2 0 0 0-2-2Z"}),o.jsx("path",{fill:"#fff",d:"M237.38 148.21a2.34 2.34 0 1 1 2.34-2.34 2.34 2.34 0 0 1-2.34 2.34m0-4.17a1.84 1.84 0 1 0 1.84 1.83 1.84 1.84 0 0 0-1.84-1.87Z"}),o.jsx("path",{fill:"#fff",d:"M237.06 147.86h.5v4.22h-.5z"})]}),o.jsxs("g",{id:"freepik--Character--inject-81",children:[o.jsx("path",{fill:"#ffbe9d",d:"m446.31 458.77-18.87-43.53-21.65 13.9 22.96 39.79 11.51-5.16z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m445.89 456.34.62 1.24s25.15-2.15 27.38 1.71L432.25 480l-6.33-14.14c7.62-.2 14.26-3.1 19.97-9.52"}),o.jsx("path",{fill:"#fff",d:"M432.34 468.21a1.89 1.89 0 0 0-.21 2.52 1.82 1.82 0 0 0 2.5.23 2 2 0 0 0 .21-2.67 1.9 1.9 0 0 0-2.63 0M432.25 480l-1.52-3.4 40.46-18.6s2.26-.11 2.7 1.3Z",opacity:"0.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M446.72 457.62c.09.21-.88.8-1.55 2s-.79 2.27-1 2.28-.51-1.31.33-2.69 2.17-1.8 2.22-1.59M452 457.25c.15.18-.56 1-.82 2.16s0 2.22-.22 2.31-.91-1-.55-2.49 1.47-2.17 1.59-1.98M457.07 461.24c-.17.14-1-.74-1-2.11s.7-2.29.87-2.16-.12 1-.08 2.14.4 2.01.21 2.13"}),o.jsx("path",{fill:"#ffbe9d",d:"m410.82 466.33.72-47.45-25.45 3.76 4.54 45.72 12.62.03z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m411.43 463.94.07 1.38s23.8 8.4 24.24 12.83l-46.48 1.74.05-15.49c7.03 2.94 14.28 3.03 22.12-.46"}),o.jsx("path",{fill:"#fff",d:"M394.2 469.17a1.91 1.91 0 0 0-1.23 2.22 1.83 1.83 0 0 0 2.19 1.24 2 2 0 0 0 1.29-2.36 1.89 1.89 0 0 0-2.42-1M389.26 479.89v-3.72l44.54-.31s2.11.82 1.93 2.29Z",opacity:"0.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M411.66 465.44c0 .23-1.13.38-2.22 1.15s-1.64 1.74-1.86 1.66.08-1.4 1.41-2.31 2.71-.71 2.67-.5M416.61 467.28c.06.21-.9.64-1.64 1.63s-.92 2-1.15 2-.41-1.28.52-2.5 2.26-1.35 2.27-1.13M419.6 473c-.2.05-.56-1.07 0-2.33s1.58-1.8 1.69-1.62-.53.88-1 1.92-.46 2.03-.69 2.03M392.51 272.89l-.95-37.36-36.36 1.91-1.2 4.42a200 200 0 0 0-4.76 20.8c-2.44 15.65-2.15 29.89 4 46.62S369 357.82 369 357.82l36.07 99.63 42-13.81Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m414.5 234.32 3.17 10.35c4.66 3 12.19 17.7 12.88 23.72s2 26.63.63 50.79c-1.17 19.87-11 136.17-11 136.17l-39.74 2.1 4.14-188.06 1.75-33.58Z"}),o.jsx("path",{fill:"#455a64",d:"M346.4 266.1a6.4 6.4 0 0 0 1.38.41 23 23 0 0 0 3.87.52 25.25 25.25 0 0 0 22.23-11 21.7 21.7 0 0 0 1.93-3.4 6 6 0 0 0 .51-1.34c-.1-.05-.85 1.87-2.76 4.52a26.07 26.07 0 0 1-21.89 10.85 52 52 0 0 1-5.27-.56M413 246.12a2.7 2.7 0 0 0 .23.87 19 19 0 0 0 .92 2.24 29 29 0 0 0 10.48 11.9 20 20 0 0 0 2.11 1.19 3 3 0 0 0 .83.34c.05-.09-1.06-.69-2.72-1.86a33.1 33.1 0 0 1-10.35-11.74c-.97-1.79-1.43-2.97-1.5-2.94M394.27 277.88s.1.25.27.77l.73 2.29c.64 2 1.57 5 2.76 8.81 2.38 7.68 5.82 18.76 10.07 32.45 8.62 27.36 19.57 65.47 34.25 106.72q2.52 7.41 5 14.63l.08.26-.25.08-42 13.79-.23.08-.08-.23-24.15-67-6.87-19.19c-.79-2.22-1.39-3.94-1.81-5.11q-.3-.86-.45-1.32l-.15-.45s.07.14.18.44.28.74.5 1.3l1.88 5.08c1.63 4.47 4 11 7 19.15l24.32 66.9-.3-.15 42-13.82-.17.33q-2.46-7.22-5-14.63c-14.68-41.26-25.57-79.38-34.1-106.77-4.18-13.72-7.56-24.82-9.91-32.5-1.15-3.84-2.05-6.81-2.66-8.85-.3-1-.53-1.77-.68-2.3s-.23-.76-.23-.76M430 169.45s-1.9-10.63-7.35-15.72-28.16-10.85-28.16-10.85.27 7.89-4.81 10c-5.38 2.25-10.76 1.49-15-3a21.74 21.74 0 0 1-5.17-9.89s-26.92 3.93-30.75 11.23-7.84 35-7.84 35l24.39 3.85-.79 47.38 64.1-3.37-3.62-44.21 17.58 1.57Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.17 191.4a5 5 0 0 0 0-1.06c0-.69-.06-1.68-.13-2.91-.13-2.44-.34-5.82-.62-9.55s-.55-7.11-.78-9.55c-.12-1.22-.22-2.21-.3-2.89a4 4 0 0 0-.19-1.05 3.7 3.7 0 0 0 0 1.06c0 .69.06 1.68.13 2.9.13 2.45.34 5.83.62 9.56s.55 7.11.78 9.55c.11 1.22.22 2.21.3 2.89a3.5 3.5 0 0 0 .19 1.05M419.86 168.77c-.15 0-1.4 4.83-2.8 10.87a112 112 0 0 0-2.26 11 111 111 0 0 0 2.8-10.87 112 112 0 0 0 2.26-11M341.34 149.42c0 .1 1.16.25 3 .83a21.3 21.3 0 0 1 6.46 3.42 21.6 21.6 0 0 1 4.89 5.44c1 1.61 1.42 2.71 1.52 2.67a2.7 2.7 0 0 0-.23-.8 14 14 0 0 0-.95-2.07 19.2 19.2 0 0 0-11.58-9 13 13 0 0 0-2.23-.43 2.4 2.4 0 0 0-.88-.06M423.16 155.87a11.2 11.2 0 0 0-1 3.39 11.2 11.2 0 0 0-.41 3.49 11.4 11.4 0 0 0 .95-3.38 11.3 11.3 0 0 0 .46-3.5"}),o.jsx("path",{fill:"#ffbe9d",d:"M335.24 186.93s9.16 36.31 10.15 39.41 2.77 11.48 11.61 12.76c11.94 1.74 58.24-2.35 58.24-2.35l-9.33-10.62-41.19-9.24-7-26.4Z"}),o.jsx("path",{fill:"#eb996e",d:"M406.35 219.9a2.3 2.3 0 0 0-.3.87 11.6 11.6 0 0 0-.34 2.47 14.1 14.1 0 0 0 2.08 7.9 16.2 16.2 0 0 0 2.85 3.54 9 9 0 0 0 3.2 1.9 8.8 8.8 0 0 0 2.47.42 2.3 2.3 0 0 0 .91-.08 18 18 0 0 1-3.24-.71 9 9 0 0 1-3-1.91 17.4 17.4 0 0 1-2.72-3.45 14.86 14.86 0 0 1-2.16-7.61c-.01-2.06.35-3.32.25-3.34"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M359.88 182.57a5.2 5.2 0 0 1-1.1-.11l-3-.43c-2.5-.36-6-.77-9.79-1.27a98 98 0 0 1-9.75-1.69c-1.23-.3-2.22-.57-2.89-.79a4.7 4.7 0 0 1-1-.38c0-.09 1.54.31 4 .8s5.92 1 9.74 1.53 7.29 1 9.78 1.42c1.25.23 2.25.44 2.94.61a3.9 3.9 0 0 1 1.07.31M358 170.48a3.7 3.7 0 0 1-.94.05c-.61 0-1.49 0-2.58-.08-2.17-.11-5.17-.35-8.47-.76s-6.27-.92-8.4-1.35a61 61 0 0 1-2.52-.56 2.8 2.8 0 0 1-.9-.28 25 25 0 0 1 3.49.47c2.14.33 5.11.78 8.39 1.19s6.27.71 8.44.91a24 24 0 0 1 3.49.41M355.91 161.28a12.5 12.5 0 0 1-2.85 0 58.8 58.8 0 0 1-13.49-2.53 13.3 13.3 0 0 1-2.67-1 17 17 0 0 1 2.77.65c1.69.44 4.05 1 6.67 1.5s5 .81 6.76 1a18 18 0 0 1 2.81.38M373 148.17a20 20 0 0 1-3.22 1c-2 .52-4.79 1.16-7.88 1.78s-5.92 1.09-8 1.39a19 19 0 0 1-3.34.35 23 23 0 0 1 3.27-.72l7.92-1.54 7.91-1.63a21.7 21.7 0 0 1 3.34-.63M422.69 159a5.6 5.6 0 0 1-1.14-.4l-3.06-1.26c-2.57-1.06-6.13-2.53-10.09-4.08s-7.57-2.88-10.19-3.84l-3.09-1.14a5 5 0 0 1-1.12-.49 5.6 5.6 0 0 1 1.18.29c.76.21 1.83.55 3.16 1 2.65.87 6.29 2.15 10.26 3.7s7.51 3.07 10 4.23c1.27.58 2.29 1.06 3 1.41a5.3 5.3 0 0 1 1.09.58M419.86 168.32a3 3 0 0 1-.62-.07l-1.78-.28-6.5-1.14c-5.49-1-13.08-2.29-21.52-3.31-4.22-.49-8.25-.84-11.93-1.06s-7-.27-9.77-.22c-1.39 0-2.65.06-3.76.09s-2.05.07-2.83.13l-1.79.09a2.8 2.8 0 0 1-.63 0 2.8 2.8 0 0 1 .62-.1l1.78-.19c.78-.09 1.73-.17 2.84-.22s2.37-.16 3.76-.17c2.79-.09 6.12-.05 9.81.11s7.73.53 12 1c8.45 1 16 2.41 21.52 3.47 2.73.53 5 1 6.47 1.3l1.76.39a2.4 2.4 0 0 1 .57.18M394 184.66a7.5 7.5 0 0 1-1.37 0c-.89-.05-2.16-.16-3.74-.32-3.14-.33-7.48-.9-12.23-1.77s-9-1.86-12.07-2.66c-1.53-.41-2.76-.75-3.6-1a7.6 7.6 0 0 1-1.3-.45 6 6 0 0 1 1.35.25l3.64.85c3.08.71 7.34 1.64 12.08 2.51s9.05 1.49 12.18 1.91l3.71.5a6.4 6.4 0 0 1 1.35.18M415.75 185a99 99 0 0 1-10.17.36 101 101 0 0 1-10.16-.17 95 95 0 0 1 10.16-.36 94 94 0 0 1 10.17.17M387.18 199.36a4 4 0 0 1-1.11-.05c-.7-.06-1.73-.19-3-.37-2.52-.36-6-1-9.77-1.85s-7.16-1.88-9.57-2.67c-1.21-.4-2.18-.74-2.85-1a4.8 4.8 0 0 1-1-.44 4 4 0 0 1 1.08.24l2.89.84c2.43.7 5.81 1.62 9.58 2.51s7.21 1.55 9.71 2l3 .54a4.4 4.4 0 0 1 1.04.25M410.73 200.4a16 16 0 0 1-3.22 0c-2-.07-4.73-.27-7.74-.66s-5.72-.9-7.66-1.33a16.2 16.2 0 0 1-3.1-.86 21 21 0 0 1 3.18.49c1.95.34 4.65.78 7.65 1.17s5.72.65 7.69.82a23 23 0 0 1 3.2.37M405.82 213.46a1.3 1.3 0 0 1-.41.17c-.27.08-.67.22-1.2.36a39 39 0 0 1-4.5.93 58.5 58.5 0 0 1-15.13.13 117 117 0 0 1-14.89-2.79c-1.88-.46-3.39-.86-4.44-1.15a9 9 0 0 1-1.61-.5 12 12 0 0 1 1.66.3l4.48 1a144 144 0 0 0 14.85 2.63 64 64 0 0 0 15 0c1.91-.24 3.45-.53 4.51-.76a12 12 0 0 1 1.68-.32M428.93 175.93a32 32 0 0 1-5.07.41 19.8 19.8 0 0 1-5.1-.12 32 32 0 0 1 5.07-.41 19.8 19.8 0 0 1 5.1.12M427.58 163.75a14.3 14.3 0 0 1-5.53-.36 14.9 14.9 0 0 1 5.53.36"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M385.24 200.23c-.05-.09 1.05-.64 2.55-1.88a18.3 18.3 0 0 0 2.38-2.42 18.3 18.3 0 0 0 3.59-7.43 18 18 0 0 0 .41-3.38c.05-1.94-.21-3.14-.11-3.16a2.7 2.7 0 0 1 .24.83 7 7 0 0 1 .16 1 13 13 0 0 1 .09 1.33 16 16 0 0 1-.31 3.48 17.3 17.3 0 0 1-3.69 7.64 16 16 0 0 1-2.53 2.41 11 11 0 0 1-1.1.76 7 7 0 0 1-.88.49 2.6 2.6 0 0 1-.8.33"}),o.jsx("path",{d:"m393.81 190.49-3.89 5.78a18.45 18.45 0 0 1-10.42 6.49 10.89 10.89 0 0 0 14.31-12.27",opacity:"0.3"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M405.34 130.24a19.3 19.3 0 0 0 10.73-2.18c-4.84-3-7.89-8.26-9.37-13.75s-3.38-14.85-3.43-20.53l-8.86 39.37a23.77 23.77 0 0 0 14-1.09 3.86 3.86 0 0 1-3.07-1.82M380.06 135a27.7 27.7 0 0 1-2.14-14.07l-17.86-6.77a31.44 31.44 0 0 1-5.7 13.42c-1.09 1.48-2.39 3.2-1.88 5a3.76 3.76 0 0 0 2.77 2.37 11.3 11.3 0 0 0 3.8 0l-2.28 2.49a137 137 0 0 1 23.29-2.44"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M381.57 76.16c-5.63-.58-10.39 1.89-14.88 5.33a28 28 0 0 0-9.42 13.82 27.75 27.75 0 0 0 .12 17.58 22.13 22.13 0 0 0 11.77 12.82c7.48 3.2 16.67 1.31 22.83-4s9.33-13.67 9.11-21.82a26.87 26.87 0 0 0-5.29-15.68 20.5 20.5 0 0 0-14.24-8"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M367 96.14c.67-2.18.2-4.54.37-6.82.39-5 4.14-9.27 8.64-11.51 4.2-2.09 9.49-2 14.79-.7a19.8 19.8 0 0 1 9.68 5.44 15.62 15.62 0 0 1 3.79 13.84l-25.69-2a28.3 28.3 0 0 1-7.38 5.58 5.25 5.25 0 0 1-2.62.6 2.39 2.39 0 0 1-2.12-1.57c-.3-.92.21-1.91.54-2.86"}),o.jsx("path",{fill:"#ffbe9d",d:"m391.78 84.1-21.91 6.16a4.16 4.16 0 0 0-3.61 4.31l3.42 48.07a15 15 0 0 0 3.72 8.86l2.3 2.59c5.24 5.92 15 4.65 18.22-2.56a5.3 5.3 0 0 0 .42-1.29 8 8 0 0 0 .14-1.1 35 35 0 0 0-.09-7.31c-.06-4.29-.11-6.05-.11-6s9-1.75 10.58-13.61c.78-5.91.23-15.53-.48-23.4-.63-7.08-5.56-15.66-12.6-14.72"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M400.17 106.38a1.53 1.53 0 0 1-1.43 1.57 1.44 1.44 0 0 1-1.59-1.32 1.51 1.51 0 0 1 1.41-1.57 1.45 1.45 0 0 1 1.61 1.32M402.43 103.88c-.19.2-1.36-.62-3-.57s-2.8.9-3 .7.09-.45.6-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.39.7c.54.37.72.72.63.81M384.73 107.19a1.52 1.52 0 0 1-1.42 1.57 1.45 1.45 0 0 1-1.6-1.32 1.52 1.52 0 0 1 1.42-1.57 1.45 1.45 0 0 1 1.6 1.32M386.4 104.61c-.18.2-1.35-.61-3-.57s-2.8.9-3 .7.09-.44.61-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.38.7c.54.37.72.72.63.81M392.64 116.55a10.7 10.7 0 0 1 2.64-.55c.42 0 .81-.15.87-.43a2.16 2.16 0 0 0-.31-1.23l-1.32-3.14c-1.83-4.47-3.16-8.15-3-8.22s1.81 3.49 3.64 8l1.26 3.16a2.4 2.4 0 0 1 .26 1.63 1 1 0 0 1-.67.63 2.7 2.7 0 0 1-.7.11 10.6 10.6 0 0 1-2.67.04"}),o.jsx("path",{fill:"#eb996e",d:"M394.28 135.82a30.1 30.1 0 0 1-15.93-3.8s4.19 8.07 16 6.65ZM392.06 120.5a2.93 2.93 0 0 0-2.66-1 2.64 2.64 0 0 0-1.83 1 1.72 1.72 0 0 0-.08 2 2 2 0 0 0 2.15.48 6.1 6.1 0 0 0 2.06-1.3 2.1 2.1 0 0 0 .45-.49.56.56 0 0 0 0-.61"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M387.88 117.8c.26 0 .31 1.75 1.86 3s3.43 1 3.45 1.22-.41.35-1.21.39a4.42 4.42 0 0 1-2.88-.91 3.82 3.82 0 0 1-1.44-2.49c-.09-.77.09-1.21.22-1.21M386.55 99.67c-.15.45-1.79.28-3.69.57s-3.44.84-3.71.45c-.12-.19.14-.61.75-1.06a6.34 6.34 0 0 1 2.73-1 6.2 6.2 0 0 1 2.91.27c.71.22 1.07.56 1.01.77M401.76 96.76c-.27.38-1.41 0-2.76 0s-2.49.32-2.76-.06c-.12-.19.05-.56.54-.93a4 4 0 0 1 4.45 0c.49.43.66.81.53.99"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M362.67 93c1.86-6.92 11.31-16.79 18.47-16.62l11.71 6.32a11 11 0 0 1-7.08 8.75c-2 .71-4.4 1-5.52 2.77s-.31 4.37-1.37 6.25c-1.46 2.6-5.78 2.68-6.84 5.47-.47 1.21-.13 2.63-.62 3.84-.64 1.61-4.55 3.8-6.23 3.35s-1.81-3.27-2.42-4.72a7.82 7.82 0 0 1-.48-5.23c.57-3.38-.51-6.9.38-10.18"}),o.jsx("path",{fill:"#ffbe9d",d:"M370.14 114.28c0-.88-1.1-2.93-2-3-2.33-.3-6.5 0-6.39 5.89.17 8.06 8.22 6.24 8.23 6s.24-5.85.16-8.89"}),o.jsx("path",{fill:"#eb996e",d:"M367.48 120.13s-.14.1-.37.22a1.4 1.4 0 0 1-1.05 0c-.86-.29-1.6-1.63-1.67-3.08a4.5 4.5 0 0 1 .35-2 1.6 1.6 0 0 1 1-1.1.71.71 0 0 1 .84.37c.11.22.07.38.11.4s.17-.14.1-.47a.93.93 0 0 0-.33-.5 1 1 0 0 0-.78-.19 2 2 0 0 0-1.44 1.28 4.7 4.7 0 0 0-.44 2.25c.08 1.63.94 3.13 2.11 3.44a1.48 1.48 0 0 0 1.28-.24c.28-.18.32-.36.29-.38"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.81 91c-.14-2.52-3.38-4-5.87-4.37a10.5 10.5 0 0 0-7.15 1.86c-1.24.79-2.48 1.88-2.67 3.34s1.31 3.09 2.65 2.48a4.78 4.78 0 1 0 5.15 7.85 10.68 10.68 0 0 1-3.81 6A12 12 0 0 0 360.81 91M346.78 125.52c0-.38 1.05-.56 2.48-1a15 15 0 0 0 5.05-2.5 14.9 14.9 0 0 0 3.65-4.3c.77-1.29 1.18-2.22 1.56-2.16s.6 1.13.2 2.85a10.73 10.73 0 0 1-10.21 8c-1.77-.03-2.77-.54-2.73-.89"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M356.07 104.15a7.2 7.2 0 0 1-.46-2.39 17.8 17.8 0 0 1 3-11.22 7.2 7.2 0 0 1 1.59-1.85 26.7 26.7 0 0 0-3.53 7.31 27 27 0 0 0-.6 8.15M390.36 80.4c.95 3.22 6.2 7.09 8.55 9.5 4.48 4.58 5.41 6.14 6.08 17 1.72-3.88 3-7.66 2.55-11.88a17.62 17.62 0 0 0-5.4-11.22 13.71 13.71 0 0 0-11.78-3.41"}),o.jsx("path",{fill:"#ffbe9d",d:"M442.9 174.43s-5.38 22.36-7.59 32C433 216.7 427.86 240 414.22 236.6c-10.38-2.56-8.07-16-8.07-16l8.85-30.73 8.2.93 7.53-18.54 8.12-8.55Z"}),o.jsx("path",{fill:"#eb996e",d:"M409.77 221.4a11.5 11.5 0 0 1-.27-5 15.7 15.7 0 0 1 1.92-5.06 44 44 0 0 1 4-5.42 43 43 0 0 0 4-5.51 33.5 33.5 0 0 0 2.42-5 31 31 0 0 0 1.12-3.57 6 6 0 0 0 .25-1.35 8.6 8.6 0 0 0-.46 1.29c-.27.83-.67 2-1.28 3.48a37 37 0 0 1-2.49 4.89 47 47 0 0 1-4 5.42 41 41 0 0 0-4 5.52 15.3 15.3 0 0 0-1.87 5.25 9.7 9.7 0 0 0 .16 3.76 6.6 6.6 0 0 0 .33 1c.09.2.15.31.17.3"}),o.jsx("path",{fill:"#ffbe9d",d:"M430.1 174c0-.4.2-6.91.33-8.61a8.8 8.8 0 0 1 .89-3.09 2.62 2.62 0 0 1 4.08-.72l.15.13a11.5 11.5 0 0 1 3.21-3.87c1.91-1.25 3.48-2.1 5.12-1.12a2.85 2.85 0 0 1 1.58 2.37s2.43-.33 3.48.65 0 3.94 0 3.94 2.16-.66 2.69.92a4.4 4.4 0 0 1-.46 3.22s1.7.52 1.9 1.77-1.7 2.62-1.7 2.62l-5.93 4.72a11.3 11.3 0 0 1-4.57 6c-4.12 1.58-10.77-8.93-10.77-8.93"}),o.jsx("path",{fill:"#eb996e",d:"M434.62 166.91c.06 0 .05.25-.13.55a2 2 0 0 1-1 .88 2.14 2.14 0 0 1-1.36 0c-.33-.11-.49-.27-.46-.34s.81.11 1.63-.21 1.18-.95 1.32-.88M439.32 161.09c-.09.12-.66-.28-.76-1.06s.33-1.31.45-1.22 0 .57.08 1.15.34 1.04.23 1.13M449.23 163.62s-.42.61-1.31 1.38a39 39 0 0 1-3.69 2.7 5.7 5.7 0 0 1-2.36 1.1 2.13 2.13 0 0 1-2-.75 1.48 1.48 0 0 1-.16-1.46c.16-.32.36-.4.38-.37s-.11.16-.19.45a1.36 1.36 0 0 0 .27 1.16 1.8 1.8 0 0 0 1.67.48 5.6 5.6 0 0 0 2.13-1.05c1.49-1 2.82-1.87 3.75-2.56a9.6 9.6 0 0 1 1.51-1.08M451.13 167.79a38 38 0 0 1-5.65 2.88 5.8 5.8 0 0 1-2.45.72 1.93 1.93 0 0 1-1.84-1.1 1.12 1.12 0 0 1 0-.88 1.05 1.05 0 0 1 .43-.49c.33-.18.54-.08.53-.06s-.19 0-.41.23a.85.85 0 0 0-.19 1 1.54 1.54 0 0 0 1.49.75 5.75 5.75 0 0 0 2.23-.71 39 39 0 0 1 5.86-2.34M448.25 173.12c0 .06-.32.31-1 .47a4.6 4.6 0 0 1-1.18.12 3.16 3.16 0 0 1-1.47-.33.9.9 0 0 1-.43-.85 1.4 1.4 0 0 1 .32-.73 5 5 0 0 1 .85-.83c.54-.4.94-.53 1-.47s-.28.31-.72.76a6 6 0 0 0-.7.83c-.23.33-.31.67 0 .84a3.2 3.2 0 0 0 1.21.29 5.6 5.6 0 0 0 1.09 0c.62-.06 1-.17 1.03-.1"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),o.jsx("path",{fill:"none",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.91 170.39s-.12 0-.33.06a1.4 1.4 0 0 0-.76.48 1.34 1.34 0 1 0 2.18.07 1.4 1.4 0 0 0-.72-.54c-.2-.06-.33-.06-.33-.08h.05a1 1 0 0 1 .26 0 1.38 1.38 0 0 1 .77.53 1.43 1.43 0 0 1 .17 1.37 1.4 1.4 0 0 1-.53.65 1.43 1.43 0 0 1-.86.25 1.47 1.47 0 0 1-.85-.31 1.5 1.5 0 0 1-.48-.7 1.47 1.47 0 0 1 .27-1.35 1.43 1.43 0 0 1 .82-.47 1.3 1.3 0 0 1 .25 0Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11v.39a5 5 0 0 1-.24 1.08 4.8 4.8 0 0 1-.9 1.54 4.8 4.8 0 0 1-2 1.38c-.1 2.59-.22 6-.36 10l-2 1.2-1-1.14v-.85l.84-.47v.1l-.81-.61c0-.45 0-1 .05-1.45l1.39-.77v.1l-1.32-1V183c0-.42 0-.83.05-1.24l1.39-.78v.1l-1.32-1c0-.46 0-.91.05-1.35v.06a5 5 0 0 1-2-1.12 4.5 4.5 0 0 1-.73-.85 4.85 4.85 0 0 1-.29-5 4.86 4.86 0 0 1 8.05-.89 4.7 4.7 0 0 1 .93 1.71l.06.18v.18c0 .12.05.22.06.33s.05.37.05.51v.16a.4.4 0 0 1 0 .1v-.42c0-.14 0-.31-.06-.51a2 2 0 0 0-.07-.32v-.18l-.06-.18a4.6 4.6 0 0 0-.93-1.68 4.9 4.9 0 0 0-2.11-1.44 4.8 4.8 0 0 0-6 6.29 4.6 4.6 0 0 0 .5 1 4.4 4.4 0 0 0 .72.83 4.76 4.76 0 0 0 1.95 1.09h.05c0 .45 0 .9-.05 1.35l1.33 1h.07l-.08.05-1.39.77v-.05 1.69l1.32 1 .07.06h-.08l-1.39.78c0 .5 0 1-.05 1.45l.81.6.07.06h-.08l-.84.48v.84l1 1.14h-.07l2-1.19v.05c.16-4 .29-7.44.39-10a4.8 4.8 0 0 0 1.94-1.34 5 5 0 0 0 .9-1.52 5.2 5.2 0 0 0 .26-1.08v-.28a.7.7 0 0 0-.07-.33"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),o.jsx("path",{fill:"none",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.41 170.12a3 3 0 0 0-.34 0 1.37 1.37 0 0 0-.75.48 1.33 1.33 0 0 0-.23 1.26 1.35 1.35 0 0 0 1.22.93 1.37 1.37 0 0 0 1.28-.83 1.35 1.35 0 0 0-.85-1.81 3 3 0 0 0-.33-.08h.09a1 1 0 0 1 .25 0 1.36 1.36 0 0 1 .78.53 1.44 1.44 0 0 1-.36 2 1.44 1.44 0 0 1-.87.25 1.47 1.47 0 0 1-.84-.32 1.36 1.36 0 0 1-.46-.53 1.43 1.43 0 0 1 1.08-1.83.8.8 0 0 1 .26 0Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84v.38a5 5 0 0 1-.24 1.09 5.2 5.2 0 0 1-.9 1.54 5 5 0 0 1-2 1.38l-.35 10-2 1.19-1-1.14v-.84l.84-.48v.1l-.8-.6c0-.46 0-.95.05-1.45l1.39-.78v.1l-1.32-1v-.45c0-.41 0-.83.05-1.24l1.39-.77v.1l-1.32-1c0-.45 0-.9.05-1.35v.06a4.76 4.76 0 0 1-2-1.12 4.6 4.6 0 0 1-.74-.85 4.7 4.7 0 0 1-.51-1 4.9 4.9 0 0 1 3-6.41 5 5 0 0 1 3.16 0 4.94 4.94 0 0 1 2.13 1.2 4.9 4.9 0 0 1 .93 1.71l.06.19v.18c0 .11.05.22.06.32s.05.38.05.51v.43a1 1 0 0 0 0-.11v-.31c0-.14 0-.31-.05-.52s-.05-.2-.07-.32v-.17l-.06-.19a4.8 4.8 0 0 0-.94-1.68 4.73 4.73 0 0 0-2.11-1.43 4.83 4.83 0 0 0-3.1 0 4.9 4.9 0 0 0-2.7 2.33 4.83 4.83 0 0 0-.22 3.95 5.2 5.2 0 0 0 .51 1 4.3 4.3 0 0 0 .72.83 4.8 4.8 0 0 0 1.95 1.09H436v1.4-.05c.44.32.88.66 1.32 1l.08.06h-.08l-1.39.78v-.05c0 .41 0 .82-.05 1.24v.44l1.32 1h.08l-.08.05-1.39.77c0 .5 0 1-.06 1.45l.81.61.07.05h-.08l-.85.47v.84l1 1.15h-.07l2-1.19v.05c.15-4 .29-7.44.39-10a5 5 0 0 0 1.95-1.35 5.2 5.2 0 0 0 .9-1.52 5 5 0 0 0 .26-1.07v-.29a.31.31 0 0 1-.01-.31"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M441.54 173.88a6.6 6.6 0 0 0-.12-1 3.9 3.9 0 0 0-.43-1.14 4.2 4.2 0 0 0-1-1.24 4.17 4.17 0 0 0-4-.74 4 4 0 0 0-1.09.53 4.4 4.4 0 0 0-.49.39 5 5 0 0 0-.43.47 4.2 4.2 0 0 0-.19 5 6 6 0 0 0 .4.51 5 5 0 0 0 .46.42 3.8 3.8 0 0 0 1 .61 4.27 4.27 0 0 0 2.21.27 4.1 4.1 0 0 0 1.8-.71 4.4 4.4 0 0 0 1.13-1.16 4.3 4.3 0 0 0 .51-1.11 6.6 6.6 0 0 0 .2-1v.61c0 .13-.05.27-.1.44a3.9 3.9 0 0 1-.51 1.13 4.3 4.3 0 0 1-1.13 1.19 4.2 4.2 0 0 1-1.84.74 4.36 4.36 0 0 1-2.26-.26 4 4 0 0 1-1.07-.63 6 6 0 0 1-.48-.43 4 4 0 0 1-.4-.52 4.29 4.29 0 0 1 .19-5.11 5 5 0 0 1 .44-.49 5 5 0 0 1 .51-.39 4.22 4.22 0 0 1 3.39-.64 4.14 4.14 0 0 1 1.78.88 4.3 4.3 0 0 1 1 1.27 4.4 4.4 0 0 1 .42 1.16 3 3 0 0 1 .06.45 2 2 0 0 1 0 .33v.27Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M439 171.58a4 4 0 0 0-.06-.39 1.52 1.52 0 0 0-.56-.89 1.6 1.6 0 0 0-.66-.32 1.6 1.6 0 0 0-.83.05 1.47 1.47 0 0 0-.75.52 1.53 1.53 0 0 0-.33.91 1.56 1.56 0 0 0 1 1.52 1.63 1.63 0 0 0 1.51-.16 1.6 1.6 0 0 0 .62-.85 3 3 0 0 0 .09-.39s0 0 0 .11a1.5 1.5 0 0 1-.05.3 1.63 1.63 0 0 1-.62.9 1.66 1.66 0 0 1-.72.29 1.67 1.67 0 0 1-1.64-.71 1.67 1.67 0 0 1-.3-1 1.72 1.72 0 0 1 .37-1 1.64 1.64 0 0 1 .81-.55 1.6 1.6 0 0 1 .89 0 1.7 1.7 0 0 1 .69.34 1.6 1.6 0 0 1 .55 1 1.1 1.1 0 0 1 0 .3c-.01-.01-.01.02-.01.02M438 188.45s0-2.29.13-5.1.22-5.1.25-5.1 0 2.28-.13 5.1-.25 5.1-.25 5.1"}),o.jsx("path",{fill:"#e0e0e0",d:"M437.83 170.6a.74.74 0 0 1-.65 0v-6.15l.65.05Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.5 170.7a.8.8 0 0 1-.33-.08v-6.19l.7.05v6.14a.8.8 0 0 1-.37.08m-.29-.12a.68.68 0 0 0 .59 0v-6.06h-.6Z"}),o.jsx("path",{fill:"#ffbe9d",d:"M435 161.43a14.5 14.5 0 0 0 1.73 1.27 2.34 2.34 0 0 1 1.06 1.79 2.19 2.19 0 0 1-1.28 1.69 4 4 0 0 1-5.42-1.63"}),o.jsx("path",{fill:"#eb996e",d:"M431.13 164.55a11 11 0 0 0 1.36 1.22 3.9 3.9 0 0 0 1.8.6 4 4 0 0 0 2.24-.49 1.71 1.71 0 0 0 1-1.74 2.83 2.83 0 0 0-1.11-1.45c-.95-.64-1.48-1.2-1.4-1.26s.59.37 1.61.95A3 3 0 0 1 438 164a1.82 1.82 0 0 1-.21 1.34 2.9 2.9 0 0 1-1 1 4.27 4.27 0 0 1-2.56.52 4.07 4.07 0 0 1-2-.78c-.93-.75-1.15-1.52-1.1-1.53"}),o.jsx("path",{fill:"#ffbe9d",d:"M441.16 158.88a23.7 23.7 0 0 0-3 4.4 3.64 3.64 0 0 0-.45 1.57 1.58 1.58 0 0 0 .73 1.4 1.6 1.6 0 0 0 1.37 0 4.3 4.3 0 0 0 1.14-.81 28 28 0 0 0 3.72-4.14 3.9 3.9 0 0 0 .66-1.17 1.6 1.6 0 0 0-.08-1.31"}),o.jsx("path",{fill:"#eb996e",d:"M445.26 158.81s.25.2.28.74a3.2 3.2 0 0 1-.82 2 22 22 0 0 1-2 2.46c-.4.44-.84.89-1.31 1.33a5 5 0 0 1-1.7 1.22 1.9 1.9 0 0 1-1.15 0 1.53 1.53 0 0 1-.88-.75 2.45 2.45 0 0 1 0-2 12.8 12.8 0 0 1 1.6-2.77 11.5 11.5 0 0 1 1.9-2.19 23 23 0 0 1-1.59 2.41 13.7 13.7 0 0 0-1.44 2.71 1.92 1.92 0 0 0 0 1.59 1.11 1.11 0 0 0 1.41.46 4.7 4.7 0 0 0 1.5-1.09c.47-.43.91-.86 1.31-1.28.81-.85 1.49-1.65 2-2.35a3.4 3.4 0 0 0 .92-1.78 4 4 0 0 0-.03-.71"})]}),o.jsx("path",{id:"freepik--Floor--inject-81",fill:"var(--LoginSVG-fill)",d:"M461 480.17c0 .15-97.17.26-217 .26s-217-.11-217-.26 97.15-.26 217-.26 217 .09 217 .26"})]}),T9=(e=0)=>e>=1e6?(e/1e6).toFixed(1).replace(".0","")+"M":e>=1e3?(e/1e3).toFixed(1).replace(".0","")+"k":String(e),L9=b.div`
    width: 100%;
    margin-top: 28px;
    padding-top: 10px;
`,P9=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 14px;
`,E9=b.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.15s;
    &:hover { opacity: 0.75; }
`,D9=b.div`
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
`,R9=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,O9=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,F9=b.span`
    font-size: 1em;
    font-weight: 700;
    color: var(--textColor);
    display: flex;
    align-items: center;
    gap: 6px;
`,z9=b.span`
    font-size: 0.78em;
    color: var(--textColor);
    opacity: 0.45;
`,B9=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`,U9=b.span`
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
`,H9=b.button`
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
`;b.div`
    display: flex;
    gap: 20px;
    margin-top: 16px;
    flex-wrap: wrap;
`;b.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.88em;
    color: var(--textColor);
    opacity: 0.45;
`;const $9=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
`,q9=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    border-radius: 12px;
`,V9=b.p`
    font-size: 1em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 15px 10px 6px 0;
    display: flex;
    align-items: center;
    gap: 6px;
`,dd=b.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`,Y9=b(Vo)`
    fill: var(--backgroundColor);
`,G9=b(Nc)`
    stroke: var(--textColor);
`,Fa=b.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border-radius: 10px;
    font-size: 0.86em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s ease;
    flex: 1;
    min-width: 100px;
    justify-content: center;
    border: none;
    background-color: var(--textColor);
    color: var(--backgroundColor);

    &:hover:not(:disabled) {
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    & svg {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`;b(W3)`
    font-size: 0.8em;
    color: var(--backgroundColor) !important;
    fill: red !important;
`;function W9({poster:e,onDeleted:t,onVisibilityChanged:r,onSave:n,isSavingPoster:a,isOwnerOrAdmin:s}){var se,fe;const{t:l,i18n:c}=Pt(),d=ln(),{user:f,isAuthenticated:p}=mi(),[v,S]=C.useState(e.favorited||!1),[m,w]=C.useState(e.favoritesCount||0),[M,j]=C.useState(!1),[A,L]=C.useState(e.visibility||"public"),[E,D]=C.useState(!1),[q,V]=C.useState(!1),[K,X]=C.useState(!1),I=e.authorId,Z=p&&(f==null?void 0:f.id)===((se=I==null?void 0:I._id)==null?void 0:se.toString()),_=p&&((fe=f==null?void 0:f.permissions)==null?void 0:fe.includes("admin")),P=async()=>{if(!p||M)return;j(!0);const ne=v,ge=m;S(!ne),w(ne?ge-1:ge+1);try{await rt.toggleFavorite(e._id)}catch{S(ne),w(ge)}finally{j(!1)}},F=async()=>{if(E)return;D(!0);const ne=A==="public"?"private":"public";try{await rt.updatePosterVisibility(e._id,ne),L(ne),r==null||r(e._id,ne)}catch(ge){console.error("Failed to update visibility",ge)}finally{D(!1)}},$=async()=>{if(!K){X(!0);try{await rt.deletePoster(e._id),V(!1),t==null||t(e._id)}catch(ne){console.error("Failed to delete poster",ne)}finally{X(!1)}}},re=e.createdAt?new Date(e.createdAt).toLocaleDateString(c.language,{year:"numeric",month:"short",day:"numeric"}):null;return o.jsxs(o.Fragment,{children:[q&&o.jsx(zs,{title:l("DASH_ConfirmDeleteTitle"),paragraph:l("DASH_ConfirmDelete"),confirmText:l("DASH_Delete"),cancelText:l("GoBack"),onConfirm:$,onCancel:()=>V(!1),canClose:!0,isClosing:!1}),o.jsxs(L9,{children:[o.jsxs(P9,{children:[o.jsxs(E9,{onClick:()=>(I==null?void 0:I.username)&&d(`/u/${I.username}`),children:[o.jsx(D9,{children:I!=null&&I.avatar?o.jsx(R9,{src:I.avatar,alt:I.name}):((I==null?void 0:I.name)||"?").charAt(0).toUpperCase()}),o.jsxs(O9,{children:[o.jsxs(F9,{children:[(I==null?void 0:I.name)||(I==null?void 0:I.username)||"Unknown",(I==null?void 0:I.badge)&&o.jsx(Is,{badge:I.badge,size:18})]}),re&&o.jsxs(z9,{children:[l("POSTER_INFO_PublishedAt")," ",re]})]})]}),o.jsxs(B9,{children:[o.jsx(U9,{children:A==="public"?o.jsxs(o.Fragment,{children:[o.jsx(yh,{})," ",l("DASH_Public")]}):o.jsxs(o.Fragment,{children:[o.jsx(Ic,{})," ",l("DASH_Private")]})}),o.jsxs(H9,{$active:v,onClick:P,disabled:!p||M,children:[v?o.jsx(Y9,{}):o.jsx(G9,{}),T9(m)]})]})]}),Z&&o.jsx($9,{children:o.jsxs(dd,{children:[s&&n&&o.jsx(Fa,{onClick:n,disabled:a,children:a?"…":l("EDITOR_SaveButton")}),o.jsx(Fa,{onClick:F,disabled:E,children:A==="public"?o.jsx(o.Fragment,{children:l("DASH_MakePrivate")}):o.jsx(o.Fragment,{children:l("DASH_MakePublic")})}),o.jsx(Fa,{onClick:()=>V(!0),children:l("DASH_Delete")})]})}),_&&!Z&&o.jsxs(q9,{children:[o.jsx(V9,{children:l("POSTER_INFO_AdminControls")}),o.jsxs(dd,{children:[s&&n&&o.jsx(Fa,{onClick:n,disabled:a,children:a?"…":l("EDITOR_SaveButton")}),o.jsx(Fa,{onClick:F,disabled:E,children:A==="public"?o.jsxs(o.Fragment,{children:[" ",l("DASH_MakePrivate")]}):o.jsx(o.Fragment,{children:l("DASH_MakePublic")})}),o.jsx(Fa,{onClick:()=>V(!0),children:l("DASH_Delete")})]})]})]})]})}const hd=new Set(["Release date","Lançamento","Fecha de lanzamiento","发布日期"]),fd=new Set(["Runtime","Duração","Duración","时长"]),X9={en:"en-US",pt:"pt-BR",es:"es-ES",zh:"zh-CN"},Z9={day:"numeric",month:"short",year:"numeric"};function $f(e){if(!e)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(e)){const[r,n,a]=e.split("-").map(Number);return new Date(r,n-1,a)}const t=new Date(e);return!isNaN(t.getTime())&&t.getFullYear()>=1900&&t.getFullYear()<=2100?t:null}function lc(e,t){const r=$f(e);if(!r)return e;const n=X9[t]||"en-US";return new Intl.DateTimeFormat(n,Z9).format(r)}const J9=b.div`
    width: 80%;
    margin-inline: auto;
`,Q9=b.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,K9=b(vh)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,ew=b.h3`
    font-size: 1.3em;
    font-weight: bold;
`,tw=b.div`
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
`,rw=Rt`
    0% {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,nw=Rt`
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
`,iw=b.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    animation: ${e=>e.visible?Ja`${rw} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`:Ja`${nw} 0.3s cubic-bezier(0.4, 0, 1, 1) forwards`};
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
`,ow=b.div`
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
`,aw=Rt`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.08;
    }
    100% {
        opacity: 0;
    }
`,sw=b.div`
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
    animation: ${e=>e.visible?Ja`${aw} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"};
    opacity: 0;
`,lw=b(n1)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?Rt`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,cw=b.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,uw=b.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    width: 90%;
    margin-inline: auto;
    position: relative;
`,dw=b.div`
    position: absolute;
    bottom: -1px;
    height: 2px;
    background: var(--AccentColor);
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    left: ${e=>e.left||0}px;
    width: ${e=>e.width||0}px;
    border-radius: 5px;
`,Nl=b.div`
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    color: ${({$active:e})=>e?"var(--textColor)":"var(--textSecondary)"};
    cursor: pointer;
    transition: color 0.3s;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    position: relative;
    flex-shrink: 0;
    user-select: none;

    &:hover {
        color: var(--textColor);
    }
`,hw=b.div`
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
`,fw=b.div`
    padding: 2px 40px;
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
`,pw=b.div`
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
`,pd=b.button`
    background: var(--glassBackground);
    color: var(--textColor);
    border: none;
    padding: 8px 26px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    font-weight: bolder;
    
    &:hover {
        background: var(--borderColor);
    }
    
    &:active {
        transform: scale(0.95);
    }
`;b.textarea`
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
`;const mw=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-height: 490px;
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--borderColor);
        border-radius: 3px;

        &:hover {
            background: var(--textSecondary);
        }
    }

    @media (max-width: 530px) {
        gap: 6px;
        max-height: 400px;
    }
`,gw=b.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 2px;
    background: var(--glassBackground);
    border-radius: 6px;
    transition: background 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
    opacity: ${e=>e.isDragging?.5:1};
    transform: ${e=>e.isDragging?"scale(0.95)":"scale(1)"};
    
    &:hover {
        background: var(--borderColor);
    }

    ${e=>e.isDragOver&&Ja`
        background: var(--AccentColor);
        opacity: 0.7;
        border-radius: 8px;
    `}

    @media (max-width: 530px) {
        gap: 8px;
        padding: 8px 10px;
    }
`,md=b.div`
    font-weight: 700;
    font-size: 1.1em;
    color: var(--textColor);
    min-width: 35px;
    text-align: right;
    width: 15px;
    cursor: grab;
    user-select: none;
    transition: opacity 0.2s ease, color 0.2s ease;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        cursor: grabbing;
    }

    @media (max-width: 530px) {
        font-size: 0.95em;
        min-width: 30px;
    }
`,gd=b.input`
    flex: 1;
    background: transparent;
    border: none;
    color: var(--textColor);
    font-size: 0.95em;
    font-family: inherit;
    padding: 4px 6px;
    transition: background 0.2s ease;

    &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    &::placeholder {
        color: var(--textSecondary);
    }

    @media (max-width: 530px) {
        font-size: 0.85em;
    }
`,xd=b.input`
    font-size: 0.85em;
    color: var(--textSecondary);
    min-width: 45px;
    text-align: right;
    opacity: 0.7;
    font-weight: bolder;
    background: transparent;
    border: none;
    font-family: inherit;
    padding: 4px 6px;
    transition: background 0.2s ease;

    &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    &::placeholder {
        color: var(--textSecondary);
    }

    @media (max-width: 530px) {
        font-size: 0.75em;
        min-width: 38px;
    }
`,xw=b.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 2px;
    background: var(--glassBackground);
    border-radius: 6px;
    opacity: 0.45;
    transition: opacity 0.2s ease, background 0.2s ease;
    cursor: pointer;
    
    &:hover {
        opacity: 0.65;
        background: var(--borderColor);
    }

    input {
        cursor: pointer;
    }

    @media (max-width: 530px) {
        gap: 8px;
        padding: 8px 10px;
    }
`,vw=b.button`
    width: 28px;
    height: 28px;
    padding: 0;
    background: transparent;
    border: none;
    color: var(--textSecondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
    font-size: 1.5em;
    font-weight: bold;

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 530px) {
        width: 24px;
        height: 24px;
    }
`,bw=b.button`
    width: 28px;
    height: 28px;
    padding: 0;
    background: transparent;
    border: none;
    color: var(--textSecondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
    font-size: 1.2em;

    svg {
        width: 18px;
        height: 18px;
        color: var(--textSecondary);
        transition: color 0.2s ease;
    }

    &:hover svg {
        color: #ff4444;
    }

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 530px) {
        width: 24px;
        height: 24px;
    }
`,ww=b($8)`
    font-size: 5em;
    margin-right: 5px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
`,yw=b(H8)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`,_w=b(i6)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`,Cw=b(a6)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`,Sw=b(q8)`
    font-size: 1.05em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: 1px;
`;b.div`
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
`;b.div`
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
`;b.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`;b(Hm)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;b(j9)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;b(N9)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;b(H6)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Ja`
                  animation: ${Rt`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Ja`
                  animation: ${Rt`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`;const Aw=b.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`;b.p`
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
`;const kw=b(Nh)`
    font-size: 3em;
`,vd=b.div`
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
`,cc=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,uc=b.h3`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,bd=b.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
`,za=b.div`
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
`,Ba=b.div`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
`,dc=b.div`
    font-size: 0.75em;
    color: var(--textSecondary);
`,Mw=b.div`
    padding: 10px 10px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    gap: 12px;
`,jw=b.p`
    font-size: 0.9em;
    color: var(--textColor);
    margin: 0;
    line-height: 1.5;
`,wd=b.button`
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
`,Nw=b.div`
    background: rgba(231, 76, 60, 0.12);
    border: 1px solid rgba(231, 76, 60, 0.35);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.88em;
    color: #e74c3c;
    line-height: 1.5;
`,Iw=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,yd=b.button`
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
`,_d=b.div`
    font-size: 1.5em;
    color: ${({$selected:e})=>e?"var(--AccentColor)":"var(--textColor)"};
    display: flex;
    align-items: center;
    flex-shrink: 0;
`,Cd=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Sd=b.span`
    font-size: 1.4em;
    font-weight: 700;
    color: var(--textColor);
`,Ad=b.span`
    font-size: 1.1em;
    opacity: 0.65;
    color: var(--textColor);
`,Tw=b(B6)`
    font-size: 2em;
`,Lw=b(z6)`
    font-size: 2em;
`,Pw=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    padding: 1rem;
`,Ew=b.p`
    font-size: 1em;
    color: var(--textColor);
    margin-top: 15px;
    font-weight: bolder;
`,Dw=b.button`
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
`,A0=C.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:a,source:s,posterId:l,posterFullData:c,onPublishSuccess:d},f)=>{var Mo;const{t:p,i18n:v}=Pt(),S=ln(),{user:m,isAuthenticated:w}=mi(),M=C.useRef(null),j=C.useRef(null),A=C.useRef(null),[L,E]=C.useState(""),[D,q]=C.useState(""),[V,K]=C.useState(""),[X,I]=C.useState(""),[Z,_]=C.useState(""),[P,F]=C.useState("200"),[$,re]=C.useState("110"),[se,fe]=C.useState("50"),[ne,ge]=C.useState((n==null?void 0:n.marginTop)??""),[Me,we]=C.useState(160),[k,H]=C.useState((n==null?void 0:n.marginCover)??0),[J,te]=C.useState((n==null?void 0:n.marginBackground)??0),[oe,le]=C.useState((n==null?void 0:n.backgroundColor)??"#5900ff"),[pe,ve]=C.useState((n==null?void 0:n.textColor)??"#ff9100"),[ue,ke]=C.useState((n==null?void 0:n.color1)??"#ff0000"),[Te,Re]=C.useState((n==null?void 0:n.color2)??"#00ff40"),[de,U]=C.useState((n==null?void 0:n.color3)??"#2600ff"),[qe,Ye]=C.useState(!0),[De,_e]=C.useState((n==null?void 0:n.useFade)??!0),[Ue,Pe]=C.useState((n==null?void 0:n.showTracklist)??!1),[Ge,Fe]=C.useState((n==null?void 0:n.showArtistSignature)??!1),[wt,lt]=C.useState(""),[Qe,mt]=C.useState(""),[et,ze]=C.useState(""),[$e,We]=C.useState(null),[ct,St]=C.useState("information"),Ve=C.useRef({}),[ut,Mt]=C.useState({left:0,width:0}),[be,He]=C.useState("public"),[Be,gt]=C.useState(!1),[Ot,Et]=C.useState(""),[ht,jt]=C.useState(!1),[Bi,Sr]=C.useState(!1),[Jn,Jr]=C.useState("");function dt(Q){_n(!0),E(Q.albumName||""),q(Q.albumNameOriginal||Q.albumName||""),K(Q.artistsName||""),I(Q.artistsNameOriginal||Q.artistsName||""),_(Q.spotifyArtistId||""),F(Q.titleSize||"200"),re(Q.artistsSize||"110"),fe(Q.tracksSize||"50"),ge(Q.marginTop||""),we(Q.marginSide||160),H(Q.marginCover||0),te(Q.marginBackground||0),le(Q.backgroundColor||"#5900ff"),ve(Q.textColor||"#ff9100"),ke(Q.color1||"#ff0000"),Re(Q.color2||"#00ff40"),U(Q.color3||"#2600ff"),Q.coverZoom!==void 0?On(Q.coverZoom):Q.marginCover!==void 0?On(-Q.marginCover/11):On(0),yi(Q.coverHorizontalPosition||0),wo(Q.coverVerticalPosition||0),wa(Q.coverBlur||0),yo(Q.signatureHorizontalPosition||0),_a(Q.signatureVerticalPosition||0),_o(Q.signatureScale||1),Ye(Q.useWatermark!==void 0?Q.useWatermark:!0),_e(Q.useFade!==void 0?Q.useFade:!0),Pe(Q.showTracklist!==void 0?Q.showTracklist:!1),Fe(Q.showArtistSignature!==void 0?Q.showArtistSignature:!1),xn(Q.useUncompressed!==void 0?Q.useUncompressed:!1),lt(Q.albumCover||""),mt(Q.uncompressedAlbumCover||""),ze(Q.customFont||""),Yt(Q.tracklist||""),Qr(Q.trackDurations||[]),vi.current=Q.tracklist||"",Qn(hd.has(Q.titleRelease)?p("EDITOR_ReleaseTitle"):Q.titleRelease??""),wn.current=Q.releaseDate||"",go(lc(Q.releaseDate||"",v.language)),Hi(fd.has(Q.titleRuntime)?p("EDITOR_RuntimeTitle"):Q.titleRuntime??""),wi(Q.runtime||""),Er(""),Dr(""),Nt()}C.useEffect(()=>{if($e){const Q=new FileReader;Q.onload=async Ne=>{const Xe="CustomFont",ft=new FontFace(Xe,Ne.target.result);try{const _t=await ft.load();document.fonts.add(_t),ze(Xe)}catch(_t){console.error("Erro ao carregar fonte:",_t)}},Q.readAsArrayBuffer($e)}},[$e]),C.useEffect(()=>{a&&dt(a)},[a]);const[cn,xn]=C.useState(!1),[vn,bn]=C.useState("Original"),[Tt,Yt]=C.useState(""),[Ft,Qr]=C.useState([]),[Rn,Er]=C.useState(""),[un,Dr]=C.useState(""),[Ar,Rr]=C.useState(null),[Ui,Kr]=C.useState(null),vi=C.useRef(""),[bi,Qn]=C.useState(""),[Kn,go]=C.useState(""),wn=C.useRef(""),[xo,Hi]=C.useState(""),[Ur,wi]=C.useState("");C.useEffect(()=>{const Q=Ve.current[ct];if(Q){const{offsetLeft:Ne,offsetWidth:Xe}=Q;Mt({left:Ne,width:Xe})}},[ct]),C.useEffect(()=>{const Q=()=>{const Ne=Ve.current.information;if(Ne){const{offsetLeft:Xe,offsetWidth:ft}=Ne;Mt({left:Xe,width:ft})}else requestAnimationFrame(Q)};requestAnimationFrame(()=>{setTimeout(Q,0)})},[]),C.useEffect(()=>{if(Qn(Q=>hd.has(Q)?p("EDITOR_ReleaseTitle"):Q),Hi(Q=>fd.has(Q)?p("EDITOR_RuntimeTitle"):Q),wn.current){const Q=lc(wn.current,v.language);(Q!==wn.current||$f(wn.current))&&go(Q)}},[v.language]),C.useEffect(()=>{const Q=Tt.split(`
`).filter(Ne=>Ne.trim()!=="");if(Q.length>0&&Ft.length>0){let Ne=0;for(let lr=0;lr<Math.min(Q.length,Ft.length);lr++)Ft[lr]&&(Ne+=Ft[lr]);const Xe=Math.floor(Ne/1e3),ft=Math.floor(Xe/3600),_t=Math.floor(Xe%3600/60),sr=Xe%60,kr=ft>0?`${ft}h ${_t}min ${sr}s`:`${_t}min ${sr}s`;wi(kr)}},[Tt,Ft]);const[xa,vo]=C.useState(!1),[Go,va]=C.useState(null),[ei,bo]=C.useState(null),[ns,or]=C.useState(!1),[Wo,ba]=C.useState(null),[en,On]=C.useState((n==null?void 0:n.coverZoom)??0),[tn,yi]=C.useState(0),[Qt,wo]=C.useState(0),[Xo,wa]=C.useState(0),[is,Hr]=C.useState(!1),[Zo,$i]=C.useState(null),[ti,yo]=C.useState(0),[ya,_a]=C.useState(0),[Ca,_o]=C.useState(1),[yn,ri]=C.useState(null),[Sa,_i]=C.useState(!1),[Co,xt]=C.useState(!1),[Aa,ka]=C.useState(!1),[Ma,os]=C.useState(!1),[dn,_n]=C.useState(!1),[Ci,Jo]=C.useState("png"),[Fn,qi]=C.useState(1),Si=(n==null?void 0:n.backgroundColor)!==void 0,Vi=(n==null?void 0:n.textColor)!==void 0,Yi=(n==null?void 0:n.color1)!==void 0,ja=(n==null?void 0:n.color2)!==void 0,So=(n==null?void 0:n.color3)!==void 0;C.useEffect(()=>{(Z||V)&&(async()=>{if(!(!Z&&!V)&&!yn)try{const Ne=await Pc(Z,V);Ne&&ri(Ne.url)}catch{}})()},[Z,V,yn]),C.useEffect(()=>{if(!dn){const Q=-en*10;H(Q)}},[en,dn]);const Qo=Q=>{F(Q.target.value),_i(!0)},Gi=(Q,Ne)=>{Ne&&!Co?(F(Q),xt(!0)):Sa||F(Q)},Wi=Q=>{fe(Q.target.value),ka(!0)},Ko=(Q,Ne)=>{Ne&&!Ma?(fe(Q),os(!0)):Aa||fe(Q)},Xi=Q=>{Z||_(Q)},Ai={albumCover:wt,uncompressedAlbumCover:Qe,useUncompressed:cn,albumName:L,artistsName:V,spotifyArtistId:Z,titleSize:P,artistsSize:$,tracksSize:se,marginTop:ne,marginSide:Me,marginCover:k,marginBackground:J,titleRelease:bi,releaseDate:Kn,titleRuntime:xo,runtime:Ur,backgroundColor:oe,textColor:pe,useWatermark:qe,useFade:De,showTracklist:Ue,showArtistSignature:Ge,tracklist:Tt,trackDurations:Ft,color1:ue,color2:Te,color3:de,albumID:e,coverZoom:en,coverHorizontalPosition:tn,coverVerticalPosition:Qt,coverBlur:Xo,signatureHorizontalPosition:ti,signatureVerticalPosition:ya,signatureScale:Ca,userAdjustedTitleSize:Sa,initialTitleSizeSet:Co,userAdjustedTracksSize:Aa,initialTracksSizeSet:Ma},[ni,Na]=C.useState(null),[ii,Cn]=C.useState(null),[rn,Zi]=C.useState(null),[Ao,Sn]=C.useState(!1),[ea,g]=C.useState(!1),[N,Y]=C.useState(!1),[ee,ce]=C.useState(!1),[Se,je]=C.useState(!1),[Ze,tt]=C.useState(!1);C.useEffect(()=>{if(Ao){Y(!1);const Q=setTimeout(()=>{tt(!0)},100);return()=>clearTimeout(Q)}else tt(!1)},[Ao]);const pt=Q=>{Sn(!1),je(!1),M3(L,V),setTimeout(()=>{Na(Q),tt(!1),setTimeout(()=>{Y(!0)},50)},300)},bt=Q=>{Cn(Q),g(!1)};C.useEffect(()=>{if(ii&&rn){if(rn==="png"){const Q=document.createElement("a");Q.href=ii,Q.download=`Posterfy - ${L}.png`,Q.click(),L1(L,"poster",V),l&&(rt.registerDownload(l).catch(()=>{}),y2(l,L,V,"png"))}else if(rn==="pdf"){const Q=new Image;Q.onload=()=>{const Ne=new st({orientation:"portrait",unit:"mm",format:"a4",compress:!1});Ne.addImage(ii,"JPEG",0,0,210,297,void 0,"FAST"),Ne.save(`Posterfy - ${L}.pdf`),L1(L,"poster_pdf",V),l&&(rt.registerDownload(l).catch(()=>{}),y2(l,L,V,"pdf"))},Q.src=ii}else if(rn==="jpg"){const Q=new Image;Q.onload=()=>{const Ne=document.createElement("canvas");Ne.width=Q.width,Ne.height=Q.height;const Xe=Ne.getContext("2d");Xe.fillStyle="#FFFFFF",Xe.fillRect(0,0,Ne.width,Ne.height),Xe.drawImage(Q,0,0),Ne.toBlob(ft=>{const _t=document.createElement("a");_t.href=URL.createObjectURL(ft),_t.download=`Posterfy - ${L}.jpg`,_t.click(),URL.revokeObjectURL(_t.href),L1(L,"poster_jpg",V),l&&rt.registerDownload(l).catch(()=>{})},"image/jpeg",.95)},Q.src=ii}Cn(null),Zi(null)}},[ii,rn,L,V]),C.useEffect(()=>{Cn(null)},[Fn]);const Nt=()=>{_i(!1),ka(!1),Y(!1),requestAnimationFrame(()=>{je(!0),Sn(!0)})},Gt=()=>{Zi("png"),g(!0)},ur=async()=>{gt(!0),Et("");try{const Q=Ai;if(l){const ft=await rt.updatePosterJson(l,Q,L,V);d==null||d(ft.poster._id),t();return}const Ne={spotifyAlbumId:e,albumName:L,albumNameOriginal:D||L,artistsName:V,artistsNameOriginal:X||V,releaseDate:Kn,visibility:be,posterJson:Q},Xe=await rt.publishPoster(Ne);L3(L,V,be),d==null||d(Xe.poster._id),t()}catch(Q){Et(Q.message||p("COMMUNITY_PublishError"))}finally{gt(!1)}},Vt=async()=>{Sr(!0);try{const Q=Ai;await rt.updatePosterJson(l,Q,L,V),P3(l,L,V),jt(!1),d==null||d(l),t()}catch(Q){console.error("Failed to save poster:",Q);const Ne=Q.message||"Failed to save poster changes";Q.status===403||Q.status===401?Jr("Unauthorized: Only the poster owner can edit it"):Q.status===404?Jr("Poster not found. It may have been deleted."):Jr(Ne)}finally{Sr(!1)}},dr=()=>{Zi("pdf"),g(!0)},hr=()=>{Zi("jpg"),g(!0)};function ar(Q,Ne){va(Q),bo(Ne),vo(!0)}function nn(){vo(!1)}function $r(Q){ba(Q),or(!0)}function ta(){or(!1)}function Ji(){Hr(!1)}function Qi(Q){Ge?!yn&&Z?(async()=>{try{const Xe=await Pc(Z,V);Xe?(ri(Xe.url),setTimeout(()=>{$i(Q),Hr(!0)},100)):($i(Q),Hr(!0))}catch{$i(Q),Hr(!0)}})():($i(Q),Hr(!0)):(Fe(!0),Y(!1),Sn(!0))}const ki=()=>{const Ne=Tt.split(`
`).map(Xe=>Xe.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());Yt(Ne.join(`
`))},Ki=()=>{const Ne=Tt.split(`
`).map(Xe=>Xe.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());Yt(Ne.join(`
`))},eo=Q=>{if(!Q)return"";const Ne=Math.floor(Q/1e3),Xe=Math.floor(Ne/60),ft=Ne%60;return`${Xe}:${String(ft).padStart(2,"0")}`},Mi=()=>Tt.split(`
`).filter(Ne=>Ne.trim()!=="").map((Ne,Xe)=>{const ft=Ne.match(/^(\d+\.\s*)?(.+)$/),_t=ft?ft[2].trim():Ne.trim();return{index:Xe+1,name:_t,duration:Ft[Xe]||null,originalLine:Ne}}),Lr=(Q,Ne)=>{const Xe=Tt.split(`
`);Xe[Q]=Ne,Yt(Xe.join(`
`))},to=Q=>{const Ne=Tt.split(`
`);Ne.splice(Q,1);const Xe=Ft.filter((ft,_t)=>_t!==Q);Qr(Xe),Yt(Ne.join(`
`))},ro=(Q,Ne)=>{if(!Ne.trim()){const lr=[...Ft];lr[Q]=0,Qr(lr);return}const Xe=Ne.split(":");if(Xe.length!==2)return;const ft=parseInt(Xe[0],10),_t=parseInt(Xe[1],10);if(isNaN(ft)||isNaN(_t)||_t>59)return;const sr=(ft*60+_t)*1e3,kr=[...Ft];kr[Q]=sr,Qr(kr)},ra=()=>{if(!Rn.trim())return;const Q=Tt.split(`
`).filter(ft=>ft.trim()!==""),Ne=Q.length+1;Q.push(`${Ne}. ${Rn}`);let Xe=0;if(un.trim()){const ft=un.split(":");if(ft.length===2){const _t=parseInt(ft[0],10),sr=parseInt(ft[1],10);!isNaN(_t)&&!isNaN(sr)&&sr<=59&&(Xe=(_t*60+sr)*1e3)}}Yt(Q.join(`
`)),Qr([...Ft,Xe]),Er(""),Dr("")},na=Q=>{Rr(Q)},rr=(Q,Ne)=>{Q.preventDefault(),Kr(Ne)},oi=()=>{Kr(null)},ko=(Q,Ne)=>{if(Q.preventDefault(),Kr(null),Ar===null||Ar===Ne){Rr(null);return}const Xe=Tt.split(`
`).filter(lr=>lr.trim()!==""),ft=[...Ft],_t=Xe[Ar],sr=ft[Ar];Xe.splice(Ar,1),ft.splice(Ar,1),Xe.splice(Ne,0,_t),ft.splice(Ne,0,sr);const kr=Xe.map((lr,nr)=>{const fn=lr.match(/^(\d+\.\s*)?(.+)$/),Kt=fn?fn[2].trim():lr.trim();return`${nr+1}. ${Kt}`});Yt(kr.join(`
`)),Qr(ft),Rr(null)},Ia=()=>{Rr(null),Kr(null)};async function hn(Q,Ne="us"){var Xe;try{let ft=`https://itunes.apple.com/search?term=${encodeURIComponent(Q)}&country=${Ne}&entity=album&limit=1`,_t=await fetch(ft);if(!_t.ok)throw new Error(`HTTP Error: ${_t.status}`);let sr=await _t.json();if(!((Xe=sr.results)!=null&&Xe.length))return console.warn("No album data found."),xn(!1),!1;let nr=sr.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return nr.length===2?`https://a5.mzstatic.com/us/r1000/0/${nr[1].split("/").slice(0,-1).join("/")}`:""}catch(ft){return console.error("Error fetching album cover:",ft.message),""}}C.useEffect(()=>{Qn(p("EDITOR_ReleaseTitle")),Hi(p("EDITOR_RuntimeTitle"))},[p]),C.useEffect(()=>{const Q=async()=>{var Ne;try{const kr=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,nr=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${kr}`}})).json(),fn=nr.artists.map(qr=>qr.name).join(", ");E(nr.name),q(nr.name),K(fn),I(fn),nr.artists.length>0&&(console.debug("Setting Spotify artist ID:",nr.artists[0].id),_(nr.artists[0].id));const Kt=(Ne=nr.images[0])==null?void 0:Ne.url,ia=await M9(Kt);lt(ia),wn.current=nr.release_date,go(lc(nr.release_date,v.language));const An=await hn(nr.name+" "+fn);mt(An||ia);const zn=nr.tracks.items.reduce((qr,Bn)=>qr+Bn.duration_ms,0),jo=Math.floor(zn/1e3),No=Math.floor(jo/60),Io=Math.floor(No/60),To=jo%60,ai=No%60,Ni=Io>0?`${Io}h ${ai}min ${To}s`:`${ai}min ${To}s`;wi(Ni);const si=nr.tracks.items.map((qr,Bn)=>(Bn===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&Pe(!0),`${Bn+1}. ${qr.name}`)),no=nr.tracks.items.map(qr=>qr.duration_ms);Yt(si.join(`
`)),Qr(no),vi.current=si.join(`
`),Er(""),Dr(""),ce(!0)}catch(Xe){console.error("Error trying to fetch album data:",Xe)}};a?(dt(a),ce(!0)):(_n(!1),Er(""),Dr(""),Q())},[e]),C.useEffect(()=>{const Q=Ne=>{Ne.ctrlKey&&Ne.key==="s"?(Ne.preventDefault(),Nt()):Ne.ctrlKey&&Ne.shiftKey&&Ne.key==="D"?(Ne.preventDefault(),dr()):Ne.ctrlKey&&Ne.key==="d"&&(Ne.preventDefault(),Gt())};return window.addEventListener("keydown",Q),()=>{window.removeEventListener("keydown",Q)}},[ni,L,Gt]);const ji=C.useRef(!0);return C.useEffect(()=>{if(ji.current){ji.current=!1;return}if(!ee)return;const Q=setTimeout(()=>{Nt()},1e3);return()=>{clearTimeout(Q)}},[L,V,P,$,se,ne,Me,k,J,oe,pe,ue,Te,de,qe,De,Ue,Ge,Tt,cn,bi,Kn,xo,Ur,en,tn,Qt,Xo,et,ee]),o.jsx(o.Fragment,{children:ee?o.jsxs(J9,{ref:f,children:[o.jsx(Uh.Palette,{src:wt,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:Q})=>(C.useEffect(()=>{if(!Q||Q.length===0||dn)return;let Ne=!1;!Si&&Q[0]&&(le(Q[0]),Ne=!0),!Vi&&Q[1]&&(ve(Q[1]),Ne=!0),!Yi&&Q[2]&&(ke(Q[2]),Ne=!0),!ja&&Q[3]&&(Re(Q[3]),Ne=!0),!So&&Q[4]&&(U(Q[4]),Ne=!0),Ne&&Nt()},[Q,dn,Si,Vi,Yi,ja,So]),null)}),o.jsxs(Q9,{onClick:t,children:[o.jsx(K9,{}),o.jsx(ew,{children:p("GoBack")})]}),o.jsxs(tw,{children:[o.jsx(Ns,{ref:j,onImageReady:pt,posterData:Ai,generatePoster:Ao,onTitleSizeAdjust:Gi,onTracksSizeAdjust:Ko,onArtistIdDiscovered:Xi,customFont:et,scale:.3}),ea&&o.jsx("div",{style:{position:"absolute",left:"-9999px",top:"-9999px"},children:o.jsx(Ns,{ref:A,onImageReady:bt,posterData:Ai,generatePoster:ea,onArtistIdDiscovered:Xi,customFont:et,scale:Fn})}),o.jsxs(ow,{children:[o.jsx(sw,{visible:N}),ni?o.jsx(iw,{src:ni,ref:M,visible:N}):o.jsx(Aw,{ref:M}),o.jsx(lw,{visible:Ze})]}),o.jsxs(cw,{children:[o.jsx(mr,{animationDelay:50,children:o.jsxs(uw,{children:[o.jsx(Nl,{ref:Q=>Ve.current.information=Q,$active:ct==="information",onClick:()=>St("information"),children:o.jsxs(o.Fragment,{children:[o.jsx(yw,{}),p("EDITOR_InformationTab")]})}),o.jsx(Nl,{ref:Q=>Ve.current.tracklist=Q,$active:ct==="tracklist",onClick:()=>St("tracklist"),children:o.jsxs(o.Fragment,{children:[o.jsx(_w,{}),p("EDITOR_TracklistTab")]})}),o.jsx(Nl,{ref:Q=>Ve.current.export=Q,$active:ct==="export",onClick:()=>St("export"),children:o.jsxs(o.Fragment,{children:[o.jsx(Cw,{}),p("EDITOR_ExportTab")]})}),s==="search_creation"&&o.jsx(Nl,{ref:Q=>Ve.current.publish=Q,$active:ct==="publish",onClick:()=>St("publish"),children:o.jsxs(o.Fragment,{children:[o.jsx(Sw,{}),p("EDITOR_PublishTab")]})}),o.jsx(dw,{left:ut.left,width:ut.width})]})}),ct==="information"?o.jsxs(hw,{children:[o.jsx(mr,{animationDelay:0,children:o.jsx(Fo,{title:p("EDITOR_AlbumName"),value:L,onChange:Q=>E(Q.target.value)})}),o.jsx(mr,{animationDelay:50,children:o.jsx(Fo,{title:p("EDITOR_ArtistName"),value:V,onChange:Q=>K(Q.target.value)})}),o.jsx(mr,{animationDelay:100,children:o.jsx(Fo,{title:p("EDITOR_TitleSize"),value:P,onChange:Qo})}),o.jsx(mr,{animationDelay:150,children:o.jsx(Fo,{title:p("EDITOR_ArtistSize"),value:$,onChange:Q=>re(Q.target.value)})}),o.jsx(mr,{animationDelay:200,children:o.jsx(Fo,{title:p("EDITOR_TracksSize"),value:se,onChange:Wi})}),o.jsx(mr,{animationDelay:250,children:o.jsx(Fo,{title:p("EDITOR_MarginTop"),value:ne,onChange:Q=>ge(Q.target.value)})}),o.jsx(mr,{animationDelay:300,children:o.jsx(Fo,{title:p("EDITOR_MarginSide"),value:Me,onChange:Q=>we(Q.target.value)})}),o.jsx(mr,{animationDelay:350,children:o.jsx(V2,{title:p("EDITOR_CoverEditor"),text:p("EDITOR_EditCover"),onClick:$r,icon:kw})}),o.jsx(mr,{animationDelay:375,children:o.jsx(Fo,{title:p("EDITOR_MarginBackground"),value:J,onChange:Q=>te(Q.target.value)})}),o.jsx(mr,{animationDelay:400,children:o.jsx(U2,{title:bi,value:Kn,onChangeTitle:Q=>Qn(Q.target.value),onChangeDate:Q=>{wn.current=Q.target.value,go(Q.target.value)}})}),o.jsx(mr,{animationDelay:450,children:o.jsx(U2,{title:xo,value:Ur,onChangeTitle:Q=>Hi(Q.target.value),onChangeDate:Q=>wi(Q.target.value)})}),o.jsx(mr,{animationDelay:500,children:o.jsx(ms,{title:p("EDITOR_BackgroundColor"),value:oe,onClick:Q=>ar(Q,"backgroundColor")})}),o.jsx(mr,{animationDelay:550,children:o.jsx(ms,{title:p("EDITOR_TextColor"),value:pe,onClick:Q=>ar(Q,"textColor")})}),o.jsx(mr,{animationDelay:600,children:o.jsx(ms,{title:`${p("EDITOR_Color")} 1`,value:ue,onClick:Q=>ar(Q,"color1")})}),o.jsx(mr,{animationDelay:650,children:o.jsx(ms,{title:`${p("EDITOR_Color")} 2`,value:Te,onClick:Q=>ar(Q,"color2")})}),o.jsx(mr,{animationDelay:700,children:o.jsx(ms,{title:`${p("EDITOR_Color")} 3`,value:de,onClick:Q=>ar(Q,"color3")})}),o.jsx(mr,{animationDelay:750,children:o.jsx(bl,{title:p("EDITOR_Watermark"),value:qe,onChange:Q=>Ye(Q),text:p("EDITOR_WatermarkText")})}),o.jsx(mr,{animationDelay:800,children:o.jsx(bl,{title:p("EDITOR_Fade"),value:De,onChange:Q=>_e(Q),text:p("EDITOR_FadeText")})}),o.jsx(mr,{animationDelay:850,children:o.jsx(bl,{title:p("EDITOR_Uncompressed"),value:cn,onChange:Q=>xn(Q),text:p("EDITOR_UncompressedText")})}),o.jsx(mr,{animationDelay:900,children:o.jsx(bl,{title:p("EDITOR_Tracklist"),value:Ue,onChange:Q=>Pe(Q),text:p("EDITOR_TracklistText")})}),(yn||Ge)&&o.jsx(mr,{animationDelay:950,children:o.jsx(V2,{title:p("EDITOR_Signature"),text:p(Ge?"EDITOR_EditSignature":"EDITOR_SignatureText"),onClick:Qi,icon:Nh})})]}):ct==="tracklist"?o.jsxs(fw,{children:[o.jsxs(mw,{"data-lenis-prevent":!0,children:[Mi().map((Q,Ne)=>o.jsxs(gw,{draggable:!0,onDragStart:()=>na(Ne),onDragOver:Xe=>rr(Xe,Ne),onDragLeave:oi,onDrop:Xe=>ko(Xe,Ne),onDragEnd:Ia,isDragging:Ar===Ne,isDragOver:Ui===Ne,children:[o.jsxs(md,{draggable:!0,children:[Q.index,"."]}),o.jsx(gd,{value:Q.name,onChange:Xe=>Lr(Ne,Xe.target.value),placeholder:p("EDITOR_TrackNamePlaceholder")||"Track name",draggable:!1}),o.jsx(xd,{type:"text",value:Q.duration?eo(Q.duration):"",onChange:Xe=>ro(Ne,Xe.target.value),placeholder:"0:00",draggable:!1}),o.jsx(bw,{onClick:()=>to(Ne),title:p("EDITOR_DeleteTrack")||"Delete track",draggable:!1,children:o.jsx(ww,{})})]},Ne)),o.jsxs(xw,{title:p("EDITOR_AddNewTrack")||"Add new track",children:[o.jsxs(md,{children:[Mi().length+1,"."]}),o.jsx(gd,{value:Rn,onChange:Q=>Er(Q.target.value),placeholder:p("EDITOR_TrackNamePlaceholder")||"Track name",onClick:Q=>Q.stopPropagation()}),o.jsx(xd,{value:un,onChange:Q=>Dr(Q.target.value),placeholder:"0:00",onClick:Q=>Q.stopPropagation()}),o.jsx(vw,{type:"button",onClick:ra,children:"+"})]})]}),o.jsxs(pw,{children:[o.jsx(pd,{onClick:ki,children:p("EDITOR_RemoveParentheses")}),o.jsx(pd,{onClick:Ki,children:p("EDITOR_RemoveBrackets")})]})]}):ct==="export"?o.jsxs(vd,{children:[o.jsxs(cc,{children:[o.jsx(uc,{children:p("EXPORT_Format")}),o.jsxs(bd,{children:[o.jsx(za,{$selected:Ci==="png",onClick:()=>Jo("png"),children:o.jsx(Ba,{children:"PNG"})}),o.jsx(za,{$selected:Ci==="pdf",onClick:()=>Jo("pdf"),children:o.jsx(Ba,{children:"PDF"})}),o.jsx(za,{$selected:Ci==="jpg",onClick:()=>Jo("jpg"),children:o.jsx(Ba,{children:"JPG"})})]})]}),o.jsxs(cc,{children:[o.jsx(uc,{children:p("EXPORT_Size")}),o.jsxs(bd,{children:[o.jsxs(za,{$selected:Fn===.3,onClick:()=>qi(.3),children:[o.jsx(Ba,{children:p("EXPORT_SizeThumbnail")}),o.jsx(dc,{children:p("EXPORT_SizeDescription_Thumbnail")})]}),o.jsxs(za,{$selected:Fn===.6,onClick:()=>qi(.6),children:[o.jsx(Ba,{children:p("EXPORT_SizeMedium")}),o.jsx(dc,{children:p("EXPORT_SizeDescription_Medium")})]}),o.jsxs(za,{$selected:Fn===1,onClick:()=>qi(1),children:[o.jsx(Ba,{children:p("EXPORT_SizeNormal")}),o.jsx(dc,{children:p("EXPORT_SizeDescription_Normal")})]})]})]}),o.jsxs(Mw,{children:[o.jsx(Q7,{size:24,style:{color:"var(--AccentColor)",flexShrink:0}}),o.jsx(jw,{children:p("EXPORT_PrintTip")})]}),o.jsx(wd,{onClick:()=>{Ci==="png"?Gt():Ci==="pdf"?dr():Ci==="jpg"&&hr()},children:p("EXPORT_DownloadButton")})]}):ct==="publish"&&s==="search_creation"?o.jsx(vd,{children:w?o.jsxs(o.Fragment,{children:[o.jsxs(cc,{children:[o.jsx(uc,{children:p("COMMUNITY_VisibilityLabel")}),o.jsxs(Iw,{children:[o.jsxs(yd,{$selected:be==="public",onClick:()=>He("public"),children:[o.jsx(_d,{$selected:be==="public",children:o.jsx(Tw,{})}),o.jsxs(Cd,{children:[o.jsx(Sd,{children:p("COMMUNITY_Public")}),o.jsx(Ad,{children:p("COMMUNITY_PublicDesc")})]})]}),o.jsxs(yd,{$selected:be==="private",onClick:()=>He("private"),children:[o.jsx(_d,{$selected:be==="private",children:o.jsx(Lw,{})}),o.jsxs(Cd,{children:[o.jsx(Sd,{children:p("COMMUNITY_Private")}),o.jsx(Ad,{children:p("COMMUNITY_PrivateDesc")})]})]})]})]}),Ot&&o.jsx(Nw,{children:Ot}),o.jsx(wd,{onClick:ur,disabled:Be,children:p(Be?"COMMUNITY_Publishing":"COMMUNITY_Publish")})]}):o.jsxs(Pw,{children:[o.jsx(I9,{width:"62%",height:120}),o.jsx(Ew,{children:p("COMMUNITY_LoginToPublish")}),o.jsx(Dw,{onClick:()=>S("/login"),children:p("Login")})]})}):null]})]}),c&&o.jsx(W9,{poster:c,onDeleted:t,onVisibilityChanged:()=>{},onSave:()=>jt(!0),isSavingPoster:Bi,isOwnerOrAdmin:(m==null?void 0:m.id)===(c==null?void 0:c.authorId)||((Mo=m==null?void 0:m.permissions)==null?void 0:Mo.includes("admin"))}),xa&&Go&&ei&&al.createPortal(o.jsx(j7,{DefaultColor:ei==="backgroundColor"?oe:ei==="textColor"?pe:ei==="color1"?ue:ei==="color2"?Te:de,image:wt,predefinedColors:[ue,Te,de,oe,pe],onDone:Q=>{switch(ei){case"backgroundColor":le(Q);break;case"textColor":ve(Q);break;case"color1":ke(Q);break;case"color2":Re(Q);break;case"color3":U(Q);break}nn()},position:Go,onClose:nn}),document.body),ns&&Wo&&al.createPortal(o.jsx(E7,{position:Wo,albumCoverUrl:cn?Qe:wt,initialZoom:en,initialHorizontalPosition:tn,initialVerticalPosition:Qt,initialBlur:Xo,onDone:Q=>{_n(!1),On(Q.zoom),yi(Q.horizontalPosition),wo(Q.verticalPosition),wa(Q.blur),ta()},onClose:ta}),document.body),is&&Zo&&al.createPortal(o.jsx(U7,{position:Zo,signatureUrl:yn,initialHorizontalPosition:ti,initialVerticalPosition:ya,initialScale:Ca,onDone:Q=>{Q.disabled?(Fe(!1),Y(!1),Sn(!0)):(yo(Q.horizontalPosition),_a(Q.verticalPosition),_o(Q.scale),Y(!1),Sn(!0)),Ji()},onClose:Ji}),document.body),l&&ht&&al.createPortal(o.jsx(zs,{title:p("EDITOR_SavePosterTitle"),paragraph:p("EDITOR_SavePosterMessage"),confirmText:p("EDITOR_SaveConfirm"),onConfirm:Vt,cancelText:p("EDITOR_SaveCancel"),onCancel:()=>{jt(!1),Jr("")},canClose:!0,isClosing:!1,errorMessage:Jn}),document.body)]}):o.jsx(Bh,{})})});A0.displayName="PosterEditor";const Rw=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Ow=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},Fw=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const a=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),o.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},zw=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Bw=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,Uw=b(vh)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,Hw=b.h3`
  font-size: 1.3em;
  font-weight: bold;
`,k0=Rt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$w=b.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${k0} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,Il=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${k0} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Tl=b.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${k0} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,qw=b.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,Vw=b.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function Yw({onSelectModel:e,onBack:t}){const{t:r}=Pt(),n={coverZoom:50,marginBackground:-700,showTracklist:!1,marginTop:200},a={coverZoom:-16,useFade:!1,marginTop:40,backgroundColor:"#eee7d7",textColor:"#1f1d1d"},s={coverZoom:110,marginBackground:-1200,useFade:!1},l={coverZoom:0,marginBackground:0,showTracklist:!0,useFade:!0};function c(f,p){k3("select_model","ModelSelector",f),e&&e(f,p)}const d=[0,.08,.16,.24];return o.jsxs(o.Fragment,{children:[o.jsxs(Bw,{onClick:t,children:[o.jsx(Uw,{}),o.jsx(Hw,{children:r("GoBack")})]}),o.jsx(qw,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),o.jsx(Vw,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),o.jsxs($w,{children:[o.jsxs(Il,{delay:d[0],onClick:()=>c("standart",l),children:[o.jsx(Rw,{width:200}),o.jsx(Tl,{delay:d[0],children:"Standard"})]}),o.jsxs(Il,{delay:d[1],onClick:()=>c("frame",a),children:[o.jsx(zw,{width:200}),o.jsx(Tl,{delay:d[1],children:"Frame"})]}),o.jsxs(Il,{delay:d[2],onClick:()=>c("basic",n),children:[o.jsx(Ow,{width:200}),o.jsx(Tl,{delay:d[2],children:"Basic"})]}),o.jsxs(Il,{delay:d[3],onClick:()=>c("fullcover",s),children:[o.jsx(Fw,{width:200}),o.jsx(Tl,{delay:d[3],children:"Full Cover"})]})]})]})}const Gw=b.div`
    width: 100%;
`,Ww=b.div`
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
`,Xw=b(o0)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,Zw=b(t4)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,Jw=b.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,Qw=b.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function Kw({onSearch:e,value:t=""}){const{t:r}=Pt(),[n,a]=C.useState(t);C.useEffect(()=>{a(t)},[t]);const s=d=>{d.key==="Enter"&&(e(n),n.trim()&&w2(n.trim()))},l=d=>{a(d.target.value)},c=()=>{e(n),n.trim()&&w2(n.trim())};return o.jsx(Gw,{children:o.jsxs(Ww,{role:"search","aria-label":"Album search for poster creation",children:[o.jsx(Xw,{"aria-hidden":"true"}),o.jsx(Jw,{}),o.jsx(Qw,{placeholder:r("SearchPlaceholder"),value:n,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),o.jsx(Zw,{onClick:c,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const ey=b.div`
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

`,ty=b.img`
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
`,ry=b.h3`
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
`,ny=b.p`
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
`,iy=b.div`
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
`;function oy({title:e,artist:t,cover:r,id:n,onClick:a,animationDelay:s=0}){const[l,c]=C.useState(!1),[d,f]=C.useState(!1),[p,v]=C.useState(!1);C.useEffect(()=>{if(p)c(!0);else{const m=setTimeout(()=>{c(!0),v(!0)},s);return()=>clearTimeout(m)}},[s,p]);const S=()=>{f(!0)};return o.jsxs(ey,{onClick:()=>a(n),$visible:l,children:[o.jsx(ty,{src:r,$loaded:d,onLoad:S,loading:"lazy"}),o.jsxs(iy,{children:[o.jsx(ry,{children:e}),o.jsx(ny,{children:t})]})]})}const ay=b.div`
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
`,sy=b.button`
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
`,ly=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,cy=b.p`
    font-size: 1em;
    font-weight: 600;
    opacity: 0.5;
    color: var(--textColor);
    margin: 0;
    margin-top: 20px;
`,uy=b.div`
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
`;function kd({query:e,onclick:t}){const{t:r}=Pt(),[n,a]=C.useState([]),[s,l]=C.useState(""),[c,d]=C.useState(0),[f,p]=C.useState(!0),[v,S]=C.useState(!1),[m,w]=C.useState(!1),[M,j]=C.useState(0),[A,L]=C.useState(!1),E=10;C.useEffect(()=>{(async()=>{const I=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(I.access_token)})()},[]),C.useEffect(()=>{a([]),d(0),p(!0),j(0),L(!1)},[e]),C.useEffect(()=>{const q=async(V=!1)=>{var K,X;if(s){V?w(!0):S(!0);try{let I;const Z=V?c:0;if(e)I=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${E}&offset=${Z}`,{headers:{Authorization:`Bearer ${s}`}});else{const ne=new Date().getFullYear();I=await fetch(`https://api.spotify.com/v1/search?q=tag%3Anew+year%3A${ne}&type=album&limit=${E}&offset=${Z}`,{headers:{Authorization:`Bearer ${s}`}})}if(!I.ok){const ne=await I.text();throw new Error(`Erro na API: ${ne}`)}const _=await I.json(),F=(((K=_.albums)==null?void 0:K.items)||[]).filter(ne=>ne!=null).map(ne=>{var ge,Me;return{id:ne.id,title:ne.name,artist:(ge=ne.artists)==null?void 0:ge.map(we=>we.name).join(", "),cover:(Me=ne.images[0])==null?void 0:Me.url}});V?(L(!1),j(n.length),a(ne=>[...ne,...F])):(L(!1),j(0),a(F));const $=(F.length-1)*80;setTimeout(()=>{L(!0)},$+800);const se=((X=_.albums)==null?void 0:X.total)||0,fe=V?n.length+F.length:F.length;p(fe<se&&F.length===E)}catch(I){console.error(I)}finally{S(!1),w(!1)}}};s&&(n.length===0||c===0)&&q(!1)},[e,s]);const D=async()=>{var V,K;if(!s||!f||m)return;const q=c+E;d(q);try{w(!0);let X;if(e)X=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${E}&offset=${q}`,{headers:{Authorization:`Bearer ${s}`}});else{const se=new Date().getFullYear();X=await fetch(`https://api.spotify.com/v1/search?q=tag%3Anew+year%3A${se}&type=album&limit=${E}&offset=${q}`,{headers:{Authorization:`Bearer ${s}`}})}if(!X.ok){const se=await X.text();throw new Error(`Erro na API: ${se}`)}const I=await X.json(),_=(((V=I.albums)==null?void 0:V.items)||[]).filter(se=>se!=null).map(se=>{var fe,ne;return{id:se.id,title:se.name,artist:(fe=se.artists)==null?void 0:fe.map(ge=>ge.name).join(", "),cover:(ne=se.images[0])==null?void 0:ne.url}});L(!1),j(n.length),a(se=>[...se,..._]);const P=(_.length-1)*80;setTimeout(()=>{L(!0)},P+800);const $=((K=I.albums)==null?void 0:K.total)||0,re=n.length+_.length;p(re<$&&_.length===E)}catch(X){console.error(X)}finally{w(!1)}};return o.jsx(o.Fragment,{children:v&&n.length===0?o.jsx(Bh,{}):!v&&n.length===0?o.jsxs(ly,{children:[o.jsx(Qa,{width:220}),o.jsx(cy,{children:r("NoResults")})]}):o.jsxs(o.Fragment,{children:[o.jsx(ay,{children:n.map((q,V)=>{const K=V>=M?V-M:V;return o.jsx(oy,{onClick:()=>t(q.id),cover:q.cover,title:q.title,artist:q.artist,id:q.id,animationDelay:K*80},q.id)})}),f&&o.jsx(uy,{$visible:A,children:o.jsx(sy,{onClick:D,disabled:m,children:r(m?"LoadingMore":"LoadMore")})})]})})}const dy=({onBack:e,onPublishSuccess:t})=>{const[r,n]=C.useState(""),[a,s]=C.useState(null),[l,c]=C.useState(!1),[d,f]=C.useState(null),[p,v]=C.useState(null),S=C.useRef(null);C.useEffect(()=>{l&&a&&S.current&&setTimeout(()=>{S.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[l,a]);function m(j){s(j),c(!0),f(null),v(null)}function w(){s(null),c(!1),f(null),v(null),e&&e()}const M=j=>{n(j)};return a&&d&&p?o.jsx(A0,{albumID:a,handleClickBack:w,model:d,modelParams:p,source:"search_creation",onPublishSuccess:t}):a&&l?o.jsx("div",{ref:S,children:o.jsx(Yw,{onSelectModel:(j,A)=>{f(j),v(A),c(!1)},onBack:w})}):o.jsxs(o.Fragment,{children:[o.jsx(Kw,{onSearch:M,value:r}),r.trim()?o.jsx(kd,{query:r,onclick:m}):o.jsx("div",{children:o.jsx(kd,{onclick:m})})]})},Uo=b.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function Md({loadingComplete:e}){const{t}=Pt(),{posterId:r}=lh(),n=ln(),[a,s]=C.useState(null),[l,c]=C.useState(null),[d,f]=C.useState(null),p=C.useRef(null);C.useEffect(()=>{if(!r)return;let F=!1;return(async()=>{try{const re=await rt.getPoster(r);if(F)return;rt.registerView(r).catch(()=>{}),T3(r,re.poster.albumName,re.poster.artistsName);const se={...re.poster.posterJson||{},albumID:re.poster.spotifyAlbumId};s(se),c(re.poster),setTimeout(()=>{if(p.current){const fe=p.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:fe,behavior:"smooth"})}},200)}catch(re){console.error("Failed to load community poster:",re)}})(),()=>{F=!0}},[r]);const[v,S]=Pi(),[m,w]=Pi(),[M,j]=Pi(),[A,L]=Pi(),[E,D]=Pi(),[q,V]=Pi(),[K,X]=Pi(),[I,Z]=Pi(),_=F=>{I3(F.albumName||"Unknown Album",F.artistsName||"Unknown Artist",F.albumID||"","album_collection"),s(F),setTimeout(()=>{if(p.current){const $=p.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:$,behavior:"smooth"})}},100)},P=()=>{s(null),c(null),n("/")};return o.jsxs(o.Fragment,{children:[d&&o.jsx(zs,{title:t("COMMUNITY_PublishSuccess"),paragraph:t("COMMUNITY_PublishedModalBody"),confirmText:t("GotIt"),onConfirm:()=>{f(null),n("/")},canClose:!0,onCancel:()=>{f(null),n("/")},isClosing:!1}),o.jsx(Dm,{showAnimation:e,onRecreate:_}),o.jsx(Uo,{ref:v,$isVisible:S,children:o.jsx(ts,{text:t("anchorArt"),type:1})}),o.jsx(Uo,{ref:m,$isVisible:w,children:o.jsx(r1,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),o.jsx(Uo,{ref:M,$isVisible:j,children:a?o.jsx(A0,{ref:p,albumID:a.albumID,initialPosterJson:a,handleClickBack:P,posterId:r||null,posterFullData:l,onPublishSuccess:F=>f({posterId:F})}):o.jsx(dy,{onPublishSuccess:F=>f({posterId:F})})}),o.jsx(Uo,{ref:A,$isVisible:L,children:o.jsx(Ug,{})}),o.jsx(Uo,{ref:E,$isVisible:D,children:o.jsx(N8,{})}),o.jsx(Uo,{ref:q,$isVisible:V,children:o.jsx(rg,{})}),o.jsx(Uo,{ref:K,$isVisible:X,children:o.jsx(Jm,{})}),o.jsx(Uo,{ref:I,$isVisible:Z,children:o.jsx(U8,{})})]})}function Us(e){return nt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const jd=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,Nd=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,Id=b.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,hy=b.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,fy=b.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,Td=b.button`
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
`,Ld=b.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,py=b(Mh)`
    width: 20px;
    height: 20px;
`,my=b(Us)`
    width: 20px;
    height: 20px;
`,gy=b.div`
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
`,Pd=b.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,xy=b.p`
    color: var(--textColor);
`;b.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;const vy=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,by=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,wy=b.div`
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
`,yy=b.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function _y(){const{t:e}=Pt(),t=ln(),[r]=u3(),{user:n,loading:a,loginWithGoogle:s,loginWithSpotify:l}=mi();if(C.useEffect(()=>{if(!a){if(n){t(`/u/${n.username}`);return}r.get("login")==="success"&&n&&t(`/u/${n.username}`)}},[n,a,t,r]),a)return o.jsxs(jd,{children:[o.jsx(Tc,{iconColor:"var(--AccentColor)"}),o.jsxs(Nd,{children:[o.jsx(po,{fill:"var(--textColor)",width:"100px"}),o.jsx(Id,{children:e("Loading")})]})]});const c=()=>{t("/")};return o.jsxs(jd,{children:[o.jsx(Tc,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),o.jsx(Nd,{children:o.jsxs(vy,{children:[o.jsx(wy,{onClick:c,children:o.jsx(po,{fill:"var(--textColor)",width:"25vw"})}),o.jsxs(by,{children:[o.jsx(yy,{children:o.jsx(po,{fill:"var(--textColor)",width:"90px"})}),o.jsx(Id,{children:e("LOGIN_Welcome")}),o.jsx(hy,{children:e("LOGIN_JoinCommunity")}),o.jsxs(fy,{children:[o.jsxs(Td,{onClick:s,children:[o.jsx(py,{}),o.jsx(Ld,{children:e("LOGIN_GoogleSignIn")})]}),o.jsxs(gy,{children:[o.jsx(Pd,{}),o.jsx(xy,{children:e("LOGIN_Or")}),o.jsx(Pd,{})]}),o.jsxs(Td,{onClick:l,children:[o.jsx(my,{}),o.jsx(Ld,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}const Cy=Rt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,Sy=Rt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,Ay=Rt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,ky=Rt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,My=b.div`
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
    animation: ${e=>e.isClosing?ky:Ay} 0.3s ease-in-out forwards;
`,jy=b.div`
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
    animation: ${e=>e.isClosing?Sy:Cy} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,Ny=b.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Iy=b.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Ty=b(wh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Ly=b.div`
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
`,Py=b.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,Ey=b.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,Dy=b.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,hc=b.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,fc=b.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,Ed=b.input`
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
`,Ry=b.textarea`
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
`,Oy=b.span`
    font-size: 0.75em;
    opacity: 0.38;
    text-align: right;
    font-weight: 600;
    margin-top: -2px;
`,Ll=b.span`
    color: var(--textColor);
    font-size: 0.8em;
    font-weight: bolder;
    opacity: 0.8;
`,Fy=b.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,zy=b.button`
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
`,By=b.button`
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
`,Uy=b.div`
    color: var(--textColor);
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`,Hy=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0;
`,$y=b.span`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 6px;
`,qy=b.button`
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
`;function Vy({isOpen:e,onClose:t,onProfileUpdate:r,initialBio:n=""}){var q;const{user:a,updateUser:s}=mi(),{t:l}=Pt(),[c,d]=C.useState({name:"",username:"",bio:"",showSpotifyProfile:!1}),[f,p]=C.useState({}),[v,S]=C.useState(!1),[m,w]=C.useState(""),[M,j]=C.useState(!1);C.useEffect(()=>{a&&d({name:a.name||"",username:a.username||"",bio:n,showSpotifyProfile:a.showSpotifyProfile||!1})},[a,n]);const A=()=>{const V={};return c.name.trim()||(V.name=l("NameIsRequired")),c.username.trim()?c.username.length<3?V.username=l("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(V.username=l("UsernameFormat")):V.username=l("UsernameIsRequired"),c.bio.trim()&&c.bio.split(`
`).filter((I,Z)=>Z<4).some(I=>I.trim()==="")&&(V.bio=l("DASH_BioNoEmptyLines")),p(V),Object.keys(V).length===0},L=V=>{const{name:K,value:X}=V.target;if(K==="bio"){const I=X.split(`
`);if(I.length>4||I.length>=2&&I[I.length-1]===""&&I[I.length-2]==="")return}d(I=>({...I,[K]:X})),f[K]&&p(I=>({...I,[K]:""})),m&&w("")},E=async V=>{var K,X,I,Z;if(V.preventDefault(),!!A()){S(!0),w("");try{await rt.updateUserProfile({name:c.name.trim(),username:c.username.trim(),bio:c.bio.trim(),showSpotifyProfile:c.showSpotifyProfile}),s({...a,name:c.name.trim(),username:c.username.trim(),bio:c.bio.trim(),showSpotifyProfile:c.showSpotifyProfile}),w(l("ProfileUpdatedSuccessfully"));const _=[];c.name.trim()!==a.name&&_.push("name"),c.username.trim()!==a.username&&_.push("username"),c.bio.trim()!==(a.bio||"")&&_.push("bio"),c.showSpotifyProfile!==a.showSpotifyProfile&&_.push("showSpotifyProfile"),_.length&&z3(c.username.trim(),_),r&&r(),setTimeout(()=>{D()},1500)}catch(_){console.error("Profile update failed:",_),(K=_.message)!=null&&K.includes("409")||(X=_.message)!=null&&X.includes("taken")?p({username:l("UsernameTaken")}):(I=_.message)!=null&&I.includes("400")||(Z=_.message)!=null&&Z.includes("invalid")?p({username:l("InvalidUsernameFormat")}):p({general:l("FailedToUpdateProfile")})}finally{S(!1)}}},D=()=>{j(!0),setTimeout(()=>{j(!1),t(),p({}),w("")},300)};return C.useEffect(()=>{if(e)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[e]),e?o.jsx(My,{isClosing:M,children:o.jsxs(jy,{isClosing:M,children:[o.jsxs(Ny,{children:[o.jsx(Py,{children:o.jsx(po,{width:25,height:25,fill:"var(--textColor)"})}),o.jsx(Iy,{children:l("EditProfile")}),o.jsx(Ly,{onClick:D,children:o.jsx(Ty,{})})]}),o.jsx(Ey,{}),o.jsxs(Dy,{onSubmit:E,children:[o.jsxs(hc,{children:[o.jsx(fc,{htmlFor:"name",children:l("Name")}),o.jsx(Ed,{type:"text",id:"name",name:"name",value:c.name,onChange:L,placeholder:l("EnterYourName"),disabled:v}),f.name&&o.jsx(Ll,{children:f.name})]}),o.jsxs(hc,{children:[o.jsx(fc,{htmlFor:"username",children:l("Username")}),o.jsx(Ed,{type:"text",id:"username",name:"username",value:c.username,onChange:L,placeholder:l("EnterYourUsername"),disabled:v}),f.username&&o.jsx(Ll,{children:f.username})]}),o.jsxs(hc,{children:[o.jsx(fc,{htmlFor:"bio",children:l("DASH_Bio")}),o.jsx(Ry,{id:"bio",name:"bio",value:c.bio,onChange:L,placeholder:l("DASH_BioPlaceholder"),maxLength:160,disabled:v}),o.jsxs(Oy,{children:[160-(((q=c.bio)==null?void 0:q.length)||0)," ",l("DASH_BioChars")]}),f.bio&&o.jsx(Ll,{children:f.bio})]}),(a==null?void 0:a.hasSpotify)&&o.jsxs(Hy,{children:[o.jsxs($y,{children:[o.jsx(Us,{size:14}),l("DASH_ShowSpotify")]}),o.jsx(qy,{type:"button",$active:c.showSpotifyProfile,disabled:v,onClick:()=>d(V=>({...V,showSpotifyProfile:!V.showSpotifyProfile}))})]}),f.general&&o.jsx(Ll,{children:f.general}),m&&o.jsx(Uy,{children:m}),o.jsxs(Fy,{children:[o.jsx(zy,{type:"button",onClick:D,disabled:v,children:l("Cancel")}),o.jsx(By,{type:"submit",disabled:v,children:l(v?"Saving":"SaveChanges")})]})]})]})}):null}const Yy=Rt`
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
`,Dd=b.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
    padding-bottom: 20px;
`,Gy=b.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 100px;

    @media (max-width: 600px) {
        width: 90%;
        margin-top: 80px;
    }
`,Wy=b.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-inline: 10px;

    @media (max-width: 600px) { width: 90%; }
`,Xy=b.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) { flex-wrap: wrap; }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;b.div`
    padding-left: 110px;
    margin-top: 10px;

    @media (max-width: 900px) { padding-left: 0; margin-top: 12px; }
`;const Zy=b.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 600px) { width: 72px; height: 72px; }
`,Jy=b.div`
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
`,Qy=b.div`
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
`,Ky=b.h2`
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
`;b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
`;const e_=b.p`
    color: var(--textColor);
    font-size: 0.95em;
    font-weight: 600;
    opacity: 0.6;
    margin: 4px 0 0;
`;b.div`
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
`;b(Mh)`  width:14px; height:14px; fill:var(--backgroundColor); `;b(Us)` width:14px; height:14px; fill:var(--backgroundColor); `;const t_=b.p`
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
`,Rd=b.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 12px;

    @media (max-width: 600px) { justify-content: center; }
`,r_=b.a`
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
`,n_=b(Us)`
    width:14px;
    height:14px;
    fill:#fff; 
`,i_=b.button`
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
`,o_=b.div`
    display: flex;
    gap: 10px;
    margin-left: auto;

    @media (max-width: 900px) { margin-left: 0; margin-top: 16px; }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
        margin-top: 16px;
    }
`,Od=b.button`
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
`,a_=b.div`
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
`,pc=b.button`
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
`,s_=b.div`
    width: 80%;
    margin-top: 16px;
    animation: ${Yy} 0.25s ease;

    @media (max-width: 600px) { width: 90%; }
`,l_=b.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; }
`,c_=b.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`,u_=b.div`
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--AccentColor) 15%, transparent);
    color: var(--AccentColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,d_=b.p`
    font-size: 1.8em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
`,h_=b.p`
    font-size: 0.8em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    font-weight: 600;
`,f_=b.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
`,p_=b.p`
    font-size: 0.8em;
    font-weight: 700;
    opacity: 0.45;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin: 28px 0 0 0;
    color: var(--textColor);
`,m_=b.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 14px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover { transform: translateY(-3px); }
`,g_=b.div`
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
`,x_=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
`,v_=b.p`
    font-size: 0.75em;
    font-weight: 700;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
    color: var(--textColor);
`,b_=b.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,w_=b.p`
    font-size: 0.82em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,y_=b.p`
    font-size: 0.85em;
    font-weight: 700;
    margin: 0;
    color: var(--AccentColor);
`,Fd=b.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; gap: 12px; }
`,zd=b.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`,__=b.div`
    display: flex;
    gap: 6px;
`,mc=b.button`
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
`,C_=b.input`
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
`,S_=b.div`
    display: flex;
    width: 80%;

    @media (max-width: 600px) { width: 90%; }
`,A_=b.div`
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
`,k_=b.div`
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
`,M_=b.img`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);

    @media (max-width: 600px) { width: 58px; height: 58px; }
`,j_=b.div`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    background: ${({$bg:e})=>e||"rgba(128,128,128,0.2)"};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) { width: 58px; height: 58px; }
`,N_=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,I_=b.span`
    font-size: 0.63em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--AccentColor);
    margin-bottom: 3px;
`,T_=b.p`
    font-size: 1.1em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 600px) { font-size: 0.95em; }
`,L_=b.p`
    font-size: 0.83em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,qa=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    opacity: 0.45;
    gap: 12px;
    text-align: center;
`,Zc=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,Va=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,P_=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60dvh;
    gap: 20px;
    opacity: 0.45;
    padding: 40px 20px;
    text-align: center;
`,E_=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    max-width: 340px;
    margin: 0;
`,D_=b.div`
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
`,Bd=b.button`
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
`,Pl=(e=0)=>e>=1e6?(e/1e6).toFixed(1).replace(".0","")+"M":e>=1e3?(e/1e3).toFixed(1).replace(".0","")+"k":String(e);function R_({stats:e,isOwner:t}){var c,d,f;const{t:r}=Pt(),n=ln();if(!e)return null;if(e.totalPosters===0)return o.jsxs(Zc,{children:[o.jsx(Qa,{width:"20%"}),o.jsx(qa,{children:o.jsx(Va,{children:r(t?"DASH_StatsEmpty":"DASH_StatsEmptyPublic")})})]});const a=[{label:r("DASH_TotalPosters"),value:e.totalPosters,icon:o.jsx(Th,{size:22})},{label:r("DASH_TotalDownloads"),value:e.totalDownloads,icon:o.jsx(C2,{size:22})},{label:r("DASH_TotalViews"),value:e.totalViews,icon:o.jsx(Yl,{size:22})},{label:r("DASH_TotalFavorites"),value:e.totalFavorites,icon:o.jsx(Vo,{size:22})}],l=[{label:r("DASH_MostFavorited"),poster:e.mostFavorited,stat:Pl((c=e.mostFavorited)==null?void 0:c.favoritesCount),icon:o.jsx(Vo,{size:13})},{label:r("DASH_MostDownloaded"),poster:e.mostDownloaded,stat:Pl((d=e.mostDownloaded)==null?void 0:d.downloads),icon:o.jsx(C2,{size:13})},{label:r("DASH_MostViewed"),poster:e.mostViewed,stat:Pl((f=e.mostViewed)==null?void 0:f.views),icon:o.jsx(Yl,{size:13})}].filter(p=>p.poster);return o.jsxs(o.Fragment,{children:[o.jsx(l_,{children:a.map(p=>o.jsxs(c_,{children:[o.jsx(u_,{children:p.icon}),o.jsxs("div",{children:[o.jsx(d_,{children:Pl(p.value)}),o.jsx(h_,{children:p.label})]})]},p.label))}),l.length>0&&o.jsxs(o.Fragment,{children:[o.jsx(p_,{children:r("DASH_TopHighlights")}),o.jsx(f_,{children:l.map(p=>{var v;return o.jsxs(m_,{onClick:()=>n(`/p/${p.poster._id}`),children:[o.jsx(g_,{children:(v=p.poster.posterJson)!=null&&v.albumCover?o.jsx("img",{src:p.poster.posterJson.albumCover,alt:""}):null}),o.jsxs(x_,{children:[o.jsx(v_,{children:p.label}),o.jsx(b_,{children:p.poster.albumName}),o.jsx(w_,{children:p.poster.artistsName}),o.jsxs(y_,{style:{display:"flex",alignItems:"center",gap:4},children:[p.icon," ",p.stat]})]})]},p.label)})})]})]})}function O_(){var ut,Mt;const e=ln(),{username:t}=lh(),{user:r,loading:n,logout:a,isAuthenticated:s}=mi(),{t:l}=Pt(),c=s&&((ut=r==null?void 0:r.username)==null?void 0:ut.toLowerCase())===(t==null?void 0:t.toLowerCase()),[d,f]=C.useState(null),[p,v]=C.useState(!1),[S,m]=C.useState(!1),[w,M]=C.useState(!1),[j,A]=C.useState("myposters"),[L,E]=C.useState([]),[D,q]=C.useState(1),[V,K]=C.useState(!1),[X,I]=C.useState(!1),[Z,_]=C.useState(!1),[P,F]=C.useState([]),[$,re]=C.useState(1),[se,fe]=C.useState(!1),[ne,ge]=C.useState(!1),[Me,we]=C.useState(!1),[k,H]=C.useState(null),[J,te]=C.useState(!1),[oe,le]=C.useState(!1),[pe,ve]=C.useState(null),[ue,ke]=C.useState(null),[Te,Re]=C.useState(null),[de,U]=C.useState(!1),[qe,Ye]=C.useState("all"),[De,_e]=C.useState("");C.useEffect(()=>{window.scrollTo(0,0)},[]),C.useEffect(()=>{n||window.scrollTo({top:0,left:0,behavior:"instant"})},[n]),C.useEffect(()=>{t&&(m(!1),c?(_2(t,!0),rt.getUserProfile().then(be=>{var He;f(be.user),(He=be.user)!=null&&He.pinnedPosterId&&ve(be.user.pinnedPosterId)}).catch(()=>{var be;m(!0),r&&f({name:r.name,username:r.username,avatar:r.avatar,bio:"",badge:r.badge||null,badgeProgress:null,isAdmin:((be=r.permissions)==null?void 0:be.includes("admin"))||!1,hasSpotify:!1,hasGoogle:!1})})):rt.getUserPublicProfile(t,{page:1,limit:12}).then(be=>{_2(t,!1),f({name:be.user.name,username:be.user.username,avatar:be.user.avatar,bio:be.user.bio||"",badge:be.user.badge,badgeProgress:be.user.badgeProgress||null,isAdmin:be.user.isAdmin||!1,hasSpotify:be.user.hasSpotify,spotifyId:be.user.spotifyId||null,hasGoogle:!1,pinnedPosterId:be.user.pinnedPosterId||null,posterCount:be.user.posterCount,totalDownloads:be.user.totalDownloads,totalFavorites:be.user.totalFavorites}),be.user.pinnedPosterId&&ve(be.user.pinnedPosterId),be.pinnedPoster&&ke(be.pinnedPoster),E(be.posters||[]),q(be.page||1),K(be.hasMore??!1),_(!0),v(!1)}).catch(be=>{be.status===404?v(!0):m(!0)}))},[s,n,r,t]),C.useEffect(()=>{c&&(!s||!pe||rt.getUserPosters({page:1,limit:20}).then(be=>{const Be=(be.posters||[]).filter(gt=>{var Ot;return(Ot=gt.posterJson)==null?void 0:Ot.albumCover}).find(gt=>gt._id===pe);Be&&ke(Be)}).catch(()=>{}))},[s,pe,c]),C.useEffect(()=>{c?(j==="myposters"&&!Z&&Ue(1,!1),j==="favorites"&&!Me&&Ge(1,!1),j==="stats"&&!oe&&Fe()):j==="stats"&&!oe&&wt()},[j,c]);const Ue=C.useCallback(async(be,He)=>{I(!0);try{const Be=await rt.getUserPosters({page:be,limit:12});E(gt=>He?[...gt,...Be.posters]:Be.posters),q(be),K(Be.hasMore??!1),_(!0)}catch{}finally{I(!1)}},[]),Pe=C.useCallback(async(be,He)=>{if(t){I(!0);try{const Be=await rt.getUserPublicProfile(t,{page:be,limit:12});E(gt=>He?[...gt,...Be.posters||[]]:Be.posters||[]),q(be),K(Be.hasMore??!1),_(!0)}catch{}finally{I(!1)}}},[t]),Ge=C.useCallback(async(be,He)=>{ge(!0);try{const Be=await rt.getUserFavorites({page:be,limit:12});F(gt=>He?[...gt,...Be.posters]:Be.posters),re(be),fe(Be.hasMore??!1),we(!0)}catch{}finally{ge(!1)}},[]),Fe=C.useCallback(async()=>{te(!0);try{const be=await rt.getUserStats();H(be.stats),le(!0)}catch{}finally{te(!1)}},[]),wt=C.useCallback(async()=>{if(t){te(!0);try{const be=await rt.getUserPublicStats(t);H(be.stats),le(!0)}catch{}finally{te(!1)}}},[t]),lt=C.useCallback(async be=>{const He=pe===be?null:be;if(ve(He),He){U3(t,be);const Be=L.find(gt=>gt._id===He);Be&&ke(Be)}else ke(null);try{await rt.setPinnedPoster(He)}catch{ve(pe)}},[pe,L]),Qe=async(be,He)=>{try{await rt.updatePosterVisibility(be,He),$3(t,be,He),E(Be=>Be.map(gt=>gt._id===be?{...gt,visibility:He}:gt))}catch{}},mt=be=>{Re(be),U(!1)},et=()=>{U(!0),setTimeout(()=>{Re(null),U(!1)},300)},ze=async()=>{if(Te)try{await rt.deletePoster(Te._id),H3(t,Te._id,Te.albumName),E(be=>be.filter(He=>He._id!==Te._id)),k&&H(be=>({...be,totalPosters:Math.max(0,be.totalPosters-1)}))}catch{}finally{et()}},$e=async be=>{try{await rt.toggleFavorite(be),F(He=>He.filter(Be=>Be._id!==be)),k&&H(He=>({...He,totalFavorites:Math.max(0,He.totalFavorites-1)}))}catch{}},We=async()=>{await a(),e("/login")};if(C.useEffect(()=>{p&&e("/error")},[p,e]),n||p)return o.jsx(r0,{isVisible:!0,initialFade:!0});if(S&&!d)return o.jsx(Dd,{children:o.jsxs(P_,{children:[o.jsx(l0,{width:"25%"}),o.jsx(E_,{children:l("PROFILE_FetchError")})]})});const ct=(d==null?void 0:d.name)||(r==null?void 0:r.name)||"",St=c&&qe!=="all"?L.filter(be=>be.visibility===qe):L,Ve=De.trim()?P.filter(be=>{var Be,gt,Ot,Et,ht,jt;const He=De.toLowerCase();return((Be=be.albumName)==null?void 0:Be.toLowerCase().includes(He))||((gt=be.artistsName)==null?void 0:gt.toLowerCase().includes(He))||((Et=(Ot=be.authorId)==null?void 0:Ot.name)==null?void 0:Et.toLowerCase().includes(He))||((jt=(ht=be.authorId)==null?void 0:ht.username)==null?void 0:jt.toLowerCase().includes(He))}):P;return o.jsxs(Dd,{children:[o.jsx(Gy,{children:o.jsxs(Xy,{children:[d!=null&&d.avatar?o.jsx(Zy,{src:d.avatar,alt:ct}):o.jsx(Jy,{children:ct.charAt(0).toUpperCase()}),o.jsxs(Qy,{children:[o.jsxs(Ky,{children:[ct,o.jsxs(o.Fragment,{children:[(d==null?void 0:d.badge)&&o.jsx(Is,{badge:d.badge,badgeProgress:d.badgeProgress,isOwner:c,size:25}),((d==null?void 0:d.isAdmin)||c&&((Mt=r==null?void 0:r.permissions)==null?void 0:Mt.includes("admin")))&&o.jsx(Is,{badge:"admin",size:25})]})]}),o.jsxs(e_,{children:["@",(d==null?void 0:d.username)||(r==null?void 0:r.username)]})]}),c&&o.jsxs(o_,{children:[o.jsx(Od,{$variant:"outline",onClick:()=>{F3(t),M(!0)},children:l("EditProfile")}),o.jsx(Od,{onClick:We,children:l("Logout")})]})]})}),o.jsxs(Wy,{children:[(d==null?void 0:d.bio)&&o.jsx(t_,{children:d.bio}),d!==null&&c&&!(d!=null&&d.hasSpotify)&&o.jsx(Rd,{children:o.jsxs(i_,{onClick:()=>{B3(t),window.location.href=rt.getSpotifyAuthUrl()},children:[o.jsx(Us,{size:13}),l("DASH_ConnectSpotify")]})}),d!==null&&(d==null?void 0:d.hasSpotify)&&(c?d==null?void 0:d.showSpotifyProfile:!0)&&o.jsx(Rd,{children:o.jsxs(r_,{href:`https://open.spotify.com/user/${d.spotifyId}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(n_,{size:13}),l("DASH_OpenSpotify")]})})]}),ue&&(()=>{const be=ue.posterJson||{},He=be.albumCover,Be=be.backgroundColor;return o.jsx(S_,{children:o.jsxs(A_,{$bg:Be,onClick:()=>e(`/p/${ue._id}`),children:[o.jsx(k_,{$bg:Be,children:He?o.jsx(M_,{src:He,alt:ue.albumName}):o.jsx(j_,{$bg:Be})}),o.jsxs(N_,{children:[o.jsx(I_,{children:l("DASH_FeaturedPoster")}),o.jsx(T_,{children:ue.albumName}),o.jsx(L_,{children:ue.artistsName})]})]})})})(),S&&d&&o.jsx(D_,{children:l("PROFILE_PartialError")}),o.jsxs(a_,{children:[o.jsx(pc,{$active:j==="myposters",onClick:()=>A("myposters"),children:l(c?"DASH_MyPosters":"DASH_Posters")}),c&&o.jsxs(pc,{$active:j==="favorites",onClick:()=>A("favorites"),children:[o.jsx(Vo,{size:18}),l("DASH_Favorites")]}),o.jsxs(pc,{$active:j==="stats",onClick:()=>A("stats"),children:[o.jsx(Th,{size:20}),l("DASH_Stats")]})]}),o.jsxs(s_,{children:[j==="myposters"&&(X&&!Z?o.jsx(qa,{children:o.jsx(Va,{children:"…"})}):o.jsxs(o.Fragment,{children:[c&&o.jsx(zd,{children:o.jsxs(__,{children:[o.jsx(mc,{$active:qe==="all",onClick:()=>Ye("all"),children:l("DASH_All")}),o.jsx(mc,{$active:qe==="public",onClick:()=>Ye("public"),children:l("DASH_Public")}),o.jsx(mc,{$active:qe==="private",onClick:()=>Ye("private"),children:l("DASH_Private")})]})}),St.length===0?o.jsxs(Zc,{children:[o.jsx(Qa,{width:"20%"}),o.jsx(qa,{children:o.jsx(Va,{children:l(c?"DASH_NoPosters":"DASH_NoPublicPosters")})})]}):o.jsx(Fd,{children:St.map(be=>o.jsx(Ec,{poster:be,variant:c?"myposters":"community",isOwner:c,onDelete:c?mt:void 0,onVisibilityChange:c?Qe:void 0,onPin:c?lt:void 0,pinned:be._id===pe},be._id))}),V&&o.jsx(Bd,{onClick:()=>(c?Ue:Pe)(D+1,!0),disabled:X,children:X?"…":l("COMMUNITY_LoadMore")})]})),j==="favorites"&&(ne&&!Me?o.jsx(qa,{children:o.jsx(Va,{children:"…"})}):o.jsxs(o.Fragment,{children:[o.jsx(zd,{children:o.jsx(C_,{value:De,onChange:be=>_e(be.target.value),placeholder:l("COMMUNITY_SearchPlaceholder")||"Buscar..."})}),Ve.length===0?o.jsxs(Zc,{children:[o.jsx(Qa,{width:"20%"}),o.jsx(qa,{children:o.jsx(Va,{children:l("DASH_NoFavorites")})})]}):o.jsx(Fd,{children:Ve.map(be=>o.jsx(Ec,{poster:be,variant:"favorites",isOwner:c,onUnfavorite:$e},be._id))}),se&&!De&&o.jsx(Bd,{onClick:()=>Ge($+1,!0),disabled:ne,children:ne?"…":l("COMMUNITY_LoadMore")})]})),j==="stats"&&(J?o.jsx(qa,{children:o.jsx(Va,{children:"…"})}):o.jsx(R_,{stats:k,isOwner:c}))]},j),c&&Te&&o.jsx(zs,{title:l("DASH_ConfirmDeleteTitle"),paragraph:l("DASH_ConfirmDelete"),confirmText:l("DASH_Delete"),onConfirm:ze,cancelText:l("Cancel"),onCancel:et,canClose:!0,isClosing:de}),c&&o.jsx(Vy,{isOpen:w,onClose:()=>M(!1),onProfileUpdate:()=>rt.getUserProfile().then(be=>f(be.user)).catch(()=>{}),initialBio:(d==null?void 0:d.bio)||""})]})}const F_=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:a=!1,onClick:s})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[o.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),o.jsx("path",{fill:n,style:{animation:a?"pulse 2s infinite":"none",cursor:a?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),qf=document.createElement("style");qf.textContent=`
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
`;document.head.appendChild(qf);const z_="/assets/kanye.BMPu-Gq3.png",B_="/assets/runaway.DjODmQSR.mp3",Ud=()=>{const e=ln(),{t}=Pt(),[r,n]=C.useState(0),a=C.useRef(null),[s,l]=C.useState(!1),c=()=>{n(r+1),console.log(r)},d=()=>{a.current&&(a.current.loop=!0,a.current.paused?(a.current.play(),l(!0)):(a.current.pause(),l(!1)))};return o.jsxs(U_,{playing:s,children:[o.jsx(F_,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!s,onClick:c}),o.jsxs(Y_,{children:[o.jsx(gc,{playing:s,active:r>=1}),o.jsx(gc,{playing:s,active:r>=2}),o.jsx(gc,{playing:s,active:r>=3})]}),o.jsx(H_,{children:t("errorTitle")}),o.jsx($_,{children:t("errorMessage")}),o.jsx(q_,{playing:s,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&o.jsxs(o.Fragment,{children:[o.jsx(V_,{src:z_,alt:"Kanye",onClick:d}),o.jsx("audio",{ref:a,src:B_})]})]})},U_=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,H_=b.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,$_=b.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,q_=b.button`
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
`,V_=b.img`
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
`,Y_=b.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,gc=b.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Hs=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`,da=b.h2`
  font-size: 1.4em;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.15em;
  }
`,Vf=b.input`
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
`,M0=b.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`,_s=b.button`
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
`,Es=b.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85em;

  @media (max-width: 640px) {
    font-size: 0.78em;
  }
`,Bt=b.th`
  text-align: left;
  padding: 10px 12px;
  border-bottom: 2px solid var(--borderColor);
  font-weight: 700;
  white-space: nowrap;
  color: var(--textSecondary);
  font-size: 0.85em;
`,Ut=b.td`
  padding: 10px 12px;
  border-bottom: 1px solid var(--borderColor);
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`,Ri=b.tr`
  ${({$selected:e})=>e&&"background: color-mix(in srgb, var(--AccentColor) 8%, transparent);"}
  &:hover { background: var(--glassBackground); }
`,En=b.button`
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
`,qo=b.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: 700;
  background: ${({$variant:e})=>e==="active"?"rgba(40, 167, 69, 0.15)":e==="suspended"?"rgba(220, 53, 69, 0.15)":e==="admin"?"rgba(223, 109, 64, 0.15)":e==="public"?"rgba(40, 167, 69, 0.15)":e==="private"?"rgba(255, 193, 7, 0.15)":e==="deleted"?"rgba(220, 53, 69, 0.15)":"var(--glassBackground)"};
  color: ${({$variant:e})=>e==="active"?"#28a745":e==="suspended"?"#dc3545":e==="admin"?"#df6d40":e==="public"?"#28a745":e==="private"?"#ffc107":e==="deleted"?"#dc3545":"var(--textColor)"};
`;b.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 20px;
  background: var(--glassBackground);
`;b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }
`;b.p`
  font-size: 0.78em;
  color: var(--textSecondary);
  margin: 0 0 4px;
  font-weight: 600;
`;b.p`
  font-size: 1.6em;
  font-weight: 800;
  margin: 0;
`;const j0=b.button`
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
`,pa=b.p`
  text-align: center;
  color: var(--textSecondary);
  padding: 40px 0;
  font-size: 0.9em;
`,Yf=b.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,Ds=b.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
  border: 1px solid var(--borderColor);
`,Cs=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,Ss=b.div`
  background: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90vw;
`,As=b.h3`
  margin: 0 0 16px;
  font-weight: 700;
  font-size: 1.1em;
`,ks=b.input`
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
`,G_=b.textarea`
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
`,W_=b.select`
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
`,Ms=b.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`,Ei=b.button`
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid ${({$primary:e})=>e?"var(--AccentColor)":"var(--borderColor)"};
  background: ${({$primary:e})=>e?"var(--AccentColor)":"transparent"};
  color: ${({$primary:e})=>e?"#fff":"var(--textColor)"};
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;

  &:hover { opacity: 0.8; }
`;b.div`
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
`;b.span`
  font-weight: 700;
  color: var(--AccentColor);
  flex: 1;
  min-width: 100px;
`;b.select`
  padding: 5px 8px;
  border-radius: 7px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  cursor: pointer;
  &:focus { border-color: var(--AccentColor); }
`;const xc=b.section`
  margin-bottom: 28px;
`,vc=b.h3`
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
`,bc=b.div`
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
`,qn=b.div`
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
`,Vn=b.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`,Yn=b.span`
  font-size: 1.7em;
  font-weight: 800;
  line-height: 1.2;
`,X_=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`,wc=b.div`
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({$bg:e})=>e||"var(--glassBackground)"};
  border: 1px solid var(--borderColor);
`,yc=b.div`
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
`,_c=b.div`
  display: flex;
  flex-direction: column;
`,Cc=b.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`,Sc=b.span`
  font-size: 0.78em;
  color: var(--textSecondary);
  font-weight: 600;
`;function Z_(){var s,l;const{t:e}=Pt(),[t,r]=C.useState(null),[n,a]=C.useState(!0);return C.useEffect(()=>{wr.getOverview().then(r).catch(()=>{}).finally(()=>a(!1))},[]),n?o.jsx(pa,{children:e("Loading")}):t?o.jsxs(o.Fragment,{children:[o.jsx(Hs,{children:o.jsx(da,{children:e("ADMIN_Overview")})}),o.jsxs(X_,{children:[o.jsxs(wc,{children:[o.jsx(yc,{children:o.jsx(Yl,{})}),o.jsxs(_c,{children:[o.jsx(Cc,{children:t.engagement.totalViews.toLocaleString()}),o.jsx(Sc,{children:e("ADMIN_Views")})]})]}),o.jsxs(wc,{children:[o.jsx(yc,{children:o.jsx(Z3,{})}),o.jsxs(_c,{children:[o.jsx(Cc,{children:t.engagement.totalDownloads.toLocaleString()}),o.jsx(Sc,{children:e("ADMIN_Downloads")})]})]}),o.jsxs(wc,{children:[o.jsx(yc,{children:o.jsx(Vo,{})}),o.jsxs(_c,{children:[o.jsx(Cc,{children:t.engagement.totalFavorites.toLocaleString()}),o.jsx(Sc,{children:e("ADMIN_Favorites")})]})]})]}),o.jsxs(xc,{children:[o.jsxs(vc,{children:[o.jsx(Ch,{})," ",e("ADMIN_Users")]}),o.jsxs(bc,{$cols:4,children:[o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_TotalUsers")}),o.jsx(Yn,{children:t.users.total})]}),o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_ActiveUsers")}),o.jsx(Yn,{children:t.users.active})]}),o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_SuspendedUsers")}),o.jsx(Yn,{children:t.users.suspended})]}),o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_Admins")}),o.jsx(Yn,{children:t.users.admins})]})]})]}),o.jsxs(xc,{children:[o.jsxs(vc,{children:[o.jsx(_h,{})," ",e("ADMIN_Posters")]}),o.jsxs(bc,{$cols:4,children:[o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_TotalPosters")}),o.jsx(Yn,{children:t.posters.total})]}),o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_PublicPosters")}),o.jsx(Yn,{children:t.posters.public})]}),o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_PrivatePosters")}),o.jsx(Yn,{children:t.posters.private})]}),o.jsxs(qn,{children:[o.jsx(Vn,{children:e("ADMIN_DeletedPosters")}),o.jsx(Yn,{children:t.posters.deleted})]})]})]}),o.jsxs(xc,{children:[o.jsxs(vc,{children:[o.jsx(i4,{})," ",e("ADMIN_Last30d")]}),o.jsxs(bc,{$cols:4,children:[o.jsxs(qn,{children:[o.jsxs(Vn,{children:[e("ADMIN_Last7d")," — ",e("ADMIN_Users")]}),o.jsx(Yn,{children:t.users.last7d})]}),o.jsxs(qn,{children:[o.jsxs(Vn,{children:[e("ADMIN_Last30d")," — ",e("ADMIN_Users")]}),o.jsx(Yn,{children:t.users.last30d})]}),o.jsxs(qn,{children:[o.jsxs(Vn,{children:[e("ADMIN_Last7d")," — ",e("ADMIN_Posters")]}),o.jsx(Yn,{children:t.posters.last7d})]}),o.jsxs(qn,{children:[o.jsxs(Vn,{children:[e("ADMIN_Last30d")," — ",e("ADMIN_Posters")]}),o.jsx(Yn,{children:t.posters.last30d})]})]})]}),((s=t.top5Posters)==null?void 0:s.length)>0&&o.jsxs(o.Fragment,{children:[o.jsx(da,{style:{fontSize:"1.1em",marginBottom:12,marginTop:8},children:e("ADMIN_TopPosters")}),o.jsx(Ds,{children:o.jsxs(Es,{children:[o.jsx("thead",{children:o.jsxs(Ri,{children:[o.jsx(Bt,{children:e("ADMIN_Album")}),o.jsx(Bt,{children:e("ADMIN_Artist")}),o.jsx(Bt,{children:e("ADMIN_Score")}),o.jsx(Bt,{children:e("ADMIN_Views")}),o.jsx(Bt,{children:e("ADMIN_Downloads")})]})}),o.jsx("tbody",{children:t.top5Posters.map(c=>o.jsxs(Ri,{children:[o.jsx(Ut,{children:c.albumName}),o.jsx(Ut,{children:c.artistsName}),o.jsx(Ut,{children:c.popularityScore}),o.jsx(Ut,{children:c.views}),o.jsx(Ut,{children:c.downloads})]},c._id))})]})})]}),((l=t.top5Users)==null?void 0:l.length)>0&&o.jsxs(o.Fragment,{children:[o.jsx(da,{style:{fontSize:"1.1em",marginBottom:12,marginTop:24},children:e("ADMIN_TopUsers")}),o.jsx(Ds,{children:o.jsxs(Es,{children:[o.jsx("thead",{children:o.jsxs(Ri,{children:[o.jsx(Bt,{children:e("ADMIN_Name")}),o.jsx(Bt,{children:e("ADMIN_Username")}),o.jsx(Bt,{children:e("ADMIN_Badge")}),o.jsx(Bt,{children:e("ADMIN_Score")})]})}),o.jsx("tbody",{children:t.top5Users.map(c=>o.jsxs(Ri,{children:[o.jsx(Ut,{children:c.name}),o.jsx(Ut,{children:c.username}),o.jsx(Ut,{children:c.badge||"—"}),o.jsx(Ut,{children:c.badgeScore})]},c._id))})]})})]})]}):o.jsx(pa,{children:e("ADMIN_NoResults")})}const J_=["","active","suspended"];function Q_(){const{t:e}=Pt(),{user:t}=mi(),[r,n]=C.useState([]),[a,s]=C.useState(0),[l,c]=C.useState(1),[d,f]=C.useState(!1),[p,v]=C.useState(""),[S,m]=C.useState(""),[w,M]=C.useState(!0),[j,A]=C.useState(null),[L,E]=C.useState({name:"",username:"",bio:"",badge:""}),[D,q]=C.useState(null),V=C.useCallback(async(_=1,P=!1)=>{M(!0);try{const F={page:_,limit:30};p.trim()&&(F.search=p.trim()),S&&(F.status=S);const $=await wr.getUsers(F);n(re=>P?[...re,...$.users]:$.users),s($.total),f($.hasMore),c(_)}catch{}M(!1)},[p,S]);C.useEffect(()=>{V(1)},[V]);const K=async(_,P)=>{try{_==="ban"?await wr.banUser(P):_==="unban"?await wr.unbanUser(P):_==="promote"?await wr.promoteUser(P):_==="demote"?await wr.demoteUser(P):_==="forceLogout"?await wr.forceLogout(P):_==="purge"&&await wr.purgeUser(P),q(null),V(1)}catch{}},X=_=>{E({name:_.name||"",username:_.username||"",bio:_.bio||"",badge:_.badge||""}),A(_)},I=async()=>{if(j)try{await wr.editUser(j._id,L),A(null),V(1)}catch{}},Z=_=>_==="active"?e("ADMIN_Active"):_==="suspended"?e("ADMIN_Suspended"):_;return o.jsxs(o.Fragment,{children:[o.jsxs(Hs,{children:[o.jsxs(da,{children:[e("ADMIN_Users")," (",a,")"]}),o.jsx(Vf,{placeholder:e("ADMIN_Search"),value:p,onChange:_=>v(_.target.value)})]}),o.jsx(M0,{children:J_.map(_=>o.jsx(_s,{$active:S===_,onClick:()=>m(_),children:_?Z(_):e("ADMIN_All")},_||"all"))}),r.length===0&&!w?o.jsx(pa,{children:e("ADMIN_NoResults")}):o.jsx(o.Fragment,{children:o.jsx(Ds,{children:o.jsxs(Es,{children:[o.jsx("thead",{children:o.jsxs(Ri,{children:[o.jsx(Bt,{children:e("ADMIN_Name")}),o.jsx(Bt,{children:e("ADMIN_Username")}),o.jsx(Bt,{children:e("ADMIN_Email")}),o.jsx(Bt,{children:e("ADMIN_Status")}),o.jsx(Bt,{children:e("ADMIN_Role")}),o.jsx(Bt,{children:e("ADMIN_Badge")}),o.jsx(Bt,{children:e("ADMIN_Actions")})]})}),o.jsx("tbody",{children:r.map(_=>{var $;const P=($=_.permissions)==null?void 0:$.includes("admin"),F=_._id===(t==null?void 0:t._id);return o.jsxs(Ri,{children:[o.jsx(Ut,{children:_.name}),o.jsx(Ut,{children:o.jsxs("span",{style:{cursor:"pointer",fontWeight:600},onClick:()=>window.open(`/u/${_.username}`,"_blank"),title:e("ADMIN_ViewProfile"),children:[_.username," ↗"]})}),o.jsx(Ut,{children:_.email}),o.jsx(Ut,{children:o.jsx(qo,{$variant:_.status,children:Z(_.status)})}),o.jsx(Ut,{children:P&&o.jsx(qo,{$variant:"admin",children:"Admin"})}),o.jsx(Ut,{children:_.badge||"—"}),o.jsx(Ut,{children:o.jsxs(Yf,{children:[o.jsx(En,{onClick:()=>X(_),children:e("ADMIN_Edit")}),_.status==="active"&&!F&&o.jsx(En,{$danger:!0,onClick:()=>q({action:"ban",id:_._id,label:e("ADMIN_Ban")}),children:e("ADMIN_Ban")}),_.status==="suspended"&&o.jsx(En,{onClick:()=>q({action:"unban",id:_._id,label:e("ADMIN_Unban")}),children:e("ADMIN_Unban")}),_.status==="suspended"&&o.jsx(En,{$danger:!0,onClick:()=>q({action:"purge",id:_._id,label:e("ADMIN_ConfirmPurgeUser")}),children:e("ADMIN_PurgeUser")}),!P&&_.status==="active"&&o.jsx(En,{onClick:()=>q({action:"promote",id:_._id,label:e("ADMIN_Promote")}),children:e("ADMIN_Promote")}),P&&!F&&o.jsx(En,{onClick:()=>q({action:"demote",id:_._id,label:e("ADMIN_Demote")}),children:e("ADMIN_Demote")}),!F&&o.jsx(En,{onClick:()=>q({action:"forceLogout",id:_._id,label:e("ADMIN_ForceLogout")}),children:e("ADMIN_ForceLogout")})]})})]},_._id)})})]})})}),d&&o.jsx(j0,{onClick:()=>V(l+1,!0),children:e("ADMIN_LoadMore")}),D&&o.jsx(Cs,{onClick:()=>q(null),children:o.jsxs(Ss,{onClick:_=>_.stopPropagation(),children:[o.jsx(As,{children:e("ADMIN_Confirm")}),o.jsx("p",{style:{marginBottom:16,fontSize:"0.9em"},children:D.label}),o.jsxs(Ms,{children:[o.jsx(Ei,{onClick:()=>q(null),children:e("ADMIN_No")}),o.jsx(Ei,{$primary:!0,onClick:()=>K(D.action,D.id),children:e("ADMIN_Yes")})]})]})}),j&&o.jsx(Cs,{onClick:()=>A(null),children:o.jsxs(Ss,{onClick:_=>_.stopPropagation(),children:[o.jsxs(As,{children:[e("ADMIN_Edit")," — ",j.username]}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Name")}),o.jsx(ks,{value:L.name,onChange:_=>E(P=>({...P,name:_.target.value}))}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Username")}),o.jsx(ks,{value:L.username,onChange:_=>E(P=>({...P,username:_.target.value}))}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Bio")}),o.jsx(G_,{value:L.bio,onChange:_=>E(P=>({...P,bio:_.target.value})),rows:3}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Badge")}),o.jsxs(W_,{value:L.badge,onChange:_=>E(P=>({...P,badge:_.target.value})),children:[o.jsxs("option",{value:"",children:["— ",e("ADMIN_NoBadge")," —"]}),o.jsx("option",{value:"creator_bronze",children:e("BADGE_TIER_bronze")}),o.jsx("option",{value:"creator_silver",children:e("BADGE_TIER_silver")}),o.jsx("option",{value:"creator_gold",children:e("BADGE_TIER_gold")}),o.jsx("option",{value:"creator_diamond",children:e("BADGE_TIER_diamond")})]}),o.jsxs(Ms,{children:[o.jsx(Ei,{onClick:()=>A(null),children:e("Cancel")}),o.jsx(Ei,{$primary:!0,onClick:I,children:e("ADMIN_Save")})]})]})})]})}const Ac=b.label`
  font-size: 0.8em;
  font-weight: 600;
  color: var(--textSecondary);
  margin-bottom: 2px;
  display: block;
`,K_=b.span`
  cursor: pointer;
  font-weight: 600;
  &:hover { text-decoration: underline; opacity: 0.8; }
`,eC=b.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  align-items: flex-start;
`,tC=b.div`
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
`,rC=b.div`
  width: 124px;
  height: 175px;
  border-radius: 8px;
  background: var(--borderColor);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: 0.3;
`,nC=b.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 12px;
  font-size: 0.82em;
  flex: 1;
  align-content: start;
`,aa=b.span`
  color: var(--textSecondary);
  font-weight: 700;
  white-space: nowrap;
`,sa=b.span`
  color: var(--textColor);
  word-break: break-word;
`,iC=["","public","private"],oC=["false","true","all"],aC=["recent","popular","views","downloads"];function sC(){var Me,we;const{t:e}=Pt(),[t,r]=C.useState([]),[n,a]=C.useState(0),[s,l]=C.useState(1),[c,d]=C.useState(!1),[f,p]=C.useState(""),[v,S]=C.useState(""),[m,w]=C.useState("false"),[M,j]=C.useState("recent"),[A,L]=C.useState(!0),[E,D]=C.useState(null),[q,V]=C.useState(null),[K,X]=C.useState(null),[I,Z]=C.useState(null),_=C.useCallback(async(k=1,H=!1)=>{L(!0);try{const J={page:k,limit:30,isDeleted:m,sort:M};f.trim()&&(J.search=f.trim()),v&&(J.visibility=v);const te=await wr.getPosters(J);r(oe=>H?[...oe,...te.posters]:te.posters),a(te.total),d(te.hasMore),l(k)}catch{}L(!1)},[f,v,m,M]);C.useEffect(()=>{_(1)},[_]);const P=async(k,H)=>{try{k==="delete"?await wr.deletePoster(H):k==="restore"?await wr.restorePoster(H):k==="purge"?await wr.purgePoster(H):k==="makePublic"?await wr.changeVisibility(H,"public"):k==="makePrivate"&&await wr.changeVisibility(H,"private"),D(null),_(1)}catch{}},F=k=>{V({id:k._id,views:k.views??0,downloads:k.downloads??0,favoritesCount:k.favoritesCount??0})},$=async()=>{if(q)try{await wr.editPoster(q.id,{views:Number(q.views),downloads:Number(q.downloads),favoritesCount:Number(q.favoritesCount)}),V(null),_(1)}catch{}},re=async k=>{X(k),Z(null);try{const H=await wr.getPoster(k._id);Z(H.poster)}catch{}},se=()=>{X(null),Z(null)},fe=k=>k==="public"?e("ADMIN_Public"):k==="private"?e("ADMIN_Private"):k,ne=k=>e(k==="false"?"ADMIN_Active":k==="true"?"ADMIN_Deleted":"ADMIN_All"),ge=k=>k?new Date(k).toLocaleDateString():"—";return o.jsxs(o.Fragment,{children:[o.jsxs(Hs,{children:[o.jsxs(da,{children:[e("ADMIN_Posters")," (",n,")"]}),o.jsx(Vf,{placeholder:e("ADMIN_Search"),value:f,onChange:k=>p(k.target.value)})]}),o.jsxs(M0,{children:[oC.map(k=>o.jsx(_s,{$active:m===k,onClick:()=>w(k),children:ne(k)},k)),o.jsx("span",{style:{width:1,background:"var(--borderColor)",margin:"0 4px"}}),iC.map(k=>o.jsx(_s,{$active:v===k,onClick:()=>S(k),children:k?fe(k):e("ADMIN_All")},k||"allvis")),o.jsx("span",{style:{width:1,background:"var(--borderColor)",margin:"0 4px"}}),aC.map(k=>o.jsx(_s,{$active:M===k,onClick:()=>j(k),children:e(k==="recent"?"ADMIN_Date":k==="popular"?"ADMIN_Score":k==="views"?"ADMIN_Views":"ADMIN_Downloads")},k))]}),t.length===0&&!A?o.jsx(pa,{children:e("ADMIN_NoResults")}):o.jsx(Ds,{children:o.jsxs(Es,{children:[o.jsx("thead",{children:o.jsxs(Ri,{children:[o.jsx(Bt,{children:e("ADMIN_Album")}),o.jsx(Bt,{children:e("ADMIN_Artist")}),o.jsx(Bt,{children:e("ADMIN_Author")}),o.jsx(Bt,{children:e("ADMIN_Visibility")}),o.jsx(Bt,{children:e("ADMIN_Views")}),o.jsx(Bt,{children:e("ADMIN_Downloads")}),o.jsx(Bt,{children:e("ADMIN_Favorites")}),o.jsx(Bt,{children:e("ADMIN_Created")}),o.jsx(Bt,{children:e("ADMIN_Actions")})]})}),o.jsx("tbody",{children:t.map(k=>{var H;return o.jsxs(Ri,{children:[o.jsx(Ut,{children:o.jsx(K_,{onClick:()=>re(k),children:k.albumName})}),o.jsx(Ut,{children:k.artistsName}),o.jsx(Ut,{children:((H=k.authorId)==null?void 0:H.username)||"—"}),o.jsx(Ut,{children:k.isDeleted?o.jsx(qo,{$variant:"deleted",children:e("ADMIN_Deleted")}):o.jsx(qo,{$variant:k.visibility,children:fe(k.visibility)})}),o.jsx(Ut,{children:k.views}),o.jsx(Ut,{children:k.downloads}),o.jsx(Ut,{children:k.favoritesCount}),o.jsx(Ut,{children:ge(k.createdAt)}),o.jsx(Ut,{children:o.jsxs(Yf,{children:[!k.isDeleted&&o.jsxs(o.Fragment,{children:[o.jsx(En,{onClick:()=>F(k),children:e("ADMIN_EditMetrics")}),o.jsx(En,{$danger:!0,onClick:()=>D({action:"delete",id:k._id,label:e("ADMIN_Delete")}),children:e("ADMIN_Delete")}),k.visibility==="public"?o.jsx(En,{onClick:()=>P("makePrivate",k._id),children:e("ADMIN_MakePrivate")}):o.jsx(En,{onClick:()=>P("makePublic",k._id),children:e("ADMIN_MakePublic")})]}),k.isDeleted&&o.jsxs(o.Fragment,{children:[o.jsx(En,{onClick:()=>D({action:"restore",id:k._id,label:e("ADMIN_Restore")}),children:e("ADMIN_Restore")}),o.jsx(En,{$danger:!0,onClick:()=>D({action:"purge",id:k._id,label:e("ADMIN_PurgeConfirm")}),children:e("ADMIN_Purge")})]})]})})]},k._id)})})]})}),c&&o.jsx(j0,{onClick:()=>_(s+1,!0),children:e("ADMIN_LoadMore")}),E&&o.jsx(Cs,{onClick:()=>D(null),children:o.jsxs(Ss,{onClick:k=>k.stopPropagation(),children:[o.jsx(As,{children:e("ADMIN_Confirm")}),o.jsx("p",{style:{marginBottom:16,fontSize:"0.9em"},children:E.label}),o.jsxs(Ms,{children:[o.jsx(Ei,{onClick:()=>D(null),children:e("ADMIN_No")}),o.jsx(Ei,{$primary:!0,onClick:()=>P(E.action,E.id),children:e("ADMIN_Yes")})]})]})}),q&&o.jsx(Cs,{onClick:()=>V(null),children:o.jsxs(Ss,{onClick:k=>k.stopPropagation(),children:[o.jsx(As,{children:e("ADMIN_EditMetrics")}),o.jsx(Ac,{children:e("ADMIN_Views")}),o.jsx(ks,{type:"number",min:"0",value:q.views,onChange:k=>V(H=>({...H,views:k.target.value}))}),o.jsx(Ac,{children:e("ADMIN_Downloads")}),o.jsx(ks,{type:"number",min:"0",value:q.downloads,onChange:k=>V(H=>({...H,downloads:k.target.value}))}),o.jsx(Ac,{children:e("ADMIN_Favorites")}),o.jsx(ks,{type:"number",min:"0",value:q.favoritesCount,onChange:k=>V(H=>({...H,favoritesCount:k.target.value}))}),o.jsxs(Ms,{children:[o.jsx(Ei,{onClick:()=>V(null),children:e("ADMIN_Cancel")}),o.jsx(Ei,{$primary:!0,onClick:$,children:e("ADMIN_Save")})]})]})}),K&&o.jsx(Cs,{onClick:se,children:o.jsxs(Ss,{onClick:k=>k.stopPropagation(),style:{maxWidth:560},children:[o.jsxs(As,{style:{marginBottom:14},children:[K.albumName,o.jsx("span",{style:{fontWeight:400,fontSize:"0.8em",marginLeft:8,opacity:.6},children:K.artistsName})]}),o.jsxs(eC,{children:[o.jsx(tC,{children:(Me=I==null?void 0:I.posterJson)!=null&&Me.albumCover?o.jsx("img",{src:I.posterJson.albumCover,alt:K.albumName}):o.jsx(rC,{children:"🎵"})}),o.jsxs(nC,{children:[o.jsx(aa,{children:e("ADMIN_Author")}),o.jsx(sa,{children:((we=K.authorId)==null?void 0:we.username)||"—"}),o.jsx(aa,{children:e("ADMIN_Status")}),o.jsx(sa,{children:K.isDeleted?o.jsx(qo,{$variant:"deleted",children:e("ADMIN_Deleted")}):o.jsx(qo,{$variant:K.visibility,children:fe(K.visibility)})}),o.jsx(aa,{children:e("ADMIN_Views")}),o.jsx(sa,{children:K.views.toLocaleString()}),o.jsx(aa,{children:e("ADMIN_Downloads")}),o.jsx(sa,{children:K.downloads.toLocaleString()}),o.jsx(aa,{children:e("ADMIN_Favorites")}),o.jsx(sa,{children:K.favoritesCount.toLocaleString()}),o.jsx(aa,{children:e("ADMIN_Created")}),o.jsx(sa,{children:ge(K.createdAt)}),o.jsx(aa,{children:"ID"}),o.jsx(sa,{style:{fontSize:"0.85em",opacity:.6,fontFamily:"monospace"},children:K._id})]})]}),o.jsxs(Ms,{children:[o.jsxs(Ei,{onClick:()=>window.open(`/p/${K._id}`,"_blank"),children:[e("ADMIN_OpenPoster")," ↗"]}),o.jsx(Ei,{$primary:!0,onClick:se,children:e("ADMIN_Close")})]})]})})]})}const lC=["","ban_user","unban_user","delete_poster","restore_poster","change_visibility","edit_poster","promote_admin","demote_admin","force_logout","edit_user"];function cC(){const{t:e}=Pt(),[t,r]=C.useState([]),[n,a]=C.useState(0),[s,l]=C.useState(1),[c,d]=C.useState(!1),[f,p]=C.useState(""),[v,S]=C.useState(!0),m=C.useCallback(async(M=1,j=!1)=>{S(!0);try{const A={page:M,limit:30};f&&(A.action=f);const L=await wr.getLogs(A);r(E=>j?[...E,...L.logs]:L.logs),a(L.total),d(L.hasMore),l(M)}catch{}S(!1)},[f]);C.useEffect(()=>{m(1)},[m]);const w=M=>M?new Date(M).toLocaleString():"—";return o.jsxs(o.Fragment,{children:[o.jsx(Hs,{children:o.jsxs(da,{children:[e("ADMIN_Logs")," (",n,")"]})}),o.jsx(M0,{children:lC.map(M=>o.jsx(_s,{$active:f===M,onClick:()=>p(M),children:M||e("ADMIN_All")},M||"all"))}),t.length===0&&!v?o.jsx(pa,{children:e("ADMIN_NoResults")}):o.jsx(Ds,{children:o.jsxs(Es,{children:[o.jsx("thead",{children:o.jsxs(Ri,{children:[o.jsx(Bt,{children:e("ADMIN_Date")}),o.jsx(Bt,{children:e("ADMIN_Action")}),o.jsx(Bt,{children:e("ADMIN_Admin")}),o.jsx(Bt,{children:e("ADMIN_Target")}),o.jsx(Bt,{children:"IP"})]})}),o.jsx("tbody",{children:t.map(M=>{var j,A;return o.jsxs(Ri,{children:[o.jsx(Ut,{children:w(M.createdAt)}),o.jsx(Ut,{children:o.jsx(qo,{children:M.action})}),o.jsx(Ut,{children:((j=M.adminId)==null?void 0:j.username)||((A=M.adminId)==null?void 0:A._id)||"—"}),o.jsx(Ut,{style:{fontSize:"0.8em",opacity:.7},children:M.targetId}),o.jsx(Ut,{style:{fontSize:"0.8em",opacity:.7},children:M.ip||"—"})]},M._id)})})]})}),c&&o.jsx(j0,{onClick:()=>m(s+1,!0),children:e("ADMIN_LoadMore")})]})}const El=b.section`
  margin-bottom: 28px;
`,Dl=b.h3`
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
`,Rl=b.div`
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
`,Gn=b.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--glassBackground);
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Wn=b.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`,Xn=b.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`,Hd=b.div`
  margin-top: 8px;
`,$d=b.div`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--borderColor);
  overflow: hidden;
`,qd=b.div`
  height: 100%;
  border-radius: 3px;
  background: var(--AccentColor);
  width: ${({$pct:e})=>Math.min(e,100)}%;
  transition: width 0.4s ease;
`,Vd=b.span`
  font-size: 0.68em;
  color: var(--textSecondary);
  margin-top: 4px;
  display: block;
`,uC=512*1024*1024;function dC(){const{t:e}=Pt(),[t,r]=C.useState(null),[n,a]=C.useState(!0);if(C.useEffect(()=>{wr.getHealth().then(r).catch(()=>{}).finally(()=>a(!1))},[]),n)return o.jsx(pa,{children:e("Loading")});if(!t)return o.jsx(pa,{children:e("ADMIN_NoResults")});const s=f=>{const p=Math.floor(f/86400),v=Math.floor(f%86400/3600),S=Math.floor(f%3600/60);return p>0?`${p}d ${v}h ${S}m`:`${v}h ${S}m`},l=f=>{if(f===0||f==null)return"0 B";const p=["B","KB","MB","GB"],v=Math.floor(Math.log(f)/Math.log(1024));return`${(f/Math.pow(1024,v)).toFixed(v>1?2:0)} ${p[v]}`},c=t.storage?t.storage.totalSize/uC*100:0,d=t.memory?t.memory.heapUsed/t.memory.heapTotal*100:0;return o.jsxs(o.Fragment,{children:[o.jsxs(Hs,{children:[o.jsx(da,{children:e("ADMIN_Health")}),o.jsx(qo,{$variant:t.status==="healthy"?"active":"suspended",children:t.status==="healthy"?e("ADMIN_Healthy"):e("ADMIN_Degraded")})]}),o.jsxs(El,{children:[o.jsxs(Dl,{children:[o.jsx(r4,{})," ",e("ADMIN_ServerInfo")]}),o.jsxs(Rl,{$cols:4,children:[o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_Uptime")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:s(t.api.uptimeSeconds)})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_Version")}),o.jsxs(Xn,{style:{fontSize:"1.2em"},children:["v",t.api.version]})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_NodeVersion")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:t.api.nodeVersion||"—"})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_Ping")}),o.jsxs(Xn,{children:[t.mongo.pingMs,"ms"]})]})]})]}),o.jsxs(El,{children:[o.jsxs(Dl,{children:[o.jsx(J3,{})," ",e("ADMIN_Database")]}),o.jsxs(Rl,{$cols:4,children:[o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_MongoStatus")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:t.mongo.connected?"✓ Online":"✗ Offline"})]}),Object.entries(t.collections).map(([f,p])=>o.jsxs(Gn,{children:[o.jsx(Wn,{children:f}),o.jsx(Xn,{children:p.toLocaleString()})]},f))]})]}),t.storage&&o.jsxs(El,{children:[o.jsxs(Dl,{children:[o.jsx(K3,{})," ",e("ADMIN_Storage")]}),o.jsxs(Rl,{$cols:3,children:[o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_DataSize")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:l(t.storage.dataSize)})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_IndexSize")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:l(t.storage.indexSize)})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_TotalSize")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:l(t.storage.totalSize)}),o.jsxs(Hd,{children:[o.jsx($d,{children:o.jsx(qd,{$pct:c})}),o.jsxs(Vd,{children:[c.toFixed(1),"% de 512 MB"]})]})]})]})]}),t.memory&&o.jsxs(El,{children:[o.jsxs(Dl,{children:[o.jsx(Q3,{})," ",e("ADMIN_Memory")]}),o.jsxs(Rl,{$cols:3,children:[o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_RSS")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:l(t.memory.rss)})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:e("ADMIN_HeapUsed")}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:l(t.memory.heapUsed)}),o.jsxs(Hd,{children:[o.jsx($d,{children:o.jsx(qd,{$pct:d})}),o.jsxs(Vd,{children:[d.toFixed(1),"% do heap"]})]})]}),o.jsxs(Gn,{children:[o.jsx(Wn,{children:"Heap Total"}),o.jsx(Xn,{style:{fontSize:"1.2em"},children:l(t.memory.heapTotal)})]})]})]})]})}const hC=["Overview","Users","Posters","Logs","Health"],fC={Overview:V3,Users:Ch,Posters:_h,Logs:X3,Health:Vo},pC=b.div`
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
`,mC=b.nav`
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
`,gC=b.div`
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
`,xC=b.h2`
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
`,vC=b.div`
  height: 1px;
  background: var(--borderColor);
  margin: 0 16px 8px;

  @media (max-width: 900px) {
    margin: 0 8px 6px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`,bC=b.div`
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
`,wC=b.button`
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
`,yC=b.span`
  @media (max-width: 900px) {
    display: none;
  }
`,_C=b.span`
  font-size: 1.15em;
  display: flex;
  align-items: center;
  opacity: ${({$active:e})=>e?1:.6};
  transition: opacity 0.15s ease;
`,CC=b.div`
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
`,SC=b.main`
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
`;function AC(){const{t:e}=Pt(),t=ln(),{user:r}=mi(),[n,a]=C.useState("Overview");return C.useEffect(()=>{var s;r&&!((s=r.permissions)!=null&&s.includes("admin"))&&t("/")},[r,t]),o.jsxs(pC,{children:[o.jsxs(mC,{children:[o.jsx(gC,{children:o.jsx(xC,{children:e("ADMIN_Panel")})}),o.jsx(vC,{}),o.jsx(bC,{children:hC.map(s=>{const l=fC[s],c=n===s;return o.jsxs(wC,{$active:c,onClick:()=>a(s),children:[o.jsx(_C,{$active:c,children:o.jsx(l,{})}),o.jsx(yC,{children:e(`ADMIN_${s}`)})]},s)})}),o.jsx(CC,{children:"Posterfy Admin"})]}),o.jsxs(SC,{children:[n==="Overview"&&o.jsx(Z_,{}),n==="Users"&&o.jsx(Q_,{}),n==="Posters"&&o.jsx(sC,{}),n==="Logs"&&o.jsx(cC,{}),n==="Health"&&o.jsx(dC,{})]})]})}const kC=({children:e})=>{var l;const t=ln(),{user:r,isAuthenticated:n,loading:a}=mi(),s=(l=r==null?void 0:r.permissions)==null?void 0:l.includes("admin");return C.useEffect(()=>{!a&&(!n||!s)&&t("/")},[n,s,a,t]),a?null:n&&s?e:null},MC=()=>(C.useEffect(()=>{A3()},[]),null),Yd=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},N0=()=>"https://posterfy.space"+"/",jC=e=>{const t=N0(),r=Yd(e),n=Yd(t),a=e.includes("://www."),s=e.startsWith("http://");return a||s||r!==n},NC=()=>{const e=window.location.href,t=N0(),r=[];return jC(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},IC=()=>(C.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const a=document.querySelector('meta[name="description"]');(!a||a.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const s=NC();s.isValid||s.issues.forEach(d=>{r.push(`${d.type}: ${d.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),TC=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(C.useEffect(()=>{const a="https://posterfy.space",s=N0(),l=a+"/albuns.png";document.title=e;const c=document.querySelector('meta[name="description"]');c&&c.setAttribute("content",t);const d=document.querySelector('meta[name="keywords"]');d&&d.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",s):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",s),document.head.appendChild(f));const p=document.querySelector('meta[property="og:title"]');p&&p.setAttribute("content",e);const v=document.querySelector('meta[property="og:description"]');v&&v.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",l);const m=document.querySelector('meta[property="og:url"]');m&&m.setAttribute("content",s);const w=document.querySelector('meta[name="twitter:title"]');w&&w.setAttribute("content",e);const M=document.querySelector('meta[name="twitter:description"]');M&&M.setAttribute("content",t);const j=document.querySelector('meta[name="twitter:image"]');j&&j.setAttribute("content",l);const A={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:a+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},L=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');L&&L.remove();const E=document.createElement("script");E.type="application/ld+json",E.id="dynamic-structured-data",E.innerHTML=JSON.stringify(A),document.head.appendChild(E)},[e,t,r]),null);var LC="1.3.14";function Gf(e,t,r){return Math.max(e,Math.min(t,r))}function PC(e,t,r){return(1-r)*e+r*t}function EC(e,t,r,n){return PC(e,t,1-Math.exp(-r*n))}function DC(e,t){return(e%t+t)%t}var RC=class{constructor(){Ee(this,"isRunning",!1);Ee(this,"value",0);Ee(this,"from",0);Ee(this,"to",0);Ee(this,"currentTime",0);Ee(this,"lerp");Ee(this,"duration");Ee(this,"easing");Ee(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=Gf(0,this.currentTime/this.duration,1);t=n>=1;const a=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=EC(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:a,onStart:s,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=l}};function OC(e,t){let r;return function(...n){let a=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(a,n)},t)}}var FC=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Ee(this,"width",0);Ee(this,"height",0);Ee(this,"scrollHeight",0);Ee(this,"scrollWidth",0);Ee(this,"debouncedResize");Ee(this,"wrapperResizeObserver");Ee(this,"contentResizeObserver");Ee(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ee(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ee(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=OC(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wf=class{constructor(){Ee(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let a=0,s=r.length;a<s;a++)(n=r[a])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(a=>t!==a)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Gd=100/6,Ho={passive:!1},zC=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Ee(this,"touchStart",{x:0,y:0});Ee(this,"lastDelta",{x:0,y:0});Ee(this,"window",{width:0,height:0});Ee(this,"emitter",new Wf);Ee(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ee(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,a=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:a},this.emitter.emit("scroll",{deltaX:n,deltaY:a,event:e})});Ee(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ee(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const a=n===1?Gd:n===2?this.window.width:1,s=n===1?Gd:n===2?this.window.height:1;t*=a,r*=s,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Ee(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ho),this.element.addEventListener("touchstart",this.onTouchStart,Ho),this.element.addEventListener("touchmove",this.onTouchMove,Ho),this.element.addEventListener("touchend",this.onTouchEnd,Ho)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ho),this.element.removeEventListener("touchstart",this.onTouchStart,Ho),this.element.removeEventListener("touchmove",this.onTouchMove,Ho),this.element.removeEventListener("touchend",this.onTouchEnd,Ho)}},Wd=e=>Math.min(1,1.001-Math.pow(2,-10*e)),BC=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:a=!1,syncTouchLerp:s=.075,touchInertiaExponent:l=1.7,duration:c,easing:d,lerp:f=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:S=v==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:w=1,autoResize:M=!0,prevent:j,virtualScroll:A,overscroll:L=!0,autoRaf:E=!1,anchors:D=!1,autoToggle:q=!1,allowNestedScroll:V=!1,__experimental__naiveDimensions:K=!1}={}){Ee(this,"_isScrolling",!1);Ee(this,"_isStopped",!1);Ee(this,"_isLocked",!1);Ee(this,"_preventNextNativeScrollEvent",!1);Ee(this,"_resetVelocityTimeout",null);Ee(this,"__rafID",null);Ee(this,"isTouching");Ee(this,"time",0);Ee(this,"userData",{});Ee(this,"lastVelocity",0);Ee(this,"velocity",0);Ee(this,"direction",0);Ee(this,"options");Ee(this,"targetScroll");Ee(this,"animatedScroll");Ee(this,"animate",new RC);Ee(this,"emitter",new Wf);Ee(this,"dimensions");Ee(this,"virtualScroll");Ee(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Ee(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ee(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Ee(this,"onClick",e=>{const r=e.composedPath().find(n=>{var a;return n instanceof HTMLAnchorElement&&((a=n.getAttribute("href"))==null?void 0:a.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,a)}}});Ee(this,"onPointerDown",e=>{e.button===1&&this.reset()});Ee(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const a=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=t===0&&r===0;if(this.options.syncTouch&&a&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(l||d)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const p=this.options.prevent;if(f.find(j=>{var A,L,E;return j instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(j))||((A=j.hasAttribute)==null?void 0:A.call(j,"data-lenis-prevent"))||a&&((L=j.hasAttribute)==null?void 0:L.call(j,"data-lenis-prevent-touch"))||s&&((E=j.hasAttribute)==null?void 0:E.call(j,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(j,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=a&&this.options.syncTouch,M=a&&n.type==="touchend";M&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...m?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ee(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ee(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=LC,(!e||e===document.documentElement)&&(e=window),typeof c=="number"&&typeof d!="function"?d=Wd:typeof d=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:a,syncTouchLerp:s,touchInertiaExponent:l,duration:c,easing:d,lerp:f,infinite:p,gestureOrientation:S,orientation:v,touchMultiplier:m,wheelMultiplier:w,autoResize:M,prevent:j,virtualScroll:A,overscroll:L,autoRaf:E,anchors:D,autoToggle:q,allowNestedScroll:V,__experimental__naiveDimensions:K},this.dimensions=new FC(e,t,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new zC(r,{touchMultiplier:m,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:a=this.options.duration,easing:s=this.options.easing,lerp:l=this.options.lerp,onStart:c,onComplete:d,force:f=!1,programmatic:p=!0,userData:v}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?w.left:w.top}const m=S.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(p){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=Gf(0,e,this.limit);if(e===this.targetScroll){c==null||c(this),d==null||d(this);return}if(this.userData=v??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}p||(this.targetScroll=e),typeof a=="number"&&typeof s!="function"?s=Wd:typeof s=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,e,{duration:a,easing:s,lerp:l,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(S,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),p&&(this.targetScroll=S),m||this.emit(),m&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),a=e._lenis??(e._lenis={});let s,l,c,d,f,p,v,S;const m=this.options.gestureOrientation;if(n-(a.time??0)>2e3){a.time=Date.now();const q=window.getComputedStyle(e);a.computedStyle=q;const V=q.overflowX,K=q.overflowY;if(s=["auto","overlay","scroll"].includes(V),l=["auto","overlay","scroll"].includes(K),a.hasOverflowX=s,a.hasOverflowY=l,!s&&!l||m==="vertical"&&!l||m==="horizontal"&&!s)return!1;f=e.scrollWidth,p=e.scrollHeight,v=e.clientWidth,S=e.clientHeight,c=f>v,d=p>S,a.isScrollableX=c,a.isScrollableY=d,a.scrollWidth=f,a.scrollHeight=p,a.clientWidth=v,a.clientHeight=S}else c=a.isScrollableX,d=a.isScrollableY,s=a.hasOverflowX,l=a.hasOverflowY,f=a.scrollWidth,p=a.scrollHeight,v=a.clientWidth,S=a.clientHeight;if(!s&&!l||!c&&!d||m==="vertical"&&(!l||!d)||m==="horizontal"&&(!s||!c))return!1;let w;if(m==="horizontal")w="x";else if(m==="vertical")w="y";else{const q=t!==0,V=r!==0;q&&s&&c&&(w="x"),V&&l&&d&&(w="y")}if(!w)return!1;let M,j,A,L,E;if(w==="x")M=e.scrollLeft,j=f-v,A=t,L=s,E=c;else if(w==="y")M=e.scrollTop,j=p-S,A=r,L=l,E=d;else return!1;return(A>0?M<j:M>0)&&L&&E}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?DC(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function UC(){const{pathname:e}=Fi(),[t,r]=C.useState(!1),[n,a]=C.useState(!1);return C.useEffect(()=>{r(!0),a(!0),window.scrollTo(0,0);const s=setTimeout(()=>{r(!1),setTimeout(()=>{a(!1)},300)},2e3);return()=>clearTimeout(s)},[e]),n?o.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:o.jsx(r0,{isVisible:!0})}):null}function HC(){const[e,t]=C.useState(!0),[r,n]=C.useState(!1);return q3(),C.useEffect(()=>{const a=new BC({duration:1.2,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function s(l){a.raf(l),requestAnimationFrame(s)}return requestAnimationFrame(s),()=>{a.destroy()}},[]),C.useEffect(()=>v3(),[]),C.useEffect(()=>{const a=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(a)},[]),C.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),o.jsx(b3,{children:o.jsx(C4,{children:o.jsxs(M4,{children:[o.jsx(TC,{}),o.jsx(IC,{}),o.jsx(MC,{}),o.jsxs(o3,{children:[o.jsx(UC,{}),o.jsxs(Dp,{children:[o.jsx(Pn,{path:"/",element:o.jsx(ps,{showNavbar:!0,showFooter:!0}),children:o.jsx(Pn,{index:!0,element:o.jsx(Md,{loadingComplete:r})})}),o.jsx(Pn,{path:"/p/:posterId",element:o.jsx(ps,{showNavbar:!0,showFooter:!0}),children:o.jsx(Pn,{index:!0,element:o.jsx(Md,{loadingComplete:r})})}),o.jsx(Pn,{path:"/login",element:o.jsx(ps,{showNavbar:!1,showFooter:!1}),children:o.jsx(Pn,{index:!0,element:o.jsx(_y,{})})}),o.jsx(Pn,{path:"/u/:username",element:o.jsx(ps,{showNavbar:!0,showFooter:!0}),children:o.jsx(Pn,{index:!0,element:o.jsx(O_,{})})}),o.jsx(Pn,{path:"/admin",element:o.jsx(kC,{children:o.jsx(ps,{showNavbar:!0,showFooter:!1})}),children:o.jsx(Pn,{index:!0,element:o.jsx(AC,{})})}),o.jsx(Pn,{path:"/error",element:o.jsx(Ud,{})}),o.jsx(Pn,{path:"*",element:o.jsx(Ud,{})})]})]}),o.jsx(r0,{isVisible:e})]})})})}D5.use(R5).init({resources:{en:{translation:{tagDesign:"Design & Create",heroTitle:`Your vision,
our design`,heroDescription:"Transform your music passion into visual art by creating custom posters for your favorite albums.",startCreating:"Start Creating",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with love by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"It depends, you can create your poster and download it, all locally. But if you create an account and publish it, everyone can access your created poster!",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",FAQ_ExportHighRes_Question:"How can I export the poster in high resolution?",FAQ_ExportHighRes_Answer:"After customizing, you can export the poster in high resolution as PNG or PDF by clicking on the 'Export' tab.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Signature:"Artist Signature",EDITOR_SignatureText:"Show artist signature",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_ExportTab:"Export",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_TrackNamePlaceholder:"Track name",EDITOR_DeleteTrack:"Delete track",EDITOR_AddNewTrack:"Add new track",EXPORT_Format:"Format",EXPORT_Size:"Size",EXPORT_SizeThumbnail:"Thumbnail",EXPORT_SizeMedium:"Medium",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"For best print quality, use Normal size (A4)",EXPORT_DownloadButton:"Download",EDITOR_PublishTab:"Publish",EDITOR_SaveButton:"Save",EDITOR_SavePosterTitle:"Update publication",EDITOR_SavePosterMessage:"Are you sure you want to update this publication? Your changes will be saved.",EDITOR_SaveConfirm:"Update",EDITOR_SaveCancel:"Cancel",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",COVER_EDITOR_Size:"Size",COVER_EDITOR_Blur:"Blur",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Cover editor",EDITOR_EditCover:"Edit cover",EDITOR_SignaturePositioning:"Signature",EDITOR_EditSignature:"Edit",EDITOR_SignatureNotFound:"Not found",EDITOR_HorizontalPosition:"Horizontal",EDITOR_VerticalPosition:"Vertical",EDITOR_Scale:"Scale",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:"Explore the community.",CommunityDescription:"Share and search posters on the community!",COMMUNITY_Publish:"Publish to Community",COMMUNITY_PublishTitle:"Publish your poster",COMMUNITY_VisibilityLabel:"Visibility",COMMUNITY_Public:"Public",COMMUNITY_Private:"Private",COMMUNITY_PublicDesc:"Share with the entire community",COMMUNITY_PrivateDesc:"Save only for you",COMMUNITY_Publishing:"Publishing...",COMMUNITY_Published:"Published!",COMMUNITY_PublishSuccess:"Your poster is now live!",COMMUNITY_PublishedModalBody:"Your poster is live in the community. You can change its visibility or delete it from your profile.",COMMUNITY_GotoProfile:"Go to Profile",COMMUNITY_PublishError:"Failed to publish. Try again.",COMMUNITY_ViewPoster:"View poster",COMMUNITY_Views:"views",COMMUNITY_Downloads:"downloads",COMMUNITY_Favorites:"favorites",COMMUNITY_OpenInEditor:"Open in Editor",COMMUNITY_Popular:"Popular",COMMUNITY_Recent:"Recent",COMMUNITY_ThisWeek:"This Week",COMMUNITY_MyFavorites:"My Favorites",COMMUNITY_SearchPlaceholder:"Search by album, artist or user...",COMMUNITY_NoPosters:"No posters yet. Be the first to publish!",COMMUNITY_FetchError:"Could not load posters. Please try again later.",COMMUNITY_LoadMore:"Load more...",COMMUNITY_AlbumVersions_one:"{{count}} community version",COMMUNITY_AlbumVersions_other:"{{count}} community versions",COMMUNITY_DeletePoster:"Delete poster",COMMUNITY_ConfirmDelete:"Are you sure you want to delete this poster? This action cannot be undone.",COMMUNITY_MakePublic:"Make public",COMMUNITY_MakePrivate:"Make private",COMMUNITY_LoginToPublish:"Log in to publish",COMMUNITY_CantPublishRemix:"Posters opened from the community cannot be published.",COMMUNITY_FilterBy:"Filter by",COMMUNITY_By:"by",COMMUNITY_Poster:"poster",USER_TotalDownloads:"Total downloads",USER_TotalFavorites:"Favorites received",USER_PublishedPosters:"Published posters",USER_Badge:"Badge",USER_PublicProfile:"Public profile",BADGE_TYPE_creator:"Creator",BADGE_TYPE_popular:"Popular",BADGE_TYPE_loved:"Loved",BADGE_TIER_bronze:"Bronze",BADGE_TIER_silver:"Silver",BADGE_TIER_gold:"Gold",BADGE_TIER_diamond:"Diamond",BADGE_Progress:"{{score}}/{{next}} for {{tier}}",BADGE_MaxTier:"Max tier reached!",BADGE_NoTier:"Score: {{score}}/{{next}}",BADGE_Admin:"Administrator",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",PROFILES_Anchor:"Creators.",PROFILES_Title:"Discover who creates.",PROFILES_SearchPlaceholder:"Search by name or username...",PROFILES_NoResults:"No creators found.",NoResults:"No results found.",PROFILES_LoadMore:"Load more creators",PROFILES_Posters:"posters",PROFILES_Likes:"likes",PROFILES_Downloads:"downloads",PROFILES_FetchError:"Could not load creators. The server may be offline.",PROFILE_FetchError:"Could not load this profile. The server may be offline.",PROFILE_PartialError:"Some data could not be loaded. The server may be offline.",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Login:"Login",GotIt:"Got it",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",DASH_Bio:"Bio",DASH_BioPlaceholder:"Tell the community a bit about yourself...",DASH_BioChars:"characters remaining",DASH_BioNoEmptyLines:"No line can be left empty.",DASH_OpenSpotify:"View on Spotify",DASH_ConnectSpotify:"Connect Spotify",DASH_ShowSpotify:"Show Spotify on profile",DASH_FeaturedPoster:"Featured Poster",NoActivityYet:"No activity yet",DASH_MyPosters:"My Posters",DASH_Posters:"Posters",DASH_Favorites:"Favorites",DASH_Stats:"Stats",DASH_TotalPosters:"Posters published",DASH_TotalDownloads:"Total downloads",DASH_TotalViews:"Total views",DASH_TotalFavorites:"Total favorites",DASH_MostFavorited:"Most favorited",DASH_MostDownloaded:"Most downloaded",DASH_MostViewed:"Most viewed",DASH_StatsEmpty:"Publish your first poster to see your stats here.",DASH_StatsEmptyPublic:"This user has no public posters yet.",DASH_TopHighlights:"Top Highlights",DASH_NoPosters:"You haven't published any posters yet.",DASH_NoPublicPosters:"This user hasn't published any posters yet.",DASH_NoFavorites:"You haven't favorited any posters yet.",DASH_Public:"Public",DASH_Private:"Private",DASH_MakePublic:"Make public",DASH_MakePrivate:"Make private",DASH_Delete:"Delete",DASH_ConfirmDelete:"Are you sure you want to delete this poster? This action cannot be undone.",DASH_ConfirmDeleteTitle:"Delete poster",DASH_Unfavorite:"Unfavorite",DASH_All:"All",CARD_CTX_Like:"Like",CARD_CTX_Unlike:"Unlike",CARD_CTX_Open:"Open poster",CARD_CTX_OpenNewTab:"Open in new tab",CARD_CTX_UserProfile:"View profile",CARD_CTX_Admin:"Admin",CARD_CTX_CopyUserId:"Copy user ID",CARD_CTX_CopyPosterId:"Copy poster ID",CARD_CTX_Delete:"Delete poster",CARD_CTX_UserProfileNewTab:"Open profile in new tab",CARD_CTX_Copied:"Copied!",POSTER_INFO_PublishedAt:"Published on",POSTER_INFO_AdminControls:"Admin controls",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving...",FooterDescription:"Create stunning album posters from your favorite music. Free, fast, and beautiful.",ViewGitHub:"View on GitHub",JoinDiscord:"Join Discord",SwitchTo:"Switch to",FooterPrivacy:"Privacy Policy",FooterTerms:"Terms of Service",FooterCookies:"Cookies",ADMIN_Panel:"Admin Panel",ADMIN_Overview:"Overview",ADMIN_Users:"Users",ADMIN_Posters:"Posters",ADMIN_Logs:"Logs",ADMIN_Health:"Health",ADMIN_TotalUsers:"Total Users",ADMIN_ActiveUsers:"Active",ADMIN_SuspendedUsers:"Suspended",ADMIN_Admins:"Admins",ADMIN_TotalPosters:"Total Posters",ADMIN_PublicPosters:"Public",ADMIN_PrivatePosters:"Private",ADMIN_DeletedPosters:"Deleted",ADMIN_Last7d:"Last 7 days",ADMIN_Last30d:"Last 30 days",ADMIN_Engagement:"Engagement",ADMIN_TopPosters:"Top Posters",ADMIN_TopUsers:"Top Users",ADMIN_Search:"Search...",ADMIN_Ban:"Ban",ADMIN_Unban:"Unban",ADMIN_Promote:"Promote",ADMIN_Demote:"Demote",ADMIN_ForceLogout:"Force Logout",ADMIN_Edit:"Edit",ADMIN_Delete:"Delete",ADMIN_Restore:"Restore",ADMIN_Purge:"Delete Permanently",ADMIN_PurgeConfirm:"This will permanently delete the poster and all associated data. This cannot be undone.",ADMIN_PurgeUser:"Delete User Permanently",ADMIN_ConfirmPurgeUser:"This will permanently delete this user, all their posters, and all related data. This cannot be undone.",ADMIN_MakePublic:"Make Public",ADMIN_MakePrivate:"Make Private",ADMIN_Name:"Name",ADMIN_Bio:"Bio",ADMIN_Username:"Username",ADMIN_Email:"Email",ADMIN_Status:"Status",ADMIN_Role:"Role",ADMIN_Actions:"Actions",ADMIN_Visibility:"Visibility",ADMIN_Views:"Views",ADMIN_Downloads:"Downloads",ADMIN_Favorites:"Favorites",ADMIN_Score:"Score",ADMIN_Date:"Date",ADMIN_Action:"Action",ADMIN_Admin:"Admin",ADMIN_Target:"Target",ADMIN_Details:"Details",ADMIN_NoResults:"No results found",ADMIN_LoadMore:"Load More",ADMIN_Confirm:"Are you sure?",ADMIN_Yes:"Yes",ADMIN_No:"No",ADMIN_Save:"Save",ADMIN_EditMetrics:"Edit Metrics",ADMIN_Cancel:"Cancel",ADMIN_Close:"Close",ADMIN_OpenPoster:"Open Poster",ADMIN_ViewProfile:"View profile",ADMIN_Healthy:"Healthy",ADMIN_Degraded:"Degraded",ADMIN_MongoStatus:"MongoDB",ADMIN_Ping:"Ping",ADMIN_Uptime:"Uptime",ADMIN_Version:"Version",ADMIN_Collections:"Collections",ADMIN_Storage:"Storage",ADMIN_DataSize:"Data Size",ADMIN_IndexSize:"Index Size",ADMIN_TotalSize:"Total Size",ADMIN_Memory:"Memory",ADMIN_HeapUsed:"Heap Used",ADMIN_RSS:"RSS",ADMIN_NodeVersion:"Node.js",ADMIN_ServerInfo:"Server",ADMIN_Database:"Database",ADMIN_Album:"Album",ADMIN_Artist:"Artist",ADMIN_Author:"Author",ADMIN_Created:"Created",ADMIN_Badge:"Badge",ADMIN_NoBadge:"No badge",ADMIN_SetBadge:"Set badge",ADMIN_Selected:"selected",ADMIN_ClearSelection:"Clear",ADMIN_All:"All",ADMIN_Active:"Active",ADMIN_Suspended:"Suspended",ADMIN_Public:"Public",ADMIN_Private:"Private",ADMIN_Deleted:"Deleted",ADMIN_FilterByAction:"Filter by action",ADMIN_BackToPanel:"Back to Panel"}},pt:{translation:{tagDesign:"Design & Criar",heroTitle:`Sua visão,
nosso design`,heroDescription:"Transforme sua paixão por música em arte visual criando pôsteres personalizados dos seus álbuns favoritos.",startCreating:"Começar a Criar",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com amor por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Depende, você pode criar seu poster e baixá-lo, tudo localmente. Mas caso crie uma conta e publicar, todos podem acessar seu poster criado!",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",FAQ_ExportHighRes_Question:"Como posso exportar o pôster em alta resolução?",FAQ_ExportHighRes_Answer:"Após personalizar, é possível exportar o pôster em alta resolução em PNG ou em PDF, clicando na aba 'Exportar'.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Signature:"Autógrafo",EDITOR_SignatureText:"Mostrar autógrafo",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_ExportTab:"Exportação",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_TrackNamePlaceholder:"Nome da faixa",EDITOR_DeleteTrack:"Deletar faixa",EDITOR_AddNewTrack:"Adicionar nova faixa",EXPORT_Format:"Formato",EXPORT_Size:"Tamanho",EXPORT_SizeThumbnail:"Miniatura",EXPORT_SizeMedium:"Médio",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"Para melhor qualidade de impressão, use tamanho Normal (A4)",EXPORT_DownloadButton:"Baixar",EDITOR_PublishTab:"Publicar",EDITOR_SaveButton:"Salvar",EDITOR_SavePosterTitle:"Atualizar publicação",EDITOR_SavePosterMessage:"Tem certeza que deseja atualizar esta publicação? Suas alterações serão salvas.",EDITOR_SaveConfirm:"Atualizar",EDITOR_SaveCancel:"Cancelar",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",COVER_EDITOR_Size:"Tamanho",COVER_EDITOR_Blur:"Desfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de capa",EDITOR_EditCover:"Editar capa",EDITOR_SignaturePositioning:"Assinatura",EDITOR_EditSignature:"Editar",EDITOR_SignatureNotFound:"Não encontrada",EDITOR_HorizontalPosition:"Horizontal",EDITOR_VerticalPosition:"Vertical",EDITOR_Scale:"Escala",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:"Explore a comunidade.",CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",COMMUNITY_Publish:"Publicar na Comunidade",COMMUNITY_PublishTitle:"Publicar seu pôster",COMMUNITY_VisibilityLabel:"Visibilidade",COMMUNITY_Public:"Público",COMMUNITY_Private:"Privado",COMMUNITY_PublicDesc:"Compartilhe com toda a comunidade",COMMUNITY_PrivateDesc:"Salve apenas para você",COMMUNITY_Publishing:"Publicando...",COMMUNITY_Published:"Publicado!",COMMUNITY_PublishSuccess:"Seu pôster está no ar!",COMMUNITY_PublishedModalBody:"Seu pôster está na comunidade. Você pode alterar a visibilidade ou excluí-lo no seu perfil.",COMMUNITY_GotoProfile:"Ir ao Perfil",COMMUNITY_PublishError:"Falha ao publicar. Tente novamente.",COMMUNITY_ViewPoster:"Ver pôster",COMMUNITY_Views:"visualizações",COMMUNITY_Downloads:"downloads",COMMUNITY_Favorites:"favoritos",COMMUNITY_OpenInEditor:"Abrir no Editor",COMMUNITY_Popular:"Popular",COMMUNITY_Recent:"Recente",COMMUNITY_ThisWeek:"Esta Semana",COMMUNITY_MyFavorites:"Meus Favoritos",COMMUNITY_SearchPlaceholder:"Pesquisar por álbum, artista ou usuário...",COMMUNITY_NoPosters:"Nenhum pôster ainda. Seja o primeiro a publicar!",COMMUNITY_FetchError:"Não foi possível carregar os pôsteres. Tente novamente mais tarde.",COMMUNITY_LoadMore:"Carregar mais...",COMMUNITY_AlbumVersions_one:"{{count}} versão da comunidade",COMMUNITY_AlbumVersions_other:"{{count}} versões da comunidade",COMMUNITY_DeletePoster:"Excluir pôster",COMMUNITY_ConfirmDelete:"Tem certeza que deseja excluir este pôster? Essa ação não pode ser desfeita.",COMMUNITY_MakePublic:"Tornar público",COMMUNITY_MakePrivate:"Tornar privado",COMMUNITY_LoginToPublish:"Entre para publicar",COMMUNITY_CantPublishRemix:"Pôsteres abertos da comunidade não podem ser publicados.",COMMUNITY_FilterBy:"Filtrar por",COMMUNITY_By:"por",COMMUNITY_Poster:"pôster",USER_TotalDownloads:"Total de downloads",USER_TotalFavorites:"Favoritos recebidos",USER_PublishedPosters:"Pôsteres publicados",USER_Badge:"Distintivo",USER_PublicProfile:"Perfil público",BADGE_TYPE_creator:"Criador",BADGE_TYPE_popular:"Popular",BADGE_TYPE_loved:"Amado",BADGE_TIER_bronze:"Bronze",BADGE_TIER_silver:"Prata",BADGE_TIER_gold:"Ouro",BADGE_TIER_diamond:"Diamante",BADGE_Progress:"{{score}}/{{next}} para {{tier}}",BADGE_MaxTier:"Tier máximo alcançado!",BADGE_NoTier:"Pontuação: {{score}}/{{next}}",BADGE_Admin:"Administrador",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",PROFILES_Anchor:"Criadores.",PROFILES_Title:"Descubra quem cria.",PROFILES_SearchPlaceholder:"Buscar por nome ou usuário...",PROFILES_NoResults:"Nenhum criador encontrado.",NoResults:"Nenhum resultado encontrado.",PROFILES_LoadMore:"Carregar mais criadores",PROFILES_Posters:"pôsteres",PROFILES_Likes:"curtidas",PROFILES_Downloads:"downloads",PROFILES_FetchError:"Não foi possível carregar os criadores. O servidor pode estar offline.",PROFILE_FetchError:"Não foi possível carregar este perfil. O servidor pode estar offline.",PROFILE_PartialError:"Alguns dados não puderam ser carregados. O servidor pode estar offline.",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Login:"Entrar",GotIt:"Entendido",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",DASH_Bio:"Bio",DASH_BioPlaceholder:"Conte um pouco sobre você para a comunidade...",DASH_BioChars:"caracteres restantes",DASH_BioNoEmptyLines:"Nenhuma linha pode ficar vazia.",DASH_OpenSpotify:"Ver no Spotify",DASH_ConnectSpotify:"Conectar Spotify",DASH_ShowSpotify:"Mostrar Spotify no perfil",DASH_FeaturedPoster:"Poster em Destaque",NoActivityYet:"Nenhuma atividade ainda",DASH_MyPosters:"Meus Pôsteres",DASH_Posters:"Pôsteres",DASH_Favorites:"Favoritos",DASH_Stats:"Estatísticas",DASH_TotalPosters:"Pôsteres publicados",DASH_TotalDownloads:"Total de downloads",DASH_TotalViews:"Total de visualizações",DASH_TotalFavorites:"Total de favoritos",DASH_MostFavorited:"Mais favoritado",DASH_MostDownloaded:"Mais baixado",DASH_MostViewed:"Mais visualizado",DASH_StatsEmpty:"Publique seu primeiro pôster para ver suas estatísticas aqui.",DASH_StatsEmptyPublic:"Este usuário ainda não tem pôsteres públicos.",DASH_TopHighlights:"Destaques",DASH_NoPosters:"Você ainda não publicou nenhum pôster.",DASH_NoPublicPosters:"Este usuário ainda não publicou nenhum pôster.",DASH_NoFavorites:"Você ainda não favoritou nenhum pôster.",DASH_Public:"Público",DASH_Private:"Privado",DASH_MakePublic:"Tornar público",DASH_MakePrivate:"Tornar privado",DASH_Delete:"Excluir",DASH_ConfirmDelete:"Tem certeza que deseja excluir este pôster? Esta ação não pode ser desfeita.",DASH_ConfirmDeleteTitle:"Excluir pôster",DASH_Unfavorite:"Desfavoritar",DASH_All:"Todos",CARD_CTX_Like:"Curtir",CARD_CTX_Unlike:"Descurtir",CARD_CTX_Open:"Abrir poster",CARD_CTX_OpenNewTab:"Abrir em nova aba",CARD_CTX_UserProfile:"Ver perfil",CARD_CTX_Admin:"Admin",CARD_CTX_CopyUserId:"Copiar ID do usuário",CARD_CTX_CopyPosterId:"Copiar ID do poster",CARD_CTX_Delete:"Apagar poster",CARD_CTX_UserProfileNewTab:"Abrir perfil em nova aba",CARD_CTX_Copied:"Copiado!",POSTER_INFO_PublishedAt:"Publicado em",POSTER_INFO_AdminControls:"Controles de admin",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando...",FooterDescription:"Crie pôsteres incríveis de álbuns da sua música favorita. Grátis, rápido e bonito.",ViewGitHub:"Ver no GitHub",JoinDiscord:"Entrar no Discord",SwitchTo:"Mudar para",FooterPrivacy:"Política de Privacidade",FooterTerms:"Termos de Serviço",FooterCookies:"Cookies",ADMIN_Panel:"Painel Admin",ADMIN_Overview:"Visão Geral",ADMIN_Users:"Usuários",ADMIN_Posters:"Pôsteres",ADMIN_Logs:"Registros",ADMIN_Health:"Saúde",ADMIN_TotalUsers:"Total de Usuários",ADMIN_ActiveUsers:"Ativos",ADMIN_SuspendedUsers:"Suspensos",ADMIN_Admins:"Admins",ADMIN_TotalPosters:"Total de Pôsteres",ADMIN_PublicPosters:"Públicos",ADMIN_PrivatePosters:"Privados",ADMIN_DeletedPosters:"Excluídos",ADMIN_Last7d:"Últimos 7 dias",ADMIN_Last30d:"Últimos 30 dias",ADMIN_Engagement:"Engajamento",ADMIN_TopPosters:"Top Pôsteres",ADMIN_TopUsers:"Top Usuários",ADMIN_Search:"Buscar...",ADMIN_Ban:"Banir",ADMIN_Unban:"Desbanir",ADMIN_Promote:"Promover",ADMIN_Demote:"Rebaixar",ADMIN_ForceLogout:"Forçar Logout",ADMIN_Edit:"Editar",ADMIN_Delete:"Excluir",ADMIN_Restore:"Restaurar",ADMIN_Purge:"Excluir Permanentemente",ADMIN_PurgeConfirm:"Isso excluirá permanentemente o pôster e todos os dados associados. Esta ação não pode ser desfeita.",ADMIN_PurgeUser:"Excluir Usuário Permanentemente",ADMIN_ConfirmPurgeUser:"Isso excluirá permanentemente este usuário, todos os seus pôsteres e dados relacionados. Esta ação não pode ser desfeita.",ADMIN_MakePublic:"Tornar Público",ADMIN_MakePrivate:"Tornar Privado",ADMIN_Name:"Nome",ADMIN_Bio:"Bio",ADMIN_Username:"Usuário",ADMIN_Email:"Email",ADMIN_Status:"Status",ADMIN_Role:"Papel",ADMIN_Actions:"Ações",ADMIN_Visibility:"Visibilidade",ADMIN_Views:"Visualizações",ADMIN_Downloads:"Downloads",ADMIN_Favorites:"Favoritos",ADMIN_Score:"Pontuação",ADMIN_Date:"Data",ADMIN_Action:"Ação",ADMIN_Admin:"Admin",ADMIN_Target:"Alvo",ADMIN_Details:"Detalhes",ADMIN_NoResults:"Nenhum resultado encontrado",ADMIN_LoadMore:"Carregar Mais",ADMIN_Confirm:"Tem certeza?",ADMIN_Yes:"Sim",ADMIN_No:"Não",ADMIN_Save:"Salvar",ADMIN_EditMetrics:"Editar Métricas",ADMIN_Cancel:"Cancelar",ADMIN_Close:"Fechar",ADMIN_OpenPoster:"Abrir Poster",ADMIN_ViewProfile:"Ver perfil",ADMIN_Healthy:"Saudável",ADMIN_Degraded:"Degradado",ADMIN_MongoStatus:"MongoDB",ADMIN_Ping:"Ping",ADMIN_Uptime:"Tempo Ativo",ADMIN_Version:"Versão",ADMIN_Collections:"Coleções",ADMIN_Storage:"Armazenamento",ADMIN_DataSize:"Dados",ADMIN_IndexSize:"Índices",ADMIN_TotalSize:"Total",ADMIN_Memory:"Memória",ADMIN_HeapUsed:"Heap Usado",ADMIN_RSS:"RSS",ADMIN_NodeVersion:"Node.js",ADMIN_ServerInfo:"Servidor",ADMIN_Database:"Banco de Dados",ADMIN_Album:"Álbum",ADMIN_Artist:"Artista",ADMIN_Author:"Autor",ADMIN_Created:"Criado em",ADMIN_Badge:"Badge",ADMIN_NoBadge:"Sem badge",ADMIN_SetBadge:"Aplicar badge",ADMIN_Selected:"selecionados",ADMIN_ClearSelection:"Limpar",ADMIN_All:"Todos",ADMIN_Active:"Ativo",ADMIN_Suspended:"Suspenso",ADMIN_Public:"Público",ADMIN_Private:"Privado",ADMIN_Deleted:"Excluído",ADMIN_FilterByAction:"Filtrar por ação",ADMIN_BackToPanel:"Voltar ao Painel"}},es:{translation:{heroTitle:`Tu visión,
nuestro diseño`,heroDescription:"Transforma tu pasión por la música en arte visual creando pósters personalizados de tus álbumes favoritos.",startCreating:"Comenzar a Crear",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con amor por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"Depende, puedes crear tu póster y descargarlo, todo localmente. ¡Pero si creas una cuenta y lo publicas, todos pueden acceder a tu póster creado!",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",FAQ_ExportHighRes_Question:"¿Cómo puedo exportar el póster en alta resolución?",FAQ_ExportHighRes_Answer:"Después de personalizar, puedes exportar el póster en alta resolución en PNG o PDF haciendo clic en la pestaña 'Exportar'.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Signature:"Firma del Artista",EDITOR_SignatureText:"Mostrar firma del artista",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_ExportTab:"Exportación",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_TrackNamePlaceholder:"Nombre de canción",EDITOR_DeleteTrack:"Eliminar canción",EDITOR_AddNewTrack:"Agregar nueva canción",EXPORT_Format:"Formato",EXPORT_Size:"Tamaño",EXPORT_SizeThumbnail:"Miniatura",EXPORT_SizeMedium:"Mediano",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"Para mejor calidad de impresión, use tamaño Normal (A4)",EXPORT_DownloadButton:"Descargar",EDITOR_PublishTab:"Publicar",EDITOR_SaveButton:"Guardar",EDITOR_SavePosterTitle:"Actualizar publicación",EDITOR_SavePosterMessage:"¿Estás seguro de que deseas actualizar esta publicación? Tus cambios se guardarán.",EDITOR_SaveConfirm:"Actualizar",EDITOR_SaveCancel:"Cancelar",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",COVER_EDITOR_Size:"Tamaño",COVER_EDITOR_Blur:"Desenfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de portada",EDITOR_EditCover:"Editar portada",EDITOR_SignaturePositioning:"Firma",EDITOR_EditSignature:"Editar",EDITOR_SignatureNotFound:"No encontrada",EDITOR_HorizontalPosition:"Horizontal",EDITOR_VerticalPosition:"Vertical",EDITOR_Scale:"Escala",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:"Explora la comunidad.",CommunityDescription:"¡Comparte y busca pósters en la comunidad!",COMMUNITY_Publish:"Publicar en la Comunidad",COMMUNITY_PublishTitle:"Publicar tu póster",COMMUNITY_VisibilityLabel:"Visibilidad",COMMUNITY_Public:"Público",COMMUNITY_Private:"Privado",COMMUNITY_PublicDesc:"Comparte con toda la comunidad",COMMUNITY_PrivateDesc:"Guarda solo para ti",COMMUNITY_Publishing:"Publicando...",COMMUNITY_Published:"¡Publicado!",COMMUNITY_PublishSuccess:"¡Tu póster está en vivo!",COMMUNITY_PublishedModalBody:"Tu póster está en la comunidad. Puedes cambiar su visibilidad o eliminarlo desde tu perfil.",COMMUNITY_GotoProfile:"Ir al Perfil",COMMUNITY_PublishError:"Error al publicar. Inténtalo de nuevo.",COMMUNITY_ViewPoster:"Ver póster",COMMUNITY_Views:"vistas",COMMUNITY_Downloads:"descargas",COMMUNITY_Favorites:"favoritos",COMMUNITY_OpenInEditor:"Abrir en Editor",COMMUNITY_Popular:"Popular",COMMUNITY_Recent:"Reciente",COMMUNITY_ThisWeek:"Esta Semana",COMMUNITY_MyFavorites:"Mis Favoritos",COMMUNITY_SearchPlaceholder:"Buscar por álbum, artista o usuario...",COMMUNITY_NoPosters:"Aún no hay pósters. ¡Sé el primero en publicar!",COMMUNITY_FetchError:"No se pudieron cargar los pósters. Inténtalo más tarde.",COMMUNITY_LoadMore:"Cargar más...",COMMUNITY_AlbumVersions_one:"{{count}} versión de la comunidad",COMMUNITY_AlbumVersions_other:"{{count}} versiones de la comunidad",COMMUNITY_DeletePoster:"Eliminar póster",COMMUNITY_ConfirmDelete:"¿Estás seguro de que deseas eliminar este póster? Esta acción no se puede deshacer.",COMMUNITY_MakePublic:"Hacer público",COMMUNITY_MakePrivate:"Hacer privado",COMMUNITY_LoginToPublish:"Inicia sesión para publicar",COMMUNITY_CantPublishRemix:"Los pósters abiertos desde la comunidad no se pueden publicar.",COMMUNITY_FilterBy:"Filtrar por",COMMUNITY_By:"por",COMMUNITY_Poster:"póster",USER_TotalDownloads:"Total de descargas",USER_TotalFavorites:"Favoritos recibidos",USER_PublishedPosters:"Pósters publicados",USER_Badge:"Insignia",USER_PublicProfile:"Perfil público",BADGE_TYPE_creator:"Creador",BADGE_TYPE_popular:"Popular",BADGE_TYPE_loved:"Amado",BADGE_TIER_bronze:"Bronce",BADGE_TIER_silver:"Plata",BADGE_TIER_gold:"Oro",BADGE_TIER_diamond:"Diamante",BADGE_Progress:"{{score}}/{{next}} para {{tier}}",BADGE_MaxTier:"¡Tier máximo alcanzado!",BADGE_NoTier:"Puntuación: {{score}}/{{next}}",BADGE_Admin:"Administrador",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",PROFILES_Anchor:"Creadores.",PROFILES_Title:"Descubre quién crea.",PROFILES_SearchPlaceholder:"Buscar por nombre o usuario...",PROFILES_NoResults:"Ningún creador encontrado.",NoResults:"No se encontraron resultados.",PROFILES_LoadMore:"Cargar más creadores",PROFILES_Posters:"pósters",PROFILES_Likes:"me gusta",PROFILES_Downloads:"descargas",PROFILES_FetchError:"No se pudieron cargar los creadores. El servidor puede estar fuera de línea.",PROFILE_FetchError:"No se pudo cargar este perfil. El servidor puede estar fuera de línea.",PROFILE_PartialError:"Algunos datos no se pudieron cargar. El servidor puede estar fuera de línea.",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Login:"Iniciar sesión",GotIt:"Entendido",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",DASH_Bio:"Bio",DASH_BioPlaceholder:"Cuéntale a la comunidad un poco sobre ti...",DASH_BioChars:"caracteres restantes",DASH_BioNoEmptyLines:"Ninguna línea puede estar vacía.",DASH_OpenSpotify:"Ver en Spotify",DASH_ConnectSpotify:"Conectar Spotify",DASH_ShowSpotify:"Mostrar Spotify en el perfil",DASH_FeaturedPoster:"Póster Destacado",NoActivityYet:"Sin actividad aún",DASH_MyPosters:"Mis Pósters",DASH_Posters:"Pósters",DASH_Favorites:"Favoritos",DASH_Stats:"Estadísticas",DASH_TotalPosters:"Pósters publicados",DASH_TotalDownloads:"Total de descargas",DASH_TotalViews:"Total de vistas",DASH_TotalFavorites:"Total de favoritos",DASH_MostFavorited:"Más favoriteado",DASH_MostDownloaded:"Más descargado",DASH_MostViewed:"Más visto",DASH_StatsEmpty:"Publica tu primer póster para ver tus estadísticas aquí.",DASH_StatsEmptyPublic:"Este usuario aún no tiene pósters públicos.",DASH_TopHighlights:"Destacados",DASH_NoPosters:"Aún no has publicado ningún póster.",DASH_NoPublicPosters:"Este usuario aún no ha publicado ningún póster.",DASH_NoFavorites:"Aún no has marcado ningún póster como favorito.",DASH_Public:"Público",DASH_Private:"Privado",DASH_MakePublic:"Hacer público",DASH_MakePrivate:"Hacer privado",DASH_Delete:"Eliminar",DASH_ConfirmDelete:"¿Estás seguro de que quieres eliminar este póster? Esta acción no se puede deshacer.",DASH_ConfirmDeleteTitle:"Eliminar póster",DASH_Unfavorite:"Quitar de favoritos",DASH_All:"Todos",CARD_CTX_Like:"Me gusta",CARD_CTX_Unlike:"Ya no me gusta",CARD_CTX_Open:"Abrir póster",CARD_CTX_OpenNewTab:"Abrir en nueva pestaña",CARD_CTX_UserProfile:"Ver perfil",CARD_CTX_Admin:"Admin",CARD_CTX_CopyUserId:"Copiar ID de usuario",CARD_CTX_CopyPosterId:"Copiar ID del póster",CARD_CTX_Delete:"Eliminar póster",CARD_CTX_UserProfileNewTab:"Abrir perfil en nueva pestaña",CARD_CTX_Copied:"¡Copiado!",POSTER_INFO_PublishedAt:"Publicado el",POSTER_INFO_AdminControls:"Controles del administrador",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando...",FooterDescription:"Crea increíbles pósters de álbumes de tu música favorita. Gratis, rápido y hermoso.",ViewGitHub:"Ver en GitHub",JoinDiscord:"Unirse a Discord",SwitchTo:"Cambiar a",FooterPrivacy:"Política de Privacidad",FooterTerms:"Términos de Servicio",FooterCookies:"Cookies"}},zh:{translation:{heroTitle:`您的愿景，
我们的设计`,heroDescription:"将您的音乐热情转化为视觉艺术，为您最喜爱的专辑制作定制海报。",startCreating:"开始创建",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用爱制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"这取决于情况，您可以创建并下载海报，所有操作都在本地进行。但如果您创建账户并发布，每个人都可以访问您创建的海报！",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",FAQ_ExportHighRes_Question:"如何导出高分辨率海报？",FAQ_ExportHighRes_Answer:"自定义后，您可以通过点击'导出'选项卡以PNG或PDF格式导出高分辨率海报。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_ExportTab:"导出",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_TrackNamePlaceholder:"曲目名称",EDITOR_DeleteTrack:"删除曲目",EDITOR_AddNewTrack:"添加新曲目",EXPORT_Format:"格式",EXPORT_Size:"尺寸",EXPORT_SizeThumbnail:"缩略图",EXPORT_SizeMedium:"中等",EXPORT_SizeNormal:"正常",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"为获得最佳打印质量，请使用正常尺寸 (A4)",EXPORT_DownloadButton:"下载",EDITOR_PublishTab:"发布",EDITOR_SaveButton:"保存",EDITOR_SavePosterTitle:"更新出版物",EDITOR_SavePosterMessage:"您确定要更新此出版物吗？您的更改将被保存。",EDITOR_SaveConfirm:"更新",EDITOR_SaveCancel:"取消",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",COVER_EDITOR_Size:"大小",COVER_EDITOR_Blur:"模糊",COVER_EDITOR_HorizontalPosition:"水平",COVER_EDITOR_VerticalPosition:"垂直",EDITOR_CoverEditor:"封面编辑器",EDITOR_EditCover:"编辑封面",EDITOR_SignaturePositioning:"签名",EDITOR_EditSignature:"编辑",EDITOR_SignatureNotFound:"未找到",EDITOR_HorizontalPosition:"水平",EDITOR_VerticalPosition:"垂直",EDITOR_Scale:"比例",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:"探索社区",CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",COMMUNITY_Publish:"发布到社区",COMMUNITY_PublishTitle:"发布你的海报",COMMUNITY_VisibilityLabel:"可见性",COMMUNITY_Public:"公开",COMMUNITY_Private:"私密",COMMUNITY_PublicDesc:"与整个社区分享",COMMUNITY_PrivateDesc:"仅为自己保存",COMMUNITY_Publishing:"发布中...",COMMUNITY_Published:"已发布！",COMMUNITY_PublishSuccess:"你的海报已上线！",COMMUNITY_PublishedModalBody:"你的海报已在社区发布。你可以在个人资料中更改可见性或删除它。",COMMUNITY_GotoProfile:"前往个人资料",COMMUNITY_PublishError:"发布失败，请重试。",COMMUNITY_ViewPoster:"查看海报",COMMUNITY_Views:"浏览",COMMUNITY_Downloads:"下载",COMMUNITY_Favorites:"收藏",COMMUNITY_OpenInEditor:"在编辑器中打开",COMMUNITY_Popular:"热门",COMMUNITY_Recent:"最新",COMMUNITY_ThisWeek:"本周",COMMUNITY_MyFavorites:"我的收藏",COMMUNITY_SearchPlaceholder:"按专辑、艺术家或用户搜索...",COMMUNITY_NoPosters:"还没有海报。成为第一个发布者！",COMMUNITY_FetchError:"无法加载海报，请稍后再试。",COMMUNITY_LoadMore:"加载更多...",COMMUNITY_AlbumVersions_one:"{{count}} 个社区版本",COMMUNITY_AlbumVersions_other:"{{count}} 个社区版本",COMMUNITY_DeletePoster:"删除海报",COMMUNITY_ConfirmDelete:"确定要删除这张海报吗？此操作无法撤销。",COMMUNITY_MakePublic:"设为公开",COMMUNITY_MakePrivate:"设为私密",COMMUNITY_LoginToPublish:"登录后发布",COMMUNITY_CantPublishRemix:"从社区打开的海报无法发布。",COMMUNITY_FilterBy:"筛选",COMMUNITY_By:"作者",COMMUNITY_Poster:"海报",USER_TotalDownloads:"总下载量",USER_TotalFavorites:"收到的收藏",USER_PublishedPosters:"已发布海报",USER_Badge:"徽章",USER_PublicProfile:"公开资料",BADGE_TYPE_creator:"创作者",BADGE_TYPE_popular:"热门",BADGE_TYPE_loved:"心意",BADGE_TIER_bronze:"青铜",BADGE_TIER_silver:"白銀",BADGE_TIER_gold:"黄金",BADGE_TIER_diamond:"钓石",BADGE_Progress:"{{score}}/{{next}} 到 {{tier}}",BADGE_MaxTier:"已达最高等级！",BADGE_NoTier:"分数：{{score}}/{{next}}",BADGE_Admin:"管理员",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",PROFILES_Anchor:"创作者。",PROFILES_Title:"发现创作者。",PROFILES_SearchPlaceholder:"按名称或用户名搜索...",PROFILES_NoResults:"未找到创作者。",NoResults:"未找到结果。",PROFILES_LoadMore:"加载更多创作者",PROFILES_Posters:"海报",PROFILES_Likes:"喜欢",PROFILES_Downloads:"下载",PROFILES_FetchError:"无法加载创作者。服务器可能离线。",PROFILE_FetchError:"无法加载此个人资料。服务器可能离线。",PROFILE_PartialError:"部分数据无法加载。服务器可能离线。",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Login:"登录",GotIt:"知道了",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",DASH_Bio:"简介",DASH_BioPlaceholder:"向社区介绍一下你自己...",DASH_BioChars:"字符剩余",DASH_BioNoEmptyLines:"不能有空行。",DASH_OpenSpotify:"在 Spotify 查看",DASH_ConnectSpotify:"连接 Spotify",DASH_ShowSpotify:"在个人资料上显示 Spotify",DASH_FeaturedPoster:"精选海报",NoActivityYet:"暂无活动",DASH_MyPosters:"我的海报",DASH_Posters:"海报",DASH_Favorites:"收藏",DASH_Stats:"统计",DASH_TotalPosters:"已发布海报",DASH_TotalDownloads:"总下载次数",DASH_TotalViews:"总浏览次数",DASH_TotalFavorites:"总收藏数",DASH_MostFavorited:"最多收藏",DASH_MostDownloaded:"最多下载",DASH_MostViewed:"最多浏览",DASH_StatsEmpty:"发布您的第一张海报以在此查看统计信息。",DASH_StatsEmptyPublic:"该用户还没有公开的海报。",DASH_TopHighlights:"热门海报",DASH_NoPosters:"你还没有发布任何海报。",DASH_NoPublicPosters:"该用户还没有发布任何海报。",DASH_NoFavorites:"你还没有收藏任何海报。",DASH_Public:"公开",DASH_Private:"私密",DASH_MakePublic:"设为公开",DASH_MakePrivate:"设为私密",DASH_Delete:"删除",DASH_ConfirmDelete:"确定要删除这张海报吗？此操作无法撤销。",DASH_ConfirmDeleteTitle:"删除海报",DASH_Unfavorite:"取消收藏",DASH_All:"全部",CARD_CTX_Like:"喜欢",CARD_CTX_Unlike:"取消喜欢",CARD_CTX_Open:"打开海报",CARD_CTX_OpenNewTab:"在新标签页中打开",CARD_CTX_UserProfile:"查看资料",CARD_CTX_Admin:"管理员",CARD_CTX_CopyUserId:"复制用户 ID",CARD_CTX_CopyPosterId:"复制海报 ID",CARD_CTX_Delete:"删除海报",CARD_CTX_UserProfileNewTab:"在新标签页打开资料",CARD_CTX_Copied:"已复制!",POSTER_INFO_PublishedAt:"发布于",POSTER_INFO_AdminControls:"管理员控制",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Qd(document.getElementById("root")).render(o.jsx(C.StrictMode,{children:o.jsx(HC,{})}));export{qt as _};
