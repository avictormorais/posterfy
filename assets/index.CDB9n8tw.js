const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.DAUvDboj.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var rf=Object.defineProperty;var nf=(e,t,r)=>t in e?rf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Te=(e,t,r)=>nf(e,typeof t!="symbol"?t+"":t,r);import{r as F,a as of,e as jr,c as af,R as sf}from"./vendor.BGNHhJSV.js";import{m as hr,d as q,G as Et,l as Iu}from"./ui.C5ldsGQa.js";import{u as fr,i as lf,a as cf}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var Ph={exports:{}},qs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=F,hf=Symbol.for("react.element"),ff=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,pf=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function jh(e,t,r){var n,o={},a=null,c=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)df.call(t,n)&&!mf.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:hf,type:e,key:a,ref:c,props:o,_owner:pf.current}}qs.Fragment=ff;qs.jsx=jh;qs.jsxs=jh;Ph.exports=qs;var v=Ph.exports,Eh,Tu=of;Eh=Tu.createRoot,Tu.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pu="popstate";function gf(e={}){function t(n,o){let{pathname:a,search:c,hash:l}=n.location;return rc("",{pathname:a,search:c,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Na(o)}return bf(t,r,null,e)}function Gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ln(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vf(){return Math.random().toString(36).substring(2,10)}function ju(e,t){return{usr:e.state,key:e.key,idx:t}}function rc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ho(t):t,state:r,key:t&&t.key||n||vf()}}function Na({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ho(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function bf(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:a=!1}=n,c=o.history,l="POP",h=null,f=d();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function d(){return(c.state||{idx:null}).idx}function x(){l="POP";let k=d(),y=k==null?null:k-f;f=k,h&&h({action:l,location:C.location,delta:y})}function S(k,y){l="PUSH";let E=rc(C.location,k,y);f=d()+1;let P=ju(E,f),R=C.createHref(E);try{c.pushState(P,"",R)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(R)}a&&h&&h({action:l,location:C.location,delta:1})}function p(k,y){l="REPLACE";let E=rc(C.location,k,y);f=d();let P=ju(E,f),R=C.createHref(E);c.replaceState(P,"",R),a&&h&&h({action:l,location:C.location,delta:0})}function w(k){return xf(k)}let C={get action(){return l},get location(){return e(o,c)},listen(k){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Pu,x),h=k,()=>{o.removeEventListener(Pu,x),h=null}},createHref(k){return t(o,k)},createURL:w,encodeLocation(k){let y=w(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:S,replace:p,go(k){return c.go(k)}};return C}function xf(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Gt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Na(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Rh(e,t,r="/"){return wf(e,t,r,!1)}function wf(e,t,r,n){let o=typeof t=="string"?Ho(t):t,a=di(o.pathname||"/",r);if(a==null)return null;let c=Mh(e);yf(c);let l=null;for(let h=0;l==null&&h<c.length;++h){let f=jf(a);l=Tf(c[h],f,n)}return l}function Mh(e,t=[],r=[],n="",o=!1){let a=(c,l,h=o,f)=>{let d={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:l,route:c};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&h)return;Gt(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let x=hi([n,d.relativePath]),S=r.concat(d);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Mh(c.children,t,S,x,h)),!(c.path==null&&!c.index)&&t.push({path:x,score:Nf(x,c.index),routesMeta:S})};return e.forEach((c,l)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))a(c,l);else for(let f of Oh(c.path))a(c,l,!0,f)}),t}function Oh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let c=Oh(n.join("/")),l=[];return l.push(...c.map(h=>h===""?a:[a,h].join("/"))),o&&l.push(...c),l.map(h=>e.startsWith("/")&&h===""?"/":h)}function yf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:If(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Sf=/^:[\w-]+$/,_f=3,Cf=2,Af=1,kf=10,Lf=-2,Eu=e=>e==="*";function Nf(e,t){let r=e.split("/"),n=r.length;return r.some(Eu)&&(n+=Lf),t&&(n+=Cf),r.filter(o=>!Eu(o)).reduce((o,a)=>o+(Sf.test(a)?_f:a===""?Af:kf),n)}function If(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Tf(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",c=[];for(let l=0;l<n.length;++l){let h=n[l],f=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",x=Ms({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},d),S=h.route;if(!x&&f&&r&&!n[n.length-1].route.index&&(x=Ms({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},d)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:hi([a,x.pathname]),pathnameBase:Of(hi([a,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(a=hi([a,x.pathnameBase]))}return c}function Ms(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Pf(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((f,{paramName:d,isOptional:x},S)=>{if(d==="*"){let w=l[S]||"";c=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const p=l[S];return x&&!p?f[d]=void 0:f[d]=(p||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:e}}function Pf(e,t=!1,r=!0){Ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,l,h)=>(n.push({paramName:l,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function jf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ln(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ef(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ho(e):e;return{pathname:r?r.startsWith("/")?r:Rf(r,t):t,search:Ff(n),hash:Df(o)}}function Rf(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Nl(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mf(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Fh(e){let t=Mf(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Dh(e,t,r,n=!1){let o;typeof e=="string"?o=Ho(e):(o={...e},Gt(!o.pathname||!o.pathname.includes("?"),Nl("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),Nl("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),Nl("#","search","hash",o)));let a=e===""||o.pathname==="",c=a?"/":o.pathname,l;if(c==null)l=r;else{let x=t.length-1;if(!n&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),x-=1;o.pathname=S.join("/")}l=x>=0?t[x]:"/"}let h=Ef(o,l),f=c&&c!=="/"&&c.endsWith("/"),d=(a||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(f||d)&&(h.pathname+="/"),h}var hi=e=>e.join("/").replace(/\/\/+/g,"/"),Of=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ff=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Df=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var zh=["POST","PUT","PATCH","DELETE"];new Set(zh);var Bf=["GET",...zh];new Set(Bf);var $o=F.createContext(null);$o.displayName="DataRouter";var Hs=F.createContext(null);Hs.displayName="DataRouterState";F.createContext(!1);var Bh=F.createContext({isTransitioning:!1});Bh.displayName="ViewTransition";var Uf=F.createContext(new Map);Uf.displayName="Fetchers";var qf=F.createContext(null);qf.displayName="Await";var qn=F.createContext(null);qn.displayName="Navigation";var ja=F.createContext(null);ja.displayName="Location";var Hn=F.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var wc=F.createContext(null);wc.displayName="RouteError";function Hf(e,{relative:t}={}){Gt(Ea(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=F.useContext(qn),{hash:o,pathname:a,search:c}=Ra(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:hi([r,a])),n.createHref({pathname:l,search:c,hash:o})}function Ea(){return F.useContext(ja)!=null}function pi(){return Gt(Ea(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(ja).location}var Uh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qh(e){F.useContext(qn).static||F.useLayoutEffect(e)}function po(){let{isDataRoute:e}=F.useContext(Hn);return e?id():$f()}function $f(){Gt(Ea(),"useNavigate() may be used only in the context of a <Router> component.");let e=F.useContext($o),{basename:t,navigator:r}=F.useContext(qn),{matches:n}=F.useContext(Hn),{pathname:o}=pi(),a=JSON.stringify(Fh(n)),c=F.useRef(!1);return qh(()=>{c.current=!0}),F.useCallback((h,f={})=>{if(Ln(c.current,Uh),!c.current)return;if(typeof h=="number"){r.go(h);return}let d=Dh(h,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:hi([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}var Vf=F.createContext(null);function Wf(e){let t=F.useContext(Hn).outlet;return t&&F.createElement(Vf.Provider,{value:e},t)}function Ra(e,{relative:t}={}){let{matches:r}=F.useContext(Hn),{pathname:n}=pi(),o=JSON.stringify(Fh(r));return F.useMemo(()=>Dh(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function Gf(e,t){return Hh(e,t)}function Hh(e,t,r,n,o){var E;Gt(Ea(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=F.useContext(qn),{matches:c}=F.useContext(Hn),l=c[c.length-1],h=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",x=l&&l.route;{let P=x&&x.path||"";$h(f,!x||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let S=pi(),p;if(t){let P=typeof t=="string"?Ho(t):t;Gt(d==="/"||((E=P.pathname)==null?void 0:E.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${P.pathname}" was given in the \`location\` prop.`),p=P}else p=S;let w=p.pathname||"/",C=w;if(d!=="/"){let P=d.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=Rh(e,{pathname:C});Ln(x||k!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ln(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Xf(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:hi([d,a.encodeLocation?a.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?d:hi([d,a.encodeLocation?a.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),c,r,n,o);return t&&y?F.createElement(ja.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},y):y}function Yf(){let e=nd(),t=zf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:a},"ErrorBoundary")," or"," ",F.createElement("code",{style:a},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},t),r?F.createElement("pre",{style:o},r):null,c)}var Jf=F.createElement(Yf,null),Qf=class extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?F.createElement(Hn.Provider,{value:this.props.routeContext},F.createElement(wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kf({routeContext:e,match:t,children:r}){let n=F.useContext($o);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),F.createElement(Hn.Provider,{value:e},r)}function Xf(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,c=r==null?void 0:r.errors;if(c!=null){let f=a.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);Gt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,h=-1;if(r)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=f),d.route.id){let{loaderData:x,errors:S}=r,p=d.route.loader&&!x.hasOwnProperty(d.route.id)&&(!S||S[d.route.id]===void 0);if(d.route.lazy||p){l=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,d,x)=>{let S,p=!1,w=null,C=null;r&&(S=c&&d.route.id?c[d.route.id]:void 0,w=d.route.errorElement||Jf,l&&(h<0&&x===0?($h("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,C=null):h===x&&(p=!0,C=d.route.hydrateFallbackElement||null)));let k=t.concat(a.slice(0,x+1)),y=()=>{let E;return S?E=w:p?E=C:d.route.Component?E=F.createElement(d.route.Component,null):d.route.element?E=d.route.element:E=f,F.createElement(Kf,{match:d,routeContext:{outlet:f,matches:k,isDataRoute:r!=null},children:E})};return r&&(d.route.ErrorBoundary||d.route.errorElement||x===0)?F.createElement(Qf,{location:r.location,revalidation:r.revalidation,component:w,error:S,children:y(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:n}):y()},null)}function yc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zf(e){let t=F.useContext($o);return Gt(t,yc(e)),t}function ed(e){let t=F.useContext(Hs);return Gt(t,yc(e)),t}function td(e){let t=F.useContext(Hn);return Gt(t,yc(e)),t}function Sc(e){let t=td(e),r=t.matches[t.matches.length-1];return Gt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function rd(){return Sc("useRouteId")}function nd(){var n;let e=F.useContext(wc),t=ed("useRouteError"),r=Sc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function id(){let{router:e}=Zf("useNavigate"),t=Sc("useNavigate"),r=F.useRef(!1);return qh(()=>{r.current=!0}),F.useCallback(async(o,a={})=>{Ln(r.current,Uh),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var Ru={};function $h(e,t,r){!t&&!Ru[e]&&(Ru[e]=!0,Ln(!1,r))}F.memo(od);function od({routes:e,future:t,state:r,unstable_onError:n}){return Hh(e,void 0,r,n,t)}function ad(e){return Wf(e.context)}function zi(e){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sd({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){Gt(!Ea(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),l=F.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof r=="string"&&(r=Ho(r));let{pathname:h="/",search:f="",hash:d="",state:x=null,key:S="default"}=r,p=F.useMemo(()=>{let w=di(h,c);return w==null?null:{location:{pathname:w,search:f,hash:d,state:x,key:S},navigationType:n}},[c,h,f,d,x,S,n]);return Ln(p!=null,`<Router basename="${c}"> is not able to match the URL "${h}${f}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:F.createElement(qn.Provider,{value:l},F.createElement(ja.Provider,{children:t,value:p}))}function ld({children:e,location:t}){return Gf(nc(e),t)}function nc(e,t=[]){let r=[];return F.Children.forEach(e,(n,o)=>{if(!F.isValidElement(n))return;let a=[...t,o];if(n.type===F.Fragment){r.push.apply(r,nc(n.props.children,a));return}Gt(n.type===zi,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let c={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=nc(n.props.children,a)),r.push(c)}),r}var Ls="get",Ns="application/x-www-form-urlencoded";function $s(e){return e!=null&&typeof e.tagName=="string"}function cd(e){return $s(e)&&e.tagName.toLowerCase()==="button"}function ud(e){return $s(e)&&e.tagName.toLowerCase()==="form"}function hd(e){return $s(e)&&e.tagName.toLowerCase()==="input"}function fd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dd(e,t){return e.button===0&&(!t||t==="_self")&&!fd(e)}function ic(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function pd(e,t){let r=ic(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}var cs=null;function md(){if(cs===null)try{new FormData(document.createElement("form"),0),cs=!1}catch{cs=!0}return cs}var gd=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Il(e){return e!=null&&!gd.has(e)?(Ln(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ns}"`),null):e}function vd(e,t){let r,n,o,a,c;if(ud(e)){let l=e.getAttribute("action");n=l?di(l,t):null,r=e.getAttribute("method")||Ls,o=Il(e.getAttribute("enctype"))||Ns,a=new FormData(e)}else if(cd(e)||hd(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||l.getAttribute("action");if(n=h?di(h,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Ls,o=Il(e.getAttribute("formenctype"))||Il(l.getAttribute("enctype"))||Ns,a=new FormData(l,e),!md()){let{name:f,type:d,value:x}=e;if(d==="image"){let S=f?`${f}.`:"";a.append(`${S}x`,"0"),a.append(`${S}y`,"0")}else f&&a.append(f,x)}}else{if($s(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ls,n=null,o=Ns,c=e}return a&&o==="text/plain"&&(c=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _c(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bd(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&di(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function xd(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wd(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function yd(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let c=await xd(a,r);return c.links?c.links():[]}return[]}));return Ad(n.flat(1).filter(wd).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Mu(e,t,r,n,o,a){let c=(h,f)=>r[f]?h.route.id!==r[f].route.id:!0,l=(h,f)=>{var d;return r[f].pathname!==h.pathname||((d=r[f].route.path)==null?void 0:d.endsWith("*"))&&r[f].params["*"]!==h.params["*"]};return a==="assets"?t.filter((h,f)=>c(h,f)||l(h,f)):a==="data"?t.filter((h,f)=>{var x;let d=n.routes[h.route.id];if(!d||!d.hasLoader)return!1;if(c(h,f)||l(h,f))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Sd(e,t,{includeHydrateFallback:r}={}){return _d(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function _d(e){return[...new Set(e)]}function Cd(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Ad(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let a=JSON.stringify(Cd(o));return r.has(a)||(r.add(a),n.push({key:a,link:o})),n},[])}function Vh(){let e=F.useContext($o);return _c(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function kd(){let e=F.useContext(Hs);return _c(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Cc=F.createContext(void 0);Cc.displayName="FrameworkContext";function Wh(){let e=F.useContext(Cc);return _c(e,"You must render this element inside a <HydratedRouter> element"),e}function Ld(e,t){let r=F.useContext(Cc),[n,o]=F.useState(!1),[a,c]=F.useState(!1),{onFocus:l,onBlur:h,onMouseEnter:f,onMouseLeave:d,onTouchStart:x}=t,S=F.useRef(null);F.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let C=y=>{y.forEach(E=>{c(E.isIntersecting)})},k=new IntersectionObserver(C,{threshold:.5});return S.current&&k.observe(S.current),()=>{k.disconnect()}}},[e]),F.useEffect(()=>{if(n){let C=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(C)}}},[n]);let p=()=>{o(!0)},w=()=>{o(!1),c(!1)};return r?e!=="intent"?[a,S,{}]:[a,S,{onFocus:ba(l,p),onBlur:ba(h,w),onMouseEnter:ba(f,p),onMouseLeave:ba(d,w),onTouchStart:ba(x,p)}]:[!1,S,{}]}function ba(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Nd({page:e,...t}){let{router:r}=Vh(),n=F.useMemo(()=>Rh(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?F.createElement(Td,{page:e,matches:n,...t}):null}function Id(e){let{manifest:t,routeModules:r}=Wh(),[n,o]=F.useState([]);return F.useEffect(()=>{let a=!1;return yd(e,t,r).then(c=>{a||o(c)}),()=>{a=!0}},[e,t,r]),n}function Td({page:e,matches:t,...r}){let n=pi(),{manifest:o,routeModules:a}=Wh(),{basename:c}=Vh(),{loaderData:l,matches:h}=kd(),f=F.useMemo(()=>Mu(e,t,h,o,n,"data"),[e,t,h,o,n]),d=F.useMemo(()=>Mu(e,t,h,o,n,"assets"),[e,t,h,o,n]),x=F.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,C=!1;if(t.forEach(y=>{var P;let E=o.routes[y.route.id];!E||!E.hasLoader||(!f.some(R=>R.route.id===y.route.id)&&y.route.id in l&&((P=a[y.route.id])!=null&&P.shouldRevalidate)||E.hasClientLoader?C=!0:w.add(y.route.id))}),w.size===0)return[];let k=bd(e,c,"data");return C&&w.size>0&&k.searchParams.set("_routes",t.filter(y=>w.has(y.route.id)).map(y=>y.route.id).join(",")),[k.pathname+k.search]},[c,l,n,o,f,t,e,a]),S=F.useMemo(()=>Sd(d,o),[d,o]),p=Id(d);return F.createElement(F.Fragment,null,x.map(w=>F.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),S.map(w=>F.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),p.map(({key:w,link:C})=>F.createElement("link",{key:w,nonce:r.nonce,...C})))}function Pd(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gh&&(window.__reactRouterVersion="7.8.2")}catch{}function jd({basename:e,children:t,window:r}){let n=F.useRef();n.current==null&&(n.current=gf({window:r,v5Compat:!0}));let o=n.current,[a,c]=F.useState({action:o.action,location:o.location}),l=F.useCallback(h=>{F.startTransition(()=>c(h))},[c]);return F.useLayoutEffect(()=>o.listen(l),[o,l]),F.createElement(sd,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var Yh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jh=F.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:c,state:l,target:h,to:f,preventScrollReset:d,viewTransition:x,...S},p){let{basename:w}=F.useContext(qn),C=typeof f=="string"&&Yh.test(f),k,y=!1;if(typeof f=="string"&&C&&(k=f,Gh))try{let D=new URL(window.location.href),ee=f.startsWith("//")?new URL(D.protocol+f):new URL(f),N=di(ee.pathname,w);ee.origin===D.origin&&N!=null?f=N+ee.search+ee.hash:y=!0}catch{Ln(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=Hf(f,{relative:o}),[P,R,V]=Ld(n,S),Q=Od(f,{replace:c,state:l,target:h,preventScrollReset:d,relative:o,viewTransition:x});function X(D){t&&t(D),D.defaultPrevented||Q(D)}let J=F.createElement("a",{...S,...V,href:k||E,onClick:y||a?t:X,ref:Pd(p,R),target:h,"data-discover":!C&&r==="render"?"true":void 0});return P&&!C?F.createElement(F.Fragment,null,J,F.createElement(Nd,{page:E})):J});Jh.displayName="Link";var Ed=F.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:c,viewTransition:l,children:h,...f},d){let x=Ra(c,{relative:f.relative}),S=pi(),p=F.useContext(Hs),{navigator:w,basename:C}=F.useContext(qn),k=p!=null&&qd(x)&&l===!0,y=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,E=S.pathname,P=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(E=E.toLowerCase(),P=P?P.toLowerCase():null,y=y.toLowerCase()),P&&C&&(P=di(P,C)||P);const R=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let V=E===y||!o&&E.startsWith(y)&&E.charAt(R)==="/",Q=P!=null&&(P===y||!o&&P.startsWith(y)&&P.charAt(y.length)==="/"),X={isActive:V,isPending:Q,isTransitioning:k},J=V?t:void 0,D;typeof n=="function"?D=n(X):D=[n,V?"active":null,Q?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let ee=typeof a=="function"?a(X):a;return F.createElement(Jh,{...f,"aria-current":J,className:D,ref:d,style:ee,to:c,viewTransition:l},typeof h=="function"?h(X):h)});Ed.displayName="NavLink";var Rd=F.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:c=Ls,action:l,onSubmit:h,relative:f,preventScrollReset:d,viewTransition:x,...S},p)=>{let w=Bd(),C=Ud(l,{relative:f}),k=c.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&Yh.test(l),E=P=>{if(h&&h(P),P.defaultPrevented)return;P.preventDefault();let R=P.nativeEvent.submitter,V=(R==null?void 0:R.getAttribute("formmethod"))||c;w(R||P.currentTarget,{fetcherKey:t,method:V,navigate:r,replace:o,state:a,relative:f,preventScrollReset:d,viewTransition:x})};return F.createElement("form",{ref:p,method:k,action:C,onSubmit:n?h:E,...S,"data-discover":!y&&e==="render"?"true":void 0})});Rd.displayName="Form";function Md(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qh(e){let t=F.useContext($o);return Gt(t,Md(e)),t}function Od(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:c}={}){let l=po(),h=pi(),f=Ra(e,{relative:a});return F.useCallback(d=>{if(dd(d,t)){d.preventDefault();let x=r!==void 0?r:Na(h)===Na(f);l(e,{replace:x,state:n,preventScrollReset:o,relative:a,viewTransition:c})}},[h,l,f,r,n,t,e,o,a,c])}function Fd(e){Ln(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=F.useRef(ic(e)),r=F.useRef(!1),n=pi(),o=F.useMemo(()=>pd(n.search,r.current?null:t.current),[n.search]),a=po(),c=F.useCallback((l,h)=>{const f=ic(typeof l=="function"?l(new URLSearchParams(o)):l);r.current=!0,a("?"+f,h)},[a,o]);return[o,c]}var Dd=0,zd=()=>`__${String(++Dd)}__`;function Bd(){let{router:e}=Qh("useSubmit"),{basename:t}=F.useContext(qn),r=rd();return F.useCallback(async(n,o={})=>{let{action:a,method:c,encType:l,formData:h,body:f}=vd(n,t);if(o.navigate===!1){let d=o.fetcherKey||zd();await e.fetch(d,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Ud(e,{relative:t}={}){let{basename:r}=F.useContext(qn),n=F.useContext(Hn);Gt(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...Ra(e||".",{relative:t})},c=pi();if(e==null){a.search=c.search;let l=new URLSearchParams(a.search),h=l.getAll("index");if(h.some(d=>d==="")){l.delete("index"),h.filter(x=>x).forEach(x=>l.append("index",x));let d=l.toString();a.search=d?`?${d}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:hi([r,a.pathname])),Na(a)}function qd(e,{relative:t}={}){let r=F.useContext(Bh);Gt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Qh("useViewTransitionState"),o=Ra(e,{relative:t});if(!r.isTransitioning)return!1;let a=di(r.currentLocation.pathname,n)||r.currentLocation.pathname,c=di(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ms(o.pathname,c)!=null||Ms(o.pathname,a)!=null}function fi({width:e,height:t,fill:r}){return v.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Hd=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},$d=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Vd=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(n/o*100);e.forEach(c=>{a>=c&&!t.includes(c)&&(t.push(c),$d(c))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},Kh=F.createContext(),Vs=()=>{const e=F.useContext(Kh);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Wd=({children:e})=>{const[t,r]=F.useState(()=>localStorage.getItem("theme")||"light");F.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Hd(t)},[t]);const a={theme:t,toggleTheme:()=>{r(c=>c==="light"?"dark":"light")},setSpecificTheme:c=>{r(c)},isLight:t==="light",isDark:t==="dark"};return v.jsx(Kh.Provider,{value:a,children:e})},Gd=hr`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,Yd=hr`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,Jd=hr`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,Qd=q.div`
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
    animation: ${e=>e.initialFade?Jd:"none"} 0.5s ease-in;
`,Kd=q.div`
    animation: ${e=>e.isExiting?Yd:Gd} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Ac({isVisible:e,initialFade:t=!1}){const{theme:r}=Vs(),[n,o]=F.useState(!1),[a,c]=F.useState(!1);return F.useEffect(()=>{!e&&!n&&(o(!0),setTimeout(()=>{c(!0)},800))},[e,n]),v.jsx(Qd,{isVisible:e,fadeOutContainer:a,initialFade:t,children:v.jsx(Kd,{isExiting:n,children:v.jsx(fi,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const Xd=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},Zd=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},Ou=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Fu=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},e5=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},Du=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},t5=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},r5=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},n5=(e,t="",r="",n="album_collection")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t,album_id:r,source:n})},i5=()=>{F.useEffect(()=>{Ou(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&Ou(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function Xh(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function Zh(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function o5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const a5=hr`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,s5=hr`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,l5=hr`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,c5=hr`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,u5=q.div`
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
    animation: ${e=>e.isClosing?c5:l5} 0.3s ease-in-out forwards;
`,h5=q.div`
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
    animation: ${e=>e.isClosing?s5:a5} 0.3s ease-in-out forwards;

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
`,f5=q.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,d5=q.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,p5=q(Zh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,m5=q.div`
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
`,e2=q.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,g5=q.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,v5=q.button`
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
`,us=q.button`
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
`,b5=q.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,x5=q(e2)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,w5=q.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,y5=q.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function S5({title:e,paragraph:t,imageURL:r,postImageText:n,canClose:o,confirmText:a,onConfirm:c,cancelText:l,onCancel:h,isClosing:f,customButton:d}){return document.body.style.overflow="hidden",v.jsx(u5,{isClosing:f,children:v.jsxs(h5,{isClosing:f,children:[v.jsxs(f5,{children:[v.jsx(w5,{children:v.jsx(fi,{width:25,height:25,fill:"var(--textColor)"})}),e&&v.jsx(d5,{children:e}),o&&v.jsx(m5,{onClick:h,children:v.jsx(p5,{})})]}),v.jsx(y5,{}),t&&v.jsx(e2,{children:t}),r&&v.jsx(g5,{src:r}),n&&v.jsx(x5,{children:n}),v.jsxs(b5,{style:{justifyContent:"center"},children:[d&&v.jsx(us,{onClick:()=>window.open(d.url,"_blank"),children:d.text}),l&&a?v.jsxs(v.Fragment,{children:[v.jsx(v5,{onClick:h,children:l}),v.jsx(us,{onClick:c,children:a})]}):v.jsx(v.Fragment,{children:l?v.jsx(us,{onClick:h,children:l}):a&&v.jsx(us,{onClick:c,children:a})})]})]})})}const _5=F.createContext(),C5=({children:e})=>{const{t,i18n:r}=fr(),[n,o]=F.useState(null),[a,c]=F.useState(!1),[l,h]=F.useState(()=>{const Q=localStorage.getItem("shownAlerts");return Q?JSON.parse(Q):{}}),f=()=>{const Q={en:{title:"Join the community!",paragraph:"Join our Discord server to contribute to the platform and help other users. Share ideas, report bugs, and connect with fellow music lovers!",confirmText:"Join the server",postImageText:"Help us grow the Posterfy community."},pt:{title:"Junte-se à comunidade!",paragraph:"Entre no nosso servidor do Discord para contribuir com a plataforma e ajudar outros usuários. Compartilhe ideias, reporte bugs e conecte-se com outros amantes da música!",confirmText:"Entrar no servidor",postImageText:"Ajude-nos a crescer a comunidade do Posterfy."},es:{title:"¡Únete a la comunidad!",paragraph:"Únete a nuestro servidor de Discord para contribuir a la plataforma y ayudar a otros usuarios. Comparte ideas, reporta errores y conéctate con otros amantes de la música!",confirmText:"Entrar al servidor",postImageText:"Ayúdanos a crecer la comunidad de Posterfy."},zh:{title:"加入社区！",paragraph:"加入我们的 Discord 服务器，为平台做出贡献并帮助其他用户。分享想法、报告错误，并与其他音乐爱好者联系！",confirmText:"加入服务器",postImageText:"帮助我们发展 Posterfy 社区。"}},X=r.language||"en",J=Q[X]||Q.en;return{id:"discord-community",persistentId:"discord-community-intro-2",title:J.title,paragraph:J.paragraph,postImageText:J.postImageText,confirmText:J.confirmText,canClose:!0,type:"alert",limitDate:"2026-01-01T23:59:59.999Z",onConfirm:()=>window.open("https://posterfy.com","_blank")}},d=Q=>l[Q]===!0,x=Q=>{if(!d(Q)){const X={...l,[Q]:!0};h(X),localStorage.setItem("shownAlerts",JSON.stringify(X))}};F.useEffect(()=>{const Q=f();!d(Q.persistentId)&&!n&&C(Q)&&o(Q)},[r.language,l]);const S=Q=>{C(Q)&&(o(Q),c(!1))},p=Q=>{C(Q)&&S({...Q,type:"alert"})},w=Q=>{S({...Q,type:"confirmation"})},C=Q=>{if(!Q.limitDate)return!0;const X=new Date(Q.limitDate);return new Date<=X},k=Q=>{if(!Q.persistentId){C(Q)&&p(Q);return}!d(Q.persistentId)&&C(Q)&&S({...Q,type:"alert"})},y=()=>{(n==null?void 0:n.type)==="alert"&&R(),!(!n||a)&&(c(!0),setTimeout(()=>{o(null),c(!1),document.body.style.overflow="unset"},300))},E=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&R(),y()},P=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&R(),y()},R=()=>{n!=null&&n.persistentId&&x(n.persistentId)},V={modal:n,showModal:S,showAlert:p,showConfirmation:w,showConditionalAlert:k,closeModal:y,isModalVisible:!!n,hasAlertBeenShown:d,markSpecificAlertAsShown:x};return v.jsxs(_5.Provider,{value:V,children:[e,n&&v.jsx(S5,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?E:null,cancelText:n.cancelText||null,onCancel:n.cancelText?P:n.canClose?y:null,isClosing:a,customButton:n.customButton})]})},A5={BASE_URL:"https://api.posterfy.space"},k5=A5.BASE_URL;class L5{constructor(t=k5){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,o={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`);try{const a=await fetch(n,o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.error("API request failed:",a),a}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const Bn=new L5,t2=F.createContext(),Ma=()=>{const e=F.useContext(t2);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},N5=({children:e})=>{const[t,r]=F.useState(null),[n,o]=F.useState(!0),[a,c]=F.useState(!1);F.useEffect(()=>{(async()=>{const C=new URLSearchParams(window.location.search).get("token");C&&(localStorage.setItem("authToken",C),Bn.setAuthToken(C),window.history.replaceState({},document.title,window.location.pathname)),await l()})()},[]);const l=async()=>{if(!localStorage.getItem("authToken")){r(null),c(!1),o(!1);return}try{const w=await Bn.getCurrentUser();r(w.user),c(!0),o(!1)}catch{localStorage.removeItem("authToken"),Bn.setAuthToken(null),r(null),c(!1),o(!1)}},S={user:t,loading:n,isAuthenticated:a,loginWithGoogle:()=>{window.location.href=Bn.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=Bn.getSpotifyAuthUrl()},logout:async()=>{try{await Bn.logout(),localStorage.removeItem("authToken"),Bn.setAuthToken(null),r(null),c(!1)}catch(p){console.error("Logout failed:",p),localStorage.removeItem("authToken"),Bn.setAuthToken(null),r(null),c(!1)}},checkAuthStatus:l,updateUser:p=>{r(p)}};return v.jsx(t2.Provider,{value:S,children:e})};function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Os.apply(this,arguments)}function I5(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var T5=["cdnSuffix","cdnUrl","countryCode","style","svg"],P5="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",j5="svg",E5=127397,r2=function(t){var r=t.cdnSuffix,n=r===void 0?j5:r,o=t.cdnUrl,a=o===void 0?P5:o,c=t.countryCode,l=t.style,h=t.svg,f=h===void 0?!1:h,d=I5(t,T5);if(typeof c!="string")return null;if(f){var x=""+a+c.toLowerCase()+"."+n;return F.createElement("img",Object.assign({},d,{src:x,style:Os({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},l)}))}var S=c.toUpperCase().replace(/./g,function(p){return String.fromCodePoint(p.charCodeAt(0)+E5)});return F.createElement("span",Object.assign({role:"img"},d,{style:Os({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},l)}),S)};const R5=q.div`
  position: relative;
`,M5=q.button`
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
`,O5=q.div`
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
`,F5=q.div`
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
`,D5=q.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,z5=q.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,hs=q.button`
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
`,fs=q.span`
  margin-left: 8px;
`,ds=q(r2)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function B5(){const[e,t]=F.useState(!1),[r,n]=F.useState(!1),{i18n:o}=fr();F.useEffect(()=>{const f=localStorage.getItem("language");f&&o.changeLanguage(f);const d=x=>{x.target.closest(".language-selector")||a()};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[o]);const a=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},c=f=>{f.stopPropagation(),e?a():t(!0)},l=f=>{o.changeLanguage(f),localStorage.setItem("language",f),a(),r5(f)},h=()=>{switch(o.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return v.jsxs(R5,{className:"language-selector",children:[v.jsx(M5,{onClick:c,"aria-label":"Select language",children:v.jsx(O5,{children:v.jsx(r2,{countryCode:h(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&v.jsxs(F5,{className:r?"closing":"",children:[v.jsx(D5,{}),v.jsxs(z5,{children:[v.jsxs(hs,{onClick:()=>l("pt"),children:[v.jsx(ds,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(fs,{children:"Português"})]}),v.jsxs(hs,{onClick:()=>l("en"),children:[v.jsx(ds,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(fs,{children:"English"})]}),v.jsxs(hs,{onClick:()=>l("es"),children:[v.jsx(ds,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(fs,{children:"Español"})]}),v.jsxs(hs,{onClick:()=>l("zh"),children:[v.jsx(ds,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),v.jsx(fs,{children:"中文"})]})]})]})]})}function U5(e){return Et({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function n2(e){return Et({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function q5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function H5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function $5(e){return Et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function V5(e){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function i2(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function W5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function G5(e){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Y5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function J5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Q5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const K5=q.div`
  position: relative;
`,X5=q.button`
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
`,Z5=q.div`
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
`,ep=q.div`
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
`,tp=q.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,rp=q.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,np=q.button`
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
`,ip=q.div`
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
`,op=q.span`
  margin-left: 4px;
  font-weight: 500;
`;function ap(){const[e,t]=F.useState(!1),[r,n]=F.useState(!1),{theme:o,setSpecificTheme:a}=Vs(),c=[{id:"light",name:"Light",color:"#f0efeb",icon:v.jsx(Q5,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:v.jsx(W5,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:v.jsx($5,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:v.jsx(V5,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:v.jsx(G5,{}),isLight:!1}],l=c.find(x=>x.id===o)||c[0];F.useEffect(()=>{const x=S=>{S.target.closest(".theme-selector")||h()};return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[]);const h=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=x=>{x.stopPropagation(),e?h():t(!0)},d=x=>{a(x),h()};return v.jsxs(K5,{className:"theme-selector",children:[v.jsx(X5,{onClick:f,"aria-label":"Select theme",children:v.jsx(Z5,{themeColor:l.color,isLight:l.isLight,children:l.icon})}),e&&v.jsxs(ep,{className:r?"closing":"",children:[v.jsx(tp,{}),v.jsx(rp,{children:c.map(x=>v.jsxs(np,{onClick:()=>d(x.id),children:[v.jsx(ip,{className:"theme-preview",color:x.color,isLight:x.isLight,children:x.icon}),v.jsx(op,{children:x.name})]},x.id))})]})]})}function sp(e){return Et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function lp(e){return Et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const cp=q.header`
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
`,up=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,hp=q.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,fp=q.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,dp=q.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,pp=q.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,mp=q.div`
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
`,gp=q.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,vp=q.button`
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
`,bp=q.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,xp=q(lp)`
  font-size: 1.5em;
  color: var(--textColor);
`,wp=q.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Fs({hideLogo:e=!1,hideAccount:t=!1}){const[r,n]=F.useState(!1),[o,a]=F.useState(!0),[c,l]=F.useState(0),[h,f]=F.useState(!1),d=".space",{user:x,isAuthenticated:S}=Ma(),p=po();F.useEffect(()=>{const C=()=>{const k=window.scrollY;k<=10?(a(!0),n(!1)):(k<c?a(!0):a(!1),n(!0)),l(k)};return window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)},[c]);const w=()=>{p(S?"/dashboard":"/login")};return v.jsxs(cp,{scrolled:r,visible:o,children:[v.jsxs(up,{children:[!e&&v.jsxs(hp,{onClick:()=>p("/"),children:[v.jsx(mp,{children:v.jsx(fi,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),v.jsxs(fp,{children:["Posterfy",v.jsx(dp,{children:d})]})]}),v.jsxs(gp,{children:[v.jsx(B5,{}),v.jsx(ap,{}),!t&&v.jsx(vp,{onClick:w,children:v.jsx(bp,{children:x!=null&&x.avatar?v.jsx(wp,{src:x.avatar}):v.jsx(xp,{})})})]})]}),v.jsx(pp,{scrolled:r})]})}const o2=hr`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;hr`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const yp=hr`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,Sp=q.footer`
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
`,_p=q.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,Cp=q.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${o2} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,Ap=q.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,kp=q.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`,Lp=q.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`,Np=q.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`,Ip=q.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,Tp=q.a`
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
`;q.a`
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
`;const Pp=q.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${o2} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,jp=q.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,Ep=q.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,zu=q.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${yp} 1.5s ease-in-out infinite;
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
`;q.div`
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
`;q.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;q.h3`
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--textColor);
  opacity: 0.95;
`;q.div`
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
`;q.button`
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
`;function Rp(){const{t:e}=fr(),{theme:t,setSpecificTheme:r}=Vs(),n=new Date().getFullYear();return v.jsxs(Sp,{children:[v.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:v.jsxs("div",{children:[v.jsx("h4",{children:"Album Poster Generator Links"}),v.jsxs("nav",{children:[v.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),v.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),v.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),v.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),v.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),v.jsxs(_p,{children:[v.jsxs(Cp,{children:[v.jsxs(Ap,{children:[v.jsxs(kp,{children:[v.jsx(fi,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"}),v.jsx(Lp,{children:"Posterfy"})]}),v.jsx(Np,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),v.jsx(Ip,{children:v.jsxs(Tp,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[v.jsx(U5,{})," ",e("ViewGitHub","View on GitHub")]})})]}),v.jsxs(Pp,{children:[v.jsx(jp,{children:v.jsxs(zu,{children:[v.jsx(i2,{}),e("MadeBy","Made with love by")," ",v.jsx("a",{href:"https://github.com/avictormorais",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),v.jsx(Ep,{children:v.jsxs(zu,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function Tl({showNavbar:e=!0,showFooter:t=!0}){return v.jsxs(v.Fragment,{children:[e&&v.jsx(Fs,{}),v.jsx(ad,{}),t&&v.jsx(Rp,{})]})}function Mp(e){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Op(e){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const Fp="/assets/Posterfy%20-%20Starboy.COKYiogJ.png",Dp="/assets/Posterfy%20-%20Teenage%20Dream.Cngne26d.png",zp="/assets/Posterfy%20-%20SOS.BR7qvD22.png",Bp="/assets/Posterfy%20-%20Don't%20Be%20Dumb.vFMj1or8.png",Up="/assets/Posterfy%20-%20SOUR.CQ1_yKI9.png",qp=[{id:1,coverImage:Fp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1e0450ba3fd83cf9048446477",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/b2/c0/1d/b2c01d38-2798-1bce-e6f3-8d0959ca51dd/23UMGIM22528.rgb.jpg",useUncompressed:!1,albumName:"Starboy",artistsName:"The Weeknd",titleSize:200,artistsSize:"110",tracksSize:"48",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2023-03-14",titleRuntime:"Runtime",runtime:"1h 20min 15s",backgroundColor:"#060201",textColor:"#e1170b",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Starboy
2. Party Monster
3. False Alarm
4. Reminder
5. Rockin’
6. Secrets
7. True Colors
8. Stargirl Interlude
9. Sidewalks
10. Six Feet Under
11. Love To Lay
12. A Lonely Night
13. Attention
14. Ordinary Life
15. Nothing Without You
16. All I Know
17. Die For You
18. I Feel It Coming`,color1:"#063eb2",color2:"#18c1d3",color3:"#671311",albumID:"24PQTJnB3I08bK8fTWIx7P",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:Dp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c143219fb4e2c45a0b7df6ef87",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg",useUncompressed:!1,albumName:"Teenage Dream",artistsName:"Katy Perry",titleSize:200,artistsSize:"110",tracksSize:"49",marginTop:"100",marginSide:160,marginCover:"-80",marginBackground:0,titleRelease:"Release date",releaseDate:"2010-08-24",titleRuntime:"Runtime",runtime:"46min 49s",backgroundColor:"#debbc8",textColor:"#486394",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Teenage Dream
2. Last Friday Night (T.G.I.F.)
3. California Gurls
4. Firework
5. Peacock
6. Circle The Drain
7. The One That Got Away
8. E.T.
9. Who Am I Living For?
10. Pearl
11. Hummingbird Heartbeat
12. Not Like The Movies`,color1:"#b26f57",color2:"#8b5249",color3:"#897f93",albumID:"32Uy0GLddTw4559CWja1f1",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:zp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Bp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
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
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:Up,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1a91c10fe9472d9bd89802e5a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music115/v4/02/ed/8c/02ed8cab-c089-2fdd-7ce6-ab334a9a4e19/21UMGIM26093.rgb.jpg",useUncompressed:!1,albumName:"SOUR",artistsName:"Olivia Rodrigo",titleSize:200,artistsSize:"110",tracksSize:"55",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2021-05-21",titleRuntime:"Runtime",runtime:"34min 46s",backgroundColor:"#8981bf",textColor:"#262929",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. brutal
2. traitor
3. drivers license
4. 1 step forward, 3 steps back
5. deja vu
6. good 4 u
7. enough for you
8. happier
9. jealousy, jealousy
10. favorite crime
11. hope ur ok`,color1:"#e4c2b1",color2:"#745b46",color3:"#513738",albumID:"6s84u2TUpR3wdUv4NgKA2j",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],Bi=(e={})=>{const[t,r]=F.useState(!1),n=F.useRef(null);return F.useEffect(()=>{const o=n.current,a=new IntersectionObserver(([c])=>{c.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return o&&a.observe(o),()=>{o&&a.unobserve(o)}},[e]),[n,t]},Hp=q.div`
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
`,$p=q.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  
  opacity: ${e=>e.$hasAppeared?1:0};
  transform: ${e=>{const{isHovered:t,index:r,hoveredIndex:n,isMobile:o,$hasAppeared:a}=e;if(!a)return"scale(0.8) translateY(30px)";if(o)return"scale(1)";let c="scale(0.95)";if(t)c="scale(1.08) translateY(-8px)";else if(n!==null){let l=0;switch(n){case 0:r>0&&(l=70);break;case 1:r>=2&&(l=70);break;case 2:l=0;break;case 3:r<=2&&(l=-70);break;case 4:r<4&&(l=-70);break}l!==0&&(c=`scale(0.95) translateX(${l}px)`)}return c}};
  
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
`,Vp=q.div`
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
`,Wp=q.div`
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
`,Gp=q.div`
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
`,Yp=q.button`
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
`,Jp=q.button`
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
`,Qp=({onRecreate:e})=>{const{t}=fr(),[r,n]=F.useState(null),[o,a]=F.useState(!1),[c,l]=F.useState(!1),[h,f]=F.useState(null),[d,x]=F.useState(null),[S,p]=Bi(),[w,C]=F.useState([]),k=[2,3,1,4,0];F.useEffect(()=>{p&&w.length===0&&k.forEach((R,V)=>{setTimeout(()=>{C(Q=>[...Q,R])},V*177)})},[p]),F.useEffect(()=>{const R=()=>{a(window.innerWidth<=770),l(window.innerWidth>480&&window.innerWidth<=1200)};return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]);const y=(R,V)=>{f(R),x(V),document.body.style.overflow="hidden"},E=()=>{f(null),document.body.style.overflow="auto"},P=()=>{f(null),e(d),document.body.style.overflow="auto"};return v.jsxs(v.Fragment,{children:[v.jsx(Hp,{ref:S,children:qp.map((R,V)=>v.jsx($p,{index:V,isHovered:r===V,hoveredIndex:r,otherIsHovered:r!==null,isMobile:o,isTablet:c,$hasAppeared:w.includes(V),onMouseEnter:()=>n(V),onMouseLeave:()=>n(null),onClick:()=>y(R.coverImage||"/placeholder.svg",R.JSONConfig),children:v.jsx("img",{src:R.coverImage||"/placeholder.svg",alt:`${R.artist} - ${R.title}`})},R.id))}),h&&v.jsx(Vp,{onClick:E,children:v.jsxs(Wp,{onClick:R=>R.stopPropagation(),children:[v.jsxs(Gp,{children:[v.jsx(Yp,{onClick:E,children:"×"}),v.jsx(Jp,{onClick:P,children:t("RecreatePoster")})]}),v.jsx("img",{src:h,alt:"Album cover"})]})})]})},Kp=q.div`
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
`,Xp=({onRecreate:e})=>v.jsx(Kp,{children:v.jsx(Qp,{onRecreate:e})}),Zp=q.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
`,em=q.div`
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
`,tm=q.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`,rm=q.h1`
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
`,nm=q.p`
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
`,im=q.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    opacity: ${e=>e.visible?1:0};
    transform: translateX(${e=>e.visible?"0":"50px"});
    transition: opacity 1s ease, transform 1s ease;
    transition-delay: 600ms;

    @media (max-width: 900px) {
        transform: translateY(${e=>e.visible?"0":"50px"});
        width: 100%;
    }
`,om=q.div`
    position: relative;
    z-index: 2;
    animation: float 6s ease-in-out infinite;
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

    /* Glow effect */
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 120%;
        height: 120%;
        background: var(--textColor);
        opacity: 0.08;
        filter: blur(80px);
        border-radius: 50%;
        z-index: -1;
    }
`,am=q(Mp)`
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
`;function sm({showAnimation:e=!1,onRecreate:t}){const{t:r}=fr(),{theme:n}=Vs(),[o,a]=F.useState(!1);F.useEffect(()=>{if(e){const l=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(l)}},[e]);const c=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return v.jsxs(v.Fragment,{children:[v.jsxs(Zp,{children:[v.jsxs(em,{children:[v.jsxs(tm,{children:[v.jsx(rm,{visible:o,children:"Posterfy"}),v.jsx(nm,{visible:o,delay:400,children:r("heroDescription")}),v.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[v.jsx("h2",{children:"Free Album Poster Generator"}),v.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),v.jsx("h3",{children:"Features:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Free album poster maker"}),v.jsx("li",{children:"Spotify integration"}),v.jsx("li",{children:"Custom poster design"}),v.jsx("li",{children:"High-quality downloads"}),v.jsx("li",{children:"Multiple format options"}),v.jsx("li",{children:"Professional templates"})]})]})]}),v.jsx(im,{visible:o,children:v.jsx(om,{children:v.jsx(fi,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),v.jsx(am,{visible:o,onClick:c})]}),v.jsx(Xp,{onRecreate:t})]})}const lm=q.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,cm=q.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Oa({text:e,type:t}){return v.jsx(v.Fragment,{children:t==1?v.jsx(lm,{children:e}):v.jsx(cm,{children:e})})}const um=q.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,hm=q.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,fm=q.p`
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
`,Bu=q.div`
    display: flex;
`;function kc({title:e,paragraph:t}){return v.jsxs(um,{children:[v.jsx(Bu,{children:v.jsx(hm,{children:e})}),v.jsx(Bu,{children:v.jsx(fm,{children:t})})]})}function dm(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function pm(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const mm=q.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,gm=q(dm)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,vm=q.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,bm=q.hr`
    opacity: 0.15;
    margin: 5px;
`,xm=q.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,wm=q.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Po({q:e,a:t}){const[r,n]=F.useState(!1);function o(){n(!r)}return v.jsxs(v.Fragment,{children:[v.jsxs(mm,{onClick:o,children:[v.jsx(gm,{showA:r}),v.jsx(vm,{children:e})]}),v.jsx(bm,{}),v.jsx(xm,{showA:r,children:v.jsx(wm,{showA:r,children:t})})]})}const ym=q.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Sm=q.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function _m(){const{t:e}=fr();return v.jsxs(ym,{id:"faq",children:[v.jsx(Oa,{text:"FAQ",type:1}),v.jsxs(Sm,{children:[v.jsx(Po,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),v.jsx(Po,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),v.jsx(Po,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),v.jsx(Po,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),v.jsx(Po,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),v.jsx(Po,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const Cm=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),v.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),v.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),v.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),v.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),v.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),v.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),v.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),v.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),v.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),v.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),v.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),v.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),v.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),v.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),v.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),v.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),v.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:o}),v.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:o}),v.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:o}),v.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:o}),v.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:o}),v.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:a})]}),Am=q.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,km=q.div`
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
`,Lm=q.p`
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
`,Nm=q.button`
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
`;function Im(){const{t:e}=fr();return v.jsxs(Am,{id:"share",children:[v.jsx(Oa,{text:e("Share"),type:1}),v.jsx(kc,{title:e("ShareTitle")}),v.jsx(km,{children:v.jsx(Cm,{width:"100%"})}),v.jsx(Lm,{children:e("ShareDescription")}),v.jsx(Nm,{children:e("ComingSoon")})]})}const Tm=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:o="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[v.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),v.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),v.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),v.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),v.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),v.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),v.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),v.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),v.jsx("g",{fill:r,opacity:"0.3",children:v.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),v.jsxs("g",{fill:t,opacity:"0.2",children:[v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),v.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),v.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),v.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),v.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),v.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),v.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),v.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),v.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),v.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),v.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),v.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),v.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),v.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),v.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),v.jsx("path",{fill:o,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),v.jsx("path",{fill:o,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),v.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),v.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),v.jsx("g",{clipPath:"url(#clip0_1_72)",children:v.jsx("path",{fill:o,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_1_72",children:v.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Pm=q.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,jm=q.div`
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
`,Em=q.p`
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
`,Rm=q.button`
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
`;function Mm(){const{t:e}=fr();return v.jsxs(Pm,{id:"share",children:[v.jsx(Oa,{text:e("Community"),type:1}),v.jsx(kc,{title:e("CommunityTitle")}),v.jsx(jm,{children:v.jsx(Tm,{width:"100%"})}),v.jsx(Em,{children:e("CommunityDescription")}),v.jsx(Rm,{children:e("ComingSoon")})]})}const Uu=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],Om=q.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Fm=q.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Dm=q.div`
    display: flex;
    align-items: center;
    position: relative;
`,zm=q.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Bm=q(i2)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Um=q.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,qm=q.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,Hm=q.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,$m=q.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Vm=q.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,Wm=q.a`
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
`;function Gm(){var a,c,l;const{i18n:e}=fr(),{t}=fr(),r=((a=e.language)==null?void 0:a.split("-")[0])||"en",n=Uu.filter(h=>h.key!=="contribute_area"),o=Uu.find(h=>h.key==="contribute_area");return v.jsxs(Om,{id:"thanks",children:[v.jsx(Oa,{text:t("Thanks"),type:1}),n.map((h,f)=>v.jsxs(Fm,{children:[v.jsxs(Dm,{children:[v.jsx(zm,{className:"circle"}),v.jsx(Bm,{className:"heart"}),v.jsx(Um,{tabIndex:0,role:"button",onClick:()=>window.open(h.url,"_blank","noopener,noreferrer"),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&window.open(h.url,"_blank","noopener,noreferrer")},onMouseEnter:d=>{const x=d.target.parentNode;x.querySelector(".circle").style.opacity=0,x.querySelector(".heart").style.opacity=1},onMouseLeave:d=>{const x=d.target.parentNode;x.querySelector(".circle").style.opacity=.8,x.querySelector(".heart").style.opacity=0},children:h.title[r]||h.title.en})]}),v.jsx(qm,{children:h.text[r]||h.text.en})]},h.key)),o&&v.jsxs(Hm,{children:[v.jsx($m,{children:o.title[r]||o.title.en}),v.jsx(Vm,{children:o.text[r]||o.text.en}),v.jsx(Wm,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:((c=o.button)==null?void 0:c[r])||((l=o.button)==null?void 0:l.en)||"Github"})]})]})}const Ym=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Jm=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Qm=q.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function si({title:e,value:t,onChange:r}){return v.jsxs(Ym,{children:[v.jsx(Jm,{children:e}),v.jsx(Qm,{placeholder:e,value:t,onChange:r})]})}const Km=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Xm=q.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,Zm=q.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function qu({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return v.jsxs(Km,{children:[v.jsx(Xm,{placeholder:e,value:e,onChange:r}),v.jsx(Zm,{placeholder:e,value:t,onChange:n})]})}const eg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,tg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,rg=q.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,ng=q.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,ig=q.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function xa({title:e,value:t,onClick:r}){const n=F.useRef(null);return v.jsxs(eg,{"data-color-input":!0,children:[v.jsx(tg,{children:e}),v.jsxs(rg,{ref:n,onClick:()=>{const o=n.current.getBoundingClientRect();r({top:o.bottom+1+window.scrollY,left:o.left+window.scrollX})},children:[v.jsx(ng,{style:{backgroundColor:t}}),v.jsx(ig,{children:t})]})]})}function Ws(){return(Ws=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a2(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function oc(e){var t=F.useRef(e),r=F.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var Ia=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},Aa=function(e){return"touches"in e},ac=function(e){return e&&e.ownerDocument.defaultView||self},Hu=function(e,t,r){var n=e.getBoundingClientRect(),o=Aa(t)?function(a,c){for(var l=0;l<a.length;l++)if(a[l].identifier===c)return a[l];return a[0]}(t.touches,r):t;return{left:Ia((o.pageX-(n.left+ac(e).pageXOffset))/n.width),top:Ia((o.pageY-(n.top+ac(e).pageYOffset))/n.height)}},$u=function(e){!Aa(e)&&e.preventDefault()},s2=jr.memo(function(e){var t=e.onMove,r=e.onKey,n=a2(e,["onMove","onKey"]),o=F.useRef(null),a=oc(t),c=oc(r),l=F.useRef(null),h=F.useRef(!1),f=F.useMemo(function(){var p=function(k){$u(k),(Aa(k)?k.touches.length>0:k.buttons>0)&&o.current?a(Hu(o.current,k,l.current)):C(!1)},w=function(){return C(!1)};function C(k){var y=h.current,E=ac(o.current),P=k?E.addEventListener:E.removeEventListener;P(y?"touchmove":"mousemove",p),P(y?"touchend":"mouseup",w)}return[function(k){var y=k.nativeEvent,E=o.current;if(E&&($u(y),!function(R,V){return V&&!Aa(R)}(y,h.current)&&E)){if(Aa(y)){h.current=!0;var P=y.changedTouches||[];P.length&&(l.current=P[0].identifier)}E.focus(),a(Hu(E,y,l.current)),C(!0)}},function(k){var y=k.which||k.keyCode;y<37||y>40||(k.preventDefault(),c({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},C]},[c,a]),d=f[0],x=f[1],S=f[2];return F.useEffect(function(){return S},[S]),jr.createElement("div",Ws({},n,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:x,tabIndex:0,role:"slider"}))}),Lc=function(e){return e.filter(Boolean).join(" ")},l2=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,a=Lc(["react-colorful__pointer",e.className]);return jr.createElement("div",{className:a,style:{top:100*o+"%",left:100*r+"%"}},jr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},Ar=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},og=function(e){return ug(sc(e))},sc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Ar(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Ar(parseInt(e.substring(6,8),16)/255,2):1}},ag=function(e){return cg(lg(e))},sg=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:Ar(e.h),s:Ar(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:Ar(o/2),a:Ar(n,2)}},lc=function(e){var t=sg(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},lg=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),c=n*(1-r),l=n*(1-(t-a)*r),h=n*(1-(1-t+a)*r),f=a%6;return{r:Ar(255*[n,l,c,c,h,n][f]),g:Ar(255*[h,n,n,l,c,c][f]),b:Ar(255*[c,c,h,n,n,l][f]),a:Ar(o,2)}},ps=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},cg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?ps(Ar(255*o)):"";return"#"+ps(t)+ps(r)+ps(n)+a},ug=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),c=a-Math.min(t,r,n),l=c?a===t?(r-n)/c:a===r?2+(n-t)/c:4+(t-r)/c:0;return{h:Ar(60*(l<0?l+6:l)),s:Ar(a?c/a*100:0),v:Ar(a/255*100),a:o}},hg=jr.memo(function(e){var t=e.hue,r=e.onChange,n=Lc(["react-colorful__hue",e.className]);return jr.createElement("div",{className:n},jr.createElement(s2,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:Ia(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":Ar(t),"aria-valuemax":"360","aria-valuemin":"0"},jr.createElement(l2,{className:"react-colorful__hue-pointer",left:t/360,color:lc({h:t,s:100,v:100,a:1})})))}),fg=jr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:lc({h:t.h,s:100,v:100,a:1})};return jr.createElement("div",{className:"react-colorful__saturation",style:n},jr.createElement(s2,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:Ia(t.s+100*o.left,0,100),v:Ia(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Ar(t.s)+"%, Brightness "+Ar(t.v)+"%"},jr.createElement(l2,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:lc(t)})))}),c2=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},dg=function(e,t){return e.toLowerCase()===t.toLowerCase()||c2(sc(e),sc(t))};function pg(e,t,r){var n=oc(r),o=F.useState(function(){return e.toHsva(t)}),a=o[0],c=o[1],l=F.useRef({color:t,hsva:a});F.useEffect(function(){if(!e.equal(t,l.current.color)){var f=e.toHsva(t);l.current={hsva:f,color:t},c(f)}},[t,e]),F.useEffect(function(){var f;c2(a,l.current.hsva)||e.equal(f=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:f},n(f))},[a,e,n]);var h=F.useCallback(function(f){c(function(d){return Object.assign({},d,f)})},[]);return[a,h]}var mg=typeof window<"u"?F.useLayoutEffect:F.useEffect,gg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Vu=new Map,vg=function(e){mg(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Vu.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Vu.set(t,r);var n=gg();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},bg=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,a=e.onChange,c=a2(e,["className","colorModel","color","onChange"]),l=F.useRef(null);vg(l);var h=pg(r,o,a),f=h[0],d=h[1],x=Lc(["react-colorful",t]);return jr.createElement("div",Ws({},c,{ref:l,className:x}),jr.createElement(fg,{hsva:f,onChange:d}),jr.createElement(hg,{hue:f.h,onChange:d,className:"react-colorful__last-control"}))},xg={defaultColor:"000",toHsva:og,fromHsva:function(e){return ag({h:e.h,s:e.s,v:e.v,a:1})},equal:dg},wg=function(e){return jr.createElement(bg,Ws({},e,{colorModel:xg}))};const yg=q.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,Sg=q(wg)`
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
`,Pl=q.div`
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
`,_g=q.div`
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
`,Cg=q.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Ag=q.input`
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
`,kg=q(H5)`
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
`,Lg=q(Y5)`
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
`,Ng=q(sp)`
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
`,Ig=q(q5)`
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
`,Tg=q.img`
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
`;function Pg({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:o,onClose:a}){const[c,l]=F.useState(e),[h,f]=F.useState(!1),[d,x]=F.useState(null),S=F.useRef(null),p=F.useRef(null);function w(){f(!h)}function C(P){l(P.target.value===""?"#":P.target.value)}function k(P){const R=S.current,Q=p.current.getBoundingClientRect(),X=R.getContext("2d"),J=Math.floor(P.clientX-Q.left),D=Math.floor(P.clientY-Q.top),N=`#${[...X.getImageData(J,D,1,1).data].slice(0,3).map(M=>M.toString(16).padStart(2,"0")).join("")}`;l(N),w()}function y(P){const R=S.current,Q=p.current.getBoundingClientRect(),X=Math.floor(P.clientX-Q.left),J=Math.floor(P.clientY-Q.top);if(R){const D=R.getContext("2d");try{const N=`#${[...D.getImageData(X,J,1,1).data].slice(0,3).map(M=>M.toString(16).padStart(2,"0")).join("")}`;x(N)}catch{x(null)}}}function E(){x(null)}return v.jsxs(yg,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[v.jsx("canvas",{ref:S,style:{display:"none"}}),h?v.jsx(Tg,{ref:p,crossOrigin:"anonymous",draggable:"false",src:t,onClick:k,onMouseMove:y,onMouseLeave:E,onLoad:()=>{const P=S.current,R=P.getContext("2d"),V=p.current;P.width=V.width,P.height=V.height,R.drawImage(V,0,0,V.width,V.height)},style:d?{borderColor:d}:{}}):v.jsx(Sg,{color:c,onChange:l}),v.jsx(Pl,{children:r.map(P=>v.jsx(_g,{style:{backgroundColor:P},onClick:()=>l(P)},P))}),v.jsxs(Pl,{children:[v.jsx(Cg,{children:"Hex"}),v.jsx(Ag,{value:c,onChange:C})]}),v.jsxs(Pl,{children:[h?v.jsx(Lg,{onClick:w}):v.jsx(kg,{onClick:w}),v.jsx(Ng,{onClick:a}),v.jsx(Ig,{onClick:()=>{o(c),t5(c)}})]})]})}const jg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Eg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Rg=q.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Mg=q.input`
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
`,Og=q.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function ms({title:e,text:t,value:r,onChange:n}){const o=()=>n(!r);return v.jsxs(jg,{children:[v.jsx(Eg,{children:e}),v.jsxs(Rg,{onClick:o,children:[v.jsx(Mg,{checked:r,readOnly:!0,type:"checkbox"}),v.jsx(Og,{active:r,children:t})]})]})}function Fg(e){return Et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function Dg(e){return Et({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const zg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Bg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Ug=q.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,qg=q.input`
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
`,Hg=q.p`
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
`,$g=q(Fg)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function Vg({title:e,text:t,onChange:r}){const n=F.useRef(),o=()=>{n.current.click()},a=c=>{const l=c.target.files[0];t=l.name,l&&r(l)};return v.jsxs(zg,{onClick:o,children:[v.jsx(Bg,{children:e}),v.jsxs(Ug,{children:[v.jsx($g,{}),v.jsx(qg,{ref:n,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:a}),v.jsx(Hg,{active:!0,children:t})]})]})}const Wg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Gg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Yg=q.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Jg=q.input`
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
`,Qg=q.p`
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
`,Kg=q(Dg)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function Xg({title:e,text:t,onChange:r}){const n=F.useRef(),o=()=>{n.current.click()},a=c=>{const l=c.target.files[0];t=l.name,l&&r(l)};return v.jsxs(Wg,{onClick:o,children:[v.jsx(Gg,{children:e}),v.jsxs(Yg,{children:[v.jsx(Kg,{}),v.jsx(Jg,{ref:n,type:"file",accept:".ttf,.otf",onChange:a}),v.jsx(Qg,{active:!0,children:t})]})]})}function u2(e){return Et({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const Zg=q.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,e3=q.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,t3=q.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,r3=q(u2)`
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
`;function h2(){const{t:e}=fr();return v.jsxs(Zg,{children:[v.jsx(r3,{}),v.jsx(e3,{children:e("Loading")}),v.jsx(t3,{children:e("LoadingText")})]})}var f2={},Gs={},d2={exports:{}},n3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i3=n3,o3=i3;function p2(){}function m2(){}m2.resetWarningCache=p2;var a3=function(){function e(n,o,a,c,l,h){if(h!==o3){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:m2,resetWarningCache:p2};return r.PropTypes=r,r};d2.exports=a3();var g2=d2.exports,Nc={},Ys={},v2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(af,function(){var r=function(h,f){return h<f?-1:h>f?1:0},n=function(h){return h.reduce(function(f,d){return f+d},0)},o=function(){function h(d){this.colors=d}var f=h.prototype;return f.palette=function(){return this.colors},f.map=function(d){return d},h}(),a=function(){function h(p,w,C){return(p<<10)+(w<<5)+C}function f(p){var w=[],C=!1;function k(){w.sort(p),C=!0}return{push:function(y){w.push(y),C=!1},peek:function(y){return C||k(),y===void 0&&(y=w.length-1),w[y]},pop:function(){return C||k(),w.pop()},size:function(){return w.length},map:function(y){return w.map(y)},debug:function(){return C||k(),w}}}function d(p,w,C,k,y,E,P){var R=this;R.r1=p,R.r2=w,R.g1=C,R.g2=k,R.b1=y,R.b2=E,R.histo=P}function x(){this.vboxes=new f(function(p,w){return r(p.vbox.count()*p.vbox.volume(),w.vbox.count()*w.vbox.volume())})}function S(p,w){if(w.count()){var C=w.r2-w.r1+1,k=w.g2-w.g1+1,y=Math.max.apply(null,[C,k,w.b2-w.b1+1]);if(w.count()==1)return[w.copy()];var E,P,R,V,Q=0,X=[],J=[];if(y==C)for(E=w.r1;E<=w.r2;E++){for(V=0,P=w.g1;P<=w.g2;P++)for(R=w.b1;R<=w.b2;R++)V+=p[h(E,P,R)]||0;X[E]=Q+=V}else if(y==k)for(E=w.g1;E<=w.g2;E++){for(V=0,P=w.r1;P<=w.r2;P++)for(R=w.b1;R<=w.b2;R++)V+=p[h(P,E,R)]||0;X[E]=Q+=V}else for(E=w.b1;E<=w.b2;E++){for(V=0,P=w.r1;P<=w.r2;P++)for(R=w.g1;R<=w.g2;R++)V+=p[h(P,R,E)]||0;X[E]=Q+=V}return X.forEach(function(D,ee){J[ee]=Q-D}),function(D){var ee,N,M,Y,$,oe=D+"1",le=D+"2",fe=0;for(E=w[oe];E<=w[le];E++)if(X[E]>Q/2){for(M=w.copy(),Y=w.copy(),$=(ee=E-w[oe])<=(N=w[le]-E)?Math.min(w[le]-1,~~(E+N/2)):Math.max(w[oe],~~(E-1-ee/2));!X[$];)$++;for(fe=J[$];!fe&&X[$-1];)fe=J[--$];return M[le]=$,Y[oe]=M[le]+1,[M,Y]}}(y==C?"r":y==k?"g":"b")}}return d.prototype={volume:function(p){var w=this;return w._volume&&!p||(w._volume=(w.r2-w.r1+1)*(w.g2-w.g1+1)*(w.b2-w.b1+1)),w._volume},count:function(p){var w=this,C=w.histo;if(!w._count_set||p){var k,y,E,P=0;for(k=w.r1;k<=w.r2;k++)for(y=w.g1;y<=w.g2;y++)for(E=w.b1;E<=w.b2;E++)P+=C[h(k,y,E)]||0;w._count=P,w._count_set=!0}return w._count},copy:function(){var p=this;return new d(p.r1,p.r2,p.g1,p.g2,p.b1,p.b2,p.histo)},avg:function(p){var w=this,C=w.histo;if(!w._avg||p){var k,y,E,P,R=0,V=0,Q=0,X=0;if(w.r1===w.r2&&w.g1===w.g2&&w.b1===w.b2)w._avg=[w.r1<<3,w.g1<<3,w.b1<<3];else{for(y=w.r1;y<=w.r2;y++)for(E=w.g1;E<=w.g2;E++)for(P=w.b1;P<=w.b2;P++)R+=k=C[h(y,E,P)]||0,V+=k*(y+.5)*8,Q+=k*(E+.5)*8,X+=k*(P+.5)*8;w._avg=R?[~~(V/R),~~(Q/R),~~(X/R)]:[~~(8*(w.r1+w.r2+1)/2),~~(8*(w.g1+w.g2+1)/2),~~(8*(w.b1+w.b2+1)/2)]}}return w._avg},contains:function(p){var w=this,C=p[0]>>3;return gval=p[1]>>3,bval=p[2]>>3,C>=w.r1&&C<=w.r2&&gval>=w.g1&&gval<=w.g2&&bval>=w.b1&&bval<=w.b2}},x.prototype={push:function(p){this.vboxes.push({vbox:p,color:p.avg()})},palette:function(){return this.vboxes.map(function(p){return p.color})},size:function(){return this.vboxes.size()},map:function(p){for(var w=this.vboxes,C=0;C<w.size();C++)if(w.peek(C).vbox.contains(p))return w.peek(C).color;return this.nearest(p)},nearest:function(p){for(var w,C,k,y=this.vboxes,E=0;E<y.size();E++)((C=Math.sqrt(Math.pow(p[0]-y.peek(E).color[0],2)+Math.pow(p[1]-y.peek(E).color[1],2)+Math.pow(p[2]-y.peek(E).color[2],2)))<w||w===void 0)&&(w=C,k=y.peek(E).color);return k},forcebw:function(){var p=this.vboxes;p.sort(function(y,E){return r(n(y.color),n(E.color))});var w=p[0].color;w[0]<5&&w[1]<5&&w[2]<5&&(p[0].color=[0,0,0]);var C=p.length-1,k=p[C].color;k[0]>251&&k[1]>251&&k[2]>251&&(p[C].color=[255,255,255])}},{quantize:function(p,w){if(!Number.isInteger(w)||w<1||w>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!p.length||w<2||w>256||!p.length||w<2||w>256)return!1;for(var C=[],k=new Set,y=0;y<p.length;y++){var E=p[y],P=E.join(",");k.has(P)||(k.add(P),C.push(E))}if(C.length<=w)return new o(C);var R=function(ee){var N,M=new Array(32768);return ee.forEach(function(Y){N=h(Y[0]>>3,Y[1]>>3,Y[2]>>3),M[N]=(M[N]||0)+1}),M}(p);R.forEach(function(){});var V=function(ee,N){var M,Y,$,oe=1e6,le=0,fe=1e6,ae=0,pe=1e6,ke=0;return ee.forEach(function(_e){(M=_e[0]>>3)<oe?oe=M:M>le&&(le=M),(Y=_e[1]>>3)<fe?fe=Y:Y>ae&&(ae=Y),($=_e[2]>>3)<pe?pe=$:$>ke&&(ke=$)}),new d(oe,le,fe,ae,pe,ke,N)}(p,R),Q=new f(function(ee,N){return r(ee.count(),N.count())});function X(ee,N){for(var M,Y=ee.size(),$=0;$<1e3;){if(Y>=N||$++>1e3)return;if((M=ee.pop()).count()){var oe=S(R,M),le=oe[0],fe=oe[1];if(!le)return;ee.push(le),fe&&(ee.push(fe),Y++)}else ee.push(M),$++}}Q.push(V),X(Q,.75*w);for(var J=new f(function(ee,N){return r(ee.count()*ee.volume(),N.count()*N.volume())});Q.size();)J.push(Q.pop());X(J,w);for(var D=new x;J.size();)D.push(J.pop());return D}}}().quantize,c=function(h){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=h.naturalWidth,this.height=this.canvas.height=h.naturalHeight,this.context.drawImage(h,0,0,this.width,this.height)};c.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var l=function(){};return l.prototype.getColor=function(h,f){return f===void 0&&(f=10),this.getPalette(h,5,f)[0]},l.prototype.getPalette=function(h,f,d){var x=function(C){var k=C.colorCount,y=C.quality;if(k!==void 0&&Number.isInteger(k)){if(k===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");k=Math.max(k,2),k=Math.min(k,20)}else k=10;return(y===void 0||!Number.isInteger(y)||y<1)&&(y=10),{colorCount:k,quality:y}}({colorCount:f,quality:d}),S=new c(h),p=function(C,k,y){for(var E,P,R,V,Q,X=C,J=[],D=0;D<k;D+=y)P=X[0+(E=4*D)],R=X[E+1],V=X[E+2],((Q=X[E+3])===void 0||Q>=125)&&(P>250&&R>250&&V>250||J.push([P,R,V]));return J}(S.getImageData().data,S.width*S.height,x.quality),w=a(p,x.colorCount);return w?w.palette():null},l.prototype.getColorFromUrl=function(h,f,d){var x=this,S=document.createElement("img");S.addEventListener("load",function(){var p=x.getPalette(S,5,d);f(p[0],h)}),S.src=h},l.prototype.getImageData=function(h,f){var d=new XMLHttpRequest;d.open("GET",h,!0),d.responseType="arraybuffer",d.onload=function(){if(this.status==200){var x=new Uint8Array(this.response);i=x.length;for(var S=new Array(i),p=0;p<x.length;p++)S[p]=String.fromCharCode(x[p]);var w=S.join(""),C=window.btoa(w);f("data:image/png;base64,"+C)}},d.send()},l.prototype.getColorAsync=function(h,f,d){var x=this;this.getImageData(h,function(S){var p=document.createElement("img");p.addEventListener("load",function(){var w=x.getPalette(p,5,d);f(w[0],this)}),p.src=S})},l})})(v2);var b2=v2.exports,Js={},Ic={};Object.defineProperty(Ic,"__esModule",{value:!0});Ic.default=s3;function s3(e,t,r){return`rgb(${e}, ${t}, ${r})`}var Tc={};Object.defineProperty(Tc,"__esModule",{value:!0});Tc.default=l3;function l3(e,t,r){return`#${[e,t,r].map(n=>{const o=n.toString(16);return o.length===1?`0${o}`:o}).join("")}`}Object.defineProperty(Js,"__esModule",{value:!0});Js.default=h3;var c3=x2(Ic),u3=x2(Tc);function x2(e){return e&&e.__esModule?e:{default:e}}function h3(e,t){switch(t){case"rgbString":return(0,c3.default)(e[0],e[1],e[2]);case"hex":return(0,u3.default)(e[0],e[1],e[2]);default:return e}}var Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.default=f3;function f3(e,t=void 0){return new Promise((r,n)=>{const o=new Image;o.addEventListener("load",()=>{r(o)}),o.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),o.crossOrigin=t,o.src=e})}Object.defineProperty(Ys,"__esModule",{value:!0});Ys.default=g3;var d3=Pc(b2),p3=Pc(Js),m3=Pc(Qs);function Pc(e){return e&&e.__esModule?e:{default:e}}async function g3(e,t="rgbString",r=null,n=10){const o=await(0,m3.default)(e,r),c=new d3.default().getColor(o,n);return(0,p3.default)(c,t)}Object.defineProperty(Nc,"__esModule",{value:!0});Nc.default=w3;var Wu=F,v3=b3(Ys);function b3(e){return e&&e.__esModule?e:{default:e}}const w2={loading:!0,data:null,error:void 0};function x3(e,t){switch(t.type){case"getColor":return w2;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function w3(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:o=10}=r,[a,c]=(0,Wu.useReducer)(x3,w2);return(0,Wu.useEffect)(()=>{c({type:"getColor"}),(0,v3.default)(e,t,n,o).then(l=>{c({type:"resolveColor",payload:l})}).catch(l=>{c({type:"rejectColor",payload:l})})},[e]),a}Object.defineProperty(Gs,"__esModule",{value:!0});Gs.default=void 0;var Gu=jc(F),wa=jc(g2),y3=jc(Nc);function jc(e){return e&&e.__esModule?e:{default:e}}const Ec=({src:e,format:t,crossOrigin:r,quality:n,children:o})=>{const a=(0,y3.default)(e,t,{crossOrigin:r,quality:n});return Gu.default.createElement(Gu.default.Fragment,null,o(a))};Ec.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Ec.propTypes={children:wa.default.any.isRequired,src:wa.default.string.isRequired,format:wa.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:wa.default.string,quality:wa.default.number};var S3=Ec;Gs.default=S3;var Ks={},Rc={},Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.default=k3;var _3=Mc(b2),C3=Mc(Js),A3=Mc(Qs);function Mc(e){return e&&e.__esModule?e:{default:e}}async function k3(e,t=2,r="rgbString",n=null,o=10){const a=await(0,A3.default)(e,n);return new _3.default().getPalette(a,t,o).map(h=>(0,C3.default)(h,r))}Object.defineProperty(Rc,"__esModule",{value:!0});Rc.default=T3;var Yu=F,L3=N3(Xs);function N3(e){return e&&e.__esModule?e:{default:e}}const y2={loading:!0,data:[],error:void 0};function I3(e,t){switch(t.type){case"getPalette":return y2;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function T3(e,t=2,r="rgbString",n={}){const{crossOrigin:o=null,quality:a=10}=n,[c,l]=(0,Yu.useReducer)(I3,y2);return(0,Yu.useEffect)(()=>{l({type:"getPalette"}),(0,L3.default)(e,t,r,o,a).then(h=>{l({type:"resolvePalette",payload:h})}).catch(h=>{l({type:"rejectPalette",payload:h})})},[e]),c}Object.defineProperty(Ks,"__esModule",{value:!0});Ks.default=void 0;var Ju=Oc(F),jo=Oc(g2),P3=Oc(Rc);function Oc(e){return e&&e.__esModule?e:{default:e}}const Fc=({src:e,colorCount:t,format:r,crossOrigin:n,quality:o,children:a})=>{const c=(0,P3.default)(e,t,r,{crossOrigin:n,quality:o});return Ju.default.createElement(Ju.default.Fragment,null,a(c))};Fc.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};Fc.propTypes={children:jo.default.any.isRequired,src:jo.default.string.isRequired,format:jo.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:jo.default.number,crossOrigin:jo.default.string,quality:jo.default.number};var j3=Fc;Ks.default=j3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return o.default}}),e.default=void 0;var t=a(Gs),r=a(Ks),n=a(Ys),o=a(Xs);function a(l){return l&&l.__esModule?l:{default:l}}var c=t.default;e.default=c})(f2);const E3=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,S2=F.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:o,customFont:a},c)=>{const l=F.useRef(null);return F.useImperativeHandle(c,()=>({getCanvas:()=>l.current})),F.useEffect(()=>{(async()=>{if(!r)return;const f=l.current,d=f.getContext("2d"),x=2480,S=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0;const p=async V=>{const Q=new Image;return Q.crossOrigin="anonymous",Q.src=V,new Promise(X=>{Q.onload=()=>{if(d.drawImage(Q,t.marginCover,t.marginCover,x-t.marginCover*2,x-t.marginCover*2),t.useFade){let J=d.createLinearGradient(0,0,0,3e3-t.marginBackground);const D=y(t.backgroundColor);J.addColorStop(.5,`rgba(${D.r}, ${D.g}, ${D.b}, 0)`),J.addColorStop(.8,t.backgroundColor),d.fillStyle=J,d.fillRect(0,0,f.width,2500-t.marginBackground)}X()}})},w=async()=>{const V=E3(t.textColor,500,134),Q=new Blob([V],{type:"image/svg+xml;charset=utf-8"}),X=URL.createObjectURL(Q),J=new Image;return J.src=X,new Promise(D=>{J.onload=()=>{d.globalAlpha="0.5",d.drawImage(J,x-70-500,50,500,134),d.globalAlpha="1",URL.revokeObjectURL(X),D()}})},C=async()=>{let V=t.titleSize?parseInt(t.titleSize):230;const Q=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){d.font=`bold ${V}px ${Q}`;let D=d.measureText(t.albumName).width;for(;D>2480-t.marginSide*2;)V-=1,d.font=`bold ${V}px ${Q}`,D=d.measureText(t.albumName).width;n(V,!0)}else d.font=`bold ${V}px ${Q}`;d.fillStyle=t.textColor,t.showTracklist?d.fillText(t.albumName,t.marginSide,2500+t.marginTop):d.fillText(t.albumName,t.marginSide,2790+t.marginTop);let X=t.artistsSize?parseInt(t.artistsSize):110;d.font=`bold ${X}px ${a||"Montserrat"}`,t.showTracklist?d.fillText(t.artistsName,t.marginSide,2500+t.marginTop+X*1.3):d.fillText(t.artistsName,t.marginSide,2820+t.marginTop+X),d.font=`bold 70px ${a||"Montserrat"}`,d.fillText(t.titleRelease,t.marginSide,3310);let J=d.measureText(t.titleRelease).width;d.fillText(t.titleRuntime,J+t.marginSide+100,3310),d.globalAlpha=.7,d.font=`bold 60px ${a||"Montserrat"}`,d.fillText(t.runtime,J+t.marginSide+100,3390),d.fillText(t.releaseDate,t.marginSide,3390),d.globalAlpha=1,d.fillStyle=t.color1,d.fillRect(2045-t.marginSide,3368,145,30),d.fillStyle=t.color2,d.fillRect(2190-t.marginSide,3368,145,30),d.fillStyle=t.color3,d.fillRect(2335-t.marginSide,3368,145,30)},k=async()=>{d.fillStyle=t.textColor;let V=t.tracksSize?parseInt(t.tracksSize):50;const Q=parseInt(t.marginTop||0),X=parseInt(t.artistsSize)?2500+Q+parseInt(t.artistsSize)*1.3+130:2500+Q+110*1.2+130,D=X+500-10-parseInt(t.marginTop),ee=2480-t.marginSide,N=t.tracklist.split(`
`).filter(le=>le.trim()!=="");if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const le=ae=>{d.font=`bold ${ae}px ${a||"Montserrat"}`;const pe=ae;let ke=t.marginSide+10,_e=0,T=X,H=0;return N.forEach(G=>{T+pe*1.3>=D&&(T=X,ke=ke+_e+ae,_e=0);const Z=d.measureText(`${G}`).width,ne=ke+Z;Z>_e&&(_e=Z),H=Math.max(H,ne),T+=pe*1.3}),H};let fe=le(V);for(;fe>ee&&V>1;)V-=1,fe=le(V);o&&o(V,!0)}d.font=`bold ${V}px ${a||"Montserrat"}`;const M=V;let Y=t.marginSide+10,$=0,oe=X;N.forEach(le=>{oe+M*1.3>=D&&(oe=X,Y=Y+$+V,$=0);const fe=d.measureText(`${le}`).width;fe>$&&($=fe),d.fillText(`${le}`,Y,oe),oe+=M*1.3})},y=V=>{const Q=parseInt(V.replace("#",""),16);return{r:Q>>16&255,g:Q>>8&255,b:Q&255}},E=V=>{const Q=J=>{const D=J/255;return D<=.03928?D/12.92:Math.pow((D+.055)/1.055,2.4)};return .2126*Q(V.r)+.7152*Q(V.g)+.0722*Q(V.b)>.179?"black":"white"},P=async()=>{const V=y(t.backgroundColor),Q=E(V),X=t.textColor,J=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${Q}/640/spotify:album:${t.albumID}`;let ee=await(await fetch(J)).text();Q=="black"?ee=ee.replace(/fill="#000000"/g,`fill="${X}"`):ee=ee.replace(/fill="#ffffff"/g,`fill="${X}"`),ee=ee.replace(t.backgroundColor,"transparent");const N=new Blob([ee],{type:"image/svg+xml"}),M=URL.createObjectURL(N);return new Promise(Y=>{const $=new Image;$.src=M,$.onload=function(){d.drawImage($,2020-t.marginSide,3235,480,120);const oe=f.toDataURL("image/png");e(oe),Y()}})},R=async()=>{d.fillStyle=t.backgroundColor,d.fillRect(0,2480-t.marginBackground,x,S-2480+t.marginBackground)};d.clearRect(0,0,x,S),d.fillStyle=t.backgroundColor,d.fillRect(0,0,x,S),t.useUncompressed?await p(await t.uncompressedAlbumCover):await p(t.albumCover),await R(),await C(),t.showTracklist&&await k(),t.useWatermark&&await w(),await P()})()},[r,t,e]),v.jsx("canvas",{ref:l,width:2480,height:3508,style:{display:"none"}})});S2.displayName="CanvasPoster";const R3=q.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Bt({children:e,animationDelay:t=0,...r}){const[n,o]=F.useState(!1);return F.useEffect(()=>{const a=setTimeout(()=>{o(!0)},t);return()=>clearTimeout(a)},[t]),v.jsx(R3,{visible:n,animationDelay:t,...r,children:e})}function M3(e){const t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2));let r=e.albumName||"Posterfy";r=String(r).replace(/[^a-zA-Z0-9-_ ]/g,"").replace(/\s+/g,"-");const n=`Posterfy-${r}.json`,o=document.createElement("a");o.href=t,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o)}function O3(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.onchange=r=>{const n=r.target.files[0];if(!n)return;const o=new FileReader;o.onload=a=>{try{const c=JSON.parse(a.target.result);e(c)}catch{}},o.readAsText(n)},document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),1e3)}const F3="modulepreload",D3=function(e){return"/"+e},Qu={},jl=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(r.map(h=>{if(h=D3(h),h in Qu)return;Qu[h]=!0;const f=h.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":F3,f||(x.as="script"),x.crossOrigin="",x.href=h,l&&x.setAttribute("nonce",l),document.head.appendChild(x),f)return new Promise((S,p)=>{x.addEventListener("load",S),x.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return o.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};function Pt(e){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(e)}var Nn=Uint8Array,an=Uint16Array,Dc=Int32Array,zc=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Bc=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ku=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_2=function(e,t){for(var r=new an(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new Dc(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},C2=_2(zc,2),z3=C2.b,cc=C2.r;z3[28]=258,cc[258]=28;var B3=_2(Bc,0),Xu=B3.r,uc=new an(32768);for(var Ut=0;Ut<32768;++Ut){var Oi=(Ut&43690)>>1|(Ut&21845)<<1;Oi=(Oi&52428)>>2|(Oi&13107)<<2,Oi=(Oi&61680)>>4|(Oi&3855)<<4,uc[Ut]=((Oi&65280)>>8|(Oi&255)<<8)>>1}var ka=function(e,t,r){for(var n=e.length,o=0,a=new an(t);o<n;++o)e[o]&&++a[e[o]-1];var c=new an(t);for(o=1;o<t;++o)c[o]=c[o-1]+a[o-1]<<1;var l;if(r){l=new an(1<<t);var h=15-t;for(o=0;o<n;++o)if(e[o])for(var f=o<<4|e[o],d=t-e[o],x=c[e[o]-1]++<<d,S=x|(1<<d)-1;x<=S;++x)l[uc[x]>>h]=f}else for(l=new an(n),o=0;o<n;++o)e[o]&&(l[o]=uc[c[e[o]-1]++]>>15-e[o]);return l},ho=new Nn(288);for(var Ut=0;Ut<144;++Ut)ho[Ut]=8;for(var Ut=144;Ut<256;++Ut)ho[Ut]=9;for(var Ut=256;Ut<280;++Ut)ho[Ut]=7;for(var Ut=280;Ut<288;++Ut)ho[Ut]=8;var Ds=new Nn(32);for(var Ut=0;Ut<32;++Ut)Ds[Ut]=5;var U3=ka(ho,9,0),q3=ka(Ds,5,0),A2=function(e){return(e+7)/8|0},H3=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Nn(e.subarray(t,r))},li=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},ya=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},El=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,a=r.slice();if(!o)return{t:L2,l:0};if(o==1){var c=new Nn(r[0].s+1);return c[r[0].s]=1,{t:c,l:1}}r.sort(function(V,Q){return V.f-Q.f}),r.push({s:-1,f:25001});var l=r[0],h=r[1],f=0,d=1,x=2;for(r[0]={s:-1,f:l.f+h.f,l,r:h};d!=o-1;)l=r[r[f].f<r[x].f?f++:x++],h=r[f!=d&&r[f].f<r[x].f?f++:x++],r[d++]={s:-1,f:l.f+h.f,l,r:h};for(var S=a[0].s,n=1;n<o;++n)a[n].s>S&&(S=a[n].s);var p=new an(S+1),w=hc(r[d-1],p,0);if(w>t){var n=0,C=0,k=w-t,y=1<<k;for(a.sort(function(Q,X){return p[X.s]-p[Q.s]||Q.f-X.f});n<o;++n){var E=a[n].s;if(p[E]>t)C+=y-(1<<w-p[E]),p[E]=t;else break}for(C>>=k;C>0;){var P=a[n].s;p[P]<t?C-=1<<t-p[P]++-1:++n}for(;n>=0&&C;--n){var R=a[n].s;p[R]==t&&(--p[R],++C)}w=t}return{t:new Nn(p),l:w}},hc=function(e,t,r){return e.s==-1?Math.max(hc(e.l,t,r+1),hc(e.r,t,r+1)):t[e.s]=r},Zu=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new an(++t),n=0,o=e[0],a=1,c=function(h){r[n++]=h},l=1;l<=t;++l)if(e[l]==o&&l!=t)++a;else{if(!o&&a>2){for(;a>138;a-=138)c(32754);a>2&&(c(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(c(o),--a;a>6;a-=6)c(8304);a>2&&(c(a-3<<5|8208),a=0)}for(;a--;)c(o);a=1,o=e[l]}return{c:r.subarray(0,n),n:t}},Sa=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},k2=function(e,t,r){var n=r.length,o=A2(t+2);e[o]=n&255,e[o+1]=n>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<n;++a)e[o+a+4]=r[a];return(o+4+n)*8},e1=function(e,t,r,n,o,a,c,l,h,f,d){li(t,d++,r),++o[256];for(var x=El(o,15),S=x.t,p=x.l,w=El(a,15),C=w.t,k=w.l,y=Zu(S),E=y.c,P=y.n,R=Zu(C),V=R.c,Q=R.n,X=new an(19),J=0;J<E.length;++J)++X[E[J]&31];for(var J=0;J<V.length;++J)++X[V[J]&31];for(var D=El(X,7),ee=D.t,N=D.l,M=19;M>4&&!ee[Ku[M-1]];--M);var Y=f+5<<3,$=Sa(o,ho)+Sa(a,Ds)+c,oe=Sa(o,S)+Sa(a,C)+c+14+3*M+Sa(X,ee)+2*X[16]+3*X[17]+7*X[18];if(h>=0&&Y<=$&&Y<=oe)return k2(t,d,e.subarray(h,h+f));var le,fe,ae,pe;if(li(t,d,1+(oe<$)),d+=2,oe<$){le=ka(S,p,0),fe=S,ae=ka(C,k,0),pe=C;var ke=ka(ee,N,0);li(t,d,P-257),li(t,d+5,Q-1),li(t,d+10,M-4),d+=14;for(var J=0;J<M;++J)li(t,d+3*J,ee[Ku[J]]);d+=3*M;for(var _e=[E,V],T=0;T<2;++T)for(var H=_e[T],J=0;J<H.length;++J){var G=H[J]&31;li(t,d,ke[G]),d+=ee[G],G>15&&(li(t,d,H[J]>>5&127),d+=H[J]>>12)}}else le=U3,fe=ho,ae=q3,pe=Ds;for(var J=0;J<l;++J){var Z=n[J];if(Z>255){var G=Z>>18&31;ya(t,d,le[G+257]),d+=fe[G+257],G>7&&(li(t,d,Z>>23&31),d+=zc[G]);var ne=Z&31;ya(t,d,ae[ne]),d+=pe[ne],ne>3&&(ya(t,d,Z>>5&8191),d+=Bc[ne])}else ya(t,d,le[Z]),d+=fe[Z]}return ya(t,d,le[256]),d+fe[256]},$3=new Dc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),L2=new Nn(0),V3=function(e,t,r,n,o,a){var c=a.z||e.length,l=new Nn(n+c+5*(1+Math.ceil(c/7e3))+o),h=l.subarray(n,l.length-o),f=a.l,d=(a.r||0)&7;if(t){d&&(h[0]=a.r>>3);for(var x=$3[t-1],S=x>>13,p=x&8191,w=(1<<r)-1,C=a.p||new an(32768),k=a.h||new an(w+1),y=Math.ceil(r/3),E=2*y,P=function(ve){return(e[ve]^e[ve+1]<<y^e[ve+2]<<E)&w},R=new Dc(25e3),V=new an(288),Q=new an(32),X=0,J=0,D=a.i||0,ee=0,N=a.w||0,M=0;D+2<c;++D){var Y=P(D),$=D&32767,oe=k[Y];if(C[$]=oe,k[Y]=$,N<=D){var le=c-D;if((X>7e3||ee>24576)&&(le>423||!f)){d=e1(e,h,0,R,V,Q,J,ee,M,D-M,d),ee=X=J=0,M=D;for(var fe=0;fe<286;++fe)V[fe]=0;for(var fe=0;fe<30;++fe)Q[fe]=0}var ae=2,pe=0,ke=p,_e=$-oe&32767;if(le>2&&Y==P(D-_e))for(var T=Math.min(S,le)-1,H=Math.min(32767,D),G=Math.min(258,le);_e<=H&&--ke&&$!=oe;){if(e[D+ae]==e[D+ae-_e]){for(var Z=0;Z<G&&e[D+Z]==e[D+Z-_e];++Z);if(Z>ae){if(ae=Z,pe=_e,Z>T)break;for(var ne=Math.min(_e,Z-2),ue=0,fe=0;fe<ne;++fe){var me=D-_e+fe&32767,de=C[me],ye=me-de&32767;ye>ue&&(ue=ye,oe=me)}}}$=oe,oe=C[$],_e+=$-oe&32767}if(pe){R[ee++]=268435456|cc[ae]<<18|Xu[pe];var Ie=cc[ae]&31,Ee=Xu[pe]&31;J+=zc[Ie]+Bc[Ee],++V[257+Ie],++Q[Ee],N=D+ae,++X}else R[ee++]=e[D],++V[e[D]]}}for(D=Math.max(D,N);D<c;++D)R[ee++]=e[D],++V[e[D]];d=e1(e,h,f,R,V,Q,J,ee,M,D-M,d),f||(a.r=d&7|h[d/8|0]<<3,d-=7,a.h=k,a.p=C,a.i=D,a.w=N)}else{for(var D=a.w||0;D<c+f;D+=65535){var je=D+65535;je>=c&&(h[d/8|0]=f,je=c),d=k2(h,d+1,e.subarray(D,je))}a.i=c}return H3(l,0,n+A2(d)+o)},N2=function(){var e=1,t=0;return{p:function(r){for(var n=e,o=t,a=r.length|0,c=0;c!=a;){for(var l=Math.min(c+2655,a);c<l;++c)o+=n+=r[c];n=(n&65535)+15*(n>>16),o=(o&65535)+15*(o>>16)}e=n,t=o},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},W3=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),c=new Nn(a.length+e.length);c.set(a),c.set(e,a.length),e=c,o.w=a.length}return V3(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,o)},I2=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},G3=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var o=N2();o.p(t.dictionary),I2(e,2,o.d())}};function fc(e,t){t||(t={});var r=N2();r.p(e);var n=W3(e,t,t.dictionary?6:2,4);return G3(n,t),I2(n,n.length-4,r.d()),n}var Y3=typeof TextDecoder<"u"&&new TextDecoder,J3=0;try{Y3.decode(L2,{stream:!0}),J3=1}catch{}function Q3(e){if(Array.isArray(e))return e}function K3(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,a,c,l=[],h=!0,f=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(h=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);h=!0);}catch(d){f=!0,o=d}finally{try{if(!h&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(f)throw o}}return l}}function t1(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function X3(e,t){if(e){if(typeof e=="string")return t1(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t1(e,t):void 0}}function Z3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r1(e,t){return Q3(e)||K3(e,t)||X3(e,t)||Z3()}function n1(e,t="utf8"){return new TextDecoder(t).decode(e)}const e4=new TextEncoder;function t4(e){return e4.encode(e)}const r4=1024*8,n4=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),Rl={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class Uc{constructor(t=r4,r={}){Te(this,"buffer");Te(this,"byteLength");Te(this,"byteOffset");Te(this,"length");Te(this,"offset");Te(this,"lastWrittenByte");Te(this,"littleEndian");Te(this,"_data");Te(this,"_mark");Te(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const o=r.offset?r.offset>>>0:0,a=t.byteLength-o;let c=o;(ArrayBuffer.isView(t)||t instanceof Uc)&&(t.byteLength!==t.buffer.byteLength&&(c=t.byteOffset+o),t=t.buffer),n?this.lastWrittenByte=a:this.lastWrittenByte=0,this.buffer=t,this.length=a,this.byteLength=a,this.byteOffset=c,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,c,a),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,o=new Uint8Array(n);o.set(new Uint8Array(this.buffer)),this.buffer=o.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=Rl[r].BYTES_PER_ELEMENT*t,o=this.byteOffset+this.offset,a=this.buffer.slice(o,o+n);if(this.littleEndian===n4&&r!=="uint8"&&r!=="int8"){const l=new Uint8Array(this.buffer.slice(o,o+n));l.reverse();const h=new Rl[r](l.buffer);return this.offset+=n,h.reverse(),h}const c=new Rl[r](a);return this.offset+=n,c}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return n1(this.readBytes(t))}decodeText(t=1,r="utf8"){return n1(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(t4(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function Vo(e){let t=e.length;for(;--t>=0;)e[t]=0}const i4=3,o4=258,T2=29,a4=256,s4=a4+1+T2,P2=30,l4=512,c4=new Array((s4+2)*2);Vo(c4);const u4=new Array(P2*2);Vo(u4);const h4=new Array(l4);Vo(h4);const f4=new Array(o4-i4+1);Vo(f4);const d4=new Array(T2);Vo(d4);const p4=new Array(P2);Vo(p4);const m4=(e,t,r,n)=>{let o=e&65535|0,a=e>>>16&65535|0,c=0;for(;r!==0;){c=r>2e3?2e3:r,r-=c;do o=o+t[n++]|0,a=a+o|0;while(--c);o%=65521,a%=65521}return o|a<<16|0};var dc=m4;const g4=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},v4=new Uint32Array(g4()),b4=(e,t,r,n)=>{const o=v4,a=n+r;e^=-1;for(let c=n;c<a;c++)e=e>>>8^o[(e^t[c])&255];return e^-1};var Dn=b4,pc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},j2={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const x4=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var w4=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)x4(r,n)&&(e[n]=r[n])}}return e},y4=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,o=0,a=e.length;n<a;n++){let c=e[n];r.set(c,o),o+=c.length}return r},E2={assign:w4,flattenChunks:y4};let R2=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{R2=!1}const Ta=new Uint8Array(256);for(let e=0;e<256;e++)Ta[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ta[254]=Ta[254]=1;var S4=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,o,a,c=e.length,l=0;for(o=0;o<c;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),l+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(l),a=0,o=0;a<l;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t};const _4=(e,t)=>{if(t<65534&&e.subarray&&R2)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var C4=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,o;const a=new Array(r*2);for(o=0,n=0;n<r;){let c=e[n++];if(c<128){a[o++]=c;continue}let l=Ta[c];if(l>4){a[o++]=65533,n+=l-1;continue}for(c&=l===2?31:l===3?15:7;l>1&&n<r;)c=c<<6|e[n++]&63,l--;if(l>1){a[o++]=65533;continue}c<65536?a[o++]=c:(c-=65536,a[o++]=55296|c>>10&1023,a[o++]=56320|c&1023)}return _4(a,o)},A4=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ta[e[r]]>t?r:t},mc={string2buf:S4,buf2string:C4,utf8border:A4};function k4(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var L4=k4;const gs=16209,N4=16191;var I4=function(t,r){let n,o,a,c,l,h,f,d,x,S,p,w,C,k,y,E,P,R,V,Q,X,J,D,ee;const N=t.state;n=t.next_in,D=t.input,o=n+(t.avail_in-5),a=t.next_out,ee=t.output,c=a-(r-t.avail_out),l=a+(t.avail_out-257),h=N.dmax,f=N.wsize,d=N.whave,x=N.wnext,S=N.window,p=N.hold,w=N.bits,C=N.lencode,k=N.distcode,y=(1<<N.lenbits)-1,E=(1<<N.distbits)-1;e:do{w<15&&(p+=D[n++]<<w,w+=8,p+=D[n++]<<w,w+=8),P=C[p&y];t:for(;;){if(R=P>>>24,p>>>=R,w-=R,R=P>>>16&255,R===0)ee[a++]=P&65535;else if(R&16){V=P&65535,R&=15,R&&(w<R&&(p+=D[n++]<<w,w+=8),V+=p&(1<<R)-1,p>>>=R,w-=R),w<15&&(p+=D[n++]<<w,w+=8,p+=D[n++]<<w,w+=8),P=k[p&E];r:for(;;){if(R=P>>>24,p>>>=R,w-=R,R=P>>>16&255,R&16){if(Q=P&65535,R&=15,w<R&&(p+=D[n++]<<w,w+=8,w<R&&(p+=D[n++]<<w,w+=8)),Q+=p&(1<<R)-1,Q>h){t.msg="invalid distance too far back",N.mode=gs;break e}if(p>>>=R,w-=R,R=a-c,Q>R){if(R=Q-R,R>d&&N.sane){t.msg="invalid distance too far back",N.mode=gs;break e}if(X=0,J=S,x===0){if(X+=f-R,R<V){V-=R;do ee[a++]=S[X++];while(--R);X=a-Q,J=ee}}else if(x<R){if(X+=f+x-R,R-=x,R<V){V-=R;do ee[a++]=S[X++];while(--R);if(X=0,x<V){R=x,V-=R;do ee[a++]=S[X++];while(--R);X=a-Q,J=ee}}}else if(X+=x-R,R<V){V-=R;do ee[a++]=S[X++];while(--R);X=a-Q,J=ee}for(;V>2;)ee[a++]=J[X++],ee[a++]=J[X++],ee[a++]=J[X++],V-=3;V&&(ee[a++]=J[X++],V>1&&(ee[a++]=J[X++]))}else{X=a-Q;do ee[a++]=ee[X++],ee[a++]=ee[X++],ee[a++]=ee[X++],V-=3;while(V>2);V&&(ee[a++]=ee[X++],V>1&&(ee[a++]=ee[X++]))}}else if(R&64){t.msg="invalid distance code",N.mode=gs;break e}else{P=k[(P&65535)+(p&(1<<R)-1)];continue r}break}}else if(R&64)if(R&32){N.mode=N4;break e}else{t.msg="invalid literal/length code",N.mode=gs;break e}else{P=C[(P&65535)+(p&(1<<R)-1)];continue t}break}}while(n<o&&a<l);V=w>>3,n-=V,w-=V<<3,p&=(1<<w)-1,t.next_in=n,t.next_out=a,t.avail_in=n<o?5+(o-n):5-(n-o),t.avail_out=a<l?257+(l-a):257-(a-l),N.hold=p,N.bits=w};const Eo=15,i1=852,o1=592,a1=0,Ml=1,s1=2,T4=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),P4=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),j4=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),E4=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),R4=(e,t,r,n,o,a,c,l)=>{const h=l.bits;let f=0,d=0,x=0,S=0,p=0,w=0,C=0,k=0,y=0,E=0,P,R,V,Q,X,J=null,D;const ee=new Uint16Array(Eo+1),N=new Uint16Array(Eo+1);let M=null,Y,$,oe;for(f=0;f<=Eo;f++)ee[f]=0;for(d=0;d<n;d++)ee[t[r+d]]++;for(p=h,S=Eo;S>=1&&ee[S]===0;S--);if(p>S&&(p=S),S===0)return o[a++]=1<<24|64<<16|0,o[a++]=1<<24|64<<16|0,l.bits=1,0;for(x=1;x<S&&ee[x]===0;x++);for(p<x&&(p=x),k=1,f=1;f<=Eo;f++)if(k<<=1,k-=ee[f],k<0)return-1;if(k>0&&(e===a1||S!==1))return-1;for(N[1]=0,f=1;f<Eo;f++)N[f+1]=N[f]+ee[f];for(d=0;d<n;d++)t[r+d]!==0&&(c[N[t[r+d]]++]=d);if(e===a1?(J=M=c,D=20):e===Ml?(J=T4,M=P4,D=257):(J=j4,M=E4,D=0),E=0,d=0,f=x,X=a,w=p,C=0,V=-1,y=1<<p,Q=y-1,e===Ml&&y>i1||e===s1&&y>o1)return 1;for(;;){Y=f-C,c[d]+1<D?($=0,oe=c[d]):c[d]>=D?($=M[c[d]-D],oe=J[c[d]-D]):($=96,oe=0),P=1<<f-C,R=1<<w,x=R;do R-=P,o[X+(E>>C)+R]=Y<<24|$<<16|oe|0;while(R!==0);for(P=1<<f-1;E&P;)P>>=1;if(P!==0?(E&=P-1,E+=P):E=0,d++,--ee[f]===0){if(f===S)break;f=t[r+c[d]]}if(f>p&&(E&Q)!==V){for(C===0&&(C=p),X+=x,w=f-C,k=1<<w;w+C<S&&(k-=ee[w+C],!(k<=0));)w++,k<<=1;if(y+=1<<w,e===Ml&&y>i1||e===s1&&y>o1)return 1;V=E&Q,o[V]=p<<24|w<<16|X-a|0}}return E!==0&&(o[X+E]=f-C<<24|64<<16|0),l.bits=p,0};var La=R4;const M4=0,M2=1,O2=2,{Z_FINISH:l1,Z_BLOCK:O4,Z_TREES:vs,Z_OK:fo,Z_STREAM_END:F4,Z_NEED_DICT:D4,Z_STREAM_ERROR:xn,Z_DATA_ERROR:F2,Z_MEM_ERROR:D2,Z_BUF_ERROR:z4,Z_DEFLATED:c1}=j2,Zs=16180,u1=16181,h1=16182,f1=16183,d1=16184,p1=16185,m1=16186,g1=16187,v1=16188,b1=16189,zs=16190,ci=16191,Ol=16192,x1=16193,Fl=16194,w1=16195,y1=16196,S1=16197,_1=16198,bs=16199,xs=16200,C1=16201,A1=16202,k1=16203,L1=16204,N1=16205,Dl=16206,I1=16207,T1=16208,Vt=16209,z2=16210,B2=16211,B4=852,U4=592,q4=15,H4=q4,P1=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function $4(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const mo=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<Zs||t.mode>B2?1:0},U2=e=>{if(mo(e))return xn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=Zs,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(B4),t.distcode=t.distdyn=new Int32Array(U4),t.sane=1,t.back=-1,fo},q2=e=>{if(mo(e))return xn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,U2(e)},H2=(e,t)=>{let r;if(mo(e))return xn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?xn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,q2(e))},$2=(e,t)=>{if(!e)return xn;const r=new $4;e.state=r,r.strm=e,r.window=null,r.mode=Zs;const n=H2(e,t);return n!==fo&&(e.state=null),n},V4=e=>$2(e,H4);let j1=!0,zl,Bl;const W4=e=>{if(j1){zl=new Int32Array(512),Bl=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(La(M2,e.lens,0,288,zl,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;La(O2,e.lens,0,32,Bl,0,e.work,{bits:5}),j1=!1}e.lencode=zl,e.lenbits=9,e.distcode=Bl,e.distbits=5},V2=(e,t,r,n)=>{let o;const a=e.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),n>=a.wsize?(a.window.set(t.subarray(r-a.wsize,r),0),a.wnext=0,a.whave=a.wsize):(o=a.wsize-a.wnext,o>n&&(o=n),a.window.set(t.subarray(r-n,r-n+o),a.wnext),n-=o,n?(a.window.set(t.subarray(r-n,r),0),a.wnext=n,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0},G4=(e,t)=>{let r,n,o,a,c,l,h,f,d,x,S,p,w,C,k=0,y,E,P,R,V,Q,X,J;const D=new Uint8Array(4);let ee,N;const M=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(mo(e)||!e.output||!e.input&&e.avail_in!==0)return xn;r=e.state,r.mode===ci&&(r.mode=Ol),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,d=r.bits,x=l,S=h,J=fo;e:for(;;)switch(r.mode){case Zs:if(r.wrap===0){r.mode=Ol;break}for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,D[0]=f&255,D[1]=f>>>8&255,r.check=Dn(r.check,D,2,0),f=0,d=0,r.mode=u1;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=Vt;break}if((f&15)!==c1){e.msg="unknown compression method",r.mode=Vt;break}if(f>>>=4,d-=4,X=(f&15)+8,r.wbits===0&&(r.wbits=X),X>15||X>r.wbits){e.msg="invalid window size",r.mode=Vt;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?b1:ci,f=0,d=0;break;case u1:for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.flags=f,(r.flags&255)!==c1){e.msg="unknown compression method",r.mode=Vt;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=Vt;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,r.check=Dn(r.check,D,2,0)),f=0,d=0,r.mode=h1;case h1:for(;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,D[2]=f>>>16&255,D[3]=f>>>24&255,r.check=Dn(r.check,D,4,0)),f=0,d=0,r.mode=f1;case f1:for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,r.check=Dn(r.check,D,2,0)),f=0,d=0,r.mode=d1;case d1:if(r.flags&1024){for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,r.check=Dn(r.check,D,2,0)),f=0,d=0}else r.head&&(r.head.extra=null);r.mode=p1;case p1:if(r.flags&1024&&(p=r.length,p>l&&(p=l),p&&(r.head&&(X=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(a,a+p),X)),r.flags&512&&r.wrap&4&&(r.check=Dn(r.check,n,p,a)),l-=p,a+=p,r.length-=p),r.length))break e;r.length=0,r.mode=m1;case m1:if(r.flags&2048){if(l===0)break e;p=0;do X=n[a+p++],r.head&&X&&r.length<65536&&(r.head.name+=String.fromCharCode(X));while(X&&p<l);if(r.flags&512&&r.wrap&4&&(r.check=Dn(r.check,n,p,a)),l-=p,a+=p,X)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=g1;case g1:if(r.flags&4096){if(l===0)break e;p=0;do X=n[a+p++],r.head&&X&&r.length<65536&&(r.head.comment+=String.fromCharCode(X));while(X&&p<l);if(r.flags&512&&r.wrap&4&&(r.check=Dn(r.check,n,p,a)),l-=p,a+=p,X)break e}else r.head&&(r.head.comment=null);r.mode=v1;case v1:if(r.flags&512){for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=Vt;break}f=0,d=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=ci;break;case b1:for(;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}e.adler=r.check=P1(f),f=0,d=0,r.mode=zs;case zs:if(r.havedict===0)return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=d,D4;e.adler=r.check=1,r.mode=ci;case ci:if(t===O4||t===vs)break e;case Ol:if(r.last){f>>>=d&7,d-=d&7,r.mode=Dl;break}for(;d<3;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}switch(r.last=f&1,f>>>=1,d-=1,f&3){case 0:r.mode=x1;break;case 1:if(W4(r),r.mode=bs,t===vs){f>>>=2,d-=2;break e}break;case 2:r.mode=y1;break;case 3:e.msg="invalid block type",r.mode=Vt}f>>>=2,d-=2;break;case x1:for(f>>>=d&7,d-=d&7;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Vt;break}if(r.length=f&65535,f=0,d=0,r.mode=Fl,t===vs)break e;case Fl:r.mode=w1;case w1:if(p=r.length,p){if(p>l&&(p=l),p>h&&(p=h),p===0)break e;o.set(n.subarray(a,a+p),c),l-=p,a+=p,h-=p,c+=p,r.length-=p;break}r.mode=ci;break;case y1:for(;d<14;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.nlen=(f&31)+257,f>>>=5,d-=5,r.ndist=(f&31)+1,f>>>=5,d-=5,r.ncode=(f&15)+4,f>>>=4,d-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Vt;break}r.have=0,r.mode=S1;case S1:for(;r.have<r.ncode;){for(;d<3;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.lens[M[r.have++]]=f&7,f>>>=3,d-=3}for(;r.have<19;)r.lens[M[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,ee={bits:r.lenbits},J=La(M4,r.lens,0,19,r.lencode,0,r.work,ee),r.lenbits=ee.bits,J){e.msg="invalid code lengths set",r.mode=Vt;break}r.have=0,r.mode=_1;case _1:for(;r.have<r.nlen+r.ndist;){for(;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,E=k>>>16&255,P=k&65535,!(y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(P<16)f>>>=y,d-=y,r.lens[r.have++]=P;else{if(P===16){for(N=y+2;d<N;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(f>>>=y,d-=y,r.have===0){e.msg="invalid bit length repeat",r.mode=Vt;break}X=r.lens[r.have-1],p=3+(f&3),f>>>=2,d-=2}else if(P===17){for(N=y+3;d<N;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=y,d-=y,X=0,p=3+(f&7),f>>>=3,d-=3}else{for(N=y+7;d<N;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=y,d-=y,X=0,p=11+(f&127),f>>>=7,d-=7}if(r.have+p>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Vt;break}for(;p--;)r.lens[r.have++]=X}}if(r.mode===Vt)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=Vt;break}if(r.lenbits=9,ee={bits:r.lenbits},J=La(M2,r.lens,0,r.nlen,r.lencode,0,r.work,ee),r.lenbits=ee.bits,J){e.msg="invalid literal/lengths set",r.mode=Vt;break}if(r.distbits=6,r.distcode=r.distdyn,ee={bits:r.distbits},J=La(O2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,ee),r.distbits=ee.bits,J){e.msg="invalid distances set",r.mode=Vt;break}if(r.mode=bs,t===vs)break e;case bs:r.mode=xs;case xs:if(l>=6&&h>=258){e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=d,I4(e,S),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,d=r.bits,r.mode===ci&&(r.back=-1);break}for(r.back=0;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,E=k>>>16&255,P=k&65535,!(y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(E&&!(E&240)){for(R=y,V=E,Q=P;k=r.lencode[Q+((f&(1<<R+V)-1)>>R)],y=k>>>24,E=k>>>16&255,P=k&65535,!(R+y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=R,d-=R,r.back+=R}if(f>>>=y,d-=y,r.back+=y,r.length=P,E===0){r.mode=N1;break}if(E&32){r.back=-1,r.mode=ci;break}if(E&64){e.msg="invalid literal/length code",r.mode=Vt;break}r.extra=E&15,r.mode=C1;case C1:if(r.extra){for(N=r.extra;d<N;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,d-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=A1;case A1:for(;k=r.distcode[f&(1<<r.distbits)-1],y=k>>>24,E=k>>>16&255,P=k&65535,!(y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(!(E&240)){for(R=y,V=E,Q=P;k=r.distcode[Q+((f&(1<<R+V)-1)>>R)],y=k>>>24,E=k>>>16&255,P=k&65535,!(R+y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=R,d-=R,r.back+=R}if(f>>>=y,d-=y,r.back+=y,E&64){e.msg="invalid distance code",r.mode=Vt;break}r.offset=P,r.extra=E&15,r.mode=k1;case k1:if(r.extra){for(N=r.extra;d<N;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,d-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Vt;break}r.mode=L1;case L1:if(h===0)break e;if(p=S-h,r.offset>p){if(p=r.offset-p,p>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Vt;break}p>r.wnext?(p-=r.wnext,w=r.wsize-p):w=r.wnext-p,p>r.length&&(p=r.length),C=r.window}else C=o,w=c-r.offset,p=r.length;p>h&&(p=h),h-=p,r.length-=p;do o[c++]=C[w++];while(--p);r.length===0&&(r.mode=xs);break;case N1:if(h===0)break e;o[c++]=r.length,h--,r.mode=xs;break;case Dl:if(r.wrap){for(;d<32;){if(l===0)break e;l--,f|=n[a++]<<d,d+=8}if(S-=h,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Dn(r.check,o,S,c-S):dc(r.check,o,S,c-S)),S=h,r.wrap&4&&(r.flags?f:P1(f))!==r.check){e.msg="incorrect data check",r.mode=Vt;break}f=0,d=0}r.mode=I1;case I1:if(r.wrap&&r.flags){for(;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=Vt;break}f=0,d=0}r.mode=T1;case T1:J=F4;break e;case Vt:J=F2;break e;case z2:return D2;case B2:default:return xn}return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=d,(r.wsize||S!==e.avail_out&&r.mode<Vt&&(r.mode<Dl||t!==l1))&&V2(e,e.output,e.next_out,S-e.avail_out),x-=e.avail_in,S-=e.avail_out,e.total_in+=x,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Dn(r.check,o,S,e.next_out-S):dc(r.check,o,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===ci?128:0)+(r.mode===bs||r.mode===Fl?256:0),(x===0&&S===0||t===l1)&&J===fo&&(J=z4),J},Y4=e=>{if(mo(e))return xn;let t=e.state;return t.window&&(t.window=null),e.state=null,fo},J4=(e,t)=>{if(mo(e))return xn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,fo):xn},Q4=(e,t)=>{const r=t.length;let n,o,a;return mo(e)||(n=e.state,n.wrap!==0&&n.mode!==zs)?xn:n.mode===zs&&(o=1,o=dc(o,t,r,0),o!==n.check)?F2:(a=V2(e,t,r,r),a?(n.mode=z2,D2):(n.havedict=1,fo))};var K4=q2,X4=H2,Z4=U2,e6=V4,t6=$2,r6=G4,n6=Y4,i6=J4,o6=Q4,a6="pako inflate (from Nodeca project)",ui={inflateReset:K4,inflateReset2:X4,inflateResetKeep:Z4,inflateInit:e6,inflateInit2:t6,inflate:r6,inflateEnd:n6,inflateGetHeader:i6,inflateSetDictionary:o6,inflateInfo:a6};function s6(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var l6=s6;const W2=Object.prototype.toString,{Z_NO_FLUSH:c6,Z_FINISH:u6,Z_OK:Pa,Z_STREAM_END:Ul,Z_NEED_DICT:ql,Z_STREAM_ERROR:h6,Z_DATA_ERROR:E1,Z_MEM_ERROR:f6}=j2;function Fa(e){this.options=E2.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new L4,this.strm.avail_out=0;let r=ui.inflateInit2(this.strm,t.windowBits);if(r!==Pa)throw new Error(pc[r]);if(this.header=new l6,ui.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=mc.string2buf(t.dictionary):W2.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=ui.inflateSetDictionary(this.strm,t.dictionary),r!==Pa)))throw new Error(pc[r])}Fa.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,o=this.options.dictionary;let a,c,l;if(this.ended)return!1;for(t===~~t?c=t:c=t===!0?u6:c6,W2.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),a=ui.inflate(r,c),a===ql&&o&&(a=ui.inflateSetDictionary(r,o),a===Pa?a=ui.inflate(r,c):a===E1&&(a=ql));r.avail_in>0&&a===Ul&&r.state.wrap>0&&e[r.next_in]!==0;)ui.inflateReset(r),a=ui.inflate(r,c);switch(a){case h6:case E1:case ql:case f6:return this.onEnd(a),this.ended=!0,!1}if(l=r.avail_out,r.next_out&&(r.avail_out===0||a===Ul))if(this.options.to==="string"){let h=mc.utf8border(r.output,r.next_out),f=r.next_out-h,d=mc.buf2string(r.output,h);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(h,h+f),0),this.onData(d)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(a===Pa&&l===0)){if(a===Ul)return a=ui.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Fa.prototype.onData=function(e){this.chunks.push(e)};Fa.prototype.onEnd=function(e){e===Pa&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=E2.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function d6(e,t){const r=new Fa(t);if(r.push(e),r.err)throw r.msg||pc[r.err];return r.result}var p6=Fa,m6=d6,g6={Inflate:p6,inflate:m6};const{Inflate:v6,inflate:b6}=g6;var R1=v6,x6=b6;const G2=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;G2[e]=t}const M1=4294967295;function w6(e,t,r){let n=e;for(let o=0;o<r;o++)n=G2[(n^t[o])&255]^n>>>8;return n}function y6(e,t){return(w6(M1,e,t)^M1)>>>0}function O1(e,t,r){const n=e.readUint32(),o=y6(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(o!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${o}`)}function Y2(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function J2(e,t,r,n){let o=0;for(;o<n;o++)t[o]=e[o];for(;o<r;o++)t[o]=e[o]+t[o-n]&255}function Q2(e,t,r,n){let o=0;if(r.length===0)for(;o<n;o++)t[o]=e[o];else for(;o<n;o++)t[o]=e[o]+r[o]&255}function K2(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+(t[a-o]>>1)&255}else{for(;a<o;a++)t[a]=e[a]+(r[a]>>1)&255;for(;a<n;a++)t[a]=e[a]+(t[a-o]+r[a]>>1)&255}}function X2(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+t[a-o]&255}else{for(;a<o;a++)t[a]=e[a]+r[a]&255;for(;a<n;a++)t[a]=e[a]+S6(t[a-o],r[a],r[a-o])&255}}function S6(e,t,r){const n=e+t-r,o=Math.abs(n-e),a=Math.abs(n-t),c=Math.abs(n-r);return o<=a&&o<=c?e:a<=c?t:r}function _6(e,t,r,n,o,a){switch(e){case 0:Y2(t,r,o);break;case 1:J2(t,r,o,a);break;case 2:Q2(t,r,n,o);break;case 3:K2(t,r,n,o,a);break;case 4:X2(t,r,n,o,a);break;default:throw new Error(`Unsupported filter: ${e}`)}}const C6=new Uint16Array([255]),A6=new Uint8Array(C6.buffer),k6=A6[0]===255;function L6(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],l=Math.ceil(a/8)*o,h=new Uint8Array(n*r*l);let f=0;for(let d=0;d<7;d++){const x=c[d],S=Math.ceil((r-x.x)/x.xStep),p=Math.ceil((n-x.y)/x.yStep);if(S<=0||p<=0)continue;const w=S*l,C=new Uint8Array(w);for(let k=0;k<p;k++){const y=t[f++],E=t.subarray(f,f+w);f+=w;const P=new Uint8Array(w);_6(y,E,P,C,w,l),C.set(P);for(let R=0;R<S;R++){const V=x.x+R*x.xStep,Q=x.y+k*x.yStep;if(!(V>=r||Q>=n))for(let X=0;X<l;X++)h[(Q*r+V)*l+X]=P[R*l+X]}}}if(a===16){const d=new Uint16Array(h.buffer);if(k6)for(let x=0;x<d.length;x++)d[x]=N6(d[x]);return d}else return h}function N6(e){return(e&255)<<8|e>>8&255}const I6=new Uint16Array([255]),T6=new Uint8Array(I6.buffer),P6=T6[0]===255,j6=new Uint8Array(0);function F1(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=Math.ceil(a/8)*o,l=Math.ceil(a/8*o*r),h=new Uint8Array(n*l);let f=j6,d=0,x,S;for(let p=0;p<n;p++){switch(x=t.subarray(d+1,d+1+l),S=h.subarray(p*l,(p+1)*l),t[d]){case 0:Y2(x,S,l);break;case 1:J2(x,S,l,c);break;case 2:Q2(x,S,f,l);break;case 3:K2(x,S,f,l,c);break;case 4:X2(x,S,f,l,c);break;default:throw new Error(`Unsupported filter: ${t[d]}`)}f=S,d+=l+1}if(a===16){const p=new Uint16Array(h.buffer);if(P6)for(let w=0;w<p.length;w++)p[w]=E6(p[w]);return p}else return h}function E6(e){return(e&255)<<8|e>>8&255}const Is=Uint8Array.of(137,80,78,71,13,10,26,10);function D1(e){if(!R6(e.readBytes(Is.length)))throw new Error("wrong PNG signature")}function R6(e){if(e.length<Is.length)return!1;for(let t=0;t<Is.length;t++)if(e[t]!==Is[t])return!1;return!0}const M6="tEXt",O6=0,Z2=new TextDecoder("latin1");function F6(e){if(z6(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const D6=/^[\u0000-\u00FF]*$/;function z6(e){if(!D6.test(e))throw new Error("invalid latin1 text")}function B6(e,t,r){const n=e0(t);e[n]=U6(t,r-n.length-1)}function e0(e){for(e.mark();e.readByte()!==O6;);const t=e.offset;e.reset();const r=Z2.decode(e.readBytes(t-e.offset-1));return e.skip(1),F6(r),r}function U6(e,t){return Z2.decode(e.readBytes(t))}const on={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Hl={UNKNOWN:-1,DEFLATE:0},z1={UNKNOWN:-1,ADAPTIVE:0},$l={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},ws={NONE:0,BACKGROUND:1,PREVIOUS:2},Vl={SOURCE:0,OVER:1};class q6 extends Uc{constructor(r,n={}){super(r);Te(this,"_checkCrc");Te(this,"_inflator");Te(this,"_png");Te(this,"_apng");Te(this,"_end");Te(this,"_hasPalette");Te(this,"_palette");Te(this,"_hasTransparency");Te(this,"_transparency");Te(this,"_compressionMethod");Te(this,"_filterMethod");Te(this,"_interlaceMethod");Te(this,"_colorType");Te(this,"_isAnimated");Te(this,"_numberOfFrames");Te(this,"_numberOfPlays");Te(this,"_frames");Te(this,"_writingDataChunks");const{checkCrc:o=!1}=n;this._checkCrc=o,this._inflator=new R1,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Hl.UNKNOWN,this._filterMethod=z1.UNKNOWN,this._interlaceMethod=$l.UNKNOWN,this._colorType=on.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(D1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(D1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const o=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case M6:B6(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?O1(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const o=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=o+r;break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?O1(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=H6(this.readUint8());const n=this.readUint8();this._colorType=n;let o;switch(n){case on.GREYSCALE:o=1;break;case on.TRUECOLOUR:o=3;break;case on.INDEXED_COLOUR:o=1;break;case on.GREYSCALE_ALPHA:o=2;break;case on.TRUECOLOUR_ALPHA:o=4;break;case on.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=o,this._compressionMethod=this.readUint8(),this._compressionMethod!==Hl.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const o=[];this._palette=o;for(let a=0;a<n;a++)o.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,o=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,o=this.offset+this.byteOffset;if(o+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case on.GREYSCALE:case on.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case on.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const o=this.readByte();this._palette[n].push(o)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case on.UNKNOWN:case on.GREYSCALE_ALPHA:case on.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=e0(this),o=this.readUint8();if(o!==Hl.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${o}`);const a=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:x6(a)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),o=this.readByte();this._png.resolution={x:r,y:n,unit:o}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},o=this._frames.at(r);if(o){if(o.data=F1({data:o.data,width:o.width,height:o.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||o.xOffset===0&&o.yOffset===0&&o.width===this._png.width&&o.height===this._png.height)n.data=o.data;else{const a=this._apng.frames.at(r-1);this.disposeFrame(o,a,n),this.addFrameDataToCanvas(n,o)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,o){switch(r.disposeOp){case ws.NONE:break;case ws.BACKGROUND:for(let a=0;a<this._png.height;a++)for(let c=0;c<this._png.width;c++){const l=(a*r.width+c)*this._png.channels;for(let h=0;h<this._png.channels;h++)o.data[l+h]=0}break;case ws.PREVIOUS:o.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const o=1<<this._png.depth,a=(c,l)=>{const h=((c+n.yOffset)*this._png.width+n.xOffset+l)*this._png.channels,f=(c*n.width+l)*this._png.channels;return{index:h,frameIndex:f}};switch(n.blendOp){case Vl.SOURCE:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let d=0;d<this._png.channels;d++)r.data[h+d]=n.data[f+d]}break;case Vl.OVER:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let d=0;d<this._png.channels;d++){const x=n.data[f+this._png.channels-1]/o,S=d%(this._png.channels-1)===0?1:n.data[f+d],p=Math.floor(x*S+(1-x)*r.data[h+d]);r.data[h+d]+=p}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==z1.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===$l.NO_INTERLACE)this._png.data=F1({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===$l.ADAM7)this._png.data=L6({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:ws.NONE,blendOp:Vl.SOURCE,data:r}),this._inflator=new R1,this._writingDataChunks=!1}}function H6(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var B1;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(B1||(B1={}));function $6(e,t){return new q6(e,t).decode()}var tt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function Wl(){tt.console&&typeof tt.console.log=="function"&&tt.console.log.apply(tt.console,arguments)}var Ot={log:Wl,warn:function(e){tt.console&&(typeof tt.console.warn=="function"?tt.console.warn.apply(tt.console,arguments):Wl.call(null,arguments))},error:function(e){tt.console&&(typeof tt.console.error=="function"?tt.console.error.apply(tt.console,arguments):Wl(e))}};function Gl(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){lo(n.response,t,r)},n.onerror=function(){Ot.error("could not download file")},n.send()}function U1(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function ys(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var lo=tt.saveAs||((typeof window>"u"?"undefined":Pt(window))!=="object"||window!==tt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=tt.URL||tt.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?U1(o.href)?Gl(e,t,r):ys(o,o.target="_blank"):ys(o)):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){ys(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(U1(e))Gl(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){ys(n)})}else navigator.msSaveOrOpenBlob(function(o,a){return a===void 0?a={autoBom:!1}:Pt(a)!=="object"&&(Ot.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return Gl(e,t,r);var o=e.type==="application/octet-stream",a=/constructor/i.test(tt.HTMLElement)||tt.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&a)&&(typeof FileReader>"u"?"undefined":Pt(FileReader))==="object"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=c?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=d:location=d,n=null},l.readAsDataURL(e)}else{var h=tt.URL||tt.webkitURL,f=h.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){h.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function t0(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(l){return[parseInt(l[1]),parseInt(l[2]),parseInt(l[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(l){return[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(l){return[parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16),parseInt(l[3]+l[3],16)]}}],n=0;n<r.length;n++){var o=r[n].re,a=r[n].process,c=o.exec(e);c&&(t=a(c),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var l=this.r.toString(16),h=this.g.toString(16),f=this.b.toString(16);return l.length==1&&(l="0"+l),h.length==1&&(h="0"+h),f.length==1&&(f="0"+f),"#"+l+h+f}}var Ts=tt.atob.bind(tt),q1=tt.btoa.bind(tt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function Yl(e,t){var r=e[0],n=e[1],o=e[2],a=e[3];r=Nr(r,n,o,a,t[0],7,-680876936),a=Nr(a,r,n,o,t[1],12,-389564586),o=Nr(o,a,r,n,t[2],17,606105819),n=Nr(n,o,a,r,t[3],22,-1044525330),r=Nr(r,n,o,a,t[4],7,-176418897),a=Nr(a,r,n,o,t[5],12,1200080426),o=Nr(o,a,r,n,t[6],17,-1473231341),n=Nr(n,o,a,r,t[7],22,-45705983),r=Nr(r,n,o,a,t[8],7,1770035416),a=Nr(a,r,n,o,t[9],12,-1958414417),o=Nr(o,a,r,n,t[10],17,-42063),n=Nr(n,o,a,r,t[11],22,-1990404162),r=Nr(r,n,o,a,t[12],7,1804603682),a=Nr(a,r,n,o,t[13],12,-40341101),o=Nr(o,a,r,n,t[14],17,-1502002290),r=Ir(r,n=Nr(n,o,a,r,t[15],22,1236535329),o,a,t[1],5,-165796510),a=Ir(a,r,n,o,t[6],9,-1069501632),o=Ir(o,a,r,n,t[11],14,643717713),n=Ir(n,o,a,r,t[0],20,-373897302),r=Ir(r,n,o,a,t[5],5,-701558691),a=Ir(a,r,n,o,t[10],9,38016083),o=Ir(o,a,r,n,t[15],14,-660478335),n=Ir(n,o,a,r,t[4],20,-405537848),r=Ir(r,n,o,a,t[9],5,568446438),a=Ir(a,r,n,o,t[14],9,-1019803690),o=Ir(o,a,r,n,t[3],14,-187363961),n=Ir(n,o,a,r,t[8],20,1163531501),r=Ir(r,n,o,a,t[13],5,-1444681467),a=Ir(a,r,n,o,t[2],9,-51403784),o=Ir(o,a,r,n,t[7],14,1735328473),r=Tr(r,n=Ir(n,o,a,r,t[12],20,-1926607734),o,a,t[5],4,-378558),a=Tr(a,r,n,o,t[8],11,-2022574463),o=Tr(o,a,r,n,t[11],16,1839030562),n=Tr(n,o,a,r,t[14],23,-35309556),r=Tr(r,n,o,a,t[1],4,-1530992060),a=Tr(a,r,n,o,t[4],11,1272893353),o=Tr(o,a,r,n,t[7],16,-155497632),n=Tr(n,o,a,r,t[10],23,-1094730640),r=Tr(r,n,o,a,t[13],4,681279174),a=Tr(a,r,n,o,t[0],11,-358537222),o=Tr(o,a,r,n,t[3],16,-722521979),n=Tr(n,o,a,r,t[6],23,76029189),r=Tr(r,n,o,a,t[9],4,-640364487),a=Tr(a,r,n,o,t[12],11,-421815835),o=Tr(o,a,r,n,t[15],16,530742520),r=Pr(r,n=Tr(n,o,a,r,t[2],23,-995338651),o,a,t[0],6,-198630844),a=Pr(a,r,n,o,t[7],10,1126891415),o=Pr(o,a,r,n,t[14],15,-1416354905),n=Pr(n,o,a,r,t[5],21,-57434055),r=Pr(r,n,o,a,t[12],6,1700485571),a=Pr(a,r,n,o,t[3],10,-1894986606),o=Pr(o,a,r,n,t[10],15,-1051523),n=Pr(n,o,a,r,t[1],21,-2054922799),r=Pr(r,n,o,a,t[8],6,1873313359),a=Pr(a,r,n,o,t[15],10,-30611744),o=Pr(o,a,r,n,t[6],15,-1560198380),n=Pr(n,o,a,r,t[13],21,1309151649),r=Pr(r,n,o,a,t[4],6,-145523070),a=Pr(a,r,n,o,t[11],10,-1120210379),o=Pr(o,a,r,n,t[2],15,718787259),n=Pr(n,o,a,r,t[9],21,-343485551),e[0]=Ui(r,e[0]),e[1]=Ui(n,e[1]),e[2]=Ui(o,e[2]),e[3]=Ui(a,e[3])}function el(e,t,r,n,o,a){return t=Ui(Ui(t,e),Ui(n,a)),Ui(t<<o|t>>>32-o,r)}function Nr(e,t,r,n,o,a,c){return el(t&r|~t&n,e,t,o,a,c)}function Ir(e,t,r,n,o,a,c){return el(t&n|r&~n,e,t,o,a,c)}function Tr(e,t,r,n,o,a,c){return el(t^r^n,e,t,o,a,c)}function Pr(e,t,r,n,o,a,c){return el(r^(t|~n),e,t,o,a,c)}function r0(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)Yl(n,V6(e.substring(t-64,t)));e=e.substring(t-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(Yl(n,o),t=0;t<16;t++)o[t]=0;return o[14]=8*r,Yl(n,o),n}function V6(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var H1="0123456789abcdef".split("");function W6(e){for(var t="",r=0;r<4;r++)t+=H1[e>>8*r+4&15]+H1[e>>8*r&15];return t}function G6(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function gc(e){return r0(e).map(G6).join("")}var Y6=function(e){for(var t=0;t<e.length;t++)e[t]=W6(e[t]);return e.join("")}(r0("hello"))!="5d41402abc4b2a76b9719d911017c592";function Ui(e,t){if(Y6){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function vc(e,t){var r,n,o,a;if(e!==r){for(var c=(o=e,a=1+(256/e.length|0),new Array(a+1).join(o)),l=[],h=0;h<256;h++)l[h]=h;var f=0;for(h=0;h<256;h++){var d=l[h];f=(f+d+c.charCodeAt(h))%256,l[h]=l[f],l[f]=d}r=e,n=l}else l=n;var x=t.length,S=0,p=0,w="";for(h=0;h<x;h++)p=(p+(d=l[S=(S+1)%256]))%256,l[S]=l[p],l[p]=d,c=l[(l[S]+l[p])%256],w+=String.fromCharCode(t.charCodeAt(h)^c);return w}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var $1={print:4,modify:8,copy:16,"annot-forms":32};function Oo(e,t,r,n){this.v=1,this.r=2;var o=192;e.forEach(function(l){if($1.perm!==void 0)throw new Error("Invalid permission: "+l);o+=$1[l]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(t+this.padding).substr(0,32),c=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,c),this.P=-(1+(255^o)),this.encryptionKey=gc(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=vc(this.encryptionKey,this.padding)}function Fo(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);t+=o<33||o===35||o===37||o===40||o===41||o===47||o===60||o===62||o===91||o===93||o===123||o===125||o>126?"#"+("0"+o.toString(16)).slice(-2):e[n]}return t}function V1(e){if(Pt(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,o){if(o=o||!1,typeof r!="string"||typeof n!="function"||typeof o!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var a=Math.random().toString(35);return t[r][a]=[n,!!o],a},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),o=[];for(var a in t[r]){var c=t[r][a];try{c[0].apply(e,n)}catch(l){tt.console&&Ot.error("jsPDF PubSub Error",l.message,l)}c[1]&&o.push(a)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Bs(e){if(!(this instanceof Bs))return new Bs(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function n0(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function co(e,t,r,n,o){if(!(this instanceof co))return new co(e,t,r,n,o);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,n0.call(this,n,o)}function Do(e,t,r,n,o){if(!(this instanceof Do))return new Do(e,t,r,n,o);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,n0.call(this,n,o)}function Ge(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],o=arguments[2],a=arguments[3],c=[],l=1,h=16,f="S",d=null;Pt(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,o=e.format||o,a=e.compress||e.compressPdf||a,(d=e.encryption||null)!==null&&(d.userPassword=d.userPassword||"",d.ownerPassword=d.ownerPassword||"",d.userPermissions=d.userPermissions||[]),l=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(h=e.floatPrecision),f=e.defaultPathOperation||"S"),c=e.filters||(a===!0?["FlateEncode"]:c),n=n||"mm",r=(""+(r||"P")).toLowerCase();var x=e.putOnlyUsedFonts||!1,S={},p={internal:{},__private__:{}};p.__private__.PubSub=V1;var w="1.3",C=p.__private__.getPdfVersion=function(){return w};p.__private__.setPdfVersion=function(m){w=m};var k={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};p.__private__.getPageFormats=function(){return k};var y=p.__private__.getPageFormat=function(m){return k[m]};o=o||"a4";var E="compat",P="advanced",R=E;function V(){this.saveGraphicsState(),W(new Qe(Ke,0,0,-Ke,0,Ji()*Ke).toString()+" cm"),this.setFontSize(this.getFontSize()/Ke),f="n",R=P}function Q(){this.restoreGraphicsState(),f="S",R=E}var X=p.__private__.combineFontStyleAndFontWeight=function(m,_){if(m=="bold"&&_=="normal"||m=="bold"&&_==400||m=="normal"&&_=="italic"||m=="bold"&&_=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return _&&(m=_==400||_==="normal"?m==="italic"?"italic":"normal":_!=700&&_!=="bold"||m!=="normal"?(_==700?"bold":_)+""+m:"bold"),m};p.advancedAPI=function(m){var _=R===E;return _&&V.call(this),typeof m!="function"||(m(this),_&&Q.call(this)),this},p.compatAPI=function(m){var _=R===P;return _&&Q.call(this),typeof m!="function"||(m(this),_&&V.call(this)),this},p.isAdvancedAPI=function(){return R===P};var J,D=function(m){if(R!==P)throw new Error(m+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},ee=p.roundToPrecision=p.__private__.roundToPrecision=function(m,_){var U=t||_;if(isNaN(m)||isNaN(U))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return m.toFixed(U).replace(/0+$/,"")};J=p.hpf=p.__private__.hpf=typeof h=="number"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return ee(m,h)}:h==="smart"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return ee(m,m>-1&&m<1?16:5)}:function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return ee(m,16)};var N=p.f2=p.__private__.f2=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f2");return ee(m,2)},M=p.__private__.f3=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f3");return ee(m,3)},Y=p.scale=p.__private__.scale=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.scale");return R===E?m*Ke:R===P?m:void 0},$=function(m){return Y(function(_){return R===E?Ji()-_:R===P?_:void 0}(m))};p.__private__.setPrecision=p.setPrecision=function(m){typeof parseInt(m,10)=="number"&&(t=parseInt(m,10))};var oe,le="00000000000000000000000000000000",fe=p.__private__.getFileId=function(){return le},ae=p.__private__.setFileId=function(m){return le=m!==void 0&&/^[a-fA-F0-9]{32}$/.test(m)?m.toUpperCase():le.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),d!==null&&($t=new Oo(d.userPermissions,d.userPassword,d.ownerPassword,le)),le};p.setFileId=function(m){return ae(m),this},p.getFileId=function(){return fe()};var pe=p.__private__.convertDateToPDFDate=function(m){var _=m.getTimezoneOffset(),U=_<0?"+":"-",K=Math.floor(Math.abs(_/60)),ie=Math.abs(_%60),we=[U,G(K),"'",G(ie),"'"].join("");return["D:",m.getFullYear(),G(m.getMonth()+1),G(m.getDate()),G(m.getHours()),G(m.getMinutes()),G(m.getSeconds()),we].join("")},ke=p.__private__.convertPDFDateToDate=function(m){var _=parseInt(m.substr(2,4),10),U=parseInt(m.substr(6,2),10)-1,K=parseInt(m.substr(8,2),10),ie=parseInt(m.substr(10,2),10),we=parseInt(m.substr(12,2),10),Ae=parseInt(m.substr(14,2),10);return new Date(_,U,K,ie,we,Ae,0)},_e=p.__private__.setCreationDate=function(m){var _;if(m===void 0&&(m=new Date),m instanceof Date)_=pe(m);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(m))throw new Error("Invalid argument passed to jsPDF.setCreationDate");_=m}return oe=_},T=p.__private__.getCreationDate=function(m){var _=oe;return m==="jsDate"&&(_=ke(oe)),_};p.setCreationDate=function(m){return _e(m),this},p.getCreationDate=function(m){return T(m)};var H,G=p.__private__.padd2=function(m){return("0"+parseInt(m)).slice(-2)},Z=p.__private__.padd2Hex=function(m){return("00"+(m=m.toString())).substr(m.length)},ne=0,ue=[],me=[],de=0,ye=[],Ie=[],Ee=!1,je=me;p.__private__.setCustomOutputDestination=function(m){Ee=!0,je=m};var ve=function(m){Ee||(je=m)};p.__private__.resetCustomOutputDestination=function(){Ee=!1,je=me};var W=p.__private__.out=function(m){return m=m.toString(),de+=m.length+1,je.push(m),je},pt=p.__private__.write=function(m){return W(arguments.length===1?m.toString():Array.prototype.join.call(arguments," "))},rt=p.__private__.getArrayBuffer=function(m){for(var _=m.length,U=new ArrayBuffer(_),K=new Uint8Array(U);_--;)K[_]=m.charCodeAt(_);return U},Ye=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];p.__private__.getStandardFonts=function(){return Ye};var Le=e.fontSize||16;p.__private__.setFontSize=p.setFontSize=function(m){return Le=R===P?m/Ke:m,this};var Ve,Re=p.__private__.getFontSize=p.getFontSize=function(){return R===E?Le:Le*Ke},Ze=e.R2L||!1;p.__private__.setR2L=p.setR2L=function(m){return Ze=m,this},p.__private__.getR2L=p.getR2L=function(){return Ze};var Ue,bt=p.__private__.setZoomMode=function(m){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(m))Ve=m;else if(isNaN(m)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(m)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+m+'" is not recognized.');Ve=m}else Ve=parseInt(m,10)};p.__private__.getZoomMode=function(){return Ve};var et,nt=p.__private__.setPageMode=function(m){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(m)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+m+'" is not recognized.');Ue=m};p.__private__.getPageMode=function(){return Ue};var Ct=p.__private__.setLayoutMode=function(m){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(m)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+m+'" is not recognized.');et=m};p.__private__.getLayoutMode=function(){return et},p.__private__.setDisplayMode=p.setDisplayMode=function(m,_,U){return bt(m),Ct(_),nt(U),this};var at={title:"",subject:"",author:"",keywords:"",creator:""};p.__private__.getDocumentProperty=function(m){if(Object.keys(at).indexOf(m)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return at[m]},p.__private__.getDocumentProperties=function(){return at},p.__private__.setDocumentProperties=p.setProperties=p.setDocumentProperties=function(m){for(var _ in at)at.hasOwnProperty(_)&&m[_]&&(at[_]=m[_]);return this},p.__private__.setDocumentProperty=function(m,_){if(Object.keys(at).indexOf(m)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return at[m]=_};var qe,Ke,He,jt,xt,De={},st={},wt=[],Je={},mt={},it={},qt={},er=null,Lt=0,Xe=[],St=new V1(p),Vn=e.hotfixes||[],br={},Vr={},sn=[],Qe=function m(_,U,K,ie,we,Ae){if(!(this instanceof m))return new m(_,U,K,ie,we,Ae);isNaN(_)&&(_=1),isNaN(U)&&(U=0),isNaN(K)&&(K=0),isNaN(ie)&&(ie=1),isNaN(we)&&(we=0),isNaN(Ae)&&(Ae=0),this._matrix=[_,U,K,ie,we,Ae]};Object.defineProperty(Qe.prototype,"sx",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Qe.prototype,"shy",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Qe.prototype,"shx",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Qe.prototype,"sy",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Qe.prototype,"tx",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Qe.prototype,"ty",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Qe.prototype,"a",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Qe.prototype,"b",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Qe.prototype,"c",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Qe.prototype,"d",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Qe.prototype,"e",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Qe.prototype,"f",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Qe.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Qe.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Qe.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Qe.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),Qe.prototype.join=function(m){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(J).join(m)},Qe.prototype.multiply=function(m){var _=m.sx*this.sx+m.shy*this.shx,U=m.sx*this.shy+m.shy*this.sy,K=m.shx*this.sx+m.sy*this.shx,ie=m.shx*this.shy+m.sy*this.sy,we=m.tx*this.sx+m.ty*this.shx+this.tx,Ae=m.tx*this.shy+m.ty*this.sy+this.ty;return new Qe(_,U,K,ie,we,Ae)},Qe.prototype.decompose=function(){var m=this.sx,_=this.shy,U=this.shx,K=this.sy,ie=this.tx,we=this.ty,Ae=Math.sqrt(m*m+_*_),Fe=(m/=Ae)*U+(_/=Ae)*K;U-=m*Fe,K-=_*Fe;var $e=Math.sqrt(U*U+K*K);return Fe/=$e,m*(K/=$e)<_*(U/=$e)&&(m=-m,_=-_,Fe=-Fe,Ae=-Ae),{scale:new Qe(Ae,0,0,$e,0,0),translate:new Qe(1,0,0,1,ie,we),rotate:new Qe(m,_,-_,m,0,0),skew:new Qe(1,0,Fe,1,0,0)}},Qe.prototype.toString=function(m){return this.join(" ")},Qe.prototype.inversed=function(){var m=this.sx,_=this.shy,U=this.shx,K=this.sy,ie=this.tx,we=this.ty,Ae=1/(m*K-_*U),Fe=K*Ae,$e=-_*Ae,ot=-U*Ae,ct=m*Ae;return new Qe(Fe,$e,ot,ct,-Fe*ie-ot*we,-$e*ie-ct*we)},Qe.prototype.applyToPoint=function(m){var _=m.x*this.sx+m.y*this.shx+this.tx,U=m.x*this.shy+m.y*this.sy+this.ty;return new Gi(_,U)},Qe.prototype.applyToRectangle=function(m){var _=this.applyToPoint(m),U=this.applyToPoint(new Gi(m.x+m.w,m.y+m.h));return new ea(_.x,_.y,U.x-_.x,U.y-_.y)},Qe.prototype.clone=function(){var m=this.sx,_=this.shy,U=this.shx,K=this.sy,ie=this.tx,we=this.ty;return new Qe(m,_,U,K,ie,we)},p.Matrix=Qe;var wn=p.matrixMult=function(m,_){return _.multiply(m)},yn=new Qe(1,0,0,1,0,0);p.unitMatrix=p.identityMatrix=yn;var Er=function(m,_){if(!mt[m]){var U=(_ instanceof co?"Sh":"P")+(Object.keys(Je).length+1).toString(10);_.id=U,mt[m]=U,Je[U]=_,St.publish("addPattern",_)}};p.ShadingPattern=co,p.TilingPattern=Do,p.addShadingPattern=function(m,_){return D("addShadingPattern()"),Er(m,_),this},p.beginTilingPattern=function(m){D("beginTilingPattern()"),ta(m.boundingBox[0],m.boundingBox[1],m.boundingBox[2]-m.boundingBox[0],m.boundingBox[3]-m.boundingBox[1],m.matrix)},p.endTilingPattern=function(m,_){D("endTilingPattern()"),_.stream=Ie[H].join(`
`),Er(m,_),St.publish("endTilingPattern",_),sn.pop().restore()};var xr,Ht=p.__private__.newObject=function(){var m=Yt();return lr(m,!0),m},Yt=p.__private__.newObjectDeferred=function(){return ne++,ue[ne]=function(){return de},ne},lr=function(m,_){return _=typeof _=="boolean"&&_,ue[m]=de,_&&W(m+" 0 obj"),m},Wn=p.__private__.newAdditionalObject=function(){var m={objId:Yt(),content:""};return ye.push(m),m},ln=Yt(),Wr=Yt(),Gr=p.__private__.decodeColorString=function(m){var _=m.split(" ");if(_.length!==2||_[1]!=="g"&&_[1]!=="G")_.length!==5||_[4]!=="k"&&_[4]!=="K"||(_=[(1-_[0])*(1-_[3]),(1-_[1])*(1-_[3]),(1-_[2])*(1-_[3]),"r"]);else{var U=parseFloat(_[0]);_=[U,U,U,"r"]}for(var K="#",ie=0;ie<3;ie++)K+=("0"+Math.floor(255*parseFloat(_[ie])).toString(16)).slice(-2);return K},Yr=p.__private__.encodeColorString=function(m){var _;typeof m=="string"&&(m={ch1:m});var U=m.ch1,K=m.ch2,ie=m.ch3,we=m.ch4,Ae=m.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof U=="string"&&U.charAt(0)!=="#"){var Fe=new t0(U);if(Fe.ok)U=Fe.toHex();else if(!/^\d*\.?\d*$/.test(U))throw new Error('Invalid color "'+U+'" passed to jsPDF.encodeColorString.')}if(typeof U=="string"&&/^#[0-9A-Fa-f]{3}$/.test(U)&&(U="#"+U[1]+U[1]+U[2]+U[2]+U[3]+U[3]),typeof U=="string"&&/^#[0-9A-Fa-f]{6}$/.test(U)){var $e=parseInt(U.substr(1),16);U=$e>>16&255,K=$e>>8&255,ie=255&$e}if(K===void 0||we===void 0&&U===K&&K===ie)_=typeof U=="string"?U+" "+Ae[0]:m.precision===2?N(U/255)+" "+Ae[0]:M(U/255)+" "+Ae[0];else if(we===void 0||Pt(we)==="object"){if(we&&!isNaN(we.a)&&we.a===0)return["1.","1.","1.",Ae[1]].join(" ");_=typeof U=="string"?[U,K,ie,Ae[1]].join(" "):m.precision===2?[N(U/255),N(K/255),N(ie/255),Ae[1]].join(" "):[M(U/255),M(K/255),M(ie/255),Ae[1]].join(" ")}else _=typeof U=="string"?[U,K,ie,we,Ae[2]].join(" "):m.precision===2?[N(U),N(K),N(ie),N(we),Ae[2]].join(" "):[M(U),M(K),M(ie),M(we),Ae[2]].join(" ");return _},Dr=p.__private__.getFilters=function(){return c},zr=p.__private__.putStream=function(m){var _=(m=m||{}).data||"",U=m.filters||Dr(),K=m.alreadyAppliedFilters||[],ie=m.addLength1||!1,we=_.length,Ae=m.objectId,Fe=function(dr){return dr};if(d!==null&&Ae===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");d!==null&&(Fe=$t.encryptor(Ae,0));var $e={};U===!0&&(U=["FlateEncode"]);var ot=m.additionalKeyValues||[],ct=($e=Ge.API.processDataByFilters!==void 0?Ge.API.processDataByFilters(_,U):{data:_,reverseChain:[]}).reverseChain+(Array.isArray(K)?K.join(" "):K.toString());if($e.data.length!==0&&(ot.push({key:"Length",value:$e.data.length}),ie===!0&&ot.push({key:"Length1",value:we})),ct.length!=0)if(ct.split("/").length-1==1)ot.push({key:"Filter",value:ct});else{ot.push({key:"Filter",value:"["+ct+"]"});for(var kt=0;kt<ot.length;kt+=1)if(ot[kt].key==="DecodeParms"){for(var Wt=[],cr=0;cr<$e.reverseChain.split("/").length-1;cr+=1)Wt.push("null");Wt.push(ot[kt].value),ot[kt].value="["+Wt.join(" ")+"]"}}W("<<");for(var Ft=0;Ft<ot.length;Ft++)W("/"+ot[Ft].key+" "+ot[Ft].value);W(">>"),$e.data.length!==0&&(W("stream"),W(Fe($e.data)),W("endstream"))},Sn=p.__private__.putPage=function(m){var _=m.number,U=m.data,K=m.objId,ie=m.contentsObjId;lr(K,!0),W("<</Type /Page"),W("/Parent "+m.rootDictionaryObjId+" 0 R"),W("/Resources "+m.resourceDictionaryObjId+" 0 R"),W("/MediaBox ["+parseFloat(J(m.mediaBox.bottomLeftX))+" "+parseFloat(J(m.mediaBox.bottomLeftY))+" "+J(m.mediaBox.topRightX)+" "+J(m.mediaBox.topRightY)+"]"),m.cropBox!==null&&W("/CropBox ["+J(m.cropBox.bottomLeftX)+" "+J(m.cropBox.bottomLeftY)+" "+J(m.cropBox.topRightX)+" "+J(m.cropBox.topRightY)+"]"),m.bleedBox!==null&&W("/BleedBox ["+J(m.bleedBox.bottomLeftX)+" "+J(m.bleedBox.bottomLeftY)+" "+J(m.bleedBox.topRightX)+" "+J(m.bleedBox.topRightY)+"]"),m.trimBox!==null&&W("/TrimBox ["+J(m.trimBox.bottomLeftX)+" "+J(m.trimBox.bottomLeftY)+" "+J(m.trimBox.topRightX)+" "+J(m.trimBox.topRightY)+"]"),m.artBox!==null&&W("/ArtBox ["+J(m.artBox.bottomLeftX)+" "+J(m.artBox.bottomLeftY)+" "+J(m.artBox.topRightX)+" "+J(m.artBox.topRightY)+"]"),typeof m.userUnit=="number"&&m.userUnit!==1&&W("/UserUnit "+m.userUnit),St.publish("putPage",{objId:K,pageContext:Xe[_],pageNumber:_,page:U}),W("/Contents "+ie+" 0 R"),W(">>"),W("endobj");var we=U.join(`
`);return R===P&&(we+=`
Q`),lr(ie,!0),zr({data:we,filters:Dr(),objectId:ie}),W("endobj"),K},cn=p.__private__.putPages=function(){var m,_,U=[];for(m=1;m<=Lt;m++)Xe[m].objId=Yt(),Xe[m].contentsObjId=Yt();for(m=1;m<=Lt;m++)U.push(Sn({number:m,data:Ie[m],objId:Xe[m].objId,contentsObjId:Xe[m].contentsObjId,mediaBox:Xe[m].mediaBox,cropBox:Xe[m].cropBox,bleedBox:Xe[m].bleedBox,trimBox:Xe[m].trimBox,artBox:Xe[m].artBox,userUnit:Xe[m].userUnit,rootDictionaryObjId:ln,resourceDictionaryObjId:Wr}));lr(ln,!0),W("<</Type /Pages");var K="/Kids [";for(_=0;_<Lt;_++)K+=U[_]+" 0 R ";W(K+"]"),W("/Count "+Lt),W(">>"),W("endobj"),St.publish("postPutPages")},un=function(m){St.publish("putFont",{font:m,out:W,newObject:Ht,putStream:zr}),m.isAlreadyPutted!==!0&&(m.objectNumber=Ht(),W("<<"),W("/Type /Font"),W("/BaseFont /"+Fo(m.postScriptName)),W("/Subtype /Type1"),typeof m.encoding=="string"&&W("/Encoding /"+m.encoding),W("/FirstChar 32"),W("/LastChar 255"),W(">>"),W("endobj"))},mi=function(m){m.objectNumber=Ht();var _=[];_.push({key:"Type",value:"/XObject"}),_.push({key:"Subtype",value:"/Form"}),_.push({key:"BBox",value:"["+[J(m.x),J(m.y),J(m.x+m.width),J(m.y+m.height)].join(" ")+"]"}),_.push({key:"Matrix",value:"["+m.matrix.toString()+"]"});var U=m.pages[1].join(`
`);zr({data:U,additionalKeyValues:_,objectId:m.objectNumber}),W("endobj")},Pn=function(m,_){_||(_=21);var U=Ht(),K=function(Ae,Fe){var $e,ot=[],ct=1/(Fe-1);for($e=0;$e<1;$e+=ct)ot.push($e);if(ot.push(1),Ae[0].offset!=0){var kt={offset:0,color:Ae[0].color};Ae.unshift(kt)}if(Ae[Ae.length-1].offset!=1){var Wt={offset:1,color:Ae[Ae.length-1].color};Ae.push(Wt)}for(var cr="",Ft=0,dr=0;dr<ot.length;dr++){for($e=ot[dr];$e>Ae[Ft+1].offset;)Ft++;var ur=Ae[Ft].offset,yr=($e-ur)/(Ae[Ft+1].offset-ur),pn=Ae[Ft].color,Ur=Ae[Ft+1].color;cr+=Z(Math.round((1-yr)*pn[0]+yr*Ur[0]).toString(16))+Z(Math.round((1-yr)*pn[1]+yr*Ur[1]).toString(16))+Z(Math.round((1-yr)*pn[2]+yr*Ur[2]).toString(16))}return cr.trim()}(m.colors,_),ie=[];ie.push({key:"FunctionType",value:"0"}),ie.push({key:"Domain",value:"[0.0 1.0]"}),ie.push({key:"Size",value:"["+_+"]"}),ie.push({key:"BitsPerSample",value:"8"}),ie.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ie.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),zr({data:K,additionalKeyValues:ie,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:U}),W("endobj"),m.objectNumber=Ht(),W("<< /ShadingType "+m.type),W("/ColorSpace /DeviceRGB");var we="/Coords ["+J(parseFloat(m.coords[0]))+" "+J(parseFloat(m.coords[1]))+" ";m.type===2?we+=J(parseFloat(m.coords[2]))+" "+J(parseFloat(m.coords[3])):we+=J(parseFloat(m.coords[2]))+" "+J(parseFloat(m.coords[3]))+" "+J(parseFloat(m.coords[4]))+" "+J(parseFloat(m.coords[5])),W(we+="]"),m.matrix&&W("/Matrix ["+m.matrix.toString()+"]"),W("/Function "+U+" 0 R"),W("/Extend [true true]"),W(">>"),W("endobj")},Gn=function(m,_){var U=Yt(),K=Ht();_.push({resourcesOid:U,objectOid:K}),m.objectNumber=K;var ie=[];ie.push({key:"Type",value:"/Pattern"}),ie.push({key:"PatternType",value:"1"}),ie.push({key:"PaintType",value:"1"}),ie.push({key:"TilingType",value:"1"}),ie.push({key:"BBox",value:"["+m.boundingBox.map(J).join(" ")+"]"}),ie.push({key:"XStep",value:J(m.xStep)}),ie.push({key:"YStep",value:J(m.yStep)}),ie.push({key:"Resources",value:U+" 0 R"}),m.matrix&&ie.push({key:"Matrix",value:"["+m.matrix.toString()+"]"}),zr({data:m.stream,additionalKeyValues:ie,objectId:m.objectNumber}),W("endobj")},Yn=function(m){for(var _ in m.objectNumber=Ht(),W("<<"),m)switch(_){case"opacity":W("/ca "+N(m[_]));break;case"stroke-opacity":W("/CA "+N(m[_]))}W(">>"),W("endobj")},gi=function(m){lr(m.resourcesOid,!0),W("<<"),W("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var _ in W("/Font <<"),De)De.hasOwnProperty(_)&&(x===!1||x===!0&&S.hasOwnProperty(_))&&W("/"+_+" "+De[_].objectNumber+" 0 R");W(">>")}(),function(){if(Object.keys(Je).length>0){for(var _ in W("/Shading <<"),Je)Je.hasOwnProperty(_)&&Je[_]instanceof co&&Je[_].objectNumber>=0&&W("/"+_+" "+Je[_].objectNumber+" 0 R");St.publish("putShadingPatternDict"),W(">>")}}(),function(_){if(Object.keys(Je).length>0){for(var U in W("/Pattern <<"),Je)Je.hasOwnProperty(U)&&Je[U]instanceof p.TilingPattern&&Je[U].objectNumber>=0&&Je[U].objectNumber<_&&W("/"+U+" "+Je[U].objectNumber+" 0 R");St.publish("putTilingPatternDict"),W(">>")}}(m.objectOid),function(){if(Object.keys(it).length>0){var _;for(_ in W("/ExtGState <<"),it)it.hasOwnProperty(_)&&it[_].objectNumber>=0&&W("/"+_+" "+it[_].objectNumber+" 0 R");St.publish("putGStateDict"),W(">>")}}(),function(){for(var _ in W("/XObject <<"),br)br.hasOwnProperty(_)&&br[_].objectNumber>=0&&W("/"+_+" "+br[_].objectNumber+" 0 R");St.publish("putXobjectDict"),W(">>")}(),W(">>"),W("endobj")},vo=function(m){st[m.fontName]=st[m.fontName]||{},st[m.fontName][m.fontStyle]=m.id},bo=function(m,_,U,K,ie){var we={id:"F"+(Object.keys(De).length+1).toString(10),postScriptName:m,fontName:_,fontStyle:U,encoding:K,isStandardFont:ie||!1,metadata:{}};return St.publish("addFont",{font:we,instance:this}),De[we.id]=we,vo(we),we.id},Br=p.__private__.pdfEscape=p.pdfEscape=function(m,_){return function(U,K){var ie,we,Ae,Fe,$e,ot,ct,kt,Wt;if(Ae=(K=K||{}).sourceEncoding||"Unicode",$e=K.outputEncoding,(K.autoencode||$e)&&De[qe].metadata&&De[qe].metadata[Ae]&&De[qe].metadata[Ae].encoding&&(Fe=De[qe].metadata[Ae].encoding,!$e&&De[qe].encoding&&($e=De[qe].encoding),!$e&&Fe.codePages&&($e=Fe.codePages[0]),typeof $e=="string"&&($e=Fe[$e]),$e)){for(ct=!1,ot=[],ie=0,we=U.length;ie<we;ie++)(kt=$e[U.charCodeAt(ie)])?ot.push(String.fromCharCode(kt)):ot.push(U[ie]),ot[ie].charCodeAt(0)>>8&&(ct=!0);U=ot.join("")}for(ie=U.length;ct===void 0&&ie!==0;)U.charCodeAt(ie-1)>>8&&(ct=!0),ie--;if(!ct)return U;for(ot=K.noBOM?[]:[254,255],ie=0,we=U.length;ie<we;ie++){if((Wt=(kt=U.charCodeAt(ie))>>8)>>8)throw new Error("Character at position "+ie+" of string '"+U+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");ot.push(Wt),ot.push(kt-(Wt<<8))}return String.fromCharCode.apply(void 0,ot)}(m,_).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},ge=p.__private__.beginPage=function(m){Ie[++Lt]=[],Xe[Lt]={objId:0,contentsObjId:0,userUnit:Number(l),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(m[0]),topRightY:Number(m[1])}},hn(Lt),ve(Ie[H])},gt=function(m,_){var U,K,ie;switch(r=_||r,typeof m=="string"&&(U=y(m.toLowerCase()),Array.isArray(U)&&(K=U[0],ie=U[1])),Array.isArray(m)&&(K=m[0]*Ke,ie=m[1]*Ke),isNaN(K)&&(K=o[0],ie=o[1]),(K>14400||ie>14400)&&(Ot.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),K=Math.min(14400,K),ie=Math.min(14400,ie)),o=[K,ie],r.substr(0,1)){case"l":ie>K&&(o=[ie,K]);break;case"p":K>ie&&(o=[ie,K])}ge(o),ol(Qo),W(So),Xo!==0&&W(Xo+" J"),Zo!==0&&W(Zo+" j"),St.publish("addPage",{pageNumber:Lt})},Jt=function(m){m>0&&m<=Lt&&(Ie.splice(m,1),Xe.splice(m,1),Lt--,H>Lt&&(H=Lt),this.setPage(H))},hn=function(m){m>0&&m<=Lt&&(H=m)},Rr=p.__private__.getNumberOfPages=p.getNumberOfPages=function(){return Ie.length-1},vi=function(m,_,U){var K,ie=void 0;return U=U||{},m=m!==void 0?m:De[qe].fontName,_=_!==void 0?_:De[qe].fontStyle,K=m.toLowerCase(),st[K]!==void 0&&st[K][_]!==void 0?ie=st[K][_]:st[m]!==void 0&&st[m][_]!==void 0?ie=st[m][_]:U.disableWarning===!1&&Ot.warn("Unable to look up font label for font '"+m+"', '"+_+"'. Refer to getFontList() for available fonts."),ie||U.noFallback||(ie=st.times[_])==null&&(ie=st.times.normal),ie},Jn=p.__private__.putInfo=function(){var m=Ht(),_=function(K){return K};for(var U in d!==null&&(_=$t.encryptor(m,0)),W("<<"),W("/Producer ("+Br(_("jsPDF "+Ge.version))+")"),at)at.hasOwnProperty(U)&&at[U]&&W("/"+U.substr(0,1).toUpperCase()+U.substr(1)+" ("+Br(_(at[U]))+")");W("/CreationDate ("+Br(_(oe))+")"),W(">>"),W("endobj")},Wo=p.__private__.putCatalog=function(m){var _=(m=m||{}).rootDictionaryObjId||ln;switch(Ht(),W("<<"),W("/Type /Catalog"),W("/Pages "+_+" 0 R"),Ve||(Ve="fullwidth"),Ve){case"fullwidth":W("/OpenAction [3 0 R /FitH null]");break;case"fullheight":W("/OpenAction [3 0 R /FitV null]");break;case"fullpage":W("/OpenAction [3 0 R /Fit]");break;case"original":W("/OpenAction [3 0 R /XYZ null null 1]");break;default:var U=""+Ve;U.substr(U.length-1)==="%"&&(Ve=parseInt(Ve)/100),typeof Ve=="number"&&W("/OpenAction [3 0 R /XYZ null null "+N(Ve)+"]")}switch(et||(et="continuous"),et){case"continuous":W("/PageLayout /OneColumn");break;case"single":W("/PageLayout /SinglePage");break;case"two":case"twoleft":W("/PageLayout /TwoColumnLeft");break;case"tworight":W("/PageLayout /TwoColumnRight")}Ue&&W("/PageMode /"+Ue),St.publish("putCatalog"),W(">>"),W("endobj")},At=p.__private__.putTrailer=function(){W("trailer"),W("<<"),W("/Size "+(ne+1)),W("/Root "+ne+" 0 R"),W("/Info "+(ne-1)+" 0 R"),d!==null&&W("/Encrypt "+$t.oid+" 0 R"),W("/ID [ <"+le+"> <"+le+"> ]"),W(">>")},bi=p.__private__.putHeader=function(){W("%PDF-"+w),W("%ºß¬à")},xo=p.__private__.putXRef=function(){var m="0000000000";W("xref"),W("0 "+(ne+1)),W("0000000000 65535 f ");for(var _=1;_<=ne;_++)typeof ue[_]=="function"?W((m+ue[_]()).slice(-10)+" 00000 n "):ue[_]!==void 0?W((m+ue[_]).slice(-10)+" 00000 n "):W("0000000000 00000 n ")},fn=p.__private__.buildDocument=function(){var m;ne=0,de=0,me=[],ue=[],ye=[],ln=Yt(),Wr=Yt(),ve(me),St.publish("buildDocument"),bi(),cn(),function(){St.publish("putAdditionalObjects");for(var U=0;U<ye.length;U++){var K=ye[U];lr(K.objId,!0),W(K.content),W("endobj")}St.publish("postPutAdditionalObjects")}(),m=[],function(){for(var U in De)De.hasOwnProperty(U)&&(x===!1||x===!0&&S.hasOwnProperty(U))&&un(De[U])}(),function(){var U;for(U in it)it.hasOwnProperty(U)&&Yn(it[U])}(),function(){for(var U in br)br.hasOwnProperty(U)&&mi(br[U])}(),function(U){var K;for(K in Je)Je.hasOwnProperty(K)&&(Je[K]instanceof co?Pn(Je[K]):Je[K]instanceof Do&&Gn(Je[K],U))}(m),St.publish("putResources"),m.forEach(gi),gi({resourcesOid:Wr,objectOid:Number.MAX_SAFE_INTEGER}),St.publish("postPutResources"),d!==null&&($t.oid=Ht(),W("<<"),W("/Filter /Standard"),W("/V "+$t.v),W("/R "+$t.r),W("/U <"+$t.toHexString($t.U)+">"),W("/O <"+$t.toHexString($t.O)+">"),W("/P "+$t.P),W(">>"),W("endobj")),Jn(),Wo();var _=de;return xo(),At(),W("startxref"),W(""+_),W("%%EOF"),ve(Ie[H]),me.join(`
`)},jn=p.__private__.getBlob=function(m){return new Blob([rt(m)],{type:"application/pdf"})},Jr=p.output=p.__private__.output=(xr=function(m,_){switch(typeof(_=_||{})=="string"?_={filename:_}:_.filename=_.filename||"generated.pdf",m){case void 0:return fn();case"save":p.save(_.filename);break;case"arraybuffer":return rt(fn());case"blob":return jn(fn());case"bloburi":case"bloburl":if(tt.URL!==void 0&&typeof tt.URL.createObjectURL=="function")return tt.URL&&tt.URL.createObjectURL(jn(fn()))||void 0;Ot.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var U="",K=fn();try{U=q1(K)}catch{U=q1(unescape(encodeURIComponent(K)))}return"data:application/pdf;filename="+_.filename+";base64,"+U;case"pdfobjectnewwindow":if(Object.prototype.toString.call(tt)==="[object Window]"){var ie="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",we=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';_.pdfObjectUrl&&(ie=_.pdfObjectUrl,we="");var Ae='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ie+'"'+we+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(_)+");<\/script></body></html>",Fe=tt.open();return Fe!==null&&Fe.document.write(Ae),Fe}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(tt)==="[object Window]"){var $e='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(_.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+_.filename+'" width="500px" height="400px" /></body></html>',ot=tt.open();if(ot!==null){ot.document.write($e);var ct=this;ot.document.documentElement.querySelector("#pdfViewer").onload=function(){ot.document.title=_.filename,ot.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ct.output("bloburl"))}}return ot}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(tt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var kt='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",_)+'"></iframe></body></html>',Wt=tt.open();if(Wt!==null&&(Wt.document.write(kt),Wt.document.title=_.filename),Wt||typeof safari>"u")return Wt;break;case"datauri":case"dataurl":return tt.document.location.href=this.output("datauristring",_);default:return null}},xr.foo=function(){try{return xr.apply(this,arguments)}catch(U){var m=U.stack||"";~m.indexOf(" at ")&&(m=m.split(" at ")[1]);var _="Error in function "+m.split(`
`)[0].split("<")[0]+": "+U.message;if(!tt.console)throw new Error(_);tt.console.error(_,U),tt.alert&&alert(_)}},xr.foo.bar=xr,xr.foo),En=function(m){return Array.isArray(Vn)===!0&&Vn.indexOf(m)>-1};switch(n){case"pt":Ke=1;break;case"mm":Ke=72/25.4;break;case"cm":Ke=72/2.54;break;case"in":Ke=72;break;case"px":Ke=En("px_scaling")==1?.75:96/72;break;case"pc":case"em":Ke=12;break;case"ex":Ke=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);Ke=n}var $t=null;_e(),ae();var xi=p.__private__.getPageInfo=p.getPageInfo=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Xe[m].objId,pageNumber:m,pageContext:Xe[m]}},wo=p.__private__.getPageInfoByObjId=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var _ in Xe)if(Xe[_].objId===m)break;return xi(_)},yo=p.__private__.getCurrentPageInfo=p.getCurrentPageInfo=function(){return{objId:Xe[H].objId,pageNumber:H,pageContext:Xe[H]}};p.addPage=function(){return gt.apply(this,arguments),this},p.setPage=function(){return hn.apply(this,arguments),ve.call(this,Ie[H]),this},p.insertPage=function(m){return this.addPage(),this.movePage(H,m),this},p.movePage=function(m,_){var U,K;if(m>_){U=Ie[m],K=Xe[m];for(var ie=m;ie>_;ie--)Ie[ie]=Ie[ie-1],Xe[ie]=Xe[ie-1];Ie[_]=U,Xe[_]=K,this.setPage(_)}else if(m<_){U=Ie[m],K=Xe[m];for(var we=m;we<_;we++)Ie[we]=Ie[we+1],Xe[we]=Xe[we+1];Ie[_]=U,Xe[_]=K,this.setPage(_)}return this},p.deletePage=function(){return Jt.apply(this,arguments),this},p.__private__.text=p.text=function(m,_,U,K,ie){var we,Ae,Fe,$e,ot,ct,kt,Wt,cr,Ft=(K=K||{}).scope||this;if(typeof m=="number"&&typeof _=="number"&&(typeof U=="string"||Array.isArray(U))){var dr=U;U=_,_=m,m=dr}if(arguments[3]instanceof Qe==0?(Fe=arguments[4],$e=arguments[5],Pt(kt=arguments[3])==="object"&&kt!==null||(typeof Fe=="string"&&($e=Fe,Fe=null),typeof kt=="string"&&($e=kt,kt=null),typeof kt=="number"&&(Fe=kt,kt=null),K={flags:kt,angle:Fe,align:$e})):(D("The transform parameter of text() with a Matrix value"),cr=ie),isNaN(_)||isNaN(U)||m==null)throw new Error("Invalid arguments passed to jsPDF.text");if(m.length===0)return Ft;var ur,yr="",pn=typeof K.lineHeightFactor=="number"?K.lineHeightFactor:$i,Ur=Ft.internal.scaleFactor;function Ha(Nt){return Nt=Nt.split("	").join(Array(K.TabLen||9).join(" ")),Br(Nt,kt)}function ko(Nt){for(var Rt,rr=Nt.concat(),pr=[],ni=rr.length;ni--;)typeof(Rt=rr.shift())=="string"?pr.push(Rt):Array.isArray(Nt)&&(Rt.length===1||Rt[1]===void 0&&Rt[2]===void 0)?pr.push(Rt[0]):pr.push([Rt[0],Rt[1],Rt[2]]);return pr}function Qi(Nt,Rt){var rr;if(typeof Nt=="string")rr=Rt(Nt)[0];else if(Array.isArray(Nt)){for(var pr,ni,ha=Nt.concat(),Io=[],Wa=ha.length;Wa--;)typeof(pr=ha.shift())=="string"?Io.push(Rt(pr)[0]):Array.isArray(pr)&&typeof pr[0]=="string"&&(ni=Rt(pr[0],pr[1],pr[2]),Io.push([ni[0],ni[1],ni[2]]));rr=Io}return rr}var Si=!1,Ki=!0;if(typeof m=="string")Si=!0;else if(Array.isArray(m)){var Xi=m.concat();Ae=[];for(var Zi,kr=Xi.length;kr--;)(typeof(Zi=Xi.shift())!="string"||Array.isArray(Zi)&&typeof Zi[0]!="string")&&(Ki=!1);Si=Ki}if(Si===!1)throw new Error('Type of text must be string or Array. "'+m+'" is not recognized.');typeof m=="string"&&(m=m.match(/[\r?\n]/)?m.split(/\r\n|\r|\n/g):[m]);var eo=Le/Ft.internal.scaleFactor,to=eo*(pn-1);switch(K.baseline){case"bottom":U-=to;break;case"top":U+=eo-to;break;case"hanging":U+=eo-2*to;break;case"middle":U+=eo/2-to}if((ct=K.maxWidth||0)>0&&(typeof m=="string"?m=Ft.splitTextToSize(m,ct):Object.prototype.toString.call(m)==="[object Array]"&&(m=m.reduce(function(Nt,Rt){return Nt.concat(Ft.splitTextToSize(Rt,ct))},[]))),we={text:m,x:_,y:U,options:K,mutex:{pdfEscape:Br,activeFontKey:qe,fonts:De,activeFontSize:Le}},St.publish("preProcessText",we),m=we.text,Fe=(K=we.options).angle,cr instanceof Qe==0&&Fe&&typeof Fe=="number"){Fe*=Math.PI/180,K.rotationDirection===0&&(Fe=-Fe),R===P&&(Fe=-Fe);var ra=Math.cos(Fe),na=Math.sin(Fe);cr=new Qe(ra,na,-na,ra,0,0)}else Fe&&Fe instanceof Qe&&(cr=Fe);R!==P||cr||(cr=yn),(ot=K.charSpace||Co)!==void 0&&(yr+=J(Y(ot))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Wt=K.horizontalScale)!==void 0&&(yr+=J(100*Wt)+` Tz
`),K.lang;var Qt=-1,ti=K.renderingMode!==void 0?K.renderingMode:K.stroke,Lo=Ft.internal.getCurrentPageInfo().pageContext;switch(ti){case 0:case!1:case"fill":Qt=0;break;case 1:case!0:case"stroke":Qt=1;break;case 2:case"fillThenStroke":Qt=2;break;case 3:case"invisible":Qt=3;break;case 4:case"fillAndAddForClipping":Qt=4;break;case 5:case"strokeAndAddPathForClipping":Qt=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Qt=6;break;case 7:case"addToPathForClipping":Qt=7}var $a=Lo.usedRenderingMode!==void 0?Lo.usedRenderingMode:-1;Qt!==-1?yr+=Qt+` Tr
`:$a!==-1&&(yr+=`0 Tr
`),Qt!==-1&&(Lo.usedRenderingMode=Qt),$e=K.align||"left";var mn,ro=Le*pn,ia=Ft.internal.pageSize.getWidth(),oa=De[qe];ot=K.charSpace||Co,ct=K.maxWidth||0,kt=Object.assign({autoencode:!0,noBOM:!0},K.flags);var _i=[],no=function(Nt){return Ft.getStringUnitWidth(Nt,{font:oa,charSpace:ot,fontSize:Le,doKerning:!1})*Le/Ur};if(Object.prototype.toString.call(m)==="[object Array]"){var Qr;Ae=ko(m),$e!=="left"&&(mn=Ae.map(no));var Kr,Ci=0;if($e==="right"){_-=mn[0],m=[],kr=Ae.length;for(var ri=0;ri<kr;ri++)ri===0?(Kr=Kn(_),Qr=Xn(U)):(Kr=Y(Ci-mn[ri]),Qr=-ro),m.push([Ae[ri],Kr,Qr]),Ci=mn[ri]}else if($e==="center"){_-=mn[0]/2,m=[],kr=Ae.length;for(var Ai=0;Ai<kr;Ai++)Ai===0?(Kr=Kn(_),Qr=Xn(U)):(Kr=Y((Ci-mn[Ai])/2),Qr=-ro),m.push([Ae[Ai],Kr,Qr]),Ci=mn[Ai]}else if($e==="left"){m=[],kr=Ae.length;for(var aa=0;aa<kr;aa++)m.push(Ae[aa])}else if($e==="justify"&&oa.encoding==="Identity-H"){m=[],kr=Ae.length,ct=ct!==0?ct:ia;for(var No=0,tr=0;tr<kr;tr++)if(Qr=tr===0?Xn(U):-ro,Kr=tr===0?Kn(_):No,tr<kr-1){var Va=Y((ct-mn[tr])/(Ae[tr].split(" ").length-1)),Mn=Ae[tr].split(" ");m.push([Mn[0]+" ",Kr,Qr]),No=0;for(var On=1;On<Mn.length;On++){var sa=(no(Mn[On-1]+" "+Mn[On])-no(Mn[On]))*Ur+Va;On==Mn.length-1?m.push([Mn[On],sa,0]):m.push([Mn[On]+" ",sa,0]),No-=sa}}else m.push([Ae[tr],Kr,Qr]);m.push(["",No,0])}else{if($e!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(m=[],kr=Ae.length,ct=ct!==0?ct:ia,tr=0;tr<kr;tr++){Qr=tr===0?Xn(U):-ro,Kr=tr===0?Kn(_):0;var la=Ae[tr].split(" ").length-1,ca=la>0?(ct-mn[tr])/la:0;tr<kr-1?_i.push(J(Y(ca))):_i.push(0),m.push([Ae[tr],Kr,Qr])}}}(typeof K.R2L=="boolean"?K.R2L:Ze)===!0&&(m=Qi(m,function(Nt,Rt,rr){return[Nt.split("").reverse().join(""),Rt,rr]})),we={text:m,x:_,y:U,options:K,mutex:{pdfEscape:Br,activeFontKey:qe,fonts:De,activeFontSize:Le}},St.publish("postProcessText",we),m=we.text,ur=we.mutex.isHex||!1;var ua=De[qe].encoding;ua!=="WinAnsiEncoding"&&ua!=="StandardEncoding"||(m=Qi(m,function(Nt,Rt,rr){return[Ha(Nt),Rt,rr]})),Ae=ko(m),m=[];for(var ki,Li,Ni,io=Array.isArray(Ae[0])?1:0,Ii="",oo=function(Nt,Rt,rr){var pr="";return rr instanceof Qe?(rr=typeof K.angle=="number"?wn(rr,new Qe(1,0,0,1,Nt,Rt)):wn(new Qe(1,0,0,1,Nt,Rt),rr),R===P&&(rr=wn(new Qe(1,0,0,-1,0,0),rr)),pr=rr.join(" ")+` Tm
`):pr=J(Nt)+" "+J(Rt)+` Td
`,pr},gn=0;gn<Ae.length;gn++){switch(Ii="",io){case 1:Ni=(ur?"<":"(")+Ae[gn][0]+(ur?">":")"),ki=parseFloat(Ae[gn][1]),Li=parseFloat(Ae[gn][2]);break;case 0:Ni=(ur?"<":"(")+Ae[gn]+(ur?">":")"),ki=Kn(_),Li=Xn(U)}_i!==void 0&&_i[gn]!==void 0&&(Ii=_i[gn]+` Tw
`),gn===0?m.push(Ii+oo(ki,Li,cr)+Ni):io===0?m.push(Ii+Ni):io===1&&m.push(Ii+oo(ki,Li,cr)+Ni)}m=io===0?m.join(` Tj
T* `):m.join(` Tj
`),m+=` Tj
`;var Fn=`BT
/`;return Fn+=qe+" "+Le+` Tf
`,Fn+=J(Le*pn)+` TL
`,Fn+=Vi+`
`,Fn+=yr,Fn+=m,W(Fn+="ET"),S[qe]=!0,Ft};var Go=p.__private__.clip=p.clip=function(m){return W(m==="evenodd"?"W*":"W"),this};p.clipEvenOdd=function(){return Go("evenodd")},p.__private__.discardPath=p.discardPath=function(){return W("n"),this};var dn=p.__private__.isValidStyle=function(m){var _=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(m)!==-1&&(_=!0),_};p.__private__.setDefaultPathOperation=p.setDefaultPathOperation=function(m){return dn(m)&&(f=m),this};var Rn=p.__private__.getStyle=p.getStyle=function(m){var _=f;switch(m){case"D":case"S":_="S";break;case"F":_="f";break;case"FD":case"DF":_="B";break;case"f":case"f*":case"B":case"B*":_=m}return _},Qn=p.close=function(){return W("h"),this};p.stroke=function(){return W("S"),this},p.fill=function(m){return wi("f",m),this},p.fillEvenOdd=function(m){return wi("f*",m),this},p.fillStroke=function(m){return wi("B",m),this},p.fillStrokeEvenOdd=function(m){return wi("B*",m),this};var wi=function(m,_){Pt(_)==="object"?rl(_,m):W(m)},Yo=function(m){m===null||R===P&&m===void 0||(m=Rn(m),W(m))};function tl(m,_,U,K,ie){var we=new Do(_||this.boundingBox,U||this.xStep,K||this.yStep,this.gState,ie||this.matrix);we.stream=this.stream;var Ae=m+"$$"+this.cloneIndex+++"$$";return Er(Ae,we),we}var rl=function(m,_){var U=mt[m.key],K=Je[U];if(K instanceof co)W("q"),W(nl(_)),K.gState&&p.setGState(K.gState),W(m.matrix.toString()+" cm"),W("/"+U+" sh"),W("Q");else if(K instanceof Do){var ie=new Qe(1,0,0,-1,0,Ji());m.matrix&&(ie=ie.multiply(m.matrix||yn),U=tl.call(K,m.key,m.boundingBox,m.xStep,m.yStep,ie).id),W("q"),W("/Pattern cs"),W("/"+U+" scn"),K.gState&&p.setGState(K.gState),W(_),W("Q")}},nl=function(m){switch(m){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},Jo=p.moveTo=function(m,_){return W(J(Y(m))+" "+J($(_))+" m"),this},Hi=p.lineTo=function(m,_){return W(J(Y(m))+" "+J($(_))+" l"),this},yi=p.curveTo=function(m,_,U,K,ie,we){return W([J(Y(m)),J($(_)),J(Y(U)),J($(K)),J(Y(ie)),J($(we)),"c"].join(" ")),this};p.__private__.line=p.line=function(m,_,U,K,ie){if(isNaN(m)||isNaN(_)||isNaN(U)||isNaN(K)||!dn(ie))throw new Error("Invalid arguments passed to jsPDF.line");return R===E?this.lines([[U-m,K-_]],m,_,[1,1],ie||"S"):this.lines([[U-m,K-_]],m,_,[1,1]).stroke()},p.__private__.lines=p.lines=function(m,_,U,K,ie,we){var Ae,Fe,$e,ot,ct,kt,Wt,cr,Ft,dr,ur,yr;if(typeof m=="number"&&(yr=U,U=_,_=m,m=yr),K=K||[1,1],we=we||!1,isNaN(_)||isNaN(U)||!Array.isArray(m)||!Array.isArray(K)||!dn(ie)||typeof we!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(Jo(_,U),Ae=K[0],Fe=K[1],ot=m.length,dr=_,ur=U,$e=0;$e<ot;$e++)(ct=m[$e]).length===2?(dr=ct[0]*Ae+dr,ur=ct[1]*Fe+ur,Hi(dr,ur)):(kt=ct[0]*Ae+dr,Wt=ct[1]*Fe+ur,cr=ct[2]*Ae+dr,Ft=ct[3]*Fe+ur,dr=ct[4]*Ae+dr,ur=ct[5]*Fe+ur,yi(kt,Wt,cr,Ft,dr,ur));return we&&Qn(),Yo(ie),this},p.path=function(m){for(var _=0;_<m.length;_++){var U=m[_],K=U.c;switch(U.op){case"m":Jo(K[0],K[1]);break;case"l":Hi(K[0],K[1]);break;case"c":yi.apply(this,K);break;case"h":Qn()}}return this},p.__private__.rect=p.rect=function(m,_,U,K,ie){if(isNaN(m)||isNaN(_)||isNaN(U)||isNaN(K)||!dn(ie))throw new Error("Invalid arguments passed to jsPDF.rect");return R===E&&(K=-K),W([J(Y(m)),J($(_)),J(Y(U)),J(Y(K)),"re"].join(" ")),Yo(ie),this},p.__private__.triangle=p.triangle=function(m,_,U,K,ie,we,Ae){if(isNaN(m)||isNaN(_)||isNaN(U)||isNaN(K)||isNaN(ie)||isNaN(we)||!dn(Ae))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[U-m,K-_],[ie-U,we-K],[m-ie,_-we]],m,_,[1,1],Ae,!0),this},p.__private__.roundedRect=p.roundedRect=function(m,_,U,K,ie,we,Ae){if(isNaN(m)||isNaN(_)||isNaN(U)||isNaN(K)||isNaN(ie)||isNaN(we)||!dn(Ae))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Fe=4/3*(Math.SQRT2-1);return ie=Math.min(ie,.5*U),we=Math.min(we,.5*K),this.lines([[U-2*ie,0],[ie*Fe,0,ie,we-we*Fe,ie,we],[0,K-2*we],[0,we*Fe,-ie*Fe,we,-ie,we],[2*ie-U,0],[-ie*Fe,0,-ie,-we*Fe,-ie,-we],[0,2*we-K],[0,-we*Fe,ie*Fe,-we,ie,-we]],m+ie,_,[1,1],Ae,!0),this},p.__private__.ellipse=p.ellipse=function(m,_,U,K,ie){if(isNaN(m)||isNaN(_)||isNaN(U)||isNaN(K)||!dn(ie))throw new Error("Invalid arguments passed to jsPDF.ellipse");var we=4/3*(Math.SQRT2-1)*U,Ae=4/3*(Math.SQRT2-1)*K;return Jo(m+U,_),yi(m+U,_-Ae,m+we,_-K,m,_-K),yi(m-we,_-K,m-U,_-Ae,m-U,_),yi(m-U,_+Ae,m-we,_+K,m,_+K),yi(m+we,_+K,m+U,_+Ae,m+U,_),Yo(ie),this},p.__private__.circle=p.circle=function(m,_,U,K){if(isNaN(m)||isNaN(_)||isNaN(U)||!dn(K))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(m,_,U,U,K)},p.setFont=function(m,_,U){return U&&(_=X(_,U)),qe=vi(m,_,{disableWarning:!1}),this};var il=p.__private__.getFont=p.getFont=function(){return De[vi.apply(p,arguments)]};p.__private__.getFontList=p.getFontList=function(){var m,_,U={};for(m in st)if(st.hasOwnProperty(m))for(_ in U[m]=[],st[m])st[m].hasOwnProperty(_)&&U[m].push(_);return U},p.addFont=function(m,_,U,K,ie){var we=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&we.indexOf(arguments[3])!==-1?ie=arguments[3]:arguments[3]&&we.indexOf(arguments[3])==-1&&(U=X(U,K)),bo.call(this,m,_,U,ie=ie||"Identity-H")};var $i,Qo=e.lineWidth||.200025,lt=p.__private__.getLineWidth=p.getLineWidth=function(){return Qo},ol=p.__private__.setLineWidth=p.setLineWidth=function(m){return Qo=m,W(J(Y(m))+" w"),this};p.__private__.setLineDash=Ge.API.setLineDash=Ge.API.setLineDashPattern=function(m,_){if(m=m||[],_=_||0,isNaN(_)||!Array.isArray(m))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return m=m.map(function(U){return J(Y(U))}).join(" "),_=J(Y(_)),W("["+m+"] "+_+" d"),this};var al=p.__private__.getLineHeight=p.getLineHeight=function(){return Le*$i};p.__private__.getLineHeight=p.getLineHeight=function(){return Le*$i};var sl=p.__private__.setLineHeightFactor=p.setLineHeightFactor=function(m){return typeof(m=m||1.15)=="number"&&($i=m),this},ll=p.__private__.getLineHeightFactor=p.getLineHeightFactor=function(){return $i};sl(e.lineHeight);var Kn=p.__private__.getHorizontalCoordinate=function(m){return Y(m)},Xn=p.__private__.getVerticalCoordinate=function(m){return R===P?m:Xe[H].mediaBox.topRightY-Xe[H].mediaBox.bottomLeftY-Y(m)},cl=p.__private__.getHorizontalCoordinateString=p.getHorizontalCoordinateString=function(m){return J(Kn(m))},ul=p.__private__.getVerticalCoordinateString=p.getVerticalCoordinateString=function(m){return J(Xn(m))},So=e.strokeColor||"0 G";p.__private__.getStrokeColor=p.getDrawColor=function(){return Gr(So)},p.__private__.setStrokeColor=p.setDrawColor=function(m,_,U,K){return So=Yr({ch1:m,ch2:_,ch3:U,ch4:K,pdfColorType:"draw",precision:2}),W(So),this};var Ko=e.fillColor||"0 g";p.__private__.getFillColor=p.getFillColor=function(){return Gr(Ko)},p.__private__.setFillColor=p.setFillColor=function(m,_,U,K){return Ko=Yr({ch1:m,ch2:_,ch3:U,ch4:K,pdfColorType:"fill",precision:2}),W(Ko),this};var Vi=e.textColor||"0 g",_o=p.__private__.getTextColor=p.getTextColor=function(){return Gr(Vi)};p.__private__.setTextColor=p.setTextColor=function(m,_,U,K){return Vi=Yr({ch1:m,ch2:_,ch3:U,ch4:K,pdfColorType:"text",precision:3}),this};var Co=e.charSpace,hl=p.__private__.getCharSpace=p.getCharSpace=function(){return parseFloat(Co||0)};p.__private__.setCharSpace=p.setCharSpace=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Co=m,this};var Xo=0;p.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},p.__private__.setLineCap=p.setLineCap=function(m){var _=p.CapJoinStyles[m];if(_===void 0)throw new Error("Line cap style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Xo=_,W(_+" J"),this};var Zo=0;p.__private__.setLineJoin=p.setLineJoin=function(m){var _=p.CapJoinStyles[m];if(_===void 0)throw new Error("Line join style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Zo=_,W(_+" j"),this},p.__private__.setLineMiterLimit=p.__private__.setMiterLimit=p.setLineMiterLimit=p.setMiterLimit=function(m){if(m=m||0,isNaN(m))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return W(J(Y(m))+" M"),this},p.GState=Bs,p.setGState=function(m){(m=typeof m=="string"?it[qt[m]]:Wi(null,m)).equals(er)||(W("/"+m.id+" gs"),er=m)};var Wi=function(m,_){if(!m||!qt[m]){var U=!1;for(var K in it)if(it.hasOwnProperty(K)&&it[K].equals(_)){U=!0;break}if(U)_=it[K];else{var ie="GS"+(Object.keys(it).length+1).toString(10);it[ie]=_,_.id=ie}return m&&(qt[m]=_.id),St.publish("addGState",_),_}};p.addGState=function(m,_){return Wi(m,_),this},p.saveGraphicsState=function(){return W("q"),wt.push({key:qe,size:Le,color:Vi}),this},p.restoreGraphicsState=function(){W("Q");var m=wt.pop();return qe=m.key,Le=m.size,Vi=m.color,er=null,this},p.setCurrentTransformationMatrix=function(m){return W(m.toString()+" cm"),this},p.comment=function(m){return W("#"+m),this};var Gi=function(m,_){var U=m||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return U},set:function(we){isNaN(we)||(U=parseFloat(we))}});var K=_||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return K},set:function(we){isNaN(we)||(K=parseFloat(we))}});var ie="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ie},set:function(we){ie=we.toString()}}),this},ea=function(m,_,U,K){Gi.call(this,m,_),this.type="rect";var ie=U||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ie},set:function(Ae){isNaN(Ae)||(ie=parseFloat(Ae))}});var we=K||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return we},set:function(Ae){isNaN(Ae)||(we=parseFloat(Ae))}}),this},Ao=function(){this.page=Lt,this.currentPage=H,this.pages=Ie.slice(0),this.pagesContext=Xe.slice(0),this.x=He,this.y=jt,this.matrix=xt,this.width=Da(H),this.height=Zn(H),this.outputDestination=je,this.id="",this.objectNumber=-1};Ao.prototype.restore=function(){Lt=this.page,H=this.currentPage,Xe=this.pagesContext,Ie=this.pages,He=this.x,jt=this.y,xt=this.matrix,za(H,this.width),ei(H,this.height),je=this.outputDestination};var ta=function(m,_,U,K,ie){sn.push(new Ao),Lt=H=0,Ie=[],He=m,jt=_,xt=ie,ge([U,K])};for(var Yi in p.beginFormObject=function(m,_,U,K,ie){return ta(m,_,U,K,ie),this},p.endFormObject=function(m){return function(_){if(Vr[_])sn.pop().restore();else{var U=new Ao,K="Xo"+(Object.keys(br).length+1).toString(10);U.id=K,Vr[_]=K,br[K]=U,St.publish("addFormObject",U),sn.pop().restore()}}(m),this},p.doFormObject=function(m,_){var U=br[Vr[m]];return W("q"),W(_.toString()+" cm"),W("/"+U.id+" Do"),W("Q"),this},p.getFormObject=function(m){var _=br[Vr[m]];return{x:_.x,y:_.y,width:_.width,height:_.height,matrix:_.matrix}},p.save=function(m,_){return m=m||"generated.pdf",(_=_||{}).returnPromise=_.returnPromise||!1,_.returnPromise===!1?(lo(jn(fn()),m),typeof lo.unload=="function"&&tt.setTimeout&&setTimeout(lo.unload,911),this):new Promise(function(U,K){try{var ie=lo(jn(fn()),m);typeof lo.unload=="function"&&tt.setTimeout&&setTimeout(lo.unload,911),U(ie)}catch(we){K(we.message)}})},Ge.API)Ge.API.hasOwnProperty(Yi)&&(Yi==="events"&&Ge.API.events.length?function(m,_){var U,K,ie;for(ie=_.length-1;ie!==-1;ie--)U=_[ie][0],K=_[ie][1],m.subscribe.apply(m,[U].concat(typeof K=="function"?[K]:K))}(St,Ge.API.events):p[Yi]=Ge.API[Yi]);function Da(m){return Xe[m].mediaBox.topRightX-Xe[m].mediaBox.bottomLeftX}function za(m,_){Xe[m].mediaBox.topRightX=_+Xe[m].mediaBox.bottomLeftX}function Zn(m){return Xe[m].mediaBox.topRightY-Xe[m].mediaBox.bottomLeftY}function ei(m,_){Xe[m].mediaBox.topRightY=_+Xe[m].mediaBox.bottomLeftY}var Ba=p.getPageWidth=function(m){return Da(m=m||H)/Ke},Ua=p.setPageWidth=function(m,_){za(m,_*Ke)},Ji=p.getPageHeight=function(m){return Zn(m=m||H)/Ke},qa=p.setPageHeight=function(m,_){ei(m,_*Ke)};return p.internal={pdfEscape:Br,getStyle:Rn,getFont:il,getFontSize:Re,getCharSpace:hl,getTextColor:_o,getLineHeight:al,getLineHeightFactor:ll,getLineWidth:lt,write:pt,getHorizontalCoordinate:Kn,getVerticalCoordinate:Xn,getCoordinateString:cl,getVerticalCoordinateString:ul,collections:{},newObject:Ht,newAdditionalObject:Wn,newObjectDeferred:Yt,newObjectDeferredBegin:lr,getFilters:Dr,putStream:zr,events:St,scaleFactor:Ke,pageSize:{getWidth:function(){return Ba(H)},setWidth:function(m){Ua(H,m)},getHeight:function(){return Ji(H)},setHeight:function(m){qa(H,m)}},encryptionOptions:d,encryption:$t,getEncryptor:function(m){return d!==null?$t.encryptor(m,0):function(_){return _}},output:Jr,getNumberOfPages:Rr,pages:Ie,out:W,f2:N,f3:M,getPageInfo:xi,getPageInfoByObjId:wo,getCurrentPageInfo:yo,getPDFVersion:C,Point:Gi,Rectangle:ea,Matrix:Qe,hasHotfix:En},Object.defineProperty(p.internal.pageSize,"width",{get:function(){return Ba(H)},set:function(m){Ua(H,m)},enumerable:!0,configurable:!0}),Object.defineProperty(p.internal.pageSize,"height",{get:function(){return Ji(H)},set:function(m){qa(H,m)},enumerable:!0,configurable:!0}),(function(m){for(var _=0,U=Ye.length;_<U;_++){var K=bo.call(this,m[_][0],m[_][1],m[_][2],Ye[_][3],!0);x===!1&&(S[K]=!0);var ie=m[_][0].split("-");vo({id:K,fontName:ie[0],fontStyle:ie[1]||""})}St.publish("addFonts",{fonts:De,dictionary:st})}).call(p,Ye),qe="F1",gt(o,r),St.publish("initialized"),p}Oo.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},Oo.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Oo.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},Oo.prototype.processOwnerPassword=function(e,t){return vc(gc(t).substr(0,5),e)},Oo.prototype.encryptor=function(e,t){var r=gc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return vc(r,n)}},Bs.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||Pt(e)!==Pt(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},Ge.API={events:[]},Ge.version="3.0.3";var Zt=Ge.API,qc=1,go=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Ro=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},ut=function(e){return e.toFixed(2)},Fi=function(e){return e.toFixed(5)};Zt.__acroform__={};var $r=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},W1=function(e){return e*qc},zn=function(e){var t=new o0,r=Oe.internal.getHeight(e)||0,n=Oe.internal.getWidth(e)||0;return t.BBox=[0,0,Number(ut(n)),Number(ut(r))],t},J6=Zt.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},Q6=Zt.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},K6=Zt.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},or=Zt.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return K6(e,t-1)},ar=Zt.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return J6(e,t-1)},sr=Zt.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return Q6(e,t-1)},X6=Zt.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,o=e[0],a=e[1],c=e[2],l=e[3],h={};return h.lowerLeft_X=r(o)||0,h.lowerLeft_Y=n(a+l)||0,h.upperRight_X=r(o+c)||0,h.upperRight_Y=n(a)||0,[Number(ut(h.lowerLeft_X)),Number(ut(h.lowerLeft_Y)),Number(ut(h.upperRight_X)),Number(ut(h.upperRight_Y))]},Z6=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=bc(e,r),o=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+o+" "+ut(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var a=zn(e);return a.scope=e.scope,a.stream=t.join(`
`),a}},bc=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},o=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");o=e.multiline?o.map(function(N){return N.split(`
`)}):o.map(function(N){return[N]});var a=r,c=Oe.internal.getHeight(e)||0;c=c<0?-c:c;var l=Oe.internal.getWidth(e)||0;l=l<0?-l:l;var h=function(N,M,Y){if(N+1<o.length){var $=M+" "+o[N+1][0];return Ss($,e,Y).width<=l-4}return!1};a++;e:for(;a>0;){t="",a--;var f,d,x=Ss("3",e,a).height,S=e.multiline?c-a:(c-x)/2,p=S+=2,w=0,C=0,k=0;if(a<=0){t=`(...) Tj
`,t+="% Width of Text: "+Ss(t,e,a=12).width+", FieldWidth:"+l+`
`;break}for(var y="",E=0,P=0;P<o.length;P++)if(o.hasOwnProperty(P)){var R=!1;if(o[P].length!==1&&k!==o[P].length-1){if((x+2)*(E+2)+2>c)continue e;y+=o[P][k],R=!0,C=P,P--}else{y=(y+=o[P][k]+" ").substr(y.length-1)==" "?y.substr(0,y.length-1):y;var V=parseInt(P),Q=h(V,y,a),X=P>=o.length-1;if(Q&&!X){y+=" ",k=0;continue}if(Q||X){if(X)C=V;else if(e.multiline&&(x+2)*(E+2)+2>c)continue e}else{if(!e.multiline||(x+2)*(E+2)+2>c)continue e;C=V}}for(var J="",D=w;D<=C;D++){var ee=o[D];if(e.multiline){if(D===C){J+=ee[k]+" ",k=(k+1)%ee.length;continue}if(D===w){J+=ee[ee.length-1]+" ";continue}}J+=ee[0]+" "}switch(J=J.substr(J.length-1)==" "?J.substr(0,J.length-1):J,d=Ss(J,e,a).width,e.textAlign){case"right":f=l-d-2;break;case"center":f=(l-d)/2;break;default:f=2}t+=ut(f)+" "+ut(p)+` Td
`,t+="("+go(J)+`) Tj
`,t+=-ut(f)+` 0 Td
`,p=-(a+2),d=0,w=R?C:C+1,E++,y=""}break}return n.text=t,n.fontSize=a,n},Ss=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),o=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:o}},ev={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},tv=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},rv=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(In.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(ev)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");qc=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new a0,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];a.objId=void 0,a.hasAnnotation&&tv(a,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,o){var a=!n;for(var c in n||(o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(c)){var l=n[c],h=[],f=l.Rect;if(l.Rect&&(l.Rect=X6(l.Rect,o)),o.internal.newObjectDeferredBegin(l.objId,!0),l.DA=Oe.createDefaultAppearanceStream(l),Pt(l)==="object"&&typeof l.getKeyValueListForStream=="function"&&(h=l.getKeyValueListForStream()),l.Rect=f,l.hasAppearanceStream&&!l.appearanceStreamContent){var d=Z6(l);h.push({key:"AP",value:"<</N "+d+">>"}),o.internal.acroformPlugin.xForms.push(d)}if(l.appearanceStreamContent){var x="";for(var S in l.appearanceStreamContent)if(l.appearanceStreamContent.hasOwnProperty(S)){var p=l.appearanceStreamContent[S];if(x+="/"+S+" ",x+="<<",Object.keys(p).length>=1||Array.isArray(p)){for(var c in p)if(p.hasOwnProperty(c)){var w=p[c];typeof w=="function"&&(w=w.call(o,l)),x+="/"+c+" "+w+" ",o.internal.acroformPlugin.xForms.indexOf(w)>=0||o.internal.acroformPlugin.xForms.push(w)}}else typeof(w=p)=="function"&&(w=w.call(o,l)),x+="/"+c+" "+w,o.internal.acroformPlugin.xForms.indexOf(w)>=0||o.internal.acroformPlugin.xForms.push(w);x+=">>"}h.push({key:"AP",value:`<<
`+x+">>"})}o.internal.putStream({additionalKeyValues:h,objectId:l.objId}),o.internal.out("endobj")}a&&function(C,k){for(var y in C)if(C.hasOwnProperty(y)){var E=y,P=C[y];k.internal.newObjectDeferredBegin(P.objId,!0),Pt(P)==="object"&&typeof P.putStream=="function"&&P.putStream(),delete C[E]}}(o.internal.acroformPlugin.xForms,o)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},i0=Zt.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(c){return c};if(Array.isArray(e)){for(var o="[",a=0;a<e.length;a++)switch(a!==0&&(o+=" "),Pt(e[a])){case"boolean":case"number":case"object":o+=e[a].toString();break;case"string":e[a].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),o+="("+go(n(e[a].toString()))+")"):o+=e[a].toString()}return o+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},Jl=function(e,t,r){var n=function(o){return o};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+go(n(e))+")"},Un=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Un.prototype.toString=function(){return this.objId+" 0 R"},Un.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Un.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(a){return a!="content"&&a!="appearanceStreamContent"&&a!="scope"&&a!="objId"&&a.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],o=this[n];o&&(Array.isArray(o)?e.push({key:n,value:i0(o,this.objId,this.scope)}):o instanceof Un?(o.scope=this.scope,e.push({key:n,value:o.objId+" 0 R"})):typeof o!="function"&&e.push({key:n,value:o}))}return e};var o0=function(){Un.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};$r(o0,Un);var a0=function(){Un.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+go(r(e))+")"}},set:function(r){e=r}})};$r(a0,Un);var In=function e(){Un.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute F supplied.');t=y}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!or(t,3)},set:function(y){y?this.F=ar(t,3):this.F=sr(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute Ff supplied.');r=y}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(y){n=y!==void 0?y:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(y){n[0]=y}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(y){n[1]=y}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(y){n[2]=y}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(y){n[3]=y}});var o="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return o},set:function(y){switch(y){case"/Btn":case"/Tx":case"/Ch":case"/Sig":o=y;break;default:throw new Error('Invalid value "'+y+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof Us)return;a="FieldObject"+e.FieldNum++}var y=function(E){return E};return this.scope&&(y=this.scope.internal.getEncryptor(this.objId)),"("+go(y(a))+")"},set:function(y){a=y.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(y){a=y}});var c="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return c},set:function(y){c=y}});var l="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return l},set:function(y){l=y}});var h=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return h},set:function(y){h=y}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/qc:f},set:function(y){f=y}});var d="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return d},set:function(y){d=y}});var x="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!x||this instanceof Us||this instanceof uo))return Jl(x,this.objId,this.scope)},set:function(y){y=y.toString(),x=y}});var S=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(S)return this instanceof wr==0?Jl(S,this.objId,this.scope):S},set:function(y){y=y.toString(),S=this instanceof wr==0?y.substr(0,1)==="("?Ro(y.substr(1,y.length-2)):Ro(y):y}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof wr==1?Ro(S.substr(1,S.length-1)):S},set:function(y){y=y.toString(),S=this instanceof wr==1?"/"+y:y}});var p=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(p)return p},set:function(y){this.V=y}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(p)return this instanceof wr==0?Jl(p,this.objId,this.scope):p},set:function(y){y=y.toString(),p=this instanceof wr==0?y.substr(0,1)==="("?Ro(y.substr(1,y.length-2)):Ro(y):y}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof wr==1?Ro(p.substr(1,p.length-1)):p},set:function(y){y=y.toString(),p=this instanceof wr==1?"/"+y:y}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var w,C=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return C},set:function(y){y=!!y,C=y}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(w)return w},set:function(y){w=y}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,1)},set:function(y){y?this.Ff=ar(this.Ff,1):this.Ff=sr(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,2)},set:function(y){y?this.Ff=ar(this.Ff,2):this.Ff=sr(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,3)},set:function(y){y?this.Ff=ar(this.Ff,3):this.Ff=sr(this.Ff,3)}});var k=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(k!==null)return k},set:function(y){if([0,1,2].indexOf(y)===-1)throw new Error('Invalid value "'+y+'" for attribute Q supplied.');k=y}}),Object.defineProperty(this,"textAlign",{get:function(){var y;switch(k){case 0:default:y="left";break;case 1:y="center";break;case 2:y="right"}return y},configurable:!0,enumerable:!0,set:function(y){switch(y){case"right":case 2:k=2;break;case"center":case 1:k=1;break;default:k=0}}})};$r(In,Un);var zo=function(){In.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return i0(t,this.objId,this.scope)},set:function(r){var n,o;o=[],typeof(n=r)=="string"&&(o=function(a,c,l){l||(l=1);for(var h,f=[];h=c.exec(a);)f.push(h[l]);return f}(n,/\((.*?)\)/g)),t=o}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,18)},set:function(r){r?this.Ff=ar(this.Ff,18):this.Ff=sr(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=ar(this.Ff,19):this.Ff=sr(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,20)},set:function(r){r?(this.Ff=ar(this.Ff,20),t.sort()):this.Ff=sr(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,22)},set:function(r){r?this.Ff=ar(this.Ff,22):this.Ff=sr(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,23)},set:function(r){r?this.Ff=ar(this.Ff,23):this.Ff=sr(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,27)},set:function(r){r?this.Ff=ar(this.Ff,27):this.Ff=sr(this.Ff,27)}}),this.hasAppearanceStream=!1};$r(zo,In);var Bo=function(){zo.call(this),this.fontName="helvetica",this.combo=!1};$r(Bo,zo);var Uo=function(){Bo.call(this),this.combo=!0};$r(Uo,Bo);var Ps=function(){Uo.call(this),this.edit=!0};$r(Ps,Uo);var wr=function(){In.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,15)},set:function(r){r?this.Ff=ar(this.Ff,15):this.Ff=sr(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,16)},set:function(r){r?this.Ff=ar(this.Ff,16):this.Ff=sr(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,17)},set:function(r){r?this.Ff=ar(this.Ff,17):this.Ff=sr(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,26)},set:function(r){r?this.Ff=ar(this.Ff,26):this.Ff=sr(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(a){return a};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,o=[];for(n in o.push("<<"),t)o.push("/"+n+" ("+go(r(t[n]))+")");return o.push(">>"),o.join(`
`)}},set:function(r){Pt(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};$r(wr,In);var js=function(){wr.call(this),this.pushButton=!0};$r(js,wr);var qo=function(){wr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};$r(qo,wr);var Us=function(){var e,t;In.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(o){e=o}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(o){t=o}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var o=function(l){return l};this.scope&&(o=this.scope.internal.getEncryptor(this.objId));var a,c=[];for(a in c.push("<<"),n)c.push("/"+a+" ("+go(o(n[a]))+")");return c.push(">>"),c.join(`
`)},set:function(o){Pt(o)==="object"&&(n=o)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(o){typeof o=="string"&&(n.CA=o)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(o){r=o}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(o){r="/"+o}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Oe.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};$r(Us,In),qo.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},qo.prototype.createOption=function(e){var t=new Us;return t.Parent=this,t.optionName=e,this.Kids.push(t),nv.call(this.scope,t),t};var Es=function(){wr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Oe.CheckBox.createAppearanceStream()};$r(Es,wr);var uo=function(){In.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,13)},set:function(t){t?this.Ff=ar(this.Ff,13):this.Ff=sr(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,21)},set:function(t){t?this.Ff=ar(this.Ff,21):this.Ff=sr(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,23)},set:function(t){t?this.Ff=ar(this.Ff,23):this.Ff=sr(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,24)},set:function(t){t?this.Ff=ar(this.Ff,24):this.Ff=sr(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,25)},set:function(t){t?this.Ff=ar(this.Ff,25):this.Ff=sr(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,26)},set:function(t){t?this.Ff=ar(this.Ff,26):this.Ff=sr(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};$r(uo,In);var Rs=function(){uo.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,14)},set:function(e){e?this.Ff=ar(this.Ff,14):this.Ff=sr(this.Ff,14)}}),this.password=!0};$r(Rs,uo);var Oe={CheckBox:{createAppearanceStream:function(){return{N:{On:Oe.CheckBox.YesNormal},D:{On:Oe.CheckBox.YesPushDown,Off:Oe.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,o=e.scope.__private__.encodeColorString(e.color),a=bc(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+ut(a.fontSize)+" Tf "+o),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=zn(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),o=[],a=Oe.internal.getHeight(e),c=Oe.internal.getWidth(e),l=bc(e,e.caption);return o.push("1 g"),o.push("0 0 "+ut(c)+" "+ut(a)+" re"),o.push("f"),o.push("q"),o.push("0 0 1 rg"),o.push("0 0 "+ut(c-1)+" "+ut(a-1)+" re"),o.push("W"),o.push("n"),o.push("0 g"),o.push("BT"),o.push("/"+r+" "+ut(l.fontSize)+" Tf "+n),o.push(l.text),o.push("ET"),o.push("Q"),t.stream=o.join(`
`),t},OffPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Oe.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Oe.RadioButton.Circle.YesNormal,t.D[e]=Oe.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Oe.internal.getWidth(e)<=Oe.internal.getHeight(e)?Oe.internal.getWidth(e)/4:Oe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Oe.internal.Bezier_C,a=Number((n*o).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+Fi(Oe.internal.getWidth(e)/2)+" "+Fi(Oe.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Oe.internal.getWidth(e)<=Oe.internal.getHeight(e)?Oe.internal.getWidth(e)/4:Oe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Oe.internal.Bezier_C).toFixed(5)),c=Number((n*Oe.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Fi(Oe.internal.getWidth(e)/2)+" "+Fi(Oe.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+Fi(Oe.internal.getWidth(e)/2)+" "+Fi(Oe.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+c+" "+c+" "+n+" 0 "+n+" c"),r.push("-"+c+" "+n+" -"+n+" "+c+" -"+n+" 0 c"),r.push("-"+n+" -"+c+" -"+c+" -"+n+" 0 -"+n+" c"),r.push(c+" -"+n+" "+n+" -"+c+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Oe.internal.getWidth(e)<=Oe.internal.getHeight(e)?Oe.internal.getWidth(e)/4:Oe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Oe.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Fi(Oe.internal.getWidth(e)/2)+" "+Fi(Oe.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Oe.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Oe.RadioButton.Cross.YesNormal,t.D[e]=Oe.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Oe.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+ut(Oe.internal.getWidth(e)-2)+" "+ut(Oe.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(ut(n.x1.x)+" "+ut(n.x1.y)+" m"),r.push(ut(n.x2.x)+" "+ut(n.x2.y)+" l"),r.push(ut(n.x4.x)+" "+ut(n.x4.y)+" m"),r.push(ut(n.x3.x)+" "+ut(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=Oe.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+ut(Oe.internal.getWidth(e)-2)+" "+ut(Oe.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(ut(r.x1.x)+" "+ut(r.x1.y)+" m"),n.push(ut(r.x2.x)+" "+ut(r.x2.y)+" l"),n.push(ut(r.x4.x)+" "+ut(r.x4.y)+" m"),n.push(ut(r.x3.x)+" "+ut(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Oe.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Oe.internal.getWidth(e),r=Oe.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Oe.internal.getWidth=function(e){var t=0;return Pt(e)==="object"&&(t=W1(e.Rect[2])),t},Oe.internal.getHeight=function(e){var t=0;return Pt(e)==="object"&&(t=W1(e.Rect[3])),t};var nv=Zt.addField=function(e){if(rv(this,e),!(e instanceof In))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};Zt.AcroFormChoiceField=zo,Zt.AcroFormListBox=Bo,Zt.AcroFormComboBox=Uo,Zt.AcroFormEditBox=Ps,Zt.AcroFormButton=wr,Zt.AcroFormPushButton=js,Zt.AcroFormRadioButton=qo,Zt.AcroFormCheckBox=Es,Zt.AcroFormTextField=uo,Zt.AcroFormPasswordField=Rs,Zt.AcroFormAppearance=Oe,Zt.AcroForm={ChoiceField:zo,ListBox:Bo,ComboBox:Uo,EditBox:Ps,Button:wr,PushButton:js,RadioButton:qo,CheckBox:Es,TextField:uo,PasswordField:Rs,Appearance:Oe},Ge.AcroForm={ChoiceField:zo,ListBox:Bo,ComboBox:Uo,EditBox:Ps,Button:wr,PushButton:js,RadioButton:qo,CheckBox:Es,TextField:uo,PasswordField:Rs,Appearance:Oe};Ge.AcroForm;function s0(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},o=e.__addimage__.getImageFileTypeByImageData=function(N,M){var Y,$,oe,le,fe,ae=r;if((M=M||r)==="RGBA"||N.data!==void 0&&N.data instanceof Uint8ClampedArray&&"height"in N&&"width"in N)return"RGBA";if(Q(N))for(fe in n)for(oe=n[fe],Y=0;Y<oe.length;Y+=1){for(le=!0,$=0;$<oe[Y].length;$+=1)if(oe[Y][$]!==void 0&&oe[Y][$]!==N[$]){le=!1;break}if(le===!0){ae=fe;break}}else for(fe in n)for(oe=n[fe],Y=0;Y<oe.length;Y+=1){for(le=!0,$=0;$<oe[Y].length;$+=1)if(oe[Y][$]!==void 0&&oe[Y][$]!==N.charCodeAt($)){le=!1;break}if(le===!0){ae=fe;break}}return ae===r&&M!==r&&(ae=M),ae},a=function N(M){for(var Y=this.internal.write,$=this.internal.putStream,oe=(0,this.internal.getFilters)();oe.indexOf("FlateEncode")!==-1;)oe.splice(oe.indexOf("FlateEncode"),1);M.objectId=this.internal.newObject();var le=[];if(le.push({key:"Type",value:"/XObject"}),le.push({key:"Subtype",value:"/Image"}),le.push({key:"Width",value:M.width}),le.push({key:"Height",value:M.height}),M.colorSpace===y.INDEXED?le.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(M.palette.length/3-1)+" "+("sMask"in M&&M.sMask!==void 0?M.objectId+2:M.objectId+1)+" 0 R]"}):(le.push({key:"ColorSpace",value:"/"+M.colorSpace}),M.colorSpace===y.DEVICE_CMYK&&le.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),le.push({key:"BitsPerComponent",value:M.bitsPerComponent}),"decodeParameters"in M&&M.decodeParameters!==void 0&&le.push({key:"DecodeParms",value:"<<"+M.decodeParameters+">>"}),"transparency"in M&&Array.isArray(M.transparency)&&M.transparency.length>0){for(var fe="",ae=0,pe=M.transparency.length;ae<pe;ae++)fe+=M.transparency[ae]+" "+M.transparency[ae]+" ";le.push({key:"Mask",value:"["+fe+"]"})}M.sMask!==void 0&&le.push({key:"SMask",value:M.objectId+1+" 0 R"});var ke=M.filter!==void 0?["/"+M.filter]:void 0;if($({data:M.data,additionalKeyValues:le,alreadyAppliedFilters:ke,objectId:M.objectId}),Y("endobj"),"sMask"in M&&M.sMask!==void 0){var _e,T=(_e=M.sMaskBitsPerComponent)!==null&&_e!==void 0?_e:M.bitsPerComponent,H={width:M.width,height:M.height,colorSpace:"DeviceGray",bitsPerComponent:T,data:M.sMask};"filter"in M&&(H.decodeParameters="/Predictor ".concat(M.predictor," /Colors 1 /BitsPerComponent ").concat(T," /Columns ").concat(M.width),H.filter=M.filter),N.call(this,H)}if(M.colorSpace===y.INDEXED){var G=this.internal.newObject();$({data:J(new Uint8Array(M.palette)),objectId:G}),Y("endobj")}},c=function(){var N=this.internal.collections[t+"images"];for(var M in N)a.call(this,N[M])},l=function(){var N,M=this.internal.collections[t+"images"],Y=this.internal.write;for(var $ in M)Y("/I"+(N=M[$]).index,N.objectId,"0","R")},h=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",c),this.internal.events.subscribe("putXobjectDict",l))},f=function(){var N=this.internal.collections[t+"images"];return h.call(this),N},d=function(){return Object.keys(this.internal.collections[t+"images"]).length},x=function(N){return typeof e["process"+N.toUpperCase()]=="function"},S=function(N){return Pt(N)==="object"&&N.nodeType===1},p=function(N,M){if(N.nodeName==="IMG"&&N.hasAttribute("src")){var Y=""+N.getAttribute("src");if(Y.indexOf("data:image/")===0)return Ts(unescape(Y).split("base64,").pop());var $=e.loadFile(Y,!0);if($!==void 0)return $}if(N.nodeName==="CANVAS"){if(N.width===0||N.height===0)throw new Error("Given canvas must have data. Canvas width: "+N.width+", height: "+N.height);var oe;switch(M){case"PNG":oe="image/png";break;case"WEBP":oe="image/webp";break;default:oe="image/jpeg"}return Ts(N.toDataURL(oe,1).split("base64,").pop())}},w=function(N){var M=this.internal.collections[t+"images"];if(M){for(var Y in M)if(N===M[Y].alias)return M[Y]}},C=function(N,M,Y){return N||M||(N=-96,M=-96),N<0&&(N=-1*Y.width*72/N/this.internal.scaleFactor),M<0&&(M=-1*Y.height*72/M/this.internal.scaleFactor),N===0&&(N=M*Y.width/Y.height),M===0&&(M=N*Y.height/Y.width),[N,M]},k=function(N,M,Y,$,oe,le){var fe=C.call(this,Y,$,oe),ae=this.internal.getCoordinateString,pe=this.internal.getVerticalCoordinateString,ke=f.call(this);if(Y=fe[0],$=fe[1],ke[oe.index]=oe,le){le*=Math.PI/180;var _e=Math.cos(le),T=Math.sin(le),H=function(Z){return Z.toFixed(4)},G=[H(_e),H(T),H(-1*T),H(_e),0,0,"cm"]}this.internal.write("q"),le?(this.internal.write([1,"0","0",1,ae(N),pe(M+$),"cm"].join(" ")),this.internal.write(G.join(" ")),this.internal.write([ae(Y),"0","0",ae($),"0","0","cm"].join(" "))):this.internal.write([ae(Y),"0","0",ae($),ae(N),pe(M+$),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+oe.index+" Do"),this.internal.write("Q")},y=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var E=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},P=e.__addimage__.sHashCode=function(N){var M,Y,$=0;if(typeof N=="string")for(Y=N.length,M=0;M<Y;M++)$=($<<5)-$+N.charCodeAt(M),$|=0;else if(Q(N))for(Y=N.byteLength/2,M=0;M<Y;M++)$=($<<5)-$+N[M],$|=0;return $},R=e.__addimage__.validateStringAsBase64=function(N){(N=N||"").toString().trim();var M=!0;return N.length===0&&(M=!1),N.length%4!=0&&(M=!1),/^[A-Za-z0-9+/]+$/.test(N.substr(0,N.length-2))===!1&&(M=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(N.substr(-2))===!1&&(M=!1),M},V=e.__addimage__.extractImageFromDataUrl=function(N){if(N==null||!(N=N.trim()).startsWith("data:"))return null;var M=N.indexOf(",");return M<0?null:N.substring(0,M).trim().endsWith("base64")?N.substring(M+1):null};e.__addimage__.isArrayBuffer=function(N){return N instanceof ArrayBuffer};var Q=e.__addimage__.isArrayBufferView=function(N){return N instanceof Int8Array||N instanceof Uint8Array||N instanceof Uint8ClampedArray||N instanceof Int16Array||N instanceof Uint16Array||N instanceof Int32Array||N instanceof Uint32Array||N instanceof Float32Array||N instanceof Float64Array},X=e.__addimage__.binaryStringToUint8Array=function(N){for(var M=N.length,Y=new Uint8Array(M),$=0;$<M;$++)Y[$]=N.charCodeAt($);return Y},J=e.__addimage__.arrayBufferToBinaryString=function(N){for(var M="",Y=Q(N)?N:new Uint8Array(N),$=0;$<Y.length;$+=8192)M+=String.fromCharCode.apply(null,Y.subarray($,$+8192));return M};e.addImage=function(){var N,M,Y,$,oe,le,fe,ae,pe;if(typeof arguments[1]=="number"?(M=r,Y=arguments[1],$=arguments[2],oe=arguments[3],le=arguments[4],fe=arguments[5],ae=arguments[6],pe=arguments[7]):(M=arguments[1],Y=arguments[2],$=arguments[3],oe=arguments[4],le=arguments[5],fe=arguments[6],ae=arguments[7],pe=arguments[8]),Pt(N=arguments[0])==="object"&&!S(N)&&"imageData"in N){var ke=N;N=ke.imageData,M=ke.format||M||r,Y=ke.x||Y||0,$=ke.y||$||0,oe=ke.w||ke.width||oe,le=ke.h||ke.height||le,fe=ke.alias||fe,ae=ke.compression||ae,pe=ke.rotation||ke.angle||pe}var _e=this.internal.getFilters();if(ae===void 0&&_e.indexOf("FlateEncode")!==-1&&(ae="SLOW"),isNaN(Y)||isNaN($))throw new Error("Invalid coordinates passed to jsPDF.addImage");h.call(this);var T=D.call(this,N,M,fe,ae);return k.call(this,Y,$,oe,le,T,pe),this};var D=function(N,M,Y,$){var oe,le,fe;if(typeof N=="string"&&o(N)===r){N=unescape(N);var ae=ee(N,!1);(ae!==""||(ae=e.loadFile(N,!0))!==void 0)&&(N=ae)}if(S(N)&&(N=p(N,M)),M=o(N,M),!x(M))throw new Error("addImage does not support files of type '"+M+"', please ensure that a plugin for '"+M+"' support is added.");if(((fe=Y)==null||fe.length===0)&&(Y=function(pe){return typeof pe=="string"||Q(pe)?P(pe):Q(pe.data)?P(pe.data):null}(N)),(oe=w.call(this,Y))||(N instanceof Uint8Array||M==="RGBA"||(le=N,N=X(N)),oe=this["process"+M.toUpperCase()](N,d.call(this),Y,function(pe){return pe&&typeof pe=="string"&&(pe=pe.toUpperCase()),pe in e.image_compression?pe:E.NONE}($),le)),!oe)throw new Error("An unknown error occurred whilst processing the image.");return oe},ee=e.__addimage__.convertBase64ToBinaryString=function(N,M){M=typeof M!="boolean"||M;var Y,$="";if(typeof N=="string"){var oe;Y=(oe=V(N))!==null&&oe!==void 0?oe:N;try{$=Ts(Y)}catch(le){if(M)throw R(Y)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+le.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return $};e.getImageProperties=function(N){var M,Y,$="";if(S(N)&&(N=p(N)),typeof N=="string"&&o(N)===r&&(($=ee(N,!1))===""&&($=e.loadFile(N)||""),N=$),Y=o(N),!x(Y))throw new Error("addImage does not support files of type '"+Y+"', please ensure that a plugin for '"+Y+"' support is added.");if(N instanceof Uint8Array||(N=X(N)),!(M=this["process"+Y.toUpperCase()](N)))throw new Error("An unknown error occurred whilst processing the image");return M.fileType=Y,M}})(Ge.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};Ge.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,o,a,c=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString,h=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,d=!1,x=0;x<f.length&&!d;x++)switch((n=f[x]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(d=!0);break;case"reference":case"text":case"freetext":d=!0}if(d!=0){this.internal.write("/Annots [");for(var S=0;S<f.length;S++){n=f[S];var p=this.internal.pdfEscape,w=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var C=this.internal.newAdditionalObject(),k=this.internal.newAdditionalObject(),y=this.internal.getEncryptor(C.objId),E=n.title||"Note";a="<</Type /Annot /Subtype /Text "+(o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y)+"] ")+"/Contents ("+p(y(n.contents))+")",a+=" /Popup "+k.objId+" 0 R",a+=" /P "+h.objId+" 0 R",a+=" /T ("+p(y(E))+") >>",C.content=a;var P=C.objId+" 0 R";a="<</Type /Annot /Subtype /Popup "+(o="/Rect ["+c(n.bounds.x+30)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w+30)+" "+l(n.bounds.y)+"] ")+" /Parent "+P,n.open&&(a+=" /Open true"),a+=" >>",k.content=a,this.internal.write(C.objId,"0 R",k.objId,"0 R");break;case"freetext":o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y+n.bounds.h)+"] ";var R=n.color||"#000000";a="<</Type /Annot /Subtype /FreeText "+o+"/Contents ("+p(w(n.contents))+")",a+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+R+")",a+=" /Border [0 0 0]",a+=" >>",this.internal.write(a);break;case"link":if(n.options.name){var V=this.annotations._nameMap[n.options.name];n.options.pageNumber=V.page,n.options.top=V.y}else n.options.top||(n.options.top=0);if(o="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",a="",n.options.url)a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /A <</S /URI /URI ("+p(w(n.options.url))+") >>";else if(n.options.pageNumber)switch(a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":a+=" /Fit]";break;case"FitH":a+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,a+=" /FitV "+n.options.left+"]";break;default:var Q=l(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),a+=" /XYZ "+n.options.left+" "+Q+" "+n.options.zoom+"]"}a!=""&&(a+=" >>",this.internal.write(a))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,o,a,c){var l=this.internal.getCurrentPageInfo(),h=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;l.pageContext.annotations.push({finalBounds:{x:h(r),y:f(n),w:h(r+o),h:f(n+a)},options:c,type:"link"})},e.textWithLink=function(r,n,o,a){var c,l,h=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(a.maxWidth!==void 0){l=a.maxWidth;var d=this.splitTextToSize(r,l).length;c=Math.ceil(f*d)}else l=h,c=f;return this.text(r,n,o,a),o+=.2*f,a.align==="center"&&(n-=h/2),a.align==="right"&&(n-=h),this.link(n,o-f,l,c,a),h},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(Ge.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},o=[1570,1571,1573,1575];e.__arabicParser__={};var a=e.__arabicParser__.isInArabicSubstitutionA=function(C){return t[C.charCodeAt(0)]!==void 0},c=e.__arabicParser__.isArabicLetter=function(C){return typeof C=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(C)},l=e.__arabicParser__.isArabicEndLetter=function(C){return c(C)&&a(C)&&t[C.charCodeAt(0)].length<=2},h=e.__arabicParser__.isArabicAlfLetter=function(C){return c(C)&&o.indexOf(C.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(C){return c(C)&&a(C)&&t[C.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(C){return c(C)&&a(C)&&t[C.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(C){return c(C)&&a(C)&&t[C.charCodeAt(0)].length>=3};var d=e.__arabicParser__.arabicLetterHasMedialForm=function(C){return c(C)&&a(C)&&t[C.charCodeAt(0)].length==4},x=e.__arabicParser__.resolveLigatures=function(C){var k=0,y=r,E="",P=0;for(k=0;k<C.length;k+=1)y[C.charCodeAt(k)]!==void 0?(P++,typeof(y=y[C.charCodeAt(k)])=="number"&&(E+=String.fromCharCode(y),y=r,P=0),k===C.length-1&&(y=r,E+=C.charAt(k-(P-1)),k-=P-1,P=0)):(y=r,E+=C.charAt(k-P),k-=P,P=0);return E};e.__arabicParser__.isArabicDiacritic=function(C){return C!==void 0&&n[C.charCodeAt(0)]!==void 0};var S=e.__arabicParser__.getCorrectForm=function(C,k,y){return c(C)?a(C)===!1?-1:!f(C)||!c(k)&&!c(y)||!c(y)&&l(k)||l(C)&&!c(k)||l(C)&&h(k)||l(C)&&l(k)?0:d(C)&&c(k)&&!l(k)&&c(y)&&f(y)?3:l(C)||!c(y)?1:2:-1},p=function(C){var k=0,y=0,E=0,P="",R="",V="",Q=(C=C||"").split("\\s+"),X=[];for(k=0;k<Q.length;k+=1){for(X.push(""),y=0;y<Q[k].length;y+=1)P=Q[k][y],R=Q[k][y-1],V=Q[k][y+1],c(P)?(E=S(P,R,V),X[k]+=E!==-1?String.fromCharCode(t[P.charCodeAt(0)][E]):P):X[k]+=P;X[k]=x(X[k])}return X.join(" ")},w=e.__arabicParser__.processArabic=e.processArabic=function(){var C,k=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,y=[];if(Array.isArray(k)){var E=0;for(y=[],E=0;E<k.length;E+=1)Array.isArray(k[E])?y.push([p(k[E][0]),k[E][1],k[E][2]]):y.push([p(k[E])]);C=y}else C=p(k);return typeof arguments[0]=="string"?C:(arguments[0].text=C,arguments[0])};e.events.push(["preProcessText",w])}(Ge.API),Ge.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(l){r=l}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(l){n=isNaN(l)||Number.isInteger(l)===!1||l<0?150:l,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var o=300;Object.defineProperty(this,"height",{get:function(){return o},set:function(l){o=isNaN(l)||Number.isInteger(l)===!1||l<0?300:l,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=o+1)}});var a=[];Object.defineProperty(this,"childNodes",{get:function(){return a},set:function(l){a=l}});var c={};Object.defineProperty(this,"style",{get:function(){return c},set:function(l){c=l}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var o;if((r=r||"2d")!=="2d")return null;for(o in n)this.pdf.context2d.hasOwnProperty(o)&&(this.pdf.context2d[o]=n[o]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Ge.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),o.call(this))},o=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var h=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return h},set:function(C){h=C}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(C){f=C}});var d=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return d},set:function(C){d=C}});var x=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return x},set:function(C){x=C}});var S=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return S},set:function(C){S=C}});var p=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return p},set:function(C){p=C}});var w=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return w},set:function(C){w=C}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(h){return n.call(this),this.internal.__cell__.headerFunction=typeof h=="function"?h:void 0,this},e.getTextDimensions=function(h,f){n.call(this);var d=(f=f||{}).fontSize||this.getFontSize(),x=f.font||this.getFont(),S=f.scaleFactor||this.internal.scaleFactor,p=0,w=0,C=0,k=this;if(!Array.isArray(h)&&typeof h!="string"){if(typeof h!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");h=String(h)}var y=f.maxWidth;y>0?typeof h=="string"?h=this.splitTextToSize(h,y):Object.prototype.toString.call(h)==="[object Array]"&&(h=h.reduce(function(P,R){return P.concat(k.splitTextToSize(R,y))},[])):h=Array.isArray(h)?h:[h];for(var E=0;E<h.length;E++)p<(C=this.getStringUnitWidth(h[E],{font:x})*d)&&(p=C);return p!==0&&(w=h.length),{w:p/=S,h:Math.max((w*d*this.getLineHeightFactor()-d*(this.getLineHeightFactor()-1))/S,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var h=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new a(h.left,h.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var c=e.cell=function(){var h;h=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,d=this.internal.__cell__.padding,x=this.internal.__cell__.margins||t,S=this.internal.__cell__.tableHeaderRow,p=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===h.lineNumber?(h.x=(f.x||0)+(f.width||0),h.y=f.y||0):f.y+f.height+h.height+x.bottom>this.getPageHeight()?(this.cellAddPage(),h.y=x.top,p&&S&&(this.printHeaderRow(h.lineNumber,!0),h.y+=S[0].height)):h.y=f.y+f.height||h.y),h.text[0]!==void 0&&(this.rect(h.x,h.y,h.width,h.height,r===!0?"FD":void 0),h.align==="right"?this.text(h.text,h.x+h.width-d,h.y+d,{align:"right",baseline:"top"}):h.align==="center"?this.text(h.text,h.x+h.width/2,h.y+d,{align:"center",baseline:"top",maxWidth:h.width-d-d}):this.text(h.text,h.x+d,h.y+d,{align:"left",baseline:"top",maxWidth:h.width-d-d})),this.internal.__cell__.lastCell=h,this};e.table=function(h,f,d,x,S){if(n.call(this),!d)throw new Error("No data for PDF table.");var p,w,C,k,y=[],E=[],P=[],R={},V={},Q=[],X=[],J=(S=S||{}).autoSize||!1,D=S.printHeaders!==!1,ee=S.css&&S.css["font-size"]!==void 0?16*S.css["font-size"]:S.fontSize||12,N=S.margins||Object.assign({width:this.getPageWidth()},t),M=typeof S.padding=="number"?S.padding:3,Y=S.headerBackgroundColor||"#c8c8c8",$=S.headerTextColor||"#000";if(o.call(this),this.internal.__cell__.printHeaders=D,this.internal.__cell__.margins=N,this.internal.__cell__.table_font_size=ee,this.internal.__cell__.padding=M,this.internal.__cell__.headerBackgroundColor=Y,this.internal.__cell__.headerTextColor=$,this.setFontSize(ee),x==null)E=y=Object.keys(d[0]),P=y.map(function(){return"left"});else if(Array.isArray(x)&&Pt(x[0])==="object")for(y=x.map(function(ke){return ke.name}),E=x.map(function(ke){return ke.prompt||ke.name||""}),P=x.map(function(ke){return ke.align||"left"}),p=0;p<x.length;p+=1)V[x[p].name]=.7499990551181103*x[p].width;else Array.isArray(x)&&typeof x[0]=="string"&&(E=y=x,P=y.map(function(){return"left"}));if(J||Array.isArray(x)&&typeof x[0]=="string")for(p=0;p<y.length;p+=1){for(R[k=y[p]]=d.map(function(ke){return ke[k]}),this.setFont(void 0,"bold"),Q.push(this.getTextDimensions(E[p],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),w=R[k],this.setFont(void 0,"normal"),C=0;C<w.length;C+=1)Q.push(this.getTextDimensions(w[C],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);V[k]=Math.max.apply(null,Q)+M+M,Q=[]}if(D){var oe={};for(p=0;p<y.length;p+=1)oe[y[p]]={},oe[y[p]].text=E[p],oe[y[p]].align=P[p];var le=l.call(this,oe,V);X=y.map(function(ke){return new a(h,f,V[ke],le,oe[ke].text,void 0,oe[ke].align)}),this.setTableHeaderRow(X),this.printHeaderRow(1,!1)}var fe=x.reduce(function(ke,_e){return ke[_e.name]=_e.align,ke},{});for(p=0;p<d.length;p+=1){"rowStart"in S&&S.rowStart instanceof Function&&S.rowStart({row:p,data:d[p]},this);var ae=l.call(this,d[p],V);for(C=0;C<y.length;C+=1){var pe=d[p][y[C]];"cellStart"in S&&S.cellStart instanceof Function&&S.cellStart({row:p,col:C,data:pe},this),c.call(this,new a(h,f,V[y[C]],ae,pe,p+2,fe[y[C]]))}}return this.internal.__cell__.table_x=h,this.internal.__cell__.table_y=f,this};var l=function(h,f){var d=this.internal.__cell__.padding,x=this.internal.__cell__.table_font_size,S=this.internal.scaleFactor;return Object.keys(h).map(function(p){var w=h[p];return this.splitTextToSize(w.hasOwnProperty("text")?w.text:w,f[p]-d-d)},this).map(function(p){return this.getLineHeightFactor()*p.length*x/S+d+d},this).reduce(function(p,w){return Math.max(p,w)},0)};e.setTableHeaderRow=function(h){n.call(this),this.internal.__cell__.tableHeaderRow=h},e.printHeaderRow=function(h,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var d;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var x=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(x[0],x[1],x[2],x[3],void 0,-1)}this.setFont(void 0,"bold");for(var S=[],p=0;p<this.internal.__cell__.tableHeaderRow.length;p+=1){d=this.internal.__cell__.tableHeaderRow[p].clone(),f&&(d.y=this.internal.__cell__.margins.top||0,S.push(d)),d.lineNumber=h;var w=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),c.call(this,d),this.setTextColor(w)}S.length>0&&this.setTableHeaderRow(S),this.setFont(void 0,"normal"),r=!1}}(Ge.API);var l0={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},c0=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],xc=s0(c0),u0=[100,200,300,400,500,600,700,800,900],iv=s0(u0);function Ql(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(a){return l0[a=a||"normal"]?a:"normal"}(e.style),n=function(a){return a?typeof a=="number"?a>=100&&a<=900&&a%100==0?a:400:/^\d00$/.test(a)?parseInt(a):a==="bold"?700:400:400}(e.weight),o=function(a){return typeof xc[a=a||"normal"]=="number"?a:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:o,src:e.src||[],ref:e.ref||{name:t,style:[o,r,n].join(" ")}}}function G1(e,t,r,n){var o;for(o=r;o>=0&&o<t.length;o+=n)if(e[t[o]])return e[t[o]];for(o=r;o>=0&&o<t.length;o-=n)if(e[t[o]])return e[t[o]]}var ov={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Y1={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function J1(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function Q1(e){return e.trimLeft()}function av(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function sv(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var _s,K1,X1,Mo,Cs,Z1,eh,th,Kl=["times"];function rh(e,t,r,n,o){var a=4,c=ih;switch(o){case Ge.API.image_compression.FAST:a=1,c=nh;break;case Ge.API.image_compression.MEDIUM:a=6,c=oh;break;case Ge.API.image_compression.SLOW:a=9,c=ah}e=function(h,f,d,x){for(var S,p=h.length/f,w=new Uint8Array(h.length+p),C=[lv,nh,ih,oh,ah],k=0;k<p;k+=1){var y=k*f,E=h.subarray(y,y+f);if(x)w.set(x(E,d,S),y+k);else{for(var P=C.length,R=[],V=0;V<P;V+=1)R[V]=C[V](E,d,S);var Q=uv(R.concat());w.set(R[Q],y+k)}S=E}return w}(e,t,Math.ceil(r*n/8),c);var l=fc(e,{level:a});return Ge.API.__addimage__.arrayBufferToBinaryString(l)}function lv(e){var t=Array.apply([],e);return t.unshift(0),t}function nh(e,t){var r=e.length,n=[];n[0]=1;for(var o=0;o<r;o+=1){var a=e[o-t]||0;n[o+1]=e[o]-a+256&255}return n}function ih(e,t,r){var n=e.length,o=[];o[0]=2;for(var a=0;a<n;a+=1){var c=r&&r[a]||0;o[a+1]=e[a]-c+256&255}return o}function oh(e,t,r){var n=e.length,o=[];o[0]=3;for(var a=0;a<n;a+=1){var c=e[a-t]||0,l=r&&r[a]||0;o[a+1]=e[a]+256-(c+l>>>1)&255}return o}function ah(e,t,r){var n=e.length,o=[];o[0]=4;for(var a=0;a<n;a+=1){var c=cv(e[a-t]||0,r&&r[a]||0,r&&r[a-t]||0);o[a+1]=e[a]-c+256&255}return o}function cv(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),o=Math.abs(e-r),a=Math.abs(e+t-r-r);return n<=o&&n<=a?e:o<=a?t:r}function uv(e){var t=e.map(function(r){return r.reduce(function(n,o){return n+Math.abs(o)},0)});return t.indexOf(Math.min.apply(null,t))}function Xl(e,t,r){var n=t*r,o=Math.floor(n/8),a=16-(n-8*o+r),c=(1<<r)-1;return h0(e,o)>>a&c}function sh(e,t,r,n){var o=r*n,a=Math.floor(o/8),c=16-(o-8*a+n),l=(1<<n)-1,h=(t&l)<<c;(function(f,d,x){if(d+1<f.byteLength)f.setUint16(d,x,!1);else{var S=x>>8&255;f.setUint8(d,S)}})(e,a,h0(e,a)&~(l<<c)&65535|h)}function h0(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function hv(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,o=e[t++],a=o>>7,c=1<<1+(7&o);e[t++],e[t++];var l=null,h=null;a&&(l=t,h=c,t+=3*c);var f=!0,d=[],x=0,S=null,p=0,w=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,w=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((N=e[t++])>=0))throw Error("Invalid block size");if(N===0)break;t+=N}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var C=e[t++];x=e[t++]|e[t++]<<8,S=e[t++],1&C||(S=null),p=C>>2&7,t++;break;case 254:for(;;){if(!((N=e[t++])>=0))throw Error("Invalid block size");if(N===0)break;t+=N}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var k=e[t++]|e[t++]<<8,y=e[t++]|e[t++]<<8,E=e[t++]|e[t++]<<8,P=e[t++]|e[t++]<<8,R=e[t++],V=R>>6&1,Q=1<<1+(7&R),X=l,J=h,D=!1;R>>7&&(D=!0,X=t,J=Q,t+=3*Q);var ee=t;for(t++;;){var N;if(!((N=e[t++])>=0))throw Error("Invalid block size");if(N===0)break;t+=N}d.push({x:k,y,width:E,height:P,has_local_palette:D,palette_offset:X,palette_size:J,data_offset:ee,data_length:t-ee,transparent_index:S,interlaced:!!V,delay:x,disposal:p});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return d.length},this.loopCount=function(){return w},this.frameInfo=function(M){if(M<0||M>=d.length)throw new Error("Frame index out of range.");return d[M]},this.decodeAndBlitFrameBGRA=function(M,Y){var $=this.frameInfo(M),oe=$.width*$.height,le=new Uint8Array(oe);lh(e,$.data_offset,le,oe);var fe=$.palette_offset,ae=$.transparent_index;ae===null&&(ae=256);var pe=$.width,ke=r-pe,_e=pe,T=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),G=T,Z=4*ke;$.interlaced===!0&&(Z+=4*r*7);for(var ne=8,ue=0,me=le.length;ue<me;++ue){var de=le[ue];if(_e===0&&(_e=pe,(G+=Z)>=H&&(Z=4*ke+4*r*(ne-1),G=T+(pe+ke)*(ne<<1),ne>>=1)),de===ae)G+=4;else{var ye=e[fe+3*de],Ie=e[fe+3*de+1],Ee=e[fe+3*de+2];Y[G++]=Ee,Y[G++]=Ie,Y[G++]=ye,Y[G++]=255}--_e}},this.decodeAndBlitFrameRGBA=function(M,Y){var $=this.frameInfo(M),oe=$.width*$.height,le=new Uint8Array(oe);lh(e,$.data_offset,le,oe);var fe=$.palette_offset,ae=$.transparent_index;ae===null&&(ae=256);var pe=$.width,ke=r-pe,_e=pe,T=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),G=T,Z=4*ke;$.interlaced===!0&&(Z+=4*r*7);for(var ne=8,ue=0,me=le.length;ue<me;++ue){var de=le[ue];if(_e===0&&(_e=pe,(G+=Z)>=H&&(Z=4*ke+4*r*(ne-1),G=T+(pe+ke)*(ne<<1),ne>>=1)),de===ae)G+=4;else{var ye=e[fe+3*de],Ie=e[fe+3*de+1],Ee=e[fe+3*de+2];Y[G++]=ye,Y[G++]=Ie,Y[G++]=Ee,Y[G++]=255}--_e}}}function lh(e,t,r,n){for(var o=e[t++],a=1<<o,c=a+1,l=c+1,h=o+1,f=(1<<h)-1,d=0,x=0,S=0,p=e[t++],w=new Int32Array(4096),C=null;;){for(;d<16&&p!==0;)x|=e[t++]<<d,d+=8,p===1?p=e[t++]:--p;if(d<h)break;var k=x&f;if(x>>=h,d-=h,k!==a){if(k===c)break;for(var y=k<l?k:C,E=0,P=y;P>a;)P=w[P]>>8,++E;var R=P;if(S+E+(y!==k?1:0)>n)return void Ot.log("Warning, gif stream longer than expected.");r[S++]=R;var V=S+=E;for(y!==k&&(r[S++]=R),P=y;E--;)P=w[P],r[--V]=255&P,P>>=8;C!==null&&l<4096&&(w[l++]=C<<8|R,l>=f+1&&h<12&&(++h,f=f<<1|1)),C=k}else l=c+1,f=(1<<(h=o+1))-1,C=null}return S!==n&&Ot.log("Warning, gif stream shorter than expected."),r}/**
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
*/function Zl(e){var t,r,n,o,a,c=Math.floor,l=new Array(64),h=new Array(64),f=new Array(64),d=new Array(64),x=new Array(65535),S=new Array(65535),p=new Array(64),w=new Array(64),C=[],k=0,y=7,E=new Array(64),P=new Array(64),R=new Array(64),V=new Array(256),Q=new Array(2048),X=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],J=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],D=[0,1,2,3,4,5,6,7,8,9,10,11],ee=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],N=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],M=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],Y=[0,1,2,3,4,5,6,7,8,9,10,11],$=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],oe=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function le(T,H){for(var G=0,Z=0,ne=new Array,ue=1;ue<=16;ue++){for(var me=1;me<=T[ue];me++)ne[H[Z]]=[],ne[H[Z]][0]=G,ne[H[Z]][1]=ue,Z++,G++;G*=2}return ne}function fe(T){for(var H=T[0],G=T[1]-1;G>=0;)H&1<<G&&(k|=1<<y),G--,--y<0&&(k==255?(ae(255),ae(0)):ae(k),y=7,k=0)}function ae(T){C.push(T)}function pe(T){ae(T>>8&255),ae(255&T)}function ke(T,H,G,Z,ne){for(var ue,me=ne[0],de=ne[240],ye=function(Le,Ve){var Re,Ze,Ue,bt,et,nt,Ct,at,qe,Ke,He=0;for(qe=0;qe<8;++qe){Re=Le[He],Ze=Le[He+1],Ue=Le[He+2],bt=Le[He+3],et=Le[He+4],nt=Le[He+5],Ct=Le[He+6];var jt=Re+(at=Le[He+7]),xt=Re-at,De=Ze+Ct,st=Ze-Ct,wt=Ue+nt,Je=Ue-nt,mt=bt+et,it=bt-et,qt=jt+mt,er=jt-mt,Lt=De+wt,Xe=De-wt;Le[He]=qt+Lt,Le[He+4]=qt-Lt;var St=.707106781*(Xe+er);Le[He+2]=er+St,Le[He+6]=er-St;var Vn=.382683433*((qt=it+Je)-(Xe=st+xt)),br=.5411961*qt+Vn,Vr=1.306562965*Xe+Vn,sn=.707106781*(Lt=Je+st),Qe=xt+sn,wn=xt-sn;Le[He+5]=wn+br,Le[He+3]=wn-br,Le[He+1]=Qe+Vr,Le[He+7]=Qe-Vr,He+=8}for(He=0,qe=0;qe<8;++qe){Re=Le[He],Ze=Le[He+8],Ue=Le[He+16],bt=Le[He+24],et=Le[He+32],nt=Le[He+40],Ct=Le[He+48];var yn=Re+(at=Le[He+56]),Er=Re-at,xr=Ze+Ct,Ht=Ze-Ct,Yt=Ue+nt,lr=Ue-nt,Wn=bt+et,ln=bt-et,Wr=yn+Wn,Gr=yn-Wn,Yr=xr+Yt,Dr=xr-Yt;Le[He]=Wr+Yr,Le[He+32]=Wr-Yr;var zr=.707106781*(Dr+Gr);Le[He+16]=Gr+zr,Le[He+48]=Gr-zr;var Sn=.382683433*((Wr=ln+lr)-(Dr=Ht+Er)),cn=.5411961*Wr+Sn,un=1.306562965*Dr+Sn,mi=.707106781*(Yr=lr+Ht),Pn=Er+mi,Gn=Er-mi;Le[He+40]=Gn+cn,Le[He+24]=Gn-cn,Le[He+8]=Pn+un,Le[He+56]=Pn-un,He++}for(qe=0;qe<64;++qe)Ke=Le[qe]*Ve[qe],p[qe]=Ke>0?Ke+.5|0:Ke-.5|0;return p}(T,H),Ie=0;Ie<64;++Ie)w[X[Ie]]=ye[Ie];var Ee=w[0]-G;G=w[0],Ee==0?fe(Z[0]):(fe(Z[S[ue=32767+Ee]]),fe(x[ue]));for(var je=63;je>0&&w[je]==0;)je--;if(je==0)return fe(me),G;for(var ve,W=1;W<=je;){for(var pt=W;w[W]==0&&W<=je;)++W;var rt=W-pt;if(rt>=16){ve=rt>>4;for(var Ye=1;Ye<=ve;++Ye)fe(de);rt&=15}ue=32767+w[W],fe(ne[(rt<<4)+S[ue]]),fe(x[ue]),W++}return je!=63&&fe(me),G}function _e(T){T=Math.min(Math.max(T,1),100),a!=T&&(function(H){for(var G=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],Z=0;Z<64;Z++){var ne=c((G[Z]*H+50)/100);ne=Math.min(Math.max(ne,1),255),l[X[Z]]=ne}for(var ue=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],me=0;me<64;me++){var de=c((ue[me]*H+50)/100);de=Math.min(Math.max(de,1),255),h[X[me]]=de}for(var ye=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Ie=0,Ee=0;Ee<8;Ee++)for(var je=0;je<8;je++)f[Ie]=1/(l[X[Ie]]*ye[Ee]*ye[je]*8),d[Ie]=1/(h[X[Ie]]*ye[Ee]*ye[je]*8),Ie++}(T<50?Math.floor(5e3/T):Math.floor(200-2*T)),a=T)}this.encode=function(T,H){H&&_e(H),C=new Array,k=0,y=7,pe(65496),pe(65504),pe(16),ae(74),ae(70),ae(73),ae(70),ae(0),ae(1),ae(1),ae(0),pe(1),pe(1),ae(0),ae(0),function(){pe(65499),pe(132),ae(0);for(var Ze=0;Ze<64;Ze++)ae(l[Ze]);ae(1);for(var Ue=0;Ue<64;Ue++)ae(h[Ue])}(),function(Ze,Ue){pe(65472),pe(17),ae(8),pe(Ue),pe(Ze),ae(3),ae(1),ae(17),ae(0),ae(2),ae(17),ae(1),ae(3),ae(17),ae(1)}(T.width,T.height),function(){pe(65476),pe(418),ae(0);for(var Ze=0;Ze<16;Ze++)ae(J[Ze+1]);for(var Ue=0;Ue<=11;Ue++)ae(D[Ue]);ae(16);for(var bt=0;bt<16;bt++)ae(ee[bt+1]);for(var et=0;et<=161;et++)ae(N[et]);ae(1);for(var nt=0;nt<16;nt++)ae(M[nt+1]);for(var Ct=0;Ct<=11;Ct++)ae(Y[Ct]);ae(17);for(var at=0;at<16;at++)ae($[at+1]);for(var qe=0;qe<=161;qe++)ae(oe[qe])}(),pe(65498),pe(12),ae(3),ae(1),ae(0),ae(2),ae(17),ae(3),ae(17),ae(0),ae(63),ae(0);var G=0,Z=0,ne=0;k=0,y=7,this.encode.displayName="_encode_";for(var ue,me,de,ye,Ie,Ee,je,ve,W,pt=T.data,rt=T.width,Ye=T.height,Le=4*rt,Ve=0;Ve<Ye;){for(ue=0;ue<Le;){for(Ie=Le*Ve+ue,je=-1,ve=0,W=0;W<64;W++)Ee=Ie+(ve=W>>3)*Le+(je=4*(7&W)),Ve+ve>=Ye&&(Ee-=Le*(Ve+1+ve-Ye)),ue+je>=Le&&(Ee-=ue+je-Le+4),me=pt[Ee++],de=pt[Ee++],ye=pt[Ee++],E[W]=(Q[me]+Q[de+256|0]+Q[ye+512|0]>>16)-128,P[W]=(Q[me+768|0]+Q[de+1024|0]+Q[ye+1280|0]>>16)-128,R[W]=(Q[me+1280|0]+Q[de+1536|0]+Q[ye+1792|0]>>16)-128;G=ke(E,f,G,t,n),Z=ke(P,d,Z,r,o),ne=ke(R,d,ne,r,o),ue+=32}Ve+=8}if(y>=0){var Re=[];Re[1]=y+1,Re[0]=(1<<y+1)-1,fe(Re)}return pe(65497),new Uint8Array(C)},e=e||50,function(){for(var T=String.fromCharCode,H=0;H<256;H++)V[H]=T(H)}(),t=le(J,D),r=le(M,Y),n=le(ee,N),o=le($,oe),function(){for(var T=1,H=2,G=1;G<=15;G++){for(var Z=T;Z<H;Z++)S[32767+Z]=G,x[32767+Z]=[],x[32767+Z][1]=G,x[32767+Z][0]=Z;for(var ne=-(H-1);ne<=-T;ne++)S[32767+ne]=G,x[32767+ne]=[],x[32767+ne][1]=G,x[32767+ne][0]=H-1+ne;T<<=1,H<<=1}}(),function(){for(var T=0;T<256;T++)Q[T]=19595*T,Q[T+256|0]=38470*T,Q[T+512|0]=7471*T+32768,Q[T+768|0]=-11059*T,Q[T+1024|0]=-21709*T,Q[T+1280|0]=32768*T+8421375,Q[T+1536|0]=-27439*T,Q[T+1792|0]=-5329*T}(),_e(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function kn(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function ch(e){function t(D){if(!D)throw Error("assert :P")}function r(D,ee,N){for(var M=0;4>M;M++)if(D[ee+M]!=N.charCodeAt(M))return!0;return!1}function n(D,ee,N,M,Y){for(var $=0;$<Y;$++)D[ee+$]=N[M+$]}function o(D,ee,N,M){for(var Y=0;Y<M;Y++)D[ee+Y]=N}function a(D){return new Int32Array(D)}function c(D,ee){for(var N=[],M=0;M<D;M++)N.push(new ee);return N}function l(D,ee){var N=[];return function M(Y,$,oe){for(var le=oe[$],fe=0;fe<le&&(Y.push(oe.length>$+1?[]:new ee),!(oe.length<$+1));fe++)M(Y[fe],$+1,oe)}(N,0,D),N}var h=function(){var D=this;function ee(s,u){for(var g=1<<u-1>>>0;s&g;)g>>>=1;return g?(s&g-1)+g:s}function N(s,u,g,b,A){t(!(b%g));do s[u+(b-=g)]=A;while(0<b)}function M(s,u,g,b,A){if(t(2328>=A),512>=A)var L=a(512);else if((L=a(A))==null)return 0;return function(I,j,O,z,te,he){var B,re,se=j,be=1<<O,ce=a(16),xe=a(16);for(t(te!=0),t(z!=null),t(I!=null),t(0<O),re=0;re<te;++re){if(15<z[re])return 0;++ce[z[re]]}if(ce[0]==te)return 0;for(xe[1]=0,B=1;15>B;++B){if(ce[B]>1<<B)return 0;xe[B+1]=xe[B]+ce[B]}for(re=0;re<te;++re)B=z[re],0<z[re]&&(he[xe[B]++]=re);if(xe[15]==1)return(z=new Y).g=0,z.value=he[0],N(I,se,1,be,z),be;var Se,Ne=-1,Ce=be-1,We=0,Me=1,ft=1,ze=1<<O;for(re=0,B=1,te=2;B<=O;++B,te<<=1){if(Me+=ft<<=1,0>(ft-=ce[B]))return 0;for(;0<ce[B];--ce[B])(z=new Y).g=B,z.value=he[re++],N(I,se+We,te,ze,z),We=ee(We,B)}for(B=O+1,te=2;15>=B;++B,te<<=1){if(Me+=ft<<=1,0>(ft-=ce[B]))return 0;for(;0<ce[B];--ce[B]){if(z=new Y,(We&Ce)!=Ne){for(se+=ze,Se=1<<(Ne=B)-O;15>Ne&&!(0>=(Se-=ce[Ne]));)++Ne,Se<<=1;be+=ze=1<<(Se=Ne-O),I[j+(Ne=We&Ce)].g=Se+O,I[j+Ne].value=se-j-Ne}z.g=B-O,z.value=he[re++],N(I,se+(We>>O),te,ze,z),We=ee(We,B)}}return Me!=2*xe[15]-1?0:be}(s,u,g,b,A,L)}function Y(){this.value=this.g=0}function $(){this.value=this.g=0}function oe(){this.G=c(5,Y),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=c(no,$)}function le(s,u,g,b){t(s!=null),t(u!=null),t(2147483648>b),s.Ca=254,s.I=0,s.b=-8,s.Ka=0,s.oa=u,s.pa=g,s.Jd=u,s.Yc=g+b,s.Zc=4<=b?g+b-4+1:g,me(s)}function fe(s,u){for(var g=0;0<u--;)g|=ye(s,128)<<u;return g}function ae(s,u){var g=fe(s,u);return de(s)?-g:g}function pe(s,u,g,b){var A,L=0;for(t(s!=null),t(u!=null),t(4294967288>b),s.Sb=b,s.Ra=0,s.u=0,s.h=0,4<b&&(b=4),A=0;A<b;++A)L+=u[g+A]<<8*A;s.Ra=L,s.bb=b,s.oa=u,s.pa=g}function ke(s){for(;8<=s.u&&s.bb<s.Sb;)s.Ra>>>=8,s.Ra+=s.oa[s.pa+s.bb]<<Ci-8>>>0,++s.bb,s.u-=8;Z(s)&&(s.h=1,s.u=0)}function _e(s,u){if(t(0<=u),!s.h&&u<=Kr){var g=G(s)&Qr[u];return s.u+=u,ke(s),g}return s.h=1,s.u=0}function T(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function H(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function G(s){return s.Ra>>>(s.u&Ci-1)>>>0}function Z(s){return t(s.bb<=s.Sb),s.h||s.bb==s.Sb&&s.u>Ci}function ne(s,u){s.u=u,s.h=Z(s)}function ue(s){s.u>=ri&&(t(s.u>=ri),ke(s))}function me(s){t(s!=null&&s.oa!=null),s.pa<s.Zc?(s.I=(s.oa[s.pa++]|s.I<<8)>>>0,s.b+=8):(t(s!=null&&s.oa!=null),s.pa<s.Yc?(s.b+=8,s.I=s.oa[s.pa++]|s.I<<8):s.Ka?s.b=0:(s.I<<=8,s.b+=8,s.Ka=1))}function de(s){return fe(s,1)}function ye(s,u){var g=s.Ca;0>s.b&&me(s);var b=s.b,A=g*u>>>8,L=(s.I>>>b>A)+0;for(L?(g-=A,s.I-=A+1<<b>>>0):g=A+1,b=g,A=0;256<=b;)A+=8,b>>=8;return b=7^A+Ai[b],s.b-=b,s.Ca=(g<<b)-1,L}function Ie(s,u,g){s[u+0]=g>>24&255,s[u+1]=g>>16&255,s[u+2]=g>>8&255,s[u+3]=255&g}function Ee(s,u){return s[u+0]|s[u+1]<<8}function je(s,u){return Ee(s,u)|s[u+2]<<16}function ve(s,u){return Ee(s,u)|Ee(s,u+2)<<16}function W(s,u){var g=1<<u;return t(s!=null),t(0<u),s.X=a(g),s.X==null?0:(s.Mb=32-u,s.Xa=u,1)}function pt(s,u){t(s!=null),t(u!=null),t(s.Xa==u.Xa),n(u.X,0,s.X,0,1<<u.Xa)}function rt(){this.X=[],this.Xa=this.Mb=0}function Ye(s,u,g,b){t(g!=null),t(b!=null);var A=g[0],L=b[0];return A==0&&(A=(s*L+u/2)/u),L==0&&(L=(u*A+s/2)/s),0>=A||0>=L?0:(g[0]=A,b[0]=L,1)}function Le(s,u){return s+(1<<u)-1>>>u}function Ve(s,u){return((4278255360&s)+(4278255360&u)>>>0&4278255360)+((16711935&s)+(16711935&u)>>>0&16711935)>>>0}function Re(s,u){D[u]=function(g,b,A,L,I,j,O){var z;for(z=0;z<I;++z){var te=D[s](j[O+z-1],A,L+z);j[O+z]=Ve(g[b+z],te)}}}function Ze(){this.ud=this.hd=this.jd=0}function Ue(s,u){return((4278124286&(s^u))>>>1)+(s&u)>>>0}function bt(s){return 0<=s&&256>s?s:0>s?0:255<s?255:void 0}function et(s,u){return bt(s+(s-u+.5>>1))}function nt(s,u,g){return Math.abs(u-g)-Math.abs(s-g)}function Ct(s,u,g,b,A,L,I){for(b=L[I-1],g=0;g<A;++g)L[I+g]=b=Ve(s[u+g],b)}function at(s,u,g,b,A){var L;for(L=0;L<g;++L){var I=s[u+L],j=I>>8&255,O=16711935&(O=(O=16711935&I)+((j<<16)+j));b[A+L]=(4278255360&I)+O>>>0}}function qe(s,u){u.jd=255&s,u.hd=s>>8&255,u.ud=s>>16&255}function Ke(s,u,g,b,A,L){var I;for(I=0;I<b;++I){var j=u[g+I],O=j>>>8,z=j,te=255&(te=(te=j>>>16)+((s.jd<<24>>24)*(O<<24>>24)>>>5));z=255&(z=(z+=(s.hd<<24>>24)*(O<<24>>24)>>>5)+((s.ud<<24>>24)*(te<<24>>24)>>>5)),A[L+I]=(4278255360&j)+(te<<16)+z}}function He(s,u,g,b,A){D[u]=function(L,I,j,O,z,te,he,B,re){for(O=he;O<B;++O)for(he=0;he<re;++he)z[te++]=A(j[b(L[I++])])},D[s]=function(L,I,j,O,z,te,he){var B=8>>L.b,re=L.Ea,se=L.K[0],be=L.w;if(8>B)for(L=(1<<L.b)-1,be=(1<<B)-1;I<j;++I){var ce,xe=0;for(ce=0;ce<re;++ce)ce&L||(xe=b(O[z++])),te[he++]=A(se[xe&be]),xe>>=B}else D["VP8LMapColor"+g](O,z,se,be,te,he,I,j,re)}}function jt(s,u,g,b,A){for(g=u+g;u<g;){var L=s[u++];b[A++]=L>>16&255,b[A++]=L>>8&255,b[A++]=255&L}}function xt(s,u,g,b,A){for(g=u+g;u<g;){var L=s[u++];b[A++]=L>>16&255,b[A++]=L>>8&255,b[A++]=255&L,b[A++]=L>>24&255}}function De(s,u,g,b,A){for(g=u+g;u<g;){var L=(I=s[u++])>>16&240|I>>12&15,I=240&I|I>>28&15;b[A++]=L,b[A++]=I}}function st(s,u,g,b,A){for(g=u+g;u<g;){var L=(I=s[u++])>>16&248|I>>13&7,I=I>>5&224|I>>3&31;b[A++]=L,b[A++]=I}}function wt(s,u,g,b,A){for(g=u+g;u<g;){var L=s[u++];b[A++]=255&L,b[A++]=L>>8&255,b[A++]=L>>16&255}}function Je(s,u,g,b,A,L){if(L==0)for(g=u+g;u<g;)Ie(b,((L=s[u++])[0]>>24|L[1]>>8&65280|L[2]<<8&16711680|L[3]<<24)>>>0),A+=32;else n(b,A,s,u,g)}function mt(s,u){D[u][0]=D[s+"0"],D[u][1]=D[s+"1"],D[u][2]=D[s+"2"],D[u][3]=D[s+"3"],D[u][4]=D[s+"4"],D[u][5]=D[s+"5"],D[u][6]=D[s+"6"],D[u][7]=D[s+"7"],D[u][8]=D[s+"8"],D[u][9]=D[s+"9"],D[u][10]=D[s+"10"],D[u][11]=D[s+"11"],D[u][12]=D[s+"12"],D[u][13]=D[s+"13"],D[u][14]=D[s+"0"],D[u][15]=D[s+"0"]}function it(s){return s==pl||s==ml||s==Xa||s==gl}function qt(){this.eb=[],this.size=this.A=this.fb=0}function er(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Lt(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new qt,this.f.kb=new er,this.sd=null}function Xe(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function St(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Vn(s){return alert("todo:WebPSamplerProcessPlane"),s.T}function br(s,u){var g=s.T,b=u.ba.f.RGBA,A=b.eb,L=b.fb+s.ka*b.A,I=bn[u.ba.S],j=s.y,O=s.O,z=s.f,te=s.N,he=s.ea,B=s.W,re=u.cc,se=u.dc,be=u.Mc,ce=u.Nc,xe=s.ka,Se=s.ka+s.T,Ne=s.U,Ce=Ne+1>>1;for(xe==0?I(j,O,null,null,z,te,he,B,z,te,he,B,A,L,null,null,Ne):(I(u.ec,u.fc,j,O,re,se,be,ce,z,te,he,B,A,L-b.A,A,L,Ne),++g);xe+2<Se;xe+=2)re=z,se=te,be=he,ce=B,te+=s.Rc,B+=s.Rc,L+=2*b.A,I(j,(O+=2*s.fa)-s.fa,j,O,re,se,be,ce,z,te,he,B,A,L-b.A,A,L,Ne);return O+=s.fa,s.j+Se<s.o?(n(u.ec,u.fc,j,O,Ne),n(u.cc,u.dc,z,te,Ce),n(u.Mc,u.Nc,he,B,Ce),g--):1&Se||I(j,O,null,null,z,te,he,B,z,te,he,B,A,L+b.A,null,null,Ne),g}function Vr(s,u,g){var b=s.F,A=[s.J];if(b!=null){var L=s.U,I=u.ba.S,j=I==Ka||I==Xa;u=u.ba.f.RGBA;var O=[0],z=s.ka;O[0]=s.T,s.Kb&&(z==0?--O[0]:(--z,A[0]-=s.width),s.j+s.ka+s.T==s.o&&(O[0]=s.o-s.j-z));var te=u.eb;z=u.fb+z*u.A,s=Zc(b,A[0],s.width,L,O,te,z+(j?0:3),u.A),t(g==O),s&&it(I)&&fa(te,z,j,L,O,u.A)}return 0}function sn(s){var u=s.ma,g=u.ba.S,b=11>g,A=g==Ja||g==Qa||g==Ka||g==dl||g==12||it(g);if(u.memory=null,u.Ib=null,u.Jb=null,u.Nd=null,!ia(u.Oa,s,A?11:12))return 0;if(A&&it(g)&&Ha(),s.da)alert("todo:use_scaling");else{if(b){if(u.Ib=Vn,s.Kb){if(g=s.U+1>>1,u.memory=a(s.U+2*g),u.memory==null)return 0;u.ec=u.memory,u.fc=0,u.cc=u.ec,u.dc=u.fc+s.U,u.Mc=u.cc,u.Nc=u.dc+g,u.Ib=br,Ha()}}else alert("todo:EmitYUV");A&&(u.Jb=Vr,b&&pn())}if(b&&!mu){for(s=0;256>s;++s)F0[s]=89858*(s-128)+es>>Za,B0[s]=-22014*(s-128)+es,z0[s]=-45773*(s-128),D0[s]=113618*(s-128)+es>>Za;for(s=pa;s<xl;++s)u=76283*(s-16)+es>>Za,U0[s-pa]=Qt(u,255),q0[s-pa]=Qt(u+8>>4,15);mu=1}return 1}function Qe(s){var u=s.ma,g=s.U,b=s.T;return t(!(1&s.ka)),0>=g||0>=b?0:(g=u.Ib(s,u),u.Jb!=null&&u.Jb(s,u,g),u.Dc+=g,1)}function wn(s){s.ma.memory=null}function yn(s,u,g,b){return _e(s,8)!=47?0:(u[0]=_e(s,14)+1,g[0]=_e(s,14)+1,b[0]=_e(s,1),_e(s,3)!=0?0:!s.h)}function Er(s,u){if(4>s)return s+1;var g=s-2>>1;return(2+(1&s)<<g)+_e(u,g)+1}function xr(s,u){return 120<u?u-120:1<=(g=((g=_0[u-1])>>4)*s+(8-(15&g)))?g:1;var g}function Ht(s,u,g){var b=G(g),A=s[u+=255&b].g-8;return 0<A&&(ne(g,g.u+8),b=G(g),u+=s[u].value,u+=b&(1<<A)-1),ne(g,g.u+s[u].g),s[u].value}function Yt(s,u,g){return g.g+=s.g,g.value+=s.value<<u>>>0,t(8>=g.g),s.g}function lr(s,u,g){var b=s.xc;return t((u=b==0?0:s.vc[s.md*(g>>b)+(u>>b)])<s.Wb),s.Ya[u]}function Wn(s,u,g,b){var A=s.ab,L=s.c*u,I=s.C;u=I+u;var j=g,O=b;for(b=s.Ta,g=s.Ua;0<A--;){var z=s.gc[A],te=I,he=u,B=j,re=O,se=(O=b,j=g,z.Ea);switch(t(te<he),t(he<=z.nc),z.hc){case 2:tr(B,re,(he-te)*se,O,j);break;case 0:var be=te,ce=he,xe=O,Se=j,Ne=(ze=z).Ea;be==0&&(aa(B,re,null,null,1,xe,Se),Ct(B,re+1,0,0,Ne-1,xe,Se+1),re+=Ne,Se+=Ne,++be);for(var Ce=1<<ze.b,We=Ce-1,Me=Le(Ne,ze.b),ft=ze.K,ze=ze.w+(be>>ze.b)*Me;be<ce;){var vt=ft,mr=ze,dt=1;for(No(B,re,xe,Se-Ne,1,xe,Se);dt<Ne;){var Be=(dt&~We)+Ce;Be>Ne&&(Be=Ne),(0,la[vt[mr++]>>8&15])(B,re+ +dt,xe,Se+dt-Ne,Be-dt,xe,Se+dt),dt=Be}re+=Ne,Se+=Ne,++be&We||(ze+=Me)}he!=z.nc&&n(O,j-se,O,j+(he-te-1)*se,se);break;case 1:for(se=B,ce=re,Ne=(B=z.Ea)-(Se=B&~(xe=(re=1<<z.b)-1)),be=Le(B,z.b),Ce=z.K,z=z.w+(te>>z.b)*be;te<he;){for(We=Ce,Me=z,ft=new Ze,ze=ce+Se,vt=ce+B;ce<ze;)qe(We[Me++],ft),ca(ft,se,ce,re,O,j),ce+=re,j+=re;ce<vt&&(qe(We[Me++],ft),ca(ft,se,ce,Ne,O,j),ce+=Ne,j+=Ne),++te&xe||(z+=be)}break;case 3:if(B==O&&re==j&&0<z.b){for(ce=O,B=se=j+(he-te)*se-(Se=(he-te)*Le(z.Ea,z.b)),re=O,xe=j,be=[],Se=(Ne=Se)-1;0<=Se;--Se)be[Se]=re[xe+Se];for(Se=Ne-1;0<=Se;--Se)ce[B+Se]=be[Se];Va(z,te,he,O,se,O,j)}else Va(z,te,he,B,re,O,j)}j=b,O=g}O!=g&&n(b,g,j,O,L)}function ln(s,u){var g=s.V,b=s.Ba+s.c*s.C,A=u-s.C;if(t(u<=s.l.o),t(16>=A),0<A){var L=s.l,I=s.Ta,j=s.Ua,O=L.width;if(Wn(s,A,g,b),A=j=[j],t((g=s.C)<(b=u)),t(L.v<L.va),b>L.o&&(b=L.o),g<L.j){var z=L.j-g;g=L.j,A[0]+=z*O}if(g>=b?g=0:(A[0]+=4*L.v,L.ka=g-L.j,L.U=L.va-L.v,L.T=b-g,g=1),g){if(j=j[0],11>(g=s.ca).S){var te=g.f.RGBA,he=(b=g.S,A=L.U,L=L.T,z=te.eb,te.A),B=L;for(te=te.fb+s.Ma*te.A;0<B--;){var re=I,se=j,be=A,ce=z,xe=te;switch(b){case Ya:ua(re,se,be,ce,xe);break;case Ja:ki(re,se,be,ce,xe);break;case pl:ki(re,se,be,ce,xe),fa(ce,xe,0,be,1,0);break;case au:io(re,se,be,ce,xe);break;case Qa:Je(re,se,be,ce,xe,1);break;case ml:Je(re,se,be,ce,xe,1),fa(ce,xe,0,be,1,0);break;case Ka:Je(re,se,be,ce,xe,0);break;case Xa:Je(re,se,be,ce,xe,0),fa(ce,xe,1,be,1,0);break;case dl:Li(re,se,be,ce,xe);break;case gl:Li(re,se,be,ce,xe),Xc(ce,xe,be,1,0);break;case su:Ni(re,se,be,ce,xe);break;default:t(0)}j+=O,te+=he}s.Ma+=L}else alert("todo:EmitRescaledRowsYUVA");t(s.Ma<=g.height)}}s.C=u,t(s.C<=s.i)}function Wr(s){var u;if(0<s.ua)return 0;for(u=0;u<s.Wb;++u){var g=s.Ya[u].G,b=s.Ya[u].H;if(0<g[1][b[1]+0].g||0<g[2][b[2]+0].g||0<g[3][b[3]+0].g)return 0}return 1}function Gr(s,u,g,b,A,L){if(s.Z!=0){var I=s.qd,j=s.rd;for(t(Pi[s.Z]!=null);u<g;++u)Pi[s.Z](I,j,b,A,b,A,L),I=b,j=A,A+=L;s.qd=I,s.rd=j}}function Yr(s,u){var g=s.l.ma,b=g.Z==0||g.Z==1?s.l.j:s.C;if(b=s.C<b?b:s.C,t(u<=s.l.o),u>b){var A=s.l.width,L=g.ca,I=g.tb+A*b,j=s.V,O=s.Ba+s.c*b,z=s.gc;t(s.ab==1),t(z[0].hc==3),On(z[0],b,u,j,O,L,I),Gr(g,b,u,L,I,A)}s.C=s.Ma=u}function Dr(s,u,g,b,A,L,I){var j=s.$/b,O=s.$%b,z=s.m,te=s.s,he=g+s.$,B=he;A=g+b*A;var re=g+b*L,se=280+te.ua,be=s.Pb?j:16777216,ce=0<te.ua?te.Wa:null,xe=te.wc,Se=he<re?lr(te,O,j):null;t(s.C<L),t(re<=A);var Ne=!1;e:for(;;){for(;Ne||he<re;){var Ce=0;if(j>=be){var We=he-g;t((be=s).Pb),be.wd=be.m,be.xd=We,0<be.s.ua&&pt(be.s.Wa,be.s.vb),be=j+A0}if(O&xe||(Se=lr(te,O,j)),t(Se!=null),Se.Qb&&(u[he]=Se.qb,Ne=!0),!Ne)if(ue(z),Se.jc){Ce=z,We=u;var Me=he,ft=Se.pd[G(Ce)&no-1];t(Se.jc),256>ft.g?(ne(Ce,Ce.u+ft.g),We[Me]=ft.value,Ce=0):(ne(Ce,Ce.u+ft.g-256),t(256<=ft.value),Ce=ft.value),Ce==0&&(Ne=!0)}else Ce=Ht(Se.G[0],Se.H[0],z);if(z.h)break;if(Ne||256>Ce){if(!Ne)if(Se.nd)u[he]=(Se.qb|Ce<<8)>>>0;else{if(ue(z),Ne=Ht(Se.G[1],Se.H[1],z),ue(z),We=Ht(Se.G[2],Se.H[2],z),Me=Ht(Se.G[3],Se.H[3],z),z.h)break;u[he]=(Me<<24|Ne<<16|Ce<<8|We)>>>0}if(Ne=!1,++he,++O>=b&&(O=0,++j,I!=null&&j<=L&&!(j%16)&&I(s,j),ce!=null))for(;B<he;)Ce=u[B++],ce.X[(506832829*Ce&4294967295)>>>ce.Mb]=Ce}else if(280>Ce){if(Ce=Er(Ce-256,z),We=Ht(Se.G[4],Se.H[4],z),ue(z),We=xr(b,We=Er(We,z)),z.h)break;if(he-g<We||A-he<Ce)break e;for(Me=0;Me<Ce;++Me)u[he+Me]=u[he+Me-We];for(he+=Ce,O+=Ce;O>=b;)O-=b,++j,I!=null&&j<=L&&!(j%16)&&I(s,j);if(t(he<=A),O&xe&&(Se=lr(te,O,j)),ce!=null)for(;B<he;)Ce=u[B++],ce.X[(506832829*Ce&4294967295)>>>ce.Mb]=Ce}else{if(!(Ce<se))break e;for(Ne=Ce-280,t(ce!=null);B<he;)Ce=u[B++],ce.X[(506832829*Ce&4294967295)>>>ce.Mb]=Ce;Ce=he,t(!(Ne>>>(We=ce).Xa)),u[Ce]=We.X[Ne],Ne=!0}Ne||t(z.h==Z(z))}if(s.Pb&&z.h&&he<A)t(s.m.h),s.a=5,s.m=s.wd,s.$=s.xd,0<s.s.ua&&pt(s.s.vb,s.s.Wa);else{if(z.h)break e;I!=null&&I(s,j>L?L:j),s.a=0,s.$=he-g}return 1}return s.a=3,0}function zr(s){t(s!=null),s.vc=null,s.yc=null,s.Ya=null;var u=s.Wa;u!=null&&(u.X=null),s.vb=null,t(s!=null)}function Sn(){var s=new $e;return s==null?null:(s.a=0,s.xb=uu,mt("Predictor","VP8LPredictors"),mt("Predictor","VP8LPredictors_C"),mt("PredictorAdd","VP8LPredictorsAdd"),mt("PredictorAdd","VP8LPredictorsAdd_C"),tr=at,ca=Ke,ua=jt,ki=xt,Li=De,Ni=st,io=wt,D.VP8LMapColor32b=Mn,D.VP8LMapColor8b=sa,s)}function cn(s,u,g,b,A){var L=1,I=[s],j=[u],O=b.m,z=b.s,te=null,he=0;e:for(;;){if(g)for(;L&&_e(O,1);){var B=I,re=j,se=b,be=1,ce=se.m,xe=se.gc[se.ab],Se=_e(ce,2);if(se.Oc&1<<Se)L=0;else{switch(se.Oc|=1<<Se,xe.hc=Se,xe.Ea=B[0],xe.nc=re[0],xe.K=[null],++se.ab,t(4>=se.ab),Se){case 0:case 1:xe.b=_e(ce,3)+2,be=cn(Le(xe.Ea,xe.b),Le(xe.nc,xe.b),0,se,xe.K),xe.K=xe.K[0];break;case 3:var Ne,Ce=_e(ce,8)+1,We=16<Ce?0:4<Ce?1:2<Ce?2:3;if(B[0]=Le(xe.Ea,We),xe.b=We,Ne=be=cn(Ce,1,0,se,xe.K)){var Me,ft=Ce,ze=xe,vt=1<<(8>>ze.b),mr=a(vt);if(mr==null)Ne=0;else{var dt=ze.K[0],Be=ze.w;for(mr[0]=ze.K[0][0],Me=1;Me<1*ft;++Me)mr[Me]=Ve(dt[Be+Me],mr[Me-1]);for(;Me<4*vt;++Me)mr[Me]=0;ze.K[0]=null,ze.K[0]=mr,Ne=1}}be=Ne;break;case 2:break;default:t(0)}L=be}}if(I=I[0],j=j[0],L&&_e(O,1)&&!(L=1<=(he=_e(O,4))&&11>=he)){b.a=3;break e}var Pe;if(Pe=L)t:{var nr,ht,yt,zt=b,Sr=I,Mr=j,Kt=he,Lr=g,Or=zt.m,gr=zt.s,_t=[null],It=1,Xt=0,Tt=C0[Kt];r:for(;;){if(Lr&&_e(Or,1)){var _r=_e(Or,3)+2,Cn=Le(Sr,_r),ir=Le(Mr,_r),qr=Cn*ir;if(!cn(Cn,ir,0,zt,_t))break r;for(_t=_t[0],gr.xc=_r,nr=0;nr<qr;++nr){var Mt=_t[nr]>>8&65535;_t[nr]=Mt,Mt>=It&&(It=Mt+1)}}if(Or.h)break r;for(ht=0;5>ht;++ht){var vr=lu[ht];!ht&&0<Kt&&(vr+=1<<Kt),Xt<vr&&(Xt=vr)}var Zr=c(It*Tt,Y),Fr=It,en=c(Fr,oe);if(en==null)var tn=null;else t(65536>=Fr),tn=en;var Hr=a(Xt);if(tn==null||Hr==null||Zr==null){zt.a=1;break r}var rn=Zr;for(nr=yt=0;nr<It;++nr){var Dt=tn[nr],nn=Dt.G,An=Dt.H,ao=0,oi=1,Cr=0;for(ht=0;5>ht;++ht){vr=lu[ht],nn[ht]=rn,An[ht]=yt,!ht&&0<Kt&&(vr+=1<<Kt);i:{var rs,wl=vr,ns=zt,ma=Hr,V0=rn,W0=yt,yl=0,ji=ns.m,G0=_e(ji,1);if(o(ma,0,0,wl),G0){var Y0=_e(ji,1)+1,J0=_e(ji,1),bu=_e(ji,J0==0?1:8);ma[bu]=1,Y0==2&&(ma[bu=_e(ji,8)]=1);var is=1}else{var xu=a(19),wu=_e(ji,4)+4;if(19<wu){ns.a=3;var os=0;break i}for(rs=0;rs<wu;++rs)xu[S0[rs]]=_e(ji,3);var Sl=void 0,ga=void 0,yu=ns,Q0=xu,as=wl,Su=ma,_l=0,Ei=yu.m,_u=8,Cu=c(128,Y);n:for(;M(Cu,0,7,Q0,19);){if(_e(Ei,1)){var K0=2+2*_e(Ei,3);if((Sl=2+_e(Ei,K0))>as)break n}else Sl=as;for(ga=0;ga<as&&Sl--;){ue(Ei);var Au=Cu[0+(127&G(Ei))];ne(Ei,Ei.u+Au.g);var To=Au.value;if(16>To)Su[ga++]=To,To!=0&&(_u=To);else{var X0=To==16,ku=To-16,Z0=w0[ku],Lu=_e(Ei,x0[ku])+Z0;if(ga+Lu>as)break n;for(var ef=X0?_u:0;0<Lu--;)Su[ga++]=ef}}_l=1;break n}_l||(yu.a=3),is=_l}(is=is&&!ji.h)&&(yl=M(V0,W0,8,ma,wl)),is&&yl!=0?os=yl:(ns.a=3,os=0)}if(os==0)break r;if(oi&&y0[ht]==1&&(oi=rn[yt].g==0),ao+=rn[yt].g,yt+=os,3>=ht){var va,Cl=Hr[0];for(va=1;va<vr;++va)Hr[va]>Cl&&(Cl=Hr[va]);Cr+=Cl}}if(Dt.nd=oi,Dt.Qb=0,oi&&(Dt.qb=(nn[3][An[3]+0].value<<24|nn[1][An[1]+0].value<<16|nn[2][An[2]+0].value)>>>0,ao==0&&256>nn[0][An[0]+0].value&&(Dt.Qb=1,Dt.qb+=nn[0][An[0]+0].value<<8)),Dt.jc=!Dt.Qb&&6>Cr,Dt.jc){var ss,ai=Dt;for(ss=0;ss<no;++ss){var Ri=ss,Mi=ai.pd[Ri],ls=ai.G[0][ai.H[0]+Ri];256<=ls.value?(Mi.g=ls.g+256,Mi.value=ls.value):(Mi.g=0,Mi.value=0,Ri>>=Yt(ls,8,Mi),Ri>>=Yt(ai.G[1][ai.H[1]+Ri],16,Mi),Ri>>=Yt(ai.G[2][ai.H[2]+Ri],0,Mi),Yt(ai.G[3][ai.H[3]+Ri],24,Mi))}}}gr.vc=_t,gr.Wb=It,gr.Ya=tn,gr.yc=Zr,Pe=1;break t}Pe=0}if(!(L=Pe)){b.a=3;break e}if(0<he){if(z.ua=1<<he,!W(z.Wa,he)){b.a=1,L=0;break e}}else z.ua=0;var Al=b,Nu=I,tf=j,kl=Al.s,Ll=kl.xc;if(Al.c=Nu,Al.i=tf,kl.md=Le(Nu,Ll),kl.wc=Ll==0?-1:(1<<Ll)-1,g){b.xb=j0;break e}if((te=a(I*j))==null){b.a=1,L=0;break e}L=(L=Dr(b,te,0,I,j,j,null))&&!O.h;break e}return L?(A!=null?A[0]=te:(t(te==null),t(g)),b.$=0,g||zr(z)):zr(z),L}function un(s,u){var g=s.c*s.i,b=g+u+16*u;return t(s.c<=u),s.V=a(b),s.V==null?(s.Ta=null,s.Ua=0,s.a=1,0):(s.Ta=s.V,s.Ua=s.Ba+g+u,1)}function mi(s,u){var g=s.C,b=u-g,A=s.V,L=s.Ba+s.c*g;for(t(u<=s.l.o);0<b;){var I=16<b?16:b,j=s.l.ma,O=s.l.width,z=O*I,te=j.ca,he=j.tb+O*g,B=s.Ta,re=s.Ua;Wn(s,I,A,L),eu(B,re,te,he,z),Gr(j,g,g+I,te,he,O),b-=I,A+=I*s.c,g+=I}t(g==u),s.C=s.Ma=u}function Pn(){this.ub=this.yd=this.td=this.Rb=0}function Gn(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Yn(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function gi(){this.Yb=function(){var s=[];return function u(g,b,A){for(var L=A[b],I=0;I<L&&(g.push(A.length>b+1?[]:0),!(A.length<b+1));I++)u(g[I],b+1,A)}(s,0,[3,11]),s}()}function vo(){this.jb=a(3),this.Wc=l([4,8],gi),this.Xc=l([4,17],gi)}function bo(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Br(){this.ld=this.La=this.dd=this.tc=0}function ge(){this.Na=this.la=0}function gt(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Jt(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function hn(){this.uc=this.M=this.Nb=0,this.wa=Array(new Br),this.Y=0,this.ya=Array(new Jt),this.aa=0,this.l=new Jn}function Rr(){this.y=a(16),this.f=a(8),this.ea=a(8)}function vi(){this.cb=this.a=0,this.sc="",this.m=new T,this.Od=new Pn,this.Kc=new Gn,this.ed=new bo,this.Qa=new Yn,this.Ic=this.$c=this.Aa=0,this.D=new hn,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=c(8,T),this.ia=0,this.pb=c(4,gt),this.Pa=new vo,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Rr),this.Hd=0,this.rb=Array(new ge),this.sb=0,this.wa=Array(new Br),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Jt),this.L=this.aa=0,this.gd=l([4,2],Br),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Jn(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Wo(){var s=new vi;return s!=null&&(s.a=0,s.sc="OK",s.cb=0,s.Xb=0,da||(da=fn)),s}function At(s,u,g){return s.a==0&&(s.a=u,s.sc=g,s.cb=0),0}function bi(s,u,g){return 3<=g&&s[u+0]==157&&s[u+1]==1&&s[u+2]==42}function xo(s,u){if(s==null)return 0;if(s.a=0,s.sc="OK",u==null)return At(s,2,"null VP8Io passed to VP8GetHeaders()");var g=u.data,b=u.w,A=u.ha;if(4>A)return At(s,7,"Truncated header.");var L=g[b+0]|g[b+1]<<8|g[b+2]<<16,I=s.Od;if(I.Rb=!(1&L),I.td=L>>1&7,I.yd=L>>4&1,I.ub=L>>5,3<I.td)return At(s,3,"Incorrect keyframe parameters.");if(!I.yd)return At(s,4,"Frame not displayable.");b+=3,A-=3;var j=s.Kc;if(I.Rb){if(7>A)return At(s,7,"cannot parse picture header");if(!bi(g,b,A))return At(s,3,"Bad code word");j.c=16383&(g[b+4]<<8|g[b+3]),j.Td=g[b+4]>>6,j.i=16383&(g[b+6]<<8|g[b+5]),j.Ud=g[b+6]>>6,b+=7,A-=7,s.za=j.c+15>>4,s.Ub=j.i+15>>4,u.width=j.c,u.height=j.i,u.Da=0,u.j=0,u.v=0,u.va=u.width,u.o=u.height,u.da=0,u.ib=u.width,u.hb=u.height,u.U=u.width,u.T=u.height,o((L=s.Pa).jb,0,255,L.jb.length),t((L=s.Qa)!=null),L.Cb=0,L.Bb=0,L.Fb=1,o(L.Zb,0,0,L.Zb.length),o(L.Lb,0,0,L.Lb)}if(I.ub>A)return At(s,7,"bad partition length");le(L=s.m,g,b,I.ub),b+=I.ub,A-=I.ub,I.Rb&&(j.Ld=de(L),j.Kd=de(L)),j=s.Qa;var O,z=s.Pa;if(t(L!=null),t(j!=null),j.Cb=de(L),j.Cb){if(j.Bb=de(L),de(L)){for(j.Fb=de(L),O=0;4>O;++O)j.Zb[O]=de(L)?ae(L,7):0;for(O=0;4>O;++O)j.Lb[O]=de(L)?ae(L,6):0}if(j.Bb)for(O=0;3>O;++O)z.jb[O]=de(L)?fe(L,8):255}else j.Bb=0;if(L.Ka)return At(s,3,"cannot parse segment header");if((j=s.ed).zd=de(L),j.Tb=fe(L,6),j.wb=fe(L,3),j.Pc=de(L),j.Pc&&de(L)){for(z=0;4>z;++z)de(L)&&(j.vd[z]=ae(L,6));for(z=0;4>z;++z)de(L)&&(j.od[z]=ae(L,6))}if(s.L=j.Tb==0?0:j.zd?1:2,L.Ka)return At(s,3,"cannot parse filter header");var te=A;if(A=O=b,b=O+te,j=te,s.Xb=(1<<fe(s.m,2))-1,te<3*(z=s.Xb))g=7;else{for(O+=3*z,j-=3*z,te=0;te<z;++te){var he=g[A+0]|g[A+1]<<8|g[A+2]<<16;he>j&&(he=j),le(s.Jc[+te],g,O,he),O+=he,j-=he,A+=3}le(s.Jc[+z],g,O,j),g=O<b?0:5}if(g!=0)return At(s,g,"cannot parse partitions");for(g=fe(O=s.m,7),A=de(O)?ae(O,4):0,b=de(O)?ae(O,4):0,j=de(O)?ae(O,4):0,z=de(O)?ae(O,4):0,O=de(O)?ae(O,4):0,te=s.Qa,he=0;4>he;++he){if(te.Cb){var B=te.Zb[he];te.Fb||(B+=g)}else{if(0<he){s.pb[he]=s.pb[0];continue}B=g}var re=s.pb[he];re.Sc[0]=vl[Qt(B+A,127)],re.Sc[1]=bl[Qt(B+0,127)],re.Eb[0]=2*vl[Qt(B+b,127)],re.Eb[1]=101581*bl[Qt(B+j,127)]>>16,8>re.Eb[1]&&(re.Eb[1]=8),re.Qc[0]=vl[Qt(B+z,117)],re.Qc[1]=bl[Qt(B+O,127)],re.lc=B+O}if(!I.Rb)return At(s,4,"Not a key frame.");for(de(L),I=s.Pa,g=0;4>g;++g){for(A=0;8>A;++A)for(b=0;3>b;++b)for(j=0;11>j;++j)z=ye(L,T0[g][A][b][j])?fe(L,8):N0[g][A][b][j],I.Wc[g][A].Yb[b][j]=z;for(A=0;17>A;++A)I.Xc[g][A]=I.Wc[g][P0[A]]}return s.kc=de(L),s.kc&&(s.Bd=fe(L,8)),s.cb=1}function fn(s,u,g,b,A,L,I){var j=u[A].Yb[g];for(g=0;16>A;++A){if(!ye(s,j[g+0]))return A;for(;!ye(s,j[g+1]);)if(j=u[++A].Yb[0],g=0,A==16)return 16;var O=u[A+1].Yb;if(ye(s,j[g+2])){var z=s,te=0;if(ye(z,(B=j)[(he=g)+3]))if(ye(z,B[he+6])){for(j=0,he=2*(te=ye(z,B[he+8]))+(B=ye(z,B[he+9+te])),te=0,B=k0[he];B[j];++j)te+=te+ye(z,B[j]);te+=3+(8<<he)}else ye(z,B[he+7])?(te=7+2*ye(z,165),te+=ye(z,145)):te=5+ye(z,159);else te=ye(z,B[he+4])?3+ye(z,B[he+5]):2;j=O[2]}else te=1,j=O[1];O=I+L0[A],0>(z=s).b&&me(z);var he,B=z.b,re=(he=z.Ca>>1)-(z.I>>B)>>31;--z.b,z.Ca+=re,z.Ca|=1,z.I-=(he+1&re)<<B,L[O]=((te^re)-re)*b[(0<A)+0]}return 16}function jn(s){var u=s.rb[s.sb-1];u.la=0,u.Na=0,o(s.zc,0,0,s.zc.length),s.ja=0}function Jr(s,u,g,b,A){A=s[u+g+32*b]+(A>>3),s[u+g+32*b]=-256&A?0>A?0:255:A}function En(s,u,g,b,A,L){Jr(s,u,0,g,b+A),Jr(s,u,1,g,b+L),Jr(s,u,2,g,b-L),Jr(s,u,3,g,b-A)}function $t(s){return(20091*s>>16)+s}function xi(s,u,g,b){var A,L=0,I=a(16);for(A=0;4>A;++A){var j=s[u+0]+s[u+8],O=s[u+0]-s[u+8],z=(35468*s[u+4]>>16)-$t(s[u+12]),te=$t(s[u+4])+(35468*s[u+12]>>16);I[L+0]=j+te,I[L+1]=O+z,I[L+2]=O-z,I[L+3]=j-te,L+=4,u++}for(A=L=0;4>A;++A)j=(s=I[L+0]+4)+I[L+8],O=s-I[L+8],z=(35468*I[L+4]>>16)-$t(I[L+12]),Jr(g,b,0,0,j+(te=$t(I[L+4])+(35468*I[L+12]>>16))),Jr(g,b,1,0,O+z),Jr(g,b,2,0,O-z),Jr(g,b,3,0,j-te),L++,b+=32}function wo(s,u,g,b){var A=s[u+0]+4,L=35468*s[u+4]>>16,I=$t(s[u+4]),j=35468*s[u+1]>>16;En(g,b,0,A+I,s=$t(s[u+1]),j),En(g,b,1,A+L,s,j),En(g,b,2,A-L,s,j),En(g,b,3,A-I,s,j)}function yo(s,u,g,b,A){xi(s,u,g,b),A&&xi(s,u+16,g,b+4)}function Go(s,u,g,b){oo(s,u+0,g,b,1),oo(s,u+32,g,b+128,1)}function dn(s,u,g,b){var A;for(s=s[u+0]+4,A=0;4>A;++A)for(u=0;4>u;++u)Jr(g,b,u,A,s)}function Rn(s,u,g,b){s[u+0]&&Nt(s,u+0,g,b),s[u+16]&&Nt(s,u+16,g,b+4),s[u+32]&&Nt(s,u+32,g,b+128),s[u+48]&&Nt(s,u+48,g,b+128+4)}function Qn(s,u,g,b){var A,L=a(16);for(A=0;4>A;++A){var I=s[u+0+A]+s[u+12+A],j=s[u+4+A]+s[u+8+A],O=s[u+4+A]-s[u+8+A],z=s[u+0+A]-s[u+12+A];L[0+A]=I+j,L[8+A]=I-j,L[4+A]=z+O,L[12+A]=z-O}for(A=0;4>A;++A)I=(s=L[0+4*A]+3)+L[3+4*A],j=L[1+4*A]+L[2+4*A],O=L[1+4*A]-L[2+4*A],z=s-L[3+4*A],g[b+0]=I+j>>3,g[b+16]=z+O>>3,g[b+32]=I-j>>3,g[b+48]=z-O>>3,b+=64}function wi(s,u,g){var b,A=u-32,L=Xr,I=255-s[A-1];for(b=0;b<g;++b){var j,O=L,z=I+s[u-1];for(j=0;j<g;++j)s[u+j]=O[z+s[A+j]];u+=32}}function Yo(s,u){wi(s,u,4)}function tl(s,u){wi(s,u,8)}function rl(s,u){wi(s,u,16)}function nl(s,u){var g;for(g=0;16>g;++g)n(s,u+32*g,s,u-32,16)}function Jo(s,u){var g;for(g=16;0<g;--g)o(s,u,s[u-1],16),u+=32}function Hi(s,u,g){var b;for(b=0;16>b;++b)o(u,g+32*b,s,16)}function yi(s,u){var g,b=16;for(g=0;16>g;++g)b+=s[u-1+32*g]+s[u+g-32];Hi(b>>5,s,u)}function il(s,u){var g,b=8;for(g=0;16>g;++g)b+=s[u-1+32*g];Hi(b>>4,s,u)}function $i(s,u){var g,b=8;for(g=0;16>g;++g)b+=s[u+g-32];Hi(b>>4,s,u)}function Qo(s,u){Hi(128,s,u)}function lt(s,u,g){return s+2*u+g+2>>2}function ol(s,u){var g,b=u-32;for(b=new Uint8Array([lt(s[b-1],s[b+0],s[b+1]),lt(s[b+0],s[b+1],s[b+2]),lt(s[b+1],s[b+2],s[b+3]),lt(s[b+2],s[b+3],s[b+4])]),g=0;4>g;++g)n(s,u+32*g,b,0,b.length)}function al(s,u){var g=s[u-1],b=s[u-1+32],A=s[u-1+64],L=s[u-1+96];Ie(s,u+0,16843009*lt(s[u-1-32],g,b)),Ie(s,u+32,16843009*lt(g,b,A)),Ie(s,u+64,16843009*lt(b,A,L)),Ie(s,u+96,16843009*lt(A,L,L))}function sl(s,u){var g,b=4;for(g=0;4>g;++g)b+=s[u+g-32]+s[u-1+32*g];for(b>>=3,g=0;4>g;++g)o(s,u+32*g,b,4)}function ll(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1-32],I=s[u+0-32],j=s[u+1-32],O=s[u+2-32],z=s[u+3-32];s[u+0+96]=lt(b,A,s[u-1+96]),s[u+1+96]=s[u+0+64]=lt(g,b,A),s[u+2+96]=s[u+1+64]=s[u+0+32]=lt(L,g,b),s[u+3+96]=s[u+2+64]=s[u+1+32]=s[u+0+0]=lt(I,L,g),s[u+3+64]=s[u+2+32]=s[u+1+0]=lt(j,I,L),s[u+3+32]=s[u+2+0]=lt(O,j,I),s[u+3+0]=lt(z,O,j)}function Kn(s,u){var g=s[u+1-32],b=s[u+2-32],A=s[u+3-32],L=s[u+4-32],I=s[u+5-32],j=s[u+6-32],O=s[u+7-32];s[u+0+0]=lt(s[u+0-32],g,b),s[u+1+0]=s[u+0+32]=lt(g,b,A),s[u+2+0]=s[u+1+32]=s[u+0+64]=lt(b,A,L),s[u+3+0]=s[u+2+32]=s[u+1+64]=s[u+0+96]=lt(A,L,I),s[u+3+32]=s[u+2+64]=s[u+1+96]=lt(L,I,j),s[u+3+64]=s[u+2+96]=lt(I,j,O),s[u+3+96]=lt(j,O,O)}function Xn(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1-32],I=s[u+0-32],j=s[u+1-32],O=s[u+2-32],z=s[u+3-32];s[u+0+0]=s[u+1+64]=L+I+1>>1,s[u+1+0]=s[u+2+64]=I+j+1>>1,s[u+2+0]=s[u+3+64]=j+O+1>>1,s[u+3+0]=O+z+1>>1,s[u+0+96]=lt(A,b,g),s[u+0+64]=lt(b,g,L),s[u+0+32]=s[u+1+96]=lt(g,L,I),s[u+1+32]=s[u+2+96]=lt(L,I,j),s[u+2+32]=s[u+3+96]=lt(I,j,O),s[u+3+32]=lt(j,O,z)}function cl(s,u){var g=s[u+0-32],b=s[u+1-32],A=s[u+2-32],L=s[u+3-32],I=s[u+4-32],j=s[u+5-32],O=s[u+6-32],z=s[u+7-32];s[u+0+0]=g+b+1>>1,s[u+1+0]=s[u+0+64]=b+A+1>>1,s[u+2+0]=s[u+1+64]=A+L+1>>1,s[u+3+0]=s[u+2+64]=L+I+1>>1,s[u+0+32]=lt(g,b,A),s[u+1+32]=s[u+0+96]=lt(b,A,L),s[u+2+32]=s[u+1+96]=lt(A,L,I),s[u+3+32]=s[u+2+96]=lt(L,I,j),s[u+3+64]=lt(I,j,O),s[u+3+96]=lt(j,O,z)}function ul(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1+96];s[u+0+0]=g+b+1>>1,s[u+2+0]=s[u+0+32]=b+A+1>>1,s[u+2+32]=s[u+0+64]=A+L+1>>1,s[u+1+0]=lt(g,b,A),s[u+3+0]=s[u+1+32]=lt(b,A,L),s[u+3+32]=s[u+1+64]=lt(A,L,L),s[u+3+64]=s[u+2+64]=s[u+0+96]=s[u+1+96]=s[u+2+96]=s[u+3+96]=L}function So(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1+96],I=s[u-1-32],j=s[u+0-32],O=s[u+1-32],z=s[u+2-32];s[u+0+0]=s[u+2+32]=g+I+1>>1,s[u+0+32]=s[u+2+64]=b+g+1>>1,s[u+0+64]=s[u+2+96]=A+b+1>>1,s[u+0+96]=L+A+1>>1,s[u+3+0]=lt(j,O,z),s[u+2+0]=lt(I,j,O),s[u+1+0]=s[u+3+32]=lt(g,I,j),s[u+1+32]=s[u+3+64]=lt(b,g,I),s[u+1+64]=s[u+3+96]=lt(A,b,g),s[u+1+96]=lt(L,A,b)}function Ko(s,u){var g;for(g=0;8>g;++g)n(s,u+32*g,s,u-32,8)}function Vi(s,u){var g;for(g=0;8>g;++g)o(s,u,s[u-1],8),u+=32}function _o(s,u,g){var b;for(b=0;8>b;++b)o(u,g+32*b,s,8)}function Co(s,u){var g,b=8;for(g=0;8>g;++g)b+=s[u+g-32]+s[u-1+32*g];_o(b>>4,s,u)}function hl(s,u){var g,b=4;for(g=0;8>g;++g)b+=s[u+g-32];_o(b>>3,s,u)}function Xo(s,u){var g,b=4;for(g=0;8>g;++g)b+=s[u-1+32*g];_o(b>>3,s,u)}function Zo(s,u){_o(128,s,u)}function Wi(s,u,g){var b=s[u-g],A=s[u+0],L=3*(A-b)+fl[1020+s[u-2*g]-s[u+g]],I=Ga[112+(L+4>>3)];s[u-g]=Xr[255+b+Ga[112+(L+3>>3)]],s[u+0]=Xr[255+A-I]}function Gi(s,u,g,b){var A=s[u+0],L=s[u+g];return vn[255+s[u-2*g]-s[u-g]]>b||vn[255+L-A]>b}function ea(s,u,g,b){return 4*vn[255+s[u-g]-s[u+0]]+vn[255+s[u-2*g]-s[u+g]]<=b}function Ao(s,u,g,b,A){var L=s[u-3*g],I=s[u-2*g],j=s[u-g],O=s[u+0],z=s[u+g],te=s[u+2*g],he=s[u+3*g];return 4*vn[255+j-O]+vn[255+I-z]>b?0:vn[255+s[u-4*g]-L]<=A&&vn[255+L-I]<=A&&vn[255+I-j]<=A&&vn[255+he-te]<=A&&vn[255+te-z]<=A&&vn[255+z-O]<=A}function ta(s,u,g,b){var A=2*b+1;for(b=0;16>b;++b)ea(s,u+b,g,A)&&Wi(s,u+b,g)}function Yi(s,u,g,b){var A=2*b+1;for(b=0;16>b;++b)ea(s,u+b*g,1,A)&&Wi(s,u+b*g,1)}function Da(s,u,g,b){var A;for(A=3;0<A;--A)ta(s,u+=4*g,g,b)}function za(s,u,g,b){var A;for(A=3;0<A;--A)Yi(s,u+=4,g,b)}function Zn(s,u,g,b,A,L,I,j){for(L=2*L+1;0<A--;){if(Ao(s,u,g,L,I))if(Gi(s,u,g,j))Wi(s,u,g);else{var O=s,z=u,te=g,he=O[z-2*te],B=O[z-te],re=O[z+0],se=O[z+te],be=O[z+2*te],ce=27*(Se=fl[1020+3*(re-B)+fl[1020+he-se]])+63>>7,xe=18*Se+63>>7,Se=9*Se+63>>7;O[z-3*te]=Xr[255+O[z-3*te]+Se],O[z-2*te]=Xr[255+he+xe],O[z-te]=Xr[255+B+ce],O[z+0]=Xr[255+re-ce],O[z+te]=Xr[255+se-xe],O[z+2*te]=Xr[255+be-Se]}u+=b}}function ei(s,u,g,b,A,L,I,j){for(L=2*L+1;0<A--;){if(Ao(s,u,g,L,I))if(Gi(s,u,g,j))Wi(s,u,g);else{var O=s,z=u,te=g,he=O[z-te],B=O[z+0],re=O[z+te],se=Ga[112+(4+(be=3*(B-he))>>3)],be=Ga[112+(be+3>>3)],ce=se+1>>1;O[z-2*te]=Xr[255+O[z-2*te]+ce],O[z-te]=Xr[255+he+be],O[z+0]=Xr[255+B-se],O[z+te]=Xr[255+re-ce]}u+=b}}function Ba(s,u,g,b,A,L){Zn(s,u,g,1,16,b,A,L)}function Ua(s,u,g,b,A,L){Zn(s,u,1,g,16,b,A,L)}function Ji(s,u,g,b,A,L){var I;for(I=3;0<I;--I)ei(s,u+=4*g,g,1,16,b,A,L)}function qa(s,u,g,b,A,L){var I;for(I=3;0<I;--I)ei(s,u+=4,1,g,16,b,A,L)}function m(s,u,g,b,A,L,I,j){Zn(s,u,A,1,8,L,I,j),Zn(g,b,A,1,8,L,I,j)}function _(s,u,g,b,A,L,I,j){Zn(s,u,1,A,8,L,I,j),Zn(g,b,1,A,8,L,I,j)}function U(s,u,g,b,A,L,I,j){ei(s,u+4*A,A,1,8,L,I,j),ei(g,b+4*A,A,1,8,L,I,j)}function K(s,u,g,b,A,L,I,j){ei(s,u+4,1,A,8,L,I,j),ei(g,b+4,1,A,8,L,I,j)}function ie(){this.ba=new Lt,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new St,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function we(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Ae(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Fe(){this.ua=0,this.Wa=new rt,this.vb=new rt,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new oe,this.yc=new Y}function $e(){this.xb=this.a=0,this.l=new Jn,this.ca=new Lt,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new H,this.Pb=0,this.wd=new H,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Fe,this.ab=0,this.gc=c(4,Ae),this.Oc=0}function ot(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Jn,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ct(s,u,g,b,A,L,I){for(s=s==null?0:s[u+0],u=0;u<I;++u)A[L+u]=s+g[b+u]&255,s=A[L+u]}function kt(s,u,g,b,A,L,I){var j;if(s==null)ct(null,null,g,b,A,L,I);else for(j=0;j<I;++j)A[L+j]=s[u+j]+g[b+j]&255}function Wt(s,u,g,b,A,L,I){if(s==null)ct(null,null,g,b,A,L,I);else{var j,O=s[u+0],z=O,te=O;for(j=0;j<I;++j)z=te+(O=s[u+j])-z,te=g[b+j]+(-256&z?0>z?0:255:z)&255,z=O,A[L+j]=te}}function cr(s,u,g,b){var A=u.width,L=u.o;if(t(s!=null&&u!=null),0>g||0>=b||g+b>L)return null;if(!s.Cc){if(s.ga==null){var I;if(s.ga=new ot,(I=s.ga==null)||(I=u.width*u.o,t(s.Gb.length==0),s.Gb=a(I),s.Uc=0,s.Gb==null?I=0:(s.mb=s.Gb,s.nb=s.Uc,s.rc=null,I=1),I=!I),!I){I=s.ga;var j=s.Fa,O=s.P,z=s.qc,te=s.mb,he=s.nb,B=O+1,re=z-1,se=I.l;if(t(j!=null&&te!=null&&u!=null),Pi[0]=null,Pi[1]=ct,Pi[2]=kt,Pi[3]=Wt,I.ca=te,I.tb=he,I.c=u.width,I.i=u.height,t(0<I.c&&0<I.i),1>=z)u=0;else if(I.$a=3&j[O+0],I.Z=j[O+0]>>2&3,I.Lc=j[O+0]>>4&3,O=j[O+0]>>6&3,0>I.$a||1<I.$a||4<=I.Z||1<I.Lc||O)u=0;else if(se.put=Qe,se.ac=sn,se.bc=wn,se.ma=I,se.width=u.width,se.height=u.height,se.Da=u.Da,se.v=u.v,se.va=u.va,se.j=u.j,se.o=u.o,I.$a)e:{t(I.$a==1),u=Sn();t:for(;;){if(u==null){u=0;break e}if(t(I!=null),I.mc=u,u.c=I.c,u.i=I.i,u.l=I.l,u.l.ma=I,u.l.width=I.c,u.l.height=I.i,u.a=0,pe(u.m,j,B,re),!cn(I.c,I.i,1,u,null)||(u.ab==1&&u.gc[0].hc==3&&Wr(u.s)?(I.ic=1,j=u.c*u.i,u.Ta=null,u.Ua=0,u.V=a(j),u.Ba=0,u.V==null?(u.a=1,u=0):u=1):(I.ic=0,u=un(u,I.c)),!u))break t;u=1;break e}I.mc=null,u=0}else u=re>=I.c*I.i;I=!u}if(I)return null;s.ga.Lc!=1?s.Ga=0:b=L-g}t(s.ga!=null),t(g+b<=L);e:{if(u=(j=s.ga).c,L=j.l.o,j.$a==0){if(B=s.rc,re=s.Vc,se=s.Fa,O=s.P+1+g*u,z=s.mb,te=s.nb+g*u,t(O<=s.P+s.qc),j.Z!=0)for(t(Pi[j.Z]!=null),I=0;I<b;++I)Pi[j.Z](B,re,se,O,z,te,u),B=z,re=te,te+=u,O+=u;else for(I=0;I<b;++I)n(z,te,se,O,u),B=z,re=te,te+=u,O+=u;s.rc=B,s.Vc=re}else{if(t(j.mc!=null),u=g+b,t((I=j.mc)!=null),t(u<=I.i),I.C>=u)u=1;else if(j.ic||pn(),j.ic){j=I.V,B=I.Ba,re=I.c;var be=I.i,ce=(se=1,O=I.$/re,z=I.$%re,te=I.m,he=I.s,I.$),xe=re*be,Se=re*u,Ne=he.wc,Ce=ce<Se?lr(he,z,O):null;t(ce<=xe),t(u<=be),t(Wr(he));t:for(;;){for(;!te.h&&ce<Se;){if(z&Ne||(Ce=lr(he,z,O)),t(Ce!=null),ue(te),256>(be=Ht(Ce.G[0],Ce.H[0],te)))j[B+ce]=be,++ce,++z>=re&&(z=0,++O<=u&&!(O%16)&&Yr(I,O));else{if(!(280>be)){se=0;break t}be=Er(be-256,te);var We,Me=Ht(Ce.G[4],Ce.H[4],te);if(ue(te),!(ce>=(Me=xr(re,Me=Er(Me,te)))&&xe-ce>=be)){se=0;break t}for(We=0;We<be;++We)j[B+ce+We]=j[B+ce+We-Me];for(ce+=be,z+=be;z>=re;)z-=re,++O<=u&&!(O%16)&&Yr(I,O);ce<Se&&z&Ne&&(Ce=lr(he,z,O))}t(te.h==Z(te))}Yr(I,O>u?u:O);break t}!se||te.h&&ce<xe?(se=0,I.a=te.h?5:3):I.$=ce,u=se}else u=Dr(I,I.V,I.Ba,I.c,I.i,u,mi);if(!u){b=0;break e}}g+b>=L&&(s.Cc=1),b=1}if(!b)return null;if(s.Cc&&((b=s.ga)!=null&&(b.mc=null),s.ga=null,0<s.Ga))return alert("todo:WebPDequantizeLevels"),null}return s.nb+g*A}function Ft(s,u,g,b,A,L){for(;0<A--;){var I,j=s,O=u+(g?1:0),z=s,te=u+(g?0:3);for(I=0;I<b;++I){var he=z[te+4*I];he!=255&&(he*=32897,j[O+4*I+0]=j[O+4*I+0]*he>>23,j[O+4*I+1]=j[O+4*I+1]*he>>23,j[O+4*I+2]=j[O+4*I+2]*he>>23)}u+=L}}function dr(s,u,g,b,A){for(;0<b--;){var L;for(L=0;L<g;++L){var I=s[u+2*L+0],j=15&(z=s[u+2*L+1]),O=4369*j,z=(240&z|z>>4)*O>>16;s[u+2*L+0]=(240&I|I>>4)*O>>16&240|(15&I|I<<4)*O>>16>>4&15,s[u+2*L+1]=240&z|j}u+=A}}function ur(s,u,g,b,A,L,I,j){var O,z,te=255;for(z=0;z<A;++z){for(O=0;O<b;++O){var he=s[u+O];L[I+4*O]=he,te&=he}u+=g,I+=j}return te!=255}function yr(s,u,g,b,A){var L;for(L=0;L<A;++L)g[b+L]=s[u+L]>>8}function pn(){fa=Ft,Xc=dr,Zc=ur,eu=yr}function Ur(s,u,g){D[s]=function(b,A,L,I,j,O,z,te,he,B,re,se,be,ce,xe,Se,Ne){var Ce,We=Ne-1>>1,Me=j[O+0]|z[te+0]<<16,ft=he[B+0]|re[se+0]<<16;t(b!=null);var ze=3*Me+ft+131074>>2;for(u(b[A+0],255&ze,ze>>16,be,ce),L!=null&&(ze=3*ft+Me+131074>>2,u(L[I+0],255&ze,ze>>16,xe,Se)),Ce=1;Ce<=We;++Ce){var vt=j[O+Ce]|z[te+Ce]<<16,mr=he[B+Ce]|re[se+Ce]<<16,dt=Me+vt+ft+mr+524296,Be=dt+2*(vt+ft)>>3;ze=Be+Me>>1,Me=(dt=dt+2*(Me+mr)>>3)+vt>>1,u(b[A+2*Ce-1],255&ze,ze>>16,be,ce+(2*Ce-1)*g),u(b[A+2*Ce-0],255&Me,Me>>16,be,ce+(2*Ce-0)*g),L!=null&&(ze=dt+ft>>1,Me=Be+mr>>1,u(L[I+2*Ce-1],255&ze,ze>>16,xe,Se+(2*Ce-1)*g),u(L[I+2*Ce+0],255&Me,Me>>16,xe,Se+(2*Ce+0)*g)),Me=vt,ft=mr}1&Ne||(ze=3*Me+ft+131074>>2,u(b[A+Ne-1],255&ze,ze>>16,be,ce+(Ne-1)*g),L!=null&&(ze=3*ft+Me+131074>>2,u(L[I+Ne-1],255&ze,ze>>16,xe,Se+(Ne-1)*g)))}}function Ha(){bn[Ya]=E0,bn[Ja]=hu,bn[au]=R0,bn[Qa]=fu,bn[Ka]=du,bn[dl]=pu,bn[su]=M0,bn[pl]=hu,bn[ml]=fu,bn[Xa]=du,bn[gl]=pu}function ko(s){return s&-16384?0>s?0:255:s>>O0}function Qi(s,u){return ko((19077*s>>8)+(26149*u>>8)-14234)}function Si(s,u,g){return ko((19077*s>>8)-(6419*u>>8)-(13320*g>>8)+8708)}function Ki(s,u){return ko((19077*s>>8)+(33050*u>>8)-17685)}function Xi(s,u,g,b,A){b[A+0]=Qi(s,g),b[A+1]=Si(s,u,g),b[A+2]=Ki(s,u)}function Zi(s,u,g,b,A){b[A+0]=Ki(s,u),b[A+1]=Si(s,u,g),b[A+2]=Qi(s,g)}function kr(s,u,g,b,A){var L=Si(s,u,g);u=L<<3&224|Ki(s,u)>>3,b[A+0]=248&Qi(s,g)|L>>5,b[A+1]=u}function eo(s,u,g,b,A){var L=240&Ki(s,u)|15;b[A+0]=240&Qi(s,g)|Si(s,u,g)>>4,b[A+1]=L}function to(s,u,g,b,A){b[A+0]=255,Xi(s,u,g,b,A+1)}function ra(s,u,g,b,A){Zi(s,u,g,b,A),b[A+3]=255}function na(s,u,g,b,A){Xi(s,u,g,b,A),b[A+3]=255}function Qt(s,u){return 0>s?0:s>u?u:s}function ti(s,u,g){D[s]=function(b,A,L,I,j,O,z,te,he){for(var B=te+(-2&he)*g;te!=B;)u(b[A+0],L[I+0],j[O+0],z,te),u(b[A+1],L[I+0],j[O+0],z,te+g),A+=2,++I,++O,te+=2*g;1&he&&u(b[A+0],L[I+0],j[O+0],z,te)}}function Lo(s,u,g){return g==0?s==0?u==0?6:5:u==0?4:0:g}function $a(s,u,g,b,A){switch(s>>>30){case 3:oo(u,g,b,A,0);break;case 2:gn(u,g,b,A);break;case 1:Nt(u,g,b,A)}}function mn(s,u){var g,b,A=u.M,L=u.Nb,I=s.oc,j=s.pc+40,O=s.oc,z=s.pc+584,te=s.oc,he=s.pc+600;for(g=0;16>g;++g)I[j+32*g-1]=129;for(g=0;8>g;++g)O[z+32*g-1]=129,te[he+32*g-1]=129;for(0<A?I[j-1-32]=O[z-1-32]=te[he-1-32]=129:(o(I,j-32-1,127,21),o(O,z-32-1,127,9),o(te,he-32-1,127,9)),b=0;b<s.za;++b){var B=u.ya[u.aa+b];if(0<b){for(g=-1;16>g;++g)n(I,j+32*g-4,I,j+32*g+12,4);for(g=-1;8>g;++g)n(O,z+32*g-4,O,z+32*g+4,4),n(te,he+32*g-4,te,he+32*g+4,4)}var re=s.Gd,se=s.Hd+b,be=B.ad,ce=B.Hc;if(0<A&&(n(I,j-32,re[se].y,0,16),n(O,z-32,re[se].f,0,8),n(te,he-32,re[se].ea,0,8)),B.Za){var xe=I,Se=j-32+16;for(0<A&&(b>=s.za-1?o(xe,Se,re[se].y[15],4):n(xe,Se,re[se+1].y,0,4)),g=0;4>g;g++)xe[Se+128+g]=xe[Se+256+g]=xe[Se+384+g]=xe[Se+0+g];for(g=0;16>g;++g,ce<<=2)xe=I,Se=j+gu[g],_n[B.Ob[g]](xe,Se),$a(ce,be,16*+g,xe,Se)}else if(xe=Lo(b,A,B.Ob[0]),Ti[xe](I,j),ce!=0)for(g=0;16>g;++g,ce<<=2)$a(ce,be,16*+g,I,j+gu[g]);for(g=B.Gc,xe=Lo(b,A,B.Dd),ii[xe](O,z),ii[xe](te,he),ce=be,xe=O,Se=z,255&(B=0|g)&&(170&B?Fn(ce,256,xe,Se):Rt(ce,256,xe,Se)),B=te,ce=he,255&(g>>=8)&&(170&g?Fn(be,320,B,ce):Rt(be,320,B,ce)),A<s.Ub-1&&(n(re[se].y,0,I,j+480,16),n(re[se].f,0,O,z+224,8),n(re[se].ea,0,te,he+224,8)),g=8*L*s.B,re=s.sa,se=s.ta+16*b+16*L*s.R,be=s.qa,B=s.ra+8*b+g,ce=s.Ha,xe=s.Ia+8*b+g,g=0;16>g;++g)n(re,se+g*s.R,I,j+32*g,16);for(g=0;8>g;++g)n(be,B+g*s.B,O,z+32*g,8),n(ce,xe+g*s.B,te,he+32*g,8)}}function ro(s,u,g,b,A,L,I,j,O){var z=[0],te=[0],he=0,B=O!=null?O.kd:0,re=O??new we;if(s==null||12>g)return 7;re.data=s,re.w=u,re.ha=g,u=[u],g=[g],re.gb=[re.gb];e:{var se=u,be=g,ce=re.gb;if(t(s!=null),t(be!=null),t(ce!=null),ce[0]=0,12<=be[0]&&!r(s,se[0],"RIFF")){if(r(s,se[0]+8,"WEBP")){ce=3;break e}var xe=ve(s,se[0]+4);if(12>xe||4294967286<xe){ce=3;break e}if(B&&xe>be[0]-8){ce=7;break e}ce[0]=xe,se[0]+=12,be[0]-=12}ce=0}if(ce!=0)return ce;for(xe=0<re.gb[0],g=g[0];;){e:{var Se=s;be=u,ce=g;var Ne=z,Ce=te,We=se=[0];if((ze=he=[he])[0]=0,8>ce[0])ce=7;else{if(!r(Se,be[0],"VP8X")){if(ve(Se,be[0]+4)!=10){ce=3;break e}if(18>ce[0]){ce=7;break e}var Me=ve(Se,be[0]+8),ft=1+je(Se,be[0]+12);if(2147483648<=ft*(Se=1+je(Se,be[0]+15))){ce=3;break e}We!=null&&(We[0]=Me),Ne!=null&&(Ne[0]=ft),Ce!=null&&(Ce[0]=Se),be[0]+=18,ce[0]-=18,ze[0]=1}ce=0}}if(he=he[0],se=se[0],ce!=0)return ce;if(be=!!(2&se),!xe&&he)return 3;if(L!=null&&(L[0]=!!(16&se)),I!=null&&(I[0]=be),j!=null&&(j[0]=0),I=z[0],se=te[0],he&&be&&O==null){ce=0;break}if(4>g){ce=7;break}if(xe&&he||!xe&&!he&&!r(s,u[0],"ALPH")){g=[g],re.na=[re.na],re.P=[re.P],re.Sa=[re.Sa];e:{Me=s,ce=u,xe=g;var ze=re.gb;Ne=re.na,Ce=re.P,We=re.Sa,ft=22,t(Me!=null),t(xe!=null),Se=ce[0];var vt=xe[0];for(t(Ne!=null),t(We!=null),Ne[0]=null,Ce[0]=null,We[0]=0;;){if(ce[0]=Se,xe[0]=vt,8>vt){ce=7;break e}var mr=ve(Me,Se+4);if(4294967286<mr){ce=3;break e}var dt=8+mr+1&-2;if(ft+=dt,0<ze&&ft>ze){ce=3;break e}if(!r(Me,Se,"VP8 ")||!r(Me,Se,"VP8L")){ce=0;break e}if(vt[0]<dt){ce=7;break e}r(Me,Se,"ALPH")||(Ne[0]=Me,Ce[0]=Se+8,We[0]=mr),Se+=dt,vt-=dt}}if(g=g[0],re.na=re.na[0],re.P=re.P[0],re.Sa=re.Sa[0],ce!=0)break}g=[g],re.Ja=[re.Ja],re.xa=[re.xa];e:if(ze=s,ce=u,xe=g,Ne=re.gb[0],Ce=re.Ja,We=re.xa,Me=ce[0],Se=!r(ze,Me,"VP8 "),ft=!r(ze,Me,"VP8L"),t(ze!=null),t(xe!=null),t(Ce!=null),t(We!=null),8>xe[0])ce=7;else{if(Se||ft){if(ze=ve(ze,Me+4),12<=Ne&&ze>Ne-12){ce=3;break e}if(B&&ze>xe[0]-8){ce=7;break e}Ce[0]=ze,ce[0]+=8,xe[0]-=8,We[0]=ft}else We[0]=5<=xe[0]&&ze[Me+0]==47&&!(ze[Me+4]>>5),Ce[0]=xe[0];ce=0}if(g=g[0],re.Ja=re.Ja[0],re.xa=re.xa[0],u=u[0],ce!=0)break;if(4294967286<re.Ja)return 3;if(j==null||be||(j[0]=re.xa?2:1),I=[I],se=[se],re.xa){if(5>g){ce=7;break}j=I,B=se,be=L,s==null||5>g?s=0:5<=g&&s[u+0]==47&&!(s[u+4]>>5)?(xe=[0],ze=[0],Ne=[0],pe(Ce=new H,s,u,g),yn(Ce,xe,ze,Ne)?(j!=null&&(j[0]=xe[0]),B!=null&&(B[0]=ze[0]),be!=null&&(be[0]=Ne[0]),s=1):s=0):s=0}else{if(10>g){ce=7;break}j=se,s==null||10>g||!bi(s,u+3,g-3)?s=0:(B=s[u+0]|s[u+1]<<8|s[u+2]<<16,be=16383&(s[u+7]<<8|s[u+6]),s=16383&(s[u+9]<<8|s[u+8]),1&B||3<(B>>1&7)||!(B>>4&1)||B>>5>=re.Ja||!be||!s?s=0:(I&&(I[0]=be),j&&(j[0]=s),s=1))}if(!s||(I=I[0],se=se[0],he&&(z[0]!=I||te[0]!=se)))return 3;O!=null&&(O[0]=re,O.offset=u-O.w,t(4294967286>u-O.w),t(O.offset==O.ha-g));break}return ce==0||ce==7&&he&&O==null?(L!=null&&(L[0]|=re.na!=null&&0<re.na.length),b!=null&&(b[0]=I),A!=null&&(A[0]=se),0):ce}function ia(s,u,g){var b=u.width,A=u.height,L=0,I=0,j=b,O=A;if(u.Da=s!=null&&0<s.Da,u.Da&&(j=s.cd,O=s.bd,L=s.v,I=s.j,11>g||(L&=-2,I&=-2),0>L||0>I||0>=j||0>=O||L+j>b||I+O>A))return 0;if(u.v=L,u.j=I,u.va=L+j,u.o=I+O,u.U=j,u.T=O,u.da=s!=null&&0<s.da,u.da){if(!Ye(j,O,g=[s.ib],L=[s.hb]))return 0;u.ib=g[0],u.hb=L[0]}return u.ob=s!=null&&s.ob,u.Kb=s==null||!s.Sd,u.da&&(u.ob=u.ib<3*b/4&&u.hb<3*A/4,u.Kb=0),1}function oa(s){if(s==null)return 2;if(11>s.S){var u=s.f.RGBA;u.fb+=(s.height-1)*u.A,u.A=-u.A}else u=s.f.kb,s=s.height,u.O+=(s-1)*u.fa,u.fa=-u.fa,u.N+=(s-1>>1)*u.Ab,u.Ab=-u.Ab,u.W+=(s-1>>1)*u.Db,u.Db=-u.Db,u.F!=null&&(u.J+=(s-1)*u.lb,u.lb=-u.lb);return 0}function _i(s,u,g,b){if(b==null||0>=s||0>=u)return 2;if(g!=null){if(g.Da){var A=g.cd,L=g.bd,I=-2&g.v,j=-2&g.j;if(0>I||0>j||0>=A||0>=L||I+A>s||j+L>u)return 2;s=A,u=L}if(g.da){if(!Ye(s,u,A=[g.ib],L=[g.hb]))return 2;s=A[0],u=L[0]}}b.width=s,b.height=u;e:{var O=b.width,z=b.height;if(s=b.S,0>=O||0>=z||!(s>=Ya&&13>s))s=2;else{if(0>=b.Rd&&b.sd==null){I=L=A=u=0;var te=(j=O*vu[s])*z;if(11>s||(L=(z+1)/2*(u=(O+1)/2),s==12&&(I=(A=O)*z)),(z=a(te+2*L+I))==null){s=1;break e}b.sd=z,11>s?((O=b.f.RGBA).eb=z,O.fb=0,O.A=j,O.size=te):((O=b.f.kb).y=z,O.O=0,O.fa=j,O.Fd=te,O.f=z,O.N=0+te,O.Ab=u,O.Cd=L,O.ea=z,O.W=0+te+L,O.Db=u,O.Ed=L,s==12&&(O.F=z,O.J=0+te+2*L),O.Tc=I,O.lb=A)}if(u=1,A=b.S,L=b.width,I=b.height,A>=Ya&&13>A)if(11>A)s=b.f.RGBA,u&=(j=Math.abs(s.A))*(I-1)+L<=s.size,u&=j>=L*vu[A],u&=s.eb!=null;else{s=b.f.kb,j=(L+1)/2,te=(I+1)/2,O=Math.abs(s.fa),z=Math.abs(s.Ab);var he=Math.abs(s.Db),B=Math.abs(s.lb),re=B*(I-1)+L;u&=O*(I-1)+L<=s.Fd,u&=z*(te-1)+j<=s.Cd,u=(u&=he*(te-1)+j<=s.Ed)&O>=L&z>=j&he>=j,u&=s.y!=null,u&=s.f!=null,u&=s.ea!=null,A==12&&(u&=B>=L,u&=re<=s.Tc,u&=s.F!=null)}else u=0;s=u?0:2}}return s!=0||g!=null&&g.fd&&(s=oa(b)),s}var no=64,Qr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Kr=24,Ci=32,ri=8,Ai=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Re("Predictor0","PredictorAdd0"),D.Predictor0=function(){return 4278190080},D.Predictor1=function(s){return s},D.Predictor2=function(s,u,g){return u[g+0]},D.Predictor3=function(s,u,g){return u[g+1]},D.Predictor4=function(s,u,g){return u[g-1]},D.Predictor5=function(s,u,g){return Ue(Ue(s,u[g+1]),u[g+0])},D.Predictor6=function(s,u,g){return Ue(s,u[g-1])},D.Predictor7=function(s,u,g){return Ue(s,u[g+0])},D.Predictor8=function(s,u,g){return Ue(u[g-1],u[g+0])},D.Predictor9=function(s,u,g){return Ue(u[g+0],u[g+1])},D.Predictor10=function(s,u,g){return Ue(Ue(s,u[g-1]),Ue(u[g+0],u[g+1]))},D.Predictor11=function(s,u,g){var b=u[g+0];return 0>=nt(b>>24&255,s>>24&255,(u=u[g-1])>>24&255)+nt(b>>16&255,s>>16&255,u>>16&255)+nt(b>>8&255,s>>8&255,u>>8&255)+nt(255&b,255&s,255&u)?b:s},D.Predictor12=function(s,u,g){var b=u[g+0];return(bt((s>>24&255)+(b>>24&255)-((u=u[g-1])>>24&255))<<24|bt((s>>16&255)+(b>>16&255)-(u>>16&255))<<16|bt((s>>8&255)+(b>>8&255)-(u>>8&255))<<8|bt((255&s)+(255&b)-(255&u)))>>>0},D.Predictor13=function(s,u,g){var b=u[g-1];return(et((s=Ue(s,u[g+0]))>>24&255,b>>24&255)<<24|et(s>>16&255,b>>16&255)<<16|et(s>>8&255,b>>8&255)<<8|et(255&s,255&b))>>>0};var aa=D.PredictorAdd0;D.PredictorAdd1=Ct,Re("Predictor2","PredictorAdd2"),Re("Predictor3","PredictorAdd3"),Re("Predictor4","PredictorAdd4"),Re("Predictor5","PredictorAdd5"),Re("Predictor6","PredictorAdd6"),Re("Predictor7","PredictorAdd7"),Re("Predictor8","PredictorAdd8"),Re("Predictor9","PredictorAdd9"),Re("Predictor10","PredictorAdd10"),Re("Predictor11","PredictorAdd11"),Re("Predictor12","PredictorAdd12"),Re("Predictor13","PredictorAdd13");var No=D.PredictorAdd2;He("ColorIndexInverseTransform","MapARGB","32b",function(s){return s>>8&255},function(s){return s}),He("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(s){return s},function(s){return s>>8&255});var tr,Va=D.ColorIndexInverseTransform,Mn=D.MapARGB,On=D.VP8LColorIndexInverseTransformAlpha,sa=D.MapAlpha,la=D.VP8LPredictorsAdd=[];la.length=16,(D.VP8LPredictors=[]).length=16,(D.VP8LPredictorsAdd_C=[]).length=16,(D.VP8LPredictors_C=[]).length=16;var ca,ua,ki,Li,Ni,io,Ii,oo,gn,Fn,Nt,Rt,rr,pr,ni,ha,Io,Wa,Wc,Gc,Yc,Jc,Qc,Kc,fa,Xc,Zc,eu,tu=a(511),ru=a(2041),nu=a(225),iu=a(767),ou=0,fl=ru,Ga=nu,Xr=iu,vn=tu,Ya=0,Ja=1,au=2,Qa=3,Ka=4,dl=5,su=6,pl=7,ml=8,Xa=9,gl=10,x0=[2,3,7],w0=[3,3,11],lu=[280,256,256,256,40],y0=[0,1,1,1,0],S0=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],_0=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],C0=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],A0=8,vl=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],bl=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],da=null,k0=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],L0=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],cu=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],N0=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],I0=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],T0=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],P0=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],Ti=[],_n=[],ii=[],j0=1,uu=2,Pi=[],bn=[];Ur("UpsampleRgbLinePair",Xi,3),Ur("UpsampleBgrLinePair",Zi,3),Ur("UpsampleRgbaLinePair",na,4),Ur("UpsampleBgraLinePair",ra,4),Ur("UpsampleArgbLinePair",to,4),Ur("UpsampleRgba4444LinePair",eo,2),Ur("UpsampleRgb565LinePair",kr,2);var E0=D.UpsampleRgbLinePair,R0=D.UpsampleBgrLinePair,hu=D.UpsampleRgbaLinePair,fu=D.UpsampleBgraLinePair,du=D.UpsampleArgbLinePair,pu=D.UpsampleRgba4444LinePair,M0=D.UpsampleRgb565LinePair,Za=16,es=1<<Za-1,pa=-227,xl=482,O0=6,mu=0,F0=a(256),D0=a(256),z0=a(256),B0=a(256),U0=a(xl-pa),q0=a(xl-pa);ti("YuvToRgbRow",Xi,3),ti("YuvToBgrRow",Zi,3),ti("YuvToRgbaRow",na,4),ti("YuvToBgraRow",ra,4),ti("YuvToArgbRow",to,4),ti("YuvToRgba4444Row",eo,2),ti("YuvToRgb565Row",kr,2);var gu=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],ts=[0,2,8],H0=[8,7,6,4,4,2,2,2,1,1,1,1],$0=1;this.WebPDecodeRGBA=function(s,u,g,b,A){var L=Ja,I=new ie,j=new Lt;I.ba=j,j.S=L,j.width=[j.width],j.height=[j.height];var O=j.width,z=j.height,te=new Xe;if(te==null||s==null)var he=2;else t(te!=null),he=ro(s,u,g,te.width,te.height,te.Pd,te.Qd,te.format,null);if(he!=0?O=0:(O!=null&&(O[0]=te.width[0]),z!=null&&(z[0]=te.height[0]),O=1),O){j.width=j.width[0],j.height=j.height[0],b!=null&&(b[0]=j.width),A!=null&&(A[0]=j.height);e:{if(b=new Jn,(A=new we).data=s,A.w=u,A.ha=g,A.kd=1,u=[0],t(A!=null),((s=ro(A.data,A.w,A.ha,null,null,null,u,null,A))==0||s==7)&&u[0]&&(s=4),(u=s)==0){if(t(I!=null),b.data=A.data,b.w=A.w+A.offset,b.ha=A.ha-A.offset,b.put=Qe,b.ac=sn,b.bc=wn,b.ma=I,A.xa){if((s=Sn())==null){I=1;break e}if(function(B,re){var se=[0],be=[0],ce=[0];t:for(;;){if(B==null)return 0;if(re==null)return B.a=2,0;if(B.l=re,B.a=0,pe(B.m,re.data,re.w,re.ha),!yn(B.m,se,be,ce)){B.a=3;break t}if(B.xb=uu,re.width=se[0],re.height=be[0],!cn(se[0],be[0],1,B,null))break t;return 1}return t(B.a!=0),0}(s,b)){if(b=(u=_i(b.width,b.height,I.Oa,I.ba))==0){t:{b=s;r:for(;;){if(b==null){b=0;break t}if(t(b.s.yc!=null),t(b.s.Ya!=null),t(0<b.s.Wb),t((g=b.l)!=null),t((A=g.ma)!=null),b.xb!=0){if(b.ca=A.ba,b.tb=A.tb,t(b.ca!=null),!ia(A.Oa,g,Qa)){b.a=2;break r}if(!un(b,g.width)||g.da)break r;if((g.da||it(b.ca.S))&&pn(),11>b.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),b.ca.f.kb.F!=null&&pn()),b.Pb&&0<b.s.ua&&b.s.vb.X==null&&!W(b.s.vb,b.s.Wa.Xa)){b.a=1;break r}b.xb=0}if(!Dr(b,b.V,b.Ba,b.c,b.i,g.o,ln))break r;A.Dc=b.Ma,b=1;break t}t(b.a!=0),b=0}b=!b}b&&(u=s.a)}else u=s.a}else{if((s=new Wo)==null){I=1;break e}if(s.Fa=A.na,s.P=A.P,s.qc=A.Sa,xo(s,b)){if((u=_i(b.width,b.height,I.Oa,I.ba))==0){if(s.Aa=0,g=I.Oa,t((A=s)!=null),g!=null){if(0<(O=0>(O=g.Md)?0:100<O?255:255*O/100)){for(z=te=0;4>z;++z)12>(he=A.pb[z]).lc&&(he.ia=O*H0[0>he.lc?0:he.lc]>>3),te|=he.ia;te&&(alert("todo:VP8InitRandom"),A.ia=1)}A.Ga=g.Id,100<A.Ga?A.Ga=100:0>A.Ga&&(A.Ga=0)}(function(B,re){if(B==null)return 0;if(re==null)return At(B,2,"NULL VP8Io parameter in VP8Decode().");if(!B.cb&&!xo(B,re))return 0;if(t(B.cb),re.ac==null||re.ac(re)){re.ob&&(B.L=0);var se=ts[B.L];if(B.L==2?(B.yb=0,B.zb=0):(B.yb=re.v-se>>4,B.zb=re.j-se>>4,0>B.yb&&(B.yb=0),0>B.zb&&(B.zb=0)),B.Va=re.o+15+se>>4,B.Hb=re.va+15+se>>4,B.Hb>B.za&&(B.Hb=B.za),B.Va>B.Ub&&(B.Va=B.Ub),0<B.L){var be=B.ed;for(se=0;4>se;++se){var ce;if(B.Qa.Cb){var xe=B.Qa.Lb[se];B.Qa.Fb||(xe+=be.Tb)}else xe=be.Tb;for(ce=0;1>=ce;++ce){var Se=B.gd[se][ce],Ne=xe;if(be.Pc&&(Ne+=be.vd[0],ce&&(Ne+=be.od[0])),0<(Ne=0>Ne?0:63<Ne?63:Ne)){var Ce=Ne;0<be.wb&&(Ce=4<be.wb?Ce>>2:Ce>>1)>9-be.wb&&(Ce=9-be.wb),1>Ce&&(Ce=1),Se.dd=Ce,Se.tc=2*Ne+Ce,Se.ld=40<=Ne?2:15<=Ne?1:0}else Se.tc=0;Se.La=ce}}}se=0}else At(B,6,"Frame setup failed"),se=B.a;if(se=se==0){if(se){B.$c=0,0<B.Aa||(B.Ic=$0);t:{se=B.Ic,be=4*(Ce=B.za);var We=32*Ce,Me=Ce+1,ft=0<B.L?Ce*(0<B.Aa?2:1):0,ze=(B.Aa==2?2:1)*Ce;if((Se=be+832+(ce=3*(16*se+ts[B.L])/2*We)+(xe=B.Fa!=null&&0<B.Fa.length?B.Kc.c*B.Kc.i:0))!=Se)se=0;else{if(Se>B.Vb){if(B.Vb=0,B.Ec=a(Se),B.Fc=0,B.Ec==null){se=At(B,1,"no memory during frame initialization.");break t}B.Vb=Se}Se=B.Ec,Ne=B.Fc,B.Ac=Se,B.Bc=Ne,Ne+=be,B.Gd=c(We,Rr),B.Hd=0,B.rb=c(Me+1,ge),B.sb=1,B.wa=ft?c(ft,Br):null,B.Y=0,B.D.Nb=0,B.D.wa=B.wa,B.D.Y=B.Y,0<B.Aa&&(B.D.Y+=Ce),t(!0),B.oc=Se,B.pc=Ne,Ne+=832,B.ya=c(ze,Jt),B.aa=0,B.D.ya=B.ya,B.D.aa=B.aa,B.Aa==2&&(B.D.aa+=Ce),B.R=16*Ce,B.B=8*Ce,Ce=(We=ts[B.L])*B.R,We=We/2*B.B,B.sa=Se,B.ta=Ne+Ce,B.qa=B.sa,B.ra=B.ta+16*se*B.R+We,B.Ha=B.qa,B.Ia=B.ra+8*se*B.B+We,B.$c=0,Ne+=ce,B.mb=xe?Se:null,B.nb=xe?Ne:null,t(Ne+xe<=B.Fc+B.Vb),jn(B),o(B.Ac,B.Bc,0,be),se=1}}if(se){if(re.ka=0,re.y=B.sa,re.O=B.ta,re.f=B.qa,re.N=B.ra,re.ea=B.Ha,re.Vd=B.Ia,re.fa=B.R,re.Rc=B.B,re.F=null,re.J=0,!ou){for(se=-255;255>=se;++se)tu[255+se]=0>se?-se:se;for(se=-1020;1020>=se;++se)ru[1020+se]=-128>se?-128:127<se?127:se;for(se=-112;112>=se;++se)nu[112+se]=-16>se?-16:15<se?15:se;for(se=-255;510>=se;++se)iu[255+se]=0>se?0:255<se?255:se;ou=1}Ii=Qn,oo=yo,Fn=Go,Nt=dn,Rt=Rn,gn=wo,rr=Ba,pr=Ua,ni=m,ha=_,Io=Ji,Wa=qa,Wc=U,Gc=K,Yc=ta,Jc=Yi,Qc=Da,Kc=za,_n[0]=sl,_n[1]=Yo,_n[2]=ol,_n[3]=al,_n[4]=ll,_n[5]=Xn,_n[6]=Kn,_n[7]=cl,_n[8]=So,_n[9]=ul,Ti[0]=yi,Ti[1]=rl,Ti[2]=nl,Ti[3]=Jo,Ti[4]=il,Ti[5]=$i,Ti[6]=Qo,ii[0]=Co,ii[1]=tl,ii[2]=Ko,ii[3]=Vi,ii[4]=Xo,ii[5]=hl,ii[6]=Zo,se=1}else se=0}se&&(se=function(vt,mr){for(vt.M=0;vt.M<vt.Va;++vt.M){var dt,Be=vt.Jc[vt.M&vt.Xb],Pe=vt.m,nr=vt;for(dt=0;dt<nr.za;++dt){var ht=Pe,yt=nr,zt=yt.Ac,Sr=yt.Bc+4*dt,Mr=yt.zc,Kt=yt.ya[yt.aa+dt];if(yt.Qa.Bb?Kt.$b=ye(ht,yt.Pa.jb[0])?2+ye(ht,yt.Pa.jb[2]):ye(ht,yt.Pa.jb[1]):Kt.$b=0,yt.kc&&(Kt.Ad=ye(ht,yt.Bd)),Kt.Za=!ye(ht,145)+0,Kt.Za){var Lr=Kt.Ob,Or=0;for(yt=0;4>yt;++yt){var gr,_t=Mr[0+yt];for(gr=0;4>gr;++gr){_t=I0[zt[Sr+gr]][_t];for(var It=cu[ye(ht,_t[0])];0<It;)It=cu[2*It+ye(ht,_t[It])];_t=-It,zt[Sr+gr]=_t}n(Lr,Or,zt,Sr,4),Or+=4,Mr[0+yt]=_t}}else _t=ye(ht,156)?ye(ht,128)?1:3:ye(ht,163)?2:0,Kt.Ob[0]=_t,o(zt,Sr,_t,4),o(Mr,0,_t,4);Kt.Dd=ye(ht,142)?ye(ht,114)?ye(ht,183)?1:3:2:0}if(nr.m.Ka)return At(vt,7,"Premature end-of-partition0 encountered.");for(;vt.ja<vt.za;++vt.ja){if(nr=Be,ht=(Pe=vt).rb[Pe.sb-1],zt=Pe.rb[Pe.sb+Pe.ja],dt=Pe.ya[Pe.aa+Pe.ja],Sr=Pe.kc?dt.Ad:0)ht.la=zt.la=0,dt.Za||(ht.Na=zt.Na=0),dt.Hc=0,dt.Gc=0,dt.ia=0;else{var Xt,Tt;if(ht=zt,zt=nr,Sr=Pe.Pa.Xc,Mr=Pe.ya[Pe.aa+Pe.ja],Kt=Pe.pb[Mr.$b],yt=Mr.ad,Lr=0,Or=Pe.rb[Pe.sb-1],_t=gr=0,o(yt,Lr,0,384),Mr.Za)var _r=0,Cn=Sr[3];else{It=a(16);var ir=ht.Na+Or.Na;if(ir=da(zt,Sr[1],ir,Kt.Eb,0,It,0),ht.Na=Or.Na=(0<ir)+0,1<ir)Ii(It,0,yt,Lr);else{var qr=It[0]+3>>3;for(It=0;256>It;It+=16)yt[Lr+It]=qr}_r=1,Cn=Sr[0]}var Mt=15&ht.la,vr=15&Or.la;for(It=0;4>It;++It){var Zr=1&vr;for(qr=Tt=0;4>qr;++qr)Mt=Mt>>1|(Zr=(ir=da(zt,Cn,ir=Zr+(1&Mt),Kt.Sc,_r,yt,Lr))>_r)<<7,Tt=Tt<<2|(3<ir?3:1<ir?2:yt[Lr+0]!=0),Lr+=16;Mt>>=4,vr=vr>>1|Zr<<7,gr=(gr<<8|Tt)>>>0}for(Cn=Mt,_r=vr>>4,Xt=0;4>Xt;Xt+=2){for(Tt=0,Mt=ht.la>>4+Xt,vr=Or.la>>4+Xt,It=0;2>It;++It){for(Zr=1&vr,qr=0;2>qr;++qr)ir=Zr+(1&Mt),Mt=Mt>>1|(Zr=0<(ir=da(zt,Sr[2],ir,Kt.Qc,0,yt,Lr)))<<3,Tt=Tt<<2|(3<ir?3:1<ir?2:yt[Lr+0]!=0),Lr+=16;Mt>>=2,vr=vr>>1|Zr<<5}_t|=Tt<<4*Xt,Cn|=Mt<<4<<Xt,_r|=(240&vr)<<Xt}ht.la=Cn,Or.la=_r,Mr.Hc=gr,Mr.Gc=_t,Mr.ia=43690&_t?0:Kt.ia,Sr=!(gr|_t)}if(0<Pe.L&&(Pe.wa[Pe.Y+Pe.ja]=Pe.gd[dt.$b][dt.Za],Pe.wa[Pe.Y+Pe.ja].La|=!Sr),nr.Ka)return At(vt,7,"Premature end-of-file encountered.")}if(jn(vt),Pe=mr,nr=1,dt=(Be=vt).D,ht=0<Be.L&&Be.M>=Be.zb&&Be.M<=Be.Va,Be.Aa==0)t:{if(dt.M=Be.M,dt.uc=ht,mn(Be,dt),nr=1,dt=(Tt=Be.D).Nb,ht=(_t=ts[Be.L])*Be.R,zt=_t/2*Be.B,It=16*dt*Be.R,qr=8*dt*Be.B,Sr=Be.sa,Mr=Be.ta-ht+It,Kt=Be.qa,yt=Be.ra-zt+qr,Lr=Be.Ha,Or=Be.Ia-zt+qr,vr=(Mt=Tt.M)==0,gr=Mt>=Be.Va-1,Be.Aa==2&&mn(Be,Tt),Tt.uc)for(Zr=(ir=Be).D.M,t(ir.D.uc),Tt=ir.yb;Tt<ir.Hb;++Tt){_r=Tt,Cn=Zr;var Fr=(en=(Cr=ir).D).Nb;Xt=Cr.R;var en=en.wa[en.Y+_r],tn=Cr.sa,Hr=Cr.ta+16*Fr*Xt+16*_r,rn=en.dd,Dt=en.tc;if(Dt!=0)if(t(3<=Dt),Cr.L==1)0<_r&&Jc(tn,Hr,Xt,Dt+4),en.La&&Kc(tn,Hr,Xt,Dt),0<Cn&&Yc(tn,Hr,Xt,Dt+4),en.La&&Qc(tn,Hr,Xt,Dt);else{var nn=Cr.B,An=Cr.qa,ao=Cr.ra+8*Fr*nn+8*_r,oi=Cr.Ha,Cr=Cr.Ia+8*Fr*nn+8*_r;Fr=en.ld,0<_r&&(pr(tn,Hr,Xt,Dt+4,rn,Fr),ha(An,ao,oi,Cr,nn,Dt+4,rn,Fr)),en.La&&(Wa(tn,Hr,Xt,Dt,rn,Fr),Gc(An,ao,oi,Cr,nn,Dt,rn,Fr)),0<Cn&&(rr(tn,Hr,Xt,Dt+4,rn,Fr),ni(An,ao,oi,Cr,nn,Dt+4,rn,Fr)),en.La&&(Io(tn,Hr,Xt,Dt,rn,Fr),Wc(An,ao,oi,Cr,nn,Dt,rn,Fr))}}if(Be.ia&&alert("todo:DitherRow"),Pe.put!=null){if(Tt=16*Mt,Mt=16*(Mt+1),vr?(Pe.y=Be.sa,Pe.O=Be.ta+It,Pe.f=Be.qa,Pe.N=Be.ra+qr,Pe.ea=Be.Ha,Pe.W=Be.Ia+qr):(Tt-=_t,Pe.y=Sr,Pe.O=Mr,Pe.f=Kt,Pe.N=yt,Pe.ea=Lr,Pe.W=Or),gr||(Mt-=_t),Mt>Pe.o&&(Mt=Pe.o),Pe.F=null,Pe.J=null,Be.Fa!=null&&0<Be.Fa.length&&Tt<Mt&&(Pe.J=cr(Be,Pe,Tt,Mt-Tt),Pe.F=Be.mb,Pe.F==null&&Pe.F.length==0)){nr=At(Be,3,"Could not decode alpha data.");break t}Tt<Pe.j&&(_t=Pe.j-Tt,Tt=Pe.j,t(!(1&_t)),Pe.O+=Be.R*_t,Pe.N+=Be.B*(_t>>1),Pe.W+=Be.B*(_t>>1),Pe.F!=null&&(Pe.J+=Pe.width*_t)),Tt<Mt&&(Pe.O+=Pe.v,Pe.N+=Pe.v>>1,Pe.W+=Pe.v>>1,Pe.F!=null&&(Pe.J+=Pe.v),Pe.ka=Tt-Pe.j,Pe.U=Pe.va-Pe.v,Pe.T=Mt-Tt,nr=Pe.put(Pe))}dt+1!=Be.Ic||gr||(n(Be.sa,Be.ta-ht,Sr,Mr+16*Be.R,ht),n(Be.qa,Be.ra-zt,Kt,yt+8*Be.B,zt),n(Be.Ha,Be.Ia-zt,Lr,Or+8*Be.B,zt))}if(!nr)return At(vt,6,"Output aborted.")}return 1}(B,re)),re.bc!=null&&re.bc(re),se&=1}return se?(B.cb=0,se):0})(s,b)||(u=s.a)}}else u=s.a}u==0&&I.Oa!=null&&I.Oa.fd&&(u=oa(I.ba))}I=u}L=I!=0?null:11>L?j.f.RGBA.eb:j.f.kb.y}else L=null;return L};var vu=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(D,ee){for(var N="",M=0;M<4;M++)N+=String.fromCharCode(D[ee++]);return N}function d(D,ee){return D[ee+0]|D[ee+1]<<8}function x(D,ee){return(D[ee+0]|D[ee+1]<<8|D[ee+2]<<16)>>>0}function S(D,ee){return(D[ee+0]|D[ee+1]<<8|D[ee+2]<<16|D[ee+3]<<24)>>>0}new h;var p=[0],w=[0],C=[],k=new h,y=e,E=function(D,ee){var N={},M=0,Y=!1,$=0,oe=0;if(N.frames=[],!function(T,H){for(var G=0;G<4;G++)if(T[H+G]!="RIFF".charCodeAt(G))return!0;return!1}(D,ee)){for(S(D,ee+=4),ee+=8;ee<D.length;){var le=f(D,ee),fe=S(D,ee+=4);ee+=4;var ae=fe+(1&fe);switch(le){case"VP8 ":case"VP8L":N.frames[M]===void 0&&(N.frames[M]={}),(_e=N.frames[M]).src_off=Y?oe:ee-8,_e.src_size=$+fe+8,M++,Y&&(Y=!1,$=0,oe=0);break;case"VP8X":(_e=N.header={}).feature_flags=D[ee];var pe=ee+4;_e.canvas_width=1+x(D,pe),pe+=3,_e.canvas_height=1+x(D,pe),pe+=3;break;case"ALPH":Y=!0,$=ae+8,oe=ee-8;break;case"ANIM":(_e=N.header).bgcolor=S(D,ee),pe=ee+4,_e.loop_count=d(D,pe),pe+=2;break;case"ANMF":var ke,_e;(_e=N.frames[M]={}).offset_x=2*x(D,ee),ee+=3,_e.offset_y=2*x(D,ee),ee+=3,_e.width=1+x(D,ee),ee+=3,_e.height=1+x(D,ee),ee+=3,_e.duration=x(D,ee),ee+=3,ke=D[ee++],_e.dispose=1&ke,_e.blend=ke>>1&1}le!="ANMF"&&(ee+=ae)}return N}}(y,0);E.response=y,E.rgbaoutput=!0,E.dataurl=!1;var P=E.header?E.header:null,R=E.frames?E.frames:null;if(P){P.loop_counter=P.loop_count,p=[P.canvas_height],w=[P.canvas_width];for(var V=0;V<R.length&&R[V].blend!=0;V++);}var Q=R[0],X=k.WebPDecodeRGBA(y,Q.src_off,Q.src_size,w,p);Q.rgba=X,Q.imgwidth=w[0],Q.imgheight=p[0];for(var J=0;J<w[0]*p[0]*4;J++)C[J]=X[J];return this.width=w,this.height=p,this.data=C,this}(function(e){var t,r,n,o,a,c,l,h,f,d=function(T){return T=T||{},this.isStrokeTransparent=T.isStrokeTransparent||!1,this.strokeOpacity=T.strokeOpacity||1,this.strokeStyle=T.strokeStyle||"#000000",this.fillStyle=T.fillStyle||"#000000",this.isFillTransparent=T.isFillTransparent||!1,this.fillOpacity=T.fillOpacity||1,this.font=T.font||"10px sans-serif",this.textBaseline=T.textBaseline||"alphabetic",this.textAlign=T.textAlign||"left",this.lineWidth=T.lineWidth||1,this.lineJoin=T.lineJoin||"miter",this.lineCap=T.lineCap||"butt",this.path=T.path||[],this.transform=T.transform!==void 0?T.transform.clone():new h,this.globalCompositeOperation=T.globalCompositeOperation||"normal",this.globalAlpha=T.globalAlpha||1,this.clip_path=T.clip_path||[],this.currentPoint=T.currentPoint||new c,this.miterLimit=T.miterLimit||10,this.lastPoint=T.lastPoint||new c,this.lineDashOffset=T.lineDashOffset||0,this.lineDash=T.lineDash||[],this.margin=T.margin||[0,0,0,0],this.prevPageLastElemOffset=T.prevPageLastElemOffset||0,this.ignoreClearRect=typeof T.ignoreClearRect!="boolean"||T.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new x(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,a=this.internal.getVerticalCoordinate,c=this.internal.Point,l=this.internal.Rectangle,h=this.internal.Matrix,f=new d}]);var x=function(T){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var H=T;Object.defineProperty(this,"pdf",{get:function(){return H}});var G=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return G},set:function(ve){G=!!ve}});var Z=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return Z},set:function(ve){Z=!!ve}});var ne=0;Object.defineProperty(this,"posX",{get:function(){return ne},set:function(ve){isNaN(ve)||(ne=ve)}});var ue=0;Object.defineProperty(this,"posY",{get:function(){return ue},set:function(ve){isNaN(ve)||(ue=ve)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(ve){var W;typeof ve=="number"?W=[ve,ve,ve,ve]:((W=new Array(4))[0]=ve[0],W[1]=ve.length>=2?ve[1]:W[0],W[2]=ve.length>=3?ve[2]:W[0],W[3]=ve.length>=4?ve[3]:W[1]),f.margin=W}});var me=!1;Object.defineProperty(this,"autoPaging",{get:function(){return me},set:function(ve){me=ve}});var de=0;Object.defineProperty(this,"lastBreak",{get:function(){return de},set:function(ve){de=ve}});var ye=[];Object.defineProperty(this,"pageBreaks",{get:function(){return ye},set:function(ve){ye=ve}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(ve){ve instanceof d&&(f=ve)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(ve){f.path=ve}});var Ie=[];Object.defineProperty(this,"ctxStack",{get:function(){return Ie},set:function(ve){Ie=ve}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(ve){var W;W=S(ve),this.ctx.fillStyle=W.style,this.ctx.isFillTransparent=W.a===0,this.ctx.fillOpacity=W.a,this.pdf.setFillColor(W.r,W.g,W.b,{a:W.a}),this.pdf.setTextColor(W.r,W.g,W.b,{a:W.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(ve){var W=S(ve);this.ctx.strokeStyle=W.style,this.ctx.isStrokeTransparent=W.a===0,this.ctx.strokeOpacity=W.a,W.a===0?this.pdf.setDrawColor(255,255,255):(W.a,this.pdf.setDrawColor(W.r,W.g,W.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(ve){["butt","round","square"].indexOf(ve)!==-1&&(this.ctx.lineCap=ve,this.pdf.setLineCap(ve))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(ve){isNaN(ve)||(this.ctx.lineWidth=ve,this.pdf.setLineWidth(ve))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(ve){["bevel","round","miter"].indexOf(ve)!==-1&&(this.ctx.lineJoin=ve,this.pdf.setLineJoin(ve))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(ve){isNaN(ve)||(this.ctx.miterLimit=ve,this.pdf.setMiterLimit(ve))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(ve){this.ctx.textBaseline=ve}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(ve){["right","end","center","left","start"].indexOf(ve)!==-1&&(this.ctx.textAlign=ve)}});var Ee=null,je=null;Object.defineProperty(this,"fontFaces",{get:function(){return je},set:function(ve){Ee=null,je=ve}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(ve){var W;if(this.ctx.font=ve,(W=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ve))!==null){var pt=W[1];W[2];var rt=W[3],Ye=W[4];W[5];var Le=W[6],Ve=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ye)[2];Ye=Math.floor(Ve==="px"?parseFloat(Ye)*this.pdf.internal.scaleFactor:Ve==="em"?parseFloat(Ye)*this.pdf.getFontSize():parseFloat(Ye)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Ye);var Re=function(Ke){var He,jt,xt=[],De=Ke.trim();if(De==="")return Kl;if(De in Y1)return[Y1[De]];for(;De!=="";){switch(jt=null,He=(De=Q1(De)).charAt(0)){case'"':case"'":jt=av(De.substring(1),He);break;default:jt=sv(De)}if(jt===null||(xt.push(jt[0]),(De=Q1(jt[1]))!==""&&De.charAt(0)!==","))return Kl;De=De.replace(/^,/,"")}return xt}(Le);if(this.fontFaces){var Ze=function(Ke,He){if(Ee===null){var jt=function(xt){var De=[];return Object.keys(xt).forEach(function(st){xt[st].forEach(function(wt){var Je=null;switch(wt){case"bold":Je={family:st,weight:"bold"};break;case"italic":Je={family:st,style:"italic"};break;case"bolditalic":Je={family:st,weight:"bold",style:"italic"};break;case"":case"normal":Je={family:st}}Je!==null&&(Je.ref={name:st,style:wt},De.push(Je))})}),De}(Ke.getFontList());Ee=function(xt){for(var De={},st=0;st<xt.length;++st){var wt=Ql(xt[st]),Je=wt.family,mt=wt.stretch,it=wt.style,qt=wt.weight;De[Je]=De[Je]||{},De[Je][mt]=De[Je][mt]||{},De[Je][mt][it]=De[Je][mt][it]||{},De[Je][mt][it][qt]=wt}return De}(jt.concat(He))}return Ee}(this.pdf,this.fontFaces),Ue=Re.map(function(Ke){return{family:Ke,stretch:"normal",weight:rt,style:pt}}),bt=function(Ke,He,jt){for(var xt=(jt=jt||{}).defaultFontFamily||"times",De=Object.assign({},ov,jt.genericFontFamilies||{}),st=null,wt=null,Je=0;Je<He.length;++Je)if(De[(st=Ql(He[Je])).family]&&(st.family=De[st.family]),Ke.hasOwnProperty(st.family)){wt=Ke[st.family];break}if(!(wt=wt||Ke[xt]))throw new Error("Could not find a font-family for the rule '"+J1(st)+"' and default family '"+xt+"'.");if(wt=function(mt,it){if(it[mt])return it[mt];var qt=xc[mt],er=qt<=xc.normal?-1:1,Lt=G1(it,c0,qt,er);if(!Lt)throw new Error("Could not find a matching font-stretch value for "+mt);return Lt}(st.stretch,wt),wt=function(mt,it){if(it[mt])return it[mt];for(var qt=l0[mt],er=0;er<qt.length;++er)if(it[qt[er]])return it[qt[er]];throw new Error("Could not find a matching font-style for "+mt)}(st.style,wt),!(wt=function(mt,it){if(it[mt])return it[mt];if(mt===400&&it[500])return it[500];if(mt===500&&it[400])return it[400];var qt=iv[mt],er=G1(it,u0,qt,mt<400?-1:1);if(!er)throw new Error("Could not find a matching font-weight for value "+mt);return er}(st.weight,wt)))throw new Error("Failed to resolve a font for the rule '"+J1(st)+"'.");return wt}(Ze,Ue);this.pdf.setFont(bt.ref.name,bt.ref.style)}else{var et="";(rt==="bold"||parseInt(rt,10)>=700||pt==="bold")&&(et="bold"),pt==="italic"&&(et+="italic"),et.length===0&&(et="normal");for(var nt="",Ct={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},at=0;at<Re.length;at++){if(this.pdf.internal.getFont(Re[at],et,{noFallback:!0,disableWarning:!0})!==void 0){nt=Re[at];break}if(et==="bolditalic"&&this.pdf.internal.getFont(Re[at],"bold",{noFallback:!0,disableWarning:!0})!==void 0)nt=Re[at],et="bold";else if(this.pdf.internal.getFont(Re[at],"normal",{noFallback:!0,disableWarning:!0})!==void 0){nt=Re[at],et="normal";break}}if(nt===""){for(var qe=0;qe<Re.length;qe++)if(Ct[Re[qe]]){nt=Ct[Re[qe]];break}}nt=nt===""?"Times":nt,this.pdf.setFont(nt,et)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(ve){this.ctx.globalCompositeOperation=ve}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(ve){this.ctx.globalAlpha=ve}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(ve){this.ctx.lineDashOffset=ve,_e.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(ve){this.ctx.lineDash=ve,_e.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(ve){this.ctx.ignoreClearRect=!!ve}})};x.prototype.setLineDash=function(T){this.lineDash=T},x.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},x.prototype.fill=function(){R.call(this,"fill",!1)},x.prototype.stroke=function(){R.call(this,"stroke",!1)},x.prototype.beginPath=function(){this.path=[{type:"begin"}]},x.prototype.moveTo=function(T,H){if(isNaN(T)||isNaN(H))throw Ot.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var G=this.ctx.transform.applyToPoint(new c(T,H));this.path.push({type:"mt",x:G.x,y:G.y}),this.ctx.lastPoint=new c(T,H)},x.prototype.closePath=function(){var T=new c(0,0),H=0;for(H=this.path.length-1;H!==-1;H--)if(this.path[H].type==="begin"&&Pt(this.path[H+1])==="object"&&typeof this.path[H+1].x=="number"){T=new c(this.path[H+1].x,this.path[H+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new c(T.x,T.y)},x.prototype.lineTo=function(T,H){if(isNaN(T)||isNaN(H))throw Ot.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var G=this.ctx.transform.applyToPoint(new c(T,H));this.path.push({type:"lt",x:G.x,y:G.y}),this.ctx.lastPoint=new c(G.x,G.y)},x.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),R.call(this,null,!0)},x.prototype.quadraticCurveTo=function(T,H,G,Z){if(isNaN(G)||isNaN(Z)||isNaN(T)||isNaN(H))throw Ot.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var ne=this.ctx.transform.applyToPoint(new c(G,Z)),ue=this.ctx.transform.applyToPoint(new c(T,H));this.path.push({type:"qct",x1:ue.x,y1:ue.y,x:ne.x,y:ne.y}),this.ctx.lastPoint=new c(ne.x,ne.y)},x.prototype.bezierCurveTo=function(T,H,G,Z,ne,ue){if(isNaN(ne)||isNaN(ue)||isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z))throw Ot.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var me=this.ctx.transform.applyToPoint(new c(ne,ue)),de=this.ctx.transform.applyToPoint(new c(T,H)),ye=this.ctx.transform.applyToPoint(new c(G,Z));this.path.push({type:"bct",x1:de.x,y1:de.y,x2:ye.x,y2:ye.y,x:me.x,y:me.y}),this.ctx.lastPoint=new c(me.x,me.y)},x.prototype.arc=function(T,H,G,Z,ne,ue){if(isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z)||isNaN(ne))throw Ot.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ue=!!ue,!this.ctx.transform.isIdentity){var me=this.ctx.transform.applyToPoint(new c(T,H));T=me.x,H=me.y;var de=this.ctx.transform.applyToPoint(new c(0,G)),ye=this.ctx.transform.applyToPoint(new c(0,0));G=Math.sqrt(Math.pow(de.x-ye.x,2)+Math.pow(de.y-ye.y,2))}Math.abs(ne-Z)>=2*Math.PI&&(Z=0,ne=2*Math.PI),this.path.push({type:"arc",x:T,y:H,radius:G,startAngle:Z,endAngle:ne,counterclockwise:ue})},x.prototype.arcTo=function(T,H,G,Z,ne){throw new Error("arcTo not implemented.")},x.prototype.rect=function(T,H,G,Z){if(isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z))throw Ot.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(T,H),this.lineTo(T+G,H),this.lineTo(T+G,H+Z),this.lineTo(T,H+Z),this.lineTo(T,H),this.lineTo(T+G,H),this.lineTo(T,H)},x.prototype.fillRect=function(T,H,G,Z){if(isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z))throw Ot.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!p.call(this)){var ne={};this.lineCap!=="butt"&&(ne.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(ne.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(T,H,G,Z),this.fill(),ne.hasOwnProperty("lineCap")&&(this.lineCap=ne.lineCap),ne.hasOwnProperty("lineJoin")&&(this.lineJoin=ne.lineJoin)}},x.prototype.strokeRect=function(T,H,G,Z){if(isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z))throw Ot.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");w.call(this)||(this.beginPath(),this.rect(T,H,G,Z),this.stroke())},x.prototype.clearRect=function(T,H,G,Z){if(isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z))throw Ot.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(T,H,G,Z))},x.prototype.save=function(T){T=typeof T!="boolean"||T;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,G=0;G<this.pdf.internal.getNumberOfPages();G++)this.pdf.setPage(G+1),this.pdf.internal.out("q");if(this.pdf.setPage(H),T){this.ctx.fontSize=this.pdf.internal.getFontSize();var Z=new d(this.ctx);this.ctxStack.push(this.ctx),this.ctx=Z}},x.prototype.restore=function(T){T=typeof T!="boolean"||T;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,G=0;G<this.pdf.internal.getNumberOfPages();G++)this.pdf.setPage(G+1),this.pdf.internal.out("Q");this.pdf.setPage(H),T&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},x.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var S=function(T){var H,G,Z,ne;if(T.isCanvasGradient===!0&&(T=T.getColor()),!T)return{r:0,g:0,b:0,a:0,style:T};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(T))H=0,G=0,Z=0,ne=0;else{var ue=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(T);if(ue!==null)H=parseInt(ue[1]),G=parseInt(ue[2]),Z=parseInt(ue[3]),ne=1;else if((ue=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(T))!==null)H=parseInt(ue[1]),G=parseInt(ue[2]),Z=parseInt(ue[3]),ne=parseFloat(ue[4]);else{if(ne=1,typeof T=="string"&&T.charAt(0)!=="#"){var me=new t0(T);T=me.ok?me.toHex():"#000000"}T.length===4?(H=T.substring(1,2),H+=H,G=T.substring(2,3),G+=G,Z=T.substring(3,4),Z+=Z):(H=T.substring(1,3),G=T.substring(3,5),Z=T.substring(5,7)),H=parseInt(H,16),G=parseInt(G,16),Z=parseInt(Z,16)}}return{r:H,g:G,b:Z,a:ne,style:T}},p=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},w=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};x.prototype.fillText=function(T,H,G,Z){if(isNaN(H)||isNaN(G)||typeof T!="string")throw Ot.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(Z=isNaN(Z)?void 0:Z,!p.call(this)){var ne=ae(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;M.call(this,{text:T,x:H,y:G,scale:ue,angle:ne,align:this.textAlign,maxWidth:Z})}},x.prototype.strokeText=function(T,H,G,Z){if(isNaN(H)||isNaN(G)||typeof T!="string")throw Ot.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!w.call(this)){Z=isNaN(Z)?void 0:Z;var ne=ae(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;M.call(this,{text:T,x:H,y:G,scale:ue,renderingMode:"stroke",angle:ne,align:this.textAlign,maxWidth:Z})}},x.prototype.measureText=function(T){if(typeof T!="string")throw Ot.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var H=this.pdf,G=this.pdf.internal.scaleFactor,Z=H.internal.getFontSize(),ne=H.getStringUnitWidth(T)*Z/H.internal.scaleFactor;return new function(ue){var me=(ue=ue||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return me}}),this}({width:ne*=Math.round(96*G/72*1e4)/1e4})},x.prototype.scale=function(T,H){if(isNaN(T)||isNaN(H))throw Ot.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var G=new h(T,0,0,H,0,0);this.ctx.transform=this.ctx.transform.multiply(G)},x.prototype.rotate=function(T){if(isNaN(T))throw Ot.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var H=new h(Math.cos(T),Math.sin(T),-Math.sin(T),Math.cos(T),0,0);this.ctx.transform=this.ctx.transform.multiply(H)},x.prototype.translate=function(T,H){if(isNaN(T)||isNaN(H))throw Ot.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var G=new h(1,0,0,1,T,H);this.ctx.transform=this.ctx.transform.multiply(G)},x.prototype.transform=function(T,H,G,Z,ne,ue){if(isNaN(T)||isNaN(H)||isNaN(G)||isNaN(Z)||isNaN(ne)||isNaN(ue))throw Ot.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var me=new h(T,H,G,Z,ne,ue);this.ctx.transform=this.ctx.transform.multiply(me)},x.prototype.setTransform=function(T,H,G,Z,ne,ue){T=isNaN(T)?1:T,H=isNaN(H)?0:H,G=isNaN(G)?0:G,Z=isNaN(Z)?1:Z,ne=isNaN(ne)?0:ne,ue=isNaN(ue)?0:ue,this.ctx.transform=new h(T,H,G,Z,ne,ue)};var C=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};x.prototype.drawImage=function(T,H,G,Z,ne,ue,me,de,ye){var Ie=this.pdf.getImageProperties(T),Ee=1,je=1,ve=1,W=1;Z!==void 0&&de!==void 0&&(ve=de/Z,W=ye/ne,Ee=Ie.width/Z*de/Z,je=Ie.height/ne*ye/ne),ue===void 0&&(ue=H,me=G,H=0,G=0),Z!==void 0&&de===void 0&&(de=Z,ye=ne),Z===void 0&&de===void 0&&(de=Ie.width,ye=Ie.height);for(var pt,rt=this.ctx.transform.decompose(),Ye=ae(rt.rotate.shx),Le=new h,Ve=(Le=(Le=(Le=Le.multiply(rt.translate)).multiply(rt.skew)).multiply(rt.scale)).applyToRectangle(new l(ue-H*ve,me-G*W,Z*Ee,ne*je)),Re=k.call(this,Ve),Ze=[],Ue=0;Ue<Re.length;Ue+=1)Ze.indexOf(Re[Ue])===-1&&Ze.push(Re[Ue]);if(P(Ze),this.autoPaging)for(var bt=Ze[0],et=Ze[Ze.length-1],nt=bt;nt<et+1;nt++){this.pdf.setPage(nt);var Ct=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],at=nt===1?this.posY+this.margin[0]:this.margin[0],qe=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Ke=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],He=nt===1?0:qe+(nt-2)*Ke;if(this.ctx.clip_path.length!==0){var jt=this.path;pt=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=E(pt,this.posX+this.margin[3],-He+at+this.ctx.prevPageLastElemOffset),V.call(this,"fill",!0),this.path=jt}var xt=JSON.parse(JSON.stringify(Ve));xt=E([xt],this.posX+this.margin[3],-He+at+this.ctx.prevPageLastElemOffset)[0];var De=(nt>bt||nt<et)&&C.call(this);De&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Ct,Ke,null).clip().discardPath()),this.pdf.addImage(T,"JPEG",xt.x,xt.y,xt.w,xt.h,null,null,Ye),De&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(T,"JPEG",Ve.x,Ve.y,Ve.w,Ve.h,null,null,Ye)};var k=function(T,H,G){var Z=[];H=H||this.pdf.internal.pageSize.width,G=G||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var ne=this.posY+this.ctx.prevPageLastElemOffset;switch(T.type){default:case"mt":case"lt":Z.push(Math.floor((T.y+ne)/G)+1);break;case"arc":Z.push(Math.floor((T.y+ne-T.radius)/G)+1),Z.push(Math.floor((T.y+ne+T.radius)/G)+1);break;case"qct":var ue=pe(this.ctx.lastPoint.x,this.ctx.lastPoint.y,T.x1,T.y1,T.x,T.y);Z.push(Math.floor((ue.y+ne)/G)+1),Z.push(Math.floor((ue.y+ue.h+ne)/G)+1);break;case"bct":var me=ke(this.ctx.lastPoint.x,this.ctx.lastPoint.y,T.x1,T.y1,T.x2,T.y2,T.x,T.y);Z.push(Math.floor((me.y+ne)/G)+1),Z.push(Math.floor((me.y+me.h+ne)/G)+1);break;case"rect":Z.push(Math.floor((T.y+ne)/G)+1),Z.push(Math.floor((T.y+T.h+ne)/G)+1)}for(var de=0;de<Z.length;de+=1)for(;this.pdf.internal.getNumberOfPages()<Z[de];)y.call(this);return Z},y=function(){var T=this.fillStyle,H=this.strokeStyle,G=this.font,Z=this.lineCap,ne=this.lineWidth,ue=this.lineJoin;this.pdf.addPage(),this.fillStyle=T,this.strokeStyle=H,this.font=G,this.lineCap=Z,this.lineWidth=ne,this.lineJoin=ue},E=function(T,H,G){for(var Z=0;Z<T.length;Z++)switch(T[Z].type){case"bct":T[Z].x2+=H,T[Z].y2+=G;case"qct":T[Z].x1+=H,T[Z].y1+=G;default:T[Z].x+=H,T[Z].y+=G}return T},P=function(T){return T.sort(function(H,G){return H-G})},R=function(T,H){for(var G,Z,ne=this.fillStyle,ue=this.strokeStyle,me=this.lineCap,de=this.lineWidth,ye=Math.abs(de*this.ctx.transform.scaleX),Ie=this.lineJoin,Ee=JSON.parse(JSON.stringify(this.path)),je=JSON.parse(JSON.stringify(this.path)),ve=[],W=0;W<je.length;W++)if(je[W].x!==void 0)for(var pt=k.call(this,je[W]),rt=0;rt<pt.length;rt+=1)ve.indexOf(pt[rt])===-1&&ve.push(pt[rt]);for(var Ye=0;Ye<ve.length;Ye++)for(;this.pdf.internal.getNumberOfPages()<ve[Ye];)y.call(this);if(P(ve),this.autoPaging)for(var Le=ve[0],Ve=ve[ve.length-1],Re=Le;Re<Ve+1;Re++){this.pdf.setPage(Re),this.fillStyle=ne,this.strokeStyle=ue,this.lineCap=me,this.lineWidth=ye,this.lineJoin=Ie;var Ze=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Ue=Re===1?this.posY+this.margin[0]:this.margin[0],bt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],et=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],nt=Re===1?0:bt+(Re-2)*et;if(this.ctx.clip_path.length!==0){var Ct=this.path;G=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=E(G,this.posX+this.margin[3],-nt+Ue+this.ctx.prevPageLastElemOffset),V.call(this,T,!0),this.path=Ct}if(Z=JSON.parse(JSON.stringify(Ee)),this.path=E(Z,this.posX+this.margin[3],-nt+Ue+this.ctx.prevPageLastElemOffset),H===!1||Re===0){var at=(Re>Le||Re<Ve)&&C.call(this);at&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Ze,et,null).clip().discardPath()),V.call(this,T,H),at&&this.pdf.restoreGraphicsState()}this.lineWidth=de}else this.lineWidth=ye,V.call(this,T,H),this.lineWidth=de;this.path=Ee},V=function(T,H){if((T!=="stroke"||H||!w.call(this))&&(T==="stroke"||H||!p.call(this))){for(var G,Z,ne=[],ue=this.path,me=0;me<ue.length;me++){var de=ue[me];switch(de.type){case"begin":ne.push({begin:!0});break;case"close":ne.push({close:!0});break;case"mt":ne.push({start:de,deltas:[],abs:[]});break;case"lt":var ye=ne.length;if(ue[me-1]&&!isNaN(ue[me-1].x)&&(G=[de.x-ue[me-1].x,de.y-ue[me-1].y],ye>0)){for(;ye>=0;ye--)if(ne[ye-1].close!==!0&&ne[ye-1].begin!==!0){ne[ye-1].deltas.push(G),ne[ye-1].abs.push(de);break}}break;case"bct":G=[de.x1-ue[me-1].x,de.y1-ue[me-1].y,de.x2-ue[me-1].x,de.y2-ue[me-1].y,de.x-ue[me-1].x,de.y-ue[me-1].y],ne[ne.length-1].deltas.push(G);break;case"qct":var Ie=ue[me-1].x+2/3*(de.x1-ue[me-1].x),Ee=ue[me-1].y+2/3*(de.y1-ue[me-1].y),je=de.x+2/3*(de.x1-de.x),ve=de.y+2/3*(de.y1-de.y),W=de.x,pt=de.y;G=[Ie-ue[me-1].x,Ee-ue[me-1].y,je-ue[me-1].x,ve-ue[me-1].y,W-ue[me-1].x,pt-ue[me-1].y],ne[ne.length-1].deltas.push(G);break;case"arc":ne.push({deltas:[],abs:[],arc:!0}),Array.isArray(ne[ne.length-1].abs)&&ne[ne.length-1].abs.push(de)}}Z=H?null:T==="stroke"?"stroke":"fill";for(var rt=!1,Ye=0;Ye<ne.length;Ye++)if(ne[Ye].arc)for(var Le=ne[Ye].abs,Ve=0;Ve<Le.length;Ve++){var Re=Le[Ve];Re.type==="arc"?J.call(this,Re.x,Re.y,Re.radius,Re.startAngle,Re.endAngle,Re.counterclockwise,void 0,H,!rt):Y.call(this,Re.x,Re.y),rt=!0}else if(ne[Ye].close===!0)this.pdf.internal.out("h"),rt=!1;else if(ne[Ye].begin!==!0){var Ze=ne[Ye].start.x,Ue=ne[Ye].start.y;$.call(this,ne[Ye].deltas,Ze,Ue),rt=!0}Z&&D.call(this,Z),H&&ee.call(this)}},Q=function(T){var H=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,G=H*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return T-G;case"top":return T+H-G;case"hanging":return T+H-2*G;case"middle":return T+H/2-G;default:return T}},X=function(T){return T+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};x.prototype.createLinearGradient=function(){var T=function(){};return T.colorStops=[],T.addColorStop=function(H,G){this.colorStops.push([H,G])},T.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},T.isCanvasGradient=!0,T},x.prototype.createPattern=function(){return this.createLinearGradient()},x.prototype.createRadialGradient=function(){return this.createLinearGradient()};var J=function(T,H,G,Z,ne,ue,me,de,ye){for(var Ie=le.call(this,G,Z,ne,ue),Ee=0;Ee<Ie.length;Ee++){var je=Ie[Ee];Ee===0&&(ye?N.call(this,je.x1+T,je.y1+H):Y.call(this,je.x1+T,je.y1+H)),oe.call(this,T,H,je.x2,je.y2,je.x3,je.y3,je.x4,je.y4)}de?ee.call(this):D.call(this,me)},D=function(T){switch(T){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},ee=function(){this.pdf.clip(),this.pdf.discardPath()},N=function(T,H){this.pdf.internal.out(r(T)+" "+n(H)+" m")},M=function(T){var H;switch(T.align){case"right":case"end":H="right";break;case"center":H="center";break;default:H="left"}var G=this.pdf.getTextDimensions(T.text),Z=Q.call(this,T.y),ne=X.call(this,Z)-G.h,ue=this.ctx.transform.applyToPoint(new c(T.x,Z)),me=this.ctx.transform.decompose(),de=new h;de=(de=(de=de.multiply(me.translate)).multiply(me.skew)).multiply(me.scale);for(var ye,Ie,Ee,je=this.ctx.transform.applyToRectangle(new l(T.x,Z,G.w,G.h)),ve=de.applyToRectangle(new l(T.x,ne,G.w,G.h)),W=k.call(this,ve),pt=[],rt=0;rt<W.length;rt+=1)pt.indexOf(W[rt])===-1&&pt.push(W[rt]);if(P(pt),this.autoPaging)for(var Ye=pt[0],Le=pt[pt.length-1],Ve=Ye;Ve<Le+1;Ve++){this.pdf.setPage(Ve);var Re=Ve===1?this.posY+this.margin[0]:this.margin[0],Ze=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Ue=this.pdf.internal.pageSize.height-this.margin[2],bt=Ue-this.margin[0],et=this.pdf.internal.pageSize.width-this.margin[1],nt=et-this.margin[3],Ct=Ve===1?0:Ze+(Ve-2)*bt;if(this.ctx.clip_path.length!==0){var at=this.path;ye=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=E(ye,this.posX+this.margin[3],-1*Ct+Re),V.call(this,"fill",!0),this.path=at}var qe=E([JSON.parse(JSON.stringify(ve))],this.posX+this.margin[3],-Ct+Re+this.ctx.prevPageLastElemOffset)[0];T.scale>=.01&&(Ie=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ie*T.scale),Ee=this.lineWidth,this.lineWidth=Ee*T.scale);var Ke=this.autoPaging!=="text";if(Ke||qe.y+qe.h<=Ue){if(Ke||qe.y>=Re&&qe.x<=et){var He=Ke?T.text:this.pdf.splitTextToSize(T.text,T.maxWidth||et-qe.x)[0],jt=E([JSON.parse(JSON.stringify(je))],this.posX+this.margin[3],-Ct+Re+this.ctx.prevPageLastElemOffset)[0],xt=Ke&&(Ve>Ye||Ve<Le)&&C.call(this);xt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],nt,bt,null).clip().discardPath()),this.pdf.text(He,jt.x,jt.y,{angle:T.angle,align:H,renderingMode:T.renderingMode}),xt&&this.pdf.restoreGraphicsState()}}else qe.y<Ue&&(this.ctx.prevPageLastElemOffset+=Ue-qe.y);T.scale>=.01&&(this.pdf.setFontSize(Ie),this.lineWidth=Ee)}else T.scale>=.01&&(Ie=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ie*T.scale),Ee=this.lineWidth,this.lineWidth=Ee*T.scale),this.pdf.text(T.text,ue.x+this.posX,ue.y+this.posY,{angle:T.angle,align:H,renderingMode:T.renderingMode,maxWidth:T.maxWidth}),T.scale>=.01&&(this.pdf.setFontSize(Ie),this.lineWidth=Ee)},Y=function(T,H,G,Z){G=G||0,Z=Z||0,this.pdf.internal.out(r(T+G)+" "+n(H+Z)+" l")},$=function(T,H,G){return this.pdf.lines(T,H,G,null,null)},oe=function(T,H,G,Z,ne,ue,me,de){this.pdf.internal.out([t(o(G+T)),t(a(Z+H)),t(o(ne+T)),t(a(ue+H)),t(o(me+T)),t(a(de+H)),"c"].join(" "))},le=function(T,H,G,Z){for(var ne=2*Math.PI,ue=Math.PI/2;H>G;)H-=ne;var me=Math.abs(G-H);me<ne&&Z&&(me=ne-me);for(var de=[],ye=Z?-1:1,Ie=H;me>1e-5;){var Ee=Ie+ye*Math.min(me,ue);de.push(fe.call(this,T,Ie,Ee)),me-=Math.abs(Ee-Ie),Ie=Ee}return de},fe=function(T,H,G){var Z=(G-H)/2,ne=T*Math.cos(Z),ue=T*Math.sin(Z),me=ne,de=-ue,ye=me*me+de*de,Ie=ye+me*ne+de*ue,Ee=4/3*(Math.sqrt(2*ye*Ie)-Ie)/(me*ue-de*ne),je=me-Ee*de,ve=de+Ee*me,W=je,pt=-ve,rt=Z+H,Ye=Math.cos(rt),Le=Math.sin(rt);return{x1:T*Math.cos(H),y1:T*Math.sin(H),x2:je*Ye-ve*Le,y2:je*Le+ve*Ye,x3:W*Ye-pt*Le,y3:W*Le+pt*Ye,x4:T*Math.cos(G),y4:T*Math.sin(G)}},ae=function(T){return 180*T/Math.PI},pe=function(T,H,G,Z,ne,ue){var me=T+.5*(G-T),de=H+.5*(Z-H),ye=ne+.5*(G-ne),Ie=ue+.5*(Z-ue),Ee=Math.min(T,ne,me,ye),je=Math.max(T,ne,me,ye),ve=Math.min(H,ue,de,Ie),W=Math.max(H,ue,de,Ie);return new l(Ee,ve,je-Ee,W-ve)},ke=function(T,H,G,Z,ne,ue,me,de){var ye,Ie,Ee,je,ve,W,pt,rt,Ye,Le,Ve,Re,Ze,Ue,bt=G-T,et=Z-H,nt=ne-G,Ct=ue-Z,at=me-ne,qe=de-ue;for(Ie=0;Ie<41;Ie++)Ye=(pt=(Ee=T+(ye=Ie/40)*bt)+ye*((ve=G+ye*nt)-Ee))+ye*(ve+ye*(ne+ye*at-ve)-pt),Le=(rt=(je=H+ye*et)+ye*((W=Z+ye*Ct)-je))+ye*(W+ye*(ue+ye*qe-W)-rt),Ie==0?(Ve=Ye,Re=Le,Ze=Ye,Ue=Le):(Ve=Math.min(Ve,Ye),Re=Math.min(Re,Le),Ze=Math.max(Ze,Ye),Ue=Math.max(Ue,Le));return new l(Math.round(Ve),Math.round(Re),Math.round(Ze-Ve),Math.round(Ue-Re))},_e=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var T,H,G=(T=this.ctx.lineDash,H=this.ctx.lineDashOffset,JSON.stringify({lineDash:T,lineDashOffset:H}));this.prevLineDash!==G&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=G)}}})(Ge.API),function(e){var t=function(c){var l,h,f,d,x,S,p,w,C,k;for(h=[],f=0,d=(c+=l="\0\0\0\0".slice(c.length%4||4)).length;d>f;f+=4)(x=(c.charCodeAt(f)<<24)+(c.charCodeAt(f+1)<<16)+(c.charCodeAt(f+2)<<8)+c.charCodeAt(f+3))!==0?(S=(x=((x=((x=((x=(x-(k=x%85))/85)-(C=x%85))/85)-(w=x%85))/85)-(p=x%85))/85)%85,h.push(S+33,p+33,w+33,C+33,k+33)):h.push(122);return function(y,E){for(var P=E;P>0;P--)y.pop()}(h,l.length),String.fromCharCode.apply(String,h)+"~>"},r=function(c){var l,h,f,d,x,S=String,p="length",w=255,C="charCodeAt",k="slice",y="replace";for(c[k](-2),c=c[k](0,-2)[y](/\s/g,"")[y]("z","!!!!!"),f=[],d=0,x=(c+=l="uuuuu"[k](c[p]%5||5))[p];x>d;d+=5)h=52200625*(c[C](d)-33)+614125*(c[C](d+1)-33)+7225*(c[C](d+2)-33)+85*(c[C](d+3)-33)+(c[C](d+4)-33),f.push(w&h>>24,w&h>>16,w&h>>8,w&h);return function(E,P){for(var R=P;R>0;R--)E.pop()}(f,l[p]),S.fromCharCode.apply(S,f)},n=function(c){return c.split("").map(function(l){return("0"+l.charCodeAt().toString(16)).slice(-2)}).join("")+">"},o=function(c){var l=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((c=c.replace(/\s/g,"")).indexOf(">")!==-1&&(c=c.substr(0,c.indexOf(">"))),c.length%2&&(c+="0"),l.test(c)===!1)return"";for(var h="",f=0;f<c.length;f+=2)h+=String.fromCharCode("0x"+(c[f]+c[f+1]));return h},a=function(c){for(var l=new Uint8Array(c.length),h=c.length;h--;)l[h]=c.charCodeAt(h);return(l=fc(l)).reduce(function(f,d){return f+String.fromCharCode(d)},"")};e.processDataByFilters=function(c,l){var h=0,f=c||"",d=[];for(typeof(l=l||[])=="string"&&(l=[l]),h=0;h<l.length;h+=1)switch(l[h]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),d.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),d.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=o(f),d.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),d.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=a(f),d.push("/FlateDecode");break;default:throw new Error('The filter: "'+l[h]+'" is not implemented')}return{data:f,reverseChain:d.reverse().join(" ")}}}(Ge.API),function(e){e.loadFile=function(t,r,n){return function(o,a,c){a=a!==!1,c=typeof c=="function"?c:function(){};var l=void 0;try{l=function(h,f,d){var x=new XMLHttpRequest,S=0,p=function(w){var C=w.length,k=[],y=String.fromCharCode;for(S=0;S<C;S+=1)k.push(y(255&w.charCodeAt(S)));return k.join("")};if(x.open("GET",h,!f),x.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(x.onload=function(){x.status===200?d(p(this.responseText)):d(void 0)}),x.send(null),f&&x.status===200)return p(x.responseText)}(o,a,c)}catch{}return l}(t,r,n)},e.loadImageFile=e.loadFile}(Ge.API),function(e){function t(){return(tt.html2canvas?Promise.resolve(tt.html2canvas):jl(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load html2canvas: "+l))}).then(function(l){return l.default?l.default:l})}function r(){return(tt.DOMPurify?Promise.resolve(tt.DOMPurify):jl(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load dompurify: "+l))}).then(function(l){return l.default?l.default:l})}var n=function(l){var h=Pt(l);return h==="undefined"?"undefined":h==="string"||l instanceof String?"string":h==="number"||l instanceof Number?"number":h==="function"||l instanceof Function?"function":l&&l.constructor===Array?"array":l&&l.nodeType===1?"element":h==="object"?"object":"unknown"},o=function(l,h){var f=document.createElement(l);for(var d in h.className&&(f.className=h.className),h.innerHTML&&h.dompurify&&(f.innerHTML=h.dompurify.sanitize(h.innerHTML)),h.style)f.style[d]=h.style[d];return f},a=function l(h,f){for(var d=h.nodeType===3?document.createTextNode(h.nodeValue):h.cloneNode(!1),x=h.firstChild;x;x=x.nextSibling)f!==!0&&x.nodeType===1&&x.nodeName==="SCRIPT"||d.appendChild(l(x,f));return h.nodeType===1&&(h.nodeName==="CANVAS"?(d.width=h.width,d.height=h.height,d.getContext("2d").drawImage(h,0,0)):h.nodeName!=="TEXTAREA"&&h.nodeName!=="SELECT"||(d.value=h.value),d.addEventListener("load",function(){d.scrollTop=h.scrollTop,d.scrollLeft=h.scrollLeft},!0)),d},c=function l(h){var f=Object.assign(l.convert(Promise.resolve()),JSON.parse(JSON.stringify(l.template))),d=l.convert(Promise.resolve(),f);return(d=d.setProgress(1,l,1,[l])).set(h)};(c.prototype=Object.create(Promise.prototype)).constructor=c,c.convert=function(l,h){return l.__proto__=h||c.prototype,l},c.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},c.prototype.from=function(l,h){return this.then(function(){switch(h=h||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(l),h){case"string":return this.then(r).then(function(f){return this.set({src:o("div",{innerHTML:l,dompurify:f})})});case"element":return this.set({src:l});case"canvas":return this.set({canvas:l});case"img":return this.set({img:l});default:return this.error("Unknown source type.")}})},c.prototype.to=function(l){switch(l){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},c.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var l={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},h=a(this.prop.src,this.opt.html2canvas.javascriptEnabled);h.tagName==="BODY"&&(l.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:l}),this.prop.container.appendChild(h),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},c.prototype.toCanvas=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,h(this.prop.container,f)}).then(function(h){(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toContext2d=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=this.opt.jsPDF,d=this.opt.fontFaces,x=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,S=Object.assign({async:!0,allowTaint:!0,scale:x,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete S.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=d,d)for(var p=0;p<d.length;++p){var w=d[p],C=w.src.find(function(k){return k.format==="truetype"});C&&f.addFont(C.url,w.ref.name,w.ref.style)}return S.windowHeight=S.windowHeight||0,S.windowHeight=S.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):S.windowHeight,f.context2d.save(!0),h(this.prop.container,S)}).then(function(h){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var l=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=l})},c.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},c.prototype.output=function(l,h,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(l,h):this.outputPdf(l,h)},c.prototype.outputPdf=function(l,h){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(l,h)})},c.prototype.outputImg=function(l){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(l){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+l+'" is not supported.'}})},c.prototype.save=function(l){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(l?{filename:l}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},c.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},c.prototype.set=function(l){if(n(l)!=="object")return this;var h=Object.keys(l||{}).map(function(f){if(f in c.template.prop)return function(){this.prop[f]=l[f]};switch(f){case"margin":return this.setMargin.bind(this,l.margin);case"jsPDF":return function(){return this.opt.jsPDF=l.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,l.pageSize);default:return function(){this.opt[f]=l[f]}}},this);return this.then(function(){return this.thenList(h)})},c.prototype.get=function(l,h){return this.then(function(){var f=l in c.template.prop?this.prop[l]:this.opt[l];return h?h(f):f})},c.prototype.setMargin=function(l){return this.then(function(){switch(n(l)){case"number":l=[l,l,l,l];case"array":if(l.length===2&&(l=[l[0],l[1],l[0],l[1]]),l.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=l}).then(this.setPageSize)},c.prototype.setPageSize=function(l){function h(f,d){return Math.floor(f*d/72*96)}return this.then(function(){(l=l||Ge.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(l.inner={width:l.width-this.opt.margin[1]-this.opt.margin[3],height:l.height-this.opt.margin[0]-this.opt.margin[2]},l.inner.px={width:h(l.inner.width,l.k),height:h(l.inner.height,l.k)},l.inner.ratio=l.inner.height/l.inner.width),this.prop.pageSize=l})},c.prototype.setProgress=function(l,h,f,d){return l!=null&&(this.progress.val=l),h!=null&&(this.progress.state=h),f!=null&&(this.progress.n=f),d!=null&&(this.progress.stack=d),this.progress.ratio=this.progress.val/this.progress.state,this},c.prototype.updateProgress=function(l,h,f,d){return this.setProgress(l?this.progress.val+l:null,h||null,f?this.progress.n+f:null,d?this.progress.stack.concat(d):null)},c.prototype.then=function(l,h){var f=this;return this.thenCore(l,h,function(d,x){return f.updateProgress(null,null,1,[d]),Promise.prototype.then.call(this,function(S){return f.updateProgress(null,d),S}).then(d,x).then(function(S){return f.updateProgress(1),S})})},c.prototype.thenCore=function(l,h,f){f=f||Promise.prototype.then;var d=this;l&&(l=l.bind(d)),h&&(h=h.bind(d));var x=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?d:c.convert(Object.assign({},d),Promise.prototype),S=f.call(x,l,h);return c.convert(S,d.__proto__)},c.prototype.thenExternal=function(l,h){return Promise.prototype.then.call(this,l,h)},c.prototype.thenList=function(l){var h=this;return l.forEach(function(f){h=h.thenCore(f)}),h},c.prototype.catch=function(l){l&&(l=l.bind(this));var h=Promise.prototype.catch.call(this,l);return c.convert(h,this)},c.prototype.catchExternal=function(l){return Promise.prototype.catch.call(this,l)},c.prototype.error=function(l){return this.then(function(){throw new Error(l)})},c.prototype.using=c.prototype.set,c.prototype.saveAs=c.prototype.save,c.prototype.export=c.prototype.output,c.prototype.run=c.prototype.then,Ge.getPageSize=function(l,h,f){if(Pt(l)==="object"){var d=l;l=d.orientation,h=d.unit||h,f=d.format||f}h=h||"mm",f=f||"a4",l=(""+(l||"P")).toLowerCase();var x,S=(""+f).toLowerCase(),p={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(h){case"pt":x=1;break;case"mm":x=72/25.4;break;case"cm":x=72/2.54;break;case"in":x=72;break;case"px":x=.75;break;case"pc":case"em":x=12;break;case"ex":x=6;break;default:throw"Invalid unit: "+h}var w,C=0,k=0;if(p.hasOwnProperty(S))C=p[S][1]/x,k=p[S][0]/x;else try{C=f[1],k=f[0]}catch{throw new Error("Invalid format: "+f)}if(l==="p"||l==="portrait")l="p",k>C&&(w=k,k=C,C=w);else{if(l!=="l"&&l!=="landscape")throw"Invalid orientation: "+l;l="l",C>k&&(w=k,k=C,C=w)}return{width:k,height:C,unit:h,k:x,orientation:l}},e.html=function(l,h){(h=h||{}).callback=h.callback||function(){},h.html2canvas=h.html2canvas||{},h.html2canvas.canvas=h.html2canvas.canvas||this.canvas,h.jsPDF=h.jsPDF||this,h.fontFaces=h.fontFaces?h.fontFaces.map(Ql):null;var f=new c(h);return h.worker?f:f.from(l).doCallback()}}(Ge.API),Ge.API.addJS=function(e){return X1=e,this.internal.events.subscribe("postPutResources",function(){_s=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(_s+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),K1=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+X1+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){_s!==void 0&&K1!==void 0&&this.internal.out("/Names <</JavaScript "+_s+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var o=r.outline.render().split(/\r\n/),a=0;a<o.length;a++){var c=o[a],l=n.exec(c);if(l!=null){var h=l[1];r.internal.newObjectDeferredBegin(h,!1)}r.internal.write(c)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,d=[];for(a=0;a<f;a++){var x=r.internal.newObject();d.push(x);var S=r.internal.getPageInfo(a+1);r.internal.write("<< /D["+S.objId+" 0 R /XYZ null null null]>> endobj")}var p=r.internal.newObject();for(r.internal.write("<< /Names [ "),a=0;a<d.length;a++)r.internal.write("(page_"+(a+1)+")"+d[a]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+p+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,o,a){var c={title:o,options:a,children:[]};return n==null&&(n=this.root),n.children.push(c),c},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var o=0;o<n.children.length;o++)this.genIds_r(n.children[o])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var o=this.ctx.pdf.internal.getVerticalCoordinateString,a=0;a<n.children.length;a++){var c=n.children[a];this.objStart(c),this.line("/Title "+this.makeString(c.title)),this.line("/Parent "+this.makeRef(n)),a>0&&this.line("/Prev "+this.makeRef(n.children[a-1])),a<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[a+1])),c.children.length>0&&(this.line("/First "+this.makeRef(c.children[0])),this.line("/Last "+this.makeRef(c.children[c.children.length-1])));var l=this.count=this.count_r({count:0},c);if(l>0&&this.line("/Count "+l),c.options&&c.options.pageNumber){var h=r.internal.getPageInfo(c.options.pageNumber);this.line("/Dest ["+h.objId+" 0 R /XYZ 0 "+o(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,o){for(var a=0;a<o.children.length;a++)n.count++,this.count_r(n,o.children[a]);return n.count}}])}(Ge.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,o,a,c,l){var h,f=this.decode.DCT_DECODE,d=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=c||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,h=function(x){for(var S,p=256*x.charCodeAt(4)+x.charCodeAt(5),w=x.length,C={width:0,height:0,numcomponents:1},k=4;k<w;k+=2){if(k+=p,t.indexOf(x.charCodeAt(k+1))!==-1){S=256*x.charCodeAt(k+5)+x.charCodeAt(k+6),C={width:256*x.charCodeAt(k+7)+x.charCodeAt(k+8),height:S,numcomponents:x.charCodeAt(k+9)};break}p=256*x.charCodeAt(k+2)+x.charCodeAt(k+3)}return C}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),h.numcomponents){case 1:l=this.color_spaces.DEVICE_GRAY;break;case 4:l=this.color_spaces.DEVICE_CMYK;break;case 3:l=this.color_spaces.DEVICE_RGB}d={data:r,width:h.width,height:h.height,colorSpace:l,bitsPerComponent:8,filter:f,index:n,alias:o}}return d}}(Ge.API),Ge.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var o,a=$6(e,{checkCrc:!0}),c=a.width,l=a.height,h=a.channels,f=a.palette,d=a.depth;o=f&&h===1?function(J){for(var D=J.width,ee=J.height,N=J.data,M=J.palette,Y=J.depth,$=!1,oe=[],le=[],fe=void 0,ae=!1,pe=0,ke=0;ke<M.length;ke++){var _e=r1(M[ke],4),T=_e[0],H=_e[1],G=_e[2],Z=_e[3];oe.push(T,H,G),Z!=null&&(Z===0?(pe++,le.length<1&&le.push(ke)):Z<255&&(ae=!0))}if(ae||pe>1){$=!0,le=void 0;var ne=D*ee;fe=new Uint8Array(ne);for(var ue=new DataView(N.buffer),me=0;me<ne;me++){var de=Xl(ue,me,Y),ye=r1(M[de],4)[3];fe[me]=ye}}else pe===0&&(le=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:$?8:void 0,colorBytes:N,alphaBytes:fe,needSMask:$,palette:oe,mask:le}}(a):h===2||h===4?function(J){for(var D=J.data,ee=J.width,N=J.height,M=J.channels,Y=J.depth,$=M===2?"DeviceGray":"DeviceRGB",oe=M-1,le=ee*N,fe=oe,ae=le*fe,pe=1*le,ke=Math.ceil(ae*Y/8),_e=Math.ceil(pe*Y/8),T=new Uint8Array(ke),H=new Uint8Array(_e),G=new DataView(D.buffer),Z=new DataView(T.buffer),ne=new DataView(H.buffer),ue=!1,me=0;me<le;me++){for(var de=me*M,ye=0;ye<fe;ye++)sh(Z,Xl(G,de+ye,Y),me*fe+ye,Y);var Ie=Xl(G,de+fe,Y);Ie<(1<<Y)-1&&(ue=!0),sh(ne,Ie,1*me,Y)}return{colorSpace:$,colorsPerPixel:oe,sMaskBitsPerComponent:ue?Y:void 0,colorBytes:T,alphaBytes:H,needSMask:ue}}(a):function(J){var D=J.data,ee=J.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:ee,colorsPerPixel:ee==="DeviceGray"?1:3,colorBytes:D instanceof Uint16Array?function(N){for(var M=N.length,Y=new Uint8Array(2*M),$=new DataView(Y.buffer,Y.byteOffset,Y.byteLength),oe=0;oe<M;oe++)$.setUint16(2*oe,N[oe],!1);return Y}(D):D,needSMask:!1}}(a);var x,S,p,w=o,C=w.colorSpace,k=w.colorsPerPixel,y=w.sMaskBitsPerComponent,E=w.colorBytes,P=w.alphaBytes,R=w.needSMask,V=w.palette,Q=w.mask,X=null;return n!==Ge.API.image_compression.NONE&&typeof fc=="function"?(X=function(J){var D;switch(J){case Ge.API.image_compression.FAST:D=11;break;case Ge.API.image_compression.MEDIUM:D=13;break;case Ge.API.image_compression.SLOW:D=14;break;default:D=12}return D}(n),x=this.decode.FLATE_DECODE,S="/Predictor ".concat(X," /Colors ").concat(k," /BitsPerComponent ").concat(d," /Columns ").concat(c),e=rh(E,Math.ceil(c*k*d/8),k,d,n),R&&(p=rh(P,Math.ceil(c*y/8),1,y,n))):(x=void 0,S=void 0,e=E,R&&(p=P)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(p&&this.__addimage__.isArrayBuffer(p)||this.__addimage__.isArrayBufferView(p))&&(p=this.__addimage__.arrayBufferToBinaryString(p)),{alias:r,data:e,index:t,filter:x,decodeParameters:S,transparency:Q,palette:V,sMask:p,predictor:X,width:c,height:l,bitsPerComponent:d,sMaskBitsPerComponent:y,colorSpace:C}}},function(e){e.processGIF89A=function(t,r,n,o){var a=new hv(t),c=a.width,l=a.height,h=[];a.decodeAndBlitFrameRGBA(0,h);var f={data:h,width:c,height:l},d=new Zl(100).encode(f,100);return e.processJPEG.call(this,d,r,n,o)},e.processGIF87A=e.processGIF89A}(Ge.API),kn.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:o,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},kn.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Ot.log("bit decode error:"+r)}},kn.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,o=0;o<t;o++)for(var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+8*o*4,l=0;l<8&&8*o+l<this.width;l++){var h=this.palette[a>>7-l&1];this.data[c+4*l]=h.blue,this.data[c+4*l+1]=h.green,this.data[c+4*l+2]=h.red,this.data[c+4*l+3]=255}r!==0&&(this.pos+=4-r)}},kn.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<e;o++){var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+2*o*4,l=a>>4,h=15&a,f=this.palette[l];if(this.data[c]=f.blue,this.data[c+1]=f.green,this.data[c+2]=f.red,this.data[c+3]=255,2*o+1>=this.width)break;f=this.palette[h],this.data[c+4]=f.blue,this.data[c+4+1]=f.green,this.data[c+4+2]=f.red,this.data[c+4+3]=255}t!==0&&(this.pos+=4-t)}},kn.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(o<this.palette.length){var c=this.palette[o];this.data[a]=c.red,this.data[a+1]=c.green,this.data[a+2]=c.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}e!==0&&(this.pos+=4-e)}},kn.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(a&t)/t*255|0,l=(a>>5&t)/t*255|0,h=(a>>10&t)/t*255|0,f=a>>15?255:0,d=n*this.width*4+4*o;this.data[d]=h,this.data[d+1]=l,this.data[d+2]=c,this.data[d+3]=f}this.pos+=e}},kn.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var o=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var c=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(c&t)/t*255|0,h=(c>>5&r)/r*255|0,f=(c>>11)/t*255|0,d=o*this.width*4+4*a;this.data[d]=f,this.data[d+1]=h,this.data[d+2]=l,this.data[d+3]=255}this.pos+=e}},kn.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=a,this.data[c+1]=o,this.data[c+2]=n,this.data[c+3]=255}this.pos+=this.width%4}},kn.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=a,this.data[l+1]=o,this.data[l+2]=n,this.data[l+3]=c}},kn.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,o){var a=new kn(t,!1),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new Zl(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ge.API),ch.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,o){var a=new ch(t),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new Zl(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ge.API),Ge.API.processRGBA=function(e,t,r){for(var n=e.data,o=n.length,a=new Uint8Array(o/4*3),c=new Uint8Array(o/4),l=0,h=0,f=0;f<o;f+=4){var d=n[f],x=n[f+1],S=n[f+2],p=n[f+3];a[l++]=d,a[l++]=x,a[l++]=S,c[h++]=p}var w=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(c),data:w,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},Ge.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Mo=Ge.API,Cs=Mo.getCharWidthsArray=function(e,t){var r,n,o=(t=t||{}).font||this.internal.getFont(),a=t.fontSize||this.internal.getFontSize(),c=t.charSpace||this.internal.getCharSpace(),l=t.widths?t.widths:o.metadata.Unicode.widths,h=l.fof?l.fof:1,f=t.kerning?t.kerning:o.metadata.Unicode.kerning,d=f.fof?f.fof:1,x=t.doKerning!==!1,S=0,p=e.length,w=0,C=l[0]||h,k=[];for(r=0;r<p;r++)n=e.charCodeAt(r),typeof o.metadata.widthOfString=="function"?k.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(n))+c*(1e3/a)||0)/1e3):(S=x&&Pt(f[n])==="object"&&!isNaN(parseInt(f[n][w],10))?f[n][w]/d:0,k.push((l[n]||C)/h+S)),w=n;return k},Z1=Mo.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),o=t.charSpace||this.internal.getCharSpace();return Mo.processArabic&&(e=Mo.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,o)/r:Cs.apply(this,arguments).reduce(function(a,c){return a+c},0)},eh=function(e,t,r,n){for(var o=[],a=0,c=e.length,l=0;a!==c&&l+t[a]<r;)l+=t[a],a++;o.push(e.slice(0,a));var h=a;for(l=0;a!==c;)l+t[a]>n&&(o.push(e.slice(h,a)),l=0,h=a),l+=t[a],a++;return h!==a&&o.push(e.slice(h,a)),o},th=function(e,t,r){r||(r={});var n,o,a,c,l,h,f,d=[],x=[d],S=r.textIndent||0,p=0,w=0,C=e.split(" "),k=Cs.apply(this,[" ",r])[0];if(h=r.lineIndent===-1?C[0].length+2:r.lineIndent||0){var y=Array(h).join(" "),E=[];C.map(function(R){(R=R.split(/\s*\n/)).length>1?E=E.concat(R.map(function(V,Q){return(Q&&V.length?`
`:"")+V})):E.push(R[0])}),C=E,h=Z1.apply(this,[y,r])}for(a=0,c=C.length;a<c;a++){var P=0;if(n=C[a],h&&n[0]==`
`&&(n=n.substr(1),P=1),S+p+(w=(o=Cs.apply(this,[n,r])).reduce(function(R,V){return R+V},0))>t||P){if(w>t){for(l=eh.apply(this,[n,o,t-(S+p),t]),d.push(l.shift()),d=[l.pop()];l.length;)x.push([l.shift()]);w=o.slice(n.length-(d[0]?d[0].length:0)).reduce(function(R,V){return R+V},0)}else d=[n];x.push(d),S=w+h,p=k}else d.push(n),S+=p+w,p=k}return f=h?function(R,V){return(V?y:"")+R.join(" ")}:function(R){return R.join(" ")},x.map(f)},Mo.splitTextToSize=function(e,t,r){var n,o=(r=r||{}).fontSize||this.internal.getFontSize(),a=(function(d){if(d.widths&&d.kerning)return{widths:d.widths,kerning:d.kerning};var x=this.internal.getFont(d.fontName,d.fontStyle),S="Unicode";return x.metadata[S]?{widths:x.metadata[S].widths||{0:1},kerning:x.metadata[S].kerning||{}}:{font:x.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var c=1*this.internal.scaleFactor*t/o;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0,a.lineIndent=r.lineIndent;var l,h,f=[];for(l=0,h=n.length;l<h;l++)f=f.concat(th.apply(this,[n[l],c,a]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},o={},a=0;a<16;a++)n[r[a]]=t[a],o[t[a]]=r[a];var c=function(S){return"0x"+parseInt(S,10).toString(16)},l=e.__fontmetrics__.compress=function(S){var p,w,C,k,y=["{"];for(var E in S){if(p=S[E],isNaN(parseInt(E,10))?w="'"+E+"'":(E=parseInt(E,10),w=(w=c(E).slice(2)).slice(0,-1)+o[w.slice(-1)]),typeof p=="number")p<0?(C=c(p).slice(3),k="-"):(C=c(p).slice(2),k=""),C=k+C.slice(0,-1)+o[C.slice(-1)];else{if(Pt(p)!=="object")throw new Error("Don't know what to do with value type "+Pt(p)+".");C=l(p)}y.push(w+C)}return y.push("}"),y.join("")},h=e.__fontmetrics__.uncompress=function(S){if(typeof S!="string")throw new Error("Invalid argument passed to uncompress.");for(var p,w,C,k,y={},E=1,P=y,R=[],V="",Q="",X=S.length-1,J=1;J<X;J+=1)(k=S[J])=="'"?p?(C=p.join(""),p=void 0):p=[]:p?p.push(k):k=="{"?(R.push([P,C]),P={},C=void 0):k=="}"?((w=R.pop())[0][w[1]]=P,C=void 0,P=w[0]):k=="-"?E=-1:C===void 0?n.hasOwnProperty(k)?(V+=n[k],C=parseInt(V,16)*E,E=1,V=""):V+=k:n.hasOwnProperty(k)?(Q+=n[k],P[C]=parseInt(Q,16)*E,E=1,C=void 0,Q=""):Q+=k;return y},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},d={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},x={Unicode:{"Courier-Oblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(S){var p=S.font,w=x.Unicode[p.postScriptName];w&&(p.metadata.Unicode={},p.metadata.Unicode.widths=w.widths,p.metadata.Unicode.kerning=w.kerning);var C=d.Unicode[p.postScriptName];C&&(p.metadata.Unicode.encoding=C,p.encoding=C.codePages[0])}])}(Ge.API),function(e){var t=function(r){for(var n=r.length,o=new Uint8Array(n),a=0;a<n;a++)o[a]=r.charCodeAt(a);return o};e.API.events.push(["addFont",function(r){var n=void 0,o=r.font,a=r.instance;if(!o.isStandardFont){if(a===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");if(typeof(n=a.existsFileInVFS(o.postScriptName)===!1?a.loadFile(o.postScriptName):a.getFileFromVFS(o.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");(function(c,l){l=/^\x00\x01\x00\x00/.test(l)?t(l):t(Ts(l)),c.metadata=e.API.TTFFont.open(l),c.metadata.Unicode=c.metadata.Unicode||{encoding:{},kerning:{},widths:[]},c.metadata.glyIdsUsed=[0]})(o,n)}}])}(Ge),Ge.API.addSvgAsImage=function(e,t,r,n,o,a,c,l){if(isNaN(t)||isNaN(r))throw Ot.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw Ot.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=n,h.height=o;var f=h.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,h.width,h.height);var d={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},x=this;return(tt.canvg?Promise.resolve(tt.canvg):jl(()=>import("./index.es.DAUvDboj.js"),__vite__mapDeps([0,1,2,3]))).catch(function(S){return Promise.reject(new Error("Could not load canvg: "+S))}).then(function(S){return S.default?S.default:S}).then(function(S){return S.fromString(f,e,d)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(S){return S.render(d)}).then(function(){x.addImage(h.toDataURL("image/jpeg",1),t,r,n,o,c,l)})},Ge.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var o=0;o<this.internal.pages[n].length;o++)this.internal.pages[n][o]=this.internal.pages[n][o].replace(t,r);return this},Ge.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,o,a,c={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},l=Object.keys(c),h=[],f=0,d=0,x=0;function S(w,C){var k,y=!1;for(k=0;k<w.length;k+=1)w[k]===C&&(y=!0);return y}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(c)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var p=l.length;for(x=0;x<p;x+=1)r[l[x]].value=r[l[x]].defaultValue,r[l[x]].explicitSet=!1}if(Pt(e)==="object"){for(o in e)if(a=e[o],S(l,o)&&a!==void 0){if(r[o].type==="boolean"&&typeof a=="boolean")r[o].value=a;else if(r[o].type==="name"&&S(r[o].valueSet,a))r[o].value=a;else if(r[o].type==="integer"&&Number.isInteger(a))r[o].value=a;else if(r[o].type==="array"){for(f=0;f<a.length;f+=1)if(n=!0,a[f].length===1&&typeof a[f][0]=="number")h.push(String(a[f]-1));else if(a[f].length>1){for(d=0;d<a[f].length;d+=1)typeof a[f][d]!="number"&&(n=!1);n===!0&&h.push([a[f][0]-1,a[f][1]-1].join(" "))}r[o].value="["+h.join(" ")+"]"}else r[o].value=r[o].defaultValue;r[o].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var w,C=[];for(w in r)r[w].explicitSet===!0&&(r[w].type==="name"?C.push("/"+w+" /"+r[w].value):C.push("/"+w+" "+r[w].value));C.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+C.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',o=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),a=unescape(encodeURIComponent(n)),c=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),l=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),h=unescape(encodeURIComponent("</x:xmpmeta>")),f=a.length+c.length+l.length+o.length+h.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(o+a+c+l+h),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,o){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:o||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(Ge.API),function(e){var t=e.API,r=t.pdfEscape16=function(a,c){for(var l,h=c.metadata.Unicode.widths,f=["","0","00","000","0000"],d=[""],x=0,S=a.length;x<S;++x){if(l=c.metadata.characterToGlyph(a.charCodeAt(x)),c.metadata.glyIdsUsed.push(l),c.metadata.toUnicode[l]=a.charCodeAt(x),h.indexOf(l)==-1&&(h.push(l),h.push([parseInt(c.metadata.widthOfGlyph(l),10)])),l=="0")return d.join("");l=l.toString(16),d.push(f[4-l.length],l)}return d.join("")},n=function(a){var c,l,h,f,d,x,S;for(d=`/CIDInit /ProcSet findresource begin
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
endcodespacerange`,h=[],x=0,S=(l=Object.keys(a).sort(function(p,w){return p-w})).length;x<S;x++)c=l[x],h.length>=100&&(d+=`
`+h.length+` beginbfchar
`+h.join(`
`)+`
endbfchar`,h=[]),a[c]!==void 0&&a[c]!==null&&typeof a[c].toString=="function"&&(f=("0000"+a[c].toString(16)).slice(-4),c=("0000"+(+c).toString(16)).slice(-4),h.push("<"+c+"><"+f+">"));return h.length&&(d+=`
`+h.length+` beginbfchar
`+h.join(`
`)+`
endbfchar
`),d+`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,d=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="Identity-H"){for(var x=l.metadata.Unicode.widths,S=l.metadata.subset.encode(l.metadata.glyIdsUsed,1),p="",w=0;w<S.length;w++)p+=String.fromCharCode(S[w]);var C=f();d({data:p,addLength1:!0,objectId:C}),h("endobj");var k=f();d({data:n(l.metadata.toUnicode),addLength1:!0,objectId:k}),h("endobj");var y=f();h("<<"),h("/Type /FontDescriptor"),h("/FontName /"+Fo(l.fontName)),h("/FontFile2 "+C+" 0 R"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/Flags "+l.metadata.flags),h("/StemV "+l.metadata.stemV),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h(">>"),h("endobj");var E=f();h("<<"),h("/Type /Font"),h("/BaseFont /"+Fo(l.fontName)),h("/FontDescriptor "+y+" 0 R"),h("/W "+e.API.PDFObject.convert(x)),h("/CIDToGIDMap /Identity"),h("/DW 1000"),h("/Subtype /CIDFontType2"),h("/CIDSystemInfo"),h("<<"),h("/Supplement 0"),h("/Registry (Adobe)"),h("/Ordering ("+l.encoding+")"),h(">>"),h(">>"),h("endobj"),l.objectNumber=f(),h("<<"),h("/Type /Font"),h("/Subtype /Type0"),h("/ToUnicode "+k+" 0 R"),h("/BaseFont /"+Fo(l.fontName)),h("/Encoding /"+l.encoding),h("/DescendantFonts ["+E+" 0 R]"),h(">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]),t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,d=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="WinAnsiEncoding"){for(var x=l.metadata.rawData,S="",p=0;p<x.length;p++)S+=String.fromCharCode(x[p]);var w=f();d({data:S,addLength1:!0,objectId:w}),h("endobj");var C=f();d({data:n(l.metadata.toUnicode),addLength1:!0,objectId:C}),h("endobj");var k=f();h("<<"),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h("/StemV "+l.metadata.stemV),h("/Type /FontDescriptor"),h("/FontFile2 "+w+" 0 R"),h("/Flags 96"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/FontName /"+Fo(l.fontName)),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h(">>"),h("endobj"),l.objectNumber=f();for(var y=0;y<l.metadata.hmtx.widths.length;y++)l.metadata.hmtx.widths[y]=parseInt(l.metadata.hmtx.widths[y]*(1e3/l.metadata.head.unitsPerEm));h("<</Subtype/TrueType/Type/Font/ToUnicode "+C+" 0 R/BaseFont/"+Fo(l.fontName)+"/FontDescriptor "+k+" 0 R/Encoding/"+l.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(l.metadata.hmtx.widths)+">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]);var o=function(a){var c,l=a.text||"",h=a.x,f=a.y,d=a.options||{},x=a.mutex||{},S=x.pdfEscape,p=x.activeFontKey,w=x.fonts,C=p,k="",y=0,E="",P=w[C].encoding;if(w[C].encoding!=="Identity-H")return{text:l,x:h,y:f,options:d,mutex:x};for(E=l,C=p,Array.isArray(l)&&(E=l[0]),y=0;y<E.length;y+=1)w[C].metadata.hasOwnProperty("cmap")&&(c=w[C].metadata.cmap.unicode.codeMap[E[y].charCodeAt(0)]),c||E[y].charCodeAt(0)<256&&w[C].metadata.hasOwnProperty("Unicode")?k+=E[y]:k+="";var R="";return parseInt(C.slice(1))<14||P==="WinAnsiEncoding"?R=S(k,C).split("").map(function(V){return V.charCodeAt(0).toString(16)}).join(""):P==="Identity-H"&&(R=r(k,w[C])),x.isHex=!0,{text:R,x:h,y:f,options:d,mutex:x}};t.events.push(["postProcessText",function(a){var c=a.text||"",l=[],h={text:c,x:a.x,y:a.y,options:a.options,mutex:a.mutex};if(Array.isArray(c)){var f=0;for(f=0;f<c.length;f+=1)Array.isArray(c[f])&&c[f].length===3?l.push([o(Object.assign({},h,{text:c[f][0]})).text,c[f][1],c[f][2]]):l.push(o(Object.assign({},h,{text:c[f]})).text);a.text=l}else a.text=o(Object.assign({},h,{text:c})).text}])}(Ge),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Ge.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var o,a,c,l,h,f,d,x=t,S=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],p=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],w={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},C={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},k=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],y=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),E=!1,P=0;this.__bidiEngine__={};var R=function(N){var M=N.charCodeAt(),Y=M>>8,$=C[Y];return $!==void 0?x[256*$+(255&M)]:Y===252||Y===253?"AL":y.test(Y)?"L":Y===8?"R":"N"},V=function(N){for(var M,Y=0;Y<N.length;Y++){if((M=R(N.charAt(Y)))==="L")return!1;if(M==="R")return!0}return!1},Q=function(N,M,Y,$){var oe,le,fe,ae,pe=M[$];switch(pe){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":E=!1;break;case"N":case"AN":break;case"EN":E&&(pe="AN");break;case"AL":E=!0,pe="R";break;case"WS":case"BN":pe="N";break;case"CS":$<1||$+1>=M.length||(oe=Y[$-1])!=="EN"&&oe!=="AN"||(le=M[$+1])!=="EN"&&le!=="AN"?pe="N":E&&(le="AN"),pe=le===oe?le:"N";break;case"ES":pe=(oe=$>0?Y[$-1]:"B")==="EN"&&$+1<M.length&&M[$+1]==="EN"?"EN":"N";break;case"ET":if($>0&&Y[$-1]==="EN"){pe="EN";break}if(E){pe="N";break}for(fe=$+1,ae=M.length;fe<ae&&M[fe]==="ET";)fe++;pe=fe<ae&&M[fe]==="EN"?"EN":"N";break;case"NSM":if(c&&!l){for(ae=M.length,fe=$+1;fe<ae&&M[fe]==="NSM";)fe++;if(fe<ae){var ke=N[$],_e=ke>=1425&&ke<=2303||ke===64286;if(oe=M[fe],_e&&(oe==="R"||oe==="AL")){pe="R";break}}}pe=$<1||(oe=M[$-1])==="B"?"N":Y[$-1];break;case"B":E=!1,o=!0,pe=P;break;case"S":a=!0,pe="N"}return pe},X=function(N,M,Y){var $=N.split("");return Y&&J($,Y,{hiLevel:P}),$.reverse(),M&&M.reverse(),$.join("")},J=function(N,M,Y){var $,oe,le,fe,ae,pe=-1,ke=N.length,_e=0,T=[],H=P?p:S,G=[];for(E=!1,o=!1,a=!1,oe=0;oe<ke;oe++)G[oe]=R(N[oe]);for(le=0;le<ke;le++){if(ae=_e,T[le]=Q(N,G,T,le),$=240&(_e=H[ae][w[T[le]]]),_e&=15,M[le]=fe=H[_e][5],$>0)if($===16){for(oe=pe;oe<le;oe++)M[oe]=1;pe=-1}else pe=-1;if(H[_e][6])pe===-1&&(pe=le);else if(pe>-1){for(oe=pe;oe<le;oe++)M[oe]=fe;pe=-1}G[le]==="B"&&(M[le]=0),Y.hiLevel|=fe}a&&function(Z,ne,ue){for(var me=0;me<ue;me++)if(Z[me]==="S"){ne[me]=P;for(var de=me-1;de>=0&&Z[de]==="WS";de--)ne[de]=P}}(G,M,ke)},D=function(N,M,Y,$,oe){if(!(oe.hiLevel<N)){if(N===1&&P===1&&!o)return M.reverse(),void(Y&&Y.reverse());for(var le,fe,ae,pe,ke=M.length,_e=0;_e<ke;){if($[_e]>=N){for(ae=_e+1;ae<ke&&$[ae]>=N;)ae++;for(pe=_e,fe=ae-1;pe<fe;pe++,fe--)le=M[pe],M[pe]=M[fe],M[fe]=le,Y&&(le=Y[pe],Y[pe]=Y[fe],Y[fe]=le);_e=ae}_e++}}},ee=function(N,M,Y){var $=N.split(""),oe={hiLevel:P};return Y||(Y=[]),J($,Y,oe),function(le,fe,ae){if(ae.hiLevel!==0&&d)for(var pe,ke=0;ke<le.length;ke++)fe[ke]===1&&(pe=k.indexOf(le[ke]))>=0&&(le[ke]=k[pe+1])}($,Y,oe),D(2,$,M,Y,oe),D(1,$,M,Y,oe),$.join("")};return this.__bidiEngine__.doBidiReorder=function(N,M,Y){if(function(oe,le){if(le)for(var fe=0;fe<oe.length;fe++)le[fe]=fe;l===void 0&&(l=V(oe)),f===void 0&&(f=V(oe))}(N,M),c||!h||f)if(c&&h&&l^f)P=l?1:0,N=X(N,M,Y);else if(!c&&h&&f)P=l?1:0,N=ee(N,M,Y),N=X(N,M);else if(!c||l||h||f){if(c&&!h&&l^f)N=X(N,M),l?(P=0,N=ee(N,M,Y)):(P=1,N=ee(N,M,Y),N=X(N,M));else if(c&&l&&!h&&f)P=1,N=ee(N,M,Y),N=X(N,M);else if(!c&&!h&&l^f){var $=d;l?(P=1,N=ee(N,M,Y),P=0,d=!1,N=ee(N,M,Y),d=$):(P=0,N=ee(N,M,Y),N=X(N,M),P=1,d=!1,N=ee(N,M,Y),d=$,N=X(N,M))}}else P=0,N=ee(N,M,Y);else P=l?1:0,N=ee(N,M,Y);return N},this.__bidiEngine__.setOptions=function(N){N&&(c=N.isInputVisual,h=N.isOutputVisual,l=N.isInputRtl,f=N.isOutputRtl,d=N.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var o=n.text;n.x,n.y;var a=n.options||{};n.mutex,a.lang;var c=[];if(a.isInputVisual=typeof a.isInputVisual!="boolean"||a.isInputVisual,r.setOptions(a),Object.prototype.toString.call(o)==="[object Array]"){var l=0;for(c=[],l=0;l<o.length;l+=1)Object.prototype.toString.call(o[l])==="[object Array]"?c.push([r.doBidiReorder(o[l][0]),o[l][1],o[l][2]]):c.push([r.doBidiReorder(o[l])]);n.text=c}else n.text=r.doBidiReorder(o);r.setOptions({isInputVisual:!0})}])}(Ge),Ge.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new qi(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new kv(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new fv(this.contents),this.head=new pv(this),this.name=new xv(this),this.cmap=new f0(this),this.toUnicode={},this.hhea=new mv(this),this.maxp=new wv(this),this.hmtx=new yv(this),this.post=new vv(this),this.os2=new gv(this),this.loca=new Av(this),this.glyf=new Sv(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,o,a;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var c,l,h,f;for(f=[],c=0,l=(h=this.bbox).length;c<l;c++)t=h[c],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(o=this.post.italic_angle),32768&(r=o>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(a=this.familyClass)===1||a===2||a===3||a===4||a===5||a===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var o,a,c,l;for(c=0,a=0,l=(t=""+t).length;0<=l?a<l:a>l;a=0<=l?++a:--a)o=t.charCodeAt(a),c+=this.widthOfGlyph(this.characterToGlyph(o))+n*(1e3/r)||0;return c*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var Tn,qi=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,o;for(o=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)o.push(this.writeByte(t.charCodeAt(r)));return o},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,o,a,c,l,h;return t=this.readByte(),r=this.readByte(),n=this.readByte(),o=this.readByte(),a=this.readByte(),c=this.readByte(),l=this.readByte(),h=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^o)+16777216*(255^a)+65536*(255^c)+256*(255^l)+(255^h)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*o+16777216*a+65536*c+256*l+h},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,o,a;for(a=[],n=0,o=t.length;n<o;n++)r=t[n],a.push(this.writeByte(r));return a},e}(),fv=function(){var e;function t(r){var n,o,a;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},o=0,a=this.tableCount;0<=a?o<a:o>a;o=0<=a?++o:--o)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,o,a,c,l,h,f,d,x,S,p,w,C;for(C in p=Object.keys(r).length,h=Math.log(2),x=16*Math.floor(Math.log(p)/h),c=Math.floor(x/h),d=16*p-x,(o=new qi).writeInt(this.scalarType),o.writeShort(p),o.writeShort(x),o.writeShort(c),o.writeShort(d),a=16*p,f=o.pos+a,l=null,w=[],r)for(S=r[C],o.writeString(C),o.writeInt(e(S)),o.writeInt(f),o.writeInt(S.length),w=w.concat(S),C==="head"&&(l=f),f+=S.length;f%4;)w.push(0),f++;return o.write(w),n=2981146554-e(o.data),o.pos=l+8,o.writeUInt32(n),o.data},e=function(r){var n,o,a,c;for(r=d0.call(r);r.length%4;)r.push(0);for(a=new qi(r),o=0,n=0,c=r.length;n<c;n=n+=4)o+=a.readUInt32();return 4294967295&o},t}(),dv={}.hasOwnProperty,$n=function(e,t){for(var r in t)dv.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};Tn=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var pv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new qi).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),uh=function(){function e(t,r){var n,o,a,c,l,h,f,d,x,S,p,w,C,k,y,E,P;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),x=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(h=0;h<256;++h)this.codeMap[h]=t.readByte();break;case 4:for(p=t.readUInt16(),S=p/2,t.pos+=6,a=function(){var R,V;for(V=[],h=R=0;0<=S?R<S:R>S;h=0<=S?++R:--R)V.push(t.readUInt16());return V}(),t.pos+=2,C=function(){var R,V;for(V=[],h=R=0;0<=S?R<S:R>S;h=0<=S?++R:--R)V.push(t.readUInt16());return V}(),f=function(){var R,V;for(V=[],h=R=0;0<=S?R<S:R>S;h=0<=S?++R:--R)V.push(t.readUInt16());return V}(),d=function(){var R,V;for(V=[],h=R=0;0<=S?R<S:R>S;h=0<=S?++R:--R)V.push(t.readUInt16());return V}(),o=(this.length-t.pos+this.offset)/2,l=function(){var R,V;for(V=[],h=R=0;0<=o?R<o:R>o;h=0<=o?++R:--R)V.push(t.readUInt16());return V}(),h=y=0,P=a.length;y<P;h=++y)for(k=a[h],n=E=w=C[h];w<=k?E<=k:E>=k;n=w<=k?++E:--E)d[h]===0?c=n+f[h]:(c=l[d[h]/2+(n-w)-(S-h)]||0)!==0&&(c+=f[h]),this.codeMap[n]=65535&c}t.pos=x}return e.encode=function(t,r){var n,o,a,c,l,h,f,d,x,S,p,w,C,k,y,E,P,R,V,Q,X,J,D,ee,N,M,Y,$,oe,le,fe,ae,pe,ke,_e,T,H,G,Z,ne,ue,me,de,ye,Ie,Ee;switch($=new qi,c=Object.keys(t).sort(function(je,ve){return je-ve}),r){case"macroman":for(C=0,k=function(){var je=[];for(w=0;w<256;++w)je.push(0);return je}(),E={0:0},a={},oe=0,pe=c.length;oe<pe;oe++)E[de=t[o=c[oe]]]==null&&(E[de]=++C),a[o]={old:t[o],new:E[t[o]]},k[o]=E[t[o]];return $.writeUInt16(1),$.writeUInt16(0),$.writeUInt32(12),$.writeUInt16(0),$.writeUInt16(262),$.writeUInt16(0),$.write(k),{charMap:a,subtable:$.data,maxGlyphID:C+1};case"unicode":for(M=[],x=[],P=0,E={},n={},y=f=null,le=0,ke=c.length;le<ke;le++)E[V=t[o=c[le]]]==null&&(E[V]=++P),n[o]={old:V,new:E[V]},l=E[V]-o,y!=null&&l===f||(y&&x.push(y),M.push(o),f=l),y=o;for(y&&x.push(y),x.push(65535),M.push(65535),ee=2*(D=M.length),J=2*Math.pow(Math.log(D)/Math.LN2,2),S=Math.log(J/2)/Math.LN2,X=2*D-J,h=[],Q=[],p=[],w=fe=0,_e=M.length;fe<_e;w=++fe){if(N=M[w],d=x[w],N===65535){h.push(0),Q.push(0);break}if(N-(Y=n[N].new)>=32768)for(h.push(0),Q.push(2*(p.length+D-w)),o=ae=N;N<=d?ae<=d:ae>=d;o=N<=d?++ae:--ae)p.push(n[o].new);else h.push(Y-N),Q.push(0)}for($.writeUInt16(3),$.writeUInt16(1),$.writeUInt32(12),$.writeUInt16(4),$.writeUInt16(16+8*D+2*p.length),$.writeUInt16(0),$.writeUInt16(ee),$.writeUInt16(J),$.writeUInt16(S),$.writeUInt16(X),ue=0,T=x.length;ue<T;ue++)o=x[ue],$.writeUInt16(o);for($.writeUInt16(0),me=0,H=M.length;me<H;me++)o=M[me],$.writeUInt16(o);for(ye=0,G=h.length;ye<G;ye++)l=h[ye],$.writeUInt16(l);for(Ie=0,Z=Q.length;Ie<Z;Ie++)R=Q[Ie],$.writeUInt16(R);for(Ee=0,ne=p.length;Ee<ne;Ee++)C=p[Ee],$.writeUInt16(C);return{charMap:n,subtable:$.data,maxGlyphID:P+1}}},e}(),f0=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,o;for(t.pos=this.offset,this.version=t.readUInt16(),o=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=o?n<o:n>o;n=0<=o?++n:--n)r=new uh(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,o;return r==null&&(r="macroman"),n=uh.encode(t,r),(o=new qi).writeUInt16(0),o.writeUInt16(1),n.table=o.data.concat(n.subtable),n},e}(),mv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),gv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),vv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var a;for(n=t.readUInt16(),this.glyphNameIndex=[],a=0;0<=n?a<n:a>n;a=0<=n?++a:--a)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)r=t.readByte(),o.push(this.names.push(t.readString(r)));return o;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var c,l,h;for(h=[],a=c=0,l=this.file.maxp.numGlyphs;0<=l?c<l:c>l;a=0<=l?++c:--c)h.push(t.readUInt32());return h}).call(this)}},e}(),bv=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},xv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,o,a,c,l,h,f,d,x,S;for(t.pos=this.offset,t.readShort(),r=t.readShort(),l=t.readShort(),n=[],a=0;0<=r?a<r:a>r;a=0<=r?++a:--a)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+l+t.readShort()});for(h={},a=d=0,x=n.length;d<x;a=++d)o=n[a],t.pos=o.offset,f=t.readString(o.length),c=new bv(f,o),h[S=o.nameID]==null&&(h[S]=[]),h[o.nameID].push(c);this.strings=h,this.copyright=h[0],this.fontFamily=h[1],this.fontSubfamily=h[2],this.uniqueSubfamily=h[3],this.fontName=h[4],this.version=h[5];try{this.postscriptName=h[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=h[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=h[7],this.manufacturer=h[8],this.designer=h[9],this.description=h[10],this.vendorUrl=h[11],this.designerUrl=h[12],this.license=h[13],this.licenseUrl=h[14],this.preferredFamily=h[15],this.preferredSubfamily=h[17],this.compatibleFull=h[18],this.sampleText=h[19]},e}(),wv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),yv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,o,a,c,l,h;for(t.pos=this.offset,this.metrics=[],r=0,l=this.file.hhea.numberOfMetrics;0<=l?r<l:r>l;r=0<=l?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(o=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,d;for(d=[],r=f=0;0<=o?f<o:f>o;r=0<=o?++f:--f)d.push(t.readInt16());return d}(),this.widths=(function(){var f,d,x,S;for(S=[],f=0,d=(x=this.metrics).length;f<d;f++)a=x[f],S.push(a.advance);return S}).call(this),n=this.widths[this.widths.length-1],h=[],r=c=0;0<=o?c<o:c>o;r=0<=o?++c:--c)h.push(this.widths.push(n));return h},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),d0=[].slice,Sv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,o,a,c,l,h,f,d,x;return t in this.cache?this.cache[t]:(a=this.file.loca,r=this.file.contents,n=a.indexOf(t),(o=a.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,c=(l=new qi(r.read(o))).readShort(),f=l.readShort(),x=l.readShort(),h=l.readShort(),d=l.readShort(),this.cache[t]=c===-1?new Cv(l,f,x,h,d):new _v(l,c,f,x,h,d),this.cache[t]))},e.prototype.encode=function(t,r,n){var o,a,c,l,h;for(c=[],a=[],l=0,h=r.length;l<h;l++)o=t[r[l]],a.push(c.length),o&&(c=c.concat(o.encode(n)));return a.push(c.length),{table:c,offsets:a}},e}(),_v=function(){function e(t,r,n,o,a,c){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=o,this.xMax=a,this.yMax=c,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),Cv=function(){function e(t,r,n,o,a){var c,l;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=o,this.yMax=a,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],c=this.raw;l=c.readShort(),this.glyphOffsets.push(c.pos),this.glyphIDs.push(c.readUInt16()),32&l;)c.pos+=1&l?4:2,128&l?c.pos+=8:64&l?c.pos+=4:8&l&&(c.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new qi(d0.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),Av=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,Tn),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=2)a.push(2*t.readUInt16());return a}).call(this):(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=4)a.push(t.readUInt32());return a}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),o=0,a=0,c=0;c<n.length;++c)if(n[c]=o,a<r.length&&r[a]==c){++a,n[c]=o;var l=this.offsets[c],h=this.offsets[c+1]-l;h>0&&(o+=h)}for(var f=new Array(4*n.length),d=0;d<n.length;++d)f[4*d+3]=255&n[d],f[4*d+2]=(65280&n[d])>>8,f[4*d+1]=(16711680&n[d])>>16,f[4*d]=(4278190080&n[d])>>24;return f},e}(),kv=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,o,a;for(r in o=this.font.cmap.tables[0].codeMap,t={},a=this.subset)n=a[r],t[r]=o[n];return t},e.prototype.glyphsFor=function(t){var r,n,o,a,c,l,h;for(o={},c=0,l=t.length;c<l;c++)o[a=t[c]]=this.font.glyf.glyphFor(a);for(a in r=[],o)(n=o[a])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(a in h=this.glyphsFor(r))n=h[a],o[a]=n;return o},e.prototype.encode=function(t,r){var n,o,a,c,l,h,f,d,x,S,p,w,C,k,y;for(o in n=f0.encode(this.generateCmap(),"unicode"),c=this.glyphsFor(t),p={0:0},y=n.charMap)p[(h=y[o]).old]=h.new;for(w in S=n.maxGlyphID,c)w in p||(p[w]=S++);return d=function(E){var P,R;for(P in R={},E)R[E[P]]=P;return R}(p),x=Object.keys(d).sort(function(E,P){return E-P}),C=function(){var E,P,R;for(R=[],E=0,P=x.length;E<P;E++)l=x[E],R.push(d[l]);return R}(),a=this.font.glyf.encode(c,C,p),f=this.font.loca.encode(a.offsets,C),k={cmap:this.font.cmap.raw(),glyf:a.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(k["OS/2"]=this.font.os2.raw()),this.font.directory.encode(k)},e}();Ge.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,o,a,c;if(Array.isArray(r))return"["+function(){var l,h,f;for(f=[],l=0,h=r.length;l<h;l++)n=r[l],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(o in a=["<<"],r)c=r[o],a.push("/"+o+" "+t.convert(c));return a.push(">>"),a.join(`
`)}return""+r},t}();const Lv=["ab67616d000082c1","ab67616d0000b273"];async function Nv(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function Iv(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function Tv(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=Iv(e);if(!t)return e;for(const r of Lv){const n=`https://i.scdn.co/image/${r}${t}`;if(await Nv(n))return n}return e}function Pv(e){return Et({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function jv(e){return Et({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const Ev=q.div`
    width: 80%;
    margin-inline: auto;
`,Rv=q.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,Mv=q(Xh)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,Ov=q.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Fv=q.div`
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
`,Dv=q.img`
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
`,zv=q.div`
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
`,Bv=q(u2)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?hr`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,Uv=q.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,qv=q.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,hh=q.div`
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
`,Hv=q.div`
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
`,$v=q.div`
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
`,Vv=q.div`
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
`,fh=q.button`
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
`,Wv=q.textarea`
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
`,Gv=q.div`
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
`,_a=q.div`
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
`,Ca=q.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`,dh=q(pm)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,Yv=q(Pv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,Jv=q(jv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,Qv=q(Op)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Iu`
                  animation: ${hr`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Iu`
                  animation: ${hr`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,Kv=q.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,Xv=q.p`
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
`,Hc=F.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:o},a)=>{const{t:c}=fr(),l=F.useRef(null),h=F.useRef(null),[f,d]=F.useState(""),[x,S]=F.useState(""),[p,w]=F.useState("200"),[C,k]=F.useState("110"),[y,E]=F.useState("50"),[P,R]=F.useState((n==null?void 0:n.marginTop)??""),[V,Q]=F.useState(160),[X,J]=F.useState((n==null?void 0:n.marginCover)??0),[D,ee]=F.useState((n==null?void 0:n.marginBackground)??0),[N,M]=F.useState("#5900ff"),[Y,$]=F.useState("#ff9100"),[oe,le]=F.useState("#ff0000"),[fe,ae]=F.useState("#00ff40"),[pe,ke]=F.useState("#2600ff"),[_e,T]=F.useState(!0),[H,G]=F.useState((n==null?void 0:n.useFade)??!0),[Z,ne]=F.useState((n==null?void 0:n.showTracklist)??!1),[ue,me]=F.useState(""),[de,ye]=F.useState(""),[Ie,Ee]=F.useState(""),[je,ve]=F.useState(null),[W,pt]=F.useState("information");function rt(ge){Vr(!0),d(ge.albumName||""),S(ge.artistsName||""),w(ge.titleSize||"200"),k(ge.artistsSize||"110"),E(ge.tracksSize||"50"),R(ge.marginTop||""),Q(ge.marginSide||160),J(ge.marginCover||0),ee(ge.marginBackground||0),M(ge.backgroundColor||"#5900ff"),$(ge.textColor||"#ff9100"),le(ge.color1||"#ff0000"),ae(ge.color2||"#00ff40"),ke(ge.color3||"#2600ff"),T(ge.useWatermark!==void 0?ge.useWatermark:!0),G(ge.useFade!==void 0?ge.useFade:!0),ne(ge.showTracklist!==void 0?ge.showTracklist:!1),Le(ge.useUncompressed!==void 0?ge.useUncompressed:!1),me(ge.albumCover||""),ye(ge.uncompressedAlbumCover||""),Ee(ge.customFont||""),Ue(ge.tracklist||""),et(ge.titleRelease||""),Ct(ge.releaseDate||""),qe(ge.titleRuntime||""),He(ge.runtime||""),un()}F.useEffect(()=>{if(je){const ge=new FileReader;ge.onload=async gt=>{const Jt="CustomFont",hn=new FontFace(Jt,gt.target.result);try{const Rr=await hn.load();document.fonts.add(Rr),Ee(Jt)}catch(Rr){console.error("Erro ao carregar fonte:",Rr)}},ge.readAsArrayBuffer(je)}},[je]),F.useEffect(()=>{o&&rt(o)},[o]);const[Ye,Le]=F.useState(!1),[Ve,Re]=F.useState("Original"),[Ze,Ue]=F.useState(""),[bt,et]=F.useState(""),[nt,Ct]=F.useState(""),[at,qe]=F.useState(""),[Ke,He]=F.useState(""),[jt,xt]=F.useState(!1),[De,st]=F.useState(null),[wt,Je]=F.useState(null),[mt,it]=F.useState(!1),[qt,er]=F.useState(!1),[Lt,Xe]=F.useState(!1),[St,Vn]=F.useState(!1),[br,Vr]=F.useState(!1),sn=ge=>{w(ge.target.value),it(!0)},Qe=(ge,gt)=>{gt&&!qt?(w(ge),er(!0)):mt||w(ge)},wn=ge=>{E(ge.target.value),Xe(!0)},yn=(ge,gt)=>{gt&&!St?(E(ge),Vn(!0)):Lt||E(ge)},Er={albumCover:ue,uncompressedAlbumCover:de,useUncompressed:Ye,albumName:f,artistsName:x,titleSize:p,artistsSize:C,tracksSize:y,marginTop:P,marginSide:V,marginCover:X,marginBackground:D,titleRelease:bt,releaseDate:nt,titleRuntime:at,runtime:Ke,backgroundColor:N,textColor:Y,useWatermark:_e,useFade:H,showTracklist:Z,tracklist:Ze,color1:oe,color2:fe,color3:pe,albumID:e,userAdjustedTitleSize:mt,initialTitleSizeSet:qt,userAdjustedTracksSize:Lt,initialTracksSizeSet:St},[xr,Ht]=F.useState(null),[Yt,lr]=F.useState(!1),[Wn,ln]=F.useState(!1),[Wr,Gr]=F.useState(!1),[Yr,Dr]=F.useState(!1),[zr,Sn]=F.useState(!1);F.useEffect(()=>{if(Yt){ln(!1);const ge=setTimeout(()=>{Sn(!0)},100);return()=>clearTimeout(ge)}else Sn(!1)},[Yt]);const cn=ge=>{Ht(ge),lr(!1),Dr(!1),e5(f,x),setTimeout(()=>{Sn(!1),setTimeout(()=>{ln(!0)},300)},100)},un=()=>{it(!1),Xe(!1),ln(!1),requestAnimationFrame(()=>{if(Dr(!0),lr(!0),l.current){const ge=l.current.getBoundingClientRect(),gt=ge.top+window.scrollY,Jt=ge.height,Rr=(window.innerHeight-Jt)/2;window.scrollTo({top:gt-Rr,behavior:"smooth"})}})},mi=ge=>{me(URL.createObjectURL(ge)),Le(!1),ye(""),Re(ge.name),Vr(!1)},Pn=()=>{if(!xr)return;const ge=document.createElement("a");ge.href=xr,ge.download=`Posterfy - ${f}.png`,ge.click(),Fu(f,"poster",x)},Gn=()=>{if(!h.current)return;const ge=h.current.getCanvas();if(!ge)return;const gt=new Ge({orientation:"portrait",unit:"mm",format:"a4",compress:!1}),Jt=ge.toDataURL("image/jpeg",1);gt.addImage(Jt,"JPEG",0,0,210,297,void 0,"FAST"),gt.save(`Posterfy - ${f}.pdf`),Fu(f,"poster_pdf",x)};function Yn(ge,gt){st(ge),Je(gt),xt(!0)}function gi(){xt(!1)}const vo=()=>{const gt=Ze.split(`
`).map(Jt=>Jt.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());Ue(gt.join(`
`))},bo=()=>{const gt=Ze.split(`
`).map(Jt=>Jt.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());Ue(gt.join(`
`))};async function Br(ge,gt="us"){var Jt;try{let hn=`https://itunes.apple.com/search?term=${encodeURIComponent(ge)}&country=${gt}&entity=album&limit=1`,Rr=await fetch(hn);if(!Rr.ok)throw new Error(`HTTP Error: ${Rr.status}`);let vi=await Rr.json();if(!((Jt=vi.results)!=null&&Jt.length))return console.warn("No album data found."),Le(!1),!1;let At=vi.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return At.length===2?`https://a5.mzstatic.com/us/r1000/0/${At[1].split("/").slice(0,-1).join("/")}`:""}catch(hn){return console.error("Error fetching album cover:",hn.message),""}}return F.useEffect(()=>{et(c("EDITOR_ReleaseTitle")),qe(c("EDITOR_RuntimeTitle"))},[c]),F.useEffect(()=>{const ge=async()=>{var gt;try{const Jn=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,At=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Jn}`}})).json(),bi=At.artists.map(Rn=>Rn.name).join(", ");d(At.name),S(bi);const xo=(gt=At.images[0])==null?void 0:gt.url,fn=await Tv(xo);me(fn),Ct(At.release_date);const jn=await Br(At.name+" "+bi);ye(jn||fn);const Jr=At.tracks.items.reduce((Rn,Qn)=>Rn+Qn.duration_ms,0),En=Math.floor(Jr/1e3),$t=Math.floor(En/60),xi=Math.floor($t/60),wo=En%60,yo=$t%60,Go=xi>0?`${xi}h ${yo}min ${wo}s`:`${yo}min ${wo}s`;He(Go);const dn=At.tracks.items.map((Rn,Qn)=>(Qn===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&ne(!0),`${Qn+1}. ${Rn.name}`));Ue(dn.join(`
`)),Gr(!0)}catch(Jt){console.error("Error trying to fetch album data:",Jt)}};o?(rt(o),Gr(!0)):(Vr(!1),ge())},[e]),F.useEffect(()=>{const ge=gt=>{gt.ctrlKey&&gt.key==="s"?(gt.preventDefault(),un()):gt.ctrlKey&&gt.shiftKey&&gt.key==="D"?(gt.preventDefault(),Gn()):gt.ctrlKey&&gt.key==="d"&&(gt.preventDefault(),Pn())};return window.addEventListener("keydown",ge),()=>{window.removeEventListener("keydown",ge)}},[xr,f,Pn]),v.jsx(v.Fragment,{children:Wr?v.jsxs(Ev,{ref:a,children:[v.jsx(f2.Palette,{src:ue,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:ge})=>(F.useEffect(()=>{ge&&ge.length>0&&!br&&(M(ge[0]),$(ge[1]),le(ge[2]),ae(ge[3]),ke(ge[4]),un())},[ge]),null)}),v.jsxs(Rv,{onClick:t,children:[v.jsx(Mv,{}),v.jsx(Ov,{children:c("GoBack")})]}),v.jsxs(Fv,{children:[v.jsx(S2,{ref:h,onImageReady:cn,posterData:Er,generatePoster:Yt,onTitleSizeAdjust:Qe,onTracksSizeAdjust:yn,customFont:Ie}),v.jsxs(zv,{children:[xr?v.jsx(Dv,{src:xr,ref:l,visible:Wn}):v.jsx(Kv,{ref:l}),v.jsx(Bv,{visible:zr})]}),v.jsxs(Uv,{children:[v.jsx(Bt,{animationDelay:50,children:v.jsxs(qv,{children:[v.jsx(hh,{$active:W==="information",onClick:()=>pt("information"),children:c("EDITOR_InformationTab")}),v.jsx(hh,{$active:W==="tracklist",onClick:()=>pt("tracklist"),children:c("EDITOR_TracklistTab")})]})}),W==="information"?v.jsxs(Hv,{children:[v.jsx(Bt,{animationDelay:0,children:v.jsx(si,{title:c("EDITOR_AlbumName"),value:f,onChange:ge=>d(ge.target.value)})}),v.jsx(Bt,{animationDelay:50,children:v.jsx(si,{title:c("EDITOR_ArtistName"),value:x,onChange:ge=>S(ge.target.value)})}),v.jsx(Bt,{animationDelay:100,children:v.jsx(si,{title:c("EDITOR_TitleSize"),value:p,onChange:sn})}),v.jsx(Bt,{animationDelay:150,children:v.jsx(si,{title:c("EDITOR_ArtistSize"),value:C,onChange:ge=>k(ge.target.value)})}),v.jsx(Bt,{animationDelay:200,children:v.jsx(si,{title:c("EDITOR_TracksSize"),value:y,onChange:wn})}),v.jsx(Bt,{animationDelay:250,children:v.jsx(si,{title:c("EDITOR_MarginTop"),value:P,onChange:ge=>R(ge.target.value)})}),v.jsx(Bt,{animationDelay:300,children:v.jsx(si,{title:c("EDITOR_MarginSide"),value:V,onChange:ge=>Q(ge.target.value)})}),v.jsx(Bt,{animationDelay:350,children:v.jsx(si,{title:c("EDITOR_MarginCover"),value:X,onChange:ge=>J(ge.target.value)})}),v.jsx(Bt,{animationDelay:375,children:v.jsx(si,{title:c("EDITOR_MarginBackground"),value:D,onChange:ge=>ee(ge.target.value)})}),v.jsx(Bt,{animationDelay:400,children:v.jsx(qu,{title:bt,value:nt,onChangeTitle:ge=>et(ge.target.value),onChangeDate:ge=>Ct(ge.target.value)})}),v.jsx(Bt,{animationDelay:450,children:v.jsx(qu,{title:at,value:Ke,onChangeTitle:ge=>qe(ge.target.value),onChangeDate:ge=>He(ge.target.value)})}),v.jsx(Bt,{animationDelay:500,children:v.jsx(xa,{title:c("EDITOR_BackgroundColor"),value:N,onClick:ge=>Yn(ge,"backgroundColor")})}),v.jsx(Bt,{animationDelay:550,children:v.jsx(xa,{title:c("EDITOR_TextColor"),value:Y,onClick:ge=>Yn(ge,"textColor")})}),v.jsx(Bt,{animationDelay:600,children:v.jsx(xa,{title:`${c("EDITOR_Color")} 1`,value:oe,onClick:ge=>Yn(ge,"color1")})}),v.jsx(Bt,{animationDelay:650,children:v.jsx(xa,{title:`${c("EDITOR_Color")} 2`,value:fe,onClick:ge=>Yn(ge,"color2")})}),v.jsx(Bt,{animationDelay:700,children:v.jsx(xa,{title:`${c("EDITOR_Color")} 3`,value:pe,onClick:ge=>Yn(ge,"color3")})}),v.jsx(Bt,{animationDelay:750,children:v.jsx(ms,{title:c("EDITOR_Watermark"),value:_e,onChange:ge=>T(ge),text:c("EDITOR_WatermarkText")})}),v.jsx(Bt,{animationDelay:800,children:v.jsx(ms,{title:c("EDITOR_Fade"),value:H,onChange:ge=>G(ge),text:c("EDITOR_FadeText")})}),v.jsx(Bt,{animationDelay:850,children:v.jsx(ms,{title:c("EDITOR_Uncompressed"),value:Ye,onChange:ge=>Le(ge),text:c("EDITOR_UncompressedText")})}),v.jsx(Bt,{animationDelay:900,children:v.jsx(ms,{title:c("EDITOR_Tracklist"),value:Z,onChange:ge=>ne(ge),text:c("EDITOR_TracklistText")})}),v.jsx(Bt,{animationDelay:950,children:v.jsx(Vg,{title:c("EDITOR_Cover"),onChange:mi,text:Ve})}),v.jsx(Bt,{animationDelay:1e3,children:v.jsx(Xg,{title:c("EDITOR_Font"),text:(je==null?void 0:je.name)||c("EDITOR_DefaultFont"),onChange:ve})})]}):v.jsxs($v,{children:[v.jsx(Wv,{value:Ze,onChange:ge=>Ue(ge.target.value),placeholder:c("EDITOR_TracklistPlaceholder"),"data-lenis-prevent":!0}),v.jsxs(Vv,{children:[v.jsx(fh,{onClick:vo,children:c("EDITOR_RemoveParentheses")}),v.jsx(fh,{onClick:bo,children:c("EDITOR_RemoveBrackets")})]})]}),v.jsx(Bt,{animationDelay:1050,children:v.jsxs(Gv,{children:[v.jsxs(_a,{onClick:Pn,children:[v.jsx(Jv,{}),v.jsx(Ca,{children:"PNG"})]}),v.jsxs(_a,{onClick:Gn,children:[v.jsx(Yv,{}),v.jsx(Ca,{children:"PDF"})]}),v.jsxs(_a,{apply:!0,onClick:un,children:[v.jsx(Qv,{$spinning:Yr}),v.jsx(Ca,{children:c("EDITOR_Apply")})]}),v.jsxs(_a,{onClick:()=>M3(Er),children:[v.jsx(dh,{}),v.jsx(Ca,{children:"Exportar JSON"})]}),v.jsxs(_a,{onClick:()=>O3(rt),children:[v.jsx(dh,{}),v.jsx(Ca,{children:"Importar JSON"})]})]})}),v.jsx(Bt,{animationDelay:1100,children:v.jsxs(Xv,{children:["Ctrl+S: ",c("EDITOR_Apply")," • Ctrl+D: PNG • Ctrl+Shift+D: PDF"]})})]})]}),jt&&De&&wt&&sf.createPortal(v.jsx(Pg,{DefaultColor:wt==="backgroundColor"?N:wt==="textColor"?Y:wt==="color1"?oe:wt==="color2"?fe:pe,image:ue,predefinedColors:[oe,fe,pe,N,Y],onDone:ge=>{switch(wt){case"backgroundColor":M(ge);break;case"textColor":$(ge);break;case"color1":le(ge);break;case"color2":ae(ge);break;case"color3":ke(ge);break}gi()},position:De,onClose:gi}),document.body)]}):v.jsx(h2,{})})});Hc.displayName="PosterEditor";const Zv=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},e8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},t8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const o=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),v.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},r8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},n8=q.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,i8=q(Xh)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,o8=q.h3`
  font-size: 1.3em;
  font-weight: bold;
`,$c=hr`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,a8=q.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${$c} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,As=q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${$c} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,ks=q.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${$c} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,s8=q.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,l8=q.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function c8({onSelectModel:e,onBack:t}){const{t:r}=fr(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},o={marginCover:160,useFade:!1,marginTop:20},a={marginCover:-1100,marginBackground:-1200,useFade:!1},c={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function l(f,d){Zd("select_model","ModelSelector",f),e&&e(f,d)}const h=[0,.08,.16,.24];return v.jsxs(v.Fragment,{children:[v.jsxs(n8,{onClick:t,children:[v.jsx(i8,{}),v.jsx(o8,{children:r("GoBack")})]}),v.jsx(s8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),v.jsx(l8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),v.jsxs(a8,{children:[v.jsxs(As,{delay:h[0],onClick:()=>l("standart",c),children:[v.jsx(Zv,{width:200}),v.jsx(ks,{delay:h[0],children:"Standard"})]}),v.jsxs(As,{delay:h[1],onClick:()=>l("frame",o),children:[v.jsx(r8,{width:200}),v.jsx(ks,{delay:h[1],children:"Frame"})]}),v.jsxs(As,{delay:h[2],onClick:()=>l("basic",n),children:[v.jsx(e8,{width:200}),v.jsx(ks,{delay:h[2],children:"Basic"})]}),v.jsxs(As,{delay:h[3],onClick:()=>l("fullcover",a),children:[v.jsx(t8,{width:200}),v.jsx(ks,{delay:h[3],children:"Full Cover"})]})]})]})}const u8=q.div`
    width: 100%;
`,h8=q.div`
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
`,f8=q(J5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,d8=q(o5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,p8=q.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,m8=q.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function g8({onSearch:e,value:t=""}){const{t:r}=fr(),[n,o]=F.useState(t);F.useEffect(()=>{o(t)},[t]);const a=h=>{h.key==="Enter"&&(e(n),n.trim()&&Du(n.trim()))},c=h=>{o(h.target.value)},l=()=>{e(n),n.trim()&&Du(n.trim())};return v.jsx(u8,{children:v.jsxs(h8,{role:"search","aria-label":"Album search for poster creation",children:[v.jsx(f8,{"aria-hidden":"true"}),v.jsx(p8,{}),v.jsx(m8,{placeholder:r("SearchPlaceholder"),value:n,onChange:c,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),v.jsx(d8,{onClick:l,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const v8=q.div`
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

`,b8=q.img`
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
`,x8=q.h3`
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
`,w8=q.p`
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
`,y8=q.div`
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
`;function S8({title:e,artist:t,cover:r,id:n,onClick:o,animationDelay:a=0}){const[c,l]=F.useState(!1),[h,f]=F.useState(!1),[d,x]=F.useState(!1);F.useEffect(()=>{if(d)l(!0);else{const p=setTimeout(()=>{l(!0),x(!0)},a);return()=>clearTimeout(p)}},[a,d]);const S=()=>{f(!0)};return v.jsxs(v8,{onClick:()=>o(n),$visible:c,children:[v.jsx(b8,{src:r,$loaded:h,onLoad:S,loading:"lazy"}),v.jsxs(y8,{children:[v.jsx(x8,{children:e}),v.jsx(w8,{children:t})]})]})}const _8=q.div`
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
`,C8=q.button`
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
`,A8=q.div`
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
`;function ph({query:e,onclick:t}){const{t:r}=fr(),[n,o]=F.useState([]),[a,c]=F.useState(""),[l,h]=F.useState(0),[f,d]=F.useState(!0),[x,S]=F.useState(!1),[p,w]=F.useState(!1),[C,k]=F.useState(0),[y,E]=F.useState(!1),P=20;F.useEffect(()=>{(async()=>{const D=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();c(D.access_token)})()},[]),F.useEffect(()=>{o([]),h(0),d(!0),k(0),E(!1)},[e]),F.useEffect(()=>{const V=async(Q=!1)=>{if(a){Q?w(!0):S(!0);try{let X;const J=Q?l:0;if(e?X=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${J}`,{headers:{Authorization:`Bearer ${a}`}}):X=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${J}&limit=${P}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!X.ok){const le=await X.text();throw new Error(`Erro na API: ${le}`)}const D=await X.json(),N=D.albums.items.filter(le=>le!=null).map(le=>{var fe,ae;return{id:le.id,title:le.name,artist:(fe=le.artists)==null?void 0:fe.map(pe=>pe.name).join(", "),cover:(ae=le.images[0])==null?void 0:ae.url}});Q?(E(!1),k(n.length),o(le=>[...le,...N])):(E(!1),k(0),o(N));const M=(N.length-1)*80;setTimeout(()=>{E(!0)},M+800);const $=D.albums.total,oe=Q?n.length+N.length:N.length;d(oe<$&&N.length===P)}catch(X){console.error(X)}finally{S(!1),w(!1)}}};a&&(n.length===0||l===0)&&V(!1)},[e,a]);const R=async()=>{if(!a||!f||p)return;const V=l+P;h(V);try{w(!0);let Q;if(e?Q=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${V}`,{headers:{Authorization:`Bearer ${a}`}}):Q=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${V}&limit=${P}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!Q.ok){const $=await Q.text();throw new Error(`Erro na API: ${$}`)}const X=await Q.json(),D=X.albums.items.filter($=>$!=null).map($=>{var oe,le;return{id:$.id,title:$.name,artist:(oe=$.artists)==null?void 0:oe.map(fe=>fe.name).join(", "),cover:(le=$.images[0])==null?void 0:le.url}});E(!1),k(n.length),o($=>[...$,...D]);const ee=(D.length-1)*80;setTimeout(()=>{E(!0)},ee+800);const M=X.albums.total,Y=n.length+D.length;d(Y<M&&D.length===P)}catch(Q){console.error(Q)}finally{w(!1)}};return v.jsx(v.Fragment,{children:x&&n.length===0?v.jsx(h2,{}):v.jsxs(v.Fragment,{children:[v.jsx(_8,{children:n.map((V,Q)=>{const X=Q>=C?Q-C:Q;return v.jsx(S8,{onClick:()=>t(V.id),cover:V.cover,title:V.title,artist:V.artist,id:V.id,animationDelay:X*80},V.id)})}),f&&v.jsx(A8,{$visible:y,children:v.jsx(C8,{onClick:R,disabled:p,children:r(p?"LoadingMore":"LoadMore")})})]})})}const k8=({onBack:e})=>{const[t,r]=F.useState(""),[n,o]=F.useState(null),[a,c]=F.useState(!1),[l,h]=F.useState(null),[f,d]=F.useState(null),x=F.useRef(null);F.useEffect(()=>{a&&n&&x.current&&setTimeout(()=>{x.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[a,n]);function S(C){o(C),c(!0),h(null),d(null)}function p(){o(null),c(!1),h(null),d(null),e&&e()}const w=C=>{r(C)};return n&&l&&f?v.jsx(Hc,{albumID:n,handleClickBack:p,model:l,modelParams:f,source:"search_creation"}):n&&a?v.jsx("div",{ref:x,children:v.jsx(c8,{onSelectModel:(C,k)=>{h(C),d(k),c(!1)},onBack:p})}):v.jsxs(v.Fragment,{children:[v.jsx(g8,{onSearch:w,value:t}),t.trim()?v.jsx(ph,{query:t,onclick:S}):v.jsx("div",{children:v.jsx(ph,{onclick:S})})]})},so=q.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function L8({loadingComplete:e}){const{t}=fr(),[r,n]=F.useState(null),o=F.useRef(null),[a,c]=Bi(),[l,h]=Bi(),[f,d]=Bi(),[x,S]=Bi(),[p,w]=Bi(),[C,k]=Bi(),[y,E]=Bi(),P=V=>{n5(V.albumName||"Unknown Album",V.artistsName||"Unknown Artist",V.albumID||"","album_collection"),n(V),setTimeout(()=>{if(o.current){const Q=o.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:Q,behavior:"smooth"})}},100)},R=()=>{n(null)};return v.jsxs(v.Fragment,{children:[v.jsx(sm,{showAnimation:e,onRecreate:P}),v.jsx(so,{ref:a,$isVisible:c,children:v.jsx(Oa,{text:t("anchorArt"),type:1})}),v.jsx(so,{ref:l,$isVisible:h,children:v.jsx(kc,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),v.jsx(so,{ref:f,$isVisible:d,children:r?v.jsx(Hc,{ref:o,albumID:r.albumID,initialPosterJson:r,handleClickBack:R}):v.jsx(k8,{})}),v.jsx(so,{ref:x,$isVisible:S,children:v.jsx(Mm,{})}),v.jsx(so,{ref:p,$isVisible:w,children:v.jsx(Im,{})}),v.jsx(so,{ref:C,$isVisible:k,children:v.jsx(_m,{})}),v.jsx(so,{ref:y,$isVisible:E,children:v.jsx(Gm,{})})]})}function p0(e){return Et({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const mh=q.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,gh=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,vh=q.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,N8=q.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,I8=q.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,bh=q.button`
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
`,xh=q.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,T8=q(n2)`
    width: 20px;
    height: 20px;
`,P8=q(p0)`
    width: 20px;
    height: 20px;
`,j8=q.div`
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
`,wh=q.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,E8=q.p`
    color: var(--textColor);
`;q.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;const R8=q.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,M8=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,O8=q.div`
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
`,F8=q.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function D8(){const{t:e}=fr(),t=po(),[r]=Fd(),{user:n,loading:o,loginWithGoogle:a,loginWithSpotify:c}=Ma();if(F.useEffect(()=>{if(!o){if(n){t("/dashboard");return}r.get("login")==="success"&&t("/dashboard")}},[n,o,t,r]),o)return v.jsxs(mh,{children:[v.jsx(Fs,{iconColor:"var(--AccentColor)"}),v.jsxs(gh,{children:[v.jsx(fi,{fill:"var(--textColor)",width:"100px"}),v.jsx(vh,{children:e("Loading")})]})]});const l=()=>{t("/")};return v.jsxs(mh,{children:[v.jsx(Fs,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),v.jsx(gh,{children:v.jsxs(R8,{children:[v.jsx(O8,{onClick:l,children:v.jsx(fi,{fill:"var(--textColor)",width:"25vw"})}),v.jsxs(M8,{children:[v.jsx(F8,{children:v.jsx(fi,{fill:"var(--textColor)",width:"90px"})}),v.jsx(vh,{children:e("LOGIN_Welcome")}),v.jsx(N8,{children:e("LOGIN_JoinCommunity")}),v.jsxs(I8,{children:[v.jsxs(bh,{onClick:a,children:[v.jsx(T8,{}),v.jsx(xh,{children:e("LOGIN_GoogleSignIn")})]}),v.jsxs(j8,{children:[v.jsx(wh,{}),v.jsx(E8,{children:e("LOGIN_Or")}),v.jsx(wh,{})]}),v.jsxs(bh,{onClick:c,children:[v.jsx(P8,{}),v.jsx(xh,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function z8(e){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const B8=hr`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,U8=hr`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,q8=hr`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,H8=hr`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,$8=q.div`
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
    animation: ${e=>e.isClosing?H8:q8} 0.3s ease-in-out forwards;
`,V8=q.div`
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
    animation: ${e=>e.isClosing?U8:B8} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,W8=q.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,G8=q.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Y8=q(Zh)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,J8=q.div`
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
`,Q8=q.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,K8=q.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,X8=q.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,yh=q.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,Sh=q.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,_h=q.input`
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
`,ec=q.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`,Z8=q.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,eb=q.button`
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
`,tb=q.button`
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
`,rb=q.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function nb({isOpen:e,onClose:t,onProfileUpdate:r}){const{user:n,updateUser:o}=Ma(),{t:a}=fr(),[c,l]=F.useState({name:"",username:""}),[h,f]=F.useState({}),[d,x]=F.useState(!1),[S,p]=F.useState(""),[w,C]=F.useState(!1);F.useEffect(()=>{n&&l({name:n.name||"",username:n.username||""})},[n]);const k=()=>{const R={};return c.name.trim()||(R.name=a("NameIsRequired")),c.username.trim()?c.username.length<3?R.username=a("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(R.username=a("UsernameFormat")):R.username=a("UsernameIsRequired"),f(R),Object.keys(R).length===0},y=R=>{const{name:V,value:Q}=R.target;l(X=>({...X,[V]:Q})),h[V]&&f(X=>({...X,[V]:""})),S&&p("")},E=async R=>{var V,Q,X,J;if(R.preventDefault(),!!k()){x(!0),p("");try{await Bn.updateUserProfile({name:c.name.trim(),username:c.username.trim()}),o({...n,name:c.name.trim(),username:c.username.trim()}),p(a("ProfileUpdatedSuccessfully")),r&&r(),setTimeout(()=>{P()},1500)}catch(D){console.error("Profile update failed:",D),(V=D.message)!=null&&V.includes("409")||(Q=D.message)!=null&&Q.includes("taken")?f({username:a("UsernameTaken")}):(X=D.message)!=null&&X.includes("400")||(J=D.message)!=null&&J.includes("invalid")?f({username:a("InvalidUsernameFormat")}):f({general:a("FailedToUpdateProfile")})}finally{x(!1)}}},P=()=>{C(!0),setTimeout(()=>{C(!1),t(),f({}),p("")},300)};return e?(document.body.style.overflow="hidden",v.jsx($8,{isClosing:w,children:v.jsxs(V8,{isClosing:w,children:[v.jsxs(W8,{children:[v.jsx(Q8,{children:v.jsx(fi,{width:25,height:25,fill:"var(--textColor)"})}),v.jsx(G8,{children:a("EditProfile")}),v.jsx(J8,{onClick:P,children:v.jsx(Y8,{})})]}),v.jsx(K8,{}),v.jsxs(X8,{onSubmit:E,children:[v.jsxs(yh,{children:[v.jsx(Sh,{htmlFor:"name",children:a("Name")}),v.jsx(_h,{type:"text",id:"name",name:"name",value:c.name,onChange:y,placeholder:a("EnterYourName"),disabled:d}),h.name&&v.jsx(ec,{children:h.name})]}),v.jsxs(yh,{children:[v.jsx(Sh,{htmlFor:"username",children:a("Username")}),v.jsx(_h,{type:"text",id:"username",name:"username",value:c.username,onChange:y,placeholder:a("EnterYourUsername"),disabled:d}),h.username&&v.jsx(ec,{children:h.username})]}),h.general&&v.jsx(ec,{children:h.general}),S&&v.jsx(rb,{children:S}),v.jsxs(Z8,{children:[v.jsx(eb,{type:"button",onClick:P,disabled:d,children:a("Cancel")}),v.jsx(tb,{type:"submit",disabled:d,children:a(d?"Saving":"SaveChanges")})]})]})]})})):null}hr`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;hr`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5px);
  }
`;q.div`
  display: none;
`;const m0=q.div`
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
`,ib=q.div`
  position: relative;
  display: inline-block;
  &:hover ${m0} {
    opacity: 0.9;
  }
`;function Ch({text:e,children:t,delay:r=0}){const[n,o]=F.useState(!1),[a,c]=F.useState({top:0,left:0}),l=f=>{const d=f.currentTarget.getBoundingClientRect();c({top:d.top+d.height/2-17,left:d.right+15}),o(!0)},h=()=>{o(!1)};return v.jsxs(ib,{onMouseEnter:l,onMouseLeave:h,children:[v.jsx(m0,{isVisible:n,style:{top:a.top,left:a.left},children:e}),t]})}const ob=q.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,ab=q.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,sb=q.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,lb=q.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,cb=q.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,ub=q.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`,Ah=q.button`
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
`,kh=q.button`
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
`;q.p`
    color: var(--textColor);
    font-size: 1.2em;
`;const hb=q(n2)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,fb=q(p0)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,Lh=q.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,db=q.div`
    display: flex;
    align-items: center;
    width: 100%;
`,pb=q(z8)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,mb=q.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,gb=q.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,vb=q.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function bb(){const e=po(),{user:t,loading:r,logout:n,isAuthenticated:o}=Ma(),[a,c]=F.useState(null),[l,h]=F.useState(!1),{t:f}=fr();F.useEffect(()=>{if(!r&&!o){e("/login");return}o&&t&&d()},[o,r,e,t]);const d=async()=>{try{const C=await Bn.getUserProfile();c(C.user)}catch(C){console.error("Failed to fetch user profile:",C)}},x=async()=>{await n(),e("/login")},S=()=>{h(!0)},p=()=>{h(!1)},w=()=>{d()};return r?v.jsx(Ac,{isVisible:!0,initialFade:!0}):t?v.jsxs(ob,{children:[v.jsx(Fs,{iconColor:"var(--AccentColor)"}),v.jsxs(ab,{children:[(a==null?void 0:a.avatar)&&v.jsx(lb,{src:a.avatar,alt:a.name}),v.jsxs(sb,{children:[v.jsxs(db,{children:[v.jsx(cb,{children:(a==null?void 0:a.name)||t.name}),(a==null?void 0:a.hasGoogle)&&v.jsx(Ch,{text:f("ConnectedToGoogle"),delay:200,children:v.jsx(Lh,{children:v.jsx(hb,{})})}),(a==null?void 0:a.hasSpotify)&&v.jsx(Ch,{text:f("ConnectedToSpotify"),delay:200,children:v.jsx(Lh,{children:v.jsx(fb,{})})}),v.jsxs(gb,{children:[v.jsx(kh,{onClick:S,children:f("EditProfile")}),v.jsx(Ah,{onClick:x,children:f("Logout")})]})]}),v.jsxs(ub,{children:["@",(a==null?void 0:a.username)||t.username]})]})]}),v.jsxs(vb,{children:[v.jsx(kh,{onClick:S,children:f("EditProfile")}),v.jsx(Ah,{onClick:x,children:f("Logout")})]}),v.jsx(pb,{}),v.jsx(mb,{children:f("NoActivityYet")}),v.jsx(nb,{isOpen:l,onClose:p,onProfileUpdate:w})]}):null}const xb=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:o=!1,onClick:a})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[v.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),v.jsx("path",{fill:n,style:{animation:o?"pulse 2s infinite":"none",cursor:o?"pointer":"default"},onClick:a,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),g0=document.createElement("style");g0.textContent=`
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
`;document.head.appendChild(g0);const wb="/assets/kanye.BMPu-Gq3.png",yb="/assets/runaway.DjODmQSR.mp3",Sb=()=>{const e=po(),{t}=fr(),[r,n]=F.useState(0),o=F.useRef(null),[a,c]=F.useState(!1),l=()=>{n(r+1),console.log(r)},h=()=>{o.current&&(o.current.loop=!0,o.current.paused?(o.current.play(),c(!0)):(o.current.pause(),c(!1)))};return v.jsxs(_b,{playing:a,children:[v.jsx(xb,{width:"150px",height:"150px",fillHeart:a?"#edcd6b":"var(--textColor)",fillQuestion:a?"#edcd6b":"var(--textColor)",pulse:!a,onClick:l}),v.jsxs(Nb,{children:[v.jsx(tc,{playing:a,active:r>=1}),v.jsx(tc,{playing:a,active:r>=2}),v.jsx(tc,{playing:a,active:r>=3})]}),v.jsx(Cb,{children:t("errorTitle")}),v.jsx(Ab,{children:t("errorMessage")}),v.jsx(kb,{playing:a,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&v.jsxs(v.Fragment,{children:[v.jsx(Lb,{src:wb,alt:"Kanye",onClick:h}),v.jsx("audio",{ref:o,src:yb})]})]})},_b=q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,Cb=q.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,Ab=q.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,kb=q.button`
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
`,Lb=q.img`
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
`,Nb=q.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,tc=q.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Ib=({children:e})=>{const t=po(),{isAuthenticated:r,loading:n}=Ma();return F.useEffect(()=>{!n&&!r&&t("/login")},[r,n,t]),n?v.jsx("div",{children:"Loading..."}):r?e:null},Tb=()=>(F.useEffect(()=>{Xd()},[]),null),Nh=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},Vc=()=>"https://posterfy.space"+"/",Pb=e=>{const t=Vc(),r=Nh(e),n=Nh(t),o=e.includes("://www."),a=e.startsWith("http://");return o||a||r!==n},jb=()=>{const e=window.location.href,t=Vc(),r=[];return Pb(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},Eb=()=>(F.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const o=document.querySelector('meta[name="description"]');(!o||o.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const a=jb();a.isValid||a.issues.forEach(h=>{r.push(`${h.type}: ${h.message}`)});const c=document.querySelector('meta[name="robots"]');return c&&c.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),Rb=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(F.useEffect(()=>{const o="https://posterfy.space",a=Vc(),c=o+"/albuns.png";document.title=e;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",t);const h=document.querySelector('meta[name="keywords"]');h&&h.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",a):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",a),document.head.appendChild(f));const d=document.querySelector('meta[property="og:title"]');d&&d.setAttribute("content",e);const x=document.querySelector('meta[property="og:description"]');x&&x.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",c);const p=document.querySelector('meta[property="og:url"]');p&&p.setAttribute("content",a);const w=document.querySelector('meta[name="twitter:title"]');w&&w.setAttribute("content",e);const C=document.querySelector('meta[name="twitter:description"]');C&&C.setAttribute("content",t);const k=document.querySelector('meta[name="twitter:image"]');k&&k.setAttribute("content",c);const y={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:o+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},E=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');E&&E.remove();const P=document.createElement("script");P.type="application/ld+json",P.id="dynamic-structured-data",P.innerHTML=JSON.stringify(y),document.head.appendChild(P)},[e,t,r]),null);var Mb="1.3.14";function v0(e,t,r){return Math.max(e,Math.min(t,r))}function Ob(e,t,r){return(1-r)*e+r*t}function Fb(e,t,r,n){return Ob(e,t,1-Math.exp(-r*n))}function Db(e,t){return(e%t+t)%t}var zb=class{constructor(){Te(this,"isRunning",!1);Te(this,"value",0);Te(this,"from",0);Te(this,"to",0);Te(this,"currentTime",0);Te(this,"lerp");Te(this,"duration");Te(this,"easing");Te(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=v0(0,this.currentTime/this.duration,1);t=n>=1;const o=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=Fb(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:o,onStart:a,onUpdate:c}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function Bb(e,t){let r;return function(...n){let o=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(o,n)},t)}}var Ub=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Te(this,"width",0);Te(this,"height",0);Te(this,"scrollHeight",0);Te(this,"scrollWidth",0);Te(this,"debouncedResize");Te(this,"wrapperResizeObserver");Te(this,"contentResizeObserver");Te(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Te(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Te(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=Bb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},b0=class{constructor(){Te(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let o=0,a=r.length;o<a;o++)(n=r[o])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(o=>t!==o)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Ih=100/6,Di={passive:!1},qb=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Te(this,"touchStart",{x:0,y:0});Te(this,"lastDelta",{x:0,y:0});Te(this,"window",{width:0,height:0});Te(this,"emitter",new b0);Te(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Te(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});Te(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Te(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const o=n===1?Ih:n===2?this.window.width:1,a=n===1?Ih:n===2?this.window.height:1;t*=o,r*=a,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Te(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Di),this.element.addEventListener("touchstart",this.onTouchStart,Di),this.element.addEventListener("touchmove",this.onTouchMove,Di),this.element.addEventListener("touchend",this.onTouchEnd,Di)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Di),this.element.removeEventListener("touchstart",this.onTouchStart,Di),this.element.removeEventListener("touchmove",this.onTouchMove,Di),this.element.removeEventListener("touchend",this.onTouchEnd,Di)}},Th=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Hb=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:l,easing:h,lerp:f=.1,infinite:d=!1,orientation:x="vertical",gestureOrientation:S=x==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:w=1,autoResize:C=!0,prevent:k,virtualScroll:y,overscroll:E=!0,autoRaf:P=!1,anchors:R=!1,autoToggle:V=!1,allowNestedScroll:Q=!1,__experimental__naiveDimensions:X=!1}={}){Te(this,"_isScrolling",!1);Te(this,"_isStopped",!1);Te(this,"_isLocked",!1);Te(this,"_preventNextNativeScrollEvent",!1);Te(this,"_resetVelocityTimeout",null);Te(this,"__rafID",null);Te(this,"isTouching");Te(this,"time",0);Te(this,"userData",{});Te(this,"lastVelocity",0);Te(this,"velocity",0);Te(this,"direction",0);Te(this,"options");Te(this,"targetScroll");Te(this,"animatedScroll");Te(this,"animate",new zb);Te(this,"emitter",new b0);Te(this,"dimensions");Te(this,"virtualScroll");Te(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Te(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Te(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Te(this,"onClick",e=>{const r=e.composedPath().find(n=>{var o;return n instanceof HTMLAnchorElement&&((o=n.getAttribute("href"))==null?void 0:o.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.split("#")[1]}`;this.scrollTo(a,o)}}});Te(this,"onPointerDown",e=>{e.button===1&&this.reset()});Te(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const o=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const c=t===0&&r===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(c||h)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const d=this.options.prevent;if(f.find(k=>{var y,E,P;return k instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(k))||((y=k.hasAttribute)==null?void 0:y.call(k,"data-lenis-prevent"))||o&&((E=k.hasAttribute)==null?void 0:E.call(k,"data-lenis-prevent-touch"))||a&&((P=k.hasAttribute)==null?void 0:P.call(k,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(k,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const p=o&&this.options.syncTouch,C=o&&n.type==="touchend";C&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...p?{lerp:C?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Te(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Te(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Mb,(!e||e===document.documentElement)&&(e=window),typeof l=="number"&&typeof h!="function"?h=Th:typeof h=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:l,easing:h,lerp:f,infinite:d,gestureOrientation:S,orientation:x,touchMultiplier:p,wheelMultiplier:w,autoResize:C,prevent:k,virtualScroll:y,overscroll:E,autoRaf:P,anchors:R,autoToggle:V,allowNestedScroll:Q,__experimental__naiveDimensions:X},this.dimensions=new Ub(e,t,{autoResize:C}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new qb(r,{touchMultiplier:p,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:o=this.options.duration,easing:a=this.options.easing,lerp:c=this.options.lerp,onStart:l,onComplete:h,force:f=!1,programmatic:d=!0,userData:x}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?w.left:w.top}const p=S.getBoundingClientRect();e=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(d){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=v0(0,e,this.limit);if(e===this.targetScroll){l==null||l(this),h==null||h(this);return}if(this.userData=x??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}d||(this.targetScroll=e),typeof o=="number"&&typeof a!="function"?a=Th:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:a,lerp:c,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(S,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),d&&(this.targetScroll=S),p||this.emit(),p&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),o=e._lenis??(e._lenis={});let a,c,l,h,f,d,x,S;const p=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();const V=window.getComputedStyle(e);o.computedStyle=V;const Q=V.overflowX,X=V.overflowY;if(a=["auto","overlay","scroll"].includes(Q),c=["auto","overlay","scroll"].includes(X),o.hasOverflowX=a,o.hasOverflowY=c,!a&&!c||p==="vertical"&&!c||p==="horizontal"&&!a)return!1;f=e.scrollWidth,d=e.scrollHeight,x=e.clientWidth,S=e.clientHeight,l=f>x,h=d>S,o.isScrollableX=l,o.isScrollableY=h,o.scrollWidth=f,o.scrollHeight=d,o.clientWidth=x,o.clientHeight=S}else l=o.isScrollableX,h=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,f=o.scrollWidth,d=o.scrollHeight,x=o.clientWidth,S=o.clientHeight;if(!a&&!c||!l&&!h||p==="vertical"&&(!c||!h)||p==="horizontal"&&(!a||!l))return!1;let w;if(p==="horizontal")w="x";else if(p==="vertical")w="y";else{const V=t!==0,Q=r!==0;V&&a&&l&&(w="x"),Q&&c&&h&&(w="y")}if(!w)return!1;let C,k,y,E,P;if(w==="x")C=e.scrollLeft,k=f-x,y=t,E=a,P=l;else if(w==="y")C=e.scrollTop,k=d-S,y=r,E=c,P=h;else return!1;return(y>0?C<k:C>0)&&E&&P}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Db(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function $b(){const{pathname:e}=pi(),[t,r]=F.useState(!1),[n,o]=F.useState(!1);return F.useEffect(()=>{r(!0),o(!0),window.scrollTo(0,0);const a=setTimeout(()=>{r(!1),setTimeout(()=>{o(!1)},300)},2e3);return()=>clearTimeout(a)},[e]),n?v.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:v.jsx(Ac,{isVisible:!0})}):null}function Vb(){const[e,t]=F.useState(!0),[r,n]=F.useState(!1);return i5(),F.useEffect(()=>{const o=new Hb({duration:1.2,easing:c=>Math.min(1,1.001-Math.pow(2,-10*c)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function a(c){o.raf(c),requestAnimationFrame(a)}return requestAnimationFrame(a),()=>{o.destroy()}},[]),F.useEffect(()=>Vd(),[]),F.useEffect(()=>{const o=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(o)},[]),F.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),v.jsx(Wd,{children:v.jsx(C5,{children:v.jsxs(N5,{children:[v.jsx(Rb,{}),v.jsx(Eb,{}),v.jsx(Tb,{}),v.jsxs(jd,{children:[v.jsx($b,{}),v.jsxs(ld,{children:[v.jsx(zi,{path:"/",element:v.jsx(Tl,{showNavbar:!0,showFooter:!0}),children:v.jsx(zi,{index:!0,element:v.jsx(L8,{loadingComplete:r})})}),v.jsx(zi,{path:"/login",element:v.jsx(Tl,{showNavbar:!1,showFooter:!1}),children:v.jsx(zi,{index:!0,element:v.jsx(D8,{})})}),v.jsx(zi,{path:"/dashboard",element:v.jsx(Tl,{showNavbar:!0,showFooter:!0}),children:v.jsx(zi,{index:!0,element:v.jsx(Ib,{children:v.jsx(bb,{})})})}),v.jsx(zi,{path:"*",element:v.jsx(Sb,{})})]})]}),v.jsx(Ac,{isVisible:e})]})})})}lf.use(cf).init({resources:{en:{translation:{heroDescription:"Transform your music passion into visual art by creating custom posters for your favorite albums.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with love by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",FAQ_ExportHighRes_Question:"How can I export the poster in high resolution?",FAQ_ExportHighRes_Answer:"After customizing, you can export the poster in high resolution as PNG or PDF by clicking the buttons next to 'Apply'.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",NoActivityYet:"No activity yet",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving...",FooterDescription:"Create stunning album posters from your favorite music. Free, fast, and beautiful.",ViewGitHub:"View on GitHub",JoinDiscord:"Join Discord",SwitchTo:"Switch to",FooterPrivacy:"Privacy Policy",FooterTerms:"Terms of Service",FooterCookies:"Cookies"}},pt:{translation:{heroDescription:"Transforme sua paixão por música em arte visual criando pôsteres personalizados dos seus álbuns favoritos.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com amor por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",FAQ_ExportHighRes_Question:"Como posso exportar o pôster em alta resolução?",FAQ_ExportHighRes_Answer:"Após personalizar, é possível exportar o pôster em alta resolução em PNG ou em PDF, clicando nos botões ao lado de 'Aplicar'.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando...",FooterDescription:"Crie pôsteres incríveis de álbuns da sua música favorita. Grátis, rápido e bonito.",ViewGitHub:"Ver no GitHub",JoinDiscord:"Entrar no Discord",SwitchTo:"Mudar para",FooterPrivacy:"Política de Privacidade",FooterTerms:"Termos de Serviço",FooterCookies:"Cookies"}},es:{translation:{heroDescription:"Transforma tu pasión por la música en arte visual creando pósters personalizados de tus álbumes favoritos.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con amor por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",FAQ_ExportHighRes_Question:"¿Cómo puedo exportar el póster en alta resolución?",FAQ_ExportHighRes_Answer:"Después de personalizar, puedes exportar el póster en alta resolución en PNG o PDF haciendo clic en los botones junto a 'Aplicar'.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando...",FooterDescription:"Crea increíbles pósters de álbumes de tu música favorita. Gratis, rápido y hermoso.",ViewGitHub:"Ver en GitHub",JoinDiscord:"Unirse a Discord",SwitchTo:"Cambiar a",FooterPrivacy:"Política de Privacidad",FooterTerms:"Términos de Servicio",FooterCookies:"Cookies"}},zh:{translation:{heroDescription:"将您的音乐热情转化为视觉艺术，为您最喜爱的专辑制作定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用爱制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",FAQ_ExportHighRes_Question:"如何导出高分辨率海报？",FAQ_ExportHighRes_Answer:"自定义后，您可以通过点击'应用'旁边的按钮以PNG或PDF格式导出高分辨率海报。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Eh(document.getElementById("root")).render(v.jsx(F.StrictMode,{children:v.jsx(Vb,{})}));export{Pt as _};
