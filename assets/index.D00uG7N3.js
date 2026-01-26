const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.BlWDhK84.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var hf=Object.defineProperty;var ff=(e,t,r)=>t in e?hf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ee=(e,t,r)=>ff(e,typeof t!="symbol"?t+"":t,r);import{r as F,a as df,e as Pr,c as pf,R as Ru}from"./vendor.BGNHhJSV.js";import{m as hr,d as z,G as Tt,l as Ou}from"./ui.C5ldsGQa.js";import{u as sr,i as mf,a as gf}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var Fh={exports:{}},Zs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=F,bf=Symbol.for("react.element"),xf=Symbol.for("react.fragment"),wf=Object.prototype.hasOwnProperty,yf=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sf={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,r){var n,o={},a=null,c=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)wf.call(t,n)&&!Sf.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:bf,type:e,key:a,ref:c,props:o,_owner:yf.current}}Zs.Fragment=xf;Zs.jsx=Dh;Zs.jsxs=Dh;Fh.exports=Zs;var v=Fh.exports,zh,Mu=df;zh=Mu.createRoot,Mu.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fu="popstate";function _f(e={}){function t(n,o){let{pathname:a,search:c,hash:l}=n.location;return sc("",{pathname:a,search:c,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Pa(o)}return Af(t,r,null,e)}function Wt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ln(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cf(){return Math.random().toString(36).substring(2,10)}function Du(e,t){return{usr:e.state,key:e.key,idx:t}}function sc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ko(t):t,state:r,key:t&&t.key||n||Cf()}}function Pa({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ko(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function Af(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:a=!1}=n,c=o.history,l="POP",h=null,f=d();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function d(){return(c.state||{idx:null}).idx}function x(){l="POP";let k=d(),y=k==null?null:k-f;f=k,h&&h({action:l,location:_.location,delta:y})}function S(k,y){l="PUSH";let R=sc(_.location,k,y);f=d()+1;let P=Du(R,f),O=_.createHref(R);try{c.pushState(P,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;o.location.assign(O)}a&&h&&h({action:l,location:_.location,delta:1})}function p(k,y){l="REPLACE";let R=sc(_.location,k,y);f=d();let P=Du(R,f),O=_.createHref(R);c.replaceState(P,"",O),a&&h&&h({action:l,location:_.location,delta:0})}function w(k){return kf(k)}let _={get action(){return l},get location(){return e(o,c)},listen(k){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Fu,x),h=k,()=>{o.removeEventListener(Fu,x),h=null}},createHref(k){return t(o,k)},createURL:w,encodeLocation(k){let y=w(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:S,replace:p,go(k){return c.go(k)}};return _}function kf(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Wt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Pa(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Bh(e,t,r="/"){return Lf(e,t,r,!1)}function Lf(e,t,r,n){let o=typeof t=="string"?Ko(t):t,a=mi(o.pathname||"/",r);if(a==null)return null;let c=Uh(e);Nf(c);let l=null;for(let h=0;l==null&&h<c.length;++h){let f=zf(a);l=Ff(c[h],f,n)}return l}function Uh(e,t=[],r=[],n="",o=!1){let a=(c,l,h=o,f)=>{let d={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:l,route:c};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&h)return;Wt(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let x=di([n,d.relativePath]),S=r.concat(d);c.children&&c.children.length>0&&(Wt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Uh(c.children,t,S,x,h)),!(c.path==null&&!c.index)&&t.push({path:x,score:Of(x,c.index),routesMeta:S})};return e.forEach((c,l)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))a(c,l);else for(let f of Hh(c.path))a(c,l,!0,f)}),t}function Hh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let c=Hh(n.join("/")),l=[];return l.push(...c.map(h=>h===""?a:[a,h].join("/"))),o&&l.push(...c),l.map(h=>e.startsWith("/")&&h===""?"/":h)}function Nf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Mf(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var If=/^:[\w-]+$/,Ef=3,Tf=2,Pf=1,jf=10,Rf=-2,zu=e=>e==="*";function Of(e,t){let r=e.split("/"),n=r.length;return r.some(zu)&&(n+=Rf),t&&(n+=Tf),r.filter(o=>!zu(o)).reduce((o,a)=>o+(If.test(a)?Ef:a===""?Pf:jf),n)}function Mf(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ff(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",c=[];for(let l=0;l<n.length;++l){let h=n[l],f=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",x=$s({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},d),S=h.route;if(!x&&f&&r&&!n[n.length-1].route.index&&(x=$s({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},d)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:di([a,x.pathname]),pathnameBase:qf(di([a,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(a=di([a,x.pathnameBase]))}return c}function $s(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Df(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((f,{paramName:d,isOptional:x},S)=>{if(d==="*"){let w=l[S]||"";c=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const p=l[S];return x&&!p?f[d]=void 0:f[d]=(p||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:e}}function Df(e,t=!1,r=!0){Ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,l,h)=>(n.push({paramName:l,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function zf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ln(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Bf(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ko(e):e;return{pathname:r?r.startsWith("/")?r:Uf(r,t):t,search:$f(n),hash:Vf(o)}}function Uf(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Tl(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hf(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function qh(e){let t=Hf(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function $h(e,t,r,n=!1){let o;typeof e=="string"?o=Ko(e):(o={...e},Wt(!o.pathname||!o.pathname.includes("?"),Tl("?","pathname","search",o)),Wt(!o.pathname||!o.pathname.includes("#"),Tl("#","pathname","hash",o)),Wt(!o.search||!o.search.includes("#"),Tl("#","search","hash",o)));let a=e===""||o.pathname==="",c=a?"/":o.pathname,l;if(c==null)l=r;else{let x=t.length-1;if(!n&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),x-=1;o.pathname=S.join("/")}l=x>=0?t[x]:"/"}let h=Bf(o,l),f=c&&c!=="/"&&c.endsWith("/"),d=(a||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(f||d)&&(h.pathname+="/"),h}var di=e=>e.join("/").replace(/\/\/+/g,"/"),qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$f=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Vh=["POST","PUT","PATCH","DELETE"];new Set(Vh);var Gf=["GET",...Vh];new Set(Gf);var ea=F.createContext(null);ea.displayName="DataRouter";var Qs=F.createContext(null);Qs.displayName="DataRouterState";F.createContext(!1);var Wh=F.createContext({isTransitioning:!1});Wh.displayName="ViewTransition";var Yf=F.createContext(new Map);Yf.displayName="Fetchers";var Xf=F.createContext(null);Xf.displayName="Await";var Hn=F.createContext(null);Hn.displayName="Navigation";var Ma=F.createContext(null);Ma.displayName="Location";var qn=F.createContext({outlet:null,matches:[],isDataRoute:!1});qn.displayName="Route";var Ac=F.createContext(null);Ac.displayName="RouteError";function Jf(e,{relative:t}={}){Wt(Fa(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=F.useContext(Hn),{hash:o,pathname:a,search:c}=Da(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:di([r,a])),n.createHref({pathname:l,search:c,hash:o})}function Fa(){return F.useContext(Ma)!=null}function gi(){return Wt(Fa(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Ma).location}var Gh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yh(e){F.useContext(Hn).static||F.useLayoutEffect(e)}function So(){let{isDataRoute:e}=F.useContext(qn);return e?hd():Zf()}function Zf(){Wt(Fa(),"useNavigate() may be used only in the context of a <Router> component.");let e=F.useContext(ea),{basename:t,navigator:r}=F.useContext(Hn),{matches:n}=F.useContext(qn),{pathname:o}=gi(),a=JSON.stringify(qh(n)),c=F.useRef(!1);return Yh(()=>{c.current=!0}),F.useCallback((h,f={})=>{if(Ln(c.current,Gh),!c.current)return;if(typeof h=="number"){r.go(h);return}let d=$h(h,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:di([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}var Qf=F.createContext(null);function Kf(e){let t=F.useContext(qn).outlet;return t&&F.createElement(Qf.Provider,{value:e},t)}function Da(e,{relative:t}={}){let{matches:r}=F.useContext(qn),{pathname:n}=gi(),o=JSON.stringify(qh(r));return F.useMemo(()=>$h(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function ed(e,t){return Xh(e,t)}function Xh(e,t,r,n,o){var R;Wt(Fa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=F.useContext(Hn),{matches:c}=F.useContext(qn),l=c[c.length-1],h=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",x=l&&l.route;{let P=x&&x.path||"";Jh(f,!x||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let S=gi(),p;if(t){let P=typeof t=="string"?Ko(t):t;Wt(d==="/"||((R=P.pathname)==null?void 0:R.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${P.pathname}" was given in the \`location\` prop.`),p=P}else p=S;let w=p.pathname||"/",_=w;if(d!=="/"){let P=d.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=Bh(e,{pathname:_});Ln(x||k!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ln(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=od(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:di([d,a.encodeLocation?a.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?d:di([d,a.encodeLocation?a.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),c,r,n,o);return t&&y?F.createElement(Ma.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},y):y}function td(){let e=ud(),t=Wf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:a},"ErrorBoundary")," or"," ",F.createElement("code",{style:a},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},t),r?F.createElement("pre",{style:o},r):null,c)}var rd=F.createElement(td,null),nd=class extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?F.createElement(qn.Provider,{value:this.props.routeContext},F.createElement(Ac.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function id({routeContext:e,match:t,children:r}){let n=F.useContext(ea);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),F.createElement(qn.Provider,{value:e},r)}function od(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,c=r==null?void 0:r.errors;if(c!=null){let f=a.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);Wt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,h=-1;if(r)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=f),d.route.id){let{loaderData:x,errors:S}=r,p=d.route.loader&&!x.hasOwnProperty(d.route.id)&&(!S||S[d.route.id]===void 0);if(d.route.lazy||p){l=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,d,x)=>{let S,p=!1,w=null,_=null;r&&(S=c&&d.route.id?c[d.route.id]:void 0,w=d.route.errorElement||rd,l&&(h<0&&x===0?(Jh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,_=null):h===x&&(p=!0,_=d.route.hydrateFallbackElement||null)));let k=t.concat(a.slice(0,x+1)),y=()=>{let R;return S?R=w:p?R=_:d.route.Component?R=F.createElement(d.route.Component,null):d.route.element?R=d.route.element:R=f,F.createElement(id,{match:d,routeContext:{outlet:f,matches:k,isDataRoute:r!=null},children:R})};return r&&(d.route.ErrorBoundary||d.route.errorElement||x===0)?F.createElement(nd,{location:r.location,revalidation:r.revalidation,component:w,error:S,children:y(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:n}):y()},null)}function kc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ad(e){let t=F.useContext(ea);return Wt(t,kc(e)),t}function sd(e){let t=F.useContext(Qs);return Wt(t,kc(e)),t}function ld(e){let t=F.useContext(qn);return Wt(t,kc(e)),t}function Lc(e){let t=ld(e),r=t.matches[t.matches.length-1];return Wt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function cd(){return Lc("useRouteId")}function ud(){var n;let e=F.useContext(Ac),t=sd("useRouteError"),r=Lc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function hd(){let{router:e}=ad("useNavigate"),t=Lc("useNavigate"),r=F.useRef(!1);return Yh(()=>{r.current=!0}),F.useCallback(async(o,a={})=>{Ln(r.current,Gh),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var Bu={};function Jh(e,t,r){!t&&!Bu[e]&&(Bu[e]=!0,Ln(!1,r))}F.memo(fd);function fd({routes:e,future:t,state:r,unstable_onError:n}){return Xh(e,void 0,r,n,t)}function dd(e){return Kf(e.context)}function Bi(e){Wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pd({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){Wt(!Fa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),l=F.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof r=="string"&&(r=Ko(r));let{pathname:h="/",search:f="",hash:d="",state:x=null,key:S="default"}=r,p=F.useMemo(()=>{let w=mi(h,c);return w==null?null:{location:{pathname:w,search:f,hash:d,state:x,key:S},navigationType:n}},[c,h,f,d,x,S,n]);return Ln(p!=null,`<Router basename="${c}"> is not able to match the URL "${h}${f}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:F.createElement(Hn.Provider,{value:l},F.createElement(Ma.Provider,{children:t,value:p}))}function md({children:e,location:t}){return ed(lc(e),t)}function lc(e,t=[]){let r=[];return F.Children.forEach(e,(n,o)=>{if(!F.isValidElement(n))return;let a=[...t,o];if(n.type===F.Fragment){r.push.apply(r,lc(n.props.children,a));return}Wt(n.type===Bi,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Wt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let c={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=lc(n.props.children,a)),r.push(c)}),r}var Ms="get",Fs="application/x-www-form-urlencoded";function Ks(e){return e!=null&&typeof e.tagName=="string"}function gd(e){return Ks(e)&&e.tagName.toLowerCase()==="button"}function vd(e){return Ks(e)&&e.tagName.toLowerCase()==="form"}function bd(e){return Ks(e)&&e.tagName.toLowerCase()==="input"}function xd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wd(e,t){return e.button===0&&(!t||t==="_self")&&!xd(e)}function cc(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function yd(e,t){let r=cc(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}var ds=null;function Sd(){if(ds===null)try{new FormData(document.createElement("form"),0),ds=!1}catch{ds=!0}return ds}var _d=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pl(e){return e!=null&&!_d.has(e)?(Ln(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fs}"`),null):e}function Cd(e,t){let r,n,o,a,c;if(vd(e)){let l=e.getAttribute("action");n=l?mi(l,t):null,r=e.getAttribute("method")||Ms,o=Pl(e.getAttribute("enctype"))||Fs,a=new FormData(e)}else if(gd(e)||bd(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||l.getAttribute("action");if(n=h?mi(h,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Ms,o=Pl(e.getAttribute("formenctype"))||Pl(l.getAttribute("enctype"))||Fs,a=new FormData(l,e),!Sd()){let{name:f,type:d,value:x}=e;if(d==="image"){let S=f?`${f}.`:"";a.append(`${S}x`,"0"),a.append(`${S}y`,"0")}else f&&a.append(f,x)}}else{if(Ks(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ms,n=null,o=Fs,c=e}return a&&o==="text/plain"&&(c=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ad(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&mi(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function kd(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ld(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Nd(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let c=await kd(a,r);return c.links?c.links():[]}return[]}));return Pd(n.flat(1).filter(Ld).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Uu(e,t,r,n,o,a){let c=(h,f)=>r[f]?h.route.id!==r[f].route.id:!0,l=(h,f)=>{var d;return r[f].pathname!==h.pathname||((d=r[f].route.path)==null?void 0:d.endsWith("*"))&&r[f].params["*"]!==h.params["*"]};return a==="assets"?t.filter((h,f)=>c(h,f)||l(h,f)):a==="data"?t.filter((h,f)=>{var x;let d=n.routes[h.route.id];if(!d||!d.hasLoader)return!1;if(c(h,f)||l(h,f))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Id(e,t,{includeHydrateFallback:r}={}){return Ed(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Ed(e){return[...new Set(e)]}function Td(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Pd(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let a=JSON.stringify(Td(o));return r.has(a)||(r.add(a),n.push({key:a,link:o})),n},[])}function Zh(){let e=F.useContext(ea);return Nc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function jd(){let e=F.useContext(Qs);return Nc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ic=F.createContext(void 0);Ic.displayName="FrameworkContext";function Qh(){let e=F.useContext(Ic);return Nc(e,"You must render this element inside a <HydratedRouter> element"),e}function Rd(e,t){let r=F.useContext(Ic),[n,o]=F.useState(!1),[a,c]=F.useState(!1),{onFocus:l,onBlur:h,onMouseEnter:f,onMouseLeave:d,onTouchStart:x}=t,S=F.useRef(null);F.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let _=y=>{y.forEach(R=>{c(R.isIntersecting)})},k=new IntersectionObserver(_,{threshold:.5});return S.current&&k.observe(S.current),()=>{k.disconnect()}}},[e]),F.useEffect(()=>{if(n){let _=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(_)}}},[n]);let p=()=>{o(!0)},w=()=>{o(!1),c(!1)};return r?e!=="intent"?[a,S,{}]:[a,S,{onFocus:Ca(l,p),onBlur:Ca(h,w),onMouseEnter:Ca(f,p),onMouseLeave:Ca(d,w),onTouchStart:Ca(x,p)}]:[!1,S,{}]}function Ca(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Od({page:e,...t}){let{router:r}=Zh(),n=F.useMemo(()=>Bh(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?F.createElement(Fd,{page:e,matches:n,...t}):null}function Md(e){let{manifest:t,routeModules:r}=Qh(),[n,o]=F.useState([]);return F.useEffect(()=>{let a=!1;return Nd(e,t,r).then(c=>{a||o(c)}),()=>{a=!0}},[e,t,r]),n}function Fd({page:e,matches:t,...r}){let n=gi(),{manifest:o,routeModules:a}=Qh(),{basename:c}=Zh(),{loaderData:l,matches:h}=jd(),f=F.useMemo(()=>Uu(e,t,h,o,n,"data"),[e,t,h,o,n]),d=F.useMemo(()=>Uu(e,t,h,o,n,"assets"),[e,t,h,o,n]),x=F.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,_=!1;if(t.forEach(y=>{var P;let R=o.routes[y.route.id];!R||!R.hasLoader||(!f.some(O=>O.route.id===y.route.id)&&y.route.id in l&&((P=a[y.route.id])!=null&&P.shouldRevalidate)||R.hasClientLoader?_=!0:w.add(y.route.id))}),w.size===0)return[];let k=Ad(e,c,"data");return _&&w.size>0&&k.searchParams.set("_routes",t.filter(y=>w.has(y.route.id)).map(y=>y.route.id).join(",")),[k.pathname+k.search]},[c,l,n,o,f,t,e,a]),S=F.useMemo(()=>Id(d,o),[d,o]),p=Md(d);return F.createElement(F.Fragment,null,x.map(w=>F.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),S.map(w=>F.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),p.map(({key:w,link:_})=>F.createElement("link",{key:w,nonce:r.nonce,..._})))}function Dd(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Kh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kh&&(window.__reactRouterVersion="7.8.2")}catch{}function zd({basename:e,children:t,window:r}){let n=F.useRef();n.current==null&&(n.current=_f({window:r,v5Compat:!0}));let o=n.current,[a,c]=F.useState({action:o.action,location:o.location}),l=F.useCallback(h=>{F.startTransition(()=>c(h))},[c]);return F.useLayoutEffect(()=>o.listen(l),[o,l]),F.createElement(pd,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var e2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,t2=F.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:c,state:l,target:h,to:f,preventScrollReset:d,viewTransition:x,...S},p){let{basename:w}=F.useContext(Hn),_=typeof f=="string"&&e2.test(f),k,y=!1;if(typeof f=="string"&&_&&(k=f,Kh))try{let T=new URL(window.location.href),Z=f.startsWith("//")?new URL(T.protocol+f):new URL(f),L=mi(Z.pathname,w);Z.origin===T.origin&&L!=null?f=L+Z.search+Z.hash:y=!0}catch{Ln(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Jf(f,{relative:o}),[P,O,V]=Rd(n,S),J=qd(f,{replace:c,state:l,target:h,preventScrollReset:d,relative:o,viewTransition:x});function K(T){t&&t(T),T.defaultPrevented||J(T)}let X=F.createElement("a",{...S,...V,href:k||R,onClick:y||a?t:K,ref:Dd(p,O),target:h,"data-discover":!_&&r==="render"?"true":void 0});return P&&!_?F.createElement(F.Fragment,null,X,F.createElement(Od,{page:R})):X});t2.displayName="Link";var Bd=F.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:c,viewTransition:l,children:h,...f},d){let x=Da(c,{relative:f.relative}),S=gi(),p=F.useContext(Qs),{navigator:w,basename:_}=F.useContext(Hn),k=p!=null&&Xd(x)&&l===!0,y=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,R=S.pathname,P=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(R=R.toLowerCase(),P=P?P.toLowerCase():null,y=y.toLowerCase()),P&&_&&(P=mi(P,_)||P);const O=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let V=R===y||!o&&R.startsWith(y)&&R.charAt(O)==="/",J=P!=null&&(P===y||!o&&P.startsWith(y)&&P.charAt(y.length)==="/"),K={isActive:V,isPending:J,isTransitioning:k},X=V?t:void 0,T;typeof n=="function"?T=n(K):T=[n,V?"active":null,J?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Z=typeof a=="function"?a(K):a;return F.createElement(t2,{...f,"aria-current":X,className:T,ref:d,style:Z,to:c,viewTransition:l},typeof h=="function"?h(K):h)});Bd.displayName="NavLink";var Ud=F.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:c=Ms,action:l,onSubmit:h,relative:f,preventScrollReset:d,viewTransition:x,...S},p)=>{let w=Gd(),_=Yd(l,{relative:f}),k=c.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&e2.test(l),R=P=>{if(h&&h(P),P.defaultPrevented)return;P.preventDefault();let O=P.nativeEvent.submitter,V=(O==null?void 0:O.getAttribute("formmethod"))||c;w(O||P.currentTarget,{fetcherKey:t,method:V,navigate:r,replace:o,state:a,relative:f,preventScrollReset:d,viewTransition:x})};return F.createElement("form",{ref:p,method:k,action:_,onSubmit:n?h:R,...S,"data-discover":!y&&e==="render"?"true":void 0})});Ud.displayName="Form";function Hd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r2(e){let t=F.useContext(ea);return Wt(t,Hd(e)),t}function qd(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:c}={}){let l=So(),h=gi(),f=Da(e,{relative:a});return F.useCallback(d=>{if(wd(d,t)){d.preventDefault();let x=r!==void 0?r:Pa(h)===Pa(f);l(e,{replace:x,state:n,preventScrollReset:o,relative:a,viewTransition:c})}},[h,l,f,r,n,t,e,o,a,c])}function $d(e){Ln(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=F.useRef(cc(e)),r=F.useRef(!1),n=gi(),o=F.useMemo(()=>yd(n.search,r.current?null:t.current),[n.search]),a=So(),c=F.useCallback((l,h)=>{const f=cc(typeof l=="function"?l(new URLSearchParams(o)):l);r.current=!0,a("?"+f,h)},[a,o]);return[o,c]}var Vd=0,Wd=()=>`__${String(++Vd)}__`;function Gd(){let{router:e}=r2("useSubmit"),{basename:t}=F.useContext(Hn),r=cd();return F.useCallback(async(n,o={})=>{let{action:a,method:c,encType:l,formData:h,body:f}=Cd(n,t);if(o.navigate===!1){let d=o.fetcherKey||Wd();await e.fetch(d,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Yd(e,{relative:t}={}){let{basename:r}=F.useContext(Hn),n=F.useContext(qn);Wt(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...Da(e||".",{relative:t})},c=gi();if(e==null){a.search=c.search;let l=new URLSearchParams(a.search),h=l.getAll("index");if(h.some(d=>d==="")){l.delete("index"),h.filter(x=>x).forEach(x=>l.append("index",x));let d=l.toString();a.search=d?`?${d}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:di([r,a.pathname])),Pa(a)}function Xd(e,{relative:t}={}){let r=F.useContext(Wh);Wt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=r2("useViewTransitionState"),o=Da(e,{relative:t});if(!r.isTransitioning)return!1;let a=mi(r.currentLocation.pathname,n)||r.currentLocation.pathname,c=mi(r.nextLocation.pathname,n)||r.nextLocation.pathname;return $s(o.pathname,c)!=null||$s(o.pathname,a)!=null}function pi({width:e,height:t,fill:r}){return v.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Jd=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},Zd=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Qd=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(n/o*100);e.forEach(c=>{a>=c&&!t.includes(c)&&(t.push(c),Zd(c))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},n2=F.createContext(),el=()=>{const e=F.useContext(n2);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Kd=({children:e})=>{const[t,r]=F.useState(()=>localStorage.getItem("theme")||"light");F.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Jd(t)},[t]);const a={theme:t,toggleTheme:()=>{r(c=>c==="light"?"dark":"light")},setSpecificTheme:c=>{r(c)},isLight:t==="light",isDark:t==="dark"};return v.jsx(n2.Provider,{value:a,children:e})},e5=hr`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,t5=hr`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,r5=hr`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,n5=z.div`
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
    animation: ${e=>e.initialFade?r5:"none"} 0.5s ease-in;
`,i5=z.div`
    animation: ${e=>e.isExiting?t5:e5} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Ec({isVisible:e,initialFade:t=!1}){const{theme:r}=el(),[n,o]=F.useState(!1),[a,c]=F.useState(!1);return F.useEffect(()=>{!e&&!n&&(o(!0),setTimeout(()=>{c(!0)},800))},[e,n]),v.jsx(n5,{isVisible:e,fadeOutContainer:a,initialFade:t,children:v.jsx(i5,{isExiting:n,children:v.jsx(pi,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const o5=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},a5=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},Hu=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},qu=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},s5=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},$u=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},l5=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},c5=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},u5=(e,t="",r="",n="album_collection")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t,album_id:r,source:n})},h5=()=>{F.useEffect(()=>{Hu(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&Hu(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function i2(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function o2(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function f5(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const d5=hr`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,p5=hr`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,m5=hr`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,g5=hr`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,v5=z.div`
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
    animation: ${e=>e.isClosing?g5:m5} 0.3s ease-in-out forwards;
`,b5=z.div`
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
    animation: ${e=>e.isClosing?p5:d5} 0.3s ease-in-out forwards;

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
`,x5=z.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,w5=z.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 3px;
`,y5=z(o2)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,S5=z.div`
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
`,a2=z.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,_5=z.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,C5=z.button`
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
`,ps=z.button`
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
`,A5=z.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,k5=z(a2)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,L5=z.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,N5=z.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function I5({title:e,paragraph:t,imageURL:r,postImageText:n,canClose:o,confirmText:a,onConfirm:c,cancelText:l,onCancel:h,isClosing:f,customButton:d}){return document.body.style.overflow="hidden",v.jsx(v5,{isClosing:f,children:v.jsxs(b5,{isClosing:f,children:[v.jsxs(x5,{children:[v.jsx(L5,{children:v.jsx(pi,{width:25,height:25,fill:"var(--textColor)"})}),e&&v.jsx(w5,{children:e}),o&&v.jsx(S5,{onClick:h,children:v.jsx(y5,{})})]}),v.jsx(N5,{}),t&&v.jsx(a2,{children:t}),r&&v.jsx(_5,{src:r}),n&&v.jsx(k5,{children:n}),v.jsxs(A5,{style:{justifyContent:"center"},children:[d&&v.jsx(ps,{onClick:()=>window.open(d.url,"_blank"),children:d.text}),l&&a?v.jsxs(v.Fragment,{children:[v.jsx(C5,{onClick:h,children:l}),v.jsx(ps,{onClick:c,children:a})]}):v.jsx(v.Fragment,{children:l?v.jsx(ps,{onClick:h,children:l}):a&&v.jsx(ps,{onClick:c,children:a})})]})]})})}const E5="/assets/coverEditor.DxGhMuid.gif",T5=F.createContext(),P5=({children:e})=>{const{t,i18n:r}=sr(),[n,o]=F.useState(null),[a,c]=F.useState(!1),[l,h]=F.useState(()=>{const J=localStorage.getItem("shownAlerts");return J?JSON.parse(J):{}}),f=()=>{const J={en:{title:"New Cover Editor!",paragraph:'Inside the poster editor, you can now customize your album cover with zoom, position adjustments, and blur effects. Click on "Cover editor" to try it out!',confirmText:"Try it now!",postImageText:"Customize your poster like never before."},pt:{title:"Novo Editor de Capa!",paragraph:'Dentro do editor de poster, agora você pode personalizar a capa do álbum com zoom, ajustes de posição e efeitos de desfoque. Clique em "Editor de capa" para experimentar!',confirmText:"Experimentar agora!",postImageText:"Personalize seu poster como nunca antes."},es:{title:"¡Nuevo Editor de Portada!",paragraph:'Dentro del editor de póster, ahora puedes personalizar la portada del álbum con zoom, ajustes de posición y efectos de desenfoque. ¡Haz clic en "Editor de portada" para probarlo!',confirmText:"¡Probar ahora!",postImageText:"Personaliza tu póster como nunca antes."},zh:{title:"新封面编辑器！",paragraph:"在海报编辑器中，您现在可以使用缩放、位置调整和模糊效果来自定义专辑封面。点击“封面编辑器”试试吧！",confirmText:"立即试用！",postImageText:"像从未有过的方式定制您的海报。"}},K=r.language||"en",X=J[K]||J.en;return{id:"cover-editor-feature",persistentId:"cover-editor-feature-announcement",title:X.title,paragraph:X.paragraph,postImageText:X.postImageText,confirmText:X.confirmText,canClose:!0,type:"alert",imageURL:E5,limitDate:"2026-02-10T23:59:59.999Z"}},d=J=>l[J]===!0,x=J=>{if(!d(J)){const K={...l,[J]:!0};h(K),localStorage.setItem("shownAlerts",JSON.stringify(K))}};F.useEffect(()=>{const J=f();!d(J.persistentId)&&!n&&_(J)&&o(J)},[r.language,l]);const S=J=>{_(J)&&(o(J),c(!1))},p=J=>{_(J)&&S({...J,type:"alert"})},w=J=>{S({...J,type:"confirmation"})},_=J=>{if(!J.limitDate)return!0;const K=new Date(J.limitDate);return new Date<=K},k=J=>{if(!J.persistentId){_(J)&&p(J);return}!d(J.persistentId)&&_(J)&&S({...J,type:"alert"})},y=()=>{(n==null?void 0:n.type)==="alert"&&O(),!(!n||a)&&(c(!0),setTimeout(()=>{o(null),c(!1),document.body.style.overflow="unset"},300))},R=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&O(),y()},P=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&O(),y()},O=()=>{n!=null&&n.persistentId&&x(n.persistentId)},V={modal:n,showModal:S,showAlert:p,showConfirmation:w,showConditionalAlert:k,closeModal:y,isModalVisible:!!n,hasAlertBeenShown:d,markSpecificAlertAsShown:x};return v.jsxs(T5.Provider,{value:V,children:[e,n&&v.jsx(I5,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?R:null,cancelText:n.cancelText||null,onCancel:n.cancelText?P:n.canClose?y:null,isClosing:a,customButton:n.customButton})]})},j5={BASE_URL:"https://api.posterfy.space"},R5=j5.BASE_URL;class O5{constructor(t=R5){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,o={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`);try{const a=await fetch(n,o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.error("API request failed:",a),a}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const Bn=new O5,s2=F.createContext(),za=()=>{const e=F.useContext(s2);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},M5=({children:e})=>{const[t,r]=F.useState(null),[n,o]=F.useState(!0),[a,c]=F.useState(!1);F.useEffect(()=>{(async()=>{const _=new URLSearchParams(window.location.search).get("token");_&&(localStorage.setItem("authToken",_),Bn.setAuthToken(_),window.history.replaceState({},document.title,window.location.pathname)),await l()})()},[]);const l=async()=>{if(!localStorage.getItem("authToken")){r(null),c(!1),o(!1);return}try{const w=await Bn.getCurrentUser();r(w.user),c(!0),o(!1)}catch{localStorage.removeItem("authToken"),Bn.setAuthToken(null),r(null),c(!1),o(!1)}},S={user:t,loading:n,isAuthenticated:a,loginWithGoogle:()=>{window.location.href=Bn.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=Bn.getSpotifyAuthUrl()},logout:async()=>{try{await Bn.logout(),localStorage.removeItem("authToken"),Bn.setAuthToken(null),r(null),c(!1)}catch(p){console.error("Logout failed:",p),localStorage.removeItem("authToken"),Bn.setAuthToken(null),r(null),c(!1)}},checkAuthStatus:l,updateUser:p=>{r(p)}};return v.jsx(s2.Provider,{value:S,children:e})};function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vs.apply(this,arguments)}function F5(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var D5=["cdnSuffix","cdnUrl","countryCode","style","svg"],z5="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",B5="svg",U5=127397,l2=function(t){var r=t.cdnSuffix,n=r===void 0?B5:r,o=t.cdnUrl,a=o===void 0?z5:o,c=t.countryCode,l=t.style,h=t.svg,f=h===void 0?!1:h,d=F5(t,D5);if(typeof c!="string")return null;if(f){var x=""+a+c.toLowerCase()+"."+n;return F.createElement("img",Object.assign({},d,{src:x,style:Vs({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},l)}))}var S=c.toUpperCase().replace(/./g,function(p){return String.fromCodePoint(p.charCodeAt(0)+U5)});return F.createElement("span",Object.assign({role:"img"},d,{style:Vs({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},l)}),S)};const H5=z.div`
  position: relative;
`,q5=z.button`
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
`,$5=z.div`
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
`,V5=z.div`
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
`,W5=z.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,G5=z.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,ms=z.button`
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
`,gs=z.span`
  margin-left: 8px;
`,vs=z(l2)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function Y5(){const[e,t]=F.useState(!1),[r,n]=F.useState(!1),{i18n:o}=sr();F.useEffect(()=>{const f=localStorage.getItem("language");f&&o.changeLanguage(f);const d=x=>{x.target.closest(".language-selector")||a()};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[o]);const a=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},c=f=>{f.stopPropagation(),e?a():t(!0)},l=f=>{o.changeLanguage(f),localStorage.setItem("language",f),a(),c5(f)},h=()=>{switch(o.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return v.jsxs(H5,{className:"language-selector",children:[v.jsx(q5,{onClick:c,"aria-label":"Select language",children:v.jsx($5,{children:v.jsx(l2,{countryCode:h(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&v.jsxs(V5,{className:r?"closing":"",children:[v.jsx(W5,{}),v.jsxs(G5,{children:[v.jsxs(ms,{onClick:()=>l("pt"),children:[v.jsx(vs,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(gs,{children:"Português"})]}),v.jsxs(ms,{onClick:()=>l("en"),children:[v.jsx(vs,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(gs,{children:"English"})]}),v.jsxs(ms,{onClick:()=>l("es"),children:[v.jsx(vs,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(gs,{children:"Español"})]}),v.jsxs(ms,{onClick:()=>l("zh"),children:[v.jsx(vs,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),v.jsx(gs,{children:"中文"})]})]})]})]})}function X5(e){return Tt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function c2(e){return Tt({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function u2(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function J5(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Z5(e){return Tt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Q5(e){return Tt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function h2(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function K5(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function ep(e){return Tt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function tp(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function rp(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function np(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const ip=z.div`
  position: relative;
`,op=z.button`
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
`,ap=z.div`
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
`,sp=z.div`
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
`,lp=z.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,cp=z.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,up=z.button`
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
`,hp=z.div`
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
`,fp=z.span`
  margin-left: 4px;
  font-weight: 500;
`;function dp(){const[e,t]=F.useState(!1),[r,n]=F.useState(!1),{theme:o,setSpecificTheme:a}=el(),c=[{id:"light",name:"Light",color:"#f0efeb",icon:v.jsx(np,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:v.jsx(K5,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:v.jsx(Z5,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:v.jsx(Q5,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:v.jsx(ep,{}),isLight:!1}],l=c.find(x=>x.id===o)||c[0];F.useEffect(()=>{const x=S=>{S.target.closest(".theme-selector")||h()};return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[]);const h=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=x=>{x.stopPropagation(),e?h():t(!0)},d=x=>{a(x),h()};return v.jsxs(ip,{className:"theme-selector",children:[v.jsx(op,{onClick:f,"aria-label":"Select theme",children:v.jsx(ap,{themeColor:l.color,isLight:l.isLight,children:l.icon})}),e&&v.jsxs(sp,{className:r?"closing":"",children:[v.jsx(lp,{}),v.jsx(cp,{children:c.map(x=>v.jsxs(up,{onClick:()=>d(x.id),children:[v.jsx(hp,{className:"theme-preview",color:x.color,isLight:x.isLight,children:x.icon}),v.jsx(fp,{children:x.name})]},x.id))})]})]})}function pp(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"},child:[]}]})(e)}function f2(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function mp(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const gp=z.header`
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
`,vp=z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,bp=z.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,xp=z.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,wp=z.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,yp=z.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,Sp=z.div`
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
`,_p=z.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,Cp=z.button`
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
`,Ap=z.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,kp=z(mp)`
  font-size: 1.5em;
  color: var(--textColor);
`,Lp=z.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Ws({hideLogo:e=!1,hideAccount:t=!1}){const[r,n]=F.useState(!1),[o,a]=F.useState(!0),[c,l]=F.useState(0),[h,f]=F.useState(!1),d=".space",{user:x,isAuthenticated:S}=za(),p=So();F.useEffect(()=>{const _=()=>{const k=window.scrollY;k<=10?(a(!0),n(!1)):(k<c?a(!0):a(!1),n(!0)),l(k)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[c]);const w=()=>{p(S?"/dashboard":"/login")};return v.jsxs(gp,{scrolled:r,visible:o,children:[v.jsxs(vp,{children:[!e&&v.jsxs(bp,{onClick:()=>p("/"),children:[v.jsx(Sp,{children:v.jsx(pi,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),v.jsxs(xp,{children:["Posterfy",v.jsx(wp,{children:d})]})]}),v.jsxs(_p,{children:[v.jsx(Y5,{}),v.jsx(dp,{}),!t&&v.jsx(Cp,{onClick:w,children:v.jsx(Ap,{children:x!=null&&x.avatar?v.jsx(Lp,{src:x.avatar}):v.jsx(kp,{})})})]})]}),v.jsx(yp,{scrolled:r})]})}const d2=hr`
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
`;const Np=hr`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,Ip=z.footer`
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
`,Ep=z.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,Tp=z.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${d2} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,Pp=z.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,jp=z.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`,Rp=z.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`,Op=z.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`,Mp=z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,Fp=z.a`
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
`;z.a`
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
`;const Dp=z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${d2} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,zp=z.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,Bp=z.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,Vu=z.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${Np} 1.5s ease-in-out infinite;
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
`;z.div`
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
`;z.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;z.h3`
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--textColor);
  opacity: 0.95;
`;z.div`
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
`;z.button`
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
`;function Up(){const{t:e}=sr(),{theme:t,setSpecificTheme:r}=el(),n=new Date().getFullYear();return v.jsxs(Ip,{children:[v.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:v.jsxs("div",{children:[v.jsx("h4",{children:"Album Poster Generator Links"}),v.jsxs("nav",{children:[v.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),v.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),v.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),v.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),v.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),v.jsxs(Ep,{children:[v.jsxs(Tp,{children:[v.jsxs(Pp,{children:[v.jsxs(jp,{children:[v.jsx(pi,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"}),v.jsx(Rp,{children:"Posterfy"})]}),v.jsx(Op,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),v.jsx(Mp,{children:v.jsxs(Fp,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[v.jsx(X5,{})," ",e("ViewGitHub","View on GitHub")]})})]}),v.jsxs(Dp,{children:[v.jsx(zp,{children:v.jsxs(Vu,{children:[v.jsx(h2,{}),e("MadeBy","Made with love by")," ",v.jsx("a",{href:"https://github.com/avictormorais",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),v.jsx(Bp,{children:v.jsxs(Vu,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function jl({showNavbar:e=!0,showFooter:t=!0}){return v.jsxs(v.Fragment,{children:[e&&v.jsx(Ws,{}),v.jsx(dd,{}),t&&v.jsx(Up,{})]})}function Hp(e){return Tt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function qp(e){return Tt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const $p="/assets/Posterfy%20-%20Starboy.COKYiogJ.png",Vp="/assets/Posterfy%20-%20Teenage%20Dream.Cngne26d.png",Wp="/assets/Posterfy%20-%20SOS.BR7qvD22.png",Gp="/assets/Posterfy%20-%20Don't%20Be%20Dumb.vFMj1or8.png",Yp="/assets/Posterfy%20-%20SOUR.CQ1_yKI9.png",Xp=[{id:1,coverImage:$p,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1e0450ba3fd83cf9048446477",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/b2/c0/1d/b2c01d38-2798-1bce-e6f3-8d0959ca51dd/23UMGIM22528.rgb.jpg",useUncompressed:!1,albumName:"Starboy",artistsName:"The Weeknd",titleSize:200,artistsSize:"110",tracksSize:"48",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2023-03-14",titleRuntime:"Runtime",runtime:"1h 20min 15s",backgroundColor:"#060201",textColor:"#e1170b",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Starboy
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
18. I Feel It Coming`,color1:"#063eb2",color2:"#18c1d3",color3:"#671311",albumID:"24PQTJnB3I08bK8fTWIx7P",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:Vp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c143219fb4e2c45a0b7df6ef87",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg",useUncompressed:!1,albumName:"Teenage Dream",artistsName:"Katy Perry",titleSize:200,artistsSize:"110",tracksSize:"49",marginTop:"100",marginSide:160,marginCover:"-80",marginBackground:0,titleRelease:"Release date",releaseDate:"2010-08-24",titleRuntime:"Runtime",runtime:"46min 49s",backgroundColor:"#debbc8",textColor:"#486394",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Teenage Dream
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
12. Not Like The Movies`,color1:"#b26f57",color2:"#8b5249",color3:"#897f93",albumID:"32Uy0GLddTw4559CWja1f1",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:Wp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Gp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
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
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:Yp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1a91c10fe9472d9bd89802e5a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music115/v4/02/ed/8c/02ed8cab-c089-2fdd-7ce6-ab334a9a4e19/21UMGIM26093.rgb.jpg",useUncompressed:!1,albumName:"SOUR",artistsName:"Olivia Rodrigo",titleSize:200,artistsSize:"110",tracksSize:"55",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2021-05-21",titleRuntime:"Runtime",runtime:"34min 46s",backgroundColor:"#8981bf",textColor:"#262929",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. brutal
2. traitor
3. drivers license
4. 1 step forward, 3 steps back
5. deja vu
6. good 4 u
7. enough for you
8. happier
9. jealousy, jealousy
10. favorite crime
11. hope ur ok`,color1:"#e4c2b1",color2:"#745b46",color3:"#513738",albumID:"6s84u2TUpR3wdUv4NgKA2j",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],Ui=(e={})=>{const[t,r]=F.useState(!1),n=F.useRef(null);return F.useEffect(()=>{const o=n.current,a=new IntersectionObserver(([c])=>{c.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return o&&a.observe(o),()=>{o&&a.unobserve(o)}},[e]),[n,t]},Jp=z.div`
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
`,Zp=z.div`
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
`,Qp=z.div`
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
`,Kp=z.div`
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
`,em=z.div`
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
`,tm=z.button`
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
`,rm=z.button`
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
`,nm=({onRecreate:e})=>{const{t}=sr(),[r,n]=F.useState(null),[o,a]=F.useState(!1),[c,l]=F.useState(!1),[h,f]=F.useState(null),[d,x]=F.useState(null),[S,p]=Ui(),[w,_]=F.useState([]),k=[2,3,1,4,0];F.useEffect(()=>{p&&w.length===0&&k.forEach((O,V)=>{setTimeout(()=>{_(J=>[...J,O])},V*177)})},[p]),F.useEffect(()=>{const O=()=>{a(window.innerWidth<=770),l(window.innerWidth>480&&window.innerWidth<=1200)};return O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]);const y=(O,V)=>{f(O),x(V),document.body.style.overflow="hidden"},R=()=>{f(null),document.body.style.overflow="auto"},P=()=>{f(null),e(d),document.body.style.overflow="auto"};return v.jsxs(v.Fragment,{children:[v.jsx(Jp,{ref:S,children:Xp.map((O,V)=>v.jsx(Zp,{index:V,isHovered:r===V,hoveredIndex:r,otherIsHovered:r!==null,isMobile:o,isTablet:c,$hasAppeared:w.includes(V),onMouseEnter:()=>n(V),onMouseLeave:()=>n(null),onClick:()=>y(O.coverImage||"/placeholder.svg",O.JSONConfig),children:v.jsx("img",{src:O.coverImage||"/placeholder.svg",alt:`${O.artist} - ${O.title}`})},O.id))}),h&&v.jsx(Qp,{onClick:R,children:v.jsxs(Kp,{onClick:O=>O.stopPropagation(),children:[v.jsxs(em,{children:[v.jsx(tm,{onClick:R,children:"×"}),v.jsx(rm,{onClick:P,children:t("RecreatePoster")})]}),v.jsx("img",{src:h,alt:"Album cover"})]})})]})},im=z.div`
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
`,om=({onRecreate:e})=>v.jsx(im,{children:v.jsx(nm,{onRecreate:e})}),am=z.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
`,sm=z.div`
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
`,lm=z.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`,cm=z.h1`
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
`,um=z.p`
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
`,hm=z.div`
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
`,fm=z.div`
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
`,dm=z(Hp)`
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
`;function pm({showAnimation:e=!1,onRecreate:t}){const{t:r}=sr(),{theme:n}=el(),[o,a]=F.useState(!1);F.useEffect(()=>{if(e){const l=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(l)}},[e]);const c=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return v.jsxs(v.Fragment,{children:[v.jsxs(am,{children:[v.jsxs(sm,{children:[v.jsxs(lm,{children:[v.jsx(cm,{visible:o,children:"Posterfy"}),v.jsx(um,{visible:o,delay:400,children:r("heroDescription")}),v.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[v.jsx("h2",{children:"Free Album Poster Generator"}),v.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),v.jsx("h3",{children:"Features:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Free album poster maker"}),v.jsx("li",{children:"Spotify integration"}),v.jsx("li",{children:"Custom poster design"}),v.jsx("li",{children:"High-quality downloads"}),v.jsx("li",{children:"Multiple format options"}),v.jsx("li",{children:"Professional templates"})]})]})]}),v.jsx(hm,{visible:o,children:v.jsx(fm,{children:v.jsx(pi,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),v.jsx(dm,{visible:o,onClick:c})]}),v.jsx(om,{onRecreate:t})]})}const mm=z.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,gm=z.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Ba({text:e,type:t}){return v.jsx(v.Fragment,{children:t==1?v.jsx(mm,{children:e}):v.jsx(gm,{children:e})})}const vm=z.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,bm=z.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,xm=z.p`
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
`,Wu=z.div`
    display: flex;
`;function Tc({title:e,paragraph:t}){return v.jsxs(vm,{children:[v.jsx(Wu,{children:v.jsx(bm,{children:e})}),v.jsx(Wu,{children:v.jsx(xm,{children:t})})]})}function wm(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function ym(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Sm=z.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,_m=z(wm)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Cm=z.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,Am=z.hr`
    opacity: 0.15;
    margin: 5px;
`,km=z.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,Lm=z.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Uo({q:e,a:t}){const[r,n]=F.useState(!1);function o(){n(!r)}return v.jsxs(v.Fragment,{children:[v.jsxs(Sm,{onClick:o,children:[v.jsx(_m,{showA:r}),v.jsx(Cm,{children:e})]}),v.jsx(Am,{}),v.jsx(km,{showA:r,children:v.jsx(Lm,{showA:r,children:t})})]})}const Nm=z.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Im=z.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Em(){const{t:e}=sr();return v.jsxs(Nm,{id:"faq",children:[v.jsx(Ba,{text:"FAQ",type:1}),v.jsxs(Im,{children:[v.jsx(Uo,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),v.jsx(Uo,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),v.jsx(Uo,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),v.jsx(Uo,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),v.jsx(Uo,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),v.jsx(Uo,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const Tm=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),v.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),v.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),v.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),v.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),v.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),v.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),v.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),v.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),v.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),v.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),v.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),v.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),v.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),v.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),v.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),v.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),v.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:o}),v.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:o}),v.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:o}),v.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:o}),v.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:o}),v.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:a})]}),Pm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,jm=z.div`
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
`,Rm=z.p`
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
`,Om=z.button`
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
`;function Mm(){const{t:e}=sr();return v.jsxs(Pm,{id:"share",children:[v.jsx(Ba,{text:e("Share"),type:1}),v.jsx(Tc,{title:e("ShareTitle")}),v.jsx(jm,{children:v.jsx(Tm,{width:"100%"})}),v.jsx(Rm,{children:e("ShareDescription")}),v.jsx(Om,{children:e("ComingSoon")})]})}const Fm=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:o="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[v.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),v.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),v.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),v.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),v.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),v.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),v.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),v.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),v.jsx("g",{fill:r,opacity:"0.3",children:v.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),v.jsxs("g",{fill:t,opacity:"0.2",children:[v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),v.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),v.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),v.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),v.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),v.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),v.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),v.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),v.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),v.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),v.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),v.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),v.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),v.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),v.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),v.jsx("path",{fill:o,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),v.jsx("path",{fill:o,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),v.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),v.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),v.jsx("g",{clipPath:"url(#clip0_1_72)",children:v.jsx("path",{fill:o,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_1_72",children:v.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Dm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,zm=z.div`
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
`,Bm=z.p`
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
`,Um=z.button`
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
`;function Hm(){const{t:e}=sr();return v.jsxs(Dm,{id:"share",children:[v.jsx(Ba,{text:e("Community"),type:1}),v.jsx(Tc,{title:e("CommunityTitle")}),v.jsx(zm,{children:v.jsx(Fm,{width:"100%"})}),v.jsx(Bm,{children:e("CommunityDescription")}),v.jsx(Um,{children:e("ComingSoon")})]})}const Gu=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],qm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,$m=z.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Vm=z.div`
    display: flex;
    align-items: center;
    position: relative;
`,Wm=z.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Gm=z(h2)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Ym=z.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,Xm=z.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,Jm=z.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,Zm=z.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Qm=z.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,Km=z.a`
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
`;function eg(){var a,c,l;const{i18n:e}=sr(),{t}=sr(),r=((a=e.language)==null?void 0:a.split("-")[0])||"en",n=Gu.filter(h=>h.key!=="contribute_area"),o=Gu.find(h=>h.key==="contribute_area");return v.jsxs(qm,{id:"thanks",children:[v.jsx(Ba,{text:t("Thanks"),type:1}),n.map((h,f)=>v.jsxs($m,{children:[v.jsxs(Vm,{children:[v.jsx(Wm,{className:"circle"}),v.jsx(Gm,{className:"heart"}),v.jsx(Ym,{tabIndex:0,role:"button",onClick:()=>window.open(h.url,"_blank","noopener,noreferrer"),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&window.open(h.url,"_blank","noopener,noreferrer")},onMouseEnter:d=>{const x=d.target.parentNode;x.querySelector(".circle").style.opacity=0,x.querySelector(".heart").style.opacity=1},onMouseLeave:d=>{const x=d.target.parentNode;x.querySelector(".circle").style.opacity=.8,x.querySelector(".heart").style.opacity=0},children:h.title[r]||h.title.en})]}),v.jsx(Xm,{children:h.text[r]||h.text.en})]},h.key)),o&&v.jsxs(Jm,{children:[v.jsx(Zm,{children:o.title[r]||o.title.en}),v.jsx(Qm,{children:o.text[r]||o.text.en}),v.jsx(Km,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:((c=o.button)==null?void 0:c[r])||((l=o.button)==null?void 0:l.en)||"Github"})]})]})}const tg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,rg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ng=z.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Mi({title:e,value:t,onChange:r}){return v.jsxs(tg,{children:[v.jsx(rg,{children:e}),v.jsx(ng,{placeholder:e,value:t,onChange:r})]})}const ig=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,og=z.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,ag=z.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Yu({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return v.jsxs(ig,{children:[v.jsx(og,{placeholder:e,value:e,onChange:r}),v.jsx(ag,{placeholder:e,value:t,onChange:n})]})}const sg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,lg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,cg=z.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,ug=z.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,hg=z.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function Aa({title:e,value:t,onClick:r}){const n=F.useRef(null);return v.jsxs(sg,{"data-color-input":!0,children:[v.jsx(lg,{children:e}),v.jsxs(cg,{ref:n,onClick:()=>{const o=n.current.getBoundingClientRect();r({top:o.bottom+1+window.scrollY,left:o.left+window.scrollX})},children:[v.jsx(ug,{style:{backgroundColor:t}}),v.jsx(hg,{children:t})]})]})}function tl(){return(tl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p2(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function uc(e){var t=F.useRef(e),r=F.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var ja=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},Ia=function(e){return"touches"in e},hc=function(e){return e&&e.ownerDocument.defaultView||self},Xu=function(e,t,r){var n=e.getBoundingClientRect(),o=Ia(t)?function(a,c){for(var l=0;l<a.length;l++)if(a[l].identifier===c)return a[l];return a[0]}(t.touches,r):t;return{left:ja((o.pageX-(n.left+hc(e).pageXOffset))/n.width),top:ja((o.pageY-(n.top+hc(e).pageYOffset))/n.height)}},Ju=function(e){!Ia(e)&&e.preventDefault()},m2=Pr.memo(function(e){var t=e.onMove,r=e.onKey,n=p2(e,["onMove","onKey"]),o=F.useRef(null),a=uc(t),c=uc(r),l=F.useRef(null),h=F.useRef(!1),f=F.useMemo(function(){var p=function(k){Ju(k),(Ia(k)?k.touches.length>0:k.buttons>0)&&o.current?a(Xu(o.current,k,l.current)):_(!1)},w=function(){return _(!1)};function _(k){var y=h.current,R=hc(o.current),P=k?R.addEventListener:R.removeEventListener;P(y?"touchmove":"mousemove",p),P(y?"touchend":"mouseup",w)}return[function(k){var y=k.nativeEvent,R=o.current;if(R&&(Ju(y),!function(O,V){return V&&!Ia(O)}(y,h.current)&&R)){if(Ia(y)){h.current=!0;var P=y.changedTouches||[];P.length&&(l.current=P[0].identifier)}R.focus(),a(Xu(R,y,l.current)),_(!0)}},function(k){var y=k.which||k.keyCode;y<37||y>40||(k.preventDefault(),c({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},_]},[c,a]),d=f[0],x=f[1],S=f[2];return F.useEffect(function(){return S},[S]),Pr.createElement("div",tl({},n,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:x,tabIndex:0,role:"slider"}))}),Pc=function(e){return e.filter(Boolean).join(" ")},g2=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,a=Pc(["react-colorful__pointer",e.className]);return Pr.createElement("div",{className:a,style:{top:100*o+"%",left:100*r+"%"}},Pr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},_r=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},fg=function(e){return vg(fc(e))},fc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?_r(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?_r(parseInt(e.substring(6,8),16)/255,2):1}},dg=function(e){return gg(mg(e))},pg=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:_r(e.h),s:_r(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:_r(o/2),a:_r(n,2)}},dc=function(e){var t=pg(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},mg=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),c=n*(1-r),l=n*(1-(t-a)*r),h=n*(1-(1-t+a)*r),f=a%6;return{r:_r(255*[n,l,c,c,h,n][f]),g:_r(255*[h,n,n,l,c,c][f]),b:_r(255*[c,c,h,n,n,l][f]),a:_r(o,2)}},bs=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},gg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?bs(_r(255*o)):"";return"#"+bs(t)+bs(r)+bs(n)+a},vg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),c=a-Math.min(t,r,n),l=c?a===t?(r-n)/c:a===r?2+(n-t)/c:4+(t-r)/c:0;return{h:_r(60*(l<0?l+6:l)),s:_r(a?c/a*100:0),v:_r(a/255*100),a:o}},bg=Pr.memo(function(e){var t=e.hue,r=e.onChange,n=Pc(["react-colorful__hue",e.className]);return Pr.createElement("div",{className:n},Pr.createElement(m2,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:ja(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":_r(t),"aria-valuemax":"360","aria-valuemin":"0"},Pr.createElement(g2,{className:"react-colorful__hue-pointer",left:t/360,color:dc({h:t,s:100,v:100,a:1})})))}),xg=Pr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:dc({h:t.h,s:100,v:100,a:1})};return Pr.createElement("div",{className:"react-colorful__saturation",style:n},Pr.createElement(m2,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:ja(t.s+100*o.left,0,100),v:ja(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+_r(t.s)+"%, Brightness "+_r(t.v)+"%"},Pr.createElement(g2,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:dc(t)})))}),v2=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},wg=function(e,t){return e.toLowerCase()===t.toLowerCase()||v2(fc(e),fc(t))};function yg(e,t,r){var n=uc(r),o=F.useState(function(){return e.toHsva(t)}),a=o[0],c=o[1],l=F.useRef({color:t,hsva:a});F.useEffect(function(){if(!e.equal(t,l.current.color)){var f=e.toHsva(t);l.current={hsva:f,color:t},c(f)}},[t,e]),F.useEffect(function(){var f;v2(a,l.current.hsva)||e.equal(f=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:f},n(f))},[a,e,n]);var h=F.useCallback(function(f){c(function(d){return Object.assign({},d,f)})},[]);return[a,h]}var Sg=typeof window<"u"?F.useLayoutEffect:F.useEffect,_g=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Zu=new Map,Cg=function(e){Sg(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Zu.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Zu.set(t,r);var n=_g();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Ag=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,a=e.onChange,c=p2(e,["className","colorModel","color","onChange"]),l=F.useRef(null);Cg(l);var h=yg(r,o,a),f=h[0],d=h[1],x=Pc(["react-colorful",t]);return Pr.createElement("div",tl({},c,{ref:l,className:x}),Pr.createElement(xg,{hsva:f,onChange:d}),Pr.createElement(bg,{hue:f.h,onChange:d,className:"react-colorful__last-control"}))},kg={defaultColor:"000",toHsva:fg,fromHsva:function(e){return dg({h:e.h,s:e.s,v:e.v,a:1})},equal:wg},Lg=function(e){return Pr.createElement(Ag,tl({},e,{colorModel:kg}))};const Ng=z.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,Ig=z(Lg)`
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
`,Rl=z.div`
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
`,Eg=z.div`
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
`,Tg=z.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Pg=z.input`
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
`,jg=z(J5)`
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
`,Rg=z(tp)`
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
`,Og=z(f2)`
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
`,Mg=z(u2)`
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
`,Fg=z.img`
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
`;function Dg({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:o,onClose:a}){const[c,l]=F.useState(e),[h,f]=F.useState(!1),[d,x]=F.useState(null),S=F.useRef(null),p=F.useRef(null);function w(){f(!h)}function _(P){l(P.target.value===""?"#":P.target.value)}function k(P){const O=S.current,J=p.current.getBoundingClientRect(),K=O.getContext("2d"),X=Math.floor(P.clientX-J.left),T=Math.floor(P.clientY-J.top),L=`#${[...K.getImageData(X,T,1,1).data].slice(0,3).map(M=>M.toString(16).padStart(2,"0")).join("")}`;l(L),w()}function y(P){const O=S.current,J=p.current.getBoundingClientRect(),K=Math.floor(P.clientX-J.left),X=Math.floor(P.clientY-J.top);if(O){const T=O.getContext("2d");try{const L=`#${[...T.getImageData(K,X,1,1).data].slice(0,3).map(M=>M.toString(16).padStart(2,"0")).join("")}`;x(L)}catch{x(null)}}}function R(){x(null)}return v.jsxs(Ng,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[v.jsx("canvas",{ref:S,style:{display:"none"}}),h?v.jsx(Fg,{ref:p,crossOrigin:"anonymous",draggable:"false",src:t,onClick:k,onMouseMove:y,onMouseLeave:R,onLoad:()=>{const P=S.current,O=P.getContext("2d"),V=p.current;P.width=V.width,P.height=V.height,O.drawImage(V,0,0,V.width,V.height)},style:d?{borderColor:d}:{}}):v.jsx(Ig,{color:c,onChange:l}),v.jsx(Rl,{children:r.map(P=>v.jsx(Eg,{style:{backgroundColor:P},onClick:()=>l(P)},P))}),v.jsxs(Rl,{children:[v.jsx(Tg,{children:"Hex"}),v.jsx(Pg,{value:c,onChange:_})]}),v.jsxs(Rl,{children:[h?v.jsx(Rg,{onClick:w}):v.jsx(jg,{onClick:w}),v.jsx(Og,{onClick:a}),v.jsx(Mg,{onClick:()=>{o(c),l5(c)}})]})]})}const zg=z.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,Bg=z.canvas`
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
`,xs=z.div`
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
`,ws=z.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,ys=z.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,Ss=z.input`
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
`,_s=z.input`
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
`,Ug=z.div`
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
`,Hg=z(f2)`
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
`,qg=z(u2)`
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
`;function $g({position:e,albumCoverUrl:t,initialZoom:r=0,initialHorizontalPosition:n=0,initialVerticalPosition:o=0,initialBlur:a=0,onDone:c,onClose:l}){const{t:h}=sr(),[f,d]=F.useState(r),[x,S]=F.useState(n),[p,w]=F.useState(o),[_,k]=F.useState(a),y=F.useRef(null),R=F.useRef(null),P=F.useRef(!1),O=F.useRef({x:0,y:0});F.useEffect(()=>{if(t){const T=new Image;T.crossOrigin="anonymous",T.src=t,T.onload=()=>{R.current=T,X()}}},[t]),F.useEffect(()=>{X()},[f,x,p,_]);const V=T=>{const Z=y.current;if(!Z)return;const L=Z.getBoundingClientRect(),M=T.clientX-L.left,W=T.clientY-L.top,q=Z.width,ie=Z.height,se=Math.min(q,ie),ce=1+f/100,oe=se*ce,pe=q/2,ke=ie/2,ye=q/2*(x/50),I=ie/2*(p/50),$=pe-oe/2+ye,Y=ke-oe/2+I;M>=$&&M<=$+oe&&W>=Y&&W<=Y+oe&&(P.current=!0,O.current={x:M,y:W},Z.style.cursor="grabbing")},J=T=>{if(!P.current)return;const Z=y.current;if(!Z)return;const L=Z.getBoundingClientRect(),M=T.clientX-L.left,W=T.clientY-L.top,q=M-O.current.x,ie=W-O.current.y;O.current={x:M,y:W};const se=Z.width,ce=Z.height,oe=x+q/(se/2)*50,pe=p+ie/(ce/2)*50;S(Math.max(-50,Math.min(50,oe))),w(Math.max(-50,Math.min(50,pe)))},K=()=>{P.current=!1;const T=y.current;T&&(T.style.cursor="grab")};F.useEffect(()=>{const T=y.current;if(T)return T.addEventListener("mousedown",V),window.addEventListener("mousemove",J),window.addEventListener("mouseup",K),()=>{T.removeEventListener("mousedown",V),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",K)}},[f,x,p,_]);const X=()=>{const T=y.current;if(!T)return;const Z=T.getContext("2d"),L=T.width,M=T.height;Z.clearRect(0,0,L,M);const W=Math.min(L,M),q=1+f/100,ie=W*q,se=L/2,ce=M/2,oe=L/2*(x/50),pe=M/2*(p/50),ke=se-ie/2+oe,ye=ce-ie/2+pe;R.current&&(Z.filter=`blur(${_/5}px)`,Z.drawImage(R.current,ke,ye,ie,ie),Z.filter="none")};return v.jsxs(zg,{style:{position:"absolute",top:e.top,left:e.left,zIndex:2147483647},children:[v.jsx(Bg,{ref:y,width:200,height:200}),v.jsxs(xs,{children:[v.jsxs(ws,{children:[v.jsx(ys,{children:h("COVER_EDITOR_Size")}),v.jsx(Ss,{type:"number",value:f,onChange:T=>d(parseInt(T.target.value)||0)})]}),v.jsx(_s,{type:"range",min:"-100",max:"100",step:"1",value:f,onChange:T=>d(Number(T.target.value))})]}),v.jsxs(xs,{children:[v.jsxs(ws,{children:[v.jsx(ys,{children:h("COVER_EDITOR_Blur")}),v.jsx(Ss,{type:"number",value:_,onChange:T=>k(parseInt(T.target.value)||0)})]}),v.jsx(_s,{type:"range",min:"0",max:"20",step:"1",value:_,onChange:T=>k(Number(T.target.value))})]}),v.jsxs(xs,{children:[v.jsxs(ws,{children:[v.jsx(ys,{children:h("COVER_EDITOR_HorizontalPosition")}),v.jsx(Ss,{type:"number",value:x,onChange:T=>S(parseInt(T.target.value)||0)})]}),v.jsx(_s,{type:"range",min:"-50",max:"50",step:"1",value:x,onChange:T=>S(Number(T.target.value))})]}),v.jsxs(xs,{children:[v.jsxs(ws,{children:[v.jsx(ys,{children:h("COVER_EDITOR_VerticalPosition")}),v.jsx(Ss,{type:"number",value:p,onChange:T=>w(parseInt(T.target.value)||0)})]}),v.jsx(_s,{type:"range",min:"-50",max:"50",step:"1",value:p,onChange:T=>w(Number(T.target.value))})]}),v.jsxs(Ug,{children:[v.jsx(Hg,{onClick:l}),v.jsx(qg,{onClick:()=>c({zoom:f,horizontalPosition:x,verticalPosition:p,blur:_})})]})]})}const Vg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Wg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Gg=z.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Yg=z.input`
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
`,Xg=z.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function Cs({title:e,text:t,value:r,onChange:n}){const o=()=>n(!r);return v.jsxs(Vg,{children:[v.jsx(Wg,{children:e}),v.jsxs(Gg,{onClick:o,children:[v.jsx(Yg,{checked:r,readOnly:!0,type:"checkbox"}),v.jsx(Xg,{active:r,children:t})]})]})}const Jg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Zg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Qg=z.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Kg=z.input`
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
`,e3=z.p`
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
`;function Qu({title:e,text:t,onChange:r,accept:n="image/png, image/jpg, image/jpeg",icon:o}){const a=F.useRef(),c=()=>{a.current.click()},l=h=>{const f=h.target.files[0];t=f.name,f&&r(f)};return v.jsxs(Jg,{onClick:c,children:[v.jsx(Zg,{children:e}),v.jsxs(Qg,{children:[o&&v.jsx(o,{style:{width:"16px",height:"16px",marginLeft:"10px"}}),v.jsx(Kg,{ref:a,type:"file",accept:n,onChange:l}),v.jsx(e3,{active:!0,children:t})]})]})}const t3=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,r3=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,n3=z.div`
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
`,i3=z.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,o3=z.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function a3({title:e,text:t,onClick:r,icon:n}){const o=F.useRef(null);return v.jsxs(t3,{children:[v.jsx(r3,{children:e}),v.jsxs(n3,{ref:o,onClick:()=>{const a=o.current.getBoundingClientRect();r({top:a.bottom+1+window.scrollY,left:a.left+window.scrollX})},children:[n&&v.jsx(i3,{children:v.jsx(n,{})}),v.jsx(o3,{children:t})]})]})}function s3(e){return Tt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function l3(e){return Tt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}function b2(e){return Tt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const c3=z.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,u3=z.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,h3=z.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,f3=z(b2)`
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
`;function x2(){const{t:e}=sr();return v.jsxs(c3,{children:[v.jsx(f3,{}),v.jsx(u3,{children:e("Loading")}),v.jsx(h3,{children:e("LoadingText")})]})}var w2={},rl={},y2={exports:{}},d3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",p3=d3,m3=p3;function S2(){}function _2(){}_2.resetWarningCache=S2;var g3=function(){function e(n,o,a,c,l,h){if(h!==m3){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_2,resetWarningCache:S2};return r.PropTypes=r,r};y2.exports=g3();var C2=y2.exports,jc={},nl={},A2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(pf,function(){var r=function(h,f){return h<f?-1:h>f?1:0},n=function(h){return h.reduce(function(f,d){return f+d},0)},o=function(){function h(d){this.colors=d}var f=h.prototype;return f.palette=function(){return this.colors},f.map=function(d){return d},h}(),a=function(){function h(p,w,_){return(p<<10)+(w<<5)+_}function f(p){var w=[],_=!1;function k(){w.sort(p),_=!0}return{push:function(y){w.push(y),_=!1},peek:function(y){return _||k(),y===void 0&&(y=w.length-1),w[y]},pop:function(){return _||k(),w.pop()},size:function(){return w.length},map:function(y){return w.map(y)},debug:function(){return _||k(),w}}}function d(p,w,_,k,y,R,P){var O=this;O.r1=p,O.r2=w,O.g1=_,O.g2=k,O.b1=y,O.b2=R,O.histo=P}function x(){this.vboxes=new f(function(p,w){return r(p.vbox.count()*p.vbox.volume(),w.vbox.count()*w.vbox.volume())})}function S(p,w){if(w.count()){var _=w.r2-w.r1+1,k=w.g2-w.g1+1,y=Math.max.apply(null,[_,k,w.b2-w.b1+1]);if(w.count()==1)return[w.copy()];var R,P,O,V,J=0,K=[],X=[];if(y==_)for(R=w.r1;R<=w.r2;R++){for(V=0,P=w.g1;P<=w.g2;P++)for(O=w.b1;O<=w.b2;O++)V+=p[h(R,P,O)]||0;K[R]=J+=V}else if(y==k)for(R=w.g1;R<=w.g2;R++){for(V=0,P=w.r1;P<=w.r2;P++)for(O=w.b1;O<=w.b2;O++)V+=p[h(P,R,O)]||0;K[R]=J+=V}else for(R=w.b1;R<=w.b2;R++){for(V=0,P=w.r1;P<=w.r2;P++)for(O=w.g1;O<=w.g2;O++)V+=p[h(P,O,R)]||0;K[R]=J+=V}return K.forEach(function(T,Z){X[Z]=J-T}),function(T){var Z,L,M,W,q,ie=T+"1",se=T+"2",ce=0;for(R=w[ie];R<=w[se];R++)if(K[R]>J/2){for(M=w.copy(),W=w.copy(),q=(Z=R-w[ie])<=(L=w[se]-R)?Math.min(w[se]-1,~~(R+L/2)):Math.max(w[ie],~~(R-1-Z/2));!K[q];)q++;for(ce=X[q];!ce&&K[q-1];)ce=X[--q];return M[se]=q,W[ie]=M[se]+1,[M,W]}}(y==_?"r":y==k?"g":"b")}}return d.prototype={volume:function(p){var w=this;return w._volume&&!p||(w._volume=(w.r2-w.r1+1)*(w.g2-w.g1+1)*(w.b2-w.b1+1)),w._volume},count:function(p){var w=this,_=w.histo;if(!w._count_set||p){var k,y,R,P=0;for(k=w.r1;k<=w.r2;k++)for(y=w.g1;y<=w.g2;y++)for(R=w.b1;R<=w.b2;R++)P+=_[h(k,y,R)]||0;w._count=P,w._count_set=!0}return w._count},copy:function(){var p=this;return new d(p.r1,p.r2,p.g1,p.g2,p.b1,p.b2,p.histo)},avg:function(p){var w=this,_=w.histo;if(!w._avg||p){var k,y,R,P,O=0,V=0,J=0,K=0;if(w.r1===w.r2&&w.g1===w.g2&&w.b1===w.b2)w._avg=[w.r1<<3,w.g1<<3,w.b1<<3];else{for(y=w.r1;y<=w.r2;y++)for(R=w.g1;R<=w.g2;R++)for(P=w.b1;P<=w.b2;P++)O+=k=_[h(y,R,P)]||0,V+=k*(y+.5)*8,J+=k*(R+.5)*8,K+=k*(P+.5)*8;w._avg=O?[~~(V/O),~~(J/O),~~(K/O)]:[~~(8*(w.r1+w.r2+1)/2),~~(8*(w.g1+w.g2+1)/2),~~(8*(w.b1+w.b2+1)/2)]}}return w._avg},contains:function(p){var w=this,_=p[0]>>3;return gval=p[1]>>3,bval=p[2]>>3,_>=w.r1&&_<=w.r2&&gval>=w.g1&&gval<=w.g2&&bval>=w.b1&&bval<=w.b2}},x.prototype={push:function(p){this.vboxes.push({vbox:p,color:p.avg()})},palette:function(){return this.vboxes.map(function(p){return p.color})},size:function(){return this.vboxes.size()},map:function(p){for(var w=this.vboxes,_=0;_<w.size();_++)if(w.peek(_).vbox.contains(p))return w.peek(_).color;return this.nearest(p)},nearest:function(p){for(var w,_,k,y=this.vboxes,R=0;R<y.size();R++)((_=Math.sqrt(Math.pow(p[0]-y.peek(R).color[0],2)+Math.pow(p[1]-y.peek(R).color[1],2)+Math.pow(p[2]-y.peek(R).color[2],2)))<w||w===void 0)&&(w=_,k=y.peek(R).color);return k},forcebw:function(){var p=this.vboxes;p.sort(function(y,R){return r(n(y.color),n(R.color))});var w=p[0].color;w[0]<5&&w[1]<5&&w[2]<5&&(p[0].color=[0,0,0]);var _=p.length-1,k=p[_].color;k[0]>251&&k[1]>251&&k[2]>251&&(p[_].color=[255,255,255])}},{quantize:function(p,w){if(!Number.isInteger(w)||w<1||w>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!p.length||w<2||w>256||!p.length||w<2||w>256)return!1;for(var _=[],k=new Set,y=0;y<p.length;y++){var R=p[y],P=R.join(",");k.has(P)||(k.add(P),_.push(R))}if(_.length<=w)return new o(_);var O=function(Z){var L,M=new Array(32768);return Z.forEach(function(W){L=h(W[0]>>3,W[1]>>3,W[2]>>3),M[L]=(M[L]||0)+1}),M}(p);O.forEach(function(){});var V=function(Z,L){var M,W,q,ie=1e6,se=0,ce=1e6,oe=0,pe=1e6,ke=0;return Z.forEach(function(ye){(M=ye[0]>>3)<ie?ie=M:M>se&&(se=M),(W=ye[1]>>3)<ce?ce=W:W>oe&&(oe=W),(q=ye[2]>>3)<pe?pe=q:q>ke&&(ke=q)}),new d(ie,se,ce,oe,pe,ke,L)}(p,O),J=new f(function(Z,L){return r(Z.count(),L.count())});function K(Z,L){for(var M,W=Z.size(),q=0;q<1e3;){if(W>=L||q++>1e3)return;if((M=Z.pop()).count()){var ie=S(O,M),se=ie[0],ce=ie[1];if(!se)return;Z.push(se),ce&&(Z.push(ce),W++)}else Z.push(M),q++}}J.push(V),K(J,.75*w);for(var X=new f(function(Z,L){return r(Z.count()*Z.volume(),L.count()*L.volume())});J.size();)X.push(J.pop());K(X,w);for(var T=new x;X.size();)T.push(X.pop());return T}}}().quantize,c=function(h){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=h.naturalWidth,this.height=this.canvas.height=h.naturalHeight,this.context.drawImage(h,0,0,this.width,this.height)};c.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var l=function(){};return l.prototype.getColor=function(h,f){return f===void 0&&(f=10),this.getPalette(h,5,f)[0]},l.prototype.getPalette=function(h,f,d){var x=function(_){var k=_.colorCount,y=_.quality;if(k!==void 0&&Number.isInteger(k)){if(k===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");k=Math.max(k,2),k=Math.min(k,20)}else k=10;return(y===void 0||!Number.isInteger(y)||y<1)&&(y=10),{colorCount:k,quality:y}}({colorCount:f,quality:d}),S=new c(h),p=function(_,k,y){for(var R,P,O,V,J,K=_,X=[],T=0;T<k;T+=y)P=K[0+(R=4*T)],O=K[R+1],V=K[R+2],((J=K[R+3])===void 0||J>=125)&&(P>250&&O>250&&V>250||X.push([P,O,V]));return X}(S.getImageData().data,S.width*S.height,x.quality),w=a(p,x.colorCount);return w?w.palette():null},l.prototype.getColorFromUrl=function(h,f,d){var x=this,S=document.createElement("img");S.addEventListener("load",function(){var p=x.getPalette(S,5,d);f(p[0],h)}),S.src=h},l.prototype.getImageData=function(h,f){var d=new XMLHttpRequest;d.open("GET",h,!0),d.responseType="arraybuffer",d.onload=function(){if(this.status==200){var x=new Uint8Array(this.response);i=x.length;for(var S=new Array(i),p=0;p<x.length;p++)S[p]=String.fromCharCode(x[p]);var w=S.join(""),_=window.btoa(w);f("data:image/png;base64,"+_)}},d.send()},l.prototype.getColorAsync=function(h,f,d){var x=this;this.getImageData(h,function(S){var p=document.createElement("img");p.addEventListener("load",function(){var w=x.getPalette(p,5,d);f(w[0],this)}),p.src=S})},l})})(A2);var k2=A2.exports,il={},Rc={};Object.defineProperty(Rc,"__esModule",{value:!0});Rc.default=v3;function v3(e,t,r){return`rgb(${e}, ${t}, ${r})`}var Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});Oc.default=b3;function b3(e,t,r){return`#${[e,t,r].map(n=>{const o=n.toString(16);return o.length===1?`0${o}`:o}).join("")}`}Object.defineProperty(il,"__esModule",{value:!0});il.default=y3;var x3=L2(Rc),w3=L2(Oc);function L2(e){return e&&e.__esModule?e:{default:e}}function y3(e,t){switch(t){case"rgbString":return(0,x3.default)(e[0],e[1],e[2]);case"hex":return(0,w3.default)(e[0],e[1],e[2]);default:return e}}var ol={};Object.defineProperty(ol,"__esModule",{value:!0});ol.default=S3;function S3(e,t=void 0){return new Promise((r,n)=>{const o=new Image;o.addEventListener("load",()=>{r(o)}),o.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),o.crossOrigin=t,o.src=e})}Object.defineProperty(nl,"__esModule",{value:!0});nl.default=k3;var _3=Mc(k2),C3=Mc(il),A3=Mc(ol);function Mc(e){return e&&e.__esModule?e:{default:e}}async function k3(e,t="rgbString",r=null,n=10){const o=await(0,A3.default)(e,r),c=new _3.default().getColor(o,n);return(0,C3.default)(c,t)}Object.defineProperty(jc,"__esModule",{value:!0});jc.default=E3;var Ku=F,L3=N3(nl);function N3(e){return e&&e.__esModule?e:{default:e}}const N2={loading:!0,data:null,error:void 0};function I3(e,t){switch(t.type){case"getColor":return N2;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function E3(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:o=10}=r,[a,c]=(0,Ku.useReducer)(I3,N2);return(0,Ku.useEffect)(()=>{c({type:"getColor"}),(0,L3.default)(e,t,n,o).then(l=>{c({type:"resolveColor",payload:l})}).catch(l=>{c({type:"rejectColor",payload:l})})},[e]),a}Object.defineProperty(rl,"__esModule",{value:!0});rl.default=void 0;var e1=Fc(F),ka=Fc(C2),T3=Fc(jc);function Fc(e){return e&&e.__esModule?e:{default:e}}const Dc=({src:e,format:t,crossOrigin:r,quality:n,children:o})=>{const a=(0,T3.default)(e,t,{crossOrigin:r,quality:n});return e1.default.createElement(e1.default.Fragment,null,o(a))};Dc.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Dc.propTypes={children:ka.default.any.isRequired,src:ka.default.string.isRequired,format:ka.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:ka.default.string,quality:ka.default.number};var P3=Dc;rl.default=P3;var al={},zc={},sl={};Object.defineProperty(sl,"__esModule",{value:!0});sl.default=M3;var j3=Bc(k2),R3=Bc(il),O3=Bc(ol);function Bc(e){return e&&e.__esModule?e:{default:e}}async function M3(e,t=2,r="rgbString",n=null,o=10){const a=await(0,O3.default)(e,n);return new j3.default().getPalette(a,t,o).map(h=>(0,R3.default)(h,r))}Object.defineProperty(zc,"__esModule",{value:!0});zc.default=B3;var t1=F,F3=D3(sl);function D3(e){return e&&e.__esModule?e:{default:e}}const I2={loading:!0,data:[],error:void 0};function z3(e,t){switch(t.type){case"getPalette":return I2;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function B3(e,t=2,r="rgbString",n={}){const{crossOrigin:o=null,quality:a=10}=n,[c,l]=(0,t1.useReducer)(z3,I2);return(0,t1.useEffect)(()=>{l({type:"getPalette"}),(0,F3.default)(e,t,r,o,a).then(h=>{l({type:"resolvePalette",payload:h})}).catch(h=>{l({type:"rejectPalette",payload:h})})},[e]),c}Object.defineProperty(al,"__esModule",{value:!0});al.default=void 0;var r1=Uc(F),Ho=Uc(C2),U3=Uc(zc);function Uc(e){return e&&e.__esModule?e:{default:e}}const Hc=({src:e,colorCount:t,format:r,crossOrigin:n,quality:o,children:a})=>{const c=(0,U3.default)(e,t,r,{crossOrigin:n,quality:o});return r1.default.createElement(r1.default.Fragment,null,a(c))};Hc.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};Hc.propTypes={children:Ho.default.any.isRequired,src:Ho.default.string.isRequired,format:Ho.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:Ho.default.number,crossOrigin:Ho.default.string,quality:Ho.default.number};var H3=Hc;al.default=H3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return o.default}}),e.default=void 0;var t=a(rl),r=a(al),n=a(nl),o=a(sl);function a(l){return l&&l.__esModule?l:{default:l}}var c=t.default;e.default=c})(w2);const q3=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,E2=F.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:o,customFont:a},c)=>{const l=F.useRef(null);return F.useImperativeHandle(c,()=>({getCanvas:()=>l.current})),F.useEffect(()=>{(async()=>{if(!r)return;const f=l.current,d=f.getContext("2d"),x=2480,S=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0,t.coverHorizontalPosition=parseInt(t.coverHorizontalPosition)||0,t.coverVerticalPosition=parseInt(t.coverVerticalPosition)||0,t.coverBlur=parseInt(t.coverBlur)||0;const p=async V=>{const J=new Image;return J.crossOrigin="anonymous",J.src=V,new Promise(K=>{J.onload=()=>{const X=x-t.marginCover*2,T=X/x*11,Z=t.marginCover+t.coverHorizontalPosition*T,L=t.marginCover+t.coverVerticalPosition*T;if(t.coverBlur>0&&(d.filter=`blur(${t.coverBlur*2}px)`),d.drawImage(J,Z,L,X,X),d.filter="none",t.useFade){let M=d.createLinearGradient(0,0,0,3e3-t.marginBackground);const W=y(t.backgroundColor);M.addColorStop(.5,`rgba(${W.r}, ${W.g}, ${W.b}, 0)`),M.addColorStop(.8,t.backgroundColor),d.fillStyle=M,d.fillRect(0,0,f.width,2500-t.marginBackground)}K()}})},w=async()=>{const V=q3(t.textColor,500,134),J=new Blob([V],{type:"image/svg+xml;charset=utf-8"}),K=URL.createObjectURL(J),X=new Image;return X.src=K,new Promise(T=>{X.onload=()=>{d.globalAlpha="0.5",d.drawImage(X,x-70-500,50,500,134),d.globalAlpha="1",URL.revokeObjectURL(K),T()}})},_=async()=>{let V=t.titleSize?parseInt(t.titleSize):230;const J=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){d.font=`bold ${V}px ${J}`;let T=d.measureText(t.albumName).width;for(;T>2480-t.marginSide*2;)V-=1,d.font=`bold ${V}px ${J}`,T=d.measureText(t.albumName).width;n(V,!0)}else d.font=`bold ${V}px ${J}`;d.fillStyle=t.textColor,t.showTracklist?d.fillText(t.albumName,t.marginSide,2500+t.marginTop):d.fillText(t.albumName,t.marginSide,2790+t.marginTop);let K=t.artistsSize?parseInt(t.artistsSize):110;d.font=`bold ${K}px ${a||"Montserrat"}`,t.showTracklist?d.fillText(t.artistsName,t.marginSide,2500+t.marginTop+K*1.3):d.fillText(t.artistsName,t.marginSide,2820+t.marginTop+K),d.font=`bold 70px ${a||"Montserrat"}`,d.fillText(t.titleRelease,t.marginSide,3310);let X=d.measureText(t.titleRelease).width;d.fillText(t.titleRuntime,X+t.marginSide+100,3310),d.globalAlpha=.7,d.font=`bold 60px ${a||"Montserrat"}`,d.fillText(t.runtime,X+t.marginSide+100,3390),d.fillText(t.releaseDate,t.marginSide,3390),d.globalAlpha=1,d.fillStyle=t.color1,d.fillRect(2045-t.marginSide,3368,145,30),d.fillStyle=t.color2,d.fillRect(2190-t.marginSide,3368,145,30),d.fillStyle=t.color3,d.fillRect(2335-t.marginSide,3368,145,30)},k=async()=>{d.fillStyle=t.textColor;let V=t.tracksSize?parseInt(t.tracksSize):50;const J=parseInt(t.marginTop||0),K=parseInt(t.artistsSize)?2500+J+parseInt(t.artistsSize)*1.3+130:2500+J+110*1.2+130,T=K+500-10-parseInt(t.marginTop),Z=2480-t.marginSide,L=t.tracklist.split(`
`).filter(se=>se.trim()!=="");if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const se=oe=>{d.font=`bold ${oe}px ${a||"Montserrat"}`;const pe=oe;let ke=t.marginSide+10,ye=0,I=K,$=0;return L.forEach(Y=>{I+pe*1.3>=T&&(I=K,ke=ke+ye+oe,ye=0);const ee=d.measureText(`${Y}`).width,ne=ke+ee;ee>ye&&(ye=ee),$=Math.max($,ne),I+=pe*1.3}),$};let ce=se(V);for(;ce>Z&&V>1;)V-=1,ce=se(V);o&&o(V,!0)}d.font=`bold ${V}px ${a||"Montserrat"}`;const M=V;let W=t.marginSide+10,q=0,ie=K;L.forEach(se=>{ie+M*1.3>=T&&(ie=K,W=W+q+V,q=0);const ce=d.measureText(`${se}`).width;ce>q&&(q=ce),d.fillText(`${se}`,W,ie),ie+=M*1.3})},y=V=>{const J=parseInt(V.replace("#",""),16);return{r:J>>16&255,g:J>>8&255,b:J&255}},R=V=>{const J=X=>{const T=X/255;return T<=.03928?T/12.92:Math.pow((T+.055)/1.055,2.4)};return .2126*J(V.r)+.7152*J(V.g)+.0722*J(V.b)>.179?"black":"white"},P=async()=>{const V=y(t.backgroundColor),J=R(V),K=t.textColor,X=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${J}/640/spotify:album:${t.albumID}`;let Z=await(await fetch(X)).text();J=="black"?Z=Z.replace(/fill="#000000"/g,`fill="${K}"`):Z=Z.replace(/fill="#ffffff"/g,`fill="${K}"`),Z=Z.replace(t.backgroundColor,"transparent");const L=new Blob([Z],{type:"image/svg+xml"}),M=URL.createObjectURL(L);return new Promise(W=>{const q=new Image;q.src=M,q.onload=function(){d.drawImage(q,2020-t.marginSide,3235,480,120);const ie=f.toDataURL("image/png");e(ie),W()}})},O=async()=>{d.fillStyle=t.backgroundColor,d.fillRect(0,2480-t.marginBackground,x,S-2480+t.marginBackground)};d.clearRect(0,0,x,S),d.fillStyle=t.backgroundColor,d.fillRect(0,0,x,S),t.useUncompressed?await p(await t.uncompressedAlbumCover):await p(t.albumCover),await O(),await _(),t.showTracklist&&await k(),t.useWatermark&&await w(),await P()})()},[r,t,e]),v.jsx("canvas",{ref:l,width:2480,height:3508,style:{display:"none"}})});E2.displayName="CanvasPoster";const $3=z.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Bt({children:e,animationDelay:t=0,...r}){const[n,o]=F.useState(!1);return F.useEffect(()=>{const a=setTimeout(()=>{o(!0)},t);return()=>clearTimeout(a)},[t]),v.jsx($3,{visible:n,animationDelay:t,...r,children:e})}const V3="modulepreload",W3=function(e){return"/"+e},n1={},Ol=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(r.map(h=>{if(h=W3(h),h in n1)return;n1[h]=!0;const f=h.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":V3,f||(x.as="script"),x.crossOrigin="",x.href=h,l&&x.setAttribute("nonce",l),document.head.appendChild(x),f)return new Promise((S,p)=>{x.addEventListener("load",S),x.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return o.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};function Et(e){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Et(e)}var Nn=Uint8Array,sn=Uint16Array,qc=Int32Array,$c=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vc=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),i1=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),T2=function(e,t){for(var r=new sn(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new qc(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},P2=T2($c,2),G3=P2.b,pc=P2.r;G3[28]=258,pc[258]=28;var Y3=T2(Vc,0),o1=Y3.r,mc=new sn(32768);for(var Ut=0;Ut<32768;++Ut){var Fi=(Ut&43690)>>1|(Ut&21845)<<1;Fi=(Fi&52428)>>2|(Fi&13107)<<2,Fi=(Fi&61680)>>4|(Fi&3855)<<4,mc[Ut]=((Fi&65280)>>8|(Fi&255)<<8)>>1}var Ea=function(e,t,r){for(var n=e.length,o=0,a=new sn(t);o<n;++o)e[o]&&++a[e[o]-1];var c=new sn(t);for(o=1;o<t;++o)c[o]=c[o-1]+a[o-1]<<1;var l;if(r){l=new sn(1<<t);var h=15-t;for(o=0;o<n;++o)if(e[o])for(var f=o<<4|e[o],d=t-e[o],x=c[e[o]-1]++<<d,S=x|(1<<d)-1;x<=S;++x)l[mc[x]>>h]=f}else for(l=new sn(n),o=0;o<n;++o)e[o]&&(l[o]=mc[c[e[o]-1]++]>>15-e[o]);return l},wo=new Nn(288);for(var Ut=0;Ut<144;++Ut)wo[Ut]=8;for(var Ut=144;Ut<256;++Ut)wo[Ut]=9;for(var Ut=256;Ut<280;++Ut)wo[Ut]=7;for(var Ut=280;Ut<288;++Ut)wo[Ut]=8;var Gs=new Nn(32);for(var Ut=0;Ut<32;++Ut)Gs[Ut]=5;var X3=Ea(wo,9,0),J3=Ea(Gs,5,0),j2=function(e){return(e+7)/8|0},Z3=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Nn(e.subarray(t,r))},ui=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},La=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},Ml=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,a=r.slice();if(!o)return{t:O2,l:0};if(o==1){var c=new Nn(r[0].s+1);return c[r[0].s]=1,{t:c,l:1}}r.sort(function(V,J){return V.f-J.f}),r.push({s:-1,f:25001});var l=r[0],h=r[1],f=0,d=1,x=2;for(r[0]={s:-1,f:l.f+h.f,l,r:h};d!=o-1;)l=r[r[f].f<r[x].f?f++:x++],h=r[f!=d&&r[f].f<r[x].f?f++:x++],r[d++]={s:-1,f:l.f+h.f,l,r:h};for(var S=a[0].s,n=1;n<o;++n)a[n].s>S&&(S=a[n].s);var p=new sn(S+1),w=gc(r[d-1],p,0);if(w>t){var n=0,_=0,k=w-t,y=1<<k;for(a.sort(function(J,K){return p[K.s]-p[J.s]||J.f-K.f});n<o;++n){var R=a[n].s;if(p[R]>t)_+=y-(1<<w-p[R]),p[R]=t;else break}for(_>>=k;_>0;){var P=a[n].s;p[P]<t?_-=1<<t-p[P]++-1:++n}for(;n>=0&&_;--n){var O=a[n].s;p[O]==t&&(--p[O],++_)}w=t}return{t:new Nn(p),l:w}},gc=function(e,t,r){return e.s==-1?Math.max(gc(e.l,t,r+1),gc(e.r,t,r+1)):t[e.s]=r},a1=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new sn(++t),n=0,o=e[0],a=1,c=function(h){r[n++]=h},l=1;l<=t;++l)if(e[l]==o&&l!=t)++a;else{if(!o&&a>2){for(;a>138;a-=138)c(32754);a>2&&(c(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(c(o),--a;a>6;a-=6)c(8304);a>2&&(c(a-3<<5|8208),a=0)}for(;a--;)c(o);a=1,o=e[l]}return{c:r.subarray(0,n),n:t}},Na=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},R2=function(e,t,r){var n=r.length,o=j2(t+2);e[o]=n&255,e[o+1]=n>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<n;++a)e[o+a+4]=r[a];return(o+4+n)*8},s1=function(e,t,r,n,o,a,c,l,h,f,d){ui(t,d++,r),++o[256];for(var x=Ml(o,15),S=x.t,p=x.l,w=Ml(a,15),_=w.t,k=w.l,y=a1(S),R=y.c,P=y.n,O=a1(_),V=O.c,J=O.n,K=new sn(19),X=0;X<R.length;++X)++K[R[X]&31];for(var X=0;X<V.length;++X)++K[V[X]&31];for(var T=Ml(K,7),Z=T.t,L=T.l,M=19;M>4&&!Z[i1[M-1]];--M);var W=f+5<<3,q=Na(o,wo)+Na(a,Gs)+c,ie=Na(o,S)+Na(a,_)+c+14+3*M+Na(K,Z)+2*K[16]+3*K[17]+7*K[18];if(h>=0&&W<=q&&W<=ie)return R2(t,d,e.subarray(h,h+f));var se,ce,oe,pe;if(ui(t,d,1+(ie<q)),d+=2,ie<q){se=Ea(S,p,0),ce=S,oe=Ea(_,k,0),pe=_;var ke=Ea(Z,L,0);ui(t,d,P-257),ui(t,d+5,J-1),ui(t,d+10,M-4),d+=14;for(var X=0;X<M;++X)ui(t,d+3*X,Z[i1[X]]);d+=3*M;for(var ye=[R,V],I=0;I<2;++I)for(var $=ye[I],X=0;X<$.length;++X){var Y=$[X]&31;ui(t,d,ke[Y]),d+=Z[Y],Y>15&&(ui(t,d,$[X]>>5&127),d+=$[X]>>12)}}else se=X3,ce=wo,oe=J3,pe=Gs;for(var X=0;X<l;++X){var ee=n[X];if(ee>255){var Y=ee>>18&31;La(t,d,se[Y+257]),d+=ce[Y+257],Y>7&&(ui(t,d,ee>>23&31),d+=$c[Y]);var ne=ee&31;La(t,d,oe[ne]),d+=pe[ne],ne>3&&(La(t,d,ee>>5&8191),d+=Vc[ne])}else La(t,d,se[ee]),d+=ce[ee]}return La(t,d,se[256]),d+ce[256]},Q3=new qc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),O2=new Nn(0),K3=function(e,t,r,n,o,a){var c=a.z||e.length,l=new Nn(n+c+5*(1+Math.ceil(c/7e3))+o),h=l.subarray(n,l.length-o),f=a.l,d=(a.r||0)&7;if(t){d&&(h[0]=a.r>>3);for(var x=Q3[t-1],S=x>>13,p=x&8191,w=(1<<r)-1,_=a.p||new sn(32768),k=a.h||new sn(w+1),y=Math.ceil(r/3),R=2*y,P=function(ve){return(e[ve]^e[ve+1]<<y^e[ve+2]<<R)&w},O=new qc(25e3),V=new sn(288),J=new sn(32),K=0,X=0,T=a.i||0,Z=0,L=a.w||0,M=0;T+2<c;++T){var W=P(T),q=T&32767,ie=k[W];if(_[q]=ie,k[W]=q,L<=T){var se=c-T;if((K>7e3||Z>24576)&&(se>423||!f)){d=s1(e,h,0,O,V,J,X,Z,M,T-M,d),Z=K=X=0,M=T;for(var ce=0;ce<286;++ce)V[ce]=0;for(var ce=0;ce<30;++ce)J[ce]=0}var oe=2,pe=0,ke=p,ye=q-ie&32767;if(se>2&&W==P(T-ye))for(var I=Math.min(S,se)-1,$=Math.min(32767,T),Y=Math.min(258,se);ye<=$&&--ke&&q!=ie;){if(e[T+oe]==e[T+oe-ye]){for(var ee=0;ee<Y&&e[T+ee]==e[T+ee-ye];++ee);if(ee>oe){if(oe=ee,pe=ye,ee>I)break;for(var ne=Math.min(ye,ee-2),ue=0,ce=0;ce<ne;++ce){var ge=T-ye+ce&32767,me=_[ge],Se=ge-me&32767;Se>ue&&(ue=Se,ie=ge)}}}q=ie,ie=_[q],ye+=q-ie&32767}if(pe){O[Z++]=268435456|pc[oe]<<18|o1[pe];var Ie=pc[oe]&31,je=o1[pe]&31;X+=$c[Ie]+Vc[je],++V[257+Ie],++J[je],L=T+oe,++K}else O[Z++]=e[T],++V[e[T]]}}for(T=Math.max(T,L);T<c;++T)O[Z++]=e[T],++V[e[T]];d=s1(e,h,f,O,V,J,X,Z,M,T-M,d),f||(a.r=d&7|h[d/8|0]<<3,d-=7,a.h=k,a.p=_,a.i=T,a.w=L)}else{for(var T=a.w||0;T<c+f;T+=65535){var Pe=T+65535;Pe>=c&&(h[d/8|0]=f,Pe=c),d=R2(h,d+1,e.subarray(T,Pe))}a.i=c}return Z3(l,0,n+j2(d)+o)},M2=function(){var e=1,t=0;return{p:function(r){for(var n=e,o=t,a=r.length|0,c=0;c!=a;){for(var l=Math.min(c+2655,a);c<l;++c)o+=n+=r[c];n=(n&65535)+15*(n>>16),o=(o&65535)+15*(o>>16)}e=n,t=o},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},e4=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),c=new Nn(a.length+e.length);c.set(a),c.set(e,a.length),e=c,o.w=a.length}return K3(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,o)},F2=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},t4=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var o=M2();o.p(t.dictionary),F2(e,2,o.d())}};function vc(e,t){t||(t={});var r=M2();r.p(e);var n=e4(e,t,t.dictionary?6:2,4);return t4(n,t),F2(n,n.length-4,r.d()),n}var r4=typeof TextDecoder<"u"&&new TextDecoder,n4=0;try{r4.decode(O2,{stream:!0}),n4=1}catch{}function i4(e){if(Array.isArray(e))return e}function o4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,a,c,l=[],h=!0,f=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(h=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);h=!0);}catch(d){f=!0,o=d}finally{try{if(!h&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(f)throw o}}return l}}function l1(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a4(e,t){if(e){if(typeof e=="string")return l1(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l1(e,t):void 0}}function s4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c1(e,t){return i4(e)||o4(e,t)||a4(e,t)||s4()}function u1(e,t="utf8"){return new TextDecoder(t).decode(e)}const l4=new TextEncoder;function c4(e){return l4.encode(e)}const u4=1024*8,h4=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),Fl={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class Wc{constructor(t=u4,r={}){Ee(this,"buffer");Ee(this,"byteLength");Ee(this,"byteOffset");Ee(this,"length");Ee(this,"offset");Ee(this,"lastWrittenByte");Ee(this,"littleEndian");Ee(this,"_data");Ee(this,"_mark");Ee(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const o=r.offset?r.offset>>>0:0,a=t.byteLength-o;let c=o;(ArrayBuffer.isView(t)||t instanceof Wc)&&(t.byteLength!==t.buffer.byteLength&&(c=t.byteOffset+o),t=t.buffer),n?this.lastWrittenByte=a:this.lastWrittenByte=0,this.buffer=t,this.length=a,this.byteLength=a,this.byteOffset=c,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,c,a),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,o=new Uint8Array(n);o.set(new Uint8Array(this.buffer)),this.buffer=o.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=Fl[r].BYTES_PER_ELEMENT*t,o=this.byteOffset+this.offset,a=this.buffer.slice(o,o+n);if(this.littleEndian===h4&&r!=="uint8"&&r!=="int8"){const l=new Uint8Array(this.buffer.slice(o,o+n));l.reverse();const h=new Fl[r](l.buffer);return this.offset+=n,h.reverse(),h}const c=new Fl[r](a);return this.offset+=n,c}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return u1(this.readBytes(t))}decodeText(t=1,r="utf8"){return u1(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(c4(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function ta(e){let t=e.length;for(;--t>=0;)e[t]=0}const f4=3,d4=258,D2=29,p4=256,m4=p4+1+D2,z2=30,g4=512,v4=new Array((m4+2)*2);ta(v4);const b4=new Array(z2*2);ta(b4);const x4=new Array(g4);ta(x4);const w4=new Array(d4-f4+1);ta(w4);const y4=new Array(D2);ta(y4);const S4=new Array(z2);ta(S4);const _4=(e,t,r,n)=>{let o=e&65535|0,a=e>>>16&65535|0,c=0;for(;r!==0;){c=r>2e3?2e3:r,r-=c;do o=o+t[n++]|0,a=a+o|0;while(--c);o%=65521,a%=65521}return o|a<<16|0};var bc=_4;const C4=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},A4=new Uint32Array(C4()),k4=(e,t,r,n)=>{const o=A4,a=n+r;e^=-1;for(let c=n;c<a;c++)e=e>>>8^o[(e^t[c])&255];return e^-1};var Dn=k4,xc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B2={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const L4=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var N4=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)L4(r,n)&&(e[n]=r[n])}}return e},I4=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,o=0,a=e.length;n<a;n++){let c=e[n];r.set(c,o),o+=c.length}return r},U2={assign:N4,flattenChunks:I4};let H2=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{H2=!1}const Ra=new Uint8Array(256);for(let e=0;e<256;e++)Ra[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ra[254]=Ra[254]=1;var E4=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,o,a,c=e.length,l=0;for(o=0;o<c;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),l+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(l),a=0,o=0;a<l;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t};const T4=(e,t)=>{if(t<65534&&e.subarray&&H2)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var P4=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,o;const a=new Array(r*2);for(o=0,n=0;n<r;){let c=e[n++];if(c<128){a[o++]=c;continue}let l=Ra[c];if(l>4){a[o++]=65533,n+=l-1;continue}for(c&=l===2?31:l===3?15:7;l>1&&n<r;)c=c<<6|e[n++]&63,l--;if(l>1){a[o++]=65533;continue}c<65536?a[o++]=c:(c-=65536,a[o++]=55296|c>>10&1023,a[o++]=56320|c&1023)}return T4(a,o)},j4=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ra[e[r]]>t?r:t},wc={string2buf:E4,buf2string:P4,utf8border:j4};function R4(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var O4=R4;const As=16209,M4=16191;var F4=function(t,r){let n,o,a,c,l,h,f,d,x,S,p,w,_,k,y,R,P,O,V,J,K,X,T,Z;const L=t.state;n=t.next_in,T=t.input,o=n+(t.avail_in-5),a=t.next_out,Z=t.output,c=a-(r-t.avail_out),l=a+(t.avail_out-257),h=L.dmax,f=L.wsize,d=L.whave,x=L.wnext,S=L.window,p=L.hold,w=L.bits,_=L.lencode,k=L.distcode,y=(1<<L.lenbits)-1,R=(1<<L.distbits)-1;e:do{w<15&&(p+=T[n++]<<w,w+=8,p+=T[n++]<<w,w+=8),P=_[p&y];t:for(;;){if(O=P>>>24,p>>>=O,w-=O,O=P>>>16&255,O===0)Z[a++]=P&65535;else if(O&16){V=P&65535,O&=15,O&&(w<O&&(p+=T[n++]<<w,w+=8),V+=p&(1<<O)-1,p>>>=O,w-=O),w<15&&(p+=T[n++]<<w,w+=8,p+=T[n++]<<w,w+=8),P=k[p&R];r:for(;;){if(O=P>>>24,p>>>=O,w-=O,O=P>>>16&255,O&16){if(J=P&65535,O&=15,w<O&&(p+=T[n++]<<w,w+=8,w<O&&(p+=T[n++]<<w,w+=8)),J+=p&(1<<O)-1,J>h){t.msg="invalid distance too far back",L.mode=As;break e}if(p>>>=O,w-=O,O=a-c,J>O){if(O=J-O,O>d&&L.sane){t.msg="invalid distance too far back",L.mode=As;break e}if(K=0,X=S,x===0){if(K+=f-O,O<V){V-=O;do Z[a++]=S[K++];while(--O);K=a-J,X=Z}}else if(x<O){if(K+=f+x-O,O-=x,O<V){V-=O;do Z[a++]=S[K++];while(--O);if(K=0,x<V){O=x,V-=O;do Z[a++]=S[K++];while(--O);K=a-J,X=Z}}}else if(K+=x-O,O<V){V-=O;do Z[a++]=S[K++];while(--O);K=a-J,X=Z}for(;V>2;)Z[a++]=X[K++],Z[a++]=X[K++],Z[a++]=X[K++],V-=3;V&&(Z[a++]=X[K++],V>1&&(Z[a++]=X[K++]))}else{K=a-J;do Z[a++]=Z[K++],Z[a++]=Z[K++],Z[a++]=Z[K++],V-=3;while(V>2);V&&(Z[a++]=Z[K++],V>1&&(Z[a++]=Z[K++]))}}else if(O&64){t.msg="invalid distance code",L.mode=As;break e}else{P=k[(P&65535)+(p&(1<<O)-1)];continue r}break}}else if(O&64)if(O&32){L.mode=M4;break e}else{t.msg="invalid literal/length code",L.mode=As;break e}else{P=_[(P&65535)+(p&(1<<O)-1)];continue t}break}}while(n<o&&a<l);V=w>>3,n-=V,w-=V<<3,p&=(1<<w)-1,t.next_in=n,t.next_out=a,t.avail_in=n<o?5+(o-n):5-(n-o),t.avail_out=a<l?257+(l-a):257-(a-l),L.hold=p,L.bits=w};const qo=15,h1=852,f1=592,d1=0,Dl=1,p1=2,D4=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),z4=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),B4=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),U4=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),H4=(e,t,r,n,o,a,c,l)=>{const h=l.bits;let f=0,d=0,x=0,S=0,p=0,w=0,_=0,k=0,y=0,R=0,P,O,V,J,K,X=null,T;const Z=new Uint16Array(qo+1),L=new Uint16Array(qo+1);let M=null,W,q,ie;for(f=0;f<=qo;f++)Z[f]=0;for(d=0;d<n;d++)Z[t[r+d]]++;for(p=h,S=qo;S>=1&&Z[S]===0;S--);if(p>S&&(p=S),S===0)return o[a++]=1<<24|64<<16|0,o[a++]=1<<24|64<<16|0,l.bits=1,0;for(x=1;x<S&&Z[x]===0;x++);for(p<x&&(p=x),k=1,f=1;f<=qo;f++)if(k<<=1,k-=Z[f],k<0)return-1;if(k>0&&(e===d1||S!==1))return-1;for(L[1]=0,f=1;f<qo;f++)L[f+1]=L[f]+Z[f];for(d=0;d<n;d++)t[r+d]!==0&&(c[L[t[r+d]]++]=d);if(e===d1?(X=M=c,T=20):e===Dl?(X=D4,M=z4,T=257):(X=B4,M=U4,T=0),R=0,d=0,f=x,K=a,w=p,_=0,V=-1,y=1<<p,J=y-1,e===Dl&&y>h1||e===p1&&y>f1)return 1;for(;;){W=f-_,c[d]+1<T?(q=0,ie=c[d]):c[d]>=T?(q=M[c[d]-T],ie=X[c[d]-T]):(q=96,ie=0),P=1<<f-_,O=1<<w,x=O;do O-=P,o[K+(R>>_)+O]=W<<24|q<<16|ie|0;while(O!==0);for(P=1<<f-1;R&P;)P>>=1;if(P!==0?(R&=P-1,R+=P):R=0,d++,--Z[f]===0){if(f===S)break;f=t[r+c[d]]}if(f>p&&(R&J)!==V){for(_===0&&(_=p),K+=x,w=f-_,k=1<<w;w+_<S&&(k-=Z[w+_],!(k<=0));)w++,k<<=1;if(y+=1<<w,e===Dl&&y>h1||e===p1&&y>f1)return 1;V=R&J,o[V]=p<<24|w<<16|K-a|0}}return R!==0&&(o[K+R]=f-_<<24|64<<16|0),l.bits=p,0};var Ta=H4;const q4=0,q2=1,$2=2,{Z_FINISH:m1,Z_BLOCK:$4,Z_TREES:ks,Z_OK:yo,Z_STREAM_END:V4,Z_NEED_DICT:W4,Z_STREAM_ERROR:xn,Z_DATA_ERROR:V2,Z_MEM_ERROR:W2,Z_BUF_ERROR:G4,Z_DEFLATED:g1}=B2,ll=16180,v1=16181,b1=16182,x1=16183,w1=16184,y1=16185,S1=16186,_1=16187,C1=16188,A1=16189,Ys=16190,hi=16191,zl=16192,k1=16193,Bl=16194,L1=16195,N1=16196,I1=16197,E1=16198,Ls=16199,Ns=16200,T1=16201,P1=16202,j1=16203,R1=16204,O1=16205,Ul=16206,M1=16207,F1=16208,qt=16209,G2=16210,Y2=16211,Y4=852,X4=592,J4=15,Z4=J4,D1=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function Q4(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const _o=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<ll||t.mode>Y2?1:0},X2=e=>{if(_o(e))return xn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=ll,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Y4),t.distcode=t.distdyn=new Int32Array(X4),t.sane=1,t.back=-1,yo},J2=e=>{if(_o(e))return xn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,X2(e)},Z2=(e,t)=>{let r;if(_o(e))return xn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?xn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,J2(e))},Q2=(e,t)=>{if(!e)return xn;const r=new Q4;e.state=r,r.strm=e,r.window=null,r.mode=ll;const n=Z2(e,t);return n!==yo&&(e.state=null),n},K4=e=>Q2(e,Z4);let z1=!0,Hl,ql;const e6=e=>{if(z1){Hl=new Int32Array(512),ql=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Ta(q2,e.lens,0,288,Hl,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Ta($2,e.lens,0,32,ql,0,e.work,{bits:5}),z1=!1}e.lencode=Hl,e.lenbits=9,e.distcode=ql,e.distbits=5},K2=(e,t,r,n)=>{let o;const a=e.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),n>=a.wsize?(a.window.set(t.subarray(r-a.wsize,r),0),a.wnext=0,a.whave=a.wsize):(o=a.wsize-a.wnext,o>n&&(o=n),a.window.set(t.subarray(r-n,r-n+o),a.wnext),n-=o,n?(a.window.set(t.subarray(r-n,r),0),a.wnext=n,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0},t6=(e,t)=>{let r,n,o,a,c,l,h,f,d,x,S,p,w,_,k=0,y,R,P,O,V,J,K,X;const T=new Uint8Array(4);let Z,L;const M=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(_o(e)||!e.output||!e.input&&e.avail_in!==0)return xn;r=e.state,r.mode===hi&&(r.mode=zl),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,d=r.bits,x=l,S=h,X=yo;e:for(;;)switch(r.mode){case ll:if(r.wrap===0){r.mode=zl;break}for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,T[0]=f&255,T[1]=f>>>8&255,r.check=Dn(r.check,T,2,0),f=0,d=0,r.mode=v1;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=qt;break}if((f&15)!==g1){e.msg="unknown compression method",r.mode=qt;break}if(f>>>=4,d-=4,K=(f&15)+8,r.wbits===0&&(r.wbits=K),K>15||K>r.wbits){e.msg="invalid window size",r.mode=qt;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?A1:hi,f=0,d=0;break;case v1:for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.flags=f,(r.flags&255)!==g1){e.msg="unknown compression method",r.mode=qt;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=qt;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,r.check=Dn(r.check,T,2,0)),f=0,d=0,r.mode=b1;case b1:for(;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,T[2]=f>>>16&255,T[3]=f>>>24&255,r.check=Dn(r.check,T,4,0)),f=0,d=0,r.mode=x1;case x1:for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,r.check=Dn(r.check,T,2,0)),f=0,d=0,r.mode=w1;case w1:if(r.flags&1024){for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(T[0]=f&255,T[1]=f>>>8&255,r.check=Dn(r.check,T,2,0)),f=0,d=0}else r.head&&(r.head.extra=null);r.mode=y1;case y1:if(r.flags&1024&&(p=r.length,p>l&&(p=l),p&&(r.head&&(K=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(a,a+p),K)),r.flags&512&&r.wrap&4&&(r.check=Dn(r.check,n,p,a)),l-=p,a+=p,r.length-=p),r.length))break e;r.length=0,r.mode=S1;case S1:if(r.flags&2048){if(l===0)break e;p=0;do K=n[a+p++],r.head&&K&&r.length<65536&&(r.head.name+=String.fromCharCode(K));while(K&&p<l);if(r.flags&512&&r.wrap&4&&(r.check=Dn(r.check,n,p,a)),l-=p,a+=p,K)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=_1;case _1:if(r.flags&4096){if(l===0)break e;p=0;do K=n[a+p++],r.head&&K&&r.length<65536&&(r.head.comment+=String.fromCharCode(K));while(K&&p<l);if(r.flags&512&&r.wrap&4&&(r.check=Dn(r.check,n,p,a)),l-=p,a+=p,K)break e}else r.head&&(r.head.comment=null);r.mode=C1;case C1:if(r.flags&512){for(;d<16;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=qt;break}f=0,d=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=hi;break;case A1:for(;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}e.adler=r.check=D1(f),f=0,d=0,r.mode=Ys;case Ys:if(r.havedict===0)return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=d,W4;e.adler=r.check=1,r.mode=hi;case hi:if(t===$4||t===ks)break e;case zl:if(r.last){f>>>=d&7,d-=d&7,r.mode=Ul;break}for(;d<3;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}switch(r.last=f&1,f>>>=1,d-=1,f&3){case 0:r.mode=k1;break;case 1:if(e6(r),r.mode=Ls,t===ks){f>>>=2,d-=2;break e}break;case 2:r.mode=N1;break;case 3:e.msg="invalid block type",r.mode=qt}f>>>=2,d-=2;break;case k1:for(f>>>=d&7,d-=d&7;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=qt;break}if(r.length=f&65535,f=0,d=0,r.mode=Bl,t===ks)break e;case Bl:r.mode=L1;case L1:if(p=r.length,p){if(p>l&&(p=l),p>h&&(p=h),p===0)break e;o.set(n.subarray(a,a+p),c),l-=p,a+=p,h-=p,c+=p,r.length-=p;break}r.mode=hi;break;case N1:for(;d<14;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.nlen=(f&31)+257,f>>>=5,d-=5,r.ndist=(f&31)+1,f>>>=5,d-=5,r.ncode=(f&15)+4,f>>>=4,d-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=qt;break}r.have=0,r.mode=I1;case I1:for(;r.have<r.ncode;){for(;d<3;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.lens[M[r.have++]]=f&7,f>>>=3,d-=3}for(;r.have<19;)r.lens[M[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,Z={bits:r.lenbits},X=Ta(q4,r.lens,0,19,r.lencode,0,r.work,Z),r.lenbits=Z.bits,X){e.msg="invalid code lengths set",r.mode=qt;break}r.have=0,r.mode=E1;case E1:for(;r.have<r.nlen+r.ndist;){for(;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,R=k>>>16&255,P=k&65535,!(y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(P<16)f>>>=y,d-=y,r.lens[r.have++]=P;else{if(P===16){for(L=y+2;d<L;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(f>>>=y,d-=y,r.have===0){e.msg="invalid bit length repeat",r.mode=qt;break}K=r.lens[r.have-1],p=3+(f&3),f>>>=2,d-=2}else if(P===17){for(L=y+3;d<L;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=y,d-=y,K=0,p=3+(f&7),f>>>=3,d-=3}else{for(L=y+7;d<L;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=y,d-=y,K=0,p=11+(f&127),f>>>=7,d-=7}if(r.have+p>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=qt;break}for(;p--;)r.lens[r.have++]=K}}if(r.mode===qt)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=qt;break}if(r.lenbits=9,Z={bits:r.lenbits},X=Ta(q2,r.lens,0,r.nlen,r.lencode,0,r.work,Z),r.lenbits=Z.bits,X){e.msg="invalid literal/lengths set",r.mode=qt;break}if(r.distbits=6,r.distcode=r.distdyn,Z={bits:r.distbits},X=Ta($2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,Z),r.distbits=Z.bits,X){e.msg="invalid distances set",r.mode=qt;break}if(r.mode=Ls,t===ks)break e;case Ls:r.mode=Ns;case Ns:if(l>=6&&h>=258){e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=d,F4(e,S),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,d=r.bits,r.mode===hi&&(r.back=-1);break}for(r.back=0;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,R=k>>>16&255,P=k&65535,!(y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(R&&!(R&240)){for(O=y,V=R,J=P;k=r.lencode[J+((f&(1<<O+V)-1)>>O)],y=k>>>24,R=k>>>16&255,P=k&65535,!(O+y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=O,d-=O,r.back+=O}if(f>>>=y,d-=y,r.back+=y,r.length=P,R===0){r.mode=O1;break}if(R&32){r.back=-1,r.mode=hi;break}if(R&64){e.msg="invalid literal/length code",r.mode=qt;break}r.extra=R&15,r.mode=T1;case T1:if(r.extra){for(L=r.extra;d<L;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,d-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=P1;case P1:for(;k=r.distcode[f&(1<<r.distbits)-1],y=k>>>24,R=k>>>16&255,P=k&65535,!(y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(!(R&240)){for(O=y,V=R,J=P;k=r.distcode[J+((f&(1<<O+V)-1)>>O)],y=k>>>24,R=k>>>16&255,P=k&65535,!(O+y<=d);){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}f>>>=O,d-=O,r.back+=O}if(f>>>=y,d-=y,r.back+=y,R&64){e.msg="invalid distance code",r.mode=qt;break}r.offset=P,r.extra=R&15,r.mode=j1;case j1:if(r.extra){for(L=r.extra;d<L;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,d-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=qt;break}r.mode=R1;case R1:if(h===0)break e;if(p=S-h,r.offset>p){if(p=r.offset-p,p>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=qt;break}p>r.wnext?(p-=r.wnext,w=r.wsize-p):w=r.wnext-p,p>r.length&&(p=r.length),_=r.window}else _=o,w=c-r.offset,p=r.length;p>h&&(p=h),h-=p,r.length-=p;do o[c++]=_[w++];while(--p);r.length===0&&(r.mode=Ns);break;case O1:if(h===0)break e;o[c++]=r.length,h--,r.mode=Ns;break;case Ul:if(r.wrap){for(;d<32;){if(l===0)break e;l--,f|=n[a++]<<d,d+=8}if(S-=h,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Dn(r.check,o,S,c-S):bc(r.check,o,S,c-S)),S=h,r.wrap&4&&(r.flags?f:D1(f))!==r.check){e.msg="incorrect data check",r.mode=qt;break}f=0,d=0}r.mode=M1;case M1:if(r.wrap&&r.flags){for(;d<32;){if(l===0)break e;l--,f+=n[a++]<<d,d+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=qt;break}f=0,d=0}r.mode=F1;case F1:X=V4;break e;case qt:X=V2;break e;case G2:return W2;case Y2:default:return xn}return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=d,(r.wsize||S!==e.avail_out&&r.mode<qt&&(r.mode<Ul||t!==m1))&&K2(e,e.output,e.next_out,S-e.avail_out),x-=e.avail_in,S-=e.avail_out,e.total_in+=x,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Dn(r.check,o,S,e.next_out-S):bc(r.check,o,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===hi?128:0)+(r.mode===Ls||r.mode===Bl?256:0),(x===0&&S===0||t===m1)&&X===yo&&(X=G4),X},r6=e=>{if(_o(e))return xn;let t=e.state;return t.window&&(t.window=null),e.state=null,yo},n6=(e,t)=>{if(_o(e))return xn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,yo):xn},i6=(e,t)=>{const r=t.length;let n,o,a;return _o(e)||(n=e.state,n.wrap!==0&&n.mode!==Ys)?xn:n.mode===Ys&&(o=1,o=bc(o,t,r,0),o!==n.check)?V2:(a=K2(e,t,r,r),a?(n.mode=G2,W2):(n.havedict=1,yo))};var o6=J2,a6=Z2,s6=X2,l6=K4,c6=Q2,u6=t6,h6=r6,f6=n6,d6=i6,p6="pako inflate (from Nodeca project)",fi={inflateReset:o6,inflateReset2:a6,inflateResetKeep:s6,inflateInit:l6,inflateInit2:c6,inflate:u6,inflateEnd:h6,inflateGetHeader:f6,inflateSetDictionary:d6,inflateInfo:p6};function m6(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var g6=m6;const e0=Object.prototype.toString,{Z_NO_FLUSH:v6,Z_FINISH:b6,Z_OK:Oa,Z_STREAM_END:$l,Z_NEED_DICT:Vl,Z_STREAM_ERROR:x6,Z_DATA_ERROR:B1,Z_MEM_ERROR:w6}=B2;function Ua(e){this.options=U2.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new O4,this.strm.avail_out=0;let r=fi.inflateInit2(this.strm,t.windowBits);if(r!==Oa)throw new Error(xc[r]);if(this.header=new g6,fi.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=wc.string2buf(t.dictionary):e0.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=fi.inflateSetDictionary(this.strm,t.dictionary),r!==Oa)))throw new Error(xc[r])}Ua.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,o=this.options.dictionary;let a,c,l;if(this.ended)return!1;for(t===~~t?c=t:c=t===!0?b6:v6,e0.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),a=fi.inflate(r,c),a===Vl&&o&&(a=fi.inflateSetDictionary(r,o),a===Oa?a=fi.inflate(r,c):a===B1&&(a=Vl));r.avail_in>0&&a===$l&&r.state.wrap>0&&e[r.next_in]!==0;)fi.inflateReset(r),a=fi.inflate(r,c);switch(a){case x6:case B1:case Vl:case w6:return this.onEnd(a),this.ended=!0,!1}if(l=r.avail_out,r.next_out&&(r.avail_out===0||a===$l))if(this.options.to==="string"){let h=wc.utf8border(r.output,r.next_out),f=r.next_out-h,d=wc.buf2string(r.output,h);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(h,h+f),0),this.onData(d)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(a===Oa&&l===0)){if(a===$l)return a=fi.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Ua.prototype.onData=function(e){this.chunks.push(e)};Ua.prototype.onEnd=function(e){e===Oa&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=U2.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function y6(e,t){const r=new Ua(t);if(r.push(e),r.err)throw r.msg||xc[r.err];return r.result}var S6=Ua,_6=y6,C6={Inflate:S6,inflate:_6};const{Inflate:A6,inflate:k6}=C6;var U1=A6,L6=k6;const t0=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;t0[e]=t}const H1=4294967295;function N6(e,t,r){let n=e;for(let o=0;o<r;o++)n=t0[(n^t[o])&255]^n>>>8;return n}function I6(e,t){return(N6(H1,e,t)^H1)>>>0}function q1(e,t,r){const n=e.readUint32(),o=I6(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(o!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${o}`)}function r0(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function n0(e,t,r,n){let o=0;for(;o<n;o++)t[o]=e[o];for(;o<r;o++)t[o]=e[o]+t[o-n]&255}function i0(e,t,r,n){let o=0;if(r.length===0)for(;o<n;o++)t[o]=e[o];else for(;o<n;o++)t[o]=e[o]+r[o]&255}function o0(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+(t[a-o]>>1)&255}else{for(;a<o;a++)t[a]=e[a]+(r[a]>>1)&255;for(;a<n;a++)t[a]=e[a]+(t[a-o]+r[a]>>1)&255}}function a0(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+t[a-o]&255}else{for(;a<o;a++)t[a]=e[a]+r[a]&255;for(;a<n;a++)t[a]=e[a]+E6(t[a-o],r[a],r[a-o])&255}}function E6(e,t,r){const n=e+t-r,o=Math.abs(n-e),a=Math.abs(n-t),c=Math.abs(n-r);return o<=a&&o<=c?e:a<=c?t:r}function T6(e,t,r,n,o,a){switch(e){case 0:r0(t,r,o);break;case 1:n0(t,r,o,a);break;case 2:i0(t,r,n,o);break;case 3:o0(t,r,n,o,a);break;case 4:a0(t,r,n,o,a);break;default:throw new Error(`Unsupported filter: ${e}`)}}const P6=new Uint16Array([255]),j6=new Uint8Array(P6.buffer),R6=j6[0]===255;function O6(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],l=Math.ceil(a/8)*o,h=new Uint8Array(n*r*l);let f=0;for(let d=0;d<7;d++){const x=c[d],S=Math.ceil((r-x.x)/x.xStep),p=Math.ceil((n-x.y)/x.yStep);if(S<=0||p<=0)continue;const w=S*l,_=new Uint8Array(w);for(let k=0;k<p;k++){const y=t[f++],R=t.subarray(f,f+w);f+=w;const P=new Uint8Array(w);T6(y,R,P,_,w,l),_.set(P);for(let O=0;O<S;O++){const V=x.x+O*x.xStep,J=x.y+k*x.yStep;if(!(V>=r||J>=n))for(let K=0;K<l;K++)h[(J*r+V)*l+K]=P[O*l+K]}}}if(a===16){const d=new Uint16Array(h.buffer);if(R6)for(let x=0;x<d.length;x++)d[x]=M6(d[x]);return d}else return h}function M6(e){return(e&255)<<8|e>>8&255}const F6=new Uint16Array([255]),D6=new Uint8Array(F6.buffer),z6=D6[0]===255,B6=new Uint8Array(0);function $1(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=Math.ceil(a/8)*o,l=Math.ceil(a/8*o*r),h=new Uint8Array(n*l);let f=B6,d=0,x,S;for(let p=0;p<n;p++){switch(x=t.subarray(d+1,d+1+l),S=h.subarray(p*l,(p+1)*l),t[d]){case 0:r0(x,S,l);break;case 1:n0(x,S,l,c);break;case 2:i0(x,S,f,l);break;case 3:o0(x,S,f,l,c);break;case 4:a0(x,S,f,l,c);break;default:throw new Error(`Unsupported filter: ${t[d]}`)}f=S,d+=l+1}if(a===16){const p=new Uint16Array(h.buffer);if(z6)for(let w=0;w<p.length;w++)p[w]=U6(p[w]);return p}else return h}function U6(e){return(e&255)<<8|e>>8&255}const Ds=Uint8Array.of(137,80,78,71,13,10,26,10);function V1(e){if(!H6(e.readBytes(Ds.length)))throw new Error("wrong PNG signature")}function H6(e){if(e.length<Ds.length)return!1;for(let t=0;t<Ds.length;t++)if(e[t]!==Ds[t])return!1;return!0}const q6="tEXt",$6=0,s0=new TextDecoder("latin1");function V6(e){if(G6(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const W6=/^[\u0000-\u00FF]*$/;function G6(e){if(!W6.test(e))throw new Error("invalid latin1 text")}function Y6(e,t,r){const n=l0(t);e[n]=X6(t,r-n.length-1)}function l0(e){for(e.mark();e.readByte()!==$6;);const t=e.offset;e.reset();const r=s0.decode(e.readBytes(t-e.offset-1));return e.skip(1),V6(r),r}function X6(e,t){return s0.decode(e.readBytes(t))}const an={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Wl={UNKNOWN:-1,DEFLATE:0},W1={UNKNOWN:-1,ADAPTIVE:0},Gl={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Is={NONE:0,BACKGROUND:1,PREVIOUS:2},Yl={SOURCE:0,OVER:1};class J6 extends Wc{constructor(r,n={}){super(r);Ee(this,"_checkCrc");Ee(this,"_inflator");Ee(this,"_png");Ee(this,"_apng");Ee(this,"_end");Ee(this,"_hasPalette");Ee(this,"_palette");Ee(this,"_hasTransparency");Ee(this,"_transparency");Ee(this,"_compressionMethod");Ee(this,"_filterMethod");Ee(this,"_interlaceMethod");Ee(this,"_colorType");Ee(this,"_isAnimated");Ee(this,"_numberOfFrames");Ee(this,"_numberOfPlays");Ee(this,"_frames");Ee(this,"_writingDataChunks");const{checkCrc:o=!1}=n;this._checkCrc=o,this._inflator=new U1,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Wl.UNKNOWN,this._filterMethod=W1.UNKNOWN,this._interlaceMethod=Gl.UNKNOWN,this._colorType=an.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(V1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(V1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const o=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case q6:Y6(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?q1(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const o=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=o+r;break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?q1(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=Z6(this.readUint8());const n=this.readUint8();this._colorType=n;let o;switch(n){case an.GREYSCALE:o=1;break;case an.TRUECOLOUR:o=3;break;case an.INDEXED_COLOUR:o=1;break;case an.GREYSCALE_ALPHA:o=2;break;case an.TRUECOLOUR_ALPHA:o=4;break;case an.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=o,this._compressionMethod=this.readUint8(),this._compressionMethod!==Wl.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const o=[];this._palette=o;for(let a=0;a<n;a++)o.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,o=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,o=this.offset+this.byteOffset;if(o+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case an.GREYSCALE:case an.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case an.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const o=this.readByte();this._palette[n].push(o)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case an.UNKNOWN:case an.GREYSCALE_ALPHA:case an.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=l0(this),o=this.readUint8();if(o!==Wl.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${o}`);const a=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:L6(a)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),o=this.readByte();this._png.resolution={x:r,y:n,unit:o}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},o=this._frames.at(r);if(o){if(o.data=$1({data:o.data,width:o.width,height:o.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||o.xOffset===0&&o.yOffset===0&&o.width===this._png.width&&o.height===this._png.height)n.data=o.data;else{const a=this._apng.frames.at(r-1);this.disposeFrame(o,a,n),this.addFrameDataToCanvas(n,o)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,o){switch(r.disposeOp){case Is.NONE:break;case Is.BACKGROUND:for(let a=0;a<this._png.height;a++)for(let c=0;c<this._png.width;c++){const l=(a*r.width+c)*this._png.channels;for(let h=0;h<this._png.channels;h++)o.data[l+h]=0}break;case Is.PREVIOUS:o.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const o=1<<this._png.depth,a=(c,l)=>{const h=((c+n.yOffset)*this._png.width+n.xOffset+l)*this._png.channels,f=(c*n.width+l)*this._png.channels;return{index:h,frameIndex:f}};switch(n.blendOp){case Yl.SOURCE:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let d=0;d<this._png.channels;d++)r.data[h+d]=n.data[f+d]}break;case Yl.OVER:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let d=0;d<this._png.channels;d++){const x=n.data[f+this._png.channels-1]/o,S=d%(this._png.channels-1)===0?1:n.data[f+d],p=Math.floor(x*S+(1-x)*r.data[h+d]);r.data[h+d]+=p}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==W1.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===Gl.NO_INTERLACE)this._png.data=$1({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===Gl.ADAM7)this._png.data=O6({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Is.NONE,blendOp:Yl.SOURCE,data:r}),this._inflator=new U1,this._writingDataChunks=!1}}function Z6(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var G1;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(G1||(G1={}));function Q6(e,t){return new J6(e,t).decode()}var nt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function Xl(){nt.console&&typeof nt.console.log=="function"&&nt.console.log.apply(nt.console,arguments)}var Ot={log:Xl,warn:function(e){nt.console&&(typeof nt.console.warn=="function"?nt.console.warn.apply(nt.console,arguments):Xl.call(null,arguments))},error:function(e){nt.console&&(typeof nt.console.error=="function"?nt.console.error.apply(nt.console,arguments):Xl(e))}};function Jl(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){vo(n.response,t,r)},n.onerror=function(){Ot.error("could not download file")},n.send()}function Y1(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Es(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var vo=nt.saveAs||((typeof window>"u"?"undefined":Et(window))!=="object"||window!==nt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=nt.URL||nt.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?Y1(o.href)?Jl(e,t,r):Es(o,o.target="_blank"):Es(o)):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){Es(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(Y1(e))Jl(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){Es(n)})}else navigator.msSaveOrOpenBlob(function(o,a){return a===void 0?a={autoBom:!1}:Et(a)!=="object"&&(Ot.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return Jl(e,t,r);var o=e.type==="application/octet-stream",a=/constructor/i.test(nt.HTMLElement)||nt.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&a)&&(typeof FileReader>"u"?"undefined":Et(FileReader))==="object"){var l=new FileReader;l.onloadend=function(){var d=l.result;d=c?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=d:location=d,n=null},l.readAsDataURL(e)}else{var h=nt.URL||nt.webkitURL,f=h.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){h.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function c0(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(l){return[parseInt(l[1]),parseInt(l[2]),parseInt(l[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(l){return[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(l){return[parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16),parseInt(l[3]+l[3],16)]}}],n=0;n<r.length;n++){var o=r[n].re,a=r[n].process,c=o.exec(e);c&&(t=a(c),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var l=this.r.toString(16),h=this.g.toString(16),f=this.b.toString(16);return l.length==1&&(l="0"+l),h.length==1&&(h="0"+h),f.length==1&&(f="0"+f),"#"+l+h+f}}var zs=nt.atob.bind(nt),X1=nt.btoa.bind(nt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function Zl(e,t){var r=e[0],n=e[1],o=e[2],a=e[3];r=Nr(r,n,o,a,t[0],7,-680876936),a=Nr(a,r,n,o,t[1],12,-389564586),o=Nr(o,a,r,n,t[2],17,606105819),n=Nr(n,o,a,r,t[3],22,-1044525330),r=Nr(r,n,o,a,t[4],7,-176418897),a=Nr(a,r,n,o,t[5],12,1200080426),o=Nr(o,a,r,n,t[6],17,-1473231341),n=Nr(n,o,a,r,t[7],22,-45705983),r=Nr(r,n,o,a,t[8],7,1770035416),a=Nr(a,r,n,o,t[9],12,-1958414417),o=Nr(o,a,r,n,t[10],17,-42063),n=Nr(n,o,a,r,t[11],22,-1990404162),r=Nr(r,n,o,a,t[12],7,1804603682),a=Nr(a,r,n,o,t[13],12,-40341101),o=Nr(o,a,r,n,t[14],17,-1502002290),r=Ir(r,n=Nr(n,o,a,r,t[15],22,1236535329),o,a,t[1],5,-165796510),a=Ir(a,r,n,o,t[6],9,-1069501632),o=Ir(o,a,r,n,t[11],14,643717713),n=Ir(n,o,a,r,t[0],20,-373897302),r=Ir(r,n,o,a,t[5],5,-701558691),a=Ir(a,r,n,o,t[10],9,38016083),o=Ir(o,a,r,n,t[15],14,-660478335),n=Ir(n,o,a,r,t[4],20,-405537848),r=Ir(r,n,o,a,t[9],5,568446438),a=Ir(a,r,n,o,t[14],9,-1019803690),o=Ir(o,a,r,n,t[3],14,-187363961),n=Ir(n,o,a,r,t[8],20,1163531501),r=Ir(r,n,o,a,t[13],5,-1444681467),a=Ir(a,r,n,o,t[2],9,-51403784),o=Ir(o,a,r,n,t[7],14,1735328473),r=Er(r,n=Ir(n,o,a,r,t[12],20,-1926607734),o,a,t[5],4,-378558),a=Er(a,r,n,o,t[8],11,-2022574463),o=Er(o,a,r,n,t[11],16,1839030562),n=Er(n,o,a,r,t[14],23,-35309556),r=Er(r,n,o,a,t[1],4,-1530992060),a=Er(a,r,n,o,t[4],11,1272893353),o=Er(o,a,r,n,t[7],16,-155497632),n=Er(n,o,a,r,t[10],23,-1094730640),r=Er(r,n,o,a,t[13],4,681279174),a=Er(a,r,n,o,t[0],11,-358537222),o=Er(o,a,r,n,t[3],16,-722521979),n=Er(n,o,a,r,t[6],23,76029189),r=Er(r,n,o,a,t[9],4,-640364487),a=Er(a,r,n,o,t[12],11,-421815835),o=Er(o,a,r,n,t[15],16,530742520),r=Tr(r,n=Er(n,o,a,r,t[2],23,-995338651),o,a,t[0],6,-198630844),a=Tr(a,r,n,o,t[7],10,1126891415),o=Tr(o,a,r,n,t[14],15,-1416354905),n=Tr(n,o,a,r,t[5],21,-57434055),r=Tr(r,n,o,a,t[12],6,1700485571),a=Tr(a,r,n,o,t[3],10,-1894986606),o=Tr(o,a,r,n,t[10],15,-1051523),n=Tr(n,o,a,r,t[1],21,-2054922799),r=Tr(r,n,o,a,t[8],6,1873313359),a=Tr(a,r,n,o,t[15],10,-30611744),o=Tr(o,a,r,n,t[6],15,-1560198380),n=Tr(n,o,a,r,t[13],21,1309151649),r=Tr(r,n,o,a,t[4],6,-145523070),a=Tr(a,r,n,o,t[11],10,-1120210379),o=Tr(o,a,r,n,t[2],15,718787259),n=Tr(n,o,a,r,t[9],21,-343485551),e[0]=Hi(r,e[0]),e[1]=Hi(n,e[1]),e[2]=Hi(o,e[2]),e[3]=Hi(a,e[3])}function cl(e,t,r,n,o,a){return t=Hi(Hi(t,e),Hi(n,a)),Hi(t<<o|t>>>32-o,r)}function Nr(e,t,r,n,o,a,c){return cl(t&r|~t&n,e,t,o,a,c)}function Ir(e,t,r,n,o,a,c){return cl(t&n|r&~n,e,t,o,a,c)}function Er(e,t,r,n,o,a,c){return cl(t^r^n,e,t,o,a,c)}function Tr(e,t,r,n,o,a,c){return cl(r^(t|~n),e,t,o,a,c)}function u0(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)Zl(n,K6(e.substring(t-64,t)));e=e.substring(t-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(Zl(n,o),t=0;t<16;t++)o[t]=0;return o[14]=8*r,Zl(n,o),n}function K6(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var J1="0123456789abcdef".split("");function ev(e){for(var t="",r=0;r<4;r++)t+=J1[e>>8*r+4&15]+J1[e>>8*r&15];return t}function tv(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function yc(e){return u0(e).map(tv).join("")}var rv=function(e){for(var t=0;t<e.length;t++)e[t]=ev(e[t]);return e.join("")}(u0("hello"))!="5d41402abc4b2a76b9719d911017c592";function Hi(e,t){if(rv){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Sc(e,t){var r,n,o,a;if(e!==r){for(var c=(o=e,a=1+(256/e.length|0),new Array(a+1).join(o)),l=[],h=0;h<256;h++)l[h]=h;var f=0;for(h=0;h<256;h++){var d=l[h];f=(f+d+c.charCodeAt(h))%256,l[h]=l[f],l[f]=d}r=e,n=l}else l=n;var x=t.length,S=0,p=0,w="";for(h=0;h<x;h++)p=(p+(d=l[S=(S+1)%256]))%256,l[S]=l[p],l[p]=d,c=l[(l[S]+l[p])%256],w+=String.fromCharCode(t.charCodeAt(h)^c);return w}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var Z1={print:4,modify:8,copy:16,"annot-forms":32};function Wo(e,t,r,n){this.v=1,this.r=2;var o=192;e.forEach(function(l){if(Z1.perm!==void 0)throw new Error("Invalid permission: "+l);o+=Z1[l]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(t+this.padding).substr(0,32),c=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,c),this.P=-(1+(255^o)),this.encryptionKey=yc(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=Sc(this.encryptionKey,this.padding)}function Go(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);t+=o<33||o===35||o===37||o===40||o===41||o===47||o===60||o===62||o===91||o===93||o===123||o===125||o>126?"#"+("0"+o.toString(16)).slice(-2):e[n]}return t}function Q1(e){if(Et(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,o){if(o=o||!1,typeof r!="string"||typeof n!="function"||typeof o!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var a=Math.random().toString(35);return t[r][a]=[n,!!o],a},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),o=[];for(var a in t[r]){var c=t[r][a];try{c[0].apply(e,n)}catch(l){nt.console&&Ot.error("jsPDF PubSub Error",l.message,l)}c[1]&&o.push(a)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Xs(e){if(!(this instanceof Xs))return new Xs(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function h0(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function bo(e,t,r,n,o){if(!(this instanceof bo))return new bo(e,t,r,n,o);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,h0.call(this,n,o)}function Yo(e,t,r,n,o){if(!(this instanceof Yo))return new Yo(e,t,r,n,o);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,h0.call(this,n,o)}function Ge(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],o=arguments[2],a=arguments[3],c=[],l=1,h=16,f="S",d=null;Et(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,o=e.format||o,a=e.compress||e.compressPdf||a,(d=e.encryption||null)!==null&&(d.userPassword=d.userPassword||"",d.ownerPassword=d.ownerPassword||"",d.userPermissions=d.userPermissions||[]),l=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(h=e.floatPrecision),f=e.defaultPathOperation||"S"),c=e.filters||(a===!0?["FlateEncode"]:c),n=n||"mm",r=(""+(r||"P")).toLowerCase();var x=e.putOnlyUsedFonts||!1,S={},p={internal:{},__private__:{}};p.__private__.PubSub=Q1;var w="1.3",_=p.__private__.getPdfVersion=function(){return w};p.__private__.setPdfVersion=function(m){w=m};var k={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};p.__private__.getPageFormats=function(){return k};var y=p.__private__.getPageFormat=function(m){return k[m]};o=o||"a4";var R="compat",P="advanced",O=R;function V(){this.saveGraphicsState(),G(new Je(Qe,0,0,-Qe,0,no()*Qe).toString()+" cm"),this.setFontSize(this.getFontSize()/Qe),f="n",O=P}function J(){this.restoreGraphicsState(),f="S",O=R}var K=p.__private__.combineFontStyleAndFontWeight=function(m,C){if(m=="bold"&&C=="normal"||m=="bold"&&C==400||m=="normal"&&C=="italic"||m=="bold"&&C=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return C&&(m=C==400||C==="normal"?m==="italic"?"italic":"normal":C!=700&&C!=="bold"||m!=="normal"?(C==700?"bold":C)+""+m:"bold"),m};p.advancedAPI=function(m){var C=O===R;return C&&V.call(this),typeof m!="function"||(m(this),C&&J.call(this)),this},p.compatAPI=function(m){var C=O===P;return C&&J.call(this),typeof m!="function"||(m(this),C&&V.call(this)),this},p.isAdvancedAPI=function(){return O===P};var X,T=function(m){if(O!==P)throw new Error(m+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},Z=p.roundToPrecision=p.__private__.roundToPrecision=function(m,C){var H=t||C;if(isNaN(m)||isNaN(H))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return m.toFixed(H).replace(/0+$/,"")};X=p.hpf=p.__private__.hpf=typeof h=="number"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return Z(m,h)}:h==="smart"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return Z(m,m>-1&&m<1?16:5)}:function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return Z(m,16)};var L=p.f2=p.__private__.f2=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f2");return Z(m,2)},M=p.__private__.f3=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f3");return Z(m,3)},W=p.scale=p.__private__.scale=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.scale");return O===R?m*Qe:O===P?m:void 0},q=function(m){return W(function(C){return O===R?no()-C:O===P?C:void 0}(m))};p.__private__.setPrecision=p.setPrecision=function(m){typeof parseInt(m,10)=="number"&&(t=parseInt(m,10))};var ie,se="00000000000000000000000000000000",ce=p.__private__.getFileId=function(){return se},oe=p.__private__.setFileId=function(m){return se=m!==void 0&&/^[a-fA-F0-9]{32}$/.test(m)?m.toUpperCase():se.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),d!==null&&(Xe=new Wo(d.userPermissions,d.userPassword,d.ownerPassword,se)),se};p.setFileId=function(m){return oe(m),this},p.getFileId=function(){return ce()};var pe=p.__private__.convertDateToPDFDate=function(m){var C=m.getTimezoneOffset(),H=C<0?"+":"-",Q=Math.floor(Math.abs(C/60)),ae=Math.abs(C%60),we=[H,Y(Q),"'",Y(ae),"'"].join("");return["D:",m.getFullYear(),Y(m.getMonth()+1),Y(m.getDate()),Y(m.getHours()),Y(m.getMinutes()),Y(m.getSeconds()),we].join("")},ke=p.__private__.convertPDFDateToDate=function(m){var C=parseInt(m.substr(2,4),10),H=parseInt(m.substr(6,2),10)-1,Q=parseInt(m.substr(8,2),10),ae=parseInt(m.substr(10,2),10),we=parseInt(m.substr(12,2),10),Ae=parseInt(m.substr(14,2),10);return new Date(C,H,Q,ae,we,Ae,0)},ye=p.__private__.setCreationDate=function(m){var C;if(m===void 0&&(m=new Date),m instanceof Date)C=pe(m);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(m))throw new Error("Invalid argument passed to jsPDF.setCreationDate");C=m}return ie=C},I=p.__private__.getCreationDate=function(m){var C=ie;return m==="jsDate"&&(C=ke(ie)),C};p.setCreationDate=function(m){return ye(m),this},p.getCreationDate=function(m){return I(m)};var $,Y=p.__private__.padd2=function(m){return("0"+parseInt(m)).slice(-2)},ee=p.__private__.padd2Hex=function(m){return("00"+(m=m.toString())).substr(m.length)},ne=0,ue=[],ge=[],me=0,Se=[],Ie=[],je=!1,Pe=ge;p.__private__.setCustomOutputDestination=function(m){je=!0,Pe=m};var ve=function(m){je||(Pe=m)};p.__private__.resetCustomOutputDestination=function(){je=!1,Pe=ge};var G=p.__private__.out=function(m){return m=m.toString(),me+=m.length+1,Pe.push(m),Pe},mt=p.__private__.write=function(m){return G(arguments.length===1?m.toString():Array.prototype.join.call(arguments," "))},st=p.__private__.getArrayBuffer=function(m){for(var C=m.length,H=new ArrayBuffer(C),Q=new Uint8Array(H);C--;)Q[C]=m.charCodeAt(C);return H},Ye=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];p.__private__.getStandardFonts=function(){return Ye};var Le=e.fontSize||16;p.__private__.setFontSize=p.setFontSize=function(m){return Le=O===P?m/Qe:m,this};var Ve,Re=p.__private__.getFontSize=p.getFontSize=function(){return O===R?Le:Le*Qe},et=e.R2L||!1;p.__private__.setR2L=p.setR2L=function(m){return et=m,this},p.__private__.getR2L=p.getR2L=function(){return et};var Ue,bt=p.__private__.setZoomMode=function(m){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(m))Ve=m;else if(isNaN(m)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(m)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+m+'" is not recognized.');Ve=m}else Ve=parseInt(m,10)};p.__private__.getZoomMode=function(){return Ve};var tt,it=p.__private__.setPageMode=function(m){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(m)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+m+'" is not recognized.');Ue=m};p.__private__.getPageMode=function(){return Ue};var Ct=p.__private__.setLayoutMode=function(m){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(m)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+m+'" is not recognized.');tt=m};p.__private__.getLayoutMode=function(){return tt},p.__private__.setDisplayMode=p.setDisplayMode=function(m,C,H){return bt(m),Ct(C),it(H),this};var lt={title:"",subject:"",author:"",keywords:"",creator:""};p.__private__.getDocumentProperty=function(m){if(Object.keys(lt).indexOf(m)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return lt[m]},p.__private__.getDocumentProperties=function(){return lt},p.__private__.setDocumentProperties=p.setProperties=p.setDocumentProperties=function(m){for(var C in lt)lt.hasOwnProperty(C)&&m[C]&&(lt[C]=m[C]);return this},p.__private__.setDocumentProperty=function(m,C){if(Object.keys(lt).indexOf(m)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return lt[m]=C};var He,Qe,qe,Pt,xt,De={},ct={},wt=[],Ze={},gt={},ot={},Ht={},Qt=null,At=0,Ke=[],St=new Q1(p),Tn=e.hotfixes||[],fr={},ln={},Wr=[],Je=function m(C,H,Q,ae,we,Ae){if(!(this instanceof m))return new m(C,H,Q,ae,we,Ae);isNaN(C)&&(C=1),isNaN(H)&&(H=0),isNaN(Q)&&(Q=0),isNaN(ae)&&(ae=1),isNaN(we)&&(we=0),isNaN(Ae)&&(Ae=0),this._matrix=[C,H,Q,ae,we,Ae]};Object.defineProperty(Je.prototype,"sx",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Je.prototype,"shy",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Je.prototype,"shx",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Je.prototype,"sy",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Je.prototype,"tx",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Je.prototype,"ty",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Je.prototype,"a",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Je.prototype,"b",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Je.prototype,"c",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Je.prototype,"d",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Je.prototype,"e",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Je.prototype,"f",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Je.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Je.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Je.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Je.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),Je.prototype.join=function(m){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(X).join(m)},Je.prototype.multiply=function(m){var C=m.sx*this.sx+m.shy*this.shx,H=m.sx*this.shy+m.shy*this.sy,Q=m.shx*this.sx+m.sy*this.shx,ae=m.shx*this.shy+m.sy*this.sy,we=m.tx*this.sx+m.ty*this.shx+this.tx,Ae=m.tx*this.shy+m.ty*this.sy+this.ty;return new Je(C,H,Q,ae,we,Ae)},Je.prototype.decompose=function(){var m=this.sx,C=this.shy,H=this.shx,Q=this.sy,ae=this.tx,we=this.ty,Ae=Math.sqrt(m*m+C*C),Fe=(m/=Ae)*H+(C/=Ae)*Q;H-=m*Fe,Q-=C*Fe;var $e=Math.sqrt(H*H+Q*Q);return Fe/=$e,m*(Q/=$e)<C*(H/=$e)&&(m=-m,C=-C,Fe=-Fe,Ae=-Ae),{scale:new Je(Ae,0,0,$e,0,0),translate:new Je(1,0,0,1,ae,we),rotate:new Je(m,C,-C,m,0,0),skew:new Je(1,0,Fe,1,0,0)}},Je.prototype.toString=function(m){return this.join(" ")},Je.prototype.inversed=function(){var m=this.sx,C=this.shy,H=this.shx,Q=this.sy,ae=this.tx,we=this.ty,Ae=1/(m*Q-C*H),Fe=Q*Ae,$e=-C*Ae,at=-H*Ae,ut=m*Ae;return new Je(Fe,$e,at,ut,-Fe*ae-at*we,-$e*ae-ut*we)},Je.prototype.applyToPoint=function(m){var C=m.x*this.sx+m.y*this.shx+this.tx,H=m.x*this.shy+m.y*this.sy+this.ty;return new to(C,H)},Je.prototype.applyToRectangle=function(m){var C=this.applyToPoint(m),H=this.applyToPoint(new to(m.x+m.w,m.y+m.h));return new aa(C.x,C.y,H.x-C.x,H.y-C.y)},Je.prototype.clone=function(){var m=this.sx,C=this.shy,H=this.shx,Q=this.sy,ae=this.tx,we=this.ty;return new Je(m,C,H,Q,ae,we)},p.Matrix=Je;var cn=p.matrixMult=function(m,C){return C.multiply(m)},un=new Je(1,0,0,1,0,0);p.unitMatrix=p.identityMatrix=un;var jr=function(m,C){if(!gt[m]){var H=(C instanceof bo?"Sh":"P")+(Object.keys(Ze).length+1).toString(10);C.id=H,gt[m]=H,Ze[H]=C,St.publish("addPattern",C)}};p.ShadingPattern=bo,p.TilingPattern=Yo,p.addShadingPattern=function(m,C){return T("addShadingPattern()"),jr(m,C),this},p.beginTilingPattern=function(m){T("beginTilingPattern()"),sa(m.boundingBox[0],m.boundingBox[1],m.boundingBox[2]-m.boundingBox[0],m.boundingBox[3]-m.boundingBox[1],m.matrix)},p.endTilingPattern=function(m,C){T("endTilingPattern()"),C.stream=Ie[$].join(`
`),jr(m,C),St.publish("endTilingPattern",C),Wr.pop().restore()};var zr,Dt=p.__private__.newObject=function(){var m=Kt();return lr(m,!0),m},Kt=p.__private__.newObjectDeferred=function(){return ne++,ue[ne]=function(){return me},ne},lr=function(m,C){return C=typeof C=="boolean"&&C,ue[m]=me,C&&G(m+" 0 obj"),m},Vn=p.__private__.newAdditionalObject=function(){var m={objId:Kt(),content:""};return Se.push(m),m},hn=Kt(),Cr=Kt(),fn=p.__private__.decodeColorString=function(m){var C=m.split(" ");if(C.length!==2||C[1]!=="g"&&C[1]!=="G")C.length!==5||C[4]!=="k"&&C[4]!=="K"||(C=[(1-C[0])*(1-C[3]),(1-C[1])*(1-C[3]),(1-C[2])*(1-C[3]),"r"]);else{var H=parseFloat(C[0]);C=[H,H,H,"r"]}for(var Q="#",ae=0;ae<3;ae++)Q+=("0"+Math.floor(255*parseFloat(C[ae])).toString(16)).slice(-2);return Q},Gr=p.__private__.encodeColorString=function(m){var C;typeof m=="string"&&(m={ch1:m});var H=m.ch1,Q=m.ch2,ae=m.ch3,we=m.ch4,Ae=m.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof H=="string"&&H.charAt(0)!=="#"){var Fe=new c0(H);if(Fe.ok)H=Fe.toHex();else if(!/^\d*\.?\d*$/.test(H))throw new Error('Invalid color "'+H+'" passed to jsPDF.encodeColorString.')}if(typeof H=="string"&&/^#[0-9A-Fa-f]{3}$/.test(H)&&(H="#"+H[1]+H[1]+H[2]+H[2]+H[3]+H[3]),typeof H=="string"&&/^#[0-9A-Fa-f]{6}$/.test(H)){var $e=parseInt(H.substr(1),16);H=$e>>16&255,Q=$e>>8&255,ae=255&$e}if(Q===void 0||we===void 0&&H===Q&&Q===ae)C=typeof H=="string"?H+" "+Ae[0]:m.precision===2?L(H/255)+" "+Ae[0]:M(H/255)+" "+Ae[0];else if(we===void 0||Et(we)==="object"){if(we&&!isNaN(we.a)&&we.a===0)return["1.","1.","1.",Ae[1]].join(" ");C=typeof H=="string"?[H,Q,ae,Ae[1]].join(" "):m.precision===2?[L(H/255),L(Q/255),L(ae/255),Ae[1]].join(" "):[M(H/255),M(Q/255),M(ae/255),Ae[1]].join(" ")}else C=typeof H=="string"?[H,Q,ae,we,Ae[2]].join(" "):m.precision===2?[L(H),L(Q),L(ae),L(we),Ae[2]].join(" "):[M(H),M(Q),M(ae),M(we),Ae[2]].join(" ");return C},Yr=p.__private__.getFilters=function(){return c},Br=p.__private__.putStream=function(m){var C=(m=m||{}).data||"",H=m.filters||Yr(),Q=m.alreadyAppliedFilters||[],ae=m.addLength1||!1,we=C.length,Ae=m.objectId,Fe=function(dr){return dr};if(d!==null&&Ae===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");d!==null&&(Fe=Xe.encryptor(Ae,0));var $e={};H===!0&&(H=["FlateEncode"]);var at=m.additionalKeyValues||[],ut=($e=Ge.API.processDataByFilters!==void 0?Ge.API.processDataByFilters(C,H):{data:C,reverseChain:[]}).reverseChain+(Array.isArray(Q)?Q.join(" "):Q.toString());if($e.data.length!==0&&(at.push({key:"Length",value:$e.data.length}),ae===!0&&at.push({key:"Length1",value:we})),ut.length!=0)if(ut.split("/").length-1==1)at.push({key:"Filter",value:ut});else{at.push({key:"Filter",value:"["+ut+"]"});for(var kt=0;kt<at.length;kt+=1)if(at[kt].key==="DecodeParms"){for(var Vt=[],cr=0;cr<$e.reverseChain.split("/").length-1;cr+=1)Vt.push("null");Vt.push(at[kt].value),at[kt].value="["+Vt.join(" ")+"]"}}G("<<");for(var Mt=0;Mt<at.length;Mt++)G("/"+at[Mt].key+" "+at[Mt].value);G(">>"),$e.data.length!==0&&(G("stream"),G(Fe($e.data)),G("endstream"))},Wn=p.__private__.putPage=function(m){var C=m.number,H=m.data,Q=m.objId,ae=m.contentsObjId;lr(Q,!0),G("<</Type /Page"),G("/Parent "+m.rootDictionaryObjId+" 0 R"),G("/Resources "+m.resourceDictionaryObjId+" 0 R"),G("/MediaBox ["+parseFloat(X(m.mediaBox.bottomLeftX))+" "+parseFloat(X(m.mediaBox.bottomLeftY))+" "+X(m.mediaBox.topRightX)+" "+X(m.mediaBox.topRightY)+"]"),m.cropBox!==null&&G("/CropBox ["+X(m.cropBox.bottomLeftX)+" "+X(m.cropBox.bottomLeftY)+" "+X(m.cropBox.topRightX)+" "+X(m.cropBox.topRightY)+"]"),m.bleedBox!==null&&G("/BleedBox ["+X(m.bleedBox.bottomLeftX)+" "+X(m.bleedBox.bottomLeftY)+" "+X(m.bleedBox.topRightX)+" "+X(m.bleedBox.topRightY)+"]"),m.trimBox!==null&&G("/TrimBox ["+X(m.trimBox.bottomLeftX)+" "+X(m.trimBox.bottomLeftY)+" "+X(m.trimBox.topRightX)+" "+X(m.trimBox.topRightY)+"]"),m.artBox!==null&&G("/ArtBox ["+X(m.artBox.bottomLeftX)+" "+X(m.artBox.bottomLeftY)+" "+X(m.artBox.topRightX)+" "+X(m.artBox.topRightY)+"]"),typeof m.userUnit=="number"&&m.userUnit!==1&&G("/UserUnit "+m.userUnit),St.publish("putPage",{objId:Q,pageContext:Ke[C],pageNumber:C,page:H}),G("/Contents "+ae+" 0 R"),G(">>"),G("endobj");var we=H.join(`
`);return O===P&&(we+=`
Q`),lr(ae,!0),Br({data:we,filters:Yr(),objectId:ae}),G("endobj"),Q},Ar=p.__private__.putPages=function(){var m,C,H=[];for(m=1;m<=At;m++)Ke[m].objId=Kt(),Ke[m].contentsObjId=Kt();for(m=1;m<=At;m++)H.push(Wn({number:m,data:Ie[m],objId:Ke[m].objId,contentsObjId:Ke[m].contentsObjId,mediaBox:Ke[m].mediaBox,cropBox:Ke[m].cropBox,bleedBox:Ke[m].bleedBox,trimBox:Ke[m].trimBox,artBox:Ke[m].artBox,userUnit:Ke[m].userUnit,rootDictionaryObjId:hn,resourceDictionaryObjId:Cr}));lr(hn,!0),G("<</Type /Pages");var Q="/Kids [";for(C=0;C<At;C++)Q+=H[C]+" 0 R ";G(Q+"]"),G("/Count "+At),G(">>"),G("endobj"),St.publish("postPutPages")},Gn=function(m){St.publish("putFont",{font:m,out:G,newObject:Dt,putStream:Br}),m.isAlreadyPutted!==!0&&(m.objectNumber=Dt(),G("<<"),G("/Type /Font"),G("/BaseFont /"+Go(m.postScriptName)),G("/Subtype /Type1"),typeof m.encoding=="string"&&G("/Encoding /"+m.encoding),G("/FirstChar 32"),G("/LastChar 255"),G(">>"),G("endobj"))},Pn=function(m){m.objectNumber=Dt();var C=[];C.push({key:"Type",value:"/XObject"}),C.push({key:"Subtype",value:"/Form"}),C.push({key:"BBox",value:"["+[X(m.x),X(m.y),X(m.x+m.width),X(m.y+m.height)].join(" ")+"]"}),C.push({key:"Matrix",value:"["+m.matrix.toString()+"]"});var H=m.pages[1].join(`
`);Br({data:H,additionalKeyValues:C,objectId:m.objectNumber}),G("endobj")},Yn=function(m,C){C||(C=21);var H=Dt(),Q=function(Ae,Fe){var $e,at=[],ut=1/(Fe-1);for($e=0;$e<1;$e+=ut)at.push($e);if(at.push(1),Ae[0].offset!=0){var kt={offset:0,color:Ae[0].color};Ae.unshift(kt)}if(Ae[Ae.length-1].offset!=1){var Vt={offset:1,color:Ae[Ae.length-1].color};Ae.push(Vt)}for(var cr="",Mt=0,dr=0;dr<at.length;dr++){for($e=at[dr];$e>Ae[Mt+1].offset;)Mt++;var ur=Ae[Mt].offset,xr=($e-ur)/(Ae[Mt+1].offset-ur),pn=Ae[Mt].color,Hr=Ae[Mt+1].color;cr+=ee(Math.round((1-xr)*pn[0]+xr*Hr[0]).toString(16))+ee(Math.round((1-xr)*pn[1]+xr*Hr[1]).toString(16))+ee(Math.round((1-xr)*pn[2]+xr*Hr[2]).toString(16))}return cr.trim()}(m.colors,C),ae=[];ae.push({key:"FunctionType",value:"0"}),ae.push({key:"Domain",value:"[0.0 1.0]"}),ae.push({key:"Size",value:"["+C+"]"}),ae.push({key:"BitsPerSample",value:"8"}),ae.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ae.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Br({data:Q,additionalKeyValues:ae,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:H}),G("endobj"),m.objectNumber=Dt(),G("<< /ShadingType "+m.type),G("/ColorSpace /DeviceRGB");var we="/Coords ["+X(parseFloat(m.coords[0]))+" "+X(parseFloat(m.coords[1]))+" ";m.type===2?we+=X(parseFloat(m.coords[2]))+" "+X(parseFloat(m.coords[3])):we+=X(parseFloat(m.coords[2]))+" "+X(parseFloat(m.coords[3]))+" "+X(parseFloat(m.coords[4]))+" "+X(parseFloat(m.coords[5])),G(we+="]"),m.matrix&&G("/Matrix ["+m.matrix.toString()+"]"),G("/Function "+H+" 0 R"),G("/Extend [true true]"),G(">>"),G("endobj")},vi=function(m,C){var H=Kt(),Q=Dt();C.push({resourcesOid:H,objectOid:Q}),m.objectNumber=Q;var ae=[];ae.push({key:"Type",value:"/Pattern"}),ae.push({key:"PatternType",value:"1"}),ae.push({key:"PaintType",value:"1"}),ae.push({key:"TilingType",value:"1"}),ae.push({key:"BBox",value:"["+m.boundingBox.map(X).join(" ")+"]"}),ae.push({key:"XStep",value:X(m.xStep)}),ae.push({key:"YStep",value:X(m.yStep)}),ae.push({key:"Resources",value:H+" 0 R"}),m.matrix&&ae.push({key:"Matrix",value:"["+m.matrix.toString()+"]"}),Br({data:m.stream,additionalKeyValues:ae,objectId:m.objectNumber}),G("endobj")},$i=function(m){for(var C in m.objectNumber=Dt(),G("<<"),m)switch(C){case"opacity":G("/ca "+L(m[C]));break;case"stroke-opacity":G("/CA "+L(m[C]))}G(">>"),G("endobj")},Vi=function(m){lr(m.resourcesOid,!0),G("<<"),G("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var C in G("/Font <<"),De)De.hasOwnProperty(C)&&(x===!1||x===!0&&S.hasOwnProperty(C))&&G("/"+C+" "+De[C].objectNumber+" 0 R");G(">>")}(),function(){if(Object.keys(Ze).length>0){for(var C in G("/Shading <<"),Ze)Ze.hasOwnProperty(C)&&Ze[C]instanceof bo&&Ze[C].objectNumber>=0&&G("/"+C+" "+Ze[C].objectNumber+" 0 R");St.publish("putShadingPatternDict"),G(">>")}}(),function(C){if(Object.keys(Ze).length>0){for(var H in G("/Pattern <<"),Ze)Ze.hasOwnProperty(H)&&Ze[H]instanceof p.TilingPattern&&Ze[H].objectNumber>=0&&Ze[H].objectNumber<C&&G("/"+H+" "+Ze[H].objectNumber+" 0 R");St.publish("putTilingPatternDict"),G(">>")}}(m.objectOid),function(){if(Object.keys(ot).length>0){var C;for(C in G("/ExtGState <<"),ot)ot.hasOwnProperty(C)&&ot[C].objectNumber>=0&&G("/"+C+" "+ot[C].objectNumber+" 0 R");St.publish("putGStateDict"),G(">>")}}(),function(){for(var C in G("/XObject <<"),fr)fr.hasOwnProperty(C)&&fr[C].objectNumber>=0&&G("/"+C+" "+fr[C].objectNumber+" 0 R");St.publish("putXobjectDict"),G(">>")}(),G(">>"),G("endobj")},Wi=function(m){ct[m.fontName]=ct[m.fontName]||{},ct[m.fontName][m.fontStyle]=m.id},Ao=function(m,C,H,Q,ae){var we={id:"F"+(Object.keys(De).length+1).toString(10),postScriptName:m,fontName:C,fontStyle:H,encoding:Q,isStandardFont:ae||!1,metadata:{}};return St.publish("addFont",{font:we,instance:this}),De[we.id]=we,Wi(we),we.id},Rr=p.__private__.pdfEscape=p.pdfEscape=function(m,C){return function(H,Q){var ae,we,Ae,Fe,$e,at,ut,kt,Vt;if(Ae=(Q=Q||{}).sourceEncoding||"Unicode",$e=Q.outputEncoding,(Q.autoencode||$e)&&De[He].metadata&&De[He].metadata[Ae]&&De[He].metadata[Ae].encoding&&(Fe=De[He].metadata[Ae].encoding,!$e&&De[He].encoding&&($e=De[He].encoding),!$e&&Fe.codePages&&($e=Fe.codePages[0]),typeof $e=="string"&&($e=Fe[$e]),$e)){for(ut=!1,at=[],ae=0,we=H.length;ae<we;ae++)(kt=$e[H.charCodeAt(ae)])?at.push(String.fromCharCode(kt)):at.push(H[ae]),at[ae].charCodeAt(0)>>8&&(ut=!0);H=at.join("")}for(ae=H.length;ut===void 0&&ae!==0;)H.charCodeAt(ae-1)>>8&&(ut=!0),ae--;if(!ut)return H;for(at=Q.noBOM?[]:[254,255],ae=0,we=H.length;ae<we;ae++){if((Vt=(kt=H.charCodeAt(ae))>>8)>>8)throw new Error("Character at position "+ae+" of string '"+H+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");at.push(Vt),at.push(kt-(Vt<<8))}return String.fromCharCode.apply(void 0,at)}(m,C).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Gi=p.__private__.beginPage=function(m){Ie[++At]=[],Ke[At]={objId:0,contentsObjId:0,userUnit:Number(l),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(m[0]),topRightY:Number(m[1])}},Xn(At),ve(Ie[$])},bi=function(m,C){var H,Q,ae;switch(r=C||r,typeof m=="string"&&(H=y(m.toLowerCase()),Array.isArray(H)&&(Q=H[0],ae=H[1])),Array.isArray(m)&&(Q=m[0]*Qe,ae=m[1]*Qe),isNaN(Q)&&(Q=o[0],ae=o[1]),(Q>14400||ae>14400)&&(Ot.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),Q=Math.min(14400,Q),ae=Math.min(14400,ae)),o=[Q,ae],r.substr(0,1)){case"l":ae>Q&&(o=[ae,Q]);break;case"p":Q>ae&&(o=[ae,Q])}Gi(o),Kn(Qi),G(Po),ia!==0&&G(ia+" J"),oa!==0&&G(oa+" j"),St.publish("addPage",{pageNumber:At})},Yi=function(m){m>0&&m<=At&&(Ie.splice(m,1),Ke.splice(m,1),At--,$>At&&($=At),this.setPage($))},Xn=function(m){m>0&&m<=At&&($=m)},ko=p.__private__.getNumberOfPages=p.getNumberOfPages=function(){return Ie.length-1},xi=function(m,C,H){var Q,ae=void 0;return H=H||{},m=m!==void 0?m:De[He].fontName,C=C!==void 0?C:De[He].fontStyle,Q=m.toLowerCase(),ct[Q]!==void 0&&ct[Q][C]!==void 0?ae=ct[Q][C]:ct[m]!==void 0&&ct[m][C]!==void 0?ae=ct[m][C]:H.disableWarning===!1&&Ot.warn("Unable to look up font label for font '"+m+"', '"+C+"'. Refer to getFontList() for available fonts."),ae||H.noFallback||(ae=ct.times[C])==null&&(ae=ct.times.normal),ae},Jn=p.__private__.putInfo=function(){var m=Dt(),C=function(Q){return Q};for(var H in d!==null&&(C=Xe.encryptor(m,0)),G("<<"),G("/Producer ("+Rr(C("jsPDF "+Ge.version))+")"),lt)lt.hasOwnProperty(H)&&lt[H]&&G("/"+H.substr(0,1).toUpperCase()+H.substr(1)+" ("+Rr(C(lt[H]))+")");G("/CreationDate ("+Rr(C(ie))+")"),G(">>"),G("endobj")},Zn=p.__private__.putCatalog=function(m){var C=(m=m||{}).rootDictionaryObjId||hn;switch(Dt(),G("<<"),G("/Type /Catalog"),G("/Pages "+C+" 0 R"),Ve||(Ve="fullwidth"),Ve){case"fullwidth":G("/OpenAction [3 0 R /FitH null]");break;case"fullheight":G("/OpenAction [3 0 R /FitV null]");break;case"fullpage":G("/OpenAction [3 0 R /Fit]");break;case"original":G("/OpenAction [3 0 R /XYZ null null 1]");break;default:var H=""+Ve;H.substr(H.length-1)==="%"&&(Ve=parseInt(Ve)/100),typeof Ve=="number"&&G("/OpenAction [3 0 R /XYZ null null "+L(Ve)+"]")}switch(tt||(tt="continuous"),tt){case"continuous":G("/PageLayout /OneColumn");break;case"single":G("/PageLayout /SinglePage");break;case"two":case"twoleft":G("/PageLayout /TwoColumnLeft");break;case"tworight":G("/PageLayout /TwoColumnRight")}Ue&&G("/PageMode /"+Ue),St.publish("putCatalog"),G(">>"),G("endobj")},$t=p.__private__.putTrailer=function(){G("trailer"),G("<<"),G("/Size "+(ne+1)),G("/Root "+ne+" 0 R"),G("/Info "+(ne-1)+" 0 R"),d!==null&&G("/Encrypt "+Xe.oid+" 0 R"),G("/ID [ <"+se+"> <"+se+"> ]"),G(">>")},Lo=p.__private__.putHeader=function(){G("%PDF-"+w),G("%ºß¬à")},Xi=p.__private__.putXRef=function(){var m="0000000000";G("xref"),G("0 "+(ne+1)),G("0000000000 65535 f ");for(var C=1;C<=ne;C++)typeof ue[C]=="function"?G((m+ue[C]()).slice(-10)+" 00000 n "):ue[C]!==void 0?G((m+ue[C]).slice(-10)+" 00000 n "):G("0000000000 00000 n ")},wn=p.__private__.buildDocument=function(){var m;ne=0,me=0,ge=[],ue=[],Se=[],hn=Kt(),Cr=Kt(),ve(ge),St.publish("buildDocument"),Lo(),Ar(),function(){St.publish("putAdditionalObjects");for(var H=0;H<Se.length;H++){var Q=Se[H];lr(Q.objId,!0),G(Q.content),G("endobj")}St.publish("postPutAdditionalObjects")}(),m=[],function(){for(var H in De)De.hasOwnProperty(H)&&(x===!1||x===!0&&S.hasOwnProperty(H))&&Gn(De[H])}(),function(){var H;for(H in ot)ot.hasOwnProperty(H)&&$i(ot[H])}(),function(){for(var H in fr)fr.hasOwnProperty(H)&&Pn(fr[H])}(),function(H){var Q;for(Q in Ze)Ze.hasOwnProperty(Q)&&(Ze[Q]instanceof bo?Yn(Ze[Q]):Ze[Q]instanceof Yo&&vi(Ze[Q],H))}(m),St.publish("putResources"),m.forEach(Vi),Vi({resourcesOid:Cr,objectOid:Number.MAX_SAFE_INTEGER}),St.publish("postPutResources"),d!==null&&(Xe.oid=Dt(),G("<<"),G("/Filter /Standard"),G("/V "+Xe.v),G("/R "+Xe.r),G("/U <"+Xe.toHexString(Xe.U)+">"),G("/O <"+Xe.toHexString(Xe.O)+">"),G("/P "+Xe.P),G(">>"),G("endobj")),Jn(),Zn();var C=me;return Xi(),$t(),G("startxref"),G(""+C),G("%%EOF"),ve(Ie[$]),ge.join(`
`)},Qn=p.__private__.getBlob=function(m){return new Blob([st(m)],{type:"application/pdf"})},Xr=p.output=p.__private__.output=(zr=function(m,C){switch(typeof(C=C||{})=="string"?C={filename:C}:C.filename=C.filename||"generated.pdf",m){case void 0:return wn();case"save":p.save(C.filename);break;case"arraybuffer":return st(wn());case"blob":return Qn(wn());case"bloburi":case"bloburl":if(nt.URL!==void 0&&typeof nt.URL.createObjectURL=="function")return nt.URL&&nt.URL.createObjectURL(Qn(wn()))||void 0;Ot.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var H="",Q=wn();try{H=X1(Q)}catch{H=X1(unescape(encodeURIComponent(Q)))}return"data:application/pdf;filename="+C.filename+";base64,"+H;case"pdfobjectnewwindow":if(Object.prototype.toString.call(nt)==="[object Window]"){var ae="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",we=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';C.pdfObjectUrl&&(ae=C.pdfObjectUrl,we="");var Ae='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ae+'"'+we+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(C)+");<\/script></body></html>",Fe=nt.open();return Fe!==null&&Fe.document.write(Ae),Fe}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(nt)==="[object Window]"){var $e='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(C.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+C.filename+'" width="500px" height="400px" /></body></html>',at=nt.open();if(at!==null){at.document.write($e);var ut=this;at.document.documentElement.querySelector("#pdfViewer").onload=function(){at.document.title=C.filename,at.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ut.output("bloburl"))}}return at}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(nt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var kt='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",C)+'"></iframe></body></html>',Vt=nt.open();if(Vt!==null&&(Vt.document.write(kt),Vt.document.title=C.filename),Vt||typeof safari>"u")return Vt;break;case"datauri":case"dataurl":return nt.document.location.href=this.output("datauristring",C);default:return null}},zr.foo=function(){try{return zr.apply(this,arguments)}catch(H){var m=H.stack||"";~m.indexOf(" at ")&&(m=m.split(" at ")[1]);var C="Error in function "+m.split(`
`)[0].split("<")[0]+": "+H.message;if(!nt.console)throw new Error(C);nt.console.error(C,H),nt.alert&&alert(C)}},zr.foo.bar=zr,zr.foo),de=function(m){return Array.isArray(Tn)===!0&&Tn.indexOf(m)>-1};switch(n){case"pt":Qe=1;break;case"mm":Qe=72/25.4;break;case"cm":Qe=72/2.54;break;case"in":Qe=72;break;case"px":Qe=de("px_scaling")==1?.75:96/72;break;case"pc":case"em":Qe=12;break;case"ex":Qe=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);Qe=n}var Xe=null;ye(),oe();var Gt=p.__private__.getPageInfo=p.getPageInfo=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Ke[m].objId,pageNumber:m,pageContext:Ke[m]}},yn=p.__private__.getPageInfoByObjId=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var C in Ke)if(Ke[C].objId===m)break;return Gt(C)},Ur=p.__private__.getCurrentPageInfo=p.getCurrentPageInfo=function(){return{objId:Ke[$].objId,pageNumber:$,pageContext:Ke[$]}};p.addPage=function(){return bi.apply(this,arguments),this},p.setPage=function(){return Xn.apply(this,arguments),ve.call(this,Ie[$]),this},p.insertPage=function(m){return this.addPage(),this.movePage($,m),this},p.movePage=function(m,C){var H,Q;if(m>C){H=Ie[m],Q=Ke[m];for(var ae=m;ae>C;ae--)Ie[ae]=Ie[ae-1],Ke[ae]=Ke[ae-1];Ie[C]=H,Ke[C]=Q,this.setPage(C)}else if(m<C){H=Ie[m],Q=Ke[m];for(var we=m;we<C;we++)Ie[we]=Ie[we+1],Ke[we]=Ke[we+1];Ie[C]=H,Ke[C]=Q,this.setPage(C)}return this},p.deletePage=function(){return Yi.apply(this,arguments),this},p.__private__.text=p.text=function(m,C,H,Q,ae){var we,Ae,Fe,$e,at,ut,kt,Vt,cr,Mt=(Q=Q||{}).scope||this;if(typeof m=="number"&&typeof C=="number"&&(typeof H=="string"||Array.isArray(H))){var dr=H;H=C,C=m,m=dr}if(arguments[3]instanceof Je==0?(Fe=arguments[4],$e=arguments[5],Et(kt=arguments[3])==="object"&&kt!==null||(typeof Fe=="string"&&($e=Fe,Fe=null),typeof kt=="string"&&($e=kt,kt=null),typeof kt=="number"&&(Fe=kt,kt=null),Q={flags:kt,angle:Fe,align:$e})):(T("The transform parameter of text() with a Matrix value"),cr=ae),isNaN(C)||isNaN(H)||m==null)throw new Error("Invalid arguments passed to jsPDF.text");if(m.length===0)return Mt;var ur,xr="",pn=typeof Q.lineHeightFactor=="number"?Q.lineHeightFactor:Rn,Hr=Mt.internal.scaleFactor;function Ga(Lt){return Lt=Lt.split("	").join(Array(Q.TabLen||9).join(" ")),Rr(Lt,kt)}function Mo(Lt){for(var jt,tr=Lt.concat(),pr=[],ai=tr.length;ai--;)typeof(jt=tr.shift())=="string"?pr.push(jt):Array.isArray(Lt)&&(jt.length===1||jt[1]===void 0&&jt[2]===void 0)?pr.push(jt[0]):pr.push([jt[0],jt[1],jt[2]]);return pr}function io(Lt,jt){var tr;if(typeof Lt=="string")tr=jt(Lt)[0];else if(Array.isArray(Lt)){for(var pr,ai,va=Lt.concat(),zo=[],Ja=va.length;Ja--;)typeof(pr=va.shift())=="string"?zo.push(jt(pr)[0]):Array.isArray(pr)&&typeof pr[0]=="string"&&(ai=jt(pr[0],pr[1],pr[2]),zo.push([ai[0],ai[1],ai[2]]));tr=zo}return tr}var Si=!1,oo=!0;if(typeof m=="string")Si=!0;else if(Array.isArray(m)){var ao=m.concat();Ae=[];for(var so,kr=ao.length;kr--;)(typeof(so=ao.shift())!="string"||Array.isArray(so)&&typeof so[0]!="string")&&(oo=!1);Si=oo}if(Si===!1)throw new Error('Type of text must be string or Array. "'+m+'" is not recognized.');typeof m=="string"&&(m=m.match(/[\r?\n]/)?m.split(/\r\n|\r|\n/g):[m]);var lo=Le/Mt.internal.scaleFactor,co=lo*(pn-1);switch(Q.baseline){case"bottom":H-=co;break;case"top":H+=lo-co;break;case"hanging":H+=lo-2*co;break;case"middle":H+=lo/2-co}if((ut=Q.maxWidth||0)>0&&(typeof m=="string"?m=Mt.splitTextToSize(m,ut):Object.prototype.toString.call(m)==="[object Array]"&&(m=m.reduce(function(Lt,jt){return Lt.concat(Mt.splitTextToSize(jt,ut))},[]))),we={text:m,x:C,y:H,options:Q,mutex:{pdfEscape:Rr,activeFontKey:He,fonts:De,activeFontSize:Le}},St.publish("preProcessText",we),m=we.text,Fe=(Q=we.options).angle,cr instanceof Je==0&&Fe&&typeof Fe=="number"){Fe*=Math.PI/180,Q.rotationDirection===0&&(Fe=-Fe),O===P&&(Fe=-Fe);var la=Math.cos(Fe),ca=Math.sin(Fe);cr=new Je(la,ca,-ca,la,0,0)}else Fe&&Fe instanceof Je&&(cr=Fe);O!==P||cr||(cr=un),(at=Q.charSpace||Ro)!==void 0&&(xr+=X(W(at))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Vt=Q.horizontalScale)!==void 0&&(xr+=X(100*Vt)+` Tz
`),Q.lang;var Yt=-1,ii=Q.renderingMode!==void 0?Q.renderingMode:Q.stroke,Fo=Mt.internal.getCurrentPageInfo().pageContext;switch(ii){case 0:case!1:case"fill":Yt=0;break;case 1:case!0:case"stroke":Yt=1;break;case 2:case"fillThenStroke":Yt=2;break;case 3:case"invisible":Yt=3;break;case 4:case"fillAndAddForClipping":Yt=4;break;case 5:case"strokeAndAddPathForClipping":Yt=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Yt=6;break;case 7:case"addToPathForClipping":Yt=7}var Ya=Fo.usedRenderingMode!==void 0?Fo.usedRenderingMode:-1;Yt!==-1?xr+=Yt+` Tr
`:Ya!==-1&&(xr+=`0 Tr
`),Yt!==-1&&(Fo.usedRenderingMode=Yt),$e=Q.align||"left";var mn,uo=Le*pn,ua=Mt.internal.pageSize.getWidth(),ha=De[He];at=Q.charSpace||Ro,ut=Q.maxWidth||0,kt=Object.assign({autoencode:!0,noBOM:!0},Q.flags);var _i=[],ho=function(Lt){return Mt.getStringUnitWidth(Lt,{font:ha,charSpace:at,fontSize:Le,doKerning:!1})*Le/Hr};if(Object.prototype.toString.call(m)==="[object Array]"){var Zr;Ae=Mo(m),$e!=="left"&&(mn=Ae.map(ho));var Qr,Ci=0;if($e==="right"){C-=mn[0],m=[],kr=Ae.length;for(var oi=0;oi<kr;oi++)oi===0?(Qr=ei(C),Zr=ti(H)):(Qr=W(Ci-mn[oi]),Zr=-uo),m.push([Ae[oi],Qr,Zr]),Ci=mn[oi]}else if($e==="center"){C-=mn[0]/2,m=[],kr=Ae.length;for(var Ai=0;Ai<kr;Ai++)Ai===0?(Qr=ei(C),Zr=ti(H)):(Qr=W((Ci-mn[Ai])/2),Zr=-uo),m.push([Ae[Ai],Qr,Zr]),Ci=mn[Ai]}else if($e==="left"){m=[],kr=Ae.length;for(var fa=0;fa<kr;fa++)m.push(Ae[fa])}else if($e==="justify"&&ha.encoding==="Identity-H"){m=[],kr=Ae.length,ut=ut!==0?ut:ua;for(var Do=0,er=0;er<kr;er++)if(Zr=er===0?ti(H):-uo,Qr=er===0?ei(C):Do,er<kr-1){var Xa=W((ut-mn[er])/(Ae[er].split(" ").length-1)),On=Ae[er].split(" ");m.push([On[0]+" ",Qr,Zr]),Do=0;for(var Mn=1;Mn<On.length;Mn++){var da=(ho(On[Mn-1]+" "+On[Mn])-ho(On[Mn]))*Hr+Xa;Mn==On.length-1?m.push([On[Mn],da,0]):m.push([On[Mn]+" ",da,0]),Do-=da}}else m.push([Ae[er],Qr,Zr]);m.push(["",Do,0])}else{if($e!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(m=[],kr=Ae.length,ut=ut!==0?ut:ua,er=0;er<kr;er++){Zr=er===0?ti(H):-uo,Qr=er===0?ei(C):0;var pa=Ae[er].split(" ").length-1,ma=pa>0?(ut-mn[er])/pa:0;er<kr-1?_i.push(X(W(ma))):_i.push(0),m.push([Ae[er],Qr,Zr])}}}(typeof Q.R2L=="boolean"?Q.R2L:et)===!0&&(m=io(m,function(Lt,jt,tr){return[Lt.split("").reverse().join(""),jt,tr]})),we={text:m,x:C,y:H,options:Q,mutex:{pdfEscape:Rr,activeFontKey:He,fonts:De,activeFontSize:Le}},St.publish("postProcessText",we),m=we.text,ur=we.mutex.isHex||!1;var ga=De[He].encoding;ga!=="WinAnsiEncoding"&&ga!=="StandardEncoding"||(m=io(m,function(Lt,jt,tr){return[Ga(Lt),jt,tr]})),Ae=Mo(m),m=[];for(var ki,Li,Ni,fo=Array.isArray(Ae[0])?1:0,Ii="",po=function(Lt,jt,tr){var pr="";return tr instanceof Je?(tr=typeof Q.angle=="number"?cn(tr,new Je(1,0,0,1,Lt,jt)):cn(new Je(1,0,0,1,Lt,jt),tr),O===P&&(tr=cn(new Je(1,0,0,-1,0,0),tr)),pr=tr.join(" ")+` Tm
`):pr=X(Lt)+" "+X(jt)+` Td
`,pr},gn=0;gn<Ae.length;gn++){switch(Ii="",fo){case 1:Ni=(ur?"<":"(")+Ae[gn][0]+(ur?">":")"),ki=parseFloat(Ae[gn][1]),Li=parseFloat(Ae[gn][2]);break;case 0:Ni=(ur?"<":"(")+Ae[gn]+(ur?">":")"),ki=ei(C),Li=ti(H)}_i!==void 0&&_i[gn]!==void 0&&(Ii=_i[gn]+` Tw
`),gn===0?m.push(Ii+po(ki,Li,cr)+Ni):fo===0?m.push(Ii+Ni):fo===1&&m.push(Ii+po(ki,Li,cr)+Ni)}m=fo===0?m.join(` Tj
T* `):m.join(` Tj
`),m+=` Tj
`;var Fn=`BT
/`;return Fn+=He+" "+Le+` Tf
`,Fn+=X(Le*pn)+` TL
`,Fn+=Ki+`
`,Fn+=xr,Fn+=m,G(Fn+="ET"),S[He]=!0,Mt};var Ji=p.__private__.clip=p.clip=function(m){return G(m==="evenodd"?"W*":"W"),this};p.clipEvenOdd=function(){return Ji("evenodd")},p.__private__.discardPath=p.discardPath=function(){return G("n"),this};var Jr=p.__private__.isValidStyle=function(m){var C=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(m)!==-1&&(C=!0),C};p.__private__.setDefaultPathOperation=p.setDefaultPathOperation=function(m){return Jr(m)&&(f=m),this};var No=p.__private__.getStyle=p.getStyle=function(m){var C=f;switch(m){case"D":case"S":C="S";break;case"F":C="f";break;case"FD":case"DF":C="B";break;case"f":case"f*":case"B":case"B*":C=m}return C},Or=p.close=function(){return G("h"),this};p.stroke=function(){return G("S"),this},p.fill=function(m){return dn("f",m),this},p.fillEvenOdd=function(m){return dn("f*",m),this},p.fillStroke=function(m){return dn("B",m),this},p.fillStrokeEvenOdd=function(m){return dn("B*",m),this};var dn=function(m,C){Et(C)==="object"?Eo(C,m):G(m)},Zi=function(m){m===null||O===P&&m===void 0||(m=No(m),G(m))};function Io(m,C,H,Q,ae){var we=new Yo(C||this.boundingBox,H||this.xStep,Q||this.yStep,this.gState,ae||this.matrix);we.stream=this.stream;var Ae=m+"$$"+this.cloneIndex+++"$$";return jr(Ae,we),we}var Eo=function(m,C){var H=gt[m.key],Q=Ze[H];if(Q instanceof bo)G("q"),G(ra(C)),Q.gState&&p.setGState(Q.gState),G(m.matrix.toString()+" cm"),G("/"+H+" sh"),G("Q");else if(Q instanceof Yo){var ae=new Je(1,0,0,-1,0,no());m.matrix&&(ae=ae.multiply(m.matrix||un),H=Io.call(Q,m.key,m.boundingBox,m.xStep,m.yStep,ae).id),G("q"),G("/Pattern cs"),G("/"+H+" scn"),Q.gState&&p.setGState(Q.gState),G(C),G("Q")}},ra=function(m){switch(m){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},wi=p.moveTo=function(m,C){return G(X(W(m))+" "+X(q(C))+" m"),this},jn=p.lineTo=function(m,C){return G(X(W(m))+" "+X(q(C))+" l"),this},Sn=p.curveTo=function(m,C,H,Q,ae,we){return G([X(W(m)),X(q(C)),X(W(H)),X(q(Q)),X(W(ae)),X(q(we)),"c"].join(" ")),this};p.__private__.line=p.line=function(m,C,H,Q,ae){if(isNaN(m)||isNaN(C)||isNaN(H)||isNaN(Q)||!Jr(ae))throw new Error("Invalid arguments passed to jsPDF.line");return O===R?this.lines([[H-m,Q-C]],m,C,[1,1],ae||"S"):this.lines([[H-m,Q-C]],m,C,[1,1]).stroke()},p.__private__.lines=p.lines=function(m,C,H,Q,ae,we){var Ae,Fe,$e,at,ut,kt,Vt,cr,Mt,dr,ur,xr;if(typeof m=="number"&&(xr=H,H=C,C=m,m=xr),Q=Q||[1,1],we=we||!1,isNaN(C)||isNaN(H)||!Array.isArray(m)||!Array.isArray(Q)||!Jr(ae)||typeof we!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(wi(C,H),Ae=Q[0],Fe=Q[1],at=m.length,dr=C,ur=H,$e=0;$e<at;$e++)(ut=m[$e]).length===2?(dr=ut[0]*Ae+dr,ur=ut[1]*Fe+ur,jn(dr,ur)):(kt=ut[0]*Ae+dr,Vt=ut[1]*Fe+ur,cr=ut[2]*Ae+dr,Mt=ut[3]*Fe+ur,dr=ut[4]*Ae+dr,ur=ut[5]*Fe+ur,Sn(kt,Vt,cr,Mt,dr,ur));return we&&Or(),Zi(ae),this},p.path=function(m){for(var C=0;C<m.length;C++){var H=m[C],Q=H.c;switch(H.op){case"m":wi(Q[0],Q[1]);break;case"l":jn(Q[0],Q[1]);break;case"c":Sn.apply(this,Q);break;case"h":Or()}}return this},p.__private__.rect=p.rect=function(m,C,H,Q,ae){if(isNaN(m)||isNaN(C)||isNaN(H)||isNaN(Q)||!Jr(ae))throw new Error("Invalid arguments passed to jsPDF.rect");return O===R&&(Q=-Q),G([X(W(m)),X(q(C)),X(W(H)),X(W(Q)),"re"].join(" ")),Zi(ae),this},p.__private__.triangle=p.triangle=function(m,C,H,Q,ae,we,Ae){if(isNaN(m)||isNaN(C)||isNaN(H)||isNaN(Q)||isNaN(ae)||isNaN(we)||!Jr(Ae))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[H-m,Q-C],[ae-H,we-Q],[m-ae,C-we]],m,C,[1,1],Ae,!0),this},p.__private__.roundedRect=p.roundedRect=function(m,C,H,Q,ae,we,Ae){if(isNaN(m)||isNaN(C)||isNaN(H)||isNaN(Q)||isNaN(ae)||isNaN(we)||!Jr(Ae))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Fe=4/3*(Math.SQRT2-1);return ae=Math.min(ae,.5*H),we=Math.min(we,.5*Q),this.lines([[H-2*ae,0],[ae*Fe,0,ae,we-we*Fe,ae,we],[0,Q-2*we],[0,we*Fe,-ae*Fe,we,-ae,we],[2*ae-H,0],[-ae*Fe,0,-ae,-we*Fe,-ae,-we],[0,2*we-Q],[0,-we*Fe,ae*Fe,-we,ae,-we]],m+ae,C,[1,1],Ae,!0),this},p.__private__.ellipse=p.ellipse=function(m,C,H,Q,ae){if(isNaN(m)||isNaN(C)||isNaN(H)||isNaN(Q)||!Jr(ae))throw new Error("Invalid arguments passed to jsPDF.ellipse");var we=4/3*(Math.SQRT2-1)*H,Ae=4/3*(Math.SQRT2-1)*Q;return wi(m+H,C),Sn(m+H,C-Ae,m+we,C-Q,m,C-Q),Sn(m-we,C-Q,m-H,C-Ae,m-H,C),Sn(m-H,C+Ae,m-we,C+Q,m,C+Q),Sn(m+we,C+Q,m+H,C+Ae,m+H,C),Zi(ae),this},p.__private__.circle=p.circle=function(m,C,H,Q){if(isNaN(m)||isNaN(C)||isNaN(H)||!Jr(Q))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(m,C,H,H,Q)},p.setFont=function(m,C,H){return H&&(C=K(C,H)),He=xi(m,C,{disableWarning:!1}),this};var To=p.__private__.getFont=p.getFont=function(){return De[xi.apply(p,arguments)]};p.__private__.getFontList=p.getFontList=function(){var m,C,H={};for(m in ct)if(ct.hasOwnProperty(m))for(C in H[m]=[],ct[m])ct[m].hasOwnProperty(C)&&H[m].push(C);return H},p.addFont=function(m,C,H,Q,ae){var we=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&we.indexOf(arguments[3])!==-1?ae=arguments[3]:arguments[3]&&we.indexOf(arguments[3])==-1&&(H=K(H,Q)),Ao.call(this,m,C,H,ae=ae||"Identity-H")};var Rn,Qi=e.lineWidth||.200025,rt=p.__private__.getLineWidth=p.getLineWidth=function(){return Qi},Kn=p.__private__.setLineWidth=p.setLineWidth=function(m){return Qi=m,G(X(W(m))+" w"),this};p.__private__.setLineDash=Ge.API.setLineDash=Ge.API.setLineDashPattern=function(m,C){if(m=m||[],C=C||0,isNaN(C)||!Array.isArray(m))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return m=m.map(function(H){return X(W(H))}).join(" "),C=X(W(C)),G("["+m+"] "+C+" d"),this};var yi=p.__private__.getLineHeight=p.getLineHeight=function(){return Le*Rn};p.__private__.getLineHeight=p.getLineHeight=function(){return Le*Rn};var ul=p.__private__.setLineHeightFactor=p.setLineHeightFactor=function(m){return typeof(m=m||1.15)=="number"&&(Rn=m),this},hl=p.__private__.getLineHeightFactor=p.getLineHeightFactor=function(){return Rn};ul(e.lineHeight);var ei=p.__private__.getHorizontalCoordinate=function(m){return W(m)},ti=p.__private__.getVerticalCoordinate=function(m){return O===P?m:Ke[$].mediaBox.topRightY-Ke[$].mediaBox.bottomLeftY-W(m)},fl=p.__private__.getHorizontalCoordinateString=p.getHorizontalCoordinateString=function(m){return X(ei(m))},dl=p.__private__.getVerticalCoordinateString=p.getVerticalCoordinateString=function(m){return X(ti(m))},Po=e.strokeColor||"0 G";p.__private__.getStrokeColor=p.getDrawColor=function(){return fn(Po)},p.__private__.setStrokeColor=p.setDrawColor=function(m,C,H,Q){return Po=Gr({ch1:m,ch2:C,ch3:H,ch4:Q,pdfColorType:"draw",precision:2}),G(Po),this};var na=e.fillColor||"0 g";p.__private__.getFillColor=p.getFillColor=function(){return fn(na)},p.__private__.setFillColor=p.setFillColor=function(m,C,H,Q){return na=Gr({ch1:m,ch2:C,ch3:H,ch4:Q,pdfColorType:"fill",precision:2}),G(na),this};var Ki=e.textColor||"0 g",jo=p.__private__.getTextColor=p.getTextColor=function(){return fn(Ki)};p.__private__.setTextColor=p.setTextColor=function(m,C,H,Q){return Ki=Gr({ch1:m,ch2:C,ch3:H,ch4:Q,pdfColorType:"text",precision:3}),this};var Ro=e.charSpace,pl=p.__private__.getCharSpace=p.getCharSpace=function(){return parseFloat(Ro||0)};p.__private__.setCharSpace=p.setCharSpace=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Ro=m,this};var ia=0;p.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},p.__private__.setLineCap=p.setLineCap=function(m){var C=p.CapJoinStyles[m];if(C===void 0)throw new Error("Line cap style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return ia=C,G(C+" J"),this};var oa=0;p.__private__.setLineJoin=p.setLineJoin=function(m){var C=p.CapJoinStyles[m];if(C===void 0)throw new Error("Line join style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return oa=C,G(C+" j"),this},p.__private__.setLineMiterLimit=p.__private__.setMiterLimit=p.setLineMiterLimit=p.setMiterLimit=function(m){if(m=m||0,isNaN(m))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return G(X(W(m))+" M"),this},p.GState=Xs,p.setGState=function(m){(m=typeof m=="string"?ot[Ht[m]]:eo(null,m)).equals(Qt)||(G("/"+m.id+" gs"),Qt=m)};var eo=function(m,C){if(!m||!Ht[m]){var H=!1;for(var Q in ot)if(ot.hasOwnProperty(Q)&&ot[Q].equals(C)){H=!0;break}if(H)C=ot[Q];else{var ae="GS"+(Object.keys(ot).length+1).toString(10);ot[ae]=C,C.id=ae}return m&&(Ht[m]=C.id),St.publish("addGState",C),C}};p.addGState=function(m,C){return eo(m,C),this},p.saveGraphicsState=function(){return G("q"),wt.push({key:He,size:Le,color:Ki}),this},p.restoreGraphicsState=function(){G("Q");var m=wt.pop();return He=m.key,Le=m.size,Ki=m.color,Qt=null,this},p.setCurrentTransformationMatrix=function(m){return G(m.toString()+" cm"),this},p.comment=function(m){return G("#"+m),this};var to=function(m,C){var H=m||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return H},set:function(we){isNaN(we)||(H=parseFloat(we))}});var Q=C||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return Q},set:function(we){isNaN(we)||(Q=parseFloat(we))}});var ae="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ae},set:function(we){ae=we.toString()}}),this},aa=function(m,C,H,Q){to.call(this,m,C),this.type="rect";var ae=H||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ae},set:function(Ae){isNaN(Ae)||(ae=parseFloat(Ae))}});var we=Q||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return we},set:function(Ae){isNaN(Ae)||(we=parseFloat(Ae))}}),this},Oo=function(){this.page=At,this.currentPage=$,this.pages=Ie.slice(0),this.pagesContext=Ke.slice(0),this.x=qe,this.y=Pt,this.matrix=xt,this.width=Ha($),this.height=ri($),this.outputDestination=Pe,this.id="",this.objectNumber=-1};Oo.prototype.restore=function(){At=this.page,$=this.currentPage,Ke=this.pagesContext,Ie=this.pages,qe=this.x,Pt=this.y,xt=this.matrix,qa($,this.width),ni($,this.height),Pe=this.outputDestination};var sa=function(m,C,H,Q,ae){Wr.push(new Oo),At=$=0,Ie=[],qe=m,Pt=C,xt=ae,Gi([H,Q])};for(var ro in p.beginFormObject=function(m,C,H,Q,ae){return sa(m,C,H,Q,ae),this},p.endFormObject=function(m){return function(C){if(ln[C])Wr.pop().restore();else{var H=new Oo,Q="Xo"+(Object.keys(fr).length+1).toString(10);H.id=Q,ln[C]=Q,fr[Q]=H,St.publish("addFormObject",H),Wr.pop().restore()}}(m),this},p.doFormObject=function(m,C){var H=fr[ln[m]];return G("q"),G(C.toString()+" cm"),G("/"+H.id+" Do"),G("Q"),this},p.getFormObject=function(m){var C=fr[ln[m]];return{x:C.x,y:C.y,width:C.width,height:C.height,matrix:C.matrix}},p.save=function(m,C){return m=m||"generated.pdf",(C=C||{}).returnPromise=C.returnPromise||!1,C.returnPromise===!1?(vo(Qn(wn()),m),typeof vo.unload=="function"&&nt.setTimeout&&setTimeout(vo.unload,911),this):new Promise(function(H,Q){try{var ae=vo(Qn(wn()),m);typeof vo.unload=="function"&&nt.setTimeout&&setTimeout(vo.unload,911),H(ae)}catch(we){Q(we.message)}})},Ge.API)Ge.API.hasOwnProperty(ro)&&(ro==="events"&&Ge.API.events.length?function(m,C){var H,Q,ae;for(ae=C.length-1;ae!==-1;ae--)H=C[ae][0],Q=C[ae][1],m.subscribe.apply(m,[H].concat(typeof Q=="function"?[Q]:Q))}(St,Ge.API.events):p[ro]=Ge.API[ro]);function Ha(m){return Ke[m].mediaBox.topRightX-Ke[m].mediaBox.bottomLeftX}function qa(m,C){Ke[m].mediaBox.topRightX=C+Ke[m].mediaBox.bottomLeftX}function ri(m){return Ke[m].mediaBox.topRightY-Ke[m].mediaBox.bottomLeftY}function ni(m,C){Ke[m].mediaBox.topRightY=C+Ke[m].mediaBox.bottomLeftY}var $a=p.getPageWidth=function(m){return Ha(m=m||$)/Qe},Va=p.setPageWidth=function(m,C){qa(m,C*Qe)},no=p.getPageHeight=function(m){return ri(m=m||$)/Qe},Wa=p.setPageHeight=function(m,C){ni(m,C*Qe)};return p.internal={pdfEscape:Rr,getStyle:No,getFont:To,getFontSize:Re,getCharSpace:pl,getTextColor:jo,getLineHeight:yi,getLineHeightFactor:hl,getLineWidth:rt,write:mt,getHorizontalCoordinate:ei,getVerticalCoordinate:ti,getCoordinateString:fl,getVerticalCoordinateString:dl,collections:{},newObject:Dt,newAdditionalObject:Vn,newObjectDeferred:Kt,newObjectDeferredBegin:lr,getFilters:Yr,putStream:Br,events:St,scaleFactor:Qe,pageSize:{getWidth:function(){return $a($)},setWidth:function(m){Va($,m)},getHeight:function(){return no($)},setHeight:function(m){Wa($,m)}},encryptionOptions:d,encryption:Xe,getEncryptor:function(m){return d!==null?Xe.encryptor(m,0):function(C){return C}},output:Xr,getNumberOfPages:ko,pages:Ie,out:G,f2:L,f3:M,getPageInfo:Gt,getPageInfoByObjId:yn,getCurrentPageInfo:Ur,getPDFVersion:_,Point:to,Rectangle:aa,Matrix:Je,hasHotfix:de},Object.defineProperty(p.internal.pageSize,"width",{get:function(){return $a($)},set:function(m){Va($,m)},enumerable:!0,configurable:!0}),Object.defineProperty(p.internal.pageSize,"height",{get:function(){return no($)},set:function(m){Wa($,m)},enumerable:!0,configurable:!0}),(function(m){for(var C=0,H=Ye.length;C<H;C++){var Q=Ao.call(this,m[C][0],m[C][1],m[C][2],Ye[C][3],!0);x===!1&&(S[Q]=!0);var ae=m[C][0].split("-");Wi({id:Q,fontName:ae[0],fontStyle:ae[1]||""})}St.publish("addFonts",{fonts:De,dictionary:ct})}).call(p,Ye),He="F1",bi(o,r),St.publish("initialized"),p}Wo.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},Wo.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Wo.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},Wo.prototype.processOwnerPassword=function(e,t){return Sc(yc(t).substr(0,5),e)},Wo.prototype.encryptor=function(e,t){var r=yc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return Sc(r,n)}},Xs.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||Et(e)!==Et(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},Ge.API={events:[]},Ge.version="3.0.3";var Zt=Ge.API,Gc=1,Co=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},$o=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},ht=function(e){return e.toFixed(2)},Di=function(e){return e.toFixed(5)};Zt.__acroform__={};var Vr=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},K1=function(e){return e*Gc},zn=function(e){var t=new d0,r=Me.internal.getHeight(e)||0,n=Me.internal.getWidth(e)||0;return t.BBox=[0,0,Number(ht(n)),Number(ht(r))],t},nv=Zt.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},iv=Zt.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},ov=Zt.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},ir=Zt.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return ov(e,t-1)},or=Zt.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return nv(e,t-1)},ar=Zt.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return iv(e,t-1)},av=Zt.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,o=e[0],a=e[1],c=e[2],l=e[3],h={};return h.lowerLeft_X=r(o)||0,h.lowerLeft_Y=n(a+l)||0,h.upperRight_X=r(o+c)||0,h.upperRight_Y=n(a)||0,[Number(ht(h.lowerLeft_X)),Number(ht(h.lowerLeft_Y)),Number(ht(h.upperRight_X)),Number(ht(h.upperRight_Y))]},sv=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=_c(e,r),o=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+o+" "+ht(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var a=zn(e);return a.scope=e.scope,a.stream=t.join(`
`),a}},_c=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},o=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");o=e.multiline?o.map(function(L){return L.split(`
`)}):o.map(function(L){return[L]});var a=r,c=Me.internal.getHeight(e)||0;c=c<0?-c:c;var l=Me.internal.getWidth(e)||0;l=l<0?-l:l;var h=function(L,M,W){if(L+1<o.length){var q=M+" "+o[L+1][0];return Ts(q,e,W).width<=l-4}return!1};a++;e:for(;a>0;){t="",a--;var f,d,x=Ts("3",e,a).height,S=e.multiline?c-a:(c-x)/2,p=S+=2,w=0,_=0,k=0;if(a<=0){t=`(...) Tj
`,t+="% Width of Text: "+Ts(t,e,a=12).width+", FieldWidth:"+l+`
`;break}for(var y="",R=0,P=0;P<o.length;P++)if(o.hasOwnProperty(P)){var O=!1;if(o[P].length!==1&&k!==o[P].length-1){if((x+2)*(R+2)+2>c)continue e;y+=o[P][k],O=!0,_=P,P--}else{y=(y+=o[P][k]+" ").substr(y.length-1)==" "?y.substr(0,y.length-1):y;var V=parseInt(P),J=h(V,y,a),K=P>=o.length-1;if(J&&!K){y+=" ",k=0;continue}if(J||K){if(K)_=V;else if(e.multiline&&(x+2)*(R+2)+2>c)continue e}else{if(!e.multiline||(x+2)*(R+2)+2>c)continue e;_=V}}for(var X="",T=w;T<=_;T++){var Z=o[T];if(e.multiline){if(T===_){X+=Z[k]+" ",k=(k+1)%Z.length;continue}if(T===w){X+=Z[Z.length-1]+" ";continue}}X+=Z[0]+" "}switch(X=X.substr(X.length-1)==" "?X.substr(0,X.length-1):X,d=Ts(X,e,a).width,e.textAlign){case"right":f=l-d-2;break;case"center":f=(l-d)/2;break;default:f=2}t+=ht(f)+" "+ht(p)+` Td
`,t+="("+Co(X)+`) Tj
`,t+=-ht(f)+` 0 Td
`,p=-(a+2),d=0,w=O?_:_+1,R++,y=""}break}return n.text=t,n.fontSize=a,n},Ts=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),o=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:o}},lv={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},cv=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},uv=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(In.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(lv)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");Gc=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new p0,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];a.objId=void 0,a.hasAnnotation&&cv(a,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,o){var a=!n;for(var c in n||(o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(c)){var l=n[c],h=[],f=l.Rect;if(l.Rect&&(l.Rect=av(l.Rect,o)),o.internal.newObjectDeferredBegin(l.objId,!0),l.DA=Me.createDefaultAppearanceStream(l),Et(l)==="object"&&typeof l.getKeyValueListForStream=="function"&&(h=l.getKeyValueListForStream()),l.Rect=f,l.hasAppearanceStream&&!l.appearanceStreamContent){var d=sv(l);h.push({key:"AP",value:"<</N "+d+">>"}),o.internal.acroformPlugin.xForms.push(d)}if(l.appearanceStreamContent){var x="";for(var S in l.appearanceStreamContent)if(l.appearanceStreamContent.hasOwnProperty(S)){var p=l.appearanceStreamContent[S];if(x+="/"+S+" ",x+="<<",Object.keys(p).length>=1||Array.isArray(p)){for(var c in p)if(p.hasOwnProperty(c)){var w=p[c];typeof w=="function"&&(w=w.call(o,l)),x+="/"+c+" "+w+" ",o.internal.acroformPlugin.xForms.indexOf(w)>=0||o.internal.acroformPlugin.xForms.push(w)}}else typeof(w=p)=="function"&&(w=w.call(o,l)),x+="/"+c+" "+w,o.internal.acroformPlugin.xForms.indexOf(w)>=0||o.internal.acroformPlugin.xForms.push(w);x+=">>"}h.push({key:"AP",value:`<<
`+x+">>"})}o.internal.putStream({additionalKeyValues:h,objectId:l.objId}),o.internal.out("endobj")}a&&function(_,k){for(var y in _)if(_.hasOwnProperty(y)){var R=y,P=_[y];k.internal.newObjectDeferredBegin(P.objId,!0),Et(P)==="object"&&typeof P.putStream=="function"&&P.putStream(),delete _[R]}}(o.internal.acroformPlugin.xForms,o)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},f0=Zt.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(c){return c};if(Array.isArray(e)){for(var o="[",a=0;a<e.length;a++)switch(a!==0&&(o+=" "),Et(e[a])){case"boolean":case"number":case"object":o+=e[a].toString();break;case"string":e[a].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),o+="("+Co(n(e[a].toString()))+")"):o+=e[a].toString()}return o+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},Ql=function(e,t,r){var n=function(o){return o};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+Co(n(e))+")"},Un=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Un.prototype.toString=function(){return this.objId+" 0 R"},Un.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Un.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(a){return a!="content"&&a!="appearanceStreamContent"&&a!="scope"&&a!="objId"&&a.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],o=this[n];o&&(Array.isArray(o)?e.push({key:n,value:f0(o,this.objId,this.scope)}):o instanceof Un?(o.scope=this.scope,e.push({key:n,value:o.objId+" 0 R"})):typeof o!="function"&&e.push({key:n,value:o}))}return e};var d0=function(){Un.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};Vr(d0,Un);var p0=function(){Un.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+Co(r(e))+")"}},set:function(r){e=r}})};Vr(p0,Un);var In=function e(){Un.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute F supplied.');t=y}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!ir(t,3)},set:function(y){y?this.F=or(t,3):this.F=ar(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute Ff supplied.');r=y}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(y){n=y!==void 0?y:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(y){n[0]=y}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(y){n[1]=y}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(y){n[2]=y}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(y){n[3]=y}});var o="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return o},set:function(y){switch(y){case"/Btn":case"/Tx":case"/Ch":case"/Sig":o=y;break;default:throw new Error('Invalid value "'+y+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof Js)return;a="FieldObject"+e.FieldNum++}var y=function(R){return R};return this.scope&&(y=this.scope.internal.getEncryptor(this.objId)),"("+Co(y(a))+")"},set:function(y){a=y.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(y){a=y}});var c="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return c},set:function(y){c=y}});var l="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return l},set:function(y){l=y}});var h=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return h},set:function(y){h=y}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/Gc:f},set:function(y){f=y}});var d="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return d},set:function(y){d=y}});var x="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!x||this instanceof Js||this instanceof xo))return Ql(x,this.objId,this.scope)},set:function(y){y=y.toString(),x=y}});var S=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(S)return this instanceof br==0?Ql(S,this.objId,this.scope):S},set:function(y){y=y.toString(),S=this instanceof br==0?y.substr(0,1)==="("?$o(y.substr(1,y.length-2)):$o(y):y}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof br==1?$o(S.substr(1,S.length-1)):S},set:function(y){y=y.toString(),S=this instanceof br==1?"/"+y:y}});var p=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(p)return p},set:function(y){this.V=y}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(p)return this instanceof br==0?Ql(p,this.objId,this.scope):p},set:function(y){y=y.toString(),p=this instanceof br==0?y.substr(0,1)==="("?$o(y.substr(1,y.length-2)):$o(y):y}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof br==1?$o(p.substr(1,p.length-1)):p},set:function(y){y=y.toString(),p=this instanceof br==1?"/"+y:y}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var w,_=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return _},set:function(y){y=!!y,_=y}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(w)return w},set:function(y){w=y}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,1)},set:function(y){y?this.Ff=or(this.Ff,1):this.Ff=ar(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,2)},set:function(y){y?this.Ff=or(this.Ff,2):this.Ff=ar(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,3)},set:function(y){y?this.Ff=or(this.Ff,3):this.Ff=ar(this.Ff,3)}});var k=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(k!==null)return k},set:function(y){if([0,1,2].indexOf(y)===-1)throw new Error('Invalid value "'+y+'" for attribute Q supplied.');k=y}}),Object.defineProperty(this,"textAlign",{get:function(){var y;switch(k){case 0:default:y="left";break;case 1:y="center";break;case 2:y="right"}return y},configurable:!0,enumerable:!0,set:function(y){switch(y){case"right":case 2:k=2;break;case"center":case 1:k=1;break;default:k=0}}})};Vr(In,Un);var Xo=function(){In.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return f0(t,this.objId,this.scope)},set:function(r){var n,o;o=[],typeof(n=r)=="string"&&(o=function(a,c,l){l||(l=1);for(var h,f=[];h=c.exec(a);)f.push(h[l]);return f}(n,/\((.*?)\)/g)),t=o}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,18)},set:function(r){r?this.Ff=or(this.Ff,18):this.Ff=ar(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=or(this.Ff,19):this.Ff=ar(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,20)},set:function(r){r?(this.Ff=or(this.Ff,20),t.sort()):this.Ff=ar(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,22)},set:function(r){r?this.Ff=or(this.Ff,22):this.Ff=ar(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,23)},set:function(r){r?this.Ff=or(this.Ff,23):this.Ff=ar(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,27)},set:function(r){r?this.Ff=or(this.Ff,27):this.Ff=ar(this.Ff,27)}}),this.hasAppearanceStream=!1};Vr(Xo,In);var Jo=function(){Xo.call(this),this.fontName="helvetica",this.combo=!1};Vr(Jo,Xo);var Zo=function(){Jo.call(this),this.combo=!0};Vr(Zo,Jo);var Bs=function(){Zo.call(this),this.edit=!0};Vr(Bs,Zo);var br=function(){In.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,15)},set:function(r){r?this.Ff=or(this.Ff,15):this.Ff=ar(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,16)},set:function(r){r?this.Ff=or(this.Ff,16):this.Ff=ar(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,17)},set:function(r){r?this.Ff=or(this.Ff,17):this.Ff=ar(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,26)},set:function(r){r?this.Ff=or(this.Ff,26):this.Ff=ar(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(a){return a};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,o=[];for(n in o.push("<<"),t)o.push("/"+n+" ("+Co(r(t[n]))+")");return o.push(">>"),o.join(`
`)}},set:function(r){Et(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};Vr(br,In);var Us=function(){br.call(this),this.pushButton=!0};Vr(Us,br);var Qo=function(){br.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};Vr(Qo,br);var Js=function(){var e,t;In.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(o){e=o}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(o){t=o}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var o=function(l){return l};this.scope&&(o=this.scope.internal.getEncryptor(this.objId));var a,c=[];for(a in c.push("<<"),n)c.push("/"+a+" ("+Co(o(n[a]))+")");return c.push(">>"),c.join(`
`)},set:function(o){Et(o)==="object"&&(n=o)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(o){typeof o=="string"&&(n.CA=o)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(o){r=o}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(o){r="/"+o}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Me.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};Vr(Js,In),Qo.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},Qo.prototype.createOption=function(e){var t=new Js;return t.Parent=this,t.optionName=e,this.Kids.push(t),hv.call(this.scope,t),t};var Hs=function(){br.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Me.CheckBox.createAppearanceStream()};Vr(Hs,br);var xo=function(){In.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,13)},set:function(t){t?this.Ff=or(this.Ff,13):this.Ff=ar(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,21)},set:function(t){t?this.Ff=or(this.Ff,21):this.Ff=ar(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,23)},set:function(t){t?this.Ff=or(this.Ff,23):this.Ff=ar(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,24)},set:function(t){t?this.Ff=or(this.Ff,24):this.Ff=ar(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,25)},set:function(t){t?this.Ff=or(this.Ff,25):this.Ff=ar(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,26)},set:function(t){t?this.Ff=or(this.Ff,26):this.Ff=ar(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};Vr(xo,In);var qs=function(){xo.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!ir(this.Ff,14)},set:function(e){e?this.Ff=or(this.Ff,14):this.Ff=ar(this.Ff,14)}}),this.password=!0};Vr(qs,xo);var Me={CheckBox:{createAppearanceStream:function(){return{N:{On:Me.CheckBox.YesNormal},D:{On:Me.CheckBox.YesPushDown,Off:Me.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,o=e.scope.__private__.encodeColorString(e.color),a=_c(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+ht(Me.internal.getWidth(e))+" "+ht(Me.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+ht(a.fontSize)+" Tf "+o),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=zn(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),o=[],a=Me.internal.getHeight(e),c=Me.internal.getWidth(e),l=_c(e,e.caption);return o.push("1 g"),o.push("0 0 "+ht(c)+" "+ht(a)+" re"),o.push("f"),o.push("q"),o.push("0 0 1 rg"),o.push("0 0 "+ht(c-1)+" "+ht(a-1)+" re"),o.push("W"),o.push("n"),o.push("0 g"),o.push("BT"),o.push("/"+r+" "+ht(l.fontSize)+" Tf "+n),o.push(l.text),o.push("ET"),o.push("Q"),t.stream=o.join(`
`),t},OffPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ht(Me.internal.getWidth(e))+" "+ht(Me.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Me.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Me.RadioButton.Circle.YesNormal,t.D[e]=Me.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Me.internal.getWidth(e)<=Me.internal.getHeight(e)?Me.internal.getWidth(e)/4:Me.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Me.internal.Bezier_C,a=Number((n*o).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+Di(Me.internal.getWidth(e)/2)+" "+Di(Me.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Me.internal.getWidth(e)<=Me.internal.getHeight(e)?Me.internal.getWidth(e)/4:Me.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Me.internal.Bezier_C).toFixed(5)),c=Number((n*Me.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Di(Me.internal.getWidth(e)/2)+" "+Di(Me.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+Di(Me.internal.getWidth(e)/2)+" "+Di(Me.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+c+" "+c+" "+n+" 0 "+n+" c"),r.push("-"+c+" "+n+" -"+n+" "+c+" -"+n+" 0 c"),r.push("-"+n+" -"+c+" -"+c+" -"+n+" 0 -"+n+" c"),r.push(c+" -"+n+" "+n+" -"+c+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Me.internal.getWidth(e)<=Me.internal.getHeight(e)?Me.internal.getWidth(e)/4:Me.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Me.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Di(Me.internal.getWidth(e)/2)+" "+Di(Me.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Me.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Me.RadioButton.Cross.YesNormal,t.D[e]=Me.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=zn(e);t.scope=e.scope;var r=[],n=Me.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+ht(Me.internal.getWidth(e)-2)+" "+ht(Me.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(ht(n.x1.x)+" "+ht(n.x1.y)+" m"),r.push(ht(n.x2.x)+" "+ht(n.x2.y)+" l"),r.push(ht(n.x4.x)+" "+ht(n.x4.y)+" m"),r.push(ht(n.x3.x)+" "+ht(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=Me.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+ht(Me.internal.getWidth(e))+" "+ht(Me.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+ht(Me.internal.getWidth(e)-2)+" "+ht(Me.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(ht(r.x1.x)+" "+ht(r.x1.y)+" m"),n.push(ht(r.x2.x)+" "+ht(r.x2.y)+" l"),n.push(ht(r.x4.x)+" "+ht(r.x4.y)+" m"),n.push(ht(r.x3.x)+" "+ht(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=zn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ht(Me.internal.getWidth(e))+" "+ht(Me.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Me.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Me.internal.getWidth(e),r=Me.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Me.internal.getWidth=function(e){var t=0;return Et(e)==="object"&&(t=K1(e.Rect[2])),t},Me.internal.getHeight=function(e){var t=0;return Et(e)==="object"&&(t=K1(e.Rect[3])),t};var hv=Zt.addField=function(e){if(uv(this,e),!(e instanceof In))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};Zt.AcroFormChoiceField=Xo,Zt.AcroFormListBox=Jo,Zt.AcroFormComboBox=Zo,Zt.AcroFormEditBox=Bs,Zt.AcroFormButton=br,Zt.AcroFormPushButton=Us,Zt.AcroFormRadioButton=Qo,Zt.AcroFormCheckBox=Hs,Zt.AcroFormTextField=xo,Zt.AcroFormPasswordField=qs,Zt.AcroFormAppearance=Me,Zt.AcroForm={ChoiceField:Xo,ListBox:Jo,ComboBox:Zo,EditBox:Bs,Button:br,PushButton:Us,RadioButton:Qo,CheckBox:Hs,TextField:xo,PasswordField:qs,Appearance:Me},Ge.AcroForm={ChoiceField:Xo,ListBox:Jo,ComboBox:Zo,EditBox:Bs,Button:br,PushButton:Us,RadioButton:Qo,CheckBox:Hs,TextField:xo,PasswordField:qs,Appearance:Me};Ge.AcroForm;function m0(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},o=e.__addimage__.getImageFileTypeByImageData=function(L,M){var W,q,ie,se,ce,oe=r;if((M=M||r)==="RGBA"||L.data!==void 0&&L.data instanceof Uint8ClampedArray&&"height"in L&&"width"in L)return"RGBA";if(J(L))for(ce in n)for(ie=n[ce],W=0;W<ie.length;W+=1){for(se=!0,q=0;q<ie[W].length;q+=1)if(ie[W][q]!==void 0&&ie[W][q]!==L[q]){se=!1;break}if(se===!0){oe=ce;break}}else for(ce in n)for(ie=n[ce],W=0;W<ie.length;W+=1){for(se=!0,q=0;q<ie[W].length;q+=1)if(ie[W][q]!==void 0&&ie[W][q]!==L.charCodeAt(q)){se=!1;break}if(se===!0){oe=ce;break}}return oe===r&&M!==r&&(oe=M),oe},a=function L(M){for(var W=this.internal.write,q=this.internal.putStream,ie=(0,this.internal.getFilters)();ie.indexOf("FlateEncode")!==-1;)ie.splice(ie.indexOf("FlateEncode"),1);M.objectId=this.internal.newObject();var se=[];if(se.push({key:"Type",value:"/XObject"}),se.push({key:"Subtype",value:"/Image"}),se.push({key:"Width",value:M.width}),se.push({key:"Height",value:M.height}),M.colorSpace===y.INDEXED?se.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(M.palette.length/3-1)+" "+("sMask"in M&&M.sMask!==void 0?M.objectId+2:M.objectId+1)+" 0 R]"}):(se.push({key:"ColorSpace",value:"/"+M.colorSpace}),M.colorSpace===y.DEVICE_CMYK&&se.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),se.push({key:"BitsPerComponent",value:M.bitsPerComponent}),"decodeParameters"in M&&M.decodeParameters!==void 0&&se.push({key:"DecodeParms",value:"<<"+M.decodeParameters+">>"}),"transparency"in M&&Array.isArray(M.transparency)&&M.transparency.length>0){for(var ce="",oe=0,pe=M.transparency.length;oe<pe;oe++)ce+=M.transparency[oe]+" "+M.transparency[oe]+" ";se.push({key:"Mask",value:"["+ce+"]"})}M.sMask!==void 0&&se.push({key:"SMask",value:M.objectId+1+" 0 R"});var ke=M.filter!==void 0?["/"+M.filter]:void 0;if(q({data:M.data,additionalKeyValues:se,alreadyAppliedFilters:ke,objectId:M.objectId}),W("endobj"),"sMask"in M&&M.sMask!==void 0){var ye,I=(ye=M.sMaskBitsPerComponent)!==null&&ye!==void 0?ye:M.bitsPerComponent,$={width:M.width,height:M.height,colorSpace:"DeviceGray",bitsPerComponent:I,data:M.sMask};"filter"in M&&($.decodeParameters="/Predictor ".concat(M.predictor," /Colors 1 /BitsPerComponent ").concat(I," /Columns ").concat(M.width),$.filter=M.filter),L.call(this,$)}if(M.colorSpace===y.INDEXED){var Y=this.internal.newObject();q({data:X(new Uint8Array(M.palette)),objectId:Y}),W("endobj")}},c=function(){var L=this.internal.collections[t+"images"];for(var M in L)a.call(this,L[M])},l=function(){var L,M=this.internal.collections[t+"images"],W=this.internal.write;for(var q in M)W("/I"+(L=M[q]).index,L.objectId,"0","R")},h=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",c),this.internal.events.subscribe("putXobjectDict",l))},f=function(){var L=this.internal.collections[t+"images"];return h.call(this),L},d=function(){return Object.keys(this.internal.collections[t+"images"]).length},x=function(L){return typeof e["process"+L.toUpperCase()]=="function"},S=function(L){return Et(L)==="object"&&L.nodeType===1},p=function(L,M){if(L.nodeName==="IMG"&&L.hasAttribute("src")){var W=""+L.getAttribute("src");if(W.indexOf("data:image/")===0)return zs(unescape(W).split("base64,").pop());var q=e.loadFile(W,!0);if(q!==void 0)return q}if(L.nodeName==="CANVAS"){if(L.width===0||L.height===0)throw new Error("Given canvas must have data. Canvas width: "+L.width+", height: "+L.height);var ie;switch(M){case"PNG":ie="image/png";break;case"WEBP":ie="image/webp";break;default:ie="image/jpeg"}return zs(L.toDataURL(ie,1).split("base64,").pop())}},w=function(L){var M=this.internal.collections[t+"images"];if(M){for(var W in M)if(L===M[W].alias)return M[W]}},_=function(L,M,W){return L||M||(L=-96,M=-96),L<0&&(L=-1*W.width*72/L/this.internal.scaleFactor),M<0&&(M=-1*W.height*72/M/this.internal.scaleFactor),L===0&&(L=M*W.width/W.height),M===0&&(M=L*W.height/W.width),[L,M]},k=function(L,M,W,q,ie,se){var ce=_.call(this,W,q,ie),oe=this.internal.getCoordinateString,pe=this.internal.getVerticalCoordinateString,ke=f.call(this);if(W=ce[0],q=ce[1],ke[ie.index]=ie,se){se*=Math.PI/180;var ye=Math.cos(se),I=Math.sin(se),$=function(ee){return ee.toFixed(4)},Y=[$(ye),$(I),$(-1*I),$(ye),0,0,"cm"]}this.internal.write("q"),se?(this.internal.write([1,"0","0",1,oe(L),pe(M+q),"cm"].join(" ")),this.internal.write(Y.join(" ")),this.internal.write([oe(W),"0","0",oe(q),"0","0","cm"].join(" "))):this.internal.write([oe(W),"0","0",oe(q),oe(L),pe(M+q),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+ie.index+" Do"),this.internal.write("Q")},y=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var R=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},P=e.__addimage__.sHashCode=function(L){var M,W,q=0;if(typeof L=="string")for(W=L.length,M=0;M<W;M++)q=(q<<5)-q+L.charCodeAt(M),q|=0;else if(J(L))for(W=L.byteLength/2,M=0;M<W;M++)q=(q<<5)-q+L[M],q|=0;return q},O=e.__addimage__.validateStringAsBase64=function(L){(L=L||"").toString().trim();var M=!0;return L.length===0&&(M=!1),L.length%4!=0&&(M=!1),/^[A-Za-z0-9+/]+$/.test(L.substr(0,L.length-2))===!1&&(M=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(L.substr(-2))===!1&&(M=!1),M},V=e.__addimage__.extractImageFromDataUrl=function(L){if(L==null||!(L=L.trim()).startsWith("data:"))return null;var M=L.indexOf(",");return M<0?null:L.substring(0,M).trim().endsWith("base64")?L.substring(M+1):null};e.__addimage__.isArrayBuffer=function(L){return L instanceof ArrayBuffer};var J=e.__addimage__.isArrayBufferView=function(L){return L instanceof Int8Array||L instanceof Uint8Array||L instanceof Uint8ClampedArray||L instanceof Int16Array||L instanceof Uint16Array||L instanceof Int32Array||L instanceof Uint32Array||L instanceof Float32Array||L instanceof Float64Array},K=e.__addimage__.binaryStringToUint8Array=function(L){for(var M=L.length,W=new Uint8Array(M),q=0;q<M;q++)W[q]=L.charCodeAt(q);return W},X=e.__addimage__.arrayBufferToBinaryString=function(L){for(var M="",W=J(L)?L:new Uint8Array(L),q=0;q<W.length;q+=8192)M+=String.fromCharCode.apply(null,W.subarray(q,q+8192));return M};e.addImage=function(){var L,M,W,q,ie,se,ce,oe,pe;if(typeof arguments[1]=="number"?(M=r,W=arguments[1],q=arguments[2],ie=arguments[3],se=arguments[4],ce=arguments[5],oe=arguments[6],pe=arguments[7]):(M=arguments[1],W=arguments[2],q=arguments[3],ie=arguments[4],se=arguments[5],ce=arguments[6],oe=arguments[7],pe=arguments[8]),Et(L=arguments[0])==="object"&&!S(L)&&"imageData"in L){var ke=L;L=ke.imageData,M=ke.format||M||r,W=ke.x||W||0,q=ke.y||q||0,ie=ke.w||ke.width||ie,se=ke.h||ke.height||se,ce=ke.alias||ce,oe=ke.compression||oe,pe=ke.rotation||ke.angle||pe}var ye=this.internal.getFilters();if(oe===void 0&&ye.indexOf("FlateEncode")!==-1&&(oe="SLOW"),isNaN(W)||isNaN(q))throw new Error("Invalid coordinates passed to jsPDF.addImage");h.call(this);var I=T.call(this,L,M,ce,oe);return k.call(this,W,q,ie,se,I,pe),this};var T=function(L,M,W,q){var ie,se,ce;if(typeof L=="string"&&o(L)===r){L=unescape(L);var oe=Z(L,!1);(oe!==""||(oe=e.loadFile(L,!0))!==void 0)&&(L=oe)}if(S(L)&&(L=p(L,M)),M=o(L,M),!x(M))throw new Error("addImage does not support files of type '"+M+"', please ensure that a plugin for '"+M+"' support is added.");if(((ce=W)==null||ce.length===0)&&(W=function(pe){return typeof pe=="string"||J(pe)?P(pe):J(pe.data)?P(pe.data):null}(L)),(ie=w.call(this,W))||(L instanceof Uint8Array||M==="RGBA"||(se=L,L=K(L)),ie=this["process"+M.toUpperCase()](L,d.call(this),W,function(pe){return pe&&typeof pe=="string"&&(pe=pe.toUpperCase()),pe in e.image_compression?pe:R.NONE}(q),se)),!ie)throw new Error("An unknown error occurred whilst processing the image.");return ie},Z=e.__addimage__.convertBase64ToBinaryString=function(L,M){M=typeof M!="boolean"||M;var W,q="";if(typeof L=="string"){var ie;W=(ie=V(L))!==null&&ie!==void 0?ie:L;try{q=zs(W)}catch(se){if(M)throw O(W)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+se.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return q};e.getImageProperties=function(L){var M,W,q="";if(S(L)&&(L=p(L)),typeof L=="string"&&o(L)===r&&((q=Z(L,!1))===""&&(q=e.loadFile(L)||""),L=q),W=o(L),!x(W))throw new Error("addImage does not support files of type '"+W+"', please ensure that a plugin for '"+W+"' support is added.");if(L instanceof Uint8Array||(L=K(L)),!(M=this["process"+W.toUpperCase()](L)))throw new Error("An unknown error occurred whilst processing the image");return M.fileType=W,M}})(Ge.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};Ge.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,o,a,c=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString,h=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,d=!1,x=0;x<f.length&&!d;x++)switch((n=f[x]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(d=!0);break;case"reference":case"text":case"freetext":d=!0}if(d!=0){this.internal.write("/Annots [");for(var S=0;S<f.length;S++){n=f[S];var p=this.internal.pdfEscape,w=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var _=this.internal.newAdditionalObject(),k=this.internal.newAdditionalObject(),y=this.internal.getEncryptor(_.objId),R=n.title||"Note";a="<</Type /Annot /Subtype /Text "+(o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y)+"] ")+"/Contents ("+p(y(n.contents))+")",a+=" /Popup "+k.objId+" 0 R",a+=" /P "+h.objId+" 0 R",a+=" /T ("+p(y(R))+") >>",_.content=a;var P=_.objId+" 0 R";a="<</Type /Annot /Subtype /Popup "+(o="/Rect ["+c(n.bounds.x+30)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w+30)+" "+l(n.bounds.y)+"] ")+" /Parent "+P,n.open&&(a+=" /Open true"),a+=" >>",k.content=a,this.internal.write(_.objId,"0 R",k.objId,"0 R");break;case"freetext":o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y+n.bounds.h)+"] ";var O=n.color||"#000000";a="<</Type /Annot /Subtype /FreeText "+o+"/Contents ("+p(w(n.contents))+")",a+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+O+")",a+=" /Border [0 0 0]",a+=" >>",this.internal.write(a);break;case"link":if(n.options.name){var V=this.annotations._nameMap[n.options.name];n.options.pageNumber=V.page,n.options.top=V.y}else n.options.top||(n.options.top=0);if(o="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",a="",n.options.url)a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /A <</S /URI /URI ("+p(w(n.options.url))+") >>";else if(n.options.pageNumber)switch(a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":a+=" /Fit]";break;case"FitH":a+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,a+=" /FitV "+n.options.left+"]";break;default:var J=l(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),a+=" /XYZ "+n.options.left+" "+J+" "+n.options.zoom+"]"}a!=""&&(a+=" >>",this.internal.write(a))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,o,a,c){var l=this.internal.getCurrentPageInfo(),h=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;l.pageContext.annotations.push({finalBounds:{x:h(r),y:f(n),w:h(r+o),h:f(n+a)},options:c,type:"link"})},e.textWithLink=function(r,n,o,a){var c,l,h=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(a.maxWidth!==void 0){l=a.maxWidth;var d=this.splitTextToSize(r,l).length;c=Math.ceil(f*d)}else l=h,c=f;return this.text(r,n,o,a),o+=.2*f,a.align==="center"&&(n-=h/2),a.align==="right"&&(n-=h),this.link(n,o-f,l,c,a),h},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(Ge.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},o=[1570,1571,1573,1575];e.__arabicParser__={};var a=e.__arabicParser__.isInArabicSubstitutionA=function(_){return t[_.charCodeAt(0)]!==void 0},c=e.__arabicParser__.isArabicLetter=function(_){return typeof _=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(_)},l=e.__arabicParser__.isArabicEndLetter=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length<=2},h=e.__arabicParser__.isArabicAlfLetter=function(_){return c(_)&&o.indexOf(_.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=3};var d=e.__arabicParser__.arabicLetterHasMedialForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length==4},x=e.__arabicParser__.resolveLigatures=function(_){var k=0,y=r,R="",P=0;for(k=0;k<_.length;k+=1)y[_.charCodeAt(k)]!==void 0?(P++,typeof(y=y[_.charCodeAt(k)])=="number"&&(R+=String.fromCharCode(y),y=r,P=0),k===_.length-1&&(y=r,R+=_.charAt(k-(P-1)),k-=P-1,P=0)):(y=r,R+=_.charAt(k-P),k-=P,P=0);return R};e.__arabicParser__.isArabicDiacritic=function(_){return _!==void 0&&n[_.charCodeAt(0)]!==void 0};var S=e.__arabicParser__.getCorrectForm=function(_,k,y){return c(_)?a(_)===!1?-1:!f(_)||!c(k)&&!c(y)||!c(y)&&l(k)||l(_)&&!c(k)||l(_)&&h(k)||l(_)&&l(k)?0:d(_)&&c(k)&&!l(k)&&c(y)&&f(y)?3:l(_)||!c(y)?1:2:-1},p=function(_){var k=0,y=0,R=0,P="",O="",V="",J=(_=_||"").split("\\s+"),K=[];for(k=0;k<J.length;k+=1){for(K.push(""),y=0;y<J[k].length;y+=1)P=J[k][y],O=J[k][y-1],V=J[k][y+1],c(P)?(R=S(P,O,V),K[k]+=R!==-1?String.fromCharCode(t[P.charCodeAt(0)][R]):P):K[k]+=P;K[k]=x(K[k])}return K.join(" ")},w=e.__arabicParser__.processArabic=e.processArabic=function(){var _,k=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,y=[];if(Array.isArray(k)){var R=0;for(y=[],R=0;R<k.length;R+=1)Array.isArray(k[R])?y.push([p(k[R][0]),k[R][1],k[R][2]]):y.push([p(k[R])]);_=y}else _=p(k);return typeof arguments[0]=="string"?_:(arguments[0].text=_,arguments[0])};e.events.push(["preProcessText",w])}(Ge.API),Ge.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(l){r=l}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(l){n=isNaN(l)||Number.isInteger(l)===!1||l<0?150:l,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var o=300;Object.defineProperty(this,"height",{get:function(){return o},set:function(l){o=isNaN(l)||Number.isInteger(l)===!1||l<0?300:l,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=o+1)}});var a=[];Object.defineProperty(this,"childNodes",{get:function(){return a},set:function(l){a=l}});var c={};Object.defineProperty(this,"style",{get:function(){return c},set:function(l){c=l}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var o;if((r=r||"2d")!=="2d")return null;for(o in n)this.pdf.context2d.hasOwnProperty(o)&&(this.pdf.context2d[o]=n[o]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Ge.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),o.call(this))},o=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var h=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return h},set:function(_){h=_}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(_){f=_}});var d=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return d},set:function(_){d=_}});var x=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return x},set:function(_){x=_}});var S=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return S},set:function(_){S=_}});var p=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return p},set:function(_){p=_}});var w=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return w},set:function(_){w=_}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(h){return n.call(this),this.internal.__cell__.headerFunction=typeof h=="function"?h:void 0,this},e.getTextDimensions=function(h,f){n.call(this);var d=(f=f||{}).fontSize||this.getFontSize(),x=f.font||this.getFont(),S=f.scaleFactor||this.internal.scaleFactor,p=0,w=0,_=0,k=this;if(!Array.isArray(h)&&typeof h!="string"){if(typeof h!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");h=String(h)}var y=f.maxWidth;y>0?typeof h=="string"?h=this.splitTextToSize(h,y):Object.prototype.toString.call(h)==="[object Array]"&&(h=h.reduce(function(P,O){return P.concat(k.splitTextToSize(O,y))},[])):h=Array.isArray(h)?h:[h];for(var R=0;R<h.length;R++)p<(_=this.getStringUnitWidth(h[R],{font:x})*d)&&(p=_);return p!==0&&(w=h.length),{w:p/=S,h:Math.max((w*d*this.getLineHeightFactor()-d*(this.getLineHeightFactor()-1))/S,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var h=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new a(h.left,h.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var c=e.cell=function(){var h;h=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,d=this.internal.__cell__.padding,x=this.internal.__cell__.margins||t,S=this.internal.__cell__.tableHeaderRow,p=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===h.lineNumber?(h.x=(f.x||0)+(f.width||0),h.y=f.y||0):f.y+f.height+h.height+x.bottom>this.getPageHeight()?(this.cellAddPage(),h.y=x.top,p&&S&&(this.printHeaderRow(h.lineNumber,!0),h.y+=S[0].height)):h.y=f.y+f.height||h.y),h.text[0]!==void 0&&(this.rect(h.x,h.y,h.width,h.height,r===!0?"FD":void 0),h.align==="right"?this.text(h.text,h.x+h.width-d,h.y+d,{align:"right",baseline:"top"}):h.align==="center"?this.text(h.text,h.x+h.width/2,h.y+d,{align:"center",baseline:"top",maxWidth:h.width-d-d}):this.text(h.text,h.x+d,h.y+d,{align:"left",baseline:"top",maxWidth:h.width-d-d})),this.internal.__cell__.lastCell=h,this};e.table=function(h,f,d,x,S){if(n.call(this),!d)throw new Error("No data for PDF table.");var p,w,_,k,y=[],R=[],P=[],O={},V={},J=[],K=[],X=(S=S||{}).autoSize||!1,T=S.printHeaders!==!1,Z=S.css&&S.css["font-size"]!==void 0?16*S.css["font-size"]:S.fontSize||12,L=S.margins||Object.assign({width:this.getPageWidth()},t),M=typeof S.padding=="number"?S.padding:3,W=S.headerBackgroundColor||"#c8c8c8",q=S.headerTextColor||"#000";if(o.call(this),this.internal.__cell__.printHeaders=T,this.internal.__cell__.margins=L,this.internal.__cell__.table_font_size=Z,this.internal.__cell__.padding=M,this.internal.__cell__.headerBackgroundColor=W,this.internal.__cell__.headerTextColor=q,this.setFontSize(Z),x==null)R=y=Object.keys(d[0]),P=y.map(function(){return"left"});else if(Array.isArray(x)&&Et(x[0])==="object")for(y=x.map(function(ke){return ke.name}),R=x.map(function(ke){return ke.prompt||ke.name||""}),P=x.map(function(ke){return ke.align||"left"}),p=0;p<x.length;p+=1)V[x[p].name]=.7499990551181103*x[p].width;else Array.isArray(x)&&typeof x[0]=="string"&&(R=y=x,P=y.map(function(){return"left"}));if(X||Array.isArray(x)&&typeof x[0]=="string")for(p=0;p<y.length;p+=1){for(O[k=y[p]]=d.map(function(ke){return ke[k]}),this.setFont(void 0,"bold"),J.push(this.getTextDimensions(R[p],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),w=O[k],this.setFont(void 0,"normal"),_=0;_<w.length;_+=1)J.push(this.getTextDimensions(w[_],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);V[k]=Math.max.apply(null,J)+M+M,J=[]}if(T){var ie={};for(p=0;p<y.length;p+=1)ie[y[p]]={},ie[y[p]].text=R[p],ie[y[p]].align=P[p];var se=l.call(this,ie,V);K=y.map(function(ke){return new a(h,f,V[ke],se,ie[ke].text,void 0,ie[ke].align)}),this.setTableHeaderRow(K),this.printHeaderRow(1,!1)}var ce=x.reduce(function(ke,ye){return ke[ye.name]=ye.align,ke},{});for(p=0;p<d.length;p+=1){"rowStart"in S&&S.rowStart instanceof Function&&S.rowStart({row:p,data:d[p]},this);var oe=l.call(this,d[p],V);for(_=0;_<y.length;_+=1){var pe=d[p][y[_]];"cellStart"in S&&S.cellStart instanceof Function&&S.cellStart({row:p,col:_,data:pe},this),c.call(this,new a(h,f,V[y[_]],oe,pe,p+2,ce[y[_]]))}}return this.internal.__cell__.table_x=h,this.internal.__cell__.table_y=f,this};var l=function(h,f){var d=this.internal.__cell__.padding,x=this.internal.__cell__.table_font_size,S=this.internal.scaleFactor;return Object.keys(h).map(function(p){var w=h[p];return this.splitTextToSize(w.hasOwnProperty("text")?w.text:w,f[p]-d-d)},this).map(function(p){return this.getLineHeightFactor()*p.length*x/S+d+d},this).reduce(function(p,w){return Math.max(p,w)},0)};e.setTableHeaderRow=function(h){n.call(this),this.internal.__cell__.tableHeaderRow=h},e.printHeaderRow=function(h,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var d;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var x=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(x[0],x[1],x[2],x[3],void 0,-1)}this.setFont(void 0,"bold");for(var S=[],p=0;p<this.internal.__cell__.tableHeaderRow.length;p+=1){d=this.internal.__cell__.tableHeaderRow[p].clone(),f&&(d.y=this.internal.__cell__.margins.top||0,S.push(d)),d.lineNumber=h;var w=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),c.call(this,d),this.setTextColor(w)}S.length>0&&this.setTableHeaderRow(S),this.setFont(void 0,"normal"),r=!1}}(Ge.API);var g0={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},v0=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],Cc=m0(v0),b0=[100,200,300,400,500,600,700,800,900],fv=m0(b0);function Kl(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(a){return g0[a=a||"normal"]?a:"normal"}(e.style),n=function(a){return a?typeof a=="number"?a>=100&&a<=900&&a%100==0?a:400:/^\d00$/.test(a)?parseInt(a):a==="bold"?700:400:400}(e.weight),o=function(a){return typeof Cc[a=a||"normal"]=="number"?a:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:o,src:e.src||[],ref:e.ref||{name:t,style:[o,r,n].join(" ")}}}function eh(e,t,r,n){var o;for(o=r;o>=0&&o<t.length;o+=n)if(e[t[o]])return e[t[o]];for(o=r;o>=0&&o<t.length;o-=n)if(e[t[o]])return e[t[o]]}var dv={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},th={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function rh(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function nh(e){return e.trimLeft()}function pv(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function mv(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var Ps,ih,oh,Vo,js,ah,sh,lh,ec=["times"];function ch(e,t,r,n,o){var a=4,c=hh;switch(o){case Ge.API.image_compression.FAST:a=1,c=uh;break;case Ge.API.image_compression.MEDIUM:a=6,c=fh;break;case Ge.API.image_compression.SLOW:a=9,c=dh}e=function(h,f,d,x){for(var S,p=h.length/f,w=new Uint8Array(h.length+p),_=[gv,uh,hh,fh,dh],k=0;k<p;k+=1){var y=k*f,R=h.subarray(y,y+f);if(x)w.set(x(R,d,S),y+k);else{for(var P=_.length,O=[],V=0;V<P;V+=1)O[V]=_[V](R,d,S);var J=bv(O.concat());w.set(O[J],y+k)}S=R}return w}(e,t,Math.ceil(r*n/8),c);var l=vc(e,{level:a});return Ge.API.__addimage__.arrayBufferToBinaryString(l)}function gv(e){var t=Array.apply([],e);return t.unshift(0),t}function uh(e,t){var r=e.length,n=[];n[0]=1;for(var o=0;o<r;o+=1){var a=e[o-t]||0;n[o+1]=e[o]-a+256&255}return n}function hh(e,t,r){var n=e.length,o=[];o[0]=2;for(var a=0;a<n;a+=1){var c=r&&r[a]||0;o[a+1]=e[a]-c+256&255}return o}function fh(e,t,r){var n=e.length,o=[];o[0]=3;for(var a=0;a<n;a+=1){var c=e[a-t]||0,l=r&&r[a]||0;o[a+1]=e[a]+256-(c+l>>>1)&255}return o}function dh(e,t,r){var n=e.length,o=[];o[0]=4;for(var a=0;a<n;a+=1){var c=vv(e[a-t]||0,r&&r[a]||0,r&&r[a-t]||0);o[a+1]=e[a]-c+256&255}return o}function vv(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),o=Math.abs(e-r),a=Math.abs(e+t-r-r);return n<=o&&n<=a?e:o<=a?t:r}function bv(e){var t=e.map(function(r){return r.reduce(function(n,o){return n+Math.abs(o)},0)});return t.indexOf(Math.min.apply(null,t))}function tc(e,t,r){var n=t*r,o=Math.floor(n/8),a=16-(n-8*o+r),c=(1<<r)-1;return x0(e,o)>>a&c}function ph(e,t,r,n){var o=r*n,a=Math.floor(o/8),c=16-(o-8*a+n),l=(1<<n)-1,h=(t&l)<<c;(function(f,d,x){if(d+1<f.byteLength)f.setUint16(d,x,!1);else{var S=x>>8&255;f.setUint8(d,S)}})(e,a,x0(e,a)&~(l<<c)&65535|h)}function x0(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function xv(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,o=e[t++],a=o>>7,c=1<<1+(7&o);e[t++],e[t++];var l=null,h=null;a&&(l=t,h=c,t+=3*c);var f=!0,d=[],x=0,S=null,p=0,w=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,w=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((L=e[t++])>=0))throw Error("Invalid block size");if(L===0)break;t+=L}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var _=e[t++];x=e[t++]|e[t++]<<8,S=e[t++],1&_||(S=null),p=_>>2&7,t++;break;case 254:for(;;){if(!((L=e[t++])>=0))throw Error("Invalid block size");if(L===0)break;t+=L}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var k=e[t++]|e[t++]<<8,y=e[t++]|e[t++]<<8,R=e[t++]|e[t++]<<8,P=e[t++]|e[t++]<<8,O=e[t++],V=O>>6&1,J=1<<1+(7&O),K=l,X=h,T=!1;O>>7&&(T=!0,K=t,X=J,t+=3*J);var Z=t;for(t++;;){var L;if(!((L=e[t++])>=0))throw Error("Invalid block size");if(L===0)break;t+=L}d.push({x:k,y,width:R,height:P,has_local_palette:T,palette_offset:K,palette_size:X,data_offset:Z,data_length:t-Z,transparent_index:S,interlaced:!!V,delay:x,disposal:p});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return d.length},this.loopCount=function(){return w},this.frameInfo=function(M){if(M<0||M>=d.length)throw new Error("Frame index out of range.");return d[M]},this.decodeAndBlitFrameBGRA=function(M,W){var q=this.frameInfo(M),ie=q.width*q.height,se=new Uint8Array(ie);mh(e,q.data_offset,se,ie);var ce=q.palette_offset,oe=q.transparent_index;oe===null&&(oe=256);var pe=q.width,ke=r-pe,ye=pe,I=4*(q.y*r+q.x),$=4*((q.y+q.height)*r+q.x),Y=I,ee=4*ke;q.interlaced===!0&&(ee+=4*r*7);for(var ne=8,ue=0,ge=se.length;ue<ge;++ue){var me=se[ue];if(ye===0&&(ye=pe,(Y+=ee)>=$&&(ee=4*ke+4*r*(ne-1),Y=I+(pe+ke)*(ne<<1),ne>>=1)),me===oe)Y+=4;else{var Se=e[ce+3*me],Ie=e[ce+3*me+1],je=e[ce+3*me+2];W[Y++]=je,W[Y++]=Ie,W[Y++]=Se,W[Y++]=255}--ye}},this.decodeAndBlitFrameRGBA=function(M,W){var q=this.frameInfo(M),ie=q.width*q.height,se=new Uint8Array(ie);mh(e,q.data_offset,se,ie);var ce=q.palette_offset,oe=q.transparent_index;oe===null&&(oe=256);var pe=q.width,ke=r-pe,ye=pe,I=4*(q.y*r+q.x),$=4*((q.y+q.height)*r+q.x),Y=I,ee=4*ke;q.interlaced===!0&&(ee+=4*r*7);for(var ne=8,ue=0,ge=se.length;ue<ge;++ue){var me=se[ue];if(ye===0&&(ye=pe,(Y+=ee)>=$&&(ee=4*ke+4*r*(ne-1),Y=I+(pe+ke)*(ne<<1),ne>>=1)),me===oe)Y+=4;else{var Se=e[ce+3*me],Ie=e[ce+3*me+1],je=e[ce+3*me+2];W[Y++]=Se,W[Y++]=Ie,W[Y++]=je,W[Y++]=255}--ye}}}function mh(e,t,r,n){for(var o=e[t++],a=1<<o,c=a+1,l=c+1,h=o+1,f=(1<<h)-1,d=0,x=0,S=0,p=e[t++],w=new Int32Array(4096),_=null;;){for(;d<16&&p!==0;)x|=e[t++]<<d,d+=8,p===1?p=e[t++]:--p;if(d<h)break;var k=x&f;if(x>>=h,d-=h,k!==a){if(k===c)break;for(var y=k<l?k:_,R=0,P=y;P>a;)P=w[P]>>8,++R;var O=P;if(S+R+(y!==k?1:0)>n)return void Ot.log("Warning, gif stream longer than expected.");r[S++]=O;var V=S+=R;for(y!==k&&(r[S++]=O),P=y;R--;)P=w[P],r[--V]=255&P,P>>=8;_!==null&&l<4096&&(w[l++]=_<<8|O,l>=f+1&&h<12&&(++h,f=f<<1|1)),_=k}else l=c+1,f=(1<<(h=o+1))-1,_=null}return S!==n&&Ot.log("Warning, gif stream shorter than expected."),r}/**
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
*/function rc(e){var t,r,n,o,a,c=Math.floor,l=new Array(64),h=new Array(64),f=new Array(64),d=new Array(64),x=new Array(65535),S=new Array(65535),p=new Array(64),w=new Array(64),_=[],k=0,y=7,R=new Array(64),P=new Array(64),O=new Array(64),V=new Array(256),J=new Array(2048),K=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],X=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],T=[0,1,2,3,4,5,6,7,8,9,10,11],Z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],L=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],M=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],W=[0,1,2,3,4,5,6,7,8,9,10,11],q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],ie=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function se(I,$){for(var Y=0,ee=0,ne=new Array,ue=1;ue<=16;ue++){for(var ge=1;ge<=I[ue];ge++)ne[$[ee]]=[],ne[$[ee]][0]=Y,ne[$[ee]][1]=ue,ee++,Y++;Y*=2}return ne}function ce(I){for(var $=I[0],Y=I[1]-1;Y>=0;)$&1<<Y&&(k|=1<<y),Y--,--y<0&&(k==255?(oe(255),oe(0)):oe(k),y=7,k=0)}function oe(I){_.push(I)}function pe(I){oe(I>>8&255),oe(255&I)}function ke(I,$,Y,ee,ne){for(var ue,ge=ne[0],me=ne[240],Se=function(Le,Ve){var Re,et,Ue,bt,tt,it,Ct,lt,He,Qe,qe=0;for(He=0;He<8;++He){Re=Le[qe],et=Le[qe+1],Ue=Le[qe+2],bt=Le[qe+3],tt=Le[qe+4],it=Le[qe+5],Ct=Le[qe+6];var Pt=Re+(lt=Le[qe+7]),xt=Re-lt,De=et+Ct,ct=et-Ct,wt=Ue+it,Ze=Ue-it,gt=bt+tt,ot=bt-tt,Ht=Pt+gt,Qt=Pt-gt,At=De+wt,Ke=De-wt;Le[qe]=Ht+At,Le[qe+4]=Ht-At;var St=.707106781*(Ke+Qt);Le[qe+2]=Qt+St,Le[qe+6]=Qt-St;var Tn=.382683433*((Ht=ot+Ze)-(Ke=ct+xt)),fr=.5411961*Ht+Tn,ln=1.306562965*Ke+Tn,Wr=.707106781*(At=Ze+ct),Je=xt+Wr,cn=xt-Wr;Le[qe+5]=cn+fr,Le[qe+3]=cn-fr,Le[qe+1]=Je+ln,Le[qe+7]=Je-ln,qe+=8}for(qe=0,He=0;He<8;++He){Re=Le[qe],et=Le[qe+8],Ue=Le[qe+16],bt=Le[qe+24],tt=Le[qe+32],it=Le[qe+40],Ct=Le[qe+48];var un=Re+(lt=Le[qe+56]),jr=Re-lt,zr=et+Ct,Dt=et-Ct,Kt=Ue+it,lr=Ue-it,Vn=bt+tt,hn=bt-tt,Cr=un+Vn,fn=un-Vn,Gr=zr+Kt,Yr=zr-Kt;Le[qe]=Cr+Gr,Le[qe+32]=Cr-Gr;var Br=.707106781*(Yr+fn);Le[qe+16]=fn+Br,Le[qe+48]=fn-Br;var Wn=.382683433*((Cr=hn+lr)-(Yr=Dt+jr)),Ar=.5411961*Cr+Wn,Gn=1.306562965*Yr+Wn,Pn=.707106781*(Gr=lr+Dt),Yn=jr+Pn,vi=jr-Pn;Le[qe+40]=vi+Ar,Le[qe+24]=vi-Ar,Le[qe+8]=Yn+Gn,Le[qe+56]=Yn-Gn,qe++}for(He=0;He<64;++He)Qe=Le[He]*Ve[He],p[He]=Qe>0?Qe+.5|0:Qe-.5|0;return p}(I,$),Ie=0;Ie<64;++Ie)w[K[Ie]]=Se[Ie];var je=w[0]-Y;Y=w[0],je==0?ce(ee[0]):(ce(ee[S[ue=32767+je]]),ce(x[ue]));for(var Pe=63;Pe>0&&w[Pe]==0;)Pe--;if(Pe==0)return ce(ge),Y;for(var ve,G=1;G<=Pe;){for(var mt=G;w[G]==0&&G<=Pe;)++G;var st=G-mt;if(st>=16){ve=st>>4;for(var Ye=1;Ye<=ve;++Ye)ce(me);st&=15}ue=32767+w[G],ce(ne[(st<<4)+S[ue]]),ce(x[ue]),G++}return Pe!=63&&ce(ge),Y}function ye(I){I=Math.min(Math.max(I,1),100),a!=I&&(function($){for(var Y=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],ee=0;ee<64;ee++){var ne=c((Y[ee]*$+50)/100);ne=Math.min(Math.max(ne,1),255),l[K[ee]]=ne}for(var ue=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],ge=0;ge<64;ge++){var me=c((ue[ge]*$+50)/100);me=Math.min(Math.max(me,1),255),h[K[ge]]=me}for(var Se=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Ie=0,je=0;je<8;je++)for(var Pe=0;Pe<8;Pe++)f[Ie]=1/(l[K[Ie]]*Se[je]*Se[Pe]*8),d[Ie]=1/(h[K[Ie]]*Se[je]*Se[Pe]*8),Ie++}(I<50?Math.floor(5e3/I):Math.floor(200-2*I)),a=I)}this.encode=function(I,$){$&&ye($),_=new Array,k=0,y=7,pe(65496),pe(65504),pe(16),oe(74),oe(70),oe(73),oe(70),oe(0),oe(1),oe(1),oe(0),pe(1),pe(1),oe(0),oe(0),function(){pe(65499),pe(132),oe(0);for(var et=0;et<64;et++)oe(l[et]);oe(1);for(var Ue=0;Ue<64;Ue++)oe(h[Ue])}(),function(et,Ue){pe(65472),pe(17),oe(8),pe(Ue),pe(et),oe(3),oe(1),oe(17),oe(0),oe(2),oe(17),oe(1),oe(3),oe(17),oe(1)}(I.width,I.height),function(){pe(65476),pe(418),oe(0);for(var et=0;et<16;et++)oe(X[et+1]);for(var Ue=0;Ue<=11;Ue++)oe(T[Ue]);oe(16);for(var bt=0;bt<16;bt++)oe(Z[bt+1]);for(var tt=0;tt<=161;tt++)oe(L[tt]);oe(1);for(var it=0;it<16;it++)oe(M[it+1]);for(var Ct=0;Ct<=11;Ct++)oe(W[Ct]);oe(17);for(var lt=0;lt<16;lt++)oe(q[lt+1]);for(var He=0;He<=161;He++)oe(ie[He])}(),pe(65498),pe(12),oe(3),oe(1),oe(0),oe(2),oe(17),oe(3),oe(17),oe(0),oe(63),oe(0);var Y=0,ee=0,ne=0;k=0,y=7,this.encode.displayName="_encode_";for(var ue,ge,me,Se,Ie,je,Pe,ve,G,mt=I.data,st=I.width,Ye=I.height,Le=4*st,Ve=0;Ve<Ye;){for(ue=0;ue<Le;){for(Ie=Le*Ve+ue,Pe=-1,ve=0,G=0;G<64;G++)je=Ie+(ve=G>>3)*Le+(Pe=4*(7&G)),Ve+ve>=Ye&&(je-=Le*(Ve+1+ve-Ye)),ue+Pe>=Le&&(je-=ue+Pe-Le+4),ge=mt[je++],me=mt[je++],Se=mt[je++],R[G]=(J[ge]+J[me+256|0]+J[Se+512|0]>>16)-128,P[G]=(J[ge+768|0]+J[me+1024|0]+J[Se+1280|0]>>16)-128,O[G]=(J[ge+1280|0]+J[me+1536|0]+J[Se+1792|0]>>16)-128;Y=ke(R,f,Y,t,n),ee=ke(P,d,ee,r,o),ne=ke(O,d,ne,r,o),ue+=32}Ve+=8}if(y>=0){var Re=[];Re[1]=y+1,Re[0]=(1<<y+1)-1,ce(Re)}return pe(65497),new Uint8Array(_)},e=e||50,function(){for(var I=String.fromCharCode,$=0;$<256;$++)V[$]=I($)}(),t=se(X,T),r=se(M,W),n=se(Z,L),o=se(q,ie),function(){for(var I=1,$=2,Y=1;Y<=15;Y++){for(var ee=I;ee<$;ee++)S[32767+ee]=Y,x[32767+ee]=[],x[32767+ee][1]=Y,x[32767+ee][0]=ee;for(var ne=-($-1);ne<=-I;ne++)S[32767+ne]=Y,x[32767+ne]=[],x[32767+ne][1]=Y,x[32767+ne][0]=$-1+ne;I<<=1,$<<=1}}(),function(){for(var I=0;I<256;I++)J[I]=19595*I,J[I+256|0]=38470*I,J[I+512|0]=7471*I+32768,J[I+768|0]=-11059*I,J[I+1024|0]=-21709*I,J[I+1280|0]=32768*I+8421375,J[I+1536|0]=-27439*I,J[I+1792|0]=-5329*I}(),ye(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function kn(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function gh(e){function t(T){if(!T)throw Error("assert :P")}function r(T,Z,L){for(var M=0;4>M;M++)if(T[Z+M]!=L.charCodeAt(M))return!0;return!1}function n(T,Z,L,M,W){for(var q=0;q<W;q++)T[Z+q]=L[M+q]}function o(T,Z,L,M){for(var W=0;W<M;W++)T[Z+W]=L}function a(T){return new Int32Array(T)}function c(T,Z){for(var L=[],M=0;M<T;M++)L.push(new Z);return L}function l(T,Z){var L=[];return function M(W,q,ie){for(var se=ie[q],ce=0;ce<se&&(W.push(ie.length>q+1?[]:new Z),!(ie.length<q+1));ce++)M(W[ce],q+1,ie)}(L,0,T),L}var h=function(){var T=this;function Z(s,u){for(var g=1<<u-1>>>0;s&g;)g>>>=1;return g?(s&g-1)+g:s}function L(s,u,g,b,A){t(!(b%g));do s[u+(b-=g)]=A;while(0<b)}function M(s,u,g,b,A){if(t(2328>=A),512>=A)var N=a(512);else if((N=a(A))==null)return 0;return function(E,j,D,B,te,fe){var U,re,le=j,be=1<<D,he=a(16),xe=a(16);for(t(te!=0),t(B!=null),t(E!=null),t(0<D),re=0;re<te;++re){if(15<B[re])return 0;++he[B[re]]}if(he[0]==te)return 0;for(xe[1]=0,U=1;15>U;++U){if(he[U]>1<<U)return 0;xe[U+1]=xe[U]+he[U]}for(re=0;re<te;++re)U=B[re],0<B[re]&&(fe[xe[U]++]=re);if(xe[15]==1)return(B=new W).g=0,B.value=fe[0],L(E,le,1,be,B),be;var _e,Ne=-1,Ce=be-1,We=0,Oe=1,dt=1,ze=1<<D;for(re=0,U=1,te=2;U<=D;++U,te<<=1){if(Oe+=dt<<=1,0>(dt-=he[U]))return 0;for(;0<he[U];--he[U])(B=new W).g=U,B.value=fe[re++],L(E,le+We,te,ze,B),We=Z(We,U)}for(U=D+1,te=2;15>=U;++U,te<<=1){if(Oe+=dt<<=1,0>(dt-=he[U]))return 0;for(;0<he[U];--he[U]){if(B=new W,(We&Ce)!=Ne){for(le+=ze,_e=1<<(Ne=U)-D;15>Ne&&!(0>=(_e-=he[Ne]));)++Ne,_e<<=1;be+=ze=1<<(_e=Ne-D),E[j+(Ne=We&Ce)].g=_e+D,E[j+Ne].value=le-j-Ne}B.g=U-D,B.value=fe[re++],L(E,le+(We>>D),te,ze,B),We=Z(We,U)}}return Oe!=2*xe[15]-1?0:be}(s,u,g,b,A,N)}function W(){this.value=this.g=0}function q(){this.value=this.g=0}function ie(){this.G=c(5,W),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=c(ho,q)}function se(s,u,g,b){t(s!=null),t(u!=null),t(2147483648>b),s.Ca=254,s.I=0,s.b=-8,s.Ka=0,s.oa=u,s.pa=g,s.Jd=u,s.Yc=g+b,s.Zc=4<=b?g+b-4+1:g,ge(s)}function ce(s,u){for(var g=0;0<u--;)g|=Se(s,128)<<u;return g}function oe(s,u){var g=ce(s,u);return me(s)?-g:g}function pe(s,u,g,b){var A,N=0;for(t(s!=null),t(u!=null),t(4294967288>b),s.Sb=b,s.Ra=0,s.u=0,s.h=0,4<b&&(b=4),A=0;A<b;++A)N+=u[g+A]<<8*A;s.Ra=N,s.bb=b,s.oa=u,s.pa=g}function ke(s){for(;8<=s.u&&s.bb<s.Sb;)s.Ra>>>=8,s.Ra+=s.oa[s.pa+s.bb]<<Ci-8>>>0,++s.bb,s.u-=8;ee(s)&&(s.h=1,s.u=0)}function ye(s,u){if(t(0<=u),!s.h&&u<=Qr){var g=Y(s)&Zr[u];return s.u+=u,ke(s),g}return s.h=1,s.u=0}function I(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function $(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function Y(s){return s.Ra>>>(s.u&Ci-1)>>>0}function ee(s){return t(s.bb<=s.Sb),s.h||s.bb==s.Sb&&s.u>Ci}function ne(s,u){s.u=u,s.h=ee(s)}function ue(s){s.u>=oi&&(t(s.u>=oi),ke(s))}function ge(s){t(s!=null&&s.oa!=null),s.pa<s.Zc?(s.I=(s.oa[s.pa++]|s.I<<8)>>>0,s.b+=8):(t(s!=null&&s.oa!=null),s.pa<s.Yc?(s.b+=8,s.I=s.oa[s.pa++]|s.I<<8):s.Ka?s.b=0:(s.I<<=8,s.b+=8,s.Ka=1))}function me(s){return ce(s,1)}function Se(s,u){var g=s.Ca;0>s.b&&ge(s);var b=s.b,A=g*u>>>8,N=(s.I>>>b>A)+0;for(N?(g-=A,s.I-=A+1<<b>>>0):g=A+1,b=g,A=0;256<=b;)A+=8,b>>=8;return b=7^A+Ai[b],s.b-=b,s.Ca=(g<<b)-1,N}function Ie(s,u,g){s[u+0]=g>>24&255,s[u+1]=g>>16&255,s[u+2]=g>>8&255,s[u+3]=255&g}function je(s,u){return s[u+0]|s[u+1]<<8}function Pe(s,u){return je(s,u)|s[u+2]<<16}function ve(s,u){return je(s,u)|je(s,u+2)<<16}function G(s,u){var g=1<<u;return t(s!=null),t(0<u),s.X=a(g),s.X==null?0:(s.Mb=32-u,s.Xa=u,1)}function mt(s,u){t(s!=null),t(u!=null),t(s.Xa==u.Xa),n(u.X,0,s.X,0,1<<u.Xa)}function st(){this.X=[],this.Xa=this.Mb=0}function Ye(s,u,g,b){t(g!=null),t(b!=null);var A=g[0],N=b[0];return A==0&&(A=(s*N+u/2)/u),N==0&&(N=(u*A+s/2)/s),0>=A||0>=N?0:(g[0]=A,b[0]=N,1)}function Le(s,u){return s+(1<<u)-1>>>u}function Ve(s,u){return((4278255360&s)+(4278255360&u)>>>0&4278255360)+((16711935&s)+(16711935&u)>>>0&16711935)>>>0}function Re(s,u){T[u]=function(g,b,A,N,E,j,D){var B;for(B=0;B<E;++B){var te=T[s](j[D+B-1],A,N+B);j[D+B]=Ve(g[b+B],te)}}}function et(){this.ud=this.hd=this.jd=0}function Ue(s,u){return((4278124286&(s^u))>>>1)+(s&u)>>>0}function bt(s){return 0<=s&&256>s?s:0>s?0:255<s?255:void 0}function tt(s,u){return bt(s+(s-u+.5>>1))}function it(s,u,g){return Math.abs(u-g)-Math.abs(s-g)}function Ct(s,u,g,b,A,N,E){for(b=N[E-1],g=0;g<A;++g)N[E+g]=b=Ve(s[u+g],b)}function lt(s,u,g,b,A){var N;for(N=0;N<g;++N){var E=s[u+N],j=E>>8&255,D=16711935&(D=(D=16711935&E)+((j<<16)+j));b[A+N]=(4278255360&E)+D>>>0}}function He(s,u){u.jd=255&s,u.hd=s>>8&255,u.ud=s>>16&255}function Qe(s,u,g,b,A,N){var E;for(E=0;E<b;++E){var j=u[g+E],D=j>>>8,B=j,te=255&(te=(te=j>>>16)+((s.jd<<24>>24)*(D<<24>>24)>>>5));B=255&(B=(B+=(s.hd<<24>>24)*(D<<24>>24)>>>5)+((s.ud<<24>>24)*(te<<24>>24)>>>5)),A[N+E]=(4278255360&j)+(te<<16)+B}}function qe(s,u,g,b,A){T[u]=function(N,E,j,D,B,te,fe,U,re){for(D=fe;D<U;++D)for(fe=0;fe<re;++fe)B[te++]=A(j[b(N[E++])])},T[s]=function(N,E,j,D,B,te,fe){var U=8>>N.b,re=N.Ea,le=N.K[0],be=N.w;if(8>U)for(N=(1<<N.b)-1,be=(1<<U)-1;E<j;++E){var he,xe=0;for(he=0;he<re;++he)he&N||(xe=b(D[B++])),te[fe++]=A(le[xe&be]),xe>>=U}else T["VP8LMapColor"+g](D,B,le,be,te,fe,E,j,re)}}function Pt(s,u,g,b,A){for(g=u+g;u<g;){var N=s[u++];b[A++]=N>>16&255,b[A++]=N>>8&255,b[A++]=255&N}}function xt(s,u,g,b,A){for(g=u+g;u<g;){var N=s[u++];b[A++]=N>>16&255,b[A++]=N>>8&255,b[A++]=255&N,b[A++]=N>>24&255}}function De(s,u,g,b,A){for(g=u+g;u<g;){var N=(E=s[u++])>>16&240|E>>12&15,E=240&E|E>>28&15;b[A++]=N,b[A++]=E}}function ct(s,u,g,b,A){for(g=u+g;u<g;){var N=(E=s[u++])>>16&248|E>>13&7,E=E>>5&224|E>>3&31;b[A++]=N,b[A++]=E}}function wt(s,u,g,b,A){for(g=u+g;u<g;){var N=s[u++];b[A++]=255&N,b[A++]=N>>8&255,b[A++]=N>>16&255}}function Ze(s,u,g,b,A,N){if(N==0)for(g=u+g;u<g;)Ie(b,((N=s[u++])[0]>>24|N[1]>>8&65280|N[2]<<8&16711680|N[3]<<24)>>>0),A+=32;else n(b,A,s,u,g)}function gt(s,u){T[u][0]=T[s+"0"],T[u][1]=T[s+"1"],T[u][2]=T[s+"2"],T[u][3]=T[s+"3"],T[u][4]=T[s+"4"],T[u][5]=T[s+"5"],T[u][6]=T[s+"6"],T[u][7]=T[s+"7"],T[u][8]=T[s+"8"],T[u][9]=T[s+"9"],T[u][10]=T[s+"10"],T[u][11]=T[s+"11"],T[u][12]=T[s+"12"],T[u][13]=T[s+"13"],T[u][14]=T[s+"0"],T[u][15]=T[s+"0"]}function ot(s){return s==vl||s==bl||s==rs||s==xl}function Ht(){this.eb=[],this.size=this.A=this.fb=0}function Qt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function At(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Ht,this.f.kb=new Qt,this.sd=null}function Ke(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function St(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Tn(s){return alert("todo:WebPSamplerProcessPlane"),s.T}function fr(s,u){var g=s.T,b=u.ba.f.RGBA,A=b.eb,N=b.fb+s.ka*b.A,E=bn[u.ba.S],j=s.y,D=s.O,B=s.f,te=s.N,fe=s.ea,U=s.W,re=u.cc,le=u.dc,be=u.Mc,he=u.Nc,xe=s.ka,_e=s.ka+s.T,Ne=s.U,Ce=Ne+1>>1;for(xe==0?E(j,D,null,null,B,te,fe,U,B,te,fe,U,A,N,null,null,Ne):(E(u.ec,u.fc,j,D,re,le,be,he,B,te,fe,U,A,N-b.A,A,N,Ne),++g);xe+2<_e;xe+=2)re=B,le=te,be=fe,he=U,te+=s.Rc,U+=s.Rc,N+=2*b.A,E(j,(D+=2*s.fa)-s.fa,j,D,re,le,be,he,B,te,fe,U,A,N-b.A,A,N,Ne);return D+=s.fa,s.j+_e<s.o?(n(u.ec,u.fc,j,D,Ne),n(u.cc,u.dc,B,te,Ce),n(u.Mc,u.Nc,fe,U,Ce),g--):1&_e||E(j,D,null,null,B,te,fe,U,B,te,fe,U,A,N+b.A,null,null,Ne),g}function ln(s,u,g){var b=s.F,A=[s.J];if(b!=null){var N=s.U,E=u.ba.S,j=E==ts||E==rs;u=u.ba.f.RGBA;var D=[0],B=s.ka;D[0]=s.T,s.Kb&&(B==0?--D[0]:(--B,A[0]-=s.width),s.j+s.ka+s.T==s.o&&(D[0]=s.o-s.j-B));var te=u.eb;B=u.fb+B*u.A,s=iu(b,A[0],s.width,N,D,te,B+(j?0:3),u.A),t(g==D),s&&ot(E)&&ba(te,B,j,N,D,u.A)}return 0}function Wr(s){var u=s.ma,g=u.ba.S,b=11>g,A=g==Ka||g==es||g==ts||g==gl||g==12||ot(g);if(u.memory=null,u.Ib=null,u.Jb=null,u.Nd=null,!ua(u.Oa,s,A?11:12))return 0;if(A&&ot(g)&&Ga(),s.da)alert("todo:use_scaling");else{if(b){if(u.Ib=Tn,s.Kb){if(g=s.U+1>>1,u.memory=a(s.U+2*g),u.memory==null)return 0;u.ec=u.memory,u.fc=0,u.cc=u.ec,u.dc=u.fc+s.U,u.Mc=u.cc,u.Nc=u.dc+g,u.Ib=fr,Ga()}}else alert("todo:EmitYUV");A&&(u.Jb=ln,b&&pn())}if(b&&!wu){for(s=0;256>s;++s)V0[s]=89858*(s-128)+is>>ns,Y0[s]=-22014*(s-128)+is,G0[s]=-45773*(s-128),W0[s]=113618*(s-128)+is>>ns;for(s=wa;s<Sl;++s)u=76283*(s-16)+is>>ns,X0[s-wa]=Yt(u,255),J0[s-wa]=Yt(u+8>>4,15);wu=1}return 1}function Je(s){var u=s.ma,g=s.U,b=s.T;return t(!(1&s.ka)),0>=g||0>=b?0:(g=u.Ib(s,u),u.Jb!=null&&u.Jb(s,u,g),u.Dc+=g,1)}function cn(s){s.ma.memory=null}function un(s,u,g,b){return ye(s,8)!=47?0:(u[0]=ye(s,14)+1,g[0]=ye(s,14)+1,b[0]=ye(s,1),ye(s,3)!=0?0:!s.h)}function jr(s,u){if(4>s)return s+1;var g=s-2>>1;return(2+(1&s)<<g)+ye(u,g)+1}function zr(s,u){return 120<u?u-120:1<=(g=((g=T0[u-1])>>4)*s+(8-(15&g)))?g:1;var g}function Dt(s,u,g){var b=Y(g),A=s[u+=255&b].g-8;return 0<A&&(ne(g,g.u+8),b=Y(g),u+=s[u].value,u+=b&(1<<A)-1),ne(g,g.u+s[u].g),s[u].value}function Kt(s,u,g){return g.g+=s.g,g.value+=s.value<<u>>>0,t(8>=g.g),s.g}function lr(s,u,g){var b=s.xc;return t((u=b==0?0:s.vc[s.md*(g>>b)+(u>>b)])<s.Wb),s.Ya[u]}function Vn(s,u,g,b){var A=s.ab,N=s.c*u,E=s.C;u=E+u;var j=g,D=b;for(b=s.Ta,g=s.Ua;0<A--;){var B=s.gc[A],te=E,fe=u,U=j,re=D,le=(D=b,j=g,B.Ea);switch(t(te<fe),t(fe<=B.nc),B.hc){case 2:er(U,re,(fe-te)*le,D,j);break;case 0:var be=te,he=fe,xe=D,_e=j,Ne=(ze=B).Ea;be==0&&(fa(U,re,null,null,1,xe,_e),Ct(U,re+1,0,0,Ne-1,xe,_e+1),re+=Ne,_e+=Ne,++be);for(var Ce=1<<ze.b,We=Ce-1,Oe=Le(Ne,ze.b),dt=ze.K,ze=ze.w+(be>>ze.b)*Oe;be<he;){var vt=dt,mr=ze,pt=1;for(Do(U,re,xe,_e-Ne,1,xe,_e);pt<Ne;){var Be=(pt&~We)+Ce;Be>Ne&&(Be=Ne),(0,pa[vt[mr++]>>8&15])(U,re+ +pt,xe,_e+pt-Ne,Be-pt,xe,_e+pt),pt=Be}re+=Ne,_e+=Ne,++be&We||(ze+=Oe)}fe!=B.nc&&n(D,j-le,D,j+(fe-te-1)*le,le);break;case 1:for(le=U,he=re,Ne=(U=B.Ea)-(_e=U&~(xe=(re=1<<B.b)-1)),be=Le(U,B.b),Ce=B.K,B=B.w+(te>>B.b)*be;te<fe;){for(We=Ce,Oe=B,dt=new et,ze=he+_e,vt=he+U;he<ze;)He(We[Oe++],dt),ma(dt,le,he,re,D,j),he+=re,j+=re;he<vt&&(He(We[Oe++],dt),ma(dt,le,he,Ne,D,j),he+=Ne,j+=Ne),++te&xe||(B+=be)}break;case 3:if(U==D&&re==j&&0<B.b){for(he=D,U=le=j+(fe-te)*le-(_e=(fe-te)*Le(B.Ea,B.b)),re=D,xe=j,be=[],_e=(Ne=_e)-1;0<=_e;--_e)be[_e]=re[xe+_e];for(_e=Ne-1;0<=_e;--_e)he[U+_e]=be[_e];Xa(B,te,fe,D,le,D,j)}else Xa(B,te,fe,U,re,D,j)}j=b,D=g}D!=g&&n(b,g,j,D,N)}function hn(s,u){var g=s.V,b=s.Ba+s.c*s.C,A=u-s.C;if(t(u<=s.l.o),t(16>=A),0<A){var N=s.l,E=s.Ta,j=s.Ua,D=N.width;if(Vn(s,A,g,b),A=j=[j],t((g=s.C)<(b=u)),t(N.v<N.va),b>N.o&&(b=N.o),g<N.j){var B=N.j-g;g=N.j,A[0]+=B*D}if(g>=b?g=0:(A[0]+=4*N.v,N.ka=g-N.j,N.U=N.va-N.v,N.T=b-g,g=1),g){if(j=j[0],11>(g=s.ca).S){var te=g.f.RGBA,fe=(b=g.S,A=N.U,N=N.T,B=te.eb,te.A),U=N;for(te=te.fb+s.Ma*te.A;0<U--;){var re=E,le=j,be=A,he=B,xe=te;switch(b){case Qa:ga(re,le,be,he,xe);break;case Ka:ki(re,le,be,he,xe);break;case vl:ki(re,le,be,he,xe),ba(he,xe,0,be,1,0);break;case hu:fo(re,le,be,he,xe);break;case es:Ze(re,le,be,he,xe,1);break;case bl:Ze(re,le,be,he,xe,1),ba(he,xe,0,be,1,0);break;case ts:Ze(re,le,be,he,xe,0);break;case rs:Ze(re,le,be,he,xe,0),ba(he,xe,1,be,1,0);break;case gl:Li(re,le,be,he,xe);break;case xl:Li(re,le,be,he,xe),nu(he,xe,be,1,0);break;case fu:Ni(re,le,be,he,xe);break;default:t(0)}j+=D,te+=fe}s.Ma+=N}else alert("todo:EmitRescaledRowsYUVA");t(s.Ma<=g.height)}}s.C=u,t(s.C<=s.i)}function Cr(s){var u;if(0<s.ua)return 0;for(u=0;u<s.Wb;++u){var g=s.Ya[u].G,b=s.Ya[u].H;if(0<g[1][b[1]+0].g||0<g[2][b[2]+0].g||0<g[3][b[3]+0].g)return 0}return 1}function fn(s,u,g,b,A,N){if(s.Z!=0){var E=s.qd,j=s.rd;for(t(Ti[s.Z]!=null);u<g;++u)Ti[s.Z](E,j,b,A,b,A,N),E=b,j=A,A+=N;s.qd=E,s.rd=j}}function Gr(s,u){var g=s.l.ma,b=g.Z==0||g.Z==1?s.l.j:s.C;if(b=s.C<b?b:s.C,t(u<=s.l.o),u>b){var A=s.l.width,N=g.ca,E=g.tb+A*b,j=s.V,D=s.Ba+s.c*b,B=s.gc;t(s.ab==1),t(B[0].hc==3),Mn(B[0],b,u,j,D,N,E),fn(g,b,u,N,E,A)}s.C=s.Ma=u}function Yr(s,u,g,b,A,N,E){var j=s.$/b,D=s.$%b,B=s.m,te=s.s,fe=g+s.$,U=fe;A=g+b*A;var re=g+b*N,le=280+te.ua,be=s.Pb?j:16777216,he=0<te.ua?te.Wa:null,xe=te.wc,_e=fe<re?lr(te,D,j):null;t(s.C<N),t(re<=A);var Ne=!1;e:for(;;){for(;Ne||fe<re;){var Ce=0;if(j>=be){var We=fe-g;t((be=s).Pb),be.wd=be.m,be.xd=We,0<be.s.ua&&mt(be.s.Wa,be.s.vb),be=j+j0}if(D&xe||(_e=lr(te,D,j)),t(_e!=null),_e.Qb&&(u[fe]=_e.qb,Ne=!0),!Ne)if(ue(B),_e.jc){Ce=B,We=u;var Oe=fe,dt=_e.pd[Y(Ce)&ho-1];t(_e.jc),256>dt.g?(ne(Ce,Ce.u+dt.g),We[Oe]=dt.value,Ce=0):(ne(Ce,Ce.u+dt.g-256),t(256<=dt.value),Ce=dt.value),Ce==0&&(Ne=!0)}else Ce=Dt(_e.G[0],_e.H[0],B);if(B.h)break;if(Ne||256>Ce){if(!Ne)if(_e.nd)u[fe]=(_e.qb|Ce<<8)>>>0;else{if(ue(B),Ne=Dt(_e.G[1],_e.H[1],B),ue(B),We=Dt(_e.G[2],_e.H[2],B),Oe=Dt(_e.G[3],_e.H[3],B),B.h)break;u[fe]=(Oe<<24|Ne<<16|Ce<<8|We)>>>0}if(Ne=!1,++fe,++D>=b&&(D=0,++j,E!=null&&j<=N&&!(j%16)&&E(s,j),he!=null))for(;U<fe;)Ce=u[U++],he.X[(506832829*Ce&4294967295)>>>he.Mb]=Ce}else if(280>Ce){if(Ce=jr(Ce-256,B),We=Dt(_e.G[4],_e.H[4],B),ue(B),We=zr(b,We=jr(We,B)),B.h)break;if(fe-g<We||A-fe<Ce)break e;for(Oe=0;Oe<Ce;++Oe)u[fe+Oe]=u[fe+Oe-We];for(fe+=Ce,D+=Ce;D>=b;)D-=b,++j,E!=null&&j<=N&&!(j%16)&&E(s,j);if(t(fe<=A),D&xe&&(_e=lr(te,D,j)),he!=null)for(;U<fe;)Ce=u[U++],he.X[(506832829*Ce&4294967295)>>>he.Mb]=Ce}else{if(!(Ce<le))break e;for(Ne=Ce-280,t(he!=null);U<fe;)Ce=u[U++],he.X[(506832829*Ce&4294967295)>>>he.Mb]=Ce;Ce=fe,t(!(Ne>>>(We=he).Xa)),u[Ce]=We.X[Ne],Ne=!0}Ne||t(B.h==ee(B))}if(s.Pb&&B.h&&fe<A)t(s.m.h),s.a=5,s.m=s.wd,s.$=s.xd,0<s.s.ua&&mt(s.s.vb,s.s.Wa);else{if(B.h)break e;E!=null&&E(s,j>N?N:j),s.a=0,s.$=fe-g}return 1}return s.a=3,0}function Br(s){t(s!=null),s.vc=null,s.yc=null,s.Ya=null;var u=s.Wa;u!=null&&(u.X=null),s.vb=null,t(s!=null)}function Wn(){var s=new $e;return s==null?null:(s.a=0,s.xb=mu,gt("Predictor","VP8LPredictors"),gt("Predictor","VP8LPredictors_C"),gt("PredictorAdd","VP8LPredictorsAdd"),gt("PredictorAdd","VP8LPredictorsAdd_C"),er=lt,ma=Qe,ga=Pt,ki=xt,Li=De,Ni=ct,fo=wt,T.VP8LMapColor32b=On,T.VP8LMapColor8b=da,s)}function Ar(s,u,g,b,A){var N=1,E=[s],j=[u],D=b.m,B=b.s,te=null,fe=0;e:for(;;){if(g)for(;N&&ye(D,1);){var U=E,re=j,le=b,be=1,he=le.m,xe=le.gc[le.ab],_e=ye(he,2);if(le.Oc&1<<_e)N=0;else{switch(le.Oc|=1<<_e,xe.hc=_e,xe.Ea=U[0],xe.nc=re[0],xe.K=[null],++le.ab,t(4>=le.ab),_e){case 0:case 1:xe.b=ye(he,3)+2,be=Ar(Le(xe.Ea,xe.b),Le(xe.nc,xe.b),0,le,xe.K),xe.K=xe.K[0];break;case 3:var Ne,Ce=ye(he,8)+1,We=16<Ce?0:4<Ce?1:2<Ce?2:3;if(U[0]=Le(xe.Ea,We),xe.b=We,Ne=be=Ar(Ce,1,0,le,xe.K)){var Oe,dt=Ce,ze=xe,vt=1<<(8>>ze.b),mr=a(vt);if(mr==null)Ne=0;else{var pt=ze.K[0],Be=ze.w;for(mr[0]=ze.K[0][0],Oe=1;Oe<1*dt;++Oe)mr[Oe]=Ve(pt[Be+Oe],mr[Oe-1]);for(;Oe<4*vt;++Oe)mr[Oe]=0;ze.K[0]=null,ze.K[0]=mr,Ne=1}}be=Ne;break;case 2:break;default:t(0)}N=be}}if(E=E[0],j=j[0],N&&ye(D,1)&&!(N=1<=(fe=ye(D,4))&&11>=fe)){b.a=3;break e}var Te;if(Te=N)t:{var rr,ft,yt,zt=b,wr=E,Mr=j,Xt=fe,Lr=g,Fr=zt.m,gr=zt.s,_t=[null],Nt=1,Jt=0,It=P0[Xt];r:for(;;){if(Lr&&ye(Fr,1)){var yr=ye(Fr,3)+2,Cn=Le(wr,yr),nr=Le(Mr,yr),qr=Cn*nr;if(!Ar(Cn,nr,0,zt,_t))break r;for(_t=_t[0],gr.xc=yr,rr=0;rr<qr;++rr){var Rt=_t[rr]>>8&65535;_t[rr]=Rt,Rt>=Nt&&(Nt=Rt+1)}}if(Fr.h)break r;for(ft=0;5>ft;++ft){var vr=du[ft];!ft&&0<Xt&&(vr+=1<<Xt),Jt<vr&&(Jt=vr)}var en=c(Nt*It,W),Dr=Nt,tn=c(Dr,ie);if(tn==null)var rn=null;else t(65536>=Dr),rn=tn;var $r=a(Jt);if(rn==null||$r==null||en==null){zt.a=1;break r}var nn=en;for(rr=yt=0;rr<Nt;++rr){var Ft=rn[rr],on=Ft.G,An=Ft.H,mo=0,li=1,Sr=0;for(ft=0;5>ft;++ft){vr=du[ft],on[ft]=nn,An[ft]=yt,!ft&&0<Xt&&(vr+=1<<Xt);i:{var as,_l=vr,ss=zt,ya=$r,K0=nn,ef=yt,Cl=0,Pi=ss.m,tf=ye(Pi,1);if(o(ya,0,0,_l),tf){var rf=ye(Pi,1)+1,nf=ye(Pi,1),_u=ye(Pi,nf==0?1:8);ya[_u]=1,rf==2&&(ya[_u=ye(Pi,8)]=1);var ls=1}else{var Cu=a(19),Au=ye(Pi,4)+4;if(19<Au){ss.a=3;var cs=0;break i}for(as=0;as<Au;++as)Cu[E0[as]]=ye(Pi,3);var Al=void 0,Sa=void 0,ku=ss,of=Cu,us=_l,Lu=ya,kl=0,ji=ku.m,Nu=8,Iu=c(128,W);n:for(;M(Iu,0,7,of,19);){if(ye(ji,1)){var af=2+2*ye(ji,3);if((Al=2+ye(ji,af))>us)break n}else Al=us;for(Sa=0;Sa<us&&Al--;){ue(ji);var Eu=Iu[0+(127&Y(ji))];ne(ji,ji.u+Eu.g);var Bo=Eu.value;if(16>Bo)Lu[Sa++]=Bo,Bo!=0&&(Nu=Bo);else{var sf=Bo==16,Tu=Bo-16,lf=N0[Tu],Pu=ye(ji,L0[Tu])+lf;if(Sa+Pu>us)break n;for(var cf=sf?Nu:0;0<Pu--;)Lu[Sa++]=cf}}kl=1;break n}kl||(ku.a=3),ls=kl}(ls=ls&&!Pi.h)&&(Cl=M(K0,ef,8,ya,_l)),ls&&Cl!=0?cs=Cl:(ss.a=3,cs=0)}if(cs==0)break r;if(li&&I0[ft]==1&&(li=nn[yt].g==0),mo+=nn[yt].g,yt+=cs,3>=ft){var _a,Ll=$r[0];for(_a=1;_a<vr;++_a)$r[_a]>Ll&&(Ll=$r[_a]);Sr+=Ll}}if(Ft.nd=li,Ft.Qb=0,li&&(Ft.qb=(on[3][An[3]+0].value<<24|on[1][An[1]+0].value<<16|on[2][An[2]+0].value)>>>0,mo==0&&256>on[0][An[0]+0].value&&(Ft.Qb=1,Ft.qb+=on[0][An[0]+0].value<<8)),Ft.jc=!Ft.Qb&&6>Sr,Ft.jc){var hs,ci=Ft;for(hs=0;hs<ho;++hs){var Ri=hs,Oi=ci.pd[Ri],fs=ci.G[0][ci.H[0]+Ri];256<=fs.value?(Oi.g=fs.g+256,Oi.value=fs.value):(Oi.g=0,Oi.value=0,Ri>>=Kt(fs,8,Oi),Ri>>=Kt(ci.G[1][ci.H[1]+Ri],16,Oi),Ri>>=Kt(ci.G[2][ci.H[2]+Ri],0,Oi),Kt(ci.G[3][ci.H[3]+Ri],24,Oi))}}}gr.vc=_t,gr.Wb=Nt,gr.Ya=rn,gr.yc=en,Te=1;break t}Te=0}if(!(N=Te)){b.a=3;break e}if(0<fe){if(B.ua=1<<fe,!G(B.Wa,fe)){b.a=1,N=0;break e}}else B.ua=0;var Nl=b,ju=E,uf=j,Il=Nl.s,El=Il.xc;if(Nl.c=ju,Nl.i=uf,Il.md=Le(ju,El),Il.wc=El==0?-1:(1<<El)-1,g){b.xb=B0;break e}if((te=a(E*j))==null){b.a=1,N=0;break e}N=(N=Yr(b,te,0,E,j,j,null))&&!D.h;break e}return N?(A!=null?A[0]=te:(t(te==null),t(g)),b.$=0,g||Br(B)):Br(B),N}function Gn(s,u){var g=s.c*s.i,b=g+u+16*u;return t(s.c<=u),s.V=a(b),s.V==null?(s.Ta=null,s.Ua=0,s.a=1,0):(s.Ta=s.V,s.Ua=s.Ba+g+u,1)}function Pn(s,u){var g=s.C,b=u-g,A=s.V,N=s.Ba+s.c*g;for(t(u<=s.l.o);0<b;){var E=16<b?16:b,j=s.l.ma,D=s.l.width,B=D*E,te=j.ca,fe=j.tb+D*g,U=s.Ta,re=s.Ua;Vn(s,E,A,N),ou(U,re,te,fe,B),fn(j,g,g+E,te,fe,D),b-=E,A+=E*s.c,g+=E}t(g==u),s.C=s.Ma=u}function Yn(){this.ub=this.yd=this.td=this.Rb=0}function vi(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function $i(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Vi(){this.Yb=function(){var s=[];return function u(g,b,A){for(var N=A[b],E=0;E<N&&(g.push(A.length>b+1?[]:0),!(A.length<b+1));E++)u(g[E],b+1,A)}(s,0,[3,11]),s}()}function Wi(){this.jb=a(3),this.Wc=l([4,8],Vi),this.Xc=l([4,17],Vi)}function Ao(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Rr(){this.ld=this.La=this.dd=this.tc=0}function Gi(){this.Na=this.la=0}function bi(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Yi(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function Xn(){this.uc=this.M=this.Nb=0,this.wa=Array(new Rr),this.Y=0,this.ya=Array(new Yi),this.aa=0,this.l=new Jn}function ko(){this.y=a(16),this.f=a(8),this.ea=a(8)}function xi(){this.cb=this.a=0,this.sc="",this.m=new I,this.Od=new Yn,this.Kc=new vi,this.ed=new Ao,this.Qa=new $i,this.Ic=this.$c=this.Aa=0,this.D=new Xn,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=c(8,I),this.ia=0,this.pb=c(4,bi),this.Pa=new Wi,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new ko),this.Hd=0,this.rb=Array(new Gi),this.sb=0,this.wa=Array(new Rr),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Yi),this.L=this.aa=0,this.gd=l([4,2],Rr),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Jn(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Zn(){var s=new xi;return s!=null&&(s.a=0,s.sc="OK",s.cb=0,s.Xb=0,xa||(xa=wn)),s}function $t(s,u,g){return s.a==0&&(s.a=u,s.sc=g,s.cb=0),0}function Lo(s,u,g){return 3<=g&&s[u+0]==157&&s[u+1]==1&&s[u+2]==42}function Xi(s,u){if(s==null)return 0;if(s.a=0,s.sc="OK",u==null)return $t(s,2,"null VP8Io passed to VP8GetHeaders()");var g=u.data,b=u.w,A=u.ha;if(4>A)return $t(s,7,"Truncated header.");var N=g[b+0]|g[b+1]<<8|g[b+2]<<16,E=s.Od;if(E.Rb=!(1&N),E.td=N>>1&7,E.yd=N>>4&1,E.ub=N>>5,3<E.td)return $t(s,3,"Incorrect keyframe parameters.");if(!E.yd)return $t(s,4,"Frame not displayable.");b+=3,A-=3;var j=s.Kc;if(E.Rb){if(7>A)return $t(s,7,"cannot parse picture header");if(!Lo(g,b,A))return $t(s,3,"Bad code word");j.c=16383&(g[b+4]<<8|g[b+3]),j.Td=g[b+4]>>6,j.i=16383&(g[b+6]<<8|g[b+5]),j.Ud=g[b+6]>>6,b+=7,A-=7,s.za=j.c+15>>4,s.Ub=j.i+15>>4,u.width=j.c,u.height=j.i,u.Da=0,u.j=0,u.v=0,u.va=u.width,u.o=u.height,u.da=0,u.ib=u.width,u.hb=u.height,u.U=u.width,u.T=u.height,o((N=s.Pa).jb,0,255,N.jb.length),t((N=s.Qa)!=null),N.Cb=0,N.Bb=0,N.Fb=1,o(N.Zb,0,0,N.Zb.length),o(N.Lb,0,0,N.Lb)}if(E.ub>A)return $t(s,7,"bad partition length");se(N=s.m,g,b,E.ub),b+=E.ub,A-=E.ub,E.Rb&&(j.Ld=me(N),j.Kd=me(N)),j=s.Qa;var D,B=s.Pa;if(t(N!=null),t(j!=null),j.Cb=me(N),j.Cb){if(j.Bb=me(N),me(N)){for(j.Fb=me(N),D=0;4>D;++D)j.Zb[D]=me(N)?oe(N,7):0;for(D=0;4>D;++D)j.Lb[D]=me(N)?oe(N,6):0}if(j.Bb)for(D=0;3>D;++D)B.jb[D]=me(N)?ce(N,8):255}else j.Bb=0;if(N.Ka)return $t(s,3,"cannot parse segment header");if((j=s.ed).zd=me(N),j.Tb=ce(N,6),j.wb=ce(N,3),j.Pc=me(N),j.Pc&&me(N)){for(B=0;4>B;++B)me(N)&&(j.vd[B]=oe(N,6));for(B=0;4>B;++B)me(N)&&(j.od[B]=oe(N,6))}if(s.L=j.Tb==0?0:j.zd?1:2,N.Ka)return $t(s,3,"cannot parse filter header");var te=A;if(A=D=b,b=D+te,j=te,s.Xb=(1<<ce(s.m,2))-1,te<3*(B=s.Xb))g=7;else{for(D+=3*B,j-=3*B,te=0;te<B;++te){var fe=g[A+0]|g[A+1]<<8|g[A+2]<<16;fe>j&&(fe=j),se(s.Jc[+te],g,D,fe),D+=fe,j-=fe,A+=3}se(s.Jc[+B],g,D,j),g=D<b?0:5}if(g!=0)return $t(s,g,"cannot parse partitions");for(g=ce(D=s.m,7),A=me(D)?oe(D,4):0,b=me(D)?oe(D,4):0,j=me(D)?oe(D,4):0,B=me(D)?oe(D,4):0,D=me(D)?oe(D,4):0,te=s.Qa,fe=0;4>fe;++fe){if(te.Cb){var U=te.Zb[fe];te.Fb||(U+=g)}else{if(0<fe){s.pb[fe]=s.pb[0];continue}U=g}var re=s.pb[fe];re.Sc[0]=wl[Yt(U+A,127)],re.Sc[1]=yl[Yt(U+0,127)],re.Eb[0]=2*wl[Yt(U+b,127)],re.Eb[1]=101581*yl[Yt(U+j,127)]>>16,8>re.Eb[1]&&(re.Eb[1]=8),re.Qc[0]=wl[Yt(U+B,117)],re.Qc[1]=yl[Yt(U+D,127)],re.lc=U+D}if(!E.Rb)return $t(s,4,"Not a key frame.");for(me(N),E=s.Pa,g=0;4>g;++g){for(A=0;8>A;++A)for(b=0;3>b;++b)for(j=0;11>j;++j)B=Se(N,D0[g][A][b][j])?ce(N,8):M0[g][A][b][j],E.Wc[g][A].Yb[b][j]=B;for(A=0;17>A;++A)E.Xc[g][A]=E.Wc[g][z0[A]]}return s.kc=me(N),s.kc&&(s.Bd=ce(N,8)),s.cb=1}function wn(s,u,g,b,A,N,E){var j=u[A].Yb[g];for(g=0;16>A;++A){if(!Se(s,j[g+0]))return A;for(;!Se(s,j[g+1]);)if(j=u[++A].Yb[0],g=0,A==16)return 16;var D=u[A+1].Yb;if(Se(s,j[g+2])){var B=s,te=0;if(Se(B,(U=j)[(fe=g)+3]))if(Se(B,U[fe+6])){for(j=0,fe=2*(te=Se(B,U[fe+8]))+(U=Se(B,U[fe+9+te])),te=0,U=R0[fe];U[j];++j)te+=te+Se(B,U[j]);te+=3+(8<<fe)}else Se(B,U[fe+7])?(te=7+2*Se(B,165),te+=Se(B,145)):te=5+Se(B,159);else te=Se(B,U[fe+4])?3+Se(B,U[fe+5]):2;j=D[2]}else te=1,j=D[1];D=E+O0[A],0>(B=s).b&&ge(B);var fe,U=B.b,re=(fe=B.Ca>>1)-(B.I>>U)>>31;--B.b,B.Ca+=re,B.Ca|=1,B.I-=(fe+1&re)<<U,N[D]=((te^re)-re)*b[(0<A)+0]}return 16}function Qn(s){var u=s.rb[s.sb-1];u.la=0,u.Na=0,o(s.zc,0,0,s.zc.length),s.ja=0}function Xr(s,u,g,b,A){A=s[u+g+32*b]+(A>>3),s[u+g+32*b]=-256&A?0>A?0:255:A}function de(s,u,g,b,A,N){Xr(s,u,0,g,b+A),Xr(s,u,1,g,b+N),Xr(s,u,2,g,b-N),Xr(s,u,3,g,b-A)}function Xe(s){return(20091*s>>16)+s}function Gt(s,u,g,b){var A,N=0,E=a(16);for(A=0;4>A;++A){var j=s[u+0]+s[u+8],D=s[u+0]-s[u+8],B=(35468*s[u+4]>>16)-Xe(s[u+12]),te=Xe(s[u+4])+(35468*s[u+12]>>16);E[N+0]=j+te,E[N+1]=D+B,E[N+2]=D-B,E[N+3]=j-te,N+=4,u++}for(A=N=0;4>A;++A)j=(s=E[N+0]+4)+E[N+8],D=s-E[N+8],B=(35468*E[N+4]>>16)-Xe(E[N+12]),Xr(g,b,0,0,j+(te=Xe(E[N+4])+(35468*E[N+12]>>16))),Xr(g,b,1,0,D+B),Xr(g,b,2,0,D-B),Xr(g,b,3,0,j-te),N++,b+=32}function yn(s,u,g,b){var A=s[u+0]+4,N=35468*s[u+4]>>16,E=Xe(s[u+4]),j=35468*s[u+1]>>16;de(g,b,0,A+E,s=Xe(s[u+1]),j),de(g,b,1,A+N,s,j),de(g,b,2,A-N,s,j),de(g,b,3,A-E,s,j)}function Ur(s,u,g,b,A){Gt(s,u,g,b),A&&Gt(s,u+16,g,b+4)}function Ji(s,u,g,b){po(s,u+0,g,b,1),po(s,u+32,g,b+128,1)}function Jr(s,u,g,b){var A;for(s=s[u+0]+4,A=0;4>A;++A)for(u=0;4>u;++u)Xr(g,b,u,A,s)}function No(s,u,g,b){s[u+0]&&Lt(s,u+0,g,b),s[u+16]&&Lt(s,u+16,g,b+4),s[u+32]&&Lt(s,u+32,g,b+128),s[u+48]&&Lt(s,u+48,g,b+128+4)}function Or(s,u,g,b){var A,N=a(16);for(A=0;4>A;++A){var E=s[u+0+A]+s[u+12+A],j=s[u+4+A]+s[u+8+A],D=s[u+4+A]-s[u+8+A],B=s[u+0+A]-s[u+12+A];N[0+A]=E+j,N[8+A]=E-j,N[4+A]=B+D,N[12+A]=B-D}for(A=0;4>A;++A)E=(s=N[0+4*A]+3)+N[3+4*A],j=N[1+4*A]+N[2+4*A],D=N[1+4*A]-N[2+4*A],B=s-N[3+4*A],g[b+0]=E+j>>3,g[b+16]=B+D>>3,g[b+32]=E-j>>3,g[b+48]=B-D>>3,b+=64}function dn(s,u,g){var b,A=u-32,N=Kr,E=255-s[A-1];for(b=0;b<g;++b){var j,D=N,B=E+s[u-1];for(j=0;j<g;++j)s[u+j]=D[B+s[A+j]];u+=32}}function Zi(s,u){dn(s,u,4)}function Io(s,u){dn(s,u,8)}function Eo(s,u){dn(s,u,16)}function ra(s,u){var g;for(g=0;16>g;++g)n(s,u+32*g,s,u-32,16)}function wi(s,u){var g;for(g=16;0<g;--g)o(s,u,s[u-1],16),u+=32}function jn(s,u,g){var b;for(b=0;16>b;++b)o(u,g+32*b,s,16)}function Sn(s,u){var g,b=16;for(g=0;16>g;++g)b+=s[u-1+32*g]+s[u+g-32];jn(b>>5,s,u)}function To(s,u){var g,b=8;for(g=0;16>g;++g)b+=s[u-1+32*g];jn(b>>4,s,u)}function Rn(s,u){var g,b=8;for(g=0;16>g;++g)b+=s[u+g-32];jn(b>>4,s,u)}function Qi(s,u){jn(128,s,u)}function rt(s,u,g){return s+2*u+g+2>>2}function Kn(s,u){var g,b=u-32;for(b=new Uint8Array([rt(s[b-1],s[b+0],s[b+1]),rt(s[b+0],s[b+1],s[b+2]),rt(s[b+1],s[b+2],s[b+3]),rt(s[b+2],s[b+3],s[b+4])]),g=0;4>g;++g)n(s,u+32*g,b,0,b.length)}function yi(s,u){var g=s[u-1],b=s[u-1+32],A=s[u-1+64],N=s[u-1+96];Ie(s,u+0,16843009*rt(s[u-1-32],g,b)),Ie(s,u+32,16843009*rt(g,b,A)),Ie(s,u+64,16843009*rt(b,A,N)),Ie(s,u+96,16843009*rt(A,N,N))}function ul(s,u){var g,b=4;for(g=0;4>g;++g)b+=s[u+g-32]+s[u-1+32*g];for(b>>=3,g=0;4>g;++g)o(s,u+32*g,b,4)}function hl(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],N=s[u-1-32],E=s[u+0-32],j=s[u+1-32],D=s[u+2-32],B=s[u+3-32];s[u+0+96]=rt(b,A,s[u-1+96]),s[u+1+96]=s[u+0+64]=rt(g,b,A),s[u+2+96]=s[u+1+64]=s[u+0+32]=rt(N,g,b),s[u+3+96]=s[u+2+64]=s[u+1+32]=s[u+0+0]=rt(E,N,g),s[u+3+64]=s[u+2+32]=s[u+1+0]=rt(j,E,N),s[u+3+32]=s[u+2+0]=rt(D,j,E),s[u+3+0]=rt(B,D,j)}function ei(s,u){var g=s[u+1-32],b=s[u+2-32],A=s[u+3-32],N=s[u+4-32],E=s[u+5-32],j=s[u+6-32],D=s[u+7-32];s[u+0+0]=rt(s[u+0-32],g,b),s[u+1+0]=s[u+0+32]=rt(g,b,A),s[u+2+0]=s[u+1+32]=s[u+0+64]=rt(b,A,N),s[u+3+0]=s[u+2+32]=s[u+1+64]=s[u+0+96]=rt(A,N,E),s[u+3+32]=s[u+2+64]=s[u+1+96]=rt(N,E,j),s[u+3+64]=s[u+2+96]=rt(E,j,D),s[u+3+96]=rt(j,D,D)}function ti(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],N=s[u-1-32],E=s[u+0-32],j=s[u+1-32],D=s[u+2-32],B=s[u+3-32];s[u+0+0]=s[u+1+64]=N+E+1>>1,s[u+1+0]=s[u+2+64]=E+j+1>>1,s[u+2+0]=s[u+3+64]=j+D+1>>1,s[u+3+0]=D+B+1>>1,s[u+0+96]=rt(A,b,g),s[u+0+64]=rt(b,g,N),s[u+0+32]=s[u+1+96]=rt(g,N,E),s[u+1+32]=s[u+2+96]=rt(N,E,j),s[u+2+32]=s[u+3+96]=rt(E,j,D),s[u+3+32]=rt(j,D,B)}function fl(s,u){var g=s[u+0-32],b=s[u+1-32],A=s[u+2-32],N=s[u+3-32],E=s[u+4-32],j=s[u+5-32],D=s[u+6-32],B=s[u+7-32];s[u+0+0]=g+b+1>>1,s[u+1+0]=s[u+0+64]=b+A+1>>1,s[u+2+0]=s[u+1+64]=A+N+1>>1,s[u+3+0]=s[u+2+64]=N+E+1>>1,s[u+0+32]=rt(g,b,A),s[u+1+32]=s[u+0+96]=rt(b,A,N),s[u+2+32]=s[u+1+96]=rt(A,N,E),s[u+3+32]=s[u+2+96]=rt(N,E,j),s[u+3+64]=rt(E,j,D),s[u+3+96]=rt(j,D,B)}function dl(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],N=s[u-1+96];s[u+0+0]=g+b+1>>1,s[u+2+0]=s[u+0+32]=b+A+1>>1,s[u+2+32]=s[u+0+64]=A+N+1>>1,s[u+1+0]=rt(g,b,A),s[u+3+0]=s[u+1+32]=rt(b,A,N),s[u+3+32]=s[u+1+64]=rt(A,N,N),s[u+3+64]=s[u+2+64]=s[u+0+96]=s[u+1+96]=s[u+2+96]=s[u+3+96]=N}function Po(s,u){var g=s[u-1+0],b=s[u-1+32],A=s[u-1+64],N=s[u-1+96],E=s[u-1-32],j=s[u+0-32],D=s[u+1-32],B=s[u+2-32];s[u+0+0]=s[u+2+32]=g+E+1>>1,s[u+0+32]=s[u+2+64]=b+g+1>>1,s[u+0+64]=s[u+2+96]=A+b+1>>1,s[u+0+96]=N+A+1>>1,s[u+3+0]=rt(j,D,B),s[u+2+0]=rt(E,j,D),s[u+1+0]=s[u+3+32]=rt(g,E,j),s[u+1+32]=s[u+3+64]=rt(b,g,E),s[u+1+64]=s[u+3+96]=rt(A,b,g),s[u+1+96]=rt(N,A,b)}function na(s,u){var g;for(g=0;8>g;++g)n(s,u+32*g,s,u-32,8)}function Ki(s,u){var g;for(g=0;8>g;++g)o(s,u,s[u-1],8),u+=32}function jo(s,u,g){var b;for(b=0;8>b;++b)o(u,g+32*b,s,8)}function Ro(s,u){var g,b=8;for(g=0;8>g;++g)b+=s[u+g-32]+s[u-1+32*g];jo(b>>4,s,u)}function pl(s,u){var g,b=4;for(g=0;8>g;++g)b+=s[u+g-32];jo(b>>3,s,u)}function ia(s,u){var g,b=4;for(g=0;8>g;++g)b+=s[u-1+32*g];jo(b>>3,s,u)}function oa(s,u){jo(128,s,u)}function eo(s,u,g){var b=s[u-g],A=s[u+0],N=3*(A-b)+ml[1020+s[u-2*g]-s[u+g]],E=Za[112+(N+4>>3)];s[u-g]=Kr[255+b+Za[112+(N+3>>3)]],s[u+0]=Kr[255+A-E]}function to(s,u,g,b){var A=s[u+0],N=s[u+g];return vn[255+s[u-2*g]-s[u-g]]>b||vn[255+N-A]>b}function aa(s,u,g,b){return 4*vn[255+s[u-g]-s[u+0]]+vn[255+s[u-2*g]-s[u+g]]<=b}function Oo(s,u,g,b,A){var N=s[u-3*g],E=s[u-2*g],j=s[u-g],D=s[u+0],B=s[u+g],te=s[u+2*g],fe=s[u+3*g];return 4*vn[255+j-D]+vn[255+E-B]>b?0:vn[255+s[u-4*g]-N]<=A&&vn[255+N-E]<=A&&vn[255+E-j]<=A&&vn[255+fe-te]<=A&&vn[255+te-B]<=A&&vn[255+B-D]<=A}function sa(s,u,g,b){var A=2*b+1;for(b=0;16>b;++b)aa(s,u+b,g,A)&&eo(s,u+b,g)}function ro(s,u,g,b){var A=2*b+1;for(b=0;16>b;++b)aa(s,u+b*g,1,A)&&eo(s,u+b*g,1)}function Ha(s,u,g,b){var A;for(A=3;0<A;--A)sa(s,u+=4*g,g,b)}function qa(s,u,g,b){var A;for(A=3;0<A;--A)ro(s,u+=4,g,b)}function ri(s,u,g,b,A,N,E,j){for(N=2*N+1;0<A--;){if(Oo(s,u,g,N,E))if(to(s,u,g,j))eo(s,u,g);else{var D=s,B=u,te=g,fe=D[B-2*te],U=D[B-te],re=D[B+0],le=D[B+te],be=D[B+2*te],he=27*(_e=ml[1020+3*(re-U)+ml[1020+fe-le]])+63>>7,xe=18*_e+63>>7,_e=9*_e+63>>7;D[B-3*te]=Kr[255+D[B-3*te]+_e],D[B-2*te]=Kr[255+fe+xe],D[B-te]=Kr[255+U+he],D[B+0]=Kr[255+re-he],D[B+te]=Kr[255+le-xe],D[B+2*te]=Kr[255+be-_e]}u+=b}}function ni(s,u,g,b,A,N,E,j){for(N=2*N+1;0<A--;){if(Oo(s,u,g,N,E))if(to(s,u,g,j))eo(s,u,g);else{var D=s,B=u,te=g,fe=D[B-te],U=D[B+0],re=D[B+te],le=Za[112+(4+(be=3*(U-fe))>>3)],be=Za[112+(be+3>>3)],he=le+1>>1;D[B-2*te]=Kr[255+D[B-2*te]+he],D[B-te]=Kr[255+fe+be],D[B+0]=Kr[255+U-le],D[B+te]=Kr[255+re-he]}u+=b}}function $a(s,u,g,b,A,N){ri(s,u,g,1,16,b,A,N)}function Va(s,u,g,b,A,N){ri(s,u,1,g,16,b,A,N)}function no(s,u,g,b,A,N){var E;for(E=3;0<E;--E)ni(s,u+=4*g,g,1,16,b,A,N)}function Wa(s,u,g,b,A,N){var E;for(E=3;0<E;--E)ni(s,u+=4,1,g,16,b,A,N)}function m(s,u,g,b,A,N,E,j){ri(s,u,A,1,8,N,E,j),ri(g,b,A,1,8,N,E,j)}function C(s,u,g,b,A,N,E,j){ri(s,u,1,A,8,N,E,j),ri(g,b,1,A,8,N,E,j)}function H(s,u,g,b,A,N,E,j){ni(s,u+4*A,A,1,8,N,E,j),ni(g,b+4*A,A,1,8,N,E,j)}function Q(s,u,g,b,A,N,E,j){ni(s,u+4,1,A,8,N,E,j),ni(g,b+4,1,A,8,N,E,j)}function ae(){this.ba=new At,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new St,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function we(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Ae(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Fe(){this.ua=0,this.Wa=new st,this.vb=new st,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new ie,this.yc=new W}function $e(){this.xb=this.a=0,this.l=new Jn,this.ca=new At,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new $,this.Pb=0,this.wd=new $,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Fe,this.ab=0,this.gc=c(4,Ae),this.Oc=0}function at(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Jn,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ut(s,u,g,b,A,N,E){for(s=s==null?0:s[u+0],u=0;u<E;++u)A[N+u]=s+g[b+u]&255,s=A[N+u]}function kt(s,u,g,b,A,N,E){var j;if(s==null)ut(null,null,g,b,A,N,E);else for(j=0;j<E;++j)A[N+j]=s[u+j]+g[b+j]&255}function Vt(s,u,g,b,A,N,E){if(s==null)ut(null,null,g,b,A,N,E);else{var j,D=s[u+0],B=D,te=D;for(j=0;j<E;++j)B=te+(D=s[u+j])-B,te=g[b+j]+(-256&B?0>B?0:255:B)&255,B=D,A[N+j]=te}}function cr(s,u,g,b){var A=u.width,N=u.o;if(t(s!=null&&u!=null),0>g||0>=b||g+b>N)return null;if(!s.Cc){if(s.ga==null){var E;if(s.ga=new at,(E=s.ga==null)||(E=u.width*u.o,t(s.Gb.length==0),s.Gb=a(E),s.Uc=0,s.Gb==null?E=0:(s.mb=s.Gb,s.nb=s.Uc,s.rc=null,E=1),E=!E),!E){E=s.ga;var j=s.Fa,D=s.P,B=s.qc,te=s.mb,fe=s.nb,U=D+1,re=B-1,le=E.l;if(t(j!=null&&te!=null&&u!=null),Ti[0]=null,Ti[1]=ut,Ti[2]=kt,Ti[3]=Vt,E.ca=te,E.tb=fe,E.c=u.width,E.i=u.height,t(0<E.c&&0<E.i),1>=B)u=0;else if(E.$a=3&j[D+0],E.Z=j[D+0]>>2&3,E.Lc=j[D+0]>>4&3,D=j[D+0]>>6&3,0>E.$a||1<E.$a||4<=E.Z||1<E.Lc||D)u=0;else if(le.put=Je,le.ac=Wr,le.bc=cn,le.ma=E,le.width=u.width,le.height=u.height,le.Da=u.Da,le.v=u.v,le.va=u.va,le.j=u.j,le.o=u.o,E.$a)e:{t(E.$a==1),u=Wn();t:for(;;){if(u==null){u=0;break e}if(t(E!=null),E.mc=u,u.c=E.c,u.i=E.i,u.l=E.l,u.l.ma=E,u.l.width=E.c,u.l.height=E.i,u.a=0,pe(u.m,j,U,re),!Ar(E.c,E.i,1,u,null)||(u.ab==1&&u.gc[0].hc==3&&Cr(u.s)?(E.ic=1,j=u.c*u.i,u.Ta=null,u.Ua=0,u.V=a(j),u.Ba=0,u.V==null?(u.a=1,u=0):u=1):(E.ic=0,u=Gn(u,E.c)),!u))break t;u=1;break e}E.mc=null,u=0}else u=re>=E.c*E.i;E=!u}if(E)return null;s.ga.Lc!=1?s.Ga=0:b=N-g}t(s.ga!=null),t(g+b<=N);e:{if(u=(j=s.ga).c,N=j.l.o,j.$a==0){if(U=s.rc,re=s.Vc,le=s.Fa,D=s.P+1+g*u,B=s.mb,te=s.nb+g*u,t(D<=s.P+s.qc),j.Z!=0)for(t(Ti[j.Z]!=null),E=0;E<b;++E)Ti[j.Z](U,re,le,D,B,te,u),U=B,re=te,te+=u,D+=u;else for(E=0;E<b;++E)n(B,te,le,D,u),U=B,re=te,te+=u,D+=u;s.rc=U,s.Vc=re}else{if(t(j.mc!=null),u=g+b,t((E=j.mc)!=null),t(u<=E.i),E.C>=u)u=1;else if(j.ic||pn(),j.ic){j=E.V,U=E.Ba,re=E.c;var be=E.i,he=(le=1,D=E.$/re,B=E.$%re,te=E.m,fe=E.s,E.$),xe=re*be,_e=re*u,Ne=fe.wc,Ce=he<_e?lr(fe,B,D):null;t(he<=xe),t(u<=be),t(Cr(fe));t:for(;;){for(;!te.h&&he<_e;){if(B&Ne||(Ce=lr(fe,B,D)),t(Ce!=null),ue(te),256>(be=Dt(Ce.G[0],Ce.H[0],te)))j[U+he]=be,++he,++B>=re&&(B=0,++D<=u&&!(D%16)&&Gr(E,D));else{if(!(280>be)){le=0;break t}be=jr(be-256,te);var We,Oe=Dt(Ce.G[4],Ce.H[4],te);if(ue(te),!(he>=(Oe=zr(re,Oe=jr(Oe,te)))&&xe-he>=be)){le=0;break t}for(We=0;We<be;++We)j[U+he+We]=j[U+he+We-Oe];for(he+=be,B+=be;B>=re;)B-=re,++D<=u&&!(D%16)&&Gr(E,D);he<_e&&B&Ne&&(Ce=lr(fe,B,D))}t(te.h==ee(te))}Gr(E,D>u?u:D);break t}!le||te.h&&he<xe?(le=0,E.a=te.h?5:3):E.$=he,u=le}else u=Yr(E,E.V,E.Ba,E.c,E.i,u,Pn);if(!u){b=0;break e}}g+b>=N&&(s.Cc=1),b=1}if(!b)return null;if(s.Cc&&((b=s.ga)!=null&&(b.mc=null),s.ga=null,0<s.Ga))return alert("todo:WebPDequantizeLevels"),null}return s.nb+g*A}function Mt(s,u,g,b,A,N){for(;0<A--;){var E,j=s,D=u+(g?1:0),B=s,te=u+(g?0:3);for(E=0;E<b;++E){var fe=B[te+4*E];fe!=255&&(fe*=32897,j[D+4*E+0]=j[D+4*E+0]*fe>>23,j[D+4*E+1]=j[D+4*E+1]*fe>>23,j[D+4*E+2]=j[D+4*E+2]*fe>>23)}u+=N}}function dr(s,u,g,b,A){for(;0<b--;){var N;for(N=0;N<g;++N){var E=s[u+2*N+0],j=15&(B=s[u+2*N+1]),D=4369*j,B=(240&B|B>>4)*D>>16;s[u+2*N+0]=(240&E|E>>4)*D>>16&240|(15&E|E<<4)*D>>16>>4&15,s[u+2*N+1]=240&B|j}u+=A}}function ur(s,u,g,b,A,N,E,j){var D,B,te=255;for(B=0;B<A;++B){for(D=0;D<b;++D){var fe=s[u+D];N[E+4*D]=fe,te&=fe}u+=g,E+=j}return te!=255}function xr(s,u,g,b,A){var N;for(N=0;N<A;++N)g[b+N]=s[u+N]>>8}function pn(){ba=Mt,nu=dr,iu=ur,ou=xr}function Hr(s,u,g){T[s]=function(b,A,N,E,j,D,B,te,fe,U,re,le,be,he,xe,_e,Ne){var Ce,We=Ne-1>>1,Oe=j[D+0]|B[te+0]<<16,dt=fe[U+0]|re[le+0]<<16;t(b!=null);var ze=3*Oe+dt+131074>>2;for(u(b[A+0],255&ze,ze>>16,be,he),N!=null&&(ze=3*dt+Oe+131074>>2,u(N[E+0],255&ze,ze>>16,xe,_e)),Ce=1;Ce<=We;++Ce){var vt=j[D+Ce]|B[te+Ce]<<16,mr=fe[U+Ce]|re[le+Ce]<<16,pt=Oe+vt+dt+mr+524296,Be=pt+2*(vt+dt)>>3;ze=Be+Oe>>1,Oe=(pt=pt+2*(Oe+mr)>>3)+vt>>1,u(b[A+2*Ce-1],255&ze,ze>>16,be,he+(2*Ce-1)*g),u(b[A+2*Ce-0],255&Oe,Oe>>16,be,he+(2*Ce-0)*g),N!=null&&(ze=pt+dt>>1,Oe=Be+mr>>1,u(N[E+2*Ce-1],255&ze,ze>>16,xe,_e+(2*Ce-1)*g),u(N[E+2*Ce+0],255&Oe,Oe>>16,xe,_e+(2*Ce+0)*g)),Oe=vt,dt=mr}1&Ne||(ze=3*Oe+dt+131074>>2,u(b[A+Ne-1],255&ze,ze>>16,be,he+(Ne-1)*g),N!=null&&(ze=3*dt+Oe+131074>>2,u(N[E+Ne-1],255&ze,ze>>16,xe,_e+(Ne-1)*g)))}}function Ga(){bn[Qa]=U0,bn[Ka]=gu,bn[hu]=H0,bn[es]=vu,bn[ts]=bu,bn[gl]=xu,bn[fu]=q0,bn[vl]=gu,bn[bl]=vu,bn[rs]=bu,bn[xl]=xu}function Mo(s){return s&-16384?0>s?0:255:s>>$0}function io(s,u){return Mo((19077*s>>8)+(26149*u>>8)-14234)}function Si(s,u,g){return Mo((19077*s>>8)-(6419*u>>8)-(13320*g>>8)+8708)}function oo(s,u){return Mo((19077*s>>8)+(33050*u>>8)-17685)}function ao(s,u,g,b,A){b[A+0]=io(s,g),b[A+1]=Si(s,u,g),b[A+2]=oo(s,u)}function so(s,u,g,b,A){b[A+0]=oo(s,u),b[A+1]=Si(s,u,g),b[A+2]=io(s,g)}function kr(s,u,g,b,A){var N=Si(s,u,g);u=N<<3&224|oo(s,u)>>3,b[A+0]=248&io(s,g)|N>>5,b[A+1]=u}function lo(s,u,g,b,A){var N=240&oo(s,u)|15;b[A+0]=240&io(s,g)|Si(s,u,g)>>4,b[A+1]=N}function co(s,u,g,b,A){b[A+0]=255,ao(s,u,g,b,A+1)}function la(s,u,g,b,A){so(s,u,g,b,A),b[A+3]=255}function ca(s,u,g,b,A){ao(s,u,g,b,A),b[A+3]=255}function Yt(s,u){return 0>s?0:s>u?u:s}function ii(s,u,g){T[s]=function(b,A,N,E,j,D,B,te,fe){for(var U=te+(-2&fe)*g;te!=U;)u(b[A+0],N[E+0],j[D+0],B,te),u(b[A+1],N[E+0],j[D+0],B,te+g),A+=2,++E,++D,te+=2*g;1&fe&&u(b[A+0],N[E+0],j[D+0],B,te)}}function Fo(s,u,g){return g==0?s==0?u==0?6:5:u==0?4:0:g}function Ya(s,u,g,b,A){switch(s>>>30){case 3:po(u,g,b,A,0);break;case 2:gn(u,g,b,A);break;case 1:Lt(u,g,b,A)}}function mn(s,u){var g,b,A=u.M,N=u.Nb,E=s.oc,j=s.pc+40,D=s.oc,B=s.pc+584,te=s.oc,fe=s.pc+600;for(g=0;16>g;++g)E[j+32*g-1]=129;for(g=0;8>g;++g)D[B+32*g-1]=129,te[fe+32*g-1]=129;for(0<A?E[j-1-32]=D[B-1-32]=te[fe-1-32]=129:(o(E,j-32-1,127,21),o(D,B-32-1,127,9),o(te,fe-32-1,127,9)),b=0;b<s.za;++b){var U=u.ya[u.aa+b];if(0<b){for(g=-1;16>g;++g)n(E,j+32*g-4,E,j+32*g+12,4);for(g=-1;8>g;++g)n(D,B+32*g-4,D,B+32*g+4,4),n(te,fe+32*g-4,te,fe+32*g+4,4)}var re=s.Gd,le=s.Hd+b,be=U.ad,he=U.Hc;if(0<A&&(n(E,j-32,re[le].y,0,16),n(D,B-32,re[le].f,0,8),n(te,fe-32,re[le].ea,0,8)),U.Za){var xe=E,_e=j-32+16;for(0<A&&(b>=s.za-1?o(xe,_e,re[le].y[15],4):n(xe,_e,re[le+1].y,0,4)),g=0;4>g;g++)xe[_e+128+g]=xe[_e+256+g]=xe[_e+384+g]=xe[_e+0+g];for(g=0;16>g;++g,he<<=2)xe=E,_e=j+yu[g],_n[U.Ob[g]](xe,_e),Ya(he,be,16*+g,xe,_e)}else if(xe=Fo(b,A,U.Ob[0]),Ei[xe](E,j),he!=0)for(g=0;16>g;++g,he<<=2)Ya(he,be,16*+g,E,j+yu[g]);for(g=U.Gc,xe=Fo(b,A,U.Dd),si[xe](D,B),si[xe](te,fe),he=be,xe=D,_e=B,255&(U=0|g)&&(170&U?Fn(he,256,xe,_e):jt(he,256,xe,_e)),U=te,he=fe,255&(g>>=8)&&(170&g?Fn(be,320,U,he):jt(be,320,U,he)),A<s.Ub-1&&(n(re[le].y,0,E,j+480,16),n(re[le].f,0,D,B+224,8),n(re[le].ea,0,te,fe+224,8)),g=8*N*s.B,re=s.sa,le=s.ta+16*b+16*N*s.R,be=s.qa,U=s.ra+8*b+g,he=s.Ha,xe=s.Ia+8*b+g,g=0;16>g;++g)n(re,le+g*s.R,E,j+32*g,16);for(g=0;8>g;++g)n(be,U+g*s.B,D,B+32*g,8),n(he,xe+g*s.B,te,fe+32*g,8)}}function uo(s,u,g,b,A,N,E,j,D){var B=[0],te=[0],fe=0,U=D!=null?D.kd:0,re=D??new we;if(s==null||12>g)return 7;re.data=s,re.w=u,re.ha=g,u=[u],g=[g],re.gb=[re.gb];e:{var le=u,be=g,he=re.gb;if(t(s!=null),t(be!=null),t(he!=null),he[0]=0,12<=be[0]&&!r(s,le[0],"RIFF")){if(r(s,le[0]+8,"WEBP")){he=3;break e}var xe=ve(s,le[0]+4);if(12>xe||4294967286<xe){he=3;break e}if(U&&xe>be[0]-8){he=7;break e}he[0]=xe,le[0]+=12,be[0]-=12}he=0}if(he!=0)return he;for(xe=0<re.gb[0],g=g[0];;){e:{var _e=s;be=u,he=g;var Ne=B,Ce=te,We=le=[0];if((ze=fe=[fe])[0]=0,8>he[0])he=7;else{if(!r(_e,be[0],"VP8X")){if(ve(_e,be[0]+4)!=10){he=3;break e}if(18>he[0]){he=7;break e}var Oe=ve(_e,be[0]+8),dt=1+Pe(_e,be[0]+12);if(2147483648<=dt*(_e=1+Pe(_e,be[0]+15))){he=3;break e}We!=null&&(We[0]=Oe),Ne!=null&&(Ne[0]=dt),Ce!=null&&(Ce[0]=_e),be[0]+=18,he[0]-=18,ze[0]=1}he=0}}if(fe=fe[0],le=le[0],he!=0)return he;if(be=!!(2&le),!xe&&fe)return 3;if(N!=null&&(N[0]=!!(16&le)),E!=null&&(E[0]=be),j!=null&&(j[0]=0),E=B[0],le=te[0],fe&&be&&D==null){he=0;break}if(4>g){he=7;break}if(xe&&fe||!xe&&!fe&&!r(s,u[0],"ALPH")){g=[g],re.na=[re.na],re.P=[re.P],re.Sa=[re.Sa];e:{Oe=s,he=u,xe=g;var ze=re.gb;Ne=re.na,Ce=re.P,We=re.Sa,dt=22,t(Oe!=null),t(xe!=null),_e=he[0];var vt=xe[0];for(t(Ne!=null),t(We!=null),Ne[0]=null,Ce[0]=null,We[0]=0;;){if(he[0]=_e,xe[0]=vt,8>vt){he=7;break e}var mr=ve(Oe,_e+4);if(4294967286<mr){he=3;break e}var pt=8+mr+1&-2;if(dt+=pt,0<ze&&dt>ze){he=3;break e}if(!r(Oe,_e,"VP8 ")||!r(Oe,_e,"VP8L")){he=0;break e}if(vt[0]<pt){he=7;break e}r(Oe,_e,"ALPH")||(Ne[0]=Oe,Ce[0]=_e+8,We[0]=mr),_e+=pt,vt-=pt}}if(g=g[0],re.na=re.na[0],re.P=re.P[0],re.Sa=re.Sa[0],he!=0)break}g=[g],re.Ja=[re.Ja],re.xa=[re.xa];e:if(ze=s,he=u,xe=g,Ne=re.gb[0],Ce=re.Ja,We=re.xa,Oe=he[0],_e=!r(ze,Oe,"VP8 "),dt=!r(ze,Oe,"VP8L"),t(ze!=null),t(xe!=null),t(Ce!=null),t(We!=null),8>xe[0])he=7;else{if(_e||dt){if(ze=ve(ze,Oe+4),12<=Ne&&ze>Ne-12){he=3;break e}if(U&&ze>xe[0]-8){he=7;break e}Ce[0]=ze,he[0]+=8,xe[0]-=8,We[0]=dt}else We[0]=5<=xe[0]&&ze[Oe+0]==47&&!(ze[Oe+4]>>5),Ce[0]=xe[0];he=0}if(g=g[0],re.Ja=re.Ja[0],re.xa=re.xa[0],u=u[0],he!=0)break;if(4294967286<re.Ja)return 3;if(j==null||be||(j[0]=re.xa?2:1),E=[E],le=[le],re.xa){if(5>g){he=7;break}j=E,U=le,be=N,s==null||5>g?s=0:5<=g&&s[u+0]==47&&!(s[u+4]>>5)?(xe=[0],ze=[0],Ne=[0],pe(Ce=new $,s,u,g),un(Ce,xe,ze,Ne)?(j!=null&&(j[0]=xe[0]),U!=null&&(U[0]=ze[0]),be!=null&&(be[0]=Ne[0]),s=1):s=0):s=0}else{if(10>g){he=7;break}j=le,s==null||10>g||!Lo(s,u+3,g-3)?s=0:(U=s[u+0]|s[u+1]<<8|s[u+2]<<16,be=16383&(s[u+7]<<8|s[u+6]),s=16383&(s[u+9]<<8|s[u+8]),1&U||3<(U>>1&7)||!(U>>4&1)||U>>5>=re.Ja||!be||!s?s=0:(E&&(E[0]=be),j&&(j[0]=s),s=1))}if(!s||(E=E[0],le=le[0],fe&&(B[0]!=E||te[0]!=le)))return 3;D!=null&&(D[0]=re,D.offset=u-D.w,t(4294967286>u-D.w),t(D.offset==D.ha-g));break}return he==0||he==7&&fe&&D==null?(N!=null&&(N[0]|=re.na!=null&&0<re.na.length),b!=null&&(b[0]=E),A!=null&&(A[0]=le),0):he}function ua(s,u,g){var b=u.width,A=u.height,N=0,E=0,j=b,D=A;if(u.Da=s!=null&&0<s.Da,u.Da&&(j=s.cd,D=s.bd,N=s.v,E=s.j,11>g||(N&=-2,E&=-2),0>N||0>E||0>=j||0>=D||N+j>b||E+D>A))return 0;if(u.v=N,u.j=E,u.va=N+j,u.o=E+D,u.U=j,u.T=D,u.da=s!=null&&0<s.da,u.da){if(!Ye(j,D,g=[s.ib],N=[s.hb]))return 0;u.ib=g[0],u.hb=N[0]}return u.ob=s!=null&&s.ob,u.Kb=s==null||!s.Sd,u.da&&(u.ob=u.ib<3*b/4&&u.hb<3*A/4,u.Kb=0),1}function ha(s){if(s==null)return 2;if(11>s.S){var u=s.f.RGBA;u.fb+=(s.height-1)*u.A,u.A=-u.A}else u=s.f.kb,s=s.height,u.O+=(s-1)*u.fa,u.fa=-u.fa,u.N+=(s-1>>1)*u.Ab,u.Ab=-u.Ab,u.W+=(s-1>>1)*u.Db,u.Db=-u.Db,u.F!=null&&(u.J+=(s-1)*u.lb,u.lb=-u.lb);return 0}function _i(s,u,g,b){if(b==null||0>=s||0>=u)return 2;if(g!=null){if(g.Da){var A=g.cd,N=g.bd,E=-2&g.v,j=-2&g.j;if(0>E||0>j||0>=A||0>=N||E+A>s||j+N>u)return 2;s=A,u=N}if(g.da){if(!Ye(s,u,A=[g.ib],N=[g.hb]))return 2;s=A[0],u=N[0]}}b.width=s,b.height=u;e:{var D=b.width,B=b.height;if(s=b.S,0>=D||0>=B||!(s>=Qa&&13>s))s=2;else{if(0>=b.Rd&&b.sd==null){E=N=A=u=0;var te=(j=D*Su[s])*B;if(11>s||(N=(B+1)/2*(u=(D+1)/2),s==12&&(E=(A=D)*B)),(B=a(te+2*N+E))==null){s=1;break e}b.sd=B,11>s?((D=b.f.RGBA).eb=B,D.fb=0,D.A=j,D.size=te):((D=b.f.kb).y=B,D.O=0,D.fa=j,D.Fd=te,D.f=B,D.N=0+te,D.Ab=u,D.Cd=N,D.ea=B,D.W=0+te+N,D.Db=u,D.Ed=N,s==12&&(D.F=B,D.J=0+te+2*N),D.Tc=E,D.lb=A)}if(u=1,A=b.S,N=b.width,E=b.height,A>=Qa&&13>A)if(11>A)s=b.f.RGBA,u&=(j=Math.abs(s.A))*(E-1)+N<=s.size,u&=j>=N*Su[A],u&=s.eb!=null;else{s=b.f.kb,j=(N+1)/2,te=(E+1)/2,D=Math.abs(s.fa),B=Math.abs(s.Ab);var fe=Math.abs(s.Db),U=Math.abs(s.lb),re=U*(E-1)+N;u&=D*(E-1)+N<=s.Fd,u&=B*(te-1)+j<=s.Cd,u=(u&=fe*(te-1)+j<=s.Ed)&D>=N&B>=j&fe>=j,u&=s.y!=null,u&=s.f!=null,u&=s.ea!=null,A==12&&(u&=U>=N,u&=re<=s.Tc,u&=s.F!=null)}else u=0;s=u?0:2}}return s!=0||g!=null&&g.fd&&(s=ha(b)),s}var ho=64,Zr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Qr=24,Ci=32,oi=8,Ai=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Re("Predictor0","PredictorAdd0"),T.Predictor0=function(){return 4278190080},T.Predictor1=function(s){return s},T.Predictor2=function(s,u,g){return u[g+0]},T.Predictor3=function(s,u,g){return u[g+1]},T.Predictor4=function(s,u,g){return u[g-1]},T.Predictor5=function(s,u,g){return Ue(Ue(s,u[g+1]),u[g+0])},T.Predictor6=function(s,u,g){return Ue(s,u[g-1])},T.Predictor7=function(s,u,g){return Ue(s,u[g+0])},T.Predictor8=function(s,u,g){return Ue(u[g-1],u[g+0])},T.Predictor9=function(s,u,g){return Ue(u[g+0],u[g+1])},T.Predictor10=function(s,u,g){return Ue(Ue(s,u[g-1]),Ue(u[g+0],u[g+1]))},T.Predictor11=function(s,u,g){var b=u[g+0];return 0>=it(b>>24&255,s>>24&255,(u=u[g-1])>>24&255)+it(b>>16&255,s>>16&255,u>>16&255)+it(b>>8&255,s>>8&255,u>>8&255)+it(255&b,255&s,255&u)?b:s},T.Predictor12=function(s,u,g){var b=u[g+0];return(bt((s>>24&255)+(b>>24&255)-((u=u[g-1])>>24&255))<<24|bt((s>>16&255)+(b>>16&255)-(u>>16&255))<<16|bt((s>>8&255)+(b>>8&255)-(u>>8&255))<<8|bt((255&s)+(255&b)-(255&u)))>>>0},T.Predictor13=function(s,u,g){var b=u[g-1];return(tt((s=Ue(s,u[g+0]))>>24&255,b>>24&255)<<24|tt(s>>16&255,b>>16&255)<<16|tt(s>>8&255,b>>8&255)<<8|tt(255&s,255&b))>>>0};var fa=T.PredictorAdd0;T.PredictorAdd1=Ct,Re("Predictor2","PredictorAdd2"),Re("Predictor3","PredictorAdd3"),Re("Predictor4","PredictorAdd4"),Re("Predictor5","PredictorAdd5"),Re("Predictor6","PredictorAdd6"),Re("Predictor7","PredictorAdd7"),Re("Predictor8","PredictorAdd8"),Re("Predictor9","PredictorAdd9"),Re("Predictor10","PredictorAdd10"),Re("Predictor11","PredictorAdd11"),Re("Predictor12","PredictorAdd12"),Re("Predictor13","PredictorAdd13");var Do=T.PredictorAdd2;qe("ColorIndexInverseTransform","MapARGB","32b",function(s){return s>>8&255},function(s){return s}),qe("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(s){return s},function(s){return s>>8&255});var er,Xa=T.ColorIndexInverseTransform,On=T.MapARGB,Mn=T.VP8LColorIndexInverseTransformAlpha,da=T.MapAlpha,pa=T.VP8LPredictorsAdd=[];pa.length=16,(T.VP8LPredictors=[]).length=16,(T.VP8LPredictorsAdd_C=[]).length=16,(T.VP8LPredictors_C=[]).length=16;var ma,ga,ki,Li,Ni,fo,Ii,po,gn,Fn,Lt,jt,tr,pr,ai,va,zo,Ja,Zc,Qc,Kc,eu,tu,ru,ba,nu,iu,ou,au=a(511),su=a(2041),lu=a(225),cu=a(767),uu=0,ml=su,Za=lu,Kr=cu,vn=au,Qa=0,Ka=1,hu=2,es=3,ts=4,gl=5,fu=6,vl=7,bl=8,rs=9,xl=10,L0=[2,3,7],N0=[3,3,11],du=[280,256,256,256,40],I0=[0,1,1,1,0],E0=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],T0=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],P0=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],j0=8,wl=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],yl=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],xa=null,R0=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],O0=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],pu=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],M0=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],F0=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],D0=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],z0=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],Ei=[],_n=[],si=[],B0=1,mu=2,Ti=[],bn=[];Hr("UpsampleRgbLinePair",ao,3),Hr("UpsampleBgrLinePair",so,3),Hr("UpsampleRgbaLinePair",ca,4),Hr("UpsampleBgraLinePair",la,4),Hr("UpsampleArgbLinePair",co,4),Hr("UpsampleRgba4444LinePair",lo,2),Hr("UpsampleRgb565LinePair",kr,2);var U0=T.UpsampleRgbLinePair,H0=T.UpsampleBgrLinePair,gu=T.UpsampleRgbaLinePair,vu=T.UpsampleBgraLinePair,bu=T.UpsampleArgbLinePair,xu=T.UpsampleRgba4444LinePair,q0=T.UpsampleRgb565LinePair,ns=16,is=1<<ns-1,wa=-227,Sl=482,$0=6,wu=0,V0=a(256),W0=a(256),G0=a(256),Y0=a(256),X0=a(Sl-wa),J0=a(Sl-wa);ii("YuvToRgbRow",ao,3),ii("YuvToBgrRow",so,3),ii("YuvToRgbaRow",ca,4),ii("YuvToBgraRow",la,4),ii("YuvToArgbRow",co,4),ii("YuvToRgba4444Row",lo,2),ii("YuvToRgb565Row",kr,2);var yu=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],os=[0,2,8],Z0=[8,7,6,4,4,2,2,2,1,1,1,1],Q0=1;this.WebPDecodeRGBA=function(s,u,g,b,A){var N=Ka,E=new ae,j=new At;E.ba=j,j.S=N,j.width=[j.width],j.height=[j.height];var D=j.width,B=j.height,te=new Ke;if(te==null||s==null)var fe=2;else t(te!=null),fe=uo(s,u,g,te.width,te.height,te.Pd,te.Qd,te.format,null);if(fe!=0?D=0:(D!=null&&(D[0]=te.width[0]),B!=null&&(B[0]=te.height[0]),D=1),D){j.width=j.width[0],j.height=j.height[0],b!=null&&(b[0]=j.width),A!=null&&(A[0]=j.height);e:{if(b=new Jn,(A=new we).data=s,A.w=u,A.ha=g,A.kd=1,u=[0],t(A!=null),((s=uo(A.data,A.w,A.ha,null,null,null,u,null,A))==0||s==7)&&u[0]&&(s=4),(u=s)==0){if(t(E!=null),b.data=A.data,b.w=A.w+A.offset,b.ha=A.ha-A.offset,b.put=Je,b.ac=Wr,b.bc=cn,b.ma=E,A.xa){if((s=Wn())==null){E=1;break e}if(function(U,re){var le=[0],be=[0],he=[0];t:for(;;){if(U==null)return 0;if(re==null)return U.a=2,0;if(U.l=re,U.a=0,pe(U.m,re.data,re.w,re.ha),!un(U.m,le,be,he)){U.a=3;break t}if(U.xb=mu,re.width=le[0],re.height=be[0],!Ar(le[0],be[0],1,U,null))break t;return 1}return t(U.a!=0),0}(s,b)){if(b=(u=_i(b.width,b.height,E.Oa,E.ba))==0){t:{b=s;r:for(;;){if(b==null){b=0;break t}if(t(b.s.yc!=null),t(b.s.Ya!=null),t(0<b.s.Wb),t((g=b.l)!=null),t((A=g.ma)!=null),b.xb!=0){if(b.ca=A.ba,b.tb=A.tb,t(b.ca!=null),!ua(A.Oa,g,es)){b.a=2;break r}if(!Gn(b,g.width)||g.da)break r;if((g.da||ot(b.ca.S))&&pn(),11>b.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),b.ca.f.kb.F!=null&&pn()),b.Pb&&0<b.s.ua&&b.s.vb.X==null&&!G(b.s.vb,b.s.Wa.Xa)){b.a=1;break r}b.xb=0}if(!Yr(b,b.V,b.Ba,b.c,b.i,g.o,hn))break r;A.Dc=b.Ma,b=1;break t}t(b.a!=0),b=0}b=!b}b&&(u=s.a)}else u=s.a}else{if((s=new Zn)==null){E=1;break e}if(s.Fa=A.na,s.P=A.P,s.qc=A.Sa,Xi(s,b)){if((u=_i(b.width,b.height,E.Oa,E.ba))==0){if(s.Aa=0,g=E.Oa,t((A=s)!=null),g!=null){if(0<(D=0>(D=g.Md)?0:100<D?255:255*D/100)){for(B=te=0;4>B;++B)12>(fe=A.pb[B]).lc&&(fe.ia=D*Z0[0>fe.lc?0:fe.lc]>>3),te|=fe.ia;te&&(alert("todo:VP8InitRandom"),A.ia=1)}A.Ga=g.Id,100<A.Ga?A.Ga=100:0>A.Ga&&(A.Ga=0)}(function(U,re){if(U==null)return 0;if(re==null)return $t(U,2,"NULL VP8Io parameter in VP8Decode().");if(!U.cb&&!Xi(U,re))return 0;if(t(U.cb),re.ac==null||re.ac(re)){re.ob&&(U.L=0);var le=os[U.L];if(U.L==2?(U.yb=0,U.zb=0):(U.yb=re.v-le>>4,U.zb=re.j-le>>4,0>U.yb&&(U.yb=0),0>U.zb&&(U.zb=0)),U.Va=re.o+15+le>>4,U.Hb=re.va+15+le>>4,U.Hb>U.za&&(U.Hb=U.za),U.Va>U.Ub&&(U.Va=U.Ub),0<U.L){var be=U.ed;for(le=0;4>le;++le){var he;if(U.Qa.Cb){var xe=U.Qa.Lb[le];U.Qa.Fb||(xe+=be.Tb)}else xe=be.Tb;for(he=0;1>=he;++he){var _e=U.gd[le][he],Ne=xe;if(be.Pc&&(Ne+=be.vd[0],he&&(Ne+=be.od[0])),0<(Ne=0>Ne?0:63<Ne?63:Ne)){var Ce=Ne;0<be.wb&&(Ce=4<be.wb?Ce>>2:Ce>>1)>9-be.wb&&(Ce=9-be.wb),1>Ce&&(Ce=1),_e.dd=Ce,_e.tc=2*Ne+Ce,_e.ld=40<=Ne?2:15<=Ne?1:0}else _e.tc=0;_e.La=he}}}le=0}else $t(U,6,"Frame setup failed"),le=U.a;if(le=le==0){if(le){U.$c=0,0<U.Aa||(U.Ic=Q0);t:{le=U.Ic,be=4*(Ce=U.za);var We=32*Ce,Oe=Ce+1,dt=0<U.L?Ce*(0<U.Aa?2:1):0,ze=(U.Aa==2?2:1)*Ce;if((_e=be+832+(he=3*(16*le+os[U.L])/2*We)+(xe=U.Fa!=null&&0<U.Fa.length?U.Kc.c*U.Kc.i:0))!=_e)le=0;else{if(_e>U.Vb){if(U.Vb=0,U.Ec=a(_e),U.Fc=0,U.Ec==null){le=$t(U,1,"no memory during frame initialization.");break t}U.Vb=_e}_e=U.Ec,Ne=U.Fc,U.Ac=_e,U.Bc=Ne,Ne+=be,U.Gd=c(We,ko),U.Hd=0,U.rb=c(Oe+1,Gi),U.sb=1,U.wa=dt?c(dt,Rr):null,U.Y=0,U.D.Nb=0,U.D.wa=U.wa,U.D.Y=U.Y,0<U.Aa&&(U.D.Y+=Ce),t(!0),U.oc=_e,U.pc=Ne,Ne+=832,U.ya=c(ze,Yi),U.aa=0,U.D.ya=U.ya,U.D.aa=U.aa,U.Aa==2&&(U.D.aa+=Ce),U.R=16*Ce,U.B=8*Ce,Ce=(We=os[U.L])*U.R,We=We/2*U.B,U.sa=_e,U.ta=Ne+Ce,U.qa=U.sa,U.ra=U.ta+16*le*U.R+We,U.Ha=U.qa,U.Ia=U.ra+8*le*U.B+We,U.$c=0,Ne+=he,U.mb=xe?_e:null,U.nb=xe?Ne:null,t(Ne+xe<=U.Fc+U.Vb),Qn(U),o(U.Ac,U.Bc,0,be),le=1}}if(le){if(re.ka=0,re.y=U.sa,re.O=U.ta,re.f=U.qa,re.N=U.ra,re.ea=U.Ha,re.Vd=U.Ia,re.fa=U.R,re.Rc=U.B,re.F=null,re.J=0,!uu){for(le=-255;255>=le;++le)au[255+le]=0>le?-le:le;for(le=-1020;1020>=le;++le)su[1020+le]=-128>le?-128:127<le?127:le;for(le=-112;112>=le;++le)lu[112+le]=-16>le?-16:15<le?15:le;for(le=-255;510>=le;++le)cu[255+le]=0>le?0:255<le?255:le;uu=1}Ii=Or,po=Ur,Fn=Ji,Lt=Jr,jt=No,gn=yn,tr=$a,pr=Va,ai=m,va=C,zo=no,Ja=Wa,Zc=H,Qc=Q,Kc=sa,eu=ro,tu=Ha,ru=qa,_n[0]=ul,_n[1]=Zi,_n[2]=Kn,_n[3]=yi,_n[4]=hl,_n[5]=ti,_n[6]=ei,_n[7]=fl,_n[8]=Po,_n[9]=dl,Ei[0]=Sn,Ei[1]=Eo,Ei[2]=ra,Ei[3]=wi,Ei[4]=To,Ei[5]=Rn,Ei[6]=Qi,si[0]=Ro,si[1]=Io,si[2]=na,si[3]=Ki,si[4]=ia,si[5]=pl,si[6]=oa,le=1}else le=0}le&&(le=function(vt,mr){for(vt.M=0;vt.M<vt.Va;++vt.M){var pt,Be=vt.Jc[vt.M&vt.Xb],Te=vt.m,rr=vt;for(pt=0;pt<rr.za;++pt){var ft=Te,yt=rr,zt=yt.Ac,wr=yt.Bc+4*pt,Mr=yt.zc,Xt=yt.ya[yt.aa+pt];if(yt.Qa.Bb?Xt.$b=Se(ft,yt.Pa.jb[0])?2+Se(ft,yt.Pa.jb[2]):Se(ft,yt.Pa.jb[1]):Xt.$b=0,yt.kc&&(Xt.Ad=Se(ft,yt.Bd)),Xt.Za=!Se(ft,145)+0,Xt.Za){var Lr=Xt.Ob,Fr=0;for(yt=0;4>yt;++yt){var gr,_t=Mr[0+yt];for(gr=0;4>gr;++gr){_t=F0[zt[wr+gr]][_t];for(var Nt=pu[Se(ft,_t[0])];0<Nt;)Nt=pu[2*Nt+Se(ft,_t[Nt])];_t=-Nt,zt[wr+gr]=_t}n(Lr,Fr,zt,wr,4),Fr+=4,Mr[0+yt]=_t}}else _t=Se(ft,156)?Se(ft,128)?1:3:Se(ft,163)?2:0,Xt.Ob[0]=_t,o(zt,wr,_t,4),o(Mr,0,_t,4);Xt.Dd=Se(ft,142)?Se(ft,114)?Se(ft,183)?1:3:2:0}if(rr.m.Ka)return $t(vt,7,"Premature end-of-partition0 encountered.");for(;vt.ja<vt.za;++vt.ja){if(rr=Be,ft=(Te=vt).rb[Te.sb-1],zt=Te.rb[Te.sb+Te.ja],pt=Te.ya[Te.aa+Te.ja],wr=Te.kc?pt.Ad:0)ft.la=zt.la=0,pt.Za||(ft.Na=zt.Na=0),pt.Hc=0,pt.Gc=0,pt.ia=0;else{var Jt,It;if(ft=zt,zt=rr,wr=Te.Pa.Xc,Mr=Te.ya[Te.aa+Te.ja],Xt=Te.pb[Mr.$b],yt=Mr.ad,Lr=0,Fr=Te.rb[Te.sb-1],_t=gr=0,o(yt,Lr,0,384),Mr.Za)var yr=0,Cn=wr[3];else{Nt=a(16);var nr=ft.Na+Fr.Na;if(nr=xa(zt,wr[1],nr,Xt.Eb,0,Nt,0),ft.Na=Fr.Na=(0<nr)+0,1<nr)Ii(Nt,0,yt,Lr);else{var qr=Nt[0]+3>>3;for(Nt=0;256>Nt;Nt+=16)yt[Lr+Nt]=qr}yr=1,Cn=wr[0]}var Rt=15&ft.la,vr=15&Fr.la;for(Nt=0;4>Nt;++Nt){var en=1&vr;for(qr=It=0;4>qr;++qr)Rt=Rt>>1|(en=(nr=xa(zt,Cn,nr=en+(1&Rt),Xt.Sc,yr,yt,Lr))>yr)<<7,It=It<<2|(3<nr?3:1<nr?2:yt[Lr+0]!=0),Lr+=16;Rt>>=4,vr=vr>>1|en<<7,gr=(gr<<8|It)>>>0}for(Cn=Rt,yr=vr>>4,Jt=0;4>Jt;Jt+=2){for(It=0,Rt=ft.la>>4+Jt,vr=Fr.la>>4+Jt,Nt=0;2>Nt;++Nt){for(en=1&vr,qr=0;2>qr;++qr)nr=en+(1&Rt),Rt=Rt>>1|(en=0<(nr=xa(zt,wr[2],nr,Xt.Qc,0,yt,Lr)))<<3,It=It<<2|(3<nr?3:1<nr?2:yt[Lr+0]!=0),Lr+=16;Rt>>=2,vr=vr>>1|en<<5}_t|=It<<4*Jt,Cn|=Rt<<4<<Jt,yr|=(240&vr)<<Jt}ft.la=Cn,Fr.la=yr,Mr.Hc=gr,Mr.Gc=_t,Mr.ia=43690&_t?0:Xt.ia,wr=!(gr|_t)}if(0<Te.L&&(Te.wa[Te.Y+Te.ja]=Te.gd[pt.$b][pt.Za],Te.wa[Te.Y+Te.ja].La|=!wr),rr.Ka)return $t(vt,7,"Premature end-of-file encountered.")}if(Qn(vt),Te=mr,rr=1,pt=(Be=vt).D,ft=0<Be.L&&Be.M>=Be.zb&&Be.M<=Be.Va,Be.Aa==0)t:{if(pt.M=Be.M,pt.uc=ft,mn(Be,pt),rr=1,pt=(It=Be.D).Nb,ft=(_t=os[Be.L])*Be.R,zt=_t/2*Be.B,Nt=16*pt*Be.R,qr=8*pt*Be.B,wr=Be.sa,Mr=Be.ta-ft+Nt,Xt=Be.qa,yt=Be.ra-zt+qr,Lr=Be.Ha,Fr=Be.Ia-zt+qr,vr=(Rt=It.M)==0,gr=Rt>=Be.Va-1,Be.Aa==2&&mn(Be,It),It.uc)for(en=(nr=Be).D.M,t(nr.D.uc),It=nr.yb;It<nr.Hb;++It){yr=It,Cn=en;var Dr=(tn=(Sr=nr).D).Nb;Jt=Sr.R;var tn=tn.wa[tn.Y+yr],rn=Sr.sa,$r=Sr.ta+16*Dr*Jt+16*yr,nn=tn.dd,Ft=tn.tc;if(Ft!=0)if(t(3<=Ft),Sr.L==1)0<yr&&eu(rn,$r,Jt,Ft+4),tn.La&&ru(rn,$r,Jt,Ft),0<Cn&&Kc(rn,$r,Jt,Ft+4),tn.La&&tu(rn,$r,Jt,Ft);else{var on=Sr.B,An=Sr.qa,mo=Sr.ra+8*Dr*on+8*yr,li=Sr.Ha,Sr=Sr.Ia+8*Dr*on+8*yr;Dr=tn.ld,0<yr&&(pr(rn,$r,Jt,Ft+4,nn,Dr),va(An,mo,li,Sr,on,Ft+4,nn,Dr)),tn.La&&(Ja(rn,$r,Jt,Ft,nn,Dr),Qc(An,mo,li,Sr,on,Ft,nn,Dr)),0<Cn&&(tr(rn,$r,Jt,Ft+4,nn,Dr),ai(An,mo,li,Sr,on,Ft+4,nn,Dr)),tn.La&&(zo(rn,$r,Jt,Ft,nn,Dr),Zc(An,mo,li,Sr,on,Ft,nn,Dr))}}if(Be.ia&&alert("todo:DitherRow"),Te.put!=null){if(It=16*Rt,Rt=16*(Rt+1),vr?(Te.y=Be.sa,Te.O=Be.ta+Nt,Te.f=Be.qa,Te.N=Be.ra+qr,Te.ea=Be.Ha,Te.W=Be.Ia+qr):(It-=_t,Te.y=wr,Te.O=Mr,Te.f=Xt,Te.N=yt,Te.ea=Lr,Te.W=Fr),gr||(Rt-=_t),Rt>Te.o&&(Rt=Te.o),Te.F=null,Te.J=null,Be.Fa!=null&&0<Be.Fa.length&&It<Rt&&(Te.J=cr(Be,Te,It,Rt-It),Te.F=Be.mb,Te.F==null&&Te.F.length==0)){rr=$t(Be,3,"Could not decode alpha data.");break t}It<Te.j&&(_t=Te.j-It,It=Te.j,t(!(1&_t)),Te.O+=Be.R*_t,Te.N+=Be.B*(_t>>1),Te.W+=Be.B*(_t>>1),Te.F!=null&&(Te.J+=Te.width*_t)),It<Rt&&(Te.O+=Te.v,Te.N+=Te.v>>1,Te.W+=Te.v>>1,Te.F!=null&&(Te.J+=Te.v),Te.ka=It-Te.j,Te.U=Te.va-Te.v,Te.T=Rt-It,rr=Te.put(Te))}pt+1!=Be.Ic||gr||(n(Be.sa,Be.ta-ft,wr,Mr+16*Be.R,ft),n(Be.qa,Be.ra-zt,Xt,yt+8*Be.B,zt),n(Be.Ha,Be.Ia-zt,Lr,Fr+8*Be.B,zt))}if(!rr)return $t(vt,6,"Output aborted.")}return 1}(U,re)),re.bc!=null&&re.bc(re),le&=1}return le?(U.cb=0,le):0})(s,b)||(u=s.a)}}else u=s.a}u==0&&E.Oa!=null&&E.Oa.fd&&(u=ha(E.ba))}E=u}N=E!=0?null:11>N?j.f.RGBA.eb:j.f.kb.y}else N=null;return N};var Su=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(T,Z){for(var L="",M=0;M<4;M++)L+=String.fromCharCode(T[Z++]);return L}function d(T,Z){return T[Z+0]|T[Z+1]<<8}function x(T,Z){return(T[Z+0]|T[Z+1]<<8|T[Z+2]<<16)>>>0}function S(T,Z){return(T[Z+0]|T[Z+1]<<8|T[Z+2]<<16|T[Z+3]<<24)>>>0}new h;var p=[0],w=[0],_=[],k=new h,y=e,R=function(T,Z){var L={},M=0,W=!1,q=0,ie=0;if(L.frames=[],!function(I,$){for(var Y=0;Y<4;Y++)if(I[$+Y]!="RIFF".charCodeAt(Y))return!0;return!1}(T,Z)){for(S(T,Z+=4),Z+=8;Z<T.length;){var se=f(T,Z),ce=S(T,Z+=4);Z+=4;var oe=ce+(1&ce);switch(se){case"VP8 ":case"VP8L":L.frames[M]===void 0&&(L.frames[M]={}),(ye=L.frames[M]).src_off=W?ie:Z-8,ye.src_size=q+ce+8,M++,W&&(W=!1,q=0,ie=0);break;case"VP8X":(ye=L.header={}).feature_flags=T[Z];var pe=Z+4;ye.canvas_width=1+x(T,pe),pe+=3,ye.canvas_height=1+x(T,pe),pe+=3;break;case"ALPH":W=!0,q=oe+8,ie=Z-8;break;case"ANIM":(ye=L.header).bgcolor=S(T,Z),pe=Z+4,ye.loop_count=d(T,pe),pe+=2;break;case"ANMF":var ke,ye;(ye=L.frames[M]={}).offset_x=2*x(T,Z),Z+=3,ye.offset_y=2*x(T,Z),Z+=3,ye.width=1+x(T,Z),Z+=3,ye.height=1+x(T,Z),Z+=3,ye.duration=x(T,Z),Z+=3,ke=T[Z++],ye.dispose=1&ke,ye.blend=ke>>1&1}se!="ANMF"&&(Z+=oe)}return L}}(y,0);R.response=y,R.rgbaoutput=!0,R.dataurl=!1;var P=R.header?R.header:null,O=R.frames?R.frames:null;if(P){P.loop_counter=P.loop_count,p=[P.canvas_height],w=[P.canvas_width];for(var V=0;V<O.length&&O[V].blend!=0;V++);}var J=O[0],K=k.WebPDecodeRGBA(y,J.src_off,J.src_size,w,p);J.rgba=K,J.imgwidth=w[0],J.imgheight=p[0];for(var X=0;X<w[0]*p[0]*4;X++)_[X]=K[X];return this.width=w,this.height=p,this.data=_,this}(function(e){var t,r,n,o,a,c,l,h,f,d=function(I){return I=I||{},this.isStrokeTransparent=I.isStrokeTransparent||!1,this.strokeOpacity=I.strokeOpacity||1,this.strokeStyle=I.strokeStyle||"#000000",this.fillStyle=I.fillStyle||"#000000",this.isFillTransparent=I.isFillTransparent||!1,this.fillOpacity=I.fillOpacity||1,this.font=I.font||"10px sans-serif",this.textBaseline=I.textBaseline||"alphabetic",this.textAlign=I.textAlign||"left",this.lineWidth=I.lineWidth||1,this.lineJoin=I.lineJoin||"miter",this.lineCap=I.lineCap||"butt",this.path=I.path||[],this.transform=I.transform!==void 0?I.transform.clone():new h,this.globalCompositeOperation=I.globalCompositeOperation||"normal",this.globalAlpha=I.globalAlpha||1,this.clip_path=I.clip_path||[],this.currentPoint=I.currentPoint||new c,this.miterLimit=I.miterLimit||10,this.lastPoint=I.lastPoint||new c,this.lineDashOffset=I.lineDashOffset||0,this.lineDash=I.lineDash||[],this.margin=I.margin||[0,0,0,0],this.prevPageLastElemOffset=I.prevPageLastElemOffset||0,this.ignoreClearRect=typeof I.ignoreClearRect!="boolean"||I.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new x(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,a=this.internal.getVerticalCoordinate,c=this.internal.Point,l=this.internal.Rectangle,h=this.internal.Matrix,f=new d}]);var x=function(I){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var $=I;Object.defineProperty(this,"pdf",{get:function(){return $}});var Y=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return Y},set:function(ve){Y=!!ve}});var ee=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return ee},set:function(ve){ee=!!ve}});var ne=0;Object.defineProperty(this,"posX",{get:function(){return ne},set:function(ve){isNaN(ve)||(ne=ve)}});var ue=0;Object.defineProperty(this,"posY",{get:function(){return ue},set:function(ve){isNaN(ve)||(ue=ve)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(ve){var G;typeof ve=="number"?G=[ve,ve,ve,ve]:((G=new Array(4))[0]=ve[0],G[1]=ve.length>=2?ve[1]:G[0],G[2]=ve.length>=3?ve[2]:G[0],G[3]=ve.length>=4?ve[3]:G[1]),f.margin=G}});var ge=!1;Object.defineProperty(this,"autoPaging",{get:function(){return ge},set:function(ve){ge=ve}});var me=0;Object.defineProperty(this,"lastBreak",{get:function(){return me},set:function(ve){me=ve}});var Se=[];Object.defineProperty(this,"pageBreaks",{get:function(){return Se},set:function(ve){Se=ve}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(ve){ve instanceof d&&(f=ve)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(ve){f.path=ve}});var Ie=[];Object.defineProperty(this,"ctxStack",{get:function(){return Ie},set:function(ve){Ie=ve}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(ve){var G;G=S(ve),this.ctx.fillStyle=G.style,this.ctx.isFillTransparent=G.a===0,this.ctx.fillOpacity=G.a,this.pdf.setFillColor(G.r,G.g,G.b,{a:G.a}),this.pdf.setTextColor(G.r,G.g,G.b,{a:G.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(ve){var G=S(ve);this.ctx.strokeStyle=G.style,this.ctx.isStrokeTransparent=G.a===0,this.ctx.strokeOpacity=G.a,G.a===0?this.pdf.setDrawColor(255,255,255):(G.a,this.pdf.setDrawColor(G.r,G.g,G.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(ve){["butt","round","square"].indexOf(ve)!==-1&&(this.ctx.lineCap=ve,this.pdf.setLineCap(ve))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(ve){isNaN(ve)||(this.ctx.lineWidth=ve,this.pdf.setLineWidth(ve))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(ve){["bevel","round","miter"].indexOf(ve)!==-1&&(this.ctx.lineJoin=ve,this.pdf.setLineJoin(ve))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(ve){isNaN(ve)||(this.ctx.miterLimit=ve,this.pdf.setMiterLimit(ve))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(ve){this.ctx.textBaseline=ve}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(ve){["right","end","center","left","start"].indexOf(ve)!==-1&&(this.ctx.textAlign=ve)}});var je=null,Pe=null;Object.defineProperty(this,"fontFaces",{get:function(){return Pe},set:function(ve){je=null,Pe=ve}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(ve){var G;if(this.ctx.font=ve,(G=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ve))!==null){var mt=G[1];G[2];var st=G[3],Ye=G[4];G[5];var Le=G[6],Ve=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ye)[2];Ye=Math.floor(Ve==="px"?parseFloat(Ye)*this.pdf.internal.scaleFactor:Ve==="em"?parseFloat(Ye)*this.pdf.getFontSize():parseFloat(Ye)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Ye);var Re=function(Qe){var qe,Pt,xt=[],De=Qe.trim();if(De==="")return ec;if(De in th)return[th[De]];for(;De!=="";){switch(Pt=null,qe=(De=nh(De)).charAt(0)){case'"':case"'":Pt=pv(De.substring(1),qe);break;default:Pt=mv(De)}if(Pt===null||(xt.push(Pt[0]),(De=nh(Pt[1]))!==""&&De.charAt(0)!==","))return ec;De=De.replace(/^,/,"")}return xt}(Le);if(this.fontFaces){var et=function(Qe,qe){if(je===null){var Pt=function(xt){var De=[];return Object.keys(xt).forEach(function(ct){xt[ct].forEach(function(wt){var Ze=null;switch(wt){case"bold":Ze={family:ct,weight:"bold"};break;case"italic":Ze={family:ct,style:"italic"};break;case"bolditalic":Ze={family:ct,weight:"bold",style:"italic"};break;case"":case"normal":Ze={family:ct}}Ze!==null&&(Ze.ref={name:ct,style:wt},De.push(Ze))})}),De}(Qe.getFontList());je=function(xt){for(var De={},ct=0;ct<xt.length;++ct){var wt=Kl(xt[ct]),Ze=wt.family,gt=wt.stretch,ot=wt.style,Ht=wt.weight;De[Ze]=De[Ze]||{},De[Ze][gt]=De[Ze][gt]||{},De[Ze][gt][ot]=De[Ze][gt][ot]||{},De[Ze][gt][ot][Ht]=wt}return De}(Pt.concat(qe))}return je}(this.pdf,this.fontFaces),Ue=Re.map(function(Qe){return{family:Qe,stretch:"normal",weight:st,style:mt}}),bt=function(Qe,qe,Pt){for(var xt=(Pt=Pt||{}).defaultFontFamily||"times",De=Object.assign({},dv,Pt.genericFontFamilies||{}),ct=null,wt=null,Ze=0;Ze<qe.length;++Ze)if(De[(ct=Kl(qe[Ze])).family]&&(ct.family=De[ct.family]),Qe.hasOwnProperty(ct.family)){wt=Qe[ct.family];break}if(!(wt=wt||Qe[xt]))throw new Error("Could not find a font-family for the rule '"+rh(ct)+"' and default family '"+xt+"'.");if(wt=function(gt,ot){if(ot[gt])return ot[gt];var Ht=Cc[gt],Qt=Ht<=Cc.normal?-1:1,At=eh(ot,v0,Ht,Qt);if(!At)throw new Error("Could not find a matching font-stretch value for "+gt);return At}(ct.stretch,wt),wt=function(gt,ot){if(ot[gt])return ot[gt];for(var Ht=g0[gt],Qt=0;Qt<Ht.length;++Qt)if(ot[Ht[Qt]])return ot[Ht[Qt]];throw new Error("Could not find a matching font-style for "+gt)}(ct.style,wt),!(wt=function(gt,ot){if(ot[gt])return ot[gt];if(gt===400&&ot[500])return ot[500];if(gt===500&&ot[400])return ot[400];var Ht=fv[gt],Qt=eh(ot,b0,Ht,gt<400?-1:1);if(!Qt)throw new Error("Could not find a matching font-weight for value "+gt);return Qt}(ct.weight,wt)))throw new Error("Failed to resolve a font for the rule '"+rh(ct)+"'.");return wt}(et,Ue);this.pdf.setFont(bt.ref.name,bt.ref.style)}else{var tt="";(st==="bold"||parseInt(st,10)>=700||mt==="bold")&&(tt="bold"),mt==="italic"&&(tt+="italic"),tt.length===0&&(tt="normal");for(var it="",Ct={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},lt=0;lt<Re.length;lt++){if(this.pdf.internal.getFont(Re[lt],tt,{noFallback:!0,disableWarning:!0})!==void 0){it=Re[lt];break}if(tt==="bolditalic"&&this.pdf.internal.getFont(Re[lt],"bold",{noFallback:!0,disableWarning:!0})!==void 0)it=Re[lt],tt="bold";else if(this.pdf.internal.getFont(Re[lt],"normal",{noFallback:!0,disableWarning:!0})!==void 0){it=Re[lt],tt="normal";break}}if(it===""){for(var He=0;He<Re.length;He++)if(Ct[Re[He]]){it=Ct[Re[He]];break}}it=it===""?"Times":it,this.pdf.setFont(it,tt)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(ve){this.ctx.globalCompositeOperation=ve}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(ve){this.ctx.globalAlpha=ve}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(ve){this.ctx.lineDashOffset=ve,ye.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(ve){this.ctx.lineDash=ve,ye.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(ve){this.ctx.ignoreClearRect=!!ve}})};x.prototype.setLineDash=function(I){this.lineDash=I},x.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},x.prototype.fill=function(){O.call(this,"fill",!1)},x.prototype.stroke=function(){O.call(this,"stroke",!1)},x.prototype.beginPath=function(){this.path=[{type:"begin"}]},x.prototype.moveTo=function(I,$){if(isNaN(I)||isNaN($))throw Ot.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var Y=this.ctx.transform.applyToPoint(new c(I,$));this.path.push({type:"mt",x:Y.x,y:Y.y}),this.ctx.lastPoint=new c(I,$)},x.prototype.closePath=function(){var I=new c(0,0),$=0;for($=this.path.length-1;$!==-1;$--)if(this.path[$].type==="begin"&&Et(this.path[$+1])==="object"&&typeof this.path[$+1].x=="number"){I=new c(this.path[$+1].x,this.path[$+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new c(I.x,I.y)},x.prototype.lineTo=function(I,$){if(isNaN(I)||isNaN($))throw Ot.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var Y=this.ctx.transform.applyToPoint(new c(I,$));this.path.push({type:"lt",x:Y.x,y:Y.y}),this.ctx.lastPoint=new c(Y.x,Y.y)},x.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),O.call(this,null,!0)},x.prototype.quadraticCurveTo=function(I,$,Y,ee){if(isNaN(Y)||isNaN(ee)||isNaN(I)||isNaN($))throw Ot.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var ne=this.ctx.transform.applyToPoint(new c(Y,ee)),ue=this.ctx.transform.applyToPoint(new c(I,$));this.path.push({type:"qct",x1:ue.x,y1:ue.y,x:ne.x,y:ne.y}),this.ctx.lastPoint=new c(ne.x,ne.y)},x.prototype.bezierCurveTo=function(I,$,Y,ee,ne,ue){if(isNaN(ne)||isNaN(ue)||isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee))throw Ot.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var ge=this.ctx.transform.applyToPoint(new c(ne,ue)),me=this.ctx.transform.applyToPoint(new c(I,$)),Se=this.ctx.transform.applyToPoint(new c(Y,ee));this.path.push({type:"bct",x1:me.x,y1:me.y,x2:Se.x,y2:Se.y,x:ge.x,y:ge.y}),this.ctx.lastPoint=new c(ge.x,ge.y)},x.prototype.arc=function(I,$,Y,ee,ne,ue){if(isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee)||isNaN(ne))throw Ot.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ue=!!ue,!this.ctx.transform.isIdentity){var ge=this.ctx.transform.applyToPoint(new c(I,$));I=ge.x,$=ge.y;var me=this.ctx.transform.applyToPoint(new c(0,Y)),Se=this.ctx.transform.applyToPoint(new c(0,0));Y=Math.sqrt(Math.pow(me.x-Se.x,2)+Math.pow(me.y-Se.y,2))}Math.abs(ne-ee)>=2*Math.PI&&(ee=0,ne=2*Math.PI),this.path.push({type:"arc",x:I,y:$,radius:Y,startAngle:ee,endAngle:ne,counterclockwise:ue})},x.prototype.arcTo=function(I,$,Y,ee,ne){throw new Error("arcTo not implemented.")},x.prototype.rect=function(I,$,Y,ee){if(isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee))throw Ot.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(I,$),this.lineTo(I+Y,$),this.lineTo(I+Y,$+ee),this.lineTo(I,$+ee),this.lineTo(I,$),this.lineTo(I+Y,$),this.lineTo(I,$)},x.prototype.fillRect=function(I,$,Y,ee){if(isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee))throw Ot.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!p.call(this)){var ne={};this.lineCap!=="butt"&&(ne.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(ne.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(I,$,Y,ee),this.fill(),ne.hasOwnProperty("lineCap")&&(this.lineCap=ne.lineCap),ne.hasOwnProperty("lineJoin")&&(this.lineJoin=ne.lineJoin)}},x.prototype.strokeRect=function(I,$,Y,ee){if(isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee))throw Ot.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");w.call(this)||(this.beginPath(),this.rect(I,$,Y,ee),this.stroke())},x.prototype.clearRect=function(I,$,Y,ee){if(isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee))throw Ot.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(I,$,Y,ee))},x.prototype.save=function(I){I=typeof I!="boolean"||I;for(var $=this.pdf.internal.getCurrentPageInfo().pageNumber,Y=0;Y<this.pdf.internal.getNumberOfPages();Y++)this.pdf.setPage(Y+1),this.pdf.internal.out("q");if(this.pdf.setPage($),I){this.ctx.fontSize=this.pdf.internal.getFontSize();var ee=new d(this.ctx);this.ctxStack.push(this.ctx),this.ctx=ee}},x.prototype.restore=function(I){I=typeof I!="boolean"||I;for(var $=this.pdf.internal.getCurrentPageInfo().pageNumber,Y=0;Y<this.pdf.internal.getNumberOfPages();Y++)this.pdf.setPage(Y+1),this.pdf.internal.out("Q");this.pdf.setPage($),I&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},x.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var S=function(I){var $,Y,ee,ne;if(I.isCanvasGradient===!0&&(I=I.getColor()),!I)return{r:0,g:0,b:0,a:0,style:I};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(I))$=0,Y=0,ee=0,ne=0;else{var ue=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(I);if(ue!==null)$=parseInt(ue[1]),Y=parseInt(ue[2]),ee=parseInt(ue[3]),ne=1;else if((ue=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(I))!==null)$=parseInt(ue[1]),Y=parseInt(ue[2]),ee=parseInt(ue[3]),ne=parseFloat(ue[4]);else{if(ne=1,typeof I=="string"&&I.charAt(0)!=="#"){var ge=new c0(I);I=ge.ok?ge.toHex():"#000000"}I.length===4?($=I.substring(1,2),$+=$,Y=I.substring(2,3),Y+=Y,ee=I.substring(3,4),ee+=ee):($=I.substring(1,3),Y=I.substring(3,5),ee=I.substring(5,7)),$=parseInt($,16),Y=parseInt(Y,16),ee=parseInt(ee,16)}}return{r:$,g:Y,b:ee,a:ne,style:I}},p=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},w=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};x.prototype.fillText=function(I,$,Y,ee){if(isNaN($)||isNaN(Y)||typeof I!="string")throw Ot.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(ee=isNaN(ee)?void 0:ee,!p.call(this)){var ne=oe(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;M.call(this,{text:I,x:$,y:Y,scale:ue,angle:ne,align:this.textAlign,maxWidth:ee})}},x.prototype.strokeText=function(I,$,Y,ee){if(isNaN($)||isNaN(Y)||typeof I!="string")throw Ot.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!w.call(this)){ee=isNaN(ee)?void 0:ee;var ne=oe(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;M.call(this,{text:I,x:$,y:Y,scale:ue,renderingMode:"stroke",angle:ne,align:this.textAlign,maxWidth:ee})}},x.prototype.measureText=function(I){if(typeof I!="string")throw Ot.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var $=this.pdf,Y=this.pdf.internal.scaleFactor,ee=$.internal.getFontSize(),ne=$.getStringUnitWidth(I)*ee/$.internal.scaleFactor;return new function(ue){var ge=(ue=ue||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return ge}}),this}({width:ne*=Math.round(96*Y/72*1e4)/1e4})},x.prototype.scale=function(I,$){if(isNaN(I)||isNaN($))throw Ot.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var Y=new h(I,0,0,$,0,0);this.ctx.transform=this.ctx.transform.multiply(Y)},x.prototype.rotate=function(I){if(isNaN(I))throw Ot.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var $=new h(Math.cos(I),Math.sin(I),-Math.sin(I),Math.cos(I),0,0);this.ctx.transform=this.ctx.transform.multiply($)},x.prototype.translate=function(I,$){if(isNaN(I)||isNaN($))throw Ot.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var Y=new h(1,0,0,1,I,$);this.ctx.transform=this.ctx.transform.multiply(Y)},x.prototype.transform=function(I,$,Y,ee,ne,ue){if(isNaN(I)||isNaN($)||isNaN(Y)||isNaN(ee)||isNaN(ne)||isNaN(ue))throw Ot.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var ge=new h(I,$,Y,ee,ne,ue);this.ctx.transform=this.ctx.transform.multiply(ge)},x.prototype.setTransform=function(I,$,Y,ee,ne,ue){I=isNaN(I)?1:I,$=isNaN($)?0:$,Y=isNaN(Y)?0:Y,ee=isNaN(ee)?1:ee,ne=isNaN(ne)?0:ne,ue=isNaN(ue)?0:ue,this.ctx.transform=new h(I,$,Y,ee,ne,ue)};var _=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};x.prototype.drawImage=function(I,$,Y,ee,ne,ue,ge,me,Se){var Ie=this.pdf.getImageProperties(I),je=1,Pe=1,ve=1,G=1;ee!==void 0&&me!==void 0&&(ve=me/ee,G=Se/ne,je=Ie.width/ee*me/ee,Pe=Ie.height/ne*Se/ne),ue===void 0&&(ue=$,ge=Y,$=0,Y=0),ee!==void 0&&me===void 0&&(me=ee,Se=ne),ee===void 0&&me===void 0&&(me=Ie.width,Se=Ie.height);for(var mt,st=this.ctx.transform.decompose(),Ye=oe(st.rotate.shx),Le=new h,Ve=(Le=(Le=(Le=Le.multiply(st.translate)).multiply(st.skew)).multiply(st.scale)).applyToRectangle(new l(ue-$*ve,ge-Y*G,ee*je,ne*Pe)),Re=k.call(this,Ve),et=[],Ue=0;Ue<Re.length;Ue+=1)et.indexOf(Re[Ue])===-1&&et.push(Re[Ue]);if(P(et),this.autoPaging)for(var bt=et[0],tt=et[et.length-1],it=bt;it<tt+1;it++){this.pdf.setPage(it);var Ct=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],lt=it===1?this.posY+this.margin[0]:this.margin[0],He=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Qe=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],qe=it===1?0:He+(it-2)*Qe;if(this.ctx.clip_path.length!==0){var Pt=this.path;mt=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(mt,this.posX+this.margin[3],-qe+lt+this.ctx.prevPageLastElemOffset),V.call(this,"fill",!0),this.path=Pt}var xt=JSON.parse(JSON.stringify(Ve));xt=R([xt],this.posX+this.margin[3],-qe+lt+this.ctx.prevPageLastElemOffset)[0];var De=(it>bt||it<tt)&&_.call(this);De&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Ct,Qe,null).clip().discardPath()),this.pdf.addImage(I,"JPEG",xt.x,xt.y,xt.w,xt.h,null,null,Ye),De&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(I,"JPEG",Ve.x,Ve.y,Ve.w,Ve.h,null,null,Ye)};var k=function(I,$,Y){var ee=[];$=$||this.pdf.internal.pageSize.width,Y=Y||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var ne=this.posY+this.ctx.prevPageLastElemOffset;switch(I.type){default:case"mt":case"lt":ee.push(Math.floor((I.y+ne)/Y)+1);break;case"arc":ee.push(Math.floor((I.y+ne-I.radius)/Y)+1),ee.push(Math.floor((I.y+ne+I.radius)/Y)+1);break;case"qct":var ue=pe(this.ctx.lastPoint.x,this.ctx.lastPoint.y,I.x1,I.y1,I.x,I.y);ee.push(Math.floor((ue.y+ne)/Y)+1),ee.push(Math.floor((ue.y+ue.h+ne)/Y)+1);break;case"bct":var ge=ke(this.ctx.lastPoint.x,this.ctx.lastPoint.y,I.x1,I.y1,I.x2,I.y2,I.x,I.y);ee.push(Math.floor((ge.y+ne)/Y)+1),ee.push(Math.floor((ge.y+ge.h+ne)/Y)+1);break;case"rect":ee.push(Math.floor((I.y+ne)/Y)+1),ee.push(Math.floor((I.y+I.h+ne)/Y)+1)}for(var me=0;me<ee.length;me+=1)for(;this.pdf.internal.getNumberOfPages()<ee[me];)y.call(this);return ee},y=function(){var I=this.fillStyle,$=this.strokeStyle,Y=this.font,ee=this.lineCap,ne=this.lineWidth,ue=this.lineJoin;this.pdf.addPage(),this.fillStyle=I,this.strokeStyle=$,this.font=Y,this.lineCap=ee,this.lineWidth=ne,this.lineJoin=ue},R=function(I,$,Y){for(var ee=0;ee<I.length;ee++)switch(I[ee].type){case"bct":I[ee].x2+=$,I[ee].y2+=Y;case"qct":I[ee].x1+=$,I[ee].y1+=Y;default:I[ee].x+=$,I[ee].y+=Y}return I},P=function(I){return I.sort(function($,Y){return $-Y})},O=function(I,$){for(var Y,ee,ne=this.fillStyle,ue=this.strokeStyle,ge=this.lineCap,me=this.lineWidth,Se=Math.abs(me*this.ctx.transform.scaleX),Ie=this.lineJoin,je=JSON.parse(JSON.stringify(this.path)),Pe=JSON.parse(JSON.stringify(this.path)),ve=[],G=0;G<Pe.length;G++)if(Pe[G].x!==void 0)for(var mt=k.call(this,Pe[G]),st=0;st<mt.length;st+=1)ve.indexOf(mt[st])===-1&&ve.push(mt[st]);for(var Ye=0;Ye<ve.length;Ye++)for(;this.pdf.internal.getNumberOfPages()<ve[Ye];)y.call(this);if(P(ve),this.autoPaging)for(var Le=ve[0],Ve=ve[ve.length-1],Re=Le;Re<Ve+1;Re++){this.pdf.setPage(Re),this.fillStyle=ne,this.strokeStyle=ue,this.lineCap=ge,this.lineWidth=Se,this.lineJoin=Ie;var et=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Ue=Re===1?this.posY+this.margin[0]:this.margin[0],bt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],tt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],it=Re===1?0:bt+(Re-2)*tt;if(this.ctx.clip_path.length!==0){var Ct=this.path;Y=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(Y,this.posX+this.margin[3],-it+Ue+this.ctx.prevPageLastElemOffset),V.call(this,I,!0),this.path=Ct}if(ee=JSON.parse(JSON.stringify(je)),this.path=R(ee,this.posX+this.margin[3],-it+Ue+this.ctx.prevPageLastElemOffset),$===!1||Re===0){var lt=(Re>Le||Re<Ve)&&_.call(this);lt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],et,tt,null).clip().discardPath()),V.call(this,I,$),lt&&this.pdf.restoreGraphicsState()}this.lineWidth=me}else this.lineWidth=Se,V.call(this,I,$),this.lineWidth=me;this.path=je},V=function(I,$){if((I!=="stroke"||$||!w.call(this))&&(I==="stroke"||$||!p.call(this))){for(var Y,ee,ne=[],ue=this.path,ge=0;ge<ue.length;ge++){var me=ue[ge];switch(me.type){case"begin":ne.push({begin:!0});break;case"close":ne.push({close:!0});break;case"mt":ne.push({start:me,deltas:[],abs:[]});break;case"lt":var Se=ne.length;if(ue[ge-1]&&!isNaN(ue[ge-1].x)&&(Y=[me.x-ue[ge-1].x,me.y-ue[ge-1].y],Se>0)){for(;Se>=0;Se--)if(ne[Se-1].close!==!0&&ne[Se-1].begin!==!0){ne[Se-1].deltas.push(Y),ne[Se-1].abs.push(me);break}}break;case"bct":Y=[me.x1-ue[ge-1].x,me.y1-ue[ge-1].y,me.x2-ue[ge-1].x,me.y2-ue[ge-1].y,me.x-ue[ge-1].x,me.y-ue[ge-1].y],ne[ne.length-1].deltas.push(Y);break;case"qct":var Ie=ue[ge-1].x+2/3*(me.x1-ue[ge-1].x),je=ue[ge-1].y+2/3*(me.y1-ue[ge-1].y),Pe=me.x+2/3*(me.x1-me.x),ve=me.y+2/3*(me.y1-me.y),G=me.x,mt=me.y;Y=[Ie-ue[ge-1].x,je-ue[ge-1].y,Pe-ue[ge-1].x,ve-ue[ge-1].y,G-ue[ge-1].x,mt-ue[ge-1].y],ne[ne.length-1].deltas.push(Y);break;case"arc":ne.push({deltas:[],abs:[],arc:!0}),Array.isArray(ne[ne.length-1].abs)&&ne[ne.length-1].abs.push(me)}}ee=$?null:I==="stroke"?"stroke":"fill";for(var st=!1,Ye=0;Ye<ne.length;Ye++)if(ne[Ye].arc)for(var Le=ne[Ye].abs,Ve=0;Ve<Le.length;Ve++){var Re=Le[Ve];Re.type==="arc"?X.call(this,Re.x,Re.y,Re.radius,Re.startAngle,Re.endAngle,Re.counterclockwise,void 0,$,!st):W.call(this,Re.x,Re.y),st=!0}else if(ne[Ye].close===!0)this.pdf.internal.out("h"),st=!1;else if(ne[Ye].begin!==!0){var et=ne[Ye].start.x,Ue=ne[Ye].start.y;q.call(this,ne[Ye].deltas,et,Ue),st=!0}ee&&T.call(this,ee),$&&Z.call(this)}},J=function(I){var $=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,Y=$*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return I-Y;case"top":return I+$-Y;case"hanging":return I+$-2*Y;case"middle":return I+$/2-Y;default:return I}},K=function(I){return I+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};x.prototype.createLinearGradient=function(){var I=function(){};return I.colorStops=[],I.addColorStop=function($,Y){this.colorStops.push([$,Y])},I.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},I.isCanvasGradient=!0,I},x.prototype.createPattern=function(){return this.createLinearGradient()},x.prototype.createRadialGradient=function(){return this.createLinearGradient()};var X=function(I,$,Y,ee,ne,ue,ge,me,Se){for(var Ie=se.call(this,Y,ee,ne,ue),je=0;je<Ie.length;je++){var Pe=Ie[je];je===0&&(Se?L.call(this,Pe.x1+I,Pe.y1+$):W.call(this,Pe.x1+I,Pe.y1+$)),ie.call(this,I,$,Pe.x2,Pe.y2,Pe.x3,Pe.y3,Pe.x4,Pe.y4)}me?Z.call(this):T.call(this,ge)},T=function(I){switch(I){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},Z=function(){this.pdf.clip(),this.pdf.discardPath()},L=function(I,$){this.pdf.internal.out(r(I)+" "+n($)+" m")},M=function(I){var $;switch(I.align){case"right":case"end":$="right";break;case"center":$="center";break;default:$="left"}var Y=this.pdf.getTextDimensions(I.text),ee=J.call(this,I.y),ne=K.call(this,ee)-Y.h,ue=this.ctx.transform.applyToPoint(new c(I.x,ee)),ge=this.ctx.transform.decompose(),me=new h;me=(me=(me=me.multiply(ge.translate)).multiply(ge.skew)).multiply(ge.scale);for(var Se,Ie,je,Pe=this.ctx.transform.applyToRectangle(new l(I.x,ee,Y.w,Y.h)),ve=me.applyToRectangle(new l(I.x,ne,Y.w,Y.h)),G=k.call(this,ve),mt=[],st=0;st<G.length;st+=1)mt.indexOf(G[st])===-1&&mt.push(G[st]);if(P(mt),this.autoPaging)for(var Ye=mt[0],Le=mt[mt.length-1],Ve=Ye;Ve<Le+1;Ve++){this.pdf.setPage(Ve);var Re=Ve===1?this.posY+this.margin[0]:this.margin[0],et=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Ue=this.pdf.internal.pageSize.height-this.margin[2],bt=Ue-this.margin[0],tt=this.pdf.internal.pageSize.width-this.margin[1],it=tt-this.margin[3],Ct=Ve===1?0:et+(Ve-2)*bt;if(this.ctx.clip_path.length!==0){var lt=this.path;Se=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(Se,this.posX+this.margin[3],-1*Ct+Re),V.call(this,"fill",!0),this.path=lt}var He=R([JSON.parse(JSON.stringify(ve))],this.posX+this.margin[3],-Ct+Re+this.ctx.prevPageLastElemOffset)[0];I.scale>=.01&&(Ie=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ie*I.scale),je=this.lineWidth,this.lineWidth=je*I.scale);var Qe=this.autoPaging!=="text";if(Qe||He.y+He.h<=Ue){if(Qe||He.y>=Re&&He.x<=tt){var qe=Qe?I.text:this.pdf.splitTextToSize(I.text,I.maxWidth||tt-He.x)[0],Pt=R([JSON.parse(JSON.stringify(Pe))],this.posX+this.margin[3],-Ct+Re+this.ctx.prevPageLastElemOffset)[0],xt=Qe&&(Ve>Ye||Ve<Le)&&_.call(this);xt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],it,bt,null).clip().discardPath()),this.pdf.text(qe,Pt.x,Pt.y,{angle:I.angle,align:$,renderingMode:I.renderingMode}),xt&&this.pdf.restoreGraphicsState()}}else He.y<Ue&&(this.ctx.prevPageLastElemOffset+=Ue-He.y);I.scale>=.01&&(this.pdf.setFontSize(Ie),this.lineWidth=je)}else I.scale>=.01&&(Ie=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ie*I.scale),je=this.lineWidth,this.lineWidth=je*I.scale),this.pdf.text(I.text,ue.x+this.posX,ue.y+this.posY,{angle:I.angle,align:$,renderingMode:I.renderingMode,maxWidth:I.maxWidth}),I.scale>=.01&&(this.pdf.setFontSize(Ie),this.lineWidth=je)},W=function(I,$,Y,ee){Y=Y||0,ee=ee||0,this.pdf.internal.out(r(I+Y)+" "+n($+ee)+" l")},q=function(I,$,Y){return this.pdf.lines(I,$,Y,null,null)},ie=function(I,$,Y,ee,ne,ue,ge,me){this.pdf.internal.out([t(o(Y+I)),t(a(ee+$)),t(o(ne+I)),t(a(ue+$)),t(o(ge+I)),t(a(me+$)),"c"].join(" "))},se=function(I,$,Y,ee){for(var ne=2*Math.PI,ue=Math.PI/2;$>Y;)$-=ne;var ge=Math.abs(Y-$);ge<ne&&ee&&(ge=ne-ge);for(var me=[],Se=ee?-1:1,Ie=$;ge>1e-5;){var je=Ie+Se*Math.min(ge,ue);me.push(ce.call(this,I,Ie,je)),ge-=Math.abs(je-Ie),Ie=je}return me},ce=function(I,$,Y){var ee=(Y-$)/2,ne=I*Math.cos(ee),ue=I*Math.sin(ee),ge=ne,me=-ue,Se=ge*ge+me*me,Ie=Se+ge*ne+me*ue,je=4/3*(Math.sqrt(2*Se*Ie)-Ie)/(ge*ue-me*ne),Pe=ge-je*me,ve=me+je*ge,G=Pe,mt=-ve,st=ee+$,Ye=Math.cos(st),Le=Math.sin(st);return{x1:I*Math.cos($),y1:I*Math.sin($),x2:Pe*Ye-ve*Le,y2:Pe*Le+ve*Ye,x3:G*Ye-mt*Le,y3:G*Le+mt*Ye,x4:I*Math.cos(Y),y4:I*Math.sin(Y)}},oe=function(I){return 180*I/Math.PI},pe=function(I,$,Y,ee,ne,ue){var ge=I+.5*(Y-I),me=$+.5*(ee-$),Se=ne+.5*(Y-ne),Ie=ue+.5*(ee-ue),je=Math.min(I,ne,ge,Se),Pe=Math.max(I,ne,ge,Se),ve=Math.min($,ue,me,Ie),G=Math.max($,ue,me,Ie);return new l(je,ve,Pe-je,G-ve)},ke=function(I,$,Y,ee,ne,ue,ge,me){var Se,Ie,je,Pe,ve,G,mt,st,Ye,Le,Ve,Re,et,Ue,bt=Y-I,tt=ee-$,it=ne-Y,Ct=ue-ee,lt=ge-ne,He=me-ue;for(Ie=0;Ie<41;Ie++)Ye=(mt=(je=I+(Se=Ie/40)*bt)+Se*((ve=Y+Se*it)-je))+Se*(ve+Se*(ne+Se*lt-ve)-mt),Le=(st=(Pe=$+Se*tt)+Se*((G=ee+Se*Ct)-Pe))+Se*(G+Se*(ue+Se*He-G)-st),Ie==0?(Ve=Ye,Re=Le,et=Ye,Ue=Le):(Ve=Math.min(Ve,Ye),Re=Math.min(Re,Le),et=Math.max(et,Ye),Ue=Math.max(Ue,Le));return new l(Math.round(Ve),Math.round(Re),Math.round(et-Ve),Math.round(Ue-Re))},ye=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var I,$,Y=(I=this.ctx.lineDash,$=this.ctx.lineDashOffset,JSON.stringify({lineDash:I,lineDashOffset:$}));this.prevLineDash!==Y&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=Y)}}})(Ge.API),function(e){var t=function(c){var l,h,f,d,x,S,p,w,_,k;for(h=[],f=0,d=(c+=l="\0\0\0\0".slice(c.length%4||4)).length;d>f;f+=4)(x=(c.charCodeAt(f)<<24)+(c.charCodeAt(f+1)<<16)+(c.charCodeAt(f+2)<<8)+c.charCodeAt(f+3))!==0?(S=(x=((x=((x=((x=(x-(k=x%85))/85)-(_=x%85))/85)-(w=x%85))/85)-(p=x%85))/85)%85,h.push(S+33,p+33,w+33,_+33,k+33)):h.push(122);return function(y,R){for(var P=R;P>0;P--)y.pop()}(h,l.length),String.fromCharCode.apply(String,h)+"~>"},r=function(c){var l,h,f,d,x,S=String,p="length",w=255,_="charCodeAt",k="slice",y="replace";for(c[k](-2),c=c[k](0,-2)[y](/\s/g,"")[y]("z","!!!!!"),f=[],d=0,x=(c+=l="uuuuu"[k](c[p]%5||5))[p];x>d;d+=5)h=52200625*(c[_](d)-33)+614125*(c[_](d+1)-33)+7225*(c[_](d+2)-33)+85*(c[_](d+3)-33)+(c[_](d+4)-33),f.push(w&h>>24,w&h>>16,w&h>>8,w&h);return function(R,P){for(var O=P;O>0;O--)R.pop()}(f,l[p]),S.fromCharCode.apply(S,f)},n=function(c){return c.split("").map(function(l){return("0"+l.charCodeAt().toString(16)).slice(-2)}).join("")+">"},o=function(c){var l=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((c=c.replace(/\s/g,"")).indexOf(">")!==-1&&(c=c.substr(0,c.indexOf(">"))),c.length%2&&(c+="0"),l.test(c)===!1)return"";for(var h="",f=0;f<c.length;f+=2)h+=String.fromCharCode("0x"+(c[f]+c[f+1]));return h},a=function(c){for(var l=new Uint8Array(c.length),h=c.length;h--;)l[h]=c.charCodeAt(h);return(l=vc(l)).reduce(function(f,d){return f+String.fromCharCode(d)},"")};e.processDataByFilters=function(c,l){var h=0,f=c||"",d=[];for(typeof(l=l||[])=="string"&&(l=[l]),h=0;h<l.length;h+=1)switch(l[h]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),d.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),d.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=o(f),d.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),d.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=a(f),d.push("/FlateDecode");break;default:throw new Error('The filter: "'+l[h]+'" is not implemented')}return{data:f,reverseChain:d.reverse().join(" ")}}}(Ge.API),function(e){e.loadFile=function(t,r,n){return function(o,a,c){a=a!==!1,c=typeof c=="function"?c:function(){};var l=void 0;try{l=function(h,f,d){var x=new XMLHttpRequest,S=0,p=function(w){var _=w.length,k=[],y=String.fromCharCode;for(S=0;S<_;S+=1)k.push(y(255&w.charCodeAt(S)));return k.join("")};if(x.open("GET",h,!f),x.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(x.onload=function(){x.status===200?d(p(this.responseText)):d(void 0)}),x.send(null),f&&x.status===200)return p(x.responseText)}(o,a,c)}catch{}return l}(t,r,n)},e.loadImageFile=e.loadFile}(Ge.API),function(e){function t(){return(nt.html2canvas?Promise.resolve(nt.html2canvas):Ol(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load html2canvas: "+l))}).then(function(l){return l.default?l.default:l})}function r(){return(nt.DOMPurify?Promise.resolve(nt.DOMPurify):Ol(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load dompurify: "+l))}).then(function(l){return l.default?l.default:l})}var n=function(l){var h=Et(l);return h==="undefined"?"undefined":h==="string"||l instanceof String?"string":h==="number"||l instanceof Number?"number":h==="function"||l instanceof Function?"function":l&&l.constructor===Array?"array":l&&l.nodeType===1?"element":h==="object"?"object":"unknown"},o=function(l,h){var f=document.createElement(l);for(var d in h.className&&(f.className=h.className),h.innerHTML&&h.dompurify&&(f.innerHTML=h.dompurify.sanitize(h.innerHTML)),h.style)f.style[d]=h.style[d];return f},a=function l(h,f){for(var d=h.nodeType===3?document.createTextNode(h.nodeValue):h.cloneNode(!1),x=h.firstChild;x;x=x.nextSibling)f!==!0&&x.nodeType===1&&x.nodeName==="SCRIPT"||d.appendChild(l(x,f));return h.nodeType===1&&(h.nodeName==="CANVAS"?(d.width=h.width,d.height=h.height,d.getContext("2d").drawImage(h,0,0)):h.nodeName!=="TEXTAREA"&&h.nodeName!=="SELECT"||(d.value=h.value),d.addEventListener("load",function(){d.scrollTop=h.scrollTop,d.scrollLeft=h.scrollLeft},!0)),d},c=function l(h){var f=Object.assign(l.convert(Promise.resolve()),JSON.parse(JSON.stringify(l.template))),d=l.convert(Promise.resolve(),f);return(d=d.setProgress(1,l,1,[l])).set(h)};(c.prototype=Object.create(Promise.prototype)).constructor=c,c.convert=function(l,h){return l.__proto__=h||c.prototype,l},c.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},c.prototype.from=function(l,h){return this.then(function(){switch(h=h||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(l),h){case"string":return this.then(r).then(function(f){return this.set({src:o("div",{innerHTML:l,dompurify:f})})});case"element":return this.set({src:l});case"canvas":return this.set({canvas:l});case"img":return this.set({img:l});default:return this.error("Unknown source type.")}})},c.prototype.to=function(l){switch(l){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},c.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var l={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},h=a(this.prop.src,this.opt.html2canvas.javascriptEnabled);h.tagName==="BODY"&&(l.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:l}),this.prop.container.appendChild(h),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},c.prototype.toCanvas=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,h(this.prop.container,f)}).then(function(h){(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toContext2d=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=this.opt.jsPDF,d=this.opt.fontFaces,x=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,S=Object.assign({async:!0,allowTaint:!0,scale:x,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete S.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=d,d)for(var p=0;p<d.length;++p){var w=d[p],_=w.src.find(function(k){return k.format==="truetype"});_&&f.addFont(_.url,w.ref.name,w.ref.style)}return S.windowHeight=S.windowHeight||0,S.windowHeight=S.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):S.windowHeight,f.context2d.save(!0),h(this.prop.container,S)}).then(function(h){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var l=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=l})},c.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},c.prototype.output=function(l,h,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(l,h):this.outputPdf(l,h)},c.prototype.outputPdf=function(l,h){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(l,h)})},c.prototype.outputImg=function(l){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(l){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+l+'" is not supported.'}})},c.prototype.save=function(l){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(l?{filename:l}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},c.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},c.prototype.set=function(l){if(n(l)!=="object")return this;var h=Object.keys(l||{}).map(function(f){if(f in c.template.prop)return function(){this.prop[f]=l[f]};switch(f){case"margin":return this.setMargin.bind(this,l.margin);case"jsPDF":return function(){return this.opt.jsPDF=l.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,l.pageSize);default:return function(){this.opt[f]=l[f]}}},this);return this.then(function(){return this.thenList(h)})},c.prototype.get=function(l,h){return this.then(function(){var f=l in c.template.prop?this.prop[l]:this.opt[l];return h?h(f):f})},c.prototype.setMargin=function(l){return this.then(function(){switch(n(l)){case"number":l=[l,l,l,l];case"array":if(l.length===2&&(l=[l[0],l[1],l[0],l[1]]),l.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=l}).then(this.setPageSize)},c.prototype.setPageSize=function(l){function h(f,d){return Math.floor(f*d/72*96)}return this.then(function(){(l=l||Ge.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(l.inner={width:l.width-this.opt.margin[1]-this.opt.margin[3],height:l.height-this.opt.margin[0]-this.opt.margin[2]},l.inner.px={width:h(l.inner.width,l.k),height:h(l.inner.height,l.k)},l.inner.ratio=l.inner.height/l.inner.width),this.prop.pageSize=l})},c.prototype.setProgress=function(l,h,f,d){return l!=null&&(this.progress.val=l),h!=null&&(this.progress.state=h),f!=null&&(this.progress.n=f),d!=null&&(this.progress.stack=d),this.progress.ratio=this.progress.val/this.progress.state,this},c.prototype.updateProgress=function(l,h,f,d){return this.setProgress(l?this.progress.val+l:null,h||null,f?this.progress.n+f:null,d?this.progress.stack.concat(d):null)},c.prototype.then=function(l,h){var f=this;return this.thenCore(l,h,function(d,x){return f.updateProgress(null,null,1,[d]),Promise.prototype.then.call(this,function(S){return f.updateProgress(null,d),S}).then(d,x).then(function(S){return f.updateProgress(1),S})})},c.prototype.thenCore=function(l,h,f){f=f||Promise.prototype.then;var d=this;l&&(l=l.bind(d)),h&&(h=h.bind(d));var x=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?d:c.convert(Object.assign({},d),Promise.prototype),S=f.call(x,l,h);return c.convert(S,d.__proto__)},c.prototype.thenExternal=function(l,h){return Promise.prototype.then.call(this,l,h)},c.prototype.thenList=function(l){var h=this;return l.forEach(function(f){h=h.thenCore(f)}),h},c.prototype.catch=function(l){l&&(l=l.bind(this));var h=Promise.prototype.catch.call(this,l);return c.convert(h,this)},c.prototype.catchExternal=function(l){return Promise.prototype.catch.call(this,l)},c.prototype.error=function(l){return this.then(function(){throw new Error(l)})},c.prototype.using=c.prototype.set,c.prototype.saveAs=c.prototype.save,c.prototype.export=c.prototype.output,c.prototype.run=c.prototype.then,Ge.getPageSize=function(l,h,f){if(Et(l)==="object"){var d=l;l=d.orientation,h=d.unit||h,f=d.format||f}h=h||"mm",f=f||"a4",l=(""+(l||"P")).toLowerCase();var x,S=(""+f).toLowerCase(),p={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(h){case"pt":x=1;break;case"mm":x=72/25.4;break;case"cm":x=72/2.54;break;case"in":x=72;break;case"px":x=.75;break;case"pc":case"em":x=12;break;case"ex":x=6;break;default:throw"Invalid unit: "+h}var w,_=0,k=0;if(p.hasOwnProperty(S))_=p[S][1]/x,k=p[S][0]/x;else try{_=f[1],k=f[0]}catch{throw new Error("Invalid format: "+f)}if(l==="p"||l==="portrait")l="p",k>_&&(w=k,k=_,_=w);else{if(l!=="l"&&l!=="landscape")throw"Invalid orientation: "+l;l="l",_>k&&(w=k,k=_,_=w)}return{width:k,height:_,unit:h,k:x,orientation:l}},e.html=function(l,h){(h=h||{}).callback=h.callback||function(){},h.html2canvas=h.html2canvas||{},h.html2canvas.canvas=h.html2canvas.canvas||this.canvas,h.jsPDF=h.jsPDF||this,h.fontFaces=h.fontFaces?h.fontFaces.map(Kl):null;var f=new c(h);return h.worker?f:f.from(l).doCallback()}}(Ge.API),Ge.API.addJS=function(e){return oh=e,this.internal.events.subscribe("postPutResources",function(){Ps=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(Ps+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),ih=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+oh+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){Ps!==void 0&&ih!==void 0&&this.internal.out("/Names <</JavaScript "+Ps+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var o=r.outline.render().split(/\r\n/),a=0;a<o.length;a++){var c=o[a],l=n.exec(c);if(l!=null){var h=l[1];r.internal.newObjectDeferredBegin(h,!1)}r.internal.write(c)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,d=[];for(a=0;a<f;a++){var x=r.internal.newObject();d.push(x);var S=r.internal.getPageInfo(a+1);r.internal.write("<< /D["+S.objId+" 0 R /XYZ null null null]>> endobj")}var p=r.internal.newObject();for(r.internal.write("<< /Names [ "),a=0;a<d.length;a++)r.internal.write("(page_"+(a+1)+")"+d[a]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+p+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,o,a){var c={title:o,options:a,children:[]};return n==null&&(n=this.root),n.children.push(c),c},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var o=0;o<n.children.length;o++)this.genIds_r(n.children[o])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var o=this.ctx.pdf.internal.getVerticalCoordinateString,a=0;a<n.children.length;a++){var c=n.children[a];this.objStart(c),this.line("/Title "+this.makeString(c.title)),this.line("/Parent "+this.makeRef(n)),a>0&&this.line("/Prev "+this.makeRef(n.children[a-1])),a<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[a+1])),c.children.length>0&&(this.line("/First "+this.makeRef(c.children[0])),this.line("/Last "+this.makeRef(c.children[c.children.length-1])));var l=this.count=this.count_r({count:0},c);if(l>0&&this.line("/Count "+l),c.options&&c.options.pageNumber){var h=r.internal.getPageInfo(c.options.pageNumber);this.line("/Dest ["+h.objId+" 0 R /XYZ 0 "+o(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,o){for(var a=0;a<o.children.length;a++)n.count++,this.count_r(n,o.children[a]);return n.count}}])}(Ge.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,o,a,c,l){var h,f=this.decode.DCT_DECODE,d=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=c||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,h=function(x){for(var S,p=256*x.charCodeAt(4)+x.charCodeAt(5),w=x.length,_={width:0,height:0,numcomponents:1},k=4;k<w;k+=2){if(k+=p,t.indexOf(x.charCodeAt(k+1))!==-1){S=256*x.charCodeAt(k+5)+x.charCodeAt(k+6),_={width:256*x.charCodeAt(k+7)+x.charCodeAt(k+8),height:S,numcomponents:x.charCodeAt(k+9)};break}p=256*x.charCodeAt(k+2)+x.charCodeAt(k+3)}return _}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),h.numcomponents){case 1:l=this.color_spaces.DEVICE_GRAY;break;case 4:l=this.color_spaces.DEVICE_CMYK;break;case 3:l=this.color_spaces.DEVICE_RGB}d={data:r,width:h.width,height:h.height,colorSpace:l,bitsPerComponent:8,filter:f,index:n,alias:o}}return d}}(Ge.API),Ge.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var o,a=Q6(e,{checkCrc:!0}),c=a.width,l=a.height,h=a.channels,f=a.palette,d=a.depth;o=f&&h===1?function(X){for(var T=X.width,Z=X.height,L=X.data,M=X.palette,W=X.depth,q=!1,ie=[],se=[],ce=void 0,oe=!1,pe=0,ke=0;ke<M.length;ke++){var ye=c1(M[ke],4),I=ye[0],$=ye[1],Y=ye[2],ee=ye[3];ie.push(I,$,Y),ee!=null&&(ee===0?(pe++,se.length<1&&se.push(ke)):ee<255&&(oe=!0))}if(oe||pe>1){q=!0,se=void 0;var ne=T*Z;ce=new Uint8Array(ne);for(var ue=new DataView(L.buffer),ge=0;ge<ne;ge++){var me=tc(ue,ge,W),Se=c1(M[me],4)[3];ce[ge]=Se}}else pe===0&&(se=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:q?8:void 0,colorBytes:L,alphaBytes:ce,needSMask:q,palette:ie,mask:se}}(a):h===2||h===4?function(X){for(var T=X.data,Z=X.width,L=X.height,M=X.channels,W=X.depth,q=M===2?"DeviceGray":"DeviceRGB",ie=M-1,se=Z*L,ce=ie,oe=se*ce,pe=1*se,ke=Math.ceil(oe*W/8),ye=Math.ceil(pe*W/8),I=new Uint8Array(ke),$=new Uint8Array(ye),Y=new DataView(T.buffer),ee=new DataView(I.buffer),ne=new DataView($.buffer),ue=!1,ge=0;ge<se;ge++){for(var me=ge*M,Se=0;Se<ce;Se++)ph(ee,tc(Y,me+Se,W),ge*ce+Se,W);var Ie=tc(Y,me+ce,W);Ie<(1<<W)-1&&(ue=!0),ph(ne,Ie,1*ge,W)}return{colorSpace:q,colorsPerPixel:ie,sMaskBitsPerComponent:ue?W:void 0,colorBytes:I,alphaBytes:$,needSMask:ue}}(a):function(X){var T=X.data,Z=X.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:Z,colorsPerPixel:Z==="DeviceGray"?1:3,colorBytes:T instanceof Uint16Array?function(L){for(var M=L.length,W=new Uint8Array(2*M),q=new DataView(W.buffer,W.byteOffset,W.byteLength),ie=0;ie<M;ie++)q.setUint16(2*ie,L[ie],!1);return W}(T):T,needSMask:!1}}(a);var x,S,p,w=o,_=w.colorSpace,k=w.colorsPerPixel,y=w.sMaskBitsPerComponent,R=w.colorBytes,P=w.alphaBytes,O=w.needSMask,V=w.palette,J=w.mask,K=null;return n!==Ge.API.image_compression.NONE&&typeof vc=="function"?(K=function(X){var T;switch(X){case Ge.API.image_compression.FAST:T=11;break;case Ge.API.image_compression.MEDIUM:T=13;break;case Ge.API.image_compression.SLOW:T=14;break;default:T=12}return T}(n),x=this.decode.FLATE_DECODE,S="/Predictor ".concat(K," /Colors ").concat(k," /BitsPerComponent ").concat(d," /Columns ").concat(c),e=ch(R,Math.ceil(c*k*d/8),k,d,n),O&&(p=ch(P,Math.ceil(c*y/8),1,y,n))):(x=void 0,S=void 0,e=R,O&&(p=P)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(p&&this.__addimage__.isArrayBuffer(p)||this.__addimage__.isArrayBufferView(p))&&(p=this.__addimage__.arrayBufferToBinaryString(p)),{alias:r,data:e,index:t,filter:x,decodeParameters:S,transparency:J,palette:V,sMask:p,predictor:K,width:c,height:l,bitsPerComponent:d,sMaskBitsPerComponent:y,colorSpace:_}}},function(e){e.processGIF89A=function(t,r,n,o){var a=new xv(t),c=a.width,l=a.height,h=[];a.decodeAndBlitFrameRGBA(0,h);var f={data:h,width:c,height:l},d=new rc(100).encode(f,100);return e.processJPEG.call(this,d,r,n,o)},e.processGIF87A=e.processGIF89A}(Ge.API),kn.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:o,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},kn.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Ot.log("bit decode error:"+r)}},kn.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,o=0;o<t;o++)for(var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+8*o*4,l=0;l<8&&8*o+l<this.width;l++){var h=this.palette[a>>7-l&1];this.data[c+4*l]=h.blue,this.data[c+4*l+1]=h.green,this.data[c+4*l+2]=h.red,this.data[c+4*l+3]=255}r!==0&&(this.pos+=4-r)}},kn.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<e;o++){var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+2*o*4,l=a>>4,h=15&a,f=this.palette[l];if(this.data[c]=f.blue,this.data[c+1]=f.green,this.data[c+2]=f.red,this.data[c+3]=255,2*o+1>=this.width)break;f=this.palette[h],this.data[c+4]=f.blue,this.data[c+4+1]=f.green,this.data[c+4+2]=f.red,this.data[c+4+3]=255}t!==0&&(this.pos+=4-t)}},kn.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(o<this.palette.length){var c=this.palette[o];this.data[a]=c.red,this.data[a+1]=c.green,this.data[a+2]=c.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}e!==0&&(this.pos+=4-e)}},kn.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(a&t)/t*255|0,l=(a>>5&t)/t*255|0,h=(a>>10&t)/t*255|0,f=a>>15?255:0,d=n*this.width*4+4*o;this.data[d]=h,this.data[d+1]=l,this.data[d+2]=c,this.data[d+3]=f}this.pos+=e}},kn.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var o=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var c=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(c&t)/t*255|0,h=(c>>5&r)/r*255|0,f=(c>>11)/t*255|0,d=o*this.width*4+4*a;this.data[d]=f,this.data[d+1]=h,this.data[d+2]=l,this.data[d+3]=255}this.pos+=e}},kn.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=a,this.data[c+1]=o,this.data[c+2]=n,this.data[c+3]=255}this.pos+=this.width%4}},kn.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=a,this.data[l+1]=o,this.data[l+2]=n,this.data[l+3]=c}},kn.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,o){var a=new kn(t,!1),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new rc(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ge.API),gh.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,o){var a=new gh(t),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new rc(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ge.API),Ge.API.processRGBA=function(e,t,r){for(var n=e.data,o=n.length,a=new Uint8Array(o/4*3),c=new Uint8Array(o/4),l=0,h=0,f=0;f<o;f+=4){var d=n[f],x=n[f+1],S=n[f+2],p=n[f+3];a[l++]=d,a[l++]=x,a[l++]=S,c[h++]=p}var w=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(c),data:w,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},Ge.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Vo=Ge.API,js=Vo.getCharWidthsArray=function(e,t){var r,n,o=(t=t||{}).font||this.internal.getFont(),a=t.fontSize||this.internal.getFontSize(),c=t.charSpace||this.internal.getCharSpace(),l=t.widths?t.widths:o.metadata.Unicode.widths,h=l.fof?l.fof:1,f=t.kerning?t.kerning:o.metadata.Unicode.kerning,d=f.fof?f.fof:1,x=t.doKerning!==!1,S=0,p=e.length,w=0,_=l[0]||h,k=[];for(r=0;r<p;r++)n=e.charCodeAt(r),typeof o.metadata.widthOfString=="function"?k.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(n))+c*(1e3/a)||0)/1e3):(S=x&&Et(f[n])==="object"&&!isNaN(parseInt(f[n][w],10))?f[n][w]/d:0,k.push((l[n]||_)/h+S)),w=n;return k},ah=Vo.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),o=t.charSpace||this.internal.getCharSpace();return Vo.processArabic&&(e=Vo.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,o)/r:js.apply(this,arguments).reduce(function(a,c){return a+c},0)},sh=function(e,t,r,n){for(var o=[],a=0,c=e.length,l=0;a!==c&&l+t[a]<r;)l+=t[a],a++;o.push(e.slice(0,a));var h=a;for(l=0;a!==c;)l+t[a]>n&&(o.push(e.slice(h,a)),l=0,h=a),l+=t[a],a++;return h!==a&&o.push(e.slice(h,a)),o},lh=function(e,t,r){r||(r={});var n,o,a,c,l,h,f,d=[],x=[d],S=r.textIndent||0,p=0,w=0,_=e.split(" "),k=js.apply(this,[" ",r])[0];if(h=r.lineIndent===-1?_[0].length+2:r.lineIndent||0){var y=Array(h).join(" "),R=[];_.map(function(O){(O=O.split(/\s*\n/)).length>1?R=R.concat(O.map(function(V,J){return(J&&V.length?`
`:"")+V})):R.push(O[0])}),_=R,h=ah.apply(this,[y,r])}for(a=0,c=_.length;a<c;a++){var P=0;if(n=_[a],h&&n[0]==`
`&&(n=n.substr(1),P=1),S+p+(w=(o=js.apply(this,[n,r])).reduce(function(O,V){return O+V},0))>t||P){if(w>t){for(l=sh.apply(this,[n,o,t-(S+p),t]),d.push(l.shift()),d=[l.pop()];l.length;)x.push([l.shift()]);w=o.slice(n.length-(d[0]?d[0].length:0)).reduce(function(O,V){return O+V},0)}else d=[n];x.push(d),S=w+h,p=k}else d.push(n),S+=p+w,p=k}return f=h?function(O,V){return(V?y:"")+O.join(" ")}:function(O){return O.join(" ")},x.map(f)},Vo.splitTextToSize=function(e,t,r){var n,o=(r=r||{}).fontSize||this.internal.getFontSize(),a=(function(d){if(d.widths&&d.kerning)return{widths:d.widths,kerning:d.kerning};var x=this.internal.getFont(d.fontName,d.fontStyle),S="Unicode";return x.metadata[S]?{widths:x.metadata[S].widths||{0:1},kerning:x.metadata[S].kerning||{}}:{font:x.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var c=1*this.internal.scaleFactor*t/o;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0,a.lineIndent=r.lineIndent;var l,h,f=[];for(l=0,h=n.length;l<h;l++)f=f.concat(lh.apply(this,[n[l],c,a]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},o={},a=0;a<16;a++)n[r[a]]=t[a],o[t[a]]=r[a];var c=function(S){return"0x"+parseInt(S,10).toString(16)},l=e.__fontmetrics__.compress=function(S){var p,w,_,k,y=["{"];for(var R in S){if(p=S[R],isNaN(parseInt(R,10))?w="'"+R+"'":(R=parseInt(R,10),w=(w=c(R).slice(2)).slice(0,-1)+o[w.slice(-1)]),typeof p=="number")p<0?(_=c(p).slice(3),k="-"):(_=c(p).slice(2),k=""),_=k+_.slice(0,-1)+o[_.slice(-1)];else{if(Et(p)!=="object")throw new Error("Don't know what to do with value type "+Et(p)+".");_=l(p)}y.push(w+_)}return y.push("}"),y.join("")},h=e.__fontmetrics__.uncompress=function(S){if(typeof S!="string")throw new Error("Invalid argument passed to uncompress.");for(var p,w,_,k,y={},R=1,P=y,O=[],V="",J="",K=S.length-1,X=1;X<K;X+=1)(k=S[X])=="'"?p?(_=p.join(""),p=void 0):p=[]:p?p.push(k):k=="{"?(O.push([P,_]),P={},_=void 0):k=="}"?((w=O.pop())[0][w[1]]=P,_=void 0,P=w[0]):k=="-"?R=-1:_===void 0?n.hasOwnProperty(k)?(V+=n[k],_=parseInt(V,16)*R,R=1,V=""):V+=k:n.hasOwnProperty(k)?(J+=n[k],P[_]=parseInt(J,16)*R,R=1,_=void 0,J=""):J+=k;return y},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},d={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},x={Unicode:{"Courier-Oblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(S){var p=S.font,w=x.Unicode[p.postScriptName];w&&(p.metadata.Unicode={},p.metadata.Unicode.widths=w.widths,p.metadata.Unicode.kerning=w.kerning);var _=d.Unicode[p.postScriptName];_&&(p.metadata.Unicode.encoding=_,p.encoding=_.codePages[0])}])}(Ge.API),function(e){var t=function(r){for(var n=r.length,o=new Uint8Array(n),a=0;a<n;a++)o[a]=r.charCodeAt(a);return o};e.API.events.push(["addFont",function(r){var n=void 0,o=r.font,a=r.instance;if(!o.isStandardFont){if(a===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");if(typeof(n=a.existsFileInVFS(o.postScriptName)===!1?a.loadFile(o.postScriptName):a.getFileFromVFS(o.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");(function(c,l){l=/^\x00\x01\x00\x00/.test(l)?t(l):t(zs(l)),c.metadata=e.API.TTFFont.open(l),c.metadata.Unicode=c.metadata.Unicode||{encoding:{},kerning:{},widths:[]},c.metadata.glyIdsUsed=[0]})(o,n)}}])}(Ge),Ge.API.addSvgAsImage=function(e,t,r,n,o,a,c,l){if(isNaN(t)||isNaN(r))throw Ot.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw Ot.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=n,h.height=o;var f=h.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,h.width,h.height);var d={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},x=this;return(nt.canvg?Promise.resolve(nt.canvg):Ol(()=>import("./index.es.BlWDhK84.js"),__vite__mapDeps([0,1,2,3]))).catch(function(S){return Promise.reject(new Error("Could not load canvg: "+S))}).then(function(S){return S.default?S.default:S}).then(function(S){return S.fromString(f,e,d)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(S){return S.render(d)}).then(function(){x.addImage(h.toDataURL("image/jpeg",1),t,r,n,o,c,l)})},Ge.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var o=0;o<this.internal.pages[n].length;o++)this.internal.pages[n][o]=this.internal.pages[n][o].replace(t,r);return this},Ge.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,o,a,c={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},l=Object.keys(c),h=[],f=0,d=0,x=0;function S(w,_){var k,y=!1;for(k=0;k<w.length;k+=1)w[k]===_&&(y=!0);return y}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(c)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var p=l.length;for(x=0;x<p;x+=1)r[l[x]].value=r[l[x]].defaultValue,r[l[x]].explicitSet=!1}if(Et(e)==="object"){for(o in e)if(a=e[o],S(l,o)&&a!==void 0){if(r[o].type==="boolean"&&typeof a=="boolean")r[o].value=a;else if(r[o].type==="name"&&S(r[o].valueSet,a))r[o].value=a;else if(r[o].type==="integer"&&Number.isInteger(a))r[o].value=a;else if(r[o].type==="array"){for(f=0;f<a.length;f+=1)if(n=!0,a[f].length===1&&typeof a[f][0]=="number")h.push(String(a[f]-1));else if(a[f].length>1){for(d=0;d<a[f].length;d+=1)typeof a[f][d]!="number"&&(n=!1);n===!0&&h.push([a[f][0]-1,a[f][1]-1].join(" "))}r[o].value="["+h.join(" ")+"]"}else r[o].value=r[o].defaultValue;r[o].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var w,_=[];for(w in r)r[w].explicitSet===!0&&(r[w].type==="name"?_.push("/"+w+" /"+r[w].value):_.push("/"+w+" "+r[w].value));_.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+_.join(`
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
end`};t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,d=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="Identity-H"){for(var x=l.metadata.Unicode.widths,S=l.metadata.subset.encode(l.metadata.glyIdsUsed,1),p="",w=0;w<S.length;w++)p+=String.fromCharCode(S[w]);var _=f();d({data:p,addLength1:!0,objectId:_}),h("endobj");var k=f();d({data:n(l.metadata.toUnicode),addLength1:!0,objectId:k}),h("endobj");var y=f();h("<<"),h("/Type /FontDescriptor"),h("/FontName /"+Go(l.fontName)),h("/FontFile2 "+_+" 0 R"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/Flags "+l.metadata.flags),h("/StemV "+l.metadata.stemV),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h(">>"),h("endobj");var R=f();h("<<"),h("/Type /Font"),h("/BaseFont /"+Go(l.fontName)),h("/FontDescriptor "+y+" 0 R"),h("/W "+e.API.PDFObject.convert(x)),h("/CIDToGIDMap /Identity"),h("/DW 1000"),h("/Subtype /CIDFontType2"),h("/CIDSystemInfo"),h("<<"),h("/Supplement 0"),h("/Registry (Adobe)"),h("/Ordering ("+l.encoding+")"),h(">>"),h(">>"),h("endobj"),l.objectNumber=f(),h("<<"),h("/Type /Font"),h("/Subtype /Type0"),h("/ToUnicode "+k+" 0 R"),h("/BaseFont /"+Go(l.fontName)),h("/Encoding /"+l.encoding),h("/DescendantFonts ["+R+" 0 R]"),h(">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]),t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,d=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="WinAnsiEncoding"){for(var x=l.metadata.rawData,S="",p=0;p<x.length;p++)S+=String.fromCharCode(x[p]);var w=f();d({data:S,addLength1:!0,objectId:w}),h("endobj");var _=f();d({data:n(l.metadata.toUnicode),addLength1:!0,objectId:_}),h("endobj");var k=f();h("<<"),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h("/StemV "+l.metadata.stemV),h("/Type /FontDescriptor"),h("/FontFile2 "+w+" 0 R"),h("/Flags 96"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/FontName /"+Go(l.fontName)),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h(">>"),h("endobj"),l.objectNumber=f();for(var y=0;y<l.metadata.hmtx.widths.length;y++)l.metadata.hmtx.widths[y]=parseInt(l.metadata.hmtx.widths[y]*(1e3/l.metadata.head.unitsPerEm));h("<</Subtype/TrueType/Type/Font/ToUnicode "+_+" 0 R/BaseFont/"+Go(l.fontName)+"/FontDescriptor "+k+" 0 R/Encoding/"+l.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(l.metadata.hmtx.widths)+">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]);var o=function(a){var c,l=a.text||"",h=a.x,f=a.y,d=a.options||{},x=a.mutex||{},S=x.pdfEscape,p=x.activeFontKey,w=x.fonts,_=p,k="",y=0,R="",P=w[_].encoding;if(w[_].encoding!=="Identity-H")return{text:l,x:h,y:f,options:d,mutex:x};for(R=l,_=p,Array.isArray(l)&&(R=l[0]),y=0;y<R.length;y+=1)w[_].metadata.hasOwnProperty("cmap")&&(c=w[_].metadata.cmap.unicode.codeMap[R[y].charCodeAt(0)]),c||R[y].charCodeAt(0)<256&&w[_].metadata.hasOwnProperty("Unicode")?k+=R[y]:k+="";var O="";return parseInt(_.slice(1))<14||P==="WinAnsiEncoding"?O=S(k,_).split("").map(function(V){return V.charCodeAt(0).toString(16)}).join(""):P==="Identity-H"&&(O=r(k,w[_])),x.isHex=!0,{text:O,x:h,y:f,options:d,mutex:x}};t.events.push(["postProcessText",function(a){var c=a.text||"",l=[],h={text:c,x:a.x,y:a.y,options:a.options,mutex:a.mutex};if(Array.isArray(c)){var f=0;for(f=0;f<c.length;f+=1)Array.isArray(c[f])&&c[f].length===3?l.push([o(Object.assign({},h,{text:c[f][0]})).text,c[f][1],c[f][2]]):l.push(o(Object.assign({},h,{text:c[f]})).text);a.text=l}else a.text=o(Object.assign({},h,{text:c})).text}])}(Ge),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Ge.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var o,a,c,l,h,f,d,x=t,S=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],p=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],w={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},_={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},k=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],y=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),R=!1,P=0;this.__bidiEngine__={};var O=function(L){var M=L.charCodeAt(),W=M>>8,q=_[W];return q!==void 0?x[256*q+(255&M)]:W===252||W===253?"AL":y.test(W)?"L":W===8?"R":"N"},V=function(L){for(var M,W=0;W<L.length;W++){if((M=O(L.charAt(W)))==="L")return!1;if(M==="R")return!0}return!1},J=function(L,M,W,q){var ie,se,ce,oe,pe=M[q];switch(pe){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":R=!1;break;case"N":case"AN":break;case"EN":R&&(pe="AN");break;case"AL":R=!0,pe="R";break;case"WS":case"BN":pe="N";break;case"CS":q<1||q+1>=M.length||(ie=W[q-1])!=="EN"&&ie!=="AN"||(se=M[q+1])!=="EN"&&se!=="AN"?pe="N":R&&(se="AN"),pe=se===ie?se:"N";break;case"ES":pe=(ie=q>0?W[q-1]:"B")==="EN"&&q+1<M.length&&M[q+1]==="EN"?"EN":"N";break;case"ET":if(q>0&&W[q-1]==="EN"){pe="EN";break}if(R){pe="N";break}for(ce=q+1,oe=M.length;ce<oe&&M[ce]==="ET";)ce++;pe=ce<oe&&M[ce]==="EN"?"EN":"N";break;case"NSM":if(c&&!l){for(oe=M.length,ce=q+1;ce<oe&&M[ce]==="NSM";)ce++;if(ce<oe){var ke=L[q],ye=ke>=1425&&ke<=2303||ke===64286;if(ie=M[ce],ye&&(ie==="R"||ie==="AL")){pe="R";break}}}pe=q<1||(ie=M[q-1])==="B"?"N":W[q-1];break;case"B":R=!1,o=!0,pe=P;break;case"S":a=!0,pe="N"}return pe},K=function(L,M,W){var q=L.split("");return W&&X(q,W,{hiLevel:P}),q.reverse(),M&&M.reverse(),q.join("")},X=function(L,M,W){var q,ie,se,ce,oe,pe=-1,ke=L.length,ye=0,I=[],$=P?p:S,Y=[];for(R=!1,o=!1,a=!1,ie=0;ie<ke;ie++)Y[ie]=O(L[ie]);for(se=0;se<ke;se++){if(oe=ye,I[se]=J(L,Y,I,se),q=240&(ye=$[oe][w[I[se]]]),ye&=15,M[se]=ce=$[ye][5],q>0)if(q===16){for(ie=pe;ie<se;ie++)M[ie]=1;pe=-1}else pe=-1;if($[ye][6])pe===-1&&(pe=se);else if(pe>-1){for(ie=pe;ie<se;ie++)M[ie]=ce;pe=-1}Y[se]==="B"&&(M[se]=0),W.hiLevel|=ce}a&&function(ee,ne,ue){for(var ge=0;ge<ue;ge++)if(ee[ge]==="S"){ne[ge]=P;for(var me=ge-1;me>=0&&ee[me]==="WS";me--)ne[me]=P}}(Y,M,ke)},T=function(L,M,W,q,ie){if(!(ie.hiLevel<L)){if(L===1&&P===1&&!o)return M.reverse(),void(W&&W.reverse());for(var se,ce,oe,pe,ke=M.length,ye=0;ye<ke;){if(q[ye]>=L){for(oe=ye+1;oe<ke&&q[oe]>=L;)oe++;for(pe=ye,ce=oe-1;pe<ce;pe++,ce--)se=M[pe],M[pe]=M[ce],M[ce]=se,W&&(se=W[pe],W[pe]=W[ce],W[ce]=se);ye=oe}ye++}}},Z=function(L,M,W){var q=L.split(""),ie={hiLevel:P};return W||(W=[]),X(q,W,ie),function(se,ce,oe){if(oe.hiLevel!==0&&d)for(var pe,ke=0;ke<se.length;ke++)ce[ke]===1&&(pe=k.indexOf(se[ke]))>=0&&(se[ke]=k[pe+1])}(q,W,ie),T(2,q,M,W,ie),T(1,q,M,W,ie),q.join("")};return this.__bidiEngine__.doBidiReorder=function(L,M,W){if(function(ie,se){if(se)for(var ce=0;ce<ie.length;ce++)se[ce]=ce;l===void 0&&(l=V(ie)),f===void 0&&(f=V(ie))}(L,M),c||!h||f)if(c&&h&&l^f)P=l?1:0,L=K(L,M,W);else if(!c&&h&&f)P=l?1:0,L=Z(L,M,W),L=K(L,M);else if(!c||l||h||f){if(c&&!h&&l^f)L=K(L,M),l?(P=0,L=Z(L,M,W)):(P=1,L=Z(L,M,W),L=K(L,M));else if(c&&l&&!h&&f)P=1,L=Z(L,M,W),L=K(L,M);else if(!c&&!h&&l^f){var q=d;l?(P=1,L=Z(L,M,W),P=0,d=!1,L=Z(L,M,W),d=q):(P=0,L=Z(L,M,W),L=K(L,M),P=1,d=!1,L=Z(L,M,W),d=q,L=K(L,M))}}else P=0,L=Z(L,M,W);else P=l?1:0,L=Z(L,M,W);return L},this.__bidiEngine__.setOptions=function(L){L&&(c=L.isInputVisual,h=L.isOutputVisual,l=L.isInputRtl,f=L.isOutputRtl,d=L.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var o=n.text;n.x,n.y;var a=n.options||{};n.mutex,a.lang;var c=[];if(a.isInputVisual=typeof a.isInputVisual!="boolean"||a.isInputVisual,r.setOptions(a),Object.prototype.toString.call(o)==="[object Array]"){var l=0;for(c=[],l=0;l<o.length;l+=1)Object.prototype.toString.call(o[l])==="[object Array]"?c.push([r.doBidiReorder(o[l][0]),o[l][1],o[l][2]]):c.push([r.doBidiReorder(o[l])]);n.text=c}else n.text=r.doBidiReorder(o);r.setOptions({isInputVisual:!0})}])}(Ge),Ge.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new qi(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new Rv(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new wv(this.contents),this.head=new Sv(this),this.name=new Lv(this),this.cmap=new w0(this),this.toUnicode={},this.hhea=new _v(this),this.maxp=new Nv(this),this.hmtx=new Iv(this),this.post=new Av(this),this.os2=new Cv(this),this.loca=new jv(this),this.glyf=new Ev(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,o,a;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var c,l,h,f;for(f=[],c=0,l=(h=this.bbox).length;c<l;c++)t=h[c],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(o=this.post.italic_angle),32768&(r=o>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(a=this.familyClass)===1||a===2||a===3||a===4||a===5||a===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var o,a,c,l;for(c=0,a=0,l=(t=""+t).length;0<=l?a<l:a>l;a=0<=l?++a:--a)o=t.charCodeAt(a),c+=this.widthOfGlyph(this.characterToGlyph(o))+n*(1e3/r)||0;return c*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var En,qi=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,o;for(o=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)o.push(this.writeByte(t.charCodeAt(r)));return o},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,o,a,c,l,h;return t=this.readByte(),r=this.readByte(),n=this.readByte(),o=this.readByte(),a=this.readByte(),c=this.readByte(),l=this.readByte(),h=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^o)+16777216*(255^a)+65536*(255^c)+256*(255^l)+(255^h)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*o+16777216*a+65536*c+256*l+h},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,o,a;for(a=[],n=0,o=t.length;n<o;n++)r=t[n],a.push(this.writeByte(r));return a},e}(),wv=function(){var e;function t(r){var n,o,a;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},o=0,a=this.tableCount;0<=a?o<a:o>a;o=0<=a?++o:--o)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,o,a,c,l,h,f,d,x,S,p,w,_;for(_ in p=Object.keys(r).length,h=Math.log(2),x=16*Math.floor(Math.log(p)/h),c=Math.floor(x/h),d=16*p-x,(o=new qi).writeInt(this.scalarType),o.writeShort(p),o.writeShort(x),o.writeShort(c),o.writeShort(d),a=16*p,f=o.pos+a,l=null,w=[],r)for(S=r[_],o.writeString(_),o.writeInt(e(S)),o.writeInt(f),o.writeInt(S.length),w=w.concat(S),_==="head"&&(l=f),f+=S.length;f%4;)w.push(0),f++;return o.write(w),n=2981146554-e(o.data),o.pos=l+8,o.writeUInt32(n),o.data},e=function(r){var n,o,a,c;for(r=y0.call(r);r.length%4;)r.push(0);for(a=new qi(r),o=0,n=0,c=r.length;n<c;n=n+=4)o+=a.readUInt32();return 4294967295&o},t}(),yv={}.hasOwnProperty,$n=function(e,t){for(var r in t)yv.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};En=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var Sv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new qi).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),vh=function(){function e(t,r){var n,o,a,c,l,h,f,d,x,S,p,w,_,k,y,R,P;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),x=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(h=0;h<256;++h)this.codeMap[h]=t.readByte();break;case 4:for(p=t.readUInt16(),S=p/2,t.pos+=6,a=function(){var O,V;for(V=[],h=O=0;0<=S?O<S:O>S;h=0<=S?++O:--O)V.push(t.readUInt16());return V}(),t.pos+=2,_=function(){var O,V;for(V=[],h=O=0;0<=S?O<S:O>S;h=0<=S?++O:--O)V.push(t.readUInt16());return V}(),f=function(){var O,V;for(V=[],h=O=0;0<=S?O<S:O>S;h=0<=S?++O:--O)V.push(t.readUInt16());return V}(),d=function(){var O,V;for(V=[],h=O=0;0<=S?O<S:O>S;h=0<=S?++O:--O)V.push(t.readUInt16());return V}(),o=(this.length-t.pos+this.offset)/2,l=function(){var O,V;for(V=[],h=O=0;0<=o?O<o:O>o;h=0<=o?++O:--O)V.push(t.readUInt16());return V}(),h=y=0,P=a.length;y<P;h=++y)for(k=a[h],n=R=w=_[h];w<=k?R<=k:R>=k;n=w<=k?++R:--R)d[h]===0?c=n+f[h]:(c=l[d[h]/2+(n-w)-(S-h)]||0)!==0&&(c+=f[h]),this.codeMap[n]=65535&c}t.pos=x}return e.encode=function(t,r){var n,o,a,c,l,h,f,d,x,S,p,w,_,k,y,R,P,O,V,J,K,X,T,Z,L,M,W,q,ie,se,ce,oe,pe,ke,ye,I,$,Y,ee,ne,ue,ge,me,Se,Ie,je;switch(q=new qi,c=Object.keys(t).sort(function(Pe,ve){return Pe-ve}),r){case"macroman":for(_=0,k=function(){var Pe=[];for(w=0;w<256;++w)Pe.push(0);return Pe}(),R={0:0},a={},ie=0,pe=c.length;ie<pe;ie++)R[me=t[o=c[ie]]]==null&&(R[me]=++_),a[o]={old:t[o],new:R[t[o]]},k[o]=R[t[o]];return q.writeUInt16(1),q.writeUInt16(0),q.writeUInt32(12),q.writeUInt16(0),q.writeUInt16(262),q.writeUInt16(0),q.write(k),{charMap:a,subtable:q.data,maxGlyphID:_+1};case"unicode":for(M=[],x=[],P=0,R={},n={},y=f=null,se=0,ke=c.length;se<ke;se++)R[V=t[o=c[se]]]==null&&(R[V]=++P),n[o]={old:V,new:R[V]},l=R[V]-o,y!=null&&l===f||(y&&x.push(y),M.push(o),f=l),y=o;for(y&&x.push(y),x.push(65535),M.push(65535),Z=2*(T=M.length),X=2*Math.pow(Math.log(T)/Math.LN2,2),S=Math.log(X/2)/Math.LN2,K=2*T-X,h=[],J=[],p=[],w=ce=0,ye=M.length;ce<ye;w=++ce){if(L=M[w],d=x[w],L===65535){h.push(0),J.push(0);break}if(L-(W=n[L].new)>=32768)for(h.push(0),J.push(2*(p.length+T-w)),o=oe=L;L<=d?oe<=d:oe>=d;o=L<=d?++oe:--oe)p.push(n[o].new);else h.push(W-L),J.push(0)}for(q.writeUInt16(3),q.writeUInt16(1),q.writeUInt32(12),q.writeUInt16(4),q.writeUInt16(16+8*T+2*p.length),q.writeUInt16(0),q.writeUInt16(Z),q.writeUInt16(X),q.writeUInt16(S),q.writeUInt16(K),ue=0,I=x.length;ue<I;ue++)o=x[ue],q.writeUInt16(o);for(q.writeUInt16(0),ge=0,$=M.length;ge<$;ge++)o=M[ge],q.writeUInt16(o);for(Se=0,Y=h.length;Se<Y;Se++)l=h[Se],q.writeUInt16(l);for(Ie=0,ee=J.length;Ie<ee;Ie++)O=J[Ie],q.writeUInt16(O);for(je=0,ne=p.length;je<ne;je++)_=p[je],q.writeUInt16(_);return{charMap:n,subtable:q.data,maxGlyphID:P+1}}},e}(),w0=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,o;for(t.pos=this.offset,this.version=t.readUInt16(),o=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=o?n<o:n>o;n=0<=o?++n:--n)r=new vh(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,o;return r==null&&(r="macroman"),n=vh.encode(t,r),(o=new qi).writeUInt16(0),o.writeUInt16(1),n.table=o.data.concat(n.subtable),n},e}(),_v=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),Cv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),Av=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var a;for(n=t.readUInt16(),this.glyphNameIndex=[],a=0;0<=n?a<n:a>n;a=0<=n?++a:--a)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)r=t.readByte(),o.push(this.names.push(t.readString(r)));return o;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var c,l,h;for(h=[],a=c=0,l=this.file.maxp.numGlyphs;0<=l?c<l:c>l;a=0<=l?++c:--c)h.push(t.readUInt32());return h}).call(this)}},e}(),kv=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},Lv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,o,a,c,l,h,f,d,x,S;for(t.pos=this.offset,t.readShort(),r=t.readShort(),l=t.readShort(),n=[],a=0;0<=r?a<r:a>r;a=0<=r?++a:--a)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+l+t.readShort()});for(h={},a=d=0,x=n.length;d<x;a=++d)o=n[a],t.pos=o.offset,f=t.readString(o.length),c=new kv(f,o),h[S=o.nameID]==null&&(h[S]=[]),h[o.nameID].push(c);this.strings=h,this.copyright=h[0],this.fontFamily=h[1],this.fontSubfamily=h[2],this.uniqueSubfamily=h[3],this.fontName=h[4],this.version=h[5];try{this.postscriptName=h[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=h[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=h[7],this.manufacturer=h[8],this.designer=h[9],this.description=h[10],this.vendorUrl=h[11],this.designerUrl=h[12],this.license=h[13],this.licenseUrl=h[14],this.preferredFamily=h[15],this.preferredSubfamily=h[17],this.compatibleFull=h[18],this.sampleText=h[19]},e}(),Nv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),Iv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,o,a,c,l,h;for(t.pos=this.offset,this.metrics=[],r=0,l=this.file.hhea.numberOfMetrics;0<=l?r<l:r>l;r=0<=l?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(o=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,d;for(d=[],r=f=0;0<=o?f<o:f>o;r=0<=o?++f:--f)d.push(t.readInt16());return d}(),this.widths=(function(){var f,d,x,S;for(S=[],f=0,d=(x=this.metrics).length;f<d;f++)a=x[f],S.push(a.advance);return S}).call(this),n=this.widths[this.widths.length-1],h=[],r=c=0;0<=o?c<o:c>o;r=0<=o?++c:--c)h.push(this.widths.push(n));return h},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),y0=[].slice,Ev=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,o,a,c,l,h,f,d,x;return t in this.cache?this.cache[t]:(a=this.file.loca,r=this.file.contents,n=a.indexOf(t),(o=a.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,c=(l=new qi(r.read(o))).readShort(),f=l.readShort(),x=l.readShort(),h=l.readShort(),d=l.readShort(),this.cache[t]=c===-1?new Pv(l,f,x,h,d):new Tv(l,c,f,x,h,d),this.cache[t]))},e.prototype.encode=function(t,r,n){var o,a,c,l,h;for(c=[],a=[],l=0,h=r.length;l<h;l++)o=t[r[l]],a.push(c.length),o&&(c=c.concat(o.encode(n)));return a.push(c.length),{table:c,offsets:a}},e}(),Tv=function(){function e(t,r,n,o,a,c){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=o,this.xMax=a,this.yMax=c,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),Pv=function(){function e(t,r,n,o,a){var c,l;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=o,this.yMax=a,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],c=this.raw;l=c.readShort(),this.glyphOffsets.push(c.pos),this.glyphIDs.push(c.readUInt16()),32&l;)c.pos+=1&l?4:2,128&l?c.pos+=8:64&l?c.pos+=4:8&l&&(c.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new qi(y0.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),jv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return $n(e,En),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=2)a.push(2*t.readUInt16());return a}).call(this):(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=4)a.push(t.readUInt32());return a}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),o=0,a=0,c=0;c<n.length;++c)if(n[c]=o,a<r.length&&r[a]==c){++a,n[c]=o;var l=this.offsets[c],h=this.offsets[c+1]-l;h>0&&(o+=h)}for(var f=new Array(4*n.length),d=0;d<n.length;++d)f[4*d+3]=255&n[d],f[4*d+2]=(65280&n[d])>>8,f[4*d+1]=(16711680&n[d])>>16,f[4*d]=(4278190080&n[d])>>24;return f},e}(),Rv=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,o,a;for(r in o=this.font.cmap.tables[0].codeMap,t={},a=this.subset)n=a[r],t[r]=o[n];return t},e.prototype.glyphsFor=function(t){var r,n,o,a,c,l,h;for(o={},c=0,l=t.length;c<l;c++)o[a=t[c]]=this.font.glyf.glyphFor(a);for(a in r=[],o)(n=o[a])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(a in h=this.glyphsFor(r))n=h[a],o[a]=n;return o},e.prototype.encode=function(t,r){var n,o,a,c,l,h,f,d,x,S,p,w,_,k,y;for(o in n=w0.encode(this.generateCmap(),"unicode"),c=this.glyphsFor(t),p={0:0},y=n.charMap)p[(h=y[o]).old]=h.new;for(w in S=n.maxGlyphID,c)w in p||(p[w]=S++);return d=function(R){var P,O;for(P in O={},R)O[R[P]]=P;return O}(p),x=Object.keys(d).sort(function(R,P){return R-P}),_=function(){var R,P,O;for(O=[],R=0,P=x.length;R<P;R++)l=x[R],O.push(d[l]);return O}(),a=this.font.glyf.encode(c,_,p),f=this.font.loca.encode(a.offsets,_),k={cmap:this.font.cmap.raw(),glyf:a.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(k["OS/2"]=this.font.os2.raw()),this.font.directory.encode(k)},e}();Ge.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,o,a,c;if(Array.isArray(r))return"["+function(){var l,h,f;for(f=[],l=0,h=r.length;l<h;l++)n=r[l],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(o in a=["<<"],r)c=r[o],a.push("/"+o+" "+t.convert(c));return a.push(">>"),a.join(`
`)}return""+r},t}();const Ov=["ab67616d000082c1","ab67616d0000b273"];async function Mv(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function Fv(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function Dv(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=Fv(e);if(!t)return e;for(const r of Ov){const n=`https://i.scdn.co/image/${r}${t}`;if(await Mv(n))return n}return e}function zv(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function Bv(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const Uv=z.div`
    width: 80%;
    margin-inline: auto;
`,Hv=z.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,qv=z(i2)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,$v=z.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Vv=z.div`
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
`,Wv=z.img`
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
`,Gv=z.div`
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
`,Yv=z(b2)`
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
`,Xv=z.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Jv=z.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,bh=z.div`
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
`,Zv=z.div`
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
`,Qv=z.div`
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
`,Kv=z.div`
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
`,xh=z.button`
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
`,e8=z.textarea`
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
`,t8=z.div`
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
`,nc=z.div`
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
`,ic=z.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`;z(ym)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;const r8=z(zv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,n8=z(Bv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,i8=z(qp)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Ou`
                  animation: ${hr`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Ou`
                  animation: ${hr`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,o8=z.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,a8=z.p`
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
`,s8=z(pp)`
    font-size: 3em;
`,Yc=F.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:o},a)=>{const{t:c}=sr(),l=F.useRef(null),h=F.useRef(null),[f,d]=F.useState(""),[x,S]=F.useState(""),[p,w]=F.useState("200"),[_,k]=F.useState("110"),[y,R]=F.useState("50"),[P,O]=F.useState((n==null?void 0:n.marginTop)??""),[V,J]=F.useState(160),[K,X]=F.useState((n==null?void 0:n.marginCover)??0),[T,Z]=F.useState((n==null?void 0:n.marginBackground)??0),[L,M]=F.useState("#5900ff"),[W,q]=F.useState("#ff9100"),[ie,se]=F.useState("#ff0000"),[ce,oe]=F.useState("#00ff40"),[pe,ke]=F.useState("#2600ff"),[ye,I]=F.useState(!0),[$,Y]=F.useState((n==null?void 0:n.useFade)??!0),[ee,ne]=F.useState((n==null?void 0:n.showTracklist)??!1),[ue,ge]=F.useState(""),[me,Se]=F.useState(""),[Ie,je]=F.useState(""),[Pe,ve]=F.useState(null),[G,mt]=F.useState("information");function st(de){Cr(!0),d(de.albumName||""),S(de.artistsName||""),w(de.titleSize||"200"),k(de.artistsSize||"110"),R(de.tracksSize||"50"),O(de.marginTop||""),J(de.marginSide||160),X(de.marginCover||0),Z(de.marginBackground||0),M(de.backgroundColor||"#5900ff"),q(de.textColor||"#ff9100"),se(de.color1||"#ff0000"),oe(de.color2||"#00ff40"),ke(de.color3||"#2600ff"),de.coverZoom!==void 0?Ke(de.coverZoom):de.marginCover!==void 0?Ke(-de.marginCover/11):Ke(0),Tn(de.coverHorizontalPosition||0),ln(de.coverVerticalPosition||0),Je(de.coverBlur||0),I(de.useWatermark!==void 0?de.useWatermark:!0),Y(de.useFade!==void 0?de.useFade:!0),ne(de.showTracklist!==void 0?de.showTracklist:!1),Le(de.useUncompressed!==void 0?de.useUncompressed:!1),ge(de.albumCover||""),Se(de.uncompressedAlbumCover||""),je(de.customFont||""),Ue(de.tracklist||""),tt(de.titleRelease||""),Ct(de.releaseDate||""),He(de.titleRuntime||""),qe(de.runtime||""),Xn()}F.useEffect(()=>{if(Pe){const de=new FileReader;de.onload=async Xe=>{const Gt="CustomFont",yn=new FontFace(Gt,Xe.target.result);try{const Ur=await yn.load();document.fonts.add(Ur),je(Gt)}catch(Ur){console.error("Erro ao carregar fonte:",Ur)}},de.readAsArrayBuffer(Pe)}},[Pe]),F.useEffect(()=>{o&&st(o)},[o]);const[Ye,Le]=F.useState(!1),[Ve,Re]=F.useState("Original"),[et,Ue]=F.useState(""),[bt,tt]=F.useState(""),[it,Ct]=F.useState(""),[lt,He]=F.useState(""),[Qe,qe]=F.useState(""),[Pt,xt]=F.useState(!1),[De,ct]=F.useState(null),[wt,Ze]=F.useState(null),[gt,ot]=F.useState(!1),[Ht,Qt]=F.useState(null),[At,Ke]=F.useState(0),[St,Tn]=F.useState(0),[fr,ln]=F.useState(0),[Wr,Je]=F.useState(0),[cn,un]=F.useState(!1),[jr,zr]=F.useState(!1),[Dt,Kt]=F.useState(!1),[lr,Vn]=F.useState(!1),[hn,Cr]=F.useState(!1);F.useEffect(()=>{if(!hn){const de=-At*10;X(de)}},[At,hn]);const fn=de=>{w(de.target.value),un(!0)},Gr=(de,Xe)=>{Xe&&!jr?(w(de),zr(!0)):cn||w(de)},Yr=de=>{R(de.target.value),Kt(!0)},Br=(de,Xe)=>{Xe&&!lr?(R(de),Vn(!0)):Dt||R(de)},Wn={albumCover:ue,uncompressedAlbumCover:me,useUncompressed:Ye,albumName:f,artistsName:x,titleSize:p,artistsSize:_,tracksSize:y,marginTop:P,marginSide:V,marginCover:K,marginBackground:T,titleRelease:bt,releaseDate:it,titleRuntime:lt,runtime:Qe,backgroundColor:L,textColor:W,useWatermark:ye,useFade:$,showTracklist:ee,tracklist:et,color1:ie,color2:ce,color3:pe,albumID:e,coverZoom:At,coverHorizontalPosition:St,coverVerticalPosition:fr,coverBlur:Wr,userAdjustedTitleSize:cn,initialTitleSizeSet:jr,userAdjustedTracksSize:Dt,initialTracksSizeSet:lr},[Ar,Gn]=F.useState(null),[Pn,Yn]=F.useState(!1),[vi,$i]=F.useState(!1),[Vi,Wi]=F.useState(!1),[Ao,Rr]=F.useState(!1),[Gi,bi]=F.useState(!1);F.useEffect(()=>{if(Pn){$i(!1);const de=setTimeout(()=>{bi(!0)},100);return()=>clearTimeout(de)}else bi(!1)},[Pn]);const Yi=de=>{Gn(de),Yn(!1),Rr(!1),s5(f,x),setTimeout(()=>{bi(!1),setTimeout(()=>{$i(!0)},300)},100)},Xn=()=>{un(!1),Kt(!1),$i(!1),requestAnimationFrame(()=>{if(Rr(!0),Yn(!0),l.current){const de=l.current.getBoundingClientRect(),Xe=de.top+window.scrollY,Gt=de.height,Ur=(window.innerHeight-Gt)/2;window.scrollTo({top:Xe-Ur,behavior:"smooth"})}})},ko=de=>{ge(URL.createObjectURL(de)),Le(!1),Se(""),Re(de.name),Cr(!1)},xi=()=>{if(!Ar)return;const de=document.createElement("a");de.href=Ar,de.download=`Posterfy - ${f}.png`,de.click(),qu(f,"poster",x)},Jn=()=>{if(!h.current)return;const de=h.current.getCanvas();if(!de)return;const Xe=new Ge({orientation:"portrait",unit:"mm",format:"a4",compress:!1}),Gt=de.toDataURL("image/jpeg",1);Xe.addImage(Gt,"JPEG",0,0,210,297,void 0,"FAST"),Xe.save(`Posterfy - ${f}.pdf`),qu(f,"poster_pdf",x)};function Zn(de,Xe){ct(de),Ze(Xe),xt(!0)}function $t(){xt(!1)}function Lo(de){Qt(de),ot(!0)}function Xi(){ot(!1)}const wn=()=>{const Xe=et.split(`
`).map(Gt=>Gt.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());Ue(Xe.join(`
`))},Qn=()=>{const Xe=et.split(`
`).map(Gt=>Gt.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());Ue(Xe.join(`
`))};async function Xr(de,Xe="us"){var Gt;try{let yn=`https://itunes.apple.com/search?term=${encodeURIComponent(de)}&country=${Xe}&entity=album&limit=1`,Ur=await fetch(yn);if(!Ur.ok)throw new Error(`HTTP Error: ${Ur.status}`);let Ji=await Ur.json();if(!((Gt=Ji.results)!=null&&Gt.length))return console.warn("No album data found."),Le(!1),!1;let Or=Ji.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Or.length===2?`https://a5.mzstatic.com/us/r1000/0/${Or[1].split("/").slice(0,-1).join("/")}`:""}catch(yn){return console.error("Error fetching album cover:",yn.message),""}}return F.useEffect(()=>{tt(c("EDITOR_ReleaseTitle")),He(c("EDITOR_RuntimeTitle"))},[c]),F.useEffect(()=>{const de=async()=>{var Xe;try{const Jr=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Or=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Jr}`}})).json(),dn=Or.artists.map(Kn=>Kn.name).join(", ");d(Or.name),S(dn);const Zi=(Xe=Or.images[0])==null?void 0:Xe.url,Io=await Dv(Zi);ge(Io),Ct(Or.release_date);const Eo=await Xr(Or.name+" "+dn);Se(Eo||Io);const ra=Or.tracks.items.reduce((Kn,yi)=>Kn+yi.duration_ms,0),wi=Math.floor(ra/1e3),jn=Math.floor(wi/60),Sn=Math.floor(jn/60),To=wi%60,Rn=jn%60,Qi=Sn>0?`${Sn}h ${Rn}min ${To}s`:`${Rn}min ${To}s`;qe(Qi);const rt=Or.tracks.items.map((Kn,yi)=>(yi===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&ne(!0),`${yi+1}. ${Kn.name}`));Ue(rt.join(`
`)),Wi(!0)}catch(Gt){console.error("Error trying to fetch album data:",Gt)}};o?(st(o),Wi(!0)):(Cr(!1),de())},[e]),F.useEffect(()=>{const de=Xe=>{Xe.ctrlKey&&Xe.key==="s"?(Xe.preventDefault(),Xn()):Xe.ctrlKey&&Xe.shiftKey&&Xe.key==="D"?(Xe.preventDefault(),Jn()):Xe.ctrlKey&&Xe.key==="d"&&(Xe.preventDefault(),xi())};return window.addEventListener("keydown",de),()=>{window.removeEventListener("keydown",de)}},[Ar,f,xi]),v.jsx(v.Fragment,{children:Vi?v.jsxs(Uv,{ref:a,children:[v.jsx(w2.Palette,{src:ue,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:de})=>(F.useEffect(()=>{de&&de.length>0&&!hn&&(M(de[0]),q(de[1]),se(de[2]),oe(de[3]),ke(de[4]),Xn())},[de]),null)}),v.jsxs(Hv,{onClick:t,children:[v.jsx(qv,{}),v.jsx($v,{children:c("GoBack")})]}),v.jsxs(Vv,{children:[v.jsx(E2,{ref:h,onImageReady:Yi,posterData:Wn,generatePoster:Pn,onTitleSizeAdjust:Gr,onTracksSizeAdjust:Br,customFont:Ie}),v.jsxs(Gv,{children:[Ar?v.jsx(Wv,{src:Ar,ref:l,visible:vi}):v.jsx(o8,{ref:l}),v.jsx(Yv,{visible:Gi})]}),v.jsxs(Xv,{children:[v.jsx(Bt,{animationDelay:50,children:v.jsxs(Jv,{children:[v.jsx(bh,{$active:G==="information",onClick:()=>mt("information"),children:c("EDITOR_InformationTab")}),v.jsx(bh,{$active:G==="tracklist",onClick:()=>mt("tracklist"),children:c("EDITOR_TracklistTab")})]})}),G==="information"?v.jsxs(Zv,{children:[v.jsx(Bt,{animationDelay:0,children:v.jsx(Mi,{title:c("EDITOR_AlbumName"),value:f,onChange:de=>d(de.target.value)})}),v.jsx(Bt,{animationDelay:50,children:v.jsx(Mi,{title:c("EDITOR_ArtistName"),value:x,onChange:de=>S(de.target.value)})}),v.jsx(Bt,{animationDelay:100,children:v.jsx(Mi,{title:c("EDITOR_TitleSize"),value:p,onChange:fn})}),v.jsx(Bt,{animationDelay:150,children:v.jsx(Mi,{title:c("EDITOR_ArtistSize"),value:_,onChange:de=>k(de.target.value)})}),v.jsx(Bt,{animationDelay:200,children:v.jsx(Mi,{title:c("EDITOR_TracksSize"),value:y,onChange:Yr})}),v.jsx(Bt,{animationDelay:250,children:v.jsx(Mi,{title:c("EDITOR_MarginTop"),value:P,onChange:de=>O(de.target.value)})}),v.jsx(Bt,{animationDelay:300,children:v.jsx(Mi,{title:c("EDITOR_MarginSide"),value:V,onChange:de=>J(de.target.value)})}),v.jsx(Bt,{animationDelay:350,children:v.jsx(a3,{title:c("EDITOR_CoverEditor"),text:c("EDITOR_EditCover"),onClick:Lo,icon:s8})}),v.jsx(Bt,{animationDelay:375,children:v.jsx(Mi,{title:c("EDITOR_MarginBackground"),value:T,onChange:de=>Z(de.target.value)})}),v.jsx(Bt,{animationDelay:400,children:v.jsx(Yu,{title:bt,value:it,onChangeTitle:de=>tt(de.target.value),onChangeDate:de=>Ct(de.target.value)})}),v.jsx(Bt,{animationDelay:450,children:v.jsx(Yu,{title:lt,value:Qe,onChangeTitle:de=>He(de.target.value),onChangeDate:de=>qe(de.target.value)})}),v.jsx(Bt,{animationDelay:500,children:v.jsx(Aa,{title:c("EDITOR_BackgroundColor"),value:L,onClick:de=>Zn(de,"backgroundColor")})}),v.jsx(Bt,{animationDelay:550,children:v.jsx(Aa,{title:c("EDITOR_TextColor"),value:W,onClick:de=>Zn(de,"textColor")})}),v.jsx(Bt,{animationDelay:600,children:v.jsx(Aa,{title:`${c("EDITOR_Color")} 1`,value:ie,onClick:de=>Zn(de,"color1")})}),v.jsx(Bt,{animationDelay:650,children:v.jsx(Aa,{title:`${c("EDITOR_Color")} 2`,value:ce,onClick:de=>Zn(de,"color2")})}),v.jsx(Bt,{animationDelay:700,children:v.jsx(Aa,{title:`${c("EDITOR_Color")} 3`,value:pe,onClick:de=>Zn(de,"color3")})}),v.jsx(Bt,{animationDelay:750,children:v.jsx(Cs,{title:c("EDITOR_Watermark"),value:ye,onChange:de=>I(de),text:c("EDITOR_WatermarkText")})}),v.jsx(Bt,{animationDelay:800,children:v.jsx(Cs,{title:c("EDITOR_Fade"),value:$,onChange:de=>Y(de),text:c("EDITOR_FadeText")})}),v.jsx(Bt,{animationDelay:850,children:v.jsx(Cs,{title:c("EDITOR_Uncompressed"),value:Ye,onChange:de=>Le(de),text:c("EDITOR_UncompressedText")})}),v.jsx(Bt,{animationDelay:900,children:v.jsx(Cs,{title:c("EDITOR_Tracklist"),value:ee,onChange:de=>ne(de),text:c("EDITOR_TracklistText")})}),v.jsx(Bt,{animationDelay:950,children:v.jsx(Qu,{title:c("EDITOR_Cover"),onChange:ko,text:Ve,accept:"image/png, image/jpg, image/jpeg",icon:s3})}),v.jsx(Bt,{animationDelay:1e3,children:v.jsx(Qu,{title:c("EDITOR_Font"),text:(Pe==null?void 0:Pe.name)||c("EDITOR_DefaultFont"),onChange:ve,accept:".ttf,.otf",icon:l3})})]}):v.jsxs(Qv,{children:[v.jsx(e8,{value:et,onChange:de=>Ue(de.target.value),placeholder:c("EDITOR_TracklistPlaceholder"),"data-lenis-prevent":!0}),v.jsxs(Kv,{children:[v.jsx(xh,{onClick:wn,children:c("EDITOR_RemoveParentheses")}),v.jsx(xh,{onClick:Qn,children:c("EDITOR_RemoveBrackets")})]})]}),v.jsx(Bt,{animationDelay:1050,children:v.jsxs(t8,{children:[v.jsxs(nc,{onClick:xi,children:[v.jsx(n8,{}),v.jsx(ic,{children:"PNG"})]}),v.jsxs(nc,{onClick:Jn,children:[v.jsx(r8,{}),v.jsx(ic,{children:"PDF"})]}),v.jsxs(nc,{apply:!0,onClick:Xn,children:[v.jsx(i8,{$spinning:Ao}),v.jsx(ic,{children:c("EDITOR_Apply")})]})]})}),v.jsx(Bt,{animationDelay:1100,children:v.jsxs(a8,{children:["Ctrl+S: ",c("EDITOR_Apply")," • Ctrl+D: PNG • Ctrl+Shift+D: PDF"]})})]})]}),Pt&&De&&wt&&Ru.createPortal(v.jsx(Dg,{DefaultColor:wt==="backgroundColor"?L:wt==="textColor"?W:wt==="color1"?ie:wt==="color2"?ce:pe,image:ue,predefinedColors:[ie,ce,pe,L,W],onDone:de=>{switch(wt){case"backgroundColor":M(de);break;case"textColor":q(de);break;case"color1":se(de);break;case"color2":oe(de);break;case"color3":ke(de);break}$t()},position:De,onClose:$t}),document.body),gt&&Ht&&Ru.createPortal(v.jsx($g,{position:Ht,albumCoverUrl:Ye?me:ue,initialZoom:At,initialHorizontalPosition:St,initialVerticalPosition:fr,initialBlur:Wr,onDone:de=>{Cr(!1),Ke(de.zoom),Tn(de.horizontalPosition),ln(de.verticalPosition),Je(de.blur),Xi()},onClose:Xi}),document.body)]}):v.jsx(x2,{})})});Yc.displayName="PosterEditor";const l8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},c8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},u8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const o=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),v.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},h8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},f8=z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,d8=z(i2)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,p8=z.h3`
  font-size: 1.3em;
  font-weight: bold;
`,Xc=hr`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,m8=z.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${Xc} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,Rs=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${Xc} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Os=z.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${Xc} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,g8=z.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,v8=z.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function b8({onSelectModel:e,onBack:t}){const{t:r}=sr(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},o={marginCover:160,useFade:!1,marginTop:20},a={marginCover:-1100,marginBackground:-1200,useFade:!1},c={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function l(f,d){a5("select_model","ModelSelector",f),e&&e(f,d)}const h=[0,.08,.16,.24];return v.jsxs(v.Fragment,{children:[v.jsxs(f8,{onClick:t,children:[v.jsx(d8,{}),v.jsx(p8,{children:r("GoBack")})]}),v.jsx(g8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),v.jsx(v8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),v.jsxs(m8,{children:[v.jsxs(Rs,{delay:h[0],onClick:()=>l("standart",c),children:[v.jsx(l8,{width:200}),v.jsx(Os,{delay:h[0],children:"Standard"})]}),v.jsxs(Rs,{delay:h[1],onClick:()=>l("frame",o),children:[v.jsx(h8,{width:200}),v.jsx(Os,{delay:h[1],children:"Frame"})]}),v.jsxs(Rs,{delay:h[2],onClick:()=>l("basic",n),children:[v.jsx(c8,{width:200}),v.jsx(Os,{delay:h[2],children:"Basic"})]}),v.jsxs(Rs,{delay:h[3],onClick:()=>l("fullcover",a),children:[v.jsx(u8,{width:200}),v.jsx(Os,{delay:h[3],children:"Full Cover"})]})]})]})}const x8=z.div`
    width: 100%;
`,w8=z.div`
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
`,y8=z(rp)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,S8=z(f5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,_8=z.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,C8=z.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function A8({onSearch:e,value:t=""}){const{t:r}=sr(),[n,o]=F.useState(t);F.useEffect(()=>{o(t)},[t]);const a=h=>{h.key==="Enter"&&(e(n),n.trim()&&$u(n.trim()))},c=h=>{o(h.target.value)},l=()=>{e(n),n.trim()&&$u(n.trim())};return v.jsx(x8,{children:v.jsxs(w8,{role:"search","aria-label":"Album search for poster creation",children:[v.jsx(y8,{"aria-hidden":"true"}),v.jsx(_8,{}),v.jsx(C8,{placeholder:r("SearchPlaceholder"),value:n,onChange:c,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),v.jsx(S8,{onClick:l,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const k8=z.div`
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

`,L8=z.img`
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
`,N8=z.h3`
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
`,I8=z.p`
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
`,E8=z.div`
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
`;function T8({title:e,artist:t,cover:r,id:n,onClick:o,animationDelay:a=0}){const[c,l]=F.useState(!1),[h,f]=F.useState(!1),[d,x]=F.useState(!1);F.useEffect(()=>{if(d)l(!0);else{const p=setTimeout(()=>{l(!0),x(!0)},a);return()=>clearTimeout(p)}},[a,d]);const S=()=>{f(!0)};return v.jsxs(k8,{onClick:()=>o(n),$visible:c,children:[v.jsx(L8,{src:r,$loaded:h,onLoad:S,loading:"lazy"}),v.jsxs(E8,{children:[v.jsx(N8,{children:e}),v.jsx(I8,{children:t})]})]})}const P8=z.div`
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
`,j8=z.button`
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
`,R8=z.div`
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
`;function wh({query:e,onclick:t}){const{t:r}=sr(),[n,o]=F.useState([]),[a,c]=F.useState(""),[l,h]=F.useState(0),[f,d]=F.useState(!0),[x,S]=F.useState(!1),[p,w]=F.useState(!1),[_,k]=F.useState(0),[y,R]=F.useState(!1),P=20;F.useEffect(()=>{(async()=>{const T=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();c(T.access_token)})()},[]),F.useEffect(()=>{o([]),h(0),d(!0),k(0),R(!1)},[e]),F.useEffect(()=>{const V=async(J=!1)=>{if(a){J?w(!0):S(!0);try{let K;const X=J?l:0;if(e?K=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${X}`,{headers:{Authorization:`Bearer ${a}`}}):K=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${X}&limit=${P}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!K.ok){const se=await K.text();throw new Error(`Erro na API: ${se}`)}const T=await K.json(),L=T.albums.items.filter(se=>se!=null).map(se=>{var ce,oe;return{id:se.id,title:se.name,artist:(ce=se.artists)==null?void 0:ce.map(pe=>pe.name).join(", "),cover:(oe=se.images[0])==null?void 0:oe.url}});J?(R(!1),k(n.length),o(se=>[...se,...L])):(R(!1),k(0),o(L));const M=(L.length-1)*80;setTimeout(()=>{R(!0)},M+800);const q=T.albums.total,ie=J?n.length+L.length:L.length;d(ie<q&&L.length===P)}catch(K){console.error(K)}finally{S(!1),w(!1)}}};a&&(n.length===0||l===0)&&V(!1)},[e,a]);const O=async()=>{if(!a||!f||p)return;const V=l+P;h(V);try{w(!0);let J;if(e?J=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${V}`,{headers:{Authorization:`Bearer ${a}`}}):J=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${V}&limit=${P}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!J.ok){const q=await J.text();throw new Error(`Erro na API: ${q}`)}const K=await J.json(),T=K.albums.items.filter(q=>q!=null).map(q=>{var ie,se;return{id:q.id,title:q.name,artist:(ie=q.artists)==null?void 0:ie.map(ce=>ce.name).join(", "),cover:(se=q.images[0])==null?void 0:se.url}});R(!1),k(n.length),o(q=>[...q,...T]);const Z=(T.length-1)*80;setTimeout(()=>{R(!0)},Z+800);const M=K.albums.total,W=n.length+T.length;d(W<M&&T.length===P)}catch(J){console.error(J)}finally{w(!1)}};return v.jsx(v.Fragment,{children:x&&n.length===0?v.jsx(x2,{}):v.jsxs(v.Fragment,{children:[v.jsx(P8,{children:n.map((V,J)=>{const K=J>=_?J-_:J;return v.jsx(T8,{onClick:()=>t(V.id),cover:V.cover,title:V.title,artist:V.artist,id:V.id,animationDelay:K*80},V.id)})}),f&&v.jsx(R8,{$visible:y,children:v.jsx(j8,{onClick:O,disabled:p,children:r(p?"LoadingMore":"LoadMore")})})]})})}const O8=({onBack:e})=>{const[t,r]=F.useState(""),[n,o]=F.useState(null),[a,c]=F.useState(!1),[l,h]=F.useState(null),[f,d]=F.useState(null),x=F.useRef(null);F.useEffect(()=>{a&&n&&x.current&&setTimeout(()=>{x.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[a,n]);function S(_){o(_),c(!0),h(null),d(null)}function p(){o(null),c(!1),h(null),d(null),e&&e()}const w=_=>{r(_)};return n&&l&&f?v.jsx(Yc,{albumID:n,handleClickBack:p,model:l,modelParams:f,source:"search_creation"}):n&&a?v.jsx("div",{ref:x,children:v.jsx(b8,{onSelectModel:(_,k)=>{h(_),d(k),c(!1)},onBack:p})}):v.jsxs(v.Fragment,{children:[v.jsx(A8,{onSearch:w,value:t}),t.trim()?v.jsx(wh,{query:t,onclick:S}):v.jsx("div",{children:v.jsx(wh,{onclick:S})})]})},go=z.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function M8({loadingComplete:e}){const{t}=sr(),[r,n]=F.useState(null),o=F.useRef(null),[a,c]=Ui(),[l,h]=Ui(),[f,d]=Ui(),[x,S]=Ui(),[p,w]=Ui(),[_,k]=Ui(),[y,R]=Ui(),P=V=>{u5(V.albumName||"Unknown Album",V.artistsName||"Unknown Artist",V.albumID||"","album_collection"),n(V),setTimeout(()=>{if(o.current){const J=o.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:J,behavior:"smooth"})}},100)},O=()=>{n(null)};return v.jsxs(v.Fragment,{children:[v.jsx(pm,{showAnimation:e,onRecreate:P}),v.jsx(go,{ref:a,$isVisible:c,children:v.jsx(Ba,{text:t("anchorArt"),type:1})}),v.jsx(go,{ref:l,$isVisible:h,children:v.jsx(Tc,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),v.jsx(go,{ref:f,$isVisible:d,children:r?v.jsx(Yc,{ref:o,albumID:r.albumID,initialPosterJson:r,handleClickBack:O}):v.jsx(O8,{})}),v.jsx(go,{ref:x,$isVisible:S,children:v.jsx(Hm,{})}),v.jsx(go,{ref:p,$isVisible:w,children:v.jsx(Mm,{})}),v.jsx(go,{ref:_,$isVisible:k,children:v.jsx(Em,{})}),v.jsx(go,{ref:y,$isVisible:R,children:v.jsx(eg,{})})]})}function S0(e){return Tt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const yh=z.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,Sh=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,_h=z.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,F8=z.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,D8=z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,Ch=z.button`
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
`,Ah=z.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,z8=z(c2)`
    width: 20px;
    height: 20px;
`,B8=z(S0)`
    width: 20px;
    height: 20px;
`,U8=z.div`
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
`,kh=z.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,H8=z.p`
    color: var(--textColor);
`;z.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;const q8=z.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,$8=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,V8=z.div`
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
`,W8=z.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function G8(){const{t:e}=sr(),t=So(),[r]=$d(),{user:n,loading:o,loginWithGoogle:a,loginWithSpotify:c}=za();if(F.useEffect(()=>{if(!o){if(n){t("/dashboard");return}r.get("login")==="success"&&t("/dashboard")}},[n,o,t,r]),o)return v.jsxs(yh,{children:[v.jsx(Ws,{iconColor:"var(--AccentColor)"}),v.jsxs(Sh,{children:[v.jsx(pi,{fill:"var(--textColor)",width:"100px"}),v.jsx(_h,{children:e("Loading")})]})]});const l=()=>{t("/")};return v.jsxs(yh,{children:[v.jsx(Ws,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),v.jsx(Sh,{children:v.jsxs(q8,{children:[v.jsx(V8,{onClick:l,children:v.jsx(pi,{fill:"var(--textColor)",width:"25vw"})}),v.jsxs($8,{children:[v.jsx(W8,{children:v.jsx(pi,{fill:"var(--textColor)",width:"90px"})}),v.jsx(_h,{children:e("LOGIN_Welcome")}),v.jsx(F8,{children:e("LOGIN_JoinCommunity")}),v.jsxs(D8,{children:[v.jsxs(Ch,{onClick:a,children:[v.jsx(z8,{}),v.jsx(Ah,{children:e("LOGIN_GoogleSignIn")})]}),v.jsxs(U8,{children:[v.jsx(kh,{}),v.jsx(H8,{children:e("LOGIN_Or")}),v.jsx(kh,{})]}),v.jsxs(Ch,{onClick:c,children:[v.jsx(B8,{}),v.jsx(Ah,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function Y8(e){return Tt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const X8=hr`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,J8=hr`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,Z8=hr`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Q8=hr`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,K8=z.div`
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
    animation: ${e=>e.isClosing?Q8:Z8} 0.3s ease-in-out forwards;
`,eb=z.div`
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
    animation: ${e=>e.isClosing?J8:X8} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,tb=z.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,rb=z.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,nb=z(o2)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,ib=z.div`
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
`,ob=z.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,ab=z.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,sb=z.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Lh=z.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,Nh=z.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,Ih=z.input`
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
`,oc=z.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`,lb=z.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,cb=z.button`
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
`,ub=z.button`
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
`,hb=z.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function fb({isOpen:e,onClose:t,onProfileUpdate:r}){const{user:n,updateUser:o}=za(),{t:a}=sr(),[c,l]=F.useState({name:"",username:""}),[h,f]=F.useState({}),[d,x]=F.useState(!1),[S,p]=F.useState(""),[w,_]=F.useState(!1);F.useEffect(()=>{n&&l({name:n.name||"",username:n.username||""})},[n]);const k=()=>{const O={};return c.name.trim()||(O.name=a("NameIsRequired")),c.username.trim()?c.username.length<3?O.username=a("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(O.username=a("UsernameFormat")):O.username=a("UsernameIsRequired"),f(O),Object.keys(O).length===0},y=O=>{const{name:V,value:J}=O.target;l(K=>({...K,[V]:J})),h[V]&&f(K=>({...K,[V]:""})),S&&p("")},R=async O=>{var V,J,K,X;if(O.preventDefault(),!!k()){x(!0),p("");try{await Bn.updateUserProfile({name:c.name.trim(),username:c.username.trim()}),o({...n,name:c.name.trim(),username:c.username.trim()}),p(a("ProfileUpdatedSuccessfully")),r&&r(),setTimeout(()=>{P()},1500)}catch(T){console.error("Profile update failed:",T),(V=T.message)!=null&&V.includes("409")||(J=T.message)!=null&&J.includes("taken")?f({username:a("UsernameTaken")}):(K=T.message)!=null&&K.includes("400")||(X=T.message)!=null&&X.includes("invalid")?f({username:a("InvalidUsernameFormat")}):f({general:a("FailedToUpdateProfile")})}finally{x(!1)}}},P=()=>{_(!0),setTimeout(()=>{_(!1),t(),f({}),p("")},300)};return e?(document.body.style.overflow="hidden",v.jsx(K8,{isClosing:w,children:v.jsxs(eb,{isClosing:w,children:[v.jsxs(tb,{children:[v.jsx(ob,{children:v.jsx(pi,{width:25,height:25,fill:"var(--textColor)"})}),v.jsx(rb,{children:a("EditProfile")}),v.jsx(ib,{onClick:P,children:v.jsx(nb,{})})]}),v.jsx(ab,{}),v.jsxs(sb,{onSubmit:R,children:[v.jsxs(Lh,{children:[v.jsx(Nh,{htmlFor:"name",children:a("Name")}),v.jsx(Ih,{type:"text",id:"name",name:"name",value:c.name,onChange:y,placeholder:a("EnterYourName"),disabled:d}),h.name&&v.jsx(oc,{children:h.name})]}),v.jsxs(Lh,{children:[v.jsx(Nh,{htmlFor:"username",children:a("Username")}),v.jsx(Ih,{type:"text",id:"username",name:"username",value:c.username,onChange:y,placeholder:a("EnterYourUsername"),disabled:d}),h.username&&v.jsx(oc,{children:h.username})]}),h.general&&v.jsx(oc,{children:h.general}),S&&v.jsx(hb,{children:S}),v.jsxs(lb,{children:[v.jsx(cb,{type:"button",onClick:P,disabled:d,children:a("Cancel")}),v.jsx(ub,{type:"submit",disabled:d,children:a(d?"Saving":"SaveChanges")})]})]})]})})):null}hr`
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
`;z.div`
  display: none;
`;const _0=z.div`
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
`,db=z.div`
  position: relative;
  display: inline-block;
  &:hover ${_0} {
    opacity: 0.9;
  }
`;function Eh({text:e,children:t,delay:r=0}){const[n,o]=F.useState(!1),[a,c]=F.useState({top:0,left:0}),l=f=>{const d=f.currentTarget.getBoundingClientRect();c({top:d.top+d.height/2-17,left:d.right+15}),o(!0)},h=()=>{o(!1)};return v.jsxs(db,{onMouseEnter:l,onMouseLeave:h,children:[v.jsx(_0,{isVisible:n,style:{top:a.top,left:a.left},children:e}),t]})}const pb=z.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,mb=z.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,gb=z.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,vb=z.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,bb=z.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,xb=z.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`,Th=z.button`
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
`,Ph=z.button`
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
`;z.p`
    color: var(--textColor);
    font-size: 1.2em;
`;const wb=z(c2)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,yb=z(S0)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,jh=z.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,Sb=z.div`
    display: flex;
    align-items: center;
    width: 100%;
`,_b=z(Y8)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,Cb=z.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,Ab=z.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,kb=z.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function Lb(){const e=So(),{user:t,loading:r,logout:n,isAuthenticated:o}=za(),[a,c]=F.useState(null),[l,h]=F.useState(!1),{t:f}=sr();F.useEffect(()=>{if(!r&&!o){e("/login");return}o&&t&&d()},[o,r,e,t]);const d=async()=>{try{const _=await Bn.getUserProfile();c(_.user)}catch(_){console.error("Failed to fetch user profile:",_)}},x=async()=>{await n(),e("/login")},S=()=>{h(!0)},p=()=>{h(!1)},w=()=>{d()};return r?v.jsx(Ec,{isVisible:!0,initialFade:!0}):t?v.jsxs(pb,{children:[v.jsx(Ws,{iconColor:"var(--AccentColor)"}),v.jsxs(mb,{children:[(a==null?void 0:a.avatar)&&v.jsx(vb,{src:a.avatar,alt:a.name}),v.jsxs(gb,{children:[v.jsxs(Sb,{children:[v.jsx(bb,{children:(a==null?void 0:a.name)||t.name}),(a==null?void 0:a.hasGoogle)&&v.jsx(Eh,{text:f("ConnectedToGoogle"),delay:200,children:v.jsx(jh,{children:v.jsx(wb,{})})}),(a==null?void 0:a.hasSpotify)&&v.jsx(Eh,{text:f("ConnectedToSpotify"),delay:200,children:v.jsx(jh,{children:v.jsx(yb,{})})}),v.jsxs(Ab,{children:[v.jsx(Ph,{onClick:S,children:f("EditProfile")}),v.jsx(Th,{onClick:x,children:f("Logout")})]})]}),v.jsxs(xb,{children:["@",(a==null?void 0:a.username)||t.username]})]})]}),v.jsxs(kb,{children:[v.jsx(Ph,{onClick:S,children:f("EditProfile")}),v.jsx(Th,{onClick:x,children:f("Logout")})]}),v.jsx(_b,{}),v.jsx(Cb,{children:f("NoActivityYet")}),v.jsx(fb,{isOpen:l,onClose:p,onProfileUpdate:w})]}):null}const Nb=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:o=!1,onClick:a})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[v.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),v.jsx("path",{fill:n,style:{animation:o?"pulse 2s infinite":"none",cursor:o?"pointer":"default"},onClick:a,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),C0=document.createElement("style");C0.textContent=`
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
`;document.head.appendChild(C0);const Ib="/assets/kanye.BMPu-Gq3.png",Eb="/assets/runaway.DjODmQSR.mp3",Tb=()=>{const e=So(),{t}=sr(),[r,n]=F.useState(0),o=F.useRef(null),[a,c]=F.useState(!1),l=()=>{n(r+1),console.log(r)},h=()=>{o.current&&(o.current.loop=!0,o.current.paused?(o.current.play(),c(!0)):(o.current.pause(),c(!1)))};return v.jsxs(Pb,{playing:a,children:[v.jsx(Nb,{width:"150px",height:"150px",fillHeart:a?"#edcd6b":"var(--textColor)",fillQuestion:a?"#edcd6b":"var(--textColor)",pulse:!a,onClick:l}),v.jsxs(Fb,{children:[v.jsx(ac,{playing:a,active:r>=1}),v.jsx(ac,{playing:a,active:r>=2}),v.jsx(ac,{playing:a,active:r>=3})]}),v.jsx(jb,{children:t("errorTitle")}),v.jsx(Rb,{children:t("errorMessage")}),v.jsx(Ob,{playing:a,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&v.jsxs(v.Fragment,{children:[v.jsx(Mb,{src:Ib,alt:"Kanye",onClick:h}),v.jsx("audio",{ref:o,src:Eb})]})]})},Pb=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,jb=z.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,Rb=z.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,Ob=z.button`
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
`,Mb=z.img`
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
`,Fb=z.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,ac=z.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Db=({children:e})=>{const t=So(),{isAuthenticated:r,loading:n}=za();return F.useEffect(()=>{!n&&!r&&t("/login")},[r,n,t]),n?v.jsx("div",{children:"Loading..."}):r?e:null},zb=()=>(F.useEffect(()=>{o5()},[]),null),Rh=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},Jc=()=>"https://posterfy.space"+"/",Bb=e=>{const t=Jc(),r=Rh(e),n=Rh(t),o=e.includes("://www."),a=e.startsWith("http://");return o||a||r!==n},Ub=()=>{const e=window.location.href,t=Jc(),r=[];return Bb(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},Hb=()=>(F.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const o=document.querySelector('meta[name="description"]');(!o||o.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const a=Ub();a.isValid||a.issues.forEach(h=>{r.push(`${h.type}: ${h.message}`)});const c=document.querySelector('meta[name="robots"]');return c&&c.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),qb=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(F.useEffect(()=>{const o="https://posterfy.space",a=Jc(),c=o+"/albuns.png";document.title=e;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",t);const h=document.querySelector('meta[name="keywords"]');h&&h.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",a):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",a),document.head.appendChild(f));const d=document.querySelector('meta[property="og:title"]');d&&d.setAttribute("content",e);const x=document.querySelector('meta[property="og:description"]');x&&x.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",c);const p=document.querySelector('meta[property="og:url"]');p&&p.setAttribute("content",a);const w=document.querySelector('meta[name="twitter:title"]');w&&w.setAttribute("content",e);const _=document.querySelector('meta[name="twitter:description"]');_&&_.setAttribute("content",t);const k=document.querySelector('meta[name="twitter:image"]');k&&k.setAttribute("content",c);const y={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:o+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},R=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');R&&R.remove();const P=document.createElement("script");P.type="application/ld+json",P.id="dynamic-structured-data",P.innerHTML=JSON.stringify(y),document.head.appendChild(P)},[e,t,r]),null);var $b="1.3.14";function A0(e,t,r){return Math.max(e,Math.min(t,r))}function Vb(e,t,r){return(1-r)*e+r*t}function Wb(e,t,r,n){return Vb(e,t,1-Math.exp(-r*n))}function Gb(e,t){return(e%t+t)%t}var Yb=class{constructor(){Ee(this,"isRunning",!1);Ee(this,"value",0);Ee(this,"from",0);Ee(this,"to",0);Ee(this,"currentTime",0);Ee(this,"lerp");Ee(this,"duration");Ee(this,"easing");Ee(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=A0(0,this.currentTime/this.duration,1);t=n>=1;const o=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=Wb(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:o,onStart:a,onUpdate:c}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function Xb(e,t){let r;return function(...n){let o=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(o,n)},t)}}var Jb=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Ee(this,"width",0);Ee(this,"height",0);Ee(this,"scrollHeight",0);Ee(this,"scrollWidth",0);Ee(this,"debouncedResize");Ee(this,"wrapperResizeObserver");Ee(this,"contentResizeObserver");Ee(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ee(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ee(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=Xb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},k0=class{constructor(){Ee(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let o=0,a=r.length;o<a;o++)(n=r[o])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(o=>t!==o)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Oh=100/6,zi={passive:!1},Zb=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Ee(this,"touchStart",{x:0,y:0});Ee(this,"lastDelta",{x:0,y:0});Ee(this,"window",{width:0,height:0});Ee(this,"emitter",new k0);Ee(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ee(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});Ee(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ee(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const o=n===1?Oh:n===2?this.window.width:1,a=n===1?Oh:n===2?this.window.height:1;t*=o,r*=a,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Ee(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zi),this.element.addEventListener("touchstart",this.onTouchStart,zi),this.element.addEventListener("touchmove",this.onTouchMove,zi),this.element.addEventListener("touchend",this.onTouchEnd,zi)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,zi),this.element.removeEventListener("touchstart",this.onTouchStart,zi),this.element.removeEventListener("touchmove",this.onTouchMove,zi),this.element.removeEventListener("touchend",this.onTouchEnd,zi)}},Mh=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Qb=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:l,easing:h,lerp:f=.1,infinite:d=!1,orientation:x="vertical",gestureOrientation:S=x==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:w=1,autoResize:_=!0,prevent:k,virtualScroll:y,overscroll:R=!0,autoRaf:P=!1,anchors:O=!1,autoToggle:V=!1,allowNestedScroll:J=!1,__experimental__naiveDimensions:K=!1}={}){Ee(this,"_isScrolling",!1);Ee(this,"_isStopped",!1);Ee(this,"_isLocked",!1);Ee(this,"_preventNextNativeScrollEvent",!1);Ee(this,"_resetVelocityTimeout",null);Ee(this,"__rafID",null);Ee(this,"isTouching");Ee(this,"time",0);Ee(this,"userData",{});Ee(this,"lastVelocity",0);Ee(this,"velocity",0);Ee(this,"direction",0);Ee(this,"options");Ee(this,"targetScroll");Ee(this,"animatedScroll");Ee(this,"animate",new Yb);Ee(this,"emitter",new k0);Ee(this,"dimensions");Ee(this,"virtualScroll");Ee(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Ee(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ee(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Ee(this,"onClick",e=>{const r=e.composedPath().find(n=>{var o;return n instanceof HTMLAnchorElement&&((o=n.getAttribute("href"))==null?void 0:o.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.split("#")[1]}`;this.scrollTo(a,o)}}});Ee(this,"onPointerDown",e=>{e.button===1&&this.reset()});Ee(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const o=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const c=t===0&&r===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(c||h)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const d=this.options.prevent;if(f.find(k=>{var y,R,P;return k instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(k))||((y=k.hasAttribute)==null?void 0:y.call(k,"data-lenis-prevent"))||o&&((R=k.hasAttribute)==null?void 0:R.call(k,"data-lenis-prevent-touch"))||a&&((P=k.hasAttribute)==null?void 0:P.call(k,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(k,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const p=o&&this.options.syncTouch,_=o&&n.type==="touchend";_&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...p?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ee(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ee(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=$b,(!e||e===document.documentElement)&&(e=window),typeof l=="number"&&typeof h!="function"?h=Mh:typeof h=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:l,easing:h,lerp:f,infinite:d,gestureOrientation:S,orientation:x,touchMultiplier:p,wheelMultiplier:w,autoResize:_,prevent:k,virtualScroll:y,overscroll:R,autoRaf:P,anchors:O,autoToggle:V,allowNestedScroll:J,__experimental__naiveDimensions:K},this.dimensions=new Jb(e,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Zb(r,{touchMultiplier:p,wheelMultiplier:w}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:o=this.options.duration,easing:a=this.options.easing,lerp:c=this.options.lerp,onStart:l,onComplete:h,force:f=!1,programmatic:d=!0,userData:x}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?w.left:w.top}const p=S.getBoundingClientRect();e=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(d){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=A0(0,e,this.limit);if(e===this.targetScroll){l==null||l(this),h==null||h(this);return}if(this.userData=x??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}d||(this.targetScroll=e),typeof o=="number"&&typeof a!="function"?a=Mh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:a,lerp:c,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(S,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),d&&(this.targetScroll=S),p||this.emit(),p&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),o=e._lenis??(e._lenis={});let a,c,l,h,f,d,x,S;const p=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();const V=window.getComputedStyle(e);o.computedStyle=V;const J=V.overflowX,K=V.overflowY;if(a=["auto","overlay","scroll"].includes(J),c=["auto","overlay","scroll"].includes(K),o.hasOverflowX=a,o.hasOverflowY=c,!a&&!c||p==="vertical"&&!c||p==="horizontal"&&!a)return!1;f=e.scrollWidth,d=e.scrollHeight,x=e.clientWidth,S=e.clientHeight,l=f>x,h=d>S,o.isScrollableX=l,o.isScrollableY=h,o.scrollWidth=f,o.scrollHeight=d,o.clientWidth=x,o.clientHeight=S}else l=o.isScrollableX,h=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,f=o.scrollWidth,d=o.scrollHeight,x=o.clientWidth,S=o.clientHeight;if(!a&&!c||!l&&!h||p==="vertical"&&(!c||!h)||p==="horizontal"&&(!a||!l))return!1;let w;if(p==="horizontal")w="x";else if(p==="vertical")w="y";else{const V=t!==0,J=r!==0;V&&a&&l&&(w="x"),J&&c&&h&&(w="y")}if(!w)return!1;let _,k,y,R,P;if(w==="x")_=e.scrollLeft,k=f-x,y=t,R=a,P=l;else if(w==="y")_=e.scrollTop,k=d-S,y=r,R=c,P=h;else return!1;return(y>0?_<k:_>0)&&R&&P}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Gb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Kb(){const{pathname:e}=gi(),[t,r]=F.useState(!1),[n,o]=F.useState(!1);return F.useEffect(()=>{r(!0),o(!0),window.scrollTo(0,0);const a=setTimeout(()=>{r(!1),setTimeout(()=>{o(!1)},300)},2e3);return()=>clearTimeout(a)},[e]),n?v.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:v.jsx(Ec,{isVisible:!0})}):null}function ex(){const[e,t]=F.useState(!0),[r,n]=F.useState(!1);return h5(),F.useEffect(()=>{const o=new Qb({duration:1.2,easing:c=>Math.min(1,1.001-Math.pow(2,-10*c)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function a(c){o.raf(c),requestAnimationFrame(a)}return requestAnimationFrame(a),()=>{o.destroy()}},[]),F.useEffect(()=>Qd(),[]),F.useEffect(()=>{const o=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(o)},[]),F.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),v.jsx(Kd,{children:v.jsx(P5,{children:v.jsxs(M5,{children:[v.jsx(qb,{}),v.jsx(Hb,{}),v.jsx(zb,{}),v.jsxs(zd,{children:[v.jsx(Kb,{}),v.jsxs(md,{children:[v.jsx(Bi,{path:"/",element:v.jsx(jl,{showNavbar:!0,showFooter:!0}),children:v.jsx(Bi,{index:!0,element:v.jsx(M8,{loadingComplete:r})})}),v.jsx(Bi,{path:"/login",element:v.jsx(jl,{showNavbar:!1,showFooter:!1}),children:v.jsx(Bi,{index:!0,element:v.jsx(G8,{})})}),v.jsx(Bi,{path:"/dashboard",element:v.jsx(jl,{showNavbar:!0,showFooter:!0}),children:v.jsx(Bi,{index:!0,element:v.jsx(Db,{children:v.jsx(Lb,{})})})}),v.jsx(Bi,{path:"*",element:v.jsx(Tb,{})})]})]}),v.jsx(Ec,{isVisible:e})]})})})}mf.use(gf).init({resources:{en:{translation:{heroDescription:"Transform your music passion into visual art by creating custom posters for your favorite albums.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with love by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",FAQ_ExportHighRes_Question:"How can I export the poster in high resolution?",FAQ_ExportHighRes_Answer:"After customizing, you can export the poster in high resolution as PNG or PDF by clicking the buttons next to 'Apply'.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",COVER_EDITOR_Size:"Size",COVER_EDITOR_Blur:"Blur",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Cover editor",EDITOR_EditCover:"Edit cover",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",NoActivityYet:"No activity yet",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving...",FooterDescription:"Create stunning album posters from your favorite music. Free, fast, and beautiful.",ViewGitHub:"View on GitHub",JoinDiscord:"Join Discord",SwitchTo:"Switch to",FooterPrivacy:"Privacy Policy",FooterTerms:"Terms of Service",FooterCookies:"Cookies"}},pt:{translation:{heroDescription:"Transforme sua paixão por música em arte visual criando pôsteres personalizados dos seus álbuns favoritos.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com amor por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",FAQ_ExportHighRes_Question:"Como posso exportar o pôster em alta resolução?",FAQ_ExportHighRes_Answer:"Após personalizar, é possível exportar o pôster em alta resolução em PNG ou em PDF, clicando nos botões ao lado de 'Aplicar'.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",COVER_EDITOR_Size:"Tamanho",COVER_EDITOR_Blur:"Desfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de capa",EDITOR_EditCover:"Editar capa",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando...",FooterDescription:"Crie pôsteres incríveis de álbuns da sua música favorita. Grátis, rápido e bonito.",ViewGitHub:"Ver no GitHub",JoinDiscord:"Entrar no Discord",SwitchTo:"Mudar para",FooterPrivacy:"Política de Privacidade",FooterTerms:"Termos de Serviço",FooterCookies:"Cookies"}},es:{translation:{heroDescription:"Transforma tu pasión por la música en arte visual creando pósters personalizados de tus álbumes favoritos.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con amor por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",FAQ_ExportHighRes_Question:"¿Cómo puedo exportar el póster en alta resolución?",FAQ_ExportHighRes_Answer:"Después de personalizar, puedes exportar el póster en alta resolución en PNG o PDF haciendo clic en los botones junto a 'Aplicar'.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",COVER_EDITOR_Size:"Tamaño",COVER_EDITOR_Blur:"Desenfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de portada",EDITOR_EditCover:"Editar portada",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando...",FooterDescription:"Crea increíbles pósters de álbumes de tu música favorita. Gratis, rápido y hermoso.",ViewGitHub:"Ver en GitHub",JoinDiscord:"Unirse a Discord",SwitchTo:"Cambiar a",FooterPrivacy:"Política de Privacidad",FooterTerms:"Términos de Servicio",FooterCookies:"Cookies"}},zh:{translation:{heroDescription:"将您的音乐热情转化为视觉艺术，为您最喜爱的专辑制作定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用爱制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",FAQ_ExportHighRes_Question:"如何导出高分辨率海报？",FAQ_ExportHighRes_Answer:"自定义后，您可以通过点击'应用'旁边的按钮以PNG或PDF格式导出高分辨率海报。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",COVER_EDITOR_Size:"大小",COVER_EDITOR_Blur:"模糊",COVER_EDITOR_HorizontalPosition:"水平",COVER_EDITOR_VerticalPosition:"垂直",EDITOR_CoverEditor:"封面编辑器",EDITOR_EditCover:"编辑封面",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});zh(document.getElementById("root")).render(v.jsx(F.StrictMode,{children:v.jsx(ex,{})}));export{Et as _};
