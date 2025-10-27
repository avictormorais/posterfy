import{r as d,a as Vn,e as G,c as Wn}from"./vendor-C_1HgqiI.js";import{m as F,d as u,G as L,l as Mr}from"./ui-DJvbdRdB.js";import{u as U,i as Gn,a as qn}from"./i18n-yS3FBAcD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();var bo={exports:{}},Qe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=d,Qn=Symbol.for("react.element"),Zn=Symbol.for("react.fragment"),Jn=Object.prototype.hasOwnProperty,Kn=Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xn={key:!0,ref:!0,__self:!0,__source:!0};function yo(e,t,o){var n,a={},s=null,l=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Jn.call(t,n)&&!Xn.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Qn,type:e,key:s,ref:l,props:a,_owner:Kn.current}}Qe.Fragment=Zn;Qe.jsx=yo;Qe.jsxs=yo;bo.exports=Qe;var r=bo.exports,wo,Ar=Vn;wo=Ar.createRoot,Ar.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lr="popstate";function ea(e={}){function t(n,a){let{pathname:s,search:l,hash:p}=n.location;return Et("",{pathname:s,search:l,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(n,a){return typeof a=="string"?a:je(a)}return ra(t,o,null,e)}function D(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Y(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ta(){return Math.random().toString(36).substring(2,10)}function Pr(e,t){return{usr:e.state,key:e.key,idx:t}}function Et(e,t,o=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?he(t):t,state:o,key:t&&t.key||n||ta()}}function je({pathname:e="/",search:t="",hash:o=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function he(e){let t={};if(e){let o=e.indexOf("#");o>=0&&(t.hash=e.substring(o),e=e.substring(0,o));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function ra(e,t,o,n={}){let{window:a=document.defaultView,v5Compat:s=!1}=n,l=a.history,p="POP",c=null,h=m();h==null&&(h=0,l.replaceState({...l.state,idx:h},""));function m(){return(l.state||{idx:null}).idx}function b(){p="POP";let w=m(),y=w==null?null:w-h;h=w,c&&c({action:p,location:v.location,delta:y})}function T(w,y){p="PUSH";let C=Et(v.location,w,y);h=m()+1;let x=Pr(C,h),S=v.createHref(C);try{l.pushState(x,"",S)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(S)}s&&c&&c({action:p,location:v.location,delta:1})}function g(w,y){p="REPLACE";let C=Et(v.location,w,y);h=m();let x=Pr(C,h),S=v.createHref(C);l.replaceState(x,"",S),s&&c&&c({action:p,location:v.location,delta:0})}function f(w){return oa(w)}let v={get action(){return p},get location(){return e(a,l)},listen(w){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Lr,b),c=w,()=>{a.removeEventListener(Lr,b),c=null}},createHref(w){return t(a,w)},createURL:f,encodeLocation(w){let y=f(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:T,replace:g,go(w){return l.go(w)}};return v}function oa(e,t=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),D(o,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:je(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=o+n),new URL(n,o)}function Co(e,t,o="/"){return na(e,t,o,!1)}function na(e,t,o,n){let a=typeof t=="string"?he(t):t,s=oe(a.pathname||"/",o);if(s==null)return null;let l=ko(e);aa(l);let p=null;for(let c=0;p==null&&c<l.length;++c){let h=ga(s);p=fa(l[c],h,n)}return p}function ko(e,t=[],o=[],n="",a=!1){let s=(l,p,c=a,h)=>{let m={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:p,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&c)return;D(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let b=te([n,m.relativePath]),T=o.concat(m);l.children&&l.children.length>0&&(D(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),ko(l.children,t,T,b,c)),!(l.path==null&&!l.index)&&t.push({path:b,score:pa(b,l.index),routesMeta:T})};return e.forEach((l,p)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,p);else for(let h of So(l.path))s(l,p,!0,h)}),t}function So(e){let t=e.split("/");if(t.length===0)return[];let[o,...n]=t,a=o.endsWith("?"),s=o.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let l=So(n.join("/")),p=[];return p.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&p.push(...l),p.map(c=>e.startsWith("/")&&c===""?"/":c)}function aa(e){e.sort((t,o)=>t.score!==o.score?o.score-t.score:ha(t.routesMeta.map(n=>n.childrenIndex),o.routesMeta.map(n=>n.childrenIndex)))}var ia=/^:[\w-]+$/,sa=3,la=2,ca=1,da=10,ua=-2,Or=e=>e==="*";function pa(e,t){let o=e.split("/"),n=o.length;return o.some(Or)&&(n+=ua),t&&(n+=la),o.filter(a=>!Or(a)).reduce((a,s)=>a+(ia.test(s)?sa:s===""?ca:da),n)}function ha(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function fa(e,t,o=!1){let{routesMeta:n}=e,a={},s="/",l=[];for(let p=0;p<n.length;++p){let c=n[p],h=p===n.length-1,m=s==="/"?t:t.slice(s.length)||"/",b=Ge({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},m),T=c.route;if(!b&&h&&o&&!n[n.length-1].route.index&&(b=Ge({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!b)return null;Object.assign(a,b.params),l.push({params:a,pathname:te([s,b.pathname]),pathnameBase:ya(te([s,b.pathnameBase])),route:T}),b.pathnameBase!=="/"&&(s=te([s,b.pathnameBase]))}return l}function Ge(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,n]=ma(e.path,e.caseSensitive,e.end),a=t.match(o);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:n.reduce((h,{paramName:m,isOptional:b},T)=>{if(m==="*"){let f=p[T]||"";l=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}const g=p[T];return b&&!g?h[m]=void 0:h[m]=(g||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:l,pattern:e}}function ma(e,t=!1,o=!0){Y(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,p,c)=>(n.push({paramName:p,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function ga(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Y(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function oe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let o=t.endsWith("/")?t.length-1:t.length,n=e.charAt(o);return n&&n!=="/"?null:e.slice(o)||"/"}function xa(e,t="/"){let{pathname:o,search:n="",hash:a=""}=typeof e=="string"?he(e):e;return{pathname:o?o.startsWith("/")?o:va(o,t):t,search:wa(n),hash:Ca(a)}}function va(e,t){let o=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function Ct(e,t,o,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ba(e){return e.filter((t,o)=>o===0||t.route.path&&t.route.path.length>0)}function To(e){let t=ba(e);return t.map((o,n)=>n===t.length-1?o.pathname:o.pathnameBase)}function jo(e,t,o,n=!1){let a;typeof e=="string"?a=he(e):(a={...e},D(!a.pathname||!a.pathname.includes("?"),Ct("?","pathname","search",a)),D(!a.pathname||!a.pathname.includes("#"),Ct("#","pathname","hash",a)),D(!a.search||!a.search.includes("#"),Ct("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,p;if(l==null)p=o;else{let b=t.length-1;if(!n&&l.startsWith("..")){let T=l.split("/");for(;T[0]==="..";)T.shift(),b-=1;a.pathname=T.join("/")}p=b>=0?t[b]:"/"}let c=xa(a,p),h=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(h||m)&&(c.pathname+="/"),c}var te=e=>e.join("/").replace(/\/\/+/g,"/"),ya=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wa=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ca=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ka(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Io=["POST","PUT","PATCH","DELETE"];new Set(Io);var Sa=["GET",...Io];new Set(Sa);var fe=d.createContext(null);fe.displayName="DataRouter";var Ze=d.createContext(null);Ze.displayName="DataRouterState";d.createContext(!1);var _o=d.createContext({isTransitioning:!1});_o.displayName="ViewTransition";var Ta=d.createContext(new Map);Ta.displayName="Fetchers";var ja=d.createContext(null);ja.displayName="Await";var K=d.createContext(null);K.displayName="Navigation";var _e=d.createContext(null);_e.displayName="Location";var X=d.createContext({outlet:null,matches:[],isDataRoute:!1});X.displayName="Route";var $t=d.createContext(null);$t.displayName="RouteError";function Ia(e,{relative:t}={}){D(Re(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:n}=d.useContext(K),{hash:a,pathname:s,search:l}=Ee(e,{relative:t}),p=s;return o!=="/"&&(p=s==="/"?o:te([o,s])),n.createHref({pathname:p,search:l,hash:a})}function Re(){return d.useContext(_e)!=null}function ne(){return D(Re(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(_e).location}var Ro="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Eo(e){d.useContext(K).static||d.useLayoutEffect(e)}function ce(){let{isDataRoute:e}=d.useContext(X);return e?Ua():_a()}function _a(){D(Re(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(fe),{basename:t,navigator:o}=d.useContext(K),{matches:n}=d.useContext(X),{pathname:a}=ne(),s=JSON.stringify(To(n)),l=d.useRef(!1);return Eo(()=>{l.current=!0}),d.useCallback((c,h={})=>{if(Y(l.current,Ro),!l.current)return;if(typeof c=="number"){o.go(c);return}let m=jo(c,JSON.parse(s),a,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:te([t,m.pathname])),(h.replace?o.replace:o.push)(m,h.state,h)},[t,o,s,a,e])}var Ra=d.createContext(null);function Ea(e){let t=d.useContext(X).outlet;return t&&d.createElement(Ra.Provider,{value:e},t)}function Ee(e,{relative:t}={}){let{matches:o}=d.useContext(X),{pathname:n}=ne(),a=JSON.stringify(To(o));return d.useMemo(()=>jo(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function za(e,t){return zo(e,t)}function zo(e,t,o,n,a){var C;D(Re(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=d.useContext(K),{matches:l}=d.useContext(X),p=l[l.length-1],c=p?p.params:{},h=p?p.pathname:"/",m=p?p.pathnameBase:"/",b=p&&p.route;{let x=b&&b.path||"";Mo(h,!b||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let T=ne(),g;if(t){let x=typeof t=="string"?he(t):t;D(m==="/"||((C=x.pathname)==null?void 0:C.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),g=x}else g=T;let f=g.pathname||"/",v=f;if(m!=="/"){let x=m.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=Co(e,{pathname:v});Y(b||w!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Y(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Oa(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:te([m,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:te([m,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,o,n,a);return t&&y?d.createElement(_e.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},y):y}function Ma(){let e=Ba(),t=ka(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},s={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:s},"ErrorBoundary")," or"," ",d.createElement("code",{style:s},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),o?d.createElement("pre",{style:a},o):null,l)}var Aa=d.createElement(Ma,null),La=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?d.createElement(X.Provider,{value:this.props.routeContext},d.createElement($t.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pa({routeContext:e,match:t,children:o}){let n=d.useContext(fe);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(X.Provider,{value:e},o)}function Oa(e,t=[],o=null,n=null,a=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(t.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,l=o==null?void 0:o.errors;if(l!=null){let h=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);D(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let p=!1,c=-1;if(o)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:b,errors:T}=o,g=m.route.loader&&!b.hasOwnProperty(m.route.id)&&(!T||T[m.route.id]===void 0);if(m.route.lazy||g){p=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,m,b)=>{let T,g=!1,f=null,v=null;o&&(T=l&&m.route.id?l[m.route.id]:void 0,f=m.route.errorElement||Aa,p&&(c<0&&b===0?(Mo("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,v=null):c===b&&(g=!0,v=m.route.hydrateFallbackElement||null)));let w=t.concat(s.slice(0,b+1)),y=()=>{let C;return T?C=f:g?C=v:m.route.Component?C=d.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=h,d.createElement(Pa,{match:m,routeContext:{outlet:h,matches:w,isDataRoute:o!=null},children:C})};return o&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?d.createElement(La,{location:o.location,revalidation:o.revalidation,component:f,error:T,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0},unstable_onError:n}):y()},null)}function Ht(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $a(e){let t=d.useContext(fe);return D(t,Ht(e)),t}function Ha(e){let t=d.useContext(Ze);return D(t,Ht(e)),t}function Da(e){let t=d.useContext(X);return D(t,Ht(e)),t}function Dt(e){let t=Da(e),o=t.matches[t.matches.length-1];return D(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function Fa(){return Dt("useRouteId")}function Ba(){var n;let e=d.useContext($t),t=Ha("useRouteError"),o=Dt("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[o]}function Ua(){let{router:e}=$a("useNavigate"),t=Dt("useNavigate"),o=d.useRef(!1);return Eo(()=>{o.current=!0}),d.useCallback(async(a,s={})=>{Y(o.current,Ro),o.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...s}))},[e,t])}var $r={};function Mo(e,t,o){!t&&!$r[e]&&($r[e]=!0,Y(!1,o))}d.memo(Na);function Na({routes:e,future:t,state:o,unstable_onError:n}){return zo(e,void 0,o,n,t)}function Va(e){return Ea(e.context)}function ie(e){D(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wa({basename:e="/",children:t=null,location:o,navigationType:n="POP",navigator:a,static:s=!1}){D(!Re(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),p=d.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);typeof o=="string"&&(o=he(o));let{pathname:c="/",search:h="",hash:m="",state:b=null,key:T="default"}=o,g=d.useMemo(()=>{let f=oe(c,l);return f==null?null:{location:{pathname:f,search:h,hash:m,state:b,key:T},navigationType:n}},[l,c,h,m,b,T,n]);return Y(g!=null,`<Router basename="${l}"> is not able to match the URL "${c}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:d.createElement(K.Provider,{value:p},d.createElement(_e.Provider,{children:t,value:g}))}function Ga({children:e,location:t}){return za(zt(e),t)}function zt(e,t=[]){let o=[];return d.Children.forEach(e,(n,a)=>{if(!d.isValidElement(n))return;let s=[...t,a];if(n.type===d.Fragment){o.push.apply(o,zt(n.props.children,s));return}D(n.type===ie,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=zt(n.props.children,s)),o.push(l)}),o}var Ve="get",We="application/x-www-form-urlencoded";function Je(e){return e!=null&&typeof e.tagName=="string"}function qa(e){return Je(e)&&e.tagName.toLowerCase()==="button"}function Ya(e){return Je(e)&&e.tagName.toLowerCase()==="form"}function Qa(e){return Je(e)&&e.tagName.toLowerCase()==="input"}function Za(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ja(e,t){return e.button===0&&(!t||t==="_self")&&!Za(e)}function Mt(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,o)=>{let n=e[o];return t.concat(Array.isArray(n)?n.map(a=>[o,a]):[[o,n]])},[]))}function Ka(e,t){let o=Mt(e);return t&&t.forEach((n,a)=>{o.has(a)||t.getAll(a).forEach(s=>{o.append(a,s)})}),o}var $e=null;function Xa(){if($e===null)try{new FormData(document.createElement("form"),0),$e=!1}catch{$e=!0}return $e}var ei=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kt(e){return e!=null&&!ei.has(e)?(Y(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${We}"`),null):e}function ti(e,t){let o,n,a,s,l;if(Ya(e)){let p=e.getAttribute("action");n=p?oe(p,t):null,o=e.getAttribute("method")||Ve,a=kt(e.getAttribute("enctype"))||We,s=new FormData(e)}else if(qa(e)||Qa(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||p.getAttribute("action");if(n=c?oe(c,t):null,o=e.getAttribute("formmethod")||p.getAttribute("method")||Ve,a=kt(e.getAttribute("formenctype"))||kt(p.getAttribute("enctype"))||We,s=new FormData(p,e),!Xa()){let{name:h,type:m,value:b}=e;if(m==="image"){let T=h?`${h}.`:"";s.append(`${T}x`,"0"),s.append(`${T}y`,"0")}else h&&s.append(h,b)}}else{if(Je(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ve,n=null,a=We,l=e}return s&&a==="text/plain"&&(l=s,s=void 0),{action:n,method:o.toLowerCase(),encType:a,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ft(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ri(e,t,o){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${o}`:t&&oe(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${o}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${o}`,n}async function oi(e,t){if(e.id in t)return t[e.id];try{let o=await import(e.module);return t[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ni(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ai(e,t,o){let n=await Promise.all(e.map(async a=>{let s=t.routes[a.route.id];if(s){let l=await oi(s,o);return l.links?l.links():[]}return[]}));return ci(n.flat(1).filter(ni).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Hr(e,t,o,n,a,s){let l=(c,h)=>o[h]?c.route.id!==o[h].route.id:!0,p=(c,h)=>{var m;return o[h].pathname!==c.pathname||((m=o[h].route.path)==null?void 0:m.endsWith("*"))&&o[h].params["*"]!==c.params["*"]};return s==="assets"?t.filter((c,h)=>l(c,h)||p(c,h)):s==="data"?t.filter((c,h)=>{var b;let m=n.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,h)||p(c,h))return!0;if(c.route.shouldRevalidate){let T=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((b=o[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function ii(e,t,{includeHydrateFallback:o}={}){return si(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),o&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function si(e){return[...new Set(e)]}function li(e){let t={},o=Object.keys(e).sort();for(let n of o)t[n]=e[n];return t}function ci(e,t){let o=new Set;return new Set(t),e.reduce((n,a)=>{let s=JSON.stringify(li(a));return o.has(s)||(o.add(s),n.push({key:s,link:a})),n},[])}function Ao(){let e=d.useContext(fe);return Ft(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function di(){let e=d.useContext(Ze);return Ft(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Bt=d.createContext(void 0);Bt.displayName="FrameworkContext";function Lo(){let e=d.useContext(Bt);return Ft(e,"You must render this element inside a <HydratedRouter> element"),e}function ui(e,t){let o=d.useContext(Bt),[n,a]=d.useState(!1),[s,l]=d.useState(!1),{onFocus:p,onBlur:c,onMouseEnter:h,onMouseLeave:m,onTouchStart:b}=t,T=d.useRef(null);d.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let v=y=>{y.forEach(C=>{l(C.isIntersecting)})},w=new IntersectionObserver(v,{threshold:.5});return T.current&&w.observe(T.current),()=>{w.disconnect()}}},[e]),d.useEffect(()=>{if(n){let v=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(v)}}},[n]);let g=()=>{a(!0)},f=()=>{a(!1),l(!1)};return o?e!=="intent"?[s,T,{}]:[s,T,{onFocus:we(p,g),onBlur:we(c,f),onMouseEnter:we(h,g),onMouseLeave:we(m,f),onTouchStart:we(b,g)}]:[!1,T,{}]}function we(e,t){return o=>{e&&e(o),o.defaultPrevented||t(o)}}function pi({page:e,...t}){let{router:o}=Ao(),n=d.useMemo(()=>Co(o.routes,e,o.basename),[o.routes,e,o.basename]);return n?d.createElement(fi,{page:e,matches:n,...t}):null}function hi(e){let{manifest:t,routeModules:o}=Lo(),[n,a]=d.useState([]);return d.useEffect(()=>{let s=!1;return ai(e,t,o).then(l=>{s||a(l)}),()=>{s=!0}},[e,t,o]),n}function fi({page:e,matches:t,...o}){let n=ne(),{manifest:a,routeModules:s}=Lo(),{basename:l}=Ao(),{loaderData:p,matches:c}=di(),h=d.useMemo(()=>Hr(e,t,c,a,n,"data"),[e,t,c,a,n]),m=d.useMemo(()=>Hr(e,t,c,a,n,"assets"),[e,t,c,a,n]),b=d.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let f=new Set,v=!1;if(t.forEach(y=>{var x;let C=a.routes[y.route.id];!C||!C.hasLoader||(!h.some(S=>S.route.id===y.route.id)&&y.route.id in p&&((x=s[y.route.id])!=null&&x.shouldRevalidate)||C.hasClientLoader?v=!0:f.add(y.route.id))}),f.size===0)return[];let w=ri(e,l,"data");return v&&f.size>0&&w.searchParams.set("_routes",t.filter(y=>f.has(y.route.id)).map(y=>y.route.id).join(",")),[w.pathname+w.search]},[l,p,n,a,h,t,e,s]),T=d.useMemo(()=>ii(m,a),[m,a]),g=hi(m);return d.createElement(d.Fragment,null,b.map(f=>d.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})),T.map(f=>d.createElement("link",{key:f,rel:"modulepreload",href:f,...o})),g.map(({key:f,link:v})=>d.createElement("link",{key:f,nonce:o.nonce,...v})))}function mi(...e){return t=>{e.forEach(o=>{typeof o=="function"?o(t):o!=null&&(o.current=t)})}}var Po=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Po&&(window.__reactRouterVersion="7.8.2")}catch{}function gi({basename:e,children:t,window:o}){let n=d.useRef();n.current==null&&(n.current=ea({window:o,v5Compat:!0}));let a=n.current,[s,l]=d.useState({action:a.action,location:a.location}),p=d.useCallback(c=>{d.startTransition(()=>l(c))},[l]);return d.useLayoutEffect(()=>a.listen(p),[a,p]),d.createElement(Wa,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:a})}var Oo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$o=d.forwardRef(function({onClick:t,discover:o="render",prefetch:n="none",relative:a,reloadDocument:s,replace:l,state:p,target:c,to:h,preventScrollReset:m,viewTransition:b,...T},g){let{basename:f}=d.useContext(K),v=typeof h=="string"&&Oo.test(h),w,y=!1;if(typeof h=="string"&&v&&(w=h,Po))try{let z=new URL(window.location.href),E=h.startsWith("//")?new URL(z.protocol+h):new URL(h),M=oe(E.pathname,f);E.origin===z.origin&&M!=null?h=M+E.search+E.hash:y=!0}catch{Y(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Ia(h,{relative:a}),[x,S,I]=ui(n,T),j=yi(h,{replace:l,state:p,target:c,preventScrollReset:m,relative:a,viewTransition:b});function _(z){t&&t(z),z.defaultPrevented||j(z)}let R=d.createElement("a",{...T,...I,href:w||C,onClick:y||s?t:_,ref:mi(g,S),target:c,"data-discover":!v&&o==="render"?"true":void 0});return x&&!v?d.createElement(d.Fragment,null,R,d.createElement(pi,{page:C})):R});$o.displayName="Link";var xi=d.forwardRef(function({"aria-current":t="page",caseSensitive:o=!1,className:n="",end:a=!1,style:s,to:l,viewTransition:p,children:c,...h},m){let b=Ee(l,{relative:h.relative}),T=ne(),g=d.useContext(Ze),{navigator:f,basename:v}=d.useContext(K),w=g!=null&&ji(b)&&p===!0,y=f.encodeLocation?f.encodeLocation(b).pathname:b.pathname,C=T.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(C=C.toLowerCase(),x=x?x.toLowerCase():null,y=y.toLowerCase()),x&&v&&(x=oe(x,v)||x);const S=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let I=C===y||!a&&C.startsWith(y)&&C.charAt(S)==="/",j=x!=null&&(x===y||!a&&x.startsWith(y)&&x.charAt(y.length)==="/"),_={isActive:I,isPending:j,isTransitioning:w},R=I?t:void 0,z;typeof n=="function"?z=n(_):z=[n,I?"active":null,j?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(_):s;return d.createElement($o,{...h,"aria-current":R,className:z,ref:m,style:E,to:l,viewTransition:p},typeof c=="function"?c(_):c)});xi.displayName="NavLink";var vi=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:o,reloadDocument:n,replace:a,state:s,method:l=Ve,action:p,onSubmit:c,relative:h,preventScrollReset:m,viewTransition:b,...T},g)=>{let f=Si(),v=Ti(p,{relative:h}),w=l.toLowerCase()==="get"?"get":"post",y=typeof p=="string"&&Oo.test(p),C=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let S=x.nativeEvent.submitter,I=(S==null?void 0:S.getAttribute("formmethod"))||l;f(S||x.currentTarget,{fetcherKey:t,method:I,navigate:o,replace:a,state:s,relative:h,preventScrollReset:m,viewTransition:b})};return d.createElement("form",{ref:g,method:w,action:v,onSubmit:n?c:C,...T,"data-discover":!y&&e==="render"?"true":void 0})});vi.displayName="Form";function bi(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ho(e){let t=d.useContext(fe);return D(t,bi(e)),t}function yi(e,{target:t,replace:o,state:n,preventScrollReset:a,relative:s,viewTransition:l}={}){let p=ce(),c=ne(),h=Ee(e,{relative:s});return d.useCallback(m=>{if(Ja(m,t)){m.preventDefault();let b=o!==void 0?o:je(c)===je(h);p(e,{replace:b,state:n,preventScrollReset:a,relative:s,viewTransition:l})}},[c,p,h,o,n,t,e,a,s,l])}function wi(e){Y(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(Mt(e)),o=d.useRef(!1),n=ne(),a=d.useMemo(()=>Ka(n.search,o.current?null:t.current),[n.search]),s=ce(),l=d.useCallback((p,c)=>{const h=Mt(typeof p=="function"?p(new URLSearchParams(a)):p);o.current=!0,s("?"+h,c)},[s,a]);return[a,l]}var Ci=0,ki=()=>`__${String(++Ci)}__`;function Si(){let{router:e}=Ho("useSubmit"),{basename:t}=d.useContext(K),o=Fa();return d.useCallback(async(n,a={})=>{let{action:s,method:l,encType:p,formData:c,body:h}=ti(n,t);if(a.navigate===!1){let m=a.fetcherKey||ki();await e.fetch(m,o,a.action||s,{preventScrollReset:a.preventScrollReset,formData:c,body:h,formMethod:a.method||l,formEncType:a.encType||p,flushSync:a.flushSync})}else await e.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:c,body:h,formMethod:a.method||l,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,o])}function Ti(e,{relative:t}={}){let{basename:o}=d.useContext(K),n=d.useContext(X);D(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),s={...Ee(e||".",{relative:t})},l=ne();if(e==null){s.search=l.search;let p=new URLSearchParams(s.search),c=p.getAll("index");if(c.some(m=>m==="")){p.delete("index"),c.filter(b=>b).forEach(b=>p.append("index",b));let m=p.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(s.pathname=s.pathname==="/"?o:te([o,s.pathname])),je(s)}function ji(e,{relative:t}={}){let o=d.useContext(_o);D(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Ho("useViewTransitionState"),a=Ee(e,{relative:t});if(!o.isTransitioning)return!1;let s=oe(o.currentLocation.pathname,n)||o.currentLocation.pathname,l=oe(o.nextLocation.pathname,n)||o.nextLocation.pathname;return Ge(a.pathname,l)!=null||Ge(a.pathname,s)!=null}function re({width:e,height:t,fill:o}){return r.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:o,xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const Ii=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},_i=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Ri=()=>{let e=[25,50,75,90],t=[];const o=()=>{const n=window.pageYOffset||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(n/a*100);e.forEach(l=>{s>=l&&!t.includes(l)&&(t.push(l),_i(l))})};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}},Do=d.createContext(),Ke=()=>{const e=d.useContext(Do);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Ei=({children:e})=>{const[t,o]=d.useState(()=>localStorage.getItem("theme")||"light");d.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Ii(t)},[t]);const s={theme:t,toggleTheme:()=>{o(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{o(l)},isLight:t==="light",isDark:t==="dark"};return r.jsx(Do.Provider,{value:s,children:e})},zi=F`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,Mi=F`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,Ai=F`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,Li=u.div`
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
    animation: ${e=>e.initialFade?Ai:"none"} 0.5s ease-in;
