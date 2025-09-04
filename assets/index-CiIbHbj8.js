import{r as d,a as Q2,e as U,c as J2}from"./vendor-C_1HgqiI.js";import{m as q,d as u,G as $,l as Gt}from"./ui-DJvbdRdB.js";import{u as B,i as K2,a as X2}from"./i18n-yS3FBAcD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();var E0={exports:{}},a1={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=d,ta=Symbol.for("react.element"),aa=Symbol.for("react.fragment"),oa=Object.prototype.hasOwnProperty,ra=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,na={key:!0,ref:!0,__self:!0,__source:!0};function R0(e,a,o){var r,n={},s=null,l=null;o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(l=a.ref);for(r in a)oa.call(a,r)&&!na.hasOwnProperty(r)&&(n[r]=a[r]);if(e&&e.defaultProps)for(r in a=e.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:ta,type:e,key:s,ref:l,props:n,_owner:ra.current}}a1.Fragment=aa;a1.jsx=R0;a1.jsxs=R0;E0.exports=a1;var t=E0.exports,S0,Yt=Q2;S0=Yt.createRoot,Yt.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ut="popstate";function ia(e={}){function a(r,n){let{pathname:s,search:l,hash:h}=r.location;return N1("",{pathname:s,search:l,hash:h},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function o(r,n){return typeof n=="string"?n:_e(n)}return la(a,o,null,e)}function N(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function K(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function sa(){return Math.random().toString(36).substring(2,10)}function qt(e,a){return{usr:e.state,key:e.key,idx:a}}function N1(e,a,o=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?xe(a):a,state:o,key:a&&a.key||r||sa()}}function _e({pathname:e="/",search:a="",hash:o=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function xe(e){let a={};if(e){let o=e.indexOf("#");o>=0&&(a.hash=e.substring(o),e=e.substring(0,o));let r=e.indexOf("?");r>=0&&(a.search=e.substring(r),e=e.substring(0,r)),e&&(a.pathname=e)}return a}function la(e,a,o,r={}){let{window:n=document.defaultView,v5Compat:s=!1}=r,l=n.history,h="POP",c=null,p=m();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function m(){return(l.state||{idx:null}).idx}function v(){h="POP";let C=m(),w=C==null?null:C-p;p=C,c&&c({action:h,location:b.location,delta:w})}function S(C,w){h="PUSH";let y=N1(b.location,C,w);p=m()+1;let g=qt(y,p),E=b.createHref(y);try{l.pushState(g,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;n.location.assign(E)}s&&c&&c({action:h,location:b.location,delta:1})}function x(C,w){h="REPLACE";let y=N1(b.location,C,w);p=m();let g=qt(y,p),E=b.createHref(y);l.replaceState(g,"",E),s&&c&&c({action:h,location:b.location,delta:0})}function f(C){return ca(C)}let b={get action(){return h},get location(){return e(n,l)},listen(C){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener(Ut,v),c=C,()=>{n.removeEventListener(Ut,v),c=null}},createHref(C){return a(n,C)},createURL:f,encodeLocation(C){let w=f(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:x,go(C){return l.go(C)}};return b}function ca(e,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),N(o,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:_e(e);return r=r.replace(/ $/,"%20"),!a&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function M0(e,a,o="/"){return da(e,a,o,!1)}function da(e,a,o,r){let n=typeof a=="string"?xe(a):a,s=ne(n.pathname||"/",o);if(s==null)return null;let l=k0(e);ua(l);let h=null;for(let c=0;h==null&&c<l.length;++c){let p=ya(s);h=Ca(l[c],p,r)}return h}function k0(e,a=[],o=[],r="",n=!1){let s=(l,h,c=n,p)=>{let m={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(r)&&c)return;N(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length)}let v=re([r,m.relativePath]),S=o.concat(m);l.children&&l.children.length>0&&(N(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),k0(l.children,a,S,v,c)),!(l.path==null&&!l.index)&&a.push({path:v,score:va(v,l.index),routesMeta:S})};return e.forEach((l,h)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,h);else for(let p of _0(l.path))s(l,h,!0,p)}),a}function _0(e){let a=e.split("/");if(a.length===0)return[];let[o,...r]=a,n=o.endsWith("?"),s=o.replace(/\?$/,"");if(r.length===0)return n?[s,""]:[s];let l=_0(r.join("/")),h=[];return h.push(...l.map(c=>c===""?s:[s,c].join("/"))),n&&h.push(...l),h.map(c=>e.startsWith("/")&&c===""?"/":c)}function ua(e){e.sort((a,o)=>a.score!==o.score?o.score-a.score:wa(a.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var ha=/^:[\w-]+$/,pa=3,fa=2,ma=1,ga=10,xa=-2,Wt=e=>e==="*";function va(e,a){let o=e.split("/"),r=o.length;return o.some(Wt)&&(r+=xa),a&&(r+=fa),o.filter(n=>!Wt(n)).reduce((n,s)=>n+(ha.test(s)?pa:s===""?ma:ga),r)}function wa(e,a){return e.length===a.length&&e.slice(0,-1).every((r,n)=>r===a[n])?e[e.length-1]-a[a.length-1]:0}function Ca(e,a,o=!1){let{routesMeta:r}=e,n={},s="/",l=[];for(let h=0;h<r.length;++h){let c=r[h],p=h===r.length-1,m=s==="/"?a:a.slice(s.length)||"/",v=e1({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},m),S=c.route;if(!v&&p&&o&&!r[r.length-1].route.index&&(v=e1({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!v)return null;Object.assign(n,v.params),l.push({params:n,pathname:re([s,v.pathname]),pathnameBase:Sa(re([s,v.pathnameBase])),route:S}),v.pathnameBase!=="/"&&(s=re([s,v.pathnameBase]))}return l}function e1(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,r]=ba(e.path,e.caseSensitive,e.end),n=a.match(o);if(!n)return null;let s=n[0],l=s.replace(/(.)\/+$/,"$1"),h=n.slice(1);return{params:r.reduce((p,{paramName:m,isOptional:v},S)=>{if(m==="*"){let f=h[S]||"";l=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}const x=h[S];return v&&!x?p[m]=void 0:p[m]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:l,pattern:e}}function ba(e,a=!1,o=!0){K(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,h,c)=>(r.push({paramName:h,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,a?void 0:"i"),r]}function ya(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return K(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function ne(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,r=e.charAt(o);return r&&r!=="/"?null:e.slice(o)||"/"}function ja(e,a="/"){let{pathname:o,search:r="",hash:n=""}=typeof e=="string"?xe(e):e;return{pathname:o?o.startsWith("/")?o:Ea(o,a):a,search:Ma(r),hash:ka(n)}}function Ea(e,a){let o=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?o.length>1&&o.pop():n!=="."&&o.push(n)}),o.length>1?o.join("/"):"/"}function T1(e,a,o,r){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ra(e){return e.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function T0(e){let a=Ra(e);return a.map((o,r)=>r===a.length-1?o.pathname:o.pathnameBase)}function I0(e,a,o,r=!1){let n;typeof e=="string"?n=xe(e):(n={...e},N(!n.pathname||!n.pathname.includes("?"),T1("?","pathname","search",n)),N(!n.pathname||!n.pathname.includes("#"),T1("#","pathname","hash",n)),N(!n.search||!n.search.includes("#"),T1("#","search","hash",n)));let s=e===""||n.pathname==="",l=s?"/":n.pathname,h;if(l==null)h=o;else{let v=a.length-1;if(!r&&l.startsWith("..")){let S=l.split("/");for(;S[0]==="..";)S.shift(),v-=1;n.pathname=S.join("/")}h=v>=0?a[v]:"/"}let c=ja(n,h),p=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(p||m)&&(c.pathname+="/"),c}var re=e=>e.join("/").replace(/\/\/+/g,"/"),Sa=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ma=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ka=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _a(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var O0=["POST","PUT","PATCH","DELETE"];new Set(O0);var Ta=["GET",...O0];new Set(Ta);var ve=d.createContext(null);ve.displayName="DataRouter";var o1=d.createContext(null);o1.displayName="DataRouterState";d.createContext(!1);var L0=d.createContext({isTransitioning:!1});L0.displayName="ViewTransition";var Ia=d.createContext(new Map);Ia.displayName="Fetchers";var Oa=d.createContext(null);Oa.displayName="Await";var X=d.createContext(null);X.displayName="Navigation";var Ie=d.createContext(null);Ie.displayName="Location";var ee=d.createContext({outlet:null,matches:[],isDataRoute:!1});ee.displayName="Route";var Z1=d.createContext(null);Z1.displayName="RouteError";function La(e,{relative:a}={}){N(Oe(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=d.useContext(X),{hash:n,pathname:s,search:l}=Le(e,{relative:a}),h=s;return o!=="/"&&(h=s==="/"?o:re([o,s])),r.createHref({pathname:h,search:l,hash:n})}function Oe(){return d.useContext(Ie)!=null}function de(){return N(Oe(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ie).location}var z0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function A0(e){d.useContext(X).static||d.useLayoutEffect(e)}function r1(){let{isDataRoute:e}=d.useContext(ee);return e?Wa():za()}function za(){N(Oe(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(ve),{basename:a,navigator:o}=d.useContext(X),{matches:r}=d.useContext(ee),{pathname:n}=de(),s=JSON.stringify(T0(r)),l=d.useRef(!1);return A0(()=>{l.current=!0}),d.useCallback((c,p={})=>{if(K(l.current,z0),!l.current)return;if(typeof c=="number"){o.go(c);return}let m=I0(c,JSON.parse(s),n,p.relative==="path");e==null&&a!=="/"&&(m.pathname=m.pathname==="/"?a:re([a,m.pathname])),(p.replace?o.replace:o.push)(m,p.state,p)},[a,o,s,n,e])}var Aa=d.createContext(null);function Va(e){let a=d.useContext(ee).outlet;return a&&d.createElement(Aa.Provider,{value:e},a)}function Le(e,{relative:a}={}){let{matches:o}=d.useContext(ee),{pathname:r}=de(),n=JSON.stringify(T0(o));return d.useMemo(()=>I0(e,JSON.parse(n),r,a==="path"),[e,n,r,a])}function Pa(e,a){return V0(e,a)}function V0(e,a,o,r,n){var y;N(Oe(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=d.useContext(X),{matches:l}=d.useContext(ee),h=l[l.length-1],c=h?h.params:{},p=h?h.pathname:"/",m=h?h.pathnameBase:"/",v=h&&h.route;{let g=v&&v.path||"";P0(p,!v||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let S=de(),x;if(a){let g=typeof a=="string"?xe(a):a;N(m==="/"||((y=g.pathname)==null?void 0:y.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${g.pathname}" was given in the \`location\` prop.`),x=g}else x=S;let f=x.pathname||"/",b=f;if(m!=="/"){let g=m.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(g.length).join("/")}let C=M0(e,{pathname:b});K(v||C!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),K(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=Na(C&&C.map(g=>Object.assign({},g,{params:Object.assign({},c,g.params),pathname:re([m,s.encodeLocation?s.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?m:re([m,s.encodeLocation?s.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),l,o,r,n);return a&&w?d.createElement(Ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},w):w}function $a(){let e=qa(),a=_a(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:s},"ErrorBoundary")," or"," ",d.createElement("code",{style:s},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},a),o?d.createElement("pre",{style:n},o):null,l)}var Ha=d.createElement($a,null),Da=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.unstable_onError?this.props.unstable_onError(e,a):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?d.createElement(ee.Provider,{value:this.props.routeContext},d.createElement(Z1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Fa({routeContext:e,match:a,children:o}){let r=d.useContext(ve);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),d.createElement(ee.Provider,{value:e},o)}function Na(e,a=[],o=null,r=null,n=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,l=o==null?void 0:o.errors;if(l!=null){let p=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);N(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let h=!1,c=-1;if(o)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:v,errors:S}=o,x=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!S||S[m.route.id]===void 0);if(m.route.lazy||x){h=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,m,v)=>{let S,x=!1,f=null,b=null;o&&(S=l&&m.route.id?l[m.route.id]:void 0,f=m.route.errorElement||Ha,h&&(c<0&&v===0?(P0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,b=null):c===v&&(x=!0,b=m.route.hydrateFallbackElement||null)));let C=a.concat(s.slice(0,v+1)),w=()=>{let y;return S?y=f:x?y=b:m.route.Component?y=d.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=p,d.createElement(Fa,{match:m,routeContext:{outlet:p,matches:C,isDataRoute:o!=null},children:y})};return o&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?d.createElement(Da,{location:o.location,revalidation:o.revalidation,component:f,error:S,children:w(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:r}):w()},null)}function Q1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ba(e){let a=d.useContext(ve);return N(a,Q1(e)),a}function Ga(e){let a=d.useContext(o1);return N(a,Q1(e)),a}function Ya(e){let a=d.useContext(ee);return N(a,Q1(e)),a}function J1(e){let a=Ya(e),o=a.matches[a.matches.length-1];return N(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function Ua(){return J1("useRouteId")}function qa(){var r;let e=d.useContext(Z1),a=Ga("useRouteError"),o=J1("useRouteError");return e!==void 0?e:(r=a.errors)==null?void 0:r[o]}function Wa(){let{router:e}=Ba("useNavigate"),a=J1("useNavigate"),o=d.useRef(!1);return A0(()=>{o.current=!0}),d.useCallback(async(n,s={})=>{K(o.current,z0),o.current&&(typeof n=="number"?e.navigate(n):await e.navigate(n,{fromRouteId:a,...s}))},[e,a])}var Zt={};function P0(e,a,o){!a&&!Zt[e]&&(Zt[e]=!0,K(!1,o))}d.memo(Za);function Za({routes:e,future:a,state:o,unstable_onError:r}){return V0(e,void 0,o,r,a)}function Qa(e){return Va(e.context)}function se(e){N(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ja({basename:e="/",children:a=null,location:o,navigationType:r="POP",navigator:n,static:s=!1}){N(!Oe(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),h=d.useMemo(()=>({basename:l,navigator:n,static:s,future:{}}),[l,n,s]);typeof o=="string"&&(o=xe(o));let{pathname:c="/",search:p="",hash:m="",state:v=null,key:S="default"}=o,x=d.useMemo(()=>{let f=ne(c,l);return f==null?null:{location:{pathname:f,search:p,hash:m,state:v,key:S},navigationType:r}},[l,c,p,m,v,S,r]);return K(x!=null,`<Router basename="${l}"> is not able to match the URL "${c}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:d.createElement(X.Provider,{value:h},d.createElement(Ie.Provider,{children:a,value:x}))}function Ka({children:e,location:a}){return Pa(B1(e),a)}function B1(e,a=[]){let o=[];return d.Children.forEach(e,(r,n)=>{if(!d.isValidElement(r))return;let s=[...a,n];if(r.type===d.Fragment){o.push.apply(o,B1(r.props.children,s));return}N(r.type===se,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),N(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=B1(r.props.children,s)),o.push(l)}),o}var Ke="get",Xe="application/x-www-form-urlencoded";function n1(e){return e!=null&&typeof e.tagName=="string"}function Xa(e){return n1(e)&&e.tagName.toLowerCase()==="button"}function eo(e){return n1(e)&&e.tagName.toLowerCase()==="form"}function to(e){return n1(e)&&e.tagName.toLowerCase()==="input"}function ao(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oo(e,a){return e.button===0&&(!a||a==="_self")&&!ao(e)}var He=null;function ro(){if(He===null)try{new FormData(document.createElement("form"),0),He=!1}catch{He=!0}return He}var no=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function I1(e){return e!=null&&!no.has(e)?(K(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xe}"`),null):e}function io(e,a){let o,r,n,s,l;if(eo(e)){let h=e.getAttribute("action");r=h?ne(h,a):null,o=e.getAttribute("method")||Ke,n=I1(e.getAttribute("enctype"))||Xe,s=new FormData(e)}else if(Xa(e)||to(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||h.getAttribute("action");if(r=c?ne(c,a):null,o=e.getAttribute("formmethod")||h.getAttribute("method")||Ke,n=I1(e.getAttribute("formenctype"))||I1(h.getAttribute("enctype"))||Xe,s=new FormData(h,e),!ro()){let{name:p,type:m,value:v}=e;if(m==="image"){let S=p?`${p}.`:"";s.append(`${S}x`,"0"),s.append(`${S}y`,"0")}else p&&s.append(p,v)}}else{if(n1(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ke,r=null,n=Xe,l=e}return s&&n==="text/plain"&&(l=s,s=void 0),{action:r,method:o.toLowerCase(),encType:n,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function K1(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function so(e,a,o){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${o}`:a&&ne(r.pathname,a)==="/"?r.pathname=`${a.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function lo(e,a){if(e.id in a)return a[e.id];try{let o=await import(e.module);return a[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function co(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function uo(e,a,o){let r=await Promise.all(e.map(async n=>{let s=a.routes[n.route.id];if(s){let l=await lo(s,o);return l.links?l.links():[]}return[]}));return mo(r.flat(1).filter(co).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function Qt(e,a,o,r,n,s){let l=(c,p)=>o[p]?c.route.id!==o[p].route.id:!0,h=(c,p)=>{var m;return o[p].pathname!==c.pathname||((m=o[p].route.path)==null?void 0:m.endsWith("*"))&&o[p].params["*"]!==c.params["*"]};return s==="assets"?a.filter((c,p)=>l(c,p)||h(c,p)):s==="data"?a.filter((c,p)=>{var v;let m=r.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,p)||h(c,p))return!0;if(c.route.shouldRevalidate){let S=c.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((v=o[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function ho(e,a,{includeHydrateFallback:o}={}){return po(e.map(r=>{let n=a.routes[r.route.id];if(!n)return[];let s=[n.module];return n.clientActionModule&&(s=s.concat(n.clientActionModule)),n.clientLoaderModule&&(s=s.concat(n.clientLoaderModule)),o&&n.hydrateFallbackModule&&(s=s.concat(n.hydrateFallbackModule)),n.imports&&(s=s.concat(n.imports)),s}).flat(1))}function po(e){return[...new Set(e)]}function fo(e){let a={},o=Object.keys(e).sort();for(let r of o)a[r]=e[r];return a}function mo(e,a){let o=new Set;return new Set(a),e.reduce((r,n)=>{let s=JSON.stringify(fo(n));return o.has(s)||(o.add(s),r.push({key:s,link:n})),r},[])}function $0(){let e=d.useContext(ve);return K1(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function go(){let e=d.useContext(o1);return K1(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var X1=d.createContext(void 0);X1.displayName="FrameworkContext";function H0(){let e=d.useContext(X1);return K1(e,"You must render this element inside a <HydratedRouter> element"),e}function xo(e,a){let o=d.useContext(X1),[r,n]=d.useState(!1),[s,l]=d.useState(!1),{onFocus:h,onBlur:c,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=a,S=d.useRef(null);d.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let b=w=>{w.forEach(y=>{l(y.isIntersecting)})},C=new IntersectionObserver(b,{threshold:.5});return S.current&&C.observe(S.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(r){let b=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(b)}}},[r]);let x=()=>{n(!0)},f=()=>{n(!1),l(!1)};return o?e!=="intent"?[s,S,{}]:[s,S,{onFocus:je(h,x),onBlur:je(c,f),onMouseEnter:je(p,x),onMouseLeave:je(m,f),onTouchStart:je(v,x)}]:[!1,S,{}]}function je(e,a){return o=>{e&&e(o),o.defaultPrevented||a(o)}}function vo({page:e,...a}){let{router:o}=$0(),r=d.useMemo(()=>M0(o.routes,e,o.basename),[o.routes,e,o.basename]);return r?d.createElement(Co,{page:e,matches:r,...a}):null}function wo(e){let{manifest:a,routeModules:o}=H0(),[r,n]=d.useState([]);return d.useEffect(()=>{let s=!1;return uo(e,a,o).then(l=>{s||n(l)}),()=>{s=!0}},[e,a,o]),r}function Co({page:e,matches:a,...o}){let r=de(),{manifest:n,routeModules:s}=H0(),{basename:l}=$0(),{loaderData:h,matches:c}=go(),p=d.useMemo(()=>Qt(e,a,c,n,r,"data"),[e,a,c,n,r]),m=d.useMemo(()=>Qt(e,a,c,n,r,"assets"),[e,a,c,n,r]),v=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let f=new Set,b=!1;if(a.forEach(w=>{var g;let y=n.routes[w.route.id];!y||!y.hasLoader||(!p.some(E=>E.route.id===w.route.id)&&w.route.id in h&&((g=s[w.route.id])!=null&&g.shouldRevalidate)||y.hasClientLoader?b=!0:f.add(w.route.id))}),f.size===0)return[];let C=so(e,l,"data");return b&&f.size>0&&C.searchParams.set("_routes",a.filter(w=>f.has(w.route.id)).map(w=>w.route.id).join(",")),[C.pathname+C.search]},[l,h,r,n,p,a,e,s]),S=d.useMemo(()=>ho(m,n),[m,n]),x=wo(m);return d.createElement(d.Fragment,null,v.map(f=>d.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})),S.map(f=>d.createElement("link",{key:f,rel:"modulepreload",href:f,...o})),x.map(({key:f,link:b})=>d.createElement("link",{key:f,nonce:o.nonce,...b})))}function bo(...e){return a=>{e.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var D0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{D0&&(window.__reactRouterVersion="7.8.2")}catch{}function yo({basename:e,children:a,window:o}){let r=d.useRef();r.current==null&&(r.current=ia({window:o,v5Compat:!0}));let n=r.current,[s,l]=d.useState({action:n.action,location:n.location}),h=d.useCallback(c=>{d.startTransition(()=>l(c))},[l]);return d.useLayoutEffect(()=>n.listen(h),[n,h]),d.createElement(Ja,{basename:e,children:a,location:s.location,navigationType:s.action,navigator:n})}var F0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N0=d.forwardRef(function({onClick:a,discover:o="render",prefetch:r="none",relative:n,reloadDocument:s,replace:l,state:h,target:c,to:p,preventScrollReset:m,viewTransition:v,...S},x){let{basename:f}=d.useContext(X),b=typeof p=="string"&&F0.test(p),C,w=!1;if(typeof p=="string"&&b&&(C=p,D0))try{let I=new URL(window.location.href),_=p.startsWith("//")?new URL(I.protocol+p):new URL(p),L=ne(_.pathname,f);_.origin===I.origin&&L!=null?p=L+_.search+_.hash:w=!0}catch{K(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=La(p,{relative:n}),[g,E,R]=xo(r,S),k=So(p,{replace:l,state:h,target:c,preventScrollReset:m,relative:n,viewTransition:v});function M(I){a&&a(I),I.defaultPrevented||k(I)}let T=d.createElement("a",{...S,...R,href:C||y,onClick:w||s?a:M,ref:bo(x,E),target:c,"data-discover":!b&&o==="render"?"true":void 0});return g&&!b?d.createElement(d.Fragment,null,T,d.createElement(vo,{page:y})):T});N0.displayName="Link";var jo=d.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:r="",end:n=!1,style:s,to:l,viewTransition:h,children:c,...p},m){let v=Le(l,{relative:p.relative}),S=de(),x=d.useContext(o1),{navigator:f,basename:b}=d.useContext(X),C=x!=null&&Io(v)&&h===!0,w=f.encodeLocation?f.encodeLocation(v).pathname:v.pathname,y=S.pathname,g=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;o||(y=y.toLowerCase(),g=g?g.toLowerCase():null,w=w.toLowerCase()),g&&b&&(g=ne(g,b)||g);const E=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let R=y===w||!n&&y.startsWith(w)&&y.charAt(E)==="/",k=g!=null&&(g===w||!n&&g.startsWith(w)&&g.charAt(w.length)==="/"),M={isActive:R,isPending:k,isTransitioning:C},T=R?a:void 0,I;typeof r=="function"?I=r(M):I=[r,R?"active":null,k?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let _=typeof s=="function"?s(M):s;return d.createElement(N0,{...p,"aria-current":T,className:I,ref:m,style:_,to:l,viewTransition:h},typeof c=="function"?c(M):c)});jo.displayName="NavLink";var Eo=d.forwardRef(({discover:e="render",fetcherKey:a,navigate:o,reloadDocument:r,replace:n,state:s,method:l=Ke,action:h,onSubmit:c,relative:p,preventScrollReset:m,viewTransition:v,...S},x)=>{let f=_o(),b=To(h,{relative:p}),C=l.toLowerCase()==="get"?"get":"post",w=typeof h=="string"&&F0.test(h),y=g=>{if(c&&c(g),g.defaultPrevented)return;g.preventDefault();let E=g.nativeEvent.submitter,R=(E==null?void 0:E.getAttribute("formmethod"))||l;f(E||g.currentTarget,{fetcherKey:a,method:R,navigate:o,replace:n,state:s,relative:p,preventScrollReset:m,viewTransition:v})};return d.createElement("form",{ref:x,method:C,action:b,onSubmit:r?c:y,...S,"data-discover":!w&&e==="render"?"true":void 0})});Eo.displayName="Form";function Ro(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function B0(e){let a=d.useContext(ve);return N(a,Ro(e)),a}function So(e,{target:a,replace:o,state:r,preventScrollReset:n,relative:s,viewTransition:l}={}){let h=r1(),c=de(),p=Le(e,{relative:s});return d.useCallback(m=>{if(oo(m,a)){m.preventDefault();let v=o!==void 0?o:_e(c)===_e(p);h(e,{replace:v,state:r,preventScrollReset:n,relative:s,viewTransition:l})}},[c,h,p,o,r,a,e,n,s,l])}var Mo=0,ko=()=>`__${String(++Mo)}__`;function _o(){let{router:e}=B0("useSubmit"),{basename:a}=d.useContext(X),o=Ua();return d.useCallback(async(r,n={})=>{let{action:s,method:l,encType:h,formData:c,body:p}=io(r,a);if(n.navigate===!1){let m=n.fetcherKey||ko();await e.fetch(m,o,n.action||s,{preventScrollReset:n.preventScrollReset,formData:c,body:p,formMethod:n.method||l,formEncType:n.encType||h,flushSync:n.flushSync})}else await e.navigate(n.action||s,{preventScrollReset:n.preventScrollReset,formData:c,body:p,formMethod:n.method||l,formEncType:n.encType||h,replace:n.replace,state:n.state,fromRouteId:o,flushSync:n.flushSync,viewTransition:n.viewTransition})},[e,a,o])}function To(e,{relative:a}={}){let{basename:o}=d.useContext(X),r=d.useContext(ee);N(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),s={...Le(e||".",{relative:a})},l=de();if(e==null){s.search=l.search;let h=new URLSearchParams(s.search),c=h.getAll("index");if(c.some(m=>m==="")){h.delete("index"),c.filter(v=>v).forEach(v=>h.append("index",v));let m=h.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&n.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(s.pathname=s.pathname==="/"?o:re([o,s.pathname])),_e(s)}function Io(e,{relative:a}={}){let o=d.useContext(L0);N(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=B0("useViewTransitionState"),n=Le(e,{relative:a});if(!o.isTransitioning)return!1;let s=ne(o.currentLocation.pathname,r)||o.currentLocation.pathname,l=ne(o.nextLocation.pathname,r)||o.nextLocation.pathname;return e1(n.pathname,l)!=null||e1(n.pathname,s)!=null}function le({width:e,height:a,fill:o}){return t.jsx("svg",{width:e,height:a,viewBox:"0 0 511 464",fill:o,xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Oo=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},Lo=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},zo=()=>{let e=[25,50,75,90],a=[];const o=()=>{const r=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(r/n*100);e.forEach(l=>{s>=l&&!a.includes(l)&&(a.push(l),Lo(l))})};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}},G0=d.createContext(),i1=()=>{const e=d.useContext(G0);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Ao=({children:e})=>{const[a,o]=d.useState(()=>localStorage.getItem("theme")||"light");d.useEffect(()=>{document.body.className=`theme-${a}`,localStorage.setItem("theme",a),Oo(a)},[a]);const s={theme:a,toggleTheme:()=>{o(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{o(l)},isLight:a==="light",isDark:a==="dark"};return t.jsx(G0.Provider,{value:s,children:e})},Vo=q`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,Po=q`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,$o=q`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,Ho=u.div`
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
    animation: ${e=>e.initialFade?$o:"none"} 0.5s ease-in;
