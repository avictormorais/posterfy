const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.es.CM849GaJ.js","assets/vendor.BGNHhJSV.js","assets/ui.C5ldsGQa.js","assets/i18n.DCVDtlyB.js"])))=>i.map(i=>d[i]);
var mf=Object.defineProperty;var gf=(e,t,r)=>t in e?mf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ie=(e,t,r)=>gf(e,typeof t!="symbol"?t+"":t,r);import{r as j,a as vf,e as Mr,c as bf,R as zu}from"./vendor.BGNHhJSV.js";import{m as Xt,d as z,G as Lt,l as za}from"./ui.C5ldsGQa.js";import{u as ur,i as xf,a as wf}from"./i18n.DCVDtlyB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var Hh={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=j,_f=Symbol.for("react.element"),Sf=Symbol.for("react.fragment"),Cf=Object.prototype.hasOwnProperty,Af=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kf={key:!0,ref:!0,__self:!0,__source:!0};function qh(e,t,r){var n,o={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Cf.call(t,n)&&!kf.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:_f,type:e,key:a,ref:l,props:o,_owner:Af.current}}ol.Fragment=Sf;ol.jsx=qh;ol.jsxs=qh;Hh.exports=ol;var v=Hh.exports,$h,Bu=vf;$h=Bu.createRoot,Bu.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Uu="popstate";function Lf(e={}){function t(n,o){let{pathname:a,search:l,hash:c}=n.location;return hc("",{pathname:a,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Ba(o)}return Ef(t,r,null,e)}function Yt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nf(){return Math.random().toString(36).substring(2,10)}function Hu(e,t){return{usr:e.state,key:e.key,idx:t}}function hc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ra(t):t,state:r,key:t&&t.key||n||Nf()}}function Ba({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ra(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function Ef(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:a=!1}=n,l=o.history,c="POP",h=null,f=p();f==null&&(f=0,l.replaceState({...l.state,idx:f},""));function p(){return(l.state||{idx:null}).idx}function w(){c="POP";let k=p(),y=k==null?null:k-f;f=k,h&&h({action:c,location:S.location,delta:y})}function _(k,y){c="PUSH";let R=hc(S.location,k,y);f=p()+1;let I=Hu(R,f),P=S.createHref(R);try{l.pushState(I,"",P)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(P)}a&&h&&h({action:c,location:S.location,delta:1})}function d(k,y){c="REPLACE";let R=hc(S.location,k,y);f=p();let I=Hu(R,f),P=S.createHref(R);l.replaceState(I,"",P),a&&h&&h({action:c,location:S.location,delta:0})}function b(k){return Tf(k)}let S={get action(){return c},get location(){return e(o,l)},listen(k){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Uu,w),h=k,()=>{o.removeEventListener(Uu,w),h=null}},createHref(k){return t(o,k)},createURL:b,encodeLocation(k){let y=b(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:d,go(k){return l.go(k)}};return S}function Tf(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Ba(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function Vh(e,t,r="/"){return If(e,t,r,!1)}function If(e,t,r,n){let o=typeof t=="string"?ra(t):t,a=xi(o.pathname||"/",r);if(a==null)return null;let l=Wh(e);Pf(l);let c=null;for(let h=0;c==null&&h<l.length;++h){let f=qf(a);c=Uf(l[h],f,n)}return c}function Wh(e,t=[],r=[],n="",o=!1){let a=(l,c,h=o,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&h)return;Yt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let w=vi([n,p.relativePath]),_=r.concat(p);l.children&&l.children.length>0&&(Yt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Wh(l.children,t,_,w,h)),!(l.path==null&&!l.index)&&t.push({path:w,score:zf(w,l.index),routesMeta:_})};return e.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))a(l,c);else for(let f of Gh(l.path))a(l,c,!0,f)}),t}function Gh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let l=Gh(n.join("/")),c=[];return c.push(...l.map(h=>h===""?a:[a,h].join("/"))),o&&c.push(...l),c.map(h=>e.startsWith("/")&&h===""?"/":h)}function Pf(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Bf(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var jf=/^:[\w-]+$/,Rf=3,Of=2,Mf=1,Ff=10,Df=-2,qu=e=>e==="*";function zf(e,t){let r=e.split("/"),n=r.length;return r.some(qu)&&(n+=Df),t&&(n+=Of),r.filter(o=>!qu(o)).reduce((o,a)=>o+(jf.test(a)?Rf:a===""?Mf:Ff),n)}function Bf(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Uf(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",l=[];for(let c=0;c<n.length;++c){let h=n[c],f=c===n.length-1,p=a==="/"?t:t.slice(a.length)||"/",w=Qs({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},p),_=h.route;if(!w&&f&&r&&!n[n.length-1].route.index&&(w=Qs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},p)),!w)return null;Object.assign(o,w.params),l.push({params:o,pathname:vi([a,w.pathname]),pathnameBase:Gf(vi([a,w.pathnameBase])),route:_}),w.pathnameBase!=="/"&&(a=vi([a,w.pathnameBase]))}return l}function Qs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Hf(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],l=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:w},_)=>{if(p==="*"){let b=c[_]||"";l=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const d=c[_];return w&&!d?f[p]=void 0:f[p]=(d||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:l,pattern:e}}function Hf(e,t=!1,r=!0){jn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,h)=>(n.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function qf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function $f(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?ra(e):e;return{pathname:r?r.startsWith("/")?r:Vf(r,t):t,search:Yf(n),hash:Xf(o)}}function Vf(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Rl(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wf(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Yh(e){let t=Wf(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Xh(e,t,r,n=!1){let o;typeof e=="string"?o=ra(e):(o={...e},Yt(!o.pathname||!o.pathname.includes("?"),Rl("?","pathname","search",o)),Yt(!o.pathname||!o.pathname.includes("#"),Rl("#","pathname","hash",o)),Yt(!o.search||!o.search.includes("#"),Rl("#","search","hash",o)));let a=e===""||o.pathname==="",l=a?"/":o.pathname,c;if(l==null)c=r;else{let w=t.length-1;if(!n&&l.startsWith("..")){let _=l.split("/");for(;_[0]==="..";)_.shift(),w-=1;o.pathname=_.join("/")}c=w>=0?t[w]:"/"}let h=$f(o,c),f=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(f||p)&&(h.pathname+="/"),h}var vi=e=>e.join("/").replace(/\/\/+/g,"/"),Gf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Zh=["POST","PUT","PATCH","DELETE"];new Set(Zh);var Jf=["GET",...Zh];new Set(Jf);var na=j.createContext(null);na.displayName="DataRouter";var al=j.createContext(null);al.displayName="DataRouterState";j.createContext(!1);var Jh=j.createContext({isTransitioning:!1});Jh.displayName="ViewTransition";var Qf=j.createContext(new Map);Qf.displayName="Fetchers";var Kf=j.createContext(null);Kf.displayName="Await";var Zn=j.createContext(null);Zn.displayName="Navigation";var $a=j.createContext(null);$a.displayName="Location";var Jn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var Tc=j.createContext(null);Tc.displayName="RouteError";function ed(e,{relative:t}={}){Yt(Va(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=j.useContext(Zn),{hash:o,pathname:a,search:l}=Wa(e,{relative:t}),c=a;return r!=="/"&&(c=a==="/"?r:vi([r,a])),n.createHref({pathname:c,search:l,hash:o})}function Va(){return j.useContext($a)!=null}function wi(){return Yt(Va(),"useLocation() may be used only in the context of a <Router> component."),j.useContext($a).location}var Qh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kh(e){j.useContext(Zn).static||j.useLayoutEffect(e)}function Eo(){let{isDataRoute:e}=j.useContext(Jn);return e?md():td()}function td(){Yt(Va(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(na),{basename:t,navigator:r}=j.useContext(Zn),{matches:n}=j.useContext(Jn),{pathname:o}=wi(),a=JSON.stringify(Yh(n)),l=j.useRef(!1);return Kh(()=>{l.current=!0}),j.useCallback((h,f={})=>{if(jn(l.current,Qh),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=Xh(h,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vi([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,a,o,e])}var rd=j.createContext(null);function nd(e){let t=j.useContext(Jn).outlet;return t&&j.createElement(rd.Provider,{value:e},t)}function Wa(e,{relative:t}={}){let{matches:r}=j.useContext(Jn),{pathname:n}=wi(),o=JSON.stringify(Yh(r));return j.useMemo(()=>Xh(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function id(e,t){return e0(e,t)}function e0(e,t,r,n,o){var R;Yt(Va(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=j.useContext(Zn),{matches:l}=j.useContext(Jn),c=l[l.length-1],h=c?c.params:{},f=c?c.pathname:"/",p=c?c.pathnameBase:"/",w=c&&c.route;{let I=w&&w.path||"";t0(f,!w||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let _=wi(),d;if(t){let I=typeof t=="string"?ra(t):t;Yt(p==="/"||((R=I.pathname)==null?void 0:R.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${I.pathname}" was given in the \`location\` prop.`),d=I}else d=_;let b=d.pathname||"/",S=b;if(p!=="/"){let I=p.replace(/^\//,"").split("/");S="/"+b.replace(/^\//,"").split("/").slice(I.length).join("/")}let k=Vh(e,{pathname:S});jn(w||k!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),jn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=cd(k&&k.map(I=>Object.assign({},I,{params:Object.assign({},h,I.params),pathname:vi([p,a.encodeLocation?a.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?p:vi([p,a.encodeLocation?a.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),l,r,n,o);return t&&y?j.createElement($a.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},y):y}function od(){let e=pd(),t=Zf(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:a},"ErrorBoundary")," or"," ",j.createElement("code",{style:a},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:o},r):null,l)}var ad=j.createElement(od,null),sd=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?j.createElement(Jn.Provider,{value:this.props.routeContext},j.createElement(Tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ld({routeContext:e,match:t,children:r}){let n=j.useContext(na);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(Jn.Provider,{value:e},r)}function cd(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,l=r==null?void 0:r.errors;if(l!=null){let f=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Yt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let c=!1,h=-1;if(r)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:w,errors:_}=r,d=p.route.loader&&!w.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||d){c=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,p,w)=>{let _,d=!1,b=null,S=null;r&&(_=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||ad,c&&(h<0&&w===0?(t0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,S=null):h===w&&(d=!0,S=p.route.hydrateFallbackElement||null)));let k=t.concat(a.slice(0,w+1)),y=()=>{let R;return _?R=b:d?R=S:p.route.Component?R=j.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,j.createElement(ld,{match:p,routeContext:{outlet:f,matches:k,isDataRoute:r!=null},children:R})};return r&&(p.route.ErrorBoundary||p.route.errorElement||w===0)?j.createElement(sd,{location:r.location,revalidation:r.revalidation,component:b,error:_,children:y(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:n}):y()},null)}function Ic(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ud(e){let t=j.useContext(na);return Yt(t,Ic(e)),t}function hd(e){let t=j.useContext(al);return Yt(t,Ic(e)),t}function fd(e){let t=j.useContext(Jn);return Yt(t,Ic(e)),t}function Pc(e){let t=fd(e),r=t.matches[t.matches.length-1];return Yt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function dd(){return Pc("useRouteId")}function pd(){var n;let e=j.useContext(Tc),t=hd("useRouteError"),r=Pc("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function md(){let{router:e}=ud("useNavigate"),t=Pc("useNavigate"),r=j.useRef(!1);return Kh(()=>{r.current=!0}),j.useCallback(async(o,a={})=>{jn(r.current,Qh),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var $u={};function t0(e,t,r){!t&&!$u[e]&&($u[e]=!0,jn(!1,r))}j.memo(gd);function gd({routes:e,future:t,state:r,unstable_onError:n}){return e0(e,void 0,r,n,t)}function vd(e){return nd(e.context)}function Wi(e){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bd({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){Yt(!Va(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:o,static:a,future:{}}),[l,o,a]);typeof r=="string"&&(r=ra(r));let{pathname:h="/",search:f="",hash:p="",state:w=null,key:_="default"}=r,d=j.useMemo(()=>{let b=xi(h,l);return b==null?null:{location:{pathname:b,search:f,hash:p,state:w,key:_},navigationType:n}},[l,h,f,p,w,_,n]);return jn(d!=null,`<Router basename="${l}"> is not able to match the URL "${h}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),d==null?null:j.createElement(Zn.Provider,{value:c},j.createElement($a.Provider,{children:t,value:d}))}function xd({children:e,location:t}){return id(fc(e),t)}function fc(e,t=[]){let r=[];return j.Children.forEach(e,(n,o)=>{if(!j.isValidElement(n))return;let a=[...t,o];if(n.type===j.Fragment){r.push.apply(r,fc(n.props.children,a));return}Yt(n.type===Wi,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=fc(n.props.children,a)),r.push(l)}),r}var $s="get",Vs="application/x-www-form-urlencoded";function sl(e){return e!=null&&typeof e.tagName=="string"}function wd(e){return sl(e)&&e.tagName.toLowerCase()==="button"}function yd(e){return sl(e)&&e.tagName.toLowerCase()==="form"}function _d(e){return sl(e)&&e.tagName.toLowerCase()==="input"}function Sd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cd(e,t){return e.button===0&&(!t||t==="_self")&&!Sd(e)}function dc(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function Ad(e,t){let r=dc(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}var ys=null;function kd(){if(ys===null)try{new FormData(document.createElement("form"),0),ys=!1}catch{ys=!0}return ys}var Ld=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ol(e){return e!=null&&!Ld.has(e)?(jn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vs}"`),null):e}function Nd(e,t){let r,n,o,a,l;if(yd(e)){let c=e.getAttribute("action");n=c?xi(c,t):null,r=e.getAttribute("method")||$s,o=Ol(e.getAttribute("enctype"))||Vs,a=new FormData(e)}else if(wd(e)||_d(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||c.getAttribute("action");if(n=h?xi(h,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||$s,o=Ol(e.getAttribute("formenctype"))||Ol(c.getAttribute("enctype"))||Vs,a=new FormData(c,e),!kd()){let{name:f,type:p,value:w}=e;if(p==="image"){let _=f?`${f}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else f&&a.append(f,w)}}else{if(sl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=$s,n=null,o=Vs,l=e}return a&&o==="text/plain"&&(l=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ed(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&xi(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function Td(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Id(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Pd(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let l=await Td(a,r);return l.links?l.links():[]}return[]}));return Md(n.flat(1).filter(Id).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Vu(e,t,r,n,o,a){let l=(h,f)=>r[f]?h.route.id!==r[f].route.id:!0,c=(h,f)=>{var p;return r[f].pathname!==h.pathname||((p=r[f].route.path)==null?void 0:p.endsWith("*"))&&r[f].params["*"]!==h.params["*"]};return a==="assets"?t.filter((h,f)=>l(h,f)||c(h,f)):a==="data"?t.filter((h,f)=>{var w;let p=n.routes[h.route.id];if(!p||!p.hasLoader)return!1;if(l(h,f)||c(h,f))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=r[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function jd(e,t,{includeHydrateFallback:r}={}){return Rd(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Rd(e){return[...new Set(e)]}function Od(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Md(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let a=JSON.stringify(Od(o));return r.has(a)||(r.add(a),n.push({key:a,link:o})),n},[])}function r0(){let e=j.useContext(na);return jc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Fd(){let e=j.useContext(al);return jc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rc=j.createContext(void 0);Rc.displayName="FrameworkContext";function n0(){let e=j.useContext(Rc);return jc(e,"You must render this element inside a <HydratedRouter> element"),e}function Dd(e,t){let r=j.useContext(Rc),[n,o]=j.useState(!1),[a,l]=j.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:f,onMouseLeave:p,onTouchStart:w}=t,_=j.useRef(null);j.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let S=y=>{y.forEach(R=>{l(R.isIntersecting)})},k=new IntersectionObserver(S,{threshold:.5});return _.current&&k.observe(_.current),()=>{k.disconnect()}}},[e]),j.useEffect(()=>{if(n){let S=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(S)}}},[n]);let d=()=>{o(!0)},b=()=>{o(!1),l(!1)};return r?e!=="intent"?[a,_,{}]:[a,_,{onFocus:Ia(c,d),onBlur:Ia(h,b),onMouseEnter:Ia(f,d),onMouseLeave:Ia(p,b),onTouchStart:Ia(w,d)}]:[!1,_,{}]}function Ia(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function zd({page:e,...t}){let{router:r}=r0(),n=j.useMemo(()=>Vh(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?j.createElement(Ud,{page:e,matches:n,...t}):null}function Bd(e){let{manifest:t,routeModules:r}=n0(),[n,o]=j.useState([]);return j.useEffect(()=>{let a=!1;return Pd(e,t,r).then(l=>{a||o(l)}),()=>{a=!0}},[e,t,r]),n}function Ud({page:e,matches:t,...r}){let n=wi(),{manifest:o,routeModules:a}=n0(),{basename:l}=r0(),{loaderData:c,matches:h}=Fd(),f=j.useMemo(()=>Vu(e,t,h,o,n,"data"),[e,t,h,o,n]),p=j.useMemo(()=>Vu(e,t,h,o,n,"assets"),[e,t,h,o,n]),w=j.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let b=new Set,S=!1;if(t.forEach(y=>{var I;let R=o.routes[y.route.id];!R||!R.hasLoader||(!f.some(P=>P.route.id===y.route.id)&&y.route.id in c&&((I=a[y.route.id])!=null&&I.shouldRevalidate)||R.hasClientLoader?S=!0:b.add(y.route.id))}),b.size===0)return[];let k=Ed(e,l,"data");return S&&b.size>0&&k.searchParams.set("_routes",t.filter(y=>b.has(y.route.id)).map(y=>y.route.id).join(",")),[k.pathname+k.search]},[l,c,n,o,f,t,e,a]),_=j.useMemo(()=>jd(p,o),[p,o]),d=Bd(p);return j.createElement(j.Fragment,null,w.map(b=>j.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})),_.map(b=>j.createElement("link",{key:b,rel:"modulepreload",href:b,...r})),d.map(({key:b,link:S})=>j.createElement("link",{key:b,nonce:r.nonce,...S})))}function Hd(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var i0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{i0&&(window.__reactRouterVersion="7.8.2")}catch{}function qd({basename:e,children:t,window:r}){let n=j.useRef();n.current==null&&(n.current=Lf({window:r,v5Compat:!0}));let o=n.current,[a,l]=j.useState({action:o.action,location:o.location}),c=j.useCallback(h=>{j.startTransition(()=>l(h))},[l]);return j.useLayoutEffect(()=>o.listen(c),[o,c]),j.createElement(bd,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o})}var o0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a0=j.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:l,state:c,target:h,to:f,preventScrollReset:p,viewTransition:w,..._},d){let{basename:b}=j.useContext(Zn),S=typeof f=="string"&&o0.test(f),k,y=!1;if(typeof f=="string"&&S&&(k=f,i0))try{let M=new URL(window.location.href),J=f.startsWith("//")?new URL(M.protocol+f):new URL(f),E=xi(J.pathname,b);J.origin===M.origin&&E!=null?f=E+J.search+J.hash:y=!0}catch{jn(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=ed(f,{relative:o}),[I,P,Y]=Dd(n,_),K=Gd(f,{replace:l,state:c,target:h,preventScrollReset:p,relative:o,viewTransition:w});function ne(M){t&&t(M),M.defaultPrevented||K(M)}let X=j.createElement("a",{..._,...Y,href:k||R,onClick:y||a?t:ne,ref:Hd(d,P),target:h,"data-discover":!S&&r==="render"?"true":void 0});return I&&!S?j.createElement(j.Fragment,null,X,j.createElement(zd,{page:R})):X});a0.displayName="Link";var $d=j.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:l,viewTransition:c,children:h,...f},p){let w=Wa(l,{relative:f.relative}),_=wi(),d=j.useContext(al),{navigator:b,basename:S}=j.useContext(Zn),k=d!=null&&Kd(w)&&c===!0,y=b.encodeLocation?b.encodeLocation(w).pathname:w.pathname,R=_.pathname,I=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;r||(R=R.toLowerCase(),I=I?I.toLowerCase():null,y=y.toLowerCase()),I&&S&&(I=xi(I,S)||I);const P=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let Y=R===y||!o&&R.startsWith(y)&&R.charAt(P)==="/",K=I!=null&&(I===y||!o&&I.startsWith(y)&&I.charAt(y.length)==="/"),ne={isActive:Y,isPending:K,isTransitioning:k},X=Y?t:void 0,M;typeof n=="function"?M=n(ne):M=[n,Y?"active":null,K?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let J=typeof a=="function"?a(ne):a;return j.createElement(a0,{...f,"aria-current":X,className:M,ref:p,style:J,to:l,viewTransition:c},typeof h=="function"?h(ne):h)});$d.displayName="NavLink";var Vd=j.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:l=$s,action:c,onSubmit:h,relative:f,preventScrollReset:p,viewTransition:w,..._},d)=>{let b=Jd(),S=Qd(c,{relative:f}),k=l.toLowerCase()==="get"?"get":"post",y=typeof c=="string"&&o0.test(c),R=I=>{if(h&&h(I),I.defaultPrevented)return;I.preventDefault();let P=I.nativeEvent.submitter,Y=(P==null?void 0:P.getAttribute("formmethod"))||l;b(P||I.currentTarget,{fetcherKey:t,method:Y,navigate:r,replace:o,state:a,relative:f,preventScrollReset:p,viewTransition:w})};return j.createElement("form",{ref:d,method:k,action:S,onSubmit:n?h:R,..._,"data-discover":!y&&e==="render"?"true":void 0})});Vd.displayName="Form";function Wd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s0(e){let t=j.useContext(na);return Yt(t,Wd(e)),t}function Gd(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:l}={}){let c=Eo(),h=wi(),f=Wa(e,{relative:a});return j.useCallback(p=>{if(Cd(p,t)){p.preventDefault();let w=r!==void 0?r:Ba(h)===Ba(f);c(e,{replace:w,state:n,preventScrollReset:o,relative:a,viewTransition:l})}},[h,c,f,r,n,t,e,o,a,l])}function Yd(e){jn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=j.useRef(dc(e)),r=j.useRef(!1),n=wi(),o=j.useMemo(()=>Ad(n.search,r.current?null:t.current),[n.search]),a=Eo(),l=j.useCallback((c,h)=>{const f=dc(typeof c=="function"?c(new URLSearchParams(o)):c);r.current=!0,a("?"+f,h)},[a,o]);return[o,l]}var Xd=0,Zd=()=>`__${String(++Xd)}__`;function Jd(){let{router:e}=s0("useSubmit"),{basename:t}=j.useContext(Zn),r=dd();return j.useCallback(async(n,o={})=>{let{action:a,method:l,encType:c,formData:h,body:f}=Nd(n,t);if(o.navigate===!1){let p=o.fetcherKey||Zd();await e.fetch(p,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||l,formEncType:o.encType||c,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:h,body:f,formMethod:o.method||l,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Qd(e,{relative:t}={}){let{basename:r}=j.useContext(Zn),n=j.useContext(Jn);Yt(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...Wa(e||".",{relative:t})},l=wi();if(e==null){a.search=l.search;let c=new URLSearchParams(a.search),h=c.getAll("index");if(h.some(p=>p==="")){c.delete("index"),h.filter(w=>w).forEach(w=>c.append("index",w));let p=c.toString();a.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:vi([r,a.pathname])),Ba(a)}function Kd(e,{relative:t}={}){let r=j.useContext(Jh);Yt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=s0("useViewTransitionState"),o=Wa(e,{relative:t});if(!r.isTransitioning)return!1;let a=xi(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=xi(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Qs(o.pathname,l)!=null||Qs(o.pathname,a)!=null}function bi({width:e,height:t,fill:r}){return v.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const e5=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},t5=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},r5=()=>{let e=[25,50,75,90],t=[];const r=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(n/o*100);e.forEach(l=>{a>=l&&!t.includes(l)&&(t.push(l),t5(l))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}},l0=j.createContext(),ll=()=>{const e=j.useContext(l0);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},n5=({children:e})=>{const[t,r]=j.useState(()=>localStorage.getItem("theme")||"light");j.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),e5(t)},[t]);const a={theme:t,toggleTheme:()=>{r(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{r(l)},isLight:t==="light",isDark:t==="dark"};return v.jsx(l0.Provider,{value:a,children:e})},i5=Xt`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,o5=Xt`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,a5=Xt`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,s5=z.div`
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
    animation: ${e=>e.initialFade?a5:"none"} 0.5s ease-in;
`,l5=z.div`
    animation: ${e=>e.isExiting?o5:i5} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Oc({isVisible:e,initialFade:t=!1}){const{theme:r}=ll(),[n,o]=j.useState(!1),[a,l]=j.useState(!1);return j.useEffect(()=>{!e&&!n&&(o(!0),setTimeout(()=>{l(!0)},800))},[e,n]),v.jsx(s5,{isVisible:e,fadeOutContainer:a,initialFade:t,children:v.jsx(l5,{isExiting:n,children:v.jsx(bi,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const c5=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},u5=(e,t="General",r="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:n})},Wu=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Ml=(e,t="image",r="")=>{const n=r?`${r} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:r})},h5=(e,t="")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t})},Gu=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},f5=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},d5=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},p5=(e,t="",r="",n="album_collection")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t,album_id:r,source:n})},m5=()=>{j.useEffect(()=>{Wu(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&Wu(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function c0(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function u0(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function g5(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const v5=Xt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,b5=Xt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,x5=Xt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,w5=Xt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,y5=z.div`
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
    animation: ${e=>e.isClosing?w5:x5} 0.3s ease-in-out forwards;
`,_5=z.div`
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
    animation: ${e=>e.isClosing?b5:v5} 0.3s ease-in-out forwards;

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
`,S5=z.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,C5=z.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 3px;
`,A5=z(u0)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,k5=z.div`
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
`,h0=z.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,L5=z.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,N5=z.button`
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
`,_s=z.button`
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
`,E5=z.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,T5=z(h0)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,I5=z.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,P5=z.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function j5({title:e,paragraph:t,imageURL:r,postImageText:n,canClose:o,confirmText:a,onConfirm:l,cancelText:c,onCancel:h,isClosing:f,customButton:p}){return document.body.style.overflow="hidden",v.jsx(y5,{isClosing:f,children:v.jsxs(_5,{isClosing:f,children:[v.jsxs(S5,{children:[v.jsx(I5,{children:v.jsx(bi,{width:25,height:25,fill:"var(--textColor)"})}),e&&v.jsx(C5,{children:e}),o&&v.jsx(k5,{onClick:h,children:v.jsx(A5,{})})]}),v.jsx(P5,{}),t&&v.jsx(h0,{children:t}),r&&v.jsx(L5,{src:r}),n&&v.jsx(T5,{children:n}),v.jsxs(E5,{style:{justifyContent:"center"},children:[p&&v.jsx(_s,{onClick:()=>window.open(p.url,"_blank"),children:p.text}),c&&a?v.jsxs(v.Fragment,{children:[v.jsx(N5,{onClick:h,children:c}),v.jsx(_s,{onClick:l,children:a})]}):v.jsx(v.Fragment,{children:c?v.jsx(_s,{onClick:h,children:c}):a&&v.jsx(_s,{onClick:l,children:a})})]})]})})}const R5="/assets/coverEditor.DxGhMuid.gif",O5=j.createContext(),M5=({children:e})=>{const{t,i18n:r}=ur(),[n,o]=j.useState(null),[a,l]=j.useState(!1),[c,h]=j.useState(()=>{const K=localStorage.getItem("shownAlerts");return K?JSON.parse(K):{}}),f=()=>{const K={en:{title:"New Cover Editor!",paragraph:'Inside the poster editor, you can now customize your album cover with zoom, position adjustments, and blur effects. Click on "Cover editor" to try it out!',confirmText:"Try it now!",postImageText:"Customize your poster like never before."},pt:{title:"Novo Editor de Capa!",paragraph:'Dentro do editor de poster, agora você pode personalizar a capa do álbum com zoom, ajustes de posição e efeitos de desfoque. Clique em "Editor de capa" para experimentar!',confirmText:"Experimentar agora!",postImageText:"Personalize seu poster como nunca antes."},es:{title:"¡Nuevo Editor de Portada!",paragraph:'Dentro del editor de póster, ahora puedes personalizar la portada del álbum con zoom, ajustes de posición y efectos de desenfoque. ¡Haz clic en "Editor de portada" para probarlo!',confirmText:"¡Probar ahora!",postImageText:"Personaliza tu póster como nunca antes."},zh:{title:"新封面编辑器！",paragraph:"在海报编辑器中，您现在可以使用缩放、位置调整和模糊效果来自定义专辑封面。点击“封面编辑器”试试吧！",confirmText:"立即试用！",postImageText:"像从未有过的方式定制您的海报。"}},ne=r.language||"en",X=K[ne]||K.en;return{id:"cover-editor-feature",persistentId:"cover-editor-feature-announcement",title:X.title,paragraph:X.paragraph,postImageText:X.postImageText,confirmText:X.confirmText,canClose:!0,type:"alert",imageURL:R5,limitDate:"2026-02-10T23:59:59.999Z"}},p=K=>c[K]===!0,w=K=>{if(!p(K)){const ne={...c,[K]:!0};h(ne),localStorage.setItem("shownAlerts",JSON.stringify(ne))}};j.useEffect(()=>{const K=f();!p(K.persistentId)&&!n&&S(K)&&o(K)},[r.language,c]);const _=K=>{S(K)&&(o(K),l(!1))},d=K=>{S(K)&&_({...K,type:"alert"})},b=K=>{_({...K,type:"confirmation"})},S=K=>{if(!K.limitDate)return!0;const ne=new Date(K.limitDate);return new Date<=ne},k=K=>{if(!K.persistentId){S(K)&&d(K);return}!p(K.persistentId)&&S(K)&&_({...K,type:"alert"})},y=()=>{(n==null?void 0:n.type)==="alert"&&P(),!(!n||a)&&(l(!0),setTimeout(()=>{o(null),l(!1),document.body.style.overflow="unset"},300))},R=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&P(),y()},I=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&P(),y()},P=()=>{n!=null&&n.persistentId&&w(n.persistentId)},Y={modal:n,showModal:_,showAlert:d,showConfirmation:b,showConditionalAlert:k,closeModal:y,isModalVisible:!!n,hasAlertBeenShown:p,markSpecificAlertAsShown:w};return v.jsxs(O5.Provider,{value:Y,children:[e,n&&v.jsx(j5,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?R:null,cancelText:n.cancelText||null,onCancel:n.cancelText?I:n.canClose?y:null,isClosing:a,customButton:n.customButton})]})},F5={BASE_URL:"https://api.posterfy.space"},D5=F5.BASE_URL;class z5{constructor(t=D5){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,r={}){const n=`${this.baseURL}${t}`,o={credentials:"include",headers:{"Content-Type":"application/json",...r.headers},...r};this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`);try{const a=await fetch(n,o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){throw console.error("API request failed:",a),a}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const Yn=new z5,f0=j.createContext(),Ga=()=>{const e=j.useContext(f0);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},B5=({children:e})=>{const[t,r]=j.useState(null),[n,o]=j.useState(!0),[a,l]=j.useState(!1);j.useEffect(()=>{(async()=>{const S=new URLSearchParams(window.location.search).get("token");S&&(localStorage.setItem("authToken",S),Yn.setAuthToken(S),window.history.replaceState({},document.title,window.location.pathname)),await c()})()},[]);const c=async()=>{if(!localStorage.getItem("authToken")){r(null),l(!1),o(!1);return}try{const b=await Yn.getCurrentUser();r(b.user),l(!0),o(!1)}catch{localStorage.removeItem("authToken"),Yn.setAuthToken(null),r(null),l(!1),o(!1)}},_={user:t,loading:n,isAuthenticated:a,loginWithGoogle:()=>{window.location.href=Yn.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=Yn.getSpotifyAuthUrl()},logout:async()=>{try{await Yn.logout(),localStorage.removeItem("authToken"),Yn.setAuthToken(null),r(null),l(!1)}catch(d){console.error("Logout failed:",d),localStorage.removeItem("authToken"),Yn.setAuthToken(null),r(null),l(!1)}},checkAuthStatus:c,updateUser:d=>{r(d)}};return v.jsx(f0.Provider,{value:_,children:e})};function Ks(){return Ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ks.apply(this,arguments)}function U5(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var H5=["cdnSuffix","cdnUrl","countryCode","style","svg"],q5="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",$5="svg",V5=127397,d0=function(t){var r=t.cdnSuffix,n=r===void 0?$5:r,o=t.cdnUrl,a=o===void 0?q5:o,l=t.countryCode,c=t.style,h=t.svg,f=h===void 0?!1:h,p=U5(t,H5);if(typeof l!="string")return null;if(f){var w=""+a+l.toLowerCase()+"."+n;return j.createElement("img",Object.assign({},p,{src:w,style:Ks({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},c)}))}var _=l.toUpperCase().replace(/./g,function(d){return String.fromCodePoint(d.charCodeAt(0)+V5)});return j.createElement("span",Object.assign({role:"img"},p,{style:Ks({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},c)}),_)};const W5=z.div`
  position: relative;
`,G5=z.button`
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
`,Y5=z.div`
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
`,X5=z.div`
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
`,Z5=z.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,J5=z.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,Ss=z.button`
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
`,Cs=z.span`
  margin-left: 8px;
`,As=z(d0)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function Q5(){const[e,t]=j.useState(!1),[r,n]=j.useState(!1),{i18n:o}=ur();j.useEffect(()=>{const f=localStorage.getItem("language");f&&o.changeLanguage(f);const p=w=>{w.target.closest(".language-selector")||a()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[o]);const a=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},l=f=>{f.stopPropagation(),e?a():t(!0)},c=f=>{o.changeLanguage(f),localStorage.setItem("language",f),a(),d5(f)},h=()=>{switch(o.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return v.jsxs(W5,{className:"language-selector",children:[v.jsx(G5,{onClick:l,"aria-label":"Select language",children:v.jsx(Y5,{children:v.jsx(d0,{countryCode:h(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&v.jsxs(X5,{className:r?"closing":"",children:[v.jsx(Z5,{}),v.jsxs(J5,{children:[v.jsxs(Ss,{onClick:()=>c("pt"),children:[v.jsx(As,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(Cs,{children:"Português"})]}),v.jsxs(Ss,{onClick:()=>c("en"),children:[v.jsx(As,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(Cs,{children:"English"})]}),v.jsxs(Ss,{onClick:()=>c("es"),children:[v.jsx(As,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),v.jsx(Cs,{children:"Español"})]}),v.jsxs(Ss,{onClick:()=>c("zh"),children:[v.jsx(As,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),v.jsx(Cs,{children:"中文"})]})]})]})]})}function K5(e){return Lt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function p0(e){return Lt({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function m0(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function ep(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function tp(e){return Lt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function rp(e){return Lt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function g0(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function np(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function ip(e){return Lt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function op(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function ap(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function sp(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const lp=z.div`
  position: relative;
`,cp=z.button`
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
`,up=z.div`
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
`,hp=z.div`
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
`,fp=z.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,dp=z.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,pp=z.button`
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
`,mp=z.div`
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
`,gp=z.span`
  margin-left: 4px;
  font-weight: 500;
`;function vp(){const[e,t]=j.useState(!1),[r,n]=j.useState(!1),{theme:o,setSpecificTheme:a}=ll(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:v.jsx(sp,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:v.jsx(np,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:v.jsx(tp,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:v.jsx(rp,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:v.jsx(ip,{}),isLight:!1}],c=l.find(w=>w.id===o)||l[0];j.useEffect(()=>{const w=_=>{_.target.closest(".theme-selector")||h()};return document.addEventListener("click",w),()=>document.removeEventListener("click",w)},[]);const h=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},f=w=>{w.stopPropagation(),e?h():t(!0)},p=w=>{a(w),h()};return v.jsxs(lp,{className:"theme-selector",children:[v.jsx(cp,{onClick:f,"aria-label":"Select theme",children:v.jsx(up,{themeColor:c.color,isLight:c.isLight,children:c.icon})}),e&&v.jsxs(hp,{className:r?"closing":"",children:[v.jsx(fp,{}),v.jsx(dp,{children:l.map(w=>v.jsxs(pp,{onClick:()=>p(w.id),children:[v.jsx(mp,{className:"theme-preview",color:w.color,isLight:w.isLight,children:w.icon}),v.jsx(gp,{children:w.name})]},w.id))})]})]})}function bp(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"},child:[]}]})(e)}function v0(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function xp(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const wp=z.header`
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
`,yp=z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,_p=z.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,Sp=z.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,Cp=z.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;

  @media (max-width: 465px) {
    display: none;
  }
`,Ap=z.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,kp=z.div`
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
`,Lp=z.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,Np=z.button`
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
`,Ep=z.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,Tp=z(xp)`
  font-size: 1.5em;
  color: var(--textColor);
`,Ip=z.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function el({hideLogo:e=!1,hideAccount:t=!1}){const[r,n]=j.useState(!1),[o,a]=j.useState(!0),[l,c]=j.useState(0),[h,f]=j.useState(!1),p=".space",{user:w,isAuthenticated:_}=Ga(),d=Eo();j.useEffect(()=>{const S=()=>{const k=window.scrollY;k<=10?(a(!0),n(!1)):(k<l?a(!0):a(!1),n(!0)),c(k)};return window.addEventListener("scroll",S),()=>window.removeEventListener("scroll",S)},[l]);const b=()=>{d(_?"/dashboard":"/login")};return v.jsxs(wp,{scrolled:r,visible:o,children:[v.jsxs(yp,{children:[!e&&v.jsxs(_p,{onClick:()=>d("/"),children:[v.jsx(kp,{children:v.jsx(bi,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),v.jsxs(Sp,{children:["Posterfy",v.jsx(Cp,{children:p})]})]}),v.jsxs(Lp,{children:[v.jsx(Q5,{}),v.jsx(vp,{}),!t&&v.jsx(Np,{onClick:b,children:v.jsx(Ep,{children:w!=null&&w.avatar?v.jsx(Ip,{src:w.avatar}):v.jsx(Tp,{})})})]})]}),v.jsx(Ap,{scrolled:r})]})}const b0=Xt`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;Xt`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;const Pp=Xt`
  0%, 100% { transform: scale(1); }
  10% { transform: scale(1.2); }
  20% { transform: scale(1); }
  30% { transform: scale(1.2); }
  40% { transform: scale(1); }
`,jp=z.footer`
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
`,Rp=z.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  
  @media (max-width: 968px) {
    padding: 60px 30px 30px;
  }
  
  @media (max-width: 640px) {
    padding: 50px 20px 25px;
  }
`,Op=z.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  animation: ${b0} 0.8s ease-out;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,Mp=z.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,Fp=z.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    filter: drop-shadow(0 4px 12px var(--shadowColor));
  }
`,Dp=z.div`
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
`,zp=z.h2`
  font-size: 2em;
  font-weight: 700;
  color: var(--textColor);
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 1.75em;
  }
`,Bp=z.p`
  font-size: 0.95em;
  line-height: 1.7;
  color: var(--textSecondary);
  max-width: 400px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`,Up=z.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,Hp=z.a`
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
`;const qp=z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--borderColor);
  animation: ${b0} 0.8s ease-out 0.2s backwards;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
  }
`,$p=z.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,Vp=z.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 2;
  }
`,Yu=z.p`
  font-size: 0.9em;
  color: var(--textSecondary);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--AccentColor);
    animation: ${Pp} 1.5s ease-in-out infinite;
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
`;function Wp(){const{t:e}=ur(),{theme:t,setSpecificTheme:r}=ll(),n=new Date().getFullYear();return v.jsxs(jp,{children:[v.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:v.jsxs("div",{children:[v.jsx("h4",{children:"Album Poster Generator Links"}),v.jsxs("nav",{children:[v.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),v.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),v.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),v.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),v.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),v.jsxs(Rp,{children:[v.jsxs(Op,{children:[v.jsxs(Mp,{children:[v.jsxs(Fp,{children:[v.jsx(Dp,{children:v.jsx(bi,{fill:t==="light"?"#2c2929":"white",width:"48px",height:"42.2px"})}),v.jsx(zp,{children:"Posterfy"})]}),v.jsx(Bp,{children:e("FooterDescription","Create stunning album posters from your favorite music. Free, fast, and beautiful.")})]}),v.jsx(Up,{children:v.jsxs(Hp,{href:"https://github.com/avictormorais/posterfy",target:"_blank",rel:"noopener noreferrer",children:[v.jsx(K5,{})," ",e("ViewGitHub","View on GitHub")]})})]}),v.jsxs(qp,{children:[v.jsx($p,{children:v.jsxs(Yu,{children:[v.jsx(g0,{}),e("MadeBy","Made with love by")," ",v.jsx("a",{href:"https://avictormorais.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:"Victor Morais"})]})}),v.jsx(Vp,{children:v.jsxs(Yu,{children:["© ",n," Posterfy. ",e("AllRights","All rights reserved.")]})})]})]})]})}function Fl({showNavbar:e=!0,showFooter:t=!0}){return v.jsxs(v.Fragment,{children:[e&&v.jsx(el,{}),v.jsx(vd,{}),t&&v.jsx(Wp,{})]})}function Gp(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Yp(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const Xp="/assets/Posterfy%20-%20Graduation.JszPNno1.png",Zp="/assets/Posterfy%20-%20Blonde.CgecpDDh.png",Jp="/assets/Posterfy%20-%20SOS.CNKHszjL.png",Qp="/assets/Posterfy%20-%20Don't%20Be%20Dumb.QHClWo6O.png",Kp="/assets/Posterfy%20-%20Flower%20Boy.Dq6UXJvZ.png",em=[{id:1,coverImage:Xp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c126f7f19c7f0381e56156c94a",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg",useUncompressed:!1,albumName:"Graduation",artistsName:"Kanye West",titleSize:200,artistsSize:"110",tracksSize:50,marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2007-09-11",titleRuntime:"Runtime",runtime:"54min 29s",backgroundColor:"#c49578",textColor:"#3d2834",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Good Morning
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
14. Good Night`,color1:"#26383f",color2:"#815532",color3:"#849acd",albumID:"4SZko61aMnmgvNhfhgTuD3",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:2,coverImage:Zp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1c5649add07ed3720be9d5526",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music124/v4/68/f9/fe/68f9fec8-81b6-38b1-7e27-796c431436fa/814908025306.jpg",useUncompressed:!1,albumName:"Blonde",artistsName:"Frank Ocean",titleSize:200,artistsSize:"110",tracksSize:"47",marginTop:"170",marginSide:160,marginCover:-50,marginBackground:0,titleRelease:"Release date",releaseDate:"2016-08-20",titleRuntime:"Runtime",runtime:"1h 0min 17s",backgroundColor:"#e2e2e3",textColor:"#010101",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Nikes
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
17. Futura Free`,color1:"#90533b",color2:"#b47d5a",color3:"#648c5c",albumID:"3mH6qwIy9crq0I9YQbOuDf",coverZoom:5,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:3,coverImage:Jp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Qp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c1be35d523672e13da3debc413",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music112/v4/ff/d4/6b/ffd46bb9-a35f-08b7-5c21-b63c7fd683e2/11UMGIM08638.rgb.jpg",useUncompressed:!1,albumName:"Don't Be Dumb",artistsName:"A$AP Rocky",titleSize:200,artistsSize:"110",tracksSize:"40",marginTop:"150",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2026-01-16",titleRuntime:"Runtime",runtime:"59min 49s",backgroundColor:"#ffffff",textColor:"#181918",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. ORDER OF PROTECTION
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
17. FISH N STEAK (WHAT IT IS)`,color1:"#8eb3c6",color2:"#5378b0",color3:"#866854",albumID:"4itKk52E9ZCdWUQcFAkud9",userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}},{id:5,coverImage:Kp,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d000082c18940ac99f49e44f59e6f7fb3",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music126/v4/22/fd/10/22fd10a3-881d-2560-64e7-a9df650b9e47/17UM1IM42651.rgb.jpg",useUncompressed:!1,albumName:"Flower Boy",artistsName:"Tyler, The Creator",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"100",marginSide:160,marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"2017-07-21",titleRuntime:"Runtime",runtime:"46min 39s",backgroundColor:"#ce9621",textColor:"#140b06",useWatermark:!0,useFade:!0,showTracklist:!0,tracklist:`1. Foreword
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
14. Enjoy Right Now, Today`,color1:"#e2c999",color2:"#c03319",color3:"#f4d16a",albumID:"2nkto6YNI4rUYTLqEwWJ3o",coverZoom:0,coverHorizontalPosition:0,coverVerticalPosition:0,coverBlur:0,userAdjustedTitleSize:!1,initialTitleSizeSet:!0,userAdjustedTracksSize:!1,initialTracksSizeSet:!0}}],Gi=(e={})=>{const[t,r]=j.useState(!1),n=j.useRef(null);return j.useEffect(()=>{const o=n.current,a=new IntersectionObserver(([l])=>{l.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"0px 0px -50px 0px",...e});return o&&a.observe(o),()=>{o&&a.unobserve(o)}},[e]),[n,t]},tm=z.div`
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
`,rm=z.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  
  opacity: ${e=>e.$hasAppeared?1:0};
  transform: ${e=>{const{isHovered:t,index:r,hoveredIndex:n,isMobile:o,$hasAppeared:a}=e;if(!a)return"scale(0.8) translateY(30px)";if(o)return"scale(1)";let l="scale(0.95)";if(t)l="scale(1.08) translateY(-8px)";else if(n!==null){let c=0;switch(n){case 0:r>0&&(c=70);break;case 1:r>=2&&(c=70);break;case 2:c=0;break;case 3:r<=2&&(c=-70);break;case 4:r<4&&(c=-70);break}c!==0&&(l=`scale(0.95) translateX(${c}px)`)}return l}};
  
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
`,nm=z.div`
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
`,im=z.div`
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
`,om=z.div`
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
`,am=z.button`
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
`,sm=z.button`
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
`,lm=({onRecreate:e})=>{const{t}=ur(),[r,n]=j.useState(null),[o,a]=j.useState(!1),[l,c]=j.useState(!1),[h,f]=j.useState(null),[p,w]=j.useState(null),[_,d]=Gi(),[b,S]=j.useState([]),k=[2,3,1,4,0];j.useEffect(()=>{d&&b.length===0&&k.forEach((P,Y)=>{setTimeout(()=>{S(K=>[...K,P])},Y*177)})},[d]),j.useEffect(()=>{const P=()=>{a(window.innerWidth<=770),c(window.innerWidth>480&&window.innerWidth<=1200)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const y=(P,Y)=>{f(P),w(Y),document.body.style.overflow="hidden"},R=()=>{f(null),document.body.style.overflow="auto"},I=()=>{f(null),e(p),document.body.style.overflow="auto"};return v.jsxs(v.Fragment,{children:[v.jsx(tm,{ref:_,children:em.map((P,Y)=>v.jsx(rm,{index:Y,isHovered:r===Y,hoveredIndex:r,otherIsHovered:r!==null,isMobile:o,isTablet:l,$hasAppeared:b.includes(Y),onMouseEnter:()=>n(Y),onMouseLeave:()=>n(null),onClick:()=>y(P.coverImage||"/placeholder.svg",P.JSONConfig),children:v.jsx("img",{src:P.coverImage||"/placeholder.svg",alt:`${P.artist} - ${P.title}`})},P.id))}),h&&v.jsx(nm,{onClick:R,children:v.jsxs(im,{onClick:P=>P.stopPropagation(),children:[v.jsxs(om,{children:[v.jsx(am,{onClick:R,children:"×"}),v.jsx(sm,{onClick:I,children:t("RecreatePoster")})]}),v.jsx("img",{src:h,alt:"Album cover"})]})})]})},cm=z.div`
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
`,um=({onRecreate:e})=>v.jsx(cm,{children:v.jsx(lm,{onRecreate:e})}),hm=z.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
`,fm=z.div`
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
`,dm=z.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`,pm=z.h1`
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
`,mm=z.p`
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
`,gm=z.div`
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
`,vm=z.div`
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

`,bm=z(Gp)`
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
`;function xm({showAnimation:e=!1,onRecreate:t}){const{t:r}=ur(),{theme:n}=ll(),[o,a]=j.useState(!1);j.useEffect(()=>{if(e){const c=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(c)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return v.jsxs(v.Fragment,{children:[v.jsxs(hm,{children:[v.jsxs(fm,{children:[v.jsxs(dm,{children:[v.jsx(pm,{visible:o,children:"Posterfy"}),v.jsx(mm,{visible:o,delay:400,children:r("heroDescription")}),v.jsxs("div",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},children:[v.jsx("h2",{children:"Free Album Poster Generator"}),v.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),v.jsx("h3",{children:"Features:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Free album poster maker"}),v.jsx("li",{children:"Spotify integration"}),v.jsx("li",{children:"Custom poster design"}),v.jsx("li",{children:"High-quality downloads"}),v.jsx("li",{children:"Multiple format options"}),v.jsx("li",{children:"Professional templates"})]})]})]}),v.jsx(gm,{visible:o,children:v.jsx(vm,{children:v.jsx(bi,{fill:n==="light"?"#2c2929":"white",width:"100%",height:"100%"})})})]}),v.jsx(bm,{visible:o,onClick:l})]}),v.jsx(um,{onRecreate:t})]})}const wm=z.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,ym=z.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Ya({text:e,type:t}){return v.jsx(v.Fragment,{children:t==1?v.jsx(wm,{children:e}):v.jsx(ym,{children:e})})}const _m=z.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,Sm=z.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Cm=z.p`
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
`,Xu=z.div`
    display: flex;
`;function Mc({title:e,paragraph:t}){return v.jsxs(_m,{children:[v.jsx(Xu,{children:v.jsx(Sm,{children:e})}),v.jsx(Xu,{children:v.jsx(Cm,{children:t})})]})}function Am(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function km(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Lm=z.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,Nm=z(Am)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Em=z.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,Tm=z.hr`
    opacity: 0.15;
    margin: 5px;
`,Im=z.div`
    max-height: ${({showA:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: max-height 1s ease;
`,Pm=z.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Ho({q:e,a:t}){const[r,n]=j.useState(!1);function o(){n(!r)}return v.jsxs(v.Fragment,{children:[v.jsxs(Lm,{onClick:o,children:[v.jsx(Nm,{showA:r}),v.jsx(Em,{children:e})]}),v.jsx(Tm,{}),v.jsx(Im,{showA:r,children:v.jsx(Pm,{showA:r,children:t})})]})}const jm=z.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Rm=z.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Om(){const{t:e}=ur();return v.jsxs(jm,{id:"faq",children:[v.jsx(Ya,{text:"FAQ",type:1}),v.jsxs(Rm,{children:[v.jsx(Ho,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),v.jsx(Ho,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),v.jsx(Ho,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),v.jsx(Ho,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),v.jsx(Ho,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")}),v.jsx(Ho,{q:e("FAQ_ExportHighRes_Question"),a:e("FAQ_ExportHighRes_Answer")})]})]})}const Mm=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:r="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[v.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),v.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:r}),v.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),v.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:r}),v.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),v.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:r}),v.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:r}),v.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:r}),v.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),v.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:r}),v.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:r}),v.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:r}),v.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:r}),v.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:r}),v.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),v.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:r}),v.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:r}),v.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:o}),v.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:o}),v.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:o}),v.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:o}),v.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:o}),v.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:a})]}),Fm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Dm=z.div`
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
`,zm=z.p`
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
`,Bm=z.button`
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
`;function Um(){const{t:e}=ur();return v.jsxs(Fm,{id:"share",children:[v.jsx(Ya,{text:e("Share"),type:1}),v.jsx(Mc,{title:e("ShareTitle")}),v.jsx(Dm,{children:v.jsx(Mm,{width:"100%"})}),v.jsx(zm,{children:e("ShareDescription")}),v.jsx(Bm,{children:e("ComingSoon")})]})}const Hm=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:o="var(--PosterShare-logoColor)"})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[v.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),v.jsx("path",{fill:r,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),v.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),v.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),v.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),v.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),v.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),v.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),v.jsx("g",{fill:r,opacity:"0.3",children:v.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),v.jsxs("g",{fill:t,opacity:"0.2",children:[v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),v.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),v.jsx("path",{fill:r,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),v.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),v.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),v.jsx("path",{fill:r,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),v.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),v.jsx("path",{fill:r,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),v.jsx("path",{fill:r,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),v.jsx("path",{fill:r,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),v.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),v.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),v.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),v.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),v.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),v.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),v.jsx("path",{fill:r,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),v.jsx("path",{fill:o,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),v.jsx("path",{fill:o,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),v.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),v.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),v.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),v.jsx("g",{clipPath:"url(#clip0_1_72)",children:v.jsx("path",{fill:o,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),v.jsx("defs",{children:v.jsx("clipPath",{id:"clip0_1_72",children:v.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),qm=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,$m=z.div`
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
`,Vm=z.p`
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
`,Wm=z.button`
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
`;function Gm(){const{t:e}=ur();return v.jsxs(qm,{id:"share",children:[v.jsx(Ya,{text:e("Community"),type:1}),v.jsx(Mc,{title:e("CommunityTitle")}),v.jsx($m,{children:v.jsx(Hm,{width:"100%"})}),v.jsx(Vm,{children:e("CommunityDescription")}),v.jsx(Wm,{children:e("ComingSoon")})]})}const Zu=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Help improve the project!",pt:"Ajude a melhorar o projeto!",es:"¡Ayuda a mejorar el proyecto!",zh:"帮助改进项目！"},text:{en:"This project is open source and evolves with the community! Contribute with code, suggestions, or reporting bugs.",pt:"Esse projeto é open source e evolui com a comunidade! Contribua com código, sugestões ou reportando bugs.",es:"¡Este proyecto es open source y evoluciona con la comunidad! Contribuye con código, sugerencias o reportando errores.",zh:"这个项目是开源的，随着社区的发展而发展！贡献代码、建议或报告错误。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Contribute on Github",pt:"Contribua no Github",es:"Contribuye en Github",zh:"在 Github 上贡献"}}],Ym=z.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Xm=z.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Zm=z.div`
    display: flex;
    align-items: center;
    position: relative;
`,Jm=z.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Qm=z(g0)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Km=z.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,eg=z.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,tg=z.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`,rg=z.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,ng=z.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,ig=z.a`
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
`;function og(){var a,l,c;const{i18n:e}=ur(),{t}=ur(),r=((a=e.language)==null?void 0:a.split("-")[0])||"en",n=Zu.filter(h=>h.key!=="contribute_area"),o=Zu.find(h=>h.key==="contribute_area");return v.jsxs(Ym,{id:"thanks",children:[v.jsx(Ya,{text:t("Thanks"),type:1}),n.map((h,f)=>v.jsxs(Xm,{children:[v.jsxs(Zm,{children:[v.jsx(Jm,{className:"circle"}),v.jsx(Qm,{className:"heart"}),v.jsx(Km,{tabIndex:0,role:"button",onClick:()=>window.open(h.url,"_blank","noopener,noreferrer"),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&window.open(h.url,"_blank","noopener,noreferrer")},onMouseEnter:p=>{const w=p.target.parentNode;w.querySelector(".circle").style.opacity=0,w.querySelector(".heart").style.opacity=1},onMouseLeave:p=>{const w=p.target.parentNode;w.querySelector(".circle").style.opacity=.8,w.querySelector(".heart").style.opacity=0},children:h.title[r]||h.title.en})]}),v.jsx(eg,{children:h.text[r]||h.text.en})]},h.key)),o&&v.jsxs(tg,{children:[v.jsx(rg,{children:o.title[r]||o.title.en}),v.jsx(ng,{children:o.text[r]||o.text.en}),v.jsx(ig,{href:o.url,target:"_blank",rel:"noopener noreferrer",children:((l=o.button)==null?void 0:l[r])||((c=o.button)==null?void 0:c.en)||"Github"})]})]})}const ag=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,sg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,lg=z.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Hi({title:e,value:t,onChange:r}){return v.jsxs(ag,{children:[v.jsx(sg,{children:e}),v.jsx(lg,{placeholder:e,value:t,onChange:r})]})}const cg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ug=z.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,hg=z.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Ju({title:e,value:t,onChangeTitle:r,onChangeDate:n}){return v.jsxs(cg,{children:[v.jsx(ug,{placeholder:e,value:e,onChange:r}),v.jsx(hg,{placeholder:e,value:t,onChange:n})]})}const fg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,dg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,pg=z.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,mg=z.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,gg=z.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function Pa({title:e,value:t,onClick:r}){const n=j.useRef(null);return v.jsxs(fg,{"data-color-input":!0,children:[v.jsx(dg,{children:e}),v.jsxs(pg,{ref:n,onClick:()=>{const o=n.current.getBoundingClientRect();r({top:o.bottom+1+window.scrollY,left:o.left+window.scrollX})},children:[v.jsx(mg,{style:{backgroundColor:t}}),v.jsx(gg,{children:t})]})]})}function cl(){return(cl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x0(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function pc(e){var t=j.useRef(e),r=j.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var Ua=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},Ma=function(e){return"touches"in e},mc=function(e){return e&&e.ownerDocument.defaultView||self},Qu=function(e,t,r){var n=e.getBoundingClientRect(),o=Ma(t)?function(a,l){for(var c=0;c<a.length;c++)if(a[c].identifier===l)return a[c];return a[0]}(t.touches,r):t;return{left:Ua((o.pageX-(n.left+mc(e).pageXOffset))/n.width),top:Ua((o.pageY-(n.top+mc(e).pageYOffset))/n.height)}},Ku=function(e){!Ma(e)&&e.preventDefault()},w0=Mr.memo(function(e){var t=e.onMove,r=e.onKey,n=x0(e,["onMove","onKey"]),o=j.useRef(null),a=pc(t),l=pc(r),c=j.useRef(null),h=j.useRef(!1),f=j.useMemo(function(){var d=function(k){Ku(k),(Ma(k)?k.touches.length>0:k.buttons>0)&&o.current?a(Qu(o.current,k,c.current)):S(!1)},b=function(){return S(!1)};function S(k){var y=h.current,R=mc(o.current),I=k?R.addEventListener:R.removeEventListener;I(y?"touchmove":"mousemove",d),I(y?"touchend":"mouseup",b)}return[function(k){var y=k.nativeEvent,R=o.current;if(R&&(Ku(y),!function(P,Y){return Y&&!Ma(P)}(y,h.current)&&R)){if(Ma(y)){h.current=!0;var I=y.changedTouches||[];I.length&&(c.current=I[0].identifier)}R.focus(),a(Qu(R,y,c.current)),S(!0)}},function(k){var y=k.which||k.keyCode;y<37||y>40||(k.preventDefault(),l({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},S]},[l,a]),p=f[0],w=f[1],_=f[2];return j.useEffect(function(){return _},[_]),Mr.createElement("div",cl({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:o,onKeyDown:w,tabIndex:0,role:"slider"}))}),Fc=function(e){return e.filter(Boolean).join(" ")},y0=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,a=Fc(["react-colorful__pointer",e.className]);return Mr.createElement("div",{className:a,style:{top:100*o+"%",left:100*r+"%"}},Mr.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},Nr=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},vg=function(e){return _g(gc(e))},gc=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Nr(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Nr(parseInt(e.substring(6,8),16)/255,2):1}},bg=function(e){return yg(wg(e))},xg=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:Nr(e.h),s:Nr(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:Nr(o/2),a:Nr(n,2)}},vc=function(e){var t=xg(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},wg=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),l=n*(1-r),c=n*(1-(t-a)*r),h=n*(1-(1-t+a)*r),f=a%6;return{r:Nr(255*[n,c,l,l,h,n][f]),g:Nr(255*[h,n,n,c,l,l][f]),b:Nr(255*[l,l,h,n,n,c][f]),a:Nr(o,2)}},ks=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},yg=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?ks(Nr(255*o)):"";return"#"+ks(t)+ks(r)+ks(n)+a},_g=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),l=a-Math.min(t,r,n),c=l?a===t?(r-n)/l:a===r?2+(n-t)/l:4+(t-r)/l:0;return{h:Nr(60*(c<0?c+6:c)),s:Nr(a?l/a*100:0),v:Nr(a/255*100),a:o}},Sg=Mr.memo(function(e){var t=e.hue,r=e.onChange,n=Fc(["react-colorful__hue",e.className]);return Mr.createElement("div",{className:n},Mr.createElement(w0,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:Ua(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":Nr(t),"aria-valuemax":"360","aria-valuemin":"0"},Mr.createElement(y0,{className:"react-colorful__hue-pointer",left:t/360,color:vc({h:t,s:100,v:100,a:1})})))}),Cg=Mr.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:vc({h:t.h,s:100,v:100,a:1})};return Mr.createElement("div",{className:"react-colorful__saturation",style:n},Mr.createElement(w0,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:Ua(t.s+100*o.left,0,100),v:Ua(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Nr(t.s)+"%, Brightness "+Nr(t.v)+"%"},Mr.createElement(y0,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:vc(t)})))}),_0=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},Ag=function(e,t){return e.toLowerCase()===t.toLowerCase()||_0(gc(e),gc(t))};function kg(e,t,r){var n=pc(r),o=j.useState(function(){return e.toHsva(t)}),a=o[0],l=o[1],c=j.useRef({color:t,hsva:a});j.useEffect(function(){if(!e.equal(t,c.current.color)){var f=e.toHsva(t);c.current={hsva:f,color:t},l(f)}},[t,e]),j.useEffect(function(){var f;_0(a,c.current.hsva)||e.equal(f=e.fromHsva(a),c.current.color)||(c.current={hsva:a,color:f},n(f))},[a,e,n]);var h=j.useCallback(function(f){l(function(p){return Object.assign({},p,f)})},[]);return[a,h]}var Lg=typeof window<"u"?j.useLayoutEffect:j.useEffect,Ng=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},e1=new Map,Eg=function(e){Lg(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!e1.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,e1.set(t,r);var n=Ng();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Tg=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,a=e.onChange,l=x0(e,["className","colorModel","color","onChange"]),c=j.useRef(null);Eg(c);var h=kg(r,o,a),f=h[0],p=h[1],w=Fc(["react-colorful",t]);return Mr.createElement("div",cl({},l,{ref:c,className:w}),Mr.createElement(Cg,{hsva:f,onChange:p}),Mr.createElement(Sg,{hue:f.h,onChange:p,className:"react-colorful__last-control"}))},Ig={defaultColor:"000",toHsva:vg,fromHsva:function(e){return bg({h:e.h,s:e.s,v:e.v,a:1})},equal:Ag},Pg=function(e){return Mr.createElement(Tg,cl({},e,{colorModel:Ig}))};const jg=z.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,Rg=z(Pg)`
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
`,Dl=z.div`
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
`,Og=z.div`
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
`,Mg=z.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Fg=z.input`
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
`,Dg=z(ep)`
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
`,zg=z(op)`
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
`,Bg=z(v0)`
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
`,Ug=z(m0)`
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
`,Hg=z.img`
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
`;function qg({DefaultColor:e,image:t,predefinedColors:r,position:n,onDone:o,onClose:a}){const[l,c]=j.useState(e),[h,f]=j.useState(!1),[p,w]=j.useState(null),_=j.useRef(null),d=j.useRef(null);function b(){f(!h)}function S(I){c(I.target.value===""?"#":I.target.value)}function k(I){const P=_.current,K=d.current.getBoundingClientRect(),ne=P.getContext("2d"),X=Math.floor(I.clientX-K.left),M=Math.floor(I.clientY-K.top),E=`#${[...ne.getImageData(X,M,1,1).data].slice(0,3).map(F=>F.toString(16).padStart(2,"0")).join("")}`;c(E),b()}function y(I){const P=_.current,K=d.current.getBoundingClientRect(),ne=Math.floor(I.clientX-K.left),X=Math.floor(I.clientY-K.top);if(P){const M=P.getContext("2d");try{const E=`#${[...M.getImageData(ne,X,1,1).data].slice(0,3).map(F=>F.toString(16).padStart(2,"0")).join("")}`;w(E)}catch{w(null)}}}function R(){w(null)}return v.jsxs(jg,{style:{position:"absolute",top:n.top,left:n.left,zIndex:2147483647},children:[v.jsx("canvas",{ref:_,style:{display:"none"}}),h?v.jsx(Hg,{ref:d,crossOrigin:"anonymous",draggable:"false",src:t,onClick:k,onMouseMove:y,onMouseLeave:R,onLoad:()=>{const I=_.current,P=I.getContext("2d"),Y=d.current;I.width=Y.width,I.height=Y.height,P.drawImage(Y,0,0,Y.width,Y.height)},style:p?{borderColor:p}:{}}):v.jsx(Rg,{color:l,onChange:c}),v.jsx(Dl,{children:r.map(I=>v.jsx(Og,{style:{backgroundColor:I},onClick:()=>c(I)},I))}),v.jsxs(Dl,{children:[v.jsx(Mg,{children:"Hex"}),v.jsx(Fg,{value:l,onChange:S})]}),v.jsxs(Dl,{children:[h?v.jsx(zg,{onClick:b}):v.jsx(Dg,{onClick:b}),v.jsx(Bg,{onClick:a}),v.jsx(Ug,{onClick:()=>{o(l),f5(l)}})]})]})}const $g=z.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
    gap: 15px;
`,Vg=z.canvas`
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
`,Ls=z.div`
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
`,Ns=z.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`,Es=z.label`
    font-size: 0.9em;
    font-weight: bold;
    color: var(--textColor);
    opacity: 0.8;
    margin-left: 5px;
`,Ts=z.input`
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
`,Is=z.input`
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
`,Wg=z.div`
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
`,Gg=z(v0)`
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
`,Yg=z(m0)`
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
`;function Xg({position:e,albumCoverUrl:t,initialZoom:r=0,initialHorizontalPosition:n=0,initialVerticalPosition:o=0,initialBlur:a=0,onDone:l,onClose:c}){const{t:h}=ur(),[f,p]=j.useState(r),[w,_]=j.useState(n),[d,b]=j.useState(o),[S,k]=j.useState(a),y=j.useRef(null),R=j.useRef(null),I=j.useRef(!1),P=j.useRef({x:0,y:0});j.useEffect(()=>{if(t){const M=new Image;M.crossOrigin="anonymous",M.src=t,M.onload=()=>{R.current=M,X()}}},[t]),j.useEffect(()=>{X()},[f,w,d,S]);const Y=M=>{const J=y.current;if(!J)return;const E=J.getBoundingClientRect(),F=M.clientX-E.left,G=M.clientY-E.top,$=J.width,oe=J.height,se=Math.min($,oe),pe=1+f/100,ee=se*pe,le=$/2,Ce=oe/2,be=$/2*(w/50),L=oe/2*(d/50),H=le-ee/2+be,V=Ce-ee/2+L;F>=H&&F<=H+ee&&G>=V&&G<=V+ee&&(I.current=!0,P.current={x:F,y:G},J.style.cursor="grabbing")},K=M=>{if(!I.current)return;const J=y.current;if(!J)return;const E=J.getBoundingClientRect(),F=M.clientX-E.left,G=M.clientY-E.top,$=F-P.current.x,oe=G-P.current.y;P.current={x:F,y:G};const se=J.width,pe=J.height,ee=w+$/(se/2)*50,le=d+oe/(pe/2)*50;_(Math.max(-50,Math.min(50,ee))),b(Math.max(-50,Math.min(50,le)))},ne=()=>{I.current=!1;const M=y.current;M&&(M.style.cursor="grab")};j.useEffect(()=>{const M=y.current;if(M)return M.addEventListener("mousedown",Y),window.addEventListener("mousemove",K),window.addEventListener("mouseup",ne),()=>{M.removeEventListener("mousedown",Y),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",ne)}},[f,w,d,S]);const X=()=>{const M=y.current;if(!M)return;const J=M.getContext("2d"),E=M.width,F=M.height;J.clearRect(0,0,E,F);const G=Math.min(E,F),$=1+f/100,oe=G*$,se=E/2,pe=F/2,ee=E/2*(w/50),le=F/2*(d/50),Ce=se-oe/2+ee,be=pe-oe/2+le;R.current&&(J.filter=`blur(${S/5}px)`,J.drawImage(R.current,Ce,be,oe,oe),J.filter="none")};return v.jsxs($g,{style:{position:"absolute",top:e.top,left:e.left,zIndex:2147483647},children:[v.jsx(Vg,{ref:y,width:200,height:200}),v.jsxs(Ls,{children:[v.jsxs(Ns,{children:[v.jsx(Es,{children:h("COVER_EDITOR_Size")}),v.jsx(Ts,{type:"number",value:f,onChange:M=>p(parseInt(M.target.value)||0)})]}),v.jsx(Is,{type:"range",min:"-100",max:"100",step:"1",value:f,onChange:M=>p(Number(M.target.value))})]}),v.jsxs(Ls,{children:[v.jsxs(Ns,{children:[v.jsx(Es,{children:h("COVER_EDITOR_Blur")}),v.jsx(Ts,{type:"number",value:S,onChange:M=>k(parseInt(M.target.value)||0)})]}),v.jsx(Is,{type:"range",min:"0",max:"20",step:"1",value:S,onChange:M=>k(Number(M.target.value))})]}),v.jsxs(Ls,{children:[v.jsxs(Ns,{children:[v.jsx(Es,{children:h("COVER_EDITOR_HorizontalPosition")}),v.jsx(Ts,{type:"number",value:w,onChange:M=>_(parseInt(M.target.value)||0)})]}),v.jsx(Is,{type:"range",min:"-50",max:"50",step:"1",value:w,onChange:M=>_(Number(M.target.value))})]}),v.jsxs(Ls,{children:[v.jsxs(Ns,{children:[v.jsx(Es,{children:h("COVER_EDITOR_VerticalPosition")}),v.jsx(Ts,{type:"number",value:d,onChange:M=>b(parseInt(M.target.value)||0)})]}),v.jsx(Is,{type:"range",min:"-50",max:"50",step:"1",value:d,onChange:M=>b(Number(M.target.value))})]}),v.jsxs(Wg,{children:[v.jsx(Gg,{onClick:c}),v.jsx(Yg,{onClick:()=>l({zoom:f,horizontalPosition:w,verticalPosition:d,blur:S})})]})]})}const Zg=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Jg=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Qg=z.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
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
`,e3=z.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function Ps({title:e,text:t,value:r,onChange:n}){const o=()=>n(!r);return v.jsxs(Zg,{children:[v.jsx(Jg,{children:e}),v.jsxs(Qg,{onClick:o,children:[v.jsx(Kg,{checked:r,readOnly:!0,type:"checkbox"}),v.jsx(e3,{active:r,children:t})]})]})}const t3=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,r3=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,n3=z.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,i3=z.input`
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
`,o3=z.p`
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
`;function t1({title:e,text:t,onChange:r,accept:n="image/png, image/jpg, image/jpeg",icon:o}){const a=j.useRef(),l=()=>{a.current.click()},c=h=>{const f=h.target.files[0];t=f.name,f&&r(f)};return v.jsxs(t3,{onClick:l,children:[v.jsx(r3,{children:e}),v.jsxs(n3,{children:[o&&v.jsx(o,{style:{width:"16px",height:"16px",marginLeft:"10px"}}),v.jsx(i3,{ref:a,type:"file",accept:n,onChange:c}),v.jsx(o3,{active:!0,children:t})]})]})}const a3=z.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,s3=z.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,l3=z.div`
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
`,c3=z.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`,u3=z.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function h3({title:e,text:t,onClick:r,icon:n}){const o=j.useRef(null);return v.jsxs(a3,{children:[v.jsx(s3,{children:e}),v.jsxs(l3,{ref:o,onClick:()=>{const a=o.current.getBoundingClientRect();r({top:a.bottom+1+window.scrollY,left:a.left+window.scrollX})},children:[n&&v.jsx(c3,{children:v.jsx(n,{})}),v.jsx(u3,{children:t})]})]})}function f3(e){return Lt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function d3(e){return Lt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}function S0(e){return Lt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}function p3(e){return Lt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"},child:[]}]})(e)}const m3=z.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,g3=z.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,v3=z.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,b3=z(S0)`
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
`;function C0(){const{t:e}=ur();return v.jsxs(m3,{children:[v.jsx(b3,{}),v.jsx(g3,{children:e("Loading")}),v.jsx(v3,{children:e("LoadingText")})]})}var A0={},ul={},k0={exports:{}},x3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w3=x3,y3=w3;function L0(){}function N0(){}N0.resetWarningCache=L0;var _3=function(){function e(n,o,a,l,c,h){if(h!==y3){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N0,resetWarningCache:L0};return r.PropTypes=r,r};k0.exports=_3();var E0=k0.exports,Dc={},hl={},T0={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(bf,function(){var r=function(h,f){return h<f?-1:h>f?1:0},n=function(h){return h.reduce(function(f,p){return f+p},0)},o=function(){function h(p){this.colors=p}var f=h.prototype;return f.palette=function(){return this.colors},f.map=function(p){return p},h}(),a=function(){function h(d,b,S){return(d<<10)+(b<<5)+S}function f(d){var b=[],S=!1;function k(){b.sort(d),S=!0}return{push:function(y){b.push(y),S=!1},peek:function(y){return S||k(),y===void 0&&(y=b.length-1),b[y]},pop:function(){return S||k(),b.pop()},size:function(){return b.length},map:function(y){return b.map(y)},debug:function(){return S||k(),b}}}function p(d,b,S,k,y,R,I){var P=this;P.r1=d,P.r2=b,P.g1=S,P.g2=k,P.b1=y,P.b2=R,P.histo=I}function w(){this.vboxes=new f(function(d,b){return r(d.vbox.count()*d.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function _(d,b){if(b.count()){var S=b.r2-b.r1+1,k=b.g2-b.g1+1,y=Math.max.apply(null,[S,k,b.b2-b.b1+1]);if(b.count()==1)return[b.copy()];var R,I,P,Y,K=0,ne=[],X=[];if(y==S)for(R=b.r1;R<=b.r2;R++){for(Y=0,I=b.g1;I<=b.g2;I++)for(P=b.b1;P<=b.b2;P++)Y+=d[h(R,I,P)]||0;ne[R]=K+=Y}else if(y==k)for(R=b.g1;R<=b.g2;R++){for(Y=0,I=b.r1;I<=b.r2;I++)for(P=b.b1;P<=b.b2;P++)Y+=d[h(I,R,P)]||0;ne[R]=K+=Y}else for(R=b.b1;R<=b.b2;R++){for(Y=0,I=b.r1;I<=b.r2;I++)for(P=b.g1;P<=b.g2;P++)Y+=d[h(I,P,R)]||0;ne[R]=K+=Y}return ne.forEach(function(M,J){X[J]=K-M}),function(M){var J,E,F,G,$,oe=M+"1",se=M+"2",pe=0;for(R=b[oe];R<=b[se];R++)if(ne[R]>K/2){for(F=b.copy(),G=b.copy(),$=(J=R-b[oe])<=(E=b[se]-R)?Math.min(b[se]-1,~~(R+E/2)):Math.max(b[oe],~~(R-1-J/2));!ne[$];)$++;for(pe=X[$];!pe&&ne[$-1];)pe=X[--$];return F[se]=$,G[oe]=F[se]+1,[F,G]}}(y==S?"r":y==k?"g":"b")}}return p.prototype={volume:function(d){var b=this;return b._volume&&!d||(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(d){var b=this,S=b.histo;if(!b._count_set||d){var k,y,R,I=0;for(k=b.r1;k<=b.r2;k++)for(y=b.g1;y<=b.g2;y++)for(R=b.b1;R<=b.b2;R++)I+=S[h(k,y,R)]||0;b._count=I,b._count_set=!0}return b._count},copy:function(){var d=this;return new p(d.r1,d.r2,d.g1,d.g2,d.b1,d.b2,d.histo)},avg:function(d){var b=this,S=b.histo;if(!b._avg||d){var k,y,R,I,P=0,Y=0,K=0,ne=0;if(b.r1===b.r2&&b.g1===b.g2&&b.b1===b.b2)b._avg=[b.r1<<3,b.g1<<3,b.b1<<3];else{for(y=b.r1;y<=b.r2;y++)for(R=b.g1;R<=b.g2;R++)for(I=b.b1;I<=b.b2;I++)P+=k=S[h(y,R,I)]||0,Y+=k*(y+.5)*8,K+=k*(R+.5)*8,ne+=k*(I+.5)*8;b._avg=P?[~~(Y/P),~~(K/P),~~(ne/P)]:[~~(8*(b.r1+b.r2+1)/2),~~(8*(b.g1+b.g2+1)/2),~~(8*(b.b1+b.b2+1)/2)]}}return b._avg},contains:function(d){var b=this,S=d[0]>>3;return gval=d[1]>>3,bval=d[2]>>3,S>=b.r1&&S<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},w.prototype={push:function(d){this.vboxes.push({vbox:d,color:d.avg()})},palette:function(){return this.vboxes.map(function(d){return d.color})},size:function(){return this.vboxes.size()},map:function(d){for(var b=this.vboxes,S=0;S<b.size();S++)if(b.peek(S).vbox.contains(d))return b.peek(S).color;return this.nearest(d)},nearest:function(d){for(var b,S,k,y=this.vboxes,R=0;R<y.size();R++)((S=Math.sqrt(Math.pow(d[0]-y.peek(R).color[0],2)+Math.pow(d[1]-y.peek(R).color[1],2)+Math.pow(d[2]-y.peek(R).color[2],2)))<b||b===void 0)&&(b=S,k=y.peek(R).color);return k},forcebw:function(){var d=this.vboxes;d.sort(function(y,R){return r(n(y.color),n(R.color))});var b=d[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(d[0].color=[0,0,0]);var S=d.length-1,k=d[S].color;k[0]>251&&k[1]>251&&k[2]>251&&(d[S].color=[255,255,255])}},{quantize:function(d,b){if(!Number.isInteger(b)||b<1||b>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!d.length||b<2||b>256||!d.length||b<2||b>256)return!1;for(var S=[],k=new Set,y=0;y<d.length;y++){var R=d[y],I=R.join(",");k.has(I)||(k.add(I),S.push(R))}if(S.length<=b)return new o(S);var P=function(J){var E,F=new Array(32768);return J.forEach(function(G){E=h(G[0]>>3,G[1]>>3,G[2]>>3),F[E]=(F[E]||0)+1}),F}(d);P.forEach(function(){});var Y=function(J,E){var F,G,$,oe=1e6,se=0,pe=1e6,ee=0,le=1e6,Ce=0;return J.forEach(function(be){(F=be[0]>>3)<oe?oe=F:F>se&&(se=F),(G=be[1]>>3)<pe?pe=G:G>ee&&(ee=G),($=be[2]>>3)<le?le=$:$>Ce&&(Ce=$)}),new p(oe,se,pe,ee,le,Ce,E)}(d,P),K=new f(function(J,E){return r(J.count(),E.count())});function ne(J,E){for(var F,G=J.size(),$=0;$<1e3;){if(G>=E||$++>1e3)return;if((F=J.pop()).count()){var oe=_(P,F),se=oe[0],pe=oe[1];if(!se)return;J.push(se),pe&&(J.push(pe),G++)}else J.push(F),$++}}K.push(Y),ne(K,.75*b);for(var X=new f(function(J,E){return r(J.count()*J.volume(),E.count()*E.volume())});K.size();)X.push(K.pop());ne(X,b);for(var M=new w;X.size();)M.push(X.pop());return M}}}().quantize,l=function(h){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=h.naturalWidth,this.height=this.canvas.height=h.naturalHeight,this.context.drawImage(h,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var c=function(){};return c.prototype.getColor=function(h,f){return f===void 0&&(f=10),this.getPalette(h,5,f)[0]},c.prototype.getPalette=function(h,f,p){var w=function(S){var k=S.colorCount,y=S.quality;if(k!==void 0&&Number.isInteger(k)){if(k===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");k=Math.max(k,2),k=Math.min(k,20)}else k=10;return(y===void 0||!Number.isInteger(y)||y<1)&&(y=10),{colorCount:k,quality:y}}({colorCount:f,quality:p}),_=new l(h),d=function(S,k,y){for(var R,I,P,Y,K,ne=S,X=[],M=0;M<k;M+=y)I=ne[0+(R=4*M)],P=ne[R+1],Y=ne[R+2],((K=ne[R+3])===void 0||K>=125)&&(I>250&&P>250&&Y>250||X.push([I,P,Y]));return X}(_.getImageData().data,_.width*_.height,w.quality),b=a(d,w.colorCount);return b?b.palette():null},c.prototype.getColorFromUrl=function(h,f,p){var w=this,_=document.createElement("img");_.addEventListener("load",function(){var d=w.getPalette(_,5,p);f(d[0],h)}),_.src=h},c.prototype.getImageData=function(h,f){var p=new XMLHttpRequest;p.open("GET",h,!0),p.responseType="arraybuffer",p.onload=function(){if(this.status==200){var w=new Uint8Array(this.response);i=w.length;for(var _=new Array(i),d=0;d<w.length;d++)_[d]=String.fromCharCode(w[d]);var b=_.join(""),S=window.btoa(b);f("data:image/png;base64,"+S)}},p.send()},c.prototype.getColorAsync=function(h,f,p){var w=this;this.getImageData(h,function(_){var d=document.createElement("img");d.addEventListener("load",function(){var b=w.getPalette(d,5,p);f(b[0],this)}),d.src=_})},c})})(T0);var I0=T0.exports,fl={},zc={};Object.defineProperty(zc,"__esModule",{value:!0});zc.default=S3;function S3(e,t,r){return`rgb(${e}, ${t}, ${r})`}var Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});Bc.default=C3;function C3(e,t,r){return`#${[e,t,r].map(n=>{const o=n.toString(16);return o.length===1?`0${o}`:o}).join("")}`}Object.defineProperty(fl,"__esModule",{value:!0});fl.default=L3;var A3=P0(zc),k3=P0(Bc);function P0(e){return e&&e.__esModule?e:{default:e}}function L3(e,t){switch(t){case"rgbString":return(0,A3.default)(e[0],e[1],e[2]);case"hex":return(0,k3.default)(e[0],e[1],e[2]);default:return e}}var dl={};Object.defineProperty(dl,"__esModule",{value:!0});dl.default=N3;function N3(e,t=void 0){return new Promise((r,n)=>{const o=new Image;o.addEventListener("load",()=>{r(o)}),o.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),o.crossOrigin=t,o.src=e})}Object.defineProperty(hl,"__esModule",{value:!0});hl.default=P3;var E3=Uc(I0),T3=Uc(fl),I3=Uc(dl);function Uc(e){return e&&e.__esModule?e:{default:e}}async function P3(e,t="rgbString",r=null,n=10){const o=await(0,I3.default)(e,r),l=new E3.default().getColor(o,n);return(0,T3.default)(l,t)}Object.defineProperty(Dc,"__esModule",{value:!0});Dc.default=M3;var r1=j,j3=R3(hl);function R3(e){return e&&e.__esModule?e:{default:e}}const j0={loading:!0,data:null,error:void 0};function O3(e,t){switch(t.type){case"getColor":return j0;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function M3(e,t="rgbString",r={}){const{crossOrigin:n=null,quality:o=10}=r,[a,l]=(0,r1.useReducer)(O3,j0);return(0,r1.useEffect)(()=>{l({type:"getColor"}),(0,j3.default)(e,t,n,o).then(c=>{l({type:"resolveColor",payload:c})}).catch(c=>{l({type:"rejectColor",payload:c})})},[e]),a}Object.defineProperty(ul,"__esModule",{value:!0});ul.default=void 0;var n1=Hc(j),ja=Hc(E0),F3=Hc(Dc);function Hc(e){return e&&e.__esModule?e:{default:e}}const qc=({src:e,format:t,crossOrigin:r,quality:n,children:o})=>{const a=(0,F3.default)(e,t,{crossOrigin:r,quality:n});return n1.default.createElement(n1.default.Fragment,null,o(a))};qc.defaultProps={format:"rgbString",crossOrigin:null,quality:10};qc.propTypes={children:ja.default.any.isRequired,src:ja.default.string.isRequired,format:ja.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:ja.default.string,quality:ja.default.number};var D3=qc;ul.default=D3;var pl={},$c={},ml={};Object.defineProperty(ml,"__esModule",{value:!0});ml.default=H3;var z3=Vc(I0),B3=Vc(fl),U3=Vc(dl);function Vc(e){return e&&e.__esModule?e:{default:e}}async function H3(e,t=2,r="rgbString",n=null,o=10){const a=await(0,U3.default)(e,n);return new z3.default().getPalette(a,t,o).map(h=>(0,B3.default)(h,r))}Object.defineProperty($c,"__esModule",{value:!0});$c.default=W3;var i1=j,q3=$3(ml);function $3(e){return e&&e.__esModule?e:{default:e}}const R0={loading:!0,data:[],error:void 0};function V3(e,t){switch(t.type){case"getPalette":return R0;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function W3(e,t=2,r="rgbString",n={}){const{crossOrigin:o=null,quality:a=10}=n,[l,c]=(0,i1.useReducer)(V3,R0);return(0,i1.useEffect)(()=>{c({type:"getPalette"}),(0,q3.default)(e,t,r,o,a).then(h=>{c({type:"resolvePalette",payload:h})}).catch(h=>{c({type:"rejectPalette",payload:h})})},[e]),l}Object.defineProperty(pl,"__esModule",{value:!0});pl.default=void 0;var o1=Wc(j),qo=Wc(E0),G3=Wc($c);function Wc(e){return e&&e.__esModule?e:{default:e}}const Gc=({src:e,colorCount:t,format:r,crossOrigin:n,quality:o,children:a})=>{const l=(0,G3.default)(e,t,r,{crossOrigin:n,quality:o});return o1.default.createElement(o1.default.Fragment,null,a(l))};Gc.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};Gc.propTypes={children:qo.default.any.isRequired,src:qo.default.string.isRequired,format:qo.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:qo.default.number,crossOrigin:qo.default.string,quality:qo.default.number};var Y3=Gc;pl.default=Y3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return o.default}}),e.default=void 0;var t=a(ul),r=a(pl),n=a(hl),o=a(ml);function a(c){return c&&c.__esModule?c:{default:c}}var l=t.default;e.default=l})(A0);const X3=(e,t=500,r=134)=>`
        <svg width="${t}" height="${r}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,bc=j.forwardRef(({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:n,onTracksSizeAdjust:o,customFont:a,scale:l=1,isThumbnail:c=!1},h)=>{const f=j.useRef(null);j.useImperativeHandle(h,()=>({getCanvas:()=>f.current})),j.useEffect(()=>{(async()=>{if(!r)return;const d=f.current,b=d.getContext("2d"),S=2480,k=3508,y=Math.round(S*l),R=Math.round(k*l),I=Math.round((parseInt(t.marginSide)||0)*l),P=Math.round((parseInt(t.marginTop)||0)*l),Y=Math.round((parseInt(t.marginCover)||0)*l),K=Math.round((parseInt(t.marginBackground)||0)*l),ne=Math.round((parseInt(t.coverHorizontalPosition)||0)*l),X=Math.round((parseInt(t.coverVerticalPosition)||0)*l),M=Math.round((parseInt(t.coverBlur)||0)*l*(c?.5:2)),J=async ee=>{const le=new Image;return le.crossOrigin="anonymous",le.src=ee,new Promise(Ce=>{le.onload=()=>{const be=y-Y*2,L=be/y*11,H=Y+ne*L,V=Y+X*L;if(M>0&&(b.filter=`blur(${M}px)`),b.drawImage(le,H,V,be,be),b.filter="none",t.useFade){let Q=b.createLinearGradient(0,0,0,Math.round((3e3-(parseInt(t.marginBackground)||0))*l));const re=$(t.backgroundColor);Q.addColorStop(.5,`rgba(${re.r}, ${re.g}, ${re.b}, 0)`),Q.addColorStop(.8,t.backgroundColor),b.fillStyle=Q,b.fillRect(0,0,d.width,Math.round((2500-(parseInt(t.marginBackground)||0))*l))}Ce()}})},E=async()=>{const ee=Math.round(500*l),le=Math.round(134*l),Ce=X3(t.textColor,ee,le),be=new Blob([Ce],{type:"image/svg+xml;charset=utf-8"}),L=URL.createObjectURL(be),H=new Image;return H.src=L,new Promise(V=>{H.onload=()=>{b.globalAlpha="0.5",b.drawImage(H,y-Math.round(70*l)-ee,Math.round(50*l),ee,le),b.globalAlpha="1",URL.revokeObjectURL(L),V()}})},F=async()=>{let ee=t.titleSize?parseInt(t.titleSize):230,le=Math.round(ee*l);const Ce=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){b.font=`bold ${le}px ${Ce}`;let Te=b.measureText(t.albumName).width;for(;Te>y-I*2;)ee-=1,le=Math.round(ee*l),b.font=`bold ${le}px ${Ce}`,Te=b.measureText(t.albumName).width;n&&!c&&n(ee,!0)}else b.font=`bold ${le}px ${Ce}`;b.fillStyle=t.textColor;const be=Math.round(2500*l),L=Math.round(2790*l);t.showTracklist?b.fillText(t.albumName,I,be+P):b.fillText(t.albumName,I,L+P);let H=t.artistsSize?Math.round(parseInt(t.artistsSize)*l):Math.round(110*l);b.font=`bold ${H}px ${a||"Montserrat"}`,t.showTracklist?b.fillText(t.artistsName,I,be+P+H*1.3):b.fillText(t.artistsName,I,Math.round(2820*l)+P+H);const V=Math.round(70*l),Q=Math.round(60*l),re=Math.round(3310*l),ue=Math.round(3390*l);b.font=`bold ${V}px ${a||"Montserrat"}`,b.fillText(t.titleRelease,I,re);let ge=b.measureText(t.titleRelease).width;b.fillText(t.titleRuntime,ge+I+Math.round(100*l),re),b.globalAlpha=.7,b.font=`bold ${Q}px ${a||"Montserrat"}`,b.fillText(t.runtime,ge+I+Math.round(100*l),ue),b.fillText(t.releaseDate,I,ue),b.globalAlpha=1;const me=Math.round(3368*l),xe=Math.round(145*l),Ae=Math.round(30*l);b.fillStyle=t.color1,b.fillRect(Math.round((2045-(parseInt(t.marginSide)||0))*l),me,xe,Ae),b.fillStyle=t.color2,b.fillRect(Math.round((2190-(parseInt(t.marginSide)||0))*l),me,xe,Ae),b.fillStyle=t.color3,b.fillRect(Math.round((2335-(parseInt(t.marginSide)||0))*l),me,xe,Ae)},G=async()=>{b.fillStyle=t.textColor;let ee=t.tracksSize?parseInt(t.tracksSize):50,le=ee*l;const Ce=parseInt(t.marginTop||0),be=parseInt(t.artistsSize)||110,L=Math.round((2500+Ce+be*1.3+130)*l),V=Math.round(3310*l)-Math.round(50*l),Q=y-I,re=t.tracklist.split(`
`).filter(Te=>Te.trim()!=="");if(!t.userAdjustedTracksSize&&!t.initialTracksSizeSet){const Te=ve=>{const W=ve*l;b.font=`bold ${W}px ${a||"Montserrat"}`;const Ke=ve*1.3*l;let qe=I+Math.round(10*l),Ne=0,Oe=L,je=0;return re.forEach(it=>{Oe+Ke>=V&&(Oe=L,qe=qe+Ne+W,Ne=0);const Fe=b.measureText(`${it}`).width,gt=qe+Fe;Fe>Ne&&(Ne=Fe),je=Math.max(je,gt),Oe+=Ke}),je};let Pe=Te(ee);for(;Pe>Q&&ee>1;)ee-=1,Pe=Te(ee);le=ee*l,o&&!c&&o(ee,!0)}b.font=`bold ${le}px ${a||"Montserrat"}`;const ge=ee*1.3*l;let me=I+Math.round(7*l),xe=0,Ae=L;re.forEach(Te=>{Ae+ge>=V&&(Ae=L,me=me+xe+le,xe=0);const Pe=b.measureText(`${Te}`).width;Pe>xe&&(xe=Pe),b.fillText(`${Te}`,me,Ae),Ae+=ge})},$=ee=>{const le=parseInt(ee.replace("#",""),16);return{r:le>>16&255,g:le>>8&255,b:le&255}},oe=ee=>{const le=be=>{const L=be/255;return L<=.03928?L/12.92:Math.pow((L+.055)/1.055,2.4)};return .2126*le(ee.r)+.7152*le(ee.g)+.0722*le(ee.b)>.179?"black":"white"},se=async()=>{const ee=$(t.backgroundColor),le=oe(ee),Ce=t.textColor,be=c?320:640,L=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${le}/${be}/spotify:album:${t.albumID}`;let V=await(await fetch(L)).text();le=="black"?V=V.replace(/fill="#000000"/g,`fill="${Ce}"`):V=V.replace(/fill="#ffffff"/g,`fill="${Ce}"`),V=V.replace(t.backgroundColor,"transparent");const Q=new Blob([V],{type:"image/svg+xml"}),re=URL.createObjectURL(Q);return new Promise(ue=>{const ge=new Image;ge.src=re,ge.onload=function(){const me=Math.round(480*l),xe=Math.round(120*l),Ae=Math.round((2020-(parseInt(t.marginSide)||0))*l),Te=Math.round(3235*l);b.drawImage(ge,Ae,Te,me,xe);const Pe=c?"image/jpeg":"image/png",ve=c?.7:1,W=d.toDataURL(Pe,ve);e(W),URL.revokeObjectURL(re),ue()}})},pe=async()=>{b.fillStyle=t.backgroundColor;const ee=Math.round(2480*l)-K,le=R-ee;b.fillRect(0,ee,y,le)};b.clearRect(0,0,y,R),b.fillStyle=t.backgroundColor,b.fillRect(0,0,y,R),t.useUncompressed?await J(await t.uncompressedAlbumCover):await J(t.albumCover),await pe(),await F(),t.showTracklist&&await G(),t.useWatermark&&await E(),await se()})()},[r,t,e,a,l,c,n,o]);const p=Math.round(2480*l),w=Math.round(3508*l);return v.jsx("canvas",{ref:f,width:p,height:w,style:{display:"none"}})});bc.displayName="CanvasPoster";const Z3=z.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Gt({children:e,animationDelay:t=0,...r}){const[n,o]=j.useState(!1);return j.useEffect(()=>{const a=setTimeout(()=>{o(!0)},t);return()=>clearTimeout(a)},[t]),v.jsx(Z3,{visible:n,animationDelay:t,...r,children:e})}const J3="modulepreload",Q3=function(e){return"/"+e},a1={},zl=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(r.map(h=>{if(h=Q3(h),h in a1)return;a1[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const w=document.createElement("link");if(w.rel=f?"stylesheet":J3,f||(w.as="script"),w.crossOrigin="",w.href=h,c&&w.setAttribute("nonce",c),document.head.appendChild(w),f)return new Promise((_,d)=>{w.addEventListener("load",_),w.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})};function Pt(e){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(e)}var Rn=Uint8Array,cn=Uint16Array,Yc=Int32Array,Xc=new Rn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zc=new Rn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s1=new Rn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),O0=function(e,t){for(var r=new cn(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new Yc(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return{b:r,r:o}},M0=O0(Xc,2),K3=M0.b,xc=M0.r;K3[28]=258,xc[258]=28;var e4=O0(Zc,0),l1=e4.r,wc=new cn(32768);for(var Ut=0;Ut<32768;++Ut){var qi=(Ut&43690)>>1|(Ut&21845)<<1;qi=(qi&52428)>>2|(qi&13107)<<2,qi=(qi&61680)>>4|(qi&3855)<<4,wc[Ut]=((qi&65280)>>8|(qi&255)<<8)>>1}var Fa=function(e,t,r){for(var n=e.length,o=0,a=new cn(t);o<n;++o)e[o]&&++a[e[o]-1];var l=new cn(t);for(o=1;o<t;++o)l[o]=l[o-1]+a[o-1]<<1;var c;if(r){c=new cn(1<<t);var h=15-t;for(o=0;o<n;++o)if(e[o])for(var f=o<<4|e[o],p=t-e[o],w=l[e[o]-1]++<<p,_=w|(1<<p)-1;w<=_;++w)c[wc[w]>>h]=f}else for(c=new cn(n),o=0;o<n;++o)e[o]&&(c[o]=wc[l[e[o]-1]++]>>15-e[o]);return c},Lo=new Rn(288);for(var Ut=0;Ut<144;++Ut)Lo[Ut]=8;for(var Ut=144;Ut<256;++Ut)Lo[Ut]=9;for(var Ut=256;Ut<280;++Ut)Lo[Ut]=7;for(var Ut=280;Ut<288;++Ut)Lo[Ut]=8;var tl=new Rn(32);for(var Ut=0;Ut<32;++Ut)tl[Ut]=5;var t4=Fa(Lo,9,0),r4=Fa(tl,5,0),F0=function(e){return(e+7)/8|0},n4=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Rn(e.subarray(t,r))},pi=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},Ra=function(e,t,r){r<<=t&7;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},Bl=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var o=r.length,a=r.slice();if(!o)return{t:z0,l:0};if(o==1){var l=new Rn(r[0].s+1);return l[r[0].s]=1,{t:l,l:1}}r.sort(function(Y,K){return Y.f-K.f}),r.push({s:-1,f:25001});var c=r[0],h=r[1],f=0,p=1,w=2;for(r[0]={s:-1,f:c.f+h.f,l:c,r:h};p!=o-1;)c=r[r[f].f<r[w].f?f++:w++],h=r[f!=p&&r[f].f<r[w].f?f++:w++],r[p++]={s:-1,f:c.f+h.f,l:c,r:h};for(var _=a[0].s,n=1;n<o;++n)a[n].s>_&&(_=a[n].s);var d=new cn(_+1),b=yc(r[p-1],d,0);if(b>t){var n=0,S=0,k=b-t,y=1<<k;for(a.sort(function(K,ne){return d[ne.s]-d[K.s]||K.f-ne.f});n<o;++n){var R=a[n].s;if(d[R]>t)S+=y-(1<<b-d[R]),d[R]=t;else break}for(S>>=k;S>0;){var I=a[n].s;d[I]<t?S-=1<<t-d[I]++-1:++n}for(;n>=0&&S;--n){var P=a[n].s;d[P]==t&&(--d[P],++S)}b=t}return{t:new Rn(d),l:b}},yc=function(e,t,r){return e.s==-1?Math.max(yc(e.l,t,r+1),yc(e.r,t,r+1)):t[e.s]=r},c1=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new cn(++t),n=0,o=e[0],a=1,l=function(h){r[n++]=h},c=1;c<=t;++c)if(e[c]==o&&c!=t)++a;else{if(!o&&a>2){for(;a>138;a-=138)l(32754);a>2&&(l(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(l(o),--a;a>6;a-=6)l(8304);a>2&&(l(a-3<<5|8208),a=0)}for(;a--;)l(o);a=1,o=e[c]}return{c:r.subarray(0,n),n:t}},Oa=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},D0=function(e,t,r){var n=r.length,o=F0(t+2);e[o]=n&255,e[o+1]=n>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<n;++a)e[o+a+4]=r[a];return(o+4+n)*8},u1=function(e,t,r,n,o,a,l,c,h,f,p){pi(t,p++,r),++o[256];for(var w=Bl(o,15),_=w.t,d=w.l,b=Bl(a,15),S=b.t,k=b.l,y=c1(_),R=y.c,I=y.n,P=c1(S),Y=P.c,K=P.n,ne=new cn(19),X=0;X<R.length;++X)++ne[R[X]&31];for(var X=0;X<Y.length;++X)++ne[Y[X]&31];for(var M=Bl(ne,7),J=M.t,E=M.l,F=19;F>4&&!J[s1[F-1]];--F);var G=f+5<<3,$=Oa(o,Lo)+Oa(a,tl)+l,oe=Oa(o,_)+Oa(a,S)+l+14+3*F+Oa(ne,J)+2*ne[16]+3*ne[17]+7*ne[18];if(h>=0&&G<=$&&G<=oe)return D0(t,p,e.subarray(h,h+f));var se,pe,ee,le;if(pi(t,p,1+(oe<$)),p+=2,oe<$){se=Fa(_,d,0),pe=_,ee=Fa(S,k,0),le=S;var Ce=Fa(J,E,0);pi(t,p,I-257),pi(t,p+5,K-1),pi(t,p+10,F-4),p+=14;for(var X=0;X<F;++X)pi(t,p+3*X,J[s1[X]]);p+=3*F;for(var be=[R,Y],L=0;L<2;++L)for(var H=be[L],X=0;X<H.length;++X){var V=H[X]&31;pi(t,p,Ce[V]),p+=J[V],V>15&&(pi(t,p,H[X]>>5&127),p+=H[X]>>12)}}else se=t4,pe=Lo,ee=r4,le=tl;for(var X=0;X<c;++X){var Q=n[X];if(Q>255){var V=Q>>18&31;Ra(t,p,se[V+257]),p+=pe[V+257],V>7&&(pi(t,p,Q>>23&31),p+=Xc[V]);var re=Q&31;Ra(t,p,ee[re]),p+=le[re],re>3&&(Ra(t,p,Q>>5&8191),p+=Zc[re])}else Ra(t,p,se[Q]),p+=pe[Q]}return Ra(t,p,se[256]),p+pe[256]},i4=new Yc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),z0=new Rn(0),o4=function(e,t,r,n,o,a){var l=a.z||e.length,c=new Rn(n+l+5*(1+Math.ceil(l/7e3))+o),h=c.subarray(n,c.length-o),f=a.l,p=(a.r||0)&7;if(t){p&&(h[0]=a.r>>3);for(var w=i4[t-1],_=w>>13,d=w&8191,b=(1<<r)-1,S=a.p||new cn(32768),k=a.h||new cn(b+1),y=Math.ceil(r/3),R=2*y,I=function(ve){return(e[ve]^e[ve+1]<<y^e[ve+2]<<R)&b},P=new Yc(25e3),Y=new cn(288),K=new cn(32),ne=0,X=0,M=a.i||0,J=0,E=a.w||0,F=0;M+2<l;++M){var G=I(M),$=M&32767,oe=k[G];if(S[$]=oe,k[G]=$,E<=M){var se=l-M;if((ne>7e3||J>24576)&&(se>423||!f)){p=u1(e,h,0,P,Y,K,X,J,F,M-F,p),J=ne=X=0,F=M;for(var pe=0;pe<286;++pe)Y[pe]=0;for(var pe=0;pe<30;++pe)K[pe]=0}var ee=2,le=0,Ce=d,be=$-oe&32767;if(se>2&&G==I(M-be))for(var L=Math.min(_,se)-1,H=Math.min(32767,M),V=Math.min(258,se);be<=H&&--Ce&&$!=oe;){if(e[M+ee]==e[M+ee-be]){for(var Q=0;Q<V&&e[M+Q]==e[M+Q-be];++Q);if(Q>ee){if(ee=Q,le=be,Q>L)break;for(var re=Math.min(be,Q-2),ue=0,pe=0;pe<re;++pe){var ge=M-be+pe&32767,me=S[ge],xe=ge-me&32767;xe>ue&&(ue=xe,oe=ge)}}}$=oe,oe=S[$],be+=$-oe&32767}if(le){P[J++]=268435456|xc[ee]<<18|l1[le];var Ae=xc[ee]&31,Te=l1[le]&31;X+=Xc[Ae]+Zc[Te],++Y[257+Ae],++K[Te],E=M+ee,++ne}else P[J++]=e[M],++Y[e[M]]}}for(M=Math.max(M,E);M<l;++M)P[J++]=e[M],++Y[e[M]];p=u1(e,h,f,P,Y,K,X,J,F,M-F,p),f||(a.r=p&7|h[p/8|0]<<3,p-=7,a.h=k,a.p=S,a.i=M,a.w=E)}else{for(var M=a.w||0;M<l+f;M+=65535){var Pe=M+65535;Pe>=l&&(h[p/8|0]=f,Pe=l),p=D0(h,p+1,e.subarray(M,Pe))}a.i=l}return n4(c,0,n+F0(p)+o)},B0=function(){var e=1,t=0;return{p:function(r){for(var n=e,o=t,a=r.length|0,l=0;l!=a;){for(var c=Math.min(l+2655,a);l<c;++l)o+=n+=r[l];n=(n&65535)+15*(n>>16),o=(o&65535)+15*(o>>16)}e=n,t=o},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},a4=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),l=new Rn(a.length+e.length);l.set(a),l.set(e,a.length),e=l,o.w=a.length}return o4(e,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,n,o)},U0=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},s4=function(e,t){var r=t.level,n=r==0?0:r<6?1:r==9?3:2;if(e[0]=120,e[1]=n<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var o=B0();o.p(t.dictionary),U0(e,2,o.d())}};function _c(e,t){t||(t={});var r=B0();r.p(e);var n=a4(e,t,t.dictionary?6:2,4);return s4(n,t),U0(n,n.length-4,r.d()),n}var l4=typeof TextDecoder<"u"&&new TextDecoder,c4=0;try{l4.decode(z0,{stream:!0}),c4=1}catch{}function u4(e){if(Array.isArray(e))return e}function h4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,a,l,c=[],h=!0,f=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(h=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);h=!0);}catch(p){f=!0,o=p}finally{try{if(!h&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(f)throw o}}return c}}function h1(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f4(e,t){if(e){if(typeof e=="string")return h1(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h1(e,t):void 0}}function d4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f1(e,t){return u4(e)||h4(e,t)||f4(e,t)||d4()}function d1(e,t="utf8"){return new TextDecoder(t).decode(e)}const p4=new TextEncoder;function m4(e){return p4.encode(e)}const g4=1024*8,v4=(()=>{const e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})(),Ul={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class Jc{constructor(t=g4,r={}){Ie(this,"buffer");Ie(this,"byteLength");Ie(this,"byteOffset");Ie(this,"length");Ie(this,"offset");Ie(this,"lastWrittenByte");Ie(this,"littleEndian");Ie(this,"_data");Ie(this,"_mark");Ie(this,"_marks");let n=!1;typeof t=="number"?t=new ArrayBuffer(t):(n=!0,this.lastWrittenByte=t.byteLength);const o=r.offset?r.offset>>>0:0,a=t.byteLength-o;let l=o;(ArrayBuffer.isView(t)||t instanceof Jc)&&(t.byteLength!==t.buffer.byteLength&&(l=t.byteOffset+o),t=t.buffer),n?this.lastWrittenByte=a:this.lastWrittenByte=0,this.buffer=t,this.length=a,this.byteLength=a,this.byteOffset=l,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,l,a),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const n=(this.offset+t)*2,o=new Uint8Array(n);o.set(new Uint8Array(this.buffer)),this.buffer=o.buffer,this.length=n,this.byteLength=n,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,r){const n=Ul[r].BYTES_PER_ELEMENT*t,o=this.byteOffset+this.offset,a=this.buffer.slice(o,o+n);if(this.littleEndian===v4&&r!=="uint8"&&r!=="int8"){const c=new Uint8Array(this.buffer.slice(o,o+n));c.reverse();const h=new Ul[r](c.buffer);return this.offset+=n,h.reverse(),h}const l=new Ul[r](a);return this.offset+=n,l}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let r="";for(let n=0;n<t;n++)r+=this.readChar();return r}readUtf8(t=1){return d1(this.readBytes(t))}decodeText(t=1,r="utf8"){return d1(this.readBytes(t),r)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let r=0;r<t.length;r++)this._data.setUint8(this.offset++,t[r]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let r=0;r<t.length;r++)this.writeUint8(t.charCodeAt(r));return this}writeUtf8(t){return this.writeBytes(m4(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function ia(e){let t=e.length;for(;--t>=0;)e[t]=0}const b4=3,x4=258,H0=29,w4=256,y4=w4+1+H0,q0=30,_4=512,S4=new Array((y4+2)*2);ia(S4);const C4=new Array(q0*2);ia(C4);const A4=new Array(_4);ia(A4);const k4=new Array(x4-b4+1);ia(k4);const L4=new Array(H0);ia(L4);const N4=new Array(q0);ia(N4);const E4=(e,t,r,n)=>{let o=e&65535|0,a=e>>>16&65535|0,l=0;for(;r!==0;){l=r>2e3?2e3:r,r-=l;do o=o+t[n++]|0,a=a+o|0;while(--l);o%=65521,a%=65521}return o|a<<16|0};var Sc=E4;const T4=()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t},I4=new Uint32Array(T4()),P4=(e,t,r,n)=>{const o=I4,a=n+r;e^=-1;for(let l=n;l<a;l++)e=e>>>8^o[(e^t[l])&255];return e^-1};var Wn=P4,Cc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},$0={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const j4=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var R4=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const n in r)j4(r,n)&&(e[n]=r[n])}}return e},O4=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e[n].length;const r=new Uint8Array(t);for(let n=0,o=0,a=e.length;n<a;n++){let l=e[n];r.set(l,o),o+=l.length}return r},V0={assign:R4,flattenChunks:O4};let W0=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{W0=!1}const Ha=new Uint8Array(256);for(let e=0;e<256;e++)Ha[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ha[254]=Ha[254]=1;var M4=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,r,n,o,a,l=e.length,c=0;for(o=0;o<l;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<l&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(c),a=0,o=0;a<c;o++)r=e.charCodeAt(o),(r&64512)===55296&&o+1<l&&(n=e.charCodeAt(o+1),(n&64512)===56320&&(r=65536+(r-55296<<10)+(n-56320),o++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t};const F4=(e,t)=>{if(t<65534&&e.subarray&&W0)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r};var D4=(e,t)=>{const r=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let n,o;const a=new Array(r*2);for(o=0,n=0;n<r;){let l=e[n++];if(l<128){a[o++]=l;continue}let c=Ha[l];if(c>4){a[o++]=65533,n+=c-1;continue}for(l&=c===2?31:c===3?15:7;c>1&&n<r;)l=l<<6|e[n++]&63,c--;if(c>1){a[o++]=65533;continue}l<65536?a[o++]=l:(l-=65536,a[o++]=55296|l>>10&1023,a[o++]=56320|l&1023)}return F4(a,o)},z4=(e,t)=>{t=t||e.length,t>e.length&&(t=e.length);let r=t-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ha[e[r]]>t?r:t},Ac={string2buf:M4,buf2string:D4,utf8border:z4};function B4(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var U4=B4;const js=16209,H4=16191;var q4=function(t,r){let n,o,a,l,c,h,f,p,w,_,d,b,S,k,y,R,I,P,Y,K,ne,X,M,J;const E=t.state;n=t.next_in,M=t.input,o=n+(t.avail_in-5),a=t.next_out,J=t.output,l=a-(r-t.avail_out),c=a+(t.avail_out-257),h=E.dmax,f=E.wsize,p=E.whave,w=E.wnext,_=E.window,d=E.hold,b=E.bits,S=E.lencode,k=E.distcode,y=(1<<E.lenbits)-1,R=(1<<E.distbits)-1;e:do{b<15&&(d+=M[n++]<<b,b+=8,d+=M[n++]<<b,b+=8),I=S[d&y];t:for(;;){if(P=I>>>24,d>>>=P,b-=P,P=I>>>16&255,P===0)J[a++]=I&65535;else if(P&16){Y=I&65535,P&=15,P&&(b<P&&(d+=M[n++]<<b,b+=8),Y+=d&(1<<P)-1,d>>>=P,b-=P),b<15&&(d+=M[n++]<<b,b+=8,d+=M[n++]<<b,b+=8),I=k[d&R];r:for(;;){if(P=I>>>24,d>>>=P,b-=P,P=I>>>16&255,P&16){if(K=I&65535,P&=15,b<P&&(d+=M[n++]<<b,b+=8,b<P&&(d+=M[n++]<<b,b+=8)),K+=d&(1<<P)-1,K>h){t.msg="invalid distance too far back",E.mode=js;break e}if(d>>>=P,b-=P,P=a-l,K>P){if(P=K-P,P>p&&E.sane){t.msg="invalid distance too far back",E.mode=js;break e}if(ne=0,X=_,w===0){if(ne+=f-P,P<Y){Y-=P;do J[a++]=_[ne++];while(--P);ne=a-K,X=J}}else if(w<P){if(ne+=f+w-P,P-=w,P<Y){Y-=P;do J[a++]=_[ne++];while(--P);if(ne=0,w<Y){P=w,Y-=P;do J[a++]=_[ne++];while(--P);ne=a-K,X=J}}}else if(ne+=w-P,P<Y){Y-=P;do J[a++]=_[ne++];while(--P);ne=a-K,X=J}for(;Y>2;)J[a++]=X[ne++],J[a++]=X[ne++],J[a++]=X[ne++],Y-=3;Y&&(J[a++]=X[ne++],Y>1&&(J[a++]=X[ne++]))}else{ne=a-K;do J[a++]=J[ne++],J[a++]=J[ne++],J[a++]=J[ne++],Y-=3;while(Y>2);Y&&(J[a++]=J[ne++],Y>1&&(J[a++]=J[ne++]))}}else if(P&64){t.msg="invalid distance code",E.mode=js;break e}else{I=k[(I&65535)+(d&(1<<P)-1)];continue r}break}}else if(P&64)if(P&32){E.mode=H4;break e}else{t.msg="invalid literal/length code",E.mode=js;break e}else{I=S[(I&65535)+(d&(1<<P)-1)];continue t}break}}while(n<o&&a<c);Y=b>>3,n-=Y,b-=Y<<3,d&=(1<<b)-1,t.next_in=n,t.next_out=a,t.avail_in=n<o?5+(o-n):5-(n-o),t.avail_out=a<c?257+(c-a):257-(a-c),E.hold=d,E.bits=b};const $o=15,p1=852,m1=592,g1=0,Hl=1,v1=2,$4=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),V4=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),W4=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),G4=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Y4=(e,t,r,n,o,a,l,c)=>{const h=c.bits;let f=0,p=0,w=0,_=0,d=0,b=0,S=0,k=0,y=0,R=0,I,P,Y,K,ne,X=null,M;const J=new Uint16Array($o+1),E=new Uint16Array($o+1);let F=null,G,$,oe;for(f=0;f<=$o;f++)J[f]=0;for(p=0;p<n;p++)J[t[r+p]]++;for(d=h,_=$o;_>=1&&J[_]===0;_--);if(d>_&&(d=_),_===0)return o[a++]=1<<24|64<<16|0,o[a++]=1<<24|64<<16|0,c.bits=1,0;for(w=1;w<_&&J[w]===0;w++);for(d<w&&(d=w),k=1,f=1;f<=$o;f++)if(k<<=1,k-=J[f],k<0)return-1;if(k>0&&(e===g1||_!==1))return-1;for(E[1]=0,f=1;f<$o;f++)E[f+1]=E[f]+J[f];for(p=0;p<n;p++)t[r+p]!==0&&(l[E[t[r+p]]++]=p);if(e===g1?(X=F=l,M=20):e===Hl?(X=$4,F=V4,M=257):(X=W4,F=G4,M=0),R=0,p=0,f=w,ne=a,b=d,S=0,Y=-1,y=1<<d,K=y-1,e===Hl&&y>p1||e===v1&&y>m1)return 1;for(;;){G=f-S,l[p]+1<M?($=0,oe=l[p]):l[p]>=M?($=F[l[p]-M],oe=X[l[p]-M]):($=96,oe=0),I=1<<f-S,P=1<<b,w=P;do P-=I,o[ne+(R>>S)+P]=G<<24|$<<16|oe|0;while(P!==0);for(I=1<<f-1;R&I;)I>>=1;if(I!==0?(R&=I-1,R+=I):R=0,p++,--J[f]===0){if(f===_)break;f=t[r+l[p]]}if(f>d&&(R&K)!==Y){for(S===0&&(S=d),ne+=w,b=f-S,k=1<<b;b+S<_&&(k-=J[b+S],!(k<=0));)b++,k<<=1;if(y+=1<<b,e===Hl&&y>p1||e===v1&&y>m1)return 1;Y=R&K,o[Y]=d<<24|b<<16|ne-a|0}}return R!==0&&(o[ne+R]=f-S<<24|64<<16|0),c.bits=d,0};var Da=Y4;const X4=0,G0=1,Y0=2,{Z_FINISH:b1,Z_BLOCK:Z4,Z_TREES:Rs,Z_OK:No,Z_STREAM_END:J4,Z_NEED_DICT:Q4,Z_STREAM_ERROR:yn,Z_DATA_ERROR:X0,Z_MEM_ERROR:Z0,Z_BUF_ERROR:K4,Z_DEFLATED:x1}=$0,gl=16180,w1=16181,y1=16182,_1=16183,S1=16184,C1=16185,A1=16186,k1=16187,L1=16188,N1=16189,rl=16190,mi=16191,ql=16192,E1=16193,$l=16194,T1=16195,I1=16196,P1=16197,j1=16198,Os=16199,Ms=16200,R1=16201,O1=16202,M1=16203,F1=16204,D1=16205,Vl=16206,z1=16207,B1=16208,$t=16209,J0=16210,Q0=16211,e6=852,t6=592,r6=15,n6=r6,U1=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function i6(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const To=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<gl||t.mode>Q0?1:0},K0=e=>{if(To(e))return yn;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=gl,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(e6),t.distcode=t.distdyn=new Int32Array(t6),t.sane=1,t.back=-1,No},e2=e=>{if(To(e))return yn;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,K0(e)},t2=(e,t)=>{let r;if(To(e))return yn;const n=e.state;return t<0?(r=0,t=-t):(r=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?yn:(n.window!==null&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,e2(e))},r2=(e,t)=>{if(!e)return yn;const r=new i6;e.state=r,r.strm=e,r.window=null,r.mode=gl;const n=t2(e,t);return n!==No&&(e.state=null),n},o6=e=>r2(e,n6);let H1=!0,Wl,Gl;const a6=e=>{if(H1){Wl=new Int32Array(512),Gl=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Da(G0,e.lens,0,288,Wl,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Da(Y0,e.lens,0,32,Gl,0,e.work,{bits:5}),H1=!1}e.lencode=Wl,e.lenbits=9,e.distcode=Gl,e.distbits=5},n2=(e,t,r,n)=>{let o;const a=e.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),n>=a.wsize?(a.window.set(t.subarray(r-a.wsize,r),0),a.wnext=0,a.whave=a.wsize):(o=a.wsize-a.wnext,o>n&&(o=n),a.window.set(t.subarray(r-n,r-n+o),a.wnext),n-=o,n?(a.window.set(t.subarray(r-n,r),0),a.wnext=n,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0},s6=(e,t)=>{let r,n,o,a,l,c,h,f,p,w,_,d,b,S,k=0,y,R,I,P,Y,K,ne,X;const M=new Uint8Array(4);let J,E;const F=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(To(e)||!e.output||!e.input&&e.avail_in!==0)return yn;r=e.state,r.mode===mi&&(r.mode=ql),l=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,w=c,_=h,X=No;e:for(;;)switch(r.mode){case gl:if(r.wrap===0){r.mode=ql;break}for(;p<16;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(r.wrap&2&&f===35615){r.wbits===0&&(r.wbits=15),r.check=0,M[0]=f&255,M[1]=f>>>8&255,r.check=Wn(r.check,M,2,0),f=0,p=0,r.mode=w1;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=$t;break}if((f&15)!==x1){e.msg="unknown compression method",r.mode=$t;break}if(f>>>=4,p-=4,ne=(f&15)+8,r.wbits===0&&(r.wbits=ne),ne>15||ne>r.wbits){e.msg="invalid window size",r.mode=$t;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=f&512?N1:mi,f=0,p=0;break;case w1:for(;p<16;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(r.flags=f,(r.flags&255)!==x1){e.msg="unknown compression method",r.mode=$t;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=$t;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,r.check=Wn(r.check,M,2,0)),f=0,p=0,r.mode=y1;case y1:for(;p<32;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}r.head&&(r.head.time=f),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,M[2]=f>>>16&255,M[3]=f>>>24&255,r.check=Wn(r.check,M,4,0)),f=0,p=0,r.mode=_1;case _1:for(;p<16;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,r.check=Wn(r.check,M,2,0)),f=0,p=0,r.mode=S1;case S1:if(r.flags&1024){for(;p<16;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&r.wrap&4&&(M[0]=f&255,M[1]=f>>>8&255,r.check=Wn(r.check,M,2,0)),f=0,p=0}else r.head&&(r.head.extra=null);r.mode=C1;case C1:if(r.flags&1024&&(d=r.length,d>c&&(d=c),d&&(r.head&&(ne=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(n.subarray(a,a+d),ne)),r.flags&512&&r.wrap&4&&(r.check=Wn(r.check,n,d,a)),c-=d,a+=d,r.length-=d),r.length))break e;r.length=0,r.mode=A1;case A1:if(r.flags&2048){if(c===0)break e;d=0;do ne=n[a+d++],r.head&&ne&&r.length<65536&&(r.head.name+=String.fromCharCode(ne));while(ne&&d<c);if(r.flags&512&&r.wrap&4&&(r.check=Wn(r.check,n,d,a)),c-=d,a+=d,ne)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=k1;case k1:if(r.flags&4096){if(c===0)break e;d=0;do ne=n[a+d++],r.head&&ne&&r.length<65536&&(r.head.comment+=String.fromCharCode(ne));while(ne&&d<c);if(r.flags&512&&r.wrap&4&&(r.check=Wn(r.check,n,d,a)),c-=d,a+=d,ne)break e}else r.head&&(r.head.comment=null);r.mode=L1;case L1:if(r.flags&512){for(;p<16;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(r.wrap&4&&f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=$t;break}f=0,p=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=mi;break;case N1:for(;p<32;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}e.adler=r.check=U1(f),f=0,p=0,r.mode=rl;case rl:if(r.havedict===0)return e.next_out=l,e.avail_out=h,e.next_in=a,e.avail_in=c,r.hold=f,r.bits=p,Q4;e.adler=r.check=1,r.mode=mi;case mi:if(t===Z4||t===Rs)break e;case ql:if(r.last){f>>>=p&7,p-=p&7,r.mode=Vl;break}for(;p<3;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}switch(r.last=f&1,f>>>=1,p-=1,f&3){case 0:r.mode=E1;break;case 1:if(a6(r),r.mode=Os,t===Rs){f>>>=2,p-=2;break e}break;case 2:r.mode=I1;break;case 3:e.msg="invalid block type",r.mode=$t}f>>>=2,p-=2;break;case E1:for(f>>>=p&7,p-=p&7;p<32;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=$t;break}if(r.length=f&65535,f=0,p=0,r.mode=$l,t===Rs)break e;case $l:r.mode=T1;case T1:if(d=r.length,d){if(d>c&&(d=c),d>h&&(d=h),d===0)break e;o.set(n.subarray(a,a+d),l),c-=d,a+=d,h-=d,l+=d,r.length-=d;break}r.mode=mi;break;case I1:for(;p<14;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(r.nlen=(f&31)+257,f>>>=5,p-=5,r.ndist=(f&31)+1,f>>>=5,p-=5,r.ncode=(f&15)+4,f>>>=4,p-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=$t;break}r.have=0,r.mode=P1;case P1:for(;r.have<r.ncode;){for(;p<3;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}r.lens[F[r.have++]]=f&7,f>>>=3,p-=3}for(;r.have<19;)r.lens[F[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,J={bits:r.lenbits},X=Da(X4,r.lens,0,19,r.lencode,0,r.work,J),r.lenbits=J.bits,X){e.msg="invalid code lengths set",r.mode=$t;break}r.have=0,r.mode=j1;case j1:for(;r.have<r.nlen+r.ndist;){for(;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,R=k>>>16&255,I=k&65535,!(y<=p);){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(I<16)f>>>=y,p-=y,r.lens[r.have++]=I;else{if(I===16){for(E=y+2;p<E;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(f>>>=y,p-=y,r.have===0){e.msg="invalid bit length repeat",r.mode=$t;break}ne=r.lens[r.have-1],d=3+(f&3),f>>>=2,p-=2}else if(I===17){for(E=y+3;p<E;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}f>>>=y,p-=y,ne=0,d=3+(f&7),f>>>=3,p-=3}else{for(E=y+7;p<E;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}f>>>=y,p-=y,ne=0,d=11+(f&127),f>>>=7,p-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=$t;break}for(;d--;)r.lens[r.have++]=ne}}if(r.mode===$t)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=$t;break}if(r.lenbits=9,J={bits:r.lenbits},X=Da(G0,r.lens,0,r.nlen,r.lencode,0,r.work,J),r.lenbits=J.bits,X){e.msg="invalid literal/lengths set",r.mode=$t;break}if(r.distbits=6,r.distcode=r.distdyn,J={bits:r.distbits},X=Da(Y0,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,J),r.distbits=J.bits,X){e.msg="invalid distances set",r.mode=$t;break}if(r.mode=Os,t===Rs)break e;case Os:r.mode=Ms;case Ms:if(c>=6&&h>=258){e.next_out=l,e.avail_out=h,e.next_in=a,e.avail_in=c,r.hold=f,r.bits=p,q4(e,_),l=e.next_out,o=e.output,h=e.avail_out,a=e.next_in,n=e.input,c=e.avail_in,f=r.hold,p=r.bits,r.mode===mi&&(r.back=-1);break}for(r.back=0;k=r.lencode[f&(1<<r.lenbits)-1],y=k>>>24,R=k>>>16&255,I=k&65535,!(y<=p);){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(R&&!(R&240)){for(P=y,Y=R,K=I;k=r.lencode[K+((f&(1<<P+Y)-1)>>P)],y=k>>>24,R=k>>>16&255,I=k&65535,!(P+y<=p);){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}f>>>=P,p-=P,r.back+=P}if(f>>>=y,p-=y,r.back+=y,r.length=I,R===0){r.mode=D1;break}if(R&32){r.back=-1,r.mode=mi;break}if(R&64){e.msg="invalid literal/length code",r.mode=$t;break}r.extra=R&15,r.mode=R1;case R1:if(r.extra){for(E=r.extra;p<E;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=O1;case O1:for(;k=r.distcode[f&(1<<r.distbits)-1],y=k>>>24,R=k>>>16&255,I=k&65535,!(y<=p);){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(!(R&240)){for(P=y,Y=R,K=I;k=r.distcode[K+((f&(1<<P+Y)-1)>>P)],y=k>>>24,R=k>>>16&255,I=k&65535,!(P+y<=p);){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}f>>>=P,p-=P,r.back+=P}if(f>>>=y,p-=y,r.back+=y,R&64){e.msg="invalid distance code",r.mode=$t;break}r.offset=I,r.extra=R&15,r.mode=M1;case M1:if(r.extra){for(E=r.extra;p<E;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,p-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=$t;break}r.mode=F1;case F1:if(h===0)break e;if(d=_-h,r.offset>d){if(d=r.offset-d,d>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=$t;break}d>r.wnext?(d-=r.wnext,b=r.wsize-d):b=r.wnext-d,d>r.length&&(d=r.length),S=r.window}else S=o,b=l-r.offset,d=r.length;d>h&&(d=h),h-=d,r.length-=d;do o[l++]=S[b++];while(--d);r.length===0&&(r.mode=Ms);break;case D1:if(h===0)break e;o[l++]=r.length,h--,r.mode=Ms;break;case Vl:if(r.wrap){for(;p<32;){if(c===0)break e;c--,f|=n[a++]<<p,p+=8}if(_-=h,e.total_out+=_,r.total+=_,r.wrap&4&&_&&(e.adler=r.check=r.flags?Wn(r.check,o,_,l-_):Sc(r.check,o,_,l-_)),_=h,r.wrap&4&&(r.flags?f:U1(f))!==r.check){e.msg="incorrect data check",r.mode=$t;break}f=0,p=0}r.mode=z1;case z1:if(r.wrap&&r.flags){for(;p<32;){if(c===0)break e;c--,f+=n[a++]<<p,p+=8}if(r.wrap&4&&f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=$t;break}f=0,p=0}r.mode=B1;case B1:X=J4;break e;case $t:X=X0;break e;case J0:return Z0;case Q0:default:return yn}return e.next_out=l,e.avail_out=h,e.next_in=a,e.avail_in=c,r.hold=f,r.bits=p,(r.wsize||_!==e.avail_out&&r.mode<$t&&(r.mode<Vl||t!==b1))&&n2(e,e.output,e.next_out,_-e.avail_out),w-=e.avail_in,_-=e.avail_out,e.total_in+=w,e.total_out+=_,r.total+=_,r.wrap&4&&_&&(e.adler=r.check=r.flags?Wn(r.check,o,_,e.next_out-_):Sc(r.check,o,_,e.next_out-_)),e.data_type=r.bits+(r.last?64:0)+(r.mode===mi?128:0)+(r.mode===Os||r.mode===$l?256:0),(w===0&&_===0||t===b1)&&X===No&&(X=K4),X},l6=e=>{if(To(e))return yn;let t=e.state;return t.window&&(t.window=null),e.state=null,No},c6=(e,t)=>{if(To(e))return yn;const r=e.state;return r.wrap&2?(r.head=t,t.done=!1,No):yn},u6=(e,t)=>{const r=t.length;let n,o,a;return To(e)||(n=e.state,n.wrap!==0&&n.mode!==rl)?yn:n.mode===rl&&(o=1,o=Sc(o,t,r,0),o!==n.check)?X0:(a=n2(e,t,r,r),a?(n.mode=J0,Z0):(n.havedict=1,No))};var h6=e2,f6=t2,d6=K0,p6=o6,m6=r2,g6=s6,v6=l6,b6=c6,x6=u6,w6="pako inflate (from Nodeca project)",gi={inflateReset:h6,inflateReset2:f6,inflateResetKeep:d6,inflateInit:p6,inflateInit2:m6,inflate:g6,inflateEnd:v6,inflateGetHeader:b6,inflateSetDictionary:x6,inflateInfo:w6};function y6(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var _6=y6;const i2=Object.prototype.toString,{Z_NO_FLUSH:S6,Z_FINISH:C6,Z_OK:qa,Z_STREAM_END:Yl,Z_NEED_DICT:Xl,Z_STREAM_ERROR:A6,Z_DATA_ERROR:q1,Z_MEM_ERROR:k6}=$0;function Xa(e){this.options=V0.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new U4,this.strm.avail_out=0;let r=gi.inflateInit2(this.strm,t.windowBits);if(r!==qa)throw new Error(Cc[r]);if(this.header=new _6,gi.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=Ac.string2buf(t.dictionary):i2.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=gi.inflateSetDictionary(this.strm,t.dictionary),r!==qa)))throw new Error(Cc[r])}Xa.prototype.push=function(e,t){const r=this.strm,n=this.options.chunkSize,o=this.options.dictionary;let a,l,c;if(this.ended)return!1;for(t===~~t?l=t:l=t===!0?C6:S6,i2.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(n),r.next_out=0,r.avail_out=n),a=gi.inflate(r,l),a===Xl&&o&&(a=gi.inflateSetDictionary(r,o),a===qa?a=gi.inflate(r,l):a===q1&&(a=Xl));r.avail_in>0&&a===Yl&&r.state.wrap>0&&e[r.next_in]!==0;)gi.inflateReset(r),a=gi.inflate(r,l);switch(a){case A6:case q1:case Xl:case k6:return this.onEnd(a),this.ended=!0,!1}if(c=r.avail_out,r.next_out&&(r.avail_out===0||a===Yl))if(this.options.to==="string"){let h=Ac.utf8border(r.output,r.next_out),f=r.next_out-h,p=Ac.buf2string(r.output,h);r.next_out=f,r.avail_out=n-f,f&&r.output.set(r.output.subarray(h,h+f),0),this.onData(p)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(a===qa&&c===0)){if(a===Yl)return a=gi.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Xa.prototype.onData=function(e){this.chunks.push(e)};Xa.prototype.onEnd=function(e){e===qa&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=V0.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function L6(e,t){const r=new Xa(t);if(r.push(e),r.err)throw r.msg||Cc[r.err];return r.result}var N6=Xa,E6=L6,T6={Inflate:N6,inflate:E6};const{Inflate:I6,inflate:P6}=T6;var $1=I6,j6=P6;const o2=[];for(let e=0;e<256;e++){let t=e;for(let r=0;r<8;r++)t&1?t=3988292384^t>>>1:t=t>>>1;o2[e]=t}const V1=4294967295;function R6(e,t,r){let n=e;for(let o=0;o<r;o++)n=o2[(n^t[o])&255]^n>>>8;return n}function O6(e,t){return(R6(V1,e,t)^V1)>>>0}function W1(e,t,r){const n=e.readUint32(),o=O6(new Uint8Array(e.buffer,e.byteOffset+e.offset-t-4,t),t);if(o!==n)throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${o}`)}function a2(e,t,r){for(let n=0;n<r;n++)t[n]=e[n]}function s2(e,t,r,n){let o=0;for(;o<n;o++)t[o]=e[o];for(;o<r;o++)t[o]=e[o]+t[o-n]&255}function l2(e,t,r,n){let o=0;if(r.length===0)for(;o<n;o++)t[o]=e[o];else for(;o<n;o++)t[o]=e[o]+r[o]&255}function c2(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+(t[a-o]>>1)&255}else{for(;a<o;a++)t[a]=e[a]+(r[a]>>1)&255;for(;a<n;a++)t[a]=e[a]+(t[a-o]+r[a]>>1)&255}}function u2(e,t,r,n,o){let a=0;if(r.length===0){for(;a<o;a++)t[a]=e[a];for(;a<n;a++)t[a]=e[a]+t[a-o]&255}else{for(;a<o;a++)t[a]=e[a]+r[a]&255;for(;a<n;a++)t[a]=e[a]+M6(t[a-o],r[a],r[a-o])&255}}function M6(e,t,r){const n=e+t-r,o=Math.abs(n-e),a=Math.abs(n-t),l=Math.abs(n-r);return o<=a&&o<=l?e:a<=l?t:r}function F6(e,t,r,n,o,a){switch(e){case 0:a2(t,r,o);break;case 1:s2(t,r,o,a);break;case 2:l2(t,r,n,o);break;case 3:c2(t,r,n,o,a);break;case 4:u2(t,r,n,o,a);break;default:throw new Error(`Unsupported filter: ${e}`)}}const D6=new Uint16Array([255]),z6=new Uint8Array(D6.buffer),B6=z6[0]===255;function U6(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,l=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],c=Math.ceil(a/8)*o,h=new Uint8Array(n*r*c);let f=0;for(let p=0;p<7;p++){const w=l[p],_=Math.ceil((r-w.x)/w.xStep),d=Math.ceil((n-w.y)/w.yStep);if(_<=0||d<=0)continue;const b=_*c,S=new Uint8Array(b);for(let k=0;k<d;k++){const y=t[f++],R=t.subarray(f,f+b);f+=b;const I=new Uint8Array(b);F6(y,R,I,S,b,c),S.set(I);for(let P=0;P<_;P++){const Y=w.x+P*w.xStep,K=w.y+k*w.yStep;if(!(Y>=r||K>=n))for(let ne=0;ne<c;ne++)h[(K*r+Y)*c+ne]=I[P*c+ne]}}}if(a===16){const p=new Uint16Array(h.buffer);if(B6)for(let w=0;w<p.length;w++)p[w]=H6(p[w]);return p}else return h}function H6(e){return(e&255)<<8|e>>8&255}const q6=new Uint16Array([255]),$6=new Uint8Array(q6.buffer),V6=$6[0]===255,W6=new Uint8Array(0);function G1(e){const{data:t,width:r,height:n,channels:o,depth:a}=e,l=Math.ceil(a/8)*o,c=Math.ceil(a/8*o*r),h=new Uint8Array(n*c);let f=W6,p=0,w,_;for(let d=0;d<n;d++){switch(w=t.subarray(p+1,p+1+c),_=h.subarray(d*c,(d+1)*c),t[p]){case 0:a2(w,_,c);break;case 1:s2(w,_,c,l);break;case 2:l2(w,_,f,c);break;case 3:c2(w,_,f,c,l);break;case 4:u2(w,_,f,c,l);break;default:throw new Error(`Unsupported filter: ${t[p]}`)}f=_,p+=c+1}if(a===16){const d=new Uint16Array(h.buffer);if(V6)for(let b=0;b<d.length;b++)d[b]=G6(d[b]);return d}else return h}function G6(e){return(e&255)<<8|e>>8&255}const Ws=Uint8Array.of(137,80,78,71,13,10,26,10);function Y1(e){if(!Y6(e.readBytes(Ws.length)))throw new Error("wrong PNG signature")}function Y6(e){if(e.length<Ws.length)return!1;for(let t=0;t<Ws.length;t++)if(e[t]!==Ws[t])return!1;return!0}const X6="tEXt",Z6=0,h2=new TextDecoder("latin1");function J6(e){if(K6(e),e.length===0||e.length>79)throw new Error("keyword length must be between 1 and 79")}const Q6=/^[\u0000-\u00FF]*$/;function K6(e){if(!Q6.test(e))throw new Error("invalid latin1 text")}function ev(e,t,r){const n=f2(t);e[n]=tv(t,r-n.length-1)}function f2(e){for(e.mark();e.readByte()!==Z6;);const t=e.offset;e.reset();const r=h2.decode(e.readBytes(t-e.offset-1));return e.skip(1),J6(r),r}function tv(e,t){return h2.decode(e.readBytes(t))}const ln={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},Zl={UNKNOWN:-1,DEFLATE:0},X1={UNKNOWN:-1,ADAPTIVE:0},Jl={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Fs={NONE:0,BACKGROUND:1,PREVIOUS:2},Ql={SOURCE:0,OVER:1};class rv extends Jc{constructor(r,n={}){super(r);Ie(this,"_checkCrc");Ie(this,"_inflator");Ie(this,"_png");Ie(this,"_apng");Ie(this,"_end");Ie(this,"_hasPalette");Ie(this,"_palette");Ie(this,"_hasTransparency");Ie(this,"_transparency");Ie(this,"_compressionMethod");Ie(this,"_filterMethod");Ie(this,"_interlaceMethod");Ie(this,"_colorType");Ie(this,"_isAnimated");Ie(this,"_numberOfFrames");Ie(this,"_numberOfPlays");Ie(this,"_frames");Ie(this,"_writingDataChunks");const{checkCrc:o=!1}=n;this._checkCrc=o,this._inflator=new $1,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=Zl.UNKNOWN,this._filterMethod=X1.UNKNOWN,this._interlaceMethod=Jl.UNKNOWN,this._colorType=ln.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(Y1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeChunk(r,n)}return this.decodeImage(),this._png}decodeApng(){for(Y1(this);!this._end;){const r=this.readUint32(),n=this.readChars(4);this.decodeApngChunk(r,n)}return this.decodeApngImage(),this._apng}decodeChunk(r,n){const o=this.offset;switch(n){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case X6:ev(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?W1(this,r+4,n):this.skip(4)}decodeApngChunk(r,n){const o=this.offset;switch(n!=="fdAT"&&n!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),n){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,n),this.offset=o+r;break}if(this.offset-o!==r)throw new Error(`Length mismatch while decoding chunk ${n}`);this._checkCrc?W1(this,r+4,n):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=nv(this.readUint8());const n=this.readUint8();this._colorType=n;let o;switch(n){case ln.GREYSCALE:o=1;break;case ln.TRUECOLOUR:o=3;break;case ln.INDEXED_COLOUR:o=1;break;case ln.GREYSCALE_ALPHA:o=2;break;case ln.TRUECOLOUR_ALPHA:o=4;break;case ln.UNKNOWN:default:throw new Error(`Unknown color type: ${n}`)}if(this._png.channels=o,this._compressionMethod=this.readUint8(),this._compressionMethod!==Zl.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const n=r/3;this._hasPalette=!0;const o=[];this._palette=o;for(let a=0;a<n;a++)o.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const n=r,o=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let n=r,o=this.offset+this.byteOffset;if(o+=4,n-=4,this._inflator.push(new Uint8Array(this.buffer,o,n)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case ln.GREYSCALE:case ln.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let n=0;n<r/2;n++)this._transparency[n]=this.readUint16();break}case ln.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let n=0;for(;n<r;n++){const o=this.readByte();this._palette[n].push(o)}for(;n<this._palette.length;n++)this._palette[n].push(255);break}case ln.UNKNOWN:case ln.GREYSCALE_ALPHA:case ln.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const n=f2(this),o=this.readUint8();if(o!==Zl.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${o}`);const a=this.readBytes(r-n.length-2);this._png.iccEmbeddedProfile={name:n,profile:j6(a)}}decodepHYs(){const r=this.readUint32(),n=this.readUint32(),o=this.readByte();this._png.resolution={x:r,y:n,unit:o}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const n={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},o=this._frames.at(r);if(o){if(o.data=G1({data:o.data,width:o.width,height:o.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||o.xOffset===0&&o.yOffset===0&&o.width===this._png.width&&o.height===this._png.height)n.data=o.data;else{const a=this._apng.frames.at(r-1);this.disposeFrame(o,a,n),this.addFrameDataToCanvas(n,o)}this._apng.frames.push(n)}}return this._apng}disposeFrame(r,n,o){switch(r.disposeOp){case Fs.NONE:break;case Fs.BACKGROUND:for(let a=0;a<this._png.height;a++)for(let l=0;l<this._png.width;l++){const c=(a*r.width+l)*this._png.channels;for(let h=0;h<this._png.channels;h++)o.data[c+h]=0}break;case Fs.PREVIOUS:o.data.set(n.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,n){const o=1<<this._png.depth,a=(l,c)=>{const h=((l+n.yOffset)*this._png.width+n.xOffset+c)*this._png.channels,f=(l*n.width+c)*this._png.channels;return{index:h,frameIndex:f}};switch(n.blendOp){case Ql.SOURCE:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:h,frameIndex:f}=a(l,c);for(let p=0;p<this._png.channels;p++)r.data[h+p]=n.data[f+p]}break;case Ql.OVER:for(let l=0;l<n.height;l++)for(let c=0;c<n.width;c++){const{index:h,frameIndex:f}=a(l,c);for(let p=0;p<this._png.channels;p++){const w=n.data[f+this._png.channels-1]/o,_=p%(this._png.channels-1)===0?1:n.data[f+p],d=Math.floor(w*_+(1-w)*r.data[h+p]);r.data[h+p]+=d}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var n;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((n=this._frames)==null?void 0:n.at(0)).data:this._inflator.result;if(this._filterMethod!==X1.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===Jl.NO_INTERLACE)this._png.data=G1({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===Jl.ADAM7)this._png.data=U6({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,n=this._frames.at(-1);n?n.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Fs.NONE,blendOp:Ql.SOURCE,data:r}),this._inflator=new $1,this._writingDataChunks=!1}}function nv(e){if(e!==1&&e!==2&&e!==4&&e!==8&&e!==16)throw new Error(`invalid bit depth: ${e}`);return e}var Z1;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.METRE=1]="METRE"})(Z1||(Z1={}));function iv(e,t){return new rv(e,t).decode()}var nt=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function Kl(){nt.console&&typeof nt.console.log=="function"&&nt.console.log.apply(nt.console,arguments)}var Ot={log:Kl,warn:function(e){nt.console&&(typeof nt.console.warn=="function"?nt.console.warn.apply(nt.console,arguments):Kl.call(null,arguments))},error:function(e){nt.console&&(typeof nt.console.error=="function"?nt.console.error.apply(nt.console,arguments):Kl(e))}};function ec(e,t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){Co(n.response,t,r)},n.onerror=function(){Ot.error("could not download file")},n.send()}function J1(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Ds(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var Co=nt.saveAs||((typeof window>"u"?"undefined":Pt(window))!=="object"||window!==nt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(e,t,r){var n=nt.URL||nt.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin!==location.origin?J1(o.href)?ec(e,t,r):Ds(o,o.target="_blank"):Ds(o)):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){Ds(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e=="string")if(J1(e))ec(e,t,r);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){Ds(n)})}else navigator.msSaveOrOpenBlob(function(o,a){return a===void 0?a={autoBom:!1}:Pt(a)!=="object"&&(Ot.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}(e,r),t)}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return ec(e,t,r);var o=e.type==="application/octet-stream",a=/constructor/i.test(nt.HTMLElement)||nt.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&a)&&(typeof FileReader>"u"?"undefined":Pt(FileReader))==="object"){var c=new FileReader;c.onloadend=function(){var p=c.result;p=l?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=p:location=p,n=null},c.readAsDataURL(e)}else{var h=nt.URL||nt.webkitURL,f=h.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout(function(){h.revokeObjectURL(f)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function d2(e){var t;e=e||"",this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[e=(e=e.replace(/ /g,"")).toLowerCase()]||e;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(c){return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(c){return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(c){return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]}}],n=0;n<r.length;n++){var o=r[n].re,a=r[n].process,l=o.exec(e);l&&(t=a(l),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var c=this.r.toString(16),h=this.g.toString(16),f=this.b.toString(16);return c.length==1&&(c="0"+c),h.length==1&&(h="0"+h),f.length==1&&(f="0"+f),"#"+c+h+f}}var Gs=nt.atob.bind(nt),Q1=nt.btoa.bind(nt);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function tc(e,t){var r=e[0],n=e[1],o=e[2],a=e[3];r=Pr(r,n,o,a,t[0],7,-680876936),a=Pr(a,r,n,o,t[1],12,-389564586),o=Pr(o,a,r,n,t[2],17,606105819),n=Pr(n,o,a,r,t[3],22,-1044525330),r=Pr(r,n,o,a,t[4],7,-176418897),a=Pr(a,r,n,o,t[5],12,1200080426),o=Pr(o,a,r,n,t[6],17,-1473231341),n=Pr(n,o,a,r,t[7],22,-45705983),r=Pr(r,n,o,a,t[8],7,1770035416),a=Pr(a,r,n,o,t[9],12,-1958414417),o=Pr(o,a,r,n,t[10],17,-42063),n=Pr(n,o,a,r,t[11],22,-1990404162),r=Pr(r,n,o,a,t[12],7,1804603682),a=Pr(a,r,n,o,t[13],12,-40341101),o=Pr(o,a,r,n,t[14],17,-1502002290),r=jr(r,n=Pr(n,o,a,r,t[15],22,1236535329),o,a,t[1],5,-165796510),a=jr(a,r,n,o,t[6],9,-1069501632),o=jr(o,a,r,n,t[11],14,643717713),n=jr(n,o,a,r,t[0],20,-373897302),r=jr(r,n,o,a,t[5],5,-701558691),a=jr(a,r,n,o,t[10],9,38016083),o=jr(o,a,r,n,t[15],14,-660478335),n=jr(n,o,a,r,t[4],20,-405537848),r=jr(r,n,o,a,t[9],5,568446438),a=jr(a,r,n,o,t[14],9,-1019803690),o=jr(o,a,r,n,t[3],14,-187363961),n=jr(n,o,a,r,t[8],20,1163531501),r=jr(r,n,o,a,t[13],5,-1444681467),a=jr(a,r,n,o,t[2],9,-51403784),o=jr(o,a,r,n,t[7],14,1735328473),r=Rr(r,n=jr(n,o,a,r,t[12],20,-1926607734),o,a,t[5],4,-378558),a=Rr(a,r,n,o,t[8],11,-2022574463),o=Rr(o,a,r,n,t[11],16,1839030562),n=Rr(n,o,a,r,t[14],23,-35309556),r=Rr(r,n,o,a,t[1],4,-1530992060),a=Rr(a,r,n,o,t[4],11,1272893353),o=Rr(o,a,r,n,t[7],16,-155497632),n=Rr(n,o,a,r,t[10],23,-1094730640),r=Rr(r,n,o,a,t[13],4,681279174),a=Rr(a,r,n,o,t[0],11,-358537222),o=Rr(o,a,r,n,t[3],16,-722521979),n=Rr(n,o,a,r,t[6],23,76029189),r=Rr(r,n,o,a,t[9],4,-640364487),a=Rr(a,r,n,o,t[12],11,-421815835),o=Rr(o,a,r,n,t[15],16,530742520),r=Or(r,n=Rr(n,o,a,r,t[2],23,-995338651),o,a,t[0],6,-198630844),a=Or(a,r,n,o,t[7],10,1126891415),o=Or(o,a,r,n,t[14],15,-1416354905),n=Or(n,o,a,r,t[5],21,-57434055),r=Or(r,n,o,a,t[12],6,1700485571),a=Or(a,r,n,o,t[3],10,-1894986606),o=Or(o,a,r,n,t[10],15,-1051523),n=Or(n,o,a,r,t[1],21,-2054922799),r=Or(r,n,o,a,t[8],6,1873313359),a=Or(a,r,n,o,t[15],10,-30611744),o=Or(o,a,r,n,t[6],15,-1560198380),n=Or(n,o,a,r,t[13],21,1309151649),r=Or(r,n,o,a,t[4],6,-145523070),a=Or(a,r,n,o,t[11],10,-1120210379),o=Or(o,a,r,n,t[2],15,718787259),n=Or(n,o,a,r,t[9],21,-343485551),e[0]=Yi(r,e[0]),e[1]=Yi(n,e[1]),e[2]=Yi(o,e[2]),e[3]=Yi(a,e[3])}function vl(e,t,r,n,o,a){return t=Yi(Yi(t,e),Yi(n,a)),Yi(t<<o|t>>>32-o,r)}function Pr(e,t,r,n,o,a,l){return vl(t&r|~t&n,e,t,o,a,l)}function jr(e,t,r,n,o,a,l){return vl(t&n|r&~n,e,t,o,a,l)}function Rr(e,t,r,n,o,a,l){return vl(t^r^n,e,t,o,a,l)}function Or(e,t,r,n,o,a,l){return vl(r^(t|~n),e,t,o,a,l)}function p2(e){var t,r=e.length,n=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)tc(n,ov(e.substring(t-64,t)));e=e.substring(t-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(o[t>>2]|=128<<(t%4<<3),t>55)for(tc(n,o),t=0;t<16;t++)o[t]=0;return o[14]=8*r,tc(n,o),n}function ov(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}var K1="0123456789abcdef".split("");function av(e){for(var t="",r=0;r<4;r++)t+=K1[e>>8*r+4&15]+K1[e>>8*r&15];return t}function sv(e){return String.fromCharCode(255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24)}function kc(e){return p2(e).map(sv).join("")}var lv=function(e){for(var t=0;t<e.length;t++)e[t]=av(e[t]);return e.join("")}(p2("hello"))!="5d41402abc4b2a76b9719d911017c592";function Yi(e,t){if(lv){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}return e+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Lc(e,t){var r,n,o,a;if(e!==r){for(var l=(o=e,a=1+(256/e.length|0),new Array(a+1).join(o)),c=[],h=0;h<256;h++)c[h]=h;var f=0;for(h=0;h<256;h++){var p=c[h];f=(f+p+l.charCodeAt(h))%256,c[h]=c[f],c[f]=p}r=e,n=c}else c=n;var w=t.length,_=0,d=0,b="";for(h=0;h<w;h++)d=(d+(p=c[_=(_+1)%256]))%256,c[_]=c[d],c[d]=p,l=c[(c[_]+c[d])%256],b+=String.fromCharCode(t.charCodeAt(h)^l);return b}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var eh={print:4,modify:8,copy:16,"annot-forms":32};function Xo(e,t,r,n){this.v=1,this.r=2;var o=192;e.forEach(function(c){if(eh.perm!==void 0)throw new Error("Invalid permission: "+c);o+=eh[c]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(t+this.padding).substr(0,32),l=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,l),this.P=-(1+(255^o)),this.encryptionKey=kc(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=Lc(this.encryptionKey,this.padding)}function Zo(e){if(/[^\u0000-\u00ff]/.test(e))throw new Error("Invalid PDF Name Object: "+e+", Only accept ASCII characters.");for(var t="",r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);t+=o<33||o===35||o===37||o===40||o===41||o===47||o===60||o===62||o===91||o===93||o===123||o===125||o>126?"#"+("0"+o.toString(16)).slice(-2):e[n]}return t}function th(e){if(Pt(e)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(r,n,o){if(o=o||!1,typeof r!="string"||typeof n!="function"||typeof o!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(r)||(t[r]={});var a=Math.random().toString(35);return t[r][a]=[n,!!o],a},this.unsubscribe=function(r){for(var n in t)if(t[n][r])return delete t[n][r],Object.keys(t[n]).length===0&&delete t[n],!0;return!1},this.publish=function(r){if(t.hasOwnProperty(r)){var n=Array.prototype.slice.call(arguments,1),o=[];for(var a in t[r]){var l=t[r][a];try{l[0].apply(e,n)}catch(c){nt.console&&Ot.error("jsPDF PubSub Error",c.message,c)}l[1]&&o.push(a)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function nl(e){if(!(this instanceof nl))return new nl(e);var t="opacity,stroke-opacity".split(",");for(var r in e)e.hasOwnProperty(r)&&t.indexOf(r)>=0&&(this[r]=e[r]);this.id="",this.objectNumber=-1}function m2(e,t){this.gState=e,this.matrix=t,this.id="",this.objectNumber=-1}function Ao(e,t,r,n,o){if(!(this instanceof Ao))return new Ao(e,t,r,n,o);this.type=e==="axial"?2:3,this.coords=t,this.colors=r,m2.call(this,n,o)}function Jo(e,t,r,n,o){if(!(this instanceof Jo))return new Jo(e,t,r,n,o);this.boundingBox=e,this.xStep=t,this.yStep=r,this.stream="",this.cloneIndex=0,m2.call(this,n,o)}function Ye(e){var t,r=typeof arguments[0]=="string"?arguments[0]:"p",n=arguments[1],o=arguments[2],a=arguments[3],l=[],c=1,h=16,f="S",p=null;Pt(e=e||{})==="object"&&(r=e.orientation,n=e.unit||n,o=e.format||o,a=e.compress||e.compressPdf||a,(p=e.encryption||null)!==null&&(p.userPassword=p.userPassword||"",p.ownerPassword=p.ownerPassword||"",p.userPermissions=p.userPermissions||[]),c=typeof e.userUnit=="number"?Math.abs(e.userUnit):1,e.precision!==void 0&&(t=e.precision),e.floatPrecision!==void 0&&(h=e.floatPrecision),f=e.defaultPathOperation||"S"),l=e.filters||(a===!0?["FlateEncode"]:l),n=n||"mm",r=(""+(r||"P")).toLowerCase();var w=e.putOnlyUsedFonts||!1,_={},d={internal:{},__private__:{}};d.__private__.PubSub=th;var b="1.3",S=d.__private__.getPdfVersion=function(){return b};d.__private__.setPdfVersion=function(m){b=m};var k={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};d.__private__.getPageFormats=function(){return k};var y=d.__private__.getPageFormat=function(m){return k[m]};o=o||"a4";var R="compat",I="advanced",P=R;function Y(){this.saveGraphicsState(),W(new Ze(Je,0,0,-Je,0,uo()*Je).toString()+" cm"),this.setFontSize(this.getFontSize()/Je),f="n",P=I}function K(){this.restoreGraphicsState(),f="S",P=R}var ne=d.__private__.combineFontStyleAndFontWeight=function(m,C){if(m=="bold"&&C=="normal"||m=="bold"&&C==400||m=="normal"&&C=="italic"||m=="bold"&&C=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return C&&(m=C==400||C==="normal"?m==="italic"?"italic":"normal":C!=700&&C!=="bold"||m!=="normal"?(C==700?"bold":C)+""+m:"bold"),m};d.advancedAPI=function(m){var C=P===R;return C&&Y.call(this),typeof m!="function"||(m(this),C&&K.call(this)),this},d.compatAPI=function(m){var C=P===I;return C&&K.call(this),typeof m!="function"||(m(this),C&&Y.call(this)),this},d.isAdvancedAPI=function(){return P===I};var X,M=function(m){if(P!==I)throw new Error(m+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},J=d.roundToPrecision=d.__private__.roundToPrecision=function(m,C){var q=t||C;if(isNaN(m)||isNaN(q))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return m.toFixed(q).replace(/0+$/,"")};X=d.hpf=d.__private__.hpf=typeof h=="number"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return J(m,h)}:h==="smart"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return J(m,m>-1&&m<1?16:5)}:function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return J(m,16)};var E=d.f2=d.__private__.f2=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f2");return J(m,2)},F=d.__private__.f3=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f3");return J(m,3)},G=d.scale=d.__private__.scale=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.scale");return P===R?m*Je:P===I?m:void 0},$=function(m){return G(function(C){return P===R?uo()-C:P===I?C:void 0}(m))};d.__private__.setPrecision=d.setPrecision=function(m){typeof parseInt(m,10)=="number"&&(t=parseInt(m,10))};var oe,se="00000000000000000000000000000000",pe=d.__private__.getFileId=function(){return se},ee=d.__private__.setFileId=function(m){return se=m!==void 0&&/^[a-fA-F0-9]{32}$/.test(m)?m.toUpperCase():se.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),p!==null&&(Mt=new Xo(p.userPermissions,p.userPassword,p.ownerPassword,se)),se};d.setFileId=function(m){return ee(m),this},d.getFileId=function(){return pe()};var le=d.__private__.convertDateToPDFDate=function(m){var C=m.getTimezoneOffset(),q=C<0?"+":"-",Z=Math.floor(Math.abs(C/60)),ae=Math.abs(C%60),_e=[q,V(Z),"'",V(ae),"'"].join("");return["D:",m.getFullYear(),V(m.getMonth()+1),V(m.getDate()),V(m.getHours()),V(m.getMinutes()),V(m.getSeconds()),_e].join("")},Ce=d.__private__.convertPDFDateToDate=function(m){var C=parseInt(m.substr(2,4),10),q=parseInt(m.substr(6,2),10)-1,Z=parseInt(m.substr(8,2),10),ae=parseInt(m.substr(10,2),10),_e=parseInt(m.substr(12,2),10),Le=parseInt(m.substr(14,2),10);return new Date(C,q,Z,ae,_e,Le,0)},be=d.__private__.setCreationDate=function(m){var C;if(m===void 0&&(m=new Date),m instanceof Date)C=le(m);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(m))throw new Error("Invalid argument passed to jsPDF.setCreationDate");C=m}return oe=C},L=d.__private__.getCreationDate=function(m){var C=oe;return m==="jsDate"&&(C=Ce(oe)),C};d.setCreationDate=function(m){return be(m),this},d.getCreationDate=function(m){return L(m)};var H,V=d.__private__.padd2=function(m){return("0"+parseInt(m)).slice(-2)},Q=d.__private__.padd2Hex=function(m){return("00"+(m=m.toString())).substr(m.length)},re=0,ue=[],ge=[],me=0,xe=[],Ae=[],Te=!1,Pe=ge;d.__private__.setCustomOutputDestination=function(m){Te=!0,Pe=m};var ve=function(m){Te||(Pe=m)};d.__private__.resetCustomOutputDestination=function(){Te=!1,Pe=ge};var W=d.__private__.out=function(m){return m=m.toString(),me+=m.length+1,Pe.push(m),Pe},ft=d.__private__.write=function(m){return W(arguments.length===1?m.toString():Array.prototype.join.call(arguments," "))},Ke=d.__private__.getArrayBuffer=function(m){for(var C=m.length,q=new ArrayBuffer(C),Z=new Uint8Array(q);C--;)Z[C]=m.charCodeAt(C);return q},qe=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];d.__private__.getStandardFonts=function(){return qe};var Ne=e.fontSize||16;d.__private__.setFontSize=d.setFontSize=function(m){return Ne=P===I?m/Je:m,this};var Oe,je=d.__private__.getFontSize=d.getFontSize=function(){return P===R?Ne:Ne*Je},it=e.R2L||!1;d.__private__.setR2L=d.setR2L=function(m){return it=m,this},d.__private__.getR2L=d.getR2L=function(){return it};var Fe,gt=d.__private__.setZoomMode=function(m){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(m))Oe=m;else if(isNaN(m)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(m)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+m+'" is not recognized.');Oe=m}else Oe=parseInt(m,10)};d.__private__.getZoomMode=function(){return Oe};var tt,rt=d.__private__.setPageMode=function(m){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(m)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+m+'" is not recognized.');Fe=m};d.__private__.getPageMode=function(){return Fe};var St=d.__private__.setLayoutMode=function(m){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(m)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+m+'" is not recognized.');tt=m};d.__private__.getLayoutMode=function(){return tt},d.__private__.setDisplayMode=d.setDisplayMode=function(m,C,q){return gt(m),St(C),rt(q),this};var ot={title:"",subject:"",author:"",keywords:"",creator:""};d.__private__.getDocumentProperty=function(m){if(Object.keys(ot).indexOf(m)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return ot[m]},d.__private__.getDocumentProperties=function(){return ot},d.__private__.setDocumentProperties=d.setProperties=d.setDocumentProperties=function(m){for(var C in ot)ot.hasOwnProperty(C)&&m[C]&&(ot[C]=m[C]);return this},d.__private__.setDocumentProperty=function(m,C){if(Object.keys(ot).indexOf(m)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return ot[m]=C};var $e,Je,Ve,At,yt,Be={},at={},Nt=[],Xe={},vt={},lt={},Ht={},Zt=null,Et=0,Qe=[],bt=new th(d),_n=e.hotfixes||[],pr={},Zr={},Jr=[],Ze=function m(C,q,Z,ae,_e,Le){if(!(this instanceof m))return new m(C,q,Z,ae,_e,Le);isNaN(C)&&(C=1),isNaN(q)&&(q=0),isNaN(Z)&&(Z=0),isNaN(ae)&&(ae=1),isNaN(_e)&&(_e=0),isNaN(Le)&&(Le=0),this._matrix=[C,q,Z,ae,_e,Le]};Object.defineProperty(Ze.prototype,"sx",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Ze.prototype,"shy",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Ze.prototype,"shx",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Ze.prototype,"sy",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Ze.prototype,"tx",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Ze.prototype,"ty",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Ze.prototype,"a",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(Ze.prototype,"b",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(Ze.prototype,"c",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(Ze.prototype,"d",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(Ze.prototype,"e",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(Ze.prototype,"f",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(Ze.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Ze.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Ze.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Ze.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),Ze.prototype.join=function(m){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(X).join(m)},Ze.prototype.multiply=function(m){var C=m.sx*this.sx+m.shy*this.shx,q=m.sx*this.shy+m.shy*this.sy,Z=m.shx*this.sx+m.sy*this.shx,ae=m.shx*this.shy+m.sy*this.sy,_e=m.tx*this.sx+m.ty*this.shx+this.tx,Le=m.tx*this.shy+m.ty*this.sy+this.ty;return new Ze(C,q,Z,ae,_e,Le)},Ze.prototype.decompose=function(){var m=this.sx,C=this.shy,q=this.shx,Z=this.sy,ae=this.tx,_e=this.ty,Le=Math.sqrt(m*m+C*C),ze=(m/=Le)*q+(C/=Le)*Z;q-=m*ze,Z-=C*ze;var We=Math.sqrt(q*q+Z*Z);return ze/=We,m*(Z/=We)<C*(q/=We)&&(m=-m,C=-C,ze=-ze,Le=-Le),{scale:new Ze(Le,0,0,We,0,0),translate:new Ze(1,0,0,1,ae,_e),rotate:new Ze(m,C,-C,m,0,0),skew:new Ze(1,0,ze,1,0,0)}},Ze.prototype.toString=function(m){return this.join(" ")},Ze.prototype.inversed=function(){var m=this.sx,C=this.shy,q=this.shx,Z=this.sy,ae=this.tx,_e=this.ty,Le=1/(m*Z-C*q),ze=Z*Le,We=-C*Le,st=-q*Le,ut=m*Le;return new Ze(ze,We,st,ut,-ze*ae-st*_e,-We*ae-ut*_e)},Ze.prototype.applyToPoint=function(m){var C=m.x*this.sx+m.y*this.shx+this.tx,q=m.x*this.shy+m.y*this.sy+this.ty;return new lo(C,q)},Ze.prototype.applyToRectangle=function(m){var C=this.applyToPoint(m),q=this.applyToPoint(new lo(m.x+m.w,m.y+m.h));return new da(C.x,C.y,q.x-C.x,q.y-C.y)},Ze.prototype.clone=function(){var m=this.sx,C=this.shy,q=this.shx,Z=this.sy,ae=this.tx,_e=this.ty;return new Ze(m,C,q,Z,ae,_e)},d.Matrix=Ze;var un=d.matrixMult=function(m,C){return C.multiply(m)},hn=new Ze(1,0,0,1,0,0);d.unitMatrix=d.identityMatrix=hn;var Fr=function(m,C){if(!vt[m]){var q=(C instanceof Ao?"Sh":"P")+(Object.keys(Xe).length+1).toString(10);C.id=q,vt[m]=q,Xe[q]=C,bt.publish("addPattern",C)}};d.ShadingPattern=Ao,d.TilingPattern=Jo,d.addShadingPattern=function(m,C){return M("addShadingPattern()"),Fr(m,C),this},d.beginTilingPattern=function(m){M("beginTilingPattern()"),pa(m.boundingBox[0],m.boundingBox[1],m.boundingBox[2]-m.boundingBox[0],m.boundingBox[3]-m.boundingBox[1],m.matrix)},d.endTilingPattern=function(m,C){M("endTilingPattern()"),C.stream=Ae[H].join(`
`),Fr(m,C),bt.publish("endTilingPattern",C),Jr.pop().restore()};var Dr,qt=d.__private__.newObject=function(){var m=tr();return hr(m,!0),m},tr=d.__private__.newObjectDeferred=function(){return re++,ue[re]=function(){return me},re},hr=function(m,C){return C=typeof C=="boolean"&&C,ue[m]=me,C&&W(m+" 0 obj"),m},Fn=d.__private__.newAdditionalObject=function(){var m={objId:tr(),content:""};return xe.push(m),m},Dn=tr(),zr=tr(),Br=d.__private__.decodeColorString=function(m){var C=m.split(" ");if(C.length!==2||C[1]!=="g"&&C[1]!=="G")C.length!==5||C[4]!=="k"&&C[4]!=="K"||(C=[(1-C[0])*(1-C[3]),(1-C[1])*(1-C[3]),(1-C[2])*(1-C[3]),"r"]);else{var q=parseFloat(C[0]);C=[q,q,q,"r"]}for(var Z="#",ae=0;ae<3;ae++)Z+=("0"+Math.floor(255*parseFloat(C[ae])).toString(16)).slice(-2);return Z},wr=d.__private__.encodeColorString=function(m){var C;typeof m=="string"&&(m={ch1:m});var q=m.ch1,Z=m.ch2,ae=m.ch3,_e=m.ch4,Le=m.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof q=="string"&&q.charAt(0)!=="#"){var ze=new d2(q);if(ze.ok)q=ze.toHex();else if(!/^\d*\.?\d*$/.test(q))throw new Error('Invalid color "'+q+'" passed to jsPDF.encodeColorString.')}if(typeof q=="string"&&/^#[0-9A-Fa-f]{3}$/.test(q)&&(q="#"+q[1]+q[1]+q[2]+q[2]+q[3]+q[3]),typeof q=="string"&&/^#[0-9A-Fa-f]{6}$/.test(q)){var We=parseInt(q.substr(1),16);q=We>>16&255,Z=We>>8&255,ae=255&We}if(Z===void 0||_e===void 0&&q===Z&&Z===ae)C=typeof q=="string"?q+" "+Le[0]:m.precision===2?E(q/255)+" "+Le[0]:F(q/255)+" "+Le[0];else if(_e===void 0||Pt(_e)==="object"){if(_e&&!isNaN(_e.a)&&_e.a===0)return["1.","1.","1.",Le[1]].join(" ");C=typeof q=="string"?[q,Z,ae,Le[1]].join(" "):m.precision===2?[E(q/255),E(Z/255),E(ae/255),Le[1]].join(" "):[F(q/255),F(Z/255),F(ae/255),Le[1]].join(" ")}else C=typeof q=="string"?[q,Z,ae,_e,Le[2]].join(" "):m.precision===2?[E(q),E(Z),E(ae),E(_e),Le[2]].join(" "):[F(q),F(Z),F(ae),F(_e),Le[2]].join(" ");return C},Ur=d.__private__.getFilters=function(){return l},yr=d.__private__.putStream=function(m){var C=(m=m||{}).data||"",q=m.filters||Ur(),Z=m.alreadyAppliedFilters||[],ae=m.addLength1||!1,_e=C.length,Le=m.objectId,ze=function(mr){return mr};if(p!==null&&Le===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");p!==null&&(ze=Mt.encryptor(Le,0));var We={};q===!0&&(q=["FlateEncode"]);var st=m.additionalKeyValues||[],ut=(We=Ye.API.processDataByFilters!==void 0?Ye.API.processDataByFilters(C,q):{data:C,reverseChain:[]}).reverseChain+(Array.isArray(Z)?Z.join(" "):Z.toString());if(We.data.length!==0&&(st.push({key:"Length",value:We.data.length}),ae===!0&&st.push({key:"Length1",value:_e})),ut.length!=0)if(ut.split("/").length-1==1)st.push({key:"Filter",value:ut});else{st.push({key:"Filter",value:"["+ut+"]"});for(var Ct=0;Ct<st.length;Ct+=1)if(st[Ct].key==="DecodeParms"){for(var Wt=[],fr=0;fr<We.reverseChain.split("/").length-1;fr+=1)Wt.push("null");Wt.push(st[Ct].value),st[Ct].value="["+Wt.join(" ")+"]"}}W("<<");for(var Ft=0;Ft<st.length;Ft++)W("/"+st[Ft].key+" "+st[Ft].value);W(">>"),We.data.length!==0&&(W("stream"),W(ze(We.data)),W("endstream"))},Sn=d.__private__.putPage=function(m){var C=m.number,q=m.data,Z=m.objId,ae=m.contentsObjId;hr(Z,!0),W("<</Type /Page"),W("/Parent "+m.rootDictionaryObjId+" 0 R"),W("/Resources "+m.resourceDictionaryObjId+" 0 R"),W("/MediaBox ["+parseFloat(X(m.mediaBox.bottomLeftX))+" "+parseFloat(X(m.mediaBox.bottomLeftY))+" "+X(m.mediaBox.topRightX)+" "+X(m.mediaBox.topRightY)+"]"),m.cropBox!==null&&W("/CropBox ["+X(m.cropBox.bottomLeftX)+" "+X(m.cropBox.bottomLeftY)+" "+X(m.cropBox.topRightX)+" "+X(m.cropBox.topRightY)+"]"),m.bleedBox!==null&&W("/BleedBox ["+X(m.bleedBox.bottomLeftX)+" "+X(m.bleedBox.bottomLeftY)+" "+X(m.bleedBox.topRightX)+" "+X(m.bleedBox.topRightY)+"]"),m.trimBox!==null&&W("/TrimBox ["+X(m.trimBox.bottomLeftX)+" "+X(m.trimBox.bottomLeftY)+" "+X(m.trimBox.topRightX)+" "+X(m.trimBox.topRightY)+"]"),m.artBox!==null&&W("/ArtBox ["+X(m.artBox.bottomLeftX)+" "+X(m.artBox.bottomLeftY)+" "+X(m.artBox.topRightX)+" "+X(m.artBox.topRightY)+"]"),typeof m.userUnit=="number"&&m.userUnit!==1&&W("/UserUnit "+m.userUnit),bt.publish("putPage",{objId:Z,pageContext:Qe[C],pageNumber:C,page:q}),W("/Contents "+ae+" 0 R"),W(">>"),W("endobj");var _e=q.join(`
`);return P===I&&(_e+=`
Q`),hr(ae,!0),yr({data:_e,filters:Ur(),objectId:ae}),W("endobj"),Z},fn=d.__private__.putPages=function(){var m,C,q=[];for(m=1;m<=Et;m++)Qe[m].objId=tr(),Qe[m].contentsObjId=tr();for(m=1;m<=Et;m++)q.push(Sn({number:m,data:Ae[m],objId:Qe[m].objId,contentsObjId:Qe[m].contentsObjId,mediaBox:Qe[m].mediaBox,cropBox:Qe[m].cropBox,bleedBox:Qe[m].bleedBox,trimBox:Qe[m].trimBox,artBox:Qe[m].artBox,userUnit:Qe[m].userUnit,rootDictionaryObjId:Dn,resourceDictionaryObjId:zr}));hr(Dn,!0),W("<</Type /Pages");var Z="/Kids [";for(C=0;C<Et;C++)Z+=q[C]+" 0 R ";W(Z+"]"),W("/Count "+Et),W(">>"),W("endobj"),bt.publish("postPutPages")},Kn=function(m){bt.publish("putFont",{font:m,out:W,newObject:qt,putStream:yr}),m.isAlreadyPutted!==!0&&(m.objectNumber=qt(),W("<<"),W("/Type /Font"),W("/BaseFont /"+Zo(m.postScriptName)),W("/Subtype /Type1"),typeof m.encoding=="string"&&W("/Encoding /"+m.encoding),W("/FirstChar 32"),W("/LastChar 255"),W(">>"),W("endobj"))},yi=function(m){m.objectNumber=qt();var C=[];C.push({key:"Type",value:"/XObject"}),C.push({key:"Subtype",value:"/Form"}),C.push({key:"BBox",value:"["+[X(m.x),X(m.y),X(m.x+m.width),X(m.y+m.height)].join(" ")+"]"}),C.push({key:"Matrix",value:"["+m.matrix.toString()+"]"});var q=m.pages[1].join(`
`);yr({data:q,additionalKeyValues:C,objectId:m.objectNumber}),W("endobj")},_i=function(m,C){C||(C=21);var q=qt(),Z=function(Le,ze){var We,st=[],ut=1/(ze-1);for(We=0;We<1;We+=ut)st.push(We);if(st.push(1),Le[0].offset!=0){var Ct={offset:0,color:Le[0].color};Le.unshift(Ct)}if(Le[Le.length-1].offset!=1){var Wt={offset:1,color:Le[Le.length-1].color};Le.push(Wt)}for(var fr="",Ft=0,mr=0;mr<st.length;mr++){for(We=st[mr];We>Le[Ft+1].offset;)Ft++;var dr=Le[Ft].offset,Cr=(We-dr)/(Le[Ft+1].offset-dr),gn=Le[Ft].color,Wr=Le[Ft+1].color;fr+=Q(Math.round((1-Cr)*gn[0]+Cr*Wr[0]).toString(16))+Q(Math.round((1-Cr)*gn[1]+Cr*Wr[1]).toString(16))+Q(Math.round((1-Cr)*gn[2]+Cr*Wr[2]).toString(16))}return fr.trim()}(m.colors,C),ae=[];ae.push({key:"FunctionType",value:"0"}),ae.push({key:"Domain",value:"[0.0 1.0]"}),ae.push({key:"Size",value:"["+C+"]"}),ae.push({key:"BitsPerSample",value:"8"}),ae.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ae.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),yr({data:Z,additionalKeyValues:ae,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:q}),W("endobj"),m.objectNumber=qt(),W("<< /ShadingType "+m.type),W("/ColorSpace /DeviceRGB");var _e="/Coords ["+X(parseFloat(m.coords[0]))+" "+X(parseFloat(m.coords[1]))+" ";m.type===2?_e+=X(parseFloat(m.coords[2]))+" "+X(parseFloat(m.coords[3])):_e+=X(parseFloat(m.coords[2]))+" "+X(parseFloat(m.coords[3]))+" "+X(parseFloat(m.coords[4]))+" "+X(parseFloat(m.coords[5])),W(_e+="]"),m.matrix&&W("/Matrix ["+m.matrix.toString()+"]"),W("/Function "+q+" 0 R"),W("/Extend [true true]"),W(">>"),W("endobj")},ei=function(m,C){var q=tr(),Z=qt();C.push({resourcesOid:q,objectOid:Z}),m.objectNumber=Z;var ae=[];ae.push({key:"Type",value:"/Pattern"}),ae.push({key:"PatternType",value:"1"}),ae.push({key:"PaintType",value:"1"}),ae.push({key:"TilingType",value:"1"}),ae.push({key:"BBox",value:"["+m.boundingBox.map(X).join(" ")+"]"}),ae.push({key:"XStep",value:X(m.xStep)}),ae.push({key:"YStep",value:X(m.yStep)}),ae.push({key:"Resources",value:q+" 0 R"}),m.matrix&&ae.push({key:"Matrix",value:"["+m.matrix.toString()+"]"}),yr({data:m.stream,additionalKeyValues:ae,objectId:m.objectNumber}),W("endobj")},Zi=function(m){for(var C in m.objectNumber=qt(),W("<<"),m)switch(C){case"opacity":W("/ca "+E(m[C]));break;case"stroke-opacity":W("/CA "+E(m[C]))}W(">>"),W("endobj")},Ji=function(m){hr(m.resourcesOid,!0),W("<<"),W("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var C in W("/Font <<"),Be)Be.hasOwnProperty(C)&&(w===!1||w===!0&&_.hasOwnProperty(C))&&W("/"+C+" "+Be[C].objectNumber+" 0 R");W(">>")}(),function(){if(Object.keys(Xe).length>0){for(var C in W("/Shading <<"),Xe)Xe.hasOwnProperty(C)&&Xe[C]instanceof Ao&&Xe[C].objectNumber>=0&&W("/"+C+" "+Xe[C].objectNumber+" 0 R");bt.publish("putShadingPatternDict"),W(">>")}}(),function(C){if(Object.keys(Xe).length>0){for(var q in W("/Pattern <<"),Xe)Xe.hasOwnProperty(q)&&Xe[q]instanceof d.TilingPattern&&Xe[q].objectNumber>=0&&Xe[q].objectNumber<C&&W("/"+q+" "+Xe[q].objectNumber+" 0 R");bt.publish("putTilingPatternDict"),W(">>")}}(m.objectOid),function(){if(Object.keys(lt).length>0){var C;for(C in W("/ExtGState <<"),lt)lt.hasOwnProperty(C)&&lt[C].objectNumber>=0&&W("/"+C+" "+lt[C].objectNumber+" 0 R");bt.publish("putGStateDict"),W(">>")}}(),function(){for(var C in W("/XObject <<"),pr)pr.hasOwnProperty(C)&&pr[C].objectNumber>=0&&W("/"+C+" "+pr[C].objectNumber+" 0 R");bt.publish("putXobjectDict"),W(">>")}(),W(">>"),W("endobj")},Cn=function(m){at[m.fontName]=at[m.fontName]||{},at[m.fontName][m.fontStyle]=m.id},Si=function(m,C,q,Z,ae){var _e={id:"F"+(Object.keys(Be).length+1).toString(10),postScriptName:m,fontName:C,fontStyle:q,encoding:Z,isStandardFont:ae||!1,metadata:{}};return bt.publish("addFont",{font:_e,instance:this}),Be[_e.id]=_e,Cn(_e),_e.id},_r=d.__private__.pdfEscape=d.pdfEscape=function(m,C){return function(q,Z){var ae,_e,Le,ze,We,st,ut,Ct,Wt;if(Le=(Z=Z||{}).sourceEncoding||"Unicode",We=Z.outputEncoding,(Z.autoencode||We)&&Be[$e].metadata&&Be[$e].metadata[Le]&&Be[$e].metadata[Le].encoding&&(ze=Be[$e].metadata[Le].encoding,!We&&Be[$e].encoding&&(We=Be[$e].encoding),!We&&ze.codePages&&(We=ze.codePages[0]),typeof We=="string"&&(We=ze[We]),We)){for(ut=!1,st=[],ae=0,_e=q.length;ae<_e;ae++)(Ct=We[q.charCodeAt(ae)])?st.push(String.fromCharCode(Ct)):st.push(q[ae]),st[ae].charCodeAt(0)>>8&&(ut=!0);q=st.join("")}for(ae=q.length;ut===void 0&&ae!==0;)q.charCodeAt(ae-1)>>8&&(ut=!0),ae--;if(!ut)return q;for(st=Z.noBOM?[]:[254,255],ae=0,_e=q.length;ae<_e;ae++){if((Wt=(Ct=q.charCodeAt(ae))>>8)>>8)throw new Error("Character at position "+ae+" of string '"+q+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");st.push(Wt),st.push(Ct-(Wt<<8))}return String.fromCharCode.apply(void 0,st)}(m,C).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},zn=d.__private__.beginPage=function(m){Ae[++Et]=[],Qe[Et]={objId:0,contentsObjId:0,userUnit:Number(c),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(m[0]),topRightY:Number(m[1])}},Qi(Et),ve(Ae[H])},Ci=function(m,C){var q,Z,ae;switch(r=C||r,typeof m=="string"&&(q=y(m.toLowerCase()),Array.isArray(q)&&(Z=q[0],ae=q[1])),Array.isArray(m)&&(Z=m[0]*Je,ae=m[1]*Je),isNaN(Z)&&(Z=o[0],ae=o[1]),(Z>14400||ae>14400)&&(Ot.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),Z=Math.min(14400,Z),ae=Math.min(14400,ae)),o=[Z,ae],r.substr(0,1)){case"l":ae>Z&&(o=[ae,Z]);break;case"p":Z>ae&&(o=[ae,Z])}zn(o),ca(ni),W(ii),Nn!==0&&W(Nn+" J"),Hn!==0&&W(Hn+" j"),bt.publish("addPage",{pageNumber:Et})},Ai=function(m){m>0&&m<=Et&&(Ae.splice(m,1),Qe.splice(m,1),Et--,H>Et&&(H=Et),this.setPage(H))},Qi=function(m){m>0&&m<=Et&&(H=m)},ti=d.__private__.getNumberOfPages=d.getNumberOfPages=function(){return Ae.length-1},Ki=function(m,C,q){var Z,ae=void 0;return q=q||{},m=m!==void 0?m:Be[$e].fontName,C=C!==void 0?C:Be[$e].fontStyle,Z=m.toLowerCase(),at[Z]!==void 0&&at[Z][C]!==void 0?ae=at[Z][C]:at[m]!==void 0&&at[m][C]!==void 0?ae=at[m][C]:q.disableWarning===!1&&Ot.warn("Unable to look up font label for font '"+m+"', '"+C+"'. Refer to getFontList() for available fonts."),ae||q.noFallback||(ae=at.times[C])==null&&(ae=at.times.normal),ae},Bn=d.__private__.putInfo=function(){var m=qt(),C=function(Z){return Z};for(var q in p!==null&&(C=Mt.encryptor(m,0)),W("<<"),W("/Producer ("+_r(C("jsPDF "+Ye.version))+")"),ot)ot.hasOwnProperty(q)&&ot[q]&&W("/"+q.substr(0,1).toUpperCase()+q.substr(1)+" ("+_r(C(ot[q]))+")");W("/CreationDate ("+_r(C(oe))+")"),W(">>"),W("endobj")},eo=d.__private__.putCatalog=function(m){var C=(m=m||{}).rootDictionaryObjId||Dn;switch(qt(),W("<<"),W("/Type /Catalog"),W("/Pages "+C+" 0 R"),Oe||(Oe="fullwidth"),Oe){case"fullwidth":W("/OpenAction [3 0 R /FitH null]");break;case"fullheight":W("/OpenAction [3 0 R /FitV null]");break;case"fullpage":W("/OpenAction [3 0 R /Fit]");break;case"original":W("/OpenAction [3 0 R /XYZ null null 1]");break;default:var q=""+Oe;q.substr(q.length-1)==="%"&&(Oe=parseInt(Oe)/100),typeof Oe=="number"&&W("/OpenAction [3 0 R /XYZ null null "+E(Oe)+"]")}switch(tt||(tt="continuous"),tt){case"continuous":W("/PageLayout /OneColumn");break;case"single":W("/PageLayout /SinglePage");break;case"two":case"twoleft":W("/PageLayout /TwoColumnLeft");break;case"tworight":W("/PageLayout /TwoColumnRight")}Fe&&W("/PageMode /"+Fe),bt.publish("putCatalog"),W(">>"),W("endobj")},Vt=d.__private__.putTrailer=function(){W("trailer"),W("<<"),W("/Size "+(re+1)),W("/Root "+re+" 0 R"),W("/Info "+(re-1)+" 0 R"),p!==null&&W("/Encrypt "+Mt.oid+" 0 R"),W("/ID [ <"+se+"> <"+se+"> ]"),W(">>")},oa=d.__private__.putHeader=function(){W("%PDF-"+b),W("%ºß¬à")},to=d.__private__.putXRef=function(){var m="0000000000";W("xref"),W("0 "+(re+1)),W("0000000000 65535 f ");for(var C=1;C<=re;C++)typeof ue[C]=="function"?W((m+ue[C]()).slice(-10)+" 00000 n "):ue[C]!==void 0?W((m+ue[C]).slice(-10)+" 00000 n "):W("0000000000 00000 n ")},An=d.__private__.buildDocument=function(){var m;re=0,me=0,ge=[],ue=[],xe=[],Dn=tr(),zr=tr(),ve(ge),bt.publish("buildDocument"),oa(),fn(),function(){bt.publish("putAdditionalObjects");for(var q=0;q<xe.length;q++){var Z=xe[q];hr(Z.objId,!0),W(Z.content),W("endobj")}bt.publish("postPutAdditionalObjects")}(),m=[],function(){for(var q in Be)Be.hasOwnProperty(q)&&(w===!1||w===!0&&_.hasOwnProperty(q))&&Kn(Be[q])}(),function(){var q;for(q in lt)lt.hasOwnProperty(q)&&Zi(lt[q])}(),function(){for(var q in pr)pr.hasOwnProperty(q)&&yi(pr[q])}(),function(q){var Z;for(Z in Xe)Xe.hasOwnProperty(Z)&&(Xe[Z]instanceof Ao?_i(Xe[Z]):Xe[Z]instanceof Jo&&ei(Xe[Z],q))}(m),bt.publish("putResources"),m.forEach(Ji),Ji({resourcesOid:zr,objectOid:Number.MAX_SAFE_INTEGER}),bt.publish("postPutResources"),p!==null&&(Mt.oid=qt(),W("<<"),W("/Filter /Standard"),W("/V "+Mt.v),W("/R "+Mt.r),W("/U <"+Mt.toHexString(Mt.U)+">"),W("/O <"+Mt.toHexString(Mt.O)+">"),W("/P "+Mt.P),W(">>"),W("endobj")),Bn(),eo();var C=me;return to(),Vt(),W("startxref"),W(""+C),W("%%EOF"),ve(Ae[H]),ge.join(`
`)},kn=d.__private__.getBlob=function(m){return new Blob([Ke(m)],{type:"application/pdf"})},Qr=d.output=d.__private__.output=(Dr=function(m,C){switch(typeof(C=C||{})=="string"?C={filename:C}:C.filename=C.filename||"generated.pdf",m){case void 0:return An();case"save":d.save(C.filename);break;case"arraybuffer":return Ke(An());case"blob":return kn(An());case"bloburi":case"bloburl":if(nt.URL!==void 0&&typeof nt.URL.createObjectURL=="function")return nt.URL&&nt.URL.createObjectURL(kn(An()))||void 0;Ot.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var q="",Z=An();try{q=Q1(Z)}catch{q=Q1(unescape(encodeURIComponent(Z)))}return"data:application/pdf;filename="+C.filename+";base64,"+q;case"pdfobjectnewwindow":if(Object.prototype.toString.call(nt)==="[object Window]"){var ae="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",_e=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';C.pdfObjectUrl&&(ae=C.pdfObjectUrl,_e="");var Le='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+ae+'"'+_e+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(C)+");<\/script></body></html>",ze=nt.open();return ze!==null&&ze.document.write(Le),ze}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(nt)==="[object Window]"){var We='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(C.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+C.filename+'" width="500px" height="400px" /></body></html>',st=nt.open();if(st!==null){st.document.write(We);var ut=this;st.document.documentElement.querySelector("#pdfViewer").onload=function(){st.document.title=C.filename,st.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ut.output("bloburl"))}}return st}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(nt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var Ct='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",C)+'"></iframe></body></html>',Wt=nt.open();if(Wt!==null&&(Wt.document.write(Ct),Wt.document.title=C.filename),Wt||typeof safari>"u")return Wt;break;case"datauri":case"dataurl":return nt.document.location.href=this.output("datauristring",C);default:return null}},Dr.foo=function(){try{return Dr.apply(this,arguments)}catch(q){var m=q.stack||"";~m.indexOf(" at ")&&(m=m.split(" at ")[1]);var C="Error in function "+m.split(`
`)[0].split("<")[0]+": "+q.message;if(!nt.console)throw new Error(C);nt.console.error(C,q),nt.alert&&alert(C)}},Dr.foo.bar=Dr,Dr.foo),ri=function(m){return Array.isArray(_n)===!0&&_n.indexOf(m)>-1};switch(n){case"pt":Je=1;break;case"mm":Je=72/25.4;break;case"cm":Je=72/2.54;break;case"in":Je=72;break;case"px":Je=ri("px_scaling")==1?.75:96/72;break;case"pc":case"em":Je=12;break;case"ex":Je=6;break;default:if(typeof n!="number")throw new Error("Invalid unit: "+n);Je=n}var Mt=null;be(),ee();var ro=d.__private__.getPageInfo=d.getPageInfo=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Qe[m].objId,pageNumber:m,pageContext:Qe[m]}},no=d.__private__.getPageInfoByObjId=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var C in Qe)if(Qe[C].objId===m)break;return ro(C)},Po=d.__private__.getCurrentPageInfo=d.getCurrentPageInfo=function(){return{objId:Qe[H].objId,pageNumber:H,pageContext:Qe[H]}};d.addPage=function(){return Ci.apply(this,arguments),this},d.setPage=function(){return Qi.apply(this,arguments),ve.call(this,Ae[H]),this},d.insertPage=function(m){return this.addPage(),this.movePage(H,m),this},d.movePage=function(m,C){var q,Z;if(m>C){q=Ae[m],Z=Qe[m];for(var ae=m;ae>C;ae--)Ae[ae]=Ae[ae-1],Qe[ae]=Qe[ae-1];Ae[C]=q,Qe[C]=Z,this.setPage(C)}else if(m<C){q=Ae[m],Z=Qe[m];for(var _e=m;_e<C;_e++)Ae[_e]=Ae[_e+1],Qe[_e]=Qe[_e+1];Ae[C]=q,Qe[C]=Z,this.setPage(C)}return this},d.deletePage=function(){return Ai.apply(this,arguments),this},d.__private__.text=d.text=function(m,C,q,Z,ae){var _e,Le,ze,We,st,ut,Ct,Wt,fr,Ft=(Z=Z||{}).scope||this;if(typeof m=="number"&&typeof C=="number"&&(typeof q=="string"||Array.isArray(q))){var mr=q;q=C,C=m,m=mr}if(arguments[3]instanceof Ze==0?(ze=arguments[4],We=arguments[5],Pt(Ct=arguments[3])==="object"&&Ct!==null||(typeof ze=="string"&&(We=ze,ze=null),typeof Ct=="string"&&(We=Ct,Ct=null),typeof Ct=="number"&&(ze=Ct,Ct=null),Z={flags:Ct,angle:ze,align:We})):(M("The transform parameter of text() with a Matrix value"),fr=ae),isNaN(C)||isNaN(q)||m==null)throw new Error("Invalid arguments passed to jsPDF.text");if(m.length===0)return Ft;var dr,Cr="",gn=typeof Z.lineHeightFactor=="number"?Z.lineHeightFactor:rr,Wr=Ft.internal.scaleFactor;function ts(kt){return kt=kt.split("	").join(Array(Z.TabLen||9).join(" ")),_r(kt,Ct)}function Fo(kt){for(var jt,ir=kt.concat(),gr=[],ui=ir.length;ui--;)typeof(jt=ir.shift())=="string"?gr.push(jt):Array.isArray(kt)&&(jt.length===1||jt[1]===void 0&&jt[2]===void 0)?gr.push(jt[0]):gr.push([jt[0],jt[1],jt[2]]);return gr}function ho(kt,jt){var ir;if(typeof kt=="string")ir=jt(kt)[0];else if(Array.isArray(kt)){for(var gr,ui,Ca=kt.concat(),Bo=[],is=Ca.length;is--;)typeof(gr=Ca.shift())=="string"?Bo.push(jt(gr)[0]):Array.isArray(gr)&&typeof gr[0]=="string"&&(ui=jt(gr[0],gr[1],gr[2]),Bo.push([ui[0],ui[1],ui[2]]));ir=Bo}return ir}var Ni=!1,fo=!0;if(typeof m=="string")Ni=!0;else if(Array.isArray(m)){var po=m.concat();Le=[];for(var mo,Tr=po.length;Tr--;)(typeof(mo=po.shift())!="string"||Array.isArray(mo)&&typeof mo[0]!="string")&&(fo=!1);Ni=fo}if(Ni===!1)throw new Error('Type of text must be string or Array. "'+m+'" is not recognized.');typeof m=="string"&&(m=m.match(/[\r?\n]/)?m.split(/\r\n|\r|\n/g):[m]);var go=Ne/Ft.internal.scaleFactor,vo=go*(gn-1);switch(Z.baseline){case"bottom":q-=vo;break;case"top":q+=go-vo;break;case"hanging":q+=go-2*vo;break;case"middle":q+=go/2-vo}if((ut=Z.maxWidth||0)>0&&(typeof m=="string"?m=Ft.splitTextToSize(m,ut):Object.prototype.toString.call(m)==="[object Array]"&&(m=m.reduce(function(kt,jt){return kt.concat(Ft.splitTextToSize(jt,ut))},[]))),_e={text:m,x:C,y:q,options:Z,mutex:{pdfEscape:_r,activeFontKey:$e,fonts:Be,activeFontSize:Ne}},bt.publish("preProcessText",_e),m=_e.text,ze=(Z=_e.options).angle,fr instanceof Ze==0&&ze&&typeof ze=="number"){ze*=Math.PI/180,Z.rotationDirection===0&&(ze=-ze),P===I&&(ze=-ze);var ma=Math.cos(ze),ga=Math.sin(ze);fr=new Ze(ma,ga,-ga,ma,0,0)}else ze&&ze instanceof Ze&&(fr=ze);P!==I||fr||(fr=hn),(st=Z.charSpace||Li)!==void 0&&(Cr+=X(G(st))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(Wt=Z.horizontalScale)!==void 0&&(Cr+=X(100*Wt)+` Tz
`),Z.lang;var Jt=-1,li=Z.renderingMode!==void 0?Z.renderingMode:Z.stroke,Do=Ft.internal.getCurrentPageInfo().pageContext;switch(li){case 0:case!1:case"fill":Jt=0;break;case 1:case!0:case"stroke":Jt=1;break;case 2:case"fillThenStroke":Jt=2;break;case 3:case"invisible":Jt=3;break;case 4:case"fillAndAddForClipping":Jt=4;break;case 5:case"strokeAndAddPathForClipping":Jt=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Jt=6;break;case 7:case"addToPathForClipping":Jt=7}var rs=Do.usedRenderingMode!==void 0?Do.usedRenderingMode:-1;Jt!==-1?Cr+=Jt+` Tr
`:rs!==-1&&(Cr+=`0 Tr
`),Jt!==-1&&(Do.usedRenderingMode=Jt),We=Z.align||"left";var vn,bo=Ne*gn,va=Ft.internal.pageSize.getWidth(),ba=Be[$e];st=Z.charSpace||Li,ut=Z.maxWidth||0,Ct=Object.assign({autoencode:!0,noBOM:!0},Z.flags);var Ei=[],xo=function(kt){return Ft.getStringUnitWidth(kt,{font:ba,charSpace:st,fontSize:Ne,doKerning:!1})*Ne/Wr};if(Object.prototype.toString.call(m)==="[object Array]"){var Kr;Le=Fo(m),We!=="left"&&(vn=Le.map(xo));var en,Ti=0;if(We==="right"){C-=vn[0],m=[],Tr=Le.length;for(var ci=0;ci<Tr;ci++)ci===0?(en=pn(C),Kr=mn(q)):(en=G(Ti-vn[ci]),Kr=-bo),m.push([Le[ci],en,Kr]),Ti=vn[ci]}else if(We==="center"){C-=vn[0]/2,m=[],Tr=Le.length;for(var Ii=0;Ii<Tr;Ii++)Ii===0?(en=pn(C),Kr=mn(q)):(en=G((Ti-vn[Ii])/2),Kr=-bo),m.push([Le[Ii],en,Kr]),Ti=vn[Ii]}else if(We==="left"){m=[],Tr=Le.length;for(var xa=0;xa<Tr;xa++)m.push(Le[xa])}else if(We==="justify"&&ba.encoding==="Identity-H"){m=[],Tr=Le.length,ut=ut!==0?ut:va;for(var zo=0,nr=0;nr<Tr;nr++)if(Kr=nr===0?mn(q):-bo,en=nr===0?pn(C):zo,nr<Tr-1){var ns=G((ut-vn[nr])/(Le[nr].split(" ").length-1)),qn=Le[nr].split(" ");m.push([qn[0]+" ",en,Kr]),zo=0;for(var $n=1;$n<qn.length;$n++){var wa=(xo(qn[$n-1]+" "+qn[$n])-xo(qn[$n]))*Wr+ns;$n==qn.length-1?m.push([qn[$n],wa,0]):m.push([qn[$n]+" ",wa,0]),zo-=wa}}else m.push([Le[nr],en,Kr]);m.push(["",zo,0])}else{if(We!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(m=[],Tr=Le.length,ut=ut!==0?ut:va,nr=0;nr<Tr;nr++){Kr=nr===0?mn(q):-bo,en=nr===0?pn(C):0;var ya=Le[nr].split(" ").length-1,_a=ya>0?(ut-vn[nr])/ya:0;nr<Tr-1?Ei.push(X(G(_a))):Ei.push(0),m.push([Le[nr],en,Kr])}}}(typeof Z.R2L=="boolean"?Z.R2L:it)===!0&&(m=ho(m,function(kt,jt,ir){return[kt.split("").reverse().join(""),jt,ir]})),_e={text:m,x:C,y:q,options:Z,mutex:{pdfEscape:_r,activeFontKey:$e,fonts:Be,activeFontSize:Ne}},bt.publish("postProcessText",_e),m=_e.text,dr=_e.mutex.isHex||!1;var Sa=Be[$e].encoding;Sa!=="WinAnsiEncoding"&&Sa!=="StandardEncoding"||(m=ho(m,function(kt,jt,ir){return[ts(kt),jt,ir]})),Le=Fo(m),m=[];for(var Pi,ji,Ri,wo=Array.isArray(Le[0])?1:0,Oi="",yo=function(kt,jt,ir){var gr="";return ir instanceof Ze?(ir=typeof Z.angle=="number"?un(ir,new Ze(1,0,0,1,kt,jt)):un(new Ze(1,0,0,1,kt,jt),ir),P===I&&(ir=un(new Ze(1,0,0,-1,0,0),ir)),gr=ir.join(" ")+` Tm
`):gr=X(kt)+" "+X(jt)+` Td
`,gr},bn=0;bn<Le.length;bn++){switch(Oi="",wo){case 1:Ri=(dr?"<":"(")+Le[bn][0]+(dr?">":")"),Pi=parseFloat(Le[bn][1]),ji=parseFloat(Le[bn][2]);break;case 0:Ri=(dr?"<":"(")+Le[bn]+(dr?">":")"),Pi=pn(C),ji=mn(q)}Ei!==void 0&&Ei[bn]!==void 0&&(Oi=Ei[bn]+` Tw
`),bn===0?m.push(Oi+yo(Pi,ji,fr)+Ri):wo===0?m.push(Oi+Ri):wo===1&&m.push(Oi+yo(Pi,ji,fr)+Ri)}m=wo===0?m.join(` Tj
T* `):m.join(` Tj
`),m+=` Tj
`;var Vn=`BT
/`;return Vn+=$e+" "+Ne+` Tf
`,Vn+=X(Ne*gn)+` TL
`,Vn+=Un+`
`,Vn+=Cr,Vn+=m,W(Vn+="ET"),_[$e]=!0,Ft};var aa=d.__private__.clip=d.clip=function(m){return W(m==="evenodd"?"W*":"W"),this};d.clipEvenOdd=function(){return aa("evenodd")},d.__private__.discardPath=d.discardPath=function(){return W("n"),this};var Er=d.__private__.isValidStyle=function(m){var C=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(m)!==-1&&(C=!0),C};d.__private__.setDefaultPathOperation=d.setDefaultPathOperation=function(m){return Er(m)&&(f=m),this};var io=d.__private__.getStyle=d.getStyle=function(m){var C=f;switch(m){case"D":case"S":C="S";break;case"F":C="f";break;case"FD":case"DF":C="B";break;case"f":case"f*":case"B":case"B*":C=m}return C},jo=d.close=function(){return W("h"),this};d.stroke=function(){return W("S"),this},d.fill=function(m){return Ln("f",m),this},d.fillEvenOdd=function(m){return Ln("f*",m),this},d.fillStroke=function(m){return Ln("B",m),this},d.fillStrokeEvenOdd=function(m){return Ln("B*",m),this};var Ln=function(m,C){Pt(C)==="object"?la(C,m):W(m)},oo=function(m){m===null||P===I&&m===void 0||(m=io(m),W(m))};function sa(m,C,q,Z,ae){var _e=new Jo(C||this.boundingBox,q||this.xStep,Z||this.yStep,this.gState,ae||this.matrix);_e.stream=this.stream;var Le=m+"$$"+this.cloneIndex+++"$$";return Fr(Le,_e),_e}var la=function(m,C){var q=vt[m.key],Z=Xe[q];if(Z instanceof Ao)W("q"),W(Ro(C)),Z.gState&&d.setGState(Z.gState),W(m.matrix.toString()+" cm"),W("/"+q+" sh"),W("Q");else if(Z instanceof Jo){var ae=new Ze(1,0,0,-1,0,uo());m.matrix&&(ae=ae.multiply(m.matrix||hn),q=sa.call(Z,m.key,m.boundingBox,m.xStep,m.yStep,ae).id),W("q"),W("/Pattern cs"),W("/"+q+" scn"),Z.gState&&d.setGState(Z.gState),W(C),W("Q")}},Ro=function(m){switch(m){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},de=d.moveTo=function(m,C){return W(X(G(m))+" "+X($(C))+" m"),this},ct=d.lineTo=function(m,C){return W(X(G(m))+" "+X($(C))+" l"),this},zt=d.curveTo=function(m,C,q,Z,ae,_e){return W([X(G(m)),X($(C)),X(G(q)),X($(Z)),X(G(ae)),X($(_e)),"c"].join(" ")),this};d.__private__.line=d.line=function(m,C,q,Z,ae){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||!Er(ae))throw new Error("Invalid arguments passed to jsPDF.line");return P===R?this.lines([[q-m,Z-C]],m,C,[1,1],ae||"S"):this.lines([[q-m,Z-C]],m,C,[1,1]).stroke()},d.__private__.lines=d.lines=function(m,C,q,Z,ae,_e){var Le,ze,We,st,ut,Ct,Wt,fr,Ft,mr,dr,Cr;if(typeof m=="number"&&(Cr=q,q=C,C=m,m=Cr),Z=Z||[1,1],_e=_e||!1,isNaN(C)||isNaN(q)||!Array.isArray(m)||!Array.isArray(Z)||!Er(ae)||typeof _e!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(de(C,q),Le=Z[0],ze=Z[1],st=m.length,mr=C,dr=q,We=0;We<st;We++)(ut=m[We]).length===2?(mr=ut[0]*Le+mr,dr=ut[1]*ze+dr,ct(mr,dr)):(Ct=ut[0]*Le+mr,Wt=ut[1]*ze+dr,fr=ut[2]*Le+mr,Ft=ut[3]*ze+dr,mr=ut[4]*Le+mr,dr=ut[5]*ze+dr,zt(Ct,Wt,fr,Ft,mr,dr));return _e&&jo(),oo(ae),this},d.path=function(m){for(var C=0;C<m.length;C++){var q=m[C],Z=q.c;switch(q.op){case"m":de(Z[0],Z[1]);break;case"l":ct(Z[0],Z[1]);break;case"c":zt.apply(this,Z);break;case"h":jo()}}return this},d.__private__.rect=d.rect=function(m,C,q,Z,ae){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||!Er(ae))throw new Error("Invalid arguments passed to jsPDF.rect");return P===R&&(Z=-Z),W([X(G(m)),X($(C)),X(G(q)),X(G(Z)),"re"].join(" ")),oo(ae),this},d.__private__.triangle=d.triangle=function(m,C,q,Z,ae,_e,Le){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||isNaN(ae)||isNaN(_e)||!Er(Le))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[q-m,Z-C],[ae-q,_e-Z],[m-ae,C-_e]],m,C,[1,1],Le,!0),this},d.__private__.roundedRect=d.roundedRect=function(m,C,q,Z,ae,_e,Le){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||isNaN(ae)||isNaN(_e)||!Er(Le))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var ze=4/3*(Math.SQRT2-1);return ae=Math.min(ae,.5*q),_e=Math.min(_e,.5*Z),this.lines([[q-2*ae,0],[ae*ze,0,ae,_e-_e*ze,ae,_e],[0,Z-2*_e],[0,_e*ze,-ae*ze,_e,-ae,_e],[2*ae-q,0],[-ae*ze,0,-ae,-_e*ze,-ae,-_e],[0,2*_e-Z],[0,-_e*ze,ae*ze,-_e,ae,-_e]],m+ae,C,[1,1],Le,!0),this},d.__private__.ellipse=d.ellipse=function(m,C,q,Z,ae){if(isNaN(m)||isNaN(C)||isNaN(q)||isNaN(Z)||!Er(ae))throw new Error("Invalid arguments passed to jsPDF.ellipse");var _e=4/3*(Math.SQRT2-1)*q,Le=4/3*(Math.SQRT2-1)*Z;return de(m+q,C),zt(m+q,C-Le,m+_e,C-Z,m,C-Z),zt(m-_e,C-Z,m-q,C-Le,m-q,C),zt(m-q,C+Le,m-_e,C+Z,m,C+Z),zt(m+_e,C+Z,m+q,C+Le,m+q,C),oo(ae),this},d.__private__.circle=d.circle=function(m,C,q,Z){if(isNaN(m)||isNaN(C)||isNaN(q)||!Er(Z))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(m,C,q,q,Z)},d.setFont=function(m,C,q){return q&&(C=ne(C,q)),$e=Ki(m,C,{disableWarning:!1}),this};var dn=d.__private__.getFont=d.getFont=function(){return Be[Ki.apply(d,arguments)]};d.__private__.getFontList=d.getFontList=function(){var m,C,q={};for(m in at)if(at.hasOwnProperty(m))for(C in q[m]=[],at[m])at[m].hasOwnProperty(C)&&q[m].push(C);return q},d.addFont=function(m,C,q,Z,ae){var _e=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&_e.indexOf(arguments[3])!==-1?ae=arguments[3]:arguments[3]&&_e.indexOf(arguments[3])==-1&&(q=ne(q,Z)),Si.call(this,m,C,q,ae=ae||"Identity-H")};var rr,ni=e.lineWidth||.200025,et=d.__private__.getLineWidth=d.getLineWidth=function(){return ni},ca=d.__private__.setLineWidth=d.setLineWidth=function(m){return ni=m,W(X(G(m))+" w"),this};d.__private__.setLineDash=Ye.API.setLineDash=Ye.API.setLineDashPattern=function(m,C){if(m=m||[],C=C||0,isNaN(C)||!Array.isArray(m))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return m=m.map(function(q){return X(G(q))}).join(" "),C=X(G(C)),W("["+m+"] "+C+" d"),this};var Vr=d.__private__.getLineHeight=d.getLineHeight=function(){return Ne*rr};d.__private__.getLineHeight=d.getLineHeight=function(){return Ne*rr};var ao=d.__private__.setLineHeightFactor=d.setLineHeightFactor=function(m){return typeof(m=m||1.15)=="number"&&(rr=m),this},ua=d.__private__.getLineHeightFactor=d.getLineHeightFactor=function(){return rr};ao(e.lineHeight);var pn=d.__private__.getHorizontalCoordinate=function(m){return G(m)},mn=d.__private__.getVerticalCoordinate=function(m){return P===I?m:Qe[H].mediaBox.topRightY-Qe[H].mediaBox.bottomLeftY-G(m)},ha=d.__private__.getHorizontalCoordinateString=d.getHorizontalCoordinateString=function(m){return X(pn(m))},Oo=d.__private__.getVerticalCoordinateString=d.getVerticalCoordinateString=function(m){return X(mn(m))},ii=e.strokeColor||"0 G";d.__private__.getStrokeColor=d.getDrawColor=function(){return Br(ii)},d.__private__.setStrokeColor=d.setDrawColor=function(m,C,q,Z){return ii=wr({ch1:m,ch2:C,ch3:q,ch4:Z,pdfColorType:"draw",precision:2}),W(ii),this};var ki=e.fillColor||"0 g";d.__private__.getFillColor=d.getFillColor=function(){return Br(ki)},d.__private__.setFillColor=d.setFillColor=function(m,C,q,Z){return ki=wr({ch1:m,ch2:C,ch3:q,ch4:Z,pdfColorType:"fill",precision:2}),W(ki),this};var Un=e.textColor||"0 g",oi=d.__private__.getTextColor=d.getTextColor=function(){return Br(Un)};d.__private__.setTextColor=d.setTextColor=function(m,C,q,Z){return Un=wr({ch1:m,ch2:C,ch3:q,ch4:Z,pdfColorType:"text",precision:3}),this};var Li=e.charSpace,fa=d.__private__.getCharSpace=d.getCharSpace=function(){return parseFloat(Li||0)};d.__private__.setCharSpace=d.setCharSpace=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Li=m,this};var Nn=0;d.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},d.__private__.setLineCap=d.setLineCap=function(m){var C=d.CapJoinStyles[m];if(C===void 0)throw new Error("Line cap style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Nn=C,W(C+" J"),this};var Hn=0;d.__private__.setLineJoin=d.setLineJoin=function(m){var C=d.CapJoinStyles[m];if(C===void 0)throw new Error("Line join style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Hn=C,W(C+" j"),this},d.__private__.setLineMiterLimit=d.__private__.setMiterLimit=d.setLineMiterLimit=d.setMiterLimit=function(m){if(m=m||0,isNaN(m))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return W(X(G(m))+" M"),this},d.GState=nl,d.setGState=function(m){(m=typeof m=="string"?lt[Ht[m]]:so(null,m)).equals(Zt)||(W("/"+m.id+" gs"),Zt=m)};var so=function(m,C){if(!m||!Ht[m]){var q=!1;for(var Z in lt)if(lt.hasOwnProperty(Z)&&lt[Z].equals(C)){q=!0;break}if(q)C=lt[Z];else{var ae="GS"+(Object.keys(lt).length+1).toString(10);lt[ae]=C,C.id=ae}return m&&(Ht[m]=C.id),bt.publish("addGState",C),C}};d.addGState=function(m,C){return so(m,C),this},d.saveGraphicsState=function(){return W("q"),Nt.push({key:$e,size:Ne,color:Un}),this},d.restoreGraphicsState=function(){W("Q");var m=Nt.pop();return $e=m.key,Ne=m.size,Un=m.color,Zt=null,this},d.setCurrentTransformationMatrix=function(m){return W(m.toString()+" cm"),this},d.comment=function(m){return W("#"+m),this};var lo=function(m,C){var q=m||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return q},set:function(_e){isNaN(_e)||(q=parseFloat(_e))}});var Z=C||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return Z},set:function(_e){isNaN(_e)||(Z=parseFloat(_e))}});var ae="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return ae},set:function(_e){ae=_e.toString()}}),this},da=function(m,C,q,Z){lo.call(this,m,C),this.type="rect";var ae=q||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return ae},set:function(Le){isNaN(Le)||(ae=parseFloat(Le))}});var _e=Z||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return _e},set:function(Le){isNaN(Le)||(_e=parseFloat(Le))}}),this},Mo=function(){this.page=Et,this.currentPage=H,this.pages=Ae.slice(0),this.pagesContext=Qe.slice(0),this.x=Ve,this.y=At,this.matrix=yt,this.width=Za(H),this.height=ai(H),this.outputDestination=Pe,this.id="",this.objectNumber=-1};Mo.prototype.restore=function(){Et=this.page,H=this.currentPage,Qe=this.pagesContext,Ae=this.pages,Ve=this.x,At=this.y,yt=this.matrix,Ja(H,this.width),si(H,this.height),Pe=this.outputDestination};var pa=function(m,C,q,Z,ae){Jr.push(new Mo),Et=H=0,Ae=[],Ve=m,At=C,yt=ae,zn([q,Z])};for(var co in d.beginFormObject=function(m,C,q,Z,ae){return pa(m,C,q,Z,ae),this},d.endFormObject=function(m){return function(C){if(Zr[C])Jr.pop().restore();else{var q=new Mo,Z="Xo"+(Object.keys(pr).length+1).toString(10);q.id=Z,Zr[C]=Z,pr[Z]=q,bt.publish("addFormObject",q),Jr.pop().restore()}}(m),this},d.doFormObject=function(m,C){var q=pr[Zr[m]];return W("q"),W(C.toString()+" cm"),W("/"+q.id+" Do"),W("Q"),this},d.getFormObject=function(m){var C=pr[Zr[m]];return{x:C.x,y:C.y,width:C.width,height:C.height,matrix:C.matrix}},d.save=function(m,C){return m=m||"generated.pdf",(C=C||{}).returnPromise=C.returnPromise||!1,C.returnPromise===!1?(Co(kn(An()),m),typeof Co.unload=="function"&&nt.setTimeout&&setTimeout(Co.unload,911),this):new Promise(function(q,Z){try{var ae=Co(kn(An()),m);typeof Co.unload=="function"&&nt.setTimeout&&setTimeout(Co.unload,911),q(ae)}catch(_e){Z(_e.message)}})},Ye.API)Ye.API.hasOwnProperty(co)&&(co==="events"&&Ye.API.events.length?function(m,C){var q,Z,ae;for(ae=C.length-1;ae!==-1;ae--)q=C[ae][0],Z=C[ae][1],m.subscribe.apply(m,[q].concat(typeof Z=="function"?[Z]:Z))}(bt,Ye.API.events):d[co]=Ye.API[co]);function Za(m){return Qe[m].mediaBox.topRightX-Qe[m].mediaBox.bottomLeftX}function Ja(m,C){Qe[m].mediaBox.topRightX=C+Qe[m].mediaBox.bottomLeftX}function ai(m){return Qe[m].mediaBox.topRightY-Qe[m].mediaBox.bottomLeftY}function si(m,C){Qe[m].mediaBox.topRightY=C+Qe[m].mediaBox.bottomLeftY}var Qa=d.getPageWidth=function(m){return Za(m=m||H)/Je},Ka=d.setPageWidth=function(m,C){Ja(m,C*Je)},uo=d.getPageHeight=function(m){return ai(m=m||H)/Je},es=d.setPageHeight=function(m,C){si(m,C*Je)};return d.internal={pdfEscape:_r,getStyle:io,getFont:dn,getFontSize:je,getCharSpace:fa,getTextColor:oi,getLineHeight:Vr,getLineHeightFactor:ua,getLineWidth:et,write:ft,getHorizontalCoordinate:pn,getVerticalCoordinate:mn,getCoordinateString:ha,getVerticalCoordinateString:Oo,collections:{},newObject:qt,newAdditionalObject:Fn,newObjectDeferred:tr,newObjectDeferredBegin:hr,getFilters:Ur,putStream:yr,events:bt,scaleFactor:Je,pageSize:{getWidth:function(){return Qa(H)},setWidth:function(m){Ka(H,m)},getHeight:function(){return uo(H)},setHeight:function(m){es(H,m)}},encryptionOptions:p,encryption:Mt,getEncryptor:function(m){return p!==null?Mt.encryptor(m,0):function(C){return C}},output:Qr,getNumberOfPages:ti,pages:Ae,out:W,f2:E,f3:F,getPageInfo:ro,getPageInfoByObjId:no,getCurrentPageInfo:Po,getPDFVersion:S,Point:lo,Rectangle:da,Matrix:Ze,hasHotfix:ri},Object.defineProperty(d.internal.pageSize,"width",{get:function(){return Qa(H)},set:function(m){Ka(H,m)},enumerable:!0,configurable:!0}),Object.defineProperty(d.internal.pageSize,"height",{get:function(){return uo(H)},set:function(m){es(H,m)},enumerable:!0,configurable:!0}),(function(m){for(var C=0,q=qe.length;C<q;C++){var Z=Si.call(this,m[C][0],m[C][1],m[C][2],qe[C][3],!0);w===!1&&(_[Z]=!0);var ae=m[C][0].split("-");Cn({id:Z,fontName:ae[0],fontStyle:ae[1]||""})}bt.publish("addFonts",{fonts:Be,dictionary:at})}).call(d,qe),$e="F1",Ci(o,r),bt.publish("initialized"),d}Xo.prototype.lsbFirstWord=function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)},Xo.prototype.toHexString=function(e){return e.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Xo.prototype.hexToBytes=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(String.fromCharCode(parseInt(e.substr(r,2),16)));return t.join("")},Xo.prototype.processOwnerPassword=function(e,t){return Lc(kc(t).substr(0,5),e)},Xo.prototype.encryptor=function(e,t){var r=kc(this.encryptionKey+String.fromCharCode(255&e,e>>8&255,e>>16&255,255&t,t>>8&255)).substr(0,10);return function(n){return Lc(r,n)}},nl.prototype.equals=function(e){var t,r="id,objectNumber,equals";if(!e||Pt(e)!==Pt(this))return!1;var n=0;for(t in this)if(!(r.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!e.hasOwnProperty(t)||this[t]!==e[t])return!1;n++}for(t in e)e.hasOwnProperty(t)&&r.indexOf(t)<0&&n--;return n===0},Ye.API={events:[]},Ye.version="3.0.3";var er=Ye.API,Qc=1,Io=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Vo=function(e){return e.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},ht=function(e){return e.toFixed(2)},$i=function(e){return e.toFixed(5)};er.__acroform__={};var Xr=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e},rh=function(e){return e*Qc},Gn=function(e){var t=new v2,r=De.internal.getHeight(e)||0,n=De.internal.getWidth(e)||0;return t.BBox=[0,0,Number(ht(n)),Number(ht(r))],t},cv=er.__acroform__.setBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return e|1<<t},uv=er.__acroform__.clearBit=function(e,t){if(e=e||0,t=t||0,isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return e&~(1<<t)},hv=er.__acroform__.getBit=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return e&1<<t?1:0},sr=er.__acroform__.getBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return hv(e,t-1)},lr=er.__acroform__.setBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return cv(e,t-1)},cr=er.__acroform__.clearBitForPdf=function(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return uv(e,t-1)},fv=er.__acroform__.calculateCoordinates=function(e,t){var r=t.internal.getHorizontalCoordinate,n=t.internal.getVerticalCoordinate,o=e[0],a=e[1],l=e[2],c=e[3],h={};return h.lowerLeft_X=r(o)||0,h.lowerLeft_Y=n(a+c)||0,h.upperRight_X=r(o+l)||0,h.upperRight_Y=n(a)||0,[Number(ht(h.lowerLeft_X)),Number(ht(h.lowerLeft_Y)),Number(ht(h.upperRight_X)),Number(ht(h.upperRight_Y))]},dv=function(e){if(e.appearanceStreamContent)return e.appearanceStreamContent;if(e.V||e.DV){var t=[],r=e._V||e.DV,n=Nc(e,r),o=e.scope.internal.getFont(e.fontName,e.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(e.scope.__private__.encodeColorString(e.color)),t.push("/"+o+" "+ht(n.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(n.text),t.push("ET"),t.push("Q"),t.push("EMC");var a=Gn(e);return a.scope=e.scope,a.stream=t.join(`
`),a}},Nc=function(e,t){var r=e.fontSize===0?e.maxFontSize:e.fontSize,n={text:"",fontSize:""},o=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");o=e.multiline?o.map(function(E){return E.split(`
`)}):o.map(function(E){return[E]});var a=r,l=De.internal.getHeight(e)||0;l=l<0?-l:l;var c=De.internal.getWidth(e)||0;c=c<0?-c:c;var h=function(E,F,G){if(E+1<o.length){var $=F+" "+o[E+1][0];return zs($,e,G).width<=c-4}return!1};a++;e:for(;a>0;){t="",a--;var f,p,w=zs("3",e,a).height,_=e.multiline?l-a:(l-w)/2,d=_+=2,b=0,S=0,k=0;if(a<=0){t=`(...) Tj
`,t+="% Width of Text: "+zs(t,e,a=12).width+", FieldWidth:"+c+`
`;break}for(var y="",R=0,I=0;I<o.length;I++)if(o.hasOwnProperty(I)){var P=!1;if(o[I].length!==1&&k!==o[I].length-1){if((w+2)*(R+2)+2>l)continue e;y+=o[I][k],P=!0,S=I,I--}else{y=(y+=o[I][k]+" ").substr(y.length-1)==" "?y.substr(0,y.length-1):y;var Y=parseInt(I),K=h(Y,y,a),ne=I>=o.length-1;if(K&&!ne){y+=" ",k=0;continue}if(K||ne){if(ne)S=Y;else if(e.multiline&&(w+2)*(R+2)+2>l)continue e}else{if(!e.multiline||(w+2)*(R+2)+2>l)continue e;S=Y}}for(var X="",M=b;M<=S;M++){var J=o[M];if(e.multiline){if(M===S){X+=J[k]+" ",k=(k+1)%J.length;continue}if(M===b){X+=J[J.length-1]+" ";continue}}X+=J[0]+" "}switch(X=X.substr(X.length-1)==" "?X.substr(0,X.length-1):X,p=zs(X,e,a).width,e.textAlign){case"right":f=c-p-2;break;case"center":f=(c-p)/2;break;default:f=2}t+=ht(f)+" "+ht(d)+` Td
`,t+="("+Io(X)+`) Tj
`,t+=-ht(f)+` 0 Td
`,d=-(a+2),p=0,b=P?S:S+1,R++,y=""}break}return n.text=t,n.fontSize=a,n},zs=function(e,t,r){var n=t.scope.internal.getFont(t.fontName,t.fontStyle),o=t.scope.getStringUnitWidth(e,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:t.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:o}},pv={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},mv=function(e,t){var r={type:"reference",object:e};t.internal.getPageInfo(e.page).pageContext.annotations.find(function(n){return n.type===r.type&&n.object===r.object})===void 0&&t.internal.getPageInfo(e.page).pageContext.annotations.push(r)},gv=function(e,t){if(t.scope=e,e.internal!==void 0&&(e.internal.acroformPlugin===void 0||e.internal.acroformPlugin.isInitialized===!1)){if(On.FieldNum=0,e.internal.acroformPlugin=JSON.parse(JSON.stringify(pv)),e.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");Qc=e.internal.scaleFactor,e.internal.acroformPlugin.acroFormDictionaryRoot=new b2,e.internal.acroformPlugin.acroFormDictionaryRoot.scope=e,e.internal.acroformPlugin.acroFormDictionaryRoot._eventID=e.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(e)}),e.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var n=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o];a.objId=void 0,a.hasAnnotation&&mv(a,r)}})(e)}),e.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(e)}),e.internal.events.subscribe("postPutPages",function(r){(function(n,o){var a=!n;for(var l in n||(o.internal.newObjectDeferredBegin(o.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),o.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),n=n||o.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(n.hasOwnProperty(l)){var c=n[l],h=[],f=c.Rect;if(c.Rect&&(c.Rect=fv(c.Rect,o)),o.internal.newObjectDeferredBegin(c.objId,!0),c.DA=De.createDefaultAppearanceStream(c),Pt(c)==="object"&&typeof c.getKeyValueListForStream=="function"&&(h=c.getKeyValueListForStream()),c.Rect=f,c.hasAppearanceStream&&!c.appearanceStreamContent){var p=dv(c);h.push({key:"AP",value:"<</N "+p+">>"}),o.internal.acroformPlugin.xForms.push(p)}if(c.appearanceStreamContent){var w="";for(var _ in c.appearanceStreamContent)if(c.appearanceStreamContent.hasOwnProperty(_)){var d=c.appearanceStreamContent[_];if(w+="/"+_+" ",w+="<<",Object.keys(d).length>=1||Array.isArray(d)){for(var l in d)if(d.hasOwnProperty(l)){var b=d[l];typeof b=="function"&&(b=b.call(o,c)),w+="/"+l+" "+b+" ",o.internal.acroformPlugin.xForms.indexOf(b)>=0||o.internal.acroformPlugin.xForms.push(b)}}else typeof(b=d)=="function"&&(b=b.call(o,c)),w+="/"+l+" "+b,o.internal.acroformPlugin.xForms.indexOf(b)>=0||o.internal.acroformPlugin.xForms.push(b);w+=">>"}h.push({key:"AP",value:`<<
`+w+">>"})}o.internal.putStream({additionalKeyValues:h,objectId:c.objId}),o.internal.out("endobj")}a&&function(S,k){for(var y in S)if(S.hasOwnProperty(y)){var R=y,I=S[y];k.internal.newObjectDeferredBegin(I.objId,!0),Pt(I)==="object"&&typeof I.putStream=="function"&&I.putStream(),delete S[R]}}(o.internal.acroformPlugin.xForms,o)})(r,e)}),e.internal.acroformPlugin.isInitialized=!0}},g2=er.__acroform__.arrayToPdfArray=function(e,t,r){var n=function(l){return l};if(Array.isArray(e)){for(var o="[",a=0;a<e.length;a++)switch(a!==0&&(o+=" "),Pt(e[a])){case"boolean":case"number":case"object":o+=e[a].toString();break;case"string":e[a].substr(0,1)!=="/"?(t!==void 0&&r&&(n=r.internal.getEncryptor(t)),o+="("+Io(n(e[a].toString()))+")"):o+=e[a].toString()}return o+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},rc=function(e,t,r){var n=function(o){return o};return t!==void 0&&r&&(n=r.internal.getEncryptor(t)),(e=e||"").toString(),"("+Io(n(e))+")"},Xn=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(e){this._objId=e}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Xn.prototype.toString=function(){return this.objId+" 0 R"},Xn.prototype.putStream=function(){var e=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:e,objectId:this.objId}),this.scope.internal.out("endobj")},Xn.prototype.getKeyValueListForStream=function(){var e=[],t=Object.getOwnPropertyNames(this).filter(function(a){return a!="content"&&a!="appearanceStreamContent"&&a!="scope"&&a!="objId"&&a.substring(0,1)!="_"});for(var r in t)if(Object.getOwnPropertyDescriptor(this,t[r]).configurable===!1){var n=t[r],o=this[n];o&&(Array.isArray(o)?e.push({key:n,value:g2(o,this.objId,this.scope)}):o instanceof Xn?(o.scope=this.scope,e.push({key:n,value:o.objId+" 0 R"})):typeof o!="function"&&e.push({key:n,value:o}))}return e};var v2=function(){Xn.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var e,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(r){t=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){e=r.trim()},get:function(){return e||null}})};Xr(v2,Xn);var b2=function(){Xn.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e){var r=function(n){return n};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+Io(r(e))+")"}},set:function(r){e=r}})};Xr(b2,Xn);var On=function e(){Xn.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute F supplied.');t=y}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!sr(t,3)},set:function(y){y?this.F=lr(t,3):this.F=cr(t,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(y){if(isNaN(y))throw new Error('Invalid value "'+y+'" for attribute Ff supplied.');r=y}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(n.length!==0)return n},set:function(y){n=y!==void 0?y:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(y){n[0]=y}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(y){n[1]=y}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(y){n[2]=y}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(y){n[3]=y}});var o="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return o},set:function(y){switch(y){case"/Btn":case"/Tx":case"/Ch":case"/Sig":o=y;break;default:throw new Error('Invalid value "'+y+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof il)return;a="FieldObject"+e.FieldNum++}var y=function(R){return R};return this.scope&&(y=this.scope.internal.getEncryptor(this.objId)),"("+Io(y(a))+")"},set:function(y){a=y.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(y){a=y}});var l="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return l},set:function(y){l=y}});var c="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return c},set:function(y){c=y}});var h=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return h},set:function(y){h=y}});var f=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return f===void 0?50/Qc:f},set:function(y){f=y}});var p="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return p},set:function(y){p=y}});var w="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!w||this instanceof il||this instanceof ko))return rc(w,this.objId,this.scope)},set:function(y){y=y.toString(),w=y}});var _=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(_)return this instanceof Sr==0?rc(_,this.objId,this.scope):_},set:function(y){y=y.toString(),_=this instanceof Sr==0?y.substr(0,1)==="("?Vo(y.substr(1,y.length-2)):Vo(y):y}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof Sr==1?Vo(_.substr(1,_.length-1)):_},set:function(y){y=y.toString(),_=this instanceof Sr==1?"/"+y:y}});var d=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(d)return d},set:function(y){this.V=y}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(d)return this instanceof Sr==0?rc(d,this.objId,this.scope):d},set:function(y){y=y.toString(),d=this instanceof Sr==0?y.substr(0,1)==="("?Vo(y.substr(1,y.length-2)):Vo(y):y}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof Sr==1?Vo(d.substr(1,d.length-1)):d},set:function(y){y=y.toString(),d=this instanceof Sr==1?"/"+y:y}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var b,S=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return S},set:function(y){y=!!y,S=y}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(b)return b},set:function(y){b=y}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,1)},set:function(y){y?this.Ff=lr(this.Ff,1):this.Ff=cr(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,2)},set:function(y){y?this.Ff=lr(this.Ff,2):this.Ff=cr(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,3)},set:function(y){y?this.Ff=lr(this.Ff,3):this.Ff=cr(this.Ff,3)}});var k=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(k!==null)return k},set:function(y){if([0,1,2].indexOf(y)===-1)throw new Error('Invalid value "'+y+'" for attribute Q supplied.');k=y}}),Object.defineProperty(this,"textAlign",{get:function(){var y;switch(k){case 0:default:y="left";break;case 1:y="center";break;case 2:y="right"}return y},configurable:!0,enumerable:!0,set:function(y){switch(y){case"right":case 2:k=2;break;case"center":case 1:k=1;break;default:k=0}}})};Xr(On,Xn);var Qo=function(){On.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(r){e=r}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return g2(t,this.objId,this.scope)},set:function(r){var n,o;o=[],typeof(n=r)=="string"&&(o=function(a,l,c){c||(c=1);for(var h,f=[];h=l.exec(a);)f.push(h[c]);return f}(n,/\((.*?)\)/g)),t=o}}),this.getOptions=function(){return t},this.setOptions=function(r){t=r,this.sort&&t.sort()},this.addOption=function(r){r=(r=r||"").toString(),t.push(r),this.sort&&t.sort()},this.removeOption=function(r,n){for(n=n||!1,r=(r=r||"").toString();t.indexOf(r)!==-1&&(t.splice(t.indexOf(r),1),n!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,18)},set:function(r){r?this.Ff=lr(this.Ff,18):this.Ff=cr(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=lr(this.Ff,19):this.Ff=cr(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,20)},set:function(r){r?(this.Ff=lr(this.Ff,20),t.sort()):this.Ff=cr(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,22)},set:function(r){r?this.Ff=lr(this.Ff,22):this.Ff=cr(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,23)},set:function(r){r?this.Ff=lr(this.Ff,23):this.Ff=cr(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,27)},set:function(r){r?this.Ff=lr(this.Ff,27):this.Ff=cr(this.Ff,27)}}),this.hasAppearanceStream=!1};Xr(Qo,On);var Ko=function(){Qo.call(this),this.fontName="helvetica",this.combo=!1};Xr(Ko,Qo);var ea=function(){Ko.call(this),this.combo=!0};Xr(ea,Ko);var Ys=function(){ea.call(this),this.edit=!0};Xr(Ys,ea);var Sr=function(){On.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,15)},set:function(r){r?this.Ff=lr(this.Ff,15):this.Ff=cr(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,16)},set:function(r){r?this.Ff=lr(this.Ff,16):this.Ff=cr(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,17)},set:function(r){r?this.Ff=lr(this.Ff,17):this.Ff=cr(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,26)},set:function(r){r?this.Ff=lr(this.Ff,26):this.Ff=cr(this.Ff,26)}});var e,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(a){return a};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var n,o=[];for(n in o.push("<<"),t)o.push("/"+n+" ("+Io(r(t[n]))+")");return o.push(">>"),o.join(`
`)}},set:function(r){Pt(r)==="object"&&(t=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(r){typeof r=="string"&&(t.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(r){e=r}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(r){e="/"+r}})};Xr(Sr,On);var Xs=function(){Sr.call(this),this.pushButton=!0};Xr(Xs,Sr);var ta=function(){Sr.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t!==void 0?t:[]}})};Xr(ta,Sr);var il=function(){var e,t;On.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(o){e=o}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(o){t=o}});var r,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var o=function(c){return c};this.scope&&(o=this.scope.internal.getEncryptor(this.objId));var a,l=[];for(a in l.push("<<"),n)l.push("/"+a+" ("+Io(o(n[a]))+")");return l.push(">>"),l.join(`
`)},set:function(o){Pt(o)==="object"&&(n=o)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(o){typeof o=="string"&&(n.CA=o)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(o){r=o}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(o){r="/"+o}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=De.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};Xr(il,On),ta.prototype.setAppearance=function(e){if(!("createAppearanceStream"in e)||!("getCA"in e))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var r=this.Kids[t];r.appearanceStreamContent=e.createAppearanceStream(r.optionName),r.caption=e.getCA()}},ta.prototype.createOption=function(e){var t=new il;return t.Parent=this,t.optionName=e,this.Kids.push(t),vv.call(this.scope,t),t};var Zs=function(){Sr.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=De.CheckBox.createAppearanceStream()};Xr(Zs,Sr);var ko=function(){On.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,13)},set:function(t){t?this.Ff=lr(this.Ff,13):this.Ff=cr(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,21)},set:function(t){t?this.Ff=lr(this.Ff,21):this.Ff=cr(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,23)},set:function(t){t?this.Ff=lr(this.Ff,23):this.Ff=cr(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,24)},set:function(t){t?this.Ff=lr(this.Ff,24):this.Ff=cr(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,25)},set:function(t){t?this.Ff=lr(this.Ff,25):this.Ff=cr(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,26)},set:function(t){t?this.Ff=lr(this.Ff,26):this.Ff=cr(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};Xr(ko,On);var Js=function(){ko.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!sr(this.Ff,14)},set:function(e){e?this.Ff=lr(this.Ff,14):this.Ff=cr(this.Ff,14)}}),this.password=!0};Xr(Js,ko);var De={CheckBox:{createAppearanceStream:function(){return{N:{On:De.CheckBox.YesNormal},D:{On:De.CheckBox.YesPushDown,Off:De.CheckBox.OffPushDown}}},YesPushDown:function(e){var t=Gn(e);t.scope=e.scope;var r=[],n=e.scope.internal.getFont(e.fontName,e.fontStyle).id,o=e.scope.__private__.encodeColorString(e.color),a=Nc(e,e.caption);return r.push("0.749023 g"),r.push("0 0 "+ht(De.internal.getWidth(e))+" "+ht(De.internal.getHeight(e))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+ht(a.fontSize)+" Tf "+o),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),t.stream=r.join(`
`),t},YesNormal:function(e){var t=Gn(e);t.scope=e.scope;var r=e.scope.internal.getFont(e.fontName,e.fontStyle).id,n=e.scope.__private__.encodeColorString(e.color),o=[],a=De.internal.getHeight(e),l=De.internal.getWidth(e),c=Nc(e,e.caption);return o.push("1 g"),o.push("0 0 "+ht(l)+" "+ht(a)+" re"),o.push("f"),o.push("q"),o.push("0 0 1 rg"),o.push("0 0 "+ht(l-1)+" "+ht(a-1)+" re"),o.push("W"),o.push("n"),o.push("0 g"),o.push("BT"),o.push("/"+r+" "+ht(c.fontSize)+" Tf "+n),o.push(c.text),o.push("ET"),o.push("Q"),t.stream=o.join(`
`),t},OffPushDown:function(e){var t=Gn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ht(De.internal.getWidth(e))+" "+ht(De.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(e){var t={D:{Off:De.RadioButton.Circle.OffPushDown},N:{}};return t.N[e]=De.RadioButton.Circle.YesNormal,t.D[e]=De.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(e){var t=Gn(e);t.scope=e.scope;var r=[],n=De.internal.getWidth(e)<=De.internal.getHeight(e)?De.internal.getWidth(e)/4:De.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=De.internal.Bezier_C,a=Number((n*o).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+$i(De.internal.getWidth(e)/2)+" "+$i(De.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Gn(e);t.scope=e.scope;var r=[],n=De.internal.getWidth(e)<=De.internal.getHeight(e)?De.internal.getWidth(e)/4:De.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*De.internal.Bezier_C).toFixed(5)),l=Number((n*De.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+$i(De.internal.getWidth(e)/2)+" "+$i(De.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+$i(De.internal.getWidth(e)/2)+" "+$i(De.internal.getHeight(e)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+l+" "+l+" "+n+" 0 "+n+" c"),r.push("-"+l+" "+n+" -"+n+" "+l+" -"+n+" 0 c"),r.push("-"+n+" -"+l+" -"+l+" -"+n+" 0 -"+n+" c"),r.push(l+" -"+n+" "+n+" -"+l+" "+n+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(e){var t=Gn(e);t.scope=e.scope;var r=[],n=De.internal.getWidth(e)<=De.internal.getHeight(e)?De.internal.getWidth(e)/4:De.internal.getHeight(e)/4;n=Number((.9*n).toFixed(5));var o=Number((2*n).toFixed(5)),a=Number((o*De.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+$i(De.internal.getWidth(e)/2)+" "+$i(De.internal.getHeight(e)/2)+" cm"),r.push(o+" 0 m"),r.push(o+" "+a+" "+a+" "+o+" 0 "+o+" c"),r.push("-"+a+" "+o+" -"+o+" "+a+" -"+o+" 0 c"),r.push("-"+o+" -"+a+" -"+a+" -"+o+" 0 -"+o+" c"),r.push(a+" -"+o+" "+o+" -"+a+" "+o+" 0 c"),r.push("f"),r.push("Q"),t.stream=r.join(`
`),t}},Cross:{createAppearanceStream:function(e){var t={D:{Off:De.RadioButton.Cross.OffPushDown},N:{}};return t.N[e]=De.RadioButton.Cross.YesNormal,t.D[e]=De.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(e){var t=Gn(e);t.scope=e.scope;var r=[],n=De.internal.calculateCross(e);return r.push("q"),r.push("1 1 "+ht(De.internal.getWidth(e)-2)+" "+ht(De.internal.getHeight(e)-2)+" re"),r.push("W"),r.push("n"),r.push(ht(n.x1.x)+" "+ht(n.x1.y)+" m"),r.push(ht(n.x2.x)+" "+ht(n.x2.y)+" l"),r.push(ht(n.x4.x)+" "+ht(n.x4.y)+" m"),r.push(ht(n.x3.x)+" "+ht(n.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},YesPushDown:function(e){var t=Gn(e);t.scope=e.scope;var r=De.internal.calculateCross(e),n=[];return n.push("0.749023 g"),n.push("0 0 "+ht(De.internal.getWidth(e))+" "+ht(De.internal.getHeight(e))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+ht(De.internal.getWidth(e)-2)+" "+ht(De.internal.getHeight(e)-2)+" re"),n.push("W"),n.push("n"),n.push(ht(r.x1.x)+" "+ht(r.x1.y)+" m"),n.push(ht(r.x2.x)+" "+ht(r.x2.y)+" l"),n.push(ht(r.x4.x)+" "+ht(r.x4.y)+" m"),n.push(ht(r.x3.x)+" "+ht(r.x3.y)+" l"),n.push("s"),n.push("Q"),t.stream=n.join(`
`),t},OffPushDown:function(e){var t=Gn(e);t.scope=e.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+ht(De.internal.getWidth(e))+" "+ht(De.internal.getHeight(e))+" re"),r.push("f"),t.stream=r.join(`
`),t}}},createDefaultAppearanceStream:function(e){var t=e.scope.internal.getFont(e.fontName,e.fontStyle).id,r=e.scope.__private__.encodeColorString(e.color);return"/"+t+" "+e.fontSize+" Tf "+r}};De.internal={Bezier_C:.551915024494,calculateCross:function(e){var t=De.internal.getWidth(e),r=De.internal.getHeight(e),n=Math.min(t,r);return{x1:{x:(t-n)/2,y:(r-n)/2+n},x2:{x:(t-n)/2+n,y:(r-n)/2},x3:{x:(t-n)/2,y:(r-n)/2},x4:{x:(t-n)/2+n,y:(r-n)/2+n}}}},De.internal.getWidth=function(e){var t=0;return Pt(e)==="object"&&(t=rh(e.Rect[2])),t},De.internal.getHeight=function(e){var t=0;return Pt(e)==="object"&&(t=rh(e.Rect[3])),t};var vv=er.addField=function(e){if(gv(this,e),!(e instanceof On))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=e).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),e.page=e.scope.internal.getCurrentPageInfo().pageNumber,this};er.AcroFormChoiceField=Qo,er.AcroFormListBox=Ko,er.AcroFormComboBox=ea,er.AcroFormEditBox=Ys,er.AcroFormButton=Sr,er.AcroFormPushButton=Xs,er.AcroFormRadioButton=ta,er.AcroFormCheckBox=Zs,er.AcroFormTextField=ko,er.AcroFormPasswordField=Js,er.AcroFormAppearance=De,er.AcroForm={ChoiceField:Qo,ListBox:Ko,ComboBox:ea,EditBox:Ys,Button:Sr,PushButton:Xs,RadioButton:ta,CheckBox:Zs,TextField:ko,PasswordField:Js,Appearance:De},Ye.AcroForm={ChoiceField:Qo,ListBox:Ko,ComboBox:ea,EditBox:Ys,Button:Sr,PushButton:Xs,RadioButton:ta,CheckBox:Zs,TextField:ko,PasswordField:Js,Appearance:De};Ye.AcroForm;function x2(e){return e.reduce(function(t,r,n){return t[r]=n,t},{})}(function(e){var t="addImage_";e.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},o=e.__addimage__.getImageFileTypeByImageData=function(E,F){var G,$,oe,se,pe,ee=r;if((F=F||r)==="RGBA"||E.data!==void 0&&E.data instanceof Uint8ClampedArray&&"height"in E&&"width"in E)return"RGBA";if(K(E))for(pe in n)for(oe=n[pe],G=0;G<oe.length;G+=1){for(se=!0,$=0;$<oe[G].length;$+=1)if(oe[G][$]!==void 0&&oe[G][$]!==E[$]){se=!1;break}if(se===!0){ee=pe;break}}else for(pe in n)for(oe=n[pe],G=0;G<oe.length;G+=1){for(se=!0,$=0;$<oe[G].length;$+=1)if(oe[G][$]!==void 0&&oe[G][$]!==E.charCodeAt($)){se=!1;break}if(se===!0){ee=pe;break}}return ee===r&&F!==r&&(ee=F),ee},a=function E(F){for(var G=this.internal.write,$=this.internal.putStream,oe=(0,this.internal.getFilters)();oe.indexOf("FlateEncode")!==-1;)oe.splice(oe.indexOf("FlateEncode"),1);F.objectId=this.internal.newObject();var se=[];if(se.push({key:"Type",value:"/XObject"}),se.push({key:"Subtype",value:"/Image"}),se.push({key:"Width",value:F.width}),se.push({key:"Height",value:F.height}),F.colorSpace===y.INDEXED?se.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(F.palette.length/3-1)+" "+("sMask"in F&&F.sMask!==void 0?F.objectId+2:F.objectId+1)+" 0 R]"}):(se.push({key:"ColorSpace",value:"/"+F.colorSpace}),F.colorSpace===y.DEVICE_CMYK&&se.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),se.push({key:"BitsPerComponent",value:F.bitsPerComponent}),"decodeParameters"in F&&F.decodeParameters!==void 0&&se.push({key:"DecodeParms",value:"<<"+F.decodeParameters+">>"}),"transparency"in F&&Array.isArray(F.transparency)&&F.transparency.length>0){for(var pe="",ee=0,le=F.transparency.length;ee<le;ee++)pe+=F.transparency[ee]+" "+F.transparency[ee]+" ";se.push({key:"Mask",value:"["+pe+"]"})}F.sMask!==void 0&&se.push({key:"SMask",value:F.objectId+1+" 0 R"});var Ce=F.filter!==void 0?["/"+F.filter]:void 0;if($({data:F.data,additionalKeyValues:se,alreadyAppliedFilters:Ce,objectId:F.objectId}),G("endobj"),"sMask"in F&&F.sMask!==void 0){var be,L=(be=F.sMaskBitsPerComponent)!==null&&be!==void 0?be:F.bitsPerComponent,H={width:F.width,height:F.height,colorSpace:"DeviceGray",bitsPerComponent:L,data:F.sMask};"filter"in F&&(H.decodeParameters="/Predictor ".concat(F.predictor," /Colors 1 /BitsPerComponent ").concat(L," /Columns ").concat(F.width),H.filter=F.filter),E.call(this,H)}if(F.colorSpace===y.INDEXED){var V=this.internal.newObject();$({data:X(new Uint8Array(F.palette)),objectId:V}),G("endobj")}},l=function(){var E=this.internal.collections[t+"images"];for(var F in E)a.call(this,E[F])},c=function(){var E,F=this.internal.collections[t+"images"],G=this.internal.write;for(var $ in F)G("/I"+(E=F[$]).index,E.objectId,"0","R")},h=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",l),this.internal.events.subscribe("putXobjectDict",c))},f=function(){var E=this.internal.collections[t+"images"];return h.call(this),E},p=function(){return Object.keys(this.internal.collections[t+"images"]).length},w=function(E){return typeof e["process"+E.toUpperCase()]=="function"},_=function(E){return Pt(E)==="object"&&E.nodeType===1},d=function(E,F){if(E.nodeName==="IMG"&&E.hasAttribute("src")){var G=""+E.getAttribute("src");if(G.indexOf("data:image/")===0)return Gs(unescape(G).split("base64,").pop());var $=e.loadFile(G,!0);if($!==void 0)return $}if(E.nodeName==="CANVAS"){if(E.width===0||E.height===0)throw new Error("Given canvas must have data. Canvas width: "+E.width+", height: "+E.height);var oe;switch(F){case"PNG":oe="image/png";break;case"WEBP":oe="image/webp";break;default:oe="image/jpeg"}return Gs(E.toDataURL(oe,1).split("base64,").pop())}},b=function(E){var F=this.internal.collections[t+"images"];if(F){for(var G in F)if(E===F[G].alias)return F[G]}},S=function(E,F,G){return E||F||(E=-96,F=-96),E<0&&(E=-1*G.width*72/E/this.internal.scaleFactor),F<0&&(F=-1*G.height*72/F/this.internal.scaleFactor),E===0&&(E=F*G.width/G.height),F===0&&(F=E*G.height/G.width),[E,F]},k=function(E,F,G,$,oe,se){var pe=S.call(this,G,$,oe),ee=this.internal.getCoordinateString,le=this.internal.getVerticalCoordinateString,Ce=f.call(this);if(G=pe[0],$=pe[1],Ce[oe.index]=oe,se){se*=Math.PI/180;var be=Math.cos(se),L=Math.sin(se),H=function(Q){return Q.toFixed(4)},V=[H(be),H(L),H(-1*L),H(be),0,0,"cm"]}this.internal.write("q"),se?(this.internal.write([1,"0","0",1,ee(E),le(F+$),"cm"].join(" ")),this.internal.write(V.join(" ")),this.internal.write([ee(G),"0","0",ee($),"0","0","cm"].join(" "))):this.internal.write([ee(G),"0","0",ee($),ee(E),le(F+$),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+oe.index+" Do"),this.internal.write("Q")},y=e.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};e.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var R=e.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},I=e.__addimage__.sHashCode=function(E){var F,G,$=0;if(typeof E=="string")for(G=E.length,F=0;F<G;F++)$=($<<5)-$+E.charCodeAt(F),$|=0;else if(K(E))for(G=E.byteLength/2,F=0;F<G;F++)$=($<<5)-$+E[F],$|=0;return $},P=e.__addimage__.validateStringAsBase64=function(E){(E=E||"").toString().trim();var F=!0;return E.length===0&&(F=!1),E.length%4!=0&&(F=!1),/^[A-Za-z0-9+/]+$/.test(E.substr(0,E.length-2))===!1&&(F=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(E.substr(-2))===!1&&(F=!1),F},Y=e.__addimage__.extractImageFromDataUrl=function(E){if(E==null||!(E=E.trim()).startsWith("data:"))return null;var F=E.indexOf(",");return F<0?null:E.substring(0,F).trim().endsWith("base64")?E.substring(F+1):null};e.__addimage__.isArrayBuffer=function(E){return E instanceof ArrayBuffer};var K=e.__addimage__.isArrayBufferView=function(E){return E instanceof Int8Array||E instanceof Uint8Array||E instanceof Uint8ClampedArray||E instanceof Int16Array||E instanceof Uint16Array||E instanceof Int32Array||E instanceof Uint32Array||E instanceof Float32Array||E instanceof Float64Array},ne=e.__addimage__.binaryStringToUint8Array=function(E){for(var F=E.length,G=new Uint8Array(F),$=0;$<F;$++)G[$]=E.charCodeAt($);return G},X=e.__addimage__.arrayBufferToBinaryString=function(E){for(var F="",G=K(E)?E:new Uint8Array(E),$=0;$<G.length;$+=8192)F+=String.fromCharCode.apply(null,G.subarray($,$+8192));return F};e.addImage=function(){var E,F,G,$,oe,se,pe,ee,le;if(typeof arguments[1]=="number"?(F=r,G=arguments[1],$=arguments[2],oe=arguments[3],se=arguments[4],pe=arguments[5],ee=arguments[6],le=arguments[7]):(F=arguments[1],G=arguments[2],$=arguments[3],oe=arguments[4],se=arguments[5],pe=arguments[6],ee=arguments[7],le=arguments[8]),Pt(E=arguments[0])==="object"&&!_(E)&&"imageData"in E){var Ce=E;E=Ce.imageData,F=Ce.format||F||r,G=Ce.x||G||0,$=Ce.y||$||0,oe=Ce.w||Ce.width||oe,se=Ce.h||Ce.height||se,pe=Ce.alias||pe,ee=Ce.compression||ee,le=Ce.rotation||Ce.angle||le}var be=this.internal.getFilters();if(ee===void 0&&be.indexOf("FlateEncode")!==-1&&(ee="SLOW"),isNaN(G)||isNaN($))throw new Error("Invalid coordinates passed to jsPDF.addImage");h.call(this);var L=M.call(this,E,F,pe,ee);return k.call(this,G,$,oe,se,L,le),this};var M=function(E,F,G,$){var oe,se,pe;if(typeof E=="string"&&o(E)===r){E=unescape(E);var ee=J(E,!1);(ee!==""||(ee=e.loadFile(E,!0))!==void 0)&&(E=ee)}if(_(E)&&(E=d(E,F)),F=o(E,F),!w(F))throw new Error("addImage does not support files of type '"+F+"', please ensure that a plugin for '"+F+"' support is added.");if(((pe=G)==null||pe.length===0)&&(G=function(le){return typeof le=="string"||K(le)?I(le):K(le.data)?I(le.data):null}(E)),(oe=b.call(this,G))||(E instanceof Uint8Array||F==="RGBA"||(se=E,E=ne(E)),oe=this["process"+F.toUpperCase()](E,p.call(this),G,function(le){return le&&typeof le=="string"&&(le=le.toUpperCase()),le in e.image_compression?le:R.NONE}($),se)),!oe)throw new Error("An unknown error occurred whilst processing the image.");return oe},J=e.__addimage__.convertBase64ToBinaryString=function(E,F){F=typeof F!="boolean"||F;var G,$="";if(typeof E=="string"){var oe;G=(oe=Y(E))!==null&&oe!==void 0?oe:E;try{$=Gs(G)}catch(se){if(F)throw P(G)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+se.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return $};e.getImageProperties=function(E){var F,G,$="";if(_(E)&&(E=d(E)),typeof E=="string"&&o(E)===r&&(($=J(E,!1))===""&&($=e.loadFile(E)||""),E=$),G=o(E),!w(G))throw new Error("addImage does not support files of type '"+G+"', please ensure that a plugin for '"+G+"' support is added.");if(E instanceof Uint8Array||(E=ne(E)),!(F=this["process"+G.toUpperCase()](E)))throw new Error("An unknown error occurred whilst processing the image");return F.fileType=G,F}})(Ye.API),function(e){var t=function(r){if(r!==void 0&&r!="")return!0};Ye.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(r){for(var n,o,a,l=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,h=this.internal.getPageInfoByObjId(r.objId),f=r.pageContext.annotations,p=!1,w=0;w<f.length&&!p;w++)switch((n=f[w]).type){case"link":(t(n.options.url)||t(n.options.pageNumber))&&(p=!0);break;case"reference":case"text":case"freetext":p=!0}if(p!=0){this.internal.write("/Annots [");for(var _=0;_<f.length;_++){n=f[_];var d=this.internal.pdfEscape,b=this.internal.getEncryptor(r.objId);switch(n.type){case"reference":this.internal.write(" "+n.object.objId+" 0 R ");break;case"text":var S=this.internal.newAdditionalObject(),k=this.internal.newAdditionalObject(),y=this.internal.getEncryptor(S.objId),R=n.title||"Note";a="<</Type /Annot /Subtype /Text "+(o="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y)+"] ")+"/Contents ("+d(y(n.contents))+")",a+=" /Popup "+k.objId+" 0 R",a+=" /P "+h.objId+" 0 R",a+=" /T ("+d(y(R))+") >>",S.content=a;var I=S.objId+" 0 R";a="<</Type /Annot /Subtype /Popup "+(o="/Rect ["+l(n.bounds.x+30)+" "+c(n.bounds.y+n.bounds.h)+" "+l(n.bounds.x+n.bounds.w+30)+" "+c(n.bounds.y)+"] ")+" /Parent "+I,n.open&&(a+=" /Open true"),a+=" >>",k.content=a,this.internal.write(S.objId,"0 R",k.objId,"0 R");break;case"freetext":o="/Rect ["+l(n.bounds.x)+" "+c(n.bounds.y)+" "+l(n.bounds.x+n.bounds.w)+" "+c(n.bounds.y+n.bounds.h)+"] ";var P=n.color||"#000000";a="<</Type /Annot /Subtype /FreeText "+o+"/Contents ("+d(b(n.contents))+")",a+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+P+")",a+=" /Border [0 0 0]",a+=" >>",this.internal.write(a);break;case"link":if(n.options.name){var Y=this.annotations._nameMap[n.options.name];n.options.pageNumber=Y.page,n.options.top=Y.y}else n.options.top||(n.options.top=0);if(o="/Rect ["+n.finalBounds.x+" "+n.finalBounds.y+" "+n.finalBounds.w+" "+n.finalBounds.h+"] ",a="",n.options.url)a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /A <</S /URI /URI ("+d(b(n.options.url))+") >>";else if(n.options.pageNumber)switch(a="<</Type /Annot /Subtype /Link "+o+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(n.options.pageNumber).objId+" 0 R",n.options.magFactor=n.options.magFactor||"XYZ",n.options.magFactor){case"Fit":a+=" /Fit]";break;case"FitH":a+=" /FitH "+n.options.top+"]";break;case"FitV":n.options.left=n.options.left||0,a+=" /FitV "+n.options.left+"]";break;default:var K=c(n.options.top);n.options.left=n.options.left||0,n.options.zoom===void 0&&(n.options.zoom=0),a+=" /XYZ "+n.options.left+" "+K+" "+n.options.zoom+"]"}a!=""&&(a+=" >>",this.internal.write(a))}}this.internal.write("]")}}]),e.createAnnotation=function(r){var n=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":n.pageContext.annotations.push(r)}},e.link=function(r,n,o,a,l){var c=this.internal.getCurrentPageInfo(),h=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString;c.pageContext.annotations.push({finalBounds:{x:h(r),y:f(n),w:h(r+o),h:f(n+a)},options:l,type:"link"})},e.textWithLink=function(r,n,o,a){var l,c,h=this.getTextWidth(r),f=this.internal.getLineHeight()/this.internal.scaleFactor;if(a.maxWidth!==void 0){c=a.maxWidth;var p=this.splitTextToSize(r,c).length;l=Math.ceil(f*p)}else c=h,l=f;return this.text(r,n,o,a),o+=.2*f,a.align==="center"&&(n-=h/2),a.align==="right"&&(n-=h),this.link(n,o-f,c,l,a),h},e.getTextWidth=function(r){var n=this.internal.getFontSize();return this.getStringUnitWidth(r)*n/this.internal.scaleFactor}}(Ye.API),function(e){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},o=[1570,1571,1573,1575];e.__arabicParser__={};var a=e.__arabicParser__.isInArabicSubstitutionA=function(S){return t[S.charCodeAt(0)]!==void 0},l=e.__arabicParser__.isArabicLetter=function(S){return typeof S=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(S)},c=e.__arabicParser__.isArabicEndLetter=function(S){return l(S)&&a(S)&&t[S.charCodeAt(0)].length<=2},h=e.__arabicParser__.isArabicAlfLetter=function(S){return l(S)&&o.indexOf(S.charCodeAt(0))>=0};e.__arabicParser__.arabicLetterHasIsolatedForm=function(S){return l(S)&&a(S)&&t[S.charCodeAt(0)].length>=1};var f=e.__arabicParser__.arabicLetterHasFinalForm=function(S){return l(S)&&a(S)&&t[S.charCodeAt(0)].length>=2};e.__arabicParser__.arabicLetterHasInitialForm=function(S){return l(S)&&a(S)&&t[S.charCodeAt(0)].length>=3};var p=e.__arabicParser__.arabicLetterHasMedialForm=function(S){return l(S)&&a(S)&&t[S.charCodeAt(0)].length==4},w=e.__arabicParser__.resolveLigatures=function(S){var k=0,y=r,R="",I=0;for(k=0;k<S.length;k+=1)y[S.charCodeAt(k)]!==void 0?(I++,typeof(y=y[S.charCodeAt(k)])=="number"&&(R+=String.fromCharCode(y),y=r,I=0),k===S.length-1&&(y=r,R+=S.charAt(k-(I-1)),k-=I-1,I=0)):(y=r,R+=S.charAt(k-I),k-=I,I=0);return R};e.__arabicParser__.isArabicDiacritic=function(S){return S!==void 0&&n[S.charCodeAt(0)]!==void 0};var _=e.__arabicParser__.getCorrectForm=function(S,k,y){return l(S)?a(S)===!1?-1:!f(S)||!l(k)&&!l(y)||!l(y)&&c(k)||c(S)&&!l(k)||c(S)&&h(k)||c(S)&&c(k)?0:p(S)&&l(k)&&!c(k)&&l(y)&&f(y)?3:c(S)||!l(y)?1:2:-1},d=function(S){var k=0,y=0,R=0,I="",P="",Y="",K=(S=S||"").split("\\s+"),ne=[];for(k=0;k<K.length;k+=1){for(ne.push(""),y=0;y<K[k].length;y+=1)I=K[k][y],P=K[k][y-1],Y=K[k][y+1],l(I)?(R=_(I,P,Y),ne[k]+=R!==-1?String.fromCharCode(t[I.charCodeAt(0)][R]):I):ne[k]+=I;ne[k]=w(ne[k])}return ne.join(" ")},b=e.__arabicParser__.processArabic=e.processArabic=function(){var S,k=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,y=[];if(Array.isArray(k)){var R=0;for(y=[],R=0;R<k.length;R+=1)Array.isArray(k[R])?y.push([d(k[R][0]),k[R][1],k[R][2]]):y.push([d(k[R])]);S=y}else S=d(k);return typeof arguments[0]=="string"?S:(arguments[0].text=S,arguments[0])};e.events.push(["preProcessText",b])}(Ye.API),Ye.API.autoPrint=function(e){var t;return(e=e||{}).variant=e.variant||"non-conform",e.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(e){var t=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(c){r=c}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(c){n=isNaN(c)||Number.isInteger(c)===!1||c<0?150:c,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var o=300;Object.defineProperty(this,"height",{get:function(){return o},set:function(c){o=isNaN(c)||Number.isInteger(c)===!1||c<0?300:c,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=o+1)}});var a=[];Object.defineProperty(this,"childNodes",{get:function(){return a},set:function(c){a=c}});var l={};Object.defineProperty(this,"style",{get:function(){return l},set:function(c){l=c}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(r,n){var o;if((r=r||"2d")!=="2d")return null;for(o in n)this.pdf.context2d.hasOwnProperty(o)&&(this.pdf.context2d[o]=n[o]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Ye.API),function(e){var t={left:0,top:0,bottom:0,right:0},r=!1,n=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),o.call(this))},o=function(){this.internal.__cell__.lastCell=new a,this.internal.__cell__.pages=1},a=function(){var h=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return h},set:function(S){h=S}});var f=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return f},set:function(S){f=S}});var p=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return p},set:function(S){p=S}});var w=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return w},set:function(S){w=S}});var _=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return _},set:function(S){_=S}});var d=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return d},set:function(S){d=S}});var b=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return b},set:function(S){b=S}}),this};a.prototype.clone=function(){return new a(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},a.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},e.setHeaderFunction=function(h){return n.call(this),this.internal.__cell__.headerFunction=typeof h=="function"?h:void 0,this},e.getTextDimensions=function(h,f){n.call(this);var p=(f=f||{}).fontSize||this.getFontSize(),w=f.font||this.getFont(),_=f.scaleFactor||this.internal.scaleFactor,d=0,b=0,S=0,k=this;if(!Array.isArray(h)&&typeof h!="string"){if(typeof h!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");h=String(h)}var y=f.maxWidth;y>0?typeof h=="string"?h=this.splitTextToSize(h,y):Object.prototype.toString.call(h)==="[object Array]"&&(h=h.reduce(function(I,P){return I.concat(k.splitTextToSize(P,y))},[])):h=Array.isArray(h)?h:[h];for(var R=0;R<h.length;R++)d<(S=this.getStringUnitWidth(h[R],{font:w})*p)&&(d=S);return d!==0&&(b=h.length),{w:d/=_,h:Math.max((b*p*this.getLineHeightFactor()-p*(this.getLineHeightFactor()-1))/_,0)}},e.cellAddPage=function(){n.call(this),this.addPage();var h=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new a(h.left,h.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var l=e.cell=function(){var h;h=arguments[0]instanceof a?arguments[0]:new a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),n.call(this);var f=this.internal.__cell__.lastCell,p=this.internal.__cell__.padding,w=this.internal.__cell__.margins||t,_=this.internal.__cell__.tableHeaderRow,d=this.internal.__cell__.printHeaders;return f.lineNumber!==void 0&&(f.lineNumber===h.lineNumber?(h.x=(f.x||0)+(f.width||0),h.y=f.y||0):f.y+f.height+h.height+w.bottom>this.getPageHeight()?(this.cellAddPage(),h.y=w.top,d&&_&&(this.printHeaderRow(h.lineNumber,!0),h.y+=_[0].height)):h.y=f.y+f.height||h.y),h.text[0]!==void 0&&(this.rect(h.x,h.y,h.width,h.height,r===!0?"FD":void 0),h.align==="right"?this.text(h.text,h.x+h.width-p,h.y+p,{align:"right",baseline:"top"}):h.align==="center"?this.text(h.text,h.x+h.width/2,h.y+p,{align:"center",baseline:"top",maxWidth:h.width-p-p}):this.text(h.text,h.x+p,h.y+p,{align:"left",baseline:"top",maxWidth:h.width-p-p})),this.internal.__cell__.lastCell=h,this};e.table=function(h,f,p,w,_){if(n.call(this),!p)throw new Error("No data for PDF table.");var d,b,S,k,y=[],R=[],I=[],P={},Y={},K=[],ne=[],X=(_=_||{}).autoSize||!1,M=_.printHeaders!==!1,J=_.css&&_.css["font-size"]!==void 0?16*_.css["font-size"]:_.fontSize||12,E=_.margins||Object.assign({width:this.getPageWidth()},t),F=typeof _.padding=="number"?_.padding:3,G=_.headerBackgroundColor||"#c8c8c8",$=_.headerTextColor||"#000";if(o.call(this),this.internal.__cell__.printHeaders=M,this.internal.__cell__.margins=E,this.internal.__cell__.table_font_size=J,this.internal.__cell__.padding=F,this.internal.__cell__.headerBackgroundColor=G,this.internal.__cell__.headerTextColor=$,this.setFontSize(J),w==null)R=y=Object.keys(p[0]),I=y.map(function(){return"left"});else if(Array.isArray(w)&&Pt(w[0])==="object")for(y=w.map(function(Ce){return Ce.name}),R=w.map(function(Ce){return Ce.prompt||Ce.name||""}),I=w.map(function(Ce){return Ce.align||"left"}),d=0;d<w.length;d+=1)Y[w[d].name]=.7499990551181103*w[d].width;else Array.isArray(w)&&typeof w[0]=="string"&&(R=y=w,I=y.map(function(){return"left"}));if(X||Array.isArray(w)&&typeof w[0]=="string")for(d=0;d<y.length;d+=1){for(P[k=y[d]]=p.map(function(Ce){return Ce[k]}),this.setFont(void 0,"bold"),K.push(this.getTextDimensions(R[d],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),b=P[k],this.setFont(void 0,"normal"),S=0;S<b.length;S+=1)K.push(this.getTextDimensions(b[S],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);Y[k]=Math.max.apply(null,K)+F+F,K=[]}if(M){var oe={};for(d=0;d<y.length;d+=1)oe[y[d]]={},oe[y[d]].text=R[d],oe[y[d]].align=I[d];var se=c.call(this,oe,Y);ne=y.map(function(Ce){return new a(h,f,Y[Ce],se,oe[Ce].text,void 0,oe[Ce].align)}),this.setTableHeaderRow(ne),this.printHeaderRow(1,!1)}var pe=w.reduce(function(Ce,be){return Ce[be.name]=be.align,Ce},{});for(d=0;d<p.length;d+=1){"rowStart"in _&&_.rowStart instanceof Function&&_.rowStart({row:d,data:p[d]},this);var ee=c.call(this,p[d],Y);for(S=0;S<y.length;S+=1){var le=p[d][y[S]];"cellStart"in _&&_.cellStart instanceof Function&&_.cellStart({row:d,col:S,data:le},this),l.call(this,new a(h,f,Y[y[S]],ee,le,d+2,pe[y[S]]))}}return this.internal.__cell__.table_x=h,this.internal.__cell__.table_y=f,this};var c=function(h,f){var p=this.internal.__cell__.padding,w=this.internal.__cell__.table_font_size,_=this.internal.scaleFactor;return Object.keys(h).map(function(d){var b=h[d];return this.splitTextToSize(b.hasOwnProperty("text")?b.text:b,f[d]-p-p)},this).map(function(d){return this.getLineHeightFactor()*d.length*w/_+p+p},this).reduce(function(d,b){return Math.max(d,b)},0)};e.setTableHeaderRow=function(h){n.call(this),this.internal.__cell__.tableHeaderRow=h},e.printHeaderRow=function(h,f){if(n.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var p;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var w=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new a(w[0],w[1],w[2],w[3],void 0,-1)}this.setFont(void 0,"bold");for(var _=[],d=0;d<this.internal.__cell__.tableHeaderRow.length;d+=1){p=this.internal.__cell__.tableHeaderRow[d].clone(),f&&(p.y=this.internal.__cell__.margins.top||0,_.push(p)),p.lineNumber=h;var b=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),l.call(this,p),this.setTextColor(b)}_.length>0&&this.setTableHeaderRow(_),this.setFont(void 0,"normal"),r=!1}}(Ye.API);var w2={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},y2=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],Ec=x2(y2),_2=[100,200,300,400,500,600,700,800,900],bv=x2(_2);function nc(e){var t=e.family.replace(/"|'/g,"").toLowerCase(),r=function(a){return w2[a=a||"normal"]?a:"normal"}(e.style),n=function(a){return a?typeof a=="number"?a>=100&&a<=900&&a%100==0?a:400:/^\d00$/.test(a)?parseInt(a):a==="bold"?700:400:400}(e.weight),o=function(a){return typeof Ec[a=a||"normal"]=="number"?a:"normal"}(e.stretch);return{family:t,style:r,weight:n,stretch:o,src:e.src||[],ref:e.ref||{name:t,style:[o,r,n].join(" ")}}}function nh(e,t,r,n){var o;for(o=r;o>=0&&o<t.length;o+=n)if(e[t[o]])return e[t[o]];for(o=r;o>=0&&o<t.length;o-=n)if(e[t[o]])return e[t[o]]}var xv={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},ih={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function oh(e){return[e.stretch,e.style,e.weight,e.family].join(" ")}function ah(e){return e.trimLeft()}function wv(e,t){for(var r=0;r<e.length;){if(e.charAt(r)===t)return[e.substring(0,r),e.substring(r+1)];r+=1}return null}function yv(e){var t=e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],e.substring(t[0].length)]}var Bs,sh,lh,Wo,Us,ch,uh,hh,ic=["times"];function fh(e,t,r,n,o){var a=4,l=ph;switch(o){case Ye.API.image_compression.FAST:a=1,l=dh;break;case Ye.API.image_compression.MEDIUM:a=6,l=mh;break;case Ye.API.image_compression.SLOW:a=9,l=gh}e=function(h,f,p,w){for(var _,d=h.length/f,b=new Uint8Array(h.length+d),S=[_v,dh,ph,mh,gh],k=0;k<d;k+=1){var y=k*f,R=h.subarray(y,y+f);if(w)b.set(w(R,p,_),y+k);else{for(var I=S.length,P=[],Y=0;Y<I;Y+=1)P[Y]=S[Y](R,p,_);var K=Cv(P.concat());b.set(P[K],y+k)}_=R}return b}(e,t,Math.ceil(r*n/8),l);var c=_c(e,{level:a});return Ye.API.__addimage__.arrayBufferToBinaryString(c)}function _v(e){var t=Array.apply([],e);return t.unshift(0),t}function dh(e,t){var r=e.length,n=[];n[0]=1;for(var o=0;o<r;o+=1){var a=e[o-t]||0;n[o+1]=e[o]-a+256&255}return n}function ph(e,t,r){var n=e.length,o=[];o[0]=2;for(var a=0;a<n;a+=1){var l=r&&r[a]||0;o[a+1]=e[a]-l+256&255}return o}function mh(e,t,r){var n=e.length,o=[];o[0]=3;for(var a=0;a<n;a+=1){var l=e[a-t]||0,c=r&&r[a]||0;o[a+1]=e[a]+256-(l+c>>>1)&255}return o}function gh(e,t,r){var n=e.length,o=[];o[0]=4;for(var a=0;a<n;a+=1){var l=Sv(e[a-t]||0,r&&r[a]||0,r&&r[a-t]||0);o[a+1]=e[a]-l+256&255}return o}function Sv(e,t,r){if(e===t&&t===r)return e;var n=Math.abs(t-r),o=Math.abs(e-r),a=Math.abs(e+t-r-r);return n<=o&&n<=a?e:o<=a?t:r}function Cv(e){var t=e.map(function(r){return r.reduce(function(n,o){return n+Math.abs(o)},0)});return t.indexOf(Math.min.apply(null,t))}function oc(e,t,r){var n=t*r,o=Math.floor(n/8),a=16-(n-8*o+r),l=(1<<r)-1;return S2(e,o)>>a&l}function vh(e,t,r,n){var o=r*n,a=Math.floor(o/8),l=16-(o-8*a+n),c=(1<<n)-1,h=(t&c)<<l;(function(f,p,w){if(p+1<f.byteLength)f.setUint16(p,w,!1);else{var _=w>>8&255;f.setUint8(p,_)}})(e,a,S2(e,a)&~(c<<l)&65535|h)}function S2(e,t){return t+1<e.byteLength?e.getUint16(t,!1):e.getUint8(t)<<8}function Av(e){var t=0;if(e[t++]!==71||e[t++]!==73||e[t++]!==70||e[t++]!==56||(e[t++]+1&253)!=56||e[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=e[t++]|e[t++]<<8,n=e[t++]|e[t++]<<8,o=e[t++],a=o>>7,l=1<<1+(7&o);e[t++],e[t++];var c=null,h=null;a&&(c=t,h=l,t+=3*l);var f=!0,p=[],w=0,_=null,d=0,b=null;for(this.width=r,this.height=n;f&&t<e.length;)switch(e[t++]){case 33:switch(e[t++]){case 255:if(e[t]!==11||e[t+1]==78&&e[t+2]==69&&e[t+3]==84&&e[t+4]==83&&e[t+5]==67&&e[t+6]==65&&e[t+7]==80&&e[t+8]==69&&e[t+9]==50&&e[t+10]==46&&e[t+11]==48&&e[t+12]==3&&e[t+13]==1&&e[t+16]==0)t+=14,b=e[t++]|e[t++]<<8,t++;else for(t+=12;;){if(!((E=e[t++])>=0))throw Error("Invalid block size");if(E===0)break;t+=E}break;case 249:if(e[t++]!==4||e[t+4]!==0)throw new Error("Invalid graphics extension block.");var S=e[t++];w=e[t++]|e[t++]<<8,_=e[t++],1&S||(_=null),d=S>>2&7,t++;break;case 254:for(;;){if(!((E=e[t++])>=0))throw Error("Invalid block size");if(E===0)break;t+=E}break;default:throw new Error("Unknown graphic control label: 0x"+e[t-1].toString(16))}break;case 44:var k=e[t++]|e[t++]<<8,y=e[t++]|e[t++]<<8,R=e[t++]|e[t++]<<8,I=e[t++]|e[t++]<<8,P=e[t++],Y=P>>6&1,K=1<<1+(7&P),ne=c,X=h,M=!1;P>>7&&(M=!0,ne=t,X=K,t+=3*K);var J=t;for(t++;;){var E;if(!((E=e[t++])>=0))throw Error("Invalid block size");if(E===0)break;t+=E}p.push({x:k,y,width:R,height:I,has_local_palette:M,palette_offset:ne,palette_size:X,data_offset:J,data_length:t-J,transparent_index:_,interlaced:!!Y,delay:w,disposal:d});break;case 59:f=!1;break;default:throw new Error("Unknown gif block: 0x"+e[t-1].toString(16))}this.numFrames=function(){return p.length},this.loopCount=function(){return b},this.frameInfo=function(F){if(F<0||F>=p.length)throw new Error("Frame index out of range.");return p[F]},this.decodeAndBlitFrameBGRA=function(F,G){var $=this.frameInfo(F),oe=$.width*$.height,se=new Uint8Array(oe);bh(e,$.data_offset,se,oe);var pe=$.palette_offset,ee=$.transparent_index;ee===null&&(ee=256);var le=$.width,Ce=r-le,be=le,L=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),V=L,Q=4*Ce;$.interlaced===!0&&(Q+=4*r*7);for(var re=8,ue=0,ge=se.length;ue<ge;++ue){var me=se[ue];if(be===0&&(be=le,(V+=Q)>=H&&(Q=4*Ce+4*r*(re-1),V=L+(le+Ce)*(re<<1),re>>=1)),me===ee)V+=4;else{var xe=e[pe+3*me],Ae=e[pe+3*me+1],Te=e[pe+3*me+2];G[V++]=Te,G[V++]=Ae,G[V++]=xe,G[V++]=255}--be}},this.decodeAndBlitFrameRGBA=function(F,G){var $=this.frameInfo(F),oe=$.width*$.height,se=new Uint8Array(oe);bh(e,$.data_offset,se,oe);var pe=$.palette_offset,ee=$.transparent_index;ee===null&&(ee=256);var le=$.width,Ce=r-le,be=le,L=4*($.y*r+$.x),H=4*(($.y+$.height)*r+$.x),V=L,Q=4*Ce;$.interlaced===!0&&(Q+=4*r*7);for(var re=8,ue=0,ge=se.length;ue<ge;++ue){var me=se[ue];if(be===0&&(be=le,(V+=Q)>=H&&(Q=4*Ce+4*r*(re-1),V=L+(le+Ce)*(re<<1),re>>=1)),me===ee)V+=4;else{var xe=e[pe+3*me],Ae=e[pe+3*me+1],Te=e[pe+3*me+2];G[V++]=xe,G[V++]=Ae,G[V++]=Te,G[V++]=255}--be}}}function bh(e,t,r,n){for(var o=e[t++],a=1<<o,l=a+1,c=l+1,h=o+1,f=(1<<h)-1,p=0,w=0,_=0,d=e[t++],b=new Int32Array(4096),S=null;;){for(;p<16&&d!==0;)w|=e[t++]<<p,p+=8,d===1?d=e[t++]:--d;if(p<h)break;var k=w&f;if(w>>=h,p-=h,k!==a){if(k===l)break;for(var y=k<c?k:S,R=0,I=y;I>a;)I=b[I]>>8,++R;var P=I;if(_+R+(y!==k?1:0)>n)return void Ot.log("Warning, gif stream longer than expected.");r[_++]=P;var Y=_+=R;for(y!==k&&(r[_++]=P),I=y;R--;)I=b[I],r[--Y]=255&I,I>>=8;S!==null&&c<4096&&(b[c++]=S<<8|P,c>=f+1&&h<12&&(++h,f=f<<1|1)),S=k}else c=l+1,f=(1<<(h=o+1))-1,S=null}return _!==n&&Ot.log("Warning, gif stream shorter than expected."),r}/**
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
*/function ac(e){var t,r,n,o,a,l=Math.floor,c=new Array(64),h=new Array(64),f=new Array(64),p=new Array(64),w=new Array(65535),_=new Array(65535),d=new Array(64),b=new Array(64),S=[],k=0,y=7,R=new Array(64),I=new Array(64),P=new Array(64),Y=new Array(256),K=new Array(2048),ne=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],X=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],M=[0,1,2,3,4,5,6,7,8,9,10,11],J=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],E=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],F=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],G=[0,1,2,3,4,5,6,7,8,9,10,11],$=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],oe=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function se(L,H){for(var V=0,Q=0,re=new Array,ue=1;ue<=16;ue++){for(var ge=1;ge<=L[ue];ge++)re[H[Q]]=[],re[H[Q]][0]=V,re[H[Q]][1]=ue,Q++,V++;V*=2}return re}function pe(L){for(var H=L[0],V=L[1]-1;V>=0;)H&1<<V&&(k|=1<<y),V--,--y<0&&(k==255?(ee(255),ee(0)):ee(k),y=7,k=0)}function ee(L){S.push(L)}function le(L){ee(L>>8&255),ee(255&L)}function Ce(L,H,V,Q,re){for(var ue,ge=re[0],me=re[240],xe=function(Ne,Oe){var je,it,Fe,gt,tt,rt,St,ot,$e,Je,Ve=0;for($e=0;$e<8;++$e){je=Ne[Ve],it=Ne[Ve+1],Fe=Ne[Ve+2],gt=Ne[Ve+3],tt=Ne[Ve+4],rt=Ne[Ve+5],St=Ne[Ve+6];var At=je+(ot=Ne[Ve+7]),yt=je-ot,Be=it+St,at=it-St,Nt=Fe+rt,Xe=Fe-rt,vt=gt+tt,lt=gt-tt,Ht=At+vt,Zt=At-vt,Et=Be+Nt,Qe=Be-Nt;Ne[Ve]=Ht+Et,Ne[Ve+4]=Ht-Et;var bt=.707106781*(Qe+Zt);Ne[Ve+2]=Zt+bt,Ne[Ve+6]=Zt-bt;var _n=.382683433*((Ht=lt+Xe)-(Qe=at+yt)),pr=.5411961*Ht+_n,Zr=1.306562965*Qe+_n,Jr=.707106781*(Et=Xe+at),Ze=yt+Jr,un=yt-Jr;Ne[Ve+5]=un+pr,Ne[Ve+3]=un-pr,Ne[Ve+1]=Ze+Zr,Ne[Ve+7]=Ze-Zr,Ve+=8}for(Ve=0,$e=0;$e<8;++$e){je=Ne[Ve],it=Ne[Ve+8],Fe=Ne[Ve+16],gt=Ne[Ve+24],tt=Ne[Ve+32],rt=Ne[Ve+40],St=Ne[Ve+48];var hn=je+(ot=Ne[Ve+56]),Fr=je-ot,Dr=it+St,qt=it-St,tr=Fe+rt,hr=Fe-rt,Fn=gt+tt,Dn=gt-tt,zr=hn+Fn,Br=hn-Fn,wr=Dr+tr,Ur=Dr-tr;Ne[Ve]=zr+wr,Ne[Ve+32]=zr-wr;var yr=.707106781*(Ur+Br);Ne[Ve+16]=Br+yr,Ne[Ve+48]=Br-yr;var Sn=.382683433*((zr=Dn+hr)-(Ur=qt+Fr)),fn=.5411961*zr+Sn,Kn=1.306562965*Ur+Sn,yi=.707106781*(wr=hr+qt),_i=Fr+yi,ei=Fr-yi;Ne[Ve+40]=ei+fn,Ne[Ve+24]=ei-fn,Ne[Ve+8]=_i+Kn,Ne[Ve+56]=_i-Kn,Ve++}for($e=0;$e<64;++$e)Je=Ne[$e]*Oe[$e],d[$e]=Je>0?Je+.5|0:Je-.5|0;return d}(L,H),Ae=0;Ae<64;++Ae)b[ne[Ae]]=xe[Ae];var Te=b[0]-V;V=b[0],Te==0?pe(Q[0]):(pe(Q[_[ue=32767+Te]]),pe(w[ue]));for(var Pe=63;Pe>0&&b[Pe]==0;)Pe--;if(Pe==0)return pe(ge),V;for(var ve,W=1;W<=Pe;){for(var ft=W;b[W]==0&&W<=Pe;)++W;var Ke=W-ft;if(Ke>=16){ve=Ke>>4;for(var qe=1;qe<=ve;++qe)pe(me);Ke&=15}ue=32767+b[W],pe(re[(Ke<<4)+_[ue]]),pe(w[ue]),W++}return Pe!=63&&pe(ge),V}function be(L){L=Math.min(Math.max(L,1),100),a!=L&&(function(H){for(var V=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],Q=0;Q<64;Q++){var re=l((V[Q]*H+50)/100);re=Math.min(Math.max(re,1),255),c[ne[Q]]=re}for(var ue=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],ge=0;ge<64;ge++){var me=l((ue[ge]*H+50)/100);me=Math.min(Math.max(me,1),255),h[ne[ge]]=me}for(var xe=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Ae=0,Te=0;Te<8;Te++)for(var Pe=0;Pe<8;Pe++)f[Ae]=1/(c[ne[Ae]]*xe[Te]*xe[Pe]*8),p[Ae]=1/(h[ne[Ae]]*xe[Te]*xe[Pe]*8),Ae++}(L<50?Math.floor(5e3/L):Math.floor(200-2*L)),a=L)}this.encode=function(L,H){H&&be(H),S=new Array,k=0,y=7,le(65496),le(65504),le(16),ee(74),ee(70),ee(73),ee(70),ee(0),ee(1),ee(1),ee(0),le(1),le(1),ee(0),ee(0),function(){le(65499),le(132),ee(0);for(var it=0;it<64;it++)ee(c[it]);ee(1);for(var Fe=0;Fe<64;Fe++)ee(h[Fe])}(),function(it,Fe){le(65472),le(17),ee(8),le(Fe),le(it),ee(3),ee(1),ee(17),ee(0),ee(2),ee(17),ee(1),ee(3),ee(17),ee(1)}(L.width,L.height),function(){le(65476),le(418),ee(0);for(var it=0;it<16;it++)ee(X[it+1]);for(var Fe=0;Fe<=11;Fe++)ee(M[Fe]);ee(16);for(var gt=0;gt<16;gt++)ee(J[gt+1]);for(var tt=0;tt<=161;tt++)ee(E[tt]);ee(1);for(var rt=0;rt<16;rt++)ee(F[rt+1]);for(var St=0;St<=11;St++)ee(G[St]);ee(17);for(var ot=0;ot<16;ot++)ee($[ot+1]);for(var $e=0;$e<=161;$e++)ee(oe[$e])}(),le(65498),le(12),ee(3),ee(1),ee(0),ee(2),ee(17),ee(3),ee(17),ee(0),ee(63),ee(0);var V=0,Q=0,re=0;k=0,y=7,this.encode.displayName="_encode_";for(var ue,ge,me,xe,Ae,Te,Pe,ve,W,ft=L.data,Ke=L.width,qe=L.height,Ne=4*Ke,Oe=0;Oe<qe;){for(ue=0;ue<Ne;){for(Ae=Ne*Oe+ue,Pe=-1,ve=0,W=0;W<64;W++)Te=Ae+(ve=W>>3)*Ne+(Pe=4*(7&W)),Oe+ve>=qe&&(Te-=Ne*(Oe+1+ve-qe)),ue+Pe>=Ne&&(Te-=ue+Pe-Ne+4),ge=ft[Te++],me=ft[Te++],xe=ft[Te++],R[W]=(K[ge]+K[me+256|0]+K[xe+512|0]>>16)-128,I[W]=(K[ge+768|0]+K[me+1024|0]+K[xe+1280|0]>>16)-128,P[W]=(K[ge+1280|0]+K[me+1536|0]+K[xe+1792|0]>>16)-128;V=Ce(R,f,V,t,n),Q=Ce(I,p,Q,r,o),re=Ce(P,p,re,r,o),ue+=32}Oe+=8}if(y>=0){var je=[];je[1]=y+1,je[0]=(1<<y+1)-1,pe(je)}return le(65497),new Uint8Array(S)},e=e||50,function(){for(var L=String.fromCharCode,H=0;H<256;H++)Y[H]=L(H)}(),t=se(X,M),r=se(F,G),n=se(J,E),o=se($,oe),function(){for(var L=1,H=2,V=1;V<=15;V++){for(var Q=L;Q<H;Q++)_[32767+Q]=V,w[32767+Q]=[],w[32767+Q][1]=V,w[32767+Q][0]=Q;for(var re=-(H-1);re<=-L;re++)_[32767+re]=V,w[32767+re]=[],w[32767+re][1]=V,w[32767+re][0]=H-1+re;L<<=1,H<<=1}}(),function(){for(var L=0;L<256;L++)K[L]=19595*L,K[L+256|0]=38470*L,K[L+512|0]=7471*L+32768,K[L+768|0]=-11059*L,K[L+1024|0]=-21709*L,K[L+1280|0]=32768*L+8421375,K[L+1536|0]=-27439*L,K[L+1792|0]=-5329*L}(),be(e)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function Pn(e,t){if(this.pos=0,this.buffer=e,this.datav=new DataView(e.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function xh(e){function t(M){if(!M)throw Error("assert :P")}function r(M,J,E){for(var F=0;4>F;F++)if(M[J+F]!=E.charCodeAt(F))return!0;return!1}function n(M,J,E,F,G){for(var $=0;$<G;$++)M[J+$]=E[F+$]}function o(M,J,E,F){for(var G=0;G<F;G++)M[J+G]=E}function a(M){return new Int32Array(M)}function l(M,J){for(var E=[],F=0;F<M;F++)E.push(new J);return E}function c(M,J){var E=[];return function F(G,$,oe){for(var se=oe[$],pe=0;pe<se&&(G.push(oe.length>$+1?[]:new J),!(oe.length<$+1));pe++)F(G[pe],$+1,oe)}(E,0,M),E}var h=function(){var M=this;function J(s,u){for(var g=1<<u-1>>>0;s&g;)g>>>=1;return g?(s&g-1)+g:s}function E(s,u,g,x,A){t(!(x%g));do s[u+(x-=g)]=A;while(0<x)}function F(s,u,g,x,A){if(t(2328>=A),512>=A)var N=a(512);else if((N=a(A))==null)return 0;return function(T,O,D,B,te,fe){var U,ie,ce=O,we=1<<D,he=a(16),ye=a(16);for(t(te!=0),t(B!=null),t(T!=null),t(0<D),ie=0;ie<te;++ie){if(15<B[ie])return 0;++he[B[ie]]}if(he[0]==te)return 0;for(ye[1]=0,U=1;15>U;++U){if(he[U]>1<<U)return 0;ye[U+1]=ye[U]+he[U]}for(ie=0;ie<te;++ie)U=B[ie],0<B[ie]&&(fe[ye[U]++]=ie);if(ye[15]==1)return(B=new G).g=0,B.value=fe[0],E(T,ce,1,we,B),we;var Se,Ee=-1,ke=we-1,Ge=0,Me=1,pt=1,Ue=1<<D;for(ie=0,U=1,te=2;U<=D;++U,te<<=1){if(Me+=pt<<=1,0>(pt-=he[U]))return 0;for(;0<he[U];--he[U])(B=new G).g=U,B.value=fe[ie++],E(T,ce+Ge,te,Ue,B),Ge=J(Ge,U)}for(U=D+1,te=2;15>=U;++U,te<<=1){if(Me+=pt<<=1,0>(pt-=he[U]))return 0;for(;0<he[U];--he[U]){if(B=new G,(Ge&ke)!=Ee){for(ce+=Ue,Se=1<<(Ee=U)-D;15>Ee&&!(0>=(Se-=he[Ee]));)++Ee,Se<<=1;we+=Ue=1<<(Se=Ee-D),T[O+(Ee=Ge&ke)].g=Se+D,T[O+Ee].value=ce-O-Ee}B.g=U-D,B.value=fe[ie++],E(T,ce+(Ge>>D),te,Ue,B),Ge=J(Ge,U)}}return Me!=2*ye[15]-1?0:we}(s,u,g,x,A,N)}function G(){this.value=this.g=0}function $(){this.value=this.g=0}function oe(){this.G=l(5,G),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=l(xo,$)}function se(s,u,g,x){t(s!=null),t(u!=null),t(2147483648>x),s.Ca=254,s.I=0,s.b=-8,s.Ka=0,s.oa=u,s.pa=g,s.Jd=u,s.Yc=g+x,s.Zc=4<=x?g+x-4+1:g,ge(s)}function pe(s,u){for(var g=0;0<u--;)g|=xe(s,128)<<u;return g}function ee(s,u){var g=pe(s,u);return me(s)?-g:g}function le(s,u,g,x){var A,N=0;for(t(s!=null),t(u!=null),t(4294967288>x),s.Sb=x,s.Ra=0,s.u=0,s.h=0,4<x&&(x=4),A=0;A<x;++A)N+=u[g+A]<<8*A;s.Ra=N,s.bb=x,s.oa=u,s.pa=g}function Ce(s){for(;8<=s.u&&s.bb<s.Sb;)s.Ra>>>=8,s.Ra+=s.oa[s.pa+s.bb]<<Ti-8>>>0,++s.bb,s.u-=8;Q(s)&&(s.h=1,s.u=0)}function be(s,u){if(t(0<=u),!s.h&&u<=en){var g=V(s)&Kr[u];return s.u+=u,Ce(s),g}return s.h=1,s.u=0}function L(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function H(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function V(s){return s.Ra>>>(s.u&Ti-1)>>>0}function Q(s){return t(s.bb<=s.Sb),s.h||s.bb==s.Sb&&s.u>Ti}function re(s,u){s.u=u,s.h=Q(s)}function ue(s){s.u>=ci&&(t(s.u>=ci),Ce(s))}function ge(s){t(s!=null&&s.oa!=null),s.pa<s.Zc?(s.I=(s.oa[s.pa++]|s.I<<8)>>>0,s.b+=8):(t(s!=null&&s.oa!=null),s.pa<s.Yc?(s.b+=8,s.I=s.oa[s.pa++]|s.I<<8):s.Ka?s.b=0:(s.I<<=8,s.b+=8,s.Ka=1))}function me(s){return pe(s,1)}function xe(s,u){var g=s.Ca;0>s.b&&ge(s);var x=s.b,A=g*u>>>8,N=(s.I>>>x>A)+0;for(N?(g-=A,s.I-=A+1<<x>>>0):g=A+1,x=g,A=0;256<=x;)A+=8,x>>=8;return x=7^A+Ii[x],s.b-=x,s.Ca=(g<<x)-1,N}function Ae(s,u,g){s[u+0]=g>>24&255,s[u+1]=g>>16&255,s[u+2]=g>>8&255,s[u+3]=255&g}function Te(s,u){return s[u+0]|s[u+1]<<8}function Pe(s,u){return Te(s,u)|s[u+2]<<16}function ve(s,u){return Te(s,u)|Te(s,u+2)<<16}function W(s,u){var g=1<<u;return t(s!=null),t(0<u),s.X=a(g),s.X==null?0:(s.Mb=32-u,s.Xa=u,1)}function ft(s,u){t(s!=null),t(u!=null),t(s.Xa==u.Xa),n(u.X,0,s.X,0,1<<u.Xa)}function Ke(){this.X=[],this.Xa=this.Mb=0}function qe(s,u,g,x){t(g!=null),t(x!=null);var A=g[0],N=x[0];return A==0&&(A=(s*N+u/2)/u),N==0&&(N=(u*A+s/2)/s),0>=A||0>=N?0:(g[0]=A,x[0]=N,1)}function Ne(s,u){return s+(1<<u)-1>>>u}function Oe(s,u){return((4278255360&s)+(4278255360&u)>>>0&4278255360)+((16711935&s)+(16711935&u)>>>0&16711935)>>>0}function je(s,u){M[u]=function(g,x,A,N,T,O,D){var B;for(B=0;B<T;++B){var te=M[s](O[D+B-1],A,N+B);O[D+B]=Oe(g[x+B],te)}}}function it(){this.ud=this.hd=this.jd=0}function Fe(s,u){return((4278124286&(s^u))>>>1)+(s&u)>>>0}function gt(s){return 0<=s&&256>s?s:0>s?0:255<s?255:void 0}function tt(s,u){return gt(s+(s-u+.5>>1))}function rt(s,u,g){return Math.abs(u-g)-Math.abs(s-g)}function St(s,u,g,x,A,N,T){for(x=N[T-1],g=0;g<A;++g)N[T+g]=x=Oe(s[u+g],x)}function ot(s,u,g,x,A){var N;for(N=0;N<g;++N){var T=s[u+N],O=T>>8&255,D=16711935&(D=(D=16711935&T)+((O<<16)+O));x[A+N]=(4278255360&T)+D>>>0}}function $e(s,u){u.jd=255&s,u.hd=s>>8&255,u.ud=s>>16&255}function Je(s,u,g,x,A,N){var T;for(T=0;T<x;++T){var O=u[g+T],D=O>>>8,B=O,te=255&(te=(te=O>>>16)+((s.jd<<24>>24)*(D<<24>>24)>>>5));B=255&(B=(B+=(s.hd<<24>>24)*(D<<24>>24)>>>5)+((s.ud<<24>>24)*(te<<24>>24)>>>5)),A[N+T]=(4278255360&O)+(te<<16)+B}}function Ve(s,u,g,x,A){M[u]=function(N,T,O,D,B,te,fe,U,ie){for(D=fe;D<U;++D)for(fe=0;fe<ie;++fe)B[te++]=A(O[x(N[T++])])},M[s]=function(N,T,O,D,B,te,fe){var U=8>>N.b,ie=N.Ea,ce=N.K[0],we=N.w;if(8>U)for(N=(1<<N.b)-1,we=(1<<U)-1;T<O;++T){var he,ye=0;for(he=0;he<ie;++he)he&N||(ye=x(D[B++])),te[fe++]=A(ce[ye&we]),ye>>=U}else M["VP8LMapColor"+g](D,B,ce,we,te,fe,T,O,ie)}}function At(s,u,g,x,A){for(g=u+g;u<g;){var N=s[u++];x[A++]=N>>16&255,x[A++]=N>>8&255,x[A++]=255&N}}function yt(s,u,g,x,A){for(g=u+g;u<g;){var N=s[u++];x[A++]=N>>16&255,x[A++]=N>>8&255,x[A++]=255&N,x[A++]=N>>24&255}}function Be(s,u,g,x,A){for(g=u+g;u<g;){var N=(T=s[u++])>>16&240|T>>12&15,T=240&T|T>>28&15;x[A++]=N,x[A++]=T}}function at(s,u,g,x,A){for(g=u+g;u<g;){var N=(T=s[u++])>>16&248|T>>13&7,T=T>>5&224|T>>3&31;x[A++]=N,x[A++]=T}}function Nt(s,u,g,x,A){for(g=u+g;u<g;){var N=s[u++];x[A++]=255&N,x[A++]=N>>8&255,x[A++]=N>>16&255}}function Xe(s,u,g,x,A,N){if(N==0)for(g=u+g;u<g;)Ae(x,((N=s[u++])[0]>>24|N[1]>>8&65280|N[2]<<8&16711680|N[3]<<24)>>>0),A+=32;else n(x,A,s,u,g)}function vt(s,u){M[u][0]=M[s+"0"],M[u][1]=M[s+"1"],M[u][2]=M[s+"2"],M[u][3]=M[s+"3"],M[u][4]=M[s+"4"],M[u][5]=M[s+"5"],M[u][6]=M[s+"6"],M[u][7]=M[s+"7"],M[u][8]=M[s+"8"],M[u][9]=M[s+"9"],M[u][10]=M[s+"10"],M[u][11]=M[s+"11"],M[u][12]=M[s+"12"],M[u][13]=M[s+"13"],M[u][14]=M[s+"0"],M[u][15]=M[s+"0"]}function lt(s){return s==wl||s==yl||s==us||s==_l}function Ht(){this.eb=[],this.size=this.A=this.fb=0}function Zt(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Et(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Ht,this.f.kb=new Zt,this.sd=null}function Qe(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function bt(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function _n(s){return alert("todo:WebPSamplerProcessPlane"),s.T}function pr(s,u){var g=s.T,x=u.ba.f.RGBA,A=x.eb,N=x.fb+s.ka*x.A,T=wn[u.ba.S],O=s.y,D=s.O,B=s.f,te=s.N,fe=s.ea,U=s.W,ie=u.cc,ce=u.dc,we=u.Mc,he=u.Nc,ye=s.ka,Se=s.ka+s.T,Ee=s.U,ke=Ee+1>>1;for(ye==0?T(O,D,null,null,B,te,fe,U,B,te,fe,U,A,N,null,null,Ee):(T(u.ec,u.fc,O,D,ie,ce,we,he,B,te,fe,U,A,N-x.A,A,N,Ee),++g);ye+2<Se;ye+=2)ie=B,ce=te,we=fe,he=U,te+=s.Rc,U+=s.Rc,N+=2*x.A,T(O,(D+=2*s.fa)-s.fa,O,D,ie,ce,we,he,B,te,fe,U,A,N-x.A,A,N,Ee);return D+=s.fa,s.j+Se<s.o?(n(u.ec,u.fc,O,D,Ee),n(u.cc,u.dc,B,te,ke),n(u.Mc,u.Nc,fe,U,ke),g--):1&Se||T(O,D,null,null,B,te,fe,U,B,te,fe,U,A,N+x.A,null,null,Ee),g}function Zr(s,u,g){var x=s.F,A=[s.J];if(x!=null){var N=s.U,T=u.ba.S,O=T==cs||T==us;u=u.ba.f.RGBA;var D=[0],B=s.ka;D[0]=s.T,s.Kb&&(B==0?--D[0]:(--B,A[0]-=s.width),s.j+s.ka+s.T==s.o&&(D[0]=s.o-s.j-B));var te=u.eb;B=u.fb+B*u.A,s=cu(x,A[0],s.width,N,D,te,B+(O?0:3),u.A),t(g==D),s&&lt(T)&&Aa(te,B,O,N,D,u.A)}return 0}function Jr(s){var u=s.ma,g=u.ba.S,x=11>g,A=g==ss||g==ls||g==cs||g==xl||g==12||lt(g);if(u.memory=null,u.Ib=null,u.Jb=null,u.Nd=null,!va(u.Oa,s,A?11:12))return 0;if(A&&lt(g)&&ts(),s.da)alert("todo:use_scaling");else{if(x){if(u.Ib=_n,s.Kb){if(g=s.U+1>>1,u.memory=a(s.U+2*g),u.memory==null)return 0;u.ec=u.memory,u.fc=0,u.cc=u.ec,u.dc=u.fc+s.U,u.Mc=u.cc,u.Nc=u.dc+g,u.Ib=pr,ts()}}else alert("todo:EmitYUV");A&&(u.Jb=Zr,x&&gn())}if(x&&!Au){for(s=0;256>s;++s)X2[s]=89858*(s-128)+fs>>hs,Q2[s]=-22014*(s-128)+fs,J2[s]=-45773*(s-128),Z2[s]=113618*(s-128)+fs>>hs;for(s=La;s<Al;++s)u=76283*(s-16)+fs>>hs,K2[s-La]=Jt(u,255),ef[s-La]=Jt(u+8>>4,15);Au=1}return 1}function Ze(s){var u=s.ma,g=s.U,x=s.T;return t(!(1&s.ka)),0>=g||0>=x?0:(g=u.Ib(s,u),u.Jb!=null&&u.Jb(s,u,g),u.Dc+=g,1)}function un(s){s.ma.memory=null}function hn(s,u,g,x){return be(s,8)!=47?0:(u[0]=be(s,14)+1,g[0]=be(s,14)+1,x[0]=be(s,1),be(s,3)!=0?0:!s.h)}function Fr(s,u){if(4>s)return s+1;var g=s-2>>1;return(2+(1&s)<<g)+be(u,g)+1}function Dr(s,u){return 120<u?u-120:1<=(g=((g=O2[u-1])>>4)*s+(8-(15&g)))?g:1;var g}function qt(s,u,g){var x=V(g),A=s[u+=255&x].g-8;return 0<A&&(re(g,g.u+8),x=V(g),u+=s[u].value,u+=x&(1<<A)-1),re(g,g.u+s[u].g),s[u].value}function tr(s,u,g){return g.g+=s.g,g.value+=s.value<<u>>>0,t(8>=g.g),s.g}function hr(s,u,g){var x=s.xc;return t((u=x==0?0:s.vc[s.md*(g>>x)+(u>>x)])<s.Wb),s.Ya[u]}function Fn(s,u,g,x){var A=s.ab,N=s.c*u,T=s.C;u=T+u;var O=g,D=x;for(x=s.Ta,g=s.Ua;0<A--;){var B=s.gc[A],te=T,fe=u,U=O,ie=D,ce=(D=x,O=g,B.Ea);switch(t(te<fe),t(fe<=B.nc),B.hc){case 2:nr(U,ie,(fe-te)*ce,D,O);break;case 0:var we=te,he=fe,ye=D,Se=O,Ee=(Ue=B).Ea;we==0&&(xa(U,ie,null,null,1,ye,Se),St(U,ie+1,0,0,Ee-1,ye,Se+1),ie+=Ee,Se+=Ee,++we);for(var ke=1<<Ue.b,Ge=ke-1,Me=Ne(Ee,Ue.b),pt=Ue.K,Ue=Ue.w+(we>>Ue.b)*Me;we<he;){var xt=pt,vr=Ue,mt=1;for(zo(U,ie,ye,Se-Ee,1,ye,Se);mt<Ee;){var He=(mt&~Ge)+ke;He>Ee&&(He=Ee),(0,ya[xt[vr++]>>8&15])(U,ie+ +mt,ye,Se+mt-Ee,He-mt,ye,Se+mt),mt=He}ie+=Ee,Se+=Ee,++we&Ge||(Ue+=Me)}fe!=B.nc&&n(D,O-ce,D,O+(fe-te-1)*ce,ce);break;case 1:for(ce=U,he=ie,Ee=(U=B.Ea)-(Se=U&~(ye=(ie=1<<B.b)-1)),we=Ne(U,B.b),ke=B.K,B=B.w+(te>>B.b)*we;te<fe;){for(Ge=ke,Me=B,pt=new it,Ue=he+Se,xt=he+U;he<Ue;)$e(Ge[Me++],pt),_a(pt,ce,he,ie,D,O),he+=ie,O+=ie;he<xt&&($e(Ge[Me++],pt),_a(pt,ce,he,Ee,D,O),he+=Ee,O+=Ee),++te&ye||(B+=we)}break;case 3:if(U==D&&ie==O&&0<B.b){for(he=D,U=ce=O+(fe-te)*ce-(Se=(fe-te)*Ne(B.Ea,B.b)),ie=D,ye=O,we=[],Se=(Ee=Se)-1;0<=Se;--Se)we[Se]=ie[ye+Se];for(Se=Ee-1;0<=Se;--Se)he[U+Se]=we[Se];ns(B,te,fe,D,ce,D,O)}else ns(B,te,fe,U,ie,D,O)}O=x,D=g}D!=g&&n(x,g,O,D,N)}function Dn(s,u){var g=s.V,x=s.Ba+s.c*s.C,A=u-s.C;if(t(u<=s.l.o),t(16>=A),0<A){var N=s.l,T=s.Ta,O=s.Ua,D=N.width;if(Fn(s,A,g,x),A=O=[O],t((g=s.C)<(x=u)),t(N.v<N.va),x>N.o&&(x=N.o),g<N.j){var B=N.j-g;g=N.j,A[0]+=B*D}if(g>=x?g=0:(A[0]+=4*N.v,N.ka=g-N.j,N.U=N.va-N.v,N.T=x-g,g=1),g){if(O=O[0],11>(g=s.ca).S){var te=g.f.RGBA,fe=(x=g.S,A=N.U,N=N.T,B=te.eb,te.A),U=N;for(te=te.fb+s.Ma*te.A;0<U--;){var ie=T,ce=O,we=A,he=B,ye=te;switch(x){case as:Sa(ie,ce,we,he,ye);break;case ss:Pi(ie,ce,we,he,ye);break;case wl:Pi(ie,ce,we,he,ye),Aa(he,ye,0,we,1,0);break;case gu:wo(ie,ce,we,he,ye);break;case ls:Xe(ie,ce,we,he,ye,1);break;case yl:Xe(ie,ce,we,he,ye,1),Aa(he,ye,0,we,1,0);break;case cs:Xe(ie,ce,we,he,ye,0);break;case us:Xe(ie,ce,we,he,ye,0),Aa(he,ye,1,we,1,0);break;case xl:ji(ie,ce,we,he,ye);break;case _l:ji(ie,ce,we,he,ye),lu(he,ye,we,1,0);break;case vu:Ri(ie,ce,we,he,ye);break;default:t(0)}O+=D,te+=fe}s.Ma+=N}else alert("todo:EmitRescaledRowsYUVA");t(s.Ma<=g.height)}}s.C=u,t(s.C<=s.i)}function zr(s){var u;if(0<s.ua)return 0;for(u=0;u<s.Wb;++u){var g=s.Ya[u].G,x=s.Ya[u].H;if(0<g[1][x[1]+0].g||0<g[2][x[2]+0].g||0<g[3][x[3]+0].g)return 0}return 1}function Br(s,u,g,x,A,N){if(s.Z!=0){var T=s.qd,O=s.rd;for(t(Fi[s.Z]!=null);u<g;++u)Fi[s.Z](T,O,x,A,x,A,N),T=x,O=A,A+=N;s.qd=T,s.rd=O}}function wr(s,u){var g=s.l.ma,x=g.Z==0||g.Z==1?s.l.j:s.C;if(x=s.C<x?x:s.C,t(u<=s.l.o),u>x){var A=s.l.width,N=g.ca,T=g.tb+A*x,O=s.V,D=s.Ba+s.c*x,B=s.gc;t(s.ab==1),t(B[0].hc==3),$n(B[0],x,u,O,D,N,T),Br(g,x,u,N,T,A)}s.C=s.Ma=u}function Ur(s,u,g,x,A,N,T){var O=s.$/x,D=s.$%x,B=s.m,te=s.s,fe=g+s.$,U=fe;A=g+x*A;var ie=g+x*N,ce=280+te.ua,we=s.Pb?O:16777216,he=0<te.ua?te.Wa:null,ye=te.wc,Se=fe<ie?hr(te,D,O):null;t(s.C<N),t(ie<=A);var Ee=!1;e:for(;;){for(;Ee||fe<ie;){var ke=0;if(O>=we){var Ge=fe-g;t((we=s).Pb),we.wd=we.m,we.xd=Ge,0<we.s.ua&&ft(we.s.Wa,we.s.vb),we=O+F2}if(D&ye||(Se=hr(te,D,O)),t(Se!=null),Se.Qb&&(u[fe]=Se.qb,Ee=!0),!Ee)if(ue(B),Se.jc){ke=B,Ge=u;var Me=fe,pt=Se.pd[V(ke)&xo-1];t(Se.jc),256>pt.g?(re(ke,ke.u+pt.g),Ge[Me]=pt.value,ke=0):(re(ke,ke.u+pt.g-256),t(256<=pt.value),ke=pt.value),ke==0&&(Ee=!0)}else ke=qt(Se.G[0],Se.H[0],B);if(B.h)break;if(Ee||256>ke){if(!Ee)if(Se.nd)u[fe]=(Se.qb|ke<<8)>>>0;else{if(ue(B),Ee=qt(Se.G[1],Se.H[1],B),ue(B),Ge=qt(Se.G[2],Se.H[2],B),Me=qt(Se.G[3],Se.H[3],B),B.h)break;u[fe]=(Me<<24|Ee<<16|ke<<8|Ge)>>>0}if(Ee=!1,++fe,++D>=x&&(D=0,++O,T!=null&&O<=N&&!(O%16)&&T(s,O),he!=null))for(;U<fe;)ke=u[U++],he.X[(506832829*ke&4294967295)>>>he.Mb]=ke}else if(280>ke){if(ke=Fr(ke-256,B),Ge=qt(Se.G[4],Se.H[4],B),ue(B),Ge=Dr(x,Ge=Fr(Ge,B)),B.h)break;if(fe-g<Ge||A-fe<ke)break e;for(Me=0;Me<ke;++Me)u[fe+Me]=u[fe+Me-Ge];for(fe+=ke,D+=ke;D>=x;)D-=x,++O,T!=null&&O<=N&&!(O%16)&&T(s,O);if(t(fe<=A),D&ye&&(Se=hr(te,D,O)),he!=null)for(;U<fe;)ke=u[U++],he.X[(506832829*ke&4294967295)>>>he.Mb]=ke}else{if(!(ke<ce))break e;for(Ee=ke-280,t(he!=null);U<fe;)ke=u[U++],he.X[(506832829*ke&4294967295)>>>he.Mb]=ke;ke=fe,t(!(Ee>>>(Ge=he).Xa)),u[ke]=Ge.X[Ee],Ee=!0}Ee||t(B.h==Q(B))}if(s.Pb&&B.h&&fe<A)t(s.m.h),s.a=5,s.m=s.wd,s.$=s.xd,0<s.s.ua&&ft(s.s.vb,s.s.Wa);else{if(B.h)break e;T!=null&&T(s,O>N?N:O),s.a=0,s.$=fe-g}return 1}return s.a=3,0}function yr(s){t(s!=null),s.vc=null,s.yc=null,s.Ya=null;var u=s.Wa;u!=null&&(u.X=null),s.vb=null,t(s!=null)}function Sn(){var s=new We;return s==null?null:(s.a=0,s.xb=wu,vt("Predictor","VP8LPredictors"),vt("Predictor","VP8LPredictors_C"),vt("PredictorAdd","VP8LPredictorsAdd"),vt("PredictorAdd","VP8LPredictorsAdd_C"),nr=ot,_a=Je,Sa=At,Pi=yt,ji=Be,Ri=at,wo=Nt,M.VP8LMapColor32b=qn,M.VP8LMapColor8b=wa,s)}function fn(s,u,g,x,A){var N=1,T=[s],O=[u],D=x.m,B=x.s,te=null,fe=0;e:for(;;){if(g)for(;N&&be(D,1);){var U=T,ie=O,ce=x,we=1,he=ce.m,ye=ce.gc[ce.ab],Se=be(he,2);if(ce.Oc&1<<Se)N=0;else{switch(ce.Oc|=1<<Se,ye.hc=Se,ye.Ea=U[0],ye.nc=ie[0],ye.K=[null],++ce.ab,t(4>=ce.ab),Se){case 0:case 1:ye.b=be(he,3)+2,we=fn(Ne(ye.Ea,ye.b),Ne(ye.nc,ye.b),0,ce,ye.K),ye.K=ye.K[0];break;case 3:var Ee,ke=be(he,8)+1,Ge=16<ke?0:4<ke?1:2<ke?2:3;if(U[0]=Ne(ye.Ea,Ge),ye.b=Ge,Ee=we=fn(ke,1,0,ce,ye.K)){var Me,pt=ke,Ue=ye,xt=1<<(8>>Ue.b),vr=a(xt);if(vr==null)Ee=0;else{var mt=Ue.K[0],He=Ue.w;for(vr[0]=Ue.K[0][0],Me=1;Me<1*pt;++Me)vr[Me]=Oe(mt[He+Me],vr[Me-1]);for(;Me<4*xt;++Me)vr[Me]=0;Ue.K[0]=null,Ue.K[0]=vr,Ee=1}}we=Ee;break;case 2:break;default:t(0)}N=we}}if(T=T[0],O=O[0],N&&be(D,1)&&!(N=1<=(fe=be(D,4))&&11>=fe)){x.a=3;break e}var Re;if(Re=N)t:{var or,dt,wt,Bt=x,Ar=T,Hr=O,Qt=fe,Ir=g,qr=Bt.m,br=Bt.s,_t=[null],Tt=1,Kt=0,It=M2[Qt];r:for(;;){if(Ir&&be(qr,1)){var kr=be(qr,3)+2,Tn=Ne(Ar,kr),ar=Ne(Hr,kr),Gr=Tn*ar;if(!fn(Tn,ar,0,Bt,_t))break r;for(_t=_t[0],br.xc=kr,or=0;or<Gr;++or){var Rt=_t[or]>>8&65535;_t[or]=Rt,Rt>=Tt&&(Tt=Rt+1)}}if(qr.h)break r;for(dt=0;5>dt;++dt){var xr=bu[dt];!dt&&0<Qt&&(xr+=1<<Qt),Kt<xr&&(Kt=xr)}var rn=l(Tt*It,G),$r=Tt,nn=l($r,oe);if(nn==null)var on=null;else t(65536>=$r),on=nn;var Yr=a(Kt);if(on==null||Yr==null||rn==null){Bt.a=1;break r}var an=rn;for(or=wt=0;or<Tt;++or){var Dt=on[or],sn=Dt.G,In=Dt.H,_o=0,fi=1,Lr=0;for(dt=0;5>dt;++dt){xr=bu[dt],sn[dt]=an,In[dt]=wt,!dt&&0<Qt&&(xr+=1<<Qt);i:{var ps,kl=xr,ms=Bt,Na=Yr,nf=an,of=wt,Ll=0,Di=ms.m,af=be(Di,1);if(o(Na,0,0,kl),af){var sf=be(Di,1)+1,lf=be(Di,1),Nu=be(Di,lf==0?1:8);Na[Nu]=1,sf==2&&(Na[Nu=be(Di,8)]=1);var gs=1}else{var Eu=a(19),Tu=be(Di,4)+4;if(19<Tu){ms.a=3;var vs=0;break i}for(ps=0;ps<Tu;++ps)Eu[R2[ps]]=be(Di,3);var Nl=void 0,Ea=void 0,Iu=ms,cf=Eu,bs=kl,Pu=Na,El=0,zi=Iu.m,ju=8,Ru=l(128,G);n:for(;F(Ru,0,7,cf,19);){if(be(zi,1)){var uf=2+2*be(zi,3);if((Nl=2+be(zi,uf))>bs)break n}else Nl=bs;for(Ea=0;Ea<bs&&Nl--;){ue(zi);var Ou=Ru[0+(127&V(zi))];re(zi,zi.u+Ou.g);var Uo=Ou.value;if(16>Uo)Pu[Ea++]=Uo,Uo!=0&&(ju=Uo);else{var hf=Uo==16,Mu=Uo-16,ff=P2[Mu],Fu=be(zi,I2[Mu])+ff;if(Ea+Fu>bs)break n;for(var df=hf?ju:0;0<Fu--;)Pu[Ea++]=df}}El=1;break n}El||(Iu.a=3),gs=El}(gs=gs&&!Di.h)&&(Ll=F(nf,of,8,Na,kl)),gs&&Ll!=0?vs=Ll:(ms.a=3,vs=0)}if(vs==0)break r;if(fi&&j2[dt]==1&&(fi=an[wt].g==0),_o+=an[wt].g,wt+=vs,3>=dt){var Ta,Tl=Yr[0];for(Ta=1;Ta<xr;++Ta)Yr[Ta]>Tl&&(Tl=Yr[Ta]);Lr+=Tl}}if(Dt.nd=fi,Dt.Qb=0,fi&&(Dt.qb=(sn[3][In[3]+0].value<<24|sn[1][In[1]+0].value<<16|sn[2][In[2]+0].value)>>>0,_o==0&&256>sn[0][In[0]+0].value&&(Dt.Qb=1,Dt.qb+=sn[0][In[0]+0].value<<8)),Dt.jc=!Dt.Qb&&6>Lr,Dt.jc){var xs,di=Dt;for(xs=0;xs<xo;++xs){var Bi=xs,Ui=di.pd[Bi],ws=di.G[0][di.H[0]+Bi];256<=ws.value?(Ui.g=ws.g+256,Ui.value=ws.value):(Ui.g=0,Ui.value=0,Bi>>=tr(ws,8,Ui),Bi>>=tr(di.G[1][di.H[1]+Bi],16,Ui),Bi>>=tr(di.G[2][di.H[2]+Bi],0,Ui),tr(di.G[3][di.H[3]+Bi],24,Ui))}}}br.vc=_t,br.Wb=Tt,br.Ya=on,br.yc=rn,Re=1;break t}Re=0}if(!(N=Re)){x.a=3;break e}if(0<fe){if(B.ua=1<<fe,!W(B.Wa,fe)){x.a=1,N=0;break e}}else B.ua=0;var Il=x,Du=T,pf=O,Pl=Il.s,jl=Pl.xc;if(Il.c=Du,Il.i=pf,Pl.md=Ne(Du,jl),Pl.wc=jl==0?-1:(1<<jl)-1,g){x.xb=$2;break e}if((te=a(T*O))==null){x.a=1,N=0;break e}N=(N=Ur(x,te,0,T,O,O,null))&&!D.h;break e}return N?(A!=null?A[0]=te:(t(te==null),t(g)),x.$=0,g||yr(B)):yr(B),N}function Kn(s,u){var g=s.c*s.i,x=g+u+16*u;return t(s.c<=u),s.V=a(x),s.V==null?(s.Ta=null,s.Ua=0,s.a=1,0):(s.Ta=s.V,s.Ua=s.Ba+g+u,1)}function yi(s,u){var g=s.C,x=u-g,A=s.V,N=s.Ba+s.c*g;for(t(u<=s.l.o);0<x;){var T=16<x?16:x,O=s.l.ma,D=s.l.width,B=D*T,te=O.ca,fe=O.tb+D*g,U=s.Ta,ie=s.Ua;Fn(s,T,A,N),uu(U,ie,te,fe,B),Br(O,g,g+T,te,fe,D),x-=T,A+=T*s.c,g+=T}t(g==u),s.C=s.Ma=u}function _i(){this.ub=this.yd=this.td=this.Rb=0}function ei(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Zi(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Ji(){this.Yb=function(){var s=[];return function u(g,x,A){for(var N=A[x],T=0;T<N&&(g.push(A.length>x+1?[]:0),!(A.length<x+1));T++)u(g[T],x+1,A)}(s,0,[3,11]),s}()}function Cn(){this.jb=a(3),this.Wc=c([4,8],Ji),this.Xc=c([4,17],Ji)}function Si(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function _r(){this.ld=this.La=this.dd=this.tc=0}function zn(){this.Na=this.la=0}function Ci(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Ai(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function Qi(){this.uc=this.M=this.Nb=0,this.wa=Array(new _r),this.Y=0,this.ya=Array(new Ai),this.aa=0,this.l=new Bn}function ti(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Ki(){this.cb=this.a=0,this.sc="",this.m=new L,this.Od=new _i,this.Kc=new ei,this.ed=new Si,this.Qa=new Zi,this.Ic=this.$c=this.Aa=0,this.D=new Qi,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=l(8,L),this.ia=0,this.pb=l(4,Ci),this.Pa=new Cn,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new ti),this.Hd=0,this.rb=Array(new zn),this.sb=0,this.wa=Array(new _r),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Ai),this.L=this.aa=0,this.gd=c([4,2],_r),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Bn(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function eo(){var s=new Ki;return s!=null&&(s.a=0,s.sc="OK",s.cb=0,s.Xb=0,ka||(ka=An)),s}function Vt(s,u,g){return s.a==0&&(s.a=u,s.sc=g,s.cb=0),0}function oa(s,u,g){return 3<=g&&s[u+0]==157&&s[u+1]==1&&s[u+2]==42}function to(s,u){if(s==null)return 0;if(s.a=0,s.sc="OK",u==null)return Vt(s,2,"null VP8Io passed to VP8GetHeaders()");var g=u.data,x=u.w,A=u.ha;if(4>A)return Vt(s,7,"Truncated header.");var N=g[x+0]|g[x+1]<<8|g[x+2]<<16,T=s.Od;if(T.Rb=!(1&N),T.td=N>>1&7,T.yd=N>>4&1,T.ub=N>>5,3<T.td)return Vt(s,3,"Incorrect keyframe parameters.");if(!T.yd)return Vt(s,4,"Frame not displayable.");x+=3,A-=3;var O=s.Kc;if(T.Rb){if(7>A)return Vt(s,7,"cannot parse picture header");if(!oa(g,x,A))return Vt(s,3,"Bad code word");O.c=16383&(g[x+4]<<8|g[x+3]),O.Td=g[x+4]>>6,O.i=16383&(g[x+6]<<8|g[x+5]),O.Ud=g[x+6]>>6,x+=7,A-=7,s.za=O.c+15>>4,s.Ub=O.i+15>>4,u.width=O.c,u.height=O.i,u.Da=0,u.j=0,u.v=0,u.va=u.width,u.o=u.height,u.da=0,u.ib=u.width,u.hb=u.height,u.U=u.width,u.T=u.height,o((N=s.Pa).jb,0,255,N.jb.length),t((N=s.Qa)!=null),N.Cb=0,N.Bb=0,N.Fb=1,o(N.Zb,0,0,N.Zb.length),o(N.Lb,0,0,N.Lb)}if(T.ub>A)return Vt(s,7,"bad partition length");se(N=s.m,g,x,T.ub),x+=T.ub,A-=T.ub,T.Rb&&(O.Ld=me(N),O.Kd=me(N)),O=s.Qa;var D,B=s.Pa;if(t(N!=null),t(O!=null),O.Cb=me(N),O.Cb){if(O.Bb=me(N),me(N)){for(O.Fb=me(N),D=0;4>D;++D)O.Zb[D]=me(N)?ee(N,7):0;for(D=0;4>D;++D)O.Lb[D]=me(N)?ee(N,6):0}if(O.Bb)for(D=0;3>D;++D)B.jb[D]=me(N)?pe(N,8):255}else O.Bb=0;if(N.Ka)return Vt(s,3,"cannot parse segment header");if((O=s.ed).zd=me(N),O.Tb=pe(N,6),O.wb=pe(N,3),O.Pc=me(N),O.Pc&&me(N)){for(B=0;4>B;++B)me(N)&&(O.vd[B]=ee(N,6));for(B=0;4>B;++B)me(N)&&(O.od[B]=ee(N,6))}if(s.L=O.Tb==0?0:O.zd?1:2,N.Ka)return Vt(s,3,"cannot parse filter header");var te=A;if(A=D=x,x=D+te,O=te,s.Xb=(1<<pe(s.m,2))-1,te<3*(B=s.Xb))g=7;else{for(D+=3*B,O-=3*B,te=0;te<B;++te){var fe=g[A+0]|g[A+1]<<8|g[A+2]<<16;fe>O&&(fe=O),se(s.Jc[+te],g,D,fe),D+=fe,O-=fe,A+=3}se(s.Jc[+B],g,D,O),g=D<x?0:5}if(g!=0)return Vt(s,g,"cannot parse partitions");for(g=pe(D=s.m,7),A=me(D)?ee(D,4):0,x=me(D)?ee(D,4):0,O=me(D)?ee(D,4):0,B=me(D)?ee(D,4):0,D=me(D)?ee(D,4):0,te=s.Qa,fe=0;4>fe;++fe){if(te.Cb){var U=te.Zb[fe];te.Fb||(U+=g)}else{if(0<fe){s.pb[fe]=s.pb[0];continue}U=g}var ie=s.pb[fe];ie.Sc[0]=Sl[Jt(U+A,127)],ie.Sc[1]=Cl[Jt(U+0,127)],ie.Eb[0]=2*Sl[Jt(U+x,127)],ie.Eb[1]=101581*Cl[Jt(U+O,127)]>>16,8>ie.Eb[1]&&(ie.Eb[1]=8),ie.Qc[0]=Sl[Jt(U+B,117)],ie.Qc[1]=Cl[Jt(U+D,127)],ie.lc=U+D}if(!T.Rb)return Vt(s,4,"Not a key frame.");for(me(N),T=s.Pa,g=0;4>g;++g){for(A=0;8>A;++A)for(x=0;3>x;++x)for(O=0;11>O;++O)B=xe(N,H2[g][A][x][O])?pe(N,8):B2[g][A][x][O],T.Wc[g][A].Yb[x][O]=B;for(A=0;17>A;++A)T.Xc[g][A]=T.Wc[g][q2[A]]}return s.kc=me(N),s.kc&&(s.Bd=pe(N,8)),s.cb=1}function An(s,u,g,x,A,N,T){var O=u[A].Yb[g];for(g=0;16>A;++A){if(!xe(s,O[g+0]))return A;for(;!xe(s,O[g+1]);)if(O=u[++A].Yb[0],g=0,A==16)return 16;var D=u[A+1].Yb;if(xe(s,O[g+2])){var B=s,te=0;if(xe(B,(U=O)[(fe=g)+3]))if(xe(B,U[fe+6])){for(O=0,fe=2*(te=xe(B,U[fe+8]))+(U=xe(B,U[fe+9+te])),te=0,U=D2[fe];U[O];++O)te+=te+xe(B,U[O]);te+=3+(8<<fe)}else xe(B,U[fe+7])?(te=7+2*xe(B,165),te+=xe(B,145)):te=5+xe(B,159);else te=xe(B,U[fe+4])?3+xe(B,U[fe+5]):2;O=D[2]}else te=1,O=D[1];D=T+z2[A],0>(B=s).b&&ge(B);var fe,U=B.b,ie=(fe=B.Ca>>1)-(B.I>>U)>>31;--B.b,B.Ca+=ie,B.Ca|=1,B.I-=(fe+1&ie)<<U,N[D]=((te^ie)-ie)*x[(0<A)+0]}return 16}function kn(s){var u=s.rb[s.sb-1];u.la=0,u.Na=0,o(s.zc,0,0,s.zc.length),s.ja=0}function Qr(s,u,g,x,A){A=s[u+g+32*x]+(A>>3),s[u+g+32*x]=-256&A?0>A?0:255:A}function ri(s,u,g,x,A,N){Qr(s,u,0,g,x+A),Qr(s,u,1,g,x+N),Qr(s,u,2,g,x-N),Qr(s,u,3,g,x-A)}function Mt(s){return(20091*s>>16)+s}function ro(s,u,g,x){var A,N=0,T=a(16);for(A=0;4>A;++A){var O=s[u+0]+s[u+8],D=s[u+0]-s[u+8],B=(35468*s[u+4]>>16)-Mt(s[u+12]),te=Mt(s[u+4])+(35468*s[u+12]>>16);T[N+0]=O+te,T[N+1]=D+B,T[N+2]=D-B,T[N+3]=O-te,N+=4,u++}for(A=N=0;4>A;++A)O=(s=T[N+0]+4)+T[N+8],D=s-T[N+8],B=(35468*T[N+4]>>16)-Mt(T[N+12]),Qr(g,x,0,0,O+(te=Mt(T[N+4])+(35468*T[N+12]>>16))),Qr(g,x,1,0,D+B),Qr(g,x,2,0,D-B),Qr(g,x,3,0,O-te),N++,x+=32}function no(s,u,g,x){var A=s[u+0]+4,N=35468*s[u+4]>>16,T=Mt(s[u+4]),O=35468*s[u+1]>>16;ri(g,x,0,A+T,s=Mt(s[u+1]),O),ri(g,x,1,A+N,s,O),ri(g,x,2,A-N,s,O),ri(g,x,3,A-T,s,O)}function Po(s,u,g,x,A){ro(s,u,g,x),A&&ro(s,u+16,g,x+4)}function aa(s,u,g,x){yo(s,u+0,g,x,1),yo(s,u+32,g,x+128,1)}function Er(s,u,g,x){var A;for(s=s[u+0]+4,A=0;4>A;++A)for(u=0;4>u;++u)Qr(g,x,u,A,s)}function io(s,u,g,x){s[u+0]&&kt(s,u+0,g,x),s[u+16]&&kt(s,u+16,g,x+4),s[u+32]&&kt(s,u+32,g,x+128),s[u+48]&&kt(s,u+48,g,x+128+4)}function jo(s,u,g,x){var A,N=a(16);for(A=0;4>A;++A){var T=s[u+0+A]+s[u+12+A],O=s[u+4+A]+s[u+8+A],D=s[u+4+A]-s[u+8+A],B=s[u+0+A]-s[u+12+A];N[0+A]=T+O,N[8+A]=T-O,N[4+A]=B+D,N[12+A]=B-D}for(A=0;4>A;++A)T=(s=N[0+4*A]+3)+N[3+4*A],O=N[1+4*A]+N[2+4*A],D=N[1+4*A]-N[2+4*A],B=s-N[3+4*A],g[x+0]=T+O>>3,g[x+16]=B+D>>3,g[x+32]=T-O>>3,g[x+48]=B-D>>3,x+=64}function Ln(s,u,g){var x,A=u-32,N=tn,T=255-s[A-1];for(x=0;x<g;++x){var O,D=N,B=T+s[u-1];for(O=0;O<g;++O)s[u+O]=D[B+s[A+O]];u+=32}}function oo(s,u){Ln(s,u,4)}function sa(s,u){Ln(s,u,8)}function la(s,u){Ln(s,u,16)}function Ro(s,u){var g;for(g=0;16>g;++g)n(s,u+32*g,s,u-32,16)}function de(s,u){var g;for(g=16;0<g;--g)o(s,u,s[u-1],16),u+=32}function ct(s,u,g){var x;for(x=0;16>x;++x)o(u,g+32*x,s,16)}function zt(s,u){var g,x=16;for(g=0;16>g;++g)x+=s[u-1+32*g]+s[u+g-32];ct(x>>5,s,u)}function dn(s,u){var g,x=8;for(g=0;16>g;++g)x+=s[u-1+32*g];ct(x>>4,s,u)}function rr(s,u){var g,x=8;for(g=0;16>g;++g)x+=s[u+g-32];ct(x>>4,s,u)}function ni(s,u){ct(128,s,u)}function et(s,u,g){return s+2*u+g+2>>2}function ca(s,u){var g,x=u-32;for(x=new Uint8Array([et(s[x-1],s[x+0],s[x+1]),et(s[x+0],s[x+1],s[x+2]),et(s[x+1],s[x+2],s[x+3]),et(s[x+2],s[x+3],s[x+4])]),g=0;4>g;++g)n(s,u+32*g,x,0,x.length)}function Vr(s,u){var g=s[u-1],x=s[u-1+32],A=s[u-1+64],N=s[u-1+96];Ae(s,u+0,16843009*et(s[u-1-32],g,x)),Ae(s,u+32,16843009*et(g,x,A)),Ae(s,u+64,16843009*et(x,A,N)),Ae(s,u+96,16843009*et(A,N,N))}function ao(s,u){var g,x=4;for(g=0;4>g;++g)x+=s[u+g-32]+s[u-1+32*g];for(x>>=3,g=0;4>g;++g)o(s,u+32*g,x,4)}function ua(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1-32],T=s[u+0-32],O=s[u+1-32],D=s[u+2-32],B=s[u+3-32];s[u+0+96]=et(x,A,s[u-1+96]),s[u+1+96]=s[u+0+64]=et(g,x,A),s[u+2+96]=s[u+1+64]=s[u+0+32]=et(N,g,x),s[u+3+96]=s[u+2+64]=s[u+1+32]=s[u+0+0]=et(T,N,g),s[u+3+64]=s[u+2+32]=s[u+1+0]=et(O,T,N),s[u+3+32]=s[u+2+0]=et(D,O,T),s[u+3+0]=et(B,D,O)}function pn(s,u){var g=s[u+1-32],x=s[u+2-32],A=s[u+3-32],N=s[u+4-32],T=s[u+5-32],O=s[u+6-32],D=s[u+7-32];s[u+0+0]=et(s[u+0-32],g,x),s[u+1+0]=s[u+0+32]=et(g,x,A),s[u+2+0]=s[u+1+32]=s[u+0+64]=et(x,A,N),s[u+3+0]=s[u+2+32]=s[u+1+64]=s[u+0+96]=et(A,N,T),s[u+3+32]=s[u+2+64]=s[u+1+96]=et(N,T,O),s[u+3+64]=s[u+2+96]=et(T,O,D),s[u+3+96]=et(O,D,D)}function mn(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1-32],T=s[u+0-32],O=s[u+1-32],D=s[u+2-32],B=s[u+3-32];s[u+0+0]=s[u+1+64]=N+T+1>>1,s[u+1+0]=s[u+2+64]=T+O+1>>1,s[u+2+0]=s[u+3+64]=O+D+1>>1,s[u+3+0]=D+B+1>>1,s[u+0+96]=et(A,x,g),s[u+0+64]=et(x,g,N),s[u+0+32]=s[u+1+96]=et(g,N,T),s[u+1+32]=s[u+2+96]=et(N,T,O),s[u+2+32]=s[u+3+96]=et(T,O,D),s[u+3+32]=et(O,D,B)}function ha(s,u){var g=s[u+0-32],x=s[u+1-32],A=s[u+2-32],N=s[u+3-32],T=s[u+4-32],O=s[u+5-32],D=s[u+6-32],B=s[u+7-32];s[u+0+0]=g+x+1>>1,s[u+1+0]=s[u+0+64]=x+A+1>>1,s[u+2+0]=s[u+1+64]=A+N+1>>1,s[u+3+0]=s[u+2+64]=N+T+1>>1,s[u+0+32]=et(g,x,A),s[u+1+32]=s[u+0+96]=et(x,A,N),s[u+2+32]=s[u+1+96]=et(A,N,T),s[u+3+32]=s[u+2+96]=et(N,T,O),s[u+3+64]=et(T,O,D),s[u+3+96]=et(O,D,B)}function Oo(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1+96];s[u+0+0]=g+x+1>>1,s[u+2+0]=s[u+0+32]=x+A+1>>1,s[u+2+32]=s[u+0+64]=A+N+1>>1,s[u+1+0]=et(g,x,A),s[u+3+0]=s[u+1+32]=et(x,A,N),s[u+3+32]=s[u+1+64]=et(A,N,N),s[u+3+64]=s[u+2+64]=s[u+0+96]=s[u+1+96]=s[u+2+96]=s[u+3+96]=N}function ii(s,u){var g=s[u-1+0],x=s[u-1+32],A=s[u-1+64],N=s[u-1+96],T=s[u-1-32],O=s[u+0-32],D=s[u+1-32],B=s[u+2-32];s[u+0+0]=s[u+2+32]=g+T+1>>1,s[u+0+32]=s[u+2+64]=x+g+1>>1,s[u+0+64]=s[u+2+96]=A+x+1>>1,s[u+0+96]=N+A+1>>1,s[u+3+0]=et(O,D,B),s[u+2+0]=et(T,O,D),s[u+1+0]=s[u+3+32]=et(g,T,O),s[u+1+32]=s[u+3+64]=et(x,g,T),s[u+1+64]=s[u+3+96]=et(A,x,g),s[u+1+96]=et(N,A,x)}function ki(s,u){var g;for(g=0;8>g;++g)n(s,u+32*g,s,u-32,8)}function Un(s,u){var g;for(g=0;8>g;++g)o(s,u,s[u-1],8),u+=32}function oi(s,u,g){var x;for(x=0;8>x;++x)o(u,g+32*x,s,8)}function Li(s,u){var g,x=8;for(g=0;8>g;++g)x+=s[u+g-32]+s[u-1+32*g];oi(x>>4,s,u)}function fa(s,u){var g,x=4;for(g=0;8>g;++g)x+=s[u+g-32];oi(x>>3,s,u)}function Nn(s,u){var g,x=4;for(g=0;8>g;++g)x+=s[u-1+32*g];oi(x>>3,s,u)}function Hn(s,u){oi(128,s,u)}function so(s,u,g){var x=s[u-g],A=s[u+0],N=3*(A-x)+bl[1020+s[u-2*g]-s[u+g]],T=os[112+(N+4>>3)];s[u-g]=tn[255+x+os[112+(N+3>>3)]],s[u+0]=tn[255+A-T]}function lo(s,u,g,x){var A=s[u+0],N=s[u+g];return xn[255+s[u-2*g]-s[u-g]]>x||xn[255+N-A]>x}function da(s,u,g,x){return 4*xn[255+s[u-g]-s[u+0]]+xn[255+s[u-2*g]-s[u+g]]<=x}function Mo(s,u,g,x,A){var N=s[u-3*g],T=s[u-2*g],O=s[u-g],D=s[u+0],B=s[u+g],te=s[u+2*g],fe=s[u+3*g];return 4*xn[255+O-D]+xn[255+T-B]>x?0:xn[255+s[u-4*g]-N]<=A&&xn[255+N-T]<=A&&xn[255+T-O]<=A&&xn[255+fe-te]<=A&&xn[255+te-B]<=A&&xn[255+B-D]<=A}function pa(s,u,g,x){var A=2*x+1;for(x=0;16>x;++x)da(s,u+x,g,A)&&so(s,u+x,g)}function co(s,u,g,x){var A=2*x+1;for(x=0;16>x;++x)da(s,u+x*g,1,A)&&so(s,u+x*g,1)}function Za(s,u,g,x){var A;for(A=3;0<A;--A)pa(s,u+=4*g,g,x)}function Ja(s,u,g,x){var A;for(A=3;0<A;--A)co(s,u+=4,g,x)}function ai(s,u,g,x,A,N,T,O){for(N=2*N+1;0<A--;){if(Mo(s,u,g,N,T))if(lo(s,u,g,O))so(s,u,g);else{var D=s,B=u,te=g,fe=D[B-2*te],U=D[B-te],ie=D[B+0],ce=D[B+te],we=D[B+2*te],he=27*(Se=bl[1020+3*(ie-U)+bl[1020+fe-ce]])+63>>7,ye=18*Se+63>>7,Se=9*Se+63>>7;D[B-3*te]=tn[255+D[B-3*te]+Se],D[B-2*te]=tn[255+fe+ye],D[B-te]=tn[255+U+he],D[B+0]=tn[255+ie-he],D[B+te]=tn[255+ce-ye],D[B+2*te]=tn[255+we-Se]}u+=x}}function si(s,u,g,x,A,N,T,O){for(N=2*N+1;0<A--;){if(Mo(s,u,g,N,T))if(lo(s,u,g,O))so(s,u,g);else{var D=s,B=u,te=g,fe=D[B-te],U=D[B+0],ie=D[B+te],ce=os[112+(4+(we=3*(U-fe))>>3)],we=os[112+(we+3>>3)],he=ce+1>>1;D[B-2*te]=tn[255+D[B-2*te]+he],D[B-te]=tn[255+fe+we],D[B+0]=tn[255+U-ce],D[B+te]=tn[255+ie-he]}u+=x}}function Qa(s,u,g,x,A,N){ai(s,u,g,1,16,x,A,N)}function Ka(s,u,g,x,A,N){ai(s,u,1,g,16,x,A,N)}function uo(s,u,g,x,A,N){var T;for(T=3;0<T;--T)si(s,u+=4*g,g,1,16,x,A,N)}function es(s,u,g,x,A,N){var T;for(T=3;0<T;--T)si(s,u+=4,1,g,16,x,A,N)}function m(s,u,g,x,A,N,T,O){ai(s,u,A,1,8,N,T,O),ai(g,x,A,1,8,N,T,O)}function C(s,u,g,x,A,N,T,O){ai(s,u,1,A,8,N,T,O),ai(g,x,1,A,8,N,T,O)}function q(s,u,g,x,A,N,T,O){si(s,u+4*A,A,1,8,N,T,O),si(g,x+4*A,A,1,8,N,T,O)}function Z(s,u,g,x,A,N,T,O){si(s,u+4,1,A,8,N,T,O),si(g,x+4,1,A,8,N,T,O)}function ae(){this.ba=new Et,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new bt,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function _e(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Le(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function ze(){this.ua=0,this.Wa=new Ke,this.vb=new Ke,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new oe,this.yc=new G}function We(){this.xb=this.a=0,this.l=new Bn,this.ca=new Et,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new H,this.Pb=0,this.wd=new H,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new ze,this.ab=0,this.gc=l(4,Le),this.Oc=0}function st(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Bn,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ut(s,u,g,x,A,N,T){for(s=s==null?0:s[u+0],u=0;u<T;++u)A[N+u]=s+g[x+u]&255,s=A[N+u]}function Ct(s,u,g,x,A,N,T){var O;if(s==null)ut(null,null,g,x,A,N,T);else for(O=0;O<T;++O)A[N+O]=s[u+O]+g[x+O]&255}function Wt(s,u,g,x,A,N,T){if(s==null)ut(null,null,g,x,A,N,T);else{var O,D=s[u+0],B=D,te=D;for(O=0;O<T;++O)B=te+(D=s[u+O])-B,te=g[x+O]+(-256&B?0>B?0:255:B)&255,B=D,A[N+O]=te}}function fr(s,u,g,x){var A=u.width,N=u.o;if(t(s!=null&&u!=null),0>g||0>=x||g+x>N)return null;if(!s.Cc){if(s.ga==null){var T;if(s.ga=new st,(T=s.ga==null)||(T=u.width*u.o,t(s.Gb.length==0),s.Gb=a(T),s.Uc=0,s.Gb==null?T=0:(s.mb=s.Gb,s.nb=s.Uc,s.rc=null,T=1),T=!T),!T){T=s.ga;var O=s.Fa,D=s.P,B=s.qc,te=s.mb,fe=s.nb,U=D+1,ie=B-1,ce=T.l;if(t(O!=null&&te!=null&&u!=null),Fi[0]=null,Fi[1]=ut,Fi[2]=Ct,Fi[3]=Wt,T.ca=te,T.tb=fe,T.c=u.width,T.i=u.height,t(0<T.c&&0<T.i),1>=B)u=0;else if(T.$a=3&O[D+0],T.Z=O[D+0]>>2&3,T.Lc=O[D+0]>>4&3,D=O[D+0]>>6&3,0>T.$a||1<T.$a||4<=T.Z||1<T.Lc||D)u=0;else if(ce.put=Ze,ce.ac=Jr,ce.bc=un,ce.ma=T,ce.width=u.width,ce.height=u.height,ce.Da=u.Da,ce.v=u.v,ce.va=u.va,ce.j=u.j,ce.o=u.o,T.$a)e:{t(T.$a==1),u=Sn();t:for(;;){if(u==null){u=0;break e}if(t(T!=null),T.mc=u,u.c=T.c,u.i=T.i,u.l=T.l,u.l.ma=T,u.l.width=T.c,u.l.height=T.i,u.a=0,le(u.m,O,U,ie),!fn(T.c,T.i,1,u,null)||(u.ab==1&&u.gc[0].hc==3&&zr(u.s)?(T.ic=1,O=u.c*u.i,u.Ta=null,u.Ua=0,u.V=a(O),u.Ba=0,u.V==null?(u.a=1,u=0):u=1):(T.ic=0,u=Kn(u,T.c)),!u))break t;u=1;break e}T.mc=null,u=0}else u=ie>=T.c*T.i;T=!u}if(T)return null;s.ga.Lc!=1?s.Ga=0:x=N-g}t(s.ga!=null),t(g+x<=N);e:{if(u=(O=s.ga).c,N=O.l.o,O.$a==0){if(U=s.rc,ie=s.Vc,ce=s.Fa,D=s.P+1+g*u,B=s.mb,te=s.nb+g*u,t(D<=s.P+s.qc),O.Z!=0)for(t(Fi[O.Z]!=null),T=0;T<x;++T)Fi[O.Z](U,ie,ce,D,B,te,u),U=B,ie=te,te+=u,D+=u;else for(T=0;T<x;++T)n(B,te,ce,D,u),U=B,ie=te,te+=u,D+=u;s.rc=U,s.Vc=ie}else{if(t(O.mc!=null),u=g+x,t((T=O.mc)!=null),t(u<=T.i),T.C>=u)u=1;else if(O.ic||gn(),O.ic){O=T.V,U=T.Ba,ie=T.c;var we=T.i,he=(ce=1,D=T.$/ie,B=T.$%ie,te=T.m,fe=T.s,T.$),ye=ie*we,Se=ie*u,Ee=fe.wc,ke=he<Se?hr(fe,B,D):null;t(he<=ye),t(u<=we),t(zr(fe));t:for(;;){for(;!te.h&&he<Se;){if(B&Ee||(ke=hr(fe,B,D)),t(ke!=null),ue(te),256>(we=qt(ke.G[0],ke.H[0],te)))O[U+he]=we,++he,++B>=ie&&(B=0,++D<=u&&!(D%16)&&wr(T,D));else{if(!(280>we)){ce=0;break t}we=Fr(we-256,te);var Ge,Me=qt(ke.G[4],ke.H[4],te);if(ue(te),!(he>=(Me=Dr(ie,Me=Fr(Me,te)))&&ye-he>=we)){ce=0;break t}for(Ge=0;Ge<we;++Ge)O[U+he+Ge]=O[U+he+Ge-Me];for(he+=we,B+=we;B>=ie;)B-=ie,++D<=u&&!(D%16)&&wr(T,D);he<Se&&B&Ee&&(ke=hr(fe,B,D))}t(te.h==Q(te))}wr(T,D>u?u:D);break t}!ce||te.h&&he<ye?(ce=0,T.a=te.h?5:3):T.$=he,u=ce}else u=Ur(T,T.V,T.Ba,T.c,T.i,u,yi);if(!u){x=0;break e}}g+x>=N&&(s.Cc=1),x=1}if(!x)return null;if(s.Cc&&((x=s.ga)!=null&&(x.mc=null),s.ga=null,0<s.Ga))return alert("todo:WebPDequantizeLevels"),null}return s.nb+g*A}function Ft(s,u,g,x,A,N){for(;0<A--;){var T,O=s,D=u+(g?1:0),B=s,te=u+(g?0:3);for(T=0;T<x;++T){var fe=B[te+4*T];fe!=255&&(fe*=32897,O[D+4*T+0]=O[D+4*T+0]*fe>>23,O[D+4*T+1]=O[D+4*T+1]*fe>>23,O[D+4*T+2]=O[D+4*T+2]*fe>>23)}u+=N}}function mr(s,u,g,x,A){for(;0<x--;){var N;for(N=0;N<g;++N){var T=s[u+2*N+0],O=15&(B=s[u+2*N+1]),D=4369*O,B=(240&B|B>>4)*D>>16;s[u+2*N+0]=(240&T|T>>4)*D>>16&240|(15&T|T<<4)*D>>16>>4&15,s[u+2*N+1]=240&B|O}u+=A}}function dr(s,u,g,x,A,N,T,O){var D,B,te=255;for(B=0;B<A;++B){for(D=0;D<x;++D){var fe=s[u+D];N[T+4*D]=fe,te&=fe}u+=g,T+=O}return te!=255}function Cr(s,u,g,x,A){var N;for(N=0;N<A;++N)g[x+N]=s[u+N]>>8}function gn(){Aa=Ft,lu=mr,cu=dr,uu=Cr}function Wr(s,u,g){M[s]=function(x,A,N,T,O,D,B,te,fe,U,ie,ce,we,he,ye,Se,Ee){var ke,Ge=Ee-1>>1,Me=O[D+0]|B[te+0]<<16,pt=fe[U+0]|ie[ce+0]<<16;t(x!=null);var Ue=3*Me+pt+131074>>2;for(u(x[A+0],255&Ue,Ue>>16,we,he),N!=null&&(Ue=3*pt+Me+131074>>2,u(N[T+0],255&Ue,Ue>>16,ye,Se)),ke=1;ke<=Ge;++ke){var xt=O[D+ke]|B[te+ke]<<16,vr=fe[U+ke]|ie[ce+ke]<<16,mt=Me+xt+pt+vr+524296,He=mt+2*(xt+pt)>>3;Ue=He+Me>>1,Me=(mt=mt+2*(Me+vr)>>3)+xt>>1,u(x[A+2*ke-1],255&Ue,Ue>>16,we,he+(2*ke-1)*g),u(x[A+2*ke-0],255&Me,Me>>16,we,he+(2*ke-0)*g),N!=null&&(Ue=mt+pt>>1,Me=He+vr>>1,u(N[T+2*ke-1],255&Ue,Ue>>16,ye,Se+(2*ke-1)*g),u(N[T+2*ke+0],255&Me,Me>>16,ye,Se+(2*ke+0)*g)),Me=xt,pt=vr}1&Ee||(Ue=3*Me+pt+131074>>2,u(x[A+Ee-1],255&Ue,Ue>>16,we,he+(Ee-1)*g),N!=null&&(Ue=3*pt+Me+131074>>2,u(N[T+Ee-1],255&Ue,Ue>>16,ye,Se+(Ee-1)*g)))}}function ts(){wn[as]=V2,wn[ss]=yu,wn[gu]=W2,wn[ls]=_u,wn[cs]=Su,wn[xl]=Cu,wn[vu]=G2,wn[wl]=yu,wn[yl]=_u,wn[us]=Su,wn[_l]=Cu}function Fo(s){return s&-16384?0>s?0:255:s>>Y2}function ho(s,u){return Fo((19077*s>>8)+(26149*u>>8)-14234)}function Ni(s,u,g){return Fo((19077*s>>8)-(6419*u>>8)-(13320*g>>8)+8708)}function fo(s,u){return Fo((19077*s>>8)+(33050*u>>8)-17685)}function po(s,u,g,x,A){x[A+0]=ho(s,g),x[A+1]=Ni(s,u,g),x[A+2]=fo(s,u)}function mo(s,u,g,x,A){x[A+0]=fo(s,u),x[A+1]=Ni(s,u,g),x[A+2]=ho(s,g)}function Tr(s,u,g,x,A){var N=Ni(s,u,g);u=N<<3&224|fo(s,u)>>3,x[A+0]=248&ho(s,g)|N>>5,x[A+1]=u}function go(s,u,g,x,A){var N=240&fo(s,u)|15;x[A+0]=240&ho(s,g)|Ni(s,u,g)>>4,x[A+1]=N}function vo(s,u,g,x,A){x[A+0]=255,po(s,u,g,x,A+1)}function ma(s,u,g,x,A){mo(s,u,g,x,A),x[A+3]=255}function ga(s,u,g,x,A){po(s,u,g,x,A),x[A+3]=255}function Jt(s,u){return 0>s?0:s>u?u:s}function li(s,u,g){M[s]=function(x,A,N,T,O,D,B,te,fe){for(var U=te+(-2&fe)*g;te!=U;)u(x[A+0],N[T+0],O[D+0],B,te),u(x[A+1],N[T+0],O[D+0],B,te+g),A+=2,++T,++D,te+=2*g;1&fe&&u(x[A+0],N[T+0],O[D+0],B,te)}}function Do(s,u,g){return g==0?s==0?u==0?6:5:u==0?4:0:g}function rs(s,u,g,x,A){switch(s>>>30){case 3:yo(u,g,x,A,0);break;case 2:bn(u,g,x,A);break;case 1:kt(u,g,x,A)}}function vn(s,u){var g,x,A=u.M,N=u.Nb,T=s.oc,O=s.pc+40,D=s.oc,B=s.pc+584,te=s.oc,fe=s.pc+600;for(g=0;16>g;++g)T[O+32*g-1]=129;for(g=0;8>g;++g)D[B+32*g-1]=129,te[fe+32*g-1]=129;for(0<A?T[O-1-32]=D[B-1-32]=te[fe-1-32]=129:(o(T,O-32-1,127,21),o(D,B-32-1,127,9),o(te,fe-32-1,127,9)),x=0;x<s.za;++x){var U=u.ya[u.aa+x];if(0<x){for(g=-1;16>g;++g)n(T,O+32*g-4,T,O+32*g+12,4);for(g=-1;8>g;++g)n(D,B+32*g-4,D,B+32*g+4,4),n(te,fe+32*g-4,te,fe+32*g+4,4)}var ie=s.Gd,ce=s.Hd+x,we=U.ad,he=U.Hc;if(0<A&&(n(T,O-32,ie[ce].y,0,16),n(D,B-32,ie[ce].f,0,8),n(te,fe-32,ie[ce].ea,0,8)),U.Za){var ye=T,Se=O-32+16;for(0<A&&(x>=s.za-1?o(ye,Se,ie[ce].y[15],4):n(ye,Se,ie[ce+1].y,0,4)),g=0;4>g;g++)ye[Se+128+g]=ye[Se+256+g]=ye[Se+384+g]=ye[Se+0+g];for(g=0;16>g;++g,he<<=2)ye=T,Se=O+ku[g],En[U.Ob[g]](ye,Se),rs(he,we,16*+g,ye,Se)}else if(ye=Do(x,A,U.Ob[0]),Mi[ye](T,O),he!=0)for(g=0;16>g;++g,he<<=2)rs(he,we,16*+g,T,O+ku[g]);for(g=U.Gc,ye=Do(x,A,U.Dd),hi[ye](D,B),hi[ye](te,fe),he=we,ye=D,Se=B,255&(U=0|g)&&(170&U?Vn(he,256,ye,Se):jt(he,256,ye,Se)),U=te,he=fe,255&(g>>=8)&&(170&g?Vn(we,320,U,he):jt(we,320,U,he)),A<s.Ub-1&&(n(ie[ce].y,0,T,O+480,16),n(ie[ce].f,0,D,B+224,8),n(ie[ce].ea,0,te,fe+224,8)),g=8*N*s.B,ie=s.sa,ce=s.ta+16*x+16*N*s.R,we=s.qa,U=s.ra+8*x+g,he=s.Ha,ye=s.Ia+8*x+g,g=0;16>g;++g)n(ie,ce+g*s.R,T,O+32*g,16);for(g=0;8>g;++g)n(we,U+g*s.B,D,B+32*g,8),n(he,ye+g*s.B,te,fe+32*g,8)}}function bo(s,u,g,x,A,N,T,O,D){var B=[0],te=[0],fe=0,U=D!=null?D.kd:0,ie=D??new _e;if(s==null||12>g)return 7;ie.data=s,ie.w=u,ie.ha=g,u=[u],g=[g],ie.gb=[ie.gb];e:{var ce=u,we=g,he=ie.gb;if(t(s!=null),t(we!=null),t(he!=null),he[0]=0,12<=we[0]&&!r(s,ce[0],"RIFF")){if(r(s,ce[0]+8,"WEBP")){he=3;break e}var ye=ve(s,ce[0]+4);if(12>ye||4294967286<ye){he=3;break e}if(U&&ye>we[0]-8){he=7;break e}he[0]=ye,ce[0]+=12,we[0]-=12}he=0}if(he!=0)return he;for(ye=0<ie.gb[0],g=g[0];;){e:{var Se=s;we=u,he=g;var Ee=B,ke=te,Ge=ce=[0];if((Ue=fe=[fe])[0]=0,8>he[0])he=7;else{if(!r(Se,we[0],"VP8X")){if(ve(Se,we[0]+4)!=10){he=3;break e}if(18>he[0]){he=7;break e}var Me=ve(Se,we[0]+8),pt=1+Pe(Se,we[0]+12);if(2147483648<=pt*(Se=1+Pe(Se,we[0]+15))){he=3;break e}Ge!=null&&(Ge[0]=Me),Ee!=null&&(Ee[0]=pt),ke!=null&&(ke[0]=Se),we[0]+=18,he[0]-=18,Ue[0]=1}he=0}}if(fe=fe[0],ce=ce[0],he!=0)return he;if(we=!!(2&ce),!ye&&fe)return 3;if(N!=null&&(N[0]=!!(16&ce)),T!=null&&(T[0]=we),O!=null&&(O[0]=0),T=B[0],ce=te[0],fe&&we&&D==null){he=0;break}if(4>g){he=7;break}if(ye&&fe||!ye&&!fe&&!r(s,u[0],"ALPH")){g=[g],ie.na=[ie.na],ie.P=[ie.P],ie.Sa=[ie.Sa];e:{Me=s,he=u,ye=g;var Ue=ie.gb;Ee=ie.na,ke=ie.P,Ge=ie.Sa,pt=22,t(Me!=null),t(ye!=null),Se=he[0];var xt=ye[0];for(t(Ee!=null),t(Ge!=null),Ee[0]=null,ke[0]=null,Ge[0]=0;;){if(he[0]=Se,ye[0]=xt,8>xt){he=7;break e}var vr=ve(Me,Se+4);if(4294967286<vr){he=3;break e}var mt=8+vr+1&-2;if(pt+=mt,0<Ue&&pt>Ue){he=3;break e}if(!r(Me,Se,"VP8 ")||!r(Me,Se,"VP8L")){he=0;break e}if(xt[0]<mt){he=7;break e}r(Me,Se,"ALPH")||(Ee[0]=Me,ke[0]=Se+8,Ge[0]=vr),Se+=mt,xt-=mt}}if(g=g[0],ie.na=ie.na[0],ie.P=ie.P[0],ie.Sa=ie.Sa[0],he!=0)break}g=[g],ie.Ja=[ie.Ja],ie.xa=[ie.xa];e:if(Ue=s,he=u,ye=g,Ee=ie.gb[0],ke=ie.Ja,Ge=ie.xa,Me=he[0],Se=!r(Ue,Me,"VP8 "),pt=!r(Ue,Me,"VP8L"),t(Ue!=null),t(ye!=null),t(ke!=null),t(Ge!=null),8>ye[0])he=7;else{if(Se||pt){if(Ue=ve(Ue,Me+4),12<=Ee&&Ue>Ee-12){he=3;break e}if(U&&Ue>ye[0]-8){he=7;break e}ke[0]=Ue,he[0]+=8,ye[0]-=8,Ge[0]=pt}else Ge[0]=5<=ye[0]&&Ue[Me+0]==47&&!(Ue[Me+4]>>5),ke[0]=ye[0];he=0}if(g=g[0],ie.Ja=ie.Ja[0],ie.xa=ie.xa[0],u=u[0],he!=0)break;if(4294967286<ie.Ja)return 3;if(O==null||we||(O[0]=ie.xa?2:1),T=[T],ce=[ce],ie.xa){if(5>g){he=7;break}O=T,U=ce,we=N,s==null||5>g?s=0:5<=g&&s[u+0]==47&&!(s[u+4]>>5)?(ye=[0],Ue=[0],Ee=[0],le(ke=new H,s,u,g),hn(ke,ye,Ue,Ee)?(O!=null&&(O[0]=ye[0]),U!=null&&(U[0]=Ue[0]),we!=null&&(we[0]=Ee[0]),s=1):s=0):s=0}else{if(10>g){he=7;break}O=ce,s==null||10>g||!oa(s,u+3,g-3)?s=0:(U=s[u+0]|s[u+1]<<8|s[u+2]<<16,we=16383&(s[u+7]<<8|s[u+6]),s=16383&(s[u+9]<<8|s[u+8]),1&U||3<(U>>1&7)||!(U>>4&1)||U>>5>=ie.Ja||!we||!s?s=0:(T&&(T[0]=we),O&&(O[0]=s),s=1))}if(!s||(T=T[0],ce=ce[0],fe&&(B[0]!=T||te[0]!=ce)))return 3;D!=null&&(D[0]=ie,D.offset=u-D.w,t(4294967286>u-D.w),t(D.offset==D.ha-g));break}return he==0||he==7&&fe&&D==null?(N!=null&&(N[0]|=ie.na!=null&&0<ie.na.length),x!=null&&(x[0]=T),A!=null&&(A[0]=ce),0):he}function va(s,u,g){var x=u.width,A=u.height,N=0,T=0,O=x,D=A;if(u.Da=s!=null&&0<s.Da,u.Da&&(O=s.cd,D=s.bd,N=s.v,T=s.j,11>g||(N&=-2,T&=-2),0>N||0>T||0>=O||0>=D||N+O>x||T+D>A))return 0;if(u.v=N,u.j=T,u.va=N+O,u.o=T+D,u.U=O,u.T=D,u.da=s!=null&&0<s.da,u.da){if(!qe(O,D,g=[s.ib],N=[s.hb]))return 0;u.ib=g[0],u.hb=N[0]}return u.ob=s!=null&&s.ob,u.Kb=s==null||!s.Sd,u.da&&(u.ob=u.ib<3*x/4&&u.hb<3*A/4,u.Kb=0),1}function ba(s){if(s==null)return 2;if(11>s.S){var u=s.f.RGBA;u.fb+=(s.height-1)*u.A,u.A=-u.A}else u=s.f.kb,s=s.height,u.O+=(s-1)*u.fa,u.fa=-u.fa,u.N+=(s-1>>1)*u.Ab,u.Ab=-u.Ab,u.W+=(s-1>>1)*u.Db,u.Db=-u.Db,u.F!=null&&(u.J+=(s-1)*u.lb,u.lb=-u.lb);return 0}function Ei(s,u,g,x){if(x==null||0>=s||0>=u)return 2;if(g!=null){if(g.Da){var A=g.cd,N=g.bd,T=-2&g.v,O=-2&g.j;if(0>T||0>O||0>=A||0>=N||T+A>s||O+N>u)return 2;s=A,u=N}if(g.da){if(!qe(s,u,A=[g.ib],N=[g.hb]))return 2;s=A[0],u=N[0]}}x.width=s,x.height=u;e:{var D=x.width,B=x.height;if(s=x.S,0>=D||0>=B||!(s>=as&&13>s))s=2;else{if(0>=x.Rd&&x.sd==null){T=N=A=u=0;var te=(O=D*Lu[s])*B;if(11>s||(N=(B+1)/2*(u=(D+1)/2),s==12&&(T=(A=D)*B)),(B=a(te+2*N+T))==null){s=1;break e}x.sd=B,11>s?((D=x.f.RGBA).eb=B,D.fb=0,D.A=O,D.size=te):((D=x.f.kb).y=B,D.O=0,D.fa=O,D.Fd=te,D.f=B,D.N=0+te,D.Ab=u,D.Cd=N,D.ea=B,D.W=0+te+N,D.Db=u,D.Ed=N,s==12&&(D.F=B,D.J=0+te+2*N),D.Tc=T,D.lb=A)}if(u=1,A=x.S,N=x.width,T=x.height,A>=as&&13>A)if(11>A)s=x.f.RGBA,u&=(O=Math.abs(s.A))*(T-1)+N<=s.size,u&=O>=N*Lu[A],u&=s.eb!=null;else{s=x.f.kb,O=(N+1)/2,te=(T+1)/2,D=Math.abs(s.fa),B=Math.abs(s.Ab);var fe=Math.abs(s.Db),U=Math.abs(s.lb),ie=U*(T-1)+N;u&=D*(T-1)+N<=s.Fd,u&=B*(te-1)+O<=s.Cd,u=(u&=fe*(te-1)+O<=s.Ed)&D>=N&B>=O&fe>=O,u&=s.y!=null,u&=s.f!=null,u&=s.ea!=null,A==12&&(u&=U>=N,u&=ie<=s.Tc,u&=s.F!=null)}else u=0;s=u?0:2}}return s!=0||g!=null&&g.fd&&(s=ba(x)),s}var xo=64,Kr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],en=24,Ti=32,ci=8,Ii=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];je("Predictor0","PredictorAdd0"),M.Predictor0=function(){return 4278190080},M.Predictor1=function(s){return s},M.Predictor2=function(s,u,g){return u[g+0]},M.Predictor3=function(s,u,g){return u[g+1]},M.Predictor4=function(s,u,g){return u[g-1]},M.Predictor5=function(s,u,g){return Fe(Fe(s,u[g+1]),u[g+0])},M.Predictor6=function(s,u,g){return Fe(s,u[g-1])},M.Predictor7=function(s,u,g){return Fe(s,u[g+0])},M.Predictor8=function(s,u,g){return Fe(u[g-1],u[g+0])},M.Predictor9=function(s,u,g){return Fe(u[g+0],u[g+1])},M.Predictor10=function(s,u,g){return Fe(Fe(s,u[g-1]),Fe(u[g+0],u[g+1]))},M.Predictor11=function(s,u,g){var x=u[g+0];return 0>=rt(x>>24&255,s>>24&255,(u=u[g-1])>>24&255)+rt(x>>16&255,s>>16&255,u>>16&255)+rt(x>>8&255,s>>8&255,u>>8&255)+rt(255&x,255&s,255&u)?x:s},M.Predictor12=function(s,u,g){var x=u[g+0];return(gt((s>>24&255)+(x>>24&255)-((u=u[g-1])>>24&255))<<24|gt((s>>16&255)+(x>>16&255)-(u>>16&255))<<16|gt((s>>8&255)+(x>>8&255)-(u>>8&255))<<8|gt((255&s)+(255&x)-(255&u)))>>>0},M.Predictor13=function(s,u,g){var x=u[g-1];return(tt((s=Fe(s,u[g+0]))>>24&255,x>>24&255)<<24|tt(s>>16&255,x>>16&255)<<16|tt(s>>8&255,x>>8&255)<<8|tt(255&s,255&x))>>>0};var xa=M.PredictorAdd0;M.PredictorAdd1=St,je("Predictor2","PredictorAdd2"),je("Predictor3","PredictorAdd3"),je("Predictor4","PredictorAdd4"),je("Predictor5","PredictorAdd5"),je("Predictor6","PredictorAdd6"),je("Predictor7","PredictorAdd7"),je("Predictor8","PredictorAdd8"),je("Predictor9","PredictorAdd9"),je("Predictor10","PredictorAdd10"),je("Predictor11","PredictorAdd11"),je("Predictor12","PredictorAdd12"),je("Predictor13","PredictorAdd13");var zo=M.PredictorAdd2;Ve("ColorIndexInverseTransform","MapARGB","32b",function(s){return s>>8&255},function(s){return s}),Ve("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(s){return s},function(s){return s>>8&255});var nr,ns=M.ColorIndexInverseTransform,qn=M.MapARGB,$n=M.VP8LColorIndexInverseTransformAlpha,wa=M.MapAlpha,ya=M.VP8LPredictorsAdd=[];ya.length=16,(M.VP8LPredictors=[]).length=16,(M.VP8LPredictorsAdd_C=[]).length=16,(M.VP8LPredictors_C=[]).length=16;var _a,Sa,Pi,ji,Ri,wo,Oi,yo,bn,Vn,kt,jt,ir,gr,ui,Ca,Bo,is,ru,nu,iu,ou,au,su,Aa,lu,cu,uu,hu=a(511),fu=a(2041),du=a(225),pu=a(767),mu=0,bl=fu,os=du,tn=pu,xn=hu,as=0,ss=1,gu=2,ls=3,cs=4,xl=5,vu=6,wl=7,yl=8,us=9,_l=10,I2=[2,3,7],P2=[3,3,11],bu=[280,256,256,256,40],j2=[0,1,1,1,0],R2=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],O2=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],M2=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],F2=8,Sl=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],Cl=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ka=null,D2=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],z2=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],xu=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],B2=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],U2=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],H2=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],q2=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],Mi=[],En=[],hi=[],$2=1,wu=2,Fi=[],wn=[];Wr("UpsampleRgbLinePair",po,3),Wr("UpsampleBgrLinePair",mo,3),Wr("UpsampleRgbaLinePair",ga,4),Wr("UpsampleBgraLinePair",ma,4),Wr("UpsampleArgbLinePair",vo,4),Wr("UpsampleRgba4444LinePair",go,2),Wr("UpsampleRgb565LinePair",Tr,2);var V2=M.UpsampleRgbLinePair,W2=M.UpsampleBgrLinePair,yu=M.UpsampleRgbaLinePair,_u=M.UpsampleBgraLinePair,Su=M.UpsampleArgbLinePair,Cu=M.UpsampleRgba4444LinePair,G2=M.UpsampleRgb565LinePair,hs=16,fs=1<<hs-1,La=-227,Al=482,Y2=6,Au=0,X2=a(256),Z2=a(256),J2=a(256),Q2=a(256),K2=a(Al-La),ef=a(Al-La);li("YuvToRgbRow",po,3),li("YuvToBgrRow",mo,3),li("YuvToRgbaRow",ga,4),li("YuvToBgraRow",ma,4),li("YuvToArgbRow",vo,4),li("YuvToRgba4444Row",go,2),li("YuvToRgb565Row",Tr,2);var ku=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],ds=[0,2,8],tf=[8,7,6,4,4,2,2,2,1,1,1,1],rf=1;this.WebPDecodeRGBA=function(s,u,g,x,A){var N=ss,T=new ae,O=new Et;T.ba=O,O.S=N,O.width=[O.width],O.height=[O.height];var D=O.width,B=O.height,te=new Qe;if(te==null||s==null)var fe=2;else t(te!=null),fe=bo(s,u,g,te.width,te.height,te.Pd,te.Qd,te.format,null);if(fe!=0?D=0:(D!=null&&(D[0]=te.width[0]),B!=null&&(B[0]=te.height[0]),D=1),D){O.width=O.width[0],O.height=O.height[0],x!=null&&(x[0]=O.width),A!=null&&(A[0]=O.height);e:{if(x=new Bn,(A=new _e).data=s,A.w=u,A.ha=g,A.kd=1,u=[0],t(A!=null),((s=bo(A.data,A.w,A.ha,null,null,null,u,null,A))==0||s==7)&&u[0]&&(s=4),(u=s)==0){if(t(T!=null),x.data=A.data,x.w=A.w+A.offset,x.ha=A.ha-A.offset,x.put=Ze,x.ac=Jr,x.bc=un,x.ma=T,A.xa){if((s=Sn())==null){T=1;break e}if(function(U,ie){var ce=[0],we=[0],he=[0];t:for(;;){if(U==null)return 0;if(ie==null)return U.a=2,0;if(U.l=ie,U.a=0,le(U.m,ie.data,ie.w,ie.ha),!hn(U.m,ce,we,he)){U.a=3;break t}if(U.xb=wu,ie.width=ce[0],ie.height=we[0],!fn(ce[0],we[0],1,U,null))break t;return 1}return t(U.a!=0),0}(s,x)){if(x=(u=Ei(x.width,x.height,T.Oa,T.ba))==0){t:{x=s;r:for(;;){if(x==null){x=0;break t}if(t(x.s.yc!=null),t(x.s.Ya!=null),t(0<x.s.Wb),t((g=x.l)!=null),t((A=g.ma)!=null),x.xb!=0){if(x.ca=A.ba,x.tb=A.tb,t(x.ca!=null),!va(A.Oa,g,ls)){x.a=2;break r}if(!Kn(x,g.width)||g.da)break r;if((g.da||lt(x.ca.S))&&gn(),11>x.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),x.ca.f.kb.F!=null&&gn()),x.Pb&&0<x.s.ua&&x.s.vb.X==null&&!W(x.s.vb,x.s.Wa.Xa)){x.a=1;break r}x.xb=0}if(!Ur(x,x.V,x.Ba,x.c,x.i,g.o,Dn))break r;A.Dc=x.Ma,x=1;break t}t(x.a!=0),x=0}x=!x}x&&(u=s.a)}else u=s.a}else{if((s=new eo)==null){T=1;break e}if(s.Fa=A.na,s.P=A.P,s.qc=A.Sa,to(s,x)){if((u=Ei(x.width,x.height,T.Oa,T.ba))==0){if(s.Aa=0,g=T.Oa,t((A=s)!=null),g!=null){if(0<(D=0>(D=g.Md)?0:100<D?255:255*D/100)){for(B=te=0;4>B;++B)12>(fe=A.pb[B]).lc&&(fe.ia=D*tf[0>fe.lc?0:fe.lc]>>3),te|=fe.ia;te&&(alert("todo:VP8InitRandom"),A.ia=1)}A.Ga=g.Id,100<A.Ga?A.Ga=100:0>A.Ga&&(A.Ga=0)}(function(U,ie){if(U==null)return 0;if(ie==null)return Vt(U,2,"NULL VP8Io parameter in VP8Decode().");if(!U.cb&&!to(U,ie))return 0;if(t(U.cb),ie.ac==null||ie.ac(ie)){ie.ob&&(U.L=0);var ce=ds[U.L];if(U.L==2?(U.yb=0,U.zb=0):(U.yb=ie.v-ce>>4,U.zb=ie.j-ce>>4,0>U.yb&&(U.yb=0),0>U.zb&&(U.zb=0)),U.Va=ie.o+15+ce>>4,U.Hb=ie.va+15+ce>>4,U.Hb>U.za&&(U.Hb=U.za),U.Va>U.Ub&&(U.Va=U.Ub),0<U.L){var we=U.ed;for(ce=0;4>ce;++ce){var he;if(U.Qa.Cb){var ye=U.Qa.Lb[ce];U.Qa.Fb||(ye+=we.Tb)}else ye=we.Tb;for(he=0;1>=he;++he){var Se=U.gd[ce][he],Ee=ye;if(we.Pc&&(Ee+=we.vd[0],he&&(Ee+=we.od[0])),0<(Ee=0>Ee?0:63<Ee?63:Ee)){var ke=Ee;0<we.wb&&(ke=4<we.wb?ke>>2:ke>>1)>9-we.wb&&(ke=9-we.wb),1>ke&&(ke=1),Se.dd=ke,Se.tc=2*Ee+ke,Se.ld=40<=Ee?2:15<=Ee?1:0}else Se.tc=0;Se.La=he}}}ce=0}else Vt(U,6,"Frame setup failed"),ce=U.a;if(ce=ce==0){if(ce){U.$c=0,0<U.Aa||(U.Ic=rf);t:{ce=U.Ic,we=4*(ke=U.za);var Ge=32*ke,Me=ke+1,pt=0<U.L?ke*(0<U.Aa?2:1):0,Ue=(U.Aa==2?2:1)*ke;if((Se=we+832+(he=3*(16*ce+ds[U.L])/2*Ge)+(ye=U.Fa!=null&&0<U.Fa.length?U.Kc.c*U.Kc.i:0))!=Se)ce=0;else{if(Se>U.Vb){if(U.Vb=0,U.Ec=a(Se),U.Fc=0,U.Ec==null){ce=Vt(U,1,"no memory during frame initialization.");break t}U.Vb=Se}Se=U.Ec,Ee=U.Fc,U.Ac=Se,U.Bc=Ee,Ee+=we,U.Gd=l(Ge,ti),U.Hd=0,U.rb=l(Me+1,zn),U.sb=1,U.wa=pt?l(pt,_r):null,U.Y=0,U.D.Nb=0,U.D.wa=U.wa,U.D.Y=U.Y,0<U.Aa&&(U.D.Y+=ke),t(!0),U.oc=Se,U.pc=Ee,Ee+=832,U.ya=l(Ue,Ai),U.aa=0,U.D.ya=U.ya,U.D.aa=U.aa,U.Aa==2&&(U.D.aa+=ke),U.R=16*ke,U.B=8*ke,ke=(Ge=ds[U.L])*U.R,Ge=Ge/2*U.B,U.sa=Se,U.ta=Ee+ke,U.qa=U.sa,U.ra=U.ta+16*ce*U.R+Ge,U.Ha=U.qa,U.Ia=U.ra+8*ce*U.B+Ge,U.$c=0,Ee+=he,U.mb=ye?Se:null,U.nb=ye?Ee:null,t(Ee+ye<=U.Fc+U.Vb),kn(U),o(U.Ac,U.Bc,0,we),ce=1}}if(ce){if(ie.ka=0,ie.y=U.sa,ie.O=U.ta,ie.f=U.qa,ie.N=U.ra,ie.ea=U.Ha,ie.Vd=U.Ia,ie.fa=U.R,ie.Rc=U.B,ie.F=null,ie.J=0,!mu){for(ce=-255;255>=ce;++ce)hu[255+ce]=0>ce?-ce:ce;for(ce=-1020;1020>=ce;++ce)fu[1020+ce]=-128>ce?-128:127<ce?127:ce;for(ce=-112;112>=ce;++ce)du[112+ce]=-16>ce?-16:15<ce?15:ce;for(ce=-255;510>=ce;++ce)pu[255+ce]=0>ce?0:255<ce?255:ce;mu=1}Oi=jo,yo=Po,Vn=aa,kt=Er,jt=io,bn=no,ir=Qa,gr=Ka,ui=m,Ca=C,Bo=uo,is=es,ru=q,nu=Z,iu=pa,ou=co,au=Za,su=Ja,En[0]=ao,En[1]=oo,En[2]=ca,En[3]=Vr,En[4]=ua,En[5]=mn,En[6]=pn,En[7]=ha,En[8]=ii,En[9]=Oo,Mi[0]=zt,Mi[1]=la,Mi[2]=Ro,Mi[3]=de,Mi[4]=dn,Mi[5]=rr,Mi[6]=ni,hi[0]=Li,hi[1]=sa,hi[2]=ki,hi[3]=Un,hi[4]=Nn,hi[5]=fa,hi[6]=Hn,ce=1}else ce=0}ce&&(ce=function(xt,vr){for(xt.M=0;xt.M<xt.Va;++xt.M){var mt,He=xt.Jc[xt.M&xt.Xb],Re=xt.m,or=xt;for(mt=0;mt<or.za;++mt){var dt=Re,wt=or,Bt=wt.Ac,Ar=wt.Bc+4*mt,Hr=wt.zc,Qt=wt.ya[wt.aa+mt];if(wt.Qa.Bb?Qt.$b=xe(dt,wt.Pa.jb[0])?2+xe(dt,wt.Pa.jb[2]):xe(dt,wt.Pa.jb[1]):Qt.$b=0,wt.kc&&(Qt.Ad=xe(dt,wt.Bd)),Qt.Za=!xe(dt,145)+0,Qt.Za){var Ir=Qt.Ob,qr=0;for(wt=0;4>wt;++wt){var br,_t=Hr[0+wt];for(br=0;4>br;++br){_t=U2[Bt[Ar+br]][_t];for(var Tt=xu[xe(dt,_t[0])];0<Tt;)Tt=xu[2*Tt+xe(dt,_t[Tt])];_t=-Tt,Bt[Ar+br]=_t}n(Ir,qr,Bt,Ar,4),qr+=4,Hr[0+wt]=_t}}else _t=xe(dt,156)?xe(dt,128)?1:3:xe(dt,163)?2:0,Qt.Ob[0]=_t,o(Bt,Ar,_t,4),o(Hr,0,_t,4);Qt.Dd=xe(dt,142)?xe(dt,114)?xe(dt,183)?1:3:2:0}if(or.m.Ka)return Vt(xt,7,"Premature end-of-partition0 encountered.");for(;xt.ja<xt.za;++xt.ja){if(or=He,dt=(Re=xt).rb[Re.sb-1],Bt=Re.rb[Re.sb+Re.ja],mt=Re.ya[Re.aa+Re.ja],Ar=Re.kc?mt.Ad:0)dt.la=Bt.la=0,mt.Za||(dt.Na=Bt.Na=0),mt.Hc=0,mt.Gc=0,mt.ia=0;else{var Kt,It;if(dt=Bt,Bt=or,Ar=Re.Pa.Xc,Hr=Re.ya[Re.aa+Re.ja],Qt=Re.pb[Hr.$b],wt=Hr.ad,Ir=0,qr=Re.rb[Re.sb-1],_t=br=0,o(wt,Ir,0,384),Hr.Za)var kr=0,Tn=Ar[3];else{Tt=a(16);var ar=dt.Na+qr.Na;if(ar=ka(Bt,Ar[1],ar,Qt.Eb,0,Tt,0),dt.Na=qr.Na=(0<ar)+0,1<ar)Oi(Tt,0,wt,Ir);else{var Gr=Tt[0]+3>>3;for(Tt=0;256>Tt;Tt+=16)wt[Ir+Tt]=Gr}kr=1,Tn=Ar[0]}var Rt=15&dt.la,xr=15&qr.la;for(Tt=0;4>Tt;++Tt){var rn=1&xr;for(Gr=It=0;4>Gr;++Gr)Rt=Rt>>1|(rn=(ar=ka(Bt,Tn,ar=rn+(1&Rt),Qt.Sc,kr,wt,Ir))>kr)<<7,It=It<<2|(3<ar?3:1<ar?2:wt[Ir+0]!=0),Ir+=16;Rt>>=4,xr=xr>>1|rn<<7,br=(br<<8|It)>>>0}for(Tn=Rt,kr=xr>>4,Kt=0;4>Kt;Kt+=2){for(It=0,Rt=dt.la>>4+Kt,xr=qr.la>>4+Kt,Tt=0;2>Tt;++Tt){for(rn=1&xr,Gr=0;2>Gr;++Gr)ar=rn+(1&Rt),Rt=Rt>>1|(rn=0<(ar=ka(Bt,Ar[2],ar,Qt.Qc,0,wt,Ir)))<<3,It=It<<2|(3<ar?3:1<ar?2:wt[Ir+0]!=0),Ir+=16;Rt>>=2,xr=xr>>1|rn<<5}_t|=It<<4*Kt,Tn|=Rt<<4<<Kt,kr|=(240&xr)<<Kt}dt.la=Tn,qr.la=kr,Hr.Hc=br,Hr.Gc=_t,Hr.ia=43690&_t?0:Qt.ia,Ar=!(br|_t)}if(0<Re.L&&(Re.wa[Re.Y+Re.ja]=Re.gd[mt.$b][mt.Za],Re.wa[Re.Y+Re.ja].La|=!Ar),or.Ka)return Vt(xt,7,"Premature end-of-file encountered.")}if(kn(xt),Re=vr,or=1,mt=(He=xt).D,dt=0<He.L&&He.M>=He.zb&&He.M<=He.Va,He.Aa==0)t:{if(mt.M=He.M,mt.uc=dt,vn(He,mt),or=1,mt=(It=He.D).Nb,dt=(_t=ds[He.L])*He.R,Bt=_t/2*He.B,Tt=16*mt*He.R,Gr=8*mt*He.B,Ar=He.sa,Hr=He.ta-dt+Tt,Qt=He.qa,wt=He.ra-Bt+Gr,Ir=He.Ha,qr=He.Ia-Bt+Gr,xr=(Rt=It.M)==0,br=Rt>=He.Va-1,He.Aa==2&&vn(He,It),It.uc)for(rn=(ar=He).D.M,t(ar.D.uc),It=ar.yb;It<ar.Hb;++It){kr=It,Tn=rn;var $r=(nn=(Lr=ar).D).Nb;Kt=Lr.R;var nn=nn.wa[nn.Y+kr],on=Lr.sa,Yr=Lr.ta+16*$r*Kt+16*kr,an=nn.dd,Dt=nn.tc;if(Dt!=0)if(t(3<=Dt),Lr.L==1)0<kr&&ou(on,Yr,Kt,Dt+4),nn.La&&su(on,Yr,Kt,Dt),0<Tn&&iu(on,Yr,Kt,Dt+4),nn.La&&au(on,Yr,Kt,Dt);else{var sn=Lr.B,In=Lr.qa,_o=Lr.ra+8*$r*sn+8*kr,fi=Lr.Ha,Lr=Lr.Ia+8*$r*sn+8*kr;$r=nn.ld,0<kr&&(gr(on,Yr,Kt,Dt+4,an,$r),Ca(In,_o,fi,Lr,sn,Dt+4,an,$r)),nn.La&&(is(on,Yr,Kt,Dt,an,$r),nu(In,_o,fi,Lr,sn,Dt,an,$r)),0<Tn&&(ir(on,Yr,Kt,Dt+4,an,$r),ui(In,_o,fi,Lr,sn,Dt+4,an,$r)),nn.La&&(Bo(on,Yr,Kt,Dt,an,$r),ru(In,_o,fi,Lr,sn,Dt,an,$r))}}if(He.ia&&alert("todo:DitherRow"),Re.put!=null){if(It=16*Rt,Rt=16*(Rt+1),xr?(Re.y=He.sa,Re.O=He.ta+Tt,Re.f=He.qa,Re.N=He.ra+Gr,Re.ea=He.Ha,Re.W=He.Ia+Gr):(It-=_t,Re.y=Ar,Re.O=Hr,Re.f=Qt,Re.N=wt,Re.ea=Ir,Re.W=qr),br||(Rt-=_t),Rt>Re.o&&(Rt=Re.o),Re.F=null,Re.J=null,He.Fa!=null&&0<He.Fa.length&&It<Rt&&(Re.J=fr(He,Re,It,Rt-It),Re.F=He.mb,Re.F==null&&Re.F.length==0)){or=Vt(He,3,"Could not decode alpha data.");break t}It<Re.j&&(_t=Re.j-It,It=Re.j,t(!(1&_t)),Re.O+=He.R*_t,Re.N+=He.B*(_t>>1),Re.W+=He.B*(_t>>1),Re.F!=null&&(Re.J+=Re.width*_t)),It<Rt&&(Re.O+=Re.v,Re.N+=Re.v>>1,Re.W+=Re.v>>1,Re.F!=null&&(Re.J+=Re.v),Re.ka=It-Re.j,Re.U=Re.va-Re.v,Re.T=Rt-It,or=Re.put(Re))}mt+1!=He.Ic||br||(n(He.sa,He.ta-dt,Ar,Hr+16*He.R,dt),n(He.qa,He.ra-Bt,Qt,wt+8*He.B,Bt),n(He.Ha,He.Ia-Bt,Ir,qr+8*He.B,Bt))}if(!or)return Vt(xt,6,"Output aborted.")}return 1}(U,ie)),ie.bc!=null&&ie.bc(ie),ce&=1}return ce?(U.cb=0,ce):0})(s,x)||(u=s.a)}}else u=s.a}u==0&&T.Oa!=null&&T.Oa.fd&&(u=ba(T.ba))}T=u}N=T!=0?null:11>N?O.f.RGBA.eb:O.f.kb.y}else N=null;return N};var Lu=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function f(M,J){for(var E="",F=0;F<4;F++)E+=String.fromCharCode(M[J++]);return E}function p(M,J){return M[J+0]|M[J+1]<<8}function w(M,J){return(M[J+0]|M[J+1]<<8|M[J+2]<<16)>>>0}function _(M,J){return(M[J+0]|M[J+1]<<8|M[J+2]<<16|M[J+3]<<24)>>>0}new h;var d=[0],b=[0],S=[],k=new h,y=e,R=function(M,J){var E={},F=0,G=!1,$=0,oe=0;if(E.frames=[],!function(L,H){for(var V=0;V<4;V++)if(L[H+V]!="RIFF".charCodeAt(V))return!0;return!1}(M,J)){for(_(M,J+=4),J+=8;J<M.length;){var se=f(M,J),pe=_(M,J+=4);J+=4;var ee=pe+(1&pe);switch(se){case"VP8 ":case"VP8L":E.frames[F]===void 0&&(E.frames[F]={}),(be=E.frames[F]).src_off=G?oe:J-8,be.src_size=$+pe+8,F++,G&&(G=!1,$=0,oe=0);break;case"VP8X":(be=E.header={}).feature_flags=M[J];var le=J+4;be.canvas_width=1+w(M,le),le+=3,be.canvas_height=1+w(M,le),le+=3;break;case"ALPH":G=!0,$=ee+8,oe=J-8;break;case"ANIM":(be=E.header).bgcolor=_(M,J),le=J+4,be.loop_count=p(M,le),le+=2;break;case"ANMF":var Ce,be;(be=E.frames[F]={}).offset_x=2*w(M,J),J+=3,be.offset_y=2*w(M,J),J+=3,be.width=1+w(M,J),J+=3,be.height=1+w(M,J),J+=3,be.duration=w(M,J),J+=3,Ce=M[J++],be.dispose=1&Ce,be.blend=Ce>>1&1}se!="ANMF"&&(J+=ee)}return E}}(y,0);R.response=y,R.rgbaoutput=!0,R.dataurl=!1;var I=R.header?R.header:null,P=R.frames?R.frames:null;if(I){I.loop_counter=I.loop_count,d=[I.canvas_height],b=[I.canvas_width];for(var Y=0;Y<P.length&&P[Y].blend!=0;Y++);}var K=P[0],ne=k.WebPDecodeRGBA(y,K.src_off,K.src_size,b,d);K.rgba=ne,K.imgwidth=b[0],K.imgheight=d[0];for(var X=0;X<b[0]*d[0]*4;X++)S[X]=ne[X];return this.width=b,this.height=d,this.data=S,this}(function(e){var t,r,n,o,a,l,c,h,f,p=function(L){return L=L||{},this.isStrokeTransparent=L.isStrokeTransparent||!1,this.strokeOpacity=L.strokeOpacity||1,this.strokeStyle=L.strokeStyle||"#000000",this.fillStyle=L.fillStyle||"#000000",this.isFillTransparent=L.isFillTransparent||!1,this.fillOpacity=L.fillOpacity||1,this.font=L.font||"10px sans-serif",this.textBaseline=L.textBaseline||"alphabetic",this.textAlign=L.textAlign||"left",this.lineWidth=L.lineWidth||1,this.lineJoin=L.lineJoin||"miter",this.lineCap=L.lineCap||"butt",this.path=L.path||[],this.transform=L.transform!==void 0?L.transform.clone():new h,this.globalCompositeOperation=L.globalCompositeOperation||"normal",this.globalAlpha=L.globalAlpha||1,this.clip_path=L.clip_path||[],this.currentPoint=L.currentPoint||new l,this.miterLimit=L.miterLimit||10,this.lastPoint=L.lastPoint||new l,this.lineDashOffset=L.lineDashOffset||0,this.lineDash=L.lineDash||[],this.margin=L.margin||[0,0,0,0],this.prevPageLastElemOffset=L.prevPageLastElemOffset||0,this.ignoreClearRect=typeof L.ignoreClearRect!="boolean"||L.ignoreClearRect,this};e.events.push(["initialized",function(){this.context2d=new w(this),t=this.internal.f2,r=this.internal.getCoordinateString,n=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,a=this.internal.getVerticalCoordinate,l=this.internal.Point,c=this.internal.Rectangle,h=this.internal.Matrix,f=new p}]);var w=function(L){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var H=L;Object.defineProperty(this,"pdf",{get:function(){return H}});var V=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return V},set:function(ve){V=!!ve}});var Q=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return Q},set:function(ve){Q=!!ve}});var re=0;Object.defineProperty(this,"posX",{get:function(){return re},set:function(ve){isNaN(ve)||(re=ve)}});var ue=0;Object.defineProperty(this,"posY",{get:function(){return ue},set:function(ve){isNaN(ve)||(ue=ve)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(ve){var W;typeof ve=="number"?W=[ve,ve,ve,ve]:((W=new Array(4))[0]=ve[0],W[1]=ve.length>=2?ve[1]:W[0],W[2]=ve.length>=3?ve[2]:W[0],W[3]=ve.length>=4?ve[3]:W[1]),f.margin=W}});var ge=!1;Object.defineProperty(this,"autoPaging",{get:function(){return ge},set:function(ve){ge=ve}});var me=0;Object.defineProperty(this,"lastBreak",{get:function(){return me},set:function(ve){me=ve}});var xe=[];Object.defineProperty(this,"pageBreaks",{get:function(){return xe},set:function(ve){xe=ve}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(ve){ve instanceof p&&(f=ve)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(ve){f.path=ve}});var Ae=[];Object.defineProperty(this,"ctxStack",{get:function(){return Ae},set:function(ve){Ae=ve}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(ve){var W;W=_(ve),this.ctx.fillStyle=W.style,this.ctx.isFillTransparent=W.a===0,this.ctx.fillOpacity=W.a,this.pdf.setFillColor(W.r,W.g,W.b,{a:W.a}),this.pdf.setTextColor(W.r,W.g,W.b,{a:W.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(ve){var W=_(ve);this.ctx.strokeStyle=W.style,this.ctx.isStrokeTransparent=W.a===0,this.ctx.strokeOpacity=W.a,W.a===0?this.pdf.setDrawColor(255,255,255):(W.a,this.pdf.setDrawColor(W.r,W.g,W.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(ve){["butt","round","square"].indexOf(ve)!==-1&&(this.ctx.lineCap=ve,this.pdf.setLineCap(ve))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(ve){isNaN(ve)||(this.ctx.lineWidth=ve,this.pdf.setLineWidth(ve))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(ve){["bevel","round","miter"].indexOf(ve)!==-1&&(this.ctx.lineJoin=ve,this.pdf.setLineJoin(ve))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(ve){isNaN(ve)||(this.ctx.miterLimit=ve,this.pdf.setMiterLimit(ve))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(ve){this.ctx.textBaseline=ve}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(ve){["right","end","center","left","start"].indexOf(ve)!==-1&&(this.ctx.textAlign=ve)}});var Te=null,Pe=null;Object.defineProperty(this,"fontFaces",{get:function(){return Pe},set:function(ve){Te=null,Pe=ve}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(ve){var W;if(this.ctx.font=ve,(W=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ve))!==null){var ft=W[1];W[2];var Ke=W[3],qe=W[4];W[5];var Ne=W[6],Oe=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(qe)[2];qe=Math.floor(Oe==="px"?parseFloat(qe)*this.pdf.internal.scaleFactor:Oe==="em"?parseFloat(qe)*this.pdf.getFontSize():parseFloat(qe)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(qe);var je=function(Je){var Ve,At,yt=[],Be=Je.trim();if(Be==="")return ic;if(Be in ih)return[ih[Be]];for(;Be!=="";){switch(At=null,Ve=(Be=ah(Be)).charAt(0)){case'"':case"'":At=wv(Be.substring(1),Ve);break;default:At=yv(Be)}if(At===null||(yt.push(At[0]),(Be=ah(At[1]))!==""&&Be.charAt(0)!==","))return ic;Be=Be.replace(/^,/,"")}return yt}(Ne);if(this.fontFaces){var it=function(Je,Ve){if(Te===null){var At=function(yt){var Be=[];return Object.keys(yt).forEach(function(at){yt[at].forEach(function(Nt){var Xe=null;switch(Nt){case"bold":Xe={family:at,weight:"bold"};break;case"italic":Xe={family:at,style:"italic"};break;case"bolditalic":Xe={family:at,weight:"bold",style:"italic"};break;case"":case"normal":Xe={family:at}}Xe!==null&&(Xe.ref={name:at,style:Nt},Be.push(Xe))})}),Be}(Je.getFontList());Te=function(yt){for(var Be={},at=0;at<yt.length;++at){var Nt=nc(yt[at]),Xe=Nt.family,vt=Nt.stretch,lt=Nt.style,Ht=Nt.weight;Be[Xe]=Be[Xe]||{},Be[Xe][vt]=Be[Xe][vt]||{},Be[Xe][vt][lt]=Be[Xe][vt][lt]||{},Be[Xe][vt][lt][Ht]=Nt}return Be}(At.concat(Ve))}return Te}(this.pdf,this.fontFaces),Fe=je.map(function(Je){return{family:Je,stretch:"normal",weight:Ke,style:ft}}),gt=function(Je,Ve,At){for(var yt=(At=At||{}).defaultFontFamily||"times",Be=Object.assign({},xv,At.genericFontFamilies||{}),at=null,Nt=null,Xe=0;Xe<Ve.length;++Xe)if(Be[(at=nc(Ve[Xe])).family]&&(at.family=Be[at.family]),Je.hasOwnProperty(at.family)){Nt=Je[at.family];break}if(!(Nt=Nt||Je[yt]))throw new Error("Could not find a font-family for the rule '"+oh(at)+"' and default family '"+yt+"'.");if(Nt=function(vt,lt){if(lt[vt])return lt[vt];var Ht=Ec[vt],Zt=Ht<=Ec.normal?-1:1,Et=nh(lt,y2,Ht,Zt);if(!Et)throw new Error("Could not find a matching font-stretch value for "+vt);return Et}(at.stretch,Nt),Nt=function(vt,lt){if(lt[vt])return lt[vt];for(var Ht=w2[vt],Zt=0;Zt<Ht.length;++Zt)if(lt[Ht[Zt]])return lt[Ht[Zt]];throw new Error("Could not find a matching font-style for "+vt)}(at.style,Nt),!(Nt=function(vt,lt){if(lt[vt])return lt[vt];if(vt===400&&lt[500])return lt[500];if(vt===500&&lt[400])return lt[400];var Ht=bv[vt],Zt=nh(lt,_2,Ht,vt<400?-1:1);if(!Zt)throw new Error("Could not find a matching font-weight for value "+vt);return Zt}(at.weight,Nt)))throw new Error("Failed to resolve a font for the rule '"+oh(at)+"'.");return Nt}(it,Fe);this.pdf.setFont(gt.ref.name,gt.ref.style)}else{var tt="";(Ke==="bold"||parseInt(Ke,10)>=700||ft==="bold")&&(tt="bold"),ft==="italic"&&(tt+="italic"),tt.length===0&&(tt="normal");for(var rt="",St={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},ot=0;ot<je.length;ot++){if(this.pdf.internal.getFont(je[ot],tt,{noFallback:!0,disableWarning:!0})!==void 0){rt=je[ot];break}if(tt==="bolditalic"&&this.pdf.internal.getFont(je[ot],"bold",{noFallback:!0,disableWarning:!0})!==void 0)rt=je[ot],tt="bold";else if(this.pdf.internal.getFont(je[ot],"normal",{noFallback:!0,disableWarning:!0})!==void 0){rt=je[ot],tt="normal";break}}if(rt===""){for(var $e=0;$e<je.length;$e++)if(St[je[$e]]){rt=St[je[$e]];break}}rt=rt===""?"Times":rt,this.pdf.setFont(rt,tt)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(ve){this.ctx.globalCompositeOperation=ve}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(ve){this.ctx.globalAlpha=ve}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(ve){this.ctx.lineDashOffset=ve,be.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(ve){this.ctx.lineDash=ve,be.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(ve){this.ctx.ignoreClearRect=!!ve}})};w.prototype.setLineDash=function(L){this.lineDash=L},w.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},w.prototype.fill=function(){P.call(this,"fill",!1)},w.prototype.stroke=function(){P.call(this,"stroke",!1)},w.prototype.beginPath=function(){this.path=[{type:"begin"}]},w.prototype.moveTo=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var V=this.ctx.transform.applyToPoint(new l(L,H));this.path.push({type:"mt",x:V.x,y:V.y}),this.ctx.lastPoint=new l(L,H)},w.prototype.closePath=function(){var L=new l(0,0),H=0;for(H=this.path.length-1;H!==-1;H--)if(this.path[H].type==="begin"&&Pt(this.path[H+1])==="object"&&typeof this.path[H+1].x=="number"){L=new l(this.path[H+1].x,this.path[H+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new l(L.x,L.y)},w.prototype.lineTo=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var V=this.ctx.transform.applyToPoint(new l(L,H));this.path.push({type:"lt",x:V.x,y:V.y}),this.ctx.lastPoint=new l(V.x,V.y)},w.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),P.call(this,null,!0)},w.prototype.quadraticCurveTo=function(L,H,V,Q){if(isNaN(V)||isNaN(Q)||isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var re=this.ctx.transform.applyToPoint(new l(V,Q)),ue=this.ctx.transform.applyToPoint(new l(L,H));this.path.push({type:"qct",x1:ue.x,y1:ue.y,x:re.x,y:re.y}),this.ctx.lastPoint=new l(re.x,re.y)},w.prototype.bezierCurveTo=function(L,H,V,Q,re,ue){if(isNaN(re)||isNaN(ue)||isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var ge=this.ctx.transform.applyToPoint(new l(re,ue)),me=this.ctx.transform.applyToPoint(new l(L,H)),xe=this.ctx.transform.applyToPoint(new l(V,Q));this.path.push({type:"bct",x1:me.x,y1:me.y,x2:xe.x,y2:xe.y,x:ge.x,y:ge.y}),this.ctx.lastPoint=new l(ge.x,ge.y)},w.prototype.arc=function(L,H,V,Q,re,ue){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q)||isNaN(re))throw Ot.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ue=!!ue,!this.ctx.transform.isIdentity){var ge=this.ctx.transform.applyToPoint(new l(L,H));L=ge.x,H=ge.y;var me=this.ctx.transform.applyToPoint(new l(0,V)),xe=this.ctx.transform.applyToPoint(new l(0,0));V=Math.sqrt(Math.pow(me.x-xe.x,2)+Math.pow(me.y-xe.y,2))}Math.abs(re-Q)>=2*Math.PI&&(Q=0,re=2*Math.PI),this.path.push({type:"arc",x:L,y:H,radius:V,startAngle:Q,endAngle:re,counterclockwise:ue})},w.prototype.arcTo=function(L,H,V,Q,re){throw new Error("arcTo not implemented.")},w.prototype.rect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(L,H),this.lineTo(L+V,H),this.lineTo(L+V,H+Q),this.lineTo(L,H+Q),this.lineTo(L,H),this.lineTo(L+V,H),this.lineTo(L,H)},w.prototype.fillRect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!d.call(this)){var re={};this.lineCap!=="butt"&&(re.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(re.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(L,H,V,Q),this.fill(),re.hasOwnProperty("lineCap")&&(this.lineCap=re.lineCap),re.hasOwnProperty("lineJoin")&&(this.lineJoin=re.lineJoin)}},w.prototype.strokeRect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");b.call(this)||(this.beginPath(),this.rect(L,H,V,Q),this.stroke())},w.prototype.clearRect=function(L,H,V,Q){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q))throw Ot.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(L,H,V,Q))},w.prototype.save=function(L){L=typeof L!="boolean"||L;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,V=0;V<this.pdf.internal.getNumberOfPages();V++)this.pdf.setPage(V+1),this.pdf.internal.out("q");if(this.pdf.setPage(H),L){this.ctx.fontSize=this.pdf.internal.getFontSize();var Q=new p(this.ctx);this.ctxStack.push(this.ctx),this.ctx=Q}},w.prototype.restore=function(L){L=typeof L!="boolean"||L;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,V=0;V<this.pdf.internal.getNumberOfPages();V++)this.pdf.setPage(V+1),this.pdf.internal.out("Q");this.pdf.setPage(H),L&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},w.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var _=function(L){var H,V,Q,re;if(L.isCanvasGradient===!0&&(L=L.getColor()),!L)return{r:0,g:0,b:0,a:0,style:L};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L))H=0,V=0,Q=0,re=0;else{var ue=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);if(ue!==null)H=parseInt(ue[1]),V=parseInt(ue[2]),Q=parseInt(ue[3]),re=1;else if((ue=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L))!==null)H=parseInt(ue[1]),V=parseInt(ue[2]),Q=parseInt(ue[3]),re=parseFloat(ue[4]);else{if(re=1,typeof L=="string"&&L.charAt(0)!=="#"){var ge=new d2(L);L=ge.ok?ge.toHex():"#000000"}L.length===4?(H=L.substring(1,2),H+=H,V=L.substring(2,3),V+=V,Q=L.substring(3,4),Q+=Q):(H=L.substring(1,3),V=L.substring(3,5),Q=L.substring(5,7)),H=parseInt(H,16),V=parseInt(V,16),Q=parseInt(Q,16)}}return{r:H,g:V,b:Q,a:re,style:L}},d=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},b=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};w.prototype.fillText=function(L,H,V,Q){if(isNaN(H)||isNaN(V)||typeof L!="string")throw Ot.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(Q=isNaN(Q)?void 0:Q,!d.call(this)){var re=ee(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;F.call(this,{text:L,x:H,y:V,scale:ue,angle:re,align:this.textAlign,maxWidth:Q})}},w.prototype.strokeText=function(L,H,V,Q){if(isNaN(H)||isNaN(V)||typeof L!="string")throw Ot.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!b.call(this)){Q=isNaN(Q)?void 0:Q;var re=ee(this.ctx.transform.rotation),ue=this.ctx.transform.scaleX;F.call(this,{text:L,x:H,y:V,scale:ue,renderingMode:"stroke",angle:re,align:this.textAlign,maxWidth:Q})}},w.prototype.measureText=function(L){if(typeof L!="string")throw Ot.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var H=this.pdf,V=this.pdf.internal.scaleFactor,Q=H.internal.getFontSize(),re=H.getStringUnitWidth(L)*Q/H.internal.scaleFactor;return new function(ue){var ge=(ue=ue||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return ge}}),this}({width:re*=Math.round(96*V/72*1e4)/1e4})},w.prototype.scale=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var V=new h(L,0,0,H,0,0);this.ctx.transform=this.ctx.transform.multiply(V)},w.prototype.rotate=function(L){if(isNaN(L))throw Ot.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var H=new h(Math.cos(L),Math.sin(L),-Math.sin(L),Math.cos(L),0,0);this.ctx.transform=this.ctx.transform.multiply(H)},w.prototype.translate=function(L,H){if(isNaN(L)||isNaN(H))throw Ot.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var V=new h(1,0,0,1,L,H);this.ctx.transform=this.ctx.transform.multiply(V)},w.prototype.transform=function(L,H,V,Q,re,ue){if(isNaN(L)||isNaN(H)||isNaN(V)||isNaN(Q)||isNaN(re)||isNaN(ue))throw Ot.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var ge=new h(L,H,V,Q,re,ue);this.ctx.transform=this.ctx.transform.multiply(ge)},w.prototype.setTransform=function(L,H,V,Q,re,ue){L=isNaN(L)?1:L,H=isNaN(H)?0:H,V=isNaN(V)?0:V,Q=isNaN(Q)?1:Q,re=isNaN(re)?0:re,ue=isNaN(ue)?0:ue,this.ctx.transform=new h(L,H,V,Q,re,ue)};var S=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};w.prototype.drawImage=function(L,H,V,Q,re,ue,ge,me,xe){var Ae=this.pdf.getImageProperties(L),Te=1,Pe=1,ve=1,W=1;Q!==void 0&&me!==void 0&&(ve=me/Q,W=xe/re,Te=Ae.width/Q*me/Q,Pe=Ae.height/re*xe/re),ue===void 0&&(ue=H,ge=V,H=0,V=0),Q!==void 0&&me===void 0&&(me=Q,xe=re),Q===void 0&&me===void 0&&(me=Ae.width,xe=Ae.height);for(var ft,Ke=this.ctx.transform.decompose(),qe=ee(Ke.rotate.shx),Ne=new h,Oe=(Ne=(Ne=(Ne=Ne.multiply(Ke.translate)).multiply(Ke.skew)).multiply(Ke.scale)).applyToRectangle(new c(ue-H*ve,ge-V*W,Q*Te,re*Pe)),je=k.call(this,Oe),it=[],Fe=0;Fe<je.length;Fe+=1)it.indexOf(je[Fe])===-1&&it.push(je[Fe]);if(I(it),this.autoPaging)for(var gt=it[0],tt=it[it.length-1],rt=gt;rt<tt+1;rt++){this.pdf.setPage(rt);var St=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],ot=rt===1?this.posY+this.margin[0]:this.margin[0],$e=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Je=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],Ve=rt===1?0:$e+(rt-2)*Je;if(this.ctx.clip_path.length!==0){var At=this.path;ft=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(ft,this.posX+this.margin[3],-Ve+ot+this.ctx.prevPageLastElemOffset),Y.call(this,"fill",!0),this.path=At}var yt=JSON.parse(JSON.stringify(Oe));yt=R([yt],this.posX+this.margin[3],-Ve+ot+this.ctx.prevPageLastElemOffset)[0];var Be=(rt>gt||rt<tt)&&S.call(this);Be&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],St,Je,null).clip().discardPath()),this.pdf.addImage(L,"JPEG",yt.x,yt.y,yt.w,yt.h,null,null,qe),Be&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(L,"JPEG",Oe.x,Oe.y,Oe.w,Oe.h,null,null,qe)};var k=function(L,H,V){var Q=[];H=H||this.pdf.internal.pageSize.width,V=V||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var re=this.posY+this.ctx.prevPageLastElemOffset;switch(L.type){default:case"mt":case"lt":Q.push(Math.floor((L.y+re)/V)+1);break;case"arc":Q.push(Math.floor((L.y+re-L.radius)/V)+1),Q.push(Math.floor((L.y+re+L.radius)/V)+1);break;case"qct":var ue=le(this.ctx.lastPoint.x,this.ctx.lastPoint.y,L.x1,L.y1,L.x,L.y);Q.push(Math.floor((ue.y+re)/V)+1),Q.push(Math.floor((ue.y+ue.h+re)/V)+1);break;case"bct":var ge=Ce(this.ctx.lastPoint.x,this.ctx.lastPoint.y,L.x1,L.y1,L.x2,L.y2,L.x,L.y);Q.push(Math.floor((ge.y+re)/V)+1),Q.push(Math.floor((ge.y+ge.h+re)/V)+1);break;case"rect":Q.push(Math.floor((L.y+re)/V)+1),Q.push(Math.floor((L.y+L.h+re)/V)+1)}for(var me=0;me<Q.length;me+=1)for(;this.pdf.internal.getNumberOfPages()<Q[me];)y.call(this);return Q},y=function(){var L=this.fillStyle,H=this.strokeStyle,V=this.font,Q=this.lineCap,re=this.lineWidth,ue=this.lineJoin;this.pdf.addPage(),this.fillStyle=L,this.strokeStyle=H,this.font=V,this.lineCap=Q,this.lineWidth=re,this.lineJoin=ue},R=function(L,H,V){for(var Q=0;Q<L.length;Q++)switch(L[Q].type){case"bct":L[Q].x2+=H,L[Q].y2+=V;case"qct":L[Q].x1+=H,L[Q].y1+=V;default:L[Q].x+=H,L[Q].y+=V}return L},I=function(L){return L.sort(function(H,V){return H-V})},P=function(L,H){for(var V,Q,re=this.fillStyle,ue=this.strokeStyle,ge=this.lineCap,me=this.lineWidth,xe=Math.abs(me*this.ctx.transform.scaleX),Ae=this.lineJoin,Te=JSON.parse(JSON.stringify(this.path)),Pe=JSON.parse(JSON.stringify(this.path)),ve=[],W=0;W<Pe.length;W++)if(Pe[W].x!==void 0)for(var ft=k.call(this,Pe[W]),Ke=0;Ke<ft.length;Ke+=1)ve.indexOf(ft[Ke])===-1&&ve.push(ft[Ke]);for(var qe=0;qe<ve.length;qe++)for(;this.pdf.internal.getNumberOfPages()<ve[qe];)y.call(this);if(I(ve),this.autoPaging)for(var Ne=ve[0],Oe=ve[ve.length-1],je=Ne;je<Oe+1;je++){this.pdf.setPage(je),this.fillStyle=re,this.strokeStyle=ue,this.lineCap=ge,this.lineWidth=xe,this.lineJoin=Ae;var it=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Fe=je===1?this.posY+this.margin[0]:this.margin[0],gt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],tt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],rt=je===1?0:gt+(je-2)*tt;if(this.ctx.clip_path.length!==0){var St=this.path;V=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(V,this.posX+this.margin[3],-rt+Fe+this.ctx.prevPageLastElemOffset),Y.call(this,L,!0),this.path=St}if(Q=JSON.parse(JSON.stringify(Te)),this.path=R(Q,this.posX+this.margin[3],-rt+Fe+this.ctx.prevPageLastElemOffset),H===!1||je===0){var ot=(je>Ne||je<Oe)&&S.call(this);ot&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],it,tt,null).clip().discardPath()),Y.call(this,L,H),ot&&this.pdf.restoreGraphicsState()}this.lineWidth=me}else this.lineWidth=xe,Y.call(this,L,H),this.lineWidth=me;this.path=Te},Y=function(L,H){if((L!=="stroke"||H||!b.call(this))&&(L==="stroke"||H||!d.call(this))){for(var V,Q,re=[],ue=this.path,ge=0;ge<ue.length;ge++){var me=ue[ge];switch(me.type){case"begin":re.push({begin:!0});break;case"close":re.push({close:!0});break;case"mt":re.push({start:me,deltas:[],abs:[]});break;case"lt":var xe=re.length;if(ue[ge-1]&&!isNaN(ue[ge-1].x)&&(V=[me.x-ue[ge-1].x,me.y-ue[ge-1].y],xe>0)){for(;xe>=0;xe--)if(re[xe-1].close!==!0&&re[xe-1].begin!==!0){re[xe-1].deltas.push(V),re[xe-1].abs.push(me);break}}break;case"bct":V=[me.x1-ue[ge-1].x,me.y1-ue[ge-1].y,me.x2-ue[ge-1].x,me.y2-ue[ge-1].y,me.x-ue[ge-1].x,me.y-ue[ge-1].y],re[re.length-1].deltas.push(V);break;case"qct":var Ae=ue[ge-1].x+2/3*(me.x1-ue[ge-1].x),Te=ue[ge-1].y+2/3*(me.y1-ue[ge-1].y),Pe=me.x+2/3*(me.x1-me.x),ve=me.y+2/3*(me.y1-me.y),W=me.x,ft=me.y;V=[Ae-ue[ge-1].x,Te-ue[ge-1].y,Pe-ue[ge-1].x,ve-ue[ge-1].y,W-ue[ge-1].x,ft-ue[ge-1].y],re[re.length-1].deltas.push(V);break;case"arc":re.push({deltas:[],abs:[],arc:!0}),Array.isArray(re[re.length-1].abs)&&re[re.length-1].abs.push(me)}}Q=H?null:L==="stroke"?"stroke":"fill";for(var Ke=!1,qe=0;qe<re.length;qe++)if(re[qe].arc)for(var Ne=re[qe].abs,Oe=0;Oe<Ne.length;Oe++){var je=Ne[Oe];je.type==="arc"?X.call(this,je.x,je.y,je.radius,je.startAngle,je.endAngle,je.counterclockwise,void 0,H,!Ke):G.call(this,je.x,je.y),Ke=!0}else if(re[qe].close===!0)this.pdf.internal.out("h"),Ke=!1;else if(re[qe].begin!==!0){var it=re[qe].start.x,Fe=re[qe].start.y;$.call(this,re[qe].deltas,it,Fe),Ke=!0}Q&&M.call(this,Q),H&&J.call(this)}},K=function(L){var H=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,V=H*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return L-V;case"top":return L+H-V;case"hanging":return L+H-2*V;case"middle":return L+H/2-V;default:return L}},ne=function(L){return L+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};w.prototype.createLinearGradient=function(){var L=function(){};return L.colorStops=[],L.addColorStop=function(H,V){this.colorStops.push([H,V])},L.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},L.isCanvasGradient=!0,L},w.prototype.createPattern=function(){return this.createLinearGradient()},w.prototype.createRadialGradient=function(){return this.createLinearGradient()};var X=function(L,H,V,Q,re,ue,ge,me,xe){for(var Ae=se.call(this,V,Q,re,ue),Te=0;Te<Ae.length;Te++){var Pe=Ae[Te];Te===0&&(xe?E.call(this,Pe.x1+L,Pe.y1+H):G.call(this,Pe.x1+L,Pe.y1+H)),oe.call(this,L,H,Pe.x2,Pe.y2,Pe.x3,Pe.y3,Pe.x4,Pe.y4)}me?J.call(this):M.call(this,ge)},M=function(L){switch(L){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},J=function(){this.pdf.clip(),this.pdf.discardPath()},E=function(L,H){this.pdf.internal.out(r(L)+" "+n(H)+" m")},F=function(L){var H;switch(L.align){case"right":case"end":H="right";break;case"center":H="center";break;default:H="left"}var V=this.pdf.getTextDimensions(L.text),Q=K.call(this,L.y),re=ne.call(this,Q)-V.h,ue=this.ctx.transform.applyToPoint(new l(L.x,Q)),ge=this.ctx.transform.decompose(),me=new h;me=(me=(me=me.multiply(ge.translate)).multiply(ge.skew)).multiply(ge.scale);for(var xe,Ae,Te,Pe=this.ctx.transform.applyToRectangle(new c(L.x,Q,V.w,V.h)),ve=me.applyToRectangle(new c(L.x,re,V.w,V.h)),W=k.call(this,ve),ft=[],Ke=0;Ke<W.length;Ke+=1)ft.indexOf(W[Ke])===-1&&ft.push(W[Ke]);if(I(ft),this.autoPaging)for(var qe=ft[0],Ne=ft[ft.length-1],Oe=qe;Oe<Ne+1;Oe++){this.pdf.setPage(Oe);var je=Oe===1?this.posY+this.margin[0]:this.margin[0],it=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Fe=this.pdf.internal.pageSize.height-this.margin[2],gt=Fe-this.margin[0],tt=this.pdf.internal.pageSize.width-this.margin[1],rt=tt-this.margin[3],St=Oe===1?0:it+(Oe-2)*gt;if(this.ctx.clip_path.length!==0){var ot=this.path;xe=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=R(xe,this.posX+this.margin[3],-1*St+je),Y.call(this,"fill",!0),this.path=ot}var $e=R([JSON.parse(JSON.stringify(ve))],this.posX+this.margin[3],-St+je+this.ctx.prevPageLastElemOffset)[0];L.scale>=.01&&(Ae=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ae*L.scale),Te=this.lineWidth,this.lineWidth=Te*L.scale);var Je=this.autoPaging!=="text";if(Je||$e.y+$e.h<=Fe){if(Je||$e.y>=je&&$e.x<=tt){var Ve=Je?L.text:this.pdf.splitTextToSize(L.text,L.maxWidth||tt-$e.x)[0],At=R([JSON.parse(JSON.stringify(Pe))],this.posX+this.margin[3],-St+je+this.ctx.prevPageLastElemOffset)[0],yt=Je&&(Oe>qe||Oe<Ne)&&S.call(this);yt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],rt,gt,null).clip().discardPath()),this.pdf.text(Ve,At.x,At.y,{angle:L.angle,align:H,renderingMode:L.renderingMode}),yt&&this.pdf.restoreGraphicsState()}}else $e.y<Fe&&(this.ctx.prevPageLastElemOffset+=Fe-$e.y);L.scale>=.01&&(this.pdf.setFontSize(Ae),this.lineWidth=Te)}else L.scale>=.01&&(Ae=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Ae*L.scale),Te=this.lineWidth,this.lineWidth=Te*L.scale),this.pdf.text(L.text,ue.x+this.posX,ue.y+this.posY,{angle:L.angle,align:H,renderingMode:L.renderingMode,maxWidth:L.maxWidth}),L.scale>=.01&&(this.pdf.setFontSize(Ae),this.lineWidth=Te)},G=function(L,H,V,Q){V=V||0,Q=Q||0,this.pdf.internal.out(r(L+V)+" "+n(H+Q)+" l")},$=function(L,H,V){return this.pdf.lines(L,H,V,null,null)},oe=function(L,H,V,Q,re,ue,ge,me){this.pdf.internal.out([t(o(V+L)),t(a(Q+H)),t(o(re+L)),t(a(ue+H)),t(o(ge+L)),t(a(me+H)),"c"].join(" "))},se=function(L,H,V,Q){for(var re=2*Math.PI,ue=Math.PI/2;H>V;)H-=re;var ge=Math.abs(V-H);ge<re&&Q&&(ge=re-ge);for(var me=[],xe=Q?-1:1,Ae=H;ge>1e-5;){var Te=Ae+xe*Math.min(ge,ue);me.push(pe.call(this,L,Ae,Te)),ge-=Math.abs(Te-Ae),Ae=Te}return me},pe=function(L,H,V){var Q=(V-H)/2,re=L*Math.cos(Q),ue=L*Math.sin(Q),ge=re,me=-ue,xe=ge*ge+me*me,Ae=xe+ge*re+me*ue,Te=4/3*(Math.sqrt(2*xe*Ae)-Ae)/(ge*ue-me*re),Pe=ge-Te*me,ve=me+Te*ge,W=Pe,ft=-ve,Ke=Q+H,qe=Math.cos(Ke),Ne=Math.sin(Ke);return{x1:L*Math.cos(H),y1:L*Math.sin(H),x2:Pe*qe-ve*Ne,y2:Pe*Ne+ve*qe,x3:W*qe-ft*Ne,y3:W*Ne+ft*qe,x4:L*Math.cos(V),y4:L*Math.sin(V)}},ee=function(L){return 180*L/Math.PI},le=function(L,H,V,Q,re,ue){var ge=L+.5*(V-L),me=H+.5*(Q-H),xe=re+.5*(V-re),Ae=ue+.5*(Q-ue),Te=Math.min(L,re,ge,xe),Pe=Math.max(L,re,ge,xe),ve=Math.min(H,ue,me,Ae),W=Math.max(H,ue,me,Ae);return new c(Te,ve,Pe-Te,W-ve)},Ce=function(L,H,V,Q,re,ue,ge,me){var xe,Ae,Te,Pe,ve,W,ft,Ke,qe,Ne,Oe,je,it,Fe,gt=V-L,tt=Q-H,rt=re-V,St=ue-Q,ot=ge-re,$e=me-ue;for(Ae=0;Ae<41;Ae++)qe=(ft=(Te=L+(xe=Ae/40)*gt)+xe*((ve=V+xe*rt)-Te))+xe*(ve+xe*(re+xe*ot-ve)-ft),Ne=(Ke=(Pe=H+xe*tt)+xe*((W=Q+xe*St)-Pe))+xe*(W+xe*(ue+xe*$e-W)-Ke),Ae==0?(Oe=qe,je=Ne,it=qe,Fe=Ne):(Oe=Math.min(Oe,qe),je=Math.min(je,Ne),it=Math.max(it,qe),Fe=Math.max(Fe,Ne));return new c(Math.round(Oe),Math.round(je),Math.round(it-Oe),Math.round(Fe-je))},be=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var L,H,V=(L=this.ctx.lineDash,H=this.ctx.lineDashOffset,JSON.stringify({lineDash:L,lineDashOffset:H}));this.prevLineDash!==V&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=V)}}})(Ye.API),function(e){var t=function(l){var c,h,f,p,w,_,d,b,S,k;for(h=[],f=0,p=(l+=c="\0\0\0\0".slice(l.length%4||4)).length;p>f;f+=4)(w=(l.charCodeAt(f)<<24)+(l.charCodeAt(f+1)<<16)+(l.charCodeAt(f+2)<<8)+l.charCodeAt(f+3))!==0?(_=(w=((w=((w=((w=(w-(k=w%85))/85)-(S=w%85))/85)-(b=w%85))/85)-(d=w%85))/85)%85,h.push(_+33,d+33,b+33,S+33,k+33)):h.push(122);return function(y,R){for(var I=R;I>0;I--)y.pop()}(h,c.length),String.fromCharCode.apply(String,h)+"~>"},r=function(l){var c,h,f,p,w,_=String,d="length",b=255,S="charCodeAt",k="slice",y="replace";for(l[k](-2),l=l[k](0,-2)[y](/\s/g,"")[y]("z","!!!!!"),f=[],p=0,w=(l+=c="uuuuu"[k](l[d]%5||5))[d];w>p;p+=5)h=52200625*(l[S](p)-33)+614125*(l[S](p+1)-33)+7225*(l[S](p+2)-33)+85*(l[S](p+3)-33)+(l[S](p+4)-33),f.push(b&h>>24,b&h>>16,b&h>>8,b&h);return function(R,I){for(var P=I;P>0;P--)R.pop()}(f,c[d]),_.fromCharCode.apply(_,f)},n=function(l){return l.split("").map(function(c){return("0"+c.charCodeAt().toString(16)).slice(-2)}).join("")+">"},o=function(l){var c=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((l=l.replace(/\s/g,"")).indexOf(">")!==-1&&(l=l.substr(0,l.indexOf(">"))),l.length%2&&(l+="0"),c.test(l)===!1)return"";for(var h="",f=0;f<l.length;f+=2)h+=String.fromCharCode("0x"+(l[f]+l[f+1]));return h},a=function(l){for(var c=new Uint8Array(l.length),h=l.length;h--;)c[h]=l.charCodeAt(h);return(c=_c(c)).reduce(function(f,p){return f+String.fromCharCode(p)},"")};e.processDataByFilters=function(l,c){var h=0,f=l||"",p=[];for(typeof(c=c||[])=="string"&&(c=[c]),h=0;h<c.length;h+=1)switch(c[h]){case"ASCII85Decode":case"/ASCII85Decode":f=r(f),p.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":f=t(f),p.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":f=o(f),p.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":f=n(f),p.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":f=a(f),p.push("/FlateDecode");break;default:throw new Error('The filter: "'+c[h]+'" is not implemented')}return{data:f,reverseChain:p.reverse().join(" ")}}}(Ye.API),function(e){e.loadFile=function(t,r,n){return function(o,a,l){a=a!==!1,l=typeof l=="function"?l:function(){};var c=void 0;try{c=function(h,f,p){var w=new XMLHttpRequest,_=0,d=function(b){var S=b.length,k=[],y=String.fromCharCode;for(_=0;_<S;_+=1)k.push(y(255&b.charCodeAt(_)));return k.join("")};if(w.open("GET",h,!f),w.overrideMimeType("text/plain; charset=x-user-defined"),f===!1&&(w.onload=function(){w.status===200?p(d(this.responseText)):p(void 0)}),w.send(null),f&&w.status===200)return d(w.responseText)}(o,a,l)}catch{}return c}(t,r,n)},e.loadImageFile=e.loadFile}(Ye.API),function(e){function t(){return(nt.html2canvas?Promise.resolve(nt.html2canvas):zl(()=>import("./html2canvas.esm.CBrSDip1.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load html2canvas: "+c))}).then(function(c){return c.default?c.default:c})}function r(){return(nt.DOMPurify?Promise.resolve(nt.DOMPurify):zl(()=>import("./purify.es.B6FQ9oRL.js"),[])).catch(function(c){return Promise.reject(new Error("Could not load dompurify: "+c))}).then(function(c){return c.default?c.default:c})}var n=function(c){var h=Pt(c);return h==="undefined"?"undefined":h==="string"||c instanceof String?"string":h==="number"||c instanceof Number?"number":h==="function"||c instanceof Function?"function":c&&c.constructor===Array?"array":c&&c.nodeType===1?"element":h==="object"?"object":"unknown"},o=function(c,h){var f=document.createElement(c);for(var p in h.className&&(f.className=h.className),h.innerHTML&&h.dompurify&&(f.innerHTML=h.dompurify.sanitize(h.innerHTML)),h.style)f.style[p]=h.style[p];return f},a=function c(h,f){for(var p=h.nodeType===3?document.createTextNode(h.nodeValue):h.cloneNode(!1),w=h.firstChild;w;w=w.nextSibling)f!==!0&&w.nodeType===1&&w.nodeName==="SCRIPT"||p.appendChild(c(w,f));return h.nodeType===1&&(h.nodeName==="CANVAS"?(p.width=h.width,p.height=h.height,p.getContext("2d").drawImage(h,0,0)):h.nodeName!=="TEXTAREA"&&h.nodeName!=="SELECT"||(p.value=h.value),p.addEventListener("load",function(){p.scrollTop=h.scrollTop,p.scrollLeft=h.scrollLeft},!0)),p},l=function c(h){var f=Object.assign(c.convert(Promise.resolve()),JSON.parse(JSON.stringify(c.template))),p=c.convert(Promise.resolve(),f);return(p=p.setProgress(1,c,1,[c])).set(h)};(l.prototype=Object.create(Promise.prototype)).constructor=l,l.convert=function(c,h){return c.__proto__=h||l.prototype,c},l.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},l.prototype.from=function(c,h){return this.then(function(){switch(h=h||function(f){switch(n(f)){case"string":return"string";case"element":return f.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(c),h){case"string":return this.then(r).then(function(f){return this.set({src:o("div",{innerHTML:c,dompurify:f})})});case"element":return this.set({src:c});case"canvas":return this.set({canvas:c});case"img":return this.set({img:c});default:return this.error("Unknown source type.")}})},l.prototype.to=function(c){switch(c){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},l.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var c={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},h=a(this.prop.src,this.opt.html2canvas.javascriptEnabled);h.tagName==="BODY"&&(c.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=o("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=o("div",{className:"html2pdf__container",style:c}),this.prop.container.appendChild(h),this.prop.container.firstChild.appendChild(o("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},l.prototype.toCanvas=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(h){var f=Object.assign({},this.opt.html2canvas);return delete f.onrendered,h(this.prop.container,f)}).then(function(h){(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},l.prototype.toContext2d=function(){var c=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(c).then(t).then(function(h){var f=this.opt.jsPDF,p=this.opt.fontFaces,w=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,_=Object.assign({async:!0,allowTaint:!0,scale:w,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete _.onrendered,f.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,f.context2d.posX=this.opt.x,f.context2d.posY=this.opt.y,f.context2d.margin=this.opt.margin,f.context2d.fontFaces=p,p)for(var d=0;d<p.length;++d){var b=p[d],S=b.src.find(function(k){return k.format==="truetype"});S&&f.addFont(S.url,b.ref.name,b.ref.style)}return _.windowHeight=_.windowHeight||0,_.windowHeight=_.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):_.windowHeight,f.context2d.save(!0),h(this.prop.container,_)}).then(function(h){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(h),this.prop.canvas=h,document.body.removeChild(this.prop.overlay)})},l.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var c=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=c})},l.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},l.prototype.output=function(c,h,f){return(f=f||"pdf").toLowerCase()==="img"||f.toLowerCase()==="image"?this.outputImg(c,h):this.outputPdf(c,h)},l.prototype.outputPdf=function(c,h){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(c,h)})},l.prototype.outputImg=function(c){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(c){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+c+'" is not supported.'}})},l.prototype.save=function(c){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(c?{filename:c}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},l.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},l.prototype.set=function(c){if(n(c)!=="object")return this;var h=Object.keys(c||{}).map(function(f){if(f in l.template.prop)return function(){this.prop[f]=c[f]};switch(f){case"margin":return this.setMargin.bind(this,c.margin);case"jsPDF":return function(){return this.opt.jsPDF=c.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,c.pageSize);default:return function(){this.opt[f]=c[f]}}},this);return this.then(function(){return this.thenList(h)})},l.prototype.get=function(c,h){return this.then(function(){var f=c in l.template.prop?this.prop[c]:this.opt[c];return h?h(f):f})},l.prototype.setMargin=function(c){return this.then(function(){switch(n(c)){case"number":c=[c,c,c,c];case"array":if(c.length===2&&(c=[c[0],c[1],c[0],c[1]]),c.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=c}).then(this.setPageSize)},l.prototype.setPageSize=function(c){function h(f,p){return Math.floor(f*p/72*96)}return this.then(function(){(c=c||Ye.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(c.inner={width:c.width-this.opt.margin[1]-this.opt.margin[3],height:c.height-this.opt.margin[0]-this.opt.margin[2]},c.inner.px={width:h(c.inner.width,c.k),height:h(c.inner.height,c.k)},c.inner.ratio=c.inner.height/c.inner.width),this.prop.pageSize=c})},l.prototype.setProgress=function(c,h,f,p){return c!=null&&(this.progress.val=c),h!=null&&(this.progress.state=h),f!=null&&(this.progress.n=f),p!=null&&(this.progress.stack=p),this.progress.ratio=this.progress.val/this.progress.state,this},l.prototype.updateProgress=function(c,h,f,p){return this.setProgress(c?this.progress.val+c:null,h||null,f?this.progress.n+f:null,p?this.progress.stack.concat(p):null)},l.prototype.then=function(c,h){var f=this;return this.thenCore(c,h,function(p,w){return f.updateProgress(null,null,1,[p]),Promise.prototype.then.call(this,function(_){return f.updateProgress(null,p),_}).then(p,w).then(function(_){return f.updateProgress(1),_})})},l.prototype.thenCore=function(c,h,f){f=f||Promise.prototype.then;var p=this;c&&(c=c.bind(p)),h&&(h=h.bind(p));var w=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?p:l.convert(Object.assign({},p),Promise.prototype),_=f.call(w,c,h);return l.convert(_,p.__proto__)},l.prototype.thenExternal=function(c,h){return Promise.prototype.then.call(this,c,h)},l.prototype.thenList=function(c){var h=this;return c.forEach(function(f){h=h.thenCore(f)}),h},l.prototype.catch=function(c){c&&(c=c.bind(this));var h=Promise.prototype.catch.call(this,c);return l.convert(h,this)},l.prototype.catchExternal=function(c){return Promise.prototype.catch.call(this,c)},l.prototype.error=function(c){return this.then(function(){throw new Error(c)})},l.prototype.using=l.prototype.set,l.prototype.saveAs=l.prototype.save,l.prototype.export=l.prototype.output,l.prototype.run=l.prototype.then,Ye.getPageSize=function(c,h,f){if(Pt(c)==="object"){var p=c;c=p.orientation,h=p.unit||h,f=p.format||f}h=h||"mm",f=f||"a4",c=(""+(c||"P")).toLowerCase();var w,_=(""+f).toLowerCase(),d={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(h){case"pt":w=1;break;case"mm":w=72/25.4;break;case"cm":w=72/2.54;break;case"in":w=72;break;case"px":w=.75;break;case"pc":case"em":w=12;break;case"ex":w=6;break;default:throw"Invalid unit: "+h}var b,S=0,k=0;if(d.hasOwnProperty(_))S=d[_][1]/w,k=d[_][0]/w;else try{S=f[1],k=f[0]}catch{throw new Error("Invalid format: "+f)}if(c==="p"||c==="portrait")c="p",k>S&&(b=k,k=S,S=b);else{if(c!=="l"&&c!=="landscape")throw"Invalid orientation: "+c;c="l",S>k&&(b=k,k=S,S=b)}return{width:k,height:S,unit:h,k:w,orientation:c}},e.html=function(c,h){(h=h||{}).callback=h.callback||function(){},h.html2canvas=h.html2canvas||{},h.html2canvas.canvas=h.html2canvas.canvas||this.canvas,h.jsPDF=h.jsPDF||this,h.fontFaces=h.fontFaces?h.fontFaces.map(nc):null;var f=new l(h);return h.worker?f:f.from(c).doCallback()}}(Ye.API),Ye.API.addJS=function(e){return lh=e,this.internal.events.subscribe("postPutResources",function(){Bs=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(Bs+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),sh=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+lh+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){Bs!==void 0&&sh!==void 0&&this.internal.out("/Names <</JavaScript "+Bs+" 0 R>>")}),this},function(e){var t;e.events.push(["postPutResources",function(){var r=this,n=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var o=r.outline.render().split(/\r\n/),a=0;a<o.length;a++){var l=o[a],c=n.exec(l);if(c!=null){var h=c[1];r.internal.newObjectDeferredBegin(h,!1)}r.internal.write(l)}if(this.outline.createNamedDestinations){var f=this.internal.pages.length,p=[];for(a=0;a<f;a++){var w=r.internal.newObject();p.push(w);var _=r.internal.getPageInfo(a+1);r.internal.write("<< /D["+_.objId+" 0 R /XYZ null null null]>> endobj")}var d=r.internal.newObject();for(r.internal.write("<< /Names [ "),a=0;a<p.length;a++)r.internal.write("(page_"+(a+1)+")"+p[a]+" 0 R");r.internal.write(" ] >>","endobj"),t=r.internal.newObject(),r.internal.write("<< /Dests "+d+" 0 R"),r.internal.write(">>","endobj")}}]),e.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+t+" 0 R"))}]),e.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(n,o,a){var l={title:o,options:a,children:[]};return n==null&&(n=this.root),n.children.push(l),l},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(n){n.id=r.internal.newObjectDeferred();for(var o=0;o<n.children.length;o++)this.genIds_r(n.children[o])},r.outline.renderRoot=function(n){this.objStart(n),this.line("/Type /Outlines"),n.children.length>0&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1]))),this.line("/Count "+this.count_r({count:0},n)),this.objEnd()},r.outline.renderItems=function(n){for(var o=this.ctx.pdf.internal.getVerticalCoordinateString,a=0;a<n.children.length;a++){var l=n.children[a];this.objStart(l),this.line("/Title "+this.makeString(l.title)),this.line("/Parent "+this.makeRef(n)),a>0&&this.line("/Prev "+this.makeRef(n.children[a-1])),a<n.children.length-1&&this.line("/Next "+this.makeRef(n.children[a+1])),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1])));var c=this.count=this.count_r({count:0},l);if(c>0&&this.line("/Count "+c),l.options&&l.options.pageNumber){var h=r.internal.getPageInfo(l.options.pageNumber);this.line("/Dest ["+h.objId+" 0 R /XYZ 0 "+o(0)+" 0]")}this.objEnd()}for(var f=0;f<n.children.length;f++)this.renderItems(n.children[f])},r.outline.line=function(n){this.ctx.val+=n+`\r
`},r.outline.makeRef=function(n){return n.id+" 0 R"},r.outline.makeString=function(n){return"("+r.internal.pdfEscape(n)+")"},r.outline.objStart=function(n){this.ctx.val+=`\r
`+n.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(n,o){for(var a=0;a<o.children.length;a++)n.count++,this.count_r(n,o.children[a]);return n.count}}])}(Ye.API),function(e){var t=[192,193,194,195,196,197,198,199];e.processJPEG=function(r,n,o,a,l,c){var h,f=this.decode.DCT_DECODE,p=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=l||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,h=function(w){for(var _,d=256*w.charCodeAt(4)+w.charCodeAt(5),b=w.length,S={width:0,height:0,numcomponents:1},k=4;k<b;k+=2){if(k+=d,t.indexOf(w.charCodeAt(k+1))!==-1){_=256*w.charCodeAt(k+5)+w.charCodeAt(k+6),S={width:256*w.charCodeAt(k+7)+w.charCodeAt(k+8),height:_,numcomponents:w.charCodeAt(k+9)};break}d=256*w.charCodeAt(k+2)+w.charCodeAt(k+3)}return S}(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),h.numcomponents){case 1:c=this.color_spaces.DEVICE_GRAY;break;case 4:c=this.color_spaces.DEVICE_CMYK;break;case 3:c=this.color_spaces.DEVICE_RGB}p={data:r,width:h.width,height:h.height,colorSpace:c,bitsPerComponent:8,filter:f,index:n,alias:o}}return p}}(Ye.API),Ye.API.processPNG=function(e,t,r,n){if(this.__addimage__.isArrayBuffer(e)&&(e=new Uint8Array(e)),this.__addimage__.isArrayBufferView(e)){var o,a=iv(e,{checkCrc:!0}),l=a.width,c=a.height,h=a.channels,f=a.palette,p=a.depth;o=f&&h===1?function(X){for(var M=X.width,J=X.height,E=X.data,F=X.palette,G=X.depth,$=!1,oe=[],se=[],pe=void 0,ee=!1,le=0,Ce=0;Ce<F.length;Ce++){var be=f1(F[Ce],4),L=be[0],H=be[1],V=be[2],Q=be[3];oe.push(L,H,V),Q!=null&&(Q===0?(le++,se.length<1&&se.push(Ce)):Q<255&&(ee=!0))}if(ee||le>1){$=!0,se=void 0;var re=M*J;pe=new Uint8Array(re);for(var ue=new DataView(E.buffer),ge=0;ge<re;ge++){var me=oc(ue,ge,G),xe=f1(F[me],4)[3];pe[ge]=xe}}else le===0&&(se=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:$?8:void 0,colorBytes:E,alphaBytes:pe,needSMask:$,palette:oe,mask:se}}(a):h===2||h===4?function(X){for(var M=X.data,J=X.width,E=X.height,F=X.channels,G=X.depth,$=F===2?"DeviceGray":"DeviceRGB",oe=F-1,se=J*E,pe=oe,ee=se*pe,le=1*se,Ce=Math.ceil(ee*G/8),be=Math.ceil(le*G/8),L=new Uint8Array(Ce),H=new Uint8Array(be),V=new DataView(M.buffer),Q=new DataView(L.buffer),re=new DataView(H.buffer),ue=!1,ge=0;ge<se;ge++){for(var me=ge*F,xe=0;xe<pe;xe++)vh(Q,oc(V,me+xe,G),ge*pe+xe,G);var Ae=oc(V,me+pe,G);Ae<(1<<G)-1&&(ue=!0),vh(re,Ae,1*ge,G)}return{colorSpace:$,colorsPerPixel:oe,sMaskBitsPerComponent:ue?G:void 0,colorBytes:L,alphaBytes:H,needSMask:ue}}(a):function(X){var M=X.data,J=X.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:J,colorsPerPixel:J==="DeviceGray"?1:3,colorBytes:M instanceof Uint16Array?function(E){for(var F=E.length,G=new Uint8Array(2*F),$=new DataView(G.buffer,G.byteOffset,G.byteLength),oe=0;oe<F;oe++)$.setUint16(2*oe,E[oe],!1);return G}(M):M,needSMask:!1}}(a);var w,_,d,b=o,S=b.colorSpace,k=b.colorsPerPixel,y=b.sMaskBitsPerComponent,R=b.colorBytes,I=b.alphaBytes,P=b.needSMask,Y=b.palette,K=b.mask,ne=null;return n!==Ye.API.image_compression.NONE&&typeof _c=="function"?(ne=function(X){var M;switch(X){case Ye.API.image_compression.FAST:M=11;break;case Ye.API.image_compression.MEDIUM:M=13;break;case Ye.API.image_compression.SLOW:M=14;break;default:M=12}return M}(n),w=this.decode.FLATE_DECODE,_="/Predictor ".concat(ne," /Colors ").concat(k," /BitsPerComponent ").concat(p," /Columns ").concat(l),e=fh(R,Math.ceil(l*k*p/8),k,p,n),P&&(d=fh(I,Math.ceil(l*y/8),1,y,n))):(w=void 0,_=void 0,e=R,P&&(d=I)),(this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e))&&(e=this.__addimage__.arrayBufferToBinaryString(e)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:r,data:e,index:t,filter:w,decodeParameters:_,transparency:K,palette:Y,sMask:d,predictor:ne,width:l,height:c,bitsPerComponent:p,sMaskBitsPerComponent:y,colorSpace:S}}},function(e){e.processGIF89A=function(t,r,n,o){var a=new Av(t),l=a.width,c=a.height,h=[];a.decodeAndBlitFrameRGBA(0,h);var f={data:h,width:l,height:c},p=new ac(100).encode(f,100);return e.processJPEG.call(this,p,r,n,o)},e.processGIF87A=e.processGIF89A}(Ye.API),Pn.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var e=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(e);for(var t=0;t<e;t++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:o,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Pn.prototype.parseBGR=function(){this.pos=this.offset;try{var e="bit"+this.bitPP,t=this.width*this.height*4;this.data=new Uint8Array(t),this[e]()}catch(r){Ot.log("bit decode error:"+r)}},Pn.prototype.bit1=function(){var e,t=Math.ceil(this.width/8),r=t%4;for(e=this.height-1;e>=0;e--){for(var n=this.bottom_up?e:this.height-1-e,o=0;o<t;o++)for(var a=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+8*o*4,c=0;c<8&&8*o+c<this.width;c++){var h=this.palette[a>>7-c&1];this.data[l+4*c]=h.blue,this.data[l+4*c+1]=h.green,this.data[l+4*c+2]=h.red,this.data[l+4*c+3]=255}r!==0&&(this.pos+=4-r)}},Pn.prototype.bit4=function(){for(var e=Math.ceil(this.width/2),t=e%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<e;o++){var a=this.datav.getUint8(this.pos++,!0),l=n*this.width*4+2*o*4,c=a>>4,h=15&a,f=this.palette[c];if(this.data[l]=f.blue,this.data[l+1]=f.green,this.data[l+2]=f.red,this.data[l+3]=255,2*o+1>=this.width)break;f=this.palette[h],this.data[l+4]=f.blue,this.data[l+4+1]=f.green,this.data[l+4+2]=f.red,this.data[l+4+3]=255}t!==0&&(this.pos+=4-t)}},Pn.prototype.bit8=function(){for(var e=this.width%4,t=this.height-1;t>=0;t--){for(var r=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(o<this.palette.length){var l=this.palette[o];this.data[a]=l.red,this.data[a+1]=l.green,this.data[a+2]=l.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}e!==0&&(this.pos+=4-e)}},Pn.prototype.bit15=function(){for(var e=this.width%3,t=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var l=(a&t)/t*255|0,c=(a>>5&t)/t*255|0,h=(a>>10&t)/t*255|0,f=a>>15?255:0,p=n*this.width*4+4*o;this.data[p]=h,this.data[p+1]=c,this.data[p+2]=l,this.data[p+3]=f}this.pos+=e}},Pn.prototype.bit16=function(){for(var e=this.width%3,t=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var o=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var l=this.datav.getUint16(this.pos,!0);this.pos+=2;var c=(l&t)/t*255|0,h=(l>>5&r)/r*255|0,f=(l>>11)/t*255|0,p=o*this.width*4+4*a;this.data[p]=f,this.data[p+1]=h,this.data[p+2]=c,this.data[p+3]=255}this.pos+=e}},Pn.prototype.bit24=function(){for(var e=this.height-1;e>=0;e--){for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),l=t*this.width*4+4*r;this.data[l]=a,this.data[l+1]=o,this.data[l+2]=n,this.data[l+3]=255}this.pos+=this.width%4}},Pn.prototype.bit32=function(){for(var e=this.height-1;e>=0;e--)for(var t=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),c=t*this.width*4+4*r;this.data[c]=a,this.data[c+1]=o,this.data[c+2]=n,this.data[c+3]=l}},Pn.prototype.getData=function(){return this.data},function(e){e.processBMP=function(t,r,n,o){var a=new Pn(t,!1),l=a.width,c=a.height,h={data:a.getData(),width:l,height:c},f=new ac(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ye.API),xh.prototype.getData=function(){return this.data},function(e){e.processWEBP=function(t,r,n,o){var a=new xh(t),l=a.width,c=a.height,h={data:a.getData(),width:l,height:c},f=new ac(100).encode(h,100);return e.processJPEG.call(this,f,r,n,o)}}(Ye.API),Ye.API.processRGBA=function(e,t,r){for(var n=e.data,o=n.length,a=new Uint8Array(o/4*3),l=new Uint8Array(o/4),c=0,h=0,f=0;f<o;f+=4){var p=n[f],w=n[f+1],_=n[f+2],d=n[f+3];a[c++]=p,a[c++]=w,a[c++]=_,l[h++]=d}var b=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(l),data:b,index:t,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:e.width,height:e.height}},Ye.API.setLanguage=function(e){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[e]!==void 0&&(this.internal.languageSettings.languageCode=e,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Wo=Ye.API,Us=Wo.getCharWidthsArray=function(e,t){var r,n,o=(t=t||{}).font||this.internal.getFont(),a=t.fontSize||this.internal.getFontSize(),l=t.charSpace||this.internal.getCharSpace(),c=t.widths?t.widths:o.metadata.Unicode.widths,h=c.fof?c.fof:1,f=t.kerning?t.kerning:o.metadata.Unicode.kerning,p=f.fof?f.fof:1,w=t.doKerning!==!1,_=0,d=e.length,b=0,S=c[0]||h,k=[];for(r=0;r<d;r++)n=e.charCodeAt(r),typeof o.metadata.widthOfString=="function"?k.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(n))+l*(1e3/a)||0)/1e3):(_=w&&Pt(f[n])==="object"&&!isNaN(parseInt(f[n][b],10))?f[n][b]/p:0,k.push((c[n]||S)/h+_)),b=n;return k},ch=Wo.getStringUnitWidth=function(e,t){var r=(t=t||{}).fontSize||this.internal.getFontSize(),n=t.font||this.internal.getFont(),o=t.charSpace||this.internal.getCharSpace();return Wo.processArabic&&(e=Wo.processArabic(e)),typeof n.metadata.widthOfString=="function"?n.metadata.widthOfString(e,r,o)/r:Us.apply(this,arguments).reduce(function(a,l){return a+l},0)},uh=function(e,t,r,n){for(var o=[],a=0,l=e.length,c=0;a!==l&&c+t[a]<r;)c+=t[a],a++;o.push(e.slice(0,a));var h=a;for(c=0;a!==l;)c+t[a]>n&&(o.push(e.slice(h,a)),c=0,h=a),c+=t[a],a++;return h!==a&&o.push(e.slice(h,a)),o},hh=function(e,t,r){r||(r={});var n,o,a,l,c,h,f,p=[],w=[p],_=r.textIndent||0,d=0,b=0,S=e.split(" "),k=Us.apply(this,[" ",r])[0];if(h=r.lineIndent===-1?S[0].length+2:r.lineIndent||0){var y=Array(h).join(" "),R=[];S.map(function(P){(P=P.split(/\s*\n/)).length>1?R=R.concat(P.map(function(Y,K){return(K&&Y.length?`
`:"")+Y})):R.push(P[0])}),S=R,h=ch.apply(this,[y,r])}for(a=0,l=S.length;a<l;a++){var I=0;if(n=S[a],h&&n[0]==`
`&&(n=n.substr(1),I=1),_+d+(b=(o=Us.apply(this,[n,r])).reduce(function(P,Y){return P+Y},0))>t||I){if(b>t){for(c=uh.apply(this,[n,o,t-(_+d),t]),p.push(c.shift()),p=[c.pop()];c.length;)w.push([c.shift()]);b=o.slice(n.length-(p[0]?p[0].length:0)).reduce(function(P,Y){return P+Y},0)}else p=[n];w.push(p),_=b+h,d=k}else p.push(n),_+=d+b,d=k}return f=h?function(P,Y){return(Y?y:"")+P.join(" ")}:function(P){return P.join(" ")},w.map(f)},Wo.splitTextToSize=function(e,t,r){var n,o=(r=r||{}).fontSize||this.internal.getFontSize(),a=(function(p){if(p.widths&&p.kerning)return{widths:p.widths,kerning:p.kerning};var w=this.internal.getFont(p.fontName,p.fontStyle),_="Unicode";return w.metadata[_]?{widths:w.metadata[_].widths||{0:1},kerning:w.metadata[_].kerning||{}}:{font:w.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);n=Array.isArray(e)?e:String(e).split(/\r?\n/);var l=1*this.internal.scaleFactor*t/o;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0,a.lineIndent=r.lineIndent;var c,h,f=[];for(c=0,h=n.length;c<h;c++)f=f.concat(hh.apply(this,[n[c],l,a]));return f},function(e){e.__fontmetrics__=e.__fontmetrics__||{};for(var t="0123456789abcdef",r="klmnopqrstuvwxyz",n={},o={},a=0;a<16;a++)n[r[a]]=t[a],o[t[a]]=r[a];var l=function(_){return"0x"+parseInt(_,10).toString(16)},c=e.__fontmetrics__.compress=function(_){var d,b,S,k,y=["{"];for(var R in _){if(d=_[R],isNaN(parseInt(R,10))?b="'"+R+"'":(R=parseInt(R,10),b=(b=l(R).slice(2)).slice(0,-1)+o[b.slice(-1)]),typeof d=="number")d<0?(S=l(d).slice(3),k="-"):(S=l(d).slice(2),k=""),S=k+S.slice(0,-1)+o[S.slice(-1)];else{if(Pt(d)!=="object")throw new Error("Don't know what to do with value type "+Pt(d)+".");S=c(d)}y.push(b+S)}return y.push("}"),y.join("")},h=e.__fontmetrics__.uncompress=function(_){if(typeof _!="string")throw new Error("Invalid argument passed to uncompress.");for(var d,b,S,k,y={},R=1,I=y,P=[],Y="",K="",ne=_.length-1,X=1;X<ne;X+=1)(k=_[X])=="'"?d?(S=d.join(""),d=void 0):d=[]:d?d.push(k):k=="{"?(P.push([I,S]),I={},S=void 0):k=="}"?((b=P.pop())[0][b[1]]=I,S=void 0,I=b[0]):k=="-"?R=-1:S===void 0?n.hasOwnProperty(k)?(Y+=n[k],S=parseInt(Y,16)*R,R=1,Y=""):Y+=k:n.hasOwnProperty(k)?(K+=n[k],I[S]=parseInt(K,16)*R,R=1,S=void 0,K=""):K+=k;return y},f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},p={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},w={Unicode:{"Courier-Oblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};e.events.push(["addFont",function(_){var d=_.font,b=w.Unicode[d.postScriptName];b&&(d.metadata.Unicode={},d.metadata.Unicode.widths=b.widths,d.metadata.Unicode.kerning=b.kerning);var S=p.Unicode[d.postScriptName];S&&(d.metadata.Unicode.encoding=S,d.encoding=S.codePages[0])}])}(Ye.API),function(e){var t=function(r){for(var n=r.length,o=new Uint8Array(n),a=0;a<n;a++)o[a]=r.charCodeAt(a);return o};e.API.events.push(["addFont",function(r){var n=void 0,o=r.font,a=r.instance;if(!o.isStandardFont){if(a===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");if(typeof(n=a.existsFileInVFS(o.postScriptName)===!1?a.loadFile(o.postScriptName):a.getFileFromVFS(o.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+o.postScriptName+"').");(function(l,c){c=/^\x00\x01\x00\x00/.test(c)?t(c):t(Gs(c)),l.metadata=e.API.TTFFont.open(c),l.metadata.Unicode=l.metadata.Unicode||{encoding:{},kerning:{},widths:[]},l.metadata.glyIdsUsed=[0]})(o,n)}}])}(Ye),Ye.API.addSvgAsImage=function(e,t,r,n,o,a,l,c){if(isNaN(t)||isNaN(r))throw Ot.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw Ot.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=n,h.height=o;var f=h.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,h.width,h.height);var p={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},w=this;return(nt.canvg?Promise.resolve(nt.canvg):zl(()=>import("./index.es.CM849GaJ.js"),__vite__mapDeps([0,1,2,3]))).catch(function(_){return Promise.reject(new Error("Could not load canvg: "+_))}).then(function(_){return _.default?_.default:_}).then(function(_){return _.fromString(f,e,p)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(_){return _.render(p)}).then(function(){w.addImage(h.toDataURL("image/jpeg",1),t,r,n,o,l,c)})},Ye.API.putTotalPages=function(e){var t,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(e,"g"),r=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(e,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var o=0;o<this.internal.pages[n].length;o++)this.internal.pages[n][o]=this.internal.pages[n][o].replace(t,r);return this},Ye.API.viewerPreferences=function(e,t){var r;e=e||{},t=t||!1;var n,o,a,l={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(l),h=[],f=0,p=0,w=0;function _(b,S){var k,y=!1;for(k=0;k<b.length;k+=1)b[k]===S&&(y=!0);return y}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(l)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,e==="reset"||t===!0){var d=c.length;for(w=0;w<d;w+=1)r[c[w]].value=r[c[w]].defaultValue,r[c[w]].explicitSet=!1}if(Pt(e)==="object"){for(o in e)if(a=e[o],_(c,o)&&a!==void 0){if(r[o].type==="boolean"&&typeof a=="boolean")r[o].value=a;else if(r[o].type==="name"&&_(r[o].valueSet,a))r[o].value=a;else if(r[o].type==="integer"&&Number.isInteger(a))r[o].value=a;else if(r[o].type==="array"){for(f=0;f<a.length;f+=1)if(n=!0,a[f].length===1&&typeof a[f][0]=="number")h.push(String(a[f]-1));else if(a[f].length>1){for(p=0;p<a[f].length;p+=1)typeof a[f][p]!="number"&&(n=!1);n===!0&&h.push([a[f][0]-1,a[f][1]-1].join(" "))}r[o].value="["+h.join(" ")+"]"}else r[o].value=r[o].defaultValue;r[o].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var b,S=[];for(b in r)r[b].explicitSet===!0&&(r[b].type==="name"?S.push("/"+b+" /"+r[b].value):S.push("/"+b+" "+r[b].value));S.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+S.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},function(e){var t=function(){var n='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',o=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),a=unescape(encodeURIComponent(n)),l=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),c=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),h=unescape(encodeURIComponent("</x:xmpmeta>")),f=a.length+l.length+c.length+o.length+h.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+f+" >>"),this.internal.write("stream"),this.internal.write(o+a+l+c+h),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};e.addMetadata=function(n,o){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceuri:o||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",t)),this}}(Ye.API),function(e){var t=e.API,r=t.pdfEscape16=function(a,l){for(var c,h=l.metadata.Unicode.widths,f=["","0","00","000","0000"],p=[""],w=0,_=a.length;w<_;++w){if(c=l.metadata.characterToGlyph(a.charCodeAt(w)),l.metadata.glyIdsUsed.push(c),l.metadata.toUnicode[c]=a.charCodeAt(w),h.indexOf(c)==-1&&(h.push(c),h.push([parseInt(l.metadata.widthOfGlyph(c),10)])),c=="0")return p.join("");c=c.toString(16),p.push(f[4-c.length],c)}return p.join("")},n=function(a){var l,c,h,f,p,w,_;for(p=`/CIDInit /ProcSet findresource begin
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
endcodespacerange`,h=[],w=0,_=(c=Object.keys(a).sort(function(d,b){return d-b})).length;w<_;w++)l=c[w],h.length>=100&&(p+=`
`+h.length+` beginbfchar
`+h.join(`
`)+`
endbfchar`,h=[]),a[l]!==void 0&&a[l]!==null&&typeof a[l].toString=="function"&&(f=("0000"+a[l].toString(16)).slice(-4),l=("0000"+(+l).toString(16)).slice(-4),h.push("<"+l+"><"+f+">"));return h.length&&(p+=`
`+h.length+` beginbfchar
`+h.join(`
`)+`
endbfchar
`),p+`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};t.events.push(["putFont",function(a){(function(l){var c=l.font,h=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="Identity-H"){for(var w=c.metadata.Unicode.widths,_=c.metadata.subset.encode(c.metadata.glyIdsUsed,1),d="",b=0;b<_.length;b++)d+=String.fromCharCode(_[b]);var S=f();p({data:d,addLength1:!0,objectId:S}),h("endobj");var k=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:k}),h("endobj");var y=f();h("<<"),h("/Type /FontDescriptor"),h("/FontName /"+Zo(c.fontName)),h("/FontFile2 "+S+" 0 R"),h("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),h("/Flags "+c.metadata.flags),h("/StemV "+c.metadata.stemV),h("/ItalicAngle "+c.metadata.italicAngle),h("/Ascent "+c.metadata.ascender),h("/Descent "+c.metadata.decender),h("/CapHeight "+c.metadata.capHeight),h(">>"),h("endobj");var R=f();h("<<"),h("/Type /Font"),h("/BaseFont /"+Zo(c.fontName)),h("/FontDescriptor "+y+" 0 R"),h("/W "+e.API.PDFObject.convert(w)),h("/CIDToGIDMap /Identity"),h("/DW 1000"),h("/Subtype /CIDFontType2"),h("/CIDSystemInfo"),h("<<"),h("/Supplement 0"),h("/Registry (Adobe)"),h("/Ordering ("+c.encoding+")"),h(">>"),h(">>"),h("endobj"),c.objectNumber=f(),h("<<"),h("/Type /Font"),h("/Subtype /Type0"),h("/ToUnicode "+k+" 0 R"),h("/BaseFont /"+Zo(c.fontName)),h("/Encoding /"+c.encoding),h("/DescendantFonts ["+R+" 0 R]"),h(">>"),h("endobj"),c.isAlreadyPutted=!0}})(a)}]),t.events.push(["putFont",function(a){(function(l){var c=l.font,h=l.out,f=l.newObject,p=l.putStream;if(c.metadata instanceof e.API.TTFFont&&c.encoding==="WinAnsiEncoding"){for(var w=c.metadata.rawData,_="",d=0;d<w.length;d++)_+=String.fromCharCode(w[d]);var b=f();p({data:_,addLength1:!0,objectId:b}),h("endobj");var S=f();p({data:n(c.metadata.toUnicode),addLength1:!0,objectId:S}),h("endobj");var k=f();h("<<"),h("/Descent "+c.metadata.decender),h("/CapHeight "+c.metadata.capHeight),h("/StemV "+c.metadata.stemV),h("/Type /FontDescriptor"),h("/FontFile2 "+b+" 0 R"),h("/Flags 96"),h("/FontBBox "+e.API.PDFObject.convert(c.metadata.bbox)),h("/FontName /"+Zo(c.fontName)),h("/ItalicAngle "+c.metadata.italicAngle),h("/Ascent "+c.metadata.ascender),h(">>"),h("endobj"),c.objectNumber=f();for(var y=0;y<c.metadata.hmtx.widths.length;y++)c.metadata.hmtx.widths[y]=parseInt(c.metadata.hmtx.widths[y]*(1e3/c.metadata.head.unitsPerEm));h("<</Subtype/TrueType/Type/Font/ToUnicode "+S+" 0 R/BaseFont/"+Zo(c.fontName)+"/FontDescriptor "+k+" 0 R/Encoding/"+c.encoding+" /FirstChar 29 /LastChar 255 /Widths "+e.API.PDFObject.convert(c.metadata.hmtx.widths)+">>"),h("endobj"),c.isAlreadyPutted=!0}})(a)}]);var o=function(a){var l,c=a.text||"",h=a.x,f=a.y,p=a.options||{},w=a.mutex||{},_=w.pdfEscape,d=w.activeFontKey,b=w.fonts,S=d,k="",y=0,R="",I=b[S].encoding;if(b[S].encoding!=="Identity-H")return{text:c,x:h,y:f,options:p,mutex:w};for(R=c,S=d,Array.isArray(c)&&(R=c[0]),y=0;y<R.length;y+=1)b[S].metadata.hasOwnProperty("cmap")&&(l=b[S].metadata.cmap.unicode.codeMap[R[y].charCodeAt(0)]),l||R[y].charCodeAt(0)<256&&b[S].metadata.hasOwnProperty("Unicode")?k+=R[y]:k+="";var P="";return parseInt(S.slice(1))<14||I==="WinAnsiEncoding"?P=_(k,S).split("").map(function(Y){return Y.charCodeAt(0).toString(16)}).join(""):I==="Identity-H"&&(P=r(k,b[S])),w.isHex=!0,{text:P,x:h,y:f,options:p,mutex:w}};t.events.push(["postProcessText",function(a){var l=a.text||"",c=[],h={text:l,x:a.x,y:a.y,options:a.options,mutex:a.mutex};if(Array.isArray(l)){var f=0;for(f=0;f<l.length;f+=1)Array.isArray(l[f])&&l[f].length===3?c.push([o(Object.assign({},h,{text:l[f][0]})).text,l[f][1],l[f][2]]):c.push(o(Object.assign({},h,{text:l[f]})).text);a.text=c}else a.text=o(Object.assign({},h,{text:l})).text}])}(Ye),function(e){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};e.existsFileInVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0},e.addFileToVFS=function(r,n){return t.call(this),this.internal.vFS[r]=n,this},e.getFileFromVFS=function(r){return t.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}}(Ye.API),function(e){e.__bidiEngine__=e.prototype.__bidiEngine__=function(n){var o,a,l,c,h,f,p,w=t,_=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],b={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},S={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},k=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],y=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),R=!1,I=0;this.__bidiEngine__={};var P=function(E){var F=E.charCodeAt(),G=F>>8,$=S[G];return $!==void 0?w[256*$+(255&F)]:G===252||G===253?"AL":y.test(G)?"L":G===8?"R":"N"},Y=function(E){for(var F,G=0;G<E.length;G++){if((F=P(E.charAt(G)))==="L")return!1;if(F==="R")return!0}return!1},K=function(E,F,G,$){var oe,se,pe,ee,le=F[$];switch(le){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":R=!1;break;case"N":case"AN":break;case"EN":R&&(le="AN");break;case"AL":R=!0,le="R";break;case"WS":case"BN":le="N";break;case"CS":$<1||$+1>=F.length||(oe=G[$-1])!=="EN"&&oe!=="AN"||(se=F[$+1])!=="EN"&&se!=="AN"?le="N":R&&(se="AN"),le=se===oe?se:"N";break;case"ES":le=(oe=$>0?G[$-1]:"B")==="EN"&&$+1<F.length&&F[$+1]==="EN"?"EN":"N";break;case"ET":if($>0&&G[$-1]==="EN"){le="EN";break}if(R){le="N";break}for(pe=$+1,ee=F.length;pe<ee&&F[pe]==="ET";)pe++;le=pe<ee&&F[pe]==="EN"?"EN":"N";break;case"NSM":if(l&&!c){for(ee=F.length,pe=$+1;pe<ee&&F[pe]==="NSM";)pe++;if(pe<ee){var Ce=E[$],be=Ce>=1425&&Ce<=2303||Ce===64286;if(oe=F[pe],be&&(oe==="R"||oe==="AL")){le="R";break}}}le=$<1||(oe=F[$-1])==="B"?"N":G[$-1];break;case"B":R=!1,o=!0,le=I;break;case"S":a=!0,le="N"}return le},ne=function(E,F,G){var $=E.split("");return G&&X($,G,{hiLevel:I}),$.reverse(),F&&F.reverse(),$.join("")},X=function(E,F,G){var $,oe,se,pe,ee,le=-1,Ce=E.length,be=0,L=[],H=I?d:_,V=[];for(R=!1,o=!1,a=!1,oe=0;oe<Ce;oe++)V[oe]=P(E[oe]);for(se=0;se<Ce;se++){if(ee=be,L[se]=K(E,V,L,se),$=240&(be=H[ee][b[L[se]]]),be&=15,F[se]=pe=H[be][5],$>0)if($===16){for(oe=le;oe<se;oe++)F[oe]=1;le=-1}else le=-1;if(H[be][6])le===-1&&(le=se);else if(le>-1){for(oe=le;oe<se;oe++)F[oe]=pe;le=-1}V[se]==="B"&&(F[se]=0),G.hiLevel|=pe}a&&function(Q,re,ue){for(var ge=0;ge<ue;ge++)if(Q[ge]==="S"){re[ge]=I;for(var me=ge-1;me>=0&&Q[me]==="WS";me--)re[me]=I}}(V,F,Ce)},M=function(E,F,G,$,oe){if(!(oe.hiLevel<E)){if(E===1&&I===1&&!o)return F.reverse(),void(G&&G.reverse());for(var se,pe,ee,le,Ce=F.length,be=0;be<Ce;){if($[be]>=E){for(ee=be+1;ee<Ce&&$[ee]>=E;)ee++;for(le=be,pe=ee-1;le<pe;le++,pe--)se=F[le],F[le]=F[pe],F[pe]=se,G&&(se=G[le],G[le]=G[pe],G[pe]=se);be=ee}be++}}},J=function(E,F,G){var $=E.split(""),oe={hiLevel:I};return G||(G=[]),X($,G,oe),function(se,pe,ee){if(ee.hiLevel!==0&&p)for(var le,Ce=0;Ce<se.length;Ce++)pe[Ce]===1&&(le=k.indexOf(se[Ce]))>=0&&(se[Ce]=k[le+1])}($,G,oe),M(2,$,F,G,oe),M(1,$,F,G,oe),$.join("")};return this.__bidiEngine__.doBidiReorder=function(E,F,G){if(function(oe,se){if(se)for(var pe=0;pe<oe.length;pe++)se[pe]=pe;c===void 0&&(c=Y(oe)),f===void 0&&(f=Y(oe))}(E,F),l||!h||f)if(l&&h&&c^f)I=c?1:0,E=ne(E,F,G);else if(!l&&h&&f)I=c?1:0,E=J(E,F,G),E=ne(E,F);else if(!l||c||h||f){if(l&&!h&&c^f)E=ne(E,F),c?(I=0,E=J(E,F,G)):(I=1,E=J(E,F,G),E=ne(E,F));else if(l&&c&&!h&&f)I=1,E=J(E,F,G),E=ne(E,F);else if(!l&&!h&&c^f){var $=p;c?(I=1,E=J(E,F,G),I=0,p=!1,E=J(E,F,G),p=$):(I=0,E=J(E,F,G),E=ne(E,F),I=1,p=!1,E=J(E,F,G),p=$,E=ne(E,F))}}else I=0,E=J(E,F,G);else I=c?1:0,E=J(E,F,G);return E},this.__bidiEngine__.setOptions=function(E){E&&(l=E.isInputVisual,h=E.isOutputVisual,c=E.isInputRtl,f=E.isOutputRtl,p=E.isSymmetricSwapping)},this.__bidiEngine__.setOptions(n),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new e.__bidiEngine__({isInputVisual:!0});e.API.events.push(["postProcessText",function(n){var o=n.text;n.x,n.y;var a=n.options||{};n.mutex,a.lang;var l=[];if(a.isInputVisual=typeof a.isInputVisual!="boolean"||a.isInputVisual,r.setOptions(a),Object.prototype.toString.call(o)==="[object Array]"){var c=0;for(l=[],c=0;c<o.length;c+=1)Object.prototype.toString.call(o[c])==="[object Array]"?l.push([r.doBidiReorder(o[c][0]),o[c][1],o[c][2]]):l.push([r.doBidiReorder(o[c])]);n.text=l}else n.text=r.doBidiReorder(o);r.setOptions({isInputVisual:!0})}])}(Ye),Ye.API.TTFFont=function(){function e(t){var r;if(this.rawData=t,r=this.contents=new Xi(t),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new Bv(this),this.registerTTF()}return e.open=function(t){return new e(t)},e.prototype.parse=function(){return this.directory=new kv(this.contents),this.head=new Nv(this),this.name=new jv(this),this.cmap=new C2(this),this.toUnicode={},this.hhea=new Ev(this),this.maxp=new Rv(this),this.hmtx=new Ov(this),this.post=new Iv(this),this.os2=new Tv(this),this.loca=new zv(this),this.glyf=new Mv(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},e.prototype.registerTTF=function(){var t,r,n,o,a;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var l,c,h,f;for(f=[],l=0,c=(h=this.bbox).length;l<c;l++)t=h[l],f.push(Math.round(t*this.scaleFactor));return f}).call(this),this.stemV=0,this.post.exists?(n=255&(o=this.post.italic_angle),32768&(r=o>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(a=this.familyClass)===1||a===2||a===3||a===4||a===5||a===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},e.prototype.characterToGlyph=function(t){var r;return((r=this.cmap.unicode)!=null?r.codeMap[t]:void 0)||0},e.prototype.widthOfGlyph=function(t){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*r},e.prototype.widthOfString=function(t,r,n){var o,a,l,c;for(l=0,a=0,c=(t=""+t).length;0<=c?a<c:a>c;a=0<=c?++a:--a)o=t.charCodeAt(a),l+=this.widthOfGlyph(this.characterToGlyph(o))+n*(1e3/r)||0;return l*(r/1e3)},e.prototype.lineHeight=function(t,r){var n;return r==null&&(r=!1),n=r?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},e}();var Mn,Xi=function(){function e(t){this.data=t??[],this.pos=0,this.length=this.data.length}return e.prototype.readByte=function(){return this.data[this.pos++]},e.prototype.writeByte=function(t){return this.data[this.pos++]=t},e.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},e.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},e.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},e.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},e.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},e.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},e.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},e.prototype.readString=function(t){var r,n;for(n=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)n[r]=String.fromCharCode(this.readByte());return n.join("")},e.prototype.writeString=function(t){var r,n,o;for(o=[],r=0,n=t.length;0<=n?r<n:r>n;r=0<=n?++r:--r)o.push(this.writeByte(t.charCodeAt(r)));return o},e.prototype.readShort=function(){return this.readInt16()},e.prototype.writeShort=function(t){return this.writeInt16(t)},e.prototype.readLongLong=function(){var t,r,n,o,a,l,c,h;return t=this.readByte(),r=this.readByte(),n=this.readByte(),o=this.readByte(),a=this.readByte(),l=this.readByte(),c=this.readByte(),h=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^r)+1099511627776*(255^n)+4294967296*(255^o)+16777216*(255^a)+65536*(255^l)+256*(255^c)+(255^h)+1):72057594037927940*t+281474976710656*r+1099511627776*n+4294967296*o+16777216*a+65536*l+256*c+h},e.prototype.writeLongLong=function(t){var r,n;return r=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},e.prototype.readInt=function(){return this.readInt32()},e.prototype.writeInt=function(t){return this.writeInt32(t)},e.prototype.read=function(t){var r,n;for(r=[],n=0;0<=t?n<t:n>t;n=0<=t?++n:--n)r.push(this.readByte());return r},e.prototype.write=function(t){var r,n,o,a;for(a=[],n=0,o=t.length;n<o;n++)r=t[n],a.push(this.writeByte(r));return a},e}(),kv=function(){var e;function t(r){var n,o,a;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},o=0,a=this.tableCount;0<=a?o<a:o>a;o=0<=a?++o:--o)n={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[n.tag]=n}return t.prototype.encode=function(r){var n,o,a,l,c,h,f,p,w,_,d,b,S;for(S in d=Object.keys(r).length,h=Math.log(2),w=16*Math.floor(Math.log(d)/h),l=Math.floor(w/h),p=16*d-w,(o=new Xi).writeInt(this.scalarType),o.writeShort(d),o.writeShort(w),o.writeShort(l),o.writeShort(p),a=16*d,f=o.pos+a,c=null,b=[],r)for(_=r[S],o.writeString(S),o.writeInt(e(_)),o.writeInt(f),o.writeInt(_.length),b=b.concat(_),S==="head"&&(c=f),f+=_.length;f%4;)b.push(0),f++;return o.write(b),n=2981146554-e(o.data),o.pos=c+8,o.writeUInt32(n),o.data},e=function(r){var n,o,a,l;for(r=A2.call(r);r.length%4;)r.push(0);for(a=new Xi(r),o=0,n=0,l=r.length;n<l;n=n+=4)o+=a.readUInt32();return 4294967295&o},t}(),Lv={}.hasOwnProperty,Qn=function(e,t){for(var r in t)Lv.call(t,r)&&(e[r]=t[r]);function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};Mn=function(){function e(t){var r;this.file=t,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return e.prototype.parse=function(){},e.prototype.encode=function(){},e.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},e}();var Nv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var r;return(r=new Xi).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(t),r.writeShort(this.glyphDataFormat),r.data},e}(),wh=function(){function e(t,r){var n,o,a,l,c,h,f,p,w,_,d,b,S,k,y,R,I;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=r+t.readInt(),w=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(h=0;h<256;++h)this.codeMap[h]=t.readByte();break;case 4:for(d=t.readUInt16(),_=d/2,t.pos+=6,a=function(){var P,Y;for(Y=[],h=P=0;0<=_?P<_:P>_;h=0<=_?++P:--P)Y.push(t.readUInt16());return Y}(),t.pos+=2,S=function(){var P,Y;for(Y=[],h=P=0;0<=_?P<_:P>_;h=0<=_?++P:--P)Y.push(t.readUInt16());return Y}(),f=function(){var P,Y;for(Y=[],h=P=0;0<=_?P<_:P>_;h=0<=_?++P:--P)Y.push(t.readUInt16());return Y}(),p=function(){var P,Y;for(Y=[],h=P=0;0<=_?P<_:P>_;h=0<=_?++P:--P)Y.push(t.readUInt16());return Y}(),o=(this.length-t.pos+this.offset)/2,c=function(){var P,Y;for(Y=[],h=P=0;0<=o?P<o:P>o;h=0<=o?++P:--P)Y.push(t.readUInt16());return Y}(),h=y=0,I=a.length;y<I;h=++y)for(k=a[h],n=R=b=S[h];b<=k?R<=k:R>=k;n=b<=k?++R:--R)p[h]===0?l=n+f[h]:(l=c[p[h]/2+(n-b)-(_-h)]||0)!==0&&(l+=f[h]),this.codeMap[n]=65535&l}t.pos=w}return e.encode=function(t,r){var n,o,a,l,c,h,f,p,w,_,d,b,S,k,y,R,I,P,Y,K,ne,X,M,J,E,F,G,$,oe,se,pe,ee,le,Ce,be,L,H,V,Q,re,ue,ge,me,xe,Ae,Te;switch($=new Xi,l=Object.keys(t).sort(function(Pe,ve){return Pe-ve}),r){case"macroman":for(S=0,k=function(){var Pe=[];for(b=0;b<256;++b)Pe.push(0);return Pe}(),R={0:0},a={},oe=0,le=l.length;oe<le;oe++)R[me=t[o=l[oe]]]==null&&(R[me]=++S),a[o]={old:t[o],new:R[t[o]]},k[o]=R[t[o]];return $.writeUInt16(1),$.writeUInt16(0),$.writeUInt32(12),$.writeUInt16(0),$.writeUInt16(262),$.writeUInt16(0),$.write(k),{charMap:a,subtable:$.data,maxGlyphID:S+1};case"unicode":for(F=[],w=[],I=0,R={},n={},y=f=null,se=0,Ce=l.length;se<Ce;se++)R[Y=t[o=l[se]]]==null&&(R[Y]=++I),n[o]={old:Y,new:R[Y]},c=R[Y]-o,y!=null&&c===f||(y&&w.push(y),F.push(o),f=c),y=o;for(y&&w.push(y),w.push(65535),F.push(65535),J=2*(M=F.length),X=2*Math.pow(Math.log(M)/Math.LN2,2),_=Math.log(X/2)/Math.LN2,ne=2*M-X,h=[],K=[],d=[],b=pe=0,be=F.length;pe<be;b=++pe){if(E=F[b],p=w[b],E===65535){h.push(0),K.push(0);break}if(E-(G=n[E].new)>=32768)for(h.push(0),K.push(2*(d.length+M-b)),o=ee=E;E<=p?ee<=p:ee>=p;o=E<=p?++ee:--ee)d.push(n[o].new);else h.push(G-E),K.push(0)}for($.writeUInt16(3),$.writeUInt16(1),$.writeUInt32(12),$.writeUInt16(4),$.writeUInt16(16+8*M+2*d.length),$.writeUInt16(0),$.writeUInt16(J),$.writeUInt16(X),$.writeUInt16(_),$.writeUInt16(ne),ue=0,L=w.length;ue<L;ue++)o=w[ue],$.writeUInt16(o);for($.writeUInt16(0),ge=0,H=F.length;ge<H;ge++)o=F[ge],$.writeUInt16(o);for(xe=0,V=h.length;xe<V;xe++)c=h[xe],$.writeUInt16(c);for(Ae=0,Q=K.length;Ae<Q;Ae++)P=K[Ae],$.writeUInt16(P);for(Te=0,re=d.length;Te<re;Te++)S=d[Te],$.writeUInt16(S);return{charMap:n,subtable:$.data,maxGlyphID:I+1}}},e}(),C2=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="cmap",e.prototype.parse=function(t){var r,n,o;for(t.pos=this.offset,this.version=t.readUInt16(),o=t.readUInt16(),this.tables=[],this.unicode=null,n=0;0<=o?n<o:n>o;n=0<=o?++n:--n)r=new wh(t,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},e.encode=function(t,r){var n,o;return r==null&&(r="macroman"),n=wh.encode(t,r),(o=new Xi).writeUInt16(0),o.writeUInt16(1),n.table=o.data.concat(n.subtable),n},e}(),Ev=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),Tv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var r,n;for(n=[],r=0;r<10;++r)n.push(t.readByte());return n}(),this.charRange=function(){var r,n;for(n=[],r=0;r<4;++r)n.push(t.readInt());return n}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var r,n;for(n=[],r=0;r<2;r=++r)n.push(t.readInt());return n}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(),Iv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="post",e.prototype.parse=function(t){var r,n,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var a;for(n=t.readUInt16(),this.glyphNameIndex=[],a=0;0<=n?a<n:a>n;a=0<=n?++a:--a)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)r=t.readByte(),o.push(this.names.push(t.readString(r)));return o;case 151552:return n=t.readUInt16(),this.offsets=t.read(n);case 262144:return this.map=(function(){var l,c,h;for(h=[],a=l=0,c=this.file.maxp.numGlyphs;0<=c?l<c:l>c;a=0<=c?++l:--l)h.push(t.readUInt32());return h}).call(this)}},e}(),Pv=function(e,t){this.raw=e,this.length=e.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},jv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="name",e.prototype.parse=function(t){var r,n,o,a,l,c,h,f,p,w,_;for(t.pos=this.offset,t.readShort(),r=t.readShort(),c=t.readShort(),n=[],a=0;0<=r?a<r:a>r;a=0<=r?++a:--a)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+c+t.readShort()});for(h={},a=p=0,w=n.length;p<w;a=++p)o=n[a],t.pos=o.offset,f=t.readString(o.length),l=new Pv(f,o),h[_=o.nameID]==null&&(h[_]=[]),h[o.nameID].push(l);this.strings=h,this.copyright=h[0],this.fontFamily=h[1],this.fontSubfamily=h[2],this.uniqueSubfamily=h[3],this.fontName=h[4],this.version=h[5];try{this.postscriptName=h[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=h[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=h[7],this.manufacturer=h[8],this.designer=h[9],this.description=h[10],this.vendorUrl=h[11],this.designerUrl=h[12],this.license=h[13],this.licenseUrl=h[14],this.preferredFamily=h[15],this.preferredSubfamily=h[17],this.compatibleFull=h[18],this.sampleText=h[19]},e}(),Rv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),Ov=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="hmtx",e.prototype.parse=function(t){var r,n,o,a,l,c,h;for(t.pos=this.offset,this.metrics=[],r=0,c=this.file.hhea.numberOfMetrics;0<=c?r<c:r>c;r=0<=c?++r:--r)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(o=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var f,p;for(p=[],r=f=0;0<=o?f<o:f>o;r=0<=o?++f:--f)p.push(t.readInt16());return p}(),this.widths=(function(){var f,p,w,_;for(_=[],f=0,p=(w=this.metrics).length;f<p;f++)a=w[f],_.push(a.advance);return _}).call(this),n=this.widths[this.widths.length-1],h=[],r=l=0;0<=o?l<o:l>o;r=0<=o?++l:--l)h.push(this.widths.push(n));return h},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),A2=[].slice,Mv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var r,n,o,a,l,c,h,f,p,w;return t in this.cache?this.cache[t]:(a=this.file.loca,r=this.file.contents,n=a.indexOf(t),(o=a.lengthOf(t))===0?this.cache[t]=null:(r.pos=this.offset+n,l=(c=new Xi(r.read(o))).readShort(),f=c.readShort(),w=c.readShort(),h=c.readShort(),p=c.readShort(),this.cache[t]=l===-1?new Dv(c,f,w,h,p):new Fv(c,l,f,w,h,p),this.cache[t]))},e.prototype.encode=function(t,r,n){var o,a,l,c,h;for(l=[],a=[],c=0,h=r.length;c<h;c++)o=t[r[c]],a.push(l.length),o&&(l=l.concat(o.encode(n)));return a.push(l.length),{table:l,offsets:a}},e}(),Fv=function(){function e(t,r,n,o,a,l){this.raw=t,this.numberOfContours=r,this.xMin=n,this.yMin=o,this.xMax=a,this.yMax=l,this.compound=!1}return e.prototype.encode=function(){return this.raw.data},e}(),Dv=function(){function e(t,r,n,o,a){var l,c;for(this.raw=t,this.xMin=r,this.yMin=n,this.xMax=o,this.yMax=a,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],l=this.raw;c=l.readShort(),this.glyphOffsets.push(l.pos),this.glyphIDs.push(l.readUInt16()),32&c;)l.pos+=1&c?4:2,128&c?l.pos+=8:64&c?l.pos+=4:8&c&&(l.pos+=2)}return e.prototype.encode=function(){var t,r,n;for(r=new Xi(A2.call(this.raw.data)),t=0,n=this.glyphIDs.length;t<n;++t)r.pos=this.glyphOffsets[t];return r.data},e}(),zv=function(){function e(){return e.__super__.constructor.apply(this,arguments)}return Qn(e,Mn),e.prototype.tag="loca",e.prototype.parse=function(t){var r,n;return t.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=2)a.push(2*t.readUInt16());return a}).call(this):(function(){var o,a;for(a=[],n=0,o=this.length;n<o;n+=4)a.push(t.readUInt32());return a}).call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,r){for(var n=new Uint32Array(this.offsets.length),o=0,a=0,l=0;l<n.length;++l)if(n[l]=o,a<r.length&&r[a]==l){++a,n[l]=o;var c=this.offsets[l],h=this.offsets[l+1]-c;h>0&&(o+=h)}for(var f=new Array(4*n.length),p=0;p<n.length;++p)f[4*p+3]=255&n[p],f[4*p+2]=(65280&n[p])>>8,f[4*p+1]=(16711680&n[p])>>16,f[4*p]=(4278190080&n[p])>>24;return f},e}(),Bv=function(){function e(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return e.prototype.generateCmap=function(){var t,r,n,o,a;for(r in o=this.font.cmap.tables[0].codeMap,t={},a=this.subset)n=a[r],t[r]=o[n];return t},e.prototype.glyphsFor=function(t){var r,n,o,a,l,c,h;for(o={},l=0,c=t.length;l<c;l++)o[a=t[l]]=this.font.glyf.glyphFor(a);for(a in r=[],o)(n=o[a])!=null&&n.compound&&r.push.apply(r,n.glyphIDs);if(r.length>0)for(a in h=this.glyphsFor(r))n=h[a],o[a]=n;return o},e.prototype.encode=function(t,r){var n,o,a,l,c,h,f,p,w,_,d,b,S,k,y;for(o in n=C2.encode(this.generateCmap(),"unicode"),l=this.glyphsFor(t),d={0:0},y=n.charMap)d[(h=y[o]).old]=h.new;for(b in _=n.maxGlyphID,l)b in d||(d[b]=_++);return p=function(R){var I,P;for(I in P={},R)P[R[I]]=I;return P}(d),w=Object.keys(p).sort(function(R,I){return R-I}),S=function(){var R,I,P;for(P=[],R=0,I=w.length;R<I;R++)c=w[R],P.push(p[c]);return P}(),a=this.font.glyf.encode(l,S,d),f=this.font.loca.encode(a.offsets,S),k={cmap:this.font.cmap.raw(),glyf:a.table,loca:f,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(k["OS/2"]=this.font.os2.raw()),this.font.directory.encode(k)},e}();Ye.API.PDFObject=function(){var e;function t(){}return e=function(r,n){return(Array(n+1).join("0")+r).slice(-n)},t.convert=function(r){var n,o,a,l;if(Array.isArray(r))return"["+function(){var c,h,f;for(f=[],c=0,h=r.length;c<h;c++)n=r[c],f.push(t.convert(n));return f}().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+e(r.getUTCFullYear(),4)+e(r.getUTCMonth(),2)+e(r.getUTCDate(),2)+e(r.getUTCHours(),2)+e(r.getUTCMinutes(),2)+e(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(o in a=["<<"],r)l=r[o],a.push("/"+o+" "+t.convert(l));return a.push(">>"),a.join(`
`)}return""+r},t}();const Uv=["ab67616d000082c1","ab67616d0000b273"];async function Hv(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch{return!1}}function qv(e){const t="https://i.scdn.co/image/";return e.startsWith(t)?e.slice(t.length+16):null}async function $v(e){if(!e||!e.includes("i.scdn.co/image/"))return e;const t=qv(e);if(!t)return e;for(const r of Uv){const n=`https://i.scdn.co/image/${r}${t}`;if(await Hv(n))return n}return e}function Vv(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M17 18h2"},child:[]},{tag:"path",attr:{d:"M20 15h-3v6"},child:[]},{tag:"path",attr:{d:"M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"},child:[]}]})(e)}function Wv(e){return Lt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(e)}const Gv=z.div`
    width: 80%;
    margin-inline: auto;
`,Yv=z.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,Xv=z(c0)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,Zv=z.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Jv=z.div`
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
`,Qv=Xt`
    0% {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`,Kv=Xt`
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
`,e8=z.img`
    width: 388px;
    height: 548px;
    margin-right: 20px;
    animation: ${e=>e.visible?za`${Qv} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`:za`${Kv} 0.3s cubic-bezier(0.4, 0, 1, 1) forwards`};
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
`,t8=z.div`
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
`,r8=Xt`
    0% {
        opacity: 0;
    }
    20% {
        opacity: 0.08;
    }
    100% {
        opacity: 0;
    }
`,n8=z.div`
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
    animation: ${e=>e.visible?za`${r8} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"};
    opacity: 0;
`,i8=z(S0)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?Xt`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,o8=z.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,a8=z.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,sc=z.div`
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
`,s8=z.div`
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
`,l8=z.div`
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
`,c8=z.div`
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
`,yh=z.button`
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
`,u8=z.textarea`
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
`;z.div`
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
`;z.div`
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
`;z.span`
    font-size: 0.9em;
    font-weight: 600;
    transition: color 0.2s ease;
`;z(km)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;z(Vv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;z(Wv)`
    font-size: 1.15em;
    transition: color 0.2s ease;
`;z(Yp)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?za`
                  animation: ${Xt`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:za`
                  animation: ${Xt`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`;const h8=z.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`;z.p`
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
`;const f8=z(bp)`
    font-size: 3em;
`,d8=z.div`
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
`,_h=z.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Sh=z.h3`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
    margin: 0;
`,Ch=z.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
`,Go=z.div`
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
`,Yo=z.div`
    font-size: 1em;
    font-weight: 600;
    color: var(--textColor);
`,lc=z.div`
    font-size: 0.75em;
    color: var(--textSecondary);
`,p8=z.div`
    padding: 10px 10px;
    border-radius: 10px;
    background: var(--glassBackground);
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    gap: 12px;
`,m8=z.p`
    font-size: 0.9em;
    color: var(--textColor);
    margin: 0;
    line-height: 1.5;
`,g8=z.button`
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
`,Kc=j.forwardRef(({albumID:e,handleClickBack:t,model:r,modelParams:n,initialPosterJson:o},a)=>{const{t:l}=ur(),c=j.useRef(null),h=j.useRef(null),f=j.useRef(null),[p,w]=j.useState(""),[_,d]=j.useState(""),[b,S]=j.useState("200"),[k,y]=j.useState("110"),[R,I]=j.useState("50"),[P,Y]=j.useState((n==null?void 0:n.marginTop)??""),[K,ne]=j.useState(160),[X,M]=j.useState((n==null?void 0:n.marginCover)??0),[J,E]=j.useState((n==null?void 0:n.marginBackground)??0),[F,G]=j.useState("#5900ff"),[$,oe]=j.useState("#ff9100"),[se,pe]=j.useState("#ff0000"),[ee,le]=j.useState("#00ff40"),[Ce,be]=j.useState("#2600ff"),[L,H]=j.useState(!0),[V,Q]=j.useState((n==null?void 0:n.useFade)??!0),[re,ue]=j.useState((n==null?void 0:n.showTracklist)??!1),[ge,me]=j.useState(""),[xe,Ae]=j.useState(""),[Te,Pe]=j.useState(""),[ve,W]=j.useState(null),[ft,Ke]=j.useState("information");function qe(de){Br(!0),w(de.albumName||""),d(de.artistsName||""),S(de.titleSize||"200"),y(de.artistsSize||"110"),I(de.tracksSize||"50"),Y(de.marginTop||""),ne(de.marginSide||160),M(de.marginCover||0),E(de.marginBackground||0),G(de.backgroundColor||"#5900ff"),oe(de.textColor||"#ff9100"),pe(de.color1||"#ff0000"),le(de.color2||"#00ff40"),be(de.color3||"#2600ff"),de.coverZoom!==void 0?bt(de.coverZoom):de.marginCover!==void 0?bt(-de.marginCover/11):bt(0),pr(de.coverHorizontalPosition||0),Jr(de.coverVerticalPosition||0),un(de.coverBlur||0),H(de.useWatermark!==void 0?de.useWatermark:!0),Q(de.useFade!==void 0?de.useFade:!0),ue(de.showTracklist!==void 0?de.showTracklist:!1),Oe(de.useUncompressed!==void 0?de.useUncompressed:!1),me(de.albumCover||""),Ae(de.uncompressedAlbumCover||""),Pe(de.customFont||""),gt(de.tracklist||""),rt(de.titleRelease||""),ot(de.releaseDate||""),Je(de.titleRuntime||""),At(de.runtime||""),Mt()}j.useEffect(()=>{if(ve){const de=new FileReader;de.onload=async ct=>{const zt="CustomFont",dn=new FontFace(zt,ct.target.result);try{const rr=await dn.load();document.fonts.add(rr),Pe(zt)}catch(rr){console.error("Erro ao carregar fonte:",rr)}},de.readAsArrayBuffer(ve)}},[ve]),j.useEffect(()=>{o&&qe(o)},[o]);const[Ne,Oe]=j.useState(!1),[je,it]=j.useState("Original"),[Fe,gt]=j.useState(""),[tt,rt]=j.useState(""),[St,ot]=j.useState(""),[$e,Je]=j.useState(""),[Ve,At]=j.useState(""),[yt,Be]=j.useState(!1),[at,Nt]=j.useState(null),[Xe,vt]=j.useState(null),[lt,Ht]=j.useState(!1),[Zt,Et]=j.useState(null),[Qe,bt]=j.useState(0),[_n,pr]=j.useState(0),[Zr,Jr]=j.useState(0),[Ze,un]=j.useState(0),[hn,Fr]=j.useState(!1),[Dr,qt]=j.useState(!1),[tr,hr]=j.useState(!1),[Fn,Dn]=j.useState(!1),[zr,Br]=j.useState(!1),[wr,Ur]=j.useState("png"),[yr,Sn]=j.useState(1);j.useEffect(()=>{if(!zr){const de=-Qe*10;M(de)}},[Qe,zr]);const fn=de=>{S(de.target.value),Fr(!0)},Kn=(de,ct)=>{ct&&!Dr?(S(de),qt(!0)):hn||S(de)},yi=de=>{I(de.target.value),hr(!0)},_i=(de,ct)=>{ct&&!Fn?(I(de),Dn(!0)):tr||I(de)},ei={albumCover:ge,uncompressedAlbumCover:xe,useUncompressed:Ne,albumName:p,artistsName:_,titleSize:b,artistsSize:k,tracksSize:R,marginTop:P,marginSide:K,marginCover:X,marginBackground:J,titleRelease:tt,releaseDate:St,titleRuntime:$e,runtime:Ve,backgroundColor:F,textColor:$,useWatermark:L,useFade:V,showTracklist:re,tracklist:Fe,color1:se,color2:ee,color3:Ce,albumID:e,coverZoom:Qe,coverHorizontalPosition:_n,coverVerticalPosition:Zr,coverBlur:Ze,userAdjustedTitleSize:hn,initialTitleSizeSet:Dr,userAdjustedTracksSize:tr,initialTracksSizeSet:Fn},[Zi,Ji]=j.useState(null),[Cn,Si]=j.useState(null),[_r,zn]=j.useState(null),[Ci,Ai]=j.useState(!1),[Qi,ti]=j.useState(!1),[Ki,Bn]=j.useState(!1),[eo,Vt]=j.useState(!1),[oa,to]=j.useState(!1),[An,kn]=j.useState(!1);j.useEffect(()=>{if(Ci){Bn(!1);const de=setTimeout(()=>{kn(!0)},100);return()=>clearTimeout(de)}else kn(!1)},[Ci]);const Qr=de=>{Ai(!1),to(!1),h5(p,_),setTimeout(()=>{Ji(de),kn(!1),setTimeout(()=>{Bn(!0)},50)},300)},ri=de=>{Si(de),ti(!1)};j.useEffect(()=>{if(Cn&&_r){if(_r==="png"){const de=document.createElement("a");de.href=Cn,de.download=`Posterfy - ${p}.png`,de.click(),Ml(p,"poster",_)}else if(_r==="pdf"){const de=new Image;de.onload=()=>{const ct=new Ye({orientation:"portrait",unit:"mm",format:"a4",compress:!1});ct.addImage(Cn,"JPEG",0,0,210,297,void 0,"FAST"),ct.save(`Posterfy - ${p}.pdf`),Ml(p,"poster_pdf",_)},de.src=Cn}else if(_r==="jpg"){const de=new Image;de.onload=()=>{const ct=document.createElement("canvas");ct.width=de.width,ct.height=de.height;const zt=ct.getContext("2d");zt.fillStyle="#FFFFFF",zt.fillRect(0,0,ct.width,ct.height),zt.drawImage(de,0,0),ct.toBlob(dn=>{const rr=document.createElement("a");rr.href=URL.createObjectURL(dn),rr.download=`Posterfy - ${p}.jpg`,rr.click(),URL.revokeObjectURL(rr.href),Ml(p,"poster_jpg",_)},"image/jpeg",.95)},de.src=Cn}Si(null),zn(null)}},[Cn,_r,p,_]),j.useEffect(()=>{Si(null)},[yr]);const Mt=()=>{Fr(!1),hr(!1),Bn(!1),requestAnimationFrame(()=>{to(!0),Ai(!0)})},ro=de=>{me(URL.createObjectURL(de)),Oe(!1),Ae(""),it(de.name),Br(!1)},no=()=>{zn("png"),ti(!0)},Po=()=>{zn("pdf"),ti(!0)},aa=()=>{zn("jpg"),ti(!0)};function Er(de,ct){Nt(de),vt(ct),Be(!0)}function io(){Be(!1)}function jo(de){Et(de),Ht(!0)}function Ln(){Ht(!1)}const oo=()=>{const ct=Fe.split(`
`).map(zt=>zt.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());gt(ct.join(`
`))},sa=()=>{const ct=Fe.split(`
`).map(zt=>zt.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());gt(ct.join(`
`))};async function la(de,ct="us"){var zt;try{let dn=`https://itunes.apple.com/search?term=${encodeURIComponent(de)}&country=${ct}&entity=album&limit=1`,rr=await fetch(dn);if(!rr.ok)throw new Error(`HTTP Error: ${rr.status}`);let ni=await rr.json();if(!((zt=ni.results)!=null&&zt.length))return console.warn("No album data found."),Oe(!1),!1;let Vr=ni.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Vr.length===2?`https://a5.mzstatic.com/us/r1000/0/${Vr[1].split("/").slice(0,-1).join("/")}`:""}catch(dn){return console.error("Error fetching album cover:",dn.message),""}}j.useEffect(()=>{rt(l("EDITOR_ReleaseTitle")),Je(l("EDITOR_RuntimeTitle"))},[l]),j.useEffect(()=>{const de=async()=>{var ct;try{const et=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Vr=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${et}`}})).json(),ao=Vr.artists.map(Nn=>Nn.name).join(", ");w(Vr.name),d(ao);const ua=(ct=Vr.images[0])==null?void 0:ct.url,pn=await $v(ua);me(pn),ot(Vr.release_date);const mn=await la(Vr.name+" "+ao);Ae(mn||pn);const ha=Vr.tracks.items.reduce((Nn,Hn)=>Nn+Hn.duration_ms,0),Oo=Math.floor(ha/1e3),ii=Math.floor(Oo/60),ki=Math.floor(ii/60),Un=Oo%60,oi=ii%60,Li=ki>0?`${ki}h ${oi}min ${Un}s`:`${oi}min ${Un}s`;At(Li);const fa=Vr.tracks.items.map((Nn,Hn)=>(Hn===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&ue(!0),`${Hn+1}. ${Nn.name}`));gt(fa.join(`
`)),Vt(!0)}catch(zt){console.error("Error trying to fetch album data:",zt)}};o?(qe(o),Vt(!0)):(Br(!1),de())},[e]),j.useEffect(()=>{const de=ct=>{ct.ctrlKey&&ct.key==="s"?(ct.preventDefault(),Mt()):ct.ctrlKey&&ct.shiftKey&&ct.key==="D"?(ct.preventDefault(),Po()):ct.ctrlKey&&ct.key==="d"&&(ct.preventDefault(),no())};return window.addEventListener("keydown",de),()=>{window.removeEventListener("keydown",de)}},[Zi,p,no]);const Ro=j.useRef(!0);return j.useEffect(()=>{if(Ro.current){Ro.current=!1;return}if(!eo)return;const de=setTimeout(()=>{console.log("🔄 Auto-aplicando alterações após 500ms de inatividade..."),Mt()},1e3);return()=>{clearTimeout(de)}},[p,_,b,k,R,P,K,X,J,F,$,se,ee,Ce,L,V,re,Fe,Ne,tt,St,$e,Ve,Qe,_n,Zr,Ze,Te,eo]),v.jsx(v.Fragment,{children:eo?v.jsxs(Gv,{ref:a,children:[v.jsx(A0.Palette,{src:ge,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:de})=>(j.useEffect(()=>{de&&de.length>0&&!zr&&(G(de[0]),oe(de[1]),pe(de[2]),le(de[3]),be(de[4]),Mt())},[de]),null)}),v.jsxs(Yv,{onClick:t,children:[v.jsx(Xv,{}),v.jsx(Zv,{children:l("GoBack")})]}),v.jsxs(Jv,{children:[v.jsx(bc,{ref:h,onImageReady:Qr,posterData:ei,generatePoster:Ci,onTitleSizeAdjust:Kn,onTracksSizeAdjust:_i,customFont:Te,scale:.3}),Qi&&v.jsx("div",{style:{position:"absolute",left:"-9999px",top:"-9999px"},children:v.jsx(bc,{ref:f,onImageReady:ri,posterData:ei,generatePoster:Qi,customFont:Te,scale:yr})}),v.jsxs(t8,{children:[v.jsx(n8,{visible:Ki}),Zi?v.jsx(e8,{src:Zi,ref:c,visible:Ki}):v.jsx(h8,{ref:c}),v.jsx(i8,{visible:An})]}),v.jsxs(o8,{children:[v.jsx(Gt,{animationDelay:50,children:v.jsxs(a8,{children:[v.jsx(sc,{$active:ft==="information",onClick:()=>Ke("information"),children:l("EDITOR_InformationTab")}),v.jsx(sc,{$active:ft==="tracklist",onClick:()=>Ke("tracklist"),children:l("EDITOR_TracklistTab")}),v.jsx(sc,{$active:ft==="export",onClick:()=>Ke("export"),children:l("EDITOR_ExportTab")})]})}),ft==="information"?v.jsxs(s8,{children:[v.jsx(Gt,{animationDelay:0,children:v.jsx(Hi,{title:l("EDITOR_AlbumName"),value:p,onChange:de=>w(de.target.value)})}),v.jsx(Gt,{animationDelay:50,children:v.jsx(Hi,{title:l("EDITOR_ArtistName"),value:_,onChange:de=>d(de.target.value)})}),v.jsx(Gt,{animationDelay:100,children:v.jsx(Hi,{title:l("EDITOR_TitleSize"),value:b,onChange:fn})}),v.jsx(Gt,{animationDelay:150,children:v.jsx(Hi,{title:l("EDITOR_ArtistSize"),value:k,onChange:de=>y(de.target.value)})}),v.jsx(Gt,{animationDelay:200,children:v.jsx(Hi,{title:l("EDITOR_TracksSize"),value:R,onChange:yi})}),v.jsx(Gt,{animationDelay:250,children:v.jsx(Hi,{title:l("EDITOR_MarginTop"),value:P,onChange:de=>Y(de.target.value)})}),v.jsx(Gt,{animationDelay:300,children:v.jsx(Hi,{title:l("EDITOR_MarginSide"),value:K,onChange:de=>ne(de.target.value)})}),v.jsx(Gt,{animationDelay:350,children:v.jsx(h3,{title:l("EDITOR_CoverEditor"),text:l("EDITOR_EditCover"),onClick:jo,icon:f8})}),v.jsx(Gt,{animationDelay:375,children:v.jsx(Hi,{title:l("EDITOR_MarginBackground"),value:J,onChange:de=>E(de.target.value)})}),v.jsx(Gt,{animationDelay:400,children:v.jsx(Ju,{title:tt,value:St,onChangeTitle:de=>rt(de.target.value),onChangeDate:de=>ot(de.target.value)})}),v.jsx(Gt,{animationDelay:450,children:v.jsx(Ju,{title:$e,value:Ve,onChangeTitle:de=>Je(de.target.value),onChangeDate:de=>At(de.target.value)})}),v.jsx(Gt,{animationDelay:500,children:v.jsx(Pa,{title:l("EDITOR_BackgroundColor"),value:F,onClick:de=>Er(de,"backgroundColor")})}),v.jsx(Gt,{animationDelay:550,children:v.jsx(Pa,{title:l("EDITOR_TextColor"),value:$,onClick:de=>Er(de,"textColor")})}),v.jsx(Gt,{animationDelay:600,children:v.jsx(Pa,{title:`${l("EDITOR_Color")} 1`,value:se,onClick:de=>Er(de,"color1")})}),v.jsx(Gt,{animationDelay:650,children:v.jsx(Pa,{title:`${l("EDITOR_Color")} 2`,value:ee,onClick:de=>Er(de,"color2")})}),v.jsx(Gt,{animationDelay:700,children:v.jsx(Pa,{title:`${l("EDITOR_Color")} 3`,value:Ce,onClick:de=>Er(de,"color3")})}),v.jsx(Gt,{animationDelay:750,children:v.jsx(Ps,{title:l("EDITOR_Watermark"),value:L,onChange:de=>H(de),text:l("EDITOR_WatermarkText")})}),v.jsx(Gt,{animationDelay:800,children:v.jsx(Ps,{title:l("EDITOR_Fade"),value:V,onChange:de=>Q(de),text:l("EDITOR_FadeText")})}),v.jsx(Gt,{animationDelay:850,children:v.jsx(Ps,{title:l("EDITOR_Uncompressed"),value:Ne,onChange:de=>Oe(de),text:l("EDITOR_UncompressedText")})}),v.jsx(Gt,{animationDelay:900,children:v.jsx(Ps,{title:l("EDITOR_Tracklist"),value:re,onChange:de=>ue(de),text:l("EDITOR_TracklistText")})}),v.jsx(Gt,{animationDelay:950,children:v.jsx(t1,{title:l("EDITOR_Cover"),onChange:ro,text:je,accept:"image/png, image/jpg, image/jpeg",icon:f3})}),v.jsx(Gt,{animationDelay:1e3,children:v.jsx(t1,{title:l("EDITOR_Font"),text:(ve==null?void 0:ve.name)||l("EDITOR_DefaultFont"),onChange:W,accept:".ttf,.otf",icon:d3})})]}):ft==="tracklist"?v.jsxs(l8,{children:[v.jsx(u8,{value:Fe,onChange:de=>gt(de.target.value),placeholder:l("EDITOR_TracklistPlaceholder"),"data-lenis-prevent":!0}),v.jsxs(c8,{children:[v.jsx(yh,{onClick:oo,children:l("EDITOR_RemoveParentheses")}),v.jsx(yh,{onClick:sa,children:l("EDITOR_RemoveBrackets")})]})]}):v.jsxs(d8,{children:[v.jsxs(_h,{children:[v.jsx(Sh,{children:l("EXPORT_Format")}),v.jsxs(Ch,{children:[v.jsx(Go,{$selected:wr==="png",onClick:()=>Ur("png"),children:v.jsx(Yo,{children:"PNG"})}),v.jsx(Go,{$selected:wr==="pdf",onClick:()=>Ur("pdf"),children:v.jsx(Yo,{children:"PDF"})}),v.jsx(Go,{$selected:wr==="jpg",onClick:()=>Ur("jpg"),children:v.jsx(Yo,{children:"JPG"})})]})]}),v.jsxs(_h,{children:[v.jsx(Sh,{children:l("EXPORT_Size")}),v.jsxs(Ch,{children:[v.jsxs(Go,{$selected:yr===.3,onClick:()=>Sn(.3),children:[v.jsx(Yo,{children:l("EXPORT_SizeThumbnail")}),v.jsx(lc,{children:l("EXPORT_SizeDescription_Thumbnail")})]}),v.jsxs(Go,{$selected:yr===.6,onClick:()=>Sn(.6),children:[v.jsx(Yo,{children:l("EXPORT_SizeMedium")}),v.jsx(lc,{children:l("EXPORT_SizeDescription_Medium")})]}),v.jsxs(Go,{$selected:yr===1,onClick:()=>Sn(1),children:[v.jsx(Yo,{children:l("EXPORT_SizeNormal")}),v.jsx(lc,{children:l("EXPORT_SizeDescription_Normal")})]})]})]}),v.jsxs(p8,{children:[v.jsx(p3,{size:24,style:{color:"var(--AccentColor)",flexShrink:0}}),v.jsx(m8,{children:l("EXPORT_PrintTip")})]}),v.jsx(g8,{onClick:()=>{wr==="png"?no():wr==="pdf"?Po():wr==="jpg"&&aa()},children:l("EXPORT_DownloadButton")})]})]})]}),yt&&at&&Xe&&zu.createPortal(v.jsx(qg,{DefaultColor:Xe==="backgroundColor"?F:Xe==="textColor"?$:Xe==="color1"?se:Xe==="color2"?ee:Ce,image:ge,predefinedColors:[se,ee,Ce,F,$],onDone:de=>{switch(Xe){case"backgroundColor":G(de);break;case"textColor":oe(de);break;case"color1":pe(de);break;case"color2":le(de);break;case"color3":be(de);break}io()},position:at,onClose:io}),document.body),lt&&Zt&&zu.createPortal(v.jsx(Xg,{position:Zt,albumCoverUrl:Ne?xe:ge,initialZoom:Qe,initialHorizontalPosition:_n,initialVerticalPosition:Zr,initialBlur:Ze,onDone:de=>{Br(!1),bt(de.zoom),pr(de.horizontalPosition),Jr(de.verticalPosition),un(de.blur),Ln()},onClose:Ln}),document.body)]}):v.jsx(C0,{})})});Kc.displayName="PosterEditor";const v8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},b8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},x8=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:r="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const o=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),v.jsx("path",{fill:r,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},w8=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:r="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[v.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),v.jsx("path",{fill:r,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},y8=z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,_8=z(c0)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,S8=z.h3`
  font-size: 1.3em;
  font-weight: bold;
`,eu=Xt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,C8=z.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${eu} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
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
`,Hs=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${eu} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,qs=z.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${eu} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,A8=z.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,k8=z.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function L8({onSelectModel:e,onBack:t}){const{t:r}=ur(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},o={marginCover:160,useFade:!1,marginTop:20},a={marginCover:-1100,marginBackground:-1200,useFade:!1},l={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function c(f,p){u5("select_model","ModelSelector",f),e&&e(f,p)}const h=[0,.08,.16,.24];return v.jsxs(v.Fragment,{children:[v.jsxs(y8,{onClick:t,children:[v.jsx(_8,{}),v.jsx(S8,{children:r("GoBack")})]}),v.jsx(A8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelTitle")}),v.jsx(k8,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:r("ModelText")}),v.jsxs(C8,{children:[v.jsxs(Hs,{delay:h[0],onClick:()=>c("standart",l),children:[v.jsx(v8,{width:200}),v.jsx(qs,{delay:h[0],children:"Standard"})]}),v.jsxs(Hs,{delay:h[1],onClick:()=>c("frame",o),children:[v.jsx(w8,{width:200}),v.jsx(qs,{delay:h[1],children:"Frame"})]}),v.jsxs(Hs,{delay:h[2],onClick:()=>c("basic",n),children:[v.jsx(b8,{width:200}),v.jsx(qs,{delay:h[2],children:"Basic"})]}),v.jsxs(Hs,{delay:h[3],onClick:()=>c("fullcover",a),children:[v.jsx(x8,{width:200}),v.jsx(qs,{delay:h[3],children:"Full Cover"})]})]})]})}const N8=z.div`
    width: 100%;
`,E8=z.div`
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
`,T8=z(ap)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,I8=z(g5)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,P8=z.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,j8=z.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function R8({onSearch:e,value:t=""}){const{t:r}=ur(),[n,o]=j.useState(t);j.useEffect(()=>{o(t)},[t]);const a=h=>{h.key==="Enter"&&(e(n),n.trim()&&Gu(n.trim()))},l=h=>{o(h.target.value)},c=()=>{e(n),n.trim()&&Gu(n.trim())};return v.jsx(N8,{children:v.jsxs(E8,{role:"search","aria-label":"Album search for poster creation",children:[v.jsx(T8,{"aria-hidden":"true"}),v.jsx(P8,{}),v.jsx(j8,{placeholder:r("SearchPlaceholder"),value:n,onChange:l,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),v.jsx(I8,{onClick:c,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const O8=z.div`
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

`,M8=z.img`
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
`,F8=z.h3`
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
`,D8=z.p`
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
`,z8=z.div`
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
`;function B8({title:e,artist:t,cover:r,id:n,onClick:o,animationDelay:a=0}){const[l,c]=j.useState(!1),[h,f]=j.useState(!1),[p,w]=j.useState(!1);j.useEffect(()=>{if(p)c(!0);else{const d=setTimeout(()=>{c(!0),w(!0)},a);return()=>clearTimeout(d)}},[a,p]);const _=()=>{f(!0)};return v.jsxs(O8,{onClick:()=>o(n),$visible:l,children:[v.jsx(M8,{src:r,$loaded:h,onLoad:_,loading:"lazy"}),v.jsxs(z8,{children:[v.jsx(F8,{children:e}),v.jsx(D8,{children:t})]})]})}const U8=z.div`
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
`,H8=z.button`
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
`,q8=z.div`
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
`;function Ah({query:e,onclick:t}){const{t:r}=ur(),[n,o]=j.useState([]),[a,l]=j.useState(""),[c,h]=j.useState(0),[f,p]=j.useState(!0),[w,_]=j.useState(!1),[d,b]=j.useState(!1),[S,k]=j.useState(0),[y,R]=j.useState(!1),I=20;j.useEffect(()=>{(async()=>{const M=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(M.access_token)})()},[]),j.useEffect(()=>{o([]),h(0),p(!0),k(0),R(!1)},[e]),j.useEffect(()=>{const Y=async(K=!1)=>{if(a){K?b(!0):_(!0);try{let ne;const X=K?c:0;if(e?ne=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${I}&offset=${X}`,{headers:{Authorization:`Bearer ${a}`}}):ne=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${X}&limit=${I}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!ne.ok){const se=await ne.text();throw new Error(`Erro na API: ${se}`)}const M=await ne.json(),E=M.albums.items.filter(se=>se!=null).map(se=>{var pe,ee;return{id:se.id,title:se.name,artist:(pe=se.artists)==null?void 0:pe.map(le=>le.name).join(", "),cover:(ee=se.images[0])==null?void 0:ee.url}});K?(R(!1),k(n.length),o(se=>[...se,...E])):(R(!1),k(0),o(E));const F=(E.length-1)*80;setTimeout(()=>{R(!0)},F+800);const $=M.albums.total,oe=K?n.length+E.length:E.length;p(oe<$&&E.length===I)}catch(ne){console.error(ne)}finally{_(!1),b(!1)}}};a&&(n.length===0||c===0)&&Y(!1)},[e,a]);const P=async()=>{if(!a||!f||d)return;const Y=c+I;h(Y);try{b(!0);let K;if(e?K=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${I}&offset=${Y}`,{headers:{Authorization:`Bearer ${a}`}}):K=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${Y}&limit=${I}&locale=en-US`,{headers:{Authorization:`Bearer ${a}`}}),!K.ok){const $=await K.text();throw new Error(`Erro na API: ${$}`)}const ne=await K.json(),M=ne.albums.items.filter($=>$!=null).map($=>{var oe,se;return{id:$.id,title:$.name,artist:(oe=$.artists)==null?void 0:oe.map(pe=>pe.name).join(", "),cover:(se=$.images[0])==null?void 0:se.url}});R(!1),k(n.length),o($=>[...$,...M]);const J=(M.length-1)*80;setTimeout(()=>{R(!0)},J+800);const F=ne.albums.total,G=n.length+M.length;p(G<F&&M.length===I)}catch(K){console.error(K)}finally{b(!1)}};return v.jsx(v.Fragment,{children:w&&n.length===0?v.jsx(C0,{}):v.jsxs(v.Fragment,{children:[v.jsx(U8,{children:n.map((Y,K)=>{const ne=K>=S?K-S:K;return v.jsx(B8,{onClick:()=>t(Y.id),cover:Y.cover,title:Y.title,artist:Y.artist,id:Y.id,animationDelay:ne*80},Y.id)})}),f&&v.jsx(q8,{$visible:y,children:v.jsx(H8,{onClick:P,disabled:d,children:r(d?"LoadingMore":"LoadMore")})})]})})}const $8=({onBack:e})=>{const[t,r]=j.useState(""),[n,o]=j.useState(null),[a,l]=j.useState(!1),[c,h]=j.useState(null),[f,p]=j.useState(null),w=j.useRef(null);j.useEffect(()=>{a&&n&&w.current&&setTimeout(()=>{w.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[a,n]);function _(S){o(S),l(!0),h(null),p(null)}function d(){o(null),l(!1),h(null),p(null),e&&e()}const b=S=>{r(S)};return n&&c&&f?v.jsx(Kc,{albumID:n,handleClickBack:d,model:c,modelParams:f,source:"search_creation"}):n&&a?v.jsx("div",{ref:w,children:v.jsx(L8,{onSelectModel:(S,k)=>{h(S),p(k),l(!1)},onBack:d})}):v.jsxs(v.Fragment,{children:[v.jsx(R8,{onSearch:b,value:t}),t.trim()?v.jsx(Ah,{query:t,onclick:_}):v.jsx("div",{children:v.jsx(Ah,{onclick:_})})]})},So=z.div`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;function V8({loadingComplete:e}){const{t}=ur(),[r,n]=j.useState(null),o=j.useRef(null),[a,l]=Gi(),[c,h]=Gi(),[f,p]=Gi(),[w,_]=Gi(),[d,b]=Gi(),[S,k]=Gi(),[y,R]=Gi(),I=Y=>{p5(Y.albumName||"Unknown Album",Y.artistsName||"Unknown Artist",Y.albumID||"","album_collection"),n(Y),setTimeout(()=>{if(o.current){const K=o.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:K,behavior:"smooth"})}},100)},P=()=>{n(null)};return v.jsxs(v.Fragment,{children:[v.jsx(xm,{showAnimation:e,onRecreate:I}),v.jsx(So,{ref:a,$isVisible:l,children:v.jsx(Ya,{text:t("anchorArt"),type:1})}),v.jsx(So,{ref:c,$isVisible:h,children:v.jsx(Mc,{title:t("ArtTitle"),paragraph:t("ArtParagraph")})}),v.jsx(So,{ref:f,$isVisible:p,children:r?v.jsx(Kc,{ref:o,albumID:r.albumID,initialPosterJson:r,handleClickBack:P}):v.jsx($8,{})}),v.jsx(So,{ref:w,$isVisible:_,children:v.jsx(Gm,{})}),v.jsx(So,{ref:d,$isVisible:b,children:v.jsx(Um,{})}),v.jsx(So,{ref:S,$isVisible:k,children:v.jsx(Om,{})}),v.jsx(So,{ref:y,$isVisible:R,children:v.jsx(og,{})})]})}function k2(e){return Lt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const kh=z.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,Lh=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,Nh=z.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,W8=z.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,G8=z.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,Eh=z.button`
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
`,Th=z.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,Y8=z(p0)`
    width: 20px;
    height: 20px;
`,X8=z(k2)`
    width: 20px;
    height: 20px;
`,Z8=z.div`
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
`,Ih=z.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,J8=z.p`
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
`;const Q8=z.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,K8=z.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,eb=z.div`
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
`,tb=z.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function rb(){const{t:e}=ur(),t=Eo(),[r]=Yd(),{user:n,loading:o,loginWithGoogle:a,loginWithSpotify:l}=Ga();if(j.useEffect(()=>{if(!o){if(n){t("/dashboard");return}r.get("login")==="success"&&t("/dashboard")}},[n,o,t,r]),o)return v.jsxs(kh,{children:[v.jsx(el,{iconColor:"var(--AccentColor)"}),v.jsxs(Lh,{children:[v.jsx(bi,{fill:"var(--textColor)",width:"100px"}),v.jsx(Nh,{children:e("Loading")})]})]});const c=()=>{t("/")};return v.jsxs(kh,{children:[v.jsx(el,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),v.jsx(Lh,{children:v.jsxs(Q8,{children:[v.jsx(eb,{onClick:c,children:v.jsx(bi,{fill:"var(--textColor)",width:"25vw"})}),v.jsxs(K8,{children:[v.jsx(tb,{children:v.jsx(bi,{fill:"var(--textColor)",width:"90px"})}),v.jsx(Nh,{children:e("LOGIN_Welcome")}),v.jsx(W8,{children:e("LOGIN_JoinCommunity")}),v.jsxs(G8,{children:[v.jsxs(Eh,{onClick:a,children:[v.jsx(Y8,{}),v.jsx(Th,{children:e("LOGIN_GoogleSignIn")})]}),v.jsxs(Z8,{children:[v.jsx(Ih,{}),v.jsx(J8,{children:e("LOGIN_Or")}),v.jsx(Ih,{})]}),v.jsxs(Eh,{onClick:l,children:[v.jsx(X8,{}),v.jsx(Th,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function nb(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const ib=Xt`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,ob=Xt`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,ab=Xt`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,sb=Xt`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,lb=z.div`
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
    animation: ${e=>e.isClosing?sb:ab} 0.3s ease-in-out forwards;
`,cb=z.div`
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
    animation: ${e=>e.isClosing?ob:ib} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,ub=z.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,hb=z.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,fb=z(u0)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,db=z.div`
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
`,pb=z.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,mb=z.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,gb=z.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Ph=z.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,jh=z.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,Rh=z.input`
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
`,cc=z.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`,vb=z.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,bb=z.button`
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
`,xb=z.button`
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
`,wb=z.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function yb({isOpen:e,onClose:t,onProfileUpdate:r}){const{user:n,updateUser:o}=Ga(),{t:a}=ur(),[l,c]=j.useState({name:"",username:""}),[h,f]=j.useState({}),[p,w]=j.useState(!1),[_,d]=j.useState(""),[b,S]=j.useState(!1);j.useEffect(()=>{n&&c({name:n.name||"",username:n.username||""})},[n]);const k=()=>{const P={};return l.name.trim()||(P.name=a("NameIsRequired")),l.username.trim()?l.username.length<3?P.username=a("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(l.username)||(P.username=a("UsernameFormat")):P.username=a("UsernameIsRequired"),f(P),Object.keys(P).length===0},y=P=>{const{name:Y,value:K}=P.target;c(ne=>({...ne,[Y]:K})),h[Y]&&f(ne=>({...ne,[Y]:""})),_&&d("")},R=async P=>{var Y,K,ne,X;if(P.preventDefault(),!!k()){w(!0),d("");try{await Yn.updateUserProfile({name:l.name.trim(),username:l.username.trim()}),o({...n,name:l.name.trim(),username:l.username.trim()}),d(a("ProfileUpdatedSuccessfully")),r&&r(),setTimeout(()=>{I()},1500)}catch(M){console.error("Profile update failed:",M),(Y=M.message)!=null&&Y.includes("409")||(K=M.message)!=null&&K.includes("taken")?f({username:a("UsernameTaken")}):(ne=M.message)!=null&&ne.includes("400")||(X=M.message)!=null&&X.includes("invalid")?f({username:a("InvalidUsernameFormat")}):f({general:a("FailedToUpdateProfile")})}finally{w(!1)}}},I=()=>{S(!0),setTimeout(()=>{S(!1),t(),f({}),d("")},300)};return e?(document.body.style.overflow="hidden",v.jsx(lb,{isClosing:b,children:v.jsxs(cb,{isClosing:b,children:[v.jsxs(ub,{children:[v.jsx(pb,{children:v.jsx(bi,{width:25,height:25,fill:"var(--textColor)"})}),v.jsx(hb,{children:a("EditProfile")}),v.jsx(db,{onClick:I,children:v.jsx(fb,{})})]}),v.jsx(mb,{}),v.jsxs(gb,{onSubmit:R,children:[v.jsxs(Ph,{children:[v.jsx(jh,{htmlFor:"name",children:a("Name")}),v.jsx(Rh,{type:"text",id:"name",name:"name",value:l.name,onChange:y,placeholder:a("EnterYourName"),disabled:p}),h.name&&v.jsx(cc,{children:h.name})]}),v.jsxs(Ph,{children:[v.jsx(jh,{htmlFor:"username",children:a("Username")}),v.jsx(Rh,{type:"text",id:"username",name:"username",value:l.username,onChange:y,placeholder:a("EnterYourUsername"),disabled:p}),h.username&&v.jsx(cc,{children:h.username})]}),h.general&&v.jsx(cc,{children:h.general}),_&&v.jsx(wb,{children:_}),v.jsxs(vb,{children:[v.jsx(bb,{type:"button",onClick:I,disabled:p,children:a("Cancel")}),v.jsx(xb,{type:"submit",disabled:p,children:a(p?"Saving":"SaveChanges")})]})]})]})})):null}Xt`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;Xt`
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
`;const L2=z.div`
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
`,_b=z.div`
  position: relative;
  display: inline-block;
  &:hover ${L2} {
    opacity: 0.9;
  }
`;function Oh({text:e,children:t,delay:r=0}){const[n,o]=j.useState(!1),[a,l]=j.useState({top:0,left:0}),c=f=>{const p=f.currentTarget.getBoundingClientRect();l({top:p.top+p.height/2-17,left:p.right+15}),o(!0)},h=()=>{o(!1)};return v.jsxs(_b,{onMouseEnter:c,onMouseLeave:h,children:[v.jsx(L2,{isVisible:n,style:{top:a.top,left:a.left},children:e}),t]})}const Sb=z.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,Cb=z.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,Ab=z.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,kb=z.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,Lb=z.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,Nb=z.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`,Mh=z.button`
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
`,Fh=z.button`
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
`;const Eb=z(p0)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,Tb=z(k2)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,Dh=z.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,Ib=z.div`
    display: flex;
    align-items: center;
    width: 100%;
`,Pb=z(nb)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,jb=z.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,Rb=z.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,Ob=z.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function Mb(){const e=Eo(),{user:t,loading:r,logout:n,isAuthenticated:o}=Ga(),[a,l]=j.useState(null),[c,h]=j.useState(!1),{t:f}=ur();j.useEffect(()=>{if(!r&&!o){e("/login");return}o&&t&&p()},[o,r,e,t]);const p=async()=>{try{const S=await Yn.getUserProfile();l(S.user)}catch(S){console.error("Failed to fetch user profile:",S)}},w=async()=>{await n(),e("/login")},_=()=>{h(!0)},d=()=>{h(!1)},b=()=>{p()};return r?v.jsx(Oc,{isVisible:!0,initialFade:!0}):t?v.jsxs(Sb,{children:[v.jsx(el,{iconColor:"var(--AccentColor)"}),v.jsxs(Cb,{children:[(a==null?void 0:a.avatar)&&v.jsx(kb,{src:a.avatar,alt:a.name}),v.jsxs(Ab,{children:[v.jsxs(Ib,{children:[v.jsx(Lb,{children:(a==null?void 0:a.name)||t.name}),(a==null?void 0:a.hasGoogle)&&v.jsx(Oh,{text:f("ConnectedToGoogle"),delay:200,children:v.jsx(Dh,{children:v.jsx(Eb,{})})}),(a==null?void 0:a.hasSpotify)&&v.jsx(Oh,{text:f("ConnectedToSpotify"),delay:200,children:v.jsx(Dh,{children:v.jsx(Tb,{})})}),v.jsxs(Rb,{children:[v.jsx(Fh,{onClick:_,children:f("EditProfile")}),v.jsx(Mh,{onClick:w,children:f("Logout")})]})]}),v.jsxs(Nb,{children:["@",(a==null?void 0:a.username)||t.username]})]})]}),v.jsxs(Ob,{children:[v.jsx(Fh,{onClick:_,children:f("EditProfile")}),v.jsx(Mh,{onClick:w,children:f("Logout")})]}),v.jsx(Pb,{}),v.jsx(jb,{children:f("NoActivityYet")}),v.jsx(yb,{isOpen:c,onClose:d,onProfileUpdate:b})]}):null}const Fb=({width:e,height:t,fillHeart:r,fillQuestion:n,pulse:o=!1,onClick:a})=>v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[v.jsx("path",{fill:r,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),v.jsx("path",{fill:n,style:{animation:o?"pulse 2s infinite":"none",cursor:o?"pointer":"default"},onClick:a,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),N2=document.createElement("style");N2.textContent=`
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
`;document.head.appendChild(N2);const Db="/assets/kanye.BMPu-Gq3.png",zb="/assets/runaway.DjODmQSR.mp3",Bb=()=>{const e=Eo(),{t}=ur(),[r,n]=j.useState(0),o=j.useRef(null),[a,l]=j.useState(!1),c=()=>{n(r+1),console.log(r)},h=()=>{o.current&&(o.current.loop=!0,o.current.paused?(o.current.play(),l(!0)):(o.current.pause(),l(!1)))};return v.jsxs(Ub,{playing:a,children:[v.jsx(Fb,{width:"150px",height:"150px",fillHeart:a?"#edcd6b":"var(--textColor)",fillQuestion:a?"#edcd6b":"var(--textColor)",pulse:!a,onClick:c}),v.jsxs(Wb,{children:[v.jsx(uc,{playing:a,active:r>=1}),v.jsx(uc,{playing:a,active:r>=2}),v.jsx(uc,{playing:a,active:r>=3})]}),v.jsx(Hb,{children:t("errorTitle")}),v.jsx(qb,{children:t("errorMessage")}),v.jsx($b,{playing:a,onClick:()=>e("/"),children:t("errorBackToHome")}),r>=3&&v.jsxs(v.Fragment,{children:[v.jsx(Vb,{src:Db,alt:"Kanye",onClick:h}),v.jsx("audio",{ref:o,src:zb})]})]})},Ub=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,Hb=z.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,qb=z.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,$b=z.button`
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
`,Vb=z.img`
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
`,Wb=z.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,uc=z.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,Gb=({children:e})=>{const t=Eo(),{isAuthenticated:r,loading:n}=Ga();return j.useEffect(()=>{!n&&!r&&t("/login")},[r,n,t]),n?v.jsx("div",{children:"Loading..."}):r?e:null},Yb=()=>(j.useEffect(()=>{c5()},[]),null),zh=e=>{if(!e)return"";const r=(e.replace(/\/$/,"")||"/").split("/");return r.length>2&&(r[2]=r[2].toLowerCase()),r.join("/")},tu=()=>"https://posterfy.space"+"/",Xb=e=>{const t=tu(),r=zh(e),n=zh(t),o=e.includes("://www."),a=e.startsWith("http://");return o||a||r!==n},Zb=()=>{const e=window.location.href,t=tu(),r=[];return Xb(e)&&r.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:r.length===0,issues:r,currentUrl:e,canonicalUrl:t}},Jb=()=>(j.useEffect(()=>{setTimeout(()=>{const r=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&r.push("Missing canonical URL");const o=document.querySelector('meta[name="description"]');(!o||o.content.length<120)&&r.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&r.push("Title too short or missing");const a=Zb();a.isValid||a.issues.forEach(h=>{r.push(`${h.type}: ${h.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&r.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||r.push("Missing structured data"),r},1e3),(()=>{const r=window.location.href;r.includes("www.")||r.startsWith("http://")})()},[]),null),Qb=({title:e="Posterfy",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(j.useEffect(()=>{const o="https://posterfy.space",a=tu(),l=o+"/albuns.png";document.title=e;const c=document.querySelector('meta[name="description"]');c&&c.setAttribute("content",t);const h=document.querySelector('meta[name="keywords"]');h&&h.setAttribute("content",r);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",a):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",a),document.head.appendChild(f));const p=document.querySelector('meta[property="og:title"]');p&&p.setAttribute("content",e);const w=document.querySelector('meta[property="og:description"]');w&&w.setAttribute("content",t);const _=document.querySelector('meta[property="og:image"]');_&&_.setAttribute("content",l);const d=document.querySelector('meta[property="og:url"]');d&&d.setAttribute("content",a);const b=document.querySelector('meta[name="twitter:title"]');b&&b.setAttribute("content",e);const S=document.querySelector('meta[name="twitter:description"]');S&&S.setAttribute("content",t);const k=document.querySelector('meta[name="twitter:image"]');k&&k.setAttribute("content",l);const y={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:o+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},R=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');R&&R.remove();const I=document.createElement("script");I.type="application/ld+json",I.id="dynamic-structured-data",I.innerHTML=JSON.stringify(y),document.head.appendChild(I)},[e,t,r]),null);var Kb="1.3.14";function E2(e,t,r){return Math.max(e,Math.min(t,r))}function ex(e,t,r){return(1-r)*e+r*t}function tx(e,t,r,n){return ex(e,t,1-Math.exp(-r*n))}function rx(e,t){return(e%t+t)%t}var nx=class{constructor(){Ie(this,"isRunning",!1);Ie(this,"value",0);Ie(this,"from",0);Ie(this,"to",0);Ie(this,"currentTime",0);Ie(this,"lerp");Ie(this,"duration");Ie(this,"easing");Ie(this,"onUpdate")}advance(e){var r;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const n=E2(0,this.currentTime/this.duration,1);t=n>=1;const o=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=tx(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(r=this.onUpdate)==null||r.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:r,duration:n,easing:o,onStart:a,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=r,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=l}};function ix(e,t){let r;return function(...n){let o=this;clearTimeout(r),r=setTimeout(()=>{r=void 0,e.apply(o,n)},t)}}var ox=class{constructor(e,t,{autoResize:r=!0,debounce:n=250}={}){Ie(this,"width",0);Ie(this,"height",0);Ie(this,"scrollHeight",0);Ie(this,"scrollWidth",0);Ie(this,"debouncedResize");Ie(this,"wrapperResizeObserver");Ie(this,"contentResizeObserver");Ie(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ie(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ie(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,r&&(this.debouncedResize=ix(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},T2=class{constructor(){Ie(this,"events",{})}emit(e,...t){var n;let r=this.events[e]||[];for(let o=0,a=r.length;o<a;o++)(n=r[o])==null||n.call(r,...t)}on(e,t){var r;return(r=this.events[e])!=null&&r.push(t)||(this.events[e]=[t]),()=>{var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(o=>t!==o)}}off(e,t){var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(n=>t!==n)}destroy(){this.events={}}},Bh=100/6,Vi={passive:!1},ax=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){Ie(this,"touchStart",{x:0,y:0});Ie(this,"lastDelta",{x:0,y:0});Ie(this,"window",{width:0,height:0});Ie(this,"emitter",new T2);Ie(this,"onTouchStart",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ie(this,"onTouchMove",e=>{const{clientX:t,clientY:r}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=r,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});Ie(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ie(this,"onWheel",e=>{let{deltaX:t,deltaY:r,deltaMode:n}=e;const o=n===1?Bh:n===2?this.window.width:1,a=n===1?Bh:n===2?this.window.height:1;t*=o,r*=a,t*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:r,event:e})});Ie(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vi),this.element.addEventListener("touchstart",this.onTouchStart,Vi),this.element.addEventListener("touchmove",this.onTouchMove,Vi),this.element.addEventListener("touchend",this.onTouchEnd,Vi)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Vi),this.element.removeEventListener("touchstart",this.onTouchStart,Vi),this.element.removeEventListener("touchmove",this.onTouchMove,Vi),this.element.removeEventListener("touchend",this.onTouchEnd,Vi)}},Uh=e=>Math.min(1,1.001-Math.pow(2,-10*e)),sx=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:r=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:l=1.7,duration:c,easing:h,lerp:f=.1,infinite:p=!1,orientation:w="vertical",gestureOrientation:_=w==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:b=1,autoResize:S=!0,prevent:k,virtualScroll:y,overscroll:R=!0,autoRaf:I=!1,anchors:P=!1,autoToggle:Y=!1,allowNestedScroll:K=!1,__experimental__naiveDimensions:ne=!1}={}){Ie(this,"_isScrolling",!1);Ie(this,"_isStopped",!1);Ie(this,"_isLocked",!1);Ie(this,"_preventNextNativeScrollEvent",!1);Ie(this,"_resetVelocityTimeout",null);Ie(this,"__rafID",null);Ie(this,"isTouching");Ie(this,"time",0);Ie(this,"userData",{});Ie(this,"lastVelocity",0);Ie(this,"velocity",0);Ie(this,"direction",0);Ie(this,"options");Ie(this,"targetScroll");Ie(this,"animatedScroll");Ie(this,"animate",new nx);Ie(this,"emitter",new T2);Ie(this,"dimensions");Ie(this,"virtualScroll");Ie(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});Ie(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ie(this,"onTransitionEnd",e=>{if(e.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",r=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(r)?this.internalStop():this.internalStart()}});Ie(this,"onClick",e=>{const r=e.composedPath().find(n=>{var o;return n instanceof HTMLAnchorElement&&((o=n.getAttribute("href"))==null?void 0:o.includes("#"))});if(r){const n=r.getAttribute("href");if(n){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${n.split("#")[1]}`;this.scrollTo(a,o)}}});Ie(this,"onPointerDown",e=>{e.button===1&&this.reset()});Ie(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:r,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const o=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=t===0&&r===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const h=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&t===0;if(l||h)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const p=this.options.prevent;if(f.find(k=>{var y,R,I;return k instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(k))||((y=k.hasAttribute)==null?void 0:y.call(k,"data-lenis-prevent"))||o&&((R=k.hasAttribute)==null?void 0:R.call(k,"data-lenis-prevent-touch"))||a&&((I=k.hasAttribute)==null?void 0:I.call(k,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(k,{deltaX:t,deltaY:r}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let _=r;this.options.gestureOrientation==="both"?_=Math.abs(r)>Math.abs(t)?r:t:this.options.gestureOrientation==="horizontal"&&(_=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=o&&this.options.syncTouch,S=o&&n.type==="touchend";S&&(_=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+_,{programmatic:!1,...d?{lerp:S?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ie(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ie(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Kb,(!e||e===document.documentElement)&&(e=window),typeof c=="number"&&typeof h!="function"?h=Uh:typeof h=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:e,content:t,eventsTarget:r,smoothWheel:n,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:l,duration:c,easing:h,lerp:f,infinite:p,gestureOrientation:_,orientation:w,touchMultiplier:d,wheelMultiplier:b,autoResize:S,prevent:k,virtualScroll:y,overscroll:R,autoRaf:I,anchors:P,autoToggle:Y,allowNestedScroll:K,__experimental__naiveDimensions:ne},this.dimensions=new ox(e,t,{autoResize:S}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ax(r,{touchMultiplier:d,wheelMultiplier:b}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:r=!1,lock:n=!1,duration:o=this.options.duration,easing:a=this.options.easing,lerp:l=this.options.lerp,onStart:c,onComplete:h,force:f=!1,programmatic:p=!0,userData:w}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let _;if(typeof e=="string"?(_=document.querySelector(e),_||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(_=e),_){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?b.left:b.top}const d=_.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(p){this.targetScroll=this.animatedScroll=this.scroll;const _=e-this.animatedScroll;_>this.limit/2?e=e-this.limit:_<-this.limit/2&&(e=e+this.limit)}}else e=E2(0,e,this.limit);if(e===this.targetScroll){c==null||c(this),h==null||h(this);return}if(this.userData=w??{},r){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}p||(this.targetScroll=e),typeof o=="number"&&typeof a!="function"?a=Uh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:a,lerp:l,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(_,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),p&&(this.targetScroll=_),d||this.emit(),d&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:r}){const n=Date.now(),o=e._lenis??(e._lenis={});let a,l,c,h,f,p,w,_;const d=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();const Y=window.getComputedStyle(e);o.computedStyle=Y;const K=Y.overflowX,ne=Y.overflowY;if(a=["auto","overlay","scroll"].includes(K),l=["auto","overlay","scroll"].includes(ne),o.hasOverflowX=a,o.hasOverflowY=l,!a&&!l||d==="vertical"&&!l||d==="horizontal"&&!a)return!1;f=e.scrollWidth,p=e.scrollHeight,w=e.clientWidth,_=e.clientHeight,c=f>w,h=p>_,o.isScrollableX=c,o.isScrollableY=h,o.scrollWidth=f,o.scrollHeight=p,o.clientWidth=w,o.clientHeight=_}else c=o.isScrollableX,h=o.isScrollableY,a=o.hasOverflowX,l=o.hasOverflowY,f=o.scrollWidth,p=o.scrollHeight,w=o.clientWidth,_=o.clientHeight;if(!a&&!l||!c&&!h||d==="vertical"&&(!l||!h)||d==="horizontal"&&(!a||!c))return!1;let b;if(d==="horizontal")b="x";else if(d==="vertical")b="y";else{const Y=t!==0,K=r!==0;Y&&a&&c&&(b="x"),K&&l&&h&&(b="y")}if(!b)return!1;let S,k,y,R,I;if(b==="x")S=e.scrollLeft,k=f-w,y=t,R=a,I=c;else if(b==="y")S=e.scrollTop,k=p-_,y=r,R=l,I=h;else return!1;return(y>0?S<k:S>0)&&R&&I}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?rx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function lx(){const{pathname:e}=wi(),[t,r]=j.useState(!1),[n,o]=j.useState(!1);return j.useEffect(()=>{r(!0),o(!0),window.scrollTo(0,0);const a=setTimeout(()=>{r(!1),setTimeout(()=>{o(!1)},300)},2e3);return()=>clearTimeout(a)},[e]),n?v.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:v.jsx(Oc,{isVisible:!0})}):null}function cx(){const[e,t]=j.useState(!0),[r,n]=j.useState(!1);return m5(),j.useEffect(()=>{const o=new sx({duration:1.2,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function a(l){o.raf(l),requestAnimationFrame(a)}return requestAnimationFrame(a),()=>{o.destroy()}},[]),j.useEffect(()=>r5(),[]),j.useEffect(()=>{const o=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},2e3);return()=>clearTimeout(o)},[]),j.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),v.jsx(n5,{children:v.jsx(M5,{children:v.jsxs(B5,{children:[v.jsx(Qb,{}),v.jsx(Jb,{}),v.jsx(Yb,{}),v.jsxs(qd,{children:[v.jsx(lx,{}),v.jsxs(xd,{children:[v.jsx(Wi,{path:"/",element:v.jsx(Fl,{showNavbar:!0,showFooter:!0}),children:v.jsx(Wi,{index:!0,element:v.jsx(V8,{loadingComplete:r})})}),v.jsx(Wi,{path:"/login",element:v.jsx(Fl,{showNavbar:!1,showFooter:!1}),children:v.jsx(Wi,{index:!0,element:v.jsx(rb,{})})}),v.jsx(Wi,{path:"/dashboard",element:v.jsx(Fl,{showNavbar:!0,showFooter:!0}),children:v.jsx(Wi,{index:!0,element:v.jsx(Gb,{children:v.jsx(Mb,{})})})}),v.jsx(Wi,{path:"*",element:v.jsx(Bb,{})})]})]}),v.jsx(Oc,{isVisible:e})]})})})}xf.use(wf).init({resources:{en:{translation:{heroDescription:"Transform your music passion into visual art by creating custom posters for your favorite albums.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with love by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",FAQ_ExportHighRes_Question:"How can I export the poster in high resolution?",FAQ_ExportHighRes_Answer:"After customizing, you can export the poster in high resolution as PNG or PDF by clicking the buttons next to 'Apply'.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_ExportTab:"Export",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EXPORT_Format:"Format",EXPORT_Size:"Size",EXPORT_SizeThumbnail:"Thumbnail",EXPORT_SizeMedium:"Medium",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"For best print quality, use Normal size (A4)",EXPORT_DownloadButton:"Download",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",COVER_EDITOR_Size:"Size",COVER_EDITOR_Blur:"Blur",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Cover editor",EDITOR_EditCover:"Edit cover",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Music and design.",LOGIN_JoinCommunity:"Join us and create amazing posters.",Logout:"Logout",EditProfile:"Edit profile",ConnectedToGoogle:"Connected to Google",ConnectedToSpotify:"Connected to Spotify",NoActivityYet:"No activity yet",Name:"Name",Username:"Username",EnterYourName:"Enter your name",EnterYourUsername:"Enter your username",NameIsRequired:"Name is required",UsernameIsRequired:"Username is required",UsernameMinLength:"Username must be at least 3 characters",UsernameFormat:"Username can only contain letters and numbers",UsernameTaken:"Username already taken",InvalidUsernameFormat:"Invalid username format",FailedToUpdateProfile:"Failed to update profile. Please try again.",ProfileUpdatedSuccessfully:"Profile updated successfully!",Cancel:"Cancel",SaveChanges:"Save Changes",Saving:"Saving...",FooterDescription:"Create stunning album posters from your favorite music. Free, fast, and beautiful.",ViewGitHub:"View on GitHub",JoinDiscord:"Join Discord",SwitchTo:"Switch to",FooterPrivacy:"Privacy Policy",FooterTerms:"Terms of Service",FooterCookies:"Cookies"}},pt:{translation:{heroDescription:"Transforme sua paixão por música em arte visual criando pôsteres personalizados dos seus álbuns favoritos.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com amor por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",FAQ_ExportHighRes_Question:"Como posso exportar o pôster em alta resolução?",FAQ_ExportHighRes_Answer:"Após personalizar, é possível exportar o pôster em alta resolução em PNG ou em PDF, clicando nos botões ao lado de 'Aplicar'.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_ExportTab:"Exportação",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EXPORT_Format:"Formato",EXPORT_Size:"Tamanho",EXPORT_SizeThumbnail:"Miniatura",EXPORT_SizeMedium:"Médio",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"Para melhor qualidade de impressão, use tamanho Normal (A4)",EXPORT_DownloadButton:"Baixar",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",COVER_EDITOR_Size:"Tamanho",COVER_EDITOR_Blur:"Desfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de capa",EDITOR_EditCover:"Editar capa",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Música e design.",LOGIN_JoinCommunity:"Junte-se e crie pôsteres incríveis.",Logout:"Sair",EditProfile:"Editar Perfil",ConnectedToGoogle:"Conectado ao Google",ConnectedToSpotify:"Conectado ao Spotify",NoActivityYet:"Nenhuma atividade ainda",Name:"Nome",Username:"Nome de usuário",EnterYourName:"Digite seu nome",EnterYourUsername:"Digite seu nome de usuário",NameIsRequired:"Nome é obrigatório",UsernameIsRequired:"Nome de usuário é obrigatório",UsernameMinLength:"Nome de usuário deve ter pelo menos 3 caracteres",UsernameFormat:"Nome de usuário pode conter apenas letras e números",UsernameTaken:"Nome de usuário já está em uso",InvalidUsernameFormat:"Formato de nome de usuário inválido",FailedToUpdateProfile:"Falha ao atualizar perfil. Tente novamente.",ProfileUpdatedSuccessfully:"Perfil atualizado com sucesso!",Cancel:"Cancelar",SaveChanges:"Salvar Alterações",Saving:"Salvando...",FooterDescription:"Crie pôsteres incríveis de álbuns da sua música favorita. Grátis, rápido e bonito.",ViewGitHub:"Ver no GitHub",JoinDiscord:"Entrar no Discord",SwitchTo:"Mudar para",FooterPrivacy:"Política de Privacidade",FooterTerms:"Termos de Serviço",FooterCookies:"Cookies"}},es:{translation:{heroDescription:"Transforma tu pasión por la música en arte visual creando pósters personalizados de tus álbumes favoritos.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con amor por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",FAQ_ExportHighRes_Question:"¿Cómo puedo exportar el póster en alta resolución?",FAQ_ExportHighRes_Answer:"Después de personalizar, puedes exportar el póster en alta resolución en PNG o PDF haciendo clic en los botones junto a 'Aplicar'.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_ExportTab:"Exportación",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EXPORT_Format:"Formato",EXPORT_Size:"Tamaño",EXPORT_SizeThumbnail:"Miniatura",EXPORT_SizeMedium:"Mediano",EXPORT_SizeNormal:"Normal",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"Para mejor calidad de impresión, use tamaño Normal (A4)",EXPORT_DownloadButton:"Descargar",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",COVER_EDITOR_Size:"Tamaño",COVER_EDITOR_Blur:"Desenfoque",COVER_EDITOR_HorizontalPosition:"Horizontal",COVER_EDITOR_VerticalPosition:"Vertical",EDITOR_CoverEditor:"Editor de portada",EDITOR_EditCover:"Editar portada",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"Música y diseño.",LOGIN_JoinCommunity:"Únete y crea carteles increíbles.",Logout:"Cerrar sesión",EditProfile:"Editar perfil",ConnectedToGoogle:"Conectado a Google",ConnectedToSpotify:"Conectado a Spotify",NoActivityYet:"Aún no hay actividad",Name:"Nombre",Username:"Nombre de usuario",EnterYourName:"Ingresa tu nombre",EnterYourUsername:"Ingresa tu nombre de usuario",NameIsRequired:"El nombre es obligatorio",UsernameIsRequired:"El nombre de usuario es obligatorio",UsernameMinLength:"El nombre de usuario debe tener al menos 3 caracteres",UsernameFormat:"El nombre de usuario solo puede contener letras y números",UsernameTaken:"Nombre de usuario ya tomado",InvalidUsernameFormat:"Formato de nombre de usuario inválido",FailedToUpdateProfile:"Error al actualizar el perfil. Por favor, inténtalo de nuevo.",ProfileUpdatedSuccessfully:"¡Perfil actualizado exitosamente!",Cancel:"Cancelar",SaveChanges:"Guardar Cambios",Saving:"Guardando...",FooterDescription:"Crea increíbles pósters de álbumes de tu música favorita. Gratis, rápido y hermoso.",ViewGitHub:"Ver en GitHub",JoinDiscord:"Unirse a Discord",SwitchTo:"Cambiar a",FooterPrivacy:"Política de Privacidad",FooterTerms:"Términos de Servicio",FooterCookies:"Cookies"}},zh:{translation:{heroDescription:"将您的音乐热情转化为视觉艺术，为您最喜爱的专辑制作定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用爱制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",FAQ_ExportHighRes_Question:"如何导出高分辨率海报？",FAQ_ExportHighRes_Answer:"自定义后，您可以通过点击'应用'旁边的按钮以PNG或PDF格式导出高分辨率海报。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_ExportTab:"导出",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EXPORT_Format:"格式",EXPORT_Size:"尺寸",EXPORT_SizeThumbnail:"缩略图",EXPORT_SizeMedium:"中等",EXPORT_SizeNormal:"正常",EXPORT_SizeDescription_Thumbnail:"744 × 1052px",EXPORT_SizeDescription_Medium:"~1488 × 2105px (A5)",EXPORT_SizeDescription_Normal:"2480 × 3508px (A4)",EXPORT_PrintTip:"为获得最佳打印质量，请使用正常尺寸 (A4)",EXPORT_DownloadButton:"下载",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",COVER_EDITOR_Size:"大小",COVER_EDITOR_Blur:"模糊",COVER_EDITOR_HorizontalPosition:"水平",COVER_EDITOR_VerticalPosition:"垂直",EDITOR_CoverEditor:"封面编辑器",EDITOR_EditCover:"编辑封面",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中...",FooterDescription:"从您最喜欢的音乐创建令人惊叹的专辑海报。免费、快速、美观。",ViewGitHub:"在 GitHub 上查看",JoinDiscord:"加入 Discord",SwitchTo:"切换到",FooterPrivacy:"隐私政策",FooterTerms:"服务条款",FooterCookies:"Cookies"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const r=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(r)?r:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});$h(document.getElementById("root")).render(v.jsx(j.StrictMode,{children:v.jsx(cx,{})}));export{Pt as _};