`,Pi=u.div`
    animation: ${e=>e.isExiting?Mi:zi} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Ut({isVisible:e,initialFade:t=!1}){const{theme:o}=Ke(),[n,a]=d.useState(!1),[s,l]=d.useState(!1);return d.useEffect(()=>{!e&&!n&&(a(!0),setTimeout(()=>{l(!0)},800))},[e,n]),r.jsx(Li,{isVisible:e,fadeOutContainer:s,initialFade:t,children:r.jsx(Pi,{isExiting:n,children:r.jsx(re,{fill:"var(--textColor)",width:"100px",height:"118.23px"})})})}const Oi=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},$i=(e,t="General",o="",n=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:o,value:n})},Dr=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Hi=(e,t="image",o="")=>{const n=o?`${o} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:n,file_type:t,album_name:e,artist_name:o})},Di=(e,t="")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t})},Fr=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},Fi=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},Bi=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},Ui=(e,t="",o="",n="album_collection")=>{const a=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:a,album_name:e,artist_name:t,album_id:o,source:n})},Ni=()=>{d.useEffect(()=>{Dr(document.title,window.location.href);const e=new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&n.target.nodeName==="TITLE"&&Dr(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function Fo(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function Bo(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Vi(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const Wi=F`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,Gi=F`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,qi=F`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Yi=F`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Qi=u.div`
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
    animation: ${e=>e.isClosing?Yi:qi} 0.3s ease-in-out forwards;
`,Zi=u.div`
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
    animation: ${e=>e.isClosing?Gi:Wi} 0.3s ease-in-out forwards;

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
`,Ji=u.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Ki=u.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Xi=u(Bo)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,es=u.div`
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
`,Uo=u.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,ts=u.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,rs=u.button`
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
`,St=u.button`
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
`,Br=u.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,os=u(Uo)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,ns=u.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,as=u.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function is({title:e,paragraph:t,imageURL:o,postImageText:n,canClose:a,confirmText:s,onConfirm:l,cancelText:p,onCancel:c,isClosing:h}){return document.body.style.overflow="hidden",r.jsx(Qi,{isClosing:h,children:r.jsxs(Zi,{isClosing:h,children:[r.jsxs(Ji,{children:[r.jsx(ns,{children:r.jsx(re,{width:25,height:25,fill:"var(--textColor)"})}),e&&r.jsx(Ki,{children:e}),a&&r.jsx(es,{onClick:c,children:r.jsx(Xi,{})})]}),r.jsx(as,{}),t&&r.jsx(Uo,{children:t}),o&&r.jsx(ts,{src:o}),n&&r.jsx(os,{children:n}),p&&s?r.jsxs(Br,{children:[r.jsx(rs,{onClick:c,children:p}),r.jsx(St,{onClick:l,children:s})]}):r.jsx(Br,{style:{justifyContent:"center"},children:p?r.jsx(St,{onClick:c,children:p}):r.jsx(St,{onClick:l,children:s})})]})})}const ss="/assets/models-4pKGew8b.png",ls=d.createContext(),cs=({children:e})=>{const{t,i18n:o}=U(),[n,a]=d.useState(null),[s,l]=d.useState(!1),[p,c]=d.useState(()=>{const j=localStorage.getItem("shownAlerts");return j?JSON.parse(j):{}}),h=()=>{const j={en:{title:"🚀 Pre-made models",paragraph:"Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.",confirmText:"Ok, I'll try!",postImageText:"The models can be chosen after selecting a album."},pt:{title:"🚀 Modelos pré-definidos",paragraph:"Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.",confirmText:"Ok, vou tentar!",postImageText:"Os modelos podem ser escolhidos após selecionar um álbum."},es:{title:"🚀 Modelos predefinidos",paragraph:"Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.",confirmText:"¡Ok, lo intentaré!",postImageText:"Los modelos se pueden elegir después de seleccionar un álbum."},zh:{title:"🚀 预制模型",paragraph:"预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。",confirmText:"好的，我试试！",postImageText:"可以在选择专辑后选择模型。"}},_=o.language||"en",R=j[_]||j.en;return{id:"default-premade-models",persistentId:"premade-models-intro",title:R.title,paragraph:R.paragraph,imageURL:ss,postImageText:R.postImageText,confirmText:R.confirmText,canClose:!0,type:"alert",limitDate:"2025-11-11T23:59:59.999Z"}},m=j=>p[j]===!0,b=j=>{if(!m(j)){const _={...p,[j]:!0};c(_),localStorage.setItem("shownAlerts",JSON.stringify(_))}};d.useEffect(()=>{const j=h();!m(j.persistentId)&&!n&&v(j)&&a(j)},[o.language,p,n]);const T=j=>{v(j)&&(a(j),l(!1))},g=j=>{v(j)&&T({...j,type:"alert"})},f=j=>{T({...j,type:"confirmation"})},v=j=>{if(!j.limitDate)return!0;const _=new Date(j.limitDate);return new Date<=_},w=j=>{if(!j.persistentId){v(j)&&g(j);return}!m(j.persistentId)&&v(j)&&T({...j,type:"alert"})},y=()=>{(n==null?void 0:n.type)==="alert"&&S(),!(!n||s)&&(l(!0),setTimeout(()=>{a(null),l(!1),document.body.style.overflow="unset"},300))},C=()=>{n!=null&&n.onConfirm&&n.onConfirm(),(n==null?void 0:n.type)==="alert"&&S(),y()},x=()=>{n!=null&&n.onCancel&&n.onCancel(),(n==null?void 0:n.type)==="alert"&&S(),y()},S=()=>{n!=null&&n.persistentId&&b(n.persistentId)},I={modal:n,showModal:T,showAlert:g,showConfirmation:f,showConditionalAlert:w,closeModal:y,isModalVisible:!!n,hasAlertBeenShown:m,markSpecificAlertAsShown:b};return r.jsxs(ls.Provider,{value:I,children:[e,n&&r.jsx(is,{title:n.title,paragraph:n.paragraph,imageURL:n.imageURL,postImageText:n.postImageText,canClose:n.canClose,confirmText:n.confirmText,onConfirm:n.confirmText?C:null,cancelText:n.cancelText||null,onCancel:n.cancelText?x:n.canClose?y:null,isClosing:s})]})},ds={BASE_URL:"http://localhost:5000"},us=ds.BASE_URL;class ps{constructor(t=us){this.baseURL=t,this.authToken=null}setAuthToken(t){this.authToken=t}async request(t,o={}){const n=`${this.baseURL}${t}`,a={credentials:"include",headers:{"Content-Type":"application/json",...o.headers},...o};this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`);try{const s=await fetch(n,a);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(s){throw console.error("API request failed:",s),s}}async getCurrentUser(){return this.request("/auth/user")}async logout(){return this.request("/auth/logout",{method:"POST"})}async getUserProfile(){return this.request("/api/user/profile")}async updateUserProfile(t){return this.request("/api/user/profile",{method:"PUT",body:JSON.stringify(t)})}getGoogleAuthUrl(){return`${this.baseURL}/auth/google`}getSpotifyAuthUrl(){return`${this.baseURL}/auth/spotify`}}const J=new ps,No=d.createContext(),ze=()=>{const e=d.useContext(No);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},hs=({children:e})=>{const[t,o]=d.useState(null),[n,a]=d.useState(!0),[s,l]=d.useState(!1);d.useEffect(()=>{(async()=>{const v=new URLSearchParams(window.location.search).get("token");v&&(localStorage.setItem("authToken",v),J.setAuthToken(v),window.history.replaceState({},document.title,window.location.pathname)),await p()})()},[]);const p=async()=>{if(!localStorage.getItem("authToken")){o(null),l(!1),a(!1);return}try{const f=await J.getCurrentUser();o(f.user),l(!0),a(!1)}catch{localStorage.removeItem("authToken"),J.setAuthToken(null),o(null),l(!1),a(!1)}},T={user:t,loading:n,isAuthenticated:s,loginWithGoogle:()=>{window.location.href=J.getGoogleAuthUrl()},loginWithSpotify:()=>{window.location.href=J.getSpotifyAuthUrl()},logout:async()=>{try{await J.logout(),localStorage.removeItem("authToken"),J.setAuthToken(null),o(null),l(!1)}catch(g){console.error("Logout failed:",g),localStorage.removeItem("authToken"),J.setAuthToken(null),o(null),l(!1)}},checkAuthStatus:p,updateUser:g=>{o(g)}};return r.jsx(No.Provider,{value:T,children:e})};function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},qe.apply(this,arguments)}function fs(e,t){if(e==null)return{};var o={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(o[a]=e[a]);return o}var ms=["cdnSuffix","cdnUrl","countryCode","style","svg"],gs="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",xs="svg",vs=127397,Vo=function(t){var o=t.cdnSuffix,n=o===void 0?xs:o,a=t.cdnUrl,s=a===void 0?gs:a,l=t.countryCode,p=t.style,c=t.svg,h=c===void 0?!1:c,m=fs(t,ms);if(typeof l!="string")return null;if(h){var b=""+s+l.toLowerCase()+"."+n;return d.createElement("img",Object.assign({},m,{src:b,style:qe({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},p)}))}var T=l.toUpperCase().replace(/./g,function(g){return String.fromCodePoint(g.charCodeAt(0)+vs)});return d.createElement("span",Object.assign({role:"img"},m,{style:qe({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},p)}),T)};const bs=u.div`
  position: relative;
`,ys=u.button`
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
`,ws=u.div`
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
`,Cs=u.div`
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
`,ks=u.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Ss=u.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,He=u.button`
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
`,De=u.span`
  margin-left: 8px;
`,Fe=u(Vo)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function Ts(){const[e,t]=d.useState(!1),[o,n]=d.useState(!1),{i18n:a}=U();d.useEffect(()=>{const h=localStorage.getItem("language");h&&a.changeLanguage(h);const m=b=>{b.target.closest(".language-selector")||s()};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[a]);const s=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},l=h=>{h.stopPropagation(),e?s():t(!0)},p=h=>{a.changeLanguage(h),localStorage.setItem("language",h),s(),Bi(h)},c=()=>{switch(a.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return r.jsxs(bs,{className:"language-selector",children:[r.jsx(ys,{onClick:l,"aria-label":"Select language",children:r.jsx(ws,{children:r.jsx(Vo,{countryCode:c(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&r.jsxs(Cs,{className:o?"closing":"",children:[r.jsx(ks,{}),r.jsxs(Ss,{children:[r.jsxs(He,{onClick:()=>p("pt"),children:[r.jsx(Fe,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(De,{children:"Português"})]}),r.jsxs(He,{onClick:()=>p("en"),children:[r.jsx(Fe,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(De,{children:"English"})]}),r.jsxs(He,{onClick:()=>p("es"),children:[r.jsx(Fe,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(De,{children:"Español"})]}),r.jsxs(He,{onClick:()=>p("zh"),children:[r.jsx(Fe,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),r.jsx(De,{children:"中文"})]})]})]})]})}function js(e){return L({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Wo(e){return L({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function Is(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function _s(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Go(e){return L({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function qo(e){return L({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Yo(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Rs(e){return L({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Qo(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Zo(e){return L({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Es(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function zs(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Jo(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const Ms=u.div`
  position: relative;
`,As=u.button`
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
`,Ls=u.div`
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
`,Ps=u.div`
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
`,Os=u.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,$s=u.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,Hs=u.button`
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
`,Ds=u.div`
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
`,Fs=u.span`
  margin-left: 4px;
  font-weight: 500;
`;function Bs(){const[e,t]=d.useState(!1),[o,n]=d.useState(!1),{theme:a,setSpecificTheme:s}=Ke(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:r.jsx(Jo,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:r.jsx(Qo,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:r.jsx(Go,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:r.jsx(qo,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:r.jsx(Zo,{}),isLight:!1}],p=l.find(b=>b.id===a)||l[0];d.useEffect(()=>{const b=T=>{T.target.closest(".theme-selector")||c()};return document.addEventListener("click",b),()=>document.removeEventListener("click",b)},[]);const c=()=>{n(!0),setTimeout(()=>{t(!1),n(!1)},150)},h=b=>{b.stopPropagation(),e?c():t(!0)},m=b=>{s(b),c()};return r.jsxs(Ms,{className:"theme-selector",children:[r.jsx(As,{onClick:h,"aria-label":"Select theme",children:r.jsx(Ls,{themeColor:p.color,isLight:p.isLight,children:p.icon})}),e&&r.jsxs(Ps,{className:o?"closing":"",children:[r.jsx(Os,{}),r.jsx($s,{children:l.map(b=>r.jsxs(Hs,{onClick:()=>m(b.id),children:[r.jsx(Ds,{className:"theme-preview",color:b.color,isLight:b.isLight,children:b.icon}),r.jsx(Fs,{children:b.name})]},b.id))})]})]})}function Us(e){return L({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function Ns(e){return L({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const Vs=u.header`
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
`,Ws=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Gs=u.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,qs=u.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,Ys=u.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,Qs=u.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,Zs=u.div`
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
`,Js=u.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`,Ks=u.button`
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
`,Xs=u.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,el=u(Ns)`
  font-size: 1.5em;
  color: var(--textColor);
`,tl=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Ye({hideLogo:e=!1,hideAccount:t=!1}){const[o,n]=d.useState(!1),[a,s]=d.useState(!0),[l,p]=d.useState(0),[c,h]=d.useState(!1),m=".space",{user:b,isAuthenticated:T}=ze(),g=ce();d.useEffect(()=>{const v=()=>{const w=window.scrollY;w<=10?(s(!0),n(!1)):(w<l?s(!0):s(!1),n(!0)),p(w)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[l]);const f=()=>{g(T?"/dashboard":"/login")};return r.jsxs(Vs,{scrolled:o,visible:a,children:[r.jsxs(Ws,{children:[!e&&r.jsxs(Gs,{onClick:()=>g("/"),children:[r.jsx(Zs,{children:r.jsx(re,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),r.jsxs(qs,{children:["Posterfy",r.jsx(Ys,{children:m})]})]}),r.jsxs(Js,{children:[r.jsx(Ts,{}),r.jsx(Bs,{}),!t&&r.jsx(Ks,{onClick:f,children:r.jsx(Xs,{children:b!=null&&b.avatar?r.jsx(tl,{src:b.avatar}):r.jsx(el,{})})})]})]}),r.jsx(Qs,{scrolled:o})]})}const rl=F`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,ol=F`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,Nt=F`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,nl=F`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,al=u.div`
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
`,il=u.div`
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
`,sl=u.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${Nt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,ll=u.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${rl} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${ol} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,cl=u.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,dl=u.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,ul=u.div`
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
    animation: ${nl} 6s linear infinite;
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
`,pl=u.div`
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
`,hl=u.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${Nt} 0.5s ease-out;
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
`;const fl=u.div`
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
`,ml=u.button`
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
`,gl=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,xl=u.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,vl=u.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${Nt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,bl=u.a`
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
`;function yl(){const{t:e}=U(),{theme:t,setSpecificTheme:o}=Ke(),n=l=>{o(l)},a=[{id:"light",name:"Light",color:"#f0efeb",icon:r.jsx(Jo,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:r.jsx(Qo,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:r.jsx(Rs,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:r.jsx(Go,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:r.jsx(qo,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:r.jsx(Zo,{}),isLight:!1}],s=new Date().getFullYear();return r.jsxs(al,{children:[r.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:r.jsxs("footer",{children:[r.jsx("h4",{children:"Album Poster Generator Links"}),r.jsxs("nav",{children:[r.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),r.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),r.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),r.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),r.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),r.jsxs(il,{children:[r.jsxs(sl,{children:[r.jsxs(ll,{children:[r.jsx(dl,{className:"icon-shadow"}),r.jsx(cl,{className:"icon-main",children:r.jsx(re,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),r.jsx(ul,{children:r.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",r.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),r.jsxs(pl,{children:[r.jsx(Yo,{})," © ",s," Posterfy. ",e("AllRights","All rights reserved.")]})]}),r.jsx(hl,{children:r.jsx(fl,{children:a.map(l=>r.jsxs(gl,{children:[r.jsx(ml,{color:l.color,active:t===l.id,themeId:l.id,onClick:()=>n(l.id),"aria-label":`${e("SwitchTo","Switch to")} ${l.name} ${e("Theme").toLowerCase()}`,children:l.icon},l.id),r.jsx(xl,{active:t===l.id,children:l.name})]},l.id))})}),r.jsx(vl,{children:r.jsxs(bl,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[r.jsx(js,{})," ",e("ViewGitHub","GitHub")]})})]})]})}function Tt({showNavbar:e=!0,showFooter:t=!0}){return r.jsxs(r.Fragment,{children:[e&&r.jsx(Ye,{}),r.jsx(Va,{}),t&&r.jsx(yl,{})]})}function wl(e){return L({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Cl(e){return L({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const kl="/assets/Posterfy%20-%20KTT%20ZOO-EGMOdvc1.png",Sl="/assets/Posterfy%20-%20JACKBOYS%202-5mh4sLb1.png",Tl="/assets/Posterfy%20-%20SOS-BR7qvD22.png",jl="/assets/Posterfy%20-%20F-1%20Trillion-D1gH0Ecz.png",Il="/assets/Posterfy%20-%20Nevermind-DmVmVnus.png",_l=[{id:1,coverImage:kl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b2732715c405b0b118516627add4",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/15/e0/31/15e031a3-d975-91a7-5dc4-31dda64d1f52/8445162931182.jpg",useUncompressed:!0,albumName:"KTT ZOO",artistsName:"Sain",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"200",marginSide:160,marginCover:0,marginBackground:"5",titleRelease:"Release date",releaseDate:"2023-07-07",titleRuntime:"Runtime",runtime:"23min 33s",backgroundColor:"#638f98",textColor:"#0c191d",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Aquelas Coisas Mais Pra Frente
2. Demanda
3. Relíquia Do Boom Bap
4. Lucro
5. Skit Visão
6. Ebi no Tempura
7. Iori Incorporado
8. Noturno KGL
9. Ignorante
10. Momentos`,color1:"#0c191d",color2:"#3381ae",color3:"#aab8b4",albumID:"7lJibQ9XRhBDUIWgkP4wZm",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:2,coverImage:Sl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273b547c9858fee61547e6b0fd8",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music221/v4/bb/00/09/bb0009b4-37e3-b924-b703-eb3d3a7f362d/196873402772.jpg",useUncompressed:!0,albumName:"JACKBOYS 2",artistsName:"JACKBOYS, Travis Scott",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"50",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2025-07-13",titleRuntime:"Runtime",runtime:"55min 50s",backgroundColor:"#b4aba6",textColor:"#79736e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. JB2 RADIO
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
17. FLORIDA FLOW`,color1:"#7a736f",color2:"#938c8c",color3:"#94948c",albumID:"32lGAqeVkdJxEj2iv2Q01B",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:3,coverImage:Tl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:jl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27388208159b1b3c69eefdeb2e0",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg",useUncompressed:!1,albumName:"F-1 Trillion",artistsName:"Post Malone",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:200,marginSide:160,marginCover:-500,marginBackground:-700,titleRelease:"Release date",releaseDate:"2024-08-15",titleRuntime:"Runtime",runtime:"57min 58s",backgroundColor:"#cdd1d6",textColor:"#3c484c",useWatermark:!0,useFade:!0,showTracklist:!1,tracklist:`1. Wrong Ones (Feat. Tim McGraw)
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
18. Yours`,color1:"#86939b",color2:"#6a5f59",color3:"#81735d",albumID:"4BbsHmXEghoPPevQjPnHXx",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:5,coverImage:Il,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",uncompressedAlbumCover:"",useUncompressed:!1,albumName:"",artistsName:"",titleSize:"200",artistsSize:"110",tracksSize:"70",marginTop:"-200",marginSide:"115",marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"1991-09-26",titleRuntime:"Runtime",runtime:"49min 15s",backgroundColor:"#0064b0",textColor:"#01010e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Smells Like Teen Spirit
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
13. Endless, Nameless`,color1:"#a6b6ba",color2:"#43bdd1",color3:"#052a5e",albumID:"2UJcKiJxNryhL050F5Z1Fk",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}}],Rl=u.div`
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
`,El=u.div`
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
`,zl=u.div`
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
`,Ml=u.div`
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
`,Al=u.div`
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
`,Ll=u.button`
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
`,Pl=u.button`
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
`,Ol=({onRecreate:e})=>{const{t}=U(),[o,n]=d.useState(null),[a,s]=d.useState(!1),[l,p]=d.useState(!1),[c,h]=d.useState(null),[m,b]=d.useState(null);d.useEffect(()=>{const v=()=>{s(window.innerWidth<=770),p(window.innerWidth>480&&window.innerWidth<=1200)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const T=(v,w)=>{h(v),b(w),document.body.style.overflow="hidden"},g=()=>{h(null),document.body.style.overflow="auto"},f=()=>{h(null),e(m),document.body.style.overflow="auto"};return r.jsxs(r.Fragment,{children:[r.jsx(Rl,{children:_l.map((v,w)=>r.jsx(El,{index:w,isHovered:o===w,hoveredIndex:o,otherIsHovered:o!==null,isMobile:a,isTablet:l,onMouseEnter:()=>n(w),onMouseLeave:()=>n(null),onClick:()=>T(v.coverImage||"/placeholder.svg",v.JSONConfig),children:r.jsx("img",{src:v.coverImage||"/placeholder.svg",alt:`${v.artist} - ${v.title}`})},v.id))}),c&&r.jsx(zl,{onClick:g,children:r.jsxs(Ml,{onClick:v=>v.stopPropagation(),children:[r.jsxs(Al,{children:[r.jsx(Ll,{onClick:g,children:"×"}),r.jsx(Pl,{onClick:f,children:t("RecreatePoster")})]}),r.jsx("img",{src:c,alt:"Album cover"})]})})]})},$l=u.div`
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
`,Hl=({onRecreate:e})=>r.jsx($l,{children:r.jsx(Ol,{onRecreate:e})}),Dl=u.div`
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
`,Fl=u.div`
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
`,Bl=u.h1`
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
`,Ur=u.p`
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
`,Ul=u.div`
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
`,Nl=`
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
`,Vl=u(wl)`
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
    ${Nl}
`;function Wl({showAnimation:e=!1,onRecreate:t}){const{t:o}=U(),{theme:n}=Ke(),[a,s]=d.useState(!1);d.useEffect(()=>{if(e){const p=setTimeout(()=>{s(!0)},50);return()=>clearTimeout(p)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx(Dl,{children:r.jsxs(Fl,{children:[r.jsx(Bl,{visible:a,animationDelay:200,children:"Posterfy"}),r.jsx(Ur,{visible:a,animationDelay:400,children:o("paragraphHero1")}),r.jsx(Ur,{visible:a,animationDelay:600,children:o("paragraphHero2")}),r.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[r.jsx("h2",{children:"Free Album Poster Generator"}),r.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),r.jsx("h3",{children:"Features:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Free album poster maker"}),r.jsx("li",{children:"Spotify integration"}),r.jsx("li",{children:"Custom poster design"}),r.jsx("li",{children:"High-quality downloads"}),r.jsx("li",{children:"Multiple format options"}),r.jsx("li",{children:"Professional templates"})]})]}),r.jsx(Ul,{visible:a,animationDelay:800,children:r.jsx(re,{fill:n==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),r.jsx(Vl,{visible:a,animationDelay:1e3,onClick:l})]})}),r.jsx(Hl,{onRecreate:t})]})}const Gl=u.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,ql=u.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Me({text:e,type:t}){return r.jsx(r.Fragment,{children:t==1?r.jsx(Gl,{children:e}):r.jsx(ql,{children:e})})}const Yl=u.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,Ql=u.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Zl=u.p`
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
`,Nr=u.div`
    display: flex;
`;function Vt({title:e,paragraph:t}){return r.jsxs(Yl,{children:[r.jsx(Nr,{children:r.jsx(Ql,{children:e})}),r.jsx(Nr,{children:r.jsx(Zl,{children:t})})]})}function Jl(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Kl(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Xl=u.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,ec=u(Jl)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,tc=u.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,rc=u.hr`
    opacity: 0.15;
    margin: 5px;
`,oc=u.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,nc=u.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function Ce({q:e,a:t}){const[o,n]=d.useState(!1);function a(){n(!o)}return r.jsxs(r.Fragment,{children:[r.jsxs(Xl,{onClick:a,children:[r.jsx(ec,{showA:o}),r.jsx(tc,{children:e})]}),r.jsx(rc,{}),r.jsx(oc,{showA:o,children:r.jsx(nc,{showA:o,children:t})})]})}const ac=u.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,ic=u.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function sc(){const{t:e}=U();return r.jsxs(ac,{id:"faq",children:[r.jsx(Me,{text:"FAQ",type:1}),r.jsxs(ic,{children:[r.jsx(Ce,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),r.jsx(Ce,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),r.jsx(Ce,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),r.jsx(Ce,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),r.jsx(Ce,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const lc=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:o="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:a="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>r.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),r.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:o}),r.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:n}),r.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:o}),r.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:n}),r.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:o}),r.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:o}),r.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:o}),r.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:n}),r.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:o}),r.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:o}),r.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:o}),r.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:o}),r.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:o}),r.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:n}),r.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:o}),r.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:o}),r.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:a}),r.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:a}),r.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:a}),r.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:a}),r.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:a}),r.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),cc=u.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,dc=u.div`
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
`,uc=u.p`
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
`,pc=u.button`
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
`;function hc(){const{t:e}=U();return r.jsxs(cc,{id:"share",children:[r.jsx(Me,{text:e("Share"),type:1}),r.jsx(Vt,{title:e("ShareTitle")}),r.jsx(dc,{children:r.jsx(lc,{width:"100%"})}),r.jsx(uc,{children:e("ShareDescription")}),r.jsx(pc,{children:e("ComingSoon")})]})}const fc=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:o="var(--PosterShare-darkFrames)",posterColor:n="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[r.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),r.jsx("path",{fill:o,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),r.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),r.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),r.jsx("path",{fill:n,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),r.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),r.jsx("path",{fill:o,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),r.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),r.jsx("path",{fill:o,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),r.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),r.jsx("path",{fill:n,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),r.jsx("g",{fill:o,opacity:"0.3",children:r.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),r.jsxs("g",{fill:t,opacity:"0.2",children:[r.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),r.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),r.jsx("path",{fill:o,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),r.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),r.jsx("path",{fill:n,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),r.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),r.jsx("path",{fill:o,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),r.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),r.jsx("path",{fill:o,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),r.jsx("path",{fill:o,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),r.jsx("path",{fill:o,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),r.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),r.jsx("path",{fill:n,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),r.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),r.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),r.jsx("path",{fill:o,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),r.jsx("path",{fill:o,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),r.jsx("path",{fill:o,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),r.jsx("path",{fill:a,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),r.jsx("path",{fill:a,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),r.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),r.jsx("path",{fill:o,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),r.jsx("path",{fill:n,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),r.jsx("g",{clipPath:"url(#clip0_1_72)",children:r.jsx("path",{fill:a,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_1_72",children:r.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),mc=u.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,gc=u.div`
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
`,xc=u.p`
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
`,vc=u.button`
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
`;function bc(){const{t:e}=U();return r.jsxs(mc,{id:"share",children:[r.jsx(Me,{text:e("Community"),type:1}),r.jsx(Vt,{title:e("CommunityTitle")}),r.jsx(gc,{children:r.jsx(fc,{width:"100%"})}),r.jsx(xc,{children:e("CommunityDescription")}),r.jsx(vc,{children:e("ComingSoon")})]})}const Vr=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],yc=u.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,wc=u.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Cc=u.div`
    display: flex;
    align-items: center;
    position: relative;
`,kc=u.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Sc=u(Yo)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Tc=u.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,jc=u.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,Ic=u.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,_c=u.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,Rc=u.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,Ec=u.a`
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
`;function zc(){var s,l,p;const{i18n:e}=U(),{t}=U(),o=((s=e.language)==null?void 0:s.split("-")[0])||"en",n=Vr.filter(c=>c.key!=="contribute_area"),a=Vr.find(c=>c.key==="contribute_area");return r.jsxs(yc,{id:"thanks",children:[r.jsx(Me,{text:t("Thanks"),type:1}),n.map((c,h)=>r.jsxs(wc,{children:[r.jsxs(Cc,{children:[r.jsx(kc,{className:"circle"}),r.jsx(Sc,{className:"heart"}),r.jsx(Tc,{tabIndex:0,role:"button",onClick:()=>window.open(c.url,"_blank","noopener,noreferrer"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&window.open(c.url,"_blank","noopener,noreferrer")},onMouseEnter:m=>{const b=m.target.parentNode;b.querySelector(".circle").style.opacity=0,b.querySelector(".heart").style.opacity=1},onMouseLeave:m=>{const b=m.target.parentNode;b.querySelector(".circle").style.opacity=.8,b.querySelector(".heart").style.opacity=0},children:c.title[o]||c.title.en})]}),r.jsx(jc,{children:c.text[o]||c.text.en})]},c.key)),a&&r.jsxs(Ic,{children:[r.jsx(_c,{children:a.title[o]||a.title.en}),r.jsx(Rc,{children:a.text[o]||a.text.en}),r.jsx(Ec,{href:a.url,target:"_blank",rel:"noopener noreferrer",children:((l=a.button)==null?void 0:l[o])||((p=a.button)==null?void 0:p.en)||"Github"})]})]})}const Mc=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Ac=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Lc=u.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function ee({title:e,value:t,onChange:o}){return r.jsxs(Mc,{children:[r.jsx(Ac,{children:e}),r.jsx(Lc,{placeholder:e,value:t,onChange:o})]})}const Pc=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Oc=u.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,$c=u.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Wr({title:e,value:t,onChangeTitle:o,onChangeDate:n}){return r.jsxs(Pc,{children:[r.jsx(Oc,{placeholder:e,value:e,onChange:o}),r.jsx($c,{placeholder:e,value:t,onChange:n})]})}const Hc=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Dc=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Fc=u.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,Bc=u.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,Uc=u.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function ke({title:e,value:t,onClick:o}){return r.jsxs(Hc,{children:[r.jsx(Dc,{children:e}),r.jsxs(Fc,{onClick:o,children:[r.jsx(Bc,{style:{backgroundColor:t}}),r.jsx(Uc,{children:t})]})]})}function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function Ko(e,t){if(e==null)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(o=s[n])>=0||(a[o]=e[o]);return a}function At(e){var t=d.useRef(e),o=d.useRef(function(n){t.current&&t.current(n)});return t.current=e,o.current}var Ie=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=1),e>o?o:e<t?t:e},Te=function(e){return"touches"in e},Lt=function(e){return e&&e.ownerDocument.defaultView||self},Gr=function(e,t,o){var n=e.getBoundingClientRect(),a=Te(t)?function(s,l){for(var p=0;p<s.length;p++)if(s[p].identifier===l)return s[p];return s[0]}(t.touches,o):t;return{left:Ie((a.pageX-(n.left+Lt(e).pageXOffset))/n.width),top:Ie((a.pageY-(n.top+Lt(e).pageYOffset))/n.height)}},qr=function(e){!Te(e)&&e.preventDefault()},Xo=G.memo(function(e){var t=e.onMove,o=e.onKey,n=Ko(e,["onMove","onKey"]),a=d.useRef(null),s=At(t),l=At(o),p=d.useRef(null),c=d.useRef(!1),h=d.useMemo(function(){var g=function(w){qr(w),(Te(w)?w.touches.length>0:w.buttons>0)&&a.current?s(Gr(a.current,w,p.current)):v(!1)},f=function(){return v(!1)};function v(w){var y=c.current,C=Lt(a.current),x=w?C.addEventListener:C.removeEventListener;x(y?"touchmove":"mousemove",g),x(y?"touchend":"mouseup",f)}return[function(w){var y=w.nativeEvent,C=a.current;if(C&&(qr(y),!function(S,I){return I&&!Te(S)}(y,c.current)&&C)){if(Te(y)){c.current=!0;var x=y.changedTouches||[];x.length&&(p.current=x[0].identifier)}C.focus(),s(Gr(C,y,p.current)),v(!0)}},function(w){var y=w.which||w.keyCode;y<37||y>40||(w.preventDefault(),l({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},v]},[l,s]),m=h[0],b=h[1],T=h[2];return d.useEffect(function(){return T},[T]),G.createElement("div",Xe({},n,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:a,onKeyDown:b,tabIndex:0,role:"slider"}))}),Wt=function(e){return e.filter(Boolean).join(" ")},en=function(e){var t=e.color,o=e.left,n=e.top,a=n===void 0?.5:n,s=Wt(["react-colorful__pointer",e.className]);return G.createElement("div",{className:s,style:{top:100*a+"%",left:100*o+"%"}},G.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},W=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=Math.pow(10,t)),Math.round(o*e)/o},Nc=function(e){return Yc(Pt(e))},Pt=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?W(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?W(parseInt(e.substring(6,8),16)/255,2):1}},Vc=function(e){return qc(Gc(e))},Wc=function(e){var t=e.s,o=e.v,n=e.a,a=(200-t)*o/100;return{h:W(e.h),s:W(a>0&&a<200?t*o/100/(a<=100?a:200-a)*100:0),l:W(a/2),a:W(n,2)}},Ot=function(e){var t=Wc(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},Gc=function(e){var t=e.h,o=e.s,n=e.v,a=e.a;t=t/360*6,o/=100,n/=100;var s=Math.floor(t),l=n*(1-o),p=n*(1-(t-s)*o),c=n*(1-(1-t+s)*o),h=s%6;return{r:W(255*[n,p,l,l,c,n][h]),g:W(255*[c,n,n,p,l,l][h]),b:W(255*[l,l,c,n,n,p][h]),a:W(a,2)}},Be=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},qc=function(e){var t=e.r,o=e.g,n=e.b,a=e.a,s=a<1?Be(W(255*a)):"";return"#"+Be(t)+Be(o)+Be(n)+s},Yc=function(e){var t=e.r,o=e.g,n=e.b,a=e.a,s=Math.max(t,o,n),l=s-Math.min(t,o,n),p=l?s===t?(o-n)/l:s===o?2+(n-t)/l:4+(t-o)/l:0;return{h:W(60*(p<0?p+6:p)),s:W(s?l/s*100:0),v:W(s/255*100),a}},Qc=G.memo(function(e){var t=e.hue,o=e.onChange,n=Wt(["react-colorful__hue",e.className]);return G.createElement("div",{className:n},G.createElement(Xo,{onMove:function(a){o({h:360*a.left})},onKey:function(a){o({h:Ie(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":W(t),"aria-valuemax":"360","aria-valuemin":"0"},G.createElement(en,{className:"react-colorful__hue-pointer",left:t/360,color:Ot({h:t,s:100,v:100,a:1})})))}),Zc=G.memo(function(e){var t=e.hsva,o=e.onChange,n={backgroundColor:Ot({h:t.h,s:100,v:100,a:1})};return G.createElement("div",{className:"react-colorful__saturation",style:n},G.createElement(Xo,{onMove:function(a){o({s:100*a.left,v:100-100*a.top})},onKey:function(a){o({s:Ie(t.s+100*a.left,0,100),v:Ie(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+W(t.s)+"%, Brightness "+W(t.v)+"%"},G.createElement(en,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:Ot(t)})))}),tn=function(e,t){if(e===t)return!0;for(var o in e)if(e[o]!==t[o])return!1;return!0},Jc=function(e,t){return e.toLowerCase()===t.toLowerCase()||tn(Pt(e),Pt(t))};function Kc(e,t,o){var n=At(o),a=d.useState(function(){return e.toHsva(t)}),s=a[0],l=a[1],p=d.useRef({color:t,hsva:s});d.useEffect(function(){if(!e.equal(t,p.current.color)){var h=e.toHsva(t);p.current={hsva:h,color:t},l(h)}},[t,e]),d.useEffect(function(){var h;tn(s,p.current.hsva)||e.equal(h=e.fromHsva(s),p.current.color)||(p.current={hsva:s,color:h},n(h))},[s,e,n]);var c=d.useCallback(function(h){l(function(m){return Object.assign({},m,h)})},[]);return[s,c]}var Xc=typeof window<"u"?d.useLayoutEffect:d.useEffect,e1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Yr=new Map,t1=function(e){Xc(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Yr.has(t)){var o=t.createElement("style");o.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Yr.set(t,o);var n=e1();n&&o.setAttribute("nonce",n),t.head.appendChild(o)}},[])},r1=function(e){var t=e.className,o=e.colorModel,n=e.color,a=n===void 0?o.defaultColor:n,s=e.onChange,l=Ko(e,["className","colorModel","color","onChange"]),p=d.useRef(null);t1(p);var c=Kc(o,a,s),h=c[0],m=c[1],b=Wt(["react-colorful",t]);return G.createElement("div",Xe({},l,{ref:p,className:b}),G.createElement(Zc,{hsva:h,onChange:m}),G.createElement(Qc,{hue:h.h,onChange:m,className:"react-colorful__last-control"}))},o1={defaultColor:"000",toHsva:Nc,fromHsva:function(e){return Vc({h:e.h,s:e.s,v:e.v,a:1})},equal:Jc},n1=function(e){return G.createElement(r1,Xe({},e,{colorModel:o1}))};const a1=u.div`
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
`,i1=u(n1)`
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
`,jt=u.div`
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
`,s1=u.div`
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
`,l1=u.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,c1=u.input`
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
`,d1=u(_s)`
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
`,u1=u(Es)`
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
`,p1=u(Us)`
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
`,h1=u(Is)`
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
`,f1=u.img`
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
`;function m1({DefaultColor:e,image:t,predefinedColors:o,position:n,onDone:a,onClose:s}){const[l,p]=d.useState(e),[c,h]=d.useState(!1),[m,b]=d.useState(null),T=d.useRef(null),g=d.useRef(null);function f(){h(!c)}function v(x){p(x.target.value===""?"#":x.target.value)}function w(x){const S=T.current,j=g.current.getBoundingClientRect(),_=S.getContext("2d"),R=Math.floor(x.clientX-j.left),z=Math.floor(x.clientY-j.top),M=`#${[..._.getImageData(R,z,1,1).data].slice(0,3).map(A=>A.toString(16).padStart(2,"0")).join("")}`;p(M),f()}function y(x){const S=T.current,j=g.current.getBoundingClientRect(),_=Math.floor(x.clientX-j.left),R=Math.floor(x.clientY-j.top);if(S){const z=S.getContext("2d");try{const M=`#${[...z.getImageData(_,R,1,1).data].slice(0,3).map(A=>A.toString(16).padStart(2,"0")).join("")}`;b(M)}catch{b(null)}}}function C(){b(null)}return r.jsxs(a1,{style:{position:"absolute",top:n.top,left:n.left,zIndex:1e3},children:[r.jsx("canvas",{ref:T,style:{display:"none"}}),c?r.jsx(f1,{ref:g,crossOrigin:"anonymous",draggable:"false",src:t,onClick:w,onMouseMove:y,onMouseLeave:C,onLoad:()=>{const x=T.current,S=x.getContext("2d"),I=g.current;x.width=I.width,x.height=I.height,S.drawImage(I,0,0,I.width,I.height)},style:m?{borderColor:m}:{}}):r.jsx(i1,{color:l,onChange:p}),r.jsx(jt,{children:o.map(x=>r.jsx(s1,{style:{backgroundColor:x},onClick:()=>p(x)},x))}),r.jsxs(jt,{children:[r.jsx(l1,{children:"Hex"}),r.jsx(c1,{value:l,onChange:v})]}),r.jsxs(jt,{children:[c?r.jsx(u1,{onClick:f}):r.jsx(d1,{onClick:f}),r.jsx(p1,{onClick:s}),r.jsx(h1,{onClick:()=>{a(l),Fi(l)}})]})]})}const g1=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,x1=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,v1=u.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,b1=u.input`
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
`,y1=u.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function It({title:e,text:t,value:o,onChange:n}){const a=()=>n(!o);return r.jsxs(g1,{children:[r.jsx(x1,{children:e}),r.jsxs(v1,{onClick:a,children:[r.jsx(b1,{checked:o,readOnly:!0,type:"checkbox"}),r.jsx(y1,{active:o,children:t})]})]})}function w1(e){return L({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function C1(e){return L({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const k1=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,S1=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,T1=u.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,j1=u.input`
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
`,I1=u.p`
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
`,_1=u(w1)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function R1({title:e,text:t,onChange:o}){const n=d.useRef(),a=()=>{n.current.click()},s=l=>{const p=l.target.files[0];t=p.name,p&&o(p)};return r.jsxs(k1,{onClick:a,children:[r.jsx(S1,{children:e}),r.jsxs(T1,{children:[r.jsx(_1,{}),r.jsx(j1,{ref:n,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:s}),r.jsx(I1,{active:!0,children:t})]})]})}const E1=u.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,z1=u.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,M1=u.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,A1=u.input`
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
`,L1=u.p`
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
`,P1=u(C1)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function O1({title:e,text:t,onChange:o}){const n=d.useRef(),a=()=>{n.current.click()},s=l=>{const p=l.target.files[0];t=p.name,p&&o(p)};return r.jsxs(E1,{onClick:a,children:[r.jsx(z1,{children:e}),r.jsxs(M1,{children:[r.jsx(P1,{}),r.jsx(A1,{ref:n,type:"file",accept:".ttf,.otf",onChange:s}),r.jsx(L1,{active:!0,children:t})]})]})}function rn(e){return L({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const $1=u.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,H1=u.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,D1=u.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,F1=u(rn)`
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
`;function on(){const{t:e}=U();return r.jsxs($1,{children:[r.jsx(F1,{}),r.jsx(H1,{children:e("Loading")}),r.jsx(D1,{children:e("LoadingText")})]})}var nn={},et={},an={exports:{}},B1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U1=B1,N1=U1;function sn(){}function ln(){}ln.resetWarningCache=sn;var V1=function(){function e(n,a,s,l,p,c){if(c!==N1){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ln,resetWarningCache:sn};return o.PropTypes=o,o};an.exports=V1();var cn=an.exports,Gt={},tt={},dn={exports:{}};(function(e,t){(function(o,n){e.exports=n()})(Wn,function(){var o=function(c,h){return c<h?-1:c>h?1:0},n=function(c){return c.reduce(function(h,m){return h+m},0)},a=function(){function c(m){this.colors=m}var h=c.prototype;return h.palette=function(){return this.colors},h.map=function(m){return m},c}(),s=function(){function c(g,f,v){return(g<<10)+(f<<5)+v}function h(g){var f=[],v=!1;function w(){f.sort(g),v=!0}return{push:function(y){f.push(y),v=!1},peek:function(y){return v||w(),y===void 0&&(y=f.length-1),f[y]},pop:function(){return v||w(),f.pop()},size:function(){return f.length},map:function(y){return f.map(y)},debug:function(){return v||w(),f}}}function m(g,f,v,w,y,C,x){var S=this;S.r1=g,S.r2=f,S.g1=v,S.g2=w,S.b1=y,S.b2=C,S.histo=x}function b(){this.vboxes=new h(function(g,f){return o(g.vbox.count()*g.vbox.volume(),f.vbox.count()*f.vbox.volume())})}function T(g,f){if(f.count()){var v=f.r2-f.r1+1,w=f.g2-f.g1+1,y=Math.max.apply(null,[v,w,f.b2-f.b1+1]);if(f.count()==1)return[f.copy()];var C,x,S,I,j=0,_=[],R=[];if(y==v)for(C=f.r1;C<=f.r2;C++){for(I=0,x=f.g1;x<=f.g2;x++)for(S=f.b1;S<=f.b2;S++)I+=g[c(C,x,S)]||0;_[C]=j+=I}else if(y==w)for(C=f.g1;C<=f.g2;C++){for(I=0,x=f.r1;x<=f.r2;x++)for(S=f.b1;S<=f.b2;S++)I+=g[c(x,C,S)]||0;_[C]=j+=I}else for(C=f.b1;C<=f.b2;C++){for(I=0,x=f.r1;x<=f.r2;x++)for(S=f.g1;S<=f.g2;S++)I+=g[c(x,S,C)]||0;_[C]=j+=I}return _.forEach(function(z,E){R[E]=j-z}),function(z){var E,M,A,O,P,N=z+"1",B=z+"2",q=0;for(C=f[N];C<=f[B];C++)if(_[C]>j/2){for(A=f.copy(),O=f.copy(),P=(E=C-f[N])<=(M=f[B]-C)?Math.min(f[B]-1,~~(C+M/2)):Math.max(f[N],~~(C-1-E/2));!_[P];)P++;for(q=R[P];!q&&_[P-1];)q=R[--P];return A[B]=P,O[N]=A[B]+1,[A,O]}}(y==v?"r":y==w?"g":"b")}}return m.prototype={volume:function(g){var f=this;return f._volume&&!g||(f._volume=(f.r2-f.r1+1)*(f.g2-f.g1+1)*(f.b2-f.b1+1)),f._volume},count:function(g){var f=this,v=f.histo;if(!f._count_set||g){var w,y,C,x=0;for(w=f.r1;w<=f.r2;w++)for(y=f.g1;y<=f.g2;y++)for(C=f.b1;C<=f.b2;C++)x+=v[c(w,y,C)]||0;f._count=x,f._count_set=!0}return f._count},copy:function(){var g=this;return new m(g.r1,g.r2,g.g1,g.g2,g.b1,g.b2,g.histo)},avg:function(g){var f=this,v=f.histo;if(!f._avg||g){var w,y,C,x,S=0,I=0,j=0,_=0;if(f.r1===f.r2&&f.g1===f.g2&&f.b1===f.b2)f._avg=[f.r1<<3,f.g1<<3,f.b1<<3];else{for(y=f.r1;y<=f.r2;y++)for(C=f.g1;C<=f.g2;C++)for(x=f.b1;x<=f.b2;x++)S+=w=v[c(y,C,x)]||0,I+=w*(y+.5)*8,j+=w*(C+.5)*8,_+=w*(x+.5)*8;f._avg=S?[~~(I/S),~~(j/S),~~(_/S)]:[~~(8*(f.r1+f.r2+1)/2),~~(8*(f.g1+f.g2+1)/2),~~(8*(f.b1+f.b2+1)/2)]}}return f._avg},contains:function(g){var f=this,v=g[0]>>3;return gval=g[1]>>3,bval=g[2]>>3,v>=f.r1&&v<=f.r2&&gval>=f.g1&&gval<=f.g2&&bval>=f.b1&&bval<=f.b2}},b.prototype={push:function(g){this.vboxes.push({vbox:g,color:g.avg()})},palette:function(){return this.vboxes.map(function(g){return g.color})},size:function(){return this.vboxes.size()},map:function(g){for(var f=this.vboxes,v=0;v<f.size();v++)if(f.peek(v).vbox.contains(g))return f.peek(v).color;return this.nearest(g)},nearest:function(g){for(var f,v,w,y=this.vboxes,C=0;C<y.size();C++)((v=Math.sqrt(Math.pow(g[0]-y.peek(C).color[0],2)+Math.pow(g[1]-y.peek(C).color[1],2)+Math.pow(g[2]-y.peek(C).color[2],2)))<f||f===void 0)&&(f=v,w=y.peek(C).color);return w},forcebw:function(){var g=this.vboxes;g.sort(function(y,C){return o(n(y.color),n(C.color))});var f=g[0].color;f[0]<5&&f[1]<5&&f[2]<5&&(g[0].color=[0,0,0]);var v=g.length-1,w=g[v].color;w[0]>251&&w[1]>251&&w[2]>251&&(g[v].color=[255,255,255])}},{quantize:function(g,f){if(!Number.isInteger(f)||f<1||f>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!g.length||f<2||f>256||!g.length||f<2||f>256)return!1;for(var v=[],w=new Set,y=0;y<g.length;y++){var C=g[y],x=C.join(",");w.has(x)||(w.add(x),v.push(C))}if(v.length<=f)return new a(v);var S=function(E){var M,A=new Array(32768);return E.forEach(function(O){M=c(O[0]>>3,O[1]>>3,O[2]>>3),A[M]=(A[M]||0)+1}),A}(g);S.forEach(function(){});var I=function(E,M){var A,O,P,N=1e6,B=0,q=1e6,ae=0,se=1e6,me=0;return E.forEach(function(ge){(A=ge[0]>>3)<N?N=A:A>B&&(B=A),(O=ge[1]>>3)<q?q=O:O>ae&&(ae=O),(P=ge[2]>>3)<se?se=P:P>me&&(me=P)}),new m(N,B,q,ae,se,me,M)}(g,S),j=new h(function(E,M){return o(E.count(),M.count())});function _(E,M){for(var A,O=E.size(),P=0;P<1e3;){if(O>=M||P++>1e3)return;if((A=E.pop()).count()){var N=T(S,A),B=N[0],q=N[1];if(!B)return;E.push(B),q&&(E.push(q),O++)}else E.push(A),P++}}j.push(I),_(j,.75*f);for(var R=new h(function(E,M){return o(E.count()*E.volume(),M.count()*M.volume())});j.size();)R.push(j.pop());_(R,f);for(var z=new b;R.size();)z.push(R.pop());return z}}}().quantize,l=function(c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=c.naturalWidth,this.height=this.canvas.height=c.naturalHeight,this.context.drawImage(c,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var p=function(){};return p.prototype.getColor=function(c,h){return h===void 0&&(h=10),this.getPalette(c,5,h)[0]},p.prototype.getPalette=function(c,h,m){var b=function(v){var w=v.colorCount,y=v.quality;if(w!==void 0&&Number.isInteger(w)){if(w===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");w=Math.max(w,2),w=Math.min(w,20)}else w=10;return(y===void 0||!Number.isInteger(y)||y<1)&&(y=10),{colorCount:w,quality:y}}({colorCount:h,quality:m}),T=new l(c),g=function(v,w,y){for(var C,x,S,I,j,_=v,R=[],z=0;z<w;z+=y)x=_[0+(C=4*z)],S=_[C+1],I=_[C+2],((j=_[C+3])===void 0||j>=125)&&(x>250&&S>250&&I>250||R.push([x,S,I]));return R}(T.getImageData().data,T.width*T.height,b.quality),f=s(g,b.colorCount);return f?f.palette():null},p.prototype.getColorFromUrl=function(c,h,m){var b=this,T=document.createElement("img");T.addEventListener("load",function(){var g=b.getPalette(T,5,m);h(g[0],c)}),T.src=c},p.prototype.getImageData=function(c,h){var m=new XMLHttpRequest;m.open("GET",c,!0),m.responseType="arraybuffer",m.onload=function(){if(this.status==200){var b=new Uint8Array(this.response);i=b.length;for(var T=new Array(i),g=0;g<b.length;g++)T[g]=String.fromCharCode(b[g]);var f=T.join(""),v=window.btoa(f);h("data:image/png;base64,"+v)}},m.send()},p.prototype.getColorAsync=function(c,h,m){var b=this;this.getImageData(c,function(T){var g=document.createElement("img");g.addEventListener("load",function(){var f=b.getPalette(g,5,m);h(f[0],this)}),g.src=T})},p})})(dn);var un=dn.exports,rt={},qt={};Object.defineProperty(qt,"__esModule",{value:!0});qt.default=W1;function W1(e,t,o){return`rgb(${e}, ${t}, ${o})`}var Yt={};Object.defineProperty(Yt,"__esModule",{value:!0});Yt.default=G1;function G1(e,t,o){return`#${[e,t,o].map(n=>{const a=n.toString(16);return a.length===1?`0${a}`:a}).join("")}`}Object.defineProperty(rt,"__esModule",{value:!0});rt.default=Q1;var q1=pn(qt),Y1=pn(Yt);function pn(e){return e&&e.__esModule?e:{default:e}}function Q1(e,t){switch(t){case"rgbString":return(0,q1.default)(e[0],e[1],e[2]);case"hex":return(0,Y1.default)(e[0],e[1],e[2]);default:return e}}var ot={};Object.defineProperty(ot,"__esModule",{value:!0});ot.default=Z1;function Z1(e,t=void 0){return new Promise((o,n)=>{const a=new Image;a.addEventListener("load",()=>{o(a)}),a.addEventListener("error",()=>{n(new Error(`Failed to load image's URL: ${e}`))}),a.crossOrigin=t,a.src=e})}Object.defineProperty(tt,"__esModule",{value:!0});tt.default=e0;var J1=Qt(un),K1=Qt(rt),X1=Qt(ot);function Qt(e){return e&&e.__esModule?e:{default:e}}async function e0(e,t="rgbString",o=null,n=10){const a=await(0,X1.default)(e,o),l=new J1.default().getColor(a,n);return(0,K1.default)(l,t)}Object.defineProperty(Gt,"__esModule",{value:!0});Gt.default=n0;var Qr=d,t0=r0(tt);function r0(e){return e&&e.__esModule?e:{default:e}}const hn={loading:!0,data:null,error:void 0};function o0(e,t){switch(t.type){case"getColor":return hn;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function n0(e,t="rgbString",o={}){const{crossOrigin:n=null,quality:a=10}=o,[s,l]=(0,Qr.useReducer)(o0,hn);return(0,Qr.useEffect)(()=>{l({type:"getColor"}),(0,t0.default)(e,t,n,a).then(p=>{l({type:"resolveColor",payload:p})}).catch(p=>{l({type:"rejectColor",payload:p})})},[e]),s}Object.defineProperty(et,"__esModule",{value:!0});et.default=void 0;var Zr=Zt(d),Se=Zt(cn),a0=Zt(Gt);function Zt(e){return e&&e.__esModule?e:{default:e}}const Jt=({src:e,format:t,crossOrigin:o,quality:n,children:a})=>{const s=(0,a0.default)(e,t,{crossOrigin:o,quality:n});return Zr.default.createElement(Zr.default.Fragment,null,a(s))};Jt.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Jt.propTypes={children:Se.default.any.isRequired,src:Se.default.string.isRequired,format:Se.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:Se.default.string,quality:Se.default.number};var i0=Jt;et.default=i0;var nt={},Kt={},at={};Object.defineProperty(at,"__esModule",{value:!0});at.default=d0;var s0=Xt(un),l0=Xt(rt),c0=Xt(ot);function Xt(e){return e&&e.__esModule?e:{default:e}}async function d0(e,t=2,o="rgbString",n=null,a=10){const s=await(0,c0.default)(e,n);return new s0.default().getPalette(s,t,a).map(c=>(0,l0.default)(c,o))}Object.defineProperty(Kt,"__esModule",{value:!0});Kt.default=f0;var Jr=d,u0=p0(at);function p0(e){return e&&e.__esModule?e:{default:e}}const fn={loading:!0,data:[],error:void 0};function h0(e,t){switch(t.type){case"getPalette":return fn;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function f0(e,t=2,o="rgbString",n={}){const{crossOrigin:a=null,quality:s=10}=n,[l,p]=(0,Jr.useReducer)(h0,fn);return(0,Jr.useEffect)(()=>{p({type:"getPalette"}),(0,u0.default)(e,t,o,a,s).then(c=>{p({type:"resolvePalette",payload:c})}).catch(c=>{p({type:"rejectPalette",payload:c})})},[e]),l}Object.defineProperty(nt,"__esModule",{value:!0});nt.default=void 0;var Kr=er(d),pe=er(cn),m0=er(Kt);function er(e){return e&&e.__esModule?e:{default:e}}const tr=({src:e,colorCount:t,format:o,crossOrigin:n,quality:a,children:s})=>{const l=(0,m0.default)(e,t,o,{crossOrigin:n,quality:a});return Kr.default.createElement(Kr.default.Fragment,null,s(l))};tr.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};tr.propTypes={children:pe.default.any.isRequired,src:pe.default.string.isRequired,format:pe.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:pe.default.number,crossOrigin:pe.default.string,quality:pe.default.number};var g0=tr;nt.default=g0;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return a.default}}),e.default=void 0;var t=s(et),o=s(nt),n=s(tt),a=s(at);function s(p){return p&&p.__esModule?p:{default:p}}var l=t.default;e.default=l})(nn);const x0=(e,t=500,o=134)=>`
        <svg width="${t}" height="${o}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,v0=({onImageReady:e,posterData:t,generatePoster:o,onTitleSizeAdjust:n,customFont:a})=>{const s=d.useRef(null);return d.useEffect(()=>{(async()=>{if(!o)return;const p=s.current,c=p.getContext("2d"),h=2480,m=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0;const b=async x=>{const S=new Image;return S.crossOrigin="anonymous",S.src=x,new Promise(I=>{S.onload=()=>{if(c.drawImage(S,t.marginCover,t.marginCover,h-t.marginCover*2,h-t.marginCover*2),t.useFade){let j=c.createLinearGradient(0,0,0,3e3-t.marginBackground);const _=v(t.backgroundColor);j.addColorStop(.5,`rgba(${_.r}, ${_.g}, ${_.b}, 0)`),j.addColorStop(.8,t.backgroundColor),c.fillStyle=j,c.fillRect(0,0,p.width,2500-t.marginBackground)}I()}})},T=async()=>{const x=x0(t.textColor,500,134),S=new Blob([x],{type:"image/svg+xml;charset=utf-8"}),I=URL.createObjectURL(S),j=new Image;return j.src=I,new Promise(_=>{j.onload=()=>{c.globalAlpha="0.5",c.drawImage(j,h-70-500,50,500,134),c.globalAlpha="1",URL.revokeObjectURL(I),_()}})},g=async()=>{let x=t.titleSize?parseInt(t.titleSize):230;const S=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){c.font=`bold ${x}px ${S}`;let _=c.measureText(t.albumName).width;for(;_>2480-t.marginSide*2;)x-=1,c.font=`bold ${x}px ${S}`,_=c.measureText(t.albumName).width;n(x,!0)}else c.font=`bold ${x}px ${S}`;c.fillStyle=t.textColor,t.showTracklist?c.fillText(t.albumName,t.marginSide,2500+t.marginTop):c.fillText(t.albumName,t.marginSide,2790+t.marginTop);let I=t.artistsSize?parseInt(t.artistsSize):110;c.font=`bold ${I}px ${a||"Montserrat"}`,t.showTracklist?c.fillText(t.artistsName,t.marginSide,2500+t.marginTop+I*1.3):c.fillText(t.artistsName,t.marginSide,2820+t.marginTop+I),c.font=`bold 70px ${a||"Montserrat"}`,c.fillText(t.titleRelease,t.marginSide,3310);let j=c.measureText(t.titleRelease).width;c.fillText(t.titleRuntime,j+t.marginSide+100,3310),c.globalAlpha=.7,c.font=`bold 60px ${a||"Montserrat"}`,c.fillText(t.runtime,j+t.marginSide+100,3390),c.fillText(t.releaseDate,t.marginSide,3390),c.globalAlpha=1,c.fillStyle=t.color1,c.fillRect(2045-t.marginSide,3368,145,30),c.fillStyle=t.color2,c.fillRect(2190-t.marginSide,3368,145,30),c.fillStyle=t.color3,c.fillRect(2335-t.marginSide,3368,145,30)},f=async()=>{c.fillStyle=t.textColor;let x=t.marginSide+10,S=0,I=0;const j=t.tracksSize?parseInt(t.tracksSize):50;c.font=`bold ${j}px ${a||"Montserrat"}`;const _=j,R=parseInt(t.marginTop||0),z=parseInt(t.artistsSize)?2500+R+parseInt(t.artistsSize)*1.3+130:2500+R+110*1.2+130,E=500,M=h-t.marginSide*2,A=parseInt(t.marginSide),O=z+E-10-parseInt(t.marginTop);let P=z;t.tracklist.split(`
`).forEach(N=>{if(P+_*1.3>=O){if(P=z,x=S+_*2.5+I,x>=A+M)return;I=x-_*2.5,S=0}const B=c.measureText(`${N}`).width+t.marginSide;B>S&&(S=B),c.fillText(`${N}`,x,P),P+=_*1.3})},v=x=>{const S=parseInt(x.replace("#",""),16);return{r:S>>16&255,g:S>>8&255,b:S&255}},w=x=>{const S=j=>{const _=j/255;return _<=.03928?_/12.92:Math.pow((_+.055)/1.055,2.4)};return .2126*S(x.r)+.7152*S(x.g)+.0722*S(x.b)>.179?"black":"white"},y=async()=>{const x=v(t.backgroundColor),S=w(x),I=t.textColor,j=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${S}/640/spotify:album:${t.albumID}`;let R=await(await fetch(j)).text();S=="black"?R=R.replace(/fill="#000000"/g,`fill="${I}"`):R=R.replace(/fill="#ffffff"/g,`fill="${I}"`),R=R.replace(t.backgroundColor,"transparent");const z=new Blob([R],{type:"image/svg+xml"}),E=URL.createObjectURL(z);return new Promise(M=>{const A=new Image;A.src=E,A.onload=function(){c.drawImage(A,2020-t.marginSide,3235,480,120);const O=p.toDataURL("image/png");e(O),M()}})},C=async()=>{c.fillStyle=t.backgroundColor,c.fillRect(0,2480-t.marginBackground,h,m-2480+t.marginBackground)};c.clearRect(0,0,h,m),c.fillStyle=t.backgroundColor,c.fillRect(0,0,h,m),t.useUncompressed?await b(await t.uncompressedAlbumCover):await b(t.albumCover),await C(),await g(),t.showTracklist&&await f(),t.useWatermark&&await T(),await y()})()},[o,t,e]),r.jsx("canvas",{ref:s,width:2480,height:3508,style:{display:"none"}})},b0=u.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function $({children:e,animationDelay:t=0,...o}){const[n,a]=d.useState(!1);return d.useEffect(()=>{const s=setTimeout(()=>{a(!0)},t);return()=>clearTimeout(s)},[t]),r.jsx(b0,{visible:n,animationDelay:t,...o,children:e})}const y0=u.div`
    width: 80%;
    margin-inline: auto;
`,w0=u.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,C0=u(Fo)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,k0=u.h3`
    font-size: 1.3em;
    font-weight: bold;
`,S0=u.div`
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
`,T0=u.img`
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
`,j0=u.div`
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
`,I0=u(rn)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?F`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,_0=u.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,R0=u.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,Xr=u.div`
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
`,E0=u.div`
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
`,z0=u.div`
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
`,M0=u.div`
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
`,eo=u.button`
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
`,A0=u.textarea`
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
`,L0=u.div`
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
`,to=u.div`
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
`,ro=u.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,P0=u(Kl)`
    font-size: 1.15em;
`,O0=u(Cl)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Mr`
                  animation: ${F`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Mr`
                  animation: ${F`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,$0=u.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,H0=u.p`
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
`,rr=d.forwardRef(({albumID:e,handleClickBack:t,model:o,modelParams:n,initialPosterJson:a},s)=>{const{t:l}=U(),p=d.useRef(null),[c,h]=d.useState(""),[m,b]=d.useState(""),[T,g]=d.useState("200"),[f,v]=d.useState("110"),[w,y]=d.useState("50"),[C,x]=d.useState((n==null?void 0:n.marginTop)??""),[S,I]=d.useState(160),[j,_]=d.useState((n==null?void 0:n.marginCover)??0),[R,z]=d.useState((n==null?void 0:n.marginBackground)??0),[E,M]=d.useState("#5900ff"),[A,O]=d.useState("#ff9100"),[P,N]=d.useState("#ff0000"),[B,q]=d.useState("#00ff40"),[ae,se]=d.useState("#2600ff"),[me,ge]=d.useState(!0),[ar,ir]=d.useState((n==null?void 0:n.useFade)??!0),[sr,it]=d.useState((n==null?void 0:n.showTracklist)??!1),[st,lt]=d.useState(""),[vn,ct]=d.useState(""),[bn,lr]=d.useState(""),[de,yn]=d.useState(null),[dt,cr]=d.useState("information");function dr(k){mt(!0),h(k.albumName||""),b(k.artistsName||""),g(k.titleSize||"200"),v(k.artistsSize||"110"),y(k.tracksSize||"50"),x(k.marginTop||""),I(k.marginSide||160),_(k.marginCover||0),z(k.marginBackground||0),M(k.backgroundColor||"#5900ff"),O(k.textColor||"#ff9100"),N(k.color1||"#ff0000"),q(k.color2||"#00ff40"),se(k.color3||"#2600ff"),ge(k.useWatermark!==void 0?k.useWatermark:!0),ir(k.useFade!==void 0?k.useFade:!0),it(k.showTracklist!==void 0?k.showTracklist:!1),Ae(k.useUncompressed!==void 0?k.useUncompressed:!1),lt(k.albumCover||""),ct(k.uncompressedAlbumCover||""),lr(k.customFont||""),xe(k.tracklist||""),ut(k.titleRelease||""),pt(k.releaseDate||""),ht(k.titleRuntime||""),ft(k.runtime||""),Pe()}d.useEffect(()=>{if(de){const k=new FileReader;k.onload=async H=>{const V="CustomFont",le=new FontFace(V,H.target.result);try{const Q=await le.load();document.fonts.add(Q),lr(V)}catch(Q){console.error("Erro ao carregar fonte:",Q)}},k.readAsArrayBuffer(de)}},[de]),d.useEffect(()=>{a&&dr(a)},[a]);const[ur,Ae]=d.useState(!1),[wn,Cn]=d.useState("Original"),[Le,xe]=d.useState(""),[pr,ut]=d.useState(""),[hr,pt]=d.useState(""),[fr,ht]=d.useState(""),[mr,ft]=d.useState(""),[kn,gr]=d.useState(!1),[xr,vr]=d.useState(null),[ue,Sn]=d.useState(null),[br,yr]=d.useState(!1),[wr,Tn]=d.useState(!1),[Cr,mt]=d.useState(!1),jn=k=>{g(k.target.value),yr(!0)},In=(k,H)=>{H&&!wr?(g(k),Tn(!0)):br||g(k)},_n={albumCover:st,uncompressedAlbumCover:vn,useUncompressed:ur,albumName:c,artistsName:m,titleSize:T,artistsSize:f,tracksSize:w,marginTop:C,marginSide:S,marginCover:j,marginBackground:R,titleRelease:pr,releaseDate:hr,titleRuntime:fr,runtime:mr,backgroundColor:E,textColor:A,useWatermark:me,useFade:ar,showTracklist:sr,tracklist:Le,color1:P,color2:B,color3:ae,albumID:e,userAdjustedTitleSize:br,initialTitleSizeSet:wr},[ve,Rn]=d.useState(null),[gt,kr]=d.useState(!1),[En,xt]=d.useState(!1),[zn,Sr]=d.useState(!1),[Mn,Tr]=d.useState(!1),[An,vt]=d.useState(!1);d.useEffect(()=>{if(gt){xt(!1);const k=setTimeout(()=>{vt(!0)},100);return()=>clearTimeout(k)}else vt(!1)},[gt]);const Ln=k=>{Rn(k),kr(!1),Tr(!1),Di(c,m),setTimeout(()=>{vt(!1),setTimeout(()=>{xt(!0)},300)},100)},Pe=()=>{yr(!1),xt(!1),requestAnimationFrame(()=>{if(Tr(!0),kr(!0),p.current){const k=p.current.getBoundingClientRect(),H=k.top+window.scrollY,V=k.height,Q=(window.innerHeight-V)/2;window.scrollTo({top:H-Q,behavior:"smooth"})}})},Pn=k=>{lt(URL.createObjectURL(k)),Ae(!1),ct(""),Cn(k.name),mt(!1)},bt=()=>{if(!ve)return;const k=document.createElement("a");k.href=ve,k.download=`Posterfy - ${c}.png`,k.click(),Hi(c,"poster",m)};function be(k,H){const V=k.target.getBoundingClientRect();vr({top:V.top+window.scrollY,left:V.left+window.scrollX}),Sn(H),gr(!0)}function On(){gr(!1)}const $n=()=>{const H=Le.split(`
`).map(V=>V.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());xe(H.join(`
`))},Hn=()=>{const H=Le.split(`
`).map(V=>V.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());xe(H.join(`
`))};async function Dn(k,H="us"){var V;try{let le=`https://itunes.apple.com/search?term=${encodeURIComponent(k)}&country=${H}&entity=album&limit=1`,Q=await fetch(le);if(!Q.ok)throw new Error(`HTTP Error: ${Q.status}`);let yt=await Q.json();if(!((V=yt.results)!=null&&V.length))return console.warn("No album data found."),Cr||Ae(!1),"";let Z=yt.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Z.length===2?`https://a5.mzstatic.com/us/r1000/0/${Z[1].split("/").slice(0,-1).join("/")}`:""}catch(le){return console.error("Error fetching album cover:",le.message),""}}return d.useEffect(()=>{ut(l("EDITOR_ReleaseTitle")),ht(l("EDITOR_RuntimeTitle"))},[l]),d.useEffect(()=>{const k=async()=>{var H;try{const jr=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Z=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${jr}`}})).json(),wt=Z.artists.map(ye=>ye.name).join(", ");h(Z.name),b(wt),lt((H=Z.images[0])==null?void 0:H.url),pt(Z.release_date),ct(await Dn(Z.name+" "+wt));const Bn=Z.tracks.items.reduce((ye,Oe)=>ye+Oe.duration_ms,0),Ir=Math.floor(Bn/1e3),_r=Math.floor(Ir/60),Rr=Math.floor(_r/60),Er=Ir%60,zr=_r%60,Un=Rr>0?`${Rr}h ${zr}min ${Er}s`:`${zr}min ${Er}s`;ft(Un);const Nn=Z.tracks.items.map((ye,Oe)=>(Oe===3&&typeof(n==null?void 0:n.showTracklist)>"u"&&it(!0),`${Oe+1}. ${ye.name}`));xe(Nn.join(`
`)),Sr(!0)}catch(V){console.error("Error trying to fetch album data:",V)}};a?(dr(a),Sr(!0)):(mt(!1),k())},[e]),d.useEffect(()=>{const k=H=>{H.ctrlKey&&H.key==="s"?(H.preventDefault(),Pe()):H.ctrlKey&&H.key==="d"&&(H.preventDefault(),bt())};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[ve,c,bt]),r.jsx(r.Fragment,{children:zn?r.jsxs(y0,{ref:s,children:[r.jsx(nn.Palette,{src:st,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:k})=>(d.useEffect(()=>{k&&k.length>0&&!Cr&&(M(k[0]),O(k[1]),N(k[2]),q(k[3]),se(k[4]),Pe())},[k]),null)}),r.jsxs(w0,{onClick:t,children:[r.jsx(C0,{}),r.jsx(k0,{children:l("GoBack")})]}),r.jsxs(S0,{children:[r.jsx(v0,{onImageReady:Ln,posterData:_n,generatePoster:gt,onTitleSizeAdjust:In,customFont:bn}),r.jsxs(j0,{children:[ve?r.jsx(T0,{src:ve,ref:p,visible:En}):r.jsx($0,{ref:p}),r.jsx(I0,{visible:An})]}),r.jsxs(_0,{children:[r.jsx($,{animationDelay:50,children:r.jsxs(R0,{children:[r.jsx(Xr,{$active:dt==="information",onClick:()=>cr("information"),children:l("EDITOR_InformationTab")}),r.jsx(Xr,{$active:dt==="tracklist",onClick:()=>cr("tracklist"),children:l("EDITOR_TracklistTab")})]})}),dt==="information"?r.jsxs(E0,{children:[r.jsx($,{animationDelay:0,children:r.jsx(ee,{title:l("EDITOR_AlbumName"),value:c,onChange:k=>h(k.target.value)})}),r.jsx($,{animationDelay:50,children:r.jsx(ee,{title:l("EDITOR_ArtistName"),value:m,onChange:k=>b(k.target.value)})}),r.jsx($,{animationDelay:100,children:r.jsx(ee,{title:l("EDITOR_TitleSize"),value:T,onChange:jn})}),r.jsx($,{animationDelay:150,children:r.jsx(ee,{title:l("EDITOR_ArtistSize"),value:f,onChange:k=>v(k.target.value)})}),r.jsx($,{animationDelay:200,children:r.jsx(ee,{title:l("EDITOR_TracksSize"),value:w,onChange:k=>y(k.target.value)})}),r.jsx($,{animationDelay:250,children:r.jsx(ee,{title:l("EDITOR_MarginTop"),value:C,onChange:k=>x(k.target.value)})}),r.jsx($,{animationDelay:300,children:r.jsx(ee,{title:l("EDITOR_MarginSide"),value:S,onChange:k=>I(k.target.value)})}),r.jsx($,{animationDelay:350,children:r.jsx(ee,{title:l("EDITOR_MarginCover"),value:j,onChange:k=>_(k.target.value)})}),r.jsx($,{animationDelay:375,children:r.jsx(ee,{title:l("EDITOR_MarginBackground"),value:R,onChange:k=>z(k.target.value)})}),r.jsx($,{animationDelay:400,children:r.jsx(Wr,{title:pr,value:hr,onChangeTitle:k=>ut(k.target.value),onChangeDate:k=>pt(k.target.value)})}),r.jsx($,{animationDelay:450,children:r.jsx(Wr,{title:fr,value:mr,onChangeTitle:k=>ht(k.target.value),onChangeDate:k=>ft(k.target.value)})}),r.jsx($,{animationDelay:500,children:r.jsx(ke,{title:l("EDITOR_BackgroundColor"),value:E,onClick:k=>be(k,"backgroundColor")})}),r.jsx($,{animationDelay:550,children:r.jsx(ke,{title:l("EDITOR_TextColor"),value:A,onClick:k=>be(k,"textColor")})}),r.jsx($,{animationDelay:600,children:r.jsx(ke,{title:`${l("EDITOR_Color")} 1`,value:P,onClick:k=>be(k,"color1")})}),r.jsx($,{animationDelay:650,children:r.jsx(ke,{title:`${l("EDITOR_Color")} 2`,value:B,onClick:k=>be(k,"color2")})}),r.jsx($,{animationDelay:700,children:r.jsx(ke,{title:`${l("EDITOR_Color")} 3`,value:ae,onClick:k=>be(k,"color3")})}),r.jsx($,{animationDelay:800,children:r.jsx(It,{title:l("EDITOR_Fade"),value:ar,onChange:k=>ir(k),text:l("EDITOR_FadeText")})}),r.jsx($,{animationDelay:850,children:r.jsx(It,{title:l("EDITOR_Uncompressed"),value:ur,onChange:k=>Ae(k),text:l("EDITOR_UncompressedText")})}),r.jsx($,{animationDelay:900,children:r.jsx(It,{title:l("EDITOR_Tracklist"),value:sr,onChange:k=>it(k),text:l("EDITOR_TracklistText")})}),r.jsx($,{animationDelay:950,children:r.jsx(R1,{title:l("EDITOR_Cover"),onChange:Pn,text:wn})}),r.jsx($,{animationDelay:1e3,children:r.jsx(O1,{title:l("EDITOR_Font"),text:(de==null?void 0:de.name)||l("EDITOR_DefaultFont"),onChange:yn})}),kn&&xr&&ue&&r.jsx(m1,{DefaultColor:ue==="backgroundColor"?E:ue==="textColor"?A:ue==="color1"?P:ue==="color2"?B:ae,image:st,predefinedColors:[P,B,ae,E,A],onDone:k=>{switch(ue){case"backgroundColor":M(k);break;case"textColor":O(k);break;case"color1":N(k);break;case"color2":q(k);break;case"color3":se(k);break}vr(null)},position:xr,onClose:On})]}):r.jsxs(z0,{children:[r.jsx(A0,{value:Le,onChange:k=>xe(k.target.value),placeholder:l("EDITOR_TracklistPlaceholder")}),r.jsxs(M0,{children:[r.jsx(eo,{onClick:$n,children:l("EDITOR_RemoveParentheses")}),r.jsx(eo,{onClick:Hn,children:l("EDITOR_RemoveBrackets")})]})]}),r.jsx($,{animationDelay:1050,children:r.jsxs(L0,{children:[r.jsxs(to,{onClick:bt,children:[r.jsx(P0,{}),r.jsx(ro,{children:l("EDITOR_Download")})]}),r.jsxs(to,{onClick:Pe,children:[r.jsx(O0,{$spinning:Mn}),r.jsx(ro,{children:l("EDITOR_Apply")})]})]})}),r.jsx($,{animationDelay:1100,children:r.jsxs(H0,{children:[l("EDITOR_Shortcuts"),": Ctrl+S (",l("EDITOR_Apply"),"), Ctrl+D (",l("EDITOR_Download"),")"]})})]})]})]}):r.jsx(on,{})})});rr.displayName="PosterEditor";const D0=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},F0=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},B0=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)",fillOpacity:n=1})=>{const a=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,fillOpacity:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),r.jsx("path",{fill:o,fillOpacity:.13*n,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},U0=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const n=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:o,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},N0=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,V0=u(Fo)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,W0=u.h3`
  font-size: 1.3em;
  font-weight: bold;
`,or=F`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,G0=u.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${or} 0.7s cubic-bezier(0.23, 1, 0.32, 1);

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
`,Ue=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${or} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Ne=u.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${or} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,q0=u.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,Y0=u.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function Q0({onSelectModel:e,onBack:t}){const{t:o}=U(),n={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},a={marginCover:160,useFade:!1,marginTop:20},s={marginCover:-1100,marginBackground:-1200,useFade:!1},l={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function p(h,m){$i("select_model","ModelSelector",h),e&&e(h,m)}const c=[0,.08,.16,.24];return r.jsxs(r.Fragment,{children:[r.jsxs(N0,{onClick:t,children:[r.jsx(V0,{}),r.jsx(W0,{children:o("GoBack")})]}),r.jsx(q0,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelTitle")}),r.jsx(Y0,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelText")}),r.jsxs(G0,{children:[r.jsxs(Ue,{delay:c[0],onClick:()=>p("standart",l),children:[r.jsx(D0,{width:200}),r.jsx(Ne,{delay:c[0],children:"Standard"})]}),r.jsxs(Ue,{delay:c[1],onClick:()=>p("frame",a),children:[r.jsx(U0,{width:200}),r.jsx(Ne,{delay:c[1],children:"Frame"})]}),r.jsxs(Ue,{delay:c[2],onClick:()=>p("basic",n),children:[r.jsx(F0,{width:200}),r.jsx(Ne,{delay:c[2],children:"Basic"})]}),r.jsxs(Ue,{delay:c[3],onClick:()=>p("fullcover",s),children:[r.jsx(B0,{width:200}),r.jsx(Ne,{delay:c[3],children:"Full Cover"})]})]})]})}const Z0=u.div`
    width: 100%;
`,J0=u.div`
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
`,K0=u(zs)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,X0=u(Vi)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,ed=u.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,td=u.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function rd({onSearch:e,value:t=""}){const{t:o}=U(),[n,a]=d.useState(t);d.useEffect(()=>{a(t)},[t]);const s=c=>{c.key==="Enter"&&(e(n),n.trim()&&Fr(n.trim()))},l=c=>{a(c.target.value)},p=()=>{e(n),n.trim()&&Fr(n.trim())};return r.jsx(Z0,{children:r.jsxs(J0,{role:"search","aria-label":"Album search for poster creation",children:[r.jsx(K0,{"aria-hidden":"true"}),r.jsx(ed,{}),r.jsx(td,{placeholder:o("SearchPlaceholder"),value:n,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),r.jsx(X0,{onClick:p,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const od=u.div`
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

`,nd=u.img`
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
`,ad=u.h3`
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
`,id=u.p`
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
`,sd=u.div`
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
`;function ld({title:e,artist:t,cover:o,id:n,onClick:a,animationDelay:s=0}){const[l,p]=d.useState(!1);return d.useEffect(()=>{const c=setTimeout(()=>{p(!0)},s);return()=>clearTimeout(c)},[s]),r.jsxs(od,{onClick:()=>a(n),visible:l,children:[r.jsx(nd,{src:o}),r.jsxs(sd,{children:[r.jsx(ad,{children:e}),r.jsx(id,{children:t})]})]})}const cd=u.div`
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
`,dd=u.button`
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
`,ud=u.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;function oo({query:e,onclick:t}){const{t:o}=U(),[n,a]=d.useState([]),[s,l]=d.useState(""),[p,c]=d.useState(0),[h,m]=d.useState(!0),[b,T]=d.useState(!1),[g,f]=d.useState(!1),v=20;d.useEffect(()=>{(async()=>{const I=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(I.access_token)})()},[]),d.useEffect(()=>{a([]),c(0),m(!0)},[e]),d.useEffect(()=>{const y=async(C=!1)=>{if(s){C?f(!0):T(!0);try{let x;const S=C?p:0;if(e?x=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${v}&offset=${S}`,{headers:{Authorization:`Bearer ${s}`}}):x=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${S}&limit=${v}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!x.ok){const E=await x.text();throw new Error(`Erro na API: ${E}`)}const I=await x.json(),_=I.albums.items.filter(E=>E!=null).map(E=>{var M,A;return{id:E.id,title:E.name,artist:(M=E.artists)==null?void 0:M.map(O=>O.name).join(", "),cover:(A=E.images[0])==null?void 0:A.url}});a(C?E=>[...E,..._]:_);const R=I.albums.total,z=C?n.length+_.length:_.length;m(z<R&&_.length===v)}catch(x){console.error(x)}finally{T(!1),f(!1)}}};s&&(n.length===0||p===0)&&y(!1)},[e,s]);const w=async()=>{if(!s||!h||g)return;const y=p+v;c(y);try{f(!0);let C;if(e?C=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${v}&offset=${y}`,{headers:{Authorization:`Bearer ${s}`}}):C=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${y}&limit=${v}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!C.ok){const R=await C.text();throw new Error(`Erro na API: ${R}`)}const x=await C.json(),I=x.albums.items.filter(R=>R!=null).map(R=>{var z,E;return{id:R.id,title:R.name,artist:(z=R.artists)==null?void 0:z.map(M=>M.name).join(", "),cover:(E=R.images[0])==null?void 0:E.url}});a(R=>[...R,...I]);const j=x.albums.total,_=n.length+I.length;m(_<j&&I.length===v)}catch(C){console.error(C)}finally{f(!1)}};return r.jsx(r.Fragment,{children:b&&n.length===0?r.jsx(on,{}):r.jsxs(r.Fragment,{children:[r.jsx(cd,{children:n.map((y,C)=>r.jsx(ld,{onClick:()=>t(y.id),cover:y.cover,title:y.title,artist:y.artist,id:y.id,animationDelay:C-p*100},y.id))}),h&&r.jsx(ud,{children:r.jsx(dd,{onClick:w,disabled:g,children:o(g?"LoadingMore":"LoadMore")})})]})})}const pd=({onBack:e})=>{const[t,o]=d.useState(""),[n,a]=d.useState(null),[s,l]=d.useState(!1),[p,c]=d.useState(null),[h,m]=d.useState(null),b=d.useRef(null);d.useEffect(()=>{s&&n&&b.current&&setTimeout(()=>{b.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[s,n]);function T(v){a(v),l(!0),c(null),m(null)}function g(){a(null),l(!1),c(null),m(null),e&&e()}const f=v=>{o(v)};return n&&p&&h?r.jsx(rr,{albumID:n,handleClickBack:g,model:p,modelParams:h,source:"search_creation"}):n&&s?r.jsx("div",{ref:b,children:r.jsx(Q0,{onSelectModel:(v,w)=>{c(v),m(w),l(!1)},onBack:g})}):r.jsxs(r.Fragment,{children:[r.jsx(rd,{onSearch:f,value:t}),t.trim()?r.jsx(oo,{query:t,onclick:T}):r.jsx("div",{children:r.jsx(oo,{onclick:T})})]})};function hd({loadingComplete:e}){const{t}=U(),[o,n]=d.useState(null),a=d.useRef(null),s=p=>{Ui(p.albumName||"Unknown Album",p.artistsName||"Unknown Artist",p.albumID||"","album_collection"),n(p),setTimeout(()=>{if(a.current){const c=a.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:c,behavior:"smooth"})}},100)},l=()=>{n(null)};return r.jsxs(r.Fragment,{children:[r.jsx(Wl,{showAnimation:e,onRecreate:s}),r.jsx(Me,{text:t("anchorArt"),type:1}),r.jsx(Vt,{title:t("ArtTitle"),paragraph:t("ArtParagraph")}),o?r.jsx(rr,{ref:a,albumID:o.albumID,initialPosterJson:o,handleClickBack:l}):r.jsx(pd,{}),r.jsx(bc,{}),r.jsx(hc,{}),r.jsx(sc,{}),r.jsx(zc,{})]})}function mn(e){return L({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const no=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,ao=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-top: 20px;
`,io=u.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    max-width: 450px;
`,fd=u.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 450px;
    width: 100%;
    text-align: left;
`,md=u.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,so=u.button`
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
`,lo=u.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,gd=u(Wo)`
    width: 20px;
    height: 20px;
`,xd=u(mn)`
    width: 20px;
    height: 20px;
`,vd=u.div`
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
`,co=u.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,bd=u.p`
    color: var(--textColor);
`;u.p`
    color: var(--textColor);
    font-size: 0.9em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
    font-weight: bolder;
    font-style: italic;
    opacity: 0.35;
`;const yd=u.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,wd=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Cd=u.div`
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
`,kd=u.div`
    display: none;
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        display: flex;
    }
`;function Sd(){const{t:e}=U(),t=ce(),[o]=wi(),{user:n,loading:a,loginWithGoogle:s,loginWithSpotify:l}=ze();if(d.useEffect(()=>{if(!a){if(n){t("/dashboard");return}o.get("login")==="success"&&t("/dashboard")}},[n,a,t,o]),a)return r.jsxs(no,{children:[r.jsx(Ye,{iconColor:"var(--AccentColor)"}),r.jsxs(ao,{children:[r.jsx(re,{fill:"var(--textColor)",width:"100px"}),r.jsx(io,{children:e("Loading")})]})]});const p=()=>{t("/")};return r.jsxs(no,{children:[r.jsx(Ye,{hideAccount:!0,hideLogo:!0,iconColor:"var(--AccentColor)"}),r.jsx(ao,{children:r.jsxs(yd,{children:[r.jsx(Cd,{onClick:p,children:r.jsx(re,{fill:"var(--textColor)",width:"25vw"})}),r.jsxs(wd,{children:[r.jsx(kd,{children:r.jsx(re,{fill:"var(--textColor)",width:"90px"})}),r.jsx(io,{children:e("LOGIN_Welcome")}),r.jsx(fd,{children:e("LOGIN_JoinCommunity")}),r.jsxs(md,{children:[r.jsxs(so,{onClick:s,children:[r.jsx(gd,{}),r.jsx(lo,{children:e("LOGIN_GoogleSignIn")})]}),r.jsxs(vd,{children:[r.jsx(co,{}),r.jsx(bd,{children:e("LOGIN_Or")}),r.jsx(co,{})]}),r.jsxs(so,{onClick:l,children:[r.jsx(xd,{}),r.jsx(lo,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})})]})}function Td(e){return L({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 22h1v-2h-1v-1a7.014 7.014 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.354.212-.691.566-.9A7.016 7.016 0 0 0 19 5V4h1V2H4v2h1v1a7.016 7.016 0 0 0 3.434 6.021c.354.209.566.545.566.9v.158c0 .354-.212.691-.566.9A7.016 7.016 0 0 0 5 19v1H4v2h15zM17 4v1a5.005 5.005 0 0 1-1.004 3H8.004A5.005 5.005 0 0 1 7 5V4h10zM9.45 14.702c.971-.574 1.55-1.554 1.55-2.623V12h2v.079c0 1.068.579 2.049 1.551 2.623A4.98 4.98 0 0 1 16.573 17H7.427a4.977 4.977 0 0 1 2.023-2.298z"},child:[]}]})(e)}const jd=F`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,Id=F`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,_d=F`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Rd=F`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Ed=u.div`
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
    animation: ${e=>e.isClosing?Rd:_d} 0.3s ease-in-out forwards;
`,zd=u.div`
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
    animation: ${e=>e.isClosing?Id:jd} 0.3s ease-in-out forwards;

    @media (max-width: 800px) {
        width: 80%;
    }
`,Md=u.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Ad=u.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Ld=u(Bo)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Pd=u.div`
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
`,Od=u.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,$d=u.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`,Hd=u.form`
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,uo=u.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,po=u.label`
    font-size: 0.9em;
    font-weight: bolder;
    color: var(--textColor);
    opacity: 0.8;
`,ho=u.input`
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
`,_t=u.span`
    color: #ff6b6b;
    font-size: 0.8em;
    font-weight: bolder;
`,Dd=u.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,Fd=u.button`
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
`,Bd=u.button`
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
`,Ud=u.div`
    color: #51cf66;
    font-size: 0.9em;
    font-weight: bolder;
    text-align: center;
    margin-top: 10px;
`;function Nd({isOpen:e,onClose:t,onProfileUpdate:o}){const{user:n,updateUser:a}=ze(),{t:s}=U(),[l,p]=d.useState({name:"",username:""}),[c,h]=d.useState({}),[m,b]=d.useState(!1),[T,g]=d.useState(""),[f,v]=d.useState(!1);d.useEffect(()=>{n&&p({name:n.name||"",username:n.username||""})},[n]);const w=()=>{const S={};return l.name.trim()||(S.name=s("NameIsRequired")),l.username.trim()?l.username.length<3?S.username=s("UsernameMinLength"):/^[a-zA-Z0-9]+$/.test(l.username)||(S.username=s("UsernameFormat")):S.username=s("UsernameIsRequired"),h(S),Object.keys(S).length===0},y=S=>{const{name:I,value:j}=S.target;p(_=>({..._,[I]:j})),c[I]&&h(_=>({..._,[I]:""})),T&&g("")},C=async S=>{var I,j,_,R;if(S.preventDefault(),!!w()){b(!0),g("");try{await J.updateUserProfile({name:l.name.trim(),username:l.username.trim()}),a({...n,name:l.name.trim(),username:l.username.trim()}),g(s("ProfileUpdatedSuccessfully")),o&&o(),setTimeout(()=>{x()},1500)}catch(z){console.error("Profile update failed:",z),(I=z.message)!=null&&I.includes("409")||(j=z.message)!=null&&j.includes("taken")?h({username:s("UsernameTaken")}):(_=z.message)!=null&&_.includes("400")||(R=z.message)!=null&&R.includes("invalid")?h({username:s("InvalidUsernameFormat")}):h({general:s("FailedToUpdateProfile")})}finally{b(!1)}}},x=()=>{v(!0),setTimeout(()=>{v(!1),t(),h({}),g("")},300)};return e?(document.body.style.overflow="hidden",r.jsx(Ed,{isClosing:f,children:r.jsxs(zd,{isClosing:f,children:[r.jsxs(Md,{children:[r.jsx(Od,{children:r.jsx(re,{width:25,height:25,fill:"var(--textColor)"})}),r.jsx(Ad,{children:s("EditProfile")}),r.jsx(Pd,{onClick:x,children:r.jsx(Ld,{})})]}),r.jsx($d,{}),r.jsxs(Hd,{onSubmit:C,children:[r.jsxs(uo,{children:[r.jsx(po,{htmlFor:"name",children:s("Name")}),r.jsx(ho,{type:"text",id:"name",name:"name",value:l.name,onChange:y,placeholder:s("EnterYourName"),disabled:m}),c.name&&r.jsx(_t,{children:c.name})]}),r.jsxs(uo,{children:[r.jsx(po,{htmlFor:"username",children:s("Username")}),r.jsx(ho,{type:"text",id:"username",name:"username",value:l.username,onChange:y,placeholder:s("EnterYourUsername"),disabled:m}),c.username&&r.jsx(_t,{children:c.username})]}),c.general&&r.jsx(_t,{children:c.general}),T&&r.jsx(Ud,{children:T}),r.jsxs(Dd,{children:[r.jsx(Fd,{type:"button",onClick:x,disabled:m,children:s("Cancel")}),r.jsx(Bd,{type:"submit",disabled:m,children:s(m?"Saving":"SaveChanges")})]})]})]})})):null}F`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;F`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-5px);
  }
`;u.div`
  display: none;
`;const gn=u.div`
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
`,Vd=u.div`
  position: relative;
  display: inline-block;
  &:hover ${gn} {
    opacity: 0.9;
  }
`;function fo({text:e,children:t,delay:o=0}){const[n,a]=d.useState(!1),[s,l]=d.useState({top:0,left:0}),p=h=>{const m=h.currentTarget.getBoundingClientRect();l({top:m.top+m.height/2-17,left:m.right+15}),a(!0)},c=()=>{a(!1)};return r.jsxs(Vd,{onMouseEnter:p,onMouseLeave:c,children:[r.jsx(gn,{isVisible:n,style:{top:s.top,left:s.left},children:e}),t]})}const Wd=u.div`
    display: flex;
    align-items: center;
    min-height: 85dvh;
    flex-direction: column;
`,Gd=u.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 120px;
`,qd=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
`,Yd=u.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--textColor);
    border: 3px solid var(--textColor);
`,Qd=u.h2`
    color: var(--textColor);
    font-size: 1.5em;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`,Zd=u.p`
    color: var(--textColor);
    font-size: 1em;
    font-weight: bolder;
    opacity: 0.75;
    margin-top: 3px;
`,mo=u.button`
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
`,go=u.button`
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
`;u.p`
    color: var(--textColor);
    font-size: 1.2em;
`;const Jd=u(Wo)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,Kd=u(mn)`
    width: 15px;
    height: 15px;
    fill: var(--backgroundColor);
`,xo=u.div`
    background-color: var(--textColor);
    border-radius: 20px;
    padding: 5px;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    margin-top: 2px;
    cursor: pointer;
`,Xd=u.div`
    display: flex;
    align-items: center;
    width: 100%;
`,e2=u(Td)`
    width: 100px;
    height: 100px;
    fill: var(--textColor);
    margin-top: 150px;
`,t2=u.p`
    color: var(--textColor);
    font-size: 1.35em;
    margin-top: 20px;
`,r2=u.div`
    display: flex;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`,o2=u.div`
    display: none;
    width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;function n2(){const e=ce(),{user:t,loading:o,logout:n,isAuthenticated:a}=ze(),[s,l]=d.useState(null),[p,c]=d.useState(!1),{t:h}=U();d.useEffect(()=>{if(!o&&!a){e("/login");return}a&&t&&m()},[a,o,e,t]);const m=async()=>{try{const v=await J.getUserProfile();l(v.user)}catch(v){console.error("Failed to fetch user profile:",v)}},b=async()=>{await n(),e("/login")},T=()=>{c(!0)},g=()=>{c(!1)},f=()=>{m()};return o?r.jsx(Ut,{isVisible:!0,initialFade:!0}):t?r.jsxs(Wd,{children:[r.jsx(Ye,{iconColor:"var(--AccentColor)"}),r.jsxs(Gd,{children:[(s==null?void 0:s.avatar)&&r.jsx(Yd,{src:s.avatar,alt:s.name}),r.jsxs(qd,{children:[r.jsxs(Xd,{children:[r.jsx(Qd,{children:(s==null?void 0:s.name)||t.name}),(s==null?void 0:s.hasGoogle)&&r.jsx(fo,{text:h("ConnectedToGoogle"),delay:200,children:r.jsx(xo,{children:r.jsx(Jd,{})})}),(s==null?void 0:s.hasSpotify)&&r.jsx(fo,{text:h("ConnectedToSpotify"),delay:200,children:r.jsx(xo,{children:r.jsx(Kd,{})})}),r.jsxs(r2,{children:[r.jsx(go,{onClick:T,children:h("EditProfile")}),r.jsx(mo,{onClick:b,children:h("Logout")})]})]}),r.jsxs(Zd,{children:["@",(s==null?void 0:s.username)||t.username]})]})]}),r.jsxs(o2,{children:[r.jsx(go,{onClick:T,children:h("EditProfile")}),r.jsx(mo,{onClick:b,children:h("Logout")})]}),r.jsx(e2,{}),r.jsx(t2,{children:h("NoActivityYet")}),r.jsx(Nd,{isOpen:p,onClose:g,onProfileUpdate:f})]}):null}const a2=({width:e,height:t,fillHeart:o,fillQuestion:n,pulse:a=!1,onClick:s})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[r.jsx("path",{fill:o,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),r.jsx("path",{fill:n,style:{animation:a?"pulse 2s infinite":"none",cursor:a?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),xn=document.createElement("style");xn.textContent=`
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
`;document.head.appendChild(xn);const i2="/assets/kanye-BMPu-Gq3.png",s2="/assets/runaway-DjODmQSR.mp3",l2=()=>{const e=ce(),{t}=U(),[o,n]=d.useState(0),a=d.useRef(null),[s,l]=d.useState(!1),p=()=>{n(o+1),console.log(o)},c=()=>{a.current&&(a.current.loop=!0,a.current.paused?(a.current.play(),l(!0)):(a.current.pause(),l(!1)))};return r.jsxs(c2,{playing:s,children:[r.jsx(a2,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!0,onClick:p}),r.jsxs(f2,{children:[r.jsx(Rt,{playing:s,active:o>=1}),r.jsx(Rt,{playing:s,active:o>=2}),r.jsx(Rt,{playing:s,active:o>=3})]}),r.jsx(d2,{children:t("errorTitle")}),r.jsx(u2,{children:t("errorMessage")}),r.jsx(p2,{playing:s,onClick:()=>e("/"),children:t("errorBackToHome")}),o>=3&&r.jsxs(r.Fragment,{children:[r.jsx(h2,{src:i2,alt:"Kanye",onClick:c}),r.jsx("audio",{ref:a,src:s2})]})]})},c2=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,d2=u.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,u2=u.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,p2=u.button`
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
`,h2=u.img`
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
`,f2=u.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,Rt=u.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`,m2=({children:e})=>{const t=ce(),{isAuthenticated:o,loading:n}=ze();return d.useEffect(()=>{!n&&!o&&t("/login")},[o,n,t]),n?r.jsx("div",{children:"Loading..."}):o?e:null},g2=()=>(d.useEffect(()=>{Oi()},[]),null),vo=e=>{if(!e)return"";const o=(e.replace(/\/$/,"")||"/").split("/");return o.length>2&&(o[2]=o[2].toLowerCase()),o.join("/")},nr=()=>"https://posterfy.space"+"/",x2=e=>{const t=nr(),o=vo(e),n=vo(t),a=e.includes("://www."),s=e.startsWith("http://");return a||s||o!==n},v2=()=>{const e=window.location.href,t=nr(),o=[];return x2(e)&&o.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:o.length===0,issues:o,currentUrl:e,canonicalUrl:t}},b2=()=>(d.useEffect(()=>{setTimeout(()=>{const o=[],n=document.querySelector('link[rel="canonical"]');(!n||!n.href)&&o.push("Missing canonical URL");const a=document.querySelector('meta[name="description"]');(!a||a.content.length<120)&&o.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&o.push("Title too short or missing");const s=v2();s.isValid||s.issues.forEach(c=>{o.push(`${c.type}: ${c.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&o.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||o.push("Missing structured data"),o},1e3),(()=>{const o=window.location.href;o.includes("www.")||o.startsWith("http://")})()},[]),null),y2=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:o="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(d.useEffect(()=>{const a="https://posterfy.space",s=nr(),l=a+"/albuns.png";document.title=e;const p=document.querySelector('meta[name="description"]');p&&p.setAttribute("content",t);const c=document.querySelector('meta[name="keywords"]');c&&c.setAttribute("content",o);let h=document.querySelector('link[rel="canonical"]');h?h.setAttribute("href",s):(h=document.createElement("link"),h.setAttribute("rel","canonical"),h.setAttribute("href",s),document.head.appendChild(h));const m=document.querySelector('meta[property="og:title"]');m&&m.setAttribute("content",e);const b=document.querySelector('meta[property="og:description"]');b&&b.setAttribute("content",t);const T=document.querySelector('meta[property="og:image"]');T&&T.setAttribute("content",l);const g=document.querySelector('meta[property="og:url"]');g&&g.setAttribute("content",s);const f=document.querySelector('meta[name="twitter:title"]');f&&f.setAttribute("content",e);const v=document.querySelector('meta[name="twitter:description"]');v&&v.setAttribute("content",t);const w=document.querySelector('meta[name="twitter:image"]');w&&w.setAttribute("content",l);const y={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:a+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},C=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');C&&C.remove();const x=document.createElement("script");x.type="application/ld+json",x.id="dynamic-structured-data",x.innerHTML=JSON.stringify(y),document.head.appendChild(x)},[e,t,o]),null);function w2(){const{pathname:e}=ne(),[t,o]=d.useState(!1),[n,a]=d.useState(!1);return d.useEffect(()=>{o(!0),a(!0),window.scrollTo(0,0);const s=setTimeout(()=>{o(!1),setTimeout(()=>{a(!1)},300)},2e3);return()=>clearTimeout(s)},[e]),n?r.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,opacity:t?1:0,transition:"opacity 0.3s ease-out",pointerEvents:t?"auto":"none"},children:r.jsx(Ut,{isVisible:!0})}):null}function C2(){const[e,t]=d.useState(!0),[o,n]=d.useState(!1);return Ni(),d.useEffect(()=>Ri(),[]),d.useEffect(()=>{const a=setTimeout(()=>{t(!1),setTimeout(()=>{n(!0)},1e3)},1100);return()=>clearTimeout(a)},[]),d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),r.jsx(Ei,{children:r.jsx(cs,{children:r.jsxs(hs,{children:[r.jsx(y2,{}),r.jsx(b2,{}),r.jsx(g2,{}),r.jsxs(gi,{children:[r.jsx(w2,{}),r.jsxs(Ga,{children:["              ",r.jsx(ie,{path:"/",element:r.jsx(Tt,{showNavbar:!0,showFooter:!0}),children:r.jsx(ie,{index:!0,element:r.jsx(hd,{loadingComplete:o})})}),r.jsx(ie,{path:"/login",element:r.jsx(Tt,{showNavbar:!1,showFooter:!1}),children:r.jsx(ie,{index:!0,element:r.jsx(Sd,{})})}),r.jsx(ie,{path:"/dashboard",element:r.jsx(Tt,{showNavbar:!0,showFooter:!0}),children:r.jsx(ie,{index:!0,element:r.jsx(m2,{children:r.jsx(n2,{})})})}),r.jsx(ie,{path:"*",element:r.jsx(l2,{})})]})]}),r.jsx(Ut,{isVisible:e})]})})})}Gn.use(qn).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
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
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"音乐和设计。",LOGIN_JoinCommunity:"加入我们并创建惊人的海报。",Logout:"退出登录",EditProfile:"编辑个人资料",ConnectedToGoogle:"已连接到 Google",ConnectedToSpotify:"已连接到 Spotify",NoActivityYet:"还没有活动",Name:"名称",Username:"用户名",EnterYourName:"输入您的姓名",EnterYourUsername:"输入您的用户名",NameIsRequired:"名称是必需的",UsernameIsRequired:"用户名是必需的",UsernameMinLength:"用户名必须至少3个字符",UsernameFormat:"用户名只能包含字母和数字",UsernameTaken:"用户名已被使用",InvalidUsernameFormat:"用户名格式无效",FailedToUpdateProfile:"更新个人资料失败。请重试。",ProfileUpdatedSuccessfully:"个人资料更新成功！",Cancel:"取消",SaveChanges:"保存更改",Saving:"保存中..."}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const o=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(o)?o:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});wo(document.getElementById("root")).render(r.jsx(d.StrictMode,{children:r.jsx(C2,{})}));
