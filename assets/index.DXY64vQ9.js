const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.D1vQmf1n.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var T5=Object.defineProperty;var L5=(e,t,r)=>t in e?T5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ee=(e,t,r)=>L5(e,typeof t!="symbol"?t+"":t,r);import{r as k,a as Wd,e as Xr,c as P5,R as ol}from"./vendor.BGNHhJSV.js";import{m as Rt,d as b,G as Ze,l as Za}from"./ui.C5ldsGQa.js";import{u as Tt,i as E5,a as D5}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();var Xd={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R5=k,O5=Symbol.for("react.element"),F5=Symbol.for("react.fragment"),z5=Object.prototype.hasOwnProperty,B5=R5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U5={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,r){var n,a={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)z5.call(t,n)&&!U5.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:O5,type:e,key:s,ref:l,props:a,_owner:B5.current}}Jl.Fragment=F5;Jl.jsx=Zd;Jl.jsxs=Zd;Xd.exports=Jl;var o=Xd.exports,Jd,h2=Wd;Jd=h2.createRoot,h2.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var f2="popstate";function H5(e={}){function t(n,a){let{pathname:s,search:l,hash:c}=n.location;return Ac("",{pathname:s,search:l,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Ms(a)}return q5(t,r,null,e)}function cr(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function di(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $5(){return Math.random().toString(36).substring(2,10)}function p2(e,t){return{usr:e.state,key:e.key,idx:t}}function Ac(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ka(t):t,state:r,key:t&&t.key||n||$5()}}function Ms({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ka(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function q5(e,t,r,n={}){let{window:a=document.defaultView,v5Compat:s=!1}=n,l=a.history,c="POP",d=null,f=p();f==null&&(f=0,l.replaceState({...l.state,idx:f},""));function p(){return(l.state||{idx:null}).idx}function v(){c="POP";let j=p(),M=j==null?null:j-f;f=j,d&&d({action:c,location:_.location,delta:M})}function S(j,M){c="PUSH";let I=Ac(_.location,j,M);f=p()+1;let P=p2(I,f),D=_.createHref(I);try{l.pushState(P,"",D)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(D)}s&&d&&d({action:c,location:_.location,delta:1})}function m(j,M){c="REPLACE";let I=Ac(_.location,j,M);f=p();let P=p2(I,f),D=_.createHref(I);l.replaceState(P,"",D),s&&d&&d({action:c,location:_.location,delta:0})}function w(j){return V5(j)}let _={get action(){return c},get location(){return e(a,l)},listen(j){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(f2,v),d=j,()=>{a.removeEventListener(f2,v),d=null}},createHref(j){return t(a,j)},createURL:w,encodeLocation(j){let M=w(j);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:S,replace:m,go(j){return l.go(j)}};return _}function V5(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),cr(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Ms(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Kd(e,t,r="/"){return Y5(e,t,r,!1)}function Y5(e,t,r,n){let a=typeof t=="string"?Ka(t):t,s=po(a.pathname||"/",r);if(s==null)return null;let l=Qd(e);G5(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let f=ip(s);c=rp(l[d],f,n)}return c}function Qd(e,t=[],r=[],n="",a=!1){let s=(l,c,d=a,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&d)return;cr(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let v=ho([n,p.relativePath]),S=r.concat(p);l.children&&l.children.length>0&&(cr(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Qd(l.children,t,S,v,d)),!(l.path==null&&!l.index)&&t.push({path:v,score:ep(v,l.index),routesMeta:S})};return e.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let f of eh(l.path))s(l,c,!0,f)}),t}function eh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let l=eh(n.join("/")),c=[];return c.push(...l.map(d=>d===""?s:[s,d].join("/"))),a&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function G5(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:tp(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var W5=/^:[\w-]+$/,X5=3,Z5=2,J5=1,K5=10,Q5=-2,m2=e=>e==="*";function ep(e,t){let r=e.split("/"),n=r.length;return r.some(m2)&&(n+=Q5),t&&(n+=Z5),r.filter(a=>!m2(a)).reduce((a,s)=>a+(W5.test(s)?X5:s===""?J5:K5),n)}function tp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function rp(e,t,r=!1){let{routesMeta:n}=e,a={},s="/",l=[];for(let c=0;c<n.length;++c){let d=n[c],f=c===n.length-1,p=s==="/"?t:t.slice(s.length)||"/",v=ql({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),S=d.route;if(!v&&f&&r&&!n[n.length-1].route.index&&(v=ql({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!v)return null;Object.assign(a,v.params),l.push({params:a,pathname:ho([s,v.pathname]),pathnameBase:lp(ho([s,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(s=ho([s,v.pathnameBase]))}return l}function ql(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=np(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:v},S)=>{if(p==="*"){let w=c[S]||"";l=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const m=c[S];return v&&!m?f[p]=void 0:f[p]=(m||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:l,pattern:e}}function np(e,t=!1,r=!0){di(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function ip(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return di(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function po(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function op(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Ka(e):e;return{pathname:r?r.startsWith("/")?r:ap(r,t):t,search:cp(n),hash:up(a)}}function ap(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function N1(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function th(e){let t=sp(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function rh(e,t,r,n=!1){let a;typeof e=="string"?a=Ka(e):(a={...e},cr(!a.pathname||!a.pathname.includes("?"),N1("?","pathname","search",a)),cr(!a.pathname||!a.pathname.includes("#"),N1("#","pathname","hash",a)),cr(!a.search||!a.search.includes("#"),N1("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,c;if(l==null)c=r;else{let v=t.length-1;if(!n&&l.startsWith("..")){let S=l.split("/");for(;S[0]==="..";)S.shift(),v-=1;a.pathname=S.join("/")}c=v>=0?t[v]:"/"}let d=op(a,c),f=l&&l!=="/"&&l.endsWith("/"),p=(s||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var ho=e=>e.join("/").replace(/\/\/+/g,"/"),lp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,up=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var nh=["POST","PUT","PATCH","DELETE"];new Set(nh);var hp=["GET",...nh];new Set(hp);var Qa=k.createContext(null);Qa.displayName="DataRouter";var Kl=k.createContext(null);Kl.displayName="DataRouterState";k.createContext(!1);var ih=k.createContext({isTransitioning:!1});ih.displayName="ViewTransition";var fp=k.createContext(new Map);fp.displayName="Fetchers";var pp=k.createContext(null);pp.displayName="Await";var Ri=k.createContext(null);Ri.displayName="Navigation";var Ds=k.createContext(null);Ds.displayName="Location";var fi=k.createContext({outlet:null,matches:[],isDataRoute:!1});fi.displayName="Route";var Zc=k.createContext(null);Zc.displayName="RouteError";function mp(e,{relative:t}={}){cr(Rs(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=k.useContext(Ri),{hash:a,pathname:s,search:l}=Os(e,{relative:t}),c=s;return r!=="/"&&(c=s==="/"?r:ho([r,s])),n.createHref({pathname:c,search:l,hash:a})}function Rs(){return k.useContext(Ds)!=null}function Oi(){return cr(Rs(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Ds).location}var oh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ah(e){k.useContext(Ri).static||k.useLayoutEffect(e)}function sn(){let{isDataRoute:e}=k.useContext(fi);return e?Ip():gp()}function gp(){cr(Rs(),"useNavigate() may be used only in the context of a <Router> component.");let e=k.useContext(Qa),{basename:t,navigator:r}=k.useContext(Ri),{matches:n}=k.useContext(fi),{pathname:a}=Oi(),s=JSON.stringify(th(n)),l=k.useRef(!1);return ah(()=>{l.current=!0}),k.useCallback((d,f={})=>{if(di(l.current,oh),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=rh(d,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ho([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,s,a,e])}var xp=k.createContext(null);function vp(e){let t=k.useContext(fi).outlet;return t&&k.createElement(xp.Provider,{value:e},t)}function sh(){let{matches:e}=k.useContext(fi),t=e[e.length-1];return t?t.params:{}}function Os(e,{relative:t}={}){let{matches:r}=k.useContext(fi),{pathname:n}=Oi(),a=JSON.stringify(th(r));return k.useMemo(()=>rh(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function bp(e,t){return lh(e,t)}function lh(e,t,r,n,a){var I;cr(Rs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=k.useContext(Ri),{matches:l}=k.useContext(fi),c=l[l.length-1],d=c?c.params:{},f=c?c.pathname:"/",p=c?c.pathnameBase:"/",v=c&&c.route;{let P=v&&v.path||"";ch(f,!v||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let S=Oi(),m;if(t){let P=typeof t=="string"?Ka(t):t;cr(p==="/"||((I=P.pathname)==null?void 0:I.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${P.pathname}" was given in the \`location\` prop.`),m=P}else m=S;let w=m.pathname||"/",_=w;if(p!=="/"){let P=p.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(P.length).join("/")}let j=Kd(e,{pathname:_});di(v||j!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),di(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Sp(j&&j.map(P=>Object.assign({},P,{params:Object.assign({},d,P.params),pathname:ho([p,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?p:ho([p,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,r,n,a);return t&&M?k.createElement(Ds.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},M):M}function wp(){let e=Np(),t=dp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:s},"ErrorBoundary")," or"," ",k.createElement("code",{style:s},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.createElement("pre",{style:a},r):null,l)}var yp=k.createElement(wp,null),_p=class extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?k.createElement(fi.Provider,{value:this.props.routeContext},k.createElement(Zc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Cp({routeContext:e,match:t,children:r}){let n=k.useContext(Qa);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(fi.Provider,{value:e},r)}function Sp(e,t=[],r=null,n=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=r==null?void 0:r.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);cr(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,d=-1;if(r)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:v,errors:S}=r,m=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||m){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,p,v)=>{let S,m=!1,w=null,_=null;r&&(S=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||yp,c&&(d<0&&v===0?(ch("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,_=null):d===v&&(m=!0,_=p.route.hydrateFallbackElement||null)));let j=t.concat(s.slice(0,v+1)),M=()=>{let I;return S?I=w:m?I=_:p.route.Component?I=k.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=f,k.createElement(Cp,{match:p,routeContext:{outlet:f,matches:j,isDataRoute:r!=null},children:I})};return r&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?k.createElement(_p,{location:r.location,revalidation:r.revalidation,component:w,error:S,children:M(),routeContext:{outlet:null,matches:j,isDataRoute:!0},unstable_onError:n}):M()},null)}function Jc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ap(e){let t=k.useContext(Qa);return cr(t,Jc(e)),t}function kp(e){let t=k.useContext(Kl);return cr(t,Jc(e)),t}function Mp(e){let t=k.useContext(fi);return cr(t,Jc(e)),t}function Kc(e){let t=Mp(e),r=t.matches[t.matches.length-1];return cr(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function jp(){return Kc("useRouteId")}function Np(){var n;let e=k.useContext(Zc),t=kp("useRouteError"),r=Kc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Ip(){let{router:e}=Ap("useNavigate"),t=Kc("useNavigate"),r=k.useRef(!1);return ah(()=>{r.current=!0}),k.useCallback(async(a,s={})=>{di(r.current,oh),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...s}))},[e,t])}var g2={};function ch(e,t,r){!t&&!g2[e]&&(g2[e]=!0,di(!1,r))}k.memo(Tp);function Tp({routes:e,future:t,state:r,unstable_onError:n}){return lh(e,void 0,r,n,t)}function Lp(e){return vp(e.context)}function Ln(e){cr(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pp({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:s=!1}){cr(!Rs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);typeof r=="string"&&(r=Ka(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:S="default"}=r,m=k.useMemo(()=>{let w=po(d,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:v,key:S},navigationType:n}},[l,d,f,p,v,S,n]);return di(m!=null,`<Router basename="${l}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:k.createElement(Ri.Provider,{value:c},k.createElement(Ds.Provider,{children:t,value:m}))}function Ep({children:e,location:t}){return bp(kc(e),t)}function kc(e,t=[]){let r=[];return k.Children.forEach(e,(n,a)=>{if(!k.isValidElement(n))return;let s=[...t,a];if(n.type===k.Fragment){r.push.apply(r,kc(n.props.children,s));return}cr(n.type===Ln,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),cr(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=kc(n.props.children,s)),r.push(l)}),r}var Rl="get",Ol="application/x-www-form-urlencoded";function Ql(e){return e!=null&&typeof e.tagName=="string"}function Dp(e){return Ql(e)&&e.tagName.toLowerCase()==="button"}function Rp(e){return Ql(e)&&e.tagName.toLowerCase()==="form"}function Op(e){return Ql(e)&&e.tagName.toLowerCase()==="input"}function Fp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zp(e,t){return e.button===0&&(!t||t==="_self")&&!Fp(e)}function Mc(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function Bp(e,t){let r=Mc(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(s=>{r.append(a,s)})}),r}var al=null;function Up(){if(al===null)try{new FormData(document.createElement("form"),0),al=!1}catch{al=!0}return al}var Hp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function I1(e){return e!=null&&!Hp.has(e)?(di(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ol}"`),null):e}function $p(e,t){let r,n,a,s,l;if(Rp(e)){let c=e.getAttribute("action");n=c?po(c,t):null,r=e.getAttribute("method")||Rl,a=I1(e.getAttribute("enctype"))||Ol,s=new FormData(e)}else if(Dp(e)||Op(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(n=d?po(d,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||Rl,a=I1(e.getAttribute("formenctype"))||I1(c.getAttribute("enctype"))||Ol,s=new FormData(c,e),!Up()){let{name:f,type:p,value:v}=e;if(p==="image"){let S=f?`${f}.`:"";s.append(`${S}x`,"0"),s.append(`${S}y`,"0")}else f&&s.append(f,v)}}else{if(Ql(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Rl,n=null,a=Ol,l=e}return s&&a==="text/plain"&&(l=s,s=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qp(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&po(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function Vp(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yp(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Gp(e,t,r){let n=await Promise.all(e.map(async a=>{let s=t.routes[a.route.id];if(s){let l=await Vp(s,r);return l.links?l.links():[]}return[]}));return Jp(n.flat(1).filter(Yp).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function x2(e,t,r,n,a,s){let l=(d,f)=>r[f]?d.route.id!==r[f].route.id:!0,c=(d,f)=>{var p;return r[f].pathname!==d.pathname||((p=r[f].route.path)==null?void 0:p.endsWith("*"))&&r[f].params["*"]!==d.params["*"]};return s==="assets"?t.filter((d,f)=>l(d,f)||c(d,f)):s==="data"?t.filter((d,f)=>{var v;let p=n.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(l(d,f)||c(d,f))return!0;if(d.route.shouldRevalidate){let S=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=r[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Wp(e,t,{includeHydrateFallback:r}={}){return Xp(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function Xp(e){return[...new Set(e)]}function Zp(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Jp(e,t){let r=new Set;return new Set(t),e.reduce((n,a)=>{let s=JSON.stringify(Zp(a));return r.has(s)||(r.add(s),n.push({key:s,link:a})),n},[])}function uh(){let e=k.useContext(Qa);return Qc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Kp(){let e=k.useContext(Kl);return Qc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var e0=k.createContext(void 0);e0.displayName="FrameworkContext";function dh(){let e=k.useContext(e0);return Qc(e,"You must render this element inside a <HydratedRouter> element"),e}function Qp(e,t){let r=k.useContext(e0),[n,a]=k.useState(!1),[s,l]=k.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:v}=t,S=k.useRef(null);k.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let _=M=>{M.forEach(I=>{l(I.isIntersecting)})},j=new IntersectionObserver(_,{threshold:.5});return S.current&&j.observe(S.current),()=>{j.disconnect()}}},[e]),k.useEffect(()=>{if(n){let _=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(_)}}},[n]);let m=()=>{a(!0)},w=()=>{a(!1),l(!1)};return r?e!=="intent"?[s,S,{}]:[s,S,{onFocus:hs(c,m),onBlur:hs(d,w),onMouseEnter:hs(f,m),onMouseLeave:hs(p,w),onTouchStart:hs(v,m)}]:[!1,S,{}]}function hs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function e3({page:e,...t}){let{router:r}=uh(),n=k.useMemo(()=>Kd(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?k.createElement(r3,{page:e,matches:n,...t}):null}function t3(e){let{manifest:t,routeModules:r}=dh(),[n,a]=k.useState([]);return k.useEffect(()=>{let s=!1;return Gp(e,t,r).then(l=>{s||a(l)}),()=>{s=!0}},[e,t,r]),n}function r3({page:e,matches:t,...r}){let n=Oi(),{manifest:a,routeModules:s}=dh(),{basename:l}=uh(),{loaderData:c,matches:d}=Kp(),f=k.useMemo(()=>x2(e,t,d,a,n,"data"),[e,t,d,a,n]),p=k.useMemo(()=>x2(e,t,d,a,n,"assets"),[e,t,d,a,n]),v=k.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,_=!1;if(t.forEach(M=>{var P;let I=a.routes[M.route.id];!I||!I.hasLoader||(!f.some(D=>D.route.id===M.route.id)&&M.route.id in c&&((P=s[M.route.id])!=null&&P.shouldRevalidate)||I.hasClientLoader?_=!0:w.add(M.route.id))}),w.size===0)return[];let j=qp(e,l,"data");return _&&w.size>0&&j.searchParams.set("_routes",t.filter(M=>w.has(M.route.id)).map(M=>M.route.id).join(",")),[j.pathname+j.search]},[l,c,n,a,f,t,e,s]),S=k.useMemo(()=>Wp(p,a),[p,a]),m=t3(p);return k.createElement(k.Fragment,null,v.map(w=>k.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),S.map(w=>k.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),m.map(({key:w,link:_})=>k.createElement("link",{key:w,nonce:r.nonce,..._})))}function n3(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hh&&(window.__reactRouterVersion="7.8.2")}catch{}function i3({basename:e,children:t,window:r}){let n=k.useRef();n.current==null&&(n.current=H5({window:r,v5Compat:!0}));let a=n.current,[s,l]=k.useState({action:a.action,location:a.location}),c=k.useCallback(d=>{k.startTransition(()=>l(d))},[l]);return k.useLayoutEffect(()=>a.listen(c),[a,c]),k.createElement(Pp,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:a})}var fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ph=k.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:s,replace:l,state:c,target:d,to:f,preventScrollReset:p,viewTransition:v,...S},m){let{basename:w}=k.useContext(Ri),_=typeof f=="string"&&fh.test(f),j,M=!1;if(typeof f=="string"&&_&&(j=f,hh))try{let T=new URL(window.location.href),X=f.startsWith("//")?new URL(T.protocol+f):new URL(f),C=po(X.pathname,w);X.origin===T.origin&&C!=null?f=C+X.search+X.hash:M=!0}catch{di(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=mp(f,{relative:a}),[P,D,$]=Qp(n,S),H=l3(f,{replace:l,state:c,target:d,preventScrollReset:p,relative:a,viewTransition:v});function Q(T){t&&t(T),T.defaultPrevented||H(T)}let Z=k.createElement("a",{...S,...$,href:j||I,onClick:M||s?t:Q,ref:n3(m,D),target:d,"data-discover":!_&&r==="render"?"true":void 0});return P&&!_?k.createElement(k.Fragment,null,Z,k.createElement(e3,{page:I})):Z});ph.displayName="Link";var o3=k.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:s,to:l,viewTransition:c,children:d,...f},p){let v=Os(l,{relative:f.relative}),S=Oi(),m=k.useContext(Kl),{navigator:w,basename:_}=k.useContext(Ri),j=m!=null&&p3(v)&&c===!0,M=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,I=S.pathname,P=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(I=I.toLowerCase(),P=P?P.toLowerCase():null,M=M.toLowerCase()),P&&_&&(P=po(P,_)||P);const D=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let $=I===M||!a&&I.startsWith(M)&&I.charAt(D)==="/",H=P!=null&&(P===M||!a&&P.startsWith(M)&&P.charAt(M.length)==="/"),Q={isActive:$,isPending:H,isTransitioning:j},Z=$?t:void 0,T;typeof n=="function"?T=n(Q):T=[n,$?"active":null,H?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let X=typeof s=="function"?s(Q):s;return k.createElement(ph,{...f,"aria-current":Z,className:T,ref:p,style:X,to:l,viewTransition:c},typeof d=="function"?d(Q):d)});o3.displayName="NavLink";var a3=k.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:s,method:l=Rl,action:c,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:v,...S},m)=>{let w=h3(),_=f3(c,{relative:f}),j=l.toLowerCase()==="get"?"get":"post",M=typeof c=="string"&&fh.test(c),I=P=>{if(d&&d(P),P.defaultPrevented)return;P.preventDefault();let D=P.nativeEvent.submitter,$=(D==null?void 0:D.getAttribute("formmethod"))||l;w(D||P.currentTarget,{fetcherKey:t,method:$,navigate:r,replace:a,state:s,relative:f,preventScrollReset:p,viewTransition:v})};return k.createElement("form",{ref:m,method:j,action:_,onSubmit:n?d:I,...S,"data-discover":!M&&e==="render"?"true":void 0})});a3.displayName="Form";function s3(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mh(e){let t=k.useContext(Qa);return cr(t,s3(e)),t}function l3(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:s,viewTransition:l}={}){let c=sn(),d=Oi(),f=Os(e,{relative:s});return k.useCallback(p=>{if(zp(p,t)){p.preventDefault();let v=r!==void 0?r:Ms(d)===Ms(f);c(e,{replace:v,state:n,preventScrollReset:a,relative:s,viewTransition:l})}},[d,c,f,r,n,t,e,a,s,l])}function c3(e){di(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=k.useRef(Mc(e)),r=k.useRef(!1),n=Oi(),a=k.useMemo(()=>Bp(n.search,r.current?null:t.current),[n.search]),s=sn(),l=k.useCallback((c,d)=>{const f=Mc(typeof c=="function"?c(new URLSearchParams(a)):c);r.current=!0,s("?"+f,d)},[s,a]);return[a,l]}var u3=0,d3=()=>`__${String(++u3)}__`;function h3(){let{router:e}=mh("useSubmit"),{basename:t}=k.useContext(Ri),r=jp();return k.useCallback(async(n,a={})=>{let{action:s,method:l,encType:c,formData:d,body:f}=$p(n,t);if(a.navigate===!1){let p=a.fetcherKey||d3();await e.fetch(p,r,a.action||s,{preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||c,flushSync:a.flushSync})}else await e.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function f3(e,{relative:t}={}){let{basename:r}=k.useContext(Ri),n=k.useContext(fi);cr(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),s={...Os(e||".",{relative:t})},l=Oi();if(e==null){s.search=l.search;let c=new URLSearchParams(s.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(v=>v).forEach(v=>c.append("index",v));let p=c.toString();s.search=p?`?${p}`:""}}return(!e||e===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:ho([r,s.pathname])),Ms(s)}function p3(e,{relative:t}={}){let r=k.useContext(ih);cr(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=mh("useViewTransitionState"),a=Os(e,{relative:t});if(!r.isTransitioning)return!1;let s=po(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=po(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ql(a.pathname,l)!=null||ql(a.pathname,s)!=null}function fo({width:e,height:t,fill:r}){return o.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const m3=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},g3=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},x3=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(n/a*100);e.forEach(l=>{s>=l&&!t.includes(l)&&(t.push(l),g3(l))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},gh=k.createContext(),e1=()=>{const e=k.useContext(gh);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},v3=({children:e})=>{const[t,r]=k.useState(()=>localStorage.getItem("theme")||"light");k.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),m3(t)},[t]);const s={theme:t,toggleTheme:()=>{r(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{r(l)},isLight:t==="light",isDark:t==="dark"};return o.jsx(gh.Provider,{value:s,children:e})},b3=Rt`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,w3=Rt`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,y3=Rt`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,_3=b.div`
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
    animation: ${e=>e.initialFade?y3:"none"} 0.5s ease-in;
`,C3=b.div`
    animation: ${e=>e.isExiting?w3:b3} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function t0({isVisible:e,initialFade:t=!1}){const{theme:r}=e1(),[n,a]=k.useState(!1),[s,l]=k.useState(!1);return k.useEffect(()=>{!e&&!n&&(a(!0),setTimeout(()=>{l(!0)},800))},[e,n]),o.jsx(_3,{isVisible:e,fadeOutContainer:s,initialFade:t,children:o.jsx(C3,{isExiting:n,children:o.jsx(fo,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const S3=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},A3=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},v2=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},T1=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},k3=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},b2=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},M3=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},j3=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},N3=(e,t="",r="",n="album_collection")=>{const a=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:a,album_name:e,artist_name:t,album_id:r,source:n})},I3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_view",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r})},T3=(e,t="",r="public")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_publish",{event_category:"Community",event_label:t?`${t} - ${e}`:e,album_name:e,artist_name:t,visibility:r})},L3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_save",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r})},w2=(e,t,r="",n="png")=>{typeof window.gtag<"u"&&window.gtag("event","community_poster_download",{event_category:"Community",event_label:r?`${r} - ${t}`:t,poster_id:e,album_name:t,artist_name:r,file_type:n})},P3=e=>{typeof window.gtag<"u"&&window.gtag("event","community_search",{event_category:"Community",event_label:e,search_term:e})},E3=e=>{typeof window.gtag<"u"&&window.gtag("event","community_filter_change",{event_category:"Community",event_label:e,filter_key:e})},y2=(e,t=!1)=>{typeof window.gtag<"u"&&window.gtag("event","profile_view",{event_category:"Profile",event_label:e,username:e,is_owner:t})},D3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_search",{event_category:"Profile",event_label:e,search_term:e})},R3=(e,t=null)=>{typeof window.gtag<"u"&&window.gtag("event","profile_card_click",{event_category:"Profile",event_label:e,username:e,rank:t||void 0})},O3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_edit",{event_category:"Profile",event_label:e,username:e})},F3=(e,t=[])=>{typeof window.gtag<"u"&&window.gtag("event","profile_edit_save",{event_category:"Profile",event_label:e,username:e,fields_changed:t.join(",")})},z3=e=>{typeof window.gtag<"u"&&window.gtag("event","profile_spotify_connect",{event_category:"Profile",event_label:e,username:e})},B3=(e,t)=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_pin",{event_category:"Profile",event_label:e,username:e,poster_id:t})},U3=(e,t,r="")=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_delete",{event_category:"Profile",event_label:r||t,username:e,poster_id:t})},H3=(e,t,r)=>{typeof window.gtag<"u"&&window.gtag("event","profile_poster_visibility",{event_category:"Profile",event_label:`${r}`,username:e,poster_id:t,visibility:r})},$3=()=>{k.useEffect(()=>{v2(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&v2(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function xh(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function q3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32z"},child:[]},{tag:"path",attr:{d:"M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36zm144 0h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36zm143.64 0h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36z"},child:[]}]})(e)}function V3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48z"},child:[]}]})(e)}function Y3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 480a16 16 0 0 1-10.63-4L256 357.41 122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16z"},child:[]}]})(e)}function G3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 128 192 384l-96-96"},child:[]}]})(e)}function vh(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368 144 144m224 0L144 368"},child:[]}]})(e)}function bh(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function _2(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 0 1 412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 0 0-41.95 52.83A16.05 16.05 0 0 1 108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 0 0-22.6 22.65l64 63.89a16 16 0 0 0 22.6 0l64-63.89a16 16 0 0 0-22.6-22.65L272 425.42V352h-32z"},child:[]}]})(e)}function C2(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"336",height:"336",x:"128",y:"128",fill:"none",strokeLinejoin:"round",strokeWidth:"32",rx:"57",ry:"57"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"},child:[]}]})(e)}function W3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32z"},child:[]},{tag:"path",attr:{d:"M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z"},child:[]}]})(e)}function X3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56zM272 48a16 16 0 0 0-32 0v112h32z"},child:[]}]})(e)}function wh(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208z"},child:[]},{tag:"path",attr:{d:"M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96zM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62zm-69.6-275.53c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22zm171.94 56.18c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22zm-6.78 42.97c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51z"},child:[]}]})(e)}function Vl(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"64"},child:[]},{tag:"path",attr:{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},child:[]}]})(e)}function Z3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 152a56 56 0 0 0-56-56H220.11a23.89 23.89 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8zM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8z"},child:[]}]})(e)}function J3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",d:"M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8z"},child:[]},{tag:"rect",attr:{width:"192",height:"192",x:"160",y:"160",rx:"8",ry:"8"},child:[]},{tag:"path",attr:{d:"M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32z"},child:[]}]})(e)}function jc(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"},child:[]}]})(e)}function qo(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z"},child:[]}]})(e)}function yh(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64zm-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48zM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84z"},child:[]}]})(e)}function K3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z"},child:[]},{tag:"path",attr:{d:"M441.36 226.81 426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z"},child:[]},{tag:"path",attr:{d:"m441.36 330.8-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z"},child:[]}]})(e)}function Nc(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 208v-95a80 80 0 0 0-160 0v95"},child:[]},{tag:"rect",attr:{width:"320",height:"272",x:"96",y:"208",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"48",ry:"48"},child:[]}]})(e)}function S2(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288 440 72"},child:[]}]})(e)}function _h(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zm65.83 264H204.18a27.71 27.71 0 0 1-22-10.67 30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z"},child:[]}]})(e)}function Q3(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"},child:[]},{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"},child:[]}]})(e)}function e4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}function t4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 0 0-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z"},child:[]},{tag:"path",attr:{d:"M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 0 0-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z"},child:[]},{tag:"path",attr:{d:"M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 0 0-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z"},child:[]}]})(e)}function r4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 112h352"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224"},child:[]}]})(e)}function n4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M352 144h112v112"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m48 368 121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"},child:[]}]})(e)}const i4=Rt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,o4=Rt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,a4=Rt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,s4=Rt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,l4=b.div`
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
    animation: ${e=>e.isClosing?s4:a4} 0.3s ease-in-out forwards;
`,c4=b.div`
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
    animation: ${e=>e.isClosing?o4:i4} 0.3s ease-in-out forwards;

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
`,u4=b.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,d4=b.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 1px;
`,Ch=b(bh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,h4=b.div`
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

        ${Ch} {
            fill: var(--backgroundColor);
        }
    }
`,r0=b.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,f4=b.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,p4=b.button`
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
`,sl=b.button`
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
`,m4=b.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,g4=b(r0)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,x4=b(r0)`
    opacity: 0.4;
    font-size: 0.75em;
    margin-top: 6px;
    width: 93%;
    text-align: justify;
    font-style: italic;
`,v4=b.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,b4=b.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,w4=b.p`
    font-size: 0.85em;
    margin-inline: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 68, 68, 0.1);
    border-left: 3px solid #ff4444;
    color: #ff4444;
    font-weight: 500;
`;function Fs({title:e,paragraph:t,imageURL:r,postImageText:n,disclaimerText:a,canClose:s,confirmText:l,onConfirm:c,cancelText:d,onCancel:f,isClosing:p,customButton:v,errorMessage:S}){return k.useEffect(()=>(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow="",document.documentElement.style.overflow=""}),[]),o.jsx(l4,{isClosing:p,children:o.jsxs(c4,{isClosing:p,children:[o.jsxs(u4,{children:[o.jsx(v4,{children:o.jsx(fo,{width:25,height:25,fill:"var(--AccentColor)"})}),e&&o.jsx(d4,{children:e}),s&&o.jsx(h4,{onClick:f,children:o.jsx(Ch,{})})]}),o.jsx(b4,{}),S&&o.jsx(w4,{children:S}),t&&o.jsx(r0,{children:t}),r&&o.jsx(f4,{src:r}),n&&o.jsx(g4,{children:n}),a&&o.jsx(x4,{children:a}),o.jsxs(m4,{style:{justifyContent:"center"},children:[v&&o.jsx(sl,{onClick:()=>window.open(v.url,"_blank"),children:v.text}),d&&l?o.jsxs(o.Fragment,{children:[o.jsx(p4,{onClick:f,children:d}),o.jsx(sl,{onClick:c,children:l})]}):o.jsx(o.Fragment,{children:d?o.jsx(sl,{onClick:f,children:d}):l&&o.jsx(sl,{onClick:c,children:l})})]})]})})}const y4=k.createContext(),_4=({children:e})=>{const{t,i18n:r}=Tt(),[n,a]=k.useState(null),[s,l]=k.useState(!1),[c,d]=k.useState(()=>{const H=localStorage.getItem("shownAlerts");return H?JSON.parse(H):{}}),f=()=>{const H={en:{title:"Top Albums This Week",paragraph:"Discover what's trending! The most popular albums of the week will be highlighted at the top of the site. Don't miss what everyone is creating posters for!"},pt:{title:"Top Álbuns da Semana",paragraph:"Descubra as tendências! Os álbuns mais populares da semana aparecerão em destaque no topo do site. Não perca o que todos estão criando posters!"},es:{title:"Álbumes Destacados de la Semana",paragraph:"Descubre las tendencias. Los álbumes más populares de la semana se destacarán en la parte superior del sitio. No te pierdas lo que todos están creando!"},zh:{title:"本周热门专辑",paragraph:"发现趋势！本周最受欢迎的专辑将在网站顶部突出显示。不要错过每个人都在为之创建海报的内容！"}},Q=r.language||"en",Z=H[Q]||H.en;return{id:"top-albums-feature",persistentId:"top-albums-announcement",title:Z.title,paragraph:Z.paragraph,canClose:!0,type:"alert",limitDate:"2026-04-20T23:59:59.999Z"}},p=H=>c[H]===!0,v=H=>{if(!p(H)){const Q={...c,[H]:!0};d(Q),localStorage.setItem("shownAlerts",JSON.stringify(Q))}};k.useEffect(()=>{if(n)return;const H=f();!p(H.persistentId)&&_(H)&&a(H)},[r.language,c]);const S=H=>{_(H)&&(a(H),l(!1))},m=H=>{_(H)&&S({...H,type:"alert"})},w=H=>{S({...H,type:"confirmation"})},_=H=>{if(!H.limitDate)return!0;const Q=new Date(H.limitDate);return new Date<=Q},j=H=>{if(!H.persistentId){_(H)&&m(H);return}!p(H.persistentId)&&_(H)&&S({...H,type:"alert"})},M=()=>{(n==null?void 0:n.type)==="alert"&&D(),!(!n||s)&&(l(!0),setTimeout(()=>{a(null),l(!1),document.body.style.overflow="unset"},300))},I=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&D(),M()},P=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&D(),M()},D=()=>{n!=null&&n.persistentId&&v(n.persistentId)},$={modal:n,showModal:S,showAlert:m,showConfirmation:w,showConditionalAlert:j,closeModal:M,isModalVisible:!!n,hasAlertBeenShown:p,markSpecificAlertAsShown:v};return o.jsxs(y4.Provider,{value:$,children:[e,n&&o.jsx(Fs,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,disclaimerText:n.disclaimerText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?I:null,cancelText:n.cancelText||null,onCancel:n.cancelText?P:n.canClose?M:null,isClosing:s,customButton:n.customButton})]})},C4={BASE_URL:"https://api.posterfy.space"},S4=C4.BASE_URL;class A4{constructor(t=S4){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,a={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`);const s=await fetch(n,a);if(!s.ok){const l=await s.json().catch(()=>({})),c=new Error(l.error||`HTTP error ${s.status}`);throw c.status=s.status,c.code=l.code||null,c}return s.json()}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){const t=encodeURIComponent(`${window.location.origin}/login`);return`${this.baseURL}/auth/google?redirect=${t}`}getSpotifyAuthUrl(){const t=encodeURIComponent(`${window.location.origin}/login`);return`${this.baseURL}/auth/spotify?redirect=${t}`}async publishPoster({spotifyAlbumId:t,albumName:r,artistsName:n,releaseDate:a,posterJson:s,visibility:l="public",albumNameOriginal:c,artistsNameOriginal:d}){return this.request("/api/posters",{method:"POST",body:JSON.stringify({spotifyAlbumId:t,albumName:r,artistsName:n,releaseDate:a,posterJson:s,visibility:l,albumNameOriginal:c,artistsNameOriginal:d})})}async getPoster(t){return this.request(`/api/posters/${t}`)}async updatePosterVisibility(t,r){return this.request(`/api/posters/${t}/visibility`,{method:"PUT",body:JSON.stringify({visibility:r})})}async updatePosterJson(t,r,n,a){return this.request(`/api/posters/${t}`,{method:"PATCH",body:JSON.stringify({posterJson:r,albumName:n,artistsName:a})})}async deletePoster(t){return this.request(`/api/posters/${t}`,{method:"DELETE"})}async registerView(t){return this.request(`/api/posters/${t}/view`,{method:"POST"})}async registerDownload(t){return this.request(`/api/posters/${t}/download`,{method:"POST"})}async registerEdit(t){return this.request(`/api/posters/${t}/edit`,{method:"POST"})}async toggleFavorite(t){return this.request(`/api/posters/${t}/favorite`,{method:"POST"})}async setPinnedPoster(t){return t?this.request("/api/user/pinned",{method:"PUT",body:JSON.stringify({posterId:t})}):this.request("/api/user/pinned",{method:"DELETE"})}async getUserPosters({page:t=1,limit:r=20}={}){return this.request(`/api/user/posters?page=${t}&limit=${r}`)}async getUserFavorites({page:t=1,limit:r=20}={}){return this.request(`/api/user/favorites?page=${t}&limit=${r}`)}async getUserStats(){return this.request("/api/user/stats")}async getCommunityPosters({sort:t="popular",page:r=1,limit:n=20,period:a}={}){const s=new URLSearchParams({sort:t,page:r,limit:n});return a&&s.set("period",a),this.request(`/api/community?${s}`)}async searchCommunity({q:t,page:r=1,limit:n=20}={}){const a=new URLSearchParams({q:t,page:r,limit:n});return this.request(`/api/community/search?${a}`)}async getTrendingAlbums(t=10){return this.request(`/api/community/trending-albums?limit=${t}`)}async getTopUsers({sort:t="posters",limit:r=10}={}){return this.request(`/api/community/top-users?sort=${t}&limit=${r}`)}async getTopPosters(t=5){return this.request(`/api/community?sort=popular&period=week&limit=${t}`)}async searchUsers({q:t="",page:r=1,limit:n=12}={}){const a=new URLSearchParams({q:t,page:r,limit:n});return this.request(`/api/community/search-users?${a}`)}async getAlbumPosters(t,{page:r=1,limit:n=20}={}){return this.request(`/api/community/albums/${t}?page=${r}&limit=${n}`)}async getUserPublicProfile(t,{page:r=1,limit:n=20}={}){return this.request(`/api/community/users/${t}?page=${r}&limit=${n}`)}async getUserPublicStats(t){return this.request(`/api/community/users/${t}/stats`)}}const Xe=new A4,Sh=k.createContext(),pi=()=>{const e=k.useContext(Sh);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},k4=({children:e})=>{const[t,r]=k.useState(null),[n,a]=k.useState(!0),[s,l]=k.useState(!1);k.useEffect(()=>{(async()=>{const _=new URLSearchParams(window.location.search).get("token");_&&(localStorage.setItem("authToken",_),Xe.setAuthToken(_),window.history.replaceState({},document.title,window.location.pathname)),await c()})()},[]);const c=async()=>{const m=localStorage.getItem("authToken");if(!m){r(null),l(!1),a(!1);return}Xe.setAuthToken(m);try{const w=await Xe.getCurrentUser();r(w.user),l(!0),a(!1)}catch{localStorage.removeItem("authToken"),Xe.setAuthToken(null),r(null),l(!1),a(!1)}},S={user:t,loading:n,isAuthenticated:s,loginWithGoogle:()=>{window.location.href=Xe.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=Xe.getSpotifyAuthUrl()},logout:async()=>{try{await Xe.logout(),localStorage.removeItem("authToken"),Xe.setAuthToken(null),r(null),l(!1)}catch(m){console.error("Logout failed:",m),localStorage.removeItem("authToken"),Xe.setAuthToken(null),r(null),l(!1)}},checkAuthStatus:c,updateUser:m=>{r(m)}};return o.jsx(Sh.Provider,{value:S,children:e})};function Yl(){return Yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Yl.apply(this,arguments)}function M4(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var j4=["cdnSuffix","cdnUrl","countryCode","style","svg"],N4="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",I4="svg",T4=127397,Ah=function(t){var r=t.cdnSuffix,n=r===void 0?I4:r,a=t.cdnUrl,s=a===void 0?N4:a,l=t.countryCode,c=t.style,d=t.svg,f=d===void 0?!1:d,p=M4(t,j4);if(typeof l!="string")return null;if(f){var v=""+s+l.toLowerCase()+"."+n;return k.createElement("img",Object.assign({},p,{src:v,style:Yl({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},c)}))}var S=l.toUpperCase().replace(/./g,function(m){return String.fromCodePoint(m.charCodeAt(0)+T4)});return k.createElement("span",Object.assign({role:"img"},p,{style:Yl({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},c)}),S)};const L4=b.div`
  position: relative;
`,P4=b.button`
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
`,E4=b.div`
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
`,D4=b.div`
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
`,R4=b.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,O4=b.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,ll=b.button`
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
`,cl=b.span`
  margin-left: 8px;
`,ul=b(Ah)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function F4(){const[e,t]=k.useState(!1),[r,n]=k.useState(!1),{i18n:a}=Tt();k.useEffect(()=>{const f=localStorage.getItem("language");f&&a.changeLanguage(f);const p=v=>{v.target.closest(".language-selector")||s()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[a]);const s=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},l=f=>{f.stopPropagation(),e?s():t(!0)},c=f=>{a.changeLanguage(f),localStorage.setItem("language",f),s(),j3(f)},d=()=>{switch(a.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return o.jsxs(L4,{className:"language-selector",children:[o.jsx(P4,{onClick:l,"aria-label":"Select language",children:o.jsx(E4,{children:o.jsx(Ah,{countryCode:d(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&o.jsxs(D4,{className:r?"closing":"",children:[o.jsx(R4,{}),o.jsxs(O4,{children:[o.jsxs(ll,{onClick:()=>c("pt"),children:[o.jsx(ul,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(cl,{children:"Português"})]}),o.jsxs(ll,{onClick:()=>c("en"),children:[o.jsx(ul,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(cl,{children:"English"})]}),o.jsxs(ll,{onClick:()=>c("es"),children:[o.jsx(ul,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(cl,{children:"Español"})]}),o.jsxs(ll,{onClick:()=>c("zh"),children:[o.jsx(ul,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),o.jsx(cl,{children:"中文"})]})]})]})]})}function z4(e){return Ze({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function kh(e){return Ze({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function n0(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function B4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function U4(e){return Ze({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function H4(e){return Ze({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Mh(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function $4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function q4(e){return Ze({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function V4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function i0(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Y4(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const G4=b.div`
  position: relative;
`,W4=b.button`
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
`,X4=b.div`
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
`,Z4=b.div`
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
`,J4=b.div`
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
`,Q4=b.button`
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
`,e6=b.div`
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
`,t6=b.span`
  margin-left: 4px;
  font-weight: 500;
`;function r6(){const[e,t]=k.useState(!1),[r,n]=k.useState(!1),{theme:a,setSpecificTheme:s}=e1(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:o.jsx(Y4,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:o.jsx($4,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:o.jsx(U4,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:o.jsx(H4,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:o.jsx(q4,{}),isLight:!1}],c=l.find(v=>v.id===a)||l[0];k.useEffect(()=>{const v=S=>{S.target.closest(".theme-selector")||d()};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[]);const d=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=v=>{v.stopPropagation(),e?d():t(!0)},p=v=>{s(v),d()};return o.jsxs(G4,{className:"theme-selector",children:[o.jsx(W4,{onClick:f,"aria-label":"Select theme",children:o.jsx(X4,{themeColor:c.color,isLight:c.isLight,children:c.icon})}),e&&o.jsxs(Z4,{className:r?"closing":"",children:[o.jsx(J4,{}),o.jsx(K4,{children:l.map(v=>o.jsxs(Q4,{onClick:()=>p(v.id),children:[o.jsx(e6,{className:"theme-preview",color:v.color,isLight:v.isLight,children:v.icon}),o.jsx(t6,{children:v.name})]},v.id))})]})]})}function n6(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"},child:[]}]})(e)}function jh(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"},child:[]}]})(e)}function o0(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function i6(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"},child:[]}]})(e)}function o6(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 20.9811C3.64378 20.7257 1 17.9216 1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811V21H7V20.9811ZM13 12V8H11V12H8L12 17L16 12H13Z"},child:[]}]})(e)}function a6(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 7C10.8954 7 10 7.89543 10 9C10 9.74025 10.4022 10.3866 10.9999 10.7324L11 15H13L13.0011 10.7318C13.5983 10.3858 14 9.73984 14 9C14 7.89543 13.1046 7 12 7Z"},child:[]}]})(e)}function s6(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const l6=b.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: var(--backgroundColor);
  padding: ${({scrolled:e})=>"13px 0"};
  transform: ${({visible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,c6=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,u6=b.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,d6=b.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,h6=b.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,f6=b.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,p6=b.div`
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
`,m6=b.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,g6=b.button`
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
`,x6=b.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,v6=b(s6)`
  font-size: 1.5em;
  color: var(--textColor);
`,b6=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,w6=b.button`
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
`,y6=b.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`,_6=b(a6)`
  font-size: 1.2em;
  color: var(--AccentColor);
`;function Ic({hideLogo:e=!1,hideAccount:t=!1}){var M;const[r,n]=k.useState(!1),[a,s]=k.useState(!0),[l,c]=k.useState(0),[d,f]=k.useState(!1),p=".space",{user:v,isAuthenticated:S}=pi(),m=sn(),_=Oi().pathname.startsWith("/admin");k.useEffect(()=>{const I=()=>{const P=window.scrollY;P<=10?(s(!0),n(!1)):_?(s(!0),n(!0)):(P<l?s(!0):s(!1),n(!0)),c(P)};return window.addEventListener("scroll",I),()=>window.removeEventListener("scroll",I)},[l,_]);const j=()=>{m(S&&v?`/u/${v.username}`:"/login")};return o.jsxs(l6,{scrolled:r,visible:a,$isAdmin:_,children:[o.jsxs(c6,{children:[!e&&o.jsxs(u6,{onClick:()=>m("/"),children:[o.jsx(p6,{children:o.jsx(fo,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),o.jsxs(d6,{children:["Posterfy",o.jsx(h6,{children:p})]})]}),o.jsxs(m6,{children:[((M=v==null?void 0:v.permissions)==null?void 0:M.includes("admin"))&&!_&&o.jsx(w6,{onClick:()=>m("/admin"),title:"Admin",children:o.jsx(y6,{children:o.jsx(_6,{})})}),o.jsx(F4,{}),o.jsx(r6,{}),!t&&o.jsx(g6,{onClick:j,children:o.jsx(x6,{children:v!=null&&v.avatar?o.jsx(b6,{src:v.avatar}):o.jsx(v6,{})})})]})]}),o.jsx(f6,{scrolled:r})]})}const Nh=Rt`
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
`;const C6=Rt`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,S6=b.footer`
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
`,A6=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,k6=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${Nh} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,M6=b.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,j6=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`,N6=b.div`
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
`,I6=b.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`,T6=b.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`,L6=b.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,P6=b.a`
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
`;const E6=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${Nh} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,D6=b.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,R6=b.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,A2=b.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${C6} 1.5s ease-in-out infinite;
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
`;function O6(){const{t:e}=Tt(),{theme:t,setSpecificTheme:r}=e1(),n=new Date().getFullYear();return o.jsxs(S6,{children:[o.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:o.jsxs("div",{children:[o.jsx("h4",{children:"Album Poster Generator Links"}),o.jsxs("nav",{children:[o.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),o.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),o.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),o.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),o.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),o.jsxs(A6,{children:[o.jsxs(k6,{children:[o.jsxs(M6,{children:[o.jsxs(j6,{children:[o.jsx(N6,{children:o.jsx(fo,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"})}),o.jsx(I6,{children:"Posterfy"})]}),o.jsx(T6,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),o.jsx(L6,{children:o.jsxs(P6,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[o.jsx(z4,{})," ",e("ViewGitHub","View on GitHub")]})})]}),o.jsxs(E6,{children:[o.jsx(D6,{children:o.jsxs(A2,{children:[o.jsx(Mh,{}),e("MadeBy","Made with love by")," ",o.jsx("a",{href:"https://avictormorais.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),o.jsx(R6,{children:o.jsxs(A2,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function fs({showNavbar:e=!0,showFooter:t=!0}){return o.jsxs(o.Fragment,{children:[e&&o.jsx(Ic,{}),o.jsx(Lp,{}),t&&o.jsx(O6,{})]})}function F6(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"},child:[]}]})(e)}function Ih(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"},child:[]}]})(e)}function z6(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"},child:[]}]})(e)}function B6(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function U6(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}function H6(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}const Li=(e={})=>{const[t,r]=k.useState(!1),n=k.useRef(null);return k.useEffect(()=>{const a=n.current,s=new IntersectionObserver(([l])=>{l.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return a&&s.observe(a),()=>{a&&s.unobserve(a)}},[e]),[n,t]},$6=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,Th="https://query.wikidata.org/sparql",Tc="https://commons.wikimedia.org/w/api.php",a0="Posterfy/1.0 (posterfy.space)";async function k2(e){let t=e;t.includes("/")&&(t=t.split("/").pop()),t=decodeURIComponent(t),t.startsWith("File:")||(t="File:"+t);const r=new URLSearchParams({action:"query",titles:t,prop:"imageinfo",iiprop:"url",format:"json",origin:"*"});try{const s=(await(await fetch(`${Tc}?${r.toString()}`)).json()).query.pages,l=Object.keys(s)[0];return l==="-1"?null:s[l].imageinfo[0].url}catch{return null}}async function q6(e){const t=`${Tc}?action=query&list=search&srsearch=${encodeURIComponent(e+" signature")}&srnamespace=6&format=json&origin=*`;try{const a=(await(await fetch(t,{headers:{"User-Agent":a0}})).json()).query.search;if(!a||a.length===0)return{svg:null,png:null};const s=a.find(d=>d.title.toLowerCase().endsWith(".svg")),l=a.find(d=>d.title.toLowerCase().endsWith(".png")),c=async d=>{if(!d)return null;const f=`${Tc}?action=query&titles=${encodeURIComponent(d)}&prop=imageinfo&iiprop=url&format=json&origin=*`;try{const v=await(await fetch(f)).json(),S=Object.keys(v.query.pages)[0];return v.query.pages[S].imageinfo[0].url}catch{return null}};return{svg:await c(s==null?void 0:s.title),png:await c(l==null?void 0:l.title)}}catch{return{svg:null,png:null}}}async function V6(e){const t=`
    SELECT ?artist ?spotifyId WHERE {
      ?artist ?label "${e}"@en .
      ?artist wdt:P1902 ?spotifyId .
    }`;try{const n=await(await fetch(`${Th}?query=${encodeURIComponent(t)}&format=json`,{headers:{"User-Agent":a0,Accept:"application/sparql-results+json"}})).json();if(n.results.bindings.length>0)return n.results.bindings[0].spotifyId.value}catch{}return null}async function Lc(e,t=null){let r=e,n=null;if(!e&&t&&(r=await V6(t)),!r){if(t){const s=await q6(t);if(s.svg)return{url:s.svg,spotifyId:null};if(s.png)return{url:s.png,spotifyId:null}}return null}const a=`
    SELECT ?artistLabel ?signature WHERE {
      ?artist wdt:P1902 "${r}" .
      OPTIONAL { ?artist wdt:P109 ?signature . }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`;try{const l=await(await fetch(`${Th}?query=${encodeURIComponent(a)}&format=json`,{headers:{"User-Agent":a0,Accept:"application/sparql-results+json"}})).json();let c=null;if(l.results.bindings.length>0){const d=l.results.bindings[0];c=d.signature?d.signature.value.replace("http://","https://"):null,c&&c.toLowerCase().endsWith(".svg")?n=await k2(c)||c:c&&c.toLowerCase().endsWith(".png")&&(n=await k2(c)||c)}}catch{}return n?{url:n,spotifyId:r}:null}const js=k.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:a,customFont:s,scale:l=1,isThumbnail:c=!1,onArtistIdDiscovered:d},f)=>{const p=k.useRef(null);k.useImperativeHandle(f,()=>({getCanvas:()=>p.current})),k.useEffect(()=>{(async()=>{if(!r)return;const w=p.current,_=w.getContext("2d"),j=2480,M=3508,I=Math.round(j*l),P=Math.round(M*l),D=Math.round((parseInt(t.marginSide)||0)*l),$=Math.round((parseInt(t.marginTop)||0)*l),H=Math.round((parseInt(t.marginCover)||0)*l),Q=Math.round((parseInt(t.marginBackground)||0)*l),Z=Math.round((parseInt(t.coverHorizontalPosition)||0)*l),T=Math.round((parseInt(t.coverVerticalPosition)||0)*l),X=Math.round((parseInt(t.coverBlur)||0)*l*(c?.5:2)),C=async we=>{const xe=new Image;return xe.crossOrigin="anonymous",xe.src=we,new Promise(A=>{xe.onload=()=>{const z=I-H*2,q=z/I*11,ee=H+Z*q,re=H+T*q;if(X>0&&(_.filter=`blur(${X}px)`),_.drawImage(xe,ee,re,z,z),_.filter="none",t.useFade){let ae=_.createLinearGradient(0,0,0,Math.round((3e3-(parseInt(t.marginBackground)||0))*l));const ue=ie(t.backgroundColor);ae.addColorStop(.5,`rgba(${ue.r}, ${ue.g}, ${ue.b}, 0)`),ae.addColorStop(.8,t.backgroundColor),_.fillStyle=ae,_.fillRect(0,0,w.width,Math.round((2500-(parseInt(t.marginBackground)||0))*l))}A()}})},E=async()=>{const we=Math.round(450*l),xe=Math.round(85*l),A=$6(t.textColor,we,xe),z=new Blob([A],{type:"image/svg+xml;charset=utf-8"}),q=URL.createObjectURL(z),ee=new Image;return ee.src=q,new Promise(re=>{ee.onload=()=>{_.globalAlpha="0.5",_.drawImage(ee,I-Math.round(105*l)-we,Math.round(37*l),we,xe),_.globalAlpha="1",URL.revokeObjectURL(q),re()}})},U=async()=>{let we=t.titleSize?parseInt(t.titleSize):230,xe=Math.round(we*l);const A=s||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){_.font=`bold ${xe}px ${A}`;let Je=_.measureText(t.albumName).width;for(;Je>I-D*2;)we-=1,xe=Math.round(we*l),_.font=`bold ${xe}px ${A}`,Je=_.measureText(t.albumName).width;n&&!c&&n(we,!0)}else _.font=`bold ${xe}px ${A}`;_.fillStyle=t.textColor;const z=Math.round(2500*l),q=Math.round(2790*l);t.showTracklist?_.fillText(t.albumName,D,z+$):_.fillText(t.albumName,D,q+$);let ee=t.artistsSize?Math.round(parseInt(t.artistsSize)*l):Math.round(110*l);_.font=`bold ${ee}px ${s||"Montserrat"}`,t.showTracklist?_.fillText(t.artistsName,D,z+$+ee*1.3):_.fillText(t.artistsName,D,Math.round(2820*l)+$+ee);const re=Math.round(70*l),ae=Math.round(60*l),ue=Math.round(3310*l),pe=Math.round(3390*l);_.font=`bold ${re}px ${s||"Montserrat"}`,_.fillText(t.titleRelease,D,ue);const ce=_.measureText(t.titleRelease).width;_.font=`bold ${ae}px ${s||"Montserrat"}`;const _e=_.measureText(t.releaseDate).width,Pe=Math.max(ce,_e)+D+Math.round(100*l);_.font=`bold ${re}px ${s||"Montserrat"}`,_.fillText(t.titleRuntime,Pe,ue),_.globalAlpha=.7,_.font=`bold ${ae}px ${s||"Montserrat"}`,_.fillText(t.runtime,Pe,pe),_.fillText(t.releaseDate,D,pe),_.globalAlpha=1;const be=Math.round(3368*l),J=Math.round(145*l),Ve=Math.round(30*l);_.fillStyle=t.color1,_.fillRect(Math.round((2045-(parseInt(t.marginSide)||0))*l),be,J,Ve),_.fillStyle=t.color2,_.fillRect(Math.round((2190-(parseInt(t.marginSide)||0))*l),be,J,Ve),_.fillStyle=t.color3,_.fillRect(Math.round((2335-(parseInt(t.marginSide)||0))*l),be,J,Ve)},Y=async()=>{_.fillStyle=t.textColor;let we=t.tracksSize?parseInt(t.tracksSize):50,xe=we*l;const A=parseInt(t.marginTop||0),z=parseInt(t.artistsSize)||110,q=Math.round((2500+A+z*1.3+130)*l),re=Math.round(3310*l)-Math.round(50*l),ae=I-D,ue=t.tracklist.split(`
`).filter(be=>be.trim()!=="");if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const be=Ve=>{const Je=Ve*l;_.font=`bold ${Je}px ${s||"Montserrat"}`;const Te=Ve*1.3*l;let Be=D+Math.round(10*l),De=0,it=q,Ye=0;return ue.forEach(St=>{it+Te>=re&&(it=q,Be=Be+De+Je,De=0);const st=_.measureText(`${St}`).width,lt=Be+st;st>De&&(De=st),Ye=Math.max(Ye,lt),it+=Te}),Ye};let J=be(we);for(;J>ae&&we>1;)we-=1,J=be(we);xe=we*l,a&&!c&&a(we,!0)}_.font=`bold ${xe}px ${s||"Montserrat"}`;const ce=we*1.3*l;let _e=D+Math.round(7*l),Ie=0,Pe=q;ue.forEach(be=>{Pe+ce>=re&&(Pe=q,_e=_e+Ie+xe,Ie=0);const J=_.measureText(`${be}`).width;J>Ie&&(Ie=J),_.fillText(`${be}`,_e,Pe),Pe+=ce})},ie=we=>{const xe=parseInt(we.replace("#",""),16);return{r:xe>>16&255,g:xe>>8&255,b:xe&255}},le=we=>{const xe=z=>{const q=z/255;return q<=.03928?q/12.92:Math.pow((q+.055)/1.055,2.4)};return .2126*xe(we.r)+.7152*xe(we.g)+.0722*xe(we.b)>.179?"black":"white"},fe=async()=>{const we=ie(t.backgroundColor),xe=le(we),A=t.textColor,z=c?320:640,q=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${xe}/${z}/spotify:album:${t.albumID}`;let re=await(await fetch(q)).text();xe=="black"?re=re.replace(/fill="#000000"/g,`fill="${A}"`):re=re.replace(/fill="#ffffff"/g,`fill="${A}"`),re=re.replace(t.backgroundColor,"transparent");const ae=new Blob([re],{type:"image/svg+xml"}),ue=URL.createObjectURL(ae);return new Promise(pe=>{const ce=new Image;ce.src=ue,ce.onload=function(){const _e=Math.round(480*l),Ie=Math.round(120*l),Pe=Math.round((2020-(parseInt(t.marginSide)||0))*l),be=Math.round(3235*l);_.drawImage(ce,Pe,be,_e,Ie);const J=c?"image/jpeg":"image/png",Ve=c?.7:1,Je=w.toDataURL(J,Ve);e(Je),URL.revokeObjectURL(ue),pe()}})},ne=async()=>!t.spotifyArtistId&&!t.artistsName?Promise.resolve():new Promise(async we=>{let xe=!1;const A=()=>{xe||(xe=!0,we())},z=setTimeout(A,5e3);try{const q=await Lc(t.spotifyArtistId,t.artistsName);if(!q)return clearTimeout(z),A();const{url:ee,spotifyId:re}=q;!t.spotifyArtistId&&re&&d&&d(re);const ae=480*l,ue=t.signatureScale||1,pe=Math.round(ae*ue),_e=Math.round((2020-(parseInt(t.marginSide)||0))*l)+Math.round(pe/100*(t.signatureHorizontalPosition||0)),Ie=Math.round(30*l),Pe=Math.round(3235*l),be=t.textColor;let J=ee;if(ee.toLowerCase().endsWith(".svg"))try{let Fe=await(await fetch(ee,{mode:"cors"})).text();Fe=Fe.replace(/#000000/gi,be),Fe=Fe.replace(/<svg([^>]*)/,`<svg fill="${be}"$1`),J=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Fe)))}`}catch{}const Ve=new Image;Ve.crossOrigin="anonymous",Ve.onload=()=>{clearTimeout(z);const Je=Ve.width/Ve.height,Fe=Math.round(pe/Je),Be=Pe-Ie-Fe+Math.round(Fe/100*(t.signatureVerticalPosition||0));_.drawImage(Ve,_e,Be,pe,Fe),A()},Ve.onerror=()=>{clearTimeout(z),A()},Ve.onabort=()=>{clearTimeout(z),A()},Ve.src=J}catch{clearTimeout(z),A()}}),ge=async()=>{_.fillStyle=t.backgroundColor;const we=Math.round(2480*l)-Q,xe=P-we;_.fillRect(0,we,I,xe)};_.clearRect(0,0,I,P),_.fillStyle=t.backgroundColor,_.fillRect(0,0,I,P),t.useUncompressed?await C(await t.uncompressedAlbumCover):await C(t.albumCover),await ge(),await U(),t.showTracklist&&await Y(),t.useWatermark&&await E(),t.showArtistSignature&&await ne(),await fe(),await new Promise(we=>requestAnimationFrame(()=>{requestAnimationFrame(we)}))})()},[r,t,e,s,l,c,n,a,d]);const v=Math.round(2480*l),S=Math.round(3508*l);return o.jsx("canvas",{ref:p,width:v,height:S,style:{display:"none"}})});js.displayName="CanvasPoster";const Y6=({posterJson:e,onImageReady:t})=>{const r=k.useRef(!1),n=a=>{!r.current&&t&&(r.current=!0,t(a))};return o.jsx("div",{style:{display:"none"},children:o.jsx(js,{posterData:e,generatePoster:!0,isThumbnail:!0,scale:.3,onImageReady:n})})},G6=Rt`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`,W6=b.div`
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
  animation: ${G6} 2s infinite;
  z-index: 10;
`,X6=({isLoading:e=!0,children:t})=>e?o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[t,o.jsx(W6,{})]}):t,Z6=b.div`
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
`,J6=b.div`
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
`,K6=b.div`
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
`,Q6=b.div`
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
`,em=b.button`
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
`,tm=b.div`
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
`,rm=b.button`
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
`,nm=({posters:e=[],onPosterClick:t=null})=>{const r=sn(),{t:n}=Tt(),[a,s]=k.useState(null),[l,c]=k.useState(!1),[d,f]=k.useState(!1),[p,v]=k.useState(null),[S,m]=k.useState(null),[w,_]=Li(),[j,M]=k.useState([]),[I,P]=k.useState({}),D=e.length===5?[e[4],e[2],e[0],e[1],e[3]]:e.slice(0,5);k.useEffect(()=>{_&&j.length===0&&e.length>0&&[2,1,3,0,4].forEach((C,E)=>{C<e.length&&setTimeout(()=>{M(U=>[...U,C])},E*177)})},[_,e.length]),k.useEffect(()=>{const X=()=>{c(window.innerWidth<=770),f(window.innerWidth>480&&window.innerWidth<=1200)};return X(),window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[]);const $=(X,C)=>{v(X),m(C),document.body.style.overflow="hidden"},H=()=>{v(null),m(null),document.body.style.overflow="auto"},Q=(X,C)=>{t?t(X):$(C,X)},Z=()=>{S!=null&&S._id&&(H(),r(`/p/${S._id}`))},T=(X,C)=>{P(E=>({...E,[X]:C}))};return e.slice(0,5),o.jsxs(o.Fragment,{children:[D.map((X,C)=>o.jsx(Y6,{posterJson:X.posterJson,onImageReady:E=>T(C,E)},`${X._id}-thumbnail`)),o.jsx(Z6,{ref:w,children:D.map((X,C)=>{const E=I[C],U=!!E;return o.jsx(J6,{index:C,isHovered:a===C,hoveredIndex:a,otherIsHovered:a!==null,isMobile:l,isTablet:d,$hasAppeared:j.includes(C),onMouseEnter:()=>s(C),onMouseLeave:()=>s(null),onClick:()=>{U&&Q(X,E)},children:o.jsx(X6,{isLoading:!U,children:o.jsx("img",{src:E||"/placeholder.svg",alt:`${X.artistsName} - ${X.albumName}`,style:{opacity:U?1:0}})})},X._id||C)})}),p&&!t&&S&&o.jsx(K6,{onClick:H,children:o.jsxs(Q6,{onClick:X=>X.stopPropagation(),children:[o.jsxs(tm,{children:[o.jsx(em,{onClick:H,children:"×"}),o.jsx(rm,{onClick:Z,children:n("COMMUNITY_ViewPoster")})]}),o.jsx("img",{src:p,alt:"Poster"})]})})]})},im=()=>{const[e,t]=k.useState([]),[r,n]=k.useState(!0),[a,s]=k.useState(null);return k.useEffect(()=>{(async()=>{try{n(!0);const c=await Xe.getTopPosters(5);t(Array.isArray(c.posters)?c.posters.slice(0,5):[]),s(null)}catch(c){console.error("Error fetching top posters:",c),s(c.message),t([])}finally{n(!1)}})()},[]),{posters:e,loading:r,error:a}},om="/assets/Posterfy%20-%20Graduation.JszPNno1.png",am="/assets/Posterfy%20-%20Blonde.CgecpDDh.png",sm="/assets/Posterfy%20-%20SOS.CNKHszjL.png",lm="/assets/Posterfy%20-%20Don't%20Be%20Dumb.QHClWo6O.png",cm="/assets/Posterfy%20-%20Flower%20Boy.Dq6UXJvZ.png",um=[{id:1,coverImage:om,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c126f7f19c7f0381e56156c94a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg",useUncompressed:!1,albumName:"Graduation",artistsName:"Kanye West",titleSize:200,artistsSize:"110",tracksSize:50,marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2007-09-11",titleRuntime:"Runtime",runtime:"54min 29s",backgroundColor:"#c49578",textColor:"#3d2834",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Good Morning
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
14. Good Night`,color1:"#26383f",color2:"#815532",color3:"#849acd",albumID:"4SZko61aMnmgvNhfhgTuD3",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:am,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1c5649add07ed3720be9d5526",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music124/v4/68/f9/fe/68f9fec8-81b6-38b1-7e27-796c431436fa/814908025306.jpg",useUncompressed:!1,albumName:"Blonde",artistsName:"Frank Ocean",titleSize:200,artistsSize:"110",tracksSize:"47",marginTop:"170",marginSide:160,marginCover:-50,marginBackground:0,titleRelease:"Release date",releaseDate:"2016-08-20",titleRuntime:"Runtime",runtime:"1h 0min 17s",backgroundColor:"#e2e2e3",textColor:"#010101",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Nikes
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
17. Futura Free`,color1:"#90533b",color2:"#b47d5a",color3:"#648c5c",albumID:"3mH6qwIy9crq0I9YQbOuDf",coverZoom:5,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:sm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:lm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
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
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:cm,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c18940ac99f49e44f59e6f7fb3",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/22/fd/10/22fd10a3-881d-2560-64e7-a9df650b9e47/17UM1IM42651.rgb.jpg",useUncompressed:!1,albumName:"Flower Boy",artistsName:"Tyler, The Creator",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2017-07-21",titleRuntime:"Runtime",runtime:"46min 39s",backgroundColor:"#ce9621",textColor:"#140b06",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Foreword
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
14. Enjoy Right Now, Today`,color1:"#e2c999",color2:"#c03319",color3:"#f4d16a",albumID:"2nkto6YNI4rUYTLqEwWJ3o",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],dm=b.div`
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
`,hm=b.div`
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
`,fm=b.div`
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
`,pm=b.div`
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
`,mm=b.div`
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
`,gm=b.button`
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
`,xm=b.button`
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
`,vm=({onRecreate:e})=>{const{t}=Tt(),[r,n]=k.useState(null),[a,s]=k.useState(!1),[l,c]=k.useState(!1),[d,f]=k.useState(null),[p,v]=k.useState(null),[S,m]=Li(),[w,_]=k.useState([]),j=[2,3,1,4,0];k.useEffect(()=>{m&&w.length===0&&j.forEach((D,$)=>{setTimeout(()=>{_(H=>[...H,D])},$*177)})},[m]),k.useEffect(()=>{const D=()=>{s(window.innerWidth<=770),c(window.innerWidth>480&&window.innerWidth<=1200)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const M=(D,$)=>{f(D),v($),document.body.style.overflow="hidden"},I=()=>{f(null),document.body.style.overflow="auto"},P=()=>{f(null),e(p),document.body.style.overflow="auto"};return o.jsxs(o.Fragment,{children:[o.jsx(dm,{ref:S,children:um.map((D,$)=>o.jsx(hm,{index:$,isHovered:r===$,hoveredIndex:r,otherIsHovered:r!==null,isMobile:a,isTablet:l,$hasAppeared:w.includes($),onMouseEnter:()=>n($),onMouseLeave:()=>n(null),onClick:()=>M(D.coverImage||"/placeholder.svg",D.JSONConfig),children:o.jsx("img",{src:D.coverImage||"/placeholder.svg",alt:`${D.artist} - ${D.title}`})},D.id))}),d&&o.jsx(fm,{onClick:I,children:o.jsxs(pm,{onClick:D=>D.stopPropagation(),children:[o.jsxs(mm,{children:[o.jsx(gm,{onClick:I,children:"×"}),o.jsx(xm,{onClick:P,children:t("RecreatePoster")})]}),o.jsx("img",{src:d,alt:"Album cover"})]})})]})},bm=b.div`
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
`,wm=({onRecreate:e})=>{const{posters:t}=im(),r=t&&t.length>=3;return o.jsx(bm,{children:r?o.jsx(nm,{posters:t,onPosterClick:null}):o.jsx(vm,{onRecreate:e})})},ym=b.section`
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
`,_m=b.div`
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
`,Cm=b.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    @media (max-width: 1100px) {
        align-items: center;
        text-align: center;
    }
`,Sm=b.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"40px"});
    transition: opacity 0.8s ease, transform 0.8s ease;
    transition-delay: 100ms;
`,Am=b.h1`
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
`,km=b.p`
    font-size: 1.15em;
    line-height: 1.8;
    color: var(--textColor);
    opacity: 0.75;
    max-width: 500px;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.3px;
`,Mm=b.div`
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
`,jm=b.button`
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
`,Nm=b.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
`,Im=b.div`
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
`,Tm=b.div`
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
`,Lm=b(B6)`
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
`;function Pm({showAnimation:e=!1,onRecreate:t}){const{t:r}=Tt(),{theme:n}=e1(),[a,s]=k.useState(!1);k.useEffect(()=>{if(e){const d=setTimeout(()=>{s(!0)},100);return()=>clearTimeout(d)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},c=()=>{const d=document.querySelector('[data-section="album-search"]');d&&d.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsxs(o.Fragment,{children:[o.jsxs(ym,{children:[o.jsxs(_m,{children:[o.jsxs(Cm,{children:[o.jsxs(Sm,{visible:a,children:[o.jsx(Am,{children:r("heroTitle")||`Your vision,
our design`}),o.jsx(km,{children:r("heroDescription")})]}),o.jsx(Mm,{visible:a,children:o.jsxs(jm,{onClick:c,children:[r("startCreating")||"Start Creating",o.jsx(Nm,{children:o.jsx(H6,{})})]})}),o.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[o.jsx("h2",{children:"Free Album Poster Generator"}),o.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),o.jsx("h3",{children:"Features:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Free album poster maker"}),o.jsx("li",{children:"Spotify integration"}),o.jsx("li",{children:"Custom poster design"}),o.jsx("li",{children:"High-quality downloads"}),o.jsx("li",{children:"Multiple format options"}),o.jsx("li",{children:"Professional templates"})]})]})]}),o.jsx(Im,{visible:a,children:o.jsx(Tm,{children:o.jsx(fo,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),o.jsx(Lm,{visible:a,onClick:l})]}),o.jsx("div",{"data-section":"album-search",children:o.jsx(wm,{onRecreate:t})})]})}const Em=b.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,Dm=b.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function es({text:e,type:t}){return o.jsx(o.Fragment,{children:t==1?o.jsx(Em,{children:e}):o.jsx(Dm,{children:e})})}const Rm=b.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,Om=b.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Fm=b.p`
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
`,M2=b.div`
    display: flex;
`;function t1({title:e,paragraph:t}){return o.jsxs(Rm,{children:[o.jsx(M2,{children:o.jsx(Om,{children:e})}),o.jsx(M2,{children:o.jsx(Fm,{children:t})})]})}function zm(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Bm(e){return Ze({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Um=b.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,Hm=b(zm)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,$m=b.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,qm=b.hr`
    opacity: 0.15;
    margin: 5px;
`,Vm=b.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,Ym=b.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function La({q:e,a:t}){const[r,n]=k.useState(!1);function a(){n(!r)}return o.jsxs(o.Fragment,{children:[o.jsxs(Um,{onClick:a,children:[o.jsx(Hm,{showA:r}),o.jsx($m,{children:e})]}),o.jsx(qm,{}),o.jsx(Vm,{showA:r,children:o.jsx(Ym,{showA:r,children:t})})]})}const Gm=b.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Wm=b.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Xm(){const{t:e}=Tt();return o.jsxs(Gm,{id:"faq",children:[o.jsx(es,{text:"FAQ",type:1}),o.jsxs(Wm,{children:[o.jsx(La,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),o.jsx(La,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),o.jsx(La,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),o.jsx(La,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),o.jsx(La,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),o.jsx(La,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const s0=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:a="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>o.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),o.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),o.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),o.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),o.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),o.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),o.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),o.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),o.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),o.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),o.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),o.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),o.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),o.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),o.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),o.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),o.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),o.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:a}),o.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:a}),o.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:a}),o.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:a}),o.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:a}),o.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),Zm=b.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Jm=b.div`
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
`,Km=b.p`
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
`,Qm=b.button`
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
`;function eg(){const{t:e}=Tt();return o.jsxs(Zm,{id:"share",children:[o.jsx(es,{text:e("Share"),type:1}),o.jsx(t1,{title:e("ShareTitle")}),o.jsx(Jm,{children:o.jsx(s0,{width:"100%"})}),o.jsx(Km,{children:e("ShareDescription")}),o.jsx(Qm,{children:e("ComingSoon")})]})}function r1(e){return Ze({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const wr={getOverview:()=>Xe.request("/api/admin/overview"),getHealth:()=>Xe.request("/api/admin/health"),getUsers:(e={})=>{const t=new URLSearchParams(e).toString();return Xe.request(`/api/admin/users?${t}`)},getUser:e=>Xe.request(`/api/admin/users/${e}`),editUser:(e,t)=>Xe.request(`/api/admin/users/${e}/edit`,{method:"PUT",body:JSON.stringify(t)}),banUser:e=>Xe.request(`/api/admin/users/${e}/ban`,{method:"PUT"}),unbanUser:e=>Xe.request(`/api/admin/users/${e}/unban`,{method:"PUT"}),promoteUser:e=>Xe.request(`/api/admin/users/${e}/promote`,{method:"PUT"}),demoteUser:e=>Xe.request(`/api/admin/users/${e}/demote`,{method:"PUT"}),forceLogout:e=>Xe.request(`/api/admin/users/${e}/force-logout`,{method:"POST"}),purgeUser:e=>Xe.request(`/api/admin/users/${e}/purge`,{method:"DELETE"}),bulkUsers:e=>Xe.request("/api/admin/users/bulk",{method:"PUT",body:JSON.stringify(e)}),getPosters:(e={})=>{const t=new URLSearchParams(e).toString();return Xe.request(`/api/admin/posters?${t}`)},getPoster:e=>Xe.request(`/api/admin/posters/${e}`),deletePoster:e=>Xe.request(`/api/admin/posters/${e}`,{method:"DELETE"}),restorePoster:e=>Xe.request(`/api/admin/posters/${e}/restore`,{method:"PUT"}),purgePoster:e=>Xe.request(`/api/admin/posters/${e}/purge`,{method:"DELETE"}),changeVisibility:(e,t)=>Xe.request(`/api/admin/posters/${e}/visibility`,{method:"PUT",body:JSON.stringify({visibility:t})}),editPoster:(e,t)=>Xe.request(`/api/admin/posters/${e}/edit`,{method:"PUT",body:JSON.stringify(t)}),getLogs:(e={})=>{const t=new URLSearchParams(e).toString();return Xe.request(`/api/admin/logs?${t}`)}},tg=Rt`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,rg=Rt`
    from { opacity: 0; }
    to   { opacity: 1; }
`,ng=Rt`
    from { opacity: 0; transform: scale(0.96) translateY(-4px); }
    to   { opacity: 1; transform: scale(1)    translateY(0);    }
`,n1=b.div`
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
`,ig=b.div`
    position: relative;
    width: 100%;
    /* A4 portrait aspect ratio */
    aspect-ratio: 2480 / 3508;
    background: ${({$bg:e})=>e||"#1a1a1a"};
    overflow: hidden;
    flex-shrink: 0;
`,og=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    animation: ${rg} 0.4s ease;
`,ag=b.div`
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
`,sg=b.p`
    font-size: 1.1em;
    font-weight: 700;
    color: ${({$color:e})=>e||"#fff"};
    opacity: 0.85;
    margin: 0;
    word-break: break-word;
`,lg=b.p`
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
    animation: ${tg} 0.7s linear infinite;
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

    ${n1}:hover & {
        opacity: 1;
    }
`;const cg=b.button`
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

    ${n1}:hover & {
        opacity: 1;
    }

    &:hover {
        transform: scale(1.15);
    }

    &:active { transform: scale(0.95); }
`,ug=b.button`
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

    ${n1}:hover & {
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
`;const dg=b.div`
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
`,hg=b.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,fg=b.p`
    font-size: 0.85em;
    opacity: 0.55;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,j2=b.hr`
    border: none;
    border-top: 1px solid ${({$color:e})=>e?e+"33":"var(--borderColor)"};
    margin: 5px 0;
`,N2=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,I2=b.div`
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
`,T2=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,L2=b.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
`,P2=b.span`
    font-size: 0.85em;
    font-weight: 600;
    opacity: 0.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({$color:e})=>e||"var(--textColor)"};
`,E2=b.span`
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
`;const D2=b.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 14px 14px;
    flex-wrap: wrap;
`,L1=b.button`
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
`,R2=b.span`
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
`,pg=b.div`
    position: fixed;
    inset: 0;
    z-index: 9998;
`,mg=b.div`
    position: fixed;
    z-index: 9999;
    min-width: 222px;
    background: var(--backgroundColor);
    border: 1px solid color-mix(in srgb, var(--textColor) 11%, transparent);
    border-radius: 14px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.22), 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 5px;
    animation: ${ng} 0.13s cubic-bezier(0.22, 1, 0.36, 1) both;
`,so=b.button`
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
`,gg=b.div`
    height: 1px;
    background: color-mix(in srgb, var(--textColor) 10%, transparent);
    margin: 4px 0;
`,xg=b.div`
    font-size: 0.68em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.35;
    padding: 6px 12px 2px;
    color: var(--textColor);
    user-select: none;
`,vg={bronze:"#cd7f32",silver:"#a8a9ad",gold:"#ffc107",diamond:"#5bc4f5"},bg=e=>{if(!e)return null;const[t,r]=e.split("_");return{type:t,tier:r,color:vg[r]||"#999"}};function Pc({poster:e,variant:t="community",onDelete:r,onVisibilityChange:n,onUnfavorite:a,onPin:s,pinned:l=!1,isOwner:c=!1}){var pe;const{t:d}=Tt(),f=sn(),{isAuthenticated:p,user:v}=pi(),S=(pe=v==null?void 0:v.permissions)==null?void 0:pe.includes("admin"),m=k.useRef(null),[w,_]=k.useState(!1),[j,M]=k.useState(null),[I,P]=k.useState(e.favorited||!1),[D,$]=k.useState(!1),[H,Q]=k.useState(null),[Z,T]=k.useState(""),[X,C]=k.useState(!1),[E,U]=k.useState(e.visibility);k.useEffect(()=>{const ce=m.current;if(!ce||j)return;const _e=new IntersectionObserver(([Ie])=>{Ie.isIntersecting&&_(!0)},{threshold:.05});return _e.observe(ce),()=>_e.disconnect()},[j]);const Y=k.useCallback(ce=>{M(ce)},[]),ie=()=>f(`/p/${e._id}`),le=async ce=>{if(ce.stopPropagation(),!p||D)return;$(!0);const _e=I;P(!_e);try{await Xe.toggleFavorite(e._id)}catch{P(_e)}finally{$(!1)}};k.useEffect(()=>{if(!H)return;const ce=Ie=>Ie.preventDefault(),_e=Ie=>{[" ","ArrowUp","ArrowDown","PageUp","PageDown","Home","End"].includes(Ie.key)&&Ie.preventDefault()};return document.addEventListener("wheel",ce,{passive:!1}),document.addEventListener("touchmove",ce,{passive:!1}),document.addEventListener("keydown",_e),()=>{document.removeEventListener("wheel",ce),document.removeEventListener("touchmove",ce),document.removeEventListener("keydown",_e)}},[H]);const fe=ce=>{ce.preventDefault(),ce.stopPropagation();const _e=240,Ie=S?340:220,Pe=ce.clientX+_e>window.innerWidth?ce.clientX-_e:ce.clientX,be=ce.clientY+Ie>window.innerHeight?ce.clientY-Ie:ce.clientY;Q({x:Pe,y:be})},ne=async()=>{if(Q(null),!p||D)return;$(!0);const ce=I;P(!ce);try{await Xe.toggleFavorite(e._id)}catch{P(ce)}finally{$(!1)}},ge=(ce,_e)=>{navigator.clipboard.writeText(ce).catch(()=>{}),T(_e),setTimeout(()=>{T(""),Q(null)},1200)},we=async()=>{Q(null);try{await wr.deletePoster(e._id),C(!0)}catch{}},xe=async()=>{Q(null);const ce=E==="public"?"private":"public";try{await wr.changeVisibility(e._id,ce),U(ce)}catch{}},A=e.authorId,z=e.posterJson||{},q=A?bg(A.badge):null,ee={...z,albumID:e.spotifyAlbumId,albumCover:z.albumCover||"",useUncompressed:!1,useWatermark:!0},re=!!z.albumCover,ae=z.backgroundColor||"#1a1a1a",ue=z.textColor||"#ffffff";return X?null:o.jsxs(o.Fragment,{children:[o.jsxs(n1,{ref:m,onClick:ie,$bg:ae,onContextMenu:fe,children:[o.jsxs(ig,{$bg:ae,children:[w&&re&&!j&&o.jsx(js,{posterData:ee,generatePoster:!0,scale:.3,isThumbnail:!0,onImageReady:Y}),j?o.jsx(og,{src:j,alt:e.albumName}):o.jsxs(ag,{$bg:ae,children:[o.jsx(sg,{$color:ue,children:e.albumName}),o.jsx(lg,{$color:ue,children:e.artistsName})]}),p&&t!=="favorites"&&o.jsx(cg,{$active:I,$bg:ae,$txtColor:ue,onClick:le,children:I?o.jsx(qo,{style:{color:ae,fill:ae}}):o.jsx(jc,{style:{color:ae,stroke:ae}})}),t==="myposters"&&s&&o.jsx(ug,{$active:l,$bg:ae,$txtColor:ue,onClick:ce=>{ce.stopPropagation(),s(e._id)},title:l?"Remover destaque":"Fixar no destaque",children:l?o.jsx(Y3,{style:{color:ae,fill:ae}}):o.jsx(V3,{style:{color:ae,stroke:ae}})})]}),o.jsxs(dg,{children:[o.jsx(hg,{$color:ue,children:e.albumName}),o.jsx(fg,{$color:ue,children:e.artistsName}),t==="community"&&(A==null?void 0:A.username)&&o.jsxs(o.Fragment,{children:[o.jsx(j2,{$color:ue}),o.jsxs(N2,{style:{cursor:"pointer"},onClick:ce=>{ce.stopPropagation(),f(`/u/${A.username}`)},children:[o.jsx(I2,{$color:ue,children:A!=null&&A.avatar?o.jsx(T2,{src:A.avatar,alt:A.name}):((A==null?void 0:A.name)||"?").charAt(0).toUpperCase()}),o.jsxs(L2,{children:[o.jsx(P2,{$color:ue,children:(A==null?void 0:A.name)||(A==null?void 0:A.username)||"Unknown"}),q&&o.jsxs(E2,{$color:ue,children:[d(`BADGE_TYPE_${q.type}`)," ",d(`BADGE_TIER_${q.tier}`)]})]})]})]}),t==="myposters"&&o.jsx(R2,{$backgroundColor:ae,$color:ue,$public:e.visibility==="public",children:e.visibility==="public"?d("DASH_Public"):d("DASH_Private")}),t==="community"&&S&&!c&&e.visibility==="private"&&o.jsxs(R2,{$backgroundColor:ae,$color:ue,$public:!1,children:[d("DASH_Private")," ",o.jsx(Nc,{size:12,style:{marginLeft:4}})]}),t==="favorites"&&o.jsxs(o.Fragment,{children:[o.jsx(j2,{$color:ue}),o.jsxs(N2,{style:{cursor:A!=null&&A.username?"pointer":"default"},onClick:ce=>{A!=null&&A.username&&(ce.stopPropagation(),f(`/u/${A.username}`))},children:[o.jsx(I2,{children:A!=null&&A.avatar?o.jsx(T2,{src:A.avatar,alt:A.name}):((A==null?void 0:A.name)||"?").charAt(0).toUpperCase()}),o.jsxs(L2,{children:[o.jsx(P2,{$color:ue,children:(A==null?void 0:A.name)||(A==null?void 0:A.username)||"Unknown"}),q&&o.jsxs(E2,{$color:ue,children:[d(`BADGE_TYPE_${q.type}`)," ",d(`BADGE_TIER_${q.tier}`)]})]})]})]})]}),t==="myposters"&&o.jsxs(D2,{children:[o.jsx(L1,{$accentColor:ue,$backgroundColor:ae,onClick:ce=>{ce.stopPropagation(),n(e._id,e.visibility==="public"?"private":"public")},children:e.visibility==="public"?d("DASH_MakePrivate"):d("DASH_MakePublic")}),o.jsx(L1,{$danger:!0,$accentColor:ue,$backgroundColor:ae,onClick:ce=>{ce.stopPropagation(),r(e)},children:d("DASH_Delete")})]}),t==="favorites"&&o.jsx(D2,{children:o.jsx(L1,{$danger:!0,$accentColor:ue,$backgroundColor:ae,onClick:ce=>{ce.stopPropagation(),a(e._id)},children:d("DASH_Unfavorite")})})]}),H&&Wd.createPortal(o.jsxs(o.Fragment,{children:[o.jsx(pg,{onClick:()=>Q(null),onContextMenu:ce=>{ce.preventDefault(),Q(null)}}),o.jsxs(mg,{style:{left:H.x,top:H.y},children:[p&&t!=="favorites"&&o.jsxs(so,{onClick:ne,children:[I?o.jsx(qo,{}):o.jsx(jc,{}),d(I?"CARD_CTX_Unlike":"CARD_CTX_Like")]}),o.jsxs(so,{onClick:()=>{Q(null),f(`/p/${e._id}`)},children:[o.jsx(Vl,{}),d("CARD_CTX_Open")]}),o.jsxs(so,{onClick:()=>{Q(null),window.open(`/p/${e._id}`,"_blank")},children:[o.jsx(S2,{}),d("CARD_CTX_OpenNewTab")]}),(A==null?void 0:A.username)&&o.jsxs(so,{onClick:()=>{Q(null),f(`/u/${A.username}`)},children:[o.jsx(Q3,{}),d("CARD_CTX_UserProfile")]}),(A==null?void 0:A.username)&&o.jsxs(so,{onClick:()=>{Q(null),window.open(`/u/${A.username}`,"_blank")},children:[o.jsx(S2,{}),d("CARD_CTX_UserProfileNewTab")]}),S&&o.jsxs(o.Fragment,{children:[o.jsx(gg,{}),o.jsx(xg,{children:d("CARD_CTX_Admin")}),(A==null?void 0:A._id)&&o.jsxs(so,{onClick:()=>ge(String(A._id),"user"),children:[o.jsx(C2,{}),d(Z==="user"?"CARD_CTX_Copied":"CARD_CTX_CopyUserId")]}),o.jsxs(so,{onClick:()=>ge(String(e._id),"poster"),children:[o.jsx(C2,{}),d(Z==="poster"?"CARD_CTX_Copied":"CARD_CTX_CopyPosterId")]}),o.jsxs(so,{onClick:xe,children:[E==="public"?o.jsx(Nc,{}):o.jsx(wh,{}),d(E==="public"?"DASH_MakePrivate":"DASH_MakePublic")]}),o.jsxs(so,{"data-danger":"true",onClick:we,children:[o.jsx(r4,{}),d("CARD_CTX_Delete")]})]})]})]}),document.body)]})}const wg=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[o.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),o.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),o.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),o.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),o.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),o.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),o.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),o.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),o.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),o.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),o.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),o.jsx("g",{fill:r,opacity:"0.3",children:o.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),o.jsxs("g",{fill:t,opacity:"0.2",children:[o.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),o.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),o.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),o.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),o.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),o.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),o.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),o.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),o.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),o.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),o.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),o.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),o.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),o.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),o.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),o.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),o.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),o.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),o.jsx("path",{fill:a,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),o.jsx("path",{fill:a,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),o.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),o.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),o.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),o.jsx("g",{clipPath:"url(#clip0_1_72)",children:o.jsx("path",{fill:a,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_1_72",children:o.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Ja=({width:e=186})=>{const t=e>186?e:186,r=e*417/300;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,fill:"none",viewBox:"0 0 300 417",children:[o.jsx("path",{fill:"#FFBE9D",d:"m53.23 69.01-2.91 35.67a10.66 10.66 0 0 0 6.113 10.513 10.7 10.7 0 0 0 4.167.997 10.663 10.663 0 0 0 11-9.79c.22-2.69.4-4.93.44-5.2 0 0 9.15-.12 10.54-9 .67-4.32 1.33-13.32 1.83-21.48a16.83 16.83 0 0 0-14.43-17.69l-.87-.13c-9.44-.83-15.35 6.7-15.88 16.11"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M72.06 101.07a21 21 0 0 1-11.19-5s1.84 6.83 10.88 7.3z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M81.06 75.24a1.28 1.28 0 0 1-1.41 1.11 1.24 1.24 0 0 1-1.16-1.34 1.29 1.29 0 0 1 1.42-1.11 1.22 1.22 0 0 1 1.15 1.34"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M82.06 74.27c-.19.15-1-.71-2.43-.9s-2.48.35-2.6.16.14-.36.62-.62a3.5 3.5 0 0 1 2.12-.33 3.36 3.36 0 0 1 1.9.92c.39.39.49.71.39.77M67.72 74a1.3 1.3 0 0 1-1.42 1.12 1.24 1.24 0 0 1-1.15-1.34 1.29 1.29 0 0 1 1.41-1.12A1.24 1.24 0 0 1 67.72 74M68.34 72.78c-.19.14-1.05-.71-2.43-.9s-2.48.35-2.61.16.14-.36.63-.62a3.57 3.57 0 0 1 2.12-.34 3.46 3.46 0 0 1 1.9.93c.37.4.47.77.39.77M71.79 84.03a9 9 0 0 1 2.29-.09c.36 0 .7 0 .79-.23a1.8 1.8 0 0 0-.08-1.08l-.66-2.82c-.9-4-1.5-7.3-1.33-7.33a47 47 0 0 1 1.92 7.2c.21 1 .41 1.93.61 2.84a2 2 0 0 1 0 1.4.87.87 0 0 1-.65.43 2.5 2.5 0 0 1-.61 0 8.7 8.7 0 0 1-2.28-.32M69.14 69.97c-.19.36-1.54 0-3.18 0s-3 .21-3.18-.15c-.07-.18.21-.5.78-.78a5.58 5.58 0 0 1 4.85.15c.55.28.81.59.73.78M81.5 68.78c-.28.28-1.18-.18-2.32-.36s-2.14-.09-2.31-.45c-.08-.17.12-.46.58-.7a3.28 3.28 0 0 1 2-.24 3.3 3.3 0 0 1 1.77.89c.33.34.41.68.28.86"}),o.jsx("path",{fill:"#FFBE9D",d:"M53.06 75.78c-.14-.09-5.89-2.7-6.57 3.45s5.63 5.56 5.66 5.39.91-8.84.91-8.84"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M50.49 82.04s-.11.06-.3.13c-.27.079-.56.05-.81-.08a2.67 2.67 0 0 1-1-2.51 3.6 3.6 0 0 1 .47-1.5 1.23 1.23 0 0 1 .9-.73.55.55 0 0 1 .6.36c.06.18 0 .3 0 .32s.14-.09.12-.35a.66.66 0 0 0-.2-.41.78.78 0 0 0-.57-.23 1.52 1.52 0 0 0-1.23.83 3.64 3.64 0 0 0-.56 1.68 2.78 2.78 0 0 0 1.27 2.82 1.18 1.18 0 0 0 1-.05c.28-.13.33-.27.31-.28"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M49.64 75.05a3.24 3.24 0 0 1 2.73 1.93c.28.93.22 1.93.49 2.86s1.06 1.85 2 1.76a1.89 1.89 0 0 0 1.47-1.21c.229-.64.33-1.32.3-2 .05-2.91-.15-5.83.15-8.72a14.83 14.83 0 0 1 3-8.07 8.15 8.15 0 0 1 7.74-3c1.88.43 3.48 1.67 5.33 2.2a7.56 7.56 0 0 0 6.51-1.18q.15-.11.32-.19a1.68 1.68 0 0 0 .86-1.83 1.6 1.6 0 0 0-.28-.64c-3.25-4-9.87-5.93-15-5.39a18.06 18.06 0 0 0-13.06 7.71c-2.79 4.33-3.08 10.88-2.58 15.74M74.73 88.03a4.9 4.9 0 0 1-1.95-.4 5.1 5.1 0 0 1-1.84-.79 4.9 4.9 0 0 1 2 .4 4.85 4.85 0 0 1 1.79.79"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M81.69 94.55a3.74 3.74 0 0 1-.68 1.68 9 9 0 0 1-3.17 3 15.7 15.7 0 0 1-4.06 1.61 7 7 0 0 1-1.78.32 9 9 0 0 1 1.69-.6c1.37-.416 2.691-.98 3.94-1.68a10.2 10.2 0 0 0 3.14-2.83c.63-.87.85-1.53.92-1.5"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M53.87 57.18c1.22.76 2.505 1.41 3.84 1.94 1.39.36 2.809.599 4.24.71a8.34 8.34 0 0 1-8.08-2.65"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M73.61 60.78c-.07.07-.85-.78-2.43-1.65a11.66 11.66 0 0 0-6.77-1.4c-1.36.13-2.67.42-3.88.58a12 12 0 0 1-3.26.06 6.1 6.1 0 0 1-2.11-.64c-.46-.25-.67-.45-.66-.48a9.2 9.2 0 0 0 2.81.76c1.053.072 2.112.012 3.15-.18 1.19-.18 2.49-.48 3.91-.62a11.26 11.26 0 0 1 7 1.6c.62.383 1.187.844 1.69 1.37.4.36.57.6.55.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M54.38 57.58a15.8 15.8 0 0 0 0-3.82 5.9 5.9 0 0 0-1.66-3.37 4.92 4.92 0 0 0-4.5-1 6.2 6.2 0 0 0-3.69 2.89 5.93 5.93 0 0 0-.11 6 4.39 4.39 0 0 0 5.51 1.69c.67-.35 1.22-.9 1.89-1.26a2 2 0 0 1 2.14 0"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M54.8 55.86c.12.09-.38.94-1.15 1.89s-1.53 1.61-1.65 1.47a7.4 7.4 0 0 1 1.25-1.8c.81-.94 1.44-1.64 1.55-1.56"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M47.29 49.78a6.1 6.1 0 0 0-1.16 1.39 3.05 3.05 0 0 0-.36 1.82 3.8 3.8 0 0 0 1.13 2 8.05 8.05 0 0 0 3.89 1.88c.62.087 1.228.248 1.81.48-.63.06-1.264.019-1.88-.12a7.55 7.55 0 0 1-4.19-1.86 4.1 4.1 0 0 1-1.23-2.3 3.3 3.3 0 0 1 .51-2.07c.68-1.02 1.48-1.22 1.48-1.22"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M50.61 49.33a4.1 4.1 0 0 0-1 1 3 3 0 0 0-.45 1.45 4.1 4.1 0 0 0 .49 1.81 7.1 7.1 0 0 0 2.4 2.56c.77.51 1.32.71 1.29.79a2.84 2.84 0 0 1-1.48-.47 6.4 6.4 0 0 1-2.68-2.64 4.35 4.35 0 0 1-.5-2.07 3.1 3.1 0 0 1 .63-1.64c.6-.8 1.31-.86 1.3-.79"}),o.jsx("path",{fill:"#FFBE9D",d:"m73.6 361.67-8.35 38.03 14.26.13 10.34-33.31z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m86.13 384.78-5.21 17.3s15.83 11.1 15.18 14.39l-33.9-8.89 7-27.29z"}),o.jsx("path",{fill:"var(--textColor)",d:"M70.82 397.78a1.44 1.44 0 0 0-1.37 1.33 1.38 1.38 0 0 0 1.3 1.37 1.518 1.518 0 0 0 1.45-1.42 1.42 1.42 0 0 0-1.52-1.27"}),o.jsx("path",{fill:"var(--textColor)",d:"m62.2 407.53.86-2.75 32.2 9.54s1.34 1.05.89 2.07z",opacity:"0.4"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M81.51 402c0 .16-.89 0-1.85.34s-1.57.9-1.7.8.36-1 1.52-1.37 2.11.09 2.03.23M84.68 404.4c0 .17-.79.27-1.54.82s-1.1 1.25-1.26 1.2 0-1 .91-1.68 1.93-.49 1.89-.34M85.59 409.19c-.16 0-.18-.89.49-1.69s1.53-1 1.56-.79-.57.51-1.11 1.17-.78 1.34-.94 1.31M82.26 397.93c-.11.13-.81-.3-1.76-.48s-1.76-.08-1.81-.24.81-.57 1.93-.34 1.76.91 1.64 1.06M83.25 394.42a3.26 3.26 0 0 1-1.7-.46 7.6 7.6 0 0 1-1.63-1 9 9 0 0 1-.84-.77 2 2 0 0 1-.41-.54.74.74 0 0 1 .16-.9 1 1 0 0 1 .82-.19c.214.059.42.146.61.26q.53.272 1 .64c.505.407.94.893 1.29 1.44.376.468.6 1.041.64 1.64-.09 0-.34-.59-1-1.4a7.3 7.3 0 0 0-1.29-1.25 5.7 5.7 0 0 0-.9-.55c-.33-.19-.64-.27-.77-.14s-.06.08 0 .2q.12.219.3.39.358.397.76.75c.457.401.953.756 1.48 1.06q.77.354 1.48.82"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M82.97 394.6a2.76 2.76 0 0 1 0-1.76c.137-.636.38-1.245.72-1.8q.309-.491.7-.92a1.48 1.48 0 0 1 1.31-.57.84.84 0 0 1 .59.66c.03.222.03.448 0 .67-.04.393-.14.778-.3 1.14a4 4 0 0 1-1.19 1.57c-.89.7-1.63.72-1.63.66s.63-.27 1.36-1c.415-.411.739-.905.95-1.45q.187-.483.23-1c0-.38 0-.7-.16-.7s-.53.15-.74.4a5.5 5.5 0 0 0-.67.81 6.3 6.3 0 0 0-.77 1.61c-.31 1.01-.31 1.68-.4 1.68"}),o.jsx("path",{fill:"#FFBE9D",d:"m36.22 368.18.87 38.92 13.88-3.24 2.18-34.81z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m53.83 387.63-1 18s18 7.05 18.15 10.4l-35-.64.36-28.17z"}),o.jsx("path",{fill:"var(--textColor)",d:"M42.06 403.95a1.44 1.44 0 0 0-1 1.62 1.377 1.377 0 0 0 1.59 1 1.51 1.51 0 0 0 1.07-1.72 1.43 1.43 0 0 0-1.77-.88"}),o.jsx("path",{fill:"var(--textColor)",d:"m35.97 415.43.14-2.84 33.55 1.67s1.55.71 1.35 1.81z",opacity:"0.4"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M53.43 405.5c0 .17-.87.23-1.72.77s-1.31 1.24-1.47 1.17.12-1.05 1.16-1.68 2.07-.42 2.03-.26M57.06 407.08c0 .17-.71.45-1.31 1.16s-.77 1.48-.94 1.47-.26-1 .49-1.86 1.76-.93 1.76-.77M59.06 411.52c-.16 0-.38-.82.07-1.75s1.27-1.29 1.34-1.15-.44.64-.8 1.41-.41 1.48-.61 1.49M53.2 401.36c-.08.16-.86-.09-1.83-.05s-1.73.34-1.81.2.65-.75 1.79-.79 1.93.51 1.85.64M53.33 397.72a3.4 3.4 0 0 1-1.76 0 8 8 0 0 1-1.82-.6 8 8 0 0 1-1-.55 2.4 2.4 0 0 1-.53-.43.76.76 0 0 1-.06-.91 1 1 0 0 1 .76-.37c.224-.002.447.032.66.1q.556.15 1.08.39c.586.28 1.125.647 1.6 1.09.8.77 1.07 1.42 1 1.45s-.47-.49-1.28-1.13a7.6 7.6 0 0 0-1.55-.91 7.5 7.5 0 0 0-1-.33c-.37-.1-.68-.11-.78.06s0 .08 0 .19q.166.184.38.31.444.303.92.55.808.417 1.68.68.864.15 1.7.41"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M53.06 397.96a2.8 2.8 0 0 1-.43-1.7c-.019-.651.073-1.3.27-1.92a6 6 0 0 1 .47-1.06 1.44 1.44 0 0 1 1.13-.86.81.81 0 0 1 .73.5q.126.309.17.64c.055.395.055.795 0 1.19a4 4 0 0 1-.79 1.8c-.7.89-1.42 1.08-1.43 1s.55-.41 1.09-1.27c.306-.5.504-1.059.58-1.64a4 4 0 0 0 0-1c-.05-.37-.18-.67-.32-.64s-.48.27-.63.56a7 7 0 0 0-.45.95 6.2 6.2 0 0 0-.37 1.74c-.02 1.04.11 1.69-.02 1.71M81.54 218.13s27.74 71.59 25.45 91.68-16.93 84.97-16.93 84.97l-23.5-8.3 9.41-80-18.14-55.06 5.66-31.23z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M28.27 212.21s0 14.12 1.57 19.86l1.43 8.35c-1 46-.73 154.39-.73 154.39l31.4.38 9.83-179.41z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M72.58 232.55q.024.21 0 .42c0 .3 0 .71-.08 1.23-.08 1.11-.2 2.7-.36 4.74-.32 4.13-.78 10.08-1.34 17.41-1.13 14.7-2.56 35-4 57.48s-2.53 42.79-3.41 57.53c-.43 7.35-.79 13.3-1 17.44-.13 2-.24 3.63-.31 4.74q-.06.78-.09 1.23a2 2 0 0 1-.05.42 2.3 2.3 0 0 1 0-.42v-1.24l.21-4.74c.2-4.15.5-10.1.87-17.45.76-14.72 1.85-35.07 3.25-57.54s2.89-42.78 4.11-57.48c.61-7.35 1.12-13.3 1.51-17.4.2-2 .35-3.62.46-4.73 0-.52.1-.93.13-1.23q.03-.21.1-.41M47.54 236.86c0-.09 1.2-.39 3.1-1.05a19 19 0 0 0 3.19-1.45 9.05 9.05 0 0 0 3.07-2.86 9.6 9.6 0 0 0 1.39-4c.14-1.164.18-2.339.12-3.51-.1-2-.24-3.26-.16-3.27.116.273.187.564.21.86.1.56.23 1.37.32 2.39.12 1.194.12 2.396 0 3.59a9.55 9.55 0 0 1-1.42 4.19 9.24 9.24 0 0 1-3.27 3 16.7 16.7 0 0 1-3.31 1.39c-1 .29-1.78.47-2.34.58-.292.09-.595.137-.9.14M80.46 318.91c-.25-.4-.459-.826-.62-1.27-.37-.83-.87-2.05-1.47-3.56-1.2-3-2.75-7.25-4.26-12s-2.7-9.08-3.47-12.24c-.39-1.58-.68-2.86-.86-3.75a8 8 0 0 1-.24-1.4c.193.433.34.886.44 1.35.26 1 .61 2.22 1 3.71.86 3.13 2.1 7.45 3.6 12.17s3 8.95 4.11 12c.53 1.45 1 2.67 1.32 3.61q.29.669.45 1.38"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M67.65 113.7s43.14 41 42.87 50.62-9.35 12.1-12.37 11.87-26.81-24.28-26.81-24.28z"}),o.jsx("path",{fill:"var(--textColor)",d:"M67.65 113.7s43.14 41 42.87 50.62-9.35 12.1-12.37 11.87-26.81-24.28-26.81-24.28z",opacity:"0.4"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m47.86 104.48 2.68-9.68 21.18 8.59-.47 10.13-10.18 3.43-10.44-5.72z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"m81.54 218.13-3.55-82c-.48-9.81-3.65-21.36-10.05-28.81l-.06-1.32-17.61-3.44s-20.9 4.82-22.09 22.91c-1 14.36-2.17 71.59-2.17 92.66z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M54.16 102.6a19.7 19.7 0 0 1 1.42-5.49 10 10 0 0 1-.51 2.8 9.9 9.9 0 0 1-.91 2.69M62.11 99.51a9.1 9.1 0 0 1-.28 2.77 9 9 0 0 1-.7 2.69 19 19 0 0 1 1-5.46zM68.28 102.22c.054.838.02 1.679-.1 2.51a11 11 0 0 1-.24 2.51 9.46 9.46 0 0 1 .34-5z"}),o.jsx("path",{fill:"var(--textColor)",d:"M37.06 137.78a215.5 215.5 0 0 0 25 37.32c2.48 3 5.12 6.08 8.57 7.93s5.65 1.18 8.9-1a20.9 20.9 0 0 1-8.1-3.5 37.6 37.6 0 0 1-8.41-8.15c-8.47-10.52-16.74-21.38-25.2-31.91",opacity:"0.2"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M45.53 165.97a14.6 14.6 0 0 1-3.37 2.67 14.3 14.3 0 0 1-3.8 2 24 24 0 0 1 3.52-2.45 23.4 23.4 0 0 1 3.65-2.22M35.97 156.47a11.8 11.8 0 0 1-.19-3.4 11.4 11.4 0 0 1 .33-3.39c.24 1.117.303 2.264.19 3.4.07 1.14-.042 2.285-.33 3.39M36.24 192.43a10.7 10.7 0 0 1-2.77-3.32 10.9 10.9 0 0 1-1.7-4c.15-.06.91 1.7 2.15 3.7s2.44 3.52 2.32 3.62M57.27 186.78a41 41 0 0 1-4.21 2.61 42 42 0 0 1-4.24 2.54 16.6 16.6 0 0 1 4-3 17.1 17.1 0 0 1 4.45-2.15M53.48 178.68a13.2 13.2 0 0 1-3.26-1.64 12.4 12.4 0 0 1-3-2.09c1.157.393 2.255.945 3.26 1.64a13 13 0 0 1 3 2.09M54.13 169.72a8.2 8.2 0 0 1 1.46-2.55 8.6 8.6 0 0 1 1.88-2.24 8.2 8.2 0 0 1-1.46 2.54 8.5 8.5 0 0 1-1.88 2.25M37.85 216.68a12.8 12.8 0 0 1-2.92-2.19 13.1 13.1 0 0 1-2.57-2.59 12.6 12.6 0 0 1 2.92 2.2 13.6 13.6 0 0 1 2.57 2.58M51.54 210.69a12.45 12.45 0 0 1-4.7 4.92c.691-.9 1.465-1.733 2.31-2.49a17.8 17.8 0 0 1 2.39-2.43M30.4 161.6a30.6 30.6 0 0 1-.22 8 15.2 15.2 0 0 1-.15-4 15.7 15.7 0 0 1 .37-4M33.06 139.4c0 .15-.9.23-2 .18s-2-.2-2-.34a7.75 7.75 0 0 1 4 .16M36.42 115.38a11.6 11.6 0 0 1-2 2.74 11.4 11.4 0 0 1-2.43 2.4 22.5 22.5 0 0 1 4.47-5.14zM49.34 112.89a13 13 0 0 1-.85-3 12.8 12.8 0 0 1-.64-3 7.3 7.3 0 0 1 1.15 2.88 7.4 7.4 0 0 1 .34 3.12"}),o.jsx("path",{fill:"#FFBE9D",d:"M82.88 107.66c-3 .15-3.31 0-6.66.36a5.2 5.2 0 0 0-1.47.31 1.64 1.64 0 0 0-1 1.08c-.19.93.78 1.72 1.71 1.89s1.91-.05 2.84.12a6.24 6.24 0 0 1 3.82 2c2.06 2.65 4 1.24 5.39 2.15l3.36-2.35-1.47-5.05-6.56-.51"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M87.86 115.56a3.9 3.9 0 0 0-1-.25 8.5 8.5 0 0 1-2.77-.35 4.4 4.4 0 0 1-1.53-1.18 5 5 0 0 0-1.59-1.38 7.3 7.3 0 0 0-2.22-.77 18 18 0 0 0-2.57-.1 2.482 2.482 0 0 1-2.24-1.47 1.44 1.44 0 0 1 .26-1.35 2.26 2.26 0 0 1 1.08-.69 13.4 13.4 0 0 1 2.21-.29c.68-.05 1.33-.09 1.91-.11h2.76a5.4 5.4 0 0 1 1 0 4.3 4.3 0 0 1-1 .13c-.65 0-1.6.08-2.76.15l-1.89.16q-1.071.076-2.12.31c-.68.19-1.33.85-1.08 1.55a2.1 2.1 0 0 0 1.9 1.19q1.31-.05 2.61.11a8 8 0 0 1 2.32.83 5.4 5.4 0 0 1 1.67 1.49c.387.478.876.864 1.43 1.13a9.7 9.7 0 0 0 2.67.46c.253.033.498.115.72.24.16.12.23.17.23.19"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m79.76 104.78 17-9.13a1.07 1.07 0 0 1 1.4.34 1.082 1.082 0 0 1-.39 1.57l-15.53 8.14z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M26.4 203.2a3.5 3.5 0 0 1-.55.16q-.804.198-1.63.29a21.1 21.1 0 0 1-6-.11 28.1 28.1 0 0 1-8.53-2.83 29 29 0 0 1-4.51-2.84 14 14 0 0 1-2.12-1.92 3.3 3.3 0 0 1-.7-1.37 2.2 2.2 0 0 1 .27-1.58 3.31 3.31 0 0 1 2.63-1.46 15 15 0 0 1 2.85.13 28.27 28.27 0 0 1 13.23 5.18 15.5 15.5 0 0 1 4.28 4.28c.293.469.525.973.69 1.5q.111.274.13.57a12.3 12.3 0 0 0-1-2 16 16 0 0 0-4.33-4.09 28.25 28.25 0 0 0-13.07-5 14 14 0 0 0-2.74-.12 2.8 2.8 0 0 0-2.24 1.2 2 2 0 0 0 .39 2.37 15 15 0 0 0 2 1.84 30.6 30.6 0 0 0 4.42 2.82 28.6 28.6 0 0 0 8.37 2.88c1.979.36 3.996.454 6 .28 1.38-.05 2.15-.25 2.16-.18"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M24.17 199.41a2 2 0 0 1-.31-.37l-.81-1.1a46 46 0 0 1-2.7-4.27 20.1 20.1 0 0 1-2.43-7.1 13 13 0 0 1 .19-4.47q.119-.581.32-1.14c.11-.405.29-.787.53-1.13a1.44 1.44 0 0 1 1.2-.69 1.51 1.51 0 0 1 1.16.77 36.2 36.2 0 0 1 5.1 15.79 33 33 0 0 1 0 5.05c0 .59-.11 1.05-.14 1.36a1.4 1.4 0 0 1-.09.47 13 13 0 0 1 0-1.84 39 39 0 0 0-.2-5 37.4 37.4 0 0 0-5.16-15.53 1 1 0 0 0-.75-.54.94.94 0 0 0-.76.48 6.4 6.4 0 0 0-.78 2.07 13.1 13.1 0 0 0-.2 4.3 20.3 20.3 0 0 0 2.28 7c1 1.87 1.91 3.32 2.54 4.32l.73 1.16c.22.25.3.4.28.41M0 222.78a14.07 14.07 0 0 0 10.85-.12 18.5 18.5 0 0 0 5.83-4 35.9 35.9 0 0 0 7.07-10.77c.66-1.45 1.2-2.66 1.62-3.6q.258-.68.64-1.3a7.4 7.4 0 0 1-.45 1.38c-.33.87-.81 2.14-1.47 3.67a34.15 34.15 0 0 1-7 11 18.4 18.4 0 0 1-6 4 14.7 14.7 0 0 1-5.81 1.08 11.9 11.9 0 0 1-3.91-.75 7 7 0 0 1-1-.45 1.1 1.1 0 0 1-.37-.14M22.06 238.31a7 7 0 0 1-.33-1.39l-.15-.75c0-.29-.05-.59-.09-.91 0-.65-.16-1.39-.15-2.21a73.4 73.4 0 0 1 1-12.78c.74-5 1.72-9.38 2.49-12.57.38-1.59.72-2.87 1-3.76q.155-.699.43-1.36c-.03.477-.11.95-.24 1.41l-.8 3.79c-.68 3.2-1.59 7.63-2.33 12.57a87 87 0 0 0-1.13 12.69c-.02 3.26.43 5.25.3 5.27"}),o.jsx("path",{fill:"var(--textColor)",d:"M44.26 104.78s.1-.09.33-.23a5.6 5.6 0 0 1 1-.49 9 9 0 0 1 4.24-.29c2.1.336 4.101 1.121 5.87 2.3a37.4 37.4 0 0 1 5.91 4.94 32.8 32.8 0 0 1 7.47 11.74c.33.84.53 1.62.74 2.3s.32 1.29.41 1.78q.169.762.22 1.54c-.12 0-.4-2.19-1.71-5.49a34.5 34.5 0 0 0-7.51-11.51 40 40 0 0 0-5.8-4.91 14.9 14.9 0 0 0-5.66-2.32 9.4 9.4 0 0 0-4.12.11c-.89.23-1.36.53-1.39.53"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M69.06 174.34s.15 23.48-3.75 24.79c-4.92 1.65-39.26 0-39.26 0v8.43s34.19-2.2 37 2.2c2.65 4.16 27.14 80.54 32.07 103.48h15.45s-8.2-39.4-11.1-49.45c-1.55-5.35-6.69-22.36-11.34-35.63a109.5 109.5 0 0 1-6.14-38.48l.37-17.46-2.68-45H69.8z"}),o.jsx("path",{fill:"var(--textColor)",d:"M69.06 174.34s.15 23.48-3.75 24.79c-4.92 1.65-39.26 0-39.26 0v8.43s34.19-2.2 37 2.2c2.65 4.16 27.14 80.54 32.07 103.48h15.45s-8.2-39.4-11.1-49.45c-1.55-5.35-6.69-22.36-11.34-35.63a109.5 109.5 0 0 1-6.14-38.48l.37-17.46-2.68-45H69.8z",opacity:"0.7"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M100.26 229.21a3.44 3.44 0 0 0 1.89-2 3.4 3.4 0 0 0-.27-2.77c-.58-1-1.72-1.78-1.95-2.94a1.88 1.88 0 0 0-.67 1.26c-.67-.66.07-2-.66-2.63a1.26 1.26 0 0 0-1.42.11 3.92 3.92 0 0 0-1.64 3 5.42 5.42 0 0 0 2.12 4.75q1.175.7 2.27 1.52"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m98.74 229.64-1.12 14.41a1 1 0 0 0 1.8.78c.148-.171.24-.384.26-.61l1.1-14.4z"}),o.jsx("path",{fill:"var(--textColor)",d:"m98.74 229.64-.34-1.13 2.88.11-.48 1.17z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M93.49 239.88c-.11-.44-2-14.37-2.58-19.13a1.4 1.4 0 0 1 2.77-.41l3.26 20.07z"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M86.3 235.65h16.22s5 21.1-3.1 28.14l-5-.89z"}),o.jsx("path",{fill:"var(--textColor)",d:"M86.3 235.65h16.22s5 21.1-3.1 28.14l-5-.89z",opacity:"0.7"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M100.06 262.78c-.351.116-.724.15-1.09.1a6 6 0 0 1-2.83-1 10.24 10.24 0 0 1-3.09-3.18 49 49 0 0 1-2.61-4.72 67.5 67.5 0 0 1-3.67-9.06c-.38-1.19-.64-2.17-.82-2.85a4.8 4.8 0 0 1-.2-1.07c.174.315.309.651.4 1l1 2.79a88 88 0 0 0 3.79 9c.85 1.69 1.67 3.31 2.54 4.69a10.4 10.4 0 0 0 2.88 3.13c.796.55 1.705.915 2.66 1.07.69.1 1.04.02 1.04.1"}),o.jsx("path",{fill:"#FFBE9D",d:"M103.92 154.24a7.8 7.8 0 0 1 .61-2.67 2.62 2.62 0 0 1 2.12-1.56 1.62 1.62 0 0 1 1.225.48 1.63 1.63 0 0 1 .465 1.23 4.1 4.1 0 0 1-.82 1.4c-.94 1.42-.76 3.28-.66 5s0 3.66-1.36 4.75"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M39.06 117.46a14.43 14.43 0 0 0-5.515 9.86 14.42 14.42 0 0 0 3.285 10.81l30.81 36.75a21.74 21.74 0 0 0 27 5 21.73 21.73 0 0 0 11.13-21.25l-7.51-33-15.1 2.38 1.9 25.11-25.76-33.11a14.42 14.42 0 0 0-20.2-2.55z"}),o.jsx("path",{fill:"#FFBE9D",d:"M104.22 170.1c-3.88-.71-4.56-1.34-8.43-2-1.16-.21-2.66-.88-2.21-2.11a1.635 1.635 0 0 1 1.58-1c1.51.05 4 .82 5.4.89.36 0 .33-.34.16-.58a45.5 45.5 0 0 0-7.24-1.19 1.76 1.76 0 0 1-1.496-1.204 1.76 1.76 0 0 1 .496-1.856 2.5 2.5 0 0 1 1-.35c1.55.15 1.55.15 3.2.36 4.63.57 4-.31 4-.31 0-.35-5.27-.6-8-.8a2.28 2.28 0 0 1-1.6-.53 1.53 1.53 0 0 1 .09-1.92 2.66 2.66 0 0 1 1.8-1c3-.2 12.85.42 12.85.42s1.37 1.69 1.15 5.27a20.3 20.3 0 0 1-2.75 7.91"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m90.86 181.48-.42.08-1.21.18c-1.07.15-2.65.38-4.7.5a23 23 0 0 1-7.44-.66 20.9 20.9 0 0 1-8.42-5.13 110 110 0 0 1-8.1-8.86c-2.77-3.31-5.67-6.88-8.7-10.67q-4.545-5.685-9.39-12l-4.89-6.39c-.42-.54-.83-1.09-1.24-1.63l-.59-.86a7 7 0 0 1-.55-.9 14 14 0 0 1-1.49-3.94 13.8 13.8 0 0 1-.29-4.2q.083-1.045.3-2.07a15 15 0 0 1 .62-2q.363-.967.85-1.88.512-.888 1.14-1.7a14 14 0 0 1 2.86-2.84 15.1 15.1 0 0 1 3.47-1.93 14.7 14.7 0 0 1 11.14.34 14.8 14.8 0 0 1 5.55 4.44l4.06 5.3 7.29 9.52 10.54 13.8c1.23 1.62 2.18 2.89 2.84 3.77l.74 1q.126.168.23.35l-.27-.32-.76-1-2.91-3.72-10.64-13.73-7.33-9.49-4.09-5.2a14.4 14.4 0 0 0-5.42-4.31 14.1 14.1 0 0 0-7.16-1.17c-1.26.119-2.498.408-3.68.86a15 15 0 0 0-3.37 1.87 13.7 13.7 0 0 0-2.78 2.76 17 17 0 0 0-1.1 1.66 16.007 16.007 0 0 0-1.43 3.75q-.204.991-.29 2a13.8 13.8 0 0 0 .28 4.09 13.6 13.6 0 0 0 1.45 3.82 28 28 0 0 0 2.34 3.34l4.89 6.39c3.22 4.17 6.35 8.18 9.37 12s5.91 7.38 8.67 10.69a110 110 0 0 0 8 8.86 20.6 20.6 0 0 0 8.29 5.12c2.397.643 4.883.89 7.36.73 2-.09 3.63-.3 4.7-.42l1.22-.14q.228-.047.46-.06"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M87.3 165.03a20.4 20.4 0 0 0-.08-6.48 20.6 20.6 0 0 0-2.52-6c.481.441.887.958 1.2 1.53a13.88 13.88 0 0 1 1.88 9 5.8 5.8 0 0 1-.48 1.95M48.16 132.31a18.5 18.5 0 0 1-3.93-1.85 18 18 0 0 1-3.69-2.31 18.7 18.7 0 0 1 3.94 1.85c1.315.62 2.55 1.395 3.68 2.31M58.62 138.57a15 15 0 0 1 0-4.69 15.2 15.2 0 0 1 1-4.59 35 35 0 0 1-.45 4.65 36 36 0 0 1-.55 4.63M59.78 151.15a15.5 15.5 0 0 1-7.14-2.44c1.229.279 2.43.668 3.59 1.16 1.215.332 2.403.76 3.55 1.28M71.87 157.96a18.5 18.5 0 0 1 .16-4.33c.057-1.452.285-2.892.68-4.29a18.6 18.6 0 0 1-.16 4.34 17.7 17.7 0 0 1-.68 4.28M74.16 170.42a18.8 18.8 0 0 1-3-3.14 18.5 18.5 0 0 1-2.63-3.47 18.4 18.4 0 0 1 3 3.13 18.3 18.3 0 0 1 2.63 3.48M90.61 171.71a34 34 0 0 1-3.83.69 30 30 0 0 1-3.82.74 9.9 9.9 0 0 1 3.72-1.25 9.6 9.6 0 0 1 3.93-.18M92.59 148.85c.342-1.186.85-2.317 1.51-3.36a13.4 13.4 0 0 1 2-3.11 25.9 25.9 0 0 1-3.48 6.47zM92.73 135.96a7.9 7.9 0 0 1-2.61-1.18 8.2 8.2 0 0 1-2.36-1.65c.936.24 1.823.643 2.62 1.19.874.403 1.67.959 2.35 1.64"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M76.55 99.98c-2.09 1.18-3.53 4.17-4.81 6.13a4.9 4.9 0 0 0-.87 1.94c-.026.76.143 1.514.49 2.19.45 1 .94 2 1.43 3.07.14.29.32.61.64.67s.72-.34.86-.72c.255-.979.376-1.988.36-3a3.09 3.09 0 0 1 1.35-2.58"}),o.jsx("path",{fill:"#FFBE9D",d:"m80.33 107.78-2.17-1.46a.633.633 0 0 0-.87.12l-1 1.33.74 3.21c.88 4.13-2.24 3.63-2.24 3.63l-.28-.79-1.6-5c-.39-2.41-.21-2.71.88-4.52l2.41-3.82a2.09 2.09 0 0 1 2.41-.91c3.78 1.19 11.9 3.29 13 6.39 1.92 5.64 3.91 19.83 3.95 20.09l-11.2 1.73-.52-9.57a5.1 5.1 0 0 1-2.25-2.57 73 73 0 0 1-1.26-7.89"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M88.24 109.27s-.11.2-.4.47a3.7 3.7 0 0 1-1.5.86c-.402.102-.82.119-1.23.05a2.2 2.2 0 0 1-1.25-.7c-.7-.76-.85-1.88-1.48-2.67a4.9 4.9 0 0 0-1.2-.9 13 13 0 0 0-1.3-.65 2.5 2.5 0 0 0-1.18-.27 2.4 2.4 0 0 0-.89.59c-1 1-1.51 1.74-1.57 1.68s.09-.21.32-.54a9.6 9.6 0 0 1 1-1.34 2.6 2.6 0 0 1 1-.72q.19-.03.38 0l.35.07q.346.09.68.22.703.28 1.36.65c.49.26.936.598 1.32 1 .72.93.85 2 1.45 2.68a2.17 2.17 0 0 0 2.12.61 3.9 3.9 0 0 0 1.46-.69c.38-.28.54-.43.56-.4M87.16 112.78a9.5 9.5 0 0 1-3.22-.39 9.4 9.4 0 0 1-3-1.09c1.064.143 2.114.374 3.14.69a21.5 21.5 0 0 1 3.08.79"}),o.jsx("path",{fill:"var(--AccentColor)",d:"M82.44 105.36c0-.05.21-.11.52 0a1.34 1.34 0 0 1 .809.989 1.35 1.35 0 0 1-.379 1.221c-.25.24-.46.26-.48.22s.11-.17.25-.4c.19-.297.26-.653.2-1a1.36 1.36 0 0 0-.54-.81c-.21-.1-.39-.16-.38-.22"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M65.24 112.78a3.39 3.39 0 0 0-4.053-.011c-.39.288-.712.657-.947 1.081-.58 1-.64 2.39-1.53 3.18.466.166.98.145 1.43-.06-.22.91-1.78 1-1.91 1.91a1.24 1.24 0 0 0 .82 1.16 4 4 0 0 0 3.39-.11 5.45 5.45 0 0 0 3-4.26q-.006-1.369.14-2.73"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m66.38 113.89 13-6.42a1.001 1.001 0 0 0-.26-1.94 1 1 0 0 0-.66.09l-12.93 6.42z"}),o.jsx("path",{fill:"var(--textColor)",d:"m66.38 113.89-.79.87-1.38-2.52 1.25-.2z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m174.54 272.86-32.69 143.21h7.76l31.91-143.21z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m170.66 272.86-32.68 143.21h7.75l31.91-143.21z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M258.93 264.25c0 1.28 28.44 151.45 28.44 151.45h8.33l-29-151.45z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M255.44 264.25c0 1.28 28.44 151.45 28.44 151.45h8.87l-29.53-151.45z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m236.66 272.86-1.9 143.21h10.48l1.53-143.21z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m160.58 264.25-.67 9.49 88.09 3.01.94-11.31z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M248 276.75h4.91l.9-11.25-4.87-.06z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m166.53 309.78 67.18 3.14v11.43l-69.12-3.42z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m233.71 272.86-1.9 143.21h10.48l1.52-143.21zM189.14 272.86a68 68 0 0 0 0 7.69l36.24 2.08v-8.32zM220.69 0c.43 1 6.07 38.88 6.07 38.88l6.75-.46L228.06 0z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M231.32 2.89 228.06 0l5.45 38.42 2.8-.2zM240.24 17.78c0 .73-.52 20.31-.52 20.31l7.24-.49V17.78z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"M238.4 17.78c0 .73-.52 20.31-.52 20.31l7.24-.49V17.78z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m216.35 18.38-5.36 21.58 6.4-.44 4.87-21.14z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m213.59 18.38-5.36 21.58 6.4-.44 4.87-21.14z"}),o.jsx("path",{fill:"var(--textColor)",d:"m295.3 32.51 4.33 3.83-5.51 229.61h-6.36z"}),o.jsx("path",{fill:"var(--textColor)",d:"m150.98 44.73-18.86 218.65 155.64 2.57 7.54-233.44z"}),o.jsx("path",{fill:"var(--PosterShare-shadeFrames)",d:"m150.98 44.78 2.56-.24 7.53-.66 28.89-2.5 105.32-9h.23v.23c-2 63-4.62 143.89-7.44 231.78 0 .56 0 1.11-.05 1.66v.25h-.26l-155.64-2.6h-.25v-.25c5.63-64.67 10.38-119.35 13.73-157.87 1.69-19.24 3-34.43 3.94-44.83.46-5.18.81-9.17 1-11.87.12-1.33.22-2.35.28-3s.1-1 .1-1 0 .36-.07 1-.14 1.72-.25 3.07c-.23 2.7-.57 6.71-1 11.91-.89 10.41-2.18 25.63-3.81 44.89-3.29 38.49-8 93.13-13.5 157.75l-.23-.26 155.64 2.55-.26.25c0-.54 0-1.1.05-1.65 2.86-87.9 5.5-168.76 7.55-231.79l.22.21-105.2 8.71-28.9 2.39-7.58.62z"})]})},yg=Rt`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,_g=b.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`,Cg=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;


    @media (max-width: 768px) { padding-inline: 5%; }
`,Sg=b.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: start;
    align-items: start;
`,Ag=b.button`
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
`,kg=b.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,Mg=b(i0)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`,jg=b.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`,Ng=b.input`
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
`,Ig=b.button`
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
`,Tg=b.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); padding-inline: 5%; }
    @media (max-width: 500px)  { grid-template-columns: 1fr; padding-inline: 5%; }
`,Lg=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`,Pg=b(r1)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${yg} 0.8s linear infinite;
`,Eg=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,Dg=b.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    margin-top: 20px;
    padding: 10px 20px;
`,Rg=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
`,Og=b.p`
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
`;const Fg=b.button`
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
`,O2=[{key:"popular",labelKey:"COMMUNITY_Popular",sort:"popular",period:null,requiresAuth:!1},{key:"recent",labelKey:"COMMUNITY_Recent",sort:"recent",period:null,requiresAuth:!1},{key:"week",labelKey:"COMMUNITY_ThisWeek",sort:"popular",period:"week",requiresAuth:!1},{key:"myfavorites",labelKey:"COMMUNITY_MyFavorites",sort:null,period:null,requiresAuth:!0}];function zg(){const{t:e}=Tt(),{isAuthenticated:t}=pi(),[r,n]=k.useState("popular"),[a,s]=k.useState(""),[l,c]=k.useState(""),[d,f]=k.useState([]),[p,v]=k.useState(1),[S,m]=k.useState(!1),[w,_]=k.useState(!0),[j,M]=k.useState(!1),[I,P]=k.useState(!1),D=k.useRef(null),$=k.useCallback(async(C,E,U)=>{const Y=O2.find(ie=>ie.key===C);E===1?_(!0):M(!0),P(!1);try{let ie;C==="myfavorites"?ie=await Xe.getUserFavorites({page:E,limit:8}):ie=await Xe.getCommunityPosters({sort:Y.sort,page:E,limit:8,period:Y.period}),f(le=>U?[...le,...ie.posters]:ie.posters),v(E),m(ie.hasMore)}catch(ie){console.error("Community fetch error:",ie),P(!0)}finally{_(!1),M(!1)}},[]),H=k.useCallback(async(C,E,U)=>{E===1?_(!0):M(!0),P(!1);try{const Y=await Xe.searchCommunity({q:C,page:E,limit:8});f(ie=>U?[...ie,...Y.posters]:Y.posters),v(E),m(Y.hasMore)}catch(Y){console.error("Community search error:",Y),P(!0)}finally{_(!1),M(!1)}},[]);k.useEffect(()=>{$("popular",1,!1)},[]),k.useEffect(()=>{!t&&r==="myfavorites"&&(n("popular"),$("popular",1,!1))},[t]);const Q=C=>{C===r&&!l||(clearTimeout(D.current),s(""),c(""),n(C),$(C,1,!1),E3(C))},Z=C=>{const E=C.target.value;if(s(E),clearTimeout(D.current),!E.trim()){c(""),$(r,1,!1);return}D.current=setTimeout(()=>{c(E.trim()),H(E.trim(),1,!1),P3(E.trim())},450)},T=()=>{clearTimeout(D.current),s(""),c(""),$(r,1,!1)},X=()=>{const C=p+1;l?H(l,C,!0):$(r,C,!0)};return o.jsxs(_g,{id:"share",children:[o.jsx(es,{text:e("Community"),type:1}),o.jsx(t1,{title:e("CommunityTitle")}),o.jsxs(Cg,{children:[r!=="myfavorites"&&o.jsxs(kg,{role:"search",children:[o.jsx(Mg,{"aria-hidden":"true"}),o.jsx(jg,{}),o.jsx(Ng,{type:"text",value:a,onChange:Z,placeholder:e("COMMUNITY_SearchPlaceholder"),autoComplete:"off"}),a&&o.jsx(Ig,{onClick:T,type:"button","aria-label":"Clear search",children:o.jsx(vh,{})})]}),o.jsx(Sg,{children:O2.filter(C=>!C.requiresAuth||t).map(C=>o.jsx(Ag,{$active:r===C.key&&!l,onClick:()=>Q(C.key),children:e(C.labelKey)},C.key))})]}),w?o.jsx(Lg,{children:o.jsx(Pg,{})}):I?o.jsxs(Rg,{children:[o.jsx(wg,{width:"30%"}),o.jsx(Og,{children:e("COMMUNITY_FetchError")})]}):d.length===0?o.jsxs(Eg,{children:[o.jsx(Ja,{width:"25%"}),o.jsx(Dg,{children:e("COMMUNITY_NoPosters")})]}):o.jsx(Tg,{children:d.map(C=>o.jsx(Pc,{poster:C},C._id))}),S&&!w&&o.jsx(Fg,{onClick:X,disabled:j,children:e(j?"LoadingMore":"COMMUNITY_LoadMore")})]})}var dl=function(e,t){return e<t?-1:e>t?1:0},F2=function(e){return e.reduce(function(t,r){return t+r},0)},Bg=function(){function e(r){this.colors=r}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(r){return r},e}(),Ug=function(){function e(s,l,c){return(s<<10)+(l<<5)+c}function t(s){var l=[],c=!1;function d(){l.sort(s),c=!0}return{push:function(f){l.push(f),c=!1},peek:function(f){return c||d(),f===void 0&&(f=l.length-1),l[f]},pop:function(){return c||d(),l.pop()},size:function(){return l.length},map:function(f){return l.map(f)},debug:function(){return c||d(),l}}}function r(s,l,c,d,f,p,v){var S=this;S.r1=s,S.r2=l,S.g1=c,S.g2=d,S.b1=f,S.b2=p,S.histo=v}function n(){this.vboxes=new t(function(s,l){return dl(s.vbox.count()*s.vbox.volume(),l.vbox.count()*l.vbox.volume())})}function a(s,l){if(l.count()){var c=l.r2-l.r1+1,d=l.g2-l.g1+1,f=Math.max.apply(null,[c,d,l.b2-l.b1+1]);if(l.count()==1)return[l.copy()];var p,v,S,m,w=0,_=[],j=[];if(f==c)for(p=l.r1;p<=l.r2;p++){for(m=0,v=l.g1;v<=l.g2;v++)for(S=l.b1;S<=l.b2;S++)m+=s[e(p,v,S)]||0;_[p]=w+=m}else if(f==d)for(p=l.g1;p<=l.g2;p++){for(m=0,v=l.r1;v<=l.r2;v++)for(S=l.b1;S<=l.b2;S++)m+=s[e(v,p,S)]||0;_[p]=w+=m}else for(p=l.b1;p<=l.b2;p++){for(m=0,v=l.r1;v<=l.r2;v++)for(S=l.g1;S<=l.g2;S++)m+=s[e(v,S,p)]||0;_[p]=w+=m}return _.forEach(function(M,I){j[I]=w-M}),function(M){var I,P,D,$,H,Q=M+"1",Z=M+"2",T=0;for(p=l[Q];p<=l[Z];p++)if(_[p]>w/2){for(D=l.copy(),$=l.copy(),H=(I=p-l[Q])<=(P=l[Z]-p)?Math.min(l[Z]-1,~~(p+P/2)):Math.max(l[Q],~~(p-1-I/2));!_[H];)H++;for(T=j[H];!T&&_[H-1];)T=j[--H];return D[Z]=H,$[Q]=D[Z]+1,[D,$]}}(f==c?"r":f==d?"g":"b")}}return r.prototype={volume:function(s){var l=this;return l._volume&&!s||(l._volume=(l.r2-l.r1+1)*(l.g2-l.g1+1)*(l.b2-l.b1+1)),l._volume},count:function(s){var l=this,c=l.histo;if(!l._count_set||s){var d,f,p,v=0;for(d=l.r1;d<=l.r2;d++)for(f=l.g1;f<=l.g2;f++)for(p=l.b1;p<=l.b2;p++)v+=c[e(d,f,p)]||0;l._count=v,l._count_set=!0}return l._count},copy:function(){var s=this;return new r(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)},avg:function(s){var l=this,c=l.histo;if(!l._avg||s){var d,f,p,v,S=0,m=0,w=0,_=0;if(l.r1===l.r2&&l.g1===l.g2&&l.b1===l.b2)l._avg=[l.r1<<3,l.g1<<3,l.b1<<3];else{for(f=l.r1;f<=l.r2;f++)for(p=l.g1;p<=l.g2;p++)for(v=l.b1;v<=l.b2;v++)S+=d=c[e(f,p,v)]||0,m+=d*(f+.5)*8,w+=d*(p+.5)*8,_+=d*(v+.5)*8;l._avg=S?[~~(m/S),~~(w/S),~~(_/S)]:[~~(8*(l.r1+l.r2+1)/2),~~(8*(l.g1+l.g2+1)/2),~~(8*(l.b1+l.b2+1)/2)]}}return l._avg},contains:function(s){var l=this,c=s[0]>>3;return gval=s[1]>>3,bval=s[2]>>3,c>=l.r1&&c<=l.r2&&gval>=l.g1&&gval<=l.g2&&bval>=l.b1&&bval<=l.b2}},n.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){for(var l=this.vboxes,c=0;c<l.size();c++)if(l.peek(c).vbox.contains(s))return l.peek(c).color;return this.nearest(s)},nearest:function(s){for(var l,c,d,f=this.vboxes,p=0;p<f.size();p++)((c=Math.sqrt(Math.pow(s[0]-f.peek(p).color[0],2)+Math.pow(s[1]-f.peek(p).color[1],2)+Math.pow(s[2]-f.peek(p).color[2],2)))<l||l===void 0)&&(l=c,d=f.peek(p).color);return d},forcebw:function(){var s=this.vboxes;s.sort(function(f,p){return dl(F2(f.color),F2(p.color))});var l=s[0].color;l[0]<5&&l[1]<5&&l[2]<5&&(s[0].color=[0,0,0]);var c=s.length-1,d=s[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(s[c].color=[255,255,255])}},{quantize:function(s,l){if(!Number.isInteger(l)||l<1||l>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!s.length||l<2||l>256||!s.length||l<2||l>256)return!1;for(var c=[],d=new Set,f=0;f<s.length;f++){var p=s[f],v=p.join(",");d.has(v)||(d.add(v),c.push(p))}if(c.length<=l)return new Bg(c);var S=function(I){var P,D=new Array(32768);return I.forEach(function($){P=e($[0]>>3,$[1]>>3,$[2]>>3),D[P]=(D[P]||0)+1}),D}(s);S.forEach(function(){});var m=function(I,P){var D,$,H,Q=1e6,Z=0,T=1e6,X=0,C=1e6,E=0;return I.forEach(function(U){(D=U[0]>>3)<Q?Q=D:D>Z&&(Z=D),($=U[1]>>3)<T?T=$:$>X&&(X=$),(H=U[2]>>3)<C?C=H:H>E&&(E=H)}),new r(Q,Z,T,X,C,E,P)}(s,S),w=new t(function(I,P){return dl(I.count(),P.count())});function _(I,P){for(var D,$=I.size(),H=0;H<1e3;){if($>=P||H++>1e3)return;if((D=I.pop()).count()){var Q=a(S,D),Z=Q[0],T=Q[1];if(!Z)return;I.push(Z),T&&(I.push(T),$++)}else I.push(D),H++}}w.push(m),_(w,.75*l);for(var j=new t(function(I,P){return dl(I.count()*I.volume(),P.count()*P.volume())});w.size();)j.push(w.pop());_(j,l);for(var M=new n;j.size();)M.push(j.pop());return M}}}().quantize,Lh=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};Lh.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var Ba=function(){};Ba.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},Ba.prototype.getPalette=function(e,t,r){var n=function(c){var d=c.colorCount,f=c.quality;if(d!==void 0&&Number.isInteger(d)){if(d===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");d=Math.max(d,2),d=Math.min(d,20)}else d=10;return(f===void 0||!Number.isInteger(f)||f<1)&&(f=10),{colorCount:d,quality:f}}({colorCount:t,quality:r}),a=new Lh(e),s=function(c,d,f){for(var p,v,S,m,w,_=c,j=[],M=0;M<d;M+=f)v=_[0+(p=4*M)],S=_[p+1],m=_[p+2],((w=_[p+3])===void 0||w>=125)&&(v>250&&S>250&&m>250||j.push([v,S,m]));return j}(a.getImageData().data,a.width*a.height,n.quality),l=Ug(s,n.colorCount);return l?l.palette():null},Ba.prototype.getColorFromUrl=function(e,t,r){var n=this,a=document.createElement("img");a.addEventListener("load",function(){var s=n.getPalette(a,5,r);t(s[0],e)}),a.src=e},Ba.prototype.getImageData=function(e,t){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){if(this.status==200){var n=new Uint8Array(this.response);i=n.length;for(var a=new Array(i),s=0;s<n.length;s++)a[s]=String.fromCharCode(n[s]);var l=a.join(""),c=window.btoa(l);t("data:image/png;base64,"+c)}},r.send()},Ba.prototype.getColorAsync=function(e,t,r){var n=this;this.getImageData(e,function(a){var s=document.createElement("img");s.addEventListener("load",function(){var l=n.getPalette(s,5,r);t(l[0],this)}),s.src=a})};Rt`
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
`;const Ph=b.div`
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
`,Hg=b.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

  &:hover ${Ph} {
    opacity: 0.9;
  }
`;function $g({text:e,children:t,delay:r=0}){const[n,a]=k.useState(!1),[s,l]=k.useState({top:0,left:0}),c=f=>{const p=f.currentTarget.getBoundingClientRect();l({top:p.top+p.height/2-17,left:p.right+15}),a(!0)},d=()=>{a(!1)};return o.jsxs(Hg,{onMouseEnter:c,onMouseLeave:d,children:[o.jsx(Ph,{isVisible:n,style:{top:s.top,left:s.left},children:e}),t]})}const qg=({width:e=667,fillColor:t="#CD7F32"})=>{const r=e*667/667;return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.133 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.6 1.167 17.367 0 79.3-71.434 142.766-150.7 132.166-23.1 41.1-67.1 67.834-115.967 67.834s-92.867-26.734-115.967-67.834c-79.433 10.6-150.699-52.866-150.699-132.166.008-5.808.397-11.61 1.166-17.367C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0M233.292 377a66.2 66.2 0 0 0-46.758 19.331A65.94 65.94 0 0 0 167.167 443c0 28.82-25.569 44-44.084 44 20.278 26.84 55.105 44 88.167 44a88.25 88.25 0 0 0 62.343-25.774A87.92 87.92 0 0 0 299.417 443a65.94 65.94 0 0 0-19.368-46.669A66.2 66.2 0 0 0 233.292 377m272.655-235.62c-8.155-8.58-22.483-8.58-31.079 0L277.375 338.5l60.614 60.5 197.493-197.12c8.597-8.58 8.597-22.88 0-31.02z"})})},Vg=({width:e=667,fillColor:t="#868686"})=>{const r=e*667/667;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:[o.jsx("path",{fill:t,d:"M183.279 334.043a35.63 35.63 0 0 1 36.671 14.965 35.39 35.39 0 0 1-9.5 49.4 35.623 35.623 0 0 1-55.009-36.192 35.627 35.627 0 0 1 27.838-28.173M211.8 215.525a35.627 35.627 0 0 1 33.325 52.496 35.626 35.626 0 1 1-33.325-52.496M423.498 167.612a35.63 35.63 0 0 1 35.377 18.471 35.624 35.624 0 0 1-52.91 45.284 35.63 35.63 0 0 1-12.787-37.805 35.63 35.63 0 0 1 11.185-17.619 35.64 35.64 0 0 1 19.135-8.331M302.3 144.018a35.625 35.625 0 1 1 13.9 69.88 35.625 35.625 0 0 1-13.9-69.88"}),o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.134 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.599 1.167 17.366 0 79.3-71.434 142.767-150.7 132.167-23.1 41.1-67.1 67.833-115.967 67.833s-92.867-26.733-115.967-67.833c-79.433 10.6-150.699-52.867-150.699-132.167.008-5.808.397-11.609 1.166-17.366C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0m95.523 114.107a251.8 251.8 0 0 0-97.994-18.274 237.5 237.5 0 0 0-168.111 69.143 237.499 237.499 0 0 0 166.924 405.857 61.27 61.27 0 0 0 60.088-44.888 59.85 59.85 0 0 0-13.538-54.149 11.88 11.88 0 0 1 2.4-17.763 11.9 11.9 0 0 1 6.388-1.95H424.2a146.06 146.06 0 0 0 146.3-134.662 201.4 201.4 0 0 0-13.89-80.25 201.4 201.4 0 0 0-44.535-68.188 251.8 251.8 0 0 0-83.219-54.876"})]})},Yg=({width:e=667,fillColor:t="#E7B214"})=>{const r=e*667/667;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,fill:"none",viewBox:"0 0 667 667",children:[o.jsx("path",{fill:t,d:"M229 365c13.3 0 24 10.7 24 24 0 48.6 39.4 88 88 88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-75.1 0-136-60.9-136-136 0-13.3 10.7-24 24-24"}),o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.133 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.6 1.167 17.367 0 79.3-71.434 142.766-150.7 132.166-23.1 41.1-67.1 67.834-115.967 67.834s-92.867-26.734-115.967-67.834c-79.433 10.6-150.699-52.866-150.699-132.166.008-5.808.397-11.61 1.166-17.367C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0m-.533 61c-10 0-19.3 4.5-25.2 12.5C271.199 122.9 141 305.8 141 397c0 106 86 192 192 192s192-86 192-192c0-91.2-130.199-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5z"})]})},Gg=({width:e=667,fillColor:t="#29A2DA"})=>{const r=e*667/667;return o.jsxs("svg",{width:e,height:r,viewBox:"0 0 667 667",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M398.439 350.221L332.525 521.031L266.576 350.221H398.439Z",fill:t}),o.jsx("path",{d:"M217.057 350.221L276.097 503.15L130.473 350.221H217.057Z",fill:t}),o.jsx("path",{d:"M534.509 350.221L389 503.035L447.971 350.221H534.509Z",fill:t}),o.jsx("path",{d:"M215.531 304.019H115.222L172.574 198.608C173.45 196.982 174.749 195.621 176.333 194.67C177.917 193.719 179.728 193.212 181.575 193.202H242.371L215.531 304.019Z",fill:t}),o.jsx("path",{d:"M401.929 304.019H263.087L289.927 193.202H375.101L401.929 304.019Z",fill:t}),o.jsx("path",{d:"M483.418 193.202C487.092 193.202 490.558 195.224 492.406 198.608L549.76 304.019H449.484L422.645 193.202H483.418Z",fill:t}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.7332 449.3 67.833C528.566 57.0663 600 120.7 600 200C600 205.767 599.6 211.566 598.833 217.366C639.933 240.499 666.667 284.5 666.667 333.333C666.667 382.166 639.933 426.166 598.833 449.3C599.6 455.1 600 460.9 600 466.667C600 545.967 528.566 609.433 449.3 598.833C426.2 639.933 382.2 666.667 333.333 666.667C284.466 666.667 240.466 639.933 217.366 598.833C137.933 609.433 66.6672 545.967 66.667 466.667C66.6749 460.859 67.064 455.057 67.833 449.3C26.7332 426.166 0 382.166 0 333.333C0.000111393 284.5 26.7331 240.5 67.833 217.366C67.0664 211.566 66.667 205.767 66.667 200C66.667 120.7 137.933 57.0667 217.366 67.833C240.466 26.7331 284.466 0.000111302 333.333 0ZM181.575 147C171.415 147.01 161.446 149.758 152.717 154.956C143.988 160.154 136.822 167.608 131.975 176.535L67.9092 294.305C62.1661 304.874 59.9172 316.989 61.4863 328.914C63.0555 340.839 68.3617 351.961 76.6436 360.686L299.678 594.932C303.908 599.377 308.998 602.917 314.639 605.335C320.279 607.753 326.353 609 332.49 609C338.628 609 344.701 607.753 350.342 605.335C355.982 602.917 361.073 599.377 365.304 594.932L588.35 360.686C596.633 351.962 601.94 340.841 603.512 328.916C605.083 316.991 602.837 304.875 597.096 294.305L533.007 176.535C528.16 167.608 520.994 160.154 512.265 154.956C503.536 149.758 493.566 147.01 483.406 147H181.575Z",fill:t})]})},Wg=({width:e=667,fillColor:t="var(--AccentColor)"})=>{const r=e*667/667;return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 667 667",fill:"none",children:o.jsx("path",{fill:t,fillRule:"evenodd",clipRule:"evenodd",d:"M333.333 0C382.2 0 426.2 26.733 449.3 67.833 528.566 57.066 600 120.7 600 200c0 5.767-.4 11.566-1.167 17.366 41.1 23.134 67.834 67.134 67.834 115.967s-26.734 92.833-67.834 115.967c.767 5.8 1.167 11.599 1.167 17.366 0 79.3-71.434 142.767-150.7 132.167-23.1 41.1-67.1 67.833-115.967 67.833s-92.867-26.733-115.967-67.833c-79.433 10.6-150.699-52.867-150.699-132.167.008-5.808.397-11.609 1.166-17.366C26.733 426.166 0 382.166 0 333.333S26.733 240.5 67.833 217.366A133 133 0 0 1 66.667 200c0-79.3 71.266-142.933 150.699-132.167C240.466 26.733 284.466 0 333.333 0M156.832 151.333v43.025H111V377.93h41.536v43.026h47.268v45.893h40.099v44.459h45.832v43.025h94.533v-43.025H426.1v-44.459h40.099v-45.894h47.265V377.93H555V194.358h-45.833v-43.025H370.239v44.46h-74.478v-44.46z"})})},Xg={creator_bronze:{key:"bronze",color:"#cd7f32",Component:qg},creator_silver:{key:"silver",color:"#868686",Component:Vg},creator_gold:{key:"gold",color:"#e7b214",Component:Yg},creator_diamond:{key:"diamond",color:"#29a2da",Component:Gg},admin:{key:"admin",color:"var(--AccentColor)",Component:Wg}},Zg=Rt`
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(1.15) drop-shadow(0 0 2px #5bc4f5aa); }
`,Jg=b.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  cursor: pointer;
  flex-shrink: 0;
  animation: ${e=>e.$tier==="diamond"?Zg:"none"} 2.8s ease-in-out infinite;
`;function Ns({badge:e,badgeProgress:t,isOwner:r=!1,size:n=20}){const{t:a}=Tt(),s=Xg[e];if(!s)return null;const{key:l,color:c,Component:d}=s;let f=a(l==="admin"?"BADGE_Admin":`BADGE_TIER_${l}`);if(l!=="admin"&&r&&t)if(t.nextTier){const p=a(`BADGE_TIER_${t.nextTier}`);f+=` — ${a("BADGE_Progress",{score:t.score,next:t.nextThreshold,tier:p})}`}else f+=` — ${a("BADGE_MaxTier")}`;return o.jsx($g,{text:f,delay:200,children:o.jsx(Jg,{$tier:l,$size:n,children:o.jsx(d,{width:n,fillColor:c})})})}const Kg=Rt`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`,Qg=Rt`
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
`,e8=Rt`
    from { background-position: 100% 0; }
    to   { background-position: -100% 0; }
`,t8=b.div`
    width: 100%;
    margin-top: 80px;
    padding-bottom: 60px;
`,r8=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    width: 80%;
    margin-inline: auto;

    @media (max-width: 768px) { width: 90%; padding-inline: 0; }
`,n8=b.div`
    background-color: var(--glassBackground);
    width: 100%;
    height: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) { height: 44px; }
`,i8=b(i0)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    flex-shrink: 0;
`,o8=b.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
    flex-shrink: 0;
`,a8=b.input`
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
`,s8=b.button`
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
`,l8=b.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 36px;
    padding-inline: 10%;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 600px)  { grid-template-columns: 1fr; padding-inline: 5%; gap: 10px; }
`,c8=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
`,u8=b(r1)`
    font-size: 2em;
    color: var(--AccentColor);
    animation: ${Kg} 0.8s linear infinite;
`,d8=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,h8=b.p`
    font-size: 1em;
    opacity: 0.5;
    text-align: center;
    padding: 10px 20px;
`,f8=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    gap: 16px;
    opacity: 1;
    padding-inline: 20px;
`,p8=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    text-align: center;
    max-width: 340px;
`,m8=b.button`
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
`,Eh=b.div`
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
    animation: ${Qg} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
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
            animation: ${e8} 0.8s ease-out forwards;
        }
    }
`,g8=b.div`
    width: 43px;
    height: 43px;
    border-radius: 50%;
    padding: 1px;
    border: 2px ${({$ringColor:e})=>e||"var(--borderColor, rgba(128,128,128,0.2))"} solid;
    flex-shrink: 0;
    transition: transform 0.3s ease;

    ${Eh}:hover & {
        transform: scale(1.08);
    }

    @media (max-width: 600px) { width: 40px; height: 40px; }
`,x8=b.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundColor);
`,v8=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,b8=b.span`
    font-size: 1.05em;
    font-weight: 800;
    color: var(--textColor);
    opacity: 0.35;
    user-select: none;
`,w8=b.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
    flex: 1;
`,y8=b.div`
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex-wrap: wrap;
`,_8=b.p`
    font-size: 0.9em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.01em;

    @media (max-width: 600px) { font-size: 0.82em; }
`,C8=b.p`
    font-size: 0.78em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    letter-spacing: 0.01em;

    @media (max-width: 600px) { font-size: 0.72em; }
`,S8=b.span`
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
`,A8=new Ba;function k8({user:e,index:t,showRank:r}){var l;const n=sn(),[a,s]=k.useState(null);return k.useEffect(()=>{if(!e.avatar)return;const c=new Image;c.crossOrigin="anonymous",c.referrerPolicy="no-referrer",c.onload=()=>{try{if(c.naturalWidth>0){const[d,f,p]=A8.getColor(c,10);s(`rgb(${d},${f},${p})`)}}catch{}},c.src=e.avatar},[e.avatar]),o.jsxs(Eh,{$i:t,$color:a,onClick:()=>{R3(e.username,e.rank),n(`/u/${e.username}`)},children:[o.jsx(g8,{$ringColor:a,children:o.jsx(x8,{children:e.avatar?o.jsx(v8,{src:e.avatar,alt:e.name,loading:"lazy",referrerPolicy:"no-referrer"}):o.jsx(b8,{children:(e.name||"?").charAt(0).toUpperCase()})})}),o.jsxs(w8,{children:[o.jsxs(y8,{children:[o.jsx(_8,{children:e.name}),e.badge&&o.jsx(Ns,{badge:e.badge,size:20}),((l=e.permissions)==null?void 0:l.includes("admin"))&&o.jsx(Ns,{badge:"admin",size:20})]}),o.jsxs(C8,{children:["@",e.username]})]}),r&&e.rank&&o.jsxs(S8,{$rank:e.rank,children:["#",e.rank]})]})}function M8(){const{t:e}=Tt(),[t,r]=k.useState([]),[n,a]=k.useState(""),[s,l]=k.useState(""),[c,d]=k.useState(1),[f,p]=k.useState(!1),[v,S]=k.useState(!0),[m,w]=k.useState(!1),[_,j]=k.useState(!0),[M,I]=k.useState(!1),P=k.useRef(null),D=k.useCallback(async(Z,T,X)=>{T===1?S(!0):w(!0),I(!1);try{const C=await Xe.searchUsers({q:Z,page:T,limit:8});r(E=>X?[...E,...C.users]:C.users),d(T),p(C.hasMore),j(C.isRanking??!Z)}catch(C){console.error("Profiles fetch error:",C),X||r([]),I(!0)}finally{S(!1),w(!1)}},[]);k.useEffect(()=>{D("",1,!1)},[]);const $=Z=>{const T=Z.target.value;if(a(T),clearTimeout(P.current),!T.trim()){l(""),D("",1,!1);return}P.current=setTimeout(()=>{l(T.trim()),D3(T.trim()),D(T.trim(),1,!1)},400)},H=()=>{clearTimeout(P.current),a(""),l(""),D("",1,!1)},Q=()=>{D(s,c+1,!0)};return o.jsxs(t8,{children:[o.jsx(es,{text:e("PROFILES_Anchor"),type:1}),o.jsx(t1,{title:e("PROFILES_Title")}),o.jsx(r8,{children:o.jsxs(n8,{role:"search",children:[o.jsx(i8,{"aria-hidden":"true"}),o.jsx(o8,{}),o.jsx(a8,{type:"text",value:n,onChange:$,placeholder:e("PROFILES_SearchPlaceholder"),autoComplete:"off"}),n&&o.jsx(s8,{onClick:H,type:"button","aria-label":"Clear search",children:o.jsx(vh,{})})]})}),v?o.jsx(c8,{children:o.jsx(u8,{})}):M?o.jsxs(f8,{children:[o.jsx(s0,{width:"25%"}),o.jsx(p8,{children:e("PROFILES_FetchError")})]}):t.length===0?o.jsxs(d8,{children:[o.jsx(Ja,{width:"25%"}),o.jsx(h8,{children:e("PROFILES_NoResults")})]}):o.jsx(l8,{children:t.map((Z,T)=>o.jsx(k8,{user:Z,index:T,showRank:_},Z._id||Z.username))}),f&&!v&&o.jsx(m8,{onClick:Q,disabled:m,children:e(m?"LoadingMore":"PROFILES_LoadMore")})]})}const z2=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Help improve the project!",pt:"Ajude a melhorar o projeto!",es:"¡Ayuda a mejorar el proyecto!",zh:"帮助改进项目！"},text:{en:"This project is open source and evolves with the community! Contribute with code, suggestions, or reporting bugs.",pt:"Esse projeto é open source e evolui com a comunidade! Contribua com código, sugestões ou reportando bugs.",es:"¡Este proyecto es open source y evoluciona con la comunidad! Contribuye con código, sugerencias o reportando errores.",zh:"这个项目是开源的，随着社区的发展而发展！贡献代码、建议或报告错误。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Contribute on Github",pt:"Contribua no Github",es:"Contribuye en Github",zh:"在 Github 上贡献"}}],j8=b.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,N8=b.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,I8=b.div`
    display: flex;
    align-items: center;
    position: relative;
`,T8=b.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,L8=b(Mh)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,P8=b.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,E8=b.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,D8=b.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`,R8=b.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,O8=b.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,F8=b.a`
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
`;function z8(){var s,l,c;const{i18n:e}=Tt(),{t}=Tt(),r=((s=e.language)==null?void 0:s.split("-")[0])||"en",n=z2.filter(d=>d.key!=="contribute_area"),a=z2.find(d=>d.key==="contribute_area");return o.jsxs(j8,{id:"thanks",children:[o.jsx(es,{text:t("Thanks"),type:1}),n.map((d,f)=>o.jsxs(N8,{children:[o.jsxs(I8,{children:[o.jsx(T8,{className:"circle"}),o.jsx(L8,{className:"heart"}),o.jsx(P8,{tabIndex:0,role:"button",onClick:()=>window.open(d.url,"_blank","noopener,noreferrer"),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&window.open(d.url,"_blank","noopener,noreferrer")},onMouseEnter:p=>{const v=p.target.parentNode;v.querySelector(".circle").style.opacity=0,v.querySelector(".heart").style.opacity=1},onMouseLeave:p=>{const v=p.target.parentNode;v.querySelector(".circle").style.opacity=.8,v.querySelector(".heart").style.opacity=0},children:d.title[r]||d.title.en})]}),o.jsx(E8,{children:d.text[r]||d.text.en})]},d.key)),a&&o.jsxs(D8,{children:[o.jsx(R8,{children:a.title[r]||a.title.en}),o.jsx(O8,{children:a.text[r]||a.text.en}),o.jsx(F8,{href:a.url,target:"_blank",rel:"noopener noreferrer",children:((l=a.button)==null?void 0:l[r])||((c=a.button)==null?void 0:c.en)||"Github"})]})]})}function B8(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-4.607 8.055A4.956 4.956 0 0 0 7 12H5a6.978 6.978 0 0 1 2.051-4.95 6.978 6.978 0 0 1 2.225-1.5l.779 1.842c-.596.252-1.13.612-1.59 1.072s-.82.995-1.072 1.591zm4.6 3.945a2.007 2.007 0 1 1 0-4.014 2.007 2.007 0 0 1 0 4.014z"},child:[]}]})(e)}function U8(e){return Ze({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"},child:[]}]})(e)}function H8(e){return Ze({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"},child:[]}]})(e)}const $8=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,q8=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,V8=b.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Oo({title:e,value:t,onChange:r}){return o.jsxs($8,{children:[o.jsx(q8,{children:e}),o.jsx(V8,{placeholder:e,value:t,onChange:r})]})}const Y8=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,G8=b.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,W8=b.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function B2({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return o.jsxs(Y8,{children:[o.jsx(G8,{placeholder:e,value:e,onChange:r}),o.jsx(W8,{placeholder:e,value:t,onChange:n})]})}const X8=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Z8=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,J8=b.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,K8=b.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,Q8=b.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function ps({title:e,value:t,onClick:r}){const n=k.useRef(null);return o.jsxs(X8,{"data-color-input":!0,children:[o.jsx(Z8,{children:e}),o.jsxs(J8,{ref:n,onClick:()=>{const a=n.current.getBoundingClientRect();r({top:a.bottom+1+window.scrollY,left:a.left+window.scrollX})},children:[o.jsx(K8,{style:{backgroundColor:t}}),o.jsx(Q8,{children:t})]})]})}function i1(){return(i1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Dh(e,t){if(e==null)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(a[r]=e[r]);return a}function Ec(e){var t=k.useRef(e),r=k.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var Is=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},vs=function(e){return"touches"in e},Dc=function(e){return e&&e.ownerDocument.defaultView||self},U2=function(e,t,r){var n=e.getBoundingClientRect(),a=vs(t)?function(s,l){for(var c=0;c<s.length;c++)if(s[c].identifier===l)return s[c];return s[0]}(t.touches,r):t;return{left:Is((a.pageX-(n.left+Dc(e).pageXOffset))/n.width),top:Is((a.pageY-(n.top+Dc(e).pageYOffset))/n.height)}},H2=function(e){!vs(e)&&e.preventDefault()},Rh=Xr.memo(function(e){var t=e.onMove,r=e.onKey,n=Dh(e,["onMove","onKey"]),a=k.useRef(null),s=Ec(t),l=Ec(r),c=k.useRef(null),d=k.useRef(!1),f=k.useMemo(function(){var m=function(j){H2(j),(vs(j)?j.touches.length>0:j.buttons>0)&&a.current?s(U2(a.current,j,c.current)):_(!1)},w=function(){return _(!1)};function _(j){var M=d.current,I=Dc(a.current),P=j?I.addEventListener:I.removeEventListener;P(M?"touchmove":"mousemove",m),P(M?"touchend":"mouseup",w)}return[function(j){var M=j.nativeEvent,I=a.current;if(I&&(H2(M),!function(D,$){return $&&!vs(D)}(M,d.current)&&I)){if(vs(M)){d.current=!0;var P=M.changedTouches||[];P.length&&(c.current=P[0].identifier)}I.focus(),s(U2(I,M,c.current)),_(!0)}},function(j){var M=j.which||j.keyCode;M<37||M>40||(j.preventDefault(),l({left:M===39?.05:M===37?-.05:0,top:M===40?.05:M===38?-.05:0}))},_]},[l,s]),p=f[0],v=f[1],S=f[2];return k.useEffect(function(){return S},[S]),Xr.createElement("div",i1({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:a,onKeyDown:v,tabIndex:0,role:"slider"}))}),l0=function(e){return e.filter(Boolean).join(" ")},Oh=function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,s=l0(["react-colorful__pointer",e.className]);return Xr.createElement("div",{className:s,style:{top:100*a+"%",left:100*r+"%"}},Xr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},zr=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},e7=function(e){return o7(Rc(e))},Rc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?zr(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?zr(parseInt(e.substring(6,8),16)/255,2):1}},t7=function(e){return i7(n7(e))},r7=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:zr(e.h),s:zr(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:zr(a/2),a:zr(n,2)}},Oc=function(e){var t=r7(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},n7=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var s=Math.floor(t),l=n*(1-r),c=n*(1-(t-s)*r),d=n*(1-(1-t+s)*r),f=s%6;return{r:zr(255*[n,c,l,l,d,n][f]),g:zr(255*[d,n,n,c,l,l][f]),b:zr(255*[l,l,d,n,n,c][f]),a:zr(a,2)}},hl=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},i7=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,s=a<1?hl(zr(255*a)):"";return"#"+hl(t)+hl(r)+hl(n)+s},o7=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,s=Math.max(t,r,n),l=s-Math.min(t,r,n),c=l?s===t?(r-n)/l:s===r?2+(n-t)/l:4+(t-r)/l:0;return{h:zr(60*(c<0?c+6:c)),s:zr(s?l/s*100:0),v:zr(s/255*100),a}},a7=Xr.memo(function(e){var t=e.hue,r=e.onChange,n=l0(["react-colorful__hue",e.className]);return Xr.createElement("div",{className:n},Xr.createElement(Rh,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:Is(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":zr(t),"aria-valuemax":"360","aria-valuemin":"0"},Xr.createElement(Oh,{className:"react-colorful__hue-pointer",left:t/360,color:Oc({h:t,s:100,v:100,a:1})})))}),s7=Xr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:Oc({h:t.h,s:100,v:100,a:1})};return Xr.createElement("div",{className:"react-colorful__saturation",style:n},Xr.createElement(Rh,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:Is(t.s+100*a.left,0,100),v:Is(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+zr(t.s)+"%, Brightness "+zr(t.v)+"%"},Xr.createElement(Oh,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:Oc(t)})))}),Fh=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},l7=function(e,t){return e.toLowerCase()===t.toLowerCase()||Fh(Rc(e),Rc(t))};function c7(e,t,r){var n=Ec(r),a=k.useState(function(){return e.toHsva(t)}),s=a[0],l=a[1],c=k.useRef({color:t,hsva:s});k.useEffect(function(){if(!e.equal(t,c.current.color)){var f=e.toHsva(t);c.current={hsva:f,color:t},l(f)}},[t,e]),k.useEffect(function(){var f;Fh(s,c.current.hsva)||e.equal(f=e.fromHsva(s),c.current.color)||(c.current={hsva:s,color:f},n(f))},[s,e,n]);var d=k.useCallback(function(f){l(function(p){return Object.assign({},p,f)})},[]);return[s,d]}var u7=typeof window<"u"?k.useLayoutEffect:k.useEffect,d7=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},$2=new Map,h7=function(e){u7(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!$2.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,$2.set(t,r);var n=d7();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},f7=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,s=e.onChange,l=Dh(e,["className","colorModel","color","onChange"]),c=k.useRef(null);h7(c);var d=c7(r,a,s),f=d[0],p=d[1],v=l0(["react-colorful",t]);return Xr.createElement("div",i1({},l,{ref:c,className:v}),Xr.createElement(s7,{hsva:f,onChange:p}),Xr.createElement(a7,{hue:f.h,onChange:p,className:"react-colorful__last-control"}))},p7={defaultColor:"000",toHsva:e7,fromHsva:function(e){return t7({h:e.h,s:e.s,v:e.v,a:1})},equal:l7},m7=function(e){return Xr.createElement(f7,i1({},e,{colorModel:p7}))};const g7=b.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,x7=b(m7)`
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
`,P1=b.div`
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
`,v7=b.div`
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
`,b7=b.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,w7=b.input`
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
`,y7=b(B4)`
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
`,_7=b(V4)`
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
`,C7=b(o0)`
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
`,S7=b(n0)`
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
`,A7=b.img`
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
`;function k7({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:a,onClose:s}){const[l,c]=k.useState(e),[d,f]=k.useState(!1),[p,v]=k.useState(null),S=k.useRef(null),m=k.useRef(null);function w(){f(!d)}function _(P){c(P.target.value===""?"#":P.target.value)}function j(P){const D=S.current,H=m.current.getBoundingClientRect(),Q=D.getContext("2d"),Z=Math.floor(P.clientX-H.left),T=Math.floor(P.clientY-H.top),C=`#${[...Q.getImageData(Z,T,1,1).data].slice(0,3).map(E=>E.toString(16).padStart(2,"0")).join("")}`;c(C),w()}function M(P){const D=S.current,H=m.current.getBoundingClientRect(),Q=Math.floor(P.clientX-H.left),Z=Math.floor(P.clientY-H.top);if(D){const T=D.getContext("2d");try{const C=`#${[...T.getImageData(Q,Z,1,1).data].slice(0,3).map(E=>E.toString(16).padStart(2,"0")).join("")}`;v(C)}catch{v(null)}}}function I(){v(null)}return o.jsxs(g7,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[o.jsx("canvas",{ref:S,style:{display:"none"}}),d?o.jsx(A7,{ref:m,crossOrigin:"anonymous",draggable:"false",src:t,onClick:j,onMouseMove:M,onMouseLeave:I,onLoad:()=>{const P=S.current,D=P.getContext("2d"),$=m.current;P.width=$.width,P.height=$.height,D.drawImage($,0,0,$.width,$.height)},style:p?{borderColor:p}:{}}):o.jsx(x7,{color:l,onChange:c}),o.jsx(P1,{children:r.map(P=>o.jsx(v7,{style:{backgroundColor:P},onClick:()=>c(P)},P))}),o.jsxs(P1,{children:[o.jsx(b7,{children:"Hex"}),o.jsx(w7,{value:l,onChange:_})]}),o.jsxs(P1,{children:[d?o.jsx(_7,{onClick:w}):o.jsx(y7,{onClick:w}),o.jsx(C7,{onClick:s}),o.jsx(S7,{onClick:()=>{a(l),M3(l)}})]})]})}const M7=b.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,j7=b.canvas`
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
`,fl=b.div`
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
`,pl=b.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,ml=b.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,gl=b.input`
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
`,xl=b.input`
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
`,N7=b.div`
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
`,I7=b(o0)`
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
`,T7=b(n0)`
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
`;function L7({position:e,albumCoverUrl:t,initialZoom:r=0,initialHorizontalPosition:n=0,initialVerticalPosition:a=0,initialBlur:s=0,onDone:l,onClose:c}){const{t:d}=Tt(),[f,p]=k.useState(r),[v,S]=k.useState(n),[m,w]=k.useState(a),[_,j]=k.useState(s),M=k.useRef(null),I=k.useRef(null),P=k.useRef(!1),D=k.useRef({x:0,y:0});k.useEffect(()=>{if(t){const T=new Image;T.crossOrigin="anonymous",T.src=t,T.onload=()=>{I.current=T,Z()}}},[t]),k.useEffect(()=>{Z()},[f,v,m,_]);const $=T=>{const X=M.current;if(!X)return;const C=X.getBoundingClientRect(),E=T.clientX-C.left,U=T.clientY-C.top,Y=X.width,ie=X.height,le=Math.min(Y,ie),fe=1+f/100,ne=le*fe,ge=Y/2,we=ie/2,xe=Y/2*(v/50),A=ie/2*(m/50),z=ge-ne/2+xe,q=we-ne/2+A;E>=z&&E<=z+ne&&U>=q&&U<=q+ne&&(P.current=!0,D.current={x:E,y:U},X.style.cursor="grabbing")},H=T=>{if(!P.current)return;const X=M.current;if(!X)return;const C=X.getBoundingClientRect(),E=T.clientX-C.left,U=T.clientY-C.top,Y=E-D.current.x,ie=U-D.current.y;D.current={x:E,y:U};const le=X.width,fe=X.height,ne=v+Y/(le/2)*50,ge=m+ie/(fe/2)*50;S(Math.max(-50,Math.min(50,ne))),w(Math.max(-50,Math.min(50,ge)))},Q=()=>{P.current=!1;const T=M.current;T&&(T.style.cursor="grab")};k.useEffect(()=>{const T=M.current;if(T)return T.addEventListener("mousedown",$),window.addEventListener("mousemove",H),window.addEventListener("mouseup",Q),()=>{T.removeEventListener("mousedown",$),window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",Q)}},[f,v,m,_]);const Z=()=>{const T=M.current;if(!T)return;const X=T.getContext("2d"),C=T.width,E=T.height;X.clearRect(0,0,C,E);const U=Math.min(C,E),Y=1+f/100,ie=U*Y,le=C/2,fe=E/2,ne=C/2*(v/50),ge=E/2*(m/50),we=le-ie/2+ne,xe=fe-ie/2+ge;I.current&&(X.filter=`blur(${_/5}px)`,X.drawImage(I.current,we,xe,ie,ie),X.filter="none")};return o.jsxs(M7,{style:{position:"absolute",top:e.top,left:e.left,zIndex:2147483647},children:[o.jsx(j7,{ref:M,width:200,height:200}),o.jsxs(fl,{children:[o.jsxs(pl,{children:[o.jsx(ml,{children:d("COVER_EDITOR_Size")}),o.jsx(gl,{type:"number",value:f,onChange:T=>p(parseInt(T.target.value)||0)})]}),o.jsx(xl,{type:"range",min:"-100",max:"100",step:"1",value:f,onChange:T=>p(Number(T.target.value))})]}),o.jsxs(fl,{children:[o.jsxs(pl,{children:[o.jsx(ml,{children:d("COVER_EDITOR_Blur")}),o.jsx(gl,{type:"number",value:_,onChange:T=>j(parseInt(T.target.value)||0)})]}),o.jsx(xl,{type:"range",min:"0",max:"20",step:"1",value:_,onChange:T=>j(Number(T.target.value))})]}),o.jsxs(fl,{children:[o.jsxs(pl,{children:[o.jsx(ml,{children:d("COVER_EDITOR_HorizontalPosition")}),o.jsx(gl,{type:"number",value:v,onChange:T=>S(parseInt(T.target.value)||0)})]}),o.jsx(xl,{type:"range",min:"-50",max:"50",step:"1",value:v,onChange:T=>S(Number(T.target.value))})]}),o.jsxs(fl,{children:[o.jsxs(pl,{children:[o.jsx(ml,{children:d("COVER_EDITOR_VerticalPosition")}),o.jsx(gl,{type:"number",value:m,onChange:T=>w(parseInt(T.target.value)||0)})]}),o.jsx(xl,{type:"range",min:"-50",max:"50",step:"1",value:m,onChange:T=>w(Number(T.target.value))})]}),o.jsxs(N7,{children:[o.jsx(I7,{onClick:c}),o.jsx(T7,{onClick:()=>l({zoom:f,horizontalPosition:v,verticalPosition:m,blur:_})})]})]})}const P7=b.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,E1=b.div`
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
`,D1=b.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,R1=b.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,O1=b.input`
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
`,F1=b.input`
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
`,E7=b.div`
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
`,D7=b(o0)`
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
`,R7=b(n0)`
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
`,O7=b(i6)`
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
`,F7=b.div`
    padding: 10px;
    background-color: rgba(255, 68, 68, 0.1);
    border: 1px solid #ff4444;
    border-radius: 5px;
    color: #ff4444;
    font-size: 0.85em;
    text-align: center;
`;function z7({position:e,signatureUrl:t,initialHorizontalPosition:r,initialVerticalPosition:n,initialScale:a,onDone:s,onClose:l}){const{t:c}=Tt(),[d,f]=k.useState(r||0),[p,v]=k.useState(n||0),[S,m]=k.useState(a||1),w=()=>{s({horizontalPosition:d,verticalPosition:p,scale:S})},_=()=>{s({disabled:!0})};return o.jsx(P7,{style:{position:"absolute",top:e==null?void 0:e.top,left:e==null?void 0:e.left,zIndex:1e3},children:t?o.jsxs(o.Fragment,{children:[o.jsxs(E1,{children:[o.jsxs(D1,{children:[o.jsx(R1,{children:c("EDITOR_HorizontalPosition")}),o.jsx(O1,{type:"number",value:d,onChange:j=>f(parseInt(j.target.value)||0)})]}),o.jsx(F1,{type:"range",min:"-100",max:"100",step:"1",value:d,onChange:j=>f(Number(j.target.value))})]}),o.jsxs(E1,{children:[o.jsxs(D1,{children:[o.jsx(R1,{children:c("EDITOR_VerticalPosition")}),o.jsx(O1,{type:"number",value:p,onChange:j=>v(parseInt(j.target.value)||0)})]}),o.jsx(F1,{type:"range",min:"-100",max:"100",step:"1",value:p,onChange:j=>v(Number(j.target.value))})]}),o.jsxs(E1,{children:[o.jsxs(D1,{children:[o.jsx(R1,{children:c("EDITOR_Scale")}),o.jsx(O1,{type:"number",min:"0.1",max:"3",step:"0.1",value:parseFloat(S).toFixed(1),onChange:j=>m(Number(j.target.value))})]}),o.jsx(F1,{type:"range",min:"0.1",max:"3",step:"0.1",value:S,onChange:j=>m(Number(j.target.value))})]}),o.jsxs(E7,{children:[o.jsx(D7,{onClick:l}),o.jsx(O7,{onClick:_}),o.jsx(R7,{onClick:w})]})]}):o.jsx(F7,{children:c("EDITOR_SignatureNotFound")})})}const B7=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,U7=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,H7=b.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,$7=b.input`
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
`,q7=b.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function vl({title:e,text:t,value:r,onChange:n}){const a=()=>n(!r);return o.jsxs(B7,{children:[o.jsx(U7,{children:e}),o.jsxs(H7,{onClick:a,children:[o.jsx($7,{checked:r,readOnly:!0,type:"checkbox"}),o.jsx(q7,{active:r,children:t})]})]})}b.div`
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
`;const V7=b.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Y7=b.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,G7=b.div`
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
`,W7=b.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,X7=b.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function q2({title:e,text:t,onClick:r,icon:n}){const a=k.useRef(null);return o.jsxs(V7,{children:[o.jsx(Y7,{children:e}),o.jsxs(G7,{ref:a,onClick:()=>{const s=a.current.getBoundingClientRect();r({top:s.bottom+1+window.scrollY,left:s.left+window.scrollX})},children:[n&&o.jsx(W7,{children:o.jsx(n,{})}),o.jsx(X7,{children:t})]})]})}function Z7(e){return Ze({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},child:[]}]})(e)}const J7=b.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,K7=b.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,Q7=b.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,ex=b(r1)`
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
`;function zh(){const{t:e}=Tt();return o.jsxs(J7,{children:[o.jsx(ex,{}),o.jsx(K7,{children:e("Loading")}),o.jsx(Q7,{children:e("LoadingText")})]})}var Bh={},o1={},Uh={exports:{}},tx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rx=tx,nx=rx;function Hh(){}function $h(){}$h.resetWarningCache=Hh;var ix=function(){function e(n,a,s,l,c,d){if(d!==nx){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$h,resetWarningCache:Hh};return r.PropTypes=r,r};Uh.exports=ix();var qh=Uh.exports,c0={},a1={},Vh={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(P5,function(){var r=function(d,f){return d<f?-1:d>f?1:0},n=function(d){return d.reduce(function(f,p){return f+p},0)},a=function(){function d(p){this.colors=p}var f=d.prototype;return f.palette=function(){return this.colors},f.map=function(p){return p},d}(),s=function(){function d(m,w,_){return(m<<10)+(w<<5)+_}function f(m){var w=[],_=!1;function j(){w.sort(m),_=!0}return{push:function(M){w.push(M),_=!1},peek:function(M){return _||j(),M===void 0&&(M=w.length-1),w[M]},pop:function(){return _||j(),w.pop()},size:function(){return w.length},map:function(M){return w.map(M)},debug:function(){return _||j(),w}}}function p(m,w,_,j,M,I,P){var D=this;D.r1=m,D.r2=w,D.g1=_,D.g2=j,D.b1=M,D.b2=I,D.histo=P}function v(){this.vboxes=new f(function(m,w){return r(m.vbox.count()*m.vbox.volume(),w.vbox.count()*w.vbox.volume())})}function S(m,w){if(w.count()){var _=w.r2-w.r1+1,j=w.g2-w.g1+1,M=Math.max.apply(null,[_,j,w.b2-w.b1+1]);if(w.count()==1)return[w.copy()];var I,P,D,$,H=0,Q=[],Z=[];if(M==_)for(I=w.r1;I<=w.r2;I++){for($=0,P=w.g1;P<=w.g2;P++)for(D=w.b1;D<=w.b2;D++)$+=m[d(I,P,D)]||0;Q[I]=H+=$}else if(M==j)for(I=w.g1;I<=w.g2;I++){for($=0,P=w.r1;P<=w.r2;P++)for(D=w.b1;D<=w.b2;D++)$+=m[d(P,I,D)]||0;Q[I]=H+=$}else for(I=w.b1;I<=w.b2;I++){for($=0,P=w.r1;P<=w.r2;P++)for(D=w.g1;D<=w.g2;D++)$+=m[d(P,D,I)]||0;Q[I]=H+=$}return Q.forEach(function(T,X){Z[X]=H-T}),function(T){var X,C,E,U,Y,ie=T+"1",le=T+"2",fe=0;for(I=w[ie];I<=w[le];I++)if(Q[I]>H/2){for(E=w.copy(),U=w.copy(),Y=(X=I-w[ie])<=(C=w[le]-I)?Math.min(w[le]-1,~~(I+C/2)):Math.max(w[ie],~~(I-1-X/2));!Q[Y];)Y++;for(fe=Z[Y];!fe&&Q[Y-1];)fe=Z[--Y];return E[le]=Y,U[ie]=E[le]+1,[E,U]}}(M==_?"r":M==j?"g":"b")}}return p.prototype={volume:function(m){var w=this;return w._volume&&!m||(w._volume=(w.r2-w.r1+1)*(w.g2-w.g1+1)*(w.b2-w.b1+1)),w._volume},count:function(m){var w=this,_=w.histo;if(!w._count_set||m){var j,M,I,P=0;for(j=w.r1;j<=w.r2;j++)for(M=w.g1;M<=w.g2;M++)for(I=w.b1;I<=w.b2;I++)P+=_[d(j,M,I)]||0;w._count=P,w._count_set=!0}return w._count},copy:function(){var m=this;return new p(m.r1,m.r2,m.g1,m.g2,m.b1,m.b2,m.histo)},avg:function(m){var w=this,_=w.histo;if(!w._avg||m){var j,M,I,P,D=0,$=0,H=0,Q=0;if(w.r1===w.r2&&w.g1===w.g2&&w.b1===w.b2)w._avg=[w.r1<<3,w.g1<<3,w.b1<<3];else{for(M=w.r1;M<=w.r2;M++)for(I=w.g1;I<=w.g2;I++)for(P=w.b1;P<=w.b2;P++)D+=j=_[d(M,I,P)]||0,$+=j*(M+.5)*8,H+=j*(I+.5)*8,Q+=j*(P+.5)*8;w._avg=D?[~~($/D),~~(H/D),~~(Q/D)]:[~~(8*(w.r1+w.r2+1)/2),~~(8*(w.g1+w.g2+1)/2),~~(8*(w.b1+w.b2+1)/2)]}}return w._avg},contains:function(m){var w=this,_=m[0]>>3;return gval=m[1]>>3,bval=m[2]>>3,_>=w.r1&&_<=w.r2&&gval>=w.g1&&gval<=w.g2&&bval>=w.b1&&bval<=w.b2}},v.prototype={push:function(m){this.vboxes.push({vbox:m,color:m.avg()})},palette:function(){return this.vboxes.map(function(m){return m.color})},size:function(){return this.vboxes.size()},map:function(m){for(var w=this.vboxes,_=0;_<w.size();_++)if(w.peek(_).vbox.contains(m))return w.peek(_).color;return this.nearest(m)},nearest:function(m){for(var w,_,j,M=this.vboxes,I=0;I<M.size();I++)((_=Math.sqrt(Math.pow(m[0]-M.peek(I).color[0],2)+Math.pow(m[1]-M.peek(I).color[1],2)+Math.pow(m[2]-M.peek(I).color[2],2)))<w||w===void 0)&&(w=_,j=M.peek(I).color);return j},forcebw:function(){var m=this.vboxes;m.sort(function(M,I){return r(n(M.color),n(I.color))});var w=m[0].color;w[0]<5&&w[1]<5&&w[2]<5&&(m[0].color=[0,0,0]);var _=m.length-1,j=m[_].color;j[0]>251&&j[1]>251&&j[2]>251&&(m[_].color=[255,255,255])}},{quantize:function(m,w){if(!Number.isInteger(w)||w<1||w>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!m.length||w<2||w>256||!m.length||w<2||w>256)return!1;for(var _=[],j=new Set,M=0;M<m.length;M++){var I=m[M],P=I.join(",");j.has(P)||(j.add(P),_.push(I))}if(_.length<=w)return new a(_);var D=function(X){var C,E=new Array(32768);return X.forEach(function(U){C=d(U[0]>>3,U[1]>>3,U[2]>>3),E[C]=(E[C]||0)+1}),E}(m);D.forEach(function(){});var $=function(X,C){var E,U,Y,ie=1e6,le=0,fe=1e6,ne=0,ge=1e6,we=0;return X.forEach(function(xe){(E=xe[0]>>3)<ie?ie=E:E>le&&(le=E),(U=xe[1]>>3)<fe?fe=U:U>ne&&(ne=U),(Y=xe[2]>>3)<ge?ge=Y:Y>we&&(we=Y)}),new p(ie,le,fe,ne,ge,we,C)}(m,D),H=new f(function(X,C){return r(X.count(),C.count())});function Q(X,C){for(var E,U=X.size(),Y=0;Y<1e3;){if(U>=C||Y++>1e3)return;if((E=X.pop()).count()){var ie=S(D,E),le=ie[0],fe=ie[1];if(!le)return;X.push(le),fe&&(X.push(fe),U++)}else X.push(E),Y++}}H.push($),Q(H,.75*w);for(var Z=new f(function(X,C){return r(X.count()*X.volume(),C.count()*C.volume())});H.size();)Z.push(H.pop());Q(Z,w);for(var T=new v;Z.size();)T.push(Z.pop());return T}}}().quantize,l=function(d){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=d.naturalWidth,this.height=this.canvas.height=d.naturalHeight,this.context.drawImage(d,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var c=function(){};return c.prototype.getColor=function(d,f){return f===void 0&&(f=10),this.getPalette(d,5,f)[0]},c.prototype.getPalette=function(d,f,p){var v=function(_){var j=_.colorCount,M=_.quality;if(j!==void 0&&Number.isInteger(j)){if(j===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");j=Math.max(j,2),j=Math.min(j,20)}else j=10;return(M===void 0||!Number.isInteger(M)||M<1)&&(M=10),{colorCount:j,quality:M}}({colorCount:f,quality:p}),S=new l(d),m=function(_,j,M){for(var I,P,D,$,H,Q=_,Z=[],T=0;T<j;T+=M)P=Q[0+(I=4*T)],D=Q[I+1],$=Q[I+2],((H=Q[I+3])===void 0||H>=125)&&(P>250&&D>250&&$>250||Z.push([P,D,$]));return Z}(S.getImageData().data,S.width*S.height,v.quality),w=s(m,v.colorCount);return w?w.palette():null},c.prototype.getColorFromUrl=function(d,f,p){var v=this,S=document.createElement("img");S.addEventListener("load",function(){var m=v.getPalette(S,5,p);f(m[0],d)}),S.src=d},c.prototype.getImageData=function(d,f){var p=new XMLHttpRequest;p.open("GET",d,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var v=new Uint8Array(this.response);i=v.length;for(var S=new Array(i),m=0;m<v.length;m++)S[m]=String.fromCharCode(v[m]);var w=S.join(""),_=window.btoa(w);f("data:image/png;base64,"+_)}},p.send()},c.prototype.getColorAsync=function(d,f,p){var v=this;this.getImageData(d,function(S){var m=document.createElement("img");m.addEventListener("load",function(){var w=v.getPalette(m,5,p);f(w[0],this)}),m.src=S})},c})})(Vh);var Yh=Vh.exports,s1={},u0={};Object.defineProperty(u0,"__esModule",{value:!0});u0.default=ox;function ox(e,t,r){return`rgb(${e}, ${t}, ${r})`}var d0={};Object.defineProperty(d0,"__esModule",{value:!0});d0.default=ax;function ax(e,t,r){return`#${[e,t,r].map(n=>{const a=n.toString(16);return a.length===1?`0${a}`:a}).join("")}`}Object.defineProperty(s1,"__esModule",{value:!0});s1.default=cx;var sx=Gh(u0),lx=Gh(d0);function Gh(e){return e&&e.__esModule?e:{default:e}}function cx(e,t){switch(t){case"rgbString":return(0,sx.default)(e[0],e[1],e[2]);case"hex":return(0,lx.default)(e[0],e[1],e[2]);default:return e}}var l1={};Object.defineProperty(l1,"__esModule",{value:!0});l1.default=ux;function ux(e,t=void 0){return new Promise((r,n)=>{const a=new Image;a.addEventListener("load",()=>{r(a)}),a.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),a.crossOrigin=t,a.src=e})}Object.defineProperty(a1,"__esModule",{value:!0});a1.default=px;var dx=h0(Yh),hx=h0(s1),fx=h0(l1);function h0(e){return e&&e.__esModule?e:{default:e}}async function px(e,t="rgbString",r=null,n=10){const a=await(0,fx.default)(e,r),l=new dx.default().getColor(a,n);return(0,hx.default)(l,t)}Object.defineProperty(c0,"__esModule",{value:!0});c0.default=vx;var V2=k,mx=gx(a1);function gx(e){return e&&e.__esModule?e:{default:e}}const Wh={loading:!0,data:null,error:void 0};function xx(e,t){switch(t.type){case"getColor":return Wh;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function vx(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:a=10}=r,[s,l]=(0,V2.useReducer)(xx,Wh);return(0,V2.useEffect)(()=>{l({type:"getColor"}),(0,mx.default)(e,t,n,a).then(c=>{l({type:"resolveColor",payload:c})}).catch(c=>{l({type:"rejectColor",payload:c})})},[e]),s}Object.defineProperty(o1,"__esModule",{value:!0});o1.default=void 0;var Y2=f0(k),ms=f0(qh),bx=f0(c0);function f0(e){return e&&e.__esModule?e:{default:e}}const p0=({src:e,format:t,crossOrigin:r,quality:n,children:a})=>{const s=(0,bx.default)(e,t,{crossOrigin:r,quality:n});return Y2.default.createElement(Y2.default.Fragment,null,a(s))};p0.defaultProps={format:"rgbString",crossOrigin:null,quality:10};p0.propTypes={children:ms.default.any.isRequired,src:ms.default.string.isRequired,format:ms.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:ms.default.string,quality:ms.default.number};var wx=p0;o1.default=wx;var c1={},m0={},u1={};Object.defineProperty(u1,"__esModule",{value:!0});u1.default=Sx;var yx=g0(Yh),_x=g0(s1),Cx=g0(l1);function g0(e){return e&&e.__esModule?e:{default:e}}async function Sx(e,t=2,r="rgbString",n=null,a=10){const s=await(0,Cx.default)(e,n);return new yx.default().getPalette(s,t,a).map(d=>(0,_x.default)(d,r))}Object.defineProperty(m0,"__esModule",{value:!0});m0.default=jx;var G2=k,Ax=kx(u1);function kx(e){return e&&e.__esModule?e:{default:e}}const Xh={loading:!0,data:[],error:void 0};function Mx(e,t){switch(t.type){case"getPalette":return Xh;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function jx(e,t=2,r="rgbString",n={}){const{crossOrigin:a=null,quality:s=10}=n,[l,c]=(0,G2.useReducer)(Mx,Xh);return(0,G2.useEffect)(()=>{c({type:"getPalette"}),(0,Ax.default)(e,t,r,a,s).then(d=>{c({type:"resolvePalette",payload:d})}).catch(d=>{c({type:"rejectPalette",payload:d})})},[e]),l}Object.defineProperty(c1,"__esModule",{value:!0});c1.default=void 0;var W2=x0(k),Pa=x0(qh),Nx=x0(m0);function x0(e){return e&&e.__esModule?e:{default:e}}const v0=({src:e,colorCount:t,format:r,crossOrigin:n,quality:a,children:s})=>{const l=(0,Nx.default)(e,t,r,{crossOrigin:n,quality:a});return W2.default.createElement(W2.default.Fragment,null,s(l))};v0.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};v0.propTypes={children:Pa.default.any.isRequired,src:Pa.default.string.isRequired,format:Pa.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:Pa.default.number,crossOrigin:Pa.default.string,quality:Pa.default.number};var Ix=v0;c1.default=Ix;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return a.default}}),e.default=void 0;var t=s(o1),r=s(c1),n=s(a1),a=s(u1);function s(c){return c&&c.__esModule?c:{default:c}}var l=t.default;e.default=l})(Bh);const Tx=b.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function mr({children:e,animationDelay:t=0,...r}){const[n,a]=k.useState(!1);return k.useEffect(()=>{const s=setTimeout(()=>{a(!0)},t);return()=>clearTimeout(s)},[t]),o.jsx(Tx,{visible:n,animationDelay:t,...r,children:e})}const Lx="modulepreload",Px=function(e){return"/"+e},X2={},z1=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.allSettled(r.map(d=>{if(d=Px(d),d in X2)return;X2[d]=!0;const f=d.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":Lx,f||(v.as="script"),v.crossOrigin="",v.href=d,c&&v.setAttribute("nonce",c),document.head.appendChild(v),f)return new Promise((S,m)=>{v.addEventListener("load",S),v.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};function $t(e){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(e)}var hi=Uint8Array,En=Uint16Array,b0=Int32Array,w0=new hi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),y0=new hi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Z2=new hi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zh=function(e,t){for(var r=new En(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var a=new b0(r[30]),n=1;n<30;++n)for(var s=r[n];s<r[n+1];++s)a[s]=s-r[n]<<5|n;return{b:r,r:a}},Jh=Zh(w0,2),Ex=Jh.b,Fc=Jh.r;Ex[28]=258,Fc[258]=28;var Dx=Zh(y0,0),J2=Dx.r,zc=new En(32768);for(var tr=0;tr<32768;++tr){var Fo=(tr&43690)>>1|(tr&21845)<<1;Fo=(Fo&52428)>>2|(Fo&13107)<<2,Fo=(Fo&61680)>>4|(Fo&3855)<<4,zc[tr]=((Fo&65280)>>8|(Fo&255)<<8)>>1}var bs=function(e,t,r){for(var n=e.length,a=0,s=new En(t);a<n;++a)e[a]&&++s[e[a]-1];var l=new En(t);for(a=1;a<t;++a)l[a]=l[a-1]+s[a-1]<<1;var c;if(r){c=new En(1<<t);var d=15-t;for(a=0;a<n;++a)if(e[a])for(var f=a<<4|e[a],p=t-e[a],v=l[e[a]-1]++<<p,S=v|(1<<p)-1;v<=S;++v)c[zc[v]>>d]=f}else for(c=new En(n),a=0;a<n;++a)e[a]&&(c[a]=zc[l[e[a]-1]++]>>15-e[a]);return c},da=new hi(288);for(var tr=0;tr<144;++tr)da[tr]=8;for(var tr=144;tr<256;++tr)da[tr]=9;for(var tr=256;tr<280;++tr)da[tr]=7;for(var tr=280;tr<288;++tr)da[tr]=8;var Gl=new hi(32);for(var tr=0;tr<32;++tr)Gl[tr]=5;var Rx=bs(da,9,0),Ox=bs(Gl,5,0),Kh=function(e){return(e+7)/8|0},Fx=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new hi(e.subarray(t,r))},lo=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},gs=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},B1=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var a=r.length,s=r.slice();if(!a)return{t:ef,l:0};if(a==1){var l=new hi(r[0].s+1);return l[r[0].s]=1,{t:l,l:1}}r.sort(function($,H){return $.f-H.f}),r.push({s:-1,f:25001});var c=r[0],d=r[1],f=0,p=1,v=2;for(r[0]={s:-1,f:c.f+d.f,l:c,r:d};p!=a-1;)c=r[r[f].f<r[v].f?f++:v++],d=r[f!=p&&r[f].f<r[v].f?f++:v++],r[p++]={s:-1,f:c.f+d.f,l:c,r:d};for(var S=s[0].s,n=1;n<a;++n)s[n].s>S&&(S=s[n].s);var m=new En(S+1),w=Bc(r[p-1],m,0);if(w>t){var n=0,_=0,j=w-t,M=1<<j;for(s.sort(function(H,Q){return m[Q.s]-m[H.s]||H.f-Q.f});n<a;++n){var I=s[n].s;if(m[I]>t)_+=M-(1<<w-m[I]),m[I]=t;else break}for(_>>=j;_>0;){var P=s[n].s;m[P]<t?_-=1<<t-m[P]++-1:++n}for(;n>=0&&_;--n){var D=s[n].s;m[D]==t&&(--m[D],++_)}w=t}return{t:new hi(m),l:w}},Bc=function(e,t,r){return e.s==-1?Math.max(Bc(e.l,t,r+1),Bc(e.r,t,r+1)):t[e.s]=r},K2=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new En(++t),n=0,a=e[0],s=1,l=function(d){r[n++]=d},c=1;c<=t;++c)if(e[c]==a&&c!=t)++s;else{if(!a&&s>2){for(;s>138;s-=138)l(32754);s>2&&(l(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(l(a),--s;s>6;s-=6)l(8304);s>2&&(l(s-3<<5|8208),s=0)}for(;s--;)l(a);s=1,a=e[c]}return{c:r.subarray(0,n),n:t}},xs=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},Qh=function(e,t,r){var n=r.length,a=Kh(t+2);e[a]=n&255,e[a+1]=n>>8,e[a+2]=e[a]^255,e[a+3]=e[a+1]^255;for(var s=0;s<n;++s)e[a+s+4]=r[s];return(a+4+n)*8},Q2=function(e,t,r,n,a,s,l,c,d,f,p){lo(t,p++,r),++a[256];for(var v=B1(a,15),S=v.t,m=v.l,w=B1(s,15),_=w.t,j=w.l,M=K2(S),I=M.c,P=M.n,D=K2(_),$=D.c,H=D.n,Q=new En(19),Z=0;Z<I.length;++Z)++Q[I[Z]&31];for(var Z=0;Z<$.length;++Z)++Q[$[Z]&31];for(var T=B1(Q,7),X=T.t,C=T.l,E=19;E>4&&!X[Z2[E-1]];--E);var U=f+5<<3,Y=xs(a,da)+xs(s,Gl)+l,ie=xs(a,S)+xs(s,_)+l+14+3*E+xs(Q,X)+2*Q[16]+3*Q[17]+7*Q[18];if(d>=0&&U<=Y&&U<=ie)return Qh(t,p,e.subarray(d,d+f));var le,fe,ne,ge;if(lo(t,p,1+(ie<Y)),p+=2,ie<Y){le=bs(S,m,0),fe=S,ne=bs(_,j,0),ge=_;var we=bs(X,C,0);lo(t,p,P-257),lo(t,p+5,H-1),lo(t,p+10,E-4),p+=14;for(var Z=0;Z<E;++Z)lo(t,p+3*Z,X[Z2[Z]]);p+=3*E;for(var xe=[I,$],A=0;A<2;++A)for(var z=xe[A],Z=0;Z<z.length;++Z){var q=z[Z]&31;lo(t,p,we[q]),p+=X[q],q>15&&(lo(t,p,z[Z]>>5&127),p+=z[Z]>>12)}}else le=Rx,fe=da,ne=Ox,ge=Gl;for(var Z=0;Z<c;++Z){var ee=n[Z];if(ee>255){var q=ee>>18&31;gs(t,p,le[q+257]),p+=fe[q+257],q>7&&(lo(t,p,ee>>23&31),p+=w0[q]);var re=ee&31;gs(t,p,ne[re]),p+=ge[re],re>3&&(gs(t,p,ee>>5&8191),p+=y0[re])}else gs(t,p,le[ee]),p+=fe[ee]}return gs(t,p,le[256]),p+fe[256]},zx=new b0([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ef=new hi(0),Bx=function(e,t,r,n,a,s){var l=s.z||e.length,c=new hi(n+l+5*(1+Math.ceil(l/7e3))+a),d=c.subarray(n,c.length-a),f=s.l,p=(s.r||0)&7;if(t){p&&(d[0]=s.r>>3);for(var v=zx[t-1],S=v>>13,m=v&8191,w=(1<<r)-1,_=s.p||new En(32768),j=s.h||new En(w+1),M=Math.ceil(r/3),I=2*M,P=function(be){return(e[be]^e[be+1]<<M^e[be+2]<<I)&w},D=new b0(25e3),$=new En(288),H=new En(32),Q=0,Z=0,T=s.i||0,X=0,C=s.w||0,E=0;T+2<l;++T){var U=P(T),Y=T&32767,ie=j[U];if(_[Y]=ie,j[U]=Y,C<=T){var le=l-T;if((Q>7e3||X>24576)&&(le>423||!f)){p=Q2(e,d,0,D,$,H,Z,X,E,T-E,p),X=Q=Z=0,E=T;for(var fe=0;fe<286;++fe)$[fe]=0;for(var fe=0;fe<30;++fe)H[fe]=0}var ne=2,ge=0,we=m,xe=Y-ie&32767;if(le>2&&U==P(T-xe))for(var A=Math.min(S,le)-1,z=Math.min(32767,T),q=Math.min(258,le);xe<=z&&--we&&Y!=ie;){if(e[T+ne]==e[T+ne-xe]){for(var ee=0;ee<q&&e[T+ee]==e[T+ee-xe];++ee);if(ee>ne){if(ne=ee,ge=xe,ee>A)break;for(var re=Math.min(xe,ee-2),ae=0,fe=0;fe<re;++fe){var ue=T-xe+fe&32767,pe=_[ue],ce=ue-pe&32767;ce>ae&&(ae=ce,ie=ue)}}}Y=ie,ie=_[Y],xe+=Y-ie&32767}if(ge){D[X++]=268435456|Fc[ne]<<18|J2[ge];var _e=Fc[ne]&31,Ie=J2[ge]&31;Z+=w0[_e]+y0[Ie],++$[257+_e],++H[Ie],C=T+ne,++Q}else D[X++]=e[T],++$[e[T]]}}for(T=Math.max(T,C);T<l;++T)D[X++]=e[T],++$[e[T]];p=Q2(e,d,f,D,$,H,Z,X,E,T-E,p),f||(s.r=p&7|d[p/8|0]<<3,p-=7,s.h=j,s.p=_,s.i=T,s.w=C)}else{for(var T=s.w||0;T<l+f;T+=65535){var Pe=T+65535;Pe>=l&&(d[p/8|0]=f,Pe=l),p=Qh(d,p+1,e.subarray(T,Pe))}s.i=l}return Fx(c,0,n+Kh(p)+a)},tf=function(){var e=1,t=0;return{p:function(r){for(var n=e,a=t,s=r.length|0,l=0;l!=s;){for(var c=Math.min(l+2655,s);l<c;++l)a+=n+=r[l];n=(n&65535)+15*(n>>16),a=(a&65535)+15*(a>>16)}e=n,t=a},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},Ux=function(e,t,r,n,a){if(!a&&(a={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),l=new hi(s.length+e.length);l.set(s),l.set(e,s.length),e=l,a.w=s.length}return Bx(e,t.level==null?6:t.level,t.mem==null?a.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,a)},rf=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},Hx=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var a=tf();a.p(t.dictionary),rf(e,2,a.d())}};function Uc(e,t){t||(t={});var r=tf();r.p(e);var n=Ux(e,t,t.dictionary?6:2,4);return Hx(n,t),rf(n,n.length-4,r.d()),n}var $x=typeof TextDecoder<"u"&&new TextDecoder,qx=0;try{$x.decode(ef,{stream:!0}),qx=1}catch{}function Vx(e){if(Array.isArray(e))return e}function Yx(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,s,l,c=[],d=!0,f=!1;try{if(s=(r=r.call(e)).next,t!==0)for(;!(d=(n=s.call(r)).done)&&(c.push(n.value),c.length!==t);d=!0);}catch(p){f=!0,a=p}finally{try{if(!d&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(f)throw a}}return c}}function eu(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Gx(e,t){if(e){if(typeof e=="string")return eu(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?eu(e,t):void 0}}function Wx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tu(e,t){return Vx(e)||Yx(e,t)||Gx(e,t)||Wx()}function ru(e,t="utf8"){return new TextDecoder(t).decode(e)}const Xx=new TextEncoder;function Zx(e){return Xx.encode(e)}const Jx=1024*8,Kx=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),U1={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class _0{constructor(t=Jx,r={}){Ee(this,"buffer");Ee(this,"byteLength");Ee(this,"byteOffset");Ee(this,"length");Ee(this,"offset");Ee(this,"lastWrittenByte");Ee(this,"littleEndian");Ee(this,"_data");Ee(this,"_mark");Ee(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const a=r.offset?r.offset>>>0:0,s=t.byteLength-a;let l=a;(ArrayBuffer.isView(t)||t instanceof _0)&&(t.byteLength!==t.buffer.byteLength&&(l=t.byteOffset+a),t=t.buffer),n?this.lastWrittenByte=s:this.lastWrittenByte=0,this.buffer=t,this.length=s,this.byteLength=s,this.byteOffset=l,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,l,s),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,a=new Uint8Array(n);a.set(new Uint8Array(this.buffer)),this.buffer=a.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=U1[r].BYTES_PER_ELEMENT*t,a=this.byteOffset+this.offset,s=this.buffer.slice(a,a+n);if(this.littleEndian===Kx&&r!=="uint8"&&r!=="int8"){const c=new Uint8Array(this.buffer.slice(a,a+n));c.reverse();const d=new U1[r](c.buffer);return this.offset+=n,d.reverse(),d}const l=new U1[r](s);return this.offset+=n,l}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return ru(this.readBytes(t))}decodeText(t=1,r="utf8"){return ru(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(Zx(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function ts(e){let t=e.length;for(;--t>=0;)e[t]=0}const Qx=3,ev=258,nf=29,tv=256,rv=tv+1+nf,of=30,nv=512,iv=new Array((rv+2)*2);ts(iv);const ov=new Array(of*2);ts(ov);const av=new Array(nv);ts(av);const sv=new Array(ev-Qx+1);ts(sv);const lv=new Array(nf);ts(lv);const cv=new Array(of);ts(cv);const uv=(e,t,r,n)=>{let a=e&65535|0,s=e>>>16&65535|0,l=0;for(;r!==0;){l=r>2e3?2e3:r,r-=l;do a=a+t[n++]|0,s=s+a|0;while(--l);a%=65521,s%=65521}return a|s<<16|0};var Hc=uv;const dv=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},hv=new Uint32Array(dv()),fv=(e,t,r,n)=>{const a=hv,s=n+r;e^=-1;for(let l=n;l<s;l++)e=e>>>8^a[(e^t[l])&255];return e^-1};var Ii=fv,$c={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},af={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const pv=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var mv=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)pv(r,n)&&(e[n]=r[n])}}return e},gv=e=>{let t=0;for(let n=0,a=e.length;n<a;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,a=0,s=e.length;n<s;n++){let l=e[n];r.set(l,a),a+=l.length}return r},sf={assign:mv,flattenChunks:gv};let lf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{lf=!1}const Ts=new Uint8Array(256);for(let e=0;e<256;e++)Ts[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ts[254]=Ts[254]=1;var xv=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,a,s,l=e.length,c=0;for(a=0;a<l;a++)r=e.charCodeAt(a),(r&64512)===55296&&a+1<l&&(n=e.charCodeAt(a+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),a++)),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(c),s=0,a=0;s<c;a++)r=e.charCodeAt(a),(r&64512)===55296&&a+1<l&&(n=e.charCodeAt(a+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),a++)),r<128?t[s++]=r:r<2048?(t[s++]=192|r>>>6,t[s++]=128|r&63):r<65536?(t[s++]=224|r>>>12,t[s++]=128|r>>>6&63,t[s++]=128|r&63):(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63,t[s++]=128|r>>>6&63,t[s++]=128|r&63);return t};const vv=(e,t)=>{if(t<65534&&e.subarray&&lf)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var bv=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,a;const s=new Array(r*2);for(a=0,n=0;n<r;){let l=e[n++];if(l<128){s[a++]=l;continue}let c=Ts[l];if(c>4){s[a++]=65533,n+=c-1;continue}for(l&=c===2?31:c===3?15:7;c>1&&n<r;)l=l<<6|e[n++]&63,c--;if(c>1){s[a++]=65533;continue}l<65536?s[a++]=l:(l-=65536,s[a++]=55296|l>>10&1023,s[a++]=56320|l&1023)}return vv(s,a)},wv=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ts[e[r]]>t?r:t},qc={string2buf:xv,buf2string:bv,utf8border:wv};function yv(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var _v=yv;const bl=16209,Cv=16191;var Sv=function(t,r){let n,a,s,l,c,d,f,p,v,S,m,w,_,j,M,I,P,D,$,H,Q,Z,T,X;const C=t.state;n=t.next_in,T=t.input,a=n+(t.avail_in-5),s=t.next_out,X=t.output,l=s-(r-t.avail_out),c=s+(t.avail_out-257),d=C.dmax,f=C.wsize,p=C.whave,v=C.wnext,S=C.window,m=C.hold,w=C.bits,_=C.lencode,j=C.distcode,M=(1<<C.lenbits)-1,I=(1<<C.distbits)-1;e:do{w<15&&(m+=T[n++]<<w,w+=8,m+=T[n++]<<w,w+=8),P=_[m&M];t:for(;;){if(D=P>>>24,m>>>=D,w-=D,D=P>>>16&255,D===0)X[s++]=P&65535;else if(D&16){$=P&65535,D&=15,D&&(w<D&&(m+=T[n++]<<w,w+=8),$+=m&(1<<D)-1,m>>>=D,w-=D),w<15&&(m+=T[n++]<<w,w+=8,m+=T[n++]<<w,w+=8),P=j[m&I];r:for(;;){if(D=P>>>24,m>>>=D,w-=D,D=P>>>16&255,D&16){if(H=P&65535,D&=15,w<D&&(m+=T[n++]<<w,w+=8,w<D&&(m+=T[n++]<<w,w+=8)),H+=m&(1<<D)-1,H>d){t.msg="invalid distance too far back",C.mode=bl;break e}if(m>>>=D,w-=D,D=s-l,H>D){if(D=H-D,D>p&&C.sane){t.msg="invalid distance too far back",C.mode=bl;break e}if(Q=0,Z=S,v===0){if(Q+=f-D,D<$){$-=D;do X[s++]=S[Q++];while(--D);Q=s-H,Z=X}}else if(v<D){if(Q+=f+v-D,D-=v,D<$){$-=D;do X[s++]=S[Q++];while(--D);if(Q=0,v<$){D=v,$-=D;do X[s++]=S[Q++];while(--D);Q=s-H,Z=X}}}else if(Q+=v-D,D<$){$-=D;do X[s++]=S[Q++];while(--D);Q=s-H,Z=X}for(;$>2;)X[s++]=Z[Q++],X[s++]=Z[Q++],X[s++]=Z[Q++],$-=3;$&&(X[s++]=Z[Q++],$>1&&(X[s++]=Z[Q++]))}else{Q=s-H;do X[s++]=X[Q++],X[s++]=X[Q++],X[s++]=X[Q++],$-=3;while($>2);$&&(X[s++]=X[Q++],$>1&&(X[s++]=X[Q++]))}}else if(D&64){t.msg="invalid distance code",C.mode=bl;break e}else{P=j[(P&65535)+(m&(1<<D)-1)];continue r}break}}else if(D&64)if(D&32){C.mode=Cv;break e}else{t.msg="invalid literal/length code",C.mode=bl;break e}else{P=_[(P&65535)+(m&(1<<D)-1)];continue t}break}}while(n<a&&s<c);$=w>>3,n-=$,w-=$<<3,m&=(1<<w)-1,t.next_in=n,t.next_out=s,t.avail_in=n<a?5+(a-n):5-(n-a),t.avail_out=s<c?257+(c-s):257-(s-c),C.hold=m,C.bits=w};const Ea=15,nu=852,iu=592,ou=0,H1=1,au=2,Av=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),kv=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Mv=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),jv=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Nv=(e,t,r,n,a,s,l,c)=>{const d=c.bits;let f=0,p=0,v=0,S=0,m=0,w=0,_=0,j=0,M=0,I=0,P,D,$,H,Q,Z=null,T;const X=new Uint16Array(Ea+1),C=new Uint16Array(Ea+1);let E=null,U,Y,ie;for(f=0;f<=Ea;f++)X[f]=0;for(p=0;p<n;p++)X[t[r+p]]++;for(m=d,S=Ea;S>=1&&X[S]===0;S--);if(m>S&&(m=S),S===0)return a[s++]=1<<24|64<<16|0,a[s++]=1<<24|64<<16|0,c.bits=1,0;for(v=1;v<S&&X[v]===0;v++);for(m<v&&(m=v),j=1,f=1;f<=Ea;f++)if(j<<=1,j-=X[f],j<0)return-1;if(j>0&&(e===ou||S!==1))return-1;for(C[1]=0,f=1;f<Ea;f++)C[f+1]=C[f]+X[f];for(p=0;p<n;p++)t[r+p]!==0&&(l[C[t[r+p]]++]=p);if(e===ou?(Z=E=l,T=20):e===H1?(Z=Av,E=kv,T=257):(Z=Mv,E=jv,T=0),I=0,p=0,f=v,Q=s,w=m,_=0,$=-1,M=1<<m,H=M-1,e===H1&&M>nu||e===au&&M>iu)return 1;for(;;){U=f-_,l[p]+1<T?(Y=0,ie=l[p]):l[p]>=T?(Y=E[l[p]-T],ie=Z[l[p]-T]):(Y=96,ie=0),P=1<<f-_,D=1<<w,v=D;do D-=P,a[Q+(I>>_)+D]=U<<24|Y<<16|ie|0;while(D!==0);for(P=1<<f-1;I&P;)P>>=1;if(P!==0?(I&=P-1,I+=P):I=0,p++,--X[f]===0){if(f===S)break;f=t[r+l[p]]}if(f>m&&(I&H)!==$){for(_===0&&(_=m),Q+=v,w=f-_,j=1<<w;w+_<S&&(j-=X[w+_],!(j<=0));)w++,j<<=1;if(M+=1<<w,e===H1&&M>nu||e===au&&M>iu)return 1;$=I&H,a[$]=m<<24|w<<16|Q-s|0}}return I!==0&&(a[Q+I]=f-_<<24|64<<16|0),c.bits=m,0};var ws=Nv;const Iv=0,cf=1,uf=2,{Z_FINISH:su,Z_BLOCK:Tv,Z_TREES:wl,Z_OK:ha,Z_STREAM_END:Lv,Z_NEED_DICT:Pv,Z_STREAM_ERROR:Xn,Z_DATA_ERROR:df,Z_MEM_ERROR:hf,Z_BUF_ERROR:Ev,Z_DEFLATED:lu}=af,d1=16180,cu=16181,uu=16182,du=16183,hu=16184,fu=16185,pu=16186,mu=16187,gu=16188,xu=16189,Wl=16190,co=16191,$1=16192,vu=16193,q1=16194,bu=16195,wu=16196,yu=16197,_u=16198,yl=16199,_l=16200,Cu=16201,Su=16202,Au=16203,ku=16204,Mu=16205,V1=16206,ju=16207,Nu=16208,ir=16209,ff=16210,pf=16211,Dv=852,Rv=592,Ov=15,Fv=Ov,Iu=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function zv(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pa=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<d1||t.mode>pf?1:0},mf=e=>{if(pa(e))return Xn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=d1,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Dv),t.distcode=t.distdyn=new Int32Array(Rv),t.sane=1,t.back=-1,ha},gf=e=>{if(pa(e))return Xn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,mf(e)},xf=(e,t)=>{let r;if(pa(e))return Xn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?Xn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,gf(e))},vf=(e,t)=>{if(!e)return Xn;const r=new zv;e.state=r,r.strm=e,r.window=null,r.mode=d1;const n=xf(e,t);return n!==ha&&(e.state=null),n},Bv=e=>vf(e,Fv);let Tu=!0,Y1,G1;const Uv=e=>{if(Tu){Y1=new Int32Array(512),G1=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(ws(cf,e.lens,0,288,Y1,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;ws(uf,e.lens,0,32,G1,0,e.work,{bits:5}),Tu=!1}e.lencode=Y1,e.lenbits=9,e.distcode=G1,e.distbits=5},bf=(e,t,r,n)=>{let a;const s=e.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),n>=s.wsize?(s.window.set(t.subarray(r-s.wsize,r),0),s.wnext=0,s.whave=s.wsize):(a=s.wsize-s.wnext,a>n&&(a=n),s.window.set(t.subarray(r-n,r-n+a),s.wnext),n-=a,n?(s.window.set(t.subarray(r-n,r),0),s.wnext=n,s.whave=s.wsize):(s.wnext+=a,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=a))),0},Hv=(e,t)=>{let r,n,a,s,l,c,d,f,p,v,S,m,w,_,j=0,M,I,P,D,$,H,Q,Z;const T=new Uint8Array(4);let X,C;const E=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pa(e)||!e.output||!e.input&&e.avail_in!==0)return Xn;r=e.state,r.mode===co&&(r.mode=$1),l=e.next_out,a=e.output,d=e.avail_out,s=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,v=c,S=d,Z=ha;e:for(;;)switch(r.mode){case d1:if(r.wrap===0){r.mode=$1;break}for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,T[0]=f&255,T[1]=f>>>8&255,r.check=Ii(r.check,T,2,0),f=0,p=0,r.mode=cu;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=ir;break}if((f&15)!==lu){e.msg="unknown compression method",r.mode=ir;break}if(f>>>=4,p-=4,Q=(f&15)+8,r.wbits===0&&(r.wbits=Q),Q>15||Q>r.wbits){e.msg="invalid window size",r.mode=ir;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?xu:co,f=0,p=0;break;case cu:for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.flags=f,(r.flags&255)!==lu){e.msg="unknown compression method",r.mode=ir;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=ir;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,r.check=Ii(r.check,T,2,0)),f=0,p=0,r.mode=uu;case uu:for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,T[2]=f>>>16&255,T[3]=f>>>24&255,r.check=Ii(r.check,T,4,0)),f=0,p=0,r.mode=du;case du:for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,r.check=Ii(r.check,T,2,0)),f=0,p=0,r.mode=hu;case hu:if(r.flags&1024){for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,r.check=Ii(r.check,T,2,0)),f=0,p=0}else r.head&&(r.head.extra=null);r.mode=fu;case fu:if(r.flags&1024&&(m=r.length,m>c&&(m=c),m&&(r.head&&(Q=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(s,s+m),Q)),r.flags&512&&r.wrap&4&&(r.check=Ii(r.check,n,m,s)),c-=m,s+=m,r.length-=m),r.length))break e;r.length=0,r.mode=pu;case pu:if(r.flags&2048){if(c===0)break e;m=0;do Q=n[s+m++],r.head&&Q&&r.length<65536&&(r.head.name+=String.fromCharCode(Q));while(Q&&m<c);if(r.flags&512&&r.wrap&4&&(r.check=Ii(r.check,n,m,s)),c-=m,s+=m,Q)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=mu;case mu:if(r.flags&4096){if(c===0)break e;m=0;do Q=n[s+m++],r.head&&Q&&r.length<65536&&(r.head.comment+=String.fromCharCode(Q));while(Q&&m<c);if(r.flags&512&&r.wrap&4&&(r.check=Ii(r.check,n,m,s)),c-=m,s+=m,Q)break e}else r.head&&(r.head.comment=null);r.mode=gu;case gu:if(r.flags&512){for(;p<16;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=ir;break}f=0,p=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=co;break;case xu:for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}e.adler=r.check=Iu(f),f=0,p=0,r.mode=Wl;case Wl:if(r.havedict===0)return e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,Pv;e.adler=r.check=1,r.mode=co;case co:if(t===Tv||t===wl)break e;case $1:if(r.last){f>>>=p&7,p-=p&7,r.mode=V1;break}for(;p<3;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}switch(r.last=f&1,f>>>=1,p-=1,f&3){case 0:r.mode=vu;break;case 1:if(Uv(r),r.mode=yl,t===wl){f>>>=2,p-=2;break e}break;case 2:r.mode=wu;break;case 3:e.msg="invalid block type",r.mode=ir}f>>>=2,p-=2;break;case vu:for(f>>>=p&7,p-=p&7;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=ir;break}if(r.length=f&65535,f=0,p=0,r.mode=q1,t===wl)break e;case q1:r.mode=bu;case bu:if(m=r.length,m){if(m>c&&(m=c),m>d&&(m=d),m===0)break e;a.set(n.subarray(s,s+m),l),c-=m,s+=m,d-=m,l+=m,r.length-=m;break}r.mode=co;break;case wu:for(;p<14;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.nlen=(f&31)+257,f>>>=5,p-=5,r.ndist=(f&31)+1,f>>>=5,p-=5,r.ncode=(f&15)+4,f>>>=4,p-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=ir;break}r.have=0,r.mode=yu;case yu:for(;r.have<r.ncode;){for(;p<3;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.lens[E[r.have++]]=f&7,f>>>=3,p-=3}for(;r.have<19;)r.lens[E[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,X={bits:r.lenbits},Z=ws(Iv,r.lens,0,19,r.lencode,0,r.work,X),r.lenbits=X.bits,Z){e.msg="invalid code lengths set",r.mode=ir;break}r.have=0,r.mode=_u;case _u:for(;r.have<r.nlen+r.ndist;){for(;j=r.lencode[f&(1<<r.lenbits)-1],M=j>>>24,I=j>>>16&255,P=j&65535,!(M<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(P<16)f>>>=M,p-=M,r.lens[r.have++]=P;else{if(P===16){for(C=M+2;p<C;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(f>>>=M,p-=M,r.have===0){e.msg="invalid bit length repeat",r.mode=ir;break}Q=r.lens[r.have-1],m=3+(f&3),f>>>=2,p-=2}else if(P===17){for(C=M+3;p<C;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=M,p-=M,Q=0,m=3+(f&7),f>>>=3,p-=3}else{for(C=M+7;p<C;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=M,p-=M,Q=0,m=11+(f&127),f>>>=7,p-=7}if(r.have+m>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=ir;break}for(;m--;)r.lens[r.have++]=Q}}if(r.mode===ir)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=ir;break}if(r.lenbits=9,X={bits:r.lenbits},Z=ws(cf,r.lens,0,r.nlen,r.lencode,0,r.work,X),r.lenbits=X.bits,Z){e.msg="invalid literal/lengths set",r.mode=ir;break}if(r.distbits=6,r.distcode=r.distdyn,X={bits:r.distbits},Z=ws(uf,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,X),r.distbits=X.bits,Z){e.msg="invalid distances set",r.mode=ir;break}if(r.mode=yl,t===wl)break e;case yl:r.mode=_l;case _l:if(c>=6&&d>=258){e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,Sv(e,S),l=e.next_out,a=e.output,d=e.avail_out,s=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,r.mode===co&&(r.back=-1);break}for(r.back=0;j=r.lencode[f&(1<<r.lenbits)-1],M=j>>>24,I=j>>>16&255,P=j&65535,!(M<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(I&&!(I&240)){for(D=M,$=I,H=P;j=r.lencode[H+((f&(1<<D+$)-1)>>D)],M=j>>>24,I=j>>>16&255,P=j&65535,!(D+M<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=D,p-=D,r.back+=D}if(f>>>=M,p-=M,r.back+=M,r.length=P,I===0){r.mode=Mu;break}if(I&32){r.back=-1,r.mode=co;break}if(I&64){e.msg="invalid literal/length code",r.mode=ir;break}r.extra=I&15,r.mode=Cu;case Cu:if(r.extra){for(C=r.extra;p<C;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=Su;case Su:for(;j=r.distcode[f&(1<<r.distbits)-1],M=j>>>24,I=j>>>16&255,P=j&65535,!(M<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(!(I&240)){for(D=M,$=I,H=P;j=r.distcode[H+((f&(1<<D+$)-1)>>D)],M=j>>>24,I=j>>>16&255,P=j&65535,!(D+M<=p);){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}f>>>=D,p-=D,r.back+=D}if(f>>>=M,p-=M,r.back+=M,I&64){e.msg="invalid distance code",r.mode=ir;break}r.offset=P,r.extra=I&15,r.mode=Au;case Au:if(r.extra){for(C=r.extra;p<C;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=ir;break}r.mode=ku;case ku:if(d===0)break e;if(m=S-d,r.offset>m){if(m=r.offset-m,m>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=ir;break}m>r.wnext?(m-=r.wnext,w=r.wsize-m):w=r.wnext-m,m>r.length&&(m=r.length),_=r.window}else _=a,w=l-r.offset,m=r.length;m>d&&(m=d),d-=m,r.length-=m;do a[l++]=_[w++];while(--m);r.length===0&&(r.mode=_l);break;case Mu:if(d===0)break e;a[l++]=r.length,d--,r.mode=_l;break;case V1:if(r.wrap){for(;p<32;){if(c===0)break e;c--,f|=n[s++]<<p,p+=8}if(S-=d,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Ii(r.check,a,S,l-S):Hc(r.check,a,S,l-S)),S=d,r.wrap&4&&(r.flags?f:Iu(f))!==r.check){e.msg="incorrect data check",r.mode=ir;break}f=0,p=0}r.mode=ju;case ju:if(r.wrap&&r.flags){for(;p<32;){if(c===0)break e;c--,f+=n[s++]<<p,p+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=ir;break}f=0,p=0}r.mode=Nu;case Nu:Z=Lv;break e;case ir:Z=df;break e;case ff:return hf;case pf:default:return Xn}return e.next_out=l,e.avail_out=d,e.next_in=s,e.avail_in=c,r.hold=f,r.bits=p,(r.wsize||S!==e.avail_out&&r.mode<ir&&(r.mode<V1||t!==su))&&bf(e,e.output,e.next_out,S-e.avail_out),v-=e.avail_in,S-=e.avail_out,e.total_in+=v,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Ii(r.check,a,S,e.next_out-S):Hc(r.check,a,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===co?128:0)+(r.mode===yl||r.mode===q1?256:0),(v===0&&S===0||t===su)&&Z===ha&&(Z=Ev),Z},$v=e=>{if(pa(e))return Xn;let t=e.state;return t.window&&(t.window=null),e.state=null,ha},qv=(e,t)=>{if(pa(e))return Xn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,ha):Xn},Vv=(e,t)=>{const r=t.length;let n,a,s;return pa(e)||(n=e.state,n.wrap!==0&&n.mode!==Wl)?Xn:n.mode===Wl&&(a=1,a=Hc(a,t,r,0),a!==n.check)?df:(s=bf(e,t,r,r),s?(n.mode=ff,hf):(n.havedict=1,ha))};var Yv=gf,Gv=xf,Wv=mf,Xv=Bv,Zv=vf,Jv=Hv,Kv=$v,Qv=qv,eb=Vv,tb="pako inflate (from Nodeca project)",uo={inflateReset:Yv,inflateReset2:Gv,inflateResetKeep:Wv,inflateInit:Xv,inflateInit2:Zv,inflate:Jv,inflateEnd:Kv,inflateGetHeader:Qv,inflateSetDictionary:eb,inflateInfo:tb};function rb(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var nb=rb;const wf=Object.prototype.toString,{Z_NO_FLUSH:ib,Z_FINISH:ob,Z_OK:Ls,Z_STREAM_END:W1,Z_NEED_DICT:X1,Z_STREAM_ERROR:ab,Z_DATA_ERROR:Lu,Z_MEM_ERROR:sb}=af;function zs(e){this.options=sf.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _v,this.strm.avail_out=0;let r=uo.inflateInit2(this.strm,t.windowBits);if(r!==Ls)throw new Error($c[r]);if(this.header=new nb,uo.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=qc.string2buf(t.dictionary):wf.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=uo.inflateSetDictionary(this.strm,t.dictionary),r!==Ls)))throw new Error($c[r])}zs.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,a=this.options.dictionary;let s,l,c;if(this.ended)return!1;for(t===~~t?l=t:l=t===!0?ob:ib,wf.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),s=uo.inflate(r,l),s===X1&&a&&(s=uo.inflateSetDictionary(r,a),s===Ls?s=uo.inflate(r,l):s===Lu&&(s=X1));r.avail_in>0&&s===W1&&r.state.wrap>0&&e[r.next_in]!==0;)uo.inflateReset(r),s=uo.inflate(r,l);switch(s){case ab:case Lu:case X1:case sb:return this.onEnd(s),this.ended=!0,!1}if(c=r.avail_out,r.next_out&&(r.avail_out===0||s===W1))if(this.options.to==="string"){let d=qc.utf8border(r.output,r.next_out),f=r.next_out-d,p=qc.buf2string(r.output,d);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(d,d+f),0),this.onData(p)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(s===Ls&&c===0)){if(s===W1)return s=uo.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};zs.prototype.onData=function(e){this.chunks.push(e)};zs.prototype.onEnd=function(e){e===Ls&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=sf.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function lb(e,t){const r=new zs(t);if(r.push(e),r.err)throw r.msg||$c[r.err];return r.result}var cb=zs,ub=lb,db={Inflate:cb,inflate:ub};const{Inflate:hb,inflate:fb}=db;var Pu=hb,pb=fb;const yf=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;yf[e]=t}const Eu=4294967295;function mb(e,t,r){let n=e;for(let a=0;a<r;a++)n=yf[(n^t[a])&255]^n>>>8;return n}function gb(e,t){return(mb(Eu,e,t)^Eu)>>>0}function Du(e,t,r){const n=e.readUint32(),a=gb(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(a!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${a}`)}function _f(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function Cf(e,t,r,n){let a=0;for(;a<n;a++)t[a]=e[a];for(;a<r;a++)t[a]=e[a]+t[a-n]&255}function Sf(e,t,r,n){let a=0;if(r.length===0)for(;a<n;a++)t[a]=e[a];else for(;a<n;a++)t[a]=e[a]+r[a]&255}function Af(e,t,r,n,a){let s=0;if(r.length===0){for(;s<a;s++)t[s]=e[s];for(;s<n;s++)t[s]=e[s]+(t[s-a]>>1)&255}else{for(;s<a;s++)t[s]=e[s]+(r[s]>>1)&255;for(;s<n;s++)t[s]=e[s]+(t[s-a]+r[s]>>1)&255}}function kf(e,t,r,n,a){let s=0;if(r.length===0){for(;s<a;s++)t[s]=e[s];for(;s<n;s++)t[s]=e[s]+t[s-a]&255}else{for(;s<a;s++)t[s]=e[s]+r[s]&255;for(;s<n;s++)t[s]=e[s]+xb(t[s-a],r[s],r[s-a])&255}}function xb(e,t,r){const n=e+t-r,a=Math.abs(n-e),s=Math.abs(n-t),l=Math.abs(n-r);return a<=s&&a<=l?e:s<=l?t:r}function vb(e,t,r,n,a,s){switch(e){case 0:_f(t,r,a);break;case 1:Cf(t,r,a,s);break;case 2:Sf(t,r,n,a);break;case 3:Af(t,r,n,a,s);break;case 4:kf(t,r,n,a,s);break;default:throw new Error(`Unsupported filter: ${e}`)}}const bb=new Uint16Array([255]),wb=new Uint8Array(bb.buffer),yb=wb[0]===255;function _b(e){const{data:t,width:r,height:n,channels:a,depth:s}=e,l=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],c=Math.ceil(s/8)*a,d=new Uint8Array(n*r*c);let f=0;for(let p=0;p<7;p++){const v=l[p],S=Math.ceil((r-v.x)/v.xStep),m=Math.ceil((n-v.y)/v.yStep);if(S<=0||m<=0)continue;const w=S*c,_=new Uint8Array(w);for(let j=0;j<m;j++){const M=t[f++],I=t.subarray(f,f+w);f+=w;const P=new Uint8Array(w);vb(M,I,P,_,w,c),_.set(P);for(let D=0;D<S;D++){const $=v.x+D*v.xStep,H=v.y+j*v.yStep;if(!($>=r||H>=n))for(let Q=0;Q<c;Q++)d[(H*r+$)*c+Q]=P[D*c+Q]}}}if(s===16){const p=new Uint16Array(d.buffer);if(yb)for(let v=0;v<p.length;v++)p[v]=Cb(p[v]);return p}else return d}function Cb(e){return(e&255)<<8|e>>8&255}const Sb=new Uint16Array([255]),Ab=new Uint8Array(Sb.buffer),kb=Ab[0]===255,Mb=new Uint8Array(0);function Ru(e){const{data:t,width:r,height:n,channels:a,depth:s}=e,l=Math.ceil(s/8)*a,c=Math.ceil(s/8*a*r),d=new Uint8Array(n*c);let f=Mb,p=0,v,S;for(let m=0;m<n;m++){switch(v=t.subarray(p+1,p+1+c),S=d.subarray(m*c,(m+1)*c),t[p]){case 0:_f(v,S,c);break;case 1:Cf(v,S,c,l);break;case 2:Sf(v,S,f,c);break;case 3:Af(v,S,f,c,l);break;case 4:kf(v,S,f,c,l);break;default:throw new Error(`Unsupported filter: ${t[p]}`)}f=S,p+=c+1}if(s===16){const m=new Uint16Array(d.buffer);if(kb)for(let w=0;w<m.length;w++)m[w]=jb(m[w]);return m}else return d}function jb(e){return(e&255)<<8|e>>8&255}const Fl=Uint8Array.of(137,80,78,71,13,10,26,10);function Ou(e){if(!Nb(e.readBytes(Fl.length)))throw new Error("wrong PNG signature")}function Nb(e){if(e.length<Fl.length)return!1;for(let t=0;t<Fl.length;t++)if(e[t]!==Fl[t])return!1;return!0}const Ib="tEXt",Tb=0,Mf=new TextDecoder("latin1");function Lb(e){if(Eb(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const Pb=/^[\u0000-\u00FF]*$/;function Eb(e){if(!Pb.test(e))throw new Error("invalid latin1 text")}function Db(e,t,r){const n=jf(t);e[n]=Rb(t,r-n.length-1)}function jf(e){for(e.mark();e.readByte()!==Tb;);const t=e.offset;e.reset();const r=Mf.decode(e.readBytes(t-e.offset-1));return e.skip(1),Lb(r),r}function Rb(e,t){return Mf.decode(e.readBytes(t))}const Tn={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Z1={UNKNOWN:-1,DEFLATE:0},Fu={UNKNOWN:-1,ADAPTIVE:0},J1={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Cl={NONE:0,BACKGROUND:1,PREVIOUS:2},K1={SOURCE:0,OVER:1};class Ob extends _0{constructor(r,n={}){super(r);Ee(this,"_checkCrc");Ee(this,"_inflator");Ee(this,"_png");Ee(this,"_apng");Ee(this,"_end");Ee(this,"_hasPalette");Ee(this,"_palette");Ee(this,"_hasTransparency");Ee(this,"_transparency");Ee(this,"_compressionMethod");Ee(this,"_filterMethod");Ee(this,"_interlaceMethod");Ee(this,"_colorType");Ee(this,"_isAnimated");Ee(this,"_numberOfFrames");Ee(this,"_numberOfPlays");Ee(this,"_frames");Ee(this,"_writingDataChunks");const{checkCrc:a=!1}=n;this._checkCrc=a,this._inflator=new Pu,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Z1.UNKNOWN,this._filterMethod=Fu.UNKNOWN,this._interlaceMethod=J1.UNKNOWN,this._colorType=Tn.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(Ou(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(Ou(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const a=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case Ib:Db(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-a!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?Du(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const a=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=a+r;break}if(this.offset-a!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?Du(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=Fb(this.readUint8());const n=this.readUint8();this._colorType=n;let a;switch(n){case Tn.GREYSCALE:a=1;break;case Tn.TRUECOLOUR:a=3;break;case Tn.INDEXED_COLOUR:a=1;break;case Tn.GREYSCALE_ALPHA:a=2;break;case Tn.TRUECOLOUR_ALPHA:a=4;break;case Tn.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=a,this._compressionMethod=this.readUint8(),this._compressionMethod!==Z1.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const a=[];this._palette=a;for(let s=0;s<n;s++)a.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,a=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,a,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,a=this.offset+this.byteOffset;if(a+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,a,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case Tn.GREYSCALE:case Tn.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case Tn.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const a=this.readByte();this._palette[n].push(a)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case Tn.UNKNOWN:case Tn.GREYSCALE_ALPHA:case Tn.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=jf(this),a=this.readUint8();if(a!==Z1.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${a}`);const s=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:pb(s)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),a=this.readByte();this._png.resolution={x:r,y:n,unit:a}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},a=this._frames.at(r);if(a){if(a.data=Ru({data:a.data,width:a.width,height:a.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||a.xOffset===0&&a.yOffset===0&&a.width===this._png.width&&a.height===this._png.height)n.data=a.data;else{const s=this._apng.frames.at(r-1);this.disposeFrame(a,s,n),this.addFrameDataToCanvas(n,a)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,a){switch(r.disposeOp){case Cl.NONE:break;case Cl.BACKGROUND:for(let s=0;s<this._png.height;s++)for(let l=0;l<this._png.width;l++){const c=(s*r.width+l)*this._png.channels;for(let d=0;d<this._png.channels;d++)a.data[c+d]=0}break;case Cl.PREVIOUS:a.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const a=1<<this._png.depth,s=(l,c)=>{const d=((l+n.yOffset)*this._png.width+n.xOffset+c)*this._png.channels,f=(l*n.width+c)*this._png.channels;return{index:d,frameIndex:f}};switch(n.blendOp){case K1.SOURCE:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:d,frameIndex:f}=s(l,c);for(let p=0;p<this._png.channels;p++)r.data[d+p]=n.data[f+p]}break;case K1.OVER:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:d,frameIndex:f}=s(l,c);for(let p=0;p<this._png.channels;p++){const v=n.data[f+this._png.channels-1]/a,S=p%(this._png.channels-1)===0?1:n.data[f+p],m=Math.floor(v*S+(1-v)*r.data[d+p]);r.data[d+p]+=m}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==Fu.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===J1.NO_INTERLACE)this._png.data=Ru({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===J1.ADAM7)this._png.data=_b({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Cl.NONE,blendOp:K1.SOURCE,data:r}),this._inflator=new Pu,this._writingDataChunks=!1}}function Fb(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var zu;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(zu||(zu={}));function zb(e,t){return new Ob(e,t).decode()}var mt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function Q1(){mt.console&&typeof mt.console.log=="function"&&mt.console.log.apply(mt.console,arguments)}var Zt={log:Q1,warn:function(e){mt.console&&(typeof mt.console.warn=="function"?mt.console.warn.apply(mt.console,arguments):Q1.call(null,arguments))},error:function(e){mt.console&&(typeof mt.console.error=="function"?mt.console.error.apply(mt.console,arguments):Q1(e))}};function ec(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){sa(n.response,t,r)},n.onerror=function(){Zt.error("could not download file")},n.send()}function Bu(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Sl(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var sa=mt.saveAs||((typeof window>"u"?"undefined":$t(window))!=="object"||window!==mt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=mt.URL||mt.webkitURL,a=document.createElement("a");t=t||e.name||"download",a.download=t,a.rel="noopener",typeof e=="string"?(a.href=e,a.origin!==location.origin?Bu(a.href)?ec(e,t,r):Sl(a,a.target="_blank"):Sl(a)):(a.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(a.href)},4e4),setTimeout(function(){Sl(a)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(Bu(e))ec(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){Sl(n)})}else navigator.msSaveOrOpenBlob(function(a,s){return s===void 0?s={autoBom:!1}:$t(s)!=="object"&&(Zt.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return ec(e,t,r);var a=e.type==="application/octet-stream",s=/constructor/i.test(mt.HTMLElement)||mt.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&s)&&(typeof FileReader>"u"?"undefined":$t(FileReader))==="object"){var c=new FileReader;c.onloadend=function(){var p=c.result;p=l?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=p:location=p,n=null},c.readAsDataURL(e)}else{var d=mt.URL||mt.webkitURL,f=d.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function Nf(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(c){return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(c){return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(c){return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]}}],n=0;n<r.length;n++){var a=r[n].re,s=r[n].process,l=a.exec(e);l&&(t=s(l),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var c=this.r.toString(16),d=this.g.toString(16),f=this.b.toString(16);return c.length==1&&(c="0"+c),d.length==1&&(d="0"+d),f.length==1&&(f="0"+f),"#"+c+d+f}}var zl=mt.atob.bind(mt),Uu=mt.btoa.bind(mt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function tc(e,t){var r=e[0],n=e[1],a=e[2],s=e[3];r=Vr(r,n,a,s,t[0],7,-680876936),s=Vr(s,r,n,a,t[1],12,-389564586),a=Vr(a,s,r,n,t[2],17,606105819),n=Vr(n,a,s,r,t[3],22,-1044525330),r=Vr(r,n,a,s,t[4],7,-176418897),s=Vr(s,r,n,a,t[5],12,1200080426),a=Vr(a,s,r,n,t[6],17,-1473231341),n=Vr(n,a,s,r,t[7],22,-45705983),r=Vr(r,n,a,s,t[8],7,1770035416),s=Vr(s,r,n,a,t[9],12,-1958414417),a=Vr(a,s,r,n,t[10],17,-42063),n=Vr(n,a,s,r,t[11],22,-1990404162),r=Vr(r,n,a,s,t[12],7,1804603682),s=Vr(s,r,n,a,t[13],12,-40341101),a=Vr(a,s,r,n,t[14],17,-1502002290),r=Yr(r,n=Vr(n,a,s,r,t[15],22,1236535329),a,s,t[1],5,-165796510),s=Yr(s,r,n,a,t[6],9,-1069501632),a=Yr(a,s,r,n,t[11],14,643717713),n=Yr(n,a,s,r,t[0],20,-373897302),r=Yr(r,n,a,s,t[5],5,-701558691),s=Yr(s,r,n,a,t[10],9,38016083),a=Yr(a,s,r,n,t[15],14,-660478335),n=Yr(n,a,s,r,t[4],20,-405537848),r=Yr(r,n,a,s,t[9],5,568446438),s=Yr(s,r,n,a,t[14],9,-1019803690),a=Yr(a,s,r,n,t[3],14,-187363961),n=Yr(n,a,s,r,t[8],20,1163531501),r=Yr(r,n,a,s,t[13],5,-1444681467),s=Yr(s,r,n,a,t[2],9,-51403784),a=Yr(a,s,r,n,t[7],14,1735328473),r=Gr(r,n=Yr(n,a,s,r,t[12],20,-1926607734),a,s,t[5],4,-378558),s=Gr(s,r,n,a,t[8],11,-2022574463),a=Gr(a,s,r,n,t[11],16,1839030562),n=Gr(n,a,s,r,t[14],23,-35309556),r=Gr(r,n,a,s,t[1],4,-1530992060),s=Gr(s,r,n,a,t[4],11,1272893353),a=Gr(a,s,r,n,t[7],16,-155497632),n=Gr(n,a,s,r,t[10],23,-1094730640),r=Gr(r,n,a,s,t[13],4,681279174),s=Gr(s,r,n,a,t[0],11,-358537222),a=Gr(a,s,r,n,t[3],16,-722521979),n=Gr(n,a,s,r,t[6],23,76029189),r=Gr(r,n,a,s,t[9],4,-640364487),s=Gr(s,r,n,a,t[12],11,-421815835),a=Gr(a,s,r,n,t[15],16,530742520),r=Wr(r,n=Gr(n,a,s,r,t[2],23,-995338651),a,s,t[0],6,-198630844),s=Wr(s,r,n,a,t[7],10,1126891415),a=Wr(a,s,r,n,t[14],15,-1416354905),n=Wr(n,a,s,r,t[5],21,-57434055),r=Wr(r,n,a,s,t[12],6,1700485571),s=Wr(s,r,n,a,t[3],10,-1894986606),a=Wr(a,s,r,n,t[10],15,-1051523),n=Wr(n,a,s,r,t[1],21,-2054922799),r=Wr(r,n,a,s,t[8],6,1873313359),s=Wr(s,r,n,a,t[15],10,-30611744),a=Wr(a,s,r,n,t[6],15,-1560198380),n=Wr(n,a,s,r,t[13],21,1309151649),r=Wr(r,n,a,s,t[4],6,-145523070),s=Wr(s,r,n,a,t[11],10,-1120210379),a=Wr(a,s,r,n,t[2],15,718787259),n=Wr(n,a,s,r,t[9],21,-343485551),e[0]=Ho(r,e[0]),e[1]=Ho(n,e[1]),e[2]=Ho(a,e[2]),e[3]=Ho(s,e[3])}function h1(e,t,r,n,a,s){return t=Ho(Ho(t,e),Ho(n,s)),Ho(t<<a|t>>>32-a,r)}function Vr(e,t,r,n,a,s,l){return h1(t&r|~t&n,e,t,a,s,l)}function Yr(e,t,r,n,a,s,l){return h1(t&n|r&~n,e,t,a,s,l)}function Gr(e,t,r,n,a,s,l){return h1(t^r^n,e,t,a,s,l)}function Wr(e,t,r,n,a,s,l){return h1(r^(t|~n),e,t,a,s,l)}function If(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)tc(n,Bb(e.substring(t-64,t)));e=e.substring(t-64);var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)a[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(a[t>>2]|=128<<(t%4<<3),t>55)for(tc(n,a),t=0;t<16;t++)a[t]=0;return a[14]=8*r,tc(n,a),n}function Bb(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var Hu="0123456789abcdef".split("");function Ub(e){for(var t="",r=0;r<4;r++)t+=Hu[e>>8*r+4&15]+Hu[e>>8*r&15];return t}function Hb(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function Vc(e){return If(e).map(Hb).join("")}var $b=function(e){for(var t=0;t<e.length;t++)e[t]=Ub(e[t]);return e.join("")}(If("hello"))!="5d41402abc4b2a76b9719d911017c592";function Ho(e,t){if($b){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Yc(e,t){var r,n,a,s;if(e!==r){for(var l=(a=e,s=1+(256/e.length|0),new Array(s+1).join(a)),c=[],d=0;d<256;d++)c[d]=d;var f=0;for(d=0;d<256;d++){var p=c[d];f=(f+p+l.charCodeAt(d))%256,c[d]=c[f],c[f]=p}r=e,n=c}else c=n;var v=t.length,S=0,m=0,w="";for(d=0;d<v;d++)m=(m+(p=c[S=(S+1)%256]))%256,c[S]=c[m],c[m]=p,l=c[(c[S]+c[m])%256],w+=String.fromCharCode(t.charCodeAt(d)^l);return w}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var $u={print:4,modify:8,copy:16,"annot-forms":32};function Ua(e,t,r,n){this.v=1,this.r=2;var a=192;e.forEach(function(c){if($u.perm!==void 0)throw new Error("Invalid permission: "+c);a+=$u[c]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var s=(t+this.padding).substr(0,32),l=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(s,l),this.P=-(1+(255^a)),this.encryptionKey=Vc(s+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=Yc(this.encryptionKey,this.padding)}function Ha(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var a=e.charCodeAt(n);t+=a<33||a===35||a===37||a===40||a===41||a===47||a===60||a===62||a===91||a===93||a===123||a===125||a>126?"#"+("0"+a.toString(16)).slice(-2):e[n]}return t}function qu(e){if($t(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,a){if(a=a||!1,typeof r!="string"||typeof n!="function"||typeof a!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var s=Math.random().toString(35);return t[r][s]=[n,!!a],s},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),a=[];for(var s in t[r]){var l=t[r][s];try{l[0].apply(e,n)}catch(c){mt.console&&Zt.error("jsPDF PubSub Error",c.message,c)}l[1]&&a.push(s)}a.length&&a.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Xl(e){if(!(this instanceof Xl))return new Xl(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function Tf(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function la(e,t,r,n,a){if(!(this instanceof la))return new la(e,t,r,n,a);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,Tf.call(this,n,a)}function Va(e,t,r,n,a){if(!(this instanceof Va))return new Va(e,t,r,n,a);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,Tf.call(this,n,a)}function nt(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],a=arguments[2],s=arguments[3],l=[],c=1,d=16,f="S",p=null;$t(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,a=e.format||a,s=e.compress||e.compressPdf||s,(p=e.encryption||null)!==null&&(p.userPassword=p.userPassword||"",p.ownerPassword=p.ownerPassword||"",p.userPermissions=p.userPermissions||[]),c=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(d=e.floatPrecision),f=e.defaultPathOperation||"S"),l=e.filters||(s===!0?["FlateEncode"]:l),n=n||"mm",r=(""+(r||"P")).toLowerCase();var v=e.putOnlyUsedFonts||!1,S={},m={internal:{},__private__:{}};m.__private__.PubSub=qu;var w="1.3",_=m.__private__.getPdfVersion=function(){return w};m.__private__.setPdfVersion=function(g){w=g};var j={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};m.__private__.getPageFormats=function(){return j};var M=m.__private__.getPageFormat=function(g){return j[g]};a=a||"a4";var I="compat",P="advanced",D=I;function $(){this.saveGraphicsState(),J(new at(ot,0,0,-ot,0,Cn()*ot).toString()+" cm"),this.setFontSize(this.getFontSize()/ot),f="n",D=P}function H(){this.restoreGraphicsState(),f="S",D=I}var Q=m.__private__.combineFontStyleAndFontWeight=function(g,N){if(g=="bold"&&N=="normal"||g=="bold"&&N==400||g=="normal"&&N=="italic"||g=="bold"&&N=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return N&&(g=N==400||N==="normal"?g==="italic"?"italic":"normal":N!=700&&N!=="bold"||g!=="normal"?(N==700?"bold":N)+""+g:"bold"),g};m.advancedAPI=function(g){var N=D===I;return N&&$.call(this),typeof g!="function"||(g(this),N&&H.call(this)),this},m.compatAPI=function(g){var N=D===P;return N&&H.call(this),typeof g!="function"||(g(this),N&&$.call(this)),this},m.isAdvancedAPI=function(){return D===P};var Z,T=function(g){if(D!==P)throw new Error(g+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},X=m.roundToPrecision=m.__private__.roundToPrecision=function(g,N){var V=t||N;if(isNaN(g)||isNaN(V))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return g.toFixed(V).replace(/0+$/,"")};Z=m.hpf=m.__private__.hpf=typeof d=="number"?function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return X(g,d)}:d==="smart"?function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return X(g,g>-1&&g<1?16:5)}:function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.hpf");return X(g,16)};var C=m.f2=m.__private__.f2=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.f2");return X(g,2)},E=m.__private__.f3=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.f3");return X(g,3)},U=m.scale=m.__private__.scale=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.scale");return D===I?g*ot:D===P?g:void 0},Y=function(g){return U(function(N){return D===I?Cn()-N:D===P?N:void 0}(g))};m.__private__.setPrecision=m.setPrecision=function(g){typeof parseInt(g,10)=="number"&&(t=parseInt(g,10))};var ie,le="00000000000000000000000000000000",fe=m.__private__.getFileId=function(){return le},ne=m.__private__.setFileId=function(g){return le=g!==void 0&&/^[a-fA-F0-9]{32}$/.test(g)?g.toUpperCase():le.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),p!==null&&(Kt=new Ua(p.userPermissions,p.userPassword,p.ownerPassword,le)),le};m.setFileId=function(g){return ne(g),this},m.getFileId=function(){return fe()};var ge=m.__private__.convertDateToPDFDate=function(g){var N=g.getTimezoneOffset(),V=N<0?"+":"-",te=Math.floor(Math.abs(N/60)),de=Math.abs(N%60),Ae=[V,q(te),"'",q(de),"'"].join("");return["D:",g.getFullYear(),q(g.getMonth()+1),q(g.getDate()),q(g.getHours()),q(g.getMinutes()),q(g.getSeconds()),Ae].join("")},we=m.__private__.convertPDFDateToDate=function(g){var N=parseInt(g.substr(2,4),10),V=parseInt(g.substr(6,2),10)-1,te=parseInt(g.substr(8,2),10),de=parseInt(g.substr(10,2),10),Ae=parseInt(g.substr(12,2),10),Me=parseInt(g.substr(14,2),10);return new Date(N,V,te,de,Ae,Me,0)},xe=m.__private__.setCreationDate=function(g){var N;if(g===void 0&&(g=new Date),g instanceof Date)N=ge(g);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(g))throw new Error("Invalid argument passed to jsPDF.setCreationDate");N=g}return ie=N},A=m.__private__.getCreationDate=function(g){var N=ie;return g==="jsDate"&&(N=we(ie)),N};m.setCreationDate=function(g){return xe(g),this},m.getCreationDate=function(g){return A(g)};var z,q=m.__private__.padd2=function(g){return("0"+parseInt(g)).slice(-2)},ee=m.__private__.padd2Hex=function(g){return("00"+(g=g.toString())).substr(g.length)},re=0,ae=[],ue=[],pe=0,ce=[],_e=[],Ie=!1,Pe=ue;m.__private__.setCustomOutputDestination=function(g){Ie=!0,Pe=g};var be=function(g){Ie||(Pe=g)};m.__private__.resetCustomOutputDestination=function(){Ie=!1,Pe=ue};var J=m.__private__.out=function(g){return g=g.toString(),pe+=g.length+1,Pe.push(g),Pe},Ve=m.__private__.write=function(g){return J(arguments.length===1?g.toString():Array.prototype.join.call(arguments," "))},Je=m.__private__.getArrayBuffer=function(g){for(var N=g.length,V=new ArrayBuffer(N),te=new Uint8Array(V);N--;)te[N]=g.charCodeAt(N);return V},Fe=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];m.__private__.getStandardFonts=function(){return Fe};var Te=e.fontSize||16;m.__private__.setFontSize=m.setFontSize=function(g){return Te=D===P?g/ot:g,this};var Be,De=m.__private__.getFontSize=m.getFontSize=function(){return D===I?Te:Te*ot},it=e.R2L||!1;m.__private__.setR2L=m.setR2L=function(g){return it=g,this},m.__private__.getR2L=m.getR2L=function(){return it};var Ye,St=m.__private__.setZoomMode=function(g){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(g))Be=g;else if(isNaN(g)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(g)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+g+'" is not recognized.');Be=g}else Be=parseInt(g,10)};m.__private__.getZoomMode=function(){return Be};var st,lt=m.__private__.setPageMode=function(g){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(g)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+g+'" is not recognized.');Ye=g};m.__private__.getPageMode=function(){return Ye};var Lt=m.__private__.setLayoutMode=function(g){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(g)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+g+'" is not recognized.');st=g};m.__private__.getLayoutMode=function(){return st},m.__private__.setDisplayMode=m.setDisplayMode=function(g,N,V){return St(g),Lt(N),lt(V),this};var ut={title:"",subject:"",author:"",keywords:"",creator:""};m.__private__.getDocumentProperty=function(g){if(Object.keys(ut).indexOf(g)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return ut[g]},m.__private__.getDocumentProperties=function(){return ut},m.__private__.setDocumentProperties=m.setProperties=m.setDocumentProperties=function(g){for(var N in ut)ut.hasOwnProperty(N)&&g[N]&&(ut[N]=g[N]);return this},m.__private__.setDocumentProperty=function(g,N){if(Object.keys(ut).indexOf(g)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return ut[g]=N};var et,ot,tt,yt,At,Ue={},dt={},Pt=[],ye={},ze={},Oe={},vt={},qt=null,Et=0,ct=[],kt=new qu(m),zi=e.hotfixes||[],Sr={},Zn={},Zr=[],at=function g(N,V,te,de,Ae,Me){if(!(this instanceof g))return new g(N,V,te,de,Ae,Me);isNaN(N)&&(N=1),isNaN(V)&&(V=0),isNaN(te)&&(te=0),isNaN(de)&&(de=1),isNaN(Ae)&&(Ae=0),isNaN(Me)&&(Me=0),this._matrix=[N,V,te,de,Ae,Me]};Object.defineProperty(at.prototype,"sx",{get:function(){return this._matrix[0]},set:function(g){this._matrix[0]=g}}),Object.defineProperty(at.prototype,"shy",{get:function(){return this._matrix[1]},set:function(g){this._matrix[1]=g}}),Object.defineProperty(at.prototype,"shx",{get:function(){return this._matrix[2]},set:function(g){this._matrix[2]=g}}),Object.defineProperty(at.prototype,"sy",{get:function(){return this._matrix[3]},set:function(g){this._matrix[3]=g}}),Object.defineProperty(at.prototype,"tx",{get:function(){return this._matrix[4]},set:function(g){this._matrix[4]=g}}),Object.defineProperty(at.prototype,"ty",{get:function(){return this._matrix[5]},set:function(g){this._matrix[5]=g}}),Object.defineProperty(at.prototype,"a",{get:function(){return this._matrix[0]},set:function(g){this._matrix[0]=g}}),Object.defineProperty(at.prototype,"b",{get:function(){return this._matrix[1]},set:function(g){this._matrix[1]=g}}),Object.defineProperty(at.prototype,"c",{get:function(){return this._matrix[2]},set:function(g){this._matrix[2]=g}}),Object.defineProperty(at.prototype,"d",{get:function(){return this._matrix[3]},set:function(g){this._matrix[3]=g}}),Object.defineProperty(at.prototype,"e",{get:function(){return this._matrix[4]},set:function(g){this._matrix[4]=g}}),Object.defineProperty(at.prototype,"f",{get:function(){return this._matrix[5]},set:function(g){this._matrix[5]=g}}),Object.defineProperty(at.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(at.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(at.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(at.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),at.prototype.join=function(g){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(Z).join(g)},at.prototype.multiply=function(g){var N=g.sx*this.sx+g.shy*this.shx,V=g.sx*this.shy+g.shy*this.sy,te=g.shx*this.sx+g.sy*this.shx,de=g.shx*this.shy+g.sy*this.sy,Ae=g.tx*this.sx+g.ty*this.shx+this.tx,Me=g.tx*this.shy+g.ty*this.sy+this.ty;return new at(N,V,te,de,Ae,Me)},at.prototype.decompose=function(){var g=this.sx,N=this.shy,V=this.shx,te=this.sy,de=this.tx,Ae=this.ty,Me=Math.sqrt(g*g+N*N),$e=(g/=Me)*V+(N/=Me)*te;V-=g*$e,te-=N*$e;var We=Math.sqrt(V*V+te*te);return $e/=We,g*(te/=We)<N*(V/=We)&&(g=-g,N=-N,$e=-$e,Me=-Me),{scale:new at(Me,0,0,We,0,0),translate:new at(1,0,0,1,de,Ae),rotate:new at(g,N,-N,g,0,0),skew:new at(1,0,$e,1,0,0)}},at.prototype.toString=function(g){return this.join(" ")},at.prototype.inversed=function(){var g=this.sx,N=this.shy,V=this.shx,te=this.sy,de=this.tx,Ae=this.ty,Me=1/(g*te-N*V),$e=te*Me,We=-N*Me,ft=-V*Me,gt=g*Me;return new at($e,We,ft,gt,-$e*de-ft*Ae,-We*de-gt*Ae)},at.prototype.applyToPoint=function(g){var N=g.x*this.sx+g.y*this.shx+this.tx,V=g.x*this.shy+g.y*this.sy+this.ty;return new Gi(N,V)},at.prototype.applyToRectangle=function(g){var N=this.applyToPoint(g),V=this.applyToPoint(new Gi(g.x+g.w,g.y+g.h));return new Ko(N.x,N.y,V.x-N.x,V.y-N.y)},at.prototype.clone=function(){var g=this.sx,N=this.shy,V=this.shx,te=this.sy,de=this.tx,Ae=this.ty;return new at(g,N,V,te,de,Ae)},m.Matrix=at;var ln=m.matrixMult=function(g,N){return N.multiply(g)},gn=new at(1,0,0,1,0,0);m.unitMatrix=m.identityMatrix=gn;var xn=function(g,N){if(!ze[g]){var V=(N instanceof la?"Sh":"P")+(Object.keys(ye).length+1).toString(10);N.id=V,ze[g]=V,ye[V]=N,kt.publish("addPattern",N)}};m.ShadingPattern=la,m.TilingPattern=Va,m.addShadingPattern=function(g,N){return T("addShadingPattern()"),xn(g,N),this},m.beginTilingPattern=function(g){T("beginTilingPattern()"),Si(g.boundingBox[0],g.boundingBox[1],g.boundingBox[2]-g.boundingBox[0],g.boundingBox[3]-g.boundingBox[1],g.matrix)},m.endTilingPattern=function(g,N){T("endTilingPattern()"),N.stream=_e[z].join(`
`),xn(g,N),kt.publish("endTilingPattern",N),Zr.pop().restore()};var vn,Nt=m.__private__.newObject=function(){var g=Yt();return Ot(g,!0),g},Yt=m.__private__.newObjectDeferred=function(){return re++,ae[re]=function(){return pe},re},Ot=function(g,N){return N=typeof N=="boolean"&&N,ae[g]=pe,N&&J(g+" 0 obj"),g},Jr=m.__private__.newAdditionalObject=function(){var g={objId:Yt(),content:""};return ce.push(g),g},Dn=Yt(),Pr=Yt(),cn=m.__private__.decodeColorString=function(g){var N=g.split(" ");if(N.length!==2||N[1]!=="g"&&N[1]!=="G")N.length!==5||N[4]!=="k"&&N[4]!=="K"||(N=[(1-N[0])*(1-N[3]),(1-N[1])*(1-N[3]),(1-N[2])*(1-N[3]),"r"]);else{var V=parseFloat(N[0]);N=[V,V,V,"r"]}for(var te="#",de=0;de<3;de++)te+=("0"+Math.floor(255*parseFloat(N[de])).toString(16)).slice(-2);return te},Er=m.__private__.encodeColorString=function(g){var N;typeof g=="string"&&(g={ch1:g});var V=g.ch1,te=g.ch2,de=g.ch3,Ae=g.ch4,Me=g.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof V=="string"&&V.charAt(0)!=="#"){var $e=new Nf(V);if($e.ok)V=$e.toHex();else if(!/^\d*\.?\d*$/.test(V))throw new Error('Invalid color "'+V+'" passed to jsPDF.encodeColorString.')}if(typeof V=="string"&&/^#[0-9A-Fa-f]{3}$/.test(V)&&(V="#"+V[1]+V[1]+V[2]+V[2]+V[3]+V[3]),typeof V=="string"&&/^#[0-9A-Fa-f]{6}$/.test(V)){var We=parseInt(V.substr(1),16);V=We>>16&255,te=We>>8&255,de=255&We}if(te===void 0||Ae===void 0&&V===te&&te===de)N=typeof V=="string"?V+" "+Me[0]:g.precision===2?C(V/255)+" "+Me[0]:E(V/255)+" "+Me[0];else if(Ae===void 0||$t(Ae)==="object"){if(Ae&&!isNaN(Ae.a)&&Ae.a===0)return["1.","1.","1.",Me[1]].join(" ");N=typeof V=="string"?[V,te,de,Me[1]].join(" "):g.precision===2?[C(V/255),C(te/255),C(de/255),Me[1]].join(" "):[E(V/255),E(te/255),E(de/255),Me[1]].join(" ")}else N=typeof V=="string"?[V,te,de,Ae,Me[2]].join(" "):g.precision===2?[C(V),C(te),C(de),C(Ae),Me[2]].join(" "):[E(V),E(te),E(de),E(Ae),Me[2]].join(" ");return N},Ar=m.__private__.getFilters=function(){return l},Dr=m.__private__.putStream=function(g){var N=(g=g||{}).data||"",V=g.filters||Ar(),te=g.alreadyAppliedFilters||[],de=g.addLength1||!1,Ae=N.length,Me=g.objectId,$e=function(dr){return dr};if(p!==null&&Me===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");p!==null&&($e=Kt.encryptor(Me,0));var We={};V===!0&&(V=["FlateEncode"]);var ft=g.additionalKeyValues||[],gt=(We=nt.API.processDataByFilters!==void 0?nt.API.processDataByFilters(N,V):{data:N,reverseChain:[]}).reverseChain+(Array.isArray(te)?te.join(" "):te.toString());if(We.data.length!==0&&(ft.push({key:"Length",value:We.data.length}),de===!0&&ft.push({key:"Length1",value:Ae})),gt.length!=0)if(gt.split("/").length-1==1)ft.push({key:"Filter",value:gt});else{ft.push({key:"Filter",value:"["+gt+"]"});for(var Mt=0;Mt<ft.length;Mt+=1)if(ft[Mt].key==="DecodeParms"){for(var Gt=[],ur=0;ur<We.reverseChain.split("/").length-1;ur+=1)Gt.push("null");Gt.push(ft[Mt].value),ft[Mt].value="["+Gt.join(" ")+"]"}}J("<<");for(var Vt=0;Vt<ft.length;Vt++)J("/"+ft[Vt].key+" "+ft[Vt].value);J(">>"),We.data.length!==0&&(J("stream"),J($e(We.data)),J("endstream"))},Bi=m.__private__.putPage=function(g){var N=g.number,V=g.data,te=g.objId,de=g.contentsObjId;Ot(te,!0),J("<</Type /Page"),J("/Parent "+g.rootDictionaryObjId+" 0 R"),J("/Resources "+g.resourceDictionaryObjId+" 0 R"),J("/MediaBox ["+parseFloat(Z(g.mediaBox.bottomLeftX))+" "+parseFloat(Z(g.mediaBox.bottomLeftY))+" "+Z(g.mediaBox.topRightX)+" "+Z(g.mediaBox.topRightY)+"]"),g.cropBox!==null&&J("/CropBox ["+Z(g.cropBox.bottomLeftX)+" "+Z(g.cropBox.bottomLeftY)+" "+Z(g.cropBox.topRightX)+" "+Z(g.cropBox.topRightY)+"]"),g.bleedBox!==null&&J("/BleedBox ["+Z(g.bleedBox.bottomLeftX)+" "+Z(g.bleedBox.bottomLeftY)+" "+Z(g.bleedBox.topRightX)+" "+Z(g.bleedBox.topRightY)+"]"),g.trimBox!==null&&J("/TrimBox ["+Z(g.trimBox.bottomLeftX)+" "+Z(g.trimBox.bottomLeftY)+" "+Z(g.trimBox.topRightX)+" "+Z(g.trimBox.topRightY)+"]"),g.artBox!==null&&J("/ArtBox ["+Z(g.artBox.bottomLeftX)+" "+Z(g.artBox.bottomLeftY)+" "+Z(g.artBox.topRightX)+" "+Z(g.artBox.topRightY)+"]"),typeof g.userUnit=="number"&&g.userUnit!==1&&J("/UserUnit "+g.userUnit),kt.publish("putPage",{objId:te,pageContext:ct[N],pageNumber:N,page:V}),J("/Contents "+de+" 0 R"),J(">>"),J("endobj");var Ae=V.join(`
`);return D===P&&(Ae+=`
Q`),Ot(de,!0),Dr({data:Ae,filters:Ar(),objectId:de}),J("endobj"),te},Kr=m.__private__.putPages=function(){var g,N,V=[];for(g=1;g<=Et;g++)ct[g].objId=Yt(),ct[g].contentsObjId=Yt();for(g=1;g<=Et;g++)V.push(Bi({number:g,data:_e[g],objId:ct[g].objId,contentsObjId:ct[g].contentsObjId,mediaBox:ct[g].mediaBox,cropBox:ct[g].cropBox,bleedBox:ct[g].bleedBox,trimBox:ct[g].trimBox,artBox:ct[g].artBox,userUnit:ct[g].userUnit,rootDictionaryObjId:Dn,resourceDictionaryObjId:Pr}));Ot(Dn,!0),J("<</Type /Pages");var te="/Kids [";for(N=0;N<Et;N++)te+=V[N]+" 0 R ";J(te+"]"),J("/Count "+Et),J(">>"),J("endobj"),kt.publish("postPutPages")},xi=function(g){kt.publish("putFont",{font:g,out:J,newObject:Nt,putStream:Dr}),g.isAlreadyPutted!==!0&&(g.objectNumber=Nt(),J("<<"),J("/Type /Font"),J("/BaseFont /"+Ha(g.postScriptName)),J("/Subtype /Type1"),typeof g.encoding=="string"&&J("/Encoding /"+g.encoding),J("/FirstChar 32"),J("/LastChar 255"),J(">>"),J("endobj"))},vi=function(g){g.objectNumber=Nt();var N=[];N.push({key:"Type",value:"/XObject"}),N.push({key:"Subtype",value:"/Form"}),N.push({key:"BBox",value:"["+[Z(g.x),Z(g.y),Z(g.x+g.width),Z(g.y+g.height)].join(" ")+"]"}),N.push({key:"Matrix",value:"["+g.matrix.toString()+"]"});var V=g.pages[1].join(`
`);Dr({data:V,additionalKeyValues:N,objectId:g.objectNumber}),J("endobj")},Jn=function(g,N){N||(N=21);var V=Nt(),te=function(Me,$e){var We,ft=[],gt=1/($e-1);for(We=0;We<1;We+=gt)ft.push(We);if(ft.push(1),Me[0].offset!=0){var Mt={offset:0,color:Me[0].color};Me.unshift(Mt)}if(Me[Me.length-1].offset!=1){var Gt={offset:1,color:Me[Me.length-1].color};Me.push(Gt)}for(var ur="",Vt=0,dr=0;dr<ft.length;dr++){for(We=ft[dr];We>Me[Vt+1].offset;)Vt++;var hr=Me[Vt].offset,ar=(We-hr)/(Me[Vt+1].offset-hr),rn=Me[Vt].color,Hr=Me[Vt+1].color;ur+=ee(Math.round((1-ar)*rn[0]+ar*Hr[0]).toString(16))+ee(Math.round((1-ar)*rn[1]+ar*Hr[1]).toString(16))+ee(Math.round((1-ar)*rn[2]+ar*Hr[2]).toString(16))}return ur.trim()}(g.colors,N),de=[];de.push({key:"FunctionType",value:"0"}),de.push({key:"Domain",value:"[0.0 1.0]"}),de.push({key:"Size",value:"["+N+"]"}),de.push({key:"BitsPerSample",value:"8"}),de.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),de.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Dr({data:te,additionalKeyValues:de,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:V}),J("endobj"),g.objectNumber=Nt(),J("<< /ShadingType "+g.type),J("/ColorSpace /DeviceRGB");var Ae="/Coords ["+Z(parseFloat(g.coords[0]))+" "+Z(parseFloat(g.coords[1]))+" ";g.type===2?Ae+=Z(parseFloat(g.coords[2]))+" "+Z(parseFloat(g.coords[3])):Ae+=Z(parseFloat(g.coords[2]))+" "+Z(parseFloat(g.coords[3]))+" "+Z(parseFloat(g.coords[4]))+" "+Z(parseFloat(g.coords[5])),J(Ae+="]"),g.matrix&&J("/Matrix ["+g.matrix.toString()+"]"),J("/Function "+V+" 0 R"),J("/Extend [true true]"),J(">>"),J("endobj")},Kn=function(g,N){var V=Yt(),te=Nt();N.push({resourcesOid:V,objectOid:te}),g.objectNumber=te;var de=[];de.push({key:"Type",value:"/Pattern"}),de.push({key:"PatternType",value:"1"}),de.push({key:"PaintType",value:"1"}),de.push({key:"TilingType",value:"1"}),de.push({key:"BBox",value:"["+g.boundingBox.map(Z).join(" ")+"]"}),de.push({key:"XStep",value:Z(g.xStep)}),de.push({key:"YStep",value:Z(g.yStep)}),de.push({key:"Resources",value:V+" 0 R"}),g.matrix&&de.push({key:"Matrix",value:"["+g.matrix.toString()+"]"}),Dr({data:g.stream,additionalKeyValues:de,objectId:g.objectNumber}),J("endobj")},mo=function(g){for(var N in g.objectNumber=Nt(),J("<<"),g)switch(N){case"opacity":J("/ca "+C(g[N]));break;case"stroke-opacity":J("/CA "+C(g[N]))}J(">>"),J("endobj")},bn=function(g){Ot(g.resourcesOid,!0),J("<<"),J("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var N in J("/Font <<"),Ue)Ue.hasOwnProperty(N)&&(v===!1||v===!0&&S.hasOwnProperty(N))&&J("/"+N+" "+Ue[N].objectNumber+" 0 R");J(">>")}(),function(){if(Object.keys(ye).length>0){for(var N in J("/Shading <<"),ye)ye.hasOwnProperty(N)&&ye[N]instanceof la&&ye[N].objectNumber>=0&&J("/"+N+" "+ye[N].objectNumber+" 0 R");kt.publish("putShadingPatternDict"),J(">>")}}(),function(N){if(Object.keys(ye).length>0){for(var V in J("/Pattern <<"),ye)ye.hasOwnProperty(V)&&ye[V]instanceof m.TilingPattern&&ye[V].objectNumber>=0&&ye[V].objectNumber<N&&J("/"+V+" "+ye[V].objectNumber+" 0 R");kt.publish("putTilingPatternDict"),J(">>")}}(g.objectOid),function(){if(Object.keys(Oe).length>0){var N;for(N in J("/ExtGState <<"),Oe)Oe.hasOwnProperty(N)&&Oe[N].objectNumber>=0&&J("/"+N+" "+Oe[N].objectNumber+" 0 R");kt.publish("putGStateDict"),J(">>")}}(),function(){for(var N in J("/XObject <<"),Sr)Sr.hasOwnProperty(N)&&Sr[N].objectNumber>=0&&J("/"+N+" "+Sr[N].objectNumber+" 0 R");kt.publish("putXobjectDict"),J(">>")}(),J(">>"),J("endobj")},go=function(g){dt[g.fontName]=dt[g.fontName]||{},dt[g.fontName][g.fontStyle]=g.id},Ui=function(g,N,V,te,de){var Ae={id:"F"+(Object.keys(Ue).length+1).toString(10),postScriptName:g,fontName:N,fontStyle:V,encoding:te,isStandardFont:de||!1,metadata:{}};return kt.publish("addFont",{font:Ae,instance:this}),Ue[Ae.id]=Ae,go(Ae),Ae.id},Br=m.__private__.pdfEscape=m.pdfEscape=function(g,N){return function(V,te){var de,Ae,Me,$e,We,ft,gt,Mt,Gt;if(Me=(te=te||{}).sourceEncoding||"Unicode",We=te.outputEncoding,(te.autoencode||We)&&Ue[et].metadata&&Ue[et].metadata[Me]&&Ue[et].metadata[Me].encoding&&($e=Ue[et].metadata[Me].encoding,!We&&Ue[et].encoding&&(We=Ue[et].encoding),!We&&$e.codePages&&(We=$e.codePages[0]),typeof We=="string"&&(We=$e[We]),We)){for(gt=!1,ft=[],de=0,Ae=V.length;de<Ae;de++)(Mt=We[V.charCodeAt(de)])?ft.push(String.fromCharCode(Mt)):ft.push(V[de]),ft[de].charCodeAt(0)>>8&&(gt=!0);V=ft.join("")}for(de=V.length;gt===void 0&&de!==0;)V.charCodeAt(de-1)>>8&&(gt=!0),de--;if(!gt)return V;for(ft=te.noBOM?[]:[254,255],de=0,Ae=V.length;de<Ae;de++){if((Gt=(Mt=V.charCodeAt(de))>>8)>>8)throw new Error("Character at position "+de+" of string '"+V+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");ft.push(Gt),ft.push(Mt-(Gt<<8))}return String.fromCharCode.apply(void 0,ft)}(g,N).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},bi=m.__private__.beginPage=function(g){_e[++Et]=[],ct[Et]={objId:0,contentsObjId:0,userUnit:Number(c),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(g[0]),topRightY:Number(g[1])}},Yo(Et),be(_e[z])},ga=function(g,N){var V,te,de;switch(r=N||r,typeof g=="string"&&(V=M(g.toLowerCase()),Array.isArray(V)&&(te=V[0],de=V[1])),Array.isArray(g)&&(te=g[0]*ot,de=g[1]*ot),isNaN(te)&&(te=a[0],de=a[1]),(te>14400||de>14400)&&(Zt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),te=Math.min(14400,te),de=Math.min(14400,de)),a=[te,de],r.substr(0,1)){case"l":de>te&&(a=[de,te]);break;case"p":te>de&&(a=[de,te])}bi(a),Sa(_o),J(On),Co!==0&&J(Co+" J"),Jo!==0&&J(Jo+" j"),kt.publish("addPage",{pageNumber:Et})},xo=function(g){g>0&&g<=Et&&(_e.splice(g,1),ct.splice(g,1),Et--,z>Et&&(z=Et),this.setPage(z))},Yo=function(g){g>0&&g<=Et&&(z=g)},xa=m.__private__.getNumberOfPages=m.getNumberOfPages=function(){return _e.length-1},Qn=function(g,N,V){var te,de=void 0;return V=V||{},g=g!==void 0?g:Ue[et].fontName,N=N!==void 0?N:Ue[et].fontStyle,te=g.toLowerCase(),dt[te]!==void 0&&dt[te][N]!==void 0?de=dt[te][N]:dt[g]!==void 0&&dt[g][N]!==void 0?de=dt[g][N]:V.disableWarning===!1&&Zt.warn("Unable to look up font label for font '"+g+"', '"+N+"'. Refer to getFontList() for available fonts."),de||V.noFallback||(de=dt.times[N])==null&&(de=dt.times.normal),de},vo=m.__private__.putInfo=function(){var g=Nt(),N=function(te){return te};for(var V in p!==null&&(N=Kt.encryptor(g,0)),J("<<"),J("/Producer ("+Br(N("jsPDF "+nt.version))+")"),ut)ut.hasOwnProperty(V)&&ut[V]&&J("/"+V.substr(0,1).toUpperCase()+V.substr(1)+" ("+Br(N(ut[V]))+")");J("/CreationDate ("+Br(N(ie))+")"),J(">>"),J("endobj")},rs=m.__private__.putCatalog=function(g){var N=(g=g||{}).rootDictionaryObjId||Dn;switch(Nt(),J("<<"),J("/Type /Catalog"),J("/Pages "+N+" 0 R"),Be||(Be="fullwidth"),Be){case"fullwidth":J("/OpenAction [3 0 R /FitH null]");break;case"fullheight":J("/OpenAction [3 0 R /FitV null]");break;case"fullpage":J("/OpenAction [3 0 R /Fit]");break;case"original":J("/OpenAction [3 0 R /XYZ null null 1]");break;default:var V=""+Be;V.substr(V.length-1)==="%"&&(Be=parseInt(Be)/100),typeof Be=="number"&&J("/OpenAction [3 0 R /XYZ null null "+C(Be)+"]")}switch(st||(st="continuous"),st){case"continuous":J("/PageLayout /OneColumn");break;case"single":J("/PageLayout /SinglePage");break;case"two":case"twoleft":J("/PageLayout /TwoColumnLeft");break;case"tworight":J("/PageLayout /TwoColumnRight")}Ye&&J("/PageMode /"+Ye),kt.publish("putCatalog"),J(">>"),J("endobj")},or=m.__private__.putTrailer=function(){J("trailer"),J("<<"),J("/Size "+(re+1)),J("/Root "+re+" 0 R"),J("/Info "+(re-1)+" 0 R"),p!==null&&J("/Encrypt "+Kt.oid+" 0 R"),J("/ID [ <"+le+"> <"+le+"> ]"),J(">>")},Go=m.__private__.putHeader=function(){J("%PDF-"+w),J("%ºß¬à")},va=m.__private__.putXRef=function(){var g="0000000000";J("xref"),J("0 "+(re+1)),J("0000000000 65535 f ");for(var N=1;N<=re;N++)typeof ae[N]=="function"?J((g+ae[N]()).slice(-10)+" 00000 n "):ae[N]!==void 0?J((g+ae[N]).slice(-10)+" 00000 n "):J("0000000000 00000 n ")},Qr=m.__private__.buildDocument=function(){var g;re=0,pe=0,ue=[],ae=[],ce=[],Dn=Yt(),Pr=Yt(),be(ue),kt.publish("buildDocument"),Go(),Kr(),function(){kt.publish("putAdditionalObjects");for(var V=0;V<ce.length;V++){var te=ce[V];Ot(te.objId,!0),J(te.content),J("endobj")}kt.publish("postPutAdditionalObjects")}(),g=[],function(){for(var V in Ue)Ue.hasOwnProperty(V)&&(v===!1||v===!0&&S.hasOwnProperty(V))&&xi(Ue[V])}(),function(){var V;for(V in Oe)Oe.hasOwnProperty(V)&&mo(Oe[V])}(),function(){for(var V in Sr)Sr.hasOwnProperty(V)&&vi(Sr[V])}(),function(V){var te;for(te in ye)ye.hasOwnProperty(te)&&(ye[te]instanceof la?Jn(ye[te]):ye[te]instanceof Va&&Kn(ye[te],V))}(g),kt.publish("putResources"),g.forEach(bn),bn({resourcesOid:Pr,objectOid:Number.MAX_SAFE_INTEGER}),kt.publish("postPutResources"),p!==null&&(Kt.oid=Nt(),J("<<"),J("/Filter /Standard"),J("/V "+Kt.v),J("/R "+Kt.r),J("/U <"+Kt.toHexString(Kt.U)+">"),J("/O <"+Kt.toHexString(Kt.O)+">"),J("/P "+Kt.P),J(">>"),J("endobj")),vo(),rs();var N=pe;return va(),or(),J("startxref"),J(""+N),J("%%EOF"),be(_e[z]),ue.join(`
`)},Rn=m.__private__.getBlob=function(g){return new Blob([Je(g)],{type:"application/pdf"})},en=m.output=m.__private__.output=(vn=function(g,N){switch(typeof(N=N||{})=="string"?N={filename:N}:N.filename=N.filename||"generated.pdf",g){case void 0:return Qr();case"save":m.save(N.filename);break;case"arraybuffer":return Je(Qr());case"blob":return Rn(Qr());case"bloburi":case"bloburl":if(mt.URL!==void 0&&typeof mt.URL.createObjectURL=="function")return mt.URL&&mt.URL.createObjectURL(Rn(Qr()))||void 0;Zt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var V="",te=Qr();try{V=Uu(te)}catch{V=Uu(unescape(encodeURIComponent(te)))}return"data:application/pdf;filename="+N.filename+";base64,"+V;case"pdfobjectnewwindow":if(Object.prototype.toString.call(mt)==="[object Window]"){var de="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",Ae=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';N.pdfObjectUrl&&(de=N.pdfObjectUrl,Ae="");var Me='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+de+'"'+Ae+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(N)+");<\/script></body></html>",$e=mt.open();return $e!==null&&$e.document.write(Me),$e}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(mt)==="[object Window]"){var We='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(N.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+N.filename+'" width="500px" height="400px" /></body></html>',ft=mt.open();if(ft!==null){ft.document.write(We);var gt=this;ft.document.documentElement.querySelector("#pdfViewer").onload=function(){ft.document.title=N.filename,ft.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(gt.output("bloburl"))}}return ft}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(mt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var Mt='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",N)+'"></iframe></body></html>',Gt=mt.open();if(Gt!==null&&(Gt.document.write(Mt),Gt.document.title=N.filename),Gt||typeof safari>"u")return Gt;break;case"datauri":case"dataurl":return mt.document.location.href=this.output("datauristring",N);default:return null}},vn.foo=function(){try{return vn.apply(this,arguments)}catch(V){var g=V.stack||"";~g.indexOf(" at ")&&(g=g.split(" at ")[1]);var N="Error in function "+g.split(`
`)[0].split("<")[0]+": "+V.message;if(!mt.console)throw new Error(N);mt.console.error(N,V),mt.alert&&alert(N)}},vn.foo.bar=vn,vn.foo),wi=function(g){return Array.isArray(zi)===!0&&zi.indexOf(g)>-1};switch(n){case"pt":ot=1;break;case"mm":ot=72/25.4;break;case"cm":ot=72/2.54;break;case"in":ot=72;break;case"px":ot=wi("px_scaling")==1?.75:96/72;break;case"pc":case"em":ot=12;break;case"ex":ot=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);ot=n}var Kt=null;xe(),ne();var bo=m.__private__.getPageInfo=m.getPageInfo=function(g){if(isNaN(g)||g%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:ct[g].objId,pageNumber:g,pageContext:ct[g]}},Wo=m.__private__.getPageInfoByObjId=function(g){if(isNaN(g)||g%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var N in ct)if(ct[N].objId===g)break;return bo(N)},ba=m.__private__.getCurrentPageInfo=m.getCurrentPageInfo=function(){return{objId:ct[z].objId,pageNumber:z,pageContext:ct[z]}};m.addPage=function(){return ga.apply(this,arguments),this},m.setPage=function(){return Yo.apply(this,arguments),be.call(this,_e[z]),this},m.insertPage=function(g){return this.addPage(),this.movePage(z,g),this},m.movePage=function(g,N){var V,te;if(g>N){V=_e[g],te=ct[g];for(var de=g;de>N;de--)_e[de]=_e[de-1],ct[de]=ct[de-1];_e[N]=V,ct[N]=te,this.setPage(N)}else if(g<N){V=_e[g],te=ct[g];for(var Ae=g;Ae<N;Ae++)_e[Ae]=_e[Ae+1],ct[Ae]=ct[Ae+1];_e[N]=V,ct[N]=te,this.setPage(N)}return this},m.deletePage=function(){return xo.apply(this,arguments),this},m.__private__.text=m.text=function(g,N,V,te,de){var Ae,Me,$e,We,ft,gt,Mt,Gt,ur,Vt=(te=te||{}).scope||this;if(typeof g=="number"&&typeof N=="number"&&(typeof V=="string"||Array.isArray(V))){var dr=V;V=N,N=g,g=dr}if(arguments[3]instanceof at==0?($e=arguments[4],We=arguments[5],$t(Mt=arguments[3])==="object"&&Mt!==null||(typeof $e=="string"&&(We=$e,$e=null),typeof Mt=="string"&&(We=Mt,Mt=null),typeof Mt=="number"&&($e=Mt,Mt=null),te={flags:Mt,angle:$e,align:We})):(T("The transform parameter of text() with a Matrix value"),ur=de),isNaN(N)||isNaN(V)||g==null)throw new Error("Invalid arguments passed to jsPDF.text");if(g.length===0)return Vt;var hr,ar="",rn=typeof te.lineHeightFactor=="number"?te.lineHeightFactor:yi,Hr=Vt.internal.scaleFactor;function ea(Ft){return Ft=Ft.split("	").join(Array(te.TabLen||9).join(" ")),Br(Ft,Mt)}function Zi(Ft){for(var Wt,xr=Ft.concat(),Mr=[],no=xr.length;no--;)typeof(Wt=xr.shift())=="string"?Mr.push(Wt):Array.isArray(Ft)&&(Wt.length===1||Wt[1]===void 0&&Wt[2]===void 0)?Mr.push(Wt[0]):Mr.push([Wt[0],Wt[1],Wt[2]]);return Mr}function Ji(Ft,Wt){var xr;if(typeof Ft=="string")xr=Wt(Ft)[0];else if(Array.isArray(Ft)){for(var Mr,no,os=Ft.concat(),Ia=[],Hs=os.length;Hs--;)typeof(Mr=os.shift())=="string"?Ia.push(Wt(Mr)[0]):Array.isArray(Mr)&&typeof Mr[0]=="string"&&(no=Wt(Mr[0],Mr[1],Mr[2]),Ia.push([no[0],no[1],no[2]]));xr=Ia}return xr}var Ai=!1,Ki=!0;if(typeof g=="string")Ai=!0;else if(Array.isArray(g)){var Qi=g.concat();Me=[];for(var ki,Tr=Qi.length;Tr--;)(typeof(ki=Qi.shift())!="string"||Array.isArray(ki)&&typeof ki[0]!="string")&&(Ki=!1);Ai=Ki}if(Ai===!1)throw new Error('Type of text must be string or Array. "'+g+'" is not recognized.');typeof g=="string"&&(g=g.match(/[\r?\n]/)?g.split(/\r\n|\r|\n/g):[g]);var eo=Te/Vt.internal.scaleFactor,to=eo*(rn-1);switch(te.baseline){case"bottom":V-=to;break;case"top":V+=eo-to;break;case"hanging":V+=eo-2*to;break;case"middle":V+=eo/2-to}if((gt=te.maxWidth||0)>0&&(typeof g=="string"?g=Vt.splitTextToSize(g,gt):Object.prototype.toString.call(g)==="[object Array]"&&(g=g.reduce(function(Ft,Wt){return Ft.concat(Vt.splitTextToSize(Wt,gt))},[]))),Ae={text:g,x:N,y:V,options:te,mutex:{pdfEscape:Br,activeFontKey:et,fonts:Ue,activeFontSize:Te}},kt.publish("preProcessText",Ae),g=Ae.text,$e=(te=Ae.options).angle,ur instanceof at==0&&$e&&typeof $e=="number"){$e*=Math.PI/180,te.rotationDirection===0&&($e=-$e),D===P&&($e=-$e);var ta=Math.cos($e),ra=Math.sin($e);ur=new at(ta,ra,-ra,ta,0,0)}else $e&&$e instanceof at&&(ur=$e);D!==P||ur||(ur=gn),(ft=te.charSpace||Vi)!==void 0&&(ar+=Z(U(ft))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Gt=te.horizontalScale)!==void 0&&(ar+=Z(100*Gt)+` Tz
`),te.lang;var rr=-1,ii=te.renderingMode!==void 0?te.renderingMode:te.stroke,Ao=Vt.internal.getCurrentPageInfo().pageContext;switch(ii){case 0:case!1:case"fill":rr=0;break;case 1:case!0:case"stroke":rr=1;break;case 2:case"fillThenStroke":rr=2;break;case 3:case"invisible":rr=3;break;case 4:case"fillAndAddForClipping":rr=4;break;case 5:case"strokeAndAddPathForClipping":rr=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":rr=6;break;case 7:case"addToPathForClipping":rr=7}var Na=Ao.usedRenderingMode!==void 0?Ao.usedRenderingMode:-1;rr!==-1?ar+=rr+` Tr
`:Na!==-1&&(ar+=`0 Tr
`),rr!==-1&&(Ao.usedRenderingMode=rr),We=te.align||"left";var dn,Mi=Te*rn,ko=Vt.internal.pageSize.getWidth(),K=Ue[et];ft=te.charSpace||Vi,gt=te.maxWidth||0,Mt=Object.assign({autoencode:!0,noBOM:!0},te.flags);var je=[],He=function(Ft){return Vt.getStringUnitWidth(Ft,{font:K,charSpace:ft,fontSize:Te,doKerning:!1})*Te/Hr};if(Object.prototype.toString.call(g)==="[object Array]"){var ht;Me=Zi(g),We!=="left"&&(dn=Me.map(He));var bt,sr=0;if(We==="right"){N-=dn[0],g=[],Tr=Me.length;for(var kr=0;kr<Tr;kr++)kr===0?(bt=un(N),ht=yn(V)):(bt=U(sr-dn[kr]),ht=-Mi),g.push([Me[kr],bt,ht]),sr=dn[kr]}else if(We==="center"){N-=dn[0]/2,g=[],Tr=Me.length;for(var lr=0;lr<Tr;lr++)lr===0?(bt=un(N),ht=yn(V)):(bt=U((sr-dn[lr])/2),ht=-Mi),g.push([Me[lr],bt,ht]),sr=dn[lr]}else if(We==="left"){g=[],Tr=Me.length;for(var nr=0;nr<Tr;nr++)g.push(Me[nr])}else if(We==="justify"&&K.encoding==="Identity-H"){g=[],Tr=Me.length,gt=gt!==0?gt:ko;for(var hn=0,Qt=0;Qt<Tr;Qt++)if(ht=Qt===0?yn(V):-Mi,bt=Qt===0?un(N):hn,Qt<Tr-1){var na=U((gt-dn[Qt])/(Me[Qt].split(" ").length-1)),Sn=Me[Qt].split(" ");g.push([Sn[0]+" ",bt,ht]),hn=0;for(var Fn=1;Fn<Sn.length;Fn++){var Mo=(He(Sn[Fn-1]+" "+Sn[Fn])-He(Sn[Fn]))*Hr+na;Fn==Sn.length-1?g.push([Sn[Fn],Mo,0]):g.push([Sn[Fn]+" ",Mo,0]),hn-=Mo}}else g.push([Me[Qt],bt,ht]);g.push(["",hn,0])}else{if(We!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(g=[],Tr=Me.length,gt=gt!==0?gt:ko,Qt=0;Qt<Tr;Qt++){ht=Qt===0?yn(V):-Mi,bt=Qt===0?un(N):0;var jo=Me[Qt].split(" ").length-1,No=jo>0?(gt-dn[Qt])/jo:0;Qt<Tr-1?je.push(Z(U(No))):je.push(0),g.push([Me[Qt],bt,ht])}}}(typeof te.R2L=="boolean"?te.R2L:it)===!0&&(g=Ji(g,function(Ft,Wt,xr){return[Ft.split("").reverse().join(""),Wt,xr]})),Ae={text:g,x:N,y:V,options:te,mutex:{pdfEscape:Br,activeFontKey:et,fonts:Ue,activeFontSize:Te}},kt.publish("postProcessText",Ae),g=Ae.text,hr=Ae.mutex.isHex||!1;var Io=Ue[et].encoding;Io!=="WinAnsiEncoding"&&Io!=="StandardEncoding"||(g=Ji(g,function(Ft,Wt,xr){return[ea(Ft),Wt,xr]})),Me=Zi(g),g=[];for(var oi,ji,ai,ro=Array.isArray(Me[0])?1:0,$r="",zn=function(Ft,Wt,xr){var Mr="";return xr instanceof at?(xr=typeof te.angle=="number"?ln(xr,new at(1,0,0,1,Ft,Wt)):ln(new at(1,0,0,1,Ft,Wt),xr),D===P&&(xr=ln(new at(1,0,0,-1,0,0),xr)),Mr=xr.join(" ")+` Tm
`):Mr=Z(Ft)+" "+Z(Wt)+` Td
`,Mr},Bn=0;Bn<Me.length;Bn++){switch($r="",ro){case 1:ai=(hr?"<":"(")+Me[Bn][0]+(hr?">":")"),oi=parseFloat(Me[Bn][1]),ji=parseFloat(Me[Bn][2]);break;case 0:ai=(hr?"<":"(")+Me[Bn]+(hr?">":")"),oi=un(N),ji=yn(V)}je!==void 0&&je[Bn]!==void 0&&($r=je[Bn]+` Tw
`),Bn===0?g.push($r+zn(oi,ji,ur)+ai):ro===0?g.push($r+ai):ro===1&&g.push($r+zn(oi,ji,ur)+ai)}g=ro===0?g.join(` Tj
T* `):g.join(` Tj
`),g+=` Tj
`;var Ni=`BT
/`;return Ni+=et+" "+Te+` Tf
`,Ni+=Z(Te*rn)+` TL
`,Ni+=Ci+`
`,Ni+=ar,Ni+=g,J(Ni+="ET"),S[et]=!0,Vt};var ns=m.__private__.clip=m.clip=function(g){return J(g==="evenodd"?"W*":"W"),this};m.clipEvenOdd=function(){return ns("evenodd")},m.__private__.discardPath=m.discardPath=function(){return J("n"),this};var Ur=m.__private__.isValidStyle=function(g){var N=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(g)!==-1&&(N=!0),N};m.__private__.setDefaultPathOperation=m.setDefaultPathOperation=function(g){return Ur(g)&&(f=g),this};var Xo=m.__private__.getStyle=m.getStyle=function(g){var N=f;switch(g){case"D":case"S":N="S";break;case"F":N="f";break;case"FD":case"DF":N="B";break;case"f":case"f*":case"B":case"B*":N=g}return N},Hi=m.close=function(){return J("h"),this};m.stroke=function(){return J("S"),this},m.fill=function(g){return ei("f",g),this},m.fillEvenOdd=function(g){return ei("f*",g),this},m.fillStroke=function(g){return ei("B",g),this},m.fillStrokeEvenOdd=function(g){return ei("B*",g),this};var ei=function(g,N){$t(N)==="object"?ya(N,g):J(g)},wo=function(g){g===null||D===P&&g===void 0||(g=Xo(g),J(g))};function wa(g,N,V,te,de){var Ae=new Va(N||this.boundingBox,V||this.xStep,te||this.yStep,this.gState,de||this.matrix);Ae.stream=this.stream;var Me=g+"$$"+this.cloneIndex+++"$$";return xn(Me,Ae),Ae}var ya=function(g,N){var V=ze[g.key],te=ye[V];if(te instanceof la)J("q"),J(_a(N)),te.gState&&m.setGState(te.gState),J(g.matrix.toString()+" cm"),J("/"+V+" sh"),J("Q");else if(te instanceof Va){var de=new at(1,0,0,-1,0,Cn());g.matrix&&(de=de.multiply(g.matrix||gn),V=wa.call(te,g.key,g.boundingBox,g.xStep,g.yStep,de).id),J("q"),J("/Pattern cs"),J("/"+V+" scn"),te.gState&&m.setGState(te.gState),J(N),J("Q")}},_a=function(g){switch(g){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},yo=m.moveTo=function(g,N){return J(Z(U(g))+" "+Z(Y(N))+" m"),this},wn=m.lineTo=function(g,N){return J(Z(U(g))+" "+Z(Y(N))+" l"),this},ti=m.curveTo=function(g,N,V,te,de,Ae){return J([Z(U(g)),Z(Y(N)),Z(U(V)),Z(Y(te)),Z(U(de)),Z(Y(Ae)),"c"].join(" ")),this};m.__private__.line=m.line=function(g,N,V,te,de){if(isNaN(g)||isNaN(N)||isNaN(V)||isNaN(te)||!Ur(de))throw new Error("Invalid arguments passed to jsPDF.line");return D===I?this.lines([[V-g,te-N]],g,N,[1,1],de||"S"):this.lines([[V-g,te-N]],g,N,[1,1]).stroke()},m.__private__.lines=m.lines=function(g,N,V,te,de,Ae){var Me,$e,We,ft,gt,Mt,Gt,ur,Vt,dr,hr,ar;if(typeof g=="number"&&(ar=V,V=N,N=g,g=ar),te=te||[1,1],Ae=Ae||!1,isNaN(N)||isNaN(V)||!Array.isArray(g)||!Array.isArray(te)||!Ur(de)||typeof Ae!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(yo(N,V),Me=te[0],$e=te[1],ft=g.length,dr=N,hr=V,We=0;We<ft;We++)(gt=g[We]).length===2?(dr=gt[0]*Me+dr,hr=gt[1]*$e+hr,wn(dr,hr)):(Mt=gt[0]*Me+dr,Gt=gt[1]*$e+hr,ur=gt[2]*Me+dr,Vt=gt[3]*$e+hr,dr=gt[4]*Me+dr,hr=gt[5]*$e+hr,ti(Mt,Gt,ur,Vt,dr,hr));return Ae&&Hi(),wo(de),this},m.path=function(g){for(var N=0;N<g.length;N++){var V=g[N],te=V.c;switch(V.op){case"m":yo(te[0],te[1]);break;case"l":wn(te[0],te[1]);break;case"c":ti.apply(this,te);break;case"h":Hi()}}return this},m.__private__.rect=m.rect=function(g,N,V,te,de){if(isNaN(g)||isNaN(N)||isNaN(V)||isNaN(te)||!Ur(de))throw new Error("Invalid arguments passed to jsPDF.rect");return D===I&&(te=-te),J([Z(U(g)),Z(Y(N)),Z(U(V)),Z(U(te)),"re"].join(" ")),wo(de),this},m.__private__.triangle=m.triangle=function(g,N,V,te,de,Ae,Me){if(isNaN(g)||isNaN(N)||isNaN(V)||isNaN(te)||isNaN(de)||isNaN(Ae)||!Ur(Me))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[V-g,te-N],[de-V,Ae-te],[g-de,N-Ae]],g,N,[1,1],Me,!0),this},m.__private__.roundedRect=m.roundedRect=function(g,N,V,te,de,Ae,Me){if(isNaN(g)||isNaN(N)||isNaN(V)||isNaN(te)||isNaN(de)||isNaN(Ae)||!Ur(Me))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var $e=4/3*(Math.SQRT2-1);return de=Math.min(de,.5*V),Ae=Math.min(Ae,.5*te),this.lines([[V-2*de,0],[de*$e,0,de,Ae-Ae*$e,de,Ae],[0,te-2*Ae],[0,Ae*$e,-de*$e,Ae,-de,Ae],[2*de-V,0],[-de*$e,0,-de,-Ae*$e,-de,-Ae],[0,2*Ae-te],[0,-Ae*$e,de*$e,-Ae,de,-Ae]],g+de,N,[1,1],Me,!0),this},m.__private__.ellipse=m.ellipse=function(g,N,V,te,de){if(isNaN(g)||isNaN(N)||isNaN(V)||isNaN(te)||!Ur(de))throw new Error("Invalid arguments passed to jsPDF.ellipse");var Ae=4/3*(Math.SQRT2-1)*V,Me=4/3*(Math.SQRT2-1)*te;return yo(g+V,N),ti(g+V,N-Me,g+Ae,N-te,g,N-te),ti(g-Ae,N-te,g-V,N-Me,g-V,N),ti(g-V,N+Me,g-Ae,N+te,g,N+te),ti(g+Ae,N+te,g+V,N+Me,g+V,N),wo(de),this},m.__private__.circle=m.circle=function(g,N,V,te){if(isNaN(g)||isNaN(N)||isNaN(V)||!Ur(te))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(g,N,V,V,te)},m.setFont=function(g,N,V){return V&&(N=Q(N,V)),et=Qn(g,N,{disableWarning:!1}),this};var Ca=m.__private__.getFont=m.getFont=function(){return Ue[Qn.apply(m,arguments)]};m.__private__.getFontList=m.getFontList=function(){var g,N,V={};for(g in dt)if(dt.hasOwnProperty(g))for(N in V[g]=[],dt[g])dt[g].hasOwnProperty(N)&&V[g].push(N);return V},m.addFont=function(g,N,V,te,de){var Ae=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&Ae.indexOf(arguments[3])!==-1?de=arguments[3]:arguments[3]&&Ae.indexOf(arguments[3])==-1&&(V=Q(V,te)),Ui.call(this,g,N,V,de=de||"Identity-H")};var yi,_o=e.lineWidth||.200025,pt=m.__private__.getLineWidth=m.getLineWidth=function(){return _o},Sa=m.__private__.setLineWidth=m.setLineWidth=function(g){return _o=g,J(Z(U(g))+" w"),this};m.__private__.setLineDash=nt.API.setLineDash=nt.API.setLineDashPattern=function(g,N){if(g=g||[],N=N||0,isNaN(N)||!Array.isArray(g))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return g=g.map(function(V){return Z(U(V))}).join(" "),N=Z(U(N)),J("["+g+"] "+N+" d"),this};var Aa=m.__private__.getLineHeight=m.getLineHeight=function(){return Te*yi};m.__private__.getLineHeight=m.getLineHeight=function(){return Te*yi};var ka=m.__private__.setLineHeightFactor=m.setLineHeightFactor=function(g){return typeof(g=g||1.15)=="number"&&(yi=g),this},is=m.__private__.getLineHeightFactor=m.getLineHeightFactor=function(){return yi};ka(e.lineHeight);var un=m.__private__.getHorizontalCoordinate=function(g){return U(g)},yn=m.__private__.getVerticalCoordinate=function(g){return D===P?g:ct[z].mediaBox.topRightY-ct[z].mediaBox.bottomLeftY-U(g)},_i=m.__private__.getHorizontalCoordinateString=m.getHorizontalCoordinateString=function(g){return Z(un(g))},Zo=m.__private__.getVerticalCoordinateString=m.getVerticalCoordinateString=function(g){return Z(yn(g))},On=e.strokeColor||"0 G";m.__private__.getStrokeColor=m.getDrawColor=function(){return cn(On)},m.__private__.setStrokeColor=m.setDrawColor=function(g,N,V,te){return On=Er({ch1:g,ch2:N,ch3:V,ch4:te,pdfColorType:"draw",precision:2}),J(On),this};var $i=e.fillColor||"0 g";m.__private__.getFillColor=m.getFillColor=function(){return cn($i)},m.__private__.setFillColor=m.setFillColor=function(g,N,V,te){return $i=Er({ch1:g,ch2:N,ch3:V,ch4:te,pdfColorType:"fill",precision:2}),J($i),this};var Ci=e.textColor||"0 g",qi=m.__private__.getTextColor=m.getTextColor=function(){return cn(Ci)};m.__private__.setTextColor=m.setTextColor=function(g,N,V,te){return Ci=Er({ch1:g,ch2:N,ch3:V,ch4:te,pdfColorType:"text",precision:3}),this};var Vi=e.charSpace,Ma=m.__private__.getCharSpace=m.getCharSpace=function(){return parseFloat(Vi||0)};m.__private__.setCharSpace=m.setCharSpace=function(g){if(isNaN(g))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Vi=g,this};var Co=0;m.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},m.__private__.setLineCap=m.setLineCap=function(g){var N=m.CapJoinStyles[g];if(N===void 0)throw new Error("Line cap style of '"+g+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Co=N,J(N+" J"),this};var Jo=0;m.__private__.setLineJoin=m.setLineJoin=function(g){var N=m.CapJoinStyles[g];if(N===void 0)throw new Error("Line join style of '"+g+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Jo=N,J(N+" j"),this},m.__private__.setLineMiterLimit=m.__private__.setMiterLimit=m.setLineMiterLimit=m.setMiterLimit=function(g){if(g=g||0,isNaN(g))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return J(Z(U(g))+" M"),this},m.GState=Xl,m.setGState=function(g){(g=typeof g=="string"?Oe[vt[g]]:Yi(null,g)).equals(qt)||(J("/"+g.id+" gs"),qt=g)};var Yi=function(g,N){if(!g||!vt[g]){var V=!1;for(var te in Oe)if(Oe.hasOwnProperty(te)&&Oe[te].equals(N)){V=!0;break}if(V)N=Oe[te];else{var de="GS"+(Object.keys(Oe).length+1).toString(10);Oe[de]=N,N.id=de}return g&&(vt[g]=N.id),kt.publish("addGState",N),N}};m.addGState=function(g,N){return Yi(g,N),this},m.saveGraphicsState=function(){return J("q"),Pt.push({key:et,size:Te,color:Ci}),this},m.restoreGraphicsState=function(){J("Q");var g=Pt.pop();return et=g.key,Te=g.size,Ci=g.color,qt=null,this},m.setCurrentTransformationMatrix=function(g){return J(g.toString()+" cm"),this},m.comment=function(g){return J("#"+g),this};var Gi=function(g,N){var V=g||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return V},set:function(Ae){isNaN(Ae)||(V=parseFloat(Ae))}});var te=N||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return te},set:function(Ae){isNaN(Ae)||(te=parseFloat(Ae))}});var de="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return de},set:function(Ae){de=Ae.toString()}}),this},Ko=function(g,N,V,te){Gi.call(this,g,N),this.type="rect";var de=V||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return de},set:function(Me){isNaN(Me)||(de=parseFloat(Me))}});var Ae=te||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return Ae},set:function(Me){isNaN(Me)||(Ae=parseFloat(Me))}}),this},Wi=function(){this.page=Et,this.currentPage=z,this.pages=_e.slice(0),this.pagesContext=ct.slice(0),this.x=tt,this.y=yt,this.matrix=At,this.width=ja(z),this.height=_n(z),this.outputDestination=Pe,this.id="",this.objectNumber=-1};Wi.prototype.restore=function(){Et=this.page,z=this.currentPage,ct=this.pagesContext,_e=this.pages,tt=this.x,yt=this.y,At=this.matrix,ni(z,this.width),tn(z,this.height),Pe=this.outputDestination};var Si=function(g,N,V,te,de){Zr.push(new Wi),Et=z=0,_e=[],tt=g,yt=N,At=de,bi([V,te])};for(var ri in m.beginFormObject=function(g,N,V,te,de){return Si(g,N,V,te,de),this},m.endFormObject=function(g){return function(N){if(Zn[N])Zr.pop().restore();else{var V=new Wi,te="Xo"+(Object.keys(Sr).length+1).toString(10);V.id=te,Zn[N]=te,Sr[te]=V,kt.publish("addFormObject",V),Zr.pop().restore()}}(g),this},m.doFormObject=function(g,N){var V=Sr[Zn[g]];return J("q"),J(N.toString()+" cm"),J("/"+V.id+" Do"),J("Q"),this},m.getFormObject=function(g){var N=Sr[Zn[g]];return{x:N.x,y:N.y,width:N.width,height:N.height,matrix:N.matrix}},m.save=function(g,N){return g=g||"generated.pdf",(N=N||{}).returnPromise=N.returnPromise||!1,N.returnPromise===!1?(sa(Rn(Qr()),g),typeof sa.unload=="function"&&mt.setTimeout&&setTimeout(sa.unload,911),this):new Promise(function(V,te){try{var de=sa(Rn(Qr()),g);typeof sa.unload=="function"&&mt.setTimeout&&setTimeout(sa.unload,911),V(de)}catch(Ae){te(Ae.message)}})},nt.API)nt.API.hasOwnProperty(ri)&&(ri==="events"&&nt.API.events.length?function(g,N){var V,te,de;for(de=N.length-1;de!==-1;de--)V=N[de][0],te=N[de][1],g.subscribe.apply(g,[V].concat(typeof te=="function"?[te]:te))}(kt,nt.API.events):m[ri]=nt.API[ri]);function ja(g){return ct[g].mediaBox.topRightX-ct[g].mediaBox.bottomLeftX}function ni(g,N){ct[g].mediaBox.topRightX=N+ct[g].mediaBox.bottomLeftX}function _n(g){return ct[g].mediaBox.topRightY-ct[g].mediaBox.bottomLeftY}function tn(g,N){ct[g].mediaBox.topRightY=N+ct[g].mediaBox.bottomLeftY}var Xi=m.getPageWidth=function(g){return ja(g=g||z)/ot},So=m.setPageWidth=function(g,N){ni(g,N*ot)},Cn=m.getPageHeight=function(g){return _n(g=g||z)/ot},Qo=m.setPageHeight=function(g,N){tn(g,N*ot)};return m.internal={pdfEscape:Br,getStyle:Xo,getFont:Ca,getFontSize:De,getCharSpace:Ma,getTextColor:qi,getLineHeight:Aa,getLineHeightFactor:is,getLineWidth:pt,write:Ve,getHorizontalCoordinate:un,getVerticalCoordinate:yn,getCoordinateString:_i,getVerticalCoordinateString:Zo,collections:{},newObject:Nt,newAdditionalObject:Jr,newObjectDeferred:Yt,newObjectDeferredBegin:Ot,getFilters:Ar,putStream:Dr,events:kt,scaleFactor:ot,pageSize:{getWidth:function(){return Xi(z)},setWidth:function(g){So(z,g)},getHeight:function(){return Cn(z)},setHeight:function(g){Qo(z,g)}},encryptionOptions:p,encryption:Kt,getEncryptor:function(g){return p!==null?Kt.encryptor(g,0):function(N){return N}},output:en,getNumberOfPages:xa,pages:_e,out:J,f2:C,f3:E,getPageInfo:bo,getPageInfoByObjId:Wo,getCurrentPageInfo:ba,getPDFVersion:_,Point:Gi,Rectangle:Ko,Matrix:at,hasHotfix:wi},Object.defineProperty(m.internal.pageSize,"width",{get:function(){return Xi(z)},set:function(g){So(z,g)},enumerable:!0,configurable:!0}),Object.defineProperty(m.internal.pageSize,"height",{get:function(){return Cn(z)},set:function(g){Qo(z,g)},enumerable:!0,configurable:!0}),(function(g){for(var N=0,V=Fe.length;N<V;N++){var te=Ui.call(this,g[N][0],g[N][1],g[N][2],Fe[N][3],!0);v===!1&&(S[te]=!0);var de=g[N][0].split("-");go({id:te,fontName:de[0],fontStyle:de[1]||""})}kt.publish("addFonts",{fonts:Ue,dictionary:dt})}).call(m,Fe),et="F1",ga(a,r),kt.publish("initialized"),m}Ua.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},Ua.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Ua.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},Ua.prototype.processOwnerPassword=function(e,t){return Yc(Vc(t).substr(0,5),e)},Ua.prototype.encryptor=function(e,t){var r=Vc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return Yc(r,n)}},Xl.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||$t(e)!==$t(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},nt.API={events:[]},nt.version="3.0.3";var gr=nt.API,C0=1,ma=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Da=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},xt=function(e){return e.toFixed(2)},zo=function(e){return e.toFixed(5)};gr.__acroform__={};var mn=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},Vu=function(e){return e*C0},Ti=function(e){var t=new Pf,r=Ge.internal.getHeight(e)||0,n=Ge.internal.getWidth(e)||0;return t.BBox=[0,0,Number(xt(n)),Number(xt(r))],t},qb=gr.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},Vb=gr.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},Yb=gr.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},yr=gr.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return Yb(e,t-1)},_r=gr.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return qb(e,t-1)},Cr=gr.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return Vb(e,t-1)},Gb=gr.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,a=e[0],s=e[1],l=e[2],c=e[3],d={};return d.lowerLeft_X=r(a)||0,d.lowerLeft_Y=n(s+c)||0,d.upperRight_X=r(a+l)||0,d.upperRight_Y=n(s)||0,[Number(xt(d.lowerLeft_X)),Number(xt(d.lowerLeft_Y)),Number(xt(d.upperRight_X)),Number(xt(d.upperRight_Y))]},Wb=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=Gc(e,r),a=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+a+" "+xt(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var s=Ti(e);return s.scope=e.scope,s.stream=t.join(`
`),s}},Gc=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},a=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");a=e.multiline?a.map(function(C){return C.split(`
`)}):a.map(function(C){return[C]});var s=r,l=Ge.internal.getHeight(e)||0;l=l<0?-l:l;var c=Ge.internal.getWidth(e)||0;c=c<0?-c:c;var d=function(C,E,U){if(C+1<a.length){var Y=E+" "+a[C+1][0];return Al(Y,e,U).width<=c-4}return!1};s++;e:for(;s>0;){t="",s--;var f,p,v=Al("3",e,s).height,S=e.multiline?l-s:(l-v)/2,m=S+=2,w=0,_=0,j=0;if(s<=0){t=`(...) Tj
`,t+="% Width of Text: "+Al(t,e,s=12).width+", FieldWidth:"+c+`
`;break}for(var M="",I=0,P=0;P<a.length;P++)if(a.hasOwnProperty(P)){var D=!1;if(a[P].length!==1&&j!==a[P].length-1){if((v+2)*(I+2)+2>l)continue e;M+=a[P][j],D=!0,_=P,P--}else{M=(M+=a[P][j]+" ").substr(M.length-1)==" "?M.substr(0,M.length-1):M;var $=parseInt(P),H=d($,M,s),Q=P>=a.length-1;if(H&&!Q){M+=" ",j=0;continue}if(H||Q){if(Q)_=$;else if(e.multiline&&(v+2)*(I+2)+2>l)continue e}else{if(!e.multiline||(v+2)*(I+2)+2>l)continue e;_=$}}for(var Z="",T=w;T<=_;T++){var X=a[T];if(e.multiline){if(T===_){Z+=X[j]+" ",j=(j+1)%X.length;continue}if(T===w){Z+=X[X.length-1]+" ";continue}}Z+=X[0]+" "}switch(Z=Z.substr(Z.length-1)==" "?Z.substr(0,Z.length-1):Z,p=Al(Z,e,s).width,e.textAlign){case"right":f=c-p-2;break;case"center":f=(c-p)/2;break;default:f=2}t+=xt(f)+" "+xt(m)+` Td
`,t+="("+ma(Z)+`) Tj
`,t+=-xt(f)+` 0 Td
`,m=-(s+2),p=0,w=D?_:_+1,I++,M=""}break}return n.text=t,n.fontSize=s,n},Al=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),a=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:a}},Xb={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},Zb=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},Jb=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(mi.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(Xb)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");C0=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new Ef,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var a in n)if(n.hasOwnProperty(a)){var s=n[a];s.objId=void 0,s.hasAnnotation&&Zb(s,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,a){var s=!n;for(var l in n||(a.internal.newObjectDeferredBegin(a.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),a.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||a.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(l)){var c=n[l],d=[],f=c.Rect;if(c.Rect&&(c.Rect=Gb(c.Rect,a)),a.internal.newObjectDeferredBegin(c.objId,!0),c.DA=Ge.createDefaultAppearanceStream(c),$t(c)==="object"&&typeof c.getKeyValueListForStream=="function"&&(d=c.getKeyValueListForStream()),c.Rect=f,c.hasAppearanceStream&&!c.appearanceStreamContent){var p=Wb(c);d.push({key:"AP",value:"<</N "+p+">>"}),a.internal.acroformPlugin.xForms.push(p)}if(c.appearanceStreamContent){var v="";for(var S in c.appearanceStreamContent)if(c.appearanceStreamContent.hasOwnProperty(S)){var m=c.appearanceStreamContent[S];if(v+="/"+S+" ",v+="<<",Object.keys(m).length>=1||Array.isArray(m)){for(var l in m)if(m.hasOwnProperty(l)){var w=m[l];typeof w=="function"&&(w=w.call(a,c)),v+="/"+l+" "+w+" ",a.internal.acroformPlugin.xForms.indexOf(w)>=0||a.internal.acroformPlugin.xForms.push(w)}}else typeof(w=m)=="function"&&(w=w.call(a,c)),v+="/"+l+" "+w,a.internal.acroformPlugin.xForms.indexOf(w)>=0||a.internal.acroformPlugin.xForms.push(w);v+=">>"}d.push({key:"AP",value:`<<
`+v+">>"})}a.internal.putStream({additionalKeyValues:d,objectId:c.objId}),a.internal.out("endobj")}s&&function(_,j){for(var M in _)if(_.hasOwnProperty(M)){var I=M,P=_[M];j.internal.newObjectDeferredBegin(P.objId,!0),$t(P)==="object"&&typeof P.putStream=="function"&&P.putStream(),delete _[I]}}(a.internal.acroformPlugin.xForms,a)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},Lf=gr.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(l){return l};if(Array.isArray(e)){for(var a="[",s=0;s<e.length;s++)switch(s!==0&&(a+=" "),$t(e[s])){case"boolean":case"number":case"object":a+=e[s].toString();break;case"string":e[s].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),a+="("+ma(n(e[s].toString()))+")"):a+=e[s].toString()}return a+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},rc=function(e,t,r){var n=function(a){return a};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+ma(n(e))+")"},Ei=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Ei.prototype.toString=function(){return this.objId+" 0 R"},Ei.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Ei.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(s){return s!="content"&&s!="appearanceStreamContent"&&s!="scope"&&s!="objId"&&s.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],a=this[n];a&&(Array.isArray(a)?e.push({key:n,value:Lf(a,this.objId,this.scope)}):a instanceof Ei?(a.scope=this.scope,e.push({key:n,value:a.objId+" 0 R"})):typeof a!="function"&&e.push({key:n,value:a}))}return e};var Pf=function(){Ei.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};mn(Pf,Ei);var Ef=function(){Ei.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+ma(r(e))+")"}},set:function(r){e=r}})};mn(Ef,Ei);var mi=function e(){Ei.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(M){if(isNaN(M))throw new Error('Invalid value "'+M+'" for attribute F supplied.');t=M}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!yr(t,3)},set:function(M){M?this.F=_r(t,3):this.F=Cr(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(M){if(isNaN(M))throw new Error('Invalid value "'+M+'" for attribute Ff supplied.');r=M}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(M){n=M!==void 0?M:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(M){n[0]=M}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(M){n[1]=M}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(M){n[2]=M}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(M){n[3]=M}});var a="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return a},set:function(M){switch(M){case"/Btn":case"/Tx":case"/Ch":case"/Sig":a=M;break;default:throw new Error('Invalid value "'+M+'" for attribute FT supplied.')}}});var s=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!s||s.length<1){if(this instanceof Zl)return;s="FieldObject"+e.FieldNum++}var M=function(I){return I};return this.scope&&(M=this.scope.internal.getEncryptor(this.objId)),"("+ma(M(s))+")"},set:function(M){s=M.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return s},set:function(M){s=M}});var l="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return l},set:function(M){l=M}});var c="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return c},set:function(M){c=M}});var d=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return d},set:function(M){d=M}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/C0:f},set:function(M){f=M}});var p="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return p},set:function(M){p=M}});var v="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!v||this instanceof Zl||this instanceof ca))return rc(v,this.objId,this.scope)},set:function(M){M=M.toString(),v=M}});var S=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(S)return this instanceof Lr==0?rc(S,this.objId,this.scope):S},set:function(M){M=M.toString(),S=this instanceof Lr==0?M.substr(0,1)==="("?Da(M.substr(1,M.length-2)):Da(M):M}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof Lr==1?Da(S.substr(1,S.length-1)):S},set:function(M){M=M.toString(),S=this instanceof Lr==1?"/"+M:M}});var m=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(m)return m},set:function(M){this.V=M}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(m)return this instanceof Lr==0?rc(m,this.objId,this.scope):m},set:function(M){M=M.toString(),m=this instanceof Lr==0?M.substr(0,1)==="("?Da(M.substr(1,M.length-2)):Da(M):M}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof Lr==1?Da(m.substr(1,m.length-1)):m},set:function(M){M=M.toString(),m=this instanceof Lr==1?"/"+M:M}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var w,_=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return _},set:function(M){M=!!M,_=M}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(w)return w},set:function(M){w=M}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,1)},set:function(M){M?this.Ff=_r(this.Ff,1):this.Ff=Cr(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,2)},set:function(M){M?this.Ff=_r(this.Ff,2):this.Ff=Cr(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,3)},set:function(M){M?this.Ff=_r(this.Ff,3):this.Ff=Cr(this.Ff,3)}});var j=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(j!==null)return j},set:function(M){if([0,1,2].indexOf(M)===-1)throw new Error('Invalid value "'+M+'" for attribute Q supplied.');j=M}}),Object.defineProperty(this,"textAlign",{get:function(){var M;switch(j){case 0:default:M="left";break;case 1:M="center";break;case 2:M="right"}return M},configurable:!0,enumerable:!0,set:function(M){switch(M){case"right":case 2:j=2;break;case"center":case 1:j=1;break;default:j=0}}})};mn(mi,Ei);var Ya=function(){mi.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return Lf(t,this.objId,this.scope)},set:function(r){var n,a;a=[],typeof(n=r)=="string"&&(a=function(s,l,c){c||(c=1);for(var d,f=[];d=l.exec(s);)f.push(d[c]);return f}(n,/\((.*?)\)/g)),t=a}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,18)},set:function(r){r?this.Ff=_r(this.Ff,18):this.Ff=Cr(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=_r(this.Ff,19):this.Ff=Cr(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,20)},set:function(r){r?(this.Ff=_r(this.Ff,20),t.sort()):this.Ff=Cr(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,22)},set:function(r){r?this.Ff=_r(this.Ff,22):this.Ff=Cr(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,23)},set:function(r){r?this.Ff=_r(this.Ff,23):this.Ff=Cr(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,27)},set:function(r){r?this.Ff=_r(this.Ff,27):this.Ff=Cr(this.Ff,27)}}),this.hasAppearanceStream=!1};mn(Ya,mi);var Ga=function(){Ya.call(this),this.fontName="helvetica",this.combo=!1};mn(Ga,Ya);var Wa=function(){Ga.call(this),this.combo=!0};mn(Wa,Ga);var Bl=function(){Wa.call(this),this.edit=!0};mn(Bl,Wa);var Lr=function(){mi.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,15)},set:function(r){r?this.Ff=_r(this.Ff,15):this.Ff=Cr(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,16)},set:function(r){r?this.Ff=_r(this.Ff,16):this.Ff=Cr(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,17)},set:function(r){r?this.Ff=_r(this.Ff,17):this.Ff=Cr(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,26)},set:function(r){r?this.Ff=_r(this.Ff,26):this.Ff=Cr(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(s){return s};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,a=[];for(n in a.push("<<"),t)a.push("/"+n+" ("+ma(r(t[n]))+")");return a.push(">>"),a.join(`
`)}},set:function(r){$t(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};mn(Lr,mi);var Ul=function(){Lr.call(this),this.pushButton=!0};mn(Ul,Lr);var Xa=function(){Lr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};mn(Xa,Lr);var Zl=function(){var e,t;mi.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(a){e=a}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(a){t=a}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var a=function(c){return c};this.scope&&(a=this.scope.internal.getEncryptor(this.objId));var s,l=[];for(s in l.push("<<"),n)l.push("/"+s+" ("+ma(a(n[s]))+")");return l.push(">>"),l.join(`
`)},set:function(a){$t(a)==="object"&&(n=a)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(a){typeof a=="string"&&(n.CA=a)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(a){r=a}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(a){r="/"+a}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Ge.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};mn(Zl,mi),Xa.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},Xa.prototype.createOption=function(e){var t=new Zl;return t.Parent=this,t.optionName=e,this.Kids.push(t),Kb.call(this.scope,t),t};var Hl=function(){Lr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Ge.CheckBox.createAppearanceStream()};mn(Hl,Lr);var ca=function(){mi.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,13)},set:function(t){t?this.Ff=_r(this.Ff,13):this.Ff=Cr(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,21)},set:function(t){t?this.Ff=_r(this.Ff,21):this.Ff=Cr(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,23)},set:function(t){t?this.Ff=_r(this.Ff,23):this.Ff=Cr(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,24)},set:function(t){t?this.Ff=_r(this.Ff,24):this.Ff=Cr(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,25)},set:function(t){t?this.Ff=_r(this.Ff,25):this.Ff=Cr(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,26)},set:function(t){t?this.Ff=_r(this.Ff,26):this.Ff=Cr(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};mn(ca,mi);var $l=function(){ca.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!yr(this.Ff,14)},set:function(e){e?this.Ff=_r(this.Ff,14):this.Ff=Cr(this.Ff,14)}}),this.password=!0};mn($l,ca);var Ge={CheckBox:{createAppearanceStream:function(){return{N:{On:Ge.CheckBox.YesNormal},D:{On:Ge.CheckBox.YesPushDown,Off:Ge.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=Ti(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,a=e.scope.__private__.encodeColorString(e.color),s=Gc(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+xt(Ge.internal.getWidth(e))+" "+xt(Ge.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+xt(s.fontSize)+" Tf "+a),r.push("BT"),r.push(s.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=Ti(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),a=[],s=Ge.internal.getHeight(e),l=Ge.internal.getWidth(e),c=Gc(e,e.caption);return a.push("1 g"),a.push("0 0 "+xt(l)+" "+xt(s)+" re"),a.push("f"),a.push("q"),a.push("0 0 1 rg"),a.push("0 0 "+xt(l-1)+" "+xt(s-1)+" re"),a.push("W"),a.push("n"),a.push("0 g"),a.push("BT"),a.push("/"+r+" "+xt(c.fontSize)+" Tf "+n),a.push(c.text),a.push("ET"),a.push("Q"),t.stream=a.join(`
`),t},OffPushDown:function(e){var t=Ti(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+xt(Ge.internal.getWidth(e))+" "+xt(Ge.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Ge.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Ge.RadioButton.Circle.YesNormal,t.D[e]=Ge.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=Ti(e);t.scope=e.scope;var r=[],n=Ge.internal.getWidth(e)<=Ge.internal.getHeight(e)?Ge.internal.getWidth(e)/4:Ge.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var a=Ge.internal.Bezier_C,s=Number((n*a).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+zo(Ge.internal.getWidth(e)/2)+" "+zo(Ge.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+s+" "+s+" "+n+" 0 "+n+" c"),r.push("-"+s+" "+n+" -"+n+" "+s+" -"+n+" 0 c"),r.push("-"+n+" -"+s+" -"+s+" -"+n+" 0 -"+n+" c"),r.push(s+" -"+n+" "+n+" -"+s+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Ti(e);t.scope=e.scope;var r=[],n=Ge.internal.getWidth(e)<=Ge.internal.getHeight(e)?Ge.internal.getWidth(e)/4:Ge.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var a=Number((2*n).toFixed(5)),s=Number((a*Ge.internal.Bezier_C).toFixed(5)),l=Number((n*Ge.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+zo(Ge.internal.getWidth(e)/2)+" "+zo(Ge.internal.getHeight(e)/2)+" cm"),r.push(a+" 0 m"),r.push(a+" "+s+" "+s+" "+a+" 0 "+a+" c"),r.push("-"+s+" "+a+" -"+a+" "+s+" -"+a+" 0 c"),r.push("-"+a+" -"+s+" -"+s+" -"+a+" 0 -"+a+" c"),r.push(s+" -"+a+" "+a+" -"+s+" "+a+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+zo(Ge.internal.getWidth(e)/2)+" "+zo(Ge.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+l+" "+l+" "+n+" 0 "+n+" c"),r.push("-"+l+" "+n+" -"+n+" "+l+" -"+n+" 0 c"),r.push("-"+n+" -"+l+" -"+l+" -"+n+" 0 -"+n+" c"),r.push(l+" -"+n+" "+n+" -"+l+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=Ti(e);t.scope=e.scope;var r=[],n=Ge.internal.getWidth(e)<=Ge.internal.getHeight(e)?Ge.internal.getWidth(e)/4:Ge.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var a=Number((2*n).toFixed(5)),s=Number((a*Ge.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+zo(Ge.internal.getWidth(e)/2)+" "+zo(Ge.internal.getHeight(e)/2)+" cm"),r.push(a+" 0 m"),r.push(a+" "+s+" "+s+" "+a+" 0 "+a+" c"),r.push("-"+s+" "+a+" -"+a+" "+s+" -"+a+" 0 c"),r.push("-"+a+" -"+s+" -"+s+" -"+a+" 0 -"+a+" c"),r.push(s+" -"+a+" "+a+" -"+s+" "+a+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Ge.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Ge.RadioButton.Cross.YesNormal,t.D[e]=Ge.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=Ti(e);t.scope=e.scope;var r=[],n=Ge.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+xt(Ge.internal.getWidth(e)-2)+" "+xt(Ge.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(xt(n.x1.x)+" "+xt(n.x1.y)+" m"),r.push(xt(n.x2.x)+" "+xt(n.x2.y)+" l"),r.push(xt(n.x4.x)+" "+xt(n.x4.y)+" m"),r.push(xt(n.x3.x)+" "+xt(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Ti(e);t.scope=e.scope;var r=Ge.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+xt(Ge.internal.getWidth(e))+" "+xt(Ge.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+xt(Ge.internal.getWidth(e)-2)+" "+xt(Ge.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(xt(r.x1.x)+" "+xt(r.x1.y)+" m"),n.push(xt(r.x2.x)+" "+xt(r.x2.y)+" l"),n.push(xt(r.x4.x)+" "+xt(r.x4.y)+" m"),n.push(xt(r.x3.x)+" "+xt(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=Ti(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+xt(Ge.internal.getWidth(e))+" "+xt(Ge.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Ge.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Ge.internal.getWidth(e),r=Ge.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Ge.internal.getWidth=function(e){var t=0;return $t(e)==="object"&&(t=Vu(e.Rect[2])),t},Ge.internal.getHeight=function(e){var t=0;return $t(e)==="object"&&(t=Vu(e.Rect[3])),t};var Kb=gr.addField=function(e){if(Jb(this,e),!(e instanceof mi))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};gr.AcroFormChoiceField=Ya,gr.AcroFormListBox=Ga,gr.AcroFormComboBox=Wa,gr.AcroFormEditBox=Bl,gr.AcroFormButton=Lr,gr.AcroFormPushButton=Ul,gr.AcroFormRadioButton=Xa,gr.AcroFormCheckBox=Hl,gr.AcroFormTextField=ca,gr.AcroFormPasswordField=$l,gr.AcroFormAppearance=Ge,gr.AcroForm={ChoiceField:Ya,ListBox:Ga,ComboBox:Wa,EditBox:Bl,Button:Lr,PushButton:Ul,RadioButton:Xa,CheckBox:Hl,TextField:ca,PasswordField:$l,Appearance:Ge},nt.AcroForm={ChoiceField:Ya,ListBox:Ga,ComboBox:Wa,EditBox:Bl,Button:Lr,PushButton:Ul,RadioButton:Xa,CheckBox:Hl,TextField:ca,PasswordField:$l,Appearance:Ge};nt.AcroForm;function Df(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},a=e.__addimage__.getImageFileTypeByImageData=function(C,E){var U,Y,ie,le,fe,ne=r;if((E=E||r)==="RGBA"||C.data!==void 0&&C.data instanceof Uint8ClampedArray&&"height"in C&&"width"in C)return"RGBA";if(H(C))for(fe in n)for(ie=n[fe],U=0;U<ie.length;U+=1){for(le=!0,Y=0;Y<ie[U].length;Y+=1)if(ie[U][Y]!==void 0&&ie[U][Y]!==C[Y]){le=!1;break}if(le===!0){ne=fe;break}}else for(fe in n)for(ie=n[fe],U=0;U<ie.length;U+=1){for(le=!0,Y=0;Y<ie[U].length;Y+=1)if(ie[U][Y]!==void 0&&ie[U][Y]!==C.charCodeAt(Y)){le=!1;break}if(le===!0){ne=fe;break}}return ne===r&&E!==r&&(ne=E),ne},s=function C(E){for(var U=this.internal.write,Y=this.internal.putStream,ie=(0,this.internal.getFilters)();ie.indexOf("FlateEncode")!==-1;)ie.splice(ie.indexOf("FlateEncode"),1);E.objectId=this.internal.newObject();var le=[];if(le.push({key:"Type",value:"/XObject"}),le.push({key:"Subtype",value:"/Image"}),le.push({key:"Width",value:E.width}),le.push({key:"Height",value:E.height}),E.colorSpace===M.INDEXED?le.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(E.palette.length/3-1)+" "+("sMask"in E&&E.sMask!==void 0?E.objectId+2:E.objectId+1)+" 0 R]"}):(le.push({key:"ColorSpace",value:"/"+E.colorSpace}),E.colorSpace===M.DEVICE_CMYK&&le.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),le.push({key:"BitsPerComponent",value:E.bitsPerComponent}),"decodeParameters"in E&&E.decodeParameters!==void 0&&le.push({key:"DecodeParms",value:"<<"+E.decodeParameters+">>"}),"transparency"in E&&Array.isArray(E.transparency)&&E.transparency.length>0){for(var fe="",ne=0,ge=E.transparency.length;ne<ge;ne++)fe+=E.transparency[ne]+" "+E.transparency[ne]+" ";le.push({key:"Mask",value:"["+fe+"]"})}E.sMask!==void 0&&le.push({key:"SMask",value:E.objectId+1+" 0 R"});var we=E.filter!==void 0?["/"+E.filter]:void 0;if(Y({data:E.data,additionalKeyValues:le,alreadyAppliedFilters:we,objectId:E.objectId}),U("endobj"),"sMask"in E&&E.sMask!==void 0){var xe,A=(xe=E.sMaskBitsPerComponent)!==null&&xe!==void 0?xe:E.bitsPerComponent,z={width:E.width,height:E.height,colorSpace:"DeviceGray",bitsPerComponent:A,data:E.sMask};"filter"in E&&(z.decodeParameters="/Predictor ".concat(E.predictor," /Colors 1 /BitsPerComponent ").concat(A," /Columns ").concat(E.width),z.filter=E.filter),C.call(this,z)}if(E.colorSpace===M.INDEXED){var q=this.internal.newObject();Y({data:Z(new Uint8Array(E.palette)),objectId:q}),U("endobj")}},l=function(){var C=this.internal.collections[t+"images"];for(var E in C)s.call(this,C[E])},c=function(){var C,E=this.internal.collections[t+"images"],U=this.internal.write;for(var Y in E)U("/I"+(C=E[Y]).index,C.objectId,"0","R")},d=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",l),this.internal.events.subscribe("putXobjectDict",c))},f=function(){var C=this.internal.collections[t+"images"];return d.call(this),C},p=function(){return Object.keys(this.internal.collections[t+"images"]).length},v=function(C){return typeof e["process"+C.toUpperCase()]=="function"},S=function(C){return $t(C)==="object"&&C.nodeType===1},m=function(C,E){if(C.nodeName==="IMG"&&C.hasAttribute("src")){var U=""+C.getAttribute("src");if(U.indexOf("data:image/")===0)return zl(unescape(U).split("base64,").pop());var Y=e.loadFile(U,!0);if(Y!==void 0)return Y}if(C.nodeName==="CANVAS"){if(C.width===0||C.height===0)throw new Error("Given canvas must have data. Canvas width: "+C.width+", height: "+C.height);var ie;switch(E){case"PNG":ie="image/png";break;case"WEBP":ie="image/webp";break;default:ie="image/jpeg"}return zl(C.toDataURL(ie,1).split("base64,").pop())}},w=function(C){var E=this.internal.collections[t+"images"];if(E){for(var U in E)if(C===E[U].alias)return E[U]}},_=function(C,E,U){return C||E||(C=-96,E=-96),C<0&&(C=-1*U.width*72/C/this.internal.scaleFactor),E<0&&(E=-1*U.height*72/E/this.internal.scaleFactor),C===0&&(C=E*U.width/U.height),E===0&&(E=C*U.height/U.width),[C,E]},j=function(C,E,U,Y,ie,le){var fe=_.call(this,U,Y,ie),ne=this.internal.getCoordinateString,ge=this.internal.getVerticalCoordinateString,we=f.call(this);if(U=fe[0],Y=fe[1],we[ie.index]=ie,le){le*=Math.PI/180;var xe=Math.cos(le),A=Math.sin(le),z=function(ee){return ee.toFixed(4)},q=[z(xe),z(A),z(-1*A),z(xe),0,0,"cm"]}this.internal.write("q"),le?(this.internal.write([1,"0","0",1,ne(C),ge(E+Y),"cm"].join(" ")),this.internal.write(q.join(" ")),this.internal.write([ne(U),"0","0",ne(Y),"0","0","cm"].join(" "))):this.internal.write([ne(U),"0","0",ne(Y),ne(C),ge(E+Y),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+ie.index+" Do"),this.internal.write("Q")},M=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var I=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},P=e.__addimage__.sHashCode=function(C){var E,U,Y=0;if(typeof C=="string")for(U=C.length,E=0;E<U;E++)Y=(Y<<5)-Y+C.charCodeAt(E),Y|=0;else if(H(C))for(U=C.byteLength/2,E=0;E<U;E++)Y=(Y<<5)-Y+C[E],Y|=0;return Y},D=e.__addimage__.validateStringAsBase64=function(C){(C=C||"").toString().trim();var E=!0;return C.length===0&&(E=!1),C.length%4!=0&&(E=!1),/^[A-Za-z0-9+/]+$/.test(C.substr(0,C.length-2))===!1&&(E=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(C.substr(-2))===!1&&(E=!1),E},$=e.__addimage__.extractImageFromDataUrl=function(C){if(C==null||!(C=C.trim()).startsWith("data:"))return null;var E=C.indexOf(",");return E<0?null:C.substring(0,E).trim().endsWith("base64")?C.substring(E+1):null};e.__addimage__.isArrayBuffer=function(C){return C instanceof ArrayBuffer};var H=e.__addimage__.isArrayBufferView=function(C){return C instanceof Int8Array||C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int16Array||C instanceof Uint16Array||C instanceof Int32Array||C instanceof Uint32Array||C instanceof Float32Array||C instanceof Float64Array},Q=e.__addimage__.binaryStringToUint8Array=function(C){for(var E=C.length,U=new Uint8Array(E),Y=0;Y<E;Y++)U[Y]=C.charCodeAt(Y);return U},Z=e.__addimage__.arrayBufferToBinaryString=function(C){for(var E="",U=H(C)?C:new Uint8Array(C),Y=0;Y<U.length;Y+=8192)E+=String.fromCharCode.apply(null,U.subarray(Y,Y+8192));return E};e.addImage=function(){var C,E,U,Y,ie,le,fe,ne,ge;if(typeof arguments[1]=="number"?(E=r,U=arguments[1],Y=arguments[2],ie=arguments[3],le=arguments[4],fe=arguments[5],ne=arguments[6],ge=arguments[7]):(E=arguments[1],U=arguments[2],Y=arguments[3],ie=arguments[4],le=arguments[5],fe=arguments[6],ne=arguments[7],ge=arguments[8]),$t(C=arguments[0])==="object"&&!S(C)&&"imageData"in C){var we=C;C=we.imageData,E=we.format||E||r,U=we.x||U||0,Y=we.y||Y||0,ie=we.w||we.width||ie,le=we.h||we.height||le,fe=we.alias||fe,ne=we.compression||ne,ge=we.rotation||we.angle||ge}var xe=this.internal.getFilters();if(ne===void 0&&xe.indexOf("FlateEncode")!==-1&&(ne="SLOW"),isNaN(U)||isNaN(Y))throw new Error("Invalid coordinates passed to jsPDF.addImage");d.call(this);var A=T.call(this,C,E,fe,ne);return j.call(this,U,Y,ie,le,A,ge),this};var T=function(C,E,U,Y){var ie,le,fe;if(typeof C=="string"&&a(C)===r){C=unescape(C);var ne=X(C,!1);(ne!==""||(ne=e.loadFile(C,!0))!==void 0)&&(C=ne)}if(S(C)&&(C=m(C,E)),E=a(C,E),!v(E))throw new Error("addImage does not support files of type '"+E+"', please ensure that a plugin for '"+E+"' support is added.");if(((fe=U)==null||fe.length===0)&&(U=function(ge){return typeof ge=="string"||H(ge)?P(ge):H(ge.data)?P(ge.data):null}(C)),(ie=w.call(this,U))||(C instanceof Uint8Array||E==="RGBA"||(le=C,C=Q(C)),ie=this["process"+E.toUpperCase()](C,p.call(this),U,function(ge){return ge&&typeof ge=="string"&&(ge=ge.toUpperCase()),ge in e.image_compression?ge:I.NONE}(Y),le)),!ie)throw new Error("An unknown error occurred whilst processing the image.");return ie},X=e.__addimage__.convertBase64ToBinaryString=function(C,E){E=typeof E!="boolean"||E;var U,Y="";if(typeof C=="string"){var ie;U=(ie=$(C))!==null&&ie!==void 0?ie:C;try{Y=zl(U)}catch(le){if(E)throw D(U)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+le.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return Y};e.getImageProperties=function(C){var E,U,Y="";if(S(C)&&(C=m(C)),typeof C=="string"&&a(C)===r&&((Y=X(C,!1))===""&&(Y=e.loadFile(C)||""),C=Y),U=a(C),!v(U))throw new Error("addImage does not support files of type '"+U+"', please ensure that a plugin for '"+U+"' support is added.");if(C instanceof Uint8Array||(C=Q(C)),!(E=this["process"+U.toUpperCase()](C)))throw new Error("An unknown error occurred whilst processing the image");return E.fileType=U,E}})(nt.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};nt.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,a,s,l=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,d=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,p=!1,v=0;v<f.length&&!p;v++)switch((n=f[v]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(p=!0);break;case"reference":case"text":case"freetext":p=!0}if(p!=0){this.internal.write("/Annots [");for(var S=0;S<f.length;S++){n=f[S];var m=this.internal.pdfEscape,w=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var _=this.internal.newAdditionalObject(),j=this.internal.newAdditionalObject(),M=this.internal.getEncryptor(_.objId),I=n.title||"Note";s="<</Type /Annot /Subtype /Text "+(a="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y)+"] ")+"/Contents ("+m(M(n.contents))+")",s+=" /Popup "+j.objId+" 0 R",s+=" /P "+d.objId+" 0 R",s+=" /T ("+m(M(I))+") >>",_.content=s;var P=_.objId+" 0 R";s="<</Type /Annot /Subtype /Popup "+(a="/Rect ["+l(n.bounds.x+30)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w+30)+" "+c(n.bounds.y)+"] ")+" /Parent "+P,n.open&&(s+=" /Open true"),s+=" >>",j.content=s,this.internal.write(_.objId,"0 R",j.objId,"0 R");break;case"freetext":a="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y+n.bounds.h)+"] ";var D=n.color||"#000000";s="<</Type /Annot /Subtype /FreeText "+a+"/Contents ("+m(w(n.contents))+")",s+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+D+")",s+=" /Border [0 0 0]",s+=" >>",this.internal.write(s);break;case"link":if(n.options.name){var $=this.annotations._nameMap[n.options.name];n.options.pageNumber=$.page,n.options.top=$.y}else n.options.top||(n.options.top=0);if(a="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",s="",n.options.url)s="<</Type /Annot /Subtype /Link "+a+"/Border [0 0 0] /A <</S /URI /URI ("+m(w(n.options.url))+") >>";else if(n.options.pageNumber)switch(s="<</Type /Annot /Subtype /Link "+a+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":s+=" /Fit]";break;case"FitH":s+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,s+=" /FitV "+n.options.left+"]";break;default:var H=c(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),s+=" /XYZ "+n.options.left+" "+H+" "+n.options.zoom+"]"}s!=""&&(s+=" >>",this.internal.write(s))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,a,s,l){var c=this.internal.getCurrentPageInfo(),d=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;c.pageContext.annotations.push({finalBounds:{x:d(r),y:f(n),w:d(r+a),h:f(n+s)},options:l,type:"link"})},e.textWithLink=function(r,n,a,s){var l,c,d=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(s.maxWidth!==void 0){c=s.maxWidth;var p=this.splitTextToSize(r,c).length;l=Math.ceil(f*p)}else c=d,l=f;return this.text(r,n,a,s),a+=.2*f,s.align==="center"&&(n-=d/2),s.align==="right"&&(n-=d),this.link(n,a-f,c,l,s),d},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(nt.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},a=[1570,1571,1573,1575];e.__arabicParser__={};var s=e.__arabicParser__.isInArabicSubstitutionA=function(_){return t[_.charCodeAt(0)]!==void 0},l=e.__arabicParser__.isArabicLetter=function(_){return typeof _=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(_)},c=e.__arabicParser__.isArabicEndLetter=function(_){return l(_)&&s(_)&&t[_.charCodeAt(0)].length<=2},d=e.__arabicParser__.isArabicAlfLetter=function(_){return l(_)&&a.indexOf(_.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(_){return l(_)&&s(_)&&t[_.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(_){return l(_)&&s(_)&&t[_.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(_){return l(_)&&s(_)&&t[_.charCodeAt(0)].length>=3};var p=e.__arabicParser__.arabicLetterHasMedialForm=function(_){return l(_)&&s(_)&&t[_.charCodeAt(0)].length==4},v=e.__arabicParser__.resolveLigatures=function(_){var j=0,M=r,I="",P=0;for(j=0;j<_.length;j+=1)M[_.charCodeAt(j)]!==void 0?(P++,typeof(M=M[_.charCodeAt(j)])=="number"&&(I+=String.fromCharCode(M),M=r,P=0),j===_.length-1&&(M=r,I+=_.charAt(j-(P-1)),j-=P-1,P=0)):(M=r,I+=_.charAt(j-P),j-=P,P=0);return I};e.__arabicParser__.isArabicDiacritic=function(_){return _!==void 0&&n[_.charCodeAt(0)]!==void 0};var S=e.__arabicParser__.getCorrectForm=function(_,j,M){return l(_)?s(_)===!1?-1:!f(_)||!l(j)&&!l(M)||!l(M)&&c(j)||c(_)&&!l(j)||c(_)&&d(j)||c(_)&&c(j)?0:p(_)&&l(j)&&!c(j)&&l(M)&&f(M)?3:c(_)||!l(M)?1:2:-1},m=function(_){var j=0,M=0,I=0,P="",D="",$="",H=(_=_||"").split("\\s+"),Q=[];for(j=0;j<H.length;j+=1){for(Q.push(""),M=0;M<H[j].length;M+=1)P=H[j][M],D=H[j][M-1],$=H[j][M+1],l(P)?(I=S(P,D,$),Q[j]+=I!==-1?String.fromCharCode(t[P.charCodeAt(0)][I]):P):Q[j]+=P;Q[j]=v(Q[j])}return Q.join(" ")},w=e.__arabicParser__.processArabic=e.processArabic=function(){var _,j=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,M=[];if(Array.isArray(j)){var I=0;for(M=[],I=0;I<j.length;I+=1)Array.isArray(j[I])?M.push([m(j[I][0]),j[I][1],j[I][2]]):M.push([m(j[I])]);_=M}else _=m(j);return typeof arguments[0]=="string"?_:(arguments[0].text=_,arguments[0])};e.events.push(["preProcessText",w])}(nt.API),nt.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(c){r=c}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(c){n=isNaN(c)||Number.isInteger(c)===!1||c<0?150:c,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var a=300;Object.defineProperty(this,"height",{get:function(){return a},set:function(c){a=isNaN(c)||Number.isInteger(c)===!1||c<0?300:c,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=a+1)}});var s=[];Object.defineProperty(this,"childNodes",{get:function(){return s},set:function(c){s=c}});var l={};Object.defineProperty(this,"style",{get:function(){return l},set:function(c){l=c}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var a;if((r=r||"2d")!=="2d")return null;for(a in n)this.pdf.context2d.hasOwnProperty(a)&&(this.pdf.context2d[a]=n[a]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(nt.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),a.call(this))},a=function(){this.internal.__cell__.lastCell=new s,this.internal.__cell__.pages=1},s=function(){var d=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return d},set:function(_){d=_}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(_){f=_}});var p=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return p},set:function(_){p=_}});var v=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return v},set:function(_){v=_}});var S=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return S},set:function(_){S=_}});var m=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return m},set:function(_){m=_}});var w=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return w},set:function(_){w=_}}),this};s.prototype.clone=function(){return new s(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},s.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(d){return n.call(this),this.internal.__cell__.headerFunction=typeof d=="function"?d:void 0,this},e.getTextDimensions=function(d,f){n.call(this);var p=(f=f||{}).fontSize||this.getFontSize(),v=f.font||this.getFont(),S=f.scaleFactor||this.internal.scaleFactor,m=0,w=0,_=0,j=this;if(!Array.isArray(d)&&typeof d!="string"){if(typeof d!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");d=String(d)}var M=f.maxWidth;M>0?typeof d=="string"?d=this.splitTextToSize(d,M):Object.prototype.toString.call(d)==="[object Array]"&&(d=d.reduce(function(P,D){return P.concat(j.splitTextToSize(D,M))},[])):d=Array.isArray(d)?d:[d];for(var I=0;I<d.length;I++)m<(_=this.getStringUnitWidth(d[I],{font:v})*p)&&(m=_);return m!==0&&(w=d.length),{w:m/=S,h:Math.max((w*p*this.getLineHeightFactor()-p*(this.getLineHeightFactor()-1))/S,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var d=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new s(d.left,d.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var l=e.cell=function(){var d;d=arguments[0]instanceof s?arguments[0]:new s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,p=this.internal.__cell__.padding,v=this.internal.__cell__.margins||t,S=this.internal.__cell__.tableHeaderRow,m=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===d.lineNumber?(d.x=(f.x||0)+(f.width||0),d.y=f.y||0):f.y+f.height+d.height+v.bottom>this.getPageHeight()?(this.cellAddPage(),d.y=v.top,m&&S&&(this.printHeaderRow(d.lineNumber,!0),d.y+=S[0].height)):d.y=f.y+f.height||d.y),d.text[0]!==void 0&&(this.rect(d.x,d.y,d.width,d.height,r===!0?"FD":void 0),d.align==="right"?this.text(d.text,d.x+d.width-p,d.y+p,{align:"right",baseline:"top"}):d.align==="center"?this.text(d.text,d.x+d.width/2,d.y+p,{align:"center",baseline:"top",maxWidth:d.width-p-p}):this.text(d.text,d.x+p,d.y+p,{align:"left",baseline:"top",maxWidth:d.width-p-p})),this.internal.__cell__.lastCell=d,this};e.table=function(d,f,p,v,S){if(n.call(this),!p)throw new Error("No data for PDF table.");var m,w,_,j,M=[],I=[],P=[],D={},$={},H=[],Q=[],Z=(S=S||{}).autoSize||!1,T=S.printHeaders!==!1,X=S.css&&S.css["font-size"]!==void 0?16*S.css["font-size"]:S.fontSize||12,C=S.margins||Object.assign({width:this.getPageWidth()},t),E=typeof S.padding=="number"?S.padding:3,U=S.headerBackgroundColor||"#c8c8c8",Y=S.headerTextColor||"#000";if(a.call(this),this.internal.__cell__.printHeaders=T,this.internal.__cell__.margins=C,this.internal.__cell__.table_font_size=X,this.internal.__cell__.padding=E,this.internal.__cell__.headerBackgroundColor=U,this.internal.__cell__.headerTextColor=Y,this.setFontSize(X),v==null)I=M=Object.keys(p[0]),P=M.map(function(){return"left"});else if(Array.isArray(v)&&$t(v[0])==="object")for(M=v.map(function(we){return we.name}),I=v.map(function(we){return we.prompt||we.name||""}),P=v.map(function(we){return we.align||"left"}),m=0;m<v.length;m+=1)$[v[m].name]=.7499990551181103*v[m].width;else Array.isArray(v)&&typeof v[0]=="string"&&(I=M=v,P=M.map(function(){return"left"}));if(Z||Array.isArray(v)&&typeof v[0]=="string")for(m=0;m<M.length;m+=1){for(D[j=M[m]]=p.map(function(we){return we[j]}),this.setFont(void 0,"bold"),H.push(this.getTextDimensions(I[m],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),w=D[j],this.setFont(void 0,"normal"),_=0;_<w.length;_+=1)H.push(this.getTextDimensions(w[_],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);$[j]=Math.max.apply(null,H)+E+E,H=[]}if(T){var ie={};for(m=0;m<M.length;m+=1)ie[M[m]]={},ie[M[m]].text=I[m],ie[M[m]].align=P[m];var le=c.call(this,ie,$);Q=M.map(function(we){return new s(d,f,$[we],le,ie[we].text,void 0,ie[we].align)}),this.setTableHeaderRow(Q),this.printHeaderRow(1,!1)}var fe=v.reduce(function(we,xe){return we[xe.name]=xe.align,we},{});for(m=0;m<p.length;m+=1){"rowStart"in S&&S.rowStart instanceof Function&&S.rowStart({row:m,data:p[m]},this);var ne=c.call(this,p[m],$);for(_=0;_<M.length;_+=1){var ge=p[m][M[_]];"cellStart"in S&&S.cellStart instanceof Function&&S.cellStart({row:m,col:_,data:ge},this),l.call(this,new s(d,f,$[M[_]],ne,ge,m+2,fe[M[_]]))}}return this.internal.__cell__.table_x=d,this.internal.__cell__.table_y=f,this};var c=function(d,f){var p=this.internal.__cell__.padding,v=this.internal.__cell__.table_font_size,S=this.internal.scaleFactor;return Object.keys(d).map(function(m){var w=d[m];return this.splitTextToSize(w.hasOwnProperty("text")?w.text:w,f[m]-p-p)},this).map(function(m){return this.getLineHeightFactor()*m.length*v/S+p+p},this).reduce(function(m,w){return Math.max(m,w)},0)};e.setTableHeaderRow=function(d){n.call(this),this.internal.__cell__.tableHeaderRow=d},e.printHeaderRow=function(d,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var p;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var v=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new s(v[0],v[1],v[2],v[3],void 0,-1)}this.setFont(void 0,"bold");for(var S=[],m=0;m<this.internal.__cell__.tableHeaderRow.length;m+=1){p=this.internal.__cell__.tableHeaderRow[m].clone(),f&&(p.y=this.internal.__cell__.margins.top||0,S.push(p)),p.lineNumber=d;var w=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),l.call(this,p),this.setTextColor(w)}S.length>0&&this.setTableHeaderRow(S),this.setFont(void 0,"normal"),r=!1}}(nt.API);var Rf={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},Of=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],Wc=Df(Of),Ff=[100,200,300,400,500,600,700,800,900],Qb=Df(Ff);function nc(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(s){return Rf[s=s||"normal"]?s:"normal"}(e.style),n=function(s){return s?typeof s=="number"?s>=100&&s<=900&&s%100==0?s:400:/^\d00$/.test(s)?parseInt(s):s==="bold"?700:400:400}(e.weight),a=function(s){return typeof Wc[s=s||"normal"]=="number"?s:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:a,src:e.src||[],ref:e.ref||{name:t,style:[a,r,n].join(" ")}}}function Yu(e,t,r,n){var a;for(a=r;a>=0&&a<t.length;a+=n)if(e[t[a]])return e[t[a]];for(a=r;a>=0&&a<t.length;a-=n)if(e[t[a]])return e[t[a]]}var e9={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Gu={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Wu(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function Xu(e){return e.trimLeft()}function t9(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function r9(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var kl,Zu,Ju,Ra,Ml,Ku,Qu,ed,ic=["times"];function td(e,t,r,n,a){var s=4,l=nd;switch(a){case nt.API.image_compression.FAST:s=1,l=rd;break;case nt.API.image_compression.MEDIUM:s=6,l=id;break;case nt.API.image_compression.SLOW:s=9,l=od}e=function(d,f,p,v){for(var S,m=d.length/f,w=new Uint8Array(d.length+m),_=[n9,rd,nd,id,od],j=0;j<m;j+=1){var M=j*f,I=d.subarray(M,M+f);if(v)w.set(v(I,p,S),M+j);else{for(var P=_.length,D=[],$=0;$<P;$+=1)D[$]=_[$](I,p,S);var H=o9(D.concat());w.set(D[H],M+j)}S=I}return w}(e,t,Math.ceil(r*n/8),l);var c=Uc(e,{level:s});return nt.API.__addimage__.arrayBufferToBinaryString(c)}function n9(e){var t=Array.apply([],e);return t.unshift(0),t}function rd(e,t){var r=e.length,n=[];n[0]=1;for(var a=0;a<r;a+=1){var s=e[a-t]||0;n[a+1]=e[a]-s+256&255}return n}function nd(e,t,r){var n=e.length,a=[];a[0]=2;for(var s=0;s<n;s+=1){var l=r&&r[s]||0;a[s+1]=e[s]-l+256&255}return a}function id(e,t,r){var n=e.length,a=[];a[0]=3;for(var s=0;s<n;s+=1){var l=e[s-t]||0,c=r&&r[s]||0;a[s+1]=e[s]+256-(l+c>>>1)&255}return a}function od(e,t,r){var n=e.length,a=[];a[0]=4;for(var s=0;s<n;s+=1){var l=i9(e[s-t]||0,r&&r[s]||0,r&&r[s-t]||0);a[s+1]=e[s]-l+256&255}return a}function i9(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),a=Math.abs(e-r),s=Math.abs(e+t-r-r);return n<=a&&n<=s?e:a<=s?t:r}function o9(e){var t=e.map(function(r){return r.reduce(function(n,a){return n+Math.abs(a)},0)});return t.indexOf(Math.min.apply(null,t))}function oc(e,t,r){var n=t*r,a=Math.floor(n/8),s=16-(n-8*a+r),l=(1<<r)-1;return zf(e,a)>>s&l}function ad(e,t,r,n){var a=r*n,s=Math.floor(a/8),l=16-(a-8*s+n),c=(1<<n)-1,d=(t&c)<<l;(function(f,p,v){if(p+1<f.byteLength)f.setUint16(p,v,!1);else{var S=v>>8&255;f.setUint8(p,S)}})(e,s,zf(e,s)&~(c<<l)&65535|d)}function zf(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function a9(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,a=e[t++],s=a>>7,l=1<<1+(7&a);e[t++],e[t++];var c=null,d=null;s&&(c=t,d=l,t+=3*l);var f=!0,p=[],v=0,S=null,m=0,w=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,w=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((C=e[t++])>=0))throw Error("Invalid block size");if(C===0)break;t+=C}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var _=e[t++];v=e[t++]|e[t++]<<8,S=e[t++],1&_||(S=null),m=_>>2&7,t++;break;case 254:for(;;){if(!((C=e[t++])>=0))throw Error("Invalid block size");if(C===0)break;t+=C}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var j=e[t++]|e[t++]<<8,M=e[t++]|e[t++]<<8,I=e[t++]|e[t++]<<8,P=e[t++]|e[t++]<<8,D=e[t++],$=D>>6&1,H=1<<1+(7&D),Q=c,Z=d,T=!1;D>>7&&(T=!0,Q=t,Z=H,t+=3*H);var X=t;for(t++;;){var C;if(!((C=e[t++])>=0))throw Error("Invalid block size");if(C===0)break;t+=C}p.push({x:j,y:M,width:I,height:P,has_local_palette:T,palette_offset:Q,palette_size:Z,data_offset:X,data_length:t-X,transparent_index:S,interlaced:!!$,delay:v,disposal:m});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return p.length},this.loopCount=function(){return w},this.frameInfo=function(E){if(E<0||E>=p.length)throw new Error("Frame index out of range.");return p[E]},this.decodeAndBlitFrameBGRA=function(E,U){var Y=this.frameInfo(E),ie=Y.width*Y.height,le=new Uint8Array(ie);sd(e,Y.data_offset,le,ie);var fe=Y.palette_offset,ne=Y.transparent_index;ne===null&&(ne=256);var ge=Y.width,we=r-ge,xe=ge,A=4*(Y.y*r+Y.x),z=4*((Y.y+Y.height)*r+Y.x),q=A,ee=4*we;Y.interlaced===!0&&(ee+=4*r*7);for(var re=8,ae=0,ue=le.length;ae<ue;++ae){var pe=le[ae];if(xe===0&&(xe=ge,(q+=ee)>=z&&(ee=4*we+4*r*(re-1),q=A+(ge+we)*(re<<1),re>>=1)),pe===ne)q+=4;else{var ce=e[fe+3*pe],_e=e[fe+3*pe+1],Ie=e[fe+3*pe+2];U[q++]=Ie,U[q++]=_e,U[q++]=ce,U[q++]=255}--xe}},this.decodeAndBlitFrameRGBA=function(E,U){var Y=this.frameInfo(E),ie=Y.width*Y.height,le=new Uint8Array(ie);sd(e,Y.data_offset,le,ie);var fe=Y.palette_offset,ne=Y.transparent_index;ne===null&&(ne=256);var ge=Y.width,we=r-ge,xe=ge,A=4*(Y.y*r+Y.x),z=4*((Y.y+Y.height)*r+Y.x),q=A,ee=4*we;Y.interlaced===!0&&(ee+=4*r*7);for(var re=8,ae=0,ue=le.length;ae<ue;++ae){var pe=le[ae];if(xe===0&&(xe=ge,(q+=ee)>=z&&(ee=4*we+4*r*(re-1),q=A+(ge+we)*(re<<1),re>>=1)),pe===ne)q+=4;else{var ce=e[fe+3*pe],_e=e[fe+3*pe+1],Ie=e[fe+3*pe+2];U[q++]=ce,U[q++]=_e,U[q++]=Ie,U[q++]=255}--xe}}}function sd(e,t,r,n){for(var a=e[t++],s=1<<a,l=s+1,c=l+1,d=a+1,f=(1<<d)-1,p=0,v=0,S=0,m=e[t++],w=new Int32Array(4096),_=null;;){for(;p<16&&m!==0;)v|=e[t++]<<p,p+=8,m===1?m=e[t++]:--m;if(p<d)break;var j=v&f;if(v>>=d,p-=d,j!==s){if(j===l)break;for(var M=j<c?j:_,I=0,P=M;P>s;)P=w[P]>>8,++I;var D=P;if(S+I+(M!==j?1:0)>n)return void Zt.log("Warning, gif stream longer than expected.");r[S++]=D;var $=S+=I;for(M!==j&&(r[S++]=D),P=M;I--;)P=w[P],r[--$]=255&P,P>>=8;_!==null&&c<4096&&(w[c++]=_<<8|D,c>=f+1&&d<12&&(++d,f=f<<1|1)),_=j}else c=l+1,f=(1<<(d=a+1))-1,_=null}return S!==n&&Zt.log("Warning, gif stream shorter than expected."),r}/**
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
*/function ac(e){var t,r,n,a,s,l=Math.floor,c=new Array(64),d=new Array(64),f=new Array(64),p=new Array(64),v=new Array(65535),S=new Array(65535),m=new Array(64),w=new Array(64),_=[],j=0,M=7,I=new Array(64),P=new Array(64),D=new Array(64),$=new Array(256),H=new Array(2048),Q=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],Z=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],T=[0,1,2,3,4,5,6,7,8,9,10,11],X=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],C=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],E=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],U=[0,1,2,3,4,5,6,7,8,9,10,11],Y=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],ie=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function le(A,z){for(var q=0,ee=0,re=new Array,ae=1;ae<=16;ae++){for(var ue=1;ue<=A[ae];ue++)re[z[ee]]=[],re[z[ee]][0]=q,re[z[ee]][1]=ae,ee++,q++;q*=2}return re}function fe(A){for(var z=A[0],q=A[1]-1;q>=0;)z&1<<q&&(j|=1<<M),q--,--M<0&&(j==255?(ne(255),ne(0)):ne(j),M=7,j=0)}function ne(A){_.push(A)}function ge(A){ne(A>>8&255),ne(255&A)}function we(A,z,q,ee,re){for(var ae,ue=re[0],pe=re[240],ce=function(Te,Be){var De,it,Ye,St,st,lt,Lt,ut,et,ot,tt=0;for(et=0;et<8;++et){De=Te[tt],it=Te[tt+1],Ye=Te[tt+2],St=Te[tt+3],st=Te[tt+4],lt=Te[tt+5],Lt=Te[tt+6];var yt=De+(ut=Te[tt+7]),At=De-ut,Ue=it+Lt,dt=it-Lt,Pt=Ye+lt,ye=Ye-lt,ze=St+st,Oe=St-st,vt=yt+ze,qt=yt-ze,Et=Ue+Pt,ct=Ue-Pt;Te[tt]=vt+Et,Te[tt+4]=vt-Et;var kt=.707106781*(ct+qt);Te[tt+2]=qt+kt,Te[tt+6]=qt-kt;var zi=.382683433*((vt=Oe+ye)-(ct=dt+At)),Sr=.5411961*vt+zi,Zn=1.306562965*ct+zi,Zr=.707106781*(Et=ye+dt),at=At+Zr,ln=At-Zr;Te[tt+5]=ln+Sr,Te[tt+3]=ln-Sr,Te[tt+1]=at+Zn,Te[tt+7]=at-Zn,tt+=8}for(tt=0,et=0;et<8;++et){De=Te[tt],it=Te[tt+8],Ye=Te[tt+16],St=Te[tt+24],st=Te[tt+32],lt=Te[tt+40],Lt=Te[tt+48];var gn=De+(ut=Te[tt+56]),xn=De-ut,vn=it+Lt,Nt=it-Lt,Yt=Ye+lt,Ot=Ye-lt,Jr=St+st,Dn=St-st,Pr=gn+Jr,cn=gn-Jr,Er=vn+Yt,Ar=vn-Yt;Te[tt]=Pr+Er,Te[tt+32]=Pr-Er;var Dr=.707106781*(Ar+cn);Te[tt+16]=cn+Dr,Te[tt+48]=cn-Dr;var Bi=.382683433*((Pr=Dn+Ot)-(Ar=Nt+xn)),Kr=.5411961*Pr+Bi,xi=1.306562965*Ar+Bi,vi=.707106781*(Er=Ot+Nt),Jn=xn+vi,Kn=xn-vi;Te[tt+40]=Kn+Kr,Te[tt+24]=Kn-Kr,Te[tt+8]=Jn+xi,Te[tt+56]=Jn-xi,tt++}for(et=0;et<64;++et)ot=Te[et]*Be[et],m[et]=ot>0?ot+.5|0:ot-.5|0;return m}(A,z),_e=0;_e<64;++_e)w[Q[_e]]=ce[_e];var Ie=w[0]-q;q=w[0],Ie==0?fe(ee[0]):(fe(ee[S[ae=32767+Ie]]),fe(v[ae]));for(var Pe=63;Pe>0&&w[Pe]==0;)Pe--;if(Pe==0)return fe(ue),q;for(var be,J=1;J<=Pe;){for(var Ve=J;w[J]==0&&J<=Pe;)++J;var Je=J-Ve;if(Je>=16){be=Je>>4;for(var Fe=1;Fe<=be;++Fe)fe(pe);Je&=15}ae=32767+w[J],fe(re[(Je<<4)+S[ae]]),fe(v[ae]),J++}return Pe!=63&&fe(ue),q}function xe(A){A=Math.min(Math.max(A,1),100),s!=A&&(function(z){for(var q=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],ee=0;ee<64;ee++){var re=l((q[ee]*z+50)/100);re=Math.min(Math.max(re,1),255),c[Q[ee]]=re}for(var ae=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],ue=0;ue<64;ue++){var pe=l((ae[ue]*z+50)/100);pe=Math.min(Math.max(pe,1),255),d[Q[ue]]=pe}for(var ce=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],_e=0,Ie=0;Ie<8;Ie++)for(var Pe=0;Pe<8;Pe++)f[_e]=1/(c[Q[_e]]*ce[Ie]*ce[Pe]*8),p[_e]=1/(d[Q[_e]]*ce[Ie]*ce[Pe]*8),_e++}(A<50?Math.floor(5e3/A):Math.floor(200-2*A)),s=A)}this.encode=function(A,z){z&&xe(z),_=new Array,j=0,M=7,ge(65496),ge(65504),ge(16),ne(74),ne(70),ne(73),ne(70),ne(0),ne(1),ne(1),ne(0),ge(1),ge(1),ne(0),ne(0),function(){ge(65499),ge(132),ne(0);for(var it=0;it<64;it++)ne(c[it]);ne(1);for(var Ye=0;Ye<64;Ye++)ne(d[Ye])}(),function(it,Ye){ge(65472),ge(17),ne(8),ge(Ye),ge(it),ne(3),ne(1),ne(17),ne(0),ne(2),ne(17),ne(1),ne(3),ne(17),ne(1)}(A.width,A.height),function(){ge(65476),ge(418),ne(0);for(var it=0;it<16;it++)ne(Z[it+1]);for(var Ye=0;Ye<=11;Ye++)ne(T[Ye]);ne(16);for(var St=0;St<16;St++)ne(X[St+1]);for(var st=0;st<=161;st++)ne(C[st]);ne(1);for(var lt=0;lt<16;lt++)ne(E[lt+1]);for(var Lt=0;Lt<=11;Lt++)ne(U[Lt]);ne(17);for(var ut=0;ut<16;ut++)ne(Y[ut+1]);for(var et=0;et<=161;et++)ne(ie[et])}(),ge(65498),ge(12),ne(3),ne(1),ne(0),ne(2),ne(17),ne(3),ne(17),ne(0),ne(63),ne(0);var q=0,ee=0,re=0;j=0,M=7,this.encode.displayName="_encode_";for(var ae,ue,pe,ce,_e,Ie,Pe,be,J,Ve=A.data,Je=A.width,Fe=A.height,Te=4*Je,Be=0;Be<Fe;){for(ae=0;ae<Te;){for(_e=Te*Be+ae,Pe=-1,be=0,J=0;J<64;J++)Ie=_e+(be=J>>3)*Te+(Pe=4*(7&J)),Be+be>=Fe&&(Ie-=Te*(Be+1+be-Fe)),ae+Pe>=Te&&(Ie-=ae+Pe-Te+4),ue=Ve[Ie++],pe=Ve[Ie++],ce=Ve[Ie++],I[J]=(H[ue]+H[pe+256|0]+H[ce+512|0]>>16)-128,P[J]=(H[ue+768|0]+H[pe+1024|0]+H[ce+1280|0]>>16)-128,D[J]=(H[ue+1280|0]+H[pe+1536|0]+H[ce+1792|0]>>16)-128;q=we(I,f,q,t,n),ee=we(P,p,ee,r,a),re=we(D,p,re,r,a),ae+=32}Be+=8}if(M>=0){var De=[];De[1]=M+1,De[0]=(1<<M+1)-1,fe(De)}return ge(65497),new Uint8Array(_)},e=e||50,function(){for(var A=String.fromCharCode,z=0;z<256;z++)$[z]=A(z)}(),t=le(Z,T),r=le(E,U),n=le(X,C),a=le(Y,ie),function(){for(var A=1,z=2,q=1;q<=15;q++){for(var ee=A;ee<z;ee++)S[32767+ee]=q,v[32767+ee]=[],v[32767+ee][1]=q,v[32767+ee][0]=ee;for(var re=-(z-1);re<=-A;re++)S[32767+re]=q,v[32767+re]=[],v[32767+re][1]=q,v[32767+re][0]=z-1+re;A<<=1,z<<=1}}(),function(){for(var A=0;A<256;A++)H[A]=19595*A,H[A+256|0]=38470*A,H[A+512|0]=7471*A+32768,H[A+768|0]=-11059*A,H[A+1024|0]=-21709*A,H[A+1280|0]=32768*A+8421375,H[A+1536|0]=-27439*A,H[A+1792|0]=-5329*A}(),xe(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function ui(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function ld(e){function t(T){if(!T)throw Error("assert :P")}function r(T,X,C){for(var E=0;4>E;E++)if(T[X+E]!=C.charCodeAt(E))return!0;return!1}function n(T,X,C,E,U){for(var Y=0;Y<U;Y++)T[X+Y]=C[E+Y]}function a(T,X,C,E){for(var U=0;U<E;U++)T[X+U]=C}function s(T){return new Int32Array(T)}function l(T,X){for(var C=[],E=0;E<T;E++)C.push(new X);return C}function c(T,X){var C=[];return function E(U,Y,ie){for(var le=ie[Y],fe=0;fe<le&&(U.push(ie.length>Y+1?[]:new X),!(ie.length<Y+1));fe++)E(U[fe],Y+1,ie)}(C,0,T),C}var d=function(){var T=this;function X(u,h){for(var x=1<<h-1>>>0;u&x;)x>>>=1;return x?(u&x-1)+x:u}function C(u,h,x,y,L){t(!(y%x));do u[h+(y-=x)]=L;while(0<y)}function E(u,h,x,y,L){if(t(2328>=L),512>=L)var R=s(512);else if((R=s(L))==null)return 0;return function(O,F,B,G,oe,ve){var W,se,he=F,Ce=1<<B,me=s(16),Se=s(16);for(t(oe!=0),t(G!=null),t(O!=null),t(0<B),se=0;se<oe;++se){if(15<G[se])return 0;++me[G[se]]}if(me[0]==oe)return 0;for(Se[1]=0,W=1;15>W;++W){if(me[W]>1<<W)return 0;Se[W+1]=Se[W]+me[W]}for(se=0;se<oe;++se)W=G[se],0<G[se]&&(ve[Se[W]++]=se);if(Se[15]==1)return(G=new U).g=0,G.value=ve[0],C(O,he,1,Ce,G),Ce;var ke,Le=-1,Ne=Ce-1,rt=0,qe=1,_t=1,Ke=1<<B;for(se=0,W=1,oe=2;W<=B;++W,oe<<=1){if(qe+=_t<<=1,0>(_t-=me[W]))return 0;for(;0<me[W];--me[W])(G=new U).g=W,G.value=ve[se++],C(O,he+rt,oe,Ke,G),rt=X(rt,W)}for(W=B+1,oe=2;15>=W;++W,oe<<=1){if(qe+=_t<<=1,0>(_t-=me[W]))return 0;for(;0<me[W];--me[W]){if(G=new U,(rt&Ne)!=Le){for(he+=Ke,ke=1<<(Le=W)-B;15>Le&&!(0>=(ke-=me[Le]));)++Le,ke<<=1;Ce+=Ke=1<<(ke=Le-B),O[F+(Le=rt&Ne)].g=ke+B,O[F+Le].value=he-F-Le}G.g=W-B,G.value=ve[se++],C(O,he+(rt>>B),oe,Ke,G),rt=X(rt,W)}}return qe!=2*Se[15]-1?0:Ce}(u,h,x,y,L,R)}function U(){this.value=this.g=0}function Y(){this.value=this.g=0}function ie(){this.G=l(5,U),this.H=s(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=l(He,Y)}function le(u,h,x,y){t(u!=null),t(h!=null),t(2147483648>y),u.Ca=254,u.I=0,u.b=-8,u.Ka=0,u.oa=h,u.pa=x,u.Jd=h,u.Yc=x+y,u.Zc=4<=y?x+y-4+1:x,ue(u)}function fe(u,h){for(var x=0;0<h--;)x|=ce(u,128)<<h;return x}function ne(u,h){var x=fe(u,h);return pe(u)?-x:x}function ge(u,h,x,y){var L,R=0;for(t(u!=null),t(h!=null),t(4294967288>y),u.Sb=y,u.Ra=0,u.u=0,u.h=0,4<y&&(y=4),L=0;L<y;++L)R+=h[x+L]<<8*L;u.Ra=R,u.bb=y,u.oa=h,u.pa=x}function we(u){for(;8<=u.u&&u.bb<u.Sb;)u.Ra>>>=8,u.Ra+=u.oa[u.pa+u.bb]<<sr-8>>>0,++u.bb,u.u-=8;ee(u)&&(u.h=1,u.u=0)}function xe(u,h){if(t(0<=h),!u.h&&h<=bt){var x=q(u)&ht[h];return u.u+=h,we(u),x}return u.h=1,u.u=0}function A(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function z(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function q(u){return u.Ra>>>(u.u&sr-1)>>>0}function ee(u){return t(u.bb<=u.Sb),u.h||u.bb==u.Sb&&u.u>sr}function re(u,h){u.u=h,u.h=ee(u)}function ae(u){u.u>=kr&&(t(u.u>=kr),we(u))}function ue(u){t(u!=null&&u.oa!=null),u.pa<u.Zc?(u.I=(u.oa[u.pa++]|u.I<<8)>>>0,u.b+=8):(t(u!=null&&u.oa!=null),u.pa<u.Yc?(u.b+=8,u.I=u.oa[u.pa++]|u.I<<8):u.Ka?u.b=0:(u.I<<=8,u.b+=8,u.Ka=1))}function pe(u){return fe(u,1)}function ce(u,h){var x=u.Ca;0>u.b&&ue(u);var y=u.b,L=x*h>>>8,R=(u.I>>>y>L)+0;for(R?(x-=L,u.I-=L+1<<y>>>0):x=L+1,y=x,L=0;256<=y;)L+=8,y>>=8;return y=7^L+lr[y],u.b-=y,u.Ca=(x<<y)-1,R}function _e(u,h,x){u[h+0]=x>>24&255,u[h+1]=x>>16&255,u[h+2]=x>>8&255,u[h+3]=255&x}function Ie(u,h){return u[h+0]|u[h+1]<<8}function Pe(u,h){return Ie(u,h)|u[h+2]<<16}function be(u,h){return Ie(u,h)|Ie(u,h+2)<<16}function J(u,h){var x=1<<h;return t(u!=null),t(0<h),u.X=s(x),u.X==null?0:(u.Mb=32-h,u.Xa=h,1)}function Ve(u,h){t(u!=null),t(h!=null),t(u.Xa==h.Xa),n(h.X,0,u.X,0,1<<h.Xa)}function Je(){this.X=[],this.Xa=this.Mb=0}function Fe(u,h,x,y){t(x!=null),t(y!=null);var L=x[0],R=y[0];return L==0&&(L=(u*R+h/2)/h),R==0&&(R=(h*L+u/2)/u),0>=L||0>=R?0:(x[0]=L,y[0]=R,1)}function Te(u,h){return u+(1<<h)-1>>>h}function Be(u,h){return((4278255360&u)+(4278255360&h)>>>0&4278255360)+((16711935&u)+(16711935&h)>>>0&16711935)>>>0}function De(u,h){T[h]=function(x,y,L,R,O,F,B){var G;for(G=0;G<O;++G){var oe=T[u](F[B+G-1],L,R+G);F[B+G]=Be(x[y+G],oe)}}}function it(){this.ud=this.hd=this.jd=0}function Ye(u,h){return((4278124286&(u^h))>>>1)+(u&h)>>>0}function St(u){return 0<=u&&256>u?u:0>u?0:255<u?255:void 0}function st(u,h){return St(u+(u-h+.5>>1))}function lt(u,h,x){return Math.abs(h-x)-Math.abs(u-x)}function Lt(u,h,x,y,L,R,O){for(y=R[O-1],x=0;x<L;++x)R[O+x]=y=Be(u[h+x],y)}function ut(u,h,x,y,L){var R;for(R=0;R<x;++R){var O=u[h+R],F=O>>8&255,B=16711935&(B=(B=16711935&O)+((F<<16)+F));y[L+R]=(4278255360&O)+B>>>0}}function et(u,h){h.jd=255&u,h.hd=u>>8&255,h.ud=u>>16&255}function ot(u,h,x,y,L,R){var O;for(O=0;O<y;++O){var F=h[x+O],B=F>>>8,G=F,oe=255&(oe=(oe=F>>>16)+((u.jd<<24>>24)*(B<<24>>24)>>>5));G=255&(G=(G+=(u.hd<<24>>24)*(B<<24>>24)>>>5)+((u.ud<<24>>24)*(oe<<24>>24)>>>5)),L[R+O]=(4278255360&F)+(oe<<16)+G}}function tt(u,h,x,y,L){T[h]=function(R,O,F,B,G,oe,ve,W,se){for(B=ve;B<W;++B)for(ve=0;ve<se;++ve)G[oe++]=L(F[y(R[O++])])},T[u]=function(R,O,F,B,G,oe,ve){var W=8>>R.b,se=R.Ea,he=R.K[0],Ce=R.w;if(8>W)for(R=(1<<R.b)-1,Ce=(1<<W)-1;O<F;++O){var me,Se=0;for(me=0;me<se;++me)me&R||(Se=y(B[G++])),oe[ve++]=L(he[Se&Ce]),Se>>=W}else T["VP8LMapColor"+x](B,G,he,Ce,oe,ve,O,F,se)}}function yt(u,h,x,y,L){for(x=h+x;h<x;){var R=u[h++];y[L++]=R>>16&255,y[L++]=R>>8&255,y[L++]=255&R}}function At(u,h,x,y,L){for(x=h+x;h<x;){var R=u[h++];y[L++]=R>>16&255,y[L++]=R>>8&255,y[L++]=255&R,y[L++]=R>>24&255}}function Ue(u,h,x,y,L){for(x=h+x;h<x;){var R=(O=u[h++])>>16&240|O>>12&15,O=240&O|O>>28&15;y[L++]=R,y[L++]=O}}function dt(u,h,x,y,L){for(x=h+x;h<x;){var R=(O=u[h++])>>16&248|O>>13&7,O=O>>5&224|O>>3&31;y[L++]=R,y[L++]=O}}function Pt(u,h,x,y,L){for(x=h+x;h<x;){var R=u[h++];y[L++]=255&R,y[L++]=R>>8&255,y[L++]=R>>16&255}}function ye(u,h,x,y,L,R){if(R==0)for(x=h+x;h<x;)_e(y,((R=u[h++])[0]>>24|R[1]>>8&65280|R[2]<<8&16711680|R[3]<<24)>>>0),L+=32;else n(y,L,u,h,x)}function ze(u,h){T[h][0]=T[u+"0"],T[h][1]=T[u+"1"],T[h][2]=T[u+"2"],T[h][3]=T[u+"3"],T[h][4]=T[u+"4"],T[h][5]=T[u+"5"],T[h][6]=T[u+"6"],T[h][7]=T[u+"7"],T[h][8]=T[u+"8"],T[h][9]=T[u+"9"],T[h][10]=T[u+"10"],T[h][11]=T[u+"11"],T[h][12]=T[u+"12"],T[h][13]=T[u+"13"],T[h][14]=T[u+"0"],T[h][15]=T[u+"0"]}function Oe(u){return u==m1||u==g1||u==Ws||u==x1}function vt(){this.eb=[],this.size=this.A=this.fb=0}function qt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Et(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new vt,this.f.kb=new qt,this.sd=null}function ct(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function kt(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function zi(u){return alert("todo:WebPSamplerProcessPlane"),u.T}function Sr(u,h){var x=u.T,y=h.ba.f.RGBA,L=y.eb,R=y.fb+u.ka*y.A,O=Hn[h.ba.S],F=u.y,B=u.O,G=u.f,oe=u.N,ve=u.ea,W=u.W,se=h.cc,he=h.dc,Ce=h.Mc,me=h.Nc,Se=u.ka,ke=u.ka+u.T,Le=u.U,Ne=Le+1>>1;for(Se==0?O(F,B,null,null,G,oe,ve,W,G,oe,ve,W,L,R,null,null,Le):(O(h.ec,h.fc,F,B,se,he,Ce,me,G,oe,ve,W,L,R-y.A,L,R,Le),++x);Se+2<ke;Se+=2)se=G,he=oe,Ce=ve,me=W,oe+=u.Rc,W+=u.Rc,R+=2*y.A,O(F,(B+=2*u.fa)-u.fa,F,B,se,he,Ce,me,G,oe,ve,W,L,R-y.A,L,R,Le);return B+=u.fa,u.j+ke<u.o?(n(h.ec,h.fc,F,B,Le),n(h.cc,h.dc,G,oe,Ne),n(h.Mc,h.Nc,ve,W,Ne),x--):1&ke||O(F,B,null,null,G,oe,ve,W,G,oe,ve,W,L,R+y.A,null,null,Le),x}function Zn(u,h,x){var y=u.F,L=[u.J];if(y!=null){var R=u.U,O=h.ba.S,F=O==Gs||O==Ws;h=h.ba.f.RGBA;var B=[0],G=u.ka;B[0]=u.T,u.Kb&&(G==0?--B[0]:(--G,L[0]-=u.width),u.j+u.ka+u.T==u.o&&(B[0]=u.o-u.j-G));var oe=h.eb;G=h.fb+G*h.A,u=R0(y,L[0],u.width,R,B,oe,G+(F?0:3),h.A),t(x==B),u&&Oe(O)&&as(oe,G,F,R,B,h.A)}return 0}function Zr(u){var h=u.ma,x=h.ba.S,y=11>x,L=x==Vs||x==Ys||x==Gs||x==p1||x==12||Oe(x);if(h.memory=null,h.Ib=null,h.Jb=null,h.Nd=null,!ko(h.Oa,u,L?11:12))return 0;if(L&&Oe(x)&&ea(),u.da)alert("todo:use_scaling");else{if(y){if(h.Ib=zi,u.Kb){if(x=u.U+1>>1,h.memory=s(u.U+2*x),h.memory==null)return 0;h.ec=h.memory,h.fc=0,h.cc=h.ec,h.dc=h.fc+u.U,h.Mc=h.cc,h.Nc=h.dc+x,h.Ib=Sr,ea()}}else alert("todo:EmitYUV");L&&(h.Jb=Zn,y&&rn())}if(y&&!K0){for(u=0;256>u;++u)h5[u]=89858*(u-128)+Zs>>Xs,m5[u]=-22014*(u-128)+Zs,p5[u]=-45773*(u-128),f5[u]=113618*(u-128)+Zs>>Xs;for(u=ls;u<w1;++u)h=76283*(u-16)+Zs>>Xs,g5[u-ls]=rr(h,255),x5[u-ls]=rr(h+8>>4,15);K0=1}return 1}function at(u){var h=u.ma,x=u.U,y=u.T;return t(!(1&u.ka)),0>=x||0>=y?0:(x=h.Ib(u,h),h.Jb!=null&&h.Jb(u,h,x),h.Dc+=x,1)}function ln(u){u.ma.memory=null}function gn(u,h,x,y){return xe(u,8)!=47?0:(h[0]=xe(u,14)+1,x[0]=xe(u,14)+1,y[0]=xe(u,1),xe(u,3)!=0?0:!u.h)}function xn(u,h){if(4>u)return u+1;var x=u-2>>1;return(2+(1&u)<<x)+xe(h,x)+1}function vn(u,h){return 120<h?h-120:1<=(x=((x=Kf[h-1])>>4)*u+(8-(15&x)))?x:1;var x}function Nt(u,h,x){var y=q(x),L=u[h+=255&y].g-8;return 0<L&&(re(x,x.u+8),y=q(x),h+=u[h].value,h+=y&(1<<L)-1),re(x,x.u+u[h].g),u[h].value}function Yt(u,h,x){return x.g+=u.g,x.value+=u.value<<h>>>0,t(8>=x.g),u.g}function Ot(u,h,x){var y=u.xc;return t((h=y==0?0:u.vc[u.md*(x>>y)+(h>>y)])<u.Wb),u.Ya[h]}function Jr(u,h,x,y){var L=u.ab,R=u.c*h,O=u.C;h=O+h;var F=x,B=y;for(y=u.Ta,x=u.Ua;0<L--;){var G=u.gc[L],oe=O,ve=h,W=F,se=B,he=(B=y,F=x,G.Ea);switch(t(oe<ve),t(ve<=G.nc),G.hc){case 2:Qt(W,se,(ve-oe)*he,B,F);break;case 0:var Ce=oe,me=ve,Se=B,ke=F,Le=(Ke=G).Ea;Ce==0&&(nr(W,se,null,null,1,Se,ke),Lt(W,se+1,0,0,Le-1,Se,ke+1),se+=Le,ke+=Le,++Ce);for(var Ne=1<<Ke.b,rt=Ne-1,qe=Te(Le,Ke.b),_t=Ke.K,Ke=Ke.w+(Ce>>Ke.b)*qe;Ce<me;){var jt=_t,jr=Ke,Ct=1;for(hn(W,se,Se,ke-Le,1,Se,ke);Ct<Le;){var Qe=(Ct&~rt)+Ne;Qe>Le&&(Qe=Le),(0,jo[jt[jr++]>>8&15])(W,se+ +Ct,Se,ke+Ct-Le,Qe-Ct,Se,ke+Ct),Ct=Qe}se+=Le,ke+=Le,++Ce&rt||(Ke+=qe)}ve!=G.nc&&n(B,F-he,B,F+(ve-oe-1)*he,he);break;case 1:for(he=W,me=se,Le=(W=G.Ea)-(ke=W&~(Se=(se=1<<G.b)-1)),Ce=Te(W,G.b),Ne=G.K,G=G.w+(oe>>G.b)*Ce;oe<ve;){for(rt=Ne,qe=G,_t=new it,Ke=me+ke,jt=me+W;me<Ke;)et(rt[qe++],_t),No(_t,he,me,se,B,F),me+=se,F+=se;me<jt&&(et(rt[qe++],_t),No(_t,he,me,Le,B,F),me+=Le,F+=Le),++oe&Se||(G+=Ce)}break;case 3:if(W==B&&se==F&&0<G.b){for(me=B,W=he=F+(ve-oe)*he-(ke=(ve-oe)*Te(G.Ea,G.b)),se=B,Se=F,Ce=[],ke=(Le=ke)-1;0<=ke;--ke)Ce[ke]=se[Se+ke];for(ke=Le-1;0<=ke;--ke)me[W+ke]=Ce[ke];na(G,oe,ve,B,he,B,F)}else na(G,oe,ve,W,se,B,F)}F=y,B=x}B!=x&&n(y,x,F,B,R)}function Dn(u,h){var x=u.V,y=u.Ba+u.c*u.C,L=h-u.C;if(t(h<=u.l.o),t(16>=L),0<L){var R=u.l,O=u.Ta,F=u.Ua,B=R.width;if(Jr(u,L,x,y),L=F=[F],t((x=u.C)<(y=h)),t(R.v<R.va),y>R.o&&(y=R.o),x<R.j){var G=R.j-x;x=R.j,L[0]+=G*B}if(x>=y?x=0:(L[0]+=4*R.v,R.ka=x-R.j,R.U=R.va-R.v,R.T=y-x,x=1),x){if(F=F[0],11>(x=u.ca).S){var oe=x.f.RGBA,ve=(y=x.S,L=R.U,R=R.T,G=oe.eb,oe.A),W=R;for(oe=oe.fb+u.Ma*oe.A;0<W--;){var se=O,he=F,Ce=L,me=G,Se=oe;switch(y){case qs:Io(se,he,Ce,me,Se);break;case Vs:oi(se,he,Ce,me,Se);break;case m1:oi(se,he,Ce,me,Se),as(me,Se,0,Ce,1,0);break;case $0:ro(se,he,Ce,me,Se);break;case Ys:ye(se,he,Ce,me,Se,1);break;case g1:ye(se,he,Ce,me,Se,1),as(me,Se,0,Ce,1,0);break;case Gs:ye(se,he,Ce,me,Se,0);break;case Ws:ye(se,he,Ce,me,Se,0),as(me,Se,1,Ce,1,0);break;case p1:ji(se,he,Ce,me,Se);break;case x1:ji(se,he,Ce,me,Se),D0(me,Se,Ce,1,0);break;case q0:ai(se,he,Ce,me,Se);break;default:t(0)}F+=B,oe+=ve}u.Ma+=R}else alert("todo:EmitRescaledRowsYUVA");t(u.Ma<=x.height)}}u.C=h,t(u.C<=u.i)}function Pr(u){var h;if(0<u.ua)return 0;for(h=0;h<u.Wb;++h){var x=u.Ya[h].G,y=u.Ya[h].H;if(0<x[1][y[1]+0].g||0<x[2][y[2]+0].g||0<x[3][y[3]+0].g)return 0}return 1}function cn(u,h,x,y,L,R){if(u.Z!=0){var O=u.qd,F=u.rd;for(t(Lo[u.Z]!=null);h<x;++h)Lo[u.Z](O,F,y,L,y,L,R),O=y,F=L,L+=R;u.qd=O,u.rd=F}}function Er(u,h){var x=u.l.ma,y=x.Z==0||x.Z==1?u.l.j:u.C;if(y=u.C<y?y:u.C,t(h<=u.l.o),h>y){var L=u.l.width,R=x.ca,O=x.tb+L*y,F=u.V,B=u.Ba+u.c*y,G=u.gc;t(u.ab==1),t(G[0].hc==3),Fn(G[0],y,h,F,B,R,O),cn(x,y,h,R,O,L)}u.C=u.Ma=h}function Ar(u,h,x,y,L,R,O){var F=u.$/y,B=u.$%y,G=u.m,oe=u.s,ve=x+u.$,W=ve;L=x+y*L;var se=x+y*R,he=280+oe.ua,Ce=u.Pb?F:16777216,me=0<oe.ua?oe.Wa:null,Se=oe.wc,ke=ve<se?Ot(oe,B,F):null;t(u.C<R),t(se<=L);var Le=!1;e:for(;;){for(;Le||ve<se;){var Ne=0;if(F>=Ce){var rt=ve-x;t((Ce=u).Pb),Ce.wd=Ce.m,Ce.xd=rt,0<Ce.s.ua&&Ve(Ce.s.Wa,Ce.s.vb),Ce=F+e5}if(B&Se||(ke=Ot(oe,B,F)),t(ke!=null),ke.Qb&&(h[ve]=ke.qb,Le=!0),!Le)if(ae(G),ke.jc){Ne=G,rt=h;var qe=ve,_t=ke.pd[q(Ne)&He-1];t(ke.jc),256>_t.g?(re(Ne,Ne.u+_t.g),rt[qe]=_t.value,Ne=0):(re(Ne,Ne.u+_t.g-256),t(256<=_t.value),Ne=_t.value),Ne==0&&(Le=!0)}else Ne=Nt(ke.G[0],ke.H[0],G);if(G.h)break;if(Le||256>Ne){if(!Le)if(ke.nd)h[ve]=(ke.qb|Ne<<8)>>>0;else{if(ae(G),Le=Nt(ke.G[1],ke.H[1],G),ae(G),rt=Nt(ke.G[2],ke.H[2],G),qe=Nt(ke.G[3],ke.H[3],G),G.h)break;h[ve]=(qe<<24|Le<<16|Ne<<8|rt)>>>0}if(Le=!1,++ve,++B>=y&&(B=0,++F,O!=null&&F<=R&&!(F%16)&&O(u,F),me!=null))for(;W<ve;)Ne=h[W++],me.X[(506832829*Ne&4294967295)>>>me.Mb]=Ne}else if(280>Ne){if(Ne=xn(Ne-256,G),rt=Nt(ke.G[4],ke.H[4],G),ae(G),rt=vn(y,rt=xn(rt,G)),G.h)break;if(ve-x<rt||L-ve<Ne)break e;for(qe=0;qe<Ne;++qe)h[ve+qe]=h[ve+qe-rt];for(ve+=Ne,B+=Ne;B>=y;)B-=y,++F,O!=null&&F<=R&&!(F%16)&&O(u,F);if(t(ve<=L),B&Se&&(ke=Ot(oe,B,F)),me!=null)for(;W<ve;)Ne=h[W++],me.X[(506832829*Ne&4294967295)>>>me.Mb]=Ne}else{if(!(Ne<he))break e;for(Le=Ne-280,t(me!=null);W<ve;)Ne=h[W++],me.X[(506832829*Ne&4294967295)>>>me.Mb]=Ne;Ne=ve,t(!(Le>>>(rt=me).Xa)),h[Ne]=rt.X[Le],Le=!0}Le||t(G.h==ee(G))}if(u.Pb&&G.h&&ve<L)t(u.m.h),u.a=5,u.m=u.wd,u.$=u.xd,0<u.s.ua&&Ve(u.s.vb,u.s.Wa);else{if(G.h)break e;O!=null&&O(u,F>R?R:F),u.a=0,u.$=ve-x}return 1}return u.a=3,0}function Dr(u){t(u!=null),u.vc=null,u.yc=null,u.Ya=null;var h=u.Wa;h!=null&&(h.X=null),u.vb=null,t(u!=null)}function Bi(){var u=new We;return u==null?null:(u.a=0,u.xb=G0,ze("Predictor","VP8LPredictors"),ze("Predictor","VP8LPredictors_C"),ze("PredictorAdd","VP8LPredictorsAdd"),ze("PredictorAdd","VP8LPredictorsAdd_C"),Qt=ut,No=ot,Io=yt,oi=At,ji=Ue,ai=dt,ro=Pt,T.VP8LMapColor32b=Sn,T.VP8LMapColor8b=Mo,u)}function Kr(u,h,x,y,L){var R=1,O=[u],F=[h],B=y.m,G=y.s,oe=null,ve=0;e:for(;;){if(x)for(;R&&xe(B,1);){var W=O,se=F,he=y,Ce=1,me=he.m,Se=he.gc[he.ab],ke=xe(me,2);if(he.Oc&1<<ke)R=0;else{switch(he.Oc|=1<<ke,Se.hc=ke,Se.Ea=W[0],Se.nc=se[0],Se.K=[null],++he.ab,t(4>=he.ab),ke){case 0:case 1:Se.b=xe(me,3)+2,Ce=Kr(Te(Se.Ea,Se.b),Te(Se.nc,Se.b),0,he,Se.K),Se.K=Se.K[0];break;case 3:var Le,Ne=xe(me,8)+1,rt=16<Ne?0:4<Ne?1:2<Ne?2:3;if(W[0]=Te(Se.Ea,rt),Se.b=rt,Le=Ce=Kr(Ne,1,0,he,Se.K)){var qe,_t=Ne,Ke=Se,jt=1<<(8>>Ke.b),jr=s(jt);if(jr==null)Le=0;else{var Ct=Ke.K[0],Qe=Ke.w;for(jr[0]=Ke.K[0][0],qe=1;qe<1*_t;++qe)jr[qe]=Be(Ct[Qe+qe],jr[qe-1]);for(;qe<4*jt;++qe)jr[qe]=0;Ke.K[0]=null,Ke.K[0]=jr,Le=1}}Ce=Le;break;case 2:break;default:t(0)}R=Ce}}if(O=O[0],F=F[0],R&&xe(B,1)&&!(R=1<=(ve=xe(B,4))&&11>=ve)){y.a=3;break e}var Re;if(Re=R)t:{var vr,wt,It,er=y,Rr=O,nn=F,fr=ve,qr=x,on=er.m,Nr=er.s,Dt=[null],Ut=1,pr=0,Ht=Qf[fr];r:for(;;){if(qr&&xe(on,1)){var Or=xe(on,3)+2,li=Te(Rr,Or),br=Te(nn,Or),fn=li*br;if(!Kr(li,br,0,er,Dt))break r;for(Dt=Dt[0],Nr.xc=Or,vr=0;vr<fn;++vr){var Xt=Dt[vr]>>8&65535;Dt[vr]=Xt,Xt>=Ut&&(Ut=Xt+1)}}if(on.h)break r;for(wt=0;5>wt;++wt){var Ir=V0[wt];!wt&&0<fr&&(Ir+=1<<fr),pr<Ir&&(pr=Ir)}var kn=l(Ut*Ht,U),an=Ut,Mn=l(an,ie);if(Mn==null)var jn=null;else t(65536>=an),jn=Mn;var pn=s(pr);if(jn==null||pn==null||kn==null){er.a=1;break r}var Nn=kn;for(vr=It=0;vr<Ut;++vr){var Jt=jn[vr],In=Jt.G,ci=Jt.H,ia=0,oo=1,Fr=0;for(wt=0;5>wt;++wt){Ir=V0[wt],In[wt]=Nn,ci[wt]=It,!wt&&0<fr&&(Ir+=1<<fr);i:{var Ks,y1=Ir,Qs=er,cs=pn,w5=Nn,y5=It,_1=0,Po=Qs.m,_5=xe(Po,1);if(a(cs,0,0,y1),_5){var C5=xe(Po,1)+1,S5=xe(Po,1),t2=xe(Po,S5==0?1:8);cs[t2]=1,C5==2&&(cs[t2=xe(Po,8)]=1);var el=1}else{var r2=s(19),n2=xe(Po,4)+4;if(19<n2){Qs.a=3;var tl=0;break i}for(Ks=0;Ks<n2;++Ks)r2[Jf[Ks]]=xe(Po,3);var C1=void 0,us=void 0,i2=Qs,A5=r2,rl=y1,o2=cs,S1=0,Eo=i2.m,a2=8,s2=l(128,U);n:for(;E(s2,0,7,A5,19);){if(xe(Eo,1)){var k5=2+2*xe(Eo,3);if((C1=2+xe(Eo,k5))>rl)break n}else C1=rl;for(us=0;us<rl&&C1--;){ae(Eo);var l2=s2[0+(127&q(Eo))];re(Eo,Eo.u+l2.g);var Ta=l2.value;if(16>Ta)o2[us++]=Ta,Ta!=0&&(a2=Ta);else{var M5=Ta==16,c2=Ta-16,j5=Xf[c2],u2=xe(Eo,Wf[c2])+j5;if(us+u2>rl)break n;for(var N5=M5?a2:0;0<u2--;)o2[us++]=N5}}S1=1;break n}S1||(i2.a=3),el=S1}(el=el&&!Po.h)&&(_1=E(w5,y5,8,cs,y1)),el&&_1!=0?tl=_1:(Qs.a=3,tl=0)}if(tl==0)break r;if(oo&&Zf[wt]==1&&(oo=Nn[It].g==0),ia+=Nn[It].g,It+=tl,3>=wt){var ds,A1=pn[0];for(ds=1;ds<Ir;++ds)pn[ds]>A1&&(A1=pn[ds]);Fr+=A1}}if(Jt.nd=oo,Jt.Qb=0,oo&&(Jt.qb=(In[3][ci[3]+0].value<<24|In[1][ci[1]+0].value<<16|In[2][ci[2]+0].value)>>>0,ia==0&&256>In[0][ci[0]+0].value&&(Jt.Qb=1,Jt.qb+=In[0][ci[0]+0].value<<8)),Jt.jc=!Jt.Qb&&6>Fr,Jt.jc){var nl,ao=Jt;for(nl=0;nl<He;++nl){var Do=nl,Ro=ao.pd[Do],il=ao.G[0][ao.H[0]+Do];256<=il.value?(Ro.g=il.g+256,Ro.value=il.value):(Ro.g=0,Ro.value=0,Do>>=Yt(il,8,Ro),Do>>=Yt(ao.G[1][ao.H[1]+Do],16,Ro),Do>>=Yt(ao.G[2][ao.H[2]+Do],0,Ro),Yt(ao.G[3][ao.H[3]+Do],24,Ro))}}}Nr.vc=Dt,Nr.Wb=Ut,Nr.Ya=jn,Nr.yc=kn,Re=1;break t}Re=0}if(!(R=Re)){y.a=3;break e}if(0<ve){if(G.ua=1<<ve,!J(G.Wa,ve)){y.a=1,R=0;break e}}else G.ua=0;var k1=y,d2=O,I5=F,M1=k1.s,j1=M1.xc;if(k1.c=d2,k1.i=I5,M1.md=Te(d2,j1),M1.wc=j1==0?-1:(1<<j1)-1,x){y.xb=s5;break e}if((oe=s(O*F))==null){y.a=1,R=0;break e}R=(R=Ar(y,oe,0,O,F,F,null))&&!B.h;break e}return R?(L!=null?L[0]=oe:(t(oe==null),t(x)),y.$=0,x||Dr(G)):Dr(G),R}function xi(u,h){var x=u.c*u.i,y=x+h+16*h;return t(u.c<=h),u.V=s(y),u.V==null?(u.Ta=null,u.Ua=0,u.a=1,0):(u.Ta=u.V,u.Ua=u.Ba+x+h,1)}function vi(u,h){var x=u.C,y=h-x,L=u.V,R=u.Ba+u.c*x;for(t(h<=u.l.o);0<y;){var O=16<y?16:y,F=u.l.ma,B=u.l.width,G=B*O,oe=F.ca,ve=F.tb+B*x,W=u.Ta,se=u.Ua;Jr(u,O,L,R),O0(W,se,oe,ve,G),cn(F,x,x+O,oe,ve,B),y-=O,L+=O*u.c,x+=O}t(x==h),u.C=u.Ma=h}function Jn(){this.ub=this.yd=this.td=this.Rb=0}function Kn(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function mo(){this.Fb=this.Bb=this.Cb=0,this.Zb=s(4),this.Lb=s(4)}function bn(){this.Yb=function(){var u=[];return function h(x,y,L){for(var R=L[y],O=0;O<R&&(x.push(L.length>y+1?[]:0),!(L.length<y+1));O++)h(x[O],y+1,L)}(u,0,[3,11]),u}()}function go(){this.jb=s(3),this.Wc=c([4,8],bn),this.Xc=c([4,17],bn)}function Ui(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new s(4),this.od=new s(4)}function Br(){this.ld=this.La=this.dd=this.tc=0}function bi(){this.Na=this.la=0}function ga(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function xo(){this.ad=s(384),this.Za=0,this.Ob=s(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function Yo(){this.uc=this.M=this.Nb=0,this.wa=Array(new Br),this.Y=0,this.ya=Array(new xo),this.aa=0,this.l=new vo}function xa(){this.y=s(16),this.f=s(8),this.ea=s(8)}function Qn(){this.cb=this.a=0,this.sc="",this.m=new A,this.Od=new Jn,this.Kc=new Kn,this.ed=new Ui,this.Qa=new mo,this.Ic=this.$c=this.Aa=0,this.D=new Yo,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=l(8,A),this.ia=0,this.pb=l(4,ga),this.Pa=new go,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new xa),this.Hd=0,this.rb=Array(new bi),this.sb=0,this.wa=Array(new Br),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new xo),this.L=this.aa=0,this.gd=c([4,2],Br),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function vo(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function rs(){var u=new Qn;return u!=null&&(u.a=0,u.sc="OK",u.cb=0,u.Xb=0,ss||(ss=Qr)),u}function or(u,h,x){return u.a==0&&(u.a=h,u.sc=x,u.cb=0),0}function Go(u,h,x){return 3<=x&&u[h+0]==157&&u[h+1]==1&&u[h+2]==42}function va(u,h){if(u==null)return 0;if(u.a=0,u.sc="OK",h==null)return or(u,2,"null VP8Io passed to VP8GetHeaders()");var x=h.data,y=h.w,L=h.ha;if(4>L)return or(u,7,"Truncated header.");var R=x[y+0]|x[y+1]<<8|x[y+2]<<16,O=u.Od;if(O.Rb=!(1&R),O.td=R>>1&7,O.yd=R>>4&1,O.ub=R>>5,3<O.td)return or(u,3,"Incorrect keyframe parameters.");if(!O.yd)return or(u,4,"Frame not displayable.");y+=3,L-=3;var F=u.Kc;if(O.Rb){if(7>L)return or(u,7,"cannot parse picture header");if(!Go(x,y,L))return or(u,3,"Bad code word");F.c=16383&(x[y+4]<<8|x[y+3]),F.Td=x[y+4]>>6,F.i=16383&(x[y+6]<<8|x[y+5]),F.Ud=x[y+6]>>6,y+=7,L-=7,u.za=F.c+15>>4,u.Ub=F.i+15>>4,h.width=F.c,h.height=F.i,h.Da=0,h.j=0,h.v=0,h.va=h.width,h.o=h.height,h.da=0,h.ib=h.width,h.hb=h.height,h.U=h.width,h.T=h.height,a((R=u.Pa).jb,0,255,R.jb.length),t((R=u.Qa)!=null),R.Cb=0,R.Bb=0,R.Fb=1,a(R.Zb,0,0,R.Zb.length),a(R.Lb,0,0,R.Lb)}if(O.ub>L)return or(u,7,"bad partition length");le(R=u.m,x,y,O.ub),y+=O.ub,L-=O.ub,O.Rb&&(F.Ld=pe(R),F.Kd=pe(R)),F=u.Qa;var B,G=u.Pa;if(t(R!=null),t(F!=null),F.Cb=pe(R),F.Cb){if(F.Bb=pe(R),pe(R)){for(F.Fb=pe(R),B=0;4>B;++B)F.Zb[B]=pe(R)?ne(R,7):0;for(B=0;4>B;++B)F.Lb[B]=pe(R)?ne(R,6):0}if(F.Bb)for(B=0;3>B;++B)G.jb[B]=pe(R)?fe(R,8):255}else F.Bb=0;if(R.Ka)return or(u,3,"cannot parse segment header");if((F=u.ed).zd=pe(R),F.Tb=fe(R,6),F.wb=fe(R,3),F.Pc=pe(R),F.Pc&&pe(R)){for(G=0;4>G;++G)pe(R)&&(F.vd[G]=ne(R,6));for(G=0;4>G;++G)pe(R)&&(F.od[G]=ne(R,6))}if(u.L=F.Tb==0?0:F.zd?1:2,R.Ka)return or(u,3,"cannot parse filter header");var oe=L;if(L=B=y,y=B+oe,F=oe,u.Xb=(1<<fe(u.m,2))-1,oe<3*(G=u.Xb))x=7;else{for(B+=3*G,F-=3*G,oe=0;oe<G;++oe){var ve=x[L+0]|x[L+1]<<8|x[L+2]<<16;ve>F&&(ve=F),le(u.Jc[+oe],x,B,ve),B+=ve,F-=ve,L+=3}le(u.Jc[+G],x,B,F),x=B<y?0:5}if(x!=0)return or(u,x,"cannot parse partitions");for(x=fe(B=u.m,7),L=pe(B)?ne(B,4):0,y=pe(B)?ne(B,4):0,F=pe(B)?ne(B,4):0,G=pe(B)?ne(B,4):0,B=pe(B)?ne(B,4):0,oe=u.Qa,ve=0;4>ve;++ve){if(oe.Cb){var W=oe.Zb[ve];oe.Fb||(W+=x)}else{if(0<ve){u.pb[ve]=u.pb[0];continue}W=x}var se=u.pb[ve];se.Sc[0]=v1[rr(W+L,127)],se.Sc[1]=b1[rr(W+0,127)],se.Eb[0]=2*v1[rr(W+y,127)],se.Eb[1]=101581*b1[rr(W+F,127)]>>16,8>se.Eb[1]&&(se.Eb[1]=8),se.Qc[0]=v1[rr(W+G,117)],se.Qc[1]=b1[rr(W+B,127)],se.lc=W+B}if(!O.Rb)return or(u,4,"Not a key frame.");for(pe(R),O=u.Pa,x=0;4>x;++x){for(L=0;8>L;++L)for(y=0;3>y;++y)for(F=0;11>F;++F)G=ce(R,o5[x][L][y][F])?fe(R,8):n5[x][L][y][F],O.Wc[x][L].Yb[y][F]=G;for(L=0;17>L;++L)O.Xc[x][L]=O.Wc[x][a5[L]]}return u.kc=pe(R),u.kc&&(u.Bd=fe(R,8)),u.cb=1}function Qr(u,h,x,y,L,R,O){var F=h[L].Yb[x];for(x=0;16>L;++L){if(!ce(u,F[x+0]))return L;for(;!ce(u,F[x+1]);)if(F=h[++L].Yb[0],x=0,L==16)return 16;var B=h[L+1].Yb;if(ce(u,F[x+2])){var G=u,oe=0;if(ce(G,(W=F)[(ve=x)+3]))if(ce(G,W[ve+6])){for(F=0,ve=2*(oe=ce(G,W[ve+8]))+(W=ce(G,W[ve+9+oe])),oe=0,W=t5[ve];W[F];++F)oe+=oe+ce(G,W[F]);oe+=3+(8<<ve)}else ce(G,W[ve+7])?(oe=7+2*ce(G,165),oe+=ce(G,145)):oe=5+ce(G,159);else oe=ce(G,W[ve+4])?3+ce(G,W[ve+5]):2;F=B[2]}else oe=1,F=B[1];B=O+r5[L],0>(G=u).b&&ue(G);var ve,W=G.b,se=(ve=G.Ca>>1)-(G.I>>W)>>31;--G.b,G.Ca+=se,G.Ca|=1,G.I-=(ve+1&se)<<W,R[B]=((oe^se)-se)*y[(0<L)+0]}return 16}function Rn(u){var h=u.rb[u.sb-1];h.la=0,h.Na=0,a(u.zc,0,0,u.zc.length),u.ja=0}function en(u,h,x,y,L){L=u[h+x+32*y]+(L>>3),u[h+x+32*y]=-256&L?0>L?0:255:L}function wi(u,h,x,y,L,R){en(u,h,0,x,y+L),en(u,h,1,x,y+R),en(u,h,2,x,y-R),en(u,h,3,x,y-L)}function Kt(u){return(20091*u>>16)+u}function bo(u,h,x,y){var L,R=0,O=s(16);for(L=0;4>L;++L){var F=u[h+0]+u[h+8],B=u[h+0]-u[h+8],G=(35468*u[h+4]>>16)-Kt(u[h+12]),oe=Kt(u[h+4])+(35468*u[h+12]>>16);O[R+0]=F+oe,O[R+1]=B+G,O[R+2]=B-G,O[R+3]=F-oe,R+=4,h++}for(L=R=0;4>L;++L)F=(u=O[R+0]+4)+O[R+8],B=u-O[R+8],G=(35468*O[R+4]>>16)-Kt(O[R+12]),en(x,y,0,0,F+(oe=Kt(O[R+4])+(35468*O[R+12]>>16))),en(x,y,1,0,B+G),en(x,y,2,0,B-G),en(x,y,3,0,F-oe),R++,y+=32}function Wo(u,h,x,y){var L=u[h+0]+4,R=35468*u[h+4]>>16,O=Kt(u[h+4]),F=35468*u[h+1]>>16;wi(x,y,0,L+O,u=Kt(u[h+1]),F),wi(x,y,1,L+R,u,F),wi(x,y,2,L-R,u,F),wi(x,y,3,L-O,u,F)}function ba(u,h,x,y,L){bo(u,h,x,y),L&&bo(u,h+16,x,y+4)}function ns(u,h,x,y){zn(u,h+0,x,y,1),zn(u,h+32,x,y+128,1)}function Ur(u,h,x,y){var L;for(u=u[h+0]+4,L=0;4>L;++L)for(h=0;4>h;++h)en(x,y,h,L,u)}function Xo(u,h,x,y){u[h+0]&&Ft(u,h+0,x,y),u[h+16]&&Ft(u,h+16,x,y+4),u[h+32]&&Ft(u,h+32,x,y+128),u[h+48]&&Ft(u,h+48,x,y+128+4)}function Hi(u,h,x,y){var L,R=s(16);for(L=0;4>L;++L){var O=u[h+0+L]+u[h+12+L],F=u[h+4+L]+u[h+8+L],B=u[h+4+L]-u[h+8+L],G=u[h+0+L]-u[h+12+L];R[0+L]=O+F,R[8+L]=O-F,R[4+L]=G+B,R[12+L]=G-B}for(L=0;4>L;++L)O=(u=R[0+4*L]+3)+R[3+4*L],F=R[1+4*L]+R[2+4*L],B=R[1+4*L]-R[2+4*L],G=u-R[3+4*L],x[y+0]=O+F>>3,x[y+16]=G+B>>3,x[y+32]=O-F>>3,x[y+48]=G-B>>3,y+=64}function ei(u,h,x){var y,L=h-32,R=An,O=255-u[L-1];for(y=0;y<x;++y){var F,B=R,G=O+u[h-1];for(F=0;F<x;++F)u[h+F]=B[G+u[L+F]];h+=32}}function wo(u,h){ei(u,h,4)}function wa(u,h){ei(u,h,8)}function ya(u,h){ei(u,h,16)}function _a(u,h){var x;for(x=0;16>x;++x)n(u,h+32*x,u,h-32,16)}function yo(u,h){var x;for(x=16;0<x;--x)a(u,h,u[h-1],16),h+=32}function wn(u,h,x){var y;for(y=0;16>y;++y)a(h,x+32*y,u,16)}function ti(u,h){var x,y=16;for(x=0;16>x;++x)y+=u[h-1+32*x]+u[h+x-32];wn(y>>5,u,h)}function Ca(u,h){var x,y=8;for(x=0;16>x;++x)y+=u[h-1+32*x];wn(y>>4,u,h)}function yi(u,h){var x,y=8;for(x=0;16>x;++x)y+=u[h+x-32];wn(y>>4,u,h)}function _o(u,h){wn(128,u,h)}function pt(u,h,x){return u+2*h+x+2>>2}function Sa(u,h){var x,y=h-32;for(y=new Uint8Array([pt(u[y-1],u[y+0],u[y+1]),pt(u[y+0],u[y+1],u[y+2]),pt(u[y+1],u[y+2],u[y+3]),pt(u[y+2],u[y+3],u[y+4])]),x=0;4>x;++x)n(u,h+32*x,y,0,y.length)}function Aa(u,h){var x=u[h-1],y=u[h-1+32],L=u[h-1+64],R=u[h-1+96];_e(u,h+0,16843009*pt(u[h-1-32],x,y)),_e(u,h+32,16843009*pt(x,y,L)),_e(u,h+64,16843009*pt(y,L,R)),_e(u,h+96,16843009*pt(L,R,R))}function ka(u,h){var x,y=4;for(x=0;4>x;++x)y+=u[h+x-32]+u[h-1+32*x];for(y>>=3,x=0;4>x;++x)a(u,h+32*x,y,4)}function is(u,h){var x=u[h-1+0],y=u[h-1+32],L=u[h-1+64],R=u[h-1-32],O=u[h+0-32],F=u[h+1-32],B=u[h+2-32],G=u[h+3-32];u[h+0+96]=pt(y,L,u[h-1+96]),u[h+1+96]=u[h+0+64]=pt(x,y,L),u[h+2+96]=u[h+1+64]=u[h+0+32]=pt(R,x,y),u[h+3+96]=u[h+2+64]=u[h+1+32]=u[h+0+0]=pt(O,R,x),u[h+3+64]=u[h+2+32]=u[h+1+0]=pt(F,O,R),u[h+3+32]=u[h+2+0]=pt(B,F,O),u[h+3+0]=pt(G,B,F)}function un(u,h){var x=u[h+1-32],y=u[h+2-32],L=u[h+3-32],R=u[h+4-32],O=u[h+5-32],F=u[h+6-32],B=u[h+7-32];u[h+0+0]=pt(u[h+0-32],x,y),u[h+1+0]=u[h+0+32]=pt(x,y,L),u[h+2+0]=u[h+1+32]=u[h+0+64]=pt(y,L,R),u[h+3+0]=u[h+2+32]=u[h+1+64]=u[h+0+96]=pt(L,R,O),u[h+3+32]=u[h+2+64]=u[h+1+96]=pt(R,O,F),u[h+3+64]=u[h+2+96]=pt(O,F,B),u[h+3+96]=pt(F,B,B)}function yn(u,h){var x=u[h-1+0],y=u[h-1+32],L=u[h-1+64],R=u[h-1-32],O=u[h+0-32],F=u[h+1-32],B=u[h+2-32],G=u[h+3-32];u[h+0+0]=u[h+1+64]=R+O+1>>1,u[h+1+0]=u[h+2+64]=O+F+1>>1,u[h+2+0]=u[h+3+64]=F+B+1>>1,u[h+3+0]=B+G+1>>1,u[h+0+96]=pt(L,y,x),u[h+0+64]=pt(y,x,R),u[h+0+32]=u[h+1+96]=pt(x,R,O),u[h+1+32]=u[h+2+96]=pt(R,O,F),u[h+2+32]=u[h+3+96]=pt(O,F,B),u[h+3+32]=pt(F,B,G)}function _i(u,h){var x=u[h+0-32],y=u[h+1-32],L=u[h+2-32],R=u[h+3-32],O=u[h+4-32],F=u[h+5-32],B=u[h+6-32],G=u[h+7-32];u[h+0+0]=x+y+1>>1,u[h+1+0]=u[h+0+64]=y+L+1>>1,u[h+2+0]=u[h+1+64]=L+R+1>>1,u[h+3+0]=u[h+2+64]=R+O+1>>1,u[h+0+32]=pt(x,y,L),u[h+1+32]=u[h+0+96]=pt(y,L,R),u[h+2+32]=u[h+1+96]=pt(L,R,O),u[h+3+32]=u[h+2+96]=pt(R,O,F),u[h+3+64]=pt(O,F,B),u[h+3+96]=pt(F,B,G)}function Zo(u,h){var x=u[h-1+0],y=u[h-1+32],L=u[h-1+64],R=u[h-1+96];u[h+0+0]=x+y+1>>1,u[h+2+0]=u[h+0+32]=y+L+1>>1,u[h+2+32]=u[h+0+64]=L+R+1>>1,u[h+1+0]=pt(x,y,L),u[h+3+0]=u[h+1+32]=pt(y,L,R),u[h+3+32]=u[h+1+64]=pt(L,R,R),u[h+3+64]=u[h+2+64]=u[h+0+96]=u[h+1+96]=u[h+2+96]=u[h+3+96]=R}function On(u,h){var x=u[h-1+0],y=u[h-1+32],L=u[h-1+64],R=u[h-1+96],O=u[h-1-32],F=u[h+0-32],B=u[h+1-32],G=u[h+2-32];u[h+0+0]=u[h+2+32]=x+O+1>>1,u[h+0+32]=u[h+2+64]=y+x+1>>1,u[h+0+64]=u[h+2+96]=L+y+1>>1,u[h+0+96]=R+L+1>>1,u[h+3+0]=pt(F,B,G),u[h+2+0]=pt(O,F,B),u[h+1+0]=u[h+3+32]=pt(x,O,F),u[h+1+32]=u[h+3+64]=pt(y,x,O),u[h+1+64]=u[h+3+96]=pt(L,y,x),u[h+1+96]=pt(R,L,y)}function $i(u,h){var x;for(x=0;8>x;++x)n(u,h+32*x,u,h-32,8)}function Ci(u,h){var x;for(x=0;8>x;++x)a(u,h,u[h-1],8),h+=32}function qi(u,h,x){var y;for(y=0;8>y;++y)a(h,x+32*y,u,8)}function Vi(u,h){var x,y=8;for(x=0;8>x;++x)y+=u[h+x-32]+u[h-1+32*x];qi(y>>4,u,h)}function Ma(u,h){var x,y=4;for(x=0;8>x;++x)y+=u[h+x-32];qi(y>>3,u,h)}function Co(u,h){var x,y=4;for(x=0;8>x;++x)y+=u[h-1+32*x];qi(y>>3,u,h)}function Jo(u,h){qi(128,u,h)}function Yi(u,h,x){var y=u[h-x],L=u[h+0],R=3*(L-y)+f1[1020+u[h-2*x]-u[h+x]],O=$s[112+(R+4>>3)];u[h-x]=An[255+y+$s[112+(R+3>>3)]],u[h+0]=An[255+L-O]}function Gi(u,h,x,y){var L=u[h+0],R=u[h+x];return Un[255+u[h-2*x]-u[h-x]]>y||Un[255+R-L]>y}function Ko(u,h,x,y){return 4*Un[255+u[h-x]-u[h+0]]+Un[255+u[h-2*x]-u[h+x]]<=y}function Wi(u,h,x,y,L){var R=u[h-3*x],O=u[h-2*x],F=u[h-x],B=u[h+0],G=u[h+x],oe=u[h+2*x],ve=u[h+3*x];return 4*Un[255+F-B]+Un[255+O-G]>y?0:Un[255+u[h-4*x]-R]<=L&&Un[255+R-O]<=L&&Un[255+O-F]<=L&&Un[255+ve-oe]<=L&&Un[255+oe-G]<=L&&Un[255+G-B]<=L}function Si(u,h,x,y){var L=2*y+1;for(y=0;16>y;++y)Ko(u,h+y,x,L)&&Yi(u,h+y,x)}function ri(u,h,x,y){var L=2*y+1;for(y=0;16>y;++y)Ko(u,h+y*x,1,L)&&Yi(u,h+y*x,1)}function ja(u,h,x,y){var L;for(L=3;0<L;--L)Si(u,h+=4*x,x,y)}function ni(u,h,x,y){var L;for(L=3;0<L;--L)ri(u,h+=4,x,y)}function _n(u,h,x,y,L,R,O,F){for(R=2*R+1;0<L--;){if(Wi(u,h,x,R,O))if(Gi(u,h,x,F))Yi(u,h,x);else{var B=u,G=h,oe=x,ve=B[G-2*oe],W=B[G-oe],se=B[G+0],he=B[G+oe],Ce=B[G+2*oe],me=27*(ke=f1[1020+3*(se-W)+f1[1020+ve-he]])+63>>7,Se=18*ke+63>>7,ke=9*ke+63>>7;B[G-3*oe]=An[255+B[G-3*oe]+ke],B[G-2*oe]=An[255+ve+Se],B[G-oe]=An[255+W+me],B[G+0]=An[255+se-me],B[G+oe]=An[255+he-Se],B[G+2*oe]=An[255+Ce-ke]}h+=y}}function tn(u,h,x,y,L,R,O,F){for(R=2*R+1;0<L--;){if(Wi(u,h,x,R,O))if(Gi(u,h,x,F))Yi(u,h,x);else{var B=u,G=h,oe=x,ve=B[G-oe],W=B[G+0],se=B[G+oe],he=$s[112+(4+(Ce=3*(W-ve))>>3)],Ce=$s[112+(Ce+3>>3)],me=he+1>>1;B[G-2*oe]=An[255+B[G-2*oe]+me],B[G-oe]=An[255+ve+Ce],B[G+0]=An[255+W-he],B[G+oe]=An[255+se-me]}h+=y}}function Xi(u,h,x,y,L,R){_n(u,h,x,1,16,y,L,R)}function So(u,h,x,y,L,R){_n(u,h,1,x,16,y,L,R)}function Cn(u,h,x,y,L,R){var O;for(O=3;0<O;--O)tn(u,h+=4*x,x,1,16,y,L,R)}function Qo(u,h,x,y,L,R){var O;for(O=3;0<O;--O)tn(u,h+=4,1,x,16,y,L,R)}function g(u,h,x,y,L,R,O,F){_n(u,h,L,1,8,R,O,F),_n(x,y,L,1,8,R,O,F)}function N(u,h,x,y,L,R,O,F){_n(u,h,1,L,8,R,O,F),_n(x,y,1,L,8,R,O,F)}function V(u,h,x,y,L,R,O,F){tn(u,h+4*L,L,1,8,R,O,F),tn(x,y+4*L,L,1,8,R,O,F)}function te(u,h,x,y,L,R,O,F){tn(u,h+4,1,L,8,R,O,F),tn(x,y+4,1,L,8,R,O,F)}function de(){this.ba=new Et,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new kt,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function Ae(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Me(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function $e(){this.ua=0,this.Wa=new Je,this.vb=new Je,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new ie,this.yc=new U}function We(){this.xb=this.a=0,this.l=new vo,this.ca=new Et,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new z,this.Pb=0,this.wd=new z,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new $e,this.ab=0,this.gc=l(4,Me),this.Oc=0}function ft(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new vo,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function gt(u,h,x,y,L,R,O){for(u=u==null?0:u[h+0],h=0;h<O;++h)L[R+h]=u+x[y+h]&255,u=L[R+h]}function Mt(u,h,x,y,L,R,O){var F;if(u==null)gt(null,null,x,y,L,R,O);else for(F=0;F<O;++F)L[R+F]=u[h+F]+x[y+F]&255}function Gt(u,h,x,y,L,R,O){if(u==null)gt(null,null,x,y,L,R,O);else{var F,B=u[h+0],G=B,oe=B;for(F=0;F<O;++F)G=oe+(B=u[h+F])-G,oe=x[y+F]+(-256&G?0>G?0:255:G)&255,G=B,L[R+F]=oe}}function ur(u,h,x,y){var L=h.width,R=h.o;if(t(u!=null&&h!=null),0>x||0>=y||x+y>R)return null;if(!u.Cc){if(u.ga==null){var O;if(u.ga=new ft,(O=u.ga==null)||(O=h.width*h.o,t(u.Gb.length==0),u.Gb=s(O),u.Uc=0,u.Gb==null?O=0:(u.mb=u.Gb,u.nb=u.Uc,u.rc=null,O=1),O=!O),!O){O=u.ga;var F=u.Fa,B=u.P,G=u.qc,oe=u.mb,ve=u.nb,W=B+1,se=G-1,he=O.l;if(t(F!=null&&oe!=null&&h!=null),Lo[0]=null,Lo[1]=gt,Lo[2]=Mt,Lo[3]=Gt,O.ca=oe,O.tb=ve,O.c=h.width,O.i=h.height,t(0<O.c&&0<O.i),1>=G)h=0;else if(O.$a=3&F[B+0],O.Z=F[B+0]>>2&3,O.Lc=F[B+0]>>4&3,B=F[B+0]>>6&3,0>O.$a||1<O.$a||4<=O.Z||1<O.Lc||B)h=0;else if(he.put=at,he.ac=Zr,he.bc=ln,he.ma=O,he.width=h.width,he.height=h.height,he.Da=h.Da,he.v=h.v,he.va=h.va,he.j=h.j,he.o=h.o,O.$a)e:{t(O.$a==1),h=Bi();t:for(;;){if(h==null){h=0;break e}if(t(O!=null),O.mc=h,h.c=O.c,h.i=O.i,h.l=O.l,h.l.ma=O,h.l.width=O.c,h.l.height=O.i,h.a=0,ge(h.m,F,W,se),!Kr(O.c,O.i,1,h,null)||(h.ab==1&&h.gc[0].hc==3&&Pr(h.s)?(O.ic=1,F=h.c*h.i,h.Ta=null,h.Ua=0,h.V=s(F),h.Ba=0,h.V==null?(h.a=1,h=0):h=1):(O.ic=0,h=xi(h,O.c)),!h))break t;h=1;break e}O.mc=null,h=0}else h=se>=O.c*O.i;O=!h}if(O)return null;u.ga.Lc!=1?u.Ga=0:y=R-x}t(u.ga!=null),t(x+y<=R);e:{if(h=(F=u.ga).c,R=F.l.o,F.$a==0){if(W=u.rc,se=u.Vc,he=u.Fa,B=u.P+1+x*h,G=u.mb,oe=u.nb+x*h,t(B<=u.P+u.qc),F.Z!=0)for(t(Lo[F.Z]!=null),O=0;O<y;++O)Lo[F.Z](W,se,he,B,G,oe,h),W=G,se=oe,oe+=h,B+=h;else for(O=0;O<y;++O)n(G,oe,he,B,h),W=G,se=oe,oe+=h,B+=h;u.rc=W,u.Vc=se}else{if(t(F.mc!=null),h=x+y,t((O=F.mc)!=null),t(h<=O.i),O.C>=h)h=1;else if(F.ic||rn(),F.ic){F=O.V,W=O.Ba,se=O.c;var Ce=O.i,me=(he=1,B=O.$/se,G=O.$%se,oe=O.m,ve=O.s,O.$),Se=se*Ce,ke=se*h,Le=ve.wc,Ne=me<ke?Ot(ve,G,B):null;t(me<=Se),t(h<=Ce),t(Pr(ve));t:for(;;){for(;!oe.h&&me<ke;){if(G&Le||(Ne=Ot(ve,G,B)),t(Ne!=null),ae(oe),256>(Ce=Nt(Ne.G[0],Ne.H[0],oe)))F[W+me]=Ce,++me,++G>=se&&(G=0,++B<=h&&!(B%16)&&Er(O,B));else{if(!(280>Ce)){he=0;break t}Ce=xn(Ce-256,oe);var rt,qe=Nt(Ne.G[4],Ne.H[4],oe);if(ae(oe),!(me>=(qe=vn(se,qe=xn(qe,oe)))&&Se-me>=Ce)){he=0;break t}for(rt=0;rt<Ce;++rt)F[W+me+rt]=F[W+me+rt-qe];for(me+=Ce,G+=Ce;G>=se;)G-=se,++B<=h&&!(B%16)&&Er(O,B);me<ke&&G&Le&&(Ne=Ot(ve,G,B))}t(oe.h==ee(oe))}Er(O,B>h?h:B);break t}!he||oe.h&&me<Se?(he=0,O.a=oe.h?5:3):O.$=me,h=he}else h=Ar(O,O.V,O.Ba,O.c,O.i,h,vi);if(!h){y=0;break e}}x+y>=R&&(u.Cc=1),y=1}if(!y)return null;if(u.Cc&&((y=u.ga)!=null&&(y.mc=null),u.ga=null,0<u.Ga))return alert("todo:WebPDequantizeLevels"),null}return u.nb+x*L}function Vt(u,h,x,y,L,R){for(;0<L--;){var O,F=u,B=h+(x?1:0),G=u,oe=h+(x?0:3);for(O=0;O<y;++O){var ve=G[oe+4*O];ve!=255&&(ve*=32897,F[B+4*O+0]=F[B+4*O+0]*ve>>23,F[B+4*O+1]=F[B+4*O+1]*ve>>23,F[B+4*O+2]=F[B+4*O+2]*ve>>23)}h+=R}}function dr(u,h,x,y,L){for(;0<y--;){var R;for(R=0;R<x;++R){var O=u[h+2*R+0],F=15&(G=u[h+2*R+1]),B=4369*F,G=(240&G|G>>4)*B>>16;u[h+2*R+0]=(240&O|O>>4)*B>>16&240|(15&O|O<<4)*B>>16>>4&15,u[h+2*R+1]=240&G|F}h+=L}}function hr(u,h,x,y,L,R,O,F){var B,G,oe=255;for(G=0;G<L;++G){for(B=0;B<y;++B){var ve=u[h+B];R[O+4*B]=ve,oe&=ve}h+=x,O+=F}return oe!=255}function ar(u,h,x,y,L){var R;for(R=0;R<L;++R)x[y+R]=u[h+R]>>8}function rn(){as=Vt,D0=dr,R0=hr,O0=ar}function Hr(u,h,x){T[u]=function(y,L,R,O,F,B,G,oe,ve,W,se,he,Ce,me,Se,ke,Le){var Ne,rt=Le-1>>1,qe=F[B+0]|G[oe+0]<<16,_t=ve[W+0]|se[he+0]<<16;t(y!=null);var Ke=3*qe+_t+131074>>2;for(h(y[L+0],255&Ke,Ke>>16,Ce,me),R!=null&&(Ke=3*_t+qe+131074>>2,h(R[O+0],255&Ke,Ke>>16,Se,ke)),Ne=1;Ne<=rt;++Ne){var jt=F[B+Ne]|G[oe+Ne]<<16,jr=ve[W+Ne]|se[he+Ne]<<16,Ct=qe+jt+_t+jr+524296,Qe=Ct+2*(jt+_t)>>3;Ke=Qe+qe>>1,qe=(Ct=Ct+2*(qe+jr)>>3)+jt>>1,h(y[L+2*Ne-1],255&Ke,Ke>>16,Ce,me+(2*Ne-1)*x),h(y[L+2*Ne-0],255&qe,qe>>16,Ce,me+(2*Ne-0)*x),R!=null&&(Ke=Ct+_t>>1,qe=Qe+jr>>1,h(R[O+2*Ne-1],255&Ke,Ke>>16,Se,ke+(2*Ne-1)*x),h(R[O+2*Ne+0],255&qe,qe>>16,Se,ke+(2*Ne+0)*x)),qe=jt,_t=jr}1&Le||(Ke=3*qe+_t+131074>>2,h(y[L+Le-1],255&Ke,Ke>>16,Ce,me+(Le-1)*x),R!=null&&(Ke=3*_t+qe+131074>>2,h(R[O+Le-1],255&Ke,Ke>>16,Se,ke+(Le-1)*x)))}}function ea(){Hn[qs]=l5,Hn[Vs]=W0,Hn[$0]=c5,Hn[Ys]=X0,Hn[Gs]=Z0,Hn[p1]=J0,Hn[q0]=u5,Hn[m1]=W0,Hn[g1]=X0,Hn[Ws]=Z0,Hn[x1]=J0}function Zi(u){return u&-16384?0>u?0:255:u>>d5}function Ji(u,h){return Zi((19077*u>>8)+(26149*h>>8)-14234)}function Ai(u,h,x){return Zi((19077*u>>8)-(6419*h>>8)-(13320*x>>8)+8708)}function Ki(u,h){return Zi((19077*u>>8)+(33050*h>>8)-17685)}function Qi(u,h,x,y,L){y[L+0]=Ji(u,x),y[L+1]=Ai(u,h,x),y[L+2]=Ki(u,h)}function ki(u,h,x,y,L){y[L+0]=Ki(u,h),y[L+1]=Ai(u,h,x),y[L+2]=Ji(u,x)}function Tr(u,h,x,y,L){var R=Ai(u,h,x);h=R<<3&224|Ki(u,h)>>3,y[L+0]=248&Ji(u,x)|R>>5,y[L+1]=h}function eo(u,h,x,y,L){var R=240&Ki(u,h)|15;y[L+0]=240&Ji(u,x)|Ai(u,h,x)>>4,y[L+1]=R}function to(u,h,x,y,L){y[L+0]=255,Qi(u,h,x,y,L+1)}function ta(u,h,x,y,L){ki(u,h,x,y,L),y[L+3]=255}function ra(u,h,x,y,L){Qi(u,h,x,y,L),y[L+3]=255}function rr(u,h){return 0>u?0:u>h?h:u}function ii(u,h,x){T[u]=function(y,L,R,O,F,B,G,oe,ve){for(var W=oe+(-2&ve)*x;oe!=W;)h(y[L+0],R[O+0],F[B+0],G,oe),h(y[L+1],R[O+0],F[B+0],G,oe+x),L+=2,++O,++B,oe+=2*x;1&ve&&h(y[L+0],R[O+0],F[B+0],G,oe)}}function Ao(u,h,x){return x==0?u==0?h==0?6:5:h==0?4:0:x}function Na(u,h,x,y,L){switch(u>>>30){case 3:zn(h,x,y,L,0);break;case 2:Bn(h,x,y,L);break;case 1:Ft(h,x,y,L)}}function dn(u,h){var x,y,L=h.M,R=h.Nb,O=u.oc,F=u.pc+40,B=u.oc,G=u.pc+584,oe=u.oc,ve=u.pc+600;for(x=0;16>x;++x)O[F+32*x-1]=129;for(x=0;8>x;++x)B[G+32*x-1]=129,oe[ve+32*x-1]=129;for(0<L?O[F-1-32]=B[G-1-32]=oe[ve-1-32]=129:(a(O,F-32-1,127,21),a(B,G-32-1,127,9),a(oe,ve-32-1,127,9)),y=0;y<u.za;++y){var W=h.ya[h.aa+y];if(0<y){for(x=-1;16>x;++x)n(O,F+32*x-4,O,F+32*x+12,4);for(x=-1;8>x;++x)n(B,G+32*x-4,B,G+32*x+4,4),n(oe,ve+32*x-4,oe,ve+32*x+4,4)}var se=u.Gd,he=u.Hd+y,Ce=W.ad,me=W.Hc;if(0<L&&(n(O,F-32,se[he].y,0,16),n(B,G-32,se[he].f,0,8),n(oe,ve-32,se[he].ea,0,8)),W.Za){var Se=O,ke=F-32+16;for(0<L&&(y>=u.za-1?a(Se,ke,se[he].y[15],4):n(Se,ke,se[he+1].y,0,4)),x=0;4>x;x++)Se[ke+128+x]=Se[ke+256+x]=Se[ke+384+x]=Se[ke+0+x];for(x=0;16>x;++x,me<<=2)Se=O,ke=F+Q0[x],si[W.Ob[x]](Se,ke),Na(me,Ce,16*+x,Se,ke)}else if(Se=Ao(y,L,W.Ob[0]),To[Se](O,F),me!=0)for(x=0;16>x;++x,me<<=2)Na(me,Ce,16*+x,O,F+Q0[x]);for(x=W.Gc,Se=Ao(y,L,W.Dd),io[Se](B,G),io[Se](oe,ve),me=Ce,Se=B,ke=G,255&(W=0|x)&&(170&W?Ni(me,256,Se,ke):Wt(me,256,Se,ke)),W=oe,me=ve,255&(x>>=8)&&(170&x?Ni(Ce,320,W,me):Wt(Ce,320,W,me)),L<u.Ub-1&&(n(se[he].y,0,O,F+480,16),n(se[he].f,0,B,G+224,8),n(se[he].ea,0,oe,ve+224,8)),x=8*R*u.B,se=u.sa,he=u.ta+16*y+16*R*u.R,Ce=u.qa,W=u.ra+8*y+x,me=u.Ha,Se=u.Ia+8*y+x,x=0;16>x;++x)n(se,he+x*u.R,O,F+32*x,16);for(x=0;8>x;++x)n(Ce,W+x*u.B,B,G+32*x,8),n(me,Se+x*u.B,oe,ve+32*x,8)}}function Mi(u,h,x,y,L,R,O,F,B){var G=[0],oe=[0],ve=0,W=B!=null?B.kd:0,se=B??new Ae;if(u==null||12>x)return 7;se.data=u,se.w=h,se.ha=x,h=[h],x=[x],se.gb=[se.gb];e:{var he=h,Ce=x,me=se.gb;if(t(u!=null),t(Ce!=null),t(me!=null),me[0]=0,12<=Ce[0]&&!r(u,he[0],"RIFF")){if(r(u,he[0]+8,"WEBP")){me=3;break e}var Se=be(u,he[0]+4);if(12>Se||4294967286<Se){me=3;break e}if(W&&Se>Ce[0]-8){me=7;break e}me[0]=Se,he[0]+=12,Ce[0]-=12}me=0}if(me!=0)return me;for(Se=0<se.gb[0],x=x[0];;){e:{var ke=u;Ce=h,me=x;var Le=G,Ne=oe,rt=he=[0];if((Ke=ve=[ve])[0]=0,8>me[0])me=7;else{if(!r(ke,Ce[0],"VP8X")){if(be(ke,Ce[0]+4)!=10){me=3;break e}if(18>me[0]){me=7;break e}var qe=be(ke,Ce[0]+8),_t=1+Pe(ke,Ce[0]+12);if(2147483648<=_t*(ke=1+Pe(ke,Ce[0]+15))){me=3;break e}rt!=null&&(rt[0]=qe),Le!=null&&(Le[0]=_t),Ne!=null&&(Ne[0]=ke),Ce[0]+=18,me[0]-=18,Ke[0]=1}me=0}}if(ve=ve[0],he=he[0],me!=0)return me;if(Ce=!!(2&he),!Se&&ve)return 3;if(R!=null&&(R[0]=!!(16&he)),O!=null&&(O[0]=Ce),F!=null&&(F[0]=0),O=G[0],he=oe[0],ve&&Ce&&B==null){me=0;break}if(4>x){me=7;break}if(Se&&ve||!Se&&!ve&&!r(u,h[0],"ALPH")){x=[x],se.na=[se.na],se.P=[se.P],se.Sa=[se.Sa];e:{qe=u,me=h,Se=x;var Ke=se.gb;Le=se.na,Ne=se.P,rt=se.Sa,_t=22,t(qe!=null),t(Se!=null),ke=me[0];var jt=Se[0];for(t(Le!=null),t(rt!=null),Le[0]=null,Ne[0]=null,rt[0]=0;;){if(me[0]=ke,Se[0]=jt,8>jt){me=7;break e}var jr=be(qe,ke+4);if(4294967286<jr){me=3;break e}var Ct=8+jr+1&-2;if(_t+=Ct,0<Ke&&_t>Ke){me=3;break e}if(!r(qe,ke,"VP8 ")||!r(qe,ke,"VP8L")){me=0;break e}if(jt[0]<Ct){me=7;break e}r(qe,ke,"ALPH")||(Le[0]=qe,Ne[0]=ke+8,rt[0]=jr),ke+=Ct,jt-=Ct}}if(x=x[0],se.na=se.na[0],se.P=se.P[0],se.Sa=se.Sa[0],me!=0)break}x=[x],se.Ja=[se.Ja],se.xa=[se.xa];e:if(Ke=u,me=h,Se=x,Le=se.gb[0],Ne=se.Ja,rt=se.xa,qe=me[0],ke=!r(Ke,qe,"VP8 "),_t=!r(Ke,qe,"VP8L"),t(Ke!=null),t(Se!=null),t(Ne!=null),t(rt!=null),8>Se[0])me=7;else{if(ke||_t){if(Ke=be(Ke,qe+4),12<=Le&&Ke>Le-12){me=3;break e}if(W&&Ke>Se[0]-8){me=7;break e}Ne[0]=Ke,me[0]+=8,Se[0]-=8,rt[0]=_t}else rt[0]=5<=Se[0]&&Ke[qe+0]==47&&!(Ke[qe+4]>>5),Ne[0]=Se[0];me=0}if(x=x[0],se.Ja=se.Ja[0],se.xa=se.xa[0],h=h[0],me!=0)break;if(4294967286<se.Ja)return 3;if(F==null||Ce||(F[0]=se.xa?2:1),O=[O],he=[he],se.xa){if(5>x){me=7;break}F=O,W=he,Ce=R,u==null||5>x?u=0:5<=x&&u[h+0]==47&&!(u[h+4]>>5)?(Se=[0],Ke=[0],Le=[0],ge(Ne=new z,u,h,x),gn(Ne,Se,Ke,Le)?(F!=null&&(F[0]=Se[0]),W!=null&&(W[0]=Ke[0]),Ce!=null&&(Ce[0]=Le[0]),u=1):u=0):u=0}else{if(10>x){me=7;break}F=he,u==null||10>x||!Go(u,h+3,x-3)?u=0:(W=u[h+0]|u[h+1]<<8|u[h+2]<<16,Ce=16383&(u[h+7]<<8|u[h+6]),u=16383&(u[h+9]<<8|u[h+8]),1&W||3<(W>>1&7)||!(W>>4&1)||W>>5>=se.Ja||!Ce||!u?u=0:(O&&(O[0]=Ce),F&&(F[0]=u),u=1))}if(!u||(O=O[0],he=he[0],ve&&(G[0]!=O||oe[0]!=he)))return 3;B!=null&&(B[0]=se,B.offset=h-B.w,t(4294967286>h-B.w),t(B.offset==B.ha-x));break}return me==0||me==7&&ve&&B==null?(R!=null&&(R[0]|=se.na!=null&&0<se.na.length),y!=null&&(y[0]=O),L!=null&&(L[0]=he),0):me}function ko(u,h,x){var y=h.width,L=h.height,R=0,O=0,F=y,B=L;if(h.Da=u!=null&&0<u.Da,h.Da&&(F=u.cd,B=u.bd,R=u.v,O=u.j,11>x||(R&=-2,O&=-2),0>R||0>O||0>=F||0>=B||R+F>y||O+B>L))return 0;if(h.v=R,h.j=O,h.va=R+F,h.o=O+B,h.U=F,h.T=B,h.da=u!=null&&0<u.da,h.da){if(!Fe(F,B,x=[u.ib],R=[u.hb]))return 0;h.ib=x[0],h.hb=R[0]}return h.ob=u!=null&&u.ob,h.Kb=u==null||!u.Sd,h.da&&(h.ob=h.ib<3*y/4&&h.hb<3*L/4,h.Kb=0),1}function K(u){if(u==null)return 2;if(11>u.S){var h=u.f.RGBA;h.fb+=(u.height-1)*h.A,h.A=-h.A}else h=u.f.kb,u=u.height,h.O+=(u-1)*h.fa,h.fa=-h.fa,h.N+=(u-1>>1)*h.Ab,h.Ab=-h.Ab,h.W+=(u-1>>1)*h.Db,h.Db=-h.Db,h.F!=null&&(h.J+=(u-1)*h.lb,h.lb=-h.lb);return 0}function je(u,h,x,y){if(y==null||0>=u||0>=h)return 2;if(x!=null){if(x.Da){var L=x.cd,R=x.bd,O=-2&x.v,F=-2&x.j;if(0>O||0>F||0>=L||0>=R||O+L>u||F+R>h)return 2;u=L,h=R}if(x.da){if(!Fe(u,h,L=[x.ib],R=[x.hb]))return 2;u=L[0],h=R[0]}}y.width=u,y.height=h;e:{var B=y.width,G=y.height;if(u=y.S,0>=B||0>=G||!(u>=qs&&13>u))u=2;else{if(0>=y.Rd&&y.sd==null){O=R=L=h=0;var oe=(F=B*e2[u])*G;if(11>u||(R=(G+1)/2*(h=(B+1)/2),u==12&&(O=(L=B)*G)),(G=s(oe+2*R+O))==null){u=1;break e}y.sd=G,11>u?((B=y.f.RGBA).eb=G,B.fb=0,B.A=F,B.size=oe):((B=y.f.kb).y=G,B.O=0,B.fa=F,B.Fd=oe,B.f=G,B.N=0+oe,B.Ab=h,B.Cd=R,B.ea=G,B.W=0+oe+R,B.Db=h,B.Ed=R,u==12&&(B.F=G,B.J=0+oe+2*R),B.Tc=O,B.lb=L)}if(h=1,L=y.S,R=y.width,O=y.height,L>=qs&&13>L)if(11>L)u=y.f.RGBA,h&=(F=Math.abs(u.A))*(O-1)+R<=u.size,h&=F>=R*e2[L],h&=u.eb!=null;else{u=y.f.kb,F=(R+1)/2,oe=(O+1)/2,B=Math.abs(u.fa),G=Math.abs(u.Ab);var ve=Math.abs(u.Db),W=Math.abs(u.lb),se=W*(O-1)+R;h&=B*(O-1)+R<=u.Fd,h&=G*(oe-1)+F<=u.Cd,h=(h&=ve*(oe-1)+F<=u.Ed)&B>=R&G>=F&ve>=F,h&=u.y!=null,h&=u.f!=null,h&=u.ea!=null,L==12&&(h&=W>=R,h&=se<=u.Tc,h&=u.F!=null)}else h=0;u=h?0:2}}return u!=0||x!=null&&x.fd&&(u=K(y)),u}var He=64,ht=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],bt=24,sr=32,kr=8,lr=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];De("Predictor0","PredictorAdd0"),T.Predictor0=function(){return 4278190080},T.Predictor1=function(u){return u},T.Predictor2=function(u,h,x){return h[x+0]},T.Predictor3=function(u,h,x){return h[x+1]},T.Predictor4=function(u,h,x){return h[x-1]},T.Predictor5=function(u,h,x){return Ye(Ye(u,h[x+1]),h[x+0])},T.Predictor6=function(u,h,x){return Ye(u,h[x-1])},T.Predictor7=function(u,h,x){return Ye(u,h[x+0])},T.Predictor8=function(u,h,x){return Ye(h[x-1],h[x+0])},T.Predictor9=function(u,h,x){return Ye(h[x+0],h[x+1])},T.Predictor10=function(u,h,x){return Ye(Ye(u,h[x-1]),Ye(h[x+0],h[x+1]))},T.Predictor11=function(u,h,x){var y=h[x+0];return 0>=lt(y>>24&255,u>>24&255,(h=h[x-1])>>24&255)+lt(y>>16&255,u>>16&255,h>>16&255)+lt(y>>8&255,u>>8&255,h>>8&255)+lt(255&y,255&u,255&h)?y:u},T.Predictor12=function(u,h,x){var y=h[x+0];return(St((u>>24&255)+(y>>24&255)-((h=h[x-1])>>24&255))<<24|St((u>>16&255)+(y>>16&255)-(h>>16&255))<<16|St((u>>8&255)+(y>>8&255)-(h>>8&255))<<8|St((255&u)+(255&y)-(255&h)))>>>0},T.Predictor13=function(u,h,x){var y=h[x-1];return(st((u=Ye(u,h[x+0]))>>24&255,y>>24&255)<<24|st(u>>16&255,y>>16&255)<<16|st(u>>8&255,y>>8&255)<<8|st(255&u,255&y))>>>0};var nr=T.PredictorAdd0;T.PredictorAdd1=Lt,De("Predictor2","PredictorAdd2"),De("Predictor3","PredictorAdd3"),De("Predictor4","PredictorAdd4"),De("Predictor5","PredictorAdd5"),De("Predictor6","PredictorAdd6"),De("Predictor7","PredictorAdd7"),De("Predictor8","PredictorAdd8"),De("Predictor9","PredictorAdd9"),De("Predictor10","PredictorAdd10"),De("Predictor11","PredictorAdd11"),De("Predictor12","PredictorAdd12"),De("Predictor13","PredictorAdd13");var hn=T.PredictorAdd2;tt("ColorIndexInverseTransform","MapARGB","32b",function(u){return u>>8&255},function(u){return u}),tt("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(u){return u},function(u){return u>>8&255});var Qt,na=T.ColorIndexInverseTransform,Sn=T.MapARGB,Fn=T.VP8LColorIndexInverseTransformAlpha,Mo=T.MapAlpha,jo=T.VP8LPredictorsAdd=[];jo.length=16,(T.VP8LPredictors=[]).length=16,(T.VP8LPredictorsAdd_C=[]).length=16,(T.VP8LPredictors_C=[]).length=16;var No,Io,oi,ji,ai,ro,$r,zn,Bn,Ni,Ft,Wt,xr,Mr,no,os,Ia,Hs,N0,I0,T0,L0,P0,E0,as,D0,R0,O0,F0=s(511),z0=s(2041),B0=s(225),U0=s(767),H0=0,f1=z0,$s=B0,An=U0,Un=F0,qs=0,Vs=1,$0=2,Ys=3,Gs=4,p1=5,q0=6,m1=7,g1=8,Ws=9,x1=10,Wf=[2,3,7],Xf=[3,3,11],V0=[280,256,256,256,40],Zf=[0,1,1,1,0],Jf=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],Kf=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Qf=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],e5=8,v1=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],b1=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ss=null,t5=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],r5=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],Y0=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],n5=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],i5=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],o5=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],a5=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],To=[],si=[],io=[],s5=1,G0=2,Lo=[],Hn=[];Hr("UpsampleRgbLinePair",Qi,3),Hr("UpsampleBgrLinePair",ki,3),Hr("UpsampleRgbaLinePair",ra,4),Hr("UpsampleBgraLinePair",ta,4),Hr("UpsampleArgbLinePair",to,4),Hr("UpsampleRgba4444LinePair",eo,2),Hr("UpsampleRgb565LinePair",Tr,2);var l5=T.UpsampleRgbLinePair,c5=T.UpsampleBgrLinePair,W0=T.UpsampleRgbaLinePair,X0=T.UpsampleBgraLinePair,Z0=T.UpsampleArgbLinePair,J0=T.UpsampleRgba4444LinePair,u5=T.UpsampleRgb565LinePair,Xs=16,Zs=1<<Xs-1,ls=-227,w1=482,d5=6,K0=0,h5=s(256),f5=s(256),p5=s(256),m5=s(256),g5=s(w1-ls),x5=s(w1-ls);ii("YuvToRgbRow",Qi,3),ii("YuvToBgrRow",ki,3),ii("YuvToRgbaRow",ra,4),ii("YuvToBgraRow",ta,4),ii("YuvToArgbRow",to,4),ii("YuvToRgba4444Row",eo,2),ii("YuvToRgb565Row",Tr,2);var Q0=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Js=[0,2,8],v5=[8,7,6,4,4,2,2,2,1,1,1,1],b5=1;this.WebPDecodeRGBA=function(u,h,x,y,L){var R=Vs,O=new de,F=new Et;O.ba=F,F.S=R,F.width=[F.width],F.height=[F.height];var B=F.width,G=F.height,oe=new ct;if(oe==null||u==null)var ve=2;else t(oe!=null),ve=Mi(u,h,x,oe.width,oe.height,oe.Pd,oe.Qd,oe.format,null);if(ve!=0?B=0:(B!=null&&(B[0]=oe.width[0]),G!=null&&(G[0]=oe.height[0]),B=1),B){F.width=F.width[0],F.height=F.height[0],y!=null&&(y[0]=F.width),L!=null&&(L[0]=F.height);e:{if(y=new vo,(L=new Ae).data=u,L.w=h,L.ha=x,L.kd=1,h=[0],t(L!=null),((u=Mi(L.data,L.w,L.ha,null,null,null,h,null,L))==0||u==7)&&h[0]&&(u=4),(h=u)==0){if(t(O!=null),y.data=L.data,y.w=L.w+L.offset,y.ha=L.ha-L.offset,y.put=at,y.ac=Zr,y.bc=ln,y.ma=O,L.xa){if((u=Bi())==null){O=1;break e}if(function(W,se){var he=[0],Ce=[0],me=[0];t:for(;;){if(W==null)return 0;if(se==null)return W.a=2,0;if(W.l=se,W.a=0,ge(W.m,se.data,se.w,se.ha),!gn(W.m,he,Ce,me)){W.a=3;break t}if(W.xb=G0,se.width=he[0],se.height=Ce[0],!Kr(he[0],Ce[0],1,W,null))break t;return 1}return t(W.a!=0),0}(u,y)){if(y=(h=je(y.width,y.height,O.Oa,O.ba))==0){t:{y=u;r:for(;;){if(y==null){y=0;break t}if(t(y.s.yc!=null),t(y.s.Ya!=null),t(0<y.s.Wb),t((x=y.l)!=null),t((L=x.ma)!=null),y.xb!=0){if(y.ca=L.ba,y.tb=L.tb,t(y.ca!=null),!ko(L.Oa,x,Ys)){y.a=2;break r}if(!xi(y,x.width)||x.da)break r;if((x.da||Oe(y.ca.S))&&rn(),11>y.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),y.ca.f.kb.F!=null&&rn()),y.Pb&&0<y.s.ua&&y.s.vb.X==null&&!J(y.s.vb,y.s.Wa.Xa)){y.a=1;break r}y.xb=0}if(!Ar(y,y.V,y.Ba,y.c,y.i,x.o,Dn))break r;L.Dc=y.Ma,y=1;break t}t(y.a!=0),y=0}y=!y}y&&(h=u.a)}else h=u.a}else{if((u=new rs)==null){O=1;break e}if(u.Fa=L.na,u.P=L.P,u.qc=L.Sa,va(u,y)){if((h=je(y.width,y.height,O.Oa,O.ba))==0){if(u.Aa=0,x=O.Oa,t((L=u)!=null),x!=null){if(0<(B=0>(B=x.Md)?0:100<B?255:255*B/100)){for(G=oe=0;4>G;++G)12>(ve=L.pb[G]).lc&&(ve.ia=B*v5[0>ve.lc?0:ve.lc]>>3),oe|=ve.ia;oe&&(alert("todo:VP8InitRandom"),L.ia=1)}L.Ga=x.Id,100<L.Ga?L.Ga=100:0>L.Ga&&(L.Ga=0)}(function(W,se){if(W==null)return 0;if(se==null)return or(W,2,"NULL VP8Io parameter in VP8Decode().");if(!W.cb&&!va(W,se))return 0;if(t(W.cb),se.ac==null||se.ac(se)){se.ob&&(W.L=0);var he=Js[W.L];if(W.L==2?(W.yb=0,W.zb=0):(W.yb=se.v-he>>4,W.zb=se.j-he>>4,0>W.yb&&(W.yb=0),0>W.zb&&(W.zb=0)),W.Va=se.o+15+he>>4,W.Hb=se.va+15+he>>4,W.Hb>W.za&&(W.Hb=W.za),W.Va>W.Ub&&(W.Va=W.Ub),0<W.L){var Ce=W.ed;for(he=0;4>he;++he){var me;if(W.Qa.Cb){var Se=W.Qa.Lb[he];W.Qa.Fb||(Se+=Ce.Tb)}else Se=Ce.Tb;for(me=0;1>=me;++me){var ke=W.gd[he][me],Le=Se;if(Ce.Pc&&(Le+=Ce.vd[0],me&&(Le+=Ce.od[0])),0<(Le=0>Le?0:63<Le?63:Le)){var Ne=Le;0<Ce.wb&&(Ne=4<Ce.wb?Ne>>2:Ne>>1)>9-Ce.wb&&(Ne=9-Ce.wb),1>Ne&&(Ne=1),ke.dd=Ne,ke.tc=2*Le+Ne,ke.ld=40<=Le?2:15<=Le?1:0}else ke.tc=0;ke.La=me}}}he=0}else or(W,6,"Frame setup failed"),he=W.a;if(he=he==0){if(he){W.$c=0,0<W.Aa||(W.Ic=b5);t:{he=W.Ic,Ce=4*(Ne=W.za);var rt=32*Ne,qe=Ne+1,_t=0<W.L?Ne*(0<W.Aa?2:1):0,Ke=(W.Aa==2?2:1)*Ne;if((ke=Ce+832+(me=3*(16*he+Js[W.L])/2*rt)+(Se=W.Fa!=null&&0<W.Fa.length?W.Kc.c*W.Kc.i:0))!=ke)he=0;else{if(ke>W.Vb){if(W.Vb=0,W.Ec=s(ke),W.Fc=0,W.Ec==null){he=or(W,1,"no memory during frame initialization.");break t}W.Vb=ke}ke=W.Ec,Le=W.Fc,W.Ac=ke,W.Bc=Le,Le+=Ce,W.Gd=l(rt,xa),W.Hd=0,W.rb=l(qe+1,bi),W.sb=1,W.wa=_t?l(_t,Br):null,W.Y=0,W.D.Nb=0,W.D.wa=W.wa,W.D.Y=W.Y,0<W.Aa&&(W.D.Y+=Ne),t(!0),W.oc=ke,W.pc=Le,Le+=832,W.ya=l(Ke,xo),W.aa=0,W.D.ya=W.ya,W.D.aa=W.aa,W.Aa==2&&(W.D.aa+=Ne),W.R=16*Ne,W.B=8*Ne,Ne=(rt=Js[W.L])*W.R,rt=rt/2*W.B,W.sa=ke,W.ta=Le+Ne,W.qa=W.sa,W.ra=W.ta+16*he*W.R+rt,W.Ha=W.qa,W.Ia=W.ra+8*he*W.B+rt,W.$c=0,Le+=me,W.mb=Se?ke:null,W.nb=Se?Le:null,t(Le+Se<=W.Fc+W.Vb),Rn(W),a(W.Ac,W.Bc,0,Ce),he=1}}if(he){if(se.ka=0,se.y=W.sa,se.O=W.ta,se.f=W.qa,se.N=W.ra,se.ea=W.Ha,se.Vd=W.Ia,se.fa=W.R,se.Rc=W.B,se.F=null,se.J=0,!H0){for(he=-255;255>=he;++he)F0[255+he]=0>he?-he:he;for(he=-1020;1020>=he;++he)z0[1020+he]=-128>he?-128:127<he?127:he;for(he=-112;112>=he;++he)B0[112+he]=-16>he?-16:15<he?15:he;for(he=-255;510>=he;++he)U0[255+he]=0>he?0:255<he?255:he;H0=1}$r=Hi,zn=ba,Ni=ns,Ft=Ur,Wt=Xo,Bn=Wo,xr=Xi,Mr=So,no=g,os=N,Ia=Cn,Hs=Qo,N0=V,I0=te,T0=Si,L0=ri,P0=ja,E0=ni,si[0]=ka,si[1]=wo,si[2]=Sa,si[3]=Aa,si[4]=is,si[5]=yn,si[6]=un,si[7]=_i,si[8]=On,si[9]=Zo,To[0]=ti,To[1]=ya,To[2]=_a,To[3]=yo,To[4]=Ca,To[5]=yi,To[6]=_o,io[0]=Vi,io[1]=wa,io[2]=$i,io[3]=Ci,io[4]=Co,io[5]=Ma,io[6]=Jo,he=1}else he=0}he&&(he=function(jt,jr){for(jt.M=0;jt.M<jt.Va;++jt.M){var Ct,Qe=jt.Jc[jt.M&jt.Xb],Re=jt.m,vr=jt;for(Ct=0;Ct<vr.za;++Ct){var wt=Re,It=vr,er=It.Ac,Rr=It.Bc+4*Ct,nn=It.zc,fr=It.ya[It.aa+Ct];if(It.Qa.Bb?fr.$b=ce(wt,It.Pa.jb[0])?2+ce(wt,It.Pa.jb[2]):ce(wt,It.Pa.jb[1]):fr.$b=0,It.kc&&(fr.Ad=ce(wt,It.Bd)),fr.Za=!ce(wt,145)+0,fr.Za){var qr=fr.Ob,on=0;for(It=0;4>It;++It){var Nr,Dt=nn[0+It];for(Nr=0;4>Nr;++Nr){Dt=i5[er[Rr+Nr]][Dt];for(var Ut=Y0[ce(wt,Dt[0])];0<Ut;)Ut=Y0[2*Ut+ce(wt,Dt[Ut])];Dt=-Ut,er[Rr+Nr]=Dt}n(qr,on,er,Rr,4),on+=4,nn[0+It]=Dt}}else Dt=ce(wt,156)?ce(wt,128)?1:3:ce(wt,163)?2:0,fr.Ob[0]=Dt,a(er,Rr,Dt,4),a(nn,0,Dt,4);fr.Dd=ce(wt,142)?ce(wt,114)?ce(wt,183)?1:3:2:0}if(vr.m.Ka)return or(jt,7,"Premature end-of-partition0 encountered.");for(;jt.ja<jt.za;++jt.ja){if(vr=Qe,wt=(Re=jt).rb[Re.sb-1],er=Re.rb[Re.sb+Re.ja],Ct=Re.ya[Re.aa+Re.ja],Rr=Re.kc?Ct.Ad:0)wt.la=er.la=0,Ct.Za||(wt.Na=er.Na=0),Ct.Hc=0,Ct.Gc=0,Ct.ia=0;else{var pr,Ht;if(wt=er,er=vr,Rr=Re.Pa.Xc,nn=Re.ya[Re.aa+Re.ja],fr=Re.pb[nn.$b],It=nn.ad,qr=0,on=Re.rb[Re.sb-1],Dt=Nr=0,a(It,qr,0,384),nn.Za)var Or=0,li=Rr[3];else{Ut=s(16);var br=wt.Na+on.Na;if(br=ss(er,Rr[1],br,fr.Eb,0,Ut,0),wt.Na=on.Na=(0<br)+0,1<br)$r(Ut,0,It,qr);else{var fn=Ut[0]+3>>3;for(Ut=0;256>Ut;Ut+=16)It[qr+Ut]=fn}Or=1,li=Rr[0]}var Xt=15&wt.la,Ir=15&on.la;for(Ut=0;4>Ut;++Ut){var kn=1&Ir;for(fn=Ht=0;4>fn;++fn)Xt=Xt>>1|(kn=(br=ss(er,li,br=kn+(1&Xt),fr.Sc,Or,It,qr))>Or)<<7,Ht=Ht<<2|(3<br?3:1<br?2:It[qr+0]!=0),qr+=16;Xt>>=4,Ir=Ir>>1|kn<<7,Nr=(Nr<<8|Ht)>>>0}for(li=Xt,Or=Ir>>4,pr=0;4>pr;pr+=2){for(Ht=0,Xt=wt.la>>4+pr,Ir=on.la>>4+pr,Ut=0;2>Ut;++Ut){for(kn=1&Ir,fn=0;2>fn;++fn)br=kn+(1&Xt),Xt=Xt>>1|(kn=0<(br=ss(er,Rr[2],br,fr.Qc,0,It,qr)))<<3,Ht=Ht<<2|(3<br?3:1<br?2:It[qr+0]!=0),qr+=16;Xt>>=2,Ir=Ir>>1|kn<<5}Dt|=Ht<<4*pr,li|=Xt<<4<<pr,Or|=(240&Ir)<<pr}wt.la=li,on.la=Or,nn.Hc=Nr,nn.Gc=Dt,nn.ia=43690&Dt?0:fr.ia,Rr=!(Nr|Dt)}if(0<Re.L&&(Re.wa[Re.Y+Re.ja]=Re.gd[Ct.$b][Ct.Za],Re.wa[Re.Y+Re.ja].La|=!Rr),vr.Ka)return or(jt,7,"Premature end-of-file encountered.")}if(Rn(jt),Re=jr,vr=1,Ct=(Qe=jt).D,wt=0<Qe.L&&Qe.M>=Qe.zb&&Qe.M<=Qe.Va,Qe.Aa==0)t:{if(Ct.M=Qe.M,Ct.uc=wt,dn(Qe,Ct),vr=1,Ct=(Ht=Qe.D).Nb,wt=(Dt=Js[Qe.L])*Qe.R,er=Dt/2*Qe.B,Ut=16*Ct*Qe.R,fn=8*Ct*Qe.B,Rr=Qe.sa,nn=Qe.ta-wt+Ut,fr=Qe.qa,It=Qe.ra-er+fn,qr=Qe.Ha,on=Qe.Ia-er+fn,Ir=(Xt=Ht.M)==0,Nr=Xt>=Qe.Va-1,Qe.Aa==2&&dn(Qe,Ht),Ht.uc)for(kn=(br=Qe).D.M,t(br.D.uc),Ht=br.yb;Ht<br.Hb;++Ht){Or=Ht,li=kn;var an=(Mn=(Fr=br).D).Nb;pr=Fr.R;var Mn=Mn.wa[Mn.Y+Or],jn=Fr.sa,pn=Fr.ta+16*an*pr+16*Or,Nn=Mn.dd,Jt=Mn.tc;if(Jt!=0)if(t(3<=Jt),Fr.L==1)0<Or&&L0(jn,pn,pr,Jt+4),Mn.La&&E0(jn,pn,pr,Jt),0<li&&T0(jn,pn,pr,Jt+4),Mn.La&&P0(jn,pn,pr,Jt);else{var In=Fr.B,ci=Fr.qa,ia=Fr.ra+8*an*In+8*Or,oo=Fr.Ha,Fr=Fr.Ia+8*an*In+8*Or;an=Mn.ld,0<Or&&(Mr(jn,pn,pr,Jt+4,Nn,an),os(ci,ia,oo,Fr,In,Jt+4,Nn,an)),Mn.La&&(Hs(jn,pn,pr,Jt,Nn,an),I0(ci,ia,oo,Fr,In,Jt,Nn,an)),0<li&&(xr(jn,pn,pr,Jt+4,Nn,an),no(ci,ia,oo,Fr,In,Jt+4,Nn,an)),Mn.La&&(Ia(jn,pn,pr,Jt,Nn,an),N0(ci,ia,oo,Fr,In,Jt,Nn,an))}}if(Qe.ia&&alert("todo:DitherRow"),Re.put!=null){if(Ht=16*Xt,Xt=16*(Xt+1),Ir?(Re.y=Qe.sa,Re.O=Qe.ta+Ut,Re.f=Qe.qa,Re.N=Qe.ra+fn,Re.ea=Qe.Ha,Re.W=Qe.Ia+fn):(Ht-=Dt,Re.y=Rr,Re.O=nn,Re.f=fr,Re.N=It,Re.ea=qr,Re.W=on),Nr||(Xt-=Dt),Xt>Re.o&&(Xt=Re.o),Re.F=null,Re.J=null,Qe.Fa!=null&&0<Qe.Fa.length&&Ht<Xt&&(Re.J=ur(Qe,Re,Ht,Xt-Ht),Re.F=Qe.mb,Re.F==null&&Re.F.length==0)){vr=or(Qe,3,"Could not decode alpha data.");break t}Ht<Re.j&&(Dt=Re.j-Ht,Ht=Re.j,t(!(1&Dt)),Re.O+=Qe.R*Dt,Re.N+=Qe.B*(Dt>>1),Re.W+=Qe.B*(Dt>>1),Re.F!=null&&(Re.J+=Re.width*Dt)),Ht<Xt&&(Re.O+=Re.v,Re.N+=Re.v>>1,Re.W+=Re.v>>1,Re.F!=null&&(Re.J+=Re.v),Re.ka=Ht-Re.j,Re.U=Re.va-Re.v,Re.T=Xt-Ht,vr=Re.put(Re))}Ct+1!=Qe.Ic||Nr||(n(Qe.sa,Qe.ta-wt,Rr,nn+16*Qe.R,wt),n(Qe.qa,Qe.ra-er,fr,It+8*Qe.B,er),n(Qe.Ha,Qe.Ia-er,qr,on+8*Qe.B,er))}if(!vr)return or(jt,6,"Output aborted.")}return 1}(W,se)),se.bc!=null&&se.bc(se),he&=1}return he?(W.cb=0,he):0})(u,y)||(h=u.a)}}else h=u.a}h==0&&O.Oa!=null&&O.Oa.fd&&(h=K(O.ba))}O=h}R=O!=0?null:11>R?F.f.RGBA.eb:F.f.kb.y}else R=null;return R};var e2=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(T,X){for(var C="",E=0;E<4;E++)C+=String.fromCharCode(T[X++]);return C}function p(T,X){return T[X+0]|T[X+1]<<8}function v(T,X){return(T[X+0]|T[X+1]<<8|T[X+2]<<16)>>>0}function S(T,X){return(T[X+0]|T[X+1]<<8|T[X+2]<<16|T[X+3]<<24)>>>0}new d;var m=[0],w=[0],_=[],j=new d,M=e,I=function(T,X){var C={},E=0,U=!1,Y=0,ie=0;if(C.frames=[],!function(A,z){for(var q=0;q<4;q++)if(A[z+q]!="RIFF".charCodeAt(q))return!0;return!1}(T,X)){for(S(T,X+=4),X+=8;X<T.length;){var le=f(T,X),fe=S(T,X+=4);X+=4;var ne=fe+(1&fe);switch(le){case"VP8 ":case"VP8L":C.frames[E]===void 0&&(C.frames[E]={}),(xe=C.frames[E]).src_off=U?ie:X-8,xe.src_size=Y+fe+8,E++,U&&(U=!1,Y=0,ie=0);break;case"VP8X":(xe=C.header={}).feature_flags=T[X];var ge=X+4;xe.canvas_width=1+v(T,ge),ge+=3,xe.canvas_height=1+v(T,ge),ge+=3;break;case"ALPH":U=!0,Y=ne+8,ie=X-8;break;case"ANIM":(xe=C.header).bgcolor=S(T,X),ge=X+4,xe.loop_count=p(T,ge),ge+=2;break;case"ANMF":var we,xe;(xe=C.frames[E]={}).offset_x=2*v(T,X),X+=3,xe.offset_y=2*v(T,X),X+=3,xe.width=1+v(T,X),X+=3,xe.height=1+v(T,X),X+=3,xe.duration=v(T,X),X+=3,we=T[X++],xe.dispose=1&we,xe.blend=we>>1&1}le!="ANMF"&&(X+=ne)}return C}}(M,0);I.response=M,I.rgbaoutput=!0,I.dataurl=!1;var P=I.header?I.header:null,D=I.frames?I.frames:null;if(P){P.loop_counter=P.loop_count,m=[P.canvas_height],w=[P.canvas_width];for(var $=0;$<D.length&&D[$].blend!=0;$++);}var H=D[0],Q=j.WebPDecodeRGBA(M,H.src_off,H.src_size,w,m);H.rgba=Q,H.imgwidth=w[0],H.imgheight=m[0];for(var Z=0;Z<w[0]*m[0]*4;Z++)_[Z]=Q[Z];return this.width=w,this.height=m,this.data=_,this}(function(e){var t,r,n,a,s,l,c,d,f,p=function(A){return A=A||{},this.isStrokeTransparent=A.isStrokeTransparent||!1,this.strokeOpacity=A.strokeOpacity||1,this.strokeStyle=A.strokeStyle||"#000000",this.fillStyle=A.fillStyle||"#000000",this.isFillTransparent=A.isFillTransparent||!1,this.fillOpacity=A.fillOpacity||1,this.font=A.font||"10px sans-serif",this.textBaseline=A.textBaseline||"alphabetic",this.textAlign=A.textAlign||"left",this.lineWidth=A.lineWidth||1,this.lineJoin=A.lineJoin||"miter",this.lineCap=A.lineCap||"butt",this.path=A.path||[],this.transform=A.transform!==void 0?A.transform.clone():new d,this.globalCompositeOperation=A.globalCompositeOperation||"normal",this.globalAlpha=A.globalAlpha||1,this.clip_path=A.clip_path||[],this.currentPoint=A.currentPoint||new l,this.miterLimit=A.miterLimit||10,this.lastPoint=A.lastPoint||new l,this.lineDashOffset=A.lineDashOffset||0,this.lineDash=A.lineDash||[],this.margin=A.margin||[0,0,0,0],this.prevPageLastElemOffset=A.prevPageLastElemOffset||0,this.ignoreClearRect=typeof A.ignoreClearRect!="boolean"||A.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new v(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,a=this.internal.getHorizontalCoordinate,s=this.internal.getVerticalCoordinate,l=this.internal.Point,c=this.internal.Rectangle,d=this.internal.Matrix,f=new p}]);var v=function(A){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var z=A;Object.defineProperty(this,"pdf",{get:function(){return z}});var q=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return q},set:function(be){q=!!be}});var ee=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return ee},set:function(be){ee=!!be}});var re=0;Object.defineProperty(this,"posX",{get:function(){return re},set:function(be){isNaN(be)||(re=be)}});var ae=0;Object.defineProperty(this,"posY",{get:function(){return ae},set:function(be){isNaN(be)||(ae=be)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(be){var J;typeof be=="number"?J=[be,be,be,be]:((J=new Array(4))[0]=be[0],J[1]=be.length>=2?be[1]:J[0],J[2]=be.length>=3?be[2]:J[0],J[3]=be.length>=4?be[3]:J[1]),f.margin=J}});var ue=!1;Object.defineProperty(this,"autoPaging",{get:function(){return ue},set:function(be){ue=be}});var pe=0;Object.defineProperty(this,"lastBreak",{get:function(){return pe},set:function(be){pe=be}});var ce=[];Object.defineProperty(this,"pageBreaks",{get:function(){return ce},set:function(be){ce=be}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(be){be instanceof p&&(f=be)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(be){f.path=be}});var _e=[];Object.defineProperty(this,"ctxStack",{get:function(){return _e},set:function(be){_e=be}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(be){var J;J=S(be),this.ctx.fillStyle=J.style,this.ctx.isFillTransparent=J.a===0,this.ctx.fillOpacity=J.a,this.pdf.setFillColor(J.r,J.g,J.b,{a:J.a}),this.pdf.setTextColor(J.r,J.g,J.b,{a:J.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(be){var J=S(be);this.ctx.strokeStyle=J.style,this.ctx.isStrokeTransparent=J.a===0,this.ctx.strokeOpacity=J.a,J.a===0?this.pdf.setDrawColor(255,255,255):(J.a,this.pdf.setDrawColor(J.r,J.g,J.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(be){["butt","round","square"].indexOf(be)!==-1&&(this.ctx.lineCap=be,this.pdf.setLineCap(be))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(be){isNaN(be)||(this.ctx.lineWidth=be,this.pdf.setLineWidth(be))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(be){["bevel","round","miter"].indexOf(be)!==-1&&(this.ctx.lineJoin=be,this.pdf.setLineJoin(be))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(be){isNaN(be)||(this.ctx.miterLimit=be,this.pdf.setMiterLimit(be))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(be){this.ctx.textBaseline=be}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(be){["right","end","center","left","start"].indexOf(be)!==-1&&(this.ctx.textAlign=be)}});var Ie=null,Pe=null;Object.defineProperty(this,"fontFaces",{get:function(){return Pe},set:function(be){Ie=null,Pe=be}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(be){var J;if(this.ctx.font=be,(J=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(be))!==null){var Ve=J[1];J[2];var Je=J[3],Fe=J[4];J[5];var Te=J[6],Be=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Fe)[2];Fe=Math.floor(Be==="px"?parseFloat(Fe)*this.pdf.internal.scaleFactor:Be==="em"?parseFloat(Fe)*this.pdf.getFontSize():parseFloat(Fe)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Fe);var De=function(ot){var tt,yt,At=[],Ue=ot.trim();if(Ue==="")return ic;if(Ue in Gu)return[Gu[Ue]];for(;Ue!=="";){switch(yt=null,tt=(Ue=Xu(Ue)).charAt(0)){case'"':case"'":yt=t9(Ue.substring(1),tt);break;default:yt=r9(Ue)}if(yt===null||(At.push(yt[0]),(Ue=Xu(yt[1]))!==""&&Ue.charAt(0)!==","))return ic;Ue=Ue.replace(/^,/,"")}return At}(Te);if(this.fontFaces){var it=function(ot,tt){if(Ie===null){var yt=function(At){var Ue=[];return Object.keys(At).forEach(function(dt){At[dt].forEach(function(Pt){var ye=null;switch(Pt){case"bold":ye={family:dt,weight:"bold"};break;case"italic":ye={family:dt,style:"italic"};break;case"bolditalic":ye={family:dt,weight:"bold",style:"italic"};break;case"":case"normal":ye={family:dt}}ye!==null&&(ye.ref={name:dt,style:Pt},Ue.push(ye))})}),Ue}(ot.getFontList());Ie=function(At){for(var Ue={},dt=0;dt<At.length;++dt){var Pt=nc(At[dt]),ye=Pt.family,ze=Pt.stretch,Oe=Pt.style,vt=Pt.weight;Ue[ye]=Ue[ye]||{},Ue[ye][ze]=Ue[ye][ze]||{},Ue[ye][ze][Oe]=Ue[ye][ze][Oe]||{},Ue[ye][ze][Oe][vt]=Pt}return Ue}(yt.concat(tt))}return Ie}(this.pdf,this.fontFaces),Ye=De.map(function(ot){return{family:ot,stretch:"normal",weight:Je,style:Ve}}),St=function(ot,tt,yt){for(var At=(yt=yt||{}).defaultFontFamily||"times",Ue=Object.assign({},e9,yt.genericFontFamilies||{}),dt=null,Pt=null,ye=0;ye<tt.length;++ye)if(Ue[(dt=nc(tt[ye])).family]&&(dt.family=Ue[dt.family]),ot.hasOwnProperty(dt.family)){Pt=ot[dt.family];break}if(!(Pt=Pt||ot[At]))throw new Error("Could not find a font-family for the rule '"+Wu(dt)+"' and default family '"+At+"'.");if(Pt=function(ze,Oe){if(Oe[ze])return Oe[ze];var vt=Wc[ze],qt=vt<=Wc.normal?-1:1,Et=Yu(Oe,Of,vt,qt);if(!Et)throw new Error("Could not find a matching font-stretch value for "+ze);return Et}(dt.stretch,Pt),Pt=function(ze,Oe){if(Oe[ze])return Oe[ze];for(var vt=Rf[ze],qt=0;qt<vt.length;++qt)if(Oe[vt[qt]])return Oe[vt[qt]];throw new Error("Could not find a matching font-style for "+ze)}(dt.style,Pt),!(Pt=function(ze,Oe){if(Oe[ze])return Oe[ze];if(ze===400&&Oe[500])return Oe[500];if(ze===500&&Oe[400])return Oe[400];var vt=Qb[ze],qt=Yu(Oe,Ff,vt,ze<400?-1:1);if(!qt)throw new Error("Could not find a matching font-weight for value "+ze);return qt}(dt.weight,Pt)))throw new Error("Failed to resolve a font for the rule '"+Wu(dt)+"'.");return Pt}(it,Ye);this.pdf.setFont(St.ref.name,St.ref.style)}else{var st="";(Je==="bold"||parseInt(Je,10)>=700||Ve==="bold")&&(st="bold"),Ve==="italic"&&(st+="italic"),st.length===0&&(st="normal");for(var lt="",Lt={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},ut=0;ut<De.length;ut++){if(this.pdf.internal.getFont(De[ut],st,{noFallback:!0,disableWarning:!0})!==void 0){lt=De[ut];break}if(st==="bolditalic"&&this.pdf.internal.getFont(De[ut],"bold",{noFallback:!0,disableWarning:!0})!==void 0)lt=De[ut],st="bold";else if(this.pdf.internal.getFont(De[ut],"normal",{noFallback:!0,disableWarning:!0})!==void 0){lt=De[ut],st="normal";break}}if(lt===""){for(var et=0;et<De.length;et++)if(Lt[De[et]]){lt=Lt[De[et]];break}}lt=lt===""?"Times":lt,this.pdf.setFont(lt,st)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(be){this.ctx.globalCompositeOperation=be}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(be){this.ctx.globalAlpha=be}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(be){this.ctx.lineDashOffset=be,xe.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(be){this.ctx.lineDash=be,xe.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(be){this.ctx.ignoreClearRect=!!be}})};v.prototype.setLineDash=function(A){this.lineDash=A},v.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},v.prototype.fill=function(){D.call(this,"fill",!1)},v.prototype.stroke=function(){D.call(this,"stroke",!1)},v.prototype.beginPath=function(){this.path=[{type:"begin"}]},v.prototype.moveTo=function(A,z){if(isNaN(A)||isNaN(z))throw Zt.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var q=this.ctx.transform.applyToPoint(new l(A,z));this.path.push({type:"mt",x:q.x,y:q.y}),this.ctx.lastPoint=new l(A,z)},v.prototype.closePath=function(){var A=new l(0,0),z=0;for(z=this.path.length-1;z!==-1;z--)if(this.path[z].type==="begin"&&$t(this.path[z+1])==="object"&&typeof this.path[z+1].x=="number"){A=new l(this.path[z+1].x,this.path[z+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new l(A.x,A.y)},v.prototype.lineTo=function(A,z){if(isNaN(A)||isNaN(z))throw Zt.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var q=this.ctx.transform.applyToPoint(new l(A,z));this.path.push({type:"lt",x:q.x,y:q.y}),this.ctx.lastPoint=new l(q.x,q.y)},v.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),D.call(this,null,!0)},v.prototype.quadraticCurveTo=function(A,z,q,ee){if(isNaN(q)||isNaN(ee)||isNaN(A)||isNaN(z))throw Zt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var re=this.ctx.transform.applyToPoint(new l(q,ee)),ae=this.ctx.transform.applyToPoint(new l(A,z));this.path.push({type:"qct",x1:ae.x,y1:ae.y,x:re.x,y:re.y}),this.ctx.lastPoint=new l(re.x,re.y)},v.prototype.bezierCurveTo=function(A,z,q,ee,re,ae){if(isNaN(re)||isNaN(ae)||isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee))throw Zt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var ue=this.ctx.transform.applyToPoint(new l(re,ae)),pe=this.ctx.transform.applyToPoint(new l(A,z)),ce=this.ctx.transform.applyToPoint(new l(q,ee));this.path.push({type:"bct",x1:pe.x,y1:pe.y,x2:ce.x,y2:ce.y,x:ue.x,y:ue.y}),this.ctx.lastPoint=new l(ue.x,ue.y)},v.prototype.arc=function(A,z,q,ee,re,ae){if(isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee)||isNaN(re))throw Zt.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ae=!!ae,!this.ctx.transform.isIdentity){var ue=this.ctx.transform.applyToPoint(new l(A,z));A=ue.x,z=ue.y;var pe=this.ctx.transform.applyToPoint(new l(0,q)),ce=this.ctx.transform.applyToPoint(new l(0,0));q=Math.sqrt(Math.pow(pe.x-ce.x,2)+Math.pow(pe.y-ce.y,2))}Math.abs(re-ee)>=2*Math.PI&&(ee=0,re=2*Math.PI),this.path.push({type:"arc",x:A,y:z,radius:q,startAngle:ee,endAngle:re,counterclockwise:ae})},v.prototype.arcTo=function(A,z,q,ee,re){throw new Error("arcTo not implemented.")},v.prototype.rect=function(A,z,q,ee){if(isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee))throw Zt.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(A,z),this.lineTo(A+q,z),this.lineTo(A+q,z+ee),this.lineTo(A,z+ee),this.lineTo(A,z),this.lineTo(A+q,z),this.lineTo(A,z)},v.prototype.fillRect=function(A,z,q,ee){if(isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee))throw Zt.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var re={};this.lineCap!=="butt"&&(re.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(re.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(A,z,q,ee),this.fill(),re.hasOwnProperty("lineCap")&&(this.lineCap=re.lineCap),re.hasOwnProperty("lineJoin")&&(this.lineJoin=re.lineJoin)}},v.prototype.strokeRect=function(A,z,q,ee){if(isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee))throw Zt.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");w.call(this)||(this.beginPath(),this.rect(A,z,q,ee),this.stroke())},v.prototype.clearRect=function(A,z,q,ee){if(isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee))throw Zt.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(A,z,q,ee))},v.prototype.save=function(A){A=typeof A!="boolean"||A;for(var z=this.pdf.internal.getCurrentPageInfo().pageNumber,q=0;q<this.pdf.internal.getNumberOfPages();q++)this.pdf.setPage(q+1),this.pdf.internal.out("q");if(this.pdf.setPage(z),A){this.ctx.fontSize=this.pdf.internal.getFontSize();var ee=new p(this.ctx);this.ctxStack.push(this.ctx),this.ctx=ee}},v.prototype.restore=function(A){A=typeof A!="boolean"||A;for(var z=this.pdf.internal.getCurrentPageInfo().pageNumber,q=0;q<this.pdf.internal.getNumberOfPages();q++)this.pdf.setPage(q+1),this.pdf.internal.out("Q");this.pdf.setPage(z),A&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},v.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var S=function(A){var z,q,ee,re;if(A.isCanvasGradient===!0&&(A=A.getColor()),!A)return{r:0,g:0,b:0,a:0,style:A};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(A))z=0,q=0,ee=0,re=0;else{var ae=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(A);if(ae!==null)z=parseInt(ae[1]),q=parseInt(ae[2]),ee=parseInt(ae[3]),re=1;else if((ae=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(A))!==null)z=parseInt(ae[1]),q=parseInt(ae[2]),ee=parseInt(ae[3]),re=parseFloat(ae[4]);else{if(re=1,typeof A=="string"&&A.charAt(0)!=="#"){var ue=new Nf(A);A=ue.ok?ue.toHex():"#000000"}A.length===4?(z=A.substring(1,2),z+=z,q=A.substring(2,3),q+=q,ee=A.substring(3,4),ee+=ee):(z=A.substring(1,3),q=A.substring(3,5),ee=A.substring(5,7)),z=parseInt(z,16),q=parseInt(q,16),ee=parseInt(ee,16)}}return{r:z,g:q,b:ee,a:re,style:A}},m=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},w=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};v.prototype.fillText=function(A,z,q,ee){if(isNaN(z)||isNaN(q)||typeof A!="string")throw Zt.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(ee=isNaN(ee)?void 0:ee,!m.call(this)){var re=ne(this.ctx.transform.rotation),ae=this.ctx.transform.scaleX;E.call(this,{text:A,x:z,y:q,scale:ae,angle:re,align:this.textAlign,maxWidth:ee})}},v.prototype.strokeText=function(A,z,q,ee){if(isNaN(z)||isNaN(q)||typeof A!="string")throw Zt.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!w.call(this)){ee=isNaN(ee)?void 0:ee;var re=ne(this.ctx.transform.rotation),ae=this.ctx.transform.scaleX;E.call(this,{text:A,x:z,y:q,scale:ae,renderingMode:"stroke",angle:re,align:this.textAlign,maxWidth:ee})}},v.prototype.measureText=function(A){if(typeof A!="string")throw Zt.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var z=this.pdf,q=this.pdf.internal.scaleFactor,ee=z.internal.getFontSize(),re=z.getStringUnitWidth(A)*ee/z.internal.scaleFactor;return new function(ae){var ue=(ae=ae||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return ue}}),this}({width:re*=Math.round(96*q/72*1e4)/1e4})},v.prototype.scale=function(A,z){if(isNaN(A)||isNaN(z))throw Zt.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var q=new d(A,0,0,z,0,0);this.ctx.transform=this.ctx.transform.multiply(q)},v.prototype.rotate=function(A){if(isNaN(A))throw Zt.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var z=new d(Math.cos(A),Math.sin(A),-Math.sin(A),Math.cos(A),0,0);this.ctx.transform=this.ctx.transform.multiply(z)},v.prototype.translate=function(A,z){if(isNaN(A)||isNaN(z))throw Zt.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var q=new d(1,0,0,1,A,z);this.ctx.transform=this.ctx.transform.multiply(q)},v.prototype.transform=function(A,z,q,ee,re,ae){if(isNaN(A)||isNaN(z)||isNaN(q)||isNaN(ee)||isNaN(re)||isNaN(ae))throw Zt.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var ue=new d(A,z,q,ee,re,ae);this.ctx.transform=this.ctx.transform.multiply(ue)},v.prototype.setTransform=function(A,z,q,ee,re,ae){A=isNaN(A)?1:A,z=isNaN(z)?0:z,q=isNaN(q)?0:q,ee=isNaN(ee)?1:ee,re=isNaN(re)?0:re,ae=isNaN(ae)?0:ae,this.ctx.transform=new d(A,z,q,ee,re,ae)};var _=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};v.prototype.drawImage=function(A,z,q,ee,re,ae,ue,pe,ce){var _e=this.pdf.getImageProperties(A),Ie=1,Pe=1,be=1,J=1;ee!==void 0&&pe!==void 0&&(be=pe/ee,J=ce/re,Ie=_e.width/ee*pe/ee,Pe=_e.height/re*ce/re),ae===void 0&&(ae=z,ue=q,z=0,q=0),ee!==void 0&&pe===void 0&&(pe=ee,ce=re),ee===void 0&&pe===void 0&&(pe=_e.width,ce=_e.height);for(var Ve,Je=this.ctx.transform.decompose(),Fe=ne(Je.rotate.shx),Te=new d,Be=(Te=(Te=(Te=Te.multiply(Je.translate)).multiply(Je.skew)).multiply(Je.scale)).applyToRectangle(new c(ae-z*be,ue-q*J,ee*Ie,re*Pe)),De=j.call(this,Be),it=[],Ye=0;Ye<De.length;Ye+=1)it.indexOf(De[Ye])===-1&&it.push(De[Ye]);if(P(it),this.autoPaging)for(var St=it[0],st=it[it.length-1],lt=St;lt<st+1;lt++){this.pdf.setPage(lt);var Lt=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],ut=lt===1?this.posY+this.margin[0]:this.margin[0],et=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],ot=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],tt=lt===1?0:et+(lt-2)*ot;if(this.ctx.clip_path.length!==0){var yt=this.path;Ve=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=I(Ve,this.posX+this.margin[3],-tt+ut+this.ctx.prevPageLastElemOffset),$.call(this,"fill",!0),this.path=yt}var At=JSON.parse(JSON.stringify(Be));At=I([At],this.posX+this.margin[3],-tt+ut+this.ctx.prevPageLastElemOffset)[0];var Ue=(lt>St||lt<st)&&_.call(this);Ue&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Lt,ot,null).clip().discardPath()),this.pdf.addImage(A,"JPEG",At.x,At.y,At.w,At.h,null,null,Fe),Ue&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(A,"JPEG",Be.x,Be.y,Be.w,Be.h,null,null,Fe)};var j=function(A,z,q){var ee=[];z=z||this.pdf.internal.pageSize.width,q=q||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var re=this.posY+this.ctx.prevPageLastElemOffset;switch(A.type){default:case"mt":case"lt":ee.push(Math.floor((A.y+re)/q)+1);break;case"arc":ee.push(Math.floor((A.y+re-A.radius)/q)+1),ee.push(Math.floor((A.y+re+A.radius)/q)+1);break;case"qct":var ae=ge(this.ctx.lastPoint.x,this.ctx.lastPoint.y,A.x1,A.y1,A.x,A.y);ee.push(Math.floor((ae.y+re)/q)+1),ee.push(Math.floor((ae.y+ae.h+re)/q)+1);break;case"bct":var ue=we(this.ctx.lastPoint.x,this.ctx.lastPoint.y,A.x1,A.y1,A.x2,A.y2,A.x,A.y);ee.push(Math.floor((ue.y+re)/q)+1),ee.push(Math.floor((ue.y+ue.h+re)/q)+1);break;case"rect":ee.push(Math.floor((A.y+re)/q)+1),ee.push(Math.floor((A.y+A.h+re)/q)+1)}for(var pe=0;pe<ee.length;pe+=1)for(;this.pdf.internal.getNumberOfPages()<ee[pe];)M.call(this);return ee},M=function(){var A=this.fillStyle,z=this.strokeStyle,q=this.font,ee=this.lineCap,re=this.lineWidth,ae=this.lineJoin;this.pdf.addPage(),this.fillStyle=A,this.strokeStyle=z,this.font=q,this.lineCap=ee,this.lineWidth=re,this.lineJoin=ae},I=function(A,z,q){for(var ee=0;ee<A.length;ee++)switch(A[ee].type){case"bct":A[ee].x2+=z,A[ee].y2+=q;case"qct":A[ee].x1+=z,A[ee].y1+=q;default:A[ee].x+=z,A[ee].y+=q}return A},P=function(A){return A.sort(function(z,q){return z-q})},D=function(A,z){for(var q,ee,re=this.fillStyle,ae=this.strokeStyle,ue=this.lineCap,pe=this.lineWidth,ce=Math.abs(pe*this.ctx.transform.scaleX),_e=this.lineJoin,Ie=JSON.parse(JSON.stringify(this.path)),Pe=JSON.parse(JSON.stringify(this.path)),be=[],J=0;J<Pe.length;J++)if(Pe[J].x!==void 0)for(var Ve=j.call(this,Pe[J]),Je=0;Je<Ve.length;Je+=1)be.indexOf(Ve[Je])===-1&&be.push(Ve[Je]);for(var Fe=0;Fe<be.length;Fe++)for(;this.pdf.internal.getNumberOfPages()<be[Fe];)M.call(this);if(P(be),this.autoPaging)for(var Te=be[0],Be=be[be.length-1],De=Te;De<Be+1;De++){this.pdf.setPage(De),this.fillStyle=re,this.strokeStyle=ae,this.lineCap=ue,this.lineWidth=ce,this.lineJoin=_e;var it=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Ye=De===1?this.posY+this.margin[0]:this.margin[0],St=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],st=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],lt=De===1?0:St+(De-2)*st;if(this.ctx.clip_path.length!==0){var Lt=this.path;q=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=I(q,this.posX+this.margin[3],-lt+Ye+this.ctx.prevPageLastElemOffset),$.call(this,A,!0),this.path=Lt}if(ee=JSON.parse(JSON.stringify(Ie)),this.path=I(ee,this.posX+this.margin[3],-lt+Ye+this.ctx.prevPageLastElemOffset),z===!1||De===0){var ut=(De>Te||De<Be)&&_.call(this);ut&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],it,st,null).clip().discardPath()),$.call(this,A,z),ut&&this.pdf.restoreGraphicsState()}this.lineWidth=pe}else this.lineWidth=ce,$.call(this,A,z),this.lineWidth=pe;this.path=Ie},$=function(A,z){if((A!=="stroke"||z||!w.call(this))&&(A==="stroke"||z||!m.call(this))){for(var q,ee,re=[],ae=this.path,ue=0;ue<ae.length;ue++){var pe=ae[ue];switch(pe.type){case"begin":re.push({begin:!0});break;case"close":re.push({close:!0});break;case"mt":re.push({start:pe,deltas:[],abs:[]});break;case"lt":var ce=re.length;if(ae[ue-1]&&!isNaN(ae[ue-1].x)&&(q=[pe.x-ae[ue-1].x,pe.y-ae[ue-1].y],ce>0)){for(;ce>=0;ce--)if(re[ce-1].close!==!0&&re[ce-1].begin!==!0){re[ce-1].deltas.push(q),re[ce-1].abs.push(pe);break}}break;case"bct":q=[pe.x1-ae[ue-1].x,pe.y1-ae[ue-1].y,pe.x2-ae[ue-1].x,pe.y2-ae[ue-1].y,pe.x-ae[ue-1].x,pe.y-ae[ue-1].y],re[re.length-1].deltas.push(q);break;case"qct":var _e=ae[ue-1].x+2/3*(pe.x1-ae[ue-1].x),Ie=ae[ue-1].y+2/3*(pe.y1-ae[ue-1].y),Pe=pe.x+2/3*(pe.x1-pe.x),be=pe.y+2/3*(pe.y1-pe.y),J=pe.x,Ve=pe.y;q=[_e-ae[ue-1].x,Ie-ae[ue-1].y,Pe-ae[ue-1].x,be-ae[ue-1].y,J-ae[ue-1].x,Ve-ae[ue-1].y],re[re.length-1].deltas.push(q);break;case"arc":re.push({deltas:[],abs:[],arc:!0}),Array.isArray(re[re.length-1].abs)&&re[re.length-1].abs.push(pe)}}ee=z?null:A==="stroke"?"stroke":"fill";for(var Je=!1,Fe=0;Fe<re.length;Fe++)if(re[Fe].arc)for(var Te=re[Fe].abs,Be=0;Be<Te.length;Be++){var De=Te[Be];De.type==="arc"?Z.call(this,De.x,De.y,De.radius,De.startAngle,De.endAngle,De.counterclockwise,void 0,z,!Je):U.call(this,De.x,De.y),Je=!0}else if(re[Fe].close===!0)this.pdf.internal.out("h"),Je=!1;else if(re[Fe].begin!==!0){var it=re[Fe].start.x,Ye=re[Fe].start.y;Y.call(this,re[Fe].deltas,it,Ye),Je=!0}ee&&T.call(this,ee),z&&X.call(this)}},H=function(A){var z=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,q=z*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return A-q;case"top":return A+z-q;case"hanging":return A+z-2*q;case"middle":return A+z/2-q;default:return A}},Q=function(A){return A+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};v.prototype.createLinearGradient=function(){var A=function(){};return A.colorStops=[],A.addColorStop=function(z,q){this.colorStops.push([z,q])},A.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},A.isCanvasGradient=!0,A},v.prototype.createPattern=function(){return this.createLinearGradient()},v.prototype.createRadialGradient=function(){return this.createLinearGradient()};var Z=function(A,z,q,ee,re,ae,ue,pe,ce){for(var _e=le.call(this,q,ee,re,ae),Ie=0;Ie<_e.length;Ie++){var Pe=_e[Ie];Ie===0&&(ce?C.call(this,Pe.x1+A,Pe.y1+z):U.call(this,Pe.x1+A,Pe.y1+z)),ie.call(this,A,z,Pe.x2,Pe.y2,Pe.x3,Pe.y3,Pe.x4,Pe.y4)}pe?X.call(this):T.call(this,ue)},T=function(A){switch(A){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},X=function(){this.pdf.clip(),this.pdf.discardPath()},C=function(A,z){this.pdf.internal.out(r(A)+" "+n(z)+" m")},E=function(A){var z;switch(A.align){case"right":case"end":z="right";break;case"center":z="center";break;default:z="left"}var q=this.pdf.getTextDimensions(A.text),ee=H.call(this,A.y),re=Q.call(this,ee)-q.h,ae=this.ctx.transform.applyToPoint(new l(A.x,ee)),ue=this.ctx.transform.decompose(),pe=new d;pe=(pe=(pe=pe.multiply(ue.translate)).multiply(ue.skew)).multiply(ue.scale);for(var ce,_e,Ie,Pe=this.ctx.transform.applyToRectangle(new c(A.x,ee,q.w,q.h)),be=pe.applyToRectangle(new c(A.x,re,q.w,q.h)),J=j.call(this,be),Ve=[],Je=0;Je<J.length;Je+=1)Ve.indexOf(J[Je])===-1&&Ve.push(J[Je]);if(P(Ve),this.autoPaging)for(var Fe=Ve[0],Te=Ve[Ve.length-1],Be=Fe;Be<Te+1;Be++){this.pdf.setPage(Be);var De=Be===1?this.posY+this.margin[0]:this.margin[0],it=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Ye=this.pdf.internal.pageSize.height-this.margin[2],St=Ye-this.margin[0],st=this.pdf.internal.pageSize.width-this.margin[1],lt=st-this.margin[3],Lt=Be===1?0:it+(Be-2)*St;if(this.ctx.clip_path.length!==0){var ut=this.path;ce=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=I(ce,this.posX+this.margin[3],-1*Lt+De),$.call(this,"fill",!0),this.path=ut}var et=I([JSON.parse(JSON.stringify(be))],this.posX+this.margin[3],-Lt+De+this.ctx.prevPageLastElemOffset)[0];A.scale>=.01&&(_e=this.pdf.internal.getFontSize(),this.pdf.setFontSize(_e*A.scale),Ie=this.lineWidth,this.lineWidth=Ie*A.scale);var ot=this.autoPaging!=="text";if(ot||et.y+et.h<=Ye){if(ot||et.y>=De&&et.x<=st){var tt=ot?A.text:this.pdf.splitTextToSize(A.text,A.maxWidth||st-et.x)[0],yt=I([JSON.parse(JSON.stringify(Pe))],this.posX+this.margin[3],-Lt+De+this.ctx.prevPageLastElemOffset)[0],At=ot&&(Be>Fe||Be<Te)&&_.call(this);At&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],lt,St,null).clip().discardPath()),this.pdf.text(tt,yt.x,yt.y,{angle:A.angle,align:z,renderingMode:A.renderingMode}),At&&this.pdf.restoreGraphicsState()}}else et.y<Ye&&(this.ctx.prevPageLastElemOffset+=Ye-et.y);A.scale>=.01&&(this.pdf.setFontSize(_e),this.lineWidth=Ie)}else A.scale>=.01&&(_e=this.pdf.internal.getFontSize(),this.pdf.setFontSize(_e*A.scale),Ie=this.lineWidth,this.lineWidth=Ie*A.scale),this.pdf.text(A.text,ae.x+this.posX,ae.y+this.posY,{angle:A.angle,align:z,renderingMode:A.renderingMode,maxWidth:A.maxWidth}),A.scale>=.01&&(this.pdf.setFontSize(_e),this.lineWidth=Ie)},U=function(A,z,q,ee){q=q||0,ee=ee||0,this.pdf.internal.out(r(A+q)+" "+n(z+ee)+" l")},Y=function(A,z,q){return this.pdf.lines(A,z,q,null,null)},ie=function(A,z,q,ee,re,ae,ue,pe){this.pdf.internal.out([t(a(q+A)),t(s(ee+z)),t(a(re+A)),t(s(ae+z)),t(a(ue+A)),t(s(pe+z)),"c"].join(" "))},le=function(A,z,q,ee){for(var re=2*Math.PI,ae=Math.PI/2;z>q;)z-=re;var ue=Math.abs(q-z);ue<re&&ee&&(ue=re-ue);for(var pe=[],ce=ee?-1:1,_e=z;ue>1e-5;){var Ie=_e+ce*Math.min(ue,ae);pe.push(fe.call(this,A,_e,Ie)),ue-=Math.abs(Ie-_e),_e=Ie}return pe},fe=function(A,z,q){var ee=(q-z)/2,re=A*Math.cos(ee),ae=A*Math.sin(ee),ue=re,pe=-ae,ce=ue*ue+pe*pe,_e=ce+ue*re+pe*ae,Ie=4/3*(Math.sqrt(2*ce*_e)-_e)/(ue*ae-pe*re),Pe=ue-Ie*pe,be=pe+Ie*ue,J=Pe,Ve=-be,Je=ee+z,Fe=Math.cos(Je),Te=Math.sin(Je);return{x1:A*Math.cos(z),y1:A*Math.sin(z),x2:Pe*Fe-be*Te,y2:Pe*Te+be*Fe,x3:J*Fe-Ve*Te,y3:J*Te+Ve*Fe,x4:A*Math.cos(q),y4:A*Math.sin(q)}},ne=function(A){return 180*A/Math.PI},ge=function(A,z,q,ee,re,ae){var ue=A+.5*(q-A),pe=z+.5*(ee-z),ce=re+.5*(q-re),_e=ae+.5*(ee-ae),Ie=Math.min(A,re,ue,ce),Pe=Math.max(A,re,ue,ce),be=Math.min(z,ae,pe,_e),J=Math.max(z,ae,pe,_e);return new c(Ie,be,Pe-Ie,J-be)},we=function(A,z,q,ee,re,ae,ue,pe){var ce,_e,Ie,Pe,be,J,Ve,Je,Fe,Te,Be,De,it,Ye,St=q-A,st=ee-z,lt=re-q,Lt=ae-ee,ut=ue-re,et=pe-ae;for(_e=0;_e<41;_e++)Fe=(Ve=(Ie=A+(ce=_e/40)*St)+ce*((be=q+ce*lt)-Ie))+ce*(be+ce*(re+ce*ut-be)-Ve),Te=(Je=(Pe=z+ce*st)+ce*((J=ee+ce*Lt)-Pe))+ce*(J+ce*(ae+ce*et-J)-Je),_e==0?(Be=Fe,De=Te,it=Fe,Ye=Te):(Be=Math.min(Be,Fe),De=Math.min(De,Te),it=Math.max(it,Fe),Ye=Math.max(Ye,Te));return new c(Math.round(Be),Math.round(De),Math.round(it-Be),Math.round(Ye-De))},xe=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var A,z,q=(A=this.ctx.lineDash,z=this.ctx.lineDashOffset,JSON.stringify({lineDash:A,lineDashOffset:z}));this.prevLineDash!==q&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=q)}}})(nt.API),function(e){var t=function(l){var c,d,f,p,v,S,m,w,_,j;for(d=[],f=0,p=(l+=c="\0\0\0\0".slice(l.length%4||4)).length;p>f;f+=4)(v=(l.charCodeAt(f)<<24)+(l.charCodeAt(f+1)<<16)+(l.charCodeAt(f+2)<<8)+l.charCodeAt(f+3))!==0?(S=(v=((v=((v=((v=(v-(j=v%85))/85)-(_=v%85))/85)-(w=v%85))/85)-(m=v%85))/85)%85,d.push(S+33,m+33,w+33,_+33,j+33)):d.push(122);return function(M,I){for(var P=I;P>0;P--)M.pop()}(d,c.length),String.fromCharCode.apply(String,d)+"~>"},r=function(l){var c,d,f,p,v,S=String,m="length",w=255,_="charCodeAt",j="slice",M="replace";for(l[j](-2),l=l[j](0,-2)[M](/\s/g,"")[M]("z","!!!!!"),f=[],p=0,v=(l+=c="uuuuu"[j](l[m]%5||5))[m];v>p;p+=5)d=52200625*(l[_](p)-33)+614125*(l[_](p+1)-33)+7225*(l[_](p+2)-33)+85*(l[_](p+3)-33)+(l[_](p+4)-33),f.push(w&d>>24,w&d>>16,w&d>>8,w&d);return function(I,P){for(var D=P;D>0;D--)I.pop()}(f,c[m]),S.fromCharCode.apply(S,f)},n=function(l){return l.split("").map(function(c){return("0"+c.charCodeAt().toString(16)).slice(-2)}).join("")+">"},a=function(l){var c=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((l=l.replace(/\s/g,"")).indexOf(">")!==-1&&(l=l.substr(0,l.indexOf(">"))),l.length%2&&(l+="0"),c.test(l)===!1)return"";for(var d="",f=0;f<l.length;f+=2)d+=String.fromCharCode("0x"+(l[f]+l[f+1]));return d},s=function(l){for(var c=new Uint8Array(l.length),d=l.length;d--;)c[d]=l.charCodeAt(d);return(c=Uc(c)).reduce(function(f,p){return f+String.fromCharCode(p)},"")};e.processDataByFilters=function(l,c){var d=0,f=l||"",p=[];for(typeof(c=c||[])=="string"&&(c=[c]),d=0;d<c.length;d+=1)switch(c[d]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),p.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),p.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=a(f),p.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),p.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=s(f),p.push("/FlateDecode");break;default:throw new Error('The filter: "'+c[d]+'" is not implemented')}return{data:f,reverseChain:p.reverse().join(" ")}}}(nt.API),function(e){e.loadFile=function(t,r,n){return function(a,s,l){s=s!==!1,l=typeof l=="function"?l:function(){};var c=void 0;try{c=function(d,f,p){var v=new XMLHttpRequest,S=0,m=function(w){var _=w.length,j=[],M=String.fromCharCode;for(S=0;S<_;S+=1)j.push(M(255&w.charCodeAt(S)));return j.join("")};if(v.open("GET",d,!f),v.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(v.onload=function(){v.status===200?p(m(this.responseText)):p(void 0)}),v.send(null),f&&v.status===200)return m(v.responseText)}(a,s,l)}catch{}return c}(t,r,n)},e.loadImageFile=e.loadFile}(nt.API),function(e){function t(){return(mt.html2canvas?Promise.resolve(mt.html2canvas):z1(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load html2canvas: "+c))}).then(function(c){return c.default?c.default:c})}function r(){return(mt.DOMPurify?Promise.resolve(mt.DOMPurify):z1(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load dompurify: "+c))}).then(function(c){return c.default?c.default:c})}var n=function(c){var d=$t(c);return d==="undefined"?"undefined":d==="string"||c instanceof String?"string":d==="number"||c instanceof Number?"number":d==="function"||c instanceof Function?"function":c&&c.constructor===Array?"array":c&&c.nodeType===1?"element":d==="object"?"object":"unknown"},a=function(c,d){var f=document.createElement(c);for(var p in d.className&&(f.className=d.className),d.innerHTML&&d.dompurify&&(f.innerHTML=d.dompurify.sanitize(d.innerHTML)),d.style)f.style[p]=d.style[p];return f},s=function c(d,f){for(var p=d.nodeType===3?document.createTextNode(d.nodeValue):d.cloneNode(!1),v=d.firstChild;v;v=v.nextSibling)f!==!0&&v.nodeType===1&&v.nodeName==="SCRIPT"||p.appendChild(c(v,f));return d.nodeType===1&&(d.nodeName==="CANVAS"?(p.width=d.width,p.height=d.height,p.getContext("2d").drawImage(d,0,0)):d.nodeName!=="TEXTAREA"&&d.nodeName!=="SELECT"||(p.value=d.value),p.addEventListener("load",function(){p.scrollTop=d.scrollTop,p.scrollLeft=d.scrollLeft},!0)),p},l=function c(d){var f=Object.assign(c.convert(Promise.resolve()),JSON.parse(JSON.stringify(c.template))),p=c.convert(Promise.resolve(),f);return(p=p.setProgress(1,c,1,[c])).set(d)};(l.prototype=Object.create(Promise.prototype)).constructor=l,l.convert=function(c,d){return c.__proto__=d||l.prototype,c},l.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},l.prototype.from=function(c,d){return this.then(function(){switch(d=d||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(c),d){case"string":return this.then(r).then(function(f){return this.set({src:a("div",{innerHTML:c,dompurify:f})})});case"element":return this.set({src:c});case"canvas":return this.set({canvas:c});case"img":return this.set({img:c});default:return this.error("Unknown source type.")}})},l.prototype.to=function(c){switch(c){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},l.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var c={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},d=s(this.prop.src,this.opt.html2canvas.javascriptEnabled);d.tagName==="BODY"&&(c.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=a("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=a("div",{className:"html2pdf__container",style:c}),this.prop.container.appendChild(d),this.prop.container.firstChild.appendChild(a("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},l.prototype.toCanvas=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(d){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,d(this.prop.container,f)}).then(function(d){(this.opt.html2canvas.onrendered||function(){})(d),this.prop.canvas=d,document.body.removeChild(this.prop.overlay)})},l.prototype.toContext2d=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(d){var f=this.opt.jsPDF,p=this.opt.fontFaces,v=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,S=Object.assign({async:!0,allowTaint:!0,scale:v,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete S.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=p,p)for(var m=0;m<p.length;++m){var w=p[m],_=w.src.find(function(j){return j.format==="truetype"});_&&f.addFont(_.url,w.ref.name,w.ref.style)}return S.windowHeight=S.windowHeight||0,S.windowHeight=S.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):S.windowHeight,f.context2d.save(!0),d(this.prop.container,S)}).then(function(d){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(d),this.prop.canvas=d,document.body.removeChild(this.prop.overlay)})},l.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var c=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=c})},l.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},l.prototype.output=function(c,d,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(c,d):this.outputPdf(c,d)},l.prototype.outputPdf=function(c,d){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(c,d)})},l.prototype.outputImg=function(c){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(c){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+c+'" is not supported.'}})},l.prototype.save=function(c){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(c?{filename:c}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},l.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},l.prototype.set=function(c){if(n(c)!=="object")return this;var d=Object.keys(c||{}).map(function(f){if(f in l.template.prop)return function(){this.prop[f]=c[f]};switch(f){case"margin":return this.setMargin.bind(this,c.margin);case"jsPDF":return function(){return this.opt.jsPDF=c.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,c.pageSize);default:return function(){this.opt[f]=c[f]}}},this);return this.then(function(){return this.thenList(d)})},l.prototype.get=function(c,d){return this.then(function(){var f=c in l.template.prop?this.prop[c]:this.opt[c];return d?d(f):f})},l.prototype.setMargin=function(c){return this.then(function(){switch(n(c)){case"number":c=[c,c,c,c];case"array":if(c.length===2&&(c=[c[0],c[1],c[0],c[1]]),c.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=c}).then(this.setPageSize)},l.prototype.setPageSize=function(c){function d(f,p){return Math.floor(f*p/72*96)}return this.then(function(){(c=c||nt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(c.inner={width:c.width-this.opt.margin[1]-this.opt.margin[3],height:c.height-this.opt.margin[0]-this.opt.margin[2]},c.inner.px={width:d(c.inner.width,c.k),height:d(c.inner.height,c.k)},c.inner.ratio=c.inner.height/c.inner.width),this.prop.pageSize=c})},l.prototype.setProgress=function(c,d,f,p){return c!=null&&(this.progress.val=c),d!=null&&(this.progress.state=d),f!=null&&(this.progress.n=f),p!=null&&(this.progress.stack=p),this.progress.ratio=this.progress.val/this.progress.state,this},l.prototype.updateProgress=function(c,d,f,p){return this.setProgress(c?this.progress.val+c:null,d||null,f?this.progress.n+f:null,p?this.progress.stack.concat(p):null)},l.prototype.then=function(c,d){var f=this;return this.thenCore(c,d,function(p,v){return f.updateProgress(null,null,1,[p]),Promise.prototype.then.call(this,function(S){return f.updateProgress(null,p),S}).then(p,v).then(function(S){return f.updateProgress(1),S})})},l.prototype.thenCore=function(c,d,f){f=f||Promise.prototype.then;var p=this;c&&(c=c.bind(p)),d&&(d=d.bind(p));var v=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?p:l.convert(Object.assign({},p),Promise.prototype),S=f.call(v,c,d);return l.convert(S,p.__proto__)},l.prototype.thenExternal=function(c,d){return Promise.prototype.then.call(this,c,d)},l.prototype.thenList=function(c){var d=this;return c.forEach(function(f){d=d.thenCore(f)}),d},l.prototype.catch=function(c){c&&(c=c.bind(this));var d=Promise.prototype.catch.call(this,c);return l.convert(d,this)},l.prototype.catchExternal=function(c){return Promise.prototype.catch.call(this,c)},l.prototype.error=function(c){return this.then(function(){throw new Error(c)})},l.prototype.using=l.prototype.set,l.prototype.saveAs=l.prototype.save,l.prototype.export=l.prototype.output,l.prototype.run=l.prototype.then,nt.getPageSize=function(c,d,f){if($t(c)==="object"){var p=c;c=p.orientation,d=p.unit||d,f=p.format||f}d=d||"mm",f=f||"a4",c=(""+(c||"P")).toLowerCase();var v,S=(""+f).toLowerCase(),m={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(d){case"pt":v=1;break;case"mm":v=72/25.4;break;case"cm":v=72/2.54;break;case"in":v=72;break;case"px":v=.75;break;case"pc":case"em":v=12;break;case"ex":v=6;break;default:throw"Invalid unit: "+d}var w,_=0,j=0;if(m.hasOwnProperty(S))_=m[S][1]/v,j=m[S][0]/v;else try{_=f[1],j=f[0]}catch{throw new Error("Invalid format: "+f)}if(c==="p"||c==="portrait")c="p",j>_&&(w=j,j=_,_=w);else{if(c!=="l"&&c!=="landscape")throw"Invalid orientation: "+c;c="l",_>j&&(w=j,j=_,_=w)}return{width:j,height:_,unit:d,k:v,orientation:c}},e.html=function(c,d){(d=d||{}).callback=d.callback||function(){},d.html2canvas=d.html2canvas||{},d.html2canvas.canvas=d.html2canvas.canvas||this.canvas,d.jsPDF=d.jsPDF||this,d.fontFaces=d.fontFaces?d.fontFaces.map(nc):null;var f=new l(d);return d.worker?f:f.from(c).doCallback()}}(nt.API),nt.API.addJS=function(e){return Ju=e,this.internal.events.subscribe("postPutResources",function(){kl=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(kl+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),Zu=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+Ju+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){kl!==void 0&&Zu!==void 0&&this.internal.out("/Names <</JavaScript "+kl+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var a=r.outline.render().split(/\r\n/),s=0;s<a.length;s++){var l=a[s],c=n.exec(l);if(c!=null){var d=c[1];r.internal.newObjectDeferredBegin(d,!1)}r.internal.write(l)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,p=[];for(s=0;s<f;s++){var v=r.internal.newObject();p.push(v);var S=r.internal.getPageInfo(s+1);r.internal.write("<< /D["+S.objId+" 0 R /XYZ null null null]>> endobj")}var m=r.internal.newObject();for(r.internal.write("<< /Names [ "),s=0;s<p.length;s++)r.internal.write("(page_"+(s+1)+")"+p[s]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+m+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,a,s){var l={title:a,options:s,children:[]};return n==null&&(n=this.root),n.children.push(l),l},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var a=0;a<n.children.length;a++)this.genIds_r(n.children[a])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var a=this.ctx.pdf.internal.getVerticalCoordinateString,s=0;s<n.children.length;s++){var l=n.children[s];this.objStart(l),this.line("/Title "+this.makeString(l.title)),this.line("/Parent "+this.makeRef(n)),s>0&&this.line("/Prev "+this.makeRef(n.children[s-1])),s<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[s+1])),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1])));var c=this.count=this.count_r({count:0},l);if(c>0&&this.line("/Count "+c),l.options&&l.options.pageNumber){var d=r.internal.getPageInfo(l.options.pageNumber);this.line("/Dest ["+d.objId+" 0 R /XYZ 0 "+a(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,a){for(var s=0;s<a.children.length;s++)n.count++,this.count_r(n,a.children[s]);return n.count}}])}(nt.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,a,s,l,c){var d,f=this.decode.DCT_DECODE,p=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=l||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,d=function(v){for(var S,m=256*v.charCodeAt(4)+v.charCodeAt(5),w=v.length,_={width:0,height:0,numcomponents:1},j=4;j<w;j+=2){if(j+=m,t.indexOf(v.charCodeAt(j+1))!==-1){S=256*v.charCodeAt(j+5)+v.charCodeAt(j+6),_={width:256*v.charCodeAt(j+7)+v.charCodeAt(j+8),height:S,numcomponents:v.charCodeAt(j+9)};break}m=256*v.charCodeAt(j+2)+v.charCodeAt(j+3)}return _}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),d.numcomponents){case 1:c=this.color_spaces.DEVICE_GRAY;break;case 4:c=this.color_spaces.DEVICE_CMYK;break;case 3:c=this.color_spaces.DEVICE_RGB}p={data:r,width:d.width,height:d.height,colorSpace:c,bitsPerComponent:8,filter:f,index:n,alias:a}}return p}}(nt.API),nt.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var a,s=zb(e,{checkCrc:!0}),l=s.width,c=s.height,d=s.channels,f=s.palette,p=s.depth;a=f&&d===1?function(Z){for(var T=Z.width,X=Z.height,C=Z.data,E=Z.palette,U=Z.depth,Y=!1,ie=[],le=[],fe=void 0,ne=!1,ge=0,we=0;we<E.length;we++){var xe=tu(E[we],4),A=xe[0],z=xe[1],q=xe[2],ee=xe[3];ie.push(A,z,q),ee!=null&&(ee===0?(ge++,le.length<1&&le.push(we)):ee<255&&(ne=!0))}if(ne||ge>1){Y=!0,le=void 0;var re=T*X;fe=new Uint8Array(re);for(var ae=new DataView(C.buffer),ue=0;ue<re;ue++){var pe=oc(ae,ue,U),ce=tu(E[pe],4)[3];fe[ue]=ce}}else ge===0&&(le=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:Y?8:void 0,colorBytes:C,alphaBytes:fe,needSMask:Y,palette:ie,mask:le}}(s):d===2||d===4?function(Z){for(var T=Z.data,X=Z.width,C=Z.height,E=Z.channels,U=Z.depth,Y=E===2?"DeviceGray":"DeviceRGB",ie=E-1,le=X*C,fe=ie,ne=le*fe,ge=1*le,we=Math.ceil(ne*U/8),xe=Math.ceil(ge*U/8),A=new Uint8Array(we),z=new Uint8Array(xe),q=new DataView(T.buffer),ee=new DataView(A.buffer),re=new DataView(z.buffer),ae=!1,ue=0;ue<le;ue++){for(var pe=ue*E,ce=0;ce<fe;ce++)ad(ee,oc(q,pe+ce,U),ue*fe+ce,U);var _e=oc(q,pe+fe,U);_e<(1<<U)-1&&(ae=!0),ad(re,_e,1*ue,U)}return{colorSpace:Y,colorsPerPixel:ie,sMaskBitsPerComponent:ae?U:void 0,colorBytes:A,alphaBytes:z,needSMask:ae}}(s):function(Z){var T=Z.data,X=Z.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:X,colorsPerPixel:X==="DeviceGray"?1:3,colorBytes:T instanceof Uint16Array?function(C){for(var E=C.length,U=new Uint8Array(2*E),Y=new DataView(U.buffer,U.byteOffset,U.byteLength),ie=0;ie<E;ie++)Y.setUint16(2*ie,C[ie],!1);return U}(T):T,needSMask:!1}}(s);var v,S,m,w=a,_=w.colorSpace,j=w.colorsPerPixel,M=w.sMaskBitsPerComponent,I=w.colorBytes,P=w.alphaBytes,D=w.needSMask,$=w.palette,H=w.mask,Q=null;return n!==nt.API.image_compression.NONE&&typeof Uc=="function"?(Q=function(Z){var T;switch(Z){case nt.API.image_compression.FAST:T=11;break;case nt.API.image_compression.MEDIUM:T=13;break;case nt.API.image_compression.SLOW:T=14;break;default:T=12}return T}(n),v=this.decode.FLATE_DECODE,S="/Predictor ".concat(Q," /Colors ").concat(j," /BitsPerComponent ").concat(p," /Columns ").concat(l),e=td(I,Math.ceil(l*j*p/8),j,p,n),D&&(m=td(P,Math.ceil(l*M/8),1,M,n))):(v=void 0,S=void 0,e=I,D&&(m=P)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(m&&this.__addimage__.isArrayBuffer(m)||this.__addimage__.isArrayBufferView(m))&&(m=this.__addimage__.arrayBufferToBinaryString(m)),{alias:r,data:e,index:t,filter:v,decodeParameters:S,transparency:H,palette:$,sMask:m,predictor:Q,width:l,height:c,bitsPerComponent:p,sMaskBitsPerComponent:M,colorSpace:_}}},function(e){e.processGIF89A=function(t,r,n,a){var s=new a9(t),l=s.width,c=s.height,d=[];s.decodeAndBlitFrameRGBA(0,d);var f={data:d,width:l,height:c},p=new ac(100).encode(f,100);return e.processJPEG.call(this,p,r,n,a)},e.processGIF87A=e.processGIF89A}(nt.API),ui.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:a,green:n,blue:r,quad:s}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},ui.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Zt.log("bit decode error:"+r)}},ui.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,a=0;a<t;a++)for(var s=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+8*a*4,c=0;c<8&&8*a+c<this.width;c++){var d=this.palette[s>>7-c&1];this.data[l+4*c]=d.blue,this.data[l+4*c+1]=d.green,this.data[l+4*c+2]=d.red,this.data[l+4*c+3]=255}r!==0&&(this.pos+=4-r)}},ui.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,a=0;a<e;a++){var s=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+2*a*4,c=s>>4,d=15&s,f=this.palette[c];if(this.data[l]=f.blue,this.data[l+1]=f.green,this.data[l+2]=f.red,this.data[l+3]=255,2*a+1>=this.width)break;f=this.palette[d],this.data[l+4]=f.blue,this.data[l+4+1]=f.green,this.data[l+4+2]=f.red,this.data[l+4+3]=255}t!==0&&(this.pos+=4-t)}},ui.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var a=this.datav.getUint8(this.pos++,!0),s=r*this.width*4+4*n;if(a<this.palette.length){var l=this.palette[a];this.data[s]=l.red,this.data[s+1]=l.green,this.data[s+2]=l.blue,this.data[s+3]=255}else this.data[s]=255,this.data[s+1]=255,this.data[s+2]=255,this.data[s+3]=255}e!==0&&(this.pos+=4-e)}},ui.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,a=0;a<this.width;a++){var s=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(s&t)/t*255|0,c=(s>>5&t)/t*255|0,d=(s>>10&t)/t*255|0,f=s>>15?255:0,p=n*this.width*4+4*a;this.data[p]=d,this.data[p+1]=c,this.data[p+2]=l,this.data[p+3]=f}this.pos+=e}},ui.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var a=this.bottom_up?n:this.height-1-n,s=0;s<this.width;s++){var l=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(l&t)/t*255|0,d=(l>>5&r)/r*255|0,f=(l>>11)/t*255|0,p=a*this.width*4+4*s;this.data[p]=f,this.data[p+1]=d,this.data[p+2]=c,this.data[p+3]=255}this.pos+=e}},ui.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=s,this.data[l+1]=a,this.data[l+2]=n,this.data[l+3]=255}this.pos+=this.width%4}},ui.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=s,this.data[c+1]=a,this.data[c+2]=n,this.data[c+3]=l}},ui.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,a){var s=new ui(t,!1),l=s.width,c=s.height,d={data:s.getData(),width:l,height:c},f=new ac(100).encode(d,100);return e.processJPEG.call(this,f,r,n,a)}}(nt.API),ld.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,a){var s=new ld(t),l=s.width,c=s.height,d={data:s.getData(),width:l,height:c},f=new ac(100).encode(d,100);return e.processJPEG.call(this,f,r,n,a)}}(nt.API),nt.API.processRGBA=function(e,t,r){for(var n=e.data,a=n.length,s=new Uint8Array(a/4*3),l=new Uint8Array(a/4),c=0,d=0,f=0;f<a;f+=4){var p=n[f],v=n[f+1],S=n[f+2],m=n[f+3];s[c++]=p,s[c++]=v,s[c++]=S,l[d++]=m}var w=this.__addimage__.arrayBufferToBinaryString(s);return{alpha:this.__addimage__.arrayBufferToBinaryString(l),data:w,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},nt.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Ra=nt.API,Ml=Ra.getCharWidthsArray=function(e,t){var r,n,a=(t=t||{}).font||this.internal.getFont(),s=t.fontSize||this.internal.getFontSize(),l=t.charSpace||this.internal.getCharSpace(),c=t.widths?t.widths:a.metadata.Unicode.widths,d=c.fof?c.fof:1,f=t.kerning?t.kerning:a.metadata.Unicode.kerning,p=f.fof?f.fof:1,v=t.doKerning!==!1,S=0,m=e.length,w=0,_=c[0]||d,j=[];for(r=0;r<m;r++)n=e.charCodeAt(r),typeof a.metadata.widthOfString=="function"?j.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(n))+l*(1e3/s)||0)/1e3):(S=v&&$t(f[n])==="object"&&!isNaN(parseInt(f[n][w],10))?f[n][w]/p:0,j.push((c[n]||_)/d+S)),w=n;return j},Ku=Ra.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),a=t.charSpace||this.internal.getCharSpace();return Ra.processArabic&&(e=Ra.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,a)/r:Ml.apply(this,arguments).reduce(function(s,l){return s+l},0)},Qu=function(e,t,r,n){for(var a=[],s=0,l=e.length,c=0;s!==l&&c+t[s]<r;)c+=t[s],s++;a.push(e.slice(0,s));var d=s;for(c=0;s!==l;)c+t[s]>n&&(a.push(e.slice(d,s)),c=0,d=s),c+=t[s],s++;return d!==s&&a.push(e.slice(d,s)),a},ed=function(e,t,r){r||(r={});var n,a,s,l,c,d,f,p=[],v=[p],S=r.textIndent||0,m=0,w=0,_=e.split(" "),j=Ml.apply(this,[" ",r])[0];if(d=r.lineIndent===-1?_[0].length+2:r.lineIndent||0){var M=Array(d).join(" "),I=[];_.map(function(D){(D=D.split(/\s*\n/)).length>1?I=I.concat(D.map(function($,H){return(H&&$.length?`
`:"")+$})):I.push(D[0])}),_=I,d=Ku.apply(this,[M,r])}for(s=0,l=_.length;s<l;s++){var P=0;if(n=_[s],d&&n[0]==`
`&&(n=n.substr(1),P=1),S+m+(w=(a=Ml.apply(this,[n,r])).reduce(function(D,$){return D+$},0))>t||P){if(w>t){for(c=Qu.apply(this,[n,a,t-(S+m),t]),p.push(c.shift()),p=[c.pop()];c.length;)v.push([c.shift()]);w=a.slice(n.length-(p[0]?p[0].length:0)).reduce(function(D,$){return D+$},0)}else p=[n];v.push(p),S=w+d,m=j}else p.push(n),S+=m+w,m=j}return f=d?function(D,$){return($?M:"")+D.join(" ")}:function(D){return D.join(" ")},v.map(f)},Ra.splitTextToSize=function(e,t,r){var n,a=(r=r||{}).fontSize||this.internal.getFontSize(),s=(function(p){if(p.widths&&p.kerning)return{widths:p.widths,kerning:p.kerning};var v=this.internal.getFont(p.fontName,p.fontStyle),S="Unicode";return v.metadata[S]?{widths:v.metadata[S].widths||{0:1},kerning:v.metadata[S].kerning||{}}:{font:v.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var l=1*this.internal.scaleFactor*t/a;s.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/a:0,s.lineIndent=r.lineIndent;var c,d,f=[];for(c=0,d=n.length;c<d;c++)f=f.concat(ed.apply(this,[n[c],l,s]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},a={},s=0;s<16;s++)n[r[s]]=t[s],a[t[s]]=r[s];var l=function(S){return"0x"+parseInt(S,10).toString(16)},c=e.__fontmetrics__.compress=function(S){var m,w,_,j,M=["{"];for(var I in S){if(m=S[I],isNaN(parseInt(I,10))?w="'"+I+"'":(I=parseInt(I,10),w=(w=l(I).slice(2)).slice(0,-1)+a[w.slice(-1)]),typeof m=="number")m<0?(_=l(m).slice(3),j="-"):(_=l(m).slice(2),j=""),_=j+_.slice(0,-1)+a[_.slice(-1)];else{if($t(m)!=="object")throw new Error("Don't know what to do with value type "+$t(m)+".");_=c(m)}M.push(w+_)}return M.push("}"),M.join("")},d=e.__fontmetrics__.uncompress=function(S){if(typeof S!="string")throw new Error("Invalid argument passed to uncompress.");for(var m,w,_,j,M={},I=1,P=M,D=[],$="",H="",Q=S.length-1,Z=1;Z<Q;Z+=1)(j=S[Z])=="'"?m?(_=m.join(""),m=void 0):m=[]:m?m.push(j):j=="{"?(D.push([P,_]),P={},_=void 0):j=="}"?((w=D.pop())[0][w[1]]=P,_=void 0,P=w[0]):j=="-"?I=-1:_===void 0?n.hasOwnProperty(j)?($+=n[j],_=parseInt($,16)*I,I=1,$=""):$+=j:n.hasOwnProperty(j)?(H+=n[j],P[_]=parseInt(H,16)*I,I=1,_=void 0,H=""):H+=j;return M},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:d("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},p={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},v={Unicode:{"Courier-Oblique":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":d("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":d("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":d("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:d("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:d("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":d("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:d("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":d("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":d("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":d("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":d("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(S){var m=S.font,w=v.Unicode[m.postScriptName];w&&(m.metadata.Unicode={},m.metadata.Unicode.widths=w.widths,m.metadata.Unicode.kerning=w.kerning);var _=p.Unicode[m.postScriptName];_&&(m.metadata.Unicode.encoding=_,m.encoding=_.codePages[0])}])}(nt.API),function(e){var t=function(r){for(var n=r.length,a=new Uint8Array(n),s=0;s<n;s++)a[s]=r.charCodeAt(s);return a};e.API.events.push(["addFont",function(r){var n=void 0,a=r.font,s=r.instance;if(!a.isStandardFont){if(s===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+a.postScriptName+"').");if(typeof(n=s.existsFileInVFS(a.postScriptName)===!1?s.loadFile(a.postScriptName):s.getFileFromVFS(a.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+a.postScriptName+"').");(function(l,c){c=/^\x00\x01\x00\x00/.test(c)?t(c):t(zl(c)),l.metadata=e.API.TTFFont.open(c),l.metadata.Unicode=l.metadata.Unicode||{encoding:{},kerning:{},widths:[]},l.metadata.glyIdsUsed=[0]})(a,n)}}])}(nt),nt.API.addSvgAsImage=function(e,t,r,n,a,s,l,c){if(isNaN(t)||isNaN(r))throw Zt.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(a))throw Zt.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var d=document.createElement("canvas");d.width=n,d.height=a;var f=d.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,d.width,d.height);var p={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},v=this;return(mt.canvg?Promise.resolve(mt.canvg):z1(()=>import("./index.es.D1vQmf1n.js"),__vite__mapDeps([0,1,2,3]))).catch(function(S){return Promise.reject(new Error("Could not load canvg: "+S))}).then(function(S){return S.default?S.default:S}).then(function(S){return S.fromString(f,e,p)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(S){return S.render(p)}).then(function(){v.addImage(d.toDataURL("image/jpeg",1),t,r,n,a,l,c)})},nt.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var a=0;a<this.internal.pages[n].length;a++)this.internal.pages[n][a]=this.internal.pages[n][a].replace(t,r);return this},nt.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,a,s,l={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(l),d=[],f=0,p=0,v=0;function S(w,_){var j,M=!1;for(j=0;j<w.length;j+=1)w[j]===_&&(M=!0);return M}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(l)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var m=c.length;for(v=0;v<m;v+=1)r[c[v]].value=r[c[v]].defaultValue,r[c[v]].explicitSet=!1}if($t(e)==="object"){for(a in e)if(s=e[a],S(c,a)&&s!==void 0){if(r[a].type==="boolean"&&typeof s=="boolean")r[a].value=s;else if(r[a].type==="name"&&S(r[a].valueSet,s))r[a].value=s;else if(r[a].type==="integer"&&Number.isInteger(s))r[a].value=s;else if(r[a].type==="array"){for(f=0;f<s.length;f+=1)if(n=!0,s[f].length===1&&typeof s[f][0]=="number")d.push(String(s[f]-1));else if(s[f].length>1){for(p=0;p<s[f].length;p+=1)typeof s[f][p]!="number"&&(n=!1);n===!0&&d.push([s[f][0]-1,s[f][1]-1].join(" "))}r[a].value="["+d.join(" ")+"]"}else r[a].value=r[a].defaultValue;r[a].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var w,_=[];for(w in r)r[w].explicitSet===!0&&(r[w].type==="name"?_.push("/"+w+" /"+r[w].value):_.push("/"+w+" "+r[w].value));_.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+_.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',a=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),s=unescape(encodeURIComponent(n)),l=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),c=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),d=unescape(encodeURIComponent("</x:xmpmeta>")),f=s.length+l.length+c.length+a.length+d.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(a+s+l+c+d),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,a){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:a||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(nt.API),function(e){var t=e.API,r=t.pdfEscape16=function(s,l){for(var c,d=l.metadata.Unicode.widths,f=["","0","00","000","0000"],p=[""],v=0,S=s.length;v<S;++v){if(c=l.metadata.characterToGlyph(s.charCodeAt(v)),l.metadata.glyIdsUsed.push(c),l.metadata.toUnicode[c]=s.charCodeAt(v),d.indexOf(c)==-1&&(d.push(c),d.push([parseInt(l.metadata.widthOfGlyph(c),10)])),c=="0")return p.join("");c=c.toString(16),p.push(f[4-c.length],c)}return p.join("")},n=function(s){var l,c,d,f,p,v,S;for(p=`/CIDInit /ProcSet findresource begin
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
end`};t.events.push(["putFont",function(s){(function(l){var c=l.font,d=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="Identity-H"){for(var v=c.metadata.Unicode.widths,S=c.metadata.subset.encode(c.metadata.glyIdsUsed,1),m="",w=0;w<S.length;w++)m+=String.fromCharCode(S[w]);var _=f();p({data:m,addLength1:!0,objectId:_}),d("endobj");var j=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:j}),d("endobj");var M=f();d("<<"),d("/Type /FontDescriptor"),d("/FontName /"+Ha(c.fontName)),d("/FontFile2 "+_+" 0 R"),d("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),d("/Flags "+c.metadata.flags),d("/StemV "+c.metadata.stemV),d("/ItalicAngle "+c.metadata.italicAngle),d("/Ascent "+c.metadata.ascender),d("/Descent "+c.metadata.decender),d("/CapHeight "+c.metadata.capHeight),d(">>"),d("endobj");var I=f();d("<<"),d("/Type /Font"),d("/BaseFont /"+Ha(c.fontName)),d("/FontDescriptor "+M+" 0 R"),d("/W "+e.API.PDFObject.convert(v)),d("/CIDToGIDMap /Identity"),d("/DW 1000"),d("/Subtype /CIDFontType2"),d("/CIDSystemInfo"),d("<<"),d("/Supplement 0"),d("/Registry (Adobe)"),d("/Ordering ("+c.encoding+")"),d(">>"),d(">>"),d("endobj"),c.objectNumber=f(),d("<<"),d("/Type /Font"),d("/Subtype /Type0"),d("/ToUnicode "+j+" 0 R"),d("/BaseFont /"+Ha(c.fontName)),d("/Encoding /"+c.encoding),d("/DescendantFonts ["+I+" 0 R]"),d(">>"),d("endobj"),c.isAlreadyPutted=!0}})(s)}]),t.events.push(["putFont",function(s){(function(l){var c=l.font,d=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="WinAnsiEncoding"){for(var v=c.metadata.rawData,S="",m=0;m<v.length;m++)S+=String.fromCharCode(v[m]);var w=f();p({data:S,addLength1:!0,objectId:w}),d("endobj");var _=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:_}),d("endobj");var j=f();d("<<"),d("/Descent "+c.metadata.decender),d("/CapHeight "+c.metadata.capHeight),d("/StemV "+c.metadata.stemV),d("/Type /FontDescriptor"),d("/FontFile2 "+w+" 0 R"),d("/Flags 96"),d("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),d("/FontName /"+Ha(c.fontName)),d("/ItalicAngle "+c.metadata.italicAngle),d("/Ascent "+c.metadata.ascender),d(">>"),d("endobj"),c.objectNumber=f();for(var M=0;M<c.metadata.hmtx.widths.length;M++)c.metadata.hmtx.widths[M]=parseInt(c.metadata.hmtx.widths[M]*(1e3/c.metadata.head.unitsPerEm));d("<</Subtype/TrueType/Type/Font/ToUnicode "+_+" 0 R/BaseFont/"+Ha(c.fontName)+"/FontDescriptor "+j+" 0 R/Encoding/"+c.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(c.metadata.hmtx.widths)+">>"),d("endobj"),c.isAlreadyPutted=!0}})(s)}]);var a=function(s){var l,c=s.text||"",d=s.x,f=s.y,p=s.options||{},v=s.mutex||{},S=v.pdfEscape,m=v.activeFontKey,w=v.fonts,_=m,j="",M=0,I="",P=w[_].encoding;if(w[_].encoding!=="Identity-H")return{text:c,x:d,y:f,options:p,mutex:v};for(I=c,_=m,Array.isArray(c)&&(I=c[0]),M=0;M<I.length;M+=1)w[_].metadata.hasOwnProperty("cmap")&&(l=w[_].metadata.cmap.unicode.codeMap[I[M].charCodeAt(0)]),l||I[M].charCodeAt(0)<256&&w[_].metadata.hasOwnProperty("Unicode")?j+=I[M]:j+="";var D="";return parseInt(_.slice(1))<14||P==="WinAnsiEncoding"?D=S(j,_).split("").map(function($){return $.charCodeAt(0).toString(16)}).join(""):P==="Identity-H"&&(D=r(j,w[_])),v.isHex=!0,{text:D,x:d,y:f,options:p,mutex:v}};t.events.push(["postProcessText",function(s){var l=s.text||"",c=[],d={text:l,x:s.x,y:s.y,options:s.options,mutex:s.mutex};if(Array.isArray(l)){var f=0;for(f=0;f<l.length;f+=1)Array.isArray(l[f])&&l[f].length===3?c.push([a(Object.assign({},d,{text:l[f][0]})).text,l[f][1],l[f][2]]):c.push(a(Object.assign({},d,{text:l[f]})).text);s.text=c}else s.text=a(Object.assign({},d,{text:l})).text}])}(nt),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(nt.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var a,s,l,c,d,f,p,v=t,S=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],m=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],w={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},_={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},j=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],M=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),I=!1,P=0;this.__bidiEngine__={};var D=function(C){var E=C.charCodeAt(),U=E>>8,Y=_[U];return Y!==void 0?v[256*Y+(255&E)]:U===252||U===253?"AL":M.test(U)?"L":U===8?"R":"N"},$=function(C){for(var E,U=0;U<C.length;U++){if((E=D(C.charAt(U)))==="L")return!1;if(E==="R")return!0}return!1},H=function(C,E,U,Y){var ie,le,fe,ne,ge=E[Y];switch(ge){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":I=!1;break;case"N":case"AN":break;case"EN":I&&(ge="AN");break;case"AL":I=!0,ge="R";break;case"WS":case"BN":ge="N";break;case"CS":Y<1||Y+1>=E.length||(ie=U[Y-1])!=="EN"&&ie!=="AN"||(le=E[Y+1])!=="EN"&&le!=="AN"?ge="N":I&&(le="AN"),ge=le===ie?le:"N";break;case"ES":ge=(ie=Y>0?U[Y-1]:"B")==="EN"&&Y+1<E.length&&E[Y+1]==="EN"?"EN":"N";break;case"ET":if(Y>0&&U[Y-1]==="EN"){ge="EN";break}if(I){ge="N";break}for(fe=Y+1,ne=E.length;fe<ne&&E[fe]==="ET";)fe++;ge=fe<ne&&E[fe]==="EN"?"EN":"N";break;case"NSM":if(l&&!c){for(ne=E.length,fe=Y+1;fe<ne&&E[fe]==="NSM";)fe++;if(fe<ne){var we=C[Y],xe=we>=1425&&we<=2303||we===64286;if(ie=E[fe],xe&&(ie==="R"||ie==="AL")){ge="R";break}}}ge=Y<1||(ie=E[Y-1])==="B"?"N":U[Y-1];break;case"B":I=!1,a=!0,ge=P;break;case"S":s=!0,ge="N"}return ge},Q=function(C,E,U){var Y=C.split("");return U&&Z(Y,U,{hiLevel:P}),Y.reverse(),E&&E.reverse(),Y.join("")},Z=function(C,E,U){var Y,ie,le,fe,ne,ge=-1,we=C.length,xe=0,A=[],z=P?m:S,q=[];for(I=!1,a=!1,s=!1,ie=0;ie<we;ie++)q[ie]=D(C[ie]);for(le=0;le<we;le++){if(ne=xe,A[le]=H(C,q,A,le),Y=240&(xe=z[ne][w[A[le]]]),xe&=15,E[le]=fe=z[xe][5],Y>0)if(Y===16){for(ie=ge;ie<le;ie++)E[ie]=1;ge=-1}else ge=-1;if(z[xe][6])ge===-1&&(ge=le);else if(ge>-1){for(ie=ge;ie<le;ie++)E[ie]=fe;ge=-1}q[le]==="B"&&(E[le]=0),U.hiLevel|=fe}s&&function(ee,re,ae){for(var ue=0;ue<ae;ue++)if(ee[ue]==="S"){re[ue]=P;for(var pe=ue-1;pe>=0&&ee[pe]==="WS";pe--)re[pe]=P}}(q,E,we)},T=function(C,E,U,Y,ie){if(!(ie.hiLevel<C)){if(C===1&&P===1&&!a)return E.reverse(),void(U&&U.reverse());for(var le,fe,ne,ge,we=E.length,xe=0;xe<we;){if(Y[xe]>=C){for(ne=xe+1;ne<we&&Y[ne]>=C;)ne++;for(ge=xe,fe=ne-1;ge<fe;ge++,fe--)le=E[ge],E[ge]=E[fe],E[fe]=le,U&&(le=U[ge],U[ge]=U[fe],U[fe]=le);xe=ne}xe++}}},X=function(C,E,U){var Y=C.split(""),ie={hiLevel:P};return U||(U=[]),Z(Y,U,ie),function(le,fe,ne){if(ne.hiLevel!==0&&p)for(var ge,we=0;we<le.length;we++)fe[we]===1&&(ge=j.indexOf(le[we]))>=0&&(le[we]=j[ge+1])}(Y,U,ie),T(2,Y,E,U,ie),T(1,Y,E,U,ie),Y.join("")};return this.__bidiEngine__.doBidiReorder=function(C,E,U){if(function(ie,le){if(le)for(var fe=0;fe<ie.length;fe++)le[fe]=fe;c===void 0&&(c=$(ie)),f===void 0&&(f=$(ie))}(C,E),l||!d||f)if(l&&d&&c^f)P=c?1:0,C=Q(C,E,U);else if(!l&&d&&f)P=c?1:0,C=X(C,E,U),C=Q(C,E);else if(!l||c||d||f){if(l&&!d&&c^f)C=Q(C,E),c?(P=0,C=X(C,E,U)):(P=1,C=X(C,E,U),C=Q(C,E));else if(l&&c&&!d&&f)P=1,C=X(C,E,U),C=Q(C,E);else if(!l&&!d&&c^f){var Y=p;c?(P=1,C=X(C,E,U),P=0,p=!1,C=X(C,E,U),p=Y):(P=0,C=X(C,E,U),C=Q(C,E),P=1,p=!1,C=X(C,E,U),p=Y,C=Q(C,E))}}else P=0,C=X(C,E,U);else P=c?1:0,C=X(C,E,U);return C},this.__bidiEngine__.setOptions=function(C){C&&(l=C.isInputVisual,d=C.isOutputVisual,c=C.isInputRtl,f=C.isOutputRtl,p=C.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var a=n.text;n.x,n.y;var s=n.options||{};n.mutex,s.lang;var l=[];if(s.isInputVisual=typeof s.isInputVisual!="boolean"||s.isInputVisual,r.setOptions(s),Object.prototype.toString.call(a)==="[object Array]"){var c=0;for(l=[],c=0;c<a.length;c+=1)Object.prototype.toString.call(a[c])==="[object Array]"?l.push([r.doBidiReorder(a[c][0]),a[c][1],a[c][2]]):l.push([r.doBidiReorder(a[c])]);n.text=l}else n.text=r.doBidiReorder(a);r.setOptions({isInputVisual:!0})}])}(nt),nt.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new Vo(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new y9(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new s9(this.contents),this.head=new c9(this),this.name=new p9(this),this.cmap=new Bf(this),this.toUnicode={},this.hhea=new u9(this),this.maxp=new m9(this),this.hmtx=new g9(this),this.post=new h9(this),this.os2=new d9(this),this.loca=new w9(this),this.glyf=new x9(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,a,s;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var l,c,d,f;for(f=[],l=0,c=(d=this.bbox).length;l<c;l++)t=d[l],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(a=this.post.italic_angle),32768&(r=a>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(s=this.familyClass)===1||s===2||s===3||s===4||s===5||s===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var a,s,l,c;for(l=0,s=0,c=(t=""+t).length;0<=c?s<c:s>c;s=0<=c?++s:--s)a=t.charCodeAt(s),l+=this.widthOfGlyph(this.characterToGlyph(a))+n*(1e3/r)||0;return l*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var gi,Vo=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,a;for(a=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)a.push(this.writeByte(t.charCodeAt(r)));return a},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,a,s,l,c,d;return t=this.readByte(),r=this.readByte(),n=this.readByte(),a=this.readByte(),s=this.readByte(),l=this.readByte(),c=this.readByte(),d=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^a)+16777216*(255^s)+65536*(255^l)+256*(255^c)+(255^d)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*a+16777216*s+65536*l+256*c+d},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,a,s;for(s=[],n=0,a=t.length;n<a;n++)r=t[n],s.push(this.writeByte(r));return s},e}(),s9=function(){var e;function t(r){var n,a,s;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},a=0,s=this.tableCount;0<=s?a<s:a>s;a=0<=s?++a:--a)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,a,s,l,c,d,f,p,v,S,m,w,_;for(_ in m=Object.keys(r).length,d=Math.log(2),v=16*Math.floor(Math.log(m)/d),l=Math.floor(v/d),p=16*m-v,(a=new Vo).writeInt(this.scalarType),a.writeShort(m),a.writeShort(v),a.writeShort(l),a.writeShort(p),s=16*m,f=a.pos+s,c=null,w=[],r)for(S=r[_],a.writeString(_),a.writeInt(e(S)),a.writeInt(f),a.writeInt(S.length),w=w.concat(S),_==="head"&&(c=f),f+=S.length;f%4;)w.push(0),f++;return a.write(w),n=2981146554-e(a.data),a.pos=c+8,a.writeUInt32(n),a.data},e=function(r){var n,a,s,l;for(r=Uf.call(r);r.length%4;)r.push(0);for(s=new Vo(r),a=0,n=0,l=r.length;n<l;n=n+=4)a+=s.readUInt32();return 4294967295&a},t}(),l9={}.hasOwnProperty,Fi=function(e,t){for(var r in t)l9.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};gi=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var c9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new Vo).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),cd=function(){function e(t,r){var n,a,s,l,c,d,f,p,v,S,m,w,_,j,M,I,P;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),v=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(d=0;d<256;++d)this.codeMap[d]=t.readByte();break;case 4:for(m=t.readUInt16(),S=m/2,t.pos+=6,s=function(){var D,$;for($=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)$.push(t.readUInt16());return $}(),t.pos+=2,_=function(){var D,$;for($=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)$.push(t.readUInt16());return $}(),f=function(){var D,$;for($=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)$.push(t.readUInt16());return $}(),p=function(){var D,$;for($=[],d=D=0;0<=S?D<S:D>S;d=0<=S?++D:--D)$.push(t.readUInt16());return $}(),a=(this.length-t.pos+this.offset)/2,c=function(){var D,$;for($=[],d=D=0;0<=a?D<a:D>a;d=0<=a?++D:--D)$.push(t.readUInt16());return $}(),d=M=0,P=s.length;M<P;d=++M)for(j=s[d],n=I=w=_[d];w<=j?I<=j:I>=j;n=w<=j?++I:--I)p[d]===0?l=n+f[d]:(l=c[p[d]/2+(n-w)-(S-d)]||0)!==0&&(l+=f[d]),this.codeMap[n]=65535&l}t.pos=v}return e.encode=function(t,r){var n,a,s,l,c,d,f,p,v,S,m,w,_,j,M,I,P,D,$,H,Q,Z,T,X,C,E,U,Y,ie,le,fe,ne,ge,we,xe,A,z,q,ee,re,ae,ue,pe,ce,_e,Ie;switch(Y=new Vo,l=Object.keys(t).sort(function(Pe,be){return Pe-be}),r){case"macroman":for(_=0,j=function(){var Pe=[];for(w=0;w<256;++w)Pe.push(0);return Pe}(),I={0:0},s={},ie=0,ge=l.length;ie<ge;ie++)I[pe=t[a=l[ie]]]==null&&(I[pe]=++_),s[a]={old:t[a],new:I[t[a]]},j[a]=I[t[a]];return Y.writeUInt16(1),Y.writeUInt16(0),Y.writeUInt32(12),Y.writeUInt16(0),Y.writeUInt16(262),Y.writeUInt16(0),Y.write(j),{charMap:s,subtable:Y.data,maxGlyphID:_+1};case"unicode":for(E=[],v=[],P=0,I={},n={},M=f=null,le=0,we=l.length;le<we;le++)I[$=t[a=l[le]]]==null&&(I[$]=++P),n[a]={old:$,new:I[$]},c=I[$]-a,M!=null&&c===f||(M&&v.push(M),E.push(a),f=c),M=a;for(M&&v.push(M),v.push(65535),E.push(65535),X=2*(T=E.length),Z=2*Math.pow(Math.log(T)/Math.LN2,2),S=Math.log(Z/2)/Math.LN2,Q=2*T-Z,d=[],H=[],m=[],w=fe=0,xe=E.length;fe<xe;w=++fe){if(C=E[w],p=v[w],C===65535){d.push(0),H.push(0);break}if(C-(U=n[C].new)>=32768)for(d.push(0),H.push(2*(m.length+T-w)),a=ne=C;C<=p?ne<=p:ne>=p;a=C<=p?++ne:--ne)m.push(n[a].new);else d.push(U-C),H.push(0)}for(Y.writeUInt16(3),Y.writeUInt16(1),Y.writeUInt32(12),Y.writeUInt16(4),Y.writeUInt16(16+8*T+2*m.length),Y.writeUInt16(0),Y.writeUInt16(X),Y.writeUInt16(Z),Y.writeUInt16(S),Y.writeUInt16(Q),ae=0,A=v.length;ae<A;ae++)a=v[ae],Y.writeUInt16(a);for(Y.writeUInt16(0),ue=0,z=E.length;ue<z;ue++)a=E[ue],Y.writeUInt16(a);for(ce=0,q=d.length;ce<q;ce++)c=d[ce],Y.writeUInt16(c);for(_e=0,ee=H.length;_e<ee;_e++)D=H[_e],Y.writeUInt16(D);for(Ie=0,re=m.length;Ie<re;Ie++)_=m[Ie],Y.writeUInt16(_);return{charMap:n,subtable:Y.data,maxGlyphID:P+1}}},e}(),Bf=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,a;for(t.pos=this.offset,this.version=t.readUInt16(),a=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=a?n<a:n>a;n=0<=a?++n:--n)r=new cd(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,a;return r==null&&(r="macroman"),n=cd.encode(t,r),(a=new Vo).writeUInt16(0),a.writeUInt16(1),n.table=a.data.concat(n.subtable),n},e}(),u9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),d9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),h9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,a;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var s;for(n=t.readUInt16(),this.glyphNameIndex=[],s=0;0<=n?s<n:s>n;s=0<=n?++s:--s)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],a=[];t.pos<this.offset+this.length;)r=t.readByte(),a.push(this.names.push(t.readString(r)));return a;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var l,c,d;for(d=[],s=l=0,c=this.file.maxp.numGlyphs;0<=c?l<c:l>c;s=0<=c?++l:--l)d.push(t.readUInt32());return d}).call(this)}},e}(),f9=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},p9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,a,s,l,c,d,f,p,v,S;for(t.pos=this.offset,t.readShort(),r=t.readShort(),c=t.readShort(),n=[],s=0;0<=r?s<r:s>r;s=0<=r?++s:--s)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+c+t.readShort()});for(d={},s=p=0,v=n.length;p<v;s=++p)a=n[s],t.pos=a.offset,f=t.readString(a.length),l=new f9(f,a),d[S=a.nameID]==null&&(d[S]=[]),d[a.nameID].push(l);this.strings=d,this.copyright=d[0],this.fontFamily=d[1],this.fontSubfamily=d[2],this.uniqueSubfamily=d[3],this.fontName=d[4],this.version=d[5];try{this.postscriptName=d[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=d[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=d[7],this.manufacturer=d[8],this.designer=d[9],this.description=d[10],this.vendorUrl=d[11],this.designerUrl=d[12],this.license=d[13],this.licenseUrl=d[14],this.preferredFamily=d[15],this.preferredSubfamily=d[17],this.compatibleFull=d[18],this.sampleText=d[19]},e}(),m9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),g9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,a,s,l,c,d;for(t.pos=this.offset,this.metrics=[],r=0,c=this.file.hhea.numberOfMetrics;0<=c?r<c:r>c;r=0<=c?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(a=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,p;for(p=[],r=f=0;0<=a?f<a:f>a;r=0<=a?++f:--f)p.push(t.readInt16());return p}(),this.widths=(function(){var f,p,v,S;for(S=[],f=0,p=(v=this.metrics).length;f<p;f++)s=v[f],S.push(s.advance);return S}).call(this),n=this.widths[this.widths.length-1],d=[],r=l=0;0<=a?l<a:l>a;r=0<=a?++l:--l)d.push(this.widths.push(n));return d},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),Uf=[].slice,x9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,a,s,l,c,d,f,p,v;return t in this.cache?this.cache[t]:(s=this.file.loca,r=this.file.contents,n=s.indexOf(t),(a=s.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,l=(c=new Vo(r.read(a))).readShort(),f=c.readShort(),v=c.readShort(),d=c.readShort(),p=c.readShort(),this.cache[t]=l===-1?new b9(c,f,v,d,p):new v9(c,l,f,v,d,p),this.cache[t]))},e.prototype.encode=function(t,r,n){var a,s,l,c,d;for(l=[],s=[],c=0,d=r.length;c<d;c++)a=t[r[c]],s.push(l.length),a&&(l=l.concat(a.encode(n)));return s.push(l.length),{table:l,offsets:s}},e}(),v9=function(){function e(t,r,n,a,s,l){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=a,this.xMax=s,this.yMax=l,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),b9=function(){function e(t,r,n,a,s){var l,c;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=a,this.yMax=s,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],l=this.raw;c=l.readShort(),this.glyphOffsets.push(l.pos),this.glyphIDs.push(l.readUInt16()),32&c;)l.pos+=1&c?4:2,128&c?l.pos+=8:64&c?l.pos+=4:8&c&&(l.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new Vo(Uf.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),w9=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Fi(e,gi),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var a,s;for(s=[],n=0,a=this.length;n<a;n+=2)s.push(2*t.readUInt16());return s}).call(this):(function(){var a,s;for(s=[],n=0,a=this.length;n<a;n+=4)s.push(t.readUInt32());return s}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),a=0,s=0,l=0;l<n.length;++l)if(n[l]=a,s<r.length&&r[s]==l){++s,n[l]=a;var c=this.offsets[l],d=this.offsets[l+1]-c;d>0&&(a+=d)}for(var f=new Array(4*n.length),p=0;p<n.length;++p)f[4*p+3]=255&n[p],f[4*p+2]=(65280&n[p])>>8,f[4*p+1]=(16711680&n[p])>>16,f[4*p]=(4278190080&n[p])>>24;return f},e}(),y9=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,a,s;for(r in a=this.font.cmap.tables[0].codeMap,t={},s=this.subset)n=s[r],t[r]=a[n];return t},e.prototype.glyphsFor=function(t){var r,n,a,s,l,c,d;for(a={},l=0,c=t.length;l<c;l++)a[s=t[l]]=this.font.glyf.glyphFor(s);for(s in r=[],a)(n=a[s])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(s in d=this.glyphsFor(r))n=d[s],a[s]=n;return a},e.prototype.encode=function(t,r){var n,a,s,l,c,d,f,p,v,S,m,w,_,j,M;for(a in n=Bf.encode(this.generateCmap(),"unicode"),l=this.glyphsFor(t),m={0:0},M=n.charMap)m[(d=M[a]).old]=d.new;for(w in S=n.maxGlyphID,l)w in m||(m[w]=S++);return p=function(I){var P,D;for(P in D={},I)D[I[P]]=P;return D}(m),v=Object.keys(p).sort(function(I,P){return I-P}),_=function(){var I,P,D;for(D=[],I=0,P=v.length;I<P;I++)c=v[I],D.push(p[c]);return D}(),s=this.font.glyf.encode(l,_,m),f=this.font.loca.encode(s.offsets,_),j={cmap:this.font.cmap.raw(),glyf:s.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(j["OS/2"]=this.font.os2.raw()),this.font.directory.encode(j)},e}();nt.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,a,s,l;if(Array.isArray(r))return"["+function(){var c,d,f;for(f=[],c=0,d=r.length;c<d;c++)n=r[c],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(a in s=["<<"],r)l=r[a],s.push("/"+a+" "+t.convert(l));return s.push(">>"),s.join(`
`)}return""+r},t}();const _9=["ab67616d000082c1","ab67616d0000b273"];async function C9(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function S9(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function A9(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=S9(e);if(!t)return e;for(const r of _9){const n=`https://i.scdn.co/image/${r}${t}`;if(await C9(n))return n}return e}function k9(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function M9(e){return Ze({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const j9=({width:e})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:e,height:e,children:[o.jsxs("g",{id:"freepik--Padlock--inject-81",children:[o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72"}),o.jsx("path",{d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72",opacity:"0.3"}),o.jsx("rect",{width:"97.29",height:"62.42",x:"65.15",y:"136.1",fill:"var(--LoginSVG-fill)",rx:"5.81",transform:"rotate(-22.27 113.786 167.288)"}),o.jsx("path",{d:"M118.23 156.7a8.13 8.13 0 1 0-6.62 11.13l4.6 11.25 4.11-1.68-4.61-11.25a8.1 8.1 0 0 0 2.52-9.45",opacity:"0.5"}),o.jsx("path",{fill:"#fafafa",d:"M83.16 207.18c-.21.09-4.32-9.48-9.18-21.36s-8.65-21.58-8.44-21.67 4.32 9.48 9.18 21.37 8.64 21.58 8.44 21.66M108.76 171.85a2.8 2.8 0 0 1-1.08-.14 10.1 10.1 0 0 1-2.75-1.19 11.38 11.38 0 0 1-2.73-17.36 9.5 9.5 0 0 1 2.25-2c.6-.37 1-.51 1-.47a26 26 0 0 0-2.8 2.79 11.28 11.28 0 0 0 2.6 16.53 26.4 26.4 0 0 0 3.51 1.84"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m44.94 181.71.49-1.42.93 1.18a6.2 6.2 0 0 0 2.88 2l1.42.49-1.18.93a6.34 6.34 0 0 0-2 2.88l-.48 1.45-1-1.17a6.3 6.3 0 0 0-2.89-2l-1.41-.49 1.17-.93a6.34 6.34 0 0 0 2.07-2.92M92.4 125.92l.28-.82.54.68A3.7 3.7 0 0 0 94.9 127l.82.28-.68.55a3.63 3.63 0 0 0-1.19 1.67l-.28.82-.57-.72a3.54 3.54 0 0 0-1.67-1.18l-.83-.29.69-.54a3.7 3.7 0 0 0 1.21-1.67M35.33 132.87l.82-2.39 1.57 2a10.5 10.5 0 0 0 4.84 3.42l2.38.82-2 1.57a10.57 10.57 0 0 0-3.43 4.84l-.82 2.38-1.56-2a10.5 10.5 0 0 0-4.84-3.43l-2.38-.82 2-1.56a10.6 10.6 0 0 0 3.42-4.83"})]}),o.jsxs("g",{id:"freepik--Device--inject-81",children:[o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m311.06 479.9-147.61-.09a32.16 32.16 0 0 1-32.14-32.16l.07-370.07a32.16 32.16 0 0 1 32.18-32.15l147.61.08a32.16 32.16 0 0 1 32.14 32.16l-.07 370.08a32.16 32.16 0 0 1-32.18 32.15"}),o.jsx("path",{fill:"#fff",d:"M311 58.6h-28.6a7.1 7.1 0 0 0-6.95 7.26V71a7.11 7.11 0 0 1-6.95 7.26h-55.78a7.12 7.12 0 0 1-7-7.27v-5.18a7.11 7.11 0 0 0-6.95-7.27H163.7A22.53 22.53 0 0 0 141.16 81l-.07 361.22a22.52 22.52 0 0 0 22.51 22.52l147.32.09a22.51 22.51 0 0 0 22.53-22.52l.07-361.21A22.52 22.52 0 0 0 311 58.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M223.63 437.25a2.83 2.83 0 1 1-2.86-2.8 2.84 2.84 0 0 1 2.86 2.8M239.47 437.12a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M255.32 437a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M311.88 95.08c0 .08-3.73.18-8.32.22s-8.31 0-8.31-.09S299 95 303.56 95s8.31 0 8.32.08M311.91 99.33c0 .09-3.72.19-8.31.23s-8.32 0-8.32-.09 3.72-.19 8.32-.23 8.31 0 8.31.09M312 103.58c0 .09-3.73.19-8.32.23s-8.31 0-8.31-.09 3.72-.18 8.31-.22 8.26 0 8.32.08M160.65 108.44h1.34l3.56-.08-.09.09v-2.57a15 15 0 0 1 0-1.48 1.33 1.33 0 0 1 1.17-1.08h1.7a1.35 1.35 0 0 1 1.15 1.35v3.76l-.15-.15h4.48l-.15.15v-7a1.17 1.17 0 0 0-.18-.58 4 4 0 0 0-.46-.49c-.66-.65-1.31-1.3-2-1.93l-1.89-1.86c-.3-.31-.61-.61-.91-.91s-.56-.62-.94-.69a1.21 1.21 0 0 0-1 .2c-.27.23-.56.55-.83.82l-1.61 1.62c-1 1-2.06 2-2.83 2.92a3.2 3.2 0 0 0-.22 1.68v6.33-2.14c0-.6 0-1.58-.05-2.56v-2.49a1.83 1.83 0 0 1 .25-.93c.83-1 1.82-1.91 2.84-3l1.59-1.63c.29-.28.53-.57.86-.86a1.51 1.51 0 0 1 1.29-.25 2.4 2.4 0 0 1 1.06.76l.92.9 1.9 1.86 2 1.93a3.8 3.8 0 0 1 .5.54 1.5 1.5 0 0 1 .23.74v7.16h-4.78v-3.9a1.11 1.11 0 0 0-.92-1.11h-1.63a1.11 1.11 0 0 0-1 .88v4.1H161a1.6 1.6 0 0 1-.35-.1M198.47 194.2c0 3.47-2.6 5.63-6.76 5.63h-3.13v4.28H185v-15.55h6.73c4.14 0 6.74 2.16 6.74 5.64m-3.65 0c0-1.71-1.11-2.71-3.31-2.71h-2.93v5.4h2.93c2.2 0 3.31-1 3.31-2.69M211.24 197.29v6.82H208v-1.49a3.93 3.93 0 0 1-3.64 1.67c-2.8 0-4.47-1.55-4.47-3.62s1.49-3.58 5.13-3.58h2.76c0-1.49-.89-2.35-2.76-2.35a5.73 5.73 0 0 0-3.44 1.11l-1.25-2.42a9.2 9.2 0 0 1 5.16-1.45c3.64.02 5.75 1.69 5.75 5.31m-3.46 3.05v-1.22h-2.38c-1.62 0-2.13.59-2.13 1.39s.73 1.49 1.95 1.49a2.55 2.55 0 0 0 2.56-1.66M213.22 203l1.16-2.49a8.1 8.1 0 0 0 4.15 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.76 9.76 0 0 1 4.6 1.05l-1.15 2.46a7 7 0 0 0-3.45-.89c-1.55 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8a10.2 10.2 0 0 1-5.18-1.29M225 203l1.15-2.49a8.2 8.2 0 0 0 4.16 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.8 9.8 0 0 1 4.6 1.05l-1.16 2.46a6.9 6.9 0 0 0-3.44-.89c-1.56 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8A10.2 10.2 0 0 1 225 203M256.94 192.16l-4.33 12h-3.33l-2.69-7.42-2.78 7.42h-3.33l-4.31-12h3.27l2.82 8.09 2.93-8.09h2.93l2.85 8.09 2.91-8.09ZM257.35 198.14c0-3.6 2.77-6.16 6.57-6.16s6.56 2.56 6.56 6.16-2.76 6.15-6.56 6.15-6.57-2.55-6.57-6.15m9.62 0a3.06 3.06 0 1 0-3.05 3.31 3 3 0 0 0 3.08-3.31ZM280.21 192v3.2h-.78c-1.91 0-3.18 1-3.18 3.33v5.64h-3.46v-12h3.31v1.58a4.8 4.8 0 0 1 4.11-1.75M294.34 187.63v16.48H291v-1.37a4.61 4.61 0 0 1-3.73 1.55 6.16 6.16 0 0 1 0-12.31 4.57 4.57 0 0 1 3.57 1.45v-5.8Zm-3.4 10.51a3.06 3.06 0 1 0-3 3.31 3 3 0 0 0 3-3.31"}),o.jsx("path",{fill:"#e0e0e0",d:"M321 217c0 .14-37 .26-82.69.26s-82.71-.12-82.71-.26 37-.26 82.71-.26 82.69.09 82.69.26M317.15 369.23c0 .15-37 .26-82.7.26s-82.7-.11-82.7-.26 37-.26 82.7-.26 82.7.12 82.7.26M279.74 380.67c0 .14-20.57.26-45.94.26s-45.94-.12-45.94-.26 20.56-.26 45.94-.26 45.94.11 45.94.26"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m170.5 261.3 3.13 1.69-1.41 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.17 1.9-1.35-2.35 3.1-1.7-3.14-1.73 1.38-2.35 3.17 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM206.42 261.3l3.13 1.69-1.41 2.36-3.14-1.87V267h-2.71v-3.51l-3.16 1.9-1.31-2.39 3.18-1.7-3.13-1.73 1.38-2.35 3.16 1.89v-3.5H205l-.06 3.5 3.16-1.89 1.41 2.35ZM241.38 261.3l3.13 1.69-1.41 2.36-3.16-1.87.06 3.52h-2.7v-3.51l-3.17 1.9-1.35-2.39 3.14-1.69-3.14-1.73 1.38-2.35 3.17 1.89v-3.5H240l-.06 3.5 3.16-1.89 1.41 2.35ZM275.25 261.3l3.13 1.69-1.38 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.16 1.9-1.39-2.35 3.14-1.69-3.14-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM308.85 261.3 312 263l-1.41 2.36-3.16-1.87.05 3.48h-2.7v-3.51l-3.16 1.9-1.36-2.36 3.13-1.69-3.13-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.05 3.5 3.16-1.89 1.41 2.35Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M176.07 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM211.26 283.08h-15.15A7.08 7.08 0 0 1 189 276v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.03 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM245.49 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM280.1 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM313.7 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.57 6.57 0 0 0 6.57 6.57h15.15a6.58 6.58 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56Z"}),o.jsx("rect",{width:"169.79",height:"29.74",x:"154.09",y:"315.56",fill:"var(--LoginSVG-fill)",rx:"11.29"}),o.jsx("path",{fill:"#fff",d:"M217.55 324.45h4.57c3.29 0 5.55 2 5.55 5s-2.26 5-5.55 5h-4.57Zm4.45 8.15a3.12 3.12 0 1 0 0-6.24h-2.13v6.24ZM228.69 330.65a4.26 4.26 0 1 1 4.26 4 4 4 0 0 1-4.26-4m6.23 0a2 2 0 1 0-4 0 2 2 0 1 0 4 0M246.59 330.09v4.42h-2.24v-4.08c0-1.25-.58-1.82-1.57-1.82s-1.85.66-1.85 2.08v3.82h-2.24v-7.73h2.14v.91a3.4 3.4 0 0 1 2.56-1c1.82-.02 3.2 1.04 3.2 3.4M256.24 331.28h-5.85a2.07 2.07 0 0 0 2.21 1.55 2.6 2.6 0 0 0 1.94-.75l1.2 1.3a4.05 4.05 0 0 1-3.19 1.25c-2.68 0-4.42-1.68-4.42-4a3.93 3.93 0 0 1 4.13-4 3.82 3.82 0 0 1 4 4c.02.22-.01.46-.02.65m-5.88-1.28h3.81a1.93 1.93 0 0 0-3.81 0"}),o.jsx("circle",{cx:"237.31",cy:"143.52",r:"30.05",fill:"var(--LoginSVG-fill)"}),o.jsx("path",{fill:"#fff",d:"M232 138.05h-.5v-2.8a5.86 5.86 0 0 1 11.72 0v2.28h-.5v-2.28a5.36 5.36 0 0 0-10.72 0Z"}),o.jsx("path",{fill:"#fff",d:"M244.76 157.65h-14.9a2.48 2.48 0 0 1-2.47-2.47v-14.91a2.48 2.48 0 0 1 2.47-2.47h14.9a2.48 2.48 0 0 1 2.47 2.47v14.91a2.48 2.48 0 0 1-2.47 2.47m-14.9-19.35a2 2 0 0 0-2 2v14.91a2 2 0 0 0 2 2h14.9a2 2 0 0 0 2-2v-14.94a2 2 0 0 0-2-2Z"}),o.jsx("path",{fill:"#fff",d:"M237.38 148.21a2.34 2.34 0 1 1 2.34-2.34 2.34 2.34 0 0 1-2.34 2.34m0-4.17a1.84 1.84 0 1 0 1.84 1.83 1.84 1.84 0 0 0-1.84-1.87Z"}),o.jsx("path",{fill:"#fff",d:"M237.06 147.86h.5v4.22h-.5z"})]}),o.jsxs("g",{id:"freepik--Character--inject-81",children:[o.jsx("path",{fill:"#ffbe9d",d:"m446.31 458.77-18.87-43.53-21.65 13.9 22.96 39.79 11.51-5.16z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m445.89 456.34.62 1.24s25.15-2.15 27.38 1.71L432.25 480l-6.33-14.14c7.62-.2 14.26-3.1 19.97-9.52"}),o.jsx("path",{fill:"#fff",d:"M432.34 468.21a1.89 1.89 0 0 0-.21 2.52 1.82 1.82 0 0 0 2.5.23 2 2 0 0 0 .21-2.67 1.9 1.9 0 0 0-2.63 0M432.25 480l-1.52-3.4 40.46-18.6s2.26-.11 2.7 1.3Z",opacity:"0.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M446.72 457.62c.09.21-.88.8-1.55 2s-.79 2.27-1 2.28-.51-1.31.33-2.69 2.17-1.8 2.22-1.59M452 457.25c.15.18-.56 1-.82 2.16s0 2.22-.22 2.31-.91-1-.55-2.49 1.47-2.17 1.59-1.98M457.07 461.24c-.17.14-1-.74-1-2.11s.7-2.29.87-2.16-.12 1-.08 2.14.4 2.01.21 2.13"}),o.jsx("path",{fill:"#ffbe9d",d:"m410.82 466.33.72-47.45-25.45 3.76 4.54 45.72 12.62.03z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m411.43 463.94.07 1.38s23.8 8.4 24.24 12.83l-46.48 1.74.05-15.49c7.03 2.94 14.28 3.03 22.12-.46"}),o.jsx("path",{fill:"#fff",d:"M394.2 469.17a1.91 1.91 0 0 0-1.23 2.22 1.83 1.83 0 0 0 2.19 1.24 2 2 0 0 0 1.29-2.36 1.89 1.89 0 0 0-2.42-1M389.26 479.89v-3.72l44.54-.31s2.11.82 1.93 2.29Z",opacity:"0.6"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M411.66 465.44c0 .23-1.13.38-2.22 1.15s-1.64 1.74-1.86 1.66.08-1.4 1.41-2.31 2.71-.71 2.67-.5M416.61 467.28c.06.21-.9.64-1.64 1.63s-.92 2-1.15 2-.41-1.28.52-2.5 2.26-1.35 2.27-1.13M419.6 473c-.2.05-.56-1.07 0-2.33s1.58-1.8 1.69-1.62-.53.88-1 1.92-.46 2.03-.69 2.03M392.51 272.89l-.95-37.36-36.36 1.91-1.2 4.42a200 200 0 0 0-4.76 20.8c-2.44 15.65-2.15 29.89 4 46.62S369 357.82 369 357.82l36.07 99.63 42-13.81Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m414.5 234.32 3.17 10.35c4.66 3 12.19 17.7 12.88 23.72s2 26.63.63 50.79c-1.17 19.87-11 136.17-11 136.17l-39.74 2.1 4.14-188.06 1.75-33.58Z"}),o.jsx("path",{fill:"#455a64",d:"M346.4 266.1a6.4 6.4 0 0 0 1.38.41 23 23 0 0 0 3.87.52 25.25 25.25 0 0 0 22.23-11 21.7 21.7 0 0 0 1.93-3.4 6 6 0 0 0 .51-1.34c-.1-.05-.85 1.87-2.76 4.52a26.07 26.07 0 0 1-21.89 10.85 52 52 0 0 1-5.27-.56M413 246.12a2.7 2.7 0 0 0 .23.87 19 19 0 0 0 .92 2.24 29 29 0 0 0 10.48 11.9 20 20 0 0 0 2.11 1.19 3 3 0 0 0 .83.34c.05-.09-1.06-.69-2.72-1.86a33.1 33.1 0 0 1-10.35-11.74c-.97-1.79-1.43-2.97-1.5-2.94M394.27 277.88s.1.25.27.77l.73 2.29c.64 2 1.57 5 2.76 8.81 2.38 7.68 5.82 18.76 10.07 32.45 8.62 27.36 19.57 65.47 34.25 106.72q2.52 7.41 5 14.63l.08.26-.25.08-42 13.79-.23.08-.08-.23-24.15-67-6.87-19.19c-.79-2.22-1.39-3.94-1.81-5.11q-.3-.86-.45-1.32l-.15-.45s.07.14.18.44.28.74.5 1.3l1.88 5.08c1.63 4.47 4 11 7 19.15l24.32 66.9-.3-.15 42-13.82-.17.33q-2.46-7.22-5-14.63c-14.68-41.26-25.57-79.38-34.1-106.77-4.18-13.72-7.56-24.82-9.91-32.5-1.15-3.84-2.05-6.81-2.66-8.85-.3-1-.53-1.77-.68-2.3s-.23-.76-.23-.76M430 169.45s-1.9-10.63-7.35-15.72-28.16-10.85-28.16-10.85.27 7.89-4.81 10c-5.38 2.25-10.76 1.49-15-3a21.74 21.74 0 0 1-5.17-9.89s-26.92 3.93-30.75 11.23-7.84 35-7.84 35l24.39 3.85-.79 47.38 64.1-3.37-3.62-44.21 17.58 1.57Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.17 191.4a5 5 0 0 0 0-1.06c0-.69-.06-1.68-.13-2.91-.13-2.44-.34-5.82-.62-9.55s-.55-7.11-.78-9.55c-.12-1.22-.22-2.21-.3-2.89a4 4 0 0 0-.19-1.05 3.7 3.7 0 0 0 0 1.06c0 .69.06 1.68.13 2.9.13 2.45.34 5.83.62 9.56s.55 7.11.78 9.55c.11 1.22.22 2.21.3 2.89a3.5 3.5 0 0 0 .19 1.05M419.86 168.77c-.15 0-1.4 4.83-2.8 10.87a112 112 0 0 0-2.26 11 111 111 0 0 0 2.8-10.87 112 112 0 0 0 2.26-11M341.34 149.42c0 .1 1.16.25 3 .83a21.3 21.3 0 0 1 6.46 3.42 21.6 21.6 0 0 1 4.89 5.44c1 1.61 1.42 2.71 1.52 2.67a2.7 2.7 0 0 0-.23-.8 14 14 0 0 0-.95-2.07 19.2 19.2 0 0 0-11.58-9 13 13 0 0 0-2.23-.43 2.4 2.4 0 0 0-.88-.06M423.16 155.87a11.2 11.2 0 0 0-1 3.39 11.2 11.2 0 0 0-.41 3.49 11.4 11.4 0 0 0 .95-3.38 11.3 11.3 0 0 0 .46-3.5"}),o.jsx("path",{fill:"#ffbe9d",d:"M335.24 186.93s9.16 36.31 10.15 39.41 2.77 11.48 11.61 12.76c11.94 1.74 58.24-2.35 58.24-2.35l-9.33-10.62-41.19-9.24-7-26.4Z"}),o.jsx("path",{fill:"#eb996e",d:"M406.35 219.9a2.3 2.3 0 0 0-.3.87 11.6 11.6 0 0 0-.34 2.47 14.1 14.1 0 0 0 2.08 7.9 16.2 16.2 0 0 0 2.85 3.54 9 9 0 0 0 3.2 1.9 8.8 8.8 0 0 0 2.47.42 2.3 2.3 0 0 0 .91-.08 18 18 0 0 1-3.24-.71 9 9 0 0 1-3-1.91 17.4 17.4 0 0 1-2.72-3.45 14.86 14.86 0 0 1-2.16-7.61c-.01-2.06.35-3.32.25-3.34"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M359.88 182.57a5.2 5.2 0 0 1-1.1-.11l-3-.43c-2.5-.36-6-.77-9.79-1.27a98 98 0 0 1-9.75-1.69c-1.23-.3-2.22-.57-2.89-.79a4.7 4.7 0 0 1-1-.38c0-.09 1.54.31 4 .8s5.92 1 9.74 1.53 7.29 1 9.78 1.42c1.25.23 2.25.44 2.94.61a3.9 3.9 0 0 1 1.07.31M358 170.48a3.7 3.7 0 0 1-.94.05c-.61 0-1.49 0-2.58-.08-2.17-.11-5.17-.35-8.47-.76s-6.27-.92-8.4-1.35a61 61 0 0 1-2.52-.56 2.8 2.8 0 0 1-.9-.28 25 25 0 0 1 3.49.47c2.14.33 5.11.78 8.39 1.19s6.27.71 8.44.91a24 24 0 0 1 3.49.41M355.91 161.28a12.5 12.5 0 0 1-2.85 0 58.8 58.8 0 0 1-13.49-2.53 13.3 13.3 0 0 1-2.67-1 17 17 0 0 1 2.77.65c1.69.44 4.05 1 6.67 1.5s5 .81 6.76 1a18 18 0 0 1 2.81.38M373 148.17a20 20 0 0 1-3.22 1c-2 .52-4.79 1.16-7.88 1.78s-5.92 1.09-8 1.39a19 19 0 0 1-3.34.35 23 23 0 0 1 3.27-.72l7.92-1.54 7.91-1.63a21.7 21.7 0 0 1 3.34-.63M422.69 159a5.6 5.6 0 0 1-1.14-.4l-3.06-1.26c-2.57-1.06-6.13-2.53-10.09-4.08s-7.57-2.88-10.19-3.84l-3.09-1.14a5 5 0 0 1-1.12-.49 5.6 5.6 0 0 1 1.18.29c.76.21 1.83.55 3.16 1 2.65.87 6.29 2.15 10.26 3.7s7.51 3.07 10 4.23c1.27.58 2.29 1.06 3 1.41a5.3 5.3 0 0 1 1.09.58M419.86 168.32a3 3 0 0 1-.62-.07l-1.78-.28-6.5-1.14c-5.49-1-13.08-2.29-21.52-3.31-4.22-.49-8.25-.84-11.93-1.06s-7-.27-9.77-.22c-1.39 0-2.65.06-3.76.09s-2.05.07-2.83.13l-1.79.09a2.8 2.8 0 0 1-.63 0 2.8 2.8 0 0 1 .62-.1l1.78-.19c.78-.09 1.73-.17 2.84-.22s2.37-.16 3.76-.17c2.79-.09 6.12-.05 9.81.11s7.73.53 12 1c8.45 1 16 2.41 21.52 3.47 2.73.53 5 1 6.47 1.3l1.76.39a2.4 2.4 0 0 1 .57.18M394 184.66a7.5 7.5 0 0 1-1.37 0c-.89-.05-2.16-.16-3.74-.32-3.14-.33-7.48-.9-12.23-1.77s-9-1.86-12.07-2.66c-1.53-.41-2.76-.75-3.6-1a7.6 7.6 0 0 1-1.3-.45 6 6 0 0 1 1.35.25l3.64.85c3.08.71 7.34 1.64 12.08 2.51s9.05 1.49 12.18 1.91l3.71.5a6.4 6.4 0 0 1 1.35.18M415.75 185a99 99 0 0 1-10.17.36 101 101 0 0 1-10.16-.17 95 95 0 0 1 10.16-.36 94 94 0 0 1 10.17.17M387.18 199.36a4 4 0 0 1-1.11-.05c-.7-.06-1.73-.19-3-.37-2.52-.36-6-1-9.77-1.85s-7.16-1.88-9.57-2.67c-1.21-.4-2.18-.74-2.85-1a4.8 4.8 0 0 1-1-.44 4 4 0 0 1 1.08.24l2.89.84c2.43.7 5.81 1.62 9.58 2.51s7.21 1.55 9.71 2l3 .54a4.4 4.4 0 0 1 1.04.25M410.73 200.4a16 16 0 0 1-3.22 0c-2-.07-4.73-.27-7.74-.66s-5.72-.9-7.66-1.33a16.2 16.2 0 0 1-3.1-.86 21 21 0 0 1 3.18.49c1.95.34 4.65.78 7.65 1.17s5.72.65 7.69.82a23 23 0 0 1 3.2.37M405.82 213.46a1.3 1.3 0 0 1-.41.17c-.27.08-.67.22-1.2.36a39 39 0 0 1-4.5.93 58.5 58.5 0 0 1-15.13.13 117 117 0 0 1-14.89-2.79c-1.88-.46-3.39-.86-4.44-1.15a9 9 0 0 1-1.61-.5 12 12 0 0 1 1.66.3l4.48 1a144 144 0 0 0 14.85 2.63 64 64 0 0 0 15 0c1.91-.24 3.45-.53 4.51-.76a12 12 0 0 1 1.68-.32M428.93 175.93a32 32 0 0 1-5.07.41 19.8 19.8 0 0 1-5.1-.12 32 32 0 0 1 5.07-.41 19.8 19.8 0 0 1 5.1.12M427.58 163.75a14.3 14.3 0 0 1-5.53-.36 14.9 14.9 0 0 1 5.53.36"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M385.24 200.23c-.05-.09 1.05-.64 2.55-1.88a18.3 18.3 0 0 0 2.38-2.42 18.3 18.3 0 0 0 3.59-7.43 18 18 0 0 0 .41-3.38c.05-1.94-.21-3.14-.11-3.16a2.7 2.7 0 0 1 .24.83 7 7 0 0 1 .16 1 13 13 0 0 1 .09 1.33 16 16 0 0 1-.31 3.48 17.3 17.3 0 0 1-3.69 7.64 16 16 0 0 1-2.53 2.41 11 11 0 0 1-1.1.76 7 7 0 0 1-.88.49 2.6 2.6 0 0 1-.8.33"}),o.jsx("path",{d:"m393.81 190.49-3.89 5.78a18.45 18.45 0 0 1-10.42 6.49 10.89 10.89 0 0 0 14.31-12.27",opacity:"0.3"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M405.34 130.24a19.3 19.3 0 0 0 10.73-2.18c-4.84-3-7.89-8.26-9.37-13.75s-3.38-14.85-3.43-20.53l-8.86 39.37a23.77 23.77 0 0 0 14-1.09 3.86 3.86 0 0 1-3.07-1.82M380.06 135a27.7 27.7 0 0 1-2.14-14.07l-17.86-6.77a31.44 31.44 0 0 1-5.7 13.42c-1.09 1.48-2.39 3.2-1.88 5a3.76 3.76 0 0 0 2.77 2.37 11.3 11.3 0 0 0 3.8 0l-2.28 2.49a137 137 0 0 1 23.29-2.44"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M381.57 76.16c-5.63-.58-10.39 1.89-14.88 5.33a28 28 0 0 0-9.42 13.82 27.75 27.75 0 0 0 .12 17.58 22.13 22.13 0 0 0 11.77 12.82c7.48 3.2 16.67 1.31 22.83-4s9.33-13.67 9.11-21.82a26.87 26.87 0 0 0-5.29-15.68 20.5 20.5 0 0 0-14.24-8"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M367 96.14c.67-2.18.2-4.54.37-6.82.39-5 4.14-9.27 8.64-11.51 4.2-2.09 9.49-2 14.79-.7a19.8 19.8 0 0 1 9.68 5.44 15.62 15.62 0 0 1 3.79 13.84l-25.69-2a28.3 28.3 0 0 1-7.38 5.58 5.25 5.25 0 0 1-2.62.6 2.39 2.39 0 0 1-2.12-1.57c-.3-.92.21-1.91.54-2.86"}),o.jsx("path",{fill:"#ffbe9d",d:"m391.78 84.1-21.91 6.16a4.16 4.16 0 0 0-3.61 4.31l3.42 48.07a15 15 0 0 0 3.72 8.86l2.3 2.59c5.24 5.92 15 4.65 18.22-2.56a5.3 5.3 0 0 0 .42-1.29 8 8 0 0 0 .14-1.1 35 35 0 0 0-.09-7.31c-.06-4.29-.11-6.05-.11-6s9-1.75 10.58-13.61c.78-5.91.23-15.53-.48-23.4-.63-7.08-5.56-15.66-12.6-14.72"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M400.17 106.38a1.53 1.53 0 0 1-1.43 1.57 1.44 1.44 0 0 1-1.59-1.32 1.51 1.51 0 0 1 1.41-1.57 1.45 1.45 0 0 1 1.61 1.32M402.43 103.88c-.19.2-1.36-.62-3-.57s-2.8.9-3 .7.09-.45.6-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.39.7c.54.37.72.72.63.81M384.73 107.19a1.52 1.52 0 0 1-1.42 1.57 1.45 1.45 0 0 1-1.6-1.32 1.52 1.52 0 0 1 1.42-1.57 1.45 1.45 0 0 1 1.6 1.32M386.4 104.61c-.18.2-1.35-.61-3-.57s-2.8.9-3 .7.09-.44.61-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.38.7c.54.37.72.72.63.81M392.64 116.55a10.7 10.7 0 0 1 2.64-.55c.42 0 .81-.15.87-.43a2.16 2.16 0 0 0-.31-1.23l-1.32-3.14c-1.83-4.47-3.16-8.15-3-8.22s1.81 3.49 3.64 8l1.26 3.16a2.4 2.4 0 0 1 .26 1.63 1 1 0 0 1-.67.63 2.7 2.7 0 0 1-.7.11 10.6 10.6 0 0 1-2.67.04"}),o.jsx("path",{fill:"#eb996e",d:"M394.28 135.82a30.1 30.1 0 0 1-15.93-3.8s4.19 8.07 16 6.65ZM392.06 120.5a2.93 2.93 0 0 0-2.66-1 2.64 2.64 0 0 0-1.83 1 1.72 1.72 0 0 0-.08 2 2 2 0 0 0 2.15.48 6.1 6.1 0 0 0 2.06-1.3 2.1 2.1 0 0 0 .45-.49.56.56 0 0 0 0-.61"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M387.88 117.8c.26 0 .31 1.75 1.86 3s3.43 1 3.45 1.22-.41.35-1.21.39a4.42 4.42 0 0 1-2.88-.91 3.82 3.82 0 0 1-1.44-2.49c-.09-.77.09-1.21.22-1.21M386.55 99.67c-.15.45-1.79.28-3.69.57s-3.44.84-3.71.45c-.12-.19.14-.61.75-1.06a6.34 6.34 0 0 1 2.73-1 6.2 6.2 0 0 1 2.91.27c.71.22 1.07.56 1.01.77M401.76 96.76c-.27.38-1.41 0-2.76 0s-2.49.32-2.76-.06c-.12-.19.05-.56.54-.93a4 4 0 0 1 4.45 0c.49.43.66.81.53.99"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M362.67 93c1.86-6.92 11.31-16.79 18.47-16.62l11.71 6.32a11 11 0 0 1-7.08 8.75c-2 .71-4.4 1-5.52 2.77s-.31 4.37-1.37 6.25c-1.46 2.6-5.78 2.68-6.84 5.47-.47 1.21-.13 2.63-.62 3.84-.64 1.61-4.55 3.8-6.23 3.35s-1.81-3.27-2.42-4.72a7.82 7.82 0 0 1-.48-5.23c.57-3.38-.51-6.9.38-10.18"}),o.jsx("path",{fill:"#ffbe9d",d:"M370.14 114.28c0-.88-1.1-2.93-2-3-2.33-.3-6.5 0-6.39 5.89.17 8.06 8.22 6.24 8.23 6s.24-5.85.16-8.89"}),o.jsx("path",{fill:"#eb996e",d:"M367.48 120.13s-.14.1-.37.22a1.4 1.4 0 0 1-1.05 0c-.86-.29-1.6-1.63-1.67-3.08a4.5 4.5 0 0 1 .35-2 1.6 1.6 0 0 1 1-1.1.71.71 0 0 1 .84.37c.11.22.07.38.11.4s.17-.14.1-.47a.93.93 0 0 0-.33-.5 1 1 0 0 0-.78-.19 2 2 0 0 0-1.44 1.28 4.7 4.7 0 0 0-.44 2.25c.08 1.63.94 3.13 2.11 3.44a1.48 1.48 0 0 0 1.28-.24c.28-.18.32-.36.29-.38"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.81 91c-.14-2.52-3.38-4-5.87-4.37a10.5 10.5 0 0 0-7.15 1.86c-1.24.79-2.48 1.88-2.67 3.34s1.31 3.09 2.65 2.48a4.78 4.78 0 1 0 5.15 7.85 10.68 10.68 0 0 1-3.81 6A12 12 0 0 0 360.81 91M346.78 125.52c0-.38 1.05-.56 2.48-1a15 15 0 0 0 5.05-2.5 14.9 14.9 0 0 0 3.65-4.3c.77-1.29 1.18-2.22 1.56-2.16s.6 1.13.2 2.85a10.73 10.73 0 0 1-10.21 8c-1.77-.03-2.77-.54-2.73-.89"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M356.07 104.15a7.2 7.2 0 0 1-.46-2.39 17.8 17.8 0 0 1 3-11.22 7.2 7.2 0 0 1 1.59-1.85 26.7 26.7 0 0 0-3.53 7.31 27 27 0 0 0-.6 8.15M390.36 80.4c.95 3.22 6.2 7.09 8.55 9.5 4.48 4.58 5.41 6.14 6.08 17 1.72-3.88 3-7.66 2.55-11.88a17.62 17.62 0 0 0-5.4-11.22 13.71 13.71 0 0 0-11.78-3.41"}),o.jsx("path",{fill:"#ffbe9d",d:"M442.9 174.43s-5.38 22.36-7.59 32C433 216.7 427.86 240 414.22 236.6c-10.38-2.56-8.07-16-8.07-16l8.85-30.73 8.2.93 7.53-18.54 8.12-8.55Z"}),o.jsx("path",{fill:"#eb996e",d:"M409.77 221.4a11.5 11.5 0 0 1-.27-5 15.7 15.7 0 0 1 1.92-5.06 44 44 0 0 1 4-5.42 43 43 0 0 0 4-5.51 33.5 33.5 0 0 0 2.42-5 31 31 0 0 0 1.12-3.57 6 6 0 0 0 .25-1.35 8.6 8.6 0 0 0-.46 1.29c-.27.83-.67 2-1.28 3.48a37 37 0 0 1-2.49 4.89 47 47 0 0 1-4 5.42 41 41 0 0 0-4 5.52 15.3 15.3 0 0 0-1.87 5.25 9.7 9.7 0 0 0 .16 3.76 6.6 6.6 0 0 0 .33 1c.09.2.15.31.17.3"}),o.jsx("path",{fill:"#ffbe9d",d:"M430.1 174c0-.4.2-6.91.33-8.61a8.8 8.8 0 0 1 .89-3.09 2.62 2.62 0 0 1 4.08-.72l.15.13a11.5 11.5 0 0 1 3.21-3.87c1.91-1.25 3.48-2.1 5.12-1.12a2.85 2.85 0 0 1 1.58 2.37s2.43-.33 3.48.65 0 3.94 0 3.94 2.16-.66 2.69.92a4.4 4.4 0 0 1-.46 3.22s1.7.52 1.9 1.77-1.7 2.62-1.7 2.62l-5.93 4.72a11.3 11.3 0 0 1-4.57 6c-4.12 1.58-10.77-8.93-10.77-8.93"}),o.jsx("path",{fill:"#eb996e",d:"M434.62 166.91c.06 0 .05.25-.13.55a2 2 0 0 1-1 .88 2.14 2.14 0 0 1-1.36 0c-.33-.11-.49-.27-.46-.34s.81.11 1.63-.21 1.18-.95 1.32-.88M439.32 161.09c-.09.12-.66-.28-.76-1.06s.33-1.31.45-1.22 0 .57.08 1.15.34 1.04.23 1.13M449.23 163.62s-.42.61-1.31 1.38a39 39 0 0 1-3.69 2.7 5.7 5.7 0 0 1-2.36 1.1 2.13 2.13 0 0 1-2-.75 1.48 1.48 0 0 1-.16-1.46c.16-.32.36-.4.38-.37s-.11.16-.19.45a1.36 1.36 0 0 0 .27 1.16 1.8 1.8 0 0 0 1.67.48 5.6 5.6 0 0 0 2.13-1.05c1.49-1 2.82-1.87 3.75-2.56a9.6 9.6 0 0 1 1.51-1.08M451.13 167.79a38 38 0 0 1-5.65 2.88 5.8 5.8 0 0 1-2.45.72 1.93 1.93 0 0 1-1.84-1.1 1.12 1.12 0 0 1 0-.88 1.05 1.05 0 0 1 .43-.49c.33-.18.54-.08.53-.06s-.19 0-.41.23a.85.85 0 0 0-.19 1 1.54 1.54 0 0 0 1.49.75 5.75 5.75 0 0 0 2.23-.71 39 39 0 0 1 5.86-2.34M448.25 173.12c0 .06-.32.31-1 .47a4.6 4.6 0 0 1-1.18.12 3.16 3.16 0 0 1-1.47-.33.9.9 0 0 1-.43-.85 1.4 1.4 0 0 1 .32-.73 5 5 0 0 1 .85-.83c.54-.4.94-.53 1-.47s-.28.31-.72.76a6 6 0 0 0-.7.83c-.23.33-.31.67 0 .84a3.2 3.2 0 0 0 1.21.29 5.6 5.6 0 0 0 1.09 0c.62-.06 1-.17 1.03-.1"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),o.jsx("path",{fill:"none",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.91 170.39s-.12 0-.33.06a1.4 1.4 0 0 0-.76.48 1.34 1.34 0 1 0 2.18.07 1.4 1.4 0 0 0-.72-.54c-.2-.06-.33-.06-.33-.08h.05a1 1 0 0 1 .26 0 1.38 1.38 0 0 1 .77.53 1.43 1.43 0 0 1 .17 1.37 1.4 1.4 0 0 1-.53.65 1.43 1.43 0 0 1-.86.25 1.47 1.47 0 0 1-.85-.31 1.5 1.5 0 0 1-.48-.7 1.47 1.47 0 0 1 .27-1.35 1.43 1.43 0 0 1 .82-.47 1.3 1.3 0 0 1 .25 0Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11v.39a5 5 0 0 1-.24 1.08 4.8 4.8 0 0 1-.9 1.54 4.8 4.8 0 0 1-2 1.38c-.1 2.59-.22 6-.36 10l-2 1.2-1-1.14v-.85l.84-.47v.1l-.81-.61c0-.45 0-1 .05-1.45l1.39-.77v.1l-1.32-1V183c0-.42 0-.83.05-1.24l1.39-.78v.1l-1.32-1c0-.46 0-.91.05-1.35v.06a5 5 0 0 1-2-1.12 4.5 4.5 0 0 1-.73-.85 4.85 4.85 0 0 1-.29-5 4.86 4.86 0 0 1 8.05-.89 4.7 4.7 0 0 1 .93 1.71l.06.18v.18c0 .12.05.22.06.33s.05.37.05.51v.16a.4.4 0 0 1 0 .1v-.42c0-.14 0-.31-.06-.51a2 2 0 0 0-.07-.32v-.18l-.06-.18a4.6 4.6 0 0 0-.93-1.68 4.9 4.9 0 0 0-2.11-1.44 4.8 4.8 0 0 0-6 6.29 4.6 4.6 0 0 0 .5 1 4.4 4.4 0 0 0 .72.83 4.76 4.76 0 0 0 1.95 1.09h.05c0 .45 0 .9-.05 1.35l1.33 1h.07l-.08.05-1.39.77v-.05 1.69l1.32 1 .07.06h-.08l-1.39.78c0 .5 0 1-.05 1.45l.81.6.07.06h-.08l-.84.48v.84l1 1.14h-.07l2-1.19v.05c.16-4 .29-7.44.39-10a4.8 4.8 0 0 0 1.94-1.34 5 5 0 0 0 .9-1.52 5.2 5.2 0 0 0 .26-1.08v-.28a.7.7 0 0 0-.07-.33"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),o.jsx("path",{fill:"none",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.41 170.12a3 3 0 0 0-.34 0 1.37 1.37 0 0 0-.75.48 1.33 1.33 0 0 0-.23 1.26 1.35 1.35 0 0 0 1.22.93 1.37 1.37 0 0 0 1.28-.83 1.35 1.35 0 0 0-.85-1.81 3 3 0 0 0-.33-.08h.09a1 1 0 0 1 .25 0 1.36 1.36 0 0 1 .78.53 1.44 1.44 0 0 1-.36 2 1.44 1.44 0 0 1-.87.25 1.47 1.47 0 0 1-.84-.32 1.36 1.36 0 0 1-.46-.53 1.43 1.43 0 0 1 1.08-1.83.8.8 0 0 1 .26 0Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84v.38a5 5 0 0 1-.24 1.09 5.2 5.2 0 0 1-.9 1.54 5 5 0 0 1-2 1.38l-.35 10-2 1.19-1-1.14v-.84l.84-.48v.1l-.8-.6c0-.46 0-.95.05-1.45l1.39-.78v.1l-1.32-1v-.45c0-.41 0-.83.05-1.24l1.39-.77v.1l-1.32-1c0-.45 0-.9.05-1.35v.06a4.76 4.76 0 0 1-2-1.12 4.6 4.6 0 0 1-.74-.85 4.7 4.7 0 0 1-.51-1 4.9 4.9 0 0 1 3-6.41 5 5 0 0 1 3.16 0 4.94 4.94 0 0 1 2.13 1.2 4.9 4.9 0 0 1 .93 1.71l.06.19v.18c0 .11.05.22.06.32s.05.38.05.51v.43a1 1 0 0 0 0-.11v-.31c0-.14 0-.31-.05-.52s-.05-.2-.07-.32v-.17l-.06-.19a4.8 4.8 0 0 0-.94-1.68 4.73 4.73 0 0 0-2.11-1.43 4.83 4.83 0 0 0-3.1 0 4.9 4.9 0 0 0-2.7 2.33 4.83 4.83 0 0 0-.22 3.95 5.2 5.2 0 0 0 .51 1 4.3 4.3 0 0 0 .72.83 4.8 4.8 0 0 0 1.95 1.09H436v1.4-.05c.44.32.88.66 1.32 1l.08.06h-.08l-1.39.78v-.05c0 .41 0 .82-.05 1.24v.44l1.32 1h.08l-.08.05-1.39.77c0 .5 0 1-.06 1.45l.81.61.07.05h-.08l-.85.47v.84l1 1.15h-.07l2-1.19v.05c.15-4 .29-7.44.39-10a5 5 0 0 0 1.95-1.35 5.2 5.2 0 0 0 .9-1.52 5 5 0 0 0 .26-1.07v-.29a.31.31 0 0 1-.01-.31"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M441.54 173.88a6.6 6.6 0 0 0-.12-1 3.9 3.9 0 0 0-.43-1.14 4.2 4.2 0 0 0-1-1.24 4.17 4.17 0 0 0-4-.74 4 4 0 0 0-1.09.53 4.4 4.4 0 0 0-.49.39 5 5 0 0 0-.43.47 4.2 4.2 0 0 0-.19 5 6 6 0 0 0 .4.51 5 5 0 0 0 .46.42 3.8 3.8 0 0 0 1 .61 4.27 4.27 0 0 0 2.21.27 4.1 4.1 0 0 0 1.8-.71 4.4 4.4 0 0 0 1.13-1.16 4.3 4.3 0 0 0 .51-1.11 6.6 6.6 0 0 0 .2-1v.61c0 .13-.05.27-.1.44a3.9 3.9 0 0 1-.51 1.13 4.3 4.3 0 0 1-1.13 1.19 4.2 4.2 0 0 1-1.84.74 4.36 4.36 0 0 1-2.26-.26 4 4 0 0 1-1.07-.63 6 6 0 0 1-.48-.43 4 4 0 0 1-.4-.52 4.29 4.29 0 0 1 .19-5.11 5 5 0 0 1 .44-.49 5 5 0 0 1 .51-.39 4.22 4.22 0 0 1 3.39-.64 4.14 4.14 0 0 1 1.78.88 4.3 4.3 0 0 1 1 1.27 4.4 4.4 0 0 1 .42 1.16 3 3 0 0 1 .06.45 2 2 0 0 1 0 .33v.27Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M439 171.58a4 4 0 0 0-.06-.39 1.52 1.52 0 0 0-.56-.89 1.6 1.6 0 0 0-.66-.32 1.6 1.6 0 0 0-.83.05 1.47 1.47 0 0 0-.75.52 1.53 1.53 0 0 0-.33.91 1.56 1.56 0 0 0 1 1.52 1.63 1.63 0 0 0 1.51-.16 1.6 1.6 0 0 0 .62-.85 3 3 0 0 0 .09-.39s0 0 0 .11a1.5 1.5 0 0 1-.05.3 1.63 1.63 0 0 1-.62.9 1.66 1.66 0 0 1-.72.29 1.67 1.67 0 0 1-1.64-.71 1.67 1.67 0 0 1-.3-1 1.72 1.72 0 0 1 .37-1 1.64 1.64 0 0 1 .81-.55 1.6 1.6 0 0 1 .89 0 1.7 1.7 0 0 1 .69.34 1.6 1.6 0 0 1 .55 1 1.1 1.1 0 0 1 0 .3c-.01-.01-.01.02-.01.02M438 188.45s0-2.29.13-5.1.22-5.1.25-5.1 0 2.28-.13 5.1-.25 5.1-.25 5.1"}),o.jsx("path",{fill:"#e0e0e0",d:"M437.83 170.6a.74.74 0 0 1-.65 0v-6.15l.65.05Z"}),o.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.5 170.7a.8.8 0 0 1-.33-.08v-6.19l.7.05v6.14a.8.8 0 0 1-.37.08m-.29-.12a.68.68 0 0 0 .59 0v-6.06h-.6Z"}),o.jsx("path",{fill:"#ffbe9d",d:"M435 161.43a14.5 14.5 0 0 0 1.73 1.27 2.34 2.34 0 0 1 1.06 1.79 2.19 2.19 0 0 1-1.28 1.69 4 4 0 0 1-5.42-1.63"}),o.jsx("path",{fill:"#eb996e",d:"M431.13 164.55a11 11 0 0 0 1.36 1.22 3.9 3.9 0 0 0 1.8.6 4 4 0 0 0 2.24-.49 1.71 1.71 0 0 0 1-1.74 2.83 2.83 0 0 0-1.11-1.45c-.95-.64-1.48-1.2-1.4-1.26s.59.37 1.61.95A3 3 0 0 1 438 164a1.82 1.82 0 0 1-.21 1.34 2.9 2.9 0 0 1-1 1 4.27 4.27 0 0 1-2.56.52 4.07 4.07 0 0 1-2-.78c-.93-.75-1.15-1.52-1.1-1.53"}),o.jsx("path",{fill:"#ffbe9d",d:"M441.16 158.88a23.7 23.7 0 0 0-3 4.4 3.64 3.64 0 0 0-.45 1.57 1.58 1.58 0 0 0 .73 1.4 1.6 1.6 0 0 0 1.37 0 4.3 4.3 0 0 0 1.14-.81 28 28 0 0 0 3.72-4.14 3.9 3.9 0 0 0 .66-1.17 1.6 1.6 0 0 0-.08-1.31"}),o.jsx("path",{fill:"#eb996e",d:"M445.26 158.81s.25.2.28.74a3.2 3.2 0 0 1-.82 2 22 22 0 0 1-2 2.46c-.4.44-.84.89-1.31 1.33a5 5 0 0 1-1.7 1.22 1.9 1.9 0 0 1-1.15 0 1.53 1.53 0 0 1-.88-.75 2.45 2.45 0 0 1 0-2 12.8 12.8 0 0 1 1.6-2.77 11.5 11.5 0 0 1 1.9-2.19 23 23 0 0 1-1.59 2.41 13.7 13.7 0 0 0-1.44 2.71 1.92 1.92 0 0 0 0 1.59 1.11 1.11 0 0 0 1.41.46 4.7 4.7 0 0 0 1.5-1.09c.47-.43.91-.86 1.31-1.28.81-.85 1.49-1.65 2-2.35a3.4 3.4 0 0 0 .92-1.78 4 4 0 0 0-.03-.71"})]}),o.jsx("path",{id:"freepik--Floor--inject-81",fill:"var(--LoginSVG-fill)",d:"M461 480.17c0 .15-97.17.26-217 .26s-217-.11-217-.26 97.15-.26 217-.26 217 .09 217 .26"})]}),N9=(e=0)=>e>=1e6?(e/1e6).toFixed(1).replace(".0","")+"M":e>=1e3?(e/1e3).toFixed(1).replace(".0","")+"k":String(e),I9=b.div`
    width: 100%;
    margin-top: 28px;
    padding-top: 10px;
`,T9=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 14px;
`,L9=b.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.15s;
    &:hover { opacity: 0.75; }
`,P9=b.div`
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
`,E9=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,D9=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,R9=b.span`
    font-size: 1em;
    font-weight: 700;
    color: var(--textColor);
    display: flex;
    align-items: center;
    gap: 6px;
`,O9=b.span`
    font-size: 0.78em;
    color: var(--textColor);
    opacity: 0.45;
`,F9=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`,z9=b.span`
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
`,B9=b.button`
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
`;const U9=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
`,H9=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    border-radius: 12px;
`,$9=b.p`
    font-size: 1em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 15px 10px 6px 0;
    display: flex;
    align-items: center;
    gap: 6px;
`,ud=b.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`,q9=b(qo)`
    fill: var(--backgroundColor);
`,V9=b(jc)`
    stroke: var(--textColor);
`,Oa=b.button`
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
`;b(G3)`
    font-size: 0.8em;
    color: var(--backgroundColor) !important;
    fill: red !important;
`;function Y9({poster:e,onDeleted:t,onVisibilityChanged:r,onSave:n,isSavingPoster:a,isOwnerOrAdmin:s}){var le,fe;const{t:l,i18n:c}=Tt(),d=sn(),{user:f,isAuthenticated:p}=pi(),[v,S]=k.useState(e.favorited||!1),[m,w]=k.useState(e.favoritesCount||0),[_,j]=k.useState(!1),[M,I]=k.useState(e.visibility||"public"),[P,D]=k.useState(!1),[$,H]=k.useState(!1),[Q,Z]=k.useState(!1),T=e.authorId,X=p&&(f==null?void 0:f.id)===((le=T==null?void 0:T._id)==null?void 0:le.toString()),C=p&&((fe=f==null?void 0:f.permissions)==null?void 0:fe.includes("admin")),E=async()=>{if(!p||_)return;j(!0);const ne=v,ge=m;S(!ne),w(ne?ge-1:ge+1);try{await Xe.toggleFavorite(e._id)}catch{S(ne),w(ge)}finally{j(!1)}},U=async()=>{if(P)return;D(!0);const ne=M==="public"?"private":"public";try{await Xe.updatePosterVisibility(e._id,ne),I(ne),r==null||r(e._id,ne)}catch(ge){console.error("Failed to update visibility",ge)}finally{D(!1)}},Y=async()=>{if(!Q){Z(!0);try{await Xe.deletePoster(e._id),H(!1),t==null||t(e._id)}catch(ne){console.error("Failed to delete poster",ne)}finally{Z(!1)}}},ie=e.createdAt?new Date(e.createdAt).toLocaleDateString(c.language,{year:"numeric",month:"short",day:"numeric"}):null;return o.jsxs(o.Fragment,{children:[$&&o.jsx(Fs,{title:l("DASH_ConfirmDeleteTitle"),paragraph:l("DASH_ConfirmDelete"),confirmText:l("DASH_Delete"),cancelText:l("GoBack"),onConfirm:Y,onCancel:()=>H(!1),canClose:!0,isClosing:!1}),o.jsxs(I9,{children:[o.jsxs(T9,{children:[o.jsxs(L9,{onClick:()=>(T==null?void 0:T.username)&&d(`/u/${T.username}`),children:[o.jsx(P9,{children:T!=null&&T.avatar?o.jsx(E9,{src:T.avatar,alt:T.name}):((T==null?void 0:T.name)||"?").charAt(0).toUpperCase()}),o.jsxs(D9,{children:[o.jsxs(R9,{children:[(T==null?void 0:T.name)||(T==null?void 0:T.username)||"Unknown",(T==null?void 0:T.badge)&&o.jsx(Ns,{badge:T.badge,size:18})]}),ie&&o.jsxs(O9,{children:[l("POSTER_INFO_PublishedAt")," ",ie]})]})]}),o.jsxs(F9,{children:[o.jsx(z9,{children:M==="public"?o.jsxs(o.Fragment,{children:[o.jsx(wh,{})," ",l("DASH_Public")]}):o.jsxs(o.Fragment,{children:[o.jsx(Nc,{})," ",l("DASH_Private")]})}),o.jsxs(B9,{$active:v,onClick:E,disabled:!p||_,children:[v?o.jsx(q9,{}):o.jsx(V9,{}),N9(m)]})]})]}),X&&o.jsx(U9,{children:o.jsxs(ud,{children:[s&&n&&o.jsx(Oa,{onClick:n,disabled:a,children:a?"…":l("EDITOR_SaveButton")}),o.jsx(Oa,{onClick:U,disabled:P,children:M==="public"?o.jsx(o.Fragment,{children:l("DASH_MakePrivate")}):o.jsx(o.Fragment,{children:l("DASH_MakePublic")})}),o.jsx(Oa,{onClick:()=>H(!0),children:l("DASH_Delete")})]})}),C&&!X&&o.jsxs(H9,{children:[o.jsx($9,{children:l("POSTER_INFO_AdminControls")}),o.jsxs(ud,{children:[s&&n&&o.jsx(Oa,{onClick:n,disabled:a,children:a?"…":l("EDITOR_SaveButton")}),o.jsx(Oa,{onClick:U,disabled:P,children:M==="public"?o.jsxs(o.Fragment,{children:[" ",l("DASH_MakePrivate")]}):o.jsx(o.Fragment,{children:l("DASH_MakePublic")})}),o.jsx(Oa,{onClick:()=>H(!0),children:l("DASH_Delete")})]})]})]})]})}const dd=new Set(["Release date","Lançamento","Fecha de lanzamiento","发布日期"]),hd=new Set(["Runtime","Duração","Duración","时长"]),G9={en:"en-US",pt:"pt-BR",es:"es-ES",zh:"zh-CN"},W9={day:"numeric",month:"short",year:"numeric"};function Hf(e){if(!e)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(e)){const[r,n,a]=e.split("-").map(Number);return new Date(r,n-1,a)}const t=new Date(e);return!isNaN(t.getTime())&&t.getFullYear()>=1900&&t.getFullYear()<=2100?t:null}function sc(e,t){const r=Hf(e);if(!r)return e;const n=G9[t]||"en-US";return new Intl.DateTimeFormat(n,W9).format(r)}const X9=b.div`
    width: 80%;
    margin-inline: auto;
`,Z9=b.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,J9=b(xh)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,K9=b.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Q9=b.div`
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
`,ew=Rt`
    0% {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,tw=Rt`
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
`,rw=b.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    animation: ${e=>e.visible?Za`${ew} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`:Za`${tw} 0.3s cubic-bezier(0.4, 0, 1, 1) forwards`};
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
`,nw=b.div`
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
`,iw=Rt`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.08;
    }
    100% {
        opacity: 0;
    }
`,ow=b.div`
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
    animation: ${e=>e.visible?Za`${iw} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"};
    opacity: 0;
`,aw=b(r1)`
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
`,sw=b.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,lw=b.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    width: 90%;
    margin-inline: auto;
    position: relative;
`,cw=b.div`
    position: absolute;
    bottom: -1px;
    height: 2px;
    background: var(--AccentColor);
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    left: ${e=>e.left||0}px;
    width: ${e=>e.width||0}px;
    border-radius: 5px;
`,jl=b.div`
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
`,uw=b.div`
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
`,dw=b.div`
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
`,hw=b.div`
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
`,fd=b.button`
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
`;const fw=b.div`
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
`,pw=b.div`
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

    ${e=>e.isDragOver&&Za`
        background: var(--AccentColor);
        opacity: 0.7;
        border-radius: 8px;
    `}

    @media (max-width: 530px) {
        gap: 8px;
        padding: 8px 10px;
    }
`,pd=b.div`
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
`,md=b.input`
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
`,gd=b.input`
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
`,mw=b.div`
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
`,gw=b.button`
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
`,xw=b.button`
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
`,vw=b(U8)`
    font-size: 5em;
    margin-right: 5px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
`,bw=b(B8)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`,ww=b(n6)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`,yw=b(o6)`
    font-size: 1.25em;
    margin-right: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: var(--textColor);
    margin-top: -1px;
`,_w=b(H8)`
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
`;b(Bm)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;b(k9)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;b(M9)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;b(U6)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Za`
                  animation: ${Rt`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Za`
                  animation: ${Rt`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`;const Cw=b.div`
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
`;const Sw=b(jh)`
    font-size: 3em;
`,xd=b.div`
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
`,lc=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,cc=b.h3`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,vd=b.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
`,Fa=b.div`
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
`,za=b.div`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
`,uc=b.div`
    font-size: 0.75em;
    color: var(--textSecondary);
`,Aw=b.div`
    padding: 10px 10px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    gap: 12px;
`,kw=b.p`
    font-size: 0.9em;
    color: var(--textColor);
    margin: 0;
    line-height: 1.5;
`,bd=b.button`
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
`,Mw=b.div`
    background: rgba(231, 76, 60, 0.12);
    border: 1px solid rgba(231, 76, 60, 0.35);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.88em;
    color: #e74c3c;
    line-height: 1.5;
`,jw=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,wd=b.button`
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
`,yd=b.div`
    font-size: 1.5em;
    color: ${({$selected:e})=>e?"var(--AccentColor)":"var(--textColor)"};
    display: flex;
    align-items: center;
    flex-shrink: 0;
`,_d=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Cd=b.span`
    font-size: 1.4em;
    font-weight: 700;
    color: var(--textColor);
`,Sd=b.span`
    font-size: 1.1em;
    opacity: 0.65;
    color: var(--textColor);
`,Nw=b(z6)`
    font-size: 2em;
`,Iw=b(F6)`
    font-size: 2em;
`,Tw=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    padding: 1rem;
`,Lw=b.p`
    font-size: 1em;
    color: var(--textColor);
    margin-top: 15px;
    font-weight: bolder;
`,Pw=b.button`
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
`,S0=k.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:a,source:s,posterId:l,posterFullData:c,onPublishSuccess:d},f)=>{var ko;const{t:p,i18n:v}=Tt(),S=sn(),{user:m,isAuthenticated:w}=pi(),_=k.useRef(null),j=k.useRef(null),M=k.useRef(null),[I,P]=k.useState(""),[D,$]=k.useState(""),[H,Q]=k.useState(""),[Z,T]=k.useState(""),[X,C]=k.useState(""),[E,U]=k.useState("200"),[Y,ie]=k.useState("110"),[le,fe]=k.useState("50"),[ne,ge]=k.useState((n==null?void 0:n.marginTop)??""),[we,xe]=k.useState(160),[A,z]=k.useState((n==null?void 0:n.marginCover)??0),[q,ee]=k.useState((n==null?void 0:n.marginBackground)??0),[re,ae]=k.useState((n==null?void 0:n.backgroundColor)??"#5900ff"),[ue,pe]=k.useState((n==null?void 0:n.textColor)??"#ff9100"),[ce,_e]=k.useState((n==null?void 0:n.color1)??"#ff0000"),[Ie,Pe]=k.useState((n==null?void 0:n.color2)??"#00ff40"),[be,J]=k.useState((n==null?void 0:n.color3)??"#2600ff"),[Ve,Je]=k.useState(!0),[Fe,Te]=k.useState((n==null?void 0:n.useFade)??!0),[Be,De]=k.useState((n==null?void 0:n.showTracklist)??!1),[it,Ye]=k.useState((n==null?void 0:n.showArtistSignature)??!1),[St,st]=k.useState(""),[lt,Lt]=k.useState(""),[ut,et]=k.useState(""),[ot,tt]=k.useState(null),[yt,At]=k.useState("information"),Ue=k.useRef({}),[dt,Pt]=k.useState({left:0,width:0}),[ye,ze]=k.useState("public"),[Oe,vt]=k.useState(!1),[qt,Et]=k.useState(""),[ct,kt]=k.useState(!1),[zi,Sr]=k.useState(!1),[Zn,Zr]=k.useState("");function at(K){yn(!0),P(K.albumName||""),$(K.albumNameOriginal||K.albumName||""),Q(K.artistsName||""),T(K.artistsNameOriginal||K.artistsName||""),C(K.spotifyArtistId||""),U(K.titleSize||"200"),ie(K.artistsSize||"110"),fe(K.tracksSize||"50"),ge(K.marginTop||""),xe(K.marginSide||160),z(K.marginCover||0),ee(K.marginBackground||0),ae(K.backgroundColor||"#5900ff"),pe(K.textColor||"#ff9100"),_e(K.color1||"#ff0000"),Pe(K.color2||"#00ff40"),J(K.color3||"#2600ff"),K.coverZoom!==void 0?Rn(K.coverZoom):K.marginCover!==void 0?Rn(-K.marginCover/11):Rn(0),wi(K.coverHorizontalPosition||0),bo(K.coverVerticalPosition||0),ba(K.coverBlur||0),wo(K.signatureHorizontalPosition||0),ya(K.signatureVerticalPosition||0),yo(K.signatureScale||1),Je(K.useWatermark!==void 0?K.useWatermark:!0),Te(K.useFade!==void 0?K.useFade:!0),De(K.showTracklist!==void 0?K.showTracklist:!1),Ye(K.showArtistSignature!==void 0?K.showArtistSignature:!1),gn(K.useUncompressed!==void 0?K.useUncompressed:!1),st(K.albumCover||""),Lt(K.uncompressedAlbumCover||""),et(K.customFont||""),Yt(K.tracklist||""),Jr(K.trackDurations||[]),xi.current=K.tracklist||"",Jn(dd.has(K.titleRelease)?p("EDITOR_ReleaseTitle"):K.titleRelease??""),bn.current=K.releaseDate||"",mo(sc(K.releaseDate||"",v.language)),Ui(hd.has(K.titleRuntime)?p("EDITOR_RuntimeTitle"):K.titleRuntime??""),bi(K.runtime||""),Pr(""),Er(""),Mt()}k.useEffect(()=>{if(ot){const K=new FileReader;K.onload=async je=>{const He="CustomFont",ht=new FontFace(He,je.target.result);try{const bt=await ht.load();document.fonts.add(bt),et(He)}catch(bt){console.error("Erro ao carregar fonte:",bt)}},K.readAsArrayBuffer(ot)}},[ot]),k.useEffect(()=>{a&&at(a)},[a]);const[ln,gn]=k.useState(!1),[xn,vn]=k.useState("Original"),[Nt,Yt]=k.useState(""),[Ot,Jr]=k.useState([]),[Dn,Pr]=k.useState(""),[cn,Er]=k.useState(""),[Ar,Dr]=k.useState(null),[Bi,Kr]=k.useState(null),xi=k.useRef(""),[vi,Jn]=k.useState(""),[Kn,mo]=k.useState(""),bn=k.useRef(""),[go,Ui]=k.useState(""),[Br,bi]=k.useState("");k.useEffect(()=>{const K=Ue.current[yt];if(K){const{offsetLeft:je,offsetWidth:He}=K;Pt({left:je,width:He})}},[yt]),k.useEffect(()=>{const K=()=>{const je=Ue.current.information;if(je){const{offsetLeft:He,offsetWidth:ht}=je;Pt({left:He,width:ht})}else requestAnimationFrame(K)};requestAnimationFrame(()=>{setTimeout(K,0)})},[]),k.useEffect(()=>{if(Jn(K=>dd.has(K)?p("EDITOR_ReleaseTitle"):K),Ui(K=>hd.has(K)?p("EDITOR_RuntimeTitle"):K),bn.current){const K=sc(bn.current,v.language);(K!==bn.current||Hf(bn.current))&&mo(K)}},[v.language]),k.useEffect(()=>{const K=Nt.split(`
`).filter(je=>je.trim()!=="");if(K.length>0&&Ot.length>0){let je=0;for(let lr=0;lr<Math.min(K.length,Ot.length);lr++)Ot[lr]&&(je+=Ot[lr]);const He=Math.floor(je/1e3),ht=Math.floor(He/3600),bt=Math.floor(He%3600/60),sr=He%60,kr=ht>0?`${ht}h ${bt}min ${sr}s`:`${bt}min ${sr}s`;bi(kr)}},[Nt,Ot]);const[ga,xo]=k.useState(!1),[Yo,xa]=k.useState(null),[Qn,vo]=k.useState(null),[rs,or]=k.useState(!1),[Go,va]=k.useState(null),[Qr,Rn]=k.useState((n==null?void 0:n.coverZoom)??0),[en,wi]=k.useState(0),[Kt,bo]=k.useState(0),[Wo,ba]=k.useState(0),[ns,Ur]=k.useState(!1),[Xo,Hi]=k.useState(null),[ei,wo]=k.useState(0),[wa,ya]=k.useState(0),[_a,yo]=k.useState(1),[wn,ti]=k.useState(null),[Ca,yi]=k.useState(!1),[_o,pt]=k.useState(!1),[Sa,Aa]=k.useState(!1),[ka,is]=k.useState(!1),[un,yn]=k.useState(!1),[_i,Zo]=k.useState("png"),[On,$i]=k.useState(1),Ci=(n==null?void 0:n.backgroundColor)!==void 0,qi=(n==null?void 0:n.textColor)!==void 0,Vi=(n==null?void 0:n.color1)!==void 0,Ma=(n==null?void 0:n.color2)!==void 0,Co=(n==null?void 0:n.color3)!==void 0;k.useEffect(()=>{(X||H)&&(async()=>{if(!(!X&&!H)&&!wn)try{const je=await Lc(X,H);je&&ti(je.url)}catch{}})()},[X,H,wn]),k.useEffect(()=>{if(!un){const K=-Qr*10;z(K)}},[Qr,un]);const Jo=K=>{U(K.target.value),yi(!0)},Yi=(K,je)=>{je&&!_o?(U(K),pt(!0)):Ca||U(K)},Gi=K=>{fe(K.target.value),Aa(!0)},Ko=(K,je)=>{je&&!ka?(fe(K),is(!0)):Sa||fe(K)},Wi=K=>{X||C(K)},Si={albumCover:St,uncompressedAlbumCover:lt,useUncompressed:ln,albumName:I,artistsName:H,spotifyArtistId:X,titleSize:E,artistsSize:Y,tracksSize:le,marginTop:ne,marginSide:we,marginCover:A,marginBackground:q,titleRelease:vi,releaseDate:Kn,titleRuntime:go,runtime:Br,backgroundColor:re,textColor:ue,useWatermark:Ve,useFade:Fe,showTracklist:Be,showArtistSignature:it,tracklist:Nt,trackDurations:Ot,color1:ce,color2:Ie,color3:be,albumID:e,coverZoom:Qr,coverHorizontalPosition:en,coverVerticalPosition:Kt,coverBlur:Wo,signatureHorizontalPosition:ei,signatureVerticalPosition:wa,signatureScale:_a,userAdjustedTitleSize:Ca,initialTitleSizeSet:_o,userAdjustedTracksSize:Sa,initialTracksSizeSet:ka},[ri,ja]=k.useState(null),[ni,_n]=k.useState(null),[tn,Xi]=k.useState(null),[So,Cn]=k.useState(!1),[Qo,g]=k.useState(!1),[N,V]=k.useState(!1),[te,de]=k.useState(!1),[Ae,Me]=k.useState(!1),[$e,We]=k.useState(!1);k.useEffect(()=>{if(So){V(!1);const K=setTimeout(()=>{We(!0)},100);return()=>clearTimeout(K)}else We(!1)},[So]);const ft=K=>{Cn(!1),Me(!1),k3(I,H),setTimeout(()=>{ja(K),We(!1),setTimeout(()=>{V(!0)},50)},300)},gt=K=>{_n(K),g(!1)};k.useEffect(()=>{if(ni&&tn){if(tn==="png"){const K=document.createElement("a");K.href=ni,K.download=`Posterfy - ${I}.png`,K.click(),T1(I,"poster",H),l&&(Xe.registerDownload(l).catch(()=>{}),w2(l,I,H,"png"))}else if(tn==="pdf"){const K=new Image;K.onload=()=>{const je=new nt({orientation:"portrait",unit:"mm",format:"a4",compress:!1});je.addImage(ni,"JPEG",0,0,210,297,void 0,"FAST"),je.save(`Posterfy - ${I}.pdf`),T1(I,"poster_pdf",H),l&&(Xe.registerDownload(l).catch(()=>{}),w2(l,I,H,"pdf"))},K.src=ni}else if(tn==="jpg"){const K=new Image;K.onload=()=>{const je=document.createElement("canvas");je.width=K.width,je.height=K.height;const He=je.getContext("2d");He.fillStyle="#FFFFFF",He.fillRect(0,0,je.width,je.height),He.drawImage(K,0,0),je.toBlob(ht=>{const bt=document.createElement("a");bt.href=URL.createObjectURL(ht),bt.download=`Posterfy - ${I}.jpg`,bt.click(),URL.revokeObjectURL(bt.href),T1(I,"poster_jpg",H),l&&Xe.registerDownload(l).catch(()=>{})},"image/jpeg",.95)},K.src=ni}_n(null),Xi(null)}},[ni,tn,I,H]),k.useEffect(()=>{_n(null)},[On]);const Mt=()=>{yi(!1),Aa(!1),V(!1),requestAnimationFrame(()=>{Me(!0),Cn(!0)})},Gt=()=>{Xi("png"),g(!0)},ur=async()=>{vt(!0),Et("");try{const K=Si;if(l){const ht=await Xe.updatePosterJson(l,K,I,H);d==null||d(ht.poster._id),t();return}const je={spotifyAlbumId:e,albumName:I,albumNameOriginal:D||I,artistsName:H,artistsNameOriginal:Z||H,releaseDate:Kn,visibility:ye,posterJson:K},He=await Xe.publishPoster(je);T3(I,H,ye),d==null||d(He.poster._id),t()}catch(K){Et(K.message||p("COMMUNITY_PublishError"))}finally{vt(!1)}},Vt=async()=>{Sr(!0);try{const K=Si;await Xe.updatePosterJson(l,K,I,H),L3(l,I,H),kt(!1),d==null||d(l),t()}catch(K){console.error("Failed to save poster:",K);const je=K.message||"Failed to save poster changes";K.status===403||K.status===401?Zr("Unauthorized: Only the poster owner can edit it"):K.status===404?Zr("Poster not found. It may have been deleted."):Zr(je)}finally{Sr(!1)}},dr=()=>{Xi("pdf"),g(!0)},hr=()=>{Xi("jpg"),g(!0)};function ar(K,je){xa(K),vo(je),xo(!0)}function rn(){xo(!1)}function Hr(K){va(K),or(!0)}function ea(){or(!1)}function Zi(){Ur(!1)}function Ji(K){it?!wn&&X?(async()=>{try{const He=await Lc(X,H);He?(ti(He.url),setTimeout(()=>{Hi(K),Ur(!0)},100)):(Hi(K),Ur(!0))}catch{Hi(K),Ur(!0)}})():(Hi(K),Ur(!0)):(Ye(!0),V(!1),Cn(!0))}const Ai=()=>{const je=Nt.split(`
`).map(He=>He.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());Yt(je.join(`
`))},Ki=()=>{const je=Nt.split(`
`).map(He=>He.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());Yt(je.join(`
`))},Qi=K=>{if(!K)return"";const je=Math.floor(K/1e3),He=Math.floor(je/60),ht=je%60;return`${He}:${String(ht).padStart(2,"0")}`},ki=()=>Nt.split(`
`).filter(je=>je.trim()!=="").map((je,He)=>{const ht=je.match(/^(\d+\.\s*)?(.+)$/),bt=ht?ht[2].trim():je.trim();return{index:He+1,name:bt,duration:Ot[He]||null,originalLine:je}}),Tr=(K,je)=>{const He=Nt.split(`
`);He[K]=je,Yt(He.join(`
`))},eo=K=>{const je=Nt.split(`
`);je.splice(K,1);const He=Ot.filter((ht,bt)=>bt!==K);Jr(He),Yt(je.join(`
`))},to=(K,je)=>{if(!je.trim()){const lr=[...Ot];lr[K]=0,Jr(lr);return}const He=je.split(":");if(He.length!==2)return;const ht=parseInt(He[0],10),bt=parseInt(He[1],10);if(isNaN(ht)||isNaN(bt)||bt>59)return;const sr=(ht*60+bt)*1e3,kr=[...Ot];kr[K]=sr,Jr(kr)},ta=()=>{if(!Dn.trim())return;const K=Nt.split(`
`).filter(ht=>ht.trim()!==""),je=K.length+1;K.push(`${je}. ${Dn}`);let He=0;if(cn.trim()){const ht=cn.split(":");if(ht.length===2){const bt=parseInt(ht[0],10),sr=parseInt(ht[1],10);!isNaN(bt)&&!isNaN(sr)&&sr<=59&&(He=(bt*60+sr)*1e3)}}Yt(K.join(`
`)),Jr([...Ot,He]),Pr(""),Er("")},ra=K=>{Dr(K)},rr=(K,je)=>{K.preventDefault(),Kr(je)},ii=()=>{Kr(null)},Ao=(K,je)=>{if(K.preventDefault(),Kr(null),Ar===null||Ar===je){Dr(null);return}const He=Nt.split(`
`).filter(lr=>lr.trim()!==""),ht=[...Ot],bt=He[Ar],sr=ht[Ar];He.splice(Ar,1),ht.splice(Ar,1),He.splice(je,0,bt),ht.splice(je,0,sr);const kr=He.map((lr,nr)=>{const hn=lr.match(/^(\d+\.\s*)?(.+)$/),Qt=hn?hn[2].trim():lr.trim();return`${nr+1}. ${Qt}`});Yt(kr.join(`
`)),Jr(ht),Dr(null)},Na=()=>{Dr(null),Kr(null)};async function dn(K,je="us"){var He;try{let ht=`https://itunes.apple.com/search?term=${encodeURIComponent(K)}&country=${je}&entity=album&limit=1`,bt=await fetch(ht);if(!bt.ok)throw new Error(`HTTP Error: ${bt.status}`);let sr=await bt.json();if(!((He=sr.results)!=null&&He.length))return console.warn("No album data found."),gn(!1),!1;let nr=sr.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return nr.length===2?`https://a5.mzstatic.com/us/r1000/0/${nr[1].split("/").slice(0,-1).join("/")}`:""}catch(ht){return console.error("Error fetching album cover:",ht.message),""}}k.useEffect(()=>{Jn(p("EDITOR_ReleaseTitle")),Ui(p("EDITOR_RuntimeTitle"))},[p]),k.useEffect(()=>{const K=async()=>{var je;try{const kr=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,nr=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${kr}`}})).json(),hn=nr.artists.map($r=>$r.name).join(", ");P(nr.name),$(nr.name),Q(hn),T(hn),nr.artists.length>0&&(console.debug("Setting Spotify artist ID:",nr.artists[0].id),C(nr.artists[0].id));const Qt=(je=nr.images[0])==null?void 0:je.url,na=await A9(Qt);st(na),bn.current=nr.release_date,mo(sc(nr.release_date,v.language));const Sn=await dn(nr.name+" "+hn);Lt(Sn||na);const Fn=nr.tracks.items.reduce(($r,zn)=>$r+zn.duration_ms,0),Mo=Math.floor(Fn/1e3),jo=Math.floor(Mo/60),No=Math.floor(jo/60),Io=Mo%60,oi=jo%60,ji=No>0?`${No}h ${oi}min ${Io}s`:`${oi}min ${Io}s`;bi(ji);const ai=nr.tracks.items.map(($r,zn)=>(zn===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&De(!0),`${zn+1}. ${$r.name}`)),ro=nr.tracks.items.map($r=>$r.duration_ms);Yt(ai.join(`
`)),Jr(ro),xi.current=ai.join(`
`),Pr(""),Er(""),de(!0)}catch(He){console.error("Error trying to fetch album data:",He)}};a?(at(a),de(!0)):(yn(!1),Pr(""),Er(""),K())},[e]),k.useEffect(()=>{const K=je=>{je.ctrlKey&&je.key==="s"?(je.preventDefault(),Mt()):je.ctrlKey&&je.shiftKey&&je.key==="D"?(je.preventDefault(),dr()):je.ctrlKey&&je.key==="d"&&(je.preventDefault(),Gt())};return window.addEventListener("keydown",K),()=>{window.removeEventListener("keydown",K)}},[ri,I,Gt]);const Mi=k.useRef(!0);return k.useEffect(()=>{if(Mi.current){Mi.current=!1;return}if(!te)return;const K=setTimeout(()=>{Mt()},1e3);return()=>{clearTimeout(K)}},[I,H,E,Y,le,ne,we,A,q,re,ue,ce,Ie,be,Ve,Fe,Be,it,Nt,ln,vi,Kn,go,Br,Qr,en,Kt,Wo,ut,te]),o.jsx(o.Fragment,{children:te?o.jsxs(X9,{ref:f,children:[o.jsx(Bh.Palette,{src:St,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:K})=>(k.useEffect(()=>{if(!K||K.length===0||un)return;let je=!1;!Ci&&K[0]&&(ae(K[0]),je=!0),!qi&&K[1]&&(pe(K[1]),je=!0),!Vi&&K[2]&&(_e(K[2]),je=!0),!Ma&&K[3]&&(Pe(K[3]),je=!0),!Co&&K[4]&&(J(K[4]),je=!0),je&&Mt()},[K,un,Ci,qi,Vi,Ma,Co]),null)}),o.jsxs(Z9,{onClick:t,children:[o.jsx(J9,{}),o.jsx(K9,{children:p("GoBack")})]}),o.jsxs(Q9,{children:[o.jsx(js,{ref:j,onImageReady:ft,posterData:Si,generatePoster:So,onTitleSizeAdjust:Yi,onTracksSizeAdjust:Ko,onArtistIdDiscovered:Wi,customFont:ut,scale:.3}),Qo&&o.jsx("div",{style:{position:"absolute",left:"-9999px",top:"-9999px"},children:o.jsx(js,{ref:M,onImageReady:gt,posterData:Si,generatePoster:Qo,onArtistIdDiscovered:Wi,customFont:ut,scale:On})}),o.jsxs(nw,{children:[o.jsx(ow,{visible:N}),ri?o.jsx(rw,{src:ri,ref:_,visible:N}):o.jsx(Cw,{ref:_}),o.jsx(aw,{visible:$e})]}),o.jsxs(sw,{children:[o.jsx(mr,{animationDelay:50,children:o.jsxs(lw,{children:[o.jsx(jl,{ref:K=>Ue.current.information=K,$active:yt==="information",onClick:()=>At("information"),children:o.jsxs(o.Fragment,{children:[o.jsx(bw,{}),p("EDITOR_InformationTab")]})}),o.jsx(jl,{ref:K=>Ue.current.tracklist=K,$active:yt==="tracklist",onClick:()=>At("tracklist"),children:o.jsxs(o.Fragment,{children:[o.jsx(ww,{}),p("EDITOR_TracklistTab")]})}),o.jsx(jl,{ref:K=>Ue.current.export=K,$active:yt==="export",onClick:()=>At("export"),children:o.jsxs(o.Fragment,{children:[o.jsx(yw,{}),p("EDITOR_ExportTab")]})}),s==="search_creation"&&o.jsx(jl,{ref:K=>Ue.current.publish=K,$active:yt==="publish",onClick:()=>At("publish"),children:o.jsxs(o.Fragment,{children:[o.jsx(_w,{}),p("EDITOR_PublishTab")]})}),o.jsx(cw,{left:dt.left,width:dt.width})]})}),yt==="information"?o.jsxs(uw,{children:[o.jsx(mr,{animationDelay:0,children:o.jsx(Oo,{title:p("EDITOR_AlbumName"),value:I,onChange:K=>P(K.target.value)})}),o.jsx(mr,{animationDelay:50,children:o.jsx(Oo,{title:p("EDITOR_ArtistName"),value:H,onChange:K=>Q(K.target.value)})}),o.jsx(mr,{animationDelay:100,children:o.jsx(Oo,{title:p("EDITOR_TitleSize"),value:E,onChange:Jo})}),o.jsx(mr,{animationDelay:150,children:o.jsx(Oo,{title:p("EDITOR_ArtistSize"),value:Y,onChange:K=>ie(K.target.value)})}),o.jsx(mr,{animationDelay:200,children:o.jsx(Oo,{title:p("EDITOR_TracksSize"),value:le,onChange:Gi})}),o.jsx(mr,{animationDelay:250,children:o.jsx(Oo,{title:p("EDITOR_MarginTop"),value:ne,onChange:K=>ge(K.target.value)})}),o.jsx(mr,{animationDelay:300,children:o.jsx(Oo,{title:p("EDITOR_MarginSide"),value:we,onChange:K=>xe(K.target.value)})}),o.jsx(mr,{animationDelay:350,children:o.jsx(q2,{title:p("EDITOR_CoverEditor"),text:p("EDITOR_EditCover"),onClick:Hr,icon:Sw})}),o.jsx(mr,{animationDelay:375,children:o.jsx(Oo,{title:p("EDITOR_MarginBackground"),value:q,onChange:K=>ee(K.target.value)})}),o.jsx(mr,{animationDelay:400,children:o.jsx(B2,{title:vi,value:Kn,onChangeTitle:K=>Jn(K.target.value),onChangeDate:K=>{bn.current=K.target.value,mo(K.target.value)}})}),o.jsx(mr,{animationDelay:450,children:o.jsx(B2,{title:go,value:Br,onChangeTitle:K=>Ui(K.target.value),onChangeDate:K=>bi(K.target.value)})}),o.jsx(mr,{animationDelay:500,children:o.jsx(ps,{title:p("EDITOR_BackgroundColor"),value:re,onClick:K=>ar(K,"backgroundColor")})}),o.jsx(mr,{animationDelay:550,children:o.jsx(ps,{title:p("EDITOR_TextColor"),value:ue,onClick:K=>ar(K,"textColor")})}),o.jsx(mr,{animationDelay:600,children:o.jsx(ps,{title:`${p("EDITOR_Color")} 1`,value:ce,onClick:K=>ar(K,"color1")})}),o.jsx(mr,{animationDelay:650,children:o.jsx(ps,{title:`${p("EDITOR_Color")} 2`,value:Ie,onClick:K=>ar(K,"color2")})}),o.jsx(mr,{animationDelay:700,children:o.jsx(ps,{title:`${p("EDITOR_Color")} 3`,value:be,onClick:K=>ar(K,"color3")})}),o.jsx(mr,{animationDelay:750,children:o.jsx(vl,{title:p("EDITOR_Watermark"),value:Ve,onChange:K=>Je(K),text:p("EDITOR_WatermarkText")})}),o.jsx(mr,{animationDelay:800,children:o.jsx(vl,{title:p("EDITOR_Fade"),value:Fe,onChange:K=>Te(K),text:p("EDITOR_FadeText")})}),o.jsx(mr,{animationDelay:850,children:o.jsx(vl,{title:p("EDITOR_Uncompressed"),value:ln,onChange:K=>gn(K),text:p("EDITOR_UncompressedText")})}),o.jsx(mr,{animationDelay:900,children:o.jsx(vl,{title:p("EDITOR_Tracklist"),value:Be,onChange:K=>De(K),text:p("EDITOR_TracklistText")})}),(wn||it)&&o.jsx(mr,{animationDelay:950,children:o.jsx(q2,{title:p("EDITOR_Signature"),text:p(it?"EDITOR_EditSignature":"EDITOR_SignatureText"),onClick:Ji,icon:jh})})]}):yt==="tracklist"?o.jsxs(dw,{children:[o.jsxs(fw,{"data-lenis-prevent":!0,children:[ki().map((K,je)=>o.jsxs(pw,{draggable:!0,onDragStart:()=>ra(je),onDragOver:He=>rr(He,je),onDragLeave:ii,onDrop:He=>Ao(He,je),onDragEnd:Na,isDragging:Ar===je,isDragOver:Bi===je,children:[o.jsxs(pd,{draggable:!0,children:[K.index,"."]}),o.jsx(md,{value:K.name,onChange:He=>Tr(je,He.target.value),placeholder:p("EDITOR_TrackNamePlaceholder")||"Track name",draggable:!1}),o.jsx(gd,{type:"text",value:K.duration?Qi(K.duration):"",onChange:He=>to(je,He.target.value),placeholder:"0:00",draggable:!1}),o.jsx(xw,{onClick:()=>eo(je),title:p("EDITOR_DeleteTrack")||"Delete track",draggable:!1,children:o.jsx(vw,{})})]},je)),o.jsxs(mw,{title:p("EDITOR_AddNewTrack")||"Add new track",children:[o.jsxs(pd,{children:[ki().length+1,"."]}),o.jsx(md,{value:Dn,onChange:K=>Pr(K.target.value),placeholder:p("EDITOR_TrackNamePlaceholder")||"Track name",onClick:K=>K.stopPropagation()}),o.jsx(gd,{value:cn,onChange:K=>Er(K.target.value),placeholder:"0:00",onClick:K=>K.stopPropagation()}),o.jsx(gw,{type:"button",onClick:ta,children:"+"})]})]}),o.jsxs(hw,{children:[o.jsx(fd,{onClick:Ai,children:p("EDITOR_RemoveParentheses")}),o.jsx(fd,{onClick:Ki,children:p("EDITOR_RemoveBrackets")})]})]}):yt==="export"?o.jsxs(xd,{children:[o.jsxs(lc,{children:[o.jsx(cc,{children:p("EXPORT_Format")}),o.jsxs(vd,{children:[o.jsx(Fa,{$selected:_i==="png",onClick:()=>Zo("png"),children:o.jsx(za,{children:"PNG"})}),o.jsx(Fa,{$selected:_i==="pdf",onClick:()=>Zo("pdf"),children:o.jsx(za,{children:"PDF"})}),o.jsx(Fa,{$selected:_i==="jpg",onClick:()=>Zo("jpg"),children:o.jsx(za,{children:"JPG"})})]})]}),o.jsxs(lc,{children:[o.jsx(cc,{children:p("EXPORT_Size")}),o.jsxs(vd,{children:[o.jsxs(Fa,{$selected:On===.3,onClick:()=>$i(.3),children:[o.jsx(za,{children:p("EXPORT_SizeThumbnail")}),o.jsx(uc,{children:p("EXPORT_SizeDescription_Thumbnail")})]}),o.jsxs(Fa,{$selected:On===.6,onClick:()=>$i(.6),children:[o.jsx(za,{children:p("EXPORT_SizeMedium")}),o.jsx(uc,{children:p("EXPORT_SizeDescription_Medium")})]}),o.jsxs(Fa,{$selected:On===1,onClick:()=>$i(1),children:[o.jsx(za,{children:p("EXPORT_SizeNormal")}),o.jsx(uc,{children:p("EXPORT_SizeDescription_Normal")})]})]})]}),o.jsxs(Aw,{children:[o.jsx(Z7,{size:24,style:{color:"var(--AccentColor)",flexShrink:0}}),o.jsx(kw,{children:p("EXPORT_PrintTip")})]}),o.jsx(bd,{onClick:()=>{_i==="png"?Gt():_i==="pdf"?dr():_i==="jpg"&&hr()},children:p("EXPORT_DownloadButton")})]}):yt==="publish"&&s==="search_creation"?o.jsx(xd,{children:w?o.jsxs(o.Fragment,{children:[o.jsxs(lc,{children:[o.jsx(cc,{children:p("COMMUNITY_VisibilityLabel")}),o.jsxs(jw,{children:[o.jsxs(wd,{$selected:ye==="public",onClick:()=>ze("public"),children:[o.jsx(yd,{$selected:ye==="public",children:o.jsx(Nw,{})}),o.jsxs(_d,{children:[o.jsx(Cd,{children:p("COMMUNITY_Public")}),o.jsx(Sd,{children:p("COMMUNITY_PublicDesc")})]})]}),o.jsxs(wd,{$selected:ye==="private",onClick:()=>ze("private"),children:[o.jsx(yd,{$selected:ye==="private",children:o.jsx(Iw,{})}),o.jsxs(_d,{children:[o.jsx(Cd,{children:p("COMMUNITY_Private")}),o.jsx(Sd,{children:p("COMMUNITY_PrivateDesc")})]})]})]})]}),qt&&o.jsx(Mw,{children:qt}),o.jsx(bd,{onClick:ur,disabled:Oe,children:p(Oe?"COMMUNITY_Publishing":"COMMUNITY_Publish")})]}):o.jsxs(Tw,{children:[o.jsx(j9,{width:"62%",height:120}),o.jsx(Lw,{children:p("COMMUNITY_LoginToPublish")}),o.jsx(Pw,{onClick:()=>S("/login"),children:p("Login")})]})}):null]})]}),c&&o.jsx(Y9,{poster:c,onDeleted:t,onVisibilityChanged:()=>{},onSave:()=>kt(!0),isSavingPoster:zi,isOwnerOrAdmin:(m==null?void 0:m.id)===(c==null?void 0:c.authorId)||((ko=m==null?void 0:m.permissions)==null?void 0:ko.includes("admin"))}),ga&&Yo&&Qn&&ol.createPortal(o.jsx(k7,{DefaultColor:Qn==="backgroundColor"?re:Qn==="textColor"?ue:Qn==="color1"?ce:Qn==="color2"?Ie:be,image:St,predefinedColors:[ce,Ie,be,re,ue],onDone:K=>{switch(Qn){case"backgroundColor":ae(K);break;case"textColor":pe(K);break;case"color1":_e(K);break;case"color2":Pe(K);break;case"color3":J(K);break}rn()},position:Yo,onClose:rn}),document.body),rs&&Go&&ol.createPortal(o.jsx(L7,{position:Go,albumCoverUrl:ln?lt:St,initialZoom:Qr,initialHorizontalPosition:en,initialVerticalPosition:Kt,initialBlur:Wo,onDone:K=>{yn(!1),Rn(K.zoom),wi(K.horizontalPosition),bo(K.verticalPosition),ba(K.blur),ea()},onClose:ea}),document.body),ns&&Xo&&ol.createPortal(o.jsx(z7,{position:Xo,signatureUrl:wn,initialHorizontalPosition:ei,initialVerticalPosition:wa,initialScale:_a,onDone:K=>{K.disabled?(Ye(!1),V(!1),Cn(!0)):(wo(K.horizontalPosition),ya(K.verticalPosition),yo(K.scale),V(!1),Cn(!0)),Zi()},onClose:Zi}),document.body),l&&ct&&ol.createPortal(o.jsx(Fs,{title:p("EDITOR_SavePosterTitle"),paragraph:p("EDITOR_SavePosterMessage"),confirmText:p("EDITOR_SaveConfirm"),onConfirm:Vt,cancelText:p("EDITOR_SaveCancel"),onCancel:()=>{kt(!1),Zr("")},canClose:!0,isClosing:!1,errorMessage:Zn}),document.body)]}):o.jsx(zh,{})})});S0.displayName="PosterEditor";const Ew=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Dw=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},Rw=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const a=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),o.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},Ow=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[o.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),o.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Fw=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,zw=b(xh)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,Bw=b.h3`
  font-size: 1.3em;
  font-weight: bold;
`,A0=Rt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Uw=b.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${A0} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,Nl=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${A0} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Il=b.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${A0} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Hw=b.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,$w=b.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function qw({onSelectModel:e,onBack:t}){const{t:r}=Tt(),n={coverZoom:50,marginBackground:-700,showTracklist:!1,marginTop:200},a={coverZoom:-16,useFade:!1,marginTop:40,backgroundColor:"#eee7d7",textColor:"#1f1d1d"},s={coverZoom:110,marginBackground:-1200,useFade:!1},l={coverZoom:0,marginBackground:0,showTracklist:!0,useFade:!0};function c(f,p){A3("select_model","ModelSelector",f),e&&e(f,p)}const d=[0,.08,.16,.24];return o.jsxs(o.Fragment,{children:[o.jsxs(Fw,{onClick:t,children:[o.jsx(zw,{}),o.jsx(Bw,{children:r("GoBack")})]}),o.jsx(Hw,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),o.jsx($w,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),o.jsxs(Uw,{children:[o.jsxs(Nl,{delay:d[0],onClick:()=>c("standart",l),children:[o.jsx(Ew,{width:200}),o.jsx(Il,{delay:d[0],children:"Standard"})]}),o.jsxs(Nl,{delay:d[1],onClick:()=>c("frame",a),children:[o.jsx(Ow,{width:200}),o.jsx(Il,{delay:d[1],children:"Frame"})]}),o.jsxs(Nl,{delay:d[2],onClick:()=>c("basic",n),children:[o.jsx(Dw,{width:200}),o.jsx(Il,{delay:d[2],children:"Basic"})]}),o.jsxs(Nl,{delay:d[3],onClick:()=>c("fullcover",s),children:[o.jsx(Rw,{width:200}),o.jsx(Il,{delay:d[3],children:"Full Cover"})]})]})]})}const Vw=b.div`
    width: 100%;
`,Yw=b.div`
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
`,Gw=b(i0)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,Ww=b(e4)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,Xw=b.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,Zw=b.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function Jw({onSearch:e,value:t=""}){const{t:r}=Tt(),[n,a]=k.useState(t);k.useEffect(()=>{a(t)},[t]);const s=d=>{d.key==="Enter"&&(e(n),n.trim()&&b2(n.trim()))},l=d=>{a(d.target.value)},c=()=>{e(n),n.trim()&&b2(n.trim())};return o.jsx(Vw,{children:o.jsxs(Yw,{role:"search","aria-label":"Album search for poster creation",children:[o.jsx(Gw,{"aria-hidden":"true"}),o.jsx(Xw,{}),o.jsx(Zw,{placeholder:r("SearchPlaceholder"),value:n,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),o.jsx(Ww,{onClick:c,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const Kw=b.div`
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

`,Qw=b.img`
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
`,ey=b.h3`
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
`,ty=b.p`
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
`,ry=b.div`
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
`;function ny({title:e,artist:t,cover:r,id:n,onClick:a,animationDelay:s=0}){const[l,c]=k.useState(!1),[d,f]=k.useState(!1),[p,v]=k.useState(!1);k.useEffect(()=>{if(p)c(!0);else{const m=setTimeout(()=>{c(!0),v(!0)},s);return()=>clearTimeout(m)}},[s,p]);const S=()=>{f(!0)};return o.jsxs(Kw,{onClick:()=>a(n),$visible:l,children:[o.jsx(Qw,{src:r,$loaded:d,onLoad:S,loading:"lazy"}),o.jsxs(ry,{children:[o.jsx(ey,{children:e}),o.jsx(ty,{children:t})]})]})}const iy=b.div`
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
`,oy=b.button`
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
`,ay=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`,sy=b.p`
    font-size: 1em;
    font-weight: 600;
    opacity: 0.5;
    color: var(--textColor);
    margin: 0;
    margin-top: 20px;
`,ly=b.div`
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
`;function Ad({query:e,onclick:t}){const{t:r}=Tt(),[n,a]=k.useState([]),[s,l]=k.useState(""),[c,d]=k.useState(0),[f,p]=k.useState(!0),[v,S]=k.useState(!1),[m,w]=k.useState(!1),[_,j]=k.useState(0),[M,I]=k.useState(!1),P=10;k.useEffect(()=>{(async()=>{const T=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(T.access_token)})()},[]),k.useEffect(()=>{a([]),d(0),p(!0),j(0),I(!1)},[e]),k.useEffect(()=>{const $=async(H=!1)=>{var Q,Z;if(s){H?w(!0):S(!0);try{let T;const X=H?c:0;if(e)T=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${X}`,{headers:{Authorization:`Bearer ${s}`}});else{const ne=new Date().getFullYear();T=await fetch(`https://api.spotify.com/v1/search?q=tag%3Anew+year%3A${ne}&type=album&limit=${P}&offset=${X}`,{headers:{Authorization:`Bearer ${s}`}})}if(!T.ok){const ne=await T.text();throw new Error(`Erro na API: ${ne}`)}const C=await T.json(),U=(((Q=C.albums)==null?void 0:Q.items)||[]).filter(ne=>ne!=null).map(ne=>{var ge,we;return{id:ne.id,title:ne.name,artist:(ge=ne.artists)==null?void 0:ge.map(xe=>xe.name).join(", "),cover:(we=ne.images[0])==null?void 0:we.url}});H?(I(!1),j(n.length),a(ne=>[...ne,...U])):(I(!1),j(0),a(U));const Y=(U.length-1)*80;setTimeout(()=>{I(!0)},Y+800);const le=((Z=C.albums)==null?void 0:Z.total)||0,fe=H?n.length+U.length:U.length;p(fe<le&&U.length===P)}catch(T){console.error(T)}finally{S(!1),w(!1)}}};s&&(n.length===0||c===0)&&$(!1)},[e,s]);const D=async()=>{var H,Q;if(!s||!f||m)return;const $=c+P;d($);try{w(!0);let Z;if(e)Z=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${$}`,{headers:{Authorization:`Bearer ${s}`}});else{const le=new Date().getFullYear();Z=await fetch(`https://api.spotify.com/v1/search?q=tag%3Anew+year%3A${le}&type=album&limit=${P}&offset=${$}`,{headers:{Authorization:`Bearer ${s}`}})}if(!Z.ok){const le=await Z.text();throw new Error(`Erro na API: ${le}`)}const T=await Z.json(),C=(((H=T.albums)==null?void 0:H.items)||[]).filter(le=>le!=null).map(le=>{var fe,ne;return{id:le.id,title:le.name,artist:(fe=le.artists)==null?void 0:fe.map(ge=>ge.name).join(", "),cover:(ne=le.images[0])==null?void 0:ne.url}});I(!1),j(n.length),a(le=>[...le,...C]);const E=(C.length-1)*80;setTimeout(()=>{I(!0)},E+800);const Y=((Q=T.albums)==null?void 0:Q.total)||0,ie=n.length+C.length;p(ie<Y&&C.length===P)}catch(Z){console.error(Z)}finally{w(!1)}};return o.jsx(o.Fragment,{children:v&&n.length===0?o.jsx(zh,{}):!v&&n.length===0?o.jsxs(ay,{children:[o.jsx(Ja,{width:220}),o.jsx(sy,{children:r("NoResults")})]}):o.jsxs(o.Fragment,{children:[o.jsx(iy,{children:n.map(($,H)=>{const Q=H>=_?H-_:H;return o.jsx(ny,{onClick:()=>t($.id),cover:$.cover,title:$.title,artist:$.artist,id:$.id,animationDelay:Q*80},$.id)})}),f&&o.jsx(ly,{$visible:M,children:o.jsx(oy,{onClick:D,disabled:m,children:r(m?"LoadingMore":"LoadMore")})})]})})}const cy=({onBack:e,onPublishSuccess:t})=>{const[r,n]=k.useState(""),[a,s]=k.useState(null),[l,c]=k.useState(!1),[d,f]=k.useState(null),[p,v]=k.useState(null),S=k.useRef(null);k.useEffect(()=>{l&&a&&S.current&&setTimeout(()=>{S.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[l,a]);function m(j){s(j),c(!0),f(null),v(null)}function w(){s(null),c(!1),f(null),v(null),e&&e()}const _=j=>{n(j)};return a&&d&&p?o.jsx(S0,{albumID:a,handleClickBack:w,model:d,modelParams:p,source:"search_creation",onPublishSuccess:t}):a&&l?o.jsx("div",{ref:S,children:o.jsx(qw,{onSelectModel:(j,M)=>{f(j),v(M),c(!1)},onBack:w})}):o.jsxs(o.Fragment,{children:[o.jsx(Jw,{onSearch:_,value:r}),r.trim()?o.jsx(Ad,{query:r,onclick:m}):o.jsx("div",{children:o.jsx(Ad,{onclick:m})})]})},Bo=b.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function kd({loadingComplete:e}){const{t}=Tt(),{posterId:r}=sh(),n=sn(),[a,s]=k.useState(null),[l,c]=k.useState(null),[d,f]=k.useState(null),p=k.useRef(null);k.useEffect(()=>{if(!r)return;let U=!1;return(async()=>{try{const ie=await Xe.getPoster(r);if(U)return;Xe.registerView(r).catch(()=>{}),I3(r,ie.poster.albumName,ie.poster.artistsName);const le={...ie.poster.posterJson||{},albumID:ie.poster.spotifyAlbumId};s(le),c(ie.poster),setTimeout(()=>{if(p.current){const fe=p.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:fe,behavior:"smooth"})}},200)}catch(ie){console.error("Failed to load community poster:",ie)}})(),()=>{U=!0}},[r]);const[v,S]=Li(),[m,w]=Li(),[_,j]=Li(),[M,I]=Li(),[P,D]=Li(),[$,H]=Li(),[Q,Z]=Li(),[T,X]=Li(),C=U=>{N3(U.albumName||"Unknown Album",U.artistsName||"Unknown Artist",U.albumID||"","album_collection"),s(U),setTimeout(()=>{if(p.current){const Y=p.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:Y,behavior:"smooth"})}},100)},E=()=>{s(null),c(null),n("/")};return o.jsxs(o.Fragment,{children:[d&&o.jsx(Fs,{title:t("COMMUNITY_PublishSuccess"),paragraph:t("COMMUNITY_PublishedModalBody"),confirmText:t("GotIt"),onConfirm:()=>{f(null),n("/")},canClose:!0,onCancel:()=>{f(null),n("/")},isClosing:!1}),o.jsx(Pm,{showAnimation:e,onRecreate:C}),o.jsx(Bo,{ref:v,$isVisible:S,children:o.jsx(es,{text:t("anchorArt"),type:1})}),o.jsx(Bo,{ref:m,$isVisible:w,children:o.jsx(t1,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),o.jsx(Bo,{ref:_,$isVisible:j,children:a?o.jsx(S0,{ref:p,albumID:a.albumID,initialPosterJson:a,handleClickBack:E,posterId:r||null,posterFullData:l,onPublishSuccess:U=>f({posterId:U})}):o.jsx(cy,{onPublishSuccess:U=>f({posterId:U})})}),o.jsx(Bo,{ref:M,$isVisible:I,children:o.jsx(zg,{})}),o.jsx(Bo,{ref:P,$isVisible:D,children:o.jsx(M8,{})}),o.jsx(Bo,{ref:$,$isVisible:H,children:o.jsx(eg,{})}),o.jsx(Bo,{ref:Q,$isVisible:Z,children:o.jsx(Xm,{})}),o.jsx(Bo,{ref:T,$isVisible:X,children:o.jsx(z8,{})})]})}function Bs(e){return Ze({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const Md=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,jd=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,Nd=b.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,uy=b.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,dy=b.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,Id=b.button`
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
`,Td=b.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,hy=b(kh)`
    width: 20px;
    height: 20px;
`,fy=b(Bs)`
    width: 20px;
    height: 20px;
`,py=b.div`
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
`,Ld=b.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,my=b.p`
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
`;const gy=b.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,xy=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,vy=b.div`
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
`,by=b.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function wy(){const{t:e}=Tt(),t=sn(),[r]=c3(),{user:n,loading:a,loginWithGoogle:s,loginWithSpotify:l}=pi();if(k.useEffect(()=>{if(!a){if(n){t(`/u/${n.username}`);return}r.get("login")==="success"&&n&&t(`/u/${n.username}`)}},[n,a,t,r]),a)return o.jsxs(Md,{children:[o.jsx(Ic,{iconColor:"var(--AccentColor)"}),o.jsxs(jd,{children:[o.jsx(fo,{fill:"var(--textColor)",width:"100px"}),o.jsx(Nd,{children:e("Loading")})]})]});const c=()=>{t("/")};return o.jsxs(Md,{children:[o.jsx(Ic,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),o.jsx(jd,{children:o.jsxs(gy,{children:[o.jsx(vy,{onClick:c,children:o.jsx(fo,{fill:"var(--textColor)",width:"25vw"})}),o.jsxs(xy,{children:[o.jsx(by,{children:o.jsx(fo,{fill:"var(--textColor)",width:"90px"})}),o.jsx(Nd,{children:e("LOGIN_Welcome")}),o.jsx(uy,{children:e("LOGIN_JoinCommunity")}),o.jsxs(dy,{children:[o.jsxs(Id,{onClick:s,children:[o.jsx(hy,{}),o.jsx(Td,{children:e("LOGIN_GoogleSignIn")})]}),o.jsxs(py,{children:[o.jsx(Ld,{}),o.jsx(my,{children:e("LOGIN_Or")}),o.jsx(Ld,{})]}),o.jsxs(Id,{onClick:l,children:[o.jsx(fy,{}),o.jsx(Td,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}const yy=Rt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,_y=Rt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,Cy=Rt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Sy=Rt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Ay=b.div`
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
    animation: ${e=>e.isClosing?Sy:Cy} 0.3s ease-in-out forwards;
`,ky=b.div`
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
    animation: ${e=>e.isClosing?_y:yy} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,My=b.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,jy=b.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Ny=b(bh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Iy=b.div`
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
`,Ty=b.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,Ly=b.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,Py=b.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,dc=b.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,hc=b.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,Pd=b.input`
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
`,Ey=b.textarea`
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
`,Dy=b.span`
    font-size: 0.75em;
    opacity: 0.38;
    text-align: right;
    font-weight: 600;
    margin-top: -2px;
`,Tl=b.span`
    color: var(--textColor);
    font-size: 0.8em;
    font-weight: bolder;
    opacity: 0.8;
`,Ry=b.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,Oy=b.button`
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
`,Fy=b.button`
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
`,zy=b.div`
    color: var(--textColor);
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`,By=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 0;
`,Uy=b.span`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 6px;
`,Hy=b.button`
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
`;function $y({isOpen:e,onClose:t,onProfileUpdate:r,initialBio:n=""}){var $;const{user:a,updateUser:s}=pi(),{t:l}=Tt(),[c,d]=k.useState({name:"",username:"",bio:"",showSpotifyProfile:!1}),[f,p]=k.useState({}),[v,S]=k.useState(!1),[m,w]=k.useState(""),[_,j]=k.useState(!1);k.useEffect(()=>{a&&d({name:a.name||"",username:a.username||"",bio:n,showSpotifyProfile:a.showSpotifyProfile||!1})},[a,n]);const M=()=>{const H={};return c.name.trim()||(H.name=l("NameIsRequired")),c.username.trim()?c.username.length<3?H.username=l("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(H.username=l("UsernameFormat")):H.username=l("UsernameIsRequired"),c.bio.trim()&&c.bio.split(`
`).filter((T,X)=>X<4).some(T=>T.trim()==="")&&(H.bio=l("DASH_BioNoEmptyLines")),p(H),Object.keys(H).length===0},I=H=>{const{name:Q,value:Z}=H.target;if(Q==="bio"){const T=Z.split(`
`);if(T.length>4||T.length>=2&&T[T.length-1]===""&&T[T.length-2]==="")return}d(T=>({...T,[Q]:Z})),f[Q]&&p(T=>({...T,[Q]:""})),m&&w("")},P=async H=>{var Q,Z,T,X;if(H.preventDefault(),!!M()){S(!0),w("");try{await Xe.updateUserProfile({name:c.name.trim(),username:c.username.trim(),bio:c.bio.trim(),showSpotifyProfile:c.showSpotifyProfile}),s({...a,name:c.name.trim(),username:c.username.trim(),bio:c.bio.trim(),showSpotifyProfile:c.showSpotifyProfile}),w(l("ProfileUpdatedSuccessfully"));const C=[];c.name.trim()!==a.name&&C.push("name"),c.username.trim()!==a.username&&C.push("username"),c.bio.trim()!==(a.bio||"")&&C.push("bio"),c.showSpotifyProfile!==a.showSpotifyProfile&&C.push("showSpotifyProfile"),C.length&&F3(c.username.trim(),C),r&&r(),setTimeout(()=>{D()},1500)}catch(C){console.error("Profile update failed:",C),(Q=C.message)!=null&&Q.includes("409")||(Z=C.message)!=null&&Z.includes("taken")?p({username:l("UsernameTaken")}):(T=C.message)!=null&&T.includes("400")||(X=C.message)!=null&&X.includes("invalid")?p({username:l("InvalidUsernameFormat")}):p({general:l("FailedToUpdateProfile")})}finally{S(!1)}}},D=()=>{j(!0),setTimeout(()=>{j(!1),t(),p({}),w("")},300)};return k.useEffect(()=>{if(e)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[e]),e?o.jsx(Ay,{isClosing:_,children:o.jsxs(ky,{isClosing:_,children:[o.jsxs(My,{children:[o.jsx(Ty,{children:o.jsx(fo,{width:25,height:25,fill:"var(--textColor)"})}),o.jsx(jy,{children:l("EditProfile")}),o.jsx(Iy,{onClick:D,children:o.jsx(Ny,{})})]}),o.jsx(Ly,{}),o.jsxs(Py,{onSubmit:P,children:[o.jsxs(dc,{children:[o.jsx(hc,{htmlFor:"name",children:l("Name")}),o.jsx(Pd,{type:"text",id:"name",name:"name",value:c.name,onChange:I,placeholder:l("EnterYourName"),disabled:v}),f.name&&o.jsx(Tl,{children:f.name})]}),o.jsxs(dc,{children:[o.jsx(hc,{htmlFor:"username",children:l("Username")}),o.jsx(Pd,{type:"text",id:"username",name:"username",value:c.username,onChange:I,placeholder:l("EnterYourUsername"),disabled:v}),f.username&&o.jsx(Tl,{children:f.username})]}),o.jsxs(dc,{children:[o.jsx(hc,{htmlFor:"bio",children:l("DASH_Bio")}),o.jsx(Ey,{id:"bio",name:"bio",value:c.bio,onChange:I,placeholder:l("DASH_BioPlaceholder"),maxLength:160,disabled:v}),o.jsxs(Dy,{children:[160-((($=c.bio)==null?void 0:$.length)||0)," ",l("DASH_BioChars")]}),f.bio&&o.jsx(Tl,{children:f.bio})]}),(a==null?void 0:a.hasSpotify)&&o.jsxs(By,{children:[o.jsxs(Uy,{children:[o.jsx(Bs,{size:14}),l("DASH_ShowSpotify")]}),o.jsx(Hy,{type:"button",$active:c.showSpotifyProfile,disabled:v,onClick:()=>d(H=>({...H,showSpotifyProfile:!H.showSpotifyProfile}))})]}),f.general&&o.jsx(Tl,{children:f.general}),m&&o.jsx(zy,{children:m}),o.jsxs(Ry,{children:[o.jsx(Oy,{type:"button",onClick:D,disabled:v,children:l("Cancel")}),o.jsx(Fy,{type:"submit",disabled:v,children:l(v?"Saving":"SaveChanges")})]})]})]})}):null}const qy=Rt`
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
`,Ed=b.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
    padding-bottom: 20px;
`,Vy=b.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 100px;

    @media (max-width: 600px) {
        width: 90%;
        margin-top: 80px;
    }
`,Yy=b.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-inline: 10px;

    @media (max-width: 600px) { width: 90%; }
`,Gy=b.div`
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
`;const Wy=b.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 600px) { width: 72px; height: 72px; }
`,Xy=b.div`
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
`,Zy=b.div`
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
`,Jy=b.h2`
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
`;const Ky=b.p`
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
`;b(kh)`  width:14px; height:14px; fill:var(--backgroundColor); `;b(Bs)` width:14px; height:14px; fill:var(--backgroundColor); `;const Qy=b.p`
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
`,Dd=b.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 12px;

    @media (max-width: 600px) { justify-content: center; }
`,e_=b.a`
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
`,t_=b(Bs)`
    width:14px;
    height:14px;
    fill:#fff; 
`,r_=b.button`
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
`,n_=b.div`
    display: flex;
    gap: 10px;
    margin-left: auto;

    @media (max-width: 900px) { margin-left: 0; margin-top: 16px; }

    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
        margin-top: 16px;
    }
`,Rd=b.button`
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
`,i_=b.div`
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
`,fc=b.button`
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
`,o_=b.div`
    width: 80%;
    margin-top: 16px;
    animation: ${qy} 0.25s ease;

    @media (max-width: 600px) { width: 90%; }
`,a_=b.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; }
`,s_=b.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`,l_=b.div`
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--AccentColor) 15%, transparent);
    color: var(--AccentColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,c_=b.p`
    font-size: 1.8em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
`,u_=b.p`
    font-size: 0.8em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    font-weight: 600;
`,d_=b.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
`,h_=b.p`
    font-size: 0.8em;
    font-weight: 700;
    opacity: 0.45;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin: 28px 0 0 0;
    color: var(--textColor);
`,f_=b.div`
    background: var(--glassBackground);
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 14px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover { transform: translateY(-3px); }
`,p_=b.div`
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
`,m_=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
`,g_=b.p`
    font-size: 0.75em;
    font-weight: 700;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0;
    color: var(--textColor);
`,x_=b.p`
    font-size: 1em;
    font-weight: 700;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,v_=b.p`
    font-size: 0.82em;
    margin: 0;
    opacity: 0.55;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,b_=b.p`
    font-size: 0.85em;
    font-weight: 700;
    margin: 0;
    color: var(--AccentColor);
`,Od=b.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1300px) { grid-template-columns: repeat(3, 1fr); }
    @media (max-width: 900px)  { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: 500px)  { grid-template-columns: 1fr; gap: 12px; }
`,Fd=b.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`,w_=b.div`
    display: flex;
    gap: 6px;
`,pc=b.button`
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
`,y_=b.input`
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
`,__=b.div`
    display: flex;
    width: 80%;

    @media (max-width: 600px) { width: 90%; }
`,C_=b.div`
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
`,S_=b.div`
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
`,A_=b.img`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);

    @media (max-width: 600px) { width: 58px; height: 58px; }
`,k_=b.div`
    width: 72px;
    height: 72px;
    border-radius: 8px;
    background: ${({$bg:e})=>e||"rgba(128,128,128,0.2)"};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) { width: 58px; height: 58px; }
`,M_=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,j_=b.span`
    font-size: 0.63em;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--AccentColor);
    margin-bottom: 3px;
`,N_=b.p`
    font-size: 1.1em;
    font-weight: 800;
    margin: 0;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 600px) { font-size: 0.95em; }
`,I_=b.p`
    font-size: 0.83em;
    font-weight: 600;
    margin: 0;
    opacity: 0.45;
    color: var(--textColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,$a=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    opacity: 0.45;
    gap: 12px;
    text-align: center;
`,Xc=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`,qa=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,T_=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60dvh;
    gap: 20px;
    opacity: 0.45;
    padding: 40px 20px;
    text-align: center;
`,L_=b.p`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    max-width: 340px;
    margin: 0;
`,P_=b.div`
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
`,zd=b.button`
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
`,Ll=(e=0)=>e>=1e6?(e/1e6).toFixed(1).replace(".0","")+"M":e>=1e3?(e/1e3).toFixed(1).replace(".0","")+"k":String(e);function E_({stats:e,isOwner:t}){var c,d,f;const{t:r}=Tt(),n=sn();if(!e)return null;if(e.totalPosters===0)return o.jsxs(Xc,{children:[o.jsx(Ja,{width:"20%"}),o.jsx($a,{children:o.jsx(qa,{children:r(t?"DASH_StatsEmpty":"DASH_StatsEmptyPublic")})})]});const a=[{label:r("DASH_TotalPosters"),value:e.totalPosters,icon:o.jsx(Ih,{size:22})},{label:r("DASH_TotalDownloads"),value:e.totalDownloads,icon:o.jsx(_2,{size:22})},{label:r("DASH_TotalViews"),value:e.totalViews,icon:o.jsx(Vl,{size:22})},{label:r("DASH_TotalFavorites"),value:e.totalFavorites,icon:o.jsx(qo,{size:22})}],l=[{label:r("DASH_MostFavorited"),poster:e.mostFavorited,stat:Ll((c=e.mostFavorited)==null?void 0:c.favoritesCount),icon:o.jsx(qo,{size:13})},{label:r("DASH_MostDownloaded"),poster:e.mostDownloaded,stat:Ll((d=e.mostDownloaded)==null?void 0:d.downloads),icon:o.jsx(_2,{size:13})},{label:r("DASH_MostViewed"),poster:e.mostViewed,stat:Ll((f=e.mostViewed)==null?void 0:f.views),icon:o.jsx(Vl,{size:13})}].filter(p=>p.poster);return o.jsxs(o.Fragment,{children:[o.jsx(a_,{children:a.map(p=>o.jsxs(s_,{children:[o.jsx(l_,{children:p.icon}),o.jsxs("div",{children:[o.jsx(c_,{children:Ll(p.value)}),o.jsx(u_,{children:p.label})]})]},p.label))}),l.length>0&&o.jsxs(o.Fragment,{children:[o.jsx(h_,{children:r("DASH_TopHighlights")}),o.jsx(d_,{children:l.map(p=>{var v;return o.jsxs(f_,{onClick:()=>n(`/p/${p.poster._id}`),children:[o.jsx(p_,{children:(v=p.poster.posterJson)!=null&&v.albumCover?o.jsx("img",{src:p.poster.posterJson.albumCover,alt:""}):null}),o.jsxs(m_,{children:[o.jsx(g_,{children:p.label}),o.jsx(x_,{children:p.poster.albumName}),o.jsx(v_,{children:p.poster.artistsName}),o.jsxs(b_,{style:{display:"flex",alignItems:"center",gap:4},children:[p.icon," ",p.stat]})]})]},p.label)})})]})]})}function D_(){var dt,Pt;const e=sn(),{username:t}=sh(),{user:r,loading:n,logout:a,isAuthenticated:s}=pi(),{t:l}=Tt(),c=s&&((dt=r==null?void 0:r.username)==null?void 0:dt.toLowerCase())===(t==null?void 0:t.toLowerCase()),[d,f]=k.useState(null),[p,v]=k.useState(!1),[S,m]=k.useState(!1),[w,_]=k.useState(!1),[j,M]=k.useState("myposters"),[I,P]=k.useState([]),[D,$]=k.useState(1),[H,Q]=k.useState(!1),[Z,T]=k.useState(!1),[X,C]=k.useState(!1),[E,U]=k.useState([]),[Y,ie]=k.useState(1),[le,fe]=k.useState(!1),[ne,ge]=k.useState(!1),[we,xe]=k.useState(!1),[A,z]=k.useState(null),[q,ee]=k.useState(!1),[re,ae]=k.useState(!1),[ue,pe]=k.useState(null),[ce,_e]=k.useState(null),[Ie,Pe]=k.useState(null),[be,J]=k.useState(!1),[Ve,Je]=k.useState("all"),[Fe,Te]=k.useState("");k.useEffect(()=>{window.scrollTo(0,0)},[]),k.useEffect(()=>{n||window.scrollTo({top:0,left:0,behavior:"instant"})},[n]),k.useEffect(()=>{t&&(m(!1),c?(y2(t,!0),Xe.getUserProfile().then(ye=>{var ze;f(ye.user),(ze=ye.user)!=null&&ze.pinnedPosterId&&pe(ye.user.pinnedPosterId)}).catch(()=>{var ye;m(!0),r&&f({name:r.name,username:r.username,avatar:r.avatar,bio:"",badge:r.badge||null,badgeProgress:null,isAdmin:((ye=r.permissions)==null?void 0:ye.includes("admin"))||!1,hasSpotify:!1,hasGoogle:!1})})):Xe.getUserPublicProfile(t,{page:1,limit:12}).then(ye=>{y2(t,!1),f({name:ye.user.name,username:ye.user.username,avatar:ye.user.avatar,bio:ye.user.bio||"",badge:ye.user.badge,badgeProgress:ye.user.badgeProgress||null,isAdmin:ye.user.isAdmin||!1,hasSpotify:ye.user.hasSpotify,spotifyId:ye.user.spotifyId||null,hasGoogle:!1,pinnedPosterId:ye.user.pinnedPosterId||null,posterCount:ye.user.posterCount,totalDownloads:ye.user.totalDownloads,totalFavorites:ye.user.totalFavorites}),ye.user.pinnedPosterId&&pe(ye.user.pinnedPosterId),ye.pinnedPoster&&_e(ye.pinnedPoster),P(ye.posters||[]),$(ye.page||1),Q(ye.hasMore??!1),C(!0),v(!1)}).catch(ye=>{ye.status===404?v(!0):m(!0)}))},[s,n,r,t]),k.useEffect(()=>{c&&(!s||!ue||Xe.getUserPosters({page:1,limit:20}).then(ye=>{const Oe=(ye.posters||[]).filter(vt=>{var qt;return(qt=vt.posterJson)==null?void 0:qt.albumCover}).find(vt=>vt._id===ue);Oe&&_e(Oe)}).catch(()=>{}))},[s,ue,c]),k.useEffect(()=>{c?(j==="myposters"&&!X&&Be(1,!1),j==="favorites"&&!we&&it(1,!1),j==="stats"&&!re&&Ye()):j==="stats"&&!re&&St()},[j,c]);const Be=k.useCallback(async(ye,ze)=>{T(!0);try{const Oe=await Xe.getUserPosters({page:ye,limit:12});P(vt=>ze?[...vt,...Oe.posters]:Oe.posters),$(ye),Q(Oe.hasMore??!1),C(!0)}catch{}finally{T(!1)}},[]),De=k.useCallback(async(ye,ze)=>{if(t){T(!0);try{const Oe=await Xe.getUserPublicProfile(t,{page:ye,limit:12});P(vt=>ze?[...vt,...Oe.posters||[]]:Oe.posters||[]),$(ye),Q(Oe.hasMore??!1),C(!0)}catch{}finally{T(!1)}}},[t]),it=k.useCallback(async(ye,ze)=>{ge(!0);try{const Oe=await Xe.getUserFavorites({page:ye,limit:12});U(vt=>ze?[...vt,...Oe.posters]:Oe.posters),ie(ye),fe(Oe.hasMore??!1),xe(!0)}catch{}finally{ge(!1)}},[]),Ye=k.useCallback(async()=>{ee(!0);try{const ye=await Xe.getUserStats();z(ye.stats),ae(!0)}catch{}finally{ee(!1)}},[]),St=k.useCallback(async()=>{if(t){ee(!0);try{const ye=await Xe.getUserPublicStats(t);z(ye.stats),ae(!0)}catch{}finally{ee(!1)}}},[t]),st=k.useCallback(async ye=>{const ze=ue===ye?null:ye;if(pe(ze),ze){B3(t,ye);const Oe=I.find(vt=>vt._id===ze);Oe&&_e(Oe)}else _e(null);try{await Xe.setPinnedPoster(ze)}catch{pe(ue)}},[ue,I]),lt=async(ye,ze)=>{try{await Xe.updatePosterVisibility(ye,ze),H3(t,ye,ze),P(Oe=>Oe.map(vt=>vt._id===ye?{...vt,visibility:ze}:vt))}catch{}},Lt=ye=>{Pe(ye),J(!1)},ut=()=>{J(!0),setTimeout(()=>{Pe(null),J(!1)},300)},et=async()=>{if(Ie)try{await Xe.deletePoster(Ie._id),U3(t,Ie._id,Ie.albumName),P(ye=>ye.filter(ze=>ze._id!==Ie._id)),A&&z(ye=>({...ye,totalPosters:Math.max(0,ye.totalPosters-1)}))}catch{}finally{ut()}},ot=async ye=>{try{await Xe.toggleFavorite(ye),U(ze=>ze.filter(Oe=>Oe._id!==ye)),A&&z(ze=>({...ze,totalFavorites:Math.max(0,ze.totalFavorites-1)}))}catch{}},tt=async()=>{await a(),e("/login")};if(k.useEffect(()=>{p&&e("/error")},[p,e]),n||p)return o.jsx(t0,{isVisible:!0,initialFade:!0});if(S&&!d)return o.jsx(Ed,{children:o.jsxs(T_,{children:[o.jsx(s0,{width:"25%"}),o.jsx(L_,{children:l("PROFILE_FetchError")})]})});const yt=(d==null?void 0:d.name)||(r==null?void 0:r.name)||"",At=c&&Ve!=="all"?I.filter(ye=>ye.visibility===Ve):I,Ue=Fe.trim()?E.filter(ye=>{var Oe,vt,qt,Et,ct,kt;const ze=Fe.toLowerCase();return((Oe=ye.albumName)==null?void 0:Oe.toLowerCase().includes(ze))||((vt=ye.artistsName)==null?void 0:vt.toLowerCase().includes(ze))||((Et=(qt=ye.authorId)==null?void 0:qt.name)==null?void 0:Et.toLowerCase().includes(ze))||((kt=(ct=ye.authorId)==null?void 0:ct.username)==null?void 0:kt.toLowerCase().includes(ze))}):E;return o.jsxs(Ed,{children:[o.jsx(Vy,{children:o.jsxs(Gy,{children:[d!=null&&d.avatar?o.jsx(Wy,{src:d.avatar,alt:yt}):o.jsx(Xy,{children:yt.charAt(0).toUpperCase()}),o.jsxs(Zy,{children:[o.jsxs(Jy,{children:[yt,o.jsxs(o.Fragment,{children:[(d==null?void 0:d.badge)&&o.jsx(Ns,{badge:d.badge,badgeProgress:d.badgeProgress,isOwner:c,size:25}),((d==null?void 0:d.isAdmin)||c&&((Pt=r==null?void 0:r.permissions)==null?void 0:Pt.includes("admin")))&&o.jsx(Ns,{badge:"admin",size:25})]})]}),o.jsxs(Ky,{children:["@",(d==null?void 0:d.username)||(r==null?void 0:r.username)]})]}),c&&o.jsxs(n_,{children:[o.jsx(Rd,{$variant:"outline",onClick:()=>{O3(t),_(!0)},children:l("EditProfile")}),o.jsx(Rd,{onClick:tt,children:l("Logout")})]})]})}),o.jsxs(Yy,{children:[(d==null?void 0:d.bio)&&o.jsx(Qy,{children:d.bio}),d!==null&&c&&!(d!=null&&d.hasSpotify)&&o.jsx(Dd,{children:o.jsxs(r_,{onClick:()=>{z3(t),window.location.href=Xe.getSpotifyAuthUrl()},children:[o.jsx(Bs,{size:13}),l("DASH_ConnectSpotify")]})}),d!==null&&(d==null?void 0:d.hasSpotify)&&(c?d==null?void 0:d.showSpotifyProfile:!0)&&o.jsx(Dd,{children:o.jsxs(e_,{href:`https://open.spotify.com/user/${d.spotifyId}`,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(t_,{size:13}),l("DASH_OpenSpotify")]})})]}),ce&&(()=>{const ye=ce.posterJson||{},ze=ye.albumCover,Oe=ye.backgroundColor;return o.jsx(__,{children:o.jsxs(C_,{$bg:Oe,onClick:()=>e(`/p/${ce._id}`),children:[o.jsx(S_,{$bg:Oe,children:ze?o.jsx(A_,{src:ze,alt:ce.albumName}):o.jsx(k_,{$bg:Oe})}),o.jsxs(M_,{children:[o.jsx(j_,{children:l("DASH_FeaturedPoster")}),o.jsx(N_,{children:ce.albumName}),o.jsx(I_,{children:ce.artistsName})]})]})})})(),S&&d&&o.jsx(P_,{children:l("PROFILE_PartialError")}),o.jsxs(i_,{children:[o.jsx(fc,{$active:j==="myposters",onClick:()=>M("myposters"),children:l(c?"DASH_MyPosters":"DASH_Posters")}),c&&o.jsxs(fc,{$active:j==="favorites",onClick:()=>M("favorites"),children:[o.jsx(qo,{size:18}),l("DASH_Favorites")]}),o.jsxs(fc,{$active:j==="stats",onClick:()=>M("stats"),children:[o.jsx(Ih,{size:20}),l("DASH_Stats")]})]}),o.jsxs(o_,{children:[j==="myposters"&&(Z&&!X?o.jsx($a,{children:o.jsx(qa,{children:"…"})}):o.jsxs(o.Fragment,{children:[c&&o.jsx(Fd,{children:o.jsxs(w_,{children:[o.jsx(pc,{$active:Ve==="all",onClick:()=>Je("all"),children:l("DASH_All")}),o.jsx(pc,{$active:Ve==="public",onClick:()=>Je("public"),children:l("DASH_Public")}),o.jsx(pc,{$active:Ve==="private",onClick:()=>Je("private"),children:l("DASH_Private")})]})}),At.length===0?o.jsxs(Xc,{children:[o.jsx(Ja,{width:"20%"}),o.jsx($a,{children:o.jsx(qa,{children:l(c?"DASH_NoPosters":"DASH_NoPublicPosters")})})]}):o.jsx(Od,{children:At.map(ye=>o.jsx(Pc,{poster:ye,variant:c?"myposters":"community",isOwner:c,onDelete:c?Lt:void 0,onVisibilityChange:c?lt:void 0,onPin:c?st:void 0,pinned:ye._id===ue},ye._id))}),H&&o.jsx(zd,{onClick:()=>(c?Be:De)(D+1,!0),disabled:Z,children:Z?"…":l("COMMUNITY_LoadMore")})]})),j==="favorites"&&(ne&&!we?o.jsx($a,{children:o.jsx(qa,{children:"…"})}):o.jsxs(o.Fragment,{children:[o.jsx(Fd,{children:o.jsx(y_,{value:Fe,onChange:ye=>Te(ye.target.value),placeholder:l("COMMUNITY_SearchPlaceholder")||"Buscar..."})}),Ue.length===0?o.jsxs(Xc,{children:[o.jsx(Ja,{width:"20%"}),o.jsx($a,{children:o.jsx(qa,{children:l("DASH_NoFavorites")})})]}):o.jsx(Od,{children:Ue.map(ye=>o.jsx(Pc,{poster:ye,variant:"favorites",isOwner:c,onUnfavorite:ot},ye._id))}),le&&!Fe&&o.jsx(zd,{onClick:()=>it(Y+1,!0),disabled:ne,children:ne?"…":l("COMMUNITY_LoadMore")})]})),j==="stats"&&(q?o.jsx($a,{children:o.jsx(qa,{children:"…"})}):o.jsx(E_,{stats:A,isOwner:c}))]},j),c&&Ie&&o.jsx(Fs,{title:l("DASH_ConfirmDeleteTitle"),paragraph:l("DASH_ConfirmDelete"),confirmText:l("DASH_Delete"),onConfirm:et,cancelText:l("Cancel"),onCancel:ut,canClose:!0,isClosing:be}),c&&o.jsx($y,{isOpen:w,onClose:()=>_(!1),onProfileUpdate:()=>Xe.getUserProfile().then(ye=>f(ye.user)).catch(()=>{}),initialBio:(d==null?void 0:d.bio)||""})]})}const R_=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:a=!1,onClick:s})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[o.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),o.jsx("path",{fill:n,style:{animation:a?"pulse 2s infinite":"none",cursor:a?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),$f=document.createElement("style");$f.textContent=`
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
`;document.head.appendChild($f);const O_="/assets/kanye.BMPu-Gq3.png",F_="/assets/runaway.DjODmQSR.mp3",Bd=()=>{const e=sn(),{t}=Tt(),[r,n]=k.useState(0),a=k.useRef(null),[s,l]=k.useState(!1),c=()=>{n(r+1),console.log(r)},d=()=>{a.current&&(a.current.loop=!0,a.current.paused?(a.current.play(),l(!0)):(a.current.pause(),l(!1)))};return o.jsxs(z_,{playing:s,children:[o.jsx(R_,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!s,onClick:c}),o.jsxs(q_,{children:[o.jsx(mc,{playing:s,active:r>=1}),o.jsx(mc,{playing:s,active:r>=2}),o.jsx(mc,{playing:s,active:r>=3})]}),o.jsx(B_,{children:t("errorTitle")}),o.jsx(U_,{children:t("errorMessage")}),o.jsx(H_,{playing:s,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&o.jsxs(o.Fragment,{children:[o.jsx($_,{src:O_,alt:"Kanye",onClick:d}),o.jsx("audio",{ref:a,src:F_})]})]})},z_=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,B_=b.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,U_=b.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,H_=b.button`
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
`,$_=b.img`
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
`,q_=b.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,mc=b.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Us=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`,ua=b.h2`
  font-size: 1.4em;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.15em;
  }
`,qf=b.input`
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
`,k0=b.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`,ys=b.button`
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
`,Ps=b.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85em;

  @media (max-width: 640px) {
    font-size: 0.78em;
  }
`,zt=b.th`
  text-align: left;
  padding: 10px 12px;
  border-bottom: 2px solid var(--borderColor);
  font-weight: 700;
  white-space: nowrap;
  color: var(--textSecondary);
  font-size: 0.85em;
`,Bt=b.td`
  padding: 10px 12px;
  border-bottom: 1px solid var(--borderColor);
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`,Di=b.tr`
  ${({$selected:e})=>e&&"background: color-mix(in srgb, var(--AccentColor) 8%, transparent);"}
  &:hover { background: var(--glassBackground); }
`,Pn=b.button`
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
`,$o=b.span`
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
`;const M0=b.button`
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
`,fa=b.p`
  text-align: center;
  color: var(--textSecondary);
  padding: 40px 0;
  font-size: 0.9em;
`,Vf=b.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,Es=b.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
  border: 1px solid var(--borderColor);
`,_s=b.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,Cs=b.div`
  background: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90vw;
`,Ss=b.h3`
  margin: 0 0 16px;
  font-weight: 700;
  font-size: 1.1em;
`,As=b.input`
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
`,V_=b.textarea`
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
`,Y_=b.select`
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
`,ks=b.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`,Pi=b.button`
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
`;const gc=b.section`
  margin-bottom: 28px;
`,xc=b.h3`
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
`,vc=b.div`
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
`,$n=b.div`
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
`,qn=b.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`,Vn=b.span`
  font-size: 1.7em;
  font-weight: 800;
  line-height: 1.2;
`,G_=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`,bc=b.div`
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({$bg:e})=>e||"var(--glassBackground)"};
  border: 1px solid var(--borderColor);
`,wc=b.div`
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
`,yc=b.div`
  display: flex;
  flex-direction: column;
`,_c=b.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`,Cc=b.span`
  font-size: 0.78em;
  color: var(--textSecondary);
  font-weight: 600;
`;function W_(){var s,l;const{t:e}=Tt(),[t,r]=k.useState(null),[n,a]=k.useState(!0);return k.useEffect(()=>{wr.getOverview().then(r).catch(()=>{}).finally(()=>a(!1))},[]),n?o.jsx(fa,{children:e("Loading")}):t?o.jsxs(o.Fragment,{children:[o.jsx(Us,{children:o.jsx(ua,{children:e("ADMIN_Overview")})}),o.jsxs(G_,{children:[o.jsxs(bc,{children:[o.jsx(wc,{children:o.jsx(Vl,{})}),o.jsxs(yc,{children:[o.jsx(_c,{children:t.engagement.totalViews.toLocaleString()}),o.jsx(Cc,{children:e("ADMIN_Views")})]})]}),o.jsxs(bc,{children:[o.jsx(wc,{children:o.jsx(X3,{})}),o.jsxs(yc,{children:[o.jsx(_c,{children:t.engagement.totalDownloads.toLocaleString()}),o.jsx(Cc,{children:e("ADMIN_Downloads")})]})]}),o.jsxs(bc,{children:[o.jsx(wc,{children:o.jsx(qo,{})}),o.jsxs(yc,{children:[o.jsx(_c,{children:t.engagement.totalFavorites.toLocaleString()}),o.jsx(Cc,{children:e("ADMIN_Favorites")})]})]})]}),o.jsxs(gc,{children:[o.jsxs(xc,{children:[o.jsx(_h,{})," ",e("ADMIN_Users")]}),o.jsxs(vc,{$cols:4,children:[o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_TotalUsers")}),o.jsx(Vn,{children:t.users.total})]}),o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_ActiveUsers")}),o.jsx(Vn,{children:t.users.active})]}),o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_SuspendedUsers")}),o.jsx(Vn,{children:t.users.suspended})]}),o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_Admins")}),o.jsx(Vn,{children:t.users.admins})]})]})]}),o.jsxs(gc,{children:[o.jsxs(xc,{children:[o.jsx(yh,{})," ",e("ADMIN_Posters")]}),o.jsxs(vc,{$cols:4,children:[o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_TotalPosters")}),o.jsx(Vn,{children:t.posters.total})]}),o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_PublicPosters")}),o.jsx(Vn,{children:t.posters.public})]}),o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_PrivatePosters")}),o.jsx(Vn,{children:t.posters.private})]}),o.jsxs($n,{children:[o.jsx(qn,{children:e("ADMIN_DeletedPosters")}),o.jsx(Vn,{children:t.posters.deleted})]})]})]}),o.jsxs(gc,{children:[o.jsxs(xc,{children:[o.jsx(n4,{})," ",e("ADMIN_Last30d")]}),o.jsxs(vc,{$cols:4,children:[o.jsxs($n,{children:[o.jsxs(qn,{children:[e("ADMIN_Last7d")," — ",e("ADMIN_Users")]}),o.jsx(Vn,{children:t.users.last7d})]}),o.jsxs($n,{children:[o.jsxs(qn,{children:[e("ADMIN_Last30d")," — ",e("ADMIN_Users")]}),o.jsx(Vn,{children:t.users.last30d})]}),o.jsxs($n,{children:[o.jsxs(qn,{children:[e("ADMIN_Last7d")," — ",e("ADMIN_Posters")]}),o.jsx(Vn,{children:t.posters.last7d})]}),o.jsxs($n,{children:[o.jsxs(qn,{children:[e("ADMIN_Last30d")," — ",e("ADMIN_Posters")]}),o.jsx(Vn,{children:t.posters.last30d})]})]})]}),((s=t.top5Posters)==null?void 0:s.length)>0&&o.jsxs(o.Fragment,{children:[o.jsx(ua,{style:{fontSize:"1.1em",marginBottom:12,marginTop:8},children:e("ADMIN_TopPosters")}),o.jsx(Es,{children:o.jsxs(Ps,{children:[o.jsx("thead",{children:o.jsxs(Di,{children:[o.jsx(zt,{children:e("ADMIN_Album")}),o.jsx(zt,{children:e("ADMIN_Artist")}),o.jsx(zt,{children:e("ADMIN_Score")}),o.jsx(zt,{children:e("ADMIN_Views")}),o.jsx(zt,{children:e("ADMIN_Downloads")})]})}),o.jsx("tbody",{children:t.top5Posters.map(c=>o.jsxs(Di,{children:[o.jsx(Bt,{children:c.albumName}),o.jsx(Bt,{children:c.artistsName}),o.jsx(Bt,{children:c.popularityScore}),o.jsx(Bt,{children:c.views}),o.jsx(Bt,{children:c.downloads})]},c._id))})]})})]}),((l=t.top5Users)==null?void 0:l.length)>0&&o.jsxs(o.Fragment,{children:[o.jsx(ua,{style:{fontSize:"1.1em",marginBottom:12,marginTop:24},children:e("ADMIN_TopUsers")}),o.jsx(Es,{children:o.jsxs(Ps,{children:[o.jsx("thead",{children:o.jsxs(Di,{children:[o.jsx(zt,{children:e("ADMIN_Name")}),o.jsx(zt,{children:e("ADMIN_Username")}),o.jsx(zt,{children:e("ADMIN_Badge")}),o.jsx(zt,{children:e("ADMIN_Score")})]})}),o.jsx("tbody",{children:t.top5Users.map(c=>o.jsxs(Di,{children:[o.jsx(Bt,{children:c.name}),o.jsx(Bt,{children:c.username}),o.jsx(Bt,{children:c.badge||"—"}),o.jsx(Bt,{children:c.badgeScore})]},c._id))})]})})]})]}):o.jsx(fa,{children:e("ADMIN_NoResults")})}const X_=["","active","suspended"];function Z_(){const{t:e}=Tt(),{user:t}=pi(),[r,n]=k.useState([]),[a,s]=k.useState(0),[l,c]=k.useState(1),[d,f]=k.useState(!1),[p,v]=k.useState(""),[S,m]=k.useState(""),[w,_]=k.useState(!0),[j,M]=k.useState(null),[I,P]=k.useState({name:"",username:"",bio:"",badge:""}),[D,$]=k.useState(null),H=k.useCallback(async(C=1,E=!1)=>{_(!0);try{const U={page:C,limit:30};p.trim()&&(U.search=p.trim()),S&&(U.status=S);const Y=await wr.getUsers(U);n(ie=>E?[...ie,...Y.users]:Y.users),s(Y.total),f(Y.hasMore),c(C)}catch{}_(!1)},[p,S]);k.useEffect(()=>{H(1)},[H]);const Q=async(C,E)=>{try{C==="ban"?await wr.banUser(E):C==="unban"?await wr.unbanUser(E):C==="promote"?await wr.promoteUser(E):C==="demote"?await wr.demoteUser(E):C==="forceLogout"?await wr.forceLogout(E):C==="purge"&&await wr.purgeUser(E),$(null),H(1)}catch{}},Z=C=>{P({name:C.name||"",username:C.username||"",bio:C.bio||"",badge:C.badge||""}),M(C)},T=async()=>{if(j)try{await wr.editUser(j._id,I),M(null),H(1)}catch{}},X=C=>C==="active"?e("ADMIN_Active"):C==="suspended"?e("ADMIN_Suspended"):C;return o.jsxs(o.Fragment,{children:[o.jsxs(Us,{children:[o.jsxs(ua,{children:[e("ADMIN_Users")," (",a,")"]}),o.jsx(qf,{placeholder:e("ADMIN_Search"),value:p,onChange:C=>v(C.target.value)})]}),o.jsx(k0,{children:X_.map(C=>o.jsx(ys,{$active:S===C,onClick:()=>m(C),children:C?X(C):e("ADMIN_All")},C||"all"))}),r.length===0&&!w?o.jsx(fa,{children:e("ADMIN_NoResults")}):o.jsx(o.Fragment,{children:o.jsx(Es,{children:o.jsxs(Ps,{children:[o.jsx("thead",{children:o.jsxs(Di,{children:[o.jsx(zt,{children:e("ADMIN_Name")}),o.jsx(zt,{children:e("ADMIN_Username")}),o.jsx(zt,{children:e("ADMIN_Email")}),o.jsx(zt,{children:e("ADMIN_Status")}),o.jsx(zt,{children:e("ADMIN_Role")}),o.jsx(zt,{children:e("ADMIN_Badge")}),o.jsx(zt,{children:e("ADMIN_Actions")})]})}),o.jsx("tbody",{children:r.map(C=>{var Y;const E=(Y=C.permissions)==null?void 0:Y.includes("admin"),U=C._id===(t==null?void 0:t._id);return o.jsxs(Di,{children:[o.jsx(Bt,{children:C.name}),o.jsx(Bt,{children:o.jsxs("span",{style:{cursor:"pointer",fontWeight:600},onClick:()=>window.open(`/u/${C.username}`,"_blank"),title:e("ADMIN_ViewProfile"),children:[C.username," ↗"]})}),o.jsx(Bt,{children:C.email}),o.jsx(Bt,{children:o.jsx($o,{$variant:C.status,children:X(C.status)})}),o.jsx(Bt,{children:E&&o.jsx($o,{$variant:"admin",children:"Admin"})}),o.jsx(Bt,{children:C.badge||"—"}),o.jsx(Bt,{children:o.jsxs(Vf,{children:[o.jsx(Pn,{onClick:()=>Z(C),children:e("ADMIN_Edit")}),C.status==="active"&&!U&&o.jsx(Pn,{$danger:!0,onClick:()=>$({action:"ban",id:C._id,label:e("ADMIN_Ban")}),children:e("ADMIN_Ban")}),C.status==="suspended"&&o.jsx(Pn,{onClick:()=>$({action:"unban",id:C._id,label:e("ADMIN_Unban")}),children:e("ADMIN_Unban")}),C.status==="suspended"&&o.jsx(Pn,{$danger:!0,onClick:()=>$({action:"purge",id:C._id,label:e("ADMIN_ConfirmPurgeUser")}),children:e("ADMIN_PurgeUser")}),!E&&C.status==="active"&&o.jsx(Pn,{onClick:()=>$({action:"promote",id:C._id,label:e("ADMIN_Promote")}),children:e("ADMIN_Promote")}),E&&!U&&o.jsx(Pn,{onClick:()=>$({action:"demote",id:C._id,label:e("ADMIN_Demote")}),children:e("ADMIN_Demote")}),!U&&o.jsx(Pn,{onClick:()=>$({action:"forceLogout",id:C._id,label:e("ADMIN_ForceLogout")}),children:e("ADMIN_ForceLogout")})]})})]},C._id)})})]})})}),d&&o.jsx(M0,{onClick:()=>H(l+1,!0),children:e("ADMIN_LoadMore")}),D&&o.jsx(_s,{onClick:()=>$(null),children:o.jsxs(Cs,{onClick:C=>C.stopPropagation(),children:[o.jsx(Ss,{children:e("ADMIN_Confirm")}),o.jsx("p",{style:{marginBottom:16,fontSize:"0.9em"},children:D.label}),o.jsxs(ks,{children:[o.jsx(Pi,{onClick:()=>$(null),children:e("ADMIN_No")}),o.jsx(Pi,{$primary:!0,onClick:()=>Q(D.action,D.id),children:e("ADMIN_Yes")})]})]})}),j&&o.jsx(_s,{onClick:()=>M(null),children:o.jsxs(Cs,{onClick:C=>C.stopPropagation(),children:[o.jsxs(Ss,{children:[e("ADMIN_Edit")," — ",j.username]}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Name")}),o.jsx(As,{value:I.name,onChange:C=>P(E=>({...E,name:C.target.value}))}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Username")}),o.jsx(As,{value:I.username,onChange:C=>P(E=>({...E,username:C.target.value}))}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Bio")}),o.jsx(V_,{value:I.bio,onChange:C=>P(E=>({...E,bio:C.target.value})),rows:3}),o.jsx("label",{style:{fontSize:"0.8em",fontWeight:600,marginBottom:4,display:"block"},children:e("ADMIN_Badge")}),o.jsxs(Y_,{value:I.badge,onChange:C=>P(E=>({...E,badge:C.target.value})),children:[o.jsxs("option",{value:"",children:["— ",e("ADMIN_NoBadge")," —"]}),o.jsx("option",{value:"creator_bronze",children:e("BADGE_TIER_bronze")}),o.jsx("option",{value:"creator_silver",children:e("BADGE_TIER_silver")}),o.jsx("option",{value:"creator_gold",children:e("BADGE_TIER_gold")}),o.jsx("option",{value:"creator_diamond",children:e("BADGE_TIER_diamond")})]}),o.jsxs(ks,{children:[o.jsx(Pi,{onClick:()=>M(null),children:e("Cancel")}),o.jsx(Pi,{$primary:!0,onClick:T,children:e("ADMIN_Save")})]})]})})]})}const Sc=b.label`
  font-size: 0.8em;
  font-weight: 600;
  color: var(--textSecondary);
  margin-bottom: 2px;
  display: block;
`,J_=b.span`
  cursor: pointer;
  font-weight: 600;
  &:hover { text-decoration: underline; opacity: 0.8; }
`,K_=b.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  align-items: flex-start;
`,Q_=b.div`
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
`,eC=b.div`
  width: 124px;
  height: 175px;
  border-radius: 8px;
  background: var(--borderColor);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  opacity: 0.3;
`,tC=b.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 12px;
  font-size: 0.82em;
  flex: 1;
  align-content: start;
`,oa=b.span`
  color: var(--textSecondary);
  font-weight: 700;
  white-space: nowrap;
`,aa=b.span`
  color: var(--textColor);
  word-break: break-word;
`,rC=["","public","private"],nC=["false","true","all"],iC=["recent","popular","views","downloads"];function oC(){var we,xe;const{t:e}=Tt(),[t,r]=k.useState([]),[n,a]=k.useState(0),[s,l]=k.useState(1),[c,d]=k.useState(!1),[f,p]=k.useState(""),[v,S]=k.useState(""),[m,w]=k.useState("false"),[_,j]=k.useState("recent"),[M,I]=k.useState(!0),[P,D]=k.useState(null),[$,H]=k.useState(null),[Q,Z]=k.useState(null),[T,X]=k.useState(null),C=k.useCallback(async(A=1,z=!1)=>{I(!0);try{const q={page:A,limit:30,isDeleted:m,sort:_};f.trim()&&(q.search=f.trim()),v&&(q.visibility=v);const ee=await wr.getPosters(q);r(re=>z?[...re,...ee.posters]:ee.posters),a(ee.total),d(ee.hasMore),l(A)}catch{}I(!1)},[f,v,m,_]);k.useEffect(()=>{C(1)},[C]);const E=async(A,z)=>{try{A==="delete"?await wr.deletePoster(z):A==="restore"?await wr.restorePoster(z):A==="purge"?await wr.purgePoster(z):A==="makePublic"?await wr.changeVisibility(z,"public"):A==="makePrivate"&&await wr.changeVisibility(z,"private"),D(null),C(1)}catch{}},U=A=>{H({id:A._id,views:A.views??0,downloads:A.downloads??0,favoritesCount:A.favoritesCount??0})},Y=async()=>{if($)try{await wr.editPoster($.id,{views:Number($.views),downloads:Number($.downloads),favoritesCount:Number($.favoritesCount)}),H(null),C(1)}catch{}},ie=async A=>{Z(A),X(null);try{const z=await wr.getPoster(A._id);X(z.poster)}catch{}},le=()=>{Z(null),X(null)},fe=A=>A==="public"?e("ADMIN_Public"):A==="private"?e("ADMIN_Private"):A,ne=A=>e(A==="false"?"ADMIN_Active":A==="true"?"ADMIN_Deleted":"ADMIN_All"),ge=A=>A?new Date(A).toLocaleDateString():"—";return o.jsxs(o.Fragment,{children:[o.jsxs(Us,{children:[o.jsxs(ua,{children:[e("ADMIN_Posters")," (",n,")"]}),o.jsx(qf,{placeholder:e("ADMIN_Search"),value:f,onChange:A=>p(A.target.value)})]}),o.jsxs(k0,{children:[nC.map(A=>o.jsx(ys,{$active:m===A,onClick:()=>w(A),children:ne(A)},A)),o.jsx("span",{style:{width:1,background:"var(--borderColor)",margin:"0 4px"}}),rC.map(A=>o.jsx(ys,{$active:v===A,onClick:()=>S(A),children:A?fe(A):e("ADMIN_All")},A||"allvis")),o.jsx("span",{style:{width:1,background:"var(--borderColor)",margin:"0 4px"}}),iC.map(A=>o.jsx(ys,{$active:_===A,onClick:()=>j(A),children:e(A==="recent"?"ADMIN_Date":A==="popular"?"ADMIN_Score":A==="views"?"ADMIN_Views":"ADMIN_Downloads")},A))]}),t.length===0&&!M?o.jsx(fa,{children:e("ADMIN_NoResults")}):o.jsx(Es,{children:o.jsxs(Ps,{children:[o.jsx("thead",{children:o.jsxs(Di,{children:[o.jsx(zt,{children:e("ADMIN_Album")}),o.jsx(zt,{children:e("ADMIN_Artist")}),o.jsx(zt,{children:e("ADMIN_Author")}),o.jsx(zt,{children:e("ADMIN_Visibility")}),o.jsx(zt,{children:e("ADMIN_Views")}),o.jsx(zt,{children:e("ADMIN_Downloads")}),o.jsx(zt,{children:e("ADMIN_Favorites")}),o.jsx(zt,{children:e("ADMIN_Created")}),o.jsx(zt,{children:e("ADMIN_Actions")})]})}),o.jsx("tbody",{children:t.map(A=>{var z;return o.jsxs(Di,{children:[o.jsx(Bt,{children:o.jsx(J_,{onClick:()=>ie(A),children:A.albumName})}),o.jsx(Bt,{children:A.artistsName}),o.jsx(Bt,{children:((z=A.authorId)==null?void 0:z.username)||"—"}),o.jsx(Bt,{children:A.isDeleted?o.jsx($o,{$variant:"deleted",children:e("ADMIN_Deleted")}):o.jsx($o,{$variant:A.visibility,children:fe(A.visibility)})}),o.jsx(Bt,{children:A.views}),o.jsx(Bt,{children:A.downloads}),o.jsx(Bt,{children:A.favoritesCount}),o.jsx(Bt,{children:ge(A.createdAt)}),o.jsx(Bt,{children:o.jsxs(Vf,{children:[!A.isDeleted&&o.jsxs(o.Fragment,{children:[o.jsx(Pn,{onClick:()=>U(A),children:e("ADMIN_EditMetrics")}),o.jsx(Pn,{$danger:!0,onClick:()=>D({action:"delete",id:A._id,label:e("ADMIN_Delete")}),children:e("ADMIN_Delete")}),A.visibility==="public"?o.jsx(Pn,{onClick:()=>E("makePrivate",A._id),children:e("ADMIN_MakePrivate")}):o.jsx(Pn,{onClick:()=>E("makePublic",A._id),children:e("ADMIN_MakePublic")})]}),A.isDeleted&&o.jsxs(o.Fragment,{children:[o.jsx(Pn,{onClick:()=>D({action:"restore",id:A._id,label:e("ADMIN_Restore")}),children:e("ADMIN_Restore")}),o.jsx(Pn,{$danger:!0,onClick:()=>D({action:"purge",id:A._id,label:e("ADMIN_PurgeConfirm")}),children:e("ADMIN_Purge")})]})]})})]},A._id)})})]})}),c&&o.jsx(M0,{onClick:()=>C(s+1,!0),children:e("ADMIN_LoadMore")}),P&&o.jsx(_s,{onClick:()=>D(null),children:o.jsxs(Cs,{onClick:A=>A.stopPropagation(),children:[o.jsx(Ss,{children:e("ADMIN_Confirm")}),o.jsx("p",{style:{marginBottom:16,fontSize:"0.9em"},children:P.label}),o.jsxs(ks,{children:[o.jsx(Pi,{onClick:()=>D(null),children:e("ADMIN_No")}),o.jsx(Pi,{$primary:!0,onClick:()=>E(P.action,P.id),children:e("ADMIN_Yes")})]})]})}),$&&o.jsx(_s,{onClick:()=>H(null),children:o.jsxs(Cs,{onClick:A=>A.stopPropagation(),children:[o.jsx(Ss,{children:e("ADMIN_EditMetrics")}),o.jsx(Sc,{children:e("ADMIN_Views")}),o.jsx(As,{type:"number",min:"0",value:$.views,onChange:A=>H(z=>({...z,views:A.target.value}))}),o.jsx(Sc,{children:e("ADMIN_Downloads")}),o.jsx(As,{type:"number",min:"0",value:$.downloads,onChange:A=>H(z=>({...z,downloads:A.target.value}))}),o.jsx(Sc,{children:e("ADMIN_Favorites")}),o.jsx(As,{type:"number",min:"0",value:$.favoritesCount,onChange:A=>H(z=>({...z,favoritesCount:A.target.value}))}),o.jsxs(ks,{children:[o.jsx(Pi,{onClick:()=>H(null),children:e("ADMIN_Cancel")}),o.jsx(Pi,{$primary:!0,onClick:Y,children:e("ADMIN_Save")})]})]})}),Q&&o.jsx(_s,{onClick:le,children:o.jsxs(Cs,{onClick:A=>A.stopPropagation(),style:{maxWidth:560},children:[o.jsxs(Ss,{style:{marginBottom:14},children:[Q.albumName,o.jsx("span",{style:{fontWeight:400,fontSize:"0.8em",marginLeft:8,opacity:.6},children:Q.artistsName})]}),o.jsxs(K_,{children:[o.jsx(Q_,{children:(we=T==null?void 0:T.posterJson)!=null&&we.albumCover?o.jsx("img",{src:T.posterJson.albumCover,alt:Q.albumName}):o.jsx(eC,{children:"🎵"})}),o.jsxs(tC,{children:[o.jsx(oa,{children:e("ADMIN_Author")}),o.jsx(aa,{children:((xe=Q.authorId)==null?void 0:xe.username)||"—"}),o.jsx(oa,{children:e("ADMIN_Status")}),o.jsx(aa,{children:Q.isDeleted?o.jsx($o,{$variant:"deleted",children:e("ADMIN_Deleted")}):o.jsx($o,{$variant:Q.visibility,children:fe(Q.visibility)})}),o.jsx(oa,{children:e("ADMIN_Views")}),o.jsx(aa,{children:Q.views.toLocaleString()}),o.jsx(oa,{children:e("ADMIN_Downloads")}),o.jsx(aa,{children:Q.downloads.toLocaleString()}),o.jsx(oa,{children:e("ADMIN_Favorites")}),o.jsx(aa,{children:Q.favoritesCount.toLocaleString()}),o.jsx(oa,{children:e("ADMIN_Created")}),o.jsx(aa,{children:ge(Q.createdAt)}),o.jsx(oa,{children:"ID"}),o.jsx(aa,{style:{fontSize:"0.85em",opacity:.6,fontFamily:"monospace"},children:Q._id})]})]}),o.jsxs(ks,{children:[o.jsxs(Pi,{onClick:()=>window.open(`/p/${Q._id}`,"_blank"),children:[e("ADMIN_OpenPoster")," ↗"]}),o.jsx(Pi,{$primary:!0,onClick:le,children:e("ADMIN_Close")})]})]})})]})}const aC=["","ban_user","unban_user","delete_poster","restore_poster","change_visibility","edit_poster","promote_admin","demote_admin","force_logout","edit_user"];function sC(){const{t:e}=Tt(),[t,r]=k.useState([]),[n,a]=k.useState(0),[s,l]=k.useState(1),[c,d]=k.useState(!1),[f,p]=k.useState(""),[v,S]=k.useState(!0),m=k.useCallback(async(_=1,j=!1)=>{S(!0);try{const M={page:_,limit:30};f&&(M.action=f);const I=await wr.getLogs(M);r(P=>j?[...P,...I.logs]:I.logs),a(I.total),d(I.hasMore),l(_)}catch{}S(!1)},[f]);k.useEffect(()=>{m(1)},[m]);const w=_=>_?new Date(_).toLocaleString():"—";return o.jsxs(o.Fragment,{children:[o.jsx(Us,{children:o.jsxs(ua,{children:[e("ADMIN_Logs")," (",n,")"]})}),o.jsx(k0,{children:aC.map(_=>o.jsx(ys,{$active:f===_,onClick:()=>p(_),children:_||e("ADMIN_All")},_||"all"))}),t.length===0&&!v?o.jsx(fa,{children:e("ADMIN_NoResults")}):o.jsx(Es,{children:o.jsxs(Ps,{children:[o.jsx("thead",{children:o.jsxs(Di,{children:[o.jsx(zt,{children:e("ADMIN_Date")}),o.jsx(zt,{children:e("ADMIN_Action")}),o.jsx(zt,{children:e("ADMIN_Admin")}),o.jsx(zt,{children:e("ADMIN_Target")}),o.jsx(zt,{children:"IP"})]})}),o.jsx("tbody",{children:t.map(_=>{var j,M;return o.jsxs(Di,{children:[o.jsx(Bt,{children:w(_.createdAt)}),o.jsx(Bt,{children:o.jsx($o,{children:_.action})}),o.jsx(Bt,{children:((j=_.adminId)==null?void 0:j.username)||((M=_.adminId)==null?void 0:M._id)||"—"}),o.jsx(Bt,{style:{fontSize:"0.8em",opacity:.7},children:_.targetId}),o.jsx(Bt,{style:{fontSize:"0.8em",opacity:.7},children:_.ip||"—"})]},_._id)})})]})}),c&&o.jsx(M0,{onClick:()=>m(s+1,!0),children:e("ADMIN_LoadMore")})]})}const Pl=b.section`
  margin-bottom: 28px;
`,El=b.h3`
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
`,Dl=b.div`
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
`,Yn=b.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--glassBackground);
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Gn=b.span`
  font-size: 0.75em;
  color: var(--textSecondary);
  font-weight: 600;
`,Wn=b.span`
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.2;
`,Ud=b.div`
  margin-top: 8px;
`,Hd=b.div`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--borderColor);
  overflow: hidden;
`,$d=b.div`
  height: 100%;
  border-radius: 3px;
  background: var(--AccentColor);
  width: ${({$pct:e})=>Math.min(e,100)}%;
  transition: width 0.4s ease;
`,qd=b.span`
  font-size: 0.68em;
  color: var(--textSecondary);
  margin-top: 4px;
  display: block;
`,lC=512*1024*1024;function cC(){const{t:e}=Tt(),[t,r]=k.useState(null),[n,a]=k.useState(!0);if(k.useEffect(()=>{wr.getHealth().then(r).catch(()=>{}).finally(()=>a(!1))},[]),n)return o.jsx(fa,{children:e("Loading")});if(!t)return o.jsx(fa,{children:e("ADMIN_NoResults")});const s=f=>{const p=Math.floor(f/86400),v=Math.floor(f%86400/3600),S=Math.floor(f%3600/60);return p>0?`${p}d ${v}h ${S}m`:`${v}h ${S}m`},l=f=>{if(f===0||f==null)return"0 B";const p=["B","KB","MB","GB"],v=Math.floor(Math.log(f)/Math.log(1024));return`${(f/Math.pow(1024,v)).toFixed(v>1?2:0)} ${p[v]}`},c=t.storage?t.storage.totalSize/lC*100:0,d=t.memory?t.memory.heapUsed/t.memory.heapTotal*100:0;return o.jsxs(o.Fragment,{children:[o.jsxs(Us,{children:[o.jsx(ua,{children:e("ADMIN_Health")}),o.jsx($o,{$variant:t.status==="healthy"?"active":"suspended",children:t.status==="healthy"?e("ADMIN_Healthy"):e("ADMIN_Degraded")})]}),o.jsxs(Pl,{children:[o.jsxs(El,{children:[o.jsx(t4,{})," ",e("ADMIN_ServerInfo")]}),o.jsxs(Dl,{$cols:4,children:[o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_Uptime")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:s(t.api.uptimeSeconds)})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_Version")}),o.jsxs(Wn,{style:{fontSize:"1.2em"},children:["v",t.api.version]})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_NodeVersion")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:t.api.nodeVersion||"—"})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_Ping")}),o.jsxs(Wn,{children:[t.mongo.pingMs,"ms"]})]})]})]}),o.jsxs(Pl,{children:[o.jsxs(El,{children:[o.jsx(Z3,{})," ",e("ADMIN_Database")]}),o.jsxs(Dl,{$cols:4,children:[o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_MongoStatus")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:t.mongo.connected?"✓ Online":"✗ Offline"})]}),Object.entries(t.collections).map(([f,p])=>o.jsxs(Yn,{children:[o.jsx(Gn,{children:f}),o.jsx(Wn,{children:p.toLocaleString()})]},f))]})]}),t.storage&&o.jsxs(Pl,{children:[o.jsxs(El,{children:[o.jsx(K3,{})," ",e("ADMIN_Storage")]}),o.jsxs(Dl,{$cols:3,children:[o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_DataSize")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:l(t.storage.dataSize)})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_IndexSize")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:l(t.storage.indexSize)})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_TotalSize")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:l(t.storage.totalSize)}),o.jsxs(Ud,{children:[o.jsx(Hd,{children:o.jsx($d,{$pct:c})}),o.jsxs(qd,{children:[c.toFixed(1),"% de 512 MB"]})]})]})]})]}),t.memory&&o.jsxs(Pl,{children:[o.jsxs(El,{children:[o.jsx(J3,{})," ",e("ADMIN_Memory")]}),o.jsxs(Dl,{$cols:3,children:[o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_RSS")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:l(t.memory.rss)})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:e("ADMIN_HeapUsed")}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:l(t.memory.heapUsed)}),o.jsxs(Ud,{children:[o.jsx(Hd,{children:o.jsx($d,{$pct:d})}),o.jsxs(qd,{children:[d.toFixed(1),"% do heap"]})]})]}),o.jsxs(Yn,{children:[o.jsx(Gn,{children:"Heap Total"}),o.jsx(Wn,{style:{fontSize:"1.2em"},children:l(t.memory.heapTotal)})]})]})]})]})}const uC=["Overview","Users","Posters","Logs","Health"],dC={Overview:q3,Users:_h,Posters:yh,Logs:W3,Health:qo},hC=b.div`
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
`,fC=b.nav`
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
`,pC=b.div`
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
`,mC=b.h2`
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
`,gC=b.div`
  height: 1px;
  background: var(--borderColor);
  margin: 0 16px 8px;

  @media (max-width: 900px) {
    margin: 0 8px 6px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`,xC=b.div`
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
`,vC=b.button`
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
`,bC=b.span`
  @media (max-width: 900px) {
    display: none;
  }
`,wC=b.span`
  font-size: 1.15em;
  display: flex;
  align-items: center;
  opacity: ${({$active:e})=>e?1:.6};
  transition: opacity 0.15s ease;
`,yC=b.div`
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
`,_C=b.main`
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
`;function CC(){const{t:e}=Tt(),t=sn(),{user:r}=pi(),[n,a]=k.useState("Overview");return k.useEffect(()=>{var s;r&&!((s=r.permissions)!=null&&s.includes("admin"))&&t("/")},[r,t]),o.jsxs(hC,{children:[o.jsxs(fC,{children:[o.jsx(pC,{children:o.jsx(mC,{children:e("ADMIN_Panel")})}),o.jsx(gC,{}),o.jsx(xC,{children:uC.map(s=>{const l=dC[s],c=n===s;return o.jsxs(vC,{$active:c,onClick:()=>a(s),children:[o.jsx(wC,{$active:c,children:o.jsx(l,{})}),o.jsx(bC,{children:e(`ADMIN_${s}`)})]},s)})}),o.jsx(yC,{children:"Posterfy Admin"})]}),o.jsxs(_C,{children:[n==="Overview"&&o.jsx(W_,{}),n==="Users"&&o.jsx(Z_,{}),n==="Posters"&&o.jsx(oC,{}),n==="Logs"&&o.jsx(sC,{}),n==="Health"&&o.jsx(cC,{})]})]})}const SC=({children:e})=>{var l;const t=sn(),{user:r,isAuthenticated:n,loading:a}=pi(),s=(l=r==null?void 0:r.permissions)==null?void 0:l.includes("admin");return k.useEffect(()=>{!a&&(!n||!s)&&t("/")},[n,s,a,t]),a?null:n&&s?e:null},AC=()=>(k.useEffect(()=>{S3()},[]),null),Vd=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},j0=()=>"https://posterfy.space"+"/",kC=e=>{const t=j0(),r=Vd(e),n=Vd(t),a=e.includes("://www."),s=e.startsWith("http://");return a||s||r!==n},MC=()=>{const e=window.location.href,t=j0(),r=[];return kC(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},jC=()=>(k.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const a=document.querySelector('meta[name="description"]');(!a||a.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const s=MC();s.isValid||s.issues.forEach(d=>{r.push(`${d.type}: ${d.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),NC=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(k.useEffect(()=>{const a="https://posterfy.space",s=j0(),l=a+"/albuns.png";document.title=e;const c=document.querySelector('meta[name="description"]');c&&c.setAttribute("content",t);const d=document.querySelector('meta[name="keywords"]');d&&d.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",s):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",s),document.head.appendChild(f));const p=document.querySelector('meta[property="og:title"]');p&&p.setAttribute("content",e);const v=document.querySelector('meta[property="og:description"]');v&&v.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",l);const m=document.querySelector('meta[property="og:url"]');m&&m.setAttribute("content",s);const w=document.querySelector('meta[name="twitter:title"]');w&&w.setAttribute("content",e);const _=document.querySelector('meta[name="twitter:description"]');_&&_.setAttribute("content",t);const j=document.querySelector('meta[name="twitter:image"]');j&&j.setAttribute("content",l);const M={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:a+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},I=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');I&&I.remove();const P=document.createElement("script");P.type="application/ld+json",P.id="dynamic-structured-data",P.innerHTML=JSON.stringify(M),document.head.appendChild(P)},[e,t,r]),null);var IC="1.3.14";function Yf(e,t,r){return Math.max(e,Math.min(t,r))}function TC(e,t,r){return(1-r)*e+r*t}function LC(e,t,r,n){return TC(e,t,1-Math.exp(-r*n))}function PC(e,t){return(e%t+t)%t}var EC=class{constructor(){Ee(this,"isRunning",!1);Ee(this,"value",0);Ee(this,"from",0);Ee(this,"to",0);Ee(this,"currentTime",0);Ee(this,"lerp");Ee(this,"duration");Ee(this,"easing");Ee(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=Yf(0,this.currentTime/this.duration,1);t=n>=1;const a=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=LC(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:a,onStart:s,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=l}};function DC(e,t){let r;return function(...n){let a=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(a,n)},t)}}var RC=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Ee(this,"width",0);Ee(this,"height",0);Ee(this,"scrollHeight",0);Ee(this,"scrollWidth",0);Ee(this,"debouncedResize");Ee(this,"wrapperResizeObserver");Ee(this,"contentResizeObserver");Ee(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ee(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ee(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=DC(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Gf=class{constructor(){Ee(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let a=0,s=r.length;a<s;a++)(n=r[a])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(a=>t!==a)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Yd=100/6,Uo={passive:!1},OC=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Ee(this,"touchStart",{x:0,y:0});Ee(this,"lastDelta",{x:0,y:0});Ee(this,"window",{width:0,height:0});Ee(this,"emitter",new Gf);Ee(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ee(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,a=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:a},this.emitter.emit("scroll",{deltaX:n,deltaY:a,event:e})});Ee(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ee(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const a=n===1?Yd:n===2?this.window.width:1,s=n===1?Yd:n===2?this.window.height:1;t*=a,r*=s,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Ee(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Uo),this.element.addEventListener("touchstart",this.onTouchStart,Uo),this.element.addEventListener("touchmove",this.onTouchMove,Uo),this.element.addEventListener("touchend",this.onTouchEnd,Uo)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Uo),this.element.removeEventListener("touchstart",this.onTouchStart,Uo),this.element.removeEventListener("touchmove",this.onTouchMove,Uo),this.element.removeEventListener("touchend",this.onTouchEnd,Uo)}},Gd=e=>Math.min(1,1.001-Math.pow(2,-10*e)),FC=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:a=!1,syncTouchLerp:s=.075,touchInertiaExponent:l=1.7,duration:c,easing:d,lerp:f=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:S=v==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:w=1,autoResize:_=!0,prevent:j,virtualScroll:M,overscroll:I=!0,autoRaf:P=!1,anchors:D=!1,autoToggle:$=!1,allowNestedScroll:H=!1,__experimental__naiveDimensions:Q=!1}={}){Ee(this,"_isScrolling",!1);Ee(this,"_isStopped",!1);Ee(this,"_isLocked",!1);Ee(this,"_preventNextNativeScrollEvent",!1);Ee(this,"_resetVelocityTimeout",null);Ee(this,"__rafID",null);Ee(this,"isTouching");Ee(this,"time",0);Ee(this,"userData",{});Ee(this,"lastVelocity",0);Ee(this,"velocity",0);Ee(this,"direction",0);Ee(this,"options");Ee(this,"targetScroll");Ee(this,"animatedScroll");Ee(this,"animate",new EC);Ee(this,"emitter",new Gf);Ee(this,"dimensions");Ee(this,"virtualScroll");Ee(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Ee(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ee(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Ee(this,"onClick",e=>{const r=e.composedPath().find(n=>{var a;return n instanceof HTMLAnchorElement&&((a=n.getAttribute("href"))==null?void 0:a.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,a)}}});Ee(this,"onPointerDown",e=>{e.button===1&&this.reset()});Ee(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const a=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=t===0&&r===0;if(this.options.syncTouch&&a&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(l||d)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const p=this.options.prevent;if(f.find(j=>{var M,I,P;return j instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(j))||((M=j.hasAttribute)==null?void 0:M.call(j,"data-lenis-prevent"))||a&&((I=j.hasAttribute)==null?void 0:I.call(j,"data-lenis-prevent-touch"))||s&&((P=j.hasAttribute)==null?void 0:P.call(j,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(j,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=a&&this.options.syncTouch,_=a&&n.type==="touchend";_&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ee(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ee(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=IC,(!e||e===document.documentElement)&&(e=window),typeof c=="number"&&typeof d!="function"?d=Gd:typeof d=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:a,syncTouchLerp:s,touchInertiaExponent:l,duration:c,easing:d,lerp:f,infinite:p,gestureOrientation:S,orientation:v,touchMultiplier:m,wheelMultiplier:w,autoResize:_,prevent:j,virtualScroll:M,overscroll:I,autoRaf:P,anchors:D,autoToggle:$,allowNestedScroll:H,__experimental__naiveDimensions:Q},this.dimensions=new RC(e,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new OC(r,{touchMultiplier:m,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:a=this.options.duration,easing:s=this.options.easing,lerp:l=this.options.lerp,onStart:c,onComplete:d,force:f=!1,programmatic:p=!0,userData:v}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?w.left:w.top}const m=S.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(p){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=Yf(0,e,this.limit);if(e===this.targetScroll){c==null||c(this),d==null||d(this);return}if(this.userData=v??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}p||(this.targetScroll=e),typeof a=="number"&&typeof s!="function"?s=Gd:typeof s=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,e,{duration:a,easing:s,lerp:l,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(S,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),p&&(this.targetScroll=S),m||this.emit(),m&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),a=e._lenis??(e._lenis={});let s,l,c,d,f,p,v,S;const m=this.options.gestureOrientation;if(n-(a.time??0)>2e3){a.time=Date.now();const $=window.getComputedStyle(e);a.computedStyle=$;const H=$.overflowX,Q=$.overflowY;if(s=["auto","overlay","scroll"].includes(H),l=["auto","overlay","scroll"].includes(Q),a.hasOverflowX=s,a.hasOverflowY=l,!s&&!l||m==="vertical"&&!l||m==="horizontal"&&!s)return!1;f=e.scrollWidth,p=e.scrollHeight,v=e.clientWidth,S=e.clientHeight,c=f>v,d=p>S,a.isScrollableX=c,a.isScrollableY=d,a.scrollWidth=f,a.scrollHeight=p,a.clientWidth=v,a.clientHeight=S}else c=a.isScrollableX,d=a.isScrollableY,s=a.hasOverflowX,l=a.hasOverflowY,f=a.scrollWidth,p=a.scrollHeight,v=a.clientWidth,S=a.clientHeight;if(!s&&!l||!c&&!d||m==="vertical"&&(!l||!d)||m==="horizontal"&&(!s||!c))return!1;let w;if(m==="horizontal")w="x";else if(m==="vertical")w="y";else{const $=t!==0,H=r!==0;$&&s&&c&&(w="x"),H&&l&&d&&(w="y")}if(!w)return!1;let _,j,M,I,P;if(w==="x")_=e.scrollLeft,j=f-v,M=t,I=s,P=c;else if(w==="y")_=e.scrollTop,j=p-S,M=r,I=l,P=d;else return!1;return(M>0?_<j:_>0)&&I&&P}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?PC(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function zC(){const{pathname:e}=Oi(),[t,r]=k.useState(!1),[n,a]=k.useState(!1);return k.useEffect(()=>{r(!0),a(!0),window.scrollTo(0,0);const s=setTimeout(()=>{r(!1),setTimeout(()=>{a(!1)},300)},2e3);return()=>clearTimeout(s)},[e]),n?o.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:o.jsx(t0,{isVisible:!0})}):null}function BC(){const[e,t]=k.useState(!0),[r,n]=k.useState(!1);return $3(),k.useEffect(()=>{const a=new FC({duration:1.2,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function s(l){a.raf(l),requestAnimationFrame(s)}return requestAnimationFrame(s),()=>{a.destroy()}},[]),k.useEffect(()=>x3(),[]),k.useEffect(()=>{const a=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(a)},[]),k.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),o.jsx(v3,{children:o.jsx(_4,{children:o.jsxs(k4,{children:[o.jsx(NC,{}),o.jsx(jC,{}),o.jsx(AC,{}),o.jsxs(i3,{children:[o.jsx(zC,{}),o.jsxs(Ep,{children:[o.jsx(Ln,{path:"/",element:o.jsx(fs,{showNavbar:!0,showFooter:!0}),children:o.jsx(Ln,{index:!0,element:o.jsx(kd,{loadingComplete:r})})}),o.jsx(Ln,{path:"/p/:posterId",element:o.jsx(fs,{showNavbar:!0,showFooter:!0}),children:o.jsx(Ln,{index:!0,element:o.jsx(kd,{loadingComplete:r})})}),o.jsx(Ln,{path:"/login",element:o.jsx(fs,{showNavbar:!1,showFooter:!1}),children:o.jsx(Ln,{index:!0,element:o.jsx(wy,{})})}),o.jsx(Ln,{path:"/u/:username",element:o.jsx(fs,{showNavbar:!0,showFooter:!0}),children:o.jsx(Ln,{index:!0,element:o.jsx(D_,{})})}),o.jsx(Ln,{path:"/admin",element:o.jsx(SC,{children:o.jsx(fs,{showNavbar:!0,showFooter:!1})}),children:o.jsx(Ln,{index:!0,element:o.jsx(CC,{})})}),o.jsx(Ln,{path:"/error",element:o.jsx(Bd,{})}),o.jsx(Ln,{path:"*",element:o.jsx(Bd,{})})]})]}),o.jsx(t0,{isVisible:e})]})})})}E5.use(D5).init({resources:{en:{translation:{tagDesign:"Design & Create",heroTitle:`Your vision,
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
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:"探索社区",CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",COMMUNITY_Publish:"发布到社区",COMMUNITY_PublishTitle:"发布你的海报",COMMUNITY_VisibilityLabel:"可见性",COMMUNITY_Public:"公开",COMMUNITY_Private:"私密",COMMUNITY_PublicDesc:"与整个社区分享",COMMUNITY_PrivateDesc:"仅为自己保存",COMMUNITY_Publishing:"发布中...",COMMUNITY_Published:"已发布！",COMMUNITY_PublishSuccess:"你的海报已上线！",COMMUNITY_PublishedModalBody:"你的海报已在社区发布。你可以在个人资料中更改可见性或删除它。",COMMUNITY_GotoProfile:"前往个人资料",COMMUNITY_PublishError:"发布失败，请重试。",COMMUNITY_ViewPoster:"查看海报",COMMUNITY_Views:"浏览",COMMUNITY_Downloads:"下载",COMMUNITY_Favorites:"收藏",COMMUNITY_OpenInEditor:"在编辑器中打开",COMMUNITY_Popular:"热门",COMMUNITY_Recent:"最新",COMMUNITY_ThisWeek:"本周",COMMUNITY_MyFavorites:"我的收藏",COMMUNITY_SearchPlaceholder:"按专辑、艺术家或用户搜索...",COMMUNITY_NoPosters:"还没有海报。成为第一个发布者！",COMMUNITY_FetchError:"无法加载海报，请稍后再试。",COMMUNITY_LoadMore:"加载更多...",COMMUNITY_AlbumVersions_one:"{{count}} 个社区版本",COMMUNITY_AlbumVersions_other:"{{count}} 个社区版本",COMMUNITY_DeletePoster:"删除海报",COMMUNITY_ConfirmDelete:"确定要删除这张海报吗？此操作无法撤销。",COMMUNITY_MakePublic:"设为公开",COMMUNITY_MakePrivate:"设为私密",COMMUNITY_LoginToPublish:"登录后发布",COMMUNITY_CantPublishRemix:"从社区打开的海报无法发布。",COMMUNITY_FilterBy:"筛选",COMMUNITY_By:"作者",COMMUNITY_Poster:"海报",USER_TotalDownloads:"总下载量",USER_TotalFavorites:"收到的收藏",USER_PublishedPosters:"已发布海报",USER_Badge:"徽章",USER_PublicProfile:"公开资料",BADGE_TYPE_creator:"创作者",BADGE_TYPE_popular:"热门",BADGE_TYPE_loved:"心意",BADGE_TIER_bronze:"青铜",BADGE_TIER_silver:"白銀",BADGE_TIER_gold:"黄金",BADGE_TIER_diamond:"钓石",BADGE_Progress:"{{score}}/{{next}} 到 {{tier}}",BADGE_MaxTier:"已达最高等级！",BADGE_NoTier:"分数：{{score}}/{{next}}",BADGE_Admin:"管理员",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",PROFILES_Anchor:"创作者。",PROFILES_Title:"发现创作者。",PROFILES_SearchPlaceholder:"按名称或用户名搜索...",PROFILES_NoResults:"未找到创作者。",NoResults:"未找到结果。",PROFILES_LoadMore:"加载更多创作者",PROFILES_Posters:"海报",PROFILES_Likes:"喜欢",PROFILES_Downloads:"下载",PROFILES_FetchError:"无法加载创作者。服务器可能离线。",PROFILE_FetchError:"无法加载此个人资料。服务器可能离线。",PROFILE_PartialError:"部分数据无法加载。服务器可能离线。",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Login:"登录",GotIt:"知道了",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",DASH_Bio:"简介",DASH_BioPlaceholder:"向社区介绍一下你自己...",DASH_BioChars:"字符剩余",DASH_BioNoEmptyLines:"不能有空行。",DASH_OpenSpotify:"在 Spotify 查看",DASH_ConnectSpotify:"连接 Spotify",DASH_ShowSpotify:"在个人资料上显示 Spotify",DASH_FeaturedPoster:"精选海报",NoActivityYet:"暂无活动",DASH_MyPosters:"我的海报",DASH_Posters:"海报",DASH_Favorites:"收藏",DASH_Stats:"统计",DASH_TotalPosters:"已发布海报",DASH_TotalDownloads:"总下载次数",DASH_TotalViews:"总浏览次数",DASH_TotalFavorites:"总收藏数",DASH_MostFavorited:"最多收藏",DASH_MostDownloaded:"最多下载",DASH_MostViewed:"最多浏览",DASH_StatsEmpty:"发布您的第一张海报以在此查看统计信息。",DASH_StatsEmptyPublic:"该用户还没有公开的海报。",DASH_TopHighlights:"热门海报",DASH_NoPosters:"你还没有发布任何海报。",DASH_NoPublicPosters:"该用户还没有发布任何海报。",DASH_NoFavorites:"你还没有收藏任何海报。",DASH_Public:"公开",DASH_Private:"私密",DASH_MakePublic:"设为公开",DASH_MakePrivate:"设为私密",DASH_Delete:"删除",DASH_ConfirmDelete:"确定要删除这张海报吗？此操作无法撤销。",DASH_ConfirmDeleteTitle:"删除海报",DASH_Unfavorite:"取消收藏",DASH_All:"全部",CARD_CTX_Like:"喜欢",CARD_CTX_Unlike:"取消喜欢",CARD_CTX_Open:"打开海报",CARD_CTX_OpenNewTab:"在新标签页中打开",CARD_CTX_UserProfile:"查看资料",CARD_CTX_Admin:"管理员",CARD_CTX_CopyUserId:"复制用户 ID",CARD_CTX_CopyPosterId:"复制海报 ID",CARD_CTX_Delete:"删除海报",CARD_CTX_UserProfileNewTab:"在新标签页打开资料",CARD_CTX_Copied:"已复制!",POSTER_INFO_PublishedAt:"发布于",POSTER_INFO_AdminControls:"管理员控制",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Jd(document.getElementById("root")).render(o.jsx(k.StrictMode,{children:o.jsx(BC,{})}));export{$t as _};