`,Do=u.div`
    animation: ${e=>e.isExiting?Po:Vo} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function et({isVisible:e,initialFade:a=!1}){const{theme:o}=i1(),[r,n]=d.useState(!1),[s,l]=d.useState(!1);return d.useEffect(()=>{!e&&!r&&(n(!0),setTimeout(()=>{l(!0)},800))},[e,r]),t.jsx(Ho,{isVisible:e,fadeOutContainer:s,initialFade:a,children:t.jsx(Do,{isExiting:r,children:t.jsx(le,{fill:"var(--AccentColor)",width:"100px",height:"118.23px"})})})}const Jt=e=>{if(!e)return"";const o=(e.replace(/\/$/,"")||"/").split("/");return o.length>2&&(o[2]=o[2].toLowerCase()),o.join("/")},tt=()=>"https://posterfy.space"+"/",Fo=e=>{const a=tt(),o=Jt(e),r=Jt(a),n=e.includes("://www."),s=e.startsWith("http://");return n||s||o!==r},No=()=>{const e=window.location.href,a=tt(),o=[];return Fo(e)&&o.push({type:"redirect_needed",current:e,canonical:a,message:"Current URL should redirect to canonical URL"}),{isValid:o.length===0,issues:o,currentUrl:e,canonicalUrl:a}},Bo=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:a="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:o="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(d.useEffect(()=>{const n="https://posterfy.space",s=tt(),l=n+"/albuns.png";document.title=e;const h=document.querySelector('meta[name="description"]');h&&h.setAttribute("content",a);const c=document.querySelector('meta[name="keywords"]');c&&c.setAttribute("content",o);let p=document.querySelector('link[rel="canonical"]');p?p.setAttribute("href",s):(p=document.createElement("link"),p.setAttribute("rel","canonical"),p.setAttribute("href",s),document.head.appendChild(p));const m=document.querySelector('meta[property="og:title"]');m&&m.setAttribute("content",e);const v=document.querySelector('meta[property="og:description"]');v&&v.setAttribute("content",a);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",l);const x=document.querySelector('meta[property="og:url"]');x&&x.setAttribute("content",s);const f=document.querySelector('meta[name="twitter:title"]');f&&f.setAttribute("content",e);const b=document.querySelector('meta[name="twitter:description"]');b&&b.setAttribute("content",a);const C=document.querySelector('meta[name="twitter:image"]');C&&C.setAttribute("content",l);const w={"@context":"https://schema.org","@type":"WebPage",name:e,description:a,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:n+"/",description:a,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},y=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');y&&y.remove();const g=document.createElement("script");g.type="application/ld+json",g.id="dynamic-structured-data",g.innerHTML=JSON.stringify(w),document.head.appendChild(g)},[e,a,o]),null),Go=()=>(d.useEffect(()=>{setTimeout(()=>{const o=[],r=document.querySelector('link[rel="canonical"]');(!r||!r.href)&&o.push("Missing canonical URL");const n=document.querySelector('meta[name="description"]');(!n||n.content.length<120)&&o.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&o.push("Title too short or missing");const s=No();s.isValid||s.issues.forEach(c=>{o.push(`${c.type}: ${c.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&o.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||o.push("Missing structured data"),o},1e3),(()=>{const o=window.location.href;o.includes("www.")||o.startsWith("http://")})()},[]),null),Yo=()=>{const e="G-V0J63QWDJT",a=document.createElement("script");a.async=!0,a.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(a),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},Uo=(e,a="General",o="",r=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:a,event_label:o,value:r})},Kt=(e,a)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:a})},qo=(e,a="image",o="")=>{const r=o?`${o} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:r,file_type:a,album_name:e,artist_name:o})},Wo=(e,a="")=>{const o=a?`${a} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:o,album_name:e,artist_name:a})},Xt=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},Zo=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},Qo=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},Jo=(e,a="",o="",r="album_collection")=>{const n=a?`${a} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:n,album_name:e,artist_name:a,album_id:o,source:r})},Ko=()=>(d.useEffect(()=>{Yo()},[]),null),Xo=()=>{d.useEffect(()=>{Kt(document.title,window.location.href);const e=new MutationObserver(o=>{o.forEach(r=>{r.type==="childList"&&r.target.nodeName==="TITLE"&&Kt(document.title,window.location.href)})}),a=document.querySelector("title");return a&&e.observe(a,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function Y0(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function er(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function tr(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const ar=q`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,or=q`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,rr=q`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,nr=q`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,ir=u.div`
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
    animation: ${e=>e.isClosing?nr:rr} 0.3s ease-in-out forwards;
`,sr=u.div`
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
    animation: ${e=>e.isClosing?or:ar} 0.3s ease-in-out forwards;

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
`,lr=u.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,cr=u.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,dr=u(er)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,ur=u.div`
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
`,U0=u.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,hr=u.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,pr=u.button`
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
`,O1=u.button`
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
`,e0=u.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,fr=u(U0)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,mr=u.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,gr=u.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function xr({title:e,paragraph:a,imageURL:o,postImageText:r,canClose:n,confirmText:s,onConfirm:l,cancelText:h,onCancel:c,isClosing:p}){return document.body.style.overflow="hidden",t.jsx(ir,{isClosing:p,children:t.jsxs(sr,{isClosing:p,children:[t.jsxs(lr,{children:[t.jsx(mr,{children:t.jsx(le,{width:25,height:25,fill:"var(--textColor)"})}),e&&t.jsx(cr,{children:e}),n&&t.jsx(ur,{onClick:c,children:t.jsx(dr,{})})]}),t.jsx(gr,{}),a&&t.jsx(U0,{children:a}),o&&t.jsx(hr,{src:o}),r&&t.jsx(fr,{children:r}),h&&s?t.jsxs(e0,{children:[t.jsx(pr,{onClick:c,children:h}),t.jsx(O1,{onClick:l,children:s})]}):t.jsx(e0,{style:{justifyContent:"center"},children:h?t.jsx(O1,{onClick:c,children:h}):t.jsx(O1,{onClick:l,children:s})})]})})}const vr="/assets/models-4pKGew8b.png",wr=d.createContext(),Cr=({children:e})=>{const{t:a,i18n:o}=B(),[r,n]=d.useState(null),[s,l]=d.useState(!1),[h,c]=d.useState(()=>{const R=localStorage.getItem("shownAlerts");return R?JSON.parse(R):{}}),p=()=>{const R={en:{title:"🚀 Pre-made models",paragraph:"Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.",confirmText:"Ok, I'll try!",postImageText:"The models can be chosen after selecting a album."},pt:{title:"🚀 Modelos pré-definidos",paragraph:"Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.",confirmText:"Ok, vou tentar!",postImageText:"Os modelos podem ser escolhidos após selecionar um álbum."},es:{title:"🚀 Modelos predefinidos",paragraph:"Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.",confirmText:"¡Ok, lo intentaré!",postImageText:"Los modelos se pueden elegir después de seleccionar un álbum."},zh:{title:"🚀 预制模型",paragraph:"预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。",confirmText:"好的，我试试！",postImageText:"可以在选择专辑后选择模型。"}},k=o.language||"en",M=R[k]||R.en;return{id:"default-premade-models",persistentId:"premade-models-intro",title:M.title,paragraph:M.paragraph,imageURL:vr,postImageText:M.postImageText,confirmText:M.confirmText,canClose:!0,type:"alert"}},m=R=>h[R]===!0,v=R=>{if(!m(R)){const k={...h,[R]:!0};c(k),localStorage.setItem("shownAlerts",JSON.stringify(k))}};d.useEffect(()=>{const R=p();!m(R.persistentId)&&!r&&n(R)},[o.language,h,r]);const S=R=>{n(R),l(!1)},x=R=>{S({...R,type:"alert"})},f=R=>{S({...R,type:"confirmation"})},b=R=>{if(!R.persistentId){x(R);return}m(R.persistentId)||S({...R,type:"alert"})},C=()=>{(r==null?void 0:r.type)==="alert"&&g(),!(!r||s)&&(l(!0),setTimeout(()=>{n(null),l(!1),document.body.style.overflow="unset"},300))},w=()=>{r!=null&&r.onConfirm&&r.onConfirm(),(r==null?void 0:r.type)==="alert"&&g(),C()},y=()=>{r!=null&&r.onCancel&&r.onCancel(),(r==null?void 0:r.type)==="alert"&&g(),C()},g=()=>{r!=null&&r.persistentId&&v(r.persistentId)},E={modal:r,showModal:S,showAlert:x,showConfirmation:f,showConditionalAlert:b,closeModal:C,isModalVisible:!!r,hasAlertBeenShown:m,markSpecificAlertAsShown:v};return t.jsxs(wr.Provider,{value:E,children:[e,r&&t.jsx(xr,{title:r.title,paragraph:r.paragraph,imageURL:r.imageURL,postImageText:r.postImageText,canClose:r.canClose,confirmText:r.confirmText,onConfirm:r.confirmText?w:null,cancelText:r.cancelText||null,onCancel:r.cancelText?y:r.canClose?C:null,isClosing:s})]})};function t1(){return t1=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t1.apply(this,arguments)}function br(e,a){if(e==null)return{};var o={},r=Object.keys(e),n,s;for(s=0;s<r.length;s++)n=r[s],!(a.indexOf(n)>=0)&&(o[n]=e[n]);return o}var yr=["cdnSuffix","cdnUrl","countryCode","style","svg"],jr="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Er="svg",Rr=127397,q0=function(a){var o=a.cdnSuffix,r=o===void 0?Er:o,n=a.cdnUrl,s=n===void 0?jr:n,l=a.countryCode,h=a.style,c=a.svg,p=c===void 0?!1:c,m=br(a,yr);if(typeof l!="string")return null;if(p){var v=""+s+l.toLowerCase()+"."+r;return d.createElement("img",Object.assign({},m,{src:v,style:t1({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},h)}))}var S=l.toUpperCase().replace(/./g,function(x){return String.fromCodePoint(x.charCodeAt(0)+Rr)});return d.createElement("span",Object.assign({role:"img"},m,{style:t1({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},h)}),S)};const Sr=u.div`
  position: relative;
`,Mr=u.button`
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
`,kr=u.div`
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
`,_r=u.div`
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
`,Tr=u.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Ir=u.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,De=u.button`
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
`,Fe=u.span`
  margin-left: 8px;
`,Ne=u(q0)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function W0(){const[e,a]=d.useState(!1),[o,r]=d.useState(!1),{i18n:n}=B();d.useEffect(()=>{const p=localStorage.getItem("language");p&&n.changeLanguage(p);const m=v=>{v.target.closest(".language-selector")||s()};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[n]);const s=()=>{r(!0),setTimeout(()=>{a(!1),r(!1)},150)},l=p=>{p.stopPropagation(),e?s():a(!0)},h=p=>{n.changeLanguage(p),localStorage.setItem("language",p),s(),Qo(p)},c=()=>{switch(n.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return t.jsxs(Sr,{className:"language-selector",children:[t.jsx(Mr,{onClick:l,"aria-label":"Select language",children:t.jsx(kr,{children:t.jsx(q0,{countryCode:c(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&t.jsxs(_r,{className:o?"closing":"",children:[t.jsx(Tr,{}),t.jsxs(Ir,{children:[t.jsxs(De,{onClick:()=>h("pt"),children:[t.jsx(Ne,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),t.jsx(Fe,{children:"Português"})]}),t.jsxs(De,{onClick:()=>h("en"),children:[t.jsx(Ne,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),t.jsx(Fe,{children:"English"})]}),t.jsxs(De,{onClick:()=>h("es"),children:[t.jsx(Ne,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),t.jsx(Fe,{children:"Español"})]}),t.jsxs(De,{onClick:()=>h("zh"),children:[t.jsx(Ne,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),t.jsx(Fe,{children:"中文"})]})]})]})]})}function Or(e){return $({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Z0(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Lr(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Q0(e){return $({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function J0(e){return $({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function K0(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function zr(e){return $({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function X0(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function e2(e){return $({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Ar(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Vr(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function t2(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const Pr=u.div`
  position: relative;
`,$r=u.button`
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
`,Hr=u.div`
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
`,Dr=u.div`
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
`,Fr=u.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Nr=u.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,Br=u.button`
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
`,Gr=u.div`
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
`,Yr=u.span`
  margin-left: 4px;
  font-weight: 500;
`;function Ur(){const[e,a]=d.useState(!1),[o,r]=d.useState(!1),{theme:n,setSpecificTheme:s}=i1(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:t.jsx(t2,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:t.jsx(X0,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:t.jsx(Q0,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:t.jsx(J0,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:t.jsx(e2,{}),isLight:!1}],h=l.find(v=>v.id===n)||l[0];d.useEffect(()=>{const v=S=>{S.target.closest(".theme-selector")||c()};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[]);const c=()=>{r(!0),setTimeout(()=>{a(!1),r(!1)},150)},p=v=>{v.stopPropagation(),e?c():a(!0)},m=v=>{s(v),c()};return t.jsxs(Pr,{className:"theme-selector",children:[t.jsx($r,{onClick:p,"aria-label":"Select theme",children:t.jsx(Hr,{themeColor:h.color,isLight:h.isLight,children:h.icon})}),e&&t.jsxs(Dr,{className:o?"closing":"",children:[t.jsx(Fr,{}),t.jsx(Nr,{children:l.map(v=>t.jsxs(Br,{onClick:()=>m(v.id),children:[t.jsx(Gr,{className:"theme-preview",color:v.color,isLight:v.isLight,children:v.icon}),t.jsx(Yr,{children:v.name})]},v.id))})]})]})}function qr(e){return $({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function Wr(e){return $({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const Zr=u.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  backdrop-filter: ${({scrolled:e})=>e?"blur(20px)":"none"};
  padding: ${({scrolled:e})=>e?"10px 0":"20px 0"};
  box-shadow: ${({scrolled:e})=>e?"0 2px 15px var(--shadowColor)":"none"};
  transform: ${({visible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,Qr=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Jr=u.div`
  display: flex;
  align-items: center;
`,Kr=u.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,Xr=u.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,en=u.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,tn=u.div`
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
`,an=u.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,on=u.button`
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
`,rn=u.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,nn=u(Wr)`
  font-size: 1.5em;
  color: var(--textColor);
`,sn=u.p`
  font-size: 0.7em;
  font-weight: bolder;
`;function ln(){const[e,a]=d.useState(!1),[o,r]=d.useState(!0),[n,s]=d.useState(0),[l,h]=d.useState(!1),c=".space";d.useEffect(()=>{const m=()=>{const v=window.scrollY;v<=10?(r(!0),a(!1)):(v<n?r(!0):r(!1),a(!0)),s(v)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[n]);const p=()=>{h(!0),setTimeout(()=>{h(!1)},3e3)};return t.jsxs(Zr,{scrolled:e,visible:o,children:[t.jsxs(Qr,{children:[t.jsxs(Jr,{children:[t.jsx(tn,{children:t.jsx(le,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),t.jsxs(Kr,{children:["Posterfy",t.jsx(Xr,{children:c})]})]}),t.jsxs(an,{children:[t.jsx(W0,{}),t.jsx(Ur,{}),t.jsx(on,{onClick:p,children:t.jsx(rn,{children:l?t.jsx(sn,{children:"Soon!"}):t.jsx(nn,{})})})]})]}),t.jsx(en,{scrolled:e})]})}const cn=q`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,dn=q`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,at=q`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,un=q`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,hn=u.div`
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
`,pn=u.div`
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
`,fn=u.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${at} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,mn=u.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${cn} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${dn} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,gn=u.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,xn=u.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,vn=u.div`
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
    animation: ${un} 6s linear infinite;
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
`,wn=u.div`
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
`,Cn=u.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${at} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;u.h3`
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
`;const bn=u.div`
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
`,yn=u.button`
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
`,jn=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,En=u.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,Rn=u.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${at} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,Sn=u.a`
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
`;function Mn(){const{t:e}=B(),{theme:a,setSpecificTheme:o}=i1(),r=l=>{o(l)},n=[{id:"light",name:"Light",color:"#f0efeb",icon:t.jsx(t2,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:t.jsx(X0,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:t.jsx(zr,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:t.jsx(Q0,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:t.jsx(J0,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:t.jsx(e2,{}),isLight:!1}],s=new Date().getFullYear();return t.jsxs(hn,{children:[t.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:t.jsxs("footer",{children:[t.jsx("h4",{children:"Album Poster Generator Links"}),t.jsxs("nav",{children:[t.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),t.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),t.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),t.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),t.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),t.jsxs(pn,{children:[t.jsxs(fn,{children:[t.jsxs(mn,{children:[t.jsx(xn,{className:"icon-shadow"}),t.jsx(gn,{className:"icon-main",children:t.jsx(le,{fill:a==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),t.jsx(vn,{children:t.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",t.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),t.jsxs(wn,{children:[t.jsx(K0,{})," © ",s," Posterfy. ",e("AllRights","All rights reserved.")]})]}),t.jsx(Cn,{children:t.jsx(bn,{children:n.map(l=>t.jsxs(jn,{children:[t.jsx(yn,{color:l.color,active:a===l.id,themeId:l.id,onClick:()=>r(l.id),"aria-label":`${e("SwitchTo","Switch to")} ${l.name} ${e("Theme").toLowerCase()}`,children:l.icon},l.id),t.jsx(En,{active:a===l.id,children:l.name})]},l.id))})}),t.jsx(Rn,{children:t.jsxs(Sn,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[t.jsx(Or,{})," ",e("ViewGitHub","GitHub")]})})]})]})}function L1({showNavbar:e=!0,showFooter:a=!0}){return t.jsxs(t.Fragment,{children:[e&&t.jsx(ln,{}),t.jsx(Qa,{}),a&&t.jsx(Mn,{})]})}function kn(e){return $({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function _n(e){return $({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const Tn="/assets/Posterfy%20-%20KTT%20ZOO-EGMOdvc1.png",In="/assets/Posterfy%20-%20JACKBOYS%202-5mh4sLb1.png",On="/assets/Posterfy%20-%20SOS-BR7qvD22.png",Ln="/assets/Posterfy%20-%20F-1%20Trillion-D1gH0Ecz.png",zn="/assets/Posterfy%20-%20Nevermind-DmVmVnus.png",An=[{id:1,coverImage:Tn,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b2732715c405b0b118516627add4",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/15/e0/31/15e031a3-d975-91a7-5dc4-31dda64d1f52/8445162931182.jpg",useUncompressed:!0,albumName:"KTT ZOO",artistsName:"Sain",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"200",marginSide:160,marginCover:0,marginBackground:"5",titleRelease:"Release date",releaseDate:"2023-07-07",titleRuntime:"Runtime",runtime:"23min 33s",backgroundColor:"#638f98",textColor:"#0c191d",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Aquelas Coisas Mais Pra Frente
2. Demanda
3. Relíquia Do Boom Bap
4. Lucro
5. Skit Visão
6. Ebi no Tempura
7. Iori Incorporado
8. Noturno KGL
9. Ignorante
10. Momentos`,color1:"#0c191d",color2:"#3381ae",color3:"#aab8b4",albumID:"7lJibQ9XRhBDUIWgkP4wZm",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:2,coverImage:In,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273b547c9858fee61547e6b0fd8",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music221/v4/bb/00/09/bb0009b4-37e3-b924-b703-eb3d3a7f362d/196873402772.jpg",useUncompressed:!0,albumName:"JACKBOYS 2",artistsName:"JACKBOYS, Travis Scott",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"50",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2025-07-13",titleRuntime:"Runtime",runtime:"55min 50s",backgroundColor:"#b4aba6",textColor:"#79736e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. JB2 RADIO
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
17. FLORIDA FLOW`,color1:"#7a736f",color2:"#938c8c",color3:"#94948c",albumID:"32lGAqeVkdJxEj2iv2Q01B",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:3,coverImage:On,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:Ln,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27388208159b1b3c69eefdeb2e0",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg",useUncompressed:!1,albumName:"F-1 Trillion",artistsName:"Post Malone",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:200,marginSide:160,marginCover:-500,marginBackground:-700,titleRelease:"Release date",releaseDate:"2024-08-15",titleRuntime:"Runtime",runtime:"57min 58s",backgroundColor:"#cdd1d6",textColor:"#3c484c",useWatermark:!0,useFade:!0,showTracklist:!1,tracklist:`1. Wrong Ones (Feat. Tim McGraw)
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
18. Yours`,color1:"#86939b",color2:"#6a5f59",color3:"#81735d",albumID:"4BbsHmXEghoPPevQjPnHXx",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:5,coverImage:zn,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",uncompressedAlbumCover:"",useUncompressed:!1,albumName:"",artistsName:"",titleSize:"200",artistsSize:"110",tracksSize:"70",marginTop:"-200",marginSide:"115",marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"1991-09-26",titleRuntime:"Runtime",runtime:"49min 15s",backgroundColor:"#0064b0",textColor:"#01010e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Smells Like Teen Spirit
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
13. Endless, Nameless`,color1:"#a6b6ba",color2:"#43bdd1",color3:"#052a5e",albumID:"2UJcKiJxNryhL050F5Z1Fk",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}}],Vn=u.div`
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
`,Pn=u.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:a,index:o,hoveredIndex:r,isMobile:n}=e;if(n)return"scale(1)";let s="scale(0.95)";if(a)s="scale(1.08) translateY(-8px)";else if(r!==null){let l=0;switch(r){case 0:o>0&&(l=70);break;case 1:o>=2&&(l=70);break;case 2:l=0;break;case 3:o<=2&&(l=-70);break;case 4:o<4&&(l=-70);break}l!==0&&(s=`scale(0.95) translateX(${l}px)`)}return s}};
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
`,$n=u.div`
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
`,Hn=u.div`
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
`,Dn=u.div`
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
`,Fn=u.button`
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
`,Nn=u.button`
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
`,Bn=({onRecreate:e})=>{const{t:a}=B(),[o,r]=d.useState(null),[n,s]=d.useState(!1),[l,h]=d.useState(!1),[c,p]=d.useState(null),[m,v]=d.useState(null);d.useEffect(()=>{const b=()=>{s(window.innerWidth<=770),h(window.innerWidth>480&&window.innerWidth<=1200)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const S=(b,C)=>{p(b),v(C),document.body.style.overflow="hidden"},x=()=>{p(null),document.body.style.overflow="auto"},f=()=>{p(null),e(m),document.body.style.overflow="auto"};return t.jsxs(t.Fragment,{children:[t.jsx(Vn,{children:An.map((b,C)=>t.jsx(Pn,{index:C,isHovered:o===C,hoveredIndex:o,otherIsHovered:o!==null,isMobile:n,isTablet:l,onMouseEnter:()=>r(C),onMouseLeave:()=>r(null),onClick:()=>S(b.coverImage||"/placeholder.svg",b.JSONConfig),children:t.jsx("img",{src:b.coverImage||"/placeholder.svg",alt:`${b.artist} - ${b.title}`})},b.id))}),c&&t.jsx($n,{onClick:x,children:t.jsxs(Hn,{onClick:b=>b.stopPropagation(),children:[t.jsxs(Dn,{children:[t.jsx(Fn,{onClick:x,children:"×"}),t.jsx(Nn,{onClick:f,children:a("RecreatePoster")})]}),t.jsx("img",{src:c,alt:"Album cover"})]})})]})},Gn=u.div`
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
`,Yn=({onRecreate:e})=>t.jsx(Gn,{children:t.jsx(Bn,{onRecreate:e})}),Un=u.div`
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
`,qn=u.div`
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
`,Wn=u.h1`
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
`,t0=u.p`
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
`,Zn=u.div`
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
`,Qn=`
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
`,Jn=u(kn)`
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
    ${Qn}
`;function Kn({showAnimation:e=!1,onRecreate:a}){const{t:o}=B(),{theme:r}=i1(),[n,s]=d.useState(!1);d.useEffect(()=>{if(e){const h=setTimeout(()=>{s(!0)},50);return()=>clearTimeout(h)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return t.jsxs(t.Fragment,{children:[t.jsx(Un,{children:t.jsxs(qn,{children:[t.jsx(Wn,{visible:n,animationDelay:200,children:"Posterfy"}),t.jsx(t0,{visible:n,animationDelay:400,children:o("paragraphHero1")}),t.jsx(t0,{visible:n,animationDelay:600,children:o("paragraphHero2")}),t.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[t.jsx("h2",{children:"Free Album Poster Generator"}),t.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),t.jsx("h3",{children:"Features:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Free album poster maker"}),t.jsx("li",{children:"Spotify integration"}),t.jsx("li",{children:"Custom poster design"}),t.jsx("li",{children:"High-quality downloads"}),t.jsx("li",{children:"Multiple format options"}),t.jsx("li",{children:"Professional templates"})]})]}),t.jsx(Zn,{visible:n,animationDelay:800,children:t.jsx(le,{fill:r==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),t.jsx(Jn,{visible:n,animationDelay:1e3,onClick:l})]})}),t.jsx(Yn,{onRecreate:a})]})}const Xn=u.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,ei=u.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function ze({text:e,type:a}){return t.jsx(t.Fragment,{children:a==1?t.jsx(Xn,{children:e}):t.jsx(ei,{children:e})})}const ti=u.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,ai=u.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,oi=u.p`
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
`,a0=u.div`
    display: flex;
`;function ot({title:e,paragraph:a}){return t.jsxs(ti,{children:[t.jsx(a0,{children:t.jsx(ai,{children:e})}),t.jsx(a0,{children:t.jsx(oi,{children:a})})]})}function ri(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function ni(e){return $({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const ii=u.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,si=u(ri)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,li=u.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,ci=u.hr`
    opacity: 0.15;
    margin: 5px;
`,di=u.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,ui=u.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Ee({q:e,a}){const[o,r]=d.useState(!1);function n(){r(!o)}return t.jsxs(t.Fragment,{children:[t.jsxs(ii,{onClick:n,children:[t.jsx(si,{showA:o}),t.jsx(li,{children:e})]}),t.jsx(ci,{}),t.jsx(di,{showA:o,children:t.jsx(ui,{showA:o,children:a})})]})}const hi=u.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,pi=u.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function fi(){const{t:e}=B();return t.jsxs(hi,{id:"faq",children:[t.jsx(ze,{text:"FAQ",type:1}),t.jsxs(pi,{children:[t.jsx(Ee,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),t.jsx(Ee,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),t.jsx(Ee,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),t.jsx(Ee,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),t.jsx(Ee,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const mi=({width:e=300,light:a="var(--PosterShare-light)",shadeFrames:o="var(--PosterShare-shadeFrames)",darkFrames:r="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>t.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:a}),t.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:o}),t.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:r}),t.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:o}),t.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:r}),t.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:o}),t.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:o}),t.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:o}),t.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:r}),t.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:o}),t.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:o}),t.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:o}),t.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:o}),t.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:o}),t.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:r}),t.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:o}),t.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:o}),t.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:n}),t.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:n}),t.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:n}),t.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:n}),t.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:n}),t.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),gi=u.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,xi=u.div`
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
`,vi=u.p`
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
`,wi=u.button`
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
`;function Ci(){const{t:e}=B();return t.jsxs(gi,{id:"share",children:[t.jsx(ze,{text:e("Share"),type:1}),t.jsx(ot,{title:e("ShareTitle")}),t.jsx(xi,{children:t.jsx(mi,{width:"100%"})}),t.jsx(vi,{children:e("ShareDescription")}),t.jsx(wi,{children:e("ComingSoon")})]})}const bi=({width:e=390,shadeFrames:a="var(--PosterShare-shadeFrames)",darkFrames:o="var(--PosterShare-darkFrames)",posterColor:r="var(--PosterShare-posterColor)",logoColor:n="var(--PosterShare-logoColor)"})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[t.jsx("path",{fill:a,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),t.jsx("path",{fill:o,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),t.jsx("path",{fill:a,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),t.jsx("path",{fill:a,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),t.jsx("path",{fill:r,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),t.jsx("path",{fill:r,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),t.jsx("path",{fill:o,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),t.jsx("path",{fill:r,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),t.jsx("path",{fill:o,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),t.jsx("path",{fill:r,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),t.jsx("path",{fill:r,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),t.jsx("g",{fill:o,opacity:"0.3",children:t.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),t.jsxs("g",{fill:a,opacity:"0.2",children:[t.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),t.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),t.jsx("path",{fill:o,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),t.jsx("path",{fill:a,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),t.jsx("path",{fill:r,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),t.jsx("path",{fill:a,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),t.jsx("path",{fill:o,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),t.jsx("path",{fill:a,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),t.jsx("path",{fill:o,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),t.jsx("path",{fill:r,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),t.jsx("path",{fill:o,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),t.jsx("path",{fill:o,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),t.jsx("path",{fill:a,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),t.jsx("path",{fill:r,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),t.jsx("path",{fill:a,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),t.jsx("path",{fill:r,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),t.jsx("path",{fill:o,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),t.jsx("path",{fill:r,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),t.jsx("path",{fill:o,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),t.jsx("path",{fill:r,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),t.jsx("path",{fill:o,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),t.jsx("path",{fill:n,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),t.jsx("path",{fill:n,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),t.jsx("path",{fill:r,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),t.jsx("path",{fill:o,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),t.jsx("path",{fill:r,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),t.jsx("g",{clipPath:"url(#clip0_1_72)",children:t.jsx("path",{fill:n,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_1_72",children:t.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),yi=u.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,ji=u.div`
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
`,Ei=u.p`
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
`,Ri=u.button`
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
`;function Si(){const{t:e}=B();return t.jsxs(yi,{id:"share",children:[t.jsx(ze,{text:e("Community"),type:1}),t.jsx(ot,{title:e("CommunityTitle")}),t.jsx(ji,{children:t.jsx(bi,{width:"100%"})}),t.jsx(Ei,{children:e("CommunityDescription")}),t.jsx(Ri,{children:e("ComingSoon")})]})}const o0=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],Mi=u.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,ki=u.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,_i=u.div`
    display: flex;
    align-items: center;
    position: relative;
`,Ti=u.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Ii=u(K0)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Oi=u.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,Li=u.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,zi=u.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,Ai=u.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Vi=u.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,Pi=u.a`
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
`;function $i(){var s,l,h;const{i18n:e}=B(),{t:a}=B(),o=((s=e.language)==null?void 0:s.split("-")[0])||"en",r=o0.filter(c=>c.key!=="contribute_area"),n=o0.find(c=>c.key==="contribute_area");return t.jsxs(Mi,{id:"thanks",children:[t.jsx(ze,{text:a("Thanks"),type:1}),r.map((c,p)=>t.jsxs(ki,{children:[t.jsxs(_i,{children:[t.jsx(Ti,{className:"circle"}),t.jsx(Ii,{className:"heart"}),t.jsx(Oi,{tabIndex:0,role:"button",onClick:()=>window.open(c.url,"_blank","noopener,noreferrer"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&window.open(c.url,"_blank","noopener,noreferrer")},onMouseEnter:m=>{const v=m.target.parentNode;v.querySelector(".circle").style.opacity=0,v.querySelector(".heart").style.opacity=1},onMouseLeave:m=>{const v=m.target.parentNode;v.querySelector(".circle").style.opacity=.8,v.querySelector(".heart").style.opacity=0},children:c.title[o]||c.title.en})]}),t.jsx(Li,{children:c.text[o]||c.text.en})]},c.key)),n&&t.jsxs(zi,{children:[t.jsx(Ai,{children:n.title[o]||n.title.en}),t.jsx(Vi,{children:n.text[o]||n.text.en}),t.jsx(Pi,{href:n.url,target:"_blank",rel:"noopener noreferrer",children:((l=n.button)==null?void 0:l[o])||((h=n.button)==null?void 0:h.en)||"Github"})]})]})}const Hi=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Di=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Fi=u.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function ae({title:e,value:a,onChange:o}){return t.jsxs(Hi,{children:[t.jsx(Di,{children:e}),t.jsx(Fi,{placeholder:e,value:a,onChange:o})]})}const Ni=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Bi=u.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,Gi=u.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function r0({title:e,value:a,onChangeTitle:o,onChangeDate:r}){return t.jsxs(Ni,{children:[t.jsx(Bi,{placeholder:e,value:e,onChange:o}),t.jsx(Gi,{placeholder:e,value:a,onChange:r})]})}const Yi=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Ui=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,qi=u.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,Wi=u.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,Zi=u.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function Re({title:e,value:a,onClick:o}){return t.jsxs(Yi,{children:[t.jsx(Ui,{children:e}),t.jsxs(qi,{onClick:o,children:[t.jsx(Wi,{style:{backgroundColor:a}}),t.jsx(Zi,{children:a})]})]})}function s1(){return(s1=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function a2(e,a){if(e==null)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a.indexOf(o=s[r])>=0||(n[o]=e[o]);return n}function G1(e){var a=d.useRef(e),o=d.useRef(function(r){a.current&&a.current(r)});return a.current=e,o.current}var Te=function(e,a,o){return a===void 0&&(a=0),o===void 0&&(o=1),e>o?o:e<a?a:e},ke=function(e){return"touches"in e},Y1=function(e){return e&&e.ownerDocument.defaultView||self},n0=function(e,a,o){var r=e.getBoundingClientRect(),n=ke(a)?function(s,l){for(var h=0;h<s.length;h++)if(s[h].identifier===l)return s[h];return s[0]}(a.touches,o):a;return{left:Te((n.pageX-(r.left+Y1(e).pageXOffset))/r.width),top:Te((n.pageY-(r.top+Y1(e).pageYOffset))/r.height)}},i0=function(e){!ke(e)&&e.preventDefault()},o2=U.memo(function(e){var a=e.onMove,o=e.onKey,r=a2(e,["onMove","onKey"]),n=d.useRef(null),s=G1(a),l=G1(o),h=d.useRef(null),c=d.useRef(!1),p=d.useMemo(function(){var x=function(C){i0(C),(ke(C)?C.touches.length>0:C.buttons>0)&&n.current?s(n0(n.current,C,h.current)):b(!1)},f=function(){return b(!1)};function b(C){var w=c.current,y=Y1(n.current),g=C?y.addEventListener:y.removeEventListener;g(w?"touchmove":"mousemove",x),g(w?"touchend":"mouseup",f)}return[function(C){var w=C.nativeEvent,y=n.current;if(y&&(i0(w),!function(E,R){return R&&!ke(E)}(w,c.current)&&y)){if(ke(w)){c.current=!0;var g=w.changedTouches||[];g.length&&(h.current=g[0].identifier)}y.focus(),s(n0(y,w,h.current)),b(!0)}},function(C){var w=C.which||C.keyCode;w<37||w>40||(C.preventDefault(),l({left:w===39?.05:w===37?-.05:0,top:w===40?.05:w===38?-.05:0}))},b]},[l,s]),m=p[0],v=p[1],S=p[2];return d.useEffect(function(){return S},[S]),U.createElement("div",s1({},r,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:n,onKeyDown:v,tabIndex:0,role:"slider"}))}),rt=function(e){return e.filter(Boolean).join(" ")},r2=function(e){var a=e.color,o=e.left,r=e.top,n=r===void 0?.5:r,s=rt(["react-colorful__pointer",e.className]);return U.createElement("div",{className:s,style:{top:100*n+"%",left:100*o+"%"}},U.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:a}}))},Y=function(e,a,o){return a===void 0&&(a=0),o===void 0&&(o=Math.pow(10,a)),Math.round(o*e)/o},Qi=function(e){return t3(U1(e))},U1=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Y(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Y(parseInt(e.substring(6,8),16)/255,2):1}},Ji=function(e){return e3(Xi(e))},Ki=function(e){var a=e.s,o=e.v,r=e.a,n=(200-a)*o/100;return{h:Y(e.h),s:Y(n>0&&n<200?a*o/100/(n<=100?n:200-n)*100:0),l:Y(n/2),a:Y(r,2)}},q1=function(e){var a=Ki(e);return"hsl("+a.h+", "+a.s+"%, "+a.l+"%)"},Xi=function(e){var a=e.h,o=e.s,r=e.v,n=e.a;a=a/360*6,o/=100,r/=100;var s=Math.floor(a),l=r*(1-o),h=r*(1-(a-s)*o),c=r*(1-(1-a+s)*o),p=s%6;return{r:Y(255*[r,h,l,l,c,r][p]),g:Y(255*[c,r,r,h,l,l][p]),b:Y(255*[l,l,c,r,r,h][p]),a:Y(n,2)}},Be=function(e){var a=e.toString(16);return a.length<2?"0"+a:a},e3=function(e){var a=e.r,o=e.g,r=e.b,n=e.a,s=n<1?Be(Y(255*n)):"";return"#"+Be(a)+Be(o)+Be(r)+s},t3=function(e){var a=e.r,o=e.g,r=e.b,n=e.a,s=Math.max(a,o,r),l=s-Math.min(a,o,r),h=l?s===a?(o-r)/l:s===o?2+(r-a)/l:4+(a-o)/l:0;return{h:Y(60*(h<0?h+6:h)),s:Y(s?l/s*100:0),v:Y(s/255*100),a:n}},a3=U.memo(function(e){var a=e.hue,o=e.onChange,r=rt(["react-colorful__hue",e.className]);return U.createElement("div",{className:r},U.createElement(o2,{onMove:function(n){o({h:360*n.left})},onKey:function(n){o({h:Te(a+360*n.left,0,360)})},"aria-label":"Hue","aria-valuenow":Y(a),"aria-valuemax":"360","aria-valuemin":"0"},U.createElement(r2,{className:"react-colorful__hue-pointer",left:a/360,color:q1({h:a,s:100,v:100,a:1})})))}),o3=U.memo(function(e){var a=e.hsva,o=e.onChange,r={backgroundColor:q1({h:a.h,s:100,v:100,a:1})};return U.createElement("div",{className:"react-colorful__saturation",style:r},U.createElement(o2,{onMove:function(n){o({s:100*n.left,v:100-100*n.top})},onKey:function(n){o({s:Te(a.s+100*n.left,0,100),v:Te(a.v-100*n.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Y(a.s)+"%, Brightness "+Y(a.v)+"%"},U.createElement(r2,{className:"react-colorful__saturation-pointer",top:1-a.v/100,left:a.s/100,color:q1(a)})))}),n2=function(e,a){if(e===a)return!0;for(var o in e)if(e[o]!==a[o])return!1;return!0},r3=function(e,a){return e.toLowerCase()===a.toLowerCase()||n2(U1(e),U1(a))};function n3(e,a,o){var r=G1(o),n=d.useState(function(){return e.toHsva(a)}),s=n[0],l=n[1],h=d.useRef({color:a,hsva:s});d.useEffect(function(){if(!e.equal(a,h.current.color)){var p=e.toHsva(a);h.current={hsva:p,color:a},l(p)}},[a,e]),d.useEffect(function(){var p;n2(s,h.current.hsva)||e.equal(p=e.fromHsva(s),h.current.color)||(h.current={hsva:s,color:p},r(p))},[s,e,r]);var c=d.useCallback(function(p){l(function(m){return Object.assign({},m,p)})},[]);return[s,c]}var i3=typeof window<"u"?d.useLayoutEffect:d.useEffect,s3=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},s0=new Map,l3=function(e){i3(function(){var a=e.current?e.current.ownerDocument:document;if(a!==void 0&&!s0.has(a)){var o=a.createElement("style");o.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,s0.set(a,o);var r=s3();r&&o.setAttribute("nonce",r),a.head.appendChild(o)}},[])},c3=function(e){var a=e.className,o=e.colorModel,r=e.color,n=r===void 0?o.defaultColor:r,s=e.onChange,l=a2(e,["className","colorModel","color","onChange"]),h=d.useRef(null);l3(h);var c=n3(o,n,s),p=c[0],m=c[1],v=rt(["react-colorful",a]);return U.createElement("div",s1({},l,{ref:h,className:v}),U.createElement(o3,{hsva:p,onChange:m}),U.createElement(a3,{hue:p.h,onChange:m,className:"react-colorful__last-control"}))},d3={defaultColor:"000",toHsva:Qi,fromHsva:function(e){return Ji({h:e.h,s:e.s,v:e.v,a:1})},equal:r3},u3=function(e){return U.createElement(c3,s1({},e,{colorModel:d3}))};const h3=u.div`
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
`,p3=u(u3)`
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
`,z1=u.div`
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
`,f3=u.div`
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
`,m3=u.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,g3=u.input`
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
`,x3=u(Lr)`
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
`,v3=u(Ar)`
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
`,w3=u(qr)`
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
`,C3=u(Z0)`
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
`,b3=u.img`
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
`;function y3({DefaultColor:e,image:a,predefinedColors:o,position:r,onDone:n,onClose:s}){const[l,h]=d.useState(e),[c,p]=d.useState(!1),[m,v]=d.useState(null),S=d.useRef(null),x=d.useRef(null);function f(){p(!c)}function b(g){h(g.target.value===""?"#":g.target.value)}function C(g){const E=S.current,k=x.current.getBoundingClientRect(),M=E.getContext("2d"),T=Math.floor(g.clientX-k.left),I=Math.floor(g.clientY-k.top),L=`#${[...M.getImageData(T,I,1,1).data].slice(0,3).map(z=>z.toString(16).padStart(2,"0")).join("")}`;h(L),f()}function w(g){const E=S.current,k=x.current.getBoundingClientRect(),M=Math.floor(g.clientX-k.left),T=Math.floor(g.clientY-k.top);if(E){const I=E.getContext("2d");try{const L=`#${[...I.getImageData(M,T,1,1).data].slice(0,3).map(z=>z.toString(16).padStart(2,"0")).join("")}`;v(L)}catch{v(null)}}}function y(){v(null)}return t.jsxs(h3,{style:{position:"absolute",top:r.top,left:r.left,zIndex:1e3},children:[t.jsx("canvas",{ref:S,style:{display:"none"}}),c?t.jsx(b3,{ref:x,crossOrigin:"anonymous",draggable:"false",src:a,onClick:C,onMouseMove:w,onMouseLeave:y,onLoad:()=>{const g=S.current,E=g.getContext("2d"),R=x.current;g.width=R.width,g.height=R.height,E.drawImage(R,0,0,R.width,R.height)},style:m?{borderColor:m}:{}}):t.jsx(p3,{color:l,onChange:h}),t.jsx(z1,{children:o.map(g=>t.jsx(f3,{style:{backgroundColor:g},onClick:()=>h(g)},g))}),t.jsxs(z1,{children:[t.jsx(m3,{children:"Hex"}),t.jsx(g3,{value:l,onChange:b})]}),t.jsxs(z1,{children:[c?t.jsx(v3,{onClick:f}):t.jsx(x3,{onClick:f}),t.jsx(w3,{onClick:s}),t.jsx(C3,{onClick:()=>{n(l),Zo(l)}})]})]})}const j3=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,E3=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,R3=u.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,S3=u.input`
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
`,M3=u.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function A1({title:e,text:a,value:o,onChange:r}){const n=()=>r(!o);return t.jsxs(j3,{children:[t.jsx(E3,{children:e}),t.jsxs(R3,{onClick:n,children:[t.jsx(S3,{checked:o,readOnly:!0,type:"checkbox"}),t.jsx(M3,{active:o,children:a})]})]})}function k3(e){return $({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function _3(e){return $({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const T3=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,I3=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,O3=u.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,L3=u.input`
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
`,z3=u.p`
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
`,A3=u(k3)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function V3({title:e,text:a,onChange:o}){const r=d.useRef(),n=()=>{r.current.click()},s=l=>{const h=l.target.files[0];a=h.name,h&&o(h)};return t.jsxs(T3,{onClick:n,children:[t.jsx(I3,{children:e}),t.jsxs(O3,{children:[t.jsx(A3,{}),t.jsx(L3,{ref:r,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:s}),t.jsx(z3,{active:!0,children:a})]})]})}const P3=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,$3=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,H3=u.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,D3=u.input`
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
`,F3=u.p`
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
`,N3=u(_3)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function B3({title:e,text:a,onChange:o}){const r=d.useRef(),n=()=>{r.current.click()},s=l=>{const h=l.target.files[0];a=h.name,h&&o(h)};return t.jsxs(P3,{onClick:n,children:[t.jsx($3,{children:e}),t.jsxs(H3,{children:[t.jsx(N3,{}),t.jsx(D3,{ref:r,type:"file",accept:".ttf,.otf",onChange:s}),t.jsx(F3,{active:!0,children:a})]})]})}function i2(e){return $({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const G3=u.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,Y3=u.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,U3=u.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,q3=u(i2)`
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
`;function s2(){const{t:e}=B();return t.jsxs(G3,{children:[t.jsx(q3,{}),t.jsx(Y3,{children:e("Loading")}),t.jsx(U3,{children:e("LoadingText")})]})}var l2={},l1={},c2={exports:{}},W3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z3=W3,Q3=Z3;function d2(){}function u2(){}u2.resetWarningCache=d2;var J3=function(){function e(r,n,s,l,h,c){if(c!==Q3){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function a(){return e}var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:u2,resetWarningCache:d2};return o.PropTypes=o,o};c2.exports=J3();var h2=c2.exports,nt={},c1={},p2={exports:{}};(function(e,a){(function(o,r){e.exports=r()})(J2,function(){var o=function(c,p){return c<p?-1:c>p?1:0},r=function(c){return c.reduce(function(p,m){return p+m},0)},n=function(){function c(m){this.colors=m}var p=c.prototype;return p.palette=function(){return this.colors},p.map=function(m){return m},c}(),s=function(){function c(x,f,b){return(x<<10)+(f<<5)+b}function p(x){var f=[],b=!1;function C(){f.sort(x),b=!0}return{push:function(w){f.push(w),b=!1},peek:function(w){return b||C(),w===void 0&&(w=f.length-1),f[w]},pop:function(){return b||C(),f.pop()},size:function(){return f.length},map:function(w){return f.map(w)},debug:function(){return b||C(),f}}}function m(x,f,b,C,w,y,g){var E=this;E.r1=x,E.r2=f,E.g1=b,E.g2=C,E.b1=w,E.b2=y,E.histo=g}function v(){this.vboxes=new p(function(x,f){return o(x.vbox.count()*x.vbox.volume(),f.vbox.count()*f.vbox.volume())})}function S(x,f){if(f.count()){var b=f.r2-f.r1+1,C=f.g2-f.g1+1,w=Math.max.apply(null,[b,C,f.b2-f.b1+1]);if(f.count()==1)return[f.copy()];var y,g,E,R,k=0,M=[],T=[];if(w==b)for(y=f.r1;y<=f.r2;y++){for(R=0,g=f.g1;g<=f.g2;g++)for(E=f.b1;E<=f.b2;E++)R+=x[c(y,g,E)]||0;M[y]=k+=R}else if(w==C)for(y=f.g1;y<=f.g2;y++){for(R=0,g=f.r1;g<=f.r2;g++)for(E=f.b1;E<=f.b2;E++)R+=x[c(g,y,E)]||0;M[y]=k+=R}else for(y=f.b1;y<=f.b2;y++){for(R=0,g=f.r1;g<=f.r2;g++)for(E=f.g1;E<=f.g2;E++)R+=x[c(g,E,y)]||0;M[y]=k+=R}return M.forEach(function(I,_){T[_]=k-I}),function(I){var _,L,z,V,P,O=I+"1",A=I+"2",H=0;for(y=f[O];y<=f[A];y++)if(M[y]>k/2){for(z=f.copy(),V=f.copy(),P=(_=y-f[O])<=(L=f[A]-y)?Math.min(f[A]-1,~~(y+L/2)):Math.max(f[O],~~(y-1-_/2));!M[P];)P++;for(H=T[P];!H&&M[P-1];)H=T[--P];return z[A]=P,V[O]=z[A]+1,[z,V]}}(w==b?"r":w==C?"g":"b")}}return m.prototype={volume:function(x){var f=this;return f._volume&&!x||(f._volume=(f.r2-f.r1+1)*(f.g2-f.g1+1)*(f.b2-f.b1+1)),f._volume},count:function(x){var f=this,b=f.histo;if(!f._count_set||x){var C,w,y,g=0;for(C=f.r1;C<=f.r2;C++)for(w=f.g1;w<=f.g2;w++)for(y=f.b1;y<=f.b2;y++)g+=b[c(C,w,y)]||0;f._count=g,f._count_set=!0}return f._count},copy:function(){var x=this;return new m(x.r1,x.r2,x.g1,x.g2,x.b1,x.b2,x.histo)},avg:function(x){var f=this,b=f.histo;if(!f._avg||x){var C,w,y,g,E=0,R=0,k=0,M=0;if(f.r1===f.r2&&f.g1===f.g2&&f.b1===f.b2)f._avg=[f.r1<<3,f.g1<<3,f.b1<<3];else{for(w=f.r1;w<=f.r2;w++)for(y=f.g1;y<=f.g2;y++)for(g=f.b1;g<=f.b2;g++)E+=C=b[c(w,y,g)]||0,R+=C*(w+.5)*8,k+=C*(y+.5)*8,M+=C*(g+.5)*8;f._avg=E?[~~(R/E),~~(k/E),~~(M/E)]:[~~(8*(f.r1+f.r2+1)/2),~~(8*(f.g1+f.g2+1)/2),~~(8*(f.b1+f.b2+1)/2)]}}return f._avg},contains:function(x){var f=this,b=x[0]>>3;return gval=x[1]>>3,bval=x[2]>>3,b>=f.r1&&b<=f.r2&&gval>=f.g1&&gval<=f.g2&&bval>=f.b1&&bval<=f.b2}},v.prototype={push:function(x){this.vboxes.push({vbox:x,color:x.avg()})},palette:function(){return this.vboxes.map(function(x){return x.color})},size:function(){return this.vboxes.size()},map:function(x){for(var f=this.vboxes,b=0;b<f.size();b++)if(f.peek(b).vbox.contains(x))return f.peek(b).color;return this.nearest(x)},nearest:function(x){for(var f,b,C,w=this.vboxes,y=0;y<w.size();y++)((b=Math.sqrt(Math.pow(x[0]-w.peek(y).color[0],2)+Math.pow(x[1]-w.peek(y).color[1],2)+Math.pow(x[2]-w.peek(y).color[2],2)))<f||f===void 0)&&(f=b,C=w.peek(y).color);return C},forcebw:function(){var x=this.vboxes;x.sort(function(w,y){return o(r(w.color),r(y.color))});var f=x[0].color;f[0]<5&&f[1]<5&&f[2]<5&&(x[0].color=[0,0,0]);var b=x.length-1,C=x[b].color;C[0]>251&&C[1]>251&&C[2]>251&&(x[b].color=[255,255,255])}},{quantize:function(x,f){if(!Number.isInteger(f)||f<1||f>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!x.length||f<2||f>256||!x.length||f<2||f>256)return!1;for(var b=[],C=new Set,w=0;w<x.length;w++){var y=x[w],g=y.join(",");C.has(g)||(C.add(g),b.push(y))}if(b.length<=f)return new n(b);var E=function(_){var L,z=new Array(32768);return _.forEach(function(V){L=c(V[0]>>3,V[1]>>3,V[2]>>3),z[L]=(z[L]||0)+1}),z}(x);E.forEach(function(){});var R=function(_,L){var z,V,P,O=1e6,A=0,H=1e6,W=0,te=1e6,ie=0;return _.forEach(function(Z){(z=Z[0]>>3)<O?O=z:z>A&&(A=z),(V=Z[1]>>3)<H?H=V:V>W&&(W=V),(P=Z[2]>>3)<te?te=P:P>ie&&(ie=P)}),new m(O,A,H,W,te,ie,L)}(x,E),k=new p(function(_,L){return o(_.count(),L.count())});function M(_,L){for(var z,V=_.size(),P=0;P<1e3;){if(V>=L||P++>1e3)return;if((z=_.pop()).count()){var O=S(E,z),A=O[0],H=O[1];if(!A)return;_.push(A),H&&(_.push(H),V++)}else _.push(z),P++}}k.push(R),M(k,.75*f);for(var T=new p(function(_,L){return o(_.count()*_.volume(),L.count()*L.volume())});k.size();)T.push(k.pop());M(T,f);for(var I=new v;T.size();)I.push(T.pop());return I}}}().quantize,l=function(c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=c.naturalWidth,this.height=this.canvas.height=c.naturalHeight,this.context.drawImage(c,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var h=function(){};return h.prototype.getColor=function(c,p){return p===void 0&&(p=10),this.getPalette(c,5,p)[0]},h.prototype.getPalette=function(c,p,m){var v=function(b){var C=b.colorCount,w=b.quality;if(C!==void 0&&Number.isInteger(C)){if(C===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");C=Math.max(C,2),C=Math.min(C,20)}else C=10;return(w===void 0||!Number.isInteger(w)||w<1)&&(w=10),{colorCount:C,quality:w}}({colorCount:p,quality:m}),S=new l(c),x=function(b,C,w){for(var y,g,E,R,k,M=b,T=[],I=0;I<C;I+=w)g=M[0+(y=4*I)],E=M[y+1],R=M[y+2],((k=M[y+3])===void 0||k>=125)&&(g>250&&E>250&&R>250||T.push([g,E,R]));return T}(S.getImageData().data,S.width*S.height,v.quality),f=s(x,v.colorCount);return f?f.palette():null},h.prototype.getColorFromUrl=function(c,p,m){var v=this,S=document.createElement("img");S.addEventListener("load",function(){var x=v.getPalette(S,5,m);p(x[0],c)}),S.src=c},h.prototype.getImageData=function(c,p){var m=new XMLHttpRequest;m.open("GET",c,!0),m.responseType="arraybuffer",m.onload=function(){if(this.status==200){var v=new Uint8Array(this.response);i=v.length;for(var S=new Array(i),x=0;x<v.length;x++)S[x]=String.fromCharCode(v[x]);var f=S.join(""),b=window.btoa(f);p("data:image/png;base64,"+b)}},m.send()},h.prototype.getColorAsync=function(c,p,m){var v=this;this.getImageData(c,function(S){var x=document.createElement("img");x.addEventListener("load",function(){var f=v.getPalette(x,5,m);p(f[0],this)}),x.src=S})},h})})(p2);var f2=p2.exports,d1={},it={};Object.defineProperty(it,"__esModule",{value:!0});it.default=K3;function K3(e,a,o){return`rgb(${e}, ${a}, ${o})`}var st={};Object.defineProperty(st,"__esModule",{value:!0});st.default=X3;function X3(e,a,o){return`#${[e,a,o].map(r=>{const n=r.toString(16);return n.length===1?`0${n}`:n}).join("")}`}Object.defineProperty(d1,"__esModule",{value:!0});d1.default=as;var es=m2(it),ts=m2(st);function m2(e){return e&&e.__esModule?e:{default:e}}function as(e,a){switch(a){case"rgbString":return(0,es.default)(e[0],e[1],e[2]);case"hex":return(0,ts.default)(e[0],e[1],e[2]);default:return e}}var u1={};Object.defineProperty(u1,"__esModule",{value:!0});u1.default=os;function os(e,a=void 0){return new Promise((o,r)=>{const n=new Image;n.addEventListener("load",()=>{o(n)}),n.addEventListener("error",()=>{r(new Error(`Failed to load image's URL: ${e}`))}),n.crossOrigin=a,n.src=e})}Object.defineProperty(c1,"__esModule",{value:!0});c1.default=ss;var rs=lt(f2),ns=lt(d1),is=lt(u1);function lt(e){return e&&e.__esModule?e:{default:e}}async function ss(e,a="rgbString",o=null,r=10){const n=await(0,is.default)(e,o),l=new rs.default().getColor(n,r);return(0,ns.default)(l,a)}Object.defineProperty(nt,"__esModule",{value:!0});nt.default=us;var l0=d,ls=cs(c1);function cs(e){return e&&e.__esModule?e:{default:e}}const g2={loading:!0,data:null,error:void 0};function ds(e,a){switch(a.type){case"getColor":return g2;case"resolveColor":return{...e,data:a.payload,loading:!1};case"rejectColor":return{...e,error:a.payload,loading:!1};default:return e}}function us(e,a="rgbString",o={}){const{crossOrigin:r=null,quality:n=10}=o,[s,l]=(0,l0.useReducer)(ds,g2);return(0,l0.useEffect)(()=>{l({type:"getColor"}),(0,ls.default)(e,a,r,n).then(h=>{l({type:"resolveColor",payload:h})}).catch(h=>{l({type:"rejectColor",payload:h})})},[e]),s}Object.defineProperty(l1,"__esModule",{value:!0});l1.default=void 0;var c0=ct(d),Se=ct(h2),hs=ct(nt);function ct(e){return e&&e.__esModule?e:{default:e}}const dt=({src:e,format:a,crossOrigin:o,quality:r,children:n})=>{const s=(0,hs.default)(e,a,{crossOrigin:o,quality:r});return c0.default.createElement(c0.default.Fragment,null,n(s))};dt.defaultProps={format:"rgbString",crossOrigin:null,quality:10};dt.propTypes={children:Se.default.any.isRequired,src:Se.default.string.isRequired,format:Se.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:Se.default.string,quality:Se.default.number};var ps=dt;l1.default=ps;var h1={},ut={},p1={};Object.defineProperty(p1,"__esModule",{value:!0});p1.default=xs;var fs=ht(f2),ms=ht(d1),gs=ht(u1);function ht(e){return e&&e.__esModule?e:{default:e}}async function xs(e,a=2,o="rgbString",r=null,n=10){const s=await(0,gs.default)(e,r);return new fs.default().getPalette(s,a,n).map(c=>(0,ms.default)(c,o))}Object.defineProperty(ut,"__esModule",{value:!0});ut.default=bs;var d0=d,vs=ws(p1);function ws(e){return e&&e.__esModule?e:{default:e}}const x2={loading:!0,data:[],error:void 0};function Cs(e,a){switch(a.type){case"getPalette":return x2;case"resolvePalette":return{...e,data:a.payload,loading:!1};case"rejectPalette":return{...e,error:a.payload,loading:!1};default:return e}}function bs(e,a=2,o="rgbString",r={}){const{crossOrigin:n=null,quality:s=10}=r,[l,h]=(0,d0.useReducer)(Cs,x2);return(0,d0.useEffect)(()=>{h({type:"getPalette"}),(0,vs.default)(e,a,o,n,s).then(c=>{h({type:"resolvePalette",payload:c})}).catch(c=>{h({type:"rejectPalette",payload:c})})},[e]),l}Object.defineProperty(h1,"__esModule",{value:!0});h1.default=void 0;var u0=pt(d),pe=pt(h2),ys=pt(ut);function pt(e){return e&&e.__esModule?e:{default:e}}const ft=({src:e,colorCount:a,format:o,crossOrigin:r,quality:n,children:s})=>{const l=(0,ys.default)(e,a,o,{crossOrigin:r,quality:n});return u0.default.createElement(u0.default.Fragment,null,s(l))};ft.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};ft.propTypes={children:pe.default.any.isRequired,src:pe.default.string.isRequired,format:pe.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:pe.default.number,crossOrigin:pe.default.string,quality:pe.default.number};var js=ft;h1.default=js;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return n.default}}),e.default=void 0;var a=s(l1),o=s(h1),r=s(c1),n=s(p1);function s(h){return h&&h.__esModule?h:{default:h}}var l=a.default;e.default=l})(l2);const Es=(e,a=500,o=134)=>`
        <svg width="${a}" height="${o}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,Rs=({onImageReady:e,posterData:a,generatePoster:o,onTitleSizeAdjust:r,customFont:n})=>{const s=d.useRef(null);return d.useEffect(()=>{(async()=>{if(!o)return;const h=s.current,c=h.getContext("2d"),p=2480,m=3508;a.marginSide=parseInt(a.marginSide)||0,a.marginTop=parseInt(a.marginTop)||0,a.marginCover=parseInt(a.marginCover)||0,a.marginBackground=parseInt(a.marginBackground)||0;const v=async g=>{const E=new Image;return E.crossOrigin="anonymous",E.src=g,new Promise(R=>{E.onload=()=>{if(c.drawImage(E,a.marginCover,a.marginCover,p-a.marginCover*2,p-a.marginCover*2),a.useFade){let k=c.createLinearGradient(0,0,0,3e3-a.marginBackground);const M=b(a.backgroundColor);k.addColorStop(.5,`rgba(${M.r}, ${M.g}, ${M.b}, 0)`),k.addColorStop(.8,a.backgroundColor),c.fillStyle=k,c.fillRect(0,0,h.width,2500-a.marginBackground)}R()}})},S=async()=>{const g=Es(a.textColor,500,134),E=new Blob([g],{type:"image/svg+xml;charset=utf-8"}),R=URL.createObjectURL(E),k=new Image;return k.src=R,new Promise(M=>{k.onload=()=>{c.globalAlpha="0.5",c.drawImage(k,p-70-500,50,500,134),c.globalAlpha="1",URL.revokeObjectURL(R),M()}})},x=async()=>{let g=a.titleSize?parseInt(a.titleSize):230;const E=n||"Montserrat";if(!a.userAdjustedTitleSize&&!a.initialTitleSizeSet){c.font=`bold ${g}px ${E}`;let M=c.measureText(a.albumName).width;for(;M>2480-a.marginSide*2;)g-=1,c.font=`bold ${g}px ${E}`,M=c.measureText(a.albumName).width;r(g,!0)}else c.font=`bold ${g}px ${E}`;c.fillStyle=a.textColor,a.showTracklist?c.fillText(a.albumName,a.marginSide,2500+a.marginTop):c.fillText(a.albumName,a.marginSide,2790+a.marginTop);let R=a.artistsSize?parseInt(a.artistsSize):110;c.font=`bold ${R}px ${n||"Montserrat"}`,a.showTracklist?c.fillText(a.artistsName,a.marginSide,2500+a.marginTop+R*1.3):c.fillText(a.artistsName,a.marginSide,2820+a.marginTop+R),c.font=`bold 70px ${n||"Montserrat"}`,c.fillText(a.titleRelease,a.marginSide,3310);let k=c.measureText(a.titleRelease).width;c.fillText(a.titleRuntime,k+a.marginSide+100,3310),c.globalAlpha=.7,c.font=`bold 60px ${n||"Montserrat"}`,c.fillText(a.runtime,k+a.marginSide+100,3390),c.fillText(a.releaseDate,a.marginSide,3390),c.globalAlpha=1,c.fillStyle=a.color1,c.fillRect(2045-a.marginSide,3368,145,30),c.fillStyle=a.color2,c.fillRect(2190-a.marginSide,3368,145,30),c.fillStyle=a.color3,c.fillRect(2335-a.marginSide,3368,145,30)},f=async()=>{c.fillStyle=a.textColor;let g=a.marginSide+10,E=0,R=0;const k=a.tracksSize?parseInt(a.tracksSize):50;c.font=`bold ${k}px ${n||"Montserrat"}`;const M=k,T=parseInt(a.marginTop||0),I=parseInt(a.artistsSize)?2500+T+parseInt(a.artistsSize)*1.3+130:2500+T+110*1.2+130,_=500,L=p-a.marginSide*2,z=parseInt(a.marginSide),V=I+_-10-parseInt(a.marginTop);let P=I;a.tracklist.split(`
