const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.CKe4lXx0.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var hf=Object.defineProperty;var ff=(e,t,r)=>t in e?hf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Pe=(e,t,r)=>ff(e,typeof t!="symbol"?t+"":t,r);import{r as O,a as df,e as Tr,c as pf,R as Ou}from"./vendor.BGNHhJSV.js";import{m as Yt,d as z,G as Tt,l as Oa}from"./ui.C5ldsGQa.js";import{u as lr,i as mf,a as gf}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var Dh={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=O,bf=Symbol.for("react.element"),xf=Symbol.for("react.fragment"),wf=Object.prototype.hasOwnProperty,yf=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sf={key:!0,ref:!0,__self:!0,__source:!0};function zh(e,t,r){var n,o={},a=null,c=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)wf.call(t,n)&&!Sf.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:bf,type:e,key:a,ref:c,props:o,_owner:yf.current}}rl.Fragment=xf;rl.jsx=zh;rl.jsxs=zh;Dh.exports=rl;var v=Dh.exports,Bh,Fu=df;Bh=Fu.createRoot,Fu.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Du="popstate";function _f(e={}){function t(n,o){let{pathname:a,search:c,hash:l}=n.location;return lc("",{pathname:a,search:c,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Fa(o)}return Af(t,r,null,e)}function Gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function In(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cf(){return Math.random().toString(36).substring(2,10)}function zu(e,t){return{usr:e.state,key:e.key,idx:t}}function lc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ko(t):t,state:r,key:t&&t.key||n||Cf()}}function Fa({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ko(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function Af(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:a=!1}=n,c=o.history,l="POP",h=null,f=p();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function p(){return(c.state||{idx:null}).idx}function w(){l="POP";let k=p(),y=k==null?null:k-f;f=k,h&&h({action:l,location:_.location,delta:y})}function S(k,y){l="PUSH";let R=lc(_.location,k,y);f=p()+1;let P=zu(R,f),T=_.createHref(R);try{c.pushState(P,"",T)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(T)}a&&h&&h({action:l,location:_.location,delta:1})}function d(k,y){l="REPLACE";let R=lc(_.location,k,y);f=p();let P=zu(R,f),T=_.createHref(R);c.replaceState(P,"",T),a&&h&&h({action:l,location:_.location,delta:0})}function b(k){return kf(k)}let _={get action(){return l},get location(){return e(o,c)},listen(k){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Du,w),h=k,()=>{o.removeEventListener(Du,w),h=null}},createHref(k){return t(o,k)},createURL:b,encodeLocation(k){let y=b(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:S,replace:d,go(k){return c.go(k)}};return _}function kf(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Gt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Fa(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Uh(e,t,r="/"){return Lf(e,t,r,!1)}function Lf(e,t,r,n){let o=typeof t=="string"?Ko(t):t,a=vi(o.pathname||"/",r);if(a==null)return null;let c=Hh(e);Nf(c);let l=null;for(let h=0;l==null&&h<c.length;++h){let f=zf(a);l=Ff(c[h],f,n)}return l}function Hh(e,t=[],r=[],n="",o=!1){let a=(c,l,h=o,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:l,route:c};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&h)return;Gt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let w=mi([n,p.relativePath]),S=r.concat(p);c.children&&c.children.length>0&&(Gt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Hh(c.children,t,S,w,h)),!(c.path==null&&!c.index)&&t.push({path:w,score:Mf(w,c.index),routesMeta:S})};return e.forEach((c,l)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))a(c,l);else for(let f of qh(c.path))a(c,l,!0,f)}),t}function qh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let c=qh(n.join("/")),l=[];return l.push(...c.map(h=>h===""?a:[a,h].join("/"))),o&&l.push(...c),l.map(h=>e.startsWith("/")&&h===""?"/":h)}function Nf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Of(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Ef=/^:[\w-]+$/,If=3,Pf=2,Tf=1,jf=10,Rf=-2,Bu=e=>e==="*";function Mf(e,t){let r=e.split("/"),n=r.length;return r.some(Bu)&&(n+=Rf),t&&(n+=Pf),r.filter(o=>!Bu(o)).reduce((o,a)=>o+(Ef.test(a)?If:a===""?Tf:jf),n)}function Of(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ff(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",c=[];for(let l=0;l<n.length;++l){let h=n[l],f=l===n.length-1,p=a==="/"?t:t.slice(a.length)||"/",w=Xs({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},p),S=h.route;if(!w&&f&&r&&!n[n.length-1].route.index&&(w=Xs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},p)),!w)return null;Object.assign(o,w.params),c.push({params:o,pathname:mi([a,w.pathname]),pathnameBase:qf(mi([a,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(a=mi([a,w.pathnameBase]))}return c}function Xs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Df(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:w},S)=>{if(p==="*"){let b=l[S]||"";c=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const d=l[S];return w&&!d?f[p]=void 0:f[p]=(d||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:e}}function Df(e,t=!1,r=!0){In(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,l,h)=>(n.push({paramName:l,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function zf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return In(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Bf(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ko(e):e;return{pathname:r?r.startsWith("/")?r:Uf(r,t):t,search:$f(n),hash:Vf(o)}}function Uf(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Tl(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hf(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function $h(e){let t=Hf(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Vh(e,t,r,n=!1){let o;typeof e=="string"?o=Ko(e):(o={...e},Gt(!o.pathname||!o.pathname.includes("?"),Tl("?","pathname","search",o)),Gt(!o.pathname||!o.pathname.includes("#"),Tl("#","pathname","hash",o)),Gt(!o.search||!o.search.includes("#"),Tl("#","search","hash",o)));let a=e===""||o.pathname==="",c=a?"/":o.pathname,l;if(c==null)l=r;else{let w=t.length-1;if(!n&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}l=w>=0?t[w]:"/"}let h=Bf(o,l),f=c&&c!=="/"&&c.endsWith("/"),p=(a||c===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(f||p)&&(h.pathname+="/"),h}var mi=e=>e.join("/").replace(/\/\/+/g,"/"),qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$f=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Wh=["POST","PUT","PATCH","DELETE"];new Set(Wh);var Gf=["GET",...Wh];new Set(Gf);var ea=O.createContext(null);ea.displayName="DataRouter";var nl=O.createContext(null);nl.displayName="DataRouterState";O.createContext(!1);var Gh=O.createContext({isTransitioning:!1});Gh.displayName="ViewTransition";var Yf=O.createContext(new Map);Yf.displayName="Fetchers";var Xf=O.createContext(null);Xf.displayName="Await";var Wn=O.createContext(null);Wn.displayName="Navigation";var Ua=O.createContext(null);Ua.displayName="Location";var Gn=O.createContext({outlet:null,matches:[],isDataRoute:!1});Gn.displayName="Route";var Lc=O.createContext(null);Lc.displayName="RouteError";function Zf(e,{relative:t}={}){Gt(Ha(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=O.useContext(Wn),{hash:o,pathname:a,search:c}=qa(e,{relative:t}),l=a;return r!=="/"&&(l=a==="/"?r:mi([r,a])),n.createHref({pathname:l,search:c,hash:o})}function Ha(){return O.useContext(Ua)!=null}function bi(){return Gt(Ha(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ua).location}var Yh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xh(e){O.useContext(Wn).static||O.useLayoutEffect(e)}function yo(){let{isDataRoute:e}=O.useContext(Gn);return e?hd():Jf()}function Jf(){Gt(Ha(),"useNavigate() may be used only in the context of a <Router> component.");let e=O.useContext(ea),{basename:t,navigator:r}=O.useContext(Wn),{matches:n}=O.useContext(Gn),{pathname:o}=bi(),a=JSON.stringify($h(n)),c=O.useRef(!1);return Xh(()=>{c.current=!0}),O.useCallback((h,f={})=>{if(In(c.current,Yh),!c.current)return;if(typeof h=="number"){r.go(h);return}let p=Vh(h,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:mi([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,a,o,e])}var Qf=O.createContext(null);function Kf(e){let t=O.useContext(Gn).outlet;return t&&O.createElement(Qf.Provider,{value:e},t)}function qa(e,{relative:t}={}){let{matches:r}=O.useContext(Gn),{pathname:n}=bi(),o=JSON.stringify($h(r));return O.useMemo(()=>Vh(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function ed(e,t){return Zh(e,t)}function Zh(e,t,r,n,o){var R;Gt(Ha(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=O.useContext(Wn),{matches:c}=O.useContext(Gn),l=c[c.length-1],h=l?l.params:{},f=l?l.pathname:"/",p=l?l.pathnameBase:"/",w=l&&l.route;{let P=w&&w.path||"";Jh(f,!w||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let S=bi(),d;if(t){let P=typeof t=="string"?Ko(t):t;Gt(p==="/"||((R=P.pathname)==null?void 0:R.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${P.pathname}" was given in the \`location\` prop.`),d=P}else d=S;let b=d.pathname||"/",_=b;if(p!=="/"){let P=p.replace(/^\//,"").split("/");_="/"+b.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=Uh(e,{pathname:_});In(w||k!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),In(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=od(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:mi([p,a.encodeLocation?a.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?p:mi([p,a.encodeLocation?a.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),c,r,n,o);return t&&y?O.createElement(Ua.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},y):y}function td(){let e=ud(),t=Wf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:a},"ErrorBoundary")," or"," ",O.createElement("code",{style:a},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),r?O.createElement("pre",{style:o},r):null,c)}var rd=O.createElement(td,null),nd=class extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?O.createElement(Gn.Provider,{value:this.props.routeContext},O.createElement(Lc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function id({routeContext:e,match:t,children:r}){let n=O.useContext(ea);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),O.createElement(Gn.Provider,{value:e},r)}function od(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,c=r==null?void 0:r.errors;if(c!=null){let f=a.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);Gt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,h=-1;if(r)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:w,errors:S}=r,d=p.route.loader&&!w.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||d){l=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,p,w)=>{let S,d=!1,b=null,_=null;r&&(S=c&&p.route.id?c[p.route.id]:void 0,b=p.route.errorElement||rd,l&&(h<0&&w===0?(Jh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,_=null):h===w&&(d=!0,_=p.route.hydrateFallbackElement||null)));let k=t.concat(a.slice(0,w+1)),y=()=>{let R;return S?R=b:d?R=_:p.route.Component?R=O.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,O.createElement(id,{match:p,routeContext:{outlet:f,matches:k,isDataRoute:r!=null},children:R})};return r&&(p.route.ErrorBoundary||p.route.errorElement||w===0)?O.createElement(nd,{location:r.location,revalidation:r.revalidation,component:b,error:S,children:y(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:n}):y()},null)}function Nc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ad(e){let t=O.useContext(ea);return Gt(t,Nc(e)),t}function sd(e){let t=O.useContext(nl);return Gt(t,Nc(e)),t}function ld(e){let t=O.useContext(Gn);return Gt(t,Nc(e)),t}function Ec(e){let t=ld(e),r=t.matches[t.matches.length-1];return Gt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function cd(){return Ec("useRouteId")}function ud(){var n;let e=O.useContext(Lc),t=sd("useRouteError"),r=Ec("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function hd(){let{router:e}=ad("useNavigate"),t=Ec("useNavigate"),r=O.useRef(!1);return Xh(()=>{r.current=!0}),O.useCallback(async(o,a={})=>{In(r.current,Yh),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var Uu={};function Jh(e,t,r){!t&&!Uu[e]&&(Uu[e]=!0,In(!1,r))}O.memo(fd);function fd({routes:e,future:t,state:r,unstable_onError:n}){return Zh(e,void 0,r,n,t)}function dd(e){return Kf(e.context)}function qi(e){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pd({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){Gt(!Ha(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),l=O.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof r=="string"&&(r=Ko(r));let{pathname:h="/",search:f="",hash:p="",state:w=null,key:S="default"}=r,d=O.useMemo(()=>{let b=vi(h,c);return b==null?null:{location:{pathname:b,search:f,hash:p,state:w,key:S},navigationType:n}},[c,h,f,p,w,S,n]);return In(d!=null,`<Router basename="${c}"> is not able to match the URL "${h}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),d==null?null:O.createElement(Wn.Provider,{value:l},O.createElement(Ua.Provider,{children:t,value:d}))}function md({children:e,location:t}){return ed(cc(e),t)}function cc(e,t=[]){let r=[];return O.Children.forEach(e,(n,o)=>{if(!O.isValidElement(n))return;let a=[...t,o];if(n.type===O.Fragment){r.push.apply(r,cc(n.props.children,a));return}Gt(n.type===qi,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let c={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=cc(n.props.children,a)),r.push(c)}),r}var Us="get",Hs="application/x-www-form-urlencoded";function il(e){return e!=null&&typeof e.tagName=="string"}function gd(e){return il(e)&&e.tagName.toLowerCase()==="button"}function vd(e){return il(e)&&e.tagName.toLowerCase()==="form"}function bd(e){return il(e)&&e.tagName.toLowerCase()==="input"}function xd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wd(e,t){return e.button===0&&(!t||t==="_self")&&!xd(e)}function uc(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function yd(e,t){let r=uc(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}var bs=null;function Sd(){if(bs===null)try{new FormData(document.createElement("form"),0),bs=!1}catch{bs=!0}return bs}var _d=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jl(e){return e!=null&&!_d.has(e)?(In(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hs}"`),null):e}function Cd(e,t){let r,n,o,a,c;if(vd(e)){let l=e.getAttribute("action");n=l?vi(l,t):null,r=e.getAttribute("method")||Us,o=jl(e.getAttribute("enctype"))||Hs,a=new FormData(e)}else if(gd(e)||bd(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||l.getAttribute("action");if(n=h?vi(h,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Us,o=jl(e.getAttribute("formenctype"))||jl(l.getAttribute("enctype"))||Hs,a=new FormData(l,e),!Sd()){let{name:f,type:p,value:w}=e;if(p==="image"){let S=f?`${f}.`:"";a.append(`${S}x`,"0"),a.append(`${S}y`,"0")}else f&&a.append(f,w)}}else{if(il(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Us,n=null,o=Hs,c=e}return a&&o==="text/plain"&&(c=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ic(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ad(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&vi(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function kd(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ld(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Nd(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let c=await kd(a,r);return c.links?c.links():[]}return[]}));return Td(n.flat(1).filter(Ld).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Hu(e,t,r,n,o,a){let c=(h,f)=>r[f]?h.route.id!==r[f].route.id:!0,l=(h,f)=>{var p;return r[f].pathname!==h.pathname||((p=r[f].route.path)==null?void 0:p.endsWith("*"))&&r[f].params["*"]!==h.params["*"]};return a==="assets"?t.filter((h,f)=>c(h,f)||l(h,f)):a==="data"?t.filter((h,f)=>{var w;let p=n.routes[h.route.id];if(!p||!p.hasLoader)return!1;if(c(h,f)||l(h,f))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=r[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Ed(e,t,{includeHydrateFallback:r}={}){return Id(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Id(e){return[...new Set(e)]}function Pd(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Td(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let a=JSON.stringify(Pd(o));return r.has(a)||(r.add(a),n.push({key:a,link:o})),n},[])}function Qh(){let e=O.useContext(ea);return Ic(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function jd(){let e=O.useContext(nl);return Ic(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Pc=O.createContext(void 0);Pc.displayName="FrameworkContext";function Kh(){let e=O.useContext(Pc);return Ic(e,"You must render this element inside a <HydratedRouter> element"),e}function Rd(e,t){let r=O.useContext(Pc),[n,o]=O.useState(!1),[a,c]=O.useState(!1),{onFocus:l,onBlur:h,onMouseEnter:f,onMouseLeave:p,onTouchStart:w}=t,S=O.useRef(null);O.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let _=y=>{y.forEach(R=>{c(R.isIntersecting)})},k=new IntersectionObserver(_,{threshold:.5});return S.current&&k.observe(S.current),()=>{k.disconnect()}}},[e]),O.useEffect(()=>{if(n){let _=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(_)}}},[n]);let d=()=>{o(!0)},b=()=>{o(!1),c(!1)};return r?e!=="intent"?[a,S,{}]:[a,S,{onFocus:Na(l,d),onBlur:Na(h,b),onMouseEnter:Na(f,d),onMouseLeave:Na(p,b),onTouchStart:Na(w,d)}]:[!1,S,{}]}function Na(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Md({page:e,...t}){let{router:r}=Qh(),n=O.useMemo(()=>Uh(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?O.createElement(Fd,{page:e,matches:n,...t}):null}function Od(e){let{manifest:t,routeModules:r}=Kh(),[n,o]=O.useState([]);return O.useEffect(()=>{let a=!1;return Nd(e,t,r).then(c=>{a||o(c)}),()=>{a=!0}},[e,t,r]),n}function Fd({page:e,matches:t,...r}){let n=bi(),{manifest:o,routeModules:a}=Kh(),{basename:c}=Qh(),{loaderData:l,matches:h}=jd(),f=O.useMemo(()=>Hu(e,t,h,o,n,"data"),[e,t,h,o,n]),p=O.useMemo(()=>Hu(e,t,h,o,n,"assets"),[e,t,h,o,n]),w=O.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let b=new Set,_=!1;if(t.forEach(y=>{var P;let R=o.routes[y.route.id];!R||!R.hasLoader||(!f.some(T=>T.route.id===y.route.id)&&y.route.id in l&&((P=a[y.route.id])!=null&&P.shouldRevalidate)||R.hasClientLoader?_=!0:b.add(y.route.id))}),b.size===0)return[];let k=Ad(e,c,"data");return _&&b.size>0&&k.searchParams.set("_routes",t.filter(y=>b.has(y.route.id)).map(y=>y.route.id).join(",")),[k.pathname+k.search]},[c,l,n,o,f,t,e,a]),S=O.useMemo(()=>Ed(p,o),[p,o]),d=Od(p);return O.createElement(O.Fragment,null,w.map(b=>O.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})),S.map(b=>O.createElement("link",{key:b,rel:"modulepreload",href:b,...r})),d.map(({key:b,link:_})=>O.createElement("link",{key:b,nonce:r.nonce,..._})))}function Dd(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var e0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{e0&&(window.__reactRouterVersion="7.8.2")}catch{}function zd({basename:e,children:t,window:r}){let n=O.useRef();n.current==null&&(n.current=_f({window:r,v5Compat:!0}));let o=n.current,[a,c]=O.useState({action:o.action,location:o.location}),l=O.useCallback(h=>{O.startTransition(()=>c(h))},[c]);return O.useLayoutEffect(()=>o.listen(l),[o,l]),O.createElement(pd,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var t0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r0=O.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:c,state:l,target:h,to:f,preventScrollReset:p,viewTransition:w,...S},d){let{basename:b}=O.useContext(Wn),_=typeof f=="string"&&t0.test(f),k,y=!1;if(typeof f=="string"&&_&&(k=f,e0))try{let M=new URL(window.location.href),J=f.startsWith("//")?new URL(M.protocol+f):new URL(f),E=vi(J.pathname,b);J.origin===M.origin&&E!=null?f=E+J.search+J.hash:y=!0}catch{In(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Zf(f,{relative:o}),[P,T,Y]=Rd(n,S),K=qd(f,{replace:c,state:l,target:h,preventScrollReset:p,relative:o,viewTransition:w});function ne(M){t&&t(M),M.defaultPrevented||K(M)}let X=O.createElement("a",{...S,...Y,href:k||R,onClick:y||a?t:ne,ref:Dd(d,T),target:h,"data-discover":!_&&r==="render"?"true":void 0});return P&&!_?O.createElement(O.Fragment,null,X,O.createElement(Md,{page:R})):X});r0.displayName="Link";var Bd=O.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:c,viewTransition:l,children:h,...f},p){let w=qa(c,{relative:f.relative}),S=bi(),d=O.useContext(nl),{navigator:b,basename:_}=O.useContext(Wn),k=d!=null&&Xd(w)&&l===!0,y=b.encodeLocation?b.encodeLocation(w).pathname:w.pathname,R=S.pathname,P=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;r||(R=R.toLowerCase(),P=P?P.toLowerCase():null,y=y.toLowerCase()),P&&_&&(P=vi(P,_)||P);const T=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let Y=R===y||!o&&R.startsWith(y)&&R.charAt(T)==="/",K=P!=null&&(P===y||!o&&P.startsWith(y)&&P.charAt(y.length)==="/"),ne={isActive:Y,isPending:K,isTransitioning:k},X=Y?t:void 0,M;typeof n=="function"?M=n(ne):M=[n,Y?"active":null,K?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let J=typeof a=="function"?a(ne):a;return O.createElement(r0,{...f,"aria-current":X,className:M,ref:p,style:J,to:c,viewTransition:l},typeof h=="function"?h(ne):h)});Bd.displayName="NavLink";var Ud=O.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:c=Us,action:l,onSubmit:h,relative:f,preventScrollReset:p,viewTransition:w,...S},d)=>{let b=Gd(),_=Yd(l,{relative:f}),k=c.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&t0.test(l),R=P=>{if(h&&h(P),P.defaultPrevented)return;P.preventDefault();let T=P.nativeEvent.submitter,Y=(T==null?void 0:T.getAttribute("formmethod"))||c;b(T||P.currentTarget,{fetcherKey:t,method:Y,navigate:r,replace:o,state:a,relative:f,preventScrollReset:p,viewTransition:w})};return O.createElement("form",{ref:d,method:k,action:_,onSubmit:n?h:R,...S,"data-discover":!y&&e==="render"?"true":void 0})});Ud.displayName="Form";function Hd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n0(e){let t=O.useContext(ea);return Gt(t,Hd(e)),t}function qd(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:c}={}){let l=yo(),h=bi(),f=qa(e,{relative:a});return O.useCallback(p=>{if(wd(p,t)){p.preventDefault();let w=r!==void 0?r:Fa(h)===Fa(f);l(e,{replace:w,state:n,preventScrollReset:o,relative:a,viewTransition:c})}},[h,l,f,r,n,t,e,o,a,c])}function $d(e){In(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=O.useRef(uc(e)),r=O.useRef(!1),n=bi(),o=O.useMemo(()=>yd(n.search,r.current?null:t.current),[n.search]),a=yo(),c=O.useCallback((l,h)=>{const f=uc(typeof l=="function"?l(new URLSearchParams(o)):l);r.current=!0,a("?"+f,h)},[a,o]);return[o,c]}var Vd=0,Wd=()=>`__${String(++Vd)}__`;function Gd(){let{router:e}=n0("useSubmit"),{basename:t}=O.useContext(Wn),r=cd();return O.useCallback(async(n,o={})=>{let{action:a,method:c,encType:l,formData:h,body:f}=Cd(n,t);if(o.navigate===!1){let p=o.fetcherKey||Wd();await e.fetch(p,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||c,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Yd(e,{relative:t}={}){let{basename:r}=O.useContext(Wn),n=O.useContext(Gn);Gt(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...qa(e||".",{relative:t})},c=bi();if(e==null){a.search=c.search;let l=new URLSearchParams(a.search),h=l.getAll("index");if(h.some(p=>p==="")){l.delete("index"),h.filter(w=>w).forEach(w=>l.append("index",w));let p=l.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:mi([r,a.pathname])),Fa(a)}function Xd(e,{relative:t}={}){let r=O.useContext(Gh);Gt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=n0("useViewTransitionState"),o=qa(e,{relative:t});if(!r.isTransitioning)return!1;let a=vi(r.currentLocation.pathname,n)||r.currentLocation.pathname,c=vi(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Xs(o.pathname,c)!=null||Xs(o.pathname,a)!=null}function gi({width:e,height:t,fill:r}){return v.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Zd=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},Jd=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Qd=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(n/o*100);e.forEach(c=>{a>=c&&!t.includes(c)&&(t.push(c),Jd(c))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},i0=O.createContext(),ol=()=>{const e=O.useContext(i0);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Kd=({children:e})=>{const[t,r]=O.useState(()=>localStorage.getItem("theme")||"light");O.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Zd(t)},[t]);const a={theme:t,toggleTheme:()=>{r(c=>c==="light"?"dark":"light")},setSpecificTheme:c=>{r(c)},isLight:t==="light",isDark:t==="dark"};return v.jsx(i0.Provider,{value:a,children:e})},e5=Yt`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,t5=Yt`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,r5=Yt`
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
`;function Tc({isVisible:e,initialFade:t=!1}){const{theme:r}=ol(),[n,o]=O.useState(!1),[a,c]=O.useState(!1);return O.useEffect(()=>{!e&&!n&&(o(!0),setTimeout(()=>{c(!0)},800))},[e,n]),v.jsx(n5,{isVisible:e,fadeOutContainer:a,initialFade:t,children:v.jsx(i5,{isExiting:n,children:v.jsx(gi,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const o5=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},a5=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},qu=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},$u=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},s5=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},Vu=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},l5=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},c5=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},u5=(e,t="",r="",n="album_collection")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t,album_id:r,source:n})},h5=()=>{O.useEffect(()=>{qu(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&qu(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function o0(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function a0(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function f5(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const d5=Yt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,p5=Yt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,m5=Yt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,g5=Yt`
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
`,y5=z(a0)`
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
`,s0=z.p`
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
`,xs=z.button`
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
`,k5=z(s0)`
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
`;function E5({title:e,paragraph:t,imageURL:r,postImageText:n,canClose:o,confirmText:a,onConfirm:c,cancelText:l,onCancel:h,isClosing:f,customButton:p}){return document.body.style.overflow="hidden",v.jsx(v5,{isClosing:f,children:v.jsxs(b5,{isClosing:f,children:[v.jsxs(x5,{children:[v.jsx(L5,{children:v.jsx(gi,{width:25,height:25,fill:"var(--textColor)"})}),e&&v.jsx(w5,{children:e}),o&&v.jsx(S5,{onClick:h,children:v.jsx(y5,{})})]}),v.jsx(N5,{}),t&&v.jsx(s0,{children:t}),r&&v.jsx(_5,{src:r}),n&&v.jsx(k5,{children:n}),v.jsxs(A5,{style:{justifyContent:"center"},children:[p&&v.jsx(xs,{onClick:()=>window.open(p.url,"_blank"),children:p.text}),l&&a?v.jsxs(v.Fragment,{children:[v.jsx(C5,{onClick:h,children:l}),v.jsx(xs,{onClick:c,children:a})]}):v.jsx(v.Fragment,{children:l?v.jsx(xs,{onClick:h,children:l}):a&&v.jsx(xs,{onClick:c,children:a})})]})]})})}const I5="/assets/coverEditor.DxGhMuid.gif",P5=O.createContext(),T5=({children:e})=>{const{t,i18n:r}=lr(),[n,o]=O.useState(null),[a,c]=O.useState(!1),[l,h]=O.useState(()=>{const K=localStorage.getItem("shownAlerts");return K?JSON.parse(K):{}}),f=()=>{const K={en:{title:"New Cover Editor!",paragraph:'Inside the poster editor, you can now customize your album cover with zoom, position adjustments, and blur effects. Click on "Cover editor" to try it out!',confirmText:"Try it now!",postImageText:"Customize your poster like never before."},pt:{title:"Novo Editor de Capa!",paragraph:'Dentro do editor de poster, agora você pode personalizar a capa do álbum com zoom, ajustes de posição e efeitos de desfoque. Clique em "Editor de capa" para experimentar!',confirmText:"Experimentar agora!",postImageText:"Personalize seu poster como nunca antes."},es:{title:"¡Nuevo Editor de Portada!",paragraph:'Dentro del editor de póster, ahora puedes personalizar la portada del álbum con zoom, ajustes de posición y efectos de desenfoque. ¡Haz clic en "Editor de portada" para probarlo!',confirmText:"¡Probar ahora!",postImageText:"Personaliza tu póster como nunca antes."},zh:{title:"新封面编辑器！",paragraph:"在海报编辑器中，您现在可以使用缩放、位置调整和模糊效果来自定义专辑封面。点击“封面编辑器”试试吧！",confirmText:"立即试用！",postImageText:"像从未有过的方式定制您的海报。"}},ne=r.language||"en",X=K[ne]||K.en;return{id:"cover-editor-feature",persistentId:"cover-editor-feature-announcement",title:X.title,paragraph:X.paragraph,postImageText:X.postImageText,confirmText:X.confirmText,canClose:!0,type:"alert",imageURL:I5,limitDate:"2026-02-10T23:59:59.999Z"}},p=K=>l[K]===!0,w=K=>{if(!p(K)){const ne={...l,[K]:!0};h(ne),localStorage.setItem("shownAlerts",JSON.stringify(ne))}};O.useEffect(()=>{const K=f();!p(K.persistentId)&&!n&&_(K)&&o(K)},[r.language,l]);const S=K=>{_(K)&&(o(K),c(!1))},d=K=>{_(K)&&S({...K,type:"alert"})},b=K=>{S({...K,type:"confirmation"})},_=K=>{if(!K.limitDate)return!0;const ne=new Date(K.limitDate);return new Date<=ne},k=K=>{if(!K.persistentId){_(K)&&d(K);return}!p(K.persistentId)&&_(K)&&S({...K,type:"alert"})},y=()=>{(n==null?void 0:n.type)==="alert"&&T(),!(!n||a)&&(c(!0),setTimeout(()=>{o(null),c(!1),document.body.style.overflow="unset"},300))},R=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&T(),y()},P=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&T(),y()},T=()=>{n!=null&&n.persistentId&&w(n.persistentId)},Y={modal:n,showModal:S,showAlert:d,showConfirmation:b,showConditionalAlert:k,closeModal:y,isModalVisible:!!n,hasAlertBeenShown:p,markSpecificAlertAsShown:w};return v.jsxs(P5.Provider,{value:Y,children:[e,n&&v.jsx(E5,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?R:null,cancelText:n.cancelText||null,onCancel:n.cancelText?P:n.canClose?y:null,isClosing:a,customButton:n.customButton})]})},j5={BASE_URL:"https://api.posterfy.space"},R5=j5.BASE_URL;class M5{constructor(t=R5){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,o={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`);try{const a=await fetch(n,o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.error("API request failed:",a),a}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const $n=new M5,l0=O.createContext(),$a=()=>{const e=O.useContext(l0);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},O5=({children:e})=>{const[t,r]=O.useState(null),[n,o]=O.useState(!0),[a,c]=O.useState(!1);O.useEffect(()=>{(async()=>{const _=new URLSearchParams(window.location.search).get("token");_&&(localStorage.setItem("authToken",_),$n.setAuthToken(_),window.history.replaceState({},document.title,window.location.pathname)),await l()})()},[]);const l=async()=>{if(!localStorage.getItem("authToken")){r(null),c(!1),o(!1);return}try{const b=await $n.getCurrentUser();r(b.user),c(!0),o(!1)}catch{localStorage.removeItem("authToken"),$n.setAuthToken(null),r(null),c(!1),o(!1)}},S={user:t,loading:n,isAuthenticated:a,loginWithGoogle:()=>{window.location.href=$n.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=$n.getSpotifyAuthUrl()},logout:async()=>{try{await $n.logout(),localStorage.removeItem("authToken"),$n.setAuthToken(null),r(null),c(!1)}catch(d){console.error("Logout failed:",d),localStorage.removeItem("authToken"),$n.setAuthToken(null),r(null),c(!1)}},checkAuthStatus:l,updateUser:d=>{r(d)}};return v.jsx(l0.Provider,{value:S,children:e})};function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Zs.apply(this,arguments)}function F5(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var D5=["cdnSuffix","cdnUrl","countryCode","style","svg"],z5="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",B5="svg",U5=127397,c0=function(t){var r=t.cdnSuffix,n=r===void 0?B5:r,o=t.cdnUrl,a=o===void 0?z5:o,c=t.countryCode,l=t.style,h=t.svg,f=h===void 0?!1:h,p=F5(t,D5);if(typeof c!="string")return null;if(f){var w=""+a+c.toLowerCase()+"."+n;return O.createElement("img",Object.assign({},p,{src:w,style:Zs({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},l)}))}var S=c.toUpperCase().replace(/./g,function(d){return String.fromCodePoint(d.charCodeAt(0)+U5)});return O.createElement("span",Object.assign({role:"img"},p,{style:Zs({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},l)}),S)};const H5=z.div`
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
`,ws=z.button`
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
`,ys=z.span`
  margin-left: 8px;
`,Ss=z(c0)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function Y5(){const[e,t]=O.useState(!1),[r,n]=O.useState(!1),{i18n:o}=lr();O.useEffect(()=>{const f=localStorage.getItem("language");f&&o.changeLanguage(f);const p=w=>{w.target.closest(".language-selector")||a()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[o]);const a=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},c=f=>{f.stopPropagation(),e?a():t(!0)},l=f=>{o.changeLanguage(f),localStorage.setItem("language",f),a(),c5(f)},h=()=>{switch(o.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return v.jsxs(H5,{className:"language-selector",children:[v.jsx(q5,{onClick:c,"aria-label":"Select language",children:v.jsx($5,{children:v.jsx(c0,{countryCode:h(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&v.jsxs(V5,{className:r?"closing":"",children:[v.jsx(W5,{}),v.jsxs(G5,{children:[v.jsxs(ws,{onClick:()=>l("pt"),children:[v.jsx(Ss,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(ys,{children:"Português"})]}),v.jsxs(ws,{onClick:()=>l("en"),children:[v.jsx(Ss,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(ys,{children:"English"})]}),v.jsxs(ws,{onClick:()=>l("es"),children:[v.jsx(Ss,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(ys,{children:"Español"})]}),v.jsxs(ws,{onClick:()=>l("zh"),children:[v.jsx(Ss,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),v.jsx(ys,{children:"中文"})]})]})]})]})}function X5(e){return Tt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function u0(e){return Tt({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function h0(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Z5(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function J5(e){return Tt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Q5(e){return Tt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function f0(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function K5(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function ep(e){return Tt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function tp(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function rp(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function np(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const ip=z.div`
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
`;function dp(){const[e,t]=O.useState(!1),[r,n]=O.useState(!1),{theme:o,setSpecificTheme:a}=ol(),c=[{id:"light",name:"Light",color:"#f0efeb",icon:v.jsx(np,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:v.jsx(K5,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:v.jsx(J5,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:v.jsx(Q5,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:v.jsx(ep,{}),isLight:!1}],l=c.find(w=>w.id===o)||c[0];O.useEffect(()=>{const w=S=>{S.target.closest(".theme-selector")||h()};return document.addEventListener("click",w),()=>document.removeEventListener("click",w)},[]);const h=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=w=>{w.stopPropagation(),e?h():t(!0)},p=w=>{a(w),h()};return v.jsxs(ip,{className:"theme-selector",children:[v.jsx(op,{onClick:f,"aria-label":"Select theme",children:v.jsx(ap,{themeColor:l.color,isLight:l.isLight,children:l.icon})}),e&&v.jsxs(sp,{className:r?"closing":"",children:[v.jsx(lp,{}),v.jsx(cp,{children:c.map(w=>v.jsxs(up,{onClick:()=>p(w.id),children:[v.jsx(hp,{className:"theme-preview",color:w.color,isLight:w.isLight,children:w.icon}),v.jsx(fp,{children:w.name})]},w.id))})]})]})}function pp(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"},child:[]}]})(e)}function d0(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function mp(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const gp=z.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: var(--backgroundColor);
  padding: ${({scrolled:e})=>"13px 0"};
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
`;function Js({hideLogo:e=!1,hideAccount:t=!1}){const[r,n]=O.useState(!1),[o,a]=O.useState(!0),[c,l]=O.useState(0),[h,f]=O.useState(!1),p=".space",{user:w,isAuthenticated:S}=$a(),d=yo();O.useEffect(()=>{const _=()=>{const k=window.scrollY;k<=10?(a(!0),n(!1)):(k<c?a(!0):a(!1),n(!0)),l(k)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[c]);const b=()=>{d(S?"/dashboard":"/login")};return v.jsxs(gp,{scrolled:r,visible:o,children:[v.jsxs(vp,{children:[!e&&v.jsxs(bp,{onClick:()=>d("/"),children:[v.jsx(Sp,{children:v.jsx(gi,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),v.jsxs(xp,{children:["Posterfy",v.jsx(wp,{children:p})]})]}),v.jsxs(_p,{children:[v.jsx(Y5,{}),v.jsx(dp,{}),!t&&v.jsx(Cp,{onClick:b,children:v.jsx(Ap,{children:w!=null&&w.avatar?v.jsx(Lp,{src:w.avatar}):v.jsx(kp,{})})})]})]}),v.jsx(yp,{scrolled:r})]})}const p0=Yt`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;Yt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const Np=Yt`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,Ep=z.footer`
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
`,Ip=z.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,Pp=z.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${p0} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,Tp=z.div`
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
`,Rp=z.div`
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
`,Mp=z.h2`
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
`,Fp=z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,Dp=z.a`
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
`;const zp=z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${p0} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,Bp=z.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,Up=z.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,Wu=z.p`
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
`;function Hp(){const{t:e}=lr(),{theme:t,setSpecificTheme:r}=ol(),n=new Date().getFullYear();return v.jsxs(Ep,{children:[v.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:v.jsxs("div",{children:[v.jsx("h4",{children:"Album Poster Generator Links"}),v.jsxs("nav",{children:[v.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),v.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),v.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),v.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),v.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),v.jsxs(Ip,{children:[v.jsxs(Pp,{children:[v.jsxs(Tp,{children:[v.jsxs(jp,{children:[v.jsx(Rp,{children:v.jsx(gi,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"})}),v.jsx(Mp,{children:"Posterfy"})]}),v.jsx(Op,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),v.jsx(Fp,{children:v.jsxs(Dp,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[v.jsx(X5,{})," ",e("ViewGitHub","View on GitHub")]})})]}),v.jsxs(zp,{children:[v.jsx(Bp,{children:v.jsxs(Wu,{children:[v.jsx(f0,{}),e("MadeBy","Made with love by")," ",v.jsx("a",{href:"https://avictormorais.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),v.jsx(Up,{children:v.jsxs(Wu,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function Rl({showNavbar:e=!0,showFooter:t=!0}){return v.jsxs(v.Fragment,{children:[e&&v.jsx(Js,{}),v.jsx(dd,{}),t&&v.jsx(Hp,{})]})}function qp(e){return Tt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function $p(e){return Tt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const Vp="/assets/Posterfy%20-%20Graduation.JszPNno1.png",Wp="/assets/Posterfy%20-%20Blonde.CgecpDDh.png",Gp="/assets/Posterfy%20-%20SOS.CNKHszjL.png",Yp="/assets/Posterfy%20-%20Don't%20Be%20Dumb.QHClWo6O.png",Xp="/assets/Posterfy%20-%20Flower%20Boy.Dq6UXJvZ.png",Zp=[{id:1,coverImage:Vp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c126f7f19c7f0381e56156c94a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg",useUncompressed:!1,albumName:"Graduation",artistsName:"Kanye West",titleSize:200,artistsSize:"110",tracksSize:50,marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2007-09-11",titleRuntime:"Runtime",runtime:"54min 29s",backgroundColor:"#c49578",textColor:"#3d2834",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Good Morning
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
14. Good Night`,color1:"#26383f",color2:"#815532",color3:"#849acd",albumID:"4SZko61aMnmgvNhfhgTuD3",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:Wp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1c5649add07ed3720be9d5526",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music124/v4/68/f9/fe/68f9fec8-81b6-38b1-7e27-796c431436fa/814908025306.jpg",useUncompressed:!1,albumName:"Blonde",artistsName:"Frank Ocean",titleSize:200,artistsSize:"110",tracksSize:"47",marginTop:"170",marginSide:160,marginCover:-50,marginBackground:0,titleRelease:"Release date",releaseDate:"2016-08-20",titleRuntime:"Runtime",runtime:"1h 0min 17s",backgroundColor:"#e2e2e3",textColor:"#010101",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Nikes
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
17. Futura Free`,color1:"#90533b",color2:"#b47d5a",color3:"#648c5c",albumID:"3mH6qwIy9crq0I9YQbOuDf",coverZoom:5,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:Gp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Yp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
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
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:Xp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c18940ac99f49e44f59e6f7fb3",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/22/fd/10/22fd10a3-881d-2560-64e7-a9df650b9e47/17UM1IM42651.rgb.jpg",useUncompressed:!1,albumName:"Flower Boy",artistsName:"Tyler, The Creator",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2017-07-21",titleRuntime:"Runtime",runtime:"46min 39s",backgroundColor:"#ce9621",textColor:"#140b06",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Foreword
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
14. Enjoy Right Now, Today`,color1:"#e2c999",color2:"#c03319",color3:"#f4d16a",albumID:"2nkto6YNI4rUYTLqEwWJ3o",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],$i=(e={})=>{const[t,r]=O.useState(!1),n=O.useRef(null);return O.useEffect(()=>{const o=n.current,a=new IntersectionObserver(([c])=>{c.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return o&&a.observe(o),()=>{o&&a.unobserve(o)}},[e]),[n,t]},Jp=z.div`
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
`,Qp=z.div`
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
`,Kp=z.div`
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
`,em=z.div`
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
`,tm=z.div`
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
`,rm=z.button`
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
`,nm=z.button`
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
`,im=({onRecreate:e})=>{const{t}=lr(),[r,n]=O.useState(null),[o,a]=O.useState(!1),[c,l]=O.useState(!1),[h,f]=O.useState(null),[p,w]=O.useState(null),[S,d]=$i(),[b,_]=O.useState([]),k=[2,3,1,4,0];O.useEffect(()=>{d&&b.length===0&&k.forEach((T,Y)=>{setTimeout(()=>{_(K=>[...K,T])},Y*177)})},[d]),O.useEffect(()=>{const T=()=>{a(window.innerWidth<=770),l(window.innerWidth>480&&window.innerWidth<=1200)};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const y=(T,Y)=>{f(T),w(Y),document.body.style.overflow="hidden"},R=()=>{f(null),document.body.style.overflow="auto"},P=()=>{f(null),e(p),document.body.style.overflow="auto"};return v.jsxs(v.Fragment,{children:[v.jsx(Jp,{ref:S,children:Zp.map((T,Y)=>v.jsx(Qp,{index:Y,isHovered:r===Y,hoveredIndex:r,otherIsHovered:r!==null,isMobile:o,isTablet:c,$hasAppeared:b.includes(Y),onMouseEnter:()=>n(Y),onMouseLeave:()=>n(null),onClick:()=>y(T.coverImage||"/placeholder.svg",T.JSONConfig),children:v.jsx("img",{src:T.coverImage||"/placeholder.svg",alt:`${T.artist} - ${T.title}`})},T.id))}),h&&v.jsx(Kp,{onClick:R,children:v.jsxs(em,{onClick:T=>T.stopPropagation(),children:[v.jsxs(tm,{children:[v.jsx(rm,{onClick:R,children:"×"}),v.jsx(nm,{onClick:P,children:t("RecreatePoster")})]}),v.jsx("img",{src:h,alt:"Album cover"})]})})]})},om=z.div`
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
`,am=({onRecreate:e})=>v.jsx(om,{children:v.jsx(im,{onRecreate:e})}),sm=z.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
`,lm=z.div`
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
`,cm=z.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`,um=z.h1`
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
`,hm=z.p`
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
`,fm=z.div`
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
`,dm=z.div`
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

`,pm=z(qp)`
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
`;function mm({showAnimation:e=!1,onRecreate:t}){const{t:r}=lr(),{theme:n}=ol(),[o,a]=O.useState(!1);O.useEffect(()=>{if(e){const l=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(l)}},[e]);const c=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return v.jsxs(v.Fragment,{children:[v.jsxs(sm,{children:[v.jsxs(lm,{children:[v.jsxs(cm,{children:[v.jsx(um,{visible:o,children:"Posterfy"}),v.jsx(hm,{visible:o,delay:400,children:r("heroDescription")}),v.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[v.jsx("h2",{children:"Free Album Poster Generator"}),v.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),v.jsx("h3",{children:"Features:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Free album poster maker"}),v.jsx("li",{children:"Spotify integration"}),v.jsx("li",{children:"Custom poster design"}),v.jsx("li",{children:"High-quality downloads"}),v.jsx("li",{children:"Multiple format options"}),v.jsx("li",{children:"Professional templates"})]})]})]}),v.jsx(fm,{visible:o,children:v.jsx(dm,{children:v.jsx(gi,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),v.jsx(pm,{visible:o,onClick:c})]}),v.jsx(am,{onRecreate:t})]})}const gm=z.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,vm=z.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Va({text:e,type:t}){return v.jsx(v.Fragment,{children:t==1?v.jsx(gm,{children:e}):v.jsx(vm,{children:e})})}const bm=z.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,xm=z.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,wm=z.p`
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
`,Gu=z.div`
    display: flex;
`;function jc({title:e,paragraph:t}){return v.jsxs(bm,{children:[v.jsx(Gu,{children:v.jsx(xm,{children:e})}),v.jsx(Gu,{children:v.jsx(wm,{children:t})})]})}function ym(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Sm(e){return Tt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const _m=z.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,Cm=z(ym)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Am=z.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,km=z.hr`
    opacity: 0.15;
    margin: 5px;
`,Lm=z.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,Nm=z.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Uo({q:e,a:t}){const[r,n]=O.useState(!1);function o(){n(!r)}return v.jsxs(v.Fragment,{children:[v.jsxs(_m,{onClick:o,children:[v.jsx(Cm,{showA:r}),v.jsx(Am,{children:e})]}),v.jsx(km,{}),v.jsx(Lm,{showA:r,children:v.jsx(Nm,{showA:r,children:t})})]})}const Em=z.div`
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
`;function Pm(){const{t:e}=lr();return v.jsxs(Em,{id:"faq",children:[v.jsx(Va,{text:"FAQ",type:1}),v.jsxs(Im,{children:[v.jsx(Uo,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),v.jsx(Uo,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),v.jsx(Uo,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),v.jsx(Uo,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),v.jsx(Uo,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),v.jsx(Uo,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const Tm=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),v.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),v.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),v.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),v.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),v.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),v.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),v.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),v.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),v.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),v.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),v.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),v.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),v.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),v.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),v.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),v.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),v.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:o}),v.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:o}),v.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:o}),v.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:o}),v.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:o}),v.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:a})]}),jm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Rm=z.div`
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
`,Mm=z.p`
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
`;function Fm(){const{t:e}=lr();return v.jsxs(jm,{id:"share",children:[v.jsx(Va,{text:e("Share"),type:1}),v.jsx(jc,{title:e("ShareTitle")}),v.jsx(Rm,{children:v.jsx(Tm,{width:"100%"})}),v.jsx(Mm,{children:e("ShareDescription")}),v.jsx(Om,{children:e("ComingSoon")})]})}const Dm=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:o="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[v.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),v.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),v.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),v.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),v.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),v.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),v.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),v.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),v.jsx("g",{fill:r,opacity:"0.3",children:v.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),v.jsxs("g",{fill:t,opacity:"0.2",children:[v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),v.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),v.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),v.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),v.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),v.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),v.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),v.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),v.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),v.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),v.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),v.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),v.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),v.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),v.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),v.jsx("path",{fill:o,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),v.jsx("path",{fill:o,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),v.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),v.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),v.jsx("g",{clipPath:"url(#clip0_1_72)",children:v.jsx("path",{fill:o,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_1_72",children:v.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),zm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Bm=z.div`
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
`,Um=z.p`
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
`,Hm=z.button`
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
`;function qm(){const{t:e}=lr();return v.jsxs(zm,{id:"share",children:[v.jsx(Va,{text:e("Community"),type:1}),v.jsx(jc,{title:e("CommunityTitle")}),v.jsx(Bm,{children:v.jsx(Dm,{width:"100%"})}),v.jsx(Um,{children:e("CommunityDescription")}),v.jsx(Hm,{children:e("ComingSoon")})]})}const Yu=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Help improve the project!",pt:"Ajude a melhorar o projeto!",es:"¡Ayuda a mejorar el proyecto!",zh:"帮助改进项目！"},text:{en:"This project is open source and evolves with the community! Contribute with code, suggestions, or reporting bugs.",pt:"Esse projeto é open source e evolui com a comunidade! Contribua com código, sugestões ou reportando bugs.",es:"¡Este proyecto es open source y evoluciona con la comunidad! Contribuye con código, sugerencias o reportando errores.",zh:"这个项目是开源的，随着社区的发展而发展！贡献代码、建议或报告错误。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Contribute on Github",pt:"Contribua no Github",es:"Contribuye en Github",zh:"在 Github 上贡献"}}],$m=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Vm=z.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Wm=z.div`
    display: flex;
    align-items: center;
    position: relative;
`,Gm=z.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Ym=z(f0)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Xm=z.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,Zm=z.p`
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
    margin-top: 100px;
`,Qm=z.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Km=z.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,eg=z.a`
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
`;function tg(){var a,c,l;const{i18n:e}=lr(),{t}=lr(),r=((a=e.language)==null?void 0:a.split("-")[0])||"en",n=Yu.filter(h=>h.key!=="contribute_area"),o=Yu.find(h=>h.key==="contribute_area");return v.jsxs($m,{id:"thanks",children:[v.jsx(Va,{text:t("Thanks"),type:1}),n.map((h,f)=>v.jsxs(Vm,{children:[v.jsxs(Wm,{children:[v.jsx(Gm,{className:"circle"}),v.jsx(Ym,{className:"heart"}),v.jsx(Xm,{tabIndex:0,role:"button",onClick:()=>window.open(h.url,"_blank","noopener,noreferrer"),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&window.open(h.url,"_blank","noopener,noreferrer")},onMouseEnter:p=>{const w=p.target.parentNode;w.querySelector(".circle").style.opacity=0,w.querySelector(".heart").style.opacity=1},onMouseLeave:p=>{const w=p.target.parentNode;w.querySelector(".circle").style.opacity=.8,w.querySelector(".heart").style.opacity=0},children:h.title[r]||h.title.en})]}),v.jsx(Zm,{children:h.text[r]||h.text.en})]},h.key)),o&&v.jsxs(Jm,{children:[v.jsx(Qm,{children:o.title[r]||o.title.en}),v.jsx(Km,{children:o.text[r]||o.text.en}),v.jsx(eg,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:((c=o.button)==null?void 0:c[r])||((l=o.button)==null?void 0:l.en)||"Github"})]})]})}const rg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ng=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ig=z.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function zi({title:e,value:t,onChange:r}){return v.jsxs(rg,{children:[v.jsx(ng,{children:e}),v.jsx(ig,{placeholder:e,value:t,onChange:r})]})}const og=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ag=z.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,sg=z.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Xu({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return v.jsxs(og,{children:[v.jsx(ag,{placeholder:e,value:e,onChange:r}),v.jsx(sg,{placeholder:e,value:t,onChange:n})]})}const lg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,cg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ug=z.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,hg=z.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,fg=z.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function Ea({title:e,value:t,onClick:r}){const n=O.useRef(null);return v.jsxs(lg,{"data-color-input":!0,children:[v.jsx(cg,{children:e}),v.jsxs(ug,{ref:n,onClick:()=>{const o=n.current.getBoundingClientRect();r({top:o.bottom+1+window.scrollY,left:o.left+window.scrollX})},children:[v.jsx(hg,{style:{backgroundColor:t}}),v.jsx(fg,{children:t})]})]})}function al(){return(al=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m0(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function hc(e){var t=O.useRef(e),r=O.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var Da=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},ja=function(e){return"touches"in e},fc=function(e){return e&&e.ownerDocument.defaultView||self},Zu=function(e,t,r){var n=e.getBoundingClientRect(),o=ja(t)?function(a,c){for(var l=0;l<a.length;l++)if(a[l].identifier===c)return a[l];return a[0]}(t.touches,r):t;return{left:Da((o.pageX-(n.left+fc(e).pageXOffset))/n.width),top:Da((o.pageY-(n.top+fc(e).pageYOffset))/n.height)}},Ju=function(e){!ja(e)&&e.preventDefault()},g0=Tr.memo(function(e){var t=e.onMove,r=e.onKey,n=m0(e,["onMove","onKey"]),o=O.useRef(null),a=hc(t),c=hc(r),l=O.useRef(null),h=O.useRef(!1),f=O.useMemo(function(){var d=function(k){Ju(k),(ja(k)?k.touches.length>0:k.buttons>0)&&o.current?a(Zu(o.current,k,l.current)):_(!1)},b=function(){return _(!1)};function _(k){var y=h.current,R=fc(o.current),P=k?R.addEventListener:R.removeEventListener;P(y?"touchmove":"mousemove",d),P(y?"touchend":"mouseup",b)}return[function(k){var y=k.nativeEvent,R=o.current;if(R&&(Ju(y),!function(T,Y){return Y&&!ja(T)}(y,h.current)&&R)){if(ja(y)){h.current=!0;var P=y.changedTouches||[];P.length&&(l.current=P[0].identifier)}R.focus(),a(Zu(R,y,l.current)),_(!0)}},function(k){var y=k.which||k.keyCode;y<37||y>40||(k.preventDefault(),c({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},_]},[c,a]),p=f[0],w=f[1],S=f[2];return O.useEffect(function(){return S},[S]),Tr.createElement("div",al({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:o,onKeyDown:w,tabIndex:0,role:"slider"}))}),Rc=function(e){return e.filter(Boolean).join(" ")},v0=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,a=Rc(["react-colorful__pointer",e.className]);return Tr.createElement("div",{className:a,style:{top:100*o+"%",left:100*r+"%"}},Tr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},Ar=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},dg=function(e){return bg(dc(e))},dc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Ar(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Ar(parseInt(e.substring(6,8),16)/255,2):1}},pg=function(e){return vg(gg(e))},mg=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:Ar(e.h),s:Ar(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:Ar(o/2),a:Ar(n,2)}},pc=function(e){var t=mg(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},gg=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),c=n*(1-r),l=n*(1-(t-a)*r),h=n*(1-(1-t+a)*r),f=a%6;return{r:Ar(255*[n,l,c,c,h,n][f]),g:Ar(255*[h,n,n,l,c,c][f]),b:Ar(255*[c,c,h,n,n,l][f]),a:Ar(o,2)}},_s=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},vg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?_s(Ar(255*o)):"";return"#"+_s(t)+_s(r)+_s(n)+a},bg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),c=a-Math.min(t,r,n),l=c?a===t?(r-n)/c:a===r?2+(n-t)/c:4+(t-r)/c:0;return{h:Ar(60*(l<0?l+6:l)),s:Ar(a?c/a*100:0),v:Ar(a/255*100),a:o}},xg=Tr.memo(function(e){var t=e.hue,r=e.onChange,n=Rc(["react-colorful__hue",e.className]);return Tr.createElement("div",{className:n},Tr.createElement(g0,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:Da(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":Ar(t),"aria-valuemax":"360","aria-valuemin":"0"},Tr.createElement(v0,{className:"react-colorful__hue-pointer",left:t/360,color:pc({h:t,s:100,v:100,a:1})})))}),wg=Tr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:pc({h:t.h,s:100,v:100,a:1})};return Tr.createElement("div",{className:"react-colorful__saturation",style:n},Tr.createElement(g0,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:Da(t.s+100*o.left,0,100),v:Da(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Ar(t.s)+"%, Brightness "+Ar(t.v)+"%"},Tr.createElement(v0,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:pc(t)})))}),b0=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},yg=function(e,t){return e.toLowerCase()===t.toLowerCase()||b0(dc(e),dc(t))};function Sg(e,t,r){var n=hc(r),o=O.useState(function(){return e.toHsva(t)}),a=o[0],c=o[1],l=O.useRef({color:t,hsva:a});O.useEffect(function(){if(!e.equal(t,l.current.color)){var f=e.toHsva(t);l.current={hsva:f,color:t},c(f)}},[t,e]),O.useEffect(function(){var f;b0(a,l.current.hsva)||e.equal(f=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:f},n(f))},[a,e,n]);var h=O.useCallback(function(f){c(function(p){return Object.assign({},p,f)})},[]);return[a,h]}var _g=typeof window<"u"?O.useLayoutEffect:O.useEffect,Cg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Qu=new Map,Ag=function(e){_g(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Qu.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Qu.set(t,r);var n=Cg();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},kg=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,a=e.onChange,c=m0(e,["className","colorModel","color","onChange"]),l=O.useRef(null);Ag(l);var h=Sg(r,o,a),f=h[0],p=h[1],w=Rc(["react-colorful",t]);return Tr.createElement("div",al({},c,{ref:l,className:w}),Tr.createElement(wg,{hsva:f,onChange:p}),Tr.createElement(xg,{hue:f.h,onChange:p,className:"react-colorful__last-control"}))},Lg={defaultColor:"000",toHsva:dg,fromHsva:function(e){return pg({h:e.h,s:e.s,v:e.v,a:1})},equal:yg},Ng=function(e){return Tr.createElement(kg,al({},e,{colorModel:Lg}))};const Eg=z.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,Ig=z(Ng)`
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
`,Ml=z.div`
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
`,Pg=z.div`
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
`,jg=z.input`
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
`,Rg=z(Z5)`
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
`,Mg=z(tp)`
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
`,Og=z(d0)`
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
`,Fg=z(h0)`
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
`,Dg=z.img`
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
`;function zg({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:o,onClose:a}){const[c,l]=O.useState(e),[h,f]=O.useState(!1),[p,w]=O.useState(null),S=O.useRef(null),d=O.useRef(null);function b(){f(!h)}function _(P){l(P.target.value===""?"#":P.target.value)}function k(P){const T=S.current,K=d.current.getBoundingClientRect(),ne=T.getContext("2d"),X=Math.floor(P.clientX-K.left),M=Math.floor(P.clientY-K.top),E=`#${[...ne.getImageData(X,M,1,1).data].slice(0,3).map(F=>F.toString(16).padStart(2,"0")).join("")}`;l(E),b()}function y(P){const T=S.current,K=d.current.getBoundingClientRect(),ne=Math.floor(P.clientX-K.left),X=Math.floor(P.clientY-K.top);if(T){const M=T.getContext("2d");try{const E=`#${[...M.getImageData(ne,X,1,1).data].slice(0,3).map(F=>F.toString(16).padStart(2,"0")).join("")}`;w(E)}catch{w(null)}}}function R(){w(null)}return v.jsxs(Eg,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[v.jsx("canvas",{ref:S,style:{display:"none"}}),h?v.jsx(Dg,{ref:d,crossOrigin:"anonymous",draggable:"false",src:t,onClick:k,onMouseMove:y,onMouseLeave:R,onLoad:()=>{const P=S.current,T=P.getContext("2d"),Y=d.current;P.width=Y.width,P.height=Y.height,T.drawImage(Y,0,0,Y.width,Y.height)},style:p?{borderColor:p}:{}}):v.jsx(Ig,{color:c,onChange:l}),v.jsx(Ml,{children:r.map(P=>v.jsx(Pg,{style:{backgroundColor:P},onClick:()=>l(P)},P))}),v.jsxs(Ml,{children:[v.jsx(Tg,{children:"Hex"}),v.jsx(jg,{value:c,onChange:_})]}),v.jsxs(Ml,{children:[h?v.jsx(Mg,{onClick:b}):v.jsx(Rg,{onClick:b}),v.jsx(Og,{onClick:a}),v.jsx(Fg,{onClick:()=>{o(c),l5(c)}})]})]})}const Bg=z.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,Ug=z.canvas`
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
`,Cs=z.div`
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
`,As=z.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,ks=z.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,Ls=z.input`
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
`,Ns=z.input`
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
`,Hg=z.div`
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
`,qg=z(d0)`
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
`,$g=z(h0)`
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
`;function Vg({position:e,albumCoverUrl:t,initialZoom:r=0,initialHorizontalPosition:n=0,initialVerticalPosition:o=0,initialBlur:a=0,onDone:c,onClose:l}){const{t:h}=lr(),[f,p]=O.useState(r),[w,S]=O.useState(n),[d,b]=O.useState(o),[_,k]=O.useState(a),y=O.useRef(null),R=O.useRef(null),P=O.useRef(!1),T=O.useRef({x:0,y:0});O.useEffect(()=>{if(t){const M=new Image;M.crossOrigin="anonymous",M.src=t,M.onload=()=>{R.current=M,X()}}},[t]),O.useEffect(()=>{X()},[f,w,d,_]);const Y=M=>{const J=y.current;if(!J)return;const E=J.getBoundingClientRect(),F=M.clientX-E.left,G=M.clientY-E.top,$=J.width,oe=J.height,ce=Math.min($,oe),de=1+f/100,ee=ce*de,se=$/2,Ce=oe/2,be=$/2*(w/50),L=oe/2*(d/50),H=se-ee/2+be,V=Ce-ee/2+L;F>=H&&F<=H+ee&&G>=V&&G<=V+ee&&(P.current=!0,T.current={x:F,y:G},J.style.cursor="grabbing")},K=M=>{if(!P.current)return;const J=y.current;if(!J)return;const E=J.getBoundingClientRect(),F=M.clientX-E.left,G=M.clientY-E.top,$=F-T.current.x,oe=G-T.current.y;T.current={x:F,y:G};const ce=J.width,de=J.height,ee=w+$/(ce/2)*50,se=d+oe/(de/2)*50;S(Math.max(-50,Math.min(50,ee))),b(Math.max(-50,Math.min(50,se)))},ne=()=>{P.current=!1;const M=y.current;M&&(M.style.cursor="grab")};O.useEffect(()=>{const M=y.current;if(M)return M.addEventListener("mousedown",Y),window.addEventListener("mousemove",K),window.addEventListener("mouseup",ne),()=>{M.removeEventListener("mousedown",Y),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",ne)}},[f,w,d,_]);const X=()=>{const M=y.current;if(!M)return;const J=M.getContext("2d"),E=M.width,F=M.height;J.clearRect(0,0,E,F);const G=Math.min(E,F),$=1+f/100,oe=G*$,ce=E/2,de=F/2,ee=E/2*(w/50),se=F/2*(d/50),Ce=ce-oe/2+ee,be=de-oe/2+se;R.current&&(J.filter=`blur(${_/5}px)`,J.drawImage(R.current,Ce,be,oe,oe),J.filter="none")};return v.jsxs(Bg,{style:{position:"absolute",top:e.top,left:e.left,zIndex:2147483647},children:[v.jsx(Ug,{ref:y,width:200,height:200}),v.jsxs(Cs,{children:[v.jsxs(As,{children:[v.jsx(ks,{children:h("COVER_EDITOR_Size")}),v.jsx(Ls,{type:"number",value:f,onChange:M=>p(parseInt(M.target.value)||0)})]}),v.jsx(Ns,{type:"range",min:"-100",max:"100",step:"1",value:f,onChange:M=>p(Number(M.target.value))})]}),v.jsxs(Cs,{children:[v.jsxs(As,{children:[v.jsx(ks,{children:h("COVER_EDITOR_Blur")}),v.jsx(Ls,{type:"number",value:_,onChange:M=>k(parseInt(M.target.value)||0)})]}),v.jsx(Ns,{type:"range",min:"0",max:"20",step:"1",value:_,onChange:M=>k(Number(M.target.value))})]}),v.jsxs(Cs,{children:[v.jsxs(As,{children:[v.jsx(ks,{children:h("COVER_EDITOR_HorizontalPosition")}),v.jsx(Ls,{type:"number",value:w,onChange:M=>S(parseInt(M.target.value)||0)})]}),v.jsx(Ns,{type:"range",min:"-50",max:"50",step:"1",value:w,onChange:M=>S(Number(M.target.value))})]}),v.jsxs(Cs,{children:[v.jsxs(As,{children:[v.jsx(ks,{children:h("COVER_EDITOR_VerticalPosition")}),v.jsx(Ls,{type:"number",value:d,onChange:M=>b(parseInt(M.target.value)||0)})]}),v.jsx(Ns,{type:"range",min:"-50",max:"50",step:"1",value:d,onChange:M=>b(Number(M.target.value))})]}),v.jsxs(Hg,{children:[v.jsx(qg,{onClick:l}),v.jsx($g,{onClick:()=>c({zoom:f,horizontalPosition:w,verticalPosition:d,blur:_})})]})]})}const Wg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Gg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Yg=z.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Xg=z.input`
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
`,Zg=z.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function Es({title:e,text:t,value:r,onChange:n}){const o=()=>n(!r);return v.jsxs(Wg,{children:[v.jsx(Gg,{children:e}),v.jsxs(Yg,{onClick:o,children:[v.jsx(Xg,{checked:r,readOnly:!0,type:"checkbox"}),v.jsx(Zg,{active:r,children:t})]})]})}const Jg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Qg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Kg=z.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,e3=z.input`
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
`,t3=z.p`
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
`;function Ku({title:e,text:t,onChange:r,accept:n="image/png, image/jpg, image/jpeg",icon:o}){const a=O.useRef(),c=()=>{a.current.click()},l=h=>{const f=h.target.files[0];t=f.name,f&&r(f)};return v.jsxs(Jg,{onClick:c,children:[v.jsx(Qg,{children:e}),v.jsxs(Kg,{children:[o&&v.jsx(o,{style:{width:"16px",height:"16px",marginLeft:"10px"}}),v.jsx(e3,{ref:a,type:"file",accept:n,onChange:l}),v.jsx(t3,{active:!0,children:t})]})]})}const r3=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,n3=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,i3=z.div`
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
`,o3=z.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,a3=z.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function s3({title:e,text:t,onClick:r,icon:n}){const o=O.useRef(null);return v.jsxs(r3,{children:[v.jsx(n3,{children:e}),v.jsxs(i3,{ref:o,onClick:()=>{const a=o.current.getBoundingClientRect();r({top:a.bottom+1+window.scrollY,left:a.left+window.scrollX})},children:[n&&v.jsx(o3,{children:v.jsx(n,{})}),v.jsx(a3,{children:t})]})]})}function l3(e){return Tt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function c3(e){return Tt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}function x0(e){return Tt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const u3=z.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,h3=z.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,f3=z.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,d3=z(x0)`
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
`;function w0(){const{t:e}=lr();return v.jsxs(u3,{children:[v.jsx(d3,{}),v.jsx(h3,{children:e("Loading")}),v.jsx(f3,{children:e("LoadingText")})]})}var y0={},sl={},S0={exports:{}},p3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m3=p3,g3=m3;function _0(){}function C0(){}C0.resetWarningCache=_0;var v3=function(){function e(n,o,a,c,l,h){if(h!==g3){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C0,resetWarningCache:_0};return r.PropTypes=r,r};S0.exports=v3();var A0=S0.exports,Mc={},ll={},k0={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(pf,function(){var r=function(h,f){return h<f?-1:h>f?1:0},n=function(h){return h.reduce(function(f,p){return f+p},0)},o=function(){function h(p){this.colors=p}var f=h.prototype;return f.palette=function(){return this.colors},f.map=function(p){return p},h}(),a=function(){function h(d,b,_){return(d<<10)+(b<<5)+_}function f(d){var b=[],_=!1;function k(){b.sort(d),_=!0}return{push:function(y){b.push(y),_=!1},peek:function(y){return _||k(),y===void 0&&(y=b.length-1),b[y]},pop:function(){return _||k(),b.pop()},size:function(){return b.length},map:function(y){return b.map(y)},debug:function(){return _||k(),b}}}function p(d,b,_,k,y,R,P){var T=this;T.r1=d,T.r2=b,T.g1=_,T.g2=k,T.b1=y,T.b2=R,T.histo=P}function w(){this.vboxes=new f(function(d,b){return r(d.vbox.count()*d.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function S(d,b){if(b.count()){var _=b.r2-b.r1+1,k=b.g2-b.g1+1,y=Math.max.apply(null,[_,k,b.b2-b.b1+1]);if(b.count()==1)return[b.copy()];var R,P,T,Y,K=0,ne=[],X=[];if(y==_)for(R=b.r1;R<=b.r2;R++){for(Y=0,P=b.g1;P<=b.g2;P++)for(T=b.b1;T<=b.b2;T++)Y+=d[h(R,P,T)]||0;ne[R]=K+=Y}else if(y==k)for(R=b.g1;R<=b.g2;R++){for(Y=0,P=b.r1;P<=b.r2;P++)for(T=b.b1;T<=b.b2;T++)Y+=d[h(P,R,T)]||0;ne[R]=K+=Y}else for(R=b.b1;R<=b.b2;R++){for(Y=0,P=b.r1;P<=b.r2;P++)for(T=b.g1;T<=b.g2;T++)Y+=d[h(P,T,R)]||0;ne[R]=K+=Y}return ne.forEach(function(M,J){X[J]=K-M}),function(M){var J,E,F,G,$,oe=M+"1",ce=M+"2",de=0;for(R=b[oe];R<=b[ce];R++)if(ne[R]>K/2){for(F=b.copy(),G=b.copy(),$=(J=R-b[oe])<=(E=b[ce]-R)?Math.min(b[ce]-1,~~(R+E/2)):Math.max(b[oe],~~(R-1-J/2));!ne[$];)$++;for(de=X[$];!de&&ne[$-1];)de=X[--$];return F[ce]=$,G[oe]=F[ce]+1,[F,G]}}(y==_?"r":y==k?"g":"b")}}return p.prototype={volume:function(d){var b=this;return b._volume&&!d||(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(d){var b=this,_=b.histo;if(!b._count_set||d){var k,y,R,P=0;for(k=b.r1;k<=b.r2;k++)for(y=b.g1;y<=b.g2;y++)for(R=b.b1;R<=b.b2;R++)P+=_[h(k,y,R)]||0;b._count=P,b._count_set=!0}return b._count},copy:function(){var d=this;return new p(d.r1,d.r2,d.g1,d.g2,d.b1,d.b2,d.histo)},avg:function(d){var b=this,_=b.histo;if(!b._avg||d){var k,y,R,P,T=0,Y=0,K=0,ne=0;if(b.r1===b.r2&&b.g1===b.g2&&b.b1===b.b2)b._avg=[b.r1<<3,b.g1<<3,b.b1<<3];else{for(y=b.r1;y<=b.r2;y++)for(R=b.g1;R<=b.g2;R++)for(P=b.b1;P<=b.b2;P++)T+=k=_[h(y,R,P)]||0,Y+=k*(y+.5)*8,K+=k*(R+.5)*8,ne+=k*(P+.5)*8;b._avg=T?[~~(Y/T),~~(K/T),~~(ne/T)]:[~~(8*(b.r1+b.r2+1)/2),~~(8*(b.g1+b.g2+1)/2),~~(8*(b.b1+b.b2+1)/2)]}}return b._avg},contains:function(d){var b=this,_=d[0]>>3;return gval=d[1]>>3,bval=d[2]>>3,_>=b.r1&&_<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},w.prototype={push:function(d){this.vboxes.push({vbox:d,color:d.avg()})},palette:function(){return this.vboxes.map(function(d){return d.color})},size:function(){return this.vboxes.size()},map:function(d){for(var b=this.vboxes,_=0;_<b.size();_++)if(b.peek(_).vbox.contains(d))return b.peek(_).color;return this.nearest(d)},nearest:function(d){for(var b,_,k,y=this.vboxes,R=0;R<y.size();R++)((_=Math.sqrt(Math.pow(d[0]-y.peek(R).color[0],2)+Math.pow(d[1]-y.peek(R).color[1],2)+Math.pow(d[2]-y.peek(R).color[2],2)))<b||b===void 0)&&(b=_,k=y.peek(R).color);return k},forcebw:function(){var d=this.vboxes;d.sort(function(y,R){return r(n(y.color),n(R.color))});var b=d[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(d[0].color=[0,0,0]);var _=d.length-1,k=d[_].color;k[0]>251&&k[1]>251&&k[2]>251&&(d[_].color=[255,255,255])}},{quantize:function(d,b){if(!Number.isInteger(b)||b<1||b>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!d.length||b<2||b>256||!d.length||b<2||b>256)return!1;for(var _=[],k=new Set,y=0;y<d.length;y++){var R=d[y],P=R.join(",");k.has(P)||(k.add(P),_.push(R))}if(_.length<=b)return new o(_);var T=function(J){var E,F=new Array(32768);return J.forEach(function(G){E=h(G[0]>>3,G[1]>>3,G[2]>>3),F[E]=(F[E]||0)+1}),F}(d);T.forEach(function(){});var Y=function(J,E){var F,G,$,oe=1e6,ce=0,de=1e6,ee=0,se=1e6,Ce=0;return J.forEach(function(be){(F=be[0]>>3)<oe?oe=F:F>ce&&(ce=F),(G=be[1]>>3)<de?de=G:G>ee&&(ee=G),($=be[2]>>3)<se?se=$:$>Ce&&(Ce=$)}),new p(oe,ce,de,ee,se,Ce,E)}(d,T),K=new f(function(J,E){return r(J.count(),E.count())});function ne(J,E){for(var F,G=J.size(),$=0;$<1e3;){if(G>=E||$++>1e3)return;if((F=J.pop()).count()){var oe=S(T,F),ce=oe[0],de=oe[1];if(!ce)return;J.push(ce),de&&(J.push(de),G++)}else J.push(F),$++}}K.push(Y),ne(K,.75*b);for(var X=new f(function(J,E){return r(J.count()*J.volume(),E.count()*E.volume())});K.size();)X.push(K.pop());ne(X,b);for(var M=new w;X.size();)M.push(X.pop());return M}}}().quantize,c=function(h){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=h.naturalWidth,this.height=this.canvas.height=h.naturalHeight,this.context.drawImage(h,0,0,this.width,this.height)};c.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var l=function(){};return l.prototype.getColor=function(h,f){return f===void 0&&(f=10),this.getPalette(h,5,f)[0]},l.prototype.getPalette=function(h,f,p){var w=function(_){var k=_.colorCount,y=_.quality;if(k!==void 0&&Number.isInteger(k)){if(k===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");k=Math.max(k,2),k=Math.min(k,20)}else k=10;return(y===void 0||!Number.isInteger(y)||y<1)&&(y=10),{colorCount:k,quality:y}}({colorCount:f,quality:p}),S=new c(h),d=function(_,k,y){for(var R,P,T,Y,K,ne=_,X=[],M=0;M<k;M+=y)P=ne[0+(R=4*M)],T=ne[R+1],Y=ne[R+2],((K=ne[R+3])===void 0||K>=125)&&(P>250&&T>250&&Y>250||X.push([P,T,Y]));return X}(S.getImageData().data,S.width*S.height,w.quality),b=a(d,w.colorCount);return b?b.palette():null},l.prototype.getColorFromUrl=function(h,f,p){var w=this,S=document.createElement("img");S.addEventListener("load",function(){var d=w.getPalette(S,5,p);f(d[0],h)}),S.src=h},l.prototype.getImageData=function(h,f){var p=new XMLHttpRequest;p.open("GET",h,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var w=new Uint8Array(this.response);i=w.length;for(var S=new Array(i),d=0;d<w.length;d++)S[d]=String.fromCharCode(w[d]);var b=S.join(""),_=window.btoa(b);f("data:image/png;base64,"+_)}},p.send()},l.prototype.getColorAsync=function(h,f,p){var w=this;this.getImageData(h,function(S){var d=document.createElement("img");d.addEventListener("load",function(){var b=w.getPalette(d,5,p);f(b[0],this)}),d.src=S})},l})})(k0);var L0=k0.exports,cl={},Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});Oc.default=b3;function b3(e,t,r){return`rgb(${e}, ${t}, ${r})`}var Fc={};Object.defineProperty(Fc,"__esModule",{value:!0});Fc.default=x3;function x3(e,t,r){return`#${[e,t,r].map(n=>{const o=n.toString(16);return o.length===1?`0${o}`:o}).join("")}`}Object.defineProperty(cl,"__esModule",{value:!0});cl.default=S3;var w3=N0(Oc),y3=N0(Fc);function N0(e){return e&&e.__esModule?e:{default:e}}function S3(e,t){switch(t){case"rgbString":return(0,w3.default)(e[0],e[1],e[2]);case"hex":return(0,y3.default)(e[0],e[1],e[2]);default:return e}}var ul={};Object.defineProperty(ul,"__esModule",{value:!0});ul.default=_3;function _3(e,t=void 0){return new Promise((r,n)=>{const o=new Image;o.addEventListener("load",()=>{r(o)}),o.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),o.crossOrigin=t,o.src=e})}Object.defineProperty(ll,"__esModule",{value:!0});ll.default=L3;var C3=Dc(L0),A3=Dc(cl),k3=Dc(ul);function Dc(e){return e&&e.__esModule?e:{default:e}}async function L3(e,t="rgbString",r=null,n=10){const o=await(0,k3.default)(e,r),c=new C3.default().getColor(o,n);return(0,A3.default)(c,t)}Object.defineProperty(Mc,"__esModule",{value:!0});Mc.default=P3;var e1=O,N3=E3(ll);function E3(e){return e&&e.__esModule?e:{default:e}}const E0={loading:!0,data:null,error:void 0};function I3(e,t){switch(t.type){case"getColor":return E0;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function P3(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:o=10}=r,[a,c]=(0,e1.useReducer)(I3,E0);return(0,e1.useEffect)(()=>{c({type:"getColor"}),(0,N3.default)(e,t,n,o).then(l=>{c({type:"resolveColor",payload:l})}).catch(l=>{c({type:"rejectColor",payload:l})})},[e]),a}Object.defineProperty(sl,"__esModule",{value:!0});sl.default=void 0;var t1=zc(O),Ia=zc(A0),T3=zc(Mc);function zc(e){return e&&e.__esModule?e:{default:e}}const Bc=({src:e,format:t,crossOrigin:r,quality:n,children:o})=>{const a=(0,T3.default)(e,t,{crossOrigin:r,quality:n});return t1.default.createElement(t1.default.Fragment,null,o(a))};Bc.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Bc.propTypes={children:Ia.default.any.isRequired,src:Ia.default.string.isRequired,format:Ia.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:Ia.default.string,quality:Ia.default.number};var j3=Bc;sl.default=j3;var hl={},Uc={},fl={};Object.defineProperty(fl,"__esModule",{value:!0});fl.default=F3;var R3=Hc(L0),M3=Hc(cl),O3=Hc(ul);function Hc(e){return e&&e.__esModule?e:{default:e}}async function F3(e,t=2,r="rgbString",n=null,o=10){const a=await(0,O3.default)(e,n);return new R3.default().getPalette(a,t,o).map(h=>(0,M3.default)(h,r))}Object.defineProperty(Uc,"__esModule",{value:!0});Uc.default=U3;var r1=O,D3=z3(fl);function z3(e){return e&&e.__esModule?e:{default:e}}const I0={loading:!0,data:[],error:void 0};function B3(e,t){switch(t.type){case"getPalette":return I0;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function U3(e,t=2,r="rgbString",n={}){const{crossOrigin:o=null,quality:a=10}=n,[c,l]=(0,r1.useReducer)(B3,I0);return(0,r1.useEffect)(()=>{l({type:"getPalette"}),(0,D3.default)(e,t,r,o,a).then(h=>{l({type:"resolvePalette",payload:h})}).catch(h=>{l({type:"rejectPalette",payload:h})})},[e]),c}Object.defineProperty(hl,"__esModule",{value:!0});hl.default=void 0;var n1=qc(O),Ho=qc(A0),H3=qc(Uc);function qc(e){return e&&e.__esModule?e:{default:e}}const $c=({src:e,colorCount:t,format:r,crossOrigin:n,quality:o,children:a})=>{const c=(0,H3.default)(e,t,r,{crossOrigin:n,quality:o});return n1.default.createElement(n1.default.Fragment,null,a(c))};$c.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};$c.propTypes={children:Ho.default.any.isRequired,src:Ho.default.string.isRequired,format:Ho.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:Ho.default.number,crossOrigin:Ho.default.string,quality:Ho.default.number};var q3=$c;hl.default=q3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return o.default}}),e.default=void 0;var t=a(sl),r=a(hl),n=a(ll),o=a(fl);function a(l){return l&&l.__esModule?l:{default:l}}var c=t.default;e.default=c})(y0);const $3=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,mc=O.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:o,customFont:a,scale:c=1,isThumbnail:l=!1},h)=>{const f=O.useRef(null);O.useImperativeHandle(h,()=>({getCanvas:()=>f.current})),O.useEffect(()=>{(async()=>{if(!r)return;const d=f.current,b=d.getContext("2d"),_=2480,k=3508,y=Math.round(_*c),R=Math.round(k*c),P=Math.round((parseInt(t.marginSide)||0)*c),T=Math.round((parseInt(t.marginTop)||0)*c),Y=Math.round((parseInt(t.marginCover)||0)*c),K=Math.round((parseInt(t.marginBackground)||0)*c),ne=Math.round((parseInt(t.coverHorizontalPosition)||0)*c),X=Math.round((parseInt(t.coverVerticalPosition)||0)*c),M=Math.round((parseInt(t.coverBlur)||0)*c*(l?.5:2)),J=async ee=>{const se=new Image;return se.crossOrigin="anonymous",se.src=ee,new Promise(Ce=>{se.onload=()=>{const be=y-Y*2,L=be/y*11,H=Y+ne*L,V=Y+X*L;if(M>0&&(b.filter=`blur(${M}px)`),b.drawImage(se,H,V,be,be),b.filter="none",t.useFade){let Q=b.createLinearGradient(0,0,0,Math.round((3e3-(parseInt(t.marginBackground)||0))*c));const re=$(t.backgroundColor);Q.addColorStop(.5,`rgba(${re.r}, ${re.g}, ${re.b}, 0)`),Q.addColorStop(.8,t.backgroundColor),b.fillStyle=Q,b.fillRect(0,0,d.width,Math.round((2500-(parseInt(t.marginBackground)||0))*c))}Ce()}})},E=async()=>{const ee=Math.round(500*c),se=Math.round(134*c),Ce=$3(t.textColor,ee,se),be=new Blob([Ce],{type:"image/svg+xml;charset=utf-8"}),L=URL.createObjectURL(be),H=new Image;return H.src=L,new Promise(V=>{H.onload=()=>{b.globalAlpha="0.5",b.drawImage(H,y-Math.round(70*c)-ee,Math.round(50*c),ee,se),b.globalAlpha="1",URL.revokeObjectURL(L),V()}})},F=async()=>{let ee=t.titleSize?parseInt(t.titleSize):230,se=Math.round(ee*c);const Ce=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){b.font=`bold ${se}px ${Ce}`;let Ie=b.measureText(t.albumName).width;for(;Ie>y-P*2;)ee-=1,se=Math.round(ee*c),b.font=`bold ${se}px ${Ce}`,Ie=b.measureText(t.albumName).width;n&&!l&&n(ee,!0)}else b.font=`bold ${se}px ${Ce}`;b.fillStyle=t.textColor;const be=Math.round(2500*c),L=Math.round(2790*c);t.showTracklist?b.fillText(t.albumName,P,be+T):b.fillText(t.albumName,P,L+T);let H=t.artistsSize?Math.round(parseInt(t.artistsSize)*c):Math.round(110*c);b.font=`bold ${H}px ${a||"Montserrat"}`,t.showTracklist?b.fillText(t.artistsName,P,be+T+H*1.3):b.fillText(t.artistsName,P,Math.round(2820*c)+T+H);const V=Math.round(70*c),Q=Math.round(60*c),re=Math.round(3310*c),ue=Math.round(3390*c);b.font=`bold ${V}px ${a||"Montserrat"}`,b.fillText(t.titleRelease,P,re);let ge=b.measureText(t.titleRelease).width;b.fillText(t.titleRuntime,ge+P+Math.round(100*c),re),b.globalAlpha=.7,b.font=`bold ${Q}px ${a||"Montserrat"}`,b.fillText(t.runtime,ge+P+Math.round(100*c),ue),b.fillText(t.releaseDate,P,ue),b.globalAlpha=1;const pe=Math.round(3368*c),xe=Math.round(145*c),Ae=Math.round(30*c);b.fillStyle=t.color1,b.fillRect(Math.round((2045-(parseInt(t.marginSide)||0))*c),pe,xe,Ae),b.fillStyle=t.color2,b.fillRect(Math.round((2190-(parseInt(t.marginSide)||0))*c),pe,xe,Ae),b.fillStyle=t.color3,b.fillRect(Math.round((2335-(parseInt(t.marginSide)||0))*c),pe,xe,Ae)},G=async()=>{b.fillStyle=t.textColor;let ee=t.tracksSize?parseInt(t.tracksSize):50,se=ee*c;const Ce=parseInt(t.marginTop||0),be=parseInt(t.artistsSize)||110,L=Math.round((2500+Ce+be*1.3+130)*c),V=Math.round(3310*c)-Math.round(50*c),Q=y-P,re=t.tracklist.split(`
`).filter(Ie=>Ie.trim()!=="");if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const Ie=ve=>{const W=ve*c;b.font=`bold ${W}px ${a||"Montserrat"}`;const Ke=ve*1.3*c;let qe=P+Math.round(10*c),Ne=0,Me=L,je=0;return re.forEach(nt=>{Me+Ke>=V&&(Me=L,qe=qe+Ne+W,Ne=0);const De=b.measureText(`${nt}`).width,gt=qe+De;De>Ne&&(Ne=De),je=Math.max(je,gt),Me+=Ke}),je};let Te=Ie(ee);for(;Te>Q&&ee>1;)ee-=1,Te=Ie(ee);se=ee*c,o&&!l&&o(ee,!0)}b.font=`bold ${se}px ${a||"Montserrat"}`;const ge=ee*1.3*c;let pe=P+Math.round(7*c),xe=0,Ae=L;re.forEach(Ie=>{Ae+ge>=V&&(Ae=L,pe=pe+xe+se,xe=0);const Te=b.measureText(`${Ie}`).width;Te>xe&&(xe=Te),b.fillText(`${Ie}`,pe,Ae),Ae+=ge})},$=ee=>{const se=parseInt(ee.replace("#",""),16);return{r:se>>16&255,g:se>>8&255,b:se&255}},oe=ee=>{const se=be=>{const L=be/255;return L<=.03928?L/12.92:Math.pow((L+.055)/1.055,2.4)};return .2126*se(ee.r)+.7152*se(ee.g)+.0722*se(ee.b)>.179?"black":"white"},ce=async()=>{const ee=$(t.backgroundColor),se=oe(ee),Ce=t.textColor,be=l?320:640,L=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${se}/${be}/spotify:album:${t.albumID}`;let V=await(await fetch(L)).text();se=="black"?V=V.replace(/fill="#000000"/g,`fill="${Ce}"`):V=V.replace(/fill="#ffffff"/g,`fill="${Ce}"`),V=V.replace(t.backgroundColor,"transparent");const Q=new Blob([V],{type:"image/svg+xml"}),re=URL.createObjectURL(Q);return new Promise(ue=>{const ge=new Image;ge.src=re,ge.onload=function(){const pe=Math.round(480*c),xe=Math.round(120*c),Ae=Math.round((2020-(parseInt(t.marginSide)||0))*c),Ie=Math.round(3235*c);b.drawImage(ge,Ae,Ie,pe,xe);const Te=l?"image/jpeg":"image/png",ve=l?.7:1,W=d.toDataURL(Te,ve);e(W),URL.revokeObjectURL(re),ue()}})},de=async()=>{b.fillStyle=t.backgroundColor;const ee=Math.round(2480*c)-K,se=R-ee;b.fillRect(0,ee,y,se)};b.clearRect(0,0,y,R),b.fillStyle=t.backgroundColor,b.fillRect(0,0,y,R),t.useUncompressed?await J(await t.uncompressedAlbumCover):await J(t.albumCover),await de(),await F(),t.showTracklist&&await G(),t.useWatermark&&await E(),await ce()})()},[r,t,e,a,c,l,n,o]);const p=Math.round(2480*c),w=Math.round(3508*c);return v.jsx("canvas",{ref:f,width:p,height:w,style:{display:"none"}})});mc.displayName="CanvasPoster";const V3=z.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Bt({children:e,animationDelay:t=0,...r}){const[n,o]=O.useState(!1);return O.useEffect(()=>{const a=setTimeout(()=>{o(!0)},t);return()=>clearTimeout(a)},[t]),v.jsx(V3,{visible:n,animationDelay:t,...r,children:e})}const W3="modulepreload",G3=function(e){return"/"+e},i1={},Ol=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(r.map(h=>{if(h=G3(h),h in i1)return;i1[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const w=document.createElement("link");if(w.rel=f?"stylesheet":W3,f||(w.as="script"),w.crossOrigin="",w.href=h,l&&w.setAttribute("nonce",l),document.head.appendChild(w),f)return new Promise((S,d)=>{w.addEventListener("load",S),w.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return o.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};function Pt(e){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(e)}var Pn=Uint8Array,cn=Uint16Array,Vc=Int32Array,Wc=new Pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gc=new Pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o1=new Pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),P0=function(e,t){for(var r=new cn(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new Vc(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},T0=P0(Wc,2),Y3=T0.b,gc=T0.r;Y3[28]=258,gc[258]=28;var X3=P0(Gc,0),a1=X3.r,vc=new cn(32768);for(var Ut=0;Ut<32768;++Ut){var Bi=(Ut&43690)>>1|(Ut&21845)<<1;Bi=(Bi&52428)>>2|(Bi&13107)<<2,Bi=(Bi&61680)>>4|(Bi&3855)<<4,vc[Ut]=((Bi&65280)>>8|(Bi&255)<<8)>>1}var Ra=function(e,t,r){for(var n=e.length,o=0,a=new cn(t);o<n;++o)e[o]&&++a[e[o]-1];var c=new cn(t);for(o=1;o<t;++o)c[o]=c[o-1]+a[o-1]<<1;var l;if(r){l=new cn(1<<t);var h=15-t;for(o=0;o<n;++o)if(e[o])for(var f=o<<4|e[o],p=t-e[o],w=c[e[o]-1]++<<p,S=w|(1<<p)-1;w<=S;++w)l[vc[w]>>h]=f}else for(l=new cn(n),o=0;o<n;++o)e[o]&&(l[o]=vc[c[e[o]-1]++]>>15-e[o]);return l},xo=new Pn(288);for(var Ut=0;Ut<144;++Ut)xo[Ut]=8;for(var Ut=144;Ut<256;++Ut)xo[Ut]=9;for(var Ut=256;Ut<280;++Ut)xo[Ut]=7;for(var Ut=280;Ut<288;++Ut)xo[Ut]=8;var Qs=new Pn(32);for(var Ut=0;Ut<32;++Ut)Qs[Ut]=5;var Z3=Ra(xo,9,0),J3=Ra(Qs,5,0),j0=function(e){return(e+7)/8|0},Q3=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Pn(e.subarray(t,r))},fi=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},Pa=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},Fl=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,a=r.slice();if(!o)return{t:M0,l:0};if(o==1){var c=new Pn(r[0].s+1);return c[r[0].s]=1,{t:c,l:1}}r.sort(function(Y,K){return Y.f-K.f}),r.push({s:-1,f:25001});var l=r[0],h=r[1],f=0,p=1,w=2;for(r[0]={s:-1,f:l.f+h.f,l,r:h};p!=o-1;)l=r[r[f].f<r[w].f?f++:w++],h=r[f!=p&&r[f].f<r[w].f?f++:w++],r[p++]={s:-1,f:l.f+h.f,l,r:h};for(var S=a[0].s,n=1;n<o;++n)a[n].s>S&&(S=a[n].s);var d=new cn(S+1),b=bc(r[p-1],d,0);if(b>t){var n=0,_=0,k=b-t,y=1<<k;for(a.sort(function(K,ne){return d[ne.s]-d[K.s]||K.f-ne.f});n<o;++n){var R=a[n].s;if(d[R]>t)_+=y-(1<<b-d[R]),d[R]=t;else break}for(_>>=k;_>0;){var P=a[n].s;d[P]<t?_-=1<<t-d[P]++-1:++n}for(;n>=0&&_;--n){var T=a[n].s;d[T]==t&&(--d[T],++_)}b=t}return{t:new Pn(d),l:b}},bc=function(e,t,r){return e.s==-1?Math.max(bc(e.l,t,r+1),bc(e.r,t,r+1)):t[e.s]=r},s1=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new cn(++t),n=0,o=e[0],a=1,c=function(h){r[n++]=h},l=1;l<=t;++l)if(e[l]==o&&l!=t)++a;else{if(!o&&a>2){for(;a>138;a-=138)c(32754);a>2&&(c(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(c(o),--a;a>6;a-=6)c(8304);a>2&&(c(a-3<<5|8208),a=0)}for(;a--;)c(o);a=1,o=e[l]}return{c:r.subarray(0,n),n:t}},Ta=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},R0=function(e,t,r){var n=r.length,o=j0(t+2);e[o]=n&255,e[o+1]=n>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<n;++a)e[o+a+4]=r[a];return(o+4+n)*8},l1=function(e,t,r,n,o,a,c,l,h,f,p){fi(t,p++,r),++o[256];for(var w=Fl(o,15),S=w.t,d=w.l,b=Fl(a,15),_=b.t,k=b.l,y=s1(S),R=y.c,P=y.n,T=s1(_),Y=T.c,K=T.n,ne=new cn(19),X=0;X<R.length;++X)++ne[R[X]&31];for(var X=0;X<Y.length;++X)++ne[Y[X]&31];for(var M=Fl(ne,7),J=M.t,E=M.l,F=19;F>4&&!J[o1[F-1]];--F);var G=f+5<<3,$=Ta(o,xo)+Ta(a,Qs)+c,oe=Ta(o,S)+Ta(a,_)+c+14+3*F+Ta(ne,J)+2*ne[16]+3*ne[17]+7*ne[18];if(h>=0&&G<=$&&G<=oe)return R0(t,p,e.subarray(h,h+f));var ce,de,ee,se;if(fi(t,p,1+(oe<$)),p+=2,oe<$){ce=Ra(S,d,0),de=S,ee=Ra(_,k,0),se=_;var Ce=Ra(J,E,0);fi(t,p,P-257),fi(t,p+5,K-1),fi(t,p+10,F-4),p+=14;for(var X=0;X<F;++X)fi(t,p+3*X,J[o1[X]]);p+=3*F;for(var be=[R,Y],L=0;L<2;++L)for(var H=be[L],X=0;X<H.length;++X){var V=H[X]&31;fi(t,p,Ce[V]),p+=J[V],V>15&&(fi(t,p,H[X]>>5&127),p+=H[X]>>12)}}else ce=Z3,de=xo,ee=J3,se=Qs;for(var X=0;X<l;++X){var Q=n[X];if(Q>255){var V=Q>>18&31;Pa(t,p,ce[V+257]),p+=de[V+257],V>7&&(fi(t,p,Q>>23&31),p+=Wc[V]);var re=Q&31;Pa(t,p,ee[re]),p+=se[re],re>3&&(Pa(t,p,Q>>5&8191),p+=Gc[re])}else Pa(t,p,ce[Q]),p+=de[Q]}return Pa(t,p,ce[256]),p+de[256]},K3=new Vc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),M0=new Pn(0),e4=function(e,t,r,n,o,a){var c=a.z||e.length,l=new Pn(n+c+5*(1+Math.ceil(c/7e3))+o),h=l.subarray(n,l.length-o),f=a.l,p=(a.r||0)&7;if(t){p&&(h[0]=a.r>>3);for(var w=K3[t-1],S=w>>13,d=w&8191,b=(1<<r)-1,_=a.p||new cn(32768),k=a.h||new cn(b+1),y=Math.ceil(r/3),R=2*y,P=function(ve){return(e[ve]^e[ve+1]<<y^e[ve+2]<<R)&b},T=new Vc(25e3),Y=new cn(288),K=new cn(32),ne=0,X=0,M=a.i||0,J=0,E=a.w||0,F=0;M+2<c;++M){var G=P(M),$=M&32767,oe=k[G];if(_[$]=oe,k[G]=$,E<=M){var ce=c-M;if((ne>7e3||J>24576)&&(ce>423||!f)){p=l1(e,h,0,T,Y,K,X,J,F,M-F,p),J=ne=X=0,F=M;for(var de=0;de<286;++de)Y[de]=0;for(var de=0;de<30;++de)K[de]=0}var ee=2,se=0,Ce=d,be=$-oe&32767;if(ce>2&&G==P(M-be))for(var L=Math.min(S,ce)-1,H=Math.min(32767,M),V=Math.min(258,ce);be<=H&&--Ce&&$!=oe;){if(e[M+ee]==e[M+ee-be]){for(var Q=0;Q<V&&e[M+Q]==e[M+Q-be];++Q);if(Q>ee){if(ee=Q,se=be,Q>L)break;for(var re=Math.min(be,Q-2),ue=0,de=0;de<re;++de){var ge=M-be+de&32767,pe=_[ge],xe=ge-pe&32767;xe>ue&&(ue=xe,oe=ge)}}}$=oe,oe=_[$],be+=$-oe&32767}if(se){T[J++]=268435456|gc[ee]<<18|a1[se];var Ae=gc[ee]&31,Ie=a1[se]&31;X+=Wc[Ae]+Gc[Ie],++Y[257+Ae],++K[Ie],E=M+ee,++ne}else T[J++]=e[M],++Y[e[M]]}}for(M=Math.max(M,E);M<c;++M)T[J++]=e[M],++Y[e[M]];p=l1(e,h,f,T,Y,K,X,J,F,M-F,p),f||(a.r=p&7|h[p/8|0]<<3,p-=7,a.h=k,a.p=_,a.i=M,a.w=E)}else{for(var M=a.w||0;M<c+f;M+=65535){var Te=M+65535;Te>=c&&(h[p/8|0]=f,Te=c),p=R0(h,p+1,e.subarray(M,Te))}a.i=c}return Q3(l,0,n+j0(p)+o)},O0=function(){var e=1,t=0;return{p:function(r){for(var n=e,o=t,a=r.length|0,c=0;c!=a;){for(var l=Math.min(c+2655,a);c<l;++c)o+=n+=r[c];n=(n&65535)+15*(n>>16),o=(o&65535)+15*(o>>16)}e=n,t=o},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},t4=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),c=new Pn(a.length+e.length);c.set(a),c.set(e,a.length),e=c,o.w=a.length}return e4(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,o)},F0=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},r4=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var o=O0();o.p(t.dictionary),F0(e,2,o.d())}};function xc(e,t){t||(t={});var r=O0();r.p(e);var n=t4(e,t,t.dictionary?6:2,4);return r4(n,t),F0(n,n.length-4,r.d()),n}var n4=typeof TextDecoder<"u"&&new TextDecoder,i4=0;try{n4.decode(M0,{stream:!0}),i4=1}catch{}function o4(e){if(Array.isArray(e))return e}function a4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,a,c,l=[],h=!0,f=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(h=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);h=!0);}catch(p){f=!0,o=p}finally{try{if(!h&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(f)throw o}}return l}}function c1(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s4(e,t){if(e){if(typeof e=="string")return c1(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c1(e,t):void 0}}function l4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u1(e,t){return o4(e)||a4(e,t)||s4(e,t)||l4()}function h1(e,t="utf8"){return new TextDecoder(t).decode(e)}const c4=new TextEncoder;function u4(e){return c4.encode(e)}const h4=1024*8,f4=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),Dl={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class Yc{constructor(t=h4,r={}){Pe(this,"buffer");Pe(this,"byteLength");Pe(this,"byteOffset");Pe(this,"length");Pe(this,"offset");Pe(this,"lastWrittenByte");Pe(this,"littleEndian");Pe(this,"_data");Pe(this,"_mark");Pe(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const o=r.offset?r.offset>>>0:0,a=t.byteLength-o;let c=o;(ArrayBuffer.isView(t)||t instanceof Yc)&&(t.byteLength!==t.buffer.byteLength&&(c=t.byteOffset+o),t=t.buffer),n?this.lastWrittenByte=a:this.lastWrittenByte=0,this.buffer=t,this.length=a,this.byteLength=a,this.byteOffset=c,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,c,a),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,o=new Uint8Array(n);o.set(new Uint8Array(this.buffer)),this.buffer=o.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=Dl[r].BYTES_PER_ELEMENT*t,o=this.byteOffset+this.offset,a=this.buffer.slice(o,o+n);if(this.littleEndian===f4&&r!=="uint8"&&r!=="int8"){const l=new Uint8Array(this.buffer.slice(o,o+n));l.reverse();const h=new Dl[r](l.buffer);return this.offset+=n,h.reverse(),h}const c=new Dl[r](a);return this.offset+=n,c}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return h1(this.readBytes(t))}decodeText(t=1,r="utf8"){return h1(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(u4(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function ta(e){let t=e.length;for(;--t>=0;)e[t]=0}const d4=3,p4=258,D0=29,m4=256,g4=m4+1+D0,z0=30,v4=512,b4=new Array((g4+2)*2);ta(b4);const x4=new Array(z0*2);ta(x4);const w4=new Array(v4);ta(w4);const y4=new Array(p4-d4+1);ta(y4);const S4=new Array(D0);ta(S4);const _4=new Array(z0);ta(_4);const C4=(e,t,r,n)=>{let o=e&65535|0,a=e>>>16&65535|0,c=0;for(;r!==0;){c=r>2e3?2e3:r,r-=c;do o=o+t[n++]|0,a=a+o|0;while(--c);o%=65521,a%=65521}return o|a<<16|0};var wc=C4;const A4=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},k4=new Uint32Array(A4()),L4=(e,t,r,n)=>{const o=k4,a=n+r;e^=-1;for(let c=n;c<a;c++)e=e>>>8^o[(e^t[c])&255];return e^-1};var Hn=L4,yc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B0={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const N4=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var E4=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)N4(r,n)&&(e[n]=r[n])}}return e},I4=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,o=0,a=e.length;n<a;n++){let c=e[n];r.set(c,o),o+=c.length}return r},U0={assign:E4,flattenChunks:I4};let H0=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{H0=!1}const za=new Uint8Array(256);for(let e=0;e<256;e++)za[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;za[254]=za[254]=1;var P4=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,o,a,c=e.length,l=0;for(o=0;o<c;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),l+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(l),a=0,o=0;a<l;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<c&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t};const T4=(e,t)=>{if(t<65534&&e.subarray&&H0)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var j4=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,o;const a=new Array(r*2);for(o=0,n=0;n<r;){let c=e[n++];if(c<128){a[o++]=c;continue}let l=za[c];if(l>4){a[o++]=65533,n+=l-1;continue}for(c&=l===2?31:l===3?15:7;l>1&&n<r;)c=c<<6|e[n++]&63,l--;if(l>1){a[o++]=65533;continue}c<65536?a[o++]=c:(c-=65536,a[o++]=55296|c>>10&1023,a[o++]=56320|c&1023)}return T4(a,o)},R4=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+za[e[r]]>t?r:t},Sc={string2buf:P4,buf2string:j4,utf8border:R4};function M4(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var O4=M4;const Is=16209,F4=16191;var D4=function(t,r){let n,o,a,c,l,h,f,p,w,S,d,b,_,k,y,R,P,T,Y,K,ne,X,M,J;const E=t.state;n=t.next_in,M=t.input,o=n+(t.avail_in-5),a=t.next_out,J=t.output,c=a-(r-t.avail_out),l=a+(t.avail_out-257),h=E.dmax,f=E.wsize,p=E.whave,w=E.wnext,S=E.window,d=E.hold,b=E.bits,_=E.lencode,k=E.distcode,y=(1<<E.lenbits)-1,R=(1<<E.distbits)-1;e:do{b<15&&(d+=M[n++]<<b,b+=8,d+=M[n++]<<b,b+=8),P=_[d&y];t:for(;;){if(T=P>>>24,d>>>=T,b-=T,T=P>>>16&255,T===0)J[a++]=P&65535;else if(T&16){Y=P&65535,T&=15,T&&(b<T&&(d+=M[n++]<<b,b+=8),Y+=d&(1<<T)-1,d>>>=T,b-=T),b<15&&(d+=M[n++]<<b,b+=8,d+=M[n++]<<b,b+=8),P=k[d&R];r:for(;;){if(T=P>>>24,d>>>=T,b-=T,T=P>>>16&255,T&16){if(K=P&65535,T&=15,b<T&&(d+=M[n++]<<b,b+=8,b<T&&(d+=M[n++]<<b,b+=8)),K+=d&(1<<T)-1,K>h){t.msg="invalid distance too far back",E.mode=Is;break e}if(d>>>=T,b-=T,T=a-c,K>T){if(T=K-T,T>p&&E.sane){t.msg="invalid distance too far back",E.mode=Is;break e}if(ne=0,X=S,w===0){if(ne+=f-T,T<Y){Y-=T;do J[a++]=S[ne++];while(--T);ne=a-K,X=J}}else if(w<T){if(ne+=f+w-T,T-=w,T<Y){Y-=T;do J[a++]=S[ne++];while(--T);if(ne=0,w<Y){T=w,Y-=T;do J[a++]=S[ne++];while(--T);ne=a-K,X=J}}}else if(ne+=w-T,T<Y){Y-=T;do J[a++]=S[ne++];while(--T);ne=a-K,X=J}for(;Y>2;)J[a++]=X[ne++],J[a++]=X[ne++],J[a++]=X[ne++],Y-=3;Y&&(J[a++]=X[ne++],Y>1&&(J[a++]=X[ne++]))}else{ne=a-K;do J[a++]=J[ne++],J[a++]=J[ne++],J[a++]=J[ne++],Y-=3;while(Y>2);Y&&(J[a++]=J[ne++],Y>1&&(J[a++]=J[ne++]))}}else if(T&64){t.msg="invalid distance code",E.mode=Is;break e}else{P=k[(P&65535)+(d&(1<<T)-1)];continue r}break}}else if(T&64)if(T&32){E.mode=F4;break e}else{t.msg="invalid literal/length code",E.mode=Is;break e}else{P=_[(P&65535)+(d&(1<<T)-1)];continue t}break}}while(n<o&&a<l);Y=b>>3,n-=Y,b-=Y<<3,d&=(1<<b)-1,t.next_in=n,t.next_out=a,t.avail_in=n<o?5+(o-n):5-(n-o),t.avail_out=a<l?257+(l-a):257-(a-l),E.hold=d,E.bits=b};const qo=15,f1=852,d1=592,p1=0,zl=1,m1=2,z4=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),B4=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),U4=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),H4=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),q4=(e,t,r,n,o,a,c,l)=>{const h=l.bits;let f=0,p=0,w=0,S=0,d=0,b=0,_=0,k=0,y=0,R=0,P,T,Y,K,ne,X=null,M;const J=new Uint16Array(qo+1),E=new Uint16Array(qo+1);let F=null,G,$,oe;for(f=0;f<=qo;f++)J[f]=0;for(p=0;p<n;p++)J[t[r+p]]++;for(d=h,S=qo;S>=1&&J[S]===0;S--);if(d>S&&(d=S),S===0)return o[a++]=1<<24|64<<16|0,o[a++]=1<<24|64<<16|0,l.bits=1,0;for(w=1;w<S&&J[w]===0;w++);for(d<w&&(d=w),k=1,f=1;f<=qo;f++)if(k<<=1,k-=J[f],k<0)return-1;if(k>0&&(e===p1||S!==1))return-1;for(E[1]=0,f=1;f<qo;f++)E[f+1]=E[f]+J[f];for(p=0;p<n;p++)t[r+p]!==0&&(c[E[t[r+p]]++]=p);if(e===p1?(X=F=c,M=20):e===zl?(X=z4,F=B4,M=257):(X=U4,F=H4,M=0),R=0,p=0,f=w,ne=a,b=d,_=0,Y=-1,y=1<<d,K=y-1,e===zl&&y>f1||e===m1&&y>d1)return 1;for(;;){G=f-_,c[p]+1<M?($=0,oe=c[p]):c[p]>=M?($=F[c[p]-M],oe=X[c[p]-M]):($=96,oe=0),P=1<<f-_,T=1<<b,w=T;do T-=P,o[ne+(R>>_)+T]=G<<24|$<<16|oe|0;while(T!==0);for(P=1<<f-1;R&P;)P>>=1;if(P!==0?(R&=P-1,R+=P):R=0,p++,--J[f]===0){if(f===S)break;f=t[r+c[p]]}if(f>d&&(R&K)!==Y){for(_===0&&(_=d),ne+=w,b=f-_,k=1<<b;b+_<S&&(k-=J[b+_],!(k<=0));)b++,k<<=1;if(y+=1<<b,e===zl&&y>f1||e===m1&&y>d1)return 1;Y=R&K,o[Y]=d<<24|b<<16|ne-a|0}}return R!==0&&(o[ne+R]=f-_<<24|64<<16|0),l.bits=d,0};var Ma=q4;const $4=0,q0=1,$0=2,{Z_FINISH:g1,Z_BLOCK:V4,Z_TREES:Ps,Z_OK:wo,Z_STREAM_END:W4,Z_NEED_DICT:G4,Z_STREAM_ERROR:_n,Z_DATA_ERROR:V0,Z_MEM_ERROR:W0,Z_BUF_ERROR:Y4,Z_DEFLATED:v1}=B0,dl=16180,b1=16181,x1=16182,w1=16183,y1=16184,S1=16185,_1=16186,C1=16187,A1=16188,k1=16189,Ks=16190,di=16191,Bl=16192,L1=16193,Ul=16194,N1=16195,E1=16196,I1=16197,P1=16198,Ts=16199,js=16200,T1=16201,j1=16202,R1=16203,M1=16204,O1=16205,Hl=16206,F1=16207,D1=16208,Vt=16209,G0=16210,Y0=16211,X4=852,Z4=592,J4=15,Q4=J4,z1=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function K4(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const So=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<dl||t.mode>Y0?1:0},X0=e=>{if(So(e))return _n;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=dl,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(X4),t.distcode=t.distdyn=new Int32Array(Z4),t.sane=1,t.back=-1,wo},Z0=e=>{if(So(e))return _n;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,X0(e)},J0=(e,t)=>{let r;if(So(e))return _n;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?_n:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,Z0(e))},Q0=(e,t)=>{if(!e)return _n;const r=new K4;e.state=r,r.strm=e,r.window=null,r.mode=dl;const n=J0(e,t);return n!==wo&&(e.state=null),n},e6=e=>Q0(e,Q4);let B1=!0,ql,$l;const t6=e=>{if(B1){ql=new Int32Array(512),$l=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Ma(q0,e.lens,0,288,ql,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Ma($0,e.lens,0,32,$l,0,e.work,{bits:5}),B1=!1}e.lencode=ql,e.lenbits=9,e.distcode=$l,e.distbits=5},K0=(e,t,r,n)=>{let o;const a=e.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),n>=a.wsize?(a.window.set(t.subarray(r-a.wsize,r),0),a.wnext=0,a.whave=a.wsize):(o=a.wsize-a.wnext,o>n&&(o=n),a.window.set(t.subarray(r-n,r-n+o),a.wnext),n-=o,n?(a.window.set(t.subarray(r-n,r),0),a.wnext=n,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0},r6=(e,t)=>{let r,n,o,a,c,l,h,f,p,w,S,d,b,_,k=0,y,R,P,T,Y,K,ne,X;const M=new Uint8Array(4);let J,E;const F=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(So(e)||!e.output||!e.input&&e.avail_in!==0)return _n;r=e.state,r.mode===di&&(r.mode=Bl),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,p=r.bits,w=l,S=h,X=wo;e:for(;;)switch(r.mode){case dl:if(r.wrap===0){r.mode=Bl;break}for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,M[0]=f&255,M[1]=f>>>8&255,r.check=Hn(r.check,M,2,0),f=0,p=0,r.mode=b1;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=Vt;break}if((f&15)!==v1){e.msg="unknown compression method",r.mode=Vt;break}if(f>>>=4,p-=4,ne=(f&15)+8,r.wbits===0&&(r.wbits=ne),ne>15||ne>r.wbits){e.msg="invalid window size",r.mode=Vt;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?k1:di,f=0,p=0;break;case b1:for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.flags=f,(r.flags&255)!==v1){e.msg="unknown compression method",r.mode=Vt;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=Vt;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,r.check=Hn(r.check,M,2,0)),f=0,p=0,r.mode=x1;case x1:for(;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,M[2]=f>>>16&255,M[3]=f>>>24&255,r.check=Hn(r.check,M,4,0)),f=0,p=0,r.mode=w1;case w1:for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,r.check=Hn(r.check,M,2,0)),f=0,p=0,r.mode=y1;case y1:if(r.flags&1024){for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,r.check=Hn(r.check,M,2,0)),f=0,p=0}else r.head&&(r.head.extra=null);r.mode=S1;case S1:if(r.flags&1024&&(d=r.length,d>l&&(d=l),d&&(r.head&&(ne=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(a,a+d),ne)),r.flags&512&&r.wrap&4&&(r.check=Hn(r.check,n,d,a)),l-=d,a+=d,r.length-=d),r.length))break e;r.length=0,r.mode=_1;case _1:if(r.flags&2048){if(l===0)break e;d=0;do ne=n[a+d++],r.head&&ne&&r.length<65536&&(r.head.name+=String.fromCharCode(ne));while(ne&&d<l);if(r.flags&512&&r.wrap&4&&(r.check=Hn(r.check,n,d,a)),l-=d,a+=d,ne)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=C1;case C1:if(r.flags&4096){if(l===0)break e;d=0;do ne=n[a+d++],r.head&&ne&&r.length<65536&&(r.head.comment+=String.fromCharCode(ne));while(ne&&d<l);if(r.flags&512&&r.wrap&4&&(r.check=Hn(r.check,n,d,a)),l-=d,a+=d,ne)break e}else r.head&&(r.head.comment=null);r.mode=A1;case A1:if(r.flags&512){for(;p<16;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=Vt;break}f=0,p=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=di;break;case k1:for(;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}e.adler=r.check=z1(f),f=0,p=0,r.mode=Ks;case Ks:if(r.havedict===0)return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=p,G4;e.adler=r.check=1,r.mode=di;case di:if(t===V4||t===Ps)break e;case Bl:if(r.last){f>>>=p&7,p-=p&7,r.mode=Hl;break}for(;p<3;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}switch(r.last=f&1,f>>>=1,p-=1,f&3){case 0:r.mode=L1;break;case 1:if(t6(r),r.mode=Ts,t===Ps){f>>>=2,p-=2;break e}break;case 2:r.mode=E1;break;case 3:e.msg="invalid block type",r.mode=Vt}f>>>=2,p-=2;break;case L1:for(f>>>=p&7,p-=p&7;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Vt;break}if(r.length=f&65535,f=0,p=0,r.mode=Ul,t===Ps)break e;case Ul:r.mode=N1;case N1:if(d=r.length,d){if(d>l&&(d=l),d>h&&(d=h),d===0)break e;o.set(n.subarray(a,a+d),c),l-=d,a+=d,h-=d,c+=d,r.length-=d;break}r.mode=di;break;case E1:for(;p<14;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.nlen=(f&31)+257,f>>>=5,p-=5,r.ndist=(f&31)+1,f>>>=5,p-=5,r.ncode=(f&15)+4,f>>>=4,p-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Vt;break}r.have=0,r.mode=I1;case I1:for(;r.have<r.ncode;){for(;p<3;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.lens[F[r.have++]]=f&7,f>>>=3,p-=3}for(;r.have<19;)r.lens[F[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,J={bits:r.lenbits},X=Ma($4,r.lens,0,19,r.lencode,0,r.work,J),r.lenbits=J.bits,X){e.msg="invalid code lengths set",r.mode=Vt;break}r.have=0,r.mode=P1;case P1:for(;r.have<r.nlen+r.ndist;){for(;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,R=k>>>16&255,P=k&65535,!(y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(P<16)f>>>=y,p-=y,r.lens[r.have++]=P;else{if(P===16){for(E=y+2;p<E;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(f>>>=y,p-=y,r.have===0){e.msg="invalid bit length repeat",r.mode=Vt;break}ne=r.lens[r.have-1],d=3+(f&3),f>>>=2,p-=2}else if(P===17){for(E=y+3;p<E;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=y,p-=y,ne=0,d=3+(f&7),f>>>=3,p-=3}else{for(E=y+7;p<E;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=y,p-=y,ne=0,d=11+(f&127),f>>>=7,p-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Vt;break}for(;d--;)r.lens[r.have++]=ne}}if(r.mode===Vt)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=Vt;break}if(r.lenbits=9,J={bits:r.lenbits},X=Ma(q0,r.lens,0,r.nlen,r.lencode,0,r.work,J),r.lenbits=J.bits,X){e.msg="invalid literal/lengths set",r.mode=Vt;break}if(r.distbits=6,r.distcode=r.distdyn,J={bits:r.distbits},X=Ma($0,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,J),r.distbits=J.bits,X){e.msg="invalid distances set",r.mode=Vt;break}if(r.mode=Ts,t===Ps)break e;case Ts:r.mode=js;case js:if(l>=6&&h>=258){e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=p,D4(e,S),c=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,l=e.avail_in,f=r.hold,p=r.bits,r.mode===di&&(r.back=-1);break}for(r.back=0;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,R=k>>>16&255,P=k&65535,!(y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(R&&!(R&240)){for(T=y,Y=R,K=P;k=r.lencode[K+((f&(1<<T+Y)-1)>>T)],y=k>>>24,R=k>>>16&255,P=k&65535,!(T+y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=T,p-=T,r.back+=T}if(f>>>=y,p-=y,r.back+=y,r.length=P,R===0){r.mode=O1;break}if(R&32){r.back=-1,r.mode=di;break}if(R&64){e.msg="invalid literal/length code",r.mode=Vt;break}r.extra=R&15,r.mode=T1;case T1:if(r.extra){for(E=r.extra;p<E;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=j1;case j1:for(;k=r.distcode[f&(1<<r.distbits)-1],y=k>>>24,R=k>>>16&255,P=k&65535,!(y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(!(R&240)){for(T=y,Y=R,K=P;k=r.distcode[K+((f&(1<<T+Y)-1)>>T)],y=k>>>24,R=k>>>16&255,P=k&65535,!(T+y<=p);){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}f>>>=T,p-=T,r.back+=T}if(f>>>=y,p-=y,r.back+=y,R&64){e.msg="invalid distance code",r.mode=Vt;break}r.offset=P,r.extra=R&15,r.mode=R1;case R1:if(r.extra){for(E=r.extra;p<E;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Vt;break}r.mode=M1;case M1:if(h===0)break e;if(d=S-h,r.offset>d){if(d=r.offset-d,d>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Vt;break}d>r.wnext?(d-=r.wnext,b=r.wsize-d):b=r.wnext-d,d>r.length&&(d=r.length),_=r.window}else _=o,b=c-r.offset,d=r.length;d>h&&(d=h),h-=d,r.length-=d;do o[c++]=_[b++];while(--d);r.length===0&&(r.mode=js);break;case O1:if(h===0)break e;o[c++]=r.length,h--,r.mode=js;break;case Hl:if(r.wrap){for(;p<32;){if(l===0)break e;l--,f|=n[a++]<<p,p+=8}if(S-=h,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Hn(r.check,o,S,c-S):wc(r.check,o,S,c-S)),S=h,r.wrap&4&&(r.flags?f:z1(f))!==r.check){e.msg="incorrect data check",r.mode=Vt;break}f=0,p=0}r.mode=F1;case F1:if(r.wrap&&r.flags){for(;p<32;){if(l===0)break e;l--,f+=n[a++]<<p,p+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=Vt;break}f=0,p=0}r.mode=D1;case D1:X=W4;break e;case Vt:X=V0;break e;case G0:return W0;case Y0:default:return _n}return e.next_out=c,e.avail_out=h,e.next_in=a,e.avail_in=l,r.hold=f,r.bits=p,(r.wsize||S!==e.avail_out&&r.mode<Vt&&(r.mode<Hl||t!==g1))&&K0(e,e.output,e.next_out,S-e.avail_out),w-=e.avail_in,S-=e.avail_out,e.total_in+=w,e.total_out+=S,r.total+=S,r.wrap&4&&S&&(e.adler=r.check=r.flags?Hn(r.check,o,S,e.next_out-S):wc(r.check,o,S,e.next_out-S)),e.data_type=r.bits+(r.last?64:0)+(r.mode===di?128:0)+(r.mode===Ts||r.mode===Ul?256:0),(w===0&&S===0||t===g1)&&X===wo&&(X=Y4),X},n6=e=>{if(So(e))return _n;let t=e.state;return t.window&&(t.window=null),e.state=null,wo},i6=(e,t)=>{if(So(e))return _n;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,wo):_n},o6=(e,t)=>{const r=t.length;let n,o,a;return So(e)||(n=e.state,n.wrap!==0&&n.mode!==Ks)?_n:n.mode===Ks&&(o=1,o=wc(o,t,r,0),o!==n.check)?V0:(a=K0(e,t,r,r),a?(n.mode=G0,W0):(n.havedict=1,wo))};var a6=Z0,s6=J0,l6=X0,c6=e6,u6=Q0,h6=r6,f6=n6,d6=i6,p6=o6,m6="pako inflate (from Nodeca project)",pi={inflateReset:a6,inflateReset2:s6,inflateResetKeep:l6,inflateInit:c6,inflateInit2:u6,inflate:h6,inflateEnd:f6,inflateGetHeader:d6,inflateSetDictionary:p6,inflateInfo:m6};function g6(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var v6=g6;const e2=Object.prototype.toString,{Z_NO_FLUSH:b6,Z_FINISH:x6,Z_OK:Ba,Z_STREAM_END:Vl,Z_NEED_DICT:Wl,Z_STREAM_ERROR:w6,Z_DATA_ERROR:U1,Z_MEM_ERROR:y6}=B0;function Wa(e){this.options=U0.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new O4,this.strm.avail_out=0;let r=pi.inflateInit2(this.strm,t.windowBits);if(r!==Ba)throw new Error(yc[r]);if(this.header=new v6,pi.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Sc.string2buf(t.dictionary):e2.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=pi.inflateSetDictionary(this.strm,t.dictionary),r!==Ba)))throw new Error(yc[r])}Wa.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,o=this.options.dictionary;let a,c,l;if(this.ended)return!1;for(t===~~t?c=t:c=t===!0?x6:b6,e2.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),a=pi.inflate(r,c),a===Wl&&o&&(a=pi.inflateSetDictionary(r,o),a===Ba?a=pi.inflate(r,c):a===U1&&(a=Wl));r.avail_in>0&&a===Vl&&r.state.wrap>0&&e[r.next_in]!==0;)pi.inflateReset(r),a=pi.inflate(r,c);switch(a){case w6:case U1:case Wl:case y6:return this.onEnd(a),this.ended=!0,!1}if(l=r.avail_out,r.next_out&&(r.avail_out===0||a===Vl))if(this.options.to==="string"){let h=Sc.utf8border(r.output,r.next_out),f=r.next_out-h,p=Sc.buf2string(r.output,h);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(h,h+f),0),this.onData(p)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(a===Ba&&l===0)){if(a===Vl)return a=pi.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Wa.prototype.onData=function(e){this.chunks.push(e)};Wa.prototype.onEnd=function(e){e===Ba&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=U0.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function S6(e,t){const r=new Wa(t);if(r.push(e),r.err)throw r.msg||yc[r.err];return r.result}var _6=Wa,C6=S6,A6={Inflate:_6,inflate:C6};const{Inflate:k6,inflate:L6}=A6;var H1=k6,N6=L6;const t2=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;t2[e]=t}const q1=4294967295;function E6(e,t,r){let n=e;for(let o=0;o<r;o++)n=t2[(n^t[o])&255]^n>>>8;return n}function I6(e,t){return(E6(q1,e,t)^q1)>>>0}function $1(e,t,r){const n=e.readUint32(),o=I6(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(o!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${o}`)}function r2(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function n2(e,t,r,n){let o=0;for(;o<n;o++)t[o]=e[o];for(;o<r;o++)t[o]=e[o]+t[o-n]&255}function i2(e,t,r,n){let o=0;if(r.length===0)for(;o<n;o++)t[o]=e[o];else for(;o<n;o++)t[o]=e[o]+r[o]&255}function o2(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+(t[a-o]>>1)&255}else{for(;a<o;a++)t[a]=e[a]+(r[a]>>1)&255;for(;a<n;a++)t[a]=e[a]+(t[a-o]+r[a]>>1)&255}}function a2(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+t[a-o]&255}else{for(;a<o;a++)t[a]=e[a]+r[a]&255;for(;a<n;a++)t[a]=e[a]+P6(t[a-o],r[a],r[a-o])&255}}function P6(e,t,r){const n=e+t-r,o=Math.abs(n-e),a=Math.abs(n-t),c=Math.abs(n-r);return o<=a&&o<=c?e:a<=c?t:r}function T6(e,t,r,n,o,a){switch(e){case 0:r2(t,r,o);break;case 1:n2(t,r,o,a);break;case 2:i2(t,r,n,o);break;case 3:o2(t,r,n,o,a);break;case 4:a2(t,r,n,o,a);break;default:throw new Error(`Unsupported filter: ${e}`)}}const j6=new Uint16Array([255]),R6=new Uint8Array(j6.buffer),M6=R6[0]===255;function O6(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],l=Math.ceil(a/8)*o,h=new Uint8Array(n*r*l);let f=0;for(let p=0;p<7;p++){const w=c[p],S=Math.ceil((r-w.x)/w.xStep),d=Math.ceil((n-w.y)/w.yStep);if(S<=0||d<=0)continue;const b=S*l,_=new Uint8Array(b);for(let k=0;k<d;k++){const y=t[f++],R=t.subarray(f,f+b);f+=b;const P=new Uint8Array(b);T6(y,R,P,_,b,l),_.set(P);for(let T=0;T<S;T++){const Y=w.x+T*w.xStep,K=w.y+k*w.yStep;if(!(Y>=r||K>=n))for(let ne=0;ne<l;ne++)h[(K*r+Y)*l+ne]=P[T*l+ne]}}}if(a===16){const p=new Uint16Array(h.buffer);if(M6)for(let w=0;w<p.length;w++)p[w]=F6(p[w]);return p}else return h}function F6(e){return(e&255)<<8|e>>8&255}const D6=new Uint16Array([255]),z6=new Uint8Array(D6.buffer),B6=z6[0]===255,U6=new Uint8Array(0);function V1(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,c=Math.ceil(a/8)*o,l=Math.ceil(a/8*o*r),h=new Uint8Array(n*l);let f=U6,p=0,w,S;for(let d=0;d<n;d++){switch(w=t.subarray(p+1,p+1+l),S=h.subarray(d*l,(d+1)*l),t[p]){case 0:r2(w,S,l);break;case 1:n2(w,S,l,c);break;case 2:i2(w,S,f,l);break;case 3:o2(w,S,f,l,c);break;case 4:a2(w,S,f,l,c);break;default:throw new Error(`Unsupported filter: ${t[p]}`)}f=S,p+=l+1}if(a===16){const d=new Uint16Array(h.buffer);if(B6)for(let b=0;b<d.length;b++)d[b]=H6(d[b]);return d}else return h}function H6(e){return(e&255)<<8|e>>8&255}const qs=Uint8Array.of(137,80,78,71,13,10,26,10);function W1(e){if(!q6(e.readBytes(qs.length)))throw new Error("wrong PNG signature")}function q6(e){if(e.length<qs.length)return!1;for(let t=0;t<qs.length;t++)if(e[t]!==qs[t])return!1;return!0}const $6="tEXt",V6=0,s2=new TextDecoder("latin1");function W6(e){if(Y6(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const G6=/^[\u0000-\u00FF]*$/;function Y6(e){if(!G6.test(e))throw new Error("invalid latin1 text")}function X6(e,t,r){const n=l2(t);e[n]=Z6(t,r-n.length-1)}function l2(e){for(e.mark();e.readByte()!==V6;);const t=e.offset;e.reset();const r=s2.decode(e.readBytes(t-e.offset-1));return e.skip(1),W6(r),r}function Z6(e,t){return s2.decode(e.readBytes(t))}const ln={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Gl={UNKNOWN:-1,DEFLATE:0},G1={UNKNOWN:-1,ADAPTIVE:0},Yl={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Rs={NONE:0,BACKGROUND:1,PREVIOUS:2},Xl={SOURCE:0,OVER:1};class J6 extends Yc{constructor(r,n={}){super(r);Pe(this,"_checkCrc");Pe(this,"_inflator");Pe(this,"_png");Pe(this,"_apng");Pe(this,"_end");Pe(this,"_hasPalette");Pe(this,"_palette");Pe(this,"_hasTransparency");Pe(this,"_transparency");Pe(this,"_compressionMethod");Pe(this,"_filterMethod");Pe(this,"_interlaceMethod");Pe(this,"_colorType");Pe(this,"_isAnimated");Pe(this,"_numberOfFrames");Pe(this,"_numberOfPlays");Pe(this,"_frames");Pe(this,"_writingDataChunks");const{checkCrc:o=!1}=n;this._checkCrc=o,this._inflator=new H1,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Gl.UNKNOWN,this._filterMethod=G1.UNKNOWN,this._interlaceMethod=Yl.UNKNOWN,this._colorType=ln.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(W1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(W1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const o=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case $6:X6(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?$1(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const o=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=o+r;break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?$1(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=Q6(this.readUint8());const n=this.readUint8();this._colorType=n;let o;switch(n){case ln.GREYSCALE:o=1;break;case ln.TRUECOLOUR:o=3;break;case ln.INDEXED_COLOUR:o=1;break;case ln.GREYSCALE_ALPHA:o=2;break;case ln.TRUECOLOUR_ALPHA:o=4;break;case ln.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=o,this._compressionMethod=this.readUint8(),this._compressionMethod!==Gl.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const o=[];this._palette=o;for(let a=0;a<n;a++)o.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,o=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,o=this.offset+this.byteOffset;if(o+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case ln.GREYSCALE:case ln.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case ln.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const o=this.readByte();this._palette[n].push(o)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case ln.UNKNOWN:case ln.GREYSCALE_ALPHA:case ln.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=l2(this),o=this.readUint8();if(o!==Gl.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${o}`);const a=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:N6(a)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),o=this.readByte();this._png.resolution={x:r,y:n,unit:o}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},o=this._frames.at(r);if(o){if(o.data=V1({data:o.data,width:o.width,height:o.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||o.xOffset===0&&o.yOffset===0&&o.width===this._png.width&&o.height===this._png.height)n.data=o.data;else{const a=this._apng.frames.at(r-1);this.disposeFrame(o,a,n),this.addFrameDataToCanvas(n,o)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,o){switch(r.disposeOp){case Rs.NONE:break;case Rs.BACKGROUND:for(let a=0;a<this._png.height;a++)for(let c=0;c<this._png.width;c++){const l=(a*r.width+c)*this._png.channels;for(let h=0;h<this._png.channels;h++)o.data[l+h]=0}break;case Rs.PREVIOUS:o.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const o=1<<this._png.depth,a=(c,l)=>{const h=((c+n.yOffset)*this._png.width+n.xOffset+l)*this._png.channels,f=(c*n.width+l)*this._png.channels;return{index:h,frameIndex:f}};switch(n.blendOp){case Xl.SOURCE:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let p=0;p<this._png.channels;p++)r.data[h+p]=n.data[f+p]}break;case Xl.OVER:for(let c=0;c<n.height;c++)for(let l=0;l<n.width;l++){const{index:h,frameIndex:f}=a(c,l);for(let p=0;p<this._png.channels;p++){const w=n.data[f+this._png.channels-1]/o,S=p%(this._png.channels-1)===0?1:n.data[f+p],d=Math.floor(w*S+(1-w)*r.data[h+p]);r.data[h+p]+=d}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==G1.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===Yl.NO_INTERLACE)this._png.data=V1({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===Yl.ADAM7)this._png.data=O6({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Rs.NONE,blendOp:Xl.SOURCE,data:r}),this._inflator=new H1,this._writingDataChunks=!1}}function Q6(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var Y1;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(Y1||(Y1={}));function K6(e,t){return new J6(e,t).decode()}var rt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function Zl(){rt.console&&typeof rt.console.log=="function"&&rt.console.log.apply(rt.console,arguments)}var Ot={log:Zl,warn:function(e){rt.console&&(typeof rt.console.warn=="function"?rt.console.warn.apply(rt.console,arguments):Zl.call(null,arguments))},error:function(e){rt.console&&(typeof rt.console.error=="function"?rt.console.error.apply(rt.console,arguments):Zl(e))}};function Jl(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){go(n.response,t,r)},n.onerror=function(){Ot.error("could not download file")},n.send()}function X1(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Ms(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var go=rt.saveAs||((typeof window>"u"?"undefined":Pt(window))!=="object"||window!==rt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=rt.URL||rt.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?X1(o.href)?Jl(e,t,r):Ms(o,o.target="_blank"):Ms(o)):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){Ms(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(X1(e))Jl(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){Ms(n)})}else navigator.msSaveOrOpenBlob(function(o,a){return a===void 0?a={autoBom:!1}:Pt(a)!=="object"&&(Ot.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return Jl(e,t,r);var o=e.type==="application/octet-stream",a=/constructor/i.test(rt.HTMLElement)||rt.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&a)&&(typeof FileReader>"u"?"undefined":Pt(FileReader))==="object"){var l=new FileReader;l.onloadend=function(){var p=l.result;p=c?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=p:location=p,n=null},l.readAsDataURL(e)}else{var h=rt.URL||rt.webkitURL,f=h.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){h.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function c2(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(l){return[parseInt(l[1]),parseInt(l[2]),parseInt(l[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(l){return[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(l){return[parseInt(l[1]+l[1],16),parseInt(l[2]+l[2],16),parseInt(l[3]+l[3],16)]}}],n=0;n<r.length;n++){var o=r[n].re,a=r[n].process,c=o.exec(e);c&&(t=a(c),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var l=this.r.toString(16),h=this.g.toString(16),f=this.b.toString(16);return l.length==1&&(l="0"+l),h.length==1&&(h="0"+h),f.length==1&&(f="0"+f),"#"+l+h+f}}var $s=rt.atob.bind(rt),Z1=rt.btoa.bind(rt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function Ql(e,t){var r=e[0],n=e[1],o=e[2],a=e[3];r=Nr(r,n,o,a,t[0],7,-680876936),a=Nr(a,r,n,o,t[1],12,-389564586),o=Nr(o,a,r,n,t[2],17,606105819),n=Nr(n,o,a,r,t[3],22,-1044525330),r=Nr(r,n,o,a,t[4],7,-176418897),a=Nr(a,r,n,o,t[5],12,1200080426),o=Nr(o,a,r,n,t[6],17,-1473231341),n=Nr(n,o,a,r,t[7],22,-45705983),r=Nr(r,n,o,a,t[8],7,1770035416),a=Nr(a,r,n,o,t[9],12,-1958414417),o=Nr(o,a,r,n,t[10],17,-42063),n=Nr(n,o,a,r,t[11],22,-1990404162),r=Nr(r,n,o,a,t[12],7,1804603682),a=Nr(a,r,n,o,t[13],12,-40341101),o=Nr(o,a,r,n,t[14],17,-1502002290),r=Er(r,n=Nr(n,o,a,r,t[15],22,1236535329),o,a,t[1],5,-165796510),a=Er(a,r,n,o,t[6],9,-1069501632),o=Er(o,a,r,n,t[11],14,643717713),n=Er(n,o,a,r,t[0],20,-373897302),r=Er(r,n,o,a,t[5],5,-701558691),a=Er(a,r,n,o,t[10],9,38016083),o=Er(o,a,r,n,t[15],14,-660478335),n=Er(n,o,a,r,t[4],20,-405537848),r=Er(r,n,o,a,t[9],5,568446438),a=Er(a,r,n,o,t[14],9,-1019803690),o=Er(o,a,r,n,t[3],14,-187363961),n=Er(n,o,a,r,t[8],20,1163531501),r=Er(r,n,o,a,t[13],5,-1444681467),a=Er(a,r,n,o,t[2],9,-51403784),o=Er(o,a,r,n,t[7],14,1735328473),r=Ir(r,n=Er(n,o,a,r,t[12],20,-1926607734),o,a,t[5],4,-378558),a=Ir(a,r,n,o,t[8],11,-2022574463),o=Ir(o,a,r,n,t[11],16,1839030562),n=Ir(n,o,a,r,t[14],23,-35309556),r=Ir(r,n,o,a,t[1],4,-1530992060),a=Ir(a,r,n,o,t[4],11,1272893353),o=Ir(o,a,r,n,t[7],16,-155497632),n=Ir(n,o,a,r,t[10],23,-1094730640),r=Ir(r,n,o,a,t[13],4,681279174),a=Ir(a,r,n,o,t[0],11,-358537222),o=Ir(o,a,r,n,t[3],16,-722521979),n=Ir(n,o,a,r,t[6],23,76029189),r=Ir(r,n,o,a,t[9],4,-640364487),a=Ir(a,r,n,o,t[12],11,-421815835),o=Ir(o,a,r,n,t[15],16,530742520),r=Pr(r,n=Ir(n,o,a,r,t[2],23,-995338651),o,a,t[0],6,-198630844),a=Pr(a,r,n,o,t[7],10,1126891415),o=Pr(o,a,r,n,t[14],15,-1416354905),n=Pr(n,o,a,r,t[5],21,-57434055),r=Pr(r,n,o,a,t[12],6,1700485571),a=Pr(a,r,n,o,t[3],10,-1894986606),o=Pr(o,a,r,n,t[10],15,-1051523),n=Pr(n,o,a,r,t[1],21,-2054922799),r=Pr(r,n,o,a,t[8],6,1873313359),a=Pr(a,r,n,o,t[15],10,-30611744),o=Pr(o,a,r,n,t[6],15,-1560198380),n=Pr(n,o,a,r,t[13],21,1309151649),r=Pr(r,n,o,a,t[4],6,-145523070),a=Pr(a,r,n,o,t[11],10,-1120210379),o=Pr(o,a,r,n,t[2],15,718787259),n=Pr(n,o,a,r,t[9],21,-343485551),e[0]=Vi(r,e[0]),e[1]=Vi(n,e[1]),e[2]=Vi(o,e[2]),e[3]=Vi(a,e[3])}function pl(e,t,r,n,o,a){return t=Vi(Vi(t,e),Vi(n,a)),Vi(t<<o|t>>>32-o,r)}function Nr(e,t,r,n,o,a,c){return pl(t&r|~t&n,e,t,o,a,c)}function Er(e,t,r,n,o,a,c){return pl(t&n|r&~n,e,t,o,a,c)}function Ir(e,t,r,n,o,a,c){return pl(t^r^n,e,t,o,a,c)}function Pr(e,t,r,n,o,a,c){return pl(r^(t|~n),e,t,o,a,c)}function u2(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)Ql(n,ev(e.substring(t-64,t)));e=e.substring(t-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(Ql(n,o),t=0;t<16;t++)o[t]=0;return o[14]=8*r,Ql(n,o),n}function ev(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var J1="0123456789abcdef".split("");function tv(e){for(var t="",r=0;r<4;r++)t+=J1[e>>8*r+4&15]+J1[e>>8*r&15];return t}function rv(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function _c(e){return u2(e).map(rv).join("")}var nv=function(e){for(var t=0;t<e.length;t++)e[t]=tv(e[t]);return e.join("")}(u2("hello"))!="5d41402abc4b2a76b9719d911017c592";function Vi(e,t){if(nv){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Cc(e,t){var r,n,o,a;if(e!==r){for(var c=(o=e,a=1+(256/e.length|0),new Array(a+1).join(o)),l=[],h=0;h<256;h++)l[h]=h;var f=0;for(h=0;h<256;h++){var p=l[h];f=(f+p+c.charCodeAt(h))%256,l[h]=l[f],l[f]=p}r=e,n=l}else l=n;var w=t.length,S=0,d=0,b="";for(h=0;h<w;h++)d=(d+(p=l[S=(S+1)%256]))%256,l[S]=l[d],l[d]=p,c=l[(l[S]+l[d])%256],b+=String.fromCharCode(t.charCodeAt(h)^c);return b}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var Q1={print:4,modify:8,copy:16,"annot-forms":32};function Wo(e,t,r,n){this.v=1,this.r=2;var o=192;e.forEach(function(l){if(Q1.perm!==void 0)throw new Error("Invalid permission: "+l);o+=Q1[l]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(t+this.padding).substr(0,32),c=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,c),this.P=-(1+(255^o)),this.encryptionKey=_c(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=Cc(this.encryptionKey,this.padding)}function Go(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);t+=o<33||o===35||o===37||o===40||o===41||o===47||o===60||o===62||o===91||o===93||o===123||o===125||o>126?"#"+("0"+o.toString(16)).slice(-2):e[n]}return t}function K1(e){if(Pt(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,o){if(o=o||!1,typeof r!="string"||typeof n!="function"||typeof o!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var a=Math.random().toString(35);return t[r][a]=[n,!!o],a},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),o=[];for(var a in t[r]){var c=t[r][a];try{c[0].apply(e,n)}catch(l){rt.console&&Ot.error("jsPDF PubSub Error",l.message,l)}c[1]&&o.push(a)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function el(e){if(!(this instanceof el))return new el(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function h2(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function vo(e,t,r,n,o){if(!(this instanceof vo))return new vo(e,t,r,n,o);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,h2.call(this,n,o)}function Yo(e,t,r,n,o){if(!(this instanceof Yo))return new Yo(e,t,r,n,o);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,h2.call(this,n,o)}function Ye(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],o=arguments[2],a=arguments[3],c=[],l=1,h=16,f="S",p=null;Pt(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,o=e.format||o,a=e.compress||e.compressPdf||a,(p=e.encryption||null)!==null&&(p.userPassword=p.userPassword||"",p.ownerPassword=p.ownerPassword||"",p.userPermissions=p.userPermissions||[]),l=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(h=e.floatPrecision),f=e.defaultPathOperation||"S"),c=e.filters||(a===!0?["FlateEncode"]:c),n=n||"mm",r=(""+(r||"P")).toLowerCase();var w=e.putOnlyUsedFonts||!1,S={},d={internal:{},__private__:{}};d.__private__.PubSub=K1;var b="1.3",_=d.__private__.getPdfVersion=function(){return b};d.__private__.setPdfVersion=function(m){b=m};var k={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};d.__private__.getPageFormats=function(){return k};var y=d.__private__.getPageFormat=function(m){return k[m]};o=o||"a4";var R="compat",P="advanced",T=R;function Y(){this.saveGraphicsState(),W(new Ze(Je,0,0,-Je,0,ro()*Je).toString()+" cm"),this.setFontSize(this.getFontSize()/Je),f="n",T=P}function K(){this.restoreGraphicsState(),f="S",T=R}var ne=d.__private__.combineFontStyleAndFontWeight=function(m,C){if(m=="bold"&&C=="normal"||m=="bold"&&C==400||m=="normal"&&C=="italic"||m=="bold"&&C=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return C&&(m=C==400||C==="normal"?m==="italic"?"italic":"normal":C!=700&&C!=="bold"||m!=="normal"?(C==700?"bold":C)+""+m:"bold"),m};d.advancedAPI=function(m){var C=T===R;return C&&Y.call(this),typeof m!="function"||(m(this),C&&K.call(this)),this},d.compatAPI=function(m){var C=T===P;return C&&K.call(this),typeof m!="function"||(m(this),C&&Y.call(this)),this},d.isAdvancedAPI=function(){return T===P};var X,M=function(m){if(T!==P)throw new Error(m+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},J=d.roundToPrecision=d.__private__.roundToPrecision=function(m,C){var q=t||C;if(isNaN(m)||isNaN(q))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return m.toFixed(q).replace(/0+$/,"")};X=d.hpf=d.__private__.hpf=typeof h=="number"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return J(m,h)}:h==="smart"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return J(m,m>-1&&m<1?16:5)}:function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return J(m,16)};var E=d.f2=d.__private__.f2=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f2");return J(m,2)},F=d.__private__.f3=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f3");return J(m,3)},G=d.scale=d.__private__.scale=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.scale");return T===R?m*Je:T===P?m:void 0},$=function(m){return G(function(C){return T===R?ro()-C:T===P?C:void 0}(m))};d.__private__.setPrecision=d.setPrecision=function(m){typeof parseInt(m,10)=="number"&&(t=parseInt(m,10))};var oe,ce="00000000000000000000000000000000",de=d.__private__.getFileId=function(){return ce},ee=d.__private__.setFileId=function(m){return ce=m!==void 0&&/^[a-fA-F0-9]{32}$/.test(m)?m.toUpperCase():ce.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),p!==null&&(jt=new Wo(p.userPermissions,p.userPassword,p.ownerPassword,ce)),ce};d.setFileId=function(m){return ee(m),this},d.getFileId=function(){return de()};var se=d.__private__.convertDateToPDFDate=function(m){var C=m.getTimezoneOffset(),q=C<0?"+":"-",Z=Math.floor(Math.abs(C/60)),ae=Math.abs(C%60),Se=[q,V(Z),"'",V(ae),"'"].join("");return["D:",m.getFullYear(),V(m.getMonth()+1),V(m.getDate()),V(m.getHours()),V(m.getMinutes()),V(m.getSeconds()),Se].join("")},Ce=d.__private__.convertPDFDateToDate=function(m){var C=parseInt(m.substr(2,4),10),q=parseInt(m.substr(6,2),10)-1,Z=parseInt(m.substr(8,2),10),ae=parseInt(m.substr(10,2),10),Se=parseInt(m.substr(12,2),10),Le=parseInt(m.substr(14,2),10);return new Date(C,q,Z,ae,Se,Le,0)},be=d.__private__.setCreationDate=function(m){var C;if(m===void 0&&(m=new Date),m instanceof Date)C=se(m);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(m))throw new Error("Invalid argument passed to jsPDF.setCreationDate");C=m}return oe=C},L=d.__private__.getCreationDate=function(m){var C=oe;return m==="jsDate"&&(C=Ce(oe)),C};d.setCreationDate=function(m){return be(m),this},d.getCreationDate=function(m){return L(m)};var H,V=d.__private__.padd2=function(m){return("0"+parseInt(m)).slice(-2)},Q=d.__private__.padd2Hex=function(m){return("00"+(m=m.toString())).substr(m.length)},re=0,ue=[],ge=[],pe=0,xe=[],Ae=[],Ie=!1,Te=ge;d.__private__.setCustomOutputDestination=function(m){Ie=!0,Te=m};var ve=function(m){Ie||(Te=m)};d.__private__.resetCustomOutputDestination=function(){Ie=!1,Te=ge};var W=d.__private__.out=function(m){return m=m.toString(),pe+=m.length+1,Te.push(m),Te},ft=d.__private__.write=function(m){return W(arguments.length===1?m.toString():Array.prototype.join.call(arguments," "))},Ke=d.__private__.getArrayBuffer=function(m){for(var C=m.length,q=new ArrayBuffer(C),Z=new Uint8Array(q);C--;)Z[C]=m.charCodeAt(C);return q},qe=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];d.__private__.getStandardFonts=function(){return qe};var Ne=e.fontSize||16;d.__private__.setFontSize=d.setFontSize=function(m){return Ne=T===P?m/Je:m,this};var Me,je=d.__private__.getFontSize=d.getFontSize=function(){return T===R?Ne:Ne*Je},nt=e.R2L||!1;d.__private__.setR2L=d.setR2L=function(m){return nt=m,this},d.__private__.getR2L=d.getR2L=function(){return nt};var De,gt=d.__private__.setZoomMode=function(m){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(m))Me=m;else if(isNaN(m)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(m)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+m+'" is not recognized.');Me=m}else Me=parseInt(m,10)};d.__private__.getZoomMode=function(){return Me};var it,tt=d.__private__.setPageMode=function(m){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(m)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+m+'" is not recognized.');De=m};d.__private__.getPageMode=function(){return De};var _t=d.__private__.setLayoutMode=function(m){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(m)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+m+'" is not recognized.');it=m};d.__private__.getLayoutMode=function(){return it},d.__private__.setDisplayMode=d.setDisplayMode=function(m,C,q){return gt(m),_t(C),tt(q),this};var ot={title:"",subject:"",author:"",keywords:"",creator:""};d.__private__.getDocumentProperty=function(m){if(Object.keys(ot).indexOf(m)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return ot[m]},d.__private__.getDocumentProperties=function(){return ot},d.__private__.setDocumentProperties=d.setProperties=d.setDocumentProperties=function(m){for(var C in ot)ot.hasOwnProperty(C)&&m[C]&&(ot[C]=m[C]);return this},d.__private__.setDocumentProperty=function(m,C){if(Object.keys(ot).indexOf(m)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return ot[m]=C};var Ve,Je,We,At,yt,Be={},at={},Lt=[],Xe={},vt={},lt={},Ht={},Xt=null,Nt=0,Qe=[],bt=new K1(d),Rn=e.hotfixes||[],dr={},un={},Xr=[],Ze=function m(C,q,Z,ae,Se,Le){if(!(this instanceof m))return new m(C,q,Z,ae,Se,Le);isNaN(C)&&(C=1),isNaN(q)&&(q=0),isNaN(Z)&&(Z=0),isNaN(ae)&&(ae=1),isNaN(Se)&&(Se=0),isNaN(Le)&&(Le=0),this._matrix=[C,q,Z,ae,Se,Le]};Object.defineProperty(Ze.prototype,"sx",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Ze.prototype,"shy",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Ze.prototype,"shx",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Ze.prototype,"sy",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Ze.prototype,"tx",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Ze.prototype,"ty",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Ze.prototype,"a",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Ze.prototype,"b",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Ze.prototype,"c",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Ze.prototype,"d",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Ze.prototype,"e",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Ze.prototype,"f",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Ze.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Ze.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Ze.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Ze.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),Ze.prototype.join=function(m){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(X).join(m)},Ze.prototype.multiply=function(m){var C=m.sx*this.sx+m.shy*this.shx,q=m.sx*this.shy+m.shy*this.sy,Z=m.shx*this.sx+m.sy*this.shx,ae=m.shx*this.shy+m.sy*this.sy,Se=m.tx*this.sx+m.ty*this.shx+this.tx,Le=m.tx*this.shy+m.ty*this.sy+this.ty;return new Ze(C,q,Z,ae,Se,Le)},Ze.prototype.decompose=function(){var m=this.sx,C=this.shy,q=this.shx,Z=this.sy,ae=this.tx,Se=this.ty,Le=Math.sqrt(m*m+C*C),ze=(m/=Le)*q+(C/=Le)*Z;q-=m*ze,Z-=C*ze;var $e=Math.sqrt(q*q+Z*Z);return ze/=$e,m*(Z/=$e)<C*(q/=$e)&&(m=-m,C=-C,ze=-ze,Le=-Le),{scale:new Ze(Le,0,0,$e,0,0),translate:new Ze(1,0,0,1,ae,Se),rotate:new Ze(m,C,-C,m,0,0),skew:new Ze(1,0,ze,1,0,0)}},Ze.prototype.toString=function(m){return this.join(" ")},Ze.prototype.inversed=function(){var m=this.sx,C=this.shy,q=this.shx,Z=this.sy,ae=this.tx,Se=this.ty,Le=1/(m*Z-C*q),ze=Z*Le,$e=-C*Le,st=-q*Le,ct=m*Le;return new Ze(ze,$e,st,ct,-ze*ae-st*Se,-$e*ae-ct*Se)},Ze.prototype.applyToPoint=function(m){var C=m.x*this.sx+m.y*this.shx+this.tx,q=m.x*this.shy+m.y*this.sy+this.ty;return new eo(C,q)},Ze.prototype.applyToRectangle=function(m){var C=this.applyToPoint(m),q=this.applyToPoint(new eo(m.x+m.w,m.y+m.h));return new ua(C.x,C.y,q.x-C.x,q.y-C.y)},Ze.prototype.clone=function(){var m=this.sx,C=this.shy,q=this.shx,Z=this.sy,ae=this.tx,Se=this.ty;return new Ze(m,C,q,Z,ae,Se)},d.Matrix=Ze;var hn=d.matrixMult=function(m,C){return C.multiply(m)},fn=new Ze(1,0,0,1,0,0);d.unitMatrix=d.identityMatrix=fn;var jr=function(m,C){if(!vt[m]){var q=(C instanceof vo?"Sh":"P")+(Object.keys(Xe).length+1).toString(10);C.id=q,vt[m]=q,Xe[q]=C,bt.publish("addPattern",C)}};d.ShadingPattern=vo,d.TilingPattern=Yo,d.addShadingPattern=function(m,C){return M("addShadingPattern()"),jr(m,C),this},d.beginTilingPattern=function(m){M("beginTilingPattern()"),ha(m.boundingBox[0],m.boundingBox[1],m.boundingBox[2]-m.boundingBox[0],m.boundingBox[3]-m.boundingBox[1],m.matrix)},d.endTilingPattern=function(m,C){M("endTilingPattern()"),C.stream=Ae[H].join(`
`),jr(m,C),bt.publish("endTilingPattern",C),Xr.pop().restore()};var Rr,qt=d.__private__.newObject=function(){var m=er();return cr(m,!0),m},er=d.__private__.newObjectDeferred=function(){return re++,ue[re]=function(){return pe},re},cr=function(m,C){return C=typeof C=="boolean"&&C,ue[m]=pe,C&&W(m+" 0 obj"),m},Mn=d.__private__.newAdditionalObject=function(){var m={objId:er(),content:""};return xe.push(m),m},On=er(),Mr=er(),Or=d.__private__.decodeColorString=function(m){var C=m.split(" ");if(C.length!==2||C[1]!=="g"&&C[1]!=="G")C.length!==5||C[4]!=="k"&&C[4]!=="K"||(C=[(1-C[0])*(1-C[3]),(1-C[1])*(1-C[3]),(1-C[2])*(1-C[3]),"r"]);else{var q=parseFloat(C[0]);C=[q,q,q,"r"]}for(var Z="#",ae=0;ae<3;ae++)Z+=("0"+Math.floor(255*parseFloat(C[ae])).toString(16)).slice(-2);return Z},Zr=d.__private__.encodeColorString=function(m){var C;typeof m=="string"&&(m={ch1:m});var q=m.ch1,Z=m.ch2,ae=m.ch3,Se=m.ch4,Le=m.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof q=="string"&&q.charAt(0)!=="#"){var ze=new c2(q);if(ze.ok)q=ze.toHex();else if(!/^\d*\.?\d*$/.test(q))throw new Error('Invalid color "'+q+'" passed to jsPDF.encodeColorString.')}if(typeof q=="string"&&/^#[0-9A-Fa-f]{3}$/.test(q)&&(q="#"+q[1]+q[1]+q[2]+q[2]+q[3]+q[3]),typeof q=="string"&&/^#[0-9A-Fa-f]{6}$/.test(q)){var $e=parseInt(q.substr(1),16);q=$e>>16&255,Z=$e>>8&255,ae=255&$e}if(Z===void 0||Se===void 0&&q===Z&&Z===ae)C=typeof q=="string"?q+" "+Le[0]:m.precision===2?E(q/255)+" "+Le[0]:F(q/255)+" "+Le[0];else if(Se===void 0||Pt(Se)==="object"){if(Se&&!isNaN(Se.a)&&Se.a===0)return["1.","1.","1.",Le[1]].join(" ");C=typeof q=="string"?[q,Z,ae,Le[1]].join(" "):m.precision===2?[E(q/255),E(Z/255),E(ae/255),Le[1]].join(" "):[F(q/255),F(Z/255),F(ae/255),Le[1]].join(" ")}else C=typeof q=="string"?[q,Z,ae,Se,Le[2]].join(" "):m.precision===2?[E(q),E(Z),E(ae),E(Se),Le[2]].join(" "):[F(q),F(Z),F(ae),F(Se),Le[2]].join(" ");return C},Jr=d.__private__.getFilters=function(){return c},Hr=d.__private__.putStream=function(m){var C=(m=m||{}).data||"",q=m.filters||Jr(),Z=m.alreadyAppliedFilters||[],ae=m.addLength1||!1,Se=C.length,Le=m.objectId,ze=function(mr){return mr};if(p!==null&&Le===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");p!==null&&(ze=jt.encryptor(Le,0));var $e={};q===!0&&(q=["FlateEncode"]);var st=m.additionalKeyValues||[],ct=($e=Ye.API.processDataByFilters!==void 0?Ye.API.processDataByFilters(C,q):{data:C,reverseChain:[]}).reverseChain+(Array.isArray(Z)?Z.join(" "):Z.toString());if($e.data.length!==0&&(st.push({key:"Length",value:$e.data.length}),ae===!0&&st.push({key:"Length1",value:Se})),ct.length!=0)if(ct.split("/").length-1==1)st.push({key:"Filter",value:ct});else{st.push({key:"Filter",value:"["+ct+"]"});for(var Ct=0;Ct<st.length;Ct+=1)if(st[Ct].key==="DecodeParms"){for(var Wt=[],hr=0;hr<$e.reverseChain.split("/").length-1;hr+=1)Wt.push("null");Wt.push(st[Ct].value),st[Ct].value="["+Wt.join(" ")+"]"}}W("<<");for(var Ft=0;Ft<st.length;Ft++)W("/"+st[Ft].key+" "+st[Ft].value);W(">>"),$e.data.length!==0&&(W("stream"),W(ze($e.data)),W("endstream"))},Xn=d.__private__.putPage=function(m){var C=m.number,q=m.data,Z=m.objId,ae=m.contentsObjId;cr(Z,!0),W("<</Type /Page"),W("/Parent "+m.rootDictionaryObjId+" 0 R"),W("/Resources "+m.resourceDictionaryObjId+" 0 R"),W("/MediaBox ["+parseFloat(X(m.mediaBox.bottomLeftX))+" "+parseFloat(X(m.mediaBox.bottomLeftY))+" "+X(m.mediaBox.topRightX)+" "+X(m.mediaBox.topRightY)+"]"),m.cropBox!==null&&W("/CropBox ["+X(m.cropBox.bottomLeftX)+" "+X(m.cropBox.bottomLeftY)+" "+X(m.cropBox.topRightX)+" "+X(m.cropBox.topRightY)+"]"),m.bleedBox!==null&&W("/BleedBox ["+X(m.bleedBox.bottomLeftX)+" "+X(m.bleedBox.bottomLeftY)+" "+X(m.bleedBox.topRightX)+" "+X(m.bleedBox.topRightY)+"]"),m.trimBox!==null&&W("/TrimBox ["+X(m.trimBox.bottomLeftX)+" "+X(m.trimBox.bottomLeftY)+" "+X(m.trimBox.topRightX)+" "+X(m.trimBox.topRightY)+"]"),m.artBox!==null&&W("/ArtBox ["+X(m.artBox.bottomLeftX)+" "+X(m.artBox.bottomLeftY)+" "+X(m.artBox.topRightX)+" "+X(m.artBox.topRightY)+"]"),typeof m.userUnit=="number"&&m.userUnit!==1&&W("/UserUnit "+m.userUnit),bt.publish("putPage",{objId:Z,pageContext:Qe[C],pageNumber:C,page:q}),W("/Contents "+ae+" 0 R"),W(">>"),W("endobj");var Se=q.join(`
`);return T===P&&(Se+=`
Q`),cr(ae,!0),Hr({data:Se,filters:Jr(),objectId:ae}),W("endobj"),Z},Qr=d.__private__.putPages=function(){var m,C,q=[];for(m=1;m<=Nt;m++)Qe[m].objId=er(),Qe[m].contentsObjId=er();for(m=1;m<=Nt;m++)q.push(Xn({number:m,data:Ae[m],objId:Qe[m].objId,contentsObjId:Qe[m].contentsObjId,mediaBox:Qe[m].mediaBox,cropBox:Qe[m].cropBox,bleedBox:Qe[m].bleedBox,trimBox:Qe[m].trimBox,artBox:Qe[m].artBox,userUnit:Qe[m].userUnit,rootDictionaryObjId:On,resourceDictionaryObjId:Mr}));cr(On,!0),W("<</Type /Pages");var Z="/Kids [";for(C=0;C<Nt;C++)Z+=q[C]+" 0 R ";W(Z+"]"),W("/Count "+Nt),W(">>"),W("endobj"),bt.publish("postPutPages")},Cn=function(m){bt.publish("putFont",{font:m,out:W,newObject:qt,putStream:Hr}),m.isAlreadyPutted!==!0&&(m.objectNumber=qt(),W("<<"),W("/Type /Font"),W("/BaseFont /"+Go(m.postScriptName)),W("/Subtype /Type1"),typeof m.encoding=="string"&&W("/Encoding /"+m.encoding),W("/FirstChar 32"),W("/LastChar 255"),W(">>"),W("endobj"))},xi=function(m){m.objectNumber=qt();var C=[];C.push({key:"Type",value:"/XObject"}),C.push({key:"Subtype",value:"/Form"}),C.push({key:"BBox",value:"["+[X(m.x),X(m.y),X(m.x+m.width),X(m.y+m.height)].join(" ")+"]"}),C.push({key:"Matrix",value:"["+m.matrix.toString()+"]"});var q=m.pages[1].join(`
`);Hr({data:q,additionalKeyValues:C,objectId:m.objectNumber}),W("endobj")},dn=function(m,C){C||(C=21);var q=qt(),Z=function(Le,ze){var $e,st=[],ct=1/(ze-1);for($e=0;$e<1;$e+=ct)st.push($e);if(st.push(1),Le[0].offset!=0){var Ct={offset:0,color:Le[0].color};Le.unshift(Ct)}if(Le[Le.length-1].offset!=1){var Wt={offset:1,color:Le[Le.length-1].color};Le.push(Wt)}for(var hr="",Ft=0,mr=0;mr<st.length;mr++){for($e=st[mr];$e>Le[Ft+1].offset;)Ft++;var fr=Le[Ft].offset,yr=($e-fr)/(Le[Ft+1].offset-fr),bn=Le[Ft].color,Vr=Le[Ft+1].color;hr+=Q(Math.round((1-yr)*bn[0]+yr*Vr[0]).toString(16))+Q(Math.round((1-yr)*bn[1]+yr*Vr[1]).toString(16))+Q(Math.round((1-yr)*bn[2]+yr*Vr[2]).toString(16))}return hr.trim()}(m.colors,C),ae=[];ae.push({key:"FunctionType",value:"0"}),ae.push({key:"Domain",value:"[0.0 1.0]"}),ae.push({key:"Size",value:"["+C+"]"}),ae.push({key:"BitsPerSample",value:"8"}),ae.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ae.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Hr({data:Z,additionalKeyValues:ae,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:q}),W("endobj"),m.objectNumber=qt(),W("<< /ShadingType "+m.type),W("/ColorSpace /DeviceRGB");var Se="/Coords ["+X(parseFloat(m.coords[0]))+" "+X(parseFloat(m.coords[1]))+" ";m.type===2?Se+=X(parseFloat(m.coords[2]))+" "+X(parseFloat(m.coords[3])):Se+=X(parseFloat(m.coords[2]))+" "+X(parseFloat(m.coords[3]))+" "+X(parseFloat(m.coords[4]))+" "+X(parseFloat(m.coords[5])),W(Se+="]"),m.matrix&&W("/Matrix ["+m.matrix.toString()+"]"),W("/Function "+q+" 0 R"),W("/Extend [true true]"),W(">>"),W("endobj")},Zn=function(m,C){var q=er(),Z=qt();C.push({resourcesOid:q,objectOid:Z}),m.objectNumber=Z;var ae=[];ae.push({key:"Type",value:"/Pattern"}),ae.push({key:"PatternType",value:"1"}),ae.push({key:"PaintType",value:"1"}),ae.push({key:"TilingType",value:"1"}),ae.push({key:"BBox",value:"["+m.boundingBox.map(X).join(" ")+"]"}),ae.push({key:"XStep",value:X(m.xStep)}),ae.push({key:"YStep",value:X(m.yStep)}),ae.push({key:"Resources",value:q+" 0 R"}),m.matrix&&ae.push({key:"Matrix",value:"["+m.matrix.toString()+"]"}),Hr({data:m.stream,additionalKeyValues:ae,objectId:m.objectNumber}),W("endobj")},wi=function(m){for(var C in m.objectNumber=qt(),W("<<"),m)switch(C){case"opacity":W("/ca "+E(m[C]));break;case"stroke-opacity":W("/CA "+E(m[C]))}W(">>"),W("endobj")},Jn=function(m){cr(m.resourcesOid,!0),W("<<"),W("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var C in W("/Font <<"),Be)Be.hasOwnProperty(C)&&(w===!1||w===!0&&S.hasOwnProperty(C))&&W("/"+C+" "+Be[C].objectNumber+" 0 R");W(">>")}(),function(){if(Object.keys(Xe).length>0){for(var C in W("/Shading <<"),Xe)Xe.hasOwnProperty(C)&&Xe[C]instanceof vo&&Xe[C].objectNumber>=0&&W("/"+C+" "+Xe[C].objectNumber+" 0 R");bt.publish("putShadingPatternDict"),W(">>")}}(),function(C){if(Object.keys(Xe).length>0){for(var q in W("/Pattern <<"),Xe)Xe.hasOwnProperty(q)&&Xe[q]instanceof d.TilingPattern&&Xe[q].objectNumber>=0&&Xe[q].objectNumber<C&&W("/"+q+" "+Xe[q].objectNumber+" 0 R");bt.publish("putTilingPatternDict"),W(">>")}}(m.objectOid),function(){if(Object.keys(lt).length>0){var C;for(C in W("/ExtGState <<"),lt)lt.hasOwnProperty(C)&&lt[C].objectNumber>=0&&W("/"+C+" "+lt[C].objectNumber+" 0 R");bt.publish("putGStateDict"),W(">>")}}(),function(){for(var C in W("/XObject <<"),dr)dr.hasOwnProperty(C)&&dr[C].objectNumber>=0&&W("/"+C+" "+dr[C].objectNumber+" 0 R");bt.publish("putXobjectDict"),W(">>")}(),W(">>"),W("endobj")},yi=function(m){at[m.fontName]=at[m.fontName]||{},at[m.fontName][m.fontStyle]=m.id},Gi=function(m,C,q,Z,ae){var Se={id:"F"+(Object.keys(Be).length+1).toString(10),postScriptName:m,fontName:C,fontStyle:q,encoding:Z,isStandardFont:ae||!1,metadata:{}};return bt.publish("addFont",{font:Se,instance:this}),Be[Se.id]=Se,yi(Se),Se.id},Fr=d.__private__.pdfEscape=d.pdfEscape=function(m,C){return function(q,Z){var ae,Se,Le,ze,$e,st,ct,Ct,Wt;if(Le=(Z=Z||{}).sourceEncoding||"Unicode",$e=Z.outputEncoding,(Z.autoencode||$e)&&Be[Ve].metadata&&Be[Ve].metadata[Le]&&Be[Ve].metadata[Le].encoding&&(ze=Be[Ve].metadata[Le].encoding,!$e&&Be[Ve].encoding&&($e=Be[Ve].encoding),!$e&&ze.codePages&&($e=ze.codePages[0]),typeof $e=="string"&&($e=ze[$e]),$e)){for(ct=!1,st=[],ae=0,Se=q.length;ae<Se;ae++)(Ct=$e[q.charCodeAt(ae)])?st.push(String.fromCharCode(Ct)):st.push(q[ae]),st[ae].charCodeAt(0)>>8&&(ct=!0);q=st.join("")}for(ae=q.length;ct===void 0&&ae!==0;)q.charCodeAt(ae-1)>>8&&(ct=!0),ae--;if(!ct)return q;for(st=Z.noBOM?[]:[254,255],ae=0,Se=q.length;ae<Se;ae++){if((Wt=(Ct=q.charCodeAt(ae))>>8)>>8)throw new Error("Character at position "+ae+" of string '"+q+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");st.push(Wt),st.push(Ct-(Wt<<8))}return String.fromCharCode.apply(void 0,st)}(m,C).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Qn=d.__private__.beginPage=function(m){Ae[++Nt]=[],Qe[Nt]={objId:0,contentsObjId:0,userUnit:Number(l),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(m[0]),topRightY:Number(m[1])}},Co(Nt),ve(Ae[H])},Yi=function(m,C){var q,Z,ae;switch(r=C||r,typeof m=="string"&&(q=y(m.toLowerCase()),Array.isArray(q)&&(Z=q[0],ae=q[1])),Array.isArray(m)&&(Z=m[0]*Je,ae=m[1]*Je),isNaN(Z)&&(Z=o[0],ae=o[1]),(Z>14400||ae>14400)&&(Ot.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),Z=Math.min(14400,Z),ae=Math.min(14400,ae)),o=[Z,ae],r.substr(0,1)){case"l":ae>Z&&(o=[ae,Z]);break;case"p":Z>ae&&(o=[ae,Z])}Qn(o),oa(Ci),W(vn),la!==0&&W(la+" J"),ca!==0&&W(ca+" j"),bt.publish("addPage",{pageNumber:Nt})},Kn=function(m){m>0&&m<=Nt&&(Ae.splice(m,1),Qe.splice(m,1),Nt--,H>Nt&&(H=Nt),this.setPage(H))},Co=function(m){m>0&&m<=Nt&&(H=m)},Xi=d.__private__.getNumberOfPages=d.getNumberOfPages=function(){return Ae.length-1},Ao=function(m,C,q){var Z,ae=void 0;return q=q||{},m=m!==void 0?m:Be[Ve].fontName,C=C!==void 0?C:Be[Ve].fontStyle,Z=m.toLowerCase(),at[Z]!==void 0&&at[Z][C]!==void 0?ae=at[Z][C]:at[m]!==void 0&&at[m][C]!==void 0?ae=at[m][C]:q.disableWarning===!1&&Ot.warn("Unable to look up font label for font '"+m+"', '"+C+"'. Refer to getFontList() for available fonts."),ae||q.noFallback||(ae=at.times[C])==null&&(ae=at.times.normal),ae},ei=d.__private__.putInfo=function(){var m=qt(),C=function(Z){return Z};for(var q in p!==null&&(C=jt.encryptor(m,0)),W("<<"),W("/Producer ("+Fr(C("jsPDF "+Ye.version))+")"),ot)ot.hasOwnProperty(q)&&ot[q]&&W("/"+q.substr(0,1).toUpperCase()+q.substr(1)+" ("+Fr(C(ot[q]))+")");W("/CreationDate ("+Fr(C(oe))+")"),W(">>"),W("endobj")},ra=d.__private__.putCatalog=function(m){var C=(m=m||{}).rootDictionaryObjId||On;switch(qt(),W("<<"),W("/Type /Catalog"),W("/Pages "+C+" 0 R"),Me||(Me="fullwidth"),Me){case"fullwidth":W("/OpenAction [3 0 R /FitH null]");break;case"fullheight":W("/OpenAction [3 0 R /FitV null]");break;case"fullpage":W("/OpenAction [3 0 R /Fit]");break;case"original":W("/OpenAction [3 0 R /XYZ null null 1]");break;default:var q=""+Me;q.substr(q.length-1)==="%"&&(Me=parseInt(Me)/100),typeof Me=="number"&&W("/OpenAction [3 0 R /XYZ null null "+E(Me)+"]")}switch(it||(it="continuous"),it){case"continuous":W("/PageLayout /OneColumn");break;case"single":W("/PageLayout /SinglePage");break;case"two":case"twoleft":W("/PageLayout /TwoColumnLeft");break;case"tworight":W("/PageLayout /TwoColumnRight")}De&&W("/PageMode /"+De),bt.publish("putCatalog"),W(">>"),W("endobj")},$t=d.__private__.putTrailer=function(){W("trailer"),W("<<"),W("/Size "+(re+1)),W("/Root "+re+" 0 R"),W("/Info "+(re-1)+" 0 R"),p!==null&&W("/Encrypt "+jt.oid+" 0 R"),W("/ID [ <"+ce+"> <"+ce+"> ]"),W(">>")},ko=d.__private__.putHeader=function(){W("%PDF-"+b),W("%ºß¬à")},Lo=d.__private__.putXRef=function(){var m="0000000000";W("xref"),W("0 "+(re+1)),W("0000000000 65535 f ");for(var C=1;C<=re;C++)typeof ue[C]=="function"?W((m+ue[C]()).slice(-10)+" 00000 n "):ue[C]!==void 0?W((m+ue[C]).slice(-10)+" 00000 n "):W("0000000000 00000 n ")},qr=d.__private__.buildDocument=function(){var m;re=0,pe=0,ge=[],ue=[],xe=[],On=er(),Mr=er(),ve(ge),bt.publish("buildDocument"),ko(),Qr(),function(){bt.publish("putAdditionalObjects");for(var q=0;q<xe.length;q++){var Z=xe[q];cr(Z.objId,!0),W(Z.content),W("endobj")}bt.publish("postPutAdditionalObjects")}(),m=[],function(){for(var q in Be)Be.hasOwnProperty(q)&&(w===!1||w===!0&&S.hasOwnProperty(q))&&Cn(Be[q])}(),function(){var q;for(q in lt)lt.hasOwnProperty(q)&&wi(lt[q])}(),function(){for(var q in dr)dr.hasOwnProperty(q)&&xi(dr[q])}(),function(q){var Z;for(Z in Xe)Xe.hasOwnProperty(Z)&&(Xe[Z]instanceof vo?dn(Xe[Z]):Xe[Z]instanceof Yo&&Zn(Xe[Z],q))}(m),bt.publish("putResources"),m.forEach(Jn),Jn({resourcesOid:Mr,objectOid:Number.MAX_SAFE_INTEGER}),bt.publish("postPutResources"),p!==null&&(jt.oid=qt(),W("<<"),W("/Filter /Standard"),W("/V "+jt.v),W("/R "+jt.r),W("/U <"+jt.toHexString(jt.U)+">"),W("/O <"+jt.toHexString(jt.O)+">"),W("/P "+jt.P),W(">>"),W("endobj")),ei(),ra();var C=pe;return Lo(),$t(),W("startxref"),W(""+C),W("%%EOF"),ve(Ae[H]),ge.join(`
`)},ti=d.__private__.getBlob=function(m){return new Blob([Ke(m)],{type:"application/pdf"})},Dr=d.output=d.__private__.output=(Rr=function(m,C){switch(typeof(C=C||{})=="string"?C={filename:C}:C.filename=C.filename||"generated.pdf",m){case void 0:return qr();case"save":d.save(C.filename);break;case"arraybuffer":return Ke(qr());case"blob":return ti(qr());case"bloburi":case"bloburl":if(rt.URL!==void 0&&typeof rt.URL.createObjectURL=="function")return rt.URL&&rt.URL.createObjectURL(ti(qr()))||void 0;Ot.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var q="",Z=qr();try{q=Z1(Z)}catch{q=Z1(unescape(encodeURIComponent(Z)))}return"data:application/pdf;filename="+C.filename+";base64,"+q;case"pdfobjectnewwindow":if(Object.prototype.toString.call(rt)==="[object Window]"){var ae="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",Se=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';C.pdfObjectUrl&&(ae=C.pdfObjectUrl,Se="");var Le='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ae+'"'+Se+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(C)+");<\/script></body></html>",ze=rt.open();return ze!==null&&ze.document.write(Le),ze}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(rt)==="[object Window]"){var $e='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(C.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+C.filename+'" width="500px" height="400px" /></body></html>',st=rt.open();if(st!==null){st.document.write($e);var ct=this;st.document.documentElement.querySelector("#pdfViewer").onload=function(){st.document.title=C.filename,st.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ct.output("bloburl"))}}return st}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(rt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var Ct='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",C)+'"></iframe></body></html>',Wt=rt.open();if(Wt!==null&&(Wt.document.write(Ct),Wt.document.title=C.filename),Wt||typeof safari>"u")return Wt;break;case"datauri":case"dataurl":return rt.document.location.href=this.output("datauristring",C);default:return null}},Rr.foo=function(){try{return Rr.apply(this,arguments)}catch(q){var m=q.stack||"";~m.indexOf(" at ")&&(m=m.split(" at ")[1]);var C="Error in function "+m.split(`
`)[0].split("<")[0]+": "+q.message;if(!rt.console)throw new Error(C);rt.console.error(C,q),rt.alert&&alert(C)}},Rr.foo.bar=Rr,Rr.foo),Fn=function(m){return Array.isArray(Rn)===!0&&Rn.indexOf(m)>-1};switch(n){case"pt":Je=1;break;case"mm":Je=72/25.4;break;case"cm":Je=72/2.54;break;case"in":Je=72;break;case"px":Je=Fn("px_scaling")==1?.75:96/72;break;case"pc":case"em":Je=12;break;case"ex":Je=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);Je=n}var jt=null;be(),ee();var Si=d.__private__.getPageInfo=d.getPageInfo=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Qe[m].objId,pageNumber:m,pageContext:Qe[m]}},na=d.__private__.getPageInfoByObjId=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var C in Qe)if(Qe[C].objId===m)break;return Si(C)},No=d.__private__.getCurrentPageInfo=d.getCurrentPageInfo=function(){return{objId:Qe[H].objId,pageNumber:H,pageContext:Qe[H]}};d.addPage=function(){return Yi.apply(this,arguments),this},d.setPage=function(){return Co.apply(this,arguments),ve.call(this,Ae[H]),this},d.insertPage=function(m){return this.addPage(),this.movePage(H,m),this},d.movePage=function(m,C){var q,Z;if(m>C){q=Ae[m],Z=Qe[m];for(var ae=m;ae>C;ae--)Ae[ae]=Ae[ae-1],Qe[ae]=Qe[ae-1];Ae[C]=q,Qe[C]=Z,this.setPage(C)}else if(m<C){q=Ae[m],Z=Qe[m];for(var Se=m;Se<C;Se++)Ae[Se]=Ae[Se+1],Qe[Se]=Qe[Se+1];Ae[C]=q,Qe[C]=Z,this.setPage(C)}return this},d.deletePage=function(){return Kn.apply(this,arguments),this},d.__private__.text=d.text=function(m,C,q,Z,ae){var Se,Le,ze,$e,st,ct,Ct,Wt,hr,Ft=(Z=Z||{}).scope||this;if(typeof m=="number"&&typeof C=="number"&&(typeof q=="string"||Array.isArray(q))){var mr=q;q=C,C=m,m=mr}if(arguments[3]instanceof Ze==0?(ze=arguments[4],$e=arguments[5],Pt(Ct=arguments[3])==="object"&&Ct!==null||(typeof ze=="string"&&($e=ze,ze=null),typeof Ct=="string"&&($e=Ct,Ct=null),typeof Ct=="number"&&(ze=Ct,Ct=null),Z={flags:Ct,angle:ze,align:$e})):(M("The transform parameter of text() with a Matrix value"),hr=ae),isNaN(C)||isNaN(q)||m==null)throw new Error("Invalid arguments passed to jsPDF.text");if(m.length===0)return Ft;var fr,yr="",bn=typeof Z.lineHeightFactor=="number"?Z.lineHeightFactor:ni,Vr=Ft.internal.scaleFactor;function Qa(kt){return kt=kt.split("	").join(Array(Z.TabLen||9).join(" ")),Fr(kt,Ct)}function Oo(kt){for(var Rt,rr=kt.concat(),gr=[],li=rr.length;li--;)typeof(Rt=rr.shift())=="string"?gr.push(Rt):Array.isArray(kt)&&(Rt.length===1||Rt[1]===void 0&&Rt[2]===void 0)?gr.push(Rt[0]):gr.push([Rt[0],Rt[1],Rt[2]]);return gr}function no(kt,Rt){var rr;if(typeof kt=="string")rr=Rt(kt)[0];else if(Array.isArray(kt)){for(var gr,li,ya=kt.concat(),zo=[],ts=ya.length;ts--;)typeof(gr=ya.shift())=="string"?zo.push(Rt(gr)[0]):Array.isArray(gr)&&typeof gr[0]=="string"&&(li=Rt(gr[0],gr[1],gr[2]),zo.push([li[0],li[1],li[2]]));rr=zo}return rr}var Ai=!1,io=!0;if(typeof m=="string")Ai=!0;else if(Array.isArray(m)){var oo=m.concat();Le=[];for(var ao,kr=oo.length;kr--;)(typeof(ao=oo.shift())!="string"||Array.isArray(ao)&&typeof ao[0]!="string")&&(io=!1);Ai=io}if(Ai===!1)throw new Error('Type of text must be string or Array. "'+m+'" is not recognized.');typeof m=="string"&&(m=m.match(/[\r?\n]/)?m.split(/\r\n|\r|\n/g):[m]);var so=Ne/Ft.internal.scaleFactor,lo=so*(bn-1);switch(Z.baseline){case"bottom":q-=lo;break;case"top":q+=so-lo;break;case"hanging":q+=so-2*lo;break;case"middle":q+=so/2-lo}if((ct=Z.maxWidth||0)>0&&(typeof m=="string"?m=Ft.splitTextToSize(m,ct):Object.prototype.toString.call(m)==="[object Array]"&&(m=m.reduce(function(kt,Rt){return kt.concat(Ft.splitTextToSize(Rt,ct))},[]))),Se={text:m,x:C,y:q,options:Z,mutex:{pdfEscape:Fr,activeFontKey:Ve,fonts:Be,activeFontSize:Ne}},bt.publish("preProcessText",Se),m=Se.text,ze=(Z=Se.options).angle,hr instanceof Ze==0&&ze&&typeof ze=="number"){ze*=Math.PI/180,Z.rotationDirection===0&&(ze=-ze),T===P&&(ze=-ze);var fa=Math.cos(ze),da=Math.sin(ze);hr=new Ze(fa,da,-da,fa,0,0)}else ze&&ze instanceof Ze&&(hr=ze);T!==P||hr||(hr=fn),(st=Z.charSpace||Ro)!==void 0&&(yr+=X(G(st))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Wt=Z.horizontalScale)!==void 0&&(yr+=X(100*Wt)+` Tz
`),Z.lang;var Zt=-1,ai=Z.renderingMode!==void 0?Z.renderingMode:Z.stroke,Fo=Ft.internal.getCurrentPageInfo().pageContext;switch(ai){case 0:case!1:case"fill":Zt=0;break;case 1:case!0:case"stroke":Zt=1;break;case 2:case"fillThenStroke":Zt=2;break;case 3:case"invisible":Zt=3;break;case 4:case"fillAndAddForClipping":Zt=4;break;case 5:case"strokeAndAddPathForClipping":Zt=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Zt=6;break;case 7:case"addToPathForClipping":Zt=7}var Ka=Fo.usedRenderingMode!==void 0?Fo.usedRenderingMode:-1;Zt!==-1?yr+=Zt+` Tr
`:Ka!==-1&&(yr+=`0 Tr
`),Zt!==-1&&(Fo.usedRenderingMode=Zt),$e=Z.align||"left";var xn,co=Ne*bn,pa=Ft.internal.pageSize.getWidth(),ma=Be[Ve];st=Z.charSpace||Ro,ct=Z.maxWidth||0,Ct=Object.assign({autoencode:!0,noBOM:!0},Z.flags);var ki=[],uo=function(kt){return Ft.getStringUnitWidth(kt,{font:ma,charSpace:st,fontSize:Ne,doKerning:!1})*Ne/Vr};if(Object.prototype.toString.call(m)==="[object Array]"){var Kr;Le=Oo(m),$e!=="left"&&(xn=Le.map(uo));var en,Li=0;if($e==="right"){C-=xn[0],m=[],kr=Le.length;for(var si=0;si<kr;si++)si===0?(en=mn(C),Kr=gn(q)):(en=G(Li-xn[si]),Kr=-co),m.push([Le[si],en,Kr]),Li=xn[si]}else if($e==="center"){C-=xn[0]/2,m=[],kr=Le.length;for(var Ni=0;Ni<kr;Ni++)Ni===0?(en=mn(C),Kr=gn(q)):(en=G((Li-xn[Ni])/2),Kr=-co),m.push([Le[Ni],en,Kr]),Li=xn[Ni]}else if($e==="left"){m=[],kr=Le.length;for(var ga=0;ga<kr;ga++)m.push(Le[ga])}else if($e==="justify"&&ma.encoding==="Identity-H"){m=[],kr=Le.length,ct=ct!==0?ct:pa;for(var Do=0,tr=0;tr<kr;tr++)if(Kr=tr===0?gn(q):-co,en=tr===0?mn(C):Do,tr<kr-1){var es=G((ct-xn[tr])/(Le[tr].split(" ").length-1)),zn=Le[tr].split(" ");m.push([zn[0]+" ",en,Kr]),Do=0;for(var Bn=1;Bn<zn.length;Bn++){var va=(uo(zn[Bn-1]+" "+zn[Bn])-uo(zn[Bn]))*Vr+es;Bn==zn.length-1?m.push([zn[Bn],va,0]):m.push([zn[Bn]+" ",va,0]),Do-=va}}else m.push([Le[tr],en,Kr]);m.push(["",Do,0])}else{if($e!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(m=[],kr=Le.length,ct=ct!==0?ct:pa,tr=0;tr<kr;tr++){Kr=tr===0?gn(q):-co,en=tr===0?mn(C):0;var ba=Le[tr].split(" ").length-1,xa=ba>0?(ct-xn[tr])/ba:0;tr<kr-1?ki.push(X(G(xa))):ki.push(0),m.push([Le[tr],en,Kr])}}}(typeof Z.R2L=="boolean"?Z.R2L:nt)===!0&&(m=no(m,function(kt,Rt,rr){return[kt.split("").reverse().join(""),Rt,rr]})),Se={text:m,x:C,y:q,options:Z,mutex:{pdfEscape:Fr,activeFontKey:Ve,fonts:Be,activeFontSize:Ne}},bt.publish("postProcessText",Se),m=Se.text,fr=Se.mutex.isHex||!1;var wa=Be[Ve].encoding;wa!=="WinAnsiEncoding"&&wa!=="StandardEncoding"||(m=no(m,function(kt,Rt,rr){return[Qa(kt),Rt,rr]})),Le=Oo(m),m=[];for(var Ei,Ii,Pi,ho=Array.isArray(Le[0])?1:0,Ti="",fo=function(kt,Rt,rr){var gr="";return rr instanceof Ze?(rr=typeof Z.angle=="number"?hn(rr,new Ze(1,0,0,1,kt,Rt)):hn(new Ze(1,0,0,1,kt,Rt),rr),T===P&&(rr=hn(new Ze(1,0,0,-1,0,0),rr)),gr=rr.join(" ")+` Tm
`):gr=X(kt)+" "+X(Rt)+` Td
`,gr},wn=0;wn<Le.length;wn++){switch(Ti="",ho){case 1:Pi=(fr?"<":"(")+Le[wn][0]+(fr?">":")"),Ei=parseFloat(Le[wn][1]),Ii=parseFloat(Le[wn][2]);break;case 0:Pi=(fr?"<":"(")+Le[wn]+(fr?">":")"),Ei=mn(C),Ii=gn(q)}ki!==void 0&&ki[wn]!==void 0&&(Ti=ki[wn]+` Tw
`),wn===0?m.push(Ti+fo(Ei,Ii,hr)+Pi):ho===0?m.push(Ti+Pi):ho===1&&m.push(Ti+fo(Ei,Ii,hr)+Pi)}m=ho===0?m.join(` Tj
T* `):m.join(` Tj
`),m+=` Tj
`;var Un=`BT
/`;return Un+=Ve+" "+Ne+` Tf
`,Un+=X(Ne*bn)+` TL
`,Un+=Qi+`
`,Un+=yr,Un+=m,W(Un+="ET"),S[Ve]=!0,Ft};var ia=d.__private__.clip=d.clip=function(m){return W(m==="evenodd"?"W*":"W"),this};d.clipEvenOdd=function(){return ia("evenodd")},d.__private__.discardPath=d.discardPath=function(){return W("n"),this};var pn=d.__private__.isValidStyle=function(m){var C=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(m)!==-1&&(C=!0),C};d.__private__.setDefaultPathOperation=d.setDefaultPathOperation=function(m){return pn(m)&&(f=m),this};var Eo=d.__private__.getStyle=d.getStyle=function(m){var C=f;switch(m){case"D":case"S":C="S";break;case"F":C="f";break;case"FD":case"DF":C="B";break;case"f":case"f*":case"B":case"B*":C=m}return C},me=d.close=function(){return W("h"),this};d.stroke=function(){return W("S"),this},d.fill=function(m){return dt("f",m),this},d.fillEvenOdd=function(m){return dt("f*",m),this},d.fillStroke=function(m){return dt("B",m),this},d.fillStrokeEvenOdd=function(m){return dt("B*",m),this};var dt=function(m,C){Pt(C)==="object"?$r(C,m):W(m)},ur=function(m){m===null||T===P&&m===void 0||(m=Eo(m),W(m))};function An(m,C,q,Z,ae){var Se=new Yo(C||this.boundingBox,q||this.xStep,Z||this.yStep,this.gState,ae||this.matrix);Se.stream=this.stream;var Le=m+"$$"+this.cloneIndex+++"$$";return jr(Le,Se),Se}var $r=function(m,C){var q=vt[m.key],Z=Xe[q];if(Z instanceof vo)W("q"),W(Zi(C)),Z.gState&&d.setGState(Z.gState),W(m.matrix.toString()+" cm"),W("/"+q+" sh"),W("Q");else if(Z instanceof Yo){var ae=new Ze(1,0,0,-1,0,ro());m.matrix&&(ae=ae.multiply(m.matrix||fn),q=An.call(Z,m.key,m.boundingBox,m.xStep,m.yStep,ae).id),W("q"),W("/Pattern cs"),W("/"+q+" scn"),Z.gState&&d.setGState(Z.gState),W(C),W("Q")}},Zi=function(m){switch(m){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},_i=d.moveTo=function(m,C){return W(X(G(m))+" "+X($(C))+" m"),this},ri=d.lineTo=function(m,C){return W(X(G(m))+" "+X($(C))+" l"),this},pr=d.curveTo=function(m,C,q,Z,ae,Se){return W([X(G(m)),X($(C)),X(G(q)),X($(Z)),X(G(ae)),X($(Se)),"c"].join(" ")),this};d.__private__.line=d.line=function(m,C,q,Z,ae){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||!pn(ae))throw new Error("Invalid arguments passed to jsPDF.line");return T===R?this.lines([[q-m,Z-C]],m,C,[1,1],ae||"S"):this.lines([[q-m,Z-C]],m,C,[1,1]).stroke()},d.__private__.lines=d.lines=function(m,C,q,Z,ae,Se){var Le,ze,$e,st,ct,Ct,Wt,hr,Ft,mr,fr,yr;if(typeof m=="number"&&(yr=q,q=C,C=m,m=yr),Z=Z||[1,1],Se=Se||!1,isNaN(C)||isNaN(q)||!Array.isArray(m)||!Array.isArray(Z)||!pn(ae)||typeof Se!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(_i(C,q),Le=Z[0],ze=Z[1],st=m.length,mr=C,fr=q,$e=0;$e<st;$e++)(ct=m[$e]).length===2?(mr=ct[0]*Le+mr,fr=ct[1]*ze+fr,ri(mr,fr)):(Ct=ct[0]*Le+mr,Wt=ct[1]*ze+fr,hr=ct[2]*Le+mr,Ft=ct[3]*ze+fr,mr=ct[4]*Le+mr,fr=ct[5]*ze+fr,pr(Ct,Wt,hr,Ft,mr,fr));return Se&&me(),ur(ae),this},d.path=function(m){for(var C=0;C<m.length;C++){var q=m[C],Z=q.c;switch(q.op){case"m":_i(Z[0],Z[1]);break;case"l":ri(Z[0],Z[1]);break;case"c":pr.apply(this,Z);break;case"h":me()}}return this},d.__private__.rect=d.rect=function(m,C,q,Z,ae){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||!pn(ae))throw new Error("Invalid arguments passed to jsPDF.rect");return T===R&&(Z=-Z),W([X(G(m)),X($(C)),X(G(q)),X(G(Z)),"re"].join(" ")),ur(ae),this},d.__private__.triangle=d.triangle=function(m,C,q,Z,ae,Se,Le){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||isNaN(ae)||isNaN(Se)||!pn(Le))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[q-m,Z-C],[ae-q,Se-Z],[m-ae,C-Se]],m,C,[1,1],Le,!0),this},d.__private__.roundedRect=d.roundedRect=function(m,C,q,Z,ae,Se,Le){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||isNaN(ae)||isNaN(Se)||!pn(Le))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var ze=4/3*(Math.SQRT2-1);return ae=Math.min(ae,.5*q),Se=Math.min(Se,.5*Z),this.lines([[q-2*ae,0],[ae*ze,0,ae,Se-Se*ze,ae,Se],[0,Z-2*Se],[0,Se*ze,-ae*ze,Se,-ae,Se],[2*ae-q,0],[-ae*ze,0,-ae,-Se*ze,-ae,-Se],[0,2*Se-Z],[0,-Se*ze,ae*ze,-Se,ae,-Se]],m+ae,C,[1,1],Le,!0),this},d.__private__.ellipse=d.ellipse=function(m,C,q,Z,ae){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||!pn(ae))throw new Error("Invalid arguments passed to jsPDF.ellipse");var Se=4/3*(Math.SQRT2-1)*q,Le=4/3*(Math.SQRT2-1)*Z;return _i(m+q,C),pr(m+q,C-Le,m+Se,C-Z,m,C-Z),pr(m-Se,C-Z,m-q,C-Le,m-q,C),pr(m-q,C+Le,m-Se,C+Z,m,C+Z),pr(m+Se,C+Z,m+q,C+Le,m+q,C),ur(ae),this},d.__private__.circle=d.circle=function(m,C,q,Z){if(isNaN(m)||isNaN(C)||isNaN(q)||!pn(Z))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(m,C,q,q,Z)},d.setFont=function(m,C,q){return q&&(C=ne(C,q)),Ve=Ao(m,C,{disableWarning:!1}),this};var Ji=d.__private__.getFont=d.getFont=function(){return Be[Ao.apply(d,arguments)]};d.__private__.getFontList=d.getFontList=function(){var m,C,q={};for(m in at)if(at.hasOwnProperty(m))for(C in q[m]=[],at[m])at[m].hasOwnProperty(C)&&q[m].push(C);return q},d.addFont=function(m,C,q,Z,ae){var Se=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&Se.indexOf(arguments[3])!==-1?ae=arguments[3]:arguments[3]&&Se.indexOf(arguments[3])==-1&&(q=ne(q,Z)),Gi.call(this,m,C,q,ae=ae||"Identity-H")};var ni,Ci=e.lineWidth||.200025,et=d.__private__.getLineWidth=d.getLineWidth=function(){return Ci},oa=d.__private__.setLineWidth=d.setLineWidth=function(m){return Ci=m,W(X(G(m))+" w"),this};d.__private__.setLineDash=Ye.API.setLineDash=Ye.API.setLineDashPattern=function(m,C){if(m=m||[],C=C||0,isNaN(C)||!Array.isArray(m))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return m=m.map(function(q){return X(G(q))}).join(" "),C=X(G(C)),W("["+m+"] "+C+" d"),this};var Io=d.__private__.getLineHeight=d.getLineHeight=function(){return Ne*ni};d.__private__.getLineHeight=d.getLineHeight=function(){return Ne*ni};var Po=d.__private__.setLineHeightFactor=d.setLineHeightFactor=function(m){return typeof(m=m||1.15)=="number"&&(ni=m),this},To=d.__private__.getLineHeightFactor=d.getLineHeightFactor=function(){return ni};Po(e.lineHeight);var mn=d.__private__.getHorizontalCoordinate=function(m){return G(m)},gn=d.__private__.getVerticalCoordinate=function(m){return T===P?m:Qe[H].mediaBox.topRightY-Qe[H].mediaBox.bottomLeftY-G(m)},aa=d.__private__.getHorizontalCoordinateString=d.getHorizontalCoordinateString=function(m){return X(mn(m))},sa=d.__private__.getVerticalCoordinateString=d.getVerticalCoordinateString=function(m){return X(gn(m))},vn=e.strokeColor||"0 G";d.__private__.getStrokeColor=d.getDrawColor=function(){return Or(vn)},d.__private__.setStrokeColor=d.setDrawColor=function(m,C,q,Z){return vn=Zr({ch1:m,ch2:C,ch3:q,ch4:Z,pdfColorType:"draw",precision:2}),W(vn),this};var Dn=e.fillColor||"0 g";d.__private__.getFillColor=d.getFillColor=function(){return Or(Dn)},d.__private__.setFillColor=d.setFillColor=function(m,C,q,Z){return Dn=Zr({ch1:m,ch2:C,ch3:q,ch4:Z,pdfColorType:"fill",precision:2}),W(Dn),this};var Qi=e.textColor||"0 g",jo=d.__private__.getTextColor=d.getTextColor=function(){return Or(Qi)};d.__private__.setTextColor=d.setTextColor=function(m,C,q,Z){return Qi=Zr({ch1:m,ch2:C,ch3:q,ch4:Z,pdfColorType:"text",precision:3}),this};var Ro=e.charSpace,ml=d.__private__.getCharSpace=d.getCharSpace=function(){return parseFloat(Ro||0)};d.__private__.setCharSpace=d.setCharSpace=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Ro=m,this};var la=0;d.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},d.__private__.setLineCap=d.setLineCap=function(m){var C=d.CapJoinStyles[m];if(C===void 0)throw new Error("Line cap style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return la=C,W(C+" J"),this};var ca=0;d.__private__.setLineJoin=d.setLineJoin=function(m){var C=d.CapJoinStyles[m];if(C===void 0)throw new Error("Line join style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return ca=C,W(C+" j"),this},d.__private__.setLineMiterLimit=d.__private__.setMiterLimit=d.setLineMiterLimit=d.setMiterLimit=function(m){if(m=m||0,isNaN(m))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return W(X(G(m))+" M"),this},d.GState=el,d.setGState=function(m){(m=typeof m=="string"?lt[Ht[m]]:Ki(null,m)).equals(Xt)||(W("/"+m.id+" gs"),Xt=m)};var Ki=function(m,C){if(!m||!Ht[m]){var q=!1;for(var Z in lt)if(lt.hasOwnProperty(Z)&&lt[Z].equals(C)){q=!0;break}if(q)C=lt[Z];else{var ae="GS"+(Object.keys(lt).length+1).toString(10);lt[ae]=C,C.id=ae}return m&&(Ht[m]=C.id),bt.publish("addGState",C),C}};d.addGState=function(m,C){return Ki(m,C),this},d.saveGraphicsState=function(){return W("q"),Lt.push({key:Ve,size:Ne,color:Qi}),this},d.restoreGraphicsState=function(){W("Q");var m=Lt.pop();return Ve=m.key,Ne=m.size,Qi=m.color,Xt=null,this},d.setCurrentTransformationMatrix=function(m){return W(m.toString()+" cm"),this},d.comment=function(m){return W("#"+m),this};var eo=function(m,C){var q=m||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return q},set:function(Se){isNaN(Se)||(q=parseFloat(Se))}});var Z=C||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return Z},set:function(Se){isNaN(Se)||(Z=parseFloat(Se))}});var ae="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ae},set:function(Se){ae=Se.toString()}}),this},ua=function(m,C,q,Z){eo.call(this,m,C),this.type="rect";var ae=q||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ae},set:function(Le){isNaN(Le)||(ae=parseFloat(Le))}});var Se=Z||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return Se},set:function(Le){isNaN(Le)||(Se=parseFloat(Le))}}),this},Mo=function(){this.page=Nt,this.currentPage=H,this.pages=Ae.slice(0),this.pagesContext=Qe.slice(0),this.x=We,this.y=At,this.matrix=yt,this.width=Ga(H),this.height=ii(H),this.outputDestination=Te,this.id="",this.objectNumber=-1};Mo.prototype.restore=function(){Nt=this.page,H=this.currentPage,Qe=this.pagesContext,Ae=this.pages,We=this.x,At=this.y,yt=this.matrix,Ya(H,this.width),oi(H,this.height),Te=this.outputDestination};var ha=function(m,C,q,Z,ae){Xr.push(new Mo),Nt=H=0,Ae=[],We=m,At=C,yt=ae,Qn([q,Z])};for(var to in d.beginFormObject=function(m,C,q,Z,ae){return ha(m,C,q,Z,ae),this},d.endFormObject=function(m){return function(C){if(un[C])Xr.pop().restore();else{var q=new Mo,Z="Xo"+(Object.keys(dr).length+1).toString(10);q.id=Z,un[C]=Z,dr[Z]=q,bt.publish("addFormObject",q),Xr.pop().restore()}}(m),this},d.doFormObject=function(m,C){var q=dr[un[m]];return W("q"),W(C.toString()+" cm"),W("/"+q.id+" Do"),W("Q"),this},d.getFormObject=function(m){var C=dr[un[m]];return{x:C.x,y:C.y,width:C.width,height:C.height,matrix:C.matrix}},d.save=function(m,C){return m=m||"generated.pdf",(C=C||{}).returnPromise=C.returnPromise||!1,C.returnPromise===!1?(go(ti(qr()),m),typeof go.unload=="function"&&rt.setTimeout&&setTimeout(go.unload,911),this):new Promise(function(q,Z){try{var ae=go(ti(qr()),m);typeof go.unload=="function"&&rt.setTimeout&&setTimeout(go.unload,911),q(ae)}catch(Se){Z(Se.message)}})},Ye.API)Ye.API.hasOwnProperty(to)&&(to==="events"&&Ye.API.events.length?function(m,C){var q,Z,ae;for(ae=C.length-1;ae!==-1;ae--)q=C[ae][0],Z=C[ae][1],m.subscribe.apply(m,[q].concat(typeof Z=="function"?[Z]:Z))}(bt,Ye.API.events):d[to]=Ye.API[to]);function Ga(m){return Qe[m].mediaBox.topRightX-Qe[m].mediaBox.bottomLeftX}function Ya(m,C){Qe[m].mediaBox.topRightX=C+Qe[m].mediaBox.bottomLeftX}function ii(m){return Qe[m].mediaBox.topRightY-Qe[m].mediaBox.bottomLeftY}function oi(m,C){Qe[m].mediaBox.topRightY=C+Qe[m].mediaBox.bottomLeftY}var Xa=d.getPageWidth=function(m){return Ga(m=m||H)/Je},Za=d.setPageWidth=function(m,C){Ya(m,C*Je)},ro=d.getPageHeight=function(m){return ii(m=m||H)/Je},Ja=d.setPageHeight=function(m,C){oi(m,C*Je)};return d.internal={pdfEscape:Fr,getStyle:Eo,getFont:Ji,getFontSize:je,getCharSpace:ml,getTextColor:jo,getLineHeight:Io,getLineHeightFactor:To,getLineWidth:et,write:ft,getHorizontalCoordinate:mn,getVerticalCoordinate:gn,getCoordinateString:aa,getVerticalCoordinateString:sa,collections:{},newObject:qt,newAdditionalObject:Mn,newObjectDeferred:er,newObjectDeferredBegin:cr,getFilters:Jr,putStream:Hr,events:bt,scaleFactor:Je,pageSize:{getWidth:function(){return Xa(H)},setWidth:function(m){Za(H,m)},getHeight:function(){return ro(H)},setHeight:function(m){Ja(H,m)}},encryptionOptions:p,encryption:jt,getEncryptor:function(m){return p!==null?jt.encryptor(m,0):function(C){return C}},output:Dr,getNumberOfPages:Xi,pages:Ae,out:W,f2:E,f3:F,getPageInfo:Si,getPageInfoByObjId:na,getCurrentPageInfo:No,getPDFVersion:_,Point:eo,Rectangle:ua,Matrix:Ze,hasHotfix:Fn},Object.defineProperty(d.internal.pageSize,"width",{get:function(){return Xa(H)},set:function(m){Za(H,m)},enumerable:!0,configurable:!0}),Object.defineProperty(d.internal.pageSize,"height",{get:function(){return ro(H)},set:function(m){Ja(H,m)},enumerable:!0,configurable:!0}),(function(m){for(var C=0,q=qe.length;C<q;C++){var Z=Gi.call(this,m[C][0],m[C][1],m[C][2],qe[C][3],!0);w===!1&&(S[Z]=!0);var ae=m[C][0].split("-");yi({id:Z,fontName:ae[0],fontStyle:ae[1]||""})}bt.publish("addFonts",{fonts:Be,dictionary:at})}).call(d,qe),Ve="F1",Yi(o,r),bt.publish("initialized"),d}Wo.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},Wo.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Wo.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},Wo.prototype.processOwnerPassword=function(e,t){return Cc(_c(t).substr(0,5),e)},Wo.prototype.encryptor=function(e,t){var r=_c(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return Cc(r,n)}},el.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||Pt(e)!==Pt(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},Ye.API={events:[]},Ye.version="3.0.3";var Kt=Ye.API,Xc=1,_o=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},$o=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},ut=function(e){return e.toFixed(2)},Ui=function(e){return e.toFixed(5)};Kt.__acroform__={};var Yr=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},eh=function(e){return e*Xc},qn=function(e){var t=new d2,r=Fe.internal.getHeight(e)||0,n=Fe.internal.getWidth(e)||0;return t.BBox=[0,0,Number(ut(n)),Number(ut(r))],t},iv=Kt.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},ov=Kt.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},av=Kt.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},or=Kt.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return av(e,t-1)},ar=Kt.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return iv(e,t-1)},sr=Kt.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return ov(e,t-1)},sv=Kt.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,o=e[0],a=e[1],c=e[2],l=e[3],h={};return h.lowerLeft_X=r(o)||0,h.lowerLeft_Y=n(a+l)||0,h.upperRight_X=r(o+c)||0,h.upperRight_Y=n(a)||0,[Number(ut(h.lowerLeft_X)),Number(ut(h.lowerLeft_Y)),Number(ut(h.upperRight_X)),Number(ut(h.upperRight_Y))]},lv=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=Ac(e,r),o=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+o+" "+ut(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var a=qn(e);return a.scope=e.scope,a.stream=t.join(`
`),a}},Ac=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},o=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");o=e.multiline?o.map(function(E){return E.split(`
`)}):o.map(function(E){return[E]});var a=r,c=Fe.internal.getHeight(e)||0;c=c<0?-c:c;var l=Fe.internal.getWidth(e)||0;l=l<0?-l:l;var h=function(E,F,G){if(E+1<o.length){var $=F+" "+o[E+1][0];return Os($,e,G).width<=l-4}return!1};a++;e:for(;a>0;){t="",a--;var f,p,w=Os("3",e,a).height,S=e.multiline?c-a:(c-w)/2,d=S+=2,b=0,_=0,k=0;if(a<=0){t=`(...) Tj
`,t+="% Width of Text: "+Os(t,e,a=12).width+", FieldWidth:"+l+`
`;break}for(var y="",R=0,P=0;P<o.length;P++)if(o.hasOwnProperty(P)){var T=!1;if(o[P].length!==1&&k!==o[P].length-1){if((w+2)*(R+2)+2>c)continue e;y+=o[P][k],T=!0,_=P,P--}else{y=(y+=o[P][k]+" ").substr(y.length-1)==" "?y.substr(0,y.length-1):y;var Y=parseInt(P),K=h(Y,y,a),ne=P>=o.length-1;if(K&&!ne){y+=" ",k=0;continue}if(K||ne){if(ne)_=Y;else if(e.multiline&&(w+2)*(R+2)+2>c)continue e}else{if(!e.multiline||(w+2)*(R+2)+2>c)continue e;_=Y}}for(var X="",M=b;M<=_;M++){var J=o[M];if(e.multiline){if(M===_){X+=J[k]+" ",k=(k+1)%J.length;continue}if(M===b){X+=J[J.length-1]+" ";continue}}X+=J[0]+" "}switch(X=X.substr(X.length-1)==" "?X.substr(0,X.length-1):X,p=Os(X,e,a).width,e.textAlign){case"right":f=l-p-2;break;case"center":f=(l-p)/2;break;default:f=2}t+=ut(f)+" "+ut(d)+` Td
`,t+="("+_o(X)+`) Tj
`,t+=-ut(f)+` 0 Td
`,d=-(a+2),p=0,b=T?_:_+1,R++,y=""}break}return n.text=t,n.fontSize=a,n},Os=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),o=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:o}},cv={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},uv=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},hv=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(Tn.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(cv)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");Xc=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new p2,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];a.objId=void 0,a.hasAnnotation&&uv(a,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,o){var a=!n;for(var c in n||(o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(c)){var l=n[c],h=[],f=l.Rect;if(l.Rect&&(l.Rect=sv(l.Rect,o)),o.internal.newObjectDeferredBegin(l.objId,!0),l.DA=Fe.createDefaultAppearanceStream(l),Pt(l)==="object"&&typeof l.getKeyValueListForStream=="function"&&(h=l.getKeyValueListForStream()),l.Rect=f,l.hasAppearanceStream&&!l.appearanceStreamContent){var p=lv(l);h.push({key:"AP",value:"<</N "+p+">>"}),o.internal.acroformPlugin.xForms.push(p)}if(l.appearanceStreamContent){var w="";for(var S in l.appearanceStreamContent)if(l.appearanceStreamContent.hasOwnProperty(S)){var d=l.appearanceStreamContent[S];if(w+="/"+S+" ",w+="<<",Object.keys(d).length>=1||Array.isArray(d)){for(var c in d)if(d.hasOwnProperty(c)){var b=d[c];typeof b=="function"&&(b=b.call(o,l)),w+="/"+c+" "+b+" ",o.internal.acroformPlugin.xForms.indexOf(b)>=0||o.internal.acroformPlugin.xForms.push(b)}}else typeof(b=d)=="function"&&(b=b.call(o,l)),w+="/"+c+" "+b,o.internal.acroformPlugin.xForms.indexOf(b)>=0||o.internal.acroformPlugin.xForms.push(b);w+=">>"}h.push({key:"AP",value:`<<
`+w+">>"})}o.internal.putStream({additionalKeyValues:h,objectId:l.objId}),o.internal.out("endobj")}a&&function(_,k){for(var y in _)if(_.hasOwnProperty(y)){var R=y,P=_[y];k.internal.newObjectDeferredBegin(P.objId,!0),Pt(P)==="object"&&typeof P.putStream=="function"&&P.putStream(),delete _[R]}}(o.internal.acroformPlugin.xForms,o)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},f2=Kt.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(c){return c};if(Array.isArray(e)){for(var o="[",a=0;a<e.length;a++)switch(a!==0&&(o+=" "),Pt(e[a])){case"boolean":case"number":case"object":o+=e[a].toString();break;case"string":e[a].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),o+="("+_o(n(e[a].toString()))+")"):o+=e[a].toString()}return o+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},Kl=function(e,t,r){var n=function(o){return o};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+_o(n(e))+")"},Vn=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Vn.prototype.toString=function(){return this.objId+" 0 R"},Vn.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Vn.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(a){return a!="content"&&a!="appearanceStreamContent"&&a!="scope"&&a!="objId"&&a.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],o=this[n];o&&(Array.isArray(o)?e.push({key:n,value:f2(o,this.objId,this.scope)}):o instanceof Vn?(o.scope=this.scope,e.push({key:n,value:o.objId+" 0 R"})):typeof o!="function"&&e.push({key:n,value:o}))}return e};var d2=function(){Vn.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};Yr(d2,Vn);var p2=function(){Vn.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+_o(r(e))+")"}},set:function(r){e=r}})};Yr(p2,Vn);var Tn=function e(){Vn.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute F supplied.');t=y}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!or(t,3)},set:function(y){y?this.F=ar(t,3):this.F=sr(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute Ff supplied.');r=y}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(y){n=y!==void 0?y:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(y){n[0]=y}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(y){n[1]=y}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(y){n[2]=y}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(y){n[3]=y}});var o="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return o},set:function(y){switch(y){case"/Btn":case"/Tx":case"/Ch":case"/Sig":o=y;break;default:throw new Error('Invalid value "'+y+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof tl)return;a="FieldObject"+e.FieldNum++}var y=function(R){return R};return this.scope&&(y=this.scope.internal.getEncryptor(this.objId)),"("+_o(y(a))+")"},set:function(y){a=y.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(y){a=y}});var c="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return c},set:function(y){c=y}});var l="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return l},set:function(y){l=y}});var h=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return h},set:function(y){h=y}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/Xc:f},set:function(y){f=y}});var p="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return p},set:function(y){p=y}});var w="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!w||this instanceof tl||this instanceof bo))return Kl(w,this.objId,this.scope)},set:function(y){y=y.toString(),w=y}});var S=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(S)return this instanceof wr==0?Kl(S,this.objId,this.scope):S},set:function(y){y=y.toString(),S=this instanceof wr==0?y.substr(0,1)==="("?$o(y.substr(1,y.length-2)):$o(y):y}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof wr==1?$o(S.substr(1,S.length-1)):S},set:function(y){y=y.toString(),S=this instanceof wr==1?"/"+y:y}});var d=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(d)return d},set:function(y){this.V=y}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(d)return this instanceof wr==0?Kl(d,this.objId,this.scope):d},set:function(y){y=y.toString(),d=this instanceof wr==0?y.substr(0,1)==="("?$o(y.substr(1,y.length-2)):$o(y):y}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof wr==1?$o(d.substr(1,d.length-1)):d},set:function(y){y=y.toString(),d=this instanceof wr==1?"/"+y:y}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var b,_=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return _},set:function(y){y=!!y,_=y}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(b)return b},set:function(y){b=y}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,1)},set:function(y){y?this.Ff=ar(this.Ff,1):this.Ff=sr(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,2)},set:function(y){y?this.Ff=ar(this.Ff,2):this.Ff=sr(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,3)},set:function(y){y?this.Ff=ar(this.Ff,3):this.Ff=sr(this.Ff,3)}});var k=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(k!==null)return k},set:function(y){if([0,1,2].indexOf(y)===-1)throw new Error('Invalid value "'+y+'" for attribute Q supplied.');k=y}}),Object.defineProperty(this,"textAlign",{get:function(){var y;switch(k){case 0:default:y="left";break;case 1:y="center";break;case 2:y="right"}return y},configurable:!0,enumerable:!0,set:function(y){switch(y){case"right":case 2:k=2;break;case"center":case 1:k=1;break;default:k=0}}})};Yr(Tn,Vn);var Xo=function(){Tn.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return f2(t,this.objId,this.scope)},set:function(r){var n,o;o=[],typeof(n=r)=="string"&&(o=function(a,c,l){l||(l=1);for(var h,f=[];h=c.exec(a);)f.push(h[l]);return f}(n,/\((.*?)\)/g)),t=o}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,18)},set:function(r){r?this.Ff=ar(this.Ff,18):this.Ff=sr(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=ar(this.Ff,19):this.Ff=sr(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,20)},set:function(r){r?(this.Ff=ar(this.Ff,20),t.sort()):this.Ff=sr(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,22)},set:function(r){r?this.Ff=ar(this.Ff,22):this.Ff=sr(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,23)},set:function(r){r?this.Ff=ar(this.Ff,23):this.Ff=sr(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,27)},set:function(r){r?this.Ff=ar(this.Ff,27):this.Ff=sr(this.Ff,27)}}),this.hasAppearanceStream=!1};Yr(Xo,Tn);var Zo=function(){Xo.call(this),this.fontName="helvetica",this.combo=!1};Yr(Zo,Xo);var Jo=function(){Zo.call(this),this.combo=!0};Yr(Jo,Zo);var Vs=function(){Jo.call(this),this.edit=!0};Yr(Vs,Jo);var wr=function(){Tn.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,15)},set:function(r){r?this.Ff=ar(this.Ff,15):this.Ff=sr(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,16)},set:function(r){r?this.Ff=ar(this.Ff,16):this.Ff=sr(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,17)},set:function(r){r?this.Ff=ar(this.Ff,17):this.Ff=sr(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,26)},set:function(r){r?this.Ff=ar(this.Ff,26):this.Ff=sr(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(a){return a};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,o=[];for(n in o.push("<<"),t)o.push("/"+n+" ("+_o(r(t[n]))+")");return o.push(">>"),o.join(`
`)}},set:function(r){Pt(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};Yr(wr,Tn);var Ws=function(){wr.call(this),this.pushButton=!0};Yr(Ws,wr);var Qo=function(){wr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};Yr(Qo,wr);var tl=function(){var e,t;Tn.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(o){e=o}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(o){t=o}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var o=function(l){return l};this.scope&&(o=this.scope.internal.getEncryptor(this.objId));var a,c=[];for(a in c.push("<<"),n)c.push("/"+a+" ("+_o(o(n[a]))+")");return c.push(">>"),c.join(`
`)},set:function(o){Pt(o)==="object"&&(n=o)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(o){typeof o=="string"&&(n.CA=o)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(o){r=o}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(o){r="/"+o}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Fe.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};Yr(tl,Tn),Qo.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},Qo.prototype.createOption=function(e){var t=new tl;return t.Parent=this,t.optionName=e,this.Kids.push(t),fv.call(this.scope,t),t};var Gs=function(){wr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Fe.CheckBox.createAppearanceStream()};Yr(Gs,wr);var bo=function(){Tn.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,13)},set:function(t){t?this.Ff=ar(this.Ff,13):this.Ff=sr(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,21)},set:function(t){t?this.Ff=ar(this.Ff,21):this.Ff=sr(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,23)},set:function(t){t?this.Ff=ar(this.Ff,23):this.Ff=sr(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,24)},set:function(t){t?this.Ff=ar(this.Ff,24):this.Ff=sr(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,25)},set:function(t){t?this.Ff=ar(this.Ff,25):this.Ff=sr(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,26)},set:function(t){t?this.Ff=ar(this.Ff,26):this.Ff=sr(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};Yr(bo,Tn);var Ys=function(){bo.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!or(this.Ff,14)},set:function(e){e?this.Ff=ar(this.Ff,14):this.Ff=sr(this.Ff,14)}}),this.password=!0};Yr(Ys,bo);var Fe={CheckBox:{createAppearanceStream:function(){return{N:{On:Fe.CheckBox.YesNormal},D:{On:Fe.CheckBox.YesPushDown,Off:Fe.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=qn(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,o=e.scope.__private__.encodeColorString(e.color),a=Ac(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+ut(Fe.internal.getWidth(e))+" "+ut(Fe.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+ut(a.fontSize)+" Tf "+o),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=qn(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),o=[],a=Fe.internal.getHeight(e),c=Fe.internal.getWidth(e),l=Ac(e,e.caption);return o.push("1 g"),o.push("0 0 "+ut(c)+" "+ut(a)+" re"),o.push("f"),o.push("q"),o.push("0 0 1 rg"),o.push("0 0 "+ut(c-1)+" "+ut(a-1)+" re"),o.push("W"),o.push("n"),o.push("0 g"),o.push("BT"),o.push("/"+r+" "+ut(l.fontSize)+" Tf "+n),o.push(l.text),o.push("ET"),o.push("Q"),t.stream=o.join(`
`),t},OffPushDown:function(e){var t=qn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ut(Fe.internal.getWidth(e))+" "+ut(Fe.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:Fe.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=Fe.RadioButton.Circle.YesNormal,t.D[e]=Fe.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=qn(e);t.scope=e.scope;var r=[],n=Fe.internal.getWidth(e)<=Fe.internal.getHeight(e)?Fe.internal.getWidth(e)/4:Fe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Fe.internal.Bezier_C,a=Number((n*o).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+Ui(Fe.internal.getWidth(e)/2)+" "+Ui(Fe.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=qn(e);t.scope=e.scope;var r=[],n=Fe.internal.getWidth(e)<=Fe.internal.getHeight(e)?Fe.internal.getWidth(e)/4:Fe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Fe.internal.Bezier_C).toFixed(5)),c=Number((n*Fe.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Ui(Fe.internal.getWidth(e)/2)+" "+Ui(Fe.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+Ui(Fe.internal.getWidth(e)/2)+" "+Ui(Fe.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+c+" "+c+" "+n+" 0 "+n+" c"),r.push("-"+c+" "+n+" -"+n+" "+c+" -"+n+" 0 c"),r.push("-"+n+" -"+c+" -"+c+" -"+n+" 0 -"+n+" c"),r.push(c+" -"+n+" "+n+" -"+c+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=qn(e);t.scope=e.scope;var r=[],n=Fe.internal.getWidth(e)<=Fe.internal.getHeight(e)?Fe.internal.getWidth(e)/4:Fe.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*Fe.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+Ui(Fe.internal.getWidth(e)/2)+" "+Ui(Fe.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:Fe.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=Fe.RadioButton.Cross.YesNormal,t.D[e]=Fe.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=qn(e);t.scope=e.scope;var r=[],n=Fe.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+ut(Fe.internal.getWidth(e)-2)+" "+ut(Fe.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(ut(n.x1.x)+" "+ut(n.x1.y)+" m"),r.push(ut(n.x2.x)+" "+ut(n.x2.y)+" l"),r.push(ut(n.x4.x)+" "+ut(n.x4.y)+" m"),r.push(ut(n.x3.x)+" "+ut(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=qn(e);t.scope=e.scope;var r=Fe.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+ut(Fe.internal.getWidth(e))+" "+ut(Fe.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+ut(Fe.internal.getWidth(e)-2)+" "+ut(Fe.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(ut(r.x1.x)+" "+ut(r.x1.y)+" m"),n.push(ut(r.x2.x)+" "+ut(r.x2.y)+" l"),n.push(ut(r.x4.x)+" "+ut(r.x4.y)+" m"),n.push(ut(r.x3.x)+" "+ut(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=qn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ut(Fe.internal.getWidth(e))+" "+ut(Fe.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};Fe.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=Fe.internal.getWidth(e),r=Fe.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},Fe.internal.getWidth=function(e){var t=0;return Pt(e)==="object"&&(t=eh(e.Rect[2])),t},Fe.internal.getHeight=function(e){var t=0;return Pt(e)==="object"&&(t=eh(e.Rect[3])),t};var fv=Kt.addField=function(e){if(hv(this,e),!(e instanceof Tn))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};Kt.AcroFormChoiceField=Xo,Kt.AcroFormListBox=Zo,Kt.AcroFormComboBox=Jo,Kt.AcroFormEditBox=Vs,Kt.AcroFormButton=wr,Kt.AcroFormPushButton=Ws,Kt.AcroFormRadioButton=Qo,Kt.AcroFormCheckBox=Gs,Kt.AcroFormTextField=bo,Kt.AcroFormPasswordField=Ys,Kt.AcroFormAppearance=Fe,Kt.AcroForm={ChoiceField:Xo,ListBox:Zo,ComboBox:Jo,EditBox:Vs,Button:wr,PushButton:Ws,RadioButton:Qo,CheckBox:Gs,TextField:bo,PasswordField:Ys,Appearance:Fe},Ye.AcroForm={ChoiceField:Xo,ListBox:Zo,ComboBox:Jo,EditBox:Vs,Button:wr,PushButton:Ws,RadioButton:Qo,CheckBox:Gs,TextField:bo,PasswordField:Ys,Appearance:Fe};Ye.AcroForm;function m2(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},o=e.__addimage__.getImageFileTypeByImageData=function(E,F){var G,$,oe,ce,de,ee=r;if((F=F||r)==="RGBA"||E.data!==void 0&&E.data instanceof Uint8ClampedArray&&"height"in E&&"width"in E)return"RGBA";if(K(E))for(de in n)for(oe=n[de],G=0;G<oe.length;G+=1){for(ce=!0,$=0;$<oe[G].length;$+=1)if(oe[G][$]!==void 0&&oe[G][$]!==E[$]){ce=!1;break}if(ce===!0){ee=de;break}}else for(de in n)for(oe=n[de],G=0;G<oe.length;G+=1){for(ce=!0,$=0;$<oe[G].length;$+=1)if(oe[G][$]!==void 0&&oe[G][$]!==E.charCodeAt($)){ce=!1;break}if(ce===!0){ee=de;break}}return ee===r&&F!==r&&(ee=F),ee},a=function E(F){for(var G=this.internal.write,$=this.internal.putStream,oe=(0,this.internal.getFilters)();oe.indexOf("FlateEncode")!==-1;)oe.splice(oe.indexOf("FlateEncode"),1);F.objectId=this.internal.newObject();var ce=[];if(ce.push({key:"Type",value:"/XObject"}),ce.push({key:"Subtype",value:"/Image"}),ce.push({key:"Width",value:F.width}),ce.push({key:"Height",value:F.height}),F.colorSpace===y.INDEXED?ce.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(F.palette.length/3-1)+" "+("sMask"in F&&F.sMask!==void 0?F.objectId+2:F.objectId+1)+" 0 R]"}):(ce.push({key:"ColorSpace",value:"/"+F.colorSpace}),F.colorSpace===y.DEVICE_CMYK&&ce.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),ce.push({key:"BitsPerComponent",value:F.bitsPerComponent}),"decodeParameters"in F&&F.decodeParameters!==void 0&&ce.push({key:"DecodeParms",value:"<<"+F.decodeParameters+">>"}),"transparency"in F&&Array.isArray(F.transparency)&&F.transparency.length>0){for(var de="",ee=0,se=F.transparency.length;ee<se;ee++)de+=F.transparency[ee]+" "+F.transparency[ee]+" ";ce.push({key:"Mask",value:"["+de+"]"})}F.sMask!==void 0&&ce.push({key:"SMask",value:F.objectId+1+" 0 R"});var Ce=F.filter!==void 0?["/"+F.filter]:void 0;if($({data:F.data,additionalKeyValues:ce,alreadyAppliedFilters:Ce,objectId:F.objectId}),G("endobj"),"sMask"in F&&F.sMask!==void 0){var be,L=(be=F.sMaskBitsPerComponent)!==null&&be!==void 0?be:F.bitsPerComponent,H={width:F.width,height:F.height,colorSpace:"DeviceGray",bitsPerComponent:L,data:F.sMask};"filter"in F&&(H.decodeParameters="/Predictor ".concat(F.predictor," /Colors 1 /BitsPerComponent ").concat(L," /Columns ").concat(F.width),H.filter=F.filter),E.call(this,H)}if(F.colorSpace===y.INDEXED){var V=this.internal.newObject();$({data:X(new Uint8Array(F.palette)),objectId:V}),G("endobj")}},c=function(){var E=this.internal.collections[t+"images"];for(var F in E)a.call(this,E[F])},l=function(){var E,F=this.internal.collections[t+"images"],G=this.internal.write;for(var $ in F)G("/I"+(E=F[$]).index,E.objectId,"0","R")},h=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",c),this.internal.events.subscribe("putXobjectDict",l))},f=function(){var E=this.internal.collections[t+"images"];return h.call(this),E},p=function(){return Object.keys(this.internal.collections[t+"images"]).length},w=function(E){return typeof e["process"+E.toUpperCase()]=="function"},S=function(E){return Pt(E)==="object"&&E.nodeType===1},d=function(E,F){if(E.nodeName==="IMG"&&E.hasAttribute("src")){var G=""+E.getAttribute("src");if(G.indexOf("data:image/")===0)return $s(unescape(G).split("base64,").pop());var $=e.loadFile(G,!0);if($!==void 0)return $}if(E.nodeName==="CANVAS"){if(E.width===0||E.height===0)throw new Error("Given canvas must have data. Canvas width: "+E.width+", height: "+E.height);var oe;switch(F){case"PNG":oe="image/png";break;case"WEBP":oe="image/webp";break;default:oe="image/jpeg"}return $s(E.toDataURL(oe,1).split("base64,").pop())}},b=function(E){var F=this.internal.collections[t+"images"];if(F){for(var G in F)if(E===F[G].alias)return F[G]}},_=function(E,F,G){return E||F||(E=-96,F=-96),E<0&&(E=-1*G.width*72/E/this.internal.scaleFactor),F<0&&(F=-1*G.height*72/F/this.internal.scaleFactor),E===0&&(E=F*G.width/G.height),F===0&&(F=E*G.height/G.width),[E,F]},k=function(E,F,G,$,oe,ce){var de=_.call(this,G,$,oe),ee=this.internal.getCoordinateString,se=this.internal.getVerticalCoordinateString,Ce=f.call(this);if(G=de[0],$=de[1],Ce[oe.index]=oe,ce){ce*=Math.PI/180;var be=Math.cos(ce),L=Math.sin(ce),H=function(Q){return Q.toFixed(4)},V=[H(be),H(L),H(-1*L),H(be),0,0,"cm"]}this.internal.write("q"),ce?(this.internal.write([1,"0","0",1,ee(E),se(F+$),"cm"].join(" ")),this.internal.write(V.join(" ")),this.internal.write([ee(G),"0","0",ee($),"0","0","cm"].join(" "))):this.internal.write([ee(G),"0","0",ee($),ee(E),se(F+$),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+oe.index+" Do"),this.internal.write("Q")},y=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var R=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},P=e.__addimage__.sHashCode=function(E){var F,G,$=0;if(typeof E=="string")for(G=E.length,F=0;F<G;F++)$=($<<5)-$+E.charCodeAt(F),$|=0;else if(K(E))for(G=E.byteLength/2,F=0;F<G;F++)$=($<<5)-$+E[F],$|=0;return $},T=e.__addimage__.validateStringAsBase64=function(E){(E=E||"").toString().trim();var F=!0;return E.length===0&&(F=!1),E.length%4!=0&&(F=!1),/^[A-Za-z0-9+/]+$/.test(E.substr(0,E.length-2))===!1&&(F=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(E.substr(-2))===!1&&(F=!1),F},Y=e.__addimage__.extractImageFromDataUrl=function(E){if(E==null||!(E=E.trim()).startsWith("data:"))return null;var F=E.indexOf(",");return F<0?null:E.substring(0,F).trim().endsWith("base64")?E.substring(F+1):null};e.__addimage__.isArrayBuffer=function(E){return E instanceof ArrayBuffer};var K=e.__addimage__.isArrayBufferView=function(E){return E instanceof Int8Array||E instanceof Uint8Array||E instanceof Uint8ClampedArray||E instanceof Int16Array||E instanceof Uint16Array||E instanceof Int32Array||E instanceof Uint32Array||E instanceof Float32Array||E instanceof Float64Array},ne=e.__addimage__.binaryStringToUint8Array=function(E){for(var F=E.length,G=new Uint8Array(F),$=0;$<F;$++)G[$]=E.charCodeAt($);return G},X=e.__addimage__.arrayBufferToBinaryString=function(E){for(var F="",G=K(E)?E:new Uint8Array(E),$=0;$<G.length;$+=8192)F+=String.fromCharCode.apply(null,G.subarray($,$+8192));return F};e.addImage=function(){var E,F,G,$,oe,ce,de,ee,se;if(typeof arguments[1]=="number"?(F=r,G=arguments[1],$=arguments[2],oe=arguments[3],ce=arguments[4],de=arguments[5],ee=arguments[6],se=arguments[7]):(F=arguments[1],G=arguments[2],$=arguments[3],oe=arguments[4],ce=arguments[5],de=arguments[6],ee=arguments[7],se=arguments[8]),Pt(E=arguments[0])==="object"&&!S(E)&&"imageData"in E){var Ce=E;E=Ce.imageData,F=Ce.format||F||r,G=Ce.x||G||0,$=Ce.y||$||0,oe=Ce.w||Ce.width||oe,ce=Ce.h||Ce.height||ce,de=Ce.alias||de,ee=Ce.compression||ee,se=Ce.rotation||Ce.angle||se}var be=this.internal.getFilters();if(ee===void 0&&be.indexOf("FlateEncode")!==-1&&(ee="SLOW"),isNaN(G)||isNaN($))throw new Error("Invalid coordinates passed to jsPDF.addImage");h.call(this);var L=M.call(this,E,F,de,ee);return k.call(this,G,$,oe,ce,L,se),this};var M=function(E,F,G,$){var oe,ce,de;if(typeof E=="string"&&o(E)===r){E=unescape(E);var ee=J(E,!1);(ee!==""||(ee=e.loadFile(E,!0))!==void 0)&&(E=ee)}if(S(E)&&(E=d(E,F)),F=o(E,F),!w(F))throw new Error("addImage does not support files of type '"+F+"', please ensure that a plugin for '"+F+"' support is added.");if(((de=G)==null||de.length===0)&&(G=function(se){return typeof se=="string"||K(se)?P(se):K(se.data)?P(se.data):null}(E)),(oe=b.call(this,G))||(E instanceof Uint8Array||F==="RGBA"||(ce=E,E=ne(E)),oe=this["process"+F.toUpperCase()](E,p.call(this),G,function(se){return se&&typeof se=="string"&&(se=se.toUpperCase()),se in e.image_compression?se:R.NONE}($),ce)),!oe)throw new Error("An unknown error occurred whilst processing the image.");return oe},J=e.__addimage__.convertBase64ToBinaryString=function(E,F){F=typeof F!="boolean"||F;var G,$="";if(typeof E=="string"){var oe;G=(oe=Y(E))!==null&&oe!==void 0?oe:E;try{$=$s(G)}catch(ce){if(F)throw T(G)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+ce.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return $};e.getImageProperties=function(E){var F,G,$="";if(S(E)&&(E=d(E)),typeof E=="string"&&o(E)===r&&(($=J(E,!1))===""&&($=e.loadFile(E)||""),E=$),G=o(E),!w(G))throw new Error("addImage does not support files of type '"+G+"', please ensure that a plugin for '"+G+"' support is added.");if(E instanceof Uint8Array||(E=ne(E)),!(F=this["process"+G.toUpperCase()](E)))throw new Error("An unknown error occurred whilst processing the image");return F.fileType=G,F}})(Ye.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};Ye.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,o,a,c=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString,h=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,p=!1,w=0;w<f.length&&!p;w++)switch((n=f[w]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(p=!0);break;case"reference":case"text":case"freetext":p=!0}if(p!=0){this.internal.write("/Annots [");for(var S=0;S<f.length;S++){n=f[S];var d=this.internal.pdfEscape,b=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var _=this.internal.newAdditionalObject(),k=this.internal.newAdditionalObject(),y=this.internal.getEncryptor(_.objId),R=n.title||"Note";a="<</Type /Annot /Subtype /Text "+(o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y)+"] ")+"/Contents ("+d(y(n.contents))+")",a+=" /Popup "+k.objId+" 0 R",a+=" /P "+h.objId+" 0 R",a+=" /T ("+d(y(R))+") >>",_.content=a;var P=_.objId+" 0 R";a="<</Type /Annot /Subtype /Popup "+(o="/Rect ["+c(n.bounds.x+30)+" "+l(n.bounds.y+n.bounds.h)+" "+c(n.bounds.x+n.bounds.w+30)+" "+l(n.bounds.y)+"] ")+" /Parent "+P,n.open&&(a+=" /Open true"),a+=" >>",k.content=a,this.internal.write(_.objId,"0 R",k.objId,"0 R");break;case"freetext":o="/Rect ["+c(n.bounds.x)+" "+l(n.bounds.y)+" "+c(n.bounds.x+n.bounds.w)+" "+l(n.bounds.y+n.bounds.h)+"] ";var T=n.color||"#000000";a="<</Type /Annot /Subtype /FreeText "+o+"/Contents ("+d(b(n.contents))+")",a+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+T+")",a+=" /Border [0 0 0]",a+=" >>",this.internal.write(a);break;case"link":if(n.options.name){var Y=this.annotations._nameMap[n.options.name];n.options.pageNumber=Y.page,n.options.top=Y.y}else n.options.top||(n.options.top=0);if(o="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",a="",n.options.url)a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /A <</S /URI /URI ("+d(b(n.options.url))+") >>";else if(n.options.pageNumber)switch(a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":a+=" /Fit]";break;case"FitH":a+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,a+=" /FitV "+n.options.left+"]";break;default:var K=l(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),a+=" /XYZ "+n.options.left+" "+K+" "+n.options.zoom+"]"}a!=""&&(a+=" >>",this.internal.write(a))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,o,a,c){var l=this.internal.getCurrentPageInfo(),h=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;l.pageContext.annotations.push({finalBounds:{x:h(r),y:f(n),w:h(r+o),h:f(n+a)},options:c,type:"link"})},e.textWithLink=function(r,n,o,a){var c,l,h=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(a.maxWidth!==void 0){l=a.maxWidth;var p=this.splitTextToSize(r,l).length;c=Math.ceil(f*p)}else l=h,c=f;return this.text(r,n,o,a),o+=.2*f,a.align==="center"&&(n-=h/2),a.align==="right"&&(n-=h),this.link(n,o-f,l,c,a),h},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(Ye.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},o=[1570,1571,1573,1575];e.__arabicParser__={};var a=e.__arabicParser__.isInArabicSubstitutionA=function(_){return t[_.charCodeAt(0)]!==void 0},c=e.__arabicParser__.isArabicLetter=function(_){return typeof _=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(_)},l=e.__arabicParser__.isArabicEndLetter=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length<=2},h=e.__arabicParser__.isArabicAlfLetter=function(_){return c(_)&&o.indexOf(_.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length>=3};var p=e.__arabicParser__.arabicLetterHasMedialForm=function(_){return c(_)&&a(_)&&t[_.charCodeAt(0)].length==4},w=e.__arabicParser__.resolveLigatures=function(_){var k=0,y=r,R="",P=0;for(k=0;k<_.length;k+=1)y[_.charCodeAt(k)]!==void 0?(P++,typeof(y=y[_.charCodeAt(k)])=="number"&&(R+=String.fromCharCode(y),y=r,P=0),k===_.length-1&&(y=r,R+=_.charAt(k-(P-1)),k-=P-1,P=0)):(y=r,R+=_.charAt(k-P),k-=P,P=0);return R};e.__arabicParser__.isArabicDiacritic=function(_){return _!==void 0&&n[_.charCodeAt(0)]!==void 0};var S=e.__arabicParser__.getCorrectForm=function(_,k,y){return c(_)?a(_)===!1?-1:!f(_)||!c(k)&&!c(y)||!c(y)&&l(k)||l(_)&&!c(k)||l(_)&&h(k)||l(_)&&l(k)?0:p(_)&&c(k)&&!l(k)&&c(y)&&f(y)?3:l(_)||!c(y)?1:2:-1},d=function(_){var k=0,y=0,R=0,P="",T="",Y="",K=(_=_||"").split("\\s+"),ne=[];for(k=0;k<K.length;k+=1){for(ne.push(""),y=0;y<K[k].length;y+=1)P=K[k][y],T=K[k][y-1],Y=K[k][y+1],c(P)?(R=S(P,T,Y),ne[k]+=R!==-1?String.fromCharCode(t[P.charCodeAt(0)][R]):P):ne[k]+=P;ne[k]=w(ne[k])}return ne.join(" ")},b=e.__arabicParser__.processArabic=e.processArabic=function(){var _,k=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,y=[];if(Array.isArray(k)){var R=0;for(y=[],R=0;R<k.length;R+=1)Array.isArray(k[R])?y.push([d(k[R][0]),k[R][1],k[R][2]]):y.push([d(k[R])]);_=y}else _=d(k);return typeof arguments[0]=="string"?_:(arguments[0].text=_,arguments[0])};e.events.push(["preProcessText",b])}(Ye.API),Ye.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(l){r=l}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(l){n=isNaN(l)||Number.isInteger(l)===!1||l<0?150:l,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var o=300;Object.defineProperty(this,"height",{get:function(){return o},set:function(l){o=isNaN(l)||Number.isInteger(l)===!1||l<0?300:l,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=o+1)}});var a=[];Object.defineProperty(this,"childNodes",{get:function(){return a},set:function(l){a=l}});var c={};Object.defineProperty(this,"style",{get:function(){return c},set:function(l){c=l}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var o;if((r=r||"2d")!=="2d")return null;for(o in n)this.pdf.context2d.hasOwnProperty(o)&&(this.pdf.context2d[o]=n[o]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Ye.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),o.call(this))},o=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var h=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return h},set:function(_){h=_}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(_){f=_}});var p=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return p},set:function(_){p=_}});var w=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return w},set:function(_){w=_}});var S=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return S},set:function(_){S=_}});var d=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return d},set:function(_){d=_}});var b=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return b},set:function(_){b=_}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(h){return n.call(this),this.internal.__cell__.headerFunction=typeof h=="function"?h:void 0,this},e.getTextDimensions=function(h,f){n.call(this);var p=(f=f||{}).fontSize||this.getFontSize(),w=f.font||this.getFont(),S=f.scaleFactor||this.internal.scaleFactor,d=0,b=0,_=0,k=this;if(!Array.isArray(h)&&typeof h!="string"){if(typeof h!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");h=String(h)}var y=f.maxWidth;y>0?typeof h=="string"?h=this.splitTextToSize(h,y):Object.prototype.toString.call(h)==="[object Array]"&&(h=h.reduce(function(P,T){return P.concat(k.splitTextToSize(T,y))},[])):h=Array.isArray(h)?h:[h];for(var R=0;R<h.length;R++)d<(_=this.getStringUnitWidth(h[R],{font:w})*p)&&(d=_);return d!==0&&(b=h.length),{w:d/=S,h:Math.max((b*p*this.getLineHeightFactor()-p*(this.getLineHeightFactor()-1))/S,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var h=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new a(h.left,h.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var c=e.cell=function(){var h;h=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,p=this.internal.__cell__.padding,w=this.internal.__cell__.margins||t,S=this.internal.__cell__.tableHeaderRow,d=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===h.lineNumber?(h.x=(f.x||0)+(f.width||0),h.y=f.y||0):f.y+f.height+h.height+w.bottom>this.getPageHeight()?(this.cellAddPage(),h.y=w.top,d&&S&&(this.printHeaderRow(h.lineNumber,!0),h.y+=S[0].height)):h.y=f.y+f.height||h.y),h.text[0]!==void 0&&(this.rect(h.x,h.y,h.width,h.height,r===!0?"FD":void 0),h.align==="right"?this.text(h.text,h.x+h.width-p,h.y+p,{align:"right",baseline:"top"}):h.align==="center"?this.text(h.text,h.x+h.width/2,h.y+p,{align:"center",baseline:"top",maxWidth:h.width-p-p}):this.text(h.text,h.x+p,h.y+p,{align:"left",baseline:"top",maxWidth:h.width-p-p})),this.internal.__cell__.lastCell=h,this};e.table=function(h,f,p,w,S){if(n.call(this),!p)throw new Error("No data for PDF table.");var d,b,_,k,y=[],R=[],P=[],T={},Y={},K=[],ne=[],X=(S=S||{}).autoSize||!1,M=S.printHeaders!==!1,J=S.css&&S.css["font-size"]!==void 0?16*S.css["font-size"]:S.fontSize||12,E=S.margins||Object.assign({width:this.getPageWidth()},t),F=typeof S.padding=="number"?S.padding:3,G=S.headerBackgroundColor||"#c8c8c8",$=S.headerTextColor||"#000";if(o.call(this),this.internal.__cell__.printHeaders=M,this.internal.__cell__.margins=E,this.internal.__cell__.table_font_size=J,this.internal.__cell__.padding=F,this.internal.__cell__.headerBackgroundColor=G,this.internal.__cell__.headerTextColor=$,this.setFontSize(J),w==null)R=y=Object.keys(p[0]),P=y.map(function(){return"left"});else if(Array.isArray(w)&&Pt(w[0])==="object")for(y=w.map(function(Ce){return Ce.name}),R=w.map(function(Ce){return Ce.prompt||Ce.name||""}),P=w.map(function(Ce){return Ce.align||"left"}),d=0;d<w.length;d+=1)Y[w[d].name]=.7499990551181103*w[d].width;else Array.isArray(w)&&typeof w[0]=="string"&&(R=y=w,P=y.map(function(){return"left"}));if(X||Array.isArray(w)&&typeof w[0]=="string")for(d=0;d<y.length;d+=1){for(T[k=y[d]]=p.map(function(Ce){return Ce[k]}),this.setFont(void 0,"bold"),K.push(this.getTextDimensions(R[d],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),b=T[k],this.setFont(void 0,"normal"),_=0;_<b.length;_+=1)K.push(this.getTextDimensions(b[_],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);Y[k]=Math.max.apply(null,K)+F+F,K=[]}if(M){var oe={};for(d=0;d<y.length;d+=1)oe[y[d]]={},oe[y[d]].text=R[d],oe[y[d]].align=P[d];var ce=l.call(this,oe,Y);ne=y.map(function(Ce){return new a(h,f,Y[Ce],ce,oe[Ce].text,void 0,oe[Ce].align)}),this.setTableHeaderRow(ne),this.printHeaderRow(1,!1)}var de=w.reduce(function(Ce,be){return Ce[be.name]=be.align,Ce},{});for(d=0;d<p.length;d+=1){"rowStart"in S&&S.rowStart instanceof Function&&S.rowStart({row:d,data:p[d]},this);var ee=l.call(this,p[d],Y);for(_=0;_<y.length;_+=1){var se=p[d][y[_]];"cellStart"in S&&S.cellStart instanceof Function&&S.cellStart({row:d,col:_,data:se},this),c.call(this,new a(h,f,Y[y[_]],ee,se,d+2,de[y[_]]))}}return this.internal.__cell__.table_x=h,this.internal.__cell__.table_y=f,this};var l=function(h,f){var p=this.internal.__cell__.padding,w=this.internal.__cell__.table_font_size,S=this.internal.scaleFactor;return Object.keys(h).map(function(d){var b=h[d];return this.splitTextToSize(b.hasOwnProperty("text")?b.text:b,f[d]-p-p)},this).map(function(d){return this.getLineHeightFactor()*d.length*w/S+p+p},this).reduce(function(d,b){return Math.max(d,b)},0)};e.setTableHeaderRow=function(h){n.call(this),this.internal.__cell__.tableHeaderRow=h},e.printHeaderRow=function(h,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var p;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var w=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(w[0],w[1],w[2],w[3],void 0,-1)}this.setFont(void 0,"bold");for(var S=[],d=0;d<this.internal.__cell__.tableHeaderRow.length;d+=1){p=this.internal.__cell__.tableHeaderRow[d].clone(),f&&(p.y=this.internal.__cell__.margins.top||0,S.push(p)),p.lineNumber=h;var b=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),c.call(this,p),this.setTextColor(b)}S.length>0&&this.setTableHeaderRow(S),this.setFont(void 0,"normal"),r=!1}}(Ye.API);var g2={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},v2=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],kc=m2(v2),b2=[100,200,300,400,500,600,700,800,900],dv=m2(b2);function ec(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(a){return g2[a=a||"normal"]?a:"normal"}(e.style),n=function(a){return a?typeof a=="number"?a>=100&&a<=900&&a%100==0?a:400:/^\d00$/.test(a)?parseInt(a):a==="bold"?700:400:400}(e.weight),o=function(a){return typeof kc[a=a||"normal"]=="number"?a:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:o,src:e.src||[],ref:e.ref||{name:t,style:[o,r,n].join(" ")}}}function th(e,t,r,n){var o;for(o=r;o>=0&&o<t.length;o+=n)if(e[t[o]])return e[t[o]];for(o=r;o>=0&&o<t.length;o-=n)if(e[t[o]])return e[t[o]]}var pv={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},rh={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function nh(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function ih(e){return e.trimLeft()}function mv(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function gv(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var Fs,oh,ah,Vo,Ds,sh,lh,ch,tc=["times"];function uh(e,t,r,n,o){var a=4,c=fh;switch(o){case Ye.API.image_compression.FAST:a=1,c=hh;break;case Ye.API.image_compression.MEDIUM:a=6,c=dh;break;case Ye.API.image_compression.SLOW:a=9,c=ph}e=function(h,f,p,w){for(var S,d=h.length/f,b=new Uint8Array(h.length+d),_=[vv,hh,fh,dh,ph],k=0;k<d;k+=1){var y=k*f,R=h.subarray(y,y+f);if(w)b.set(w(R,p,S),y+k);else{for(var P=_.length,T=[],Y=0;Y<P;Y+=1)T[Y]=_[Y](R,p,S);var K=xv(T.concat());b.set(T[K],y+k)}S=R}return b}(e,t,Math.ceil(r*n/8),c);var l=xc(e,{level:a});return Ye.API.__addimage__.arrayBufferToBinaryString(l)}function vv(e){var t=Array.apply([],e);return t.unshift(0),t}function hh(e,t){var r=e.length,n=[];n[0]=1;for(var o=0;o<r;o+=1){var a=e[o-t]||0;n[o+1]=e[o]-a+256&255}return n}function fh(e,t,r){var n=e.length,o=[];o[0]=2;for(var a=0;a<n;a+=1){var c=r&&r[a]||0;o[a+1]=e[a]-c+256&255}return o}function dh(e,t,r){var n=e.length,o=[];o[0]=3;for(var a=0;a<n;a+=1){var c=e[a-t]||0,l=r&&r[a]||0;o[a+1]=e[a]+256-(c+l>>>1)&255}return o}function ph(e,t,r){var n=e.length,o=[];o[0]=4;for(var a=0;a<n;a+=1){var c=bv(e[a-t]||0,r&&r[a]||0,r&&r[a-t]||0);o[a+1]=e[a]-c+256&255}return o}function bv(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),o=Math.abs(e-r),a=Math.abs(e+t-r-r);return n<=o&&n<=a?e:o<=a?t:r}function xv(e){var t=e.map(function(r){return r.reduce(function(n,o){return n+Math.abs(o)},0)});return t.indexOf(Math.min.apply(null,t))}function rc(e,t,r){var n=t*r,o=Math.floor(n/8),a=16-(n-8*o+r),c=(1<<r)-1;return x2(e,o)>>a&c}function mh(e,t,r,n){var o=r*n,a=Math.floor(o/8),c=16-(o-8*a+n),l=(1<<n)-1,h=(t&l)<<c;(function(f,p,w){if(p+1<f.byteLength)f.setUint16(p,w,!1);else{var S=w>>8&255;f.setUint8(p,S)}})(e,a,x2(e,a)&~(l<<c)&65535|h)}function x2(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function wv(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,o=e[t++],a=o>>7,c=1<<1+(7&o);e[t++],e[t++];var l=null,h=null;a&&(l=t,h=c,t+=3*c);var f=!0,p=[],w=0,S=null,d=0,b=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,b=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((E=e[t++])>=0))throw Error("Invalid block size");if(E===0)break;t+=E}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var _=e[t++];w=e[t++]|e[t++]<<8,S=e[t++],1&_||(S=null),d=_>>2&7,t++;break;case 254:for(;;){if(!((E=e[t++])>=0))throw Error("Invalid block size");if(E===0)break;t+=E}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var k=e[t++]|e[t++]<<8,y=e[t++]|e[t++]<<8,R=e[t++]|e[t++]<<8,P=e[t++]|e[t++]<<8,T=e[t++],Y=T>>6&1,K=1<<1+(7&T),ne=l,X=h,M=!1;T>>7&&(M=!0,ne=t,X=K,t+=3*K);var J=t;for(t++;;){var E;if(!((E=e[t++])>=0))throw Error("Invalid block size");if(E===0)break;t+=E}p.push({x:k,y,width:R,height:P,has_local_palette:M,palette_offset:ne,palette_size:X,data_offset:J,data_length:t-J,transparent_index:S,interlaced:!!Y,delay:w,disposal:d});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return p.length},this.loopCount=function(){return b},this.frameInfo=function(F){if(F<0||F>=p.length)throw new Error("Frame index out of range.");return p[F]},this.decodeAndBlitFrameBGRA=function(F,G){var $=this.frameInfo(F),oe=$.width*$.height,ce=new Uint8Array(oe);gh(e,$.data_offset,ce,oe);var de=$.palette_offset,ee=$.transparent_index;ee===null&&(ee=256);var se=$.width,Ce=r-se,be=se,L=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),V=L,Q=4*Ce;$.interlaced===!0&&(Q+=4*r*7);for(var re=8,ue=0,ge=ce.length;ue<ge;++ue){var pe=ce[ue];if(be===0&&(be=se,(V+=Q)>=H&&(Q=4*Ce+4*r*(re-1),V=L+(se+Ce)*(re<<1),re>>=1)),pe===ee)V+=4;else{var xe=e[de+3*pe],Ae=e[de+3*pe+1],Ie=e[de+3*pe+2];G[V++]=Ie,G[V++]=Ae,G[V++]=xe,G[V++]=255}--be}},this.decodeAndBlitFrameRGBA=function(F,G){var $=this.frameInfo(F),oe=$.width*$.height,ce=new Uint8Array(oe);gh(e,$.data_offset,ce,oe);var de=$.palette_offset,ee=$.transparent_index;ee===null&&(ee=256);var se=$.width,Ce=r-se,be=se,L=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),V=L,Q=4*Ce;$.interlaced===!0&&(Q+=4*r*7);for(var re=8,ue=0,ge=ce.length;ue<ge;++ue){var pe=ce[ue];if(be===0&&(be=se,(V+=Q)>=H&&(Q=4*Ce+4*r*(re-1),V=L+(se+Ce)*(re<<1),re>>=1)),pe===ee)V+=4;else{var xe=e[de+3*pe],Ae=e[de+3*pe+1],Ie=e[de+3*pe+2];G[V++]=xe,G[V++]=Ae,G[V++]=Ie,G[V++]=255}--be}}}function gh(e,t,r,n){for(var o=e[t++],a=1<<o,c=a+1,l=c+1,h=o+1,f=(1<<h)-1,p=0,w=0,S=0,d=e[t++],b=new Int32Array(4096),_=null;;){for(;p<16&&d!==0;)w|=e[t++]<<p,p+=8,d===1?d=e[t++]:--d;if(p<h)break;var k=w&f;if(w>>=h,p-=h,k!==a){if(k===c)break;for(var y=k<l?k:_,R=0,P=y;P>a;)P=b[P]>>8,++R;var T=P;if(S+R+(y!==k?1:0)>n)return void Ot.log("Warning, gif stream longer than expected.");r[S++]=T;var Y=S+=R;for(y!==k&&(r[S++]=T),P=y;R--;)P=b[P],r[--Y]=255&P,P>>=8;_!==null&&l<4096&&(b[l++]=_<<8|T,l>=f+1&&h<12&&(++h,f=f<<1|1)),_=k}else l=c+1,f=(1<<(h=o+1))-1,_=null}return S!==n&&Ot.log("Warning, gif stream shorter than expected."),r}/**
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
*/function nc(e){var t,r,n,o,a,c=Math.floor,l=new Array(64),h=new Array(64),f=new Array(64),p=new Array(64),w=new Array(65535),S=new Array(65535),d=new Array(64),b=new Array(64),_=[],k=0,y=7,R=new Array(64),P=new Array(64),T=new Array(64),Y=new Array(256),K=new Array(2048),ne=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],X=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],M=[0,1,2,3,4,5,6,7,8,9,10,11],J=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],E=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],F=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],G=[0,1,2,3,4,5,6,7,8,9,10,11],$=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],oe=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function ce(L,H){for(var V=0,Q=0,re=new Array,ue=1;ue<=16;ue++){for(var ge=1;ge<=L[ue];ge++)re[H[Q]]=[],re[H[Q]][0]=V,re[H[Q]][1]=ue,Q++,V++;V*=2}return re}function de(L){for(var H=L[0],V=L[1]-1;V>=0;)H&1<<V&&(k|=1<<y),V--,--y<0&&(k==255?(ee(255),ee(0)):ee(k),y=7,k=0)}function ee(L){_.push(L)}function se(L){ee(L>>8&255),ee(255&L)}function Ce(L,H,V,Q,re){for(var ue,ge=re[0],pe=re[240],xe=function(Ne,Me){var je,nt,De,gt,it,tt,_t,ot,Ve,Je,We=0;for(Ve=0;Ve<8;++Ve){je=Ne[We],nt=Ne[We+1],De=Ne[We+2],gt=Ne[We+3],it=Ne[We+4],tt=Ne[We+5],_t=Ne[We+6];var At=je+(ot=Ne[We+7]),yt=je-ot,Be=nt+_t,at=nt-_t,Lt=De+tt,Xe=De-tt,vt=gt+it,lt=gt-it,Ht=At+vt,Xt=At-vt,Nt=Be+Lt,Qe=Be-Lt;Ne[We]=Ht+Nt,Ne[We+4]=Ht-Nt;var bt=.707106781*(Qe+Xt);Ne[We+2]=Xt+bt,Ne[We+6]=Xt-bt;var Rn=.382683433*((Ht=lt+Xe)-(Qe=at+yt)),dr=.5411961*Ht+Rn,un=1.306562965*Qe+Rn,Xr=.707106781*(Nt=Xe+at),Ze=yt+Xr,hn=yt-Xr;Ne[We+5]=hn+dr,Ne[We+3]=hn-dr,Ne[We+1]=Ze+un,Ne[We+7]=Ze-un,We+=8}for(We=0,Ve=0;Ve<8;++Ve){je=Ne[We],nt=Ne[We+8],De=Ne[We+16],gt=Ne[We+24],it=Ne[We+32],tt=Ne[We+40],_t=Ne[We+48];var fn=je+(ot=Ne[We+56]),jr=je-ot,Rr=nt+_t,qt=nt-_t,er=De+tt,cr=De-tt,Mn=gt+it,On=gt-it,Mr=fn+Mn,Or=fn-Mn,Zr=Rr+er,Jr=Rr-er;Ne[We]=Mr+Zr,Ne[We+32]=Mr-Zr;var Hr=.707106781*(Jr+Or);Ne[We+16]=Or+Hr,Ne[We+48]=Or-Hr;var Xn=.382683433*((Mr=On+cr)-(Jr=qt+jr)),Qr=.5411961*Mr+Xn,Cn=1.306562965*Jr+Xn,xi=.707106781*(Zr=cr+qt),dn=jr+xi,Zn=jr-xi;Ne[We+40]=Zn+Qr,Ne[We+24]=Zn-Qr,Ne[We+8]=dn+Cn,Ne[We+56]=dn-Cn,We++}for(Ve=0;Ve<64;++Ve)Je=Ne[Ve]*Me[Ve],d[Ve]=Je>0?Je+.5|0:Je-.5|0;return d}(L,H),Ae=0;Ae<64;++Ae)b[ne[Ae]]=xe[Ae];var Ie=b[0]-V;V=b[0],Ie==0?de(Q[0]):(de(Q[S[ue=32767+Ie]]),de(w[ue]));for(var Te=63;Te>0&&b[Te]==0;)Te--;if(Te==0)return de(ge),V;for(var ve,W=1;W<=Te;){for(var ft=W;b[W]==0&&W<=Te;)++W;var Ke=W-ft;if(Ke>=16){ve=Ke>>4;for(var qe=1;qe<=ve;++qe)de(pe);Ke&=15}ue=32767+b[W],de(re[(Ke<<4)+S[ue]]),de(w[ue]),W++}return Te!=63&&de(ge),V}function be(L){L=Math.min(Math.max(L,1),100),a!=L&&(function(H){for(var V=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],Q=0;Q<64;Q++){var re=c((V[Q]*H+50)/100);re=Math.min(Math.max(re,1),255),l[ne[Q]]=re}for(var ue=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],ge=0;ge<64;ge++){var pe=c((ue[ge]*H+50)/100);pe=Math.min(Math.max(pe,1),255),h[ne[ge]]=pe}for(var xe=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Ae=0,Ie=0;Ie<8;Ie++)for(var Te=0;Te<8;Te++)f[Ae]=1/(l[ne[Ae]]*xe[Ie]*xe[Te]*8),p[Ae]=1/(h[ne[Ae]]*xe[Ie]*xe[Te]*8),Ae++}(L<50?Math.floor(5e3/L):Math.floor(200-2*L)),a=L)}this.encode=function(L,H){H&&be(H),_=new Array,k=0,y=7,se(65496),se(65504),se(16),ee(74),ee(70),ee(73),ee(70),ee(0),ee(1),ee(1),ee(0),se(1),se(1),ee(0),ee(0),function(){se(65499),se(132),ee(0);for(var nt=0;nt<64;nt++)ee(l[nt]);ee(1);for(var De=0;De<64;De++)ee(h[De])}(),function(nt,De){se(65472),se(17),ee(8),se(De),se(nt),ee(3),ee(1),ee(17),ee(0),ee(2),ee(17),ee(1),ee(3),ee(17),ee(1)}(L.width,L.height),function(){se(65476),se(418),ee(0);for(var nt=0;nt<16;nt++)ee(X[nt+1]);for(var De=0;De<=11;De++)ee(M[De]);ee(16);for(var gt=0;gt<16;gt++)ee(J[gt+1]);for(var it=0;it<=161;it++)ee(E[it]);ee(1);for(var tt=0;tt<16;tt++)ee(F[tt+1]);for(var _t=0;_t<=11;_t++)ee(G[_t]);ee(17);for(var ot=0;ot<16;ot++)ee($[ot+1]);for(var Ve=0;Ve<=161;Ve++)ee(oe[Ve])}(),se(65498),se(12),ee(3),ee(1),ee(0),ee(2),ee(17),ee(3),ee(17),ee(0),ee(63),ee(0);var V=0,Q=0,re=0;k=0,y=7,this.encode.displayName="_encode_";for(var ue,ge,pe,xe,Ae,Ie,Te,ve,W,ft=L.data,Ke=L.width,qe=L.height,Ne=4*Ke,Me=0;Me<qe;){for(ue=0;ue<Ne;){for(Ae=Ne*Me+ue,Te=-1,ve=0,W=0;W<64;W++)Ie=Ae+(ve=W>>3)*Ne+(Te=4*(7&W)),Me+ve>=qe&&(Ie-=Ne*(Me+1+ve-qe)),ue+Te>=Ne&&(Ie-=ue+Te-Ne+4),ge=ft[Ie++],pe=ft[Ie++],xe=ft[Ie++],R[W]=(K[ge]+K[pe+256|0]+K[xe+512|0]>>16)-128,P[W]=(K[ge+768|0]+K[pe+1024|0]+K[xe+1280|0]>>16)-128,T[W]=(K[ge+1280|0]+K[pe+1536|0]+K[xe+1792|0]>>16)-128;V=Ce(R,f,V,t,n),Q=Ce(P,p,Q,r,o),re=Ce(T,p,re,r,o),ue+=32}Me+=8}if(y>=0){var je=[];je[1]=y+1,je[0]=(1<<y+1)-1,de(je)}return se(65497),new Uint8Array(_)},e=e||50,function(){for(var L=String.fromCharCode,H=0;H<256;H++)Y[H]=L(H)}(),t=ce(X,M),r=ce(F,G),n=ce(J,E),o=ce($,oe),function(){for(var L=1,H=2,V=1;V<=15;V++){for(var Q=L;Q<H;Q++)S[32767+Q]=V,w[32767+Q]=[],w[32767+Q][1]=V,w[32767+Q][0]=Q;for(var re=-(H-1);re<=-L;re++)S[32767+re]=V,w[32767+re]=[],w[32767+re][1]=V,w[32767+re][0]=H-1+re;L<<=1,H<<=1}}(),function(){for(var L=0;L<256;L++)K[L]=19595*L,K[L+256|0]=38470*L,K[L+512|0]=7471*L+32768,K[L+768|0]=-11059*L,K[L+1024|0]=-21709*L,K[L+1280|0]=32768*L+8421375,K[L+1536|0]=-27439*L,K[L+1792|0]=-5329*L}(),be(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function En(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function vh(e){function t(M){if(!M)throw Error("assert :P")}function r(M,J,E){for(var F=0;4>F;F++)if(M[J+F]!=E.charCodeAt(F))return!0;return!1}function n(M,J,E,F,G){for(var $=0;$<G;$++)M[J+$]=E[F+$]}function o(M,J,E,F){for(var G=0;G<F;G++)M[J+G]=E}function a(M){return new Int32Array(M)}function c(M,J){for(var E=[],F=0;F<M;F++)E.push(new J);return E}function l(M,J){var E=[];return function F(G,$,oe){for(var ce=oe[$],de=0;de<ce&&(G.push(oe.length>$+1?[]:new J),!(oe.length<$+1));de++)F(G[de],$+1,oe)}(E,0,M),E}var h=function(){var M=this;function J(s,u){for(var g=1<<u-1>>>0;s&g;)g>>>=1;return g?(s&g-1)+g:s}function E(s,u,g,x,A){t(!(x%g));do s[u+(x-=g)]=A;while(0<x)}function F(s,u,g,x,A){if(t(2328>=A),512>=A)var N=a(512);else if((N=a(A))==null)return 0;return function(I,j,D,B,te,fe){var U,ie,le=j,we=1<<D,he=a(16),ye=a(16);for(t(te!=0),t(B!=null),t(I!=null),t(0<D),ie=0;ie<te;++ie){if(15<B[ie])return 0;++he[B[ie]]}if(he[0]==te)return 0;for(ye[1]=0,U=1;15>U;++U){if(he[U]>1<<U)return 0;ye[U+1]=ye[U]+he[U]}for(ie=0;ie<te;++ie)U=B[ie],0<B[ie]&&(fe[ye[U]++]=ie);if(ye[15]==1)return(B=new G).g=0,B.value=fe[0],E(I,le,1,we,B),we;var _e,Ee=-1,ke=we-1,Ge=0,Oe=1,pt=1,Ue=1<<D;for(ie=0,U=1,te=2;U<=D;++U,te<<=1){if(Oe+=pt<<=1,0>(pt-=he[U]))return 0;for(;0<he[U];--he[U])(B=new G).g=U,B.value=fe[ie++],E(I,le+Ge,te,Ue,B),Ge=J(Ge,U)}for(U=D+1,te=2;15>=U;++U,te<<=1){if(Oe+=pt<<=1,0>(pt-=he[U]))return 0;for(;0<he[U];--he[U]){if(B=new G,(Ge&ke)!=Ee){for(le+=Ue,_e=1<<(Ee=U)-D;15>Ee&&!(0>=(_e-=he[Ee]));)++Ee,_e<<=1;we+=Ue=1<<(_e=Ee-D),I[j+(Ee=Ge&ke)].g=_e+D,I[j+Ee].value=le-j-Ee}B.g=U-D,B.value=fe[ie++],E(I,le+(Ge>>D),te,Ue,B),Ge=J(Ge,U)}}return Oe!=2*ye[15]-1?0:we}(s,u,g,x,A,N)}function G(){this.value=this.g=0}function $(){this.value=this.g=0}function oe(){this.G=c(5,G),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=c(uo,$)}function ce(s,u,g,x){t(s!=null),t(u!=null),t(2147483648>x),s.Ca=254,s.I=0,s.b=-8,s.Ka=0,s.oa=u,s.pa=g,s.Jd=u,s.Yc=g+x,s.Zc=4<=x?g+x-4+1:g,ge(s)}function de(s,u){for(var g=0;0<u--;)g|=xe(s,128)<<u;return g}function ee(s,u){var g=de(s,u);return pe(s)?-g:g}function se(s,u,g,x){var A,N=0;for(t(s!=null),t(u!=null),t(4294967288>x),s.Sb=x,s.Ra=0,s.u=0,s.h=0,4<x&&(x=4),A=0;A<x;++A)N+=u[g+A]<<8*A;s.Ra=N,s.bb=x,s.oa=u,s.pa=g}function Ce(s){for(;8<=s.u&&s.bb<s.Sb;)s.Ra>>>=8,s.Ra+=s.oa[s.pa+s.bb]<<Li-8>>>0,++s.bb,s.u-=8;Q(s)&&(s.h=1,s.u=0)}function be(s,u){if(t(0<=u),!s.h&&u<=en){var g=V(s)&Kr[u];return s.u+=u,Ce(s),g}return s.h=1,s.u=0}function L(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function H(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function V(s){return s.Ra>>>(s.u&Li-1)>>>0}function Q(s){return t(s.bb<=s.Sb),s.h||s.bb==s.Sb&&s.u>Li}function re(s,u){s.u=u,s.h=Q(s)}function ue(s){s.u>=si&&(t(s.u>=si),Ce(s))}function ge(s){t(s!=null&&s.oa!=null),s.pa<s.Zc?(s.I=(s.oa[s.pa++]|s.I<<8)>>>0,s.b+=8):(t(s!=null&&s.oa!=null),s.pa<s.Yc?(s.b+=8,s.I=s.oa[s.pa++]|s.I<<8):s.Ka?s.b=0:(s.I<<=8,s.b+=8,s.Ka=1))}function pe(s){return de(s,1)}function xe(s,u){var g=s.Ca;0>s.b&&ge(s);var x=s.b,A=g*u>>>8,N=(s.I>>>x>A)+0;for(N?(g-=A,s.I-=A+1<<x>>>0):g=A+1,x=g,A=0;256<=x;)A+=8,x>>=8;return x=7^A+Ni[x],s.b-=x,s.Ca=(g<<x)-1,N}function Ae(s,u,g){s[u+0]=g>>24&255,s[u+1]=g>>16&255,s[u+2]=g>>8&255,s[u+3]=255&g}function Ie(s,u){return s[u+0]|s[u+1]<<8}function Te(s,u){return Ie(s,u)|s[u+2]<<16}function ve(s,u){return Ie(s,u)|Ie(s,u+2)<<16}function W(s,u){var g=1<<u;return t(s!=null),t(0<u),s.X=a(g),s.X==null?0:(s.Mb=32-u,s.Xa=u,1)}function ft(s,u){t(s!=null),t(u!=null),t(s.Xa==u.Xa),n(u.X,0,s.X,0,1<<u.Xa)}function Ke(){this.X=[],this.Xa=this.Mb=0}function qe(s,u,g,x){t(g!=null),t(x!=null);var A=g[0],N=x[0];return A==0&&(A=(s*N+u/2)/u),N==0&&(N=(u*A+s/2)/s),0>=A||0>=N?0:(g[0]=A,x[0]=N,1)}function Ne(s,u){return s+(1<<u)-1>>>u}function Me(s,u){return((4278255360&s)+(4278255360&u)>>>0&4278255360)+((16711935&s)+(16711935&u)>>>0&16711935)>>>0}function je(s,u){M[u]=function(g,x,A,N,I,j,D){var B;for(B=0;B<I;++B){var te=M[s](j[D+B-1],A,N+B);j[D+B]=Me(g[x+B],te)}}}function nt(){this.ud=this.hd=this.jd=0}function De(s,u){return((4278124286&(s^u))>>>1)+(s&u)>>>0}function gt(s){return 0<=s&&256>s?s:0>s?0:255<s?255:void 0}function it(s,u){return gt(s+(s-u+.5>>1))}function tt(s,u,g){return Math.abs(u-g)-Math.abs(s-g)}function _t(s,u,g,x,A,N,I){for(x=N[I-1],g=0;g<A;++g)N[I+g]=x=Me(s[u+g],x)}function ot(s,u,g,x,A){var N;for(N=0;N<g;++N){var I=s[u+N],j=I>>8&255,D=16711935&(D=(D=16711935&I)+((j<<16)+j));x[A+N]=(4278255360&I)+D>>>0}}function Ve(s,u){u.jd=255&s,u.hd=s>>8&255,u.ud=s>>16&255}function Je(s,u,g,x,A,N){var I;for(I=0;I<x;++I){var j=u[g+I],D=j>>>8,B=j,te=255&(te=(te=j>>>16)+((s.jd<<24>>24)*(D<<24>>24)>>>5));B=255&(B=(B+=(s.hd<<24>>24)*(D<<24>>24)>>>5)+((s.ud<<24>>24)*(te<<24>>24)>>>5)),A[N+I]=(4278255360&j)+(te<<16)+B}}function We(s,u,g,x,A){M[u]=function(N,I,j,D,B,te,fe,U,ie){for(D=fe;D<U;++D)for(fe=0;fe<ie;++fe)B[te++]=A(j[x(N[I++])])},M[s]=function(N,I,j,D,B,te,fe){var U=8>>N.b,ie=N.Ea,le=N.K[0],we=N.w;if(8>U)for(N=(1<<N.b)-1,we=(1<<U)-1;I<j;++I){var he,ye=0;for(he=0;he<ie;++he)he&N||(ye=x(D[B++])),te[fe++]=A(le[ye&we]),ye>>=U}else M["VP8LMapColor"+g](D,B,le,we,te,fe,I,j,ie)}}function At(s,u,g,x,A){for(g=u+g;u<g;){var N=s[u++];x[A++]=N>>16&255,x[A++]=N>>8&255,x[A++]=255&N}}function yt(s,u,g,x,A){for(g=u+g;u<g;){var N=s[u++];x[A++]=N>>16&255,x[A++]=N>>8&255,x[A++]=255&N,x[A++]=N>>24&255}}function Be(s,u,g,x,A){for(g=u+g;u<g;){var N=(I=s[u++])>>16&240|I>>12&15,I=240&I|I>>28&15;x[A++]=N,x[A++]=I}}function at(s,u,g,x,A){for(g=u+g;u<g;){var N=(I=s[u++])>>16&248|I>>13&7,I=I>>5&224|I>>3&31;x[A++]=N,x[A++]=I}}function Lt(s,u,g,x,A){for(g=u+g;u<g;){var N=s[u++];x[A++]=255&N,x[A++]=N>>8&255,x[A++]=N>>16&255}}function Xe(s,u,g,x,A,N){if(N==0)for(g=u+g;u<g;)Ae(x,((N=s[u++])[0]>>24|N[1]>>8&65280|N[2]<<8&16711680|N[3]<<24)>>>0),A+=32;else n(x,A,s,u,g)}function vt(s,u){M[u][0]=M[s+"0"],M[u][1]=M[s+"1"],M[u][2]=M[s+"2"],M[u][3]=M[s+"3"],M[u][4]=M[s+"4"],M[u][5]=M[s+"5"],M[u][6]=M[s+"6"],M[u][7]=M[s+"7"],M[u][8]=M[s+"8"],M[u][9]=M[s+"9"],M[u][10]=M[s+"10"],M[u][11]=M[s+"11"],M[u][12]=M[s+"12"],M[u][13]=M[s+"13"],M[u][14]=M[s+"0"],M[u][15]=M[s+"0"]}function lt(s){return s==bl||s==xl||s==ss||s==wl}function Ht(){this.eb=[],this.size=this.A=this.fb=0}function Xt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Nt(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Ht,this.f.kb=new Xt,this.sd=null}function Qe(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function bt(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Rn(s){return alert("todo:WebPSamplerProcessPlane"),s.T}function dr(s,u){var g=s.T,x=u.ba.f.RGBA,A=x.eb,N=x.fb+s.ka*x.A,I=Sn[u.ba.S],j=s.y,D=s.O,B=s.f,te=s.N,fe=s.ea,U=s.W,ie=u.cc,le=u.dc,we=u.Mc,he=u.Nc,ye=s.ka,_e=s.ka+s.T,Ee=s.U,ke=Ee+1>>1;for(ye==0?I(j,D,null,null,B,te,fe,U,B,te,fe,U,A,N,null,null,Ee):(I(u.ec,u.fc,j,D,ie,le,we,he,B,te,fe,U,A,N-x.A,A,N,Ee),++g);ye+2<_e;ye+=2)ie=B,le=te,we=fe,he=U,te+=s.Rc,U+=s.Rc,N+=2*x.A,I(j,(D+=2*s.fa)-s.fa,j,D,ie,le,we,he,B,te,fe,U,A,N-x.A,A,N,Ee);return D+=s.fa,s.j+_e<s.o?(n(u.ec,u.fc,j,D,Ee),n(u.cc,u.dc,B,te,ke),n(u.Mc,u.Nc,fe,U,ke),g--):1&_e||I(j,D,null,null,B,te,fe,U,B,te,fe,U,A,N+x.A,null,null,Ee),g}function un(s,u,g){var x=s.F,A=[s.J];if(x!=null){var N=s.U,I=u.ba.S,j=I==as||I==ss;u=u.ba.f.RGBA;var D=[0],B=s.ka;D[0]=s.T,s.Kb&&(B==0?--D[0]:(--B,A[0]-=s.width),s.j+s.ka+s.T==s.o&&(D[0]=s.o-s.j-B));var te=u.eb;B=u.fb+B*u.A,s=au(x,A[0],s.width,N,D,te,B+(j?0:3),u.A),t(g==D),s&&lt(I)&&Sa(te,B,j,N,D,u.A)}return 0}function Xr(s){var u=s.ma,g=u.ba.S,x=11>g,A=g==is||g==os||g==as||g==vl||g==12||lt(g);if(u.memory=null,u.Ib=null,u.Jb=null,u.Nd=null,!pa(u.Oa,s,A?11:12))return 0;if(A&&lt(g)&&Qa(),s.da)alert("todo:use_scaling");else{if(x){if(u.Ib=Rn,s.Kb){if(g=s.U+1>>1,u.memory=a(s.U+2*g),u.memory==null)return 0;u.ec=u.memory,u.fc=0,u.cc=u.ec,u.dc=u.fc+s.U,u.Mc=u.cc,u.Nc=u.dc+g,u.Ib=dr,Qa()}}else alert("todo:EmitYUV");A&&(u.Jb=un,x&&bn())}if(x&&!Su){for(s=0;256>s;++s)V2[s]=89858*(s-128)+cs>>ls,Y2[s]=-22014*(s-128)+cs,G2[s]=-45773*(s-128),W2[s]=113618*(s-128)+cs>>ls;for(s=Ca;s<_l;++s)u=76283*(s-16)+cs>>ls,X2[s-Ca]=Zt(u,255),Z2[s-Ca]=Zt(u+8>>4,15);Su=1}return 1}function Ze(s){var u=s.ma,g=s.U,x=s.T;return t(!(1&s.ka)),0>=g||0>=x?0:(g=u.Ib(s,u),u.Jb!=null&&u.Jb(s,u,g),u.Dc+=g,1)}function hn(s){s.ma.memory=null}function fn(s,u,g,x){return be(s,8)!=47?0:(u[0]=be(s,14)+1,g[0]=be(s,14)+1,x[0]=be(s,1),be(s,3)!=0?0:!s.h)}function jr(s,u){if(4>s)return s+1;var g=s-2>>1;return(2+(1&s)<<g)+be(u,g)+1}function Rr(s,u){return 120<u?u-120:1<=(g=((g=P2[u-1])>>4)*s+(8-(15&g)))?g:1;var g}function qt(s,u,g){var x=V(g),A=s[u+=255&x].g-8;return 0<A&&(re(g,g.u+8),x=V(g),u+=s[u].value,u+=x&(1<<A)-1),re(g,g.u+s[u].g),s[u].value}function er(s,u,g){return g.g+=s.g,g.value+=s.value<<u>>>0,t(8>=g.g),s.g}function cr(s,u,g){var x=s.xc;return t((u=x==0?0:s.vc[s.md*(g>>x)+(u>>x)])<s.Wb),s.Ya[u]}function Mn(s,u,g,x){var A=s.ab,N=s.c*u,I=s.C;u=I+u;var j=g,D=x;for(x=s.Ta,g=s.Ua;0<A--;){var B=s.gc[A],te=I,fe=u,U=j,ie=D,le=(D=x,j=g,B.Ea);switch(t(te<fe),t(fe<=B.nc),B.hc){case 2:tr(U,ie,(fe-te)*le,D,j);break;case 0:var we=te,he=fe,ye=D,_e=j,Ee=(Ue=B).Ea;we==0&&(ga(U,ie,null,null,1,ye,_e),_t(U,ie+1,0,0,Ee-1,ye,_e+1),ie+=Ee,_e+=Ee,++we);for(var ke=1<<Ue.b,Ge=ke-1,Oe=Ne(Ee,Ue.b),pt=Ue.K,Ue=Ue.w+(we>>Ue.b)*Oe;we<he;){var xt=pt,vr=Ue,mt=1;for(Do(U,ie,ye,_e-Ee,1,ye,_e);mt<Ee;){var He=(mt&~Ge)+ke;He>Ee&&(He=Ee),(0,ba[xt[vr++]>>8&15])(U,ie+ +mt,ye,_e+mt-Ee,He-mt,ye,_e+mt),mt=He}ie+=Ee,_e+=Ee,++we&Ge||(Ue+=Oe)}fe!=B.nc&&n(D,j-le,D,j+(fe-te-1)*le,le);break;case 1:for(le=U,he=ie,Ee=(U=B.Ea)-(_e=U&~(ye=(ie=1<<B.b)-1)),we=Ne(U,B.b),ke=B.K,B=B.w+(te>>B.b)*we;te<fe;){for(Ge=ke,Oe=B,pt=new nt,Ue=he+_e,xt=he+U;he<Ue;)Ve(Ge[Oe++],pt),xa(pt,le,he,ie,D,j),he+=ie,j+=ie;he<xt&&(Ve(Ge[Oe++],pt),xa(pt,le,he,Ee,D,j),he+=Ee,j+=Ee),++te&ye||(B+=we)}break;case 3:if(U==D&&ie==j&&0<B.b){for(he=D,U=le=j+(fe-te)*le-(_e=(fe-te)*Ne(B.Ea,B.b)),ie=D,ye=j,we=[],_e=(Ee=_e)-1;0<=_e;--_e)we[_e]=ie[ye+_e];for(_e=Ee-1;0<=_e;--_e)he[U+_e]=we[_e];es(B,te,fe,D,le,D,j)}else es(B,te,fe,U,ie,D,j)}j=x,D=g}D!=g&&n(x,g,j,D,N)}function On(s,u){var g=s.V,x=s.Ba+s.c*s.C,A=u-s.C;if(t(u<=s.l.o),t(16>=A),0<A){var N=s.l,I=s.Ta,j=s.Ua,D=N.width;if(Mn(s,A,g,x),A=j=[j],t((g=s.C)<(x=u)),t(N.v<N.va),x>N.o&&(x=N.o),g<N.j){var B=N.j-g;g=N.j,A[0]+=B*D}if(g>=x?g=0:(A[0]+=4*N.v,N.ka=g-N.j,N.U=N.va-N.v,N.T=x-g,g=1),g){if(j=j[0],11>(g=s.ca).S){var te=g.f.RGBA,fe=(x=g.S,A=N.U,N=N.T,B=te.eb,te.A),U=N;for(te=te.fb+s.Ma*te.A;0<U--;){var ie=I,le=j,we=A,he=B,ye=te;switch(x){case ns:wa(ie,le,we,he,ye);break;case is:Ei(ie,le,we,he,ye);break;case bl:Ei(ie,le,we,he,ye),Sa(he,ye,0,we,1,0);break;case du:ho(ie,le,we,he,ye);break;case os:Xe(ie,le,we,he,ye,1);break;case xl:Xe(ie,le,we,he,ye,1),Sa(he,ye,0,we,1,0);break;case as:Xe(ie,le,we,he,ye,0);break;case ss:Xe(ie,le,we,he,ye,0),Sa(he,ye,1,we,1,0);break;case vl:Ii(ie,le,we,he,ye);break;case wl:Ii(ie,le,we,he,ye),ou(he,ye,we,1,0);break;case pu:Pi(ie,le,we,he,ye);break;default:t(0)}j+=D,te+=fe}s.Ma+=N}else alert("todo:EmitRescaledRowsYUVA");t(s.Ma<=g.height)}}s.C=u,t(s.C<=s.i)}function Mr(s){var u;if(0<s.ua)return 0;for(u=0;u<s.Wb;++u){var g=s.Ya[u].G,x=s.Ya[u].H;if(0<g[1][x[1]+0].g||0<g[2][x[2]+0].g||0<g[3][x[3]+0].g)return 0}return 1}function Or(s,u,g,x,A,N){if(s.Z!=0){var I=s.qd,j=s.rd;for(t(Ri[s.Z]!=null);u<g;++u)Ri[s.Z](I,j,x,A,x,A,N),I=x,j=A,A+=N;s.qd=I,s.rd=j}}function Zr(s,u){var g=s.l.ma,x=g.Z==0||g.Z==1?s.l.j:s.C;if(x=s.C<x?x:s.C,t(u<=s.l.o),u>x){var A=s.l.width,N=g.ca,I=g.tb+A*x,j=s.V,D=s.Ba+s.c*x,B=s.gc;t(s.ab==1),t(B[0].hc==3),Bn(B[0],x,u,j,D,N,I),Or(g,x,u,N,I,A)}s.C=s.Ma=u}function Jr(s,u,g,x,A,N,I){var j=s.$/x,D=s.$%x,B=s.m,te=s.s,fe=g+s.$,U=fe;A=g+x*A;var ie=g+x*N,le=280+te.ua,we=s.Pb?j:16777216,he=0<te.ua?te.Wa:null,ye=te.wc,_e=fe<ie?cr(te,D,j):null;t(s.C<N),t(ie<=A);var Ee=!1;e:for(;;){for(;Ee||fe<ie;){var ke=0;if(j>=we){var Ge=fe-g;t((we=s).Pb),we.wd=we.m,we.xd=Ge,0<we.s.ua&&ft(we.s.Wa,we.s.vb),we=j+j2}if(D&ye||(_e=cr(te,D,j)),t(_e!=null),_e.Qb&&(u[fe]=_e.qb,Ee=!0),!Ee)if(ue(B),_e.jc){ke=B,Ge=u;var Oe=fe,pt=_e.pd[V(ke)&uo-1];t(_e.jc),256>pt.g?(re(ke,ke.u+pt.g),Ge[Oe]=pt.value,ke=0):(re(ke,ke.u+pt.g-256),t(256<=pt.value),ke=pt.value),ke==0&&(Ee=!0)}else ke=qt(_e.G[0],_e.H[0],B);if(B.h)break;if(Ee||256>ke){if(!Ee)if(_e.nd)u[fe]=(_e.qb|ke<<8)>>>0;else{if(ue(B),Ee=qt(_e.G[1],_e.H[1],B),ue(B),Ge=qt(_e.G[2],_e.H[2],B),Oe=qt(_e.G[3],_e.H[3],B),B.h)break;u[fe]=(Oe<<24|Ee<<16|ke<<8|Ge)>>>0}if(Ee=!1,++fe,++D>=x&&(D=0,++j,I!=null&&j<=N&&!(j%16)&&I(s,j),he!=null))for(;U<fe;)ke=u[U++],he.X[(506832829*ke&4294967295)>>>he.Mb]=ke}else if(280>ke){if(ke=jr(ke-256,B),Ge=qt(_e.G[4],_e.H[4],B),ue(B),Ge=Rr(x,Ge=jr(Ge,B)),B.h)break;if(fe-g<Ge||A-fe<ke)break e;for(Oe=0;Oe<ke;++Oe)u[fe+Oe]=u[fe+Oe-Ge];for(fe+=ke,D+=ke;D>=x;)D-=x,++j,I!=null&&j<=N&&!(j%16)&&I(s,j);if(t(fe<=A),D&ye&&(_e=cr(te,D,j)),he!=null)for(;U<fe;)ke=u[U++],he.X[(506832829*ke&4294967295)>>>he.Mb]=ke}else{if(!(ke<le))break e;for(Ee=ke-280,t(he!=null);U<fe;)ke=u[U++],he.X[(506832829*ke&4294967295)>>>he.Mb]=ke;ke=fe,t(!(Ee>>>(Ge=he).Xa)),u[ke]=Ge.X[Ee],Ee=!0}Ee||t(B.h==Q(B))}if(s.Pb&&B.h&&fe<A)t(s.m.h),s.a=5,s.m=s.wd,s.$=s.xd,0<s.s.ua&&ft(s.s.vb,s.s.Wa);else{if(B.h)break e;I!=null&&I(s,j>N?N:j),s.a=0,s.$=fe-g}return 1}return s.a=3,0}function Hr(s){t(s!=null),s.vc=null,s.yc=null,s.Ya=null;var u=s.Wa;u!=null&&(u.X=null),s.vb=null,t(s!=null)}function Xn(){var s=new $e;return s==null?null:(s.a=0,s.xb=vu,vt("Predictor","VP8LPredictors"),vt("Predictor","VP8LPredictors_C"),vt("PredictorAdd","VP8LPredictorsAdd"),vt("PredictorAdd","VP8LPredictorsAdd_C"),tr=ot,xa=Je,wa=At,Ei=yt,Ii=Be,Pi=at,ho=Lt,M.VP8LMapColor32b=zn,M.VP8LMapColor8b=va,s)}function Qr(s,u,g,x,A){var N=1,I=[s],j=[u],D=x.m,B=x.s,te=null,fe=0;e:for(;;){if(g)for(;N&&be(D,1);){var U=I,ie=j,le=x,we=1,he=le.m,ye=le.gc[le.ab],_e=be(he,2);if(le.Oc&1<<_e)N=0;else{switch(le.Oc|=1<<_e,ye.hc=_e,ye.Ea=U[0],ye.nc=ie[0],ye.K=[null],++le.ab,t(4>=le.ab),_e){case 0:case 1:ye.b=be(he,3)+2,we=Qr(Ne(ye.Ea,ye.b),Ne(ye.nc,ye.b),0,le,ye.K),ye.K=ye.K[0];break;case 3:var Ee,ke=be(he,8)+1,Ge=16<ke?0:4<ke?1:2<ke?2:3;if(U[0]=Ne(ye.Ea,Ge),ye.b=Ge,Ee=we=Qr(ke,1,0,le,ye.K)){var Oe,pt=ke,Ue=ye,xt=1<<(8>>Ue.b),vr=a(xt);if(vr==null)Ee=0;else{var mt=Ue.K[0],He=Ue.w;for(vr[0]=Ue.K[0][0],Oe=1;Oe<1*pt;++Oe)vr[Oe]=Me(mt[He+Oe],vr[Oe-1]);for(;Oe<4*xt;++Oe)vr[Oe]=0;Ue.K[0]=null,Ue.K[0]=vr,Ee=1}}we=Ee;break;case 2:break;default:t(0)}N=we}}if(I=I[0],j=j[0],N&&be(D,1)&&!(N=1<=(fe=be(D,4))&&11>=fe)){x.a=3;break e}var Re;if(Re=N)t:{var nr,ht,wt,zt=x,Sr=I,zr=j,Jt=fe,Lr=g,Br=zt.m,br=zt.s,St=[null],Et=1,Qt=0,It=T2[Jt];r:for(;;){if(Lr&&be(Br,1)){var _r=be(Br,3)+2,Ln=Ne(Sr,_r),ir=Ne(zr,_r),Wr=Ln*ir;if(!Qr(Ln,ir,0,zt,St))break r;for(St=St[0],br.xc=_r,nr=0;nr<Wr;++nr){var Mt=St[nr]>>8&65535;St[nr]=Mt,Mt>=Et&&(Et=Mt+1)}}if(Br.h)break r;for(ht=0;5>ht;++ht){var xr=mu[ht];!ht&&0<Jt&&(xr+=1<<Jt),Qt<xr&&(Qt=xr)}var rn=c(Et*It,G),Ur=Et,nn=c(Ur,oe);if(nn==null)var on=null;else t(65536>=Ur),on=nn;var Gr=a(Qt);if(on==null||Gr==null||rn==null){zt.a=1;break r}var an=rn;for(nr=wt=0;nr<Et;++nr){var Dt=on[nr],sn=Dt.G,Nn=Dt.H,po=0,ui=1,Cr=0;for(ht=0;5>ht;++ht){xr=mu[ht],sn[ht]=an,Nn[ht]=wt,!ht&&0<Jt&&(xr+=1<<Jt);i:{var hs,Cl=xr,fs=zt,Aa=Gr,K2=an,ef=wt,Al=0,Mi=fs.m,tf=be(Mi,1);if(o(Aa,0,0,Cl),tf){var rf=be(Mi,1)+1,nf=be(Mi,1),Au=be(Mi,nf==0?1:8);Aa[Au]=1,rf==2&&(Aa[Au=be(Mi,8)]=1);var ds=1}else{var ku=a(19),Lu=be(Mi,4)+4;if(19<Lu){fs.a=3;var ps=0;break i}for(hs=0;hs<Lu;++hs)ku[I2[hs]]=be(Mi,3);var kl=void 0,ka=void 0,Nu=fs,of=ku,ms=Cl,Eu=Aa,Ll=0,Oi=Nu.m,Iu=8,Pu=c(128,G);n:for(;F(Pu,0,7,of,19);){if(be(Oi,1)){var af=2+2*be(Oi,3);if((kl=2+be(Oi,af))>ms)break n}else kl=ms;for(ka=0;ka<ms&&kl--;){ue(Oi);var Tu=Pu[0+(127&V(Oi))];re(Oi,Oi.u+Tu.g);var Bo=Tu.value;if(16>Bo)Eu[ka++]=Bo,Bo!=0&&(Iu=Bo);else{var sf=Bo==16,ju=Bo-16,lf=N2[ju],Ru=be(Oi,L2[ju])+lf;if(ka+Ru>ms)break n;for(var cf=sf?Iu:0;0<Ru--;)Eu[ka++]=cf}}Ll=1;break n}Ll||(Nu.a=3),ds=Ll}(ds=ds&&!Mi.h)&&(Al=F(K2,ef,8,Aa,Cl)),ds&&Al!=0?ps=Al:(fs.a=3,ps=0)}if(ps==0)break r;if(ui&&E2[ht]==1&&(ui=an[wt].g==0),po+=an[wt].g,wt+=ps,3>=ht){var La,Nl=Gr[0];for(La=1;La<xr;++La)Gr[La]>Nl&&(Nl=Gr[La]);Cr+=Nl}}if(Dt.nd=ui,Dt.Qb=0,ui&&(Dt.qb=(sn[3][Nn[3]+0].value<<24|sn[1][Nn[1]+0].value<<16|sn[2][Nn[2]+0].value)>>>0,po==0&&256>sn[0][Nn[0]+0].value&&(Dt.Qb=1,Dt.qb+=sn[0][Nn[0]+0].value<<8)),Dt.jc=!Dt.Qb&&6>Cr,Dt.jc){var gs,hi=Dt;for(gs=0;gs<uo;++gs){var Fi=gs,Di=hi.pd[Fi],vs=hi.G[0][hi.H[0]+Fi];256<=vs.value?(Di.g=vs.g+256,Di.value=vs.value):(Di.g=0,Di.value=0,Fi>>=er(vs,8,Di),Fi>>=er(hi.G[1][hi.H[1]+Fi],16,Di),Fi>>=er(hi.G[2][hi.H[2]+Fi],0,Di),er(hi.G[3][hi.H[3]+Fi],24,Di))}}}br.vc=St,br.Wb=Et,br.Ya=on,br.yc=rn,Re=1;break t}Re=0}if(!(N=Re)){x.a=3;break e}if(0<fe){if(B.ua=1<<fe,!W(B.Wa,fe)){x.a=1,N=0;break e}}else B.ua=0;var El=x,Mu=I,uf=j,Il=El.s,Pl=Il.xc;if(El.c=Mu,El.i=uf,Il.md=Ne(Mu,Pl),Il.wc=Pl==0?-1:(1<<Pl)-1,g){x.xb=B2;break e}if((te=a(I*j))==null){x.a=1,N=0;break e}N=(N=Jr(x,te,0,I,j,j,null))&&!D.h;break e}return N?(A!=null?A[0]=te:(t(te==null),t(g)),x.$=0,g||Hr(B)):Hr(B),N}function Cn(s,u){var g=s.c*s.i,x=g+u+16*u;return t(s.c<=u),s.V=a(x),s.V==null?(s.Ta=null,s.Ua=0,s.a=1,0):(s.Ta=s.V,s.Ua=s.Ba+g+u,1)}function xi(s,u){var g=s.C,x=u-g,A=s.V,N=s.Ba+s.c*g;for(t(u<=s.l.o);0<x;){var I=16<x?16:x,j=s.l.ma,D=s.l.width,B=D*I,te=j.ca,fe=j.tb+D*g,U=s.Ta,ie=s.Ua;Mn(s,I,A,N),su(U,ie,te,fe,B),Or(j,g,g+I,te,fe,D),x-=I,A+=I*s.c,g+=I}t(g==u),s.C=s.Ma=u}function dn(){this.ub=this.yd=this.td=this.Rb=0}function Zn(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function wi(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Jn(){this.Yb=function(){var s=[];return function u(g,x,A){for(var N=A[x],I=0;I<N&&(g.push(A.length>x+1?[]:0),!(A.length<x+1));I++)u(g[I],x+1,A)}(s,0,[3,11]),s}()}function yi(){this.jb=a(3),this.Wc=l([4,8],Jn),this.Xc=l([4,17],Jn)}function Gi(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Fr(){this.ld=this.La=this.dd=this.tc=0}function Qn(){this.Na=this.la=0}function Yi(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Kn(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function Co(){this.uc=this.M=this.Nb=0,this.wa=Array(new Fr),this.Y=0,this.ya=Array(new Kn),this.aa=0,this.l=new ei}function Xi(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Ao(){this.cb=this.a=0,this.sc="",this.m=new L,this.Od=new dn,this.Kc=new Zn,this.ed=new Gi,this.Qa=new wi,this.Ic=this.$c=this.Aa=0,this.D=new Co,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=c(8,L),this.ia=0,this.pb=c(4,Yi),this.Pa=new yi,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Xi),this.Hd=0,this.rb=Array(new Qn),this.sb=0,this.wa=Array(new Fr),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Kn),this.L=this.aa=0,this.gd=l([4,2],Fr),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function ei(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function ra(){var s=new Ao;return s!=null&&(s.a=0,s.sc="OK",s.cb=0,s.Xb=0,_a||(_a=qr)),s}function $t(s,u,g){return s.a==0&&(s.a=u,s.sc=g,s.cb=0),0}function ko(s,u,g){return 3<=g&&s[u+0]==157&&s[u+1]==1&&s[u+2]==42}function Lo(s,u){if(s==null)return 0;if(s.a=0,s.sc="OK",u==null)return $t(s,2,"null VP8Io passed to VP8GetHeaders()");var g=u.data,x=u.w,A=u.ha;if(4>A)return $t(s,7,"Truncated header.");var N=g[x+0]|g[x+1]<<8|g[x+2]<<16,I=s.Od;if(I.Rb=!(1&N),I.td=N>>1&7,I.yd=N>>4&1,I.ub=N>>5,3<I.td)return $t(s,3,"Incorrect keyframe parameters.");if(!I.yd)return $t(s,4,"Frame not displayable.");x+=3,A-=3;var j=s.Kc;if(I.Rb){if(7>A)return $t(s,7,"cannot parse picture header");if(!ko(g,x,A))return $t(s,3,"Bad code word");j.c=16383&(g[x+4]<<8|g[x+3]),j.Td=g[x+4]>>6,j.i=16383&(g[x+6]<<8|g[x+5]),j.Ud=g[x+6]>>6,x+=7,A-=7,s.za=j.c+15>>4,s.Ub=j.i+15>>4,u.width=j.c,u.height=j.i,u.Da=0,u.j=0,u.v=0,u.va=u.width,u.o=u.height,u.da=0,u.ib=u.width,u.hb=u.height,u.U=u.width,u.T=u.height,o((N=s.Pa).jb,0,255,N.jb.length),t((N=s.Qa)!=null),N.Cb=0,N.Bb=0,N.Fb=1,o(N.Zb,0,0,N.Zb.length),o(N.Lb,0,0,N.Lb)}if(I.ub>A)return $t(s,7,"bad partition length");ce(N=s.m,g,x,I.ub),x+=I.ub,A-=I.ub,I.Rb&&(j.Ld=pe(N),j.Kd=pe(N)),j=s.Qa;var D,B=s.Pa;if(t(N!=null),t(j!=null),j.Cb=pe(N),j.Cb){if(j.Bb=pe(N),pe(N)){for(j.Fb=pe(N),D=0;4>D;++D)j.Zb[D]=pe(N)?ee(N,7):0;for(D=0;4>D;++D)j.Lb[D]=pe(N)?ee(N,6):0}if(j.Bb)for(D=0;3>D;++D)B.jb[D]=pe(N)?de(N,8):255}else j.Bb=0;if(N.Ka)return $t(s,3,"cannot parse segment header");if((j=s.ed).zd=pe(N),j.Tb=de(N,6),j.wb=de(N,3),j.Pc=pe(N),j.Pc&&pe(N)){for(B=0;4>B;++B)pe(N)&&(j.vd[B]=ee(N,6));for(B=0;4>B;++B)pe(N)&&(j.od[B]=ee(N,6))}if(s.L=j.Tb==0?0:j.zd?1:2,N.Ka)return $t(s,3,"cannot parse filter header");var te=A;if(A=D=x,x=D+te,j=te,s.Xb=(1<<de(s.m,2))-1,te<3*(B=s.Xb))g=7;else{for(D+=3*B,j-=3*B,te=0;te<B;++te){var fe=g[A+0]|g[A+1]<<8|g[A+2]<<16;fe>j&&(fe=j),ce(s.Jc[+te],g,D,fe),D+=fe,j-=fe,A+=3}ce(s.Jc[+B],g,D,j),g=D<x?0:5}if(g!=0)return $t(s,g,"cannot parse partitions");for(g=de(D=s.m,7),A=pe(D)?ee(D,4):0,x=pe(D)?ee(D,4):0,j=pe(D)?ee(D,4):0,B=pe(D)?ee(D,4):0,D=pe(D)?ee(D,4):0,te=s.Qa,fe=0;4>fe;++fe){if(te.Cb){var U=te.Zb[fe];te.Fb||(U+=g)}else{if(0<fe){s.pb[fe]=s.pb[0];continue}U=g}var ie=s.pb[fe];ie.Sc[0]=yl[Zt(U+A,127)],ie.Sc[1]=Sl[Zt(U+0,127)],ie.Eb[0]=2*yl[Zt(U+x,127)],ie.Eb[1]=101581*Sl[Zt(U+j,127)]>>16,8>ie.Eb[1]&&(ie.Eb[1]=8),ie.Qc[0]=yl[Zt(U+B,117)],ie.Qc[1]=Sl[Zt(U+D,127)],ie.lc=U+D}if(!I.Rb)return $t(s,4,"Not a key frame.");for(pe(N),I=s.Pa,g=0;4>g;++g){for(A=0;8>A;++A)for(x=0;3>x;++x)for(j=0;11>j;++j)B=xe(N,D2[g][A][x][j])?de(N,8):O2[g][A][x][j],I.Wc[g][A].Yb[x][j]=B;for(A=0;17>A;++A)I.Xc[g][A]=I.Wc[g][z2[A]]}return s.kc=pe(N),s.kc&&(s.Bd=de(N,8)),s.cb=1}function qr(s,u,g,x,A,N,I){var j=u[A].Yb[g];for(g=0;16>A;++A){if(!xe(s,j[g+0]))return A;for(;!xe(s,j[g+1]);)if(j=u[++A].Yb[0],g=0,A==16)return 16;var D=u[A+1].Yb;if(xe(s,j[g+2])){var B=s,te=0;if(xe(B,(U=j)[(fe=g)+3]))if(xe(B,U[fe+6])){for(j=0,fe=2*(te=xe(B,U[fe+8]))+(U=xe(B,U[fe+9+te])),te=0,U=R2[fe];U[j];++j)te+=te+xe(B,U[j]);te+=3+(8<<fe)}else xe(B,U[fe+7])?(te=7+2*xe(B,165),te+=xe(B,145)):te=5+xe(B,159);else te=xe(B,U[fe+4])?3+xe(B,U[fe+5]):2;j=D[2]}else te=1,j=D[1];D=I+M2[A],0>(B=s).b&&ge(B);var fe,U=B.b,ie=(fe=B.Ca>>1)-(B.I>>U)>>31;--B.b,B.Ca+=ie,B.Ca|=1,B.I-=(fe+1&ie)<<U,N[D]=((te^ie)-ie)*x[(0<A)+0]}return 16}function ti(s){var u=s.rb[s.sb-1];u.la=0,u.Na=0,o(s.zc,0,0,s.zc.length),s.ja=0}function Dr(s,u,g,x,A){A=s[u+g+32*x]+(A>>3),s[u+g+32*x]=-256&A?0>A?0:255:A}function Fn(s,u,g,x,A,N){Dr(s,u,0,g,x+A),Dr(s,u,1,g,x+N),Dr(s,u,2,g,x-N),Dr(s,u,3,g,x-A)}function jt(s){return(20091*s>>16)+s}function Si(s,u,g,x){var A,N=0,I=a(16);for(A=0;4>A;++A){var j=s[u+0]+s[u+8],D=s[u+0]-s[u+8],B=(35468*s[u+4]>>16)-jt(s[u+12]),te=jt(s[u+4])+(35468*s[u+12]>>16);I[N+0]=j+te,I[N+1]=D+B,I[N+2]=D-B,I[N+3]=j-te,N+=4,u++}for(A=N=0;4>A;++A)j=(s=I[N+0]+4)+I[N+8],D=s-I[N+8],B=(35468*I[N+4]>>16)-jt(I[N+12]),Dr(g,x,0,0,j+(te=jt(I[N+4])+(35468*I[N+12]>>16))),Dr(g,x,1,0,D+B),Dr(g,x,2,0,D-B),Dr(g,x,3,0,j-te),N++,x+=32}function na(s,u,g,x){var A=s[u+0]+4,N=35468*s[u+4]>>16,I=jt(s[u+4]),j=35468*s[u+1]>>16;Fn(g,x,0,A+I,s=jt(s[u+1]),j),Fn(g,x,1,A+N,s,j),Fn(g,x,2,A-N,s,j),Fn(g,x,3,A-I,s,j)}function No(s,u,g,x,A){Si(s,u,g,x),A&&Si(s,u+16,g,x+4)}function ia(s,u,g,x){fo(s,u+0,g,x,1),fo(s,u+32,g,x+128,1)}function pn(s,u,g,x){var A;for(s=s[u+0]+4,A=0;4>A;++A)for(u=0;4>u;++u)Dr(g,x,u,A,s)}function Eo(s,u,g,x){s[u+0]&&kt(s,u+0,g,x),s[u+16]&&kt(s,u+16,g,x+4),s[u+32]&&kt(s,u+32,g,x+128),s[u+48]&&kt(s,u+48,g,x+128+4)}function me(s,u,g,x){var A,N=a(16);for(A=0;4>A;++A){var I=s[u+0+A]+s[u+12+A],j=s[u+4+A]+s[u+8+A],D=s[u+4+A]-s[u+8+A],B=s[u+0+A]-s[u+12+A];N[0+A]=I+j,N[8+A]=I-j,N[4+A]=B+D,N[12+A]=B-D}for(A=0;4>A;++A)I=(s=N[0+4*A]+3)+N[3+4*A],j=N[1+4*A]+N[2+4*A],D=N[1+4*A]-N[2+4*A],B=s-N[3+4*A],g[x+0]=I+j>>3,g[x+16]=B+D>>3,g[x+32]=I-j>>3,g[x+48]=B-D>>3,x+=64}function dt(s,u,g){var x,A=u-32,N=tn,I=255-s[A-1];for(x=0;x<g;++x){var j,D=N,B=I+s[u-1];for(j=0;j<g;++j)s[u+j]=D[B+s[A+j]];u+=32}}function ur(s,u){dt(s,u,4)}function An(s,u){dt(s,u,8)}function $r(s,u){dt(s,u,16)}function Zi(s,u){var g;for(g=0;16>g;++g)n(s,u+32*g,s,u-32,16)}function _i(s,u){var g;for(g=16;0<g;--g)o(s,u,s[u-1],16),u+=32}function ri(s,u,g){var x;for(x=0;16>x;++x)o(u,g+32*x,s,16)}function pr(s,u){var g,x=16;for(g=0;16>g;++g)x+=s[u-1+32*g]+s[u+g-32];ri(x>>5,s,u)}function Ji(s,u){var g,x=8;for(g=0;16>g;++g)x+=s[u-1+32*g];ri(x>>4,s,u)}function ni(s,u){var g,x=8;for(g=0;16>g;++g)x+=s[u+g-32];ri(x>>4,s,u)}function Ci(s,u){ri(128,s,u)}function et(s,u,g){return s+2*u+g+2>>2}function oa(s,u){var g,x=u-32;for(x=new Uint8Array([et(s[x-1],s[x+0],s[x+1]),et(s[x+0],s[x+1],s[x+2]),et(s[x+1],s[x+2],s[x+3]),et(s[x+2],s[x+3],s[x+4])]),g=0;4>g;++g)n(s,u+32*g,x,0,x.length)}function Io(s,u){var g=s[u-1],x=s[u-1+32],A=s[u-1+64],N=s[u-1+96];Ae(s,u+0,16843009*et(s[u-1-32],g,x)),Ae(s,u+32,16843009*et(g,x,A)),Ae(s,u+64,16843009*et(x,A,N)),Ae(s,u+96,16843009*et(A,N,N))}function Po(s,u){var g,x=4;for(g=0;4>g;++g)x+=s[u+g-32]+s[u-1+32*g];for(x>>=3,g=0;4>g;++g)o(s,u+32*g,x,4)}function To(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1-32],I=s[u+0-32],j=s[u+1-32],D=s[u+2-32],B=s[u+3-32];s[u+0+96]=et(x,A,s[u-1+96]),s[u+1+96]=s[u+0+64]=et(g,x,A),s[u+2+96]=s[u+1+64]=s[u+0+32]=et(N,g,x),s[u+3+96]=s[u+2+64]=s[u+1+32]=s[u+0+0]=et(I,N,g),s[u+3+64]=s[u+2+32]=s[u+1+0]=et(j,I,N),s[u+3+32]=s[u+2+0]=et(D,j,I),s[u+3+0]=et(B,D,j)}function mn(s,u){var g=s[u+1-32],x=s[u+2-32],A=s[u+3-32],N=s[u+4-32],I=s[u+5-32],j=s[u+6-32],D=s[u+7-32];s[u+0+0]=et(s[u+0-32],g,x),s[u+1+0]=s[u+0+32]=et(g,x,A),s[u+2+0]=s[u+1+32]=s[u+0+64]=et(x,A,N),s[u+3+0]=s[u+2+32]=s[u+1+64]=s[u+0+96]=et(A,N,I),s[u+3+32]=s[u+2+64]=s[u+1+96]=et(N,I,j),s[u+3+64]=s[u+2+96]=et(I,j,D),s[u+3+96]=et(j,D,D)}function gn(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1-32],I=s[u+0-32],j=s[u+1-32],D=s[u+2-32],B=s[u+3-32];s[u+0+0]=s[u+1+64]=N+I+1>>1,s[u+1+0]=s[u+2+64]=I+j+1>>1,s[u+2+0]=s[u+3+64]=j+D+1>>1,s[u+3+0]=D+B+1>>1,s[u+0+96]=et(A,x,g),s[u+0+64]=et(x,g,N),s[u+0+32]=s[u+1+96]=et(g,N,I),s[u+1+32]=s[u+2+96]=et(N,I,j),s[u+2+32]=s[u+3+96]=et(I,j,D),s[u+3+32]=et(j,D,B)}function aa(s,u){var g=s[u+0-32],x=s[u+1-32],A=s[u+2-32],N=s[u+3-32],I=s[u+4-32],j=s[u+5-32],D=s[u+6-32],B=s[u+7-32];s[u+0+0]=g+x+1>>1,s[u+1+0]=s[u+0+64]=x+A+1>>1,s[u+2+0]=s[u+1+64]=A+N+1>>1,s[u+3+0]=s[u+2+64]=N+I+1>>1,s[u+0+32]=et(g,x,A),s[u+1+32]=s[u+0+96]=et(x,A,N),s[u+2+32]=s[u+1+96]=et(A,N,I),s[u+3+32]=s[u+2+96]=et(N,I,j),s[u+3+64]=et(I,j,D),s[u+3+96]=et(j,D,B)}function sa(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1+96];s[u+0+0]=g+x+1>>1,s[u+2+0]=s[u+0+32]=x+A+1>>1,s[u+2+32]=s[u+0+64]=A+N+1>>1,s[u+1+0]=et(g,x,A),s[u+3+0]=s[u+1+32]=et(x,A,N),s[u+3+32]=s[u+1+64]=et(A,N,N),s[u+3+64]=s[u+2+64]=s[u+0+96]=s[u+1+96]=s[u+2+96]=s[u+3+96]=N}function vn(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1+96],I=s[u-1-32],j=s[u+0-32],D=s[u+1-32],B=s[u+2-32];s[u+0+0]=s[u+2+32]=g+I+1>>1,s[u+0+32]=s[u+2+64]=x+g+1>>1,s[u+0+64]=s[u+2+96]=A+x+1>>1,s[u+0+96]=N+A+1>>1,s[u+3+0]=et(j,D,B),s[u+2+0]=et(I,j,D),s[u+1+0]=s[u+3+32]=et(g,I,j),s[u+1+32]=s[u+3+64]=et(x,g,I),s[u+1+64]=s[u+3+96]=et(A,x,g),s[u+1+96]=et(N,A,x)}function Dn(s,u){var g;for(g=0;8>g;++g)n(s,u+32*g,s,u-32,8)}function Qi(s,u){var g;for(g=0;8>g;++g)o(s,u,s[u-1],8),u+=32}function jo(s,u,g){var x;for(x=0;8>x;++x)o(u,g+32*x,s,8)}function Ro(s,u){var g,x=8;for(g=0;8>g;++g)x+=s[u+g-32]+s[u-1+32*g];jo(x>>4,s,u)}function ml(s,u){var g,x=4;for(g=0;8>g;++g)x+=s[u+g-32];jo(x>>3,s,u)}function la(s,u){var g,x=4;for(g=0;8>g;++g)x+=s[u-1+32*g];jo(x>>3,s,u)}function ca(s,u){jo(128,s,u)}function Ki(s,u,g){var x=s[u-g],A=s[u+0],N=3*(A-x)+gl[1020+s[u-2*g]-s[u+g]],I=rs[112+(N+4>>3)];s[u-g]=tn[255+x+rs[112+(N+3>>3)]],s[u+0]=tn[255+A-I]}function eo(s,u,g,x){var A=s[u+0],N=s[u+g];return yn[255+s[u-2*g]-s[u-g]]>x||yn[255+N-A]>x}function ua(s,u,g,x){return 4*yn[255+s[u-g]-s[u+0]]+yn[255+s[u-2*g]-s[u+g]]<=x}function Mo(s,u,g,x,A){var N=s[u-3*g],I=s[u-2*g],j=s[u-g],D=s[u+0],B=s[u+g],te=s[u+2*g],fe=s[u+3*g];return 4*yn[255+j-D]+yn[255+I-B]>x?0:yn[255+s[u-4*g]-N]<=A&&yn[255+N-I]<=A&&yn[255+I-j]<=A&&yn[255+fe-te]<=A&&yn[255+te-B]<=A&&yn[255+B-D]<=A}function ha(s,u,g,x){var A=2*x+1;for(x=0;16>x;++x)ua(s,u+x,g,A)&&Ki(s,u+x,g)}function to(s,u,g,x){var A=2*x+1;for(x=0;16>x;++x)ua(s,u+x*g,1,A)&&Ki(s,u+x*g,1)}function Ga(s,u,g,x){var A;for(A=3;0<A;--A)ha(s,u+=4*g,g,x)}function Ya(s,u,g,x){var A;for(A=3;0<A;--A)to(s,u+=4,g,x)}function ii(s,u,g,x,A,N,I,j){for(N=2*N+1;0<A--;){if(Mo(s,u,g,N,I))if(eo(s,u,g,j))Ki(s,u,g);else{var D=s,B=u,te=g,fe=D[B-2*te],U=D[B-te],ie=D[B+0],le=D[B+te],we=D[B+2*te],he=27*(_e=gl[1020+3*(ie-U)+gl[1020+fe-le]])+63>>7,ye=18*_e+63>>7,_e=9*_e+63>>7;D[B-3*te]=tn[255+D[B-3*te]+_e],D[B-2*te]=tn[255+fe+ye],D[B-te]=tn[255+U+he],D[B+0]=tn[255+ie-he],D[B+te]=tn[255+le-ye],D[B+2*te]=tn[255+we-_e]}u+=x}}function oi(s,u,g,x,A,N,I,j){for(N=2*N+1;0<A--;){if(Mo(s,u,g,N,I))if(eo(s,u,g,j))Ki(s,u,g);else{var D=s,B=u,te=g,fe=D[B-te],U=D[B+0],ie=D[B+te],le=rs[112+(4+(we=3*(U-fe))>>3)],we=rs[112+(we+3>>3)],he=le+1>>1;D[B-2*te]=tn[255+D[B-2*te]+he],D[B-te]=tn[255+fe+we],D[B+0]=tn[255+U-le],D[B+te]=tn[255+ie-he]}u+=x}}function Xa(s,u,g,x,A,N){ii(s,u,g,1,16,x,A,N)}function Za(s,u,g,x,A,N){ii(s,u,1,g,16,x,A,N)}function ro(s,u,g,x,A,N){var I;for(I=3;0<I;--I)oi(s,u+=4*g,g,1,16,x,A,N)}function Ja(s,u,g,x,A,N){var I;for(I=3;0<I;--I)oi(s,u+=4,1,g,16,x,A,N)}function m(s,u,g,x,A,N,I,j){ii(s,u,A,1,8,N,I,j),ii(g,x,A,1,8,N,I,j)}function C(s,u,g,x,A,N,I,j){ii(s,u,1,A,8,N,I,j),ii(g,x,1,A,8,N,I,j)}function q(s,u,g,x,A,N,I,j){oi(s,u+4*A,A,1,8,N,I,j),oi(g,x+4*A,A,1,8,N,I,j)}function Z(s,u,g,x,A,N,I,j){oi(s,u+4,1,A,8,N,I,j),oi(g,x+4,1,A,8,N,I,j)}function ae(){this.ba=new Nt,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new bt,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function Se(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Le(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function ze(){this.ua=0,this.Wa=new Ke,this.vb=new Ke,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new oe,this.yc=new G}function $e(){this.xb=this.a=0,this.l=new ei,this.ca=new Nt,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new H,this.Pb=0,this.wd=new H,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new ze,this.ab=0,this.gc=c(4,Le),this.Oc=0}function st(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new ei,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ct(s,u,g,x,A,N,I){for(s=s==null?0:s[u+0],u=0;u<I;++u)A[N+u]=s+g[x+u]&255,s=A[N+u]}function Ct(s,u,g,x,A,N,I){var j;if(s==null)ct(null,null,g,x,A,N,I);else for(j=0;j<I;++j)A[N+j]=s[u+j]+g[x+j]&255}function Wt(s,u,g,x,A,N,I){if(s==null)ct(null,null,g,x,A,N,I);else{var j,D=s[u+0],B=D,te=D;for(j=0;j<I;++j)B=te+(D=s[u+j])-B,te=g[x+j]+(-256&B?0>B?0:255:B)&255,B=D,A[N+j]=te}}function hr(s,u,g,x){var A=u.width,N=u.o;if(t(s!=null&&u!=null),0>g||0>=x||g+x>N)return null;if(!s.Cc){if(s.ga==null){var I;if(s.ga=new st,(I=s.ga==null)||(I=u.width*u.o,t(s.Gb.length==0),s.Gb=a(I),s.Uc=0,s.Gb==null?I=0:(s.mb=s.Gb,s.nb=s.Uc,s.rc=null,I=1),I=!I),!I){I=s.ga;var j=s.Fa,D=s.P,B=s.qc,te=s.mb,fe=s.nb,U=D+1,ie=B-1,le=I.l;if(t(j!=null&&te!=null&&u!=null),Ri[0]=null,Ri[1]=ct,Ri[2]=Ct,Ri[3]=Wt,I.ca=te,I.tb=fe,I.c=u.width,I.i=u.height,t(0<I.c&&0<I.i),1>=B)u=0;else if(I.$a=3&j[D+0],I.Z=j[D+0]>>2&3,I.Lc=j[D+0]>>4&3,D=j[D+0]>>6&3,0>I.$a||1<I.$a||4<=I.Z||1<I.Lc||D)u=0;else if(le.put=Ze,le.ac=Xr,le.bc=hn,le.ma=I,le.width=u.width,le.height=u.height,le.Da=u.Da,le.v=u.v,le.va=u.va,le.j=u.j,le.o=u.o,I.$a)e:{t(I.$a==1),u=Xn();t:for(;;){if(u==null){u=0;break e}if(t(I!=null),I.mc=u,u.c=I.c,u.i=I.i,u.l=I.l,u.l.ma=I,u.l.width=I.c,u.l.height=I.i,u.a=0,se(u.m,j,U,ie),!Qr(I.c,I.i,1,u,null)||(u.ab==1&&u.gc[0].hc==3&&Mr(u.s)?(I.ic=1,j=u.c*u.i,u.Ta=null,u.Ua=0,u.V=a(j),u.Ba=0,u.V==null?(u.a=1,u=0):u=1):(I.ic=0,u=Cn(u,I.c)),!u))break t;u=1;break e}I.mc=null,u=0}else u=ie>=I.c*I.i;I=!u}if(I)return null;s.ga.Lc!=1?s.Ga=0:x=N-g}t(s.ga!=null),t(g+x<=N);e:{if(u=(j=s.ga).c,N=j.l.o,j.$a==0){if(U=s.rc,ie=s.Vc,le=s.Fa,D=s.P+1+g*u,B=s.mb,te=s.nb+g*u,t(D<=s.P+s.qc),j.Z!=0)for(t(Ri[j.Z]!=null),I=0;I<x;++I)Ri[j.Z](U,ie,le,D,B,te,u),U=B,ie=te,te+=u,D+=u;else for(I=0;I<x;++I)n(B,te,le,D,u),U=B,ie=te,te+=u,D+=u;s.rc=U,s.Vc=ie}else{if(t(j.mc!=null),u=g+x,t((I=j.mc)!=null),t(u<=I.i),I.C>=u)u=1;else if(j.ic||bn(),j.ic){j=I.V,U=I.Ba,ie=I.c;var we=I.i,he=(le=1,D=I.$/ie,B=I.$%ie,te=I.m,fe=I.s,I.$),ye=ie*we,_e=ie*u,Ee=fe.wc,ke=he<_e?cr(fe,B,D):null;t(he<=ye),t(u<=we),t(Mr(fe));t:for(;;){for(;!te.h&&he<_e;){if(B&Ee||(ke=cr(fe,B,D)),t(ke!=null),ue(te),256>(we=qt(ke.G[0],ke.H[0],te)))j[U+he]=we,++he,++B>=ie&&(B=0,++D<=u&&!(D%16)&&Zr(I,D));else{if(!(280>we)){le=0;break t}we=jr(we-256,te);var Ge,Oe=qt(ke.G[4],ke.H[4],te);if(ue(te),!(he>=(Oe=Rr(ie,Oe=jr(Oe,te)))&&ye-he>=we)){le=0;break t}for(Ge=0;Ge<we;++Ge)j[U+he+Ge]=j[U+he+Ge-Oe];for(he+=we,B+=we;B>=ie;)B-=ie,++D<=u&&!(D%16)&&Zr(I,D);he<_e&&B&Ee&&(ke=cr(fe,B,D))}t(te.h==Q(te))}Zr(I,D>u?u:D);break t}!le||te.h&&he<ye?(le=0,I.a=te.h?5:3):I.$=he,u=le}else u=Jr(I,I.V,I.Ba,I.c,I.i,u,xi);if(!u){x=0;break e}}g+x>=N&&(s.Cc=1),x=1}if(!x)return null;if(s.Cc&&((x=s.ga)!=null&&(x.mc=null),s.ga=null,0<s.Ga))return alert("todo:WebPDequantizeLevels"),null}return s.nb+g*A}function Ft(s,u,g,x,A,N){for(;0<A--;){var I,j=s,D=u+(g?1:0),B=s,te=u+(g?0:3);for(I=0;I<x;++I){var fe=B[te+4*I];fe!=255&&(fe*=32897,j[D+4*I+0]=j[D+4*I+0]*fe>>23,j[D+4*I+1]=j[D+4*I+1]*fe>>23,j[D+4*I+2]=j[D+4*I+2]*fe>>23)}u+=N}}function mr(s,u,g,x,A){for(;0<x--;){var N;for(N=0;N<g;++N){var I=s[u+2*N+0],j=15&(B=s[u+2*N+1]),D=4369*j,B=(240&B|B>>4)*D>>16;s[u+2*N+0]=(240&I|I>>4)*D>>16&240|(15&I|I<<4)*D>>16>>4&15,s[u+2*N+1]=240&B|j}u+=A}}function fr(s,u,g,x,A,N,I,j){var D,B,te=255;for(B=0;B<A;++B){for(D=0;D<x;++D){var fe=s[u+D];N[I+4*D]=fe,te&=fe}u+=g,I+=j}return te!=255}function yr(s,u,g,x,A){var N;for(N=0;N<A;++N)g[x+N]=s[u+N]>>8}function bn(){Sa=Ft,ou=mr,au=fr,su=yr}function Vr(s,u,g){M[s]=function(x,A,N,I,j,D,B,te,fe,U,ie,le,we,he,ye,_e,Ee){var ke,Ge=Ee-1>>1,Oe=j[D+0]|B[te+0]<<16,pt=fe[U+0]|ie[le+0]<<16;t(x!=null);var Ue=3*Oe+pt+131074>>2;for(u(x[A+0],255&Ue,Ue>>16,we,he),N!=null&&(Ue=3*pt+Oe+131074>>2,u(N[I+0],255&Ue,Ue>>16,ye,_e)),ke=1;ke<=Ge;++ke){var xt=j[D+ke]|B[te+ke]<<16,vr=fe[U+ke]|ie[le+ke]<<16,mt=Oe+xt+pt+vr+524296,He=mt+2*(xt+pt)>>3;Ue=He+Oe>>1,Oe=(mt=mt+2*(Oe+vr)>>3)+xt>>1,u(x[A+2*ke-1],255&Ue,Ue>>16,we,he+(2*ke-1)*g),u(x[A+2*ke-0],255&Oe,Oe>>16,we,he+(2*ke-0)*g),N!=null&&(Ue=mt+pt>>1,Oe=He+vr>>1,u(N[I+2*ke-1],255&Ue,Ue>>16,ye,_e+(2*ke-1)*g),u(N[I+2*ke+0],255&Oe,Oe>>16,ye,_e+(2*ke+0)*g)),Oe=xt,pt=vr}1&Ee||(Ue=3*Oe+pt+131074>>2,u(x[A+Ee-1],255&Ue,Ue>>16,we,he+(Ee-1)*g),N!=null&&(Ue=3*pt+Oe+131074>>2,u(N[I+Ee-1],255&Ue,Ue>>16,ye,_e+(Ee-1)*g)))}}function Qa(){Sn[ns]=U2,Sn[is]=bu,Sn[du]=H2,Sn[os]=xu,Sn[as]=wu,Sn[vl]=yu,Sn[pu]=q2,Sn[bl]=bu,Sn[xl]=xu,Sn[ss]=wu,Sn[wl]=yu}function Oo(s){return s&-16384?0>s?0:255:s>>$2}function no(s,u){return Oo((19077*s>>8)+(26149*u>>8)-14234)}function Ai(s,u,g){return Oo((19077*s>>8)-(6419*u>>8)-(13320*g>>8)+8708)}function io(s,u){return Oo((19077*s>>8)+(33050*u>>8)-17685)}function oo(s,u,g,x,A){x[A+0]=no(s,g),x[A+1]=Ai(s,u,g),x[A+2]=io(s,u)}function ao(s,u,g,x,A){x[A+0]=io(s,u),x[A+1]=Ai(s,u,g),x[A+2]=no(s,g)}function kr(s,u,g,x,A){var N=Ai(s,u,g);u=N<<3&224|io(s,u)>>3,x[A+0]=248&no(s,g)|N>>5,x[A+1]=u}function so(s,u,g,x,A){var N=240&io(s,u)|15;x[A+0]=240&no(s,g)|Ai(s,u,g)>>4,x[A+1]=N}function lo(s,u,g,x,A){x[A+0]=255,oo(s,u,g,x,A+1)}function fa(s,u,g,x,A){ao(s,u,g,x,A),x[A+3]=255}function da(s,u,g,x,A){oo(s,u,g,x,A),x[A+3]=255}function Zt(s,u){return 0>s?0:s>u?u:s}function ai(s,u,g){M[s]=function(x,A,N,I,j,D,B,te,fe){for(var U=te+(-2&fe)*g;te!=U;)u(x[A+0],N[I+0],j[D+0],B,te),u(x[A+1],N[I+0],j[D+0],B,te+g),A+=2,++I,++D,te+=2*g;1&fe&&u(x[A+0],N[I+0],j[D+0],B,te)}}function Fo(s,u,g){return g==0?s==0?u==0?6:5:u==0?4:0:g}function Ka(s,u,g,x,A){switch(s>>>30){case 3:fo(u,g,x,A,0);break;case 2:wn(u,g,x,A);break;case 1:kt(u,g,x,A)}}function xn(s,u){var g,x,A=u.M,N=u.Nb,I=s.oc,j=s.pc+40,D=s.oc,B=s.pc+584,te=s.oc,fe=s.pc+600;for(g=0;16>g;++g)I[j+32*g-1]=129;for(g=0;8>g;++g)D[B+32*g-1]=129,te[fe+32*g-1]=129;for(0<A?I[j-1-32]=D[B-1-32]=te[fe-1-32]=129:(o(I,j-32-1,127,21),o(D,B-32-1,127,9),o(te,fe-32-1,127,9)),x=0;x<s.za;++x){var U=u.ya[u.aa+x];if(0<x){for(g=-1;16>g;++g)n(I,j+32*g-4,I,j+32*g+12,4);for(g=-1;8>g;++g)n(D,B+32*g-4,D,B+32*g+4,4),n(te,fe+32*g-4,te,fe+32*g+4,4)}var ie=s.Gd,le=s.Hd+x,we=U.ad,he=U.Hc;if(0<A&&(n(I,j-32,ie[le].y,0,16),n(D,B-32,ie[le].f,0,8),n(te,fe-32,ie[le].ea,0,8)),U.Za){var ye=I,_e=j-32+16;for(0<A&&(x>=s.za-1?o(ye,_e,ie[le].y[15],4):n(ye,_e,ie[le+1].y,0,4)),g=0;4>g;g++)ye[_e+128+g]=ye[_e+256+g]=ye[_e+384+g]=ye[_e+0+g];for(g=0;16>g;++g,he<<=2)ye=I,_e=j+_u[g],kn[U.Ob[g]](ye,_e),Ka(he,we,16*+g,ye,_e)}else if(ye=Fo(x,A,U.Ob[0]),ji[ye](I,j),he!=0)for(g=0;16>g;++g,he<<=2)Ka(he,we,16*+g,I,j+_u[g]);for(g=U.Gc,ye=Fo(x,A,U.Dd),ci[ye](D,B),ci[ye](te,fe),he=we,ye=D,_e=B,255&(U=0|g)&&(170&U?Un(he,256,ye,_e):Rt(he,256,ye,_e)),U=te,he=fe,255&(g>>=8)&&(170&g?Un(we,320,U,he):Rt(we,320,U,he)),A<s.Ub-1&&(n(ie[le].y,0,I,j+480,16),n(ie[le].f,0,D,B+224,8),n(ie[le].ea,0,te,fe+224,8)),g=8*N*s.B,ie=s.sa,le=s.ta+16*x+16*N*s.R,we=s.qa,U=s.ra+8*x+g,he=s.Ha,ye=s.Ia+8*x+g,g=0;16>g;++g)n(ie,le+g*s.R,I,j+32*g,16);for(g=0;8>g;++g)n(we,U+g*s.B,D,B+32*g,8),n(he,ye+g*s.B,te,fe+32*g,8)}}function co(s,u,g,x,A,N,I,j,D){var B=[0],te=[0],fe=0,U=D!=null?D.kd:0,ie=D??new Se;if(s==null||12>g)return 7;ie.data=s,ie.w=u,ie.ha=g,u=[u],g=[g],ie.gb=[ie.gb];e:{var le=u,we=g,he=ie.gb;if(t(s!=null),t(we!=null),t(he!=null),he[0]=0,12<=we[0]&&!r(s,le[0],"RIFF")){if(r(s,le[0]+8,"WEBP")){he=3;break e}var ye=ve(s,le[0]+4);if(12>ye||4294967286<ye){he=3;break e}if(U&&ye>we[0]-8){he=7;break e}he[0]=ye,le[0]+=12,we[0]-=12}he=0}if(he!=0)return he;for(ye=0<ie.gb[0],g=g[0];;){e:{var _e=s;we=u,he=g;var Ee=B,ke=te,Ge=le=[0];if((Ue=fe=[fe])[0]=0,8>he[0])he=7;else{if(!r(_e,we[0],"VP8X")){if(ve(_e,we[0]+4)!=10){he=3;break e}if(18>he[0]){he=7;break e}var Oe=ve(_e,we[0]+8),pt=1+Te(_e,we[0]+12);if(2147483648<=pt*(_e=1+Te(_e,we[0]+15))){he=3;break e}Ge!=null&&(Ge[0]=Oe),Ee!=null&&(Ee[0]=pt),ke!=null&&(ke[0]=_e),we[0]+=18,he[0]-=18,Ue[0]=1}he=0}}if(fe=fe[0],le=le[0],he!=0)return he;if(we=!!(2&le),!ye&&fe)return 3;if(N!=null&&(N[0]=!!(16&le)),I!=null&&(I[0]=we),j!=null&&(j[0]=0),I=B[0],le=te[0],fe&&we&&D==null){he=0;break}if(4>g){he=7;break}if(ye&&fe||!ye&&!fe&&!r(s,u[0],"ALPH")){g=[g],ie.na=[ie.na],ie.P=[ie.P],ie.Sa=[ie.Sa];e:{Oe=s,he=u,ye=g;var Ue=ie.gb;Ee=ie.na,ke=ie.P,Ge=ie.Sa,pt=22,t(Oe!=null),t(ye!=null),_e=he[0];var xt=ye[0];for(t(Ee!=null),t(Ge!=null),Ee[0]=null,ke[0]=null,Ge[0]=0;;){if(he[0]=_e,ye[0]=xt,8>xt){he=7;break e}var vr=ve(Oe,_e+4);if(4294967286<vr){he=3;break e}var mt=8+vr+1&-2;if(pt+=mt,0<Ue&&pt>Ue){he=3;break e}if(!r(Oe,_e,"VP8 ")||!r(Oe,_e,"VP8L")){he=0;break e}if(xt[0]<mt){he=7;break e}r(Oe,_e,"ALPH")||(Ee[0]=Oe,ke[0]=_e+8,Ge[0]=vr),_e+=mt,xt-=mt}}if(g=g[0],ie.na=ie.na[0],ie.P=ie.P[0],ie.Sa=ie.Sa[0],he!=0)break}g=[g],ie.Ja=[ie.Ja],ie.xa=[ie.xa];e:if(Ue=s,he=u,ye=g,Ee=ie.gb[0],ke=ie.Ja,Ge=ie.xa,Oe=he[0],_e=!r(Ue,Oe,"VP8 "),pt=!r(Ue,Oe,"VP8L"),t(Ue!=null),t(ye!=null),t(ke!=null),t(Ge!=null),8>ye[0])he=7;else{if(_e||pt){if(Ue=ve(Ue,Oe+4),12<=Ee&&Ue>Ee-12){he=3;break e}if(U&&Ue>ye[0]-8){he=7;break e}ke[0]=Ue,he[0]+=8,ye[0]-=8,Ge[0]=pt}else Ge[0]=5<=ye[0]&&Ue[Oe+0]==47&&!(Ue[Oe+4]>>5),ke[0]=ye[0];he=0}if(g=g[0],ie.Ja=ie.Ja[0],ie.xa=ie.xa[0],u=u[0],he!=0)break;if(4294967286<ie.Ja)return 3;if(j==null||we||(j[0]=ie.xa?2:1),I=[I],le=[le],ie.xa){if(5>g){he=7;break}j=I,U=le,we=N,s==null||5>g?s=0:5<=g&&s[u+0]==47&&!(s[u+4]>>5)?(ye=[0],Ue=[0],Ee=[0],se(ke=new H,s,u,g),fn(ke,ye,Ue,Ee)?(j!=null&&(j[0]=ye[0]),U!=null&&(U[0]=Ue[0]),we!=null&&(we[0]=Ee[0]),s=1):s=0):s=0}else{if(10>g){he=7;break}j=le,s==null||10>g||!ko(s,u+3,g-3)?s=0:(U=s[u+0]|s[u+1]<<8|s[u+2]<<16,we=16383&(s[u+7]<<8|s[u+6]),s=16383&(s[u+9]<<8|s[u+8]),1&U||3<(U>>1&7)||!(U>>4&1)||U>>5>=ie.Ja||!we||!s?s=0:(I&&(I[0]=we),j&&(j[0]=s),s=1))}if(!s||(I=I[0],le=le[0],fe&&(B[0]!=I||te[0]!=le)))return 3;D!=null&&(D[0]=ie,D.offset=u-D.w,t(4294967286>u-D.w),t(D.offset==D.ha-g));break}return he==0||he==7&&fe&&D==null?(N!=null&&(N[0]|=ie.na!=null&&0<ie.na.length),x!=null&&(x[0]=I),A!=null&&(A[0]=le),0):he}function pa(s,u,g){var x=u.width,A=u.height,N=0,I=0,j=x,D=A;if(u.Da=s!=null&&0<s.Da,u.Da&&(j=s.cd,D=s.bd,N=s.v,I=s.j,11>g||(N&=-2,I&=-2),0>N||0>I||0>=j||0>=D||N+j>x||I+D>A))return 0;if(u.v=N,u.j=I,u.va=N+j,u.o=I+D,u.U=j,u.T=D,u.da=s!=null&&0<s.da,u.da){if(!qe(j,D,g=[s.ib],N=[s.hb]))return 0;u.ib=g[0],u.hb=N[0]}return u.ob=s!=null&&s.ob,u.Kb=s==null||!s.Sd,u.da&&(u.ob=u.ib<3*x/4&&u.hb<3*A/4,u.Kb=0),1}function ma(s){if(s==null)return 2;if(11>s.S){var u=s.f.RGBA;u.fb+=(s.height-1)*u.A,u.A=-u.A}else u=s.f.kb,s=s.height,u.O+=(s-1)*u.fa,u.fa=-u.fa,u.N+=(s-1>>1)*u.Ab,u.Ab=-u.Ab,u.W+=(s-1>>1)*u.Db,u.Db=-u.Db,u.F!=null&&(u.J+=(s-1)*u.lb,u.lb=-u.lb);return 0}function ki(s,u,g,x){if(x==null||0>=s||0>=u)return 2;if(g!=null){if(g.Da){var A=g.cd,N=g.bd,I=-2&g.v,j=-2&g.j;if(0>I||0>j||0>=A||0>=N||I+A>s||j+N>u)return 2;s=A,u=N}if(g.da){if(!qe(s,u,A=[g.ib],N=[g.hb]))return 2;s=A[0],u=N[0]}}x.width=s,x.height=u;e:{var D=x.width,B=x.height;if(s=x.S,0>=D||0>=B||!(s>=ns&&13>s))s=2;else{if(0>=x.Rd&&x.sd==null){I=N=A=u=0;var te=(j=D*Cu[s])*B;if(11>s||(N=(B+1)/2*(u=(D+1)/2),s==12&&(I=(A=D)*B)),(B=a(te+2*N+I))==null){s=1;break e}x.sd=B,11>s?((D=x.f.RGBA).eb=B,D.fb=0,D.A=j,D.size=te):((D=x.f.kb).y=B,D.O=0,D.fa=j,D.Fd=te,D.f=B,D.N=0+te,D.Ab=u,D.Cd=N,D.ea=B,D.W=0+te+N,D.Db=u,D.Ed=N,s==12&&(D.F=B,D.J=0+te+2*N),D.Tc=I,D.lb=A)}if(u=1,A=x.S,N=x.width,I=x.height,A>=ns&&13>A)if(11>A)s=x.f.RGBA,u&=(j=Math.abs(s.A))*(I-1)+N<=s.size,u&=j>=N*Cu[A],u&=s.eb!=null;else{s=x.f.kb,j=(N+1)/2,te=(I+1)/2,D=Math.abs(s.fa),B=Math.abs(s.Ab);var fe=Math.abs(s.Db),U=Math.abs(s.lb),ie=U*(I-1)+N;u&=D*(I-1)+N<=s.Fd,u&=B*(te-1)+j<=s.Cd,u=(u&=fe*(te-1)+j<=s.Ed)&D>=N&B>=j&fe>=j,u&=s.y!=null,u&=s.f!=null,u&=s.ea!=null,A==12&&(u&=U>=N,u&=ie<=s.Tc,u&=s.F!=null)}else u=0;s=u?0:2}}return s!=0||g!=null&&g.fd&&(s=ma(x)),s}var uo=64,Kr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],en=24,Li=32,si=8,Ni=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];je("Predictor0","PredictorAdd0"),M.Predictor0=function(){return 4278190080},M.Predictor1=function(s){return s},M.Predictor2=function(s,u,g){return u[g+0]},M.Predictor3=function(s,u,g){return u[g+1]},M.Predictor4=function(s,u,g){return u[g-1]},M.Predictor5=function(s,u,g){return De(De(s,u[g+1]),u[g+0])},M.Predictor6=function(s,u,g){return De(s,u[g-1])},M.Predictor7=function(s,u,g){return De(s,u[g+0])},M.Predictor8=function(s,u,g){return De(u[g-1],u[g+0])},M.Predictor9=function(s,u,g){return De(u[g+0],u[g+1])},M.Predictor10=function(s,u,g){return De(De(s,u[g-1]),De(u[g+0],u[g+1]))},M.Predictor11=function(s,u,g){var x=u[g+0];return 0>=tt(x>>24&255,s>>24&255,(u=u[g-1])>>24&255)+tt(x>>16&255,s>>16&255,u>>16&255)+tt(x>>8&255,s>>8&255,u>>8&255)+tt(255&x,255&s,255&u)?x:s},M.Predictor12=function(s,u,g){var x=u[g+0];return(gt((s>>24&255)+(x>>24&255)-((u=u[g-1])>>24&255))<<24|gt((s>>16&255)+(x>>16&255)-(u>>16&255))<<16|gt((s>>8&255)+(x>>8&255)-(u>>8&255))<<8|gt((255&s)+(255&x)-(255&u)))>>>0},M.Predictor13=function(s,u,g){var x=u[g-1];return(it((s=De(s,u[g+0]))>>24&255,x>>24&255)<<24|it(s>>16&255,x>>16&255)<<16|it(s>>8&255,x>>8&255)<<8|it(255&s,255&x))>>>0};var ga=M.PredictorAdd0;M.PredictorAdd1=_t,je("Predictor2","PredictorAdd2"),je("Predictor3","PredictorAdd3"),je("Predictor4","PredictorAdd4"),je("Predictor5","PredictorAdd5"),je("Predictor6","PredictorAdd6"),je("Predictor7","PredictorAdd7"),je("Predictor8","PredictorAdd8"),je("Predictor9","PredictorAdd9"),je("Predictor10","PredictorAdd10"),je("Predictor11","PredictorAdd11"),je("Predictor12","PredictorAdd12"),je("Predictor13","PredictorAdd13");var Do=M.PredictorAdd2;We("ColorIndexInverseTransform","MapARGB","32b",function(s){return s>>8&255},function(s){return s}),We("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(s){return s},function(s){return s>>8&255});var tr,es=M.ColorIndexInverseTransform,zn=M.MapARGB,Bn=M.VP8LColorIndexInverseTransformAlpha,va=M.MapAlpha,ba=M.VP8LPredictorsAdd=[];ba.length=16,(M.VP8LPredictors=[]).length=16,(M.VP8LPredictorsAdd_C=[]).length=16,(M.VP8LPredictors_C=[]).length=16;var xa,wa,Ei,Ii,Pi,ho,Ti,fo,wn,Un,kt,Rt,rr,gr,li,ya,zo,ts,Kc,eu,tu,ru,nu,iu,Sa,ou,au,su,lu=a(511),cu=a(2041),uu=a(225),hu=a(767),fu=0,gl=cu,rs=uu,tn=hu,yn=lu,ns=0,is=1,du=2,os=3,as=4,vl=5,pu=6,bl=7,xl=8,ss=9,wl=10,L2=[2,3,7],N2=[3,3,11],mu=[280,256,256,256,40],E2=[0,1,1,1,0],I2=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],P2=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],T2=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],j2=8,yl=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],Sl=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],_a=null,R2=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],M2=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],gu=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],O2=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],F2=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],D2=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],z2=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],ji=[],kn=[],ci=[],B2=1,vu=2,Ri=[],Sn=[];Vr("UpsampleRgbLinePair",oo,3),Vr("UpsampleBgrLinePair",ao,3),Vr("UpsampleRgbaLinePair",da,4),Vr("UpsampleBgraLinePair",fa,4),Vr("UpsampleArgbLinePair",lo,4),Vr("UpsampleRgba4444LinePair",so,2),Vr("UpsampleRgb565LinePair",kr,2);var U2=M.UpsampleRgbLinePair,H2=M.UpsampleBgrLinePair,bu=M.UpsampleRgbaLinePair,xu=M.UpsampleBgraLinePair,wu=M.UpsampleArgbLinePair,yu=M.UpsampleRgba4444LinePair,q2=M.UpsampleRgb565LinePair,ls=16,cs=1<<ls-1,Ca=-227,_l=482,$2=6,Su=0,V2=a(256),W2=a(256),G2=a(256),Y2=a(256),X2=a(_l-Ca),Z2=a(_l-Ca);ai("YuvToRgbRow",oo,3),ai("YuvToBgrRow",ao,3),ai("YuvToRgbaRow",da,4),ai("YuvToBgraRow",fa,4),ai("YuvToArgbRow",lo,4),ai("YuvToRgba4444Row",so,2),ai("YuvToRgb565Row",kr,2);var _u=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],us=[0,2,8],J2=[8,7,6,4,4,2,2,2,1,1,1,1],Q2=1;this.WebPDecodeRGBA=function(s,u,g,x,A){var N=is,I=new ae,j=new Nt;I.ba=j,j.S=N,j.width=[j.width],j.height=[j.height];var D=j.width,B=j.height,te=new Qe;if(te==null||s==null)var fe=2;else t(te!=null),fe=co(s,u,g,te.width,te.height,te.Pd,te.Qd,te.format,null);if(fe!=0?D=0:(D!=null&&(D[0]=te.width[0]),B!=null&&(B[0]=te.height[0]),D=1),D){j.width=j.width[0],j.height=j.height[0],x!=null&&(x[0]=j.width),A!=null&&(A[0]=j.height);e:{if(x=new ei,(A=new Se).data=s,A.w=u,A.ha=g,A.kd=1,u=[0],t(A!=null),((s=co(A.data,A.w,A.ha,null,null,null,u,null,A))==0||s==7)&&u[0]&&(s=4),(u=s)==0){if(t(I!=null),x.data=A.data,x.w=A.w+A.offset,x.ha=A.ha-A.offset,x.put=Ze,x.ac=Xr,x.bc=hn,x.ma=I,A.xa){if((s=Xn())==null){I=1;break e}if(function(U,ie){var le=[0],we=[0],he=[0];t:for(;;){if(U==null)return 0;if(ie==null)return U.a=2,0;if(U.l=ie,U.a=0,se(U.m,ie.data,ie.w,ie.ha),!fn(U.m,le,we,he)){U.a=3;break t}if(U.xb=vu,ie.width=le[0],ie.height=we[0],!Qr(le[0],we[0],1,U,null))break t;return 1}return t(U.a!=0),0}(s,x)){if(x=(u=ki(x.width,x.height,I.Oa,I.ba))==0){t:{x=s;r:for(;;){if(x==null){x=0;break t}if(t(x.s.yc!=null),t(x.s.Ya!=null),t(0<x.s.Wb),t((g=x.l)!=null),t((A=g.ma)!=null),x.xb!=0){if(x.ca=A.ba,x.tb=A.tb,t(x.ca!=null),!pa(A.Oa,g,os)){x.a=2;break r}if(!Cn(x,g.width)||g.da)break r;if((g.da||lt(x.ca.S))&&bn(),11>x.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),x.ca.f.kb.F!=null&&bn()),x.Pb&&0<x.s.ua&&x.s.vb.X==null&&!W(x.s.vb,x.s.Wa.Xa)){x.a=1;break r}x.xb=0}if(!Jr(x,x.V,x.Ba,x.c,x.i,g.o,On))break r;A.Dc=x.Ma,x=1;break t}t(x.a!=0),x=0}x=!x}x&&(u=s.a)}else u=s.a}else{if((s=new ra)==null){I=1;break e}if(s.Fa=A.na,s.P=A.P,s.qc=A.Sa,Lo(s,x)){if((u=ki(x.width,x.height,I.Oa,I.ba))==0){if(s.Aa=0,g=I.Oa,t((A=s)!=null),g!=null){if(0<(D=0>(D=g.Md)?0:100<D?255:255*D/100)){for(B=te=0;4>B;++B)12>(fe=A.pb[B]).lc&&(fe.ia=D*J2[0>fe.lc?0:fe.lc]>>3),te|=fe.ia;te&&(alert("todo:VP8InitRandom"),A.ia=1)}A.Ga=g.Id,100<A.Ga?A.Ga=100:0>A.Ga&&(A.Ga=0)}(function(U,ie){if(U==null)return 0;if(ie==null)return $t(U,2,"NULL VP8Io parameter in VP8Decode().");if(!U.cb&&!Lo(U,ie))return 0;if(t(U.cb),ie.ac==null||ie.ac(ie)){ie.ob&&(U.L=0);var le=us[U.L];if(U.L==2?(U.yb=0,U.zb=0):(U.yb=ie.v-le>>4,U.zb=ie.j-le>>4,0>U.yb&&(U.yb=0),0>U.zb&&(U.zb=0)),U.Va=ie.o+15+le>>4,U.Hb=ie.va+15+le>>4,U.Hb>U.za&&(U.Hb=U.za),U.Va>U.Ub&&(U.Va=U.Ub),0<U.L){var we=U.ed;for(le=0;4>le;++le){var he;if(U.Qa.Cb){var ye=U.Qa.Lb[le];U.Qa.Fb||(ye+=we.Tb)}else ye=we.Tb;for(he=0;1>=he;++he){var _e=U.gd[le][he],Ee=ye;if(we.Pc&&(Ee+=we.vd[0],he&&(Ee+=we.od[0])),0<(Ee=0>Ee?0:63<Ee?63:Ee)){var ke=Ee;0<we.wb&&(ke=4<we.wb?ke>>2:ke>>1)>9-we.wb&&(ke=9-we.wb),1>ke&&(ke=1),_e.dd=ke,_e.tc=2*Ee+ke,_e.ld=40<=Ee?2:15<=Ee?1:0}else _e.tc=0;_e.La=he}}}le=0}else $t(U,6,"Frame setup failed"),le=U.a;if(le=le==0){if(le){U.$c=0,0<U.Aa||(U.Ic=Q2);t:{le=U.Ic,we=4*(ke=U.za);var Ge=32*ke,Oe=ke+1,pt=0<U.L?ke*(0<U.Aa?2:1):0,Ue=(U.Aa==2?2:1)*ke;if((_e=we+832+(he=3*(16*le+us[U.L])/2*Ge)+(ye=U.Fa!=null&&0<U.Fa.length?U.Kc.c*U.Kc.i:0))!=_e)le=0;else{if(_e>U.Vb){if(U.Vb=0,U.Ec=a(_e),U.Fc=0,U.Ec==null){le=$t(U,1,"no memory during frame initialization.");break t}U.Vb=_e}_e=U.Ec,Ee=U.Fc,U.Ac=_e,U.Bc=Ee,Ee+=we,U.Gd=c(Ge,Xi),U.Hd=0,U.rb=c(Oe+1,Qn),U.sb=1,U.wa=pt?c(pt,Fr):null,U.Y=0,U.D.Nb=0,U.D.wa=U.wa,U.D.Y=U.Y,0<U.Aa&&(U.D.Y+=ke),t(!0),U.oc=_e,U.pc=Ee,Ee+=832,U.ya=c(Ue,Kn),U.aa=0,U.D.ya=U.ya,U.D.aa=U.aa,U.Aa==2&&(U.D.aa+=ke),U.R=16*ke,U.B=8*ke,ke=(Ge=us[U.L])*U.R,Ge=Ge/2*U.B,U.sa=_e,U.ta=Ee+ke,U.qa=U.sa,U.ra=U.ta+16*le*U.R+Ge,U.Ha=U.qa,U.Ia=U.ra+8*le*U.B+Ge,U.$c=0,Ee+=he,U.mb=ye?_e:null,U.nb=ye?Ee:null,t(Ee+ye<=U.Fc+U.Vb),ti(U),o(U.Ac,U.Bc,0,we),le=1}}if(le){if(ie.ka=0,ie.y=U.sa,ie.O=U.ta,ie.f=U.qa,ie.N=U.ra,ie.ea=U.Ha,ie.Vd=U.Ia,ie.fa=U.R,ie.Rc=U.B,ie.F=null,ie.J=0,!fu){for(le=-255;255>=le;++le)lu[255+le]=0>le?-le:le;for(le=-1020;1020>=le;++le)cu[1020+le]=-128>le?-128:127<le?127:le;for(le=-112;112>=le;++le)uu[112+le]=-16>le?-16:15<le?15:le;for(le=-255;510>=le;++le)hu[255+le]=0>le?0:255<le?255:le;fu=1}Ti=me,fo=No,Un=ia,kt=pn,Rt=Eo,wn=na,rr=Xa,gr=Za,li=m,ya=C,zo=ro,ts=Ja,Kc=q,eu=Z,tu=ha,ru=to,nu=Ga,iu=Ya,kn[0]=Po,kn[1]=ur,kn[2]=oa,kn[3]=Io,kn[4]=To,kn[5]=gn,kn[6]=mn,kn[7]=aa,kn[8]=vn,kn[9]=sa,ji[0]=pr,ji[1]=$r,ji[2]=Zi,ji[3]=_i,ji[4]=Ji,ji[5]=ni,ji[6]=Ci,ci[0]=Ro,ci[1]=An,ci[2]=Dn,ci[3]=Qi,ci[4]=la,ci[5]=ml,ci[6]=ca,le=1}else le=0}le&&(le=function(xt,vr){for(xt.M=0;xt.M<xt.Va;++xt.M){var mt,He=xt.Jc[xt.M&xt.Xb],Re=xt.m,nr=xt;for(mt=0;mt<nr.za;++mt){var ht=Re,wt=nr,zt=wt.Ac,Sr=wt.Bc+4*mt,zr=wt.zc,Jt=wt.ya[wt.aa+mt];if(wt.Qa.Bb?Jt.$b=xe(ht,wt.Pa.jb[0])?2+xe(ht,wt.Pa.jb[2]):xe(ht,wt.Pa.jb[1]):Jt.$b=0,wt.kc&&(Jt.Ad=xe(ht,wt.Bd)),Jt.Za=!xe(ht,145)+0,Jt.Za){var Lr=Jt.Ob,Br=0;for(wt=0;4>wt;++wt){var br,St=zr[0+wt];for(br=0;4>br;++br){St=F2[zt[Sr+br]][St];for(var Et=gu[xe(ht,St[0])];0<Et;)Et=gu[2*Et+xe(ht,St[Et])];St=-Et,zt[Sr+br]=St}n(Lr,Br,zt,Sr,4),Br+=4,zr[0+wt]=St}}else St=xe(ht,156)?xe(ht,128)?1:3:xe(ht,163)?2:0,Jt.Ob[0]=St,o(zt,Sr,St,4),o(zr,0,St,4);Jt.Dd=xe(ht,142)?xe(ht,114)?xe(ht,183)?1:3:2:0}if(nr.m.Ka)return $t(xt,7,"Premature end-of-partition0 encountered.");for(;xt.ja<xt.za;++xt.ja){if(nr=He,ht=(Re=xt).rb[Re.sb-1],zt=Re.rb[Re.sb+Re.ja],mt=Re.ya[Re.aa+Re.ja],Sr=Re.kc?mt.Ad:0)ht.la=zt.la=0,mt.Za||(ht.Na=zt.Na=0),mt.Hc=0,mt.Gc=0,mt.ia=0;else{var Qt,It;if(ht=zt,zt=nr,Sr=Re.Pa.Xc,zr=Re.ya[Re.aa+Re.ja],Jt=Re.pb[zr.$b],wt=zr.ad,Lr=0,Br=Re.rb[Re.sb-1],St=br=0,o(wt,Lr,0,384),zr.Za)var _r=0,Ln=Sr[3];else{Et=a(16);var ir=ht.Na+Br.Na;if(ir=_a(zt,Sr[1],ir,Jt.Eb,0,Et,0),ht.Na=Br.Na=(0<ir)+0,1<ir)Ti(Et,0,wt,Lr);else{var Wr=Et[0]+3>>3;for(Et=0;256>Et;Et+=16)wt[Lr+Et]=Wr}_r=1,Ln=Sr[0]}var Mt=15&ht.la,xr=15&Br.la;for(Et=0;4>Et;++Et){var rn=1&xr;for(Wr=It=0;4>Wr;++Wr)Mt=Mt>>1|(rn=(ir=_a(zt,Ln,ir=rn+(1&Mt),Jt.Sc,_r,wt,Lr))>_r)<<7,It=It<<2|(3<ir?3:1<ir?2:wt[Lr+0]!=0),Lr+=16;Mt>>=4,xr=xr>>1|rn<<7,br=(br<<8|It)>>>0}for(Ln=Mt,_r=xr>>4,Qt=0;4>Qt;Qt+=2){for(It=0,Mt=ht.la>>4+Qt,xr=Br.la>>4+Qt,Et=0;2>Et;++Et){for(rn=1&xr,Wr=0;2>Wr;++Wr)ir=rn+(1&Mt),Mt=Mt>>1|(rn=0<(ir=_a(zt,Sr[2],ir,Jt.Qc,0,wt,Lr)))<<3,It=It<<2|(3<ir?3:1<ir?2:wt[Lr+0]!=0),Lr+=16;Mt>>=2,xr=xr>>1|rn<<5}St|=It<<4*Qt,Ln|=Mt<<4<<Qt,_r|=(240&xr)<<Qt}ht.la=Ln,Br.la=_r,zr.Hc=br,zr.Gc=St,zr.ia=43690&St?0:Jt.ia,Sr=!(br|St)}if(0<Re.L&&(Re.wa[Re.Y+Re.ja]=Re.gd[mt.$b][mt.Za],Re.wa[Re.Y+Re.ja].La|=!Sr),nr.Ka)return $t(xt,7,"Premature end-of-file encountered.")}if(ti(xt),Re=vr,nr=1,mt=(He=xt).D,ht=0<He.L&&He.M>=He.zb&&He.M<=He.Va,He.Aa==0)t:{if(mt.M=He.M,mt.uc=ht,xn(He,mt),nr=1,mt=(It=He.D).Nb,ht=(St=us[He.L])*He.R,zt=St/2*He.B,Et=16*mt*He.R,Wr=8*mt*He.B,Sr=He.sa,zr=He.ta-ht+Et,Jt=He.qa,wt=He.ra-zt+Wr,Lr=He.Ha,Br=He.Ia-zt+Wr,xr=(Mt=It.M)==0,br=Mt>=He.Va-1,He.Aa==2&&xn(He,It),It.uc)for(rn=(ir=He).D.M,t(ir.D.uc),It=ir.yb;It<ir.Hb;++It){_r=It,Ln=rn;var Ur=(nn=(Cr=ir).D).Nb;Qt=Cr.R;var nn=nn.wa[nn.Y+_r],on=Cr.sa,Gr=Cr.ta+16*Ur*Qt+16*_r,an=nn.dd,Dt=nn.tc;if(Dt!=0)if(t(3<=Dt),Cr.L==1)0<_r&&ru(on,Gr,Qt,Dt+4),nn.La&&iu(on,Gr,Qt,Dt),0<Ln&&tu(on,Gr,Qt,Dt+4),nn.La&&nu(on,Gr,Qt,Dt);else{var sn=Cr.B,Nn=Cr.qa,po=Cr.ra+8*Ur*sn+8*_r,ui=Cr.Ha,Cr=Cr.Ia+8*Ur*sn+8*_r;Ur=nn.ld,0<_r&&(gr(on,Gr,Qt,Dt+4,an,Ur),ya(Nn,po,ui,Cr,sn,Dt+4,an,Ur)),nn.La&&(ts(on,Gr,Qt,Dt,an,Ur),eu(Nn,po,ui,Cr,sn,Dt,an,Ur)),0<Ln&&(rr(on,Gr,Qt,Dt+4,an,Ur),li(Nn,po,ui,Cr,sn,Dt+4,an,Ur)),nn.La&&(zo(on,Gr,Qt,Dt,an,Ur),Kc(Nn,po,ui,Cr,sn,Dt,an,Ur))}}if(He.ia&&alert("todo:DitherRow"),Re.put!=null){if(It=16*Mt,Mt=16*(Mt+1),xr?(Re.y=He.sa,Re.O=He.ta+Et,Re.f=He.qa,Re.N=He.ra+Wr,Re.ea=He.Ha,Re.W=He.Ia+Wr):(It-=St,Re.y=Sr,Re.O=zr,Re.f=Jt,Re.N=wt,Re.ea=Lr,Re.W=Br),br||(Mt-=St),Mt>Re.o&&(Mt=Re.o),Re.F=null,Re.J=null,He.Fa!=null&&0<He.Fa.length&&It<Mt&&(Re.J=hr(He,Re,It,Mt-It),Re.F=He.mb,Re.F==null&&Re.F.length==0)){nr=$t(He,3,"Could not decode alpha data.");break t}It<Re.j&&(St=Re.j-It,It=Re.j,t(!(1&St)),Re.O+=He.R*St,Re.N+=He.B*(St>>1),Re.W+=He.B*(St>>1),Re.F!=null&&(Re.J+=Re.width*St)),It<Mt&&(Re.O+=Re.v,Re.N+=Re.v>>1,Re.W+=Re.v>>1,Re.F!=null&&(Re.J+=Re.v),Re.ka=It-Re.j,Re.U=Re.va-Re.v,Re.T=Mt-It,nr=Re.put(Re))}mt+1!=He.Ic||br||(n(He.sa,He.ta-ht,Sr,zr+16*He.R,ht),n(He.qa,He.ra-zt,Jt,wt+8*He.B,zt),n(He.Ha,He.Ia-zt,Lr,Br+8*He.B,zt))}if(!nr)return $t(xt,6,"Output aborted.")}return 1}(U,ie)),ie.bc!=null&&ie.bc(ie),le&=1}return le?(U.cb=0,le):0})(s,x)||(u=s.a)}}else u=s.a}u==0&&I.Oa!=null&&I.Oa.fd&&(u=ma(I.ba))}I=u}N=I!=0?null:11>N?j.f.RGBA.eb:j.f.kb.y}else N=null;return N};var Cu=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(M,J){for(var E="",F=0;F<4;F++)E+=String.fromCharCode(M[J++]);return E}function p(M,J){return M[J+0]|M[J+1]<<8}function w(M,J){return(M[J+0]|M[J+1]<<8|M[J+2]<<16)>>>0}function S(M,J){return(M[J+0]|M[J+1]<<8|M[J+2]<<16|M[J+3]<<24)>>>0}new h;var d=[0],b=[0],_=[],k=new h,y=e,R=function(M,J){var E={},F=0,G=!1,$=0,oe=0;if(E.frames=[],!function(L,H){for(var V=0;V<4;V++)if(L[H+V]!="RIFF".charCodeAt(V))return!0;return!1}(M,J)){for(S(M,J+=4),J+=8;J<M.length;){var ce=f(M,J),de=S(M,J+=4);J+=4;var ee=de+(1&de);switch(ce){case"VP8 ":case"VP8L":E.frames[F]===void 0&&(E.frames[F]={}),(be=E.frames[F]).src_off=G?oe:J-8,be.src_size=$+de+8,F++,G&&(G=!1,$=0,oe=0);break;case"VP8X":(be=E.header={}).feature_flags=M[J];var se=J+4;be.canvas_width=1+w(M,se),se+=3,be.canvas_height=1+w(M,se),se+=3;break;case"ALPH":G=!0,$=ee+8,oe=J-8;break;case"ANIM":(be=E.header).bgcolor=S(M,J),se=J+4,be.loop_count=p(M,se),se+=2;break;case"ANMF":var Ce,be;(be=E.frames[F]={}).offset_x=2*w(M,J),J+=3,be.offset_y=2*w(M,J),J+=3,be.width=1+w(M,J),J+=3,be.height=1+w(M,J),J+=3,be.duration=w(M,J),J+=3,Ce=M[J++],be.dispose=1&Ce,be.blend=Ce>>1&1}ce!="ANMF"&&(J+=ee)}return E}}(y,0);R.response=y,R.rgbaoutput=!0,R.dataurl=!1;var P=R.header?R.header:null,T=R.frames?R.frames:null;if(P){P.loop_counter=P.loop_count,d=[P.canvas_height],b=[P.canvas_width];for(var Y=0;Y<T.length&&T[Y].blend!=0;Y++);}var K=T[0],ne=k.WebPDecodeRGBA(y,K.src_off,K.src_size,b,d);K.rgba=ne,K.imgwidth=b[0],K.imgheight=d[0];for(var X=0;X<b[0]*d[0]*4;X++)_[X]=ne[X];return this.width=b,this.height=d,this.data=_,this}(function(e){var t,r,n,o,a,c,l,h,f,p=function(L){return L=L||{},this.isStrokeTransparent=L.isStrokeTransparent||!1,this.strokeOpacity=L.strokeOpacity||1,this.strokeStyle=L.strokeStyle||"#000000",this.fillStyle=L.fillStyle||"#000000",this.isFillTransparent=L.isFillTransparent||!1,this.fillOpacity=L.fillOpacity||1,this.font=L.font||"10px sans-serif",this.textBaseline=L.textBaseline||"alphabetic",this.textAlign=L.textAlign||"left",this.lineWidth=L.lineWidth||1,this.lineJoin=L.lineJoin||"miter",this.lineCap=L.lineCap||"butt",this.path=L.path||[],this.transform=L.transform!==void 0?L.transform.clone():new h,this.globalCompositeOperation=L.globalCompositeOperation||"normal",this.globalAlpha=L.globalAlpha||1,this.clip_path=L.clip_path||[],this.currentPoint=L.currentPoint||new c,this.miterLimit=L.miterLimit||10,this.lastPoint=L.lastPoint||new c,this.lineDashOffset=L.lineDashOffset||0,this.lineDash=L.lineDash||[],this.margin=L.margin||[0,0,0,0],this.prevPageLastElemOffset=L.prevPageLastElemOffset||0,this.ignoreClearRect=typeof L.ignoreClearRect!="boolean"||L.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new w(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,a=this.internal.getVerticalCoordinate,c=this.internal.Point,l=this.internal.Rectangle,h=this.internal.Matrix,f=new p}]);var w=function(L){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var H=L;Object.defineProperty(this,"pdf",{get:function(){return H}});var V=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return V},set:function(ve){V=!!ve}});var Q=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return Q},set:function(ve){Q=!!ve}});var re=0;Object.defineProperty(this,"posX",{get:function(){return re},set:function(ve){isNaN(ve)||(re=ve)}});var ue=0;Object.defineProperty(this,"posY",{get:function(){return ue},set:function(ve){isNaN(ve)||(ue=ve)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(ve){var W;typeof ve=="number"?W=[ve,ve,ve,ve]:((W=new Array(4))[0]=ve[0],W[1]=ve.length>=2?ve[1]:W[0],W[2]=ve.length>=3?ve[2]:W[0],W[3]=ve.length>=4?ve[3]:W[1]),f.margin=W}});var ge=!1;Object.defineProperty(this,"autoPaging",{get:function(){return ge},set:function(ve){ge=ve}});var pe=0;Object.defineProperty(this,"lastBreak",{get:function(){return pe},set:function(ve){pe=ve}});var xe=[];Object.defineProperty(this,"pageBreaks",{get:function(){return xe},set:function(ve){xe=ve}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(ve){ve instanceof p&&(f=ve)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(ve){f.path=ve}});var Ae=[];Object.defineProperty(this,"ctxStack",{get:function(){return Ae},set:function(ve){Ae=ve}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(ve){var W;W=S(ve),this.ctx.fillStyle=W.style,this.ctx.isFillTransparent=W.a===0,this.ctx.fillOpacity=W.a,this.pdf.setFillColor(W.r,W.g,W.b,{a:W.a}),this.pdf.setTextColor(W.r,W.g,W.b,{a:W.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(ve){var W=S(ve);this.ctx.strokeStyle=W.style,this.ctx.isStrokeTransparent=W.a===0,this.ctx.strokeOpacity=W.a,W.a===0?this.pdf.setDrawColor(255,255,255):(W.a,this.pdf.setDrawColor(W.r,W.g,W.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(ve){["butt","round","square"].indexOf(ve)!==-1&&(this.ctx.lineCap=ve,this.pdf.setLineCap(ve))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(ve){isNaN(ve)||(this.ctx.lineWidth=ve,this.pdf.setLineWidth(ve))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(ve){["bevel","round","miter"].indexOf(ve)!==-1&&(this.ctx.lineJoin=ve,this.pdf.setLineJoin(ve))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(ve){isNaN(ve)||(this.ctx.miterLimit=ve,this.pdf.setMiterLimit(ve))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(ve){this.ctx.textBaseline=ve}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(ve){["right","end","center","left","start"].indexOf(ve)!==-1&&(this.ctx.textAlign=ve)}});var Ie=null,Te=null;Object.defineProperty(this,"fontFaces",{get:function(){return Te},set:function(ve){Ie=null,Te=ve}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(ve){var W;if(this.ctx.font=ve,(W=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ve))!==null){var ft=W[1];W[2];var Ke=W[3],qe=W[4];W[5];var Ne=W[6],Me=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(qe)[2];qe=Math.floor(Me==="px"?parseFloat(qe)*this.pdf.internal.scaleFactor:Me==="em"?parseFloat(qe)*this.pdf.getFontSize():parseFloat(qe)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(qe);var je=function(Je){var We,At,yt=[],Be=Je.trim();if(Be==="")return tc;if(Be in rh)return[rh[Be]];for(;Be!=="";){switch(At=null,We=(Be=ih(Be)).charAt(0)){case'"':case"'":At=mv(Be.substring(1),We);break;default:At=gv(Be)}if(At===null||(yt.push(At[0]),(Be=ih(At[1]))!==""&&Be.charAt(0)!==","))return tc;Be=Be.replace(/^,/,"")}return yt}(Ne);if(this.fontFaces){var nt=function(Je,We){if(Ie===null){var At=function(yt){var Be=[];return Object.keys(yt).forEach(function(at){yt[at].forEach(function(Lt){var Xe=null;switch(Lt){case"bold":Xe={family:at,weight:"bold"};break;case"italic":Xe={family:at,style:"italic"};break;case"bolditalic":Xe={family:at,weight:"bold",style:"italic"};break;case"":case"normal":Xe={family:at}}Xe!==null&&(Xe.ref={name:at,style:Lt},Be.push(Xe))})}),Be}(Je.getFontList());Ie=function(yt){for(var Be={},at=0;at<yt.length;++at){var Lt=ec(yt[at]),Xe=Lt.family,vt=Lt.stretch,lt=Lt.style,Ht=Lt.weight;Be[Xe]=Be[Xe]||{},Be[Xe][vt]=Be[Xe][vt]||{},Be[Xe][vt][lt]=Be[Xe][vt][lt]||{},Be[Xe][vt][lt][Ht]=Lt}return Be}(At.concat(We))}return Ie}(this.pdf,this.fontFaces),De=je.map(function(Je){return{family:Je,stretch:"normal",weight:Ke,style:ft}}),gt=function(Je,We,At){for(var yt=(At=At||{}).defaultFontFamily||"times",Be=Object.assign({},pv,At.genericFontFamilies||{}),at=null,Lt=null,Xe=0;Xe<We.length;++Xe)if(Be[(at=ec(We[Xe])).family]&&(at.family=Be[at.family]),Je.hasOwnProperty(at.family)){Lt=Je[at.family];break}if(!(Lt=Lt||Je[yt]))throw new Error("Could not find a font-family for the rule '"+nh(at)+"' and default family '"+yt+"'.");if(Lt=function(vt,lt){if(lt[vt])return lt[vt];var Ht=kc[vt],Xt=Ht<=kc.normal?-1:1,Nt=th(lt,v2,Ht,Xt);if(!Nt)throw new Error("Could not find a matching font-stretch value for "+vt);return Nt}(at.stretch,Lt),Lt=function(vt,lt){if(lt[vt])return lt[vt];for(var Ht=g2[vt],Xt=0;Xt<Ht.length;++Xt)if(lt[Ht[Xt]])return lt[Ht[Xt]];throw new Error("Could not find a matching font-style for "+vt)}(at.style,Lt),!(Lt=function(vt,lt){if(lt[vt])return lt[vt];if(vt===400&&lt[500])return lt[500];if(vt===500&&lt[400])return lt[400];var Ht=dv[vt],Xt=th(lt,b2,Ht,vt<400?-1:1);if(!Xt)throw new Error("Could not find a matching font-weight for value "+vt);return Xt}(at.weight,Lt)))throw new Error("Failed to resolve a font for the rule '"+nh(at)+"'.");return Lt}(nt,De);this.pdf.setFont(gt.ref.name,gt.ref.style)}else{var it="";(Ke==="bold"||parseInt(Ke,10)>=700||ft==="bold")&&(it="bold"),ft==="italic"&&(it+="italic"),it.length===0&&(it="normal");for(var tt="",_t={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},ot=0;ot<je.length;ot++){if(this.pdf.internal.getFont(je[ot],it,{noFallback:!0,disableWarning:!0})!==void 0){tt=je[ot];break}if(it==="bolditalic"&&this.pdf.internal.getFont(je[ot],"bold",{noFallback:!0,disableWarning:!0})!==void 0)tt=je[ot],it="bold";else if(this.pdf.internal.getFont(je[ot],"normal",{noFallback:!0,disableWarning:!0})!==void 0){tt=je[ot],it="normal";break}}if(tt===""){for(var Ve=0;Ve<je.length;Ve++)if(_t[je[Ve]]){tt=_t[je[Ve]];break}}tt=tt===""?"Times":tt,this.pdf.setFont(tt,it)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(ve){this.ctx.globalCompositeOperation=ve}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(ve){this.ctx.globalAlpha=ve}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(ve){this.ctx.lineDashOffset=ve,be.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(ve){this.ctx.lineDash=ve,be.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(ve){this.ctx.ignoreClearRect=!!ve}})};w.prototype.setLineDash=function(L){this.lineDash=L},w.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},w.prototype.fill=function(){T.call(this,"fill",!1)},w.prototype.stroke=function(){T.call(this,"stroke",!1)},w.prototype.beginPath=function(){this.path=[{type:"begin"}]},w.prototype.moveTo=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var V=this.ctx.transform.applyToPoint(new c(L,H));this.path.push({type:"mt",x:V.x,y:V.y}),this.ctx.lastPoint=new c(L,H)},w.prototype.closePath=function(){var L=new c(0,0),H=0;for(H=this.path.length-1;H!==-1;H--)if(this.path[H].type==="begin"&&Pt(this.path[H+1])==="object"&&typeof this.path[H+1].x=="number"){L=new c(this.path[H+1].x,this.path[H+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new c(L.x,L.y)},w.prototype.lineTo=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var V=this.ctx.transform.applyToPoint(new c(L,H));this.path.push({type:"lt",x:V.x,y:V.y}),this.ctx.lastPoint=new c(V.x,V.y)},w.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),T.call(this,null,!0)},w.prototype.quadraticCurveTo=function(L,H,V,Q){if(isNaN(V)||isNaN(Q)||isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var re=this.ctx.transform.applyToPoint(new c(V,Q)),ue=this.ctx.transform.applyToPoint(new c(L,H));this.path.push({type:"qct",x1:ue.x,y1:ue.y,x:re.x,y:re.y}),this.ctx.lastPoint=new c(re.x,re.y)},w.prototype.bezierCurveTo=function(L,H,V,Q,re,ue){if(isNaN(re)||isNaN(ue)||isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var ge=this.ctx.transform.applyToPoint(new c(re,ue)),pe=this.ctx.transform.applyToPoint(new c(L,H)),xe=this.ctx.transform.applyToPoint(new c(V,Q));this.path.push({type:"bct",x1:pe.x,y1:pe.y,x2:xe.x,y2:xe.y,x:ge.x,y:ge.y}),this.ctx.lastPoint=new c(ge.x,ge.y)},w.prototype.arc=function(L,H,V,Q,re,ue){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q)||isNaN(re))throw Ot.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ue=!!ue,!this.ctx.transform.isIdentity){var ge=this.ctx.transform.applyToPoint(new c(L,H));L=ge.x,H=ge.y;var pe=this.ctx.transform.applyToPoint(new c(0,V)),xe=this.ctx.transform.applyToPoint(new c(0,0));V=Math.sqrt(Math.pow(pe.x-xe.x,2)+Math.pow(pe.y-xe.y,2))}Math.abs(re-Q)>=2*Math.PI&&(Q=0,re=2*Math.PI),this.path.push({type:"arc",x:L,y:H,radius:V,startAngle:Q,endAngle:re,counterclockwise:ue})},w.prototype.arcTo=function(L,H,V,Q,re){throw new Error("arcTo not implemented.")},w.prototype.rect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(L,H),this.lineTo(L+V,H),this.lineTo(L+V,H+Q),this.lineTo(L,H+Q),this.lineTo(L,H),this.lineTo(L+V,H),this.lineTo(L,H)},w.prototype.fillRect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!d.call(this)){var re={};this.lineCap!=="butt"&&(re.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(re.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(L,H,V,Q),this.fill(),re.hasOwnProperty("lineCap")&&(this.lineCap=re.lineCap),re.hasOwnProperty("lineJoin")&&(this.lineJoin=re.lineJoin)}},w.prototype.strokeRect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");b.call(this)||(this.beginPath(),this.rect(L,H,V,Q),this.stroke())},w.prototype.clearRect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(L,H,V,Q))},w.prototype.save=function(L){L=typeof L!="boolean"||L;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,V=0;V<this.pdf.internal.getNumberOfPages();V++)this.pdf.setPage(V+1),this.pdf.internal.out("q");if(this.pdf.setPage(H),L){this.ctx.fontSize=this.pdf.internal.getFontSize();var Q=new p(this.ctx);this.ctxStack.push(this.ctx),this.ctx=Q}},w.prototype.restore=function(L){L=typeof L!="boolean"||L;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,V=0;V<this.pdf.internal.getNumberOfPages();V++)this.pdf.setPage(V+1),this.pdf.internal.out("Q");this.pdf.setPage(H),L&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},w.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var S=function(L){var H,V,Q,re;if(L.isCanvasGradient===!0&&(L=L.getColor()),!L)return{r:0,g:0,b:0,a:0,style:L};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L))H=0,V=0,Q=0,re=0;else{var ue=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);if(ue!==null)H=parseInt(ue[1]),V=parseInt(ue[2]),Q=parseInt(ue[3]),re=1;else if((ue=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L))!==null)H=parseInt(ue[1]),V=parseInt(ue[2]),Q=parseInt(ue[3]),re=parseFloat(ue[4]);else{if(re=1,typeof L=="string"&&L.charAt(0)!=="#"){var ge=new c2(L);L=ge.ok?ge.toHex():"#000000"}L.length===4?(H=L.substring(1,2),H+=H,V=L.substring(2,3),V+=V,Q=L.substring(3,4),Q+=Q):(H=L.substring(1,3),V=L.substring(3,5),Q=L.substring(5,7)),H=parseInt(H,16),V=parseInt(V,16),Q=parseInt(Q,16)}}return{r:H,g:V,b:Q,a:re,style:L}},d=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},b=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};w.prototype.fillText=function(L,H,V,Q){if(isNaN(H)||isNaN(V)||typeof L!="string")throw Ot.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(Q=isNaN(Q)?void 0:Q,!d.call(this)){var re=ee(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;F.call(this,{text:L,x:H,y:V,scale:ue,angle:re,align:this.textAlign,maxWidth:Q})}},w.prototype.strokeText=function(L,H,V,Q){if(isNaN(H)||isNaN(V)||typeof L!="string")throw Ot.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!b.call(this)){Q=isNaN(Q)?void 0:Q;var re=ee(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;F.call(this,{text:L,x:H,y:V,scale:ue,renderingMode:"stroke",angle:re,align:this.textAlign,maxWidth:Q})}},w.prototype.measureText=function(L){if(typeof L!="string")throw Ot.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var H=this.pdf,V=this.pdf.internal.scaleFactor,Q=H.internal.getFontSize(),re=H.getStringUnitWidth(L)*Q/H.internal.scaleFactor;return new function(ue){var ge=(ue=ue||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return ge}}),this}({width:re*=Math.round(96*V/72*1e4)/1e4})},w.prototype.scale=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var V=new h(L,0,0,H,0,0);this.ctx.transform=this.ctx.transform.multiply(V)},w.prototype.rotate=function(L){if(isNaN(L))throw Ot.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var H=new h(Math.cos(L),Math.sin(L),-Math.sin(L),Math.cos(L),0,0);this.ctx.transform=this.ctx.transform.multiply(H)},w.prototype.translate=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var V=new h(1,0,0,1,L,H);this.ctx.transform=this.ctx.transform.multiply(V)},w.prototype.transform=function(L,H,V,Q,re,ue){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q)||isNaN(re)||isNaN(ue))throw Ot.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var ge=new h(L,H,V,Q,re,ue);this.ctx.transform=this.ctx.transform.multiply(ge)},w.prototype.setTransform=function(L,H,V,Q,re,ue){L=isNaN(L)?1:L,H=isNaN(H)?0:H,V=isNaN(V)?0:V,Q=isNaN(Q)?1:Q,re=isNaN(re)?0:re,ue=isNaN(ue)?0:ue,this.ctx.transform=new h(L,H,V,Q,re,ue)};var _=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};w.prototype.drawImage=function(L,H,V,Q,re,ue,ge,pe,xe){var Ae=this.pdf.getImageProperties(L),Ie=1,Te=1,ve=1,W=1;Q!==void 0&&pe!==void 0&&(ve=pe/Q,W=xe/re,Ie=Ae.width/Q*pe/Q,Te=Ae.height/re*xe/re),ue===void 0&&(ue=H,ge=V,H=0,V=0),Q!==void 0&&pe===void 0&&(pe=Q,xe=re),Q===void 0&&pe===void 0&&(pe=Ae.width,xe=Ae.height);for(var ft,Ke=this.ctx.transform.decompose(),qe=ee(Ke.rotate.shx),Ne=new h,Me=(Ne=(Ne=(Ne=Ne.multiply(Ke.translate)).multiply(Ke.skew)).multiply(Ke.scale)).applyToRectangle(new l(ue-H*ve,ge-V*W,Q*Ie,re*Te)),je=k.call(this,Me),nt=[],De=0;De<je.length;De+=1)nt.indexOf(je[De])===-1&&nt.push(je[De]);if(P(nt),this.autoPaging)for(var gt=nt[0],it=nt[nt.length-1],tt=gt;tt<it+1;tt++){this.pdf.setPage(tt);var _t=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],ot=tt===1?this.posY+this.margin[0]:this.margin[0],Ve=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Je=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],We=tt===1?0:Ve+(tt-2)*Je;if(this.ctx.clip_path.length!==0){var At=this.path;ft=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(ft,this.posX+this.margin[3],-We+ot+this.ctx.prevPageLastElemOffset),Y.call(this,"fill",!0),this.path=At}var yt=JSON.parse(JSON.stringify(Me));yt=R([yt],this.posX+this.margin[3],-We+ot+this.ctx.prevPageLastElemOffset)[0];var Be=(tt>gt||tt<it)&&_.call(this);Be&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],_t,Je,null).clip().discardPath()),this.pdf.addImage(L,"JPEG",yt.x,yt.y,yt.w,yt.h,null,null,qe),Be&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(L,"JPEG",Me.x,Me.y,Me.w,Me.h,null,null,qe)};var k=function(L,H,V){var Q=[];H=H||this.pdf.internal.pageSize.width,V=V||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var re=this.posY+this.ctx.prevPageLastElemOffset;switch(L.type){default:case"mt":case"lt":Q.push(Math.floor((L.y+re)/V)+1);break;case"arc":Q.push(Math.floor((L.y+re-L.radius)/V)+1),Q.push(Math.floor((L.y+re+L.radius)/V)+1);break;case"qct":var ue=se(this.ctx.lastPoint.x,this.ctx.lastPoint.y,L.x1,L.y1,L.x,L.y);Q.push(Math.floor((ue.y+re)/V)+1),Q.push(Math.floor((ue.y+ue.h+re)/V)+1);break;case"bct":var ge=Ce(this.ctx.lastPoint.x,this.ctx.lastPoint.y,L.x1,L.y1,L.x2,L.y2,L.x,L.y);Q.push(Math.floor((ge.y+re)/V)+1),Q.push(Math.floor((ge.y+ge.h+re)/V)+1);break;case"rect":Q.push(Math.floor((L.y+re)/V)+1),Q.push(Math.floor((L.y+L.h+re)/V)+1)}for(var pe=0;pe<Q.length;pe+=1)for(;this.pdf.internal.getNumberOfPages()<Q[pe];)y.call(this);return Q},y=function(){var L=this.fillStyle,H=this.strokeStyle,V=this.font,Q=this.lineCap,re=this.lineWidth,ue=this.lineJoin;this.pdf.addPage(),this.fillStyle=L,this.strokeStyle=H,this.font=V,this.lineCap=Q,this.lineWidth=re,this.lineJoin=ue},R=function(L,H,V){for(var Q=0;Q<L.length;Q++)switch(L[Q].type){case"bct":L[Q].x2+=H,L[Q].y2+=V;case"qct":L[Q].x1+=H,L[Q].y1+=V;default:L[Q].x+=H,L[Q].y+=V}return L},P=function(L){return L.sort(function(H,V){return H-V})},T=function(L,H){for(var V,Q,re=this.fillStyle,ue=this.strokeStyle,ge=this.lineCap,pe=this.lineWidth,xe=Math.abs(pe*this.ctx.transform.scaleX),Ae=this.lineJoin,Ie=JSON.parse(JSON.stringify(this.path)),Te=JSON.parse(JSON.stringify(this.path)),ve=[],W=0;W<Te.length;W++)if(Te[W].x!==void 0)for(var ft=k.call(this,Te[W]),Ke=0;Ke<ft.length;Ke+=1)ve.indexOf(ft[Ke])===-1&&ve.push(ft[Ke]);for(var qe=0;qe<ve.length;qe++)for(;this.pdf.internal.getNumberOfPages()<ve[qe];)y.call(this);if(P(ve),this.autoPaging)for(var Ne=ve[0],Me=ve[ve.length-1],je=Ne;je<Me+1;je++){this.pdf.setPage(je),this.fillStyle=re,this.strokeStyle=ue,this.lineCap=ge,this.lineWidth=xe,this.lineJoin=Ae;var nt=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],De=je===1?this.posY+this.margin[0]:this.margin[0],gt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],it=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],tt=je===1?0:gt+(je-2)*it;if(this.ctx.clip_path.length!==0){var _t=this.path;V=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(V,this.posX+this.margin[3],-tt+De+this.ctx.prevPageLastElemOffset),Y.call(this,L,!0),this.path=_t}if(Q=JSON.parse(JSON.stringify(Ie)),this.path=R(Q,this.posX+this.margin[3],-tt+De+this.ctx.prevPageLastElemOffset),H===!1||je===0){var ot=(je>Ne||je<Me)&&_.call(this);ot&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],nt,it,null).clip().discardPath()),Y.call(this,L,H),ot&&this.pdf.restoreGraphicsState()}this.lineWidth=pe}else this.lineWidth=xe,Y.call(this,L,H),this.lineWidth=pe;this.path=Ie},Y=function(L,H){if((L!=="stroke"||H||!b.call(this))&&(L==="stroke"||H||!d.call(this))){for(var V,Q,re=[],ue=this.path,ge=0;ge<ue.length;ge++){var pe=ue[ge];switch(pe.type){case"begin":re.push({begin:!0});break;case"close":re.push({close:!0});break;case"mt":re.push({start:pe,deltas:[],abs:[]});break;case"lt":var xe=re.length;if(ue[ge-1]&&!isNaN(ue[ge-1].x)&&(V=[pe.x-ue[ge-1].x,pe.y-ue[ge-1].y],xe>0)){for(;xe>=0;xe--)if(re[xe-1].close!==!0&&re[xe-1].begin!==!0){re[xe-1].deltas.push(V),re[xe-1].abs.push(pe);break}}break;case"bct":V=[pe.x1-ue[ge-1].x,pe.y1-ue[ge-1].y,pe.x2-ue[ge-1].x,pe.y2-ue[ge-1].y,pe.x-ue[ge-1].x,pe.y-ue[ge-1].y],re[re.length-1].deltas.push(V);break;case"qct":var Ae=ue[ge-1].x+2/3*(pe.x1-ue[ge-1].x),Ie=ue[ge-1].y+2/3*(pe.y1-ue[ge-1].y),Te=pe.x+2/3*(pe.x1-pe.x),ve=pe.y+2/3*(pe.y1-pe.y),W=pe.x,ft=pe.y;V=[Ae-ue[ge-1].x,Ie-ue[ge-1].y,Te-ue[ge-1].x,ve-ue[ge-1].y,W-ue[ge-1].x,ft-ue[ge-1].y],re[re.length-1].deltas.push(V);break;case"arc":re.push({deltas:[],abs:[],arc:!0}),Array.isArray(re[re.length-1].abs)&&re[re.length-1].abs.push(pe)}}Q=H?null:L==="stroke"?"stroke":"fill";for(var Ke=!1,qe=0;qe<re.length;qe++)if(re[qe].arc)for(var Ne=re[qe].abs,Me=0;Me<Ne.length;Me++){var je=Ne[Me];je.type==="arc"?X.call(this,je.x,je.y,je.radius,je.startAngle,je.endAngle,je.counterclockwise,void 0,H,!Ke):G.call(this,je.x,je.y),Ke=!0}else if(re[qe].close===!0)this.pdf.internal.out("h"),Ke=!1;else if(re[qe].begin!==!0){var nt=re[qe].start.x,De=re[qe].start.y;$.call(this,re[qe].deltas,nt,De),Ke=!0}Q&&M.call(this,Q),H&&J.call(this)}},K=function(L){var H=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,V=H*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return L-V;case"top":return L+H-V;case"hanging":return L+H-2*V;case"middle":return L+H/2-V;default:return L}},ne=function(L){return L+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};w.prototype.createLinearGradient=function(){var L=function(){};return L.colorStops=[],L.addColorStop=function(H,V){this.colorStops.push([H,V])},L.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},L.isCanvasGradient=!0,L},w.prototype.createPattern=function(){return this.createLinearGradient()},w.prototype.createRadialGradient=function(){return this.createLinearGradient()};var X=function(L,H,V,Q,re,ue,ge,pe,xe){for(var Ae=ce.call(this,V,Q,re,ue),Ie=0;Ie<Ae.length;Ie++){var Te=Ae[Ie];Ie===0&&(xe?E.call(this,Te.x1+L,Te.y1+H):G.call(this,Te.x1+L,Te.y1+H)),oe.call(this,L,H,Te.x2,Te.y2,Te.x3,Te.y3,Te.x4,Te.y4)}pe?J.call(this):M.call(this,ge)},M=function(L){switch(L){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},J=function(){this.pdf.clip(),this.pdf.discardPath()},E=function(L,H){this.pdf.internal.out(r(L)+" "+n(H)+" m")},F=function(L){var H;switch(L.align){case"right":case"end":H="right";break;case"center":H="center";break;default:H="left"}var V=this.pdf.getTextDimensions(L.text),Q=K.call(this,L.y),re=ne.call(this,Q)-V.h,ue=this.ctx.transform.applyToPoint(new c(L.x,Q)),ge=this.ctx.transform.decompose(),pe=new h;pe=(pe=(pe=pe.multiply(ge.translate)).multiply(ge.skew)).multiply(ge.scale);for(var xe,Ae,Ie,Te=this.ctx.transform.applyToRectangle(new l(L.x,Q,V.w,V.h)),ve=pe.applyToRectangle(new l(L.x,re,V.w,V.h)),W=k.call(this,ve),ft=[],Ke=0;Ke<W.length;Ke+=1)ft.indexOf(W[Ke])===-1&&ft.push(W[Ke]);if(P(ft),this.autoPaging)for(var qe=ft[0],Ne=ft[ft.length-1],Me=qe;Me<Ne+1;Me++){this.pdf.setPage(Me);var je=Me===1?this.posY+this.margin[0]:this.margin[0],nt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],De=this.pdf.internal.pageSize.height-this.margin[2],gt=De-this.margin[0],it=this.pdf.internal.pageSize.width-this.margin[1],tt=it-this.margin[3],_t=Me===1?0:nt+(Me-2)*gt;if(this.ctx.clip_path.length!==0){var ot=this.path;xe=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(xe,this.posX+this.margin[3],-1*_t+je),Y.call(this,"fill",!0),this.path=ot}var Ve=R([JSON.parse(JSON.stringify(ve))],this.posX+this.margin[3],-_t+je+this.ctx.prevPageLastElemOffset)[0];L.scale>=.01&&(Ae=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ae*L.scale),Ie=this.lineWidth,this.lineWidth=Ie*L.scale);var Je=this.autoPaging!=="text";if(Je||Ve.y+Ve.h<=De){if(Je||Ve.y>=je&&Ve.x<=it){var We=Je?L.text:this.pdf.splitTextToSize(L.text,L.maxWidth||it-Ve.x)[0],At=R([JSON.parse(JSON.stringify(Te))],this.posX+this.margin[3],-_t+je+this.ctx.prevPageLastElemOffset)[0],yt=Je&&(Me>qe||Me<Ne)&&_.call(this);yt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],tt,gt,null).clip().discardPath()),this.pdf.text(We,At.x,At.y,{angle:L.angle,align:H,renderingMode:L.renderingMode}),yt&&this.pdf.restoreGraphicsState()}}else Ve.y<De&&(this.ctx.prevPageLastElemOffset+=De-Ve.y);L.scale>=.01&&(this.pdf.setFontSize(Ae),this.lineWidth=Ie)}else L.scale>=.01&&(Ae=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ae*L.scale),Ie=this.lineWidth,this.lineWidth=Ie*L.scale),this.pdf.text(L.text,ue.x+this.posX,ue.y+this.posY,{angle:L.angle,align:H,renderingMode:L.renderingMode,maxWidth:L.maxWidth}),L.scale>=.01&&(this.pdf.setFontSize(Ae),this.lineWidth=Ie)},G=function(L,H,V,Q){V=V||0,Q=Q||0,this.pdf.internal.out(r(L+V)+" "+n(H+Q)+" l")},$=function(L,H,V){return this.pdf.lines(L,H,V,null,null)},oe=function(L,H,V,Q,re,ue,ge,pe){this.pdf.internal.out([t(o(V+L)),t(a(Q+H)),t(o(re+L)),t(a(ue+H)),t(o(ge+L)),t(a(pe+H)),"c"].join(" "))},ce=function(L,H,V,Q){for(var re=2*Math.PI,ue=Math.PI/2;H>V;)H-=re;var ge=Math.abs(V-H);ge<re&&Q&&(ge=re-ge);for(var pe=[],xe=Q?-1:1,Ae=H;ge>1e-5;){var Ie=Ae+xe*Math.min(ge,ue);pe.push(de.call(this,L,Ae,Ie)),ge-=Math.abs(Ie-Ae),Ae=Ie}return pe},de=function(L,H,V){var Q=(V-H)/2,re=L*Math.cos(Q),ue=L*Math.sin(Q),ge=re,pe=-ue,xe=ge*ge+pe*pe,Ae=xe+ge*re+pe*ue,Ie=4/3*(Math.sqrt(2*xe*Ae)-Ae)/(ge*ue-pe*re),Te=ge-Ie*pe,ve=pe+Ie*ge,W=Te,ft=-ve,Ke=Q+H,qe=Math.cos(Ke),Ne=Math.sin(Ke);return{x1:L*Math.cos(H),y1:L*Math.sin(H),x2:Te*qe-ve*Ne,y2:Te*Ne+ve*qe,x3:W*qe-ft*Ne,y3:W*Ne+ft*qe,x4:L*Math.cos(V),y4:L*Math.sin(V)}},ee=function(L){return 180*L/Math.PI},se=function(L,H,V,Q,re,ue){var ge=L+.5*(V-L),pe=H+.5*(Q-H),xe=re+.5*(V-re),Ae=ue+.5*(Q-ue),Ie=Math.min(L,re,ge,xe),Te=Math.max(L,re,ge,xe),ve=Math.min(H,ue,pe,Ae),W=Math.max(H,ue,pe,Ae);return new l(Ie,ve,Te-Ie,W-ve)},Ce=function(L,H,V,Q,re,ue,ge,pe){var xe,Ae,Ie,Te,ve,W,ft,Ke,qe,Ne,Me,je,nt,De,gt=V-L,it=Q-H,tt=re-V,_t=ue-Q,ot=ge-re,Ve=pe-ue;for(Ae=0;Ae<41;Ae++)qe=(ft=(Ie=L+(xe=Ae/40)*gt)+xe*((ve=V+xe*tt)-Ie))+xe*(ve+xe*(re+xe*ot-ve)-ft),Ne=(Ke=(Te=H+xe*it)+xe*((W=Q+xe*_t)-Te))+xe*(W+xe*(ue+xe*Ve-W)-Ke),Ae==0?(Me=qe,je=Ne,nt=qe,De=Ne):(Me=Math.min(Me,qe),je=Math.min(je,Ne),nt=Math.max(nt,qe),De=Math.max(De,Ne));return new l(Math.round(Me),Math.round(je),Math.round(nt-Me),Math.round(De-je))},be=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var L,H,V=(L=this.ctx.lineDash,H=this.ctx.lineDashOffset,JSON.stringify({lineDash:L,lineDashOffset:H}));this.prevLineDash!==V&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=V)}}})(Ye.API),function(e){var t=function(c){var l,h,f,p,w,S,d,b,_,k;for(h=[],f=0,p=(c+=l="\0\0\0\0".slice(c.length%4||4)).length;p>f;f+=4)(w=(c.charCodeAt(f)<<24)+(c.charCodeAt(f+1)<<16)+(c.charCodeAt(f+2)<<8)+c.charCodeAt(f+3))!==0?(S=(w=((w=((w=((w=(w-(k=w%85))/85)-(_=w%85))/85)-(b=w%85))/85)-(d=w%85))/85)%85,h.push(S+33,d+33,b+33,_+33,k+33)):h.push(122);return function(y,R){for(var P=R;P>0;P--)y.pop()}(h,l.length),String.fromCharCode.apply(String,h)+"~>"},r=function(c){var l,h,f,p,w,S=String,d="length",b=255,_="charCodeAt",k="slice",y="replace";for(c[k](-2),c=c[k](0,-2)[y](/\s/g,"")[y]("z","!!!!!"),f=[],p=0,w=(c+=l="uuuuu"[k](c[d]%5||5))[d];w>p;p+=5)h=52200625*(c[_](p)-33)+614125*(c[_](p+1)-33)+7225*(c[_](p+2)-33)+85*(c[_](p+3)-33)+(c[_](p+4)-33),f.push(b&h>>24,b&h>>16,b&h>>8,b&h);return function(R,P){for(var T=P;T>0;T--)R.pop()}(f,l[d]),S.fromCharCode.apply(S,f)},n=function(c){return c.split("").map(function(l){return("0"+l.charCodeAt().toString(16)).slice(-2)}).join("")+">"},o=function(c){var l=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((c=c.replace(/\s/g,"")).indexOf(">")!==-1&&(c=c.substr(0,c.indexOf(">"))),c.length%2&&(c+="0"),l.test(c)===!1)return"";for(var h="",f=0;f<c.length;f+=2)h+=String.fromCharCode("0x"+(c[f]+c[f+1]));return h},a=function(c){for(var l=new Uint8Array(c.length),h=c.length;h--;)l[h]=c.charCodeAt(h);return(l=xc(l)).reduce(function(f,p){return f+String.fromCharCode(p)},"")};e.processDataByFilters=function(c,l){var h=0,f=c||"",p=[];for(typeof(l=l||[])=="string"&&(l=[l]),h=0;h<l.length;h+=1)switch(l[h]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),p.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),p.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=o(f),p.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),p.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=a(f),p.push("/FlateDecode");break;default:throw new Error('The filter: "'+l[h]+'" is not implemented')}return{data:f,reverseChain:p.reverse().join(" ")}}}(Ye.API),function(e){e.loadFile=function(t,r,n){return function(o,a,c){a=a!==!1,c=typeof c=="function"?c:function(){};var l=void 0;try{l=function(h,f,p){var w=new XMLHttpRequest,S=0,d=function(b){var _=b.length,k=[],y=String.fromCharCode;for(S=0;S<_;S+=1)k.push(y(255&b.charCodeAt(S)));return k.join("")};if(w.open("GET",h,!f),w.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(w.onload=function(){w.status===200?p(d(this.responseText)):p(void 0)}),w.send(null),f&&w.status===200)return d(w.responseText)}(o,a,c)}catch{}return l}(t,r,n)},e.loadImageFile=e.loadFile}(Ye.API),function(e){function t(){return(rt.html2canvas?Promise.resolve(rt.html2canvas):Ol(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load html2canvas: "+l))}).then(function(l){return l.default?l.default:l})}function r(){return(rt.DOMPurify?Promise.resolve(rt.DOMPurify):Ol(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(l){return Promise.reject(new Error("Could not load dompurify: "+l))}).then(function(l){return l.default?l.default:l})}var n=function(l){var h=Pt(l);return h==="undefined"?"undefined":h==="string"||l instanceof String?"string":h==="number"||l instanceof Number?"number":h==="function"||l instanceof Function?"function":l&&l.constructor===Array?"array":l&&l.nodeType===1?"element":h==="object"?"object":"unknown"},o=function(l,h){var f=document.createElement(l);for(var p in h.className&&(f.className=h.className),h.innerHTML&&h.dompurify&&(f.innerHTML=h.dompurify.sanitize(h.innerHTML)),h.style)f.style[p]=h.style[p];return f},a=function l(h,f){for(var p=h.nodeType===3?document.createTextNode(h.nodeValue):h.cloneNode(!1),w=h.firstChild;w;w=w.nextSibling)f!==!0&&w.nodeType===1&&w.nodeName==="SCRIPT"||p.appendChild(l(w,f));return h.nodeType===1&&(h.nodeName==="CANVAS"?(p.width=h.width,p.height=h.height,p.getContext("2d").drawImage(h,0,0)):h.nodeName!=="TEXTAREA"&&h.nodeName!=="SELECT"||(p.value=h.value),p.addEventListener("load",function(){p.scrollTop=h.scrollTop,p.scrollLeft=h.scrollLeft},!0)),p},c=function l(h){var f=Object.assign(l.convert(Promise.resolve()),JSON.parse(JSON.stringify(l.template))),p=l.convert(Promise.resolve(),f);return(p=p.setProgress(1,l,1,[l])).set(h)};(c.prototype=Object.create(Promise.prototype)).constructor=c,c.convert=function(l,h){return l.__proto__=h||c.prototype,l},c.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},c.prototype.from=function(l,h){return this.then(function(){switch(h=h||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(l),h){case"string":return this.then(r).then(function(f){return this.set({src:o("div",{innerHTML:l,dompurify:f})})});case"element":return this.set({src:l});case"canvas":return this.set({canvas:l});case"img":return this.set({img:l});default:return this.error("Unknown source type.")}})},c.prototype.to=function(l){switch(l){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},c.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var l={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},h=a(this.prop.src,this.opt.html2canvas.javascriptEnabled);h.tagName==="BODY"&&(l.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:l}),this.prop.container.appendChild(h),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},c.prototype.toCanvas=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,h(this.prop.container,f)}).then(function(h){(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toContext2d=function(){var l=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(l).then(t).then(function(h){var f=this.opt.jsPDF,p=this.opt.fontFaces,w=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,S=Object.assign({async:!0,allowTaint:!0,scale:w,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete S.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=p,p)for(var d=0;d<p.length;++d){var b=p[d],_=b.src.find(function(k){return k.format==="truetype"});_&&f.addFont(_.url,b.ref.name,b.ref.style)}return S.windowHeight=S.windowHeight||0,S.windowHeight=S.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):S.windowHeight,f.context2d.save(!0),h(this.prop.container,S)}).then(function(h){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},c.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var l=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=l})},c.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},c.prototype.output=function(l,h,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(l,h):this.outputPdf(l,h)},c.prototype.outputPdf=function(l,h){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(l,h)})},c.prototype.outputImg=function(l){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(l){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+l+'" is not supported.'}})},c.prototype.save=function(l){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(l?{filename:l}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},c.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},c.prototype.set=function(l){if(n(l)!=="object")return this;var h=Object.keys(l||{}).map(function(f){if(f in c.template.prop)return function(){this.prop[f]=l[f]};switch(f){case"margin":return this.setMargin.bind(this,l.margin);case"jsPDF":return function(){return this.opt.jsPDF=l.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,l.pageSize);default:return function(){this.opt[f]=l[f]}}},this);return this.then(function(){return this.thenList(h)})},c.prototype.get=function(l,h){return this.then(function(){var f=l in c.template.prop?this.prop[l]:this.opt[l];return h?h(f):f})},c.prototype.setMargin=function(l){return this.then(function(){switch(n(l)){case"number":l=[l,l,l,l];case"array":if(l.length===2&&(l=[l[0],l[1],l[0],l[1]]),l.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=l}).then(this.setPageSize)},c.prototype.setPageSize=function(l){function h(f,p){return Math.floor(f*p/72*96)}return this.then(function(){(l=l||Ye.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(l.inner={width:l.width-this.opt.margin[1]-this.opt.margin[3],height:l.height-this.opt.margin[0]-this.opt.margin[2]},l.inner.px={width:h(l.inner.width,l.k),height:h(l.inner.height,l.k)},l.inner.ratio=l.inner.height/l.inner.width),this.prop.pageSize=l})},c.prototype.setProgress=function(l,h,f,p){return l!=null&&(this.progress.val=l),h!=null&&(this.progress.state=h),f!=null&&(this.progress.n=f),p!=null&&(this.progress.stack=p),this.progress.ratio=this.progress.val/this.progress.state,this},c.prototype.updateProgress=function(l,h,f,p){return this.setProgress(l?this.progress.val+l:null,h||null,f?this.progress.n+f:null,p?this.progress.stack.concat(p):null)},c.prototype.then=function(l,h){var f=this;return this.thenCore(l,h,function(p,w){return f.updateProgress(null,null,1,[p]),Promise.prototype.then.call(this,function(S){return f.updateProgress(null,p),S}).then(p,w).then(function(S){return f.updateProgress(1),S})})},c.prototype.thenCore=function(l,h,f){f=f||Promise.prototype.then;var p=this;l&&(l=l.bind(p)),h&&(h=h.bind(p));var w=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?p:c.convert(Object.assign({},p),Promise.prototype),S=f.call(w,l,h);return c.convert(S,p.__proto__)},c.prototype.thenExternal=function(l,h){return Promise.prototype.then.call(this,l,h)},c.prototype.thenList=function(l){var h=this;return l.forEach(function(f){h=h.thenCore(f)}),h},c.prototype.catch=function(l){l&&(l=l.bind(this));var h=Promise.prototype.catch.call(this,l);return c.convert(h,this)},c.prototype.catchExternal=function(l){return Promise.prototype.catch.call(this,l)},c.prototype.error=function(l){return this.then(function(){throw new Error(l)})},c.prototype.using=c.prototype.set,c.prototype.saveAs=c.prototype.save,c.prototype.export=c.prototype.output,c.prototype.run=c.prototype.then,Ye.getPageSize=function(l,h,f){if(Pt(l)==="object"){var p=l;l=p.orientation,h=p.unit||h,f=p.format||f}h=h||"mm",f=f||"a4",l=(""+(l||"P")).toLowerCase();var w,S=(""+f).toLowerCase(),d={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(h){case"pt":w=1;break;case"mm":w=72/25.4;break;case"cm":w=72/2.54;break;case"in":w=72;break;case"px":w=.75;break;case"pc":case"em":w=12;break;case"ex":w=6;break;default:throw"Invalid unit: "+h}var b,_=0,k=0;if(d.hasOwnProperty(S))_=d[S][1]/w,k=d[S][0]/w;else try{_=f[1],k=f[0]}catch{throw new Error("Invalid format: "+f)}if(l==="p"||l==="portrait")l="p",k>_&&(b=k,k=_,_=b);else{if(l!=="l"&&l!=="landscape")throw"Invalid orientation: "+l;l="l",_>k&&(b=k,k=_,_=b)}return{width:k,height:_,unit:h,k:w,orientation:l}},e.html=function(l,h){(h=h||{}).callback=h.callback||function(){},h.html2canvas=h.html2canvas||{},h.html2canvas.canvas=h.html2canvas.canvas||this.canvas,h.jsPDF=h.jsPDF||this,h.fontFaces=h.fontFaces?h.fontFaces.map(ec):null;var f=new c(h);return h.worker?f:f.from(l).doCallback()}}(Ye.API),Ye.API.addJS=function(e){return ah=e,this.internal.events.subscribe("postPutResources",function(){Fs=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(Fs+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),oh=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+ah+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){Fs!==void 0&&oh!==void 0&&this.internal.out("/Names <</JavaScript "+Fs+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var o=r.outline.render().split(/\r\n/),a=0;a<o.length;a++){var c=o[a],l=n.exec(c);if(l!=null){var h=l[1];r.internal.newObjectDeferredBegin(h,!1)}r.internal.write(c)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,p=[];for(a=0;a<f;a++){var w=r.internal.newObject();p.push(w);var S=r.internal.getPageInfo(a+1);r.internal.write("<< /D["+S.objId+" 0 R /XYZ null null null]>> endobj")}var d=r.internal.newObject();for(r.internal.write("<< /Names [ "),a=0;a<p.length;a++)r.internal.write("(page_"+(a+1)+")"+p[a]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+d+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,o,a){var c={title:o,options:a,children:[]};return n==null&&(n=this.root),n.children.push(c),c},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var o=0;o<n.children.length;o++)this.genIds_r(n.children[o])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var o=this.ctx.pdf.internal.getVerticalCoordinateString,a=0;a<n.children.length;a++){var c=n.children[a];this.objStart(c),this.line("/Title "+this.makeString(c.title)),this.line("/Parent "+this.makeRef(n)),a>0&&this.line("/Prev "+this.makeRef(n.children[a-1])),a<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[a+1])),c.children.length>0&&(this.line("/First "+this.makeRef(c.children[0])),this.line("/Last "+this.makeRef(c.children[c.children.length-1])));var l=this.count=this.count_r({count:0},c);if(l>0&&this.line("/Count "+l),c.options&&c.options.pageNumber){var h=r.internal.getPageInfo(c.options.pageNumber);this.line("/Dest ["+h.objId+" 0 R /XYZ 0 "+o(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,o){for(var a=0;a<o.children.length;a++)n.count++,this.count_r(n,o.children[a]);return n.count}}])}(Ye.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,o,a,c,l){var h,f=this.decode.DCT_DECODE,p=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=c||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,h=function(w){for(var S,d=256*w.charCodeAt(4)+w.charCodeAt(5),b=w.length,_={width:0,height:0,numcomponents:1},k=4;k<b;k+=2){if(k+=d,t.indexOf(w.charCodeAt(k+1))!==-1){S=256*w.charCodeAt(k+5)+w.charCodeAt(k+6),_={width:256*w.charCodeAt(k+7)+w.charCodeAt(k+8),height:S,numcomponents:w.charCodeAt(k+9)};break}d=256*w.charCodeAt(k+2)+w.charCodeAt(k+3)}return _}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),h.numcomponents){case 1:l=this.color_spaces.DEVICE_GRAY;break;case 4:l=this.color_spaces.DEVICE_CMYK;break;case 3:l=this.color_spaces.DEVICE_RGB}p={data:r,width:h.width,height:h.height,colorSpace:l,bitsPerComponent:8,filter:f,index:n,alias:o}}return p}}(Ye.API),Ye.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var o,a=K6(e,{checkCrc:!0}),c=a.width,l=a.height,h=a.channels,f=a.palette,p=a.depth;o=f&&h===1?function(X){for(var M=X.width,J=X.height,E=X.data,F=X.palette,G=X.depth,$=!1,oe=[],ce=[],de=void 0,ee=!1,se=0,Ce=0;Ce<F.length;Ce++){var be=u1(F[Ce],4),L=be[0],H=be[1],V=be[2],Q=be[3];oe.push(L,H,V),Q!=null&&(Q===0?(se++,ce.length<1&&ce.push(Ce)):Q<255&&(ee=!0))}if(ee||se>1){$=!0,ce=void 0;var re=M*J;de=new Uint8Array(re);for(var ue=new DataView(E.buffer),ge=0;ge<re;ge++){var pe=rc(ue,ge,G),xe=u1(F[pe],4)[3];de[ge]=xe}}else se===0&&(ce=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:$?8:void 0,colorBytes:E,alphaBytes:de,needSMask:$,palette:oe,mask:ce}}(a):h===2||h===4?function(X){for(var M=X.data,J=X.width,E=X.height,F=X.channels,G=X.depth,$=F===2?"DeviceGray":"DeviceRGB",oe=F-1,ce=J*E,de=oe,ee=ce*de,se=1*ce,Ce=Math.ceil(ee*G/8),be=Math.ceil(se*G/8),L=new Uint8Array(Ce),H=new Uint8Array(be),V=new DataView(M.buffer),Q=new DataView(L.buffer),re=new DataView(H.buffer),ue=!1,ge=0;ge<ce;ge++){for(var pe=ge*F,xe=0;xe<de;xe++)mh(Q,rc(V,pe+xe,G),ge*de+xe,G);var Ae=rc(V,pe+de,G);Ae<(1<<G)-1&&(ue=!0),mh(re,Ae,1*ge,G)}return{colorSpace:$,colorsPerPixel:oe,sMaskBitsPerComponent:ue?G:void 0,colorBytes:L,alphaBytes:H,needSMask:ue}}(a):function(X){var M=X.data,J=X.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:J,colorsPerPixel:J==="DeviceGray"?1:3,colorBytes:M instanceof Uint16Array?function(E){for(var F=E.length,G=new Uint8Array(2*F),$=new DataView(G.buffer,G.byteOffset,G.byteLength),oe=0;oe<F;oe++)$.setUint16(2*oe,E[oe],!1);return G}(M):M,needSMask:!1}}(a);var w,S,d,b=o,_=b.colorSpace,k=b.colorsPerPixel,y=b.sMaskBitsPerComponent,R=b.colorBytes,P=b.alphaBytes,T=b.needSMask,Y=b.palette,K=b.mask,ne=null;return n!==Ye.API.image_compression.NONE&&typeof xc=="function"?(ne=function(X){var M;switch(X){case Ye.API.image_compression.FAST:M=11;break;case Ye.API.image_compression.MEDIUM:M=13;break;case Ye.API.image_compression.SLOW:M=14;break;default:M=12}return M}(n),w=this.decode.FLATE_DECODE,S="/Predictor ".concat(ne," /Colors ").concat(k," /BitsPerComponent ").concat(p," /Columns ").concat(c),e=uh(R,Math.ceil(c*k*p/8),k,p,n),T&&(d=uh(P,Math.ceil(c*y/8),1,y,n))):(w=void 0,S=void 0,e=R,T&&(d=P)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:r,data:e,index:t,filter:w,decodeParameters:S,transparency:K,palette:Y,sMask:d,predictor:ne,width:c,height:l,bitsPerComponent:p,sMaskBitsPerComponent:y,colorSpace:_}}},function(e){e.processGIF89A=function(t,r,n,o){var a=new wv(t),c=a.width,l=a.height,h=[];a.decodeAndBlitFrameRGBA(0,h);var f={data:h,width:c,height:l},p=new nc(100).encode(f,100);return e.processJPEG.call(this,p,r,n,o)},e.processGIF87A=e.processGIF89A}(Ye.API),En.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:o,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},En.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Ot.log("bit decode error:"+r)}},En.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,o=0;o<t;o++)for(var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+8*o*4,l=0;l<8&&8*o+l<this.width;l++){var h=this.palette[a>>7-l&1];this.data[c+4*l]=h.blue,this.data[c+4*l+1]=h.green,this.data[c+4*l+2]=h.red,this.data[c+4*l+3]=255}r!==0&&(this.pos+=4-r)}},En.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<e;o++){var a=this.datav.getUint8(this.pos++,!0),c=n*this.width*4+2*o*4,l=a>>4,h=15&a,f=this.palette[l];if(this.data[c]=f.blue,this.data[c+1]=f.green,this.data[c+2]=f.red,this.data[c+3]=255,2*o+1>=this.width)break;f=this.palette[h],this.data[c+4]=f.blue,this.data[c+4+1]=f.green,this.data[c+4+2]=f.red,this.data[c+4+3]=255}t!==0&&(this.pos+=4-t)}},En.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(o<this.palette.length){var c=this.palette[o];this.data[a]=c.red,this.data[a+1]=c.green,this.data[a+2]=c.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}e!==0&&(this.pos+=4-e)}},En.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(a&t)/t*255|0,l=(a>>5&t)/t*255|0,h=(a>>10&t)/t*255|0,f=a>>15?255:0,p=n*this.width*4+4*o;this.data[p]=h,this.data[p+1]=l,this.data[p+2]=c,this.data[p+3]=f}this.pos+=e}},En.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var o=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var c=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(c&t)/t*255|0,h=(c>>5&r)/r*255|0,f=(c>>11)/t*255|0,p=o*this.width*4+4*a;this.data[p]=f,this.data[p+1]=h,this.data[p+2]=l,this.data[p+3]=255}this.pos+=e}},En.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=a,this.data[c+1]=o,this.data[c+2]=n,this.data[c+3]=255}this.pos+=this.width%4}},En.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=a,this.data[l+1]=o,this.data[l+2]=n,this.data[l+3]=c}},En.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,o){var a=new En(t,!1),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new nc(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ye.API),vh.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,o){var a=new vh(t),c=a.width,l=a.height,h={data:a.getData(),width:c,height:l},f=new nc(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ye.API),Ye.API.processRGBA=function(e,t,r){for(var n=e.data,o=n.length,a=new Uint8Array(o/4*3),c=new Uint8Array(o/4),l=0,h=0,f=0;f<o;f+=4){var p=n[f],w=n[f+1],S=n[f+2],d=n[f+3];a[l++]=p,a[l++]=w,a[l++]=S,c[h++]=d}var b=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(c),data:b,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},Ye.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Vo=Ye.API,Ds=Vo.getCharWidthsArray=function(e,t){var r,n,o=(t=t||{}).font||this.internal.getFont(),a=t.fontSize||this.internal.getFontSize(),c=t.charSpace||this.internal.getCharSpace(),l=t.widths?t.widths:o.metadata.Unicode.widths,h=l.fof?l.fof:1,f=t.kerning?t.kerning:o.metadata.Unicode.kerning,p=f.fof?f.fof:1,w=t.doKerning!==!1,S=0,d=e.length,b=0,_=l[0]||h,k=[];for(r=0;r<d;r++)n=e.charCodeAt(r),typeof o.metadata.widthOfString=="function"?k.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(n))+c*(1e3/a)||0)/1e3):(S=w&&Pt(f[n])==="object"&&!isNaN(parseInt(f[n][b],10))?f[n][b]/p:0,k.push((l[n]||_)/h+S)),b=n;return k},sh=Vo.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),o=t.charSpace||this.internal.getCharSpace();return Vo.processArabic&&(e=Vo.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,o)/r:Ds.apply(this,arguments).reduce(function(a,c){return a+c},0)},lh=function(e,t,r,n){for(var o=[],a=0,c=e.length,l=0;a!==c&&l+t[a]<r;)l+=t[a],a++;o.push(e.slice(0,a));var h=a;for(l=0;a!==c;)l+t[a]>n&&(o.push(e.slice(h,a)),l=0,h=a),l+=t[a],a++;return h!==a&&o.push(e.slice(h,a)),o},ch=function(e,t,r){r||(r={});var n,o,a,c,l,h,f,p=[],w=[p],S=r.textIndent||0,d=0,b=0,_=e.split(" "),k=Ds.apply(this,[" ",r])[0];if(h=r.lineIndent===-1?_[0].length+2:r.lineIndent||0){var y=Array(h).join(" "),R=[];_.map(function(T){(T=T.split(/\s*\n/)).length>1?R=R.concat(T.map(function(Y,K){return(K&&Y.length?`
`:"")+Y})):R.push(T[0])}),_=R,h=sh.apply(this,[y,r])}for(a=0,c=_.length;a<c;a++){var P=0;if(n=_[a],h&&n[0]==`
`&&(n=n.substr(1),P=1),S+d+(b=(o=Ds.apply(this,[n,r])).reduce(function(T,Y){return T+Y},0))>t||P){if(b>t){for(l=lh.apply(this,[n,o,t-(S+d),t]),p.push(l.shift()),p=[l.pop()];l.length;)w.push([l.shift()]);b=o.slice(n.length-(p[0]?p[0].length:0)).reduce(function(T,Y){return T+Y},0)}else p=[n];w.push(p),S=b+h,d=k}else p.push(n),S+=d+b,d=k}return f=h?function(T,Y){return(Y?y:"")+T.join(" ")}:function(T){return T.join(" ")},w.map(f)},Vo.splitTextToSize=function(e,t,r){var n,o=(r=r||{}).fontSize||this.internal.getFontSize(),a=(function(p){if(p.widths&&p.kerning)return{widths:p.widths,kerning:p.kerning};var w=this.internal.getFont(p.fontName,p.fontStyle),S="Unicode";return w.metadata[S]?{widths:w.metadata[S].widths||{0:1},kerning:w.metadata[S].kerning||{}}:{font:w.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var c=1*this.internal.scaleFactor*t/o;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0,a.lineIndent=r.lineIndent;var l,h,f=[];for(l=0,h=n.length;l<h;l++)f=f.concat(ch.apply(this,[n[l],c,a]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},o={},a=0;a<16;a++)n[r[a]]=t[a],o[t[a]]=r[a];var c=function(S){return"0x"+parseInt(S,10).toString(16)},l=e.__fontmetrics__.compress=function(S){var d,b,_,k,y=["{"];for(var R in S){if(d=S[R],isNaN(parseInt(R,10))?b="'"+R+"'":(R=parseInt(R,10),b=(b=c(R).slice(2)).slice(0,-1)+o[b.slice(-1)]),typeof d=="number")d<0?(_=c(d).slice(3),k="-"):(_=c(d).slice(2),k=""),_=k+_.slice(0,-1)+o[_.slice(-1)];else{if(Pt(d)!=="object")throw new Error("Don't know what to do with value type "+Pt(d)+".");_=l(d)}y.push(b+_)}return y.push("}"),y.join("")},h=e.__fontmetrics__.uncompress=function(S){if(typeof S!="string")throw new Error("Invalid argument passed to uncompress.");for(var d,b,_,k,y={},R=1,P=y,T=[],Y="",K="",ne=S.length-1,X=1;X<ne;X+=1)(k=S[X])=="'"?d?(_=d.join(""),d=void 0):d=[]:d?d.push(k):k=="{"?(T.push([P,_]),P={},_=void 0):k=="}"?((b=T.pop())[0][b[1]]=P,_=void 0,P=b[0]):k=="-"?R=-1:_===void 0?n.hasOwnProperty(k)?(Y+=n[k],_=parseInt(Y,16)*R,R=1,Y=""):Y+=k:n.hasOwnProperty(k)?(K+=n[k],P[_]=parseInt(K,16)*R,R=1,_=void 0,K=""):K+=k;return y},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},p={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},w={Unicode:{"Courier-Oblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(S){var d=S.font,b=w.Unicode[d.postScriptName];b&&(d.metadata.Unicode={},d.metadata.Unicode.widths=b.widths,d.metadata.Unicode.kerning=b.kerning);var _=p.Unicode[d.postScriptName];_&&(d.metadata.Unicode.encoding=_,d.encoding=_.codePages[0])}])}(Ye.API),function(e){var t=function(r){for(var n=r.length,o=new Uint8Array(n),a=0;a<n;a++)o[a]=r.charCodeAt(a);return o};e.API.events.push(["addFont",function(r){var n=void 0,o=r.font,a=r.instance;if(!o.isStandardFont){if(a===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");if(typeof(n=a.existsFileInVFS(o.postScriptName)===!1?a.loadFile(o.postScriptName):a.getFileFromVFS(o.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");(function(c,l){l=/^\x00\x01\x00\x00/.test(l)?t(l):t($s(l)),c.metadata=e.API.TTFFont.open(l),c.metadata.Unicode=c.metadata.Unicode||{encoding:{},kerning:{},widths:[]},c.metadata.glyIdsUsed=[0]})(o,n)}}])}(Ye),Ye.API.addSvgAsImage=function(e,t,r,n,o,a,c,l){if(isNaN(t)||isNaN(r))throw Ot.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw Ot.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=n,h.height=o;var f=h.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,h.width,h.height);var p={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},w=this;return(rt.canvg?Promise.resolve(rt.canvg):Ol(()=>import("./index.es.CKe4lXx0.js"),__vite__mapDeps([0,1,2,3]))).catch(function(S){return Promise.reject(new Error("Could not load canvg: "+S))}).then(function(S){return S.default?S.default:S}).then(function(S){return S.fromString(f,e,p)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(S){return S.render(p)}).then(function(){w.addImage(h.toDataURL("image/jpeg",1),t,r,n,o,c,l)})},Ye.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var o=0;o<this.internal.pages[n].length;o++)this.internal.pages[n][o]=this.internal.pages[n][o].replace(t,r);return this},Ye.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,o,a,c={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},l=Object.keys(c),h=[],f=0,p=0,w=0;function S(b,_){var k,y=!1;for(k=0;k<b.length;k+=1)b[k]===_&&(y=!0);return y}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(c)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var d=l.length;for(w=0;w<d;w+=1)r[l[w]].value=r[l[w]].defaultValue,r[l[w]].explicitSet=!1}if(Pt(e)==="object"){for(o in e)if(a=e[o],S(l,o)&&a!==void 0){if(r[o].type==="boolean"&&typeof a=="boolean")r[o].value=a;else if(r[o].type==="name"&&S(r[o].valueSet,a))r[o].value=a;else if(r[o].type==="integer"&&Number.isInteger(a))r[o].value=a;else if(r[o].type==="array"){for(f=0;f<a.length;f+=1)if(n=!0,a[f].length===1&&typeof a[f][0]=="number")h.push(String(a[f]-1));else if(a[f].length>1){for(p=0;p<a[f].length;p+=1)typeof a[f][p]!="number"&&(n=!1);n===!0&&h.push([a[f][0]-1,a[f][1]-1].join(" "))}r[o].value="["+h.join(" ")+"]"}else r[o].value=r[o].defaultValue;r[o].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var b,_=[];for(b in r)r[b].explicitSet===!0&&(r[b].type==="name"?_.push("/"+b+" /"+r[b].value):_.push("/"+b+" "+r[b].value));_.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+_.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',o=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),a=unescape(encodeURIComponent(n)),c=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),l=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),h=unescape(encodeURIComponent("</x:xmpmeta>")),f=a.length+c.length+l.length+o.length+h.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(o+a+c+l+h),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,o){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:o||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(Ye.API),function(e){var t=e.API,r=t.pdfEscape16=function(a,c){for(var l,h=c.metadata.Unicode.widths,f=["","0","00","000","0000"],p=[""],w=0,S=a.length;w<S;++w){if(l=c.metadata.characterToGlyph(a.charCodeAt(w)),c.metadata.glyIdsUsed.push(l),c.metadata.toUnicode[l]=a.charCodeAt(w),h.indexOf(l)==-1&&(h.push(l),h.push([parseInt(c.metadata.widthOfGlyph(l),10)])),l=="0")return p.join("");l=l.toString(16),p.push(f[4-l.length],l)}return p.join("")},n=function(a){var c,l,h,f,p,w,S;for(p=`/CIDInit /ProcSet findresource begin
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
endcodespacerange`,h=[],w=0,S=(l=Object.keys(a).sort(function(d,b){return d-b})).length;w<S;w++)c=l[w],h.length>=100&&(p+=`
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
end`};t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,p=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="Identity-H"){for(var w=l.metadata.Unicode.widths,S=l.metadata.subset.encode(l.metadata.glyIdsUsed,1),d="",b=0;b<S.length;b++)d+=String.fromCharCode(S[b]);var _=f();p({data:d,addLength1:!0,objectId:_}),h("endobj");var k=f();p({data:n(l.metadata.toUnicode),addLength1:!0,objectId:k}),h("endobj");var y=f();h("<<"),h("/Type /FontDescriptor"),h("/FontName /"+Go(l.fontName)),h("/FontFile2 "+_+" 0 R"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/Flags "+l.metadata.flags),h("/StemV "+l.metadata.stemV),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h(">>"),h("endobj");var R=f();h("<<"),h("/Type /Font"),h("/BaseFont /"+Go(l.fontName)),h("/FontDescriptor "+y+" 0 R"),h("/W "+e.API.PDFObject.convert(w)),h("/CIDToGIDMap /Identity"),h("/DW 1000"),h("/Subtype /CIDFontType2"),h("/CIDSystemInfo"),h("<<"),h("/Supplement 0"),h("/Registry (Adobe)"),h("/Ordering ("+l.encoding+")"),h(">>"),h(">>"),h("endobj"),l.objectNumber=f(),h("<<"),h("/Type /Font"),h("/Subtype /Type0"),h("/ToUnicode "+k+" 0 R"),h("/BaseFont /"+Go(l.fontName)),h("/Encoding /"+l.encoding),h("/DescendantFonts ["+R+" 0 R]"),h(">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]),t.events.push(["putFont",function(a){(function(c){var l=c.font,h=c.out,f=c.newObject,p=c.putStream;if(l.metadata instanceof e.API.TTFFont&&l.encoding==="WinAnsiEncoding"){for(var w=l.metadata.rawData,S="",d=0;d<w.length;d++)S+=String.fromCharCode(w[d]);var b=f();p({data:S,addLength1:!0,objectId:b}),h("endobj");var _=f();p({data:n(l.metadata.toUnicode),addLength1:!0,objectId:_}),h("endobj");var k=f();h("<<"),h("/Descent "+l.metadata.decender),h("/CapHeight "+l.metadata.capHeight),h("/StemV "+l.metadata.stemV),h("/Type /FontDescriptor"),h("/FontFile2 "+b+" 0 R"),h("/Flags 96"),h("/FontBBox "+e.API.PDFObject.convert(l.metadata.bbox)),h("/FontName /"+Go(l.fontName)),h("/ItalicAngle "+l.metadata.italicAngle),h("/Ascent "+l.metadata.ascender),h(">>"),h("endobj"),l.objectNumber=f();for(var y=0;y<l.metadata.hmtx.widths.length;y++)l.metadata.hmtx.widths[y]=parseInt(l.metadata.hmtx.widths[y]*(1e3/l.metadata.head.unitsPerEm));h("<</Subtype/TrueType/Type/Font/ToUnicode "+_+" 0 R/BaseFont/"+Go(l.fontName)+"/FontDescriptor "+k+" 0 R/Encoding/"+l.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(l.metadata.hmtx.widths)+">>"),h("endobj"),l.isAlreadyPutted=!0}})(a)}]);var o=function(a){var c,l=a.text||"",h=a.x,f=a.y,p=a.options||{},w=a.mutex||{},S=w.pdfEscape,d=w.activeFontKey,b=w.fonts,_=d,k="",y=0,R="",P=b[_].encoding;if(b[_].encoding!=="Identity-H")return{text:l,x:h,y:f,options:p,mutex:w};for(R=l,_=d,Array.isArray(l)&&(R=l[0]),y=0;y<R.length;y+=1)b[_].metadata.hasOwnProperty("cmap")&&(c=b[_].metadata.cmap.unicode.codeMap[R[y].charCodeAt(0)]),c||R[y].charCodeAt(0)<256&&b[_].metadata.hasOwnProperty("Unicode")?k+=R[y]:k+="";var T="";return parseInt(_.slice(1))<14||P==="WinAnsiEncoding"?T=S(k,_).split("").map(function(Y){return Y.charCodeAt(0).toString(16)}).join(""):P==="Identity-H"&&(T=r(k,b[_])),w.isHex=!0,{text:T,x:h,y:f,options:p,mutex:w}};t.events.push(["postProcessText",function(a){var c=a.text||"",l=[],h={text:c,x:a.x,y:a.y,options:a.options,mutex:a.mutex};if(Array.isArray(c)){var f=0;for(f=0;f<c.length;f+=1)Array.isArray(c[f])&&c[f].length===3?l.push([o(Object.assign({},h,{text:c[f][0]})).text,c[f][1],c[f][2]]):l.push(o(Object.assign({},h,{text:c[f]})).text);a.text=l}else a.text=o(Object.assign({},h,{text:c})).text}])}(Ye),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Ye.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var o,a,c,l,h,f,p,w=t,S=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],b={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},_={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},k=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],y=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),R=!1,P=0;this.__bidiEngine__={};var T=function(E){var F=E.charCodeAt(),G=F>>8,$=_[G];return $!==void 0?w[256*$+(255&F)]:G===252||G===253?"AL":y.test(G)?"L":G===8?"R":"N"},Y=function(E){for(var F,G=0;G<E.length;G++){if((F=T(E.charAt(G)))==="L")return!1;if(F==="R")return!0}return!1},K=function(E,F,G,$){var oe,ce,de,ee,se=F[$];switch(se){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":R=!1;break;case"N":case"AN":break;case"EN":R&&(se="AN");break;case"AL":R=!0,se="R";break;case"WS":case"BN":se="N";break;case"CS":$<1||$+1>=F.length||(oe=G[$-1])!=="EN"&&oe!=="AN"||(ce=F[$+1])!=="EN"&&ce!=="AN"?se="N":R&&(ce="AN"),se=ce===oe?ce:"N";break;case"ES":se=(oe=$>0?G[$-1]:"B")==="EN"&&$+1<F.length&&F[$+1]==="EN"?"EN":"N";break;case"ET":if($>0&&G[$-1]==="EN"){se="EN";break}if(R){se="N";break}for(de=$+1,ee=F.length;de<ee&&F[de]==="ET";)de++;se=de<ee&&F[de]==="EN"?"EN":"N";break;case"NSM":if(c&&!l){for(ee=F.length,de=$+1;de<ee&&F[de]==="NSM";)de++;if(de<ee){var Ce=E[$],be=Ce>=1425&&Ce<=2303||Ce===64286;if(oe=F[de],be&&(oe==="R"||oe==="AL")){se="R";break}}}se=$<1||(oe=F[$-1])==="B"?"N":G[$-1];break;case"B":R=!1,o=!0,se=P;break;case"S":a=!0,se="N"}return se},ne=function(E,F,G){var $=E.split("");return G&&X($,G,{hiLevel:P}),$.reverse(),F&&F.reverse(),$.join("")},X=function(E,F,G){var $,oe,ce,de,ee,se=-1,Ce=E.length,be=0,L=[],H=P?d:S,V=[];for(R=!1,o=!1,a=!1,oe=0;oe<Ce;oe++)V[oe]=T(E[oe]);for(ce=0;ce<Ce;ce++){if(ee=be,L[ce]=K(E,V,L,ce),$=240&(be=H[ee][b[L[ce]]]),be&=15,F[ce]=de=H[be][5],$>0)if($===16){for(oe=se;oe<ce;oe++)F[oe]=1;se=-1}else se=-1;if(H[be][6])se===-1&&(se=ce);else if(se>-1){for(oe=se;oe<ce;oe++)F[oe]=de;se=-1}V[ce]==="B"&&(F[ce]=0),G.hiLevel|=de}a&&function(Q,re,ue){for(var ge=0;ge<ue;ge++)if(Q[ge]==="S"){re[ge]=P;for(var pe=ge-1;pe>=0&&Q[pe]==="WS";pe--)re[pe]=P}}(V,F,Ce)},M=function(E,F,G,$,oe){if(!(oe.hiLevel<E)){if(E===1&&P===1&&!o)return F.reverse(),void(G&&G.reverse());for(var ce,de,ee,se,Ce=F.length,be=0;be<Ce;){if($[be]>=E){for(ee=be+1;ee<Ce&&$[ee]>=E;)ee++;for(se=be,de=ee-1;se<de;se++,de--)ce=F[se],F[se]=F[de],F[de]=ce,G&&(ce=G[se],G[se]=G[de],G[de]=ce);be=ee}be++}}},J=function(E,F,G){var $=E.split(""),oe={hiLevel:P};return G||(G=[]),X($,G,oe),function(ce,de,ee){if(ee.hiLevel!==0&&p)for(var se,Ce=0;Ce<ce.length;Ce++)de[Ce]===1&&(se=k.indexOf(ce[Ce]))>=0&&(ce[Ce]=k[se+1])}($,G,oe),M(2,$,F,G,oe),M(1,$,F,G,oe),$.join("")};return this.__bidiEngine__.doBidiReorder=function(E,F,G){if(function(oe,ce){if(ce)for(var de=0;de<oe.length;de++)ce[de]=de;l===void 0&&(l=Y(oe)),f===void 0&&(f=Y(oe))}(E,F),c||!h||f)if(c&&h&&l^f)P=l?1:0,E=ne(E,F,G);else if(!c&&h&&f)P=l?1:0,E=J(E,F,G),E=ne(E,F);else if(!c||l||h||f){if(c&&!h&&l^f)E=ne(E,F),l?(P=0,E=J(E,F,G)):(P=1,E=J(E,F,G),E=ne(E,F));else if(c&&l&&!h&&f)P=1,E=J(E,F,G),E=ne(E,F);else if(!c&&!h&&l^f){var $=p;l?(P=1,E=J(E,F,G),P=0,p=!1,E=J(E,F,G),p=$):(P=0,E=J(E,F,G),E=ne(E,F),P=1,p=!1,E=J(E,F,G),p=$,E=ne(E,F))}}else P=0,E=J(E,F,G);else P=l?1:0,E=J(E,F,G);return E},this.__bidiEngine__.setOptions=function(E){E&&(c=E.isInputVisual,h=E.isOutputVisual,l=E.isInputRtl,f=E.isOutputRtl,p=E.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var o=n.text;n.x,n.y;var a=n.options||{};n.mutex,a.lang;var c=[];if(a.isInputVisual=typeof a.isInputVisual!="boolean"||a.isInputVisual,r.setOptions(a),Object.prototype.toString.call(o)==="[object Array]"){var l=0;for(c=[],l=0;l<o.length;l+=1)Object.prototype.toString.call(o[l])==="[object Array]"?c.push([r.doBidiReorder(o[l][0]),o[l][1],o[l][2]]):c.push([r.doBidiReorder(o[l])]);n.text=c}else n.text=r.doBidiReorder(o);r.setOptions({isInputVisual:!0})}])}(Ye),Ye.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new Wi(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new Mv(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new yv(this.contents),this.head=new _v(this),this.name=new Nv(this),this.cmap=new w2(this),this.toUnicode={},this.hhea=new Cv(this),this.maxp=new Ev(this),this.hmtx=new Iv(this),this.post=new kv(this),this.os2=new Av(this),this.loca=new Rv(this),this.glyf=new Pv(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,o,a;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var c,l,h,f;for(f=[],c=0,l=(h=this.bbox).length;c<l;c++)t=h[c],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(o=this.post.italic_angle),32768&(r=o>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(a=this.familyClass)===1||a===2||a===3||a===4||a===5||a===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var o,a,c,l;for(c=0,a=0,l=(t=""+t).length;0<=l?a<l:a>l;a=0<=l?++a:--a)o=t.charCodeAt(a),c+=this.widthOfGlyph(this.characterToGlyph(o))+n*(1e3/r)||0;return c*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var jn,Wi=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,o;for(o=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)o.push(this.writeByte(t.charCodeAt(r)));return o},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,o,a,c,l,h;return t=this.readByte(),r=this.readByte(),n=this.readByte(),o=this.readByte(),a=this.readByte(),c=this.readByte(),l=this.readByte(),h=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^o)+16777216*(255^a)+65536*(255^c)+256*(255^l)+(255^h)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*o+16777216*a+65536*c+256*l+h},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,o,a;for(a=[],n=0,o=t.length;n<o;n++)r=t[n],a.push(this.writeByte(r));return a},e}(),yv=function(){var e;function t(r){var n,o,a;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},o=0,a=this.tableCount;0<=a?o<a:o>a;o=0<=a?++o:--o)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,o,a,c,l,h,f,p,w,S,d,b,_;for(_ in d=Object.keys(r).length,h=Math.log(2),w=16*Math.floor(Math.log(d)/h),c=Math.floor(w/h),p=16*d-w,(o=new Wi).writeInt(this.scalarType),o.writeShort(d),o.writeShort(w),o.writeShort(c),o.writeShort(p),a=16*d,f=o.pos+a,l=null,b=[],r)for(S=r[_],o.writeString(_),o.writeInt(e(S)),o.writeInt(f),o.writeInt(S.length),b=b.concat(S),_==="head"&&(l=f),f+=S.length;f%4;)b.push(0),f++;return o.write(b),n=2981146554-e(o.data),o.pos=l+8,o.writeUInt32(n),o.data},e=function(r){var n,o,a,c;for(r=y2.call(r);r.length%4;)r.push(0);for(a=new Wi(r),o=0,n=0,c=r.length;n<c;n=n+=4)o+=a.readUInt32();return 4294967295&o},t}(),Sv={}.hasOwnProperty,Yn=function(e,t){for(var r in t)Sv.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};jn=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var _v=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new Wi).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),bh=function(){function e(t,r){var n,o,a,c,l,h,f,p,w,S,d,b,_,k,y,R,P;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),w=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(h=0;h<256;++h)this.codeMap[h]=t.readByte();break;case 4:for(d=t.readUInt16(),S=d/2,t.pos+=6,a=function(){var T,Y;for(Y=[],h=T=0;0<=S?T<S:T>S;h=0<=S?++T:--T)Y.push(t.readUInt16());return Y}(),t.pos+=2,_=function(){var T,Y;for(Y=[],h=T=0;0<=S?T<S:T>S;h=0<=S?++T:--T)Y.push(t.readUInt16());return Y}(),f=function(){var T,Y;for(Y=[],h=T=0;0<=S?T<S:T>S;h=0<=S?++T:--T)Y.push(t.readUInt16());return Y}(),p=function(){var T,Y;for(Y=[],h=T=0;0<=S?T<S:T>S;h=0<=S?++T:--T)Y.push(t.readUInt16());return Y}(),o=(this.length-t.pos+this.offset)/2,l=function(){var T,Y;for(Y=[],h=T=0;0<=o?T<o:T>o;h=0<=o?++T:--T)Y.push(t.readUInt16());return Y}(),h=y=0,P=a.length;y<P;h=++y)for(k=a[h],n=R=b=_[h];b<=k?R<=k:R>=k;n=b<=k?++R:--R)p[h]===0?c=n+f[h]:(c=l[p[h]/2+(n-b)-(S-h)]||0)!==0&&(c+=f[h]),this.codeMap[n]=65535&c}t.pos=w}return e.encode=function(t,r){var n,o,a,c,l,h,f,p,w,S,d,b,_,k,y,R,P,T,Y,K,ne,X,M,J,E,F,G,$,oe,ce,de,ee,se,Ce,be,L,H,V,Q,re,ue,ge,pe,xe,Ae,Ie;switch($=new Wi,c=Object.keys(t).sort(function(Te,ve){return Te-ve}),r){case"macroman":for(_=0,k=function(){var Te=[];for(b=0;b<256;++b)Te.push(0);return Te}(),R={0:0},a={},oe=0,se=c.length;oe<se;oe++)R[pe=t[o=c[oe]]]==null&&(R[pe]=++_),a[o]={old:t[o],new:R[t[o]]},k[o]=R[t[o]];return $.writeUInt16(1),$.writeUInt16(0),$.writeUInt32(12),$.writeUInt16(0),$.writeUInt16(262),$.writeUInt16(0),$.write(k),{charMap:a,subtable:$.data,maxGlyphID:_+1};case"unicode":for(F=[],w=[],P=0,R={},n={},y=f=null,ce=0,Ce=c.length;ce<Ce;ce++)R[Y=t[o=c[ce]]]==null&&(R[Y]=++P),n[o]={old:Y,new:R[Y]},l=R[Y]-o,y!=null&&l===f||(y&&w.push(y),F.push(o),f=l),y=o;for(y&&w.push(y),w.push(65535),F.push(65535),J=2*(M=F.length),X=2*Math.pow(Math.log(M)/Math.LN2,2),S=Math.log(X/2)/Math.LN2,ne=2*M-X,h=[],K=[],d=[],b=de=0,be=F.length;de<be;b=++de){if(E=F[b],p=w[b],E===65535){h.push(0),K.push(0);break}if(E-(G=n[E].new)>=32768)for(h.push(0),K.push(2*(d.length+M-b)),o=ee=E;E<=p?ee<=p:ee>=p;o=E<=p?++ee:--ee)d.push(n[o].new);else h.push(G-E),K.push(0)}for($.writeUInt16(3),$.writeUInt16(1),$.writeUInt32(12),$.writeUInt16(4),$.writeUInt16(16+8*M+2*d.length),$.writeUInt16(0),$.writeUInt16(J),$.writeUInt16(X),$.writeUInt16(S),$.writeUInt16(ne),ue=0,L=w.length;ue<L;ue++)o=w[ue],$.writeUInt16(o);for($.writeUInt16(0),ge=0,H=F.length;ge<H;ge++)o=F[ge],$.writeUInt16(o);for(xe=0,V=h.length;xe<V;xe++)l=h[xe],$.writeUInt16(l);for(Ae=0,Q=K.length;Ae<Q;Ae++)T=K[Ae],$.writeUInt16(T);for(Ie=0,re=d.length;Ie<re;Ie++)_=d[Ie],$.writeUInt16(_);return{charMap:n,subtable:$.data,maxGlyphID:P+1}}},e}(),w2=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,o;for(t.pos=this.offset,this.version=t.readUInt16(),o=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=o?n<o:n>o;n=0<=o?++n:--n)r=new bh(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,o;return r==null&&(r="macroman"),n=bh.encode(t,r),(o=new Wi).writeUInt16(0),o.writeUInt16(1),n.table=o.data.concat(n.subtable),n},e}(),Cv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),Av=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),kv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var a;for(n=t.readUInt16(),this.glyphNameIndex=[],a=0;0<=n?a<n:a>n;a=0<=n?++a:--a)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)r=t.readByte(),o.push(this.names.push(t.readString(r)));return o;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var c,l,h;for(h=[],a=c=0,l=this.file.maxp.numGlyphs;0<=l?c<l:c>l;a=0<=l?++c:--c)h.push(t.readUInt32());return h}).call(this)}},e}(),Lv=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},Nv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,o,a,c,l,h,f,p,w,S;for(t.pos=this.offset,t.readShort(),r=t.readShort(),l=t.readShort(),n=[],a=0;0<=r?a<r:a>r;a=0<=r?++a:--a)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+l+t.readShort()});for(h={},a=p=0,w=n.length;p<w;a=++p)o=n[a],t.pos=o.offset,f=t.readString(o.length),c=new Lv(f,o),h[S=o.nameID]==null&&(h[S]=[]),h[o.nameID].push(c);this.strings=h,this.copyright=h[0],this.fontFamily=h[1],this.fontSubfamily=h[2],this.uniqueSubfamily=h[3],this.fontName=h[4],this.version=h[5];try{this.postscriptName=h[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=h[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=h[7],this.manufacturer=h[8],this.designer=h[9],this.description=h[10],this.vendorUrl=h[11],this.designerUrl=h[12],this.license=h[13],this.licenseUrl=h[14],this.preferredFamily=h[15],this.preferredSubfamily=h[17],this.compatibleFull=h[18],this.sampleText=h[19]},e}(),Ev=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),Iv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,o,a,c,l,h;for(t.pos=this.offset,this.metrics=[],r=0,l=this.file.hhea.numberOfMetrics;0<=l?r<l:r>l;r=0<=l?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(o=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,p;for(p=[],r=f=0;0<=o?f<o:f>o;r=0<=o?++f:--f)p.push(t.readInt16());return p}(),this.widths=(function(){var f,p,w,S;for(S=[],f=0,p=(w=this.metrics).length;f<p;f++)a=w[f],S.push(a.advance);return S}).call(this),n=this.widths[this.widths.length-1],h=[],r=c=0;0<=o?c<o:c>o;r=0<=o?++c:--c)h.push(this.widths.push(n));return h},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),y2=[].slice,Pv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,o,a,c,l,h,f,p,w;return t in this.cache?this.cache[t]:(a=this.file.loca,r=this.file.contents,n=a.indexOf(t),(o=a.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,c=(l=new Wi(r.read(o))).readShort(),f=l.readShort(),w=l.readShort(),h=l.readShort(),p=l.readShort(),this.cache[t]=c===-1?new jv(l,f,w,h,p):new Tv(l,c,f,w,h,p),this.cache[t]))},e.prototype.encode=function(t,r,n){var o,a,c,l,h;for(c=[],a=[],l=0,h=r.length;l<h;l++)o=t[r[l]],a.push(c.length),o&&(c=c.concat(o.encode(n)));return a.push(c.length),{table:c,offsets:a}},e}(),Tv=function(){function e(t,r,n,o,a,c){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=o,this.xMax=a,this.yMax=c,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),jv=function(){function e(t,r,n,o,a){var c,l;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=o,this.yMax=a,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],c=this.raw;l=c.readShort(),this.glyphOffsets.push(c.pos),this.glyphIDs.push(c.readUInt16()),32&l;)c.pos+=1&l?4:2,128&l?c.pos+=8:64&l?c.pos+=4:8&l&&(c.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new Wi(y2.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),Rv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Yn(e,jn),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=2)a.push(2*t.readUInt16());return a}).call(this):(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=4)a.push(t.readUInt32());return a}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),o=0,a=0,c=0;c<n.length;++c)if(n[c]=o,a<r.length&&r[a]==c){++a,n[c]=o;var l=this.offsets[c],h=this.offsets[c+1]-l;h>0&&(o+=h)}for(var f=new Array(4*n.length),p=0;p<n.length;++p)f[4*p+3]=255&n[p],f[4*p+2]=(65280&n[p])>>8,f[4*p+1]=(16711680&n[p])>>16,f[4*p]=(4278190080&n[p])>>24;return f},e}(),Mv=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,o,a;for(r in o=this.font.cmap.tables[0].codeMap,t={},a=this.subset)n=a[r],t[r]=o[n];return t},e.prototype.glyphsFor=function(t){var r,n,o,a,c,l,h;for(o={},c=0,l=t.length;c<l;c++)o[a=t[c]]=this.font.glyf.glyphFor(a);for(a in r=[],o)(n=o[a])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(a in h=this.glyphsFor(r))n=h[a],o[a]=n;return o},e.prototype.encode=function(t,r){var n,o,a,c,l,h,f,p,w,S,d,b,_,k,y;for(o in n=w2.encode(this.generateCmap(),"unicode"),c=this.glyphsFor(t),d={0:0},y=n.charMap)d[(h=y[o]).old]=h.new;for(b in S=n.maxGlyphID,c)b in d||(d[b]=S++);return p=function(R){var P,T;for(P in T={},R)T[R[P]]=P;return T}(d),w=Object.keys(p).sort(function(R,P){return R-P}),_=function(){var R,P,T;for(T=[],R=0,P=w.length;R<P;R++)l=w[R],T.push(p[l]);return T}(),a=this.font.glyf.encode(c,_,d),f=this.font.loca.encode(a.offsets,_),k={cmap:this.font.cmap.raw(),glyf:a.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(k["OS/2"]=this.font.os2.raw()),this.font.directory.encode(k)},e}();Ye.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,o,a,c;if(Array.isArray(r))return"["+function(){var l,h,f;for(f=[],l=0,h=r.length;l<h;l++)n=r[l],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(o in a=["<<"],r)c=r[o],a.push("/"+o+" "+t.convert(c));return a.push(">>"),a.join(`
`)}return""+r},t}();const Ov=["ab67616d000082c1","ab67616d0000b273"];async function Fv(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function Dv(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function zv(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=Dv(e);if(!t)return e;for(const r of Ov){const n=`https://i.scdn.co/image/${r}${t}`;if(await Fv(n))return n}return e}function Bv(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function Uv(e){return Tt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const Hv=z.div`
    width: 80%;
    margin-inline: auto;
`,qv=z.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,$v=z(o0)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,Vv=z.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Wv=z.div`
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
`,Gv=Yt`
    0% {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,Yv=Yt`
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
`,Xv=z.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    animation: ${e=>e.visible?Oa`${Gv} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`:Oa`${Yv} 0.3s cubic-bezier(0.4, 0, 1, 1) forwards`};
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
`,Zv=z.div`
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
`,Jv=Yt`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.08;
    }
    100% {
        opacity: 0;
    }
`,Qv=z.div`
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
    animation: ${e=>e.visible?Oa`${Jv} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"};
    opacity: 0;
`,Kv=z(x0)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?Yt`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,e8=z.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,t8=z.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,xh=z.div`
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
`,r8=z.div`
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
`,n8=z.div`
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
`,i8=z.div`
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
`,wh=z.button`
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
`,o8=z.textarea`
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
`,a8=z.div`
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
`,ic=z.div`
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
`,oc=z.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`;z(Sm)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;const s8=z(Bv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,l8=z(Uv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`,c8=z($p)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Oa`
                  animation: ${Yt`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Oa`
                  animation: ${Yt`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,u8=z.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,h8=z.p`
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
`,f8=z(pp)`
    font-size: 3em;
`,Zc=O.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:o},a)=>{const{t:c}=lr(),l=O.useRef(null),h=O.useRef(null),f=O.useRef(null),[p,w]=O.useState(""),[S,d]=O.useState(""),[b,_]=O.useState("200"),[k,y]=O.useState("110"),[R,P]=O.useState("50"),[T,Y]=O.useState((n==null?void 0:n.marginTop)??""),[K,ne]=O.useState(160),[X,M]=O.useState((n==null?void 0:n.marginCover)??0),[J,E]=O.useState((n==null?void 0:n.marginBackground)??0),[F,G]=O.useState("#5900ff"),[$,oe]=O.useState("#ff9100"),[ce,de]=O.useState("#ff0000"),[ee,se]=O.useState("#00ff40"),[Ce,be]=O.useState("#2600ff"),[L,H]=O.useState(!0),[V,Q]=O.useState((n==null?void 0:n.useFade)??!0),[re,ue]=O.useState((n==null?void 0:n.showTracklist)??!1),[ge,pe]=O.useState(""),[xe,Ae]=O.useState(""),[Ie,Te]=O.useState(""),[ve,W]=O.useState(null),[ft,Ke]=O.useState("information");function qe(me){Or(!0),w(me.albumName||""),d(me.artistsName||""),_(me.titleSize||"200"),y(me.artistsSize||"110"),P(me.tracksSize||"50"),Y(me.marginTop||""),ne(me.marginSide||160),M(me.marginCover||0),E(me.marginBackground||0),G(me.backgroundColor||"#5900ff"),oe(me.textColor||"#ff9100"),de(me.color1||"#ff0000"),se(me.color2||"#00ff40"),be(me.color3||"#2600ff"),me.coverZoom!==void 0?bt(me.coverZoom):me.marginCover!==void 0?bt(-me.marginCover/11):bt(0),dr(me.coverHorizontalPosition||0),Xr(me.coverVerticalPosition||0),hn(me.coverBlur||0),H(me.useWatermark!==void 0?me.useWatermark:!0),Q(me.useFade!==void 0?me.useFade:!0),ue(me.showTracklist!==void 0?me.showTracklist:!1),Me(me.useUncompressed!==void 0?me.useUncompressed:!1),pe(me.albumCover||""),Ae(me.uncompressedAlbumCover||""),Te(me.customFont||""),gt(me.tracklist||""),tt(me.titleRelease||""),ot(me.releaseDate||""),Je(me.titleRuntime||""),At(me.runtime||""),qr()}O.useEffect(()=>{if(ve){const me=new FileReader;me.onload=async dt=>{const ur="CustomFont",An=new FontFace(ur,dt.target.result);try{const $r=await An.load();document.fonts.add($r),Te(ur)}catch($r){console.error("Erro ao carregar fonte:",$r)}},me.readAsArrayBuffer(ve)}},[ve]),O.useEffect(()=>{o&&qe(o)},[o]);const[Ne,Me]=O.useState(!1),[je,nt]=O.useState("Original"),[De,gt]=O.useState(""),[it,tt]=O.useState(""),[_t,ot]=O.useState(""),[Ve,Je]=O.useState(""),[We,At]=O.useState(""),[yt,Be]=O.useState(!1),[at,Lt]=O.useState(null),[Xe,vt]=O.useState(null),[lt,Ht]=O.useState(!1),[Xt,Nt]=O.useState(null),[Qe,bt]=O.useState(0),[Rn,dr]=O.useState(0),[un,Xr]=O.useState(0),[Ze,hn]=O.useState(0),[fn,jr]=O.useState(!1),[Rr,qt]=O.useState(!1),[er,cr]=O.useState(!1),[Mn,On]=O.useState(!1),[Mr,Or]=O.useState(!1);O.useEffect(()=>{if(!Mr){const me=-Qe*10;M(me)}},[Qe,Mr]);const Zr=me=>{_(me.target.value),jr(!0)},Jr=(me,dt)=>{dt&&!Rr?(_(me),qt(!0)):fn||_(me)},Hr=me=>{P(me.target.value),cr(!0)},Xn=(me,dt)=>{dt&&!Mn?(P(me),On(!0)):er||P(me)},Qr={albumCover:ge,uncompressedAlbumCover:xe,useUncompressed:Ne,albumName:p,artistsName:S,titleSize:b,artistsSize:k,tracksSize:R,marginTop:T,marginSide:K,marginCover:X,marginBackground:J,titleRelease:it,releaseDate:_t,titleRuntime:Ve,runtime:We,backgroundColor:F,textColor:$,useWatermark:L,useFade:V,showTracklist:re,tracklist:De,color1:ce,color2:ee,color3:Ce,albumID:e,coverZoom:Qe,coverHorizontalPosition:Rn,coverVerticalPosition:un,coverBlur:Ze,userAdjustedTitleSize:fn,initialTitleSizeSet:Rr,userAdjustedTracksSize:er,initialTracksSizeSet:Mn},[Cn,xi]=O.useState(null),[dn,Zn]=O.useState(null),[wi,Jn]=O.useState(null),[yi,Gi]=O.useState(!1),[Fr,Qn]=O.useState(!1),[Yi,Kn]=O.useState(!1),[Co,Xi]=O.useState(!1),[Ao,ei]=O.useState(!1),[ra,$t]=O.useState(!1);O.useEffect(()=>{if(yi){Kn(!1);const me=setTimeout(()=>{$t(!0)},100);return()=>clearTimeout(me)}else $t(!1)},[yi]);const ko=me=>{Gi(!1),ei(!1),s5(p,S),setTimeout(()=>{xi(me),$t(!1),setTimeout(()=>{Kn(!0)},50)},300)},Lo=me=>{Zn(me),Qn(!1)};O.useEffect(()=>{if(dn&&wi){if(wi==="png"){const me=document.createElement("a");me.href=dn,me.download=`Posterfy - ${p}.png`,me.click(),$u(p,"poster",S)}else if(wi==="pdf"){const me=new Image;me.onload=()=>{const dt=new Ye({orientation:"portrait",unit:"mm",format:"a4",compress:!1});dt.addImage(dn,"JPEG",0,0,210,297,void 0,"FAST"),dt.save(`Posterfy - ${p}.pdf`),$u(p,"poster_pdf",S)},me.src=dn}Zn(null),Jn(null)}},[dn,wi,p,S]);const qr=()=>{jr(!1),cr(!1),Kn(!1),requestAnimationFrame(()=>{if(ei(!0),Gi(!0),l.current){const me=l.current.getBoundingClientRect(),dt=me.top+window.scrollY,ur=me.height,$r=(window.innerHeight-ur)/2;window.scrollTo({top:dt-$r,behavior:"smooth"})}})},ti=me=>{pe(URL.createObjectURL(me)),Me(!1),Ae(""),nt(me.name),Or(!1)},Dr=()=>{Jn("png"),Qn(!0)},Fn=()=>{Jn("pdf"),Qn(!0)};function jt(me,dt){Lt(me),vt(dt),Be(!0)}function Si(){Be(!1)}function na(me){Nt(me),Ht(!0)}function No(){Ht(!1)}const ia=()=>{const dt=De.split(`
`).map(ur=>ur.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());gt(dt.join(`
`))},pn=()=>{const dt=De.split(`
`).map(ur=>ur.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());gt(dt.join(`
`))};async function Eo(me,dt="us"){var ur;try{let An=`https://itunes.apple.com/search?term=${encodeURIComponent(me)}&country=${dt}&entity=album&limit=1`,$r=await fetch(An);if(!$r.ok)throw new Error(`HTTP Error: ${$r.status}`);let Zi=await $r.json();if(!((ur=Zi.results)!=null&&ur.length))return console.warn("No album data found."),Me(!1),!1;let pr=Zi.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return pr.length===2?`https://a5.mzstatic.com/us/r1000/0/${pr[1].split("/").slice(0,-1).join("/")}`:""}catch(An){return console.error("Error fetching album cover:",An.message),""}}return O.useEffect(()=>{tt(c("EDITOR_ReleaseTitle")),Je(c("EDITOR_RuntimeTitle"))},[c]),O.useEffect(()=>{const me=async()=>{var dt;try{const _i=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,pr=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${_i}`}})).json(),Ji=pr.artists.map(vn=>vn.name).join(", ");w(pr.name),d(Ji);const ni=(dt=pr.images[0])==null?void 0:dt.url,Ci=await zv(ni);pe(Ci),ot(pr.release_date);const et=await Eo(pr.name+" "+Ji);Ae(et||Ci);const oa=pr.tracks.items.reduce((vn,Dn)=>vn+Dn.duration_ms,0),Io=Math.floor(oa/1e3),Po=Math.floor(Io/60),To=Math.floor(Po/60),mn=Io%60,gn=Po%60,aa=To>0?`${To}h ${gn}min ${mn}s`:`${gn}min ${mn}s`;At(aa);const sa=pr.tracks.items.map((vn,Dn)=>(Dn===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&ue(!0),`${Dn+1}. ${vn.name}`));gt(sa.join(`
`)),Xi(!0)}catch(ur){console.error("Error trying to fetch album data:",ur)}};o?(qe(o),Xi(!0)):(Or(!1),me())},[e]),O.useEffect(()=>{const me=dt=>{dt.ctrlKey&&dt.key==="s"?(dt.preventDefault(),qr()):dt.ctrlKey&&dt.shiftKey&&dt.key==="D"?(dt.preventDefault(),Fn()):dt.ctrlKey&&dt.key==="d"&&(dt.preventDefault(),Dr())};return window.addEventListener("keydown",me),()=>{window.removeEventListener("keydown",me)}},[Cn,p,Dr]),v.jsx(v.Fragment,{children:Co?v.jsxs(Hv,{ref:a,children:[v.jsx(y0.Palette,{src:ge,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:me})=>(O.useEffect(()=>{me&&me.length>0&&!Mr&&(G(me[0]),oe(me[1]),de(me[2]),se(me[3]),be(me[4]),qr())},[me]),null)}),v.jsxs(qv,{onClick:t,children:[v.jsx($v,{}),v.jsx(Vv,{children:c("GoBack")})]}),v.jsxs(Wv,{children:[v.jsx(mc,{ref:h,onImageReady:ko,posterData:Qr,generatePoster:yi,onTitleSizeAdjust:Jr,onTracksSizeAdjust:Xn,customFont:Ie,scale:.3}),Fr&&v.jsx("div",{style:{position:"absolute",left:"-9999px",top:"-9999px"},children:v.jsx(mc,{ref:f,onImageReady:Lo,posterData:Qr,generatePoster:Fr,customFont:Ie,scale:1})}),v.jsxs(Zv,{children:[v.jsx(Qv,{visible:Yi}),Cn?v.jsx(Xv,{src:Cn,ref:l,visible:Yi}):v.jsx(u8,{ref:l}),v.jsx(Kv,{visible:ra})]}),v.jsxs(e8,{children:[v.jsx(Bt,{animationDelay:50,children:v.jsxs(t8,{children:[v.jsx(xh,{$active:ft==="information",onClick:()=>Ke("information"),children:c("EDITOR_InformationTab")}),v.jsx(xh,{$active:ft==="tracklist",onClick:()=>Ke("tracklist"),children:c("EDITOR_TracklistTab")})]})}),ft==="information"?v.jsxs(r8,{children:[v.jsx(Bt,{animationDelay:0,children:v.jsx(zi,{title:c("EDITOR_AlbumName"),value:p,onChange:me=>w(me.target.value)})}),v.jsx(Bt,{animationDelay:50,children:v.jsx(zi,{title:c("EDITOR_ArtistName"),value:S,onChange:me=>d(me.target.value)})}),v.jsx(Bt,{animationDelay:100,children:v.jsx(zi,{title:c("EDITOR_TitleSize"),value:b,onChange:Zr})}),v.jsx(Bt,{animationDelay:150,children:v.jsx(zi,{title:c("EDITOR_ArtistSize"),value:k,onChange:me=>y(me.target.value)})}),v.jsx(Bt,{animationDelay:200,children:v.jsx(zi,{title:c("EDITOR_TracksSize"),value:R,onChange:Hr})}),v.jsx(Bt,{animationDelay:250,children:v.jsx(zi,{title:c("EDITOR_MarginTop"),value:T,onChange:me=>Y(me.target.value)})}),v.jsx(Bt,{animationDelay:300,children:v.jsx(zi,{title:c("EDITOR_MarginSide"),value:K,onChange:me=>ne(me.target.value)})}),v.jsx(Bt,{animationDelay:350,children:v.jsx(s3,{title:c("EDITOR_CoverEditor"),text:c("EDITOR_EditCover"),onClick:na,icon:f8})}),v.jsx(Bt,{animationDelay:375,children:v.jsx(zi,{title:c("EDITOR_MarginBackground"),value:J,onChange:me=>E(me.target.value)})}),v.jsx(Bt,{animationDelay:400,children:v.jsx(Xu,{title:it,value:_t,onChangeTitle:me=>tt(me.target.value),onChangeDate:me=>ot(me.target.value)})}),v.jsx(Bt,{animationDelay:450,children:v.jsx(Xu,{title:Ve,value:We,onChangeTitle:me=>Je(me.target.value),onChangeDate:me=>At(me.target.value)})}),v.jsx(Bt,{animationDelay:500,children:v.jsx(Ea,{title:c("EDITOR_BackgroundColor"),value:F,onClick:me=>jt(me,"backgroundColor")})}),v.jsx(Bt,{animationDelay:550,children:v.jsx(Ea,{title:c("EDITOR_TextColor"),value:$,onClick:me=>jt(me,"textColor")})}),v.jsx(Bt,{animationDelay:600,children:v.jsx(Ea,{title:`${c("EDITOR_Color")} 1`,value:ce,onClick:me=>jt(me,"color1")})}),v.jsx(Bt,{animationDelay:650,children:v.jsx(Ea,{title:`${c("EDITOR_Color")} 2`,value:ee,onClick:me=>jt(me,"color2")})}),v.jsx(Bt,{animationDelay:700,children:v.jsx(Ea,{title:`${c("EDITOR_Color")} 3`,value:Ce,onClick:me=>jt(me,"color3")})}),v.jsx(Bt,{animationDelay:750,children:v.jsx(Es,{title:c("EDITOR_Watermark"),value:L,onChange:me=>H(me),text:c("EDITOR_WatermarkText")})}),v.jsx(Bt,{animationDelay:800,children:v.jsx(Es,{title:c("EDITOR_Fade"),value:V,onChange:me=>Q(me),text:c("EDITOR_FadeText")})}),v.jsx(Bt,{animationDelay:850,children:v.jsx(Es,{title:c("EDITOR_Uncompressed"),value:Ne,onChange:me=>Me(me),text:c("EDITOR_UncompressedText")})}),v.jsx(Bt,{animationDelay:900,children:v.jsx(Es,{title:c("EDITOR_Tracklist"),value:re,onChange:me=>ue(me),text:c("EDITOR_TracklistText")})}),v.jsx(Bt,{animationDelay:950,children:v.jsx(Ku,{title:c("EDITOR_Cover"),onChange:ti,text:je,accept:"image/png, image/jpg, image/jpeg",icon:l3})}),v.jsx(Bt,{animationDelay:1e3,children:v.jsx(Ku,{title:c("EDITOR_Font"),text:(ve==null?void 0:ve.name)||c("EDITOR_DefaultFont"),onChange:W,accept:".ttf,.otf",icon:c3})})]}):v.jsxs(n8,{children:[v.jsx(o8,{value:De,onChange:me=>gt(me.target.value),placeholder:c("EDITOR_TracklistPlaceholder"),"data-lenis-prevent":!0}),v.jsxs(i8,{children:[v.jsx(wh,{onClick:ia,children:c("EDITOR_RemoveParentheses")}),v.jsx(wh,{onClick:pn,children:c("EDITOR_RemoveBrackets")})]})]}),v.jsx(Bt,{animationDelay:1050,children:v.jsxs(a8,{children:[v.jsxs(ic,{onClick:Dr,children:[v.jsx(l8,{}),v.jsx(oc,{children:"PNG"})]}),v.jsxs(ic,{onClick:Fn,children:[v.jsx(s8,{}),v.jsx(oc,{children:"PDF"})]}),v.jsxs(ic,{apply:!0,onClick:qr,children:[v.jsx(c8,{$spinning:Ao}),v.jsx(oc,{children:c("EDITOR_Apply")})]})]})}),v.jsx(Bt,{animationDelay:1100,children:v.jsxs(h8,{children:["Ctrl+S: ",c("EDITOR_Apply")," • Ctrl+D: PNG • Ctrl+Shift+D: PDF"]})})]})]}),yt&&at&&Xe&&Ou.createPortal(v.jsx(zg,{DefaultColor:Xe==="backgroundColor"?F:Xe==="textColor"?$:Xe==="color1"?ce:Xe==="color2"?ee:Ce,image:ge,predefinedColors:[ce,ee,Ce,F,$],onDone:me=>{switch(Xe){case"backgroundColor":G(me);break;case"textColor":oe(me);break;case"color1":de(me);break;case"color2":se(me);break;case"color3":be(me);break}Si()},position:at,onClose:Si}),document.body),lt&&Xt&&Ou.createPortal(v.jsx(Vg,{position:Xt,albumCoverUrl:Ne?xe:ge,initialZoom:Qe,initialHorizontalPosition:Rn,initialVerticalPosition:un,initialBlur:Ze,onDone:me=>{Or(!1),bt(me.zoom),dr(me.horizontalPosition),Xr(me.verticalPosition),hn(me.blur),No()},onClose:No}),document.body)]}):v.jsx(w0,{})})});Zc.displayName="PosterEditor";const d8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},p8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},m8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const o=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),v.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},g8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},v8=z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,b8=z(o0)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,x8=z.h3`
  font-size: 1.3em;
  font-weight: bold;
`,Jc=Yt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,w8=z.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${Jc} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,zs=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${Jc} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Bs=z.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${Jc} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,y8=z.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,S8=z.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function _8({onSelectModel:e,onBack:t}){const{t:r}=lr(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},o={marginCover:160,useFade:!1,marginTop:20},a={marginCover:-1100,marginBackground:-1200,useFade:!1},c={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function l(f,p){a5("select_model","ModelSelector",f),e&&e(f,p)}const h=[0,.08,.16,.24];return v.jsxs(v.Fragment,{children:[v.jsxs(v8,{onClick:t,children:[v.jsx(b8,{}),v.jsx(x8,{children:r("GoBack")})]}),v.jsx(y8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),v.jsx(S8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),v.jsxs(w8,{children:[v.jsxs(zs,{delay:h[0],onClick:()=>l("standart",c),children:[v.jsx(d8,{width:200}),v.jsx(Bs,{delay:h[0],children:"Standard"})]}),v.jsxs(zs,{delay:h[1],onClick:()=>l("frame",o),children:[v.jsx(g8,{width:200}),v.jsx(Bs,{delay:h[1],children:"Frame"})]}),v.jsxs(zs,{delay:h[2],onClick:()=>l("basic",n),children:[v.jsx(p8,{width:200}),v.jsx(Bs,{delay:h[2],children:"Basic"})]}),v.jsxs(zs,{delay:h[3],onClick:()=>l("fullcover",a),children:[v.jsx(m8,{width:200}),v.jsx(Bs,{delay:h[3],children:"Full Cover"})]})]})]})}const C8=z.div`
    width: 100%;
`,A8=z.div`
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
`,k8=z(rp)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,L8=z(f5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,N8=z.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,E8=z.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function I8({onSearch:e,value:t=""}){const{t:r}=lr(),[n,o]=O.useState(t);O.useEffect(()=>{o(t)},[t]);const a=h=>{h.key==="Enter"&&(e(n),n.trim()&&Vu(n.trim()))},c=h=>{o(h.target.value)},l=()=>{e(n),n.trim()&&Vu(n.trim())};return v.jsx(C8,{children:v.jsxs(A8,{role:"search","aria-label":"Album search for poster creation",children:[v.jsx(k8,{"aria-hidden":"true"}),v.jsx(N8,{}),v.jsx(E8,{placeholder:r("SearchPlaceholder"),value:n,onChange:c,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),v.jsx(L8,{onClick:l,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const P8=z.div`
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

`,T8=z.img`
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
`,j8=z.h3`
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
`,R8=z.p`
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
`,M8=z.div`
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
`;function O8({title:e,artist:t,cover:r,id:n,onClick:o,animationDelay:a=0}){const[c,l]=O.useState(!1),[h,f]=O.useState(!1),[p,w]=O.useState(!1);O.useEffect(()=>{if(p)l(!0);else{const d=setTimeout(()=>{l(!0),w(!0)},a);return()=>clearTimeout(d)}},[a,p]);const S=()=>{f(!0)};return v.jsxs(P8,{onClick:()=>o(n),$visible:c,children:[v.jsx(T8,{src:r,$loaded:h,onLoad:S,loading:"lazy"}),v.jsxs(M8,{children:[v.jsx(j8,{children:e}),v.jsx(R8,{children:t})]})]})}const F8=z.div`
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
`,D8=z.button`
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
`,z8=z.div`
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
`;function yh({query:e,onclick:t}){const{t:r}=lr(),[n,o]=O.useState([]),[a,c]=O.useState(""),[l,h]=O.useState(0),[f,p]=O.useState(!0),[w,S]=O.useState(!1),[d,b]=O.useState(!1),[_,k]=O.useState(0),[y,R]=O.useState(!1),P=20;O.useEffect(()=>{(async()=>{const M=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();c(M.access_token)})()},[]),O.useEffect(()=>{o([]),h(0),p(!0),k(0),R(!1)},[e]),O.useEffect(()=>{const Y=async(K=!1)=>{if(a){K?b(!0):S(!0);try{let ne;const X=K?l:0;if(e?ne=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${X}`,{headers:{Authorization:`Bearer ${a}`}}):ne=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${X}&limit=${P}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!ne.ok){const ce=await ne.text();throw new Error(`Erro na API: ${ce}`)}const M=await ne.json(),E=M.albums.items.filter(ce=>ce!=null).map(ce=>{var de,ee;return{id:ce.id,title:ce.name,artist:(de=ce.artists)==null?void 0:de.map(se=>se.name).join(", "),cover:(ee=ce.images[0])==null?void 0:ee.url}});K?(R(!1),k(n.length),o(ce=>[...ce,...E])):(R(!1),k(0),o(E));const F=(E.length-1)*80;setTimeout(()=>{R(!0)},F+800);const $=M.albums.total,oe=K?n.length+E.length:E.length;p(oe<$&&E.length===P)}catch(ne){console.error(ne)}finally{S(!1),b(!1)}}};a&&(n.length===0||l===0)&&Y(!1)},[e,a]);const T=async()=>{if(!a||!f||d)return;const Y=l+P;h(Y);try{b(!0);let K;if(e?K=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${P}&offset=${Y}`,{headers:{Authorization:`Bearer ${a}`}}):K=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${Y}&limit=${P}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!K.ok){const $=await K.text();throw new Error(`Erro na API: ${$}`)}const ne=await K.json(),M=ne.albums.items.filter($=>$!=null).map($=>{var oe,ce;return{id:$.id,title:$.name,artist:(oe=$.artists)==null?void 0:oe.map(de=>de.name).join(", "),cover:(ce=$.images[0])==null?void 0:ce.url}});R(!1),k(n.length),o($=>[...$,...M]);const J=(M.length-1)*80;setTimeout(()=>{R(!0)},J+800);const F=ne.albums.total,G=n.length+M.length;p(G<F&&M.length===P)}catch(K){console.error(K)}finally{b(!1)}};return v.jsx(v.Fragment,{children:w&&n.length===0?v.jsx(w0,{}):v.jsxs(v.Fragment,{children:[v.jsx(F8,{children:n.map((Y,K)=>{const ne=K>=_?K-_:K;return v.jsx(O8,{onClick:()=>t(Y.id),cover:Y.cover,title:Y.title,artist:Y.artist,id:Y.id,animationDelay:ne*80},Y.id)})}),f&&v.jsx(z8,{$visible:y,children:v.jsx(D8,{onClick:T,disabled:d,children:r(d?"LoadingMore":"LoadMore")})})]})})}const B8=({onBack:e})=>{const[t,r]=O.useState(""),[n,o]=O.useState(null),[a,c]=O.useState(!1),[l,h]=O.useState(null),[f,p]=O.useState(null),w=O.useRef(null);O.useEffect(()=>{a&&n&&w.current&&setTimeout(()=>{w.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[a,n]);function S(_){o(_),c(!0),h(null),p(null)}function d(){o(null),c(!1),h(null),p(null),e&&e()}const b=_=>{r(_)};return n&&l&&f?v.jsx(Zc,{albumID:n,handleClickBack:d,model:l,modelParams:f,source:"search_creation"}):n&&a?v.jsx("div",{ref:w,children:v.jsx(_8,{onSelectModel:(_,k)=>{h(_),p(k),c(!1)},onBack:d})}):v.jsxs(v.Fragment,{children:[v.jsx(I8,{onSearch:b,value:t}),t.trim()?v.jsx(yh,{query:t,onclick:S}):v.jsx("div",{children:v.jsx(yh,{onclick:S})})]})},mo=z.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function U8({loadingComplete:e}){const{t}=lr(),[r,n]=O.useState(null),o=O.useRef(null),[a,c]=$i(),[l,h]=$i(),[f,p]=$i(),[w,S]=$i(),[d,b]=$i(),[_,k]=$i(),[y,R]=$i(),P=Y=>{u5(Y.albumName||"Unknown Album",Y.artistsName||"Unknown Artist",Y.albumID||"","album_collection"),n(Y),setTimeout(()=>{if(o.current){const K=o.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:K,behavior:"smooth"})}},100)},T=()=>{n(null)};return v.jsxs(v.Fragment,{children:[v.jsx(mm,{showAnimation:e,onRecreate:P}),v.jsx(mo,{ref:a,$isVisible:c,children:v.jsx(Va,{text:t("anchorArt"),type:1})}),v.jsx(mo,{ref:l,$isVisible:h,children:v.jsx(jc,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),v.jsx(mo,{ref:f,$isVisible:p,children:r?v.jsx(Zc,{ref:o,albumID:r.albumID,initialPosterJson:r,handleClickBack:T}):v.jsx(B8,{})}),v.jsx(mo,{ref:w,$isVisible:S,children:v.jsx(qm,{})}),v.jsx(mo,{ref:d,$isVisible:b,children:v.jsx(Fm,{})}),v.jsx(mo,{ref:_,$isVisible:k,children:v.jsx(Pm,{})}),v.jsx(mo,{ref:y,$isVisible:R,children:v.jsx(tg,{})})]})}function S2(e){return Tt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const Sh=z.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,_h=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,Ch=z.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,H8=z.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,q8=z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,Ah=z.button`
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
`,kh=z.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,$8=z(u0)`
    width: 20px;
    height: 20px;
`,V8=z(S2)`
    width: 20px;
    height: 20px;
`,W8=z.div`
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
`,Lh=z.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,G8=z.p`
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
`;const Y8=z.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,X8=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Z8=z.div`
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
`,J8=z.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function Q8(){const{t:e}=lr(),t=yo(),[r]=$d(),{user:n,loading:o,loginWithGoogle:a,loginWithSpotify:c}=$a();if(O.useEffect(()=>{if(!o){if(n){t("/dashboard");return}r.get("login")==="success"&&t("/dashboard")}},[n,o,t,r]),o)return v.jsxs(Sh,{children:[v.jsx(Js,{iconColor:"var(--AccentColor)"}),v.jsxs(_h,{children:[v.jsx(gi,{fill:"var(--textColor)",width:"100px"}),v.jsx(Ch,{children:e("Loading")})]})]});const l=()=>{t("/")};return v.jsxs(Sh,{children:[v.jsx(Js,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),v.jsx(_h,{children:v.jsxs(Y8,{children:[v.jsx(Z8,{onClick:l,children:v.jsx(gi,{fill:"var(--textColor)",width:"25vw"})}),v.jsxs(X8,{children:[v.jsx(J8,{children:v.jsx(gi,{fill:"var(--textColor)",width:"90px"})}),v.jsx(Ch,{children:e("LOGIN_Welcome")}),v.jsx(H8,{children:e("LOGIN_JoinCommunity")}),v.jsxs(q8,{children:[v.jsxs(Ah,{onClick:a,children:[v.jsx($8,{}),v.jsx(kh,{children:e("LOGIN_GoogleSignIn")})]}),v.jsxs(W8,{children:[v.jsx(Lh,{}),v.jsx(G8,{children:e("LOGIN_Or")}),v.jsx(Lh,{})]}),v.jsxs(Ah,{onClick:c,children:[v.jsx(V8,{}),v.jsx(kh,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function K8(e){return Tt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const eb=Yt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,tb=Yt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,rb=Yt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,nb=Yt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,ib=z.div`
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
    animation: ${e=>e.isClosing?nb:rb} 0.3s ease-in-out forwards;
`,ob=z.div`
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
    animation: ${e=>e.isClosing?tb:eb} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,ab=z.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,sb=z.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,lb=z(a0)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,cb=z.div`
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
`,ub=z.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,hb=z.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,fb=z.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Nh=z.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,Eh=z.label`
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
`,ac=z.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`,db=z.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,pb=z.button`
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
`,mb=z.button`
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
`,gb=z.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function vb({isOpen:e,onClose:t,onProfileUpdate:r}){const{user:n,updateUser:o}=$a(),{t:a}=lr(),[c,l]=O.useState({name:"",username:""}),[h,f]=O.useState({}),[p,w]=O.useState(!1),[S,d]=O.useState(""),[b,_]=O.useState(!1);O.useEffect(()=>{n&&l({name:n.name||"",username:n.username||""})},[n]);const k=()=>{const T={};return c.name.trim()||(T.name=a("NameIsRequired")),c.username.trim()?c.username.length<3?T.username=a("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(c.username)||(T.username=a("UsernameFormat")):T.username=a("UsernameIsRequired"),f(T),Object.keys(T).length===0},y=T=>{const{name:Y,value:K}=T.target;l(ne=>({...ne,[Y]:K})),h[Y]&&f(ne=>({...ne,[Y]:""})),S&&d("")},R=async T=>{var Y,K,ne,X;if(T.preventDefault(),!!k()){w(!0),d("");try{await $n.updateUserProfile({name:c.name.trim(),username:c.username.trim()}),o({...n,name:c.name.trim(),username:c.username.trim()}),d(a("ProfileUpdatedSuccessfully")),r&&r(),setTimeout(()=>{P()},1500)}catch(M){console.error("Profile update failed:",M),(Y=M.message)!=null&&Y.includes("409")||(K=M.message)!=null&&K.includes("taken")?f({username:a("UsernameTaken")}):(ne=M.message)!=null&&ne.includes("400")||(X=M.message)!=null&&X.includes("invalid")?f({username:a("InvalidUsernameFormat")}):f({general:a("FailedToUpdateProfile")})}finally{w(!1)}}},P=()=>{_(!0),setTimeout(()=>{_(!1),t(),f({}),d("")},300)};return e?(document.body.style.overflow="hidden",v.jsx(ib,{isClosing:b,children:v.jsxs(ob,{isClosing:b,children:[v.jsxs(ab,{children:[v.jsx(ub,{children:v.jsx(gi,{width:25,height:25,fill:"var(--textColor)"})}),v.jsx(sb,{children:a("EditProfile")}),v.jsx(cb,{onClick:P,children:v.jsx(lb,{})})]}),v.jsx(hb,{}),v.jsxs(fb,{onSubmit:R,children:[v.jsxs(Nh,{children:[v.jsx(Eh,{htmlFor:"name",children:a("Name")}),v.jsx(Ih,{type:"text",id:"name",name:"name",value:c.name,onChange:y,placeholder:a("EnterYourName"),disabled:p}),h.name&&v.jsx(ac,{children:h.name})]}),v.jsxs(Nh,{children:[v.jsx(Eh,{htmlFor:"username",children:a("Username")}),v.jsx(Ih,{type:"text",id:"username",name:"username",value:c.username,onChange:y,placeholder:a("EnterYourUsername"),disabled:p}),h.username&&v.jsx(ac,{children:h.username})]}),h.general&&v.jsx(ac,{children:h.general}),S&&v.jsx(gb,{children:S}),v.jsxs(db,{children:[v.jsx(pb,{type:"button",onClick:P,disabled:p,children:a("Cancel")}),v.jsx(mb,{type:"submit",disabled:p,children:a(p?"Saving":"SaveChanges")})]})]})]})})):null}Yt`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;Yt`
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
`;const _2=z.div`
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
`,bb=z.div`
  position: relative;
  display: inline-block;
  &:hover ${_2} {
    opacity: 0.9;
  }
`;function Ph({text:e,children:t,delay:r=0}){const[n,o]=O.useState(!1),[a,c]=O.useState({top:0,left:0}),l=f=>{const p=f.currentTarget.getBoundingClientRect();c({top:p.top+p.height/2-17,left:p.right+15}),o(!0)},h=()=>{o(!1)};return v.jsxs(bb,{onMouseEnter:l,onMouseLeave:h,children:[v.jsx(_2,{isVisible:n,style:{top:a.top,left:a.left},children:e}),t]})}const xb=z.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,wb=z.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,yb=z.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,Sb=z.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,_b=z.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,Cb=z.p`
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
`,jh=z.button`
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
`;const Ab=z(u0)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,kb=z(S2)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,Rh=z.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,Lb=z.div`
    display: flex;
    align-items: center;
    width: 100%;
`,Nb=z(K8)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,Eb=z.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,Ib=z.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,Pb=z.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function Tb(){const e=yo(),{user:t,loading:r,logout:n,isAuthenticated:o}=$a(),[a,c]=O.useState(null),[l,h]=O.useState(!1),{t:f}=lr();O.useEffect(()=>{if(!r&&!o){e("/login");return}o&&t&&p()},[o,r,e,t]);const p=async()=>{try{const _=await $n.getUserProfile();c(_.user)}catch(_){console.error("Failed to fetch user profile:",_)}},w=async()=>{await n(),e("/login")},S=()=>{h(!0)},d=()=>{h(!1)},b=()=>{p()};return r?v.jsx(Tc,{isVisible:!0,initialFade:!0}):t?v.jsxs(xb,{children:[v.jsx(Js,{iconColor:"var(--AccentColor)"}),v.jsxs(wb,{children:[(a==null?void 0:a.avatar)&&v.jsx(Sb,{src:a.avatar,alt:a.name}),v.jsxs(yb,{children:[v.jsxs(Lb,{children:[v.jsx(_b,{children:(a==null?void 0:a.name)||t.name}),(a==null?void 0:a.hasGoogle)&&v.jsx(Ph,{text:f("ConnectedToGoogle"),delay:200,children:v.jsx(Rh,{children:v.jsx(Ab,{})})}),(a==null?void 0:a.hasSpotify)&&v.jsx(Ph,{text:f("ConnectedToSpotify"),delay:200,children:v.jsx(Rh,{children:v.jsx(kb,{})})}),v.jsxs(Ib,{children:[v.jsx(jh,{onClick:S,children:f("EditProfile")}),v.jsx(Th,{onClick:w,children:f("Logout")})]})]}),v.jsxs(Cb,{children:["@",(a==null?void 0:a.username)||t.username]})]})]}),v.jsxs(Pb,{children:[v.jsx(jh,{onClick:S,children:f("EditProfile")}),v.jsx(Th,{onClick:w,children:f("Logout")})]}),v.jsx(Nb,{}),v.jsx(Eb,{children:f("NoActivityYet")}),v.jsx(vb,{isOpen:l,onClose:d,onProfileUpdate:b})]}):null}const jb=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:o=!1,onClick:a})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[v.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),v.jsx("path",{fill:n,style:{animation:o?"pulse 2s infinite":"none",cursor:o?"pointer":"default"},onClick:a,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),C2=document.createElement("style");C2.textContent=`
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
`;document.head.appendChild(C2);const Rb="/assets/kanye.BMPu-Gq3.png",Mb="/assets/runaway.DjODmQSR.mp3",Ob=()=>{const e=yo(),{t}=lr(),[r,n]=O.useState(0),o=O.useRef(null),[a,c]=O.useState(!1),l=()=>{n(r+1),console.log(r)},h=()=>{o.current&&(o.current.loop=!0,o.current.paused?(o.current.play(),c(!0)):(o.current.pause(),c(!1)))};return v.jsxs(Fb,{playing:a,children:[v.jsx(jb,{width:"150px",height:"150px",fillHeart:a?"#edcd6b":"var(--textColor)",fillQuestion:a?"#edcd6b":"var(--textColor)",pulse:!a,onClick:l}),v.jsxs(Hb,{children:[v.jsx(sc,{playing:a,active:r>=1}),v.jsx(sc,{playing:a,active:r>=2}),v.jsx(sc,{playing:a,active:r>=3})]}),v.jsx(Db,{children:t("errorTitle")}),v.jsx(zb,{children:t("errorMessage")}),v.jsx(Bb,{playing:a,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&v.jsxs(v.Fragment,{children:[v.jsx(Ub,{src:Rb,alt:"Kanye",onClick:h}),v.jsx("audio",{ref:o,src:Mb})]})]})},Fb=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,Db=z.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,zb=z.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,Bb=z.button`
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
`,Ub=z.img`
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
`,Hb=z.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,sc=z.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,qb=({children:e})=>{const t=yo(),{isAuthenticated:r,loading:n}=$a();return O.useEffect(()=>{!n&&!r&&t("/login")},[r,n,t]),n?v.jsx("div",{children:"Loading..."}):r?e:null},$b=()=>(O.useEffect(()=>{o5()},[]),null),Mh=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},Qc=()=>"https://posterfy.space"+"/",Vb=e=>{const t=Qc(),r=Mh(e),n=Mh(t),o=e.includes("://www."),a=e.startsWith("http://");return o||a||r!==n},Wb=()=>{const e=window.location.href,t=Qc(),r=[];return Vb(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},Gb=()=>(O.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const o=document.querySelector('meta[name="description"]');(!o||o.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const a=Wb();a.isValid||a.issues.forEach(h=>{r.push(`${h.type}: ${h.message}`)});const c=document.querySelector('meta[name="robots"]');return c&&c.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),Yb=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(O.useEffect(()=>{const o="https://posterfy.space",a=Qc(),c=o+"/albuns.png";document.title=e;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",t);const h=document.querySelector('meta[name="keywords"]');h&&h.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",a):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",a),document.head.appendChild(f));const p=document.querySelector('meta[property="og:title"]');p&&p.setAttribute("content",e);const w=document.querySelector('meta[property="og:description"]');w&&w.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",c);const d=document.querySelector('meta[property="og:url"]');d&&d.setAttribute("content",a);const b=document.querySelector('meta[name="twitter:title"]');b&&b.setAttribute("content",e);const _=document.querySelector('meta[name="twitter:description"]');_&&_.setAttribute("content",t);const k=document.querySelector('meta[name="twitter:image"]');k&&k.setAttribute("content",c);const y={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:o+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},R=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');R&&R.remove();const P=document.createElement("script");P.type="application/ld+json",P.id="dynamic-structured-data",P.innerHTML=JSON.stringify(y),document.head.appendChild(P)},[e,t,r]),null);var Xb="1.3.14";function A2(e,t,r){return Math.max(e,Math.min(t,r))}function Zb(e,t,r){return(1-r)*e+r*t}function Jb(e,t,r,n){return Zb(e,t,1-Math.exp(-r*n))}function Qb(e,t){return(e%t+t)%t}var Kb=class{constructor(){Pe(this,"isRunning",!1);Pe(this,"value",0);Pe(this,"from",0);Pe(this,"to",0);Pe(this,"currentTime",0);Pe(this,"lerp");Pe(this,"duration");Pe(this,"easing");Pe(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=A2(0,this.currentTime/this.duration,1);t=n>=1;const o=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=Jb(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:o,onStart:a,onUpdate:c}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function ex(e,t){let r;return function(...n){let o=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(o,n)},t)}}var tx=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Pe(this,"width",0);Pe(this,"height",0);Pe(this,"scrollHeight",0);Pe(this,"scrollWidth",0);Pe(this,"debouncedResize");Pe(this,"wrapperResizeObserver");Pe(this,"contentResizeObserver");Pe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=ex(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},k2=class{constructor(){Pe(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let o=0,a=r.length;o<a;o++)(n=r[o])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(o=>t!==o)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Oh=100/6,Hi={passive:!1},rx=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Pe(this,"touchStart",{x:0,y:0});Pe(this,"lastDelta",{x:0,y:0});Pe(this,"window",{width:0,height:0});Pe(this,"emitter",new k2);Pe(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Pe(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});Pe(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Pe(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const o=n===1?Oh:n===2?this.window.width:1,a=n===1?Oh:n===2?this.window.height:1;t*=o,r*=a,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Pe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hi),this.element.addEventListener("touchstart",this.onTouchStart,Hi),this.element.addEventListener("touchmove",this.onTouchMove,Hi),this.element.addEventListener("touchend",this.onTouchEnd,Hi)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Hi),this.element.removeEventListener("touchstart",this.onTouchStart,Hi),this.element.removeEventListener("touchmove",this.onTouchMove,Hi),this.element.removeEventListener("touchend",this.onTouchEnd,Hi)}},Fh=e=>Math.min(1,1.001-Math.pow(2,-10*e)),nx=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:l,easing:h,lerp:f=.1,infinite:p=!1,orientation:w="vertical",gestureOrientation:S=w==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:b=1,autoResize:_=!0,prevent:k,virtualScroll:y,overscroll:R=!0,autoRaf:P=!1,anchors:T=!1,autoToggle:Y=!1,allowNestedScroll:K=!1,__experimental__naiveDimensions:ne=!1}={}){Pe(this,"_isScrolling",!1);Pe(this,"_isStopped",!1);Pe(this,"_isLocked",!1);Pe(this,"_preventNextNativeScrollEvent",!1);Pe(this,"_resetVelocityTimeout",null);Pe(this,"__rafID",null);Pe(this,"isTouching");Pe(this,"time",0);Pe(this,"userData",{});Pe(this,"lastVelocity",0);Pe(this,"velocity",0);Pe(this,"direction",0);Pe(this,"options");Pe(this,"targetScroll");Pe(this,"animatedScroll");Pe(this,"animate",new Kb);Pe(this,"emitter",new k2);Pe(this,"dimensions");Pe(this,"virtualScroll");Pe(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Pe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Pe(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Pe(this,"onClick",e=>{const r=e.composedPath().find(n=>{var o;return n instanceof HTMLAnchorElement&&((o=n.getAttribute("href"))==null?void 0:o.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.split("#")[1]}`;this.scrollTo(a,o)}}});Pe(this,"onPointerDown",e=>{e.button===1&&this.reset()});Pe(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const o=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const c=t===0&&r===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(c||h)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const p=this.options.prevent;if(f.find(k=>{var y,R,P;return k instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(k))||((y=k.hasAttribute)==null?void 0:y.call(k,"data-lenis-prevent"))||o&&((R=k.hasAttribute)==null?void 0:R.call(k,"data-lenis-prevent-touch"))||a&&((P=k.hasAttribute)==null?void 0:P.call(k,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(k,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let S=r;this.options.gestureOrientation==="both"?S=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(S=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=o&&this.options.syncTouch,_=o&&n.type==="touchend";_&&(S=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+S,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Pe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Pe(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Xb,(!e||e===document.documentElement)&&(e=window),typeof l=="number"&&typeof h!="function"?h=Fh:typeof h=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:l,easing:h,lerp:f,infinite:p,gestureOrientation:S,orientation:w,touchMultiplier:d,wheelMultiplier:b,autoResize:_,prevent:k,virtualScroll:y,overscroll:R,autoRaf:P,anchors:T,autoToggle:Y,allowNestedScroll:K,__experimental__naiveDimensions:ne},this.dimensions=new tx(e,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new rx(r,{touchMultiplier:d,wheelMultiplier:b}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:o=this.options.duration,easing:a=this.options.easing,lerp:c=this.options.lerp,onStart:l,onComplete:h,force:f=!1,programmatic:p=!0,userData:w}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let S;if(typeof e=="string"?(S=document.querySelector(e),S||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(S=e),S){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?b.left:b.top}const d=S.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(p){this.targetScroll=this.animatedScroll=this.scroll;const S=e-this.animatedScroll;S>this.limit/2?e=e-this.limit:S<-this.limit/2&&(e=e+this.limit)}}else e=A2(0,e,this.limit);if(e===this.targetScroll){l==null||l(this),h==null||h(this);return}if(this.userData=w??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}p||(this.targetScroll=e),typeof o=="number"&&typeof a!="function"?a=Fh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:a,lerp:c,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(S,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),p&&(this.targetScroll=S),d||this.emit(),d&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),o=e._lenis??(e._lenis={});let a,c,l,h,f,p,w,S;const d=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();const Y=window.getComputedStyle(e);o.computedStyle=Y;const K=Y.overflowX,ne=Y.overflowY;if(a=["auto","overlay","scroll"].includes(K),c=["auto","overlay","scroll"].includes(ne),o.hasOverflowX=a,o.hasOverflowY=c,!a&&!c||d==="vertical"&&!c||d==="horizontal"&&!a)return!1;f=e.scrollWidth,p=e.scrollHeight,w=e.clientWidth,S=e.clientHeight,l=f>w,h=p>S,o.isScrollableX=l,o.isScrollableY=h,o.scrollWidth=f,o.scrollHeight=p,o.clientWidth=w,o.clientHeight=S}else l=o.isScrollableX,h=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,f=o.scrollWidth,p=o.scrollHeight,w=o.clientWidth,S=o.clientHeight;if(!a&&!c||!l&&!h||d==="vertical"&&(!c||!h)||d==="horizontal"&&(!a||!l))return!1;let b;if(d==="horizontal")b="x";else if(d==="vertical")b="y";else{const Y=t!==0,K=r!==0;Y&&a&&l&&(b="x"),K&&c&&h&&(b="y")}if(!b)return!1;let _,k,y,R,P;if(b==="x")_=e.scrollLeft,k=f-w,y=t,R=a,P=l;else if(b==="y")_=e.scrollTop,k=p-S,y=r,R=c,P=h;else return!1;return(y>0?_<k:_>0)&&R&&P}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Qb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function ix(){const{pathname:e}=bi(),[t,r]=O.useState(!1),[n,o]=O.useState(!1);return O.useEffect(()=>{r(!0),o(!0),window.scrollTo(0,0);const a=setTimeout(()=>{r(!1),setTimeout(()=>{o(!1)},300)},2e3);return()=>clearTimeout(a)},[e]),n?v.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:v.jsx(Tc,{isVisible:!0})}):null}function ox(){const[e,t]=O.useState(!0),[r,n]=O.useState(!1);return h5(),O.useEffect(()=>{const o=new nx({duration:1.2,easing:c=>Math.min(1,1.001-Math.pow(2,-10*c)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function a(c){o.raf(c),requestAnimationFrame(a)}return requestAnimationFrame(a),()=>{o.destroy()}},[]),O.useEffect(()=>Qd(),[]),O.useEffect(()=>{const o=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(o)},[]),O.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),v.jsx(Kd,{children:v.jsx(T5,{children:v.jsxs(O5,{children:[v.jsx(Yb,{}),v.jsx(Gb,{}),v.jsx($b,{}),v.jsxs(zd,{children:[v.jsx(ix,{}),v.jsxs(md,{children:[v.jsx(qi,{path:"/",element:v.jsx(Rl,{showNavbar:!0,showFooter:!0}),children:v.jsx(qi,{index:!0,element:v.jsx(U8,{loadingComplete:r})})}),v.jsx(qi,{path:"/login",element:v.jsx(Rl,{showNavbar:!1,showFooter:!1}),children:v.jsx(qi,{index:!0,element:v.jsx(Q8,{})})}),v.jsx(qi,{path:"/dashboard",element:v.jsx(Rl,{showNavbar:!0,showFooter:!0}),children:v.jsx(qi,{index:!0,element:v.jsx(qb,{children:v.jsx(Tb,{})})})}),v.jsx(qi,{path:"*",element:v.jsx(Ob,{})})]})]}),v.jsx(Tc,{isVisible:e})]})})})}mf.use(gf).init({resources:{en:{translation:{heroDescription:"Transform your music passion into visual art by creating custom posters for your favorite albums.",anchorArt:"Art.",ArtTitle:`Watch the music
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
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Bh(document.getElementById("root")).render(v.jsx(O.StrictMode,{children:v.jsx(ox,{})}));export{Pt as _};
