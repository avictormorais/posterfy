const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es-B5zZyWSK.js","assets/vendor-BGNHhJSV.js","assets/ui-CtU6oe7C.js","assets/i18n-BCWVDsfP.js"])))=>i.map(i=>d[i]);
var cf=Object.defineProperty;var uf=(e,t,r)=>t in e?cf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Pe=(e,t,r)=>uf(e,typeof t!="symbol"?t+"":t,r);import{r as F,a as hf,e as Rr,c as ff,R as df}from"./vendor-BGNHhJSV.js";import{m as sr,d as q,G as Et,l as Pu}from"./ui-CtU6oe7C.js";import{u as fr,i as pf,a as mf}from"./i18n-BCWVDsfP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var jh={exports:{}},Os={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=F,vf=Symbol.for("react.element"),bf=Symbol.for("react.fragment"),xf=Object.prototype.hasOwnProperty,wf=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yf={key:!0,ref:!0,__self:!0,__source:!0};function Rh(e,t,r){var n,o={},a=null,c=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)xf.call(t,n)&&!yf.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:vf,type:e,key:a,ref:c,props:o,_owner:wf.current}}Os.Fragment=bf;Os.jsx=Rh;Os.jsxs=Rh;jh.exports=Os;var v=jh.exports,Mh,Eu=hf;Mh=Eu.createRoot,Eu.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Tu="popstate";function Sf(e={}){function t(n,o){let{pathname:a,search:c,hash:l}=n.location;return rc("",{pathname:a,search:c,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ya(o)}return Cf(t,r,null,e)}function Gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _f(){return Math.random().toString(36).substring(2,10)}function ju(e,t){return{usr:e.state,key:e.key,idx:t}}function rc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Bo(t):t,state:r,key:t&&t.key||n||_f()}}function ya({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function Cf(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:a=!1}=n,c=o.history,l="POP",h=null,f=p();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function p(){return(c.state||{idx:null}).idx}function x(){l="POP";let k=p(),y=k==null?null:k-f;f=k,h&&h({action:l,location:_.location,delta:y})}function S(k,y){l="PUSH";let j=rc(_.location,k,y);f=p()+1;let T=ju(j,f),E=_.createHref(j);try{c.pushState(T,"",E)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(E)}a&&h&&h({action:l,location:_.location,delta:1})}function d(k,y){l="REPLACE";let j=rc(_.location,k,y);f=p();let T=ju(j,f),E=_.createHref(j);c.replaceState(T,"",E),a&&h&&h({action:l,location:_.location,delta:0})}function w(k){return Af(k)}let _={get action(){return l},get location(){return e(o,c)},listen(k){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Tu,x),h=k,()=>{o.removeEventListener(Tu,x),h=null}},createHref(k){return t(o,k)},createURL:w,encodeLocation(k){let y=w(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:S,replace:d,go(k){return c.go(k)}};return _}function Af(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Gt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:ya(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Oh(e,t,r="/"){return kf(e,t,r,!1)}function kf(e,t,r,n){let o=typeof t=="string"?Bo(t):t,a=ui(o.pathname||"/",r);if(a==null)return null;let c=Fh(e);Lf(c);let l=null;for(let h=0;l==null&&h<c.length;++h){let f=Df(a);l=Of(c[h],f,n)}return l}function Fh(e,t=[],r=[],n="",o=!1){let a=(c,l,h=o,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:l,route:c};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&h)return;Gt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let x=li([n,p.relativePath]),S=r.concat(p);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Fh(c.children,t,S,x,h)),!(c.path==null&&!c.index)&&t.push({path:x,score:Rf(x,c.index),routesMeta:S})};return e.forEach((c,l)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))a(c,l);else for(let f of Dh(c.path))a(c,l,!0,f)}),t}function Dh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let c=Dh(n.join("/")),l=[];return l.push(...c.map(h=>h===""?a:[a,h].join("/"))),o&&l.push(...c),l.map(h=>e.startsWith("/")&&h===""?"/":h)}function Lf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Mf(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Nf=/^:[\w-]+$/,If=3,Pf=2,Ef=1,Tf=10,jf=-2,Ru=e=>e==="*";function Rf(e,t){let r=e.split("/"),n=r.length;return r.some(Ru)&&(n+=jf),t&&(n+=Pf),r.filter(o=>!Ru(o)).reduce((o,a)=>o+(Nf.test(a)?If:a===""?Ef:Tf),n)}function Mf(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Of(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",c=[];for(let l=0;l<n.length;++l){let h=n[l],f=l===n.length-1,p=a==="/"?t:t.slice(a.length)||"/",x=Is({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},p),S=h.route;if(!x&&f&&r&&!n[n.length-1].route.index&&(x=Is({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},p)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:li([a,x.pathname]),pathnameBase:qf(li([a,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(a=li([a,x.pathnameBase]))}return c}function Is(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Ff(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:x},S)=>{if(p==="*"){let w=l[S]||"";c=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const d=l[S];return x&&!d?f[p]=void 0:f[p]=(d||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:e}}function Ff(e,t=!1,r=!0){kn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,l,h)=>(n.push({paramName:l,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Df(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ui(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Bf(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Bo(e):e;return{pathname:r?r.startsWith("/")?r:zf(r,t):t,search:Hf(n),hash:$f(o)}}function zf(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Al(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uf(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Bh(e){let t=Uf(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function zh(e,t,r,n=!1){let o;typeof e=="string"?o=Bo(e):(o={...e},Gt(!o.pathname||!o.pathname.includes("?"),Al("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),Al("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),Al("#","search","hash",o)));let a=e===""||o.pathname==="",c=a?"/":o.pathname,l;if(c==null)l=r;else{let x=t.length-1;if(!n&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),x-=1;o.pathname=S.join("/")}l=x>=0?t[x]:"/"}let h=Bf(o,l),f=c&&c!=="/"&&c.endsWith("/"),p=(a||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(f||p)&&(h.pathname+="/"),h}var li=e=>e.join("/").replace(/\/\/+/g,"/"),qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$f=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Uh=["POST","PUT","PATCH","DELETE"];new Set(Uh);var Wf=["GET",...Uh];new Set(Wf);var zo=F.createContext(null);zo.displayName="DataRouter";var Fs=F.createContext(null);Fs.displayName="DataRouterState";F.createContext(!1);var qh=F.createContext({isTransitioning:!1});qh.displayName="ViewTransition";var Gf=F.createContext(new Map);Gf.displayName="Fetchers";var Yf=F.createContext(null);Yf.displayName="Await";var zn=F.createContext(null);zn.displayName="Navigation";var Aa=F.createContext(null);Aa.displayName="Location";var Un=F.createContext({outlet:null,matches:[],isDataRoute:!1});Un.displayName="Route";var wc=F.createContext(null);wc.displayName="RouteError";function Jf(e,{relative:t}={}){Gt(ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=F.useContext(zn),{hash:o,pathname:a,search:c}=La(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:li([r,a])),n.createHref({pathname:l,search:c,hash:o})}function ka(){return F.useContext(Aa)!=null}function hi(){return Gt(ka(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Aa).location}var Hh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $h(e){F.useContext(zn).static||F.useLayoutEffect(e)}function fo(){let{isDataRoute:e}=F.useContext(Un);return e?ud():Qf()}function Qf(){Gt(ka(),"useNavigate() may be used only in the context of a <Router> component.");let e=F.useContext(zo),{basename:t,navigator:r}=F.useContext(zn),{matches:n}=F.useContext(Un),{pathname:o}=hi(),a=JSON.stringify(Bh(n)),c=F.useRef(!1);return $h(()=>{c.current=!0}),F.useCallback((h,f={})=>{if(kn(c.current,Hh),!c.current)return;if(typeof h=="number"){r.go(h);return}let p=zh(h,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:li([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,a,o,e])}var Xf=F.createContext(null);function Zf(e){let t=F.useContext(Un).outlet;return t&&F.createElement(Xf.Provider,{value:e},t)}function La(e,{relative:t}={}){let{matches:r}=F.useContext(Un),{pathname:n}=hi(),o=JSON.stringify(Bh(r));return F.useMemo(()=>zh(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function Kf(e,t){return Vh(e,t)}function Vh(e,t,r,n,o){var j;Gt(ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=F.useContext(zn),{matches:c}=F.useContext(Un),l=c[c.length-1],h=l?l.params:{},f=l?l.pathname:"/",p=l?l.pathnameBase:"/",x=l&&l.route;{let T=x&&x.path||"";Wh(f,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let S=hi(),d;if(t){let T=typeof t=="string"?Bo(t):t;Gt(p==="/"||((j=T.pathname)==null?void 0:j.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${T.pathname}" was given in the \`location\` prop.`),d=T}else d=S;let w=d.pathname||"/",_=w;if(p!=="/"){let T=p.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(T.length).join("/")}let k=Oh(e,{pathname:_});kn(x||k!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),kn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=id(k&&k.map(T=>Object.assign({},T,{params:Object.assign({},h,T.params),pathname:li([p,a.encodeLocation?a.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?p:li([p,a.encodeLocation?a.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),c,r,n,o);return t&&y?F.createElement(Aa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},y):y}function ed(){let e=cd(),t=Vf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:a},"ErrorBoundary")," or"," ",F.createElement("code",{style:a},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},t),r?F.createElement("pre",{style:o},r):null,c)}var td=F.createElement(ed,null),rd=class extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?F.createElement(Un.Provider,{value:this.props.routeContext},F.createElement(wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nd({routeContext:e,match:t,children:r}){let n=F.useContext(zo);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),F.createElement(Un.Provider,{value:e},r)}function id(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,c=r==null?void 0:r.errors;if(c!=null){let f=a.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);Gt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,h=-1;if(r)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:x,errors:S}=r,d=p.route.loader&&!x.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||d){l=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,p,x)=>{let S,d=!1,w=null,_=null;r&&(S=c&&p.route.id?c[p.route.id]:void 0,w=p.route.errorElement||td,l&&(h<0&&x===0?(Wh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,_=null):h===x&&(d=!0,_=p.route.hydrateFallbackElement||null)));let k=t.concat(a.slice(0,x+1)),y=()=>{let j;return S?j=w:d?j=_:p.route.Component?j=F.createElement(p.route.Component,null):p.route.element?j=p.route.element:j=f,F.createElement(nd,{match:p,routeContext:{outlet:f,matches:k,isDataRoute:r!=null},children:j})};return r&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?F.createElement(rd,{location:r.location,revalidation:r.revalidation,component:w,error:S,children:y(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:n}):y()},null)}function yc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function od(e){let t=F.useContext(zo);return Gt(t,yc(e)),t}function ad(e){let t=F.useContext(Fs);return Gt(t,yc(e)),t}function sd(e){let t=F.useContext(Un);return Gt(t,yc(e)),t}function Sc(e){let t=sd(e),r=t.matches[t.matches.length-1];return Gt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function ld(){return Sc("useRouteId")}function cd(){var n;let e=F.useContext(wc),t=ad("useRouteError"),r=Sc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function ud(){let{router:e}=od("useNavigate"),t=Sc("useNavigate"),r=F.useRef(!1);return $h(()=>{r.current=!0}),F.useCallback(async(o,a={})=>{kn(r.current,Hh),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var Mu={};function Wh(e,t,r){!t&&!Mu[e]&&(Mu[e]=!0,kn(!1,r))}F.memo(hd);function hd({routes:e,future:t,state:r,unstable_onError:n}){return Vh(e,void 0,r,n,t)}function fd(e){return Zf(e.context)}function Mi(e){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dd({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){Gt(!ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),l=F.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof r=="string"&&(r=Bo(r));let{pathname:h="/",search:f="",hash:p="",state:x=null,key:S="default"}=r,d=F.useMemo(()=>{let w=ui(h,c);return w==null?null:{location:{pathname:w,search:f,hash:p,state:x,key:S},navigationType:n}},[c,h,f,p,x,S,n]);return kn(d!=null,`<Router basename="${c}"> is not able to match the URL "${h}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),d==null?null:F.createElement(zn.Provider,{value:l},F.createElement(Aa.Provider,{children:t,value:d}))}function pd({children:e,location:t}){return Kf(nc(e),t)}function nc(e,t=[]){let r=[];return F.Children.forEach(e,(n,o)=>{if(!F.isValidElement(n))return;let a=[...t,o];if(n.type===F.Fragment){r.push.apply(r,nc(n.props.children,a));return}Gt(n.type===Mi,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let c={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=nc(n.props.children,a)),r.push(c)}),r}var ys="get",Ss="application/x-www-form-urlencoded";function Ds(e){return e!=null&&typeof e.tagName=="string"}function md(e){return Ds(e)&&e.tagName.toLowerCase()==="button"}function gd(e){return Ds(e)&&e.tagName.toLowerCase()==="form"}function vd(e){return Ds(e)&&e.tagName.toLowerCase()==="input"}function bd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xd(e,t){return e.button===0&&(!t||t==="_self")&&!bd(e)}function ic(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function wd(e,t){let r=ic(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}var is=null;function yd(){if(is===null)try{new FormData(document.createElement("form"),0),is=!1}catch{is=!0}return is}var Sd=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kl(e){return e!=null&&!Sd.has(e)?(kn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ss}"`),null):e}function _d(e,t){let r,n,o,a,c;if(gd(e)){let l=e.getAttribute("action");n=l?ui(l,t):null,r=e.getAttribute("method")||ys,o=kl(e.getAttribute("enctype"))||Ss,a=new FormData(e)}else if(md(e)||vd(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||l.getAttribute("action");if(n=h?ui(h,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||ys,o=kl(e.getAttribute("formenctype"))||kl(l.getAttribute("enctype"))||Ss,a=new FormData(l,e),!yd()){let{name:f,type:p,value:x}=e;if(p==="image"){let S=f?`${f}.`:"";a.append(`${S}x`,"0"),a.append(`${S}y`,"0")}else f&&a.append(f,x)}}else{if(Ds(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ys,n=null,o=Ss,c=e}return a&&o==="text/plain"&&(c=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _c(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cd(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&ui(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function Ad(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kd(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ld(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let c=await Ad(a,r);return c.links?c.links():[]}return[]}));return Ed(n.flat(1).filter(kd).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ou(e,t,r,n,o,a){let c=(h,f)=>r[f]?h.route.id!==r[f].route.id:!0,l=(h,f)=>{var p;return r[f].pathname!==h.pathname||((p=r[f].route.path)==null?void 0:p.endsWith("*"))&&r[f].params["*"]!==h.params["*"]};return a==="assets"?t.filter((h,f)=>c(h,f)||l(h,f)):a==="data"?t.filter((h,f)=>{var x;let p=n.routes[h.route.id];if(!p||!p.hasLoader)return!1;if(c(h,f)||l(h,f))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Nd(e,t,{includeHydrateFallback:r}={}){return Id(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Id(e){return[...new Set(e)]}function Pd(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Ed(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let a=JSON.stringify(Pd(o));return r.has(a)||(r.add(a),n.push({key:a,link:o})),n},[])}function Gh(){let e=F.useContext(zo);return _c(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Td(){let e=F.useContext(Fs);return _c(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Cc=F.createContext(void 0);Cc.displayName="FrameworkContext";function Yh(){let e=F.useContext(Cc);return _c(e,"You must render this element inside a <HydratedRouter> element"),e}function jd(e,t){let r=F.useContext(Cc),[n,o]=F.useState(!1),[a,c]=F.useState(!1),{onFocus:l,onBlur:h,onMouseEnter:f,onMouseLeave:p,onTouchStart:x}=t,S=F.useRef(null);F.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let _=y=>{y.forEach(j=>{c(j.isIntersecting)})},k=new IntersectionObserver(_,{threshold:.5});return S.current&&k.observe(S.current),()=>{k.disconnect()}}},[e]),F.useEffect(()=>{if(n){let _=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(_)}}},[n]);let d=()=>{o(!0)},w=()=>{o(!1),c(!1)};return r?e!=="intent"?[a,S,{}]:[a,S,{onFocus:da(l,d),onBlur:da(h,w),onMouseEnter:da(f,d),onMouseLeave:da(p,w),onTouchStart:da(x,d)}]:[!1,S,{}]}function da(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Rd({page:e,...t}){let{router:r}=Gh(),n=F.useMemo(()=>Oh(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?F.createElement(Od,{page:e,matches:n,...t}):null}function Md(e){let{manifest:t,routeModules:r}=Yh(),[n,o]=F.useState([]);return F.useEffect(()=>{let a=!1;return Ld(e,t,r).then(c=>{a||o(c)}),()=>{a=!0}},[e,t,r]),n}function Od({page:e,matches:t,...r}){let n=hi(),{manifest:o,routeModules:a}=Yh(),{basename:c}=Gh(),{loaderData:l,matches:h}=Td(),f=F.useMemo(()=>Ou(e,t,h,o,n,"data"),[e,t,h,o,n]),p=F.useMemo(()=>Ou(e,t,h,o,n,"assets"),[e,t,h,o,n]),x=F.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,_=!1;if(t.forEach(y=>{var T;let j=o.routes[y.route.id];!j||!j.hasLoader||(!f.some(E=>E.route.id===y.route.id)&&y.route.id in l&&((T=a[y.route.id])!=null&&T.shouldRevalidate)||j.hasClientLoader?_=!0:w.add(y.route.id))}),w.size===0)return[];let k=Cd(e,c,"data");return _&&w.size>0&&k.searchParams.set("_routes",t.filter(y=>w.has(y.route.id)).map(y=>y.route.id).join(",")),[k.pathname+k.search]},[c,l,n,o,f,t,e,a]),S=F.useMemo(()=>Nd(p,o),[p,o]),d=Md(p);return F.createElement(F.Fragment,null,x.map(w=>F.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),S.map(w=>F.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),d.map(({key:w,link:_})=>F.createElement("link",{key:w,nonce:r.nonce,..._})))}function Fd(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Jh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jh&&(window.__reactRouterVersion="7.8.2")}catch{}function Dd({basename:e,children:t,window:r}){let n=F.useRef();n.current==null&&(n.current=Sf({window:r,v5Compat:!0}));let o=n.current,[a,c]=F.useState({action:o.action,location:o.location}),l=F.useCallback(h=>{F.startTransition(()=>c(h))},[c]);return F.useLayoutEffect(()=>o.listen(l),[o,l]),F.createElement(dd,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var Qh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xh=F.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:c,state:l,target:h,to:f,preventScrollReset:p,viewTransition:x,...S},d){let{basename:w}=F.useContext(zn),_=typeof f=="string"&&Qh.test(f),k,y=!1;if(typeof f=="string"&&_&&(k=f,Jh))try{let D=new URL(window.location.href),X=f.startsWith("//")?new URL(D.protocol+f):new URL(f),N=ui(X.pathname,w);X.origin===D.origin&&N!=null?f=N+X.search+X.hash:y=!0}catch{kn(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=Jf(f,{relative:o}),[T,E,V]=jd(n,S),Z=qd(f,{replace:c,state:l,target:h,preventScrollReset:p,relative:o,viewTransition:x});function te(D){t&&t(D),D.defaultPrevented||Z(D)}let W=F.createElement("a",{...S,...V,href:k||j,onClick:y||a?t:te,ref:Fd(d,E),target:h,"data-discover":!_&&r==="render"?"true":void 0});return T&&!_?F.createElement(F.Fragment,null,W,F.createElement(Rd,{page:j})):W});Xh.displayName="Link";var Bd=F.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:c,viewTransition:l,children:h,...f},p){let x=La(c,{relative:f.relative}),S=hi(),d=F.useContext(Fs),{navigator:w,basename:_}=F.useContext(zn),k=d!=null&&Yd(x)&&l===!0,y=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,j=S.pathname,T=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;r||(j=j.toLowerCase(),T=T?T.toLowerCase():null,y=y.toLowerCase()),T&&_&&(T=ui(T,_)||T);const E=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let V=j===y||!o&&j.startsWith(y)&&j.charAt(E)==="/",Z=T!=null&&(T===y||!o&&T.startsWith(y)&&T.charAt(y.length)==="/"),te={isActive:V,isPending:Z,isTransitioning:k},W=V?t:void 0,D;typeof n=="function"?D=n(te):D=[n,V?"active":null,Z?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let X=typeof a=="function"?a(te):a;return F.createElement(Xh,{...f,"aria-current":W,className:D,ref:p,style:X,to:c,viewTransition:l},typeof h=="function"?h(te):h)});Bd.displayName="NavLink";var zd=F.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:c=ys,action:l,onSubmit:h,relative:f,preventScrollReset:p,viewTransition:x,...S},d)=>{let w=Wd(),_=Gd(l,{relative:f}),k=c.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&Qh.test(l),j=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let E=T.nativeEvent.submitter,V=(E==null?void 0:E.getAttribute("formmethod"))||c;w(E||T.currentTarget,{fetcherKey:t,method:V,navigate:r,replace:o,state:a,relative:f,preventScrollReset:p,viewTransition:x})};return F.createElement("form",{ref:d,method:k,action:_,onSubmit:n?h:j,...S,"data-discover":!y&&e==="render"?"true":void 0})});zd.displayName="Form";function Ud(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zh(e){let t=F.useContext(zo);return Gt(t,Ud(e)),t}function qd(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:c}={}){let l=fo(),h=hi(),f=La(e,{relative:a});return F.useCallback(p=>{if(xd(p,t)){p.preventDefault();let x=r!==void 0?r:ya(h)===ya(f);l(e,{replace:x,state:n,preventScrollReset:o,relative:a,viewTransition:c})}},[h,l,f,r,n,t,e,o,a,c])}function Hd(e){kn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=F.useRef(ic(e)),r=F.useRef(!1),n=hi(),o=F.useMemo(()=>wd(n.search,r.current?null:t.current),[n.search]),a=fo(),c=F.useCallback((l,h)=>{const f=ic(typeof l=="function"?l(new URLSearchParams(o)):l);r.current=!0,a("?"+f,h)},[a,o]);return[o,c]}var $d=0,Vd=()=>`__${String(++$d)}__`;function Wd(){let{router:e}=Zh("useSubmit"),{basename:t}=F.useContext(zn),r=ld();return F.useCallback(async(n,o={})=>{let{action:a,method:c,encType:l,formData:h,body:f}=_d(n,t);if(o.navigate===!1){let p=o.fetcherKey||Vd();await e.fetch(p,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Gd(e,{relative:t}={}){let{basename:r}=F.useContext(zn),n=F.useContext(Un);Gt(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...La(e||".",{relative:t})},c=hi();if(e==null){a.search=c.search;let l=new URLSearchParams(a.search),h=l.getAll("index");if(h.some(p=>p==="")){l.delete("index"),h.filter(x=>x).forEach(x=>l.append("index",x));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:li([r,a.pathname])),ya(a)}function Yd(e,{relative:t}={}){let r=F.useContext(qh);Gt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Zh("useViewTransitionState"),o=La(e,{relative:t});if(!r.isTransitioning)return!1;let a=ui(r.currentLocation.pathname,n)||r.currentLocation.pathname,c=ui(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Is(o.pathname,c)!=null||Is(o.pathname,a)!=null}function ci({width:e,height:t,fill:r}){return v.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Jd=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},Qd=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Xd=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(n/o*100);e.forEach(c=>{a>=c&&!t.includes(c)&&(t.push(c),Qd(c))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},Kh=F.createContext(),Bs=()=>{const e=F.useContext(Kh);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Zd=({children:e})=>{const[t,r]=F.useState(()=>localStorage.getItem("theme")||"light");F.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Jd(t)},[t]);const a={theme:t,toggleTheme:()=>{r(c=>c==="light"?"dark":"light")},setSpecificTheme:c=>{r(c)},isLight:t==="light",isDark:t==="dark"};return v.jsx(Kh.Provider,{value:a,children:e})},Kd=sr`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,e5=sr`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,t5=sr`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,r5=q.div`
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
    animation: ${e=>e.initialFade?t5:"none"} 0.5s ease-in;
`,n5=q.div`
    animation: ${e=>e.isExiting?e5:Kd} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Ac({isVisible:e,initialFade:t=!1}){const{theme:r}=Bs(),[n,o]=F.useState(!1),[a,c]=F.useState(!1);return F.useEffect(()=>{!e&&!n&&(o(!0),setTimeout(()=>{c(!0)},800))},[e,n]),v.jsx(r5,{isVisible:e,fadeOutContainer:a,initialFade:t,children:v.jsx(n5,{isExiting:n,children:v.jsx(ci,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const i5=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},o5=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},Fu=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Du=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},a5=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},Bu=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},s5=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},l5=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},c5=(e,t="",r="",n="album_collection")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t,album_id:r,source:n})},u5=()=>{F.useEffect(()=>{Fu(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&Fu(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function e2(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function t2(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function h5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const f5=sr`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,d5=sr`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,p5=sr`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,m5=sr`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,g5=q.div`
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
    animation: ${e=>e.isClosing?m5:p5} 0.3s ease-in-out forwards;
`,v5=q.div`
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
    animation: ${e=>e.isClosing?d5:f5} 0.3s ease-in-out forwards;

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
`,b5=q.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,x5=q.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,w5=q(t2)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,y5=q.div`
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
`,r2=q.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,S5=q.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,_5=q.button`
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
`,Ll=q.button`
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
`,zu=q.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,C5=q(r2)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,A5=q.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,k5=q.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function L5({title:e,paragraph:t,imageURL:r,postImageText:n,canClose:o,confirmText:a,onConfirm:c,cancelText:l,onCancel:h,isClosing:f}){return document.body.style.overflow="hidden",v.jsx(g5,{isClosing:f,children:v.jsxs(v5,{isClosing:f,children:[v.jsxs(b5,{children:[v.jsx(A5,{children:v.jsx(ci,{width:25,height:25,fill:"var(--textColor)"})}),e&&v.jsx(x5,{children:e}),o&&v.jsx(y5,{onClick:h,children:v.jsx(w5,{})})]}),v.jsx(k5,{}),t&&v.jsx(r2,{children:t}),r&&v.jsx(S5,{src:r}),n&&v.jsx(C5,{children:n}),l&&a?v.jsxs(zu,{children:[v.jsx(_5,{onClick:h,children:l}),v.jsx(Ll,{onClick:c,children:a})]}):v.jsx(zu,{style:{justifyContent:"center"},children:l?v.jsx(Ll,{onClick:h,children:l}):v.jsx(Ll,{onClick:c,children:a})})]})})}const N5="/assets/models-4pKGew8b.png",I5=F.createContext(),P5=({children:e})=>{const{t,i18n:r}=fr(),[n,o]=F.useState(null),[a,c]=F.useState(!1),[l,h]=F.useState(()=>{const Z=localStorage.getItem("shownAlerts");return Z?JSON.parse(Z):{}}),f=()=>{const Z={en:{title:"🚀 Pre-made models",paragraph:"Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.",confirmText:"Ok, I'll try!",postImageText:"The models can be chosen after selecting a album."},pt:{title:"🚀 Modelos pré-definidos",paragraph:"Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.",confirmText:"Ok, vou tentar!",postImageText:"Os modelos podem ser escolhidos após selecionar um álbum."},es:{title:"🚀 Modelos predefinidos",paragraph:"Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.",confirmText:"¡Ok, lo intentaré!",postImageText:"Los modelos se pueden elegir después de seleccionar un álbum."},zh:{title:"🚀 预制模型",paragraph:"预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。",confirmText:"好的，我试试！",postImageText:"可以在选择专辑后选择模型。"}},te=r.language||"en",W=Z[te]||Z.en;return{id:"default-premade-models",persistentId:"premade-models-intro",title:W.title,paragraph:W.paragraph,imageURL:N5,postImageText:W.postImageText,confirmText:W.confirmText,canClose:!0,type:"alert",limitDate:"2025-11-11T23:59:59.999Z"}},p=Z=>l[Z]===!0,x=Z=>{if(!p(Z)){const te={...l,[Z]:!0};h(te),localStorage.setItem("shownAlerts",JSON.stringify(te))}};F.useEffect(()=>{const Z=f();!p(Z.persistentId)&&!n&&_(Z)&&o(Z)},[r.language,l,n]);const S=Z=>{_(Z)&&(o(Z),c(!1))},d=Z=>{_(Z)&&S({...Z,type:"alert"})},w=Z=>{S({...Z,type:"confirmation"})},_=Z=>{if(!Z.limitDate)return!0;const te=new Date(Z.limitDate);return new Date<=te},k=Z=>{if(!Z.persistentId){_(Z)&&d(Z);return}!p(Z.persistentId)&&_(Z)&&S({...Z,type:"alert"})},y=()=>{(n==null?void 0:n.type)==="alert"&&E(),!(!n||a)&&(c(!0),setTimeout(()=>{o(null),c(!1),document.body.style.overflow="unset"},300))},j=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&E(),y()},T=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&E(),y()},E=()=>{n!=null&&n.persistentId&&x(n.persistentId)},V={modal:n,showModal:S,showAlert:d,showConfirmation:w,showConditionalAlert:k,closeModal:y,isModalVisible:!!n,hasAlertBeenShown:p,markSpecificAlertAsShown:x};return v.jsxs(I5.Provider,{value:V,children:[e,n&&v.jsx(L5,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?j:null,cancelText:n.cancelText||null,onCancel:n.cancelText?T:n.canClose?y:null,isClosing:a})]})},E5={BASE_URL:"https://api.posterfy.space"},T5=E5.BASE_URL;class j5{constructor(t=T5){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,o={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`);try{const a=await fetch(n,o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.error("API request failed:",a),a}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const Dn=new j5,n2=F.createContext(),Na=()=>{const e=F.useContext(n2);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},R5=({children:e})=>{const[t,r]=F.useState(null),[n,o]=F.useState(!0),[a,c]=F.useState(!1);F.useEffect(()=>{(async()=>{const _=new URLSearchParams(window.location.search).get("token");_&&(localStorage.setItem("authToken",_),Dn.setAuthToken(_),window.history.replaceState({},document.title,window.location.pathname)),await l()})()},[]);const l=async()=>{if(!localStorage.getItem("authToken")){r(null),c(!1),o(!1);return}try{const w=await Dn.getCurrentUser();r(w.user),c(!0),o(!1)}catch{localStorage.removeItem("authToken"),Dn.setAuthToken(null),r(null),c(!1),o(!1)}},S={user:t,loading:n,isAuthenticated:a,loginWithGoogle:()=>{window.location.href=Dn.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=Dn.getSpotifyAuthUrl()},logout:async()=>{try{await Dn.logout(),localStorage.removeItem("authToken"),Dn.setAuthToken(null),r(null),c(!1)}catch(d){console.error("Logout failed:",d),localStorage.removeItem("authToken"),Dn.setAuthToken(null),r(null),c(!1)}},checkAuthStatus:l,updateUser:d=>{r(d)}};return v.jsx(n2.Provider,{value:S,children:e})};function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ps.apply(this,arguments)}function M5(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var O5=["cdnSuffix","cdnUrl","countryCode","style","svg"],F5="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",D5="svg",B5=127397,i2=function(t){var r=t.cdnSuffix,n=r===void 0?D5:r,o=t.cdnUrl,a=o===void 0?F5:o,c=t.countryCode,l=t.style,h=t.svg,f=h===void 0?!1:h,p=M5(t,O5);if(typeof c!="string")return null;if(f){var x=""+a+c.toLowerCase()+"."+n;return F.createElement("img",Object.assign({},p,{src:x,style:Ps({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},l)}))}var S=c.toUpperCase().replace(/./g,function(d){return String.fromCodePoint(d.charCodeAt(0)+B5)});return F.createElement("span",Object.assign({role:"img"},p,{style:Ps({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},l)}),S)};const z5=q.div`
  position: relative;
`,U5=q.button`
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
`,q5=q.div`
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
`,H5=q.div`
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
`,$5=q.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,V5=q.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,os=q.button`
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
`,as=q.span`
  margin-left: 8px;
`,ss=q(i2)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function W5(){const[e,t]=F.useState(!1),[r,n]=F.useState(!1),{i18n:o}=fr();F.useEffect(()=>{const f=localStorage.getItem("language");f&&o.changeLanguage(f);const p=x=>{x.target.closest(".language-selector")||a()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[o]);const a=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},c=f=>{f.stopPropagation(),e?a():t(!0)},l=f=>{o.changeLanguage(f),localStorage.setItem("language",f),a(),l5(f)},h=()=>{switch(o.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return v.jsxs(z5,{className:"language-selector",children:[v.jsx(U5,{onClick:c,"aria-label":"Select language",children:v.jsx(q5,{children:v.jsx(i2,{countryCode:h(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&v.jsxs(H5,{className:r?"closing":"",children:[v.jsx($5,{}),v.jsxs(V5,{children:[v.jsxs(os,{onClick:()=>l("pt"),children:[v.jsx(ss,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(as,{children:"Português"})]}),v.jsxs(os,{onClick:()=>l("en"),children:[v.jsx(ss,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(as,{children:"English"})]}),v.jsxs(os,{onClick:()=>l("es"),children:[v.jsx(ss,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(as,{children:"Español"})]}),v.jsxs(os,{onClick:()=>l("zh"),children:[v.jsx(ss,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),v.jsx(as,{children:"中文"})]})]})]})]})}function G5(e){return Et({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function o2(e){return Et({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function Y5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function J5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function a2(e){return Et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function s2(e){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function l2(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Q5(e){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function c2(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function u2(e){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function X5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Z5(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function h2(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const K5=q.div`
  position: relative;
`,ep=q.button`
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
`,tp=q.div`
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
`,rp=q.div`
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
`,np=q.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,ip=q.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,op=q.button`
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
`,ap=q.div`
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
`,sp=q.span`
  margin-left: 4px;
  font-weight: 500;
`;function lp(){const[e,t]=F.useState(!1),[r,n]=F.useState(!1),{theme:o,setSpecificTheme:a}=Bs(),c=[{id:"light",name:"Light",color:"#f0efeb",icon:v.jsx(h2,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:v.jsx(c2,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:v.jsx(a2,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:v.jsx(s2,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:v.jsx(u2,{}),isLight:!1}],l=c.find(x=>x.id===o)||c[0];F.useEffect(()=>{const x=S=>{S.target.closest(".theme-selector")||h()};return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[]);const h=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=x=>{x.stopPropagation(),e?h():t(!0)},p=x=>{a(x),h()};return v.jsxs(K5,{className:"theme-selector",children:[v.jsx(ep,{onClick:f,"aria-label":"Select theme",children:v.jsx(tp,{themeColor:l.color,isLight:l.isLight,children:l.icon})}),e&&v.jsxs(rp,{className:r?"closing":"",children:[v.jsx(np,{}),v.jsx(ip,{children:c.map(x=>v.jsxs(op,{onClick:()=>p(x.id),children:[v.jsx(ap,{className:"theme-preview",color:x.color,isLight:x.isLight,children:x.icon}),v.jsx(sp,{children:x.name})]},x.id))})]})]})}function cp(e){return Et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function up(e){return Et({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const hp=q.header`
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
`,fp=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,dp=q.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,pp=q.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,mp=q.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,gp=q.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,vp=q.div`
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
`,bp=q.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,xp=q.button`
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
`,wp=q.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,yp=q(up)`
  font-size: 1.5em;
  color: var(--textColor);
`,Sp=q.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Es({hideLogo:e=!1,hideAccount:t=!1}){const[r,n]=F.useState(!1),[o,a]=F.useState(!0),[c,l]=F.useState(0),[h,f]=F.useState(!1),p=".space",{user:x,isAuthenticated:S}=Na(),d=fo();F.useEffect(()=>{const _=()=>{const k=window.scrollY;k<=10?(a(!0),n(!1)):(k<c?a(!0):a(!1),n(!0)),l(k)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[c]);const w=()=>{d(S?"/dashboard":"/login")};return v.jsxs(hp,{scrolled:r,visible:o,children:[v.jsxs(fp,{children:[!e&&v.jsxs(dp,{onClick:()=>d("/"),children:[v.jsx(vp,{children:v.jsx(ci,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),v.jsxs(pp,{children:["Posterfy",v.jsx(mp,{children:p})]})]}),v.jsxs(bp,{children:[v.jsx(W5,{}),v.jsx(lp,{}),!t&&v.jsx(xp,{onClick:w,children:v.jsx(wp,{children:x!=null&&x.avatar?v.jsx(Sp,{src:x.avatar}):v.jsx(yp,{})})})]})]}),v.jsx(gp,{scrolled:r})]})}const _p=sr`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Cp=sr`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,kc=sr`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Ap=sr`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,kp=q.div`
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
`,Lp=q.div`
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
`,Np=q.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${kc} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,Ip=q.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${_p} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${Cp} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,Pp=q.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,Ep=q.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,Tp=q.div`
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
    animation: ${Ap} 6s linear infinite;
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
`,jp=q.div`
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
`,Rp=q.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${kc} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;q.h3`
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
`;const Mp=q.div`
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
`,Op=q.button`
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
`,Fp=q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,Dp=q.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,Bp=q.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${kc} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,zp=q.a`
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
`;function Up(){const{t:e}=fr(),{theme:t,setSpecificTheme:r}=Bs(),n=c=>{r(c)},o=[{id:"light",name:"Light",color:"#f0efeb",icon:v.jsx(h2,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:v.jsx(c2,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:v.jsx(Q5,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:v.jsx(a2,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:v.jsx(s2,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:v.jsx(u2,{}),isLight:!1}],a=new Date().getFullYear();return v.jsxs(kp,{children:[v.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:v.jsxs("footer",{children:[v.jsx("h4",{children:"Album Poster Generator Links"}),v.jsxs("nav",{children:[v.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),v.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),v.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),v.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),v.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),v.jsxs(Lp,{children:[v.jsxs(Np,{children:[v.jsxs(Ip,{children:[v.jsx(Ep,{className:"icon-shadow"}),v.jsx(Pp,{className:"icon-main",children:v.jsx(ci,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),v.jsx(Tp,{children:v.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",v.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),v.jsxs(jp,{children:[v.jsx(l2,{})," © ",a," Posterfy. ",e("AllRights","All rights reserved.")]})]}),v.jsx(Rp,{children:v.jsx(Mp,{children:o.map(c=>v.jsxs(Fp,{children:[v.jsx(Op,{color:c.color,active:t===c.id,themeId:c.id,onClick:()=>n(c.id),"aria-label":`${e("SwitchTo","Switch to")} ${c.name} ${e("Theme").toLowerCase()}`,children:c.icon},c.id),v.jsx(Dp,{active:t===c.id,children:c.name})]},c.id))})}),v.jsx(Bp,{children:v.jsxs(zp,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[v.jsx(G5,{})," ",e("ViewGitHub","GitHub")]})})]})]})}function Nl({showNavbar:e=!0,showFooter:t=!0}){return v.jsxs(v.Fragment,{children:[e&&v.jsx(Es,{}),v.jsx(fd,{}),t&&v.jsx(Up,{})]})}function qp(e){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Hp(e){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const $p="/assets/Posterfy%20-%20KTT%20ZOO-EGMOdvc1.png",Vp="/assets/Posterfy%20-%20JACKBOYS%202-5mh4sLb1.png",Wp="/assets/Posterfy%20-%20SOS-BR7qvD22.png",Gp="/assets/Posterfy%20-%20F-1%20Trillion-D1gH0Ecz.png",Yp="/assets/Posterfy%20-%20Nevermind-DmVmVnus.png",Jp=[{id:1,coverImage:$p,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b2732715c405b0b118516627add4",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/15/e0/31/15e031a3-d975-91a7-5dc4-31dda64d1f52/8445162931182.jpg",useUncompressed:!0,albumName:"KTT ZOO",artistsName:"Sain",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"200",marginSide:160,marginCover:0,marginBackground:"5",titleRelease:"Release date",releaseDate:"2023-07-07",titleRuntime:"Runtime",runtime:"23min 33s",backgroundColor:"#638f98",textColor:"#0c191d",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Aquelas Coisas Mais Pra Frente
2. Demanda
3. Relíquia Do Boom Bap
4. Lucro
5. Skit Visão
6. Ebi no Tempura
7. Iori Incorporado
8. Noturno KGL
9. Ignorante
10. Momentos`,color1:"#0c191d",color2:"#3381ae",color3:"#aab8b4",albumID:"7lJibQ9XRhBDUIWgkP4wZm",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:2,coverImage:Vp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273b547c9858fee61547e6b0fd8",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music221/v4/bb/00/09/bb0009b4-37e3-b924-b703-eb3d3a7f362d/196873402772.jpg",useUncompressed:!0,albumName:"JACKBOYS 2",artistsName:"JACKBOYS, Travis Scott",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"50",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2025-07-13",titleRuntime:"Runtime",runtime:"55min 50s",backgroundColor:"#b4aba6",textColor:"#79736e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. JB2 RADIO
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
17. FLORIDA FLOW`,color1:"#7a736f",color2:"#938c8c",color3:"#94948c",albumID:"32lGAqeVkdJxEj2iv2Q01B",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:3,coverImage:Wp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Gp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27388208159b1b3c69eefdeb2e0",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg",useUncompressed:!1,albumName:"F-1 Trillion",artistsName:"Post Malone",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:200,marginSide:160,marginCover:-500,marginBackground:-700,titleRelease:"Release date",releaseDate:"2024-08-15",titleRuntime:"Runtime",runtime:"57min 58s",backgroundColor:"#cdd1d6",textColor:"#3c484c",useWatermark:!0,useFade:!0,showTracklist:!1,tracklist:`1. Wrong Ones (Feat. Tim McGraw)
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
18. Yours`,color1:"#86939b",color2:"#6a5f59",color3:"#81735d",albumID:"4BbsHmXEghoPPevQjPnHXx",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:5,coverImage:Yp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",uncompressedAlbumCover:"",useUncompressed:!1,albumName:"",artistsName:"",titleSize:"200",artistsSize:"110",tracksSize:"70",marginTop:"-200",marginSide:"115",marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"1991-09-26",titleRuntime:"Runtime",runtime:"49min 15s",backgroundColor:"#0064b0",textColor:"#01010e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Smells Like Teen Spirit
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
13. Endless, Nameless`,color1:"#a6b6ba",color2:"#43bdd1",color3:"#052a5e",albumID:"2UJcKiJxNryhL050F5Z1Fk",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}}],Oi=(e={})=>{const[t,r]=F.useState(!1),n=F.useRef(null);return F.useEffect(()=>{const o=n.current,a=new IntersectionObserver(([c])=>{c.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return o&&a.observe(o),()=>{o&&a.unobserve(o)}},[e]),[n,t]},Qp=q.div`
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
`,Xp=q.div`
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
`,Zp=q.div`
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
`,Kp=q.div`
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
`,em=q.div`
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
`,tm=q.button`
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
`,rm=q.button`
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
`,nm=({onRecreate:e})=>{const{t}=fr(),[r,n]=F.useState(null),[o,a]=F.useState(!1),[c,l]=F.useState(!1),[h,f]=F.useState(null),[p,x]=F.useState(null),[S,d]=Oi(),[w,_]=F.useState([]),k=[2,3,1,4,0];F.useEffect(()=>{d&&w.length===0&&k.forEach((E,V)=>{setTimeout(()=>{_(Z=>[...Z,E])},V*177)})},[d]),F.useEffect(()=>{const E=()=>{a(window.innerWidth<=770),l(window.innerWidth>480&&window.innerWidth<=1200)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const y=(E,V)=>{f(E),x(V),document.body.style.overflow="hidden"},j=()=>{f(null),document.body.style.overflow="auto"},T=()=>{f(null),e(p),document.body.style.overflow="auto"};return v.jsxs(v.Fragment,{children:[v.jsx(Qp,{ref:S,children:Jp.map((E,V)=>v.jsx(Xp,{index:V,isHovered:r===V,hoveredIndex:r,otherIsHovered:r!==null,isMobile:o,isTablet:c,$hasAppeared:w.includes(V),onMouseEnter:()=>n(V),onMouseLeave:()=>n(null),onClick:()=>y(E.coverImage||"/placeholder.svg",E.JSONConfig),children:v.jsx("img",{src:E.coverImage||"/placeholder.svg",alt:`${E.artist} - ${E.title}`})},E.id))}),h&&v.jsx(Zp,{onClick:j,children:v.jsxs(Kp,{onClick:E=>E.stopPropagation(),children:[v.jsxs(em,{children:[v.jsx(tm,{onClick:j,children:"×"}),v.jsx(rm,{onClick:T,children:t("RecreatePoster")})]}),v.jsx("img",{src:h,alt:"Album cover"})]})})]})},im=q.div`
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
`,om=({onRecreate:e})=>v.jsx(im,{children:v.jsx(nm,{onRecreate:e})}),am=q.div`
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
`,sm=q.div`
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
`,lm=q.h1`
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
`,Uu=q.p`
    font-size: 1.1em;
    opacity: ${e=>e.visible?.5:0};
    width: 80%;
    font-weight: bolder;
    margin: 2px 0;
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;

    @media (max-width: 900px) {
        width: 90%;
    }
`,cm=q.div`
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
`,um=`
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
`,hm=q(qp)`
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
    ${um}
`;function fm({showAnimation:e=!1,onRecreate:t}){const{t:r}=fr(),{theme:n}=Bs(),[o,a]=F.useState(!1);F.useEffect(()=>{if(e){const l=setTimeout(()=>{a(!0)},50);return()=>clearTimeout(l)}},[e]);const c=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return v.jsxs(v.Fragment,{children:[v.jsx(am,{children:v.jsxs(sm,{children:[v.jsx(lm,{visible:o,animationDelay:200,children:"Posterfy"}),v.jsx(Uu,{visible:o,animationDelay:400,children:r("paragraphHero1")}),v.jsx(Uu,{visible:o,animationDelay:600,children:r("paragraphHero2")}),v.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[v.jsx("h2",{children:"Free Album Poster Generator"}),v.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),v.jsx("h3",{children:"Features:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Free album poster maker"}),v.jsx("li",{children:"Spotify integration"}),v.jsx("li",{children:"Custom poster design"}),v.jsx("li",{children:"High-quality downloads"}),v.jsx("li",{children:"Multiple format options"}),v.jsx("li",{children:"Professional templates"})]})]}),v.jsx(cm,{visible:o,animationDelay:800,children:v.jsx(ci,{fill:n==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),v.jsx(hm,{visible:o,animationDelay:1e3,onClick:c})]})}),v.jsx(om,{onRecreate:t})]})}const dm=q.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,pm=q.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Ia({text:e,type:t}){return v.jsx(v.Fragment,{children:t==1?v.jsx(dm,{children:e}):v.jsx(pm,{children:e})})}const mm=q.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,gm=q.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,vm=q.p`
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
`,qu=q.div`
    display: flex;
`;function Lc({title:e,paragraph:t}){return v.jsxs(mm,{children:[v.jsx(qu,{children:v.jsx(gm,{children:e})}),v.jsx(qu,{children:v.jsx(vm,{children:t})})]})}function bm(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function xm(e){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const wm=q.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,ym=q(bm)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Sm=q.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,_m=q.hr`
    opacity: 0.15;
    margin: 5px;
`,Cm=q.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,Am=q.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Lo({q:e,a:t}){const[r,n]=F.useState(!1);function o(){n(!r)}return v.jsxs(v.Fragment,{children:[v.jsxs(wm,{onClick:o,children:[v.jsx(ym,{showA:r}),v.jsx(Sm,{children:e})]}),v.jsx(_m,{}),v.jsx(Cm,{showA:r,children:v.jsx(Am,{showA:r,children:t})})]})}const km=q.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Lm=q.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Nm(){const{t:e}=fr();return v.jsxs(km,{id:"faq",children:[v.jsx(Ia,{text:"FAQ",type:1}),v.jsxs(Lm,{children:[v.jsx(Lo,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),v.jsx(Lo,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),v.jsx(Lo,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),v.jsx(Lo,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),v.jsx(Lo,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),v.jsx(Lo,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const Im=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),v.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),v.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),v.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),v.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),v.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),v.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),v.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),v.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),v.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),v.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),v.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),v.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),v.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),v.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),v.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),v.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),v.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:o}),v.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:o}),v.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:o}),v.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:o}),v.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:o}),v.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:a})]}),Pm=q.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Em=q.div`
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
`,Tm=q.p`
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
`,jm=q.button`
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
`;function Rm(){const{t:e}=fr();return v.jsxs(Pm,{id:"share",children:[v.jsx(Ia,{text:e("Share"),type:1}),v.jsx(Lc,{title:e("ShareTitle")}),v.jsx(Em,{children:v.jsx(Im,{width:"100%"})}),v.jsx(Tm,{children:e("ShareDescription")}),v.jsx(jm,{children:e("ComingSoon")})]})}const Mm=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:o="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[v.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),v.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),v.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),v.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),v.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),v.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),v.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),v.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),v.jsx("g",{fill:r,opacity:"0.3",children:v.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),v.jsxs("g",{fill:t,opacity:"0.2",children:[v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),v.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),v.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),v.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),v.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),v.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),v.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),v.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),v.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),v.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),v.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),v.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),v.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),v.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),v.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),v.jsx("path",{fill:o,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),v.jsx("path",{fill:o,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),v.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),v.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),v.jsx("g",{clipPath:"url(#clip0_1_72)",children:v.jsx("path",{fill:o,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_1_72",children:v.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Om=q.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Fm=q.div`
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
`,Dm=q.p`
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
`,Bm=q.button`
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
`;function zm(){const{t:e}=fr();return v.jsxs(Om,{id:"share",children:[v.jsx(Ia,{text:e("Community"),type:1}),v.jsx(Lc,{title:e("CommunityTitle")}),v.jsx(Fm,{children:v.jsx(Mm,{width:"100%"})}),v.jsx(Dm,{children:e("CommunityDescription")}),v.jsx(Bm,{children:e("ComingSoon")})]})}const Hu=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],Um=q.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,qm=q.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Hm=q.div`
    display: flex;
    align-items: center;
    position: relative;
`,$m=q.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Vm=q(l2)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Wm=q.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,Gm=q.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,Ym=q.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,Jm=q.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Qm=q.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,Xm=q.a`
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
`;function Zm(){var a,c,l;const{i18n:e}=fr(),{t}=fr(),r=((a=e.language)==null?void 0:a.split("-")[0])||"en",n=Hu.filter(h=>h.key!=="contribute_area"),o=Hu.find(h=>h.key==="contribute_area");return v.jsxs(Um,{id:"thanks",children:[v.jsx(Ia,{text:t("Thanks"),type:1}),n.map((h,f)=>v.jsxs(qm,{children:[v.jsxs(Hm,{children:[v.jsx($m,{className:"circle"}),v.jsx(Vm,{className:"heart"}),v.jsx(Wm,{tabIndex:0,role:"button",onClick:()=>window.open(h.url,"_blank","noopener,noreferrer"),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&window.open(h.url,"_blank","noopener,noreferrer")},onMouseEnter:p=>{const x=p.target.parentNode;x.querySelector(".circle").style.opacity=0,x.querySelector(".heart").style.opacity=1},onMouseLeave:p=>{const x=p.target.parentNode;x.querySelector(".circle").style.opacity=.8,x.querySelector(".heart").style.opacity=0},children:h.title[r]||h.title.en})]}),v.jsx(Gm,{children:h.text[r]||h.text.en})]},h.key)),o&&v.jsxs(Ym,{children:[v.jsx(Jm,{children:o.title[r]||o.title.en}),v.jsx(Qm,{children:o.text[r]||o.text.en}),v.jsx(Xm,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:((c=o.button)==null?void 0:c[r])||((l=o.button)==null?void 0:l.en)||"Github"})]})]})}const Km=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,eg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,tg=q.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function ii({title:e,value:t,onChange:r}){return v.jsxs(Km,{children:[v.jsx(eg,{children:e}),v.jsx(tg,{placeholder:e,value:t,onChange:r})]})}const rg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ng=q.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,ig=q.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function $u({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return v.jsxs(rg,{children:[v.jsx(ng,{placeholder:e,value:e,onChange:r}),v.jsx(ig,{placeholder:e,value:t,onChange:n})]})}const og=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ag=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,sg=q.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,lg=q.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,cg=q.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function pa({title:e,value:t,onClick:r}){const n=F.useRef(null);return v.jsxs(og,{"data-color-input":!0,children:[v.jsx(ag,{children:e}),v.jsxs(sg,{ref:n,onClick:()=>{const o=n.current.getBoundingClientRect();r({top:o.bottom+1+window.scrollY,left:o.left+window.scrollX})},children:[v.jsx(lg,{style:{backgroundColor:t}}),v.jsx(cg,{children:t})]})]})}function zs(){return(zs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f2(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function oc(e){var t=F.useRef(e),r=F.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var Sa=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},ba=function(e){return"touches"in e},ac=function(e){return e&&e.ownerDocument.defaultView||self},Vu=function(e,t,r){var n=e.getBoundingClientRect(),o=ba(t)?function(a,c){for(var l=0;l<a.length;l++)if(a[l].identifier===c)return a[l];return a[0]}(t.touches,r):t;return{left:Sa((o.pageX-(n.left+ac(e).pageXOffset))/n.width),top:Sa((o.pageY-(n.top+ac(e).pageYOffset))/n.height)}},Wu=function(e){!ba(e)&&e.preventDefault()},d2=Rr.memo(function(e){var t=e.onMove,r=e.onKey,n=f2(e,["onMove","onKey"]),o=F.useRef(null),a=oc(t),c=oc(r),l=F.useRef(null),h=F.useRef(!1),f=F.useMemo(function(){var d=function(k){Wu(k),(ba(k)?k.touches.length>0:k.buttons>0)&&o.current?a(Vu(o.current,k,l.current)):_(!1)},w=function(){return _(!1)};function _(k){var y=h.current,j=ac(o.current),T=k?j.addEventListener:j.removeEventListener;T(y?"touchmove":"mousemove",d),T(y?"touchend":"mouseup",w)}return[function(k){var y=k.nativeEvent,j=o.current;if(j&&(Wu(y),!function(E,V){return V&&!ba(E)}(y,h.current)&&j)){if(ba(y)){h.current=!0;var T=y.changedTouches||[];T.length&&(l.current=T[0].identifier)}j.focus(),a(Vu(j,y,l.current)),_(!0)}},function(k){var y=k.which||k.keyCode;y<37||y>40||(k.preventDefault(),c({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},_]},[c,a]),p=f[0],x=f[1],S=f[2];return F.useEffect(function(){return S},[S]),Rr.createElement("div",zs({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:o,onKeyDown:x,tabIndex:0,role:"slider"}))}),Nc=function(e){return e.filter(Boolean).join(" ")},p2=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,a=Nc(["react-colorful__pointer",e.className]);return Rr.createElement("div",{className:a,style:{top:100*o+"%",left:100*r+"%"}},Rr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},Cr=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},ug=function(e){return mg(sc(e))},sc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Cr(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Cr(parseInt(e.substring(6,8),16)/255,2):1}},hg=function(e){return pg(dg(e))},fg=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:Cr(e.h),s:Cr(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:Cr(o/2),a:Cr(n,2)}},lc=function(e){var t=fg(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},dg=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),c=n*(1-r),l=n*(1-(t-a)*r),h=n*(1-(1-t+a)*r),f=a%6;return{r:Cr(255*[n,l,c,c,h,n][f]),g:Cr(255*[h,n,n,l,c,c][f]),b:Cr(255*[c,c,h,n,n,l][f]),a:Cr(o,2)}},ls=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},pg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?ls(Cr(255*o)):"";return"#"+ls(t)+ls(r)+ls(n)+a},mg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),c=a-Math.min(t,r,n),l=c?a===t?(r-n)/c:a===r?2+(n-t)/c:4+(t-r)/c:0;return{h:Cr(60*(l<0?l+6:l)),s:Cr(a?c/a*100:0),v:Cr(a/255*100),a:o}},gg=Rr.memo(function(e){var t=e.hue,r=e.onChange,n=Nc(["react-colorful__hue",e.className]);return Rr.createElement("div",{className:n},Rr.createElement(d2,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:Sa(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":Cr(t),"aria-valuemax":"360","aria-valuemin":"0"},Rr.createElement(p2,{className:"react-colorful__hue-pointer",left:t/360,color:lc({h:t,s:100,v:100,a:1})})))}),vg=Rr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:lc({h:t.h,s:100,v:100,a:1})};return Rr.createElement("div",{className:"react-colorful__saturation",style:n},Rr.createElement(d2,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:Sa(t.s+100*o.left,0,100),v:Sa(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Cr(t.s)+"%, Brightness "+Cr(t.v)+"%"},Rr.createElement(p2,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:lc(t)})))}),m2=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},bg=function(e,t){return e.toLowerCase()===t.toLowerCase()||m2(sc(e),sc(t))};function xg(e,t,r){var n=oc(r),o=F.useState(function(){return e.toHsva(t)}),a=o[0],c=o[1],l=F.useRef({color:t,hsva:a});F.useEffect(function(){if(!e.equal(t,l.current.color)){var f=e.toHsva(t);l.current={hsva:f,color:t},c(f)}},[t,e]),F.useEffect(function(){var f;m2(a,l.current.hsva)||e.equal(f=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:f},n(f))},[a,e,n]);var h=F.useCallback(function(f){c(function(p){return Object.assign({},p,f)})},[]);return[a,h]}var wg=typeof window<"u"?F.useLayoutEffect:F.useEffect,yg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Gu=new Map,Sg=function(e){wg(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Gu.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Gu.set(t,r);var n=yg();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},_g=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,a=e.onChange,c=f2(e,["className","colorModel","color","onChange"]),l=F.useRef(null);Sg(l);var h=xg(r,o,a),f=h[0],p=h[1],x=Nc(["react-colorful",t]);return Rr.createElement("div",zs({},c,{ref:l,className:x}),Rr.createElement(vg,{hsva:f,onChange:p}),Rr.createElement(gg,{hue:f.h,onChange:p,className:"react-colorful__last-control"}))},Cg={defaultColor:"000",toHsva:ug,fromHsva:function(e){return hg({h:e.h,s:e.s,v:e.v,a:1})},equal:bg},Ag=function(e){return Rr.createElement(_g,zs({},e,{colorModel:Cg}))};const kg=q.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,Lg=q(Ag)`
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
`,Il=q.div`
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
`,Ng=q.div`
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
`,Ig=q.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Pg=q.input`
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
`,Eg=q(J5)`
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
`,Tg=q(X5)`
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
`,jg=q(cp)`
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
`,Rg=q(Y5)`
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
`,Mg=q.img`
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
`;function Og({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:o,onClose:a}){const[c,l]=F.useState(e),[h,f]=F.useState(!1),[p,x]=F.useState(null),S=F.useRef(null),d=F.useRef(null);function w(){f(!h)}function _(T){l(T.target.value===""?"#":T.target.value)}function k(T){const E=S.current,Z=d.current.getBoundingClientRect(),te=E.getContext("2d"),W=Math.floor(T.clientX-Z.left),D=Math.floor(T.clientY-Z.top),N=`#${[...te.getImageData(W,D,1,1).data].slice(0,3).map(O=>O.toString(16).padStart(2,"0")).join("")}`;l(N),w()}function y(T){const E=S.current,Z=d.current.getBoundingClientRect(),te=Math.floor(T.clientX-Z.left),W=Math.floor(T.clientY-Z.top);if(E){const D=E.getContext("2d");try{const N=`#${[...D.getImageData(te,W,1,1).data].slice(0,3).map(O=>O.toString(16).padStart(2,"0")).join("")}`;x(N)}catch{x(null)}}}function j(){x(null)}return v.jsxs(kg,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[v.jsx("canvas",{ref:S,style:{display:"none"}}),h?v.jsx(Mg,{ref:d,crossOrigin:"anonymous",draggable:"false",src:t,onClick:k,onMouseMove:y,onMouseLeave:j,onLoad:()=>{const T=S.current,E=T.getContext("2d"),V=d.current;T.width=V.width,T.height=V.height,E.drawImage(V,0,0,V.width,V.height)},style:p?{borderColor:p}:{}}):v.jsx(Lg,{color:c,onChange:l}),v.jsx(Il,{children:r.map(T=>v.jsx(Ng,{style:{backgroundColor:T},onClick:()=>l(T)},T))}),v.jsxs(Il,{children:[v.jsx(Ig,{children:"Hex"}),v.jsx(Pg,{value:c,onChange:_})]}),v.jsxs(Il,{children:[h?v.jsx(Tg,{onClick:w}):v.jsx(Eg,{onClick:w}),v.jsx(jg,{onClick:a}),v.jsx(Rg,{onClick:()=>{o(c),s5(c)}})]})]})}const Fg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Dg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Bg=q.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,zg=q.input`
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
`,Ug=q.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function cs({title:e,text:t,value:r,onChange:n}){const o=()=>n(!r);return v.jsxs(Fg,{children:[v.jsx(Dg,{children:e}),v.jsxs(Bg,{onClick:o,children:[v.jsx(zg,{checked:r,readOnly:!0,type:"checkbox"}),v.jsx(Ug,{active:r,children:t})]})]})}function qg(e){return Et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function Hg(e){return Et({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const $g=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Vg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Wg=q.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Gg=q.input`
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
`,Yg=q.p`
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
`,Jg=q(qg)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function Qg({title:e,text:t,onChange:r}){const n=F.useRef(),o=()=>{n.current.click()},a=c=>{const l=c.target.files[0];t=l.name,l&&r(l)};return v.jsxs($g,{onClick:o,children:[v.jsx(Vg,{children:e}),v.jsxs(Wg,{children:[v.jsx(Jg,{}),v.jsx(Gg,{ref:n,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:a}),v.jsx(Yg,{active:!0,children:t})]})]})}const Xg=q.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Zg=q.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Kg=q.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,e3=q.input`
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
`,t3=q.p`
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
`,r3=q(Hg)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function n3({title:e,text:t,onChange:r}){const n=F.useRef(),o=()=>{n.current.click()},a=c=>{const l=c.target.files[0];t=l.name,l&&r(l)};return v.jsxs(Xg,{onClick:o,children:[v.jsx(Zg,{children:e}),v.jsxs(Kg,{children:[v.jsx(r3,{}),v.jsx(e3,{ref:n,type:"file",accept:".ttf,.otf",onChange:a}),v.jsx(t3,{active:!0,children:t})]})]})}function g2(e){return Et({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const i3=q.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,o3=q.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,a3=q.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,s3=q(g2)`
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
`;function v2(){const{t:e}=fr();return v.jsxs(i3,{children:[v.jsx(s3,{}),v.jsx(o3,{children:e("Loading")}),v.jsx(a3,{children:e("LoadingText")})]})}var b2={},Us={},x2={exports:{}},l3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",c3=l3,u3=c3;function w2(){}function y2(){}y2.resetWarningCache=w2;var h3=function(){function e(n,o,a,c,l,h){if(h!==u3){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y2,resetWarningCache:w2};return r.PropTypes=r,r};x2.exports=h3();var S2=x2.exports,Ic={},qs={},_2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ff,function(){var r=function(h,f){return h<f?-1:h>f?1:0},n=function(h){return h.reduce(function(f,p){return f+p},0)},o=function(){function h(p){this.colors=p}var f=h.prototype;return f.palette=function(){return this.colors},f.map=function(p){return p},h}(),a=function(){function h(d,w,_){return(d<<10)+(w<<5)+_}function f(d){var w=[],_=!1;function k(){w.sort(d),_=!0}return{push:function(y){w.push(y),_=!1},peek:function(y){return _||k(),y===void 0&&(y=w.length-1),w[y]},pop:function(){return _||k(),w.pop()},size:function(){return w.length},map:function(y){return w.map(y)},debug:function(){return _||k(),w}}}function p(d,w,_,k,y,j,T){var E=this;E.r1=d,E.r2=w,E.g1=_,E.g2=k,E.b1=y,E.b2=j,E.histo=T}function x(){this.vboxes=new f(function(d,w){return r(d.vbox.count()*d.vbox.volume(),w.vbox.count()*w.vbox.volume())})}function S(d,w){if(w.count()){var _=w.r2-w.r1+1,k=w.g2-w.g1+1,y=Math.max.apply(null,[_,k,w.b2-w.b1+1]);if(w.count()==1)return[w.copy()];var j,T,E,V,Z=0,te=[],W=[];if(y==_)for(j=w.r1;j<=w.r2;j++){for(V=0,T=w.g1;T<=w.g2;T++)for(E=w.b1;E<=w.b2;E++)V+=d[h(j,T,E)]||0;te[j]=Z+=V}else if(y==k)for(j=w.g1;j<=w.g2;j++){for(V=0,T=w.r1;T<=w.r2;T++)for(E=w.b1;E<=w.b2;E++)V+=d[h(T,j,E)]||0;te[j]=Z+=V}else for(j=w.b1;j<=w.b2;j++){for(V=0,T=w.r1;T<=w.r2;T++)for(E=w.g1;E<=w.g2;E++)V+=d[h(T,E,j)]||0;te[j]=Z+=V}return te.forEach(function(D,X){W[X]=Z-D}),function(D){var X,N,O,J,Y,ae=D+"1",he=D+"2",fe=0;for(j=w[ae];j<=w[he];j++)if(te[j]>Z/2){for(O=w.copy(),J=w.copy(),Y=(X=j-w[ae])<=(N=w[he]-j)?Math.min(w[he]-1,~~(j+N/2)):Math.max(w[ae],~~(j-1-X/2));!te[Y];)Y++;for(fe=W[Y];!fe&&te[Y-1];)fe=W[--Y];return O[he]=Y,J[ae]=O[he]+1,[O,J]}}(y==_?"r":y==k?"g":"b")}}return p.prototype={volume:function(d){var w=this;return w._volume&&!d||(w._volume=(w.r2-w.r1+1)*(w.g2-w.g1+1)*(w.b2-w.b1+1)),w._volume},count:function(d){var w=this,_=w.histo;if(!w._count_set||d){var k,y,j,T=0;for(k=w.r1;k<=w.r2;k++)for(y=w.g1;y<=w.g2;y++)for(j=w.b1;j<=w.b2;j++)T+=_[h(k,y,j)]||0;w._count=T,w._count_set=!0}return w._count},copy:function(){var d=this;return new p(d.r1,d.r2,d.g1,d.g2,d.b1,d.b2,d.histo)},avg:function(d){var w=this,_=w.histo;if(!w._avg||d){var k,y,j,T,E=0,V=0,Z=0,te=0;if(w.r1===w.r2&&w.g1===w.g2&&w.b1===w.b2)w._avg=[w.r1<<3,w.g1<<3,w.b1<<3];else{for(y=w.r1;y<=w.r2;y++)for(j=w.g1;j<=w.g2;j++)for(T=w.b1;T<=w.b2;T++)E+=k=_[h(y,j,T)]||0,V+=k*(y+.5)*8,Z+=k*(j+.5)*8,te+=k*(T+.5)*8;w._avg=E?[~~(V/E),~~(Z/E),~~(te/E)]:[~~(8*(w.r1+w.r2+1)/2),~~(8*(w.g1+w.g2+1)/2),~~(8*(w.b1+w.b2+1)/2)]}}return w._avg},contains:function(d){var w=this,_=d[0]>>3;return gval=d[1]>>3,bval=d[2]>>3,_>=w.r1&&_<=w.r2&&gval>=w.g1&&gval<=w.g2&&bval>=w.b1&&bval<=w.b2}},x.prototype={push:function(d){this.vboxes.push({vbox:d,color:d.avg()})},palette:function(){return this.vboxes.map(function(d){return d.color})},size:function(){return this.vboxes.size()},map:function(d){for(var w=this.vboxes,_=0;_<w.size();_++)if(w.peek(_).vbox.contains(d))return w.peek(_).color;return this.nearest(d)},nearest:function(d){for(var w,_,k,y=this.vboxes,j=0;j<y.size();j++)((_=Math.sqrt(Math.pow(d[0]-y.peek(j).color[0],2)+Math.pow(d[1]-y.peek(j).color[1],2)+Math.pow(d[2]-y.peek(j).color[2],2)))<w||w===void 0)&&(w=_,k=y.peek(j).color);return k},forcebw:function(){var d=this.vboxes;d.sort(function(y,j){return r(n(y.color),n(j.color))});var w=d[0].color;w[0]<5&&w[1]<5&&w[2]<5&&(d[0].color=[0,0,0]);var _=d.length-1,k=d[_].color;k[0]>251&&k[1]>251&&k[2]>251&&(d[_].color=[255,255,255])}},{quantize:function(d,w){if(!Number.isInteger(w)||w<1||w>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!d.length||w<2||w>256||!d.length||w<2||w>256)return!1;for(var _=[],k=new Set,y=0;y<d.length;y++){var j=d[y],T=j.join(",");k.has(T)||(k.add(T),_.push(j))}if(_.length<=w)return new o(_);var E=function(X){var N,O=new Array(32768);return X.forEach(function(J){N=h(J[0]>>3,J[1]>>3,J[2]>>3),O[N]=(O[N]||0)+1}),O}(d);E.forEach(function(){});var V=function(X,N){var O,J,Y,ae=1e6,he=0,fe=1e6,se=0,me=1e6,Ie=0;return X.forEach(function(_e){(O=_e[0]>>3)<ae?ae=O:O>he&&(he=O),(J=_e[1]>>3)<fe?fe=J:J>se&&(se=J),(Y=_e[2]>>3)<me?me=Y:Y>Ie&&(Ie=Y)}),new p(ae,he,fe,se,me,Ie,N)}(d,E),Z=new f(function(X,N){return r(X.count(),N.count())});function te(X,N){for(var O,J=X.size(),Y=0;Y<1e3;){if(J>=N||Y++>1e3)return;if((O=X.pop()).count()){var ae=S(E,O),he=ae[0],fe=ae[1];if(!he)return;X.push(he),fe&&(X.push(fe),J++)}else X.push(O),Y++}}Z.push(V),te(Z,.75*w);for(var W=new f(function(X,N){return r(X.count()*X.volume(),N.count()*N.volume())});Z.size();)W.push(Z.pop());te(W,w);for(var D=new x;W.size();)D.push(W.pop());return D}}}().quantize,c=function(h){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=h.naturalWidth,this.height=this.canvas.height=h.naturalHeight,this.context.drawImage(h,0,0,this.width,this.height)};c.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var l=function(){};return l.prototype.getColor=function(h,f){return f===void 0&&(f=10),this.getPalette(h,5,f)[0]},l.prototype.getPalette=function(h,f,p){var x=function(_){var k=_.colorCount,y=_.quality;if(k!==void 0&&Number.isInteger(k)){if(k===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");k=Math.max(k,2),k=Math.min(k,20)}else k=10;return(y===void 0||!Number.isInteger(y)||y<1)&&(y=10),{colorCount:k,quality:y}}({colorCount:f,quality:p}),S=new c(h),d=function(_,k,y){for(var j,T,E,V,Z,te=_,W=[],D=0;D<k;D+=y)T=te[0+(j=4*D)],E=te[j+1],V=te[j+2],((Z=te[j+3])===void 0||Z>=125)&&(T>250&&E>250&&V>250||W.push([T,E,V]));return W}(S.getImageData().data,S.width*S.height,x.quality),w=a(d,x.colorCount);return w?w.palette():null},l.prototype.getColorFromUrl=function(h,f,p){var x=this,S=document.createElement("img");S.addEventListener("load",function(){var d=x.getPalette(S,5,p);f(d[0],h)}),S.src=h},l.prototype.getImageData=function(h,f){var p=new XMLHttpRequest;p.open("GET",h,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var x=new Uint8Array(this.response);i=x.length;for(var S=new Array(i),d=0;d<x.length;d++)S[d]=String.fromCharCode(x[d]);var w=S.join(""),_=window.btoa(w);f("data:image/png;base64,"+_)}},p.send()},l.prototype.getColorAsync=function(h,f,p){var x=this;this.getImageData(h,function(S){var d=document.createElement("img");d.addEventListener("load",function(){var w=x.getPalette(d,5,p);f(w[0],this)}),d.src=S})},l})})(_2);var C2=_2.exports,Hs={},Pc={};Object.defineProperty(Pc,"__esModule",{value:!0});Pc.default=f3;function f3(e,t,r){return`rgb(${e}, ${t}, ${r})`}var Ec={};Object.defineProperty(Ec,"__esModule",{value:!0});Ec.default=d3;function d3(e,t,r){return`#${[e,t,r].map(n=>{const o=n.toString(16);return o.length===1?`0${o}`:o}).join("")}`}Object.defineProperty(Hs,"__esModule",{value:!0});Hs.default=g3;var p3=A2(Pc),m3=A2(Ec);function A2(e){return e&&e.__esModule?e:{default:e}}function g3(e,t){switch(t){case"rgbString":return(0,p3.default)(e[0],e[1],e[2]);case"hex":return(0,m3.default)(e[0],e[1],e[2]);default:return e}}var $s={};Object.defineProperty($s,"__esModule",{value:!0});$s.default=v3;function v3(e,t=void 0){return new Promise((r,n)=>{const o=new Image;o.addEventListener("load",()=>{r(o)}),o.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),o.crossOrigin=t,o.src=e})}Object.defineProperty(qs,"__esModule",{value:!0});qs.default=y3;var b3=Tc(C2),x3=Tc(Hs),w3=Tc($s);function Tc(e){return e&&e.__esModule?e:{default:e}}async function y3(e,t="rgbString",r=null,n=10){const o=await(0,w3.default)(e,r),c=new b3.default().getColor(o,n);return(0,x3.default)(c,t)}Object.defineProperty(Ic,"__esModule",{value:!0});Ic.default=A3;var Yu=F,S3=_3(qs);function _3(e){return e&&e.__esModule?e:{default:e}}const k2={loading:!0,data:null,error:void 0};function C3(e,t){switch(t.type){case"getColor":return k2;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function A3(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:o=10}=r,[a,c]=(0,Yu.useReducer)(C3,k2);return(0,Yu.useEffect)(()=>{c({type:"getColor"}),(0,S3.default)(e,t,n,o).then(l=>{c({type:"resolveColor",payload:l})}).catch(l=>{c({type:"rejectColor",payload:l})})},[e]),a}Object.defineProperty(Us,"__esModule",{value:!0});Us.default=void 0;var Ju=jc(F),ma=jc(S2),k3=jc(Ic);function jc(e){return e&&e.__esModule?e:{default:e}}const Rc=({src:e,format:t,crossOrigin:r,quality:n,children:o})=>{const a=(0,k3.default)(e,t,{crossOrigin:r,quality:n});return Ju.default.createElement(Ju.default.Fragment,null,o(a))};Rc.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Rc.propTypes={children:ma.default.any.isRequired,src:ma.default.string.isRequired,format:ma.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:ma.default.string,quality:ma.default.number};var L3=Rc;Us.default=L3;var Vs={},Mc={},Ws={};Object.defineProperty(Ws,"__esModule",{value:!0});Ws.default=E3;var N3=Oc(C2),I3=Oc(Hs),P3=Oc($s);function Oc(e){return e&&e.__esModule?e:{default:e}}async function E3(e,t=2,r="rgbString",n=null,o=10){const a=await(0,P3.default)(e,n);return new N3.default().getPalette(a,t,o).map(h=>(0,I3.default)(h,r))}Object.defineProperty(Mc,"__esModule",{value:!0});Mc.default=M3;var Qu=F,T3=j3(Ws);function j3(e){return e&&e.__esModule?e:{default:e}}const L2={loading:!0,data:[],error:void 0};function R3(e,t){switch(t.type){case"getPalette":return L2;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function M3(e,t=2,r="rgbString",n={}){const{crossOrigin:o=null,quality:a=10}=n,[c,l]=(0,Qu.useReducer)(R3,L2);return(0,Qu.useEffect)(()=>{l({type:"getPalette"}),(0,T3.default)(e,t,r,o,a).then(h=>{l({type:"resolvePalette",payload:h})}).catch(h=>{l({type:"rejectPalette",payload:h})})},[e]),c}Object.defineProperty(Vs,"__esModule",{value:!0});Vs.default=void 0;var Xu=Fc(F),No=Fc(S2),O3=Fc(Mc);function Fc(e){return e&&e.__esModule?e:{default:e}}const Dc=({src:e,colorCount:t,format:r,crossOrigin:n,quality:o,children:a})=>{const c=(0,O3.default)(e,t,r,{crossOrigin:n,quality:o});return Xu.default.createElement(Xu.default.Fragment,null,a(c))};Dc.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};Dc.propTypes={children:No.default.any.isRequired,src:No.default.string.isRequired,format:No.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:No.default.number,crossOrigin:No.default.string,quality:No.default.number};var F3=Dc;Vs.default=F3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return o.default}}),e.default=void 0;var t=a(Us),r=a(Vs),n=a(qs),o=a(Ws);function a(l){return l&&l.__esModule?l:{default:l}}var c=t.default;e.default=c})(b2);const D3=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,N2=F.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,customFont:o},a)=>{const c=F.useRef(null);return F.useImperativeHandle(a,()=>({getCanvas:()=>c.current})),F.useEffect(()=>{(async()=>{if(!r)return;const h=c.current,f=h.getContext("2d"),p=2480,x=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0;const S=async E=>{const V=new Image;return V.crossOrigin="anonymous",V.src=E,new Promise(Z=>{V.onload=()=>{if(f.drawImage(V,t.marginCover,t.marginCover,p-t.marginCover*2,p-t.marginCover*2),t.useFade){let te=f.createLinearGradient(0,0,0,3e3-t.marginBackground);const W=k(t.backgroundColor);te.addColorStop(.5,`rgba(${W.r}, ${W.g}, ${W.b}, 0)`),te.addColorStop(.8,t.backgroundColor),f.fillStyle=te,f.fillRect(0,0,h.width,2500-t.marginBackground)}Z()}})},d=async()=>{const E=D3(t.textColor,500,134),V=new Blob([E],{type:"image/svg+xml;charset=utf-8"}),Z=URL.createObjectURL(V),te=new Image;return te.src=Z,new Promise(W=>{te.onload=()=>{f.globalAlpha="0.5",f.drawImage(te,p-70-500,50,500,134),f.globalAlpha="1",URL.revokeObjectURL(Z),W()}})},w=async()=>{let E=t.titleSize?parseInt(t.titleSize):230;const V=o||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){f.font=`bold ${E}px ${V}`;let W=f.measureText(t.albumName).width;for(;W>2480-t.marginSide*2;)E-=1,f.font=`bold ${E}px ${V}`,W=f.measureText(t.albumName).width;n(E,!0)}else f.font=`bold ${E}px ${V}`;f.fillStyle=t.textColor,t.showTracklist?f.fillText(t.albumName,t.marginSide,2500+t.marginTop):f.fillText(t.albumName,t.marginSide,2790+t.marginTop);let Z=t.artistsSize?parseInt(t.artistsSize):110;f.font=`bold ${Z}px ${o||"Montserrat"}`,t.showTracklist?f.fillText(t.artistsName,t.marginSide,2500+t.marginTop+Z*1.3):f.fillText(t.artistsName,t.marginSide,2820+t.marginTop+Z),f.font=`bold 70px ${o||"Montserrat"}`,f.fillText(t.titleRelease,t.marginSide,3310);let te=f.measureText(t.titleRelease).width;f.fillText(t.titleRuntime,te+t.marginSide+100,3310),f.globalAlpha=.7,f.font=`bold 60px ${o||"Montserrat"}`,f.fillText(t.runtime,te+t.marginSide+100,3390),f.fillText(t.releaseDate,t.marginSide,3390),f.globalAlpha=1,f.fillStyle=t.color1,f.fillRect(2045-t.marginSide,3368,145,30),f.fillStyle=t.color2,f.fillRect(2190-t.marginSide,3368,145,30),f.fillStyle=t.color3,f.fillRect(2335-t.marginSide,3368,145,30)},_=async()=>{f.fillStyle=t.textColor;let E=t.marginSide+10,V=0,Z=0;const te=t.tracksSize?parseInt(t.tracksSize):50;f.font=`bold ${te}px ${o||"Montserrat"}`;const W=te,D=parseInt(t.marginTop||0),X=parseInt(t.artistsSize)?2500+D+parseInt(t.artistsSize)*1.3+130:2500+D+110*1.2+130,N=500,O=p-t.marginSide*2,J=parseInt(t.marginSide),Y=X+N-10-parseInt(t.marginTop);let ae=X;t.tracklist.split(`
`).forEach(he=>{if(ae+W*1.3>=Y){if(ae=X,E=V+W*2.5+Z,E>=J+O)return;Z=E-W*2.5,V=0}const fe=f.measureText(`${he}`).width+t.marginSide;fe>V&&(V=fe),f.fillText(`${he}`,E,ae),ae+=W*1.3})},k=E=>{const V=parseInt(E.replace("#",""),16);return{r:V>>16&255,g:V>>8&255,b:V&255}},y=E=>{const V=te=>{const W=te/255;return W<=.03928?W/12.92:Math.pow((W+.055)/1.055,2.4)};return .2126*V(E.r)+.7152*V(E.g)+.0722*V(E.b)>.179?"black":"white"},j=async()=>{const E=k(t.backgroundColor),V=y(E),Z=t.textColor,te=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${V}/640/spotify:album:${t.albumID}`;let D=await(await fetch(te)).text();V=="black"?D=D.replace(/fill="#000000"/g,`fill="${Z}"`):D=D.replace(/fill="#ffffff"/g,`fill="${Z}"`),D=D.replace(t.backgroundColor,"transparent");const X=new Blob([D],{type:"image/svg+xml"}),N=URL.createObjectURL(X);return new Promise(O=>{const J=new Image;J.src=N,J.onload=function(){f.drawImage(J,2020-t.marginSide,3235,480,120);const Y=h.toDataURL("image/png");e(Y),O()}})},T=async()=>{f.fillStyle=t.backgroundColor,f.fillRect(0,2480-t.marginBackground,p,x-2480+t.marginBackground)};f.clearRect(0,0,p,x),f.fillStyle=t.backgroundColor,f.fillRect(0,0,p,x),t.useUncompressed?await S(await t.uncompressedAlbumCover):await S(t.albumCover),await T(),await w(),t.showTracklist&&await _(),t.useWatermark&&await d(),await j()})()},[r,t,e]),v.jsx("canvas",{ref:c,width:2480,height:3508,style:{display:"none"}})});N2.displayName="CanvasPoster";const B3=q.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Ut({children:e,animationDelay:t=0,...r}){const[n,o]=F.useState(!1);return F.useEffect(()=>{const a=setTimeout(()=>{o(!0)},t);return()=>clearTimeout(a)},[t]),v.jsx(B3,{visible:n,animationDelay:t,...r,children:e})}const z3="modulepreload",U3=function(e){return"/"+e},Zu={},Pl=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(r.map(h=>{if(h=U3(h),h in Zu)return;Zu[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":z3,f||(x.as="script"),x.crossOrigin="",x.href=h,l&&x.setAttribute("nonce",l),document.head.appendChild(x),f)return new Promise((S,d)=>{x.addEventListener("load",S),x.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return o.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};function Pt(e){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(e)}var Ln=Uint8Array,cn=Uint16Array,Bc=Int32Array,zc=new Ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Uc=new Ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ku=new Ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),I2=function(e,t){for(var r=new cn(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new Bc(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},P2=I2(zc,2),q3=P2.b,cc=P2.r;q3[28]=258,cc[258]=28;var H3=I2(Uc,0),e1=H3.r,uc=new cn(32768);for(var qt=0;qt<32768;++qt){var Ti=(qt&43690)>>1|(qt&21845)<<1;Ti=(Ti&52428)>>2|(Ti&13107)<<2,Ti=(Ti&61680)>>4|(Ti&3855)<<4,uc[qt]=((Ti&65280)>>8|(Ti&255)<<8)>>1}var xa=function(e,t,r){for(var n=e.length,o=0,a=new cn(t);o<n;++o)e[o]&&++a[e[o]-1];var c=new cn(t);for(o=1;o<t;++o)c[o]=c[o-1]+a[o-1]<<1;var l;if(r){l=new cn(1<<t);var h=15-t;for(o=0;o<n;++o)if(e[o])for(var f=o<<4|e[o],p=t-e[o],x=c[e[o]-1]++<<p,S=x|(1<<p)-1;x<=S;++x)l[uc[x]>>h]=f}else for(l=new cn(n),o=0;o<n;++o)e[o]&&(l[o]=uc[c[e[o]-1]++]>>15-e[o]);return l},uo=new Ln(288);for(var qt=0;qt<144;++qt)uo[qt]=8;for(var qt=144;qt<256;++qt)uo[qt]=9;for(var qt=256;qt<280;++qt)uo[qt]=7;for(var qt=280;qt<288;++qt)uo[qt]=8;var Ts=new Ln(32);for(var qt=0;qt<32;++qt)Ts[qt]=5;var $3=xa(uo,9,0),V3=xa(Ts,5,0),E2=function(e){return(e+7)/8|0},W3=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Ln(e.subarray(t,r))},oi=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},ga=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},El=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,a=r.slice();if(!o)return{t:j2,l:0};if(o==1){var c=new Ln(r[0].s+1);return c[r[0].s]=1,{t:c,l:1}}r.sort(function(V,Z){return V.f-Z.f}),r.push({s:-1,f:25001});var l=r[0],h=r[1],f=0,p=1,x=2;for(r[0]={s:-1,f:l.f+h.f,l,r:h};p!=o-1;)l=r[r[f].f<r[x].f?f++:x++],h=r[f!=p&&r[f].f<r[x].f?f++:x++],r[p++]={s:-1,f:l.f+h.f,l,r:h};for(var S=a[0].s,n=1;n<o;++n)a[n].s>S&&(S=a[n].s);var d=new cn(S+1),w=hc(r[p-1],d,0);if(w>t){var n=0,_=0,k=w-t,y=1<<k;for(a.sort(function(Z,te){return d[te.s]-d[Z.s]||Z.f-te.f});n<o;++n){var j=a[n].s;if(d[j]>t)_+=y-(1<<w-d[j]),d[j]=t;else break}for(_>>=k;_>0;){var T=a[n].s;d[T]<t?_-=1<<t-d[T]++-1:++n}for(;n>=0&&_;--n){var E=a[n].s;d[E]==t&&(--d[E],++_)}w=t}return{t:new Ln(d),l:w}},hc=function(e,t,r){return e.s==-1?Math.max(hc(e.l,t,r+1),hc(e.r,t,r+1)):t[e.s]=r},t1=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new cn(++t),n=0,o=e[0],a=1,c=function(h){r[n++]=h},l=1;l<=t;++l)if(e[l]==o&&l!=t)++a;else{if(!o&&a>2){for(;a>138;a-=138)c(32754);a>2&&(c(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(c(o),--a;a>6;a-=6)c(8304);a>2&&(c(a-3<<5|8208),a=0)}for(;a--;)c(o);a=1,o=e[l]}return{c:r.subarray(0,n),n:t}},va=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},T2=function(e,t,r){var n=r.length,o=E2(t+2);e[o]=n&255,e[o+1]=n>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<n;++a)e[o+a+4]=r[a];return(o+4+n)*8},r1=function(e,t,r,n,o,a,c,l,h,f,p){oi(t,p++,r),++o[256];for(var x=El(o,15),S=x.t,d=x.l,w=El(a,15),_=w.t,k=w.l,y=t1(S),j=y.c,T=y.n,E=t1(_),V=E.c,Z=E.n,te=new cn(19),W=0;W<j.length;++W)++te[j[W]&31];for(var W=0;W<V.length;++W)++te[V[W]&31];for(var D=El(te,7),X=D.t,N=D.l,O=19;O>4&&!X[Ku[O-1]];--O);var J=f+5<<3,Y=va(o,uo)+va(a,Ts)+c,ae=va(o,S)+va(a,_)+c+14+3*O+va(te,X)+2*te[16]+3*te[17]+7*te[18];if(h>=0&&J<=Y&&J<=ae)return T2(t,p,e.subarray(h,h+f));var he,fe,se,me;if(oi(t,p,1+(ae<Y)),p+=2,ae<Y){he=xa(S,d,0),fe=S,se=xa(_,k,0),me=_;var Ie=xa(X,N,0);oi(t,p,T-257),oi(t,p+5,Z-1),oi(t,p+10,O-4),p+=14;for(var W=0;W<O;++W)oi(t,p+3*W,X[Ku[W]]);p+=3*O;for(var _e=[j,V],P=0;P<2;++P)for(var H=_e[P],W=0;W<H.length;++W){var G=H[W]&31;oi(t,p,Ie[G]),p+=X[G],G>15&&(oi(t,p,H[W]>>5&127),p+=H[W]>>12)}}else he=$3,fe=uo,se=V3,me=Ts;for(var W=0;W<l;++W){var K=n[W];if(K>255){var G=K>>18&31;ga(t,p,he[G+257]),p+=fe[G+257],G>7&&(oi(t,p,K>>23&31),p+=zc[G]);var ne=K&31;ga(t,p,se[ne]),p+=me[ne],ne>3&&(ga(t,p,K>>5&8191),p+=Uc[ne])}else ga(t,p,he[K]),p+=fe[K]}return ga(t,p,he[256]),p+fe[256]},G3=new Bc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),j2=new Ln(0),Y3=function(e,t,r,n,o,a){var c=a.z||e.length,l=new Ln(n+c+5*(1+Math.ceil(c/7e3))+o),h=l.subarray(n,l.length-o),f=a.l,p=(a.r||0)&7;if(t){p&&(h[0]=a.r>>3);for(var x=G3[t-1],S=x>>13,d=x&8191,w=(1<<r)-1,_=a.p||new cn(32768),k=a.h||new cn(w+1),y=Math.ceil(r/3),j=2*y,T=function(ve){return(e[ve]^e[ve+1]<<y^e[ve+2]<<j)&w},E=new Bc(25e3),V=new cn(288),Z=new cn(32),te=0,W=0,D=a.i||0,X=0,N=a.w||0,O=0;D+2<c;++D){var J=T(D),Y=D&32767,ae=k[J];if(_[Y]=ae,k[J]=Y,N<=D){var he=c-D;if((te>7e3||X>24576)&&(he>423||!f)){p=r1(e,h,0,E,V,Z,W,X,O,D-O,p),X=te=W=0,O=D;for(var fe=0;fe<286;++fe)V[fe]=0;for(var fe=0;fe<30;++fe)Z[fe]=0}var se=2,me=0,Ie=d,_e=Y-ae&32767;if(he>2&&J==T(D-_e))for(var P=Math.min(S,he)-1,H=Math.min(32767,D),G=Math.min(258,he);_e<=H&&--Ie&&Y!=ae;){if(e[D+se]==e[D+se-_e]){for(var K=0;K<G&&e[D+K]==e[D+K-_e];++K);if(K>se){if(se=K,me=_e,K>P)break;for(var ne=Math.min(_e,K-2),ce=0,fe=0;fe<ne;++fe){var pe=D-_e+fe&32767,de=_[pe],ye=pe-de&32767;ye>ce&&(ce=ye,ae=pe)}}}Y=ae,ae=_[Y],_e+=Y-ae&32767}if(me){E[X++]=268435456|cc[se]<<18|e1[me];var Ne=cc[se]&31,je=e1[me]&31;W+=zc[Ne]+Uc[je],++V[257+Ne],++Z[je],N=D+se,++te}else E[X++]=e[D],++V[e[D]]}}for(D=Math.max(D,N);D<c;++D)E[X++]=e[D],++V[e[D]];p=r1(e,h,f,E,V,Z,W,X,O,D-O,p),f||(a.r=p&7|h[p/8|0]<<3,p-=7,a.h=k,a.p=_,a.i=D,a.w=N)}else{for(var D=a.w||0;D<c+f;D+=65535){var Te=D+65535;Te>=c&&(h[p/8|0]=f,Te=c),p=T2(h,p+1,e.subarray(D,Te))}a.i=c}return W3(l,0,n+E2(p)+o)},R2=function(){var e=1,t=0;return{p:function(r){for(var n=e,o=t,a=r.length|0,c=0;c!=a;){for(var l=Math.min(c+2655,a);c<l;++c)o+=n+=r[c];n=(n&65535)+15*(n>>16),o=(o&65535)+15*(o>>16)}e=n,t=o},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},J3=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),c=new Ln(a.length+e.length);c.set(a),c.set(e,a.length),e=c,o.w=a.length}return Y3(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,o)},M2=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},Q3=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var o=R2();o.p(t.dictionary),M2(e,2,o.d())}};function fc(e,t){t||(t={});var r=R2();r.p(e);var n=J3(e,t,t.dictionary?6:2,4);return Q3(n,t),M2(n,n.length-4,r.d()),n}var X3=typeof TextDecoder<"u"&&new TextDecoder,Z3=0;try{X3.decode(j2,{stream:!0}),Z3=1}catch{}function K3(e){if(Array.isArray(e))return e}function e4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,a,c,l=[],h=!0,f=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(h=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);h=!0);}catch(p){f=!0,o=p}finally{try{if(!h&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(f)throw o}}return l}}function n1(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t4(e,t){if(e){if(typeof e=="string")return n1(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n1(e,t):void 0}}function r4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i1(e,t){return K3(e)||e4(e,t)||t4(e,t)||r4()}function o1(e,t="utf8"){return new TextDecoder(t).decode(e)}const n4=new TextEncoder;function i4(e){return n4.encode(e)}const o4=1024*8,a4=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),Tl={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class qc{constructor(t=o4,r={}){Pe(this,"buffer");Pe(this,"byteLength");Pe(this,"byteOffset");Pe(this,"length");Pe(this,"offset");Pe(this,"lastWrittenByte");Pe(this,"littleEndian");Pe(this,"_data");Pe(this,"_mark");Pe(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const o=r.offset?r.offset>>>0:0,a=t.byteLength-o;let c=o;(ArrayBuffer.isView(t)||t instanceof qc)&&(t.byteLength!==t.buffer.byteLength&&(c=t.byteOffset+o),t=t.buffer),n?this.lastWrittenByte=a:this.lastWrittenByte=0,this.buffer=t,this.length=a,this.byteLength=a,this.byteOffset=c,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,c,a),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,o=new Uint8Array(n);o.set(new Uint8Array(this.buffer)),this.buffer=o.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=Tl[r].BYTES_PER_ELEMENT*t,o=this.byteOffset+this.offset,a=this.buffer.slice(o,o+n);if(this.littleEndian===a4&&r!=="uint8"&&r!=="int8"){const l=new Uint8Array(this.buffer.slice(o,o+n));l.reverse();const h=new Tl[r](l.buffer);return this.offset+=n,h.reverse(),h}const c=new Tl[r](a);return this.offset+=n,c}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return o1(this.readBytes(t))}decodeText(t=1,r="utf8"){return o1(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(i4(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function Uo(e){let t=e.length;for(;--t>=0;)e[t]=0}const s4=3,l4=258,O2=29,c4=256,u4=c4+1+O2,F2=30,h4=512,f4=new Array((u4+2)*2);Uo(f4);const d4=new Array(F2*2);Uo(d4);const p4=new Array(h4);Uo(p4);const m4=new Array(l4-s4+1);Uo(m4);const g4=new Array(O2);Uo(g4);const v4=new Array(F2);Uo(v4);const b4=(e,t,r,n)=>{let o=e&65535|0,a=e>>>16&65535|0,c=0;for(;r!==0;){c=r>2e3?2e3:r,r-=c;do o=o+t[n++]|0,a=a+o|0;while(--c);o%=65521,a%=65521}return o|a<<16|0};var dc=b4;const x4=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},w4=new Uint32Array(x4()),y4=(e,t,r,n)=>{const o=w4,a=n+r;e^=-1;for(let c=n;c<a;c++)e=e>>>8^o[(e^t[c])&255];return e^-1};var On=y4,pc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},D2={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const S4=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var _4=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)S4(r,n)&&(e[n]=r[n])}}return e},C4=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,o=0,a=e.length;n<a;n++){let c=e[n];r.set(c,o),o+=c.length}return r},B2={assign:_4,flattenChunks:C4};let z2=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{z2=!1}const _a=new Uint8Array(256);for(let e=0;e<256;e++)_a[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;_a[254]=_a[254]=1;var A4=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,o,a,c=e.length,l=0;for(o=0;o<c;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),l+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(l),a=0,o=0;a<l;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t};const k4=(e,t)=>{if(t<65534&&e.subarray&&z2)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var L4=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,o;const a=new Array(r*2);for(o=0,n=0;n<r;){let c=e[n++];if(c<128){a[o++]=c;continue}let l=_a[c];if(l>4){a[o++]=65533,n+=l-1;continue}for(c&=l===2?31:l===3?15:7;l>1&&n<r;)c=c<<6|e[n++]&63,l--;if(l>1){a[o++]=65533;continue}c<65536?a[o++]=c:(c-=65536,a[o++]=55296|c>>10&1023,a[o++]=56320|c&1023)}return k4(a,o)},N4=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+_a[e[r]]>t?r:t},mc={string2buf:A4,buf2string:L4,utf8border:N4};function I4(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var P4=I4;const us=16209,E4=16191;var T4=function(t,r){let n,o,a,c,l,h,f,p,x,S,d,w,_,k,y,j,T,E,V,Z,te,W,D,X;const N=t.state;n=t.next_in,D=t.input,o=n+(t.avail_in-5),a=t.next_out,X=t.output,c=a-(r-t.avail_out),l=a+(t.avail_out-257),h=N.dmax,f=N.wsize,p=N.whave,x=N.wnext,S=N.window,d=N.hold,w=N.bits,_=N.lencode,k=N.distcode,y=(1<<N.lenbits)-1,j=(1<<N.distbits)-1;e:do{w<15&&(d+=D[n++]<<w,w+=8,d+=D[n++]<<w,w+=8),T=_[d&y];t:for(;;){if(E=T>>>24,d>>>=E,w-=E,E=T>>>16&255,E===0)X[a++]=T&65535;else if(E&16){V=T&65535,E&=15,E&&(w<E&&(d+=D[n++]<<w,w+=8),V+=d&(1<<E)-1,d>>>=E,w-=E),w<15&&(d+=D[n++]<<w,w+=8,d+=D[n++]<<w,w+=8),T=k[d&j];r:for(;;){if(E=T>>>24,d>>>=E,w-=E,E=T>>>16&255,E&16){if(Z=T&65535,E&=15,w<E&&(d+=D[n++]<<w,w+=8,w<E&&(d+=D[n++]<<w,w+=8)),Z+=d&(1<<E)-1,Z>h){t.msg="invalid distance too far back",N.mode=us;break e}if(d>>>=E,w-=E,E=a-c,Z>E){if(E=Z-E,E>p&&N.sane){t.msg="invalid distance too far back",N.mode=us;break e}if(te=0,W=S,x===0){if(te+=f-E,E<V){V-=E;do X[a++]=S[te++];while(--E);te=a-Z,W=X}}else if(x<E){if(te+=f+x-E,E-=x,E<V){V-=E;do X[a++]=S[te++];while(--E);if(te=0,x<V){E=x,V-=E;do X[a++]=S[te++];while(--E);te=a-Z,W=X}}}else if(te+=x-E,E<V){V-=E;do X[a++]=S[te++];while(--E);te=a-Z,W=X}for(;V>2;)X[a++]=W[te++],X[a++]=W[te++],X[a++]=W[te++],V-=3;V&&(X[a++]=W[te++],V>1&&(X[a++]=W[te++]))}else{te=a-Z;do X[a++]=X[te++],X[a++]=X[te++],X[a++]=X[te++],V-=3;while(V>2);V&&(X[a++]=X[te++],V>1&&(X[a++]=X[te++]))}}else if(E&64){t.msg="invalid distance code",N.mode=us;break e}else{T=k[(T&65535)+(d&(1<<E)-1)];continue r}break}}else if(E&64)if(E&32){N.mode=E4;break e}else{t.msg="invalid literal/length code",N.mode=us;break e}else{T=_[(T&65535)+(d&(1<<E)-1)];continue t}break}}while(n<o&&a<l);V=w>>3,n-=V,w-=V<<3,d&=(1<<w)-1,t.next_in=n,t.next_out=a,t.avail_in=n<o?5+(o-n):5-(n-o),t.avail_out=a<l?257+(l-a):257-(a-l),N.hold=d,N.bits=w};const Io=15,a1=852,s1=592,l1=0,jl=1,c1=2,j4=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),R4=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),M4=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),O4=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),F4=(e,t,r,n,o,a,c,l)=>{const h=l.bits;let f=0,p=0,x=0,S=0,d=0,w=0,_=0,k=0,y=0,j=0,T,E,V,Z,te,W=null,D;const X=new Uint16Array(Io+1),N=new Uint16Array(Io+1);let O=null,J,Y,ae;for(f=0;f<=Io;f++)X[f]=0;for(p=0;p<n;p++)X[t[r+p]]++;for(d=h,S=Io;S>=1&&X[S]===0;S--);if(d>S&&(d=S),S===0)return o[a++]=1<<24|64<<16|0,o[a++]=1<<24|64<<16|0,l.bits=1,0;for(x=1;x<S&&X[x]===0;x++);for(d<x&&(d=x),k=1,f=1;f<=Io;f++)if(k<<=1,k-=X[f],k<0)return-1;if(k>0&&(e===l1||S!==1))return-1;for(N[1]=0,f=1;f<Io;f++)N[f+1]=N[f]+X[f];for(p=0;p<n;p++)t[r+p]!==0&&(c[N[t[r+p]]++]=p);if(e===l1?(W=O=c,D=20):e===jl?(W=j4,O=R4,D=257):(W=M4,O=O4,D=0),j=0,p=0,f=x,te=a,w=d,_=0,V=-1,y=1<<d,Z=y-1,e===jl&&y>a1||e===c1&&y>s1)return 1;for(;;){J=f-_,c[p]+1<D?(Y=0,ae=c[p]):c[p]>=D?(Y=O[c[p]-D],ae=W[c[p]-D]):(Y=96,ae=0),T=1<<f-_,E=1<<w,x=E;do E-=T,o[te+(j>>_)+E]=J<<24|Y<<16|ae|0;while(E!==0);for(T=1<<f-1;j&T;)T>>=1;if(T!==0?(j&=T-1,j+=T):j=0,p++,--X[f]===0){if(f===S)break;f=t[r+c[p]]}if(f>d&&(j&Z)!==V){for(_===0&&(_=d),te+=x,w=f-_,k=1<<w;w+_<S&&(k-=X[w+_],!(k<=0));)w++,k<<=1;if(y+=1<<w,e===jl&&y>a1||e===c1&&y>s1)return 1;V=j&Z,o[V]=d<<24|w<<16|te-a|0}}return j!==0&&(o[te+j]=f-_<<24|64<<16|0),l.bits=d,0};var wa=F4;const D4=0,U2=1,q2=2,{Z_FINISH:u1,Z_BLOCK:B4,Z_TREES:hs,Z_OK:ho,Z_STREAM_END:z4,Z_NEED_DICT:U4,Z_STREAM_ERROR:wn,Z_DATA_ERROR:H2,Z_MEM_ERROR:$2,Z_BUF_ERROR:q4,Z_DEFLATED:h1}=D2,Gs=16180,f1=16181,d1=16182,p1=16183,m1=16184,g1=16185,v1=16186,b1=16187,x1=16188,w1=16189,js=16190,ai=16191,Rl=16192,y1=16193,Ml=16194,S1=16195,_1=16196,C1=16197,A1=16198,fs=16199,ds=16200,k1=16201,L1=16202,N1=16203,I1=16204,P1=16205,Ol=16206,E1=16207,T1=16208,$t=16209,V2=16210,W2=16211,H4=852,$4=592,V4=15,W4=V4,j1=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function G4(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const po=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<Gs||t.mode>W2?1:0},G2=e=>{if(po(e))return wn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=Gs,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(H4),t.distcode=t.distdyn=new Int32Array($4),t.sane=1,t.back=-1,ho},Y2=e=>{if(po(e))return wn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,G2(e)},J2=(e,t)=>{let r;if(po(e))return wn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?wn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,Y2(e))},Q2=(e,t)=>{if(!e)return wn;const r=new G4;e.state=r,r.strm=e,r.window=null,r.mode=Gs;const n=J2(e,t);return n!==ho&&(e.state=null),n},Y4=e=>Q2(e,W4);let R1=!0,Fl,Dl;const J4=e=>{if(R1){Fl=new Int32Array(512),Dl=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(wa(U2,e.lens,0,288,Fl,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;wa(q2,e.lens,0,32,Dl,0,e.work,{bits:5}),R1=!1}e.lencode=Fl,e.lenbits=9,e.distcode=Dl,e.distbits=5},X2=(e,t,r,n)=>{let o;const a=e.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),n>=a.wsize?(a.window.set(t.subarray(r-a.wsize,r),0),a.wnext=0,a.whave=a.wsize):(o=a.wsize-a.wnext,o>n&&(o=n),a.window.set(t.subarray(r-n,r-n+o),a.wnext),n-=o,n?(a.window.set(t.subarray(r-n,r),0),a.wnext=n,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0},Q4=(e,t)=>{let r,n,o,a,c,l,h,f,p,x,S,d,w,_,k=0,y,j,T,E,V,Z,te,W;const D=new Uint8Array(4);let X,N;const O=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(po(e)||!e.output||!e.input&&e.avail_in!==0)return wn;r=e.state,r.mode===ai&&(r.mode=Rl),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,p=r.bits,x=l,S=h,W=ho;e:for(;;)switch(r.mode){case Gs:if(r.wrap===0){r.mode=Rl;break}for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,D[0]=f&255,D[1]=f>>>8&255,r.check=On(r.check,D,2,0),f=0,p=0,r.mode=f1;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=$t;break}if((f&15)!==h1){e.msg="unknown compression method",r.mode=$t;break}if(f>>>=4,p-=4,te=(f&15)+8,r.wbits===0&&(r.wbits=te),te>15||te>r.wbits){e.msg="invalid window size",r.mode=$t;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?w1:ai,f=0,p=0;break;case f1:for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.flags=f,(r.flags&255)!==h1){e.msg="unknown compression method",r.mode=$t;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=$t;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,r.check=On(r.check,D,2,0)),f=0,p=0,r.mode=d1;case d1:for(;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,D[2]=f>>>16&255,D[3]=f>>>24&255,r.check=On(r.check,D,4,0)),f=0,p=0,r.mode=p1;case p1:for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,r.check=On(r.check,D,2,0)),f=0,p=0,r.mode=m1;case m1:if(r.flags&1024){for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(D[0]=f&255,D[1]=f>>>8&255,r.check=On(r.check,D,2,0)),f=0,p=0}else r.head&&(r.head.extra=null);r.mode=g1;case g1:if(r.flags&1024&&(d=r.length,d>l&&(d=l),d&&(r.head&&(te=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(a,a+d),te)),r.flags&512&&r.wrap&4&&(r.check=On(r.check,n,d,a)),l-=d,a+=d,r.length-=d),r.length))break e;r.length=0,r.mode=v1;case v1:if(r.flags&2048){if(l===0)break e;d=0;do te=n[a+d++],r.head&&te&&r.length<65536&&(r.head.name+=String.fromCharCode(te));while(te&&d<l);if(r.flags&512&&r.wrap&4&&(r.check=On(r.check,n,d,a)),l-=d,a+=d,te)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=b1;case b1:if(r.flags&4096){if(l===0)break e;d=0;do te=n[a+d++],r.head&&te&&r.length<65536&&(r.head.comment+=String.fromCharCode(te));while(te&&d<l);if(r.flags&512&&r.wrap&4&&(r.check=On(r.check,n,d,a)),l-=d,a+=d,te)break e}else r.head&&(r.head.comment=null);r.mode=x1;case x1:if(r.flags&512){for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=$t;break}f=0,p=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=ai;break;case w1:for(;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}e.adler=r.check=j1(f),f=0,p=0,r.mode=js;case js:if(r.havedict===0)return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=p,U4;e.adler=r.check=1,r.mode=ai;case ai:if(t===B4||t===hs)break e;case Rl:if(r.last){f>>>=p&7,p-=p&7,r.mode=Ol;break}for(;p<3;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}switch(r.last=f&1,f>>>=1,p-=1,f&3){case 0:r.mode=y1;break;case 1:if(J4(r),r.mode=fs,t===hs){f>>>=2,p-=2;break e}break;case 2:r.mode=_1;break;case 3:e.msg="invalid block type",r.mode=$t}f>>>=2,p-=2;break;case y1:for(f>>>=p&7,p-=p&7;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=$t;break}if(r.length=f&65535,f=0,p=0,r.mode=Ml,t===hs)break e;case Ml:r.mode=S1;case S1:if(d=r.length,d){if(d>l&&(d=l),d>h&&(d=h),d===0)break e;o.set(n.subarray(a,a+d),c),l-=d,a+=d,h-=d,c+=d,r.length-=d;break}r.mode=ai;break;case _1:for(;p<14;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.nlen=(f&31)+257,f>>>=5,p-=5,r.ndist=(f&31)+1,f>>>=5,p-=5,r.ncode=(f&15)+4,f>>>=4,p-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=$t;break}r.have=0,r.mode=C1;case C1:for(;r.have<r.ncode;){for(;p<3;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.lens[O[r.have++]]=f&7,f>>>=3,p-=3}for(;r.have<19;)r.lens[O[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,X={bits:r.lenbits},W=wa(D4,r.lens,0,19,r.lencode,0,r.work,X),r.lenbits=X.bits,W){e.msg="invalid code lengths set",r.mode=$t;break}r.have=0,r.mode=A1;case A1:for(;r.have<r.nlen+r.ndist;){for(;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,j=k>>>16&255,T=k&65535,!(y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(T<16)f>>>=y,p-=y,r.lens[r.have++]=T;else{if(T===16){for(N=y+2;p<N;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(f>>>=y,p-=y,r.have===0){e.msg="invalid bit length repeat",r.mode=$t;break}te=r.lens[r.have-1],d=3+(f&3),f>>>=2,p-=2}else if(T===17){for(N=y+3;p<N;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=y,p-=y,te=0,d=3+(f&7),f>>>=3,p-=3}else{for(N=y+7;p<N;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=y,p-=y,te=0,d=11+(f&127),f>>>=7,p-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=$t;break}for(;d--;)r.lens[r.have++]=te}}if(r.mode===$t)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=$t;break}if(r.lenbits=9,X={bits:r.lenbits},W=wa(U2,r.lens,0,r.nlen,r.lencode,0,r.work,X),r.lenbits=X.bits,W){e.msg="invalid literal/lengths set",r.mode=$t;break}if(r.distbits=6,r.distcode=r.distdyn,X={bits:r.distbits},W=wa(q2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,X),r.distbits=X.bits,W){e.msg="invalid distances set",r.mode=$t;break}if(r.mode=fs,t===hs)break e;case fs:r.mode=ds;case ds:if(l>=6&&h>=258){e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=p,T4(e,S),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,p=r.bits,r.mode===ai&&(r.back=-1);break}for(r.back=0;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,j=k>>>16&255,T=k&65535,!(y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(j&&!(j&240)){for(E=y,V=j,Z=T;k=r.lencode[Z+((f&(1<<E+V)-1)>>E)],y=k>>>24,j=k>>>16&255,T=k&65535,!(E+y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=E,p-=E,r.back+=E}if(f>>>=y,p-=y,r.back+=y,r.length=T,j===0){r.mode=P1;break}if(j&32){r.back=-1,r.mode=ai;break}if(j&64){e.msg="invalid literal/length code",r.mode=$t;break}r.extra=j&15,r.mode=k1;case k1:if(r.extra){for(N=r.extra;p<N;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=L1;case L1:for(;k=r.distcode[f&(1<<r.distbits)-1],y=k>>>24,j=k>>>16&255,T=k&65535,!(y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(!(j&240)){for(E=y,V=j,Z=T;k=r.distcode[Z+((f&(1<<E+V)-1)>>E)],y=k>>>24,j=k>>>16&255,T=k&65535,!(E+y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=E,p-=E,r.back+=E}if(f>>>=y,p-=y,r.back+=y,j&64){e.msg="invalid distance code",r.mode=$t;break}r.offset=T,r.extra=j&15,r.mode=N1;case N1:if(r.extra){for(N=r.extra;p<N;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=$t;break}r.mode=I1;case I1:if(h===0)break e;if(d=S-h,r.offset>d){if(d=r.offset-d,d>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=$t;break}d>r.wnext?(d-=r.wnext,w=r.wsize-d):w=r.wnext-d,d>r.length&&(d=r.length),_=r.window}else _=o,w=c-r.offset,d=r.length;d>h&&(d=h),h-=d,r.length-=d;do o[c++]=_[w++];while(--d);r.length===0&&(r.mode=ds);break;case P1:if(h===0)break e;o[c++]=r.length,h--,r.mode=ds;break;case Ol:if(r.wrap){for(;p<32;){if(l===0)break e;l--,f|=n[a++]<<p,p+=8}if(S-=h,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?On(r.check,o,S,c-S):dc(r.check,o,S,c-S)),S=h,r.wrap&4&&(r.flags?f:j1(f))!==r.check){e.msg="incorrect data check",r.mode=$t;break}f=0,p=0}r.mode=E1;case E1:if(r.wrap&&r.flags){for(;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=$t;break}f=0,p=0}r.mode=T1;case T1:W=z4;break e;case $t:W=H2;break e;case V2:return $2;case W2:default:return wn}return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=p,(r.wsize||S!==e.avail_out&&r.mode<$t&&(r.mode<Ol||t!==u1))&&X2(e,e.output,e.next_out,S-e.avail_out),x-=e.avail_in,S-=e.avail_out,e.total_in+=x,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?On(r.check,o,S,e.next_out-S):dc(r.check,o,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===ai?128:0)+(r.mode===fs||r.mode===Ml?256:0),(x===0&&S===0||t===u1)&&W===ho&&(W=q4),W},X4=e=>{if(po(e))return wn;let t=e.state;return t.window&&(t.window=null),e.state=null,ho},Z4=(e,t)=>{if(po(e))return wn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,ho):wn},K4=(e,t)=>{const r=t.length;let n,o,a;return po(e)||(n=e.state,n.wrap!==0&&n.mode!==js)?wn:n.mode===js&&(o=1,o=dc(o,t,r,0),o!==n.check)?H2:(a=X2(e,t,r,r),a?(n.mode=V2,$2):(n.havedict=1,ho))};var e6=Y2,t6=J2,r6=G2,n6=Y4,i6=Q2,o6=Q4,a6=X4,s6=Z4,l6=K4,c6="pako inflate (from Nodeca project)",si={inflateReset:e6,inflateReset2:t6,inflateResetKeep:r6,inflateInit:n6,inflateInit2:i6,inflate:o6,inflateEnd:a6,inflateGetHeader:s6,inflateSetDictionary:l6,inflateInfo:c6};function u6(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var h6=u6;const Z2=Object.prototype.toString,{Z_NO_FLUSH:f6,Z_FINISH:d6,Z_OK:Ca,Z_STREAM_END:Bl,Z_NEED_DICT:zl,Z_STREAM_ERROR:p6,Z_DATA_ERROR:M1,Z_MEM_ERROR:m6}=D2;function Pa(e){this.options=B2.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new P4,this.strm.avail_out=0;let r=si.inflateInit2(this.strm,t.windowBits);if(r!==Ca)throw new Error(pc[r]);if(this.header=new h6,si.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=mc.string2buf(t.dictionary):Z2.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=si.inflateSetDictionary(this.strm,t.dictionary),r!==Ca)))throw new Error(pc[r])}Pa.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,o=this.options.dictionary;let a,c,l;if(this.ended)return!1;for(t===~~t?c=t:c=t===!0?d6:f6,Z2.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),a=si.inflate(r,c),a===zl&&o&&(a=si.inflateSetDictionary(r,o),a===Ca?a=si.inflate(r,c):a===M1&&(a=zl));r.avail_in>0&&a===Bl&&r.state.wrap>0&&e[r.next_in]!==0;)si.inflateReset(r),a=si.inflate(r,c);switch(a){case p6:case M1:case zl:case m6:return this.onEnd(a),this.ended=!0,!1}if(l=r.avail_out,r.next_out&&(r.avail_out===0||a===Bl))if(this.options.to==="string"){let h=mc.utf8border(r.output,r.next_out),f=r.next_out-h,p=mc.buf2string(r.output,h);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(h,h+f),0),this.onData(p)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(a===Ca&&l===0)){if(a===Bl)return a=si.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Pa.prototype.onData=function(e){this.chunks.push(e)};Pa.prototype.onEnd=function(e){e===Ca&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=B2.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function g6(e,t){const r=new Pa(t);if(r.push(e),r.err)throw r.msg||pc[r.err];return r.result}var v6=Pa,b6=g6,x6={Inflate:v6,inflate:b6};const{Inflate:w6,inflate:y6}=x6;var O1=w6,S6=y6;const K2=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;K2[e]=t}const F1=4294967295;function _6(e,t,r){let n=e;for(let o=0;o<r;o++)n=K2[(n^t[o])&255]^n>>>8;return n}function C6(e,t){return(_6(F1,e,t)^F1)>>>0}function D1(e,t,r){const n=e.readUint32(),o=C6(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(o!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${o}`)}function e0(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function t0(e,t,r,n){let o=0;for(;o<n;o++)t[o]=e[o];for(;o<r;o++)t[o]=e[o]+t[o-n]&255}function r0(e,t,r,n){let o=0;if(r.length===0)for(;o<n;o++)t[o]=e[o];else for(;o<n;o++)t[o]=e[o]+r[o]&255}function n0(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+(t[a-o]>>1)&255}else{for(;a<o;a++)t[a]=e[a]+(r[a]>>1)&255;for(;a<n;a++)t[a]=e[a]+(t[a-o]+r[a]>>1)&255}}function i0(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+t[a-o]&255}else{for(;a<o;a++)t[a]=e[a]+r[a]&255;for(;a<n;a++)t[a]=e[a]+A6(t[a-o],r[a],r[a-o])&255}}function A6(e,t,r){const n=e+t-r,o=Math.abs(n-e),a=Math.abs(n-t),c=Math.abs(n-r);return o<=a&&o<=c?e:a<=c?t:r}function k6(e,t,r,n,o,a){switch(e){case 0:e0(t,r,o);break;case 1:t0(t,r,o,a);break;case 2:r0(t,r,n,o);break;case 3:n0(t,r,n,o,a);break;case 4:i0(t,r,n,o,a);break;default:throw new Error(`Unsupported filter: ${e}`)}}const L6=new Uint16Array([255]),N6=new Uint8Array(L6.buffer),I6=N6[0]===255;function P6(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],l=Math.ceil(a/8)*o,h=new Uint8Array(n*r*l);let f=0;for(let p=0;p<7;p++){const x=c[p],S=Math.ceil((r-x.x)/x.xStep),d=Math.ceil((n-x.y)/x.yStep);if(S<=0||d<=0)continue;const w=S*l,_=new Uint8Array(w);for(let k=0;k<d;k++){const y=t[f++],j=t.subarray(f,f+w);f+=w;const T=new Uint8Array(w);k6(y,j,T,_,w,l),_.set(T);for(let E=0;E<S;E++){const V=x.x+E*x.xStep,Z=x.y+k*x.yStep;if(!(V>=r||Z>=n))for(let te=0;te<l;te++)h[(Z*r+V)*l+te]=T[E*l+te]}}}if(a===16){const p=new Uint16Array(h.buffer);if(I6)for(let x=0;x<p.length;x++)p[x]=E6(p[x]);return p}else return h}function E6(e){return(e&255)<<8|e>>8&255}const T6=new Uint16Array([255]),j6=new Uint8Array(T6.buffer),R6=j6[0]===255,M6=new Uint8Array(0);function B1(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=Math.ceil(a/8)*o,l=Math.ceil(a/8*o*r),h=new Uint8Array(n*l);let f=M6,p=0,x,S;for(let d=0;d<n;d++){switch(x=t.subarray(p+1,p+1+l),S=h.subarray(d*l,(d+1)*l),t[p]){case 0:e0(x,S,l);break;case 1:t0(x,S,l,c);break;case 2:r0(x,S,f,l);break;case 3:n0(x,S,f,l,c);break;case 4:i0(x,S,f,l,c);break;default:throw new Error(`Unsupported filter: ${t[p]}`)}f=S,p+=l+1}if(a===16){const d=new Uint16Array(h.buffer);if(R6)for(let w=0;w<d.length;w++)d[w]=O6(d[w]);return d}else return h}function O6(e){return(e&255)<<8|e>>8&255}const _s=Uint8Array.of(137,80,78,71,13,10,26,10);function z1(e){if(!F6(e.readBytes(_s.length)))throw new Error("wrong PNG signature")}function F6(e){if(e.length<_s.length)return!1;for(let t=0;t<_s.length;t++)if(e[t]!==_s[t])return!1;return!0}const D6="tEXt",B6=0,o0=new TextDecoder("latin1");function z6(e){if(q6(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const U6=/^[\u0000-\u00FF]*$/;function q6(e){if(!U6.test(e))throw new Error("invalid latin1 text")}function H6(e,t,r){const n=a0(t);e[n]=$6(t,r-n.length-1)}function a0(e){for(e.mark();e.readByte()!==B6;);const t=e.offset;e.reset();const r=o0.decode(e.readBytes(t-e.offset-1));return e.skip(1),z6(r),r}function $6(e,t){return o0.decode(e.readBytes(t))}const ln={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Ul={UNKNOWN:-1,DEFLATE:0},U1={UNKNOWN:-1,ADAPTIVE:0},ql={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},ps={NONE:0,BACKGROUND:1,PREVIOUS:2},Hl={SOURCE:0,OVER:1};class V6 extends qc{constructor(r,n={}){super(r);Pe(this,"_checkCrc");Pe(this,"_inflator");Pe(this,"_png");Pe(this,"_apng");Pe(this,"_end");Pe(this,"_hasPalette");Pe(this,"_palette");Pe(this,"_hasTransparency");Pe(this,"_transparency");Pe(this,"_compressionMethod");Pe(this,"_filterMethod");Pe(this,"_interlaceMethod");Pe(this,"_colorType");Pe(this,"_isAnimated");Pe(this,"_numberOfFrames");Pe(this,"_numberOfPlays");Pe(this,"_frames");Pe(this,"_writingDataChunks");const{checkCrc:o=!1}=n;this._checkCrc=o,this._inflator=new O1,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Ul.UNKNOWN,this._filterMethod=U1.UNKNOWN,this._interlaceMethod=ql.UNKNOWN,this._colorType=ln.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(z1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(z1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const o=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case D6:H6(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?D1(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const o=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=o+r;break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?D1(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=W6(this.readUint8());const n=this.readUint8();this._colorType=n;let o;switch(n){case ln.GREYSCALE:o=1;break;case ln.TRUECOLOUR:o=3;break;case ln.INDEXED_COLOUR:o=1;break;case ln.GREYSCALE_ALPHA:o=2;break;case ln.TRUECOLOUR_ALPHA:o=4;break;case ln.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=o,this._compressionMethod=this.readUint8(),this._compressionMethod!==Ul.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const o=[];this._palette=o;for(let a=0;a<n;a++)o.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,o=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,o=this.offset+this.byteOffset;if(o+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case ln.GREYSCALE:case ln.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case ln.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const o=this.readByte();this._palette[n].push(o)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case ln.UNKNOWN:case ln.GREYSCALE_ALPHA:case ln.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=a0(this),o=this.readUint8();if(o!==Ul.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${o}`);const a=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:S6(a)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),o=this.readByte();this._png.resolution={x:r,y:n,unit:o}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},o=this._frames.at(r);if(o){if(o.data=B1({data:o.data,width:o.width,height:o.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||o.xOffset===0&&o.yOffset===0&&o.width===this._png.width&&o.height===this._png.height)n.data=o.data;else{const a=this._apng.frames.at(r-1);this.disposeFrame(o,a,n),this.addFrameDataToCanvas(n,o)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,o){switch(r.disposeOp){case ps.NONE:break;case ps.BACKGROUND:for(let a=0;a<this._png.height;a++)for(let c=0;c<this._png.width;c++){const l=(a*r.width+c)*this._png.channels;for(let h=0;h<this._png.channels;h++)o.data[l+h]=0}break;case ps.PREVIOUS:o.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const o=1<<this._png.depth,a=(c,l)=>{const h=((c+n.yOffset)*this._png.width+n.xOffset+l)*this._png.channels,f=(c*n.width+l)*this._png.channels;return{index:h,frameIndex:f}};switch(n.blendOp){case Hl.SOURCE:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let p=0;p<this._png.channels;p++)r.data[h+p]=n.data[f+p]}break;case Hl.OVER:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let p=0;p<this._png.channels;p++){const x=n.data[f+this._png.channels-1]/o,S=p%(this._png.channels-1)===0?1:n.data[f+p],d=Math.floor(x*S+(1-x)*r.data[h+p]);r.data[h+p]+=d}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==U1.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===ql.NO_INTERLACE)this._png.data=B1({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===ql.ADAM7)this._png.data=P6({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:ps.NONE,blendOp:Hl.SOURCE,data:r}),this._inflator=new O1,this._writingDataChunks=!1}}function W6(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var q1;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(q1||(q1={}));function G6(e,t){return new V6(e,t).decode()}var tt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function $l(){tt.console&&typeof tt.console.log=="function"&&tt.console.log.apply(tt.console,arguments)}var Ot={log:$l,warn:function(e){tt.console&&(typeof tt.console.warn=="function"?tt.console.warn.apply(tt.console,arguments):$l.call(null,arguments))},error:function(e){tt.console&&(typeof tt.console.error=="function"?tt.console.error.apply(tt.console,arguments):$l(e))}};function Vl(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){so(n.response,t,r)},n.onerror=function(){Ot.error("could not download file")},n.send()}function H1(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function ms(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var so=tt.saveAs||((typeof window>"u"?"undefined":Pt(window))!=="object"||window!==tt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=tt.URL||tt.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?H1(o.href)?Vl(e,t,r):ms(o,o.target="_blank"):ms(o)):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){ms(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(H1(e))Vl(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){ms(n)})}else navigator.msSaveOrOpenBlob(function(o,a){return a===void 0?a={autoBom:!1}:Pt(a)!=="object"&&(Ot.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return Vl(e,t,r);var o=e.type==="application/octet-stream",a=/constructor/i.test(tt.HTMLElement)||tt.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&a)&&(typeof FileReader>"u"?"undefined":Pt(FileReader))==="object"){var l=new FileReader;l.onloadend=function(){var p=l.result;p=c?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=p:location=p,n=null},l.readAsDataURL(e)}else{var h=tt.URL||tt.webkitURL,f=h.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){h.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function s0(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(l){return[parseInt(l[1]),parseInt(l[2]),parseInt(l[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(l){return[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(l){return[parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16),parseInt(l[3]+l[3],16)]}}],n=0;n<r.length;n++){var o=r[n].re,a=r[n].process,c=o.exec(e);c&&(t=a(c),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var l=this.r.toString(16),h=this.g.toString(16),f=this.b.toString(16);return l.length==1&&(l="0"+l),h.length==1&&(h="0"+h),f.length==1&&(f="0"+f),"#"+l+h+f}}var Cs=tt.atob.bind(tt),$1=tt.btoa.bind(tt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function Wl(e,t){var r=e[0],n=e[1],o=e[2],a=e[3];r=Pr(r,n,o,a,t[0],7,-680876936),a=Pr(a,r,n,o,t[1],12,-389564586),o=Pr(o,a,r,n,t[2],17,606105819),n=Pr(n,o,a,r,t[3],22,-1044525330),r=Pr(r,n,o,a,t[4],7,-176418897),a=Pr(a,r,n,o,t[5],12,1200080426),o=Pr(o,a,r,n,t[6],17,-1473231341),n=Pr(n,o,a,r,t[7],22,-45705983),r=Pr(r,n,o,a,t[8],7,1770035416),a=Pr(a,r,n,o,t[9],12,-1958414417),o=Pr(o,a,r,n,t[10],17,-42063),n=Pr(n,o,a,r,t[11],22,-1990404162),r=Pr(r,n,o,a,t[12],7,1804603682),a=Pr(a,r,n,o,t[13],12,-40341101),o=Pr(o,a,r,n,t[14],17,-1502002290),r=Er(r,n=Pr(n,o,a,r,t[15],22,1236535329),o,a,t[1],5,-165796510),a=Er(a,r,n,o,t[6],9,-1069501632),o=Er(o,a,r,n,t[11],14,643717713),n=Er(n,o,a,r,t[0],20,-373897302),r=Er(r,n,o,a,t[5],5,-701558691),a=Er(a,r,n,o,t[10],9,38016083),o=Er(o,a,r,n,t[15],14,-660478335),n=Er(n,o,a,r,t[4],20,-405537848),r=Er(r,n,o,a,t[9],5,568446438),a=Er(a,r,n,o,t[14],9,-1019803690),o=Er(o,a,r,n,t[3],14,-187363961),n=Er(n,o,a,r,t[8],20,1163531501),r=Er(r,n,o,a,t[13],5,-1444681467),a=Er(a,r,n,o,t[2],9,-51403784),o=Er(o,a,r,n,t[7],14,1735328473),r=Tr(r,n=Er(n,o,a,r,t[12],20,-1926607734),o,a,t[5],4,-378558),a=Tr(a,r,n,o,t[8],11,-2022574463),o=Tr(o,a,r,n,t[11],16,1839030562),n=Tr(n,o,a,r,t[14],23,-35309556),r=Tr(r,n,o,a,t[1],4,-1530992060),a=Tr(a,r,n,o,t[4],11,1272893353),o=Tr(o,a,r,n,t[7],16,-155497632),n=Tr(n,o,a,r,t[10],23,-1094730640),r=Tr(r,n,o,a,t[13],4,681279174),a=Tr(a,r,n,o,t[0],11,-358537222),o=Tr(o,a,r,n,t[3],16,-722521979),n=Tr(n,o,a,r,t[6],23,76029189),r=Tr(r,n,o,a,t[9],4,-640364487),a=Tr(a,r,n,o,t[12],11,-421815835),o=Tr(o,a,r,n,t[15],16,530742520),r=jr(r,n=Tr(n,o,a,r,t[2],23,-995338651),o,a,t[0],6,-198630844),a=jr(a,r,n,o,t[7],10,1126891415),o=jr(o,a,r,n,t[14],15,-1416354905),n=jr(n,o,a,r,t[5],21,-57434055),r=jr(r,n,o,a,t[12],6,1700485571),a=jr(a,r,n,o,t[3],10,-1894986606),o=jr(o,a,r,n,t[10],15,-1051523),n=jr(n,o,a,r,t[1],21,-2054922799),r=jr(r,n,o,a,t[8],6,1873313359),a=jr(a,r,n,o,t[15],10,-30611744),o=jr(o,a,r,n,t[6],15,-1560198380),n=jr(n,o,a,r,t[13],21,1309151649),r=jr(r,n,o,a,t[4],6,-145523070),a=jr(a,r,n,o,t[11],10,-1120210379),o=jr(o,a,r,n,t[2],15,718787259),n=jr(n,o,a,r,t[9],21,-343485551),e[0]=Fi(r,e[0]),e[1]=Fi(n,e[1]),e[2]=Fi(o,e[2]),e[3]=Fi(a,e[3])}function Ys(e,t,r,n,o,a){return t=Fi(Fi(t,e),Fi(n,a)),Fi(t<<o|t>>>32-o,r)}function Pr(e,t,r,n,o,a,c){return Ys(t&r|~t&n,e,t,o,a,c)}function Er(e,t,r,n,o,a,c){return Ys(t&n|r&~n,e,t,o,a,c)}function Tr(e,t,r,n,o,a,c){return Ys(t^r^n,e,t,o,a,c)}function jr(e,t,r,n,o,a,c){return Ys(r^(t|~n),e,t,o,a,c)}function l0(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)Wl(n,Y6(e.substring(t-64,t)));e=e.substring(t-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(Wl(n,o),t=0;t<16;t++)o[t]=0;return o[14]=8*r,Wl(n,o),n}function Y6(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var V1="0123456789abcdef".split("");function J6(e){for(var t="",r=0;r<4;r++)t+=V1[e>>8*r+4&15]+V1[e>>8*r&15];return t}function Q6(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function gc(e){return l0(e).map(Q6).join("")}var X6=function(e){for(var t=0;t<e.length;t++)e[t]=J6(e[t]);return e.join("")}(l0("hello"))!="5d41402abc4b2a76b9719d911017c592";function Fi(e,t){if(X6){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function vc(e,t){var r,n,o,a;if(e!==r){for(var c=(o=e,a=1+(256/e.length|0),new Array(a+1).join(o)),l=[],h=0;h<256;h++)l[h]=h;var f=0;for(h=0;h<256;h++){var p=l[h];f=(f+p+c.charCodeAt(h))%256,l[h]=l[f],l[f]=p}r=e,n=l}else l=n;var x=t.length,S=0,d=0,w="";for(h=0;h<x;h++)d=(d+(p=l[S=(S+1)%256]))%256,l[S]=l[d],l[d]=p,c=l[(l[S]+l[d])%256],w+=String.fromCharCode(t.charCodeAt(h)^c);return w}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var W1={print:4,modify:8,copy:16,"annot-forms":32};function To(e,t,r,n){this.v=1,this.r=2;var o=192;e.forEach(function(l){if(W1.perm!==void 0)throw new Error("Invalid permission: "+l);o+=W1[l]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(t+this.padding).substr(0,32),c=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,c),this.P=-(1+(255^o)),this.encryptionKey=gc(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=vc(this.encryptionKey,this.padding)}function jo(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);t+=o<33||o===35||o===37||o===40||o===41||o===47||o===60||o===62||o===91||o===93||o===123||o===125||o>126?"#"+("0"+o.toString(16)).slice(-2):e[n]}return t}function G1(e){if(Pt(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,o){if(o=o||!1,typeof r!="string"||typeof n!="function"||typeof o!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var a=Math.random().toString(35);return t[r][a]=[n,!!o],a},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),o=[];for(var a in t[r]){var c=t[r][a];try{c[0].apply(e,n)}catch(l){tt.console&&Ot.error("jsPDF PubSub Error",l.message,l)}c[1]&&o.push(a)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Rs(e){if(!(this instanceof Rs))return new Rs(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function c0(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function lo(e,t,r,n,o){if(!(this instanceof lo))return new lo(e,t,r,n,o);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,c0.call(this,n,o)}function Ro(e,t,r,n,o){if(!(this instanceof Ro))return new Ro(e,t,r,n,o);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,c0.call(this,n,o)}function Ge(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],o=arguments[2],a=arguments[3],c=[],l=1,h=16,f="S",p=null;Pt(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,o=e.format||o,a=e.compress||e.compressPdf||a,(p=e.encryption||null)!==null&&(p.userPassword=p.userPassword||"",p.ownerPassword=p.ownerPassword||"",p.userPermissions=p.userPermissions||[]),l=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(h=e.floatPrecision),f=e.defaultPathOperation||"S"),c=e.filters||(a===!0?["FlateEncode"]:c),n=n||"mm",r=(""+(r||"P")).toLowerCase();var x=e.putOnlyUsedFonts||!1,S={},d={internal:{},__private__:{}};d.__private__.PubSub=G1;var w="1.3",_=d.__private__.getPdfVersion=function(){return w};d.__private__.setPdfVersion=function(m){w=m};var k={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};d.__private__.getPageFormats=function(){return k};var y=d.__private__.getPageFormat=function(m){return k[m]};o=o||"a4";var j="compat",T="advanced",E=j;function V(){this.saveGraphicsState(),$(new Je(Xe,0,0,-Xe,0,Yi()*Xe).toString()+" cm"),this.setFontSize(this.getFontSize()/Xe),f="n",E=T}function Z(){this.restoreGraphicsState(),f="S",E=j}var te=d.__private__.combineFontStyleAndFontWeight=function(m,C){if(m=="bold"&&C=="normal"||m=="bold"&&C==400||m=="normal"&&C=="italic"||m=="bold"&&C=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return C&&(m=C==400||C==="normal"?m==="italic"?"italic":"normal":C!=700&&C!=="bold"||m!=="normal"?(C==700?"bold":C)+""+m:"bold"),m};d.advancedAPI=function(m){var C=E===j;return C&&V.call(this),typeof m!="function"||(m(this),C&&Z.call(this)),this},d.compatAPI=function(m){var C=E===T;return C&&Z.call(this),typeof m!="function"||(m(this),C&&V.call(this)),this},d.isAdvancedAPI=function(){return E===T};var W,D=function(m){if(E!==T)throw new Error(m+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},X=d.roundToPrecision=d.__private__.roundToPrecision=function(m,C){var U=t||C;if(isNaN(m)||isNaN(U))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return m.toFixed(U).replace(/0+$/,"")};W=d.hpf=d.__private__.hpf=typeof h=="number"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return X(m,h)}:h==="smart"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return X(m,m>-1&&m<1?16:5)}:function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return X(m,16)};var N=d.f2=d.__private__.f2=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f2");return X(m,2)},O=d.__private__.f3=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f3");return X(m,3)},J=d.scale=d.__private__.scale=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.scale");return E===j?m*Xe:E===T?m:void 0},Y=function(m){return J(function(C){return E===j?Yi()-C:E===T?C:void 0}(m))};d.__private__.setPrecision=d.setPrecision=function(m){typeof parseInt(m,10)=="number"&&(t=parseInt(m,10))};var ae,he="00000000000000000000000000000000",fe=d.__private__.getFileId=function(){return he},se=d.__private__.setFileId=function(m){return he=m!==void 0&&/^[a-fA-F0-9]{32}$/.test(m)?m.toUpperCase():he.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),p!==null&&(jt=new To(p.userPermissions,p.userPassword,p.ownerPassword,he)),he};d.setFileId=function(m){return se(m),this},d.getFileId=function(){return fe()};var me=d.__private__.convertDateToPDFDate=function(m){var C=m.getTimezoneOffset(),U=C<0?"+":"-",Q=Math.floor(Math.abs(C/60)),ie=Math.abs(C%60),we=[U,G(Q),"'",G(ie),"'"].join("");return["D:",m.getFullYear(),G(m.getMonth()+1),G(m.getDate()),G(m.getHours()),G(m.getMinutes()),G(m.getSeconds()),we].join("")},Ie=d.__private__.convertPDFDateToDate=function(m){var C=parseInt(m.substr(2,4),10),U=parseInt(m.substr(6,2),10)-1,Q=parseInt(m.substr(8,2),10),ie=parseInt(m.substr(10,2),10),we=parseInt(m.substr(12,2),10),Ae=parseInt(m.substr(14,2),10);return new Date(C,U,Q,ie,we,Ae,0)},_e=d.__private__.setCreationDate=function(m){var C;if(m===void 0&&(m=new Date),m instanceof Date)C=me(m);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(m))throw new Error("Invalid argument passed to jsPDF.setCreationDate");C=m}return ae=C},P=d.__private__.getCreationDate=function(m){var C=ae;return m==="jsDate"&&(C=Ie(ae)),C};d.setCreationDate=function(m){return _e(m),this},d.getCreationDate=function(m){return P(m)};var H,G=d.__private__.padd2=function(m){return("0"+parseInt(m)).slice(-2)},K=d.__private__.padd2Hex=function(m){return("00"+(m=m.toString())).substr(m.length)},ne=0,ce=[],pe=[],de=0,ye=[],Ne=[],je=!1,Te=pe;d.__private__.setCustomOutputDestination=function(m){je=!0,Te=m};var ve=function(m){je||(Te=m)};d.__private__.resetCustomOutputDestination=function(){je=!1,Te=pe};var $=d.__private__.out=function(m){return m=m.toString(),de+=m.length+1,Te.push(m),Te},pt=d.__private__.write=function(m){return $(arguments.length===1?m.toString():Array.prototype.join.call(arguments," "))},ot=d.__private__.getArrayBuffer=function(m){for(var C=m.length,U=new ArrayBuffer(C),Q=new Uint8Array(U);C--;)Q[C]=m.charCodeAt(C);return U},Ye=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];d.__private__.getStandardFonts=function(){return Ye};var ke=e.fontSize||16;d.__private__.setFontSize=d.setFontSize=function(m){return ke=E===T?m/Xe:m,this};var Ve,Re=d.__private__.getFontSize=d.getFontSize=function(){return E===j?ke:ke*Xe},Ke=e.R2L||!1;d.__private__.setR2L=d.setR2L=function(m){return Ke=m,this},d.__private__.getR2L=d.getR2L=function(){return Ke};var Ue,vt=d.__private__.setZoomMode=function(m){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(m))Ve=m;else if(isNaN(m)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(m)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+m+'" is not recognized.');Ve=m}else Ve=parseInt(m,10)};d.__private__.getZoomMode=function(){return Ve};var et,rt=d.__private__.setPageMode=function(m){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(m)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+m+'" is not recognized.');Ue=m};d.__private__.getPageMode=function(){return Ue};var _t=d.__private__.setLayoutMode=function(m){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(m)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+m+'" is not recognized.');et=m};d.__private__.getLayoutMode=function(){return et},d.__private__.setDisplayMode=d.setDisplayMode=function(m,C,U){return vt(m),_t(C),rt(U),this};var at={title:"",subject:"",author:"",keywords:"",creator:""};d.__private__.getDocumentProperty=function(m){if(Object.keys(at).indexOf(m)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return at[m]},d.__private__.getDocumentProperties=function(){return at},d.__private__.setDocumentProperties=d.setProperties=d.setDocumentProperties=function(m){for(var C in at)at.hasOwnProperty(C)&&m[C]&&(at[C]=m[C]);return this},d.__private__.setDocumentProperty=function(m,C){if(Object.keys(at).indexOf(m)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return at[m]=C};var qe,Xe,He,Tt,bt,De={},st={},xt=[],Qe={},mt={},nt={},Ht={},Kt=null,Lt=0,Ze=[],Ct=new G1(d),Hn=e.hotfixes||[],br={},Mr={},un=[],Je=function m(C,U,Q,ie,we,Ae){if(!(this instanceof m))return new m(C,U,Q,ie,we,Ae);isNaN(C)&&(C=1),isNaN(U)&&(U=0),isNaN(Q)&&(Q=0),isNaN(ie)&&(ie=1),isNaN(we)&&(we=0),isNaN(Ae)&&(Ae=0),this._matrix=[C,U,Q,ie,we,Ae]};Object.defineProperty(Je.prototype,"sx",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Je.prototype,"shy",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Je.prototype,"shx",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Je.prototype,"sy",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Je.prototype,"tx",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Je.prototype,"ty",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Je.prototype,"a",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Je.prototype,"b",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Je.prototype,"c",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Je.prototype,"d",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Je.prototype,"e",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Je.prototype,"f",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Je.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Je.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Je.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Je.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),Je.prototype.join=function(m){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(W).join(m)},Je.prototype.multiply=function(m){var C=m.sx*this.sx+m.shy*this.shx,U=m.sx*this.shy+m.shy*this.sy,Q=m.shx*this.sx+m.sy*this.shx,ie=m.shx*this.shy+m.sy*this.sy,we=m.tx*this.sx+m.ty*this.shx+this.tx,Ae=m.tx*this.shy+m.ty*this.sy+this.ty;return new Je(C,U,Q,ie,we,Ae)},Je.prototype.decompose=function(){var m=this.sx,C=this.shy,U=this.shx,Q=this.sy,ie=this.tx,we=this.ty,Ae=Math.sqrt(m*m+C*C),Fe=(m/=Ae)*U+(C/=Ae)*Q;U-=m*Fe,Q-=C*Fe;var $e=Math.sqrt(U*U+Q*Q);return Fe/=$e,m*(Q/=$e)<C*(U/=$e)&&(m=-m,C=-C,Fe=-Fe,Ae=-Ae),{scale:new Je(Ae,0,0,$e,0,0),translate:new Je(1,0,0,1,ie,we),rotate:new Je(m,C,-C,m,0,0),skew:new Je(1,0,Fe,1,0,0)}},Je.prototype.toString=function(m){return this.join(" ")},Je.prototype.inversed=function(){var m=this.sx,C=this.shy,U=this.shx,Q=this.sy,ie=this.tx,we=this.ty,Ae=1/(m*Q-C*U),Fe=Q*Ae,$e=-C*Ae,it=-U*Ae,ct=m*Ae;return new Je(Fe,$e,it,ct,-Fe*ie-it*we,-$e*ie-ct*we)},Je.prototype.applyToPoint=function(m){var C=m.x*this.sx+m.y*this.shx+this.tx,U=m.x*this.shy+m.y*this.sy+this.ty;return new Wi(C,U)},Je.prototype.applyToRectangle=function(m){var C=this.applyToPoint(m),U=this.applyToPoint(new Wi(m.x+m.w,m.y+m.h));return new Jo(C.x,C.y,U.x-C.x,U.y-C.y)},Je.prototype.clone=function(){var m=this.sx,C=this.shy,U=this.shx,Q=this.sy,ie=this.tx,we=this.ty;return new Je(m,C,U,Q,ie,we)},d.Matrix=Je;var hn=d.matrixMult=function(m,C){return C.multiply(m)},yn=new Je(1,0,0,1,0,0);d.unitMatrix=d.identityMatrix=yn;var Ar=function(m,C){if(!mt[m]){var U=(C instanceof lo?"Sh":"P")+(Object.keys(Qe).length+1).toString(10);C.id=U,mt[m]=U,Qe[U]=C,Ct.publish("addPattern",C)}};d.ShadingPattern=lo,d.TilingPattern=Ro,d.addShadingPattern=function(m,C){return D("addShadingPattern()"),Ar(m,C),this},d.beginTilingPattern=function(m){D("beginTilingPattern()"),Qo(m.boundingBox[0],m.boundingBox[1],m.boundingBox[2]-m.boundingBox[0],m.boundingBox[3]-m.boundingBox[1],m.matrix)},d.endTilingPattern=function(m,C){D("endTilingPattern()"),C.stream=Ne[H].join(`
`),Ar(m,C),Ct.publish("endTilingPattern",C),un.pop().restore()};var Hr,Bt=d.__private__.newObject=function(){var m=lr();return cr(m,!0),m},lr=d.__private__.newObjectDeferred=function(){return ne++,ce[ne]=function(){return de},ne},cr=function(m,C){return C=typeof C=="boolean"&&C,ce[m]=de,C&&$(m+" 0 obj"),m},$n=d.__private__.newAdditionalObject=function(){var m={objId:lr(),content:""};return ye.push(m),m},fn=lr(),Yr=lr(),Or=d.__private__.decodeColorString=function(m){var C=m.split(" ");if(C.length!==2||C[1]!=="g"&&C[1]!=="G")C.length!==5||C[4]!=="k"&&C[4]!=="K"||(C=[(1-C[0])*(1-C[3]),(1-C[1])*(1-C[3]),(1-C[2])*(1-C[3]),"r"]);else{var U=parseFloat(C[0]);C=[U,U,U,"r"]}for(var Q="#",ie=0;ie<3;ie++)Q+=("0"+Math.floor(255*parseFloat(C[ie])).toString(16)).slice(-2);return Q},Jr=d.__private__.encodeColorString=function(m){var C;typeof m=="string"&&(m={ch1:m});var U=m.ch1,Q=m.ch2,ie=m.ch3,we=m.ch4,Ae=m.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof U=="string"&&U.charAt(0)!=="#"){var Fe=new s0(U);if(Fe.ok)U=Fe.toHex();else if(!/^\d*\.?\d*$/.test(U))throw new Error('Invalid color "'+U+'" passed to jsPDF.encodeColorString.')}if(typeof U=="string"&&/^#[0-9A-Fa-f]{3}$/.test(U)&&(U="#"+U[1]+U[1]+U[2]+U[2]+U[3]+U[3]),typeof U=="string"&&/^#[0-9A-Fa-f]{6}$/.test(U)){var $e=parseInt(U.substr(1),16);U=$e>>16&255,Q=$e>>8&255,ie=255&$e}if(Q===void 0||we===void 0&&U===Q&&Q===ie)C=typeof U=="string"?U+" "+Ae[0]:m.precision===2?N(U/255)+" "+Ae[0]:O(U/255)+" "+Ae[0];else if(we===void 0||Pt(we)==="object"){if(we&&!isNaN(we.a)&&we.a===0)return["1.","1.","1.",Ae[1]].join(" ");C=typeof U=="string"?[U,Q,ie,Ae[1]].join(" "):m.precision===2?[N(U/255),N(Q/255),N(ie/255),Ae[1]].join(" "):[O(U/255),O(Q/255),O(ie/255),Ae[1]].join(" ")}else C=typeof U=="string"?[U,Q,ie,we,Ae[2]].join(" "):m.precision===2?[N(U),N(Q),N(ie),N(we),Ae[2]].join(" "):[O(U),O(Q),O(ie),O(we),Ae[2]].join(" ");return C},Fr=d.__private__.getFilters=function(){return c},Dr=d.__private__.putStream=function(m){var C=(m=m||{}).data||"",U=m.filters||Fr(),Q=m.alreadyAppliedFilters||[],ie=m.addLength1||!1,we=C.length,Ae=m.objectId,Fe=function(dr){return dr};if(p!==null&&Ae===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");p!==null&&(Fe=jt.encryptor(Ae,0));var $e={};U===!0&&(U=["FlateEncode"]);var it=m.additionalKeyValues||[],ct=($e=Ge.API.processDataByFilters!==void 0?Ge.API.processDataByFilters(C,U):{data:C,reverseChain:[]}).reverseChain+(Array.isArray(Q)?Q.join(" "):Q.toString());if($e.data.length!==0&&(it.push({key:"Length",value:$e.data.length}),ie===!0&&it.push({key:"Length1",value:we})),ct.length!=0)if(ct.split("/").length-1==1)it.push({key:"Filter",value:ct});else{it.push({key:"Filter",value:"["+ct+"]"});for(var At=0;At<it.length;At+=1)if(it[At].key==="DecodeParms"){for(var Wt=[],ur=0;ur<$e.reverseChain.split("/").length-1;ur+=1)Wt.push("null");Wt.push(it[At].value),it[At].value="["+Wt.join(" ")+"]"}}$("<<");for(var Ft=0;Ft<it.length;Ft++)$("/"+it[Ft].key+" "+it[Ft].value);$(">>"),$e.data.length!==0&&($("stream"),$(Fe($e.data)),$("endstream"))},Qr=d.__private__.putPage=function(m){var C=m.number,U=m.data,Q=m.objId,ie=m.contentsObjId;cr(Q,!0),$("<</Type /Page"),$("/Parent "+m.rootDictionaryObjId+" 0 R"),$("/Resources "+m.resourceDictionaryObjId+" 0 R"),$("/MediaBox ["+parseFloat(W(m.mediaBox.bottomLeftX))+" "+parseFloat(W(m.mediaBox.bottomLeftY))+" "+W(m.mediaBox.topRightX)+" "+W(m.mediaBox.topRightY)+"]"),m.cropBox!==null&&$("/CropBox ["+W(m.cropBox.bottomLeftX)+" "+W(m.cropBox.bottomLeftY)+" "+W(m.cropBox.topRightX)+" "+W(m.cropBox.topRightY)+"]"),m.bleedBox!==null&&$("/BleedBox ["+W(m.bleedBox.bottomLeftX)+" "+W(m.bleedBox.bottomLeftY)+" "+W(m.bleedBox.topRightX)+" "+W(m.bleedBox.topRightY)+"]"),m.trimBox!==null&&$("/TrimBox ["+W(m.trimBox.bottomLeftX)+" "+W(m.trimBox.bottomLeftY)+" "+W(m.trimBox.topRightX)+" "+W(m.trimBox.topRightY)+"]"),m.artBox!==null&&$("/ArtBox ["+W(m.artBox.bottomLeftX)+" "+W(m.artBox.bottomLeftY)+" "+W(m.artBox.topRightX)+" "+W(m.artBox.topRightY)+"]"),typeof m.userUnit=="number"&&m.userUnit!==1&&$("/UserUnit "+m.userUnit),Ct.publish("putPage",{objId:Q,pageContext:Ze[C],pageNumber:C,page:U}),$("/Contents "+ie+" 0 R"),$(">>"),$("endobj");var we=U.join(`
`);return E===T&&(we+=`
Q`),cr(ie,!0),Dr({data:we,filters:Fr(),objectId:ie}),$("endobj"),Q},Xr=d.__private__.putPages=function(){var m,C,U=[];for(m=1;m<=Lt;m++)Ze[m].objId=lr(),Ze[m].contentsObjId=lr();for(m=1;m<=Lt;m++)U.push(Qr({number:m,data:Ne[m],objId:Ze[m].objId,contentsObjId:Ze[m].contentsObjId,mediaBox:Ze[m].mediaBox,cropBox:Ze[m].cropBox,bleedBox:Ze[m].bleedBox,trimBox:Ze[m].trimBox,artBox:Ze[m].artBox,userUnit:Ze[m].userUnit,rootDictionaryObjId:fn,resourceDictionaryObjId:Yr}));cr(fn,!0),$("<</Type /Pages");var Q="/Kids [";for(C=0;C<Lt;C++)Q+=U[C]+" 0 R ";$(Q+"]"),$("/Count "+Lt),$(">>"),$("endobj"),Ct.publish("postPutPages")},Vn=function(m){Ct.publish("putFont",{font:m,out:$,newObject:Bt,putStream:Dr}),m.isAlreadyPutted!==!0&&(m.objectNumber=Bt(),$("<<"),$("/Type /Font"),$("/BaseFont /"+jo(m.postScriptName)),$("/Subtype /Type1"),typeof m.encoding=="string"&&$("/Encoding /"+m.encoding),$("/FirstChar 32"),$("/LastChar 255"),$(">>"),$("endobj"))},fi=function(m){m.objectNumber=Bt();var C=[];C.push({key:"Type",value:"/XObject"}),C.push({key:"Subtype",value:"/Form"}),C.push({key:"BBox",value:"["+[W(m.x),W(m.y),W(m.x+m.width),W(m.y+m.height)].join(" ")+"]"}),C.push({key:"Matrix",value:"["+m.matrix.toString()+"]"});var U=m.pages[1].join(`
`);Dr({data:U,additionalKeyValues:C,objectId:m.objectNumber}),$("endobj")},di=function(m,C){C||(C=21);var U=Bt(),Q=function(Ae,Fe){var $e,it=[],ct=1/(Fe-1);for($e=0;$e<1;$e+=ct)it.push($e);if(it.push(1),Ae[0].offset!=0){var At={offset:0,color:Ae[0].color};Ae.unshift(At)}if(Ae[Ae.length-1].offset!=1){var Wt={offset:1,color:Ae[Ae.length-1].color};Ae.push(Wt)}for(var ur="",Ft=0,dr=0;dr<it.length;dr++){for($e=it[dr];$e>Ae[Ft+1].offset;)Ft++;var hr=Ae[Ft].offset,wr=($e-hr)/(Ae[Ft+1].offset-hr),mn=Ae[Ft].color,$r=Ae[Ft+1].color;ur+=K(Math.round((1-wr)*mn[0]+wr*$r[0]).toString(16))+K(Math.round((1-wr)*mn[1]+wr*$r[1]).toString(16))+K(Math.round((1-wr)*mn[2]+wr*$r[2]).toString(16))}return ur.trim()}(m.colors,C),ie=[];ie.push({key:"FunctionType",value:"0"}),ie.push({key:"Domain",value:"[0.0 1.0]"}),ie.push({key:"Size",value:"["+C+"]"}),ie.push({key:"BitsPerSample",value:"8"}),ie.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ie.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Dr({data:Q,additionalKeyValues:ie,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:U}),$("endobj"),m.objectNumber=Bt(),$("<< /ShadingType "+m.type),$("/ColorSpace /DeviceRGB");var we="/Coords ["+W(parseFloat(m.coords[0]))+" "+W(parseFloat(m.coords[1]))+" ";m.type===2?we+=W(parseFloat(m.coords[2]))+" "+W(parseFloat(m.coords[3])):we+=W(parseFloat(m.coords[2]))+" "+W(parseFloat(m.coords[3]))+" "+W(parseFloat(m.coords[4]))+" "+W(parseFloat(m.coords[5])),$(we+="]"),m.matrix&&$("/Matrix ["+m.matrix.toString()+"]"),$("/Function "+U+" 0 R"),$("/Extend [true true]"),$(">>"),$("endobj")},ge=function(m,C){var U=lr(),Q=Bt();C.push({resourcesOid:U,objectOid:Q}),m.objectNumber=Q;var ie=[];ie.push({key:"Type",value:"/Pattern"}),ie.push({key:"PatternType",value:"1"}),ie.push({key:"PaintType",value:"1"}),ie.push({key:"TilingType",value:"1"}),ie.push({key:"BBox",value:"["+m.boundingBox.map(W).join(" ")+"]"}),ie.push({key:"XStep",value:W(m.xStep)}),ie.push({key:"YStep",value:W(m.yStep)}),ie.push({key:"Resources",value:U+" 0 R"}),m.matrix&&ie.push({key:"Matrix",value:"["+m.matrix.toString()+"]"}),Dr({data:m.stream,additionalKeyValues:ie,objectId:m.objectNumber}),$("endobj")},wt=function(m){for(var C in m.objectNumber=Bt(),$("<<"),m)switch(C){case"opacity":$("/ca "+N(m[C]));break;case"stroke-opacity":$("/CA "+N(m[C]))}$(">>"),$("endobj")},Yt=function(m){cr(m.resourcesOid,!0),$("<<"),$("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var C in $("/Font <<"),De)De.hasOwnProperty(C)&&(x===!1||x===!0&&S.hasOwnProperty(C))&&$("/"+C+" "+De[C].objectNumber+" 0 R");$(">>")}(),function(){if(Object.keys(Qe).length>0){for(var C in $("/Shading <<"),Qe)Qe.hasOwnProperty(C)&&Qe[C]instanceof lo&&Qe[C].objectNumber>=0&&$("/"+C+" "+Qe[C].objectNumber+" 0 R");Ct.publish("putShadingPatternDict"),$(">>")}}(),function(C){if(Object.keys(Qe).length>0){for(var U in $("/Pattern <<"),Qe)Qe.hasOwnProperty(U)&&Qe[U]instanceof d.TilingPattern&&Qe[U].objectNumber>=0&&Qe[U].objectNumber<C&&$("/"+U+" "+Qe[U].objectNumber+" 0 R");Ct.publish("putTilingPatternDict"),$(">>")}}(m.objectOid),function(){if(Object.keys(nt).length>0){var C;for(C in $("/ExtGState <<"),nt)nt.hasOwnProperty(C)&&nt[C].objectNumber>=0&&$("/"+C+" "+nt[C].objectNumber+" 0 R");Ct.publish("putGStateDict"),$(">>")}}(),function(){for(var C in $("/XObject <<"),br)br.hasOwnProperty(C)&&br[C].objectNumber>=0&&$("/"+C+" "+br[C].objectNumber+" 0 R");Ct.publish("putXobjectDict"),$(">>")}(),$(">>"),$("endobj")},dn=function(m){st[m.fontName]=st[m.fontName]||{},st[m.fontName][m.fontStyle]=m.id},Br=function(m,C,U,Q,ie){var we={id:"F"+(Object.keys(De).length+1).toString(10),postScriptName:m,fontName:C,fontStyle:U,encoding:Q,isStandardFont:ie||!1,metadata:{}};return Ct.publish("addFont",{font:we,instance:this}),De[we.id]=we,dn(we),we.id},kr=d.__private__.pdfEscape=d.pdfEscape=function(m,C){return function(U,Q){var ie,we,Ae,Fe,$e,it,ct,At,Wt;if(Ae=(Q=Q||{}).sourceEncoding||"Unicode",$e=Q.outputEncoding,(Q.autoencode||$e)&&De[qe].metadata&&De[qe].metadata[Ae]&&De[qe].metadata[Ae].encoding&&(Fe=De[qe].metadata[Ae].encoding,!$e&&De[qe].encoding&&($e=De[qe].encoding),!$e&&Fe.codePages&&($e=Fe.codePages[0]),typeof $e=="string"&&($e=Fe[$e]),$e)){for(ct=!1,it=[],ie=0,we=U.length;ie<we;ie++)(At=$e[U.charCodeAt(ie)])?it.push(String.fromCharCode(At)):it.push(U[ie]),it[ie].charCodeAt(0)>>8&&(ct=!0);U=it.join("")}for(ie=U.length;ct===void 0&&ie!==0;)U.charCodeAt(ie-1)>>8&&(ct=!0),ie--;if(!ct)return U;for(it=Q.noBOM?[]:[254,255],ie=0,we=U.length;ie<we;ie++){if((Wt=(At=U.charCodeAt(ie))>>8)>>8)throw new Error("Character at position "+ie+" of string '"+U+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");it.push(Wt),it.push(At-(Wt<<8))}return String.fromCharCode.apply(void 0,it)}(m,C).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},pi=d.__private__.beginPage=function(m){Ne[++Lt]=[],Ze[Lt]={objId:0,contentsObjId:0,userUnit:Number(l),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(m[0]),topRightY:Number(m[1])}},mi(Lt),ve(Ne[H])},go=function(m,C){var U,Q,ie;switch(r=C||r,typeof m=="string"&&(U=y(m.toLowerCase()),Array.isArray(U)&&(Q=U[0],ie=U[1])),Array.isArray(m)&&(Q=m[0]*Xe,ie=m[1]*Xe),isNaN(Q)&&(Q=o[0],ie=o[1]),(Q>14400||ie>14400)&&(Ot.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),Q=Math.min(14400,Q),ie=Math.min(14400,ie)),o=[Q,ie],r.substr(0,1)){case"l":ie>Q&&(o=[ie,Q]);break;case"p":Q>ie&&(o=[ie,Q])}pi(o),rl(Vo),$(bo),Go!==0&&$(Go+" J"),Yo!==0&&$(Yo+" j"),Ct.publish("addPage",{pageNumber:Lt})},Lr=function(m){m>0&&m<=Lt&&(Ne.splice(m,1),Ze.splice(m,1),Lt--,H>Lt&&(H=Lt),this.setPage(H))},mi=function(m){m>0&&m<=Lt&&(H=m)},vo=d.__private__.getNumberOfPages=d.getNumberOfPages=function(){return Ne.length-1},Bi=function(m,C,U){var Q,ie=void 0;return U=U||{},m=m!==void 0?m:De[qe].fontName,C=C!==void 0?C:De[qe].fontStyle,Q=m.toLowerCase(),st[Q]!==void 0&&st[Q][C]!==void 0?ie=st[Q][C]:st[m]!==void 0&&st[m][C]!==void 0?ie=st[m][C]:U.disableWarning===!1&&Ot.warn("Unable to look up font label for font '"+m+"', '"+C+"'. Refer to getFontList() for available fonts."),ie||U.noFallback||(ie=st.times[C])==null&&(ie=st.times.normal),ie},Wn=d.__private__.putInfo=function(){var m=Bt(),C=function(Q){return Q};for(var U in p!==null&&(C=jt.encryptor(m,0)),$("<<"),$("/Producer ("+kr(C("jsPDF "+Ge.version))+")"),at)at.hasOwnProperty(U)&&at[U]&&$("/"+U.substr(0,1).toUpperCase()+U.substr(1)+" ("+kr(C(at[U]))+")");$("/CreationDate ("+kr(C(ae))+")"),$(">>"),$("endobj")},qo=d.__private__.putCatalog=function(m){var C=(m=m||{}).rootDictionaryObjId||fn;switch(Bt(),$("<<"),$("/Type /Catalog"),$("/Pages "+C+" 0 R"),Ve||(Ve="fullwidth"),Ve){case"fullwidth":$("/OpenAction [3 0 R /FitH null]");break;case"fullheight":$("/OpenAction [3 0 R /FitV null]");break;case"fullpage":$("/OpenAction [3 0 R /Fit]");break;case"original":$("/OpenAction [3 0 R /XYZ null null 1]");break;default:var U=""+Ve;U.substr(U.length-1)==="%"&&(Ve=parseInt(Ve)/100),typeof Ve=="number"&&$("/OpenAction [3 0 R /XYZ null null "+N(Ve)+"]")}switch(et||(et="continuous"),et){case"continuous":$("/PageLayout /OneColumn");break;case"single":$("/PageLayout /SinglePage");break;case"two":case"twoleft":$("/PageLayout /TwoColumnLeft");break;case"tworight":$("/PageLayout /TwoColumnRight")}Ue&&$("/PageMode /"+Ue),Ct.publish("putCatalog"),$(">>"),$("endobj")},Vt=d.__private__.putTrailer=function(){$("trailer"),$("<<"),$("/Size "+(ne+1)),$("/Root "+ne+" 0 R"),$("/Info "+(ne-1)+" 0 R"),p!==null&&$("/Encrypt "+jt.oid+" 0 R"),$("/ID [ <"+he+"> <"+he+"> ]"),$(">>")},zi=d.__private__.putHeader=function(){$("%PDF-"+w),$("%ºß¬à")},Ui=d.__private__.putXRef=function(){var m="0000000000";$("xref"),$("0 "+(ne+1)),$("0000000000 65535 f ");for(var C=1;C<=ne;C++)typeof ce[C]=="function"?$((m+ce[C]()).slice(-10)+" 00000 n "):ce[C]!==void 0?$((m+ce[C]).slice(-10)+" 00000 n "):$("0000000000 00000 n ")},pn=d.__private__.buildDocument=function(){var m;ne=0,de=0,pe=[],ce=[],ye=[],fn=lr(),Yr=lr(),ve(pe),Ct.publish("buildDocument"),zi(),Xr(),function(){Ct.publish("putAdditionalObjects");for(var U=0;U<ye.length;U++){var Q=ye[U];cr(Q.objId,!0),$(Q.content),$("endobj")}Ct.publish("postPutAdditionalObjects")}(),m=[],function(){for(var U in De)De.hasOwnProperty(U)&&(x===!1||x===!0&&S.hasOwnProperty(U))&&Vn(De[U])}(),function(){var U;for(U in nt)nt.hasOwnProperty(U)&&wt(nt[U])}(),function(){for(var U in br)br.hasOwnProperty(U)&&fi(br[U])}(),function(U){var Q;for(Q in Qe)Qe.hasOwnProperty(Q)&&(Qe[Q]instanceof lo?di(Qe[Q]):Qe[Q]instanceof Ro&&ge(Qe[Q],U))}(m),Ct.publish("putResources"),m.forEach(Yt),Yt({resourcesOid:Yr,objectOid:Number.MAX_SAFE_INTEGER}),Ct.publish("postPutResources"),p!==null&&(jt.oid=Bt(),$("<<"),$("/Filter /Standard"),$("/V "+jt.v),$("/R "+jt.r),$("/U <"+jt.toHexString(jt.U)+">"),$("/O <"+jt.toHexString(jt.O)+">"),$("/P "+jt.P),$(">>"),$("endobj")),Wn(),qo();var C=de;return Ui(),Vt(),$("startxref"),$(""+C),$("%%EOF"),ve(Ne[H]),pe.join(`
`)},Pn=d.__private__.getBlob=function(m){return new Blob([ot(m)],{type:"application/pdf"})},Zr=d.output=d.__private__.output=(Hr=function(m,C){switch(typeof(C=C||{})=="string"?C={filename:C}:C.filename=C.filename||"generated.pdf",m){case void 0:return pn();case"save":d.save(C.filename);break;case"arraybuffer":return ot(pn());case"blob":return Pn(pn());case"bloburi":case"bloburl":if(tt.URL!==void 0&&typeof tt.URL.createObjectURL=="function")return tt.URL&&tt.URL.createObjectURL(Pn(pn()))||void 0;Ot.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var U="",Q=pn();try{U=$1(Q)}catch{U=$1(unescape(encodeURIComponent(Q)))}return"data:application/pdf;filename="+C.filename+";base64,"+U;case"pdfobjectnewwindow":if(Object.prototype.toString.call(tt)==="[object Window]"){var ie="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",we=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';C.pdfObjectUrl&&(ie=C.pdfObjectUrl,we="");var Ae='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ie+'"'+we+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(C)+");<\/script></body></html>",Fe=tt.open();return Fe!==null&&Fe.document.write(Ae),Fe}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(tt)==="[object Window]"){var $e='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(C.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+C.filename+'" width="500px" height="400px" /></body></html>',it=tt.open();if(it!==null){it.document.write($e);var ct=this;it.document.documentElement.querySelector("#pdfViewer").onload=function(){it.document.title=C.filename,it.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ct.output("bloburl"))}}return it}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(tt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var At='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",C)+'"></iframe></body></html>',Wt=tt.open();if(Wt!==null&&(Wt.document.write(At),Wt.document.title=C.filename),Wt||typeof safari>"u")return Wt;break;case"datauri":case"dataurl":return tt.document.location.href=this.output("datauristring",C);default:return null}},Hr.foo=function(){try{return Hr.apply(this,arguments)}catch(U){var m=U.stack||"";~m.indexOf(" at ")&&(m=m.split(" at ")[1]);var C="Error in function "+m.split(`
`)[0].split("<")[0]+": "+U.message;if(!tt.console)throw new Error(C);tt.console.error(C,U),tt.alert&&alert(C)}},Hr.foo.bar=Hr,Hr.foo),Gn=function(m){return Array.isArray(Hn)===!0&&Hn.indexOf(m)>-1};switch(n){case"pt":Xe=1;break;case"mm":Xe=72/25.4;break;case"cm":Xe=72/2.54;break;case"in":Xe=72;break;case"px":Xe=Gn("px_scaling")==1?.75:96/72;break;case"pc":case"em":Xe=12;break;case"ex":Xe=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);Xe=n}var jt=null;_e(),se();var En=d.__private__.getPageInfo=d.getPageInfo=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Ze[m].objId,pageNumber:m,pageContext:Ze[m]}},Js=d.__private__.getPageInfoByObjId=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var C in Ze)if(Ze[C].objId===m)break;return En(C)},Qs=d.__private__.getCurrentPageInfo=d.getCurrentPageInfo=function(){return{objId:Ze[H].objId,pageNumber:H,pageContext:Ze[H]}};d.addPage=function(){return go.apply(this,arguments),this},d.setPage=function(){return mi.apply(this,arguments),ve.call(this,Ne[H]),this},d.insertPage=function(m){return this.addPage(),this.movePage(H,m),this},d.movePage=function(m,C){var U,Q;if(m>C){U=Ne[m],Q=Ze[m];for(var ie=m;ie>C;ie--)Ne[ie]=Ne[ie-1],Ze[ie]=Ze[ie-1];Ne[C]=U,Ze[C]=Q,this.setPage(C)}else if(m<C){U=Ne[m],Q=Ze[m];for(var we=m;we<C;we++)Ne[we]=Ne[we+1],Ze[we]=Ze[we+1];Ne[C]=U,Ze[C]=Q,this.setPage(C)}return this},d.deletePage=function(){return Lr.apply(this,arguments),this},d.__private__.text=d.text=function(m,C,U,Q,ie){var we,Ae,Fe,$e,it,ct,At,Wt,ur,Ft=(Q=Q||{}).scope||this;if(typeof m=="number"&&typeof C=="number"&&(typeof U=="string"||Array.isArray(U))){var dr=U;U=C,C=m,m=dr}if(arguments[3]instanceof Je==0?(Fe=arguments[4],$e=arguments[5],Pt(At=arguments[3])==="object"&&At!==null||(typeof Fe=="string"&&($e=Fe,Fe=null),typeof At=="string"&&($e=At,At=null),typeof At=="number"&&(Fe=At,At=null),Q={flags:At,angle:Fe,align:$e})):(D("The transform parameter of text() with a Matrix value"),ur=ie),isNaN(C)||isNaN(U)||m==null)throw new Error("Invalid arguments passed to jsPDF.text");if(m.length===0)return Ft;var hr,wr="",mn=typeof Q.lineHeightFactor=="number"?Q.lineHeightFactor:Hi,$r=Ft.internal.scaleFactor;function Da(kt){return kt=kt.split("	").join(Array(Q.TabLen||9).join(" ")),kr(kt,At)}function So(kt){for(var Rt,tr=kt.concat(),pr=[],ei=tr.length;ei--;)typeof(Rt=tr.shift())=="string"?pr.push(Rt):Array.isArray(kt)&&(Rt.length===1||Rt[1]===void 0&&Rt[2]===void 0)?pr.push(Rt[0]):pr.push([Rt[0],Rt[1],Rt[2]]);return pr}function Ji(kt,Rt){var tr;if(typeof kt=="string")tr=Rt(kt)[0];else if(Array.isArray(kt)){for(var pr,ei,aa=kt.concat(),Ao=[],Ua=aa.length;Ua--;)typeof(pr=aa.shift())=="string"?Ao.push(Rt(pr)[0]):Array.isArray(pr)&&typeof pr[0]=="string"&&(ei=Rt(pr[0],pr[1],pr[2]),Ao.push([ei[0],ei[1],ei[2]]));tr=Ao}return tr}var bi=!1,Qi=!0;if(typeof m=="string")bi=!0;else if(Array.isArray(m)){var Xi=m.concat();Ae=[];for(var Zi,Nr=Xi.length;Nr--;)(typeof(Zi=Xi.shift())!="string"||Array.isArray(Zi)&&typeof Zi[0]!="string")&&(Qi=!1);bi=Qi}if(bi===!1)throw new Error('Type of text must be string or Array. "'+m+'" is not recognized.');typeof m=="string"&&(m=m.match(/[\r?\n]/)?m.split(/\r\n|\r|\n/g):[m]);var Ki=ke/Ft.internal.scaleFactor,eo=Ki*(mn-1);switch(Q.baseline){case"bottom":U-=eo;break;case"top":U+=Ki-eo;break;case"hanging":U+=Ki-2*eo;break;case"middle":U+=Ki/2-eo}if((ct=Q.maxWidth||0)>0&&(typeof m=="string"?m=Ft.splitTextToSize(m,ct):Object.prototype.toString.call(m)==="[object Array]"&&(m=m.reduce(function(kt,Rt){return kt.concat(Ft.splitTextToSize(Rt,ct))},[]))),we={text:m,x:C,y:U,options:Q,mutex:{pdfEscape:kr,activeFontKey:qe,fonts:De,activeFontSize:ke}},Ct.publish("preProcessText",we),m=we.text,Fe=(Q=we.options).angle,ur instanceof Je==0&&Fe&&typeof Fe=="number"){Fe*=Math.PI/180,Q.rotationDirection===0&&(Fe=-Fe),E===T&&(Fe=-Fe);var Xo=Math.cos(Fe),Zo=Math.sin(Fe);ur=new Je(Xo,Zo,-Zo,Xo,0,0)}else Fe&&Fe instanceof Je&&(ur=Fe);E!==T||ur||(ur=yn),(it=Q.charSpace||wo)!==void 0&&(wr+=W(J(it))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Wt=Q.horizontalScale)!==void 0&&(wr+=W(100*Wt)+` Tz
`),Q.lang;var Jt=-1,Zn=Q.renderingMode!==void 0?Q.renderingMode:Q.stroke,_o=Ft.internal.getCurrentPageInfo().pageContext;switch(Zn){case 0:case!1:case"fill":Jt=0;break;case 1:case!0:case"stroke":Jt=1;break;case 2:case"fillThenStroke":Jt=2;break;case 3:case"invisible":Jt=3;break;case 4:case"fillAndAddForClipping":Jt=4;break;case 5:case"strokeAndAddPathForClipping":Jt=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Jt=6;break;case 7:case"addToPathForClipping":Jt=7}var Ba=_o.usedRenderingMode!==void 0?_o.usedRenderingMode:-1;Jt!==-1?wr+=Jt+` Tr
`:Ba!==-1&&(wr+=`0 Tr
`),Jt!==-1&&(_o.usedRenderingMode=Jt),$e=Q.align||"left";var gn,to=ke*mn,Ko=Ft.internal.pageSize.getWidth(),ea=De[qe];it=Q.charSpace||wo,ct=Q.maxWidth||0,At=Object.assign({autoencode:!0,noBOM:!0},Q.flags);var xi=[],ro=function(kt){return Ft.getStringUnitWidth(kt,{font:ea,charSpace:it,fontSize:ke,doKerning:!1})*ke/$r};if(Object.prototype.toString.call(m)==="[object Array]"){var Kr;Ae=So(m),$e!=="left"&&(gn=Ae.map(ro));var en,wi=0;if($e==="right"){C-=gn[0],m=[],Nr=Ae.length;for(var Kn=0;Kn<Nr;Kn++)Kn===0?(en=Yn(C),Kr=Jn(U)):(en=J(wi-gn[Kn]),Kr=-to),m.push([Ae[Kn],en,Kr]),wi=gn[Kn]}else if($e==="center"){C-=gn[0]/2,m=[],Nr=Ae.length;for(var yi=0;yi<Nr;yi++)yi===0?(en=Yn(C),Kr=Jn(U)):(en=J((wi-gn[yi])/2),Kr=-to),m.push([Ae[yi],en,Kr]),wi=gn[yi]}else if($e==="left"){m=[],Nr=Ae.length;for(var ta=0;ta<Nr;ta++)m.push(Ae[ta])}else if($e==="justify"&&ea.encoding==="Identity-H"){m=[],Nr=Ae.length,ct=ct!==0?ct:Ko;for(var Co=0,er=0;er<Nr;er++)if(Kr=er===0?Jn(U):-to,en=er===0?Yn(C):Co,er<Nr-1){var za=J((ct-gn[er])/(Ae[er].split(" ").length-1)),jn=Ae[er].split(" ");m.push([jn[0]+" ",en,Kr]),Co=0;for(var Rn=1;Rn<jn.length;Rn++){var ra=(ro(jn[Rn-1]+" "+jn[Rn])-ro(jn[Rn]))*$r+za;Rn==jn.length-1?m.push([jn[Rn],ra,0]):m.push([jn[Rn]+" ",ra,0]),Co-=ra}}else m.push([Ae[er],en,Kr]);m.push(["",Co,0])}else{if($e!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(m=[],Nr=Ae.length,ct=ct!==0?ct:Ko,er=0;er<Nr;er++){Kr=er===0?Jn(U):-to,en=er===0?Yn(C):0;var na=Ae[er].split(" ").length-1,ia=na>0?(ct-gn[er])/na:0;er<Nr-1?xi.push(W(J(ia))):xi.push(0),m.push([Ae[er],en,Kr])}}}(typeof Q.R2L=="boolean"?Q.R2L:Ke)===!0&&(m=Ji(m,function(kt,Rt,tr){return[kt.split("").reverse().join(""),Rt,tr]})),we={text:m,x:C,y:U,options:Q,mutex:{pdfEscape:kr,activeFontKey:qe,fonts:De,activeFontSize:ke}},Ct.publish("postProcessText",we),m=we.text,hr=we.mutex.isHex||!1;var oa=De[qe].encoding;oa!=="WinAnsiEncoding"&&oa!=="StandardEncoding"||(m=Ji(m,function(kt,Rt,tr){return[Da(kt),Rt,tr]})),Ae=So(m),m=[];for(var Si,_i,Ci,no=Array.isArray(Ae[0])?1:0,Ai="",io=function(kt,Rt,tr){var pr="";return tr instanceof Je?(tr=typeof Q.angle=="number"?hn(tr,new Je(1,0,0,1,kt,Rt)):hn(new Je(1,0,0,1,kt,Rt),tr),E===T&&(tr=hn(new Je(1,0,0,-1,0,0),tr)),pr=tr.join(" ")+` Tm
`):pr=W(kt)+" "+W(Rt)+` Td
`,pr},vn=0;vn<Ae.length;vn++){switch(Ai="",no){case 1:Ci=(hr?"<":"(")+Ae[vn][0]+(hr?">":")"),Si=parseFloat(Ae[vn][1]),_i=parseFloat(Ae[vn][2]);break;case 0:Ci=(hr?"<":"(")+Ae[vn]+(hr?">":")"),Si=Yn(C),_i=Jn(U)}xi!==void 0&&xi[vn]!==void 0&&(Ai=xi[vn]+` Tw
`),vn===0?m.push(Ai+io(Si,_i,ur)+Ci):no===0?m.push(Ai+Ci):no===1&&m.push(Ai+io(Si,_i,ur)+Ci)}m=no===0?m.join(` Tj
T* `):m.join(` Tj
`),m+=` Tj
`;var Mn=`BT
/`;return Mn+=qe+" "+ke+` Tf
`,Mn+=W(ke*mn)+` TL
`,Mn+=$i+`
`,Mn+=wr,Mn+=m,$(Mn+="ET"),S[qe]=!0,Ft};var Xs=d.__private__.clip=d.clip=function(m){return $(m==="evenodd"?"W*":"W"),this};d.clipEvenOdd=function(){return Xs("evenodd")},d.__private__.discardPath=d.discardPath=function(){return $("n"),this};var Tn=d.__private__.isValidStyle=function(m){var C=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(m)!==-1&&(C=!0),C};d.__private__.setDefaultPathOperation=d.setDefaultPathOperation=function(m){return Tn(m)&&(f=m),this};var Ea=d.__private__.getStyle=d.getStyle=function(m){var C=f;switch(m){case"D":case"S":C="S";break;case"F":C="f";break;case"FD":case"DF":C="B";break;case"f":case"f*":case"B":case"B*":C=m}return C},Ta=d.close=function(){return $("h"),this};d.stroke=function(){return $("S"),this},d.fill=function(m){return gi("f",m),this},d.fillEvenOdd=function(m){return gi("f*",m),this},d.fillStroke=function(m){return gi("B",m),this},d.fillStrokeEvenOdd=function(m){return gi("B*",m),this};var gi=function(m,C){Pt(C)==="object"?Ks(C,m):$(m)},Ho=function(m){m===null||E===T&&m===void 0||(m=Ea(m),$(m))};function Zs(m,C,U,Q,ie){var we=new Ro(C||this.boundingBox,U||this.xStep,Q||this.yStep,this.gState,ie||this.matrix);we.stream=this.stream;var Ae=m+"$$"+this.cloneIndex+++"$$";return Ar(Ae,we),we}var Ks=function(m,C){var U=mt[m.key],Q=Qe[U];if(Q instanceof lo)$("q"),$(el(C)),Q.gState&&d.setGState(Q.gState),$(m.matrix.toString()+" cm"),$("/"+U+" sh"),$("Q");else if(Q instanceof Ro){var ie=new Je(1,0,0,-1,0,Yi());m.matrix&&(ie=ie.multiply(m.matrix||yn),U=Zs.call(Q,m.key,m.boundingBox,m.xStep,m.yStep,ie).id),$("q"),$("/Pattern cs"),$("/"+U+" scn"),Q.gState&&d.setGState(Q.gState),$(C),$("Q")}},el=function(m){switch(m){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},$o=d.moveTo=function(m,C){return $(W(J(m))+" "+W(Y(C))+" m"),this},qi=d.lineTo=function(m,C){return $(W(J(m))+" "+W(Y(C))+" l"),this},vi=d.curveTo=function(m,C,U,Q,ie,we){return $([W(J(m)),W(Y(C)),W(J(U)),W(Y(Q)),W(J(ie)),W(Y(we)),"c"].join(" ")),this};d.__private__.line=d.line=function(m,C,U,Q,ie){if(isNaN(m)||isNaN(C)||isNaN(U)||isNaN(Q)||!Tn(ie))throw new Error("Invalid arguments passed to jsPDF.line");return E===j?this.lines([[U-m,Q-C]],m,C,[1,1],ie||"S"):this.lines([[U-m,Q-C]],m,C,[1,1]).stroke()},d.__private__.lines=d.lines=function(m,C,U,Q,ie,we){var Ae,Fe,$e,it,ct,At,Wt,ur,Ft,dr,hr,wr;if(typeof m=="number"&&(wr=U,U=C,C=m,m=wr),Q=Q||[1,1],we=we||!1,isNaN(C)||isNaN(U)||!Array.isArray(m)||!Array.isArray(Q)||!Tn(ie)||typeof we!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for($o(C,U),Ae=Q[0],Fe=Q[1],it=m.length,dr=C,hr=U,$e=0;$e<it;$e++)(ct=m[$e]).length===2?(dr=ct[0]*Ae+dr,hr=ct[1]*Fe+hr,qi(dr,hr)):(At=ct[0]*Ae+dr,Wt=ct[1]*Fe+hr,ur=ct[2]*Ae+dr,Ft=ct[3]*Fe+hr,dr=ct[4]*Ae+dr,hr=ct[5]*Fe+hr,vi(At,Wt,ur,Ft,dr,hr));return we&&Ta(),Ho(ie),this},d.path=function(m){for(var C=0;C<m.length;C++){var U=m[C],Q=U.c;switch(U.op){case"m":$o(Q[0],Q[1]);break;case"l":qi(Q[0],Q[1]);break;case"c":vi.apply(this,Q);break;case"h":Ta()}}return this},d.__private__.rect=d.rect=function(m,C,U,Q,ie){if(isNaN(m)||isNaN(C)||isNaN(U)||isNaN(Q)||!Tn(ie))throw new Error("Invalid arguments passed to jsPDF.rect");return E===j&&(Q=-Q),$([W(J(m)),W(Y(C)),W(J(U)),W(J(Q)),"re"].join(" ")),Ho(ie),this},d.__private__.triangle=d.triangle=function(m,C,U,Q,ie,we,Ae){if(isNaN(m)||isNaN(C)||isNaN(U)||isNaN(Q)||isNaN(ie)||isNaN(we)||!Tn(Ae))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[U-m,Q-C],[ie-U,we-Q],[m-ie,C-we]],m,C,[1,1],Ae,!0),this},d.__private__.roundedRect=d.roundedRect=function(m,C,U,Q,ie,we,Ae){if(isNaN(m)||isNaN(C)||isNaN(U)||isNaN(Q)||isNaN(ie)||isNaN(we)||!Tn(Ae))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Fe=4/3*(Math.SQRT2-1);return ie=Math.min(ie,.5*U),we=Math.min(we,.5*Q),this.lines([[U-2*ie,0],[ie*Fe,0,ie,we-we*Fe,ie,we],[0,Q-2*we],[0,we*Fe,-ie*Fe,we,-ie,we],[2*ie-U,0],[-ie*Fe,0,-ie,-we*Fe,-ie,-we],[0,2*we-Q],[0,-we*Fe,ie*Fe,-we,ie,-we]],m+ie,C,[1,1],Ae,!0),this},d.__private__.ellipse=d.ellipse=function(m,C,U,Q,ie){if(isNaN(m)||isNaN(C)||isNaN(U)||isNaN(Q)||!Tn(ie))throw new Error("Invalid arguments passed to jsPDF.ellipse");var we=4/3*(Math.SQRT2-1)*U,Ae=4/3*(Math.SQRT2-1)*Q;return $o(m+U,C),vi(m+U,C-Ae,m+we,C-Q,m,C-Q),vi(m-we,C-Q,m-U,C-Ae,m-U,C),vi(m-U,C+Ae,m-we,C+Q,m,C+Q),vi(m+we,C+Q,m+U,C+Ae,m+U,C),Ho(ie),this},d.__private__.circle=d.circle=function(m,C,U,Q){if(isNaN(m)||isNaN(C)||isNaN(U)||!Tn(Q))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(m,C,U,U,Q)},d.setFont=function(m,C,U){return U&&(C=te(C,U)),qe=Bi(m,C,{disableWarning:!1}),this};var tl=d.__private__.getFont=d.getFont=function(){return De[Bi.apply(d,arguments)]};d.__private__.getFontList=d.getFontList=function(){var m,C,U={};for(m in st)if(st.hasOwnProperty(m))for(C in U[m]=[],st[m])st[m].hasOwnProperty(C)&&U[m].push(C);return U},d.addFont=function(m,C,U,Q,ie){var we=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&we.indexOf(arguments[3])!==-1?ie=arguments[3]:arguments[3]&&we.indexOf(arguments[3])==-1&&(U=te(U,Q)),Br.call(this,m,C,U,ie=ie||"Identity-H")};var Hi,Vo=e.lineWidth||.200025,lt=d.__private__.getLineWidth=d.getLineWidth=function(){return Vo},rl=d.__private__.setLineWidth=d.setLineWidth=function(m){return Vo=m,$(W(J(m))+" w"),this};d.__private__.setLineDash=Ge.API.setLineDash=Ge.API.setLineDashPattern=function(m,C){if(m=m||[],C=C||0,isNaN(C)||!Array.isArray(m))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return m=m.map(function(U){return W(J(U))}).join(" "),C=W(J(C)),$("["+m+"] "+C+" d"),this};var nl=d.__private__.getLineHeight=d.getLineHeight=function(){return ke*Hi};d.__private__.getLineHeight=d.getLineHeight=function(){return ke*Hi};var il=d.__private__.setLineHeightFactor=d.setLineHeightFactor=function(m){return typeof(m=m||1.15)=="number"&&(Hi=m),this},ol=d.__private__.getLineHeightFactor=d.getLineHeightFactor=function(){return Hi};il(e.lineHeight);var Yn=d.__private__.getHorizontalCoordinate=function(m){return J(m)},Jn=d.__private__.getVerticalCoordinate=function(m){return E===T?m:Ze[H].mediaBox.topRightY-Ze[H].mediaBox.bottomLeftY-J(m)},al=d.__private__.getHorizontalCoordinateString=d.getHorizontalCoordinateString=function(m){return W(Yn(m))},sl=d.__private__.getVerticalCoordinateString=d.getVerticalCoordinateString=function(m){return W(Jn(m))},bo=e.strokeColor||"0 G";d.__private__.getStrokeColor=d.getDrawColor=function(){return Or(bo)},d.__private__.setStrokeColor=d.setDrawColor=function(m,C,U,Q){return bo=Jr({ch1:m,ch2:C,ch3:U,ch4:Q,pdfColorType:"draw",precision:2}),$(bo),this};var Wo=e.fillColor||"0 g";d.__private__.getFillColor=d.getFillColor=function(){return Or(Wo)},d.__private__.setFillColor=d.setFillColor=function(m,C,U,Q){return Wo=Jr({ch1:m,ch2:C,ch3:U,ch4:Q,pdfColorType:"fill",precision:2}),$(Wo),this};var $i=e.textColor||"0 g",xo=d.__private__.getTextColor=d.getTextColor=function(){return Or($i)};d.__private__.setTextColor=d.setTextColor=function(m,C,U,Q){return $i=Jr({ch1:m,ch2:C,ch3:U,ch4:Q,pdfColorType:"text",precision:3}),this};var wo=e.charSpace,ll=d.__private__.getCharSpace=d.getCharSpace=function(){return parseFloat(wo||0)};d.__private__.setCharSpace=d.setCharSpace=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return wo=m,this};var Go=0;d.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},d.__private__.setLineCap=d.setLineCap=function(m){var C=d.CapJoinStyles[m];if(C===void 0)throw new Error("Line cap style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Go=C,$(C+" J"),this};var Yo=0;d.__private__.setLineJoin=d.setLineJoin=function(m){var C=d.CapJoinStyles[m];if(C===void 0)throw new Error("Line join style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Yo=C,$(C+" j"),this},d.__private__.setLineMiterLimit=d.__private__.setMiterLimit=d.setLineMiterLimit=d.setMiterLimit=function(m){if(m=m||0,isNaN(m))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return $(W(J(m))+" M"),this},d.GState=Rs,d.setGState=function(m){(m=typeof m=="string"?nt[Ht[m]]:Vi(null,m)).equals(Kt)||($("/"+m.id+" gs"),Kt=m)};var Vi=function(m,C){if(!m||!Ht[m]){var U=!1;for(var Q in nt)if(nt.hasOwnProperty(Q)&&nt[Q].equals(C)){U=!0;break}if(U)C=nt[Q];else{var ie="GS"+(Object.keys(nt).length+1).toString(10);nt[ie]=C,C.id=ie}return m&&(Ht[m]=C.id),Ct.publish("addGState",C),C}};d.addGState=function(m,C){return Vi(m,C),this},d.saveGraphicsState=function(){return $("q"),xt.push({key:qe,size:ke,color:$i}),this},d.restoreGraphicsState=function(){$("Q");var m=xt.pop();return qe=m.key,ke=m.size,$i=m.color,Kt=null,this},d.setCurrentTransformationMatrix=function(m){return $(m.toString()+" cm"),this},d.comment=function(m){return $("#"+m),this};var Wi=function(m,C){var U=m||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return U},set:function(we){isNaN(we)||(U=parseFloat(we))}});var Q=C||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return Q},set:function(we){isNaN(we)||(Q=parseFloat(we))}});var ie="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ie},set:function(we){ie=we.toString()}}),this},Jo=function(m,C,U,Q){Wi.call(this,m,C),this.type="rect";var ie=U||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ie},set:function(Ae){isNaN(Ae)||(ie=parseFloat(Ae))}});var we=Q||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return we},set:function(Ae){isNaN(Ae)||(we=parseFloat(Ae))}}),this},yo=function(){this.page=Lt,this.currentPage=H,this.pages=Ne.slice(0),this.pagesContext=Ze.slice(0),this.x=He,this.y=Tt,this.matrix=bt,this.width=ja(H),this.height=Qn(H),this.outputDestination=Te,this.id="",this.objectNumber=-1};yo.prototype.restore=function(){Lt=this.page,H=this.currentPage,Ze=this.pagesContext,Ne=this.pages,He=this.x,Tt=this.y,bt=this.matrix,Ra(H,this.width),Xn(H,this.height),Te=this.outputDestination};var Qo=function(m,C,U,Q,ie){un.push(new yo),Lt=H=0,Ne=[],He=m,Tt=C,bt=ie,pi([U,Q])};for(var Gi in d.beginFormObject=function(m,C,U,Q,ie){return Qo(m,C,U,Q,ie),this},d.endFormObject=function(m){return function(C){if(Mr[C])un.pop().restore();else{var U=new yo,Q="Xo"+(Object.keys(br).length+1).toString(10);U.id=Q,Mr[C]=Q,br[Q]=U,Ct.publish("addFormObject",U),un.pop().restore()}}(m),this},d.doFormObject=function(m,C){var U=br[Mr[m]];return $("q"),$(C.toString()+" cm"),$("/"+U.id+" Do"),$("Q"),this},d.getFormObject=function(m){var C=br[Mr[m]];return{x:C.x,y:C.y,width:C.width,height:C.height,matrix:C.matrix}},d.save=function(m,C){return m=m||"generated.pdf",(C=C||{}).returnPromise=C.returnPromise||!1,C.returnPromise===!1?(so(Pn(pn()),m),typeof so.unload=="function"&&tt.setTimeout&&setTimeout(so.unload,911),this):new Promise(function(U,Q){try{var ie=so(Pn(pn()),m);typeof so.unload=="function"&&tt.setTimeout&&setTimeout(so.unload,911),U(ie)}catch(we){Q(we.message)}})},Ge.API)Ge.API.hasOwnProperty(Gi)&&(Gi==="events"&&Ge.API.events.length?function(m,C){var U,Q,ie;for(ie=C.length-1;ie!==-1;ie--)U=C[ie][0],Q=C[ie][1],m.subscribe.apply(m,[U].concat(typeof Q=="function"?[Q]:Q))}(Ct,Ge.API.events):d[Gi]=Ge.API[Gi]);function ja(m){return Ze[m].mediaBox.topRightX-Ze[m].mediaBox.bottomLeftX}function Ra(m,C){Ze[m].mediaBox.topRightX=C+Ze[m].mediaBox.bottomLeftX}function Qn(m){return Ze[m].mediaBox.topRightY-Ze[m].mediaBox.bottomLeftY}function Xn(m,C){Ze[m].mediaBox.topRightY=C+Ze[m].mediaBox.bottomLeftY}var Ma=d.getPageWidth=function(m){return ja(m=m||H)/Xe},Oa=d.setPageWidth=function(m,C){Ra(m,C*Xe)},Yi=d.getPageHeight=function(m){return Qn(m=m||H)/Xe},Fa=d.setPageHeight=function(m,C){Xn(m,C*Xe)};return d.internal={pdfEscape:kr,getStyle:Ea,getFont:tl,getFontSize:Re,getCharSpace:ll,getTextColor:xo,getLineHeight:nl,getLineHeightFactor:ol,getLineWidth:lt,write:pt,getHorizontalCoordinate:Yn,getVerticalCoordinate:Jn,getCoordinateString:al,getVerticalCoordinateString:sl,collections:{},newObject:Bt,newAdditionalObject:$n,newObjectDeferred:lr,newObjectDeferredBegin:cr,getFilters:Fr,putStream:Dr,events:Ct,scaleFactor:Xe,pageSize:{getWidth:function(){return Ma(H)},setWidth:function(m){Oa(H,m)},getHeight:function(){return Yi(H)},setHeight:function(m){Fa(H,m)}},encryptionOptions:p,encryption:jt,getEncryptor:function(m){return p!==null?jt.encryptor(m,0):function(C){return C}},output:Zr,getNumberOfPages:vo,pages:Ne,out:$,f2:N,f3:O,getPageInfo:En,getPageInfoByObjId:Js,getCurrentPageInfo:Qs,getPDFVersion:_,Point:Wi,Rectangle:Jo,Matrix:Je,hasHotfix:Gn},Object.defineProperty(d.internal.pageSize,"width",{get:function(){return Ma(H)},set:function(m){Oa(H,m)},enumerable:!0,configurable:!0}),Object.defineProperty(d.internal.pageSize,"height",{get:function(){return Yi(H)},set:function(m){Fa(H,m)},enumerable:!0,configurable:!0}),(function(m){for(var C=0,U=Ye.length;C<U;C++){var Q=Br.call(this,m[C][0],m[C][1],m[C][2],Ye[C][3],!0);x===!1&&(S[Q]=!0);var ie=m[C][0].split("-");dn({id:Q,fontName:ie[0],fontStyle:ie[1]||""})}Ct.publish("addFonts",{fonts:De,dictionary:st})}).call(d,Ye),qe="F1",go(o,r),Ct.publish("initialized"),d}To.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},To.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},To.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},To.prototype.processOwnerPassword=function(e,t){return vc(gc(t).substr(0,5),e)},To.prototype.encryptor=function(e,t){var r=gc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return vc(r,n)}},Rs.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||Pt(e)!==Pt(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},Ge.API={events:[]},Ge.version="3.0.3";var Zt=Ge.API,Hc=1,mo=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Po=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},ut=function(e){return e.toFixed(2)},ji=function(e){return e.toFixed(5)};Zt.__acroform__={};var Gr=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},Y1=function(e){return e*Hc},Fn=function(e){var t=new h0,r=Oe.internal.getHeight(e)||0,n=Oe.internal.getWidth(e)||0;return t.BBox=[0,0,Number(ut(n)),Number(ut(r))],t},Z6=Zt.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},K6=Zt.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},ev=Zt.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},ir=Zt.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return ev(e,t-1)},or=Zt.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return Z6(e,t-1)},ar=Zt.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return K6(e,t-1)},tv=Zt.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,o=e[0],a=e[1],c=e[2],l=e[3],h={};return h.lowerLeft_X=r(o)||0,h.lowerLeft_Y=n(a+l)||0,h.upperRight_X=r(o+c)||0,h.upperRight_Y=n(a)||0,[Number(ut(h.lowerLeft_X)),Number(ut(h.lowerLeft_Y)),Number(ut(h.upperRight_X)),Number(ut(h.upperRight_Y))]},rv=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=bc(e,r),o=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+o+" "+ut(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var a=Fn(e);return a.scope=e.scope,a.stream=t.join(`
`),a}},bc=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},o=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");o=e.multiline?o.map(function(N){return N.split(`
`)}):o.map(function(N){return[N]});var a=r,c=Oe.internal.getHeight(e)||0;c=c<0?-c:c;var l=Oe.internal.getWidth(e)||0;l=l<0?-l:l;var h=function(N,O,J){if(N+1<o.length){var Y=O+" "+o[N+1][0];return gs(Y,e,J).width<=l-4}return!1};a++;e:for(;a>0;){t="",a--;var f,p,x=gs("3",e,a).height,S=e.multiline?c-a:(c-x)/2,d=S+=2,w=0,_=0,k=0;if(a<=0){t=`(...) Tj
`,t+="% Width of Text: "+gs(t,e,a=12).width+", FieldWidth:"+l+`
`;break}for(var y="",j=0,T=0;T<o.length;T++)if(o.hasOwnProperty(T)){var E=!1;if(o[T].length!==1&&k!==o[T].length-1){if((x+2)*(j+2)+2>c)continue e;y+=o[T][k],E=!0,_=T,T--}else{y=(y+=o[T][k]+" ").substr(y.length-1)==" "?y.substr(0,y.length-1):y;var V=parseInt(T),Z=h(V,y,a),te=T>=o.length-1;if(Z&&!te){y+=" ",k=0;continue}if(Z||te){if(te)_=V;else if(e.multiline&&(x+2)*(j+2)+2>c)continue e}else{if(!e.multiline||(x+2)*(j+2)+2>c)continue e;_=V}}for(var W="",D=w;D<=_;D++){var X=o[D];if(e.multiline){if(D===_){W+=X[k]+" ",k=(k+1)%X.length;continue}if(D===w){W+=X[X.length-1]+" ";continue}}W+=X[0]+" "}switch(W=W.substr(W.length-1)==" "?W.substr(0,W.length-1):W,p=gs(W,e,a).width,e.textAlign){case"right":f=l-p-2;break;case"center":f=(l-p)/2;break;default:f=2}t+=ut(f)+" "+ut(d)+` Td
`,t+="("+mo(W)+`) Tj
`,t+=-ut(f)+` 0 Td
`,d=-(a+2),p=0,w=E?_:_+1,j++,y=""}break}return n.text=t,n.fontSize=a,n},gs=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),o=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:o}},nv={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},iv=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},ov=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(Nn.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(nv)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");Hc=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new f0,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];a.objId=void 0,a.hasAnnotation&&iv(a,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,o){var a=!n;for(var c in n||(o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(c)){var l=n[c],h=[],f=l.Rect;if(l.Rect&&(l.Rect=tv(l.Rect,o)),o.internal.newObjectDeferredBegin(l.objId,!0),l.DA=Oe.createDefaultAppearanceStream(l),Pt(l)==="object"&&typeof l.getKeyValueListForStream=="function"&&(h=l.getKeyValueListForStream()),l.Rect=f,l.hasAppearanceStream&&!l.appearanceStreamContent){var p=rv(l);h.push({key:"AP",value:"<</N "+p+">>"}),o.internal.acroformPlugin.xForms.push(p)}if(l.appearanceStreamContent){var x="";for(var S in l.appearanceStreamContent)if(l.appearanceStreamContent.hasOwnProperty(S)){var d=l.appearanceStreamContent[S];if(x+="/"+S+" ",x+="<<",Object.keys(d).length>=1||Array.isArray(d)){for(var c in d)if(d.hasOwnProperty(c)){var w=d[c];typeof w=="function"&&(w=w.call(o,l)),x+="/"+c+" "+w+" ",o.internal.acroformPlugin.xForms.indexOf(w)>=0||o.internal.acroformPlugin.xForms.push(w)}}else typeof(w=d)=="function"&&(w=w.call(o,l)),x+="/"+c+" "+w,o.internal.acroformPlugin.xForms.indexOf(w)>=0||o.internal.acroformPlugin.xForms.push(w);x+=">>"}h.push({key:"AP",value:`<<
`+x+">>"})}o.internal.putStream({additionalKeyValues:h,objectId:l.objId}),o.internal.out("endobj")}a&&function(_,k){for(var y in _)if(_.hasOwnProperty(y)){var j=y,T=_[y];k.internal.newObjectDeferredBegin(T.objId,!0),Pt(T)==="object"&&typeof T.putStream=="function"&&T.putStream(),delete _[j]}}(o.internal.acroformPlugin.xForms,o)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},u0=Zt.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(c){return c};if(Array.isArray(e)){for(var o="[",a=0;a<e.length;a++)switch(a!==0&&(o+=" "),Pt(e[a])){case"boolean":case"number":case"object":o+=e[a].toString();break;case"string":e[a].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),o+="("+mo(n(e[a].toString()))+")"):o+=e[a].toString()}return o+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},Gl=function(e,t,r){var n=function(o){return o};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+mo(n(e))+")"},Bn=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Bn.prototype.toString=function(){return this.objId+" 0 R"},Bn.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Bn.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(a){return a!="content"&&a!="appearanceStreamContent"&&a!="scope"&&a!="objId"&&a.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],o=this[n];o&&(Array.isArray(o)?e.push({key:n,value:u0(o,this.objId,this.scope)}):o instanceof Bn?(o.scope=this.scope,e.push({key:n,value:o.objId+" 0 R"})):typeof o!="function"&&e.push({key:n,value:o}))}return e};var h0=function(){Bn.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};Gr(h0,Bn);var f0=function(){Bn.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+mo(r(e))+")"}},set:function(r){e=r}})};Gr(f0,Bn);var Nn=function e(){Bn.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute F supplied.');t=y}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!ir(t,3)},set:function(y){y?this.F=or(t,3):this.F=ar(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute Ff supplied.');r=y}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(y){n=y!==void 0?y:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(y){n[0]=y}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(y){n[1]=y}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(y){n[2]=y}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(y){n[3]=y}});var o="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return o},set:function(y){switch(y){case"/Btn":case"/Tx":case"/Ch":case"/Sig":o=y;break;default:throw new Error('Invalid value "'+y+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof Ms)return;a="FieldObject"+e.FieldNum++}var y=function(j){return j};return this.scope&&(y=this.scope.internal.getEncryptor(this.objId)),"("+mo(y(a))+")"},set:function(y){a=y.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(y){a=y}});var c="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return c},set:function(y){c=y}});var l="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return l},set:function(y){l=y}});var h=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return h},set:function(y){h=y}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/Hc:f},set:function(y){f=y}});var p="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return p},set:function(y){p=y}});var x="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!x||this instanceof Ms||this instanceof co))return Gl(x,this.objId,this.scope)},set:function(y){y=y.toString(),x=y}});var S=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(S)return this instanceof xr==0?Gl(S,this.objId,this.scope):S},set:function(y){y=y.toString(),S=this instanceof xr==0?y.substr(0,1)==="("?Po(y.substr(1,y.length-2)):Po(y):y}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof xr==1?Po(S.substr(1,S.length-1)):S},set:function(y){y=y.toString(),S=this instanceof xr==1?"/"+y:y}});var d=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(d)return d},set:function(y){this.V=y}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(d)return this instanceof xr==0?Gl(d,this.objId,this.scope):d},set:function(y){y=y.toString(),d=this instanceof xr==0?y.substr(0,1)==="("?Po(y.substr(1,y.length-2)):Po(y):y}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof xr==1?Po(d.substr(1,d.length-1)):d},set:function(y){y=y.toString(),d=this instanceof xr==1?"/"+y:y}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var w,_=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return _},set:function(y){y=!!y,_=y}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(w)return w},set:function(y){w=y}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,1)},set:function(y){y?this.Ff=or(this.Ff,1):this.Ff=ar(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,2)},set:function(y){y?this.Ff=or(this.Ff,2):this.Ff=ar(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,3)},set:function(y){y?this.Ff=or(this.Ff,3):this.Ff=ar(this.Ff,3)}});var k=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(k!==null)return k},set:function(y){if([0,1,2].indexOf(y)===-1)throw new Error('Invalid value "'+y+'" for attribute Q supplied.');k=y}}),Object.defineProperty(this,"textAlign",{get:function(){var y;switch(k){case 0:default:y="left";break;case 1:y="center";break;case 2:y="right"}return y},configurable:!0,enumerable:!0,set:function(y){switch(y){case"right":case 2:k=2;break;case"center":case 1:k=1;break;default:k=0}}})};Gr(Nn,Bn);var Mo=function(){Nn.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return u0(t,this.objId,this.scope)},set:function(r){var n,o;o=[],typeof(n=r)=="string"&&(o=function(a,c,l){l||(l=1);for(var h,f=[];h=c.exec(a);)f.push(h[l]);return f}(n,/\((.*?)\)/g)),t=o}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,18)},set:function(r){r?this.Ff=or(this.Ff,18):this.Ff=ar(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=or(this.Ff,19):this.Ff=ar(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,20)},set:function(r){r?(this.Ff=or(this.Ff,20),t.sort()):this.Ff=ar(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,22)},set:function(r){r?this.Ff=or(this.Ff,22):this.Ff=ar(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,23)},set:function(r){r?this.Ff=or(this.Ff,23):this.Ff=ar(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,27)},set:function(r){r?this.Ff=or(this.Ff,27):this.Ff=ar(this.Ff,27)}}),this.hasAppearanceStream=!1};Gr(Mo,Nn);var Oo=function(){Mo.call(this),this.fontName="helvetica",this.combo=!1};Gr(Oo,Mo);var Fo=function(){Oo.call(this),this.combo=!0};Gr(Fo,Oo);var As=function(){Fo.call(this),this.edit=!0};Gr(As,Fo);var xr=function(){Nn.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,15)},set:function(r){r?this.Ff=or(this.Ff,15):this.Ff=ar(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,16)},set:function(r){r?this.Ff=or(this.Ff,16):this.Ff=ar(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,17)},set:function(r){r?this.Ff=or(this.Ff,17):this.Ff=ar(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,26)},set:function(r){r?this.Ff=or(this.Ff,26):this.Ff=ar(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(a){return a};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,o=[];for(n in o.push("<<"),t)o.push("/"+n+" ("+mo(r(t[n]))+")");return o.push(">>"),o.join(`
`)}},set:function(r){Pt(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};Gr(xr,Nn);var ks=function(){xr.call(this),this.pushButton=!0};Gr(ks,xr);var Do=function(){xr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};Gr(Do,xr);var Ms=function(){var e,t;Nn.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(o){e=o}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(o){t=o}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var o=function(l){return l};this.scope&&(o=this.scope.internal.getEncryptor(this.objId));var a,c=[];for(a in c.push("<<"),n)c.push("/"+a+" ("+mo(o(n[a]))+")");return c.push(">>"),c.join(`
`)},set:function(o){Pt(o)==="object"&&(n=o)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(o){typeof o=="string"&&(n.CA=o)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(o){r=o}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(o){r="/"+o}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Oe.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};Gr(Ms,Nn),Do.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},Do.prototype.createOption=function(e){var t=new Ms;return t.Parent=this,t.optionName=e,this.Kids.push(t),av.call(this.scope,t),t};var Ls=function(){xr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Oe.CheckBox.createAppearanceStream()};Gr(Ls,xr);var co=function(){Nn.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,13)},set:function(t){t?this.Ff=or(this.Ff,13):this.Ff=ar(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,21)},set:function(t){t?this.Ff=or(this.Ff,21):this.Ff=ar(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,23)},set:function(t){t?this.Ff=or(this.Ff,23):this.Ff=ar(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,24)},set:function(t){t?this.Ff=or(this.Ff,24):this.Ff=ar(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,25)},set:function(t){t?this.Ff=or(this.Ff,25):this.Ff=ar(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,26)},set:function(t){t?this.Ff=or(this.Ff,26):this.Ff=ar(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};Gr(co,Nn);var Ns=function(){co.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,14)},set:function(e){e?this.Ff=or(this.Ff,14):this.Ff=ar(this.Ff,14)}}),this.password=!0};Gr(Ns,co);var Oe={CheckBox:{createAppearanceStream:function(){return{N:{On:Oe.CheckBox.YesNormal},D:{On:Oe.CheckBox.YesPushDown,Off:Oe.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=Fn(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,o=e.scope.__private__.encodeColorString(e.color),a=bc(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+ut(a.fontSize)+" Tf "+o),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=Fn(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),o=[],a=Oe.internal.getHeight(e),c=Oe.internal.getWidth(e),l=bc(e,e.caption);return o.push("1 g"),o.push("0 0 "+ut(c)+" "+ut(a)+" re"),o.push("f"),o.push("q"),o.push("0 0 1 rg"),o.push("0 0 "+ut(c-1)+" "+ut(a-1)+" re"),o.push("W"),o.push("n"),o.push("0 g"),o.push("BT"),o.push("/"+r+" "+ut(l.fontSize)+" Tf "+n),o.push(l.text),o.push("ET"),o.push("Q"),t.stream=o.join(`
`),t},OffPushDown:function(e){var t=Fn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Oe.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Oe.RadioButton.Circle.YesNormal,t.D[e]=Oe.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=Fn(e);t.scope=e.scope;var r=[],n=Oe.internal.getWidth(e)<=Oe.internal.getHeight(e)?Oe.internal.getWidth(e)/4:Oe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Oe.internal.Bezier_C,a=Number((n*o).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+ji(Oe.internal.getWidth(e)/2)+" "+ji(Oe.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Fn(e);t.scope=e.scope;var r=[],n=Oe.internal.getWidth(e)<=Oe.internal.getHeight(e)?Oe.internal.getWidth(e)/4:Oe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Oe.internal.Bezier_C).toFixed(5)),c=Number((n*Oe.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+ji(Oe.internal.getWidth(e)/2)+" "+ji(Oe.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+ji(Oe.internal.getWidth(e)/2)+" "+ji(Oe.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+c+" "+c+" "+n+" 0 "+n+" c"),r.push("-"+c+" "+n+" -"+n+" "+c+" -"+n+" 0 c"),r.push("-"+n+" -"+c+" -"+c+" -"+n+" 0 -"+n+" c"),r.push(c+" -"+n+" "+n+" -"+c+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=Fn(e);t.scope=e.scope;var r=[],n=Oe.internal.getWidth(e)<=Oe.internal.getHeight(e)?Oe.internal.getWidth(e)/4:Oe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Oe.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+ji(Oe.internal.getWidth(e)/2)+" "+ji(Oe.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Oe.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Oe.RadioButton.Cross.YesNormal,t.D[e]=Oe.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=Fn(e);t.scope=e.scope;var r=[],n=Oe.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+ut(Oe.internal.getWidth(e)-2)+" "+ut(Oe.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(ut(n.x1.x)+" "+ut(n.x1.y)+" m"),r.push(ut(n.x2.x)+" "+ut(n.x2.y)+" l"),r.push(ut(n.x4.x)+" "+ut(n.x4.y)+" m"),r.push(ut(n.x3.x)+" "+ut(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Fn(e);t.scope=e.scope;var r=Oe.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+ut(Oe.internal.getWidth(e)-2)+" "+ut(Oe.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(ut(r.x1.x)+" "+ut(r.x1.y)+" m"),n.push(ut(r.x2.x)+" "+ut(r.x2.y)+" l"),n.push(ut(r.x4.x)+" "+ut(r.x4.y)+" m"),n.push(ut(r.x3.x)+" "+ut(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=Fn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ut(Oe.internal.getWidth(e))+" "+ut(Oe.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Oe.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Oe.internal.getWidth(e),r=Oe.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Oe.internal.getWidth=function(e){var t=0;return Pt(e)==="object"&&(t=Y1(e.Rect[2])),t},Oe.internal.getHeight=function(e){var t=0;return Pt(e)==="object"&&(t=Y1(e.Rect[3])),t};var av=Zt.addField=function(e){if(ov(this,e),!(e instanceof Nn))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};Zt.AcroFormChoiceField=Mo,Zt.AcroFormListBox=Oo,Zt.AcroFormComboBox=Fo,Zt.AcroFormEditBox=As,Zt.AcroFormButton=xr,Zt.AcroFormPushButton=ks,Zt.AcroFormRadioButton=Do,Zt.AcroFormCheckBox=Ls,Zt.AcroFormTextField=co,Zt.AcroFormPasswordField=Ns,Zt.AcroFormAppearance=Oe,Zt.AcroForm={ChoiceField:Mo,ListBox:Oo,ComboBox:Fo,EditBox:As,Button:xr,PushButton:ks,RadioButton:Do,CheckBox:Ls,TextField:co,PasswordField:Ns,Appearance:Oe},Ge.AcroForm={ChoiceField:Mo,ListBox:Oo,ComboBox:Fo,EditBox:As,Button:xr,PushButton:ks,RadioButton:Do,CheckBox:Ls,TextField:co,PasswordField:Ns,Appearance:Oe};Ge.AcroForm;function d0(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},o=e.__addimage__.getImageFileTypeByImageData=function(N,O){var J,Y,ae,he,fe,se=r;if((O=O||r)==="RGBA"||N.data!==void 0&&N.data instanceof Uint8ClampedArray&&"height"in N&&"width"in N)return"RGBA";if(Z(N))for(fe in n)for(ae=n[fe],J=0;J<ae.length;J+=1){for(he=!0,Y=0;Y<ae[J].length;Y+=1)if(ae[J][Y]!==void 0&&ae[J][Y]!==N[Y]){he=!1;break}if(he===!0){se=fe;break}}else for(fe in n)for(ae=n[fe],J=0;J<ae.length;J+=1){for(he=!0,Y=0;Y<ae[J].length;Y+=1)if(ae[J][Y]!==void 0&&ae[J][Y]!==N.charCodeAt(Y)){he=!1;break}if(he===!0){se=fe;break}}return se===r&&O!==r&&(se=O),se},a=function N(O){for(var J=this.internal.write,Y=this.internal.putStream,ae=(0,this.internal.getFilters)();ae.indexOf("FlateEncode")!==-1;)ae.splice(ae.indexOf("FlateEncode"),1);O.objectId=this.internal.newObject();var he=[];if(he.push({key:"Type",value:"/XObject"}),he.push({key:"Subtype",value:"/Image"}),he.push({key:"Width",value:O.width}),he.push({key:"Height",value:O.height}),O.colorSpace===y.INDEXED?he.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(O.palette.length/3-1)+" "+("sMask"in O&&O.sMask!==void 0?O.objectId+2:O.objectId+1)+" 0 R]"}):(he.push({key:"ColorSpace",value:"/"+O.colorSpace}),O.colorSpace===y.DEVICE_CMYK&&he.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),he.push({key:"BitsPerComponent",value:O.bitsPerComponent}),"decodeParameters"in O&&O.decodeParameters!==void 0&&he.push({key:"DecodeParms",value:"<<"+O.decodeParameters+">>"}),"transparency"in O&&Array.isArray(O.transparency)&&O.transparency.length>0){for(var fe="",se=0,me=O.transparency.length;se<me;se++)fe+=O.transparency[se]+" "+O.transparency[se]+" ";he.push({key:"Mask",value:"["+fe+"]"})}O.sMask!==void 0&&he.push({key:"SMask",value:O.objectId+1+" 0 R"});var Ie=O.filter!==void 0?["/"+O.filter]:void 0;if(Y({data:O.data,additionalKeyValues:he,alreadyAppliedFilters:Ie,objectId:O.objectId}),J("endobj"),"sMask"in O&&O.sMask!==void 0){var _e,P=(_e=O.sMaskBitsPerComponent)!==null&&_e!==void 0?_e:O.bitsPerComponent,H={width:O.width,height:O.height,colorSpace:"DeviceGray",bitsPerComponent:P,data:O.sMask};"filter"in O&&(H.decodeParameters="/Predictor ".concat(O.predictor," /Colors 1 /BitsPerComponent ").concat(P," /Columns ").concat(O.width),H.filter=O.filter),N.call(this,H)}if(O.colorSpace===y.INDEXED){var G=this.internal.newObject();Y({data:W(new Uint8Array(O.palette)),objectId:G}),J("endobj")}},c=function(){var N=this.internal.collections[t+"images"];for(var O in N)a.call(this,N[O])},l=function(){var N,O=this.internal.collections[t+"images"],J=this.internal.write;for(var Y in O)J("/I"+(N=O[Y]).index,N.objectId,"0","R")},h=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",c),this.internal.events.subscribe("putXobjectDict",l))},f=function(){var N=this.internal.collections[t+"images"];return h.call(this),N},p=function(){return Object.keys(this.internal.collections[t+"images"]).length},x=function(N){return typeof e["process"+N.toUpperCase()]=="function"},S=function(N){return Pt(N)==="object"&&N.nodeType===1},d=function(N,O){if(N.nodeName==="IMG"&&N.hasAttribute("src")){var J=""+N.getAttribute("src");if(J.indexOf("data:image/")===0)return Cs(unescape(J).split("base64,").pop());var Y=e.loadFile(J,!0);if(Y!==void 0)return Y}if(N.nodeName==="CANVAS"){if(N.width===0||N.height===0)throw new Error("Given canvas must have data. Canvas width: "+N.width+", height: "+N.height);var ae;switch(O){case"PNG":ae="image/png";break;case"WEBP":ae="image/webp";break;default:ae="image/jpeg"}return Cs(N.toDataURL(ae,1).split("base64,").pop())}},w=function(N){var O=this.internal.collections[t+"images"];if(O){for(var J in O)if(N===O[J].alias)return O[J]}},_=function(N,O,J){return N||O||(N=-96,O=-96),N<0&&(N=-1*J.width*72/N/this.internal.scaleFactor),O<0&&(O=-1*J.height*72/O/this.internal.scaleFactor),N===0&&(N=O*J.width/J.height),O===0&&(O=N*J.height/J.width),[N,O]},k=function(N,O,J,Y,ae,he){var fe=_.call(this,J,Y,ae),se=this.internal.getCoordinateString,me=this.internal.getVerticalCoordinateString,Ie=f.call(this);if(J=fe[0],Y=fe[1],Ie[ae.index]=ae,he){he*=Math.PI/180;var _e=Math.cos(he),P=Math.sin(he),H=function(K){return K.toFixed(4)},G=[H(_e),H(P),H(-1*P),H(_e),0,0,"cm"]}this.internal.write("q"),he?(this.internal.write([1,"0","0",1,se(N),me(O+Y),"cm"].join(" ")),this.internal.write(G.join(" ")),this.internal.write([se(J),"0","0",se(Y),"0","0","cm"].join(" "))):this.internal.write([se(J),"0","0",se(Y),se(N),me(O+Y),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+ae.index+" Do"),this.internal.write("Q")},y=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var j=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},T=e.__addimage__.sHashCode=function(N){var O,J,Y=0;if(typeof N=="string")for(J=N.length,O=0;O<J;O++)Y=(Y<<5)-Y+N.charCodeAt(O),Y|=0;else if(Z(N))for(J=N.byteLength/2,O=0;O<J;O++)Y=(Y<<5)-Y+N[O],Y|=0;return Y},E=e.__addimage__.validateStringAsBase64=function(N){(N=N||"").toString().trim();var O=!0;return N.length===0&&(O=!1),N.length%4!=0&&(O=!1),/^[A-Za-z0-9+/]+$/.test(N.substr(0,N.length-2))===!1&&(O=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(N.substr(-2))===!1&&(O=!1),O},V=e.__addimage__.extractImageFromDataUrl=function(N){if(N==null||!(N=N.trim()).startsWith("data:"))return null;var O=N.indexOf(",");return O<0?null:N.substring(0,O).trim().endsWith("base64")?N.substring(O+1):null};e.__addimage__.isArrayBuffer=function(N){return N instanceof ArrayBuffer};var Z=e.__addimage__.isArrayBufferView=function(N){return N instanceof Int8Array||N instanceof Uint8Array||N instanceof Uint8ClampedArray||N instanceof Int16Array||N instanceof Uint16Array||N instanceof Int32Array||N instanceof Uint32Array||N instanceof Float32Array||N instanceof Float64Array},te=e.__addimage__.binaryStringToUint8Array=function(N){for(var O=N.length,J=new Uint8Array(O),Y=0;Y<O;Y++)J[Y]=N.charCodeAt(Y);return J},W=e.__addimage__.arrayBufferToBinaryString=function(N){for(var O="",J=Z(N)?N:new Uint8Array(N),Y=0;Y<J.length;Y+=8192)O+=String.fromCharCode.apply(null,J.subarray(Y,Y+8192));return O};e.addImage=function(){var N,O,J,Y,ae,he,fe,se,me;if(typeof arguments[1]=="number"?(O=r,J=arguments[1],Y=arguments[2],ae=arguments[3],he=arguments[4],fe=arguments[5],se=arguments[6],me=arguments[7]):(O=arguments[1],J=arguments[2],Y=arguments[3],ae=arguments[4],he=arguments[5],fe=arguments[6],se=arguments[7],me=arguments[8]),Pt(N=arguments[0])==="object"&&!S(N)&&"imageData"in N){var Ie=N;N=Ie.imageData,O=Ie.format||O||r,J=Ie.x||J||0,Y=Ie.y||Y||0,ae=Ie.w||Ie.width||ae,he=Ie.h||Ie.height||he,fe=Ie.alias||fe,se=Ie.compression||se,me=Ie.rotation||Ie.angle||me}var _e=this.internal.getFilters();if(se===void 0&&_e.indexOf("FlateEncode")!==-1&&(se="SLOW"),isNaN(J)||isNaN(Y))throw new Error("Invalid coordinates passed to jsPDF.addImage");h.call(this);var P=D.call(this,N,O,fe,se);return k.call(this,J,Y,ae,he,P,me),this};var D=function(N,O,J,Y){var ae,he,fe;if(typeof N=="string"&&o(N)===r){N=unescape(N);var se=X(N,!1);(se!==""||(se=e.loadFile(N,!0))!==void 0)&&(N=se)}if(S(N)&&(N=d(N,O)),O=o(N,O),!x(O))throw new Error("addImage does not support files of type '"+O+"', please ensure that a plugin for '"+O+"' support is added.");if(((fe=J)==null||fe.length===0)&&(J=function(me){return typeof me=="string"||Z(me)?T(me):Z(me.data)?T(me.data):null}(N)),(ae=w.call(this,J))||(N instanceof Uint8Array||O==="RGBA"||(he=N,N=te(N)),ae=this["process"+O.toUpperCase()](N,p.call(this),J,function(me){return me&&typeof me=="string"&&(me=me.toUpperCase()),me in e.image_compression?me:j.NONE}(Y),he)),!ae)throw new Error("An unknown error occurred whilst processing the image.");return ae},X=e.__addimage__.convertBase64ToBinaryString=function(N,O){O=typeof O!="boolean"||O;var J,Y="";if(typeof N=="string"){var ae;J=(ae=V(N))!==null&&ae!==void 0?ae:N;try{Y=Cs(J)}catch(he){if(O)throw E(J)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+he.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return Y};e.getImageProperties=function(N){var O,J,Y="";if(S(N)&&(N=d(N)),typeof N=="string"&&o(N)===r&&((Y=X(N,!1))===""&&(Y=e.loadFile(N)||""),N=Y),J=o(N),!x(J))throw new Error("addImage does not support files of type '"+J+"', please ensure that a plugin for '"+J+"' support is added.");if(N instanceof Uint8Array||(N=te(N)),!(O=this["process"+J.toUpperCase()](N)))throw new Error("An unknown error occurred whilst processing the image");return O.fileType=J,O}})(Ge.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};Ge.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,o,a,c=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString,h=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,p=!1,x=0;x<f.length&&!p;x++)switch((n=f[x]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(p=!0);break;case"reference":case"text":case"freetext":p=!0}if(p!=0){this.internal.write("/Annots [");for(var S=0;S<f.length;S++){n=f[S];var d=this.internal.pdfEscape,w=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var _=this.internal.newAdditionalObject(),k=this.internal.newAdditionalObject(),y=this.internal.getEncryptor(_.objId),j=n.title||"Note";a="<</Type /Annot /Subtype /Text "+(o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y)+"] ")+"/Contents ("+d(y(n.contents))+")",a+=" /Popup "+k.objId+" 0 R",a+=" /P "+h.objId+" 0 R",a+=" /T ("+d(y(j))+") >>",_.content=a;var T=_.objId+" 0 R";a="<</Type /Annot /Subtype /Popup "+(o="/Rect ["+c(n.bounds.x+30)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w+30)+" "+l(n.bounds.y)+"] ")+" /Parent "+T,n.open&&(a+=" /Open true"),a+=" >>",k.content=a,this.internal.write(_.objId,"0 R",k.objId,"0 R");break;case"freetext":o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y+n.bounds.h)+"] ";var E=n.color||"#000000";a="<</Type /Annot /Subtype /FreeText "+o+"/Contents ("+d(w(n.contents))+")",a+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+E+")",a+=" /Border [0 0 0]",a+=" >>",this.internal.write(a);break;case"link":if(n.options.name){var V=this.annotations._nameMap[n.options.name];n.options.pageNumber=V.page,n.options.top=V.y}else n.options.top||(n.options.top=0);if(o="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",a="",n.options.url)a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /A <</S /URI /URI ("+d(w(n.options.url))+") >>";else if(n.options.pageNumber)switch(a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":a+=" /Fit]";break;case"FitH":a+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,a+=" /FitV "+n.options.left+"]";break;default:var Z=l(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),a+=" /XYZ "+n.options.left+" "+Z+" "+n.options.zoom+"]"}a!=""&&(a+=" >>",this.internal.write(a))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,o,a,c){var l=this.internal.getCurrentPageInfo(),h=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;l.pageContext.annotations.push({finalBounds:{x:h(r),y:f(n),w:h(r+o),h:f(n+a)},options:c,type:"link"})},e.textWithLink=function(r,n,o,a){var c,l,h=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(a.maxWidth!==void 0){l=a.maxWidth;var p=this.splitTextToSize(r,l).length;c=Math.ceil(f*p)}else l=h,c=f;return this.text(r,n,o,a),o+=.2*f,a.align==="center"&&(n-=h/2),a.align==="right"&&(n-=h),this.link(n,o-f,l,c,a),h},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(Ge.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},o=[1570,1571,1573,1575];e.__arabicParser__={};var a=e.__arabicParser__.isInArabicSubstitutionA=function(_){return t[_.charCodeAt(0)]!==void 0},c=e.__arabicParser__.isArabicLetter=function(_){return typeof _=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(_)},l=e.__arabicParser__.isArabicEndLetter=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length<=2},h=e.__arabicParser__.isArabicAlfLetter=function(_){return c(_)&&o.indexOf(_.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=3};var p=e.__arabicParser__.arabicLetterHasMedialForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length==4},x=e.__arabicParser__.resolveLigatures=function(_){var k=0,y=r,j="",T=0;for(k=0;k<_.length;k+=1)y[_.charCodeAt(k)]!==void 0?(T++,typeof(y=y[_.charCodeAt(k)])=="number"&&(j+=String.fromCharCode(y),y=r,T=0),k===_.length-1&&(y=r,j+=_.charAt(k-(T-1)),k-=T-1,T=0)):(y=r,j+=_.charAt(k-T),k-=T,T=0);return j};e.__arabicParser__.isArabicDiacritic=function(_){return _!==void 0&&n[_.charCodeAt(0)]!==void 0};var S=e.__arabicParser__.getCorrectForm=function(_,k,y){return c(_)?a(_)===!1?-1:!f(_)||!c(k)&&!c(y)||!c(y)&&l(k)||l(_)&&!c(k)||l(_)&&h(k)||l(_)&&l(k)?0:p(_)&&c(k)&&!l(k)&&c(y)&&f(y)?3:l(_)||!c(y)?1:2:-1},d=function(_){var k=0,y=0,j=0,T="",E="",V="",Z=(_=_||"").split("\\s+"),te=[];for(k=0;k<Z.length;k+=1){for(te.push(""),y=0;y<Z[k].length;y+=1)T=Z[k][y],E=Z[k][y-1],V=Z[k][y+1],c(T)?(j=S(T,E,V),te[k]+=j!==-1?String.fromCharCode(t[T.charCodeAt(0)][j]):T):te[k]+=T;te[k]=x(te[k])}return te.join(" ")},w=e.__arabicParser__.processArabic=e.processArabic=function(){var _,k=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,y=[];if(Array.isArray(k)){var j=0;for(y=[],j=0;j<k.length;j+=1)Array.isArray(k[j])?y.push([d(k[j][0]),k[j][1],k[j][2]]):y.push([d(k[j])]);_=y}else _=d(k);return typeof arguments[0]=="string"?_:(arguments[0].text=_,arguments[0])};e.events.push(["preProcessText",w])}(Ge.API),Ge.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(l){r=l}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(l){n=isNaN(l)||Number.isInteger(l)===!1||l<0?150:l,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var o=300;Object.defineProperty(this,"height",{get:function(){return o},set:function(l){o=isNaN(l)||Number.isInteger(l)===!1||l<0?300:l,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=o+1)}});var a=[];Object.defineProperty(this,"childNodes",{get:function(){return a},set:function(l){a=l}});var c={};Object.defineProperty(this,"style",{get:function(){return c},set:function(l){c=l}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var o;if((r=r||"2d")!=="2d")return null;for(o in n)this.pdf.context2d.hasOwnProperty(o)&&(this.pdf.context2d[o]=n[o]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Ge.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),o.call(this))},o=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var h=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return h},set:function(_){h=_}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(_){f=_}});var p=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return p},set:function(_){p=_}});var x=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return x},set:function(_){x=_}});var S=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return S},set:function(_){S=_}});var d=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return d},set:function(_){d=_}});var w=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return w},set:function(_){w=_}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(h){return n.call(this),this.internal.__cell__.headerFunction=typeof h=="function"?h:void 0,this},e.getTextDimensions=function(h,f){n.call(this);var p=(f=f||{}).fontSize||this.getFontSize(),x=f.font||this.getFont(),S=f.scaleFactor||this.internal.scaleFactor,d=0,w=0,_=0,k=this;if(!Array.isArray(h)&&typeof h!="string"){if(typeof h!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");h=String(h)}var y=f.maxWidth;y>0?typeof h=="string"?h=this.splitTextToSize(h,y):Object.prototype.toString.call(h)==="[object Array]"&&(h=h.reduce(function(T,E){return T.concat(k.splitTextToSize(E,y))},[])):h=Array.isArray(h)?h:[h];for(var j=0;j<h.length;j++)d<(_=this.getStringUnitWidth(h[j],{font:x})*p)&&(d=_);return d!==0&&(w=h.length),{w:d/=S,h:Math.max((w*p*this.getLineHeightFactor()-p*(this.getLineHeightFactor()-1))/S,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var h=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new a(h.left,h.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var c=e.cell=function(){var h;h=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,p=this.internal.__cell__.padding,x=this.internal.__cell__.margins||t,S=this.internal.__cell__.tableHeaderRow,d=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===h.lineNumber?(h.x=(f.x||0)+(f.width||0),h.y=f.y||0):f.y+f.height+h.height+x.bottom>this.getPageHeight()?(this.cellAddPage(),h.y=x.top,d&&S&&(this.printHeaderRow(h.lineNumber,!0),h.y+=S[0].height)):h.y=f.y+f.height||h.y),h.text[0]!==void 0&&(this.rect(h.x,h.y,h.width,h.height,r===!0?"FD":void 0),h.align==="right"?this.text(h.text,h.x+h.width-p,h.y+p,{align:"right",baseline:"top"}):h.align==="center"?this.text(h.text,h.x+h.width/2,h.y+p,{align:"center",baseline:"top",maxWidth:h.width-p-p}):this.text(h.text,h.x+p,h.y+p,{align:"left",baseline:"top",maxWidth:h.width-p-p})),this.internal.__cell__.lastCell=h,this};e.table=function(h,f,p,x,S){if(n.call(this),!p)throw new Error("No data for PDF table.");var d,w,_,k,y=[],j=[],T=[],E={},V={},Z=[],te=[],W=(S=S||{}).autoSize||!1,D=S.printHeaders!==!1,X=S.css&&S.css["font-size"]!==void 0?16*S.css["font-size"]:S.fontSize||12,N=S.margins||Object.assign({width:this.getPageWidth()},t),O=typeof S.padding=="number"?S.padding:3,J=S.headerBackgroundColor||"#c8c8c8",Y=S.headerTextColor||"#000";if(o.call(this),this.internal.__cell__.printHeaders=D,this.internal.__cell__.margins=N,this.internal.__cell__.table_font_size=X,this.internal.__cell__.padding=O,this.internal.__cell__.headerBackgroundColor=J,this.internal.__cell__.headerTextColor=Y,this.setFontSize(X),x==null)j=y=Object.keys(p[0]),T=y.map(function(){return"left"});else if(Array.isArray(x)&&Pt(x[0])==="object")for(y=x.map(function(Ie){return Ie.name}),j=x.map(function(Ie){return Ie.prompt||Ie.name||""}),T=x.map(function(Ie){return Ie.align||"left"}),d=0;d<x.length;d+=1)V[x[d].name]=.7499990551181103*x[d].width;else Array.isArray(x)&&typeof x[0]=="string"&&(j=y=x,T=y.map(function(){return"left"}));if(W||Array.isArray(x)&&typeof x[0]=="string")for(d=0;d<y.length;d+=1){for(E[k=y[d]]=p.map(function(Ie){return Ie[k]}),this.setFont(void 0,"bold"),Z.push(this.getTextDimensions(j[d],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),w=E[k],this.setFont(void 0,"normal"),_=0;_<w.length;_+=1)Z.push(this.getTextDimensions(w[_],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);V[k]=Math.max.apply(null,Z)+O+O,Z=[]}if(D){var ae={};for(d=0;d<y.length;d+=1)ae[y[d]]={},ae[y[d]].text=j[d],ae[y[d]].align=T[d];var he=l.call(this,ae,V);te=y.map(function(Ie){return new a(h,f,V[Ie],he,ae[Ie].text,void 0,ae[Ie].align)}),this.setTableHeaderRow(te),this.printHeaderRow(1,!1)}var fe=x.reduce(function(Ie,_e){return Ie[_e.name]=_e.align,Ie},{});for(d=0;d<p.length;d+=1){"rowStart"in S&&S.rowStart instanceof Function&&S.rowStart({row:d,data:p[d]},this);var se=l.call(this,p[d],V);for(_=0;_<y.length;_+=1){var me=p[d][y[_]];"cellStart"in S&&S.cellStart instanceof Function&&S.cellStart({row:d,col:_,data:me},this),c.call(this,new a(h,f,V[y[_]],se,me,d+2,fe[y[_]]))}}return this.internal.__cell__.table_x=h,this.internal.__cell__.table_y=f,this};var l=function(h,f){var p=this.internal.__cell__.padding,x=this.internal.__cell__.table_font_size,S=this.internal.scaleFactor;return Object.keys(h).map(function(d){var w=h[d];return this.splitTextToSize(w.hasOwnProperty("text")?w.text:w,f[d]-p-p)},this).map(function(d){return this.getLineHeightFactor()*d.length*x/S+p+p},this).reduce(function(d,w){return Math.max(d,w)},0)};e.setTableHeaderRow=function(h){n.call(this),this.internal.__cell__.tableHeaderRow=h},e.printHeaderRow=function(h,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var p;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var x=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(x[0],x[1],x[2],x[3],void 0,-1)}this.setFont(void 0,"bold");for(var S=[],d=0;d<this.internal.__cell__.tableHeaderRow.length;d+=1){p=this.internal.__cell__.tableHeaderRow[d].clone(),f&&(p.y=this.internal.__cell__.margins.top||0,S.push(p)),p.lineNumber=h;var w=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),c.call(this,p),this.setTextColor(w)}S.length>0&&this.setTableHeaderRow(S),this.setFont(void 0,"normal"),r=!1}}(Ge.API);var p0={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},m0=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],xc=d0(m0),g0=[100,200,300,400,500,600,700,800,900],sv=d0(g0);function Yl(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(a){return p0[a=a||"normal"]?a:"normal"}(e.style),n=function(a){return a?typeof a=="number"?a>=100&&a<=900&&a%100==0?a:400:/^\d00$/.test(a)?parseInt(a):a==="bold"?700:400:400}(e.weight),o=function(a){return typeof xc[a=a||"normal"]=="number"?a:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:o,src:e.src||[],ref:e.ref||{name:t,style:[o,r,n].join(" ")}}}function J1(e,t,r,n){var o;for(o=r;o>=0&&o<t.length;o+=n)if(e[t[o]])return e[t[o]];for(o=r;o>=0&&o<t.length;o-=n)if(e[t[o]])return e[t[o]]}var lv={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Q1={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function X1(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function Z1(e){return e.trimLeft()}function cv(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function uv(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var vs,K1,eh,Eo,bs,th,rh,nh,Jl=["times"];function ih(e,t,r,n,o){var a=4,c=ah;switch(o){case Ge.API.image_compression.FAST:a=1,c=oh;break;case Ge.API.image_compression.MEDIUM:a=6,c=sh;break;case Ge.API.image_compression.SLOW:a=9,c=lh}e=function(h,f,p,x){for(var S,d=h.length/f,w=new Uint8Array(h.length+d),_=[hv,oh,ah,sh,lh],k=0;k<d;k+=1){var y=k*f,j=h.subarray(y,y+f);if(x)w.set(x(j,p,S),y+k);else{for(var T=_.length,E=[],V=0;V<T;V+=1)E[V]=_[V](j,p,S);var Z=dv(E.concat());w.set(E[Z],y+k)}S=j}return w}(e,t,Math.ceil(r*n/8),c);var l=fc(e,{level:a});return Ge.API.__addimage__.arrayBufferToBinaryString(l)}function hv(e){var t=Array.apply([],e);return t.unshift(0),t}function oh(e,t){var r=e.length,n=[];n[0]=1;for(var o=0;o<r;o+=1){var a=e[o-t]||0;n[o+1]=e[o]-a+256&255}return n}function ah(e,t,r){var n=e.length,o=[];o[0]=2;for(var a=0;a<n;a+=1){var c=r&&r[a]||0;o[a+1]=e[a]-c+256&255}return o}function sh(e,t,r){var n=e.length,o=[];o[0]=3;for(var a=0;a<n;a+=1){var c=e[a-t]||0,l=r&&r[a]||0;o[a+1]=e[a]+256-(c+l>>>1)&255}return o}function lh(e,t,r){var n=e.length,o=[];o[0]=4;for(var a=0;a<n;a+=1){var c=fv(e[a-t]||0,r&&r[a]||0,r&&r[a-t]||0);o[a+1]=e[a]-c+256&255}return o}function fv(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),o=Math.abs(e-r),a=Math.abs(e+t-r-r);return n<=o&&n<=a?e:o<=a?t:r}function dv(e){var t=e.map(function(r){return r.reduce(function(n,o){return n+Math.abs(o)},0)});return t.indexOf(Math.min.apply(null,t))}function Ql(e,t,r){var n=t*r,o=Math.floor(n/8),a=16-(n-8*o+r),c=(1<<r)-1;return v0(e,o)>>a&c}function ch(e,t,r,n){var o=r*n,a=Math.floor(o/8),c=16-(o-8*a+n),l=(1<<n)-1,h=(t&l)<<c;(function(f,p,x){if(p+1<f.byteLength)f.setUint16(p,x,!1);else{var S=x>>8&255;f.setUint8(p,S)}})(e,a,v0(e,a)&~(l<<c)&65535|h)}function v0(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function pv(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,o=e[t++],a=o>>7,c=1<<1+(7&o);e[t++],e[t++];var l=null,h=null;a&&(l=t,h=c,t+=3*c);var f=!0,p=[],x=0,S=null,d=0,w=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,w=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((N=e[t++])>=0))throw Error("Invalid block size");if(N===0)break;t+=N}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var _=e[t++];x=e[t++]|e[t++]<<8,S=e[t++],1&_||(S=null),d=_>>2&7,t++;break;case 254:for(;;){if(!((N=e[t++])>=0))throw Error("Invalid block size");if(N===0)break;t+=N}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var k=e[t++]|e[t++]<<8,y=e[t++]|e[t++]<<8,j=e[t++]|e[t++]<<8,T=e[t++]|e[t++]<<8,E=e[t++],V=E>>6&1,Z=1<<1+(7&E),te=l,W=h,D=!1;E>>7&&(D=!0,te=t,W=Z,t+=3*Z);var X=t;for(t++;;){var N;if(!((N=e[t++])>=0))throw Error("Invalid block size");if(N===0)break;t+=N}p.push({x:k,y,width:j,height:T,has_local_palette:D,palette_offset:te,palette_size:W,data_offset:X,data_length:t-X,transparent_index:S,interlaced:!!V,delay:x,disposal:d});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return p.length},this.loopCount=function(){return w},this.frameInfo=function(O){if(O<0||O>=p.length)throw new Error("Frame index out of range.");return p[O]},this.decodeAndBlitFrameBGRA=function(O,J){var Y=this.frameInfo(O),ae=Y.width*Y.height,he=new Uint8Array(ae);uh(e,Y.data_offset,he,ae);var fe=Y.palette_offset,se=Y.transparent_index;se===null&&(se=256);var me=Y.width,Ie=r-me,_e=me,P=4*(Y.y*r+Y.x),H=4*((Y.y+Y.height)*r+Y.x),G=P,K=4*Ie;Y.interlaced===!0&&(K+=4*r*7);for(var ne=8,ce=0,pe=he.length;ce<pe;++ce){var de=he[ce];if(_e===0&&(_e=me,(G+=K)>=H&&(K=4*Ie+4*r*(ne-1),G=P+(me+Ie)*(ne<<1),ne>>=1)),de===se)G+=4;else{var ye=e[fe+3*de],Ne=e[fe+3*de+1],je=e[fe+3*de+2];J[G++]=je,J[G++]=Ne,J[G++]=ye,J[G++]=255}--_e}},this.decodeAndBlitFrameRGBA=function(O,J){var Y=this.frameInfo(O),ae=Y.width*Y.height,he=new Uint8Array(ae);uh(e,Y.data_offset,he,ae);var fe=Y.palette_offset,se=Y.transparent_index;se===null&&(se=256);var me=Y.width,Ie=r-me,_e=me,P=4*(Y.y*r+Y.x),H=4*((Y.y+Y.height)*r+Y.x),G=P,K=4*Ie;Y.interlaced===!0&&(K+=4*r*7);for(var ne=8,ce=0,pe=he.length;ce<pe;++ce){var de=he[ce];if(_e===0&&(_e=me,(G+=K)>=H&&(K=4*Ie+4*r*(ne-1),G=P+(me+Ie)*(ne<<1),ne>>=1)),de===se)G+=4;else{var ye=e[fe+3*de],Ne=e[fe+3*de+1],je=e[fe+3*de+2];J[G++]=ye,J[G++]=Ne,J[G++]=je,J[G++]=255}--_e}}}function uh(e,t,r,n){for(var o=e[t++],a=1<<o,c=a+1,l=c+1,h=o+1,f=(1<<h)-1,p=0,x=0,S=0,d=e[t++],w=new Int32Array(4096),_=null;;){for(;p<16&&d!==0;)x|=e[t++]<<p,p+=8,d===1?d=e[t++]:--d;if(p<h)break;var k=x&f;if(x>>=h,p-=h,k!==a){if(k===c)break;for(var y=k<l?k:_,j=0,T=y;T>a;)T=w[T]>>8,++j;var E=T;if(S+j+(y!==k?1:0)>n)return void Ot.log("Warning, gif stream longer than expected.");r[S++]=E;var V=S+=j;for(y!==k&&(r[S++]=E),T=y;j--;)T=w[T],r[--V]=255&T,T>>=8;_!==null&&l<4096&&(w[l++]=_<<8|E,l>=f+1&&h<12&&(++h,f=f<<1|1)),_=k}else l=c+1,f=(1<<(h=o+1))-1,_=null}return S!==n&&Ot.log("Warning, gif stream shorter than expected."),r}/**
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
*/function Xl(e){var t,r,n,o,a,c=Math.floor,l=new Array(64),h=new Array(64),f=new Array(64),p=new Array(64),x=new Array(65535),S=new Array(65535),d=new Array(64),w=new Array(64),_=[],k=0,y=7,j=new Array(64),T=new Array(64),E=new Array(64),V=new Array(256),Z=new Array(2048),te=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],D=[0,1,2,3,4,5,6,7,8,9,10,11],X=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],N=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],O=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],J=[0,1,2,3,4,5,6,7,8,9,10,11],Y=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],ae=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function he(P,H){for(var G=0,K=0,ne=new Array,ce=1;ce<=16;ce++){for(var pe=1;pe<=P[ce];pe++)ne[H[K]]=[],ne[H[K]][0]=G,ne[H[K]][1]=ce,K++,G++;G*=2}return ne}function fe(P){for(var H=P[0],G=P[1]-1;G>=0;)H&1<<G&&(k|=1<<y),G--,--y<0&&(k==255?(se(255),se(0)):se(k),y=7,k=0)}function se(P){_.push(P)}function me(P){se(P>>8&255),se(255&P)}function Ie(P,H,G,K,ne){for(var ce,pe=ne[0],de=ne[240],ye=function(ke,Ve){var Re,Ke,Ue,vt,et,rt,_t,at,qe,Xe,He=0;for(qe=0;qe<8;++qe){Re=ke[He],Ke=ke[He+1],Ue=ke[He+2],vt=ke[He+3],et=ke[He+4],rt=ke[He+5],_t=ke[He+6];var Tt=Re+(at=ke[He+7]),bt=Re-at,De=Ke+_t,st=Ke-_t,xt=Ue+rt,Qe=Ue-rt,mt=vt+et,nt=vt-et,Ht=Tt+mt,Kt=Tt-mt,Lt=De+xt,Ze=De-xt;ke[He]=Ht+Lt,ke[He+4]=Ht-Lt;var Ct=.707106781*(Ze+Kt);ke[He+2]=Kt+Ct,ke[He+6]=Kt-Ct;var Hn=.382683433*((Ht=nt+Qe)-(Ze=st+bt)),br=.5411961*Ht+Hn,Mr=1.306562965*Ze+Hn,un=.707106781*(Lt=Qe+st),Je=bt+un,hn=bt-un;ke[He+5]=hn+br,ke[He+3]=hn-br,ke[He+1]=Je+Mr,ke[He+7]=Je-Mr,He+=8}for(He=0,qe=0;qe<8;++qe){Re=ke[He],Ke=ke[He+8],Ue=ke[He+16],vt=ke[He+24],et=ke[He+32],rt=ke[He+40],_t=ke[He+48];var yn=Re+(at=ke[He+56]),Ar=Re-at,Hr=Ke+_t,Bt=Ke-_t,lr=Ue+rt,cr=Ue-rt,$n=vt+et,fn=vt-et,Yr=yn+$n,Or=yn-$n,Jr=Hr+lr,Fr=Hr-lr;ke[He]=Yr+Jr,ke[He+32]=Yr-Jr;var Dr=.707106781*(Fr+Or);ke[He+16]=Or+Dr,ke[He+48]=Or-Dr;var Qr=.382683433*((Yr=fn+cr)-(Fr=Bt+Ar)),Xr=.5411961*Yr+Qr,Vn=1.306562965*Fr+Qr,fi=.707106781*(Jr=cr+Bt),di=Ar+fi,ge=Ar-fi;ke[He+40]=ge+Xr,ke[He+24]=ge-Xr,ke[He+8]=di+Vn,ke[He+56]=di-Vn,He++}for(qe=0;qe<64;++qe)Xe=ke[qe]*Ve[qe],d[qe]=Xe>0?Xe+.5|0:Xe-.5|0;return d}(P,H),Ne=0;Ne<64;++Ne)w[te[Ne]]=ye[Ne];var je=w[0]-G;G=w[0],je==0?fe(K[0]):(fe(K[S[ce=32767+je]]),fe(x[ce]));for(var Te=63;Te>0&&w[Te]==0;)Te--;if(Te==0)return fe(pe),G;for(var ve,$=1;$<=Te;){for(var pt=$;w[$]==0&&$<=Te;)++$;var ot=$-pt;if(ot>=16){ve=ot>>4;for(var Ye=1;Ye<=ve;++Ye)fe(de);ot&=15}ce=32767+w[$],fe(ne[(ot<<4)+S[ce]]),fe(x[ce]),$++}return Te!=63&&fe(pe),G}function _e(P){P=Math.min(Math.max(P,1),100),a!=P&&(function(H){for(var G=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],K=0;K<64;K++){var ne=c((G[K]*H+50)/100);ne=Math.min(Math.max(ne,1),255),l[te[K]]=ne}for(var ce=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],pe=0;pe<64;pe++){var de=c((ce[pe]*H+50)/100);de=Math.min(Math.max(de,1),255),h[te[pe]]=de}for(var ye=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Ne=0,je=0;je<8;je++)for(var Te=0;Te<8;Te++)f[Ne]=1/(l[te[Ne]]*ye[je]*ye[Te]*8),p[Ne]=1/(h[te[Ne]]*ye[je]*ye[Te]*8),Ne++}(P<50?Math.floor(5e3/P):Math.floor(200-2*P)),a=P)}this.encode=function(P,H){H&&_e(H),_=new Array,k=0,y=7,me(65496),me(65504),me(16),se(74),se(70),se(73),se(70),se(0),se(1),se(1),se(0),me(1),me(1),se(0),se(0),function(){me(65499),me(132),se(0);for(var Ke=0;Ke<64;Ke++)se(l[Ke]);se(1);for(var Ue=0;Ue<64;Ue++)se(h[Ue])}(),function(Ke,Ue){me(65472),me(17),se(8),me(Ue),me(Ke),se(3),se(1),se(17),se(0),se(2),se(17),se(1),se(3),se(17),se(1)}(P.width,P.height),function(){me(65476),me(418),se(0);for(var Ke=0;Ke<16;Ke++)se(W[Ke+1]);for(var Ue=0;Ue<=11;Ue++)se(D[Ue]);se(16);for(var vt=0;vt<16;vt++)se(X[vt+1]);for(var et=0;et<=161;et++)se(N[et]);se(1);for(var rt=0;rt<16;rt++)se(O[rt+1]);for(var _t=0;_t<=11;_t++)se(J[_t]);se(17);for(var at=0;at<16;at++)se(Y[at+1]);for(var qe=0;qe<=161;qe++)se(ae[qe])}(),me(65498),me(12),se(3),se(1),se(0),se(2),se(17),se(3),se(17),se(0),se(63),se(0);var G=0,K=0,ne=0;k=0,y=7,this.encode.displayName="_encode_";for(var ce,pe,de,ye,Ne,je,Te,ve,$,pt=P.data,ot=P.width,Ye=P.height,ke=4*ot,Ve=0;Ve<Ye;){for(ce=0;ce<ke;){for(Ne=ke*Ve+ce,Te=-1,ve=0,$=0;$<64;$++)je=Ne+(ve=$>>3)*ke+(Te=4*(7&$)),Ve+ve>=Ye&&(je-=ke*(Ve+1+ve-Ye)),ce+Te>=ke&&(je-=ce+Te-ke+4),pe=pt[je++],de=pt[je++],ye=pt[je++],j[$]=(Z[pe]+Z[de+256|0]+Z[ye+512|0]>>16)-128,T[$]=(Z[pe+768|0]+Z[de+1024|0]+Z[ye+1280|0]>>16)-128,E[$]=(Z[pe+1280|0]+Z[de+1536|0]+Z[ye+1792|0]>>16)-128;G=Ie(j,f,G,t,n),K=Ie(T,p,K,r,o),ne=Ie(E,p,ne,r,o),ce+=32}Ve+=8}if(y>=0){var Re=[];Re[1]=y+1,Re[0]=(1<<y+1)-1,fe(Re)}return me(65497),new Uint8Array(_)},e=e||50,function(){for(var P=String.fromCharCode,H=0;H<256;H++)V[H]=P(H)}(),t=he(W,D),r=he(O,J),n=he(X,N),o=he(Y,ae),function(){for(var P=1,H=2,G=1;G<=15;G++){for(var K=P;K<H;K++)S[32767+K]=G,x[32767+K]=[],x[32767+K][1]=G,x[32767+K][0]=K;for(var ne=-(H-1);ne<=-P;ne++)S[32767+ne]=G,x[32767+ne]=[],x[32767+ne][1]=G,x[32767+ne][0]=H-1+ne;P<<=1,H<<=1}}(),function(){for(var P=0;P<256;P++)Z[P]=19595*P,Z[P+256|0]=38470*P,Z[P+512|0]=7471*P+32768,Z[P+768|0]=-11059*P,Z[P+1024|0]=-21709*P,Z[P+1280|0]=32768*P+8421375,Z[P+1536|0]=-27439*P,Z[P+1792|0]=-5329*P}(),_e(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function An(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function hh(e){function t(D){if(!D)throw Error("assert :P")}function r(D,X,N){for(var O=0;4>O;O++)if(D[X+O]!=N.charCodeAt(O))return!0;return!1}function n(D,X,N,O,J){for(var Y=0;Y<J;Y++)D[X+Y]=N[O+Y]}function o(D,X,N,O){for(var J=0;J<O;J++)D[X+J]=N}function a(D){return new Int32Array(D)}function c(D,X){for(var N=[],O=0;O<D;O++)N.push(new X);return N}function l(D,X){var N=[];return function O(J,Y,ae){for(var he=ae[Y],fe=0;fe<he&&(J.push(ae.length>Y+1?[]:new X),!(ae.length<Y+1));fe++)O(J[fe],Y+1,ae)}(N,0,D),N}var h=function(){var D=this;function X(s,u){for(var g=1<<u-1>>>0;s&g;)g>>>=1;return g?(s&g-1)+g:s}function N(s,u,g,b,A){t(!(b%g));do s[u+(b-=g)]=A;while(0<b)}function O(s,u,g,b,A){if(t(2328>=A),512>=A)var L=a(512);else if((L=a(A))==null)return 0;return function(I,R,M,B,ee,ue){var z,re,oe=R,be=1<<M,le=a(16),xe=a(16);for(t(ee!=0),t(B!=null),t(I!=null),t(0<M),re=0;re<ee;++re){if(15<B[re])return 0;++le[B[re]]}if(le[0]==ee)return 0;for(xe[1]=0,z=1;15>z;++z){if(le[z]>1<<z)return 0;xe[z+1]=xe[z]+le[z]}for(re=0;re<ee;++re)z=B[re],0<B[re]&&(ue[xe[z]++]=re);if(xe[15]==1)return(B=new J).g=0,B.value=ue[0],N(I,oe,1,be,B),be;var Se,Le=-1,Ce=be-1,We=0,Me=1,ft=1,Be=1<<M;for(re=0,z=1,ee=2;z<=M;++z,ee<<=1){if(Me+=ft<<=1,0>(ft-=le[z]))return 0;for(;0<le[z];--le[z])(B=new J).g=z,B.value=ue[re++],N(I,oe+We,ee,Be,B),We=X(We,z)}for(z=M+1,ee=2;15>=z;++z,ee<<=1){if(Me+=ft<<=1,0>(ft-=le[z]))return 0;for(;0<le[z];--le[z]){if(B=new J,(We&Ce)!=Le){for(oe+=Be,Se=1<<(Le=z)-M;15>Le&&!(0>=(Se-=le[Le]));)++Le,Se<<=1;be+=Be=1<<(Se=Le-M),I[R+(Le=We&Ce)].g=Se+M,I[R+Le].value=oe-R-Le}B.g=z-M,B.value=ue[re++],N(I,oe+(We>>M),ee,Be,B),We=X(We,z)}}return Me!=2*xe[15]-1?0:be}(s,u,g,b,A,L)}function J(){this.value=this.g=0}function Y(){this.value=this.g=0}function ae(){this.G=c(5,J),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=c(ro,Y)}function he(s,u,g,b){t(s!=null),t(u!=null),t(2147483648>b),s.Ca=254,s.I=0,s.b=-8,s.Ka=0,s.oa=u,s.pa=g,s.Jd=u,s.Yc=g+b,s.Zc=4<=b?g+b-4+1:g,pe(s)}function fe(s,u){for(var g=0;0<u--;)g|=ye(s,128)<<u;return g}function se(s,u){var g=fe(s,u);return de(s)?-g:g}function me(s,u,g,b){var A,L=0;for(t(s!=null),t(u!=null),t(4294967288>b),s.Sb=b,s.Ra=0,s.u=0,s.h=0,4<b&&(b=4),A=0;A<b;++A)L+=u[g+A]<<8*A;s.Ra=L,s.bb=b,s.oa=u,s.pa=g}function Ie(s){for(;8<=s.u&&s.bb<s.Sb;)s.Ra>>>=8,s.Ra+=s.oa[s.pa+s.bb]<<wi-8>>>0,++s.bb,s.u-=8;K(s)&&(s.h=1,s.u=0)}function _e(s,u){if(t(0<=u),!s.h&&u<=en){var g=G(s)&Kr[u];return s.u+=u,Ie(s),g}return s.h=1,s.u=0}function P(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function H(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function G(s){return s.Ra>>>(s.u&wi-1)>>>0}function K(s){return t(s.bb<=s.Sb),s.h||s.bb==s.Sb&&s.u>wi}function ne(s,u){s.u=u,s.h=K(s)}function ce(s){s.u>=Kn&&(t(s.u>=Kn),Ie(s))}function pe(s){t(s!=null&&s.oa!=null),s.pa<s.Zc?(s.I=(s.oa[s.pa++]|s.I<<8)>>>0,s.b+=8):(t(s!=null&&s.oa!=null),s.pa<s.Yc?(s.b+=8,s.I=s.oa[s.pa++]|s.I<<8):s.Ka?s.b=0:(s.I<<=8,s.b+=8,s.Ka=1))}function de(s){return fe(s,1)}function ye(s,u){var g=s.Ca;0>s.b&&pe(s);var b=s.b,A=g*u>>>8,L=(s.I>>>b>A)+0;for(L?(g-=A,s.I-=A+1<<b>>>0):g=A+1,b=g,A=0;256<=b;)A+=8,b>>=8;return b=7^A+yi[b],s.b-=b,s.Ca=(g<<b)-1,L}function Ne(s,u,g){s[u+0]=g>>24&255,s[u+1]=g>>16&255,s[u+2]=g>>8&255,s[u+3]=255&g}function je(s,u){return s[u+0]|s[u+1]<<8}function Te(s,u){return je(s,u)|s[u+2]<<16}function ve(s,u){return je(s,u)|je(s,u+2)<<16}function $(s,u){var g=1<<u;return t(s!=null),t(0<u),s.X=a(g),s.X==null?0:(s.Mb=32-u,s.Xa=u,1)}function pt(s,u){t(s!=null),t(u!=null),t(s.Xa==u.Xa),n(u.X,0,s.X,0,1<<u.Xa)}function ot(){this.X=[],this.Xa=this.Mb=0}function Ye(s,u,g,b){t(g!=null),t(b!=null);var A=g[0],L=b[0];return A==0&&(A=(s*L+u/2)/u),L==0&&(L=(u*A+s/2)/s),0>=A||0>=L?0:(g[0]=A,b[0]=L,1)}function ke(s,u){return s+(1<<u)-1>>>u}function Ve(s,u){return((4278255360&s)+(4278255360&u)>>>0&4278255360)+((16711935&s)+(16711935&u)>>>0&16711935)>>>0}function Re(s,u){D[u]=function(g,b,A,L,I,R,M){var B;for(B=0;B<I;++B){var ee=D[s](R[M+B-1],A,L+B);R[M+B]=Ve(g[b+B],ee)}}}function Ke(){this.ud=this.hd=this.jd=0}function Ue(s,u){return((4278124286&(s^u))>>>1)+(s&u)>>>0}function vt(s){return 0<=s&&256>s?s:0>s?0:255<s?255:void 0}function et(s,u){return vt(s+(s-u+.5>>1))}function rt(s,u,g){return Math.abs(u-g)-Math.abs(s-g)}function _t(s,u,g,b,A,L,I){for(b=L[I-1],g=0;g<A;++g)L[I+g]=b=Ve(s[u+g],b)}function at(s,u,g,b,A){var L;for(L=0;L<g;++L){var I=s[u+L],R=I>>8&255,M=16711935&(M=(M=16711935&I)+((R<<16)+R));b[A+L]=(4278255360&I)+M>>>0}}function qe(s,u){u.jd=255&s,u.hd=s>>8&255,u.ud=s>>16&255}function Xe(s,u,g,b,A,L){var I;for(I=0;I<b;++I){var R=u[g+I],M=R>>>8,B=R,ee=255&(ee=(ee=R>>>16)+((s.jd<<24>>24)*(M<<24>>24)>>>5));B=255&(B=(B+=(s.hd<<24>>24)*(M<<24>>24)>>>5)+((s.ud<<24>>24)*(ee<<24>>24)>>>5)),A[L+I]=(4278255360&R)+(ee<<16)+B}}function He(s,u,g,b,A){D[u]=function(L,I,R,M,B,ee,ue,z,re){for(M=ue;M<z;++M)for(ue=0;ue<re;++ue)B[ee++]=A(R[b(L[I++])])},D[s]=function(L,I,R,M,B,ee,ue){var z=8>>L.b,re=L.Ea,oe=L.K[0],be=L.w;if(8>z)for(L=(1<<L.b)-1,be=(1<<z)-1;I<R;++I){var le,xe=0;for(le=0;le<re;++le)le&L||(xe=b(M[B++])),ee[ue++]=A(oe[xe&be]),xe>>=z}else D["VP8LMapColor"+g](M,B,oe,be,ee,ue,I,R,re)}}function Tt(s,u,g,b,A){for(g=u+g;u<g;){var L=s[u++];b[A++]=L>>16&255,b[A++]=L>>8&255,b[A++]=255&L}}function bt(s,u,g,b,A){for(g=u+g;u<g;){var L=s[u++];b[A++]=L>>16&255,b[A++]=L>>8&255,b[A++]=255&L,b[A++]=L>>24&255}}function De(s,u,g,b,A){for(g=u+g;u<g;){var L=(I=s[u++])>>16&240|I>>12&15,I=240&I|I>>28&15;b[A++]=L,b[A++]=I}}function st(s,u,g,b,A){for(g=u+g;u<g;){var L=(I=s[u++])>>16&248|I>>13&7,I=I>>5&224|I>>3&31;b[A++]=L,b[A++]=I}}function xt(s,u,g,b,A){for(g=u+g;u<g;){var L=s[u++];b[A++]=255&L,b[A++]=L>>8&255,b[A++]=L>>16&255}}function Qe(s,u,g,b,A,L){if(L==0)for(g=u+g;u<g;)Ne(b,((L=s[u++])[0]>>24|L[1]>>8&65280|L[2]<<8&16711680|L[3]<<24)>>>0),A+=32;else n(b,A,s,u,g)}function mt(s,u){D[u][0]=D[s+"0"],D[u][1]=D[s+"1"],D[u][2]=D[s+"2"],D[u][3]=D[s+"3"],D[u][4]=D[s+"4"],D[u][5]=D[s+"5"],D[u][6]=D[s+"6"],D[u][7]=D[s+"7"],D[u][8]=D[s+"8"],D[u][9]=D[s+"9"],D[u][10]=D[s+"10"],D[u][11]=D[s+"11"],D[u][12]=D[s+"12"],D[u][13]=D[s+"13"],D[u][14]=D[s+"0"],D[u][15]=D[s+"0"]}function nt(s){return s==hl||s==fl||s==Ga||s==dl}function Ht(){this.eb=[],this.size=this.A=this.fb=0}function Kt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Lt(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Ht,this.f.kb=new Kt,this.sd=null}function Ze(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function Ct(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Hn(s){return alert("todo:WebPSamplerProcessPlane"),s.T}function br(s,u){var g=s.T,b=u.ba.f.RGBA,A=b.eb,L=b.fb+s.ka*b.A,I=xn[u.ba.S],R=s.y,M=s.O,B=s.f,ee=s.N,ue=s.ea,z=s.W,re=u.cc,oe=u.dc,be=u.Mc,le=u.Nc,xe=s.ka,Se=s.ka+s.T,Le=s.U,Ce=Le+1>>1;for(xe==0?I(R,M,null,null,B,ee,ue,z,B,ee,ue,z,A,L,null,null,Le):(I(u.ec,u.fc,R,M,re,oe,be,le,B,ee,ue,z,A,L-b.A,A,L,Le),++g);xe+2<Se;xe+=2)re=B,oe=ee,be=ue,le=z,ee+=s.Rc,z+=s.Rc,L+=2*b.A,I(R,(M+=2*s.fa)-s.fa,R,M,re,oe,be,le,B,ee,ue,z,A,L-b.A,A,L,Le);return M+=s.fa,s.j+Se<s.o?(n(u.ec,u.fc,R,M,Le),n(u.cc,u.dc,B,ee,Ce),n(u.Mc,u.Nc,ue,z,Ce),g--):1&Se||I(R,M,null,null,B,ee,ue,z,B,ee,ue,z,A,L+b.A,null,null,Le),g}function Mr(s,u,g){var b=s.F,A=[s.J];if(b!=null){var L=s.U,I=u.ba.S,R=I==Wa||I==Ga;u=u.ba.f.RGBA;var M=[0],B=s.ka;M[0]=s.T,s.Kb&&(B==0?--M[0]:(--B,A[0]-=s.width),s.j+s.ka+s.T==s.o&&(M[0]=s.o-s.j-B));var ee=u.eb;B=u.fb+B*u.A,s=eu(b,A[0],s.width,L,M,ee,B+(R?0:3),u.A),t(g==M),s&&nt(I)&&sa(ee,B,R,L,M,u.A)}return 0}function un(s){var u=s.ma,g=u.ba.S,b=11>g,A=g==$a||g==Va||g==Wa||g==ul||g==12||nt(g);if(u.memory=null,u.Ib=null,u.Jb=null,u.Nd=null,!Ko(u.Oa,s,A?11:12))return 0;if(A&&nt(g)&&Da(),s.da)alert("todo:use_scaling");else{if(b){if(u.Ib=Hn,s.Kb){if(g=s.U+1>>1,u.memory=a(s.U+2*g),u.memory==null)return 0;u.ec=u.memory,u.fc=0,u.cc=u.ec,u.dc=u.fc+s.U,u.Mc=u.cc,u.Nc=u.dc+g,u.Ib=br,Da()}}else alert("todo:EmitYUV");A&&(u.Jb=Mr,b&&mn())}if(b&&!gu){for(s=0;256>s;++s)H0[s]=89858*(s-128)+Ja>>Ya,W0[s]=-22014*(s-128)+Ja,V0[s]=-45773*(s-128),$0[s]=113618*(s-128)+Ja>>Ya;for(s=ca;s<gl;++s)u=76283*(s-16)+Ja>>Ya,G0[s-ca]=Jt(u,255),Y0[s-ca]=Jt(u+8>>4,15);gu=1}return 1}function Je(s){var u=s.ma,g=s.U,b=s.T;return t(!(1&s.ka)),0>=g||0>=b?0:(g=u.Ib(s,u),u.Jb!=null&&u.Jb(s,u,g),u.Dc+=g,1)}function hn(s){s.ma.memory=null}function yn(s,u,g,b){return _e(s,8)!=47?0:(u[0]=_e(s,14)+1,g[0]=_e(s,14)+1,b[0]=_e(s,1),_e(s,3)!=0?0:!s.h)}function Ar(s,u){if(4>s)return s+1;var g=s-2>>1;return(2+(1&s)<<g)+_e(u,g)+1}function Hr(s,u){return 120<u?u-120:1<=(g=((g=I0[u-1])>>4)*s+(8-(15&g)))?g:1;var g}function Bt(s,u,g){var b=G(g),A=s[u+=255&b].g-8;return 0<A&&(ne(g,g.u+8),b=G(g),u+=s[u].value,u+=b&(1<<A)-1),ne(g,g.u+s[u].g),s[u].value}function lr(s,u,g){return g.g+=s.g,g.value+=s.value<<u>>>0,t(8>=g.g),s.g}function cr(s,u,g){var b=s.xc;return t((u=b==0?0:s.vc[s.md*(g>>b)+(u>>b)])<s.Wb),s.Ya[u]}function $n(s,u,g,b){var A=s.ab,L=s.c*u,I=s.C;u=I+u;var R=g,M=b;for(b=s.Ta,g=s.Ua;0<A--;){var B=s.gc[A],ee=I,ue=u,z=R,re=M,oe=(M=b,R=g,B.Ea);switch(t(ee<ue),t(ue<=B.nc),B.hc){case 2:er(z,re,(ue-ee)*oe,M,R);break;case 0:var be=ee,le=ue,xe=M,Se=R,Le=(Be=B).Ea;be==0&&(ta(z,re,null,null,1,xe,Se),_t(z,re+1,0,0,Le-1,xe,Se+1),re+=Le,Se+=Le,++be);for(var Ce=1<<Be.b,We=Ce-1,Me=ke(Le,Be.b),ft=Be.K,Be=Be.w+(be>>Be.b)*Me;be<le;){var gt=ft,mr=Be,dt=1;for(Co(z,re,xe,Se-Le,1,xe,Se);dt<Le;){var ze=(dt&~We)+Ce;ze>Le&&(ze=Le),(0,na[gt[mr++]>>8&15])(z,re+ +dt,xe,Se+dt-Le,ze-dt,xe,Se+dt),dt=ze}re+=Le,Se+=Le,++be&We||(Be+=Me)}ue!=B.nc&&n(M,R-oe,M,R+(ue-ee-1)*oe,oe);break;case 1:for(oe=z,le=re,Le=(z=B.Ea)-(Se=z&~(xe=(re=1<<B.b)-1)),be=ke(z,B.b),Ce=B.K,B=B.w+(ee>>B.b)*be;ee<ue;){for(We=Ce,Me=B,ft=new Ke,Be=le+Se,gt=le+z;le<Be;)qe(We[Me++],ft),ia(ft,oe,le,re,M,R),le+=re,R+=re;le<gt&&(qe(We[Me++],ft),ia(ft,oe,le,Le,M,R),le+=Le,R+=Le),++ee&xe||(B+=be)}break;case 3:if(z==M&&re==R&&0<B.b){for(le=M,z=oe=R+(ue-ee)*oe-(Se=(ue-ee)*ke(B.Ea,B.b)),re=M,xe=R,be=[],Se=(Le=Se)-1;0<=Se;--Se)be[Se]=re[xe+Se];for(Se=Le-1;0<=Se;--Se)le[z+Se]=be[Se];za(B,ee,ue,M,oe,M,R)}else za(B,ee,ue,z,re,M,R)}R=b,M=g}M!=g&&n(b,g,R,M,L)}function fn(s,u){var g=s.V,b=s.Ba+s.c*s.C,A=u-s.C;if(t(u<=s.l.o),t(16>=A),0<A){var L=s.l,I=s.Ta,R=s.Ua,M=L.width;if($n(s,A,g,b),A=R=[R],t((g=s.C)<(b=u)),t(L.v<L.va),b>L.o&&(b=L.o),g<L.j){var B=L.j-g;g=L.j,A[0]+=B*M}if(g>=b?g=0:(A[0]+=4*L.v,L.ka=g-L.j,L.U=L.va-L.v,L.T=b-g,g=1),g){if(R=R[0],11>(g=s.ca).S){var ee=g.f.RGBA,ue=(b=g.S,A=L.U,L=L.T,B=ee.eb,ee.A),z=L;for(ee=ee.fb+s.Ma*ee.A;0<z--;){var re=I,oe=R,be=A,le=B,xe=ee;switch(b){case Ha:oa(re,oe,be,le,xe);break;case $a:Si(re,oe,be,le,xe);break;case hl:Si(re,oe,be,le,xe),sa(le,xe,0,be,1,0);break;case su:no(re,oe,be,le,xe);break;case Va:Qe(re,oe,be,le,xe,1);break;case fl:Qe(re,oe,be,le,xe,1),sa(le,xe,0,be,1,0);break;case Wa:Qe(re,oe,be,le,xe,0);break;case Ga:Qe(re,oe,be,le,xe,0),sa(le,xe,1,be,1,0);break;case ul:_i(re,oe,be,le,xe);break;case dl:_i(re,oe,be,le,xe),Kc(le,xe,be,1,0);break;case lu:Ci(re,oe,be,le,xe);break;default:t(0)}R+=M,ee+=ue}s.Ma+=L}else alert("todo:EmitRescaledRowsYUVA");t(s.Ma<=g.height)}}s.C=u,t(s.C<=s.i)}function Yr(s){var u;if(0<s.ua)return 0;for(u=0;u<s.Wb;++u){var g=s.Ya[u].G,b=s.Ya[u].H;if(0<g[1][b[1]+0].g||0<g[2][b[2]+0].g||0<g[3][b[3]+0].g)return 0}return 1}function Or(s,u,g,b,A,L){if(s.Z!=0){var I=s.qd,R=s.rd;for(t(Li[s.Z]!=null);u<g;++u)Li[s.Z](I,R,b,A,b,A,L),I=b,R=A,A+=L;s.qd=I,s.rd=R}}function Jr(s,u){var g=s.l.ma,b=g.Z==0||g.Z==1?s.l.j:s.C;if(b=s.C<b?b:s.C,t(u<=s.l.o),u>b){var A=s.l.width,L=g.ca,I=g.tb+A*b,R=s.V,M=s.Ba+s.c*b,B=s.gc;t(s.ab==1),t(B[0].hc==3),Rn(B[0],b,u,R,M,L,I),Or(g,b,u,L,I,A)}s.C=s.Ma=u}function Fr(s,u,g,b,A,L,I){var R=s.$/b,M=s.$%b,B=s.m,ee=s.s,ue=g+s.$,z=ue;A=g+b*A;var re=g+b*L,oe=280+ee.ua,be=s.Pb?R:16777216,le=0<ee.ua?ee.Wa:null,xe=ee.wc,Se=ue<re?cr(ee,M,R):null;t(s.C<L),t(re<=A);var Le=!1;e:for(;;){for(;Le||ue<re;){var Ce=0;if(R>=be){var We=ue-g;t((be=s).Pb),be.wd=be.m,be.xd=We,0<be.s.ua&&pt(be.s.Wa,be.s.vb),be=R+E0}if(M&xe||(Se=cr(ee,M,R)),t(Se!=null),Se.Qb&&(u[ue]=Se.qb,Le=!0),!Le)if(ce(B),Se.jc){Ce=B,We=u;var Me=ue,ft=Se.pd[G(Ce)&ro-1];t(Se.jc),256>ft.g?(ne(Ce,Ce.u+ft.g),We[Me]=ft.value,Ce=0):(ne(Ce,Ce.u+ft.g-256),t(256<=ft.value),Ce=ft.value),Ce==0&&(Le=!0)}else Ce=Bt(Se.G[0],Se.H[0],B);if(B.h)break;if(Le||256>Ce){if(!Le)if(Se.nd)u[ue]=(Se.qb|Ce<<8)>>>0;else{if(ce(B),Le=Bt(Se.G[1],Se.H[1],B),ce(B),We=Bt(Se.G[2],Se.H[2],B),Me=Bt(Se.G[3],Se.H[3],B),B.h)break;u[ue]=(Me<<24|Le<<16|Ce<<8|We)>>>0}if(Le=!1,++ue,++M>=b&&(M=0,++R,I!=null&&R<=L&&!(R%16)&&I(s,R),le!=null))for(;z<ue;)Ce=u[z++],le.X[(506832829*Ce&4294967295)>>>le.Mb]=Ce}else if(280>Ce){if(Ce=Ar(Ce-256,B),We=Bt(Se.G[4],Se.H[4],B),ce(B),We=Hr(b,We=Ar(We,B)),B.h)break;if(ue-g<We||A-ue<Ce)break e;for(Me=0;Me<Ce;++Me)u[ue+Me]=u[ue+Me-We];for(ue+=Ce,M+=Ce;M>=b;)M-=b,++R,I!=null&&R<=L&&!(R%16)&&I(s,R);if(t(ue<=A),M&xe&&(Se=cr(ee,M,R)),le!=null)for(;z<ue;)Ce=u[z++],le.X[(506832829*Ce&4294967295)>>>le.Mb]=Ce}else{if(!(Ce<oe))break e;for(Le=Ce-280,t(le!=null);z<ue;)Ce=u[z++],le.X[(506832829*Ce&4294967295)>>>le.Mb]=Ce;Ce=ue,t(!(Le>>>(We=le).Xa)),u[Ce]=We.X[Le],Le=!0}Le||t(B.h==K(B))}if(s.Pb&&B.h&&ue<A)t(s.m.h),s.a=5,s.m=s.wd,s.$=s.xd,0<s.s.ua&&pt(s.s.vb,s.s.Wa);else{if(B.h)break e;I!=null&&I(s,R>L?L:R),s.a=0,s.$=ue-g}return 1}return s.a=3,0}function Dr(s){t(s!=null),s.vc=null,s.yc=null,s.Ya=null;var u=s.Wa;u!=null&&(u.X=null),s.vb=null,t(s!=null)}function Qr(){var s=new $e;return s==null?null:(s.a=0,s.xb=hu,mt("Predictor","VP8LPredictors"),mt("Predictor","VP8LPredictors_C"),mt("PredictorAdd","VP8LPredictorsAdd"),mt("PredictorAdd","VP8LPredictorsAdd_C"),er=at,ia=Xe,oa=Tt,Si=bt,_i=De,Ci=st,no=xt,D.VP8LMapColor32b=jn,D.VP8LMapColor8b=ra,s)}function Xr(s,u,g,b,A){var L=1,I=[s],R=[u],M=b.m,B=b.s,ee=null,ue=0;e:for(;;){if(g)for(;L&&_e(M,1);){var z=I,re=R,oe=b,be=1,le=oe.m,xe=oe.gc[oe.ab],Se=_e(le,2);if(oe.Oc&1<<Se)L=0;else{switch(oe.Oc|=1<<Se,xe.hc=Se,xe.Ea=z[0],xe.nc=re[0],xe.K=[null],++oe.ab,t(4>=oe.ab),Se){case 0:case 1:xe.b=_e(le,3)+2,be=Xr(ke(xe.Ea,xe.b),ke(xe.nc,xe.b),0,oe,xe.K),xe.K=xe.K[0];break;case 3:var Le,Ce=_e(le,8)+1,We=16<Ce?0:4<Ce?1:2<Ce?2:3;if(z[0]=ke(xe.Ea,We),xe.b=We,Le=be=Xr(Ce,1,0,oe,xe.K)){var Me,ft=Ce,Be=xe,gt=1<<(8>>Be.b),mr=a(gt);if(mr==null)Le=0;else{var dt=Be.K[0],ze=Be.w;for(mr[0]=Be.K[0][0],Me=1;Me<1*ft;++Me)mr[Me]=Ve(dt[ze+Me],mr[Me-1]);for(;Me<4*gt;++Me)mr[Me]=0;Be.K[0]=null,Be.K[0]=mr,Le=1}}be=Le;break;case 2:break;default:t(0)}L=be}}if(I=I[0],R=R[0],L&&_e(M,1)&&!(L=1<=(ue=_e(M,4))&&11>=ue)){b.a=3;break e}var Ee;if(Ee=L)t:{var rr,ht,yt,zt=b,yr=I,zr=R,Qt=ue,Ir=g,Ur=zt.m,gr=zt.s,St=[null],Nt=1,Xt=0,It=P0[Qt];r:for(;;){if(Ir&&_e(Ur,1)){var Sr=_e(Ur,3)+2,_n=ke(yr,Sr),nr=ke(zr,Sr),Vr=_n*nr;if(!Xr(_n,nr,0,zt,St))break r;for(St=St[0],gr.xc=Sr,rr=0;rr<Vr;++rr){var Mt=St[rr]>>8&65535;St[rr]=Mt,Mt>=Nt&&(Nt=Mt+1)}}if(Ur.h)break r;for(ht=0;5>ht;++ht){var vr=cu[ht];!ht&&0<Qt&&(vr+=1<<Qt),Xt<vr&&(Xt=vr)}var rn=c(Nt*It,J),qr=Nt,nn=c(qr,ae);if(nn==null)var on=null;else t(65536>=qr),on=nn;var Wr=a(Xt);if(on==null||Wr==null||rn==null){zt.a=1;break r}var an=rn;for(rr=yt=0;rr<Nt;++rr){var Dt=on[rr],sn=Dt.G,Cn=Dt.H,oo=0,ri=1,_r=0;for(ht=0;5>ht;++ht){vr=cu[ht],sn[ht]=an,Cn[ht]=yt,!ht&&0<Qt&&(vr+=1<<Qt);i:{var Xa,vl=vr,Za=zt,ua=Wr,X0=an,Z0=yt,bl=0,Ni=Za.m,K0=_e(Ni,1);if(o(ua,0,0,vl),K0){var ef=_e(Ni,1)+1,tf=_e(Ni,1),xu=_e(Ni,tf==0?1:8);ua[xu]=1,ef==2&&(ua[xu=_e(Ni,8)]=1);var Ka=1}else{var wu=a(19),yu=_e(Ni,4)+4;if(19<yu){Za.a=3;var es=0;break i}for(Xa=0;Xa<yu;++Xa)wu[N0[Xa]]=_e(Ni,3);var xl=void 0,ha=void 0,Su=Za,rf=wu,ts=vl,_u=ua,wl=0,Ii=Su.m,Cu=8,Au=c(128,J);n:for(;O(Au,0,7,rf,19);){if(_e(Ii,1)){var nf=2+2*_e(Ii,3);if((xl=2+_e(Ii,nf))>ts)break n}else xl=ts;for(ha=0;ha<ts&&xl--;){ce(Ii);var ku=Au[0+(127&G(Ii))];ne(Ii,Ii.u+ku.g);var ko=ku.value;if(16>ko)_u[ha++]=ko,ko!=0&&(Cu=ko);else{var of=ko==16,Lu=ko-16,af=k0[Lu],Nu=_e(Ii,A0[Lu])+af;if(ha+Nu>ts)break n;for(var sf=of?Cu:0;0<Nu--;)_u[ha++]=sf}}wl=1;break n}wl||(Su.a=3),Ka=wl}(Ka=Ka&&!Ni.h)&&(bl=O(X0,Z0,8,ua,vl)),Ka&&bl!=0?es=bl:(Za.a=3,es=0)}if(es==0)break r;if(ri&&L0[ht]==1&&(ri=an[yt].g==0),oo+=an[yt].g,yt+=es,3>=ht){var fa,yl=Wr[0];for(fa=1;fa<vr;++fa)Wr[fa]>yl&&(yl=Wr[fa]);_r+=yl}}if(Dt.nd=ri,Dt.Qb=0,ri&&(Dt.qb=(sn[3][Cn[3]+0].value<<24|sn[1][Cn[1]+0].value<<16|sn[2][Cn[2]+0].value)>>>0,oo==0&&256>sn[0][Cn[0]+0].value&&(Dt.Qb=1,Dt.qb+=sn[0][Cn[0]+0].value<<8)),Dt.jc=!Dt.Qb&&6>_r,Dt.jc){var rs,ni=Dt;for(rs=0;rs<ro;++rs){var Pi=rs,Ei=ni.pd[Pi],ns=ni.G[0][ni.H[0]+Pi];256<=ns.value?(Ei.g=ns.g+256,Ei.value=ns.value):(Ei.g=0,Ei.value=0,Pi>>=lr(ns,8,Ei),Pi>>=lr(ni.G[1][ni.H[1]+Pi],16,Ei),Pi>>=lr(ni.G[2][ni.H[2]+Pi],0,Ei),lr(ni.G[3][ni.H[3]+Pi],24,Ei))}}}gr.vc=St,gr.Wb=Nt,gr.Ya=on,gr.yc=rn,Ee=1;break t}Ee=0}if(!(L=Ee)){b.a=3;break e}if(0<ue){if(B.ua=1<<ue,!$(B.Wa,ue)){b.a=1,L=0;break e}}else B.ua=0;var Sl=b,Iu=I,lf=R,_l=Sl.s,Cl=_l.xc;if(Sl.c=Iu,Sl.i=lf,_l.md=ke(Iu,Cl),_l.wc=Cl==0?-1:(1<<Cl)-1,g){b.xb=D0;break e}if((ee=a(I*R))==null){b.a=1,L=0;break e}L=(L=Fr(b,ee,0,I,R,R,null))&&!M.h;break e}return L?(A!=null?A[0]=ee:(t(ee==null),t(g)),b.$=0,g||Dr(B)):Dr(B),L}function Vn(s,u){var g=s.c*s.i,b=g+u+16*u;return t(s.c<=u),s.V=a(b),s.V==null?(s.Ta=null,s.Ua=0,s.a=1,0):(s.Ta=s.V,s.Ua=s.Ba+g+u,1)}function fi(s,u){var g=s.C,b=u-g,A=s.V,L=s.Ba+s.c*g;for(t(u<=s.l.o);0<b;){var I=16<b?16:b,R=s.l.ma,M=s.l.width,B=M*I,ee=R.ca,ue=R.tb+M*g,z=s.Ta,re=s.Ua;$n(s,I,A,L),tu(z,re,ee,ue,B),Or(R,g,g+I,ee,ue,M),b-=I,A+=I*s.c,g+=I}t(g==u),s.C=s.Ma=u}function di(){this.ub=this.yd=this.td=this.Rb=0}function ge(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function wt(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Yt(){this.Yb=function(){var s=[];return function u(g,b,A){for(var L=A[b],I=0;I<L&&(g.push(A.length>b+1?[]:0),!(A.length<b+1));I++)u(g[I],b+1,A)}(s,0,[3,11]),s}()}function dn(){this.jb=a(3),this.Wc=l([4,8],Yt),this.Xc=l([4,17],Yt)}function Br(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function kr(){this.ld=this.La=this.dd=this.tc=0}function pi(){this.Na=this.la=0}function go(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Lr(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function mi(){this.uc=this.M=this.Nb=0,this.wa=Array(new kr),this.Y=0,this.ya=Array(new Lr),this.aa=0,this.l=new Wn}function vo(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Bi(){this.cb=this.a=0,this.sc="",this.m=new P,this.Od=new di,this.Kc=new ge,this.ed=new Br,this.Qa=new wt,this.Ic=this.$c=this.Aa=0,this.D=new mi,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=c(8,P),this.ia=0,this.pb=c(4,go),this.Pa=new dn,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new vo),this.Hd=0,this.rb=Array(new pi),this.sb=0,this.wa=Array(new kr),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Lr),this.L=this.aa=0,this.gd=l([4,2],kr),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Wn(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function qo(){var s=new Bi;return s!=null&&(s.a=0,s.sc="OK",s.cb=0,s.Xb=0,la||(la=pn)),s}function Vt(s,u,g){return s.a==0&&(s.a=u,s.sc=g,s.cb=0),0}function zi(s,u,g){return 3<=g&&s[u+0]==157&&s[u+1]==1&&s[u+2]==42}function Ui(s,u){if(s==null)return 0;if(s.a=0,s.sc="OK",u==null)return Vt(s,2,"null VP8Io passed to VP8GetHeaders()");var g=u.data,b=u.w,A=u.ha;if(4>A)return Vt(s,7,"Truncated header.");var L=g[b+0]|g[b+1]<<8|g[b+2]<<16,I=s.Od;if(I.Rb=!(1&L),I.td=L>>1&7,I.yd=L>>4&1,I.ub=L>>5,3<I.td)return Vt(s,3,"Incorrect keyframe parameters.");if(!I.yd)return Vt(s,4,"Frame not displayable.");b+=3,A-=3;var R=s.Kc;if(I.Rb){if(7>A)return Vt(s,7,"cannot parse picture header");if(!zi(g,b,A))return Vt(s,3,"Bad code word");R.c=16383&(g[b+4]<<8|g[b+3]),R.Td=g[b+4]>>6,R.i=16383&(g[b+6]<<8|g[b+5]),R.Ud=g[b+6]>>6,b+=7,A-=7,s.za=R.c+15>>4,s.Ub=R.i+15>>4,u.width=R.c,u.height=R.i,u.Da=0,u.j=0,u.v=0,u.va=u.width,u.o=u.height,u.da=0,u.ib=u.width,u.hb=u.height,u.U=u.width,u.T=u.height,o((L=s.Pa).jb,0,255,L.jb.length),t((L=s.Qa)!=null),L.Cb=0,L.Bb=0,L.Fb=1,o(L.Zb,0,0,L.Zb.length),o(L.Lb,0,0,L.Lb)}if(I.ub>A)return Vt(s,7,"bad partition length");he(L=s.m,g,b,I.ub),b+=I.ub,A-=I.ub,I.Rb&&(R.Ld=de(L),R.Kd=de(L)),R=s.Qa;var M,B=s.Pa;if(t(L!=null),t(R!=null),R.Cb=de(L),R.Cb){if(R.Bb=de(L),de(L)){for(R.Fb=de(L),M=0;4>M;++M)R.Zb[M]=de(L)?se(L,7):0;for(M=0;4>M;++M)R.Lb[M]=de(L)?se(L,6):0}if(R.Bb)for(M=0;3>M;++M)B.jb[M]=de(L)?fe(L,8):255}else R.Bb=0;if(L.Ka)return Vt(s,3,"cannot parse segment header");if((R=s.ed).zd=de(L),R.Tb=fe(L,6),R.wb=fe(L,3),R.Pc=de(L),R.Pc&&de(L)){for(B=0;4>B;++B)de(L)&&(R.vd[B]=se(L,6));for(B=0;4>B;++B)de(L)&&(R.od[B]=se(L,6))}if(s.L=R.Tb==0?0:R.zd?1:2,L.Ka)return Vt(s,3,"cannot parse filter header");var ee=A;if(A=M=b,b=M+ee,R=ee,s.Xb=(1<<fe(s.m,2))-1,ee<3*(B=s.Xb))g=7;else{for(M+=3*B,R-=3*B,ee=0;ee<B;++ee){var ue=g[A+0]|g[A+1]<<8|g[A+2]<<16;ue>R&&(ue=R),he(s.Jc[+ee],g,M,ue),M+=ue,R-=ue,A+=3}he(s.Jc[+B],g,M,R),g=M<b?0:5}if(g!=0)return Vt(s,g,"cannot parse partitions");for(g=fe(M=s.m,7),A=de(M)?se(M,4):0,b=de(M)?se(M,4):0,R=de(M)?se(M,4):0,B=de(M)?se(M,4):0,M=de(M)?se(M,4):0,ee=s.Qa,ue=0;4>ue;++ue){if(ee.Cb){var z=ee.Zb[ue];ee.Fb||(z+=g)}else{if(0<ue){s.pb[ue]=s.pb[0];continue}z=g}var re=s.pb[ue];re.Sc[0]=pl[Jt(z+A,127)],re.Sc[1]=ml[Jt(z+0,127)],re.Eb[0]=2*pl[Jt(z+b,127)],re.Eb[1]=101581*ml[Jt(z+R,127)]>>16,8>re.Eb[1]&&(re.Eb[1]=8),re.Qc[0]=pl[Jt(z+B,117)],re.Qc[1]=ml[Jt(z+M,127)],re.lc=z+M}if(!I.Rb)return Vt(s,4,"Not a key frame.");for(de(L),I=s.Pa,g=0;4>g;++g){for(A=0;8>A;++A)for(b=0;3>b;++b)for(R=0;11>R;++R)B=ye(L,O0[g][A][b][R])?fe(L,8):R0[g][A][b][R],I.Wc[g][A].Yb[b][R]=B;for(A=0;17>A;++A)I.Xc[g][A]=I.Wc[g][F0[A]]}return s.kc=de(L),s.kc&&(s.Bd=fe(L,8)),s.cb=1}function pn(s,u,g,b,A,L,I){var R=u[A].Yb[g];for(g=0;16>A;++A){if(!ye(s,R[g+0]))return A;for(;!ye(s,R[g+1]);)if(R=u[++A].Yb[0],g=0,A==16)return 16;var M=u[A+1].Yb;if(ye(s,R[g+2])){var B=s,ee=0;if(ye(B,(z=R)[(ue=g)+3]))if(ye(B,z[ue+6])){for(R=0,ue=2*(ee=ye(B,z[ue+8]))+(z=ye(B,z[ue+9+ee])),ee=0,z=T0[ue];z[R];++R)ee+=ee+ye(B,z[R]);ee+=3+(8<<ue)}else ye(B,z[ue+7])?(ee=7+2*ye(B,165),ee+=ye(B,145)):ee=5+ye(B,159);else ee=ye(B,z[ue+4])?3+ye(B,z[ue+5]):2;R=M[2]}else ee=1,R=M[1];M=I+j0[A],0>(B=s).b&&pe(B);var ue,z=B.b,re=(ue=B.Ca>>1)-(B.I>>z)>>31;--B.b,B.Ca+=re,B.Ca|=1,B.I-=(ue+1&re)<<z,L[M]=((ee^re)-re)*b[(0<A)+0]}return 16}function Pn(s){var u=s.rb[s.sb-1];u.la=0,u.Na=0,o(s.zc,0,0,s.zc.length),s.ja=0}function Zr(s,u,g,b,A){A=s[u+g+32*b]+(A>>3),s[u+g+32*b]=-256&A?0>A?0:255:A}function Gn(s,u,g,b,A,L){Zr(s,u,0,g,b+A),Zr(s,u,1,g,b+L),Zr(s,u,2,g,b-L),Zr(s,u,3,g,b-A)}function jt(s){return(20091*s>>16)+s}function En(s,u,g,b){var A,L=0,I=a(16);for(A=0;4>A;++A){var R=s[u+0]+s[u+8],M=s[u+0]-s[u+8],B=(35468*s[u+4]>>16)-jt(s[u+12]),ee=jt(s[u+4])+(35468*s[u+12]>>16);I[L+0]=R+ee,I[L+1]=M+B,I[L+2]=M-B,I[L+3]=R-ee,L+=4,u++}for(A=L=0;4>A;++A)R=(s=I[L+0]+4)+I[L+8],M=s-I[L+8],B=(35468*I[L+4]>>16)-jt(I[L+12]),Zr(g,b,0,0,R+(ee=jt(I[L+4])+(35468*I[L+12]>>16))),Zr(g,b,1,0,M+B),Zr(g,b,2,0,M-B),Zr(g,b,3,0,R-ee),L++,b+=32}function Js(s,u,g,b){var A=s[u+0]+4,L=35468*s[u+4]>>16,I=jt(s[u+4]),R=35468*s[u+1]>>16;Gn(g,b,0,A+I,s=jt(s[u+1]),R),Gn(g,b,1,A+L,s,R),Gn(g,b,2,A-L,s,R),Gn(g,b,3,A-I,s,R)}function Qs(s,u,g,b,A){En(s,u,g,b),A&&En(s,u+16,g,b+4)}function Xs(s,u,g,b){io(s,u+0,g,b,1),io(s,u+32,g,b+128,1)}function Tn(s,u,g,b){var A;for(s=s[u+0]+4,A=0;4>A;++A)for(u=0;4>u;++u)Zr(g,b,u,A,s)}function Ea(s,u,g,b){s[u+0]&&kt(s,u+0,g,b),s[u+16]&&kt(s,u+16,g,b+4),s[u+32]&&kt(s,u+32,g,b+128),s[u+48]&&kt(s,u+48,g,b+128+4)}function Ta(s,u,g,b){var A,L=a(16);for(A=0;4>A;++A){var I=s[u+0+A]+s[u+12+A],R=s[u+4+A]+s[u+8+A],M=s[u+4+A]-s[u+8+A],B=s[u+0+A]-s[u+12+A];L[0+A]=I+R,L[8+A]=I-R,L[4+A]=B+M,L[12+A]=B-M}for(A=0;4>A;++A)I=(s=L[0+4*A]+3)+L[3+4*A],R=L[1+4*A]+L[2+4*A],M=L[1+4*A]-L[2+4*A],B=s-L[3+4*A],g[b+0]=I+R>>3,g[b+16]=B+M>>3,g[b+32]=I-R>>3,g[b+48]=B-M>>3,b+=64}function gi(s,u,g){var b,A=u-32,L=tn,I=255-s[A-1];for(b=0;b<g;++b){var R,M=L,B=I+s[u-1];for(R=0;R<g;++R)s[u+R]=M[B+s[A+R]];u+=32}}function Ho(s,u){gi(s,u,4)}function Zs(s,u){gi(s,u,8)}function Ks(s,u){gi(s,u,16)}function el(s,u){var g;for(g=0;16>g;++g)n(s,u+32*g,s,u-32,16)}function $o(s,u){var g;for(g=16;0<g;--g)o(s,u,s[u-1],16),u+=32}function qi(s,u,g){var b;for(b=0;16>b;++b)o(u,g+32*b,s,16)}function vi(s,u){var g,b=16;for(g=0;16>g;++g)b+=s[u-1+32*g]+s[u+g-32];qi(b>>5,s,u)}function tl(s,u){var g,b=8;for(g=0;16>g;++g)b+=s[u-1+32*g];qi(b>>4,s,u)}function Hi(s,u){var g,b=8;for(g=0;16>g;++g)b+=s[u+g-32];qi(b>>4,s,u)}function Vo(s,u){qi(128,s,u)}function lt(s,u,g){return s+2*u+g+2>>2}function rl(s,u){var g,b=u-32;for(b=new Uint8Array([lt(s[b-1],s[b+0],s[b+1]),lt(s[b+0],s[b+1],s[b+2]),lt(s[b+1],s[b+2],s[b+3]),lt(s[b+2],s[b+3],s[b+4])]),g=0;4>g;++g)n(s,u+32*g,b,0,b.length)}function nl(s,u){var g=s[u-1],b=s[u-1+32],A=s[u-1+64],L=s[u-1+96];Ne(s,u+0,16843009*lt(s[u-1-32],g,b)),Ne(s,u+32,16843009*lt(g,b,A)),Ne(s,u+64,16843009*lt(b,A,L)),Ne(s,u+96,16843009*lt(A,L,L))}function il(s,u){var g,b=4;for(g=0;4>g;++g)b+=s[u+g-32]+s[u-1+32*g];for(b>>=3,g=0;4>g;++g)o(s,u+32*g,b,4)}function ol(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1-32],I=s[u+0-32],R=s[u+1-32],M=s[u+2-32],B=s[u+3-32];s[u+0+96]=lt(b,A,s[u-1+96]),s[u+1+96]=s[u+0+64]=lt(g,b,A),s[u+2+96]=s[u+1+64]=s[u+0+32]=lt(L,g,b),s[u+3+96]=s[u+2+64]=s[u+1+32]=s[u+0+0]=lt(I,L,g),s[u+3+64]=s[u+2+32]=s[u+1+0]=lt(R,I,L),s[u+3+32]=s[u+2+0]=lt(M,R,I),s[u+3+0]=lt(B,M,R)}function Yn(s,u){var g=s[u+1-32],b=s[u+2-32],A=s[u+3-32],L=s[u+4-32],I=s[u+5-32],R=s[u+6-32],M=s[u+7-32];s[u+0+0]=lt(s[u+0-32],g,b),s[u+1+0]=s[u+0+32]=lt(g,b,A),s[u+2+0]=s[u+1+32]=s[u+0+64]=lt(b,A,L),s[u+3+0]=s[u+2+32]=s[u+1+64]=s[u+0+96]=lt(A,L,I),s[u+3+32]=s[u+2+64]=s[u+1+96]=lt(L,I,R),s[u+3+64]=s[u+2+96]=lt(I,R,M),s[u+3+96]=lt(R,M,M)}function Jn(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1-32],I=s[u+0-32],R=s[u+1-32],M=s[u+2-32],B=s[u+3-32];s[u+0+0]=s[u+1+64]=L+I+1>>1,s[u+1+0]=s[u+2+64]=I+R+1>>1,s[u+2+0]=s[u+3+64]=R+M+1>>1,s[u+3+0]=M+B+1>>1,s[u+0+96]=lt(A,b,g),s[u+0+64]=lt(b,g,L),s[u+0+32]=s[u+1+96]=lt(g,L,I),s[u+1+32]=s[u+2+96]=lt(L,I,R),s[u+2+32]=s[u+3+96]=lt(I,R,M),s[u+3+32]=lt(R,M,B)}function al(s,u){var g=s[u+0-32],b=s[u+1-32],A=s[u+2-32],L=s[u+3-32],I=s[u+4-32],R=s[u+5-32],M=s[u+6-32],B=s[u+7-32];s[u+0+0]=g+b+1>>1,s[u+1+0]=s[u+0+64]=b+A+1>>1,s[u+2+0]=s[u+1+64]=A+L+1>>1,s[u+3+0]=s[u+2+64]=L+I+1>>1,s[u+0+32]=lt(g,b,A),s[u+1+32]=s[u+0+96]=lt(b,A,L),s[u+2+32]=s[u+1+96]=lt(A,L,I),s[u+3+32]=s[u+2+96]=lt(L,I,R),s[u+3+64]=lt(I,R,M),s[u+3+96]=lt(R,M,B)}function sl(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1+96];s[u+0+0]=g+b+1>>1,s[u+2+0]=s[u+0+32]=b+A+1>>1,s[u+2+32]=s[u+0+64]=A+L+1>>1,s[u+1+0]=lt(g,b,A),s[u+3+0]=s[u+1+32]=lt(b,A,L),s[u+3+32]=s[u+1+64]=lt(A,L,L),s[u+3+64]=s[u+2+64]=s[u+0+96]=s[u+1+96]=s[u+2+96]=s[u+3+96]=L}function bo(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],L=s[u-1+96],I=s[u-1-32],R=s[u+0-32],M=s[u+1-32],B=s[u+2-32];s[u+0+0]=s[u+2+32]=g+I+1>>1,s[u+0+32]=s[u+2+64]=b+g+1>>1,s[u+0+64]=s[u+2+96]=A+b+1>>1,s[u+0+96]=L+A+1>>1,s[u+3+0]=lt(R,M,B),s[u+2+0]=lt(I,R,M),s[u+1+0]=s[u+3+32]=lt(g,I,R),s[u+1+32]=s[u+3+64]=lt(b,g,I),s[u+1+64]=s[u+3+96]=lt(A,b,g),s[u+1+96]=lt(L,A,b)}function Wo(s,u){var g;for(g=0;8>g;++g)n(s,u+32*g,s,u-32,8)}function $i(s,u){var g;for(g=0;8>g;++g)o(s,u,s[u-1],8),u+=32}function xo(s,u,g){var b;for(b=0;8>b;++b)o(u,g+32*b,s,8)}function wo(s,u){var g,b=8;for(g=0;8>g;++g)b+=s[u+g-32]+s[u-1+32*g];xo(b>>4,s,u)}function ll(s,u){var g,b=4;for(g=0;8>g;++g)b+=s[u+g-32];xo(b>>3,s,u)}function Go(s,u){var g,b=4;for(g=0;8>g;++g)b+=s[u-1+32*g];xo(b>>3,s,u)}function Yo(s,u){xo(128,s,u)}function Vi(s,u,g){var b=s[u-g],A=s[u+0],L=3*(A-b)+cl[1020+s[u-2*g]-s[u+g]],I=qa[112+(L+4>>3)];s[u-g]=tn[255+b+qa[112+(L+3>>3)]],s[u+0]=tn[255+A-I]}function Wi(s,u,g,b){var A=s[u+0],L=s[u+g];return bn[255+s[u-2*g]-s[u-g]]>b||bn[255+L-A]>b}function Jo(s,u,g,b){return 4*bn[255+s[u-g]-s[u+0]]+bn[255+s[u-2*g]-s[u+g]]<=b}function yo(s,u,g,b,A){var L=s[u-3*g],I=s[u-2*g],R=s[u-g],M=s[u+0],B=s[u+g],ee=s[u+2*g],ue=s[u+3*g];return 4*bn[255+R-M]+bn[255+I-B]>b?0:bn[255+s[u-4*g]-L]<=A&&bn[255+L-I]<=A&&bn[255+I-R]<=A&&bn[255+ue-ee]<=A&&bn[255+ee-B]<=A&&bn[255+B-M]<=A}function Qo(s,u,g,b){var A=2*b+1;for(b=0;16>b;++b)Jo(s,u+b,g,A)&&Vi(s,u+b,g)}function Gi(s,u,g,b){var A=2*b+1;for(b=0;16>b;++b)Jo(s,u+b*g,1,A)&&Vi(s,u+b*g,1)}function ja(s,u,g,b){var A;for(A=3;0<A;--A)Qo(s,u+=4*g,g,b)}function Ra(s,u,g,b){var A;for(A=3;0<A;--A)Gi(s,u+=4,g,b)}function Qn(s,u,g,b,A,L,I,R){for(L=2*L+1;0<A--;){if(yo(s,u,g,L,I))if(Wi(s,u,g,R))Vi(s,u,g);else{var M=s,B=u,ee=g,ue=M[B-2*ee],z=M[B-ee],re=M[B+0],oe=M[B+ee],be=M[B+2*ee],le=27*(Se=cl[1020+3*(re-z)+cl[1020+ue-oe]])+63>>7,xe=18*Se+63>>7,Se=9*Se+63>>7;M[B-3*ee]=tn[255+M[B-3*ee]+Se],M[B-2*ee]=tn[255+ue+xe],M[B-ee]=tn[255+z+le],M[B+0]=tn[255+re-le],M[B+ee]=tn[255+oe-xe],M[B+2*ee]=tn[255+be-Se]}u+=b}}function Xn(s,u,g,b,A,L,I,R){for(L=2*L+1;0<A--;){if(yo(s,u,g,L,I))if(Wi(s,u,g,R))Vi(s,u,g);else{var M=s,B=u,ee=g,ue=M[B-ee],z=M[B+0],re=M[B+ee],oe=qa[112+(4+(be=3*(z-ue))>>3)],be=qa[112+(be+3>>3)],le=oe+1>>1;M[B-2*ee]=tn[255+M[B-2*ee]+le],M[B-ee]=tn[255+ue+be],M[B+0]=tn[255+z-oe],M[B+ee]=tn[255+re-le]}u+=b}}function Ma(s,u,g,b,A,L){Qn(s,u,g,1,16,b,A,L)}function Oa(s,u,g,b,A,L){Qn(s,u,1,g,16,b,A,L)}function Yi(s,u,g,b,A,L){var I;for(I=3;0<I;--I)Xn(s,u+=4*g,g,1,16,b,A,L)}function Fa(s,u,g,b,A,L){var I;for(I=3;0<I;--I)Xn(s,u+=4,1,g,16,b,A,L)}function m(s,u,g,b,A,L,I,R){Qn(s,u,A,1,8,L,I,R),Qn(g,b,A,1,8,L,I,R)}function C(s,u,g,b,A,L,I,R){Qn(s,u,1,A,8,L,I,R),Qn(g,b,1,A,8,L,I,R)}function U(s,u,g,b,A,L,I,R){Xn(s,u+4*A,A,1,8,L,I,R),Xn(g,b+4*A,A,1,8,L,I,R)}function Q(s,u,g,b,A,L,I,R){Xn(s,u+4,1,A,8,L,I,R),Xn(g,b+4,1,A,8,L,I,R)}function ie(){this.ba=new Lt,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new Ct,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function we(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Ae(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Fe(){this.ua=0,this.Wa=new ot,this.vb=new ot,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new ae,this.yc=new J}function $e(){this.xb=this.a=0,this.l=new Wn,this.ca=new Lt,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new H,this.Pb=0,this.wd=new H,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Fe,this.ab=0,this.gc=c(4,Ae),this.Oc=0}function it(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Wn,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ct(s,u,g,b,A,L,I){for(s=s==null?0:s[u+0],u=0;u<I;++u)A[L+u]=s+g[b+u]&255,s=A[L+u]}function At(s,u,g,b,A,L,I){var R;if(s==null)ct(null,null,g,b,A,L,I);else for(R=0;R<I;++R)A[L+R]=s[u+R]+g[b+R]&255}function Wt(s,u,g,b,A,L,I){if(s==null)ct(null,null,g,b,A,L,I);else{var R,M=s[u+0],B=M,ee=M;for(R=0;R<I;++R)B=ee+(M=s[u+R])-B,ee=g[b+R]+(-256&B?0>B?0:255:B)&255,B=M,A[L+R]=ee}}function ur(s,u,g,b){var A=u.width,L=u.o;if(t(s!=null&&u!=null),0>g||0>=b||g+b>L)return null;if(!s.Cc){if(s.ga==null){var I;if(s.ga=new it,(I=s.ga==null)||(I=u.width*u.o,t(s.Gb.length==0),s.Gb=a(I),s.Uc=0,s.Gb==null?I=0:(s.mb=s.Gb,s.nb=s.Uc,s.rc=null,I=1),I=!I),!I){I=s.ga;var R=s.Fa,M=s.P,B=s.qc,ee=s.mb,ue=s.nb,z=M+1,re=B-1,oe=I.l;if(t(R!=null&&ee!=null&&u!=null),Li[0]=null,Li[1]=ct,Li[2]=At,Li[3]=Wt,I.ca=ee,I.tb=ue,I.c=u.width,I.i=u.height,t(0<I.c&&0<I.i),1>=B)u=0;else if(I.$a=3&R[M+0],I.Z=R[M+0]>>2&3,I.Lc=R[M+0]>>4&3,M=R[M+0]>>6&3,0>I.$a||1<I.$a||4<=I.Z||1<I.Lc||M)u=0;else if(oe.put=Je,oe.ac=un,oe.bc=hn,oe.ma=I,oe.width=u.width,oe.height=u.height,oe.Da=u.Da,oe.v=u.v,oe.va=u.va,oe.j=u.j,oe.o=u.o,I.$a)e:{t(I.$a==1),u=Qr();t:for(;;){if(u==null){u=0;break e}if(t(I!=null),I.mc=u,u.c=I.c,u.i=I.i,u.l=I.l,u.l.ma=I,u.l.width=I.c,u.l.height=I.i,u.a=0,me(u.m,R,z,re),!Xr(I.c,I.i,1,u,null)||(u.ab==1&&u.gc[0].hc==3&&Yr(u.s)?(I.ic=1,R=u.c*u.i,u.Ta=null,u.Ua=0,u.V=a(R),u.Ba=0,u.V==null?(u.a=1,u=0):u=1):(I.ic=0,u=Vn(u,I.c)),!u))break t;u=1;break e}I.mc=null,u=0}else u=re>=I.c*I.i;I=!u}if(I)return null;s.ga.Lc!=1?s.Ga=0:b=L-g}t(s.ga!=null),t(g+b<=L);e:{if(u=(R=s.ga).c,L=R.l.o,R.$a==0){if(z=s.rc,re=s.Vc,oe=s.Fa,M=s.P+1+g*u,B=s.mb,ee=s.nb+g*u,t(M<=s.P+s.qc),R.Z!=0)for(t(Li[R.Z]!=null),I=0;I<b;++I)Li[R.Z](z,re,oe,M,B,ee,u),z=B,re=ee,ee+=u,M+=u;else for(I=0;I<b;++I)n(B,ee,oe,M,u),z=B,re=ee,ee+=u,M+=u;s.rc=z,s.Vc=re}else{if(t(R.mc!=null),u=g+b,t((I=R.mc)!=null),t(u<=I.i),I.C>=u)u=1;else if(R.ic||mn(),R.ic){R=I.V,z=I.Ba,re=I.c;var be=I.i,le=(oe=1,M=I.$/re,B=I.$%re,ee=I.m,ue=I.s,I.$),xe=re*be,Se=re*u,Le=ue.wc,Ce=le<Se?cr(ue,B,M):null;t(le<=xe),t(u<=be),t(Yr(ue));t:for(;;){for(;!ee.h&&le<Se;){if(B&Le||(Ce=cr(ue,B,M)),t(Ce!=null),ce(ee),256>(be=Bt(Ce.G[0],Ce.H[0],ee)))R[z+le]=be,++le,++B>=re&&(B=0,++M<=u&&!(M%16)&&Jr(I,M));else{if(!(280>be)){oe=0;break t}be=Ar(be-256,ee);var We,Me=Bt(Ce.G[4],Ce.H[4],ee);if(ce(ee),!(le>=(Me=Hr(re,Me=Ar(Me,ee)))&&xe-le>=be)){oe=0;break t}for(We=0;We<be;++We)R[z+le+We]=R[z+le+We-Me];for(le+=be,B+=be;B>=re;)B-=re,++M<=u&&!(M%16)&&Jr(I,M);le<Se&&B&Le&&(Ce=cr(ue,B,M))}t(ee.h==K(ee))}Jr(I,M>u?u:M);break t}!oe||ee.h&&le<xe?(oe=0,I.a=ee.h?5:3):I.$=le,u=oe}else u=Fr(I,I.V,I.Ba,I.c,I.i,u,fi);if(!u){b=0;break e}}g+b>=L&&(s.Cc=1),b=1}if(!b)return null;if(s.Cc&&((b=s.ga)!=null&&(b.mc=null),s.ga=null,0<s.Ga))return alert("todo:WebPDequantizeLevels"),null}return s.nb+g*A}function Ft(s,u,g,b,A,L){for(;0<A--;){var I,R=s,M=u+(g?1:0),B=s,ee=u+(g?0:3);for(I=0;I<b;++I){var ue=B[ee+4*I];ue!=255&&(ue*=32897,R[M+4*I+0]=R[M+4*I+0]*ue>>23,R[M+4*I+1]=R[M+4*I+1]*ue>>23,R[M+4*I+2]=R[M+4*I+2]*ue>>23)}u+=L}}function dr(s,u,g,b,A){for(;0<b--;){var L;for(L=0;L<g;++L){var I=s[u+2*L+0],R=15&(B=s[u+2*L+1]),M=4369*R,B=(240&B|B>>4)*M>>16;s[u+2*L+0]=(240&I|I>>4)*M>>16&240|(15&I|I<<4)*M>>16>>4&15,s[u+2*L+1]=240&B|R}u+=A}}function hr(s,u,g,b,A,L,I,R){var M,B,ee=255;for(B=0;B<A;++B){for(M=0;M<b;++M){var ue=s[u+M];L[I+4*M]=ue,ee&=ue}u+=g,I+=R}return ee!=255}function wr(s,u,g,b,A){var L;for(L=0;L<A;++L)g[b+L]=s[u+L]>>8}function mn(){sa=Ft,Kc=dr,eu=hr,tu=wr}function $r(s,u,g){D[s]=function(b,A,L,I,R,M,B,ee,ue,z,re,oe,be,le,xe,Se,Le){var Ce,We=Le-1>>1,Me=R[M+0]|B[ee+0]<<16,ft=ue[z+0]|re[oe+0]<<16;t(b!=null);var Be=3*Me+ft+131074>>2;for(u(b[A+0],255&Be,Be>>16,be,le),L!=null&&(Be=3*ft+Me+131074>>2,u(L[I+0],255&Be,Be>>16,xe,Se)),Ce=1;Ce<=We;++Ce){var gt=R[M+Ce]|B[ee+Ce]<<16,mr=ue[z+Ce]|re[oe+Ce]<<16,dt=Me+gt+ft+mr+524296,ze=dt+2*(gt+ft)>>3;Be=ze+Me>>1,Me=(dt=dt+2*(Me+mr)>>3)+gt>>1,u(b[A+2*Ce-1],255&Be,Be>>16,be,le+(2*Ce-1)*g),u(b[A+2*Ce-0],255&Me,Me>>16,be,le+(2*Ce-0)*g),L!=null&&(Be=dt+ft>>1,Me=ze+mr>>1,u(L[I+2*Ce-1],255&Be,Be>>16,xe,Se+(2*Ce-1)*g),u(L[I+2*Ce+0],255&Me,Me>>16,xe,Se+(2*Ce+0)*g)),Me=gt,ft=mr}1&Le||(Be=3*Me+ft+131074>>2,u(b[A+Le-1],255&Be,Be>>16,be,le+(Le-1)*g),L!=null&&(Be=3*ft+Me+131074>>2,u(L[I+Le-1],255&Be,Be>>16,xe,Se+(Le-1)*g)))}}function Da(){xn[Ha]=B0,xn[$a]=fu,xn[su]=z0,xn[Va]=du,xn[Wa]=pu,xn[ul]=mu,xn[lu]=U0,xn[hl]=fu,xn[fl]=du,xn[Ga]=pu,xn[dl]=mu}function So(s){return s&-16384?0>s?0:255:s>>q0}function Ji(s,u){return So((19077*s>>8)+(26149*u>>8)-14234)}function bi(s,u,g){return So((19077*s>>8)-(6419*u>>8)-(13320*g>>8)+8708)}function Qi(s,u){return So((19077*s>>8)+(33050*u>>8)-17685)}function Xi(s,u,g,b,A){b[A+0]=Ji(s,g),b[A+1]=bi(s,u,g),b[A+2]=Qi(s,u)}function Zi(s,u,g,b,A){b[A+0]=Qi(s,u),b[A+1]=bi(s,u,g),b[A+2]=Ji(s,g)}function Nr(s,u,g,b,A){var L=bi(s,u,g);u=L<<3&224|Qi(s,u)>>3,b[A+0]=248&Ji(s,g)|L>>5,b[A+1]=u}function Ki(s,u,g,b,A){var L=240&Qi(s,u)|15;b[A+0]=240&Ji(s,g)|bi(s,u,g)>>4,b[A+1]=L}function eo(s,u,g,b,A){b[A+0]=255,Xi(s,u,g,b,A+1)}function Xo(s,u,g,b,A){Zi(s,u,g,b,A),b[A+3]=255}function Zo(s,u,g,b,A){Xi(s,u,g,b,A),b[A+3]=255}function Jt(s,u){return 0>s?0:s>u?u:s}function Zn(s,u,g){D[s]=function(b,A,L,I,R,M,B,ee,ue){for(var z=ee+(-2&ue)*g;ee!=z;)u(b[A+0],L[I+0],R[M+0],B,ee),u(b[A+1],L[I+0],R[M+0],B,ee+g),A+=2,++I,++M,ee+=2*g;1&ue&&u(b[A+0],L[I+0],R[M+0],B,ee)}}function _o(s,u,g){return g==0?s==0?u==0?6:5:u==0?4:0:g}function Ba(s,u,g,b,A){switch(s>>>30){case 3:io(u,g,b,A,0);break;case 2:vn(u,g,b,A);break;case 1:kt(u,g,b,A)}}function gn(s,u){var g,b,A=u.M,L=u.Nb,I=s.oc,R=s.pc+40,M=s.oc,B=s.pc+584,ee=s.oc,ue=s.pc+600;for(g=0;16>g;++g)I[R+32*g-1]=129;for(g=0;8>g;++g)M[B+32*g-1]=129,ee[ue+32*g-1]=129;for(0<A?I[R-1-32]=M[B-1-32]=ee[ue-1-32]=129:(o(I,R-32-1,127,21),o(M,B-32-1,127,9),o(ee,ue-32-1,127,9)),b=0;b<s.za;++b){var z=u.ya[u.aa+b];if(0<b){for(g=-1;16>g;++g)n(I,R+32*g-4,I,R+32*g+12,4);for(g=-1;8>g;++g)n(M,B+32*g-4,M,B+32*g+4,4),n(ee,ue+32*g-4,ee,ue+32*g+4,4)}var re=s.Gd,oe=s.Hd+b,be=z.ad,le=z.Hc;if(0<A&&(n(I,R-32,re[oe].y,0,16),n(M,B-32,re[oe].f,0,8),n(ee,ue-32,re[oe].ea,0,8)),z.Za){var xe=I,Se=R-32+16;for(0<A&&(b>=s.za-1?o(xe,Se,re[oe].y[15],4):n(xe,Se,re[oe+1].y,0,4)),g=0;4>g;g++)xe[Se+128+g]=xe[Se+256+g]=xe[Se+384+g]=xe[Se+0+g];for(g=0;16>g;++g,le<<=2)xe=I,Se=R+vu[g],Sn[z.Ob[g]](xe,Se),Ba(le,be,16*+g,xe,Se)}else if(xe=_o(b,A,z.Ob[0]),ki[xe](I,R),le!=0)for(g=0;16>g;++g,le<<=2)Ba(le,be,16*+g,I,R+vu[g]);for(g=z.Gc,xe=_o(b,A,z.Dd),ti[xe](M,B),ti[xe](ee,ue),le=be,xe=M,Se=B,255&(z=0|g)&&(170&z?Mn(le,256,xe,Se):Rt(le,256,xe,Se)),z=ee,le=ue,255&(g>>=8)&&(170&g?Mn(be,320,z,le):Rt(be,320,z,le)),A<s.Ub-1&&(n(re[oe].y,0,I,R+480,16),n(re[oe].f,0,M,B+224,8),n(re[oe].ea,0,ee,ue+224,8)),g=8*L*s.B,re=s.sa,oe=s.ta+16*b+16*L*s.R,be=s.qa,z=s.ra+8*b+g,le=s.Ha,xe=s.Ia+8*b+g,g=0;16>g;++g)n(re,oe+g*s.R,I,R+32*g,16);for(g=0;8>g;++g)n(be,z+g*s.B,M,B+32*g,8),n(le,xe+g*s.B,ee,ue+32*g,8)}}function to(s,u,g,b,A,L,I,R,M){var B=[0],ee=[0],ue=0,z=M!=null?M.kd:0,re=M??new we;if(s==null||12>g)return 7;re.data=s,re.w=u,re.ha=g,u=[u],g=[g],re.gb=[re.gb];e:{var oe=u,be=g,le=re.gb;if(t(s!=null),t(be!=null),t(le!=null),le[0]=0,12<=be[0]&&!r(s,oe[0],"RIFF")){if(r(s,oe[0]+8,"WEBP")){le=3;break e}var xe=ve(s,oe[0]+4);if(12>xe||4294967286<xe){le=3;break e}if(z&&xe>be[0]-8){le=7;break e}le[0]=xe,oe[0]+=12,be[0]-=12}le=0}if(le!=0)return le;for(xe=0<re.gb[0],g=g[0];;){e:{var Se=s;be=u,le=g;var Le=B,Ce=ee,We=oe=[0];if((Be=ue=[ue])[0]=0,8>le[0])le=7;else{if(!r(Se,be[0],"VP8X")){if(ve(Se,be[0]+4)!=10){le=3;break e}if(18>le[0]){le=7;break e}var Me=ve(Se,be[0]+8),ft=1+Te(Se,be[0]+12);if(2147483648<=ft*(Se=1+Te(Se,be[0]+15))){le=3;break e}We!=null&&(We[0]=Me),Le!=null&&(Le[0]=ft),Ce!=null&&(Ce[0]=Se),be[0]+=18,le[0]-=18,Be[0]=1}le=0}}if(ue=ue[0],oe=oe[0],le!=0)return le;if(be=!!(2&oe),!xe&&ue)return 3;if(L!=null&&(L[0]=!!(16&oe)),I!=null&&(I[0]=be),R!=null&&(R[0]=0),I=B[0],oe=ee[0],ue&&be&&M==null){le=0;break}if(4>g){le=7;break}if(xe&&ue||!xe&&!ue&&!r(s,u[0],"ALPH")){g=[g],re.na=[re.na],re.P=[re.P],re.Sa=[re.Sa];e:{Me=s,le=u,xe=g;var Be=re.gb;Le=re.na,Ce=re.P,We=re.Sa,ft=22,t(Me!=null),t(xe!=null),Se=le[0];var gt=xe[0];for(t(Le!=null),t(We!=null),Le[0]=null,Ce[0]=null,We[0]=0;;){if(le[0]=Se,xe[0]=gt,8>gt){le=7;break e}var mr=ve(Me,Se+4);if(4294967286<mr){le=3;break e}var dt=8+mr+1&-2;if(ft+=dt,0<Be&&ft>Be){le=3;break e}if(!r(Me,Se,"VP8 ")||!r(Me,Se,"VP8L")){le=0;break e}if(gt[0]<dt){le=7;break e}r(Me,Se,"ALPH")||(Le[0]=Me,Ce[0]=Se+8,We[0]=mr),Se+=dt,gt-=dt}}if(g=g[0],re.na=re.na[0],re.P=re.P[0],re.Sa=re.Sa[0],le!=0)break}g=[g],re.Ja=[re.Ja],re.xa=[re.xa];e:if(Be=s,le=u,xe=g,Le=re.gb[0],Ce=re.Ja,We=re.xa,Me=le[0],Se=!r(Be,Me,"VP8 "),ft=!r(Be,Me,"VP8L"),t(Be!=null),t(xe!=null),t(Ce!=null),t(We!=null),8>xe[0])le=7;else{if(Se||ft){if(Be=ve(Be,Me+4),12<=Le&&Be>Le-12){le=3;break e}if(z&&Be>xe[0]-8){le=7;break e}Ce[0]=Be,le[0]+=8,xe[0]-=8,We[0]=ft}else We[0]=5<=xe[0]&&Be[Me+0]==47&&!(Be[Me+4]>>5),Ce[0]=xe[0];le=0}if(g=g[0],re.Ja=re.Ja[0],re.xa=re.xa[0],u=u[0],le!=0)break;if(4294967286<re.Ja)return 3;if(R==null||be||(R[0]=re.xa?2:1),I=[I],oe=[oe],re.xa){if(5>g){le=7;break}R=I,z=oe,be=L,s==null||5>g?s=0:5<=g&&s[u+0]==47&&!(s[u+4]>>5)?(xe=[0],Be=[0],Le=[0],me(Ce=new H,s,u,g),yn(Ce,xe,Be,Le)?(R!=null&&(R[0]=xe[0]),z!=null&&(z[0]=Be[0]),be!=null&&(be[0]=Le[0]),s=1):s=0):s=0}else{if(10>g){le=7;break}R=oe,s==null||10>g||!zi(s,u+3,g-3)?s=0:(z=s[u+0]|s[u+1]<<8|s[u+2]<<16,be=16383&(s[u+7]<<8|s[u+6]),s=16383&(s[u+9]<<8|s[u+8]),1&z||3<(z>>1&7)||!(z>>4&1)||z>>5>=re.Ja||!be||!s?s=0:(I&&(I[0]=be),R&&(R[0]=s),s=1))}if(!s||(I=I[0],oe=oe[0],ue&&(B[0]!=I||ee[0]!=oe)))return 3;M!=null&&(M[0]=re,M.offset=u-M.w,t(4294967286>u-M.w),t(M.offset==M.ha-g));break}return le==0||le==7&&ue&&M==null?(L!=null&&(L[0]|=re.na!=null&&0<re.na.length),b!=null&&(b[0]=I),A!=null&&(A[0]=oe),0):le}function Ko(s,u,g){var b=u.width,A=u.height,L=0,I=0,R=b,M=A;if(u.Da=s!=null&&0<s.Da,u.Da&&(R=s.cd,M=s.bd,L=s.v,I=s.j,11>g||(L&=-2,I&=-2),0>L||0>I||0>=R||0>=M||L+R>b||I+M>A))return 0;if(u.v=L,u.j=I,u.va=L+R,u.o=I+M,u.U=R,u.T=M,u.da=s!=null&&0<s.da,u.da){if(!Ye(R,M,g=[s.ib],L=[s.hb]))return 0;u.ib=g[0],u.hb=L[0]}return u.ob=s!=null&&s.ob,u.Kb=s==null||!s.Sd,u.da&&(u.ob=u.ib<3*b/4&&u.hb<3*A/4,u.Kb=0),1}function ea(s){if(s==null)return 2;if(11>s.S){var u=s.f.RGBA;u.fb+=(s.height-1)*u.A,u.A=-u.A}else u=s.f.kb,s=s.height,u.O+=(s-1)*u.fa,u.fa=-u.fa,u.N+=(s-1>>1)*u.Ab,u.Ab=-u.Ab,u.W+=(s-1>>1)*u.Db,u.Db=-u.Db,u.F!=null&&(u.J+=(s-1)*u.lb,u.lb=-u.lb);return 0}function xi(s,u,g,b){if(b==null||0>=s||0>=u)return 2;if(g!=null){if(g.Da){var A=g.cd,L=g.bd,I=-2&g.v,R=-2&g.j;if(0>I||0>R||0>=A||0>=L||I+A>s||R+L>u)return 2;s=A,u=L}if(g.da){if(!Ye(s,u,A=[g.ib],L=[g.hb]))return 2;s=A[0],u=L[0]}}b.width=s,b.height=u;e:{var M=b.width,B=b.height;if(s=b.S,0>=M||0>=B||!(s>=Ha&&13>s))s=2;else{if(0>=b.Rd&&b.sd==null){I=L=A=u=0;var ee=(R=M*bu[s])*B;if(11>s||(L=(B+1)/2*(u=(M+1)/2),s==12&&(I=(A=M)*B)),(B=a(ee+2*L+I))==null){s=1;break e}b.sd=B,11>s?((M=b.f.RGBA).eb=B,M.fb=0,M.A=R,M.size=ee):((M=b.f.kb).y=B,M.O=0,M.fa=R,M.Fd=ee,M.f=B,M.N=0+ee,M.Ab=u,M.Cd=L,M.ea=B,M.W=0+ee+L,M.Db=u,M.Ed=L,s==12&&(M.F=B,M.J=0+ee+2*L),M.Tc=I,M.lb=A)}if(u=1,A=b.S,L=b.width,I=b.height,A>=Ha&&13>A)if(11>A)s=b.f.RGBA,u&=(R=Math.abs(s.A))*(I-1)+L<=s.size,u&=R>=L*bu[A],u&=s.eb!=null;else{s=b.f.kb,R=(L+1)/2,ee=(I+1)/2,M=Math.abs(s.fa),B=Math.abs(s.Ab);var ue=Math.abs(s.Db),z=Math.abs(s.lb),re=z*(I-1)+L;u&=M*(I-1)+L<=s.Fd,u&=B*(ee-1)+R<=s.Cd,u=(u&=ue*(ee-1)+R<=s.Ed)&M>=L&B>=R&ue>=R,u&=s.y!=null,u&=s.f!=null,u&=s.ea!=null,A==12&&(u&=z>=L,u&=re<=s.Tc,u&=s.F!=null)}else u=0;s=u?0:2}}return s!=0||g!=null&&g.fd&&(s=ea(b)),s}var ro=64,Kr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],en=24,wi=32,Kn=8,yi=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Re("Predictor0","PredictorAdd0"),D.Predictor0=function(){return 4278190080},D.Predictor1=function(s){return s},D.Predictor2=function(s,u,g){return u[g+0]},D.Predictor3=function(s,u,g){return u[g+1]},D.Predictor4=function(s,u,g){return u[g-1]},D.Predictor5=function(s,u,g){return Ue(Ue(s,u[g+1]),u[g+0])},D.Predictor6=function(s,u,g){return Ue(s,u[g-1])},D.Predictor7=function(s,u,g){return Ue(s,u[g+0])},D.Predictor8=function(s,u,g){return Ue(u[g-1],u[g+0])},D.Predictor9=function(s,u,g){return Ue(u[g+0],u[g+1])},D.Predictor10=function(s,u,g){return Ue(Ue(s,u[g-1]),Ue(u[g+0],u[g+1]))},D.Predictor11=function(s,u,g){var b=u[g+0];return 0>=rt(b>>24&255,s>>24&255,(u=u[g-1])>>24&255)+rt(b>>16&255,s>>16&255,u>>16&255)+rt(b>>8&255,s>>8&255,u>>8&255)+rt(255&b,255&s,255&u)?b:s},D.Predictor12=function(s,u,g){var b=u[g+0];return(vt((s>>24&255)+(b>>24&255)-((u=u[g-1])>>24&255))<<24|vt((s>>16&255)+(b>>16&255)-(u>>16&255))<<16|vt((s>>8&255)+(b>>8&255)-(u>>8&255))<<8|vt((255&s)+(255&b)-(255&u)))>>>0},D.Predictor13=function(s,u,g){var b=u[g-1];return(et((s=Ue(s,u[g+0]))>>24&255,b>>24&255)<<24|et(s>>16&255,b>>16&255)<<16|et(s>>8&255,b>>8&255)<<8|et(255&s,255&b))>>>0};var ta=D.PredictorAdd0;D.PredictorAdd1=_t,Re("Predictor2","PredictorAdd2"),Re("Predictor3","PredictorAdd3"),Re("Predictor4","PredictorAdd4"),Re("Predictor5","PredictorAdd5"),Re("Predictor6","PredictorAdd6"),Re("Predictor7","PredictorAdd7"),Re("Predictor8","PredictorAdd8"),Re("Predictor9","PredictorAdd9"),Re("Predictor10","PredictorAdd10"),Re("Predictor11","PredictorAdd11"),Re("Predictor12","PredictorAdd12"),Re("Predictor13","PredictorAdd13");var Co=D.PredictorAdd2;He("ColorIndexInverseTransform","MapARGB","32b",function(s){return s>>8&255},function(s){return s}),He("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(s){return s},function(s){return s>>8&255});var er,za=D.ColorIndexInverseTransform,jn=D.MapARGB,Rn=D.VP8LColorIndexInverseTransformAlpha,ra=D.MapAlpha,na=D.VP8LPredictorsAdd=[];na.length=16,(D.VP8LPredictors=[]).length=16,(D.VP8LPredictorsAdd_C=[]).length=16,(D.VP8LPredictors_C=[]).length=16;var ia,oa,Si,_i,Ci,no,Ai,io,vn,Mn,kt,Rt,tr,pr,ei,aa,Ao,Ua,Gc,Yc,Jc,Qc,Xc,Zc,sa,Kc,eu,tu,ru=a(511),nu=a(2041),iu=a(225),ou=a(767),au=0,cl=nu,qa=iu,tn=ou,bn=ru,Ha=0,$a=1,su=2,Va=3,Wa=4,ul=5,lu=6,hl=7,fl=8,Ga=9,dl=10,A0=[2,3,7],k0=[3,3,11],cu=[280,256,256,256,40],L0=[0,1,1,1,0],N0=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],I0=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],P0=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],E0=8,pl=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],ml=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],la=null,T0=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],j0=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],uu=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],R0=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],M0=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],O0=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],F0=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],ki=[],Sn=[],ti=[],D0=1,hu=2,Li=[],xn=[];$r("UpsampleRgbLinePair",Xi,3),$r("UpsampleBgrLinePair",Zi,3),$r("UpsampleRgbaLinePair",Zo,4),$r("UpsampleBgraLinePair",Xo,4),$r("UpsampleArgbLinePair",eo,4),$r("UpsampleRgba4444LinePair",Ki,2),$r("UpsampleRgb565LinePair",Nr,2);var B0=D.UpsampleRgbLinePair,z0=D.UpsampleBgrLinePair,fu=D.UpsampleRgbaLinePair,du=D.UpsampleBgraLinePair,pu=D.UpsampleArgbLinePair,mu=D.UpsampleRgba4444LinePair,U0=D.UpsampleRgb565LinePair,Ya=16,Ja=1<<Ya-1,ca=-227,gl=482,q0=6,gu=0,H0=a(256),$0=a(256),V0=a(256),W0=a(256),G0=a(gl-ca),Y0=a(gl-ca);Zn("YuvToRgbRow",Xi,3),Zn("YuvToBgrRow",Zi,3),Zn("YuvToRgbaRow",Zo,4),Zn("YuvToBgraRow",Xo,4),Zn("YuvToArgbRow",eo,4),Zn("YuvToRgba4444Row",Ki,2),Zn("YuvToRgb565Row",Nr,2);var vu=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Qa=[0,2,8],J0=[8,7,6,4,4,2,2,2,1,1,1,1],Q0=1;this.WebPDecodeRGBA=function(s,u,g,b,A){var L=$a,I=new ie,R=new Lt;I.ba=R,R.S=L,R.width=[R.width],R.height=[R.height];var M=R.width,B=R.height,ee=new Ze;if(ee==null||s==null)var ue=2;else t(ee!=null),ue=to(s,u,g,ee.width,ee.height,ee.Pd,ee.Qd,ee.format,null);if(ue!=0?M=0:(M!=null&&(M[0]=ee.width[0]),B!=null&&(B[0]=ee.height[0]),M=1),M){R.width=R.width[0],R.height=R.height[0],b!=null&&(b[0]=R.width),A!=null&&(A[0]=R.height);e:{if(b=new Wn,(A=new we).data=s,A.w=u,A.ha=g,A.kd=1,u=[0],t(A!=null),((s=to(A.data,A.w,A.ha,null,null,null,u,null,A))==0||s==7)&&u[0]&&(s=4),(u=s)==0){if(t(I!=null),b.data=A.data,b.w=A.w+A.offset,b.ha=A.ha-A.offset,b.put=Je,b.ac=un,b.bc=hn,b.ma=I,A.xa){if((s=Qr())==null){I=1;break e}if(function(z,re){var oe=[0],be=[0],le=[0];t:for(;;){if(z==null)return 0;if(re==null)return z.a=2,0;if(z.l=re,z.a=0,me(z.m,re.data,re.w,re.ha),!yn(z.m,oe,be,le)){z.a=3;break t}if(z.xb=hu,re.width=oe[0],re.height=be[0],!Xr(oe[0],be[0],1,z,null))break t;return 1}return t(z.a!=0),0}(s,b)){if(b=(u=xi(b.width,b.height,I.Oa,I.ba))==0){t:{b=s;r:for(;;){if(b==null){b=0;break t}if(t(b.s.yc!=null),t(b.s.Ya!=null),t(0<b.s.Wb),t((g=b.l)!=null),t((A=g.ma)!=null),b.xb!=0){if(b.ca=A.ba,b.tb=A.tb,t(b.ca!=null),!Ko(A.Oa,g,Va)){b.a=2;break r}if(!Vn(b,g.width)||g.da)break r;if((g.da||nt(b.ca.S))&&mn(),11>b.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),b.ca.f.kb.F!=null&&mn()),b.Pb&&0<b.s.ua&&b.s.vb.X==null&&!$(b.s.vb,b.s.Wa.Xa)){b.a=1;break r}b.xb=0}if(!Fr(b,b.V,b.Ba,b.c,b.i,g.o,fn))break r;A.Dc=b.Ma,b=1;break t}t(b.a!=0),b=0}b=!b}b&&(u=s.a)}else u=s.a}else{if((s=new qo)==null){I=1;break e}if(s.Fa=A.na,s.P=A.P,s.qc=A.Sa,Ui(s,b)){if((u=xi(b.width,b.height,I.Oa,I.ba))==0){if(s.Aa=0,g=I.Oa,t((A=s)!=null),g!=null){if(0<(M=0>(M=g.Md)?0:100<M?255:255*M/100)){for(B=ee=0;4>B;++B)12>(ue=A.pb[B]).lc&&(ue.ia=M*J0[0>ue.lc?0:ue.lc]>>3),ee|=ue.ia;ee&&(alert("todo:VP8InitRandom"),A.ia=1)}A.Ga=g.Id,100<A.Ga?A.Ga=100:0>A.Ga&&(A.Ga=0)}(function(z,re){if(z==null)return 0;if(re==null)return Vt(z,2,"NULL VP8Io parameter in VP8Decode().");if(!z.cb&&!Ui(z,re))return 0;if(t(z.cb),re.ac==null||re.ac(re)){re.ob&&(z.L=0);var oe=Qa[z.L];if(z.L==2?(z.yb=0,z.zb=0):(z.yb=re.v-oe>>4,z.zb=re.j-oe>>4,0>z.yb&&(z.yb=0),0>z.zb&&(z.zb=0)),z.Va=re.o+15+oe>>4,z.Hb=re.va+15+oe>>4,z.Hb>z.za&&(z.Hb=z.za),z.Va>z.Ub&&(z.Va=z.Ub),0<z.L){var be=z.ed;for(oe=0;4>oe;++oe){var le;if(z.Qa.Cb){var xe=z.Qa.Lb[oe];z.Qa.Fb||(xe+=be.Tb)}else xe=be.Tb;for(le=0;1>=le;++le){var Se=z.gd[oe][le],Le=xe;if(be.Pc&&(Le+=be.vd[0],le&&(Le+=be.od[0])),0<(Le=0>Le?0:63<Le?63:Le)){var Ce=Le;0<be.wb&&(Ce=4<be.wb?Ce>>2:Ce>>1)>9-be.wb&&(Ce=9-be.wb),1>Ce&&(Ce=1),Se.dd=Ce,Se.tc=2*Le+Ce,Se.ld=40<=Le?2:15<=Le?1:0}else Se.tc=0;Se.La=le}}}oe=0}else Vt(z,6,"Frame setup failed"),oe=z.a;if(oe=oe==0){if(oe){z.$c=0,0<z.Aa||(z.Ic=Q0);t:{oe=z.Ic,be=4*(Ce=z.za);var We=32*Ce,Me=Ce+1,ft=0<z.L?Ce*(0<z.Aa?2:1):0,Be=(z.Aa==2?2:1)*Ce;if((Se=be+832+(le=3*(16*oe+Qa[z.L])/2*We)+(xe=z.Fa!=null&&0<z.Fa.length?z.Kc.c*z.Kc.i:0))!=Se)oe=0;else{if(Se>z.Vb){if(z.Vb=0,z.Ec=a(Se),z.Fc=0,z.Ec==null){oe=Vt(z,1,"no memory during frame initialization.");break t}z.Vb=Se}Se=z.Ec,Le=z.Fc,z.Ac=Se,z.Bc=Le,Le+=be,z.Gd=c(We,vo),z.Hd=0,z.rb=c(Me+1,pi),z.sb=1,z.wa=ft?c(ft,kr):null,z.Y=0,z.D.Nb=0,z.D.wa=z.wa,z.D.Y=z.Y,0<z.Aa&&(z.D.Y+=Ce),t(!0),z.oc=Se,z.pc=Le,Le+=832,z.ya=c(Be,Lr),z.aa=0,z.D.ya=z.ya,z.D.aa=z.aa,z.Aa==2&&(z.D.aa+=Ce),z.R=16*Ce,z.B=8*Ce,Ce=(We=Qa[z.L])*z.R,We=We/2*z.B,z.sa=Se,z.ta=Le+Ce,z.qa=z.sa,z.ra=z.ta+16*oe*z.R+We,z.Ha=z.qa,z.Ia=z.ra+8*oe*z.B+We,z.$c=0,Le+=le,z.mb=xe?Se:null,z.nb=xe?Le:null,t(Le+xe<=z.Fc+z.Vb),Pn(z),o(z.Ac,z.Bc,0,be),oe=1}}if(oe){if(re.ka=0,re.y=z.sa,re.O=z.ta,re.f=z.qa,re.N=z.ra,re.ea=z.Ha,re.Vd=z.Ia,re.fa=z.R,re.Rc=z.B,re.F=null,re.J=0,!au){for(oe=-255;255>=oe;++oe)ru[255+oe]=0>oe?-oe:oe;for(oe=-1020;1020>=oe;++oe)nu[1020+oe]=-128>oe?-128:127<oe?127:oe;for(oe=-112;112>=oe;++oe)iu[112+oe]=-16>oe?-16:15<oe?15:oe;for(oe=-255;510>=oe;++oe)ou[255+oe]=0>oe?0:255<oe?255:oe;au=1}Ai=Ta,io=Qs,Mn=Xs,kt=Tn,Rt=Ea,vn=Js,tr=Ma,pr=Oa,ei=m,aa=C,Ao=Yi,Ua=Fa,Gc=U,Yc=Q,Jc=Qo,Qc=Gi,Xc=ja,Zc=Ra,Sn[0]=il,Sn[1]=Ho,Sn[2]=rl,Sn[3]=nl,Sn[4]=ol,Sn[5]=Jn,Sn[6]=Yn,Sn[7]=al,Sn[8]=bo,Sn[9]=sl,ki[0]=vi,ki[1]=Ks,ki[2]=el,ki[3]=$o,ki[4]=tl,ki[5]=Hi,ki[6]=Vo,ti[0]=wo,ti[1]=Zs,ti[2]=Wo,ti[3]=$i,ti[4]=Go,ti[5]=ll,ti[6]=Yo,oe=1}else oe=0}oe&&(oe=function(gt,mr){for(gt.M=0;gt.M<gt.Va;++gt.M){var dt,ze=gt.Jc[gt.M&gt.Xb],Ee=gt.m,rr=gt;for(dt=0;dt<rr.za;++dt){var ht=Ee,yt=rr,zt=yt.Ac,yr=yt.Bc+4*dt,zr=yt.zc,Qt=yt.ya[yt.aa+dt];if(yt.Qa.Bb?Qt.$b=ye(ht,yt.Pa.jb[0])?2+ye(ht,yt.Pa.jb[2]):ye(ht,yt.Pa.jb[1]):Qt.$b=0,yt.kc&&(Qt.Ad=ye(ht,yt.Bd)),Qt.Za=!ye(ht,145)+0,Qt.Za){var Ir=Qt.Ob,Ur=0;for(yt=0;4>yt;++yt){var gr,St=zr[0+yt];for(gr=0;4>gr;++gr){St=M0[zt[yr+gr]][St];for(var Nt=uu[ye(ht,St[0])];0<Nt;)Nt=uu[2*Nt+ye(ht,St[Nt])];St=-Nt,zt[yr+gr]=St}n(Ir,Ur,zt,yr,4),Ur+=4,zr[0+yt]=St}}else St=ye(ht,156)?ye(ht,128)?1:3:ye(ht,163)?2:0,Qt.Ob[0]=St,o(zt,yr,St,4),o(zr,0,St,4);Qt.Dd=ye(ht,142)?ye(ht,114)?ye(ht,183)?1:3:2:0}if(rr.m.Ka)return Vt(gt,7,"Premature end-of-partition0 encountered.");for(;gt.ja<gt.za;++gt.ja){if(rr=ze,ht=(Ee=gt).rb[Ee.sb-1],zt=Ee.rb[Ee.sb+Ee.ja],dt=Ee.ya[Ee.aa+Ee.ja],yr=Ee.kc?dt.Ad:0)ht.la=zt.la=0,dt.Za||(ht.Na=zt.Na=0),dt.Hc=0,dt.Gc=0,dt.ia=0;else{var Xt,It;if(ht=zt,zt=rr,yr=Ee.Pa.Xc,zr=Ee.ya[Ee.aa+Ee.ja],Qt=Ee.pb[zr.$b],yt=zr.ad,Ir=0,Ur=Ee.rb[Ee.sb-1],St=gr=0,o(yt,Ir,0,384),zr.Za)var Sr=0,_n=yr[3];else{Nt=a(16);var nr=ht.Na+Ur.Na;if(nr=la(zt,yr[1],nr,Qt.Eb,0,Nt,0),ht.Na=Ur.Na=(0<nr)+0,1<nr)Ai(Nt,0,yt,Ir);else{var Vr=Nt[0]+3>>3;for(Nt=0;256>Nt;Nt+=16)yt[Ir+Nt]=Vr}Sr=1,_n=yr[0]}var Mt=15&ht.la,vr=15&Ur.la;for(Nt=0;4>Nt;++Nt){var rn=1&vr;for(Vr=It=0;4>Vr;++Vr)Mt=Mt>>1|(rn=(nr=la(zt,_n,nr=rn+(1&Mt),Qt.Sc,Sr,yt,Ir))>Sr)<<7,It=It<<2|(3<nr?3:1<nr?2:yt[Ir+0]!=0),Ir+=16;Mt>>=4,vr=vr>>1|rn<<7,gr=(gr<<8|It)>>>0}for(_n=Mt,Sr=vr>>4,Xt=0;4>Xt;Xt+=2){for(It=0,Mt=ht.la>>4+Xt,vr=Ur.la>>4+Xt,Nt=0;2>Nt;++Nt){for(rn=1&vr,Vr=0;2>Vr;++Vr)nr=rn+(1&Mt),Mt=Mt>>1|(rn=0<(nr=la(zt,yr[2],nr,Qt.Qc,0,yt,Ir)))<<3,It=It<<2|(3<nr?3:1<nr?2:yt[Ir+0]!=0),Ir+=16;Mt>>=2,vr=vr>>1|rn<<5}St|=It<<4*Xt,_n|=Mt<<4<<Xt,Sr|=(240&vr)<<Xt}ht.la=_n,Ur.la=Sr,zr.Hc=gr,zr.Gc=St,zr.ia=43690&St?0:Qt.ia,yr=!(gr|St)}if(0<Ee.L&&(Ee.wa[Ee.Y+Ee.ja]=Ee.gd[dt.$b][dt.Za],Ee.wa[Ee.Y+Ee.ja].La|=!yr),rr.Ka)return Vt(gt,7,"Premature end-of-file encountered.")}if(Pn(gt),Ee=mr,rr=1,dt=(ze=gt).D,ht=0<ze.L&&ze.M>=ze.zb&&ze.M<=ze.Va,ze.Aa==0)t:{if(dt.M=ze.M,dt.uc=ht,gn(ze,dt),rr=1,dt=(It=ze.D).Nb,ht=(St=Qa[ze.L])*ze.R,zt=St/2*ze.B,Nt=16*dt*ze.R,Vr=8*dt*ze.B,yr=ze.sa,zr=ze.ta-ht+Nt,Qt=ze.qa,yt=ze.ra-zt+Vr,Ir=ze.Ha,Ur=ze.Ia-zt+Vr,vr=(Mt=It.M)==0,gr=Mt>=ze.Va-1,ze.Aa==2&&gn(ze,It),It.uc)for(rn=(nr=ze).D.M,t(nr.D.uc),It=nr.yb;It<nr.Hb;++It){Sr=It,_n=rn;var qr=(nn=(_r=nr).D).Nb;Xt=_r.R;var nn=nn.wa[nn.Y+Sr],on=_r.sa,Wr=_r.ta+16*qr*Xt+16*Sr,an=nn.dd,Dt=nn.tc;if(Dt!=0)if(t(3<=Dt),_r.L==1)0<Sr&&Qc(on,Wr,Xt,Dt+4),nn.La&&Zc(on,Wr,Xt,Dt),0<_n&&Jc(on,Wr,Xt,Dt+4),nn.La&&Xc(on,Wr,Xt,Dt);else{var sn=_r.B,Cn=_r.qa,oo=_r.ra+8*qr*sn+8*Sr,ri=_r.Ha,_r=_r.Ia+8*qr*sn+8*Sr;qr=nn.ld,0<Sr&&(pr(on,Wr,Xt,Dt+4,an,qr),aa(Cn,oo,ri,_r,sn,Dt+4,an,qr)),nn.La&&(Ua(on,Wr,Xt,Dt,an,qr),Yc(Cn,oo,ri,_r,sn,Dt,an,qr)),0<_n&&(tr(on,Wr,Xt,Dt+4,an,qr),ei(Cn,oo,ri,_r,sn,Dt+4,an,qr)),nn.La&&(Ao(on,Wr,Xt,Dt,an,qr),Gc(Cn,oo,ri,_r,sn,Dt,an,qr))}}if(ze.ia&&alert("todo:DitherRow"),Ee.put!=null){if(It=16*Mt,Mt=16*(Mt+1),vr?(Ee.y=ze.sa,Ee.O=ze.ta+Nt,Ee.f=ze.qa,Ee.N=ze.ra+Vr,Ee.ea=ze.Ha,Ee.W=ze.Ia+Vr):(It-=St,Ee.y=yr,Ee.O=zr,Ee.f=Qt,Ee.N=yt,Ee.ea=Ir,Ee.W=Ur),gr||(Mt-=St),Mt>Ee.o&&(Mt=Ee.o),Ee.F=null,Ee.J=null,ze.Fa!=null&&0<ze.Fa.length&&It<Mt&&(Ee.J=ur(ze,Ee,It,Mt-It),Ee.F=ze.mb,Ee.F==null&&Ee.F.length==0)){rr=Vt(ze,3,"Could not decode alpha data.");break t}It<Ee.j&&(St=Ee.j-It,It=Ee.j,t(!(1&St)),Ee.O+=ze.R*St,Ee.N+=ze.B*(St>>1),Ee.W+=ze.B*(St>>1),Ee.F!=null&&(Ee.J+=Ee.width*St)),It<Mt&&(Ee.O+=Ee.v,Ee.N+=Ee.v>>1,Ee.W+=Ee.v>>1,Ee.F!=null&&(Ee.J+=Ee.v),Ee.ka=It-Ee.j,Ee.U=Ee.va-Ee.v,Ee.T=Mt-It,rr=Ee.put(Ee))}dt+1!=ze.Ic||gr||(n(ze.sa,ze.ta-ht,yr,zr+16*ze.R,ht),n(ze.qa,ze.ra-zt,Qt,yt+8*ze.B,zt),n(ze.Ha,ze.Ia-zt,Ir,Ur+8*ze.B,zt))}if(!rr)return Vt(gt,6,"Output aborted.")}return 1}(z,re)),re.bc!=null&&re.bc(re),oe&=1}return oe?(z.cb=0,oe):0})(s,b)||(u=s.a)}}else u=s.a}u==0&&I.Oa!=null&&I.Oa.fd&&(u=ea(I.ba))}I=u}L=I!=0?null:11>L?R.f.RGBA.eb:R.f.kb.y}else L=null;return L};var bu=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(D,X){for(var N="",O=0;O<4;O++)N+=String.fromCharCode(D[X++]);return N}function p(D,X){return D[X+0]|D[X+1]<<8}function x(D,X){return(D[X+0]|D[X+1]<<8|D[X+2]<<16)>>>0}function S(D,X){return(D[X+0]|D[X+1]<<8|D[X+2]<<16|D[X+3]<<24)>>>0}new h;var d=[0],w=[0],_=[],k=new h,y=e,j=function(D,X){var N={},O=0,J=!1,Y=0,ae=0;if(N.frames=[],!function(P,H){for(var G=0;G<4;G++)if(P[H+G]!="RIFF".charCodeAt(G))return!0;return!1}(D,X)){for(S(D,X+=4),X+=8;X<D.length;){var he=f(D,X),fe=S(D,X+=4);X+=4;var se=fe+(1&fe);switch(he){case"VP8 ":case"VP8L":N.frames[O]===void 0&&(N.frames[O]={}),(_e=N.frames[O]).src_off=J?ae:X-8,_e.src_size=Y+fe+8,O++,J&&(J=!1,Y=0,ae=0);break;case"VP8X":(_e=N.header={}).feature_flags=D[X];var me=X+4;_e.canvas_width=1+x(D,me),me+=3,_e.canvas_height=1+x(D,me),me+=3;break;case"ALPH":J=!0,Y=se+8,ae=X-8;break;case"ANIM":(_e=N.header).bgcolor=S(D,X),me=X+4,_e.loop_count=p(D,me),me+=2;break;case"ANMF":var Ie,_e;(_e=N.frames[O]={}).offset_x=2*x(D,X),X+=3,_e.offset_y=2*x(D,X),X+=3,_e.width=1+x(D,X),X+=3,_e.height=1+x(D,X),X+=3,_e.duration=x(D,X),X+=3,Ie=D[X++],_e.dispose=1&Ie,_e.blend=Ie>>1&1}he!="ANMF"&&(X+=se)}return N}}(y,0);j.response=y,j.rgbaoutput=!0,j.dataurl=!1;var T=j.header?j.header:null,E=j.frames?j.frames:null;if(T){T.loop_counter=T.loop_count,d=[T.canvas_height],w=[T.canvas_width];for(var V=0;V<E.length&&E[V].blend!=0;V++);}var Z=E[0],te=k.WebPDecodeRGBA(y,Z.src_off,Z.src_size,w,d);Z.rgba=te,Z.imgwidth=w[0],Z.imgheight=d[0];for(var W=0;W<w[0]*d[0]*4;W++)_[W]=te[W];return this.width=w,this.height=d,this.data=_,this}(function(e){var t,r,n,o,a,c,l,h,f,p=function(P){return P=P||{},this.isStrokeTransparent=P.isStrokeTransparent||!1,this.strokeOpacity=P.strokeOpacity||1,this.strokeStyle=P.strokeStyle||"#000000",this.fillStyle=P.fillStyle||"#000000",this.isFillTransparent=P.isFillTransparent||!1,this.fillOpacity=P.fillOpacity||1,this.font=P.font||"10px sans-serif",this.textBaseline=P.textBaseline||"alphabetic",this.textAlign=P.textAlign||"left",this.lineWidth=P.lineWidth||1,this.lineJoin=P.lineJoin||"miter",this.lineCap=P.lineCap||"butt",this.path=P.path||[],this.transform=P.transform!==void 0?P.transform.clone():new h,this.globalCompositeOperation=P.globalCompositeOperation||"normal",this.globalAlpha=P.globalAlpha||1,this.clip_path=P.clip_path||[],this.currentPoint=P.currentPoint||new c,this.miterLimit=P.miterLimit||10,this.lastPoint=P.lastPoint||new c,this.lineDashOffset=P.lineDashOffset||0,this.lineDash=P.lineDash||[],this.margin=P.margin||[0,0,0,0],this.prevPageLastElemOffset=P.prevPageLastElemOffset||0,this.ignoreClearRect=typeof P.ignoreClearRect!="boolean"||P.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new x(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,a=this.internal.getVerticalCoordinate,c=this.internal.Point,l=this.internal.Rectangle,h=this.internal.Matrix,f=new p}]);var x=function(P){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var H=P;Object.defineProperty(this,"pdf",{get:function(){return H}});var G=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return G},set:function(ve){G=!!ve}});var K=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return K},set:function(ve){K=!!ve}});var ne=0;Object.defineProperty(this,"posX",{get:function(){return ne},set:function(ve){isNaN(ve)||(ne=ve)}});var ce=0;Object.defineProperty(this,"posY",{get:function(){return ce},set:function(ve){isNaN(ve)||(ce=ve)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(ve){var $;typeof ve=="number"?$=[ve,ve,ve,ve]:(($=new Array(4))[0]=ve[0],$[1]=ve.length>=2?ve[1]:$[0],$[2]=ve.length>=3?ve[2]:$[0],$[3]=ve.length>=4?ve[3]:$[1]),f.margin=$}});var pe=!1;Object.defineProperty(this,"autoPaging",{get:function(){return pe},set:function(ve){pe=ve}});var de=0;Object.defineProperty(this,"lastBreak",{get:function(){return de},set:function(ve){de=ve}});var ye=[];Object.defineProperty(this,"pageBreaks",{get:function(){return ye},set:function(ve){ye=ve}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(ve){ve instanceof p&&(f=ve)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(ve){f.path=ve}});var Ne=[];Object.defineProperty(this,"ctxStack",{get:function(){return Ne},set:function(ve){Ne=ve}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(ve){var $;$=S(ve),this.ctx.fillStyle=$.style,this.ctx.isFillTransparent=$.a===0,this.ctx.fillOpacity=$.a,this.pdf.setFillColor($.r,$.g,$.b,{a:$.a}),this.pdf.setTextColor($.r,$.g,$.b,{a:$.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(ve){var $=S(ve);this.ctx.strokeStyle=$.style,this.ctx.isStrokeTransparent=$.a===0,this.ctx.strokeOpacity=$.a,$.a===0?this.pdf.setDrawColor(255,255,255):($.a,this.pdf.setDrawColor($.r,$.g,$.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(ve){["butt","round","square"].indexOf(ve)!==-1&&(this.ctx.lineCap=ve,this.pdf.setLineCap(ve))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(ve){isNaN(ve)||(this.ctx.lineWidth=ve,this.pdf.setLineWidth(ve))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(ve){["bevel","round","miter"].indexOf(ve)!==-1&&(this.ctx.lineJoin=ve,this.pdf.setLineJoin(ve))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(ve){isNaN(ve)||(this.ctx.miterLimit=ve,this.pdf.setMiterLimit(ve))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(ve){this.ctx.textBaseline=ve}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(ve){["right","end","center","left","start"].indexOf(ve)!==-1&&(this.ctx.textAlign=ve)}});var je=null,Te=null;Object.defineProperty(this,"fontFaces",{get:function(){return Te},set:function(ve){je=null,Te=ve}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(ve){var $;if(this.ctx.font=ve,($=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ve))!==null){var pt=$[1];$[2];var ot=$[3],Ye=$[4];$[5];var ke=$[6],Ve=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ye)[2];Ye=Math.floor(Ve==="px"?parseFloat(Ye)*this.pdf.internal.scaleFactor:Ve==="em"?parseFloat(Ye)*this.pdf.getFontSize():parseFloat(Ye)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Ye);var Re=function(Xe){var He,Tt,bt=[],De=Xe.trim();if(De==="")return Jl;if(De in Q1)return[Q1[De]];for(;De!=="";){switch(Tt=null,He=(De=Z1(De)).charAt(0)){case'"':case"'":Tt=cv(De.substring(1),He);break;default:Tt=uv(De)}if(Tt===null||(bt.push(Tt[0]),(De=Z1(Tt[1]))!==""&&De.charAt(0)!==","))return Jl;De=De.replace(/^,/,"")}return bt}(ke);if(this.fontFaces){var Ke=function(Xe,He){if(je===null){var Tt=function(bt){var De=[];return Object.keys(bt).forEach(function(st){bt[st].forEach(function(xt){var Qe=null;switch(xt){case"bold":Qe={family:st,weight:"bold"};break;case"italic":Qe={family:st,style:"italic"};break;case"bolditalic":Qe={family:st,weight:"bold",style:"italic"};break;case"":case"normal":Qe={family:st}}Qe!==null&&(Qe.ref={name:st,style:xt},De.push(Qe))})}),De}(Xe.getFontList());je=function(bt){for(var De={},st=0;st<bt.length;++st){var xt=Yl(bt[st]),Qe=xt.family,mt=xt.stretch,nt=xt.style,Ht=xt.weight;De[Qe]=De[Qe]||{},De[Qe][mt]=De[Qe][mt]||{},De[Qe][mt][nt]=De[Qe][mt][nt]||{},De[Qe][mt][nt][Ht]=xt}return De}(Tt.concat(He))}return je}(this.pdf,this.fontFaces),Ue=Re.map(function(Xe){return{family:Xe,stretch:"normal",weight:ot,style:pt}}),vt=function(Xe,He,Tt){for(var bt=(Tt=Tt||{}).defaultFontFamily||"times",De=Object.assign({},lv,Tt.genericFontFamilies||{}),st=null,xt=null,Qe=0;Qe<He.length;++Qe)if(De[(st=Yl(He[Qe])).family]&&(st.family=De[st.family]),Xe.hasOwnProperty(st.family)){xt=Xe[st.family];break}if(!(xt=xt||Xe[bt]))throw new Error("Could not find a font-family for the rule '"+X1(st)+"' and default family '"+bt+"'.");if(xt=function(mt,nt){if(nt[mt])return nt[mt];var Ht=xc[mt],Kt=Ht<=xc.normal?-1:1,Lt=J1(nt,m0,Ht,Kt);if(!Lt)throw new Error("Could not find a matching font-stretch value for "+mt);return Lt}(st.stretch,xt),xt=function(mt,nt){if(nt[mt])return nt[mt];for(var Ht=p0[mt],Kt=0;Kt<Ht.length;++Kt)if(nt[Ht[Kt]])return nt[Ht[Kt]];throw new Error("Could not find a matching font-style for "+mt)}(st.style,xt),!(xt=function(mt,nt){if(nt[mt])return nt[mt];if(mt===400&&nt[500])return nt[500];if(mt===500&&nt[400])return nt[400];var Ht=sv[mt],Kt=J1(nt,g0,Ht,mt<400?-1:1);if(!Kt)throw new Error("Could not find a matching font-weight for value "+mt);return Kt}(st.weight,xt)))throw new Error("Failed to resolve a font for the rule '"+X1(st)+"'.");return xt}(Ke,Ue);this.pdf.setFont(vt.ref.name,vt.ref.style)}else{var et="";(ot==="bold"||parseInt(ot,10)>=700||pt==="bold")&&(et="bold"),pt==="italic"&&(et+="italic"),et.length===0&&(et="normal");for(var rt="",_t={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},at=0;at<Re.length;at++){if(this.pdf.internal.getFont(Re[at],et,{noFallback:!0,disableWarning:!0})!==void 0){rt=Re[at];break}if(et==="bolditalic"&&this.pdf.internal.getFont(Re[at],"bold",{noFallback:!0,disableWarning:!0})!==void 0)rt=Re[at],et="bold";else if(this.pdf.internal.getFont(Re[at],"normal",{noFallback:!0,disableWarning:!0})!==void 0){rt=Re[at],et="normal";break}}if(rt===""){for(var qe=0;qe<Re.length;qe++)if(_t[Re[qe]]){rt=_t[Re[qe]];break}}rt=rt===""?"Times":rt,this.pdf.setFont(rt,et)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(ve){this.ctx.globalCompositeOperation=ve}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(ve){this.ctx.globalAlpha=ve}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(ve){this.ctx.lineDashOffset=ve,_e.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(ve){this.ctx.lineDash=ve,_e.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(ve){this.ctx.ignoreClearRect=!!ve}})};x.prototype.setLineDash=function(P){this.lineDash=P},x.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},x.prototype.fill=function(){E.call(this,"fill",!1)},x.prototype.stroke=function(){E.call(this,"stroke",!1)},x.prototype.beginPath=function(){this.path=[{type:"begin"}]},x.prototype.moveTo=function(P,H){if(isNaN(P)||isNaN(H))throw Ot.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var G=this.ctx.transform.applyToPoint(new c(P,H));this.path.push({type:"mt",x:G.x,y:G.y}),this.ctx.lastPoint=new c(P,H)},x.prototype.closePath=function(){var P=new c(0,0),H=0;for(H=this.path.length-1;H!==-1;H--)if(this.path[H].type==="begin"&&Pt(this.path[H+1])==="object"&&typeof this.path[H+1].x=="number"){P=new c(this.path[H+1].x,this.path[H+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new c(P.x,P.y)},x.prototype.lineTo=function(P,H){if(isNaN(P)||isNaN(H))throw Ot.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var G=this.ctx.transform.applyToPoint(new c(P,H));this.path.push({type:"lt",x:G.x,y:G.y}),this.ctx.lastPoint=new c(G.x,G.y)},x.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),E.call(this,null,!0)},x.prototype.quadraticCurveTo=function(P,H,G,K){if(isNaN(G)||isNaN(K)||isNaN(P)||isNaN(H))throw Ot.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var ne=this.ctx.transform.applyToPoint(new c(G,K)),ce=this.ctx.transform.applyToPoint(new c(P,H));this.path.push({type:"qct",x1:ce.x,y1:ce.y,x:ne.x,y:ne.y}),this.ctx.lastPoint=new c(ne.x,ne.y)},x.prototype.bezierCurveTo=function(P,H,G,K,ne,ce){if(isNaN(ne)||isNaN(ce)||isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K))throw Ot.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var pe=this.ctx.transform.applyToPoint(new c(ne,ce)),de=this.ctx.transform.applyToPoint(new c(P,H)),ye=this.ctx.transform.applyToPoint(new c(G,K));this.path.push({type:"bct",x1:de.x,y1:de.y,x2:ye.x,y2:ye.y,x:pe.x,y:pe.y}),this.ctx.lastPoint=new c(pe.x,pe.y)},x.prototype.arc=function(P,H,G,K,ne,ce){if(isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K)||isNaN(ne))throw Ot.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ce=!!ce,!this.ctx.transform.isIdentity){var pe=this.ctx.transform.applyToPoint(new c(P,H));P=pe.x,H=pe.y;var de=this.ctx.transform.applyToPoint(new c(0,G)),ye=this.ctx.transform.applyToPoint(new c(0,0));G=Math.sqrt(Math.pow(de.x-ye.x,2)+Math.pow(de.y-ye.y,2))}Math.abs(ne-K)>=2*Math.PI&&(K=0,ne=2*Math.PI),this.path.push({type:"arc",x:P,y:H,radius:G,startAngle:K,endAngle:ne,counterclockwise:ce})},x.prototype.arcTo=function(P,H,G,K,ne){throw new Error("arcTo not implemented.")},x.prototype.rect=function(P,H,G,K){if(isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K))throw Ot.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(P,H),this.lineTo(P+G,H),this.lineTo(P+G,H+K),this.lineTo(P,H+K),this.lineTo(P,H),this.lineTo(P+G,H),this.lineTo(P,H)},x.prototype.fillRect=function(P,H,G,K){if(isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K))throw Ot.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!d.call(this)){var ne={};this.lineCap!=="butt"&&(ne.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(ne.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(P,H,G,K),this.fill(),ne.hasOwnProperty("lineCap")&&(this.lineCap=ne.lineCap),ne.hasOwnProperty("lineJoin")&&(this.lineJoin=ne.lineJoin)}},x.prototype.strokeRect=function(P,H,G,K){if(isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K))throw Ot.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");w.call(this)||(this.beginPath(),this.rect(P,H,G,K),this.stroke())},x.prototype.clearRect=function(P,H,G,K){if(isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K))throw Ot.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(P,H,G,K))},x.prototype.save=function(P){P=typeof P!="boolean"||P;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,G=0;G<this.pdf.internal.getNumberOfPages();G++)this.pdf.setPage(G+1),this.pdf.internal.out("q");if(this.pdf.setPage(H),P){this.ctx.fontSize=this.pdf.internal.getFontSize();var K=new p(this.ctx);this.ctxStack.push(this.ctx),this.ctx=K}},x.prototype.restore=function(P){P=typeof P!="boolean"||P;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,G=0;G<this.pdf.internal.getNumberOfPages();G++)this.pdf.setPage(G+1),this.pdf.internal.out("Q");this.pdf.setPage(H),P&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},x.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var S=function(P){var H,G,K,ne;if(P.isCanvasGradient===!0&&(P=P.getColor()),!P)return{r:0,g:0,b:0,a:0,style:P};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(P))H=0,G=0,K=0,ne=0;else{var ce=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(P);if(ce!==null)H=parseInt(ce[1]),G=parseInt(ce[2]),K=parseInt(ce[3]),ne=1;else if((ce=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(P))!==null)H=parseInt(ce[1]),G=parseInt(ce[2]),K=parseInt(ce[3]),ne=parseFloat(ce[4]);else{if(ne=1,typeof P=="string"&&P.charAt(0)!=="#"){var pe=new s0(P);P=pe.ok?pe.toHex():"#000000"}P.length===4?(H=P.substring(1,2),H+=H,G=P.substring(2,3),G+=G,K=P.substring(3,4),K+=K):(H=P.substring(1,3),G=P.substring(3,5),K=P.substring(5,7)),H=parseInt(H,16),G=parseInt(G,16),K=parseInt(K,16)}}return{r:H,g:G,b:K,a:ne,style:P}},d=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},w=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};x.prototype.fillText=function(P,H,G,K){if(isNaN(H)||isNaN(G)||typeof P!="string")throw Ot.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(K=isNaN(K)?void 0:K,!d.call(this)){var ne=se(this.ctx.transform.rotation),ce=this.ctx.transform.scaleX;O.call(this,{text:P,x:H,y:G,scale:ce,angle:ne,align:this.textAlign,maxWidth:K})}},x.prototype.strokeText=function(P,H,G,K){if(isNaN(H)||isNaN(G)||typeof P!="string")throw Ot.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!w.call(this)){K=isNaN(K)?void 0:K;var ne=se(this.ctx.transform.rotation),ce=this.ctx.transform.scaleX;O.call(this,{text:P,x:H,y:G,scale:ce,renderingMode:"stroke",angle:ne,align:this.textAlign,maxWidth:K})}},x.prototype.measureText=function(P){if(typeof P!="string")throw Ot.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var H=this.pdf,G=this.pdf.internal.scaleFactor,K=H.internal.getFontSize(),ne=H.getStringUnitWidth(P)*K/H.internal.scaleFactor;return new function(ce){var pe=(ce=ce||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return pe}}),this}({width:ne*=Math.round(96*G/72*1e4)/1e4})},x.prototype.scale=function(P,H){if(isNaN(P)||isNaN(H))throw Ot.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var G=new h(P,0,0,H,0,0);this.ctx.transform=this.ctx.transform.multiply(G)},x.prototype.rotate=function(P){if(isNaN(P))throw Ot.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var H=new h(Math.cos(P),Math.sin(P),-Math.sin(P),Math.cos(P),0,0);this.ctx.transform=this.ctx.transform.multiply(H)},x.prototype.translate=function(P,H){if(isNaN(P)||isNaN(H))throw Ot.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var G=new h(1,0,0,1,P,H);this.ctx.transform=this.ctx.transform.multiply(G)},x.prototype.transform=function(P,H,G,K,ne,ce){if(isNaN(P)||isNaN(H)||isNaN(G)||isNaN(K)||isNaN(ne)||isNaN(ce))throw Ot.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var pe=new h(P,H,G,K,ne,ce);this.ctx.transform=this.ctx.transform.multiply(pe)},x.prototype.setTransform=function(P,H,G,K,ne,ce){P=isNaN(P)?1:P,H=isNaN(H)?0:H,G=isNaN(G)?0:G,K=isNaN(K)?1:K,ne=isNaN(ne)?0:ne,ce=isNaN(ce)?0:ce,this.ctx.transform=new h(P,H,G,K,ne,ce)};var _=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};x.prototype.drawImage=function(P,H,G,K,ne,ce,pe,de,ye){var Ne=this.pdf.getImageProperties(P),je=1,Te=1,ve=1,$=1;K!==void 0&&de!==void 0&&(ve=de/K,$=ye/ne,je=Ne.width/K*de/K,Te=Ne.height/ne*ye/ne),ce===void 0&&(ce=H,pe=G,H=0,G=0),K!==void 0&&de===void 0&&(de=K,ye=ne),K===void 0&&de===void 0&&(de=Ne.width,ye=Ne.height);for(var pt,ot=this.ctx.transform.decompose(),Ye=se(ot.rotate.shx),ke=new h,Ve=(ke=(ke=(ke=ke.multiply(ot.translate)).multiply(ot.skew)).multiply(ot.scale)).applyToRectangle(new l(ce-H*ve,pe-G*$,K*je,ne*Te)),Re=k.call(this,Ve),Ke=[],Ue=0;Ue<Re.length;Ue+=1)Ke.indexOf(Re[Ue])===-1&&Ke.push(Re[Ue]);if(T(Ke),this.autoPaging)for(var vt=Ke[0],et=Ke[Ke.length-1],rt=vt;rt<et+1;rt++){this.pdf.setPage(rt);var _t=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],at=rt===1?this.posY+this.margin[0]:this.margin[0],qe=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Xe=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],He=rt===1?0:qe+(rt-2)*Xe;if(this.ctx.clip_path.length!==0){var Tt=this.path;pt=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=j(pt,this.posX+this.margin[3],-He+at+this.ctx.prevPageLastElemOffset),V.call(this,"fill",!0),this.path=Tt}var bt=JSON.parse(JSON.stringify(Ve));bt=j([bt],this.posX+this.margin[3],-He+at+this.ctx.prevPageLastElemOffset)[0];var De=(rt>vt||rt<et)&&_.call(this);De&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],_t,Xe,null).clip().discardPath()),this.pdf.addImage(P,"JPEG",bt.x,bt.y,bt.w,bt.h,null,null,Ye),De&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(P,"JPEG",Ve.x,Ve.y,Ve.w,Ve.h,null,null,Ye)};var k=function(P,H,G){var K=[];H=H||this.pdf.internal.pageSize.width,G=G||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var ne=this.posY+this.ctx.prevPageLastElemOffset;switch(P.type){default:case"mt":case"lt":K.push(Math.floor((P.y+ne)/G)+1);break;case"arc":K.push(Math.floor((P.y+ne-P.radius)/G)+1),K.push(Math.floor((P.y+ne+P.radius)/G)+1);break;case"qct":var ce=me(this.ctx.lastPoint.x,this.ctx.lastPoint.y,P.x1,P.y1,P.x,P.y);K.push(Math.floor((ce.y+ne)/G)+1),K.push(Math.floor((ce.y+ce.h+ne)/G)+1);break;case"bct":var pe=Ie(this.ctx.lastPoint.x,this.ctx.lastPoint.y,P.x1,P.y1,P.x2,P.y2,P.x,P.y);K.push(Math.floor((pe.y+ne)/G)+1),K.push(Math.floor((pe.y+pe.h+ne)/G)+1);break;case"rect":K.push(Math.floor((P.y+ne)/G)+1),K.push(Math.floor((P.y+P.h+ne)/G)+1)}for(var de=0;de<K.length;de+=1)for(;this.pdf.internal.getNumberOfPages()<K[de];)y.call(this);return K},y=function(){var P=this.fillStyle,H=this.strokeStyle,G=this.font,K=this.lineCap,ne=this.lineWidth,ce=this.lineJoin;this.pdf.addPage(),this.fillStyle=P,this.strokeStyle=H,this.font=G,this.lineCap=K,this.lineWidth=ne,this.lineJoin=ce},j=function(P,H,G){for(var K=0;K<P.length;K++)switch(P[K].type){case"bct":P[K].x2+=H,P[K].y2+=G;case"qct":P[K].x1+=H,P[K].y1+=G;default:P[K].x+=H,P[K].y+=G}return P},T=function(P){return P.sort(function(H,G){return H-G})},E=function(P,H){for(var G,K,ne=this.fillStyle,ce=this.strokeStyle,pe=this.lineCap,de=this.lineWidth,ye=Math.abs(de*this.ctx.transform.scaleX),Ne=this.lineJoin,je=JSON.parse(JSON.stringify(this.path)),Te=JSON.parse(JSON.stringify(this.path)),ve=[],$=0;$<Te.length;$++)if(Te[$].x!==void 0)for(var pt=k.call(this,Te[$]),ot=0;ot<pt.length;ot+=1)ve.indexOf(pt[ot])===-1&&ve.push(pt[ot]);for(var Ye=0;Ye<ve.length;Ye++)for(;this.pdf.internal.getNumberOfPages()<ve[Ye];)y.call(this);if(T(ve),this.autoPaging)for(var ke=ve[0],Ve=ve[ve.length-1],Re=ke;Re<Ve+1;Re++){this.pdf.setPage(Re),this.fillStyle=ne,this.strokeStyle=ce,this.lineCap=pe,this.lineWidth=ye,this.lineJoin=Ne;var Ke=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Ue=Re===1?this.posY+this.margin[0]:this.margin[0],vt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],et=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],rt=Re===1?0:vt+(Re-2)*et;if(this.ctx.clip_path.length!==0){var _t=this.path;G=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=j(G,this.posX+this.margin[3],-rt+Ue+this.ctx.prevPageLastElemOffset),V.call(this,P,!0),this.path=_t}if(K=JSON.parse(JSON.stringify(je)),this.path=j(K,this.posX+this.margin[3],-rt+Ue+this.ctx.prevPageLastElemOffset),H===!1||Re===0){var at=(Re>ke||Re<Ve)&&_.call(this);at&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Ke,et,null).clip().discardPath()),V.call(this,P,H),at&&this.pdf.restoreGraphicsState()}this.lineWidth=de}else this.lineWidth=ye,V.call(this,P,H),this.lineWidth=de;this.path=je},V=function(P,H){if((P!=="stroke"||H||!w.call(this))&&(P==="stroke"||H||!d.call(this))){for(var G,K,ne=[],ce=this.path,pe=0;pe<ce.length;pe++){var de=ce[pe];switch(de.type){case"begin":ne.push({begin:!0});break;case"close":ne.push({close:!0});break;case"mt":ne.push({start:de,deltas:[],abs:[]});break;case"lt":var ye=ne.length;if(ce[pe-1]&&!isNaN(ce[pe-1].x)&&(G=[de.x-ce[pe-1].x,de.y-ce[pe-1].y],ye>0)){for(;ye>=0;ye--)if(ne[ye-1].close!==!0&&ne[ye-1].begin!==!0){ne[ye-1].deltas.push(G),ne[ye-1].abs.push(de);break}}break;case"bct":G=[de.x1-ce[pe-1].x,de.y1-ce[pe-1].y,de.x2-ce[pe-1].x,de.y2-ce[pe-1].y,de.x-ce[pe-1].x,de.y-ce[pe-1].y],ne[ne.length-1].deltas.push(G);break;case"qct":var Ne=ce[pe-1].x+2/3*(de.x1-ce[pe-1].x),je=ce[pe-1].y+2/3*(de.y1-ce[pe-1].y),Te=de.x+2/3*(de.x1-de.x),ve=de.y+2/3*(de.y1-de.y),$=de.x,pt=de.y;G=[Ne-ce[pe-1].x,je-ce[pe-1].y,Te-ce[pe-1].x,ve-ce[pe-1].y,$-ce[pe-1].x,pt-ce[pe-1].y],ne[ne.length-1].deltas.push(G);break;case"arc":ne.push({deltas:[],abs:[],arc:!0}),Array.isArray(ne[ne.length-1].abs)&&ne[ne.length-1].abs.push(de)}}K=H?null:P==="stroke"?"stroke":"fill";for(var ot=!1,Ye=0;Ye<ne.length;Ye++)if(ne[Ye].arc)for(var ke=ne[Ye].abs,Ve=0;Ve<ke.length;Ve++){var Re=ke[Ve];Re.type==="arc"?W.call(this,Re.x,Re.y,Re.radius,Re.startAngle,Re.endAngle,Re.counterclockwise,void 0,H,!ot):J.call(this,Re.x,Re.y),ot=!0}else if(ne[Ye].close===!0)this.pdf.internal.out("h"),ot=!1;else if(ne[Ye].begin!==!0){var Ke=ne[Ye].start.x,Ue=ne[Ye].start.y;Y.call(this,ne[Ye].deltas,Ke,Ue),ot=!0}K&&D.call(this,K),H&&X.call(this)}},Z=function(P){var H=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,G=H*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return P-G;case"top":return P+H-G;case"hanging":return P+H-2*G;case"middle":return P+H/2-G;default:return P}},te=function(P){return P+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};x.prototype.createLinearGradient=function(){var P=function(){};return P.colorStops=[],P.addColorStop=function(H,G){this.colorStops.push([H,G])},P.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},P.isCanvasGradient=!0,P},x.prototype.createPattern=function(){return this.createLinearGradient()},x.prototype.createRadialGradient=function(){return this.createLinearGradient()};var W=function(P,H,G,K,ne,ce,pe,de,ye){for(var Ne=he.call(this,G,K,ne,ce),je=0;je<Ne.length;je++){var Te=Ne[je];je===0&&(ye?N.call(this,Te.x1+P,Te.y1+H):J.call(this,Te.x1+P,Te.y1+H)),ae.call(this,P,H,Te.x2,Te.y2,Te.x3,Te.y3,Te.x4,Te.y4)}de?X.call(this):D.call(this,pe)},D=function(P){switch(P){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},X=function(){this.pdf.clip(),this.pdf.discardPath()},N=function(P,H){this.pdf.internal.out(r(P)+" "+n(H)+" m")},O=function(P){var H;switch(P.align){case"right":case"end":H="right";break;case"center":H="center";break;default:H="left"}var G=this.pdf.getTextDimensions(P.text),K=Z.call(this,P.y),ne=te.call(this,K)-G.h,ce=this.ctx.transform.applyToPoint(new c(P.x,K)),pe=this.ctx.transform.decompose(),de=new h;de=(de=(de=de.multiply(pe.translate)).multiply(pe.skew)).multiply(pe.scale);for(var ye,Ne,je,Te=this.ctx.transform.applyToRectangle(new l(P.x,K,G.w,G.h)),ve=de.applyToRectangle(new l(P.x,ne,G.w,G.h)),$=k.call(this,ve),pt=[],ot=0;ot<$.length;ot+=1)pt.indexOf($[ot])===-1&&pt.push($[ot]);if(T(pt),this.autoPaging)for(var Ye=pt[0],ke=pt[pt.length-1],Ve=Ye;Ve<ke+1;Ve++){this.pdf.setPage(Ve);var Re=Ve===1?this.posY+this.margin[0]:this.margin[0],Ke=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Ue=this.pdf.internal.pageSize.height-this.margin[2],vt=Ue-this.margin[0],et=this.pdf.internal.pageSize.width-this.margin[1],rt=et-this.margin[3],_t=Ve===1?0:Ke+(Ve-2)*vt;if(this.ctx.clip_path.length!==0){var at=this.path;ye=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=j(ye,this.posX+this.margin[3],-1*_t+Re),V.call(this,"fill",!0),this.path=at}var qe=j([JSON.parse(JSON.stringify(ve))],this.posX+this.margin[3],-_t+Re+this.ctx.prevPageLastElemOffset)[0];P.scale>=.01&&(Ne=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ne*P.scale),je=this.lineWidth,this.lineWidth=je*P.scale);var Xe=this.autoPaging!=="text";if(Xe||qe.y+qe.h<=Ue){if(Xe||qe.y>=Re&&qe.x<=et){var He=Xe?P.text:this.pdf.splitTextToSize(P.text,P.maxWidth||et-qe.x)[0],Tt=j([JSON.parse(JSON.stringify(Te))],this.posX+this.margin[3],-_t+Re+this.ctx.prevPageLastElemOffset)[0],bt=Xe&&(Ve>Ye||Ve<ke)&&_.call(this);bt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],rt,vt,null).clip().discardPath()),this.pdf.text(He,Tt.x,Tt.y,{angle:P.angle,align:H,renderingMode:P.renderingMode}),bt&&this.pdf.restoreGraphicsState()}}else qe.y<Ue&&(this.ctx.prevPageLastElemOffset+=Ue-qe.y);P.scale>=.01&&(this.pdf.setFontSize(Ne),this.lineWidth=je)}else P.scale>=.01&&(Ne=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ne*P.scale),je=this.lineWidth,this.lineWidth=je*P.scale),this.pdf.text(P.text,ce.x+this.posX,ce.y+this.posY,{angle:P.angle,align:H,renderingMode:P.renderingMode,maxWidth:P.maxWidth}),P.scale>=.01&&(this.pdf.setFontSize(Ne),this.lineWidth=je)},J=function(P,H,G,K){G=G||0,K=K||0,this.pdf.internal.out(r(P+G)+" "+n(H+K)+" l")},Y=function(P,H,G){return this.pdf.lines(P,H,G,null,null)},ae=function(P,H,G,K,ne,ce,pe,de){this.pdf.internal.out([t(o(G+P)),t(a(K+H)),t(o(ne+P)),t(a(ce+H)),t(o(pe+P)),t(a(de+H)),"c"].join(" "))},he=function(P,H,G,K){for(var ne=2*Math.PI,ce=Math.PI/2;H>G;)H-=ne;var pe=Math.abs(G-H);pe<ne&&K&&(pe=ne-pe);for(var de=[],ye=K?-1:1,Ne=H;pe>1e-5;){var je=Ne+ye*Math.min(pe,ce);de.push(fe.call(this,P,Ne,je)),pe-=Math.abs(je-Ne),Ne=je}return de},fe=function(P,H,G){var K=(G-H)/2,ne=P*Math.cos(K),ce=P*Math.sin(K),pe=ne,de=-ce,ye=pe*pe+de*de,Ne=ye+pe*ne+de*ce,je=4/3*(Math.sqrt(2*ye*Ne)-Ne)/(pe*ce-de*ne),Te=pe-je*de,ve=de+je*pe,$=Te,pt=-ve,ot=K+H,Ye=Math.cos(ot),ke=Math.sin(ot);return{x1:P*Math.cos(H),y1:P*Math.sin(H),x2:Te*Ye-ve*ke,y2:Te*ke+ve*Ye,x3:$*Ye-pt*ke,y3:$*ke+pt*Ye,x4:P*Math.cos(G),y4:P*Math.sin(G)}},se=function(P){return 180*P/Math.PI},me=function(P,H,G,K,ne,ce){var pe=P+.5*(G-P),de=H+.5*(K-H),ye=ne+.5*(G-ne),Ne=ce+.5*(K-ce),je=Math.min(P,ne,pe,ye),Te=Math.max(P,ne,pe,ye),ve=Math.min(H,ce,de,Ne),$=Math.max(H,ce,de,Ne);return new l(je,ve,Te-je,$-ve)},Ie=function(P,H,G,K,ne,ce,pe,de){var ye,Ne,je,Te,ve,$,pt,ot,Ye,ke,Ve,Re,Ke,Ue,vt=G-P,et=K-H,rt=ne-G,_t=ce-K,at=pe-ne,qe=de-ce;for(Ne=0;Ne<41;Ne++)Ye=(pt=(je=P+(ye=Ne/40)*vt)+ye*((ve=G+ye*rt)-je))+ye*(ve+ye*(ne+ye*at-ve)-pt),ke=(ot=(Te=H+ye*et)+ye*(($=K+ye*_t)-Te))+ye*($+ye*(ce+ye*qe-$)-ot),Ne==0?(Ve=Ye,Re=ke,Ke=Ye,Ue=ke):(Ve=Math.min(Ve,Ye),Re=Math.min(Re,ke),Ke=Math.max(Ke,Ye),Ue=Math.max(Ue,ke));return new l(Math.round(Ve),Math.round(Re),Math.round(Ke-Ve),Math.round(Ue-Re))},_e=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var P,H,G=(P=this.ctx.lineDash,H=this.ctx.lineDashOffset,JSON.stringify({lineDash:P,lineDashOffset:H}));this.prevLineDash!==G&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=G)}}})(Ge.API),function(e){var t=function(c){var l,h,f,p,x,S,d,w,_,k;for(h=[],f=0,p=(c+=l="\0\0\0\0".slice(c.length%4||4)).length;p>f;f+=4)(x=(c.charCodeAt(f)<<24)+(c.charCodeAt(f+1)<<16)+(c.charCodeAt(f+2)<<8)+c.charCodeAt(f+3))!==0?(S=(x=((x=((x=((x=(x-(k=x%85))/85)-(_=x%85))/85)-(w=x%85))/85)-(d=x%85))/85)%85,h.push(S+33,d+33,w+33,_+33,k+33)):h.push(122);return function(y,j){for(var T=j;T>0;T--)y.pop()}(h,l.length),String.fromCharCode.apply(String,h)+"~>"},r=function(c){var l,h,f,p,x,S=String,d="length",w=255,_="charCodeAt",k="slice",y="replace";for(c[k](-2),c=c[k](0,-2)[y](/\s/g,"")[y]("z","!!!!!"),f=[],p=0,x=(c+=l="uuuuu"[k](c[d]%5||5))[d];x>p;p+=5)h=52200625*(c[_](p)-33)+614125*(c[_](p+1)-33)+7225*(c[_](p+2)-33)+85*(c[_](p+3)-33)+(c[_](p+4)-33),f.push(w&h>>24,w&h>>16,w&h>>8,w&h);return function(j,T){for(var E=T;E>0;E--)j.pop()}(f,l[d]),S.fromCharCode.apply(S,f)},n=function(c){return c.split("").map(function(l){return("0"+l.charCodeAt().toString(16)).slice(-2)}).join("")+">"},o=function(c){var l=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((c=c.replace(/\s/g,"")).indexOf(">")!==-1&&(c=c.substr(0,c.indexOf(">"))),c.length%2&&(c+="0"),l.test(c)===!1)return"";for(var h="",f=0;f<c.length;f+=2)h+=String.fromCharCode("0x"+(c[f]+c[f+1]));return h},a=function(c){for(var l=new Uint8Array(c.length),h=c.length;h--;)l[h]=c.charCodeAt(h);return(l=fc(l)).reduce(function(f,p){return f+String.fromCharCode(p)},"")};e.processDataByFilters=function(c,l){var h=0,f=c||"",p=[];for(typeof(l=l||[])=="string"&&(l=[l]),h=0;h<l.length;h+=1)switch(l[h]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),p.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),p.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=o(f),p.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),p.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=a(f),p.push("/FlateDecode");break;default:throw new Error('The filter: "'+l[h]+'" is not implemented')}return{data:f,reverseChain:p.reverse().join(" ")}}}(Ge.API),function(e){e.loadFile=function(t,r,n){return function(o,a,c){a=a!==!1,c=typeof c=="function"?c:function(){};var l=void 0;try{l=function(h,f,p){var x=new XMLHttpRequest,S=0,d=function(w){var _=w.length,k=[],y=String.fromCharCode;for(S=0;S<_;S+=1)k.push(y(255&w.charCodeAt(S)));return k.join("")};if(x.open("GET",h,!f),x.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(x.onload=function(){x.status===200?p(d(this.responseText)):p(void 0)}),x.send(null),f&&x.status===200)return d(x.responseText)}(o,a,c)}catch{}return l}(t,r,n)},e.loadImageFile=e.loadFile}(Ge.API),function(e){function t(){return(tt.html2canvas?Promise.resolve(tt.html2canvas):Pl(()=>import("./html2canvas.esm-CBrSDip1.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load html2canvas: "+l))}).then(function(l){return l.default?l.default:l})}function r(){return(tt.DOMPurify?Promise.resolve(tt.DOMPurify):Pl(()=>import("./purify.es-B6FQ9oRL.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load dompurify: "+l))}).then(function(l){return l.default?l.default:l})}var n=function(l){var h=Pt(l);return h==="undefined"?"undefined":h==="string"||l instanceof String?"string":h==="number"||l instanceof Number?"number":h==="function"||l instanceof Function?"function":l&&l.constructor===Array?"array":l&&l.nodeType===1?"element":h==="object"?"object":"unknown"},o=function(l,h){var f=document.createElement(l);for(var p in h.className&&(f.className=h.className),h.innerHTML&&h.dompurify&&(f.innerHTML=h.dompurify.sanitize(h.innerHTML)),h.style)f.style[p]=h.style[p];return f},a=function l(h,f){for(var p=h.nodeType===3?document.createTextNode(h.nodeValue):h.cloneNode(!1),x=h.firstChild;x;x=x.nextSibling)f!==!0&&x.nodeType===1&&x.nodeName==="SCRIPT"||p.appendChild(l(x,f));return h.nodeType===1&&(h.nodeName==="CANVAS"?(p.width=h.width,p.height=h.height,p.getContext("2d").drawImage(h,0,0)):h.nodeName!=="TEXTAREA"&&h.nodeName!=="SELECT"||(p.value=h.value),p.addEventListener("load",function(){p.scrollTop=h.scrollTop,p.scrollLeft=h.scrollLeft},!0)),p},c=function l(h){var f=Object.assign(l.convert(Promise.resolve()),JSON.parse(JSON.stringify(l.template))),p=l.convert(Promise.resolve(),f);return(p=p.setProgress(1,l,1,[l])).set(h)};(c.prototype=Object.create(Promise.prototype)).constructor=c,c.convert=function(l,h){return l.__proto__=h||c.prototype,l},c.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},c.prototype.from=function(l,h){return this.then(function(){switch(h=h||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(l),h){case"string":return this.then(r).then(function(f){return this.set({src:o("div",{innerHTML:l,dompurify:f})})});case"element":return this.set({src:l});case"canvas":return this.set({canvas:l});case"img":return this.set({img:l});default:return this.error("Unknown source type.")}})},c.prototype.to=function(l){switch(l){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},c.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var l={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},h=a(this.prop.src,this.opt.html2canvas.javascriptEnabled);h.tagName==="BODY"&&(l.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:l}),this.prop.container.appendChild(h),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},c.prototype.toCanvas=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,h(this.prop.container,f)}).then(function(h){(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toContext2d=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=this.opt.jsPDF,p=this.opt.fontFaces,x=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,S=Object.assign({async:!0,allowTaint:!0,scale:x,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete S.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=p,p)for(var d=0;d<p.length;++d){var w=p[d],_=w.src.find(function(k){return k.format==="truetype"});_&&f.addFont(_.url,w.ref.name,w.ref.style)}return S.windowHeight=S.windowHeight||0,S.windowHeight=S.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):S.windowHeight,f.context2d.save(!0),h(this.prop.container,S)}).then(function(h){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var l=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=l})},c.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},c.prototype.output=function(l,h,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(l,h):this.outputPdf(l,h)},c.prototype.outputPdf=function(l,h){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(l,h)})},c.prototype.outputImg=function(l){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(l){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+l+'" is not supported.'}})},c.prototype.save=function(l){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(l?{filename:l}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},c.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},c.prototype.set=function(l){if(n(l)!=="object")return this;var h=Object.keys(l||{}).map(function(f){if(f in c.template.prop)return function(){this.prop[f]=l[f]};switch(f){case"margin":return this.setMargin.bind(this,l.margin);case"jsPDF":return function(){return this.opt.jsPDF=l.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,l.pageSize);default:return function(){this.opt[f]=l[f]}}},this);return this.then(function(){return this.thenList(h)})},c.prototype.get=function(l,h){return this.then(function(){var f=l in c.template.prop?this.prop[l]:this.opt[l];return h?h(f):f})},c.prototype.setMargin=function(l){return this.then(function(){switch(n(l)){case"number":l=[l,l,l,l];case"array":if(l.length===2&&(l=[l[0],l[1],l[0],l[1]]),l.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=l}).then(this.setPageSize)},c.prototype.setPageSize=function(l){function h(f,p){return Math.floor(f*p/72*96)}return this.then(function(){(l=l||Ge.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(l.inner={width:l.width-this.opt.margin[1]-this.opt.margin[3],height:l.height-this.opt.margin[0]-this.opt.margin[2]},l.inner.px={width:h(l.inner.width,l.k),height:h(l.inner.height,l.k)},l.inner.ratio=l.inner.height/l.inner.width),this.prop.pageSize=l})},c.prototype.setProgress=function(l,h,f,p){return l!=null&&(this.progress.val=l),h!=null&&(this.progress.state=h),f!=null&&(this.progress.n=f),p!=null&&(this.progress.stack=p),this.progress.ratio=this.progress.val/this.progress.state,this},c.prototype.updateProgress=function(l,h,f,p){return this.setProgress(l?this.progress.val+l:null,h||null,f?this.progress.n+f:null,p?this.progress.stack.concat(p):null)},c.prototype.then=function(l,h){var f=this;return this.thenCore(l,h,function(p,x){return f.updateProgress(null,null,1,[p]),Promise.prototype.then.call(this,function(S){return f.updateProgress(null,p),S}).then(p,x).then(function(S){return f.updateProgress(1),S})})},c.prototype.thenCore=function(l,h,f){f=f||Promise.prototype.then;var p=this;l&&(l=l.bind(p)),h&&(h=h.bind(p));var x=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?p:c.convert(Object.assign({},p),Promise.prototype),S=f.call(x,l,h);return c.convert(S,p.__proto__)},c.prototype.thenExternal=function(l,h){return Promise.prototype.then.call(this,l,h)},c.prototype.thenList=function(l){var h=this;return l.forEach(function(f){h=h.thenCore(f)}),h},c.prototype.catch=function(l){l&&(l=l.bind(this));var h=Promise.prototype.catch.call(this,l);return c.convert(h,this)},c.prototype.catchExternal=function(l){return Promise.prototype.catch.call(this,l)},c.prototype.error=function(l){return this.then(function(){throw new Error(l)})},c.prototype.using=c.prototype.set,c.prototype.saveAs=c.prototype.save,c.prototype.export=c.prototype.output,c.prototype.run=c.prototype.then,Ge.getPageSize=function(l,h,f){if(Pt(l)==="object"){var p=l;l=p.orientation,h=p.unit||h,f=p.format||f}h=h||"mm",f=f||"a4",l=(""+(l||"P")).toLowerCase();var x,S=(""+f).toLowerCase(),d={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(h){case"pt":x=1;break;case"mm":x=72/25.4;break;case"cm":x=72/2.54;break;case"in":x=72;break;case"px":x=.75;break;case"pc":case"em":x=12;break;case"ex":x=6;break;default:throw"Invalid unit: "+h}var w,_=0,k=0;if(d.hasOwnProperty(S))_=d[S][1]/x,k=d[S][0]/x;else try{_=f[1],k=f[0]}catch{throw new Error("Invalid format: "+f)}if(l==="p"||l==="portrait")l="p",k>_&&(w=k,k=_,_=w);else{if(l!=="l"&&l!=="landscape")throw"Invalid orientation: "+l;l="l",_>k&&(w=k,k=_,_=w)}return{width:k,height:_,unit:h,k:x,orientation:l}},e.html=function(l,h){(h=h||{}).callback=h.callback||function(){},h.html2canvas=h.html2canvas||{},h.html2canvas.canvas=h.html2canvas.canvas||this.canvas,h.jsPDF=h.jsPDF||this,h.fontFaces=h.fontFaces?h.fontFaces.map(Yl):null;var f=new c(h);return h.worker?f:f.from(l).doCallback()}}(Ge.API),Ge.API.addJS=function(e){return eh=e,this.internal.events.subscribe("postPutResources",function(){vs=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(vs+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),K1=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+eh+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){vs!==void 0&&K1!==void 0&&this.internal.out("/Names <</JavaScript "+vs+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var o=r.outline.render().split(/\r\n/),a=0;a<o.length;a++){var c=o[a],l=n.exec(c);if(l!=null){var h=l[1];r.internal.newObjectDeferredBegin(h,!1)}r.internal.write(c)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,p=[];for(a=0;a<f;a++){var x=r.internal.newObject();p.push(x);var S=r.internal.getPageInfo(a+1);r.internal.write("<< /D["+S.objId+" 0 R /XYZ null null null]>> endobj")}var d=r.internal.newObject();for(r.internal.write("<< /Names [ "),a=0;a<p.length;a++)r.internal.write("(page_"+(a+1)+")"+p[a]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+d+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,o,a){var c={title:o,options:a,children:[]};return n==null&&(n=this.root),n.children.push(c),c},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var o=0;o<n.children.length;o++)this.genIds_r(n.children[o])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var o=this.ctx.pdf.internal.getVerticalCoordinateString,a=0;a<n.children.length;a++){var c=n.children[a];this.objStart(c),this.line("/Title "+this.makeString(c.title)),this.line("/Parent "+this.makeRef(n)),a>0&&this.line("/Prev "+this.makeRef(n.children[a-1])),a<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[a+1])),c.children.length>0&&(this.line("/First "+this.makeRef(c.children[0])),this.line("/Last "+this.makeRef(c.children[c.children.length-1])));var l=this.count=this.count_r({count:0},c);if(l>0&&this.line("/Count "+l),c.options&&c.options.pageNumber){var h=r.internal.getPageInfo(c.options.pageNumber);this.line("/Dest ["+h.objId+" 0 R /XYZ 0 "+o(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,o){for(var a=0;a<o.children.length;a++)n.count++,this.count_r(n,o.children[a]);return n.count}}])}(Ge.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,o,a,c,l){var h,f=this.decode.DCT_DECODE,p=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=c||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,h=function(x){for(var S,d=256*x.charCodeAt(4)+x.charCodeAt(5),w=x.length,_={width:0,height:0,numcomponents:1},k=4;k<w;k+=2){if(k+=d,t.indexOf(x.charCodeAt(k+1))!==-1){S=256*x.charCodeAt(k+5)+x.charCodeAt(k+6),_={width:256*x.charCodeAt(k+7)+x.charCodeAt(k+8),height:S,numcomponents:x.charCodeAt(k+9)};break}d=256*x.charCodeAt(k+2)+x.charCodeAt(k+3)}return _}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),h.numcomponents){case 1:l=this.color_spaces.DEVICE_GRAY;break;case 4:l=this.color_spaces.DEVICE_CMYK;break;case 3:l=this.color_spaces.DEVICE_RGB}p={data:r,width:h.width,height:h.height,colorSpace:l,bitsPerComponent:8,filter:f,index:n,alias:o}}return p}}(Ge.API),Ge.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var o,a=G6(e,{checkCrc:!0}),c=a.width,l=a.height,h=a.channels,f=a.palette,p=a.depth;o=f&&h===1?function(W){for(var D=W.width,X=W.height,N=W.data,O=W.palette,J=W.depth,Y=!1,ae=[],he=[],fe=void 0,se=!1,me=0,Ie=0;Ie<O.length;Ie++){var _e=i1(O[Ie],4),P=_e[0],H=_e[1],G=_e[2],K=_e[3];ae.push(P,H,G),K!=null&&(K===0?(me++,he.length<1&&he.push(Ie)):K<255&&(se=!0))}if(se||me>1){Y=!0,he=void 0;var ne=D*X;fe=new Uint8Array(ne);for(var ce=new DataView(N.buffer),pe=0;pe<ne;pe++){var de=Ql(ce,pe,J),ye=i1(O[de],4)[3];fe[pe]=ye}}else me===0&&(he=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:Y?8:void 0,colorBytes:N,alphaBytes:fe,needSMask:Y,palette:ae,mask:he}}(a):h===2||h===4?function(W){for(var D=W.data,X=W.width,N=W.height,O=W.channels,J=W.depth,Y=O===2?"DeviceGray":"DeviceRGB",ae=O-1,he=X*N,fe=ae,se=he*fe,me=1*he,Ie=Math.ceil(se*J/8),_e=Math.ceil(me*J/8),P=new Uint8Array(Ie),H=new Uint8Array(_e),G=new DataView(D.buffer),K=new DataView(P.buffer),ne=new DataView(H.buffer),ce=!1,pe=0;pe<he;pe++){for(var de=pe*O,ye=0;ye<fe;ye++)ch(K,Ql(G,de+ye,J),pe*fe+ye,J);var Ne=Ql(G,de+fe,J);Ne<(1<<J)-1&&(ce=!0),ch(ne,Ne,1*pe,J)}return{colorSpace:Y,colorsPerPixel:ae,sMaskBitsPerComponent:ce?J:void 0,colorBytes:P,alphaBytes:H,needSMask:ce}}(a):function(W){var D=W.data,X=W.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:X,colorsPerPixel:X==="DeviceGray"?1:3,colorBytes:D instanceof Uint16Array?function(N){for(var O=N.length,J=new Uint8Array(2*O),Y=new DataView(J.buffer,J.byteOffset,J.byteLength),ae=0;ae<O;ae++)Y.setUint16(2*ae,N[ae],!1);return J}(D):D,needSMask:!1}}(a);var x,S,d,w=o,_=w.colorSpace,k=w.colorsPerPixel,y=w.sMaskBitsPerComponent,j=w.colorBytes,T=w.alphaBytes,E=w.needSMask,V=w.palette,Z=w.mask,te=null;return n!==Ge.API.image_compression.NONE&&typeof fc=="function"?(te=function(W){var D;switch(W){case Ge.API.image_compression.FAST:D=11;break;case Ge.API.image_compression.MEDIUM:D=13;break;case Ge.API.image_compression.SLOW:D=14;break;default:D=12}return D}(n),x=this.decode.FLATE_DECODE,S="/Predictor ".concat(te," /Colors ").concat(k," /BitsPerComponent ").concat(p," /Columns ").concat(c),e=ih(j,Math.ceil(c*k*p/8),k,p,n),E&&(d=ih(T,Math.ceil(c*y/8),1,y,n))):(x=void 0,S=void 0,e=j,E&&(d=T)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:r,data:e,index:t,filter:x,decodeParameters:S,transparency:Z,palette:V,sMask:d,predictor:te,width:c,height:l,bitsPerComponent:p,sMaskBitsPerComponent:y,colorSpace:_}}},function(e){e.processGIF89A=function(t,r,n,o){var a=new pv(t),c=a.width,l=a.height,h=[];a.decodeAndBlitFrameRGBA(0,h);var f={data:h,width:c,height:l},p=new Xl(100).encode(f,100);return e.processJPEG.call(this,p,r,n,o)},e.processGIF87A=e.processGIF89A}(Ge.API),An.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:o,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},An.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Ot.log("bit decode error:"+r)}},An.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,o=0;o<t;o++)for(var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+8*o*4,l=0;l<8&&8*o+l<this.width;l++){var h=this.palette[a>>7-l&1];this.data[c+4*l]=h.blue,this.data[c+4*l+1]=h.green,this.data[c+4*l+2]=h.red,this.data[c+4*l+3]=255}r!==0&&(this.pos+=4-r)}},An.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<e;o++){var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+2*o*4,l=a>>4,h=15&a,f=this.palette[l];if(this.data[c]=f.blue,this.data[c+1]=f.green,this.data[c+2]=f.red,this.data[c+3]=255,2*o+1>=this.width)break;f=this.palette[h],this.data[c+4]=f.blue,this.data[c+4+1]=f.green,this.data[c+4+2]=f.red,this.data[c+4+3]=255}t!==0&&(this.pos+=4-t)}},An.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(o<this.palette.length){var c=this.palette[o];this.data[a]=c.red,this.data[a+1]=c.green,this.data[a+2]=c.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}e!==0&&(this.pos+=4-e)}},An.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(a&t)/t*255|0,l=(a>>5&t)/t*255|0,h=(a>>10&t)/t*255|0,f=a>>15?255:0,p=n*this.width*4+4*o;this.data[p]=h,this.data[p+1]=l,this.data[p+2]=c,this.data[p+3]=f}this.pos+=e}},An.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var o=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var c=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(c&t)/t*255|0,h=(c>>5&r)/r*255|0,f=(c>>11)/t*255|0,p=o*this.width*4+4*a;this.data[p]=f,this.data[p+1]=h,this.data[p+2]=l,this.data[p+3]=255}this.pos+=e}},An.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=a,this.data[c+1]=o,this.data[c+2]=n,this.data[c+3]=255}this.pos+=this.width%4}},An.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=a,this.data[l+1]=o,this.data[l+2]=n,this.data[l+3]=c}},An.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,o){var a=new An(t,!1),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new Xl(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ge.API),hh.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,o){var a=new hh(t),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new Xl(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ge.API),Ge.API.processRGBA=function(e,t,r){for(var n=e.data,o=n.length,a=new Uint8Array(o/4*3),c=new Uint8Array(o/4),l=0,h=0,f=0;f<o;f+=4){var p=n[f],x=n[f+1],S=n[f+2],d=n[f+3];a[l++]=p,a[l++]=x,a[l++]=S,c[h++]=d}var w=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(c),data:w,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},Ge.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Eo=Ge.API,bs=Eo.getCharWidthsArray=function(e,t){var r,n,o=(t=t||{}).font||this.internal.getFont(),a=t.fontSize||this.internal.getFontSize(),c=t.charSpace||this.internal.getCharSpace(),l=t.widths?t.widths:o.metadata.Unicode.widths,h=l.fof?l.fof:1,f=t.kerning?t.kerning:o.metadata.Unicode.kerning,p=f.fof?f.fof:1,x=t.doKerning!==!1,S=0,d=e.length,w=0,_=l[0]||h,k=[];for(r=0;r<d;r++)n=e.charCodeAt(r),typeof o.metadata.widthOfString=="function"?k.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(n))+c*(1e3/a)||0)/1e3):(S=x&&Pt(f[n])==="object"&&!isNaN(parseInt(f[n][w],10))?f[n][w]/p:0,k.push((l[n]||_)/h+S)),w=n;return k},th=Eo.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),o=t.charSpace||this.internal.getCharSpace();return Eo.processArabic&&(e=Eo.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,o)/r:bs.apply(this,arguments).reduce(function(a,c){return a+c},0)},rh=function(e,t,r,n){for(var o=[],a=0,c=e.length,l=0;a!==c&&l+t[a]<r;)l+=t[a],a++;o.push(e.slice(0,a));var h=a;for(l=0;a!==c;)l+t[a]>n&&(o.push(e.slice(h,a)),l=0,h=a),l+=t[a],a++;return h!==a&&o.push(e.slice(h,a)),o},nh=function(e,t,r){r||(r={});var n,o,a,c,l,h,f,p=[],x=[p],S=r.textIndent||0,d=0,w=0,_=e.split(" "),k=bs.apply(this,[" ",r])[0];if(h=r.lineIndent===-1?_[0].length+2:r.lineIndent||0){var y=Array(h).join(" "),j=[];_.map(function(E){(E=E.split(/\s*\n/)).length>1?j=j.concat(E.map(function(V,Z){return(Z&&V.length?`
`:"")+V})):j.push(E[0])}),_=j,h=th.apply(this,[y,r])}for(a=0,c=_.length;a<c;a++){var T=0;if(n=_[a],h&&n[0]==`
`&&(n=n.substr(1),T=1),S+d+(w=(o=bs.apply(this,[n,r])).reduce(function(E,V){return E+V},0))>t||T){if(w>t){for(l=rh.apply(this,[n,o,t-(S+d),t]),p.push(l.shift()),p=[l.pop()];l.length;)x.push([l.shift()]);w=o.slice(n.length-(p[0]?p[0].length:0)).reduce(function(E,V){return E+V},0)}else p=[n];x.push(p),S=w+h,d=k}else p.push(n),S+=d+w,d=k}return f=h?function(E,V){return(V?y:"")+E.join(" ")}:function(E){return E.join(" ")},x.map(f)},Eo.splitTextToSize=function(e,t,r){var n,o=(r=r||{}).fontSize||this.internal.getFontSize(),a=(function(p){if(p.widths&&p.kerning)return{widths:p.widths,kerning:p.kerning};var x=this.internal.getFont(p.fontName,p.fontStyle),S="Unicode";return x.metadata[S]?{widths:x.metadata[S].widths||{0:1},kerning:x.metadata[S].kerning||{}}:{font:x.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var c=1*this.internal.scaleFactor*t/o;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0,a.lineIndent=r.lineIndent;var l,h,f=[];for(l=0,h=n.length;l<h;l++)f=f.concat(nh.apply(this,[n[l],c,a]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},o={},a=0;a<16;a++)n[r[a]]=t[a],o[t[a]]=r[a];var c=function(S){return"0x"+parseInt(S,10).toString(16)},l=e.__fontmetrics__.compress=function(S){var d,w,_,k,y=["{"];for(var j in S){if(d=S[j],isNaN(parseInt(j,10))?w="'"+j+"'":(j=parseInt(j,10),w=(w=c(j).slice(2)).slice(0,-1)+o[w.slice(-1)]),typeof d=="number")d<0?(_=c(d).slice(3),k="-"):(_=c(d).slice(2),k=""),_=k+_.slice(0,-1)+o[_.slice(-1)];else{if(Pt(d)!=="object")throw new Error("Don't know what to do with value type "+Pt(d)+".");_=l(d)}y.push(w+_)}return y.push("}"),y.join("")},h=e.__fontmetrics__.uncompress=function(S){if(typeof S!="string")throw new Error("Invalid argument passed to uncompress.");for(var d,w,_,k,y={},j=1,T=y,E=[],V="",Z="",te=S.length-1,W=1;W<te;W+=1)(k=S[W])=="'"?d?(_=d.join(""),d=void 0):d=[]:d?d.push(k):k=="{"?(E.push([T,_]),T={},_=void 0):k=="}"?((w=E.pop())[0][w[1]]=T,_=void 0,T=w[0]):k=="-"?j=-1:_===void 0?n.hasOwnProperty(k)?(V+=n[k],_=parseInt(V,16)*j,j=1,V=""):V+=k:n.hasOwnProperty(k)?(Z+=n[k],T[_]=parseInt(Z,16)*j,j=1,_=void 0,Z=""):Z+=k;return y},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},p={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},x={Unicode:{"Courier-Oblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(S){var d=S.font,w=x.Unicode[d.postScriptName];w&&(d.metadata.Unicode={},d.metadata.Unicode.widths=w.widths,d.metadata.Unicode.kerning=w.kerning);var _=p.Unicode[d.postScriptName];_&&(d.metadata.Unicode.encoding=_,d.encoding=_.codePages[0])}])}(Ge.API),function(e){var t=function(r){for(var n=r.length,o=new Uint8Array(n),a=0;a<n;a++)o[a]=r.charCodeAt(a);return o};e.API.events.push(["addFont",function(r){var n=void 0,o=r.font,a=r.instance;if(!o.isStandardFont){if(a===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");if(typeof(n=a.existsFileInVFS(o.postScriptName)===!1?a.loadFile(o.postScriptName):a.getFileFromVFS(o.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");(function(c,l){l=/^\x00\x01\x00\x00/.test(l)?t(l):t(Cs(l)),c.metadata=e.API.TTFFont.open(l),c.metadata.Unicode=c.metadata.Unicode||{encoding:{},kerning:{},widths:[]},c.metadata.glyIdsUsed=[0]})(o,n)}}])}(Ge),Ge.API.addSvgAsImage=function(e,t,r,n,o,a,c,l){if(isNaN(t)||isNaN(r))throw Ot.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw Ot.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=n,h.height=o;var f=h.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,h.width,h.height);var p={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},x=this;return(tt.canvg?Promise.resolve(tt.canvg):Pl(()=>import("./index.es-B5zZyWSK.js"),__vite__mapDeps([0,1,2,3]))).catch(function(S){return Promise.reject(new Error("Could not load canvg: "+S))}).then(function(S){return S.default?S.default:S}).then(function(S){return S.fromString(f,e,p)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(S){return S.render(p)}).then(function(){x.addImage(h.toDataURL("image/jpeg",1),t,r,n,o,c,l)})},Ge.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var o=0;o<this.internal.pages[n].length;o++)this.internal.pages[n][o]=this.internal.pages[n][o].replace(t,r);return this},Ge.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,o,a,c={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},l=Object.keys(c),h=[],f=0,p=0,x=0;function S(w,_){var k,y=!1;for(k=0;k<w.length;k+=1)w[k]===_&&(y=!0);return y}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(c)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var d=l.length;for(x=0;x<d;x+=1)r[l[x]].value=r[l[x]].defaultValue,r[l[x]].explicitSet=!1}if(Pt(e)==="object"){for(o in e)if(a=e[o],S(l,o)&&a!==void 0){if(r[o].type==="boolean"&&typeof a=="boolean")r[o].value=a;else if(r[o].type==="name"&&S(r[o].valueSet,a))r[o].value=a;else if(r[o].type==="integer"&&Number.isInteger(a))r[o].value=a;else if(r[o].type==="array"){for(f=0;f<a.length;f+=1)if(n=!0,a[f].length===1&&typeof a[f][0]=="number")h.push(String(a[f]-1));else if(a[f].length>1){for(p=0;p<a[f].length;p+=1)typeof a[f][p]!="number"&&(n=!1);n===!0&&h.push([a[f][0]-1,a[f][1]-1].join(" "))}r[o].value="["+h.join(" ")+"]"}else r[o].value=r[o].defaultValue;r[o].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var w,_=[];for(w in r)r[w].explicitSet===!0&&(r[w].type==="name"?_.push("/"+w+" /"+r[w].value):_.push("/"+w+" "+r[w].value));_.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+_.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',o=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),a=unescape(encodeURIComponent(n)),c=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),l=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),h=unescape(encodeURIComponent("</x:xmpmeta>")),f=a.length+c.length+l.length+o.length+h.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(o+a+c+l+h),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,o){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:o||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(Ge.API),function(e){var t=e.API,r=t.pdfEscape16=function(a,c){for(var l,h=c.metadata.Unicode.widths,f=["","0","00","000","0000"],p=[""],x=0,S=a.length;x<S;++x){if(l=c.metadata.characterToGlyph(a.charCodeAt(x)),c.metadata.glyIdsUsed.push(l),c.metadata.toUnicode[l]=a.charCodeAt(x),h.indexOf(l)==-1&&(h.push(l),h.push([parseInt(c.metadata.widthOfGlyph(l),10)])),l=="0")return p.join("");l=l.toString(16),p.push(f[4-l.length],l)}return p.join("")},n=function(a){var c,l,h,f,p,x,S;for(p=`/CIDInit /ProcSet findresource begin
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
endcodespacerange`,h=[],x=0,S=(l=Object.keys(a).sort(function(d,w){return d-w})).length;x<S;x++)c=l[x],h.length>=100&&(p+=`
`+h.length+` beginbfchar
`+h.join(`
`)+`
endbfchar`,h=[]),a[c]!==void 0&&a[c]!==null&&typeof a[c].toString=="function"&&(f=("0000"+a[c].toString(16)).slice(-4),c=("0000"+(+c).toString(16)).slice(-4),h.push("<"+c+"><"+f+">"));return h.length&&(p+=`
`+h.length+` beginbfchar
`+h.join(`
`)+`
endbfchar
`),p+`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,p=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="Identity-H"){for(var x=l.metadata.Unicode.widths,S=l.metadata.subset.encode(l.metadata.glyIdsUsed,1),d="",w=0;w<S.length;w++)d+=String.fromCharCode(S[w]);var _=f();p({data:d,addLength1:!0,objectId:_}),h("endobj");var k=f();p({data:n(l.metadata.toUnicode),addLength1:!0,objectId:k}),h("endobj");var y=f();h("<<"),h("/Type /FontDescriptor"),h("/FontName /"+jo(l.fontName)),h("/FontFile2 "+_+" 0 R"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/Flags "+l.metadata.flags),h("/StemV "+l.metadata.stemV),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h(">>"),h("endobj");var j=f();h("<<"),h("/Type /Font"),h("/BaseFont /"+jo(l.fontName)),h("/FontDescriptor "+y+" 0 R"),h("/W "+e.API.PDFObject.convert(x)),h("/CIDToGIDMap /Identity"),h("/DW 1000"),h("/Subtype /CIDFontType2"),h("/CIDSystemInfo"),h("<<"),h("/Supplement 0"),h("/Registry (Adobe)"),h("/Ordering ("+l.encoding+")"),h(">>"),h(">>"),h("endobj"),l.objectNumber=f(),h("<<"),h("/Type /Font"),h("/Subtype /Type0"),h("/ToUnicode "+k+" 0 R"),h("/BaseFont /"+jo(l.fontName)),h("/Encoding /"+l.encoding),h("/DescendantFonts ["+j+" 0 R]"),h(">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]),t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,p=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="WinAnsiEncoding"){for(var x=l.metadata.rawData,S="",d=0;d<x.length;d++)S+=String.fromCharCode(x[d]);var w=f();p({data:S,addLength1:!0,objectId:w}),h("endobj");var _=f();p({data:n(l.metadata.toUnicode),addLength1:!0,objectId:_}),h("endobj");var k=f();h("<<"),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h("/StemV "+l.metadata.stemV),h("/Type /FontDescriptor"),h("/FontFile2 "+w+" 0 R"),h("/Flags 96"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/FontName /"+jo(l.fontName)),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h(">>"),h("endobj"),l.objectNumber=f();for(var y=0;y<l.metadata.hmtx.widths.length;y++)l.metadata.hmtx.widths[y]=parseInt(l.metadata.hmtx.widths[y]*(1e3/l.metadata.head.unitsPerEm));h("<</Subtype/TrueType/Type/Font/ToUnicode "+_+" 0 R/BaseFont/"+jo(l.fontName)+"/FontDescriptor "+k+" 0 R/Encoding/"+l.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(l.metadata.hmtx.widths)+">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]);var o=function(a){var c,l=a.text||"",h=a.x,f=a.y,p=a.options||{},x=a.mutex||{},S=x.pdfEscape,d=x.activeFontKey,w=x.fonts,_=d,k="",y=0,j="",T=w[_].encoding;if(w[_].encoding!=="Identity-H")return{text:l,x:h,y:f,options:p,mutex:x};for(j=l,_=d,Array.isArray(l)&&(j=l[0]),y=0;y<j.length;y+=1)w[_].metadata.hasOwnProperty("cmap")&&(c=w[_].metadata.cmap.unicode.codeMap[j[y].charCodeAt(0)]),c||j[y].charCodeAt(0)<256&&w[_].metadata.hasOwnProperty("Unicode")?k+=j[y]:k+="";var E="";return parseInt(_.slice(1))<14||T==="WinAnsiEncoding"?E=S(k,_).split("").map(function(V){return V.charCodeAt(0).toString(16)}).join(""):T==="Identity-H"&&(E=r(k,w[_])),x.isHex=!0,{text:E,x:h,y:f,options:p,mutex:x}};t.events.push(["postProcessText",function(a){var c=a.text||"",l=[],h={text:c,x:a.x,y:a.y,options:a.options,mutex:a.mutex};if(Array.isArray(c)){var f=0;for(f=0;f<c.length;f+=1)Array.isArray(c[f])&&c[f].length===3?l.push([o(Object.assign({},h,{text:c[f][0]})).text,c[f][1],c[f][2]]):l.push(o(Object.assign({},h,{text:c[f]})).text);a.text=l}else a.text=o(Object.assign({},h,{text:c})).text}])}(Ge),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Ge.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var o,a,c,l,h,f,p,x=t,S=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],w={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},_={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},k=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],y=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),j=!1,T=0;this.__bidiEngine__={};var E=function(N){var O=N.charCodeAt(),J=O>>8,Y=_[J];return Y!==void 0?x[256*Y+(255&O)]:J===252||J===253?"AL":y.test(J)?"L":J===8?"R":"N"},V=function(N){for(var O,J=0;J<N.length;J++){if((O=E(N.charAt(J)))==="L")return!1;if(O==="R")return!0}return!1},Z=function(N,O,J,Y){var ae,he,fe,se,me=O[Y];switch(me){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":j=!1;break;case"N":case"AN":break;case"EN":j&&(me="AN");break;case"AL":j=!0,me="R";break;case"WS":case"BN":me="N";break;case"CS":Y<1||Y+1>=O.length||(ae=J[Y-1])!=="EN"&&ae!=="AN"||(he=O[Y+1])!=="EN"&&he!=="AN"?me="N":j&&(he="AN"),me=he===ae?he:"N";break;case"ES":me=(ae=Y>0?J[Y-1]:"B")==="EN"&&Y+1<O.length&&O[Y+1]==="EN"?"EN":"N";break;case"ET":if(Y>0&&J[Y-1]==="EN"){me="EN";break}if(j){me="N";break}for(fe=Y+1,se=O.length;fe<se&&O[fe]==="ET";)fe++;me=fe<se&&O[fe]==="EN"?"EN":"N";break;case"NSM":if(c&&!l){for(se=O.length,fe=Y+1;fe<se&&O[fe]==="NSM";)fe++;if(fe<se){var Ie=N[Y],_e=Ie>=1425&&Ie<=2303||Ie===64286;if(ae=O[fe],_e&&(ae==="R"||ae==="AL")){me="R";break}}}me=Y<1||(ae=O[Y-1])==="B"?"N":J[Y-1];break;case"B":j=!1,o=!0,me=T;break;case"S":a=!0,me="N"}return me},te=function(N,O,J){var Y=N.split("");return J&&W(Y,J,{hiLevel:T}),Y.reverse(),O&&O.reverse(),Y.join("")},W=function(N,O,J){var Y,ae,he,fe,se,me=-1,Ie=N.length,_e=0,P=[],H=T?d:S,G=[];for(j=!1,o=!1,a=!1,ae=0;ae<Ie;ae++)G[ae]=E(N[ae]);for(he=0;he<Ie;he++){if(se=_e,P[he]=Z(N,G,P,he),Y=240&(_e=H[se][w[P[he]]]),_e&=15,O[he]=fe=H[_e][5],Y>0)if(Y===16){for(ae=me;ae<he;ae++)O[ae]=1;me=-1}else me=-1;if(H[_e][6])me===-1&&(me=he);else if(me>-1){for(ae=me;ae<he;ae++)O[ae]=fe;me=-1}G[he]==="B"&&(O[he]=0),J.hiLevel|=fe}a&&function(K,ne,ce){for(var pe=0;pe<ce;pe++)if(K[pe]==="S"){ne[pe]=T;for(var de=pe-1;de>=0&&K[de]==="WS";de--)ne[de]=T}}(G,O,Ie)},D=function(N,O,J,Y,ae){if(!(ae.hiLevel<N)){if(N===1&&T===1&&!o)return O.reverse(),void(J&&J.reverse());for(var he,fe,se,me,Ie=O.length,_e=0;_e<Ie;){if(Y[_e]>=N){for(se=_e+1;se<Ie&&Y[se]>=N;)se++;for(me=_e,fe=se-1;me<fe;me++,fe--)he=O[me],O[me]=O[fe],O[fe]=he,J&&(he=J[me],J[me]=J[fe],J[fe]=he);_e=se}_e++}}},X=function(N,O,J){var Y=N.split(""),ae={hiLevel:T};return J||(J=[]),W(Y,J,ae),function(he,fe,se){if(se.hiLevel!==0&&p)for(var me,Ie=0;Ie<he.length;Ie++)fe[Ie]===1&&(me=k.indexOf(he[Ie]))>=0&&(he[Ie]=k[me+1])}(Y,J,ae),D(2,Y,O,J,ae),D(1,Y,O,J,ae),Y.join("")};return this.__bidiEngine__.doBidiReorder=function(N,O,J){if(function(ae,he){if(he)for(var fe=0;fe<ae.length;fe++)he[fe]=fe;l===void 0&&(l=V(ae)),f===void 0&&(f=V(ae))}(N,O),c||!h||f)if(c&&h&&l^f)T=l?1:0,N=te(N,O,J);else if(!c&&h&&f)T=l?1:0,N=X(N,O,J),N=te(N,O);else if(!c||l||h||f){if(c&&!h&&l^f)N=te(N,O),l?(T=0,N=X(N,O,J)):(T=1,N=X(N,O,J),N=te(N,O));else if(c&&l&&!h&&f)T=1,N=X(N,O,J),N=te(N,O);else if(!c&&!h&&l^f){var Y=p;l?(T=1,N=X(N,O,J),T=0,p=!1,N=X(N,O,J),p=Y):(T=0,N=X(N,O,J),N=te(N,O),T=1,p=!1,N=X(N,O,J),p=Y,N=te(N,O))}}else T=0,N=X(N,O,J);else T=l?1:0,N=X(N,O,J);return N},this.__bidiEngine__.setOptions=function(N){N&&(c=N.isInputVisual,h=N.isOutputVisual,l=N.isInputRtl,f=N.isOutputRtl,p=N.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var o=n.text;n.x,n.y;var a=n.options||{};n.mutex,a.lang;var c=[];if(a.isInputVisual=typeof a.isInputVisual!="boolean"||a.isInputVisual,r.setOptions(a),Object.prototype.toString.call(o)==="[object Array]"){var l=0;for(c=[],l=0;l<o.length;l+=1)Object.prototype.toString.call(o[l])==="[object Array]"?c.push([r.doBidiReorder(o[l][0]),o[l][1],o[l][2]]):c.push([r.doBidiReorder(o[l])]);n.text=c}else n.text=r.doBidiReorder(o);r.setOptions({isInputVisual:!0})}])}(Ge),Ge.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new Di(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new Iv(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new mv(this.contents),this.head=new vv(this),this.name=new Sv(this),this.cmap=new b0(this),this.toUnicode={},this.hhea=new bv(this),this.maxp=new _v(this),this.hmtx=new Cv(this),this.post=new wv(this),this.os2=new xv(this),this.loca=new Nv(this),this.glyf=new Av(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,o,a;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var c,l,h,f;for(f=[],c=0,l=(h=this.bbox).length;c<l;c++)t=h[c],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(o=this.post.italic_angle),32768&(r=o>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(a=this.familyClass)===1||a===2||a===3||a===4||a===5||a===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var o,a,c,l;for(c=0,a=0,l=(t=""+t).length;0<=l?a<l:a>l;a=0<=l?++a:--a)o=t.charCodeAt(a),c+=this.widthOfGlyph(this.characterToGlyph(o))+n*(1e3/r)||0;return c*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var In,Di=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,o;for(o=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)o.push(this.writeByte(t.charCodeAt(r)));return o},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,o,a,c,l,h;return t=this.readByte(),r=this.readByte(),n=this.readByte(),o=this.readByte(),a=this.readByte(),c=this.readByte(),l=this.readByte(),h=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^o)+16777216*(255^a)+65536*(255^c)+256*(255^l)+(255^h)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*o+16777216*a+65536*c+256*l+h},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,o,a;for(a=[],n=0,o=t.length;n<o;n++)r=t[n],a.push(this.writeByte(r));return a},e}(),mv=function(){var e;function t(r){var n,o,a;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},o=0,a=this.tableCount;0<=a?o<a:o>a;o=0<=a?++o:--o)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,o,a,c,l,h,f,p,x,S,d,w,_;for(_ in d=Object.keys(r).length,h=Math.log(2),x=16*Math.floor(Math.log(d)/h),c=Math.floor(x/h),p=16*d-x,(o=new Di).writeInt(this.scalarType),o.writeShort(d),o.writeShort(x),o.writeShort(c),o.writeShort(p),a=16*d,f=o.pos+a,l=null,w=[],r)for(S=r[_],o.writeString(_),o.writeInt(e(S)),o.writeInt(f),o.writeInt(S.length),w=w.concat(S),_==="head"&&(l=f),f+=S.length;f%4;)w.push(0),f++;return o.write(w),n=2981146554-e(o.data),o.pos=l+8,o.writeUInt32(n),o.data},e=function(r){var n,o,a,c;for(r=x0.call(r);r.length%4;)r.push(0);for(a=new Di(r),o=0,n=0,c=r.length;n<c;n=n+=4)o+=a.readUInt32();return 4294967295&o},t}(),gv={}.hasOwnProperty,qn=function(e,t){for(var r in t)gv.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};In=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var vv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new Di).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),fh=function(){function e(t,r){var n,o,a,c,l,h,f,p,x,S,d,w,_,k,y,j,T;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),x=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(h=0;h<256;++h)this.codeMap[h]=t.readByte();break;case 4:for(d=t.readUInt16(),S=d/2,t.pos+=6,a=function(){var E,V;for(V=[],h=E=0;0<=S?E<S:E>S;h=0<=S?++E:--E)V.push(t.readUInt16());return V}(),t.pos+=2,_=function(){var E,V;for(V=[],h=E=0;0<=S?E<S:E>S;h=0<=S?++E:--E)V.push(t.readUInt16());return V}(),f=function(){var E,V;for(V=[],h=E=0;0<=S?E<S:E>S;h=0<=S?++E:--E)V.push(t.readUInt16());return V}(),p=function(){var E,V;for(V=[],h=E=0;0<=S?E<S:E>S;h=0<=S?++E:--E)V.push(t.readUInt16());return V}(),o=(this.length-t.pos+this.offset)/2,l=function(){var E,V;for(V=[],h=E=0;0<=o?E<o:E>o;h=0<=o?++E:--E)V.push(t.readUInt16());return V}(),h=y=0,T=a.length;y<T;h=++y)for(k=a[h],n=j=w=_[h];w<=k?j<=k:j>=k;n=w<=k?++j:--j)p[h]===0?c=n+f[h]:(c=l[p[h]/2+(n-w)-(S-h)]||0)!==0&&(c+=f[h]),this.codeMap[n]=65535&c}t.pos=x}return e.encode=function(t,r){var n,o,a,c,l,h,f,p,x,S,d,w,_,k,y,j,T,E,V,Z,te,W,D,X,N,O,J,Y,ae,he,fe,se,me,Ie,_e,P,H,G,K,ne,ce,pe,de,ye,Ne,je;switch(Y=new Di,c=Object.keys(t).sort(function(Te,ve){return Te-ve}),r){case"macroman":for(_=0,k=function(){var Te=[];for(w=0;w<256;++w)Te.push(0);return Te}(),j={0:0},a={},ae=0,me=c.length;ae<me;ae++)j[de=t[o=c[ae]]]==null&&(j[de]=++_),a[o]={old:t[o],new:j[t[o]]},k[o]=j[t[o]];return Y.writeUInt16(1),Y.writeUInt16(0),Y.writeUInt32(12),Y.writeUInt16(0),Y.writeUInt16(262),Y.writeUInt16(0),Y.write(k),{charMap:a,subtable:Y.data,maxGlyphID:_+1};case"unicode":for(O=[],x=[],T=0,j={},n={},y=f=null,he=0,Ie=c.length;he<Ie;he++)j[V=t[o=c[he]]]==null&&(j[V]=++T),n[o]={old:V,new:j[V]},l=j[V]-o,y!=null&&l===f||(y&&x.push(y),O.push(o),f=l),y=o;for(y&&x.push(y),x.push(65535),O.push(65535),X=2*(D=O.length),W=2*Math.pow(Math.log(D)/Math.LN2,2),S=Math.log(W/2)/Math.LN2,te=2*D-W,h=[],Z=[],d=[],w=fe=0,_e=O.length;fe<_e;w=++fe){if(N=O[w],p=x[w],N===65535){h.push(0),Z.push(0);break}if(N-(J=n[N].new)>=32768)for(h.push(0),Z.push(2*(d.length+D-w)),o=se=N;N<=p?se<=p:se>=p;o=N<=p?++se:--se)d.push(n[o].new);else h.push(J-N),Z.push(0)}for(Y.writeUInt16(3),Y.writeUInt16(1),Y.writeUInt32(12),Y.writeUInt16(4),Y.writeUInt16(16+8*D+2*d.length),Y.writeUInt16(0),Y.writeUInt16(X),Y.writeUInt16(W),Y.writeUInt16(S),Y.writeUInt16(te),ce=0,P=x.length;ce<P;ce++)o=x[ce],Y.writeUInt16(o);for(Y.writeUInt16(0),pe=0,H=O.length;pe<H;pe++)o=O[pe],Y.writeUInt16(o);for(ye=0,G=h.length;ye<G;ye++)l=h[ye],Y.writeUInt16(l);for(Ne=0,K=Z.length;Ne<K;Ne++)E=Z[Ne],Y.writeUInt16(E);for(je=0,ne=d.length;je<ne;je++)_=d[je],Y.writeUInt16(_);return{charMap:n,subtable:Y.data,maxGlyphID:T+1}}},e}(),b0=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,o;for(t.pos=this.offset,this.version=t.readUInt16(),o=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=o?n<o:n>o;n=0<=o?++n:--n)r=new fh(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,o;return r==null&&(r="macroman"),n=fh.encode(t,r),(o=new Di).writeUInt16(0),o.writeUInt16(1),n.table=o.data.concat(n.subtable),n},e}(),bv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),xv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),wv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var a;for(n=t.readUInt16(),this.glyphNameIndex=[],a=0;0<=n?a<n:a>n;a=0<=n?++a:--a)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)r=t.readByte(),o.push(this.names.push(t.readString(r)));return o;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var c,l,h;for(h=[],a=c=0,l=this.file.maxp.numGlyphs;0<=l?c<l:c>l;a=0<=l?++c:--c)h.push(t.readUInt32());return h}).call(this)}},e}(),yv=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},Sv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,o,a,c,l,h,f,p,x,S;for(t.pos=this.offset,t.readShort(),r=t.readShort(),l=t.readShort(),n=[],a=0;0<=r?a<r:a>r;a=0<=r?++a:--a)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+l+t.readShort()});for(h={},a=p=0,x=n.length;p<x;a=++p)o=n[a],t.pos=o.offset,f=t.readString(o.length),c=new yv(f,o),h[S=o.nameID]==null&&(h[S]=[]),h[o.nameID].push(c);this.strings=h,this.copyright=h[0],this.fontFamily=h[1],this.fontSubfamily=h[2],this.uniqueSubfamily=h[3],this.fontName=h[4],this.version=h[5];try{this.postscriptName=h[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=h[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=h[7],this.manufacturer=h[8],this.designer=h[9],this.description=h[10],this.vendorUrl=h[11],this.designerUrl=h[12],this.license=h[13],this.licenseUrl=h[14],this.preferredFamily=h[15],this.preferredSubfamily=h[17],this.compatibleFull=h[18],this.sampleText=h[19]},e}(),_v=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),Cv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,o,a,c,l,h;for(t.pos=this.offset,this.metrics=[],r=0,l=this.file.hhea.numberOfMetrics;0<=l?r<l:r>l;r=0<=l?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(o=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,p;for(p=[],r=f=0;0<=o?f<o:f>o;r=0<=o?++f:--f)p.push(t.readInt16());return p}(),this.widths=(function(){var f,p,x,S;for(S=[],f=0,p=(x=this.metrics).length;f<p;f++)a=x[f],S.push(a.advance);return S}).call(this),n=this.widths[this.widths.length-1],h=[],r=c=0;0<=o?c<o:c>o;r=0<=o?++c:--c)h.push(this.widths.push(n));return h},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),x0=[].slice,Av=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,o,a,c,l,h,f,p,x;return t in this.cache?this.cache[t]:(a=this.file.loca,r=this.file.contents,n=a.indexOf(t),(o=a.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,c=(l=new Di(r.read(o))).readShort(),f=l.readShort(),x=l.readShort(),h=l.readShort(),p=l.readShort(),this.cache[t]=c===-1?new Lv(l,f,x,h,p):new kv(l,c,f,x,h,p),this.cache[t]))},e.prototype.encode=function(t,r,n){var o,a,c,l,h;for(c=[],a=[],l=0,h=r.length;l<h;l++)o=t[r[l]],a.push(c.length),o&&(c=c.concat(o.encode(n)));return a.push(c.length),{table:c,offsets:a}},e}(),kv=function(){function e(t,r,n,o,a,c){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=o,this.xMax=a,this.yMax=c,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),Lv=function(){function e(t,r,n,o,a){var c,l;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=o,this.yMax=a,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],c=this.raw;l=c.readShort(),this.glyphOffsets.push(c.pos),this.glyphIDs.push(c.readUInt16()),32&l;)c.pos+=1&l?4:2,128&l?c.pos+=8:64&l?c.pos+=4:8&l&&(c.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new Di(x0.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),Nv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return qn(e,In),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=2)a.push(2*t.readUInt16());return a}).call(this):(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=4)a.push(t.readUInt32());return a}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),o=0,a=0,c=0;c<n.length;++c)if(n[c]=o,a<r.length&&r[a]==c){++a,n[c]=o;var l=this.offsets[c],h=this.offsets[c+1]-l;h>0&&(o+=h)}for(var f=new Array(4*n.length),p=0;p<n.length;++p)f[4*p+3]=255&n[p],f[4*p+2]=(65280&n[p])>>8,f[4*p+1]=(16711680&n[p])>>16,f[4*p]=(4278190080&n[p])>>24;return f},e}(),Iv=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,o,a;for(r in o=this.font.cmap.tables[0].codeMap,t={},a=this.subset)n=a[r],t[r]=o[n];return t},e.prototype.glyphsFor=function(t){var r,n,o,a,c,l,h;for(o={},c=0,l=t.length;c<l;c++)o[a=t[c]]=this.font.glyf.glyphFor(a);for(a in r=[],o)(n=o[a])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(a in h=this.glyphsFor(r))n=h[a],o[a]=n;return o},e.prototype.encode=function(t,r){var n,o,a,c,l,h,f,p,x,S,d,w,_,k,y;for(o in n=b0.encode(this.generateCmap(),"unicode"),c=this.glyphsFor(t),d={0:0},y=n.charMap)d[(h=y[o]).old]=h.new;for(w in S=n.maxGlyphID,c)w in d||(d[w]=S++);return p=function(j){var T,E;for(T in E={},j)E[j[T]]=T;return E}(d),x=Object.keys(p).sort(function(j,T){return j-T}),_=function(){var j,T,E;for(E=[],j=0,T=x.length;j<T;j++)l=x[j],E.push(p[l]);return E}(),a=this.font.glyf.encode(c,_,d),f=this.font.loca.encode(a.offsets,_),k={cmap:this.font.cmap.raw(),glyf:a.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(k["OS/2"]=this.font.os2.raw()),this.font.directory.encode(k)},e}();Ge.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,o,a,c;if(Array.isArray(r))return"["+function(){var l,h,f;for(f=[],l=0,h=r.length;l<h;l++)n=r[l],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(o in a=["<<"],r)c=r[o],a.push("/"+o+" "+t.convert(c));return a.push(">>"),a.join(`
`)}return""+r},t}();const Pv=["ab67616d000082c1","ab67616d0000b273"];async function Ev(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function Tv(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function jv(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=Tv(e);if(!t)return e;for(const r of Pv){const n=`https://i.scdn.co/image/${r}${t}`;if(await Ev(n))return n}return e}function Rv(e){return Et({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function Mv(e){return Et({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const Ov=q.div`
    width: 80%;
    margin-inline: auto;
`,Fv=q.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,Dv=q(e2)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,Bv=q.h3`
    font-size: 1.3em;
    font-weight: bold;
`,zv=q.div`
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
`,Uv=q.img`
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
`,qv=q.div`
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
`,Hv=q(g2)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?sr`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,$v=q.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Vv=q.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,dh=q.div`
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
`,Wv=q.div`
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
`,Gv=q.div`
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
`,Yv=q.div`
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
`,ph=q.button`
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
`,Jv=q.textarea`
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
`,Qv=q.div`
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
`,Zl=q.div`
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
`,Kl=q.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`;q(xm)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;const Xv=q(Rv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,Zv=q(Mv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,Kv=q(Hp)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Pu`
                  animation: ${sr`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Pu`
                  animation: ${sr`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,e8=q.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,t8=q.p`
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
`,$c=F.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:o},a)=>{const{t:c}=fr(),l=F.useRef(null),h=F.useRef(null),[f,p]=F.useState(""),[x,S]=F.useState(""),[d,w]=F.useState("200"),[_,k]=F.useState("110"),[y,j]=F.useState("50"),[T,E]=F.useState((n==null?void 0:n.marginTop)??""),[V,Z]=F.useState(160),[te,W]=F.useState((n==null?void 0:n.marginCover)??0),[D,X]=F.useState((n==null?void 0:n.marginBackground)??0),[N,O]=F.useState("#5900ff"),[J,Y]=F.useState("#ff9100"),[ae,he]=F.useState("#ff0000"),[fe,se]=F.useState("#00ff40"),[me,Ie]=F.useState("#2600ff"),[_e,P]=F.useState(!0),[H,G]=F.useState((n==null?void 0:n.useFade)??!0),[K,ne]=F.useState((n==null?void 0:n.showTracklist)??!1),[ce,pe]=F.useState(""),[de,ye]=F.useState(""),[Ne,je]=F.useState(""),[Te,ve]=F.useState(null),[$,pt]=F.useState("information");function ot(ge){Ze(!0),p(ge.albumName||""),S(ge.artistsName||""),w(ge.titleSize||"200"),k(ge.artistsSize||"110"),j(ge.tracksSize||"50"),E(ge.marginTop||""),Z(ge.marginSide||160),W(ge.marginCover||0),X(ge.marginBackground||0),O(ge.backgroundColor||"#5900ff"),Y(ge.textColor||"#ff9100"),he(ge.color1||"#ff0000"),se(ge.color2||"#00ff40"),Ie(ge.color3||"#2600ff"),P(ge.useWatermark!==void 0?ge.useWatermark:!0),G(ge.useFade!==void 0?ge.useFade:!0),ne(ge.showTracklist!==void 0?ge.showTracklist:!1),ke(ge.useUncompressed!==void 0?ge.useUncompressed:!1),pe(ge.albumCover||""),ye(ge.uncompressedAlbumCover||""),je(ge.customFont||""),Ue(ge.tracklist||""),et(ge.titleRelease||""),_t(ge.releaseDate||""),qe(ge.titleRuntime||""),He(ge.runtime||""),Or()}F.useEffect(()=>{if(Te){const ge=new FileReader;ge.onload=async wt=>{const Yt="CustomFont",dn=new FontFace(Yt,wt.target.result);try{const Br=await dn.load();document.fonts.add(Br),je(Yt)}catch(Br){console.error("Erro ao carregar fonte:",Br)}},ge.readAsArrayBuffer(Te)}},[Te]),F.useEffect(()=>{o&&ot(o)},[o]);const[Ye,ke]=F.useState(!1),[Ve,Re]=F.useState("Original"),[Ke,Ue]=F.useState(""),[vt,et]=F.useState(""),[rt,_t]=F.useState(""),[at,qe]=F.useState(""),[Xe,He]=F.useState(""),[Tt,bt]=F.useState(!1),[De,st]=F.useState(null),[xt,Qe]=F.useState(null),[mt,nt]=F.useState(!1),[Ht,Kt]=F.useState(!1),[Lt,Ze]=F.useState(!1),Ct=ge=>{w(ge.target.value),nt(!0)},Hn=(ge,wt)=>{wt&&!Ht?(w(ge),Kt(!0)):mt||w(ge)},br={albumCover:ce,uncompressedAlbumCover:de,useUncompressed:Ye,albumName:f,artistsName:x,titleSize:d,artistsSize:_,tracksSize:y,marginTop:T,marginSide:V,marginCover:te,marginBackground:D,titleRelease:vt,releaseDate:rt,titleRuntime:at,runtime:Xe,backgroundColor:N,textColor:J,useWatermark:_e,useFade:H,showTracklist:K,tracklist:Ke,color1:ae,color2:fe,color3:me,albumID:e,userAdjustedTitleSize:mt,initialTitleSizeSet:Ht},[Mr,un]=F.useState(null),[Je,hn]=F.useState(!1),[yn,Ar]=F.useState(!1),[Hr,Bt]=F.useState(!1),[lr,cr]=F.useState(!1),[$n,fn]=F.useState(!1);F.useEffect(()=>{if(Je){Ar(!1);const ge=setTimeout(()=>{fn(!0)},100);return()=>clearTimeout(ge)}else fn(!1)},[Je]);const Yr=ge=>{un(ge),hn(!1),cr(!1),a5(f,x),setTimeout(()=>{fn(!1),setTimeout(()=>{Ar(!0)},300)},100)},Or=()=>{nt(!1),Ar(!1),requestAnimationFrame(()=>{if(cr(!0),hn(!0),l.current){const ge=l.current.getBoundingClientRect(),wt=ge.top+window.scrollY,Yt=ge.height,Br=(window.innerHeight-Yt)/2;window.scrollTo({top:wt-Br,behavior:"smooth"})}})},Jr=ge=>{pe(URL.createObjectURL(ge)),ke(!1),ye(""),Re(ge.name),Ze(!1)},Fr=()=>{if(!Mr)return;const ge=document.createElement("a");ge.href=Mr,ge.download=`Posterfy - ${f}.png`,ge.click(),Du(f,"poster",x)},Dr=()=>{if(!h.current)return;const ge=h.current.getCanvas();if(!ge)return;const wt=new Ge({orientation:"portrait",unit:"mm",format:"a4",compress:!1}),Yt=ge.toDataURL("image/jpeg",1);wt.addImage(Yt,"JPEG",0,0,210,297,void 0,"FAST"),wt.save(`Posterfy - ${f}.pdf`),Du(f,"poster_pdf",x)};function Qr(ge,wt){st(ge),Qe(wt),bt(!0)}function Xr(){bt(!1)}const Vn=()=>{const wt=Ke.split(`
`).map(Yt=>Yt.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());Ue(wt.join(`
`))},fi=()=>{const wt=Ke.split(`
`).map(Yt=>Yt.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());Ue(wt.join(`
`))};async function di(ge,wt="us"){var Yt;try{let dn=`https://itunes.apple.com/search?term=${encodeURIComponent(ge)}&country=${wt}&entity=album&limit=1`,Br=await fetch(dn);if(!Br.ok)throw new Error(`HTTP Error: ${Br.status}`);let kr=await Br.json();if(!((Yt=kr.results)!=null&&Yt.length))return console.warn("No album data found."),ke(!1),!1;let Lr=kr.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Lr.length===2?`https://a5.mzstatic.com/us/r1000/0/${Lr[1].split("/").slice(0,-1).join("/")}`:""}catch(dn){return console.error("Error fetching album cover:",dn.message),""}}return F.useEffect(()=>{et(c("EDITOR_ReleaseTitle")),qe(c("EDITOR_RuntimeTitle"))},[c]),F.useEffect(()=>{const ge=async()=>{var wt;try{const pi=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Lr=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${pi}`}})).json(),mi=Lr.artists.map(jt=>jt.name).join(", ");p(Lr.name),S(mi);const vo=(wt=Lr.images[0])==null?void 0:wt.url,Bi=await jv(vo);pe(Bi),_t(Lr.release_date);const Wn=await di(Lr.name+" "+mi);ye(Wn||Bi);const qo=Lr.tracks.items.reduce((jt,En)=>jt+En.duration_ms,0),Vt=Math.floor(qo/1e3),zi=Math.floor(Vt/60),Ui=Math.floor(zi/60),pn=Vt%60,Pn=zi%60,Zr=Ui>0?`${Ui}h ${Pn}min ${pn}s`:`${Pn}min ${pn}s`;He(Zr);const Gn=Lr.tracks.items.map((jt,En)=>(En===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&ne(!0),`${En+1}. ${jt.name}`));Ue(Gn.join(`
`)),Bt(!0)}catch(Yt){console.error("Error trying to fetch album data:",Yt)}};o?(ot(o),Bt(!0)):(Ze(!1),ge())},[e]),F.useEffect(()=>{const ge=wt=>{wt.ctrlKey&&wt.key==="s"?(wt.preventDefault(),Or()):wt.ctrlKey&&wt.shiftKey&&wt.key==="D"?(wt.preventDefault(),Dr()):wt.ctrlKey&&wt.key==="d"&&(wt.preventDefault(),Fr())};return window.addEventListener("keydown",ge),()=>{window.removeEventListener("keydown",ge)}},[Mr,f,Fr]),v.jsx(v.Fragment,{children:Hr?v.jsxs(Ov,{ref:a,children:[v.jsx(b2.Palette,{src:ce,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:ge})=>(F.useEffect(()=>{ge&&ge.length>0&&!Lt&&(O(ge[0]),Y(ge[1]),he(ge[2]),se(ge[3]),Ie(ge[4]),Or())},[ge]),null)}),v.jsxs(Fv,{onClick:t,children:[v.jsx(Dv,{}),v.jsx(Bv,{children:c("GoBack")})]}),v.jsxs(zv,{children:[v.jsx(N2,{ref:h,onImageReady:Yr,posterData:br,generatePoster:Je,onTitleSizeAdjust:Hn,customFont:Ne}),v.jsxs(qv,{children:[Mr?v.jsx(Uv,{src:Mr,ref:l,visible:yn}):v.jsx(e8,{ref:l}),v.jsx(Hv,{visible:$n})]}),v.jsxs($v,{children:[v.jsx(Ut,{animationDelay:50,children:v.jsxs(Vv,{children:[v.jsx(dh,{$active:$==="information",onClick:()=>pt("information"),children:c("EDITOR_InformationTab")}),v.jsx(dh,{$active:$==="tracklist",onClick:()=>pt("tracklist"),children:c("EDITOR_TracklistTab")})]})}),$==="information"?v.jsxs(Wv,{children:[v.jsx(Ut,{animationDelay:0,children:v.jsx(ii,{title:c("EDITOR_AlbumName"),value:f,onChange:ge=>p(ge.target.value)})}),v.jsx(Ut,{animationDelay:50,children:v.jsx(ii,{title:c("EDITOR_ArtistName"),value:x,onChange:ge=>S(ge.target.value)})}),v.jsx(Ut,{animationDelay:100,children:v.jsx(ii,{title:c("EDITOR_TitleSize"),value:d,onChange:Ct})}),v.jsx(Ut,{animationDelay:150,children:v.jsx(ii,{title:c("EDITOR_ArtistSize"),value:_,onChange:ge=>k(ge.target.value)})}),v.jsx(Ut,{animationDelay:200,children:v.jsx(ii,{title:c("EDITOR_TracksSize"),value:y,onChange:ge=>j(ge.target.value)})}),v.jsx(Ut,{animationDelay:250,children:v.jsx(ii,{title:c("EDITOR_MarginTop"),value:T,onChange:ge=>E(ge.target.value)})}),v.jsx(Ut,{animationDelay:300,children:v.jsx(ii,{title:c("EDITOR_MarginSide"),value:V,onChange:ge=>Z(ge.target.value)})}),v.jsx(Ut,{animationDelay:350,children:v.jsx(ii,{title:c("EDITOR_MarginCover"),value:te,onChange:ge=>W(ge.target.value)})}),v.jsx(Ut,{animationDelay:375,children:v.jsx(ii,{title:c("EDITOR_MarginBackground"),value:D,onChange:ge=>X(ge.target.value)})}),v.jsx(Ut,{animationDelay:400,children:v.jsx($u,{title:vt,value:rt,onChangeTitle:ge=>et(ge.target.value),onChangeDate:ge=>_t(ge.target.value)})}),v.jsx(Ut,{animationDelay:450,children:v.jsx($u,{title:at,value:Xe,onChangeTitle:ge=>qe(ge.target.value),onChangeDate:ge=>He(ge.target.value)})}),v.jsx(Ut,{animationDelay:500,children:v.jsx(pa,{title:c("EDITOR_BackgroundColor"),value:N,onClick:ge=>Qr(ge,"backgroundColor")})}),v.jsx(Ut,{animationDelay:550,children:v.jsx(pa,{title:c("EDITOR_TextColor"),value:J,onClick:ge=>Qr(ge,"textColor")})}),v.jsx(Ut,{animationDelay:600,children:v.jsx(pa,{title:`${c("EDITOR_Color")} 1`,value:ae,onClick:ge=>Qr(ge,"color1")})}),v.jsx(Ut,{animationDelay:650,children:v.jsx(pa,{title:`${c("EDITOR_Color")} 2`,value:fe,onClick:ge=>Qr(ge,"color2")})}),v.jsx(Ut,{animationDelay:700,children:v.jsx(pa,{title:`${c("EDITOR_Color")} 3`,value:me,onClick:ge=>Qr(ge,"color3")})}),v.jsx(Ut,{animationDelay:750,children:v.jsx(cs,{title:c("EDITOR_Watermark"),value:_e,onChange:ge=>P(ge),text:c("EDITOR_WatermarkText")})}),v.jsx(Ut,{animationDelay:800,children:v.jsx(cs,{title:c("EDITOR_Fade"),value:H,onChange:ge=>G(ge),text:c("EDITOR_FadeText")})}),v.jsx(Ut,{animationDelay:850,children:v.jsx(cs,{title:c("EDITOR_Uncompressed"),value:Ye,onChange:ge=>ke(ge),text:c("EDITOR_UncompressedText")})}),v.jsx(Ut,{animationDelay:900,children:v.jsx(cs,{title:c("EDITOR_Tracklist"),value:K,onChange:ge=>ne(ge),text:c("EDITOR_TracklistText")})}),v.jsx(Ut,{animationDelay:950,children:v.jsx(Qg,{title:c("EDITOR_Cover"),onChange:Jr,text:Ve})}),v.jsx(Ut,{animationDelay:1e3,children:v.jsx(n3,{title:c("EDITOR_Font"),text:(Te==null?void 0:Te.name)||c("EDITOR_DefaultFont"),onChange:ve})})]}):v.jsxs(Gv,{children:[v.jsx(Jv,{value:Ke,onChange:ge=>Ue(ge.target.value),placeholder:c("EDITOR_TracklistPlaceholder"),"data-lenis-prevent":!0}),v.jsxs(Yv,{children:[v.jsx(ph,{onClick:Vn,children:c("EDITOR_RemoveParentheses")}),v.jsx(ph,{onClick:fi,children:c("EDITOR_RemoveBrackets")})]})]}),v.jsx(Ut,{animationDelay:1050,children:v.jsxs(Qv,{children:[v.jsxs(Zl,{onClick:Fr,children:[v.jsx(Zv,{}),v.jsx(Kl,{children:"PNG"})]}),v.jsxs(Zl,{onClick:Dr,children:[v.jsx(Xv,{}),v.jsx(Kl,{children:"PDF"})]}),v.jsxs(Zl,{apply:!0,onClick:Or,children:[v.jsx(Kv,{$spinning:lr}),v.jsx(Kl,{children:c("EDITOR_Apply")})]})]})}),v.jsx(Ut,{animationDelay:1100,children:v.jsxs(t8,{children:["Ctrl+S: ",c("EDITOR_Apply")," • Ctrl+D: PNG • Ctrl+Shift+D: PDF"]})})]})]}),Tt&&De&&xt&&df.createPortal(v.jsx(Og,{DefaultColor:xt==="backgroundColor"?N:xt==="textColor"?J:xt==="color1"?ae:xt==="color2"?fe:me,image:ce,predefinedColors:[ae,fe,me,N,J],onDone:ge=>{switch(xt){case"backgroundColor":O(ge);break;case"textColor":Y(ge);break;case"color1":he(ge);break;case"color2":se(ge);break;case"color3":Ie(ge);break}Xr()},position:De,onClose:Xr}),document.body)]}):v.jsx(v2,{})})});$c.displayName="PosterEditor";const r8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},n8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},i8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const o=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),v.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},o8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},a8=q.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,s8=q(e2)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,l8=q.h3`
  font-size: 1.3em;
  font-weight: bold;
`,Vc=sr`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,c8=q.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${Vc} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,xs=q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${Vc} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,ws=q.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${Vc} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,u8=q.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,h8=q.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function f8({onSelectModel:e,onBack:t}){const{t:r}=fr(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},o={marginCover:160,useFade:!1,marginTop:20},a={marginCover:-1100,marginBackground:-1200,useFade:!1},c={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function l(f,p){o5("select_model","ModelSelector",f),e&&e(f,p)}const h=[0,.08,.16,.24];return v.jsxs(v.Fragment,{children:[v.jsxs(a8,{onClick:t,children:[v.jsx(s8,{}),v.jsx(l8,{children:r("GoBack")})]}),v.jsx(u8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),v.jsx(h8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),v.jsxs(c8,{children:[v.jsxs(xs,{delay:h[0],onClick:()=>l("standart",c),children:[v.jsx(r8,{width:200}),v.jsx(ws,{delay:h[0],children:"Standard"})]}),v.jsxs(xs,{delay:h[1],onClick:()=>l("frame",o),children:[v.jsx(o8,{width:200}),v.jsx(ws,{delay:h[1],children:"Frame"})]}),v.jsxs(xs,{delay:h[2],onClick:()=>l("basic",n),children:[v.jsx(n8,{width:200}),v.jsx(ws,{delay:h[2],children:"Basic"})]}),v.jsxs(xs,{delay:h[3],onClick:()=>l("fullcover",a),children:[v.jsx(i8,{width:200}),v.jsx(ws,{delay:h[3],children:"Full Cover"})]})]})]})}const d8=q.div`
    width: 100%;
`,p8=q.div`
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
`,m8=q(Z5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,g8=q(h5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,v8=q.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,b8=q.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function x8({onSearch:e,value:t=""}){const{t:r}=fr(),[n,o]=F.useState(t);F.useEffect(()=>{o(t)},[t]);const a=h=>{h.key==="Enter"&&(e(n),n.trim()&&Bu(n.trim()))},c=h=>{o(h.target.value)},l=()=>{e(n),n.trim()&&Bu(n.trim())};return v.jsx(d8,{children:v.jsxs(p8,{role:"search","aria-label":"Album search for poster creation",children:[v.jsx(m8,{"aria-hidden":"true"}),v.jsx(v8,{}),v.jsx(b8,{placeholder:r("SearchPlaceholder"),value:n,onChange:c,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),v.jsx(g8,{onClick:l,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const w8=q.div`
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

`,y8=q.img`
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
`,S8=q.h3`
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
`,_8=q.p`
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
`,C8=q.div`
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
`;function A8({title:e,artist:t,cover:r,id:n,onClick:o,animationDelay:a=0}){const[c,l]=F.useState(!1);return F.useEffect(()=>{const h=setTimeout(()=>{l(!0)},a);return()=>clearTimeout(h)},[a]),v.jsxs(w8,{onClick:()=>o(n),visible:c,children:[v.jsx(y8,{src:r}),v.jsxs(C8,{children:[v.jsx(S8,{children:e}),v.jsx(_8,{children:t})]})]})}const k8=q.div`
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
`,L8=q.button`
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
`,N8=q.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;function mh({query:e,onclick:t}){const{t:r}=fr(),[n,o]=F.useState([]),[a,c]=F.useState(""),[l,h]=F.useState(0),[f,p]=F.useState(!0),[x,S]=F.useState(!1),[d,w]=F.useState(!1),_=20;F.useEffect(()=>{(async()=>{const V=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();c(V.access_token)})()},[]),F.useEffect(()=>{o([]),h(0),p(!0)},[e]),F.useEffect(()=>{const y=async(j=!1)=>{if(a){j?w(!0):S(!0);try{let T;const E=j?l:0;if(e?T=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${_}&offset=${E}`,{headers:{Authorization:`Bearer ${a}`}}):T=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${E}&limit=${_}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!T.ok){const X=await T.text();throw new Error(`Erro na API: ${X}`)}const V=await T.json(),te=V.albums.items.filter(X=>X!=null).map(X=>{var N,O;return{id:X.id,title:X.name,artist:(N=X.artists)==null?void 0:N.map(J=>J.name).join(", "),cover:(O=X.images[0])==null?void 0:O.url}});o(j?X=>[...X,...te]:te);const W=V.albums.total,D=j?n.length+te.length:te.length;p(D<W&&te.length===_)}catch(T){console.error(T)}finally{S(!1),w(!1)}}};a&&(n.length===0||l===0)&&y(!1)},[e,a]);const k=async()=>{if(!a||!f||d)return;const y=l+_;h(y);try{w(!0);let j;if(e?j=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${_}&offset=${y}`,{headers:{Authorization:`Bearer ${a}`}}):j=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${y}&limit=${_}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!j.ok){const W=await j.text();throw new Error(`Erro na API: ${W}`)}const T=await j.json(),V=T.albums.items.filter(W=>W!=null).map(W=>{var D,X;return{id:W.id,title:W.name,artist:(D=W.artists)==null?void 0:D.map(N=>N.name).join(", "),cover:(X=W.images[0])==null?void 0:X.url}});o(W=>[...W,...V]);const Z=T.albums.total,te=n.length+V.length;p(te<Z&&V.length===_)}catch(j){console.error(j)}finally{w(!1)}};return v.jsx(v.Fragment,{children:x&&n.length===0?v.jsx(v2,{}):v.jsxs(v.Fragment,{children:[v.jsx(k8,{children:n.map((y,j)=>v.jsx(A8,{onClick:()=>t(y.id),cover:y.cover,title:y.title,artist:y.artist,id:y.id,animationDelay:j-l*100},y.id))}),f&&v.jsx(N8,{children:v.jsx(L8,{onClick:k,disabled:d,children:r(d?"LoadingMore":"LoadMore")})})]})})}const I8=({onBack:e})=>{const[t,r]=F.useState(""),[n,o]=F.useState(null),[a,c]=F.useState(!1),[l,h]=F.useState(null),[f,p]=F.useState(null),x=F.useRef(null);F.useEffect(()=>{a&&n&&x.current&&setTimeout(()=>{x.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[a,n]);function S(_){o(_),c(!0),h(null),p(null)}function d(){o(null),c(!1),h(null),p(null),e&&e()}const w=_=>{r(_)};return n&&l&&f?v.jsx($c,{albumID:n,handleClickBack:d,model:l,modelParams:f,source:"search_creation"}):n&&a?v.jsx("div",{ref:x,children:v.jsx(f8,{onSelectModel:(_,k)=>{h(_),p(k),c(!1)},onBack:d})}):v.jsxs(v.Fragment,{children:[v.jsx(x8,{onSearch:w,value:t}),t.trim()?v.jsx(mh,{query:t,onclick:S}):v.jsx("div",{children:v.jsx(mh,{onclick:S})})]})},ao=q.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function P8({loadingComplete:e}){const{t}=fr(),[r,n]=F.useState(null),o=F.useRef(null),[a,c]=Oi(),[l,h]=Oi(),[f,p]=Oi(),[x,S]=Oi(),[d,w]=Oi(),[_,k]=Oi(),[y,j]=Oi(),T=V=>{c5(V.albumName||"Unknown Album",V.artistsName||"Unknown Artist",V.albumID||"","album_collection"),n(V),setTimeout(()=>{if(o.current){const Z=o.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:Z,behavior:"smooth"})}},100)},E=()=>{n(null)};return v.jsxs(v.Fragment,{children:[v.jsx(fm,{showAnimation:e,onRecreate:T}),v.jsx(ao,{ref:a,$isVisible:c,children:v.jsx(Ia,{text:t("anchorArt"),type:1})}),v.jsx(ao,{ref:l,$isVisible:h,children:v.jsx(Lc,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),v.jsx(ao,{ref:f,$isVisible:p,children:r?v.jsx($c,{ref:o,albumID:r.albumID,initialPosterJson:r,handleClickBack:E}):v.jsx(I8,{})}),v.jsx(ao,{ref:x,$isVisible:S,children:v.jsx(zm,{})}),v.jsx(ao,{ref:d,$isVisible:w,children:v.jsx(Rm,{})}),v.jsx(ao,{ref:_,$isVisible:k,children:v.jsx(Nm,{})}),v.jsx(ao,{ref:y,$isVisible:j,children:v.jsx(Zm,{})})]})}function w0(e){return Et({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const gh=q.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,vh=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,bh=q.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,E8=q.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,T8=q.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,xh=q.button`
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
`,wh=q.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,j8=q(o2)`
    width: 20px;
    height: 20px;
`,R8=q(w0)`
    width: 20px;
    height: 20px;
`,M8=q.div`
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
`,yh=q.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,O8=q.p`
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
`;const F8=q.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,D8=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,B8=q.div`
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
`,z8=q.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function U8(){const{t:e}=fr(),t=fo(),[r]=Hd(),{user:n,loading:o,loginWithGoogle:a,loginWithSpotify:c}=Na();if(F.useEffect(()=>{if(!o){if(n){t("/dashboard");return}r.get("login")==="success"&&t("/dashboard")}},[n,o,t,r]),o)return v.jsxs(gh,{children:[v.jsx(Es,{iconColor:"var(--AccentColor)"}),v.jsxs(vh,{children:[v.jsx(ci,{fill:"var(--textColor)",width:"100px"}),v.jsx(bh,{children:e("Loading")})]})]});const l=()=>{t("/")};return v.jsxs(gh,{children:[v.jsx(Es,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),v.jsx(vh,{children:v.jsxs(F8,{children:[v.jsx(B8,{onClick:l,children:v.jsx(ci,{fill:"var(--textColor)",width:"25vw"})}),v.jsxs(D8,{children:[v.jsx(z8,{children:v.jsx(ci,{fill:"var(--textColor)",width:"90px"})}),v.jsx(bh,{children:e("LOGIN_Welcome")}),v.jsx(E8,{children:e("LOGIN_JoinCommunity")}),v.jsxs(T8,{children:[v.jsxs(xh,{onClick:a,children:[v.jsx(j8,{}),v.jsx(wh,{children:e("LOGIN_GoogleSignIn")})]}),v.jsxs(M8,{children:[v.jsx(yh,{}),v.jsx(O8,{children:e("LOGIN_Or")}),v.jsx(yh,{})]}),v.jsxs(xh,{onClick:c,children:[v.jsx(R8,{}),v.jsx(wh,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function q8(e){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const H8=sr`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,$8=sr`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,V8=sr`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,W8=sr`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,G8=q.div`
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
    animation: ${e=>e.isClosing?W8:V8} 0.3s ease-in-out forwards;
`,Y8=q.div`
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
    animation: ${e=>e.isClosing?$8:H8} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,J8=q.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Q8=q.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,X8=q(t2)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Z8=q.div`
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
`,K8=q.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,eb=q.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,tb=q.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Sh=q.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,_h=q.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,Ch=q.input`
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
`,rb=q.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,nb=q.button`
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
`,ib=q.button`
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
`,ob=q.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function ab({isOpen:e,onClose:t,onProfileUpdate:r}){const{user:n,updateUser:o}=Na(),{t:a}=fr(),[c,l]=F.useState({name:"",username:""}),[h,f]=F.useState({}),[p,x]=F.useState(!1),[S,d]=F.useState(""),[w,_]=F.useState(!1);F.useEffect(()=>{n&&l({name:n.name||"",username:n.username||""})},[n]);const k=()=>{const E={};return c.name.trim()||(E.name=a("NameIsRequired")),c.username.trim()?c.username.length<3?E.username=a("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(E.username=a("UsernameFormat")):E.username=a("UsernameIsRequired"),f(E),Object.keys(E).length===0},y=E=>{const{name:V,value:Z}=E.target;l(te=>({...te,[V]:Z})),h[V]&&f(te=>({...te,[V]:""})),S&&d("")},j=async E=>{var V,Z,te,W;if(E.preventDefault(),!!k()){x(!0),d("");try{await Dn.updateUserProfile({name:c.name.trim(),username:c.username.trim()}),o({...n,name:c.name.trim(),username:c.username.trim()}),d(a("ProfileUpdatedSuccessfully")),r&&r(),setTimeout(()=>{T()},1500)}catch(D){console.error("Profile update failed:",D),(V=D.message)!=null&&V.includes("409")||(Z=D.message)!=null&&Z.includes("taken")?f({username:a("UsernameTaken")}):(te=D.message)!=null&&te.includes("400")||(W=D.message)!=null&&W.includes("invalid")?f({username:a("InvalidUsernameFormat")}):f({general:a("FailedToUpdateProfile")})}finally{x(!1)}}},T=()=>{_(!0),setTimeout(()=>{_(!1),t(),f({}),d("")},300)};return e?(document.body.style.overflow="hidden",v.jsx(G8,{isClosing:w,children:v.jsxs(Y8,{isClosing:w,children:[v.jsxs(J8,{children:[v.jsx(K8,{children:v.jsx(ci,{width:25,height:25,fill:"var(--textColor)"})}),v.jsx(Q8,{children:a("EditProfile")}),v.jsx(Z8,{onClick:T,children:v.jsx(X8,{})})]}),v.jsx(eb,{}),v.jsxs(tb,{onSubmit:j,children:[v.jsxs(Sh,{children:[v.jsx(_h,{htmlFor:"name",children:a("Name")}),v.jsx(Ch,{type:"text",id:"name",name:"name",value:c.name,onChange:y,placeholder:a("EnterYourName"),disabled:p}),h.name&&v.jsx(ec,{children:h.name})]}),v.jsxs(Sh,{children:[v.jsx(_h,{htmlFor:"username",children:a("Username")}),v.jsx(Ch,{type:"text",id:"username",name:"username",value:c.username,onChange:y,placeholder:a("EnterYourUsername"),disabled:p}),h.username&&v.jsx(ec,{children:h.username})]}),h.general&&v.jsx(ec,{children:h.general}),S&&v.jsx(ob,{children:S}),v.jsxs(rb,{children:[v.jsx(nb,{type:"button",onClick:T,disabled:p,children:a("Cancel")}),v.jsx(ib,{type:"submit",disabled:p,children:a(p?"Saving":"SaveChanges")})]})]})]})})):null}sr`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;sr`
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
`;const y0=q.div`
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
`,sb=q.div`
  position: relative;
  display: inline-block;
  &:hover ${y0} {
    opacity: 0.9;
  }
`;function Ah({text:e,children:t,delay:r=0}){const[n,o]=F.useState(!1),[a,c]=F.useState({top:0,left:0}),l=f=>{const p=f.currentTarget.getBoundingClientRect();c({top:p.top+p.height/2-17,left:p.right+15}),o(!0)},h=()=>{o(!1)};return v.jsxs(sb,{onMouseEnter:l,onMouseLeave:h,children:[v.jsx(y0,{isVisible:n,style:{top:a.top,left:a.left},children:e}),t]})}const lb=q.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,cb=q.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,ub=q.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,hb=q.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,fb=q.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,db=q.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`,kh=q.button`
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
`,Lh=q.button`
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
`;const pb=q(o2)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,mb=q(w0)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,Nh=q.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,gb=q.div`
    display: flex;
    align-items: center;
    width: 100%;
`,vb=q(q8)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,bb=q.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,xb=q.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,wb=q.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function yb(){const e=fo(),{user:t,loading:r,logout:n,isAuthenticated:o}=Na(),[a,c]=F.useState(null),[l,h]=F.useState(!1),{t:f}=fr();F.useEffect(()=>{if(!r&&!o){e("/login");return}o&&t&&p()},[o,r,e,t]);const p=async()=>{try{const _=await Dn.getUserProfile();c(_.user)}catch(_){console.error("Failed to fetch user profile:",_)}},x=async()=>{await n(),e("/login")},S=()=>{h(!0)},d=()=>{h(!1)},w=()=>{p()};return r?v.jsx(Ac,{isVisible:!0,initialFade:!0}):t?v.jsxs(lb,{children:[v.jsx(Es,{iconColor:"var(--AccentColor)"}),v.jsxs(cb,{children:[(a==null?void 0:a.avatar)&&v.jsx(hb,{src:a.avatar,alt:a.name}),v.jsxs(ub,{children:[v.jsxs(gb,{children:[v.jsx(fb,{children:(a==null?void 0:a.name)||t.name}),(a==null?void 0:a.hasGoogle)&&v.jsx(Ah,{text:f("ConnectedToGoogle"),delay:200,children:v.jsx(Nh,{children:v.jsx(pb,{})})}),(a==null?void 0:a.hasSpotify)&&v.jsx(Ah,{text:f("ConnectedToSpotify"),delay:200,children:v.jsx(Nh,{children:v.jsx(mb,{})})}),v.jsxs(xb,{children:[v.jsx(Lh,{onClick:S,children:f("EditProfile")}),v.jsx(kh,{onClick:x,children:f("Logout")})]})]}),v.jsxs(db,{children:["@",(a==null?void 0:a.username)||t.username]})]})]}),v.jsxs(wb,{children:[v.jsx(Lh,{onClick:S,children:f("EditProfile")}),v.jsx(kh,{onClick:x,children:f("Logout")})]}),v.jsx(vb,{}),v.jsx(bb,{children:f("NoActivityYet")}),v.jsx(ab,{isOpen:l,onClose:d,onProfileUpdate:w})]}):null}const Sb=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:o=!1,onClick:a})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[v.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),v.jsx("path",{fill:n,style:{animation:o?"pulse 2s infinite":"none",cursor:o?"pointer":"default"},onClick:a,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),S0=document.createElement("style");S0.textContent=`
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
`;document.head.appendChild(S0);const _b="/assets/kanye-BMPu-Gq3.png",Cb="/assets/runaway-DjODmQSR.mp3",Ab=()=>{const e=fo(),{t}=fr(),[r,n]=F.useState(0),o=F.useRef(null),[a,c]=F.useState(!1),l=()=>{n(r+1),console.log(r)},h=()=>{o.current&&(o.current.loop=!0,o.current.paused?(o.current.play(),c(!0)):(o.current.pause(),c(!1)))};return v.jsxs(kb,{playing:a,children:[v.jsx(Sb,{width:"150px",height:"150px",fillHeart:a?"#edcd6b":"var(--textColor)",fillQuestion:a?"#edcd6b":"var(--textColor)",pulse:!0,onClick:l}),v.jsxs(Eb,{children:[v.jsx(tc,{playing:a,active:r>=1}),v.jsx(tc,{playing:a,active:r>=2}),v.jsx(tc,{playing:a,active:r>=3})]}),v.jsx(Lb,{children:t("errorTitle")}),v.jsx(Nb,{children:t("errorMessage")}),v.jsx(Ib,{playing:a,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&v.jsxs(v.Fragment,{children:[v.jsx(Pb,{src:_b,alt:"Kanye",onClick:h}),v.jsx("audio",{ref:o,src:Cb})]})]})},kb=q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,Lb=q.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,Nb=q.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,Ib=q.button`
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
`,Pb=q.img`
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
`,Eb=q.div`
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
`,Tb=({children:e})=>{const t=fo(),{isAuthenticated:r,loading:n}=Na();return F.useEffect(()=>{!n&&!r&&t("/login")},[r,n,t]),n?v.jsx("div",{children:"Loading..."}):r?e:null},jb=()=>(F.useEffect(()=>{i5()},[]),null),Ih=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},Wc=()=>"https://posterfy.space"+"/",Rb=e=>{const t=Wc(),r=Ih(e),n=Ih(t),o=e.includes("://www."),a=e.startsWith("http://");return o||a||r!==n},Mb=()=>{const e=window.location.href,t=Wc(),r=[];return Rb(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},Ob=()=>(F.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const o=document.querySelector('meta[name="description"]');(!o||o.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const a=Mb();a.isValid||a.issues.forEach(h=>{r.push(`${h.type}: ${h.message}`)});const c=document.querySelector('meta[name="robots"]');return c&&c.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),Fb=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(F.useEffect(()=>{const o="https://posterfy.space",a=Wc(),c=o+"/albuns.png";document.title=e;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",t);const h=document.querySelector('meta[name="keywords"]');h&&h.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",a):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",a),document.head.appendChild(f));const p=document.querySelector('meta[property="og:title"]');p&&p.setAttribute("content",e);const x=document.querySelector('meta[property="og:description"]');x&&x.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",c);const d=document.querySelector('meta[property="og:url"]');d&&d.setAttribute("content",a);const w=document.querySelector('meta[name="twitter:title"]');w&&w.setAttribute("content",e);const _=document.querySelector('meta[name="twitter:description"]');_&&_.setAttribute("content",t);const k=document.querySelector('meta[name="twitter:image"]');k&&k.setAttribute("content",c);const y={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:o+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},j=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');j&&j.remove();const T=document.createElement("script");T.type="application/ld+json",T.id="dynamic-structured-data",T.innerHTML=JSON.stringify(y),document.head.appendChild(T)},[e,t,r]),null);var Db="1.3.14";function _0(e,t,r){return Math.max(e,Math.min(t,r))}function Bb(e,t,r){return(1-r)*e+r*t}function zb(e,t,r,n){return Bb(e,t,1-Math.exp(-r*n))}function Ub(e,t){return(e%t+t)%t}var qb=class{constructor(){Pe(this,"isRunning",!1);Pe(this,"value",0);Pe(this,"from",0);Pe(this,"to",0);Pe(this,"currentTime",0);Pe(this,"lerp");Pe(this,"duration");Pe(this,"easing");Pe(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=_0(0,this.currentTime/this.duration,1);t=n>=1;const o=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=zb(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:o,onStart:a,onUpdate:c}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function Hb(e,t){let r;return function(...n){let o=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(o,n)},t)}}var $b=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Pe(this,"width",0);Pe(this,"height",0);Pe(this,"scrollHeight",0);Pe(this,"scrollWidth",0);Pe(this,"debouncedResize");Pe(this,"wrapperResizeObserver");Pe(this,"contentResizeObserver");Pe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=Hb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},C0=class{constructor(){Pe(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let o=0,a=r.length;o<a;o++)(n=r[o])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(o=>t!==o)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Ph=100/6,Ri={passive:!1},Vb=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Pe(this,"touchStart",{x:0,y:0});Pe(this,"lastDelta",{x:0,y:0});Pe(this,"window",{width:0,height:0});Pe(this,"emitter",new C0);Pe(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Pe(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});Pe(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Pe(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const o=n===1?Ph:n===2?this.window.width:1,a=n===1?Ph:n===2?this.window.height:1;t*=o,r*=a,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Pe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ri),this.element.addEventListener("touchstart",this.onTouchStart,Ri),this.element.addEventListener("touchmove",this.onTouchMove,Ri),this.element.addEventListener("touchend",this.onTouchEnd,Ri)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ri),this.element.removeEventListener("touchstart",this.onTouchStart,Ri),this.element.removeEventListener("touchmove",this.onTouchMove,Ri),this.element.removeEventListener("touchend",this.onTouchEnd,Ri)}},Eh=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Wb=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:l,easing:h,lerp:f=.1,infinite:p=!1,orientation:x="vertical",gestureOrientation:S=x==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:w=1,autoResize:_=!0,prevent:k,virtualScroll:y,overscroll:j=!0,autoRaf:T=!1,anchors:E=!1,autoToggle:V=!1,allowNestedScroll:Z=!1,__experimental__naiveDimensions:te=!1}={}){Pe(this,"_isScrolling",!1);Pe(this,"_isStopped",!1);Pe(this,"_isLocked",!1);Pe(this,"_preventNextNativeScrollEvent",!1);Pe(this,"_resetVelocityTimeout",null);Pe(this,"__rafID",null);Pe(this,"isTouching");Pe(this,"time",0);Pe(this,"userData",{});Pe(this,"lastVelocity",0);Pe(this,"velocity",0);Pe(this,"direction",0);Pe(this,"options");Pe(this,"targetScroll");Pe(this,"animatedScroll");Pe(this,"animate",new qb);Pe(this,"emitter",new C0);Pe(this,"dimensions");Pe(this,"virtualScroll");Pe(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Pe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Pe(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Pe(this,"onClick",e=>{const r=e.composedPath().find(n=>{var o;return n instanceof HTMLAnchorElement&&((o=n.getAttribute("href"))==null?void 0:o.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.split("#")[1]}`;this.scrollTo(a,o)}}});Pe(this,"onPointerDown",e=>{e.button===1&&this.reset()});Pe(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const o=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const c=t===0&&r===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(c||h)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const p=this.options.prevent;if(f.find(k=>{var y,j,T;return k instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(k))||((y=k.hasAttribute)==null?void 0:y.call(k,"data-lenis-prevent"))||o&&((j=k.hasAttribute)==null?void 0:j.call(k,"data-lenis-prevent-touch"))||a&&((T=k.hasAttribute)==null?void 0:T.call(k,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(k,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=o&&this.options.syncTouch,_=o&&n.type==="touchend";_&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Pe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Pe(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Db,(!e||e===document.documentElement)&&(e=window),typeof l=="number"&&typeof h!="function"?h=Eh:typeof h=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:l,easing:h,lerp:f,infinite:p,gestureOrientation:S,orientation:x,touchMultiplier:d,wheelMultiplier:w,autoResize:_,prevent:k,virtualScroll:y,overscroll:j,autoRaf:T,anchors:E,autoToggle:V,allowNestedScroll:Z,__experimental__naiveDimensions:te},this.dimensions=new $b(e,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Vb(r,{touchMultiplier:d,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:o=this.options.duration,easing:a=this.options.easing,lerp:c=this.options.lerp,onStart:l,onComplete:h,force:f=!1,programmatic:p=!0,userData:x}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?w.left:w.top}const d=S.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(p){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=_0(0,e,this.limit);if(e===this.targetScroll){l==null||l(this),h==null||h(this);return}if(this.userData=x??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}p||(this.targetScroll=e),typeof o=="number"&&typeof a!="function"?a=Eh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:a,lerp:c,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(S,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),p&&(this.targetScroll=S),d||this.emit(),d&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),o=e._lenis??(e._lenis={});let a,c,l,h,f,p,x,S;const d=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();const V=window.getComputedStyle(e);o.computedStyle=V;const Z=V.overflowX,te=V.overflowY;if(a=["auto","overlay","scroll"].includes(Z),c=["auto","overlay","scroll"].includes(te),o.hasOverflowX=a,o.hasOverflowY=c,!a&&!c||d==="vertical"&&!c||d==="horizontal"&&!a)return!1;f=e.scrollWidth,p=e.scrollHeight,x=e.clientWidth,S=e.clientHeight,l=f>x,h=p>S,o.isScrollableX=l,o.isScrollableY=h,o.scrollWidth=f,o.scrollHeight=p,o.clientWidth=x,o.clientHeight=S}else l=o.isScrollableX,h=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,f=o.scrollWidth,p=o.scrollHeight,x=o.clientWidth,S=o.clientHeight;if(!a&&!c||!l&&!h||d==="vertical"&&(!c||!h)||d==="horizontal"&&(!a||!l))return!1;let w;if(d==="horizontal")w="x";else if(d==="vertical")w="y";else{const V=t!==0,Z=r!==0;V&&a&&l&&(w="x"),Z&&c&&h&&(w="y")}if(!w)return!1;let _,k,y,j,T;if(w==="x")_=e.scrollLeft,k=f-x,y=t,j=a,T=l;else if(w==="y")_=e.scrollTop,k=p-S,y=r,j=c,T=h;else return!1;return(y>0?_<k:_>0)&&j&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Ub(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Gb(){const{pathname:e}=hi(),[t,r]=F.useState(!1),[n,o]=F.useState(!1);return F.useEffect(()=>{r(!0),o(!0),window.scrollTo(0,0);const a=setTimeout(()=>{r(!1),setTimeout(()=>{o(!1)},300)},2e3);return()=>clearTimeout(a)},[e]),n?v.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:v.jsx(Ac,{isVisible:!0})}):null}function Yb(){const[e,t]=F.useState(!0),[r,n]=F.useState(!1);return u5(),F.useEffect(()=>{const o=new Wb({duration:1.2,easing:c=>Math.min(1,1.001-Math.pow(2,-10*c)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function a(c){o.raf(c),requestAnimationFrame(a)}return requestAnimationFrame(a),()=>{o.destroy()}},[]),F.useEffect(()=>Xd(),[]),F.useEffect(()=>{const o=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(o)},[]),F.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),v.jsx(Zd,{children:v.jsx(P5,{children:v.jsxs(R5,{children:[v.jsx(Fb,{}),v.jsx(Ob,{}),v.jsx(jb,{}),v.jsxs(Dd,{children:[v.jsx(Gb,{}),v.jsxs(pd,{children:[v.jsx(Mi,{path:"/",element:v.jsx(Nl,{showNavbar:!0,showFooter:!0}),children:v.jsx(Mi,{index:!0,element:v.jsx(P8,{loadingComplete:r})})}),v.jsx(Mi,{path:"/login",element:v.jsx(Nl,{showNavbar:!1,showFooter:!1}),children:v.jsx(Mi,{index:!0,element:v.jsx(U8,{})})}),v.jsx(Mi,{path:"/dashboard",element:v.jsx(Nl,{showNavbar:!0,showFooter:!0}),children:v.jsx(Mi,{index:!0,element:v.jsx(Tb,{children:v.jsx(yb,{})})})}),v.jsx(Mi,{path:"*",element:v.jsx(Ab,{})})]})]}),v.jsx(Ac,{isVisible:e})]})})})}pf.use(mf).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",FAQ_ExportHighRes_Question:"How can I export the poster in high resolution?",FAQ_ExportHighRes_Answer:"After customizing, you can export the poster in high resolution as PNG or PDF by clicking the buttons next to 'Apply'.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",NoActivityYet:"No activity yet",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving..."}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",FAQ_ExportHighRes_Question:"Como posso exportar o pôster em alta resolução?",FAQ_ExportHighRes_Answer:"Após personalizar, é possível exportar o pôster em alta resolução em PNG ou em PDF, clicando nos botões ao lado de 'Aplicar'.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando..."}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",FAQ_ExportHighRes_Question:"¿Cómo puedo exportar el póster en alta resolución?",FAQ_ExportHighRes_Answer:"Después de personalizar, puedes exportar el póster en alta resolución en PNG o PDF haciendo clic en los botones junto a 'Aplicar'.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando..."}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",FAQ_ExportHighRes_Question:"如何导出高分辨率海报？",FAQ_ExportHighRes_Answer:"自定义后，您可以通过点击'应用'旁边的按钮以PNG或PDF格式导出高分辨率海报。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中..."}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});const Th="posterfy_version",Jb=async()=>{try{const r=(await(await fetch("/version.json?t="+Date.now(),{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}})).json()).version;if(localStorage.getItem(Th)!==r){const o=["authToken","theme","language"],a={};if(o.forEach(c=>{const l=localStorage.getItem(c);l&&(a[c]=l)}),localStorage.clear(),Object.keys(a).forEach(c=>{localStorage.setItem(c,a[c])}),localStorage.setItem(Th,r),"caches"in window){const c=await caches.keys();await Promise.all(c.map(l=>caches.delete(l)))}if("serviceWorker"in navigator){const c=await navigator.serviceWorker.getRegistrations();await Promise.all(c.map(l=>l.unregister()))}window.location.reload(!0)}}catch{console.log("Version check failed, using local version")}};Jb();Mh(document.getElementById("root")).render(v.jsx(F.StrictMode,{children:v.jsx(Yb,{})}));export{Pt as _};