`).forEach(O=>{if(P+M*1.3>=V){if(P=I,g=E+M*2.5+R,g>=z+L)return;R=g-M*2.5,E=0}const A=c.measureText(`${O}`).width+a.marginSide;A>E&&(E=A),c.fillText(`${O}`,g,P),P+=M*1.3})},b=g=>{const E=parseInt(g.replace("#",""),16);return{r:E>>16&255,g:E>>8&255,b:E&255}},C=g=>{const E=k=>{const M=k/255;return M<=.03928?M/12.92:Math.pow((M+.055)/1.055,2.4)};return .2126*E(g.r)+.7152*E(g.g)+.0722*E(g.b)>.179?"black":"white"},w=async()=>{const g=b(a.backgroundColor),E=C(g),R=a.textColor,k=`https://scannables.scdn.co/uri/plain/svg/${a.backgroundColor.replace("#","")}/${E}/640/spotify:album:${a.albumID}`;let T=await(await fetch(k)).text();E=="black"?T=T.replace(/fill="#000000"/g,`fill="${R}"`):T=T.replace(/fill="#ffffff"/g,`fill="${R}"`),T=T.replace(a.backgroundColor,"transparent");const I=new Blob([T],{type:"image/svg+xml"}),_=URL.createObjectURL(I);return new Promise(L=>{const z=new Image;z.src=_,z.onload=function(){c.drawImage(z,2020-a.marginSide,3235,480,120);const V=h.toDataURL("image/png");e(V),L()}})},y=async()=>{c.fillStyle=a.backgroundColor,c.fillRect(0,2480-a.marginBackground,p,m-2480+a.marginBackground)};c.clearRect(0,0,p,m),c.fillStyle=a.backgroundColor,c.fillRect(0,0,p,m),a.useUncompressed?await v(await a.uncompressedAlbumCover):await v(a.albumCover),await y(),await x(),a.showTracklist&&await f(),a.useWatermark&&await S(),await w()})()},[o,a,e]),t.jsx("canvas",{ref:s,width:2480,height:3508,style:{display:"none"}})},Ss=u.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function D({children:e,animationDelay:a=0,...o}){const[r,n]=d.useState(!1);return d.useEffect(()=>{const s=setTimeout(()=>{n(!0)},a);return()=>clearTimeout(s)},[a]),t.jsx(Ss,{visible:r,animationDelay:a,...o,children:e})}const Ms=u.div`
    width: 80%;
    margin-inline: auto;
`,ks=u.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,_s=u(Y0)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,Ts=u.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Is=u.div`
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
`,Os=u.img`
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
`,Ls=u.div`
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
`,zs=u(i2)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?q`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,As=u.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Vs=u.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,h0=u.div`
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
`,Ps=u.div`
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
`,$s=u.div`
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
`,Hs=u.div`
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
`,p0=u.button`
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
`,Ds=u.textarea`
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
`,Fs=u.div`
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
`,f0=u.div`
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
`,m0=u.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,Ns=u(ni)`
    font-size: 1.15em;
`,Bs=u(_n)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Gt`
                  animation: ${q`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Gt`
                  animation: ${q`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,Gs=u.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,Ys=u.p`
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
`,mt=d.forwardRef(({albumID:e,handleClickBack:a,model:o,modelParams:r,initialPosterJson:n},s)=>{const{t:l}=B(),h=d.useRef(null),[c,p]=d.useState(""),[m,v]=d.useState(""),[S,x]=d.useState("200"),[f,b]=d.useState("110"),[C,w]=d.useState("50"),[y,g]=d.useState((r==null?void 0:r.marginTop)??""),[E,R]=d.useState(160),[k,M]=d.useState((r==null?void 0:r.marginCover)??0),[T,I]=d.useState((r==null?void 0:r.marginBackground)??0),[_,L]=d.useState("#5900ff"),[z,V]=d.useState("#ff9100"),[P,O]=d.useState("#ff0000"),[A,H]=d.useState("#00ff40"),[W,te]=d.useState("#2600ff"),[ie,Z]=d.useState(!0),[xt,vt]=d.useState((r==null?void 0:r.useFade)??!0),[wt,f1]=d.useState((r==null?void 0:r.showTracklist)??!1),[m1,g1]=d.useState(""),[E2,x1]=d.useState(""),[R2,Ct]=d.useState(""),[ue,S2]=d.useState(null),[v1,bt]=d.useState("information");function yt(j){j1(!0),p(j.albumName||""),v(j.artistsName||""),x(j.titleSize||"200"),b(j.artistsSize||"110"),w(j.tracksSize||"50"),g(j.marginTop||""),R(j.marginSide||160),M(j.marginCover||0),I(j.marginBackground||0),L(j.backgroundColor||"#5900ff"),V(j.textColor||"#ff9100"),O(j.color1||"#ff0000"),H(j.color2||"#00ff40"),te(j.color3||"#2600ff"),Z(j.useWatermark!==void 0?j.useWatermark:!0),vt(j.useFade!==void 0?j.useFade:!0),f1(j.showTracklist!==void 0?j.showTracklist:!1),Ae(j.useUncompressed!==void 0?j.useUncompressed:!1),g1(j.albumCover||""),x1(j.uncompressedAlbumCover||""),Ct(j.customFont||""),we(j.tracklist||""),w1(j.titleRelease||""),C1(j.releaseDate||""),b1(j.titleRuntime||""),y1(j.runtime||""),Pe()}d.useEffect(()=>{if(ue){const j=new FileReader;j.onload=async F=>{const G="CustomFont",ce=new FontFace(G,F.target.result);try{const Q=await ce.load();document.fonts.add(Q),Ct(G)}catch(Q){console.error("Erro ao carregar fonte:",Q)}},j.readAsArrayBuffer(ue)}},[ue]),d.useEffect(()=>{n&&yt(n)},[n]);const[jt,Ae]=d.useState(!1),[M2,k2]=d.useState("Original"),[Ve,we]=d.useState(""),[Et,w1]=d.useState(""),[Rt,C1]=d.useState(""),[St,b1]=d.useState(""),[Mt,y1]=d.useState(""),[_2,kt]=d.useState(!1),[_t,Tt]=d.useState(null),[he,T2]=d.useState(null),[It,Ot]=d.useState(!1),[Lt,I2]=d.useState(!1),[zt,j1]=d.useState(!1),O2=j=>{x(j.target.value),Ot(!0)},L2=(j,F)=>{F&&!Lt?(x(j),I2(!0)):It||x(j)},z2={albumCover:m1,uncompressedAlbumCover:E2,useUncompressed:jt,albumName:c,artistsName:m,titleSize:S,artistsSize:f,tracksSize:C,marginTop:y,marginSide:E,marginCover:k,marginBackground:T,titleRelease:Et,releaseDate:Rt,titleRuntime:St,runtime:Mt,backgroundColor:_,textColor:z,useWatermark:ie,useFade:xt,showTracklist:wt,tracklist:Ve,color1:P,color2:A,color3:W,albumID:e,userAdjustedTitleSize:It,initialTitleSizeSet:Lt},[Ce,A2]=d.useState(null),[E1,At]=d.useState(!1),[V2,R1]=d.useState(!1),[P2,Vt]=d.useState(!1),[$2,Pt]=d.useState(!1),[H2,S1]=d.useState(!1);d.useEffect(()=>{if(E1){R1(!1);const j=setTimeout(()=>{S1(!0)},100);return()=>clearTimeout(j)}else S1(!1)},[E1]);const D2=j=>{A2(j),At(!1),Pt(!1),Wo(c,m),setTimeout(()=>{S1(!1),setTimeout(()=>{R1(!0)},300)},100)},Pe=()=>{Ot(!1),R1(!1),requestAnimationFrame(()=>{if(Pt(!0),At(!0),h.current){const j=h.current.getBoundingClientRect(),F=j.top+window.scrollY,G=j.height,Q=(window.innerHeight-G)/2;window.scrollTo({top:F-Q,behavior:"smooth"})}})},F2=j=>{g1(URL.createObjectURL(j)),Ae(!1),x1(""),k2(j.name),j1(!1)},M1=()=>{if(!Ce)return;const j=document.createElement("a");j.href=Ce,j.download=`Posterfy - ${c}.png`,j.click(),qo(c,"poster",m)};function be(j,F){const G=j.target.getBoundingClientRect();Tt({top:G.top+window.scrollY,left:G.left+window.scrollX}),T2(F),kt(!0)}function N2(){kt(!1)}const B2=()=>{const F=Ve.split(`
`).map(G=>G.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());we(F.join(`
`))},G2=()=>{const F=Ve.split(`
`).map(G=>G.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());we(F.join(`
`))};async function Y2(j,F="us"){var G;try{let ce=`https://itunes.apple.com/search?term=${encodeURIComponent(j)}&country=${F}&entity=album&limit=1`,Q=await fetch(ce);if(!Q.ok)throw new Error(`HTTP Error: ${Q.status}`);let k1=await Q.json();if(!((G=k1.results)!=null&&G.length))return console.warn("No album data found."),zt||Ae(!1),"";let J=k1.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return J.length===2?`https://a5.mzstatic.com/us/r1000/0/${J[1].split("/").slice(0,-1).join("/")}`:""}catch(ce){return console.error("Error fetching album cover:",ce.message),""}}return d.useEffect(()=>{w1(l("EDITOR_ReleaseTitle")),b1(l("EDITOR_RuntimeTitle"))},[l]),d.useEffect(()=>{const j=async()=>{var F;try{const $t=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,J=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${$t}`}})).json(),_1=J.artists.map(ye=>ye.name).join(", ");p(J.name),v(_1),g1((F=J.images[0])==null?void 0:F.url),C1(J.release_date),x1(await Y2(J.name+" "+_1));const q2=J.tracks.items.reduce((ye,$e)=>ye+$e.duration_ms,0),Ht=Math.floor(q2/1e3),Dt=Math.floor(Ht/60),Ft=Math.floor(Dt/60),Nt=Ht%60,Bt=Dt%60,W2=Ft>0?`${Ft}h ${Bt}min ${Nt}s`:`${Bt}min ${Nt}s`;y1(W2);const Z2=J.tracks.items.map((ye,$e)=>($e===3&&typeof(r==null?void 0:r.showTracklist)>"u"&&f1(!0),`${$e+1}. ${ye.name}`));we(Z2.join(`
`)),Vt(!0)}catch(G){console.error("Error trying to fetch album data:",G)}};n?(yt(n),Vt(!0)):(j1(!1),j())},[e]),d.useEffect(()=>{const j=F=>{F.ctrlKey&&F.key==="s"?(F.preventDefault(),Pe()):F.ctrlKey&&F.key==="d"&&(F.preventDefault(),M1())};return window.addEventListener("keydown",j),()=>{window.removeEventListener("keydown",j)}},[Ce,c,M1]),t.jsx(t.Fragment,{children:P2?t.jsxs(Ms,{ref:s,children:[t.jsx(l2.Palette,{src:m1,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:j})=>(d.useEffect(()=>{j&&j.length>0&&!zt&&(L(j[0]),V(j[1]),O(j[2]),H(j[3]),te(j[4]),Pe())},[j]),null)}),t.jsxs(ks,{onClick:a,children:[t.jsx(_s,{}),t.jsx(Ts,{children:l("GoBack")})]}),t.jsxs(Is,{children:[t.jsx(Rs,{onImageReady:D2,posterData:z2,generatePoster:E1,onTitleSizeAdjust:L2,customFont:R2}),t.jsxs(Ls,{children:[Ce?t.jsx(Os,{src:Ce,ref:h,visible:V2}):t.jsx(Gs,{ref:h}),t.jsx(zs,{visible:H2})]}),t.jsxs(As,{children:[t.jsx(D,{animationDelay:50,children:t.jsxs(Vs,{children:[t.jsx(h0,{$active:v1==="information",onClick:()=>bt("information"),children:l("EDITOR_InformationTab")}),t.jsx(h0,{$active:v1==="tracklist",onClick:()=>bt("tracklist"),children:l("EDITOR_TracklistTab")})]})}),v1==="information"?t.jsxs(Ps,{children:[t.jsx(D,{animationDelay:0,children:t.jsx(ae,{title:l("EDITOR_AlbumName"),value:c,onChange:j=>p(j.target.value)})}),t.jsx(D,{animationDelay:50,children:t.jsx(ae,{title:l("EDITOR_ArtistName"),value:m,onChange:j=>v(j.target.value)})}),t.jsx(D,{animationDelay:100,children:t.jsx(ae,{title:l("EDITOR_TitleSize"),value:S,onChange:O2})}),t.jsx(D,{animationDelay:150,children:t.jsx(ae,{title:l("EDITOR_ArtistSize"),value:f,onChange:j=>b(j.target.value)})}),t.jsx(D,{animationDelay:200,children:t.jsx(ae,{title:l("EDITOR_TracksSize"),value:C,onChange:j=>w(j.target.value)})}),t.jsx(D,{animationDelay:250,children:t.jsx(ae,{title:l("EDITOR_MarginTop"),value:y,onChange:j=>g(j.target.value)})}),t.jsx(D,{animationDelay:300,children:t.jsx(ae,{title:l("EDITOR_MarginSide"),value:E,onChange:j=>R(j.target.value)})}),t.jsx(D,{animationDelay:350,children:t.jsx(ae,{title:l("EDITOR_MarginCover"),value:k,onChange:j=>M(j.target.value)})}),t.jsx(D,{animationDelay:375,children:t.jsx(ae,{title:l("EDITOR_MarginBackground"),value:T,onChange:j=>I(j.target.value)})}),t.jsx(D,{animationDelay:400,children:t.jsx(r0,{title:Et,value:Rt,onChangeTitle:j=>w1(j.target.value),onChangeDate:j=>C1(j.target.value)})}),t.jsx(D,{animationDelay:450,children:t.jsx(r0,{title:St,value:Mt,onChangeTitle:j=>b1(j.target.value),onChangeDate:j=>y1(j.target.value)})}),t.jsx(D,{animationDelay:500,children:t.jsx(Re,{title:l("EDITOR_BackgroundColor"),value:_,onClick:j=>be(j,"backgroundColor")})}),t.jsx(D,{animationDelay:550,children:t.jsx(Re,{title:l("EDITOR_TextColor"),value:z,onClick:j=>be(j,"textColor")})}),t.jsx(D,{animationDelay:600,children:t.jsx(Re,{title:`${l("EDITOR_Color")} 1`,value:P,onClick:j=>be(j,"color1")})}),t.jsx(D,{animationDelay:650,children:t.jsx(Re,{title:`${l("EDITOR_Color")} 2`,value:A,onClick:j=>be(j,"color2")})}),t.jsx(D,{animationDelay:700,children:t.jsx(Re,{title:`${l("EDITOR_Color")} 3`,value:W,onClick:j=>be(j,"color3")})}),t.jsx(D,{animationDelay:800,children:t.jsx(A1,{title:l("EDITOR_Fade"),value:xt,onChange:j=>vt(j),text:l("EDITOR_FadeText")})}),t.jsx(D,{animationDelay:850,children:t.jsx(A1,{title:l("EDITOR_Uncompressed"),value:jt,onChange:j=>Ae(j),text:l("EDITOR_UncompressedText")})}),t.jsx(D,{animationDelay:900,children:t.jsx(A1,{title:l("EDITOR_Tracklist"),value:wt,onChange:j=>f1(j),text:l("EDITOR_TracklistText")})}),t.jsx(D,{animationDelay:950,children:t.jsx(V3,{title:l("EDITOR_Cover"),onChange:F2,text:M2})}),t.jsx(D,{animationDelay:1e3,children:t.jsx(B3,{title:l("EDITOR_Font"),text:(ue==null?void 0:ue.name)||l("EDITOR_DefaultFont"),onChange:S2})}),_2&&_t&&he&&t.jsx(y3,{DefaultColor:he==="backgroundColor"?_:he==="textColor"?z:he==="color1"?P:he==="color2"?A:W,image:m1,predefinedColors:[P,A,W,_,z],onDone:j=>{switch(he){case"backgroundColor":L(j);break;case"textColor":V(j);break;case"color1":O(j);break;case"color2":H(j);break;case"color3":te(j);break}Tt(null)},position:_t,onClose:N2})]}):t.jsxs($s,{children:[t.jsx(Ds,{value:Ve,onChange:j=>we(j.target.value),placeholder:l("EDITOR_TracklistPlaceholder")}),t.jsxs(Hs,{children:[t.jsx(p0,{onClick:B2,children:l("EDITOR_RemoveParentheses")}),t.jsx(p0,{onClick:G2,children:l("EDITOR_RemoveBrackets")})]})]}),t.jsx(D,{animationDelay:1050,children:t.jsxs(Fs,{children:[t.jsxs(f0,{onClick:M1,children:[t.jsx(Ns,{}),t.jsx(m0,{children:l("EDITOR_Download")})]}),t.jsxs(f0,{onClick:Pe,children:[t.jsx(Bs,{$spinning:$2}),t.jsx(m0,{children:l("EDITOR_Apply")})]})]})}),t.jsx(D,{animationDelay:1100,children:t.jsxs(Ys,{children:[l("EDITOR_Shortcuts"),": Ctrl+S (",l("EDITOR_Apply"),"), Ctrl+D (",l("EDITOR_Download"),")"]})})]})]})]}):t.jsx(s2,{})})});mt.displayName="PosterEditor";const Us=({width:e=186,backgroundColor:a="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const r=e*264/186;return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 186 264",fill:"none",children:[t.jsx("path",{fill:a,d:"M0 0h186v264H0z"}),t.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},qs=({width:e=186,bgColor:a="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)"})=>{const r=e*264/186;return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 186 264",fill:"none",children:[t.jsx("path",{fill:a,d:"M0 0h186v264H0z"}),t.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},Ws=({width:e=186,bgColor:a="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)",fillOpacity:r=1})=>{const n=e*264/186;return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[t.jsx("path",{fill:a,d:"M0 0h186v264H0z"}),t.jsx("path",{fill:o,fillOpacity:r,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),t.jsx("path",{fill:o,fillOpacity:.13*r,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},Zs=({width:e=186,backgroundColor:a="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const r=e*264/186;return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 186 264",fill:"none",children:[t.jsx("path",{fill:a,d:"M0 0h186v264H0z"}),t.jsx("path",{fill:o,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Qs=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,Js=u(Y0)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,Ks=u.h3`
  font-size: 1.3em;
  font-weight: bold;
`,gt=q`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Xs=u.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${gt} 0.7s cubic-bezier(0.23, 1, 0.32, 1);

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
`,Ge=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${gt} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Ye=u.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${gt} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,el=u.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,tl=u.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function al({onSelectModel:e,onBack:a}){const{t:o}=B(),r={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},n={marginCover:160,useFade:!1,marginTop:20},s={marginCover:-1100,marginBackground:-1200,useFade:!1},l={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function h(p,m){Uo("select_model","ModelSelector",p),e&&e(p,m)}const c=[0,.08,.16,.24];return t.jsxs(t.Fragment,{children:[t.jsxs(Qs,{onClick:a,children:[t.jsx(Js,{}),t.jsx(Ks,{children:o("GoBack")})]}),t.jsx(el,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelTitle")}),t.jsx(tl,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelText")}),t.jsxs(Xs,{children:[t.jsxs(Ge,{delay:c[0],onClick:()=>h("standart",l),children:[t.jsx(Us,{width:200}),t.jsx(Ye,{delay:c[0],children:"Standard"})]}),t.jsxs(Ge,{delay:c[1],onClick:()=>h("frame",n),children:[t.jsx(Zs,{width:200}),t.jsx(Ye,{delay:c[1],children:"Frame"})]}),t.jsxs(Ge,{delay:c[2],onClick:()=>h("basic",r),children:[t.jsx(qs,{width:200}),t.jsx(Ye,{delay:c[2],children:"Basic"})]}),t.jsxs(Ge,{delay:c[3],onClick:()=>h("fullcover",s),children:[t.jsx(Ws,{width:200}),t.jsx(Ye,{delay:c[3],children:"Full Cover"})]})]})]})}const ol=u.div`
    width: 100%;
`,rl=u.div`
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
`,nl=u(Vr)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,il=u(tr)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,sl=u.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,ll=u.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function cl({onSearch:e,value:a=""}){const{t:o}=B(),[r,n]=d.useState(a);d.useEffect(()=>{n(a)},[a]);const s=c=>{c.key==="Enter"&&(e(r),r.trim()&&Xt(r.trim()))},l=c=>{n(c.target.value)},h=()=>{e(r),r.trim()&&Xt(r.trim())};return t.jsx(ol,{children:t.jsxs(rl,{role:"search","aria-label":"Album search for poster creation",children:[t.jsx(nl,{"aria-hidden":"true"}),t.jsx(sl,{}),t.jsx(ll,{placeholder:o("SearchPlaceholder"),value:r,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),t.jsx(il,{onClick:h,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const dl=u.div`
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

`,ul=u.img`
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
`,hl=u.h3`
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
`,pl=u.p`
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
`,fl=u.div`
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
`;function ml({title:e,artist:a,cover:o,id:r,onClick:n,animationDelay:s=0}){const[l,h]=d.useState(!1);return d.useEffect(()=>{const c=setTimeout(()=>{h(!0)},s);return()=>clearTimeout(c)},[s]),t.jsxs(dl,{onClick:()=>n(r),visible:l,children:[t.jsx(ul,{src:o}),t.jsxs(fl,{children:[t.jsx(hl,{children:e}),t.jsx(pl,{children:a})]})]})}const gl=u.div`
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
`,xl=u.button`
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
`,vl=u.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;function g0({query:e,onclick:a}){const{t:o}=B(),[r,n]=d.useState([]),[s,l]=d.useState(""),[h,c]=d.useState(0),[p,m]=d.useState(!0),[v,S]=d.useState(!1),[x,f]=d.useState(!1),b=20;d.useEffect(()=>{(async()=>{const R=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(R.access_token)})()},[]),d.useEffect(()=>{n([]),c(0),m(!0)},[e]),d.useEffect(()=>{const w=async(y=!1)=>{if(s){y?f(!0):S(!0);try{let g;const E=y?h:0;if(e?g=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${b}&offset=${E}`,{headers:{Authorization:`Bearer ${s}`}}):g=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${E}&limit=${b}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!g.ok){const _=await g.text();throw new Error(`Erro na API: ${_}`)}const R=await g.json(),M=R.albums.items.filter(_=>_!=null).map(_=>{var L,z;return{id:_.id,title:_.name,artist:(L=_.artists)==null?void 0:L.map(V=>V.name).join(", "),cover:(z=_.images[0])==null?void 0:z.url}});n(y?_=>[..._,...M]:M);const T=R.albums.total,I=y?r.length+M.length:M.length;m(I<T&&M.length===b)}catch(g){console.error(g)}finally{S(!1),f(!1)}}};s&&(r.length===0||h===0)&&w(!1)},[e,s]);const C=async()=>{if(!s||!p||x)return;const w=h+b;c(w);try{f(!0);let y;if(e?y=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${b}&offset=${w}`,{headers:{Authorization:`Bearer ${s}`}}):y=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${w}&limit=${b}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!y.ok){const T=await y.text();throw new Error(`Erro na API: ${T}`)}const g=await y.json(),R=g.albums.items.filter(T=>T!=null).map(T=>{var I,_;return{id:T.id,title:T.name,artist:(I=T.artists)==null?void 0:I.map(L=>L.name).join(", "),cover:(_=T.images[0])==null?void 0:_.url}});n(T=>[...T,...R]);const k=g.albums.total,M=r.length+R.length;m(M<k&&R.length===b)}catch(y){console.error(y)}finally{f(!1)}};return t.jsx(t.Fragment,{children:v&&r.length===0?t.jsx(s2,{}):t.jsxs(t.Fragment,{children:[t.jsx(gl,{children:r.map((w,y)=>t.jsx(ml,{onClick:()=>a(w.id),cover:w.cover,title:w.title,artist:w.artist,id:w.id,animationDelay:y-h*100},w.id))}),p&&t.jsx(vl,{children:t.jsx(xl,{onClick:C,disabled:x,children:o(x?"LoadingMore":"LoadMore")})})]})})}const wl=({onBack:e})=>{const[a,o]=d.useState(""),[r,n]=d.useState(null),[s,l]=d.useState(!1),[h,c]=d.useState(null),[p,m]=d.useState(null),v=d.useRef(null);d.useEffect(()=>{s&&r&&v.current&&setTimeout(()=>{v.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[s,r]);function S(b){n(b),l(!0),c(null),m(null)}function x(){n(null),l(!1),c(null),m(null),e&&e()}const f=b=>{o(b)};return r&&h&&p?t.jsx(mt,{albumID:r,handleClickBack:x,model:h,modelParams:p,source:"search_creation"}):r&&s?t.jsx("div",{ref:v,children:t.jsx(al,{onSelectModel:(b,C)=>{c(b),m(C),l(!1)},onBack:x})}):t.jsxs(t.Fragment,{children:[t.jsx(cl,{onSearch:f,value:a}),a.trim()?t.jsx(g0,{query:a,onclick:S}):t.jsx("div",{children:t.jsx(g0,{onclick:S})})]})};function Cl({loadingComplete:e}){const{t:a}=B(),[o,r]=d.useState(null),n=d.useRef(null),s=h=>{Jo(h.albumName||"Unknown Album",h.artistsName||"Unknown Artist",h.albumID||"","album_collection"),r(h),setTimeout(()=>{if(n.current){const c=n.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:c,behavior:"smooth"})}},100)},l=()=>{r(null)};return t.jsxs(t.Fragment,{children:[t.jsx(Kn,{showAnimation:e,onRecreate:s}),t.jsx(ze,{text:a("anchorArt"),type:1}),t.jsx(ot,{title:a("ArtTitle"),paragraph:a("ArtParagraph")}),o?t.jsx(mt,{ref:n,albumID:o.albumID,initialPosterJson:o,handleClickBack:l}):t.jsx(wl,{}),t.jsx(Si,{}),t.jsx(Ci,{}),t.jsx(fi,{}),t.jsx($i,{})]})}function bl(e){return $({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}const yl=u.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({scrolled:e})=>e?"rgba(0, 0, 0, 0.15)":"transparent"};
  backdrop-filter: ${({scrolled:e})=>e?"blur(20px)":"none"};
  padding: ${({scrolled:e})=>e?"10px 0":"20px 0"};
  box-shadow: ${({scrolled:e})=>e?"0 4px 30px var(--shadowColor)":"none"};
  transform: ${({visible:e})=>e?"translateY(0)":"translateY(-100%)"};
`,jl=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 13%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,El=u.div`
  display: flex;
  align-items: center;
`;u.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`;u.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`;const Rl=u.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`;u.div`
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
`;const Sl=u.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;function v2({iconColor:e}){const[a,o]=d.useState(!1),[r,n]=d.useState(!0),[s,l]=d.useState(0),h=r1();return d.useEffect(()=>{const c=()=>{const p=window.scrollY;p<=10?(n(!0),o(!1)):(p<s?n(!0):n(!1),o(!0)),l(p)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[s]),t.jsxs(yl,{scrolled:a,visible:r,children:[t.jsxs(jl,{children:[t.jsx(El,{onClick:()=>h("/"),style:{cursor:"pointer"},children:t.jsx(le,{fill:e||"var(--AccentColor)",width:"40px",height:"44.05px"})}),t.jsx(Sl,{children:t.jsx(W0,{})})]}),t.jsx(Rl,{scrolled:a})]})}const Ml=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    
    --element-width: 60%;
    
    @media (max-width: 1300px) {
        --element-width: 75%;
    }

    @media (max-width: 1100px) {
        --element-width: 85%;
    }
    
    @media (max-width: 970px) {
        --element-width: 50%;
    }

    @media (max-width: 750px) {
        --element-width: 70%;
    }

    @media (max-width: 500px) {
        --element-width: 100%;
    }

    @media (max-width: 370px) {
        --element-width: 90%;
    }
`,w2=u.div`
    width: 50%;
    min-height: 100%;
    overflow: hidden;
    justify-content: center;
    display: flex;
    padding-inline: 80px;
    flex-direction: column;
    transition: background-color 0.6s ease-in-out;
    
    @media (max-width: 970px) {
        width: 100%;
        padding-inline: 40px;
    }
`,kl=u(w2)`
    @media (max-width: 970px) {
        display: ${e=>e.isSignUp?"none":"flex"};
    }
`,_l=u(w2)`
    @media (max-width: 970px) {
        display: ${e=>e.isSignUp?"flex":"none"};
    }
`,x0=u.h1`
    color: var(--textColor);
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    font-weight: bolder;
    text-align: left;
    margin-top: 40px;
    margin-bottom: 20px;
`,Ue=u.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: left;
    width: 100%;
    margin-top: 20px;
    font-weight: bolder;
    opacity: 0.7;
`,W1=u.button`
    background-color: var(--textColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: bolder;
    margin-top: 20px;
    width: 200px;
    font-size: 0.9em;

    &:hover {
        color: var(--AccentColor);
    }
`,fe=u.p`
    color: var(--textColor);
    font-size: 0.9em;
    margin-bottom: 8px;
    font-weight: bolder;
    width: var(--element-width);
`,me=u.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--glassBackground);
    width: var(--element-width);
    margin-bottom: 20px;
`,ge=u.input`
    border: none;
    border-radius: 10px;
    padding: 9px 16px;
    font-size: 0.9em;
    background-color: transparent;
    color: var(--textColor);
    outline: none;

    &::placeholder {
        color: var(--textColor);
        opacity: 0.7;
    }
`,Tl=u.p`
    color: var(--textColor);
    font-size: 0.8em;
    cursor: pointer;
    margin-top: 0px;
    width: var(--element-width);
    text-align: left;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
        color: var(--AccentColor);
    }
`,v0=u.p`
    color: var(--textColor);
    font-size: 0.8em;
    cursor: pointer;
    margin-top: 20px;
    width: var(--element-width);
    text-align: left;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.3s ease;
    display: none;

    &:hover {
        color: var(--AccentColor);
    }

    @media (max-width: 970px) {
        display: flex;
    }
`,w0=u(W1)`
    width: var(--element-width);
    margin-top: 30px;
    border-radius: 50px;

    &:hover {
        background-color: var(--AccentColor);
        color: var(--textColor);
    }
`,C0=u.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    width: var(--element-width);
`,qe=u.div`
    flex-grow: 1;
    height: 1px;
    width: 100%;
    background-color: var(--textColor);
    opacity: 0.2;
`,b0=u.p`
    color: var(--textColor);
    font-size: 0.9em;
    font-weight: bolder;
    margin: 0 10px;
`,y0=u.div`
    width: calc(var(--element-width) - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    border: 1px solid var(--textColor);
    border-radius: 50px;
    padding: 6px;
    font-size: 0.7em;
    font-weight: bolder;
    cursor: pointer;
    gap: 10px;

    &:hover {
        background-color: var(--textColor);
        color: var(--backgroundColor);
    }
`,We=u(bl)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`,Ze=u.div`
    opacity: ${e=>e.show?1:0};
    transform: translateX(${e=>e.show?"0":e.direction==="left"?"-20px":"20px"});
    transition: all 0.5s ease-in-out;
    display: ${e=>e.show?"flex":"none"};
    flex-direction: column;
    width: 100%;
`;function C2({}){const{t:e}=B(),[a,o]=d.useState(!1),[r,n]=d.useState(!1),[s,l]=d.useState(!1),h=r1(),c=()=>{o(!a)},p=()=>{n(!0),l(!0),setTimeout(()=>{n(!1),setTimeout(()=>{l(!1)},1300)},6e3)},m=()=>{n(!0),l(!0),setTimeout(()=>{n(!1),setTimeout(()=>{l(!1)},1300)},6e3)};return t.jsxs(Ml,{children:[s&&t.jsx(et,{isVisible:r,initialFade:!0}),t.jsx(v2,{iconColor:a?"var(--textColor)":"var(--AccentColor)"}),t.jsxs(kl,{isSignUp:a,style:{backgroundColor:a?"var(--AccentColor)":"transparent"},children:[t.jsxs(Ze,{style:{alignItems:"center"},show:!a,direction:"left",children:[t.jsx(fe,{htmlFor:"email",children:e("LOGIN_Email")}),t.jsx(me,{children:t.jsx(ge,{type:"email",id:"email"})}),t.jsx(fe,{htmlFor:"password",children:e("LOGIN_Password")}),t.jsx(me,{children:t.jsx(ge,{type:"password",id:"password"})}),t.jsx(Tl,{onClick:()=>h("/recovery"),children:e("LOGIN_ForgotPassword")}),t.jsx(w0,{onClick:p,children:e("LOGIN_Enter")}),t.jsx(v0,{onClick:c,children:e("LOGIN_SignUp")}),t.jsxs(C0,{children:[t.jsx(qe,{}),t.jsx(b0,{children:e("LOGIN_Or")}),t.jsx(qe,{})]}),t.jsxs(y0,{onClick:p,children:[t.jsx(We,{}),e("LOGIN_GoogleSignIn"),t.jsx(We,{style:{opacity:"0"}})]})]}),t.jsxs(Ze,{style:{alignItems:"center"},show:a,direction:"left",children:[t.jsx(le,{fill:"var(--backgroundColor)",width:"100px"}),t.jsx(x0,{style:{textAlign:"center"},children:e("LOGIN_Welcome")}),t.jsx(Ue,{style:{width:"70%",textAlign:"center"},children:e("LOGIN_JoinCommunity")}),t.jsx(Ue,{style:{width:"70%",textAlign:"center"},children:e("LOGIN_AlreadyHaveAccount")}),t.jsx(W1,{onClick:c,children:e("LOGIN_Enter")})]})]}),t.jsxs(_l,{isSignUp:a,style:{backgroundColor:a?"transparent":"var(--AccentColor)"},children:[t.jsxs(Ze,{style:{alignItems:"center"},show:a,direction:"right",children:[t.jsx(fe,{htmlFor:"signupName",children:e("LOGIN_Email")}),t.jsx(me,{children:t.jsx(ge,{type:"text",id:"signupName",placeholder:e("LOGIN_Email")})}),t.jsx(fe,{htmlFor:"signupEmail",children:e("LOGIN_Email")}),t.jsx(me,{children:t.jsx(ge,{type:"email",id:"signupEmail",placeholder:e("LOGIN_Email")})}),t.jsx(fe,{htmlFor:"signupPassword",children:e("LOGIN_Password")}),t.jsx(me,{children:t.jsx(ge,{type:"password",id:"signupPassword",placeholder:e("LOGIN_Password")})}),t.jsx(fe,{htmlFor:"confirmPassword",children:e("LOGIN_Password")}),t.jsx(me,{children:t.jsx(ge,{type:"password",id:"confirmPassword",placeholder:e("LOGIN_Password")})}),t.jsx(w0,{onClick:m,children:e("LOGIN_CreateAccount")}),t.jsx(v0,{onClick:c,children:e("LOGIN_AlreadyHaveAccount")}),t.jsxs(C0,{children:[t.jsx(qe,{}),t.jsx(b0,{children:e("LOGIN_Or")}),t.jsx(qe,{})]}),t.jsxs(y0,{onClick:m,children:[t.jsx(We,{}),e("LOGIN_GoogleSignIn"),t.jsx(We,{style:{opacity:"0"}})]})]}),t.jsxs(Ze,{style:{alignItems:"flex-start"},show:!a,direction:"right",children:[t.jsx(le,{fill:"var(--backgroundColor)",width:"100px"}),t.jsx(x0,{children:e("LOGIN_Welcome")}),t.jsx(Ue,{children:e("LOGIN_EnterCredentials")}),t.jsx(Ue,{children:e("LOGIN_NewHere")}),t.jsx(W1,{style:{marginRight:"auto"},onClick:c,children:e("LOGIN_CreateAccount")})]})]})]})}const Il=({width:e})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:e,height:e,children:[t.jsx("path",{id:"freepik--Floor--inject-63",fill:"var(--LoginSVG-fill)",d:"M429 469.2c0 .14-85.88.26-191.8.26s-191.83-.12-191.83-.26 85.87-.26 191.83-.26 191.8.12 191.8.26"}),t.jsxs("g",{id:"freepik--Character--inject-63",children:[t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m348.79 433 24.75 35.99 8.85.21-16.22-37.01zM87.62 434.83l-13.04 34h6.52l22.77-33.85z"}),t.jsx("path",{fill:"#3D3737",d:"m82 311.3 1 44a11.62 11.62 0 0 0 11.36 11.37l246.19 5.48a11.63 11.63 0 0 0 11.89-11.63v-53a31.31 31.31 0 0 0-27-31c-45.07-6.2-138-15.73-213.15-2.19A36.77 36.77 0 0 0 82 311.3"}),t.jsx("path",{fill:"#3D3737",d:"M80.92 326.67s-20.28-9.39-24.43 0S57 347.58 61.56 354s4.54 85.74 4.54 85.74l307.58-3.29 3.64-76.27s14.75-18.17 13.83-26-13.37-19.23-27.66-7.54-18 36.12-18 36.12l-245.23 1.85s.84-34.31-19.34-37.94"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M342.38 378c0 .14-54.49.26-121.69.26S99 378.17 99 378s54.47-.26 121.69-.26 121.69.14 121.69.26"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M99 411.6a.8.8 0 0 1 0-.24v-.71q0-.94-.06-2.73v-10c0-8.46.06-20.15-.33-33a140 140 0 0 0-1.4-18.08c-.18-.66-.36-1.32-.53-2s-.5-1.25-.76-1.86c-.53-1.21-1.07-2.37-1.66-3.46a37 37 0 0 0-3.74-5.75 26.7 26.7 0 0 0-4-4 21.7 21.7 0 0 0-3.59-2.32 36 36 0 0 0-3.39-1.36h.23l.69.19a15 15 0 0 1 2.56 1 19.7 19.7 0 0 1 3.68 2.27 26 26 0 0 1 4.08 4 36.2 36.2 0 0 1 3.84 5.78c.61 1.1 1.16 2.26 1.7 3.48.27.61.52 1.24.77 1.87l.57 2a135 135 0 0 1 1.45 18.17c.39 12.9.26 24.59.18 33.05-.06 4.19-.11 7.6-.14 10v3.4299999999999997c-.15.18-.15.27-.15.27M78.53 344.37a1.44 1.44 0 0 1 .81-.25 3.44 3.44 0 0 1 2.26.63 3.5 3.5 0 0 1 1.1 1.25 3.05 3.05 0 0 1 .29 1.9 3.73 3.73 0 0 1-2.87 3.1 3.8 3.8 0 0 1-3.8-1.81 3.44 3.44 0 0 1-.49-1.86 3.84 3.84 0 0 1 2.17-3.26 1.75 1.75 0 0 1 .83-.21c0 .05-.29.12-.74.39a3.85 3.85 0 0 0-1.45 1.62 3.08 3.08 0 0 0 .12 3 3.36 3.36 0 0 0 3.3 1.55 3.29 3.29 0 0 0 2.49-2.63 2.83 2.83 0 0 0-1.14-2.77 3.36 3.36 0 0 0-2-.73c-.58.03-.87.13-.88.08"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M79.92 364.11a4.7 4.7 0 0 1-1.39-1.64 9.83 9.83 0 0 1-.12-10 4.9 4.9 0 0 1 1.35-1.68c.07.06-.45.69-1 1.85a10.6 10.6 0 0 0-1.12 4.84 10.75 10.75 0 0 0 1.23 4.82c.58 1.14 1.13 1.76 1.05 1.81M76.7 334.42a8.4 8.4 0 0 1-.3 1.5 9.22 9.22 0 0 0 1.46 6.87 11 11 0 0 1 .89 1.24s-.56-.28-1.19-1a8.09 8.09 0 0 1-1.56-7.2 3.2 3.2 0 0 1 .7-1.41M70.71 345.48c.12-.1 1.05.84 2.47 1.57s2.71 1 2.69 1.12a4.4 4.4 0 0 1-2.93-.66 4.47 4.47 0 0 1-2.23-2.03M374.86 411.6c0 .14-69.37.26-154.94.26S65 411.74 65 411.6s69.36-.26 155-.26 154.86.11 154.86.26"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M341.31 363.05c.15 0 .26 10.86.26 24.25s-.11 24.27-.26 24.27-.26-10.86-.26-24.27.12-24.25.26-24.25M238.6 279.14h-.48l-1.4.05-5.37.15-19.78.46-65.24 1.31c-6.37.15-12.6.13-18.58.53a62.8 62.8 0 0 0-16.93 3.09A29.9 29.9 0 0 0 98 293.2a28.2 28.2 0 0 0-4 5.8 37 37 0 0 0-2.45 6 56.6 56.6 0 0 0-2 11c-.31 3.3-.34 6.15-.36 8.49s0 4.14.07 5.37v1.88-.48c0-.32 0-.8-.08-1.4-.06-1.22-.14-3-.16-5.37s0-5.2.27-8.52a56.5 56.5 0 0 1 2-11.11 37.6 37.6 0 0 1 2.44-6.11 28.1 28.1 0 0 1 4-5.92 30.3 30.3 0 0 1 13-8.6 62.4 62.4 0 0 1 17-3.15c6-.4 12.24-.39 18.61-.54l65.25-1.16 19.77-.29 5.38-.06h1.4ZM159.86 313.4s-.33.16-.84.55a4.57 4.57 0 0 0-1.55 2.17 3.84 3.84 0 0 0 .55 3.71 4 4 0 0 0 7.31-1.74 3.88 3.88 0 0 0-1.18-3.57 4.6 4.6 0 0 0-2.36-1.23c-.63-.11-1-.07-1-.11a1.93 1.93 0 0 1 1-.09 4.66 4.66 0 0 1 3.75 2.79 4.1 4.1 0 0 1 .23 2.3 4.51 4.51 0 0 1-8.16 1.94 4.14 4.14 0 0 1-.83-2.15 4.6 4.6 0 0 1 .31-2 4.53 4.53 0 0 1 1.78-2.21 2 2 0 0 1 .99-.36"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M155.65 339.31a12 12 0 0 1-.76-3 17 17 0 0 1 .16-7.38 10.1 10.1 0 0 1 4.31-5.94 6.8 6.8 0 0 1 2.09-.85 2 2 0 0 1 .82-.08 12.8 12.8 0 0 0-2.72 1.24 10.26 10.26 0 0 0-4 5.77 18.7 18.7 0 0 0-.3 7.18c.24 1.9.48 3.04.4 3.06M159.29 298a23 23 0 0 0-1.47 2.2 8.76 8.76 0 0 0 2.57 11.28 22 22 0 0 0 2.29 1.35 1.8 1.8 0 0 1-.72-.15 7.8 7.8 0 0 1-1.78-.9 8.7 8.7 0 0 1-2.69-11.78 7.6 7.6 0 0 1 1.22-1.58c.34-.35.56-.49.58-.42M158.37 318a50 50 0 0 0-5.42 1.22 52 52 0 0 0-5.06 2.3 14.47 14.47 0 0 1 10.48-3.52"}),t.jsx("path",{d:"M126.06 378.94a50.26 50.26 0 0 0 34 10.25q-3.8 17.63-7.58 35.27c-.67 3.13-1.3 6.62.34 9.38 2.3 3.87 7.65 4.25 12.15 4.19 5-.07 10.22-.19 14.66-2.51 6.29-3.28 9.67-10.24 12.11-16.9s4.55-13.8 9.57-18.81a39 39 0 0 0 22.15 12.61c2.5.46 5.34.6 7.34-1s2.57-4.42 2.06-6.9a20.7 20.7 0 0 0-3.27-6.79l-14.64-22.7c-2-3.07-4.14-6.31-7.49-7.77-2.63-1.15-5.61-1-8.47-.87a391 391 0 0 0-70.87 10.71",opacity:"0.3"}),t.jsx("path",{d:"M204.28 266.4c-5.92 15.64-28 19.23-35.79 34-7.67 14.64 1.84 34-6.06 48.56-2.93 5.38-8 9.39-10.82 14.81-1.92 3.64-2.91 8-6 10.69-3.62 3.15-9.23 3.09-13.58 1.05s-7.69-5.7-10.79-9.37c-5.8-6.88-11.25-14.32-14-22.91-4.66-14.77-.38-31.48 9-43.82s23.27-20.67 37.94-25.66 30.19-6.87 45.62-8.32",opacity:"0.3"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M133.18 225.27a24.3 24.3 0 0 1 9-8.31 15.92 15.92 0 0 1 12-1.21 11.92 11.92 0 0 1 8 8.64c.63 3.21-.23 6.79 1.43 9.61 1.9 3.24 6.49 4.26 8.11 7.66a7.39 7.39 0 0 1-.49 6.53 20.3 20.3 0 0 1-4.39 5.14 10.8 10.8 0 0 1 2.74 2.46 3.73 3.73 0 0 1 .58 3.5 5.14 5.14 0 0 1-3 2.4 29.55 29.55 0 0 1-17.69 1.66c-1.58-.34-3.39-.77-4.69.19"}),t.jsx("path",{fill:"#b78876",d:"m173.21 237.14-3.21 9.79 21.86 12.41-22 .71 1.64 17.83 42.35-10.4s2.54-17.27-40.64-30.34l-3-.72a3.43 3.43 0 0 1-2.41-2.09 3.7 3.7 0 0 0-1.8-1.93l-3.61-1.88v2.86l2 2.33-.32 5.53a5 5 0 0 0 3.84 5.22l2 .47"}),t.jsx("path",{fill:"#fafafa",d:"M125.32 272.54c-.87 0-8.94 2-13.56 7.84s-11.3 27.94-11.3 27.94l17 2.94 7.34 18.43s43.45-5.69 41.14-8a89 89 0 0 0-7-5.81l10-33.31 12-6.48-4.05-16.64-24.17 3.27Z"}),t.jsx("path",{fill:"#3D3737",d:"M166.86 290.27c0 .14-13.55.26-30.25.26s-30.26-.12-30.26-.26 13.55-.26 30.26-.26 30.25.12 30.25.26M164.15 300.06c0 .14-13.55.26-30.25.26s-30.26-.12-30.26-.26 13.54-.26 30.26-.26 30.25.12 30.25.26M164.15 310.63c0 .15-10.26.27-22.92.27s-22.91-.12-22.91-.27 10.26-.26 22.91-.26 22.92.12 22.92.26M167.66 320.82c0 .14-10.26.26-22.91.26s-22.91-.12-22.91-.26 10.25-.26 22.91-.26 22.91.11 22.91.26M178.51 277.1c0 .15-6.78.26-15.13.26s-15.14-.11-15.14-.26 6.77-.26 15.14-.26 15.13.16 15.13.26M179.61 266.72c0 .15-6.75.42-15.07.61s-15.09.24-15.09.1 6.74-.42 15.07-.62 15.09-.23 15.09-.09"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M121 295.35a67 67 0 0 1-1.63 8.18 68 68 0 0 1-2.13 8.07 68 68 0 0 1 1.62-8.18 65 65 0 0 1 2.14-8.07"}),t.jsx("path",{fill:"#b78876",d:"m168.3 420.21-12.66 39.93 15.26 1.54 14.34-34.7z"}),t.jsx("path",{fill:"#455a64",d:"m179.47 446.14-7.27 18s15.88 13.45 14.86 16.91l-35.46-12.81 10.17-28.56Z"}),t.jsx("path",{fill:"#e0e0e0",d:"M161.79 458.66a1.54 1.54 0 0 0-1.6 1.29 1.48 1.48 0 0 0 1.26 1.6 1.63 1.63 0 0 0 1.69-1.37c0-.76-.75-1.63-1.5-1.52M151.6 468.24l1.14-2.84 33.58 13.38s1.33 1.25.74 2.3Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M172.84 464.2c-.07.17-1-.06-2 .18s-1.77.82-1.9.69.48-1 1.76-1.31 2.23.29 2.14.44M176 467.08c0 .19-.88.21-1.73.73S173 469 172.8 469s.07-1.09 1.14-1.71 2.12-.37 2.06-.21M176.5 472.3c-.17 0-.1-1 .69-1.76s1.74-.87 1.76-.7-.67.5-1.3 1.15-.97 1.36-1.15 1.31M174 459.91c-.13.13-.84-.4-1.84-.69s-1.88-.25-1.92-.43.93-.54 2.1-.18 1.83 1.19 1.66 1.3M175.44 456.24a3.6 3.6 0 0 1-1.77-.65 8 8 0 0 1-1.65-1.25 7.3 7.3 0 0 1-.83-.91 2.3 2.3 0 0 1-.38-.61.8.8 0 0 1 .25-.95 1 1 0 0 1 .9-.12 3 3 0 0 1 .64.33 7 7 0 0 1 1 .78 6.7 6.7 0 0 1 1.25 1.67 3.1 3.1 0 0 1 .52 1.82c-.1 0-.3-.66-.91-1.59a7.4 7.4 0 0 0-1.26-1.46 6 6 0 0 0-.91-.69c-.34-.23-.66-.35-.81-.22s-.07.08 0 .21a2.2 2.2 0 0 0 .29.45 11 11 0 0 0 .74.88 11.4 11.4 0 0 0 1.48 1.28 13 13 0 0 1 1.45 1.03"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M175.12 456.41a3 3 0 0 1 .16-1.89 6.06 6.06 0 0 1 1.79-2.77 1.57 1.57 0 0 1 1.45-.49.91.91 0 0 1 .57.77 2.3 2.3 0 0 1-.06.72 4.1 4.1 0 0 1-.43 1.19 4.3 4.3 0 0 1-1.42 1.56c-1 .67-1.83.62-1.82.55a15 15 0 0 0 1.55-.91 4.3 4.3 0 0 0 1.17-1.47 4 4 0 0 0 .34-1c.08-.39.05-.75-.11-.76s-.58.11-.83.36a6 6 0 0 0-.79.8 7.2 7.2 0 0 0-1 1.65c-.41.98-.46 1.7-.57 1.69"}),t.jsx("path",{fill:"#b78876",d:"m216.35 382.62 18.9 32.85 15.46-9.92-18.98-33.35z"}),t.jsx("path",{fill:"#455a64",d:"m245.37 396.16 9.77 16.84s20.36-4.28 22.47-1.35l-31.92 20.1-16.29-25.59Z"}),t.jsx("path",{fill:"#e0e0e0",d:"M244.39 417.81a1.53 1.53 0 0 0 0 2.05 1.48 1.48 0 0 0 2 0 1.63 1.63 0 0 0-.05-2.18 1.55 1.55 0 0 0-2.12.25M245.69 431.73l-1.54-2.64 31.18-18.28s1.81-.28 2.28.82Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M255.55 412.49c.09.16-.64.72-1.09 1.7s-.45 1.9-.63 1.93-.52-1 0-2.2 1.66-1.6 1.72-1.43M259.77 411.76c.13.13-.38.82-.49 1.82s.17 1.78 0 1.87-.81-.72-.65-2 1.04-1.83 1.14-1.69M264.2 414.57c-.13.13-.83-.51-1-1.62s.38-1.9.53-1.82 0 .83.11 1.74.5 1.59.36 1.7M252.9 408.9c0 .19-.83.42-1.67 1s-1.35 1.32-1.52 1.24.15-1.06 1.15-1.77 2.04-.64 2.04-.47M250.87 405.55c0 .06-.51.55-1.6 1a9.3 9.3 0 0 1-2 .54 12 12 0 0 1-1.23.09 2.5 2.5 0 0 1-.72-.08.8.8 0 0 1-.59-.78 1 1 0 0 1 .46-.79 2.8 2.8 0 0 1 .65-.29 6.55 6.55 0 0 1 3.29-.25c1.18.22 1.8.65 1.76.71s-.7-.17-1.81-.26a7.8 7.8 0 0 0-1.94.1 7 7 0 0 0-1.09.29c-.4.13-.69.31-.68.51s0 .1.15.16a2 2 0 0 0 .53.05 10.1 10.1 0 0 0 3.06-.43 12.6 12.6 0 0 1 1.76-.57"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M250.81 405.9c0 .06-.7-.31-1.4-1.28a6 6 0 0 1-.88-1.89 6.6 6.6 0 0 1-.21-1.22 1.57 1.57 0 0 1 .52-1.45.88.88 0 0 1 .94 0 2.6 2.6 0 0 1 .54.48 4.6 4.6 0 0 1 .68 1.08 4.4 4.4 0 0 1 .35 2.08c-.1 1.22-.63 1.82-.68 1.77a16 16 0 0 0 .23-1.78 4.35 4.35 0 0 0-.44-1.82 3.8 3.8 0 0 0-.61-.91c-.26-.3-.56-.5-.67-.38a1.06 1.06 0 0 0-.23.87 6.6 6.6 0 0 0 .15 1.12 6.8 6.8 0 0 0 .7 1.79c.54.98 1.08 1.46 1.01 1.54M160.09 378l37.12-25.24 23.41 45.57 21.28-11.53s-24.51-59.8-33.31-61.7c-4.93-1.08-61.47 9.71-61.47 9.71l-6.32-3.17-16-1.95-1 2.59a54.58 54.58 0 0 0 1.78 44.12l.78 1.59Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M147.06 346.42c.28 1.25 31 30 31 30l-17.7 59.49 26.42 5.05 26.53-71.66-48.49-47.57-22.19 9.27Z"}),t.jsx("path",{fill:"#455a64",d:"M197.21 352.75c.08.12-8.17 5.86-18.41 12.83S160.18 378.1 160.09 378s8.16-5.87 18.41-12.84 18.62-12.53 18.71-12.41"}),t.jsx("path",{fill:"#455a64",d:"M216.26 389.83a8.8 8.8 0 0 1-.9-1.37c-.55-.9-1.31-2.23-2.24-3.87-1.85-3.29-4.31-7.89-6.91-13s-4.9-9.82-6.51-13.23c-.81-1.71-1.45-3.1-1.88-4.06a8.3 8.3 0 0 1-.61-1.52 11 11 0 0 1 .8 1.43l2 4c1.74 3.45 4.07 8.06 6.64 13.17s5 9.75 6.77 13.08c.85 1.61 1.56 2.94 2.1 3.95a10.3 10.3 0 0 1 .74 1.42M183.57 365.78a47.6 47.6 0 0 1-2.84 6.38 47.5 47.5 0 0 1-3.31 6.14 94 94 0 0 1 6.15-12.52"}),t.jsx("path",{fill:"#b78876",d:"m100.46 308.32-6 22.16a11.56 11.56 0 0 0 1 8.53 11.62 11.62 0 0 0 12.85 5.81l47.55-11.71-5-9.88-37.46 3.25 4-15.22Z"}),t.jsx("path",{fill:"#455a64",d:"m121.55 341.95.62-3.22 25.77-4.63 7.49-39.73 47.86-5.7-8.04 42.41z"}),t.jsx("path",{fill:"#ebebeb",d:"M176.92 315.77a2.7 2.7 0 1 1 2.77-2.19 2.51 2.51 0 0 1-2.77 2.19"}),t.jsx("path",{fill:"#b78876",d:"m128.55 228 .09 2.87 1.08 43c.13 5 4.52 8.86 9.86 8.68 5.4-.17 9.74-4.4 9.7-9.45-.05-5.29 0-10.87 0-10.87s6.81-1.21 8.12-10.13c.65-4.43.34-11.69-.1-17.62a9.4 9.4 0 0 0-10.47-8.64Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M153.85 239.47a1.15 1.15 0 0 1-1.09 1.17 1.09 1.09 0 0 1-1.18-1 1.15 1.15 0 0 1 1.08-1.17 1.1 1.1 0 0 1 1.19 1M155.77 238.31c-.14.15-1-.48-2.24-.47s-2.12.65-2.26.5.08-.34.47-.63a3.15 3.15 0 0 1 1.8-.58 3.1 3.1 0 0 1 1.79.55c.38.32.51.56.44.63M141.73 239.91a1.14 1.14 0 0 1-1.09 1.17 1.1 1.1 0 0 1-1.19-1 1.14 1.14 0 0 1 1.09-1.16 1.09 1.09 0 0 1 1.19.99M143.7 238.68c-.14.15-1-.48-2.24-.47s-2.12.65-2.26.5.07-.34.46-.63a3.2 3.2 0 0 1 1.81-.58 3.06 3.06 0 0 1 1.78.55c.38.29.52.56.45.63M148.26 247.73a8.2 8.2 0 0 1 2-.38c.32 0 .61-.1.66-.32a1.56 1.56 0 0 0-.22-.92l-.95-2.38a41 41 0 0 1-2.16-6.22 39 39 0 0 1 2.65 6l.92 2.39a1.87 1.87 0 0 1 .18 1.23.81.81 0 0 1-.51.47 2.3 2.3 0 0 1-.54.08 7.9 7.9 0 0 1-2.03.05"}),t.jsx("path",{fill:"#aa6550",d:"M149.28 262.26a22.6 22.6 0 0 1-12-3s3 6.08 11.86 5.14Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M144.19 236.65c-.13.33-1.35.12-2.8.22s-2.63.45-2.81.14c-.08-.15.14-.45.62-.75a4.6 4.6 0 0 1 2.11-.63 4.7 4.7 0 0 1 2.17.35c.52.24.77.52.71.67M155.26 234c-.22.28-1.07 0-2.08 0s-1.88.21-2.08-.08 0-.42.41-.69a3 3 0 0 1 3.36.07c.36.32.48.61.39.7"}),t.jsx("path",{fill:"#aa6550",d:"M148.13 252.18a2.1 2.1 0 0 1-1.07-.11l-1-.28c-.28-.09-.59-.22-.94-.35a2 2 0 0 1-.92-.55c-.21-.27-.17-.75.31-1.18a2.59 2.59 0 0 1 4 1.33c.21.63-.05 1.05-.38 1.14"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M148.3 252.07c-.12.09-.72-1.14-2.16-1.51a5.24 5.24 0 0 0-2.61.29s.16-.32.65-.57a3 3 0 0 1 2.09-.22 3 3 0 0 1 1.73 1.2c.31.45.36.79.3.81M138.85 222.22a11.21 11.21 0 0 1-1.61 14c-2.13 2-5.3 3.53-5.51 6.43-.24 3.21 3.48 5.61 3.48 8.83s-3.81 5.42-4.56 8.65c-.6 2.6 1 5.2 2.76 7.17s4 3.71 5 6.15a10.92 10.92 0 0 1-.3 8.57 27.1 27.1 0 0 1-5 7.19 33.8 33.8 0 0 0-8.24-1.83c.17-1.06.35-2.13.53-3.19a2.93 2.93 0 0 1-2.15 2.7 7.9 7.9 0 0 1-3.68.05 60 60 0 0 1-11-2.83 19.8 19.8 0 0 0 4-5 6.67 6.67 0 0 0 .11-6.2c-.88-1.5-2.5-2.46-3.31-4-1.21-2.3-.21-5.22 1.51-7.17s4.06-3.22 6.11-4.82 3.93-3.76 4.09-6.36c.22-3.36-2.51-6.43-2.17-9.78.38-3.82 4.42-6.16 6-9.66 1.15-2.53 1-5.65 2.76-7.8a6.71 6.71 0 0 1 5.53-2.2 12.44 12.44 0 0 1 5.76 2M150 263.22c-1.6.88-1.51 3.33-.53 4.88s2.55 2.66 3.52 4.22a6.92 6.92 0 0 1-1.63 8.82l3.84 1.45.84-.47 2.36-1.34-1.11 2.73h2.46a7 7 0 0 0 5.78-11.15c-1-1.4-2.58-2.51-2.93-4.2-.41-2.05 1.14-3.9 1.89-5.84a8.25 8.25 0 0 0-2.68-9.33"})]}),t.jsxs("g",{id:"freepik--Sreen--inject-63",children:[t.jsx("path",{fill:"#fff",d:"M237.76 47.12h206.45v313.39H237.76z"}),t.jsx("path",{fill:"#f5f5f5",d:"M237.34 63.08h206.51v134.87H237.34z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M287.79 217v3h4.41v1.08h-4.41v3.56h-1.26v-8.8h6.22V217ZM293.51 221.34a3.47 3.47 0 1 1 3.47 3.41 3.32 3.32 0 0 1-3.47-3.41m5.71 0a2.25 2.25 0 1 0-2.24 2.35 2.19 2.19 0 0 0 2.24-2.35M305.7 217.94v1.17h-.28a2 2 0 0 0-2.1 2.25v3.32h-1.21V218h1.16v1.11a2.57 2.57 0 0 1 2.43-1.17M313.49 218v5.75c0 2.36-1.19 3.42-3.45 3.42a4.88 4.88 0 0 1-3.18-1l.57-.93a4.08 4.08 0 0 0 2.57.87c1.57 0 2.29-.73 2.29-2.24v-.53a3.06 3.06 0 0 1-2.4 1 3.23 3.23 0 1 1 0-6.45 3 3 0 0 1 2.46 1.1v-1Zm-1.18 3.15a2.3 2.3 0 0 0-4.59 0 2.3 2.3 0 0 0 4.59 0M315.18 221.34a3.47 3.47 0 1 1 3.47 3.41 3.32 3.32 0 0 1-3.47-3.41m5.71 0a2.25 2.25 0 1 0-2.24 2.35 2.19 2.19 0 0 0 2.24-2.35M327.53 224.28a2.32 2.32 0 0 1-1.46.47 1.9 1.9 0 0 1-2.11-2.09V219h-1.14v-1H324v-1.46h1.2V218h1.91v1h-1.91v3.61a1 1 0 0 0 1 1.12 1.52 1.52 0 0 0 .94-.32ZM339.27 221.34a3.24 3.24 0 0 1-3.37 3.41 2.83 2.83 0 0 1-2.32-1.09v3.45h-1.21V218h1.16v1.05a2.83 2.83 0 0 1 2.37-1.12 3.24 3.24 0 0 1 3.37 3.41m-1.22 0a2.25 2.25 0 1 0-2.25 2.35 2.2 2.2 0 0 0 2.25-2.35M346.16 220.65v4H345v-.88a2.49 2.49 0 0 1-2.19 1c-1.51 0-2.46-.81-2.46-2s.69-1.95 2.67-1.95H345v-.23c0-1-.6-1.61-1.79-1.61a3.35 3.35 0 0 0-2.11.71l-.5-.9a4.38 4.38 0 0 1 2.75-.86c1.78.01 2.81.89 2.81 2.72m-1.2 2v-.93h-1.86c-1.2 0-1.54.47-1.54 1s.55 1.08 1.47 1.08a1.94 1.94 0 0 0 1.97-1.17ZM347.56 224l.5-1a4.3 4.3 0 0 0 2.34.69c1.12 0 1.58-.34 1.58-.9 0-1.5-4.21-.2-4.21-2.86 0-1.19 1.07-2 2.78-2a4.83 4.83 0 0 1 2.43.61l-.52.95a3.47 3.47 0 0 0-1.92-.53c-1.06 0-1.57.39-1.57.92 0 1.57 4.22.29 4.22 2.88 0 1.21-1.1 2-2.88 2a4.8 4.8 0 0 1-2.75-.76M353.86 224l.5-1a4.3 4.3 0 0 0 2.34.69c1.12 0 1.58-.34 1.58-.9 0-1.5-4.21-.2-4.21-2.86 0-1.19 1.07-2 2.78-2a4.83 4.83 0 0 1 2.43.61l-.52.95a3.47 3.47 0 0 0-1.92-.53c-1.06 0-1.57.39-1.57.92 0 1.57 4.22.29 4.22 2.88 0 1.21-1.1 2-2.88 2a4.8 4.8 0 0 1-2.75-.76M371 218l-2.49 6.66h-1.16l-1.92-5-1.95 5h-1.16l-2.51-6.66H361l1.94 5.3 2-5.3h1l2 5.33 2-5.33ZM371.38 221.34a3.46 3.46 0 1 1 3.47 3.41 3.32 3.32 0 0 1-3.47-3.41m5.7 0a2.24 2.24 0 1 0-2.23 2.35 2.18 2.18 0 0 0 2.23-2.35M383.56 217.94v1.17h-.28a2 2 0 0 0-2.1 2.25v3.32H380V218h1.15v1.11a2.57 2.57 0 0 1 2.41-1.17M391.27 215.34v9.33h-1.16v-1.06a2.81 2.81 0 0 1-2.38 1.14 3.41 3.41 0 0 1 0-6.81 2.85 2.85 0 0 1 2.33 1.07v-3.67Zm-1.2 6a2.25 2.25 0 1 0-2.24 2.35 2.19 2.19 0 0 0 2.24-2.35M397.49 218.19c0-.8-.66-1.35-1.8-1.35a2.7 2.7 0 0 0-2.25 1l-.91-.65a3.88 3.88 0 0 1 3.25-1.41c1.81 0 3 .84 3 2.24 0 2.1-2.22 2.23-2.22 3.88h-1.26c-.02-1.98 2.19-2.26 2.19-3.71m-2.39 5.75a.82.82 0 0 1 1.63 0 .82.82 0 0 1-1.63 0"}),t.jsx("path",{d:"M422.61 242.73c0 .15-35.38.26-79 .26s-79-.11-79-.26 35.37-.26 79-.26 79 .12 79 .26M388.88 251.18c0 .14-20.27.26-45.28.26s-45.29-.12-45.29-.26 20.28-.26 45.29-.26 45.28.08 45.28.26"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M374.6 144.09a24.08 24.08 0 1 0-37.36-5.71l-4.9 4.57 1.18 8.13-7.61-2.08-6.13 5.72 1.22 8.08-7.6-2.13-5.27 4.91.72 5-4.64-1.3-3.06 2.86-.46 7.53 11.23 2.83 36.45-34a24.09 24.09 0 0 0 26.23-4.41m-3.6-29.61a6.91 6.91 0 1 1-9.76-.34 6.91 6.91 0 0 1 9.76.34"}),t.jsx("path",{fill:"none",d:"M374.6 144.09a24.08 24.08 0 1 0-37.36-5.71l-4.9 4.57 1.18 8.13-7.61-2.08-6.13 5.72 1.22 8.08-7.6-2.13-5.27 4.91.72 5-4.64-1.3-3.06 2.86-.46 7.53 11.23 2.83 36.45-34a24.09 24.09 0 0 0 26.23-4.41m-3.6-29.61a6.91 6.91 0 1 1-9.76-.34 6.91 6.91 0 0 1 9.76.34"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M371 114.48s-.45-.42-1.37-1a7 7 0 0 0-4.35-.95 6.65 6.65 0 1 0 7.26 7.78 6.86 6.86 0 0 0-.65-4.4c-.5-1-.94-1.4-.89-1.44s.13.09.33.3a5.5 5.5 0 0 1 .77 1 6.85 6.85 0 0 1 .86 4.58 7.11 7.11 0 0 1-8.35 5.87 7.13 7.13 0 0 1-5.8-6.22 7.11 7.11 0 0 1 6.43-7.92 6.86 6.86 0 0 1 4.52 1.18 5.3 5.3 0 0 1 1 .83c.24.26.3.38.24.39"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M374.6 144.09s-.11.12-.35.33l-1.06 1a25 25 0 0 1-4.66 3 24.21 24.21 0 0 1-20.29.29h.2l-36.39 34.06-.1.11h-.15l-11.23-2.82-.23-.05v-.24c.14-2.35.29-4.92.45-7.53V172l.08-.08L304 169l.11-.11h.16l4.64 1.3-.37.32c-.23-1.55-.47-3.25-.72-5v-.15l.11-.1 5.27-4.92.12-.12h.16l7.6 2.13-.37.33c-.37-2.58-.77-5.34-1.17-8.13v-.16l.12-.1 1.62-1.52 4.51-4.2.12-.12h.16l7.61 2.13-.38.33q-.59-4.11-1.17-8.13v-.15l.11-.11 4.9-4.57-.05.36a24.5 24.5 0 0 1-3.13-11 23 23 0 0 1 .4-5.57 23.6 23.6 0 0 1 1.6-5.24 24.3 24.3 0 0 1 44.07-1 24.14 24.14 0 0 1 2.37 12.64 23.7 23.7 0 0 1-2.7 9.27c-.15.3-.3.58-.45.86l-.49.76c-.33.49-.6 1-.92 1.37-.65.78-1.15 1.48-1.64 2l-1.2 1.33-.39.36s.11-.14.35-.4l1.08-1.15c.47-.5 1-1.21 1.59-2 .3-.41.56-.89.88-1.37.16-.25.32-.5.48-.77l.44-.85A23.87 23.87 0 1 0 336.37 117a23.5 23.5 0 0 0-1.56 5.12 23 23 0 0 0-.38 5.44 24 24 0 0 0 3.07 10.7l.11.2-.17.16-4.89 4.57.09-.26q.58 4 1.17 8.14l.07.45-.45-.12-7.6-2.13.29-.07-4.51 4.2-1.61 1.49.09-.27c.4 2.79.8 5.56 1.17 8.13l.07.46-.45-.12-7.6-2.14.28-.07c-1.81 1.7-3.61 3.37-5.27 4.92l.1-.26c.24 1.71.48 3.41.71 5l.06.44-.43-.12-4.63-1.3.27-.07-3.07 2.86.09-.19c-.16 2.61-.32 5.18-.46 7.53l-.21-.29 11.23 2.83-.25.07 36.5-33.94.09-.08h.11a24.07 24.07 0 0 0 20.06-.14 26.4 26.4 0 0 0 4.68-2.86l1.09-.91Z"}),t.jsx("path",{fill:"#3D3737",d:"M373.79 141.36a24.07 24.07 0 1 0-37.35-5.72l-4.89 4.56 1.17 8.14-7.6-2.14-6.12 5.73 1.17 8.13-7.6-2.13-5.27 4.92.71 5-4.63-1.29-3.07 2.86-.46 7.53 11.23 2.82 36.45-34a24.06 24.06 0 0 0 26.26-4.41m-3.56-29.61a6.91 6.91 0 1 1-9.76-.34 6.9 6.9 0 0 1 9.76.34"}),t.jsx("path",{fill:"none",d:"M373.79 141.36a24.07 24.07 0 1 0-37.35-5.72l-4.89 4.56 1.17 8.14-7.6-2.14-6.12 5.73 1.17 8.13-7.6-2.13-5.27 4.92.71 5-4.63-1.29-3.07 2.86-.46 7.53 11.23 2.82 36.45-34a24.06 24.06 0 0 0 26.26-4.41m-3.56-29.61a6.91 6.91 0 1 1-9.76-.34 6.9 6.9 0 0 1 9.76.34"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M370.23 111.75s-.45-.42-1.37-1a6.85 6.85 0 0 0-4.34-1 6.64 6.64 0 1 0 7.26 7.78 6.85 6.85 0 0 0-.66-4.4c-.5-1-.93-1.4-.89-1.44s.13.09.34.3a5.5 5.5 0 0 1 .76 1 6.84 6.84 0 0 1 .86 4.59 7.12 7.12 0 0 1-8.34 5.87 7.12 7.12 0 0 1-5.85-6.15 7.13 7.13 0 0 1 6.43-7.92 6.85 6.85 0 0 1 4.52 1.19 5 5 0 0 1 1 .83c.21.22.3.34.28.35"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M373.79 141.36s-.11.12-.34.33l-1.06.94a25.4 25.4 0 0 1-4.66 3 24.24 24.24 0 0 1-20.3.29h.2l-36.38 34.06-.11.1H311l-11.24-2.82-.22-.06v-.23c.14-2.35.3-4.92.45-7.53v-.12l.08-.07 3.07-2.87.12-.11h.16l4.63 1.29-.37.33c-.22-1.55-.47-3.25-.72-5v-.15l.12-.11 5.26-4.91.12-.12.17.05 7.6 2.13-.38.33-1.17-8.11v-.16l.11-.11 1.63-1.51 4.5-4.2.12-.12.17.05 7.6 2.13-.38.33q-.59-4.11-1.17-8.13v-.16l.12-.1 4.9-4.57-.06.36a24.5 24.5 0 0 1-3.13-11 23.5 23.5 0 0 1 .4-5.57 23.8 23.8 0 0 1 1.6-5.24 24.25 24.25 0 0 1 46.44 11.63 23.7 23.7 0 0 1-2.7 9.27l-.45.86-.49.76c-.33.49-.6 1-.91 1.37-.65.78-1.15 1.48-1.64 2l-1.16 1.11c-.25.25-.39.37-.39.37s.12-.15.36-.41l1.07-1.14c.47-.5 1-1.21 1.59-2 .3-.4.57-.88.89-1.37l.48-.76.43-.86a23.7 23.7 0 0 0 2.59-9.19 23.86 23.86 0 0 0-45.64-11.39 23.5 23.5 0 0 0-1.55 5.12 22.5 22.5 0 0 0-.38 5.44 24 24 0 0 0 3.06 10.7l.12.2-.17.16-4.9 4.57.09-.26q.59 4 1.17 8.13l.07.46-.44-.13-7.63-2.14.28-.07-4.5 4.21-1.63 1.51.09-.26c.41 2.79.8 5.55 1.17 8.13l.07.46-.44-.13-7.61-2.13.29-.07-5.27 4.91.09-.25c.24 1.71.49 3.4.71 4.95l.06.45-.43-.12-4.63-1.3.27-.07-3.06 2.86.09-.2c-.16 2.61-.32 5.19-.47 7.53l-.21-.29 11.23 2.84-.25.07 36.5-33.94.09-.08.11.05a24.18 24.18 0 0 0 20.06-.14 27 27 0 0 0 4.69-2.86l1.08-.91Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M371.58 139.48a32.5 32.5 0 0 0 3.24-4.08 20.2 20.2 0 0 0 2.47-5.54 21.1 21.1 0 0 0 .69-8 20.85 20.85 0 0 0-3.17-9.12 21.1 21.1 0 0 0-8.18-7.4 19.5 19.5 0 0 0-5.69-1.92 23 23 0 0 0-3.09-.36 24 24 0 0 0-3.17.16 20.79 20.79 0 0 0-18.07 16.85 24 24 0 0 0-.38 3.15 23 23 0 0 0 .15 3.11 19.4 19.4 0 0 0 1.52 5.81 21 21 0 0 0 6.82 8.67 20.7 20.7 0 0 0 8.87 3.8 21 21 0 0 0 8-.13 20.4 20.4 0 0 0 5.7-2.09 32 32 0 0 0 4.29-2.94s-.07.09-.24.24l-.75.68a10 10 0 0 1-1.29 1 14.6 14.6 0 0 1-1.9 1.22 20.2 20.2 0 0 1-5.74 2.21 21.33 21.33 0 0 1-24.27-12.45 20 20 0 0 1-1.58-6A19.4 19.4 0 0 1 336 120a21.34 21.34 0 0 1 18.58-17.33 19.9 19.9 0 0 1 6.43.22 20.4 20.4 0 0 1 5.84 2 21.5 21.5 0 0 1 8.35 7.63 21.45 21.45 0 0 1 2.42 17.48 20 20 0 0 1-2.61 5.58 13.6 13.6 0 0 1-1.34 1.8 10 10 0 0 1-1.1 1.22l-.73.7c-.16.11-.25.19-.26.18"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M370.61 122.39c-.05 0 .5-.52 1.17-1.59a8 8 0 0 0 1.14-5.11 7.81 7.81 0 0 0-4.29-6.17 7.7 7.7 0 0 0-4.46-.79 7.83 7.83 0 0 0-6.28 10.81 8.06 8.06 0 0 0 2.54 3.25 8 8 0 0 0 3.32 1.45 8 8 0 0 0 5.18-.79c1.12-.59 1.63-1.11 1.68-1.06s-.11.15-.36.38a6 6 0 0 1-1.21.89 8.16 8.16 0 0 1-8.9-.47 8.32 8.32 0 0 1-3.3-8.28 8.31 8.31 0 0 1 7.26-6.76 8.24 8.24 0 0 1 4.79.87 8.4 8.4 0 0 1 3.24 3 8.21 8.21 0 0 1-.15 8.91 6.3 6.3 0 0 1-1 1.14c-.22.23-.36.34-.37.32M308.12 178.39c-.11-.12 8.09-8 18.33-17.51s18.63-17.19 18.74-17.07-8.09 8-18.33 17.51-18.63 17.19-18.74 17.07"}),t.jsx("path",{fill:"#3D3737",d:"m312.64 130.67.34-.74.44.68a3.44 3.44 0 0 0 1.46 1.24l.75.33-.68.45a3.4 3.4 0 0 0-1.25 1.46l-.33.74-.45-.68a3.4 3.4 0 0 0-1.46-1.24l-.74-.33.68-.45a3.3 3.3 0 0 0 1.24-1.46M290.33 125.11l.19-.43.26.39a1.9 1.9 0 0 0 .85.72l.43.2-.4.26a2 2 0 0 0-.72.84l-.19.44-.26-.4a1.9 1.9 0 0 0-.85-.72l-.43-.2.39-.25a2.07 2.07 0 0 0 .73-.85M360.6 163.14l.19-.43.26.4a2.1 2.1 0 0 0 .85.72l.43.19-.39.26a1.9 1.9 0 0 0-.72.85l-.2.43-.26-.39a2 2 0 0 0-.84-.73l-.44-.19.4-.26a1.9 1.9 0 0 0 .72-.85M395 143.64l.33-.74.45.68a3.4 3.4 0 0 0 1.46 1.24l.74.33-.68.45a3.4 3.4 0 0 0-1.24 1.46l-.34.74-.44-.68a3.5 3.5 0 0 0-1.46-1.24l-.75-.33.68-.45a3.4 3.4 0 0 0 1.25-1.46M390.53 116.32l.56-1.25.75 1.15a5.8 5.8 0 0 0 2.45 2.09l1.25.55-1.15.75a5.87 5.87 0 0 0-2.09 2.46l-.56 1.25-.75-1.15a5.8 5.8 0 0 0-2.45-2.09l-1.25-.56 1.15-.75a5.8 5.8 0 0 0 2.09-2.45M305.71 107.9l.56-1.25.75 1.14a5.7 5.7 0 0 0 2.45 2.09l1.25.56-1.14.75a5.65 5.65 0 0 0-2.09 2.45l-.56 1.25-.75-1.14a5.7 5.7 0 0 0-2.46-2.09l-1.24-.56 1.14-.75a5.7 5.7 0 0 0 2.09-2.45"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M411.88 298.31s.32 0 .94-.08a6 6 0 0 0 1.16-.13l.73-.12.83-.22a13.4 13.4 0 0 0 4.08-1.82 14.36 14.36 0 0 0 5.8-7.6 14.3 14.3 0 0 0 .66-3.94v-2.15l-.06-1.1c0-.37-.11-.74-.17-1.11a14.6 14.6 0 0 0-1.59-4.41 14.2 14.2 0 0 0-7.87-6.48 16 16 0 0 0-5.61-.74h-6.06l-129.39.08a14.12 14.12 0 0 0-8.6 2.93 14.9 14.9 0 0 0-3.12 3.32 14.2 14.2 0 0 0-1.87 4.12 15.5 15.5 0 0 0-.43 2.22c0 .75-.1 1.5-.08 2.27a15 15 0 0 0 .54 4.44 14.7 14.7 0 0 0 1.85 4 15.2 15.2 0 0 0 3 3.21 13.7 13.7 0 0 0 3.8 2.13 15 15 0 0 0 2.07.61 16 16 0 0 0 2.15.25c2.89.07 5.81 0 8.67 0h16.81l58.17.05 39.22.09 10.66.05h3.72-3.72l-10.66.05-39.22.08-58.17.06H274.6a17 17 0 0 1-2.22-.25 16 16 0 0 1-2.15-.64 14 14 0 0 1-3.93-2.2 14.4 14.4 0 0 1-5-7.49 15.8 15.8 0 0 1-.56-4.58c0-.76 0-1.55.08-2.32a16.4 16.4 0 0 1 .45-2.3 14.9 14.9 0 0 1 1.94-4.28 15.1 15.1 0 0 1 3.24-3.44 14.6 14.6 0 0 1 8.91-3l129.39.07h6.06a16.7 16.7 0 0 1 5.72.77 14.55 14.55 0 0 1 8 6.65 14.8 14.8 0 0 1 1.61 4.51l.17 1.13v3.29a14.7 14.7 0 0 1-.69 4 15 15 0 0 1-1.59 3.32 14.2 14.2 0 0 1-4.34 4.34 13.8 13.8 0 0 1-4.14 1.8l-.84.2-.74.11a7 7 0 0 1-1.16.11Z"}),t.jsx("rect",{width:"165.26",height:"30.07",x:"260.97",y:"304.74",fill:"#3D3737",rx:"14.35"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M294.15 289.27a7 7 0 0 1 0-.89c0-.62 0-1.43-.05-2.43 0-2.14-.06-5.1-.11-8.67l.21.2-17.87.06.26-.26v11.97l-.24-.24 12.81.12 3.7.06h1.36a10 10 0 0 1-1.26.06l-3.65.06-13 .12H276V277.3c-.23.23.32-.32.26-.27l17.87.06h.21v.21c-.05 3.63-.09 6.63-.11 8.8 0 1 0 1.78-.06 2.39a6 6 0 0 1-.02.78"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M294.15 277.28a24 24 0 0 1-2.5 2.4c-1.58 1.44-3.8 3.39-6.26 5.53H285l-.06-.05-.12-.1-.23-.2-.45-.39-.88-.77-1.67-1.47-2.8-2.5a24 24 0 0 1-2.5-2.4 22 22 0 0 1 2.71 2.07l2.87 2.42 1.69 1.44.89.76.46.4.22.2.12.09.06.05H285c2.47-2.13 4.72-4 6.37-5.41a22 22 0 0 1 2.78-2.07"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M282.73 282.86a19.3 19.3 0 0 1-3 3.39 20.2 20.2 0 0 1-3.41 3 20.2 20.2 0 0 1 3-3.39 20.6 20.6 0 0 1 3.41-3M294.15 289.27a19.6 19.6 0 0 1-3.21-3.22 20.5 20.5 0 0 1-2.82-3.56 20 20 0 0 1 3.21 3.22 20 20 0 0 1 2.82 3.56M304.94 285.67v.4h-4.15v-6h4v.4h-3.58v2.37h3.2v.39h-3.2v2.46ZM313.77 283.45v2.62h-.43v-2.59c0-1-.53-1.55-1.4-1.55a1.58 1.58 0 0 0-1.64 1.75v2.39h-.43v-2.59c0-1-.53-1.55-1.4-1.55a1.58 1.58 0 0 0-1.64 1.75v2.39h-.43v-4.49h.41v1a1.78 1.78 0 0 1 1.72-1 1.59 1.59 0 0 1 1.64 1.08 1.89 1.89 0 0 1 1.81-1.08 1.68 1.68 0 0 1 1.79 1.87M318.77 283.22v2.85h-.41v-.8a1.75 1.75 0 0 1-1.62.83c-1 0-1.61-.51-1.61-1.28s.43-1.25 1.67-1.25h1.54v-.36a1.17 1.17 0 0 0-1.33-1.28 2.36 2.36 0 0 0-1.55.56l-.21-.31a2.74 2.74 0 0 1 1.79-.63 1.52 1.52 0 0 1 1.73 1.67m-.43 1.52v-.84h-1.53c-.93 0-1.25.39-1.25.9s.45.95 1.24.95a1.54 1.54 0 0 0 1.54-1.01M320.4 280.15a.35.35 0 0 1 .35-.35.35.35 0 1 1-.35.35m.13 1.43h.47v4.49h-.43ZM322.77 279.69h.43v6.38h-.43Z"}),t.jsx("path",{fill:"#fff",d:"m310.67 323.81-1.62-2.27a5 5 0 0 1-.66 0h-1.94v2.22H306V317h2.43c1.7 0 2.73.85 2.73 2.29a2.08 2.08 0 0 1-1.59 2.12l1.7 2.37Zm-2.28-2.65c1.45 0 2.23-.68 2.23-1.84s-.78-1.85-2.23-1.85h-1.94v3.69ZM317.05 321.4h-4.35a2 2 0 0 0 2.14 2 2.06 2.06 0 0 0 1.62-.7l.28.32a2.41 2.41 0 0 1-1.91.82 2.48 2.48 0 0 1-2.6-2.57 2.42 2.42 0 1 1 4.83 0s-.01.08-.01.13m-4.34-.38h3.88a1.94 1.94 0 0 0-3.88 0M317.82 323.2l.22-.39a3 3 0 0 0 1.82.61c1.07 0 1.5-.37 1.5-.95 0-1.47-3.36-.38-3.36-2.37 0-.76.64-1.38 1.92-1.38a3.13 3.13 0 0 1 1.74.49l-.23.39a2.6 2.6 0 0 0-1.52-.46c-1 0-1.42.41-1.42.95 0 1.52 3.35.45 3.35 2.38 0 .82-.71 1.38-2 1.38a3.16 3.16 0 0 1-2.02-.65M327.47 321.4h-4.35a2 2 0 0 0 2.14 2 2.06 2.06 0 0 0 1.62-.7l.28.32a2.43 2.43 0 0 1-1.91.82 2.49 2.49 0 0 1-2.61-2.57 2.42 2.42 0 0 1 2.43-2.56 2.39 2.39 0 0 1 2.41 2.54s-.01.1-.01.15m-4.34-.38H327a1.94 1.94 0 0 0-3.87 0M331.49 323.49a1.55 1.55 0 0 1-1 .36 1.25 1.25 0 0 1-1.37-1.38v-3.3h-.93v-.42h.93v-1.1h.48v1.1h1.61v.42h-1.61v3.26c0 .65.32 1 .94 1a1.16 1.16 0 0 0 .79-.28ZM340.65 319.32c0 1.42-1 2.27-2.73 2.27H336v2.22h-.5V317h2.44c1.68 0 2.71.88 2.71 2.32m-.5 0c0-1.18-.78-1.85-2.23-1.85H336v3.68h1.94c1.43 0 2.21-.67 2.21-1.83M345.77 320.6v3.21h-.47v-.9a1.94 1.94 0 0 1-1.82.94c-1.13 0-1.82-.58-1.82-1.44s.48-1.42 1.89-1.42h1.73v-.4a1.32 1.32 0 0 0-1.5-1.45 2.63 2.63 0 0 0-1.75.64l-.24-.35a3.13 3.13 0 0 1 2-.71 1.72 1.72 0 0 1 1.98 1.88m-.49 1.72v-.95h-1.72c-1.05 0-1.42.44-1.42 1s.51 1.06 1.41 1.06a1.72 1.72 0 0 0 1.73-1.11M347 323.2l.22-.39a2.93 2.93 0 0 0 1.82.61c1.07 0 1.49-.37 1.49-.95 0-1.47-3.35-.38-3.35-2.37 0-.76.64-1.38 1.92-1.38a3.07 3.07 0 0 1 1.73.49l-.22.39a2.6 2.6 0 0 0-1.52-.46c-1 0-1.43.41-1.43.95 0 1.52 3.36.45 3.36 2.38 0 .82-.71 1.38-2 1.38a3.14 3.14 0 0 1-2.02-.65M351.65 323.2l.22-.39a3 3 0 0 0 1.82.61c1.07 0 1.5-.37 1.5-.95 0-1.47-3.36-.38-3.36-2.37 0-.76.64-1.38 1.92-1.38a3.13 3.13 0 0 1 1.74.49l-.23.39a2.6 2.6 0 0 0-1.52-.46c-1 0-1.42.41-1.42.95 0 1.52 3.35.45 3.35 2.38 0 .82-.71 1.38-2 1.38a3.16 3.16 0 0 1-2.02-.65M364.16 318.75l-1.92 5.06h-.46l-1.7-4.39-1.72 4.39h-.44l-1.92-5.06h.46l1.69 4.52 1.73-4.52h.41l1.72 4.51 1.7-4.51ZM364.59 321.28a2.53 2.53 0 1 1 2.52 2.57 2.45 2.45 0 0 1-2.52-2.57m4.56 0a2 2 0 1 0-2 2.13 2 2 0 0 0 2-2.13M373.54 318.72v.47h-.12c-1.12 0-1.79.75-1.79 2v2.63h-.48v-5.06h.46v1.11a1.92 1.92 0 0 1 1.93-1.15M379.32 316.62v7.19h-.47v-1.19a2.25 2.25 0 0 1-2.07 1.23 2.57 2.57 0 0 1 0-5.13 2.26 2.26 0 0 1 2.06 1.21v-3.31Zm-.48 4.66a2 2 0 1 0-2 2.13 2 2 0 0 0 2-2.13"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M443.84 63.08c0 .14-46.23.26-103.25.26s-103.25-.12-103.25-.26 46.22-.26 103.25-.26 103.25.12 103.25.26M249 54.88a2.51 2.51 0 1 1-2.51-2.52 2.51 2.51 0 0 1 2.51 2.52M256.26 54.88a2.51 2.51 0 1 1-2.51-2.52 2.51 2.51 0 0 1 2.51 2.52M263.48 54.88a2.51 2.51 0 1 1-2.48-2.52 2.51 2.51 0 0 1 2.48 2.52"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M444.21 360.5c0-2.14-.1-128.94-.24-313.38l.24.24H237.42l.26-.26c0 118.26 0 227.29-.06 313.38l-.2-.2 206.81.2-206.81.21h-.21v-.21c0-86.09 0-195.12-.05-313.38v-.26h207.31v.24c-.16 184.48-.26 311.29-.26 313.42"})]})]}),Ol=({width:e})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:e,height:e,children:[t.jsxs("g",{id:"freepik--Padlock--inject-81",children:[t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72"}),t.jsx("path",{d:"M75.85 74.66a36.14 36.14 0 0 0-19.73 47.08l22.41 54.7 10-4.11-22.4-54.71a25.23 25.23 0 0 1 46.7-19.12l10.05-4.12a36.12 36.12 0 0 0-47.03-19.72",opacity:"0.3"}),t.jsx("rect",{width:"97.29",height:"62.42",x:"65.15",y:"136.1",fill:"var(--LoginSVG-fill)",rx:"5.81",transform:"rotate(-22.27 113.786 167.288)"}),t.jsx("path",{d:"M118.23 156.7a8.13 8.13 0 1 0-6.62 11.13l4.6 11.25 4.11-1.68-4.61-11.25a8.1 8.1 0 0 0 2.52-9.45",opacity:"0.5"}),t.jsx("path",{fill:"#fafafa",d:"M83.16 207.18c-.21.09-4.32-9.48-9.18-21.36s-8.65-21.58-8.44-21.67 4.32 9.48 9.18 21.37 8.64 21.58 8.44 21.66M108.76 171.85a2.8 2.8 0 0 1-1.08-.14 10.1 10.1 0 0 1-2.75-1.19 11.38 11.38 0 0 1-2.73-17.36 9.5 9.5 0 0 1 2.25-2c.6-.37 1-.51 1-.47a26 26 0 0 0-2.8 2.79 11.28 11.28 0 0 0 2.6 16.53 26.4 26.4 0 0 0 3.51 1.84"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m44.94 181.71.49-1.42.93 1.18a6.2 6.2 0 0 0 2.88 2l1.42.49-1.18.93a6.34 6.34 0 0 0-2 2.88l-.48 1.45-1-1.17a6.3 6.3 0 0 0-2.89-2l-1.41-.49 1.17-.93a6.34 6.34 0 0 0 2.07-2.92M92.4 125.92l.28-.82.54.68A3.7 3.7 0 0 0 94.9 127l.82.28-.68.55a3.63 3.63 0 0 0-1.19 1.67l-.28.82-.57-.72a3.54 3.54 0 0 0-1.67-1.18l-.83-.29.69-.54a3.7 3.7 0 0 0 1.21-1.67M35.33 132.87l.82-2.39 1.57 2a10.5 10.5 0 0 0 4.84 3.42l2.38.82-2 1.57a10.57 10.57 0 0 0-3.43 4.84l-.82 2.38-1.56-2a10.5 10.5 0 0 0-4.84-3.43l-2.38-.82 2-1.56a10.6 10.6 0 0 0 3.42-4.83"})]}),t.jsxs("g",{id:"freepik--Device--inject-81",children:[t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m311.06 479.9-147.61-.09a32.16 32.16 0 0 1-32.14-32.16l.07-370.07a32.16 32.16 0 0 1 32.18-32.15l147.61.08a32.16 32.16 0 0 1 32.14 32.16l-.07 370.08a32.16 32.16 0 0 1-32.18 32.15"}),t.jsx("path",{fill:"#fff",d:"M311 58.6h-28.6a7.1 7.1 0 0 0-6.95 7.26V71a7.11 7.11 0 0 1-6.95 7.26h-55.78a7.12 7.12 0 0 1-7-7.27v-5.18a7.11 7.11 0 0 0-6.95-7.27H163.7A22.53 22.53 0 0 0 141.16 81l-.07 361.22a22.52 22.52 0 0 0 22.51 22.52l147.32.09a22.51 22.51 0 0 0 22.53-22.52l.07-361.21A22.52 22.52 0 0 0 311 58.6"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M223.63 437.25a2.83 2.83 0 1 1-2.86-2.8 2.84 2.84 0 0 1 2.86 2.8M239.47 437.12a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M255.32 437a2.83 2.83 0 1 1-2.85-2.8 2.83 2.83 0 0 1 2.85 2.8M311.88 95.08c0 .08-3.73.18-8.32.22s-8.31 0-8.31-.09S299 95 303.56 95s8.31 0 8.32.08M311.91 99.33c0 .09-3.72.19-8.31.23s-8.32 0-8.32-.09 3.72-.19 8.32-.23 8.31 0 8.31.09M312 103.58c0 .09-3.73.19-8.32.23s-8.31 0-8.31-.09 3.72-.18 8.31-.22 8.26 0 8.32.08M160.65 108.44h1.34l3.56-.08-.09.09v-2.57a15 15 0 0 1 0-1.48 1.33 1.33 0 0 1 1.17-1.08h1.7a1.35 1.35 0 0 1 1.15 1.35v3.76l-.15-.15h4.48l-.15.15v-7a1.17 1.17 0 0 0-.18-.58 4 4 0 0 0-.46-.49c-.66-.65-1.31-1.3-2-1.93l-1.89-1.86c-.3-.31-.61-.61-.91-.91s-.56-.62-.94-.69a1.21 1.21 0 0 0-1 .2c-.27.23-.56.55-.83.82l-1.61 1.62c-1 1-2.06 2-2.83 2.92a3.2 3.2 0 0 0-.22 1.68v6.33-2.14c0-.6 0-1.58-.05-2.56v-2.49a1.83 1.83 0 0 1 .25-.93c.83-1 1.82-1.91 2.84-3l1.59-1.63c.29-.28.53-.57.86-.86a1.51 1.51 0 0 1 1.29-.25 2.4 2.4 0 0 1 1.06.76l.92.9 1.9 1.86 2 1.93a3.8 3.8 0 0 1 .5.54 1.5 1.5 0 0 1 .23.74v7.16h-4.78v-3.9a1.11 1.11 0 0 0-.92-1.11h-1.63a1.11 1.11 0 0 0-1 .88v4.1H161a1.6 1.6 0 0 1-.35-.1M198.47 194.2c0 3.47-2.6 5.63-6.76 5.63h-3.13v4.28H185v-15.55h6.73c4.14 0 6.74 2.16 6.74 5.64m-3.65 0c0-1.71-1.11-2.71-3.31-2.71h-2.93v5.4h2.93c2.2 0 3.31-1 3.31-2.69M211.24 197.29v6.82H208v-1.49a3.93 3.93 0 0 1-3.64 1.67c-2.8 0-4.47-1.55-4.47-3.62s1.49-3.58 5.13-3.58h2.76c0-1.49-.89-2.35-2.76-2.35a5.73 5.73 0 0 0-3.44 1.11l-1.25-2.42a9.2 9.2 0 0 1 5.16-1.45c3.64.02 5.75 1.69 5.75 5.31m-3.46 3.05v-1.22h-2.38c-1.62 0-2.13.59-2.13 1.39s.73 1.49 1.95 1.49a2.55 2.55 0 0 0 2.56-1.66M213.22 203l1.16-2.49a8.1 8.1 0 0 0 4.15 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.76 9.76 0 0 1 4.6 1.05l-1.15 2.46a7 7 0 0 0-3.45-.89c-1.55 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8a10.2 10.2 0 0 1-5.18-1.29M225 203l1.15-2.49a8.2 8.2 0 0 0 4.16 1.16c1.6 0 2.2-.42 2.2-1.09 0-2-7.22 0-7.22-4.73 0-2.27 2-3.87 5.53-3.87a9.8 9.8 0 0 1 4.6 1.05l-1.16 2.46a6.9 6.9 0 0 0-3.44-.89c-1.56 0-2.22.49-2.22 1.12 0 2 7.22.06 7.22 4.77 0 2.22-2.07 3.8-5.64 3.8A10.2 10.2 0 0 1 225 203M256.94 192.16l-4.33 12h-3.33l-2.69-7.42-2.78 7.42h-3.33l-4.31-12h3.27l2.82 8.09 2.93-8.09h2.93l2.85 8.09 2.91-8.09ZM257.35 198.14c0-3.6 2.77-6.16 6.57-6.16s6.56 2.56 6.56 6.16-2.76 6.15-6.56 6.15-6.57-2.55-6.57-6.15m9.62 0a3.06 3.06 0 1 0-3.05 3.31 3 3 0 0 0 3.08-3.31ZM280.21 192v3.2h-.78c-1.91 0-3.18 1-3.18 3.33v5.64h-3.46v-12h3.31v1.58a4.8 4.8 0 0 1 4.11-1.75M294.34 187.63v16.48H291v-1.37a4.61 4.61 0 0 1-3.73 1.55 6.16 6.16 0 0 1 0-12.31 4.57 4.57 0 0 1 3.57 1.45v-5.8Zm-3.4 10.51a3.06 3.06 0 1 0-3 3.31 3 3 0 0 0 3-3.31"}),t.jsx("path",{fill:"#e0e0e0",d:"M321 217c0 .14-37 .26-82.69.26s-82.71-.12-82.71-.26 37-.26 82.71-.26 82.69.09 82.69.26M317.15 369.23c0 .15-37 .26-82.7.26s-82.7-.11-82.7-.26 37-.26 82.7-.26 82.7.12 82.7.26M279.74 380.67c0 .14-20.57.26-45.94.26s-45.94-.12-45.94-.26 20.56-.26 45.94-.26 45.94.11 45.94.26"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m170.5 261.3 3.13 1.69-1.41 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.17 1.9-1.35-2.35 3.1-1.7-3.14-1.73 1.38-2.35 3.17 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM206.42 261.3l3.13 1.69-1.41 2.36-3.14-1.87V267h-2.71v-3.51l-3.16 1.9-1.31-2.39 3.18-1.7-3.13-1.73 1.38-2.35 3.16 1.89v-3.5H205l-.06 3.5 3.16-1.89 1.41 2.35ZM241.38 261.3l3.13 1.69-1.41 2.36-3.16-1.87.06 3.52h-2.7v-3.51l-3.17 1.9-1.35-2.39 3.14-1.69-3.14-1.73 1.38-2.35 3.17 1.89v-3.5H240l-.06 3.5 3.16-1.89 1.41 2.35ZM275.25 261.3l3.13 1.69-1.38 2.36-3.16-1.87.06 3.48h-2.7v-3.51l-3.16 1.9-1.39-2.35 3.14-1.69-3.14-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.06 3.5 3.16-1.89 1.41 2.35ZM308.85 261.3 312 263l-1.41 2.36-3.16-1.87.05 3.48h-2.7v-3.51l-3.16 1.9-1.36-2.36 3.13-1.69-3.13-1.73 1.38-2.35 3.16 1.89v-3.5h2.7l-.05 3.5 3.16-1.89 1.41 2.35Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M176.07 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM211.26 283.08h-15.15A7.08 7.08 0 0 1 189 276v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.03 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.15a6.57 6.57 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56ZM245.49 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM280.1 283.08h-15.16a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.16a7.07 7.07 0 0 1 7.06 7.06V276a7.07 7.07 0 0 1-7.06 7.08m-15.16-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.58 6.58 0 0 0 6.57 6.57h15.16a6.57 6.57 0 0 0 6.56-6.57v-26.9a6.56 6.56 0 0 0-6.56-6.56ZM313.7 283.08h-15.15a7.08 7.08 0 0 1-7.07-7.07v-26.9a7.07 7.07 0 0 1 7.07-7.06h15.15a7.07 7.07 0 0 1 7.07 7.06V276a7.08 7.08 0 0 1-7.07 7.08m-15.15-40.53a6.57 6.57 0 0 0-6.57 6.56V276a6.57 6.57 0 0 0 6.57 6.57h15.15a6.58 6.58 0 0 0 6.57-6.57v-26.9a6.57 6.57 0 0 0-6.57-6.56Z"}),t.jsx("rect",{width:"169.79",height:"29.74",x:"154.09",y:"315.56",fill:"var(--LoginSVG-fill)",rx:"11.29"}),t.jsx("path",{fill:"#fff",d:"M217.55 324.45h4.57c3.29 0 5.55 2 5.55 5s-2.26 5-5.55 5h-4.57Zm4.45 8.15a3.12 3.12 0 1 0 0-6.24h-2.13v6.24ZM228.69 330.65a4.26 4.26 0 1 1 4.26 4 4 4 0 0 1-4.26-4m6.23 0a2 2 0 1 0-4 0 2 2 0 1 0 4 0M246.59 330.09v4.42h-2.24v-4.08c0-1.25-.58-1.82-1.57-1.82s-1.85.66-1.85 2.08v3.82h-2.24v-7.73h2.14v.91a3.4 3.4 0 0 1 2.56-1c1.82-.02 3.2 1.04 3.2 3.4M256.24 331.28h-5.85a2.07 2.07 0 0 0 2.21 1.55 2.6 2.6 0 0 0 1.94-.75l1.2 1.3a4.05 4.05 0 0 1-3.19 1.25c-2.68 0-4.42-1.68-4.42-4a3.93 3.93 0 0 1 4.13-4 3.82 3.82 0 0 1 4 4c.02.22-.01.46-.02.65m-5.88-1.28h3.81a1.93 1.93 0 0 0-3.81 0"}),t.jsx("circle",{cx:"237.31",cy:"143.52",r:"30.05",fill:"var(--LoginSVG-fill)"}),t.jsx("path",{fill:"#fff",d:"M232 138.05h-.5v-2.8a5.86 5.86 0 0 1 11.72 0v2.28h-.5v-2.28a5.36 5.36 0 0 0-10.72 0Z"}),t.jsx("path",{fill:"#fff",d:"M244.76 157.65h-14.9a2.48 2.48 0 0 1-2.47-2.47v-14.91a2.48 2.48 0 0 1 2.47-2.47h14.9a2.48 2.48 0 0 1 2.47 2.47v14.91a2.48 2.48 0 0 1-2.47 2.47m-14.9-19.35a2 2 0 0 0-2 2v14.91a2 2 0 0 0 2 2h14.9a2 2 0 0 0 2-2v-14.94a2 2 0 0 0-2-2Z"}),t.jsx("path",{fill:"#fff",d:"M237.38 148.21a2.34 2.34 0 1 1 2.34-2.34 2.34 2.34 0 0 1-2.34 2.34m0-4.17a1.84 1.84 0 1 0 1.84 1.83 1.84 1.84 0 0 0-1.84-1.87Z"}),t.jsx("path",{fill:"#fff",d:"M237.06 147.86h.5v4.22h-.5z"})]}),t.jsxs("g",{id:"freepik--Character--inject-81",children:[t.jsx("path",{fill:"#ffbe9d",d:"m446.31 458.77-18.87-43.53-21.65 13.9 22.96 39.79 11.51-5.16z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m445.89 456.34.62 1.24s25.15-2.15 27.38 1.71L432.25 480l-6.33-14.14c7.62-.2 14.26-3.1 19.97-9.52"}),t.jsx("path",{fill:"#fff",d:"M432.34 468.21a1.89 1.89 0 0 0-.21 2.52 1.82 1.82 0 0 0 2.5.23 2 2 0 0 0 .21-2.67 1.9 1.9 0 0 0-2.63 0M432.25 480l-1.52-3.4 40.46-18.6s2.26-.11 2.7 1.3Z",opacity:"0.6"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M446.72 457.62c.09.21-.88.8-1.55 2s-.79 2.27-1 2.28-.51-1.31.33-2.69 2.17-1.8 2.22-1.59M452 457.25c.15.18-.56 1-.82 2.16s0 2.22-.22 2.31-.91-1-.55-2.49 1.47-2.17 1.59-1.98M457.07 461.24c-.17.14-1-.74-1-2.11s.7-2.29.87-2.16-.12 1-.08 2.14.4 2.01.21 2.13"}),t.jsx("path",{fill:"#ffbe9d",d:"m410.82 466.33.72-47.45-25.45 3.76 4.54 45.72 12.62.03z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m411.43 463.94.07 1.38s23.8 8.4 24.24 12.83l-46.48 1.74.05-15.49c7.03 2.94 14.28 3.03 22.12-.46"}),t.jsx("path",{fill:"#fff",d:"M394.2 469.17a1.91 1.91 0 0 0-1.23 2.22 1.83 1.83 0 0 0 2.19 1.24 2 2 0 0 0 1.29-2.36 1.89 1.89 0 0 0-2.42-1M389.26 479.89v-3.72l44.54-.31s2.11.82 1.93 2.29Z",opacity:"0.6"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M411.66 465.44c0 .23-1.13.38-2.22 1.15s-1.64 1.74-1.86 1.66.08-1.4 1.41-2.31 2.71-.71 2.67-.5M416.61 467.28c.06.21-.9.64-1.64 1.63s-.92 2-1.15 2-.41-1.28.52-2.5 2.26-1.35 2.27-1.13M419.6 473c-.2.05-.56-1.07 0-2.33s1.58-1.8 1.69-1.62-.53.88-1 1.92-.46 2.03-.69 2.03M392.51 272.89l-.95-37.36-36.36 1.91-1.2 4.42a200 200 0 0 0-4.76 20.8c-2.44 15.65-2.15 29.89 4 46.62S369 357.82 369 357.82l36.07 99.63 42-13.81Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m414.5 234.32 3.17 10.35c4.66 3 12.19 17.7 12.88 23.72s2 26.63.63 50.79c-1.17 19.87-11 136.17-11 136.17l-39.74 2.1 4.14-188.06 1.75-33.58Z"}),t.jsx("path",{fill:"#455a64",d:"M346.4 266.1a6.4 6.4 0 0 0 1.38.41 23 23 0 0 0 3.87.52 25.25 25.25 0 0 0 22.23-11 21.7 21.7 0 0 0 1.93-3.4 6 6 0 0 0 .51-1.34c-.1-.05-.85 1.87-2.76 4.52a26.07 26.07 0 0 1-21.89 10.85 52 52 0 0 1-5.27-.56M413 246.12a2.7 2.7 0 0 0 .23.87 19 19 0 0 0 .92 2.24 29 29 0 0 0 10.48 11.9 20 20 0 0 0 2.11 1.19 3 3 0 0 0 .83.34c.05-.09-1.06-.69-2.72-1.86a33.1 33.1 0 0 1-10.35-11.74c-.97-1.79-1.43-2.97-1.5-2.94M394.27 277.88s.1.25.27.77l.73 2.29c.64 2 1.57 5 2.76 8.81 2.38 7.68 5.82 18.76 10.07 32.45 8.62 27.36 19.57 65.47 34.25 106.72q2.52 7.41 5 14.63l.08.26-.25.08-42 13.79-.23.08-.08-.23-24.15-67-6.87-19.19c-.79-2.22-1.39-3.94-1.81-5.11q-.3-.86-.45-1.32l-.15-.45s.07.14.18.44.28.74.5 1.3l1.88 5.08c1.63 4.47 4 11 7 19.15l24.32 66.9-.3-.15 42-13.82-.17.33q-2.46-7.22-5-14.63c-14.68-41.26-25.57-79.38-34.1-106.77-4.18-13.72-7.56-24.82-9.91-32.5-1.15-3.84-2.05-6.81-2.66-8.85-.3-1-.53-1.77-.68-2.3s-.23-.76-.23-.76M430 169.45s-1.9-10.63-7.35-15.72-28.16-10.85-28.16-10.85.27 7.89-4.81 10c-5.38 2.25-10.76 1.49-15-3a21.74 21.74 0 0 1-5.17-9.89s-26.92 3.93-30.75 11.23-7.84 35-7.84 35l24.39 3.85-.79 47.38 64.1-3.37-3.62-44.21 17.58 1.57Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.17 191.4a5 5 0 0 0 0-1.06c0-.69-.06-1.68-.13-2.91-.13-2.44-.34-5.82-.62-9.55s-.55-7.11-.78-9.55c-.12-1.22-.22-2.21-.3-2.89a4 4 0 0 0-.19-1.05 3.7 3.7 0 0 0 0 1.06c0 .69.06 1.68.13 2.9.13 2.45.34 5.83.62 9.56s.55 7.11.78 9.55c.11 1.22.22 2.21.3 2.89a3.5 3.5 0 0 0 .19 1.05M419.86 168.77c-.15 0-1.4 4.83-2.8 10.87a112 112 0 0 0-2.26 11 111 111 0 0 0 2.8-10.87 112 112 0 0 0 2.26-11M341.34 149.42c0 .1 1.16.25 3 .83a21.3 21.3 0 0 1 6.46 3.42 21.6 21.6 0 0 1 4.89 5.44c1 1.61 1.42 2.71 1.52 2.67a2.7 2.7 0 0 0-.23-.8 14 14 0 0 0-.95-2.07 19.2 19.2 0 0 0-11.58-9 13 13 0 0 0-2.23-.43 2.4 2.4 0 0 0-.88-.06M423.16 155.87a11.2 11.2 0 0 0-1 3.39 11.2 11.2 0 0 0-.41 3.49 11.4 11.4 0 0 0 .95-3.38 11.3 11.3 0 0 0 .46-3.5"}),t.jsx("path",{fill:"#ffbe9d",d:"M335.24 186.93s9.16 36.31 10.15 39.41 2.77 11.48 11.61 12.76c11.94 1.74 58.24-2.35 58.24-2.35l-9.33-10.62-41.19-9.24-7-26.4Z"}),t.jsx("path",{fill:"#eb996e",d:"M406.35 219.9a2.3 2.3 0 0 0-.3.87 11.6 11.6 0 0 0-.34 2.47 14.1 14.1 0 0 0 2.08 7.9 16.2 16.2 0 0 0 2.85 3.54 9 9 0 0 0 3.2 1.9 8.8 8.8 0 0 0 2.47.42 2.3 2.3 0 0 0 .91-.08 18 18 0 0 1-3.24-.71 9 9 0 0 1-3-1.91 17.4 17.4 0 0 1-2.72-3.45 14.86 14.86 0 0 1-2.16-7.61c-.01-2.06.35-3.32.25-3.34"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M359.88 182.57a5.2 5.2 0 0 1-1.1-.11l-3-.43c-2.5-.36-6-.77-9.79-1.27a98 98 0 0 1-9.75-1.69c-1.23-.3-2.22-.57-2.89-.79a4.7 4.7 0 0 1-1-.38c0-.09 1.54.31 4 .8s5.92 1 9.74 1.53 7.29 1 9.78 1.42c1.25.23 2.25.44 2.94.61a3.9 3.9 0 0 1 1.07.31M358 170.48a3.7 3.7 0 0 1-.94.05c-.61 0-1.49 0-2.58-.08-2.17-.11-5.17-.35-8.47-.76s-6.27-.92-8.4-1.35a61 61 0 0 1-2.52-.56 2.8 2.8 0 0 1-.9-.28 25 25 0 0 1 3.49.47c2.14.33 5.11.78 8.39 1.19s6.27.71 8.44.91a24 24 0 0 1 3.49.41M355.91 161.28a12.5 12.5 0 0 1-2.85 0 58.8 58.8 0 0 1-13.49-2.53 13.3 13.3 0 0 1-2.67-1 17 17 0 0 1 2.77.65c1.69.44 4.05 1 6.67 1.5s5 .81 6.76 1a18 18 0 0 1 2.81.38M373 148.17a20 20 0 0 1-3.22 1c-2 .52-4.79 1.16-7.88 1.78s-5.92 1.09-8 1.39a19 19 0 0 1-3.34.35 23 23 0 0 1 3.27-.72l7.92-1.54 7.91-1.63a21.7 21.7 0 0 1 3.34-.63M422.69 159a5.6 5.6 0 0 1-1.14-.4l-3.06-1.26c-2.57-1.06-6.13-2.53-10.09-4.08s-7.57-2.88-10.19-3.84l-3.09-1.14a5 5 0 0 1-1.12-.49 5.6 5.6 0 0 1 1.18.29c.76.21 1.83.55 3.16 1 2.65.87 6.29 2.15 10.26 3.7s7.51 3.07 10 4.23c1.27.58 2.29 1.06 3 1.41a5.3 5.3 0 0 1 1.09.58M419.86 168.32a3 3 0 0 1-.62-.07l-1.78-.28-6.5-1.14c-5.49-1-13.08-2.29-21.52-3.31-4.22-.49-8.25-.84-11.93-1.06s-7-.27-9.77-.22c-1.39 0-2.65.06-3.76.09s-2.05.07-2.83.13l-1.79.09a2.8 2.8 0 0 1-.63 0 2.8 2.8 0 0 1 .62-.1l1.78-.19c.78-.09 1.73-.17 2.84-.22s2.37-.16 3.76-.17c2.79-.09 6.12-.05 9.81.11s7.73.53 12 1c8.45 1 16 2.41 21.52 3.47 2.73.53 5 1 6.47 1.3l1.76.39a2.4 2.4 0 0 1 .57.18M394 184.66a7.5 7.5 0 0 1-1.37 0c-.89-.05-2.16-.16-3.74-.32-3.14-.33-7.48-.9-12.23-1.77s-9-1.86-12.07-2.66c-1.53-.41-2.76-.75-3.6-1a7.6 7.6 0 0 1-1.3-.45 6 6 0 0 1 1.35.25l3.64.85c3.08.71 7.34 1.64 12.08 2.51s9.05 1.49 12.18 1.91l3.71.5a6.4 6.4 0 0 1 1.35.18M415.75 185a99 99 0 0 1-10.17.36 101 101 0 0 1-10.16-.17 95 95 0 0 1 10.16-.36 94 94 0 0 1 10.17.17M387.18 199.36a4 4 0 0 1-1.11-.05c-.7-.06-1.73-.19-3-.37-2.52-.36-6-1-9.77-1.85s-7.16-1.88-9.57-2.67c-1.21-.4-2.18-.74-2.85-1a4.8 4.8 0 0 1-1-.44 4 4 0 0 1 1.08.24l2.89.84c2.43.7 5.81 1.62 9.58 2.51s7.21 1.55 9.71 2l3 .54a4.4 4.4 0 0 1 1.04.25M410.73 200.4a16 16 0 0 1-3.22 0c-2-.07-4.73-.27-7.74-.66s-5.72-.9-7.66-1.33a16.2 16.2 0 0 1-3.1-.86 21 21 0 0 1 3.18.49c1.95.34 4.65.78 7.65 1.17s5.72.65 7.69.82a23 23 0 0 1 3.2.37M405.82 213.46a1.3 1.3 0 0 1-.41.17c-.27.08-.67.22-1.2.36a39 39 0 0 1-4.5.93 58.5 58.5 0 0 1-15.13.13 117 117 0 0 1-14.89-2.79c-1.88-.46-3.39-.86-4.44-1.15a9 9 0 0 1-1.61-.5 12 12 0 0 1 1.66.3l4.48 1a144 144 0 0 0 14.85 2.63 64 64 0 0 0 15 0c1.91-.24 3.45-.53 4.51-.76a12 12 0 0 1 1.68-.32M428.93 175.93a32 32 0 0 1-5.07.41 19.8 19.8 0 0 1-5.1-.12 32 32 0 0 1 5.07-.41 19.8 19.8 0 0 1 5.1.12M427.58 163.75a14.3 14.3 0 0 1-5.53-.36 14.9 14.9 0 0 1 5.53.36"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M385.24 200.23c-.05-.09 1.05-.64 2.55-1.88a18.3 18.3 0 0 0 2.38-2.42 18.3 18.3 0 0 0 3.59-7.43 18 18 0 0 0 .41-3.38c.05-1.94-.21-3.14-.11-3.16a2.7 2.7 0 0 1 .24.83 7 7 0 0 1 .16 1 13 13 0 0 1 .09 1.33 16 16 0 0 1-.31 3.48 17.3 17.3 0 0 1-3.69 7.64 16 16 0 0 1-2.53 2.41 11 11 0 0 1-1.1.76 7 7 0 0 1-.88.49 2.6 2.6 0 0 1-.8.33"}),t.jsx("path",{d:"m393.81 190.49-3.89 5.78a18.45 18.45 0 0 1-10.42 6.49 10.89 10.89 0 0 0 14.31-12.27",opacity:"0.3"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M405.34 130.24a19.3 19.3 0 0 0 10.73-2.18c-4.84-3-7.89-8.26-9.37-13.75s-3.38-14.85-3.43-20.53l-8.86 39.37a23.77 23.77 0 0 0 14-1.09 3.86 3.86 0 0 1-3.07-1.82M380.06 135a27.7 27.7 0 0 1-2.14-14.07l-17.86-6.77a31.44 31.44 0 0 1-5.7 13.42c-1.09 1.48-2.39 3.2-1.88 5a3.76 3.76 0 0 0 2.77 2.37 11.3 11.3 0 0 0 3.8 0l-2.28 2.49a137 137 0 0 1 23.29-2.44"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M381.57 76.16c-5.63-.58-10.39 1.89-14.88 5.33a28 28 0 0 0-9.42 13.82 27.75 27.75 0 0 0 .12 17.58 22.13 22.13 0 0 0 11.77 12.82c7.48 3.2 16.67 1.31 22.83-4s9.33-13.67 9.11-21.82a26.87 26.87 0 0 0-5.29-15.68 20.5 20.5 0 0 0-14.24-8"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M367 96.14c.67-2.18.2-4.54.37-6.82.39-5 4.14-9.27 8.64-11.51 4.2-2.09 9.49-2 14.79-.7a19.8 19.8 0 0 1 9.68 5.44 15.62 15.62 0 0 1 3.79 13.84l-25.69-2a28.3 28.3 0 0 1-7.38 5.58 5.25 5.25 0 0 1-2.62.6 2.39 2.39 0 0 1-2.12-1.57c-.3-.92.21-1.91.54-2.86"}),t.jsx("path",{fill:"#ffbe9d",d:"m391.78 84.1-21.91 6.16a4.16 4.16 0 0 0-3.61 4.31l3.42 48.07a15 15 0 0 0 3.72 8.86l2.3 2.59c5.24 5.92 15 4.65 18.22-2.56a5.3 5.3 0 0 0 .42-1.29 8 8 0 0 0 .14-1.1 35 35 0 0 0-.09-7.31c-.06-4.29-.11-6.05-.11-6s9-1.75 10.58-13.61c.78-5.91.23-15.53-.48-23.4-.63-7.08-5.56-15.66-12.6-14.72"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M400.17 106.38a1.53 1.53 0 0 1-1.43 1.57 1.44 1.44 0 0 1-1.59-1.32 1.51 1.51 0 0 1 1.41-1.57 1.45 1.45 0 0 1 1.61 1.32M402.43 103.88c-.19.2-1.36-.62-3-.57s-2.8.9-3 .7.09-.45.6-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.39.7c.54.37.72.72.63.81M384.73 107.19a1.52 1.52 0 0 1-1.42 1.57 1.45 1.45 0 0 1-1.6-1.32 1.52 1.52 0 0 1 1.42-1.57 1.45 1.45 0 0 1 1.6 1.32M386.4 104.61c-.18.2-1.35-.61-3-.57s-2.8.9-3 .7.09-.44.61-.84a4.14 4.14 0 0 1 2.38-.8 4 4 0 0 1 2.38.7c.54.37.72.72.63.81M392.64 116.55a10.7 10.7 0 0 1 2.64-.55c.42 0 .81-.15.87-.43a2.16 2.16 0 0 0-.31-1.23l-1.32-3.14c-1.83-4.47-3.16-8.15-3-8.22s1.81 3.49 3.64 8l1.26 3.16a2.4 2.4 0 0 1 .26 1.63 1 1 0 0 1-.67.63 2.7 2.7 0 0 1-.7.11 10.6 10.6 0 0 1-2.67.04"}),t.jsx("path",{fill:"#eb996e",d:"M394.28 135.82a30.1 30.1 0 0 1-15.93-3.8s4.19 8.07 16 6.65ZM392.06 120.5a2.93 2.93 0 0 0-2.66-1 2.64 2.64 0 0 0-1.83 1 1.72 1.72 0 0 0-.08 2 2 2 0 0 0 2.15.48 6.1 6.1 0 0 0 2.06-1.3 2.1 2.1 0 0 0 .45-.49.56.56 0 0 0 0-.61"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M387.88 117.8c.26 0 .31 1.75 1.86 3s3.43 1 3.45 1.22-.41.35-1.21.39a4.42 4.42 0 0 1-2.88-.91 3.82 3.82 0 0 1-1.44-2.49c-.09-.77.09-1.21.22-1.21M386.55 99.67c-.15.45-1.79.28-3.69.57s-3.44.84-3.71.45c-.12-.19.14-.61.75-1.06a6.34 6.34 0 0 1 2.73-1 6.2 6.2 0 0 1 2.91.27c.71.22 1.07.56 1.01.77M401.76 96.76c-.27.38-1.41 0-2.76 0s-2.49.32-2.76-.06c-.12-.19.05-.56.54-.93a4 4 0 0 1 4.45 0c.49.43.66.81.53.99"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M362.67 93c1.86-6.92 11.31-16.79 18.47-16.62l11.71 6.32a11 11 0 0 1-7.08 8.75c-2 .71-4.4 1-5.52 2.77s-.31 4.37-1.37 6.25c-1.46 2.6-5.78 2.68-6.84 5.47-.47 1.21-.13 2.63-.62 3.84-.64 1.61-4.55 3.8-6.23 3.35s-1.81-3.27-2.42-4.72a7.82 7.82 0 0 1-.48-5.23c.57-3.38-.51-6.9.38-10.18"}),t.jsx("path",{fill:"#ffbe9d",d:"M370.14 114.28c0-.88-1.1-2.93-2-3-2.33-.3-6.5 0-6.39 5.89.17 8.06 8.22 6.24 8.23 6s.24-5.85.16-8.89"}),t.jsx("path",{fill:"#eb996e",d:"M367.48 120.13s-.14.1-.37.22a1.4 1.4 0 0 1-1.05 0c-.86-.29-1.6-1.63-1.67-3.08a4.5 4.5 0 0 1 .35-2 1.6 1.6 0 0 1 1-1.1.71.71 0 0 1 .84.37c.11.22.07.38.11.4s.17-.14.1-.47a.93.93 0 0 0-.33-.5 1 1 0 0 0-.78-.19 2 2 0 0 0-1.44 1.28 4.7 4.7 0 0 0-.44 2.25c.08 1.63.94 3.13 2.11 3.44a1.48 1.48 0 0 0 1.28-.24c.28-.18.32-.36.29-.38"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M360.81 91c-.14-2.52-3.38-4-5.87-4.37a10.5 10.5 0 0 0-7.15 1.86c-1.24.79-2.48 1.88-2.67 3.34s1.31 3.09 2.65 2.48a4.78 4.78 0 1 0 5.15 7.85 10.68 10.68 0 0 1-3.81 6A12 12 0 0 0 360.81 91M346.78 125.52c0-.38 1.05-.56 2.48-1a15 15 0 0 0 5.05-2.5 14.9 14.9 0 0 0 3.65-4.3c.77-1.29 1.18-2.22 1.56-2.16s.6 1.13.2 2.85a10.73 10.73 0 0 1-10.21 8c-1.77-.03-2.77-.54-2.73-.89"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M356.07 104.15a7.2 7.2 0 0 1-.46-2.39 17.8 17.8 0 0 1 3-11.22 7.2 7.2 0 0 1 1.59-1.85 26.7 26.7 0 0 0-3.53 7.31 27 27 0 0 0-.6 8.15M390.36 80.4c.95 3.22 6.2 7.09 8.55 9.5 4.48 4.58 5.41 6.14 6.08 17 1.72-3.88 3-7.66 2.55-11.88a17.62 17.62 0 0 0-5.4-11.22 13.71 13.71 0 0 0-11.78-3.41"}),t.jsx("path",{fill:"#ffbe9d",d:"M442.9 174.43s-5.38 22.36-7.59 32C433 216.7 427.86 240 414.22 236.6c-10.38-2.56-8.07-16-8.07-16l8.85-30.73 8.2.93 7.53-18.54 8.12-8.55Z"}),t.jsx("path",{fill:"#eb996e",d:"M409.77 221.4a11.5 11.5 0 0 1-.27-5 15.7 15.7 0 0 1 1.92-5.06 44 44 0 0 1 4-5.42 43 43 0 0 0 4-5.51 33.5 33.5 0 0 0 2.42-5 31 31 0 0 0 1.12-3.57 6 6 0 0 0 .25-1.35 8.6 8.6 0 0 0-.46 1.29c-.27.83-.67 2-1.28 3.48a37 37 0 0 1-2.49 4.89 47 47 0 0 1-4 5.42 41 41 0 0 0-4 5.52 15.3 15.3 0 0 0-1.87 5.25 9.7 9.7 0 0 0 .16 3.76 6.6 6.6 0 0 0 .33 1c.09.2.15.31.17.3"}),t.jsx("path",{fill:"#ffbe9d",d:"M430.1 174c0-.4.2-6.91.33-8.61a8.8 8.8 0 0 1 .89-3.09 2.62 2.62 0 0 1 4.08-.72l.15.13a11.5 11.5 0 0 1 3.21-3.87c1.91-1.25 3.48-2.1 5.12-1.12a2.85 2.85 0 0 1 1.58 2.37s2.43-.33 3.48.65 0 3.94 0 3.94 2.16-.66 2.69.92a4.4 4.4 0 0 1-.46 3.22s1.7.52 1.9 1.77-1.7 2.62-1.7 2.62l-5.93 4.72a11.3 11.3 0 0 1-4.57 6c-4.12 1.58-10.77-8.93-10.77-8.93"}),t.jsx("path",{fill:"#eb996e",d:"M434.62 166.91c.06 0 .05.25-.13.55a2 2 0 0 1-1 .88 2.14 2.14 0 0 1-1.36 0c-.33-.11-.49-.27-.46-.34s.81.11 1.63-.21 1.18-.95 1.32-.88M439.32 161.09c-.09.12-.66-.28-.76-1.06s.33-1.31.45-1.22 0 .57.08 1.15.34 1.04.23 1.13M449.23 163.62s-.42.61-1.31 1.38a39 39 0 0 1-3.69 2.7 5.7 5.7 0 0 1-2.36 1.1 2.13 2.13 0 0 1-2-.75 1.48 1.48 0 0 1-.16-1.46c.16-.32.36-.4.38-.37s-.11.16-.19.45a1.36 1.36 0 0 0 .27 1.16 1.8 1.8 0 0 0 1.67.48 5.6 5.6 0 0 0 2.13-1.05c1.49-1 2.82-1.87 3.75-2.56a9.6 9.6 0 0 1 1.51-1.08M451.13 167.79a38 38 0 0 1-5.65 2.88 5.8 5.8 0 0 1-2.45.72 1.93 1.93 0 0 1-1.84-1.1 1.12 1.12 0 0 1 0-.88 1.05 1.05 0 0 1 .43-.49c.33-.18.54-.08.53-.06s-.19 0-.41.23a.85.85 0 0 0-.19 1 1.54 1.54 0 0 0 1.49.75 5.75 5.75 0 0 0 2.23-.71 39 39 0 0 1 5.86-2.34M448.25 173.12c0 .06-.32.31-1 .47a4.6 4.6 0 0 1-1.18.12 3.16 3.16 0 0 1-1.47-.33.9.9 0 0 1-.43-.85 1.4 1.4 0 0 1 .32-.73 5 5 0 0 1 .85-.83c.54-.4.94-.53 1-.47s-.28.31-.72.76a6 6 0 0 0-.7.83c-.23.33-.31.67 0 .84a3.2 3.2 0 0 0 1.21.29 5.6 5.6 0 0 0 1.09 0c.62-.06 1-.17 1.03-.1"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),t.jsx("path",{fill:"none",d:"M442.62 174.11a4.84 4.84 0 1 0-6.14 4.49l-.05 1.35 1.32 1-1.39.78-.06 1.69 1.32 1-1.39.78-.05 1.45.8.6-.84.47v.85l1 1.14 2-1.19.38-10a4.85 4.85 0 0 0 3.1-4.41m-4.71-3.72a1.39 1.39 0 1 1-1.44 1.34 1.39 1.39 0 0 1 1.44-1.34"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.91 170.39s-.12 0-.33.06a1.4 1.4 0 0 0-.76.48 1.34 1.34 0 1 0 2.18.07 1.4 1.4 0 0 0-.72-.54c-.2-.06-.33-.06-.33-.08h.05a1 1 0 0 1 .26 0 1.38 1.38 0 0 1 .77.53 1.43 1.43 0 0 1 .17 1.37 1.4 1.4 0 0 1-.53.65 1.43 1.43 0 0 1-.86.25 1.47 1.47 0 0 1-.85-.31 1.5 1.5 0 0 1-.48-.7 1.47 1.47 0 0 1 .27-1.35 1.43 1.43 0 0 1 .82-.47 1.3 1.3 0 0 1 .25 0Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.62 174.11v.39a5 5 0 0 1-.24 1.08 4.8 4.8 0 0 1-.9 1.54 4.8 4.8 0 0 1-2 1.38c-.1 2.59-.22 6-.36 10l-2 1.2-1-1.14v-.85l.84-.47v.1l-.81-.61c0-.45 0-1 .05-1.45l1.39-.77v.1l-1.32-1V183c0-.42 0-.83.05-1.24l1.39-.78v.1l-1.32-1c0-.46 0-.91.05-1.35v.06a5 5 0 0 1-2-1.12 4.5 4.5 0 0 1-.73-.85 4.85 4.85 0 0 1-.29-5 4.86 4.86 0 0 1 8.05-.89 4.7 4.7 0 0 1 .93 1.71l.06.18v.18c0 .12.05.22.06.33s.05.37.05.51v.16a.4.4 0 0 1 0 .1v-.42c0-.14 0-.31-.06-.51a2 2 0 0 0-.07-.32v-.18l-.06-.18a4.6 4.6 0 0 0-.93-1.68 4.9 4.9 0 0 0-2.11-1.44 4.8 4.8 0 0 0-6 6.29 4.6 4.6 0 0 0 .5 1 4.4 4.4 0 0 0 .72.83 4.76 4.76 0 0 0 1.95 1.09h.05c0 .45 0 .9-.05 1.35l1.33 1h.07l-.08.05-1.39.77v-.05 1.69l1.32 1 .07.06h-.08l-1.39.78c0 .5 0 1-.05 1.45l.81.6.07.06h-.08l-.84.48v.84l1 1.14h-.07l2-1.19v.05c.16-4 .29-7.44.39-10a4.8 4.8 0 0 0 1.94-1.34 5 5 0 0 0 .9-1.52 5.2 5.2 0 0 0 .26-1.08v-.28a.7.7 0 0 0-.07-.33"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),t.jsx("path",{fill:"none",d:"M442.12 173.84a4.85 4.85 0 1 0-6.14 4.49l-.05 1.34 1.32 1-1.39.77-.06 1.69 1.32 1-1.39.77-.06 1.45.81.61-.85.47v.84l1 1.14 2-1.19.38-10a4.84 4.84 0 0 0 3.11-4.38m-4.71-3.72a1.39 1.39 0 0 1 1.34 1.44 1.39 1.39 0 1 1-2.78-.11 1.39 1.39 0 0 1 1.44-1.33"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.41 170.12a3 3 0 0 0-.34 0 1.37 1.37 0 0 0-.75.48 1.33 1.33 0 0 0-.23 1.26 1.35 1.35 0 0 0 1.22.93 1.37 1.37 0 0 0 1.28-.83 1.35 1.35 0 0 0-.85-1.81 3 3 0 0 0-.33-.08h.09a1 1 0 0 1 .25 0 1.36 1.36 0 0 1 .78.53 1.44 1.44 0 0 1-.36 2 1.44 1.44 0 0 1-.87.25 1.47 1.47 0 0 1-.84-.32 1.36 1.36 0 0 1-.46-.53 1.43 1.43 0 0 1 1.08-1.83.8.8 0 0 1 .26 0Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M442.12 173.84v.38a5 5 0 0 1-.24 1.09 5.2 5.2 0 0 1-.9 1.54 5 5 0 0 1-2 1.38l-.35 10-2 1.19-1-1.14v-.84l.84-.48v.1l-.8-.6c0-.46 0-.95.05-1.45l1.39-.78v.1l-1.32-1v-.45c0-.41 0-.83.05-1.24l1.39-.77v.1l-1.32-1c0-.45 0-.9.05-1.35v.06a4.76 4.76 0 0 1-2-1.12 4.6 4.6 0 0 1-.74-.85 4.7 4.7 0 0 1-.51-1 4.9 4.9 0 0 1 3-6.41 5 5 0 0 1 3.16 0 4.94 4.94 0 0 1 2.13 1.2 4.9 4.9 0 0 1 .93 1.71l.06.19v.18c0 .11.05.22.06.32s.05.38.05.51v.43a1 1 0 0 0 0-.11v-.31c0-.14 0-.31-.05-.52s-.05-.2-.07-.32v-.17l-.06-.19a4.8 4.8 0 0 0-.94-1.68 4.73 4.73 0 0 0-2.11-1.43 4.83 4.83 0 0 0-3.1 0 4.9 4.9 0 0 0-2.7 2.33 4.83 4.83 0 0 0-.22 3.95 5.2 5.2 0 0 0 .51 1 4.3 4.3 0 0 0 .72.83 4.8 4.8 0 0 0 1.95 1.09H436v1.4-.05c.44.32.88.66 1.32 1l.08.06h-.08l-1.39.78v-.05c0 .41 0 .82-.05 1.24v.44l1.32 1h.08l-.08.05-1.39.77c0 .5 0 1-.06 1.45l.81.61.07.05h-.08l-.85.47v.84l1 1.15h-.07l2-1.19v.05c.15-4 .29-7.44.39-10a5 5 0 0 0 1.95-1.35 5.2 5.2 0 0 0 .9-1.52 5 5 0 0 0 .26-1.07v-.29a.31.31 0 0 1-.01-.31"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M441.54 173.88a6.6 6.6 0 0 0-.12-1 3.9 3.9 0 0 0-.43-1.14 4.2 4.2 0 0 0-1-1.24 4.17 4.17 0 0 0-4-.74 4 4 0 0 0-1.09.53 4.4 4.4 0 0 0-.49.39 5 5 0 0 0-.43.47 4.2 4.2 0 0 0-.19 5 6 6 0 0 0 .4.51 5 5 0 0 0 .46.42 3.8 3.8 0 0 0 1 .61 4.27 4.27 0 0 0 2.21.27 4.1 4.1 0 0 0 1.8-.71 4.4 4.4 0 0 0 1.13-1.16 4.3 4.3 0 0 0 .51-1.11 6.6 6.6 0 0 0 .2-1v.61c0 .13-.05.27-.1.44a3.9 3.9 0 0 1-.51 1.13 4.3 4.3 0 0 1-1.13 1.19 4.2 4.2 0 0 1-1.84.74 4.36 4.36 0 0 1-2.26-.26 4 4 0 0 1-1.07-.63 6 6 0 0 1-.48-.43 4 4 0 0 1-.4-.52 4.29 4.29 0 0 1 .19-5.11 5 5 0 0 1 .44-.49 5 5 0 0 1 .51-.39 4.22 4.22 0 0 1 3.39-.64 4.14 4.14 0 0 1 1.78.88 4.3 4.3 0 0 1 1 1.27 4.4 4.4 0 0 1 .42 1.16 3 3 0 0 1 .06.45 2 2 0 0 1 0 .33v.27Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M439 171.58a4 4 0 0 0-.06-.39 1.52 1.52 0 0 0-.56-.89 1.6 1.6 0 0 0-.66-.32 1.6 1.6 0 0 0-.83.05 1.47 1.47 0 0 0-.75.52 1.53 1.53 0 0 0-.33.91 1.56 1.56 0 0 0 1 1.52 1.63 1.63 0 0 0 1.51-.16 1.6 1.6 0 0 0 .62-.85 3 3 0 0 0 .09-.39s0 0 0 .11a1.5 1.5 0 0 1-.05.3 1.63 1.63 0 0 1-.62.9 1.66 1.66 0 0 1-.72.29 1.67 1.67 0 0 1-1.64-.71 1.67 1.67 0 0 1-.3-1 1.72 1.72 0 0 1 .37-1 1.64 1.64 0 0 1 .81-.55 1.6 1.6 0 0 1 .89 0 1.7 1.7 0 0 1 .69.34 1.6 1.6 0 0 1 .55 1 1.1 1.1 0 0 1 0 .3c-.01-.01-.01.02-.01.02M438 188.45s0-2.29.13-5.1.22-5.1.25-5.1 0 2.28-.13 5.1-.25 5.1-.25 5.1"}),t.jsx("path",{fill:"#e0e0e0",d:"M437.83 170.6a.74.74 0 0 1-.65 0v-6.15l.65.05Z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M437.5 170.7a.8.8 0 0 1-.33-.08v-6.19l.7.05v6.14a.8.8 0 0 1-.37.08m-.29-.12a.68.68 0 0 0 .59 0v-6.06h-.6Z"}),t.jsx("path",{fill:"#ffbe9d",d:"M435 161.43a14.5 14.5 0 0 0 1.73 1.27 2.34 2.34 0 0 1 1.06 1.79 2.19 2.19 0 0 1-1.28 1.69 4 4 0 0 1-5.42-1.63"}),t.jsx("path",{fill:"#eb996e",d:"M431.13 164.55a11 11 0 0 0 1.36 1.22 3.9 3.9 0 0 0 1.8.6 4 4 0 0 0 2.24-.49 1.71 1.71 0 0 0 1-1.74 2.83 2.83 0 0 0-1.11-1.45c-.95-.64-1.48-1.2-1.4-1.26s.59.37 1.61.95A3 3 0 0 1 438 164a1.82 1.82 0 0 1-.21 1.34 2.9 2.9 0 0 1-1 1 4.27 4.27 0 0 1-2.56.52 4.07 4.07 0 0 1-2-.78c-.93-.75-1.15-1.52-1.1-1.53"}),t.jsx("path",{fill:"#ffbe9d",d:"M441.16 158.88a23.7 23.7 0 0 0-3 4.4 3.64 3.64 0 0 0-.45 1.57 1.58 1.58 0 0 0 .73 1.4 1.6 1.6 0 0 0 1.37 0 4.3 4.3 0 0 0 1.14-.81 28 28 0 0 0 3.72-4.14 3.9 3.9 0 0 0 .66-1.17 1.6 1.6 0 0 0-.08-1.31"}),t.jsx("path",{fill:"#eb996e",d:"M445.26 158.81s.25.2.28.74a3.2 3.2 0 0 1-.82 2 22 22 0 0 1-2 2.46c-.4.44-.84.89-1.31 1.33a5 5 0 0 1-1.7 1.22 1.9 1.9 0 0 1-1.15 0 1.53 1.53 0 0 1-.88-.75 2.45 2.45 0 0 1 0-2 12.8 12.8 0 0 1 1.6-2.77 11.5 11.5 0 0 1 1.9-2.19 23 23 0 0 1-1.59 2.41 13.7 13.7 0 0 0-1.44 2.71 1.92 1.92 0 0 0 0 1.59 1.11 1.11 0 0 0 1.41.46 4.7 4.7 0 0 0 1.5-1.09c.47-.43.91-.86 1.31-1.28.81-.85 1.49-1.65 2-2.35a3.4 3.4 0 0 0 .92-1.78 4 4 0 0 0-.03-.71"})]}),t.jsx("path",{id:"freepik--Floor--inject-81",fill:"var(--LoginSVG-fill)",d:"M461 480.17c0 .15-97.17.26-217 .26s-217-.11-217-.26 97.15-.26 217-.26 217 .09 217 .26"})]}),Ll=({width:e})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*(500/750),fill:"none",viewBox:"0 0 750 500",children:[t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M703.33 347c0 .14-148.4.26-331.41.26s-331.44-.13-331.44-.26 148.36-.26 331.44-.26 331.41.11 331.41.26M689.1 461.1c0 .14-142 .26-317.18.26s-317.21-.12-317.21-.26 142-.26 317.21-.26 317.18.16 317.18.26"}),t.jsx("path",{fill:"#E0E0E0",d:"M592.82 46.99H178.47c-8.047 0-14.57 6.523-14.57 14.57V325.7c0 8.047 6.523 14.57 14.57 14.57h414.35c8.047 0 14.57-6.523 14.57-14.57V61.56c0-8.047-6.523-14.57-14.57-14.57"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m592.82 340.27.95-.06a7 7 0 0 0 1.15-.13 9.4 9.4 0 0 0 1.59-.33c1.492-.374 2.909-1 4.19-1.85a14.3 14.3 0 0 0 4.41-4.49 15 15 0 0 0 1.59-3.41 16 16 0 0 0 .62-4.18v-34.11c0-36.65 0-89.69-.08-155.22v-71.9a24.8 24.8 0 0 0-.53-6.83 14.36 14.36 0 0 0-9.1-9.74 14 14 0 0 0-1.68-.48c-.57-.12-1.15-.2-1.73-.27-1.17-.08-2.36-.07-3.56-.06H178.52a14.37 14.37 0 0 0-13.74 10.23 15.6 15.6 0 0 0-.6 4.52v262.63c-.038 1.34.063 2.681.3 4a14.5 14.5 0 0 0 3.63 6.92 14 14 0 0 0 3.07 2.45q.842.503 1.74.9.91.37 1.86.62c2.52.74 5.19.46 7.83.51h198.14l155.2.09 42.2.05-42.2.05-155.2.08H178.61a15 15 0 0 1-4-.52 17 17 0 0 1-1.92-.64 18 18 0 0 1-1.8-.94 14.2 14.2 0 0 1-3.16-2.53 14.6 14.6 0 0 1-2.37-3.3 16 16 0 0 1-1.39-3.84 20 20 0 0 1-.31-4.08V62c-.029-1.579.18-3.153.62-4.67a14.89 14.89 0 0 1 14.24-10.6h412.07c1.2 0 2.38 0 3.59.07q.902.09 1.79.27a14.91 14.91 0 0 1 11.09 10.53l.22.85c.06.29.09.58.14.87q.14.87.16 1.75v75.32c0 65.53-.07 118.57-.09 155.22v34.11a15.8 15.8 0 0 1-.64 4.22 14.8 14.8 0 0 1-1.61 3.47 14.3 14.3 0 0 1-4.46 4.51 13.6 13.6 0 0 1-4.21 1.83 10 10 0 0 1-1.6.32q-.575.104-1.16.11z"}),t.jsx("path",{fill:"#E0E0E0",d:"M609.26 347h-444.9a17.8 17.8 0 0 1-17.79-17.8v-7.86h480.49v7.86c0 4.721-1.875 9.248-5.214 12.586A17.8 17.8 0 0 1 609.26 347"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M609.26 347h.58a17 17 0 0 0 1.71-.15l1.27-.2 1.51-.39c.55-.16 1.11-.4 1.73-.62s1.25-.57 1.9-.94a18.6 18.6 0 0 0 4-3.07 17.78 17.78 0 0 0 5-12v-8.26l.1.09-462.67.17h-17.82l.26-.26v6.25a20.9 20.9 0 0 0 .6 6.12 17.48 17.48 0 0 0 6.85 9.82 18.24 18.24 0 0 0 11.49 3.21h150.67l152.72.06 102.58.08 27.83.05h-27.83l-102.58.08-152.72.06H165.77c-4.159.303-8.3-.787-11.77-3.1a18 18 0 0 1-7-10.12 21.6 21.6 0 0 1-.62-6.25v-6.51h18.08l462.67.16h.09v8.37a17.8 17.8 0 0 1-5.22 12.01 18.9 18.9 0 0 1-4 3.08c-.66.37-1.31.65-1.91.93s-1.2.46-1.75.61l-1.52.38-1.27.19q-.856.117-1.72.12z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m341.93 321.33 5.96 9.48h83.9l5.53-9.48z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M578.01 67.03H192.9a8.48 8.48 0 0 0-8.48 8.48v221.53a8.48 8.48 0 0 0 8.48 8.48h385.11a8.48 8.48 0 0 0 8.48-8.48V75.51a8.48 8.48 0 0 0-8.48-8.48"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M577.83 305.52a9.1 9.1 0 0 0 3.18-.64 8.55 8.55 0 0 0 3.25-2.29 8.67 8.67 0 0 0 2.14-5c.06-8.42 0-20.87 0-36.89 0-32 0-78.4-.09-135.68v-47.9a15.6 15.6 0 0 0-.14-2.91 8.4 8.4 0 0 0-2.83-4.94 8.5 8.5 0 0 0-5.37-2H193.11a8.44 8.44 0 0 0-6.81 3.46 8.16 8.16 0 0 0-1.5 3.62c-.12 1.33-.16 2.666-.12 4v215.89c0 1.19 0 2.42.06 3.56a8.41 8.41 0 0 0 6.5 7.27c1.148.201 2.316.272 3.48.21h197.7l135.68.08 36.89.05-36.89.05-135.68.08h-197.7c-1.198.062-2.4-.015-3.58-.23a8.91 8.91 0 0 1-6.88-7.68c-.11-1.24 0-2.41-.06-3.61V78.4a34 34 0 0 1 .12-4.11 8.7 8.7 0 0 1 1.6-3.85 8.93 8.93 0 0 1 7.23-3.67H578a8.86 8.86 0 0 1 8.6 7.31c.137.994.184 1.998.14 3v47.94c0 57.28-.06 103.64-.08 135.68 0 16 0 28.46-.09 36.9a8.69 8.69 0 0 1-5.47 7.33 8.7 8.7 0 0 1-2.38.56z"}),t.jsx("path",{fill:"#fff",d:"M333.5 126.06v2.29H324V116h9.32v2.29h-6.48V121h5.72v2.22h-5.72v2.85zM345.26 122.93v5.42h-2.75v-5c0-1.53-.7-2.24-1.92-2.24s-2.27.81-2.27 2.55v4.69h-2.74v-9.47h2.62V120a4.14 4.14 0 0 1 3.13-1.25c2.24-.02 3.93 1.25 3.93 4.18M353.85 127.89a3.87 3.87 0 0 1-2.23.6c-2.24 0-3.54-1.14-3.54-3.4v-3.89h-1.46v-2.11h1.46v-2.31h2.74v2.31h2.36v2.11h-2.36v3.86a1.1 1.1 0 0 0 .045.488 1.13 1.13 0 0 0 .66.693c.154.059.32.082.485.069a1.83 1.83 0 0 0 1.1-.36zM364.33 124.39h-7.16a2.52 2.52 0 0 0 2.71 1.9 3.19 3.19 0 0 0 2.37-.92l1.47 1.59a5 5 0 0 1-3.91 1.53c-3.28 0-5.41-2.06-5.41-4.88a4.83 4.83 0 0 1 5.05-4.88 4.69 4.69 0 0 1 4.622 2.996c.236.613.341 1.268.308 1.924 0 .21-.03.51-.05.74m-7.2-1.61h4.67a2.27 2.27 0 0 0-2.33-2 2.24 2.24 0 0 0-2.34 2M372.1 118.73v2.54h-.62a2.319 2.319 0 0 0-1.897.712 2.326 2.326 0 0 0-.623 1.928v4.47h-2.74v-9.47h2.62v1.25a3.82 3.82 0 0 1 3.26-1.43M384.9 124v4.37h-2.85V124l-4.77-8h3l3.3 5.48 3.29-5.48h2.8zM388.93 123.61a5.22 5.22 0 1 1 5.22 4.88 4.88 4.88 0 0 1-5.22-4.88m7.63 0a2.43 2.43 0 0 0-1.635-2.099 2.433 2.433 0 0 0-3.009 3.283 2.44 2.44 0 0 0 2.234 1.446 2.381 2.381 0 0 0 2.3-1.637c.106-.319.144-.658.11-.993M410.72 118.88v9.47h-2.61v-1.13a3.82 3.82 0 0 1-2.94 1.27c-2.38 0-4.05-1.34-4.05-4.26v-5.35h2.75v4.94c0 1.59.7 2.29 1.92 2.29s2.18-.81 2.18-2.55v-4.68zM419.15 118.73v2.54h-.61a2.315 2.315 0 0 0-2.52 2.64v4.47h-2.75v-9.47h2.62v1.25a3.82 3.82 0 0 1 3.26-1.43M425.26 122.19c0-3.67 2.85-6.38 6.75-6.38s6.74 2.7 6.74 6.38-2.87 6.37-6.74 6.37-6.75-2.71-6.75-6.37m10.6 0a3.861 3.861 0 0 0-7.652-.638 3.86 3.86 0 0 0 1.663 3.937c.635.42 1.379.643 2.139.641a3.77 3.77 0 0 0 2.784-1.131 3.771 3.771 0 0 0 1.066-2.809M443.28 118.35h-3.95V116h10.74v2.33h-3.94v10h-2.85zM462.3 120.5c0 2.74-2.06 4.45-5.36 4.45h-2.48v3.4h-2.85V116h5.33c3.3 0 5.36 1.73 5.36 4.5m-2.89 0c0-1.36-.88-2.15-2.63-2.15h-2.32v4.28h2.32c1.75 0 2.63-.8 2.63-2.13"}),t.jsx("path",{fill:"#fff",d:"M343.13 153.78h-20.35a5.47 5.47 0 0 0-5.47 5.47v31.69a5.47 5.47 0 0 0 5.47 5.47h20.35a5.47 5.47 0 0 0 5.47-5.47v-31.69a5.47 5.47 0 0 0-5.47-5.47M382.51 153.78h-20.35a5.47 5.47 0 0 0-5.47 5.47v31.69a5.47 5.47 0 0 0 5.47 5.47h20.35a5.47 5.47 0 0 0 5.47-5.47v-31.69a5.47 5.47 0 0 0-5.47-5.47M421.88 153.78h-20.35a5.47 5.47 0 0 0-5.47 5.47v31.69a5.47 5.47 0 0 0 5.47 5.47h20.35a5.47 5.47 0 0 0 5.47-5.47v-31.69a5.47 5.47 0 0 0-5.47-5.47M461.25 153.78H440.9a5.47 5.47 0 0 0-5.47 5.47v31.69a5.47 5.47 0 0 0 5.47 5.47h20.35a5.47 5.47 0 0 0 5.47-5.47v-31.69a5.47 5.47 0 0 0-5.47-5.47",opacity:"0.2"}),t.jsx("path",{fill:"#37474F",d:"M428.23 222.58h-72.42c-7.196 0-13.03 5.834-13.03 13.03v2.65c0 7.196 5.834 13.03 13.03 13.03h72.42c7.196 0 13.03-5.834 13.03-13.03v-2.65c0-7.196-5.834-13.03-13.03-13.03"}),t.jsx("path",{fill:"#fff",d:"M364.5 236.26a4.47 4.47 0 0 1 2.95-3.925 4.46 4.46 0 0 1 4.77 1.165l-1.2 1.11a2.6 2.6 0 0 0-2-.94c-.687 0-1.346.273-1.831.759a2.587 2.587 0 0 0 0 3.662 2.59 2.59 0 0 0 1.831.759 2.6 2.6 0 0 0 2-1l1.2 1.11a4.452 4.452 0 0 1-7.72-2.74zM372.67 237.19a3.432 3.432 0 0 1 3.954-3.609 3.435 3.435 0 0 1 2.815 2.635 3.43 3.43 0 0 1-3.339 4.184 3.207 3.207 0 0 1-3.43-3.21m5 0a1.6 1.6 0 0 0-1.077-1.384 1.602 1.602 0 0 0-2.097 1.259 1.6 1.6 0 0 0 .715 1.601c.262.169.567.257.879.254a1.57 1.57 0 0 0 1.518-1.075c.07-.211.095-.434.072-.655zM387.07 236.74v3.56h-1.8V237c0-1-.47-1.47-1.26-1.47s-1.5.53-1.5 1.68v3.07h-1.8v-6.22h1.72v.73a2.75 2.75 0 0 1 2.06-.82 2.43 2.43 0 0 1 1.949.772 2.43 2.43 0 0 1 .631 1.998M392.71 240a2.54 2.54 0 0 1-1.47.4 2.044 2.044 0 0 1-2.32-2.24v-2.55h-1v-1.39h1v-1.51h1.8v1.51h1.55v1.39h-1.55v2.53a.72.72 0 0 0 .195.595.73.73 0 0 0 .585.225 1.24 1.24 0 0 0 .73-.23zM393.51 232.21a1 1 0 0 1 .7-.961 1 1 0 0 1 .42-.039 1 1 0 0 1 1.034.587c.058.13.087.271.086.413a1.13 1.13 0 0 1-1.12.98 1.128 1.128 0 0 1-1.12-.98m.22 1.87h1.8v6.22h-1.8zM403.57 236.74v3.56h-1.8V237c0-1-.47-1.47-1.26-1.47s-1.5.53-1.5 1.68v3.07h-1.8v-6.22h1.72v.73A2.75 2.75 0 0 1 401 234a2.43 2.43 0 0 1 1.929.766 2.45 2.45 0 0 1 .641 1.974M411.47 234.08v6.22h-1.71v-.74a2.51 2.51 0 0 1-1.93.84 2.49 2.49 0 0 1-2-.764 2.48 2.48 0 0 1-.66-2.036v-3.52H407v3.25c0 1 .46 1.51 1.26 1.51s1.44-.54 1.44-1.68v-3.08zM419.21 237.7h-4.71a1.65 1.65 0 0 0 1.78 1.25 2.128 2.128 0 0 0 1.56-.6l1 1a3.63 3.63 0 0 1-3.742.798 3.64 3.64 0 0 1-2.378-2.998A3.17 3.17 0 0 1 416 234a3.08 3.08 0 0 1 3.24 3.23c0 .13-.02.32-.03.47m-4.73-1h3.06a1.48 1.48 0 0 0-1.53-1.3 1.46 1.46 0 0 0-1.53 1.25z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M394.48 57.1a4.42 4.42 0 1 1-4.41-4.42 4.41 4.41 0 0 1 4.41 4.42M556.69 81.44V77.2a.874.874 0 0 1 .83-.91h6.37a.873.873 0 0 1 .83.91v4.24a.874.874 0 0 1-.83.91h-6.37a.873.873 0 0 1-.83-.91"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M568.77 83.79h-12.58a1.13 1.13 0 0 1-1.12-1.13v-6.93a1.13 1.13 0 0 1 .328-.792 1.13 1.13 0 0 1 .792-.328h12.4a1 1 0 0 1 1 1v1.28a.16.16 0 0 0 .16.16h1.36a.67.67 0 0 1 .67.67V80a.83.83 0 0 1-.83.83h-1a.17.17 0 0 0-.17.17v1.77a1 1 0 0 1-.289.724 1 1 0 0 1-.721.296m-12.58-8.68a.62.62 0 0 0-.62.62v6.93a.63.63 0 0 0 .62.63h12.58a.53.53 0 0 0 .52-.53V81a.67.67 0 0 1 .67-.67h1a.33.33 0 0 0 .33-.33v-2.26a.18.18 0 0 0-.17-.17h-1.36a.67.67 0 0 1-.66-.66v-1.28a.52.52 0 0 0-.156-.371.52.52 0 0 0-.374-.149zM172.67 201.81a8.39 8.39 0 0 0-7.6-5.72c.88-2.47-.81-5.32-3.21-6.36a9.33 9.33 0 0 0-7.58.55c-1.67.79-3.23 1.89-5 2.3-2.37.54-4.82-.21-7.24-.29a13.55 13.55 0 0 0-12.17 7.09c-.81 1.53-1.31 3.22-2.2 4.71-.72 1.19-1.66 2.23-2.37 3.43a10.25 10.25 0 0 0 .82 11.31l34.09-7.83a8.181 8.181 0 0 0 12.46-9.17z"}),t.jsx("path",{fill:"#FFBF9D",d:"m251.2 327.33-32.87-3.26-1.9 17.07 37.12-1.29z"}),t.jsx("path",{fill:"#FFBF9D",d:"M276.17 337.33a1.85 1.85 0 0 1-1.9.74 2.2 2.2 0 0 1-.44-.17c-1-.49-.55-2.58-.55-2.58l-4.82-1.58s-7.08 3.12-9.8 5.51-8.2-.76-8.2-.76l-.36-10.86 10.4-6.79s-.64.41.23-1 3.64-.41 3.64-.41c.57-.69 2.48-.67 2.48-.67l7.83 2.18a5.518 5.518 0 0 1 3.6 3.15l2.53 5.87s1.18 4.13.75 5a1.61 1.61 0 0 1-2 .76s-.8 2.46-1.47 2.45a5.6 5.6 0 0 1-1.9-.79z"}),t.jsx("path",{fill:"#FF9A6C",d:"M260.67 337.83q.283-.12.54-.29l1.5-.86a55 55 0 0 1 5.82-2.79h-.12l4.81 1.62-.14-.24a6 6 0 0 0-.1 1.23c-.004.451.124.892.37 1.27.159.193.371.336.61.41.218.096.452.147.69.15a2.07 2.07 0 0 0 1.6-.75l.06-.07-.31.06.15.09q.29.183.6.33.315.159.65.27.175.068.36.1a.84.84 0 0 0 .47 0c.245-.137.449-.337.59-.58q.195-.309.35-.64.31-.66.54-1.35l-.32.15a1.9 1.9 0 0 0 1.94-.33c.271-.246.448-.578.5-.94a4.6 4.6 0 0 0 0-1 27 27 0 0 0-.8-3.77l-1.35-3.13-.85-2a10 10 0 0 0-1-1.95 5.35 5.35 0 0 0-1.6-1.47 7 7 0 0 0-2-.74l-7.39-2h-.06q-.691.008-1.37.14a2.27 2.27 0 0 0-1.28.62h.29a2.77 2.77 0 0 0-2.58-.26 3.25 3.25 0 0 0-1.59 1.82l.08-.1-7.17 4.65-1.93 1.29a6 6 0 0 0-.66.48q.379-.16.72-.39l2-1.2 7.25-4.5v-.06a2.88 2.88 0 0 1 1.39-1.58 2.38 2.38 0 0 1 2.18.25l.16.1.13-.14a1.9 1.9 0 0 1 1-.46 6.6 6.6 0 0 1 1.27-.12l7.37 2.08a6.6 6.6 0 0 1 1.85.69 4.8 4.8 0 0 1 1.44 1.34c.376.58.684 1.2.92 1.85.29.66.57 1.32.86 2l1.35 3.13c.351 1.21.615 2.443.79 3.69a4.4 4.4 0 0 1 0 .87 1.07 1.07 0 0 1-.34.64 1.43 1.43 0 0 1-1.43.24l-.24-.08-.08.23a10 10 0 0 1-.51 1.29c-.14.385-.373.729-.68 1a.8.8 0 0 1-.21 0l-.29-.08c-.2-.07-.4-.16-.6-.25a6 6 0 0 1-.57-.31l-.14-.08-.31.06v.06a2 2 0 0 1-.21.2 1.6 1.6 0 0 1-1 .39 1.4 1.4 0 0 1-.54-.11.75.75 0 0 1-.42-.27 3.06 3.06 0 0 1-.22-2.14v-.19l-.17-.05-4.82-1.56h-.12a48 48 0 0 0-5.78 2.94c-.65.39-1.14.71-1.47.94a3 3 0 0 0-.43.16"}),t.jsx("path",{fill:"#FF9A6C",d:"M265.28 322.43c.757.495 1.578.885 2.44 1.16 2.094.789 4.283 1.3 6.51 1.52l-.24-.22c.08.42.15.85.26 1.29a19.9 19.9 0 0 0 3.06 6.92q.658.94 1.44 1.78c.37.4.6.59.63.57s-.74-.95-1.76-2.56a22.1 22.1 0 0 1-3.1-8.08v-.21h-.2a31 31 0 0 1-6.44-1.33q-1.276-.495-2.6-.84"}),t.jsx("path",{fill:"#FF9A6C",d:"M272.12 328.27a13 13 0 0 0 4.24 8.75c.13-.11-1.33-1.77-2.49-4.19s-1.59-4.59-1.75-4.56"}),t.jsx("path",{fill:"#FF9A6C",d:"M249.39 335s.07.08.23.19q.357.238.74.43a8.8 8.8 0 0 0 3.09.86 8.73 8.73 0 0 0 4.78-.93 9.14 9.14 0 0 0 4.21-4.48l-.32.15a20.6 20.6 0 0 0 5.73 1.18q1.09.06 2.18 0a6.6 6.6 0 0 0 2.14-.35 1.65 1.65 0 0 0 .91-.75 1.52 1.52 0 0 0 .05-1.17 1.5 1.5 0 0 0-.79-.84l-.88-.38c-2.33-1-4.48-1.73-6.29-2.32s-3.31-1-4.34-1.26a8 8 0 0 0-1.63-.33 14 14 0 0 0 1.57.53c1 .32 2.48.79 4.28 1.42s3.91 1.43 6.22 2.42l.87.38c.235.11.418.307.51.55a1 1 0 0 1 0 .77c-.147.242-.379.42-.65.5a6.1 6.1 0 0 1-2 .3h-2.13a20.5 20.5 0 0 1-5.59-1.14l-.23-.08-.09.22a8.82 8.82 0 0 1-4 4.3 8.7 8.7 0 0 1-4.55 1 9.4 9.4 0 0 1-3-.7c-.66-.26-1-.47-1.02-.47"}),t.jsx("path",{fill:"#FFBF9D",d:"M144.58 285.09A14.91 14.91 0 0 1 130 270.16l-.62-49.51c-.58-13.29 6.46-24.72 19.39-24.94h1.2c12.05.51 21.69 10.44 22.16 22.83.44 11.53.91 22.66.59 28.82-.67 12.76-13.28 14-13.28 14v8.5a14.9 14.9 0 0 1-4.25 10.677 14.9 14.9 0 0 1-10.58 4.483z"}),t.jsx("path",{fill:"#FF9A6C",d:"M159.44 261.51a29.36 29.36 0 0 1-15.95-5.6s3.5 9.76 15.92 9.13z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M167.56 229.93a1.824 1.824 0 0 1-2.452 1.659 1.74 1.74 0 0 1-.966-.923A1.7 1.7 0 0 1 164 230a1.787 1.787 0 0 1 1.78-1.77 1.72 1.72 0 0 1 1.245.478 1.73 1.73 0 0 1 .535 1.222M169.27 224.11c-.23.23-1.53-.85-3.44-.92s-3.34.84-3.54.59.15-.53.77-1a4.8 4.8 0 0 1 2.85-.77 4.55 4.55 0 0 1 2.72 1c.57.56.75.99.64 1.1M150.25 229.93a1.8 1.8 0 0 1-.531 1.246 1.8 1.8 0 0 1-1.918.402 1.74 1.74 0 0 1-.954-.932 1.7 1.7 0 0 1-.137-.666c.008-.469.198-.916.531-1.246.332-.331.78-.519 1.249-.524a1.73 1.73 0 0 1 1.242.489 1.73 1.73 0 0 1 .518 1.231M150.57 223.77c-.23.23-1.54-.85-3.44-.92s-3.34.84-3.54.59.14-.53.77-1a4.8 4.8 0 0 1 2.85-.77 4.6 4.6 0 0 1 2.72 1c.56.56.75 1 .64 1.1M156.8 239.13a12.4 12.4 0 0 1 3.12-.44c.49 0 1-.11 1.05-.45a2.64 2.64 0 0 0-.27-1.5c-.41-1.23-.84-2.52-1.28-3.87-1.79-5.52-3-10-2.84-10.11s1.84 4.33 3.62 9.85c.43 1.36.84 2.65 1.22 3.89.294.625.357 1.333.18 2a1.23 1.23 0 0 1-.83.69 3.3 3.3 0 0 1-.83.09 12.4 12.4 0 0 1-3.14-.15M151.43 217.67c-.28.49-2.11-.12-4.36-.26s-4.14.13-4.35-.4c-.09-.25.31-.68 1.12-1a7.1 7.1 0 0 1 3.37-.54 7.16 7.16 0 0 1 3.26 1c.75.47 1.08.96.96 1.2M169.59 218.35c-.41.44-2-.07-3.82-.14s-3.45.21-3.8-.27c-.16-.23.1-.67.8-1.07a6.23 6.23 0 0 1 6.15.33c.64.47.85.94.67 1.15"}),t.jsx("path",{fill:"#FFBF9D",d:"M130 230.14c-.21-.1-8.42-2.95-8.5 5.78s8.46 7 8.48 6.77.02-12.55.02-12.55"}),t.jsx("path",{fill:"#FF9A6C",d:"M127.43 239.35s-.15.11-.4.22a1.45 1.45 0 0 1-1.11 0c-.89-.35-1.64-1.82-1.66-3.4a5 5 0 0 1 .43-2.17 1.73 1.73 0 0 1 1.12-1.16.74.74 0 0 1 .87.43c.12.24.06.42.11.43s.18-.14.11-.5a.9.9 0 0 0-.33-.55.992.992 0 0 0-.81-.23 2.09 2.09 0 0 0-1.56 1.33 5.3 5.3 0 0 0-.53 2.43c0 1.76.9 3.42 2.12 3.8a1.56 1.56 0 0 0 1.35-.22c.27-.2.32-.39.29-.41"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M136.1 208.34a6.22 6.22 0 0 1 4.24-4.84 8.67 8.67 0 0 1 5.73.07c4.79 1.74 13 4.35 15.09 2.68 3.06-2.4 3.8-4 3.8-4l1.69 1.84c1.37-.78-2.75-5.36-6.13-6.94-5.1-2.38-12.89-3.85-17.6-2.48-5.67 1.65-10.38 4.54-13.23 9.85a35.13 35.13 0 0 0-3.75 17.53c0 1.85-.29 7.15 1.49 7.56 1.39.31 3.16.93 3.06 3.59-.069.971.247 1.93.88 2.67 1.55 1.7 3.45.1 4.33-1.5 1.87-3.42 2.08-7.5 2.24-11.42a26.3 26.3 0 0 0-.53-8.31 26 26 0 0 1-1.37-5.36 4.5 4.5 0 0 1 .06-.94M157.13 243.85c.05.13-.34.46-1.13.63a4.5 4.5 0 0 1-3.07-.48 4.66 4.66 0 0 1-2.08-2.31c-.3-.75-.25-1.25-.11-1.29s.93 1.66 2.72 2.63 3.59.53 3.67.82"}),t.jsx("path",{fill:"#455A64",d:"m166 360.35-40.62-8.94-26.11-64.69S64.38 294.46 58.63 314c-5 16.85-15.26 91.33 8.1 137.24a35.29 35.29 0 0 0 31.5 19.14H276a44.07 44.07 0 0 0 43.8-39.16c1-9 1.7-17.53 1.56-23.09l-28.54-21.9z"}),t.jsx("path",{fill:"#000",d:"M274.6 382.85c12.51 16.34 27.73 31 45.93 40.62l.87-22.18-33.62-23.93z",opacity:"0.3"}),t.jsx("path",{fill:"#F5F5F5",d:"M140.43 274.14c0 1.18 9.24 5 13.41 3.32 6.36-2.54 5.57-7.53 5.57-7.53l3.53 3.72 35.37 53.9 26.29 17.35-42.08 13.33-44.12-50.68z"}),t.jsx("path",{fill:"#37474F",d:"m129.28 256.05-.93 1.74-4.2 7.83-17.47 11.14 35.93 42.71L159 358.23l39.3 12.3s-18.7-28.75-24.51-43.45-6.4-14-11.7-24.78a242 242 0 0 1-9.6-23.3zM213.46 333l7.71 7.19 2.18 4.44-28.66-13.33-20.69-29s-7.37-16.35-9.9-22.21c-2.67-6.16-4.66-9.65-4.66-9.65v-4.86l10.43 9.42 8.71 2.59 14.56 23z"}),t.jsx("path",{fill:"#37474F",d:"M204.63 305.88s-3.48-7.42-6.32-13.59c-6.4-13.9-21.49-15.22-21.49-15.22l16.68 46.26 20.43 14.49s5.82 2 6.55 0c0 0 4.25-15.34 4.12-15.4s-14.54-4.37-14.54-4.37l-5.8-13"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"m235.36 291.44-19.85 33.07 20.79-.61 18.33-30.64a1.77 1.77 0 0 0 .021-1.783 1.76 1.76 0 0 0-1.541-.897h-16.23a1.78 1.78 0 0 0-1.52.86"}),t.jsx("path",{fill:"#FFBF9D",d:"m159 328.84 49.69-5.91 8.35-14.63 6.54-3.59a3.25 3.25 0 0 1 3.49.22l.62.45 4.85-.61a3.82 3.82 0 0 1 2.39.47l3.44 2a1.66 1.66 0 0 1 .82 1.42 1.65 1.65 0 0 1-.596 1.267 1.65 1.65 0 0 1-1.354.353l-3.34-.61-5.12 1.67s3.3.35 3.72 2.85-1.25 2.56-1.25 2.56 3.47 2 1 5c0 0 2.9 1.93-.35 5.59-2.19 2.48-18 10.56-18 10.56L159 358.23z"}),t.jsx("path",{fill:"#FF9A6C",d:"M232.17 321.73s.37 0 .81.45a2.622 2.622 0 0 1 .53 2.45 7.27 7.27 0 0 1-2.14 3.06 26.7 26.7 0 0 1-3.49 2.88 47 47 0 0 1-7.17 3.95c-1.002.519-2.05.945-3.13 1.27q1.446-.901 3-1.6a59 59 0 0 0 7-4.05 28 28 0 0 0 3.46-2.8 7.1 7.1 0 0 0 2.11-2.81 2.456 2.456 0 0 0-.32-2.22 3.2 3.2 0 0 0-.66-.58M227.51 305.51a7 7 0 0 1-2.48.94 7 7 0 0 1-2.62.44 6.8 6.8 0 0 1 2.48-.94 7 7 0 0 1 2.62-.44M233.91 309.63a14 14 0 0 1-3.45 1.42 13.8 13.8 0 0 1-3.62.93 13.2 13.2 0 0 1 3.45-1.42 13.4 13.4 0 0 1 3.62-.93M228 316.26c-.15 0-.22-.45-.39-.94s-.37-.87-.26-1 .55.2.75.81-.01 1.15-.1 1.13M229.65 322c-.15 0-.09-.75-.3-1.56s-.57-1.43-.46-1.53.73.44 1 1.4-.11 1.69-.24 1.69"}),t.jsx("path",{fill:"#37474F",d:"M108.08 275.87c-1.66 1-15.71 10.6-13.66 26.32s33.15 51.26 39.64 51.94l24.95 4.1v-29.39l-12-.68-15.68-30.76z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M159 327.42a5 5 0 0 1-.89.08l-2.52.1-8.94.2h-.12l-.08-.1-6.32-8.5c-3.77-5.09-7.15-9.72-9.58-13.09l-2.85-4a11 11 0 0 1-1-1.52q.634.65 1.16 1.39l3 3.9c2.51 3.3 6 7.9 9.71 13l6.27 8.53-.2-.1h11.459999999999999c.303-.001.606.036.9.11M152.94 282.84a6 6 0 0 1-.49-.89l-1.23-2.58h.27a31.5 31.5 0 0 0-2.41 4.15 36.4 36.4 0 0 1-3.13 5.5l-.2.28-.21-.27c-1.62-2-3.47-4.11-5.46-6.28-4.35-4.73-8.51-8.83-11.48-11.83l-3.51-3.57a11 11 0 0 1-1.22-1.36q.736.553 1.38 1.21l3.63 3.44c3 2.93 7.25 7 11.62 11.73 2 2.18 3.84 4.32 5.45 6.33h-.42a40 40 0 0 0 3.16-5.4 28 28 0 0 1 2.55-4.13l.16-.22.1.24c.45 1.08.82 1.95 1.1 2.64q.234.483.34 1.01M170 275.32c.333.446.587.947.75 1.48q.769 2.028 1.31 4.13l.34 1.22-.78-1a34 34 0 0 0-3.66-3.87c-1.16-1.06-2.29-2-3.32-2.94l.42-.16a43 43 0 0 0-.15 4.93 5.2 5.2 0 0 1-.25 1.93c-.06 0 0-.71-.07-1.92a32 32 0 0 1 0-5l.05-.47.37.31c1 .87 2.2 1.84 3.37 2.92a29.5 29.5 0 0 1 3.68 4l-.44.21c-.43-1.73-.78-3.17-1.1-4.16a12 12 0 0 1-.52-1.61M206.09 323.24a10 10 0 0 1-1.19-1.1l-3.07-3.14c-1.29-1.35-2.82-2.86-4.5-4.73-.77-1-1.45-2.07-2.25-3.12a21 21 0 0 1-2.08-3.62c-1.19-2.58-2.09-5.13-2.9-7.44s-1.52-4.4-2.17-6.12-1.25-3.1-1.71-4a12.5 12.5 0 0 1-.72-1.44s.11.1.26.32q.356.48.65 1a34 34 0 0 1 1.89 4c.71 1.72 1.46 3.79 2.29 6.09s1.74 4.83 2.92 7.38a21.5 21.5 0 0 0 2 3.53c.81 1.07 1.49 2.18 2.22 3.13 1.57 1.79 3.14 3.41 4.37 4.77l2.95 3.25q.572.576 1.04 1.24M220.51 339.83l94.32-2.65c1.494-.04 2.98.236 4.36.81 3.43 1.46 9.6 5.21 13.83 14.19 6.13 13 34.73 68 34.73 68L338.83 435l-35.47-65.8L194 359.9l1.27-8.74z"}),t.jsx("path",{fill:"#E0E0E0",d:"m330.24 423.41 15.07 25.87 1 6.54a7.316 7.316 0 0 0 8.35 6.13l45.87-7a3.574 3.574 0 0 0 3.092-3.302 3.6 3.6 0 0 0-.262-1.598 3.1 3.1 0 0 0-2.18-1.78c-3.84-1-33.44-11.85-33.44-11.85l-12.34-24.76z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M342.87 429.4a28.3 28.3 0 0 1-3.39-4.16 27 27 0 0 1-3-4.47 28.7 28.7 0 0 1 3.38 4.16 27.6 27.6 0 0 1 3.01 4.47M351.87 425.78a18.2 18.2 0 0 1-3.16-4.36 18.7 18.7 0 0 1-2.24-4.9c.14-.07 1.2 2.09 2.69 4.64s2.84 4.53 2.71 4.62M358.16 461.12c-.1 0-.34-.89-1-2.24a13.36 13.36 0 0 0-8.93-7c-1.47-.35-2.42-.36-2.42-.46a5.66 5.66 0 0 1 2.51 0 12.26 12.26 0 0 1 9.23 7.25c.378.763.586 1.599.61 2.45M389.07 456.67a3.85 3.85 0 0 1-.73-1.71 8 8 0 0 1 .22-4.51 10.8 10.8 0 0 1 2.39-3.81c.389-.49.872-.898 1.42-1.2.06.07-.41.6-1.1 1.48a13.9 13.9 0 0 0-2.14 3.73 8.9 8.9 0 0 0-.37 4.22q.224.888.31 1.8"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M191.63 352.7s97.33-9.76 102.06-9.37c8.73.72 24.83 14.49 53.4 33.67a263.2 263.2 0 0 1 41 34.45l-9.13 20.84s-64-23.33-74.05-31.72c-8.34-7-23.56-16.9-23.56-16.9l-37.54.38-27.91 2.46a41 41 0 0 1-36.18-15.93l-10.83-14.15z"}),t.jsx("path",{fill:"#455A64",d:"M280.88 383.38s.16.09.45.29l1.31.9 5.05 3.55c4.39 3.13 10.83 7.63 18.73 13.6.5.37 1 .8 1.5 1.13l1.61 1c1.16.58 2.32 1.22 3.55 1.79l3.76 1.75 4 1.75a842 842 0 0 0 17.49 7.32c12.48 5.07 26.48 10.58 41.59 16.39l-.33.15 8.27-21 .06.3-11.36-11.58c-2.67-2.31-5.53-4.77-8.45-7.2a598 598 0 0 0-54.56-40 53 53 0 0 0-8.26-5.81 41.2 41.2 0 0 0-8.83-3.84c-.76-.2-1.52-.36-2.27-.55l-2.27-.35-2.27-.12h-11l-29.39-.06-19.08-.08h-6.3a4 4 0 0 1-.44 0h6.74l19.08-.07 29.39-.06h11l2.31.11 2.32.35c.76.19 1.53.35 2.3.56a41 41 0 0 1 8.94 3.86 53 53 0 0 1 8.36 5.86 589 589 0 0 1 54.64 40c2.93 2.43 5.79 4.89 8.46 7.21l11.36 11.59.12.13-.06.17-8.3 21-.09.24-.24-.09c-15.11-5.83-29.11-11.37-41.58-16.47-6.23-2.55-12.07-5-17.47-7.37l-4-1.77-3.8-1.96c-1.22-.59-2.39-1.23-3.55-1.82l-1.65-1c-.54-.33-1-.76-1.5-1.13-7.86-6-14.28-10.55-18.63-13.73l-5-3.61-1.28-.94c-.31-.27-.43-.39-.43-.39"}),t.jsx("path",{fill:"#E0E0E0",d:"m358.26 427 27 10.61 4.49 4.86a7.32 7.32 0 0 0 5.097 2.346 7.33 7.33 0 0 0 5.263-1.946l34.06-31.52a3.58 3.58 0 0 0-.4-5.65 3.11 3.11 0 0 0-2.8-.25c-3.73 1.34-34.34 8.91-34.34 8.91L376.1 398z"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M358.26 427s.09-.17.29-.51l.91-1.5c.81-1.35 2-3.3 3.51-5.8 3.08-5.07 7.52-12.35 13-21.29l.11-.19.18.14 20.53 16.32h-.21l18.26-4.6 9.65-2.51c1.63-.44 3.28-.87 4.92-1.35l1.22-.38a5 5 0 0 1 1.32-.31 3.4 3.4 0 0 1 2.55 1 3.84 3.84 0 0 1 .37 5 7 7 0 0 1-.92 1l-.93.86-1.85 1.71-7.26 6.71-13.73 12.68-6.39 5.9-3.06 2.83q-.747.724-1.62 1.29a7.53 7.53 0 0 1-9.17-1c-1.72-1.79-3.28-3.54-4.81-5.19h.07c-8.33-3.32-15.07-6-19.76-7.88l-5.32-2.15-1.38-.56-.45-.19s.18.05.51.18l1.41.53 5.4 2.08 19.72 7.65c1.54 1.64 3.13 3.4 4.81 5.15a7.134 7.134 0 0 0 6.9 1.69 7 7 0 0 0 1.77-.79 10 10 0 0 0 1.54-1.25c1-.93 2-1.88 3.06-2.83q3.1-2.88 6.38-5.92c4.36-4 8.95-8.3 13.71-12.7q3.56-3.31 7.25-6.72l1.85-1.71a21 21 0 0 0 1.78-1.74 3.339 3.339 0 0 0-.3-4.34 2.85 2.85 0 0 0-2.17-.82 4.3 4.3 0 0 0-1.18.29l-1.25.38c-1.65.48-3.29.91-4.93 1.35l-9.66 2.5-18.26 4.57h-.12l-.09-.07L376 398.15h.29l-13.09 21.06-3.63 5.79-1 1.51c-.18.3-.31.49-.31.49"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M402.51 440.22c-.07.07-.78-.55-2.11-1.28a13.33 13.33 0 0 0-11.32-.81c-1.41.53-2.21 1.05-2.27 1a5.9 5.9 0 0 1 2.11-1.37 12.26 12.26 0 0 1 11.7.84c.744.391 1.39.945 1.89 1.62M425.63 419.23a4.1 4.1 0 0 1-1.57-1 8 8 0 0 1-2.33-3.86 10.9 10.9 0 0 1-.16-4.5 4.5 4.5 0 0 1 .51-1.78c.05.611.023 1.226-.08 1.83a13.3 13.3 0 0 0 .31 4.29 8.9 8.9 0 0 0 2.06 3.71c.75.8 1.32 1.22 1.26 1.31"}),t.jsx("path",{fill:"#455A64",d:"M264.33 383.39c-2.09-9.91-6.36-20.05-14.81-25.62-6.41-4.24-14.34-5.28-22-6.22L68.06 331.94c-1.43 25.13 9.33 56.41 20.31 79.07 1.7 3.52 3.67 7.12 6.93 9.27 4 2.62 9.08 2.59 13.84 2.47 53.65-1.37 107.32-3.65 160.67-9.52-3-9.67-3.4-19.94-5.48-29.84"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M126.73 339.15a12 12 0 0 1-1.88-.12l-5.1-.55c-4.3-.5-10.23-1.23-16.77-2.13s-12.46-1.81-16.72-2.56c-2.14-.38-3.86-.69-5-1a12.5 12.5 0 0 1-1.83-.45q.943.044 1.87.23l5.06.78c4.28.64 10.19 1.49 16.73 2.39l16.75 2.29 5.08.73q.92.124 1.81.39M127.55 470.33a2 2 0 0 1-.16-.31c-.12-.23-.26-.54-.44-.92l-1.62-3.57-1.17-2.53c-.4-1-.79-2-1.24-3.14-.86-2.25-1.94-4.79-2.86-7.7-.48-1.44-1-2.95-1.51-4.53s-1-3.26-1.45-5c-1-3.43-1.86-7.17-2.78-11.09a181.5 181.5 0 0 1-3.61-52.12c.37-4 .66-7.82 1.22-11.36.27-1.77.45-3.49.75-5.13s.6-3.2.88-4.7c.51-3 1.23-5.67 1.77-8 .29-1.18.53-2.27.8-3.27s.56-1.9.8-2.72c.47-1.61.85-2.87 1.11-3.76l.31-1q.043-.171.12-.33-.012.175-.07.34l-.25 1-1 3.78-.75 2.73c-.25 1-.48 2.11-.75 3.28-.52 2.36-1.21 5-1.69 8-.26 1.49-.55 3.06-.84 4.69s-.46 3.35-.71 5.12c-.55 3.53-.82 7.34-1.18 11.34a186.9 186.9 0 0 0 3.6 52c.91 3.91 1.7 7.65 2.73 11.07.49 1.72.9 3.39 1.41 5s1 3.09 1.48 4.53c.89 2.91 1.94 5.45 2.77 7.72.44 1.13.81 2.19 1.2 3.15l1.12 2.59 1.52 3.61.39.95q.064.135.1.28"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M125.86 419.66c-2.086.19-4.184.19-6.27 0a35 35 0 0 1-6.26-.57 36 36 0 0 1 6.28 0 35.7 35.7 0 0 1 6.25.57M124.41 427a19.8 19.8 0 0 1-6.44-1.69 19.5 19.5 0 0 1-5.8-3.27c.09-.14 2.63 1.39 6 2.75s6.27 1.99 6.24 2.21M110.44 376.88a8.3 8.3 0 0 1-4.15 1.27 8.5 8.5 0 0 1-4.32-.45c0-.17 1.93.12 4.27-.11s4.14-.86 4.2-.71M113.63 374.48a7.1 7.1 0 0 1-4.58-.58 7 7 0 0 1-3.6-2.89 23.5 23.5 0 0 0 3.82 2.37c2.28.99 4.36.92 4.36 1.1M169.78 203.16a6.94 6.94 0 0 0-4.77-4.24 11.9 11.9 0 0 0-6.56.24l-20.72 4.74c3 2 9.17 3.88 12.71 4.26 5.17.55 8.81.6 11.89-1.18a3.88 3.88 0 0 0 5.45 2 4.998 4.998 0 0 0 2-5.82M376.79 420.52a41.3 41.3 0 0 1-12-4.52c.06-.14 2.7 1 6 2.24s6.04 2.14 6 2.28M381.35 411.66a58 58 0 0 1-5.31-2.51 55 55 0 0 1-5.27-2.58 24 24 0 0 1 5.5 2.11 23.2 23.2 0 0 1 5.08 2.98"}),t.jsx("path",{fill:"#E0E0E0",d:"m216.31 348.91 41.77.51 50.44-10a4 4 0 0 0 3.13-3.28l6.86-45.42a3.35 3.35 0 0 0-.96-2.877 3.35 3.35 0 0 0-2.89-.923l-51.55 8.39a3.36 3.36 0 0 0-2.79 2.89l-5.75 46.19-38.2-.19a2.357 2.357 0 0 0-2.36 2.35 2.35 2.35 0 0 0 2.3 2.36"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M216.31 348.91a1.7 1.7 0 0 1-.79-.13 2.365 2.365 0 0 1-1.514-2.707 2.42 2.42 0 0 1 2.004-1.913c1.53-.06 3.26 0 5.24 0l33.31.08-.18.16c1.64-13.29 3.59-29 5.74-46.48a3.63 3.63 0 0 1 2.21-2.61 8 8 0 0 1 1.68-.35l1.66-.28 6.73-1.09 13.87-2.27 14.37-2.32 7.34-1.19 3.71-.61 1.86-.3a9.2 9.2 0 0 1 1.94-.21 3.64 3.64 0 0 1 3.15 2.51 4.3 4.3 0 0 1 .06 2.07l-.3 1.94q-.58 3.88-1.16 7.71c-.77 5.09-1.53 10.12-2.28 15.05s-1.48 9.76-2.19 14.5l-.54 3.52c-.09.59-.17 1.17-.26 1.75a5.2 5.2 0 0 1-.49 1.77 4.19 4.19 0 0 1-2.83 2.19l-3.38.67-47.15 9.28-30.62-.45-8.27-.15L217 349h2.15l8.28.05 30.62.29 47.13-9.4 3.37-.68a3.68 3.68 0 0 0 2.5-1.93 4.5 4.5 0 0 0 .43-1.62l.27-1.75c.17-1.17.35-2.35.53-3.53l2.18-14.5q1.11-7.39 2.27-15 .57-3.82 1.16-7.71l.29-1.94a3.66 3.66 0 0 0 0-1.83 3.1 3.1 0 0 0-2.69-2.15 9 9 0 0 0-1.81.2l-1.87.31-3.7.6-7.35 1.19-14.36 2.34-13.87 2.25-6.73 1.09-1.66.27a7.6 7.6 0 0 0-1.59.33 3.09 3.09 0 0 0-1.9 2.25c-2.2 17.42-4.18 33.15-5.85 46.43v.16h-.17l-33.31-.24c-2 0-3.73-.06-5.22 0a2.28 2.28 0 0 0-1.958 2.021 2.3 2.3 0 0 0 1.448 2.389q.359.053.72.02"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M264.78 296.77c.14 0-1.24 12.07-3.09 26.93s-3.46 26.89-3.61 26.87 1.25-12.07 3.1-26.93 3.46-26.89 3.6-26.87"}),t.jsx("path",{fill:"#fff",d:"M287.2 315.52c-1.05 2.19-.47 4.65 1.29 5.5s4-.25 5.09-2.44.47-4.65-1.29-5.49-4.04.24-5.09 2.43M306.18 218.45H210a5 5 0 0 0-3.536 1.464A5 5 0 0 0 205 223.45v43.82c0 1.326.527 2.598 1.464 3.536A5 5 0 0 0 210 272.27h40.35l8.57 11 7.15-11h40.12a5 5 0 0 0 3.536-1.464 5 5 0 0 0 1.464-3.536v-43.81a5 5 0 0 0-3.091-4.631 5 5 0 0 0-1.919-.379"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M306.18 218.45h.48c.47.035.931.139 1.37.31a4.94 4.94 0 0 1 1.89 1.28 5 5 0 0 1 1.31 2.86c.09 4.77.07 11.71.1 20.5v22.71c.031.728-.003 1.458-.1 2.18a5.05 5.05 0 0 1-.91 2.05 5.19 5.19 0 0 1-3.95 2.13h-40.36l.2-.11-7.14 11-.19.29-.21-.27-8.58-11 .2.1h-40.9a5.27 5.27 0 0 1-4.54-4.07 9.4 9.4 0 0 1-.13-2.09v-42.86a5.24 5.24 0 0 1 2.85-4.66 5.2 5.2 0 0 1 1.8-.55c.63-.06 1.21 0 1.81 0h47.71l34.59.08 9.4.05-9.4.05-34.59.08h-49.45a4.5 4.5 0 0 0-1.63.5 4.77 4.77 0 0 0-2.58 4.23v42.89c-.033.669.007 1.34.12 2a4.78 4.78 0 0 0 2.25 3.05c.563.332 1.19.54 1.84.61.64.06 1.36 0 2 0h39l.07.1 8.57 11h-.4l7.15-11 .07-.11h40.47a4.81 4.81 0 0 0 4.5-3.84 12 12 0 0 0 .1-2.11v-22.71c0-8.78.07-15.75 0-20.49a5 5 0 0 0-3.08-4.08 6 6 0 0 0-1.71-.1"}),t.jsx("path",{fill:"#37474F",d:"M232.56 228.03h-9.58a1.28 1.28 0 0 0-1.28 1.28v6.84c0 .707.573 1.28 1.28 1.28h9.58a1.28 1.28 0 0 0 1.28-1.28v-6.84a1.28 1.28 0 0 0-1.28-1.28"}),t.jsx("path",{fill:"#fff",d:"m221.9 228.28 4.62 4.93c.247.335.599.578 1 .69a1.46 1.46 0 0 0 1.35-.52c.84-.86 1.64-1.75 2.46-2.62s1.56-1.65 2.33-2.48a.13.13 0 0 0 .021-.085.13.13 0 0 0-.038-.078.13.13 0 0 0-.078-.038.13.13 0 0 0-.085.021l-4.41 4.7a3.9 3.9 0 0 1-.7.7c-.66.42-1.22 0-1.66-.47-.84-.88-1.67-1.77-2.5-2.66l-2.12-2.27c-.11-.11-.29.06-.18.18z"}),t.jsx("path",{fill:"#fff",d:"m221.85 237.37 3.71-4.22.52-.59c.11-.12-.07-.3-.17-.18-1.24 1.41-2.48 2.81-3.71 4.22l-.53.59c-.1.12.07.3.18.18M233.65 237l-3.47-4-.5-.58c-.11-.13-.28 0-.18.17l3.47 4c.17.2.34.39.5.59s.29-.06.18-.18"}),t.jsx("path",{fill:"var(--LoginSVG-fill)",d:"M242.8 235.93v-3.11l-1.53 2.56h-.54l-1.52-2.5v3.05h-1.13v-5.19h1L241 234l1.91-3.23h1v5.19zM249 234.26h-3a1.06 1.06 0 0 0 1.14.8 1.34 1.34 0 0 0 1-.38l.62.67a2.1 2.1 0 0 1-1.65.64 2.077 2.077 0 0 1-2.099-1.212 2.1 2.1 0 0 1-.181-.838 2 2 0 0 1 .609-1.502 2 2 0 0 1 1.521-.558 2 2 0 0 1 1.92 1.308c.096.26.137.536.12.812zm-3-.67h2a.997.997 0 0 0-1-1 .997.997 0 0 0-1 1M249.36 235.56l.39-.83c.416.252.893.387 1.38.39.54 0 .74-.15.74-.37 0-.65-2.41 0-2.41-1.58 0-.75.68-1.29 1.84-1.29a3.3 3.3 0 0 1 1.54.35l-.39.82a2.3 2.3 0 0 0-1.15-.29c-.52 0-.74.16-.74.37 0 .68 2.41 0 2.41 1.59 0 .74-.69 1.27-1.88 1.27a3.36 3.36 0 0 1-1.73-.43M253.3 235.56l.38-.83c.42.251.9.386 1.39.39.53 0 .73-.15.73-.37 0-.65-2.41 0-2.41-1.58 0-.75.68-1.29 1.85-1.29a3.25 3.25 0 0 1 1.53.35l-.38.82a2.3 2.3 0 0 0-1.15-.29c-.52 0-.74.16-.74.37 0 .68 2.41 0 2.41 1.59 0 .74-.69 1.27-1.89 1.27a3.35 3.35 0 0 1-1.72-.43M261.15 233.65v2.28h-1.09v-.5a1.29 1.29 0 0 1-1.21.56c-.94 0-1.49-.52-1.49-1.21s.49-1.19 1.71-1.19h.93c0-.5-.3-.79-.92-.79a1.93 1.93 0 0 0-1.15.37l-.41-.81a3.05 3.05 0 0 1 1.72-.48c1.2 0 1.91.57 1.91 1.77m-1.16 1v-.41h-.79c-.54 0-.72.2-.72.47s.25.48.66.48a.85.85 0 0 0 .86-.52zM266.35 231.94v3.32a2 2 0 0 1-.6 1.622 1.998 1.998 0 0 1-1.64.548 3.32 3.32 0 0 1-2-.55l.46-.83c.411.294.905.451 1.41.45.82 0 1.17-.37 1.17-1.09v-.17a1.6 1.6 0 0 1-1.26.5 1.93 1.93 0 1 1 0-3.86 1.62 1.62 0 0 1 1.32.57v-.51zm-1.14 1.87a1.05 1.05 0 1 0-1 1 .997.997 0 0 0 1-1M271.31 234.26h-3a1.06 1.06 0 0 0 1.14.8 1.34 1.34 0 0 0 1-.38l.62.67a2.1 2.1 0 0 1-1.65.64 2.06 2.06 0 0 1-2.09-1.215 2.1 2.1 0 0 1-.18-.835 2.003 2.003 0 0 1 2.12-2.06 2.01 2.01 0 0 1 1.942 1.264 2 2 0 0 1 .138.806c-.02.05-.03.22-.04.31m-3-.67h2a.997.997 0 0 0-1-1 .997.997 0 0 0-1 1M271.71 235.56l.39-.83c.42.253.9.388 1.39.39.53 0 .73-.15.73-.37 0-.65-2.41 0-2.41-1.58 0-.75.68-1.29 1.85-1.29a3.3 3.3 0 0 1 1.53.35l-.38.82a2.33 2.33 0 0 0-1.15-.29c-.52 0-.75.16-.75.37 0 .68 2.41 0 2.41 1.59 0 .74-.68 1.27-1.88 1.27a3.4 3.4 0 0 1-1.73-.43M277.89 233.34a2.842 2.842 0 0 1 4.785-2.226 2.85 2.85 0 0 1 .691 3.113 2.85 2.85 0 0 1-2.636 1.793 2.7 2.7 0 0 1-1.996-.729 2.68 2.68 0 0 1-.844-1.951m4.46 0a1.631 1.631 0 0 0-3.232-.271A1.63 1.63 0 0 0 280.73 235a1.6 1.6 0 0 0 1.169-.479 1.59 1.59 0 0 0 .451-1.181M285.47 231.72h-1.66v-1h4.52v1h-1.66v4.21h-1.2zM293.48 232.62c0 1.16-.87 1.88-2.26 1.88h-1v1.43H289v-5.19h2.24c1.37 0 2.24.72 2.24 1.88m-1.22 0c0-.57-.37-.9-1.1-.9h-1v1.8h1c.73 0 1.1-.33 1.1-.9M247.84 254.23c0 2.8-2.5 4.56-6.27 4.56s-6.24-1.76-6.24-4.56a3.78 3.78 0 0 1 2.25-3.5 3.44 3.44 0 0 1-1.72-3c0-2.61 2.33-4.25 5.71-4.25s5.74 1.64 5.74 4.25a3.44 3.44 0 0 1-1.74 3 3.748 3.748 0 0 1 2.27 3.5m-3.47-.11c0-1.31-1.09-2.12-2.8-2.12s-2.76.81-2.76 2.12 1.06 2.15 2.76 2.15 2.8-.83 2.8-2.15m-5.09-6.3c0 1.13.89 1.83 2.29 1.83s2.33-.7 2.33-1.83-.9-1.82-2.33-1.82-2.29.66-2.29 1.82M261.85 254.23c0 2.8-2.51 4.56-6.28 4.56s-6.24-1.76-6.24-4.56a3.78 3.78 0 0 1 2.25-3.5 3.44 3.44 0 0 1-1.72-3c0-2.61 2.34-4.25 5.71-4.25s5.75 1.64 5.75 4.25a3.45 3.45 0 0 1-1.74 3 3.76 3.76 0 0 1 2.27 3.5m-3.48-.11c0-1.31-1.08-2.12-2.8-2.12s-2.76.81-2.76 2.12 1.06 2.15 2.76 2.15 2.8-.83 2.8-2.15m-5.09-6.3c0 1.13.89 1.83 2.29 1.83s2.33-.7 2.33-1.83-.9-1.82-2.33-1.82-2.29.66-2.29 1.82M269.15 243.69v14.85h-3.44v-12.09h-3v-2.76zM282.83 255.74v2.8h-11.22v-2.23l5.72-5.41c1.32-1.25 1.55-2 1.55-2.74 0-1.16-.8-1.84-2.37-1.84a3.64 3.64 0 0 0-3.08 1.48l-2.5-1.61a6.9 6.9 0 0 1 5.9-2.76c3.3 0 5.51 1.7 5.51 4.39 0 1.45-.4 2.76-2.48 4.69l-3.42 3.23z"})]}),zl=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    
    --element-width: 60%;
    
    @media (max-width: 1300px) {
        --element-width: 75%;
    }

    @media (max-width: 1100px) {
        --element-width: 85%;
    }
    
    @media (max-width: 970px) {
        --element-width: 50%;
    }

    @media (max-width: 750px) {
        --element-width: 70%;
    }

    @media (max-width: 500px) {
        --element-width: 100%;
    }

    @media (max-width: 370px) {
        --element-width: 90%;
    }
`,b2=u.div`
    width: 50%;
    min-height: 100%;
    overflow: hidden;
    justify-content: center;
    display: flex;
    padding-inline: 80px;
    flex-direction: column;
    transition: background-color 0.6s ease-in-out;
    
    @media (max-width: 970px) {
        width: 100%;
        padding-inline: 40px;
    }
`,Al=u(b2)`
    @media (max-width: 970px) {
        display: ${e=>e.currentStep===2?"none":"flex"};
    }
`,Vl=u(b2)`
    @media (max-width: 970px) {
        display: ${e=>e.currentStep===2?"flex":"none"};
    }
`,Qe=u.h1`
    color: var(--textColor);
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    font-weight: bolder;
    text-align: center;
    margin-block: 40px;
`,Je=u.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    width: 100%;
    margin-block: 20px;
    font-weight: bolder;
    opacity: 0.7;
`,Pl=u.p`
    color: var(--textColor);
    font-size: 0.8em;
    text-align: center;
    width: 100%;
    font-weight: bolder;
    opacity: 0.5;
`,y2=u.button`
    background-color: var(--textColor);
    color: var(--backgroundColor);
    border: none;
    border-radius: 10px;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: bolder;
    margin-top: 20px;
    width: 200px;
    font-size: 0.9em;

    &:hover {
        color: var(--AccentColor);
    }
`,V1=u.p`
    color: var(--textColor);
    font-size: 0.9em;
    margin-bottom: 8px;
    font-weight: bolder;
    width: var(--element-width);
`,P1=u.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--glassBackground);
    width: var(--element-width);
    margin-bottom: 20px;
    border: 2px solid ${e=>e.isValid===!0?"var(--AccentColor)":e.isValid===!1?"#ff6b6b":"transparent"};
`,$1=u.input`
    border: none;
    border-radius: 10px;
    padding: 9px 16px;
    font-size: 0.9em;
    background-color: transparent;
    color: var(--textColor);
    outline: none;
    opacity: ${e=>e.disabled?.5:1};
    cursor: ${e=>e.disabled?"not-allowed":"text"};

    &::placeholder {
        color: var(--textColor);
        opacity: 0.7;
    }

    &:disabled {
        pointer-events: none;
    }
`,$l=u.p`
    color: var(--textColor);
    font-size: 0.8em;
    cursor: pointer;
    margin-top: 20px;
    width: var(--element-width);
    text-align: left;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
        color: var(--AccentColor);
    }
`,Hl=u.div`
    display: flex;
    gap: 10px;
    width: var(--element-width);
    justify-content: center;
    margin-bottom: 20px;
`,Dl=u.input`
    width: 50px;
    height: 50px;
    border: 2px solid var(--textColor);
    border-radius: 10px;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    background-color: transparent;
    color: var(--textColor);
    outline: none;
    opacity: ${e=>e.disabled?.5:1};
    cursor: ${e=>e.disabled?"not-allowed":"text"};
    transition: all 0.7s ease;
    border-color: ${e=>e.filled?"var(--AccentColor)":"var(--textColor)"};

    &:disabled {
        pointer-events: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
`,H1=u(y2)`
    width: var(--element-width);
    margin-top: 30px;
    border-radius: 50px;
    transition: all 0.5s;
    opacity: ${e=>e.disabled?.5:1};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    pointer-events: ${e=>e.disabled?"none":"auto"};

    &:hover {
        background-color: ${e=>e.disabled?"var(--textColor)":"var(--AccentColor)"};
        color: ${e=>e.disabled?"var(--backgroundColor)":"var(--textColor)"};
    }
`,D1=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    width: var(--element-width);
`,oe=u.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${e=>e.active?"var(--AccentColor)":"var(--textColor)"};
    opacity: ${e=>e.active?1:.3};
    transition: all 0.3s ease;
`,Me=u.div`
    opacity: ${e=>e.show?1:0};
    transform: translateX(${e=>e.show?"0":e.direction==="left"?"-20px":"20px"});
    transition: all 0.5s ease-in-out;
    display: ${e=>e.show?"flex":"none"};
    flex-direction: column;
    width: 100%;
`,j0=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Fl=u(Z0)`
    font-size: 5em;
    fill: var(--AccentColor);
`,Nl=u(y2)`
    margin-top: 30px;
    border-radius: 50px;
    padding-inline: 25px;

    &:hover {
        background-color: var(--AccentColor);
        color: var(--textColor);
    }
`;u.p`
    color: ${e=>e.isValid?"var(--AccentColor)":"#ff6b6b"};
    font-size: 0.75em;
    margin-top: -15px;
    margin-bottom: 15px;
    font-weight: 500;
    opacity: 0.8;
    width: var(--element-width);
`;function Bl(){const{t:e}=B(),[a,o]=d.useState(1),[r,n]=d.useState(!1),[s,l]=d.useState(!1),[h,c]=d.useState(""),[p,m]=d.useState(["","","",""]),[v,S]=d.useState(""),[x,f]=d.useState(""),[b,C]=d.useState(5),w=O=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O),y=()=>p.every(O=>O!==""),g=()=>v.length>=6,E=()=>v===x&&v.length>0,R=w(h),k=y(),M=g()&&E(),T=()=>{n(!0),l(!0),setTimeout(()=>{n(!1),o(2),setTimeout(()=>{l(!1)},1300)},2e3)},I=()=>{n(!0),l(!0),setTimeout(()=>{n(!1),o(3),setTimeout(()=>{l(!1)},1300)},2e3)},_=()=>{n(!0),l(!0),setTimeout(()=>{n(!1),o(4),setTimeout(()=>{l(!1)},1300),C(5);const O=setInterval(()=>{C(A=>(A===1&&(clearInterval(O),setTimeout(()=>{n(!0),l(!0),setTimeout(()=>{n(!1),o(5),setTimeout(()=>{l(!1)},1300)},1e3)},500)),A-1))},1e3)},2e3)},L=(O,A)=>{if(A.length>1||A&&!/^\d$/.test(A))return;const H=[...p];if(H[O]=A,m(H),A&&O<3){const W=document.getElementById(`code-${O+1}`);W&&W.focus()}},z=O=>{O.preventDefault();const H=O.clipboardData.getData("text").replace(/\D/g,"").slice(0,4);if(H.length>0){const W=["","","",""];for(let Z=0;Z<H.length&&Z<4;Z++)W[Z]=H[Z];m(W);const te=Math.min(H.length,3),ie=document.getElementById(`code-${te}`);ie&&ie.focus()}},V=()=>{n(!0),l(!0),setTimeout(()=>{n(!1),o(5),setTimeout(()=>{l(!1)},1300)},1e3)},P=()=>{m(["","","",""]),c(""),S(""),f(""),n(!0),l(!0),setTimeout(()=>{n(!1),o(1),setTimeout(()=>{l(!1)},1300)},1e3)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(et,{isVisible:r,initialFade:!0}),a===5?t.jsx(C2,{onClickRecovery:P}):t.jsxs(zl,{children:[t.jsx(v2,{iconColor:a===2?"var(--textColor)":"var(--AccentColor)"}),a===4?t.jsxs(j0,{children:[t.jsx(Fl,{}),t.jsx(Qe,{children:e("RECOVERY_Success")}),t.jsx(Je,{children:e("RECOVERY_PasswordChanged")}),t.jsx(Pl,{children:e("RECOVERY_Redirecting",{countdown:b})}),t.jsx(Nl,{onClick:V,children:e("RECOVERY_BackToLogin")})]}):t.jsxs(t.Fragment,{children:[t.jsxs(Al,{currentStep:a,style:{backgroundColor:a===2?"var(--AccentColor)":"transparent"},children:[t.jsxs(Me,{style:{alignItems:"center"},show:a===1,direction:"left",children:[t.jsxs(D1,{children:[t.jsx(oe,{active:a>=1}),t.jsx(oe,{active:a>=2}),t.jsx(oe,{active:a>=3})]}),t.jsx(Qe,{children:e("RECOVERY_AccessRecovery")}),t.jsx(V1,{htmlFor:"email",children:e("RECOVERY_EnterEmail")}),t.jsx(P1,{children:t.jsx($1,{type:"email",id:"email",value:h,onChange:O=>c(O.target.value),placeholder:e("RECOVERY_EnterEmail"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})}),t.jsx(H1,{disabled:!R,onClick:R?T:void 0,children:e("RECOVERY_SendCode")}),t.jsx($l,{onClick:V,children:e("RECOVERY_BackToLogin")})]}),t.jsxs(Me,{style:{alignItems:"center"},show:a===3,direction:"left",children:[t.jsxs(D1,{children:[t.jsx(oe,{active:a>=1}),t.jsx(oe,{active:a>=2}),t.jsx(oe,{active:a>=3})]}),t.jsx(Qe,{children:e("RECOVERY_NewPassword")}),t.jsx(V1,{htmlFor:"newPassword",children:e("RECOVERY_EnterNewPassword")}),t.jsx(P1,{children:t.jsx($1,{type:"password",id:"newPassword",value:v,onChange:O=>S(O.target.value),placeholder:e("RECOVERY_EnterNewPassword"),autoComplete:"new-password",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})}),t.jsx(V1,{htmlFor:"confirmNewPassword",children:e("RECOVERY_RepeatNewPassword")}),t.jsx(P1,{children:t.jsx($1,{type:"password",id:"confirmNewPassword",value:x,onChange:O=>f(O.target.value),placeholder:e("RECOVERY_RepeatNewPassword"),autoComplete:"new-password",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",disabled:!g()})}),t.jsx(H1,{disabled:!M,onClick:M?_:void 0,children:e("RECOVERY_ChangePassword")})]}),t.jsxs(Me,{style:{alignItems:"center"},show:a===2,direction:"left",children:[t.jsx(Ll,{width:"70%"}),t.jsx(Je,{style:{width:"70%",textAlign:"center"},children:e("RECOVERY_VerifyEmail")})]})]}),t.jsxs(Vl,{currentStep:a,style:{backgroundColor:a===2?"transparent":"var(--AccentColor)"},children:[t.jsxs(Me,{style:{alignItems:"center"},show:a===2,direction:"right",children:[t.jsxs(D1,{children:[t.jsx(oe,{active:a>=1}),t.jsx(oe,{active:a>=2}),t.jsx(oe,{active:a>=3})]}),t.jsx(Qe,{children:e("RECOVERY_EnterCode")}),t.jsx(Je,{children:e("RECOVERY_EnterCodeDescription")}),t.jsx(Hl,{children:p.map((O,A)=>t.jsx(Dl,{id:`code-${A}`,type:"number",pattern:"[0-9]",inputMode:"numeric",maxLength:"1",value:O,onChange:H=>L(A,H.target.value),onPaste:z,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",filled:O!==""},A))}),t.jsx(H1,{disabled:!k,onClick:k?I:void 0,children:e("RECOVERY_Complete")})]}),t.jsxs(Me,{style:{alignItems:"flex-start"},show:a!==2,direction:"right",children:[t.jsxs(j0,{children:[a===1&&t.jsx(Il,{width:"70%",style:{marginInline:"auto"}}),a===3&&t.jsx(Ol,{width:"70%",style:{marginInline:"auto"}})]}),t.jsxs(Je,{children:[a===1&&e("RECOVERY_Steps"),a===3&&e("RECOVERY_AlmostThere")]})]})]})]})]})]})}const Gl=({width:e,height:a,fillHeart:o,fillQuestion:r,pulse:n=!1,onClick:s})=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 306 338",children:[t.jsx("path",{fill:o,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),t.jsx("path",{fill:r,style:{animation:n?"pulse 2s infinite":"none",cursor:n?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),j2=document.createElement("style");j2.textContent=`
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
`;document.head.appendChild(j2);const Yl="/assets/kanye-BMPu-Gq3.png",Ul="/assets/runaway-DjODmQSR.mp3",ql=()=>{const e=r1(),{t:a}=B(),[o,r]=d.useState(0),n=d.useRef(null),[s,l]=d.useState(!1),h=()=>{r(o+1),console.log(o)},c=()=>{n.current&&(n.current.loop=!0,n.current.paused?(n.current.play(),l(!0)):(n.current.pause(),l(!1)))};return t.jsxs(Wl,{playing:s,children:[t.jsx(Gl,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!0,onClick:h}),t.jsxs(Xl,{children:[t.jsx(F1,{playing:s,active:o>=1}),t.jsx(F1,{playing:s,active:o>=2}),t.jsx(F1,{playing:s,active:o>=3})]}),t.jsx(Zl,{children:a("errorTitle")}),t.jsx(Ql,{children:a("errorMessage")}),t.jsx(Jl,{playing:s,onClick:()=>e("/"),children:a("errorBackToHome")}),o>=3&&t.jsxs(t.Fragment,{children:[t.jsx(Kl,{src:Yl,alt:"Kanye",onClick:c}),t.jsx("audio",{ref:n,src:Ul})]})]})},Wl=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,Zl=u.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,Ql=u.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,Jl=u.button`
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
`,Kl=u.img`
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
`,Xl=u.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,F1=u.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`;function e4(){const[e,a]=d.useState(!0),[o,r]=d.useState(!1);return Xo(),d.useEffect(()=>zo(),[]),d.useEffect(()=>{const n=setTimeout(()=>{a(!1),setTimeout(()=>{r(!0)},1e3)},1100);return()=>clearTimeout(n)},[]),d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),t.jsx(Ao,{children:t.jsxs(Cr,{children:[t.jsx(Bo,{}),t.jsx(Go,{}),t.jsx(Ko,{}),t.jsx(yo,{children:t.jsxs(Ka,{children:[t.jsx(se,{path:"/",element:t.jsx(L1,{showNavbar:!0,showFooter:!0}),children:t.jsx(se,{index:!0,element:t.jsx(Cl,{loadingComplete:o})})}),t.jsx(se,{path:"/login",element:t.jsx(L1,{showNavbar:!1,showFooter:!1}),children:t.jsx(se,{index:!0,element:t.jsx(C2,{})})}),t.jsx(se,{path:"/recovery",element:t.jsx(L1,{showNavbar:!1,showFooter:!1}),children:t.jsx(se,{index:!0,element:t.jsx(Bl,{})})}),t.jsx(se,{path:"*",element:t.jsx(ql,{})})]})}),t.jsx(et,{isVisible:e})]})})}K2.use(X2).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Email:"Email",LOGIN_Password:"Password",LOGIN_ForgotPassword:"Forgot password?",LOGIN_SignUp:"New user? Sign up",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_Welcome:"Welcome to Posterfy!",LOGIN_JoinCommunity:"Join our community and start creating amazing posters.",LOGIN_AlreadyHaveAccount:"Already have an account? Log in now.",LOGIN_Enter:"Enter",LOGIN_CreateAccount:"Create account",LOGIN_EnterCredentials:"Enter your credentials to continue.",LOGIN_NewHere:"New here? Sign up now to create an account.",RECOVERY_AccessRecovery:"Access recovery",RECOVERY_SendCode:"Send code",RECOVERY_BackToLogin:"Back to login",RECOVERY_NewPassword:"New password",RECOVERY_RepeatPassword:"Repeat new password",RECOVERY_ChangePassword:"Change password",RECOVERY_Success:"Success!",RECOVERY_PasswordChanged:"Your password has been successfully changed. You can log in now.",RECOVERY_Redirecting:"You will be redirected in {{countdown}} seconds.",RECOVERY_EnterCode:"Enter the code",RECOVERY_EnterCodeDescription:"Insert the 4-digit code sent to your email.",RECOVERY_AlmostThere:"Almost there! Set your new password.",RECOVERY_Steps:"Follow the steps to recover access to your account.",RECOVERY_VerifyEmail:"Check your inbox and enter the 4-digit code.",RECOVERY_ResendCode:"Resend code",RECOVERY_EnterEmail:"Enter your email",RECOVERY_EnterNewPassword:"Enter the new password",RECOVERY_RepeatNewPassword:"Repeat the new password",RECOVERY_SetNewPassword:"Set new password",RECOVERY_Complete:"Complete",RECOVERY_OTPCode:"OTP Code",RECOVERY_OTPCodeDescription:"Enter the code sent to your email.",RECOVERY_ResendOTP:"Resend OTP",RECOVERY_Confirm:"Confirm",RECOVERY_ValidationError:"Validation error",RECOVERY_InvalidEmail:"Invalid email address",RECOVERY_InvalidCode:"Invalid code",RECOVERY_InvalidPassword:"Password must be at least 6 characters",RECOVERY_PasswordMismatch:"Passwords do not match",RECOVERY_ResendSuccess:"Code resent successfully",RECOVERY_ResendFailure:"Failed to resend code",RECOVERY_Timeout:"Timeout",RECOVERY_TimeoutDescription:"The session has expired. Please try again."}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Email:"Email",LOGIN_Password:"Senha",LOGIN_ForgotPassword:"Esqueceu a senha?",LOGIN_SignUp:"Novo usuário? Cadastre-se",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_Welcome:"Bem-vindo ao Posterfy!",LOGIN_JoinCommunity:"Junte-se à nossa comunidade e comece a criar pôsteres incríveis.",LOGIN_AlreadyHaveAccount:"Já tem uma conta? Entre agora.",LOGIN_Enter:"Entrar",LOGIN_CreateAccount:"Criar conta",LOGIN_EnterCredentials:"Digite suas credenciais para continuar.",LOGIN_NewHere:"Novo por aqui? Cadastre-se agora para criar uma conta.",RECOVERY_AccessRecovery:"Recuperar acesso",RECOVERY_SendCode:"Enviar código",RECOVERY_BackToLogin:"Voltar ao login",RECOVERY_NewPassword:"Nova senha",RECOVERY_RepeatPassword:"Repetir nova senha",RECOVERY_ChangePassword:"Alterar senha",RECOVERY_Success:"Sucesso!",RECOVERY_PasswordChanged:"Sua senha foi alterada com sucesso. Você pode fazer login agora.",RECOVERY_Redirecting:"Você será redirecionado em {{countdown}} segundos.",RECOVERY_EnterCode:"Digite o código",RECOVERY_EnterCodeDescription:"Insira o código de 4 dígitos enviado para seu email.",RECOVERY_AlmostThere:"Quase lá! Defina sua nova senha.",RECOVERY_Steps:"Siga os passos para recuperar o acesso à sua conta.",RECOVERY_VerifyEmail:"Verifique sua caixa de entrada e digite o código de 4 dígitos.",RECOVERY_ResendCode:"Reenviar código",RECOVERY_EnterEmail:"Digite seu email",RECOVERY_EnterNewPassword:"Digite a nova senha",RECOVERY_RepeatNewPassword:"Repita a nova senha",RECOVERY_SetNewPassword:"Definir nova senha",RECOVERY_Complete:"Concluir",RECOVERY_OTPCode:"Código OTP",RECOVERY_OTPCodeDescription:"Digite o código enviado para seu email.",RECOVERY_ResendOTP:"Reenviar OTP",RECOVERY_Confirm:"Confirmar",RECOVERY_ValidationError:"Erro de validação",RECOVERY_InvalidEmail:"Endereço de email inválido",RECOVERY_InvalidCode:"Código inválido",RECOVERY_InvalidPassword:"A senha deve ter pelo menos 6 caracteres",RECOVERY_PasswordMismatch:"As senhas não coincidem",RECOVERY_ResendSuccess:"Código reenviado com sucesso",RECOVERY_ResendFailure:"Falha ao reenviar código",RECOVERY_Timeout:"Tempo esgotado",RECOVERY_TimeoutDescription:"A sessão expirou. Por favor, tente novamente."}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Email:"Correo electrónico",LOGIN_Password:"Contraseña",LOGIN_ForgotPassword:"¿Olvidaste tu contraseña?",LOGIN_SignUp:"¿Nuevo usuario? Regístrate",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_Welcome:"¡Bienvenido a Posterfy!",LOGIN_JoinCommunity:"Únete a nuestra comunidad y comienza a crear carteles increíbles.",LOGIN_AlreadyHaveAccount:"¿Ya tienes una cuenta? Inicia sesión ahora.",LOGIN_Enter:"Iniciar sesión",LOGIN_CreateAccount:"Crear cuenta",LOGIN_EnterCredentials:"Introduce tus credenciales para continuar.",LOGIN_NewHere:"¿Nuevo aquí? Regístrate ahora para crear una cuenta.",RECOVERY_AccessRecovery:"Recuperar acceso",RECOVERY_SendCode:"Enviar código",RECOVERY_BackToLogin:"Volver al inicio de sesión",RECOVERY_NewPassword:"Nueva contraseña",RECOVERY_RepeatPassword:"Repetir nueva contraseña",RECOVERY_ChangePassword:"Cambiar contraseña",RECOVERY_Success:"¡Éxito!",RECOVERY_PasswordChanged:"Tu contraseña ha sido cambiada con éxito. Ahora puedes iniciar sesión.",RECOVERY_Redirecting:"Serás redirigido en {{countdown}} segundos.",RECOVERY_EnterCode:"Introduce el código",RECOVERY_EnterCodeDescription:"Introduce el código de 4 dígitos enviado a tu correo electrónico.",RECOVERY_AlmostThere:"¡Casi listo! Establece tu nueva contraseña.",RECOVERY_Steps:"Sigue los pasos para recuperar el acceso a tu cuenta.",RECOVERY_VerifyEmail:"Revisa tu bandeja de entrada e introduce el código de 4 dígitos.",RECOVERY_ResendCode:"Reenviar código",RECOVERY_EnterEmail:"Introduce tu correo electrónico",RECOVERY_EnterNewPassword:"Introduce la nueva contraseña",RECOVERY_RepeatNewPassword:"Repite la nueva contraseña",RECOVERY_SetNewPassword:"Establecer nueva contraseña",RECOVERY_Complete:"Completar",RECOVERY_OTPCode:"Código OTP",RECOVERY_OTPCodeDescription:"Introduce el código enviado a tu correo electrónico.",RECOVERY_ResendOTP:"Reenviar OTP",RECOVERY_Confirm:"Confirmar",RECOVERY_ValidationError:"Error de validación",RECOVERY_InvalidEmail:"Dirección de correo electrónico no válida",RECOVERY_InvalidCode:"Código no válido",RECOVERY_InvalidPassword:"La contraseña debe tener al menos 6 caracteres",RECOVERY_PasswordMismatch:"Las contraseñas no coinciden",RECOVERY_ResendSuccess:"Código reenviado con éxito",RECOVERY_ResendFailure:"Error al reenviar el código",RECOVERY_Timeout:"Tiempo agotado",RECOVERY_TimeoutDescription:"La sesión ha expirado. Por favor, inténtalo de nuevo."}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Email:"电子邮件",LOGIN_Password:"密码",LOGIN_ForgotPassword:"忘记密码？",LOGIN_SignUp:"新用户？注册",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_Welcome:"欢迎来到 Posterfy！",LOGIN_JoinCommunity:"加入我们的社区，开始创建惊人的海报。",LOGIN_AlreadyHaveAccount:"已经有账户了？现在登录。",LOGIN_Enter:"登录",LOGIN_CreateAccount:"创建账户",LOGIN_EnterCredentials:"输入您的凭据以继续。",LOGIN_NewHere:"新用户？现在注册创建一个账户。",RECOVERY_AccessRecovery:"恢复访问",RECOVERY_SendCode:"发送代码",RECOVERY_BackToLogin:"返回登录",RECOVERY_NewPassword:"新密码",RECOVERY_RepeatPassword:"重复新密码",RECOVERY_ChangePassword:"更改密码",RECOVERY_Success:"成功！",RECOVERY_PasswordChanged:"您的密码已成功更改。您现在可以登录。",RECOVERY_Redirecting:"您将在 {{countdown}} 秒内被重定向。",RECOVERY_EnterCode:"输入代码",RECOVERY_EnterCodeDescription:"输入发送到您电子邮件的 4 位数字代码。",RECOVERY_AlmostThere:"快到了！设置您的新密码。",RECOVERY_Steps:"按照步骤恢复对您账户的访问。",RECOVERY_VerifyEmail:"检查您的收件箱并输入 4 位数字代码。",RECOVERY_ResendCode:"重新发送代码",RECOVERY_EnterEmail:"输入您的电子邮件",RECOVERY_EnterNewPassword:"输入新密码",RECOVERY_RepeatNewPassword:"重复新密码",RECOVERY_SetNewPassword:"设置新密码",RECOVERY_Complete:"完成",RECOVERY_OTPCode:"一次性密码代码",RECOVERY_OTPCodeDescription:"输入发送到您电子邮件的代码。",RECOVERY_ResendOTP:"重新发送一次性密码",RECOVERY_Confirm:"确认",RECOVERY_ValidationError:"验证错误",RECOVERY_InvalidEmail:"无效的电子邮件地址",RECOVERY_InvalidCode:"无效代码",RECOVERY_InvalidPassword:"密码必须至少包含 6 个字符",RECOVERY_PasswordMismatch:"密码不匹配",RECOVERY_ResendSuccess:"代码重新发送成功",RECOVERY_ResendFailure:"重新发送代码失败",RECOVERY_Timeout:"超时",RECOVERY_TimeoutDescription:"会话已过期。请再试一次。"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const o=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(o)?o:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});S0(document.getElementById("root")).render(t.jsx(d.StrictMode,{children:t.jsx(e4,{})}));
